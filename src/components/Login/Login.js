import React from 'react';
import { withRouter } from 'react-router-dom';

import './Login.css';
// import logo from '../../images/logo.svg';

function Login() {
  return (
    <div className='login'>
      <img className='login__icon' src={''} alt='Иконка'/>
      <h1 className='login__title'>Рады видеть!</h1>
      <form className='login__form'>
        <div className='login__form-field'>
          <p className='login__form-caption'>E-mail</p>
          <input type='email' name='email' placeholder='Email' className='login__input login__input_type_email'/>
        </div>
        <div className='login__form-field'>
          <p className='login__form-caption'>Пароль</p>
          <input type='password' name='password' placeholder='Пароль'  className='login__input login__input_type_password'/>
        </div>

      </form>
      <button type='submit' className='login__button'>Войти</button>
      <div className='login__caption'>
        <p className='login__caption-text'>Ещё не зарегистрированы?</p>
        <a className='login__caption-link'>Регистрация</a>
      </div>
    </div>
  )
}


export default withRouter(Login);
