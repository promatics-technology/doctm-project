import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareComponent} from './share.component'
import { ShareRoutingModule } from './share-routing.module';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import { NgxTinymceModule } from 'ngx-tinymce';
@NgModule({
    imports: [
    CommonModule,
    ShareRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    ],
    declarations: [ShareComponent]
})
export class ShareModule { }
