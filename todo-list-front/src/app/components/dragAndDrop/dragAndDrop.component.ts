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
  constructor(private taskService: TaskService, public dialog: MatDialog) { }

  ngOnInit() {
    this.taskService.getTask().subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.taskService.getTask().subscribe((data: Task[]) => {
      this.todo = data.filter((p) => p.status === 'todo');
      this.doing = data.filter((p) => p.status === 'doing');
      this.done = data.filter((p) => p.status === 'done');
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
      const t = event.item.data
      t.status = event.container.element.nativeElement.classList[1]
      this.updates(t.id, t)
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
          this.taskService.update(result.id, result).subscribe((item: Task) => {
            this.todo[result.id - 1] = item;
            console.log(this.todo[result.id - 1]);
            this.loadData();
          });
        } else {
          this.taskService.save(result).subscribe({
            next: (user) => {
              this.todo.push(user);
              this.loadData();
            },
          });
        }
      }
    });
  }

  editTask(task: Task): void {
    this.openDialog(task);
  }

  removes(taskId: string): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.todo = this.todo.filter((id) => id.id !== taskId);
    });
  }

  remove(taskId: Task): void {
    this.taskService.deleteTask(taskId.id as string).subscribe(() => {
      this.todo = this.todo.filter((id) => id.id !== taskId);
      this.loadData();
    });
  }

  updates(id: string, task: Task) {
    this.taskService.updateStatus(id, task).subscribe((item: Task) => {
      if (task.status === 'todo') {
        this.todo[id as any - 1] = item;
        console.log(this.todo[id as any - 1]);
        this.loadData();
      }
      if(task.status === 'doing'){
        this.doing[id as any - 1] = item;
        console.log(this.doing[id as any - 1]);
        this.loadData();
      }
      if(task.status === 'done'){
        this.done[id as any - 1] = item;
        console.log(this.done[id as any - 1]);
        this.loadData();
      }
    });
  }

}
