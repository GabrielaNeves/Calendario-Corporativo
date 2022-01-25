import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { Area } from '../../infra/typeorm/entities/Area';
import { IAreasRepository } from '../../repositories/IAreasRepository';
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
    name: string;
    description: string;
    pillar_id: string;
}

@injectable()
class CreateAreaUseCase {
    constructor(
        @inject("AreasRepository")
        private areasRepository: IAreasRepository
    ) { }
    async execute({ name, description, pillar_id }: IRequest): Promise<Area> {
        const areaAlreadyExists = await this.areasRepository.findByName(name);

        if (areaAlreadyExists) {
            throw new AppError("Area Already exists!");
        }
        
        const area = await this.areasRepository.create({
            name,
            description,
            pillar_id
        });
        
        return area;
    }
};

export { CreateAreaUseCase };