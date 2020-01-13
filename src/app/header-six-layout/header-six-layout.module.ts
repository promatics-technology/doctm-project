import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderSixLayoutRoutingModule } from './header-six-layout-routing.module';
import { HeaderSixLayoutComponent } from './header-six-layout.component';
import {HeadersixComponent} from '../shared/headersix/headersix.component';
import { BaThemePreloader, BaThemeSpinner } from '../theme/services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  imports: [
    CommonModule,
    HeaderSixLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule  	
  ],
  declarations: [
    HeaderSixLayoutComponent,
    HeadersixComponent
  ],
   providers:[BaThemeSpinner]
})
export class HeaderSixLayoutModule { }
