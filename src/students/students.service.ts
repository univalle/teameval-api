import { Injectable } from '@nestjs/common'
import { CoursesService } from 'src/courses/courses.service'
import { EvaluationsService } from 'src/evaluations/evaluations.service'
import { GroupsService } from 'src/groups/groups.service'
import { UsersService } from 'src/users/users.service'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class StudentsService {
  constructor(
    private prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly coursesService: CoursesService,
    private readonly evaluationsService: EvaluationsService,
    private readonly groupsService: GroupsService,
    // private readonly professorsService: ProfessorsService,
  ) {}

  async profile(user) {
    console.log('user', user)
    const userInfo = await this.usersService.findOneByEmail(user.email)
    return {
      name: userInfo.name,
      email: userInfo.email,
      role: userInfo.role,
      id: userInfo.id,
    }
  }

  async courses(user) {
    return await this.groupsService.findAllByStudent(user.id)
  }

  async evaluations(user) {
    return await this.evaluationsService.findAllByStudent(user.id)
  }

  async groups(user) {
    return await this.groupsService.findAllByStudent(user.id)
  }

  async evaluateCriteriaByStudent(criteriaId, user, result) {
    const { id } = await this.usersService.findOneByEmail(user.email)
    return this.evaluationsService.evaluateCriteriaByStudent(
      criteriaId,
      id,
      result,
    )
  }

  async results(user) {
    const { id } = await this.usersService.findOneByEmail(user.email)
    // return this.coursesService.findAllByStudentId(id)
    return 'results for student with id ' + id
  }

  async all() {
    // Obtener todos los datos
    const courses = await this.coursesService.findAll()
    const groups = await this.groupsService.findAll()
    const evaluations = await this.evaluationsService.findAll()
    const users = await this.usersService.findAll()
    const studentGroups = await this.prisma.studentGroup.findMany()
    const professorCourses = await this.prisma.professorCourse.findMany()
    const studentCourses = await this.prisma.studentCourse.findMany()
    const studentGroupEvaluations =
      await this.prisma.studentGroupEvaluation.findMany()

    const combinedData = courses.map((course) => {
      const relatedProfessors = professorCourses
        .filter((pc) => pc.courseId === course.id)
        .map((pc) =>
          users.find(
            (user) => user.id === pc.professorId && user.role === 'PROFESSOR',
          ),
        )

      const relatedGroups = groups
        .filter((group) => {
          return studentCourses.some(
            (sc) => sc.courseId === course.id && sc.studentId === group.id,
          )
        })
        .map((group) => {
          const relatedStudents = studentGroups
            .filter((sg) => sg.groupId === group.id)
            .map((sg) =>
              users.find(
                (user) => user.id === sg.studentId && user.role === 'STUDENT',
              ),
            )

          const relatedEvaluations = studentGroupEvaluations
            .filter((sge) => sge.groupId === group.id)
            .map((sge) =>
              evaluations.find(
                (evaluation) => evaluation.id === sge.evaluationId,
              ),
            )

          return {
            ...group,
            students: relatedStudents,
            evaluations: relatedEvaluations,
          }
        })

      return { ...course, professors: relatedProfessors, groups: relatedGroups }
    })

    console.log(JSON.stringify(combinedData, null, 2))
    return combinedData
  }
}
