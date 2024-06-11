import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { AdminsService } from './admins.service'
import { ApiTags } from '@nestjs/swagger'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'src/common/enums/rol.enum'
import { ActiveUser } from 'src/common/decorators/active-user.decorator'
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface'

@Auth(Role.ADMIN)
@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Get('profile')
  @ApiTags('Admins')
  profile(@ActiveUser() user: UserActiveInterface) {
    return this.adminsService.profile(user)
  }

  @Get('all-users')
  @ApiTags('Admins')
  allUsers() {
    return this.adminsService.findAllUsers()
  }

  @Get('all-users-by-role/:role')
  @ApiTags('Admins')
  allUsersByRole(@Param('role') role: string) {
    return this.adminsService.findAllUsersByRole(role)
  }

  @Delete('delete-user/:id')
  @ApiTags('Admins')
  deleteUser(@Param('id') id: string) {
    return this.adminsService.deleteUser(id)
  }

  @Post('create-course')
  @ApiTags('Admins')
  createCourse(@Body() createCourseDto) {
    return this.adminsService.createCourse(createCourseDto)
  }

  @Delete('delete-course/:id')
  @ApiTags('Admins')
  deleteCourse(@Param('id') id: string) {
    return this.adminsService.deleteCourse(id)
  }

  @Post('add-student-to-course')
  @ApiTags('Admins')
  addStudentToCourse(@Body() body) {
    return this.adminsService.addStudentToCourse(body.courseId, body.studentId)
  }

  @Post('remove-student-from-course')
  @ApiTags('Admins')
  removeStudentFromCourse(@Body() body) {
    return this.adminsService.removeStudentFromCourse(
      body.courseId,
      body.studentId,
    )
  }

  @Get('all-courses')
  @ApiTags('Admins')
  allCourses() {
    return this.adminsService.findAllCourses()
  }

  @Get('one-course/:id')
  @ApiTags('Admins')
  oneCourse(@Param('id') id: string) {
    return this.adminsService.findOneCourse(id)
  }

  @Get('all-courses-by-professor/:id')
  @ApiTags('Admins')
  allCoursesByProfessor(@Param('id') id: string) {
    return this.adminsService.findAllCoursesByProfessor(id)
  }

  @Get('all-courses-by-student/:id')
  @ApiTags('Admins')
  allCoursesByStudent(@Param('id') id: string) {
    return this.adminsService.findAllCoursesByStudent(id)
  }

  @Post('update-course/:id')
  @ApiTags('Admins')
  updateCourse(@Param('id') id: string, @Body() updateCourseDto) {
    return this.adminsService.updateCourse(id, updateCourseDto)
  }

  @Post('create-group')
  @ApiTags('Admins')
  createGroup(@Body() createGroupDto) {
    return this.adminsService.createGroup(createGroupDto)
  }

  @Get('all-groups')
  @ApiTags('Admins')
  allGroups() {
    return this.adminsService.findAllGroups()
  }

  @Get('one-group/:id')
  @ApiTags('Admins')
  oneGroup(@Param('id') id: string) {
    return this.adminsService.findOneGroup(id)
  }

  @Post('update-group/:id')
  @ApiTags('Admins')
  updateGroup(@Param('id') id: string, @Body() updateGroupDto) {
    return this.adminsService.updateGroup(id, updateGroupDto)
  }

  @Delete('delete-group/:id')
  @ApiTags('Admins')
  deleteGroup(@Param('id') id: string) {
    return this.adminsService.deleteGroup(id)
  }

  @Post('add-student-to-group')
  @ApiTags('Admins')
  addStudentToGroup(@Body() body) {
    return this.adminsService.addStudentToGroup(body.groupId, body.studentId)
  }

  @Post('remove-student-from-group')
  @ApiTags('Admins')
  removeStudentFromGroup(@Body() body) {
    return this.adminsService.removeStudentFromGroup(
      body.groupId,
      body.studentId,
    )
  }

  @Post('create-criteria')
  @ApiTags('Admins')
  createCriteria(@Body() createCriteriaDto) {
    return this.adminsService.createCriteria(createCriteriaDto)
  }

  @Get('all-criteria')
  @ApiTags('Admins')
  allCriteria() {
    return this.adminsService.findAllCriteria()
  }

  @Get('one-criteria/:id')
  @ApiTags('Admins')
  oneCriteria(@Param('id') id: string) {
    return this.adminsService.findOneCriteria(id)
  }

  @Post('update-criteria/:id')
  @ApiTags('Admins')
  updateCriteria(@Param('id') id: string, @Body() updateCriteriaDto) {
    return this.adminsService.updateCriteria(id, updateCriteriaDto)
  }

  @Delete('delete-criteria/:id')
  @ApiTags('Admins')
  deleteCriteria(@Param('id') id: string) {
    return this.adminsService.deleteCriteria(id)
  }

  @Post('create-evaluation')
  @ApiTags('Admins')
  createEvaluation(@Body() createEvaluationDto) {
    return this.adminsService.createEvaluation(createEvaluationDto)
  }

  @Get('all-evaluations')
  @ApiTags('Admins')
  allEvaluations() {
    return this.adminsService.findAllEvaluations()
  }

  @Get('one-evaluation/:id')
  @ApiTags('Admins')
  oneEvaluation(@Param('id') id: string) {
    return this.adminsService.findOneEvaluation(id)
  }

  @Post('update-evaluation/:id')
  @ApiTags('Admins')
  updateEvaluation(@Param('id') id: string, @Body() updateEvaluationDto) {
    return this.adminsService.updateEvaluation(id, updateEvaluationDto)
  }

  @Delete('delete-evaluation/:id')
  @ApiTags('Admins')
  deleteEvaluation(@Param('id') id: string) {
    return this.adminsService.deleteEvaluation(id)
  }

  @Post('add-criteria-to-evaluation')
  @ApiTags('Admins')
  addCriteriaToEvaluation(@Body() body) {
    return this.adminsService.addCriteriaToEvaluation(
      body.evaluationId,
      body.criteriaId,
    )
  }

  @Post('remove-criteria-from-evaluation')
  @ApiTags('Admins')
  removeCriteriaFromEvaluation(@Body() body) {
    return this.adminsService.removeCriteriaFromEvaluation(
      body.evaluationId,
      body.criteriaId,
    )
  }

  @Post('add-group-and-students-to-evaluation')
  @ApiTags('Admins')
  addGroupAndStudentsToEvaluation(@Body() body) {
    return this.adminsService.addGroupAndStudentsToEvaluation(
      body.evaluationId,
      body.groupId,
      body.students,
    )
  }

  @Post('remove-group-and-students-from-evaluation')
  @ApiTags('Admins')
  removeGroupAndStudentsFromEvaluation(@Body() body) {
    return this.adminsService.removeGroupAndStudentsFromEvaluation(
      body.evaluationId,
      body.groupId,
      body.students,
    )
  }

  @Post('add-professor-to-course')
  @ApiTags('Admins')
  addProfessorToCourse(@Body() body) {
    return this.adminsService.addProfessorToCourse(
      body.courseId,
      body.professorId,
    )
  }

  @Post('remove-professor-from-course')
  @ApiTags('Admins')
  removeProfessorFromCourse(@Body() body) {
    return this.adminsService.removeProfessorFromCourse(
      body.courseId,
      body.professorId,
    )
  }

  @Post('evaluate-criteria-by-student')
  @ApiTags('Admins')
  evaluateCriteriaByStudent(@Body() body) {
    return this.adminsService.evaluateCriteriaByStudent(
      body.evaluationId,
      body.studentId,
      body.criteriaId,
      body.result,
    )
  }

  @Post('find-criteria-by-evaluation')
  @ApiTags('Admins')
  findCriteriaByEvaluation(@Body() body) {
    return this.adminsService.findCriteriaByEvaluation(body.evaluationId)
  }
}
