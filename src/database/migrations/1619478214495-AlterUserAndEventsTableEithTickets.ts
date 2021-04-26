import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterUserAndEventsTableEithTickets1619478214495 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('tickets',new TableColumn({
            name:'event_id',
            type:'uuid',
        }));
        await queryRunner.createForeignKey('tickets', new TableForeignKey({
            name:'EventsTicket',
            columnNames: ['ticket_id'],
            referencedColumnNames:['id'],
            referencedTableName: 'tickets',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })); 
        await queryRunner.addColumn('tickets',new TableColumn({
            name:'user_id',
            type:'uuid',
        }));
        await queryRunner.createForeignKey('tickets', new TableForeignKey({
            name:'EventsTicket',
            columnNames: ['ticket_id'],
            referencedColumnNames:['id'],
            referencedTableName: 'tickets',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tickets','EventsTicket');
        await queryRunner.dropColumn('tickets','ticket_id');
    }

}
