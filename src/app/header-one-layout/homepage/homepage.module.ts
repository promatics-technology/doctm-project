import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickModule } from 'ngx-slick';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { NgxStarsModule } from 'ngx-stars';
import { CustomPipesPipe } from '../../custom-pipes.pipe'

@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SlickModule,
    NgxStarsModule
    
  ],
  declarations: [HomepageComponent, CustomPipesPipe]
})
export class HomepageModule { }
