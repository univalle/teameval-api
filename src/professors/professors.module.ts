import { Module } from '@nestjs/common'
import { ProfessorsService } from './professors.service'
import { ProfessorsController } from './professors.controller'
import { CoursesModule } from 'src/courses/courses.module'
import { UsersModule } from 'src/users/users.module'

@Module({
  controllers: [ProfessorsController],
  providers: [ProfessorsService],
  imports: [UsersModule, CoursesModule],
})
export class ProfessorsModule {}
