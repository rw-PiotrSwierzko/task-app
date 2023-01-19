import React from 'react';
import styled from 'styled-components';
import { AddTask } from './AddTask';
import { Filter } from '../components/Filter';
import { NavBar } from '../components/NavBar';
import { useApp } from '../context/AppContext';
import { EditTask } from './EditTask';
import { TaskList } from '../components/TaskList';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: papayawhip;
`;

const Container = styled.div`
  margin-top: 60px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100vw;
  max-width: 1150px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
`;

const SideNavContainer = styled.div`

`;
const DivMainContainer = styled.div`
margin-right: 16px;
    margin-left: 16px;
    width: 692px;
    max-width: 692px;
    padding: 24px 0;
    position: relative;
`;

const TaskApp = () => {
  const app = useApp();
  return (
    <Wrapper>
      <NavBar />
      <Container>
        <SideNavContainer>
          <Filter />
        </SideNavContainer>
        <DivMainContainer>
          {app.isEditing ? <EditTask taskId={app.taskId} /> : <AddTask /> }
          <TaskList />
        </DivMainContainer>
      </Container>
    </Wrapper>
  );
};

export { TaskApp };
