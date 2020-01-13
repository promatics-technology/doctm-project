import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReorderbookRoutingModule } from './reorderbook-routing.module';
import { ReorderbookComponent } from './reorderbook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    ReorderbookRoutingModule,
    FormsModule,
	ReactiveFormsModule,
	MatTableModule,
	MatInputModule,
	MatSortModule,
	MatDialogModule
  ],
  declarations: [ReorderbookComponent]
})
export class ReorderbookModule { }