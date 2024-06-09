import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { CoursesService } from './courses.service'
import { UpdateCourseDto } from './dto/update-course.dto'
import { ApiTags } from '@nestjs/swagger'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'src/common/enums/rol.enum'
import { ActiveUser } from 'src/common/decorators/active-user.decorator'
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface'

@Auth(Role.ADMIN)
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @ApiTags('Course')
  @Post()
  create(@Body() createCourseDto, @ActiveUser() user: UserActiveInterface) {
    console.log('createCourseDto', createCourseDto)
    return this.coursesService.create(createCourseDto, user)
  }

  @ApiTags('Course')
  @Get()
  findAll() {
    return this.coursesService.findAll()
  }

  @ApiTags('Course')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id)
  }

  @ApiTags('Course')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto)
  }

  @ApiTags('Course')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id)
  }

  @ApiTags('Course')
  @Post('add-student')
  addStudentToCourse(studentId, courseId) {
    return this.coursesService.addStudentToCourse(studentId, courseId)
  }

  @ApiTags('Course')
  @Get('student-courses/:id')
  studentCourses(studentId) {
    return this.coursesService.listStudentCourses(studentId)
  }
}
