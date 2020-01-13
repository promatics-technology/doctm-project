import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { DashboardConsultationDiagnosisRoutingModule } from './dashboard-consultation-diagnosis-routing.module';
import { DashboardConsultationDiagnosisComponent } from './dashboard-consultation-diagnosis.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

@NgModule({
  imports: [
    CommonModule,
    DashboardConsultationDiagnosisRoutingModule,
    ChartsModule,
    AngularDateTimePickerModule
  ],
  declarations: [DashboardConsultationDiagnosisComponent]
})
export class DashboardConsultationDiagnosisModule { }
