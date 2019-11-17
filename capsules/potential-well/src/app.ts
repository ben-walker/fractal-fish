import * as compose from 'koa-compose';
import * as Koa from 'koa';
import * as helmet from 'koa-helmet';
import * as logger from 'koa-logger';

const app = new Koa();
const middleware = compose([helmet(), logger()]);

app.use(middleware);

export default app;
