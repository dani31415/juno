import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { TaskEditComponent } from './task-edit.component';
import { TaskService } from '../task.service';
import { UiModule } from '../../ui/ui.module';

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
        },
        {
          provide: Router,
          useValue: {}
        }],
      imports: [ 
        FormsModule,
        //RouterTestingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CKEditorModule,

        UiModule
      ]
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
