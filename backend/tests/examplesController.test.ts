import { beforeAll, afterEach, describe, it, expect, afterAll } from 'vitest';
import * as dbHandler from './db-handler';
import { CrudController } from '../src/controllers/crudController';
import { ExamplesRepository } from '../src/db/mongodb/repositories/examplesRepository';
import { Example } from '../src/models/example/example';


beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

describe('Examples controller', () => {

  it('Add example', async () => {
    const examplesController = new CrudController(new ExamplesRepository());
    const exampleData: Example = {
      name: 'test',
      description: 'test',
    };
    const example = await examplesController.create(exampleData);
    expect(example?.name).toEqual('test');

  });

  it('Add example wrong data', async () => {
    const examplesController = new CrudController(new ExamplesRepository());
    const exampleData: Example = {
      name: 'test',
      description: 'test',
    };
    const example = await examplesController.create(exampleData);
    expect(example?.name).toEqual('test');

  });

  it('Get example by id', async () => {
    const examplesController = new CrudController(new ExamplesRepository());
    const example1Data: Example = {
      name: 'test',
      description: 'test',
    };
    const example = await examplesController.create(example1Data);
    const exampleById = await examplesController.getById(example?.dbId as string);
    expect(exampleById).not.toEqual(null);
  });

  it('Get example by id wrong id', async () => {
    const examplesController = new CrudController(new ExamplesRepository());
    const example1Data: Example = {
      name: 'test',
      description: 'test',
    };
    await examplesController.create(example1Data);
    const exampleById = await examplesController.getById("notRealId");
    expect(exampleById).toEqual(null);
  });

  it('Get examples', async () => {
    const examplesController = new CrudController(new ExamplesRepository());
    const example1Data: Example = {
      name: 'test',
      description: 'test',
    };
    const example2Data: Example = {
      name: 'test2',
      description: 'test',
    };
    await examplesController.create(example1Data);
    await examplesController.create(example2Data);
    const examples = await examplesController.getAll();
    expect(examples?.length).toEqual(2);
  });

  it('Delete example', async () => {
    const examplesController = new CrudController(new ExamplesRepository());
    const example1Data: Example = {
      name: 'test',
      description: 'test',
    }
    const example2Data: Example = {
      name: 'test2',
      description: 'test',
    }
    const exampleDB = await examplesController.create(example1Data);
    await examplesController.create(example2Data);
    await examplesController.delete(exampleDB?.dbId as string);
    const examples = await examplesController.getAll();
    expect(examples?.length).toEqual(1);
  });
});

