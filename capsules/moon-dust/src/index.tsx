import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components/macro';
import App from './components/App/App';
import apolloClient from './config/apollo-client';
import socket from './config/socket';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './theme/global-style';

const ComposedApp: React.FC = () => {
  socket.connect();

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <ThemeProvider theme={{ mode: 'light' }}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(<ComposedApp />, document.getElementById('root'));
serviceWorker.unregister();
