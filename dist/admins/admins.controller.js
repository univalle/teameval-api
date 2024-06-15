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
exports.AdminsController = void 0;
const common_1 = require("@nestjs/common");
const admins_service_1 = require("./admins.service");
const users_service_1 = require("../users/users.service");
let AdminsController = class AdminsController {
    constructor(adminsService, usersService) {
        this.adminsService = adminsService;
        this.usersService = usersService;
    }
    findAll() {
        return this.usersService.findAll();
    }
    findOne(id) {
        return this.usersService.findOne(+id);
    }
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    update(id, updateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }
    remove(id) {
        console.log('id', id);
        return this.usersService.remove(+id);
    }
    findAllCourses() {
        return this.adminsService.findAllCourses();
    }
    findOneCourse(id) {
        return this.adminsService.findOneCourse(+id);
    }
    createCourse(createCourseDto) {
        return this.adminsService.createCourse(createCourseDto);
    }
    updateCourse(id, updateCourseDto) {
        return this.adminsService.updateCourse(+id, updateCourseDto);
    }
    removeCourse(id) {
        return this.adminsService.removeCourse(+id);
    }
    findCoursesUser(id) {
        return this.adminsService.findCoursesUser(+id);
    }
    findAllEvaluations() {
        return this.adminsService.findAllEvaluations();
    }
    findOneEvaluation(id) {
        return this.adminsService.findOneEvaluation(+id);
    }
    createEvaluation(createEvaluationDto) {
        return this.adminsService.createEvaluation(createEvaluationDto);
    }
    updateEvaluation(id, updateEvaluationDto) {
        return this.adminsService.updateEvaluation(+id, updateEvaluationDto);
    }
    removeEvaluation(id) {
        return this.adminsService.removeEvaluation(+id);
    }
    findAllCriteria() {
        return this.adminsService.findAllCriteria();
    }
    findOneCriteria(id) {
        return this.adminsService.findOneCriteria(+id);
    }
    createCriteria(createCriteriaDto) {
        return this.adminsService.createCriteria(createCriteriaDto);
    }
    updateCriteria(id, updateCriteriaDto) {
        return this.adminsService.updateCriteria(+id, updateCriteriaDto);
    }
    removeCriteria(id) {
        return this.adminsService.removeCriteria(+id);
    }
    findAllGroups() {
        return this.adminsService.findAllGroups();
    }
    findOneGroup(id) {
        return this.adminsService.findOneGroup(+id);
    }
    createGroup(createGroupDto) {
        return this.adminsService.createGroup(createGroupDto);
    }
    updateGroup(id, updateGroupDto) {
        return this.adminsService.updateGroup(+id, updateGroupDto);
    }
    removeGroup(id) {
        return this.adminsService.removeGroup(+id);
    }
};
exports.AdminsController = AdminsController;
__decorate([
    (0, common_1.Get)('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('users/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('users'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('users/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('users/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('courses'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "findAllCourses", null);
__decorate([
    (0, common_1.Get)('courses/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "findOneCourse", null);
__decorate([
    (0, common_1.Post)('courses'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "createCourse", null);
__decorate([
    (0, common_1.Patch)('courses/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "updateCourse", null);
__decorate([
    (0, common_1.Delete)('courses/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "removeCourse", null);
__decorate([
    (0, common_1.Get)('courses-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "findCoursesUser", null);
__decorate([
    (0, common_1.Get)('evaluations'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "findAllEvaluations", null);
__decorate([
    (0, common_1.Get)('evaluations/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "findOneEvaluation", null);
__decorate([
    (0, common_1.Post)('evaluations'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "createEvaluation", null);
__decorate([
    (0, common_1.Patch)('evaluations/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "updateEvaluation", null);
__decorate([
    (0, common_1.Delete)('evaluations/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "removeEvaluation", null);
__decorate([
    (0, common_1.Get)('criteria'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "findAllCriteria", null);
__decorate([
    (0, common_1.Get)('criteria/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "findOneCriteria", null);
__decorate([
    (0, common_1.Post)('criteria'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "createCriteria", null);
__decorate([
    (0, common_1.Patch)('criteria/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "updateCriteria", null);
__decorate([
    (0, common_1.Delete)('criteria/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "removeCriteria", null);
__decorate([
    (0, common_1.Get)('groups'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "findAllGroups", null);
__decorate([
    (0, common_1.Get)('groups/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "findOneGroup", null);
__decorate([
    (0, common_1.Post)('groups'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "createGroup", null);
__decorate([
    (0, common_1.Patch)('groups/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "updateGroup", null);
__decorate([
    (0, common_1.Delete)('groups/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "removeGroup", null);
exports.AdminsController = AdminsController = __decorate([
    (0, common_1.Controller)('admins'),
    __metadata("design:paramtypes", [admins_service_1.AdminsService,
        users_service_1.UsersService])
], AdminsController);
//# sourceMappingURL=admins.controller.js.map