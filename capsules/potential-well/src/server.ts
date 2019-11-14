import * as Koa from 'koa';
import * as helmet from 'koa-helmet';

const app = new Koa();

app.use(helmet());
