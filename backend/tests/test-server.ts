import { ExpressServer } from '../src/expressServer';
import express from 'express';
import supertest from 'supertest';

const expressServer = new ExpressServer(express(), '0');
export const requestWithSupertest = supertest(expressServer.getServer());

