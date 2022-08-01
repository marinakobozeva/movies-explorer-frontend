import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList(props) {
  const moviesArray = props.moviesArray;
  const onMovieSave = props.onMovieSave;
  const onlySaved = props.onlySaved;

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
