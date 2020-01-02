import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Link from './Link';

storiesOf('Link', module).add('Default', () => <Link text={text('Text', 'Default link')} />);
