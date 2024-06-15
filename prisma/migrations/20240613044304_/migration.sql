/*
  Warnings:

  - You are about to alter the column `weight` on the `Criteria` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Changed the type of `value` on the `CriteriaStudentResult` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Criteria" ALTER COLUMN "weight" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "CriteriaStudentResult" DROP COLUMN "value",
ADD COLUMN     "value" INTEGER NOT NULL;
