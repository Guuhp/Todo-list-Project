import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';

const routes: Routes = [
  {path:"",component:TodoTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
