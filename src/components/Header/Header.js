import React from 'react';

import './Header.css';

function Header() {
  return (
    <>
      <img className='header__logo' src='' alt=''/>
      <div className='header__buttons'>
        <button className='header__button header__button_type_signup'>Регистрация</button>
        <button className='header__button header__button_type_signin'>Войти</button>
      </div>
    </>
  )
}

export default Header;