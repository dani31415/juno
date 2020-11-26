import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'juno-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  public confirmMessage:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {message: string}, public dialogRef: MatDialogRef<DialogComponent>) { 
    this.confirmMessage = data.message;
  }

  ngOnInit(): void {
  }

}
