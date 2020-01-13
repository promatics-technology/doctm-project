import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagnosticsprogressRoutingModule } from './diagnosticsprogress-routing.module';
import { DiagnosticsprogressComponent } from './diagnosticsprogress.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
  CommonModule,
  DiagnosticsprogressRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  MatTableModule,
  MatInputModule,
  MatSortModule,
  MatDialogModule
  ],
  declarations: [DiagnosticsprogressComponent]
})
export class DiagnosticsprogressModule { }
