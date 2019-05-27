import * as appRootPath from 'app-root-path';
import * as fs from 'fs';
import { createLogger, format, transports } from 'winston';
const { combine, colorize, timestamp, json, printf } = format;

const env = process.env.NODE_ENV || 'development';
const logDir = `${appRootPath}/logs`;

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = createLogger({
  exceptionHandlers: [
    new transports.File({
      dirname: logDir,
      filename: 'exceptions.log',
    }),
  ],
  format: combine(json(), timestamp()),
  level: env === 'development' ? 'debug' : 'info',
  transports: [
    new transports.File({
      dirname: logDir,
      filename: 'error.log',
      level: 'error',
    }),
    new transports.File({
      dirname: logDir,
      filename: 'combined.log',
      level: 'info',
    }),
  ],
});

if (env !== 'production') {
  logger.add(
    new transports.Console({
      debugStdout: true,
      format: combine(colorize(), printf(info => `${info.level}: ${info.message}`)),
    })
  );
}

export default logger;
