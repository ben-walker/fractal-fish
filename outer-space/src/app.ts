/* tslint:disable:ordered-imports */
import 'dotenv/config';
import cors from './config/cors';
import * as express from 'express';
import * as helmet from 'helmet';

const app = express();
app.use(helmet());
app.options('*', cors);
app.use(cors);

export default app;
