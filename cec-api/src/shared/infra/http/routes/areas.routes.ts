import { Router } from 'express';
import { CreateAreaController } from '../../../../modules/meetings/useCases/createArea/CreateAreaController';
import { ListAreasController } from '../../../../modules/meetings/useCases/listAreas/ListAreasController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensuredAuthenticated } from '../middlewares/ensureAlthenticated';

const areasRouter = Router();

const createAreaController = new CreateAreaController()

const listAreasController = new ListAreasController();

areasRouter.post("/", ensuredAuthenticated, ensureAdmin, createAreaController.handle);
areasRouter.get("/", listAreasController.handle);

export { areasRouter };