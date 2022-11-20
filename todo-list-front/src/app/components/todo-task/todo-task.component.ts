import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/service/task.service';
import { TodoTaskDialogComponent } from '../todo-task-dialog/todo-task-dialog.component';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent implements OnInit {
  ngOnInit(): void {}
  id?: number;
  name?: string;
  displayedColumns: string[] = ['id', 'name', 'action'];
  @ViewChild(MatTable)
  table!: MatTable<Task>;
  dataSource!: Task[];

  constructor(private taskService: TaskService, public dialog: MatDialog) {
    this.taskService.getTask().subscribe((data: Task[]) => {
      console.log(data);
      this.dataSource = data;
    });
  }

  

  openDialog(taskz: Task | null): void {
    const dialogRef = this.dialog.open(TodoTaskDialogComponent, {
      width: '250px',
      data: { id: this.id, name: this.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.taskService.createTask(result).subscribe((tasks)=>{
          this.dataSource=tasks;
        })
        this.table.renderRows()
      }
    });
  }

  // remove(taskId:number):void {
  //   this.taskService.delete(taskId).subscribe((result)=>{
  //     this.dataSource=result;
  //     console.log(this.dataSource)
  //     this.table.renderRows()
  //   })
  // }
}
