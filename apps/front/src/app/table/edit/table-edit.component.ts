import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TableGridService } from '../table-grid.service';

@Component({
  selector: 'juno-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.css']
})
export class TableEditComponent implements OnInit {
  constructor(
    public tableGridService : TableGridService,
    private router : Router ) { }

  ngOnInit(): void {
  }

  public onGridChanged(event) {
    this.tableGridService.rows = event;
  }

  public async onSubmit() {
    if (!this.tableGridService.formGroup.invalid) {
      await this.tableGridService.save();
      this.router.navigateByUrl('/table/list');
    }
  }

}
