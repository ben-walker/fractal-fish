import http from 'http';
import app from './app';

const server = http.createServer(app.callback());
const port = '3000' || process.env.PORT;

server.listen({ port }, () => console.log(`🚀  Server ready at http://localhost:${port}`));
