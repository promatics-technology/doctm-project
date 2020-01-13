import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationDialogRoutingModule } from './confirmation-dialog-routing.module';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    ConfirmationDialogRoutingModule,
    MatDialogModule
  ],
  declarations: [ConfirmationDialogComponent]
})
export class ConfirmationDialogModule { }