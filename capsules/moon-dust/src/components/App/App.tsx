import React from 'react';
import { ThemeProvider } from 'styled-components';
import WindowDimensionsProvider from '../../hooks/WindowDimensions/WindowDimensions';
import GlobalStyle from '../../theme/global-style';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ mode: 'light' }}>
        <WindowDimensionsProvider />
      </ThemeProvider>
    </>
  );
};

export default App;
