import { Injectable } from '@angular/core';
import { Task } from './task'

export class TaskService {
  public current : Task;

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
    this.current = {
      id,
      title:'hello world'
    }

  }

  

}
