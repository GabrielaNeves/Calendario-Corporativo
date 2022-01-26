
interface IRequest {
    name: string;
    surname: string;
    email: string;
}

class CreateInstructorUseCase {
    async execute({ name, surname, email }: IRequest): Promise<void> {

    }
};

export { CreateInstructorUseCase };