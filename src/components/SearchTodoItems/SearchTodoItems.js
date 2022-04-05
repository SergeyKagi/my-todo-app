import React from 'react';
import './SearchTodoItems.css';

const SearchTodoItems = () => {
  const searchText = 'Type here please';
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder={searchText}
    />
  );
};

export default SearchTodoItems;
