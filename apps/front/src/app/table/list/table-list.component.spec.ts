import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon'; 
import { MatCardModule } from '@angular/material/card';

import { TableListComponent } from './table-list.component';
import { TableService } from '../table.service';
import { UiModule } from '../../ui/ui.module';
//import { TaskRepository } from '../repository/task.repository';
import { NgxIndexedDBModule } from '../../testing/ngx-indexed-db.module';

describe('TaskListComponent', () => {
  let component: TableListComponent;
  let fixture: ComponentFixture<TableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableListComponent ],
      providers: [ 
        TableService, 
        //TableRepository,
      ],
      imports: [ 
        RouterTestingModule, 
        MatCardModule, 
        MatIconModule, 
        UiModule, 
        
        //NgxIndexedDBModule.forRoot(TableService.sample)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListComponent);
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
