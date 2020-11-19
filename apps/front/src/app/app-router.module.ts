import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routesForRoot: Routes = [
  {
    path:'task',
    loadChildren: () => import('./task/task.module').then(m => m.TaskModule)
  },
  {
    path:'table',
    loadChildren: () => import('./table/table.module').then(m => m.TableModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routesForRoot)],
  exports: [RouterModule]
})
export class AppRouterModule { }
