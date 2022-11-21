import { MatDialog } from '@angular/material/dialog';
import { TaskService } from 'src/app/service/task.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TodoTaskDialogComponent } from '../todo-task-dialog/todo-task-dialog.component';

@Component({
  selector: 'app-dragAndDrop',
  templateUrl: './dragAndDrop.component.html',
  styleUrls: ['./dragAndDrop.component.css'],
})
export class DragAndDropComponent implements OnInit {
  todo: Task[] = [];

  doing: Task[] = [];

  done: Task[] = [];
  constructor(private taskService: TaskService,public dialog: MatDialog) {}

  ngOnInit() {
    this.taskService.getTask().subscribe((data: Task[]) => {
      this.todo = data;
    });
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  openDialog(taskz: Task | null): void {
    const dialogRef = this.dialog.open(TodoTaskDialogComponent, {
      width: '250px',
      data:
        taskz === null
          ? {
              name: '',
              status: undefined,
            }
          : {
              id: taskz.id,
              name: taskz.name,
              status: taskz.status,
            },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        //edit
        if (this.todo.map((p) => p.id).includes(result.id)) {
          this.taskService.update(result.id,result).subscribe((item: Task) => {
            this.todo[result.id - 1] = item;
            console.log(this.todo[result.id -1]);
          });
        } else {
          this.taskService.save(result).subscribe({
            next: (user) => {
              this.todo.push(user);
            },
          });
        }
      }
    });
  }

  editTask(task: Task): void {
    this.openDialog(task);
  }

  remove(taskId: string): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.todo = this.todo.filter((id) => id.id !== taskId);
    });
  }
}
