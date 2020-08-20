import { Injectable, DoBootstrap } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { TaskServiceService } from './service/task-service.service';

import { Task } from './task'
import { Form } from '../form';

@Injectable()
export class TaskService {
  constructor(private taskServiceService : TaskServiceService ) {}

  public editForm : Form<Task>;

  private db : {tasks:Task[]} = {
    tasks: [
      {
        id:1,
        title:'Purchase computer',
        description:'<b>Dell</b> computer',
        order:1,
      },
      {
        id:2,
        title:'Repair plug',
        order:2,
      },
      {
        id:3,
        title:'Paint wall',
        order:3,
      }
    ]
  };

  private sortTasks() {
    this.db.tasks.sort( (a,b) => a.order-b.order );
  }

  public setBefore(t1:Task, t2:Task) {
    let i = this.db.tasks.indexOf(t2);
    if (i>0) {
      // between boths
      t1.order = (this.db.tasks[i-1].order + t2.order)/2;
    } else {
      t1.order = t2.order-1;
    }
    this.saveTask(t1);
    this.sortTasks();
  }

  public setAfter(t1:Task, t2:Task) {
    let i = this.db.tasks.indexOf(t2);
    if (i<this.db.tasks.length-1) {
      // between boths
      t1.order = (this.db.tasks[i+1].order + t2.order)/2;
    } else {
      t1.order = t2.order+1;
    }
    this.saveTask(t1);
    this.sortTasks();
  }

  private async findTaskById(id: number) : Promise<Task> {
    if (id==null) return null;
    return await this.taskServiceService.findTaskById(id);
    /* let task: Task;
    for (let t of this.db.tasks) {
      if (t.id==id) {
        task = t;
      }
    }
    return task;*/
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

  private async saveTask(task:Task) {
    await this.taskServiceService.saveTask(task);
    /* let target = await this.findTaskById(task.id);
    if (target==null) 
    {
      target = this.newTask(task);
    } else {
      Object.assign(target, task);
    }*/
  }

  public async deleteTask(id: number) {
    await this.taskServiceService.deleteTask(id);
    /*let task = await this.findTaskById(id);
    let index = this.db.tasks.indexOf(task);
    this.db.tasks.splice(index, 1);*/
  }

  /*constructor() { 
    this.sortTasks();
  }*/

  async getTopTasks() : Promise<Task[]> {
    this.db.tasks = await this.taskServiceService.findAll();
    this.sortTasks();
    return this.db.tasks;
  }

  async setCurrentEditId(id: number) {
    let task : Task = await this.findTaskById(id);
    this.editForm = new Form<Task>( {
      submit: async () => {
        await this.saveTask(this.editForm.model);
      },
      controls: {
        id: new FormControl(),
        order: new FormControl(),
        title: new FormControl(null,Validators.required),
        description: new FormControl()
      },
      model: task
    });
  }
}
