import { prisma } from '../db/prisma';
import { Prisma } from '../../generated/prisma';

export class TaskService {
  async getAllTasks() {
    return prisma.todo.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }

  async getTaskById(id: number) {
    return prisma.todo.findUnique({
      where: { id }
    });
  }

  async createTask(data: Prisma.TodoCreateInput) {
    return prisma.todo.create({
      data
    });
  }

  async updateTask(id: number, data: Prisma.TodoUpdateInput) {
    return prisma.todo.update({
      where: { id },
      data
    });
  }

  async deleteTask(id: number) {
    return prisma.todo.delete({
      where: { id }
    });
  }
}
