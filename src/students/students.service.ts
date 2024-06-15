import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { CreateStudentDto } from './dto/create-student.dto'
import { UpdateStudentDto } from './dto/update-student.dto'
import { UsersService } from 'src/users/users.service'
import { PrismaService } from 'src/prisma.service'
import { UserRole } from '@prisma/client'

@Injectable()
export class StudentsService {
  constructor(
    private readonly usersService: UsersService,
    private prisma: PrismaService,
  ) {}

  async profile(user) {
    const userInfo = await this.usersService.findOneByEmail(
      'student1@example.com',
    )

    if (userInfo === null) {
      throw new NotFoundException({ message: 'User not found' })
    }

    if ('error' in userInfo) {
      throw new Error('No se encontró el usuario')
    } else {
      const { email, name, code, createdAt, updatedAt } = userInfo
      return { email, name, code, createdAt, updatedAt }
    }
  }

  async evaluations(user) {
    const email = 'student1@example.com'

    const studentGroups = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        studentGroups: {
          select: {
            group: {
              select: {
                id: true,
                code: true,
                name: true,
                course: {
                  select: {
                    id: true,
                    code: true,
                    name: true,
                    academicPeriod: true,
                    professorCourses: {
                      select: {
                        user: {
                          select: {
                            name: true,
                          },
                        },
                      },
                    },
                  },
                },
                GroupEvaluation: {
                  select: {
                    evaluation: {
                      select: {
                        id: true,
                        code: true,
                        name: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    })

    if (!studentGroups) {
      return []
    }

    const extractEvaluationInfo = (evaluations) => {
      return evaluations.map((evaluation) => ({
        evaluationId: evaluation.evaluation.id,
        evaluationName: evaluation.evaluation.name,
        evaluationCode: evaluation.evaluation.code,
      }))
    }

    // Extraer la información requerida
    const extractedData = studentGroups.studentGroups.map((groupData) => {
      const group = groupData.group
      const evaluations = group.GroupEvaluation

      // Extraer información
      const evaluationInfo = extractEvaluationInfo(evaluations)
      const courseName = group.course.name
      const courseCode = group.course.code
      const academicPeriod = group.course.academicPeriod
      const professorNames = group.course.professorCourses.map(
        (professorCourse) => professorCourse.user.name,
      )
      const groupName = group.name
      const groupCode = group.code
      const groupId = group.id

      return {
        evaluationInfo,
        courseName,
        courseCode,
        academicPeriod,
        professorNames,
        groupId,
        groupName,
        groupCode,
      }
    })

    return extractedData
  }

  async groups(user) {
    const email = 'student1@example.com'

    const groups = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        studentGroups: {
          select: {
            group: {
              select: {
                code: true,
                name: true,
                course: {
                  select: {
                    code: true,
                    name: true,
                    academicPeriod: true,
                    professorCourses: {
                      select: {
                        user: {
                          select: {
                            name: true,
                          },
                        },
                      },
                    },
                  },
                },
                GroupEvaluation: {
                  select: {
                    evaluation: {
                      select: {
                        code: true,
                        name: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    })

    if (!groups) {
      return []
    }

    const extractedData = groups.studentGroups.map((groupData) => {
      const group = groupData.group
      const evaluations = group.GroupEvaluation

      // Extraer información
      const groupName = group.name
      const groupCode = group.code
      const courseName = group.course.name
      const courseCode = group.course.code
      const academicPeriod = group.course.academicPeriod
      const numEvaluations = evaluations.length

      return {
        groupName,
        groupCode,
        courseName,
        courseCode,
        academicPeriod,
        numEvaluations,
      }
    })

    return extractedData
  }

  async evaluationGroup(user, evaluationCode, groupCode) {
    const email = 'student1@example.com'

    where: {
      code: groupCode
    }

    const evaluation = await this.prisma.evaluation.findUnique({
      where: {
        code: evaluationCode,
      },
      select: {
        id: true,
        code: true,
        name: true,
        groupEvaluations: {
          where: {
            group: {
              code: groupCode,
            },
          },
          select: {
            groupId: true,
            group: {
              select: {
                studentGroups: {
                  select: {
                    userId: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    if (!evaluation) {
      return []
    }

    const evaluationInfo = {
      evaluationId: evaluation.id,
      groupId: evaluation.groupEvaluations[0].groupId,
      students: evaluation.groupEvaluations[0].group.studentGroups.map(
        (studentGroup) => ({
          userId: studentGroup.userId,
        }),
      ),
    }

    const userId = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
      },
    })

    // if (evaluationInfo.students.length < 4) {
    //   throw new HttpException(
    //     'No se puede evaluar con menos de 4 estudiantes',
    //     HttpStatus.BAD_REQUEST,
    //   )
    // }

    evaluationInfo.students = evaluationInfo.students.filter(
      (student) => student.userId !== userId.id,
    )

    return evaluationInfo
  }

  async criteria(evaluationCode) {
    const email = 'student1@example.com'

    const criteria = await this.prisma.evaluation.findUnique({
      where: {
        code: evaluationCode,
      },
      select: {
        id: true,
        code: true,
        name: true,
        criterias: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    })

    if (!criteria) {
      return []
    }

    return criteria.criterias
  }

  async evaluate(studentId, criteriaId, evaluatedStudentId, value) {
    // cast to number
    const valueNumber = Number(value)
    const stundentIdNumber = Number(studentId)
    const criteriaIdNumber = Number(criteriaId)
    const evaluatedStudentIdNumber = Number(evaluatedStudentId)

    if (isNaN(valueNumber)) {
      throw new HttpException('Value is not a number', HttpStatus.BAD_REQUEST)
    }

    if (isNaN(stundentIdNumber)) {
      throw new HttpException(
        'Student id is not a number',
        HttpStatus.BAD_REQUEST,
      )
    }

    if (isNaN(criteriaIdNumber)) {
      throw new HttpException(
        'Criteria id is not a number',
        HttpStatus.BAD_REQUEST,
      )
    }

    if (isNaN(evaluatedStudentIdNumber)) {
      throw new HttpException(
        'Evaluated student id is not a number',
        HttpStatus.BAD_REQUEST,
      )
    }

    const stundetRole = await this.prisma.user.findUnique({
      where: {
        id: stundentIdNumber,
      },
      select: {
        role: true,
      },
    })

    const evaluatedStudentRole = await this.prisma.user.findUnique({
      where: {
        id: evaluatedStudentIdNumber,
      },
      select: {
        role: true,
      },
    })

    if (stundetRole.role[0] !== UserRole.STUDENT) {
      throw new HttpException('User is not a student', HttpStatus.BAD_REQUEST)
    }

    if (evaluatedStudentRole.role[0] !== UserRole.STUDENT) {
      throw new HttpException(
        'Evaluated user is not a student',
        HttpStatus.BAD_REQUEST,
      )
    }

    const evaluate = await this.prisma.criteriaStudentResult.create({
      data: {
        value: valueNumber,
        criteriaId: criteriaIdNumber,
        studentId: stundentIdNumber,
        evaluatedStudentId: evaluatedStudentIdNumber,
      },
    })

    return evaluate
  }
}
