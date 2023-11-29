import { Schema, Document, model } from 'mongoose';
import { Example } from '../../../models/example/example';


export interface ExampleSchema extends Example, Document {}

export const exampleSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	description: {
		type: String
	}
});

export const ExampleModel = model<ExampleSchema>('Example', exampleSchema);
