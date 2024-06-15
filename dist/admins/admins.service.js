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
exports.AdminsService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const prisma_service_1 = require("../prisma.service");
let AdminsService = class AdminsService {
    constructor(usersService, prisma) {
        this.usersService = usersService;
        this.prisma = prisma;
    }
    async findAllCourses() {
        return await this.prisma.course.findMany();
    }
    async findOneCourse(id) {
        return await this.prisma.course.findUnique({
            where: { id },
        });
    }
    async createCourse(data) {
        return await this.prisma.course.create({
            data,
        });
    }
    async updateCourse(id, data) {
        return await this.prisma.course.update({
            where: { id },
            data,
        });
    }
    async removeCourse(id) {
        return await this.prisma.course.delete({
            where: { id },
        });
    }
    async findCoursesUser(id) {
        const courses = await this.prisma.professorCourse.findMany({
            where: {
                userId: id
            },
            include: {
                course: true
            },
        });
        if (!courses) {
            return [];
        }
        const courseInfo = courses.map(item => ({
            id: item.course.id,
            name: item.course.name
        }));
        return courseInfo;
    }
    async findAllEvaluations() {
        return await this.prisma.evaluation.findMany();
    }
    async findOneEvaluation(id) {
        return await this.prisma.evaluation.findUnique({
            where: { id },
        });
    }
    async createEvaluation(data) {
        return await this.prisma.evaluation.create({
            data,
        });
    }
    async updateEvaluation(id, data) {
        return await this.prisma.evaluation.update({
            where: { id },
            data,
        });
    }
    async removeEvaluation(id) {
        return await this.prisma.evaluation.delete({
            where: { id },
        });
    }
    async findAllCriteria() {
        return await this.prisma.criteria.findMany();
    }
    async findOneCriteria(id) {
        return await this.prisma.criteria.findUnique({
            where: { id },
        });
    }
    async createCriteria(data) {
        return await this.prisma.criteria.create({
            data,
        });
    }
    async updateCriteria(id, data) {
        return await this.prisma.criteria.update({
            where: { id },
            data,
        });
    }
    async removeCriteria(id) {
        return await this.prisma.criteria.delete({
            where: { id },
        });
    }
    async findAllGroups() {
        return await this.prisma.group.findMany();
    }
    async findOneGroup(id) {
        return await this.prisma.group.findUnique({
            where: { id },
        });
    }
    async createGroup(data) {
        console.log(data);
        const { name, code, course } = data;
        const courseIdNumber = Number(course);
        console.log(courseIdNumber);
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
        });
    }
    async updateGroup(id, data) {
        return await this.prisma.group.update({
            where: { id },
            data,
        });
    }
    async removeGroup(id) {
        return await this.prisma.group.delete({
            where: { id },
        });
    }
};
exports.AdminsService = AdminsService;
exports.AdminsService = AdminsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        prisma_service_1.PrismaService])
], AdminsService);
//# sourceMappingURL=admins.service.js.map