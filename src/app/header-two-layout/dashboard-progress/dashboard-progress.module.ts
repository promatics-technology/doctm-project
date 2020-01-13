import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardProgressRoutingModule } from './dashboard-progress-routing.module';
import { DashboardProgressComponent } from './dashboard-progress.component';
import { ChartsModule } from 'ng2-charts';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

@NgModule({
  imports: [
    CommonModule,
    DashboardProgressRoutingModule,
    ChartsModule,
    AngularDateTimePickerModule
  ],
  declarations: [DashboardProgressComponent]
})
export class DashboardProgressModule { }
