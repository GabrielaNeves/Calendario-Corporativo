import { Classroom } from "../infra/typeorm/entities/Classroom";


interface ICreateClassroomDTO{
    name: string;
    description: string;
    capacity: number;
}

interface IClassroomsRepository{
    create({ capacity, description, name }: ICreateClassroomDTO): Promise<Classroom>;
    list(): Promise<Classroom[]>;
    findByName(name: string): Promise<Classroom>;
}

export { ICreateClassroomDTO, IClassroomsRepository }