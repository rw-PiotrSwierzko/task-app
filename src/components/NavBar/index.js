import React from 'react';
import styled from 'styled-components';
import { SearchBar } from '../../containers/SearchBar';

const Header = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-around;
  -ms-flex-pack: space-around;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
  height: 60px;
  width: 100%;
  top: 0;
  position: fixed;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  z-index: 1000;
`;

const Wrapper = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 1150px;
  padding-right: 24px;
  padding-left: 20px;
`;

const NavBar = () => (
  <Header>
    <Wrapper>
      <span>Task App</span>
      <SearchBar />
    </Wrapper>
  </Header>
);

export { NavBar };
