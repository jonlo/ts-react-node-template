import dotenv from 'dotenv';
dotenv.config();
import { ExpressServer } from './expressServer';
import express from 'express';
import { as } from 'vitest/dist/reporters-5f784f42';
// import { DbConnector } from './dbConnector';

const port = process.env.PORT ?? '8000';
const main = () => {
	new ExpressServer(express(), port);
	// const db = new DbConnector();
	// db.connect();
}

main();