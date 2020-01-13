import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { DischargePatientpdfRoutingModule } from './discharge-patientpdf-routing.module';
import { DischargePatientpdfComponent } from './discharge-patientpdf.component';

import {WebcamModule} from 'ngx-webcam';
import { FullCalendarModule } from 'ng-fullcalendar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import {DndModule} from 'ng2-dnd';
import { AutoCompleteModule } from 'ng4-auto-complete';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
  CommonModule,
  DischargePatientpdfRoutingModule,
  WebcamModule,
  FullCalendarModule,
  NgbModule,
  MatDialogModule,
  FormsModule,
  ReactiveFormsModule,
  MatAutocompleteModule,
  AngularDateTimePickerModule,
  TagInputModule,
  CountdownTimerModule,
  DndModule,
  AutoCompleteModule
  ],
  declarations: [DischargePatientpdfComponent]
})
export class DischargePatientpdfModule { }
