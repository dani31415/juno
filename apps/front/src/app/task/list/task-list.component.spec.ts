import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon'; 
import { MatCardModule } from '@angular/material/card';

import { TaskListComponent } from './task-list.component';
import { TaskService } from '../task.service';
import { UiModule } from '../../ui/ui.module';
import { TaskRepository } from '../repository/task.repository';
import { TestingTaskServiceService } from '../repository/testing/testing-task-service.service';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListComponent ],
      providers: [ TaskService, {
        provide: TaskRepository,
        useClass: TestingTaskServiceService
      } ],
      imports: [ RouterTestingModule, MatCardModule, MatIconModule, UiModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tasks links exists', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    //await component.loadingService.finish();
    let as = fixture.nativeElement.querySelectorAll('mat-card');
    expect(as.length).toEqual(3);
  });
});
