import { TaskStatus } from '../entities/task-status-enum';

export class CreateTaskDto {
  id: string;
  name: string;
  status: TaskStatus;
  
}
