import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartAssistantNewRegisterRoutingModule } from './smart-assistant-new-register-routing.module';
import { SmartAssistantNewRegisterComponent } from './smart-assistant-new-register.component'

@NgModule({
  imports: [
    CommonModule,
    SmartAssistantNewRegisterRoutingModule
  ],
  declarations: [SmartAssistantNewRegisterComponent]
})
export class SmartAssistantNewRegisterModule { }
