import { Server } from 'http';
import logger from '../config/logger';

export default (server: Server) => {
  const address = server.address();
  const bind = typeof address === 'string'
    ? `pipe ${address}`
    : `port ${address.port}`;
  logger(`Listening on ${bind}`);
};
