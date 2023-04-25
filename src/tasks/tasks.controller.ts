import { Controller, Delete, Get, Post, Put, Body, Param, Req, Res } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto'
import { Request, Response } from 'express'
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

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log(task)
    console.log(id)
    return 'Updating task'
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log(id);
    return `Deleting a task: ${id}`
  }
}
