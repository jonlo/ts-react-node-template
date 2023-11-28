/* eslint-disable @typescript-eslint/no-var-requires */
import { Application, } from 'express'
import { routes } from './routes/index';
import {Server} from 'node:http';
import Debug from "debug";
const debug = Debug("Example:server");
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');

export class ExpressServer {
	public app: Application;
	public port: string;
	private server: Server;

	constructor(app: Application, port: string) {
		morgan.token('id', function getId(req:any) {
			return req.id;
		});
		this.app = app;
		this.port = port;
		this.app.use(helmet());
		this.app.use(
			morgan(':id :method :url :response-time :status', {
				skip: () => process.env.NODE_ENV === 'test'
			})
		);
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());
		this.app.use(routes);
		this.server = this.app.listen(port, () => {
			debug('⚡️ Backend running at port %d', port);
		});
		this.server.setTimeout(50000);
	}

	close() {
		this.server.close();
	}

	getServer(): Server {
		return this.server;
	}
}
