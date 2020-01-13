import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteToUsComponent } from './write-to-us.component';
import { WriteToUsRoutingModule } from './write-to-us-routing.module';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    WriteToUsRoutingModule,
    FormsModule,
	ReactiveFormsModule,
  ],
  declarations: [WriteToUsComponent]
})
export class WriteToUsModule { }
