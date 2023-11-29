import dotenv from 'dotenv';
dotenv.config();
import { ExpressServer } from '../src/expressServer';
import express from 'express';
import * as dbHandler from './db-handler';
import supertest from 'supertest';
import { beforeAll, afterEach, afterAll, describe, it, expect } from 'vitest';

const expressServer = new ExpressServer(express(), process.env.PORT ?? '8000');

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

const requestWithSupertest = supertest(expressServer.getServer());

describe('examples api tests', () => {
    it('get /status 200', async () => {
        const res = await requestWithSupertest
            .get('/status')
            .set('Accept', 'application/json');
        expect(res.status).toEqual(200);
    });

});