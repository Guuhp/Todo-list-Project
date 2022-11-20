import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  urlAPI = 'http://localhost:3000/task/'

  constructor(private http: HttpClient) { }

  getTask():Observable<Task[]>{
    return this.http.get<Task[]>(this.urlAPI)
  }

  createTask(task:Task):Observable<Task[]>{
    return this.http.post<Task[]>(this.urlAPI,task)
  }

  

  // create(task: Task): Observable<Task[]> {    
  //   this.TASKS.push(task);
  //   return of(this.TASKS);
  // }

  // delete(idTask: number): Observable<Task[]> {
  //   // this.TASKS = this.TASKS.filter((t) => t.id !== idTask);
  //   console.log(this.TASKS);
  //   return of(this.TASKS);
  // }

  // maxId(): number {
  //   const ids = this.TASKS.map((task) => task.id) as number[];
  //   return Math.max(...ids);
  // }
}
