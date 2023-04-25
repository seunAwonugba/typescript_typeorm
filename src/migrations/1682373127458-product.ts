import { MigrationInterface, QueryRunner } from "typeorm";

export class Product1682373127458 implements MigrationInterface {
    name = "Product1682373127458";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "product_category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0dce9bc93c2d2c399982d04bef1" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" text NOT NULL, "price" numeric NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "productCategoryId" integer, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `ALTER TABLE "product" ADD CONSTRAINT "FK_618194d24a7ea86a165d7ec628e" FOREIGN KEY ("productCategoryId") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "product" DROP CONSTRAINT "FK_618194d24a7ea86a165d7ec628e"`
        );
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "product_category"`);
    }
}
