import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderThreeLayoutRoutingModule } from './header-three-layout-routing.module';
import { HeaderThreeLayoutComponent } from './header-three-layout.component';
import {HeaderthreeComponent} from '../shared/headerthree/headerthree.component';
import { BaThemePreloader, BaThemeSpinner } from '../theme/services';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { UserService } from '../providers/user.service';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {WebcamModule} from 'ngx-webcam';
import { FullCalendarModule } from 'ng-fullcalendar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatRadioModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HeaderThreeLayoutRoutingModule,
    FormsModule,
    AngularDateTimePickerModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
           apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY',
           libraries: ["places"]
    }),
    MatAutocompleteModule,
	MatRadioModule,
    WebcamModule,
    FullCalendarModule,
    NgbModule
  ],
  declarations: [
  	HeaderThreeLayoutComponent,
  	HeaderthreeComponent,
  	// SmartAssistantNewAppointmentComponent
  ],
  providers:[BaThemeSpinner,UserService]
})
export class HeaderThreeLayoutModule { }
