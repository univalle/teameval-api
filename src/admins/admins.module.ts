import { Module } from '@nestjs/common'
import { AdminsService } from './admins.service'
import { AdminsController } from './admins.controller'
import { PrismaService } from 'src/prisma.service'
import { UsersService } from 'src/users/users.service'
import { UsersModule } from 'src/users/users.module'

@Module({
  imports: [UsersModule],
  controllers: [AdminsController],
  providers: [AdminsService, PrismaService],
})
export class AdminsModule {}
