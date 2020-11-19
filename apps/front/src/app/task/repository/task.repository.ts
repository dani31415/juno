import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Task } from '../task';

@Injectable()
export class TaskRepository {

  constructor(private dbService: NgxIndexedDBService<Task>) { }

  public async findTaskById(id: number) : Promise<Task> {
    let task = await this.dbService.getByID('Task',Number(id)).toPromise();
    return task;
  }

  public async saveTask(task:Task) {
    let target = null;
    if (task.id) {
      target = this.findTaskById(task.id);
    }
    if (target==null) 
    {
      delete(task.id); // set to undefined
      let index = await this.dbService.add('Task', task).toPromise();
      task.id = index;
    } else {
      await this.dbService.update('Task', task).toPromise();
    }
  }

  public async deleteTask(id: number) {
    await this.dbService.delete('Task',id);
  }

  public async findAll() : Promise<Task[]> {
    return await this.dbService.getAll('Task').toPromise();
  }
}
