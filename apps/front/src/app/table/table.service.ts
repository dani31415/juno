import { Injectable } from '@angular/core';
import { ItemInterface } from '../ui/list/item.interface';
import { ModelInterface } from '../ui/list/model.interface';
import { Table } from './table';

@Injectable({
  providedIn: 'root'
})
export class TableService implements ModelInterface {
  private items : Table[];

  public static sample = [
    {
      id:1,
      title:"House",
      rows:[['Bet size','king'],['Flat size','60 m2']]
    },
    {
      id:2,
      title:"Passwords",
      rows:[['2']]
    },
    {
      id:3,
      title:"Vocabulary",
      rows:[['3']]
    }
  ]
  constructor() { 
    this.items = TableService.sample;
  }

  async getItems(): Promise<Table[]> {
    return this.items;
  }
  
  async deleteItem(id: number): Promise<void> {
    let index = this.indexById(id);
    this.items.splice(index,1);
  }

  setBefore(previous: ItemInterface, current: ItemInterface): void {
    let i = this.indexById(previous.id);
    let j = this.indexById(current.id);
    // i > j
    this.items.splice(i,1);
    this.items.splice(j,0,previous);
  }

  setAfter(previous: ItemInterface, current: ItemInterface): void {
    let i = this.indexById(previous.id);
    let j = this.indexById(current.id);
    // j > i
    this.items.splice(i,1);
    this.items.splice(j,0,previous);
  }

  private indexById(id:number) {
    for (let i=0;i<this.items.length;i++) {
      if (this.items[i].id==id) return i;
    }
    return -1;
  }

  public findById(id:number) : Table {
    let i = this.indexById(id);
    if (i>=0) return this.items[i];
    return null;
  }

  public save(table:Table) {
    if (!table.id) {
      // Get an unused id
      let id = 0;
      for (let item of this.items) {
        id = Math.max(item.id,id);
      }
      table.id = id+1;
      this.items.push(table);
    } else {
      let dest = this.findById(table.id);
      Object.assign(dest,table);
    }
  }
}
