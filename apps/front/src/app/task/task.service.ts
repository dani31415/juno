import { Injectable } from '@angular/core';
import { Task } from './task'
import { Form } from '../form';

export class TaskService {
  public editForm : Form<Task>;

  constructor() { }

  async getTopTasks() : Promise<Task[]> {
    let tasks = [
      {
        id:1,
        title:'Purchase computer'
      },
      {
        id:2,
        title:'Repair plug'
      },
    ];
    return tasks;
  }

  setCurrentEditId(id: number) {
    console.log('id',id);
    this.editForm = new Form<Task>();
    this.editForm.model = {
      id,
      title:'hello world'
    };
    this.editForm.validate = function() {
      this.isValid = true;
      if (this.model.title.length==0) {
        this.validations.title = 'Cannot be empty';
        this.isValid = false;
      } else {
        this.validations.title = null;
      }
    }

  }

  

}
