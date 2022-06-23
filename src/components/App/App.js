import './App.css';

import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';

function App() {
  return (
    <Switch>
      <Route path='/signin'>
        <Login />
      </Route>
      <Route path='/'>
        <Header />
        <Main />
        <Footer />
      </Route>

    </Switch>
  );
}

export default App;
