import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 

import { TableRouterModule } from './table-router.module';
import { TableService } from './table.service';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogService } from '../ui/dialog.service';
import { UiModule } from '../ui/ui.module';
import { TableListComponent } from './list/table-list.component';
import { TableGridComponent } from './grid/table-grid.component';
import { TableEditComponent } from './edit/table-edit.component';
import { TableGridService } from './table-grid.service';

@NgModule({
  declarations: [ 
    TableListComponent,
    TableGridComponent, 
    TableEditComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    DragDropModule,

    TableRouterModule,
    UiModule
  ],
  providers: [
    DialogService,
    TableGridService
  ],

})
export class TableModule { }
