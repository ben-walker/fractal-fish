import { storiesOf } from '@storybook/react';
import React from 'react';
import { Hash } from 'react-feather';
import TextButton from './TextButton';

storiesOf('TextButton', module)
  .add('Default', () => <TextButton text="Default TextButton" />)
  .add('With Icon', () => <TextButton text="With Icon" icon={<Hash size={20} />} />);
