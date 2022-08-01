import React from 'react';
import { useState } from 'react';

import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './Register.css';
import logo from '../../images/logo.svg';

function Register(props) {
  const onRegistration = props.onRegistration;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegistration(name, email, password);
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className='register'>
      <NavLink to='/'  className='register__link header__logo-link'>
        <img className='register__icon'src={logo} alt='Иконка'/>
      </NavLink>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form className='register__form' onSubmit={handleSubmit}>
         <div className='register__form-field'>
          <p className='register__form-caption'>Имя</p>
          <input
            type='text'
            name='text'
            placeholder='Имя'
            className='register__input register__input_type_name'
            maxLength='40'
            minLength='2'
            onChange={handleNameChange}
            value={name}
            required/>
          <span className="register__form-error"></span>
        </div>
        <div className='register__form-field'>
          <p className='register__form-caption'>E-mail</p>
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='register__input register__input_type_email'
            maxLength='40'
            minLength='2'
            onChange={handleEmailChange}
            value={email}
            required/>
          <span className="register__form-error"></span>
        </div>
        <div className='register__form-field'>
          <p className='register__form-caption'>Пароль</p>
          <input
            type='password'
            name='password'
            placeholder='Пароль'
            className='register__input register__input_type_password'
            maxLength='40'
            minLength='2'
            onChange={handlePasswordChange}
            value={password}
            required/>
          <span className="register__form-error">Что-то пошло не так...</span>
        </div>
      </form>
      <button type='submit' className='register__button'>Зарегистрироваться</button>
      <div className='register__caption'>
        <p className='register__caption-text'>Уже зарегистированы?</p>
        <NavLink to='/signin' className='register__caption-link'>Войти</NavLink>
      </div>
    </div>
  )
}


export default withRouter(Register);
