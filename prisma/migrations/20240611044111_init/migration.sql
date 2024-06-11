/*
  Warnings:

  - Added the required column `Period` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Criteria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Phone` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "Period" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Criteria" ADD COLUMN     "weight" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Gender" TEXT NOT NULL,
ADD COLUMN     "Phone" TEXT NOT NULL,
ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "document" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
