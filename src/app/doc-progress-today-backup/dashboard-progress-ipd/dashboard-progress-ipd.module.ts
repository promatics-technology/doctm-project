import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardProgressIpdComponent } from './dashboard-progress-ipd.component'

import { DashboardProgressIpdRoutingModule } from './dashboard-progress-ipd-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
@NgModule({
  imports: [
    CommonModule,
    DashboardProgressIpdRoutingModule,
    ChartsModule,
	AngularDateTimePickerModule
  ],
  declarations: [DashboardProgressIpdComponent]
})
export class DashboardProgressIpdModule { }
