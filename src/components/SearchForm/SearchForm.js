import React from 'react';
import { useState } from 'react';

import './SearchForm.css';

import searchIcon from '../../images/search-icon.svg';

function SearchForm(props) {
  const onSearch = props.onSearch;
  const [query, setQuery] = useState('');

  const handleSearchClick = (event) => {
    event.preventDefault();
    onSearch(query);
  }

  const handleInput = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div className='search'>
      <form className='search__form'>
        <fieldset className='search__fieldset'>
          <input onChange={handleInput} type="search" placeholder="Фильм" className='search__input'></input>
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
