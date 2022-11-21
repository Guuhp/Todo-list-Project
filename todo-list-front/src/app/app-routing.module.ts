import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragAndDropComponent } from './components/dragAndDrop/dragAndDrop.component';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';

const routes: Routes = [
  {path:"",component:TodoTaskComponent},
  {path:"drag",component:DragAndDropComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
