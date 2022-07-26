import React from 'react';
import { withRouter } from 'react-router-dom';

import './Register.css';
// import logo from '../../images/logo.svg';

function Register() {
  return (
    <div className='register'>
      <img className='register__icon' src={''} alt='Иконка'/>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form className='register__form'>
         <div className='register__form-field'>
          <p className='register__form-caption'>Имя</p>
          <input type='text' name='text' placeholder='Имя'  className='register__input register__input_type_name'/>
        </div>
        <div className='register__form-field'>
          <p className='register__form-caption'>E-mail</p>
          <input type='email' name='email' placeholder='Email' className='register__input register__input_type_email'/>
        </div>
        <div className='register__form-field'>
          <p className='register__form-caption'>Пароль</p>
          <input type='password' name='password' placeholder='Пароль'  className='register__input register__input_type_password'/>
        </div>
      </form>
      <button type='submit' className='register__button'>Зарегистрироваться</button>
      <div className='register__caption'>
        <p className='register__caption-text'>Уже зарегистированы?</p>
        <a className='register__caption-link'>Войти</a>
      </div>
    </div>
  )
}


export default withRouter(Register);
