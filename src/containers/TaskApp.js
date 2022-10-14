import React from 'react';
import styled from 'styled-components';
import { AddTodo } from './AddTodo';
import { VisibleTodoList } from './VisibleTodoList';
import { Filter } from '../components/Filter';
import { NavBar } from '../components/NavBar';
import { useApp } from '../context/AppContext';
import { EditTodo } from './EditTodo';

const Wrapper = styled.div`
  background: papayawhip;
`;

const TaskApp = () => {
  const app = useApp();
  return (
    <Wrapper>
      <NavBar />
      <Filter />
      {app.isEditing ? <EditTodo taskId={app.taskId} /> : <AddTodo /> }
      <VisibleTodoList />
    </Wrapper>
  );
};

export { TaskApp };
