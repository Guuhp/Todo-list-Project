import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Task } from 'src/app/models/task';
import { TaskStatus } from 'src/app/models/task-status-enum';
import { TaskService } from 'src/app/service/task.service';
import { TodoTaskDialogComponent } from '../todo-task-dialog/todo-task-dialog.component';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent implements OnInit {
  name?: string;
  displayedColumns: string[] = ['id', 'name', 'status', 'action'];
  @ViewChild(MatTable)
  table!: MatTable<Task>;
  dataSource!: Task[];
  task!: Task;

  constructor(private taskService: TaskService, public dialog: MatDialog) {
    this.taskService.getTask().subscribe((data: Task[]) => {
      this.dataSource = data;
    });
  }

  ngOnInit(): void {
    this.task = {
      name: '',
      status: undefined,
    };
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
              name: taskz.name,
              status: taskz.status,
            },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        console.log(result);
        this.taskService.save(result).subscribe({
          next: (user) => {
            this.dataSource.push(user)
            this.table.renderRows();
          },
        });
      }
    });
  }

  remove(taskId: string): void {
    this.taskService.deleteTask(taskId).subscribe((result) => {
      this.dataSource = this.dataSource.filter((id) => id.id !== taskId);
      this.table.renderRows();
    });
  }
}
