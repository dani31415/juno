import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon'; 
import { MatCardModule } from '@angular/material/card';

import { TaskListComponent } from './task-list.component';
import { TaskService } from '../task.service';
import { UiModule } from '../../ui/ui.module';
import { TaskRepository } from '../repository/task.repository';
import { NgxIndexedDBModule } from '../../testing/ngx-indexed-db.module';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListComponent ],
      providers: [ 
        TaskService, 
        TaskRepository,
      ],
      imports: [ 
        RouterTestingModule, 
        MatCardModule, 
        MatIconModule, 
        UiModule, 
        
        NgxIndexedDBModule.forRoot(TaskService.sample)
      ]
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
