import React from 'react';
import { useState } from 'react';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

import '../Movies/Movies.css';
import './SavedMovies.css';

import { savedMovies } from '../../constants/moviesArray';

function SavedMovies(props) {
  const [moviesArray, setMoviesArray] = useState(savedMovies);
  const onSaveClick = (movie) => {
    const newArray = []
    savedMovies.forEach((item) => {
      if (movie.id === item.id) {
        item.saved = !item.saved
      }
      newArray.push(item);
    })
    setMoviesArray(newArray);
  }

  return (
    <div className='movies saved-movies'>
      <SearchForm />
      <MoviesCardList moviesArray={ moviesArray } onSaveClick={ onSaveClick } onlySaved={ true }/>
    </div>
  )
}

export default SavedMovies;
