import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomDialogRoutingModule } from './custom-dialog-routing.module';
import { CustomDialogComponent } from './custom-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    CustomDialogRoutingModule,
    MatDialogModule
  ],
  declarations: [CustomDialogComponent]
})
export class CustomDialogModule { }
