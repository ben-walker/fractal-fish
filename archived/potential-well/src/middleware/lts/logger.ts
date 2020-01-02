import pino from 'koa-pino-logger';

export default pino({
  prettyPrint: process.env.NODE_ENV === 'development',
});
