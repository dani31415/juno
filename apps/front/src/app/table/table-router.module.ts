import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableListComponent } from './list/table-list.component';
import { TableEditComponent } from './edit/table-edit.component';

const routes: Routes = [
  {
    path: 'list',
    component: TableListComponent
  },
  {
    path: 'edit/:id',
    component: TableEditComponent
  },
  {
    path: 'new',
    component: TableEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRouterModule { }
