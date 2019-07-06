import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './Button';

const defButton = {
  text: 'Default Button',
};

storiesOf('Button', module).add('default', () => <Button text={defButton.text} />);
