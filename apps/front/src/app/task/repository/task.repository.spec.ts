import { TestBed } from '@angular/core/testing';

import { TaskRepository } from './task.repository';
import { TaskService } from '../task.service';
import { NgxIndexedDBModule } from '../../testing/ngx-indexed-db.module';

describe('TaskRepository', () => {
  let service: TaskRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TaskRepository
      ],
      imports: [ 
        NgxIndexedDBModule.forRoot(TaskService.sample)
      ]
    });
    service = TestBed.inject(TaskRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
