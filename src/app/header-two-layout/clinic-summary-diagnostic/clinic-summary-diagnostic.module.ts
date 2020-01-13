import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicSummaryDiagnosticRoutingModule } from './clinic-summary-diagnostic-routing.module';
import {ClinicSummaryDiagnosticComponent} from './clinic-summary-diagnostic.component'
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
    imports: [
    CommonModule,
    ClinicSummaryDiagnosticRoutingModule,
    AngularDateTimePickerModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule
    ],
    declarations: [ClinicSummaryDiagnosticComponent]
})
export class ClinicSummaryDiagnosticModule { }
