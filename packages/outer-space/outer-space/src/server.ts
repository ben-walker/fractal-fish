import {
  ApolloServer,
  gql,
} from 'apollo-server-express';
import * as http from 'http';
import app from './app';
import corsOpts from './config/cors-opts';
import {
  normalizePort,
  onError,
  onListening,
} from './server-utils';

const PORT = normalizePort(process.env.PORT || '3000');
app.set('port', PORT);

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const apollo = new ApolloServer({
  resolvers,
  typeDefs,
});

apollo.applyMiddleware({
  app,
  cors: corsOpts,
  path: '/graph',
});

const server = http.createServer(app);
server.listen({ port: PORT });
server.on('listening', () => onListening(server));
server.on('error', e => onError(e, PORT));

export default server;
