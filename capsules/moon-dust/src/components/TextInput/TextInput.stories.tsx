import { optionsKnob as options, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import TextInput from './TextInput';

storiesOf('TextInput', module).add('Default', () => (
  <TextInput
    variant={options('Variant', { default: 'default', primary: 'primary' }, 'default', {
      display: 'select',
    })}
    placeholder={text('Placeholder', 'Placeholder')}
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
