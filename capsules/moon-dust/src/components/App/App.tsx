import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import Button from '../Button/Button';

const StyledApp = styled.div`
  ${tw`text-center`}
`;

const AppHeader = styled.div`
  ${tw`min-h-screen flex flex-col items-center justify-center`}
  color: black;
  font-size: calc(10px + 2vmin);
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <AppHeader>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button text="Default Button" />
      </AppHeader>
    </StyledApp>
  );
};

export default App;
