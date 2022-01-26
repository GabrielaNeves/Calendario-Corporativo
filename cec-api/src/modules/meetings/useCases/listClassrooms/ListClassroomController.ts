import 'reflect-metadata';
import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListClassroomsUseCase } from './ListClassroomsUseCase';

class ListClassRoomsController {

    async handle(request: Request, response: Response): Promise<Response>{
        const listClassroomsUseCase = container.resolve(ListClassroomsUseCase);

        const all = await listClassroomsUseCase.execute();

        return response.json(all);
    }
}

export { ListClassRoomsController };