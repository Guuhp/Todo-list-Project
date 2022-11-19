import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule} from '@angular/material/dialog'; 

const COMPONENTS = [
    MatIconModule, 
    MatTableModule,
    MatButtonModule,
    MatDialogModule
];
@NgModule({
  declarations: [],
  imports: [COMPONENTS],
  exports: [COMPONENTS],
})
export class MaterialModule {}
