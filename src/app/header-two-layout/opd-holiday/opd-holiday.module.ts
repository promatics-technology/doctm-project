import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OpdHolidayComponent} from './opd-holiday.component'
import { FullCalendarModule } from 'ng-fullcalendar';
import { OpdHolidayRoutingModule } from './opd-holiday-routing.module';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {WebcamModule} from 'ngx-webcam';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { MatDialogModule } from '@angular/material/dialog';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    OpdHolidayRoutingModule,
    FullCalendarModule,
     MatAutocompleteModule,
    WebcamModule,
    AngularDateTimePickerModule,
    MatDialogModule,
  ],
  declarations: [OpdHolidayComponent]
})
export class OpdHolidayModule { }
