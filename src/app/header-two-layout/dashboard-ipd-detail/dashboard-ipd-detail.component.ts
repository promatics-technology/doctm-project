import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-ipd-detail',
  templateUrl: './dashboard-ipd-detail.component.html',
  styleUrls: ['./dashboard-ipd-detail.component.css']
})
export class DashboardIpdDetailComponent implements OnInit {

	activatedtab=0
	date: Date = new Date();
    settings = {
        bigBanner: true,
        timePicker: true,
        format: 'dd-MMM-yyyy hh:mm a',
        defaultOpen: false
    }
    
  	constructor() { }

  	ngOnInit() {
  	}

  	activatetab(i){
		this.activatedtab=i
	}
	getClass(i){
		if (i==this.activatedtab) {
			return 'active'
		}else if (i<this.activatedtab) {
			return 'completed'
		}

	}
}
