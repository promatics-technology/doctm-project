import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateClinicComponent} from './rate-clinic.component'
import { RateClinicRoutingModule } from './rate-clinic-routing.module';
import { BarRatingModule } from "ngx-bar-rating";
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import { NgxStarsModule } from 'ngx-stars';
@NgModule({
  imports: [
    CommonModule,
    RateClinicRoutingModule,
    BarRatingModule,
    FormsModule,
	ReactiveFormsModule,
	NgxStarsModule
  ],
  declarations: [RateClinicComponent]
})
export class RateClinicModule { }
