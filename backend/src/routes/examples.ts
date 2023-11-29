
import express, { Request, Response } from 'express';
import Debug from "debug";
import { CrudController } from '../controllers/crudController';
import { ExamplesRepository } from '../db/mongodb/repositories/examplesRepository';

const debug = Debug("Example:examples");
const error = Debug("Example:error");

const examples = express();
const examplesController = new CrudController(new ExamplesRepository());

examples.get('/status', async (req: Request, res: Response) => {
    try {
        debug('tatus');
        res.status(200).send();
    } catch (err) {
        error(err);
        res.status(400).send();
    }
});

examples.post('/example', async (req: Request, res: Response) => {
    try {
        const example = await examplesController.create(req.body);
        debug('⚡️ Post example');
        res.status(200).send(example);
    } catch (err) {
        error(err);
        res.status(400).send();
    }
});

examples.get('/example', async (req: Request, res: Response) => {
    try {
        const examples = await examplesController.getById(req.query.id as string);
        res.status(200).send(examples);
    } catch (err) {
        error(err);
        res.status(400).send();
    }
});


export { examples };
