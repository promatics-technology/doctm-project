import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardProgressPharmacyComponent } from './dashboard-progress-pharmacy.component'
import { DashboardProgressPharmacyRoutingModule } from './dashboard-progress-pharmacy-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
@NgModule({
  imports: [
    CommonModule,
    DashboardProgressPharmacyRoutingModule,
    ChartsModule,
	AngularDateTimePickerModule
  ],
  declarations: [DashboardProgressPharmacyComponent]
})
export class DashboardProgressPharmacyModule { }
