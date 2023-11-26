
import express, { Request, Response } from 'express';

const examples = express();

examples.post('/example', async (req: Request, res: Response) => {
    try {
        res.status(200).send();
    } catch (err) {
        res.status(400).send();
    }
});

export { examples };
