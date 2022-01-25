import { AppError } from "../../../../shared/errors/AppError";
import { AreasRepositoryInMemory } from "../../repositories/in-memory/AreasRepositoryInMemory";
import { CreateAreaUseCase } from "./CreateAreaUseCase"

let createAreaUseCase: CreateAreaUseCase;
let areasRepositoryInMemory: AreasRepositoryInMemory;

describe("Create Area", () => {
    beforeEach(() => {
        areasRepositoryInMemory = new AreasRepositoryInMemory();
        createAreaUseCase = new CreateAreaUseCase(areasRepositoryInMemory);
    });

    it("should be able to create a new car", async () => {
        const area = await createAreaUseCase.execute({
            name: "Name Area",
            description: "Area Description",
            pillar_id: "Pillar"
        });

        expect(area).toHaveProperty("id");
    });

    it("should not be able to create a area with exists area name", () => {
        expect(async () => {
            await createAreaUseCase.execute({
                name: "Name Area",
                description: "Area Description",
                pillar_id: "Pillar"
            });

            await createAreaUseCase.execute({
                name: "Name Area",
                description: "Area Description",
                pillar_id: "Pillar"
            });
        }).rejects.toBeInstanceOf(AppError);
    })
})