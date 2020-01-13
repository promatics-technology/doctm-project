import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartAssistantServiceComponent } from './smart-assistant-service.component'
import { SmartAssistantServiceRoutingModule } from './smart-assistant-service-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SmartAssistantServiceRoutingModule
  ],
  declarations: [SmartAssistantServiceComponent]
})
export class SmartAssistantServiceModule { }
