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
  name?: string;
  displayedColumns: string[] = ['id', 'name', 'action'];
  @ViewChild(MatTable)
  table!: MatTable<Task>;
  dataSource!: Task[];
  
  user!: Task;
  
  
  constructor(private taskService: TaskService, public dialog: MatDialog) {
    this.taskService.getTask().subscribe((data: Task[]) => {
      console.log(data);
      this.dataSource = data;
    });
  }
  
  ngOnInit(): void {
    this.user={
      name:''
    }
  }
  


  openDialog(taskz: Task | null): void {
    const dialogRef = this.dialog.open(TodoTaskDialogComponent, {
      width: '250px',
      data: taskz ===null?{
        id:'',
        name:''
      }:{
        id:taskz.id,
        name:taskz.name
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        console.log(result)

        this.taskService.createTask(result)
        .subscribe((data: Task) => {
          this.dataSource.push(data);
          this.table.renderRows();
        });
      }
    });
  }

  remove(taskId:string):void {
    this.taskService.deleteTask(taskId).subscribe((result)=>{
      this.dataSource=this.dataSource.filter((id)=>id.id!==taskId)
      this.table.renderRows()
    })
  }
}
