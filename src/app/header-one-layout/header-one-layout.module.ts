import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderOneLayoutRoutingModule } from './header-one-layout-routing.module';
import { HeaderOneLayoutComponent } from './header-one-layout.component';
import {HeaderComponent} from '../shared/header/header.component';
import { BaThemePreloader, BaThemeSpinner } from '../theme/services';
import { UserService } from '../providers/user.service';

@NgModule({
  imports: [
    CommonModule,
    HeaderOneLayoutRoutingModule
  ],
  declarations: [
  HeaderOneLayoutComponent,
  HeaderComponent
  
  ],
  providers:[BaThemeSpinner,UserService]
})
export class HeaderOneLayoutModule { }
