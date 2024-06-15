// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Agregar datos de ejemplo a la base de datos

  // Usuarios de ejemplo
  const user1 = await prisma.user.create({
    data: {
      email: 'student1@example.com',
      name: 'Estudiante Uno',
      password: 'password1',
      role: ['STUDENT'],
      code: '001',
    },
  });
  
  const user2 = await prisma.user.create({
    data: {
      email: 'student2@example.com',
      name: 'Estudiante Dos',
      password: 'password2',
      role: ['STUDENT'],
      code: '002',
    },
  });
  
  const user3 = await prisma.user.create({
    data: {
      email: 'student3@example.com',
      name: 'Estudiante Tres',
      password: 'password3',
      role: ['STUDENT'],
      code: '003',
    },
  });
  
  const user4 = await prisma.user.create({
    data: {
      email: 'professor1@example.com',
      name: 'Profesor Uno',
      password: 'password4',
      role: ['PROFESSOR'],
      code: '004',
    },
  });
  
  const user5 = await prisma.user.create({
    data: {
      email: 'professor2@example.com',
      name: 'Profesor Dos',
      password: 'password5',
      role: ['PROFESSOR'],
      code: '005',
    },
  });
  
  const user6 = await prisma.user.create({
    data: {
      email: 'professor3@example.com',
      name: 'Profesor Tres',
      password: 'password6',
      role: ['PROFESSOR'],
      code: '006',
    },
  });
  
  const user7 = await prisma.user.create({
    data: {
      email: 'admin1@example.com',
      name: 'Administrador Uno',
      password: 'password7',
      role: ['ADMIN'],
      code: '007',
    },
  });
  
  const user8 = await prisma.user.create({
    data: {
      email: 'admin2@example.com',
      name: 'Administrador Dos',
      password: 'password8',
      role: ['ADMIN'],
      code: '008',
    },
  });
  
  const user9 = await prisma.user.create({
    data: {
      email: 'admin3@example.com',
      name: 'Administrador Tres',
      password: 'password9',
      role: ['ADMIN'],
      code: '009',
    },
  });
  // Cursos de ejemplo
  const course1 = await prisma.course.create({
    data: {
      code: 'C001',
      name: 'Introducción a la Programación',
      description: 'Curso introductorio de programación',
      academicPeriod: '2024A'
    },
  });
  
  const course2 = await prisma.course.create({
    data: {
      code: 'C002',
      name: 'Bases de Datos',
      description: 'Curso sobre bases de datos relacionales',
      academicPeriod: '2024A'
    },
  });
  
  const course3 = await prisma.course.create({
    data: {
      code: 'C003',
      name: 'Programación Avanzada',
      description: 'Curso avanzado de programación',
      academicPeriod: '2024A'
    },
  });
  
  const course4 = await prisma.course.create({
    data: {
      code: 'C004',
      name: 'Diseño de Interfaces de Usuario',
      description: 'Curso sobre diseño de interfaces de usuario',
      academicPeriod: '2024A'
    },
  });
  
  const course5 = await prisma.course.create({
    data: {
      code: 'C005',
      name: 'Redes de Computadoras',
      description: 'Curso sobre redes de computadoras',
      academicPeriod: '2024A'
    },
  });
  
  // Grupos de ejemplo
  const group1 = await prisma.group.create({
    data: {
      code: 'G001',
      name: 'Grupo de Programación',
      idCourse: course1.id,
    },
  });
  
  const group2 = await prisma.group.create({
    data: {
      code: 'G002',
      name: 'Grupo de Bases de Datos',
      idCourse: course2.id,
    },
  });
  
  const group3 = await prisma.group.create({
    data: {
      code: 'G003',
      name: 'Grupo de Programación Avanzada',
      idCourse: course3.id,
    },
  });
  
  const group4 = await prisma.group.create({
    data: {
      code: 'G004',
      name: 'Grupo de Diseño de Interfaces',
      idCourse: course4.id,
    },
  });
  
  const group5 = await prisma.group.create({
    data: {
      code: 'G005',
      name: 'Grupo de Redes de Computadoras',
      idCourse: course5.id,
    },
  });
  
  // Evaluaciones de ejemplo
  const evaluation1 = await prisma.evaluation.create({
    data: {
      code: 'E001',
      name: 'Examen Parcial',
      description: 'Primer examen parcial del curso',
      idProfessor: user4.id,
    },
  });
  
  const evaluation2 = await prisma.evaluation.create({
    data: {
      code: 'E002',
      name: 'Proyecto Final',
      description: 'Proyecto final del curso',
      idProfessor: user5.id,
    },
  });
  
  const evaluation3 = await prisma.evaluation.create({
    data: {
      code: 'E003',
      name: 'Trabajo Práctico',
      description: 'Entrega de un trabajo práctico',
      idProfessor: user4.id,
    },
  });
  
  const evaluation4 = await prisma.evaluation.create({
    data: {
      code: 'E004',
      name: 'Presentación Oral',
      description: 'Presentación oral sobre un tema específico',
      idProfessor: user4.id,
    },
  });
  
  const evaluation5 = await prisma.evaluation.create({
    data: {
      code: 'E005',
      name: 'Examen Final',
      description: 'Examen final del curso',
      idProfessor: user5.id,
    },
  });
  

  // Criterios de evaluación de ejemplo
  const criteria1_evaluation1 = await prisma.criteria.create({
    data: {
      code: 'CR001',
      name: 'Corrección',
      description: 'Evaluación de la corrección en el examen',
      weight: 5,
      evaluation: {
        connect: {
          code: 'E001', // Código de la evaluación correspondiente
        },
      },
    },
  });
  
  const criteria2_evaluation1 = await prisma.criteria.create({
    data: {
      code: 'CR002',
      name: 'Claridad',
      description: 'Evaluación de la claridad en las respuestas',
      weight: 3,
      evaluation: {
        connect: {
          code: 'E001', // Código de la evaluación correspondiente
        },
      },
    },
  });
  
  const criteria1_evaluation2 = await prisma.criteria.create({
    data: {
      code: 'CR003',
      name: 'Originalidad',
      description: 'Evaluación de la originalidad en el proyecto',
      weight: 4,
      evaluation: {
        connect: {
          code: 'E002', // Código de la evaluación correspondiente
        },
      },
    },
  });
  
  const criteria2_evaluation2 = await prisma.criteria.create({
    data: {
      code: 'CR004',
      name: 'Complejidad',
      description: 'Evaluación de la complejidad del proyecto',
      weight: 6,
      evaluation: {
        connect: {
          code: 'E002', // Código de la evaluación correspondiente
        },
      },
    },
  });

  const criteria3_evaluation3 = await prisma.criteria.create({
    data: {
      code: 'CR005',
      name: 'Compleción',
      description: 'Evaluación de la completitud del trabajo práctico',
      weight: 3,
      evaluation: {
        connect: {
          code: 'E003', // Código de la evaluación correspondiente
        },
      },
    },
  });
  
  const criteria4_evaluation3 = await prisma.criteria.create({
    data: {
      code: 'CR006',
      name: 'Originalidad',
      description: 'Evaluación de la originalidad del trabajo práctico',
      weight: 7,
      evaluation: {
        connect: {
          code: 'E003', // Código de la evaluación correspondiente
        },
      },
    },
  });
  
  const criteria1_evaluation4 = await prisma.criteria.create({
    data: {
      code: 'CR007',
      name: 'Claridad',
      description: 'Evaluación de la claridad en la presentación oral',
      weight: 4,
      evaluation: {
        connect: {
          code: 'E004', // Código de la evaluación correspondiente
        },
      },
    },
  });
  
  const criteria2_evaluation4 = await prisma.criteria.create({
    data: {
      code: 'CR008',
      name: 'Dominio del Tema',
      description: 'Evaluación del dominio del tema en la presentación oral',
      weight: 6,
      evaluation: {
        connect: {
          code: 'E004', // Código de la evaluación correspondiente
        },
      },
    },
  });
  
  const criteria1_evaluation5 = await prisma.criteria.create({
    data: {
      code: 'CR009',
      name: 'Profundidad',
      description: 'Evaluación de la profundidad de conocimiento en el examen final',
      weight: 7,
      evaluation: {
        connect: {
          code: 'E005', // Código de la evaluación correspondiente
        },
      },
    },
  });
  
  const criteria2_evaluation5 = await prisma.criteria.create({
    data: {
      code: 'CR010',
      name: 'Amplitud',
      description: 'Evaluación de la amplitud de conocimiento en el examen final',
      weight: 3,
      evaluation: {
        connect: {
          code: 'E005', // Código de la evaluación correspondiente
        },
      },
    },
  });

  // Relaciones entre profesores y cursos de ejemplo
  await prisma.professorCourse.create({
    data: {
      userId: user4.id,
      courseId: course1.id,
    },
  });

  await prisma.professorCourse.create({
    data: {
      userId: user4.id,
      courseId: course2.id,
    },
  });

  await prisma.professorCourse.create({
    data: {
      userId: user4.id,
      courseId: course3.id,
    },
  });

  await prisma.professorCourse.create({
    data: {
      userId: user4.id,
      courseId: course4.id,
    },
  });

  await prisma.professorCourse.create({
    data: {
      userId: user5.id,
      courseId: course5.id,
    },
  });

  await prisma.professorCourse.create({
    data: {
      userId: user5.id,
      courseId: course4.id,
    },
  });


  // estudiantes y cursos de ejemplo

  await prisma.studentCourse.create({
    data: {
      userId: user1.id,
      courseId: course2.id,
    },
  });

  await prisma.studentCourse.create({
    data: {
      userId: user1.id,
      courseId: course3.id,
    },
  });

  await prisma.studentCourse.create({
    data: {
      userId: user1.id,
      courseId: course4.id,
    },
  });

  await prisma.studentCourse.create({
    data: {
      userId: user1.id,
      courseId: course5.id,
    },
  });

  await prisma.studentCourse.create({
    data: {
      userId: user2.id,
      courseId: course1.id,
    },
  });

  await prisma.studentCourse.create({
    data: {
      userId: user2.id,
      courseId: course2.id,
    },
  });
  
  // Relaciones entre estudiantes y grupos de ejemplo
  await prisma.studentGroup.create({
    data: {
      groupId: group1.id,
      userId: user1.id,
    },
  });

  await prisma.studentGroup.create({
    data: {
      groupId: group2.id,
      userId: user1.id,
    },
  });

  await prisma.studentGroup.create({
    data: {
      groupId: group3.id,
      userId: user1.id,
    },
  });

  await prisma.studentGroup.create({
    data: {
      groupId: group4.id,
      userId: user1.id,
    },
  });

  await prisma.studentGroup.create({
    data: {
      groupId: group5.id,
      userId: user1.id,
    },
  });

  await prisma.studentGroup.create({
    data: {
      groupId: group1.id,
      userId: user2.id,
    },
  });

  await prisma.studentGroup.create({
    data: {
      groupId: group2.id,
      userId: user2.id,
    },
  });

  // Relaciones entre grupos y evaluaciones de ejemplo
  await prisma.groupEvaluation.create({
    data: {
      groupId: group1.id,
      evaluationId: evaluation1.id,
    },
  });

  await prisma.groupEvaluation.create({
    data: {
      groupId: group1.id,
      evaluationId: evaluation2.id,
    },
  });

  await prisma.groupEvaluation.create({
    data: {
      groupId: group1.id,
      evaluationId: evaluation3.id,
    },
  });

  await prisma.groupEvaluation.create({
    data: {
      groupId: group2.id,
      evaluationId: evaluation2.id,
    },
  });

  await prisma.groupEvaluation.create({
    data: {
      groupId: group3.id,
      evaluationId: evaluation3.id,
    },
  });

  await prisma.groupEvaluation.create({
    data: {
      groupId: group4.id,
      evaluationId: evaluation4.id,
    },
  });

  await prisma.groupEvaluation.create({
    data: {
      groupId: group5.id,
      evaluationId: evaluation5.id,
    },
  });

  // Relaciones entre criterios de evaluación y estudiantes de ejemplo

  const criteriaStudentResult1 = await prisma.criteriaStudentResult.create({
    data: {
      value: 4,
      criteriaId: criteria1_evaluation1.id,
      studentId: user1.id,
      evaluatedStudentId: user2.id,
    },
  });

  const criteriaStudentResult2 = await prisma.criteriaStudentResult.create({
    data: {
      value: 3,
      criteriaId: criteria2_evaluation1.id,
      studentId: user1.id,
      evaluatedStudentId: user2.id,
    },
  });

  const criteriaStudentResult3 = await prisma.criteriaStudentResult.create({
    data: {
      value: 5,
      criteriaId: criteria1_evaluation2.id,
      studentId: user1.id,
      evaluatedStudentId: user2.id,
    },
  });

  const criteriaStudentResult4 = await prisma.criteriaStudentResult.create({
    data: {
      value: 6,
      criteriaId: criteria2_evaluation2.id,
      studentId: user1.id,
      evaluatedStudentId: user2.id,
    },
  });

  const criteriaStudentResult5 = await prisma.criteriaStudentResult.create({
    data: {
      value: 7,
      criteriaId: criteria3_evaluation3.id,
      studentId: user1.id,
      evaluatedStudentId: user2.id,
    },
  });

  console.log('Datos de ejemplo agregados correctamente.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });