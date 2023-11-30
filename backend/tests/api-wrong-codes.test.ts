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

describe('API wrong http codes', () => {

    it('post /example 400', async () => {
        const exampleData = {
            na: 'test',
            des: 'test',
        };
        const postExampleWrongRes = await requestWithSupertest.post('/example').send(exampleData).set('Accept', 'application/json');
        expect(postExampleWrongRes.status).toEqual(400);
    });
});