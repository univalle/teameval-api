import { Injectable } from '@nestjs/common'
import { CoursesService } from 'src/courses/courses.service'
import { EvaluationsService } from 'src/evaluations/evaluations.service'
import { GroupsService } from 'src/groups/groups.service'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class StudentsService {
  constructor(
    private readonly usersService: UsersService,
    private readonly coursesService: CoursesService,
    private readonly evaluationsService: EvaluationsService,
    private readonly groupsService: GroupsService,
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
    const { id } = await this.usersService.findOneByEmail(user.email)
    return this.coursesService.findAllByStudent(id)
  }

  async evaluations(user) {
    return await this.evaluationsService.findAllByStudent(user.id)
  }

  async groups(user) {
    return await this.groupsService.findAllByStudent(user.id)
  }

  async evaluateCriteriaByStudent(evaluationId, criteriaId, studentId, result) {
    return this.evaluationsService.evaluateCriteriaByStudent(
      evaluationId,
      criteriaId,
      studentId,
      result,
    )
  }

  async results(user) {
    const { id } = await this.usersService.findOneByEmail(user.email)
    // return this.coursesService.findAllByStudentId(id)
    return 'results for student with id ' + id
  }
}
