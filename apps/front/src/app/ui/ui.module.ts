import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 

import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [ InputComponent, ListComponent, DialogComponent ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DragDropModule
  ],
  providers: [ DialogService ],
  exports: [ 
    InputComponent,
    ListComponent 
  ]
})
export class UiModule { }
