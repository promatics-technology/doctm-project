import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

import { SmartassistantRoutingModule } from './smartassistant-routing.module';
import { SmartassistantComponent } from './smartassistant.component';
import { UserService } from '../../providers/user.service';
import {WebcamModule} from 'ngx-webcam';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatRadioModule } from '@angular/material';

@NgModule({
  imports: [
  	AgmCoreModule.forRoot({
       apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY',
       libraries: ["places"]
    }),
    CommonModule,
    FormsModule,
	AngularDateTimePickerModule,
    SmartassistantRoutingModule,
    WebcamModule,
    GooglePlaceModule,
    MatAutocompleteModule,
  	MatDialogModule,
  	NgbModule,
	MatRadioModule
  ],
  declarations: [SmartassistantComponent],
  providers:[UserService]
})
export class SmartassistantModule { }
