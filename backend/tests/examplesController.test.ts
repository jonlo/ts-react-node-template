import { beforeAll, afterEach, describe, it, expect, afterAll } from 'vitest';
import * as dbHandler from './db-handler';
import { CrudController } from '../src/controllers/crudController';
import { ExamplesRepository } from '../src/repositories/examplesRepository';
import { Example } from '../src/models/example/example';


beforeAll(async () => await dbHandler.connect().then(() => dbHandler.populateDatabase()));
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

describe('Examples controller', () => {

  it('Add example', async () => {
    const examplesController = new CrudController(new ExamplesRepository());
    const example: Example = {
      name: 'test',
      description: 'test',
    };
    const exampleDb = await examplesController.create(example);
    expect(exampleDb?.name).toEqual('test');

  });

  it('Get examples', async () => {
    const examplesController = new CrudController(new ExamplesRepository());
    const example1: Example = {
      name: 'test',
      description: 'test',
    };
    const example2: Example = {
      name: 'test2',
      description: 'test',
    };
    await examplesController.create(example1);
    await examplesController.create(example2);
    const examples = await examplesController.getAll();
    expect(examples.length).toEqual(2);
  });

  it('Delete example', async () => {
    const examplesController = new CrudController(new ExamplesRepository());
    const example1: Example = {
      name: 'test',
      description: 'test',
    }
    const example2: Example = {
      name: 'test2',
      description: 'test',
    }
    const exampleDB = await examplesController.create(example1);
    await examplesController.create(example2);
    await examplesController.delete(exampleDB?.id as string);
    const examples = await examplesController.getAll();
    expect(examples.length).toEqual(1);
  });
});

