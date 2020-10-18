import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableListComponent } from './list/table-list.component';
//import { TaskEditComponent } from './edit/task-edit.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 

const routes: Routes = [
  {
    path: 'list',
    component: TableListComponent
  },
  /*{
    path: 'edit/:id',
    component: TaskEditComponent
  }
  ,
  {
    path: 'new',
    component: TaskEditComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule]
})
export class TableRouterModule { }
