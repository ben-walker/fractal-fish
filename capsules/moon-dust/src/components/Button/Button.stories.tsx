import { storiesOf } from '@storybook/react';
import React from 'react';
import Button, { IProps } from './Button';

const defButton: IProps = {
  text: 'Default Button',
};

storiesOf('Button', module).add('default', () => <Button text={defButton.text} />);
