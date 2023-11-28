import dotenv from 'dotenv';
dotenv.config();
import { ExpressServer } from './expressServer';
import express from 'express';
import { DbConnector } from './db/dbConnector';

const port = process.env.PORT ?? '8000';


const server = new ExpressServer(express(), port);
const db = new DbConnector();
db.connect();
