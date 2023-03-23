import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private PrismaService: PrismaService) {}

  async fetchAllTodos(): Promise<User[]> {
    return this.PrismaService.user.findMany();
  }
}
