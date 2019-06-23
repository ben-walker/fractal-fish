import { Grommet } from 'grommet';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/logo.svg';
import GlobalStyle from '../../theme/global-style';

const StyledApp = styled.div`
  text-align: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 40vmin;
  pointer-events: none;
`;

const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLink = styled.a`
  color: #61dafb;
`;

const App: React.FC = () => {
  return (
    <Grommet plain={true}>
      <StyledApp>
        <GlobalStyle />
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </AppLink>
        </AppHeader>
      </StyledApp>
    </Grommet>
  );
};

export default App;
