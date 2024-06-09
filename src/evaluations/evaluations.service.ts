import { Injectable } from '@nestjs/common';
// import { CreateEvaluationDto } from './dto/create-evaluation.dto';
// import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EvaluationsService {
  constructor(private prisma: PrismaService) {}
  async create(createEvaluationDto) {
    const newId = crypto.randomUUID();
    const checkName = createEvaluationDto.name ? createEvaluationDto.name : '';

    return await this.prisma.evaluation.create({
      data: {
        id: newId,
        code: createEvaluationDto.code,
        name: checkName,
        description: createEvaluationDto.description,
      },
    });
  }

  async findAll() {
    return await this.prisma.evaluation.findMany();
  }

  async findOne(id) {
    return await this.prisma.evaluation.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id, updateEvaluationDto) {
    return await this.prisma.evaluation.update({
      where: {
        id: id,
      },
      data: {
        code: updateEvaluationDto.code,
        name: updateEvaluationDto.name,
        description: updateEvaluationDto.description,
      },
    });
  }

  async remove(id) {
    return await this.prisma.evaluation.delete({
      where: {
        id: id,
      },
    });
  }
}
