import { Module } from '@nestjs/common'
import { StudentsService } from './students.service'
import { StudentsController } from './students.controller'
import { UsersModule } from 'src/users/users.module'
import { CoursesModule } from 'src/courses/courses.module'
import { EvaluationsModule } from 'src/evaluations/evaluations.module'
import { GroupsModule } from 'src/groups/groups.module'
import { ProfessorsModule } from 'src/professors/professors.module'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [StudentsController],
  providers: [StudentsService, PrismaService],
  imports: [
    UsersModule,
    CoursesModule,
    EvaluationsModule,
    GroupsModule,
    ProfessorsModule,
  ],
})
export class StudentsModule {}
