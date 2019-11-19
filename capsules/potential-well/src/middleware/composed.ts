import * as compose from 'koa-compose';
import * as helmet from 'koa-helmet';
import * as logger from 'koa-logger';
import backstop from './lts/error-catcher';

export default compose([backstop, helmet(), logger()]);
