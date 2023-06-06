import { Router } from 'express';
import peoplesRoutes from './peoples.routes';

import { isAuthorizedMiddleware } from '../config'

const apiRouter = Router();

//apiRouter.use('/questions', isAuthorizedMiddleware, questionsRoutes)
apiRouter.use('/peoples', peoplesRoutes)

// Catch all other routes
apiRouter.use('/*', (req, res) => {
    res.status(404).json({
        'error': 'route not found'
    })
})

export default apiRouter;
