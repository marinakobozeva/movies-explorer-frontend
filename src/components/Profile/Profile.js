import React from 'react';

import './Profile.css';

function Profile() {
  return (
    <div className='profile'>
      <h2 className="profile__title">Привет, Марина!</h2>
      <form className='profile__form'>
        <div className='profile__form-field'>
            <p className='profile__form-caption'>Имя</p>
            <p className='profile__input profile__input_type_name'>Марина</p>
        </div>
        <span className='profile__bar'></span>
        <div className='profile__form-field'>
            <p className='profile__form-caption'>E-mail</p>
            <p className='profile__input profile__input_type_email'>marina@ya.ru</p>
        </div>
        <button className='profile__edit-btn profile-btn'>Редактировать</button>
        <button className='profile__exit-btn profile-btn'>Выйти из аккаунта</button>
      </form>
    </div>
  )
}

export default Profile;
