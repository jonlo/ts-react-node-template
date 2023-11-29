import dotenv from 'dotenv';
dotenv.config();
import { ExpressServer } from '../src/expressServer';
import express from 'express';
import * as dbHandler from './db-handler';
import supertest from 'supertest';
import { beforeAll, afterEach, afterAll, describe, it, expect } from 'vitest';
import { Example } from '../src/models/example/example';

const expressServer = new ExpressServer(express(), process.env.PORT ?? '8000');

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

const requestWithSupertest = supertest(expressServer.getServer());

describe('examples api tests', () => {
    it('get /examples 200', async () => {
        const example: Example = {
            name: 'test',
            description: 'test',
        };
        const res = await requestWithSupertest.post('/example').send(example).set('Accept', 'application/json');
        const examplesRes = await requestWithSupertest.get('/examples').set('Accept', 'application/json');
        expect(res.status).toEqual(200);
        expect(examplesRes.body.length).toEqual(1);
    });

    it('post /example 200', async () => {
        const example: Example = {
            name: 'test',
            description: 'test',
        };
        const res = await requestWithSupertest.post('/example').send(example).set('Accept', 'application/json');
        expect(res.status).toEqual(200);
        expect(res.body.name).toEqual('test');
    });

    it('get /example 200', async () => {
        const example: Example = {
            name: 'test',
            description: 'test',
        };
        const exampleRes = await requestWithSupertest.post('/example').send(example).set('Accept', 'application/json');
        const example2 = exampleRes.body;
        const res2 = await requestWithSupertest.get('/example').query({ id: example2.dbId }).set('Accept', 'application/json');
        expect(res2.status).toEqual(200);
        expect(res2.body.name).toEqual('test');
    });

    it('update /example 200', async () => {
        const example: Example = {
            name: 'test',
            description: 'test',
        };
        const exampleRes = await requestWithSupertest.post('/example').send(example).set('Accept', 'application/json');
        const example2 = exampleRes.body;
        example2.description = 'test2';
        const res2 = await requestWithSupertest.put('/example').send(example2).set('Accept', 'application/json');
        expect(res2.status).toEqual(200);
        expect(res2.body.description).toEqual('test2');
    });

    it('delete /example 200', async () => {
        const example: Example = {
            name: 'test',
            description: 'test',
        };
        const exampleRes = await requestWithSupertest.post('/example').send(example).set('Accept', 'application/json');
        const example2 = exampleRes.body;
        const res2 = await requestWithSupertest.delete('/example').query({ id: example2.dbId }).set('Accept', 'application/json');
        const examplesRes = await requestWithSupertest.get('/examples').set('Accept', 'application/json');
        expect(res2.status).toEqual(200);
        expect(res2.body.description).toEqual('test');
        expect(examplesRes.body.length).toEqual(0);
    });
});