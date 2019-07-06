import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App/App';
import apolloClient from './config/apollo-client';
import './config/typeface';
import * as serviceWorker from './serviceWorker';
import theme from './theme/styled-theme';

const ComposedApp: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(<ComposedApp />, document.getElementById('root'));
serviceWorker.unregister();
