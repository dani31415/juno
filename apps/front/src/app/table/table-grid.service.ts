import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Table } from './table';
import { TableService } from './table.service';

@Injectable({
  providedIn: 'root'
})
export class TableGridService {
  public rows : string[][];
  public title = new FormControl(null,Validators.required);
  public id : number;
  public formGroup : FormGroup;

  constructor(private tableService : TableService) { 
    this.formGroup = new FormGroup( {
      title:this.title
    });
  }

  public async initById(id:number) {
    let table : Table;
    if (id==null) {
      table = {
        id:null,
        title:'',
        rows:[ [' ', ' '], [' ', ' ']]
      }
    } else {
      table = this.tableService.findById(id);
    };
    this.id = table.id;
    this.title.setValue(table.title);
    this.rows = table.rows;
  }

  public async save() {
    let table : Table;
    table = {
      id:this.id,
      title:this.title.value,
      rows:this.rows
    };
    this.tableService.save(table);
  }

}
