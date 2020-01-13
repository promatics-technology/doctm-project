import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import {CanActivate} from "@angular/router";
const routes: Routes = [
	{ path: '',redirectTo: 'header-one-layout' ,pathMatch:'full'},
	{ path: 'header-one-layout', loadChildren: './header-one-layout/header-one-layout.module#HeaderOneLayoutModule',canActivate: [AuthGuard] },
	{ path: 'header-two-layout', loadChildren: './header-two-layout/header-two-layout.module#HeaderTwoLayoutModule',canActivate: [AuthGuard] },
	{ path: 'header-three-layout', loadChildren: './header-three-layout/header-three-layout.module#HeaderThreeLayoutModule',canActivate: [AuthGuard] },
	{ path: 'header-four-layout', loadChildren: './header-four-layout/header-four-layout.module#HeaderFourLayoutModule',canActivate: [AuthGuard] },
	{ path: 'header-five-layout', loadChildren: './header-five-layout/header-five-layout.module#HeaderFiveLayoutModule',canActivate: [AuthGuard] },
	{ path: 'header-six-layout', loadChildren: './header-six-layout/header-six-layout.module#HeaderSixLayoutModule',canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
