import React from 'react';
import './AboutProject.css';
function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <ul className='about-project__description'>
        <li className='about-project__description-element'>
          <h3 className='about-project__description-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__description-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className='about-project__description-element'>
          <h3 className='about-project__description-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__description-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
         </li>
      </ul>
      <ul className='about-project__timeline'>
        <li className='about-project__timeline-time about-project__timeline-time_type_green'>1 неделя</li>
        <li className='about-project__timeline-time about-project__timeline-time_type_gray'>4 недели</li>
        <li className='about-project__timeline-caption'>Back-end</li>
        <li className='about-project__timeline-caption'>Front-end</li>
      </ul>
    </section>
  )
}

export default AboutProject;