import { RenderFunction } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/macro';
import WindowDimensionsProvider from '../src/hooks/WindowDimensions/WindowDimensions';
import GlobalStyle from '../src/theme/global-style';

const StyleWrapper = styled.div`
  margin: 0.75rem;
`;

const StyleDecorator = (storyFn: RenderFunction) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ mode: 'light' }}>
      <WindowDimensionsProvider>
        <StyleWrapper>{storyFn()}</StyleWrapper>
      </WindowDimensionsProvider>
    </ThemeProvider>
  </>
);

export default StyleDecorator;
