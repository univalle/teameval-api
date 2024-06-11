/*
  Warnings:

  - You are about to drop the column `Period` on the `Course` table. All the data in the column will be lost.
  - Added the required column `period` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "Period",
ADD COLUMN     "period" TEXT NOT NULL;
