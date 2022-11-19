import { TaskService } from './service/task.service';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';
import { NavbarComponent } from './layout/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoTaskDialogComponent } from './components/todo-task-dialog/todo-task-dialog.component';

@NgModule({
  declarations: [AppComponent, TodoTaskComponent, NavbarComponent,TodoTaskDialogComponent],
  imports: [MaterialModule, BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
