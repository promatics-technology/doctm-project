webpackJsonp(["dashboard-consultation-investigation.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-investigation/dashboard-consultation-investigation-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardConsultationInvestigationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_consultation_investigation_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-investigation/dashboard-consultation-investigation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_consultation_investigation_component__["a" /* DashboardConsultationInvestigationComponent */]
    }
];
var DashboardConsultationInvestigationRoutingModule = /** @class */ (function () {
    function DashboardConsultationInvestigationRoutingModule() {
    }
    DashboardConsultationInvestigationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardConsultationInvestigationRoutingModule);
    return DashboardConsultationInvestigationRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-investigation/dashboard-consultation-investigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cus-content-wrapper{\r\n\tpadding-top: 0px;\r\n\tpadding-bottom: 0px;\r\n}\r\n.hding > h3{\r\n\tmargin: 0px;\r\n\tpadding:15px 0px;\r\n\tbackground-color: #d9e0dd; \r\n}\r\n.hding  h5.btm{\r\n\tmargin: 0px;\r\n\tpadding:15px 0px;\r\n\tbackground-color: #d9e0dd; \r\n}\r\n.cstm-tbl{\r\n\twidth: 100%;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n}\r\n.clr-vlt{\r\n    color: #5c62af;\r\n}\r\n.tb-1{\r\n\tmargin-top:15px;\r\n}\r\n.tb-1 tr td{\r\n\tpadding:2px 8px;\r\n\tvertical-align: middle; \r\n}\r\n.cstm-tbl tr{\r\n\theight:40px;\r\n}\r\n.footer-cstm-an{\r\n\tposition: fixed;\r\n    float: left;\r\n    width: 100%;\r\n    bottom:0px;\r\n    background: #00b0f0;\r\n    color:#fff;\r\n    z-index: 99;\r\n    padding-top: 8px;\r\n}\r\n.mt-table h3{\r\n\tmargin-top: 0px;\r\n}\r\n.cstm-tr{\r\n\tbackground-color:#92d050;\r\n\tcolor:#fff;\r\n\ttext-align: center;\r\n}\r\n.cstm-tr-2{\r\n\tbackground-color:#c5d8f1;\r\n}\r\n.cstm-tr-2 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-2 td:last-child {\r\n border-right: none;\r\n}\r\n.cstm-tr-3{\r\n\tborder-bottom:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td:last-child {\r\n border-right: none;\r\n}\r\n.color-red {\r\n    color: #ff0000;\r\n    -webkit-transform: translateY(-8px);\r\n            transform: translateY(-8px);\r\n}\r\n.cstm-tr-4{\r\n\tbackground-color: #f2dada;\r\n}\r\n.cstm-mg{\r\n\tmargin-top: 5px;\r\n}\r\n.btn-go{\r\n\tbackground-color: transparent;\r\n    border: 1px solid #002160;\r\n    margin-bottom: 5px;\r\n    min-width: 62%;\r\n}\r\n.btn-go:hover{\r\n    -webkit-transition: 300ms;\r\n    transition: 300ms;\r\n    background: #98C74F;\r\n    border-color: #98C74F;\r\n    color: #fff;\r\n}\r\n.li-cstm a{\r\n\ttext-align: center!important;\r\n    background: #000!important;\r\n    color: #fff!important;\r\n    font-size: 16px!important;\r\n    font-weight: inherit!important;\r\n    padding: 6px!important;\r\n}\r\n.cus-sidebar{\r\n\theight: inherit!important;\r\n}\r\n/*karam @ 2019*/\r\n.side-bar-cstm{\r\n\tz-index: 99;\r\n}\r\n.res-tab-2{\r\n\tmax-height: 225px;\r\n}\r\n.cstm-ul-new li{\r\n\twidth:170px;\r\n}\r\n.cstm-ul-new li a{\r\n\tbackground-color:transparent;\r\n\tcolor:#000;\r\n\tpadding:10px;\r\n\tcursor: pointer;\r\n\tborder-radius: 0px;\r\n\tborder-bottom: 2px solid transparent; \r\n\ttext-align: center;\r\n}\r\n.cstm-ul-new li.active a{\r\n\tbackground-color: #e0e0e0;\r\n    color: #000;\r\n\tborder-bottom: 2px solid #00b0f0;\r\n}\r\n.tab-new{\r\n\tmin-height: 450px;\r\n    max-height: 450px;\r\n    padding: 0px 8px;\r\n    border-left: 1px solid #dcdcdc;\r\n    border-right: 1px solid #dcdcdc;\r\n    overflow-x: hidden;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n    font-weight: bold;\r\n}\r\n/*karam@30-jan-2019*/\r\n/*.tab-new-cstm tr td{\r\n\tfont-size: 10px;\r\n}*/\r\n.brder-cstm{\r\n\tpadding-bottom: 1px;\r\n    margin-bottom: 6px;\r\n    border-bottom: 1px solid #a7a7a7;\r\n    position: relative;\r\n}\r\n.brder-cstm::after{\r\n\tcontent: \"\";\r\n    position: absolute;\r\n    height: 6px;\r\n    width: 12px;\r\n    background-color: #ffffff;\r\n    top: 41px;\r\n    right: -3px;\r\n\t \r\n}\r\n.cus-sidebar ul{\r\n\tborder:1px solid #a7a7a7;\r\n}\r\n.mg-0{\r\n\tmargin-top: 0px;\r\n}\r\n.mg-bt{\r\n\tmargin-bottom:2px; \r\n}\r\n.txt-thm{\r\n\tcolor: rgb(0,32,96);\r\n}\r\n.txt-thm-1{\r\n\tcolor: rgb(0,112,192);\r\n}\r\n.foot-2{\r\n\tborder-bottom:1px solid #a7a7a7;\r\n\tword-spacing: 14px;\r\n}\r\n.hdr-2{\r\n\tpadding-bottom: 8px;\r\n\tborder-bottom:1px solid #a7a7a7;\r\n}\r\n.brdr-lft{\r\n\tmargin-left:-5px;\r\n\tborder-left:1px solid #a7a7a7; \r\n}\r\n.evn{\r\n\tbackground-color:#eff3ef;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-investigation/dashboard-consultation-investigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"analytics-sec\">\n\t\n\t<div class=\"ipd-deatil-sec\">\n\t\t<!-- <div class=\"md-tab\">\n\t    \n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t          \t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-prescription\"> Consultation </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-pharmacy-detail\"> Clinic Services </a></li>\n\t      \t</ul>\n\t      </div> -->\n\n\t      <div class=\"inner-tab\">\n\t      \t<!-- Nav tabs -->\n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t      \t\t<li role=\"presentation\" ><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-patient\"> OPD </a></li>\n\t      \t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-time\"> Time</a></li>\n\t      \t\t<li role=\"presentation\" *ngIf = \"doctorData.digital_precipitation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-prescription\">Prescription</a></li>\n\t      \t\t<!--li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-treatment\"> Pharmacy</a></li>\n\t      \t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-diagnosis\"> Diagnostics </a></li>\n\t      \t\t<li role=\"presentation\"  class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-investigation\"> IPD </a></li-->\n\t\t\t\t<li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor' && doctorData.clinic_services.Clinic_Pharmacy==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-treatment\"> Pharmacy</a></li>\n\t          \t<li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor' && doctorData.clinic_services.Clinic_Diagnostics==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-diagnosis\"> Diagnostics </a></li>\n\t          \t<li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor' && doctorData.clinic_services.Clinic_IPD==true\"  class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-investigation\" class=\"active\"> IPD </a></li>\n\t      \t</ul>\n\t      </div>\n\n\t      \t<div class=\"ipd-body\">\n\t\t      \t<div class=\"cus-sidebar-wrapper side-bar-cstm\">\n\t\t      \t\t<div class=\"cus-sidebar\">\n\t\t      \t\t\t<ul> \n\t\t      \t\t\t\t<li>\n\t\t      \t\t\t\t\t<div class=\"\">\n\t\t      \t\t\t\t\t\t<div class=\"col-lg-3\">\n\t\t      \t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>From</b></h4>\n\t\t      \t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t<div class=\"col-lg-9\">\n\t\t      \t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t\t      \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"fromDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t\t      \t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t</div>\n\t\t      \t\t\t\t</li>\n\t\t      \t\t\t\t<li>\n\t\t      \t\t\t\t\t<div class=\"\">\n\t\t      \t\t\t\t\t\t<div class=\"col-lg-3\">\n\t\t      \t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>To</b></h4>\n\t\t      \t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t<div class=\"col-lg-9\">\n\t\t      \t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t\t      \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"toDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t\t      \t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t</div>\n\t\t      \t\t\t\t</li>\n\t\t      \t\t\t\t<li class=\"text-right brder-cstm\">\n\t    \t\t\t\t\t\t<div class=\"col-lg-12 text-center\">\n\t\t      \t\t\t\t\t\t<button class=\"btn btn-go\" (click)=\"go()\">Go</button>\n\t\t      \t\t\t\t\t</div>\n\t\t      \t\t\t\t</li>\n\t\t      \t\t\t\t<li class=\"li-cstm\"> <a href=\"javascript:void(0);\"> For Past</a> </li>\n\t\t      \t\t\t\t<!-- <li class=\"{{getClass(0)}}\" (click)=\"activatetab(0)\" class=\"active\"> <a href=\"javascript:void(0);\"> Current </a> </li> -->\n\t\t      \t\t\t\t<li class=\"{{getClass(1)}}\" (click)=\"activatetab(1)\"> <a href=\"javascript:void(0);\"> 1 Week &nbsp;<small *ngIf=\"activatedtab==1\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t\t      \t\t\t\t<li class=\"{{getClass(2)}}\" (click)=\"activatetab(2)\"> <a href=\"javascript:void(0);\"> 2 Weeks &nbsp;<small *ngIf=\"activatedtab==2\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small>  </a> </li>\n\t\t      \t\t\t\t<li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month &nbsp;<small *ngIf=\"activatedtab==3\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t\t      \t\t\t\t<li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month &nbsp;<small *ngIf=\"activatedtab==4\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t      \t\t\t\t<li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month &nbsp;<small *ngIf=\"activatedtab==5\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t      \t\t\t\t<li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year &nbsp;<small *ngIf=\"activatedtab==6\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t      \t\t\t\t<li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> All </a> </li>\n\t\t      \t\t\t</ul>\n\t\t      \t\t</div>\n\t\t      \t</div>\n\t\t      \t<div class=\"cus-content-wrapper\">\n\t\t      \t\t<div class=\"cus-content\">\n\t\t      \t\t\t<div class=\"row brdr-lft\">\n\t\t      \t\t\t\t<div class=\"col-lg-12 text-center\">\n\t\t      \t\t\t\t\t<h1 class=\"mg-bt txt-thm\"><u>Collection</u></h1>\n\t\t      \t\t\t\t\t<h2 class=\"mg-0 hdr-2\"><span class=\"txt-thm\">Rs.</span> <span class=\"txt-thm-1\">{{finalTotal}}</span></h2>\n\t\t      \t\t\t\t\t<ul class=\"nav nav-tabs cstm-ul-new\">\n\t\t      \t\t\t\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#home-cstm\" (click)=\"getDoctorId(0)\">IPD Aggregate</a></li>\n\t\t      \t\t\t\t\t\t<li *ngFor=\"let doctor of doctorArray\"><a data-toggle=\"tab\" href=\"#menu1-cstm\" (click)=\"getDoctorId(getDoctorFirstName(doctor._id))\">Dr. {{getDoctorFirstName(doctor.first_name)}}</a></li>\n\t\t      \t\t\t\t\t</ul>\n\t\t      \t\t\t\t\t<div class=\"tab-content\">\n\t\t      \t\t\t\t\t\t<div id=\"home-cstm\" class=\"tab-pane fade in active\">\n\t\t      \t\t\t\t\t\t\t<div class=\"cstm-pad\">\n\t\t      \t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t      \t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t      \t\t\t\t\t\t\t\t\t\t<table class=\"table tb-1\">\n\t\t      \t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left;\" width=\"550px\">Patients Admitted</td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{patientAdmitted}}&nbsp;<span class=\"grin\"><small>({{getData(patientAdmittedPercentage)}}%)</small></span></b></td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left;\" width=\"550px\">Admission Rate</td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(admisssionRate)}}%&nbsp;</b></td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left;\" width=\"550px\">Revenue contribution</td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{DocWiseTotal}}&nbsp;</b></td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left;\" width=\"550px\">Avg revenue per admission</td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(totalAvgBill)}}&nbsp;</b></td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left;\" width=\"550px\">Admission Hrs.</td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(totalAdmissionHours)}}&nbsp;</b></td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left;\" width=\"550px\">Patients Discharged</td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{patientDischarge}}&nbsp;<!-- <span class=\"grin\"><small>({{getData(patientDischargedPercentage)}}%)</small></span> --></b></td>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t      \t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t      \t\t\t\t\t\t\t\t\t\t</table>\n\t\t      \t\t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t</div>\n\t\t      \t\t\t\t</div>\n\t\t      \t\t\t\t<div class=\"container-fluid\">\n\t\t      \t\t\t\t\t<div class=\"col-lg-12 text-center foot-2\">\n\t\t      \t\t\t\t\t\t<h5 style=\"font-weight: normal;\">\n\t\t      \t\t\t\t\t\t\t<b style=\"background-color: rgb(199,220,244);padding:5px; \">\n\t\t      \t\t\t\t\t\t\t\tCURRENT OCCUPANCY STATUS:\n\t\t      \t\t\t\t\t\t\t</b>\n\t\t      \t\t\t\t\t\t\t<span style=\"background-color: rgb(199,220,244);padding:6px; \">\n\t\t      \t\t\t\t\t\t\t\tTOTAL BEDS <b>- {{getData(totalGeneralBeds + totalSemiPrivateBeds + totalPrivateBeds)}} |</b>\n\t\t      \t\t\t\t\t\t\t\tOCCUPIED <b>- {{patientAdmittedlength}} | </b>\n\t\t      \t\t\t\t\t\t\t\tVACANT- <b>{{getData((totalGeneralBeds + totalSemiPrivateBeds + totalPrivateBeds)-(patientAdmittedlength))}}</b>\n\t\t      \t\t\t\t\t\t\t</span>\n\t\t      \t\t\t\t\t\t</h5>\n\t\t      \t\t\t\t\t</div>\n\t\t      \t\t\t\t</div>\n\t\t      \t\t\t</div>\n\t\t      \t\t</div>\n\t\t      \t</div>\n\t     \t</div>\n\t  </div>\n\t</div>\n\t<div class=\"container footer-cstm-an\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-5 text-right\">\n\t\t\t\t<div>\n\t\t\t\t\t<p>CURRENT OCCUPANCY: <b>{{getData(patientAdmittedOccupency)}}% </b></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"text-center col-lg-2\">\n\t\t\t\t<span>|</span>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-5 text-left\">\n\t\t\t\t<div>\n\t\t\t\t\t<p>ADMISSION TREND : <b>Rising:</b> Falling : Steady</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-investigation/dashboard-consultation-investigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardConsultationInvestigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardConsultationInvestigationComponent = /** @class */ (function () {
    // totalAvgHours
    function DashboardConsultationInvestigationComponent(userService, toastr) {
        this.userService = userService;
        this.toastr = toastr;
        this.fromDate = new Date();
        this.toDate = new Date();
        this.fromDate1 = new Date();
        this.toDate1 = new Date();
        this.newDate = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy',
            defaultOpen: false
        };
    }
    DashboardConsultationInvestigationComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        this.activatedtab = 0;
        this.generalPatient = [];
        this.privatepatient = [];
        this.semiPrivatePatient = [];
        this.dataArray = [];
        this.dataDispense = [];
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        this.activatetab(1);
    };
    DashboardConsultationInvestigationComponent.prototype.getDoctorFirstName = function (doctor) {
        var doc = doctor.split(" ");
        return doc[0];
    };
    DashboardConsultationInvestigationComponent.prototype.activatetab = function (i) {
        var _this = this;
        this.activatedtab = i;
        this.generalPatient = [];
        this.privatepatient = [];
        this.semiPrivatePatient = [];
        this.doctorArray = [];
        this.dataArray = [];
        this.totalGeneralBeds = 0;
        this.totalSemiPrivateBeds = 0;
        this.totalPrivateBeds = 0;
        this.totalAdmissionHours = 0;
        this.DocWiseTotal = 0;
        this.totalAvgBill = 0;
        this.ipdLength = 0;
        this.patientDischarge = 0;
        this.patientAdmitted = 0;
        this.patientAdmittedlength = 0;
        this.patientAdmittedOccupency = 0;
        this.patientAdmittedPercentage = 0;
        this.patientDischargedPercentage = 0;
        this.finalTotal = 0;
        this.admisssionRate = 0;
        this.dataDispense = [];
        this.dataDischarge = [];
        // this.totalAvgHours=0
        var object;
        object = {};
        var date = new Date();
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id;
        object.end_date = new Date();
        if (i == 0) {
            object.start_date = date;
        }
        else if (i == 1) {
            object.start_date = new Date(date.setDate(date.getDate() - 6));
        }
        else if (i == 2) {
            object.start_date = new Date(date.setDate(date.getDate() - 13));
        }
        else if (i == 3) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 1));
        }
        else if (i == 4) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 3));
        }
        else if (i == 5) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 6));
        }
        else if (i == 6) {
            object.start_date = new Date(date.setFullYear(date.getFullYear() - 1));
        }
        else if (i == 7) {
            object.start_date = new Date();
            object.maximum = true;
        }
        this.fromDate = new Date(object.start_date);
        this.toDate = new Date(object.end_date);
        this.loading = true;
        this.userService.IpdAnalytics(object).subscribe(function (result) {
            console.log(result);
            _this.doctorArray = result.dataDoctors;
            if (result.response) {
                _this.dataArray = result.data;
                _this.dataDispense = result.dataDispensed;
                _this.dataDischarge = result.dataDischarge;
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.dataArray[i].total_bill = 0;
                    _this.dataArray[i].admissionHours = 0;
                    _this.ipdLength += _this.dataArray[i].dataIpd.length;
                    for (var j = 0; j < _this.dataArray[i].dataIpd.length; j++) {
                        _this.patientAdmitted++;
                        _this.patientAdmittedlength++;
                        if (_this.dataArray[i].dataIpd[j].duration_days || _this.dataArray[i].dataIpd[j].duration_hours) {
                            _this.dataArray[i].admissionHours += (_this.dataArray[i].dataIpd[j].duration_days * 24) + (_this.dataArray[i].dataIpd[j].duration_hours);
                        }
                        if (_this.dataArray[i].dataIpd[j].total_bill) {
                            _this.dataArray[i].total_bill += _this.dataArray[i].dataIpd[j].total_bill;
                            _this.DocWiseTotal += _this.dataArray[i].dataIpd[j].total_bill;
                        }
                        if (_this.dataArray[i].dataIpd[j].type == "general") {
                            _this.generalPatient.push(_this.dataArray[i].dataIpd[j]);
                        }
                        else if (_this.dataArray[i].dataIpd[j].type == "private") {
                            _this.privatepatient.push(_this.dataArray[i].dataIpd[j]);
                        }
                        else {
                            _this.semiPrivatePatient.push(_this.dataArray[i].dataIpd[j]);
                        }
                    }
                    _this.totalAdmissionHours += _this.dataArray[i].admissionHours;
                }
                for (var i = 0; i < _this.dataDischarge.length; i++) {
                    for (var j = 0; j < _this.dataDischarge[i].dataIpd.length; j++) {
                        _this.patientDischarge++;
                    }
                }
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.finalTotal += _this.dataArray[i].total_bill;
                    _this.totalAvgBill += (_this.dataArray[i].total_bill / _this.ipdLength);
                }
                for (var i = 0; i < _this.doctorArray.length; i++) {
                    if (_this.doctorArray[i].type_of_doctor == "admin_doctor") {
                        _this.totalGeneralBeds += _this.doctorArray[i].clinic_services.general_beds;
                        _this.totalPrivateBeds += _this.doctorArray[i].clinic_services.private_beds;
                        _this.totalSemiPrivateBeds += _this.doctorArray[i].clinic_services.semi_private_beds;
                        break;
                    }
                }
            }
            _this.patientAdmittedPercentage = (_this.patientAdmitted * 100) / _this.ipdLength;
            _this.patientDischargedPercentage = (_this.patientDischarge * 100) / _this.ipdLength;
            _this.patientAdmittedOccupency = (_this.patientAdmittedlength * 100) / (_this.totalGeneralBeds + _this.totalPrivateBeds + _this.totalSemiPrivateBeds);
            _this.admisssionRate = (_this.patientAdmittedlength * 100) / _this.dataDispense.length;
            if (_this.doctorArray.length > _this.dataArray.length) {
                for (var i = 0; i < _this.doctorArray.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.dataArray.length; j++) {
                        if (_this.doctorArray[i]._id.toString() == _this.dataArray[j]._id.toString()) {
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        _this.dataArray.push({
                            _id: _this.doctorArray[i]._id,
                            dataIpd: []
                        });
                    }
                }
            }
            _this.getDoctorId(0);
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardConsultationInvestigationComponent.prototype.getDoctorId = function (id) {
        this.generalPatient = [];
        this.privatepatient = [];
        this.semiPrivatePatient = [];
        this.totalAdmissionHours = 0;
        this.DocWiseTotal = 0;
        this.totalAvgBill = 0;
        this.ipdLength = 0;
        this.patientDischarge = 0;
        this.patientAdmitted = 0;
        this.patientAdmittedPercentage = 0;
        this.patientDischargedPercentage = 0;
        this.admisssionRate = 0;
        var localDataArray = [];
        var rate = 0;
        if (id == 0) {
            localDataArray = this.dataArray;
            rate = this.dataDispense.length;
        }
        else {
            for (var i = 0; i < this.dataDischarge.length; i++) {
                if (this.dataDischarge._id == id) {
                    for (var j = 0; j < this.dataDischarge[i].dataIpd.length; j++) {
                        this.patientDischarge++;
                    }
                }
            }
            for (var i = 0; i < this.dataArray.length; i++) {
                if (this.dataArray[i]._id == id) {
                    localDataArray.push(this.dataArray[i]);
                    break;
                }
            }
            for (var j = 0; j < this.dataDispense.length; j++) {
                if (localDataArray[0]._id == this.dataDispense[j].doctor_id) {
                    rate++;
                }
            }
        }
        for (var i = 0; i < localDataArray.length; i++) {
            this.ipdLength += localDataArray[i].dataIpd.length;
            localDataArray[i].total_bill = 0;
            localDataArray[i].admissionHours = 0;
            for (var j = 0; j < localDataArray[i].dataIpd.length; j++) {
                this.patientAdmitted++;
                if (localDataArray[i].dataIpd[j].duration_days || localDataArray[i].dataIpd[j].duration_hours) {
                    localDataArray[i].admissionHours += (localDataArray[i].dataIpd[j].duration_days * 24) + (localDataArray[i].dataIpd[j].duration_hours);
                }
                if (localDataArray[i].dataIpd[j].total_bill) {
                    localDataArray[i].total_bill += localDataArray[i].dataIpd[j].total_bill;
                    this.DocWiseTotal += localDataArray[i].dataIpd[j].total_bill;
                }
                if (localDataArray[i].dataIpd[j].type == "general") {
                    this.generalPatient.push(localDataArray[i].dataIpd[j]);
                }
                else if (localDataArray[i].dataIpd[j].type == "private") {
                    this.privatepatient.push(localDataArray[i].dataIpd[j]);
                }
                else {
                    this.semiPrivatePatient.push(localDataArray[i].dataIpd[j]);
                }
                if (localDataArray[i].dataIpd[j].discharge) {
                    this.patientDischarge++;
                }
            }
            this.totalAdmissionHours += localDataArray[i].admissionHours;
            // for (var k = 0; k < this.dataDispense.length; k++) {
            // 	if(localDataArray[i]._id == this.dataDispense[k].doctor_id){
            // 		rate++
            // 	}
            // }
        }
        this.admisssionRate = (this.patientAdmitted * 100) / rate;
        this.patientAdmittedPercentage = (this.patientAdmitted * 100) / this.ipdLength;
        this.patientDischargedPercentage = (this.patientDischarge * 100) / this.ipdLength;
        for (var i = 0; i < localDataArray.length; i++) {
            this.totalAvgBill += (localDataArray[i].total_bill / this.ipdLength);
        }
    };
    DashboardConsultationInvestigationComponent.prototype.go = function () {
        var _this = this;
        this.activatedtab = 0;
        this.generalPatient = [];
        this.privatepatient = [];
        this.semiPrivatePatient = [];
        this.doctorArray = [];
        this.dataArray = [];
        this.totalGeneralBeds = 0;
        this.totalSemiPrivateBeds = 0;
        this.totalPrivateBeds = 0;
        this.totalAdmissionHours = 0;
        this.DocWiseTotal = 0;
        this.totalAvgBill = 0;
        this.ipdLength = 0;
        this.patientDischarge = 0;
        this.patientAdmitted = 0;
        this.patientAdmittedlength = 0;
        this.patientAdmittedOccupency = 0;
        this.patientAdmittedPercentage = 0;
        this.patientDischargedPercentage = 0;
        this.finalTotal = 0;
        this.admisssionRate = 0;
        this.dataDispense = [];
        this.dataDischarge = [];
        var object;
        object = {};
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id;
        object.start_date = this.fromDate1;
        object.end_date = this.toDate1;
        console.log(object);
        if (new Date(this.toDate1).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        this.loading = true;
        this.userService.IpdAnalytics(object).subscribe(function (result) {
            console.log(result);
            _this.doctorArray = result.dataDoctors;
            if (result.response) {
                _this.dataArray = result.data;
                _this.dataDispense = result.dataDispensed;
                _this.dataDischarge = result.dataDischarge;
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.dataArray[i].total_bill = 0;
                    _this.dataArray[i].admissionHours = 0;
                    _this.ipdLength += _this.dataArray[i].dataIpd.length;
                    for (var j = 0; j < _this.dataArray[i].dataIpd.length; j++) {
                        _this.patientAdmitted++;
                        _this.patientAdmittedlength++;
                        if (_this.dataArray[i].dataIpd[j].duration_days || _this.dataArray[i].dataIpd[j].duration_hours) {
                            _this.dataArray[i].admissionHours += (_this.dataArray[i].dataIpd[j].duration_days * 24) + (_this.dataArray[i].dataIpd[j].duration_hours);
                        }
                        if (_this.dataArray[i].dataIpd[j].total_bill) {
                            _this.dataArray[i].total_bill += _this.dataArray[i].dataIpd[j].total_bill;
                            _this.DocWiseTotal += _this.dataArray[i].dataIpd[j].total_bill;
                        }
                        if (_this.dataArray[i].dataIpd[j].type == "general") {
                            _this.generalPatient.push(_this.dataArray[i].dataIpd[j]);
                        }
                        else if (_this.dataArray[i].dataIpd[j].type == "private") {
                            _this.privatepatient.push(_this.dataArray[i].dataIpd[j]);
                        }
                        else {
                            _this.semiPrivatePatient.push(_this.dataArray[i].dataIpd[j]);
                        }
                    }
                    _this.totalAdmissionHours += _this.dataArray[i].admissionHours;
                }
                for (var i = 0; i < _this.dataDischarge.length; i++) {
                    for (var j = 0; j < _this.dataDischarge[i].dataIpd.length; j++) {
                        _this.patientDischarge++;
                    }
                }
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.finalTotal += _this.dataArray[i].total_bill;
                    _this.totalAvgBill += (_this.dataArray[i].total_bill / _this.ipdLength);
                }
                for (var i = 0; i < _this.doctorArray.length; i++) {
                    if (_this.doctorArray[i].type_of_doctor == "admin_doctor") {
                        _this.totalGeneralBeds += _this.doctorArray[i].clinic_services.general_beds;
                        _this.totalPrivateBeds += _this.doctorArray[i].clinic_services.private_beds;
                        _this.totalSemiPrivateBeds += _this.doctorArray[i].clinic_services.semi_private_beds;
                        break;
                    }
                }
            }
            _this.patientAdmittedPercentage = (_this.patientAdmitted * 100) / _this.ipdLength;
            _this.patientDischargedPercentage = (_this.patientDischarge * 100) / _this.ipdLength;
            _this.patientAdmittedOccupency = (_this.patientAdmittedlength * 100) / (_this.totalGeneralBeds + _this.totalPrivateBeds + _this.totalSemiPrivateBeds);
            _this.admisssionRate = (_this.patientAdmittedlength * 100) / _this.dataDispense.length;
            if (_this.doctorArray.length > _this.dataArray.length) {
                for (var i = 0; i < _this.doctorArray.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.dataArray.length; j++) {
                        if (_this.doctorArray[i]._id.toString() == _this.dataArray[j]._id.toString()) {
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        _this.dataArray.push({
                            _id: _this.doctorArray[i]._id,
                            dataIpd: []
                        });
                    }
                }
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardConsultationInvestigationComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    DashboardConsultationInvestigationComponent.prototype.getData = function (data) {
        if (isNaN(data)) {
            return 0;
        }
        else if (data == Infinity) {
            return 0;
        }
        else if (data % 1 != 0) {
            return data.toFixed(2);
        }
        else {
            return data;
        }
    };
    DashboardConsultationInvestigationComponent.prototype.getDoctorName = function (id) {
        for (var i = 0; i < this.doctorArray.length; i++) {
            if (this.doctorArray[i]._id == id) {
                return (this.doctorArray[i].first_name);
            }
        }
    };
    DashboardConsultationInvestigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-consultation-investigation',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-investigation/dashboard-consultation-investigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-investigation/dashboard-consultation-investigation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], DashboardConsultationInvestigationComponent);
    return DashboardConsultationInvestigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-investigation/dashboard-consultation-investigation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardConsultationInvestigationModule", function() { return DashboardConsultationInvestigationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_consultation_investigation_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-investigation/dashboard-consultation-investigation-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_consultation_investigation_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-investigation/dashboard-consultation-investigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardConsultationInvestigationModule = /** @class */ (function () {
    function DashboardConsultationInvestigationModule() {
    }
    DashboardConsultationInvestigationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__dashboard_consultation_investigation_routing_module__["a" /* DashboardConsultationInvestigationRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__dashboard_consultation_investigation_component__["a" /* DashboardConsultationInvestigationComponent */]]
        })
    ], DashboardConsultationInvestigationModule);
    return DashboardConsultationInvestigationModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-consultation-investigation.module.chunk.js.map