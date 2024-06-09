import { Module } from '@nestjs/common'
import { CoursesService } from './courses.service'
import { CoursesController } from './courses.controller'
import { PrismaService } from 'src/prisma.service'
import { UsersModule } from 'src/users/users.module'

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, PrismaService],
  exports: [CoursesService],
  imports: [UsersModule],
})
export class CoursesModule {}
