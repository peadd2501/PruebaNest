import { Controller, Delete, Get, Post, Put, Body } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto'
@Controller('tasks')
export class TasksController {
  
  @Get()
  getTasks(): Object {
    return {"hello": "World", "Test": 1};
  }
  
  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task.title, task.description, task.done);
    return 'Creating task';
  }

  @Put()
  updateTask(): string {
    return 'Updating task'
  }

  @Delete()
  deleteTask(): string {
    return 'Deleting a task'
  }
}
