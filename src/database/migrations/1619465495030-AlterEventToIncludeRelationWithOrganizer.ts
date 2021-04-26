import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterEventToIncludeRelationWithOrganizer1619465495030 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('events',new TableColumn({
            name:'organizer_id',
            type:'uuid',
        }));
        await queryRunner.createForeignKey('events', new TableForeignKey({
            name:'EventsOrganizer',
            columnNames: ['organizer_id'],
            referencedColumnNames:['id'],
            referencedTableName: 'organizers',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('events','EventsOrganizer');
        await queryRunner.dropColumn('events','organizer_id');
    }

}
