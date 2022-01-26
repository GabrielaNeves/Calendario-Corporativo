import { getRepository, Repository } from "typeorm";
import { ICreateAreaDTO } from "../../../dtos/ICreateAreaDTO";
import { IAreasRepository } from "../../../repositories/IAreasRepository";
import { Area } from "../entities/Area";


class AreasRepository implements IAreasRepository {

    private repository: Repository<Area>

    constructor(){
        this.repository = getRepository(Area);
    }
    async create({ name, description, pillar_id }: ICreateAreaDTO): Promise<Area> {
        const area = this.repository.create({
            name,
            description,
            pillar_id
        });
        
        await this.repository.save(area);
        
        return area;
    }
    
    async findByName(name: string): Promise<Area> {
        const area = await this.repository.findOne({ name });
        
        return area;
    }
    
    async list(): Promise<Area[]> {
        const areas = await this.repository.find();
        return areas;
    }
};

export { AreasRepository };