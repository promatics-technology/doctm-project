import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-dashboard-aoi',
  templateUrl: './dashboard-aoi.component.html',
  styleUrls: ['./dashboard-aoi.component.css']
})
export class DashboardAoiComponent implements OnInit {
	

	tableview:boolean;

	// google maps zoom level
  	zoom: number = 8;
  
  	// initial center position for the map
  	lat: number = 51.673858;
  	lng: number = 7.815982;

  	clickedMarker(label: string, index: number) {
    	console.log(`clicked the marker: ${label || index}`)
  	}
  
  	/*mapClicked($event: MouseEvent) {
	    this.markers.push({
      		lat: $event.coords.lat,
      		lng: $event.coords.lng,
      		draggable: true
		});
	}*/
  
  	markerDragEnd(m: marker, $event: MouseEvent) {
	    console.log('dragEnd', m, $event);
  	}
  
  	markers: marker[] = [
	  	{
		  	lat: 51.673858,
		  	lng: 7.815982,
		  	label: 'A',
		  	draggable: false
	  	},
	  	{
		  	lat: 51.373858,
		  	lng: 7.215982,
		  	label: 'B',
		  	draggable: false
	  	},
	  	{
		  	lat: 51.723858,
		  	lng: 7.895982,
		  	label: 'C',
		  	draggable: false
	  	}
  	]

  	constructor() { }

  	ngOnInit() {
  		this.tableview = false
  	}

  	tableView(){
  		if(this.tableview == true){
  			this.tableview = false
  		}else{
  			this.tableview = true
  		}
  	}

}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

