import { addDecorator, configure } from '@storybook/react';
import GlobalStyleDecorator from './GlobalStyleDecorator';

const req = require.context('../src/components', true, /.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(GlobalStyleDecorator);
configure(loadStories, module);
