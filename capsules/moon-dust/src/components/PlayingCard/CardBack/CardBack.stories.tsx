import { storiesOf } from '@storybook/react';
import React from 'react';
import { ReactComponent as BackDisplay } from '../../../assets/logo.svg';
import CardBack from './CardBack';

storiesOf('CardBack', module).add('Default', () => <CardBack display={BackDisplay} />);
