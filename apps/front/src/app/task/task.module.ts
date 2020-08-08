import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './list/task-list.component';
import { TaskService } from './task.service';
import { TaskRouterModule } from './task-router.module';
import { FormsModule } from "@angular/forms"; 
import { TaskEditComponent } from './edit/task-edit.component';

@NgModule({
  providers: [
    TaskService
  ],
  imports: [
    CommonModule,
    FormsModule,
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
