import { Injectable } from '@nestjs/common'
import { CreateCourseDto } from './dto/create-course.dto'
import { UpdateCourseDto } from './dto/update-course.dto'
import { PrismaService } from 'src/prisma.service'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class CoursesService {
  constructor(
    private prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}
  async create(createCourseDto: CreateCourseDto, user = null) {
    const existingCourse = await this.prisma.course.findUnique({
      where: {
        code: createCourseDto.code,
      },
    })

    if (existingCourse) {
      return {
        message: 'Course already exists',
      }
    }

    const newId = crypto.randomUUID()
    const checkName = createCourseDto.name ? createCourseDto.name : ''

    const courseCreation = await this.prisma.course.create({
      data: {
        id: newId,
        name: checkName,
        code: createCourseDto.code,
        description: createCourseDto.description,
        period: createCourseDto.period,
      },
    })

    if (user !== null && user.role === 'PROFESSOR') {
      const newAssignmentId = crypto.randomUUID()
      const { id } = await this.usersService.findOneByEmail(user.email)

      await this.prisma.professorCourse.create({
        data: {
          id: newAssignmentId,
          professorId: id,
          courseId: newId,
        },
      })
    }

    return courseCreation
  }

  async findAll() {
    return await this.prisma.course.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.course.findUnique({
      where: {
        id,
      },
    })
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    return await this.prisma.course.update({
      where: {
        id,
      },
      data: updateCourseDto,
    })
  }

  async remove(id: string) {
    return await this.prisma.course.delete({
      where: {
        id,
      },
    })
  }

  async addStudentToCourse(studentId: string, courseId: string) {
    const newAssignmentId = crypto.randomUUID()

    await this.prisma.studentCourse.create({
      data: {
        id: newAssignmentId,
        studentId,
        courseId,
      },
    })

    return {
      message: 'Student added to course',
    }
  }

  async listStudentCourses(studentId: string) {
    const coursesIds = await this.prisma.studentCourse.findMany({
      where: {
        studentId,
      },
    })

    const courses = []

    for (const course of coursesIds) {
      const courseInfo = await this.prisma.course.findUnique({
        where: {
          id: course.courseId,
        },
      })

      courses.push(courseInfo)
    }

    return courses
  }

  async listProfessorCourses(professorId: string) {
    const coursesIds = await this.prisma.professorCourse.findMany({
      where: {
        professorId,
      },
    })

    const courses = []

    for (const course of coursesIds) {
      const courseInfo = await this.prisma.course.findUnique({
        where: {
          id: course.id,
        },
      })

      courses.push(courseInfo)
    }

    return courses
  }

  async removeStudentFromCourse(studentId: string, courseId: string) {
    await this.prisma.studentCourse.deleteMany({
      where: {
        studentId,
        courseId,
      },
    })

    return {
      message: 'Student removed from course',
    }
  }

  async addProfessorToCourse(professorId: string, courseId: string) {
    const newAssignmentId = crypto.randomUUID()

    await this.prisma.professorCourse.create({
      data: {
        id: newAssignmentId,
        professorId,
        courseId,
      },
    })

    return {
      message: 'Professor added to course',
    }
  }

  async removeProfessorFromCourse(professorId: string, courseId: string) {
    await this.prisma.professorCourse.deleteMany({
      where: {
        professorId,
        courseId,
      },
    })

    return {
      message: 'Professor removed from course',
    }
  }

  async findAllByProfessor(professorId: string) {
    const coursesIds = await this.prisma.professorCourse.findMany({
      where: {
        professorId,
      },
    })

    const courses = []

    for (const course of coursesIds) {
      const courseInfo = await this.prisma.course.findUnique({
        where: {
          id: course.courseId,
        },
      })

      courses.push(courseInfo)
    }

    return courses
  }

  async findAllByStudent(studentId: string) {
    const coursesIds = await this.prisma.studentCourse.findMany({
      where: {
        studentId,
      },
    })

    const courses = []

    for (const course of coursesIds) {
      const courseInfo = await this.prisma.course.findUnique({
        where: {
          id: course.courseId,
        },
      })

      courses.push(courseInfo)
    }

    return courses
  }
}
