import { TestBed } from '@angular/core/testing';

import { TestingTaskServiceService } from './testing-task-service.service';

describe('TestingTaskServiceService', () => {
  let service: TestingTaskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestingTaskServiceService]
    });
    service = TestBed.inject(TestingTaskServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
