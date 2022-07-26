import './App.css';

import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
