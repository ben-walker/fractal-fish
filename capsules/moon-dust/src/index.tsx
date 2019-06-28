import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import apolloClient from './config/apollo-client';
import * as serviceWorker from './serviceWorker';

const WrappedApp: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  );
};

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
serviceWorker.unregister();
