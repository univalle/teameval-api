import { Injectable } from '@nestjs/common'
import { CreateAdminDto } from './dto/create-admin.dto'
import { UpdateAdminDto } from './dto/update-admin.dto'
import { UsersService } from 'src/users/users.service'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class AdminsService {
  constructor(
    private readonly usersService: UsersService,
    private prisma: PrismaService,
  ) {}

  //Courses CRUD
  async findAllCourses() {
    return await this.prisma.course.findMany()
  }

  async findOneCourse(id: number) {
    return await this.prisma.course.findUnique({
      where: { id },
    })
  }

  async createCourse(data: any) {

    return await this.prisma.course.create({
      data,
    })
  }

  async updateCourse(id: number, data: any) {
    return await this.prisma.course.update({
      where: { id },
      data,
    })
  }

  async removeCourse(id: number) {
    return await this.prisma.course.delete({
      where: { id },
    })
  }

  async findCoursesUser(id: number) {
    const courses = await this.prisma.professorCourse.findMany({
      where: { 
        userId: id
      },
      include: {
        course: true
      },
    })

    if (!courses) {
      return []
    }
    const courseInfo = courses.map(item => ({
      id: item.course.id,
      name: item.course.name
  }));

    return courseInfo
  }

  // Evaluation CRUD

  async findAllEvaluations() {
    return await this.prisma.evaluation.findMany()
  }

  async findOneEvaluation(id: number) {
    return await this.prisma.evaluation.findUnique({
      where: { id },
    })
  }

  async createEvaluation(data: any) {
    return await this.prisma.evaluation.create({
      data,
    })
  }

  async updateEvaluation(id: number, data: any) {
    return await this.prisma.evaluation.update({
      where: { id },
      data,
    })
  }

  async removeEvaluation(id: number) {
    return await this.prisma.evaluation.delete({
      where: { id },
    })
  }

  //Criteria CRUD

  async findAllCriteria() {
    return await this.prisma.criteria.findMany()
  }

  async findOneCriteria(id: number) {
    return await this.prisma.criteria.findUnique({
      where: { id },
    })
  }

  async createCriteria(data: any) {
    return await this.prisma.criteria.create({
      data,
    })
  }

  async updateCriteria(id: number, data: any) {
    return await this.prisma.criteria.update({
      where: { id },
      data,
    })
  }

  async removeCriteria(id: number) {
    return await this.prisma.criteria.delete({
      where: { id },
    })
  }

  //Group CRUD

  async findAllGroups() {
    return await this.prisma.group.findMany()
  }

  async findOneGroup(id: number) {
    return await this.prisma.group.findUnique({
      where: { id },
    })
  }

  async createGroup(data: any) {

    console.log(data)

    const { name, code, course } = data

    const courseIdNumber = Number(course)

    console.log(courseIdNumber)

    return await this.prisma.group.create({
      data: {
        name,
        code,
        course: {
          connect: {
            id: courseIdNumber
          }
        }
      }
    })
  }

  async updateGroup(id: number, data: any) {
    return await this.prisma.group.update({
      where: { id },
      data,
    })
  }

  async removeGroup(id: number) {
    return await this.prisma.group.delete({
      where: { id },
    })
  }
}
