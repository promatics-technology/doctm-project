import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardProgressDiagnosisComponent } from './dashboard-progress-diagnosis.component'
import { DashboardProgressDiagnosisRoutingModule } from './dashboard-progress-diagnosis-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
@NgModule({
	imports: [
	CommonModule,
	DashboardProgressDiagnosisRoutingModule,
	ChartsModule,
	AngularDateTimePickerModule
	],
	declarations: [DashboardProgressDiagnosisComponent]
})
export class DashboardProgressDiagnosisModule { }
