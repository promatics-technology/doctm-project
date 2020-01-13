import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { DashboardConsultationInvestigationRoutingModule } from './dashboard-consultation-investigation-routing.module';
import { DashboardConsultationInvestigationComponent } from './dashboard-consultation-investigation.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

@NgModule({
  imports: [
    CommonModule,
    DashboardConsultationInvestigationRoutingModule,
    ChartsModule,
    AngularDateTimePickerModule
  ],
  declarations: [DashboardConsultationInvestigationComponent]
})
export class DashboardConsultationInvestigationModule { }
