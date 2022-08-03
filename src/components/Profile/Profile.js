import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';

function Profile(props) {
  const onSignOut = props.onSignOut;
  const onUserInfoUpdate = props.onUserInfoUpdate;
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  const handleSignOut = (event) => {
    event.preventDefault();
    onSignOut();
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    onUserInfoUpdate(name, email);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
            <input onChange={handleNameChange} className='profile__input profile__input_type_name' value={name}></input>
        </div>
        <span className="profile__form-error"></span>
        <span className='profile__bar'></span>
        <div className='profile__form-field'>
            <p className='profile__form-caption'>E-mail</p>
            <input onChange={handleEmailChange} className='profile__input profile__input_type_email' value={email}></input>
        </div>
        <span className="profile__form-error"></span>
        <span className="profile__form-edit"></span>
        <button type='submit' className='profile__edit-btn profile-btn'>Редактировать</button>
      </form>
      <button onClick={handleSignOut} type='submit' className='profile__exit-btn profile-btn'>Выйти из аккаунта</button>
    </div>
  )
}

export default Profile;
