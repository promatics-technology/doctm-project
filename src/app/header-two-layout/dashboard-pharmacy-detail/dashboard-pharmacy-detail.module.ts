import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPharmacyDetailRoutingModule } from './dashboard-pharmacy-detail-routing.module';
import { DashboardPharmacyDetailComponent } from './dashboard-pharmacy-detail.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    DashboardPharmacyDetailRoutingModule,
    ChartsModule
  ],
  declarations: [DashboardPharmacyDetailComponent]
})
export class DashboardPharmacyDetailModule { }
