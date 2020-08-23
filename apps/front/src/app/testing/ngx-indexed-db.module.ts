import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgxIndexedDBService } from 'ngx-indexed-db';
import * as Testing from './ngx-indexed-db.service';

interface HasId {
  id?:number;
}

type Database = {
  [key in string] : HasId[]
};

@NgModule()
export class NgxIndexedDBModule {
  static forRoot(db : Database): ModuleWithProviders<NgxIndexedDBModule> {
    return {
      ngModule: NgxIndexedDBModule,
      providers: [{
        provide: NgxIndexedDBService,
        useValue: new Testing.NgxIndexedDBService(db)
      }]
    };
  }
}
