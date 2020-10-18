import { Component, OnInit } from '@angular/core';

import { TableService } from '../table.service';

@Component({
  selector: 'juno-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  constructor(public tableService : TableService) {
  }

  async ngOnInit() {
  }
}
