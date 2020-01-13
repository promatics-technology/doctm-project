import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(public router: Router,private route: ActivatedRoute){}

    canActivate(
	    next: ActivatedRouteSnapshot,
	    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
    {
		this.router.events.subscribe((event) => {
		    if (event instanceof NavigationEnd) {
		    	if (!localStorage.getItem('isLoggedinDoctor') && event.url.includes('/header-two-layout')){
		    		this.router.navigate(['/header-one-layout/homepage']);			    	
			    } else if (!localStorage.getItem('isLoggedinSmartAssistant') && event.url.includes('/header-three-layout')){
			    	this.router.navigate(['/header-one-layout/homepage']);			    	
			    } else if (!localStorage.getItem('isLoggedinSmartIpd') && event.url.includes('/header-four-layout')){
			    	this.router.navigate(['/header-one-layout/homepage']);			    	
			    } else if (!localStorage.getItem('isLoggedinSmartPharmacy') && event.url.includes('/header-five-layout')){
			    	this.router.navigate(['/header-one-layout/homepage']);			    	
			    } else if (!localStorage.getItem('isLoggedinSmartDiagnostics') && event.url.includes('/header-six-layout')){
			    	this.router.navigate(['/header-one-layout/homepage']);			    	
			    } else if(localStorage.getItem('isLoggedinSmartPharmacy')){
		    		var pharmacyData = JSON.parse(localStorage['smartPharmacyDetails'])
					if(pharmacyData.dataSmartPharmacy.address_filled == false){
						this.router.navigate(['/header-five-layout/pharmacy-detail']);
					}
				} else if(localStorage.getItem('isLoggedinSmartDiagnostics')){
		    		var diagnosticsData = JSON.parse(localStorage['smartDiagnosticsDetails'])
					if(diagnosticsData.dataSmartDiagnostics.address_filled == false){
						this.router.navigate(['/header-six-layout/diagnostic-detail']);
					}
				}



			  	// if (localStorage.getItem('isLoggedinDoctor')) {
			  	// 	if(event.url.includes('/header-three-layout') || event.url.includes('/header-four-layout') || event.url.includes('/header-five-layout') || event.url.includes('/header-six-layout')){
			   //          this.router.navigate(['/header-one-layout/homepage']);
			   //  	}
			   //  } else if (localStorage.getItem('isLoggedinSmartAssistant')){
			   //  	if(event.url.includes('/header-two-layout') || event.url.includes('/header-four-layout') || event.url.includes('/header-five-layout') || event.url.includes('/header-six-layout')){
			   //          this.router.navigate(['/header-one-layout/homepage']);
			   //  	}
			   //  } else if (localStorage.getItem('isLoggedinSmartIpd')){
			   //  	if(event.url.includes('/header-two-layout') || event.url.includes('/header-three-layout') || event.url.includes('/header-five-layout') || event.url.includes('/header-six-layout')){
			   //          this.router.navigate(['/header-one-layout/homepage']);
			   //  	}
			   //  } else if (localStorage.getItem('isLoggedinSmartPharmacy')){
			   //  	if(event.url.includes('/header-two-layout') || event.url.includes('/header-three-layout') || event.url.includes('/header-four-layout')|| event.url.includes('/header-six-layout')){
			   //          this.router.navigate(['/header-one-layout/homepage']);
			   //  	}else{
				  //   	var pharmacyData = JSON.parse(localStorage['smartPharmacyDetails'])
						// if(pharmacyData.dataSmartPharmacy.address_filled == false){
						// 	this.router.navigate(['/header-five-layout/pharmacy-detail']);
						// }
			   //  	} 
			   //  } else if (localStorage.getItem('isLoggedinSmartDiagnostics')){
			   //  	if(event.url.includes('/header-two-layout') || event.url.includes('/header-three-layout') ||event.url.includes('/header-four-layout') || event.url.includes('/header-five-layout')){
			   //          this.router.navigate(['/header-one-layout/homepage']);
			   //  	}
			   //  }
			   //  else {
			   //  	if(event.url.includes('/header-two-layout') || event.url.includes('/header-three-layout') || event.url.includes('/header-four-layout') || event.url.includes('/header-five-layout') || event.url.includes('/header-six-layout')){
			   //  		this.router.navigate(['/header-one-layout/homepage']);
			   //  	}
			   //  }
	        }
	    });
		return true;
	}
}
