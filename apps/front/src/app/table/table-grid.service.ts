import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TableGridService {
  public rows : string[][];
  public title = new FormControl(null,Validators.required);
  public id : number;
  public formGroup : FormGroup;

  constructor() { 
    this.rows = [ [ 'bed', 'king' ], [ 'size', '60 m2' ] ];
    this.formGroup = new FormGroup( {
      title:this.title
    });
  }

  public async save() {
    // TODO implementme
  }

}
