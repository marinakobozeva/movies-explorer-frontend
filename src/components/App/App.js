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

import { filterByQuery, updateMoviesPoster } from '../../utils/MoviesToolbox';

// TODO: добавить красивые обработчики ошибок (в секции catch)
// TODO: в профиль добавить popup (text?) после успешного редактирования

function App() {
  const history = useHistory();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [moviesArray, setMoviesArray] = useState([]);

  const onSearch = (query) => {
    MoviesApi.getMovies()
      .then((response) => {
        const filteredMovies = filterByQuery(response, query, ['nameRU', 'nameEN']);
        const updatedMovies = updateMoviesPoster(filteredMovies, MoviesApi.options.baseUrl)
        console.log(updatedMovies);
        setMoviesArray(updatedMovies);
      })
      .catch((message) => {
        console.log(message)
      })
  }

  const onMovieSave = (movie) => {
    console.log(`Movie ${movie.id} saved!`)
  }

  //---------- РЕГИСТРАЦИЯ И АВТОРИЗАЦИЯ
  useEffect(() => {
    const path = location.pathname;
    const token = localStorage.getItem('token');
    if (token) {
      MainApi.getUserInfo(token)
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
        return MainApi.getUserInfo(tokenInfo.token)
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
    setCurrentUser({});
    setLoggedIn(false);
    history.push('/')
  }

  //---------- ИЗМЕНЕНИЕ ДАННЫХ ПРОФИЛЯ
  const onUserInfoUpdate = (name, email) => {
    MainApi.changeUserInfo(name, email)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((message) => {
        console.log(message);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
          <Header />
        </Route>
          <Switch>
            <Route path='/404'>
              <NotFound />
            </Route>
            <Route path='/signup'>
              <Register onRegistration={onRegistration} />
            </Route>
            <Route path='/signin'>
              <Login onLogin={onLogin} />
            </Route>
            <ProtectedRoute loggedIn={loggedIn} path='/profile'>
              <Profile onSignOut={onSignOut} onUserInfoUpdate={onUserInfoUpdate}/>
            </ProtectedRoute>
            <ProtectedRoute loggedIn={loggedIn} path='/movies'>
              <Movies onSearch={onSearch} onMovieSave={onMovieSave} moviesArray={moviesArray} />
            </ProtectedRoute>
            <ProtectedRoute loggedIn={loggedIn} path='/saved-movies'>
              <SavedMovies />
            </ProtectedRoute>
            <Route path='/'>
              <Main />
            </Route>
          </Switch>
          <Route exact path={['/', '/movies', '/saved-movies']}>
            <Footer />
          </Route>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
