import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Todo } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private PrismaService: PrismaService) {}

  async fetchAllTodos(): Promise<Todo[]> {
    return this.PrismaService.todo.findMany();
  }
}
