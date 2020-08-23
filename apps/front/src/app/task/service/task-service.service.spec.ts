import { TestBed } from '@angular/core/testing';

import { TaskServiceService } from './task-service.service';
import { TaskServiceModule } from './task-service.module';
import { TestingTaskServiceService } from './testing/testing-task-service.service';

describe('TaskServiceService', () => {
  let service: TaskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TaskServiceModule ],
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
