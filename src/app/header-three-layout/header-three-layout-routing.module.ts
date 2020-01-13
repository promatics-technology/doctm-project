import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderThreeLayoutComponent } from './header-three-layout.component';

const routes: Routes = [
    {
        path: '',
        component: HeaderThreeLayoutComponent,
        children: [
            { path: '', redirectTo: 'smartassistant' },
            { path: 'smartassistant', loadChildren: './smartassistant/smartassistant.module#SmartassistantModule' },
            { path: 'smartassistantnew', loadChildren: './smart-assistant-new-appointment/smart-assistant-new-appointment.module#SmartAssistantNewAppointmentModule' },
            { path: 'smartassistantregister', loadChildren: './smart-assistant-new-register/smart-assistant-new-register.module#SmartAssistantNewRegisterModule' },
            { path: 'smartassistantappointmentList', loadChildren: './appointment-list/appointment-list.module#AppointmentListModule' },
        ]
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderThreeLayoutRoutingModule { }
