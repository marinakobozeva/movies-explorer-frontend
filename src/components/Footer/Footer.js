import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__info'>
        <p className='footer__copyright'>&copy;2022 Марина Кобозева</p>
        <ul className='footer__menu'>
          <li className='footer__menu-element'>
            <a className='footer__menu-link' href='https://practicum.yandex.ru/' target="_blank" rel="noreferrer noopener">Яндекс.Практикум</a>
          </li>
          <li className='footer__menu-element'>
            <a  className='footer__menu-link' href='https://github.com/marinakobozeva' target="_blank" rel="noreferrer noopener">Github</a>
          </li>
          <li className='footer__menu-element'>
            <a  className='footer__menu-link' href='https://vk.com/senkob' target="_blank" rel="noreferrer noopener">VK</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;