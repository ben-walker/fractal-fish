import * as http from 'http';
import app from './app';
import {
  normalizePort,
  onError,
  onListening,
} from './server-utils';

const PORT = normalizePort(process.env.PORT || '3000');
app.set('port', PORT);

const server = http.createServer(app);
server.listen(PORT);

server.on('listening', () => onListening(server));
server.on('error', e => onError(e, PORT));

export default server;
