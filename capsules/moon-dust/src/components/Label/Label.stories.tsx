import { storiesOf } from '@storybook/react';
import React from 'react';
import TextInput from '../TextInput/TextInput';
import Label from './Label';

storiesOf('Label', module)
  .add('Default', () => <Label text="Default Label" />)
  .add('With TextInput', () => (
    <Label text="With TextInput">
      <TextInput />
    </Label>
  ));
