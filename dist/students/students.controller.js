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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsController = void 0;
const common_1 = require("@nestjs/common");
const students_service_1 = require("./students.service");
const active_user_decorator_1 = require("../common/decorators/active-user.decorator");
let StudentsController = class StudentsController {
    constructor(studentsService) {
        this.studentsService = studentsService;
    }
    checkUser(user) {
    }
    profile(user) {
        this.checkUser(user);
        return this.studentsService.profile(user);
    }
    evaluations(user) {
        this.checkUser(user);
        return this.studentsService.evaluations(user);
    }
    groups(user) {
        this.checkUser(user);
        return this.studentsService.groups(user);
    }
    courses(user) {
        this.checkUser(user);
        return this.studentsService.groups(user);
    }
    evaluationGroup(user, evaluationCode, groupCode) {
        this.checkUser(user);
        return this.studentsService.evaluationGroup(user, evaluationCode, groupCode);
    }
    criterias(user, evaluationCode) {
        this.checkUser(user);
        return this.studentsService.criteria(evaluationCode);
    }
    evaluate(user, body) {
        this.checkUser(user);
        const { studentId, criteriaId, evaluatedStudentId, value } = body;
        if (!studentId) {
            throw new common_1.HttpException('Student id not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!criteriaId) {
            throw new common_1.HttpException('Criteria id not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!evaluatedStudentId) {
            throw new common_1.HttpException('Evaluated student id not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!value) {
            throw new common_1.HttpException('Value not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.studentsService.evaluate(studentId, criteriaId, evaluatedStudentId, value);
    }
};
exports.StudentsController = StudentsController;
__decorate([
    (0, common_1.Get)('profile'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "profile", null);
__decorate([
    (0, common_1.Get)('evaluations'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "evaluations", null);
__decorate([
    (0, common_1.Get)('groups'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "groups", null);
__decorate([
    (0, common_1.Get)('courses'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "courses", null);
__decorate([
    (0, common_1.Get)('evaluation-group/:evaluationCode/:groupCode'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Param)('evaluationCode')),
    __param(2, (0, common_1.Param)('groupCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "evaluationGroup", null);
__decorate([
    (0, common_1.Get)('criteria/:evaluationCode'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Param)('evaluationCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "criterias", null);
__decorate([
    (0, common_1.Post)('evaluate'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "evaluate", null);
exports.StudentsController = StudentsController = __decorate([
    (0, common_1.Controller)('students'),
    __metadata("design:paramtypes", [students_service_1.StudentsService])
], StudentsController);
//# sourceMappingURL=students.controller.js.map