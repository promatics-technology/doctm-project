import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardSmsRoutingModule } from './dashboard-sms-routing.module';
import { DashboardSmsComponent } from './dashboard-sms.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardSmsRoutingModule
  ],
  declarations: [DashboardSmsComponent]
})
export class DashboardSmsModule { }
