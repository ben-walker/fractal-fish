import { optionsKnob as options, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Bluetooth } from 'react-feather';
import TextButton from './TextButton';

storiesOf('TextButton', module).add('Default', () => (
  <TextButton
    variant={options('Variant', { default: 'default', primary: 'primary' }, 'default', {
      display: 'select',
    })}
    text={text('Text', 'Default Button')}
  >
    <Bluetooth size={17} />
  </TextButton>
));
