import React from 'react';
import styled from 'styled-components';
import AddTodo from './AddTodo';
import { VisibleTodoList } from './VisibleTodoList';
import { Filter } from '../components/Filter';
import { NavBar } from '../components/NavBar';

const Wrapper = styled.div`
  background: papayawhip;
`;

const TodoApp = () => (
  <Wrapper>
    <NavBar />
    <Filter />
    <AddTodo />
    <VisibleTodoList />
  </Wrapper>
);

export { TodoApp };
