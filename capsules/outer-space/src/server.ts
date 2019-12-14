import * as http from 'http';
import * as socketIo from 'socket.io';
import app from './app';
import apolloServer from './config/apollo-server';
import io from './config/io';
import winston from './config/winston';

apolloServer.applyMiddleware({ app });

const server = http.createServer(app);

io(socketIo(server));

const port = '4000' || process.env.PORT;

server.listen({ port }, () =>
  winston.debug(`🚀  Server ready at http://localhost:${port}${apolloServer.graphqlPath}`)
);
