import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { AdminsService } from './admins.service'
import { UsersService } from 'src/users/users.service'

@Controller('admins')
export class AdminsController {
  constructor(
    private readonly adminsService: AdminsService,
    private readonly usersService: UsersService,
  ) {}

  @Get('users')
  findAll() {
    return this.usersService.findAll()
  }

  @Get('users/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id)
  }

  @Post('users')
  create(@Body() createUserDto: any) {
    return this.usersService.create(createUserDto)
  }

  @Patch('users/:id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.usersService.update(+id, updateUserDto)
  }

  @Delete('users/:id')
  remove(@Param('id') id: string) {
    console.log('id', id)
    return this.usersService.remove(+id)
  }

  //Courses CRUD
  @Get('courses')
  findAllCourses() {
    return this.adminsService.findAllCourses()
  }

  @Get('courses/:id')
  findOneCourse(@Param('id') id: string) {
    return this.adminsService.findOneCourse(+id)
  }

  @Post('courses')
  createCourse(@Body() createCourseDto: any) {
    return this.adminsService.createCourse(createCourseDto)
  }

  @Patch('courses/:id')
  updateCourse(@Param('id') id: string, @Body() updateCourseDto: any) {
    return this.adminsService.updateCourse(+id, updateCourseDto)
  }

  @Delete('courses/:id')
  removeCourse(@Param('id') id: string) {
    return this.adminsService.removeCourse(+id)
  }

  @Get('courses-user/:id')
  findCoursesUser(@Param('id') id: string) {
    return this.adminsService.findCoursesUser(+id)
  }

  //Evaluation CRUD
  @Get('evaluations')
  findAllEvaluations() {
    return this.adminsService.findAllEvaluations()
  }

  @Get('evaluations/:id')
  findOneEvaluation(@Param('id') id: string) {
    return this.adminsService.findOneEvaluation(+id)
  }

  @Post('evaluations')
  createEvaluation(@Body() createEvaluationDto: any) {
    return this.adminsService.createEvaluation(createEvaluationDto)
  }

  @Patch('evaluations/:id')
  updateEvaluation(@Param('id') id: string, @Body() updateEvaluationDto: any) {
    return this.adminsService.updateEvaluation(+id, updateEvaluationDto)
  }

  @Delete('evaluations/:id')
  removeEvaluation(@Param('id') id: string) {
    return this.adminsService.removeEvaluation(+id)
  }

  //Criteria CRUD
  @Get('criteria')
  findAllCriteria() {
    return this.adminsService.findAllCriteria()
  }

  @Get('criteria/:id')
  findOneCriteria(@Param('id') id: string) {
    return this.adminsService.findOneCriteria(+id)
  }

  @Post('criteria')
  createCriteria(@Body() createCriteriaDto: any) {
    return this.adminsService.createCriteria(createCriteriaDto)
  }

  @Patch('criteria/:id')
  updateCriteria(@Param('id') id: string, @Body() updateCriteriaDto: any) {
    return this.adminsService.updateCriteria(+id, updateCriteriaDto)
  }

  @Delete('criteria/:id')
  removeCriteria(@Param('id') id: string) {
    return this.adminsService.removeCriteria(+id)
  }

  //Group CRUD
  @Get('groups')
  findAllGroups() {
    return this.adminsService.findAllGroups()
  }

  @Get('groups/:id')
  findOneGroup(@Param('id') id: string) {
    return this.adminsService.findOneGroup(+id)
  }

  @Post('groups')
  createGroup(@Body() createGroupDto: any) {
    return this.adminsService.createGroup(createGroupDto)
  }

  @Patch('groups/:id')
  updateGroup(@Param('id') id: string, @Body() updateGroupDto: any) {
    return this.adminsService.updateGroup(+id, updateGroupDto)
  }

  @Delete('groups/:id')
  removeGroup(@Param('id') id: string) {
    return this.adminsService.removeGroup(+id)
  }
}
