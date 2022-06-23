import React from 'react';

import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <a className='portfolio__link'>
          <p className='portfolio__link-text'>Статичный сайт</p>
          <img src={''} alt='Стрелка' className='portfolio__link-icon'/>
        </a>
        <a className='portfolio__link'>
          <p className='portfolio__link-text'>Адаптивный сайт</p>
          <img src={''} alt='Стрелка' className='portfolio__link-icon'/>
        </a>
        <a className='portfolio__link'>
          <p className='portfolio__link-text'>Одностраничное приложение</p>
          <img src={''} alt='Стрелка' className='portfolio__link-icon'/>
        </a>
      </ul>
    </section>
  )
}

export default Portfolio;