import { storiesOf } from '@storybook/react';
import React from 'react';
import CardBack from './CardBack';
import { ReactComponent as BackDisplay } from './logo.svg';

storiesOf('CardBack', module).add('Default', () => <CardBack display={BackDisplay} />);
