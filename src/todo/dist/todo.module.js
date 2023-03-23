"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TodoModule = void 0;
var prisma_service_1 = require("../prisma.service");
var common_1 = require("@nestjs/common");
var todo_controller_1 = require("./controller/todo.controller");
var todo_service_1 = require("./service/todo.service");
var TodoModule = /** @class */ (function () {
    function TodoModule() {
    }
    TodoModule = __decorate([
        common_1.Module({
            controllers: [todo_controller_1.TodoController],
            providers: [todo_service_1.TodoService, prisma_service_1.PrismaService]
        })
    ], TodoModule);
    return TodoModule;
}());
exports.TodoModule = TodoModule;
