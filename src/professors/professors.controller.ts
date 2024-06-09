import { Body, Controller, Get, Post } from '@nestjs/common'
import { ProfessorsService } from './professors.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'src/common/enums/rol.enum'
import { ApiTags } from '@nestjs/swagger'
import { ActiveUser } from 'src/common/decorators/active-user.decorator'
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface'

@Auth(Role.PROFESSOR)
@Controller('professors')
export class ProfessorsController {
  constructor(private readonly professorsService: ProfessorsService) {}

  @ApiTags('professors')
  @Get('profile')
  profile(@ActiveUser() user: UserActiveInterface) {
    return this.professorsService.profile(user)
  }

  @ApiTags('professors')
  @Post('courses')
  createCourse(@Body() body, @ActiveUser() user: UserActiveInterface) {
    return this.professorsService.createCourse(body, user)
  }

  @ApiTags('professors')
  @Get('courses')
  listCourses(@ActiveUser() user: UserActiveInterface) {
    return this.professorsService.listCourses(user)
  }

  @ApiTags('professors')
  @Post('add-student-to-course')
  addStudentToCourse(@Body() body) {
    console.log(body)
    return this.professorsService.addStudentToCourse(
      body.studentId,
      body.courseId,
    )
  }
}
