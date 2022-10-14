import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTasks, useTasksDispatch } from '../store/TasksContext';
import { setVisibilityFilter } from '../actions/actions';

const Wrapper = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const FilterLink = ({ filter, children }) => {
  const state = useTasks();
  const dispatch = useTasksDispatch();

  return (
    <Wrapper
      className={`item ${state.filter === filter ? 'active' : ''}`}
      href="#"
      onClick={e => {
        e.preventDefault();
        dispatch(setVisibilityFilter(filter));
      }}
    >
      {children}
    </Wrapper>
  );
};

FilterLink.propTypes = {
  filter: PropTypes.string,
  children: PropTypes.node,
};

export { FilterLink };
