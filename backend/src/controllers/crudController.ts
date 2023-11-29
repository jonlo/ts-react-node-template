import { IRepository } from '../db/repositories/IRepository';
import Debug from "debug";
const debug = Debug("Example:exampleController");

export class CrudController<T> {
    repository: IRepository<T>;

    constructor(repository: IRepository<T>) {
        this.repository = repository;
    }

    async getAll(filter?: Object) {
        debug('get All');
        return await this.repository.getAll(filter);
    }

    async getById(id: string) {
        debug('get example By Id ' + id);
        return await this.repository.getById(id);
    }

    async create(data: T) {
        debug('create' + data);
        return await this.repository.create(data);
    }

    async update(id: string, data: T) {
        debug('update' + id);
        return await this.repository.update(data);
    }

    async delete(id: string) {
        debug('delete' + id);
        return await this.repository.delete(id);
    }

    async getByFilter(filter: string) {
        debug('get by tag ' + filter);
        return await this.repository.getAll({ filter: filter });
    }


}
