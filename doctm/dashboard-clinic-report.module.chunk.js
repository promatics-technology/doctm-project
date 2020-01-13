webpackJsonp(["dashboard-clinic-report.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-clinic-report/dashboard-clinic-report-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardClinicReportRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_clinic_report_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-clinic-report/dashboard-clinic-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_clinic_report_component__["a" /* DashboardClinicReportComponent */],
    }
];
var DashboardClinicReportRoutingModule = /** @class */ (function () {
    function DashboardClinicReportRoutingModule() {
    }
    DashboardClinicReportRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardClinicReportRoutingModule);
    return DashboardClinicReportRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-clinic-report/dashboard-clinic-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cus-content-wrapper{\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n.hding > h3{\r\n    margin: 0px;\r\n    padding:15px 0px;\r\n    background-color: #d9e0dd; \r\n}\r\n.hding  h5.btm{\r\n    margin: 0px;\r\n    padding:15px 0px;\r\n    background-color: #d9e0dd; \r\n}\r\n.cstm-tbl{\r\n    width: 100%;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n}\r\n.clr-vlt{\r\n    color: #5c62af;\r\n}\r\n.tb-1{\r\n    margin-top:15px;\r\n}\r\n.tb-1 tr td{\r\n    padding:2px 8px;\r\n    vertical-align: middle; \r\n}\r\n.cstm-tbl tr{\r\n    height:40px;\r\n}\r\n.footer-cstm-an{\r\n    position: fixed;\r\n    float: left;\r\n    width: 100%;\r\n    bottom:0px;\r\n    background: #00b0f0;\r\n    color:#fff;\r\n    z-index: 99;\r\n    padding-top: 8px;\r\n}\r\n.mt-table h3{\r\n    margin-top: 0px;\r\n}\r\n.cstm-tr{\r\n    background-color:#92d050;\r\n    color:#fff;\r\n    text-align: center;\r\n}\r\n.cstm-tr-2{\r\n    background-color:#c5d8f1;\r\n}\r\n.cstm-tr-2 td{\r\n    border-right:1px solid #bbb; \r\n}\r\n.cstm-tr-2 td:last-child {\r\n border-right: none;\r\n}\r\n.cstm-tr-3{\r\n    border-bottom:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td{\r\n    border-right:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td:last-child {\r\n border-right: none;\r\n}\r\n.color-red {\r\n    color: #ff0000;\r\n    -webkit-transform: translateY(-8px);\r\n            transform: translateY(-8px);\r\n}\r\n.cstm-tr-4{\r\n    background-color: #f2dada;\r\n}\r\n.cstm-mg{\r\n    margin-top: 5px;\r\n}\r\n.btn-go{\r\n    background-color: transparent;\r\n    border: 1px solid #002160;\r\n    margin-bottom: 5px;\r\n    min-width: 62%;\r\n}\r\n.btn-go:hover{\r\n    -webkit-transition: 300ms;\r\n    transition: 300ms;\r\n    background: #98C74F;\r\n    border-color: #98C74F;\r\n    color: #fff;\r\n}\r\n.li-cstm a{\r\n    text-align: center!important;\r\n    background: #000!important;\r\n    color: #fff!important;\r\n    font-size: 16px!important;\r\n    font-weight: inherit!important;\r\n    padding: 6px!important;\r\n}\r\n.cus-sidebar{\r\n    height: inherit!important;\r\n}\r\n.side-bar-cstm{\r\n    z-index: 99;\r\n}\r\n.res-tab-2{\r\n    max-height: 225px;\r\n}\r\n.cstm-ul-new li{\r\n    width:170px;\r\n}\r\n.cstm-ul-new li a{\r\n    background-color:transparent;\r\n    color:#000;\r\n    padding:10px;\r\n    cursor: pointer;\r\n    border-radius: 0px;\r\n    border-bottom: 2px solid transparent; \r\n    text-align: center;\r\n}\r\n.cstm-ul-new li.active a{\r\n    background-color: #e0e0e0;\r\n    color: #000;\r\n    border-bottom: 2px solid #00b0f0;\r\n}\r\n.cstm-tab-5{\r\n    padding:0px 15px;\r\n    padding-bottom: 15px; \r\n}\r\n/* The cstm chkmark */\r\n.cstm-chkmark {\r\n    margin-top: 10px;\r\n    margin-right: 35px;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom:8px;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n/* Hide the browser's default checkbox */\r\n.cstm-chkmark input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 0;\r\n  width: 0;\r\n}\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: #eee;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.cstm-chkmark:hover input ~ .checkmark {\r\n  background-color: #ccc;\r\n}\r\n/* When the checkbox is checked, add a blue background */\r\n.cstm-chkmark input:checked ~ .checkmark {\r\n  background-color: #00b0f0;\r\n}\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n/* Show the checkmark when checked */\r\n.cstm-chkmark input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n/* Style the checkmark/indicator */\r\n.cstm-chkmark .checkmark:after {\r\n  left:7px;\r\n  top: 4px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n.cstm-tab-5{\r\n    min-height: 410px;\r\n    max-height: 410px;\r\n    overflow-y: scroll;\r\n}\r\n.cus-sidebar>ul>li>a {\r\n    padding: 13px;\r\n}\r\n.btn-grin{\r\n    background-color: rgb(251,212,180)!important;\r\n    color: #000!important;\r\n    margin-bottom:8px;\r\n    padding-right:40px!important;\r\n    padding-left: 40px!important;\r\n}\r\n.btn-pink{\r\n    background-color: rgb(155,187,89)!important;\r\n    color: #000!important;\r\n    margin-bottom: 8px;\r\n    padding-right:40px!important;\r\n    padding-left: 40px!important;\r\n}\r\n/*table {\r\n  border: 1px solid #989898;\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-clinic-report/dashboard-clinic-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"ipd-body\">\n\t<div class=\"cus-sidebar-wrapper side-bar-cstm\">\n\t\t<div class=\"cus-sidebar\">\n\t\t\t<ul> \n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>From</b></h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-9\">\n\t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"fromDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>To</b></h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-9\">\n\t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"toDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"text-right brder-cstm\">\n\t\t\t\t\t<div class=\"col-lg-12 text-center\">\n\t\t\t\t\t\t<button class=\"btn btn-go\" (click)=\"go()\">Go</button>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"li-cstm\"> <a href=\"javascript:void(0);\"> For Past</a> </li>\n\t\t\t\t<!-- <li class=\"{{getClass(0)}}\" (click)=\"activatetab(0)\" class=\"active\"> <a href=\"javascript:void(0);\"> Current </a> </li> -->\n\t\t\t\t<li class=\"{{getClass(1)}}\" (click)=\"activatetab(1)\"> <a href=\"javascript:void(0);\"> 1 Week &nbsp;<small *ngIf=\"activatedtab==1\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t\t\t\t<li class=\"{{getClass(2)}}\" (click)=\"activatetab(2)\"> <a href=\"javascript:void(0);\"> 2 Weeks &nbsp;<small *ngIf=\"activatedtab==2\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small>  </a> </li>\n\t\t\t\t<li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month &nbsp;<small *ngIf=\"activatedtab==3\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t\t\t\t<li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month &nbsp;<small *ngIf=\"activatedtab==4\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t<li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month &nbsp;<small *ngIf=\"activatedtab==5\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t<li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year &nbsp;<small *ngIf=\"activatedtab==6\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t<!-- <li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> All </a> </li> -->\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<div class=\"stock-tab\">\n\t\t<div class=\"col-lg-8 col-lg-offset-3 col-md-8 col-md-offset-3\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 text-center\">\n\t\t\t\t\t<label class=\"cstm-chkmark\">Summary Report\n\t\t\t\t\t\t<input type=\"radio\" [checked]=\"!radioFull\" name=\"radio\" (click)=\"changeRadio(1)\">\n\t\t\t\t\t\t<span class=\"checkmark\"></span>\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"cstm-chkmark\">Full Report\n\t\t\t\t\t\t<input type=\"radio\" [checked]=\"radioFull\" name=\"radio\" (click)=\"changeRadio(2)\">\n\t\t\t\t\t\t<span class=\"checkmark\"></span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"cstm-tab-5\">\n\t\t\t\t<div  class=\"opd-report\" style=\"page-break-after: always;height:970px;border:1px solid #000;margin-bottom:10px;position:relative;padding:25x;\">\n\t\t\t\t\t<div style=\"position: absolute;top:10px;right: 10px;\">\n\t\t\t\t\t\t<img src=\"./assets/imgs/logoDoctm.png\" style=\"width:30px;height: auto;\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div style=\"position: absolute;bottom: 0;left:0;background-color: #fff;width:100%;text-align: center;padding: 5px 0px;\">\n\t\t\t\t\t\tdoctm “ Where technology meets healthcare”\n\t\t\t\t\t</div>\n\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/logoDoctm.png\" style=\"width:160px;height: auto;margin: 20px 0px;\">\n\t\t\t\t\t\t\t\t<h4 style=\"margin: 0px;\"><b>Doctm Clinic Report</b></h4><br><br><br>\n\t\t\t\t\t\t\t\t<div><h3 style=\"color:#00b0f0;\">{{adminClinicDoctor[0]?.clinic_details?.clinic_name}}</h3></div><br><br><br>\n\t\t\t\t\t\t\t\t<h4 style=\"color:grey;\">{{adminClinicDoctor[0]?.clinic_details?.address}} {{adminClinicDoctor[0]?.clinic_details?.area}} </h4>\n\t\t\t\t\t\t\t\t<h4 style=\"color:grey;\">{{adminClinicDoctor[0]?.clinic_details?.city}}</h4>\n\t\t\t\t\t\t\t\t<h5 style=\"color:grey;\">Clinic ID: {{adminClinicDoctor[0]?.clinic_details?.clinic_id}}</h5><br><br><br>\n\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t<b *ngIf=\"activatedtab === 1\">1 Week</b>\n\t\t\t\t\t\t\t\t\t<b *ngIf=\"activatedtab === 2\">2 Weeks</b>\n\t\t\t\t\t\t\t\t\t<b *ngIf=\"activatedtab === 3\">1 Month</b>\n\t\t\t\t\t\t\t\t\t<b *ngIf=\"activatedtab === 4\">3 Months</b>\n\t\t\t\t\t\t\t\t\t<b *ngIf=\"activatedtab === 5\">6 Months</b>\n\t\t\t\t\t\t\t\t\t<b *ngIf=\"activatedtab === 6\">1 Year</b>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<p style=\"font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t\t({{fromDate1 | date: 'd'}}<sup>th</sup> {{fromDate1 | date: 'MMM'}} - {{toDate1 | date: 'd'}}<sup>th</sup> {{toDate1 | date: 'MMM'}}, {{fromDate1 | date: 'yyyy'}})\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div  class=\"opd-report\" style=\"page-break-after: always;height:970px;border:1px solid #000;margin-bottom:10px;position:relative;padding:25x;\">\n\t\t\t\t\t<table style=\"width: 100%; margin:10px auto;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\" colspan=\"4\">\n\t\t\t\t\t\t\t\t<h3 style=\"color:#00b0f0;text-transform: uppercase;\"><b>CONTENT</b></h3>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"border: 1px solid #989898; border-left:none;border-right: none;\">\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">SR NO</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">Chapter</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b>Page</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngFor=\"let content of rpt_content; let i=index\">\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">{{i+1}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">{{content.col2}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b>{{content.col3}}</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b>{{i+1}}</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<!--tr *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy==true\">\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">2</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">Pharmacy Report</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b>2</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngIf=\"doctorData.clinic_services.Clinic_Diagnostics==true\">\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">3</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">Diagnostic Report</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b>3</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngIf=\"doctorData.clinic_services.Clinic_IPD==true\">\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">4</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">IPD Report</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b>3</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">5</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">Clinic Summary Report</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b>3</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">6</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">Annexure-1</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b></b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">7</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">Annexure-2</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b></b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">8</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\">Annexure-3</td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:8px;\"><b></b></td>\n\t\t\t\t\t\t</tr-->\n\t\t\t\t\t</table>\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"opd-report\" style=\"page-break-after: always;height:970px;border:1px solid #000;margin-bottom:10px;position:relative;padding:25x;\">\n\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\" colspan=\"7\">\n\t\t\t\t\t\t\t<h4 style=\"color:#00b0f0;border-bottom:1px solid #00b0f0; display: inline-block;margin-bottom: 10px;text-transform: uppercase;font-weight: bold;\">OPD Report</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"width:100%; max-width: 100%;margin-right:2px; \">\n\t\t\t\t\t\t<tr style=\"background: rgb(241,241,241);\">\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>OPD PARAMETERS</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\"><b>Dr. {{getDoctorName(data.id)}}</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;\"><b>CLINIC</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align:left;padding-left: 10px;\" colspan=\"7\">\n\t\t\t\t\t\t\t\t<h5 style=\"border-bottom:1px solid black;display: inline-block;margin-bottom: 20px;\"><b>OPD Report</b></h5>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"\">\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Consultation collection</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.sales}} ({{data.percentage}} %)</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{getData(totalCollection)}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"\">\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Avg daily collection</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.avgDailyColl}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{getData(avgDailyCollection)}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"border-bottom:1px solid #4d4d4d;\">\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Avg collection per prescription</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.avgColl}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{getData(avgPatientCollection)}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align:left;padding-left: 10px;\" colspan=\"7\">\n\t\t\t\t\t\t\t\t<h5 style=\"border-bottom:1px solid black;display: inline-block;margin-bottom: 20px;\"><b>PRESCRIPTION </b></h5>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Prescriptions </td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.prescriptions}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalPrescriptions}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"border-bottom:1px solid #4d4d4d;\">\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Avg daily prescriptions </td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{getData(data.avgDailyPrescription)}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{getData(avgTotalPrescriptions)}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align:left;padding-left: 10px;\" colspan=\"7\">\n\t\t\t\t\t\t\t\t<h5 style=\"border-bottom:1px solid black;display: inline-block;margin-bottom: 20px;\"><b>PATIENT</b></h5>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Patients </td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.totalPatients}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{patientArray.length}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">New patients added</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.newPatients}} </td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{newPatientArray.length}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Avg daily patients</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.avgDailyPatients}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalAvgDailyPatients}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Frequent Patients ( >=2 visits)</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.frequentPatients}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalFreqPatients}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Male patients</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.male}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalMalePatients}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Female patients </td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.female}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalFemalePatients}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Avg. Patient Age (Yrs)</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.avgAge}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalAvgAgePatients}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Walk-In patients</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.walkin}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalWalkinPatients}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Appointment patients</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.appointment}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalAppointmentPatients}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"border-bottom:1px solid #4d4d4d;\"> \n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Emergency patients</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.emergency}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalEmergencyPatients}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div  class=\"time\" style=\"page-break-after: always;height:970px;border:1px solid #000;margin-bottom:10px;position:relative;padding:25x;\">\n\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px; margin-top: 15px;\">\n\t\t\t\t\t\t<tr style=\"\">\n\t\t\t\t\t\t\t<td style=\"text-align:left;padding-left: 10px;\" colspan=\"7\">\n\t\t\t\t\t\t\t\t<h5 style=\"border-bottom:1px solid black;display: inline-block;margin-bottom: 20px;\"><b>TIME</b> </h5>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Avg CTU </td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.avgCtu}}%</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalCtuUtilisedPerc}}%</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"border-bottom:1px solid #4d4d4d;\">\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Avg time per patient </td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.totalSec}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalAvgTime}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"max-width: 100%; margin:10px auto;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Total clinic consultation collection </td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Rs. {{getData(totalCollection)}}</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Total clinic prescriptions</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>{{totalPrescriptions}}</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Total clinic patients  </td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>{{patientArray.length}}</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pharmacy-report\" style=\"page-break-after: always;height:970px;border:1px solid #000;margin-bottom:10px;position:relative;padding:25x;\" *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy==true\">\n\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\" colspan=\"7\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#00b0f0;border-bottom:1px solid #00b0f0; display: inline-block;margin-bottom: 10px;text-transform: uppercase;font-weight: bold;\">Pharmacy Report</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align:left;\" colspan=\"7\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000;display: inline-block;margin-bottom: 10px;\">Sales</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px; border:1px solid #000;\">\n\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n\t\t\t\t\t\t\t<td style=\"text-align:center; border:1px solid #000;padding:10px;\" rowspan=\"2\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Doctors </h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td style=\"text-align:center; border:1px solid #000;padding:10px;\" colspan=\"8\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">PHARMACY </h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\" >\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Sales</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Orders </h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\" >\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Profit</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Per prescription sale</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngFor=\"let dr of pharmacyDoctors\">\n\t\t\t\t\t\t\t<td colspan=\"1\" style=\"text-align: center;border:1px solid #000;\"><h4>Dr. {{getDoctorName(dr._id)}} </h4></td>\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.sales}}</h5></div>\n\t\t\t\t\t\t\t\t<div><h6>({{dr.salesPerc}}%) </h6></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.orders}}</h5></div>\n\t\t\t\t\t\t\t\t<div><h6>({{dr.ordersPerc}}%) </h6></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.profit}} </h5></div>\n\t\t\t\t\t\t\t\t<div><h6>({{dr.profitPerc}}%) </h6></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.perPresSale}}</h5></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n\t\t\t\t\t\t\t\t<td  colspan=\"1\" style=\"text-align: center;border:1px solid #000;\"><h4>Clinic Aggregate</h4></td>\n\t\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalPharmacySales}}</h4></td>\n\t\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalPharmacyOrders}}</h4></td>\n\t\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalPharmacyProfit}}</h4></td>\n\t\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalPharmacyPerPresSale}}</h4></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<table style=\"width:100%;\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t<h4>Over all Pharmacy profit: <span style=\"color:rgb(0,176,80);font-weight:22px;\">{{overAllPharmacyProfit}} %</span> I  Patient conversion: <span style=\"color:rgb(0,176,80);font-weight:22px;\">{{pharmacyPatientConversion}} %</span></h4>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px;\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td style=\"text-align:left;\" colspan=\"7\">\n\t\t\t\t\t\t\t\t\t<h4 style=\"color:#00b0f0;border-bottom:1px solid #00b0f0; display: inline-block;margin-bottom: 10px;text-transform: uppercase;font-weight: bold;\">PURCHASE</h4>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<table style=\"max-width: 100%; margin:10px auto;\">\n\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Number of purchases </td>\n\t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n\t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>{{stockPurchases}}</b></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Number of products purchased</td>\n\t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n\t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>{{stockUniqueProducts.length}}</b></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Purchase value </td>\n\t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n\t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Rs. {{stockProductsAmount}}</b></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div  class=\"stock-valuation\" style=\"page-break-after: always;\" *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy==true\">\n\t\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px;\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td style=\"text-align:left;\" colspan=\"7\">\n\t\t\t\t\t\t\t\t\t<h4 style=\"color:#00b0f0;border-bottom:1px solid #00b0f0; display: inline-block;margin-bottom: 10px;text-transform: uppercase;font-weight: bold;\">PHARMACY CURRENT STOCK VALUATION </h4>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<table style=\"max-width:350px;\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"5\">\n\t\t\t\t\t\t\t\t\t(As on 21 st Nov, 2019. 13:45)\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>1</b></td>\n\t\t\t\t\t\t\t\t<td style=\"padding:5px;  font-size: 18px;\">Total product items</td>\n\t\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>:</b></td>\n\t\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>{{stockArray.length}}</b></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>2</b></td>\n\t\t\t\t\t\t\t\t<td style=\"padding:5px;  font-size: 18px;\">Purchase value of stock</td>\n\t\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>:</b></td>\n\t\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>Rs. {{getData(purchaseValueStock)}}</b></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>3</b></td>\n\t\t\t\t\t\t\t\t<td style=\"padding:5px;  font-size: 18px;\">Sale value of stock</td>\n\t\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>:</b></td>\n\t\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>Rs. {{getData(saleValueStock)}}</b></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>4</b></td>\n\t\t\t\t\t\t\t\t<td style=\"padding:5px;  font-size: 18px;\">Profit value of stock</td>\n\t\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>:</b></td>\n\t\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>Rs. {{getData(saleValueStock-purchaseValueStock)}}</b></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<!-- <tr style=\"background-color:rgb(241,241,241);border:1px solid #989898; \">\n\t\t\t\t\t\t\t<td colspan=\"5\" style=\"padding-left: 15px;\">\n\t\t\t\t\t\t\t\t<h4><b>PAST MONTH</b></h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>4</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Stock valuation change (purchase value)</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>+/- Rs. 86500</b></td>\n\t\t\t\t\t\t</tr> -->\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"diagnostics-report\" style=\"page-break-after: always;height:970px;border:1px solid #000;margin-bottom:10px;position:relative;padding:25x;\" *ngIf=\"doctorData.clinic_services.Clinic_Diagnostics==true\">\n\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\" colspan=\"7\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#00b0f0;border-bottom:1px solid #00b0f0;display: inline-block;margin-bottom: 10px;text-transform:uppercase;font-weight: bold;\">Diagnostics Report </h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px; border:1px solid #000;\">\n\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n\t\t\t\t\t\t\t<td style=\"text-align:center; border:1px solid #000;padding:10px;\" rowspan=\"2\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Doctors </h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td style=\"text-align:center; border:1px solid #000;padding:10px;\" colspan=\"8\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">DIAGNOSTICS</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\" >\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Sales</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Orders </h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Per prescription sale</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngFor=\"let dr of diagnosticsDoctors\">\n\t\t\t\t\t\t\t<td colspan=\"1\" style=\"text-align: center;border:1px solid #000;\"><h4>Dr. {{getDoctorName(dr._id)}} </h4></td>\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.sales}}</h5></div>\n\t\t\t\t\t\t\t\t<div><h6>({{dr.salesPerc}}%) </h6></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.orders}} </h5></div>\n\t\t\t\t\t\t\t\t<div><h6>({{dr.ordersPerc}}%) </h6></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.perPresSale}}</h5></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n\t\t\t\t\t\t\t<td  colspan=\"1\" style=\"text-align: center;border:1px solid #000;\"><h4>Clinic Aggregate</h4></td>\n\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalDiagnosticsSales}}</h4></td>\n\n\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalDiagnosticsOrders}}</h4></td>\n\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalDiagnosticsPerPresSale}}</h4></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"width:100%;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t<h4>Patient conversion: <span style=\"color:rgb(0,176,80);font-weight:22px;\"> {{diagnosticsPatientConversion}} % </span></h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ipd-report\" style=\"page-break-after: always;height:970px;border:1px solid #000;margin-bottom:10px;position:relative;padding:25x;\" *ngIf=\"doctorData.clinic_services.Clinic_IPD==true\">\n\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\" colspan=\"7\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:rgb(0,87,150);border-bottom:1px solid rgb(0,87,150);display: inline-block;margin-bottom: 10px;color:#00b0f0;text-transform: uppercase;font-weight: bold;\">IPD Report</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px; border:1px solid #000;\">\n\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n\t\t\t\t\t\t\t<td style=\"text-align:center; border:1px solid #000;padding:10px;\" rowspan=\"2\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Consulting Doctors</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td style=\"text-align:center; border:1px solid #000;padding:10px;\" colspan=\"9\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">IPD REVENUE</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\" >\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Patients Discharged</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\" >\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Patients Admitted</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Revenue</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Admission Hrs</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Avg. Revenue per admission</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngFor=\"let dr of dataArray\">\n\t\t\t\t\t\t\t<td colspan=\"1\" style=\"text-align: center;border:1px solid #000;\"><h4>Dr. {{getDoctorName(dr._id)}} </h4></td>\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.patientsDishcarge}}</h5></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.patientAdmitted}}</h5></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.total_bill}}</h5></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.admissionHours}}</h5></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>Rs. {{dr.avgRevenue}}</h5></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n\t\t\t\t\t\t\t<td  colspan=\"1\" style=\"text-align: center;border:1px solid #000;\"><h4>Clinic </h4></td>\n\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalIpdDischarged}}</h4></td>\n\n\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalIpdAdmissions}}</h4></td>\n\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalIpdBill}}</h4></td>\n\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalIpdHours}}</h4></td>\n\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>Rs. {{totalIpdAvgBill}}</h4></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"width:100%;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t<h4>IPD Occupancy: <span style=\"color:rgb(0,176,80);font-weight:22px;\"> {{ipdOccupancy}}% </span></h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clinic-smry-report\" style=\"page-break-after: always;height:970px;border:1px solid #000;margin-bottom:10px;position:relative;padding:25x;\">\n\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\" colspan=\"7\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#00b0f0;border-bottom:1px solid #00b0f0;display: inline-block;margin-bottom: 10px;text-transform: uppercase;font-weight: bold;\">Clinic Summary Report</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table class=\"table table-bordered new-tab-22\">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);border:1px solid #989898; \">\n\t\t\t\t\t\t\t\t<td rowspan=\"2\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t<div>Services</div> <div>&</div><div> Doctors</div></td>\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center\"><b>OPD</b></td>\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center\" *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy==true\"><b>PHARMACY</b></td>\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center\"><b>DIAGNOSTICS</b></td>\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center\"><b>IPD</b></td>\n\t\t\t\t\t\t\t\t\t<td rowspan=\"2\" class=\"text-center\"><div>TOTAL </div><small>(Rs.)</small></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);border:1px solid #989898; \">\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Collection</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Patients </td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Sales</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Profit </td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Collection </td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Orders </td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Collection</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Admission</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let dr of dataSummaryArray\">\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div>Dr. {{getDoctorName(dr.doctor_id)}}</div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.collection}}</small></div><div><small>({{dr.collectionPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.patients}}</small></div><div><small>({{dr.patientsPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.sales}}</small></div><div><small>({{dr.salesPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.profit}}</small></div><div><small>({{dr.profitPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.collectionDiagnostics}}</small></div><div><small>({{dr.collectionDiagnosticsPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.orders}}</small></div><div><small>({{dr.ordersPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.collectionIpd}}</small></div><div><small>({{dr.collectionIpdPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.ordersIpd}}</small></div><div><small>({{dr.ordersIpdPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div>{{dr.totalCollection}}</div><div>({{dr.totalCollectionPerc}}%)</div></td>\n\t\t\t\t\t\t\t\t</tr> \n\t\t\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);border:1px solid #989898; \">\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>Total</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{opdCollection}}</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{patientsArray.length}}</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{pharmacySales}}</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center vlt\"><div><b>{{pharmacyProfit}}</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{diagnosticsCollection}}</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{diagnosticsOrders}}</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{ipdCollection}}</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{ipdAdmission}}</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\" style=\"background-color:#46dc46;\"><div>{{totalClinicCollection}}</div></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t \n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"max-width:350px;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\" colspan=\"5\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#00b0f0;border-bottom:1px solid #00b0f0;display: inline-block;margin-bottom: 10px;text-transform: uppercase;font-weight: bold;\">Total Clinic collection</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding: 5px;  font-size: 18px;\">1</td>\n\t\t\t\t\t\t\t<td style=\"padding: 5px;  font-size: 18px;\">OPD consultation</td>\n\t\t\t\t\t\t\t<td style=\"padding: 5px; \"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding: 5px; \"><b>Rs. {{opdCollection}}</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding: 5px;  font-size: 18px;\">2</td>\n\t\t\t\t\t\t\t<td style=\"padding: 5px;  font-size: 18px;\">Pharmacy sales</td>\n\t\t\t\t\t\t\t<td style=\"padding: 5px; \"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding: 5px; \"><b>Rs. {{pharmacySales}}</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding: 5px;  font-size: 18px;\">3</td>\n\t\t\t\t\t\t\t<td style=\"padding: 5px;  font-size: 18px;\">Diagnostics sales</td>\n\t\t\t\t\t\t\t<td style=\"padding: 5px; \"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding: 5px; \"><b>Rs. {{diagnosticsCollection}}</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"padding: 5px;  font-size: 18px;\">4</td>\n\t\t\t\t\t\t\t<td style=\"padding: 5px;  font-size: 18px;\">IPD collection</td>\n\t\t\t\t\t\t\t<td style=\"padding: 5px; \"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding: 5px; \"><b>Rs. {{ipdCollection}}</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"width:100%;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t<h4>TOTAL COLLECTION: Rs. <span style=\"color:rgb(0,176,80);font-weight:22px;\"> {{totalClinicCollection}}</span></h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"anexchure\" style=\"page-break-after: always;height:970px;border:1px solid #000;margin-bottom:10px;position:relative;padding:25x;\" *ngIf=\"radioFull\">\n\t\t\t\t\t<table style=\"width:100%; margin-top: 15px;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan=\"20\" style=\"text-align:right\"><h4>Annexure -1</h4></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align:left;\">\n\t\t\t\t\t\t\t\t<h4>OPD Patient details of Dr. [login doctor]</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"max-width: 100%; width:100%;\">\n\t\t\t\t\t\t<tr style=\"border:1px solid #000;border-right: transparent;border-left:transparent;\">\n\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>SNo</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \" width=\"130px\"><b>Prescription ID</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>Date</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \" width=\"130px\"><b>Patient name</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>Age</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>Gender</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>Address</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>Mobile no</b></td>\n\t\t\t\t\t\t\t<!-- <td style=\"padding:2px 15px 18px; \"><b>Diagnosis</b></td> -->\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"\" *ngFor=\"let pt of patientDetails;let i = index\">\n\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>{{i+1}}</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \" width=\"130px\">{{pt.prescription_id}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \">{{pt.createdAt | date: 'dd/LL/yy'}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \" width=\"130px\">{{pt.registration.pateintName}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \">{{pt.registration.age_in_years}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \">{{pt.registration.gender}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \">{{pt.registration.location}}, {{pt.registration.city}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \">{{pt.registration.pateintPhone}}</td>\n\t\t\t\t\t\t\t<!-- <td style=\"padding:10px; \"></td> -->\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"anexchure-2\" style=\"page-break-after: always;height:970px;border:1px solid #000;margin-bottom:10px;position:relative;padding:25x;\" *ngIf=\"radioFull\">\n\t\t\t\t\t<table style=\"width:100%; margin-top: 15px;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan=\"20\" style=\"text-align:right\"><h4>Annexure -2</h4></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align:left;\">\n\t\t\t\t\t\t\t\t<h4>IPD contribution details of Dr. [login doctor]</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"max-width: 100%; width:100%;\">\n\t\t\t\t\t\t<tr style=\"border:1px solid #000;border-right: transparent;border-left:transparent;\">\n\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>SNo</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \" width=\"130px\"><b>Prescription ID</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>Date</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \" width=\"130px\"><b>Patient name</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>Age</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>Gender</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>Address</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>Mobile no</b></td>\n\t\t\t\t\t\t\t<!-- <td style=\"padding:2px 15px 18px; \"><b>Diagnosis</b></td> -->\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"\" *ngFor=\"let pt of patientDetails;let i = index\">\n\t\t\t\t\t\t\t<td style=\"padding:5px; \"><b>{{i+1}}</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \" width=\"130px\">{{pt.prescription_id}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \">{{pt.createdAt | date: 'dd/LL/yy'}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \" width=\"130px\">{{pt.registration.pateintName}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \">{{pt.registration.age_in_years}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \">{{pt.registration.gender}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \">{{pt.registration.location}}, {{pt.registration.city}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:5px; \">{{pt.registration.pateintPhone}}</td>\n\t\t\t\t\t\t\t<!-- <td style=\"padding:10px; \"></td> -->\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"anexchure-3\" style=\"page-break-after: always;height:970px;border:1px solid #000;margin-bottom:10px;position:relative;padding:25x;\" *ngIf=\"radioFull\">\n\t\t\t\t\t<table style=\"width:100%; margin-top: 15px;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan=\"20\" style=\"text-align:right\"><h4>Annexure -3</h4></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align:left;\">\n\t\t\t\t\t\t\t\t<h4>IPD details</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"max-width: 100%; width:100%;\">\n\t\t\t\t\t\t<tr style=\"border: 1px solid #989898; background-color:rgb(241,241,241);border-bottom:1px solid green;border-top:1px solid green;\">\n\t\t\t\t\t\t\t<td style=\"padding:10px; \"><b>SNo</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Patient Name </b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Admission date</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Discharge date</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Bill value</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Contact number</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"border: 1px solid #989898; background-color:rgb(230,238,213);\" *ngFor=\"let pt of patientDetailsIpd;let i = index\">\n\t\t\t\t\t\t\t<td style=\"padding:10px; \"><b>{{i+1}}</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \"><b>{{pt.patientName}}</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">{{pt.createdAt | date: 'dd/LL/yy'}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">\n\t\t\t\t\t\t\t\t<span *ngIf=\"pt.discharge\">{{pt.discharge_date | date: 'dd/LL/yy'}}</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"!pt.discharge\">N.A</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">\n\t\t\t\t\t\t\t\t<span *ngIf=\"pt.discharge\">{{pt.total_bill}}</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"!pt.discharge\">N.A</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">{{pt.phone}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"container footer-cstm-an\">\n\t\t<div class=\"row\">\n\t\t\t<!-- <div class=\"col-lg-4 text-center\">\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"btn btn-grin\" (click)=\"getPdf()\">PRINT</button>\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t\t\t<div class=\"col-lg-12 text-center\">\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"btn btn-grin\" (click)=\"getPdf()\"><b>PRINT</b></button>\n\t\t\t\t</div>\n\t\t\t</div><!-- \n\t\t\t<div class=\"col-lg-6 text-left\">\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"btn btn-pink\" (click)=\"getPdf()\"><b>SHARE</b></button>\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t\t</div>\n\t</div>\n</div>\n\n<!-- show the pdf -->\n<div class=\"modal fade\" id=\"pdfmodal\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-body\"><div class=\"\" id=\"clinicReport\">\n\t\t\t<div  class=\"opd-report\" style=\"page-break-after: always;position: relative;height:970px;border:1px solid #000;padding: 3px;\">\n        \t\t\t<!-- <div style=\"position: absolute;bottom:15px; left:0;height: 3px;width:100%;background-color: black;z-index: 999;\">\n        \t\t\t\tzCzczcc\n        \t\t\t</div> -->\n        \t\t\t<table style=\"width:100%; max-width: 100%;height:970px; margin-bottom: 10px;\">\n        \t\t\t\t<tr>\n        \t\t\t\t\t<td style=\"text-align: center;\">\n        \t\t\t\t\t\t<img src=\"./assets/imgs/logoDoctm.png\" style=\"width:160px;height: auto;margin: 20px 0px;\">\n        \t\t\t\t\t\t<h4 style=\"margin: 0px;\"><b>Doctm Clinic Report</b></h4><br><br><br>\n        \t\t\t\t\t\t<div><h3 style=\"color:#00b0f0;\">{{adminClinicDoctor[0]?.clinic_details?.clinic_name}}</h3></div><br><br><br>\n        \t\t\t\t\t\t<h4 style=\"color:grey;\">{{adminClinicDoctor[0]?.clinic_details?.address}} {{adminClinicDoctor[0]?.clinic_details?.area}} </h4>\n        \t\t\t\t\t\t<h4 style=\"color:grey;\">{{adminClinicDoctor[0]?.clinic_details?.city}}</h4>\n        \t\t\t\t\t\t<h5 style=\"color:grey;\">Clinic ID: {{adminClinicDoctor[0]?.clinic_details?.clinic_id}}</h5><br><br><br>\n        \t\t\t\t\t\t<h3>\n        \t\t\t\t\t\t\t<b *ngIf=\"activatedtab === 1\">1 Week</b>\n        \t\t\t\t\t\t\t<b *ngIf=\"activatedtab === 2\">2 Weeks</b>\n        \t\t\t\t\t\t\t<b *ngIf=\"activatedtab === 3\">1 Month</b>\n        \t\t\t\t\t\t\t<b *ngIf=\"activatedtab === 4\">3 Months</b>\n        \t\t\t\t\t\t\t<b *ngIf=\"activatedtab === 5\">6 Months</b>\n        \t\t\t\t\t\t\t<b *ngIf=\"activatedtab === 6\">1 Year</b>\n        \t\t\t\t\t\t\t<br>\n        \t\t\t\t\t\t\t<p style=\"font-size: 14px;\">\n        \t\t\t\t\t\t\t\t({{fromDate1 | date: 'd'}}<sup>th</sup> {{fromDate1 | date: 'MMM'}} - {{toDate1 | date: 'd'}}<sup>th</sup> {{toDate1 | date: 'MMM'}}, {{fromDate1 | date: 'yyyy'}})\n        \t\t\t\t\t\t\t</p>\n        \t\t\t\t\t\t</h3>\n        \t\t\t\t\t</td>\n        \t\t\t\t</tr>\n        \t\t\t</table>\n        \t\t</div>\n        \t\t<div  class=\"opd-report\" style=\"page-break-after: always;position: relative;height:970px;border:1px solid #000;padding: 3px;\">\n        \t\t\t<table style=\"width: 100%; margin:10px auto;\">\n        \t\t\t\t<tr>\n        \t\t\t\t\t<td style=\"text-align: center;\" colspan=\"4\">\n        \t\t\t\t\t\t<h3><b>CONTENT</b></h3>\n        \t\t\t\t\t</td>\n        \t\t\t\t</tr>\n        \t\t\t\t<tr style=\"border: 1px solid #989898; border-left:none;border-right: none;\">\n        \t\t\t\t\t<td style=\"padding:8px;\">SR NO</td>\n        \t\t\t\t\t<td style=\"padding:8px;\">Chapter</td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b>Page</b></td>\n        \t\t\t\t</tr>\n        \t\t\t\t<tr>\n        \t\t\t\t\t<td style=\"padding:8px;\">1</td>\n        \t\t\t\t\t<td style=\"padding:8px;\">OPD Report</td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b>1</b></td>\n        \t\t\t\t</tr>\n        \t\t\t\t<tr>\n        \t\t\t\t\t<td style=\"padding:8px;\">2</td>\n        \t\t\t\t\t<td style=\"padding:8px;\">Pharmacy Report</td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b>2</b></td>\n        \t\t\t\t</tr>\n        \t\t\t\t<tr>\n        \t\t\t\t\t<td style=\"padding:8px;\">3</td>\n        \t\t\t\t\t<td style=\"padding:8px;\">Diagnostic Report</td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b>3</b></td>\n        \t\t\t\t</tr>\n        \t\t\t\t<tr>\n        \t\t\t\t\t<td style=\"padding:8px;\">4</td>\n        \t\t\t\t\t<td style=\"padding:8px;\">IPD Report</td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b>3</b></td>\n        \t\t\t\t</tr>\n        \t\t\t\t<tr>\n        \t\t\t\t\t<td style=\"padding:8px;\">5</td>\n        \t\t\t\t\t<td style=\"padding:8px;\">Clinic Summary Report</td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b>3</b></td>\n        \t\t\t\t</tr>\n        \t\t\t\t<tr>\n        \t\t\t\t\t<td style=\"padding:8px;\">6</td>\n        \t\t\t\t\t<td style=\"padding:8px;\">Annexure-1</td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b></b></td>\n        \t\t\t\t</tr>\n        \t\t\t\t<tr>\n        \t\t\t\t\t<td style=\"padding:8px;\">7</td>\n        \t\t\t\t\t<td style=\"padding:8px;\">Annexure-2</td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b></b></td>\n        \t\t\t\t</tr>\n        \t\t\t\t<tr>\n        \t\t\t\t\t<td style=\"padding:8px;\">8</td>\n        \t\t\t\t\t<td style=\"padding:8px;\">Annexure-3</td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b>:</b></td>\n        \t\t\t\t\t<td style=\"padding:8px;\"><b></b></td>\n        \t\t\t\t</tr>\n        \t\t\t</table>\t\n        \t\t</div>\n        \t\t<div style=\"margin: 30px;\">\n        \t\t\t<div class=\"opd-report\" style=\"page-break-after: always;position: relative;height:940px;border:1px solid #000;padding: 3px;\">\n        \t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px;\">\n        \t\t\t\t\t<tr>\n        \t\t\t\t\t\t<td style=\"text-align: center;\" colspan=\"7\">\n        \t\t\t\t\t\t\t<h4 style=\"color: #00b0f0;border-bottom:1px solid #00b0f0;display: inline-block;margin-bottom: 10px;text-transform: uppercase;\">OPD ggggggfReport</h4>\n        \t\t\t\t\t\t</td>\n        \t\t\t\t\t</tr>\n        \t\t\t\t</table>\n        \t\t\t\t<table style=\"border: 1px solid #989898; width:100%; max-width: 100%;\">\n        \t\t\t\t\t<tr style=\"background: rgb(241,241,241);\">\n        \t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>OPD PARAMETERS</b></td>\n        \t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\"><b>Dr. {{getDoctorName(data.id)}}</b></td>\n        \t\t\t\t\t\t<td style=\"padding:2px 15px 18px;border-right: 1px solid #000;\"><b>CLINIC</b></td>\n        \t\t\t\t\t</tr>\n        \t\t\t\t\t<tr>\n        \t\t\t\t\t\t<td style=\"text-align:left;padding-left: 10px;\" colspan=\"7\">\n        \t\t\t\t\t\t\t<h5 style=\"border-bottom:1px solid black;display: inline-block;margin-bottom: 20px;\"><b>OPD Report</b></h5>\n        \t\t\t\t\t\t</td>\n        \t\t\t\t\t</tr>\n        \t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Consultation collection</td>\n        \t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.sales}} ({{data.percentage}} %)</td>\n        \t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{getData(totalCollection)}}</td>\n        \t\t\t\t\t</tr>\n        \t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Avg daily collection</td>\n        \t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.avgDailyColl}}</td>\n        \t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{getData(avgDailyCollection)}}</td>\n        \t\t\t\t\t</tr>\n        \t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Avg collection per prescription</td>\n        \t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.avgColl}}</td>\n        \t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{getData(avgPatientCollection)}}</td>\n        \t\t\t\t\t</tr>\n        \t\t\t\t\t<tr>\n        \t\t\t\t\t\t<td style=\"text-align:left;padding-left: 10px;\" colspan=\"7\">\n        \t\t\t\t\t\t\t<h5 style=\"border-bottom:1px solid black;display: inline-block;margin-bottom: 20px;\">\n        \t\t\t\t\t\t\t\t<b>PRESCRIPTION</b> </h5>\n        \t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Prescriptions </td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.prescriptions}}</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalPrescriptions}}</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Avg daily prescriptions </td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{getData(data.avgDailyPrescription)}}</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{getData(avgTotalPrescriptions)}}</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr>\n        \t\t\t\t\t\t\t<td style=\"text-align:left;padding-left: 10px;\" colspan=\"7\">\n        \t\t\t\t\t\t\t\t<h5 style=\"border-bottom:1px solid black;display: inline-block;margin-bottom: 20px;\"><b>PATIENT</b></h5>\n        \t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Patients </td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.totalPatients}}</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{patientArray.length}}</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">New patients added</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.newPatients}} </td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{newPatientArray.length}}</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Avg daily patients</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.avgDailyPatients}}</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalAvgDailyPatients}}</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Frequent Patients ( >=2 visits)</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.frequentPatients}}</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalFreqPatients}}</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Male patients</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.male}}</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalMalePatients}}</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Female patients </td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.female}}</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalFemalePatients}}</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Avg. Patient Age (Yrs)</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.avgAge}}</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalAvgAgePatients}}</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Walk-In patients</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.walkin}}</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalWalkinPatients}}</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Appointment patients</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.appointment}}</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalAppointmentPatients}}</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Emergency patients</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.emergency}}</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalEmergencyPatients}}</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t</table>\n        \t\t\t\t</div>\n        \t\t\t\t<div  class=\"time\" style=\"page-break-after: always;position: relative;height:970px;border:1px solid #000;padding: 3px;\">\n        \t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px; margin-top: 15px;\">\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"text-align:left;padding-left: 10px;\" colspan=\"7\">\n        \t\t\t\t\t\t\t\t<h5 style=\"border-bottom:1px solid black;display: inline-block;margin-bottom: 20px;\">TIME </h5>\n        \t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Avg CTU </td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.avgCtu}}%</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalCtuUtilisedPerc}}%</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898; \">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">Avg time per patient </td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \" *ngFor=\"let data of doctorCollectionArray\">{{data.totalSec}}</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \">{{totalAvgTime}}</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t</table>\n        \t\t\t\t\t<table style=\"max-width: 100%; margin:10px auto;\">\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Total clinic consultation collection </td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Rs. {{getData(totalCollection)}}</b></td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Total clinic prescriptions</td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>{{totalPrescriptions}}</b></td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Total clinic patients  </td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n        \t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>{{patientArray.length}}</b></td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t</table>\t\n        \t\t\t\t</div>\n        \t\t\t\t<div class=\"pharmacy-report\" style=\"page-break-after: always;position: relative;height:970px;border:1px solid #000;padding: 3px;\" *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy\">\n        \t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px;\">\n        \t\t\t\t\t\t<tr>\n        \t\t\t\t\t\t\t<td style=\"text-align: center;\" colspan=\"7\">\n        \t\t\t\t\t\t\t\t<h4 style=\"color:rgb(0,87,150);border-bottom:1px solid rgb(0,87,150);display: inline-block;margin-bottom: 10px;\">Pharmacy Report</h4>\n        \t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr>\n        \t\t\t\t\t\t\t<td style=\"text-align:left;\" colspan=\"7\">\n        \t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000;display: inline-block;margin-bottom: 10px;\">Sales</h4>\n        \t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t</table>\n        \t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px; border:1px solid #000;\">\n        \t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n        \t\t\t\t\t\t\t<td style=\"text-align:center; border:1px solid #000;padding:10px;\" rowspan=\"2\">\n        \t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Doctors </h4>\n        \t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t\t<td style=\"text-align:center; border:1px solid #000;padding:10px;\" colspan=\"8\">\n        \t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">PHARMACY </h4>\n        \t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n        \t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\" >\n        \t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Sales</h4>\n        \t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\">\n        \t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Orders </h4>\n        \t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\" >\n        \t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Profit</h4>\n        \t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\">\n        \t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Per prescription sale</h4>\n        \t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr *ngFor=\"let dr of pharmacyDoctors\">\n        \t\t\t\t\t\t\t<td colspan=\"1\" style=\"text-align: center;border:1px solid #000;\"><h4>Dr. {{getDoctorName(dr._id)}} </h4></td>\n        \t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n        \t\t\t\t\t\t\t\t<div><h5>{{dr.sales}}</h5></div>\n        \t\t\t\t\t\t\t\t<div><h6>({{dr.salesPerc}}%) </h6></div>\n        \t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n        \t\t\t\t\t\t\t\t<div><h5>{{dr.orders}}</h5></div>\n        \t\t\t\t\t\t\t\t<div><h6>({{dr.ordersPerc}}%) </h6></div>\n        \t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n        \t\t\t\t\t\t\t\t<div><h5>{{dr.profit}} </h5></div>\n        \t\t\t\t\t\t\t\t<div><h6>({{dr.profitPerc}}%) </h6></div>\n        \t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n        \t\t\t\t\t\t\t\t<div><h5>{{dr.perPresSale}}</h5></div>\n        \t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t<tr>\n        \t\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n        \t\t\t\t\t\t\t\t<td  colspan=\"1\" style=\"text-align: center;border:1px solid #000;\"><h4>Clinic Aggregate</h4></td>\n        \t\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalPharmacySales}}</h4></td>\n        \t\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalPharmacyOrders}}</h4></td>\n        \t\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalPharmacyProfit}}</h4></td>\n        \t\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalPharmacyPerPresSale}}</h4></td>\n        \t\t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t</table>\n        \t\t\t\t\t\t<table style=\"width:100%;\">\n        \t\t\t\t\t\t\t<tr>\n        \t\t\t\t\t\t\t\t<td style=\"text-align: center;\">\n        \t\t\t\t\t\t\t\t\t<h4>Over all Pharmacy profit: <span style=\"color:rgb(0,176,80);font-weight:22px;\">{{overAllPharmacyProfit}} %</span> I  Patient conversion: <span style=\"color:rgb(0,176,80);font-weight:22px;\">{{pharmacyPatientConversion}} %</span></h4>\n        \t\t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t</table>\n        \t\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px;\">\n        \t\t\t\t\t\t\t<tr>\n        \t\t\t\t\t\t\t\t<td style=\"text-align:left;\" colspan=\"7\">\n        \t\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000;display: inline-block;margin-bottom: 10px;\">PURCHASE</h4>\n        \t\t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t</table>\n        \t\t\t\t\t\t<table style=\"max-width: 100%; margin:10px auto;\">\n        \t\t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Number of purchases </td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>{{stockPurchases}}</b></td>\n        \t\t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Number of products purchased</td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>{{stockUniqueProducts.length}}</b></td>\n        \t\t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Purchase value </td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Rs. {{stockProductsAmount}}</b></td>\n        \t\t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t</table>\n        \t\t\t\t\t</div>\n        \t\t\t\t\t<div  class=\"stock-valuation\" style=\"page-break-after: always;position: relative;height:970px;border:1px solid #000;padding: 3px;\" *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy\">\n        \t\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px;\">\n        \t\t\t\t\t\t\t<tr>\n        \t\t\t\t\t\t\t\t<td style=\"text-align:left;\" colspan=\"7\">\n        \t\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000;display: inline-block;margin-bottom: 10px;\">STOCK VALUATION </h4>\n        \t\t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t</table>\n        \t\t\t\t\t\t<table style=\"max-width: 100%; margin:10px auto;\">\n        \t\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241); border:1px solid #989898; \">\n        \t\t\t\t\t\t\t\t<td colspan=\"5\" style=\"padding-left: 15px;\">\n        \t\t\t\t\t\t\t\t\t<h4><b>CURRENT</b></h4>\n        \t\t\t\t\t\t\t\t</td>\n        \t\t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>1</b></td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Total product items</td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>{{stockArray.length}}</b></td>\n        \t\t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>2</b></td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Purchase value of stock</td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Rs. {{getData(purchaseValueStock)}}</b></td>\n        \t\t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>3</b></td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Sale value of stock</td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Rs. {{getData(saleValueStock)}}</b></td>\n        \t\t\t\t\t\t\t</tr>\n        \t\t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>4</b></td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Profit value of stock</td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n        \t\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Rs. {{getData(saleValueStock-purchaseValueStock)}}</b></td>\n        \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<!-- <tr style=\"background-color:rgb(241,241,241);border:1px solid #989898; \">\n\t\t\t\t\t\t\t<td colspan=\"5\" style=\"padding-left: 15px;\">\n\t\t\t\t\t\t\t\t<h4><b>PAST MONTH</b></h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>4</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Stock valuation change (purchase value)</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>+/- Rs. 86500</b></td>\n\t\t\t\t\t\t</tr> -->\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"diagnostics-report\" style=\"page-break-after: always;position: relative;height:970px;border:1px solid #000;padding: 3px;\">\n\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\" colspan=\"7\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:rgb(0,87,150);border-bottom:1px solid rgb(0,87,150);display: inline-block;margin-bottom: 10px;\">Diagnostics Report </h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align:left;\" colspan=\"7\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000;display: inline-block;margin-bottom: 10px;\">Sales</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px; border:1px solid #000;\">\n\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n\t\t\t\t\t\t\t<td style=\"text-align:center; border:1px solid #000;padding:10px;\" rowspan=\"2\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Doctors </h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td style=\"text-align:center; border:1px solid #000;padding:10px;\" colspan=\"8\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">DIAGNOSTICS</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\" >\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Sales</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Orders </h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Per prescription sale</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngFor=\"let dr of diagnosticsDoctors\">\n\t\t\t\t\t\t\t<td colspan=\"1\" style=\"text-align: center;border:1px solid #000;\"><h4>Dr. {{getDoctorName(dr._id)}} </h4></td>\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.sales}}</h5></div>\n\t\t\t\t\t\t\t\t<div><h6>({{dr.salesPerc}}%) </h6></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.orders}} </h5></div>\n\t\t\t\t\t\t\t\t<div><h6>({{dr.ordersPerc}}%) </h6></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.perPresSale}}</h5></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n\t\t\t\t\t\t\t<td  colspan=\"1\" style=\"text-align: center;border:1px solid #000;\"><h4>Clinic Aggregate</h4></td>\n\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalDiagnosticsSales}}</h4></td>\n\n\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalDiagnosticsOrders}}</h4></td>\n\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalDiagnosticsPerPresSale}}</h4></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"width:100%;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t<h4>Patient conversion: <span style=\"color:rgb(0,176,80);font-weight:22px;\"> {{diagnosticsPatientConversion}} % </span></h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ipd-report\" style=\"page-break-after: always;position: relative;height:970px;border:1px solid #000;padding: 3px;\">\n\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\" colspan=\"7\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:rgb(0,87,150);border-bottom:1px solid rgb(0,87,150);display: inline-block;margin-bottom: 10px;\">IPD Report</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align:left;\" colspan=\"7\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000;display: inline-block;margin-bottom: 10px;\">Sales</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px; border:1px solid #000;\">\n\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n\t\t\t\t\t\t\t<td style=\"text-align:center; border:1px solid #000;padding:10px;\" rowspan=\"2\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Consulting Doctors</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td style=\"text-align:center; border:1px solid #000;padding:10px;\" colspan=\"9\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">IPD</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\" >\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Patients Discharged</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\" >\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Patients Admitted</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Revenue</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Admission Hrs</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"style=\"border:1px solid #000;padding:10px;text-align: center;\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:#000;border-bottom:1px solid #000; display: inline-block;\">Avg. Revenue per admission</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngFor=\"let dr of dataArray\">\n\t\t\t\t\t\t\t<td colspan=\"1\" style=\"text-align: center;border:1px solid #000;\"><h4>Dr. {{getDoctorName(dr._id)}} </h4></td>\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.patientsDishcarge}}</h5></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.patientAdmitted}}</h5></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.total_bill}}</h5></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>{{dr.admissionHours}}</h5></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center;border:1px solid #000;\">\n\t\t\t\t\t\t\t\t<div><h5>Rs. {{dr.avgRevenue}}</h5></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);\">\n\t\t\t\t\t\t\t<td  colspan=\"1\" style=\"text-align: center;border:1px solid #000;\"><h4>Clinic </h4></td>\n\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalIpdDischarged}}</h4></td>\n\n\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalIpdAdmissions}}</h4></td>\n\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalIpdBill}}</h4></td>\n\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>{{totalIpdHours}}</h4></td>\n\t\t\t\t\t\t\t<td  colspan=\"2\" style=\"text-align: center;border:1px solid #000;\"><h4>Rs. {{totalIpdAvgBill}}</h4></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"width:100%;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t<h4>IPD Occupancy: <span style=\"color:rgb(0,176,80);font-weight:22px;\"> {{ipdOccupancy}}% </span></h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clinic-smry-report\" style=\"page-break-after: always;position: relative;height:970px;border:1px solid #000;padding: 3px;\">\n\t\t\t\t\t<table style=\"width:100%; max-width: 100%; margin-bottom: 10px;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\" colspan=\"7\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:rgb(0,87,150);border-bottom:1px solid rgb(0,87,150);display: inline-block;margin-bottom: 10px;\">Clinic Summary Report</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table class=\"table table-bordered new-tab-22\">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);border:1px solid #989898; \">\n\t\t\t\t\t\t\t\t<td rowspan=\"2\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t<div>Services</div> <div>&</div><div> Doctors</div></td>\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center\"><b>OPD</b></td>\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center\"><b>PHARMACY</b></td>\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center\"><b>DIAGNOSTICS</b></td>\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center\"><b>IPD</b></td>\n\t\t\t\t\t\t\t\t\t<td rowspan=\"2\" class=\"text-center\"><div>TOTAL </div><small>(Rs.)</small></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);border:1px solid #989898; \">\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Collection</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Patients </td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Sales</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Profit </td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Collection </td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Orders </td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Collection</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Admission</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let dr of dataSummaryArray\">\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div>Dr. {{getDoctorName(dr.doctor_id)}}</div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.collection}}</small></div><div><small>({{dr.collectionPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.patients}}</small></div><div><small>({{dr.patientsPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.sales}}</small></div><div><small>({{dr.salesPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.profit}}</small></div><div><small>({{dr.profitPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.collectionDiagnostics}}</small></div><div><small>({{dr.collectionDiagnosticsPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.orders}}</small></div><div><small>({{dr.ordersPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.collectionIpd}}</small></div><div><small>({{dr.collectionIpdPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.ordersIpd}}</small></div><div><small>({{dr.ordersIpdPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div>{{dr.totalCollection}}</div><div>({{dr.totalCollectionPerc}}%)</div></td>\n\t\t\t\t\t\t\t\t</tr> \n\t\t\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);border:1px solid #989898; \">\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>Total</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{opdCollection}}</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{patientsArray.length}}</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{pharmacySales}}</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center vlt\"><div><b>{{pharmacyProfit}}</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{diagnosticsCollection}}</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{diagnosticsOrders}}</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{ipdCollection}}</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{ipdAdmission}}</b></div></td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\" style=\"background-color:#46dc46;\"><div>{{totalClinicCollection}}</div></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t    <!-- <tbody>\n\t\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);border:1px solid #989898; \">\n\t\t\t\t\t\t\t\t<td rowspan=\"2\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t<div>Services</div> <div>&</div><div> Doctors</div></td>\n\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center\"><b>OPD</b></td>\n\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center\"><b>PHARMACY</b></td>\n\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center\"><b>DIAGNOSTICS</b></td>\n\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center\"><b>IPD</b></td>\n\t\t\t\t\t\t\t\t<td rowspan=\"2\" class=\"text-center\"><div>TOTAL </div><small>(Rs.)</small></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr  style=\"background-color:rgb(241,241,241);border:1px solid #989898; \">\n\t\t\t\t\t\t\t\t<td class=\"text-center\">Collection</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">Patients </td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">Sales</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">Profit </td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">Collection </td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">Orders </td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">Collection</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">Admission</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div>DOC1</div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>12500</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>130</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div class=\"ornge\"><small>12500</small></div><div class=\"ornge\"><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div>50000</div><div>(35%)</div></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div>DOC2</div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>12500</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>12500</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div>50000</div><div>(35%)</div></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div>DOC3</div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>12500</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>12500</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div>50000</div><div>(35%)</div></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div>DOC4</div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>12500</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>12500</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div>50000</div><div>(35%)</div></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div>DOC5</div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>12500</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>12500</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>125</small></div><div><small>(30%)</small></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div>50000</div><div>(35%)</div></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr style=\"background-color:rgb(241,241,241);border:1px solid #989898; \">\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>Total</b></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>35500</b></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>355</b></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>35500</b></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center vlt\" style=\"background-color:violet;\"><div><b>3550</b></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>35500</b></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>3550</b></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>35500</b></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>34</b></div></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center grin-new\" style=\"background-color:#46dc46;\"><div>142000</div></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody> -->\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"max-width: 100%; margin:10px auto;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\" colspan=\"5\">\n\t\t\t\t\t\t\t\t<h4 style=\"color:rgb(0,87,150);border-bottom:1px solid rgb(0,87,150);display: inline-block;margin-bottom: 10px;\">Total Clinic collection</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">1</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">OPD consultation</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Rs. {{opdCollection}}</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">2</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Pharmacy sales</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Rs. {{pharmacySales}}</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">3</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">Diagnostics sales</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Rs. {{diagnosticsCollection}}</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"border: 1px solid #989898;\">\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">4</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px;  font-size: 18px;\">IPD collection</td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>:</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Rs. {{ipdCollection}}</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"width:100%;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t<h4>TOTAL COLLECTION: Rs. <span style=\"color:rgb(0,176,80);font-weight:22px;\"> {{totalClinicCollection}}</span></h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"anexchure\" style=\"page-break-after: always;position: relative;height:970px;border:1px solid #000;padding: 3px;\" *ngIf=\"radioFull\">\n\t\t\t\t\t<table style=\"width:100%; margin-top: 15px;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan=\"20\" style=\"text-align:right\"><h4>Annexure -1</h4></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align:left;\">\n\t\t\t\t\t\t\t\t<h4>Patient details</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"max-width: 100%; width:100%;\">\n\t\t\t\t\t\t<tr style=\"border: 1px solid #989898; background-color:rgb(241,241,241);border-bottom:1px solid green;border-top:1px solid green;\">\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>SNo</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Prescription ID</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Date</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Patient name</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Age</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Gender</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Address</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Mobile no</b></td>\n\t\t\t\t\t\t\t<!-- <td style=\"padding:2px 15px 18px; \"><b>Diagnosis</b></td> -->\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"border: 1px solid #989898; background-color:rgb(230,238,213);\" *ngFor=\"let pt of patientDetails;let i = index\">\n\t\t\t\t\t\t\t<td style=\"padding:10px; \"><b>{{i+1}}</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">{{pt.prescription_id}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">{{pt.createdAt | date: 'dd/LL/yy'}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">{{pt.registration.pateintName}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">{{pt.registration.age_in_years}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">{{pt.registration.gender}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">{{pt.registration.location}}, {{pt.registration.city}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">{{pt.registration.pateintPhone}}</td>\n\t\t\t\t\t\t\t<!-- <td style=\"padding:10px; \"></td> -->\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"anexchure-2\" style=\"page-break-after: always;position: relative;height:970px;border:1px solid #000;padding: 3px;\" *ngIf=\"radioFull\">\n\t\t\t\t\t<table style=\"width:100%; margin-top: 15px;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan=\"20\" style=\"text-align:right\"><h4>Annexure -2</h4></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align:left;\">\n\t\t\t\t\t\t\t\t<h4>Diagnostic details</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"max-width: 100%; width:100%;\">\n\t\t\t\t\t\t<tr style=\"border: 1px solid #989898; background-color:rgb(241,241,241);border-bottom:1px solid green;border-top:1px solid green;\">\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>SNo</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Test Name </b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Test Category</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Number</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"border: 1px solid #989898; background-color:rgb(230,238,213);\" *ngFor=\"let pt of uniqueDiagnosticsArray;let i = index\">\n\t\t\t\t\t\t\t<td style=\"padding:10px; \"><b>{{i+1}}</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">{{pt.product}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">{{pt.opt}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">{{pt.count}}</td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"anexchure-3\" style=\"page-break-after: always;position: relative;height:970px;border:1px solid #000;padding: 3px;\" *ngIf=\"radioFull\">\n\t\t\t\t\t<table style=\"width:100%; margin-top: 15px;\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan=\"20\" style=\"text-align:right\"><h4>Annexure -3</h4></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align:left;\">\n\t\t\t\t\t\t\t\t<h4>IPD details</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table style=\"max-width: 100%; width:100%;\">\n\t\t\t\t\t\t<tr style=\"border: 1px solid #989898; background-color:rgb(241,241,241);border-bottom:1px solid green;border-top:1px solid green;\">\n\t\t\t\t\t\t\t<td style=\"padding:10px; \"><b>SNo</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Patient Name </b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Admission date</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Discharge date</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Bill value</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:2px 15px 18px; \"><b>Contact number</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr style=\"border: 1px solid #989898; background-color:rgb(230,238,213);\" *ngFor=\"let pt of patientDetailsIpd;let i = index\">\n\t\t\t\t\t\t\t<td style=\"padding:10px; \"><b>{{i+1}}</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \"><b>{{pt.patientName}}</b></td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">{{pt.createdAt | date: 'dd/LL/yy'}}</td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">\n\t\t\t\t\t\t\t\t<span *ngIf=\"pt.discharge\">{{pt.discharge_date | date: 'dd/LL/yy'}}</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"!pt.discharge\">N.A</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">\n\t\t\t\t\t\t\t\t<span *ngIf=\"pt.discharge\">{{pt.total_bill}}</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"!pt.discharge\">N.A</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td style=\"padding:10px; \">{{pt.phone}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-clinic-report/dashboard-clinic-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardClinicReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardClinicReportComponent = /** @class */ (function () {
    function DashboardClinicReportComponent(userService, toastr, datePipe) {
        this.userService = userService;
        this.toastr = toastr;
        this.datePipe = datePipe;
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
        this.rpt_content = [];
    }
    DashboardClinicReportComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        this.adminDoctor = JSON.parse(localStorage['doctorsOfSameClinic']);
        console.log(this.adminDoctor);
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        this.doctorCollectionArray = [];
        this.patientArray = [];
        this.newPatientArray = [];
        this.radioFull = true;
        this.activatedtab = 1;
        this.activatetab(1);
        this.rpt_content = [{ 'col1': '1', 'col2': 'OPD Report', 'col3': ':', 'col4': '1' }];
        if (this.doctorData.clinic_services.Clinic_Pharmacy == true) {
            this.rpt_content.push({ 'col1': '2', 'col2': 'Pharmacy Report', 'col3': ':', 'col4': '2' });
        }
        if (this.doctorData.clinic_services.Clinic_Diagnostics == true) {
            this.rpt_content.push({ 'col1': '2', 'col2': 'Diagnostics Report', 'col3': ':', 'col4': '2' });
        }
        if (this.doctorData.clinic_services.Clinic_IPD == true) {
            this.rpt_content.push({ 'col1': '2', 'col2': 'IPD Report', 'col3': ':', 'col4': '2' });
        }
        this.rpt_content.push({ 'col1': 'SR NO', 'col2': 'Clinic Summary Report', 'col3': ':', 'col4': 'Page' });
        this.rpt_content.push({ 'col1': 'SR NO', 'col2': 'Annexure-1', 'col3': ':', 'col4': 'Page' });
        this.rpt_content.push({ 'col1': 'SR NO', 'col2': 'Annexure-2', 'col3': ':', 'col4': 'Page' });
        this.rpt_content.push({ 'col1': 'SR NO', 'col2': 'Annexure-3', 'col3': ':', 'col4': 'Page' });
    };
    DashboardClinicReportComponent.prototype.activatetab = function (i) {
        this.activatedtab = i;
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
            this.fromDate1 = object.start_date;
        }
        else if (i == 2) {
            object.start_date = new Date(date.setDate(date.getDate() - 13));
            this.fromDate1 = object.start_date;
        }
        else if (i == 3) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 1));
            this.fromDate1 = object.start_date;
        }
        else if (i == 4) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 3));
            this.fromDate1 = object.start_date;
        }
        else if (i == 5) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 6));
            this.fromDate1 = object.start_date;
        }
        else if (i == 6) {
            object.start_date = new Date(date.setFullYear(date.getFullYear() - 1));
            this.fromDate1 = object.start_date;
        }
        else if (i == 7) {
            object.start_date = new Date();
            object.maximum = true;
        }
        this.fromDate = new Date(object.start_date);
        this.toDate = new Date(object.end_date);
        console.log(object);
        this.OPDAnalyticsClinicSummary(object);
        this.PharmacyAnalytics(object);
        this.PurchasesForClinicReport(object);
        this.StockOnTodayForClinicReport(object);
        this.DiagnosticsAnalytics(object);
        this.IpdAnalytics(object);
        this.AllClinicSummary(object);
    };
    DashboardClinicReportComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    DashboardClinicReportComponent.prototype.getData = function (data) {
        if (isNaN(data)) {
            return 0;
        }
        else if (data % 1 != 0) {
            return data.toFixed(2);
        }
        else {
            return data;
        }
    };
    DashboardClinicReportComponent.prototype.getDoctorName = function (id) {
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if (this.dataDoctors[i]._id == id) {
                var name = this.dataDoctors[i].first_name.split(' ');
                return (name[0]);
            }
        }
    };
    DashboardClinicReportComponent.prototype.go = function () {
        //this.activatedtab = 0
        var object;
        object = {};
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id;
        object.start_date = this.fromDate1;
        object.end_date = this.toDate1;
        console.log(object);
        this.OPDAnalyticsClinicSummary(object);
        this.PharmacyAnalytics(object);
        this.PurchasesForClinicReport(object);
        this.StockOnTodayForClinicReport(object);
        this.DiagnosticsAnalytics(object);
        this.IpdAnalytics(object);
        this.AllClinicSummary(object);
    };
    DashboardClinicReportComponent.prototype.OPDAnalyticsClinicSummary = function (object) {
        var _this = this;
        this.loading = true;
        this.doctorCollectionArray = [];
        this.totalCollection = 0;
        this.dateDiff = 0;
        this.dataDoctors = [];
        this.avgDailyCollection = 0;
        this.avgPatientCollection = 0;
        this.totalPrescriptions = 0;
        this.avgTotalPrescriptions = 0;
        this.totalAvgDailyPatients = 0;
        this.totalFreqPatients = 0;
        this.totalMalePatients = 0;
        this.totalFemalePatients = 0;
        this.totalAvgAgePatients = 0;
        this.totalWalkinPatients = 0;
        this.totalAppointmentPatients = 0;
        this.totalEmergencyPatients = 0;
        this.totalCtuUsed = 0;
        this.totalCtuUtilisedPerc = 0;
        this.totalDispensedPatients = 0;
        this.patientArray = [];
        this.newPatientArray = [];
        this.adminClinicDoctor = [];
        this.userService.OPDAnalyticsClinicSummary(object).subscribe(function (data) {
            console.log(data);
            if (data.response) {
                _this.dataDoctors = data.dataDoctors;
                var diff = Math.abs(_this.toDate.getTime() - _this.fromDate.getTime());
                _this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
                _this.totalPrescriptions = data.dataDispensed.length + data.dataRegistrations.length;
                for (var i = 0; i < _this.dataDoctors.length; ++i) {
                    if (_this.dataDoctors[i].type_of_doctor === 'admin_doctor') {
                        _this.adminClinicDoctor.push(_this.dataDoctors[i]);
                        break;
                    }
                }
                console.log(_this.adminClinicDoctor);
                for (var i = 0; i < data.dataRegistrations.length; i++) {
                    if (data.dataRegistrations[i].fee) {
                        _this.totalCollection += parseInt(data.dataRegistrations[i].fee);
                    }
                    var boolean = false;
                    for (var j = 0; j < _this.doctorCollectionArray.length; j++) {
                        _this.doctorCollectionArray[j].totalSec = 0;
                        _this.doctorCollectionArray[j].dispensed = 0;
                        if (data.dataRegistrations[i].doctor_id == _this.doctorCollectionArray[j].id) {
                            if (data.dataRegistrations[i].fee) {
                                _this.doctorCollectionArray[j].sales += parseInt(data.dataRegistrations[i].fee);
                            }
                            _this.doctorCollectionArray[j].prescriptions++;
                            var boolean1 = false;
                            for (var k = 0; k < _this.patientArray.length; k++) {
                                if (_this.patientArray[k].name == data.dataRegistrations[i].pateintName &&
                                    _this.patientArray[k].phone == data.dataRegistrations[i].pateintPhone) {
                                    _this.patientArray[k].lastVisitCount++;
                                    boolean1 = true;
                                    break;
                                }
                            }
                            if (boolean1 == false) {
                                var count = 0;
                                if (data.dataRegistrations[i].lastVisit.status) {
                                    _this.newPatientArray.push(1);
                                    count = 1;
                                }
                                _this.patientArray.push({
                                    name: data.dataRegistrations[i].pateintName,
                                    phone: data.dataRegistrations[i].pateintPhone,
                                    doctor_id: data.dataRegistrations[i].doctor_id,
                                    lastVisit: data.dataRegistrations[i].lastVisit.status,
                                    lastVisitCount: count,
                                    gender: data.dataRegistrations[i].gender,
                                    age: data.dataRegistrations[i].age,
                                    type: data.dataRegistrations[i].type
                                });
                            }
                            boolean = true;
                        }
                    }
                    if (boolean == false) {
                        var count = 0;
                        if (data.dataRegistrations[i].lastVisit.status) {
                            _this.newPatientArray.push(1);
                            count = 1;
                        }
                        var a = 0;
                        if (data.dataRegistrations[i].fee) {
                            a = parseInt(data.dataRegistrations[i].fee);
                        }
                        _this.doctorCollectionArray.push({
                            id: data.dataRegistrations[i].doctor_id,
                            sales: a,
                            prescriptions: 1,
                            dispensed: 0,
                            totalSec: 0
                        });
                        _this.patientArray.push({
                            name: data.dataRegistrations[i].pateintName,
                            phone: data.dataRegistrations[i].pateintPhone,
                            doctor_id: data.dataRegistrations[i].doctor_id,
                            lastVisit: data.dataRegistrations[i].lastVisit.status,
                            lastVisitCount: count,
                            gender: data.dataRegistrations[i].gender,
                            age: data.dataRegistrations[i].age,
                            type: data.dataRegistrations[i].type
                        });
                    }
                }
                for (var i = 0; i < data.dataDispensed.length; i++) {
                    _this.totalDispensedPatients++;
                    if (data.dataDispensed[i].registration.fee) {
                        _this.totalCollection += parseInt(data.dataDispensed[i].registration.fee);
                    }
                    var boolean = false;
                    var sale = 0;
                    for (var j = 0; j < _this.doctorCollectionArray.length; j++) {
                        if (data.dataDispensed[i].doctor_id == _this.doctorCollectionArray[j].id) {
                            if (data.dataDispensed[i].registration.fee) {
                                _this.doctorCollectionArray[j].sales += parseInt(data.dataDispensed[i].registration.fee);
                            }
                            _this.doctorCollectionArray[j].prescriptions++;
                            _this.doctorCollectionArray[j].dispensed++;
                            _this.doctorCollectionArray[j].totalSec += (data.dataDispensed[i].precription.minutes * 60) + data.dataDispensed[i].precription.seconds;
                            var boolean1 = false;
                            for (var k = 0; k < _this.patientArray.length; k++) {
                                if (_this.patientArray[k].name == data.dataDispensed[i].registration.pateintName &&
                                    _this.patientArray[k].phone == data.dataDispensed[i].registration.pateintPhone) {
                                    _this.patientArray[k].lastVisitCount++;
                                    boolean1 = true;
                                    break;
                                }
                            }
                            if (boolean1 == false) {
                                var count = 0;
                                if (data.dataDispensed[i].registration.lastVisit.status) {
                                    _this.newPatientArray.push(1);
                                    count = 1;
                                }
                                _this.patientArray.push({
                                    name: data.dataDispensed[i].registration.pateintName,
                                    phone: data.dataDispensed[i].registration.pateintPhone,
                                    doctor_id: data.dataDispensed[i].doctor_id,
                                    lastVisit: data.dataDispensed[i].registration.lastVisit.status,
                                    lastVisitCount: count,
                                    gender: data.dataDispensed[i].registration.gender,
                                    age: data.dataDispensed[i].registration.age,
                                    type: data.dataDispensed[i].registration.type
                                });
                            }
                            boolean = true;
                        }
                    }
                    if (boolean == false) {
                        var a = 0;
                        if (data.dataDispensed[i].registration.fee) {
                            a = parseInt(data.dataDispensed[i].registration.fee);
                        }
                        _this.doctorCollectionArray.push({
                            id: data.dataDispensed[i].doctor_id,
                            sales: a,
                            prescriptions: 1,
                            dispensed: 1,
                            totalSec: (data.dataDispensed[i].precription.minutes * 60) + data.dataDispensed[i].precription.seconds
                        });
                        var count = 0;
                        if (data.dataDispensed[i].registration.lastVisit.status) {
                            _this.newPatientArray.push(1);
                            count = 1;
                        }
                        _this.patientArray.push({
                            name: data.dataDispensed[i].registration.pateintName,
                            phone: data.dataDispensed[i].registration.pateintPhone,
                            doctor_id: data.dataDispensed[i].doctor_id,
                            lastVisit: data.dataDispensed[i].registration.lastVisit.status,
                            lastVisitCount: count,
                            gender: data.dataDispensed[i].registration.gender,
                            age: data.dataDispensed[i].registration.age,
                            type: data.dataDispensed[i].registration.type
                        });
                    }
                }
                for (var i = 0; i < _this.doctorCollectionArray.length; i++) {
                    _this.doctorCollectionArray[i].percentage = parseFloat(_this.getData((_this.doctorCollectionArray[i].sales * 100) / _this.totalCollection));
                    _this.doctorCollectionArray[i].avgDailyColl = parseFloat(_this.getData((_this.doctorCollectionArray[i].sales) / _this.dateDiff));
                    _this.doctorCollectionArray[i].avgColl = parseFloat(_this.getData((_this.doctorCollectionArray[i].sales) / (data.dataDispensed.length + data.dataRegistrations.length)));
                    _this.doctorCollectionArray[i].avgDailyPrescription = Math.ceil(_this.getData((_this.doctorCollectionArray[i].prescriptions) / _this.dateDiff));
                    _this.doctorCollectionArray[i].totalPatients = 0;
                    _this.doctorCollectionArray[i].newPatients = 0;
                    _this.doctorCollectionArray[i].frequentPatients = 0;
                    _this.doctorCollectionArray[i].male = 0;
                    _this.doctorCollectionArray[i].female = 0;
                    _this.doctorCollectionArray[i].totalAge = 0;
                    _this.doctorCollectionArray[i].appointment = 0;
                    _this.doctorCollectionArray[i].walkin = 0;
                    _this.doctorCollectionArray[i].emergency = 0;
                    _this.doctorCollectionArray[i].avgCtu = _this.calculateCtu(object, _this.doctorCollectionArray[i].totalSec, _this.doctorCollectionArray[i].id);
                    _this.totalCtuUsed += _this.doctorCollectionArray[i].totalSec;
                    var min = parseInt(_this.getData(_this.getData(_this.doctorCollectionArray[i].totalSec / _this.doctorCollectionArray[i].dispensed) / 60));
                    var sec = parseInt(_this.getData(_this.getData(_this.doctorCollectionArray[i].totalSec / _this.doctorCollectionArray[i].dispensed) % 60));
                    _this.doctorCollectionArray[i].totalSec = min + " min " + sec + " sec";
                    for (var j = 0; j < _this.patientArray.length; j++) {
                        if (_this.patientArray[j].doctor_id == _this.doctorCollectionArray[i].id) {
                            _this.doctorCollectionArray[i].totalPatients++;
                            _this.doctorCollectionArray[i].totalAge += _this.patientArray[j].age;
                            if (_this.patientArray[j].lastVisit) {
                                _this.doctorCollectionArray[i].newPatients++;
                            }
                            if (_this.patientArray[j].lastVisitCount >= 2) {
                                _this.doctorCollectionArray[i].frequentPatients++;
                            }
                            if (_this.patientArray[j].gender == "Male") {
                                _this.doctorCollectionArray[i].male++;
                            }
                            else if (_this.patientArray[j].gender == "Female") {
                                _this.doctorCollectionArray[i].female++;
                            }
                            if (_this.patientArray[j].type == "Walk-in") {
                                _this.doctorCollectionArray[i].walkin++;
                            }
                            else if (_this.patientArray[j].type == "Appointment") {
                                _this.doctorCollectionArray[i].appointment++;
                            }
                            else if (_this.patientArray[j].type == "Emergency") {
                                _this.doctorCollectionArray[i].emergency++;
                            }
                        }
                    }
                }
                for (var i = 0; i < _this.doctorCollectionArray.length; i++) {
                    _this.totalAvgAgePatients += _this.doctorCollectionArray[i].totalAge;
                    _this.doctorCollectionArray[i].avgDailyPatients = Math.ceil(_this.getData(_this.doctorCollectionArray[i].totalPatients) / _this.dateDiff);
                    _this.doctorCollectionArray[i].avgAge = Math.ceil(_this.getData(_this.doctorCollectionArray[i].totalAge) / _this.patientArray.length);
                    _this.totalAvgDailyPatients += _this.doctorCollectionArray[i].avgDailyPatients;
                    _this.totalFreqPatients += _this.doctorCollectionArray[i].frequentPatients;
                    _this.totalMalePatients += _this.doctorCollectionArray[i].male;
                    _this.totalFemalePatients += _this.doctorCollectionArray[i].female;
                    _this.totalWalkinPatients += _this.doctorCollectionArray[i].walkin;
                    _this.totalAppointmentPatients += _this.doctorCollectionArray[i].appointment;
                    _this.totalEmergencyPatients += _this.doctorCollectionArray[i].emergency;
                }
                _this.totalAvgAgePatients = Math.ceil(_this.getData(_this.totalAvgAgePatients) / _this.patientArray.length);
                _this.totalCtuUtilisedPerc = _this.calculateCtuAllDoctors(object, _this.totalCtuUsed);
                var min = parseInt(_this.getData(_this.getData(_this.totalCtuUsed / _this.totalDispensedPatients) / 60));
                var sec = parseInt(_this.getData(_this.getData(_this.totalCtuUsed / _this.totalDispensedPatients) % 60));
                _this.totalAvgTime = min + " min " + sec + " sec";
                if (_this.doctorCollectionArray.length < _this.dataDoctors.length) {
                    for (var i = 0; i < _this.dataDoctors.length; i++) {
                        var boolean = false;
                        for (var j = 0; j < _this.doctorCollectionArray.length; j++) {
                            if (_this.doctorCollectionArray[j].id.toString() == _this.dataDoctors[i]._id.toString()) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            _this.doctorCollectionArray.push({
                                id: _this.dataDoctors[i]._id,
                                avgColl: 0,
                                avgDailyColl: 0,
                                avgDailyPatients: 0,
                                avgAge: 0,
                                avgDailyPrescription: 0,
                                female: 0,
                                frequentPatients: 0,
                                male: 0,
                                newPatients: 0,
                                percentage: 0,
                                prescriptions: 0,
                                dispensed: 0,
                                sales: 0,
                                totalAge: 0,
                                totalPatients: 0,
                                walkin: 0,
                                appointment: 0,
                                emergency: 0,
                                totalSec: 0,
                                avgCtu: 0,
                            });
                        }
                    }
                }
                _this.avgDailyCollection = _this.totalCollection / _this.dateDiff;
                _this.avgPatientCollection = _this.totalCollection / (data.dataDispensed.length + data.dataRegistrations.length);
                _this.avgTotalPrescriptions = Math.ceil(_this.totalPrescriptions / _this.dateDiff);
            }
            console.log(_this.doctorCollectionArray);
            console.log(_this.patientArray);
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardClinicReportComponent.prototype.calculateCtu = function (object, totalSec, id) {
        for (var ii = 0; ii < this.dataDoctors.length; ii++) {
            if (this.dataDoctors[ii]._id == id) {
                ///////////// hours logic /////////////////////////////
                var daysOfYear = [];
                var localDateArray = [];
                var countMonday = 0;
                var countTuesday = 0;
                var countWednesday = 0;
                var countThursday = 0;
                var countFriday = 0;
                var countSaturday = 0;
                var countSunday = 0;
                for (var d = new Date(object.start_date); d <= new Date(object.end_date); d.setDate(d.getDate() + 1)) {
                    daysOfYear.push(new Date(d));
                }
                for (var i = 0; i < daysOfYear.length; i++) {
                    localDateArray.push(this.datePipe.transform(daysOfYear[i], 'EEEE'));
                }
                for (var i = 0; i < localDateArray.length; i++) {
                    if (localDateArray[i] == "Monday") {
                        countMonday++;
                    }
                    else if (localDateArray[i] == "Tuesday") {
                        countTuesday++;
                    }
                    else if (localDateArray[i] == "Wednesday") {
                        countWednesday++;
                    }
                    else if (localDateArray[i] == "Thursday") {
                        countThursday++;
                    }
                    else if (localDateArray[i] == "Friday") {
                        countFriday++;
                    }
                    else if (localDateArray[i] == "Saturday") {
                        countSaturday++;
                    }
                    else if (localDateArray[i] == "Sunday") {
                        countSunday++;
                    }
                }
                var total_diff = 0;
                var totalMin = 0;
                for (var j = 0; j < this.dataDoctors[ii].consultation_schedule.length; j++) {
                    var min_diff = 0;
                    var hour_diff = 0;
                    for (var k = 0; k < this.dataDoctors[ii].consultation_schedule[j].shifts.length; k++) {
                        min_diff += parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].toTime.minute) - parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].fromTime.minute);
                        hour_diff += parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].toTime.hour) - parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].fromTime.hour);
                        total_diff = min_diff + (hour_diff * 60);
                    }
                    if (this.dataDoctors[ii].consultation_schedule[j].Monday == true) {
                        totalMin += (countMonday * total_diff);
                    }
                    if (this.dataDoctors[ii].consultation_schedule[j].Tuesday == true) {
                        totalMin += (countTuesday * total_diff);
                    }
                    if (this.dataDoctors[ii].consultation_schedule[j].Wednesday == true) {
                        totalMin += (countWednesday * total_diff);
                    }
                    if (this.dataDoctors[ii].consultation_schedule[j].Thursday == true) {
                        totalMin += (countThursday * total_diff);
                    }
                    if (this.dataDoctors[ii].consultation_schedule[j].Friday == true) {
                        totalMin += (countFriday * total_diff);
                    }
                    if (this.dataDoctors[ii].consultation_schedule[j].Saturday == true) {
                        totalMin += (countSaturday * total_diff);
                    }
                    if (this.dataDoctors[ii].consultation_schedule[j].Sunday == true) {
                        totalMin += (countSunday * total_diff);
                    }
                }
                return parseFloat(this.getData((totalSec * 100) / (totalMin * 60)));
                ///////////////////////////////////////////////////////
            }
        }
    };
    DashboardClinicReportComponent.prototype.calculateCtuAllDoctors = function (object, totalSec) {
        var totalMin = 0;
        for (var ii = 0; ii < this.dataDoctors.length; ii++) {
            ///////////// hours logic /////////////////////////////
            var daysOfYear = [];
            var localDateArray = [];
            var countMonday = 0;
            var countTuesday = 0;
            var countWednesday = 0;
            var countThursday = 0;
            var countFriday = 0;
            var countSaturday = 0;
            var countSunday = 0;
            for (var d = new Date(object.start_date); d <= new Date(object.end_date); d.setDate(d.getDate() + 1)) {
                daysOfYear.push(new Date(d));
            }
            for (var i = 0; i < daysOfYear.length; i++) {
                localDateArray.push(this.datePipe.transform(daysOfYear[i], 'EEEE'));
            }
            for (var i = 0; i < localDateArray.length; i++) {
                if (localDateArray[i] == "Monday") {
                    countMonday++;
                }
                else if (localDateArray[i] == "Tuesday") {
                    countTuesday++;
                }
                else if (localDateArray[i] == "Wednesday") {
                    countWednesday++;
                }
                else if (localDateArray[i] == "Thursday") {
                    countThursday++;
                }
                else if (localDateArray[i] == "Friday") {
                    countFriday++;
                }
                else if (localDateArray[i] == "Saturday") {
                    countSaturday++;
                }
                else if (localDateArray[i] == "Sunday") {
                    countSunday++;
                }
            }
            var total_diff = 0;
            for (var j = 0; j < this.dataDoctors[ii].consultation_schedule.length; j++) {
                var min_diff = 0;
                var hour_diff = 0;
                for (var k = 0; k < this.dataDoctors[ii].consultation_schedule[j].shifts.length; k++) {
                    min_diff += parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].toTime.minute) - parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].fromTime.minute);
                    hour_diff += parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].toTime.hour) - parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].fromTime.hour);
                    total_diff = min_diff + (hour_diff * 60);
                }
                if (this.dataDoctors[ii].consultation_schedule[j].Monday == true) {
                    totalMin += (countMonday * total_diff);
                }
                if (this.dataDoctors[ii].consultation_schedule[j].Tuesday == true) {
                    totalMin += (countTuesday * total_diff);
                }
                if (this.dataDoctors[ii].consultation_schedule[j].Wednesday == true) {
                    totalMin += (countWednesday * total_diff);
                }
                if (this.dataDoctors[ii].consultation_schedule[j].Thursday == true) {
                    totalMin += (countThursday * total_diff);
                }
                if (this.dataDoctors[ii].consultation_schedule[j].Friday == true) {
                    totalMin += (countFriday * total_diff);
                }
                if (this.dataDoctors[ii].consultation_schedule[j].Saturday == true) {
                    totalMin += (countSaturday * total_diff);
                }
                if (this.dataDoctors[ii].consultation_schedule[j].Sunday == true) {
                    totalMin += (countSunday * total_diff);
                }
            }
            ///////////////////////////////////////////////////////
        }
        return parseFloat(this.getData((totalSec * 100) / (totalMin * 60)));
    };
    DashboardClinicReportComponent.prototype.getPdf = function () {
        $('#clinicReport').printThis({
            debug: false,
            importCSS: true,
            importStyle: true,
            printContainer: true,
            pageTitle: "Reports Doctm",
            removeInline: false,
            printDelay: 333,
            header: null,
            formValues: true
        });
    };
    DashboardClinicReportComponent.prototype.PharmacyAnalytics = function (object) {
        var _this = this;
        this.loading = true;
        this.totalPharmacySales = 0;
        this.totalPharmacyCost = 0;
        this.totalPharmacyOrders = 0;
        this.totalPharmacyProfit = 0;
        this.totalPharmacyPerPresSale = 0;
        this.overAllPharmacyProfit = 0;
        this.totalPharmacyDispensedPatients = 0;
        this.totalPharmacyPatients = 0;
        this.pharmacyPatientConversion = 0;
        this.patientDetails = [];
        this.userService.PharmacyAnalytics(object).subscribe(function (result) {
            console.log(result);
            if (result.response) {
                _this.pharmacyDoctors = result.data;
                for (var i = 0; i < _this.pharmacyDoctors.length; i++) {
                    _this.pharmacyDoctors[i].sales = 0;
                    _this.pharmacyDoctors[i].cost = 0;
                    _this.pharmacyDoctors[i].orders = 0;
                    _this.pharmacyDoctors[i].profit = 0;
                    for (var j = 0; j < _this.pharmacyDoctors[i].total_sales.length; j++) {
                        _this.totalPharmacyPatients++;
                        if (_this.pharmacyDoctors[i].total_sales[j].pharmacy) {
                            _this.totalPharmacyDispensedPatients++;
                            _this.pharmacyDoctors[i].orders++;
                            _this.totalPharmacyOrders++;
                            _this.pharmacyDoctors[i].sales += _this.pharmacyDoctors[i].total_sales[j].pharmacy_sales;
                            _this.pharmacyDoctors[i].cost += _this.pharmacyDoctors[i].total_sales[j].pharmacy_cost;
                        }
                    }
                    _this.totalPharmacySales += _this.pharmacyDoctors[i].sales;
                    _this.totalPharmacyCost += _this.pharmacyDoctors[i].cost;
                    _this.pharmacyDoctors[i].profit = _this.pharmacyDoctors[i].sales - _this.pharmacyDoctors[i].cost;
                    _this.totalPharmacyProfit += _this.pharmacyDoctors[i].profit;
                }
                for (var i = 0; i < _this.pharmacyDoctors.length; i++) {
                    _this.pharmacyDoctors[i].salesPerc = _this.getData((_this.pharmacyDoctors[i].sales / _this.totalPharmacySales) * 100);
                    _this.pharmacyDoctors[i].ordersPerc = _this.getData((_this.pharmacyDoctors[i].orders / _this.totalPharmacyOrders) * 100);
                    _this.pharmacyDoctors[i].profitPerc = _this.getData((_this.pharmacyDoctors[i].profit / _this.totalPharmacyProfit) * 100);
                    _this.pharmacyDoctors[i].perPresSale = _this.getData(_this.pharmacyDoctors[i].sales / _this.pharmacyDoctors[i].orders);
                }
                _this.totalPharmacyPerPresSale = _this.getData(_this.totalPharmacySales / _this.totalPharmacyOrders);
                _this.overAllPharmacyProfit = _this.getData(((_this.totalPharmacySales - _this.totalPharmacyCost) / _this.totalPharmacyCost) * 100);
                _this.pharmacyPatientConversion = _this.getData((_this.totalPharmacyDispensedPatients / _this.totalPharmacyPatients) * 100);
                if (_this.pharmacyDoctors.length < _this.dataDoctors.length) {
                    for (var i = 0; i < result.dataDoctors.length; i++) {
                        var boolean = false;
                        for (var j = 0; j < _this.pharmacyDoctors.length; j++) {
                            if (_this.pharmacyDoctors[j]._id == result.dataDoctors[i]._id) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            _this.pharmacyDoctors.push({
                                _id: result.dataDoctors[i]._id,
                                sales: 0,
                                salesPerc: 0,
                                orders: 0,
                                ordersPerc: 0,
                                profit: 0,
                                profitPerc: 0,
                                perPresSale: 0
                            });
                        }
                    }
                }
                //for annexure patient detail
                for (var i = 0; i < _this.pharmacyDoctors.length; i++) {
                    if (_this.pharmacyDoctors[i]._id == _this.doctorData._id) {
                        _this.patientDetails = _this.pharmacyDoctors[i].total_sales;
                        break;
                    }
                }
                console.log(_this.patientDetails);
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardClinicReportComponent.prototype.PurchasesForClinicReport = function (object) {
        var _this = this;
        this.loading = true;
        this.stockPurchases = 0;
        this.stockUniqueProducts = [];
        this.stockProductsAmount = 0;
        this.userService.PurchasesForClinicReport(object).subscribe(function (result) {
            console.log(result);
            if (result.response) {
                for (var i = 0; i < result.data.length; i++) {
                    _this.stockPurchases++;
                    for (var j = 0; j < result.data[i].stock.length; j++) {
                        _this.stockProductsAmount += result.data[i].stock[j].amount;
                        var boolean = false;
                        for (var k = 0; k < _this.stockUniqueProducts.length; k++) {
                            if (_this.stockUniqueProducts[k].product == result.data[i].stock[j].product
                                && result.data[i].stock[j].type == _this.stockUniqueProducts[k].type) {
                                boolean = true;
                            }
                        }
                        if (boolean == false) {
                            _this.stockUniqueProducts.push({
                                name: result.data[i].stock[j].product,
                                type: result.data[i].stock[j].type
                            });
                        }
                    }
                }
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardClinicReportComponent.prototype.StockOnTodayForClinicReport = function (object) {
        var _this = this;
        this.loading = true;
        this.stockArray = [];
        this.purchaseValueStock = 0;
        this.saleValueStock = 0;
        this.userService.StockOnTodayForClinicReport(object).subscribe(function (result) {
            console.log(result);
            if (result.response) {
                _this.stockArray = result.data;
                for (var i = 0; i < _this.stockArray.length; i++) {
                    _this.stockArray[i].stock = _this.stockArray[i].total_stock - _this.stockArray[i].sold_stock;
                    _this.stockArray[i].newPacking = Math.trunc(_this.stockArray[i].stock / (_this.stockArray[i].pack_units * _this.stockArray[i].pack_quantity));
                    _this.stockArray[i].newPackingReminder = _this.stockArray[i].stock % (_this.stockArray[i].pack_units * _this.stockArray[i].pack_quantity);
                    _this.stockArray[i].present_prate = 0;
                    if (_this.stockArray[i].total_stock > 0) {
                        _this.stockArray[i].present_prate = (_this.stockArray[i].amount / _this.stockArray[i].total_stock) * _this.stockArray[i].stock;
                    }
                    _this.stockArray[i].profit_percent = Math.ceil(((_this.stockArray[i].mrp - _this.stockArray[i].p_rate) / _this.stockArray[i].p_rate) * 100);
                    // this.stockArray[i].present_mrate = Math.ceil(this.stockArray[i].present_prate + ((this.stockArray[i].profit_percent)/100) * this.stockArray[i].present_prate)
                    _this.stockArray[i].present_mrate = Math.ceil((_this.stockArray[i].mrp * _this.stockArray[i].stock) / (_this.stockArray[i].pack_units * _this.stockArray[i].pack_quantity));
                    if (_this.stockArray[i].stock == 0) {
                        _this.stockArray[i].cost = 0;
                    }
                    else {
                        _this.stockArray[i].cost = (_this.stockArray[i].present_prate / _this.stockArray[i].stock) * (_this.stockArray[i].pack_units * _this.stockArray[i].pack_quantity);
                    }
                    _this.purchaseValueStock += Math.ceil(_this.stockArray[i].present_prate);
                    _this.saleValueStock += Math.ceil(_this.stockArray[i].present_mrate);
                }
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardClinicReportComponent.prototype.DiagnosticsAnalytics = function (object) {
        var _this = this;
        this.loading = true;
        this.diagnosticsDoctors = [];
        this.totalDiagnosticsOrders = 0;
        this.totalDiagnosticsPatients = 0;
        this.totalDiagnosticsSales = 0;
        this.totalDiagnosticsDispensedPatients = 0;
        this.totalDiagnosticsPerPresSale = 0;
        this.diagnosticsPatientConversion = 0;
        this.userService.DiagnosticsAnalytics(object).subscribe(function (result) {
            console.log(result);
            if (result.response) {
                _this.diagnosticsDoctors = result.data;
                var diagnostics;
                for (var i = 0; i < _this.diagnosticsDoctors.length; i++) {
                    _this.diagnosticsDoctors[i].sales = 0;
                    _this.diagnosticsDoctors[i].orders = 0;
                    for (var j = 0; j < _this.diagnosticsDoctors[i].total_sales.length; j++) {
                        _this.totalDiagnosticsPatients++;
                        if (_this.diagnosticsDoctors[i].total_sales[j].diagnostics) {
                            _this.totalDiagnosticsDispensedPatients++;
                            _this.diagnosticsDoctors[i].orders++;
                            _this.totalDiagnosticsOrders++;
                            _this.diagnosticsDoctors[i].sales += _this.diagnosticsDoctors[i].total_sales[j].investigation_cost;
                        }
                    }
                    _this.totalDiagnosticsSales += _this.diagnosticsDoctors[i].sales;
                }
                for (var i = 0; i < _this.diagnosticsDoctors.length; i++) {
                    _this.diagnosticsDoctors[i].salesPerc = _this.getData((_this.diagnosticsDoctors[i].sales / _this.totalDiagnosticsSales) * 100);
                    _this.diagnosticsDoctors[i].ordersPerc = _this.getData((_this.diagnosticsDoctors[i].orders / _this.totalDiagnosticsOrders) * 100);
                    _this.diagnosticsDoctors[i].perPresSale = _this.getData(_this.diagnosticsDoctors[i].sales / _this.diagnosticsDoctors[i].orders);
                }
                _this.totalDiagnosticsPerPresSale = _this.getData(_this.totalDiagnosticsSales / _this.totalDiagnosticsOrders);
                _this.diagnosticsPatientConversion = _this.getData((_this.totalDiagnosticsDispensedPatients / _this.totalDiagnosticsPatients) * 100);
                if (_this.diagnosticsDoctors.length < _this.dataDoctors.length) {
                    for (var i = 0; i < result.dataDoctors.length; i++) {
                        var boolean = false;
                        for (var j = 0; j < _this.diagnosticsDoctors.length; j++) {
                            if (_this.diagnosticsDoctors[j]._id == result.dataDoctors[i]._id) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            _this.diagnosticsDoctors.push({
                                _id: result.dataDoctors[i]._id,
                                sales: 0,
                                salesPerc: 0,
                                orders: 0,
                                ordersPerc: 0,
                                perPresSale: 0
                            });
                        }
                    }
                }
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardClinicReportComponent.prototype.IpdAnalytics = function (object) {
        var _this = this;
        this.loading = true;
        this.dataArray = [];
        this.totalIpdAdmissions = 0;
        this.totalIpdDischarged = 0;
        this.totalIpdBill = 0;
        this.totalIpdHours = 0;
        this.totalIpdAvgBill = 0;
        this.totalGeneralBeds = 0;
        this.totalSemiPrivateBeds = 0;
        this.totalPrivateBeds = 0;
        this.ipdOccupancy = 0;
        this.patientDetailsIpd = [];
        this.userService.IpdAnalytics(object).subscribe(function (result) {
            console.log(result);
            if (result.response) {
                _this.dataArray = result.dataDoctors;
                for (var i = 0; i < _this.dataArray.length; i++) {
                    if (_this.dataArray[i].type_of_doctor == "admin_doctor") {
                        _this.totalGeneralBeds = _this.dataArray[i].clinic_services.general_beds;
                        _this.totalPrivateBeds = _this.dataArray[i].clinic_services.private_beds;
                        _this.totalSemiPrivateBeds = _this.dataArray[i].clinic_services.semi_private_beds;
                    }
                    _this.dataArray[i].patientAdmitted = 0;
                    _this.dataArray[i].total_bill = 0;
                    _this.dataArray[i].admissionHours = 0;
                    _this.dataArray[i].patientsDishcarge = 0;
                    for (var j = 0; j < result.data.length; j++) {
                        if (result.data[j]._id == _this.dataArray[i]._id) {
                            for (var k = 0; k < result.data[j].dataIpd.length; k++) {
                                _this.dataArray[i].patientAdmitted++;
                                _this.totalIpdAdmissions++;
                                if (result.data[j].dataIpd[k].total_bill) {
                                    _this.dataArray[i].total_bill += result.data[j].dataIpd[k].total_bill;
                                    _this.totalIpdBill += _this.dataArray[i].total_bill;
                                }
                                if (result.data[j].dataIpd[k].duration_days || result.data[j].dataIpd[k].duration_hours) {
                                    _this.dataArray[i].admissionHours += (result.data[j].dataIpd[k].duration_days * 24) + (result.data[j].dataIpd[k].duration_hours);
                                    _this.totalIpdHours += _this.dataArray[i].admissionHours;
                                }
                            }
                        }
                    }
                    for (var j = 0; j < result.dataDischarge.length; j++) {
                        _this.totalIpdDischarged++;
                        if (result.dataDischarge[j]._id == _this.dataArray[i]._id) {
                            for (var k = 0; k < result.dataDischarge[j].dataIpd.length; k++) {
                                _this.dataArray[i].patientsDishcarge++;
                            }
                        }
                    }
                }
                for (var i = 0; i < _this.dataArray.length; i++) {
                    if (_this.dataArray[i].patientAdmitted == 0) {
                        _this.dataArray[i].avgRevenue = 0;
                    }
                    else {
                        _this.dataArray[i].avgRevenue = _this.getData(_this.dataArray[i].total_bill / _this.dataArray[i].patientAdmitted);
                    }
                }
                _this.totalIpdAvgBill = _this.getData(_this.totalIpdBill / _this.totalIpdAdmissions);
                _this.ipdOccupancy = _this.getData((_this.totalIpdAdmissions / (_this.totalGeneralBeds + _this.totalPrivateBeds + _this.totalSemiPrivateBeds)) * 100);
                //for annexure patient detail
                for (var i = 0; i < result.data.length; i++) {
                    if (result.data[i]._id == _this.doctorData._id) {
                        _this.patientDetailsIpd = result.data[i].dataIpd;
                        break;
                    }
                }
                console.log(_this.patientDetailsIpd);
                _this.loading = false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardClinicReportComponent.prototype.AllClinicSummary = function (object) {
        var _this = this;
        this.loading = true;
        this.dataSummaryArray = [];
        this.patientsArray = [];
        this.opdCollection = 0;
        this.pharmacySales = 0;
        this.pharmacyProfit = 0;
        this.diagnosticsCollection = 0;
        this.diagnosticsOrders = 0;
        this.ipdCollection = 0;
        this.ipdAdmission = 0;
        this.totalClinicCollection = 0;
        this.uniqueDiagnosticsArray = [];
        this.userService.AllClinicSummary(object).subscribe(function (data) {
            console.log(data);
            if (data.response) {
                _this.dataDoctors = data.dataDoctors;
                // for OPD
                for (var i = 0; i < data.dataRegistrations.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.dataSummaryArray.length; j++) {
                        if (data.dataRegistrations[i]._id == _this.dataSummaryArray[j].doctor_id) {
                            for (var k = 0; k < data.dataRegistrations[i].data.length; k++) {
                                if (data.dataRegistrations[i].data[k].fee) {
                                    _this.dataSummaryArray[j].collection += parseInt(data.dataRegistrations[i].data[k].fee);
                                }
                                _this.addPatient(data.dataRegistrations[i].data[k].pateintName, data.dataRegistrations[i].data[k].pateintPhone, data.dataRegistrations[i]._id);
                            }
                            boolean = true;
                        }
                    }
                    if (boolean == false) {
                        var collection;
                        collection = 0;
                        for (var k = 0; k < data.dataRegistrations[i].data.length; k++) {
                            _this.addPatient(data.dataRegistrations[i].data[k].pateintName, data.dataRegistrations[i].data[k].pateintPhone, data.dataRegistrations[i]._id);
                            if (data.dataRegistrations[i].data[k].fee) {
                                collection += parseInt(data.dataRegistrations[i].data[k].fee);
                            }
                        }
                        _this.dataSummaryArray.push({
                            doctor_id: data.dataRegistrations[i]._id,
                            collection: collection
                        });
                    }
                }
                for (var i = 0; i < data.dataDispensed.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.dataSummaryArray.length; j++) {
                        if (data.dataDispensed[i]._id == _this.dataSummaryArray[j].doctor_id) {
                            for (var k = 0; k < data.dataDispensed[i].data.length; k++) {
                                _this.addPatient(data.dataDispensed[i].data[k].registration.pateintName, data.dataDispensed[i].data[k].registration.pateintPhone, data.dataDispensed[i]._id);
                                if (data.dataDispensed[i].data[k].registration.fee) {
                                    _this.dataSummaryArray[j].collection += parseInt(data.dataDispensed[i].data[k].registration.fee);
                                }
                            }
                            boolean = true;
                        }
                    }
                    if (boolean == false) {
                        var collection;
                        collection = 0;
                        for (var k = 0; k < data.dataDispensed[i].data.length; k++) {
                            _this.addPatient(data.dataDispensed[i].data[k].registration.pateintName, data.dataDispensed[i].data[k].registration.pateintPhone, data.dataDispensed[i]._id);
                            if (data.dataDispensed[i].data[k].registration.fee) {
                                collection += parseInt(data.dataDispensed[i].data[k].registration.fee);
                            }
                        }
                        _this.dataSummaryArray.push({
                            doctor_id: data.dataDispensed[i]._id,
                            collection: collection
                        });
                    }
                }
                //for pharmacy
                for (var i = 0; i < data.dataSalesEntryPharmacy.length; i++) {
                    data.dataSalesEntryPharmacy[i].doctor_id = _this.getDoctorIdPharmacy(data.dataSalesEntryPharmacy[i]._id);
                }
                for (var i = 0; i < data.dataSalesEntryPharmacy.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.dataSummaryArray.length; j++) {
                        if (data.dataSalesEntryPharmacy[i].doctor_id == _this.dataSummaryArray[j].doctor_id) {
                            _this.dataSummaryArray[j].sales = 0;
                            _this.dataSummaryArray[j].cost = 0;
                            _this.dataSummaryArray[j].profit = 0;
                            for (var k = 0; k < data.dataSalesEntryPharmacy[i].data.length; k++) {
                                _this.dataSummaryArray[j].sales += data.dataSalesEntryPharmacy[i].data[k].total_amount;
                                _this.dataSummaryArray[j].cost += data.dataSalesEntryPharmacy[i].data[k].cost_amount;
                                _this.dataSummaryArray[j].profit = _this.getData(_this.dataSummaryArray[j].sales - _this.dataSummaryArray[j].cost);
                            }
                            boolean = true;
                        }
                    }
                    if (boolean == false) {
                        var sales;
                        sales = 0;
                        var cost;
                        cost = 0;
                        for (var k = 0; k < data.dataSalesEntryPharmacy[i].data.length; k++) {
                            sales += data.dataSalesEntryPharmacy[i].data[k].total_amount;
                            cost += data.dataSalesEntryPharmacy[i].data[k].cost_amount;
                        }
                        var profit = _this.getData(sales - cost);
                        _this.dataSummaryArray.push({
                            doctor_id: data.dataSalesEntryPharmacy[i].doctor_id,
                            sales: sales,
                            profit: profit
                        });
                    }
                }
                //for diagnostics
                var diagnosticsArray = [];
                for (var i = 0; i < data.dataSalesEntryDiagnostics.length; i++) {
                    data.dataSalesEntryDiagnostics[i].doctor_id = _this.getDoctorIdDiagnostics(data.dataSalesEntryDiagnostics[i]._id);
                    for (var j = 0; j < data.dataSalesEntryDiagnostics[i].data.length; j++) {
                        for (var k = 0; k < data.dataSalesEntryDiagnostics[i].data[j].tests[0].opt.length; k++) {
                            diagnosticsArray.push({
                                opt: data.dataSalesEntryDiagnostics[i].data[j].tests[0].opt[k],
                                product: data.dataSalesEntryDiagnostics[i].data[j].tests[0].product[k]
                            });
                        }
                    }
                }
                for (var i = 0; i < data.dataSalesEntryDiagnostics.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.dataSummaryArray.length; j++) {
                        if (data.dataSalesEntryDiagnostics[i].doctor_id == _this.dataSummaryArray[j].doctor_id) {
                            _this.dataSummaryArray[j].collectionDiagnostics = 0;
                            _this.dataSummaryArray[j].orders = 0;
                            for (var k = 0; k < data.dataSalesEntryDiagnostics[i].data.length; k++) {
                                _this.dataSummaryArray[j].orders++;
                                _this.dataSummaryArray[j].collectionDiagnostics += data.dataSalesEntryDiagnostics[i].data[k].total_amount;
                            }
                            boolean = true;
                        }
                    }
                    if (boolean == false) {
                        var sales;
                        sales = 0;
                        var orders;
                        orders = 0;
                        for (var k = 0; k < data.dataSalesEntryDiagnostics[i].data.length; k++) {
                            sales += data.dataSalesEntryDiagnostics[i].data[k].total_amount;
                            orders++;
                        }
                        _this.dataSummaryArray.push({
                            doctor_id: data.dataSalesEntryDiagnostics[i].doctor_id,
                            collectionDiagnostics: sales,
                            orders: orders
                        });
                    }
                }
                for (var i = 0; i < diagnosticsArray.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.uniqueDiagnosticsArray.length; j++) {
                        if (diagnosticsArray[i].opt == _this.uniqueDiagnosticsArray[j].opt && diagnosticsArray[i].product == _this.uniqueDiagnosticsArray[j].product) {
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        _this.uniqueDiagnosticsArray.push({
                            opt: diagnosticsArray[i].opt,
                            product: diagnosticsArray[i].product
                        });
                    }
                }
                for (var i = 0; i < _this.uniqueDiagnosticsArray.length; i++) {
                    _this.uniqueDiagnosticsArray[i].count = 0;
                    for (var j = 0; j < diagnosticsArray.length; j++) {
                        if (diagnosticsArray[j].opt == _this.uniqueDiagnosticsArray[i].opt && diagnosticsArray[j].product == _this.uniqueDiagnosticsArray[i].product) {
                            _this.uniqueDiagnosticsArray[i].count++;
                        }
                    }
                }
                console.log(_this.uniqueDiagnosticsArray);
                console.log(_this.dataSummaryArray);
                // for IPD
                for (var i = 0; i < data.dataIpd.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.dataSummaryArray.length; j++) {
                        if (data.dataIpd[i]._id == _this.dataSummaryArray[j].doctor_id) {
                            _this.dataSummaryArray[j].collectionIpd = 0;
                            _this.dataSummaryArray[j].ordersIpd = 0;
                            for (var k = 0; k < data.dataIpd[i].dataIpd.length; k++) {
                                _this.dataSummaryArray[j].ordersIpd++;
                                if (data.dataIpd[i].dataIpd[k].total_bill) {
                                    _this.dataSummaryArray[j].collectionIpd += data.dataIpd[i].dataIpd[k].total_bill;
                                }
                            }
                            boolean = true;
                        }
                    }
                    if (boolean == false) {
                        var sales;
                        sales = 0;
                        var orders;
                        orders = 0;
                        for (var k = 0; k < data.dataIpd[i].dataIpd.length; k++) {
                            if (data.dataIpd[i].dataIpd[k].total_bill) {
                                sales += data.dataIpd[i].dataIpd[k].total_bill;
                            }
                            orders++;
                        }
                        _this.dataSummaryArray.push({
                            doctor_id: data.dataIpd[i]._id,
                            collectionIpd: sales,
                            ordersIpd: orders
                        });
                    }
                }
                for (var i = 0; i < _this.dataSummaryArray.length; i++) {
                    if (!_this.dataSummaryArray[i].collection) {
                        _this.dataSummaryArray[i].collection = 0;
                    }
                    if (!_this.dataSummaryArray[i].collectionDiagnostics) {
                        _this.dataSummaryArray[i].collectionDiagnostics = 0;
                    }
                    if (!_this.dataSummaryArray[i].collectionIpd) {
                        _this.dataSummaryArray[i].collectionIpd = 0;
                    }
                    if (!_this.dataSummaryArray[i].cost) {
                        _this.dataSummaryArray[i].cost = 0;
                    }
                    if (!_this.dataSummaryArray[i].orders) {
                        _this.dataSummaryArray[i].orders = 0;
                    }
                    if (!_this.dataSummaryArray[i].ordersIpd) {
                        _this.dataSummaryArray[i].ordersIpd = 0;
                    }
                    if (!_this.dataSummaryArray[i].profit) {
                        _this.dataSummaryArray[i].profit = 0;
                    }
                    if (!_this.dataSummaryArray[i].sales) {
                        _this.dataSummaryArray[i].sales = 0;
                    }
                    _this.dataSummaryArray[i].patients = 0;
                    for (var j = 0; j < _this.patientsArray.length; j++) {
                        if (_this.patientsArray[j].doctor == _this.dataSummaryArray[i].doctor_id) {
                            _this.dataSummaryArray[i].patients++;
                        }
                    }
                    _this.dataSummaryArray[i].totalCollection = _this.dataSummaryArray[i].collection + _this.dataSummaryArray[i].sales + _this.dataSummaryArray[i].collectionIpd;
                    _this.totalClinicCollection += _this.dataSummaryArray[i].totalCollection;
                    _this.opdCollection += _this.dataSummaryArray[i].collection;
                    _this.pharmacySales += _this.dataSummaryArray[i].sales;
                    _this.pharmacyProfit += parseFloat(_this.dataSummaryArray[i].profit);
                    _this.diagnosticsCollection += _this.dataSummaryArray[i].collectionDiagnostics;
                    _this.diagnosticsOrders += _this.dataSummaryArray[i].orders;
                    _this.ipdCollection += _this.dataSummaryArray[i].collectionIpd;
                    _this.ipdAdmission += _this.dataSummaryArray[i].ordersIpd;
                }
                //calculating percetages
                for (var i = 0; i < _this.dataSummaryArray.length; i++) {
                    _this.dataSummaryArray[i].collectionPerc = _this.getData((_this.dataSummaryArray[i].collection * 100) / _this.opdCollection);
                    _this.dataSummaryArray[i].patientsPerc = _this.getData((_this.dataSummaryArray[i].patients * 100) / _this.patientsArray.length);
                    _this.dataSummaryArray[i].collectionDiagnosticsPerc = _this.getData((_this.dataSummaryArray[i].collectionDiagnostics * 100) / _this.diagnosticsCollection);
                    _this.dataSummaryArray[i].collectionIpdPerc = _this.getData((_this.dataSummaryArray[i].collectionIpd * 100) / _this.ipdCollection);
                    _this.dataSummaryArray[i].ordersPerc = _this.getData((_this.dataSummaryArray[i].orders * 100) / _this.diagnosticsOrders);
                    _this.dataSummaryArray[i].ordersIpdPerc = _this.getData((_this.dataSummaryArray[i].ordersIpd * 100) / _this.ipdAdmission);
                    _this.dataSummaryArray[i].profitPerc = _this.getData((_this.dataSummaryArray[i].profit * 100) / _this.pharmacyProfit);
                    _this.dataSummaryArray[i].salesPerc = _this.getData((_this.dataSummaryArray[i].sales * 100) / _this.pharmacySales);
                    _this.dataSummaryArray[i].totalCollectionPerc = _this.getData((_this.dataSummaryArray[i].totalCollection * 100) / _this.totalClinicCollection);
                }
                if (_this.dataSummaryArray.length < _this.dataDoctors.length) {
                    for (var i = 0; i < _this.dataDoctors.length; i++) {
                        var boolean = false;
                        for (var j = 0; j < _this.dataSummaryArray.length; j++) {
                            if (_this.dataSummaryArray[j].doctor_id == _this.dataDoctors[i]._id) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            _this.dataSummaryArray.push({
                                collection: 0,
                                collectionDiagnostics: 0,
                                collectionDiagnosticsPerc: 0,
                                collectionIpd: 0,
                                collectionIpdPerc: 0,
                                collectionPerc: 0,
                                cost: 0,
                                doctor_id: _this.dataDoctors[i]._id,
                                orders: 0,
                                ordersIpd: 0,
                                ordersIpdPerc: 0,
                                ordersPerc: 0,
                                patients: 0,
                                patientsPerc: 0,
                                profit: 0,
                                profitPerc: 0,
                                sales: 0,
                                salesPerc: 0,
                                totalCollection: 0,
                                totalCollectionPerc: 0
                            });
                        }
                    }
                }
                console.log(_this.dataSummaryArray);
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardClinicReportComponent.prototype.addPatient = function (name, num, doctor) {
        for (var i = 0; i < this.patientsArray.length; i++) {
            if (name == this.patientsArray[i].name && num == this.patientsArray[i].num && doctor == this.patientsArray[i].doctor) {
                return;
            }
        }
        this.patientsArray.push({
            name: name,
            num: num,
            doctor: doctor
        });
        return;
    };
    DashboardClinicReportComponent.prototype.getDoctorIdPharmacy = function (id) {
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if (this.dataDoctors[i].smart_pharmacy_id == id) {
                return this.dataDoctors[i]._id;
            }
        }
    };
    DashboardClinicReportComponent.prototype.getDoctorIdDiagnostics = function (id) {
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if (this.dataDoctors[i].smart_diagnostics_id == id) {
                return this.dataDoctors[i]._id;
            }
        }
    };
    DashboardClinicReportComponent.prototype.changeRadio = function (id) {
        this.radioFull = false;
        if (id == 2) {
            this.radioFull = true;
        }
    };
    DashboardClinicReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-clinic-report',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-clinic-report/dashboard-clinic-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-clinic-report/dashboard-clinic-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], DashboardClinicReportComponent);
    return DashboardClinicReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-clinic-report/dashboard-clinic-report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardClinicReportModule", function() { return DashboardClinicReportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_clinic_report_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-clinic-report/dashboard-clinic-report-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_clinic_report_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-clinic-report/dashboard-clinic-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardClinicReportModule = /** @class */ (function () {
    function DashboardClinicReportModule() {
    }
    DashboardClinicReportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_clinic_report_routing_module__["a" /* DashboardClinicReportRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_clinic_report_component__["a" /* DashboardClinicReportComponent */]]
        })
    ], DashboardClinicReportModule);
    return DashboardClinicReportModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-clinic-report.module.chunk.js.map