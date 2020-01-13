import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationDialogUpdateRoutingModule } from './confirmation-dialog-update-routing.module';
import { ConfirmationDialogUpdateComponent } from './confirmation-dialog-update.component';

import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    ConfirmationDialogUpdateRoutingModule,
    MatDialogModule
  ],
  declarations: [ConfirmationDialogUpdateComponent]
})
export class ConfirmationDialogUpdateModule { }