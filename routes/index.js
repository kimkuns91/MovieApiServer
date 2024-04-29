import { Router } from 'express';
import movieRouter from './movieRouter';

// movieRouter를 가져옵니다.

const apiRouter = Router();

// Define routes for the apiRouter
apiRouter.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// movies 경로에 대한 router를 설정합니다.
apiRouter.use('/movies', movieRouter);

export default apiRouter;