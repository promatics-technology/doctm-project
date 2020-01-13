import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { DashboardConsultationTreatmentRoutingModule } from './dashboard-consultation-treatment-routing.module';
import { DashboardConsultationTreatmentComponent } from './dashboard-consultation-treatment.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

@NgModule({
  imports: [
    CommonModule,
    DashboardConsultationTreatmentRoutingModule,
    ChartsModule,
    AngularDateTimePickerModule
  ],
  declarations: [DashboardConsultationTreatmentComponent]
})
export class DashboardConsultationTreatmentModule { }
