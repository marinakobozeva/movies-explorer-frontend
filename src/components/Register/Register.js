import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './Register.css';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <div className='register'>
      <NavLink to='/'  className='register__link header__logo-link'>
        <img className='register__icon'src={logo} alt='Иконка'/>
      </NavLink>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form className='register__form'>
         <div className='register__form-field'>
          <p className='register__form-caption'>Имя</p>
          <input type='text' name='text' placeholder='Имя'  className='register__input register__input_type_name'/>
          <span className="register__form-error"></span>
        </div>
        <div className='register__form-field'>
          <p className='register__form-caption'>E-mail</p>
          <input type='email' name='email' placeholder='Email' className='register__input register__input_type_email'/>
          <span className="register__form-error"></span>
        </div>
        <div className='register__form-field'>
          <p className='register__form-caption'>Пароль</p>
          <input type='password' name='password' placeholder='Пароль'  className='register__input register__input_type_password'/>
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
