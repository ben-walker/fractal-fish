import compose from 'koa-compose';
import helmet from 'koa-helmet';
import backstop from './lts/error-catcher';
import steno from './lts/logger';

export default compose([backstop, helmet(), steno]);
