import * as Koa from 'koa';
import helmet from 'koa-helmet';

const app = new Koa();

app.use(helmet());
