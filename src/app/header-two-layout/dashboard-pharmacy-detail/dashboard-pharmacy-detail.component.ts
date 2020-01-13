import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-pharmacy-detail',
  templateUrl: './dashboard-pharmacy-detail.component.html',
  styleUrls: ['./dashboard-pharmacy-detail.component.css']
})
export class DashboardPharmacyDetailComponent implements OnInit {

	activatedtab=0
	
  	constructor() { }

  	public lineChartData:Array<any> = [
	    {data: [5000, 5500, 6000, 6500, 7000, 7520, 8575], label: 'Total Sales'},
	    {data: [2500, 3000, 3500, 4000, 4500, 5000, 6500], label: 'Prescription Sales'},
	    {data: [500, 1000, 1200, 1800, 1900, 1999, 2075], label: 'Standalone Sales'}
  	];
  	public lineChartLabels:Array<any> = ['0', '4', '8', '12', '16', '20', '24'];
  	public lineChartOptions:any = {
	    responsive: true
  	};
  	public lineChartColors:Array<any> = [
	    { // grey
	      backgroundColor: 'rgba(148,159,177,0.2)',
	      borderColor: 'rgba(148,159,177,1)',
	      pointBackgroundColor: 'rgba(148,159,177,1)',
	      pointBorderColor: '#fff',
	      pointHoverBackgroundColor: '#fff',
	      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
	    },
	    { // dark grey
	      backgroundColor: 'rgba(77,83,96,0.2)',
	      borderColor: 'rgba(77,83,96,1)',
	      pointBackgroundColor: 'rgba(77,83,96,1)',
	      pointBorderColor: '#fff',
	      pointHoverBackgroundColor: '#fff',
	      pointHoverBorderColor: 'rgba(77,83,96,1)'
	    },
	    { // grey
	      backgroundColor: 'rgba(148,159,177,0.2)',
	      borderColor: 'rgba(148,159,177,1)',
	      pointBackgroundColor: 'rgba(148,159,177,1)',
	      pointBorderColor: '#fff',
	      pointHoverBackgroundColor: '#fff',
	      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
	    }
	];
  	public lineChartLegend:boolean = true;
  	public lineChartType:string = 'line';
	 
  	// events
	public chartClicked(e:any):void {
	    console.log(e);
	}
	 
	public chartHovered(e:any):void {
	    console.log(e);
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
  	ngOnInit() {
  	}

}
