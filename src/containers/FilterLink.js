import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setVisibilityFilter } from '../actions/actions';
import { useApp, useAppDispatch } from '../context/AppContext';

const Wrapper = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  
  &.active, &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const FilterLink = ({ filter, children }) => {
  const app = useApp();
  const appDispatch = useAppDispatch();

  return (
    <Wrapper
      className={app.filter === filter ? 'active' : ''}
      href="#"
      onClick={e => {
        e.preventDefault();
        appDispatch(setVisibilityFilter(filter));
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
