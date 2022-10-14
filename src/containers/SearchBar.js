import React from 'react';
import { useTasks, useTasksDispatch } from '../store/TasksContext';
import { setSearchTerm } from '../actions/actions';

const SearchBar = () => {
  const state = useTasks();
  const dispatch = useTasksDispatch();

  return (
    <div className="ui transparent inverted icon input">
      <input
        onChange={(e) => {
          dispatch(setSearchTerm(e.target.value));
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
