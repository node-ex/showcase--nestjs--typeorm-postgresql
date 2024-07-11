import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameNameToTitleInCoffeesTable1720677646643
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffees" RENAME "name" TO "title"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffees" RENAME "title" TO "name"`);
  }
}
