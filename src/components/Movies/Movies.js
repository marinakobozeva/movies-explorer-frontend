import React from 'react';

import MoreButton from '../MoreButton/MoreButton';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

import './Movies.css';

function Movies(props) {
  const onSearch = props.onSearch;
  const onMovieSave = props.onMovieSave;
  const cachedQuery = props.cachedQuery;
  const moviesArray = props.moviesArray;

  return (
    <div className='movies'>
      <SearchForm onSearch={onSearch} cachedQuery={cachedQuery} />
      <MoviesCardList moviesArray={ moviesArray } onMovieSave={ onMovieSave } onlySaved={ false } />
      <MoreButton />
    </div>
  )
}

export default Movies;
