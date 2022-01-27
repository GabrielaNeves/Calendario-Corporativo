import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateInstructorUseCase } from "./CreateInstructorUseCase";


class CreateInstructorsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, surname, email } = request.body;

        const createInstructorUseCase = container.resolve(CreateInstructorUseCase);

        const instructor = await createInstructorUseCase.execute({
            name,
            surname,
            email
        });

        return response.status(201).json(instructor);
    }
};

export { CreateInstructorsController };