/*
  Warnings:

  - Added the required column `idProfessor` to the `Evaluation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Evaluation" ADD COLUMN     "idProfessor" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Evaluation" ADD CONSTRAINT "Evaluation_idProfessor_fkey" FOREIGN KEY ("idProfessor") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
