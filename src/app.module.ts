import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { AdminsModule } from './admins/admins.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [EstudiantesModule, ProfesoresModule, AdminsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
