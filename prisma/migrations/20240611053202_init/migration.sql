-- DropForeignKey
ALTER TABLE "CriteriaStudentResult" DROP CONSTRAINT "CriteriaStudentResult_criteriaId_fkey";

-- DropForeignKey
ALTER TABLE "CriteriaStudentResult" DROP CONSTRAINT "CriteriaStudentResult_studentId_fkey";

-- DropForeignKey
ALTER TABLE "EvaluationCriteria" DROP CONSTRAINT "EvaluationCriteria_criteriaId_fkey";

-- DropForeignKey
ALTER TABLE "EvaluationCriteria" DROP CONSTRAINT "EvaluationCriteria_evaluationId_fkey";

-- DropForeignKey
ALTER TABLE "ProfessorCourse" DROP CONSTRAINT "ProfessorCourse_courseId_fkey";

-- DropForeignKey
ALTER TABLE "ProfessorCourse" DROP CONSTRAINT "ProfessorCourse_professorId_fkey";

-- DropForeignKey
ALTER TABLE "StudentCourse" DROP CONSTRAINT "StudentCourse_courseId_fkey";

-- DropForeignKey
ALTER TABLE "StudentCourse" DROP CONSTRAINT "StudentCourse_studentId_fkey";

-- DropForeignKey
ALTER TABLE "StudentGroup" DROP CONSTRAINT "StudentGroup_groupId_fkey";

-- DropForeignKey
ALTER TABLE "StudentGroup" DROP CONSTRAINT "StudentGroup_studentId_fkey";

-- DropForeignKey
ALTER TABLE "StudentGroupEvaluation" DROP CONSTRAINT "StudentGroupEvaluation_evaluationId_fkey";

-- DropForeignKey
ALTER TABLE "StudentGroupEvaluation" DROP CONSTRAINT "StudentGroupEvaluation_groupId_fkey";

-- DropForeignKey
ALTER TABLE "StudentGroupEvaluation" DROP CONSTRAINT "StudentGroupEvaluation_studentId_fkey";
