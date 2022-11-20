import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-todo-task-dialog',
  templateUrl: './todo-task-dialog.component.html',
  styleUrls: ['./todo-task-dialog.component.css']
})
export class TodoTaskDialogComponent implements OnInit {
  element!:Task;
  constructor(
    public dialogRef: MatDialogRef<TodoTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
  ) {}

  ngOnInit(): void {
      
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
