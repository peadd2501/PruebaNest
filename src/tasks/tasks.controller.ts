import { Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): string {
    return 'Get task';
  }

  @Post()
  createTask(): string {
    return 'Creating task';
  }
}
