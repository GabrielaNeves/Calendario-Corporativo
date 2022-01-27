import { Router } from 'express';
import { CreateInstructorsController } from '../../../../modules/meetings/useCases/createInstructor/CreateInstructorsController';
import { ListInstructorsController } from '../../../../modules/meetings/useCases/listInstructors/ListInstructorsController';

const instructorsRouter = Router();

const createInstructorController = new CreateInstructorsController();
const listInstructorsController = new ListInstructorsController();

instructorsRouter.post("/", createInstructorController.handle);
instructorsRouter.get("/available", listInstructorsController.handle);

export { instructorsRouter };