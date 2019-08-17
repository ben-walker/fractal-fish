import * as cors from 'cors';

const config: cors.CorsOptions = {
  credentials: true,
  origin: process.env.ORIGINS.split(','),
};

export default cors(config);
