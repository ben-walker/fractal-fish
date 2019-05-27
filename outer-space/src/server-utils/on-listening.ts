import { Server } from 'http';
import winston from '../config/winston';

export default (server: Server) => {
  const address = server.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : `port ${address.port}`;
  winston.debug(`🚀  Server ready on ${bind}`);
};
