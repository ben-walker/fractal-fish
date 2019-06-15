import { ApolloServer } from 'apollo-server-express';
import * as http from 'http';
import app from './app';
import corsOpts from './config/cors-opts';
import { prisma } from './generated/prisma-client';
import graphqlSchema from './graphql-schema';
import { normalizePort, onError, onListening } from './server-utils';

const PORT = normalizePort(process.env.PORT || '3000');
app.set('port', PORT);

const apollo = new ApolloServer({
  context: ({ req }) => ({
    ...req,
    db: prisma,
  }),
  schema: graphqlSchema,
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
