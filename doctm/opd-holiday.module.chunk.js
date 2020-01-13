webpackJsonp(["opd-holiday.module"],{

/***/ "../../../../../src/app/header-two-layout/opd-holiday/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSesrvice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs-compat/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs-compat/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventSesrvice = /** @class */ (function () {
    function EventSesrvice() {
    }
    EventSesrvice.prototype.getEvents = function () {
        var dateObj = new Date();
        var yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
        var data = [{
                title: 'All Day Event',
                start: yearMonth + '-01'
            },
            {
                title: 'Long Event',
                start: yearMonth + '-07',
                end: yearMonth + '-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: yearMonth + '-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: yearMonth + '-16T16:00:00'
            },
            {
                title: 'Conference',
                start: yearMonth + '-11',
                end: yearMonth + '-13'
            },
            {
                title: 'Meeting',
                start: yearMonth + '-12T10:30:00',
                end: yearMonth + '-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: yearMonth + '-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: yearMonth + '-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: yearMonth + '-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: yearMonth + '-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: yearMonth + '-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: yearMonth + '-28'
            }];
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(data);
    };
    EventSesrvice = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], EventSesrvice);
    return EventSesrvice;
}());

;


/***/ }),

/***/ "../../../../../src/app/header-two-layout/opd-holiday/opd-holiday-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpdHolidayRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opd_holiday_component__ = __webpack_require__("../../../../../src/app/header-two-layout/opd-holiday/opd-holiday.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__opd_holiday_component__["a" /* OpdHolidayComponent */]
    }
];
var OpdHolidayRoutingModule = /** @class */ (function () {
    function OpdHolidayRoutingModule() {
    }
    OpdHolidayRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], OpdHolidayRoutingModule);
    return OpdHolidayRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/opd-holiday/opd-holiday.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tb-pd-hi tr td{\n    padding: 10px 8px;\n    vertical-align: middle;\n}\n.evn {\n    background-color: #eff3ef;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/opd-holiday/opd-holiday.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n            <br>\n            <button (click)=\"viewCalender()\" style=\"margin-left: 33em;\" class=\"btn btn-custom\">Set OPD Holidays</button>\n            <h4><b>List of holidays</b></h4>\n        </div>\n\t\t\n        <div class=\"col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12\">\n               <br>\n            <div>\n                <div class=\"\">\n                    <table class=\"table tb-1 tb-pd-hi\">\n                        <tbody >\n                            <tr class=\"\">\n                                <td class=\"text-left\" width=\"33%\"><h4>Sr no.</h4></td>\n                                <td  class=\"text-center\" width=\"33%\"><h4>\n                                        Day\n                                </h4></td>\n                                <td class=\"text-right\" width=\"33%\"><h4>\n                                  Date\n                                </h4></td>\n                            </tr>\n                            <tr class=\"evn\" *ngFor = \"let list of showListOfHoliday ;let i = index\">\n                                <td class=\"text-left\" width=\"33%\"><h4>{{i+1}}.</h4></td>\n                                <td class=\"text-center\" width=\"33%\"><h4>\n                                    {{list.start | date: 'EEEE'}}\n                                </h4></td>\n                                <td  class=\"text-right\" width=\"33%\"><h4>\n                                  {{list.start | date: 'dd/MM/yyyy'}}\n                                </h4></td>\n                            </tr>\n                           \n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- <div class=\"modal fade cus-modal\" id=\"CalendarOpen\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\" *ngIf=\"calendarOptions\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4>Set Holiday</h4>\n               \n            </div>\n            <div class=\"modal-body\">\n                <div *ngIf=\"calendarOptions\"  id=\"calendar\">\n                    <a href=\"javascript:void(0)\" class=\"cstm-calender-opt\"  id=\"calendar\">\n                         <ng-fullcalendar  #ucCalendar [options]=\"calendarOptions\" (eventClick)=\"eventClick1($event.detail)\" (eventDrop)=\"updateEvent1($event.detail)\"\n                        (eventResize)=\"updateEvent1($event.detail)\" (clickButton)=\"clickButton1($event.detail)\" (select)=\"updateEvent1($event.detail)\"  [(eventsModel)]=\"events1\" (unselect)=\"unselect1($event.detail)\"></ng-fullcalendar>\n                    </a>\n                </div>\n            </div>\n            <button class=\"btn btn-custom\" style=\"margin-left: 9em;\" (click) = \"setHoliday()\">save</button>\n            <br>\n        </div>\n    </div>\n</div> -->\n<!-- <div class=\"footer\">\n    <button (click)=\"viewCalender()\" style=\"margin-left: 33em;\" class=\"btn btn-custom\">View Holidays</button>\n</div> -->\n<!-- \n<div *ngIf=\"calendarOptions1\">\n                    <a href=\"javascript:void(0)\" class=\"cstm-calender-opt\">\n                         <ng-fullcalendar #ucCalendar [options]=\"calendarOptions1\" (eventClick)=\"eventClick($event.detail)\" (eventDrop)=\"updateEvent($event.detail)\"\n        (eventResize)=\"updateEvent($event.detail)\" (clickButton)=\"clickButton($event.detail)\"></ng-fullcalendar>\n                    </a>\n                </div> -->\n\n                <!-- appointmeny calender model --> \n<div class=\"modal fade cus-modal\" id=\"appointmentCalenderApntList\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\" *ngIf=\"calendarOptions1\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4>Click date to set OPD holiday, double click to remove</h4>\n                <!-- <h4 class=\"modal-title\"> Registration Form </h4> -->\n            </div>\n            <div class=\"modal-body\">\n                <div *ngIf=\"calendarOptions1\">\n                    <a href=\"javascript:void(0)\" class=\"cstm-calender-opt\">\n                        <ng-fullcalendar #ucCalendar1 [options]=\"calendarOptions1\" (eventDrop)=\"updateEvent($event.detail)\" (eventResize)=\"updateEvent($event.detail)\" (clickButton)=\"clickButton($event.detail)\" (select)=\"select1($event.detail)\" (eventClick)=\"eventClick1($event.detail, $event.detail)\" (dblclick) = \"eventClick1($event.detail)\" [(eventsModel)]=\"events\"></ng-fullcalendar>\n                    </a>\n                </div>\n            </div>\n            <!-- <button class=\"btn btn-custom\" style=\"margin-left: 9em;\" (click) = \"setHoliday()\">save</button> -->\n        </div>\n    </div>\n</div>\n\n<!-- <div class=\"footer\">\n    <button (click)=\"viewCalender()\" style=\"margin-left: 33em;\" class=\"btn btn-custom\">View Holidays</button>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/opd-holiday/opd-holiday.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpdHolidayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_fullcalendar__ = __webpack_require__("../../../../ng-fullcalendar/ng-fullcalendar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_service__ = __webpack_require__("../../../../../src/app/header-two-layout/opd-holiday/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OpdHolidayComponent = /** @class */ (function () {
    function OpdHolidayComponent(UserService, toastr, datePipe) {
        this.UserService = UserService;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.events = null;
        this.date = new Date();
        this.dates = [];
    }
    OpdHolidayComponent.prototype.ngOnInit = function () {
        this.getAllDates = [];
        this.docHoliday = [];
        //	$("td[data-date='2019-03-28']").css('background-color','red');
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        this.socket = __WEBPACK_IMPORTED_MODULE_7_socket_io_client__(__WEBPACK_IMPORTED_MODULE_6__environments_environment_prod__["a" /* environment */].socket);
        this.getHolidayList = [];
        this.clickOndate = [];
        this.socket.emit('room join', {
            room_id: this.doctorData.smart_assistant_id
        });
        //this.openCalender()
        this.getOpdHolidays();
    };
    OpdHolidayComponent.prototype.openCalender = function () {
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
    };
    OpdHolidayComponent.prototype.dayClick = function (day) {
        //$("#appointmentCalenderApntList").modal("hide");
    };
    OpdHolidayComponent.prototype.clickButton = function (model) {
        this.displayEvent = model;
        // console.log(this.displayEvent)
    };
    OpdHolidayComponent.prototype.eventClick = function (model) {
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
        };
        this.displayEvent = model;
        // console.log(this.displayEvent)
        // console.log(this.clickOndate)
    };
    OpdHolidayComponent.prototype.updateEvent = function (model) {
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
        };
        this.displayEvent = model;
        // console.log(this.displayEvent)
        // console.log(this.clickOndate)
    };
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
    OpdHolidayComponent.prototype.clickButton1 = function (model) {
        this.displayEvent = model;
        // console.log(this.displayEvent)
    };
    OpdHolidayComponent.prototype.eventClick1 = function (model, call) {
        var _this = this;
        // console.log('lazaaaaaaaaaaaaaaaaaaaaa');
        // console.log(model)
        // console.log(model.event.start._i)
        // console.log('lazaaaaaaaaaaaaaaaaaaaaa',m "abcdabcdabcd", event)
        if (model == 2) {
            console.log('lazaaaaaaaaaaaaaaaaaaaaa', call);
        }
        console.log(call);
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
        };
        this.displayEvent = model;
        var id;
        for (var i = 0; i < this.showListOfHoliday.length; i++) {
            if (this.showListOfHoliday[i].start == model.event.start._i) {
                // $("td[data-date='"+this.showListOfHoliday[i].start+"']").css('background-color','white');
                id = this.showListOfHoliday[i].id;
            }
        }
        this.UserService.DeleteOpdHoliday(id).subscribe(function (data) {
            console.log(data);
            if (data.response) {
                _this.socket.emit('opdHoliday', {
                    room_id: _this.doctorData.smart_assistant_id
                });
                _this.toastr.success(data.message, 'Success');
                _this.ngOnInit();
            }
            else {
                _this.toastr.error(data.message, 'Error');
            }
        }, function (err) {
            console.log(err);
        });
    };
    OpdHolidayComponent.prototype.updateEvent1 = function (model) {
        console.log(model);
        model = {
            event: {
                id: "1",
                start: model.start,
                end: model.end,
                title: "Closed"
                // other params
            },
            duration: {
                _data: '02:15'
            }
        };
        this.displayEvent = model;
        // console.log(this.displayEvent)
        // console.log(this.clickOndate)
    };
    OpdHolidayComponent.prototype.select1 = function (event) {
        var _this = this;
        var date;
        console.log(event.start._d);
        this.getDateforDelete = event.start._d;
        var today = new Date();
        // console.log(today, "sdsd", event.start._d)
        if (today.setHours(0, 0, 0, 0) >= event.start._d.setHours(0, 0, 0, 0)) {
            this.toastr.warning('Holiday cant be booked for past dates', 'Warning');
            return;
        }
        var ob = {
            date: event.start._d.setDate(event.start._d.getDate() + 1),
            doctor_id: this.doctorData._id
        };
        //console.log(event.start);
        //alert(event.start);
        var date_formatted = event.start._d;
        date_formatted.setDate(date_formatted.getDate() - 1);
        //alert(this.formatDate(date_formatted));		
        var holiday_list = this.showListOfHoliday;
        var newId;
        //	declare var Slick: any;
        // $("td[data-date='"+this.formatDate(date_formatted)+"']").on('click', (e, value)=> {
        for (var i = 0; i < holiday_list.length; i++) {
            //console.log(new Date(holiday_list[i].start).setHours(0,0,0,0) , date_formatted.setHours(0,0,0,0))
            if (new Date(holiday_list[i].start).setHours(0, 0, 0, 0) == date_formatted.setHours(0, 0, 0, 0)) {
                console.log(holiday_list[i].id);
                this.needId = holiday_list[i].id;
                newId = holiday_list[i].id;
                var returnedTarget = Object.assign(newId, holiday_list[i].id);
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
            if (this.datePipe.transform(new Date(this.showListOfHoliday[i].start).setHours(0, 0, 0, 0), 'dd-MM-yyyy') == this.datePipe.transform(new Date(event.start._d).setHours(0, 0, 0, 0), 'dd-MM-yyyy')) {
                this.toastr.warning('Already holiday', 'Warning');
                return;
            }
        }
        console.log(ob);
        this.UserService.SetOpdHolday(ob).subscribe(function (data) {
            console.log(data);
            if (data.response) {
                _this.socket.emit('opdHoliday', {
                    room_id: _this.doctorData.smart_assistant_id
                });
                _this.toastr.success(data.message, 'Success');
                _this.ngOnInit();
            }
            else {
                _this.toastr.error(data.message, 'Error');
            }
        }, function (err) {
            console.log(err);
        });
    };
    OpdHolidayComponent.prototype.abcd = function (id) {
        console.log(id);
    };
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
    OpdHolidayComponent.prototype.selectHoliday = function (event) {
        console.log(event);
        alert('test');
    };
    OpdHolidayComponent.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    OpdHolidayComponent.prototype.getOpdHolidays = function () {
        var _this = this;
        this.showListOfHoliday = [];
        var ob = { doctor_id: this.doctorData._id };
        this.UserService.GetOpdHoliday(ob).subscribe(function (data) {
            console.log(data);
            _this.dates = [];
            _this.dates = data.data;
            for (var i = 0; i < data.data.length; i++) {
                _this.showListOfHoliday.push({
                    start: new Date(data.data[i].date).toJSON().toString().substr(0, 10),
                    title: 'Closed',
                    id: data.data[i].id,
                    textColor: 'grey',
                    color: 'white'
                    //rendering: 'background'
                    //time : data.data[i].time
                });
            }
            console.log(_this.showListOfHoliday);
            _this.events = _this.showListOfHoliday;
            _this.calendarOptions1 = {
                //editable: true,
                //eventLimit: false,
                selectable: true,
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: ''
                },
                events: _this.showListOfHoliday
            };
            // $("#appointmentCalenderApntList").modal("show");
            if (data.response) {
                _this.toastr.success(data.message, 'Success');
            }
            else {
                _this.toastr.error(data.message, 'Error');
            }
            _this.checkHoliday();
        }, function (err) {
            console.log(err);
        });
    };
    OpdHolidayComponent.prototype.viewCalender = function () {
        $("#appointmentCalenderApntList").modal("show");
        for (var i = 0; i < this.dates.length; i++) {
            //alert(this.dates[i].date.split('T')[0]);
            //var newABCD = this.getDateforDelete.setHours(0,0,0,0)
            //if(this.getDateforDelete == this.dates[i].date){
            var selected_date = this.dates[i].id;
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
    };
    // dayEvent(event){
    // 	//event = backend.event;
    //    this.calendarOptions1.events = event;
    //    $('#myCalendar').fullCalendar('renderEvents', event, true);
    // 	console.log(event)
    // }
    OpdHolidayComponent.prototype.checkHoliday = function () {
        var _this = this;
        var true_days = [];
        this.doctorScheduleHolidays = [];
        for (var i = 0; i < this.doctorData.consultation_schedule.length; i++) {
            if (!this.doctorData.consultation_schedule[i].Sunday) {
                if (this.doctorScheduleHolidays.indexOf('Sunday') == -1) {
                    this.doctorScheduleHolidays.push('Sunday');
                }
            }
            else {
                if (true_days.indexOf('Sunday') == -1) {
                    true_days.push('Sunday');
                }
            }
            if (!this.doctorData.consultation_schedule[i].Monday) {
                if (this.doctorScheduleHolidays.indexOf('Monday') == -1) {
                    this.doctorScheduleHolidays.push('Monday');
                }
            }
            else {
                if (true_days.indexOf('Monday') == -1) {
                    true_days.push('Monday');
                }
            }
            if (!this.doctorData.consultation_schedule[i].Tuesday) {
                if (this.doctorScheduleHolidays.indexOf('Tuesday') == -1) {
                    this.doctorScheduleHolidays.push('Tuesday');
                }
            }
            else {
                if (true_days.indexOf('Tuesday') == -1) {
                    true_days.push('Tuesday');
                }
            }
            if (!this.doctorData.consultation_schedule[i].Wednesday) {
                if (this.doctorScheduleHolidays.indexOf('Wednesday') == -1) {
                    this.doctorScheduleHolidays.push('Wednesday');
                }
            }
            else {
                if (true_days.indexOf('Wednesday') == -1) {
                    true_days.push('Wednesday');
                }
            }
            if (!this.doctorData.consultation_schedule[i].Thursday) {
                if (this.doctorScheduleHolidays.indexOf('Thursday') == -1) {
                    this.doctorScheduleHolidays.push('Thursday');
                }
            }
            else {
                if (true_days.indexOf('Thursday') == -1) {
                    true_days.push('Thursday');
                }
            }
            if (!this.doctorData.consultation_schedule[i].Friday) {
                if (this.doctorScheduleHolidays.indexOf('Friday') == -1) {
                    this.doctorScheduleHolidays.push('Friday');
                }
            }
            else {
                if (true_days.indexOf('Friday') == -1) {
                    true_days.push('Friday');
                }
            }
            if (!this.doctorData.consultation_schedule[i].Saturday) {
                if (this.doctorScheduleHolidays.indexOf('Saturday') == -1) {
                    this.doctorScheduleHolidays.push('Saturday');
                }
            }
            else {
                if (true_days.indexOf('Saturday') == -1) {
                    true_days.push('Saturday');
                }
            }
        }
        for (var l = 0; l < true_days.length; l++) {
            if (this.doctorScheduleHolidays.indexOf(true_days[l]) != -1) {
                var index = this.doctorScheduleHolidays.indexOf(true_days[l]);
                this.doctorScheduleHolidays.splice(index, 1);
            }
        }
        var date = new Date();
        this.getDaysInMonth(date.getMonth(), date.getFullYear());
        var arr = [];
        var newDate = new Date();
        //console.log(this.getAllDates.setDate(newDate.getDate()+1))
        for (var i = 0; i < this.doctorScheduleHolidays.length; i++) {
            for (var j = 0; j < this.getAllDates.length; j++) {
                if (this.doctorScheduleHolidays[i] == this.datePipe.transform(this.getAllDates[j], 'EEEE')) {
                    if (!this.showListOfHoliday.some(function (e) { return e.start == _this.datePipe.transform(_this.getAllDates[j], 'yyyy-MM-dd'); })) {
                        arr.push({
                            // start: new Date(this.getAllDates[j]).toJSON().toString().substr(0,10),
                            start: this.datePipe.transform(this.getAllDates[j], 'yyyy-MM-dd'),
                            title: 'Closed',
                            id: 1,
                            textColor: 'grey',
                            color: 'white'
                        });
                    }
                }
            }
        }
        // console.log(arr2)
        Array.prototype.push.apply(this.showListOfHoliday, arr);
        //this.showListOfHoliday.concat(arr)
        console.log(this.showListOfHoliday);
        //console.log(this.docHoliday)
    };
    OpdHolidayComponent.prototype.getDaysInMonth = function (month, year) {
        var date = new Date(year, month, 1);
        this.getAllDates = [];
        while (date.getMonth() === month) {
            this.getAllDates.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return this.getAllDates;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ng_fullcalendar__["a" /* CalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng_fullcalendar__["a" /* CalendarComponent */])
    ], OpdHolidayComponent.prototype, "ucCalendar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ng_fullcalendar__["a" /* CalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng_fullcalendar__["a" /* CalendarComponent */])
    ], OpdHolidayComponent.prototype, "ucCalendar1", void 0);
    OpdHolidayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-opd-holiday',
            template: __webpack_require__("../../../../../src/app/header-two-layout/opd-holiday/opd-holiday.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/opd-holiday/opd-holiday.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__event_service__["a" /* EventSesrvice */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]])
    ], OpdHolidayComponent);
    return OpdHolidayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/opd-holiday/opd-holiday.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdHolidayModule", function() { return OpdHolidayModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opd_holiday_component__ = __webpack_require__("../../../../../src/app/header-two-layout/opd-holiday/opd-holiday.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_fullcalendar__ = __webpack_require__("../../../../ng-fullcalendar/ng-fullcalendar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__opd_holiday_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/opd-holiday/opd-holiday-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_webcam__ = __webpack_require__("../../../../ngx-webcam/ngx-webcam.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var OpdHolidayModule = /** @class */ (function () {
    function OpdHolidayModule() {
    }
    OpdHolidayModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__opd_holiday_routing_module__["a" /* OpdHolidayRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng_fullcalendar__["b" /* FullCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_webcam__["a" /* WebcamModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__["c" /* MatDialogModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__opd_holiday_component__["a" /* OpdHolidayComponent */]]
        })
    ], OpdHolidayModule);
    return OpdHolidayModule;
}());



/***/ })

});
//# sourceMappingURL=opd-holiday.module.chunk.js.map