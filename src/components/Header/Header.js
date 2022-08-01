import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';
import logo from '../../images/header_logo.svg';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header(props) {
  const location = useLocation();
  const isMain = location.pathname === '/' ? true : false;

  // TODO: setTimeout чтобы часто не отрисовывать
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 768 ? true : false;
  const updatetWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updatetWindowWidth);
    return () => window.removeEventListener('resize', updatetWindowWidth);
  });

  const [burgerState, setBurgerState] = useState(false);
  const toggleBurger = () => {setBurgerState(!burgerState)}

  return (
    <header className={isMain ? 'header header_type_blue' : 'header header_type_white'}>
      <NavLink to='/' className='header__logo-link'>
        <img className='header__logo' src={logo} alt='Логотип'/>
      </NavLink>
      { isMobile ? <BurgerMenu burgerState={ burgerState } toggleBurger={ toggleBurger } /> : <Navigation/> }
    </header>
  )
}

export default Header;