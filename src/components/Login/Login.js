import React from 'react';
import { useState } from 'react';

import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './Login.css';
import logo from '../../images/logo.svg';

function Login(props) {
  const onLogin = props.onLogin;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email, password)
  }

  return (
    <div className='login'>
      <NavLink to='/'  className='logogin__link header__logo-link'>
        <img className='login__icon'src={logo} alt='Иконка'/>
      </NavLink>
      <h1 className='login__title'>Рады видеть!</h1>
      <form className='login__form' onSubmit={handleSubmit}>
        <div className='login__form-field'>
          <p className='login__form-caption'>E-mail</p>
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='login__input login__input_type_email'
            maxLength='40'
            minLength='2'
            onChange={handleEmailChange}
            value={email}
            required/>
          <span className="login__form-error"></span>
        </div>
        <div className='login__form-field'>
          <p className='login__form-caption'>Пароль</p>
          <input
            type='password'
            name='password'
            placeholder='Пароль'
            className='login__input login__input_type_password'
            maxLength='40'
            onChange={handlePasswordChange}
            value={password}
            minLength='2'
            required/>
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
