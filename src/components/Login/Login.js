import React from 'react';

import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './Login.css';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Login(props) {
  const onLogin = props.onLogin;

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(values.email, values.password);
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
            onChange={handleChange}
            value={values.email || ''}
            required/>
          <span className="login__form-error">{errors.email}</span>
        </div>
        <div className='login__form-field'>
          <p className='login__form-caption'>Пароль</p>
          <input
            type='password'
            name='password'
            placeholder='Пароль'
            className='login__input login__input_type_password'
            maxLength='40'
            onChange={handleChange}
            value={values.password || ''}
            minLength='2'
            required/>
          <span className="login__form-error">{errors.password}</span>
        </div>
        <button type='submit' onClick={handleSubmit} className={`login__button ${isValid && 'login__button_type_active'}`} disabled={!isValid}>Войти</button>
      </form>
      <div className='login__caption'>
        <p className='login__caption-text'>Ещё не зарегистрированы?</p>
        <NavLink to='/signup' className='login__caption-link'>Регистрация</NavLink>
      </div>
    </div>
  )
}


export default withRouter(Login);
