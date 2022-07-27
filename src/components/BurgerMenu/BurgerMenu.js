import React from 'react';
import { NavLink } from 'react-router-dom';

import './BurgerMenu.css';
import accountIcon from '../../images/account-icon.svg';

function BurgerMenu(props) {
  // const isLogged = props.isLogged;

  const burgerState = props.burgerState;
  const toggleBurger = props.toggleBurger;

  const handleBurgerClick = (event) => {
    event.stopPropagation();
    toggleBurger();
  }

  const renderBurgerContent = () => {
    return (
      <div className='burger-menu__overlay'>
        <div className='burger-menu__content'>
          <button onClick={handleBurgerClick} className='burger-menu__close-btn'></button>
            <div className='burger-menu__links'>
              <div className='burger-menu__text-links'>
                <NavLink className='burger-menu__link'to='/'>Главная</NavLink>
                <NavLink className='burger-menu__link burger-menu__link_type_active'to='/movies'>Фильмы</NavLink>
                <NavLink className='burger-menu__link'to='/saved-movies'>Сохранённые фильмы</NavLink>
              </div>
              <NavLink to='/profile' className='burger-menu__link_type_account header__button header__button_type_account '>
                <img src={accountIcon} alt='Иконка человечка'/>
                <p className='header__button-title_type_account'>Аккаунт</p>
              </NavLink>
            </div>
        </div>
      </div>
    )
  }

  return (
    <div className='header__buttons_type_burger'>
      <button className='burger-menu__btn' onClick={handleBurgerClick}>
          <span className='burger-menu__span'></span>
          <span className='burger-menu__span'></span>
          <span className='burger-menu__span'></span>
      </button>
      {burgerState ? renderBurgerContent() : ''}
    </div>
  )
}

export default BurgerMenu;