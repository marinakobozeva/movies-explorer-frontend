import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoviesApi from '../../utils/MoviesApi';

import { SEARCH_FIELDS } from '../../constants/constants';
import { filterByQuery, filterByTime, updateMoviesPoster } from '../../utils/MoviesToolbox';

import '../Movies/Movies.css';
import './SavedMovies.css';

function SavedMovies(props) {
  const moviesArray = props.moviesArray;
  const onDeleteClick = props.onDeleteClick;
  const [renderMovies, setRenderMovies] = useState([]);

  useEffect(() => {
    setRenderMovies(updateMoviesPoster(moviesArray, MoviesApi.options.baseUrl))
  }, [moviesArray])

  const onSearch = (query, onlyShorts) => {
    const queryFilteredMovies = filterByQuery(moviesArray, query, SEARCH_FIELDS);
    const timeFilteredMovies = filterByTime(queryFilteredMovies, onlyShorts);
    setRenderMovies(timeFilteredMovies);
  }

  return (
    <div className='movies saved-movies'>
      <SearchForm cachedQuery='' cachedOnlyShorts={false} onSearch={onSearch} />
      <MoviesCardList onDeleteClick={onDeleteClick} listHidden={false} isLoading={false} moviesArray={renderMovies} onlySaved={true}/>
    </div>
  )
}

export default SavedMovies;
