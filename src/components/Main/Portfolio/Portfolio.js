import React from 'react';

import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__links-element'>
            <p className='portfolio__link-text'>Статичный сайт</p>
            <a className='portfolio__link' href='https://github.com/marinakobozeva/how-to-learn' target="_blank" rel="noreferrer noopener">↗</a>
        </li>
        <li className='portfolio__links-element'>
            <p className='portfolio__link-text'>Адаптивный сайт</p>
            <a className='portfolio__link' href='https://github.com/marinakobozeva/russian-travel' target="_blank" rel="noreferrer noopener">↗</a>
        </li>
        <li className='portfolio__links-element'>
            <p className='portfolio__link-text'>Одностраничное приложение</p>
            <a className='portfolio__link' href='https://github.com/marinakobozeva/react-mesto-api-full' target="_blank" rel="noreferrer noopener">↗</a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;