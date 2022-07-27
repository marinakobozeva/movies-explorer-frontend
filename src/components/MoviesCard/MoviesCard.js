import React from 'react';

import './MoviesCard.css';


function MoviesCard(props) {
  const movie = props.movie;
  const onSaveClick = props.onSaveClick;
  const onlySaved = props.onlySaved;

  const handleSaveClick = (event) => {
    event.stopPropagation();
    onSaveClick(movie)
  }

  return (
    <li className="movies-card-list__item" key={movie.id}>
      <div className='movies__card'>
        <div className='movies__card-caption'>
          <div className='movies__card-text'>
            <p className='movies__card-title'>33 слова о дизайне</p>
            <p className='movies__card-duration'>1ч 47м</p>
          </div>
          {
            onlySaved ?
              <button className='movies__card-button movies__card-button_type_delete'></button> :
              <button onClick={handleSaveClick} className={ movie.saved ? 'movies__card-button movies__card-button_type_active' : 'movies__card-button' }></button>
          }
        </div>
        <img className='movies__card-poster' src={movie.poster} alt='Постер'/>
      </div>
    </li>
  )
}

export default MoviesCard;
