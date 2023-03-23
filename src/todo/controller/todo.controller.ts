import { Controller, Get } from '@nestjs/common';
import { TodoService } from './../service/todo.service';
import { User } from '@prisma/client';

@Controller('api/v1/users')
export class TodoController {
  constructor(public readonly TodoService: TodoService) {}

  @Get()
  async fetchAllTodos(): Promise<User[]> {
    return this.TodoService.fetchAllTodos();
  }
}
