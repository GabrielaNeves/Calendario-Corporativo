import { inject, injectable } from "tsyringe";
import { Instructor } from "../../infra/typeorm/entities/Instructor";
import { IInstructorsRepository } from "../../repositories/IInstructorsRepository";


interface IRequest {
    name?: string;
    surname?: string;
    email?: string;
}

@injectable()
class ListInstructorsUseCase {

    constructor(
        @inject("InstructorsRepository")
        private instructorsRepository: IInstructorsRepository
    ) { }
    async execute({ name, surname, email }: IRequest): Promise<Instructor[]> {
        const instructors = await this.instructorsRepository.list(name, surname, email);
        return instructors;
    }
};

export { ListInstructorsUseCase };