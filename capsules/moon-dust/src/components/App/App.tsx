import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import GlobalStyle from '../../theme/global-style';

const StyledApp = styled.div`
  ${tw`text-center`}
`;

const AppHeader = styled.div`
  ${tw`bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white`}
  font-size: calc(10px + 2vmin);
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <AppHeader>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </AppHeader>
    </StyledApp>
  );
};

export default App;
