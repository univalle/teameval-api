import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { ProfesoresModule } from './profesores/profesores.module';

@Module({
  imports: [EstudiantesModule, ProfesoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
