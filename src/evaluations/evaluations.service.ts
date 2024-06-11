import { Injectable } from '@nestjs/common'
// import { CreateEvaluationDto } from './dto/create-evaluation.dto';
// import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class EvaluationsService {
  constructor(private prisma: PrismaService) {}
  async create(createEvaluationDto) {
    const newId = crypto.randomUUID()
    const checkName = createEvaluationDto.name ? createEvaluationDto.name : ''

    return await this.prisma.evaluation.create({
      data: {
        id: newId,
        code: createEvaluationDto.code,
        name: checkName,
        description: createEvaluationDto.description,
      },
    })
  }

  async findAll() {
    return await this.prisma.evaluation.findMany()
  }

  async findOne(id) {
    return await this.prisma.evaluation.findUnique({
      where: {
        id: id,
      },
    })
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
    })
  }

  async remove(id) {
    return await this.prisma.evaluation.delete({
      where: {
        id: id,
      },
    })
  }

  async addCriteriaToEvaluation(evaluationId, criteriaId) {
    const newId = crypto.randomUUID()

    return await this.prisma.evaluationCriteria.create({
      data: {
        id: newId,
        evaluationId: evaluationId,
        criteriaId: criteriaId,
      },
    })
  }

  async removeCriteriaFromEvaluation(evaluationId, criteriaId) {
    return await this.prisma.evaluationCriteria.deleteMany({
      where: {
        evaluationId: evaluationId,
        criteriaId: criteriaId,
      },
    })
  }

  async addGroupAndStudentsToEvaluation(evaluationId, groupId, studentId) {
    const newId = crypto.randomUUID()

    return await this.prisma.studentGroupEvaluation.create({
      data: {
        id: newId,
        evaluationId: evaluationId,
        groupId: groupId,
        studentId: studentId,
      },
    })
  }

  async removeGroupAndStudentsFromEvaluation(evaluationId, groupId, studentId) {
    return await this.prisma.studentGroupEvaluation.deleteMany({
      where: {
        evaluationId: evaluationId,
        groupId: groupId,
        studentId: studentId,
      },
    })
  }

  async evaluateCriteriaByStudent(evaluationId, studentId, criteriaId, value) {
    const newId = crypto.randomUUID()

    return await this.prisma.criteriaStudentResult.create({
      data: {
        id: newId,
        studentId: studentId,
        criteriaId: criteriaId,
        result: value,
      },
    })
  }

  async findCriteriaByEvaluationIds(evaluationId) {
    return await this.prisma.evaluationCriteria.findMany({
      where: {
        evaluationId: evaluationId,
      },
    })
  }

  async findCriteriaByEvaluation(evaluationId) {
    const listOfIds = await this.findCriteriaByEvaluationIds(evaluationId)
    const criteriaIds = listOfIds.map((item) => item.criteriaId)

    return await this.prisma.criteria.findMany({
      where: {
        id: {
          in: criteriaIds,
        },
      },
    })
  }
}
