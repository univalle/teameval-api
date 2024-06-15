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
import { StudentsService } from './students.service'
import { CreateStudentDto } from './dto/create-student.dto'
import { UpdateStudentDto } from './dto/update-student.dto'
import { ActiveUser } from 'src/common/decorators/active-user.decorator'
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface'

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

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
    return this.studentsService.profile(user)
  }

  @Get('evaluations')
  evaluations(@ActiveUser() user: UserActiveInterface) {
    this.checkUser(user)
    return this.studentsService.evaluations(user)
  }

  @Get('groups')
  groups(@ActiveUser() user: UserActiveInterface) {
    this.checkUser(user)
    return this.studentsService.groups(user)
  }

  @Get('courses')
  courses(@ActiveUser() user: UserActiveInterface) {
    this.checkUser(user)
    return this.studentsService.groups(user)
  }

  @Get('evaluation-group/:evaluationCode/:groupCode')
  evaluationGroup(
    @ActiveUser() user: UserActiveInterface,
    @Param('evaluationCode') evaluationCode: string,
    @Param('groupCode') groupCode: string,
  ) {
    this.checkUser(user)
    return this.studentsService.evaluationGroup(user, evaluationCode, groupCode)
  }

  @Get('criteria/:evaluationCode')
  criterias(
    @ActiveUser() user: UserActiveInterface,
    @Param('evaluationCode') evaluationCode: string,
  ) {
    this.checkUser(user)
    return this.studentsService.criteria(evaluationCode)
  }

  @Post('evaluate')
  evaluate(@ActiveUser() user: UserActiveInterface, @Body() body: any) {
    this.checkUser(user)

    const { studentId, criteriaId, evaluatedStudentId, value } = body

    if (!studentId) {
      throw new HttpException('Student id not found', HttpStatus.BAD_REQUEST)
    }

    if (!criteriaId) {
      throw new HttpException('Criteria id not found', HttpStatus.BAD_REQUEST)
    }

    if (!evaluatedStudentId) {
      throw new HttpException(
        'Evaluated student id not found',
        HttpStatus.BAD_REQUEST,
      )
    }

    if (!value) {
      throw new HttpException('Value not found', HttpStatus.BAD_REQUEST)
    }

    return this.studentsService.evaluate(
      studentId,
      criteriaId,
      evaluatedStudentId,
      value,
    )
  }
}
