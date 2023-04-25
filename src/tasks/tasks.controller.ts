import { Controller, Delete, Get, Post, Put, Body, Param, Req, Res } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto'
import { TasksService } from './tasks.service'
import { Task } from './interfaces/task'
@Controller('tasks')
export class TasksController {
  
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }
  
  @Get(':taskId')
  getTask(@Param('taskId') taskId: string){
    return this.taskService.getTask(parseInt(taskId));
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
