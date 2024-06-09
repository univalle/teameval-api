import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { CoursesModule } from './courses/courses.module'
import { GroupsModule } from './groups/groups.module'
import { EvaluationsModule } from './evaluations/evaluations.module'
import { CriteriaModule } from './criteria/criteria.module'
import { StudentsModule } from './students/students.module'
import { ProfessorsModule } from './professors/professors.module';

@Module({
  imports: [
    AuthModule,
    CoursesModule,
    GroupsModule,
    EvaluationsModule,
    CriteriaModule,
    StudentsModule,
    ProfessorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
