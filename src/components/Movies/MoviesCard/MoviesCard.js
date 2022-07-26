import React from 'react';

import '../MoviesCard/MoviesCard.css';
import Poster from '../../../images/movie-poster.jpg';

let isActive = false;
const btnState = () => {
  isActive = !isActive
}

function MoviesCard() {
  return (
    <div className='movies__card'>
      <div className='movies__card-caption'>
        <div className='movies__card-text'>
          <p className='movies__card-title'>33 слова о дизайне</p>
          <p className='movies__card-duration'>1ч 47м</p>
        </div>
        <button onClick={btnState} className={ isActive ? 'movies__card-button movies__card-button_type_active' : 'movies__card-button' }>
        </button>
      </div>
      <img className='movies__card-poster' src={Poster} alt='Постер'/>
    </div>
  )
}

export default MoviesCard;
