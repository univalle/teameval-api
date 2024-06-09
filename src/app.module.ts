import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { GroupsModule } from './groups/groups.module';
import { EvaluationsModule } from './evaluations/evaluations.module';
import { CriteriaModule } from './criteria/criteria.module';

@Module({
  imports: [
    AuthModule,
    CoursesModule,
    GroupsModule,
    EvaluationsModule,
    CriteriaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
