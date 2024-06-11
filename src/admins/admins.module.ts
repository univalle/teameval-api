import { Module } from '@nestjs/common'
import { AdminsService } from './admins.service'
import { AdminsController } from './admins.controller'
import { PrismaService } from 'src/prisma.service'
import { AuthService } from 'src/auth/auth.service'
import { CoursesService } from 'src/courses/courses.service'
import { CriteriaService } from 'src/criteria/criteria.service'
import { EvaluationsService } from 'src/evaluations/evaluations.service'
import { GroupsService } from 'src/groups/groups.service'
import { UsersService } from 'src/users/users.service'

@Module({
  controllers: [AdminsController],
  providers: [
    AdminsService,
    PrismaService,
    AuthService,
    CoursesService,
    CriteriaService,
    EvaluationsService,
    GroupsService,
    UsersService,
  ],
})
export class AdminsModule {}
