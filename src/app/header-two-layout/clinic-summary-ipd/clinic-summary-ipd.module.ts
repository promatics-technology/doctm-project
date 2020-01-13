import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClinicSummaryIpdComponent} from './clinic-summary-ipd.component'

import { ClinicSummaryIpdRoutingModule } from './clinic-summary-ipd-routing.module';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    ClinicSummaryIpdRoutingModule,
    AngularDateTimePickerModule,
    MatTableModule,
	MatInputModule,
	MatSortModule
  ],
  declarations: [ClinicSummaryIpdComponent]
})
export class ClinicSummaryIpdModule { }
