import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


	hideElement: string;
  headerfive : boolean

  	
  	constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if (event.url.includes('/header-two-layout/dashboard-prescription-pad')) {
                    this.hideElement = 'none';
                }else{
                  this.hideElement = '';
                  // if (event.url.includes('/header-two-layout') || event.url.includes('/header-three-layout') ||  event.url.includes('/header-five-layout') || event.url.includes('/header-four-layout') || event.url.includes('/header-six-layout')) {
                    if (event.url.includes('/header-one-layout')){
                      this.headerfive = false
                    }else if(event.url.includes('/header-one-layout/faq')){
                      this.hideElement = 'none';
                      this.headerfive = false
                    }else{
                      this.headerfive = true
					     if(event.url!='/'){
                      this.hideElement = 'none';
						 }
                    }
                }
            }
        });
    }


  	ngOnInit() {
  	}

}
