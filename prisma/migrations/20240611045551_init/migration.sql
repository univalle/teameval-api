/*
  Warnings:

  - You are about to drop the column `Gender` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `birthday` on the `User` table. All the data in the column will be lost.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Gender",
DROP COLUMN "Phone",
DROP COLUMN "birthday",
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "CriteriaStudentResult" (
    "id" TEXT NOT NULL,
    "result" INTEGER NOT NULL,
    "criteriaId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "CriteriaStudentResult_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CriteriaStudentResult" ADD CONSTRAINT "CriteriaStudentResult_criteriaId_fkey" FOREIGN KEY ("criteriaId") REFERENCES "Criteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CriteriaStudentResult" ADD CONSTRAINT "CriteriaStudentResult_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
