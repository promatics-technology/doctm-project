import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardReferralRoutingModule } from './dashboard-referral-routing.module';
import { DashboardReferralComponent } from './dashboard-referral.component';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    DashboardReferralRoutingModule,
    FormsModule,
	ReactiveFormsModule,
	AngularDateTimePickerModule,
	MatDialogModule
  ],
  declarations: [DashboardReferralComponent]
})
export class DashboardReferralModule { }
