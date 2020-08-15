import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { TaskService } from '../task.service';
import { Task } from '../task';
import { DialogService } from '../../ui/dialog.service';

@Component({
  selector: 'juno-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  topTasks: Task[];

  constructor(private taskService : TaskService, private dialogService: DialogService ) { }

  async ngOnInit() {
    this.topTasks = await this.taskService.getTopTasks();
  }

  async deleteTask(id:number, event:Event) {
    event.stopPropagation();
    let result = await this.dialogService.showDialog("Are you sure you want to move task "+id+" to trash?");
    if (result) {
      this.taskService.deleteTask(id);
    }
  }

  drop(event:CdkDragDrop<string[]>) {
    if (event.currentIndex<event.previousIndex) {
      this.taskService.setBefore(this.topTasks[event.previousIndex],this.topTasks[event.currentIndex]);
    } else if (event.currentIndex>event.previousIndex) {
      this.taskService.setAfter(this.topTasks[event.previousIndex],this.topTasks[event.currentIndex]);
    }
    //console.log(event.currentIndex);
  }
}
