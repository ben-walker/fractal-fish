import * as compose from 'koa-compose';
import * as Koa from 'koa';
import * as helmet from 'koa-helmet';
import * as logger from 'koa-logger';
import errorCatcher from './middleware/error-catcher';

const app = new Koa();
const middleware = compose([helmet(), logger(), errorCatcher]);

app.use(middleware);

export default app;
