import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { DashboardConsultationPatientRoutingModule } from './dashboard-consultation-patient-routing.module';
import { DashboardConsultationPatientComponent } from './dashboard-consultation-patient.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardConsultationPatientRoutingModule,
    ChartsModule,
    AngularDateTimePickerModule
  ],
  declarations: [DashboardConsultationPatientComponent]
})
export class DashboardConsultationPatientModule { }
