import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { TaskService } from './task.service';
import { TaskRouterModule } from './task-router.module';
import { TaskEditComponent } from './edit/task-edit.component';
import { UiModule } from '../ui/ui.module';
import { TaskRepositoryModule } from './repository/task.repository.module';
import { TaskListComponent } from './list/task-list.component';

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
    TaskRouterModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule,
    CKEditorModule,

    UiModule,
    TaskRepositoryModule
  ],
  declarations: [
    TaskListComponent,
    TaskEditComponent
  ],
  exports:[
  ]
})
export class TaskModule { }
