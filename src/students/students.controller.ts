import {
  Controller,
  Get,
  // Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'src/common/enums/rol.enum'
import { ApiTags } from '@nestjs/swagger'
import { ActiveUser } from 'src/common/decorators/active-user.decorator'
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface'
import { StudentsService } from './students.service'

@Auth(Role.STUDENT)
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get('profile')
  @ApiTags('students')
  profile(@ActiveUser() user: UserActiveInterface) {
    return this.studentsService.profile(user)
  }

  @Get('courses')
  @ApiTags('students')
  courses(@ActiveUser() user: UserActiveInterface) {
    return this.studentsService.courses(user)
  }
}
