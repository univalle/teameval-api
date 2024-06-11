import { Module } from '@nestjs/common'
import { StudentsService } from './students.service'
import { StudentsController } from './students.controller'
import { UsersModule } from 'src/users/users.module'
import { CoursesModule } from 'src/courses/courses.module'
import { EvaluationsModule } from 'src/evaluations/evaluations.module'
import { GroupsModule } from 'src/groups/groups.module'
import { ProfessorsModule } from 'src/professors/professors.module'

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  imports: [
    UsersModule,
    CoursesModule,
    EvaluationsModule,
    GroupsModule,
    ProfessorsModule,
  ],
})
export class StudentsModule {}
