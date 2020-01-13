import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-assistant-new-appointment',
  templateUrl: './smart-assistant-new-appointment.component.html',
  styleUrls: ['./smart-assistant-new-appointment.component.css']
})
export class SmartAssistantNewAppointmentComponent implements OnInit {
	  date: Date = new Date();
ProfileDetail
settings = {
        bigBanner: true,
        timePicker: true,
        format: 'dd-MMM-yyyy hh:mm',
        defaultOpen: false
    }
  constructor() { }

  ngOnInit() {
  }

}
