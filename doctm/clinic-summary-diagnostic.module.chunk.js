webpackJsonp(["clinic-summary-diagnostic.module"],{

/***/ "../../../../../src/app/header-two-layout/clinic-summary-diagnostic/clinic-summary-diagnostic-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicSummaryDiagnosticRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clinic_summary_diagnostic_component__ = __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-diagnostic/clinic-summary-diagnostic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__clinic_summary_diagnostic_component__["a" /* ClinicSummaryDiagnosticComponent */],
    }
];
var ClinicSummaryDiagnosticRoutingModule = /** @class */ (function () {
    function ClinicSummaryDiagnosticRoutingModule() {
    }
    ClinicSummaryDiagnosticRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ClinicSummaryDiagnosticRoutingModule);
    return ClinicSummaryDiagnosticRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-diagnostic/clinic-summary-diagnostic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.cus-content-wrapper{\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n.hding > h3{\r\n    margin: 0px;\r\n    padding:15px 0px;\r\n    background-color: #d9e0dd; \r\n}\r\n.hding  h5.btm{\r\n    margin: 0px;\r\n    padding:15px 0px;\r\n    background-color: #d9e0dd; \r\n}\r\n.cstm-tbl{\r\n    width: 100%;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n}\r\n.clr-vlt{\r\n    color: #5c62af;\r\n}\r\n.tb-1{\r\n    margin-top:15px;\r\n}\r\n.tb-1 tr td{\r\n    padding:2px 8px;\r\n    vertical-align: middle; \r\n}\r\n.cstm-tbl tr{\r\n    height:40px;\r\n}\r\n.footer-cstm-an{\r\n    position: fixed;\r\n    float: left;\r\n    width: 100%;\r\n    bottom:0px;\r\n    background: #00b0f0;\r\n    color:#fff;\r\n    z-index: 99;\r\n    padding-top: 8px;\r\n}\r\n.mt-table h3{\r\n    margin-top: 0px;\r\n}\r\n.cstm-tr{\r\n    background-color:#92d050;\r\n    color:#fff;\r\n    text-align: center;\r\n}\r\n.cstm-tr-2{\r\n    background-color:#c5d8f1;\r\n}\r\n.cstm-tr-2 td{\r\n    border-right:1px solid #bbb; \r\n}\r\n.cstm-tr-2 td:last-child {\r\n border-right: none;\r\n}\r\n.cstm-tr-3{\r\n    border-bottom:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td{\r\n    border-right:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td:last-child {\r\n border-right: none;\r\n}\r\n.color-red {\r\n    color: #ff0000;\r\n    -webkit-transform: translateY(-8px);\r\n            transform: translateY(-8px);\r\n}\r\n.cstm-tr-4{\r\n    background-color: #f2dada;\r\n}\r\n.cstm-mg{\r\n    margin-top: 5px;\r\n}\r\n.btn-go{\r\n    background-color: transparent;\r\n    border: 1px solid #002160;\r\n    margin-bottom: 5px;\r\n    min-width: 62%;\r\n}\r\n.btn-go:hover{\r\n    -webkit-transition: 300ms;\r\n    transition: 300ms;\r\n    background: #98C74F;\r\n    border-color: #98C74F;\r\n    color: #fff;\r\n}\r\n.li-cstm a{\r\n    text-align: center!important;\r\n    background: #000!important;\r\n    color: #fff!important;\r\n    font-size: 16px!important;\r\n    font-weight: inherit!important;\r\n    padding: 6px!important;\r\n}\r\n.cus-sidebar{\r\n    height: inherit!important;\r\n}\r\n/*karam @ 2019*/\r\n.side-bar-cstm{\r\n    z-index: 99;\r\n}\r\n.res-tab-2{\r\n    max-height: 225px;\r\n}\r\n.cstm-ul-new li{\r\n    width:170px;\r\n}\r\n.cstm-ul-new li a{\r\n    background-color:transparent;\r\n    color:#000;\r\n    padding:10px;\r\n    cursor: pointer;\r\n    border-radius: 0px;\r\n    border-bottom: 2px solid transparent; \r\n    text-align: center;\r\n}\r\n.cstm-ul-new li.active a{\r\n    background-color: #e0e0e0;\r\n    color: #000;\r\n    border-bottom: 2px solid #00b0f0;\r\n}\r\n.tab-new{\r\n    min-height: 450px;\r\n    max-height: 450px;\r\n    padding: 0px 8px;\r\n    border-left: 1px solid #dcdcdc;\r\n    border-right: 1px solid #dcdcdc;\r\n    overflow-x: hidden;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n    font-weight: bold;\r\n}\r\n/*karam@30-jan-2019*/\r\n/*.tab-new-cstm tr td{\r\n    font-size: 10px;\r\n}*/\r\n.brder-cstm{\r\n    padding-bottom: 1px;\r\n    margin-bottom: 6px;\r\n    border-bottom: 1px solid #a7a7a7;\r\n    position: relative;\r\n}\r\n.brder-cstm::after{\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 6px;\r\n    width: 12px;\r\n    background-color: #ffffff;\r\n    top: 41px;\r\n    right: -3px;\r\n     \r\n}\r\n.cus-sidebar ul{\r\n    border:1px solid #a7a7a7;\r\n}\r\n.mg-0{\r\n    margin-top: 0px;\r\n}\r\n.mg-bt{\r\n    margin-bottom:2px; \r\n}\r\n.txt-thm{\r\n    color: rgb(0,32,96);\r\n}\r\n.txt-thm-1{\r\n    color: rgb(0,112,192);\r\n}\r\n.foot-2{\r\n    border-bottom:1px solid #a7a7a7;\r\n    word-spacing: 14px;\r\n}\r\n.hdr-2{\r\n    padding-bottom: 8px;\r\n    border-bottom:1px solid #a7a7a7;\r\n}\r\n.brdr-lft{\r\n    margin-left:-5px;\r\n    border-left:1px solid #a7a7a7; \r\n}\r\n.evn{\r\n    background-color:#eff3ef;\r\n}\r\n.odd{\r\n    background-color:#e3e3e3;\r\n}\r\n.new-ul-1 li a{\r\n    height: 55px;\r\n    line-height: 3;\r\n}\r\n.new-table-24 tr td{\r\n    border-right:1px solid #fff;\r\n}\r\n.new-table-24 tr:last-child{\r\n    border-right:none;\r\n}\r\nli.clz a{\r\n    line-height:1.5!important;\r\n}\r\ntr.tbl-blk-hd{\r\n    background:rgb(0,112,192);\r\n    color:#fff;\r\n}\r\ntr.tbl-blk-hd td{\r\n    border-right:1px solid #fff;\r\n}\r\ntr.tbl-blk-hd:last-child{\r\n    border-right: none;\r\n}\r\n.tbl-hd-2{\r\n    background-color: #000;\r\n    color: #fff;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n.new-table-24 tr td{\r\n    padding: 4.5px 15px!important;\r\n}\r\n/*.tbl-blk-hd{\r\n    height: 45px;\r\n}\r\n.tbl-blk-hd td{\r\n    padding: 12px!important;\r\n}*/\r\n/*kjdf=========================*/\r\n.cstm-row{\r\n    margin-top: 20px;\r\n}\r\n.cstm-row button{\r\n    margin-top:38px;\r\n}\r\n.cstm-hdr{\r\n    margin-top: 15px;\r\n}\r\n.tbl-head{\r\n    margin-bottom:2px;\r\n    margin-top:20px;\r\n}\r\n.tbl-head tr {\r\n    border-top:1px solid #fff!important;\r\n    border-left:1px solid #fff!important;\r\n    border-right:1px solid #fff!important;\r\n}\r\n.tbl-head tr th{\r\n    background-color:#A1D253!important;\r\n    border-color:#fff;\r\n    color: black;\r\n}\r\n.table-bordered > tbody > tr > td{\r\n    border: 1px solid #fff;\r\n}\r\n.tbl-cntrol{\r\n    min-height:300px;\r\n    max-height: 300px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n.tbl-cntrol .tbl-data{\r\n    min-width: 882px;\r\n}\r\n.btn-wrap{\r\n    margin-top: 20px;\r\n}\r\n.btn-grin{\r\n    background-color:rgb(161, 210, 83);\r\n}\r\n.btn-grin-2{\r\n    padding:20px 30px; \r\n}\r\n.btn-wrap button{\r\n    margin-right: 10px;\r\n}\r\n.btn-red-1{\r\n    background-color: #FF0000;\r\n}\r\n.btn-ornge{\r\n    background-color: #E36C09;\r\n}\r\n.table{\r\n    margin-bottom:5px;\r\n    font-size: 17px;\r\n}\r\n.cstm-th tr th{\r\n    background-color: #A1D253;\r\n    color: black;\r\n    border:1px solid #fff;\r\n}\r\n.cstm-caret {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 70.5px;\r\n    background-color: #01b0f0;\r\n    z-index: 9;\r\n    right: 20px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 12px dashed;\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n}\r\n.cstm-caret-big {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 22px;\r\n    background-color: #01b0f0;\r\n    z-index: 1;\r\n    right: 5px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 17px dashed;\r\n    border-right: 14px solid transparent;\r\n    border-left: 14px solid transparent;\r\n}\r\n.cstm-crt-wrap {\r\n    position: relative;\r\n}\r\n.regis-modal-body .select-opt .disabled {\r\n    color: #ddd;\r\n}\r\n.select-doctor{\r\n    background-color: #01b0f0;\r\n    margin-top: 55px;\r\n    color: #fff;\r\n    margin-bottom: 15px;\r\n}\r\n.new-thd th {\r\n    color: #fff;\r\n    background-color: #A1D253;\r\n    border: 1px solid #fff;\r\n    color: black;\r\n}\r\n.new-thd {\r\n    color: #fff;\r\n    background-color: #A1D253;\r\n    border: 1px solid #fff;\r\n    color: black;\r\n}\r\n.tbl-cntrol{\r\n    min-height:100px;\r\n    max-height: 380px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n.tbl-cntrol .tbl-data{\r\n    min-width: 880px;\r\n}\r\nth.selected{\r\n    background-color: #00b0f0!important;\r\n}\r\n.cstm-name{\r\n    background-color: #01B0F0;\r\n    color: white;\r\n}\r\n.cstm-blue{\r\n    background-color: #4978C6;\r\n    color: white;\r\n}\r\ntr td , tr th {\r\n    vertical-align: center;\r\n    vertical-align: middle;\r\n}\r\n.tfoot td{\r\n    padding:15px 0px; \r\n}\r\n.fix-footer{\r\n    position: fixed;\r\n    bottom:0;\r\n    margin-bottom: 10px;\r\n}\r\n.fontsmall{\r\n    font-size: 50%;\r\n    color: black;\r\n}\r\n/*#01B0F0*/\r\nh3.dt{\r\n    color:#416bb1;\r\n    text-align: center;\r\n}\r\nh3.dt > span{\r\n    color:#000;\r\n    text-align: center;\r\n}\r\n.cstm-ul-new-width li{\r\n    width:33%;\r\n}\r\n.new-thd th {\r\n    color: #000;\r\n    background-color:rgb(161,210,84);\r\n    border: 1px solid #fff;\r\n}\r\n.new-tbdy td{\r\n    background-color: rgb(1,176,241) !important;\r\n    border: 1px solid #fff !important;\r\n}\r\n.new-thd {\r\n    color: #fff;\r\n    background-color: #A1D253;\r\n    border: 1px solid #fff;\r\n    color: black;\r\n}\r\n.tab-copy tr th{\r\n    background: #000;\r\n    color:#fff;\r\n}\r\n.tab-copy-tr tr{\r\n    color:#000!important;\r\n    background-color: #dae5f1;\r\n    border: 1px solid #fff !important;,\r\n    font-size: 14px;\r\n}\r\n.tab-copy-tr tr:hover{\r\n   background-color:#b8d9fd!important;\r\n}\r\n.tab-copy-tr td{\r\n   font-size: 14px;\r\n}\r\n.cstm-footer{\r\n    position: fixed;\r\n    bottom: 0;\r\n    left:0;\r\n    z-index: 99;\r\n    -webkit-transform: scale(0.8,0.8);\r\n            transform: scale(0.8,0.8);\r\n}\r\n.cstm-footer .btn-custom {\r\n    font-size: 14px;\r\n}\r\ndiv button div{\r\n    font-size: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-diagnostic/clinic-summary-diagnostic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"analytics-sec\">\n\t<div class=\"ipd-deatil-sec\">\n\t\t<div class=\"inner-tab\">\n\t\t\t<ul class=\"nav nav-tabs new-ul-1\" role=\"tablist\">\n\t\t\t\t<li role=\"presentation\"  class=\"clz\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-opd\"> <div>OPD</div><small> (All Doctors)</small> </a></li>\n\t\t\t\t<li role=\"presentation\" *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-pharmacy\">Pharmacy</a></li>\n\t\t\t\t<li role=\"presentation\" class=\"active\" *ngIf=\"doctorData.clinic_services.Clinic_Diagnostics==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-diagnostic\"> Diagnostics </a></li>\n\t\t\t\t<li role=\"presentation\" *ngIf=\"doctorData.clinic_services.Clinic_IPD==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-ipd\"> IPD </a></li>\n\t\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-all\">Summary</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"ipd-body\">\n\t\t\t<div class=\"cus-sidebar-wrapper side-bar-cstm\">\n\t\t\t\t<div class=\"cus-sidebar\">\n\t\t\t\t\t<ul> \n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>From</b></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-9\">\n\t\t\t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t\t\t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"fromDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>To</b></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-9\">\n\t\t\t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t\t\t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"toDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"text-right brder-cstm\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12 text-center\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-go\" (click)=\"go()\">Go</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"li-cstm\"> <a href=\"javascript:void(0);\"> For Past</a> </li>\n\t\t\t\t\t\t<!-- <li class=\"{{getClass(0)}}\" (click)=\"activatetab(0)\" class=\"active\"> <a href=\"javascript:void(0);\"> Current </a> </li> -->\n\t\t\t\t\t\t<li class=\"{{getClass(1)}}\" (click)=\"activatetab(1)\"> <a href=\"javascript:void(0);\"> 1 Week &nbsp;<small *ngIf=\"activatedtab==1\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(2)}}\" (click)=\"activatetab(2)\"> <a href=\"javascript:void(0);\"> 2 Weeks &nbsp;<small *ngIf=\"activatedtab==2\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small>  </a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month &nbsp;<small *ngIf=\"activatedtab==3\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month &nbsp;<small *ngIf=\"activatedtab==4\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month &nbsp;<small *ngIf=\"activatedtab==5\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year &nbsp;<small *ngIf=\"activatedtab==6\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> All </a> </li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"stock-tab\">\n\t\t\t\t<div class=\"col-lg-10 col-lg-offset-2\">\n\t\t\t\t\t<ul class=\"nav nav-tabs cstm-ul-new cstm-ul-new-width\">\n\t\t\t\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#home-cstm\">SALE BOOK</a></li>\n\t\t\t\t\t\t<li><a data-toggle=\"tab\" href=\"#menu1-cstm\">BREAK UP </a></li>\n\t\t\t\t\t\t<li><a data-toggle=\"tab\" href=\"#menu2-cstm\">TEST CATALOGUE </a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\t<div id=\"home-cstm\" class=\"tab-pane fade in active\">\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<div style=\"min-height: 10px; max-height:405px; overflow-y: scroll;\">\n\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\" >\n\t\t\t\t\t\t\t\t\t\t<thead class=\"new-thd tab-copy\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"date\" width=\"10%\" class=\"{{getTableHeaderClass(1)}} text-center\" (click)=\"setTableHeaderClass(1)\"><h4 style=\"width: 100%; text-align: center;\">Date</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"invoice\" width=\"12%\" class=\"{{getTableHeaderClass(2)}} text-center\" (click)=\"setTableHeaderClass(2)\"><h4 style=\"width: 100%; text-align: center;\">Receipt Number</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"patient\" width=\"10%\" class=\"{{getTableHeaderClass(7)}} text-center\" (click)=\"setTableHeaderClass(7)\"><h4 style=\"width: 100%; text-align: center;\">Patient Name</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"amount\" width=\"10%\" class=\"{{getTableHeaderClass(3)}} text-center\" (click)=\"setTableHeaderClass(3)\"><h4 style=\"width: 100%; text-align: center;\">Sales Amount</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody class=\"tab-copy-tr\">\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of salesBookArray;let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{item?.createdAt | date:'d MMM yy ,h:mm a'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"12%\" class=\"text-center\">{{item?.id}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.walkin_patient\">{{item?.patient_name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!item.walkin_patient\">{{item?.dispensed_patient_id?.registration?.pateintName}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{getData(item?.total_amount)}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\" *ngIf=\"sortedData.length<1\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"text-center\">No data found ...</h3>\n\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-12 cstm-footer text-center \" style=\"padding-left: 297px;\">\n\t\t\t\t\t\t\t\t<div class=\"btn-wrap text-center\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-ornge btn-lg\">\n\t\t\t\t\t\t\t\t\t\t<div> Total Orders</div>\n\t\t\t\t\t\t\t\t\t\t<div>{{salesBookArray?.length}}</div>\n\t\t\t\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-lg\">\n\t\t\t\t\t\t\t\t\t\t<div> Total Sale</div>\n\t\t\t\t\t\t\t\t\t\t<div>{{getData(totalAmountSalesBook)}}</div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"menu1-cstm\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t<table class=\"table table-bordered \">\n\t\t\t\t\t\t\t\t<thead class=\"new-thd\">\n\t\t\t\t\t\t\t\t\t<colgroup span=\"2\"></colgroup>\n\t\t\t\t\t\t\t\t\t<colgroup span=\"2\"></colgroup>\n\t\t\t\t\t\t\t\t\t<tr class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t<th width=\"14%\" rowspan=\"2\" class=\"new-thd\" style=\"text-align: center;\">Doctor Name</th>\n\t\t\t\t\t\t\t\t\t\t<th colspan=\"5\" scope=\"colgroup\" class=\"text-center\">Progress Parameters</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\"  width=\"10%\" scope=\"col\">Prescriptions</th>\n\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\"  width=\"10%\" scope=\"col\">Sale Orders</th>\n\t\t\t\t\t\t\t\t\t\t<th   class=\"text-center\" width=\"10%\" scope=\"col\">Sales Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\" width=\"10%\" scope=\"col\">Conversion (%)</th>\n\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\"  width=\"10%\" scope=\"col\">Sales/prescription (Rs)</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\t\n\t\t\t\t\t\t\t\t<tbody class=\"new-tbdy\">\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let op of dataArray\">\n\t\t\t\t\t\t\t\t\t\t<td width=\"14%\" class=\"text-left cstm-name\">Dr. {{getDoctorName(op?._id)}}</td>\n\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op?.total_sales.length}}\n\t\t\t\t\t\t\t\t\t\t\t<small class='fontsmall'>({{getData(checkIsNan(getPercentage(op?.total_sales.length,totalPrescriptions)))}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.true_sales.length}}\n\t\t\t\t\t\t\t\t\t\t\t\t<small class='fontsmall'>({{getData(checkIsNan(getPercentage(op?.true_sales?.length,totalSales)))}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.total_sales_amount}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small class='fontsmall'>({{getData(checkIsNan(getPercentage(op?.total_sales_amount,totalSalesDoctorPlusWalkin)))}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op?.conversion}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op?.sales_per_pres}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"14%\" class=\"text-left cstm-name\">Other Sales</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">N.A</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{otherSales.length}} \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class='fontsmall'>({{getData(checkIsNan(getPercentage(otherSales.length,totalSales)))}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{checkIsNan(totalSalesWalkin)}} <small class='fontsmall'>({{getData(checkIsNan(getPercentage(totalSalesWalkin,totalSalesDoctorPlusWalkin)))}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">N.A</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{getData(checkIsNan(totalSalesWalkin/otherSales.length))}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<tfoot class=\"tfoot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th width=\"14%\" class=\"text-left new-thd\">Diagnostics Aggregates</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">{{totalPrescriptions}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">{{totalSales}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{checkIsNan(totalSalesDoctorPlusWalkin)}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">{{checkIsNan(totalConversion)}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">{{checkIsNan(totalSalesPerPres)}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 fix-footer\" style=\"padding-left: 65px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row btn-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>Sales: {{getData(totalSalesDoctorPlusWalkin)}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 text-left\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-grin\" (click)=\"exportPdf()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div> PRINT </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div id=\"menu2-cstm\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"min-height: 10px; max-height:400px; overflow-y: scroll;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered\" matSort (matSortChange)=\"sortData1($event)\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead class=\"new-thd tab-copy\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"category\" width=\"10%\" class=\"{{getTableHeaderClass(8)}} text-center\" (click)=\"setTableHeaderClass(8)\"><h4 style=\"width: 100%; text-align: center;\">Category</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"testname\" width=\"12%\" class=\"{{getTableHeaderClass(9)}} text-center\" (click)=\"setTableHeaderClass(9)\"><h4 style=\"width: 100%; text-align: center;\">Test Name/Details</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"rate\" width=\"10%\" class=\"{{getTableHeaderClass(10)}} text-center\" (click)=\"setTableHeaderClass(10)\"><h4 style=\"width: 100%; text-align: center;\">Rate</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"discount\" width=\"10%\" class=\"{{getTableHeaderClass(11)}} text-center\" (click)=\"setTableHeaderClass(11)\"><h4 style=\"width: 100%; text-align: center;\">Discount</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th width=\"10%\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t                <h4 style=\"width: 100%; text-align: center;\">Action</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t            </th>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody class=\"tab-copy-tr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let ar of sortedData1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{ar?.category}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-left\">{{ar?.name}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{ar?.rate}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{ar?.discount}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t                  <button class=\"btn btn-success\" (click)=\"editTest(ar)\">Edit</button>&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t                  <button class=\"btn btn-danger\" (click)=\"DeleteTest(ar)\">Delete</button>\n\t\t\t\t\t\t\t\t\t\t\t\t              \t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 footer-cstm cstm-footer\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-wrap text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>Total Tests</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"sortedData1\">{{sortedData1?.length}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"edit-entry\" role=\"dialog\" *ngIf = \"diagnosticsData\">\n   <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n         <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"reset()\">&times;</button>\n            <h4 class=\"modal-title text-center\">Update Test Entry</h4>\n         </div>\n         <form [formGroup] = \"detailsForm\">\n            <div class=\"modal-body\">\n               <div class=\"row\">\n                  <div class=\"col-lg-12\">\n                     <div class=\"form-group\">\n                        <select  class=\"form-control\" class=\"form-control txtfield\" [(ngModel)]=\"editcategory\" required=\"\"  [formControl]=\"detailsForm.controls['category']\">\n                           <option selected=\"\" value=\"\" disabled=\"\">Category</option>\n                           <option value=\"{{option}}\" *ngFor=\"let option of diagnosticsData?.dataSmartDiagnostics?.diagnostics_services\">{{option}}</option>\n                        </select>\n                     </div>\n                     <p style=\"color: #FF0000\" *ngIf=\"!detailsForm?.controls['category'].valid  && ( detailsForm.controls['category'].touched)\">Invalid Category !!!</p>\n                  </div>\n                  <div class=\"col-lg-12\">\n                     <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Test Name\" [(ngModel)]=\"edittestname\" required=\"\" [formControl]=\"detailsForm.controls['testName']\" (keyup)=\"onTextChange(editcategory,$event.target.value)\" [matAutocomplete]=\"auto\">\n                        <mat-autocomplete #auto=\"matAutocomplete\" >\n                           <mat-option *ngFor=\"let option of testNameSuggestion\" [value]=\"option\" >\n                           {{option}}\n                           </mat-option>\n                        </mat-autocomplete>\n                     </div>\n                     <p style=\"color: #FF0000\" *ngIf=\"!detailsForm?.controls['testName'].valid  && ( detailsForm.controls['testName'].touched)\">Invalid Test Name !!!</p>\n                  </div>\n                  <div class=\"col-lg-12\">\n                     <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Rate\" pattern=\"[0-9]+\" [(ngModel)]=\"editrate\" required=\"\"  [formControl]=\"detailsForm.controls['rate']\">\n                     </div><p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['rate'].valid  && ( detailsForm.controls['rate'].touched)\">Invalid Rate !!!</p>\n                  </div>\n                  <div class=\"col-lg-12\">\n                     <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" maxlength=\"3\" pattern=\"[0-9]+\" placeholder=\"Discount(%)\" [(ngModel)]=\"editdiscount\" required=\"\"  [formControl]=\"detailsForm.controls['discount']\">\n                     </div>\n                     <p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['discount'].valid  && ( detailsForm.controls['discount'].touched)\">Invalid Discount !!!</p>\n                  </div>\n                  <div class=\"col-lg-12 text-center\">\n                     <button class=\"btn btn-custom btn-grin\" type=\"submit\" [disabled]=\"!detailsForm.valid\" (click)=\"UpdateTest()\">SUBMIT\n                     </button>\n                  </div>\n               </div>\n            </div>\n         </form>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-diagnostic/clinic-summary-diagnostic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicSummaryDiagnosticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirmation_popup_confirmation_dialog_confirmation_dialog_component__ = __webpack_require__("../../../../../src/app/confirmation-popup/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClinicSummaryDiagnosticComponent = /** @class */ (function () {
    function ClinicSummaryDiagnosticComponent(UserService, toastr, datePipe, dialog, formBuilder) {
        this.UserService = UserService;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
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
        this.salesBookArray = [];
        this.sortedData = [];
        this.otherSales = [];
    }
    ClinicSummaryDiagnosticComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        this.activatedtab = 0;
        this.detailsForm = this.formBuilder.group({
            'category': [null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* Validators */].required,])],
            'discount': [null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* Validators */].minLength(0), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* Validators */].maxLength(3), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* Validators */].max(100)])],
            'rate': [null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*')])],
            'testName': [null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
        });
        this.GetSmartDiagnosticsDataAfterLogin();
    };
    ClinicSummaryDiagnosticComponent.prototype.GetSmartDiagnosticsDataAfterLogin = function () {
        var _this = this;
        var object = {
            smart_diagnostics_id: this.doctorData.smart_diagnostics_id
        };
        this.loading = true;
        this.UserService.GetSmartDiagnosticsDataAfterLogin(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                var dataToStore = {
                    dataSmartDiagnostics: data.dataSmartDiagnostics,
                    doctorsRegisteredForSmartClinic: data.doctorsRegisteredForSmartClinic,
                    doctorsOfSameClinic: data.doctorsOfSameClinic
                };
                _this.diagnosticsData = dataToStore;
            }
            _this.activatetab(1);
            _this.TestCatalouge();
            _this.getDocData();
        }, function (err) {
            console.log(err);
        });
    };
    ClinicSummaryDiagnosticComponent.prototype.activatetab = function (i) {
        this.activatedtab = i;
        var object;
        object = {};
        var date = new Date();
        //object.smart_ipd_id = this.doctorData.smart_ipd_id
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
        this.SalesBook();
    };
    ClinicSummaryDiagnosticComponent.prototype.SalesBook = function () {
        var _this = this;
        if (new Date(this.toDate).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        var object = {
            id: this.diagnosticsData.dataSmartDiagnostics._id,
            start_date: this.fromDate,
            end_date: this.toDate
        };
        this.loading = true;
        this.salesBookArray = [];
        this.headerClicked = 0;
        this.totalAmountSalesBook = 0;
        this.sortedData = [];
        this.UserService.SalesEntryBySmartDiagnostics(object).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                // this.toastr.success(data.message, "Success")
                _this.salesBookArray = data.data;
                for (var i = 0; i < _this.salesBookArray.length; i++) {
                    _this.totalAmountSalesBook += _this.salesBookArray[i].total_amount;
                    if (_this.salesBookArray[i].walkin_patient) {
                        _this.salesBookArray[i].patient = _this.salesBookArray[i].patient_name;
                    }
                    else {
                        _this.salesBookArray[i].patient = _this.salesBookArray[i].dispensed_patient_id.registration.pateintName;
                    }
                }
                _this.sortedData = _this.salesBookArray.slice();
            }
            else if (data.response == false) {
                //this.toastr.error(data.message, "Error")
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    ClinicSummaryDiagnosticComponent.prototype.TestCatalouge = function () {
        var _this = this;
        if (new Date(this.toDate).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        this.sortedData1 = [];
        var array = [];
        this.loading = true;
        this.UserService.GetTestBySmartDiagnostics(this.diagnosticsData.dataSmartDiagnostics._id).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                array = data.data;
                for (var i = 0; i < array.length; i++) {
                    var total = 0;
                    total += (array[i].rate / 100) * array[i].discount;
                    //this.totalRate+=array[i].rate-total
                }
                _this.sortedData1 = array.slice();
                // this.toastr.success(data.message,"Success")
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    ClinicSummaryDiagnosticComponent.prototype.getDocData = function () {
        var _this = this;
        this.dataArray = [];
        this.otherSales = [];
        this.totalPrescriptions = 0;
        this.totalSales = 0;
        this.totalSalesAmount = 0;
        this.totalConversion = 0;
        this.totalSalesWalkin = 0;
        this.totalSalesDoctorPlusWalkin = 0;
        this.otherSalesPercent = 0;
        this.totalSalesOtherPercent = 0;
        this.totalSalesPerPresPercent = 0;
        this.totalSalesPerPres = 0;
        this.totalProfit = 0;
        var ob = {
            smart_diagnostics_id: this.diagnosticsData.dataSmartDiagnostics._id
        };
        this.loading = true;
        this.UserService.DiagnosticsProgressToday(ob).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.dataArray = data.data;
                _this.otherSales = data.data1;
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.dataArray[i].true_sales = [];
                    _this.dataArray[i].false_sales = [];
                    _this.dataArray[i].total_sales_amount = 0;
                    _this.dataArray[i].sales_per_pres = 0;
                    for (var j = 0; j < _this.dataArray[i].total_sales.length; j++) {
                        if (_this.dataArray[i].total_sales[j].diagnostics) {
                            _this.dataArray[i].total_sales_amount = _this.dataArray[i].total_sales_amount + _this.dataArray[i].total_sales[j].investigation_cost;
                            _this.dataArray[i].true_sales.push(_this.dataArray[i].total_sales[j]);
                        }
                        else {
                            _this.dataArray[i].false_sales.push(_this.dataArray[i].total_sales[j]);
                        }
                    }
                    _this.dataArray[i].conversion = _this.getData((_this.dataArray[i].true_sales.length * 100) / _this.dataArray[i].total_sales.length);
                    if (_this.dataArray[i].true_sales.length > 0) {
                        _this.dataArray[i].sales_per_pres = parseFloat(_this.getData(_this.dataArray[i].total_sales_amount / _this.dataArray[i].true_sales.length));
                    }
                }
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.totalPrescriptions = _this.totalPrescriptions + _this.dataArray[i].total_sales.length;
                    _this.totalSales = _this.totalSales + _this.dataArray[i].true_sales.length;
                    _this.totalSalesAmount = _this.totalSalesAmount + _this.dataArray[i].total_sales_amount;
                }
                _this.totalConversion = _this.getData((_this.totalSales * 100) / _this.totalPrescriptions);
                // this.totalSalesPerPres = this.totalSalesPerPres + parseFloat(this.getData(this.totalSalesAmount / this.totalSales))
                //calculate amount for walkin patients//
                for (var i = 0; i < data.data1.length; i++) {
                    // this.totalProfit = this.totalProfit + (data.data1[i].total_amount - data.data1[i].cost_amount)
                    _this.totalSalesWalkin = _this.totalSalesWalkin + data.data1[i].total_amount;
                }
                _this.totalSalesDoctorPlusWalkin = _this.getData(_this.totalSalesAmount + _this.totalSalesWalkin);
                if (_this.diagnosticsData.doctorsRegisteredForSmartClinic.length > _this.dataArray.length) {
                    for (var i = 0; i < _this.diagnosticsData.doctorsRegisteredForSmartClinic.length; i++) {
                        var boolean = false;
                        for (var j = 0; j < _this.dataArray.length; j++) {
                            if (_this.diagnosticsData.doctorsRegisteredForSmartClinic[i]._id.toString() == _this.dataArray[j]._id.toString()) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            _this.dataArray.push({
                                _id: _this.diagnosticsData.doctorsRegisteredForSmartClinic[i]._id,
                                total_sales: [],
                                true_sales: [],
                                total_sales_amount: 0,
                                conversion: 0,
                                sales_per_pres: 0
                            });
                        }
                    }
                }
                _this.totalSales = _this.totalSales + _this.otherSales.length;
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.dataArray[i].totalPrescriptionsPercent = _this.getData(_this.checkIsNan(_this.getPercentage(_this.dataArray[i].total_sales.length, _this.totalPrescriptions)));
                    _this.dataArray[i].trueSalesPercent = _this.getData(_this.checkIsNan(_this.getPercentage(_this.dataArray[i].true_sales.length, _this.totalSales)));
                    _this.dataArray[i].trueSalesAmtPercent = _this.getData(_this.checkIsNan(_this.getPercentage(_this.dataArray[i].total_sales_amount, _this.totalSalesDoctorPlusWalkin)));
                }
                _this.otherSalesPercent = _this.getData(_this.checkIsNan(_this.getPercentage(_this.otherSales.length, _this.totalSales)));
                _this.totalSalesOtherPercent = _this.getData(_this.checkIsNan(_this.getPercentage(_this.totalSalesWalkin, _this.totalSalesDoctorPlusWalkin)));
                _this.totalSalesPerPresPercent = _this.getData(_this.checkIsNan(_this.totalSalesWalkin / _this.otherSales.length));
                _this.totalSalesPerPres = parseFloat(_this.getData(_this.totalSalesDoctorPlusWalkin / _this.totalSales));
                console.log(_this.dataArray);
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    ClinicSummaryDiagnosticComponent.prototype.sortData = function (sort) {
        var data = this.salesBookArray.slice();
        if (!sort.active || sort.direction === '') {
            this.salesBookArray = data;
            return;
        }
        this.salesBookArray = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'date':
                    return compare(a.createdAt, b.createdAt, isAsc);
                case 'invoice':
                    return compare(a.id, b.id, isAsc);
                case 'amount':
                    return compare(a.total_amount, b.total_amount, isAsc);
                case 'patient':
                    return compare(a.patient, b.patient, isAsc);
                default:
                    return 0;
            }
        });
    };
    ClinicSummaryDiagnosticComponent.prototype.exportPdf = function () {
        var head = [
            { title: 'Doctor Name', dataKey: "Doctor" },
            { title: 'Prescriptions', dataKey: "Prescriptions" },
            { title: 'Sales Orders', dataKey: "SalesOrders" },
            { title: 'Sales Amount', dataKey: "SalesAmount" },
            { title: 'Conversion', dataKey: "Conversion" },
            { title: 'Sales/prescription (Rs)', dataKey: "salesPerPrescription" }
        ];
        var csvData = [];
        var totalDuration;
        var dates = [];
        for (var i = 0; i < this.dataArray.length; i++) {
            var ob;
            ob = {};
            ob.id = i + 1;
            //var date = this.stockValuation[i].createdAt.split('T')
            //ob.updateAt = date[0] + " " +date[1].substr(0,5)
            ob.Doctor = this.getDoctorName(this.dataArray[i]._id);
            ob.Prescriptions = this.dataArray[i].total_sales.length;
            ob.SalesOrders = this.dataArray[i].true_sales.length;
            ob.SalesAmount = this.dataArray[i].total_sales_amount;
            ob.Conversion = this.dataArray[i].conversion + "%";
            ob.salesPerPrescription = this.dataArray[i].sales_per_pres;
            csvData.push(ob);
        }
        csvData.push({
            Doctor: "Other Sales",
            Prescriptions: "N.A",
            SalesOrders: this.otherSales.length,
            SalesAmount: this.checkIsNan(this.totalSalesWalkin),
            Conversion: "N.A",
            salesPerPrescription: this.checkIsNan(this.getData(this.totalSalesWalkin / this.otherSales.length))
        });
        csvData.push({
            Doctor: "Diagnostics Aggregates",
            Prescriptions: this.totalPrescriptions,
            SalesOrders: this.totalSales,
            SalesAmount: this.checkIsNan(this.totalSalesDoctorPlusWalkin),
            Conversion: this.checkIsNan(this.totalConversion) + "%",
            salesPerPrescription: this.checkIsNan(this.totalSalesPerPres)
        });
        var date = new Date().toJSON().toString().substr(0, 10);
        var doc = new jsPDF('p', 'pt');
        doc.autoTable(head, csvData, {
            theme: 'grid',
            styles: {
                overflow: 'linebreak',
            },
            margin: 5,
            fontSize: 8,
            tableWidth: 'auto',
            showHeader: 'everyPage'
        });
        doc.save('Diagnostics-BreakUp' + "(" + date + ")");
    };
    ClinicSummaryDiagnosticComponent.prototype.sortData1 = function (sort) {
        var data = this.sortedData1.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData1 = data;
            return;
        }
        this.sortedData1 = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'category': return compare(a.category, b.category, isAsc);
                case 'testname': return compare(a.name, b.name, isAsc);
                case 'rate': return compare(a.rate, b.rate, isAsc);
                case 'discount': return compare(a.discount, b.discount, isAsc);
                default: return 0;
            }
        });
    };
    ClinicSummaryDiagnosticComponent.prototype.editTest = function (item) {
        console.log(item);
        this.id = item.id;
        this.editcategory = item.category;
        this.edittestname = item.name;
        this.editrate = item.rate;
        this.editdiscount = item.discount;
        $("#edit-entry").modal("show");
    };
    ClinicSummaryDiagnosticComponent.prototype.UpdateTest = function () {
        var _this = this;
        var object = {
            id: this.id,
            update: {
                category: this.editcategory,
                name: this.edittestname,
                rate: this.editrate,
                discount: this.editdiscount
            }
        };
        this.loading = true;
        this.UserService.UpdateTestBySmartDiagnostics(object).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                $("#edit-entry").modal("hide");
                _this.detailsForm.reset();
                _this.ngOnInit();
                _this.toastr.success(data.message, "Success");
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    ClinicSummaryDiagnosticComponent.prototype.DeleteTest = function (activity) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__confirmation_popup_confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */], {
            // width: '250px',
            data: activity.name
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result == "yes") {
                _this.loading = true;
                _this.UserService.DeleteTestBySmartDiagnostics(activity.id).subscribe(function (data) {
                    console.log(data);
                    _this.loading = false;
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
    ClinicSummaryDiagnosticComponent.prototype.onTextChange = function (type, suggestion) {
        var _this = this;
        var type;
        if (type == 'PATHOLOGY') {
            type = 'Pathology';
        }
        else if (type == 'ULTRASOUND') {
            type = 'Ultrasound';
        }
        else if (type == 'AUDIOMETRY') {
            type = 'Audiometry';
        }
        else if (type == 'BONE DENSITOMETRY') {
            type = 'Bone densitometry';
        }
        else if (type == 'DOPPLER STUDIES') {
            type = 'Doppler Studies';
        }
        else if (type == 'MAMMOGRAPHY') {
            type = 'Mammograaphy';
        }
        else if (type == 'UROFLOWMETRY') {
            type = 'Uroflowmetry';
        }
        else if (type == 'Nerve Test') {
            type = 'NERVE TEST';
        }
        else if (type == 'Eye Tests') {
            type = 'Eye Test';
        }
        this.testNameSuggestion = [];
        var object = {
            type: type,
            suggestion: suggestion
        };
        this.UserService.SearchSuggestion(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.testNameSuggestion = data.data;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ClinicSummaryDiagnosticComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    ClinicSummaryDiagnosticComponent.prototype.getData = function (data) {
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
    ClinicSummaryDiagnosticComponent.prototype.getTableHeaderClass = function (id) {
        if (this.headerClicked == id) {
            return 'selected';
        }
        else {
            return '';
        }
    };
    ClinicSummaryDiagnosticComponent.prototype.setTableHeaderClass = function (id) {
        this.headerClicked = id;
    };
    ClinicSummaryDiagnosticComponent.prototype.go = function () {
        if (new Date(this.toDate1).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        this.activatedtab = 0;
        this.TestCatalouge();
        this.SalesBook();
        this.getDocData();
    };
    ClinicSummaryDiagnosticComponent.prototype.checkIsNan = function (data) {
        if (isNaN(data)) {
            return 0;
        }
        else {
            return data;
        }
    };
    ClinicSummaryDiagnosticComponent.prototype.getPercentage = function (data, total) {
        return ((data * 100) / total);
    };
    ClinicSummaryDiagnosticComponent.prototype.getDoctorName = function (id) {
        for (var i = 0; i < this.diagnosticsData.doctorsRegisteredForSmartClinic.length; i++) {
            if (this.diagnosticsData.doctorsRegisteredForSmartClinic[i]._id == id) {
                return (this.diagnosticsData.doctorsRegisteredForSmartClinic[i].first_name);
            }
        }
    };
    ClinicSummaryDiagnosticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clinic-summary-diagnostic',
            template: __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-diagnostic/clinic-summary-diagnostic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-diagnostic/clinic-summary-diagnostic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormBuilder */]])
    ], ClinicSummaryDiagnosticComponent);
    return ClinicSummaryDiagnosticComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-diagnostic/clinic-summary-diagnostic.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicSummaryDiagnosticModule", function() { return ClinicSummaryDiagnosticModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clinic_summary_diagnostic_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-diagnostic/clinic-summary-diagnostic-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clinic_summary_diagnostic_component__ = __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-diagnostic/clinic-summary-diagnostic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ClinicSummaryDiagnosticModule = /** @class */ (function () {
    function ClinicSummaryDiagnosticModule() {
    }
    ClinicSummaryDiagnosticModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__clinic_summary_diagnostic_routing_module__["a" /* ClinicSummaryDiagnosticRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__clinic_summary_diagnostic_component__["a" /* ClinicSummaryDiagnosticComponent */]]
        })
    ], ClinicSummaryDiagnosticModule);
    return ClinicSummaryDiagnosticModule;
}());



/***/ })

});
//# sourceMappingURL=clinic-summary-diagnostic.module.chunk.js.map