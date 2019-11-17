import * as Koa from 'koa';
import * as helmet from 'koa-helmet';
import * as http from 'http';
import * as logger from 'koa-logger';
import * as Websocket from 'ws';

const app = new Koa();

app.use(logger());
app.use(helmet());

const server = http.createServer(app.callback());
const port = '3000' || process.env.PORT;
const wss = new Websocket.Server({ server });

wss.on('connection', ws => {
  ws.send('hello world');
});

server.listen({ port }, () => console.log(`🚀  Server ready at http://localhost:${port}`));
