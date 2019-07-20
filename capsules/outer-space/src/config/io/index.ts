import { Server } from 'socket.io';
import winston from '../winston';

export default (io: Server) => {
  io.on('connection', socket => winston.debug(`socket: ${socket.id}`));
};
