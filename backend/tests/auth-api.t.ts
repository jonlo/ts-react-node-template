// import dotenv from 'dotenv';
// dotenv.config();
// import { ExpressServer } from '../expressServer';
// import express from 'express';
// import * as dbHandler from './db-handler';
// import supertest from 'supertest';
// import { beforeAll,afterEach,afterAll } from 'vitest';
// const expressServer = new ExpressServer(express(), process.env.PORT ?? '9000');

// beforeAll(async () => await dbHandler.connect());
// afterEach(async () => await dbHandler.clearDatabase());
// afterAll(async () => await dbHandler.closeDatabase());

// const requestWithSupertest = supertest(expressServer.getServer());

// describe('post /auth endpoint', () => {
//     it('post /auth send correct data expect user and 200', async () => {
//         const res = await requestWithSupertest
//             .post('/user')
//             .send({ name: 'Jon', email: 'test@test.com', pwd: '1234', createdAt: new Date() })
//             .set('Accept', 'application/json');
//         const user = res.body;
//         const res2 = await requestWithSupertest.post('/auth').send({ email: user.email, pwd: user.pwd }).set('Accept', 'application/json');
//         expect(res2.body.name).toEqual('Jon');
//         expect(res2.status).toEqual(200);
//     });

// });