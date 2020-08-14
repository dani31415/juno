import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 

import { InputComponent } from './input/input.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog.service';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ InputComponent, DialogComponent ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ DialogService ],
  exports: [ InputComponent ]
})
export class UiModule { }
