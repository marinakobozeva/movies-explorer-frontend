import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './Header.css';
import logo from '../../images/header_logo.svg';
import accountIcon from '../../images/account-icon.svg';

function Header(props) {
  const location = useLocation();
  // const isLogged = props.isLogged;
  const isLogged = true;

  let isCredentials = false;
  if ((location.pathname === '/signin') || (location.pathname === '/signup')) {
    isCredentials = true;
  }

  let isMain = false;
  if (location.pathname === '/') {
    isMain = true;
  }

  const renderContent = (isLogged) => {
    return (
      <div className='header__buttons'>
        { !isLogged ? <NavLink to='/signup' className='header__button header__button_type_signup'>Регистрация</NavLink> : '' }
        { !isLogged ? <NavLink to='/signin' className='header__button header__button_type_signin'>Войти</NavLink> : '' }
        { isLogged ? <NavLink to='/movies' className='header__button header__button_type_movies'>Фильмы</NavLink> : ''}
        { isLogged ? <NavLink to='/saved-movies' className='header__button header__button_type_saved-movies'>Сохранённые фильмы</NavLink> : ''}
        { isLogged ?
          <NavLink to='/profile' className='header__button header__button_type_account'>
            <img src={accountIcon} alt='Иконка человечка'/>
            <p className='header__button-title_type_account'>Аккаунт</p>
          </NavLink> : ''}
      </div>
    )
  }

  return (
    <header className={isMain ? 'header header_type_blue' : 'header header_type_white'}>
      <NavLink to='/' className='header__logo-link'>
        <img className='header__logo' src={logo} alt='Логотип'/>
      </NavLink>
      {isCredentials ? '' : renderContent(isLogged)}
    </header>
  )
}

export default Header;