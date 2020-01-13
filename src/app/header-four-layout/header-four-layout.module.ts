import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderFourLayoutRoutingModule } from './header-four-layout-routing.module';
import { HeaderFourLayoutComponent } from './header-four-layout.component';
import {HeaderfourComponent} from '../shared/headerfour/headerfour.component';
import { BaThemePreloader, BaThemeSpinner } from '../theme/services';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    HeaderFourLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
  	HeaderFourLayoutComponent,
  	HeaderfourComponent
  ],
   providers:[BaThemeSpinner]
})
export class HeaderFourLayoutModule { }
