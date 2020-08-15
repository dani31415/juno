import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AbstractControl, FormGroup } from '@angular/forms';
import * as EditorInline from '@ckeditor/ckeditor5-build-inline';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

import { TaskService } from '../task.service';

@Component({
  selector: 'juno-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  //@ViewChild('title') title;
  public Editor = EditorInline;
  controls : { [K:string]:AbstractControl };
  formGroup: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public taskService : TaskService) { }

  async ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.taskService.setCurrentEditId(params['id']);
      this.formGroup = this.taskService.editForm.formGroup;
      this.controls = this.formGroup.controls;
    });
  }

  ckEditorChange(control: AbstractControl, { editor }: ChangeEvent ) {
    control.setValue( editor.getData() );
  }

  onSubmit() {
    if (!this.formGroup.invalid) {
      this.taskService.editForm.submit();
      this.router.navigateByUrl('/task/list');
    }
  }
}
