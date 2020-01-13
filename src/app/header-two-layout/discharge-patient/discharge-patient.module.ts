import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DischargePatientRoutingModule } from './discharge-patient-routing.module';
import { DischargePatientComponent } from './discharge-patient.component';
import {WebcamModule} from 'ngx-webcam';
import { FullCalendarModule } from 'ng-fullcalendar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

@NgModule({
  imports: [
  CommonModule,
  DischargePatientRoutingModule,
  WebcamModule,
  FullCalendarModule,
  NgbModule,
  MatDialogModule,
  FormsModule,
  ReactiveFormsModule,
  MatAutocompleteModule,
  AngularDateTimePickerModule,
  ],
  declarations: [DischargePatientComponent]
})
export class DischargePatientModule { }

