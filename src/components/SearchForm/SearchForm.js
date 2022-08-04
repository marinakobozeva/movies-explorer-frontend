import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';


function SearchForm(props) {
  const onSearch = props.onSearch;
  const onOnlyShorts = props.onOnlyShorts;
  const cachedQuery = props.cachedQuery;
  const cachedOnlyShorts = props.cachedOnlyShorts;

  const [isValid, setIsValid] = useState(false);
  const [query, setQuery] = useState(cachedQuery);

  useEffect(() => {
    setIsValid(query.length > 0);
  }, [query])

  const handleQueryChange = (event) => {
    setQuery(event.target.value)
  }

  const handleOnlyShortsChange = (event) => {
    onOnlyShorts(!cachedOnlyShorts)
  }

  const handleSearchClick = (event) => {
    event.preventDefault();
    onSearch(query, cachedOnlyShorts);
  }

  return (
    <div className='search'>
      <form className='search__form'>
        <fieldset className='search__fieldset'>
          <input onChange={handleQueryChange} type="search" placeholder="Фильм" className='search__input' value={query}></input>
          <button
            onClick={handleSearchClick}
            type="submit"
            className={isValid ? 'search__submit-button search__submit-button_type_active' : 'search__submit-button' }
            disabled={!isValid}>
            <img src={searchIcon} alt='Лупа'/>
          </button>
        </fieldset>
      </form>
      <div className='shorts-movies'>
        <p className='shorts-movies__text'>Короткометражки</p>
        <label className="shorts-movies__switch">
          <input onClick={handleOnlyShortsChange} defaultChecked={cachedOnlyShorts} type="checkbox" className='shorts-movies__checkbox' value={`${cachedOnlyShorts}`}></input>
        </label>
      </div>
    </div>
  )
}

export default SearchForm;
