import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

/* unregister() -> register() for offline capabilities and faster load
times; comes with some pitfalls.
Learn more: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app */
serviceWorker.unregister();
