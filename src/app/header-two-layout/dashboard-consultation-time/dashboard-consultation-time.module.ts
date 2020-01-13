import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { DashboardConsultationTimeRoutingModule } from './dashboard-consultation-time-routing.module';
import { DashboardConsultationTimeComponent } from './dashboard-consultation-time.component';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  imports: [
    CommonModule,
    DashboardConsultationTimeRoutingModule,
    ChartsModule,
    AngularDateTimePickerModule,
    MatTooltipModule
  ],
  declarations: [DashboardConsultationTimeComponent]
})
export class DashboardConsultationTimeModule { }
