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
exports.ProfessorsService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const prisma_service_1 = require("../prisma.service");
let ProfessorsService = class ProfessorsService {
    constructor(usersService, prisma) {
        this.usersService = usersService;
        this.prisma = prisma;
    }
    async profile(user) {
        const userInfo = await this.usersService.findOneByEmail('professor1@example.com');
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
    async courses(user) {
        const email = 'professor1@example.com';
        const professorCourses = await this.prisma.user.findUnique({
            where: { email },
            select: {
                professorCourses: {
                    select: {
                        course: {},
                    },
                },
            },
        });
        if (professorCourses === null) {
            throw new common_1.NotFoundException({ message: 'User not found' });
        }
        return professorCourses;
    }
    async groups(user) {
        const email = 'professor1@example.com';
        const professorGroups = await this.prisma.user.findUnique({
            where: { email },
            select: {
                proffesorEvaluations: {
                    select: {
                        groupEvaluations: {
                            select: {
                                group: {},
                            },
                        },
                    },
                },
            },
        });
        if (professorGroups === null) {
            throw new common_1.NotFoundException({ message: 'User not found' });
        }
        const groups = professorGroups.proffesorEvaluations.flatMap((professorEvaluation) => professorEvaluation.groupEvaluations.map((groupEvaluation) => groupEvaluation.group));
        return groups;
    }
    async groupStudents(groupCode) {
        const groupStudents = await this.prisma.group.findUnique({
            where: { code: groupCode },
            select: {
                studentGroups: {
                    select: {
                        user: {},
                    },
                },
            },
        });
        if (groupStudents === null) {
            throw new common_1.NotFoundException({ message: 'Group not found' });
        }
        const students = groupStudents.studentGroups.map((studentGroup) => ({
            id: studentGroup.user.id,
            email: studentGroup.user.email,
            name: studentGroup.user.name,
            code: studentGroup.user.code,
            createdAt: studentGroup.user.createdAt,
            updatedAt: studentGroup.user.updatedAt,
        }));
        return students;
    }
    async evaluations(user) {
        const email = 'professor1@example.com';
        const professorEvaluations = await this.prisma.user.findUnique({
            where: { email },
            select: {
                proffesorEvaluations: {},
            },
        });
        if (professorEvaluations === null) {
            throw new common_1.NotFoundException({ message: 'User not found' });
        }
        return professorEvaluations;
    }
    async criterias(evaluationCode) {
        const evaluationCriterias = await this.prisma.evaluation.findUnique({
            where: { code: evaluationCode },
            select: {
                criterias: {},
            },
        });
        if (evaluationCriterias === null) {
            throw new common_1.NotFoundException({ message: 'Evaluation not found' });
        }
        return evaluationCriterias;
    }
    async evaluationGroupStudent(groupCode, studentId) {
        const studentIdNumber = Number(studentId);
        if (isNaN(studentIdNumber)) {
            throw new common_1.NotFoundException({ message: 'Student id not found' });
        }
        const groupEvaluation = await this.prisma.groupEvaluation.findMany({
            where: {
                group: { code: groupCode },
            },
            select: {
                evaluation: {},
                group: {
                    select: {
                        studentGroups: {
                            where: {
                                user: {
                                    id: studentIdNumber,
                                },
                            },
                            select: {
                                user: {},
                            },
                        },
                    },
                },
            },
        });
        if (groupEvaluation === null) {
            throw new common_1.NotFoundException({ message: 'Group evaluation not found' });
        }
        const extractedData = groupEvaluation.map((item) => ({
            id: item.evaluation.id,
            code: item.evaluation.code,
            name: item.evaluation.name,
        }));
        return extractedData;
    }
    async results(evaluationCode, groupCode, studentId) {
        const email = 'professor1@example.com';
        const studentIdNumber = Number(studentId);
        if (isNaN(studentIdNumber)) {
            throw new common_1.NotFoundException({ message: 'Student id not found' });
        }
        const resultsData = await this.prisma.criteriaStudentResult.findMany({
            where: {
                studentId: studentIdNumber,
                criteria: {
                    evaluation: {
                        code: evaluationCode,
                    },
                },
                student: {
                    studentGroups: {
                        some: {
                            group: {
                                code: groupCode,
                            },
                        },
                    },
                },
            },
            select: {
                id: true,
                value: true,
                evaluatedStudent: {
                    select: {
                        id: true,
                        email: true,
                        name: true,
                    },
                },
                criteria: {
                    select: {
                        name: true,
                        description: true,
                        evaluation: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
            },
        });
        if (resultsData === null) {
            throw new common_1.NotFoundException({ message: 'Results not found' });
        }
        return resultsData;
    }
    async addStudentCourse(studentId, courseId) {
        const addStudentToCourse = await this.prisma.studentCourse.create({
            data: {
                courseId: Number(courseId),
                userId: Number(studentId),
            },
        });
        if (!addStudentToCourse) {
            throw new common_1.NotFoundException({ message: 'Student not added to course' });
        }
        return {
            message: 'Student added to course successfully',
        };
    }
    async removeStudentCourse(studentId, courseId) {
        const removeStudentFromCourse = await this.prisma.studentCourse.deleteMany({
            where: {
                courseId: Number(courseId),
                userId: Number(studentId),
            },
        });
        if (!removeStudentFromCourse) {
            throw new common_1.NotFoundException({
                message: 'Student not removed from course',
            });
        }
        return {
            message: 'Student removed from course successfully',
        };
    }
    async createGroup(name, code, course) {
        const createGroup = await this.prisma.group.create({
            data: {
                code,
                name,
                course: {
                    connect: {
                        code: course,
                    },
                },
            },
        });
        if (!createGroup) {
            throw new common_1.NotFoundException({ message: 'Group not created' });
        }
        return {
            message: 'Group created successfully',
        };
    }
    async updateGroup(name, code) {
        const updateGroup = await this.prisma.group.update({
            where: {
                code,
            },
            data: {
                name,
            },
        });
        if (!updateGroup) {
            throw new common_1.NotFoundException({ message: 'Group not updated' });
        }
        return {
            message: 'Group updated successfully',
        };
    }
    async deleteGroup(groupCode) {
        const deleteGroup = await this.prisma.group.delete({
            where: {
                code: groupCode,
            },
        });
        if (!deleteGroup) {
            throw new common_1.NotFoundException({ message: 'Group not deleted' });
        }
        return {
            message: 'Group deleted successfully',
        };
    }
    async addStudentGroup(studentId, groupCode) {
        const addStudentToGroup = await this.prisma.studentGroup.create({
            data: {
                group: {
                    connect: {
                        code: groupCode,
                    },
                },
                user: {
                    connect: {
                        id: Number(studentId),
                    },
                },
            },
        });
        if (!addStudentToGroup) {
            throw new common_1.NotFoundException({ message: 'Student not added to group' });
        }
        return {
            message: 'Student added to group successfully',
        };
    }
    async removeStudentGroup(studentId, groupCode) {
        const groupId = await this.prisma.group.findUnique({
            where: {
                code: groupCode,
            },
            select: {
                id: true,
            },
        });
        if (!groupId) {
            throw new common_1.NotFoundException({ message: 'Group not found' });
        }
        const removeStudentFromGroup = await this.prisma.studentGroup.deleteMany({
            where: {
                groupId: {
                    equals: groupId.id,
                },
                userId: Number(studentId),
            },
        });
        if (!removeStudentFromGroup) {
            throw new common_1.NotFoundException({ message: 'Student not removed from group' });
        }
        return {
            message: 'Student removed from group successfully',
        };
    }
    async createEvaluation(code, name, description, professorId) {
        const createEvaluation = await this.prisma.evaluation.create({
            data: {
                code,
                name,
                description,
                professor: {
                    connect: {
                        id: Number(professorId),
                    },
                },
            },
        });
        if (!createEvaluation) {
            throw new common_1.NotFoundException({ message: 'Evaluation not created' });
        }
        return {
            message: 'Evaluation created successfully',
        };
    }
    async updateEvaluation(code, name, description) {
        const updateEvaluation = await this.prisma.evaluation.update({
            where: {
                code,
            },
            data: {
                name,
                description,
            },
        });
        if (!updateEvaluation) {
            throw new common_1.NotFoundException({ message: 'Evaluation not updated' });
        }
        return {
            message: 'Evaluation updated successfully',
        };
    }
    async deleteEvaluation(evaluationCode) {
        const deleteEvaluation = await this.prisma.evaluation.delete({
            where: {
                code: evaluationCode,
            },
        });
        if (!deleteEvaluation) {
            throw new common_1.NotFoundException({ message: 'Evaluation not deleted' });
        }
        return {
            message: 'Evaluation deleted successfully',
        };
    }
    async createCriteria(code, name, description, evaluationCode, weight) {
        const evaluation = await this.prisma.evaluation.findUnique({
            where: {
                code: evaluationCode,
            },
        });
        if (!evaluation) {
            throw new common_1.NotFoundException({ message: 'Evaluation not found' });
        }
        const createCriteria = await this.prisma.criteria.create({
            data: {
                code,
                name,
                description,
                weight,
                evaluation: {
                    connect: {
                        code: evaluationCode,
                    },
                },
            },
        });
        if (!createCriteria) {
            throw new common_1.NotFoundException({ message: 'Criteria not created' });
        }
        return {
            message: 'Criteria created successfully',
        };
    }
    async updateCriteria(code, name, description, weight) {
        const updateCriteria = await this.prisma.criteria.update({
            where: {
                code,
            },
            data: {
                name,
                description,
                weight,
            },
        });
        if (!updateCriteria) {
            throw new common_1.NotFoundException({ message: 'Criteria not updated' });
        }
        return {
            message: 'Criteria updated successfully',
        };
    }
    async deleteCriteria(criteriaCode) {
        const deleteCriteria = await this.prisma.criteria.delete({
            where: {
                code: criteriaCode,
            },
        });
        if (!deleteCriteria) {
            throw new common_1.NotFoundException({ message: 'Criteria not deleted' });
        }
        return {
            message: 'Criteria deleted successfully',
        };
    }
};
exports.ProfessorsService = ProfessorsService;
exports.ProfessorsService = ProfessorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        prisma_service_1.PrismaService])
], ProfessorsService);
//# sourceMappingURL=professors.service.js.map