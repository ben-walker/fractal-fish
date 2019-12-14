import { storiesOf } from '@storybook/react';
import React from 'react';
import PlayingCard from './PlayingCard';

storiesOf('PlayingCard', module).add('Default', () => <PlayingCard value="8" suit="Hearts" />);
