import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { TagInputModule } from 'ngx-chips';
import { AgmCoreModule } from '@agm/core';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../providers/user.service';
import { NativeDateAdapter } from '@angular/material'
import { MatNativeDateModule} from '@angular/material';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,
    EditProfileRoutingModule,
    FormsModule,
	ReactiveFormsModule,
	GooglePlaceModule,
	TagInputModule,
  NgbModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  AngularDateTimePickerModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatRadioModule,
	// AgmCoreModule.forRoot({
 //      apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY'
 //    })
    AgmCoreModule.forRoot({
           apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY',
           libraries: ["places"]
    })
  ],
  declarations: [EditProfileComponent],
  providers: [UserService,NativeDateAdapter]
})
export class EditProfileModule { }
