import { Body, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.save(createTaskDto);
  }

  findAll() {
    return this.taskRepository.find();
  }

  findOne(id: string) {
    return this.taskRepository.findOneBy({id});
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const task = await this.findOne(id)
    task.name = updateTaskDto.name;  
    task.status=updateTaskDto.status;
    return this.taskRepository.save(task);
  }

  remove(id: string) {

    return this.taskRepository.delete(id);
  }
}
