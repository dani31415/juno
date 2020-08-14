import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  public showDialog(message:string) : Promise<boolean> {
    return new Promise( (resolve,reject) => {
      let dialogRef : MatDialogRef<DialogComponent,boolean>;
      dialogRef = this.dialog.open(DialogComponent, {
        disableClose: false
      });
      dialogRef.componentInstance.confirmMessage = message;

      dialogRef.afterClosed().subscribe( (result:boolean) => {
        if(result) {
          resolve(result);
        } else {
          resolve(false);
        }
      });
    });
  }
}
