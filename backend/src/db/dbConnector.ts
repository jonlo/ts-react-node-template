
import Debug from "debug";
const debug = Debug("Example:db");
const error = Debug("Example:error");
import mongoose from 'mongoose';

export class DbConnector {
	async connect() {
		const dbUrl = process.env.DB_URL ?? 'localhost';
		const dbName = process.env.DB_NAME ?? 'exampleDB';
		const url = dbUrl + dbName;
		try{
			await mongoose.connect(url, {
				authSource: 'admin',
				user: process.env.DB_USER,
				pass: process.env.DB_PASS
			});
			debug('Connected to MongoDB');

		}catch(e){
			error('Error connecting to MongoDB');
			error(e);
		}
	}
}
