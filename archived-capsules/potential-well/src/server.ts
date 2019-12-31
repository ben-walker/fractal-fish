import http from 'http';
import SocketIO from 'socket.io';
import redisAdapter from './config/redis-adapter/setup';
import app from './app';

const server = http.createServer(app.callback());
const io = SocketIO(server).adapter(redisAdapter);

io.on('connection', socket => {
  socket.send('hello world');
});

const port = '3000' || process.env.PORT;
server.listen({ port }, () => console.log('Server launched 🚀'));
