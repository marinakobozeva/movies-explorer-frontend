import React from 'react';

import './AboutMe.css';
import MyPhoto from '../../../images/my-photo.jpg';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__information'>
        <div className='about-me__information-text'>
          <h3 className='about-me__name'>Кобозева Марина</h3>
          <h4 className='about-me__job'>Фронтенд-разработчик, 24 года</h4>
          <p className='about-me__text'>Я родилась и живу в Москве, училась в МГТУ им. Н. Э. Баумана по специальности "Прикладная математика и информатика", а сейчас учусь на 3 курсе в МГПУ по специальности "Преподаватель информатики". Я люблю программировать, печь торты, а ещё я помогаю бездомным животным. В программировании я больше всего люблю фронтенд, поэтому прошла курс "Веб-разработчик" от Яндекс.Практикум.</p>
          <ul className='about-me__links'>
            <li className='about-me__links-element'>
              <a className='about-me__link' href='https://github.com/marinakobozeva'>Github</a>
            </li>
            <li className='about-me__links-element'>
              <a className='about-me__link' href='https://vk.com/senkob'>VK</a>
            </li>
          </ul>
        </div>
        <img className='about-me__photo' src={MyPhoto} alt='Фото'/>
      </div>
    </section>
  )
}

export default AboutMe;