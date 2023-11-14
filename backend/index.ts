import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan'
import { setRoutes } from './routes/index';
import Debug from "debug";
const debug = Debug("Example:server");

const app: Express = express();
const port = process.env.PORT;
app.use(helmet());
app.use(morgan(':method :url :response-time :status', { skip: (req: Request, res: Response) => process.env.NODE_ENV === 'test' }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
setRoutes(app);

app.get('/', (req: Request, res: Response) => {
  res.send('Example test server');
});

const server = app.listen(port, () => {
  debug('⚡️ Backend running at port %d', port);
});

export default server;