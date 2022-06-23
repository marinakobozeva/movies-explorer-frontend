import React from 'react';
import { withRouter } from 'react-router-dom';

import './Login.css';

function Login() {
  return (
    <div className='login'>
      <img className='login__icon' src={''} alt='Иконка'/>
      <h1 className='login__title'>Рады видеть!</h1>
      <form className='login__form'>
        <div className='login__form-field'>
          <input type='email' name='email' placeholder='Email' className='login__input login__input_type_email'/>
          <input type='password' name='password' placeholder='Пароль'  className='login__input login__input_type_password'/>
        </div>
        <button type='submit' className='login__button'>Войти</button>
      </form>
    </div>
  )
}


export default withRouter(Login);
