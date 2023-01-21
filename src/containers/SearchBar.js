import React from 'react';
import { useStore } from '../context/AppStore';

const SearchBar = () => {
  // zustand
  const searchTerm = useStore((state) => state.searchTerm);
  const setSearchTerm = useStore((state) => state.setSearchTerm);

  return (
    <input
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
      placeholder="Search..."
      type="text"
      value={searchTerm}
    />
  );
};

export { SearchBar };
