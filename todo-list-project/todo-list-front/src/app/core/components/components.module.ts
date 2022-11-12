  import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTaskComponent } from './todoTask/todo-task.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

const COMPONENTS = [
 TodoTaskComponent,


];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports:[COMPONENTS]
})
export class ComponentsModule { }
