import { inject, injectable } from "tsyringe";
import { Area } from "../../infra/typeorm/entities/Area";
import { IAreasRepository } from "../../repositories/IAreasRepository";

@injectable()
class ListAreasUseCase {
    constructor(
        @inject("AreasRepository")
        private areasRepository: IAreasRepository) { }
    async execute(): Promise<Area[]> {
        const areas = await this.areasRepository.list();
        return areas;
    }
};

export { ListAreasUseCase };