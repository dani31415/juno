import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import * as EditorInline from '@ckeditor/ckeditor5-build-inline';

import { TaskServiceService } from './task-service.service';

const dbConfig: DBConfig  = {
  name: 'JunoTask',
  version: 1,
  objectStoresMeta: [{
    store: 'Task',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'title', keypath: 'name', options: { unique: false } },
      { name: 'description', keypath: 'description', options: { unique: false } },
      { name: 'order', keypath: 'order', options: { unique: false } }
    ]
  }]
};

@NgModule({
  declarations: [],
  imports: [
    NgxIndexedDBModule.forRoot(dbConfig),
    CommonModule
  ],
  providers: [
    EditorInline,
    TaskServiceService
  ],
})
export class TaskServiceModule { }
