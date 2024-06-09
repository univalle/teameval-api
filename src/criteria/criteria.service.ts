import { Injectable } from '@nestjs/common'
// import { CreateCriterionDto } from './dto/create-criterion.dto';
// import { UpdateCriterionDto } from './dto/update-criterion.dto';
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class CriteriaService {
  constructor(private prisma: PrismaService) {}
  async create(createCriterionDto) {
    const newId = crypto.randomUUID()
    const checkName = createCriterionDto.name ? createCriterionDto.name : ''

    return await this.prisma.criteria.create({
      data: {
        id: newId,
        code: createCriterionDto.code,
        name: checkName,
        description: createCriterionDto.description,
      },
    })
  }

  async findAll() {
    return await this.prisma.criteria.findMany()
  }

  async findOne(id) {
    return await this.prisma.criteria.findUnique({
      where: {
        id: id,
      },
    })
  }

  async update(id, updateCriterionDto) {
    return await this.prisma.criteria.update({
      where: {
        id: id,
      },
      data: {
        code: updateCriterionDto.code,
        name: updateCriterionDto.name,
        description: updateCriterionDto.description,
      },
    })
  }

  async remove(id) {
    return await this.prisma.criteria.delete({
      where: {
        id: id,
      },
    })
  }
}
