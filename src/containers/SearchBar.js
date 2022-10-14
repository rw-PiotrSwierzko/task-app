import React from 'react';
import { setSearchTerm } from '../actions/actions';
import { useApp, useAppDispatch } from '../context/AppContext';

const SearchBar = () => {
  const state = useApp();
  const appDispatch = useAppDispatch();

  return (
    <div className="ui transparent inverted icon input">
      <input
        onChange={(e) => {
          appDispatch(setSearchTerm(e.target.value));
        }}
        placeholder="Search..."
        type="text"
        value={state.searchTerm}
      />
      <i className="search inverted icon" />
    </div>
  );
};

export { SearchBar };
