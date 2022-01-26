import { CreateInstructorUseCase } from "./createInstructorUseCase"

let createInstructorUseCase: CreateInstructorUseCase;

describe("Create Instructor", () => {
    beforeEach(() => {
        createInstructorUseCase = new CreateInstructorUseCase();
    })
    it("should be able to create a new instructor", async () => {
        await createInstructorUseCase.execute({
            name: "Name",
            surname: "Surname",
            email: "surname@name.com"
        });
    })
})