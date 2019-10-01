import { optionsKnob as options, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import TextInput from './TextInput';

storiesOf('TextInput', module).add('Default', () => (
  <TextInput
    placeholder={text('Placeholder', 'Holding place...')}
    type={options(
      'Type',
      { email: 'email', text: 'text', password: 'password', number: 'number' },
      'text',
      {
        display: 'select',
      }
    )}
  />
));
