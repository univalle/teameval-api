import { Module } from '@nestjs/common'
import { StudentsService } from './students.service'
import { StudentsController } from './students.controller'
import { UsersModule } from 'src/users/users.module'
import { CoursesModule } from 'src/courses/courses.module'

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  imports: [UsersModule, CoursesModule],
})
export class StudentsModule {}
