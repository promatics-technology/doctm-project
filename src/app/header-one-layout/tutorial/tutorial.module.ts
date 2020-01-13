import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialComponent, DocumentDialog } from './tutorial.component';
import { TutorialRoutingModule } from './tutorial-routing.module';
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
    TutorialRoutingModule,
    // FormsModule,
  // ReactiveFormsModule,
  HttpModule,
  MatInputModule,
  MatDialogModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  // AngularFileUploaderModule,
  ],
  declarations: [TutorialComponent,PdfViewerComponent,DocumentDialog],
  entryComponents:[DocumentDialog]
})
export class TutorialModule { }
