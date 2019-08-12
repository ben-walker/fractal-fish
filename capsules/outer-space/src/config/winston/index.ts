import * as appRootPath from 'app-root-path';
import { existsSync, mkdirSync } from 'fs';
import { createLogger, format, transports } from 'winston';
import * as winstonDailyRotateFile from 'winston-daily-rotate-file';

const { combine, colorize, timestamp, json, printf } = format;
const env = process.env.NODE_ENV || 'development';
const logDir = `${appRootPath}/logs`;
const datePattern = 'YYYY-MM-DD';
const retainDays = '3d';

if (!existsSync(logDir)) {
  mkdirSync(logDir);
}

const logger = createLogger({
  exceptionHandlers: [
    new winstonDailyRotateFile({
      datePattern,
      dirname: logDir,
      filename: '%DATE%-exceptions.log',
      maxFiles: retainDays,
    }),
  ],
  format: combine(json(), timestamp()),
  level: env === 'development' ? 'debug' : 'info',
  transports: [
    new winstonDailyRotateFile({
      datePattern,
      dirname: logDir,
      filename: '%DATE%-error.log',
      level: 'error',
      maxFiles: retainDays,
    }),
    new winstonDailyRotateFile({
      datePattern,
      dirname: logDir,
      filename: '%DATE%-combined.log',
      level: 'info',
      maxFiles: retainDays,
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
