import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboarddiagnosticRoutingModule } from './dashboarddiagnostic-routing.module';
import { DashboarddiagnosticComponent } from './dashboarddiagnostic.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    DashboarddiagnosticRoutingModule,
    FormsModule,
	ReactiveFormsModule,
	MatTableModule,
	MatInputModule,
	MatSortModule,
  MatDialogModule
  ],
  declarations: [DashboarddiagnosticComponent]
})
export class DashboarddiagnosticModule { }
