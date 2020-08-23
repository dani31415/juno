import { Injectable } from '@angular/core';

interface HasId {
  id?:number;
}

type Database = {
  [key in string] : HasId[]
};

@Injectable()
export class NgxIndexedDBService {
  private db:Database;
  constructor(db:Database) { 
    this.db = Object.assign({},db);
  }

  async getByID<T extends HasId>(storeName: string, id: string | number): Promise<T> {
    let obj : T;
    for (let t of this.db[storeName]) {
      if (t.id==id) {
        obj = <T>t;
      }
    }
    return obj;
  }

  async add<T extends HasId>(storeName: string, value: T): Promise<number> {
    let id = 0;
    for (let t of this.db[storeName]) {
      id = Math.max(t.id,id);
    }
    id++;
    value.id = id;
    this.db[storeName].push(value);
    return id;
  }

  async update<T extends HasId>(storeName: string, value: T): Promise<any> {
    let target : T = await this.getByID<T>(storeName, value.id);
    Object.assign(target, value);
    return target;
  }

  async delete(storeName: string, key: any): Promise<any> {
    let target : HasId = await this.getByID(storeName, key);
    let index = this.db[storeName].indexOf(target);
    this.db[storeName].splice(index, 1);
  }

  async getAll<T extends HasId>(storeName: string): Promise<T[]> {
    return <T[]>this.db[storeName];
  }

}
