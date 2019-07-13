import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledApp = styled.div`
  ${tw`text-center`}
`;

const AppHeader = styled.div`
  ${tw`min-h-screen flex flex-col items-center justify-center`}
  color: black;
  font-size: calc(10px + 2vmin);
`;

const StyledP = styled.p`
  ${tw`font-semibold`}
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <AppHeader>
        <StyledP>Edit and save to reload.</StyledP>
        <code>Here's some code - int p = 5;</code>
      </AppHeader>
    </StyledApp>
  );
};

export default App;
