import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './Login.css';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <div className='login'>
      <NavLink to='/'  className='logogin__link header__logo-link'>
        <img className='login__icon'src={logo} alt='Иконка'/>
      </NavLink>
      <h1 className='login__title'>Рады видеть!</h1>
      <form className='login__form'>
        <div className='login__form-field'>
          <p className='login__form-caption'>E-mail</p>
          <input type='email' name='email' placeholder='Email' className='login__input login__input_type_email'/>
          <span className="login__form-error"></span>
        </div>
        <div className='login__form-field'>
          <p className='login__form-caption'>Пароль</p>
          <input type='password' name='password' placeholder='Пароль'  className='login__input login__input_type_password'/>
          <span className="login__form-error">Что-то пошло не так...</span>
        </div>

      </form>
      <button type='submit' className='login__button'>Войти</button>
      <div className='login__caption'>
        <p className='login__caption-text'>Ещё не зарегистрированы?</p>
        <NavLink to='/signup' className='login__caption-link'>Регистрация</NavLink>
      </div>
    </div>
  )
}


export default withRouter(Login);
