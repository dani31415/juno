import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[TaskService]});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('edit form validation', () => {
    service.setCurrentEditId(1);
    service.editForm.validate();
    expect(service.editForm.isValid).toBeTruthy();
    expect(service.editForm.validations.title).toBeNull();
    service.editForm.model.title = '';
    service.editForm.validate();
    expect(service.editForm.isValid).not.toBeTruthy();
    expect(service.editForm.validations.title).not.toBeNull();
    service.editForm.model.title = 'something';
    service.editForm.validate();
    expect(service.editForm.isValid).toBeTruthy();
    expect(service.editForm.validations.title).toBeNull();
  });
});
