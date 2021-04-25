import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEventsTable1619320248823 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'events',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'date',
                        type: 'timestamp with time zone',
                        isNullable: false,
                    },
                    {
                        name: 'ticket_limit',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'ticket_sold',
                        type: 'int',
                        isNullable: true,
                        default: 0
                    },
                    {
                        name: 'ticket_price',
                        type: 'numeric',
                        isNullable: false,
                        precision:6,
                        scale:2
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('events')
    }

}
