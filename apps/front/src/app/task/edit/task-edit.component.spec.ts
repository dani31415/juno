import { async, ComponentFixture, TestBed, TestComponentRenderer } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { TaskEditComponent } from './task-edit.component';
import { TaskService } from '../task.service';
import { UiModule } from '../../ui/ui.module';
//import { CKEditorComponent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { CKEditorComponent } from '../../ui/testing/ckeditor/ckeditor.component';
import { TaskRepository } from '../repository/task.repository';
import { NgxIndexedDBModule } from '../../testing/ngx-indexed-db.module';

describe('TaskEditComponent', () => {
  let component: TaskEditComponent;
  let fixture: ComponentFixture<TaskEditComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskEditComponent, CKEditorComponent ],
      providers: [ 
        TaskService,
        TaskRepository,
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

        UiModule,
        NgxIndexedDBModule.forRoot(TaskService.sample)
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
    let taskRepository = TestBed.inject<TaskRepository>(TaskRepository);
    let task = await taskRepository.findTaskById(1);
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
