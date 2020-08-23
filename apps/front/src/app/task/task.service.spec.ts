import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { TaskRepository } from './repository/task.repository';
import { TestingTaskServiceService } from './repository/testing/testing-task-service.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[],
      providers:[
        TaskService,
        {
          provide:TaskRepository,
          useClass:TestingTaskServiceService
        }
      ]});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('edit form validation', async () => {
    await service.setCurrentEditId(1);
    expect(service.editForm.formGroup.invalid).not.toBeTruthy(); // valid
    //service.editForm.validate();
    //expect(service.editForm.isValid).toBeTruthy();
    //expect(service.editForm.validations.title).toBeNull();
    service.editForm.formGroup.controls.title.setValue('');
    //service.editForm.validate();
    expect(service.editForm.formGroup.invalid).toBeTruthy(); // invalid
    //expect(service.editForm.validations.title).not.toBeNull();
    service.editForm.formGroup.controls.title.setValue('something');
    expect(service.editForm.formGroup.invalid).not.toBeTruthy(); // valid
    //service.editForm.validate();
    //expect(service.editForm.isValid).toBeTruthy();
    //expect(service.editForm.validations.title).toBeNull();*/
  });
});
