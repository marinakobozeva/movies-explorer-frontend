import './App.css';

import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom'

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import MoviesApi from '../../utils/MoviesApi';
import MainApi from '../../utils/MainApi';

import { updateMoviesPoster } from '../../utils/MoviesToolbox';

// TODO: добавить красивые обработчики ошибок (в секции catch)
// TODO: в профиль добавить popup (text?) после успешного редактирования

function App() {
  const history = useHistory();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [profileMessage, setProfileMessage] = useState('');

  const [moviesArray, setMoviesArray] = useState([]);
  const [listHidden, setListHidden] = useState(true);
  const [listError, setListError] = useState(null);
  const [cachedQuery, setCachedQuery] = useState('');
  const [cachedOnlyShorts, setCachedOnlyShorts] = useState(false);

  const [savedMoviesArray, setSavedMoviesArray] = useState([]);

  //---------- СОХРАНЕННЫЕ ФИЛЬМЫ
  useEffect(() => {
    if (loggedIn) {
      MainApi.getSavedMovies()
      .then((movies) => {
        const updatedMovies = updateMoviesPoster(movies, MoviesApi.options.baseUrl);
        setSavedMoviesArray(updatedMovies)
      })
      .catch((message) => {
        console.log(message)
      })
    }
  }, [loggedIn])

  const updateSaveState = (moviesArray, savedMoviesArray) => {
    const newMoviesArray = [];
    const savedIds = [];

    savedMoviesArray.forEach((savedMovie) => {
      savedIds.push(savedMovie.movieId);
    })

    moviesArray.forEach((movie) => {
      movie['saved'] = savedIds.includes(movie.id);
      newMoviesArray.push(movie)
    })
    return newMoviesArray;
  }

  //---------- ФИЛЬМЫ
  // Один раз при монтировании смотрим, есть ли фильмы и запрос в локальном хранилище
  useEffect(() => {
    const bufMovies = JSON.parse(localStorage.getItem('moviesArray')) || [];
    setListHidden(bufMovies.length === 0);
    setMoviesArray(bufMovies);

    const bufQuery = localStorage.getItem('cachedQuery') || '';
    setCachedQuery(bufQuery);

    const bufOnlyShorts = localStorage.getItem('cachedOnlyShorts') || 'false';
    setCachedOnlyShorts(bufOnlyShorts === 'true');
  }, [loggedIn])

  useEffect(() => {
    localStorage.setItem('moviesArray', JSON.stringify(moviesArray));
  }, [moviesArray])

  useEffect(() => {
    localStorage.setItem('cachedOnlyShorts', cachedOnlyShorts)
  }, [cachedOnlyShorts])

  useEffect(() => {
    localStorage.setItem('cachedQuery', cachedQuery)
  }, [cachedQuery])

  const onOnlyShorts = (onlyShorts) => {
    setCachedOnlyShorts(onlyShorts);
  }

  const onSearch = (query, onlyShorts) => {
    setIsLoading(true);
    MoviesApi.getMovies()
      .then((response) => {
        const updatedMovies = updateMoviesPoster(response, MoviesApi.options.baseUrl);
        const saveStateMovies = updateSaveState(updatedMovies, savedMoviesArray);
        setMoviesArray(saveStateMovies);
        setCachedQuery(query);
        setCachedOnlyShorts(onlyShorts);
        setIsLoading(false);
        setListHidden(false);
        setListError(null);
      })
      .catch((message) => {
        console.log(message)
        setIsLoading(false);
        setListHidden(false);
        setListError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте еще раз')
      })
  }

  //---------- ВЗАИМОДЕЙСТВИЕ С КАРТОЧКОЙ
  const onSaveClick = (movie) => {
    MainApi.saveMovie(movie)
      .then((movie) => {
        const updateSavedMovies = [movie, ...savedMoviesArray];
        const updateMovies = updateSaveState(moviesArray, updateSavedMovies);
        setSavedMoviesArray(updateSavedMovies);
        setMoviesArray(updateMovies);
      })
      .catch((message) => {
        console.log(message);
      })
  }

  const onDeleteClick = (movie) => {
    MainApi.deleteMovie(movie._id)
      .then((response) => {
        const updateSavedMovies = savedMoviesArray.filter((savedMovie) => savedMovie._id !== response._id);
        const updateMovies = updateSaveState(moviesArray, updateSavedMovies);
        setSavedMoviesArray(updateSavedMovies);
        setMoviesArray(updateMovies);
      })
      .catch((message) => {
        console.log(message);
      })
  }

  //---------- РЕГИСТРАЦИЯ И АВТОРИЗАЦИЯ
  useEffect(() => {
    const path = location.pathname;
    const token = localStorage.getItem('token');
    if (token) {
      MainApi.getUserInfo()
        .then((user) => {
          setCurrentUser(user);
          setLoggedIn(true);
          history.push(path)
        })
        .catch((message) => {
          console.log(message)
          history.push('/')
        })
    }
  }, [])

  const onLogin = (email, password) => {
    MainApi.signIn(email, password)
      .then((tokenInfo) => {
        localStorage.setItem('token', tokenInfo.token);
        return MainApi.getUserInfo()
      })
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((message) => {
        console.log(message);
      })
  }

  const onRegistration = (name, email, password) => {
    MainApi.signUp(name, email, password)
      .then((response) => {onLogin(email, password)})
      .catch((message) => {
        console.log(message);
      })
  }

  const onSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('moviesArray');
    localStorage.removeItem('cachedQuery');
    localStorage.removeItem('cachedOnlyShorts');
    setCurrentUser({});
    setLoggedIn(false);
    history.push('/')
  }

  //---------- ИЗМЕНЕНИЕ ДАННЫХ ПРОФИЛЯ
  const onUserInfoUpdate = (name, email) => {
    MainApi.changeUserInfo(name, email)
      .then((user) => {
        setCurrentUser(user);
        setProfileMessage('Изменения сохранены');
      })
      .catch((message) => {
        console.log(message);
        setProfileMessage('Во время обновления данных произошла ошибка...');
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
          <Header loggedIn={loggedIn} />
        </Route>
          <Switch>
            <Route path='/signup'>
              <Register onRegistration={onRegistration} />
            </Route>
            <Route path='/signin'>
              <Login onLogin={onLogin} />
            </Route>
            <ProtectedRoute loggedIn={loggedIn} path='/profile'>
              <Profile
                profileMessage={profileMessage}
                onSignOut={onSignOut}
                onUserInfoUpdate={onUserInfoUpdate} />
            </ProtectedRoute>
            <ProtectedRoute loggedIn={loggedIn} path='/movies'>
              <Movies
                onOnlyShorts={onOnlyShorts}
                onSearch={onSearch}
                onSaveClick={onSaveClick}
                isLoading={isLoading}
                listHidden={listHidden}
                listError={listError}
                cachedQuery={cachedQuery}
                cachedOnlyShorts={cachedOnlyShorts}
                moviesArray={moviesArray} />
            </ProtectedRoute>
            <ProtectedRoute loggedIn={loggedIn} path='/saved-movies'>
              <SavedMovies onDeleteClick={onDeleteClick} moviesArray={savedMoviesArray} />
            </ProtectedRoute>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route component={NotFound} />
          </Switch>
          <Route exact path={['/', '/movies', '/saved-movies']}>
            <Footer />
          </Route>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
