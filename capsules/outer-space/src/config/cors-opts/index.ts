import { CorsOptions } from 'cors';

const config: CorsOptions = {
  credentials: true,
  origin: process.env.ORIGINS.split(','),
};

export default config;
