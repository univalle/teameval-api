import { Module } from '@nestjs/common'
import { StudentsService } from './students.service'
import { StudentsController } from './students.controller'
import { UsersModule } from 'src/users/users.module'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [StudentsController],
  providers: [StudentsService, PrismaService],
  imports: [UsersModule],
})
export class StudentsModule {}
