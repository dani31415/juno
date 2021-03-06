import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AbstractControl, FormGroup } from '@angular/forms';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import * as EditorInline from '@ckeditor/ckeditor5-build-inline';

import { TaskService } from '../task.service';
@Component({
  selector: 'juno-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  //@ViewChild('title') title;
  public editor = EditorInline;
  controls : { [K:string]:AbstractControl };
  formGroup: FormGroup;
  ckeditorConfig = {placeholder: 'Type the description here!'};

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    public taskService : TaskService) { }

  async ngOnInit() : Promise<void> {
    return new Promise ( (resolve,reject ) => {
        this.activatedRoute.params.subscribe(async (params) => {
            await this.taskService.setCurrentEditId(params['id']);
            this.formGroup = this.taskService.editForm.formGroup;
            this.controls = this.formGroup.controls;
            resolve();
        });
    });
  }

  // editor used in React (babelus)
  ckEditorChange(control: AbstractControl, event: ChangeEvent, editor?: CKEditor5.Editor ) {
    editor = editor || event.editor;
    control.setValue( editor.getData() );
  }

  async onSubmit(event) {
    event.preventDefault(); // needed for React (babelus)
    if (!this.formGroup.invalid) {
      await this.taskService.editForm.submit();
      this.router.navigateByUrl('/task/list');
    }
  }
}
