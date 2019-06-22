import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

/* unregister() -> register() for offline capabilities and faster load
times; comes with some pitfalls. Learn more: https://bit.ly/CRA-PWA */
serviceWorker.unregister();
