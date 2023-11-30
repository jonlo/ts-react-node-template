import express, { Request, Response } from 'express';
import Debug from "debug";
import { CrudController } from '../controllers/crudController';
import { ExamplesRepository } from '../db/mongodb/repositories/examplesRepository';
import { validate } from '../middlewares/validator';
import { createRules, updateRules, getRules, deleteRules } from '../middlewares/exampleRules';

const debug = Debug("Example:examples");
const error = Debug("Example:error");

const examples = express();
const examplesController = new CrudController(new ExamplesRepository());

examples.get('/examples', async (req: Request, res: Response) => {
    try {
        const examples = await examplesController.getAll();
        if (!examples) {
            error('Get examples failed');
            res.status(400).send();
            return;
        }
        debug('Get examples');
        res.status(200).send(examples);
    } catch (err) {
        error(err);
        res.status(400).send();
    }
});

examples.post('/example', createRules(), validate, async (req: Request, res: Response) => {
    try {
        const example = await examplesController.create(req.body);
        if (!example) {
            error('Post example failed');
            res.status(400).send();
            return;
        }
        debug('Post example');
        res.status(200).send(example);
    } catch (err) {
        error(err);
        res.status(400).send();
    }
});

examples.get('/example', getRules(), validate, async (req: Request, res: Response) => {
    try {
        const example = await examplesController.getById(req.query.id as string);
        if (!example) {
            debug('Example not found');
            res.status(404).send();
            return;
        }
        debug('Get example');
        res.status(200).send(example);
    } catch (err) {
        error(err);
        res.status(400).send();
    }
});

examples.put('/example', updateRules(), validate, async (req: Request, res: Response) => {
    try {
        const example = await examplesController.update(req.body);
        if (!example) {
            debug('Update example failed');
            res.status(400).send();
            return;
        }
        debug('Update example');
        res.status(200).send(example);
    } catch (err) {
        error(err);
        res.status(400).send();
    }
});

examples.delete('/example', deleteRules(), validate, async (req: Request, res: Response) => {
    try {
        const example = await examplesController.delete(req.query.id as string);
        if (!example) {
            debug('Delete example failed');
            res.status(400).send();
            return;
        }
        debug('Delete example');
        res.status(200).send(example);
    } catch (err) {
        error(err);
        res.status(400).send();
    }
});

export { examples };
