import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import UserAvatar from './UserAvatar';

storiesOf('UserAvatar', module).add('Default', () => (
  <UserAvatar
    size={number('Size', 5)}
    name={text('Name', 'Test Name')}
    maxChars={number('Max Characters', 2)}
  />
));
