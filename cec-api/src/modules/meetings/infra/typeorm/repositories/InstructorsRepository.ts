import { getRepository, Repository } from "typeorm";
import { ICreateInstructorDTO } from "../../../dtos/ICreateInstructorDTO";
import { IInstructorsRepository } from "../../../repositories/IInstructorsRepository";
import { Instructor } from "../entities/Instructor";


class InstructorsRepository implements IInstructorsRepository {

    private repository: Repository<Instructor>;

    constructor(){
        this.repository = getRepository(Instructor);
    }
    async create({ name, surname, email }: ICreateInstructorDTO): Promise<Instructor> {
        const instructor = this.repository.create({
            name,
            surname,
            email
        });
        
        await this.repository.save(instructor);
        
        return instructor;
    }
    async findByName(name: string): Promise<Instructor> {
        const instructor = await this.repository.findOne({
            name
        });
        
        return instructor;
    }
    
    async list(name?: string, surname?: string, email?: string): Promise<Instructor[]> {
        const instructorsQuery = this.repository
            .createQueryBuilder("i")
            .where("i.available = :available", { available: true });
        
        if (name){
            instructorsQuery.andWhere("i.name = :name", { name });
        }

        if (surname){
            instructorsQuery.andWhere("i.surname = :surname", { surname });
        }

        if (email){
            instructorsQuery.andWhere("i.email = :email", { email });
        }

        const instructors = await instructorsQuery.getMany();

        return instructors;
    }
};

export { InstructorsRepository };