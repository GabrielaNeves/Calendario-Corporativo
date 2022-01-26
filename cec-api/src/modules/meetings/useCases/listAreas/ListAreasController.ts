import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAreasUseCase } from "./ListAreasUseCase";


class ListAreasController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAreasUseCase = container.resolve(ListAreasUseCase);

        const all = await listAreasUseCase.execute();

        return response.json(all);
    }
};

export { ListAreasController };