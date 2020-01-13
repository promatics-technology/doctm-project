import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardDiagnosticsDetailRoutingModule } from './dashboard-diagnostics-detail-routing.module';
import { DashboardDiagnosticsDetailComponent } from './dashboard-diagnostics-detail.component';

import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    DashboardDiagnosticsDetailRoutingModule,
    ChartsModule
  ],
  declarations: [DashboardDiagnosticsDetailComponent]
})
export class DashboardDiagnosticsDetailModule { }
