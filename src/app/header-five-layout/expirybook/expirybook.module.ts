import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpirybookRoutingModule } from './expirybook-routing.module';
import { ExpirybookComponent } from './expirybook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    ExpirybookRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule
  ],
  declarations: [ExpirybookComponent]
})
export class ExpirybookModule { }
