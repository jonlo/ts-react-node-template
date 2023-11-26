import Debug from "debug";
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
const debug = Debug("Example:examples");

let mongod: MongoMemoryServer;

export const connect = async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await mongoose.connect(uri);
    debug('Connected to TEST MongoDB');
}

export const closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
}

export const clearDatabase = async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
    }
}