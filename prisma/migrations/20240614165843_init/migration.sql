/*
  Warnings:

  - Added the required column `idCourse` to the `Group` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "idCourse" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_idCourse_fkey" FOREIGN KEY ("idCourse") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
