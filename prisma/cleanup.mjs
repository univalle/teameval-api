import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanup() {
  try {
    // Elimina todos los datos de las tablas que contienen datos de semillas
    await prisma.criteriaStudentResult.deleteMany({});
    await prisma.professorCourse.deleteMany({});
    await prisma.studentCourse.deleteMany({});
    await prisma.studentGroup.deleteMany({});
    await prisma.groupEvaluation.deleteMany({});
    await prisma.criteria.deleteMany({});
    await prisma.evaluation.deleteMany({});
    await prisma.group.deleteMany({});
    await prisma.course.deleteMany({});
    await prisma.user.deleteMany({});

    console.log('Datos de semilla eliminados correctamente.');
  } catch (error) {
    console.error('Error al eliminar datos de semilla:', error);
  } finally {
    await prisma.$disconnect();
  }
}

cleanup();