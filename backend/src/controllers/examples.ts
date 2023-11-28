import { ISnipRepository } from '../../repositories/snip/iSnipRepository';
import { ISnipModel } from '../../models/snip/snip';
import Debug from 'debug';
const debug = Debug('*');

export class SnipsController {
    repository: ISnipRepository;

    constructor(repository: ISnipRepository) {
        this.repository = repository;
    }

    async getAll() {
        debug('snip:getAll snips');
        return await this.repository.getAll(null);
    }

    async getById(id: string) {
        debug('snip:getById snips ' + id);
        return await this.repository.getById(id);
    }

    async create(snip: ISnipModel) {
        debug('snip:create snip ' + snip);
        return await this.repository.create(snip);
    }

    async update(id: string, snip: ISnipModel) {
        debug('snip:update snip' + id);
        return await this.repository.update(id, snip);
    }

    async delete(id: string) {
        debug('snip:delete snip' + id);
        return await this.repository.delete(id);
    }

    async getByTag(tag: string) {
        debug('snip:getByTag snips ' + tag);
        return await this.repository.getAll({ tags: tag });
    }

    async getByLanguage(language: string) {
        debug('snip:getByLanguage snips ' + language);
        return await this.repository.getAll({ language: language });
    }

    async getByUser(userId: string) {
        debug('snip:getbyUser snips ' + userId);
        return await this.repository.getAll({ user: userId });
    }
}
