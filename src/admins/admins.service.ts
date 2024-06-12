import { Injectable } from '@nestjs/common'
import { CoursesService } from 'src/courses/courses.service'
import { CriteriaService } from 'src/criteria/criteria.service'
import { EvaluationsService } from 'src/evaluations/evaluations.service'
import { GroupsService } from 'src/groups/groups.service'
import { PrismaService } from 'src/prisma.service'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class AdminsService {
  constructor(
    private prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly coursesService: CoursesService,
    private readonly criteriaService: CriteriaService,
    private readonly evaluationService: EvaluationsService,
    private readonly groupService: GroupsService,
  ) {}

  async profile(user) {
    console.log('user', user)
    const userInfo = await this.usersService.findOneByEmail(user.email)

    return {
      name: userInfo.name,
      email: userInfo.email,
      role: userInfo.role,
      id: userInfo.id,
    }
  }

  async findAllUsers() {
    return this.usersService.findAll()
  }

  async findAllUsersByRole(role) {
    if (!role) {
      return this.usersService.findAll()
    }

    return this.usersService.findAllByRole(role)
  }

  async deleteUser(id) {
    return this.usersService.remove(id)
  }

  async createCourse(createCourseDto) {
    return this.coursesService.create(createCourseDto)
  }

  async findAllCourses() {
    return this.coursesService.findAll()
  }

  async findOneCourse(id) {
    return this.coursesService.findOne(id)
  }

  async updateCourse(id, updateCourseDto) {
    return this.coursesService.update(id, updateCourseDto)
  }

  async deleteCourse(id) {
    return this.coursesService.remove(id)
  }

  async addStudentToCourse(courseId, studentId) {
    return this.coursesService.addStudentToCourse(courseId, studentId)
  }

  async removeStudentFromCourse(courseId, studentId) {
    return this.coursesService.removeStudentFromCourse(courseId, studentId)
  }

  async createGroup(createGroupDto) {
    return this.groupService.create(createGroupDto)
  }

  async findAllGroups() {
    return this.groupService.findAll()
  }

  async findOneGroup(id) {
    return this.groupService.findOne(id)
  }

  async updateGroup(id, updateGroupDto) {
    return this.groupService.update(id, updateGroupDto)
  }

  async deleteGroup(id) {
    return this.groupService.remove(id)
  }

  async addStudentToGroup(groupId, studentId) {
    return this.groupService.addStudentToGroup(groupId, studentId)
  }

  async removeStudentFromGroup(groupId, studentId) {
    return this.groupService.removeStudentFromGroup(groupId, studentId)
  }

  async createCriteria(createCriteriaDto) {
    return this.criteriaService.create(createCriteriaDto)
  }

  async findAllCriteria() {
    return this.criteriaService.findAll()
  }

  async findOneCriteria(id) {
    return this.criteriaService.findOne(id)
  }

  async updateCriteria(id, updateCriteriaDto) {
    return this.criteriaService.update(id, updateCriteriaDto)
  }

  async deleteCriteria(id) {
    return this.criteriaService.remove(id)
  }

  async createEvaluation(createEvaluationDto) {
    return this.evaluationService.create(createEvaluationDto)
  }

  async findAllEvaluations() {
    return this.evaluationService.findAll()
  }

  async findOneEvaluation(id) {
    return this.evaluationService.findOne(id)
  }

  async updateEvaluation(id, updateEvaluationDto) {
    return this.evaluationService.update(id, updateEvaluationDto)
  }

  async deleteEvaluation(id) {
    return this.evaluationService.remove(id)
  }

  async addCriteriaToEvaluation(evaluationId, criteriaId) {
    return this.evaluationService.addCriteriaToEvaluation(
      evaluationId,
      criteriaId,
    )
  }

  async removeCriteriaFromEvaluation(evaluationId, criteriaId) {
    return this.evaluationService.removeCriteriaFromEvaluation(
      evaluationId,
      criteriaId,
    )
  }

  async addGroupAndStudentsToEvaluation(evaluationId, groupId, studentId) {
    console.log('studentID:', studentId)
    return this.evaluationService.addGroupAndStudentsToEvaluation(
      evaluationId,
      groupId,
      studentId,
    )
  }

  async removeGroupAndStudentsFromEvaluation(evaluationId, groupId, studentId) {
    return this.evaluationService.removeGroupAndStudentsFromEvaluation(
      evaluationId,
      groupId,
      studentId,
    )
  }

  async addProfessorToCourse(courseId, professorId) {
    return this.coursesService.addProfessorToCourse(courseId, professorId)
  }

  async removeProfessorFromCourse(courseId, professorId) {
    return this.coursesService.removeProfessorFromCourse(courseId, professorId)
  }

  // id              String      @id
  // criteria        Criteria    @relation(fields: [criteriaId], references: [id])
  // student         User        @relation(fields: [studentId], references: [id])
  // result          Int
  // criteriaId      String
  // studentId       String

  async evaluateCriteriaByStudent(criteriaId, studentId, result) {
    return this.evaluationService.evaluateCriteriaByStudent(
      criteriaId,
      studentId,
      result,
    )
  }

  async findCriteriaByEvaluation(evaluationId) {
    return this.evaluationService.findCriteriaByEvaluation(evaluationId)
  }

  async findAllCoursesByProfessor(professorId) {
    return this.coursesService.findAllByProfessor(professorId)
  }

  async findAllGroupsByStudent(studentId) {
    return this.groupService.findAllByStudent(studentId)
  }

  async findAllCoursesByStudent(studentId) {
    return this.coursesService.findAllByStudent(studentId)
  }
}
