import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { AdminsModule } from './admins/admins.module';
import { AuthModule } from './auth/auth.module';
import { CriteriaModule } from './criteria/criterias.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    EstudiantesModule,
    ProfesoresModule,
    AdminsModule,
    AuthModule,
    CriteriaModule,
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
