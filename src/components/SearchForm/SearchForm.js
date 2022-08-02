import React from 'react';
import { useState } from 'react';

import './SearchForm.css';

import searchIcon from '../../images/search-icon.svg';

function SearchForm(props) {
  const onSearch = props.onSearch;
  const cachedQuery = props.cachedQuery;
  const [query, setQuery] = useState(cachedQuery);

  const handleQueryChange = (event) => {
    setQuery(event.target.value)
  }

  const handleSearchClick = (event) => {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <div className='search'>
      <form className='search__form'>
        <fieldset className='search__fieldset'>
          <input onChange={handleQueryChange} type="search" placeholder="Фильм" className='search__input' value={query}></input>
          <button onClick={handleSearchClick} type="submit" className='search__submit-button'>
            <img src={searchIcon} alt='Лупа'/>
          </button>
        </fieldset>
      </form>
      <div className='shorts-movies'>
        <p className='shorts-movies__text'>Короткометражки</p>
        <label className="shorts-movies__switch">
          <input type="checkbox" className='shorts-movies__checkbox'></input>
        </label>
      </div>
    </div>
  )
}

export default SearchForm;
