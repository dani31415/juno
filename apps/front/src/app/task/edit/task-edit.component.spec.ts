import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms"; 
import { ActivatedRoute } from '@angular/router';

import { TaskEditComponent } from './task-edit.component';
import { TaskService } from '../task.service';

describe('TaskEditComponent', () => {
  let component: TaskEditComponent;
  let fixture: ComponentFixture<TaskEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskEditComponent ],
      providers: [ TaskService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: {
              subscribe: (func: Function) => func( {id:1} )
            }
          }
        } ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
