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
  const [query, setQuery] = useState('');
  const [onlyShorts, setOnlyShort] = useState(false);
  const [renderMovies, setRenderMovies] = useState(moviesArray);

  useEffect(() => {
    const updatedPoster = updateMoviesPoster(moviesArray, MoviesApi.options.baseUrl);
    setRenderMovies(updatedPoster);
  }, [moviesArray])

  const onSearch = (query, onlyShorts) => {
    const queryFilteredMovies = filterByQuery(renderMovies, query, SEARCH_FIELDS);
    const timeFilteredMovies = filterByTime(queryFilteredMovies, onlyShorts);
    setQuery(query);
    setOnlyShort(onlyShorts);
    setRenderMovies(timeFilteredMovies);
  }

  const onOnlyShorts = (onlyShorts) => {
    const queryFilteredMovies = filterByQuery(moviesArray, query, SEARCH_FIELDS);
    const timeFilteredMovies = filterByTime(queryFilteredMovies, onlyShorts);
    setRenderMovies(timeFilteredMovies);
    setOnlyShort(onlyShorts);
  }

  return (
    <div className='movies saved-movies'>
      <SearchForm cachedQuery='' cachedOnlyShorts={onlyShorts} onSearch={onSearch} onOnlyShorts={onOnlyShorts} />
      <MoviesCardList onDeleteClick={onDeleteClick} listHidden={false} isLoading={false} moviesArray={renderMovies} onlySaved={true}/>
    </div>
  )
}

export default SavedMovies;
