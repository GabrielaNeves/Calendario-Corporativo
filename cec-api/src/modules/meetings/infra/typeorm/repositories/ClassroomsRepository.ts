import { getRepository, Repository } from "typeorm";
import { Classroom } from "../entities/Classroom";
import { IClassroomsRepository, ICreateClassroomDTO } from "../../../repositories/IClassroomsRepository";


class ClassroomsRepository implements IClassroomsRepository {
    private repository: Repository<Classroom>

    constructor(){
        this.repository = getRepository(Classroom);
    }
    
    async create({ capacity, description, name }: ICreateClassroomDTO): Promise<Classroom> {
        const classroom = this.repository.create({
            capacity,
            description,
            name
        });
        
        await this.repository.save(classroom);

        return classroom;
    }
    async list(): Promise<Classroom[]> {
        const classrooms = await this.repository.find();
        return classrooms;
    }
    async findByName(name: string): Promise<Classroom> {
        const classroom = this.repository.findOne({
            name
        })
        return classroom;
    }


}

export { ClassroomsRepository }