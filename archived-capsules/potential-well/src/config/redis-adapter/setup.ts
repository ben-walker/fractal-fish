import redisAdapter from 'socket.io-redis';
import createRedis from '../../factory/redis/create-redis';

const adapter = redisAdapter({
  pubClient: createRedis(),
  subClient: createRedis(),
});

export default adapter;
