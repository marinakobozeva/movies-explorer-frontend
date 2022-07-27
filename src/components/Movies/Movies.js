import React from 'react';
import { useState } from 'react';

import MoreButton from '../MoreButton/MoreButton';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

import './Movies.css';

import { movies } from '../../constants/moviesArray';

function Movies(props) {
  const [moviesArray, setMoviesArray] = useState(movies);
  const onSaveClick = (movie) => {
    const newArray = []
    movies.forEach((item) => {
      if (movie.id === item.id) {
        item.saved = !item.saved
      }
      newArray.push(item);
    })
    setMoviesArray(newArray);
  }

  return (
    <div className='movies'>
      <SearchForm />
      <MoviesCardList moviesArray={ moviesArray } onSaveClick={ onSaveClick } onlySaved={ false } />
      <MoreButton />
    </div>
  )
}

export default Movies;
