import * as morgan from 'morgan';
import winston from '../winston';

const config: morgan.Options = {
  stream: {
    write: msg => winston.info(msg),
  },
};

export default morgan('combined', config);
