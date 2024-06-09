import { Injectable } from '@nestjs/common'
import { CoursesService } from 'src/courses/courses.service'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class StudentsService {
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

  async courses(user) {
    const { id } = await this.usersService.findOneByEmail(user.email)
    return await this.coursesService.listStudentCourses(id)
  }
}
