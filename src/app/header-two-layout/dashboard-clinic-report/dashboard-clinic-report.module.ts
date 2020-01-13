import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardClinicReportRoutingModule } from './dashboard-clinic-report-routing.module';
import { DashboardClinicReportComponent } from './dashboard-clinic-report.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
@NgModule({
  imports: [
    CommonModule,
    DashboardClinicReportRoutingModule,
    AngularDateTimePickerModule
  ],
  declarations: [DashboardClinicReportComponent]
})
export class DashboardClinicReportModule { }
