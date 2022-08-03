import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import MoreButton from '../MoreButton/MoreButton';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

import { DESKTOP_WIDTH, TABLET_WIDTH } from '../../constants/constants.js';

import './Movies.css';

function Movies(props) {

  const getRenderParams = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= DESKTOP_WIDTH) {
      return {firstRenderSize: 12, nextRenderSize: 3}
    } else if (windowWidth >= TABLET_WIDTH) {
      return {firstRenderSize: 8, nextRenderSize: 2}
    }
    return {firstRenderSize: 5, nextRenderSize: 2}
  }

  const onSearch = props.onSearch;
  const onSaveClick = props.onSaveClick;

  const listError = props.listError;
  const listHidden = props.listHidden;
  const isLoading = props.isLoading;
  const cachedQuery = props.cachedQuery;
  const cachedOnlyShorts = props.cachedOnlyShorts;
  const moviesArray = props.moviesArray;

  const [renderParams, setRenderParams] = useState(getRenderParams())
  const [renderFilms, setRenderFilms] = useState([]);
  const [haveNext, setHaveNext] = useState(moviesArray.length > renderParams.firstRenderSize);
  const [moreCounter, setMoreCounter] = useState(0);

  const onMoreClick = () => {
    setMoreCounter(moreCounter + 1);
  }

  const onWindowResize = () => {
    setRenderParams(getRenderParams())
  }

  useEffect(() => {
    window.addEventListener('resize', onWindowResize)

    return () => {
      window.removeEventListener('resize', onWindowResize)
    }
  }, [])

  useEffect(() => {
    setMoreCounter(0);
  }, [cachedQuery, cachedOnlyShorts])

  useEffect(() => {
    setRenderFilms(moviesArray.slice(0, renderParams.firstRenderSize + renderParams.nextRenderSize * moreCounter))
  }, [moviesArray, moreCounter, renderParams])

  useEffect(() => {
    if (renderFilms.length === moviesArray.length) {
      setHaveNext(false);
    } else {
      setHaveNext(true);
    }
  }, [moviesArray, renderFilms])

  return (
    <div className='movies'>
      <SearchForm onSearch={onSearch} cachedQuery={cachedQuery} cachedOnlyShorts={cachedOnlyShorts}/>
      <MoviesCardList
        listError={listError}
        listHidden={listHidden}
        isLoading={isLoading}
        moviesArray={renderFilms}
        onSaveClick={onSaveClick}
        onlySaved={false} />
      <MoreButton haveNext={haveNext} onMoreClick={onMoreClick} />
      <Preloader isLoading={isLoading} />
    </div>
  )
}

export default Movies;
