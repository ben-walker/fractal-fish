import * as Koa from 'koa';
import * as helmet from 'koa-helmet';
import * as logger from 'koa-logger';

const app = new Koa();

app.use(logger());
app.use(helmet());
