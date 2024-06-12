import {
  Body,
  Controller,
  Get,
  Post,
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

  // - view and update their profile
  // - view his courses
  // - view his evaluations
  // - view his groups
  // - view his professors
  // - view his evaluations results

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

  @Get('evaluations')
  @ApiTags('students')
  evaluations(@ActiveUser() user: UserActiveInterface) {
    return this.studentsService.evaluations(user)
  }

  @Get('groups')
  @ApiTags('students')
  groups(@ActiveUser() user: UserActiveInterface) {
    return this.studentsService.groups(user)
  }

  @Post('evaluate')
  @ApiTags('students')
  evaluate(@Body() body, @ActiveUser() user: UserActiveInterface) {
    const { criteriaId, result } = body
    return this.studentsService.evaluateCriteriaByStudent(
      criteriaId,
      user,
      result,
    )
  }

  @Get('all')
  @ApiTags('students')
  all() {
    return this.studentsService.all()
  }

  // @Get('results')
  // @ApiTags('students')
  // results(@ActiveUser() user: UserActiveInterface) {
  //   return this.studentsService.results(user)
  // }
}
