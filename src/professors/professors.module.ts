import { Module } from '@nestjs/common'
import { ProfessorsService } from './professors.service'
import { ProfessorsController } from './professors.controller'
import { PrismaService } from 'src/prisma.service'
import { UsersModule } from 'src/users/users.module'

@Module({
  controllers: [ProfessorsController],
  providers: [ProfessorsService, PrismaService],
  imports: [UsersModule],
})
export class ProfessorsModule {}
