import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableListComponent } from './list/table-list.component';
import { TableEditComponent } from './edit/table-edit.component';

const routesForChild: Routes = [
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
  imports: [RouterModule.forChild(routesForChild)],
  exports: [RouterModule]
})
export class TableRouterModule { }
