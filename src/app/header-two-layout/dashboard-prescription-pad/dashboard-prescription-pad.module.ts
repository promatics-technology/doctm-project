import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*import { IsotopeModule } from 'angular2-isotope';*/
// import { IsotopeModule } from 'ngx-isotope'
import { TagInputModule } from 'ngx-chips';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
// import {ShContextMenuModule} from 'ng2-right-click-menu';

import { DashboardPrescriptionPadRoutingModule } from './dashboard-prescription-pad-routing.module';
import { DashboardPrescriptionPadComponent } from './dashboard-prescription-pad.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import {DndModule} from 'ng2-dnd';
import { UserService } from '../../providers/user.service';
import { AutoCompleteModule } from 'ng4-auto-complete';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
// import { SocialShareModule } from 'social-share-ng2';
@NgModule({
  imports: [
    CommonModule,
    // IsotopeModule,
    FormsModule,
	  ReactiveFormsModule,
    TagInputModule,
    // ShContextMenuModule,
    AngularDateTimePickerModule,
    DashboardPrescriptionPadRoutingModule,
    CountdownTimerModule,
    DndModule.forRoot(),
    AutoCompleteModule,
    MatDialogModule,
    // SocialShareModule
  ],
  declarations: [DashboardPrescriptionPadComponent],
  providers: [UserService]
})
export class DashboardPrescriptionPadModule { }
