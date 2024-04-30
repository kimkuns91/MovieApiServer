import { Router } from 'express';
import movieRouter from './movieRouter.js'; // Importing the movieRouter

const apiRouter = Router(); // Creating a new Router instance

// Define the root route for the API
apiRouter.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// Set up the movies route to use the movieRouter for handling
apiRouter.use('/movies', movieRouter);

export default apiRouter;