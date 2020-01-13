import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DndModule} from 'ng2-dnd';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';

import { DashboardPrescriptionRoutingModule } from './dashboard-prescription-routing.module';
import { DashboardPrescriptionComponent } from './dashboard-prescription.component';

@NgModule({
	imports: [
	CommonModule,
	DndModule.forRoot(),
	DashboardPrescriptionRoutingModule,
	FormsModule,
	ReactiveFormsModule
	],
	declarations: [DashboardPrescriptionComponent]
})
export class DashboardPrescriptionModule { }
