import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPrescriptionViewRoutingModule } from './dashboard-prescription-view-routing.module';
import { DashboardPrescriptionViewComponent } from './dashboard-prescription-view.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardPrescriptionViewRoutingModule
  ],
  declarations: [DashboardPrescriptionViewComponent]
})
export class DashboardPrescriptionViewModule { }
