import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialsDoctorComponent,DocumentDialog } from './tutorials-doctor.component'
import { TutorialsDoctorRoutingModule } from './tutorials-doctor-routing.module';
import { Http, Headers, RequestOptions, ResponseContentType, HttpModule } from '@angular/http';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
// import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
	imports: [
	CommonModule,
	TutorialsDoctorRoutingModule,
	HttpModule,
	MatInputModule,
	MatDialogModule,
	MatRadioModule,
	MatSelectModule,
	MatSlideToggleModule,
	],
	declarations: [TutorialsDoctorComponent, PdfViewerComponent,DocumentDialog],
	entryComponents:[DocumentDialog]
})
export class TutorialsDoctorModule { }
