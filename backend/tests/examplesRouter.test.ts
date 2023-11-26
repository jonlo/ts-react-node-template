import server from '../index2';
import { describe, it, expect, afterAll } from 'vitest';
import supertest from 'supertest';

const requestWithSupertest = supertest(server);

describe('examples router', () => {

  it('GET /examples/status expect 200', async () => {
    const res = await requestWithSupertest.get('/examples/status');
    expect(res.status).toEqual(200);
  });

});

afterAll(() => {
  server.close();
});
