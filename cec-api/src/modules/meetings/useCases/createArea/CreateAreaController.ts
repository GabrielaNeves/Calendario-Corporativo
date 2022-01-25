import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateAreaUseCase } from './CreateAreaUseCase';

class CreateAreaController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { name, description, pillar_id } = request.body;
        const createAreaUseCase = container.resolve(CreateAreaUseCase);
        const area = await createAreaUseCase.execute({ name, description, pillar_id });
        return response.status(201).json(area);
    }
};

export { CreateAreaController };