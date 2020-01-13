import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { DashboardConsultationPrescriptionRoutingModule } from './dashboard-consultation-prescription-routing.module';
import { DashboardConsultationPrescriptionComponent } from './dashboard-consultation-prescription.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    DashboardConsultationPrescriptionRoutingModule,
    ChartsModule,
    AngularDateTimePickerModule,
    MatTooltipModule
  ],
  declarations: [DashboardConsultationPrescriptionComponent]
})
export class DashboardConsultationPrescriptionModule { }
