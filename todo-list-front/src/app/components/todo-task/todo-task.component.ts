import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = [...this.taskService.getTasks()];
  @ViewChild(MatTable)
  table!: MatTable<any>;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  deleteTask(id: number): void {
    console.log(id)
    this.taskService.remove(id).subscribe((task)=>{
      this.dataSource = task
      console.log(task)
    }
    );
    this.table.renderRows()
  }
}
