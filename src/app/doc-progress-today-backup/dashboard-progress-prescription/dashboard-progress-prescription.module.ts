import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardProgressPrescriptionComponent } from './dashboard-progress-prescription.component'
import { DashboardProgressPrescriptionRoutingModule } from './dashboard-progress-prescription-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  imports: [
    CommonModule,
    DashboardProgressPrescriptionRoutingModule,
    ChartsModule,
	AngularDateTimePickerModule,
	MatTooltipModule
  ],
  declarations: [DashboardProgressPrescriptionComponent]
})
export class DashboardProgressPrescriptionModule { }
