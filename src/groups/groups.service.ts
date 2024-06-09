import { Injectable } from '@nestjs/common';
// import { CreateGroupDto } from './dto/create-group.dto';
// import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}
  async create(createGroupDto) {
    const newId = crypto.randomUUID();
    const checkName = createGroupDto.name ? createGroupDto.name : '';

    return await this.prisma.group.create({
      data: {
        id: newId,
        code: createGroupDto.code,
        name: checkName,
      },
    });
  }

  async findAll() {
    return await this.prisma.group.findMany();
  }

  async findOne(id) {
    return await this.prisma.group.findUnique({
      where: {
        id: id,
      },
    });
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
    });
  }

  async remove(id) {
    return await this.prisma.group.delete({
      where: {
        id: id,
      },
    });
  }
}
