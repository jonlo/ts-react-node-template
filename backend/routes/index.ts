import express from 'express';
import examples from './examples';

const setRoutes = (app: express.Application) => {
	app.use('/examples', examples); // Add this line to mount the Task API routes
};

export { setRoutes };
