import { RenderFunction } from '@storybook/react';
import React from 'react';
import GlobalStyle from '../src/theme/global-style';

const GlobalStyleDecorator = (storyFn: RenderFunction) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

export default GlobalStyleDecorator;
