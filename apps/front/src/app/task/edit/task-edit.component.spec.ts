import { async, ComponentFixture, TestBed, TestComponentRenderer } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { TaskEditComponent } from './task-edit.component';
import { TaskService } from '../task.service';
import { UiModule } from '../../ui/ui.module';
import { CKEditorComponent } from '../../ui/testing/ckeditor/ckeditor.component';
import { TaskServiceService } from '../service/task-service.service';
import { TestingTaskServiceService } from '../service/testing/testing-task-service.service';
import { isNullOrUndefined } from 'util';

describe('TaskEditComponent', () => {
  let component: TaskEditComponent;
  let fixture: ComponentFixture<TaskEditComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskEditComponent, CKEditorComponent ],
      providers: [ 
        TaskService, 
        {
          provide: TaskServiceService,
          useClass: TestingTaskServiceService
        }, 
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
          useValue: {
            toNavigate:null,
            navigateByUrl(url: string) {
              this.toNavigate = url;
            }
          }
        }
      ],
      imports: [ 
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,

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

  it('should create', async () => {
    expect(component).toBeTruthy();
    expect(component.controls.id.value).toBe(1);
  });

  it('submit form saves to repository', async () => {
    component.controls.title.setValue('new title');
    await component.onSubmit();
    let taskService = TestBed.inject<TaskServiceService>(TaskServiceService);
    let task = await taskService.findTaskById(1);
    expect(task.title).toBe('new title');
    let router = TestBed.inject<Router>(Router);
    expect(router['toNavigate']).toBe('/task/list');
  });

  it('title is required', async () => {
    component.controls.title.setValue('');
    await component.onSubmit();
    expect(component.controls.title.invalid).toBeTruthy();
    let router = TestBed.inject<Router>(Router);
    expect(router['toNavigate']).toBeNull();
  });
});
