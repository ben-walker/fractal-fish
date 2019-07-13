import { storiesOf } from '@storybook/react';
import React from 'react';
import TextInput from './TextInput';

storiesOf('TextInput', module)
  .add('Default', () => <TextInput placeholder="Placeholder" type="text" />)
  .add('Password', () => <TextInput placeholder="Password" type="password" />);
