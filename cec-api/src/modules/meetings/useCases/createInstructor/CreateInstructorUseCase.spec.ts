import { AppError } from "../../../../shared/errors/AppError";
import { InstructorsRepositoryInMemory } from "../../repositories/in-memory/InstructorsRepositoryInMemory";
import { CreateInstructorUseCase } from "./CreateInstructorUseCase"

let createInstructorUseCase: CreateInstructorUseCase;
let instructorsRepositoryInMemory: InstructorsRepositoryInMemory

describe("Create Instructor", () => {
    beforeEach(() => {
        instructorsRepositoryInMemory = new InstructorsRepositoryInMemory();
        createInstructorUseCase = new CreateInstructorUseCase(instructorsRepositoryInMemory);
    })
    it("should be able to create a new instructor", async () => {
        const instructor = await createInstructorUseCase.execute({
            name: "Name",
            surname: "Surname",
            email: "surname@name.com"
        });

        expect(instructor).toHaveProperty("id");
    });

    it("should not be able to create a instructor with existing name", () => {
        expect(async () => {
            await createInstructorUseCase.execute({
                name: "Name",
                surname: "Surname",
                email: "surname@name.com"
            });
            await createInstructorUseCase.execute({
                name: "Name",
                surname: "Surname",
                email: "surname@name.com"
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should be able to create a instructor with avaliable by default", async () => {
        const instructor =  await createInstructorUseCase.execute({
            name: "Name",
            surname: "Surname",
            email: "surname@name.com"
        });

        expect(instructor.avaliable).toBe(true);
    });
})