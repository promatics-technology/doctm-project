import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartDiagnosticsServiceRoutingModule } from './smart-diagnostics-service-routing.module';
import { SmartDiagnosticsServiceComponent } from './smart-diagnostics-service.component';

@NgModule({
  imports: [
    CommonModule,
    SmartDiagnosticsServiceRoutingModule
  ],
  declarations: [SmartDiagnosticsServiceComponent]
})
export class SmartDiagnosticsServiceModule { }
