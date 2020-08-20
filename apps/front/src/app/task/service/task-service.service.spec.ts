import { TestBed } from '@angular/core/testing';

import { TaskServiceService } from './task-service.service';
import { TaskServiceModule } from './task-service.module';

describe('TaskServiceService', () => {
  let service: TaskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TaskServiceModule ]
    });
    service = TestBed.inject(TaskServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
