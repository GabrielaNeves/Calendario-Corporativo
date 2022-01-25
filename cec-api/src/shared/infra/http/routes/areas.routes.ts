import { Router } from 'express';
import { CreateAreaController } from '../../../../modules/meetings/useCases/createArea/CreateAreaController';

const areasRouter = Router();

const createAreaController = new CreateAreaController()

areasRouter.post("/", createAreaController.handle);

export { areasRouter };