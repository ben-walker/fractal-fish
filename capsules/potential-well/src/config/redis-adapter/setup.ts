import redisAdapter from 'socket.io-redis';
import Redis from 'ioredis';

const clientOpts: Redis.RedisOptions = {
  host: process.env.REDIS_HOST,
};

const adapter = redisAdapter({
  pubClient: new Redis(clientOpts),
  subClient: new Redis(clientOpts),
});

export default adapter;
