import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './list/task-list.component';
import { TaskEditComponent } from './edit/task-edit.component';

const routes: Routes = [
  {
    path: 'list',
    component: TaskListComponent
  },
  {
    path: 'edit/:id',
    component: TaskEditComponent
  }
  ,
  {
    path: 'new',
    component: TaskEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRouterModule { }
