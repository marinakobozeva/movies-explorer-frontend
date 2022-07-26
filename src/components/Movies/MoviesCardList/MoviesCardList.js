import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import '../MoviesCardList/MoviesCardList.css';

function MoviesCardList() {
  return (
    <div>
      <ul className='movies__list'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <button className='movies__more-btn'>Ещё</button>
    </div>
  )
}

export default MoviesCardList;
