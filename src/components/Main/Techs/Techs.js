import React from 'react';

import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <div>
        <h3>7 технологий</h3>
        <p>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <ul className='techs__list'>
        <li className='techs__list-element'>HTML</li>
        <li className='techs__list-element'>CSS</li>
        <li className='techs__list-element'>JS</li>
        <li className='techs__list-element'>React</li>
        <li className='techs__list-element'>Git</li>
        <li className='techs__list-element'>Express.js</li>
        <li className='techs__list-element'>mongoDB</li>
      </ul>
    </section>
  )
}

export default Techs;