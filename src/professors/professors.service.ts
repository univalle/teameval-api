import { Injectable } from '@nestjs/common'
import { CoursesService } from 'src/courses/courses.service'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class ProfessorsService {
  constructor(
    private readonly usersService: UsersService,
    private readonly coursesService: CoursesService,
  ) {}

  async profile(user) {
    const userInfo = await this.usersService.findOneByEmail(user.email)
    return {
      name: userInfo.name,
      email: userInfo.email,
      role: userInfo.role,
      id: userInfo.id,
    }
  }

  async createCourse(course, user) {
    return await this.coursesService.create(course, user)
  }

  async addStudentToCourse(studentId, courseId) {
    return await this.coursesService.addStudentToCourse(studentId, courseId)
  }

  async studentCourses(studentId) {
    return await this.coursesService.listStudentCourses(studentId)
  }

  async listCourses(user) {
    const { id } = await this.usersService.findOneByEmail(user.email)
    return await this.coursesService.listProfessorCourses(id)
  }

  async listProfessorsByStudent(studentId) {
    return await this.usersService.listProfessorsByStudent(studentId)
  }
}
