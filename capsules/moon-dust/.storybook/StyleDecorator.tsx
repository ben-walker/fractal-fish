import React from 'react';
import { ThemeProvider } from 'styled-components';
import WindowDimensionsProvider from '../src/providers/WindowDimensions/WindowDimensions';
import GlobalStyle from '../src/theme/global-style';

const StyleDecorator = (storyFn: any) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ mode: 'light' }}>
      <WindowDimensionsProvider>{storyFn()}</WindowDimensionsProvider>
    </ThemeProvider>
  </>
);

export default StyleDecorator;
