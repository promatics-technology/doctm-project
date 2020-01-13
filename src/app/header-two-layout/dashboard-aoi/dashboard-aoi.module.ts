import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardAoiRoutingModule } from './dashboard-aoi-routing.module';
import { DashboardAoiComponent } from './dashboard-aoi.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardAoiRoutingModule,
    AgmCoreModule.forRoot({
      	// please get your own API key here:
      	// https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      	apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY'
  	})
  ],
  declarations: [DashboardAoiComponent]
})
export class DashboardAoiModule { }
