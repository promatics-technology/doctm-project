import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaqDoctorComponent} from './faq-doctor.component'
import { FaqDoctorRoutingModule } from './faq-doctor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FaqDoctorRoutingModule
  ],
  declarations: [FaqDoctorComponent]
})
export class FaqDoctorModule { }
