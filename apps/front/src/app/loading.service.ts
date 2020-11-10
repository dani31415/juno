import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private depth: number = 0;
  private listeners: Function[] = [];

  constructor() { }

  public begin() {
    this.depth++;
  }

  public end() {
    this.depth--;
    if (this.depth==0) {
      for (let resolve of this.listeners) {
        resolve();
      }
      this.listeners = []; // clear
    }
  }

  public finish() : Promise<void> {
    return new Promise( (resolve,reject) => {
      if (this.depth==0) {
        resolve();
      } else {
        this.listeners.push(resolve);
      }
    });
  }
}
