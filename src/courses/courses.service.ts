import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}
  async create(createCourseDto: CreateCourseDto) {
    const existingCourse = await this.prisma.course.findUnique({
      where: {
        code: createCourseDto.code,
      },
    });

    if (existingCourse) {
      return {
        message: 'Course already exists',
      };
    }

    const newId = crypto.randomUUID();

    const checkName = createCourseDto.name ? createCourseDto.name : '';

    const courseCreation = await this.prisma.course.create({
      data: {
        id: newId,
        name: checkName,
        code: createCourseDto.code,
      },
    });

    return {
      id: courseCreation.id,
      name: courseCreation.name,
      code: courseCreation.code,
    };
  }

  async findAll() {
    return await this.prisma.course.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.course.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    return await this.prisma.course.update({
      where: {
        id,
      },
      data: updateCourseDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.course.delete({
      where: {
        id,
      },
    });
  }
}
