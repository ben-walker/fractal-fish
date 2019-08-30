import { RenderFunction } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/macro';
import WindowDimensionsProvider from '../src/hooks/WindowDimensions/WindowDimensions';
import GlobalStyle from '../src/theme/global-style';

const StyledWrapper = styled.div`
  padding: 0.75rem;
`;

const StyleDecorator = (storyFn: RenderFunction) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ mode: 'light' }}>
      <WindowDimensionsProvider>
        <StyledWrapper>{storyFn()}</StyledWrapper>
      </WindowDimensionsProvider>
    </ThemeProvider>
  </>
);

export default StyleDecorator;
