import { Schema, Document, model } from 'mongoose';

export interface ExampleSchema extends Document {
	name: string;
	description: string;
}

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