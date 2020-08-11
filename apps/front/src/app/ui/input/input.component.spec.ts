import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule, FormControl } from "@angular/forms"; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent ],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.control = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('parameters display', () => {
    component.label = 'My label';
    component.hint = 'My hint';
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML).toContain(component.label);
    expect(fixture.nativeElement.innerHTML).toContain(component.hint);
  });
  
  it('set value in the control', () => {
    component.control.setValue('My value');
    fixture.detectChanges();
    let input = fixture.nativeElement.querySelector('input');
    expect(input.value).toEqual('My value');
  });
});
