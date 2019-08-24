import { storiesOf } from '@storybook/react';
import React from 'react';
import logo from '../../../assets/logo.svg';
import CardBack from './CardBack';

storiesOf('CardBack', module).add('Default', () => <CardBack src={logo} />);
