import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpdRoutingModule } from './opd-routing.module';
import { OpdComponent } from './opd.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    OpdRoutingModule,
    ChartsModule
  ],
  declarations: [OpdComponent]
})
export class OpdModule { }
