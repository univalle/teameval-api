"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const prisma_service_1 = require("../prisma.service");
const client_1 = require("@prisma/client");
let StudentsService = class StudentsService {
    constructor(usersService, prisma) {
        this.usersService = usersService;
        this.prisma = prisma;
    }
    async profile(user) {
        const userInfo = await this.usersService.findOneByEmail('student1@example.com');
        if (userInfo === null) {
            throw new common_1.NotFoundException({ message: 'User not found' });
        }
        if ('error' in userInfo) {
            throw new Error('No se encontró el usuario');
        }
        else {
            const { email, name, code, createdAt, updatedAt } = userInfo;
            return { email, name, code, createdAt, updatedAt };
        }
    }
    async evaluations(user) {
        const email = 'student1@example.com';
        const studentGroups = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
            select: {
                id: true,
                studentGroups: {
                    select: {
                        group: {
                            select: {
                                id: true,
                                code: true,
                                name: true,
                                course: {
                                    select: {
                                        id: true,
                                        code: true,
                                        name: true,
                                        academicPeriod: true,
                                        professorCourses: {
                                            select: {
                                                user: {
                                                    select: {
                                                        name: true,
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                GroupEvaluation: {
                                    select: {
                                        evaluation: {
                                            select: {
                                                id: true,
                                                code: true,
                                                name: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!studentGroups) {
            return [];
        }
        const extractEvaluationInfo = (evaluations) => {
            return evaluations.map((evaluation) => ({
                evaluationId: evaluation.evaluation.id,
                evaluationName: evaluation.evaluation.name,
                evaluationCode: evaluation.evaluation.code,
            }));
        };
        const extractedData = studentGroups.studentGroups.map((groupData) => {
            const group = groupData.group;
            const evaluations = group.GroupEvaluation;
            const evaluationInfo = extractEvaluationInfo(evaluations);
            const courseName = group.course.name;
            const courseCode = group.course.code;
            const academicPeriod = group.course.academicPeriod;
            const professorNames = group.course.professorCourses.map((professorCourse) => professorCourse.user.name);
            const groupName = group.name;
            const groupCode = group.code;
            const groupId = group.id;
            return {
                evaluationInfo,
                courseName,
                courseCode,
                academicPeriod,
                professorNames,
                groupId,
                groupName,
                groupCode,
            };
        });
        return extractedData;
    }
    async groups(user) {
        const email = 'student1@example.com';
        const groups = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
            select: {
                id: true,
                studentGroups: {
                    select: {
                        group: {
                            select: {
                                code: true,
                                name: true,
                                course: {
                                    select: {
                                        code: true,
                                        name: true,
                                        academicPeriod: true,
                                        professorCourses: {
                                            select: {
                                                user: {
                                                    select: {
                                                        name: true,
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                GroupEvaluation: {
                                    select: {
                                        evaluation: {
                                            select: {
                                                code: true,
                                                name: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!groups) {
            return [];
        }
        const extractedData = groups.studentGroups.map((groupData) => {
            const group = groupData.group;
            const evaluations = group.GroupEvaluation;
            const groupName = group.name;
            const groupCode = group.code;
            const courseName = group.course.name;
            const courseCode = group.course.code;
            const academicPeriod = group.course.academicPeriod;
            const numEvaluations = evaluations.length;
            return {
                groupName,
                groupCode,
                courseName,
                courseCode,
                academicPeriod,
                numEvaluations,
            };
        });
        return extractedData;
    }
    async evaluationGroup(user, evaluationCode, groupCode) {
        const email = 'student1@example.com';
        where: {
            code: groupCode;
        }
        const evaluation = await this.prisma.evaluation.findUnique({
            where: {
                code: evaluationCode,
            },
            select: {
                id: true,
                code: true,
                name: true,
                groupEvaluations: {
                    where: {
                        group: {
                            code: groupCode,
                        },
                    },
                    select: {
                        groupId: true,
                        group: {
                            select: {
                                studentGroups: {
                                    select: {
                                        userId: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!evaluation) {
            return [];
        }
        const evaluationInfo = {
            evaluationId: evaluation.id,
            groupId: evaluation.groupEvaluations[0].groupId,
            students: evaluation.groupEvaluations[0].group.studentGroups.map((studentGroup) => ({
                userId: studentGroup.userId,
            })),
        };
        const userId = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
            select: {
                id: true,
            },
        });
        evaluationInfo.students = evaluationInfo.students.filter((student) => student.userId !== userId.id);
        return evaluationInfo;
    }
    async criteria(evaluationCode) {
        const email = 'student1@example.com';
        const criteria = await this.prisma.evaluation.findUnique({
            where: {
                code: evaluationCode,
            },
            select: {
                id: true,
                code: true,
                name: true,
                criterias: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                    },
                },
            },
        });
        if (!criteria) {
            return [];
        }
        return criteria.criterias;
    }
    async evaluate(studentId, criteriaId, evaluatedStudentId, value) {
        const valueNumber = Number(value);
        const stundentIdNumber = Number(studentId);
        const criteriaIdNumber = Number(criteriaId);
        const evaluatedStudentIdNumber = Number(evaluatedStudentId);
        if (isNaN(valueNumber)) {
            throw new common_1.HttpException('Value is not a number', common_1.HttpStatus.BAD_REQUEST);
        }
        if (isNaN(stundentIdNumber)) {
            throw new common_1.HttpException('Student id is not a number', common_1.HttpStatus.BAD_REQUEST);
        }
        if (isNaN(criteriaIdNumber)) {
            throw new common_1.HttpException('Criteria id is not a number', common_1.HttpStatus.BAD_REQUEST);
        }
        if (isNaN(evaluatedStudentIdNumber)) {
            throw new common_1.HttpException('Evaluated student id is not a number', common_1.HttpStatus.BAD_REQUEST);
        }
        const stundetRole = await this.prisma.user.findUnique({
            where: {
                id: stundentIdNumber,
            },
            select: {
                role: true,
            },
        });
        const evaluatedStudentRole = await this.prisma.user.findUnique({
            where: {
                id: evaluatedStudentIdNumber,
            },
            select: {
                role: true,
            },
        });
        if (stundetRole.role[0] !== client_1.UserRole.STUDENT) {
            throw new common_1.HttpException('User is not a student', common_1.HttpStatus.BAD_REQUEST);
        }
        if (evaluatedStudentRole.role[0] !== client_1.UserRole.STUDENT) {
            throw new common_1.HttpException('Evaluated user is not a student', common_1.HttpStatus.BAD_REQUEST);
        }
        const evaluate = await this.prisma.criteriaStudentResult.create({
            data: {
                value: valueNumber,
                criteriaId: criteriaIdNumber,
                studentId: stundentIdNumber,
                evaluatedStudentId: evaluatedStudentIdNumber,
            },
        });
        return evaluate;
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        prisma_service_1.PrismaService])
], StudentsService);
//# sourceMappingURL=students.service.js.map