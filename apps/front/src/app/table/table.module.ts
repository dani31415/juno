import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TableRouterModule } from './table-router.module';
import { TableService } from './table.service';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogService } from '../ui/dialog.service';
import { UiModule } from '../ui/ui.module';
import { TableListComponent } from './list/table-list.component';

@NgModule({
  declarations: [ TableListComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    DragDropModule,

    TableRouterModule,
    UiModule
  ],
  providers: [
    DialogService
  ],

})
export class TableModule { }
