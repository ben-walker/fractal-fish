import * as cors from 'cors';

const opts: cors.CorsOptions = {
  credentials: true,
  origin: process.env.ORIGINS.split(','),
};

export default cors(opts);
