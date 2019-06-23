import { addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

const req = require.context('../src/components', true, /.stories\.tsx$/);

addParameters({
  options: {
    theme: themes.dark,
  },
});

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
