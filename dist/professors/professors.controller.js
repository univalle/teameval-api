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
exports.ProfessorsController = void 0;
const common_1 = require("@nestjs/common");
const professors_service_1 = require("./professors.service");
const active_user_decorator_1 = require("../common/decorators/active-user.decorator");
let ProfessorsController = class ProfessorsController {
    constructor(professorsService) {
        this.professorsService = professorsService;
    }
    checkUser(user) {
    }
    profile(user) {
        this.checkUser(user);
        return this.professorsService.profile(user);
    }
    courses(user) {
        this.checkUser(user);
        return this.professorsService.courses(user);
    }
    groups(user) {
        this.checkUser(user);
        return this.professorsService.groups(user);
    }
    groupStudents(user, groupCode) {
        this.checkUser(user);
        return this.professorsService.groupStudents(groupCode);
    }
    evaluations(user) {
        this.checkUser(user);
        return this.professorsService.evaluations(user);
    }
    criteria(user, evaluationCode) {
        this.checkUser(user);
        return this.professorsService.criterias(evaluationCode);
    }
    evaluationGroup(user, groupCode, studentId) {
        this.checkUser(user);
        return this.professorsService.evaluationGroupStudent(groupCode, studentId);
    }
    results(user, evaluationCode, groupCode, studentId) {
        this.checkUser(user);
        return this.professorsService.results(evaluationCode, groupCode, studentId);
    }
    addStudentCourse(user, body) {
        this.checkUser(user);
        const { studentId, courseId } = body;
        if (!studentId) {
            throw new common_1.HttpException('Student id not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!courseId) {
            throw new common_1.HttpException('Course id not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.professorsService.addStudentCourse(studentId, courseId);
    }
    removeStudentCourse(user, body) {
        this.checkUser(user);
        const { studentId, courseId } = body;
        if (!studentId) {
            throw new common_1.HttpException('Student id not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!courseId) {
            throw new common_1.HttpException('Course id not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.professorsService.removeStudentCourse(studentId, courseId);
    }
    createGroup(user, body) {
        this.checkUser(user);
        const { name, code, course } = body;
        if (!name) {
            throw new common_1.HttpException('Group name not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!code) {
            throw new common_1.HttpException('Group code not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!course) {
            throw new common_1.HttpException('Course not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.professorsService.createGroup(name, code, course);
    }
    updateGroup(user, body) {
        this.checkUser(user);
        const { name, code } = body;
        if (!name) {
            throw new common_1.HttpException('Group name not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!code) {
            throw new common_1.HttpException('Group code not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.professorsService.updateGroup(name, code);
    }
    deleteGroup(user, groupCode) {
        this.checkUser(user);
        return this.professorsService.deleteGroup(groupCode);
    }
    addStudentGroup(user, body) {
        this.checkUser(user);
        const { studentId, groupCode } = body;
        if (!studentId) {
            throw new common_1.HttpException('Student id not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!groupCode) {
            throw new common_1.HttpException('Group code not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.professorsService.addStudentGroup(studentId, groupCode);
    }
    removeStudentGroup(user, body) {
        this.checkUser(user);
        const { studentId, groupCode } = body;
        if (!studentId) {
            throw new common_1.HttpException('Student id not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!groupCode) {
            throw new common_1.HttpException('Group code not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.professorsService.removeStudentGroup(studentId, groupCode);
    }
    createEvaluation(user, body) {
        this.checkUser(user);
        const { code, name, description, professorId } = body;
        if (!code) {
            throw new common_1.HttpException('Evaluation code not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!name) {
            throw new common_1.HttpException('Evaluation name not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!description) {
            throw new common_1.HttpException('Evaluation description not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!professorId) {
            throw new common_1.HttpException('Professor id not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.professorsService.createEvaluation(code, name, description, professorId);
    }
    updateEvaluation(user, body) {
        this.checkUser(user);
        const { code, name, description } = body;
        if (!code) {
            throw new common_1.HttpException('Evaluation code not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!name) {
            throw new common_1.HttpException('Evaluation name not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!description) {
            throw new common_1.HttpException('Evaluation description not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.professorsService.updateEvaluation(code, name, description);
    }
    deleteEvaluation(user, evaluationCode) {
        this.checkUser(user);
        return this.professorsService.deleteEvaluation(evaluationCode);
    }
    createCriteria(user, body) {
        this.checkUser(user);
        const { code, name, description, evaluationCode, weight } = body;
        if (!code) {
            throw new common_1.HttpException('Criteria code not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!name) {
            throw new common_1.HttpException('Criteria name not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!description) {
            throw new common_1.HttpException('Criteria description not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!evaluationCode) {
            throw new common_1.HttpException('Evaluation code not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!weight) {
            throw new common_1.HttpException('Criteria weight not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.professorsService.createCriteria(code, name, description, evaluationCode, weight);
    }
    updateCriteria(user, body) {
        this.checkUser(user);
        const { code, name, description, weight } = body;
        if (!code) {
            throw new common_1.HttpException('Criteria code not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!name) {
            throw new common_1.HttpException('Criteria name not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!description) {
            throw new common_1.HttpException('Criteria description not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!weight) {
            throw new common_1.HttpException('Criteria weight not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.professorsService.updateCriteria(code, name, description, weight);
    }
    deleteCriteria(user, criteriaCode) {
        this.checkUser(user);
        return this.professorsService.deleteCriteria(criteriaCode);
    }
};
exports.ProfessorsController = ProfessorsController;
__decorate([
    (0, common_1.Get)('profile'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "profile", null);
__decorate([
    (0, common_1.Get)('courses'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "courses", null);
__decorate([
    (0, common_1.Get)('groups'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "groups", null);
__decorate([
    (0, common_1.Get)('group-students/:groupCode'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Param)('groupCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "groupStudents", null);
__decorate([
    (0, common_1.Get)('evaluations'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "evaluations", null);
__decorate([
    (0, common_1.Get)('criteria/:evaluationCode'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Param)('evaluationCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "criteria", null);
__decorate([
    (0, common_1.Get)('evaluations/:groupCode/:studentId'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Param)('groupCode')),
    __param(2, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "evaluationGroup", null);
__decorate([
    (0, common_1.Get)('results/:groupCode/:evaluationCode/:studentId'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Param)('evaluationCode')),
    __param(2, (0, common_1.Param)('groupCode')),
    __param(3, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "results", null);
__decorate([
    (0, common_1.Post)('add-student-course'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "addStudentCourse", null);
__decorate([
    (0, common_1.Delete)('remove-student-course'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "removeStudentCourse", null);
__decorate([
    (0, common_1.Post)('create-group'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "createGroup", null);
__decorate([
    (0, common_1.Patch)('update-group'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "updateGroup", null);
__decorate([
    (0, common_1.Delete)('delete-group/:groupCode'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Param)('groupCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "deleteGroup", null);
__decorate([
    (0, common_1.Post)('add-student-group'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "addStudentGroup", null);
__decorate([
    (0, common_1.Delete)('remove-student-group'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "removeStudentGroup", null);
__decorate([
    (0, common_1.Post)('create-evaluation'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "createEvaluation", null);
__decorate([
    (0, common_1.Patch)('update-evaluation'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "updateEvaluation", null);
__decorate([
    (0, common_1.Delete)('delete-evaluation/:evaluationCode'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Param)('evaluationCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "deleteEvaluation", null);
__decorate([
    (0, common_1.Post)('create-criteria'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "createCriteria", null);
__decorate([
    (0, common_1.Patch)('update-criteria'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "updateCriteria", null);
__decorate([
    (0, common_1.Delete)('delete-criteria/:criteriaCode'),
    __param(0, (0, active_user_decorator_1.ActiveUser)()),
    __param(1, (0, common_1.Param)('criteriaCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProfessorsController.prototype, "deleteCriteria", null);
exports.ProfessorsController = ProfessorsController = __decorate([
    (0, common_1.Controller)('professors'),
    __metadata("design:paramtypes", [professors_service_1.ProfessorsService])
], ProfessorsController);
//# sourceMappingURL=professors.controller.js.map