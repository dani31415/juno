import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private router : Router,
    private activatedRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    return new Promise ( async (resolve,reject ) => {
      await this.tableGridService.initById(null);
      this.activatedRoute.params.subscribe(async (params) => {
        await this.tableGridService.initById(params['id']);
        resolve();
      });
    });
  }

  public onGridChanged(event) {
    console.log('grid changed',event);
    this.tableGridService.rows = event;
  }

  public async onSubmit(event) {
    event.preventDefault(); // needed for React (babelus)
    if (!this.tableGridService.formGroup.invalid) {
      await this.tableGridService.save();
      this.router.navigateByUrl('/table/list');
    }
  }

}
