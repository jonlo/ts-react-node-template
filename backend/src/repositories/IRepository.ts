export interface IRepository<T> {
	getAll(filter: Object | null): Promise<T[]>;
	getById(id: string): Promise<T | null>;
	create(data: T): Promise<T | null>;
	update(data: T): Promise<T | null>;
	delete(id: string): Promise<T | null>;
}