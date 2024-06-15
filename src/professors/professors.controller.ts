import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { ProfessorsService } from './professors.service'
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface'
import { ActiveUser } from 'src/common/decorators/active-user.decorator'

@Controller('professors')
export class ProfessorsController {
  constructor(private readonly professorsService: ProfessorsService) {}

  checkUser(user: UserActiveInterface) {
    // if (!user) {
    //   throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    // }
    // if (!user.email) {
    //   throw new HttpException('Email not found', HttpStatus.NOT_FOUND)
    // }
  }

  @Get('profile')
  profile(@ActiveUser() user: UserActiveInterface) {
    this.checkUser(user)
    return this.professorsService.profile(user)
  }

  @Get('courses')
  courses(@ActiveUser() user: UserActiveInterface) {
    this.checkUser(user)
    return this.professorsService.courses(user)
  }

  @Get('groups')
  groups(@ActiveUser() user: UserActiveInterface) {
    this.checkUser(user)
    return this.professorsService.groups(user)
  }

  @Get('group-students/:groupCode')
  groupStudents(
    @ActiveUser() user: UserActiveInterface,
    @Param('groupCode') groupCode: string,
  ) {
    this.checkUser(user)
    return this.professorsService.groupStudents(groupCode)
  }

  @Get('evaluations')
  evaluations(@ActiveUser() user: UserActiveInterface) {
    this.checkUser(user)
    return this.professorsService.evaluations(user)
  }

  @Get('criteria/:evaluationCode')
  criteria(
    @ActiveUser() user: UserActiveInterface,
    @Param('evaluationCode') evaluationCode: string,
  ) {
    this.checkUser(user)
    return this.professorsService.criterias(evaluationCode)
  }

  @Get('evaluations/:groupCode/:studentId')
  evaluationGroup(
    @ActiveUser() user: UserActiveInterface,
    @Param('groupCode') groupCode: string,
    @Param('studentId') studentId: string,
  ) {
    this.checkUser(user)
    return this.professorsService.evaluationGroupStudent(groupCode, studentId)
  }

  @Get('results/:groupCode/:evaluationCode/:studentId')
  results(
    @ActiveUser() user: UserActiveInterface,
    @Param('evaluationCode') evaluationCode: string,
    @Param('groupCode') groupCode: string,
    @Param('studentId') studentId: string,
  ) {
    this.checkUser(user)
    return this.professorsService.results(evaluationCode, groupCode, studentId)
  }

  @Post('add-student-course')
  addStudentCourse(@ActiveUser() user: UserActiveInterface, @Body() body: any) {
    this.checkUser(user)

    const { studentId, courseId } = body

    if (!studentId) {
      throw new HttpException('Student id not found', HttpStatus.BAD_REQUEST)
    }

    if (!courseId) {
      throw new HttpException('Course id not found', HttpStatus.BAD_REQUEST)
    }

    return this.professorsService.addStudentCourse(studentId, courseId)
  }

  @Delete('remove-student-course')
  removeStudentCourse(
    @ActiveUser() user: UserActiveInterface,
    @Body() body: any,
  ) {
    this.checkUser(user)

    const { studentId, courseId } = body

    if (!studentId) {
      throw new HttpException('Student id not found', HttpStatus.BAD_REQUEST)
    }

    if (!courseId) {
      throw new HttpException('Course id not found', HttpStatus.BAD_REQUEST)
    }

    return this.professorsService.removeStudentCourse(studentId, courseId)
  }

  @Post('create-group')
  createGroup(@ActiveUser() user: UserActiveInterface, @Body() body: any) {
    this.checkUser(user)

    const { name, code, course } = body

    if (!name) {
      throw new HttpException('Group name not found', HttpStatus.BAD_REQUEST)
    }

    if (!code) {
      throw new HttpException('Group code not found', HttpStatus.BAD_REQUEST)
    }

    if (!course) {
      throw new HttpException('Course not found', HttpStatus.BAD_REQUEST)
    }

    return this.professorsService.createGroup(name, code, course)
  }

  @Patch('update-group')
  updateGroup(@ActiveUser() user: UserActiveInterface, @Body() body: any) {
    this.checkUser(user)

    const { name, code } = body

    if (!name) {
      throw new HttpException('Group name not found', HttpStatus.BAD_REQUEST)
    }

    if (!code) {
      throw new HttpException('Group code not found', HttpStatus.BAD_REQUEST)
    }

    return this.professorsService.updateGroup(name, code)
  }

  @Delete('delete-group/:groupCode')
  deleteGroup(
    @ActiveUser() user: UserActiveInterface,
    @Param('groupCode') groupCode: string,
  ) {
    this.checkUser(user)
    return this.professorsService.deleteGroup(groupCode)
  }

  @Post('add-student-group')
  addStudentGroup(@ActiveUser() user: UserActiveInterface, @Body() body: any) {
    this.checkUser(user)

    const { studentId, groupCode } = body

    if (!studentId) {
      throw new HttpException('Student id not found', HttpStatus.BAD_REQUEST)
    }

    if (!groupCode) {
      throw new HttpException('Group code not found', HttpStatus.BAD_REQUEST)
    }

    return this.professorsService.addStudentGroup(studentId, groupCode)
  }

  @Delete('remove-student-group')
  removeStudentGroup(
    @ActiveUser() user: UserActiveInterface,
    @Body() body: any,
  ) {
    this.checkUser(user)

    const { studentId, groupCode } = body

    if (!studentId) {
      throw new HttpException('Student id not found', HttpStatus.BAD_REQUEST)
    }

    if (!groupCode) {
      throw new HttpException('Group code not found', HttpStatus.BAD_REQUEST)
    }

    return this.professorsService.removeStudentGroup(studentId, groupCode)
  }

  @Post('create-evaluation')
  createEvaluation(@ActiveUser() user: UserActiveInterface, @Body() body: any) {
    this.checkUser(user)

    const { code, name, description, professorId } = body

    if (!code) {
      throw new HttpException(
        'Evaluation code not found',
        HttpStatus.BAD_REQUEST,
      )
    }

    if (!name) {
      throw new HttpException(
        'Evaluation name not found',
        HttpStatus.BAD_REQUEST,
      )
    }

    if (!description) {
      throw new HttpException(
        'Evaluation description not found',
        HttpStatus.BAD_REQUEST,
      )
    }

    if (!professorId) {
      throw new HttpException('Professor id not found', HttpStatus.BAD_REQUEST)
    }

    return this.professorsService.createEvaluation(
      code,
      name,
      description,
      professorId,
    )
  }

  @Patch('update-evaluation')
  updateEvaluation(@ActiveUser() user: UserActiveInterface, @Body() body: any) {
    this.checkUser(user)

    const { code, name, description } = body

    if (!code) {
      throw new HttpException(
        'Evaluation code not found',
        HttpStatus.BAD_REQUEST,
      )
    }

    if (!name) {
      throw new HttpException(
        'Evaluation name not found',
        HttpStatus.BAD_REQUEST,
      )
    }

    if (!description) {
      throw new HttpException(
        'Evaluation description not found',
        HttpStatus.BAD_REQUEST,
      )
    }

    return this.professorsService.updateEvaluation(code, name, description)
  }

  @Delete('delete-evaluation/:evaluationCode')
  deleteEvaluation(
    @ActiveUser() user: UserActiveInterface,
    @Param('evaluationCode') evaluationCode: string,
  ) {
    this.checkUser(user)
    return this.professorsService.deleteEvaluation(evaluationCode)
  }

  @Post('create-criteria')
  createCriteria(@ActiveUser() user: UserActiveInterface, @Body() body: any) {
    this.checkUser(user)

    const { code, name, description, evaluationCode, weight } = body

    if (!code) {
      throw new HttpException('Criteria code not found', HttpStatus.BAD_REQUEST)
    }

    if (!name) {
      throw new HttpException('Criteria name not found', HttpStatus.BAD_REQUEST)
    }

    if (!description) {
      throw new HttpException(
        'Criteria description not found',
        HttpStatus.BAD_REQUEST,
      )
    }

    if (!evaluationCode) {
      throw new HttpException(
        'Evaluation code not found',
        HttpStatus.BAD_REQUEST,
      )
    }

    if (!weight) {
      throw new HttpException(
        'Criteria weight not found',
        HttpStatus.BAD_REQUEST,
      )
    }

    return this.professorsService.createCriteria(
      code,
      name,
      description,
      evaluationCode,
      weight,
    )
  }

  @Patch('update-criteria')
  updateCriteria(@ActiveUser() user: UserActiveInterface, @Body() body: any) {
    this.checkUser(user)

    const { code, name, description, weight } = body

    if (!code) {
      throw new HttpException('Criteria code not found', HttpStatus.BAD_REQUEST)
    }

    if (!name) {
      throw new HttpException('Criteria name not found', HttpStatus.BAD_REQUEST)
    }

    if (!description) {
      throw new HttpException(
        'Criteria description not found',
        HttpStatus.BAD_REQUEST,
      )
    }

    if (!weight) {
      throw new HttpException(
        'Criteria weight not found',
        HttpStatus.BAD_REQUEST,
      )
    }

    return this.professorsService.updateCriteria(
      code,
      name,
      description,
      weight,
    )
  }

  @Delete('delete-criteria/:criteriaCode')
  deleteCriteria(
    @ActiveUser() user: UserActiveInterface,
    @Param('criteriaCode') criteriaCode: string,
  ) {
    this.checkUser(user)
    return this.professorsService.deleteCriteria(criteriaCode)
  }
}
