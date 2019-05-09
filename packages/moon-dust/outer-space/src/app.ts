import * as express from 'express';
import * as helmet from 'helmet';
import cors from './config/cors';

const app = express();
app.use(helmet());
app.options('*', cors);
app.use(cors);

export default app;
