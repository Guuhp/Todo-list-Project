import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('create')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get('')
  findAll() {
    return this.taskService.findAll();
  }

  @Get('findone/:id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
