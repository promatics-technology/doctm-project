import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartPharmacyServiceRoutingModule } from './smart-pharmacy-service-routing.module';
import { SmartPharmacyServiceComponent } from './smart-pharmacy-service.component';

@NgModule({
  imports: [
    CommonModule,
    SmartPharmacyServiceRoutingModule
  ],
  declarations: [SmartPharmacyServiceComponent]
})
export class SmartPharmacyServiceModule { }
