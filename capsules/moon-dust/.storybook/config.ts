import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure } from '@storybook/react';
import StyleDecorator from './StyleDecorator';

const req = require.context('../src/components', true, /.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(StyleDecorator);
addDecorator(withKnobs);
configure(loadStories, module);
