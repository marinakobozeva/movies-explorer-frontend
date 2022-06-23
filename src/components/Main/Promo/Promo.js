import React from 'react';

import './Promo.css';
import Header from '../../Header/Header';
import NavTab from '../NavTab/NavTab';
import promoImage from '../../../images/promo_img.svg'

function Promo() {
  return (
    <section className='promo'>
    <Header />
      <div>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <img src={promoImage} alt="Буква П в круге"/>
      </div>
      <div className='nav-tab'>

      </div>
    </section>
  )
}


// <NavTab to='/#aboutproject' name='О проекте'/>
// <NavTab to='/#techs' name='Технологии'/>
// <NavTab to='/#aboutme' name='Студент'/>

export default Promo;