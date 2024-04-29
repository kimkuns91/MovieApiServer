import * as movieController from '../controllers/movieController';

import { Router } from 'express';

const router = Router();

router.get('/', movieController.getAllMovies);

export default router;