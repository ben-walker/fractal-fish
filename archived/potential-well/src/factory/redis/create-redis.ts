import Redis from 'ioredis';

const defaultConfig: Redis.RedisOptions = {
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
};

const createRedis = (config?: Redis.RedisOptions): Redis.Redis => {
  const mergedConfig = { ...defaultConfig, ...config };
  return new Redis(mergedConfig);
};

export default createRedis;
