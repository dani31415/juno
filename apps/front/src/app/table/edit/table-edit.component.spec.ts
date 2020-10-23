import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { TableEditComponent } from './table-edit.component';
import { UiModule } from '../../ui/ui.module';
import { TableGridComponent } from '../grid/table-grid.component';
import { TableService } from '../table.service';

describe('TableEditComponent', () => {
  let component: TableEditComponent;
  let fixture: ComponentFixture<TableEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TableEditComponent,
        TableGridComponent ],
      providers: [
        TableService,
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
    fixture = TestBed.createComponent(TableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
