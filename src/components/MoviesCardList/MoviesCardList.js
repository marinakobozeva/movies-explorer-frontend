import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList(props) {
  const moviesArray = props.moviesArray;
  const isLoading = props.isLoading;
  const listHidden = props.listHidden;
  const listError = props.listError;
  const onlySaved = props.onlySaved;

  const onSaveClick = props.onSaveClick;
  const onDeleteClick = props.onDeleteClick;

  const isEmpty = moviesArray.length === 0;

  return (
    <div>
      {
        listHidden ? '' :
          <div className={ isLoading ? 'movies__list_type_hidden' : '' }>
            { listError ? <p>{listError}</p> :
              isEmpty ? <p className='movies__list-message'>Ничего не найдено</p> :
                <ul className={ isLoading ? 'movies__list_type_hidden' : 'movies__list'}>
                  {moviesArray.map((movie) => (
                    <MoviesCard
                      key={movie.id || movie.movieId}
                      movie={movie}
                      onSaveClick={onSaveClick}
                      onDeleteClick={onDeleteClick}
                      onlySaved={onlySaved}
                    />
                  ))}
                </ul>
            }
          </div>
      }

    </div>
  )
}

export default MoviesCardList;
