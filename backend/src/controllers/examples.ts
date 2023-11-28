import { IRepository } from '../repositories/IRepository';
import { Example } from '../models/example/example';
import Debug from "debug";
const debug = Debug("Example:exampleController");

export class ExampleController {
    repository: IRepository<Example>;

    constructor(repository: IRepository<Example>) {
        this.repository = repository;
    }

    async getAll(filter: Object) {
        debug('get All examples');
        return await this.repository.getAll(filter);
    }

    async getById(id: string) {
        debug('get example By Id ' + id);
        return await this.repository.getById(id);
    }

    async create(example: Example) {
        debug('create example' + example.id);
        return await this.repository.create(example);
    }

    async update(id: string, example: Example) {
        debug('update example' + id);
        return await this.repository.update(example);
    }

    async delete(id: string) {
        debug('delete example' + id);
        return await this.repository.delete(id);
    }

    async getByFilter(filter: string) {
        debug('get by tag ' + filter);
        return await this.repository.getAll({ filter: filter });
    }


}
