import { TestBed } from '@angular/core/testing';

import { TaskRepository } from './task.repository';
import { TaskRepositoryModule } from './task.repository.module';
//import { TestingTaskServiceService } from './testing/testing-task-service.service';

describe('TaskRepository', () => {
  let service: TaskRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TaskRepositoryModule ],
      /*providers: [ 
        {
          provide: NgxIndexedDBService,
          useClass: TestingTaskServiceService
        }
      ]*/
    });
    //service = TestBed.inject(TaskServiceService);
  });

  it('should be created', () => {
    //expect(service).toBeTruthy();
  });
});
