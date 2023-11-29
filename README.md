# Ts react node template

This is a template for a fullstack project using typescript, react and node.js (with express) and a mongoDB database.
Vitest is used as a test runner for both the frontend and the backend. React testing library is available for the frontend.

The tooling used in this project is listed at the end of this document. [here](#tooling)

# Configuration

## Environment variables

### Backend
We have a .env file in the root of the backend folder, this file contains the environment variables for the backend, the file should not be commited to the repository, so you need to create it manually, the file should look like this:

```bash
PORT=8000  ##Port where the backend will run
DEBUG =Example:* ##Debug namespace
DEBUG_COLORS=true ##Debug colors
DB_URL = "mongodb://localhost:27018/" ##MongoDB url
DB_NAME = "exampleDB" ##MongoDB database name
DB_USER = "root" ##MongoDB user
DB_PASS = "example" ##MongoDB password
```

# Running the project

## Development

### Backend
To run the backend in development mode, you need to run the following commands:

First, you need to start the mongodb database, you can do this by running the following command:

```bash
docker-compose -f docker-compose.dev.yml up -d --build
```

After that, you can run the backend using the following commands:

```bash
cd backend
npm install
npm run dev
```
In order to test the backend, you can use the following command:

```bash
npm run test
```

### Frontend
To run the frontend in development mode, you need to run the following commands:

```bash
cd frontend
npm install
npm run dev
```

In order to test the frontend, you can use the following command:

```bash
npm run test
```

## Production

As backend and frontend are both dockerized, you can deploy then in any docker compatible environment.
A docker compose file is provided to run the project in production mode, you need to run the following commands:

```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

This should build the images and run the containers, the frontend will be available at http://localhost and the backend will be available at http://localhost/backend.

The docker compose has a frontend-builder service, this service is used to build the frontend project, this build is used in the frontend service, this is done to avoid installing the dependencies in the frontend service, this way we can reduce the size of the image.
After that, the frontend service will run the project in production mode using a express server.

Nginx is used as a reverse proxy to serve the frontend and the backend, the nginx configuration is in the nginx folder.

# Tooling

## Frontend
- [typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)

## Backend
- [typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)

### Database
- [MongoDB](https://www.mongodb.com/)
- [mongoose](https://mongoosejs.com/) An ODM (Object data modeling) for MongoDB

### Dependecies

- [helmet](https://helmetjs.github.io/) A middleware to secure the Express app 
  - [Using Helmet in Node.js to secure your application](https://blog.logrocket.com/using-helmet-node-js-secure-application/)
- [morgan](https://github.com/expressjs/morgan#readme) A middleware to log HTTP requests
- [express-validator](https://express-validator.github.io/docs/) A middleware to validate HTTP requests
- [body-parser](https://www.npmjs.com/package/body-parser) A middleware to parse HTTP requests
- [debug](https://github.com/debug-js/debug#readme) A debugging tool


## Deploy
- [Docker](https://www.docker.com/)
- [nginx](https://www.nginx.com/)

## Testing
- [vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  
