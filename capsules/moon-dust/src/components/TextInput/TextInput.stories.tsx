import { storiesOf } from '@storybook/react';
import React from 'react';
import TextInput from './TextInput';

storiesOf('TextInput', module)
  .add('default', () => <TextInput placeholder="Placeholder" type="text" />)
  .add('password', () => <TextInput placeholder="Password" type="password" />);
