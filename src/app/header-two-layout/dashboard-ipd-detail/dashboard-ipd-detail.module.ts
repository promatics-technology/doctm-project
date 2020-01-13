import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

import { DashboardIpdDetailRoutingModule } from './dashboard-ipd-detail-routing.module';
import { DashboardIpdDetailComponent } from './dashboard-ipd-detail.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardIpdDetailRoutingModule,
    AngularDateTimePickerModule
  ],
  declarations: [DashboardIpdDetailComponent]
})
export class DashboardIpdDetailModule { }
