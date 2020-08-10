import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'juno-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  //@ViewChild('title') title;
  title = new FormControl('',Validators.required);

  constructor(private route: ActivatedRoute, public taskService : TaskService) { }

  async ngOnInit() {
    this.route.params.subscribe( params => {
      this.taskService.setCurrentEditId(params['id']);
    });
  }

  onSubmit() {
    this.taskService.editForm.validate();
  }
}
