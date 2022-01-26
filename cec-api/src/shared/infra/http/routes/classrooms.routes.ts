import { Router } from 'express';
import { ensuredAuthenticated } from '../middlewares/ensureAlthenticated';
import { CreateClassroomController } from '../../../../modules/meetings/useCases/createClassroom/CreateClassroomController';
import { ListClassRoomsController } from '../../../../modules/meetings/useCases/listClassrooms/ListClassroomController';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const classroomsRouter = Router();

const createClassroomController = new CreateClassroomController();

const listClassroomsController = new ListClassRoomsController();

classroomsRouter.post("/", ensuredAuthenticated, ensureAdmin, createClassroomController.handle);

classroomsRouter.get("/", listClassroomsController.handle);

export { classroomsRouter };