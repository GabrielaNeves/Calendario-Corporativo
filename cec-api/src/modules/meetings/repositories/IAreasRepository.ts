import { ICreateAreaDTO } from "../dtos/ICreateAreaDTO";
import { Area } from "../infra/typeorm/entities/Area";


interface IAreasRepository {
    create(data: ICreateAreaDTO): Promise<Area>;
    findByName(name: string): Promise<Area>;
    list(): Promise<Area[]>;
};

export { IAreasRepository };