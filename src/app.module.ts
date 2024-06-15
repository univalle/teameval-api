import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { StudentsModule } from './students/students.module'
import { ProfessorsModule } from './professors/professors.module'
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [UsersModule, StudentsModule, ProfessorsModule, AdminsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
