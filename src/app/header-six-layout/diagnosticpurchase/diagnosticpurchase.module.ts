import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagnosticpurchaseRoutingModule } from './diagnosticpurchase-routing.module';
import { DiagnosticpurchaseComponent } from './diagnosticpurchase.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DiagnosticpurchaseRoutingModule,
    FormsModule,
	ReactiveFormsModule,
	MatTableModule,
	MatInputModule,
	MatSortModule
  ],
  declarations: [DiagnosticpurchaseComponent]
})
export class DiagnosticpurchaseModule { }
