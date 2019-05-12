import * as express from 'express';
import * as helmet from 'helmet';
import cors from './config/cors';
import morgan from './config/morgan';

const app = express();
app.use(helmet());
app.options('*', cors);
app.use(cors);
app.use(morgan);

export default app;
