import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSubjects1643137372582 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "subjects",
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
                            name: "area_id",
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
                            name: "FKAreaSubject",
                            referencedTableName: "areas",
                            referencedColumnNames: ["id"],
                            columnNames: ["area_id"],
                            onDelete: "SET NULL",
                            onUpdate: "SET NULL"
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("subjects");
    }

}
