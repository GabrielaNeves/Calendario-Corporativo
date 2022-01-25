import { inject, injectable } from "tsyringe";
import { Classroom } from "../../infra/typeorm/entities/Classroom";
import { IClassroomsRepository } from "../../repositories/IClassroomsRepository";

@injectable()
class ListClassroomsUseCase {

    constructor(
        @inject("ClassroomsRepository")
        private classroomsRepository: IClassroomsRepository
    ) {}
    async execute(): Promise<Classroom[]> {
        const classrooms = await this.classroomsRepository.list();

        return classrooms;
    }
}

export { ListClassroomsUseCase };