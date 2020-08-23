import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Task } from '../task';

@Injectable()
export class TaskRepository {

  constructor(private dbService: NgxIndexedDBService) { }

  public async findTaskById(id: number) : Promise<Task> {
    let task = await this.dbService.getByID<Task>('Task',Number(id));
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
      let index = await this.dbService.add<Task>('Task', task);
      task.id = index;
    } else {
      await this.dbService.update<Task>('Task', task);
    }
  }

  public async deleteTask(id: number) {
    await this.dbService.delete('Task',id);
  }

  public async findAll() : Promise<Task[]> {
    return await this.dbService.getAll<Task>('Task');
  }
}
