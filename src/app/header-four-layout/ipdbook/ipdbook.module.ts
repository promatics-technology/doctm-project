import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpdbookRoutingModule } from './ipdbook-routing.module';
import { IpdbookComponent } from './ipdbook.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
// import {DragDropModule} from '@angular/cdk/drag-drop';
// import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
// import {CdkTreeModule} from '@angular/cdk/tree';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatSortModule } from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


@NgModule({

	imports: [
	CommonModule,
	IpdbookRoutingModule,
	AngularDateTimePickerModule,
	MatTableModule,
	HttpClientModule,
	// DragDropModule,
	// ScrollingModule,
	CdkTableModule,
	// CdkTreeModule,
	MatTableModule,
	MatFormFieldModule,
	MatInputModule,
	// BrowserModule,
	MatTableModule,
	MatSortModule,
	// BrowserAnimationsModule
	
	],
	declarations: [IpdbookComponent]
})
export class IpdbookModule { }
