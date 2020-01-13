import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DoctorAppointmentsComponent} from './doctor-appointments.component'
import { DoctorAppointmentsRoutingModule } from './doctor-appointments-routing.module';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {WebcamModule} from 'ngx-webcam';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { FullCalendarModule } from 'ng-fullcalendar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
	imports: [
	CommonModule,
	DoctorAppointmentsRoutingModule,
	GooglePlaceModule,
	AgmCoreModule.forRoot({
		apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY',
		libraries: ["places"]
	}),
	MatAutocompleteModule,
	WebcamModule,
	AngularDateTimePickerModule,
	MatDialogModule,
	FullCalendarModule,
	NgbModule
	],
	declarations: [DoctorAppointmentsComponent]
})
export class DoctorAppointmentsModule { }
