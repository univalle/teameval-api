import { Injectable } from '@nestjs/common'
import { CoursesService } from 'src/courses/courses.service'
import { CriteriaService } from 'src/criteria/criteria.service'
import { EvaluationsService } from 'src/evaluations/evaluations.service'
import { GroupsService } from 'src/groups/groups.service'
import { PrismaService } from 'src/prisma.service'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class AdminsService {
  constructor(
    private prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly coursesService: CoursesService,
    private readonly criteriaService: CriteriaService,
    private readonly evaluationService: EvaluationsService,
    private readonly groupService: GroupsService,
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

  async findAllUsers() {
    return this.usersService.findAll()
  }

  async findAllUsersByRole(role = 'STUDENT') {
    return this.usersService.findAllByRole(role)
  }
}
