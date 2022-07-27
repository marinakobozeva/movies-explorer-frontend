import './App.css';

import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {


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
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
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
