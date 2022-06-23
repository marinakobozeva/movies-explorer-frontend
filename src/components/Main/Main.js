import React from 'react';

import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import Portfolio from "./Portfolio/Portfolio";
import Promo from "./Promo/Promo";

function Main() {
  return (
    <main className='main'>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  )
}

export default Main;
