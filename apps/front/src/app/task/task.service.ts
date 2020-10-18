import { Injectable, DoBootstrap } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { TaskRepository } from './repository/task.repository';

import { ModelInterface } from '../ui/list/model.interface';
import { Task } from './task'
import { Form } from '../form';

@Injectable()
export class TaskService implements ModelInterface {
  constructor(private taskRepository : TaskRepository ) {}

  public editForm : Form<Task>;
  
  private db : {tasks:Task[]} = {tasks:[]};

  public static readonly sample : {Task:Task[]} = {
    Task: [
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
    return await this.taskRepository.findTaskById(id);
  }

  private async saveTask(task:Task) {
    await this.taskRepository.saveTask(task);
  }

  public async deleteItem(id: number) {
    await this.taskRepository.deleteTask(id);
  }

  async getItems() : Promise<Task[]> {
    this.db.tasks = await this.taskRepository.findAll();
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
