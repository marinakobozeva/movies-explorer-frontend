import React from 'react';

import '../SearchForm/SearchForm.css';

import searchIcon from '../../../images/search-icon.svg';

function SearchForm() {
  return (
    <div className='search'>
      <form className='search__form'>
        <fieldset className='search__fieldset'>
          <input type="search" placeholder="Фильм" className='search__input'></input>
          <button type="submit" className='search__submit-button'>
            <img src={searchIcon} alt='Лупа'/>
          </button>
        </fieldset>
      </form>
      <div className='shorts-movies'>
        <p className='shorts-movies__text'>Короткометражки</p>
        <label class="shorts-movies__switch">
          <input type="checkbox" className='shorts-movies__checkbox'></input>
        </label>
      </div>
    </div>
  )
}

export default SearchForm;
