import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartAssistantNewAppointmentRoutingModule } from './smart-assistant-new-appointment-routing.module';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import {SmartAssistantNewAppointmentComponent} from './smart-assistant-new-appointment.component'

@NgModule({
  imports: [
    CommonModule,
    AngularDateTimePickerModule,
        FormsModule,
	ReactiveFormsModule,
    SmartAssistantNewAppointmentRoutingModule
  ],
  declarations: [SmartAssistantNewAppointmentComponent]
})
export class SmartAssistantNewAppointmentModule { }
