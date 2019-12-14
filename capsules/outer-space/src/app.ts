import * as express from 'express';
import * as helmet from 'helmet';
import cors from './config/cors';
import morgan from './config/morgan';

const app = express();
app.use(helmet());
app.use(morgan);
app.use(cors);

export default app;
