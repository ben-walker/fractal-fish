import React from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'tailwind.macro';
import logo from '../../assets/logo.svg';
import GlobalStyle from '../../theme/global-style';

const StyledApp = styled.div`
  ${tw`text-center`}
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
  ${tw`pointer-events-none`}
  animation: ${rotate360} infinite 120s linear;
  height: 40vmin;
`;

const AppHeader = styled.div`
  ${tw`
    bg-gray-800
    min-h-screen
    flex
    flex-col
    items-center
    justify-center
    text-white
  `}
  font-size: calc(10px + 2vmin);
`;

const AppLink = styled.a`
  ${tw`text-blue-500`}
`;

const App: React.FC = () => {
  return (
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
  );
};

export default App;
