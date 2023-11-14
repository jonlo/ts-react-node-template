import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const path = require('path');
import helmet from 'helmet';


const app = express();
const port = process.env.PORT;
app.use(helmet());

app.use(express.static(path.join(process.cwd(), '/frontend')));

app.listen(port);

console.log('⚡️ Frontend running at port %d', port);