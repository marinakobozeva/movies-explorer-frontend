import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

import './Profile.css';

function Profile(props) {
  const onSignOut = props.onSignOut;
  const onUserInfoUpdate = props.onUserInfoUpdate;
  const profileMessage = props.profileMessage;
  const currentUser = useContext(CurrentUserContext);

  const { values, errors, isValid, handleChange, setValues } = useFormWithValidation();

  useEffect(() => {
    setValues(currentUser);
    // setIsValid(true);
  }, [currentUser])

  const handleSignOut = (event) => {
    event.preventDefault();
    onSignOut();
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    onUserInfoUpdate(values.name, values.email);
  }

  return (
    <div className='profile'>
      <h2 className="profile__title"> Привет,
      {' '}
      {currentUser.name}
      {' '}
      !</h2>
      <form className='profile__form' onSubmit={handleSubmitForm}>
        <div className='profile__form-field'>
            <p className='profile__form-caption'>Имя</p>
            <input
              required
              type='text'
              name='name'
              maxLength='40'
              minLength='2'
              onChange={handleChange}
              className='profile__input profile__input_type_name'
              value={values.name || ''} />
        </div>
        <span className="profile__form-error">{errors.name}</span>
        <span className='profile__bar'></span>
        <div className='profile__form-field'>
            <p className='profile__form-caption'>E-mail</p>
            <input
              required
              type='email'
              name='email'
              onChange={handleChange}
              className='profile__input profile__input_type_email'
              value={values.email || ''} />
        </div>
        <span className="profile__form-error">{errors.email}</span>
        <p className='profile__form-message'>{profileMessage || ''}</p>
        <button
          type='submit'
          className={`profile__edit-btn ${isValid ? 'profile__edit-btn_type_active' : ''}`}>Редактировать</button>
      </form>
      <button onClick={handleSignOut} type='submit' className='profile__exit-btn profile-btn'>Выйти из аккаунта</button>
    </div>
  )
}

export default Profile;
