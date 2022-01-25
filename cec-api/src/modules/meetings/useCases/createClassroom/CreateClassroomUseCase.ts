import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Classroom } from "../../infra/typeorm/entities/Classroom";
import { IClassroomsRepository } from "../../repositories/IClassroomsRepository";

interface IRequest {
    name: string,
    description: string,
    capacity: number
}

@injectable()
class CreateClassroomUseCase {
    constructor(
        @inject("ClassroomsRepository")
        private ClassroomsRepository: IClassroomsRepository) { }
    async execute({ name, description, capacity }: IRequest): Promise<Classroom> {
        const classroomAlreadyExists = await this.ClassroomsRepository.findByName(name);
        if (classroomAlreadyExists) {
            throw new AppError("Classroom already exists!")
        }
        const classroom = await this.ClassroomsRepository.create({
            name,
            description,
            capacity
        });

        return classroom;
    }

}

export { CreateClassroomUseCase }