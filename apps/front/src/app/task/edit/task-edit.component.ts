import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AbstractControl, Validators, FormGroup } from '@angular/forms';

import { TaskService } from '../task.service';

@Component({
  selector: 'juno-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  //@ViewChild('title') title;
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

  onSubmit() {
    if (!this.formGroup.invalid) {
      this.taskService.editForm.submit();
      this.router.navigateByUrl('/task/list');
    }
  }
}
