import React from 'react';

import './NavTab.css';

function NavTab() {
  return (
    <div className='nav-tab'>
      <ul className='nav-tab__list'>
        <li className='nav-tab__element'>
          <a className='nav-tab__link'>О проекте</a>
        </li>
        <li className='nav-tab__element'>
          <a className='nav-tab__link'>Технологии</a>
        </li>
        <li className='nav-tab__element'>
          <a className='nav-tab__link'>Студент</a>
        </li>
      </ul>
    </div>
  )
}

export default NavTab;