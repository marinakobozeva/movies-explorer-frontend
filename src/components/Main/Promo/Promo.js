import React from 'react';

import './Promo.css';

import PromoImage from '../../../images/promo_img.svg'

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <img className='promo__image' src={PromoImage} alt="Буква П в круге"/>
      </div>
    </section>
  )
}


// <NavTab to='/#aboutproject' name='О проекте'/>
// <NavTab to='/#techs' name='Технологии'/>
// <NavTab to='/#aboutme' name='Студент'/>

export default Promo;