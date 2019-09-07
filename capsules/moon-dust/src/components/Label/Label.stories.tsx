import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Label from './Label';

storiesOf('Label', module).add('Default', () => (
  <Label text={text('Text', 'Default Label')} size={text('Size', '1.25rem')} />
));
