
import express, { Request, Response } from 'express';
import Debug from "debug";

const debug = Debug("Example:examples");
const error = Debug("Example:error");

const examples = express();

examples.get('/example', async (req: Request, res: Response) => {
    try {
        debug('⚡️ Get example');
        res.status(200).send();
    } catch (err) {
        error(err);
        res.status(400).send();
    }
});

examples.post('/example', async (req: Request, res: Response) => {
    try {

        res.status(200).send();
    } catch (err) {
        error(err);
        res.status(400).send();
    }
});


export { examples };
