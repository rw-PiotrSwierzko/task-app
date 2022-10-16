import React from 'react';
import { setSearchTerm } from '../actions/actions';
import { useApp, useAppDispatch } from '../context/AppContext';

const SearchBar = () => {
  const app = useApp();
  const appDispatch = useAppDispatch();

  return (
    <input
      onChange={(e) => {
        appDispatch(setSearchTerm(e.target.value));
      }}
      placeholder="Search..."
      type="text"
      value={app.searchTerm}
    />
  );
};

export { SearchBar };
