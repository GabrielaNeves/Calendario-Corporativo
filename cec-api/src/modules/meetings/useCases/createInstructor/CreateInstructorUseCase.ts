import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Instructor } from "../../infra/typeorm/entities/Instructor";
import { IInstructorsRepository } from "../../repositories/IInstructorsRepository";

interface IRequest {
    name: string;
    surname: string;
    email: string;
}

@injectable()
class CreateInstructorUseCase {
    constructor(
        @inject("InstructorsRepository")
        private instructorsRepository: IInstructorsRepository
    ){}
    async execute({ name, surname, email }: IRequest): Promise<Instructor> {
        const instructorAlreadyExists = await this.instructorsRepository.findByName(name);
        if(instructorAlreadyExists){
            throw new AppError("Instructor Already Exists!");
        }
        const instructor = await this.instructorsRepository.create({
            name,
            surname,
            email
        })

        return instructor;
    }
};

export { CreateInstructorUseCase };