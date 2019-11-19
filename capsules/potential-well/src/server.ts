import http from 'http';
import Websocket from 'ws';
import app from './app';

const server = http.createServer(app.callback());
const port = '3000' || process.env.PORT;
const wss = new Websocket.Server({ server });

wss.on('connection', ws => {
  ws.send('hello world');
});

server.listen({ port }, () => console.log(`🚀  Server ready at http://localhost:${port}`));
