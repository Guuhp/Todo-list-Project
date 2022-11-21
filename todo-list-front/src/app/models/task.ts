import { TaskStatus } from './task-status-enum';

export class Task {
  id?: string;
  name?: string;
  status?:TaskStatus;
}
