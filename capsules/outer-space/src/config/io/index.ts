import { Server } from 'socket.io';
import winston from '../winston';
import { lifeline } from './events';

export default (io: Server) => {
  io.on(lifeline.CONNECT, socket => {
    winston.debug(`socket connected: ${socket.id}`);

    socket.on(lifeline.DISCONNECT, () => winston.debug(`socket disconnected: ${socket.id}`));
  });
};
