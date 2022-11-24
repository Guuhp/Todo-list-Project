import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  urlAPI = 'http://localhost:3000/task/';

  constructor(private http: HttpClient) {}

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlAPI);
  }

  save(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.urlAPI}create`, task, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  
  deleteTask(idTask: string): Observable<any> {
    console.log(idTask);
    return this.http.delete<any>(`${this.urlAPI}delete/${idTask}`);
  }


  update(id:string,task:Task):Observable<Task>{
    return this.http.put<Task>(`${this.urlAPI}update/${id}`,task)
  }

  updateStatus(id:string,task:Task):Observable<Task>{
    return this.http.put<Task>(`${this.urlAPI}update/${id}`,task)

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
