"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonErrorInterceptor = void 0;
const common_1 = require("@nestjs/common");
let JsonErrorInterceptor = class JsonErrorInterceptor {
    catch(exception, host) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        response.status(status).json({
            statusCode: status,
            message: exception.message,
            error: exception.name,
        });
    }
};
exports.JsonErrorInterceptor = JsonErrorInterceptor;
exports.JsonErrorInterceptor = JsonErrorInterceptor = __decorate([
    (0, common_1.Catch)()
], JsonErrorInterceptor);
//# sourceMappingURL=json-error.interceptor.js.map