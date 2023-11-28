import { IRepository } from "./IRepository";
import { ExampleModel } from "../models/example/exampleSchema";
import { Example } from "../models/example/example";

import Debug from "debug";
const debug = Debug("Example:ExamplesRepository");

export class ExamplesRepository implements IRepository<Example> {

	async getAll(filter: Object): Promise<Example[]> {
		try {
			const models = await ExampleModel.find(filter);
			return models;
		} catch (err) {
			debug(err);
			return [];
		}
	}

	async getById(id: string): Promise<Example | null> {
		try {
			const filter = { _id: id };
			const example = await ExampleModel.findOne(filter) as Example;
			if (example) {
				debug('example found ' + example.name);
			}
			return example;
		} catch (err) {
			debug(err);
			return null;
		}
	}

	async create(data: Example): Promise<Example | null> {
		try {
			const modelSchema = new ExampleModel(data);
			const model = await modelSchema.save();
			debug('create ' + (data as any)["constructor"].name);
			return model;
		} catch (err) {
			debug(err);
			return null;
		}
	}

	async update(data: Example): Promise<Example | null> {
		try {
			const filter = { _id: data.id };
			const example = await ExampleModel.findOneAndUpdate(filter, data, {
				new: true
			}) as Example;
			if (example) {
				debug('update example ' + example.name);
			}
			return example;
		} catch (err) {
			debug(err);
			return null;
		}
	}

	async delete(id: string): Promise<Example | null> {
		try {
			const filter = { _id: id };
			const example = await ExampleModel.findOneAndDelete(filter) as Example;
			if (example) {
				debug('delete example ' + example.name);
			}
			return example;
		} catch (err) {
			debug(`example:${err}`);
			return null;
		}
	}


}