import { Injectable, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { Task } from '../model/task';

@Injectable()
export class TaskService {
  TASK: Task[] = [
    {
      id: 1,
      name: 'tarefa escola',
    },
    {
      id: 2,
      name: 'tarefa escola',
    },
    {
      id: 3,
      name: 'tarefa escola',
    },
  ];

  getTasks(): Task[] {
    return this.TASK;
  }

  remove(taskId: number): Observable<Task[]> {
    this.TASK = this.TASK.filter((t) => t.id !== taskId);
    return of(this.TASK);
  }

  create(task: Task): Observable<Task[]> {
    this.TASK.push(task);
    return of(this.TASK);
  }
}
