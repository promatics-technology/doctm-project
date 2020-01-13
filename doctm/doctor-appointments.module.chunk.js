webpackJsonp(["doctor-appointments.module"],{

/***/ "../../../../../src/app/header-two-layout/doctor-appointments/doctor-appointments-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorAppointmentsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_appointments_component__ = __webpack_require__("../../../../../src/app/header-two-layout/doctor-appointments/doctor-appointments.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__doctor_appointments_component__["a" /* DoctorAppointmentsComponent */]
    }
];
var DoctorAppointmentsRoutingModule = /** @class */ (function () {
    function DoctorAppointmentsRoutingModule() {
    }
    DoctorAppointmentsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DoctorAppointmentsRoutingModule);
    return DoctorAppointmentsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/doctor-appointments/doctor-appointments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cstm-drpdown-cnsulted-doc {\n    margin: 20px 0;\n    position: relative;\n}\n.smrt-ass-dropdown {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n.cstm-drpdown-cnsulted-doc select {\n    font-size: 25px;\n    color: #fff;\n    width: 100%;\n    position: relative;\n    cursor: pointer;\n    padding: 15px;\n    background-color: #01b0f0;\n    border-radius: 10px;\n    border: none;\n}\n.cstm-drpdown-cnsulted-doc option {\n    border-bottom: 1px #ccc dashed;\n    padding: 8px 7px;\n    -webkit-transition: .3s all;\n    transition: .3s all;\n    display: block;\n    color: #00b0f0;\n    border-radius: 0;\n    background-color: #fff;\n    font-size: 20px;\n}\n.cstm-caret-big {\n    display: inline-block;\n    width: 0;\n    cursor: pointer;\n    position: absolute;\n    height: 0;\n    margin-left: 4px;\n    color: #000;\n    top: 22px;\n    background-color: #01b0f0;\n    z-index: 1;\n    right: 5px;\n    margin-bottom: 9px;\n    vertical-align: middle;\n    border-top: 17px dashed;\n    border-right: 14px solid transparent;\n    border-left: 14px solid transparent;\n}\n.search-patient {\n    margin: 28px 0;\n}\n.panel-success {\n    border: 2px solid #000;\n    border-radius: 0;\n    margin-bottom: 0;\n    min-height: 511px;\n}\n.panel-body {\n    padding: 0;\n}\n.today-appointment {\n    float: left;\n    /*width: 60%;*/\n    width: 49.9%;\n}\n.appointment-heading {\n    font-size: 25px;\n    text-align: center;\n    background: -webkit-linear-gradient(top, #d6f8ff 0%, #a3ecff 72%);\n    padding: 10px 0;\n    /*border-right: 2px solid #000;*/\n    border-bottom: 2px solid #000;\n    width: 85%;\n    display: inline-block;\n}\n.search-appointment{\n    width: 100%;\n}\n.today-appointment-list-div {\n    padding: 10px;\n    /*padding: 13px;*/\n    width: 100%;\n    padding-bottom: 0;\n    float: left;\n    max-height: 450px;\n    overflow: auto;\n    /*border-right: 2px solid #000;*/\n}\n.today-appointment-list {\n    float: left;\n    width: 100%;\n    margin-bottom: 10px;\n}\n.today-appointment-ul {\n    float: left;\n    list-style-type: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.today-appointment-ul {\n    padding: 0;\n    margin: 0;\n}\n.today-appointment-ul li {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    cursor: pointer;\n    padding: 10px 15px;\n    border: 1px solid #adc4df;\n    background: -webkit-linear-gradient(top, #f2f6fa 0%, #cddbec 72%);\n    margin-right: 9px;\n    text-transform: uppercase;\n}\n.today-appointment-ul li:last-child {\n    margin-right: 0;\n}\n.tommorow-appointment {\n    float: left;\n    /*width: 40%;*/\n    width: 49.9%;\n}\n.tommorow-appointment .appointment-heading {\n    background: -webkit-linear-gradient(top, #f0fedd 0%, #ddfeaf 72%);\n    border-right: none;\n    width: 85%;\n    display: inline-block;\n}\n.tommorow-appointment .today-appointment-list-div {\n    border-right: none;\n}\n.tommorow-appointment .today-appointment-ul li {\n    background: -webkit-linear-gradient(top, #f0fedd 0%, #ddfeaf 72%);\n    /*border:none;\n    box-shadow: 0 0 5px 0px rgba(0,0,0, 0.3);*/\n}\n.today-appointment-ul li:first-child {\n    width: 40px;\n    padding: 10px 9px;\n    text-align: center;\n}\n.today-appointment-ul li:nth-child(2) {\n    width: 225px;\n    overflow: overlay;\n}\n.today-appointment-ul li:nth-child(3) {\n    /*width: 85px;*/\n    width: 77px;\n}\n.today-appointment-ul li:nth-child(4) {\n    /*width: 85px;*/\n    width: 108px;\n}\n.tommorow-appointment .today-appointment-ul li:last-child {\n    /*width: 135px;*/\n    width: 87px;\n}\n.add-new {\n    width: 15.1%;\n    display: inline-block;\n    text-align: center;\n    font-size: 25px;\n    color: #fff;\n    margin: -3px;\n    background-color: #ffc000;\n    border: 2px solid #0b2966;\n    /*height: 57px;*/\n    height: 58px;\n    padding: 0;\n    /*    line-height: 2.2;*/\n    line-height: 2.3;\n    border-top: none;\n    border-right: none;\n}\n/*modal css */\n.pat-reg-modal-form {\n    width: 600px!important;\n    right: 60px!important;\n}\n.regis-modal-body .input-btn {\n    width: 100%;\n    padding: 8px;\n}\n.ok-btn {\n    background-color: transparent;\n    border: 1px solid #002160;\n    width: 50px;\n    margin-left: -15px;\n}\n.reg-btn {\n    background-color: rgb(161, 210, 83);\n    color: #fff;\n    width: 100%;\n    border: rgb(150, 195, 78);\n}\n.reg-btn.cancel {\n    background-color: #ffc000!important;\n    border: #ffc000!important;\n}\n.pat-app-modal-form {\n    width: 600px!important;\n    right: 60px!important;\n}\n.regis-modal-body label {\n    height: 35px;\n    padding: 9px;\n}\n.name-cstm-input {\n    border-radius: 0;\n    border: none;\n    background-color: #00b0f0;\n    color: #fff;\n    font-size: 20px;\n    text-align: center;\n    padding: 10px;\n}\n.appointments {\n    padding: 0;\n}\n.appoint-wrap {\n    max-width: 100%!important;\n}\n.vl {\n    border-right: 2px solid #000;\n    height: 511px;\n    width: 0px;\n    float: left;\n}\n.reg-btn-p {\n    margin-top: 4px;\n}\n.blue {\n    background: -webkit-linear-gradient(top, #f2f6fa 0%, #cddbec 72%)!important;\n}\n.yellow {\n    background: -webkit-linear-gradient(top, #f0fedd 0%, #ddfeaf 72%)!important;\n}\n.green {\n    background: -webkit-linear-gradient(top, #f0fedd 0%, #bdfdbf 72%)!important;\n}\n.red {\n    background: -webkit-linear-gradient(top, #f0fedd 0%, #ffb59e 72%)!important;\n}\n.orange {\n    background: -webkit-linear-gradient(top, #f0fedd 0%, #ffdebc 72%)!important;\n}\n.camera-div {\n    /*height:470px;*/\n    height: 600px;\n    padding: 10px;\n}\n.camera-btn {\n    text-align: center;\n    padding: 15px;\n    margin-top: 55px;\n}\n.upload-image {\n    padding: 3px;\n    text-align: center;\n}\n.upload-image a {\n    text-decoration: none;\n    color: #333;\n    position: absolute;\n    top: -8px;\n    right: 10px;\n}\n.upload-image i {\n    font-size: 16px;\n    padding: 10px;\n    background-color: #01b0f0;\n    border-radius: 5px;\n}\n.upload-image .img-thumbnail {\n    /*padding: 5px;\n    height:70px;\n    width:100%;*/\n    padding: 5px;\n    height: 35px;\n    width: 35px;\n}\n.p-upload {\n    margin-bottom: 11px;\n}\n.close-thik:after {\n    content: '\\2716';\n}\n.reg-cancel-btn {\n    width: 77%;\n    margin: auto;\n}\n.search-main-div {\n    width: 83%;\n    margin: auto;\n}\n.search-inner {\n    width: 100%;\n}\n.search-inner ul {\n    width: 100%;\n}\n/*.search-inner-ul li\n{\n    text-align: center;\n}*/\n.search-inner-ul li:first-child {\n    text-align: center;\n}\n.search-inner-ul li:nth-child(3) {\n    text-align: center;\n}\n.search-inner-ul li:nth-child(4) {\n    text-align: center;\n}\n.search-inner-ul li:nth-child(5) {\n    text-align: center;\n    width: 250px;\n}\n.search-inner-ul li:nth-child(6) {\n    text-align: center;\n}\n.search-inner-ul li:nth-child(7) {\n    text-align: center;\n}\n.search-patient {\n    float: left;\n    width: 90%;\n    position: relative;\n}\n.p-search-fa {\n    position: absolute;\n    top: 12px;\n    right: 10px;\n}\n.p-search-btn {\n    float: right;\n    position: relative;\n    top: 28px;\n    width: 9%;\n}\n.p-search-btn-in {\n    width: 100%;\n    padding: 9px;\n    border-radius: 6px;\n    background: #fff;\n    border: 1px solid #000;\n}\n.time-select {\n    width: 800px!important;\n    right: 35%!important;\n}\n.time-slots {\n    float: left;\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 20px;\n    /*border: 1px solid #eee;*/\n}\n.time-ul {\n    width: 100%;\n    float: left;\n    margin: 0px;\n    padding: 0;\n    text-align: center;\n    min-height: 90px;\n}\n.time-ul>li {\n    float: left;\n    width: 16%;\n}\n.time-ul>li>a {\n    padding: 6px;\n    border: 1px solid #333;\n    display: block;\n    margin: 5px 5px;\n    background-color: #a8e8ff;\n    /*background-color: #00b0f0;*/\n    color: #000;\n}\n.time-ul>li>a:hover {\n    text-decoration: none;\n    background-color: #000!important;\n    color: #fff!important;\n}\n.already-selected {\n    background-color: #000!important;\n    color: #fff!important;\n}\n.blue-slot {\n    background-color: #a8e8ff!important;\n}\n.grey-slot {\n    background-color: rgba(0, 0, 0, .2)!important;\n}\n.select-doctor {\n    font-size: 16px;\n    color: #fff;\n    width: 100%;\n    cursor: pointer;\n    background-color: #01b0f0;\n    border-radius: 0px;\n    border: none;\n    position: relative;\n}\n.cstm-caret {\n    display: inline-block;\n    width: 0;\n    cursor: pointer;\n    position: absolute;\n    height: 0;\n    margin-left: 4px;\n    color: #000;\n    top: 15px;\n    background-color: #01b0f0;\n    z-index: 9;\n    right: 20px;\n    margin-bottom: 9px;\n    vertical-align: middle;\n    border-top: 12px dashed;\n    border-right: 10px solid transparent;\n    border-left: 10px solid transparent;\n}\n.select-opt {\n    border-bottom: 1px #ccc dashed!important;\n    padding: 10px!important;\n    color: #00b0f0;\n    border-radius: 0;\n    background-color: #fff;\n    font-size: 20px;\n}\n.pickup-time {\n    margin-bottom: 10px;\n    padding: 0;\n    /*width: 16%;*/\n    /*border: 2px solid #01b0f0;*/\n}\n.btn-success {\n    color: #fff;\n    background-color: #01b0f0;\n    border: 1px solid #bdbdbd;\n    border-radius: 10px;\n    padding: 2px 12px;\n    margin-bottom: 8px;\n}\n.btn-success:active:hover {\n    color: #fff;\n    background-color: #01b0f0;\n    border: 1px solid #bdbdbd;\n    border-radius: 10px;\n    padding: 2px 12px;\n    margin-bottom: 8px;\n}\nfieldset.fieldset-preset {\n    min-width: unset;\n    padding: 0 10px;\n    border: 1px solid rgba(56, 94, 138, 1);\n}\nlegend.legend-preset {\n    width: 55%;\n    border-bottom: none;\n    text-align: center;\n    margin-bottom: 10px;\n    font-size: 15px;\n}\n.tags-listing-div {\n    width: 30%;\n    margin: auto;\n    padding: 0 15px;\n    float: none;\n}\n/*14-november*/\n.cnsulted-doc-head {\n    position: relative;\n    top: 15px;\n}\n.cnsulted-doc-head h3 {\n    font-size: 23px;\n}\n/*14-november*/\n.cstm-calender-opt, .cstm-calender-opt:hover{\n    color: #000;\n    text-decoration: none;\n}\n.cnsulted-doc-head h3 {\n    font-size: 28px;\n}\n.cstm-column{\n    padding: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/doctor-appointments/doctor-appointments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"container-fluid\"> \n\t<div class=\"col-lg-2\" style=\"    margin-top: 3px;\">\n            <div class=\"dashboard-header-logo\" tabindex=\"0\" ng-reflect-router-link=\"/header-two-layout/dashboard\">\n                <img _ngcontent-c3=\"\" class=\"img-responsive\" src=\"./assets/imgs/logoDoctm.png\" routerLink=\"/header-two-layout/dashboard\">\n\t\t\t</div>\n                <div>\n                    <div _ngcontent-c3=\"\" class=\"dshbrd-btn\">\n                        <button class=\"btn btn-custom\" routerLink=\"/header-two-layout/dashboard\" tabindex=\"0\" ng-reflect-router-link=\"/header-two-layout/dashboard\"> Dashboard </button>\n                    </div>\n                </div>\n            </div>\n\t\t<div class=\"row\">\n            <!-- <div class=\"col-md-2 col-md-offset-1 col-sm-2 col-sm-offset-1 col-xs-12 cstm-column\">\n                <div class=\"cnsulted-doc-head\">\n                    <h3>Consulting Doctor:</h3>\n                </div>\n            </div> -->\n\t      \t<!-- <div class=\"col-md-3 col-sm-3 col-xs-12\">\n\t      \t\t<div class=\"cstm-drpdown-cnsulted-doc\">\n\t      \t\t\t<span  class=\"caret cstm-caret-big\"></span>\n\t\t\t        <select [(ngModel)]=\"consultationDoctor\" (change)=\"filterAppointmentsByDoctor(consultationDoctor)\">\n\t\t\t\t        <option selected=\"\" disabled=\"\" value=\"\">CONSULTING DOCTOR </option>\n                        <option value=\"{{doctor._id}}\" *ngFor=\"let doctor of dataDoctors\"> Dr. {{doctor.first_name}}</option>\n\t\t\t    \t</select>\n\t      \t\t</div>\n\t      \t</div> -->\n\t      \t<div class=\"col-md-6 col-sm-6 col-xs-12 col-md-offset-3 col-sm-offset-3\">\n\t      \t\t<div class=\"search-patient\" style=\"\">\n    \t        \t<input type=\"text\" name=\"\" class=\"form-control txtfield\" placeholder=\"Search by Name, Mobile number\" [(ngModel)]=\"searchInput\" (keyup)=\"searchInputKeyUp($event)\" />\n                    <i class=\"fa fa-times p-search-fa\" (click)=\"deleteSearch()\" *ngIf=\"searchInput.length>0\"></i>\n\t        \t</div>\n                <div class=\"p-search-btn\" style=\"\">\n                    <button (click)=\"SearchAppointementsByPatNameOrMob()\" class=\"p-search-btn-in\" style=\"\">Go</button>\n                </div>\n\t    \t</div>\n\t\t</div>\n</div>\n<div class=\"smartassistant-panel\" *ngIf=\"searchResultDiv\">\n    <div class=\"\">\n        <div class=\"panel-wrap appoint-wrap\">\n            <div class=\"appointments search-main-div\">\n                <div class=\"panel panel-success app-list-panel \">\n                    <div class=\"panel-body\">\n                        <div class=\"today-appointment search-inner\">\n                            <div class=\"appointment-heading search-appointment\">Search results for \"<i> {{searchInputShow}} </i>\" </div>\n                            <div *ngIf=\"searchResults.length==0\"><h2 align=\"center\">No results found ...</h2></div>\n                            <div class=\"today-appointment-list-div\" *ngIf=\"searchResults.length>0\">\n                                <div class=\"today-appointment-list\" *ngFor=\"let patient of searchResults;let i = index\">\n                                    <ul class=\"today-appointment-ul search-inner-ul\">\n                                        <li class=\"{{patient.color}}\">{{i+1}}</li>\n                                        <li class=\"{{patient.color}}\" (click)=\"editAppointment(patient)\">{{patient.patient_id.name}}</li>\n                                        <li class=\"{{patient.color}}\">{{patient.time.startHour}} :\n                                            <span *ngIf=\"patient.time.startMin.length==1\">0{{patient.time.startMin}}</span>\n                                            <span *ngIf=\"patient.time.startMin.length>1\">{{getAppointmentMinToShow(patient.time.startMin)}}</span>\n                                        </li>\n                                        <li class=\"{{patient.color}}\">{{patient.patient_id.mobile}}</li>\n                                        <li class=\"{{patient.color}}\">{{patient.date | date:'fullDate'}}</li>\n                                        <!-- <li class=\"{{patient.color}}\" (click)=\"editAppointmentOpenModalSearch(patient)\">Edit</li>\n                                        <li class=\"{{patient.color}}\" (click)=\"deleteAppointment(patient)\">Cancel</li> -->\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>                  \n                </div>\n            </div>\n        </div>\n    </div>      \n</div>\n<div class=\"smartassistant-panel\" *ngIf=\"!searchResultDiv\">\n    <div class=\"\">\n        <div class=\"panel-wrap appoint-wrap\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12 appointments\">\n                <div class=\"panel panel-success app-list-panel \">\n                    <div class=\"panel-body\">\n                        <div class=\"today-appointment\">\n                            <div>\n                                <div class=\"appointment-heading\">Appointments for today - <span>{{todayAppointments.length}}</span>\n                                </div>\n                                <div class=\"add-new\"><span><i class=\"fa fa-refresh\" style=\"font-size:24px\" (click)=\"refresh()\"></i></span></div>\n                            </div>\n                            <div class=\"today-appointment-list-div\">\n                                <div class=\"today-appointment-list\" *ngFor=\"let patient of todayAppointments;let i = index\">\n                                    <ul class=\"today-appointment-ul\">\n                                        <li class=\"{{patient.color}}\">{{i+1}}</li>\n                                        <li class=\"{{patient.color}}\" (click)=\"editAppointment(patient)\">{{patient.patient_id.name}}</li>\n                                        <li class=\"{{patient.color}}\">{{patient.time.startHour}} :\n                                            <span *ngIf=\"patient.time.startMin.length==1\">0{{patient.time.startMin}}</span>\n                                            <span *ngIf=\"patient.time.startMin.length>1\">{{patient.time.startMin}}</span>\n                                        </li>\n                                        <li class=\"{{patient.color}}\" style=\"padding-left: 3px\">{{patient.patient_id.mobile}}</li>\n                                        <!-- <li class=\"{{patient.color}}\" (click)=\"editAppointmentOpenModal(patient)\">Edit</li>\n                                        <li class=\"{{patient.color}}\" (click)=\"deleteAppointment(patient)\">Cancel</li> -->\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"vl\"></div>\n                        <div class=\"tommorow-appointment\">\n                            <div>\n                                <div class=\"appointment-heading\">Appointments for tomorrow  - <span>{{tomorrowAppointments.length}}</span>\n                                </div>\n                                <div class=\"add-new\"><span><a href=\"javascript:void(0)\"><i class=\"fa fa-calendar\" style=\"font-size:24px;color: #fff;\" (click)=\"openCalender()\"></i></a></span></div>\n                            </div>\n                            <div class=\"today-appointment-list-div\">\n                                <div class=\"today-appointment-list\" *ngFor=\"let patient of tomorrowAppointments; let i=index\">\n                                    <ul class=\"today-appointment-ul\">\n                                        <li class=\"yellow\">{{i+1}}</li>\n                                        <li class=\"yellow\">{{patient.patient_id.name}}</li>\n                                        <li class=\"yellow\">{{patient.time.startHour}} :\n                                            <span *ngIf=\"patient.time.startMin.length==1\">0{{patient.time.startMin}}</span>\n                                            <span *ngIf=\"patient.time.startMin.length>1\">{{patient.time.startMin}}</span>\n                                        </li>\n                                        <li class=\"yellow\" style=\"padding-left: 3px\">{{patient.patient_id.mobile}}</li>\n                                        <!-- <li class=\"yellow\" (click)=\"editAppointmentOpenModal(patient)\">Edit</li>\n                                        <li class=\"yellow\" (click)=\"deleteAppointment(patient)\">Cancel</li> -->\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>                  \n                </div>\n            </div>\n        </div>\n    </div>      \n</div>\n<!-- Patient detail model -->  \n\n<div class=\"modal fade cus-modal\" id=\"pateintConsultaionDetail\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\" *ngIf=\"pateintConsultaionDetail\">\n        <div class=\"modal-content pat-reg-modal-form\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <!-- <h4 class=\"modal-title\"> Registration Form </h4> -->\n                <div class=\" col-md-8 col-md-offset-2 col-sm-12 col-xs-12\" *ngIf=\"!webCam\">\n                    <input class=\"form-control txtfield  name-cstm-input\" name=\"\" readonly=\"\" value=\"Dr. {{pateintConsultaionDetail.doctor_id.first_name}}\" type=\"text\">\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\" *ngIf=\"!webCam\">\n                    <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                        <div class=\"regis-modal-body\">\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                <label>Consulting Type*</label>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                <label>Patient Mobile*</label>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                <label>Patient Name*</label>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_dob\">\n                                <label>Patient DOB*</label>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_age\">\n                                <label>Patient Age*</label>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                <label>Gender*</label>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                <label style=\"height: 90px;\">Address*</label>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_weight\">\n                                <label>Weight (Kg)</label>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_height\">\n                                <label>Height (cm)</label>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_temp\">\n                                <label>Temperature(0F)</label>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_pulse\">\n                                <label>Pulse (per min)</label>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_bp\">\n                                <label>Blood Pressure (mmHg)</label>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_rbs\">\n                                <label>RBS (mg/dL)</label>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_spo\">\n                                <label>SpO2 (%)</label>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_patientPic\">\n                                <label>Patient Photo</label>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_testReport\">\n                                <label>Upload test reports</label>\n                            </div>\n                            <!-- <div class=\"form-group col-md-10 col-md-offset-1 col-sm-12 col-xs-12\">\n                                <button class=\"btn btn-custom reg-btn cancel\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\"> Cancel  </button> \n                            </div> -->\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                        <div class=\"regis-modal-body\">\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12 cstm-crt-wrap\">\n                                <span  class=\"caret cstm-caret\"></span>\n                                <select class=\"form-control txtfield select-doctor\" [(ngModel)]=\"appointment.type\" [ngModelOptions]=\"{standalone: true}\">\n                                    <option selected=\"\" value=\"\" disabled=\"\" class=\"select-opt\"> Consultation Type* </option>\n                                    <option *ngFor=\"let ct of consultationType\" value=\"{{ct}}\">{{ct}}</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                <input type=\"text\" class=\"form-control txtfield\" name=\"\" [(ngModel)]=\"appointment.phone\" [ngModelOptions]=\"{standalone: true}\" (blur)=\"findPatientNameFromPhone($event.target.value)\"/>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"\" [(ngModel)]=\"appointment.name\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"SearchPatientName($event.target.value)\" [matAutocomplete]=\"autoPatNameApnt\" />\n                                <mat-autocomplete #autoPatNameApnt=\"matAutocomplete\" class=\"mat-autocomplete-registration\">\n                                  <mat-option *ngFor=\"let patient of patientList\" [value]=\"patient.name\">\n                                    {{patient.name}}\n                                  </mat-option>\n                                </mat-autocomplete>\n                                <!-- <select *ngIf=\"patientList.length>0\" [(ngModel)]=\"appointment.name\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control txtfield\" >\n                                    <option selected=\"\" disabled=\"\" value=\"\">Select patient </option>\n                                    <option *ngFor=\"let patient of patientList\" value=\"{{patient.name}}\">{{patient.name}}</option>\n                                </select> -->\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_dob\">\n                                <angular2-date-picker [(ngModel)]=\"appointment.dob\" [ngModelOptions]=\"{standalone: true}\" [settings]=\"settings\"></angular2-date-picker>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_age\">\n                                <input type=\"text\" min=\"1\" max=\"100\" class=\"form-control txtfield\" name=\"\" placeholder=\"Age\" [(ngModel)]=\"appointment.age\" [ngModelOptions]=\"{standalone: true}\" />\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                <select class=\"form-control txtfield\" [(ngModel)]=\"appointment.gender\" [ngModelOptions]=\"{standalone: true}\">\n                                    <option selected=\"\" disabled=\"\" value=\"Select\"> Gender </option>\n                                    <option value=\"Male\"> Male </option>\n                                    <option value=\"Female\"> Female </option>\n                                    <option value=\"Other\"> Other </option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                <input class=\"form-control txtfield\" placeholder=\"City\" [matAutocomplete]=\"auto1\" (keyup)=\"SearchCity($event.target.value)\" [(ngModel)]=\"appointment.city\" [ngModelOptions]=\"{standalone: true}\">\n                                <mat-autocomplete #auto1=\"matAutocomplete\" class=\"mat-autocomplete-registration\">\n                                  <mat-option *ngFor=\"let city of citiesList\" [value]=\"city.name\" (onSelectionChange)=\"GetLatLng(city.name)\">\n                                    {{city.name}}\n                                  </mat-option>\n                                </mat-autocomplete>\n                                <!-- <input class=\"form-control txtfield\" placeholder=\"City\" ngx-google-places-autocomplete [options]=\"{ types: ['(cities)'],componentRestrictions: { country: 'IN' } }\" #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" [(ngModel)]=\"appointment.city\" [ngModelOptions]=\"{standalone: true}\" /> -->\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                <input class=\"form-control txtfield\" placeholder=\"Area/Location\" [matAutocomplete]=\"auto\" (keyup)=\"SearchLocation($event.target.value)\" [(ngModel)]=\"appointment.location\" [ngModelOptions]=\"{standalone: true}\">\n                                <mat-autocomplete #auto=\"matAutocomplete\" class=\"mat-autocomplete-registration\">\n                                  <mat-option *ngFor=\"let option of locationSuggestionDB\" [value]=\"option\" >\n                                    {{option}}\n                                  </mat-option>\n                                </mat-autocomplete>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_weight\">\n                                <input class=\"form-control txtfield\" name=\"\" placeholder=\"\" type=\"text\" min=\"1\" max=\"150\" [(ngModel)]=\"appointment.weight\" [ngModelOptions]=\"{standalone: true}\">\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_height\">\n                                <input class=\"form-control txtfield\" name=\"\" placeholder=\"\" type=\"text\" min=\"1\" max=\"240\" [(ngModel)]=\"appointment.height\" [ngModelOptions]=\"{standalone: true}\">\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_temp\">\n                                <select class=\"form-control txtfield\" [(ngModel)]=\"appointment.temp\" [ngModelOptions]=\"{standalone: true}\">\n                                    <option value=\"\"> Select </option>\n                                    <option value=\"{{value}}\" *ngFor=\"let value of temperature_range\"> {{value}} </option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_pulse\">\n                                <select class=\"form-control txtfield\" [(ngModel)]=\"appointment.pulse\" [ngModelOptions]=\"{standalone: true}\">\n                                    <option value=\"\"> Select </option>\n                                    <option value=\"{{value}}\" *ngFor=\"let value of pulse_range\"> {{value}} </option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-6 col-xs-12\" *ngIf=\"field_bp\">\n                                <select class=\"form-control txtfield\" [(ngModel)]=\"appointment.bp\" [ngModelOptions]=\"{standalone: true}\">\n                                    <option value=\"\"> SYS </option>\n                                    <option value=\"{{value}}\" *ngFor=\"let value of sys_range\"> {{value}} </option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-6 col-xs-12\" *ngIf=\"field_bp\">\n                                <select class=\"form-control txtfield\" [(ngModel)]=\"appointment.dia\" [ngModelOptions]=\"{standalone: true}\">\n                                    <option value=\"\"> DIA </option>\n                                    <option value=\"{{value}}\" *ngFor=\"let value of dia_range\"> {{value}} </option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_rbs\">\n                                <select class=\"form-control txtfield\" [(ngModel)]=\"appointment.rbs\" [ngModelOptions]=\"{standalone: true}\">\n                                    <option value=\"Select\"> Select </option>\n                                    <option value=\"{{value}}\" *ngFor=\"let value of rbs_range\"> {{value}} </option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_spo\">\n                                <select class=\"form-control txtfield\" [(ngModel)]=\"appointment.spo\" [ngModelOptions]=\"{standalone: true}\">\n                                    <option value=\"Select\"> Select </option>\n                                    <option value=\"{{value}}\" *ngFor=\"let value of spo_range\"> {{value}} </option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_patientPic && !pateintPic\">\n                                <span class=\"input-btn btn btn-default\" (click)=\"openWebCam('patient')\">\n                                    Take Picture <!-- <input class=\"inpt-file\" type=\"file\"> -->\n                                </span>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12 upload-image-main\" *ngIf=\"field_patientPic && pateintPic\">\n                                <div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-4 upload-image\" (click)=\"openWebCam('patient')\">\n                                    <img href=\"javascript:void(0)\" src=\"{{pateintPic}}\" alt=\"pic\" class=\"img-thumbnail\">\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_testReport && reportPics.length<1\">\n                                <span class=\"input-btn btn btn-default\" (click)=\"openWebCam('report')\">\n                                    Take Picture \n                                </span>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12 upload-image-main\" *ngIf=\"field_testReport && reportPics.length>0\">\n                                <div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-4 upload-image\" *ngFor=\"let image of reportPics;let i = index\">\n                                    <img href=\"javascript:void(0)\" src=\"{{image}}\" alt=\"pic\" class=\"img-thumbnail\">\n                                    <a (click)=\"removeImageFromReportPics(i)\" class=\"close-thik\"></a>\n                                </div>\n                                <div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-4 upload-image\" *ngIf=\"reportPics.length<3\">\n                                    <i class=\"fa fa-plus\" (click)=\"openWebCam('report')\"></i>      \n                                </div>  \n                            </div>\n                            <!-- <div class=\"form-group col-md-10 col-md-offset-1 col-sm-12 col-xs-12\">\n                                <button class=\"btn btn-custom reg-btn reg-btn-p\" type=\"button\" (click)=\"registerFromAppointment()\"> Register </button>\n                            </div> -->\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n                        <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12\">\n                            <div class=\"reg-cancel-btn\">\n                                <button class=\"btn btn-custom reg-btn cancel\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\"> Cancel  </button> \n                            </div>\n                        </div>\n                        <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12\">\n                            <div class=\"reg-cancel-btn\">\n                                <button class=\"btn btn-custom reg-btn\" type=\"button\" (click)=\"registerFromAppointment()\"> Register </button>\n                            </div>\n                        </div>\n                    </div>    \n                </div>\n                <div *ngIf=\"webCam\" class=\"camera-div\">\n                    <webcam [height]=\"550\" [width]=\"550\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" ></webcam>\n                    <div class=\"form-group col-md-10 col-md-offset-1 col-sm-12 col-xs-12 camera-btn\">\n                        <button class=\"btn btn-custom\" type=\"button\" (click)=\"triggerSnapshot()\">OK</button>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<!-- end -->\n\n<!-- appointmeny calender model --> \n<div class=\"modal fade cus-modal\" id=\"appointmentCalenderApntList\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\" *ngIf=\"calendarOptions1\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h3>Dr. {{getDoctorName(consultationDoctor)}}</h3>\n                <!-- <h4 class=\"modal-title\"> Registration Form </h4> -->\n            </div>\n            <div class=\"modal-body\">\n                <div *ngIf=\"calendarOptions1\">\n                    <a href=\"javascript:void(0)\" class=\"cstm-calender-opt\">\n                        <ng-fullcalendar #ucCalendar1 [options]=\"calendarOptions1\" (eventDrop)=\"updateEvent($event.detail)\" (eventResize)=\"updateEvent($event.detail)\" (clickButton)=\"clickButton($event.detail)\" [(eventsModel)]=\"events\"></ng-fullcalendar>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade cus-modal\" id=\"selectAppointmentTimeApntList\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content time-select\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <!-- <h4 class=\"modal-title\"> Registration Form </h4> -->\n                <div class=\" col-md-8 col-md-offset-2 col-sm-12 col-xs-1 text-center\">\n                    <h3 style=\"margin:0px\"> {{appointmentDate | date:'fullDate' }} </h3>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\" col-md-12 col-sm-12 col-xs-1 text-center\">\n                        <div class=\"time-slots\" *ngFor=\"let schedule of shiftsOfParticularDay;let i = index\">\n                            <h3>Slot {{i+1}} [{{schedule.startHour}}:<span *ngIf=\"schedule.startMin.length>1\">{{schedule.startMin}}</span><span *ngIf=\"schedule.startMin.length==1\">0{{schedule.startMin}}</span> - {{schedule.endHour}}:<span *ngIf=\"schedule.endMin.length>1\">{{schedule.endMin}}</span><span *ngIf=\"schedule.endMin.length==1\">0{{schedule.endMin}}</span>]</h3>\n                            <ul class=\"time-ul\" type=\"none\">\n                                <li *ngFor=\"let shift of schedule.shift\"><a href=\"javascript:void(0)\" class=\"{{getClassSlot(shift)}}\">{{shift.startHour}}:<span *ngIf=\"shift.startMin.length>1\">{{shift.startMin}}</span><span *ngIf=\"shift.startMin.length==1\">0{{shift.startMin}}</span></a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- end -->\n\n<!-- Edit appointment Modal start -->\n<div class=\"modal fade cus-modal\" id=\"appointmentForm_EditApn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content pat-app-modal-form\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"resetAppointmentModal_EditApn()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <div class=\" col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12\">\n                    <span  class=\"caret cstm-caret\"></span>\n                    <select class=\"form-control txtfield select-doctor\" (change)=\"changeDoctor()\" [(ngModel)]=\"appointmentDoctor\" [ngModelOptions]=\"{standalone: true}\">\n                        <option selected=\"\" disabled=\"\" value=\"\" class=\"select-opt\"> Consulting Doctor* </option>\n                        <option *ngFor=\"let doctor of dataDoctors\" value=\"{{doctor._id}}\" > Dr. {{doctor.first_name}}</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"regis-modal-body\">\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <div class=\"cus-datetimepicker\">\n                                <label class=\"col-md-4 col-sm-4 col-xs-12\">Appointment Date &amp; Time </label>\n                                <div class=\"col-md-8 col-sm-8 col-xs-12\" *ngIf=\"dateSelected\">\n                                    <input type=\"text\" class=\"form-control txtfield\" value=\"{{appointmentDate.getDate()}}-{{appointmentDate.getMonth()+1}}-{{appointmentDate.getFullYear()}}  {{appointmentTime.startHour}}:{{getAppointmentMinToShow(appointmentTime.startMin)}}\" readonly=\"\" name=\"\" placeholder=\"\" (click)=\"AppointmentsBySmartAssistant()\"/>\n                                </div>\n                                <div class=\"col-md-8 col-sm-8 col-xs-12\" *ngIf=\"!dateSelected\">\n                                    <input type=\"text\" class=\"form-control txtfield\" value=\"\" name=\"\" placeholder=\"Appointment Date & Time\" (click)=\"AppointmentsBySmartAssistant()\"/>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <label class=\"col-md-4 col-sm-4 col-xs-12\"> Patient Mobile* </label>\n                            <div class=\"col-md-8 col-sm-8 col-xs-12\">\n                                <div class=\"input-group fieldDesign\">\n                                    <span class=\"input-group-addon\">+91</span>\n                                    <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"Mobile Number\" pattern=\"[0-9.]+\" maxLength=\"10\" (blur)=\"findPatientNameFromPhone($event.target.value)\" [(ngModel)]=\"appointment.phone\" [ngModelOptions]=\"{standalone: true}\"/>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <label class=\"col-md-4 col-sm-4 col-xs-12\"> Patient Name* </label>\n                            <div class=\"col-md-8 col-sm-8 col-xs-12\">\n                                <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"\" [(ngModel)]=\"appointment.name\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"SearchPatientName($event.target.value)\" [matAutocomplete]=\"autoPatNameApnt\" />\n                                <mat-autocomplete #autoPatNameApnt=\"matAutocomplete\" class=\"mat-autocomplete-registration\">\n                                  <mat-option *ngFor=\"let patient of patientList\" [value]=\"patient.name\">\n                                    {{patient.name}}\n                                  </mat-option>\n                                </mat-autocomplete>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12 text-center\">\n                            <button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"!dateSelected || !appointment.phone || appointment.phone.length<10 || !appointment.name\" (click)=\"updateAppointment()\"> UPDATE APPOINTMENT </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- appointmeny calender model -->\n<div class=\"modal fade cus-modal\" id=\"appointmentCalender_EditApn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\" *ngIf=\"calendarOptions\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h3 *ngIf=\"appointmentDoctor\">Dr. {{getDoctorName(appointmentDoctor)}}</h3>\n            </div>\n            <div class=\"modal-body\">\n                    <div *ngIf=\"calendarOptions\">\n                        <a href=\"javascript:void(0)\" class=\"cstm-calender-opt\">\n                            <ng-fullcalendar #ucCalendar [options]=\"calendarOptions\" (eventClick)=\"eventClick($event.detail)\" (eventDrop)=\"updateEvent($event.detail)\" (eventResize)=\"updateEvent($event.detail)\" (dayClick)=\"dayClick($event.detail)\" (clickButton)=\"clickButton($event.detail)\" [(eventsModel)]=\"events\"></ng-fullcalendar>\n                        </a>\n                    </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade cus-modal\" id=\"selectAppointmentTime_EditApn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content time-select\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <div class=\" col-md-8 col-md-offset-2 col-sm-12 col-xs-1 text-center\">\n                    <h3 style=\"margin:0px\"> {{appointmentDate | date:'fullDate' }} </h3>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\" col-md-12 col-sm-12 col-xs-1 text-center\">\n                        <div class=\"time-slots\" *ngFor=\"let schedule of shiftsOfParticularDay;let i = index\">\n                            <h3>Shift {{i+1}} [{{schedule.startHour}}:<span *ngIf=\"schedule.startMin.length>1\">{{schedule.startMin}}</span><span *ngIf=\"schedule.startMin.length==1\">0{{schedule.startMin}}</span> - {{schedule.endHour}}:<span *ngIf=\"schedule.endMin.length>1\">{{schedule.endMin}}</span><span *ngIf=\"schedule.endMin.length==1\">0{{schedule.endMin}}</span>]</h3>\n                            <ul class=\"time-ul\" type=\"none\">\n                                <li *ngFor=\"let shift of schedule.shift\" (click)=\"onTimeSelection(shift)\"><a href=\"javascript:void(0)\" class=\"{{getClassSlot(shift)}}\">{{shift.startHour}}:<span *ngIf=\"shift.startMin.length>1\">{{shift.startMin}}</span><span *ngIf=\"shift.startMin.length==1\">0{{shift.startMin}}</span></a></li>\n                            </ul>\n                        </div>\n                        <div class=\"time-slots\" *ngIf=\"customShifts.length>0\">\n                            <h3>More Shifts</h3>\n                            <ul class=\"time-ul\" type=\"none\">\n                                <li *ngFor=\"let shift of customShifts\"><a href=\"javascript:void(0)\" class=\"already-selected\">{{shift.startHour}}:<span *ngIf=\"shift.startMin.length>1\">{{shift.startMin}}</span><span *ngIf=\"shift.startMin.length<=1\">0{{shift.startMin}}</span></a></li>\n                            </ul>\n                        </div>\n                        <div class=\"tags-listing-div\">\n                            <fieldset class=\"fieldset-preset\">\n                                <legend class=\"legend-preset\">Add New Slot</legend>\n                                <div class=\"col-md-offset-2 col-md-10 pickup-time\">\n                                    <ngb-timepicker [spinners]=\"false\" [(ngModel)]=\"customTime\"></ngb-timepicker>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <button class=\"btn-success\" (click)=\"SaveAppointmentForCustomTime(customTime)\">Save</button>\n                                </div>\n                            </fieldset>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Edit appointment modal end -->"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/doctor-appointments/doctor-appointments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorAppointmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs-compat/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirmation_popup_confirmation_dialog_confirmation_dialog_component__ = __webpack_require__("../../../../../src/app/confirmation-popup/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_fullcalendar__ = __webpack_require__("../../../../ng-fullcalendar/ng-fullcalendar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DoctorAppointmentsComponent = /** @class */ (function () {
    //calender
    function DoctorAppointmentsComponent(formBuilder, toastr, userService, router, dialog, _spinner) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this._spinner = _spinner;
        this.trigger = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy',
            defaultOpen: false
        };
        this.appointmentDate = new Date();
        this.events = null;
        //this.subscription = missionService.missionAnnounced$.subscribe(
        //   mission => {
        //     if(mission=='reload_appointment_list'){
        //         this.ngOnInit();
        //     }
        // });
    }
    // ngOnDestroy() {
    //     this.subscription.unsubscribe();
    // }
    DoctorAppointmentsComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        //this.smartAssistantData = JSON.parse(localStorage['smartAssistantDetails'])
        this.GetSmartAssistantDataAfterLogin();
        this.consultationDoctor = this.doctorData._id;
        console.log(this.consultationDoctor);
        this.pulse_range = [];
        var valuePulse = 30;
        while (valuePulse < 181) {
            this.pulse_range.push(valuePulse);
            valuePulse++;
        }
        this.sys_range = [];
        var valueSys = 70;
        while (valueSys < 191) {
            this.sys_range.push(valueSys);
            valueSys++;
        }
        this.dia_range = [];
        var valueDia = 40;
        while (valueDia < 101) {
            this.dia_range.push(valueDia);
            valueDia++;
        }
        this.temperature_range = [];
        var valueTem = 97;
        while (valueTem < 107) {
            this.temperature_range.push(valueTem);
            valueTem++;
        }
        this.rbs_range = [];
        var valueRbs = 50;
        while (valueRbs < 401) {
            this.rbs_range.push(valueRbs);
            valueRbs++;
        }
        this.spo_range = [];
        var valueSpo = 80;
        while (valueSpo < 100) {
            this.spo_range.push(valueSpo);
            valueSpo++;
        }
        this.todayAppointments = [];
        this.todayAppointments_copy = [];
        this.tomorrowAppointments = [];
        this.tomorrowAppointments_copy = [];
        this.webCam = false;
        this.appointment = {};
        this.patientList = [];
        this.patientList1 = [];
        this.reportPics = [];
        this.searchResultDiv = false;
        this.searchInput = "";
        this.appointmentDoctor = "";
        this.appointmentsForCalender = [];
        this.appointmentTime = {};
        this.dateSelected = false;
        this.customShifts = [];
        this.consultationType = [
            'Appointment',
            'Walk-in',
            'Emergency'
        ];
    };
    DoctorAppointmentsComponent.prototype.GetSmartAssistantDataAfterLogin = function () {
        var _this = this;
        var object = {
            smart_assistant_id: this.doctorData.smart_assistant_id
        };
        this.userService.GetSmartAssistantDataAfterLogin(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.dataDoctors = data.doctorsRegisteredForSmartClinic;
                if (_this.dataDoctors.length == 1) {
                    _this.consultationDoctor;
                }
                else {
                    for (var i = 0; i < _this.dataDoctors.length; i++) {
                        if (_this.dataDoctors[i].type_of_doctor == "admin_doctor") {
                            _this.appointmentDoctor = _this.doctorData._id;
                            break;
                        }
                    }
                }
                _this.TodayTmrwAppointmentsBySmartAssistant();
            }
        }, function (err) {
            console.log(err);
        });
    };
    // TodayTmrwAppointmentsBySmartAssistant(){
    //     this.userService.TodayTmrwAppointmentsBySmartAssistant(this.smartAssistantData.dataSmartAssistant._id).subscribe(data => {
    //         console.log(data)
    //         if (data.response == true) {
    //             this.todayAppointments_copy = data.appointmentsToday
    //             this.tomorrowAppointments_copy = data.appointmentsTmrw
    //             for (var i = 0; i < this.todayAppointments_copy.length; i++) {
    //                 this.todayAppointments_copy[i].sortTime = (parseInt(this.todayAppointments_copy[i].time.startHour) * 60) + parseInt(this.todayAppointments_copy[i].time.startMin)
    //             }
    //             this.todayAppointments_copy.sort(function(a, b) {    
    //                 if (a.sortTime < b.sortTime) {        
    //                     return -1
    //                 }
    //                 if (a.sortTime > b.sortTime) {
    //                     return 1    
    //                 }
    //             })
    //             // var color = ['green','yellow','blue','red']
    //             // var colorCount :number = 0
    //             // for (var i = 0; i < this.todayAppointments_copy.length; i++) {
    //             //     if(i != 0){
    //             //         if(this.todayAppointments_copy[i].time.startHour != this.todayAppointments_copy[i-1].time.startHour){
    //             //             if(colorCount==3){
    //             //                 colorCount = 0
    //             //             }else{
    //             //                 colorCount = colorCount + 1
    //             //             }
    //             //         }
    //             //     }
    //             //     this.todayAppointments_copy[i].color = color[colorCount]
    //             // }
    //             for (var i = 0; i < this.tomorrowAppointments_copy.length; i++) {
    //                 this.tomorrowAppointments_copy[i].sortTime = (parseInt(this.tomorrowAppointments_copy[i].time.startHour) * 60) + parseInt(this.tomorrowAppointments_copy[i].time.startMin)
    //             }
    //             this.tomorrowAppointments_copy.sort(function(a, b) {    
    //                 if (a.sortTime < b.sortTime) {        
    //                     return -1
    //                 }
    //                 if (a.sortTime > b.sortTime) {
    //                     return 1    
    //                 }
    //             })
    //             // var color = ['green','yellow','blue','red']
    //             // var colorCount :number = 0
    //             // for (var i = 0; i < this.tomorrowAppointments_copy.length; i++) {
    //             //     if(i != 0){
    //             //         if(this.tomorrowAppointments_copy[i].time.startHour != this.tomorrowAppointments_copy[i-1].time.startHour){
    //             //             if(colorCount==3){
    //             //                 colorCount = 0
    //             //             }else{
    //             //                 colorCount = colorCount + 1
    //             //             }
    //             //         }
    //             //     }
    //             //     this.tomorrowAppointments_copy[i].color = color[colorCount]
    //             // }
    //             this.filterAppointmentsByDoctor(this.consultationDoctor)
    //         }
    //     }, err => {
    //       console.log(err);
    //     })
    // }
    DoctorAppointmentsComponent.prototype.TodayTmrwAppointmentsBySmartAssistant = function () {
        var _this = this;
        this.userService.TodayTmrwAppointmentsBySmartAssistant(this.doctorData.smart_assistant_id).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                var currentTime = new Date();
                var currentOffset = currentTime.getTimezoneOffset();
                var ISTOffset = 330;
                var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
                var hoursIST = ISTTime.getHours();
                var minutesIST = ISTTime.getMinutes();
                _this.todayAppointments_copy = [];
                var arrayPassedAppointments = [];
                var arrayValidAppointments = [];
                _this.todayAppointments_copy = data.appointmentsToday;
                _this.tomorrowAppointments_copy = data.appointmentsTmrw;
                for (var i = 0; i < data.appointmentsToday.length; i++) {
                    data.appointmentsToday[i].sortTime = (parseInt(data.appointmentsToday[i].time.startHour) * 60) + parseInt(data.appointmentsToday[i].time.startMin);
                    if (parseInt(data.appointmentsToday[i].sortTime) + parseInt(data.appointmentsToday[i].doctor_id.waitingTime.substr(0, 2)) <
                        ((hoursIST * 60) + minutesIST)) {
                        data.appointmentsToday[i].color = "orange";
                        arrayPassedAppointments.push(data.appointmentsToday[i]);
                    }
                    else {
                        data.appointmentsToday[i].color = "green";
                        arrayValidAppointments.push(data.appointmentsToday[i]);
                    }
                }
                arrayPassedAppointments.sort(function (a, b) {
                    if (a.sortTime < b.sortTime) {
                        return -1;
                    }
                    if (a.sortTime > b.sortTime) {
                        return 1;
                    }
                });
                arrayValidAppointments.sort(function (a, b) {
                    if (a.sortTime < b.sortTime) {
                        return -1;
                    }
                    if (a.sortTime > b.sortTime) {
                        return 1;
                    }
                });
                _this.todayAppointments_copy = arrayValidAppointments.concat(arrayPassedAppointments);
                for (var i = 0; i < _this.tomorrowAppointments_copy.length; i++) {
                    _this.tomorrowAppointments_copy[i].sortTime = (parseInt(_this.tomorrowAppointments_copy[i].time.startHour) * 60) + parseInt(_this.tomorrowAppointments_copy[i].time.startMin);
                }
                _this.tomorrowAppointments_copy.sort(function (a, b) {
                    if (a.sortTime < b.sortTime) {
                        return -1;
                    }
                    if (a.sortTime > b.sortTime) {
                        return 1;
                    }
                });
                _this.filterAppointmentsByDoctor(_this.consultationDoctor);
            }
        }, function (err) {
            console.log(err);
        });
    };
    DoctorAppointmentsComponent.prototype.GetCityFromClinicId = function (id) {
        var _this = this;
        this.userService.GetCityFromClinicId(id).subscribe(function (data) {
            console.log(data);
            _this.citiesList = data.data;
            _this.citiesList1 = data.data;
            _this.state = data.state;
            _this.appointment.city = data.city;
        }, function (err) {
            console.log(err);
        });
    };
    DoctorAppointmentsComponent.prototype.SearchCity = function (data) {
        data = data.toLowerCase();
        if (data && data.trim() != '') {
            this.citiesList = this.citiesList1.filter(function (item) {
                var b = item.name.toLowerCase();
                return (b.indexOf(data) > -1);
            });
        }
        if (data == '') {
            this.citiesList = this.citiesList1;
        }
    };
    DoctorAppointmentsComponent.prototype.GetLatLng = function (city) {
        var _this = this;
        var string = city + "," + this.state;
        string = string.replace(" ", "");
        var object = {
            string: string.trim()
        };
        console.log(object);
        this.userService.GetLatLng(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.lat = data.data[0].latitude;
                _this.lng = data.data[0].longitude;
            }
        });
    };
    DoctorAppointmentsComponent.prototype.SearchLocation = function (data) {
        var _this = this;
        data.replace(" ", "");
        var object = {
            search: data,
            lat: this.lat,
            lng: this.lng
        };
        this.userService.SearchLocation(object).subscribe(function (data) {
            console.log(data);
            _this.locationSuggestionDB = [];
            for (var i = 0; i < data.data.predictions.length; i++) {
                var string = data.data.predictions[i].structured_formatting.main_text;
                _this.locationSuggestionDB.push(string);
            }
        });
    };
    DoctorAppointmentsComponent.prototype.handleAddressChange = function ($event) {
        this.lat = JSON.parse(JSON.stringify($event.geometry.location)).lat;
        this.lng = JSON.parse(JSON.stringify($event.geometry.location)).lng;
    };
    DoctorAppointmentsComponent.prototype.editAppointment = function (data) {
        if (data.color == "green") {
            this.appointment = {};
            this.pateintConsultaionDetail = data;
            this.appointment.name = data.patient_id.name;
            this.appointment.phone = data.patient_id.mobile;
            this.GetCityFromClinicId(data.doctor_id.clinic_details.clinic_id);
            this.checkWhichFieldsToShow(data.doctor_id);
            this.appointment.gender = "Select";
            this.appointment.temp = "";
            this.appointment.pulse = "";
            this.appointment.bp = "";
            this.appointment.dia = "";
            this.appointment.rbs = "";
            this.appointment.spo = "";
            if (data.color == 'green') {
                // this.consultationType = [
                //     'Appointment'
                // ]
                this.appointment.type = "Appointment";
            }
            else {
                // this.consultationType = [
                //     'Walk-in',
                //     'Emergency'
                // ]
                this.appointment.type = 'Walk-in';
            }
        }
    };
    DoctorAppointmentsComponent.prototype.checkWhichFieldsToShow = function (doctor) {
        this.field_dob = false;
        this.field_age = false;
        this.field_weight = false;
        this.field_height = false;
        this.field_temp = false;
        this.field_pulse = false;
        this.field_bp = false;
        this.field_rbs = false;
        this.field_spo = false;
        this.field_patientPic = false;
        this.field_testReport = false;
        this.field_fee = false;
        for (var i = 0; i < doctor.reg_fields.length; i++) {
            if (doctor.reg_fields[i].value == "DOB") {
                this.field_dob = true;
            }
            else if (doctor.reg_fields[i].value == "Age") {
                this.field_age = true;
            }
            else if (doctor.reg_fields[i].value == "Weight") {
                this.field_weight = true;
            }
            else if (doctor.reg_fields[i].value == "Height") {
                this.field_height = true;
            }
            else if (doctor.reg_fields[i].value == "Bodytemperature") {
                this.field_temp = true;
            }
            else if (doctor.reg_fields[i].value == "Pulse") {
                this.field_pulse = true;
            }
            else if (doctor.reg_fields[i].value == "BloodPressure(BP)") {
                this.field_bp = true;
            }
            else if (doctor.reg_fields[i].value == "RandomBloodSugar(RBS)") {
                this.field_rbs = true;
            }
            else if (doctor.reg_fields[i].value == "SpO2") {
                this.field_spo = true;
            }
            else if (doctor.reg_fields[i].value == "Patientphoto") {
                this.field_patientPic = true;
            }
            else if (doctor.reg_fields[i].value == "PatientTestreports") {
                this.field_testReport = true;
            }
            else if (doctor.reg_fields[i].value == "ConsultationFee") {
                this.field_fee = true;
            }
        }
        $("#pateintConsultaionDetail").modal("show");
    };
    DoctorAppointmentsComponent.prototype.openWebCam = function (data) {
        if (data == 'patient') {
            this.webCamOpenedBY = 'patient';
        }
        else {
            this.webCamOpenedBY = 'report';
        }
        this.webCam = true;
    };
    DoctorAppointmentsComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
        this.webCam = false;
    };
    DoctorAppointmentsComponent.prototype.handleImage = function (webcamImage) {
        console.info('received webcam image', webcamImage);
        if (this.webCamOpenedBY == 'patient') {
            this.pateintPic = webcamImage._imageAsDataUrl;
        }
        else if (this.webCamOpenedBY == 'report') {
            this.reportPics.push(webcamImage._imageAsDataUrl);
        }
    };
    DoctorAppointmentsComponent.prototype.removeImageFromReportPics = function (i) {
        this.reportPics.splice(i, 1);
    };
    Object.defineProperty(DoctorAppointmentsComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DoctorAppointmentsComponent.prototype.findPatientNameFromPhone = function (data) {
        var _this = this;
        if (!isNaN(data)) {
            data = data.trim();
            if (data.length > 0) {
                var object = void 0;
                object = {};
                object.clinic_id = this.pateintConsultaionDetail.doctor_id.doctm_clinic_id;
                object.mobile = data;
                this.userService.GetPatientDetail(object).subscribe(function (data) {
                    console.log(data);
                    _this.patientList = [];
                    _this.patientList1 = [];
                    if (data.response == true) {
                        if (data.data.length == 1) {
                            _this.appointment.name = data.data[0].name;
                        }
                        else {
                            _this.patientList = data.data;
                            _this.patientList1 = data.data;
                        }
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    DoctorAppointmentsComponent.prototype.registerFromAppointment = function () {
        var _this = this;
        if (this.appointment.phone == "" || this.appointment.phone == null) {
            this.toastr.warning("Invalid Phone", "Warning");
            return;
        }
        if (this.appointment.name == "" || this.appointment.name == null) {
            this.toastr.warning("Invalid Name", "Warning");
            return;
        }
        if (this.field_age && ((this.appointment.age == "" || this.appointment.age == null) || (this.appointment.age < 1 || this.appointment.age > 100 || isNaN(this.appointment.age)))) {
            this.toastr.warning("Invalid age", "Warning");
            return;
        }
        if (this.field_dob && (this.appointment.dob == "" || this.appointment.dob == null)) {
            this.toastr.warning("Invalid date of birth", "Warning");
            return;
        }
        if (this.appointment.gender == "Select") {
            this.toastr.warning("Invalid gender", "Warning");
            return;
        }
        if (this.appointment.city == null || this.appointment.city == "" || this.appointment.city == undefined || this.appointment.city.trim().length < 1
            || this.appointment.location == null || this.appointment.location == "" || this.appointment.location == undefined || this.appointment.location.trim().length < 1) {
            this.toastr.warning("Invalid address", "Warning");
            return;
        }
        if (this.appointment.weight != null && this.appointment.weight != '' && (this.appointment.weight < 1 || this.appointment.weight > 150 || isNaN(this.appointment.weight))) {
            this.toastr.warning("Invalid weight", "Warning");
            return;
        }
        else if (this.appointment.height != null && this.appointment.height != '' && (this.appointment.height < 1 || this.appointment.height > 240 || isNaN(this.appointment.height))) {
            this.toastr.warning("Invalid height", "Warning");
            return;
        }
        $("#pateintConsultaionDetail").modal("hide");
        var ob;
        ob = {};
        ob.appointment_detail = this.pateintConsultaionDetail;
        this.appointment.clinic_id = ob.appointment_detail.doctor_id.doctm_clinic_id;
        ob.registration = this.appointment;
        if (this.reportPics.length > 0) {
            ob.reportPics = this.reportPics;
        }
        if (this.pateintPic != null && this.pateintPic != '') {
            ob.pateintPic = this.pateintPic;
        }
        console.log(ob);
        this.userService.RegisterFromAppointment(ob).subscribe(function (data) {
            _this.patientList = [];
            _this.patientList1 = [];
            console.log(data);
            if (data.response == true) {
                _this.toastr.success(data.message, "Success");
                _this.ngOnInit();
            }
        }, function (err) {
            console.log(err);
        });
    };
    DoctorAppointmentsComponent.prototype.filterAppointmentsByDoctor = function (id) {
        this.todayAppointments = [];
        this.tomorrowAppointments = [];
        for (var i = 0; i < this.todayAppointments_copy.length; i++) {
            if (this.todayAppointments_copy[i].doctor_id._id.toString() == id.toString()) {
                this.todayAppointments.push(this.todayAppointments_copy[i]);
            }
        }
        for (var i = 0; i < this.tomorrowAppointments_copy.length; i++) {
            if (this.tomorrowAppointments_copy[i].doctor_id._id.toString() == id.toString()) {
                this.tomorrowAppointments.push(this.tomorrowAppointments_copy[i]);
            }
        }
    };
    DoctorAppointmentsComponent.prototype.SearchAppointementsByPatNameOrMob = function () {
        var _this = this;
        this.searchResults = [];
        if (this.searchInput && this.searchInput.trim().length > 0) {
            var ob = {
                search: this.searchInput.trim()
            };
            this.userService.SearchAppointementsByPatNameOrMob(ob).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    _this.searchInputShow = _this.searchInput;
                    _this.searchResults = data.data;
                    var currentTime = new Date();
                    var currentOffset = currentTime.getTimezoneOffset();
                    var ISTOffset = 330;
                    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
                    var hoursIST = ISTTime.getHours();
                    var minutesIST = ISTTime.getMinutes();
                    var today = new Date();
                    var tomorrow = new Date();
                    tomorrow.setDate(new Date().getDate() + 1);
                    for (var i = 0; i < _this.searchResults.length; i++) {
                        _this.searchResults[i].date = new Date(_this.searchResults[i].date);
                        _this.searchResults[i].date.setDate(new Date(_this.searchResults[i].date).getDate() - 1);
                        _this.searchResults[i].sortTime = (parseInt(_this.searchResults[i].time.startHour) * 60) + parseInt(_this.searchResults[i].time.startMin);
                        if (today.setHours(18, 30, 0, 0) == new Date(_this.searchResults[i].date).setHours(18, 30, 0, 0)) {
                            if (parseInt(_this.searchResults[i].sortTime) + parseInt(_this.searchResults[i].doctor_id.waitingTime.substr(0, 2)) <
                                ((hoursIST * 60) + minutesIST)) {
                                _this.searchResults[i].color = "orange";
                            }
                            else {
                                _this.searchResults[i].color = "green";
                            }
                        }
                        else if (new Date(_this.searchResults[i].date).setHours(18, 30, 0, 0) == tomorrow.setHours(18, 30, 0, 0)) {
                            _this.searchResults[i].color = "yellow";
                        }
                        else {
                            _this.searchResults[i].color = "blue";
                        }
                    }
                    _this.searchResultDiv = true;
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    DoctorAppointmentsComponent.prototype.deleteSearch = function () {
        this.searchInput = "";
        this.searchResultDiv = false;
    };
    DoctorAppointmentsComponent.prototype.searchInputKeyUp = function (data) {
        if (this.searchInput && this.searchInput.trim.length == 0 && this.searchInput != "") {
            if (data.code == "Enter" || data.code == "NumpadEnter") {
                this.SearchAppointementsByPatNameOrMob();
            }
        }
        else {
            this.searchResultDiv = false;
        }
    };
    DoctorAppointmentsComponent.prototype.deleteAppointment = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__confirmation_popup_confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */], {
            // width: '250px',
            data: data.patient_id.name + "'s appointment"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result == "yes") {
                _this.userService.DeleteAppointment(data._id).subscribe(function (data) {
                    console.log(data);
                    if (data.response == true) {
                        _this.toastr.success(data.message, "Success");
                        _this.ngOnInit();
                    }
                    else {
                        _this.toastr.error(data.message, "Error");
                    }
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                console.log("error or No Thanks button clicked");
            }
        });
    };
    DoctorAppointmentsComponent.prototype.SearchPatientName = function (data) {
        data = data.toLowerCase();
        if (data && data.trim() != '') {
            this.patientList = this.patientList1.filter(function (item) {
                var b = item.name.toLowerCase();
                return (b.indexOf(data) > -1);
            });
        }
        if (data == '') {
            this.patientList = this.patientList1;
        }
    };
    DoctorAppointmentsComponent.prototype.openCalender = function () {
        var _this = this;
        if (this.consultationDoctor == "") {
            this.toastr.warning("Select doctor first", "Warning");
        }
        else {
            var ob = {
                smart_assistant_id: this.doctorData.smart_assistant_id,
                doctor_id: this.consultationDoctor
            };
            this.userService.AppointmentsBySmartAssistant(ob).subscribe(function (data) {
                console.log(data);
                _this.appointmentsForCalender = [];
                if (data.response == true) {
                    for (var i = 0; i < data.data.length; i++) {
                        _this.appointmentsForCalender.push({
                            start: new Date(data.data[i]._id).toJSON().toString().substr(0, 10),
                            title: data.data[i].time.length,
                            time: data.data[i].time
                        });
                    }
                }
                _this.events = _this.appointmentsForCalender;
                _this.calendarOptions1 = {
                    editable: true,
                    eventLimit: false,
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: ''
                    },
                    events: _this.appointmentsForCalender
                };
                $("#appointmentCalenderApntList").modal("show");
            }, function (err) {
                console.log(err);
            });
        }
    };
    //calender
    DoctorAppointmentsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // hide spinner once all loaders are completed
        __WEBPACK_IMPORTED_MODULE_0__theme_services__["a" /* BaThemePreloader */].load().then(function (values) {
            _this._spinner.hide();
        });
    };
    DoctorAppointmentsComponent.prototype.resetAppointmentModal = function () {
        this.appointmentDate = new Date();
        this.appointment = {};
    };
    DoctorAppointmentsComponent.prototype.clickButton = function (model) {
        this.displayEvent = model;
    };
    DoctorAppointmentsComponent.prototype.dayClick = function (model) {
        this.calenderDateClicked(model.date._d);
    };
    DoctorAppointmentsComponent.prototype.eventClick = function (model) {
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
        this.calenderDateClicked(model.event.start._d);
    };
    DoctorAppointmentsComponent.prototype.calenderDateClicked = function (model) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (new Date(model.setHours(0, 0, 0, 0)) >= today) {
            console.log(model);
            this.appointmentDate = model;
            var day = model.toString().substr(0, 3);
            var doctor;
            var consulation;
            doctor = {};
            for (var i = 0; i < this.dataDoctors.length; i++) {
                if (this.dataDoctors[i]._id == this.appointmentDoctor) {
                    doctor = this.dataDoctors[i];
                    break;
                }
            }
            // console.log(doctor)
            var boolean = true;
            for (var i = 0; i < doctor.consultation_schedule.length; i++) {
                if (day == "Mon") {
                    if (doctor.consultation_schedule[i].Monday == true) {
                        consulation = doctor.consultation_schedule[i];
                        boolean = false;
                        break;
                    }
                }
                else if (day == "Tue") {
                    if (doctor.consultation_schedule[i].Tuesday == true) {
                        consulation = doctor.consultation_schedule[i];
                        boolean = false;
                        break;
                    }
                }
                else if (day == "Wed") {
                    if (doctor.consultation_schedule[i].Wednesday == true) {
                        consulation = doctor.consultation_schedule[i];
                        boolean = false;
                        break;
                    }
                }
                else if (day == "Thu") {
                    if (doctor.consultation_schedule[i].Thursday == true) {
                        consulation = doctor.consultation_schedule[i];
                        boolean = false;
                        break;
                    }
                }
                else if (day == "Fri") {
                    if (doctor.consultation_schedule[i].Friday == true) {
                        consulation = doctor.consultation_schedule[i];
                        boolean = false;
                        break;
                    }
                }
                else if (day == "Sat") {
                    if (doctor.consultation_schedule[i].Saturday == true) {
                        consulation = doctor.consultation_schedule[i];
                        boolean = false;
                        break;
                    }
                }
                else if (day == "Sun") {
                    if (doctor.consultation_schedule[i].Sunday == true) {
                        consulation = doctor.consultation_schedule[i];
                        boolean = false;
                        break;
                    }
                }
            }
            // console.log(consulation)
            if (boolean == false) {
                this.shiftsOfParticularDay = [];
                for (var i = 0; i < consulation.shifts.length; i++) {
                    var shiftOfOneSchedule;
                    shiftOfOneSchedule = {};
                    shiftOfOneSchedule.startHour = parseInt(consulation.shifts[i].fromTime.hour) * 60;
                    shiftOfOneSchedule.endHour = parseInt(consulation.shifts[i].toTime.hour) * 60;
                    shiftOfOneSchedule.consultationTime = parseInt(doctor.avgConsTime.substr(0, 2));
                    var startTime = shiftOfOneSchedule.startHour;
                    var endTime = shiftOfOneSchedule.endHour;
                    var schedules = [];
                    while (startTime + shiftOfOneSchedule.consultationTime <= endTime) {
                        schedules.push({
                            startHour: Math.trunc(startTime / 60).toString(),
                            startMin: Math.trunc(startTime % 60).toString(),
                            endHour: Math.trunc((startTime + shiftOfOneSchedule.consultationTime) / 60).toString(),
                            endMin: Math.trunc((startTime + shiftOfOneSchedule.consultationTime) % 60).toString()
                        });
                        this.getClassTime(schedules[schedules.length - 1]);
                        startTime = startTime + shiftOfOneSchedule.consultationTime;
                    }
                    this.shiftsOfParticularDay.push({
                        shift: schedules,
                        startHour: consulation.shifts[i].fromTime.hour.toString(),
                        startMin: consulation.shifts[i].fromTime.minute.toString(),
                        endHour: consulation.shifts[i].toTime.hour.toString(),
                        endMin: consulation.shifts[i].toTime.minute.toString()
                    });
                }
                console.log(this.shiftsOfParticularDay);
                this.checkCustomTimeShifts();
            }
            else {
                this.toastr.warning("Doctor does not work on this day", "Warning");
                return;
            }
            $("#selectAppointmentTime_EditApn").modal("show");
        }
        else {
            this.toastr.warning("Appointment cant be booked for past dates", "Warning");
        }
    };
    DoctorAppointmentsComponent.prototype.updateEvent = function (model) {
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
    };
    DoctorAppointmentsComponent.prototype.changeDoctor = function () {
        this.dateSelected = false;
    };
    DoctorAppointmentsComponent.prototype.getClassTime = function (shift) {
        var _this = this;
        if (this.appointmentsForCalender.length > 0) {
            var appointments;
            appointments = this.appointmentsForCalender.filter(function (d) { return d.start == new Date(new Date(_this.appointmentDate).setDate(_this.appointmentDate.getDate() + 1)).toJSON().toString().substr(0, 10); });
            if (appointments.length > 0) {
                for (var i = 0; i < appointments[0].time.length; i++) {
                    if (appointments[0].time[i].startHour == shift.startHour && appointments[0].time[i].startMin == shift.startMin) {
                        shift.already = true;
                    }
                }
            }
        }
    };
    DoctorAppointmentsComponent.prototype.getClassSlot = function (data) {
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        var hoursIST = ISTTime.getHours();
        var minutesIST = ISTTime.getMinutes();
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (data.already) {
            return 'already-selected';
        }
        else {
            if (today.toString() == this.appointmentDate.toString()) {
                if (data.startHour < hoursIST) {
                    return 'grey-slot';
                }
                else if (data.startHour == hoursIST) {
                    if (data.startMin <= minutesIST) {
                        return 'grey-slot';
                    }
                }
            }
            else {
                return 'blue-slot';
            }
        }
    };
    //calender end
    DoctorAppointmentsComponent.prototype.resetAppointmentModal_EditApn = function () {
        this.dateSelected = false;
        this.appointmentDate = new Date();
        this.appointmentTime = {};
        this.appointment = {};
    };
    DoctorAppointmentsComponent.prototype.AppointmentsBySmartAssistant = function () {
        var _this = this;
        if (this.appointmentDoctor == "") {
            this.toastr.warning("Select doctor first", "Warning");
        }
        else {
            var ob = {
                smart_assistant_id: this.doctorData.smart_assistant_id,
                doctor_id: this.appointmentDoctor
            };
            this.userService.AppointmentsBySmartAssistant(ob).subscribe(function (data) {
                console.log(data);
                _this.appointmentsForCalender = [];
                if (data.response == true) {
                    for (var i = 0; i < data.data.length; i++) {
                        _this.appointmentsForCalender.push({
                            start: new Date(data.data[i]._id).toJSON().toString().substr(0, 10),
                            title: data.data[i].time.length,
                            time: data.data[i].time
                        });
                    }
                    console.log(_this.appointmentsForCalender);
                }
                _this.events = _this.appointmentsForCalender;
                _this.calendarOptions = {
                    editable: true,
                    eventLimit: false,
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: ''
                    },
                    events: _this.appointmentsForCalender
                };
                $("#appointmentCalender_EditApn").modal("show");
            }, function (err) {
                console.log(err);
            });
        }
    };
    DoctorAppointmentsComponent.prototype.updateAppointment = function () {
        var _this = this;
        if (!isNaN(this.appointment.phone) && this.appointment.phone.length > 9 && this.appointment.name.trim().length > 0) {
            var lowerCase = (/[a-z]/.test(this.appointment.name));
            var upperCase = (/[A-Z]/.test(this.appointment.name));
            var numberCase = (/[0-9]/.test(this.appointment.name));
            if (lowerCase || upperCase || numberCase) {
                var object = void 0;
                object = {};
                object.date = this.appointmentDate,
                    object.time = this.appointmentTime,
                    object.doctor_id = this.appointmentDoctor,
                    object.patient_mobile = this.appointment.phone,
                    object.patient_name = this.appointment.name,
                    object.smart_assistant_id = this.doctorData.smart_assistant_id;
                object.date = new Date(object.date).setDate(this.appointmentDate.getDate() + 1);
                var doctor = this.dataDoctors.filter(function (d) { return d._id.toString() == _this.appointmentDoctor.toString(); });
                object.clinic_id = doctor[0].doctm_clinic_id;
                object.update_id = this.dataToUpdateForAppointment.id;
                this.loading = true;
                $("#appointmentForm_EditApn").modal("hide");
                this.userService.UpdateAppointment(object).subscribe(function (data) {
                    console.log(data);
                    _this.loading = false;
                    if (data.response == true) {
                        _this.toastr.success(data.message, "Success");
                        _this.ngOnInit();
                        // this.router.navigate(['/header-three-layout']); 
                    }
                    else {
                        _this.toastr.error(data.message, "Error");
                        return;
                    }
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                this.toastr.error("Invalid detail", "Error");
                return;
            }
        }
        else {
            this.toastr.error("Invalid detail", "Error");
            return;
        }
    };
    DoctorAppointmentsComponent.prototype.checkCustomTimeShifts = function () {
        var _this = this;
        this.customShifts = [];
        if (this.appointmentsForCalender.length > 0) {
            var appointments;
            appointments = this.appointmentsForCalender.filter(function (d) { return d.start == new Date(new Date(_this.appointmentDate).setDate(_this.appointmentDate.getDate() + 1)).toJSON().toString().substr(0, 10); });
            if (appointments.length > 0) {
                for (var i = 0; i < appointments[0].time.length; i++) {
                    if (appointments[0].time[i].customTime) {
                        this.customShifts.push(appointments[0].time[i]);
                    }
                }
            }
        }
    };
    DoctorAppointmentsComponent.prototype.onTimeSelection = function (data) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (data.already == true) {
            this.toastr.warning("Time slot already booked", "Warning");
            return;
        }
        else if (today.toString() == this.appointmentDate.toString()) {
            var currentTime = new Date();
            var currentOffset = currentTime.getTimezoneOffset();
            var ISTOffset = 330;
            var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
            var hoursIST = ISTTime.getHours();
            var minutesIST = ISTTime.getMinutes();
            if (data.startHour < hoursIST) {
                this.toastr.warning("Passed time slots can not be booked", "Warning");
                return;
            }
            else if (data.startHour == hoursIST) {
                if (data.startMin <= minutesIST) {
                    this.toastr.warning("Passed time slots can not be booked", "Warning");
                    return;
                }
            }
            this.appointmentTime = data;
            $("#selectAppointmentTime_EditApn").modal("hide");
            $("#appointmentCalender_EditApn").modal("hide");
            this.dateSelected = true;
        }
        else {
            this.appointmentTime = data;
            $("#selectAppointmentTime_EditApn").modal("hide");
            $("#appointmentCalender_EditApn").modal("hide");
            this.dateSelected = true;
        }
    };
    DoctorAppointmentsComponent.prototype.SaveAppointmentForCustomTime = function (customTime) {
        var doctor;
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if (this.dataDoctors[i]._id.toString() == this.appointmentDoctor.toString()) {
                doctor = this.dataDoctors[i];
            }
        }
        var boolean = false;
        for (var i = 0; i < this.shiftsOfParticularDay.length; i++) {
            for (var j = 0; j < this.shiftsOfParticularDay[i].shift.length; j++) {
                if (this.shiftsOfParticularDay[i].shift[j].already == true &&
                    this.shiftsOfParticularDay[i].shift[j].startHour == customTime.hour &&
                    this.shiftsOfParticularDay[i].shift[j].startMin == customTime.minute) {
                    this.toastr.warning("Time slot already booked", "Warning");
                    boolean = true;
                    return;
                }
                else if (this.shiftsOfParticularDay[i].shift[j].startHour == customTime.hour &&
                    this.shiftsOfParticularDay[i].shift[j].startMin == customTime.minute) {
                    this.toastr.warning("Time slot already exists", "Warning");
                    boolean = true;
                    return;
                }
                else if ((((parseInt(customTime.hour) * 60) + parseInt(customTime.minute)) <
                    ((parseInt(this.shiftsOfParticularDay[i].shift[j].endHour) * 60) + parseInt(this.shiftsOfParticularDay[i].shift[j].endMin))) &&
                    (((parseInt(customTime.hour) * 60) + parseInt(customTime.minute)) >=
                        ((parseInt(this.shiftsOfParticularDay[i].shift[j].startHour) * 60) + parseInt(this.shiftsOfParticularDay[i].shift[j].startMin)))) {
                    this.toastr.warning("In between time slots are not allowed", "Warning");
                    boolean = true;
                    return;
                }
                else if (((parseInt(customTime.hour) * 60) + parseInt(customTime.minute)) %
                    parseInt(doctor.avgConsTime.substr(0, 2)) != 0) {
                    this.toastr.warning("Time slot format mismatches", "Warning");
                    boolean = true;
                    return;
                }
            }
        }
        for (var j = 0; j < this.customShifts.length; j++) {
            if (this.customShifts[j].startHour == customTime.hour &&
                this.customShifts[j].startMin == customTime.minute) {
                this.toastr.warning("Time slot already booked", "Warning");
                boolean = true;
                return;
            }
        }
        if (boolean == false) {
            var today = new Date();
            today.setHours(0, 0, 0, 0);
            if (today.toString() == this.appointmentDate.toString()) {
                var currentTime = new Date();
                var currentOffset = currentTime.getTimezoneOffset();
                var ISTOffset = 330;
                var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
                var hoursIST = ISTTime.getHours();
                var minutesIST = ISTTime.getMinutes();
                if (customTime.hour < hoursIST) {
                    this.toastr.warning("Passed time slots can not be booked", "Warning");
                    return;
                }
                else if (customTime.hour == hoursIST) {
                    if (customTime.Minute <= minutesIST) {
                        this.toastr.warning("Passed time slots can not be booked", "Warning");
                        return;
                    }
                }
            }
            this.appointmentTime = {};
            this.appointmentTime.startHour = customTime.hour.toString(),
                this.appointmentTime.startMin = customTime.minute.toString(),
                this.appointmentTime.endHour = null;
            this.appointmentTime.endMin = null;
            this.appointmentTime.customTime = true;
            $("#selectAppointmentTime_EditApn").modal("hide");
            $("#appointmentCalender_EditApn").modal("hide");
            this.dateSelected = true;
        }
    };
    DoctorAppointmentsComponent.prototype.editAppointmentOpenModal = function (data) {
        console.log(data);
        this.dataToUpdateForAppointment = data;
        this.dateSelected = true;
        this.appointmentDoctor = data.doctor_id._id;
        this.appointmentDate = new Date(new Date(data.date).setDate(new Date(data.date).getDate() - 1));
        this.appointmentTime = data.time;
        this.appointment.phone = data.patient_id.mobile;
        this.appointment.name = data.patient_id.name;
        $("#appointmentForm_EditApn").modal("show");
    };
    DoctorAppointmentsComponent.prototype.editAppointmentOpenModalSearch = function (data) {
        console.log(data);
        this.dataToUpdateForAppointment = data;
        this.dateSelected = true;
        this.appointmentDoctor = data.doctor_id._id;
        this.appointmentDate = new Date(new Date(data.date));
        this.appointmentTime = data.time;
        this.appointment.phone = data.patient_id.mobile;
        this.appointment.name = data.patient_id.name;
        $("#appointmentForm_EditApn").modal("show");
    };
    DoctorAppointmentsComponent.prototype.refresh = function () {
        //this.smartAssistantData = JSON.parse(localStorage['smartAssistantDetails'])
        var _this = this;
        this.pulse_range = [];
        var valuePulse = 30;
        while (valuePulse < 181) {
            this.pulse_range.push(valuePulse);
            valuePulse++;
        }
        this.sys_range = [];
        var valueSys = 70;
        while (valueSys < 191) {
            this.sys_range.push(valueSys);
            valueSys++;
        }
        this.dia_range = [];
        var valueDia = 40;
        while (valueDia < 101) {
            this.dia_range.push(valueDia);
            valueDia++;
        }
        this.temperature_range = [];
        var valueTem = 97;
        while (valueTem < 107) {
            this.temperature_range.push(valueTem);
            valueTem++;
        }
        this.rbs_range = [];
        var valueRbs = 50;
        while (valueRbs < 401) {
            this.rbs_range.push(valueRbs);
            valueRbs++;
        }
        this.spo_range = [];
        var valueSpo = 80;
        while (valueSpo < 100) {
            this.spo_range.push(valueSpo);
            valueSpo++;
        }
        this.todayAppointments = [];
        this.todayAppointments_copy = [];
        this.tomorrowAppointments = [];
        this.tomorrowAppointments_copy = [];
        this.webCam = false;
        this.appointment = {};
        this.patientList = [];
        this.patientList1 = [];
        this.reportPics = [];
        this.searchResultDiv = false;
        this.searchInput = "";
        this.appointmentDoctor = "";
        this.appointmentsForCalender = [];
        this.appointmentTime = {};
        this.dateSelected = false;
        this.customShifts = [];
        var object = {
            smart_assistant_id: this.doctorData.smart_assistant_id
        };
        this.userService.GetSmartAssistantDataAfterLogin(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.dataDoctors = data.doctorsRegisteredForSmartClinic;
                _this.TodayTmrwAppointmentsBySmartAssistant();
            }
        }, function (err) {
            console.log(err);
        });
    };
    DoctorAppointmentsComponent.prototype.getDoctorName = function (id) {
        var doctor = this.dataDoctors.filter(function (d) { return d._id.toString() == id.toString(); });
        return doctor[0].first_name;
    };
    DoctorAppointmentsComponent.prototype.getAppointmentMinToShow = function (min) {
        if (min < 10) {
            return "0" + min;
        }
        else {
            return min;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9_ng_fullcalendar__["a" /* CalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9_ng_fullcalendar__["a" /* CalendarComponent */])
    ], DoctorAppointmentsComponent.prototype, "ucCalendar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9_ng_fullcalendar__["a" /* CalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9_ng_fullcalendar__["a" /* CalendarComponent */])
    ], DoctorAppointmentsComponent.prototype, "ucCalendar1", void 0);
    DoctorAppointmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-doctor-appointments',
            template: __webpack_require__("../../../../../src/app/header-two-layout/doctor-appointments/doctor-appointments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/doctor-appointments/doctor-appointments.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_0__theme_services__["b" /* BaThemeSpinner */]])
    ], DoctorAppointmentsComponent);
    return DoctorAppointmentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/doctor-appointments/doctor-appointments.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorAppointmentsModule", function() { return DoctorAppointmentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_appointments_component__ = __webpack_require__("../../../../../src/app/header-two-layout/doctor-appointments/doctor-appointments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctor_appointments_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/doctor-appointments/doctor-appointments-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_google_places_autocomplete__ = __webpack_require__("../../../../ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_google_places_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_google_places_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_webcam__ = __webpack_require__("../../../../ngx-webcam/ngx-webcam.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_fullcalendar__ = __webpack_require__("../../../../ng-fullcalendar/ng-fullcalendar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DoctorAppointmentsModule = /** @class */ (function () {
    function DoctorAppointmentsModule() {
    }
    DoctorAppointmentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__doctor_appointments_routing_module__["a" /* DoctorAppointmentsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_google_places_autocomplete__["GooglePlaceModule"],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY',
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_webcam__["a" /* WebcamModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng_fullcalendar__["b" /* FullCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__doctor_appointments_component__["a" /* DoctorAppointmentsComponent */]]
        })
    ], DoctorAppointmentsModule);
    return DoctorAppointmentsModule;
}());



/***/ })

});
//# sourceMappingURL=doctor-appointments.module.chunk.js.map