import React from 'react';
import styled from 'styled-components';
import { AddTask } from './AddTask';
import { VisibleTaskList } from './VisibleTaskList';
import { Filter } from '../components/Filter';
import { NavBar } from '../components/NavBar';
import { useApp } from '../context/AppContext';
import { EditTask } from './EditTask';

const Wrapper = styled.div`
  background: papayawhip;
`;

const TaskApp = () => {
  const app = useApp();
  return (
    <Wrapper>
      <NavBar />
      <Filter />
      {app.isEditing ? <EditTask taskId={app.taskId} /> : <AddTask /> }
      <VisibleTaskList />
    </Wrapper>
  );
};

export { TaskApp };
