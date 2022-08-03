import React from 'react';

import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './Register.css';
import logo from '../../images/logo.svg';

import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Register(props) {
  const onRegistration = props.onRegistration;

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();
    onRegistration(values.name, values.email, values.password);
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
            name='name'
            placeholder='Имя'
            className='register__input register__input_type_name'
            maxLength='40'
            minLength='2'
            onChange={handleChange}
            value={values.name || ''}
            required/>
          <span className="register__form-error">{errors.name}</span>
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
            onChange={handleChange}
            value={values.email || ''}
            required/>
          <span className="register__form-error">{errors.email}</span>
        </div>
        <div className='register__form-field'>
          <p className='register__form-caption'>Пароль</p>
          <input
            type='password'
            name='password'
            placeholder='Пароль'
            className='register__input register__input_type_name'
            minLength='2'
            onChange={handleChange}
            value={values.password || ''}
            required/>
          <span className="register__form-error">{errors.password}</span>
        </div>
        <button type='submit' onClick={handleSubmit} className={`register__button ${isValid && 'register__button_type_active'}`} disabled={!isValid}>Зарегистрироваться</button>
      </form>
      <div className='register__caption'>
        <p className='register__caption-text'>Уже зарегистированы?</p>
        <NavLink to='/signin' className='register__caption-link'>Войти</NavLink>
      </div>
    </div>
  )
}


export default withRouter(Register);
