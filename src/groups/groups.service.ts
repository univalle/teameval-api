import { Injectable } from '@nestjs/common'
// import { CreateGroupDto } from './dto/create-group.dto';
// import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}
  async create(createGroupDto) {
    const newId = crypto.randomUUID()
    const checkName = createGroupDto.name ? createGroupDto.name : ''

    return await this.prisma.group.create({
      data: {
        id: newId,
        code: createGroupDto.code,
        name: checkName,
      },
    })
  }

  async findAll() {
    return await this.prisma.group.findMany()
  }

  async findOne(id) {
    return await this.prisma.group.findUnique({
      where: {
        id: id,
      },
    })
  }

  async update(id, updateGroupDto) {
    return await this.prisma.group.update({
      where: {
        id: id,
      },
      data: {
        code: updateGroupDto.code,
        name: updateGroupDto.name,
      },
    })
  }

  async remove(id) {
    return await this.prisma.group.delete({
      where: {
        id: id,
      },
    })
  }

  async addStudentToGroup(groupId, studentId) {
    const newId = crypto.randomUUID()

    return await this.prisma.studentGroup.create({
      data: {
        id: newId,
        studentId: studentId,
        groupId: groupId,
      },
    })
  }

  async removeStudentFromGroup(groupId, studentId) {
    const idGroup = await this.prisma.studentGroup.findFirst({
      where: {
        AND: [{ groupId: groupId }, { studentId: studentId }],
      },
    })

    return await this.prisma.studentGroup.delete({
      where: {
        id: idGroup.id,
      },
    })
  }

  // async findAllByStudentId(studentId) {
  //   return await this.prisma.studentGroup.findMany({
  //     where: {
  //       studentId: studentId,
  //     },
  //   })
  // }

  async findAllByStudent(studentId) {
    return await this.prisma.studentGroup.findMany({
      where: {
        studentId: studentId,
      },
    })
  }
}
