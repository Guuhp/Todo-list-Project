import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-todo-task-dialog',
  templateUrl: './todo-task-dialog.component.html',
  styleUrls: ['./todo-task-dialog.component.css'],
})
export class TodoTaskDialogComponent implements OnInit {
  element!: Task;
  isChange!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Task,
    public dialogRef: MatDialogRef<TodoTaskDialogComponent>
  ) {}

  ngOnInit(): void {
    if (this.data.id != null) {
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
