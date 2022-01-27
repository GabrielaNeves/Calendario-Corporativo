import { ICreateInstructorDTO } from "../dtos/ICreateInstructorDTO";
import { Instructor } from "../infra/typeorm/entities/Instructor";


interface IInstructorsRepository {
    create(data: ICreateInstructorDTO): Promise<Instructor>;
    findByName(name: string): Promise<Instructor>;
    list(name?: string, surname?: string, email?: string): Promise<Instructor[]>;
}

export { IInstructorsRepository };