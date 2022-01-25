import { ICreateAreaDTO } from "../../dtos/ICreateAreaDTO";
import { Area } from "../../infra/typeorm/entities/Area";
import { IAreasRepository } from "../IAreasRepository";


class AreasRepositoryInMemory implements IAreasRepository {
    areas: Area[] = [];
    async create({ name, description, pillar_id }: ICreateAreaDTO): Promise<Area> {
        const area = new Area();
        
        Object.assign(area, {
            name,
            description,
            pillar_id
        });
        
        this.areas.push(area);

        return area;
    }
    
    async findByName(name: string): Promise<Area> {
        return this.areas.find(area => area.name === name);
    }
}

export { AreasRepositoryInMemory };