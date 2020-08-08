import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'juno-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  topTasks: Task[];

  constructor(private taskService : TaskService) { }

  async ngOnInit() {
    this.topTasks = await this.taskService.getTopTasks();
  }

}
