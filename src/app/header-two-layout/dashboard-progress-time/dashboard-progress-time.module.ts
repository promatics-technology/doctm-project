import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardProgressTimeComponent} from './dashboard-progress-time.component'
import { DashboardProgressTimeRoutingModule } from './dashboard-progress-time-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
	imports: [
		CommonModule,
		DashboardProgressTimeRoutingModule,
		ChartsModule,
		AngularDateTimePickerModule,
		MatTooltipModule,
		MatProgressBarModule
	],
	declarations: [DashboardProgressTimeComponent]
})
export class DashboardProgressTimeModule { }
