import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/theme/global-style';

const StyleDecorator = (storyFn: any) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ mode: 'light' }}>{storyFn()}</ThemeProvider>
  </>
);

export default StyleDecorator;
