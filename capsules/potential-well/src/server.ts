import http from 'http';
import SocketIO from 'socket.io';
import app from './app';

const server = http.createServer(app.callback());
const io = SocketIO(server);
const port = '3000' || process.env.PORT;

io.on('connection', socket => {
  socket.send('hello world');
});

server.listen({ port }, () => console.log(`🚀  Server ready at http://localhost:${port}`));
