import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { IClassroomsRepository } from '../../modules/meetings/repositories/IClassroomsRepository';
import { ClassroomsRepository } from '../../modules/meetings/infra/typeorm/repositories/ClassroomsRepository';
import { PillarsRepository } from '../../modules/meetings/infra/typeorm/repositories/PillarsRepository';
import { IPillarRepository } from '../../modules/meetings/repositories/IPillarsRepository';
import { IAreasRepository } from '../../modules/meetings/repositories/IAreasRepository';
import { AreasRepository } from '../../modules/meetings/infra/typeorm/repositories/AreasRepository';
import { IInstructorsRepository } from '../../modules/meetings/repositories/IInstructorsRepository';
import { InstructorsRepository } from '../../modules/meetings/infra/typeorm/repositories/InstructorsRepository';

container.registerSingleton<IPillarRepository>(
    "PillarsRepository",
    PillarsRepository
);

container.registerSingleton<IClassroomsRepository>(
    "ClassroomsRepository",
    ClassroomsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IAreasRepository>(
    "AreasRepository",
    AreasRepository
);

container.registerSingleton<IInstructorsRepository>(
    "InstructorsRepository",
    InstructorsRepository
);