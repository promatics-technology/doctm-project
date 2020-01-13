import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog-update',
  templateUrl: './confirmation-dialog-update.component.html',
  styleUrls: ['./confirmation-dialog-update.component.css']
})
export class ConfirmationDialogUpdateComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  okClick():void{  
    this.dialogRef.close("yes");
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}