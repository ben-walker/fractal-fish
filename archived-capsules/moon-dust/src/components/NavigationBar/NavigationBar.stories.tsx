import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import NavigationBar from './NavigationBar';

storiesOf('NavigationBar', module).add('Default', () => (
  <NavigationBar breakpoint={number('Breakpoint', 1024)} />
));
