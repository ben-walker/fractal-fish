import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import morganOpts from './config/morgan-opts';

const app = express();
app.use(helmet());
app.use(morgan('combined', morganOpts));

export default app;
