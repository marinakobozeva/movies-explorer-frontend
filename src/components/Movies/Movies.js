import React from 'react';

import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';

import '../Movies/Movies.css';

function Movies() {
  return (
    <div className='movies'>
      <SearchForm />
      <MoviesCardList />
    </div>
  )
}

export default Movies;
