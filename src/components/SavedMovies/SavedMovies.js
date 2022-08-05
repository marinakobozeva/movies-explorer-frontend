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
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Костыль, чтобы установить корректный постер, потому что схема данных
  // у сохраненных и обычных фильмов различается...
  useEffect(() => {
    const updatedPoster = updateMoviesPoster(moviesArray, MoviesApi.options.baseUrl);
    setRenderMovies(updatedPoster);
    setFilteredMovies(updatedPoster);
  }, [moviesArray])

  const onSearch = (query, onlyShorts) => {
    const queryFilteredMovies = filterByQuery(renderMovies, query, SEARCH_FIELDS);
    const timeFilteredMovies = filterByTime(queryFilteredMovies, onlyShorts);
    setQuery(query);
    setOnlyShort(onlyShorts);
    setFilteredMovies(timeFilteredMovies);
  }

  const onOnlyShorts = (onlyShorts) => {
    const queryFilteredMovies = filterByQuery(renderMovies, query, SEARCH_FIELDS);
    const timeFilteredMovies = filterByTime(queryFilteredMovies, onlyShorts);
    setFilteredMovies(timeFilteredMovies);
    setOnlyShort(onlyShorts);
  }

  return (
    <div className='movies saved-movies'>
      <SearchForm cachedQuery='' cachedOnlyShorts={onlyShorts} onSearch={onSearch} onOnlyShorts={onOnlyShorts} />
      <MoviesCardList onDeleteClick={onDeleteClick} listHidden={false} isLoading={false} moviesArray={filteredMovies} onlySaved={true}/>
    </div>
  )
}

export default SavedMovies;
