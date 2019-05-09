import * as express from 'express';
import * as helmet from 'helmet';

const app = express();
app.use(helmet());

export default app;
