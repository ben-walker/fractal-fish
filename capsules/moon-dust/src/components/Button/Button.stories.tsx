import { optionsKnob as options, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './Button';

storiesOf('Button', module).add('Default', () => (
  <Button
    variant={options('Variant', { default: 'default', primary: 'primary' }, 'default', {
      display: 'select',
    })}
    text={text('Text', 'Default button')}
  />
));
