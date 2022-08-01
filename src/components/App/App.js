import './App.css';

import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useState } from 'react';

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

import { filterByQuery, updateMoviesPoster } from '../../utils/MoviesToolbox';

// TODO: добавить красивые обработчики ошибок (в секции catch)

function App() {
  // TODO: заменить потом
  const [loggedIn, setLoggedIn] = useState(true);
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

  return (
    <div className='app'>
      <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
        <Header />
      </Route>
        <Switch>
          <Route path='/404'>
            <NotFound />
          </Route>
          <Route path='/signup'>
            <Register />
          </Route>
          <Route path='/signin'>
            <Login />
          </Route>
          <ProtectedRoute loggedIn={loggedIn} path='/profile'>
            <Profile />
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
  );
}

export default App;
