import { Injectable, DoBootstrap } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Task } from './task'
import { Form } from '../form';

export class TaskService {
  public editForm : Form<Task>;

  private db : {tasks:Task[]} = {
    tasks: [
      {
        id:1,
        title:'Purchase computer',
        description:'<b>Dell</b> computer'
      },
      {
        id:2,
        title:'Repair plug'
      }
    ]
  };

  private findTaskById(id: number) : Task {
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

  private saveTask(task:Task) {
    let target = this.findTaskById(task.id);
    if (target==null) 
    {
      target = this.newTask(task);
    } else {
      Object.assign(target, task);
    }
  }

  public deleteTask(id: number) {
    let task = this.findTaskById(id);
    let index = this.db.tasks.indexOf(task);
    this.db.tasks.splice(index, 1);
  }

  constructor() { }

  async getTopTasks() : Promise<Task[]> {
    return this.db.tasks;
  }

  setCurrentEditId(id: number) {
    let task : Task = this.findTaskById(id);
    this.editForm = new Form<Task>( {
      submit: () => {
        this.saveTask(this.editForm.model);
      },
      controls: {
        id: new FormControl(),
        title: new FormControl(null,Validators.required),
        description: new FormControl()
      },
      model: task
    });
  }
}
