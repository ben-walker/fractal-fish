import winston from '../config/winston';

export default (error: NodeJS.ErrnoException, port: number | string) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      winston.debug(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      winston.debug(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};
