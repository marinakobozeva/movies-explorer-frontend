import React from 'react';
import { NavLink } from 'react-router-dom';

import accountIcon from '../../images/account-icon.svg';


function Navigation(props) {
  // const isLogged = props.isLogged;
  const isLogged = true;

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

export default Navigation;
