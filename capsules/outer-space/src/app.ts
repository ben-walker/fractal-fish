import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import corsOpts from './config/cors-opts';
import morganOpts from './config/morgan-opts';

const app = express();
app.use(helmet());
app.use(morgan('combined', morganOpts));
app.use(cors(corsOpts));

export default app;
