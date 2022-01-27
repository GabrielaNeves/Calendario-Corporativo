import { Request, Response } from "express";
import { resolve } from "path";
import { container } from "tsyringe";
import { ListInstructorsUseCase } from "./ListInstructorsUseCase";


class ListInstructorsController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { name, surname, email } = request.query;

        const listInstructorsUseCase = container.resolve(ListInstructorsUseCase);

        const instructors = await listInstructorsUseCase.execute({
            name: name as string,
            surname: surname as string,
            email: email as string
        });

        return response.json(instructors);
    }
};

export { ListInstructorsController };