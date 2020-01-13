import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardProgressIpdComponent } from './dashboard-progress-ipd.component'

import { DashboardProgressIpdRoutingModule } from './dashboard-progress-ipd-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
//import {WebcamModule} from 'ngx-webcam';
import { FullCalendarModule } from 'ng-fullcalendar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
	imports: [
	CommonModule,
	DashboardProgressIpdRoutingModule,
	ChartsModule,
	AngularDateTimePickerModule,
	FullCalendarModule,
	NgbModule,
	MatDialogModule,
	FormsModule,
	ReactiveFormsModule,
	MatAutocompleteModule,
	AngularDateTimePickerModule,
	],
	declarations: [DashboardProgressIpdComponent]
})
export class DashboardProgressIpdModule { }
