import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPrescriptionPadOffComponent } from './dashboard-prescription-pad-off.component'
import { DashboardPrescriptionPadOffRoutingModule } from './dashboard-prescription-pad-off-routing.module';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import {DndModule} from 'ng2-dnd';
import { UserService } from '../../providers/user.service';
import { AutoCompleteModule } from 'ng4-auto-complete';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
@NgModule({
	imports: [
	CommonModule,
	DashboardPrescriptionPadOffRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	TagInputModule,
	// ShContextMenuModule,
	AngularDateTimePickerModule,
	CountdownTimerModule,
	DndModule.forRoot(),
	AutoCompleteModule,
	MatDialogModule
	],
	declarations: [DashboardPrescriptionPadOffComponent],
	providers: [UserService]
})
export class DashboardPrescriptionPadOffModule { }
