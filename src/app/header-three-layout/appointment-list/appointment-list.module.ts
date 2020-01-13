import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentListRoutingModule } from './appointment-list-routing.module';
import { AppointmentListComponent } from './appointment-list.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {WebcamModule} from 'ngx-webcam';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { FullCalendarModule } from 'ng-fullcalendar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatRadioModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AppointmentListRoutingModule,
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
    NgbModule,
	MatRadioModule
  ],
  declarations: [AppointmentListComponent]
})
export class AppointmentListModule { }
