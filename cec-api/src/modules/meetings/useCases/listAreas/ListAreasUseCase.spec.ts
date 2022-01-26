import { AreasRepositoryInMemory } from "../../repositories/in-memory/AreasRepositoryInMemory";
import { ListAreasUseCase } from "./ListAreasUseCase"

let listAreasUseCase: ListAreasUseCase;
let areasRepositoryInMemory: AreasRepositoryInMemory;

describe("List Areas", () => {

    beforeEach(() => {
        areasRepositoryInMemory = new AreasRepositoryInMemory();
        listAreasUseCase = new ListAreasUseCase(areasRepositoryInMemory);
    })

    it("should be able to list all areas", async () => {

        const area = await areasRepositoryInMemory.create({
            name: "Area 51",
            description: "Área Secreta",
            pillar_id: "pillar_id"
        });
        const areas = await listAreasUseCase.execute();
        expect(areas).toEqual([area]);
    })
})