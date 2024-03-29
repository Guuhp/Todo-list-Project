import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoTaskDialogComponent } from './components/todo-task-dialog/todo-task-dialog.component';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './layout/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { DragAndDropComponent } from './components/dragAndDrop/dragAndDrop.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 

@NgModule({
  declarations: [
    AppComponent,
    TodoTaskComponent,
    TodoTaskDialogComponent,
    FooterComponent,
    ToolbarComponent,
    DragAndDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    DragDropModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
