import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <p className='footer__copyright'>2022</p>
      <ul className='footer__menu'>
        <li className='footer__menu-link'>Яндекс.Практикум</li>
        <li className='footer__menu-link'>Github</li>
        <li className='footer__menu-link'>Facebook</li>
      </ul>
    </>
  )
}

export default Footer;