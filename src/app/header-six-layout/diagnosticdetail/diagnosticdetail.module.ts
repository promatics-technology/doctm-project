import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagnosticdetailRoutingModule } from './diagnosticdetail-routing.module';
import { DiagnosticdetailComponent } from './diagnosticdetail.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
	imports: [
		CommonModule,
		DiagnosticdetailRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MatCheckboxModule
	],
	declarations: [DiagnosticdetailComponent]
})
export class DiagnosticdetailModule { }
