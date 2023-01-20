import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

const SearchBar = ({ searchForImages }) => (
  <header className={css.SearchBar}>
    <form className={css.SearchForm} onSubmit={searchForImages}>
      <button type="submit" className={css.SearchFormButton}>
        <span className={css.SearchFormBtnLabel}>Search</span>
      </button>
      <input
        className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="searchValue"
      />
    </form>
  </header>
);

SearchBar.propTypes = {
  searchForImages: PropTypes.func.isRequired,
};

export default SearchBar;
