import React from 'react';

import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__information'>
        <div className='about-me__text-information'>
          <p className='about-me__name'>Марина</p>
          <p className='about-me__job'>Фронтенд-разработчик, 24 года</p>
          <p className='about-me__text'>Я родилась и живу в Москве, училась в МГТУ им. Н. Э. Баумана по специальности "Прикладная математика и информатика", а сейчас учусь на 3 курсе в МГПУ по специальности "Преподаватель информатики". Я люблю программировать, печь торты, а ещё я помогаю бездомным животным. В программировании я больше всего люблю фронтенд, поэтому прошла курс "Веб-разработчик" от Яндекс.Практикум.</p>
          <ul className='about-me__links'>
            <li className='about-me__link'>Git</li>
            <li className='about-me__link'>Vk</li>
          </ul>
        </div>
        <img src={''} alt='Фото'/>
    </div>
    </section>
  )
}

export default AboutMe;