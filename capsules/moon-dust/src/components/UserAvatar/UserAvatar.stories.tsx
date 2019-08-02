import { storiesOf } from '@storybook/react';
import React from 'react';
import UserAvatar from './UserAvatar';

storiesOf('UserAvatar', module).add('Default', () => <UserAvatar size={3} name="Ben Walker" />);
