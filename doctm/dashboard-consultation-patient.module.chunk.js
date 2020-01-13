webpackJsonp(["dashboard-consultation-patient.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-patient/dashboard-consultation-patient-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardConsultationPatientRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_consultation_patient_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-patient/dashboard-consultation-patient.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_consultation_patient_component__["a" /* DashboardConsultationPatientComponent */],
    }
];
var DashboardConsultationPatientRoutingModule = /** @class */ (function () {
    function DashboardConsultationPatientRoutingModule() {
    }
    DashboardConsultationPatientRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardConsultationPatientRoutingModule);
    return DashboardConsultationPatientRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-patient/dashboard-consultation-patient.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tb-1{\r\n\tmargin-bottom: 0px;\r\n}\r\n.evn{\r\n\tbackground-color:#eff3ef;\r\n}\r\n.grin{\r\n\tcolor:#38af13;\r\n}\r\n.red-u{\r\n\tcolor:#ff0000;\r\n}\r\n.tb-1 h4{\r\n\tmargin: 0px;\r\n}\r\n.wrap-canavas{\r\n\tfloat: none;\r\n\twidth:100%;\r\n}\r\n.clr-blue{\r\n\tcolor:#00b0f0;\r\n\tfont-weight: bold;\r\n\tcursor: pointer;\r\n}\r\n.blu-2{\r\n\tcolor:#1639bf;\r\n}\r\n.footer-cstm-an{\r\n\tposition: fixed;\r\n    float: left;\r\n    width: 100%;\r\n    bottom: 0;\r\n    background:#00b0f0;\r\n    color:#fff;\r\n    z-index: 99;\r\n    border-top: 1px solid #d6d6d6;\r\n    padding-top: 8px;\r\n}\r\n.cus-content-wrapper{\r\n\tpadding-top: 0px;\r\n}\r\n.wrap-height{\r\n\tmin-height:480px;\r\n\tpadding:0px 8px;\r\n\tborder-left: 1px solid #dcdcdc;\r\n\tborder-right:1px solid #dcdcdc;\r\n}\r\n/*karam*/\r\n.cstm-ul-new li a{\r\n\tbackground-color:transparent;\r\n\tcolor:#000;\r\n\tpadding:10px 87px;\r\n\tcursor: pointer;\r\n\tborder-radius: 0px;\r\n\tborder-bottom: 2px solid transparent; \r\n}\r\n.cstm-ul-new li.active a{\r\n\tbackground-color: #e0e0e0;\r\n    color: #000;\r\n\tborder-bottom: 2px solid #00b0f0;\r\n}\r\n.wrap-height{\r\n\tmin-height:200px;\r\n\tmax-height: 200px;\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n}\r\n.tb-2 tr td{\r\n\tpadding: 10px;\r\n}\r\n.cus-sidebar-wrapper .cus-sidebar{\r\n\theight: initial!important;\r\n}\r\n.tb-1{\r\n\tmargin-bottom: 0px;\r\n}\r\n.evn{\r\n\tbackground-color:#eff3ef;\r\n}\r\n.grin{\r\n\tcolor:#38af13;\r\n}\r\n.red-u{\r\n\tcolor:#ff0000;\r\n}\r\n.tb-1 h4{\r\n\tmargin: 0px;\r\n}\r\n.wrap-canavas{\r\n\tfloat: none;\r\n\twidth:100%;\r\n}\r\n.clr-blue{\r\n\tcolor:#00b0f0;\r\n\tfont-weight: bold;\r\n}\r\n.blu-2{\r\n\tcolor:#1639bf;\r\n}\r\n.cus-content-wrapper{\r\n\tpadding-top: 0px;\r\n}\r\n.wrap-height{\r\n\tmin-height:250px;\r\n\tmax-height: 250px;\r\n\tpadding:0px 8px;\r\n\tborder-left: 1px solid #dcdcdc;\r\n\tborder-right:1px solid #dcdcdc;\r\n\toverflow-x: hidden;\r\n}\r\n.mt-table h3{\r\n\tmargin-top: 0px;\r\n}\r\n.cstm-tr{\r\n\tbackground-color: #000;\r\n\tcolor:#fff;\r\n\ttext-align: center;\r\n}\r\n.cstm-tr-2{\r\n\tbackground-color:#d7e4e3;\r\n}\r\n.cstm-tr-2 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-2 td:last-child {\r\n border-right: none;\r\n}\r\n.cstm-tr-3{\r\n\tborder-bottom:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td:last-child {\r\n border-right: none;\r\n}\r\n.cus-sidebar-wrapper .cus-sidebar{\r\n\theight: initial;\r\n}\r\n.cstm-mg{\r\n\tmargin-top: 5px;\r\n}\r\n.btn-go{\r\n\tbackground-color: transparent;\r\n    border: 1px solid #002160;\r\n    margin-bottom: 5px;\r\n    min-width: 62%;\r\n}\r\n.btn-go:hover{\r\n    -webkit-transition: 300ms;\r\n    transition: 300ms;\r\n    background: #98C74F;\r\n    border-color: #98C74F;\r\n    color: #fff;\r\n}\r\n/*.cus-content{\r\n\tz-index:1;\r\n}*/\r\n.li-cstm a{\r\n\ttext-align: center!important;\r\n    background: #000!important;\r\n    color: #fff!important;\r\n    font-size: 16px!important;\r\n    font-weight: inherit!important;\r\n    padding: 6px!important;\r\n}\r\n/*karam @29-1-2018*/\r\n.side-bar-cstm{\r\n\tz-index: 99;\r\n}\r\n.res-tab-2{\r\n\tmax-height: 200px;\r\n}\r\n.cstm-ul-new li{\r\n\twidth: 50%;\r\n}\r\n.cstm-ul-new li a{\r\n\tbackground-color:transparent;\r\n\tcolor:#000;\r\n\tpadding:10px 70px;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\tborder-radius: 0px;\r\n\tborder-bottom: 2px solid transparent; \r\n}\r\n.cstm-ul-new li.active a{\r\n\tbackground-color: #e0e0e0;\r\n    color: #000;\r\n\tborder-bottom: 2px solid #00b0f0;\r\n}\r\n.tab-new{\r\n    padding: 0px 8px;\r\n    border-left: 1px solid #dcdcdc;\r\n    border-right: 1px solid #dcdcdc;\r\n    overflow-x: hidden;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n    font-weight: bold;\r\n}\r\n/*karam@30-jan-2019*/\r\n/*.tab-new-cstm tr td{\r\n\tfont-size: 10px;\r\n}*/\r\n.brder-cstm{\r\n\tpadding-bottom: 1px;\r\n    margin-bottom: 6px;\r\n    border-bottom: 1px solid #a7a7a7;\r\n    position: relative;\r\n}\r\n.brder-cstm::after{\r\n\tcontent: \"\";\r\n    position: absolute;\r\n    height: 6px;\r\n    width: 12px;\r\n    background-color: #ffffff;\r\n    top: 41px;\r\n    right: -3px;\r\n\t \r\n}\r\n.cus-sidebar ul{\r\n\tborder:1px solid #a7a7a7;\r\n}\r\n.can-vas{\r\n\theight:196px!important;\r\n}\r\n.my-tab-1 tr td{\r\n\tpadding:2px;\t\r\n}\r\n.tb-pd-hi tr td{\r\n\tpadding:15px 8px; \r\n}\r\n.brdr-left{\r\n\tborder-left:1px solid #bfc4cb;\r\n}\r\n.cstm-md-bdy{\r\n\tposition: relative;\r\n}\r\n.modal.fade .modal-dialog {\r\n  -webkit-transform: translate3d(0, 100vh, 0);\r\n          transform: translate3d(0, 100vh, 0);\r\n  -webkit-transition: 700ms;\r\n  transition: 700ms;\r\n}\r\n.modal.in .modal-dialog {\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0);\r\n  -webkit-transition: 700ms;\r\n  transition: 700ms;\r\n}\r\n.cstm-tr-2{\r\n\tbackground-color:#d7e4e3;\r\n}\r\n.cstm-tr-2 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-2 td:last-child {\r\n border-right: none;\r\n}\r\n.cstm-tr-3{\r\n\tborder-bottom:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td:last-child {\r\n border-right: none;\r\n}\r\n/*.cstm-md-bdy {\r\n\tposition: absolute;\r\n\ttop: -30px;\r\n    right: 8px;\r\n}*/\r\n.modal-body{\r\n\tpadding-top: 1px;\r\n\tpadding-bottom: -1px;\r\n}\r\n.cstm-heading{\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\ncanvas{\r\n\tmax-height:208px;\r\n\tmin-height:208px;\r\n\theight:167px; \r\n}\r\n.cstm-popup{\r\n\twidth: 131%;\r\n    margin-left: -114px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-patient/dashboard-consultation-patient.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"analytics-sec\">\n\t\n\t<div class=\"ipd-deatil-sec\">\n\t<!-- \t<div class=\"md-tab\">\n\t      \n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t          \t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-prescription\"> Consultation </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-pharmacy-detail\"> Clinic Services </a></li>\n\t      \t</ul>\n\t      </div> -->\n\n\t      <div class=\"inner-tab\">\n\t      \t<!-- Nav tabs -->\n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t      \t\t<li *ngIf=\"(doctorData.digital_precipitation === false && doctorData.type_of_doctor === 'admin_doctor')|| doctorData.type_of_doctor != 'admin_doctor'\" role=\"presentation\"  class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-patient\"> OPD </a></li>\n\t      \t\t<li *ngIf=\"doctorData.digital_precipitation === true && doctorData.type_of_doctor === 'admin_doctor'\" role=\"presentation\"  class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-patient\"> Your OPD </a></li>\n\t      \t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-time\"> Time</a></li>\n\t      \t\t<li role=\"presentation\" *ngIf = \"doctorData.digital_precipitation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-prescription\" >Prescription</a></li>\n\t      \t\t<li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor' && doctorData.clinic_services.Clinic_Pharmacy==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-treatment\"> Pharmacy</a></li>\n\t      \t\t<li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor' && doctorData.clinic_services.Clinic_Diagnostics==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-diagnosis\"> Diagnostics </a></li>\n\t      \t\t<li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor' && doctorData.clinic_services.Clinic_IPD==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-investigation\"> IPD </a></li>\n\t      \t</ul>\n\t      </div>\n\n\t      <div class=\"ipd-body\">\n\t      \t<div class=\"cus-sidebar-wrapper side-bar-cstm\">\n\t      \t\t<div class=\"cus-sidebar\">\n\t      \t\t\t<ul> \n\t      \t\t\t\t<li>\n\t      \t\t\t\t\t<div class=\"\">\n\t      \t\t\t\t\t\t<div class=\"col-lg-3\">\n\t      \t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>From</b></h4>\n\t      \t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t<div class=\"col-lg-9\">\n\t      \t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t      \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"fromDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t      \t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t</div>\n\t      \t\t\t\t\t</div>\n\t      \t\t\t\t</li>\n\t      \t\t\t\t<li>\n\t      \t\t\t\t\t<div class=\"\">\n\t      \t\t\t\t\t\t<div class=\"col-lg-3\">\n\t      \t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>To</b></h4>\n\t      \t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t<div class=\"col-lg-9\">\n\t      \t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t      \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"toDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t      \t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t</div>\n\t      \t\t\t\t\t</div>\n\t      \t\t\t\t</li>\n\t      \t\t\t\t<li class=\"text-right brder-cstm\">\n\t      \t\t\t\t\t<div class=\"col-lg-12\">\n\t      \t\t\t\t\t\t<button class=\"btn btn-go\" (click)=\"go()\">Go</button>\n\t      \t\t\t\t\t</div>\n\t      \t\t\t\t</li>\n\t      \t\t\t\t<li class=\"li-cstm\"> <a href=\"javascript:void(0);\"> For Past</a> </li>\n\t      \t\t\t\t<!-- <li class=\"{{getClass(0)}}\" (click)=\"activatetab(0)\" class=\"active\"> <a href=\"javascript:void(0);\"> Today </a> </li> -->\n\t      \t\t\t\t<li class=\"{{getClass(1)}}\" (click)=\"activatetab(1)\"> <a href=\"javascript:void(0);\"> 1 Week &nbsp;<small *ngIf=\"activatedtab==1\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t      \t\t\t\t<li class=\"{{getClass(2)}}\" (click)=\"activatetab(2)\"> <a href=\"javascript:void(0);\"> 2 Weeks &nbsp;<small *ngIf=\"activatedtab==2\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small>  </a> </li>\n\t      \t\t\t\t<li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month &nbsp;<small *ngIf=\"activatedtab==3\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t      \t\t\t\t<li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month &nbsp;<small *ngIf=\"activatedtab==4\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t      \t\t\t\t<li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month &nbsp;<small *ngIf=\"activatedtab==5\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t      \t\t\t\t<li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year &nbsp;<small *ngIf=\"activatedtab==6\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t      \t\t\t\t<li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> All </a> </li>\n\t      \t\t\t</ul>\n\t      \t\t</div>\n\t      \t</div>\n\n\t      \t<div class=\"cus-content-wrapper\">\n\t      \t\t<div class=\"cus-content\">\n\t      \t\t\t<div class=\"\">\n\t      \t\t\t\t<div class=\"row\">\n\t      \t\t\t\t\t<div class=\"col-lg-6\">\n\t      \t\t\t\t\t\t<ul class=\"nav nav-tabs cstm-ul-new\">\n\t      \t\t\t\t\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#home-cstm\">Consultation Collection</a></li>\n\t      \t\t\t\t\t\t\t<li><a data-toggle=\"tab\" href=\"#menu1-cstm\">Patient Details</a></li>\n\t      \t\t\t\t\t\t</ul>\n\t      \t\t\t\t\t\t<div class=\"tab-content\">\n\t      \t\t\t\t\t\t\t<div id=\"home-cstm\" class=\"tab-pane fade in active\">\n\t      \t\t\t\t\t\t\t\t<div class=\"cstm-pad\">\n\t      \t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t      \t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t      \t\t\t\t\t\t\t\t\t\t\t<table class=\"table tb-1 tb-pd-hi\">\n\t      \t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"\">\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Consultation Collection</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(totalCollection)}} &nbsp;</b></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Max collection in a day </td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(maxSaleOfDay)}} &nbsp;</b><span>({{maxCollectionDate | date: 'dd/MM/yyyy'}})</span></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"\">\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Min collection in a day </td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(minSaleOfDay)}} &nbsp;</b><span>({{minCollectionDate | date: 'dd/MM/yyyy'}})</span></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Avg. daily collection</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(totalCollection/dateDiff)}} &nbsp;</b></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Avg collection per patient</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(avgCollection)}} &nbsp;</b></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Total Prescriptions</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(totalPrescriptions)}} &nbsp;</b></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"\">\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Max Prescriptions in a day </td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{maxPrescofDay}} &nbsp;</b><span>({{maxPresconDate | date: 'dd/MM/yyyy'}})</span></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Min Prescriptions in a day </td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{minPrescOfDay}} &nbsp;</b><span>({{minPresconDate | date: 'dd/MM/yyyy'}})</span></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\t\t\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Avg daily Prescriptions</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(getDataCeil((totalPrescriptions+totalRegPatients)/dateDiff))}}</b></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\t\t\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Total OTG Prescriptions</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{TotalOTGPrescriptionslength}}</b>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal5\">View</span>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t      \t\t\t\t\t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t\t\t<div id=\"menu1-cstm\" class=\"tab-pane fade\">\n\t      \t\t\t\t\t\t\t\t\t<div class=\"cstm-pad\">\n\t      \t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t      \t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t      \t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table tb-1 my-tab-1\">\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Total patients</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(UniquePatientArray.length)}}</b></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Old Patients</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(OldPatientArray)}}</b></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">New Patients</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{UniquePatientArray.length-OldPatientArray}} &nbsp; </b></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Males</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalMale}} &nbsp;</b><small>({{getData(totalMalePercentage)}}%)</small></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Females</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalFemale}} &nbsp;</b><small>({{getData(totalFemalePercentage)}}%)</small></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Avg. Patient Age (Yrs)</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(avgAge)}} &nbsp;</b></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Walk in patients</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalWalkIn}} &nbsp;</b><small>({{getData(totalWalkInPercentage)}}%)</small></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Appointment patients</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalAppointment}} &nbsp;</b><small>({{getData(totalAppointmentPercentage)}}%)</small></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Emergency patients</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalEmergency}} &nbsp;</b><small>({{getData(totalEmergencyPercentage)}}%)</small></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"cstm-heading\">PATIENT</h5> \n\t      \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"chart-diagnos chart-box wrap-canavas\" *ngIf=\"!loading\">\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t<canvas baseChart class=\"can-vas\"\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t[datasets]=\"lineChartData1\"\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t[labels]=\"lineChartLabels1\"\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t[options]=\"lineChartOptions\"\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t[colors]=\"lineChartColors\"\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t[legend]=\"lineChartLegend\"\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t[chartType]=\"lineChartType\"\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t      \t\t\t\t\t\t\t\t\t\t\t\t\t(chartClick)=\"chartClicked($event)\"></canvas>\n\t      \t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t<h5 class=\"cstm-heading\">COLLECTION</h5> \n\t      \t\t\t\t\t\t<div class=\"col-lg-6 brdr-left\">\n\t      \t\t\t\t\t\t\t<div class=\"chart-diagnos chart-box wrap-canavas\" *ngIf=\"!loading\">\n\t      \t\t\t\t\t\t\t\t<canvas baseChart\n\t      \t\t\t\t\t\t\t\t[datasets]=\"lineChartData\"\n\t      \t\t\t\t\t\t\t\t[labels]=\"lineChartLabels\"\n\t      \t\t\t\t\t\t\t\t[options]=\"lineChartOptions\"\n\t      \t\t\t\t\t\t\t\t[colors]=\"lineChartColors\"\n\t      \t\t\t\t\t\t\t\t[legend]=\"lineChartLegend\"\n\t      \t\t\t\t\t\t\t\t[chartType]=\"lineChartType\"\n\t      \t\t\t\t\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t      \t\t\t\t\t\t\t\t(chartClick)=\"chartClicked($event)\"></canvas>\n\t      \t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t      \t\t\t\t\t\t\t\t<table class=\"table tb-1 tb-2\">\n\t      \t\t\t\t\t\t\t\t\t<tbody>\n\t      \t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t      \t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Shift-1</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t<td><b>{{shiftOne}} &nbsp; </b><span><b></b> ({{getData(shiftOnepercentage)}}%)</span></td>\n\t      \t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t<tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Shift-2\n\t      \t\t\t\t\t\t\t\t\t\t\t</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t<td><b>{{shiftTwo}}  &nbsp;</b>({{getData(shiftTwopercentage)}}%)</td>\n\t      \t\t\t\t\t\t\t\t\t\t</tr>\n\t      \t\t\t\t\t\t\t\t\t\t<tr>\n\t      \t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Shift-3\n\t      \t\t\t\t\t\t\t\t\t\t\t</td>\n\t      \t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t      \t\t\t\t\t\t\t\t\t\t\t<td><b>{{shiftThree}}  &nbsp;</b>({{getData(shiftThreepercentage)}}%)</td>\n\t      \t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t     <!--  <tr class=\"\">\n\t\t\t\t\t\t\t\t        <td width=\"350px\"><span>Top 20 Diagnosis</span></td>\n\t\t\t\t\t\t\t\t        <td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t        <td>\n\t\t\t\t\t\t\t\t        \t<b  class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal\">View </b>\n\t\t\t\t\t\t\t\t        \t\n\t\t\t\t\t\t\t\t        \t</td>\n\t\t\t\t\t\t\t\t        </tr> -->\n\t\t\t\t\t\t\t\t        <tr class=\"evn\">\n\t\t\t\t\t\t\t\t        \t<td width=\"350px\">\n\t\t\t\t\t\t\t\t        \t\t<span>Referred  Patients (TO)</span>\n\n\t\t\t\t\t\t\t\t        \t</td>\n\t\t\t\t\t\t\t\t        \t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t        \t<td><b>{{dataReferralTo.length}} &nbsp;</b> <span (click)=\"viewReferralPatients(1)\" class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal4\">View</span></td>\n\t\t\t\t\t\t\t\t        </tr>\n\t\t\t\t\t\t\t\t        <tr>\n\t\t\t\t\t\t\t\t        \t<td width=\"350px\">Referred Patients (FROM)</td>\n\t\t\t\t\t\t\t\t        \t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t        \t<td><b>{{dataReferralFrom.length}} &nbsp;</b><span (click)=\"viewReferralPatients(2)\" class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal4\">View</span></td>\n\t\t\t\t\t\t\t\t        </tr>\n\t\t\t\t\t\t\t\t        <tr>\n\t\t\t\t\t\t\t\t        \t<td width=\"350px\">Frequent Patients (visited Thrice or more) </td>\n\t\t\t\t\t\t\t\t        \t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t        \t<td><b>{{freqPatientArray.length}} &nbsp;</b><span class=\"clr-blue\"  data-toggle=\"modal\" data-target=\"#myModal3\">View</span></td>\n\t\t\t\t\t\t\t\t        </tr>\n\t\t\t\t\t\t\t\t      <!-- <tr>\n\t\t\t\t\t\t\t\t        <td width=\"350px\">Frequent Patients (>=3 Times)</td>\n\t\t\t\t\t\t\t\t        <td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t        <td><b>5 &nbsp;</b><span class=\"clr-blue\">Views</span></td>\n\t\t\t\t\t\t\t\t    </tr> -->\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n</div>\n<div class=\"container footer-cstm-an\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-6 text-center\">\n\t\t\t<div>\n\t\t\t\t<p>TOP AREA : <b>Sector 78, NOIDA ( 18</b> Patients <b>), 30%</b> </p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-6 text-center\">\n\t\t\t<div>\n\t\t\t\t<p>PATIENT INFLOW TREND :  <b>Rising:</b> Falling : Steady</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Top 20 Diagnosis View -->\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-body cstm-md-bdy\">          \t\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<div class=\"cstm-tab\">\n\t\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Diagnosis</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Number of Patients</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Percentages</b></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of diagnosisArray | slice:0:20;let i = index; \">\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-left\">{{data.value}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{data.occurrence}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{getData(data.percentage)}}%</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>      \n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Referred Patients (TO) -->\n<div class=\"modal fade\" id=\"myModal1\" role=\"dialog1\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-body cstm-md-bdy\">          \t\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<div class=\"cstm-tab\">\n\t\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Diagnosis</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Number of Patients</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Percentages</b></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of diagnosisArray | slice:0:20;let i = index; \">\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-left\">{{data.value}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{data.occurrence}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{getData(data.percentage)}}%</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>      \n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Referred Patients (FROM) -->\n<div class=\"modal fade\" id=\"myModal2\" role=\"dialog2\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-body cstm-md-bdy\">          \t\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<div class=\"cstm-tab\">\n\t\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Diagnosis</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Number of Patients</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Percentages</b></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of diagnosisArray | slice:0:20;let i = index; \">\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-left\">{{data.value}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{data.occurrence}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{getData(data.percentage)}}%</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>      \n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Frequent Patients (>=2Visits) -->\n<div class=\"modal fade\" id=\"myModal3\" role=\"dialog3\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-body cstm-md-bdy\">          \t\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<div class=\"cstm-tab\">\n\t\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Patient Name</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>No of Visits</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Phone Number</b></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of freqPatientArray;let i = index; \">\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-left\">{{data.name}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{data.count}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{data.phone}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>      \n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Referral Patients -->\n<div class=\"modal fade\" id=\"myModal4\" role=\"dialog4\">\n\t<div class=\"modal-dialog modal-lg\">\n\t\t<div class=\"modal-content cstm-popup modal-lg\">\n\t\t\t<div class=\"modal-body cstm-md-bdy\">          \t\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<div class=\"cstm-tab\">\n\t\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"50px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"250px\"><b>Doctor Name</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"150px\"><b>Date</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"250px\"><b>Patient Name</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"150px\"><b>Phone</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"300px\"><b>Note</b></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of referralPatientArray;let i = index; \">\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"50px\">{{i+1}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"250px\">{{data.name}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"150px\">{{data.date | date: 'dd/MM/yyyy'}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"250px\">{{data.patientName}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"150px\">{{data.phone}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"300px\">{{data.note}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>      \n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Referral Patients -->\n<div class=\"modal fade\" id=\"myModal5\" role=\"dialog4\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content cstm-popup\">\n\t\t\t<div class=\"modal-body cstm-md-bdy\">          \t\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<div class=\"cstm-tab\">\n\t\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Patient Name</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Patient Phone</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Date</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Prescription</b></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of TotalOTGPrescriptions;let i = index; \">\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-left\">{{data.registration.pateintName}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{data.registration.pateintPhone}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-left\">{{data.createdAt | date: 'dd/MM/yyyy'}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t<button *ngIf=\"!data.image\"  class=\"text-center btn btn-success cursr\" (click)=\"openPrescriptionPreview(data)\">View</button>\n\t\t\t\t\t\t\t\t\t<button *ngIf=\"data.image\"  class=\"text-center btn btn-success cursr\" (click)=\"dispensedPatientSelectedOpen(data)\">View</button>\n\n\t\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>      \n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade cus-preview\" id=\"previewModal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" >\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content show-default\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<div>\n\t\t\t\t\t<h4 class=\"modal-title\"> Preview </h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"presc-modal-body\">\n\t\t\t\t\t\t<div class=\"pad-view\">\n\t\t\t\t\t\t\t<div class=\"padview-header\">\n\t\t\t\t\t\t\t\t<div class=\"pad-view-flx col-lg-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\">\n\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{doctorData?.first_name}} </h1>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group qual\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"color-purple\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"checkOptionOfPad('Specialization')\">({{doctorData?.specialization}})</span>\n\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"checkOptionOfPad('Qualifications')\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let data of doctorData?.qualification;let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{data?.value}} <span *ngIf=\"i!=doctorData?.qualification?.length-1\">,</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"checkOptionOfPad('registration_no')\"> Registration: <span class=\"color-purple\"> {{doctorData?.registration_no}} </span> </p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"checkOptionOfPad('Professional_affiliation')\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"color-purple\" *ngFor=\"let pa of doctorData?.professional_affiliation;let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{pa.value}}<span *ngIf=\"i!=doctorData?.professional_affiliation?.length-1\">,</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"pad-view-flx col-lg-8\">\n\t\t\t\t\t\t\t\t\t<ul class=\"clinic-detail\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"clinic-name\" *ngIf=\"checkOptionOfPad('Clinic_name')\">\n\t\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_clinicName\"> {{doctorsDetails?.clinic_details?.clinic_name}} </h1>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"doctorsDetails?.clinic_details?.address\">{{doctorsDetails?.clinic_details?.address}}, {{doctorsDetails?.clinic_details?.area}}, {{doctorsDetails?.clinic_details?.city}}, {{doctorsDetails?.clinic_details?.state}}</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"li-cstm\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" *ngIf=\"doctorsDetails?.clinic_details?.landline || doctorsDetails?.clinic_details?.mobile\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"for-apt\"> For appointments </h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"doctorsDetails?.clinic_details?.landline\"> Tel: {{doctorsDetails?.clinic_details?.std_code}}-{{doctorsDetails?.clinic_details?.landline}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p> Mb: +91-{{doctorsDetails?.clinic_details?.mobile}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p class=\"text-center\">\n\t\t\t\t\t\t\t\t<label id=\"translated_appointmentText\"> {{getHeaderText()}} </label>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div class=\"padview-body\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n\t\t\t\t\t\t\t\t\t<div class=\"emergency-wrap\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group emrgency-consult\" *ngIf=\"dispensedPatient?.type=='Emergency'\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"small\" id=\"translated_emergencyText\"><i> Emergency Consultation </i> </p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group schdl\" *ngIf=\"checkOptionOfPad('Clinic_schedule')\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Schedule: </h5>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span><strong style=\"display:block; width:110px;\"> {{shift.day}}: </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.fromTime?.hour=='0'\">{{time?.fromTime?.hour}}0:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.fromTime?.hour!='0'\">{{time?.fromTime?.hour}}:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.fromTime?.minute=='0'\">{{time?.fromTime?.minute}}0 –</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.fromTime?.minute!='0'\">{{time?.fromTime?.minute}} –</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.toTime?.hour=='0'\">{{time?.toTime?.hour}}0:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.toTime?.hour!='0'\">{{time?.toTime?.hour}}:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.toTime?.minute=='0'\">{{time?.toTime?.minute}}0</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.toTime?.minute!='0'\">{{time?.toTime?.minute}}</span> ]\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span><strong> {{shift?.day}}: </strong> Closed \n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div id=\"translated_treatmentText\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Available Treatments: </h5>\n\t\t\t\t\t\t\t\t\t\t\t<ul style=\"padding-left:15px!important;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let treat of doctorData?.expertise\">{{treat?.value}}</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"doctorData?.clinic_services_status=='Yes' && checkOptionOfPad('Available_services')\" id=\"translated_servicesText\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Available Services: </h5>\n\t\t\t\t\t\t\t\t\t\t\t<ul style=\"padding-left:15px!important;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"doctorData?.clinic_services?.Clinic_Pharmacy\">Pharmacy</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"doctorData?.clinic_services?.Clinic_IPD\">IPD</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let cs of doctorData?.clinic_services?.ClinicServicesDetail\"> {{cs}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let cs of doctorData?.clinic_services?.OtherClinicService\"> {{cs?.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"padview-bodyright\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"padview-body-header\">\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Prescription ID </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\">{{prescription_id}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Name </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{dispensedPatient?.pateintName | uppercase}} </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Age/Sex </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{dispensedPatient?.age}} / {{dispensedPatient?.gender}} </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Weight </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\" *ngIf=\"dispensedPatient?.weight\"> {{dispensedPatient?.weight}} Kg </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Height </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\" *ngIf=\"dispensedPatient?.height\"> {{dispensedPatient?.height}} cm </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{DischargeDate | date: 'dd/MMM/yyyy'}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"padview-patient\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"img-patient\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pateintPicPath}}{{dispensedPatient?.pateintPic}}\" class=\"img-responsive\" *ngIf=\"dispensedPatient.pateintPic\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!dispensedPatient?.pateintPic\" />\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"preConditionComplete==true && finalPreConditions?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_PreCondHeading\"> Existing health status </span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_BIHeading\"> Body Indicators</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"finalAllergy?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_allergyHeading\"> Allergy</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\" pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<div class=\"middle-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"findingsSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_PTHeading\"> Patient's Complaints</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of findingsSelected\"> {{data?.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_sympHeading\"> Symptoms</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of symptomsSelected\"> {{data?.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"diagnosisComplete==true && diagnosisSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_diagnosisHeading\"> Diagnosis</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of diagnosisSelected\">{{data?.value}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\" *ngIf=\"medicationComplete==true\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"padview-medic\" id=\"translated_medication\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span> Medicines</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ol style=\"padding-left:10px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of tempMedicationArray\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name=='Tablet' || data?.name=='Capsule' || data?.name=='Cream' || data?.name=='Ointment' || data?.name=='Aerosols' || data?.name=='Powder' || data?.name=='MouthWash'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data?.short_name}}<b class=\"notranslate\"> {{data?.med_name[0].value}} </b>-{{data?.frequency}} <span class=\"notranslate\"> X </span> {{data?.duration}} days <span *ngIf=\"data?.specialInstruction!=null\"> ({{data?.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.med_info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"help-note\" *ngIf=\"data?.med_info?.length>0\">({{data?.med_info[0]?.value}}<span *ngIf=\"data?.med_info?.length>1\"> / {{data?.med_info[1]?.value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name=='Syrup' || data?.name=='Suspension' || data?.name=='Emulsion' || data?.name=='Solution'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data?.short_name}}<b class=\"notranslate\"> {{data?.med_name[0]?.value}} </b>- {{data?.dosage}}ml <span class=\"notranslate\"> X </span> {{data?.frequency}} <span class=\"notranslate\"> X </span> {{data?.duration}} days <span *ngIf=\"data?.specialInstruction!=null\"> ({{data?.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.med_info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"help-note\" *ngIf=\"data?.med_info?.length>0\">({{data?.med_info[0]?.value}}<span *ngIf=\"data?.med_info?.length>1\"> / {{data?.med_info[1]?.value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name=='Injection' || data?.name=='Gel' || data?.name=='Lotion'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data?.short_name}}<b class=\"notranslate\"> {{data?.med_name[0]?.value}} </b><span *ngIf=\"data?.mode\"> ({{data?.mode}}) </span> -{{data?.frequency}} <span class=\"notranslate\"> X </span> {{data?.duration}} days <span *ngIf=\"data?.specialInstruction!=null\"> ({{data?.specialInstruction}})</span><span *ngIf=\"data?.mode\"> ({{data?.mode}}) </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.med_info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"help-note\" *ngIf=\"data?.med_info?.length>0\">({{data?.med_info[0]?.value}}<span *ngIf=\"data?.med_info?.length>1\"> / {{data?.med_info[1]?.value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name=='Drops'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data?.short_name}}<b class=\"notranslate\"> {{data?.med_name[0].value}} </b>-{{data?.quantity}} drops <span class=\"notranslate\"> X </span> {{data?.frequency}} <span class=\"notranslate\"> X </span> {{data?.duration}} days <span *ngIf=\"data?.specialInstruction!=null\"> ({{data?.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.med_info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"help-note\" *ngIf=\"data?.med_info?.length>0\">({{data?.med_info[0]?.value}}<span *ngIf=\"data?.med_info?.length>1\"> / {{data?.med_info[1]?.value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div vac-div\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"finalCurrentVaccinationArray?.length>0 || finalDueVaccinationArray?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\" id=\"translated_VaccinationHeading\"> <span> Vaccination</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul *ngIf=\"finalCurrentVaccinationArray?.length>0\" class=\"medicationol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div><b>Current</b></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalCurrentVaccinationArray\">{{data}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul *ngIf=\"finalDueVaccinationArray?.length>0\" class=\"medicationol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Due </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span *ngIf=\"finalDueVaccinationArray.length>0\"><strong>Due </strong>({{vaccinationDate.toString().substr(4,11)}}) -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- </span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalDueVaccinationArray\">{{data}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\" *ngIf=\"instructionsComplete==true && instructionsSelected?.length>0\" id=\"translated_instHeading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Instructions</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\" start=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of instructionsSelected\">{{data}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"third-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray?.length\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span id=\"translated_invHeading\"> Investigation</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ol class=\"numberol pl10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of investigationArray\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name != 'Mammography' && data?.name!= 'Uroflowmetry' && data?.name != 'ECG' && data?.name != 'EEG' && data?.name != 'TMT' && data?.name != 'Echo'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name!='Others'\">{{data?.name}} - </span><span *ngFor=\"let value of data?.values;let i = index\">{{value.value}} \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"i!=data?.values?.length-1\">\\</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name == 'Mammography' || data?.name== 'Uroflowmetry' || data?.name == 'ECG' || data?.name == 'EEG' || data?.name == 'TMT' || data?.name == 'Echo'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name!='Others'\">{{data?.name}} - </span> {{data?.values}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"treatmentComplete==true\" id=\"translated_OTHeading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of treatmentArray;let i =index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name=='Lifestyle Changes'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data?.name}} - <span *ngFor=\"let value of data?.lifestyle;let j = index\">{{value.value}} <span *ngIf=\"j!=data?.lifestyle?.length-1\">\\</span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name=='Physiotherapy' || data?.name=='Fomentation'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data?.name}} - {{data?.Frequency}} for {{data?.Duration}} days <span *ngIf=\"data?.SpecialInstruction!=null\"> ({{data?.SpecialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name=='Plaster'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"notranslate\">{{data?.name}}</span> - on <span class=\"notranslate\">{{data?.Injury_Area}}</span> of {{data?.plaster_type}} for {{data?.Duration}} days\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name=='Gargle' || data?.name=='Dressing' || data?.name=='Bandage' || data?.name=='Other'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name!='Other'\">{{data?.name}} - </span>{{data?.med_name[0]?.value}} {{data?.Frequency}} for {{data?.Duration}} days <span *ngIf=\"data?.SpecialInstruction!=null\"> ({{data?.SpecialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data?.value}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"note-box\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"note-innerbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"note-innerdiv\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span id=\"translated_surgHeading\"> Recommended Surgery</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of surgerySelectedArray\">{{data?.sub_speciality | titlecase}} - {{data?.procedure_name[0]?.value}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"referDoctorName?.first_name\" style=\"padding:0 30px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Referred To</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p> {{referDoctorName?.first_name}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\" *ngIf=\"eyePresComplete==true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span id=\"translated_eyeHeading\"> Eye Prescription</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-striped cstm-table\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th> Eye </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th> Sphere </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th> Cylinder </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th> Axis </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th> Add </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th> PD (mm) </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> Right (OD): </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.sphere}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.cylinder}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.axis}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.add}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.pd}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> Left (OS): </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.sphere}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.cylinder}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.axis}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.add}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.pd}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"third-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Follow Up</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"forth-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"padview-footer\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"padview-powered\">\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com </div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-4 col-xs-12\" id=\"translated_footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"legal\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>{{getFooterText()}}</h3>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"modal fade cus-preview\" id=\"uploadedPrescriptionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" *ngIf=\"dispensedPatientSelected\">\n\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t<div class=\"modal-content modal-lg\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<div>\n\n\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t<h3 class=\"modal-title\">Prescription</h3>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"printImage()\"> Print </button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"modal-body\" id=\"previewModalImage\">\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12 text-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"\">\n\n\t\t\t\t\t\t\t\t\t\t<img style=\"object-fit: contain;\" src=\"{{uploadedPrescriptionPath}}{{dispensedPatientSelected?.image}}\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-patient/dashboard-consultation-patient.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardConsultationPatientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardConsultationPatientComponent = /** @class */ (function () {
    function DashboardConsultationPatientComponent(userService, toastr, datePipe) {
        this.userService = userService;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.activatedtab = 0;
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy',
            defaultOpen: false
        };
        this.fromDate = new Date();
        this.toDate = new Date();
        this.fromDate1 = new Date();
        this.toDate1 = new Date();
        this.newDate = new Date();
        this.followUpDays = 0;
        this.finalfollowUpDays = 0;
        this.followUpDate = new Date();
        this.lineChartData = [
            { data: [], label: 'Collection' },
        ];
        this.lineChartLabels = [];
        this.lineChartData1 = [
            { data: [], label: 'Patient' },
        ];
        this.lineChartLabels1 = [];
        this.lineChartOptions = {
            responsive: true,
            legend: {
                display: false,
            }
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    DashboardConsultationPatientComponent.prototype.ngOnInit = function () {
        this.doctorsDetails = {};
        if (localStorage['doctorDetails']) {
            this.doctorData = JSON.parse(localStorage['doctorDetails']);
        }
        console.log(this.doctorData);
        if (localStorage['doctorsOfSameClinic']) {
            this.doctorsDetails = JSON.parse(localStorage['doctorsOfSameClinic']);
        }
        console.log(this.doctorsDetails);
        this.shiftOne = 0;
        this.shiftTwo = 0;
        this.shiftThree = 0;
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        this.freqPatientArray = [];
        this.referralPatientArray = [];
        this.dataReferralTo = [];
        this.dataReferralFrom = [];
        this.UniquePatientArray = [];
        this.uniqueFrequentArray = [];
        this.activatedtab = 0;
        this.activatetab(1);
        this.pateintPicPath = __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__["a" /* environment */].patientPic;
        var options = { month: 'short' };
        var today = new Date();
        // this.month = today.toLocaleDateString("en-IN", options);
        // this.day = new Date().getDate()
        // this.year = new Date().getFullYear()
        // this.numericMonth = new Date().getMonth()+1
        // this.dataRegistration = []  
        // this.dataAppointment = []
        // this.dataDispensedPatients = []
        // this.lastVisit = []
        // this.countLastVisit = []
        this.dispensedPatient = {};
        this.setAllShiftsForPreview();
        // this.searchRecords = []
        this.uploadedPrescriptionPath = __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__["a" /* environment */].uploadedPrescriptionPath;
    };
    // events
    DashboardConsultationPatientComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardConsultationPatientComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardConsultationPatientComponent.prototype.activatetab = function (i) {
        var _this = this;
        var object;
        this.activatedtab = i;
        object = {};
        var date = new Date();
        //object.smart_diagnostics_id = this.doctorData.smart_diagnostics_id
        object.doctor_id = this.doctorData._id;
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
        console.log(object);
        this.totalCollection = 0;
        this.avgCollection = 0;
        this.dateDiff = 0;
        var maxArray = [];
        this.feeArray = [];
        this.feeArray.push(0);
        this.maxSaleOfDay = 0;
        this.minSaleOfDay = 0;
        this.maxCollectionDate = 0;
        this.minCollectionDate = 0;
        this.totalPrescriptions = 0;
        this.maxPrescofDay = 0;
        this.minPrescOfDay = 0;
        this.maxPresconDate = 0;
        this.minPresconDate = 0;
        this.totalRegPatients = 0;
        this.newPatients = 0;
        this.totalMale = 0;
        this.totalFemale = 0;
        this.totalMalePercentage = 0;
        this.totalFemalePercentage = 0;
        this.totalWalkIn = 0;
        this.totalEmergency = 0;
        this.totalAppointment = 0;
        this.totalWalkInPercentage = 0;
        this.totalEmergencyPercentage = 0;
        this.totalAppointmentPercentage = 0;
        this.shiftOne = 0;
        this.shiftTwo = 0;
        this.shiftThree = 0;
        this.shiftOnepercentage = 0;
        this.shiftTwopercentage = 0;
        this.shiftThreepercentage = 0;
        var totalAge = 0;
        this.avgAge = 0;
        this.freqPatientArray = [];
        var localFreqArray = [];
        this.diagnosisArray = [];
        this.UniquePatientArray = [];
        this.uniqueFrequentArray = [];
        this.loading = true;
        this.TotalOTGPrescriptions = [];
        this.TotalOTGPrescriptionslength = 0;
        var arr = [];
        var arrRegistration = [];
        this.FindReferralPatients(object);
        this.userService.OPDAnalytics(object).subscribe(function (data) {
            console.log(data);
            if (data.response) {
                arr = data.dataDispensed;
                console.log(arr);
                _this.totalPrescriptions = data.dataDispensed.length;
                _this.totalRegPatients = data.dataRegistrations.length;
                arrRegistration = data.dataRegistrations;
                var arr1 = [];
                if (arr.length) {
                    arr.filter(function (item) {
                        if (item) {
                            if (item.registration.isOtg === true) {
                                // console.log(item.first_name)
                                arr1.push(item);
                                // this.TotalOTGPrescriptions = item
                                // this.TotalOTGPrescriptions.push(item)
                            }
                        }
                    });
                }
                _this.TotalOTGPrescriptions = arr1;
                _this.TotalOTGPrescriptionslength = _this.TotalOTGPrescriptions.length;
                console.log(_this.TotalOTGPrescriptions);
                for (var i = 0; i < data.dataDispensed.length; i++) {
                    if (data.dataDispensed[i].registration.fee) {
                        _this.totalCollection += parseFloat(data.dataDispensed[i].registration.fee);
                    }
                    _this.getShift(data.dataDispensed[i].registration.createdAt);
                    maxArray.push(_this.datePipe.transform(data.dataDispensed[i].createAt, 'yyyy-MM-dd'));
                    // if(data.dataDispensed[i].registration.lastVisit.status == false){
                    // 	this.newPatients++
                    // }
                    // if(data.dataDispensed[i].registration.gender == 'Male'){
                    // 	this.totalMale++
                    // }else{
                    // 	this.totalFemale++
                    // }
                    if (data.dataDispensed[i].registration.type == "Walk-in") {
                        _this.totalWalkIn++;
                    }
                    else if (data.dataDispensed[i].registration.type == "Emergency") {
                        _this.totalEmergency++;
                    }
                    else {
                        _this.totalAppointment++;
                    }
                    if (data.dataDispensed[i].registration.age) {
                        totalAge += data.dataDispensed[i].registration.age;
                    }
                    if (data.dataDispensed[i].registration.lastVisit.count) {
                        localFreqArray.push({
                            name: data.dataDispensed[i].registration.pateintName,
                            count: data.dataDispensed[i].registration.lastVisit.count,
                            createdAt: data.dataDispensed[i].registration.createdAt,
                            phone: data.dataDispensed[i].registration.pateintPhone
                        });
                    }
                }
                console.log(_this.totalCollection);
                console.log(_this.totalCollection);
                for (var i = 0; i < data.dataRegistrations.length; i++) {
                    if (data.dataRegistrations[i].fee) {
                        _this.totalCollection += parseFloat(data.dataRegistrations[i].fee);
                    }
                    _this.getShift(data.dataRegistrations[i].createdAt);
                    maxArray.push(_this.datePipe.transform(data.dataRegistrations[i].createAt, 'yyyy-MM-dd'));
                    // if(data.dataRegistrations[i].gender == 'Male'){
                    // 	this.totalMale++
                    // }else{
                    // 	this.totalFemale++
                    // }
                    if (data.dataRegistrations[i].type == "Walk-in") {
                        _this.totalWalkIn++;
                    }
                    else if (data.dataRegistrations[i].type == "Emergency") {
                        _this.totalEmergency++;
                    }
                    else {
                        _this.totalAppointment++;
                    }
                    if (data.dataRegistrations[i].age) {
                        totalAge += data.dataRegistrations[i].age;
                    }
                    if (data.dataRegistrations[i].lastVisit.count) {
                        localFreqArray.push({
                            name: data.dataRegistrations[i].pateintName,
                            count: data.dataRegistrations[i].lastVisit.count,
                            createdAt: data.dataRegistrations[i].createdAt,
                            phone: data.dataRegistrations[i].pateintPhone
                        });
                    }
                }
                console.log(localFreqArray);
                console.log(_this.totalCollection);
                ////////Unique Patient////////////////
                for (var i = 0; i < data.dataRegistrations.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.UniquePatientArray.length; j++) {
                        if (_this.UniquePatientArray[j].name == data.dataRegistrations[i].pateintName &&
                            _this.UniquePatientArray[j].phone == data.dataRegistrations[i].pateintPhone) {
                            if (data.dataRegistrations[i].lastVisit.status == false) {
                                _this.newPatients++;
                            }
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        if (data.dataRegistrations[i].lastVisit.status == false) {
                            _this.newPatients++;
                        }
                        if (data.dataRegistrations[i].gender == 'Male') {
                            _this.totalMale++;
                        }
                        if (data.dataRegistrations[i].gender == 'Female') {
                            _this.totalFemale++;
                        }
                        _this.UniquePatientArray.push({
                            name: data.dataRegistrations[i].pateintName,
                            phone: data.dataRegistrations[i].pateintPhone
                        });
                    }
                }
                console.log(arrRegistration);
                console.log(arr);
                console.log(_this.newPatients);
                for (var i = 0; i < data.dataDispensed.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.UniquePatientArray.length; j++) {
                        if (_this.UniquePatientArray[j].name == data.dataDispensed[i].registration.pateintName &&
                            _this.UniquePatientArray[j].phone == data.dataDispensed[i].registration.pateintPhone) {
                            if (data.dataDispensed[i].registration.lastVisit.status == false) {
                                _this.newPatients++;
                            }
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        if (data.dataDispensed[i].registration.lastVisit.status == false) {
                            _this.newPatients++;
                        }
                        if (data.dataDispensed[i].registration.gender == 'Male') {
                            _this.totalMale++;
                        }
                        else {
                            _this.totalFemale++;
                        }
                        _this.UniquePatientArray.push({
                            name: data.dataDispensed[i].registration.pateintName,
                            phone: data.dataDispensed[i].registration.pateintPhone
                        });
                    }
                }
                console.log(_this.newPatients);
                ///////////End Unique Patient ////////
                //////////Freq Array New/////////////
                for (var i = 0; i < _this.UniquePatientArray.length; i++) {
                    _this.UniquePatientArray[i].count = 0;
                    for (var j = 0; j < data.dataRegistrations.length; j++) {
                        if (_this.UniquePatientArray[i].name == data.dataRegistrations[j].pateintName &&
                            _this.UniquePatientArray[i].phone == data.dataRegistrations[j].pateintPhone) {
                            _this.UniquePatientArray[i].count++;
                        }
                    }
                    for (var j = 0; j < data.dataDispensed.length; j++) {
                        if (_this.UniquePatientArray[i].name == data.dataDispensed[j].registration.pateintName &&
                            _this.UniquePatientArray[i].phone == data.dataDispensed[j].registration.pateintPhone) {
                            _this.UniquePatientArray[i].count++;
                        }
                    }
                    // if(this.UniquePatientArray[i].count>2){
                    _this.uniqueFrequentArray.push({
                        name: _this.UniquePatientArray[i].name,
                        phone: _this.UniquePatientArray[i].phone,
                        count: _this.UniquePatientArray[i].count
                    });
                    // }
                }
                _this.OldPatientArray = 0;
                for (var i = 0; i < _this.UniquePatientArray.length; ++i) {
                    if (parseInt(_this.UniquePatientArray[i].count) >= 2) {
                        _this.OldPatientArray++;
                    }
                }
                console.log(_this.OldPatientArray);
                console.log(_this.UniquePatientArray);
                /////////Endf Freq Array New////////
                _this.avgCollection = (_this.totalCollection / (data.dataDispensed.length + data.dataRegistrations.length));
                var diff = Math.abs(_this.toDate.getTime() - _this.fromDate.getTime());
                _this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
                _this.totalMalePercentage = (_this.totalMale * 100) / (_this.UniquePatientArray.length);
                _this.totalFemalePercentage = (_this.totalFemale * 100) / (_this.UniquePatientArray.length);
                _this.totalWalkInPercentage = (_this.totalWalkIn * 100) / (_this.totalPrescriptions + _this.totalRegPatients);
                _this.totalEmergencyPercentage = (_this.totalEmergency * 100) / (_this.totalPrescriptions + _this.totalRegPatients);
                _this.totalAppointmentPercentage = (_this.totalAppointment * 100) / (_this.totalPrescriptions + _this.totalRegPatients);
                _this.avgAge = totalAge / (_this.totalPrescriptions + _this.totalRegPatients);
                var dateArray = [];
                // this.doctorData
                dateArray.push(_this.datePipe.transform(_this.doctorData.createAt, 'yyyy-MM-dd'));
                var newMaxArray = [];
                var prescriptionArray = [];
                var patientArray = [];
                patientArray.push(0);
                // patientArray.push(this.datePipe.transform(this.doctorData.createAt, 'yyyy-MM-dd')) 
                newMaxArray.push(maxArray[0]);
                for (var i = 0; i < maxArray.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < newMaxArray.length; j++) {
                        if (maxArray[i] == newMaxArray[j]) {
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        newMaxArray.push(maxArray[i]);
                    }
                }
                console.log(newMaxArray);
                for (var i = 0; i < newMaxArray.length; i++) {
                    var total_fee = 0;
                    var total_reg_fee = 0;
                    var total_prescriptions = 0;
                    var total_patients = 0;
                    var total_reg_patient = 0;
                    for (var j = 0; j < data.dataDispensed.length; j++) {
                        if (newMaxArray[i] == _this.datePipe.transform(data.dataDispensed[j].createAt, 'yyyy-MM-dd')) {
                            if (data.dataDispensed[j].registration.fee) {
                                total_fee += parseInt(data.dataDispensed[j].registration.fee);
                                if (data.dataDispensed[j].registration.fee != 0) {
                                    total_prescriptions++;
                                }
                                total_patients++;
                            }
                        }
                    }
                    for (var k = 0; k < data.dataRegistrations.length; k++) {
                        if (newMaxArray[i] == _this.datePipe.transform(data.dataRegistrations[k].createAt, 'yyyy-MM-dd')) {
                            if (data.dataRegistrations[k].fee) {
                                total_reg_fee += parseInt(data.dataRegistrations[k].fee);
                                if (data.dataRegistrations[k].fee != 0) {
                                    total_prescriptions++;
                                }
                                total_reg_patient++;
                            }
                        }
                    }
                    prescriptionArray.push(total_prescriptions);
                    _this.feeArray.push(total_fee + total_reg_fee);
                    patientArray.push(total_patients + total_reg_patient);
                    dateArray.push(newMaxArray[i]);
                }
                console.log(patientArray);
                console.log(total_patients);
                console.log(total_reg_patient);
                ////////maxCollection With date////////////
                _this.maxSaleOfDay = Math.max.apply(Math, _this.feeArray);
                _this.minSaleOfDay = Math.min.apply(Math, _this.feeArray);
                var newMaxValue = -1;
                newMaxValue = _this.feeArray.findIndex(function (x) { return x == _this.maxSaleOfDay; });
                _this.maxCollectionDate = dateArray[newMaxValue];
                var newMinValue = -1;
                newMinValue = _this.feeArray.findIndex(function (x) { return x == _this.minSaleOfDay; });
                _this.minCollectionDate = dateArray[newMinValue];
                /////////End////////////////
                //////////max presc with  date///////
                _this.maxPrescofDay = Math.max.apply(Math, prescriptionArray);
                _this.minPrescOfDay = Math.min.apply(Math, prescriptionArray);
                var newMaxPresc = -1;
                newMaxPresc = prescriptionArray.findIndex(function (x) { return x == _this.maxPrescofDay; });
                _this.maxPresconDate = dateArray[newMaxPresc];
                var newMinPresc = -1;
                newMinPresc = prescriptionArray.findIndex(function (x) { return x == _this.minPrescOfDay; });
                _this.minPresconDate = dateArray[newMinPresc];
                // console.log(prescriptionArray)
                // console.log(newMaxArray)
                ////////end//////////////
                /////Chart///////
                console.log(_this.feeArray);
                _this.lineChartData = [
                    { data: _this.feeArray, label: 'Collection' },
                ];
                _this.lineChartLabels = dateArray;
                //////patient Chart //////////
                _this.lineChartData1 = [
                    { data: patientArray, label: 'Patients' },
                ];
                _this.lineChartLabels1 = dateArray;
                var patientDateArray = [];
                for (var i = 0; i < dateArray.length; i++) {
                    patientDateArray.push(dateArray[i]);
                }
                /////////////////////////// Date Sort Logic //////////////////////
                _this.sortSales(dateArray, _this.feeArray);
                _this.sortPatient(patientDateArray, patientArray);
                ///////////////////////// End sort Logic /////////////////////////
                console.log(_this.shiftOne, _this.shiftTwo, _this.shiftThree);
                _this.shiftOnepercentage = (_this.shiftOne * 100) / (_this.totalPrescriptions + _this.totalRegPatients);
                _this.shiftTwopercentage = (_this.shiftTwo * 100) / (_this.totalPrescriptions + _this.totalRegPatients);
                _this.shiftThreepercentage = (_this.shiftThree * 100) / (_this.totalPrescriptions + _this.totalRegPatients);
                var freqPatientArray = [];
                for (var i = 0; i < localFreqArray.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < freqPatientArray.length; j++) {
                        if (freqPatientArray[j].name == localFreqArray[i].name && freqPatientArray[j].phone == localFreqArray[i].phone) {
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        freqPatientArray.push({
                            name: localFreqArray[i].name,
                            count: localFreqArray[i].count,
                            phone: localFreqArray[i].phone
                        });
                    }
                }
                // for (var i = 0; i < freqPatientArray.length; i++) {
                // 	for (var j = 0; j < data.dataRegistrations.length; j++) {
                // 		if(data.dataRegistrations[j].pateintName == freqPatientArray[i].name && 
                // 			data.dataRegistrations[j].pateintPhone == freqPatientArray[i].phone){
                // 			freqPatientArray[i].count++
                // 		}
                // 	}	
                // 	for (var k = 0; k < data.dataDispensed.length; k++) {
                // 		if(freqPatientArray[i].name ==  data.dataDispensed[k].registration.pateintName &&
                // 			freqPatientArray[i].phone ==  data.dataDispensed[k].registration.pateintPhone){
                // 			freqPatientArray[i].count++
                // 		}
                // 	}
                // }
                for (var i = 0; i < freqPatientArray.length; i++) {
                    freqPatientArray[i].count = 0;
                    for (var j = 0; j < localFreqArray.length; j++) {
                        if (freqPatientArray[i].name == localFreqArray[j].name &&
                            freqPatientArray[i].phone == localFreqArray[j].phone) {
                            freqPatientArray[i].count++;
                        }
                    }
                    if (freqPatientArray[i].count >= 3) {
                        _this.freqPatientArray.push({
                            name: freqPatientArray[i].name,
                            count: freqPatientArray[i].count,
                            phone: freqPatientArray[i].phone
                        });
                    }
                }
                _this.freqPatientArray.sort(function (a, b) { return parseInt(b.count) - parseInt(a.count); });
                ///////////////// top 10 Diagnois///////////////////////
                console.log(data.dataDispensed);
                for (var i = 0; i < data.dataDispensed.length; i++) {
                    if (data.dataDispensed[i].precription.diagnosisSelected) {
                        for (var j = 0; j < data.dataDispensed[i].precription.diagnosisSelected.length; j++) {
                            var boolean = false;
                            for (var k = 0; k < _this.diagnosisArray.length; k++) {
                                if (_this.diagnosisArray[k].value == data.dataDispensed[i].precription.diagnosisSelected[j].display) {
                                    boolean = true;
                                    break;
                                }
                            }
                            if (boolean == false) {
                                _this.diagnosisArray.push({
                                    value: data.dataDispensed[i].precription.diagnosisSelected[j].display,
                                    occurrence: 0,
                                    percentage: 0
                                });
                            }
                        }
                    }
                }
                for (var k = 0; k < _this.diagnosisArray.length; k++) {
                    var count = 0;
                    var totalLengthDiagnosis = 0;
                    for (var i = 0; i < data.dataDispensed.length; i++) {
                        if (data.dataDispensed[i].precription.diagnosisSelected) {
                            for (var j = 0; j < data.dataDispensed[i].precription.diagnosisSelected.length; j++) {
                                if (data.dataDispensed[i].precription.diagnosisSelected[j].display) {
                                    totalLengthDiagnosis++;
                                }
                                if (_this.diagnosisArray[k].value == data.dataDispensed[i].precription.diagnosisSelected[j].display) {
                                    count++;
                                }
                                _this.diagnosisArray[k].occurrence = count;
                                _this.diagnosisArray[k].percentage = (count * 100) / totalLengthDiagnosis;
                            }
                        }
                    }
                }
                _this.diagnosisArray.sort(function (a, b) { return parseInt(b.occurrence) - parseInt(a.occurrence); });
                /////////////////End top 10 diagnosis ///////////////////
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardConsultationPatientComponent.prototype.openPrescriptionPreview = function (data) {
        this.prescription_id = data.prescription_id;
        this.dispensedPatient = data.registration;
        console.log(data);
        this.referDoctorName = data.registration.doctor_id;
        this.DischargeDate = data.createdAt;
        this.finalPreConditions = data.precription.finalPreConditions;
        this.bodyIndicatorSelected = data.precription.bodyIndicatorSelected;
        this.bodyIndicatorComplete = data.precription.bodyIndicatorComplete;
        this.finalAllergy = data.precription.finalAllergy;
        this.findingsSelected = data.precription.findingsSelected;
        this.symptomsSelected = data.precription.symptomsSelected;
        this.diagnosisSelected = data.precription.diagnosisSelected;
        this.tempMedicationArray = data.precription.tempMedicationArray;
        this.itemsfinding = data.precription.itemsfinding;
        this.itemsymptoms = data.precription.itemsymptoms;
        this.itemsdiagnosis = data.precription.itemsdiagnosis;
        this.treatmentStatus = data.precription.treatmentStatus;
        this.investigationStatus = data.precription.investigationStatus;
        this.suregeryOptionsTop = data.precription.suregeryOptionsTop;
        this.suregeryOptions = data.precription.suregeryOptions;
        this.inputBox = data.precription.inputBox;
        this.medication = data.precription.medication;
        this.medicationStatus = data.precription.medicationStatus;
        this.medicationTabArray = data.precription.medicationTabArray;
        this.medicationCapArray = data.precription.medicationCapArray;
        this.medicationSypArray = data.precription.medicationSypArray;
        this.medicationSuspArray = data.precription.medicationSuspArray;
        this.medicationEmulsnArray = data.precription.medicationEmulsnArray;
        this.medicationInjArray = data.precription.medicationInjArray;
        this.medicationCreamArray = data.precription.medicationCreamArray;
        this.medicationGelArray = data.precription.medicationGelArray;
        this.medicationDropsArray = data.precription.medicationDropsArray;
        this.medicationPowderArray = data.precription.medicationPowderArray;
        this.medicationAerosolsArray = data.precription.medicationAerosolsArray;
        this.medicationMouthWashArray = data.precription.medicationMouthWashArray;
        this.medicationSolutionArray = data.precription.medicationSolutionArray;
        this.medicationLotionArray = data.precription.medicationLotionArray;
        this.medicationOintmentArray = data.precription.medicationOintmentArray;
        this.symptomsComplete = data.precription.symptomsComplete;
        this.diagnosisComplete = data.precription.diagnosisComplete;
        this.treatmentComplete = data.precription.treatmentComplete;
        this.treatmentArray = data.precription.treatmentArray;
        this.investigationIndicatorComplete = data.precription.investigationIndicatorComplete;
        this.investigationArray = data.precription.investigationArray;
        this.surgeryComplete = data.precription.surgeryComplete;
        this.surgerySelectedArray = data.precription.surgerySelectedArray;
        this.instructionsComplete = data.precription.instructionsComplete;
        this.instructionsSelected = data.precription.instructionsSelected;
        this.medicationComplete = data.precription.medicationComplete;
        this.currentVaccinationComplete = data.precription.currentVaccinationComplete;
        this.finalCurrentVaccinationArray = data.precription.finalCurrentVaccinationArray;
        this.dueVaccinationComplete = data.precription.dueVaccinationComplete;
        this.finalDueVaccinationArray = data.precription.finalDueVaccinationArray;
        this.eyePresComplete = data.precription.eyePresComplete;
        this.finalRightOD = data.precription.finalRightOD;
        this.finalLeftOD = data.precription.finalLeftOD;
        this.followDaysComplete = data.precription.followDaysComplete;
        this.finalfollowUpDays = data.precription.finalfollowUpDays;
        this.followUpDate.setDate(new Date(data.createdAt).getDate() + this.finalfollowUpDays);
        console.log(this.followUpDate);
        var options = { month: 'short' };
        this.followUpMonth = this.followUpDate.toLocaleDateString("en-IN", options);
        this.followUpDay = this.followUpDate.getDate();
        this.followUpYear = this.followUpDate.getFullYear();
        this.minutes = data.precription.minutes;
        this.seconds = data.precription.seconds;
        // this.languageOptionSelected = data.precription.languageOptionSelected
        $("#previewModal1").modal("show");
    };
    DashboardConsultationPatientComponent.prototype.dispensedPatientSelectedOpen = function (list) {
        this.dispensedPatientSelected = list;
        $('#uploadedPrescriptionModal').modal('show');
    };
    DashboardConsultationPatientComponent.prototype.checkOptionOfPad = function (value) {
        // console.log(this.doctorData)
        if (!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length < 1) {
            return true;
        }
        else {
            for (var i = 0; i < this.doctorData.pad_customization_options.length; i++) {
                if (this.doctorData.pad_customization_options[i].value == value) {
                    if (this.doctorData.pad_customization_options[i].status == true) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
    };
    DashboardConsultationPatientComponent.prototype.getFooterText = function () {
        if (!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length < 1) {
            return "Not for Medico-Legal Purpose";
        }
        else {
            return this.doctorData.pad_customization_options[12].text;
        }
    };
    DashboardConsultationPatientComponent.prototype.getHeaderText = function () {
        if (!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length < 1) {
            return "PLEASE TAKE PRIOR APPOINTMENT";
        }
        else {
            return this.doctorData.pad_customization_options[8].text;
        }
    };
    DashboardConsultationPatientComponent.prototype.setAllShiftsForPreview = function () {
        this.allShifts = [];
        var Mon = false;
        var Tue = false;
        var Wed = false;
        var Thu = false;
        var Fri = false;
        var Sat = false;
        var Sun = false;
        for (var i = 0; i < this.doctorData.consultation_schedule.length; i++) {
            var string = '';
            if (this.doctorData.consultation_schedule[i].Monday == true) {
                Mon = true;
                if (string == '') {
                    string = "Mon";
                }
                else {
                    string = string + ", " + "Mon";
                }
            }
            if (this.doctorData.consultation_schedule[i].Tuesday == true) {
                Tue = true;
                if (string == '') {
                    string = "Tue";
                }
                else {
                    string = string + ", " + "Tue";
                }
            }
            if (this.doctorData.consultation_schedule[i].Wednesday == true) {
                Wed = true;
                if (string == '') {
                    string = "Wed";
                }
                else {
                    string = string + ", " + "Wed";
                }
            }
            if (this.doctorData.consultation_schedule[i].Thursday == true) {
                Thu = true;
                if (string == '') {
                    string = "Thu";
                }
                else {
                    string = string + ", " + "Thu";
                }
            }
            if (this.doctorData.consultation_schedule[i].Friday == true) {
                Fri = true;
                if (string == '') {
                    string = "Fri";
                }
                else {
                    string = string + ", " + "Fri";
                }
            }
            if (this.doctorData.consultation_schedule[i].Saturday == true) {
                Sat = true;
                if (string == '') {
                    string = "Sat";
                }
                else {
                    string = string + ", " + "Sat";
                }
            }
            if (this.doctorData.consultation_schedule[i].Sunday == true) {
                Sun = true;
                if (string == '') {
                    string = "Sun";
                }
                else {
                    string = string + ", " + "Sun";
                }
            }
            var object = {
                day: string,
                shifts: this.doctorData.consultation_schedule[i].shifts
            };
            this.allShifts.push(object);
        }
        var stringClosed = '';
        this.allShiftsClosed = [];
        if (Mon == false) {
            if (stringClosed == '') {
                stringClosed = "Mon";
            }
            else {
                stringClosed = stringClosed + ", " + "Mon";
            }
        }
        if (Tue == false) {
            if (stringClosed == '') {
                stringClosed = "Tue";
            }
            else {
                stringClosed = stringClosed + ", " + "Tue";
            }
        }
        if (Wed == false) {
            if (stringClosed == '') {
                stringClosed = "Wed";
            }
            else {
                stringClosed = stringClosed + ", " + "Wed";
            }
        }
        if (Thu == false) {
            if (stringClosed == '') {
                stringClosed = "Thu";
            }
            else {
                stringClosed = stringClosed + ", " + "Thu";
            }
        }
        if (Fri == false) {
            if (stringClosed == '') {
                stringClosed = "Fri";
            }
            else {
                stringClosed = stringClosed + ", " + "Fri";
            }
        }
        if (Sat == false) {
            if (stringClosed == '') {
                stringClosed = "Sat";
            }
            else {
                stringClosed = stringClosed + ", " + "Sat";
            }
        }
        if (Sun == false) {
            if (stringClosed == '') {
                stringClosed = "Sun";
            }
            else {
                stringClosed = stringClosed + ", " + "Sun";
            }
        }
        if (stringClosed != '') {
            var object = {
                day: stringClosed
            };
            this.allShiftsClosed.push(object);
        }
    };
    DashboardConsultationPatientComponent.prototype.getShift = function (date) {
        var day = this.datePipe.transform(date, 'EEEE');
        var shiftTime;
        shiftTime = 0;
        shiftTime = (new Date(date).getHours() * 60) + new Date(date).getMinutes();
        ///console.log(shiftTime)
        for (var i = 0; i < this.doctorData.consultation_schedule.length; i++) {
            if (this.doctorData.consultation_schedule[i].Monday == true && day == 'Monday') {
                for (var k = 0; k < this.doctorData.consultation_schedule[i].shifts.length; k++) {
                    if (k < 3) {
                        var scheduleTime;
                        scheduleTime = 0;
                        scheduleTime = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute);
                        var scheduleTimeTo;
                        scheduleTimeTo = 0;
                        scheduleTimeTo = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute);
                        if (shiftTime < scheduleTimeTo && shiftTime >= scheduleTime) {
                            if (k == 0) {
                                this.shiftOne++;
                            }
                            else if (k == 1) {
                                this.shiftTwo++;
                            }
                            else {
                                this.shiftThree++;
                            }
                        }
                    }
                }
            }
            else if (this.doctorData.consultation_schedule[i].Tuesday == true && day == 'Tuesday') {
                for (var k = 0; k < this.doctorData.consultation_schedule[i].shifts.length; k++) {
                    if (k < 3) {
                        var scheduleTime;
                        scheduleTime = 0;
                        scheduleTime = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute);
                        var scheduleTimeTo;
                        scheduleTimeTo = 0;
                        scheduleTimeTo = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute);
                        if (shiftTime < scheduleTimeTo && shiftTime >= scheduleTime) {
                            if (k == 0) {
                                this.shiftOne++;
                            }
                            else if (k == 1) {
                                this.shiftTwo++;
                            }
                            else {
                                this.shiftThree++;
                            }
                        }
                    }
                }
            }
            else if (this.doctorData.consultation_schedule[i].Wednesday == true && day == 'Wednesday') {
                for (var k = 0; k < this.doctorData.consultation_schedule[i].shifts.length; k++) {
                    if (k < 3) {
                        var scheduleTime;
                        scheduleTime = 0;
                        scheduleTime = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute);
                        var scheduleTimeTo;
                        scheduleTimeTo = 0;
                        scheduleTimeTo = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute);
                        if (shiftTime < scheduleTimeTo && shiftTime >= scheduleTime) {
                            if (k == 0) {
                                this.shiftOne++;
                            }
                            else if (k == 1) {
                                this.shiftTwo++;
                            }
                            else {
                                this.shiftThree++;
                            }
                        }
                    }
                }
            }
            else if (this.doctorData.consultation_schedule[i].Thursday == true && day == 'Thursday') {
                for (var k = 0; k < this.doctorData.consultation_schedule[i].shifts.length; k++) {
                    if (k < 3) {
                        var scheduleTime;
                        scheduleTime = 0;
                        scheduleTime = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute);
                        var scheduleTimeTo;
                        scheduleTimeTo = 0;
                        scheduleTimeTo = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute);
                        if (shiftTime < scheduleTimeTo && shiftTime >= scheduleTime) {
                            if (k == 0) {
                                this.shiftOne++;
                            }
                            else if (k == 1) {
                                this.shiftTwo++;
                            }
                            else {
                                this.shiftThree++;
                            }
                        }
                    }
                }
            }
            else if (this.doctorData.consultation_schedule[i].Friday == true && day == 'Friday') {
                for (var k = 0; k < this.doctorData.consultation_schedule[i].shifts.length; k++) {
                    if (k < 3) {
                        var scheduleTime;
                        scheduleTime = 0;
                        scheduleTime = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute);
                        var scheduleTimeTo;
                        scheduleTimeTo = 0;
                        scheduleTimeTo = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute);
                        if (shiftTime < scheduleTimeTo && shiftTime >= scheduleTime) {
                            if (k == 0) {
                                this.shiftOne++;
                            }
                            else if (k == 1) {
                                this.shiftTwo++;
                            }
                            else {
                                this.shiftThree++;
                            }
                        }
                    }
                }
            }
            else if (this.doctorData.consultation_schedule[i].Saturday == true && day == 'Saturday') {
                for (var k = 0; k < this.doctorData.consultation_schedule[i].shifts.length; k++) {
                    if (k < 3) {
                        var scheduleTime;
                        scheduleTime = 0;
                        scheduleTime = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute);
                        var scheduleTimeTo;
                        scheduleTimeTo = 0;
                        scheduleTimeTo = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute);
                        if (shiftTime < scheduleTimeTo && shiftTime >= scheduleTime) {
                            if (k == 0) {
                                this.shiftOne++;
                            }
                            else if (k == 1) {
                                this.shiftTwo++;
                            }
                            else {
                                this.shiftThree++;
                            }
                        }
                    }
                }
            }
            else if (this.doctorData.consultation_schedule[i].Sunday == true && day == 'Sunday') {
                for (var k = 0; k < this.doctorData.consultation_schedule[i].shifts.length; k++) {
                    if (k < 3) {
                        var scheduleTime;
                        scheduleTime = 0;
                        scheduleTime = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute);
                        var scheduleTimeTo;
                        scheduleTimeTo = 0;
                        scheduleTimeTo = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute);
                        if (shiftTime < scheduleTimeTo && shiftTime >= scheduleTime) {
                            if (k == 0) {
                                this.shiftOne++;
                            }
                            else if (k == 1) {
                                this.shiftTwo++;
                            }
                            else {
                                this.shiftThree++;
                            }
                        }
                    }
                }
            }
        }
    };
    DashboardConsultationPatientComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    DashboardConsultationPatientComponent.prototype.sortSales = function (a, b) {
        var swapped;
        do {
            swapped = false;
            for (var i = 0; i < a.length - 1; i++) {
                if (a[i] > a[i + 1]) {
                    var temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    var temp = b[i];
                    b[i] = b[i + 1];
                    b[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        var newDateArray = [];
        for (var i = 0; i < a.length; i++) {
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'));
        }
        this.lineChartLabels = newDateArray;
    };
    DashboardConsultationPatientComponent.prototype.sortPatient = function (a, b) {
        var swapped;
        do {
            swapped = false;
            for (var i = 0; i < a.length - 1; i++) {
                if (a[i] > a[i + 1]) {
                    var temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    var temp = b[i];
                    b[i] = b[i + 1];
                    b[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        var newDateArray = [];
        for (var i = 0; i < a.length; i++) {
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'));
        }
        this.lineChartLabels1 = newDateArray;
    };
    DashboardConsultationPatientComponent.prototype.go = function () {
        var _this = this;
        this.totalCollection = 0;
        this.avgCollection = 0;
        this.dateDiff = 0;
        var maxArray = [];
        this.feeArray = [];
        this.maxSaleOfDay = 0;
        this.minSaleOfDay = 0;
        this.maxCollectionDate = 0;
        this.minCollectionDate = 0;
        this.totalPrescriptions = 0;
        this.maxPrescofDay = 0;
        this.minPrescOfDay = 0;
        this.maxPresconDate = 0;
        this.minPresconDate = 0;
        this.totalRegPatients = 0;
        this.newPatients = 0;
        this.totalMale = 0;
        this.totalFemale = 0;
        this.totalMalePercentage = 0;
        this.totalFemalePercentage = 0;
        this.totalWalkIn = 0;
        this.totalEmergency = 0;
        this.totalAppointment = 0;
        this.totalWalkInPercentage = 0;
        this.totalEmergencyPercentage = 0;
        this.totalAppointmentPercentage = 0;
        this.shiftOne = 0;
        this.shiftTwo = 0;
        this.shiftThree = 0;
        this.shiftOnepercentage = 0;
        this.shiftTwopercentage = 0;
        this.shiftThreepercentage = 0;
        var totalAge = 0;
        this.avgAge = 0;
        this.freqPatientArray = [];
        var localFreqArray = [];
        this.diagnosisArray = [];
        this.UniquePatientArray = [];
        this.uniqueFrequentArray = [];
        var object;
        object = {};
        object.doctor_id = this.doctorData._id;
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
        this.FindReferralPatients(object);
        this.userService.OPDAnalytics(object).subscribe(function (data) {
            console.log(data);
            if (data.response) {
                _this.totalPrescriptions = data.dataDispensed.length;
                _this.totalRegPatients = data.dataRegistrations.length;
                for (var i = 0; i < data.dataDispensed.length; i++) {
                    if (data.dataDispensed[i].registration.fee) {
                        _this.totalCollection += parseInt(data.dataDispensed[i].registration.fee);
                    }
                    _this.getShift(data.dataDispensed[i].registration.createdAt);
                    maxArray.push(_this.datePipe.transform(data.dataDispensed[i].createAt, 'yyyy-MM-dd'));
                    // if(data.dataDispensed[i].registration.lastVisit.status == false){
                    // 	this.newPatients++
                    // }
                    // if(data.dataDispensed[i].registration.gender == 'Male'){
                    // 	this.totalMale++
                    // }else{
                    // 	this.totalFemale++
                    // }
                    if (data.dataDispensed[i].registration.type == "Walk-in") {
                        _this.totalWalkIn++;
                    }
                    else if (data.dataDispensed[i].registration.type == "Emergency") {
                        _this.totalEmergency++;
                    }
                    else {
                        _this.totalAppointment++;
                    }
                    if (data.dataDispensed[i].registration.age) {
                        totalAge += data.dataDispensed[i].registration.age;
                    }
                    if (data.dataDispensed[i].registration.lastVisit.count) {
                        localFreqArray.push({
                            name: data.dataDispensed[i].registration.pateintName,
                            count: data.dataDispensed[i].registration.lastVisit.count,
                            createdAt: data.dataDispensed[i].registration.createdAt,
                            phone: data.dataDispensed[i].registration.pateintPhone
                        });
                    }
                }
                for (var i = 0; i < data.dataRegistrations.length; i++) {
                    if (data.dataRegistrations[i].fee) {
                        _this.totalCollection += parseInt(data.dataRegistrations[i].fee);
                    }
                    _this.getShift(data.dataRegistrations[i].createdAt);
                    maxArray.push(_this.datePipe.transform(data.dataRegistrations[i].createAt, 'yyyy-MM-dd'));
                    // if(data.dataRegistrations[i].gender == 'Male'){
                    // 	this.totalMale++
                    // }else{
                    // 	this.totalFemale++
                    // }
                    if (data.dataRegistrations[i].type == "Walk-in") {
                        _this.totalWalkIn++;
                    }
                    else if (data.dataRegistrations[i].type == "Emergency") {
                        _this.totalEmergency++;
                    }
                    else {
                        _this.totalAppointment++;
                    }
                    if (data.dataRegistrations[i].age) {
                        totalAge += data.dataRegistrations[i].age;
                    }
                    if (data.dataRegistrations[i].lastVisit.count) {
                        localFreqArray.push({
                            name: data.dataRegistrations[i].pateintName,
                            count: data.dataRegistrations[i].lastVisit.count,
                            createdAt: data.dataRegistrations[i].createdAt,
                            phone: data.dataRegistrations[i].pateintPhone
                        });
                    }
                }
                ////////Unique Patient////////////////
                for (var i = 0; i < data.dataRegistrations.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.UniquePatientArray.length; j++) {
                        if (_this.UniquePatientArray[j].name == data.dataRegistrations[i].pateintName &&
                            _this.UniquePatientArray[j].phone == data.dataRegistrations[i].pateintPhone) {
                            if (data.dataRegistrations[i].lastVisit.status == false) {
                                _this.newPatients++;
                            }
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        if (data.dataRegistrations[i].lastVisit.status == false) {
                            _this.newPatients++;
                        }
                        if (data.dataRegistrations[i].gender == 'Male') {
                            _this.totalMale++;
                        }
                        if (data.dataRegistrations[i].gender == 'Female') {
                            _this.totalFemale++;
                        }
                        _this.UniquePatientArray.push({
                            name: data.dataRegistrations[i].pateintName,
                            phone: data.dataRegistrations[i].pateintPhone
                        });
                    }
                }
                for (var i = 0; i < data.dataDispensed.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.UniquePatientArray.length; j++) {
                        if (_this.UniquePatientArray[j].name == data.dataDispensed[i].registration.pateintName &&
                            _this.UniquePatientArray[j].phone == data.dataDispensed[i].registration.pateintPhone) {
                            if (data.dataDispensed[i].registration.lastVisit.status == false) {
                                _this.newPatients++;
                            }
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        if (data.dataDispensed[i].registration.lastVisit.status == false) {
                            _this.newPatients++;
                        }
                        if (data.dataDispensed[i].registration.gender == 'Male') {
                            _this.totalMale++;
                        }
                        else {
                            _this.totalFemale++;
                        }
                        _this.UniquePatientArray.push({
                            name: data.dataDispensed[i].registration.pateintName,
                            phone: data.dataDispensed[i].registration.pateintPhone
                        });
                    }
                }
                ///////////End Unique Patient ////////
                //////////Freq Array New/////////////
                for (var i = 0; i < _this.UniquePatientArray.length; i++) {
                    _this.UniquePatientArray[i].count = 0;
                    for (var j = 0; j < data.dataRegistrations.length; j++) {
                        if (_this.UniquePatientArray[i].name == data.dataRegistrations[j].pateintName &&
                            _this.UniquePatientArray[i].phone == data.dataRegistrations[j].pateintPhone) {
                            _this.UniquePatientArray[i].count++;
                        }
                    }
                    for (var j = 0; j < data.dataDispensed.length; j++) {
                        if (_this.UniquePatientArray[i].name == data.dataDispensed[j].registration.pateintName &&
                            _this.UniquePatientArray[i].phone == data.dataDispensed[j].registration.pateintPhone) {
                            _this.UniquePatientArray[i].count++;
                        }
                    }
                    _this.uniqueFrequentArray.push({
                        name: _this.UniquePatientArray[i].name,
                        phone: _this.UniquePatientArray[i].phone,
                        count: _this.UniquePatientArray[i].count
                    });
                }
                /////////Endf Freq Array New////////
                _this.avgCollection = _this.totalCollection / (data.dataDispensed.length + data.dataRegistrations.length);
                var diff = Math.abs(new Date(_this.toDate1).getTime() - new Date(_this.fromDate1).getTime());
                _this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
                _this.totalMalePercentage = (_this.totalMale * 100) / (_this.UniquePatientArray.length);
                _this.totalFemalePercentage = (_this.totalFemale * 100) / (_this.UniquePatientArray.length);
                _this.totalWalkInPercentage = (_this.totalWalkIn * 100) / (_this.totalPrescriptions + _this.totalRegPatients);
                _this.totalEmergencyPercentage = (_this.totalEmergency * 100) / (_this.totalPrescriptions + _this.totalRegPatients);
                _this.totalAppointmentPercentage = (_this.totalAppointment * 100) / (_this.totalPrescriptions + _this.totalRegPatients);
                _this.avgAge = totalAge / (_this.totalPrescriptions + _this.totalRegPatients);
                var dateArray = [];
                dateArray.push('10-11-2018');
                var newMaxArray = [];
                var prescriptionArray = [];
                var patientArray = [];
                patientArray.push(0);
                newMaxArray.push(maxArray[0]);
                for (var i = 0; i < maxArray.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < newMaxArray.length; j++) {
                        if (maxArray[i] == newMaxArray[j]) {
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        newMaxArray.push(maxArray[i]);
                    }
                }
                for (var i = 0; i < newMaxArray.length; i++) {
                    var total_fee = 0;
                    var total_reg_fee = 0;
                    var total_prescriptions = 0;
                    var total_patients = 0;
                    var total_reg_patient = 0;
                    for (var j = 0; j < data.dataDispensed.length; j++) {
                        if (newMaxArray[i] == _this.datePipe.transform(data.dataDispensed[j].createAt, 'yyyy-MM-dd')) {
                            if (data.dataDispensed[j].registration.fee) {
                                total_fee += parseInt(data.dataDispensed[j].registration.fee);
                                total_prescriptions++;
                                total_patients++;
                            }
                        }
                    }
                    for (var k = 0; k < data.dataRegistrations.length; k++) {
                        if (newMaxArray[i] == _this.datePipe.transform(data.dataRegistrations[k].createAt, 'yyyy-MM-dd')) {
                            if (data.dataRegistrations[k].fee) {
                                total_reg_fee += parseInt(data.dataRegistrations[k].fee);
                                total_prescriptions++;
                                total_reg_patient++;
                            }
                        }
                    }
                    prescriptionArray.push(total_prescriptions);
                    _this.feeArray.push(total_fee + total_reg_fee);
                    patientArray.push(total_patients + total_reg_patient);
                    dateArray.push(newMaxArray[i]);
                }
                console.log(patientArray);
                ////////maxCollection With date////////////
                _this.maxSaleOfDay = Math.max.apply(Math, _this.feeArray);
                _this.minSaleOfDay = Math.min.apply(Math, _this.feeArray);
                var newMaxValue = -1;
                newMaxValue = _this.feeArray.findIndex(function (x) { return x == _this.maxSaleOfDay; });
                _this.maxCollectionDate = dateArray[newMaxValue];
                var newMinValue = -1;
                newMinValue = _this.feeArray.findIndex(function (x) { return x == _this.minSaleOfDay; });
                _this.minCollectionDate = dateArray[newMinValue];
                /////////End////////////////
                //////////max presc with  date///////
                _this.maxPrescofDay = Math.max.apply(Math, prescriptionArray);
                _this.minPrescOfDay = Math.min.apply(Math, prescriptionArray);
                var newMaxPresc = -1;
                newMaxPresc = prescriptionArray.findIndex(function (x) { return x == _this.maxPrescofDay; });
                _this.maxPresconDate = dateArray[newMaxPresc];
                var newMinPresc = -1;
                newMinPresc = prescriptionArray.findIndex(function (x) { return x == _this.minPrescOfDay; });
                _this.minPresconDate = dateArray[newMinPresc];
                // console.log(prescriptionArray)
                // console.log(newMaxArray)
                ////////end//////////////
                /////Chart///////
                console.log(_this.feeArray);
                _this.lineChartData = [
                    { data: _this.feeArray, label: 'Total Collection' },
                ];
                _this.lineChartLabels = dateArray;
                //////patient Chart //////////
                _this.lineChartData1 = [
                    { data: patientArray, label: 'Total Patients' },
                ];
                _this.lineChartLabels1 = dateArray;
                var patientDateArray = [];
                for (var i = 0; i < dateArray.length; i++) {
                    patientDateArray.push(dateArray[i]);
                }
                /////////////////////////// Date Sort Logic //////////////////////
                _this.sortSales(dateArray, _this.feeArray);
                _this.sortPatient(patientDateArray, patientArray);
                ///////////////////////// End sort Logic /////////////////////////
                console.log(_this.shiftOne, _this.shiftTwo, _this.shiftThree);
                _this.shiftOnepercentage = (_this.shiftOne * 100) / (_this.totalPrescriptions + _this.totalRegPatients);
                _this.shiftTwopercentage = (_this.shiftTwo * 100) / (_this.totalPrescriptions + _this.totalRegPatients);
                _this.shiftThreepercentage = (_this.shiftThree * 100) / (_this.totalPrescriptions + _this.totalRegPatients);
                var freqPatientArray = [];
                for (var i = 0; i < localFreqArray.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < freqPatientArray.length; j++) {
                        if (freqPatientArray[j].name == localFreqArray[i].name && freqPatientArray[j].phone == localFreqArray[i].phone) {
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        freqPatientArray.push({
                            name: localFreqArray[i].name,
                            count: localFreqArray[i].count,
                            phone: localFreqArray[i].phone
                        });
                    }
                }
                // for (var i = 0; i < freqPatientArray.length; i++) {
                // 	for (var j = 0; j < data.dataRegistrations.length; j++) {
                // 		if(data.dataRegistrations[j].pateintName == freqPatientArray[i].name && 
                // 			data.dataRegistrations[j].pateintPhone == freqPatientArray[i].phone){
                // 			freqPatientArray[i].count++
                // 		}
                // 	}	
                // 	for (var k = 0; k < data.dataDispensed.length; k++) {
                // 		if(freqPatientArray[i].name ==  data.dataDispensed[k].registration.pateintName &&
                // 			freqPatientArray[i].phone ==  data.dataDispensed[k].registration.pateintPhone){
                // 			freqPatientArray[i].count++
                // 		}
                // 	}
                // }
                for (var i = 0; i < freqPatientArray.length; i++) {
                    freqPatientArray[i].count = 0;
                    for (var j = 0; j < localFreqArray.length; j++) {
                        if (freqPatientArray[i].name == localFreqArray[j].name &&
                            freqPatientArray[i].phone == localFreqArray[j].phone) {
                            freqPatientArray[i].count++;
                        }
                    }
                    if (freqPatientArray[i].count >= 2) {
                        _this.freqPatientArray.push({
                            name: freqPatientArray[i].name,
                            count: freqPatientArray[i].count,
                            phone: freqPatientArray[i].phone
                        });
                    }
                }
                _this.freqPatientArray.sort(function (a, b) { return parseInt(b.count) - parseInt(a.count); });
                ///////////////// top 10 Diagnois///////////////////////
                for (var i = 0; i < data.dataDispensed.length; i++) {
                    for (var j = 0; j < data.dataDispensed[i].precription.diagnosisSelected.length; j++) {
                        var boolean = false;
                        for (var k = 0; k < _this.diagnosisArray.length; k++) {
                            if (_this.diagnosisArray[k].value == data.dataDispensed[i].precription.diagnosisSelected[j].display) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            _this.diagnosisArray.push({
                                value: data.dataDispensed[i].precription.diagnosisSelected[j].display,
                                occurrence: 0,
                                percentage: 0
                            });
                        }
                    }
                }
                for (var k = 0; k < _this.diagnosisArray.length; k++) {
                    var count = 0;
                    var totalLengthDiagnosis = 0;
                    for (var i = 0; i < data.dataDispensed.length; i++) {
                        for (var j = 0; j < data.dataDispensed[i].precription.diagnosisSelected.length; j++) {
                            if (data.dataDispensed[i].precription.diagnosisSelected[j].display) {
                                totalLengthDiagnosis++;
                            }
                            if (_this.diagnosisArray[k].value == data.dataDispensed[i].precription.diagnosisSelected[j].display) {
                                count++;
                            }
                            _this.diagnosisArray[k].occurrence = count;
                            _this.diagnosisArray[k].percentage = (count * 100) / totalLengthDiagnosis;
                        }
                    }
                }
                _this.diagnosisArray.sort(function (a, b) { return parseInt(b.occurrence) - parseInt(a.occurrence); });
                /////////////////End top 10 diagnosis ///////////////////
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardConsultationPatientComponent.prototype.getData = function (data) {
        if (isNaN(data)) {
            return 0;
        }
        else if (data % 1 != 0) {
            return parseInt(data);
            // return data.toFixed(2)
        }
        else {
            return data;
        }
    };
    DashboardConsultationPatientComponent.prototype.getDataCeil = function (data) {
        return Math.ceil(data);
    };
    DashboardConsultationPatientComponent.prototype.getClassMap = function (data, i) {
        if (data.outOfStation) {
            return 'out';
        }
        else {
            if (i % 2 == 0) {
                return 'cstm-tr-3';
            }
            else {
                return 'cstm-tr-3 evn';
            }
        }
    };
    DashboardConsultationPatientComponent.prototype.FindReferralPatients = function (object) {
        var _this = this;
        this.dataReferralTo = [];
        this.dataReferralFrom = [];
        var ob = {
            doctorData: this.doctorData,
            object: object
        };
        this.userService.FindReferralPatients(ob).subscribe(function (data) {
            console.log(data);
            if (data.response) {
                _this.dataReferralTo = data.dataReferralTo;
                _this.dataReferralFrom = data.dataReferralFrom;
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardConsultationPatientComponent.prototype.viewReferralPatients = function (status) {
        this.referralPatientArray = [];
        if (status == 1) {
            for (var i = 0; i < this.dataReferralTo.length; i++) {
                this.referralPatientArray.push({
                    name: this.dataReferralTo[i].name,
                    phone: this.dataReferralTo[i].phone,
                    note: this.dataReferralTo[i].note,
                    date: this.dataReferralTo[i].createdAt,
                    patientName: this.dataReferralTo[i].patient_name
                });
            }
        }
        else {
            for (var i = 0; i < this.dataReferralFrom.length; i++) {
                this.referralPatientArray.push({
                    name: this.dataReferralFrom[i].name,
                    phone: this.dataReferralFrom[i].phone,
                    note: this.dataReferralFrom[i].note,
                    date: this.dataReferralFrom[i].createdAt,
                    patientName: this.dataReferralFrom[i].patient_name
                });
            }
        }
    };
    DashboardConsultationPatientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-consultation-patient',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-patient/dashboard-consultation-patient.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-patient/dashboard-consultation-patient.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], DashboardConsultationPatientComponent);
    return DashboardConsultationPatientComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-patient/dashboard-consultation-patient.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardConsultationPatientModule", function() { return DashboardConsultationPatientModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_consultation_patient_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-patient/dashboard-consultation-patient-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_consultation_patient_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-patient/dashboard-consultation-patient.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardConsultationPatientModule = /** @class */ (function () {
    function DashboardConsultationPatientModule() {
    }
    DashboardConsultationPatientModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_consultation_patient_routing_module__["a" /* DashboardConsultationPatientRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__dashboard_consultation_patient_component__["a" /* DashboardConsultationPatientComponent */]]
        })
    ], DashboardConsultationPatientModule);
    return DashboardConsultationPatientModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-consultation-patient.module.chunk.js.map