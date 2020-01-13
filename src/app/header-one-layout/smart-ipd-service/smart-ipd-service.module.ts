import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartIpdServiceComponent } from './smart-ipd-service.component'
import { SmartIpdServiceRoutingModule } from './smart-ipd-service-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SmartIpdServiceRoutingModule
  ],
  declarations: [SmartIpdServiceComponent]
})
export class SmartIpdServiceModule { }
