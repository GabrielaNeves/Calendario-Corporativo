import { ICreateInstructorDTO } from '../../dtos/ICreateInstructorDTO';
import { Instructor } from '../../infra/typeorm/entities/Instructor';
import { IInstructorsRepository } from '../IInstructorsRepository'

class InstructorsRepositoryInMemory implements IInstructorsRepository{
    instructors: Instructor[] = [];
    
    async create({ name, surname, email }: ICreateInstructorDTO): Promise<Instructor> {
        const instructor = new Instructor();
        Object.assign(instructor, {
            name,
            surname,
            email
        });
        this.instructors.push(instructor);
        return instructor;
    }
    
    async findByName(name: string): Promise<Instructor> {
        return this.instructors.find(instructor => instructor.name === name);
    }

    async list(name?: string, surname?: string, email?: string): Promise<Instructor[]> {
        const all = this.instructors.filter(
            (instructor) => {
                if(
                    instructor.avaliable === true ||
                    (name && instructor.name === name) ||
                    (surname && instructor.surname === surname) ||
                    (email && instructor.email === email)
                ) {
                    return instructor
                }
            }
        );

        return all;
    }
};

export { InstructorsRepositoryInMemory };