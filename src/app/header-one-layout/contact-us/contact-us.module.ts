import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from'./contact-us.component'
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { SlickModule } from 'ngx-slick';
import { NgxStarsModule } from 'ngx-stars';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutingModule,
        SlickModule,
    NgxStarsModule,
    FormsModule,
ReactiveFormsModule
  ],
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }
