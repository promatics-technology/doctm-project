import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderFiveLayoutRoutingModule } from './header-five-layout-routing.module';
import { HeaderFiveLayoutComponent } from './header-five-layout.component';
import {HeaderfiveComponent} from '../shared/headerfive/headerfive.component';
import { BaThemePreloader, BaThemeSpinner } from '../theme/services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    HeaderFiveLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
  	HeaderFiveLayoutComponent,
  	HeaderfiveComponent
  ],
   providers:[BaThemeSpinner]
})
export class HeaderFiveLayoutModule { }
