import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartClinicServiceComponent } from './smart-clinic-service.component'

import { SmartClinicServiceRoutingModule } from './smart-clinic-service-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SmartClinicServiceRoutingModule
  ],
  declarations: [SmartClinicServiceComponent]
})
export class SmartClinicServiceModule { }
