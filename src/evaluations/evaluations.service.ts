import { Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EvaluationsService {
  constructor(private prisma: PrismaService) {}
  async create(createEvaluationDto: CreateEvaluationDto) {
    return 'This action adds a new evaluation';
  }

  async findAll() {
    return `This action returns all evaluations`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} evaluation`;
  }

  async update(id: number, updateEvaluationDto: UpdateEvaluationDto) {
    return `This action updates a #${id} evaluation`;
  }

  async remove(id: number) {
    return `This action removes a #${id} evaluation`;
  }
}
