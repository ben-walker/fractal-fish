import { storiesOf } from '@storybook/react';
import React from 'react';
import TextInput, { IProps } from './TextInput';

const defTextInput: IProps = {
  placeholder: 'Default Input',
};

storiesOf('TextInput', module).add('default', () => (
  <TextInput placeholder={defTextInput.placeholder} />
));
