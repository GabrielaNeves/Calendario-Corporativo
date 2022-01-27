import { InstructorsRepositoryInMemory } from "../../repositories/in-memory/InstructorsRepositoryInMemory";
import { ListInstructorsUseCase } from "./ListInstructorsUseCase"


let listInstructorsUseCase: ListInstructorsUseCase;
let instructorsRepositoryInMemory: InstructorsRepositoryInMemory

describe("List instructors", () => {
    beforeEach(() => {
        instructorsRepositoryInMemory = new InstructorsRepositoryInMemory();
        listInstructorsUseCase = new ListInstructorsUseCase(instructorsRepositoryInMemory)
    })
    it("should be able to list all avaliable instructors", async () => {
        const instructor = await instructorsRepositoryInMemory.create({
            "name": "Lucas",
            "surname": "Lu",
            "email": "lucas@lucas.com"
        })
        const instructors = await listInstructorsUseCase.execute({});

        expect(instructors).toEqual([instructor]);
    });

    it("should be able to list all avaliable instructors by name", async () => {
        const instructor = await instructorsRepositoryInMemory.create({
            "name": "Lucas",
            "surname": "Lu",
            "email": "lucas@lucas.com"
        })
        const instructors = await listInstructorsUseCase.execute({
            name: "Lucas"
        });

        expect(instructors).toEqual([instructor]);
    });

    it("should be able to list all avaliable instructors by surname", async () => {
        const instructor = await instructorsRepositoryInMemory.create({
            "name": "Lucas",
            "surname": "Lu",
            "email": "lucas@lucas.com"
        })
        const instructors = await listInstructorsUseCase.execute({
            surname: "Lu"
        });

        expect(instructors).toEqual([instructor]);
    });

    it("should be able to list all avaliable instructors by email", async () => {
        const instructor = await instructorsRepositoryInMemory.create({
            "name": "Lucas",
            "surname": "Lu",
            "email": "lucas@lucas.com"
        })
        const instructors = await listInstructorsUseCase.execute({
            email: "lucas@lucas.com"
        });

        expect(instructors).toEqual([instructor]);
    });
})