import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderOneLayoutComponent} from './header-one-layout.component'
import {CanActivate} from "@angular/router";
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    {
        path: '',
        component: HeaderOneLayoutComponent,
        children: [
            { path: '', redirectTo: 'homepage' },
            { path: 'homepage', loadChildren: './homepage/homepage.module#HomepageModule',canActivate: [AuthGuard] },

            { path: 'login', loadChildren: './login/login.module#LoginModule',canActivate: [AuthGuard] },
            { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordModule',canActivate: [AuthGuard] },
            { path: 'forgot-password/:id', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule',canActivate: [AuthGuard] },
            { path: 'otp', loadChildren: './otp/otp.module#OtpModule',canActivate: [AuthGuard] },
            { path: 'smartClinicLogin', loadChildren: './smart-clinic-login/smart-clinic-login.module#SmartClinicLoginModule',canActivate: [AuthGuard] },
            { path: 'smartAssistantLogin', loadChildren: './smart-assistant-login/smart-assistant-login.module#SmartAssistantLoginModule',canActivate: [AuthGuard] },
            { path: 'smartPharmacyLogin', loadChildren: './smart-pharmacy-login/smart-pharmacy-login.module#SmartPharmacyLoginModule',canActivate: [AuthGuard] },
            { path: 'smartDiagnosticsLogin', loadChildren: './smart-diagnostics-login/smart-diagnostics-login.module#SmartDiagnosticsLoginModule',canActivate: [AuthGuard] },
            { path: 'smartIPDLogin', loadChildren: './smart-ipdlogin/smart-ipdlogin.module#SmartIpdloginModule',canActivate: [AuthGuard] },
            { path: 'signup', loadChildren: './signup-new/signup-new.module#SignupNewModule',canActivate: [AuthGuard] },
            { path: 'faq', loadChildren: './faq/faq.module#FaqModule',canActivate: [AuthGuard] },
            { path: 'pricing', loadChildren: './pricing/pricing.module#PricingModule',canActivate: [AuthGuard] },
            { path: 'privacy-policy', loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyModule',canActivate: [AuthGuard] },
            { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule',canActivate: [AuthGuard] },
            { path: 'term', loadChildren: './term/term.module#TermModule',canActivate: [AuthGuard] },
            { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule',canActivate: [AuthGuard] },
            { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialModule',canActivate: [AuthGuard] },
			{ path: 'smart-clinic-service', loadChildren: './smart-clinic-service/smart-clinic-service.module#SmartClinicServiceModule',canActivate: [AuthGuard] },
            { path: 'smart-assistant-service', loadChildren: './smart-assistant-service/smart-assistant-service.module#SmartAssistantServiceModule',canActivate: [AuthGuard] },
            { path: 'smart-pharmacy-service', loadChildren: './smart-pharmacy-service/smart-pharmacy-service.module#SmartPharmacyServiceModule',canActivate: [AuthGuard] },
            { path: 'smart-diagnostics-service', loadChildren: './smart-diagnostics-service/smart-diagnostics-service.module#SmartDiagnosticsServiceModule',canActivate: [AuthGuard] },
            { path: 'smart-ipd-service', loadChildren: './smart-ipd-service/smart-ipd-service.module#SmartIpdServiceModule',canActivate: [AuthGuard] },
           
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderOneLayoutRoutingModule { }
