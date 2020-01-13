import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicSummaryPharmacyRoutingModule } from './clinic-summary-pharmacy-routing.module';
import {ClinicSummaryPharmacyComponent} from './clinic-summary-pharmacy.component'
import { ChartsModule } from 'ng2-charts';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  imports: [
    CommonModule,
    ClinicSummaryPharmacyRoutingModule,
    ChartsModule,
    AngularDateTimePickerModule,
    MatTableModule,
	MatInputModule,
	MatSortModule,
  MatAutocompleteModule
  ],
  declarations: [ClinicSummaryPharmacyComponent]
})
export class ClinicSummaryPharmacyModule { }
