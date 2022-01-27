import { Router } from 'express';
import { pillarRouters } from './pillars.routes';
import { classroomsRouter } from './classrooms.routes';
import { userRouter } from './users.routes';
import { authenticateRouter } from './authenticate.routes';
import { areasRouter } from './areas.routes';
import { instructorsRouter } from './instructors.routes';

const router = Router();

router.use("/pillars", pillarRouters);
router.use("/classrooms", classroomsRouter);
router.use("/users", userRouter);
router.use("/areas", areasRouter);
router.use("/instructors", instructorsRouter);
router.use(authenticateRouter);

export { router };