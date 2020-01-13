import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AoiRoutingModule } from './aoi-routing.module';
import { AoiComponent } from './aoi.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AoiRoutingModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
           apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY',
           libraries: ["places"]
    })
  ],
  declarations: [AoiComponent]
})
export class AoiModule { }
