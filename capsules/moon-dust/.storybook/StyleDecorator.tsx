import { RenderFunction } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import WindowDimensionsProvider from '../src/hooks/WindowDimensions/WindowDimensions';
import GlobalStyle from '../src/theme/global-style';

const StyleDecorator = (storyFn: RenderFunction) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ mode: 'light' }}>
      <WindowDimensionsProvider>{storyFn()}</WindowDimensionsProvider>
    </ThemeProvider>
  </>
);

export default StyleDecorator;
