import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Label from './Label';

storiesOf('Label', module).add('Default', () => (
  <Label
    text={text('Text', 'Default Label')}
    size={number('Size', 1.2, {
      min: 0,
      step: 0.1,
    })}
    weight={number('Weight', 400, {
      max: 900,
      min: 100,
      step: 100,
    })}
  />
));
