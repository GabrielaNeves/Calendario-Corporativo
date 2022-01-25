import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAreas1643060611018 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "areas",
                    columns: [
                        {
                            name: "id",
                            type: "varchar",
                            isPrimary: true,
                            generationStrategy: "uuid"
                        },
                        {
                            name: "name",
                            type: "varchar"
                        },
                        {
                            name: "description",
                            type: "varchar"
                        },
                        {
                            name: "pillar_id",
                            type: "varchar",
                            isNullable: true
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "FKPillarArea",
                            referencedTableName: "pillars",
                            referencedColumnNames: ["id"],
                            columnNames: ["pillar_id"],
                            onDelete: "SET NULL",
                            onUpdate: "SET NULL"
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("areas");
    }

}
