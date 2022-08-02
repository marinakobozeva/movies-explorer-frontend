import React from 'react';
import { useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import { DESKTOP_WIDTH, TABLET_WIDTH, MOBILE_WIDTH } from '../../constants/constants.js';

import './MoviesCardList.css';

function MoviesCardList(props) {
  const moviesArray = props.moviesArray;
  const onMovieSave = props.onMovieSave;
  const onlySaved = props.onlySaved;


  const [ currentNumbers, setCurrentNumbers ] = useState(0);
  const [ extraRow, setExtraRow ] = useState(3);

  const numberOfMovies = (width) => {
    if (width >= DESKTOP_WIDTH) {
      return {
        first: 12,
        extra: 3
      };
    } if (width > MOBILE_WIDTH && width <= TABLET_WIDTH) {
      return {
        first: 8,
        extra: 2
      };
    }
    return {
      first: 5,
      extra: 2
    };
  };

  return (
    <div>
      <ul className='movies__list'>
        {moviesArray.map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            onMovieSave={onMovieSave}
            onlySaved={onlySaved}
          />
        ))}
      </ul>
    </div>
  )
}

export default MoviesCardList;
