import { beforeAll, afterEach, afterAll, describe, it, expect, beforeEach } from 'vitest';
import * as dbHandler from './db-handler';
import supertest from 'supertest';
import { requestWithSupertest } from './test-server';
import { Example } from '../src/models/example/example';

let postExampleRes: supertest.Response;

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => {
    await dbHandler.closeDatabase();
});
beforeEach(async () => {
    const exampleData: Example = {
        name: 'test',
        description: 'test',
    };
    postExampleRes = await requestWithSupertest.post('/example').send(exampleData).set('Accept', 'application/json');
});

describe('API correct http codes', () => {
    it('get /examples 200', async () => {
        const getExamplesRes = await requestWithSupertest.get('/examples').set('Accept', 'application/json');
        expect(postExampleRes.status).toEqual(200);
        expect(getExamplesRes.body.length).toEqual(1);
    });

    it('post /example 200', async () => {
        expect(postExampleRes.status).toEqual(200);
        expect(postExampleRes.body.name).toEqual('test');
    });

    it('get /example 200', async () => {
        const example = postExampleRes.body;
        const getExampleRes = await requestWithSupertest.get('/example').query({ id: example.dbId }).set('Accept', 'application/json');
        expect(getExampleRes.status).toEqual(200);
        expect(getExampleRes.body.name).toEqual('test');
    });

    it('update /example 200', async () => {
        const example = postExampleRes.body;
        example.description = 'test2';
        const putExampleRes = await requestWithSupertest.put('/example').send(example).set('Accept', 'application/json');
        expect(putExampleRes.status).toEqual(200);
        expect(putExampleRes.body.description).toEqual('test2');
    });

    it('delete /example 200', async () => {
        const example = postExampleRes.body;
        const deleteExampleRes = await requestWithSupertest.delete('/example').query({ id: example.dbId }).set('Accept', 'application/json');
        const getExamplesRes = await requestWithSupertest.get('/examples').set('Accept', 'application/json');
        expect(deleteExampleRes.status).toEqual(200);
        expect(deleteExampleRes.body.description).toEqual('test');
        expect(getExamplesRes.body.length).toEqual(0);
    });
});