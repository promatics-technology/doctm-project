import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardSidebarRoutingModule } from './dashboard-sidebar-routing.module';
import { DashboardSidebarComponent } from './dashboard-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardSidebarRoutingModule
  ],
  declarations: [DashboardSidebarComponent]
})
export class DashboardSidebarModule { }
