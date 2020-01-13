import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {OverlayModule} from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import {FooterComponent} from './shared/footer/footer.component'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { AuthGuard } from './auth.guard';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';

import {ConfirmationDialogComponent} from './confirmation-popup/confirmation-dialog/confirmation-dialog.component'
import {ConfirmationDialogUpdateComponent} from './confirmation-popup/confirmation-dialog-update/confirmation-dialog-update.component';
import {CustomDialogComponent} from './confirmation-popup/custom-dialog/custom-dialog.component';
import { UiSwitchModule } from 'ngx-toggle-switch';
import {MatDialogModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ConfirmationDialogComponent,
    ConfirmationDialogUpdateComponent,
    CustomDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
	OverlayModule,
	MatDialogModule,
    HttpModule,
    MatProgressBarModule,
    CountdownTimerModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY',
      libraries: ["places"]
    }), 
    ScrollToModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmationDialogComponent,ConfirmationDialogUpdateComponent,CustomDialogComponent] 
})
export class AppModule { }
