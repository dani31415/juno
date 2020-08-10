import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TaskListComponent } from './list/task-list.component';
import { TaskService } from './task.service';
import { TaskRouterModule } from './task-router.module';
import { TaskEditComponent } from './edit/task-edit.component';


@NgModule({
  providers: [
    TaskService
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    TaskRouterModule
  ],
  declarations: [
    TaskListComponent,
    TaskEditComponent
  ],
  exports:[
  ]
})
export class TaskModule { }
