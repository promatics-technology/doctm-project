import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EventSesrvice } from './event.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { DatePipe } from '@angular/common';
import { environment } from '../../../environments/environment.prod';
import * as io from "socket.io-client";
declare var $:any
@Component({
	selector: 'app-opd-holiday',
	templateUrl: './opd-holiday.component.html',
	styleUrls: ['./opd-holiday.component.css'],
	providers:[EventSesrvice]
})
export class OpdHolidayComponent implements OnInit {
	//calender
	@ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
	calendarOptions: Options;
	@ViewChild(CalendarComponent) ucCalendar1: CalendarComponent;
	calendarOptions1: Options;
	displayEvent: any;
	events = null;
	consultationType
	//calender
	clickOndate
	date = new Date()
	getHolidayList
	showListOfHoliday
	uniqueDates
	doctorData
	doctorScheduleHolidays
	dates=[]
	getDateforDelete
	needId
	getAllDates
	docHoliday
	socket
	constructor(private UserService: UserService, private toastr: ToastrService, private datePipe: DatePipe) {

	}
	ngOnInit() {
		this.getAllDates = []
		this.docHoliday = []
	//	$("td[data-date='2019-03-28']").css('background-color','red');
		this.doctorData = JSON.parse(localStorage['doctorDetails'])
		console.log(this.doctorData)
		this.socket = io(environment.socket)
		this.getHolidayList = []
		this.clickOndate = []
		this.socket.emit('room join',{
            room_id: this.doctorData.smart_assistant_id
        })  
		//this.openCalender()
		this.getOpdHolidays()
		

	}
	openCalender(){
		this.calendarOptions = {
			editable: true,
			eventLimit: false,
			selectable: true,
			eventColor: '#000',

			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month'
			},
		};

			//console.log(events)
			$("#CalendarOpen").modal("show");
		}
		dayClick(day){	
			//$("#appointmentCalenderApntList").modal("hide");
	}

	clickButton(model: any) {
		this.displayEvent = model;

		// console.log(this.displayEvent)
	}
	eventClick(model: any) {
		model = {
			event: {
				id: model.event.id,
				start: model.event.start,
				end: model.event.end,
				title: model.event.title,
				allDay: model.event.allDay
				// other params
			},
			duration: {}
		}
		this.displayEvent = model;
		// console.log(this.displayEvent)
		// console.log(this.clickOndate)
	}
	updateEvent(model: any) {
		model = {
			event: {
				id: model.event.id,
				start: model.event.start,
				end: model.event.end,
				title: model.event.title
				// other params
			},
			duration: {
				_data: model.duration._data
			}
		}
		this.displayEvent = model;
		// console.log(this.displayEvent)
		// console.log(this.clickOndate)
	}	

	// select(event){
	// 	// 
	// 	alert("s")
	// 	for (var i = 0; i < this.getHolidayList.length; i++) {
	// 		if(this.datePipe.transform(this.getHolidayList[i], 'dd-MM-yyyy') == this.datePipe.transform(event.start._d, 'dd-MM-yyyy')){
	// 			this.toastr.warning('This day is already holiday', 'Warning');
	// 			return
	// 		}
	// 	}
	// 	this.clickOndate.push(event.start._d)
	// 	console.log(this.clickOndate)
	// 	function isDateInArray(needle, haystack) {
	// 		for (var i = 0; i < haystack.length; i++) {
	// 			if (needle.getTime() === haystack[i].getTime()) {
	// 				return true;
	// 			}
	// 		}
	// 		return false;
	// 	}
	// 	for (var i = 0; i < this.clickOndate.length; i++) {
	// 		if (!isDateInArray(this.clickOndate[i], this.uniqueDates)) {
	// 			this.uniqueDates.push(this.clickOndate[i]);
	// 		}
	// 	}

	// 	console.log(this.uniqueDates);
	// }

	// unselect(event){
	// 	console.log(event)
	// }

	clickButton1(model: any) {
		this.displayEvent = model;

		// console.log(this.displayEvent)
	}

	eventClick1(model: any, call:any) {
		// console.log('lazaaaaaaaaaaaaaaaaaaaaa');
		// console.log(model)
		// console.log(model.event.start._i)
		// console.log('lazaaaaaaaaaaaaaaaaaaaaa',m "abcdabcdabcd", event)
		if(model == 2){
			console.log('lazaaaaaaaaaaaaaaaaaaaaa', call)
			
		}
		console.log(call)
		model = {
			event: {
				id: model.event.id,
				start: model.event.start,
				end: model.event.end,
				title: model.event.title,
				allDay: model.event.allDay
				// other params
			},
			duration: {}
		}
		this.displayEvent = model;
		var id
		for (var i = 0; i < this.showListOfHoliday.length; i++) {
			if(this.showListOfHoliday[i].start == model.event.start._i){
				// $("td[data-date='"+this.showListOfHoliday[i].start+"']").css('background-color','white');
				id = this.showListOfHoliday[i].id
			}
		}
		this.UserService.DeleteOpdHoliday(id).subscribe(data => {
			console.log(data)

			if(data.response){
				this.socket.emit('opdHoliday',{
                    room_id: this.doctorData.smart_assistant_id
                })
				this.toastr.success(data.message, 'Success')
				this.ngOnInit()
			}else{
				this.toastr.error(data.message, 'Error')
			}
		},err=>{

			console.log(err)
		})

	}
	updateEvent1(model: any) {
		console.log(model);
		model = {
			event: {
				id:"1",
				start: model.start,
				end: model.end,
				title:"Closed"
				// other params
			},
			duration: {
				_data:'02:15'
			}
		}
		this.displayEvent = model;
		// console.log(this.displayEvent)
		// console.log(this.clickOndate)
	}	

	select1(event){
		
		var date
		console.log( event.start._d)
		this.getDateforDelete =event.start._d
		var today = new Date()
        // console.log(today, "sdsd", event.start._d)
        if(today.setHours(0,0,0,0) >= event.start._d.setHours(0,0,0,0)){
        	this.toastr.warning('Holiday cant be booked for past dates', 'Warning');
				return
        }
		
		var ob = {
			date: event.start._d.setDate(event.start._d.getDate() + 1),
			doctor_id: this.doctorData._id
		}
		//console.log(event.start);
		//alert(event.start);
		var date_formatted=event.start._d;
		date_formatted.setDate(date_formatted.getDate() - 1);
		//alert(this.formatDate(date_formatted));		
		var holiday_list=this.showListOfHoliday;
		var newId
	//	declare var Slick: any;

		// $("td[data-date='"+this.formatDate(date_formatted)+"']").on('click', (e, value)=> {
			for (var i = 0; i < holiday_list.length; i++) {
				//console.log(new Date(holiday_list[i].start).setHours(0,0,0,0) , date_formatted.setHours(0,0,0,0))
				if(new Date(holiday_list[i].start).setHours(0,0,0,0) == date_formatted.setHours(0,0,0,0)){
					console.log(holiday_list[i].id)		
					this.needId = holiday_list[i].id
					newId = holiday_list[i].id
					const returnedTarget = Object.assign(newId,  holiday_list[i].id);			
					//Object.defineProperty(obj, 'newId', {value:  holiday_list[i].id});
				}
				// return
			}
		// });
		
		console.log(newId);
		// this.UserService.DeleteOpdHoliday(id).subscribe(data => {
		// 	console.log(data)

		// 	if(data.response){
		// 		this.toastr.success(data.message, 'Success')
		// 		this.ngOnInit()
		// 	}else{
		// 		this.toastr.error(data.message, 'Error')
		// 	}
		// },err=>{

		// 	console.log(err)
		// })
		
        for (var i = 0; i < this.showListOfHoliday.length; i++) {
        	if(this.datePipe.transform(new Date(this.showListOfHoliday[i].start).setHours(0,0,0,0), 'dd-MM-yyyy') == this.datePipe.transform(new Date(event.start._d).setHours(0,0,0,0), 'dd-MM-yyyy')){
        		this.toastr.warning('Already holiday', 'Warning');
				return
        	}
        }
		console.log(ob)
      	this.UserService.SetOpdHolday(ob).subscribe(data => {
			console.log(data)
			if(data.response){
				this.socket.emit('opdHoliday',{
                    room_id: this.doctorData.smart_assistant_id
                })
				this.toastr.success(data.message, 'Success')
				this.ngOnInit()
			}else{
				this.toastr.error(data.message, 'Error')
			}
		},err=>{

			console.log(err)
		})
	}
	abcd(id){
		console.log(id)

	}

	// unselect1(event){
	// 	console.log(event)
	// 	alert("unselect")
	// }
	// setHoliday(){
	// 	if(this.uniqueDates == '' || this.uniqueDates == undefined || this.uniqueDates == null){
	// 		this.toastr.warning('Please select date' ,'Warning')
	// 		return
	// 	}
	// 	var ob = {
	// 		date:this.uniqueDates
	// 	}
	// 	this.UserService.SetOpdHolday(ob).subscribe(data => {
	// 		console.log(data)
	// 		if(data.response){
	// 			this.toastr.success(data.message, 'Success')
	// 			this.ngOnInit()
	// 		}else{
	// 			this.toastr.error(data.message, 'Error')
	// 		}
	// 	},err=>{

	// 		console.log(err)
	// 	})
	// }
	selectHoliday(event){
		console.log(event)
		alert('test');
	}

	formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

	getOpdHolidays(){
		this.showListOfHoliday = []
		   var ob={doctor_id: this.doctorData._id};
		    this.UserService.GetOpdHoliday(ob).subscribe(data => {
			console.log(data)	
			this.dates=[]
			this.dates=data.data;
			for (var i = 0; i < data.data.length; i++) {
				
				this.showListOfHoliday.push({
					start : new Date(data.data[i].date).toJSON().toString().substr(0,10),
					title : 'Closed',
					id : data.data[i].id,
					textColor: 'grey',
					color: 'white'

					//rendering: 'background'
					//time : data.data[i].time
				})
			
			}			
				
			console.log(this.showListOfHoliday)
			
			this.events = this.showListOfHoliday



	
			this.calendarOptions1 = {
				//editable: true,
				//eventLimit: false,
				selectable: true,
				header: {
					left: 'prev,next today',
					center: 'title',
					right: ''

				},
				events: this.showListOfHoliday
				};
			// $("#appointmentCalenderApntList").modal("show");



			if(data.response){
				this.toastr.success(data.message, 'Success')

			}else{
				this.toastr.error(data.message, 'Error')
			}
			this.checkHoliday()
		},err=>{

			console.log(err)
		})
}
		
	viewCalender(){
		$("#appointmentCalenderApntList").modal("show");

		for (var i = 0; i < this.dates.length; i++) {	
			//alert(this.dates[i].date.split('T')[0]);
			//var newABCD = this.getDateforDelete.setHours(0,0,0,0)

			//if(this.getDateforDelete == this.dates[i].date){
				var selected_date=this.dates[i].id;
			//}
			// $("td[data-date='"+this.dates[i].date.split('T')[0]+"']").click(function(){
				//console.log(this.dates[i])
				// console.log("bumba")
				// console.log(selected_date);
				// this.UserService.DeleteOpdHoliday().subscribe(data => {
				// 	console.log(data)

				// 	if(data.response){
				// 		this.toastr.success(data.message, 'Success')
				// 		this.ngOnInit()
				// 	}else{
				// 		this.toastr.error(data.message, 'Error')
				// 	}
				// },err=>{

				// 	console.log(err)
				// })
			// });

			// $("td[data-date='"+this.dates[i].date.split('T')[0]+"']").css('background-color','#FFB347');
		}
	}
	// dayEvent(event){
	// 	//event = backend.event;
	//    this.calendarOptions1.events = event;
	//    $('#myCalendar').fullCalendar('renderEvents', event, true);
	// 	console.log(event)
	// }
	
	checkHoliday(){
		var true_days=[];
		this.doctorScheduleHolidays = []
		for (var i = 0; i < this.doctorData.consultation_schedule.length; i++) {
			
			if(!this.doctorData.consultation_schedule[i].Sunday){
				if(this.doctorScheduleHolidays.indexOf('Sunday') ==-1){
				this.doctorScheduleHolidays.push('Sunday')
				}
			}else{
				if(true_days.indexOf('Sunday')==-1){
				true_days.push('Sunday');
				}
			}
			if(!this.doctorData.consultation_schedule[i].Monday){
				if(this.doctorScheduleHolidays.indexOf('Monday') ==-1){
				this.doctorScheduleHolidays.push('Monday')
				}
			}else{
				if(true_days.indexOf('Monday')==-1){
				true_days.push('Monday');
				}
			}
			if(!this.doctorData.consultation_schedule[i].Tuesday){
				if(this.doctorScheduleHolidays.indexOf('Tuesday') ==-1){
				this.doctorScheduleHolidays.push('Tuesday')
				}
			}else{
				if(true_days.indexOf('Tuesday')==-1){
				true_days.push('Tuesday');
				}
			}
			if(!this.doctorData.consultation_schedule[i].Wednesday){
				if(this.doctorScheduleHolidays.indexOf('Wednesday') ==-1){
				this.doctorScheduleHolidays.push('Wednesday')
				}
			}else{
				if(true_days.indexOf('Wednesday')==-1){
				true_days.push('Wednesday');
				}
			}
			if(!this.doctorData.consultation_schedule[i].Thursday){
			if(this.doctorScheduleHolidays.indexOf('Thursday') ==-1){
				this.doctorScheduleHolidays.push('Thursday')
			}
			}else{
				if(true_days.indexOf('Thursday')==-1){
				true_days.push('Thursday');
				}
			}
			if(!this.doctorData.consultation_schedule[i].Friday){
				if(this.doctorScheduleHolidays.indexOf('Friday') ==-1){
				this.doctorScheduleHolidays.push('Friday')
				}
			}else{
				if(true_days.indexOf('Friday')==-1){
				true_days.push('Friday');
				}
			}
			if(!this.doctorData.consultation_schedule[i].Saturday){
				if(this.doctorScheduleHolidays.indexOf('Saturday') ==-1){
				this.doctorScheduleHolidays.push('Saturday')
				}
			}else{
				if(true_days.indexOf('Saturday')==-1){
				true_days.push('Saturday');
				}
			}
		}
		
		for(var l=0; l<true_days.length; l++){
			if(this.doctorScheduleHolidays.indexOf(true_days[l])!=-1){
				var index = this.doctorScheduleHolidays.indexOf(true_days[l]);
				
				  this.doctorScheduleHolidays.splice(index, 1);
				
			}
		}
		  
        	var date = new Date()
   			this.getDaysInMonth(date.getMonth(), date.getFullYear())
   			var arr = []
   			var newDate = new Date()

   			//console.log(this.getAllDates.setDate(newDate.getDate()+1))
   			for (var i = 0; i < this.doctorScheduleHolidays.length; i++) {
   				for (var j = 0; j < this.getAllDates.length; j++) {	
   					if(this.doctorScheduleHolidays[i] == this.datePipe.transform(this.getAllDates[j], 'EEEE')){
   						if (!this.showListOfHoliday.some(e => e.start == this.datePipe.transform(this.getAllDates[j], 'yyyy-MM-dd'))){
   						arr.push({
   							// start: new Date(this.getAllDates[j]).toJSON().toString().substr(0,10),
   							start: this.datePipe.transform(this.getAllDates[j], 'yyyy-MM-dd'),
							title : 'Closed',
							id : 1,
							textColor: 'grey',
							color: 'white'
   						})
					}
   					}
   				}
   			}

   			// console.log(arr2)
   			Array.prototype.push.apply(this.showListOfHoliday,arr); 
   			//this.showListOfHoliday.concat(arr)
   			console.log(this.showListOfHoliday)
   			//console.log(this.docHoliday)
			

	}
	getDaysInMonth(month, year) {
         var date = new Date(year, month, 1);
         this.getAllDates = [];
         while (date.getMonth() === month) {
            this.getAllDates.push(new Date(date));
            date.setDate(date.getDate()+1);
         }
         return this.getAllDates;
    }

}
