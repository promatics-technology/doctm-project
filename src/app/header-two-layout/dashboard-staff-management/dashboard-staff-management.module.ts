import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardStaffManagementRoutingModule } from './dashboard-staff-management-routing.module';
import { DashboardStaffManagementComponent } from './dashboard-staff-management.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardStaffManagementRoutingModule
  ],
  declarations: [DashboardStaffManagementComponent]
})
export class DashboardStaffManagementModule { }
