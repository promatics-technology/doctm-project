import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClinicSummaryAllComponent} from './clinic-summary-all.component'
import { ClinicSummaryAllRoutingModule } from './clinic-summary-all-routing.module';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
@NgModule({
  imports: [
    CommonModule,
    ClinicSummaryAllRoutingModule,
    AngularDateTimePickerModule
  ],
  declarations: [ClinicSummaryAllComponent]
})
export class ClinicSummaryAllModule { }
