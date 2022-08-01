import React from 'react';

import { parseMovieTime } from '../../utils/MoviesToolbox';
import './MoviesCard.css';


function MoviesCard(props) {
  const movie = props.movie;
  const onMovieSave = props.onMovieSave;
  const onlySaved = props.onlySaved;

  const handleSaveClick = (event) => {
    event.stopPropagation();
    onMovieSave(movie)
  }

  return (
    <li className="movies__card" key={movie.id}>
        <div className='movies__card-caption'>
          <div className='movies__card-text'>
            <p className='movies__card-title'>{movie.nameRU}</p>
            <p className='movies__card-duration'>{parseMovieTime(movie.duration)}</p>
          </div>
          {
            onlySaved ?
              <button className='movies__card-button movies__card-button_type_delete'></button> :
              <button onClick={handleSaveClick} className={ movie.saved ? 'movies__card-button movies__card-button_type_active' : 'movies__card-button' }></button>
          }
        </div>
        <img className='movies__card-poster' src={movie.poster} alt='Постер'/>
    </li>
  )
}

export default MoviesCard;
