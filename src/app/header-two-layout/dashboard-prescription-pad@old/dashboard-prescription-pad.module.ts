import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*import { IsotopeModule } from 'angular2-isotope';*/
// import { IsotopeModule } from 'ngx-isotope'
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
// import {ShContextMenuModule} from 'ng2-right-click-menu';

import { DashboardPrescriptionPadRoutingModule } from './dashboard-prescription-pad-routing.module';
import { DashboardPrescriptionPadComponent } from './dashboard-prescription-pad.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import {DndModule} from 'ng2-dnd';

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
    DndModule.forRoot()
  ],
  declarations: [DashboardPrescriptionPadComponent]
})
export class DashboardPrescriptionPadModule { }
