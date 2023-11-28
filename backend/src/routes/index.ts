import express from 'express';
import { examples } from './examples';

const routes = express();
routes.use(examples);

export { routes };