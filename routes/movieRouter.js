import * as movieController from '../controllers/movieController.js';

import { Router } from 'express';

const router = Router();

// GET all movies. Middleware can be added here if needed.
router.get('/', movieController.getAllMovies);

// Example of adding more routes
// router.get('/:id', movieController.getMovieById);
// router.post('/', movieController.createMovie);
// router.put('/:id', movieController.updateMovie);
// router.delete('/:id', movieController.deleteMovie);

export default router;