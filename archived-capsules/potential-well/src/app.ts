import Koa from 'koa';
import bundle from './middleware/composed';

const app = new Koa();
app.use(bundle);

export default app;
