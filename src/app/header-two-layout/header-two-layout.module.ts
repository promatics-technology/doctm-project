import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderTwoLayoutRoutingModule } from './header-two-layout-routing.module';
import { HeaderTwoLayoutComponent } from './header-two-layout.component';
import {HeaderTwoComponent} from '../shared/headertwo/headertwo.component'
import { DashboardSidebarComponent } from '../shared/dashboard-sidebar/dashboard-sidebar.component'
import { BaThemePreloader, BaThemeSpinner } from '../theme/services';
import { AuthGuard } from '../auth.guard';


@NgModule({
  imports: [
    CommonModule,
    HeaderTwoLayoutRoutingModule
  ],
  declarations: [
    HeaderTwoLayoutComponent,
    HeaderTwoComponent,
    DashboardSidebarComponent,
  ],
   providers:[BaThemeSpinner,AuthGuard],
})
export class HeaderTwoLayoutModule { }
