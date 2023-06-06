import { Router } from "express"
import { destroy, index, store, update, show } from '../controllers/PeopleController'
import { createPeopleSchema } from '../validations'
import { checkSchema } from 'express-validator';

const peoplesRouter = Router()

peoplesRouter.get('/', index)
peoplesRouter.get('/:id', show)
peoplesRouter.post('/', checkSchema(createPeopleSchema), store)
peoplesRouter.put('/:id', checkSchema(createPeopleSchema), update)
peoplesRouter.delete('/:id', destroy)

export default peoplesRouter;
