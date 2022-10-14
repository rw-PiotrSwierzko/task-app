import React from 'react';
import { SearchBar } from '../../containers/SearchBar';

const NavBar = () => (
  <div className="ui fixed inverted borderless massive menu">
    <div className="ui text container">
      <div className="header item">
        Todo App
      </div>
      <div className="right menu">
        <div className="item">
          <SearchBar />
        </div>
      </div>
    </div>
  </div>
);

export { NavBar };
