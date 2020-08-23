import { Injectable } from '@angular/core';

import { Task } from '../../task';
import { TaskService } from '../../task.service';

@Injectable()
export class TestingTaskServiceService {
  private db : {tasks:Task[]};

  constructor() { 
    this.db = Object.assign({},TaskService.sample);
  }

  public async findTaskById(id: number) : Promise<Task> {
    let task: Task;
    for (let t of this.db.tasks) {
      if (t.id==id) {
        task = t;
      }
    }
    return task;
  }

  private newTask(task) : Task {
    let id = 0;
    for (let t of this.db.tasks) {
      id = Math.max(t.id,id);
    }
    id++;
    task.id = id;
    this.db.tasks.push(task);
    return task;
  }

  public async saveTask(task:Task) {
    let target = await this.findTaskById(task.id);
    if (target==null) 
    {
      target = this.newTask(task);
    } else {
      Object.assign(target, task);
    }
  }

  public async deleteTask(id: number) {
    let task = await this.findTaskById(id);
    let index = this.db.tasks.indexOf(task);
    this.db.tasks.splice(index, 1);
  }

  public async findAll() : Promise<Task[]> {
    return this.db.tasks;
  }
}
