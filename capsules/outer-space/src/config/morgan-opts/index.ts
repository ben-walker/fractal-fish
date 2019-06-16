import { Options as MorganOptions } from 'morgan';
import winston from '../winston';

const config: MorganOptions = {
  stream: {
    write: msg => winston.info(msg),
  },
};

export default config;
