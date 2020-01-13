import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

import { DashboardOngoprescriptionRoutingModule } from './dashboard-ongoprescription-routing.module';
import { DashboardOngoprescriptionComponent } from './dashboard-ongoprescription.component';

import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  imports: [
    CommonModule,
    AngularDateTimePickerModule,
    FormsModule,
    FormsModule,
	ReactiveFormsModule,
	NgbModule,
	AngularDateTimePickerModule,
	MatAutocompleteModule,
    //Ng2DatetimePickerModule,
    DashboardOngoprescriptionRoutingModule
  ],
  declarations: [DashboardOngoprescriptionComponent]
})
export class DashboardOngoprescriptionModule { }
