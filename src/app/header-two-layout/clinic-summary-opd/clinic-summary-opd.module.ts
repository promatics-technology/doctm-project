import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicSummaryOpdRoutingModule } from './clinic-summary-opd-routing.module';
import {ClinicSummaryOpdComponent} from './clinic-summary-opd.component';
import { ChartsModule } from 'ng2-charts';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

@NgModule({
  imports: [
    CommonModule,
    ClinicSummaryOpdRoutingModule,
    ChartsModule,
    AngularDateTimePickerModule
  ],
  declarations: [ClinicSummaryOpdComponent]
})
export class ClinicSummaryOpdModule { }
