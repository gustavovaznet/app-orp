//ADD OPENING HOURS MIGRATION
import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addOpeningHoursFieldToOrphanages1601408180275 implements MigrationInterface {
  //UP
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('orphanages', new TableColumn({
      name: 'opening_hours',
      type: 'varchar'
    }))
  }

  //DOWN
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('orphanages', 'opening_hours');
  }
}
