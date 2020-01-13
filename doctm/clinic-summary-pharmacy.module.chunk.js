webpackJsonp(["clinic-summary-pharmacy.module"],{

/***/ "../../../../../src/app/header-two-layout/clinic-summary-pharmacy/clinic-summary-pharmacy-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicSummaryPharmacyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clinic_summary_pharmacy_component__ = __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-pharmacy/clinic-summary-pharmacy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__clinic_summary_pharmacy_component__["a" /* ClinicSummaryPharmacyComponent */],
    }
];
var ClinicSummaryPharmacyRoutingModule = /** @class */ (function () {
    function ClinicSummaryPharmacyRoutingModule() {
    }
    ClinicSummaryPharmacyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ClinicSummaryPharmacyRoutingModule);
    return ClinicSummaryPharmacyRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-pharmacy/clinic-summary-pharmacy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.cus-content-wrapper{\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n.hding > h3{\r\n    margin: 0px;\r\n    padding:15px 0px;\r\n    background-color: #d9e0dd; \r\n}\r\n.hding  h5.btm{\r\n    margin: 0px;\r\n    padding:15px 0px;\r\n    background-color: #d9e0dd; \r\n}\r\n.cstm-tbl{\r\n    width: 100%;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n}\r\n.clr-vlt{\r\n    color: #5c62af;\r\n}\r\n.tb-1{\r\n    margin-top:15px;\r\n}\r\n.tb-1 tr td{\r\n    padding:2px 8px;\r\n    vertical-align: middle; \r\n}\r\n.cstm-tbl tr{\r\n    height:40px;\r\n}\r\n.footer-cstm-an{\r\n    position: fixed;\r\n    float: left;\r\n    width: 100%;\r\n    bottom:0px;\r\n    background: #00b0f0;\r\n    color:#fff;\r\n    z-index: 99;\r\n    padding-top: 8px;\r\n}\r\n.mt-table h3{\r\n    margin-top: 0px;\r\n}\r\n.cstm-tr{\r\n    background-color:#92d050;\r\n    color:#fff;\r\n    text-align: center;\r\n}\r\n.cstm-tr-2{\r\n    background-color:#c5d8f1;\r\n}\r\n.cstm-tr-2 td{\r\n    border-right:1px solid #bbb; \r\n}\r\n.cstm-tr-2 td:last-child {\r\n border-right: none;\r\n}\r\n.cstm-tr-3{\r\n    border-bottom:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td{\r\n    border-right:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td:last-child {\r\n border-right: none;\r\n}\r\n.color-red {\r\n    color: #ff0000;\r\n    -webkit-transform: translateY(-8px);\r\n            transform: translateY(-8px);\r\n}\r\n.cstm-tr-4{\r\n    background-color: #f2dada;\r\n}\r\n.cstm-mg{\r\n    margin-top: 5px;\r\n}\r\n.btn-go{\r\n    background-color: transparent;\r\n    border: 1px solid #002160;\r\n    margin-bottom: 5px;\r\n    min-width: 62%;\r\n}\r\n.btn-go:hover{\r\n    -webkit-transition: 300ms;\r\n    transition: 300ms;\r\n    background: #98C74F;\r\n    border-color: #98C74F;\r\n    color: #fff;\r\n}\r\n.li-cstm a{\r\n    text-align: center!important;\r\n    background: #000!important;\r\n    color: #fff!important;\r\n    font-size: 16px!important;\r\n    font-weight: inherit!important;\r\n    padding: 6px!important;\r\n}\r\n.cus-sidebar{\r\n    height: inherit!important;\r\n}\r\n/*karam @ 2019*/\r\n.side-bar-cstm{\r\n    z-index: 99;\r\n}\r\n.res-tab-2{\r\n    max-height: 225px;\r\n}\r\n.cstm-ul-new li{\r\n    width:170px;\r\n}\r\n.cstm-ul-new li a{\r\n    background-color:transparent;\r\n    color:#000;\r\n    padding:10px;\r\n    cursor: pointer;\r\n    border-radius: 0px;\r\n    border-bottom: 2px solid transparent; \r\n    text-align: center;\r\n}\r\n.cstm-ul-new li.active a{\r\n    background-color: #e0e0e0;\r\n    color: #000;\r\n    border-bottom: 2px solid #00b0f0;\r\n}\r\n.tab-new{\r\n    min-height: 450px;\r\n    max-height: 450px;\r\n    padding: 0px 8px;\r\n    border-left: 1px solid #dcdcdc;\r\n    border-right: 1px solid #dcdcdc;\r\n    overflow-x: hidden;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n    font-weight: bold;\r\n}\r\n/*karam@30-jan-2019*/\r\n/*.tab-new-cstm tr td{\r\n    font-size: 10px;\r\n}*/\r\n.brder-cstm{\r\n    padding-bottom: 1px;\r\n    margin-bottom: 6px;\r\n    border-bottom: 1px solid #a7a7a7;\r\n    position: relative;\r\n}\r\n.brder-cstm::after{\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 6px;\r\n    width: 12px;\r\n    background-color: #ffffff;\r\n    top: 41px;\r\n    right: -3px;\r\n     \r\n}\r\n.cus-sidebar ul{\r\n    border:1px solid #a7a7a7;\r\n}\r\n.mg-0{\r\n    margin-top: 0px;\r\n}\r\n.mg-bt{\r\n    margin-bottom:2px; \r\n}\r\n.txt-thm{\r\n    color: rgb(0,32,96);\r\n}\r\n.txt-thm-1{\r\n    color: rgb(0,112,192);\r\n}\r\n.foot-2{\r\n    border-bottom:1px solid #a7a7a7;\r\n    word-spacing: 14px;\r\n}\r\n.hdr-2{\r\n    padding-bottom: 8px;\r\n    border-bottom:1px solid #a7a7a7;\r\n}\r\n.brdr-lft{\r\n    margin-left:-5px;\r\n    border-left:1px solid #a7a7a7; \r\n}\r\n.evn{\r\n    background-color:#eff3ef;\r\n}\r\n.odd{\r\n    background-color:#e3e3e3;\r\n}\r\n.new-ul-1 li a{\r\n    height: 55px;\r\n    line-height: 3;\r\n}\r\n.new-table-24 tr td{\r\n    border-right:1px solid #fff;\r\n}\r\n.new-table-24 tr:last-child{\r\n    border-right:none;\r\n}\r\nli.clz a{\r\n    line-height:1.5!important;\r\n}\r\ntr.tbl-blk-hd{\r\n    background:rgb(0,112,192);\r\n    color:#fff;\r\n}\r\ntr.tbl-blk-hd td{\r\n    border-right:1px solid #fff;\r\n}\r\ntr.tbl-blk-hd:last-child{\r\n    border-right: none;\r\n}\r\n.tbl-hd-2{\r\n    background-color: #000;\r\n    color: #fff;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n.new-table-24 tr td{\r\n    padding: 4.5px 15px!important;\r\n}\r\n/*.tbl-blk-hd{\r\n    height: 45px;\r\n}\r\n.tbl-blk-hd td{\r\n    padding: 12px!important;\r\n}*/\r\n/*kjdf=========================*/\r\n.cstm-row{\r\n    margin-top: 20px;\r\n}\r\n.cstm-row button{\r\n    margin-top:38px;\r\n}\r\n.cstm-hdr{\r\n    margin-top: 15px;\r\n}\r\n.tbl-head{\r\n    margin-bottom:2px;\r\n    margin-top:20px;\r\n}\r\n.tbl-head tr {\r\n    border-top:1px solid #fff!important;\r\n    border-left:1px solid #fff!important;\r\n    border-right:1px solid #fff!important;\r\n}\r\n.tbl-head tr th{\r\n    background-color:#A1D253!important;\r\n    border-color:#fff;\r\n    color: black;\r\n}\r\n.table-bordered > tbody > tr > td{\r\n    border: 1px solid #fff;\r\n}\r\n.tbl-cntrol{\r\n    min-height:300px;\r\n    max-height: 300px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n.tbl-cntrol .tbl-data{\r\n    min-width: 882px;\r\n}\r\n.btn-wrap{\r\n    margin-top: 20px;\r\n}\r\n.btn-grin{\r\n    background-color:rgb(161, 210, 83);\r\n}\r\n.btn-grin-2{\r\n    padding:20px 30px; \r\n}\r\n.btn-wrap button{\r\n    margin-right: 10px;\r\n}\r\n.btn-red-1{\r\n    background-color: #FF0000;\r\n}\r\n.btn-ornge{\r\n    background-color: #E36C09;\r\n}\r\n.table{\r\n    margin-bottom:5px;\r\n    font-size: 17px;\r\n}\r\n.cstm-th tr th{\r\n    background-color: #A1D253;\r\n    color: black;\r\n    border:1px solid #fff;\r\n}\r\n.cstm-caret {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 70.5px;\r\n    background-color: #01b0f0;\r\n    z-index: 9;\r\n    right: 20px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 12px dashed;\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n}\r\n.cstm-caret-big {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 22px;\r\n    background-color: #01b0f0;\r\n    z-index: 1;\r\n    right: 5px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 17px dashed;\r\n    border-right: 14px solid transparent;\r\n    border-left: 14px solid transparent;\r\n}\r\n.cstm-crt-wrap {\r\n    position: relative;\r\n}\r\n.regis-modal-body .select-opt .disabled {\r\n    color: #ddd;\r\n}\r\n.select-doctor{\r\n    background-color: #01b0f0;\r\n    margin-top: 55px;\r\n    color: #fff;\r\n    margin-bottom: 15px;\r\n}\r\n.new-thd th {\r\n    color: #000;\r\n    background-color:rgb(161,210,84);\r\n    border: 1px solid #fff;\r\n}\r\n.new-tbdy td{\r\n    background-color: rgb(1,176,241) !important;\r\n    border: 1px solid #fff !important;\r\n}\r\n.new-thd {\r\n    color: #fff;\r\n    background-color: #A1D253;\r\n    border: 1px solid #fff;\r\n    color: black;\r\n}\r\n.tab-copy tr th{\r\n    background: #000;\r\n    color:#fff;\r\n}\r\n.tab-copy-tr tr{\r\n    color:#000!important;\r\n    background-color: #dae5f1;\r\n    border: 1px solid #fff !important;\r\n}\r\n.tab-copy-tr tr:hover{\r\n   background-color:#b8d9fd!important;\r\n}\r\n.tab-copy-tr td{\r\n  font-size: 14px;\r\n}\r\n.tbl-cntrol{\r\n    min-height:100px;\r\n    max-height: 380px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n.tbl-cntrol .tbl-data{\r\n    min-width: 880px;\r\n}\r\nth.selected{\r\n    background-color: #00b0f0!important;\r\n}\r\n.cstm-name{\r\n    background-color: #01B0F0;\r\n    color: white;\r\n}\r\n.cstm-blue{\r\n    background-color: #4978C6;\r\n    color: white;\r\n}\r\ntr td , tr th {\r\n    vertical-align: center;\r\n    vertical-align: middle;\r\n}\r\n.tfoot td{\r\n    padding:15px 0px; \r\n}\r\n.fix-footer{\r\n    position: fixed;\r\n    bottom:0;\r\n    margin-bottom: 10px;\r\n}\r\n.fontsmall{\r\n    font-size: 50%;\r\n    color: black;\r\n}\r\n/*#01B0F0*/\r\nh3.dt{\r\n    color:#416bb1;\r\n    text-align: center;\r\n}\r\nh3.dt > span{\r\n    color:#000;\r\n    text-align: center;\r\n}\r\n.cstm-ul-new-width li{\r\n    width:25%;\r\n}\r\n.cstm-footer,\r\n.cstm-footer-new{\r\n    position: fixed;\r\n    bottom: 0;\r\n    left:0;\r\n    z-index: 99;\r\n    -webkit-transform: scale(0.8,0.8);\r\n            transform: scale(0.8,0.8);\r\n}\r\n.cstm-footer .btn-custom {\r\n    font-size: 14px;\r\n}\r\n.table-head tr th {\r\n    border-right: 1px solid #fff;\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n.cstm-table{\r\n    margin-bottom: 0px;\r\n}\r\n.cstm-width{\r\n   width: 1079px;\r\n}\r\n.my-tbdy tr td{\r\n    border-right: 1px solid #fff;\r\n    background-color: #DAE5F1!important;\r\n    color: #000;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n.modal-tble{\r\n    display: table!important;\r\n}\r\n.input-inline input{\r\n    display: inline-block!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-pharmacy/clinic-summary-pharmacy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"analytics-sec\">\n\t\n\t<div class=\"ipd-deatil-sec\">\n\t\t<div class=\"inner-tab\">\n\t\t\t<ul class=\"nav nav-tabs new-ul-1\" role=\"tablist\">\n\t\t\t\t<li role=\"presentation\"  class=\"clz\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-opd\"> <div>OPD</div><small> (All Doctors)</small> </a></li>\n\t\t\t\t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-pharmacy\">Pharmacy</a></li>\n\t\t\t\t<li role=\"presentation\" *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-diagnostic\"> Diagnostics </a></li>\n\t\t\t\t<li role=\"presentation\" *ngIf=\"doctorData.clinic_services.Clinic_Diagnostics==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-ipd\"> IPD </a></li>\n\t\t\t\t<li role=\"presentation\" *ngIf=\"doctorData.clinic_services.Clinic_IPD==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-all\">Summary</a></li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"ipd-body\">\n\t\t\t<div class=\"cus-sidebar-wrapper side-bar-cstm\">\n\t\t\t\t<div class=\"cus-sidebar\">\n\t\t\t\t\t<ul> \n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>From</b></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-9\">\n\t\t\t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t\t\t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"fromDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>To</b></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-9\">\n\t\t\t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t\t\t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"toDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"text-right brder-cstm\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12 text-center\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-go\" (click)=\"go()\">Go</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"li-cstm\"> <a href=\"javascript:void(0);\"> For Past</a> </li>\n\t\t\t\t\t\t<!-- <li class=\"{{getClass(0)}}\" (click)=\"activatetab(0)\" class=\"active\"> <a href=\"javascript:void(0);\"> Current </a> </li> -->\n\t\t\t\t\t\t<li class=\"{{getClass(1)}}\" (click)=\"activatetab(1)\"> <a href=\"javascript:void(0);\"> 1 Week &nbsp;<small *ngIf=\"activatedtab==1\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(2)}}\" (click)=\"activatetab(2)\"> <a href=\"javascript:void(0);\"> 2 Weeks &nbsp;<small *ngIf=\"activatedtab==2\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small>  </a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month &nbsp;<small *ngIf=\"activatedtab==3\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month &nbsp;<small *ngIf=\"activatedtab==4\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month &nbsp;<small *ngIf=\"activatedtab==5\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year &nbsp;<small *ngIf=\"activatedtab==6\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> All </a> </li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"stock-tab\">\n\t\t\t\t<div class=\"col-lg-10 col-lg-offset-2\">\n\t\t\t\t\t<ul class=\"nav nav-tabs cstm-ul-new cstm-ul-new-width\">\n\t\t\t\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#home-cstm\">SALE BOOK</a></li>\n\t\t\t\t\t\t<li><a data-toggle=\"tab\" href=\"#menu1-cstm\">PURCHASE  BOOK</a></li>\n\t\t\t\t\t\t<li><a data-toggle=\"tab\" href=\"#menu2-cstm\">BREAK-UP</a></li>\n\t\t\t\t\t\t<li><a data-toggle=\"tab\" href=\"#crnt-stk\">CURRENT STOCK</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\t<div id=\"home-cstm\" class=\"tab-pane fade in active\">\n\t\t\t\t\t\t\t<div class=\"stock-tab\">\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t<div style=\"min-height:28em; max-height:28em; overflow-y: scroll;\">\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\" >\n\t\t\t\t\t\t\t\t\t\t\t<thead class=\"new-thd tab-copy\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"date\" width=\"10%\" class=\"{{getTableHeaderClass(1)}} text-center\" (click)=\"setTableHeaderClass(1)\"><h4 style=\"width: 100%; text-align: center;\">Date</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"invoice\" width=\"12%\" class=\"{{getTableHeaderClass(2)}} text-center\" (click)=\"setTableHeaderClass(2)\"><h4 style=\"width: 100%; text-align: center;\">Receipt Number</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"patient\" width=\"10%\" class=\"{{getTableHeaderClass(7)}} text-center\" (click)=\"setTableHeaderClass(7)\"><h4 style=\"width: 100%; text-align: center;\">Patient Name</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"amount\" width=\"10%\" class=\"{{getTableHeaderClass(3)}} text-center\" (click)=\"setTableHeaderClass(3)\"><h4 style=\"width: 100%; text-align: center;\">Sales Amount</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"cost\" width=\"10%\" class=\"{{getTableHeaderClass(4)}} text-center\" (click)=\"setTableHeaderClass(4)\"><h4 style=\"width: 100%; text-align: center;\">Cost</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"gross\" width=\"10%\" class=\"{{getTableHeaderClass(5)}} text-center\" (click)=\"setTableHeaderClass(5)\"><h4 style=\"width: 100%; text-align: center;\">Gross Profit</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"profit\" width=\"10%\" class=\"{{getTableHeaderClass(6)}} text-center\" (click)=\"setTableHeaderClass(6)\"><h4 style=\"width: 100%; text-align: center;\">Profit %</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody class=\"tab-copy-tr\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of salesBookArray;let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{item.createdAt | date:'d MMM yy ,h:mm a'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"12%\" class=\"text-center\">{{item.id}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.walkin_patient\">{{item.patient_name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!item.walkin_patient\">{{item.dispensed_patient_id.registration.pateintName}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{getData(item.total_amount)}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{getData(item.cost_amount)}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{getData(item.total_amount-item.cost_amount)}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{getData(((item.total_amount-item.cost_amount)*100)/item.cost_amount)}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\" *ngIf=\"salesBookArray.length<1\">\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"text-center\">No data found ...</h3>\n\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-12 cstm-footer text-center\">\n\t\t\t\t\t\t\t\t<div class=\"btn-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-ornge\">\n\t\t\t\t\t\t\t\t\t\t<div> Total Orders</div>\n\t\t\t\t\t\t\t\t\t\t<div>{{salesBookArray.length}}</div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-grin\">\n\t\t\t\t\t\t\t\t\t\t<div> Total Sale</div>\n\t\t\t\t\t\t\t\t\t\t<div>{{getData(totalAmountPharmacy)}}</div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom\">\n\t\t\t\t\t\t\t\t\t\t<div>Total Cost</div>\n\t\t\t\t\t\t\t\t\t\t<div> {{getData(totalCostPricePharmacy)}}</div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-red-1\">\n\t\t\t\t\t\t\t\t\t\t<div>Gross Profit</div>\n\t\t\t\t\t\t\t\t\t\t<div> {{getData(totalCostPharmacy)}} </div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-ornge\">\n\t\t\t\t\t\t\t\t\t\t<div> Profit %</div>\n\t\t\t\t\t\t\t\t\t\t<div> {{getData(((totalAmountPharmacy-totalCostPricePharmacy)*100)/totalCostPricePharmacy)}}</div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"menu1-cstm\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<div style=\"min-height: 10px; max-height:448px; overflow-y: scroll;\">\n\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered\" matSort (matSortChange)=\"sortData1($event)\" >\n\t\t\t\t\t\t\t\t\t\t<thead class=\"new-thd tab-copy\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"createdAt\" width=\"25%\" class=\"{{getTableHeaderClass(1)}} text-center\" (click)=\"setTableHeaderClass(1)\"><h4 style=\"width: 100%; text-align: center;\">Date</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"bill_no\" width=\"25%\" class=\"{{getTableHeaderClass(2)}} text-center\" (click)=\"setTableHeaderClass(2)\"><h4 style=\"width: 100%; text-align: center;\">Bill Number</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"party_name\" width=\"25%\" class=\"{{getTableHeaderClass(7)}} text-center\" (click)=\"setTableHeaderClass(7)\"><h4 style=\"width: 100%; text-align: center;\">Party Name</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"amount\" width=\"25%\" class=\"{{getTableHeaderClass(3)}} text-center\" (click)=\"setTableHeaderClass(3)\"><h4 style=\"width: 100%; text-align: center;\">Bill Value</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th width=\"20%\" class=\"text-center\"><h4>Action</h4></th>\n\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody class=\"tab-copy-tr\">\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of sortedData1\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"20%\" class=\"text-center\">{{item.stock[0].createdAt | date:'d MMM yy ,h:mm a'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"20%\" class=\"text-center\">{{item.stock[0].bill_no}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"20%\" class=\"text-center\">{{item.party_name}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td  width=\"20%\" class=\"text-center\">{{item.amount}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td  width=\"20%\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"viewReturnData(item.stock,item)\">View</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\" *ngIf=\"sortedData1.length<1\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"text-center\">No data found ...</h3>\n\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 fix-footer\">\n\t\t\t\t\t\t\t\t<div class=\"row btn-wrap\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-grin\">\n\t\t\t\t\t\t\t\t\t\t\t<div> Total Number of Purchases: {{stockPurchaseArray.length}} </div>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom\">\n\t\t\t\t\t\t\t\t\t\t\t<div>Total Bill Value: {{totalBillPurchaseBook.toFixed(2)}} </div>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"menu2-cstm\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<div style=\"min-height:29em;\">\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered \">\n\t\t\t\t\t\t\t\t\t\t\t<thead class=\"new-thd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<colgroup span=\"2\"></colgroup>\n\t\t\t\t\t\t\t\t\t\t\t\t<colgroup span=\"2\"></colgroup>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th width=\"14%\" rowspan=\"2\" class=\"new-thd\" style=\"text-align: center;\">Doctor Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"5\" scope=\"colgroup\" class=\"text-center\">Progress Parameters</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\"  width=\"10%\" scope=\"col\">Prescriptions</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\"  width=\"10%\" scope=\"col\">Sale Orders</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th   class=\"text-center\" width=\"10%\" scope=\"col\">Sales Amount (Rs)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\" width=\"10%\" scope=\"col\">Conversion</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\"  width=\"10%\" scope=\"col\">Sales/prescription (Rs)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody class=\"new-tbdy\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let op of dataArray\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"14%\" class=\"text-center cstm-name\">Dr. {{getDoctorName(op._id)}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.total_sales.length}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class='fontsmall'>({{getData(checkIsNan(getPercentage(op.total_sales.length,totalPrescriptions)))}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.true_sales.length}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class='fontsmall'>({{getData(checkIsNan(getPercentage(op.true_sales.length,totalSales)))}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.total_sales_amount}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class='fontsmall'>({{getData(checkIsNan(getPercentage(op.total_sales_amount,totalSalesDoctorPlusWalkin)))}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.conversion}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.sales_per_pres}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"14%\" class=\"text-center cstm-name\">Other Sales</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">N.A</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{otherSales.length}} \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class='fontsmall'>({{getData(checkIsNan(getPercentage(otherSales.length,totalSales)))}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{checkIsNan(totalSalesWalkin)}} <small class='fontsmall'>({{getData(checkIsNan(getPercentage(totalSalesWalkin,totalSalesDoctorPlusWalkin)))}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">N.A</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{getData(checkIsNan(totalSalesWalkin/otherSales.length))}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot class=\"tfoot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th width=\"14%\" class=\"text-center new-thd\">Pharmacy Aggregates</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">{{totalPrescriptions}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">{{totalSales}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{checkIsNan(totalSalesDoctorPlusWalkin)}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">{{checkIsNan(totalConversion)}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">{{checkIsNan(totalSalesPerPres)}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 text-center cstm-footer-new\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-grin\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div> Sales: {{getData(totalSalesDoctorPlusWalkin)}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>Profit: {{getData(totalProfit)}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-grin\" (click) = \"exportPdfProgress()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div> PRINT </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"crnt-stk\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"min-height: 10px; max-height:448px; overflow-y: scroll;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered\" matSort (matSortChange)=\"sortData2($event)\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead class=\"new-thd tab-copy\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"type\" width=\"9%\" class=\"{{getTableHeaderClass(2)}} text-center\" (click)=\"setTableHeaderClass(2)\"><h4 style=\"width: 100%; text-align: center;\">Type</h4></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"product\" width=\"14%\" class=\"{{getTableHeaderClass(1)}} text-center\" (click)=\"setTableHeaderClass(1)\"><h4 style=\"width: 100%; text-align: center;\">Product</h4></th> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"packing\" width=\"8%\" class=\"{{getTableHeaderClass(3)}} text-center\" (click)=\"setTableHeaderClass(3)\"><h4 style=\"width: 100%; text-align: center;\">Packing</h4></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"batch\" width=\"9%\" class=\"{{getTableHeaderClass(4)}} text-center\" (click)=\"setTableHeaderClass(4)\"><h4 style=\"width: 100%; text-align: center;\">Batch</h4></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"mrp\" width=\"8%\" class=\"{{getTableHeaderClass(8)}} text-center\" (click)=\"setTableHeaderClass(8)\"><h4 style=\"width: 100%; text-align: center;\">M.R.P./P</h4></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"stock\" width=\"8%\" class=\"{{getTableHeaderClass(5)}} text-center\" (click)=\"setTableHeaderClass(5)\"><h4 style=\"width: 100%; text-align: center;\">Stock</h4></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"p_rate\" width=\"9%\" class=\"{{getTableHeaderClass(6)}} text-center\" (click)=\"setTableHeaderClass(6)\"><h4 style=\"width: 100%; text-align: center;\">P.Rate/P</h4></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"pvalue\" width=\"8%\" class=\"{{getTableHeaderClass(9)}} text-center\" (click)=\"setTableHeaderClass(9)\"><h4 style=\"width: 100%; text-align: center;\">P.Value</h4></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th mat-sort-header=\"value\" width=\"9%\" class=\"{{getTableHeaderClass(7)}} text-center\" (click)=\"setTableHeaderClass(7)\"><h4 style=\"width: 100%; text-align: center;\">S.Value</h4></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t               <!-- <tbody class=\"tab-copy-tr\">\n\t\t\t\t\t\t\t                        <tr>\n\t\t\t\t\t\t\t                            <td width=\"10%\" class=\"text-center\">Tablet</td>\n\t\t\t\t\t\t\t                            <td width=\"12%\" class=\"text-center\">Montair LC</td>\n\t\t\t\t\t\t\t                            <td width=\"10%\" class=\"text-center\">\n\t\t\t\t\t\t\t                                <span >1x10</span>\n\t\t\t\t\t\t\t                            </td>\n\t\t\t\t\t\t\t                            <td width=\"10%\" class=\"text-center\">B1234</td>\n\t\t\t\t\t\t\t                            <td width=\"10%\" class=\"text-center\">200</td>\n\t\t\t\t\t\t\t                            <td width=\"10%\" class=\"text-center\">4:1</td>\n\t\t\t\t\t\t\t                            <td width=\"10%\" class=\"text-center\">158.50</td>\n\t\t\t\t\t\t\t                            <td width=\"10%\" class=\"text-center\">649.85</td>\n\t\t\t\t\t\t\t                             <td width=\"10%\" class=\"text-center\">820</td>\n\t\t\t\t\t\t\t                        </tr> \n\t\t\t\t\t\t\t                    </tbody> -->\n\t\t\t\t\t\t\t                    <tbody class=\"tab-copy-tr\">\n\t\t\t\t\t\t\t                    \t<tr *ngFor=\"let item of sortedData2\">\n\t\t\t\t\t\t\t                    \t\t<td width=\"9%\" class=\"text-center\">{{item.type}}</td>\n\t\t\t\t\t\t\t                    \t\t<td width=\"14%\" class=\"text-center vr-mid\">{{item.product}}</td>\n\t\t\t\t\t\t\t                    \t\t<td width=\"8%\" class=\"text-center vr-mid\">{{item.pack_units}} x {{item.pack_quantity}}</td>\n\t\t\t\t\t\t\t                    \t\t<td width=\"9%\" class=\"text-center vr-mid\">{{item.batch}}</td>\n\t\t\t\t\t\t\t                    \t\t<td width=\"8%\" class=\"text-center vr-mid\">{{item.mrp}}</td>\n\t\t\t\t\t\t\t                    \t\t<td width=\"8%\" class=\"text-center vr-mid\">\n\t\t\t\t\t\t\t                    \t\t\t<span *ngIf=\"item.newPacking || item.newPackingReminder\">{{item.newPacking}} <b>: </b>{{item.newPackingReminder}}</span>\n\t\t\t\t\t\t\t                    \t\t\t<span *ngIf=\"!item.newPacking && !item.newPackingReminder\" style=\"color: red\"><small><b>Not in Stock</b></small></span>\n\t\t\t\t\t\t\t                    \t\t</td>\n\t\t\t\t\t\t\t                    \t\t<td width=\"9%\" class=\"text-center vr-mid\">{{getData(item.cost)}}</td>\n\t\t\t\t\t\t\t                    \t\t<td width=\"8%\" class=\"text-center vr-mid\">{{getData(item.present_prate)}}</td>\n\t\t\t\t\t\t\t                    \t\t<td width=\"9%\" class=\"text-center vr-mid\">{{getData(item.present_mrate)}}</td>\n\t\t\t\t\t\t\t                    \t</tr>\n\t\t\t\t\t\t\t                    </tbody>\n\t\t\t\t\t\t\t                </table>\n\t\t\t\t\t\t\t                <div class=\"col-lg-12\" *ngIf=\"sortedData2.length<1\">\n\t\t\t\t\t\t\t                \t<h3 class=\"text-center\">No data found ...</h3>\n\t\t\t\t\t\t\t                </div> \n\t\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t        <div class=\"col-lg-12  cstm-footer\">\n\t\t\t\t\t\t\t        \t<div class=\"btn-wrap text-center\">\n\t\t\t\t\t\t\t        \t\t<button class=\"btn btn-custom\" *ngIf=\"sortedData2\">\n\t\t\t\t\t\t\t        \t\t\t<div> Total Product Items </div>\n\t\t\t\t\t\t\t        \t\t\t<div class=\"ex-txt\">{{totalProducts.length}}</div>\n\t\t\t\t\t\t\t        \t\t</button>\n\t\t\t\t\t\t\t        \t\t<button class=\"btn btn-custom\">\n\t\t\t\t\t\t\t        \t\t\t<div> Purchase Value of Stock </div>\n\t\t\t\t\t\t\t        \t\t\t<div class=\"ex-txt\">{{getData(purchaseValueStock)}}</div>\n\t\t\t\t\t\t\t        \t\t</button>\n\t\t\t\t\t\t\t        \t\t<button class=\"btn btn-custom\">\n\t\t\t\t\t\t\t        \t\t\t<div>Sales Value of Stock </div>\n\t\t\t\t\t\t\t        \t\t\t<div class=\"ex-txt\">{{getData(salesValueStock)}}</div>\n\t\t\t\t\t\t\t        \t\t</button>\n\t\t\t\t\t\t\t        \t\t<button class=\"btn btn-custom\">\n\t\t\t\t\t\t\t        \t\t\t<div>Profit Value of Stock </div>\n\t\t\t\t\t\t\t        \t\t\t<div class=\"ex-txt\">{{getData(salesValueStock-purchaseValueStock)}} </div>\n\t\t\t\t\t\t\t        \t\t</button>\n\t\t\t\t\t\t\t        \t\t<button class=\"btn btn-custom  btn-grin-2\" (click)=\"exportPdf()\">\n\t\t\t\t\t\t\t        \t\t\t<div> Export </div>\n\t\t\t\t\t\t\t        \t\t</button>\n\t\t\t\t\t\t\t        \t</div>\n\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n<!-- View Return -->\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n\t<div class=\"modal-dialog modal-tble\">\n\t  <div class=\"modal-content cstm-width\">\n\t    <div class=\"modal-header\">\n\t      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t      <h3 class=\"modal-title text-center\">{{returnPartyName}}</h3>\n\t      <h4 class=\"modal-title text-center\">Bill No - {{returnBillNo}}</h4>\n\t    </div>\n\t\t<div class=\"modal-body\">\n\t\t\t<table cellpadding=\"20px\" class=\"table cstm-table\" style=\"position: relative;\">\n\t    \t<thead class=\"table-head\" style=\"position: absolute;\">\n\t\t\t  \t<tr>\n\t\t\t  \t\t<!-- <th class=\"text-center\" width=\"60px\">Return Item</th> -->\n\t\t\t\t    <th class=\"text-center\" width=\"60px\"><h5>Type</h5></th>\n\t                <th class=\"text-center\" width=\"150px\"><h5>Product</h5></th>\n\t                <th class=\"text-center\" width=\"85px\"><h5>Batch</h5></th>\n\t                <th class=\"text-center\" width=\"110px\"><h5>Exp</h5></th>\n\t                <th class=\"text-center\" width=\"120px\"><h5>Pack</h5></th>\n\t                <th class=\"text-center\" width=\"80px\"><h5>M.R.P</h5></th>\n\t                <th class=\"text-center\" width=\"80px\"><h5>QTY</h5></th>\n\t                <th class=\"text-center\" width=\"80px\"><h5>P.Rate</h5></th>\n\t                <th class=\"text-center\" width=\"65px\"><h5>CGST(%)</h5></th>\n\t                <th class=\"text-center\" width=\"65px\"><h5>SGST(%)</h5></th>\n\t                <th class=\"text-center\" width=\"70px\"><h5>Disc(%)</h5></th>\n\t                <th class=\"text-center\" width=\"80px\"><h5>Amount</h5></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t</table>\n\t\t\t<div class=\"table-scroll-outside table-two\" style=\"margin-top: 60px;\">\n\t\t\t\t<table>\n\t\t\t\t<tbody class=\"tbod-max-w my-tbdy\">\n\t\t\t\t\t<tr class=\"table-row\" *ngFor=\"let tr of totalTr;let i = index;\">\n\t\t\t\t\t<!-- <td width=\"60px\">\n\t\t\t\t\t\t<label class=\"cstm-chk\">\n\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"returnStatus[i]\" [checked]=\"returnStatus[i]\" (change)=\"getTotalReturn(i)\">\n\t\t\t\t\t\t  <span class=\"checkmark\"></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</td> -->\n\t\t\t\t\t<td width=\"60px\">\n\t\t\t\t\t\t<select  class=\"form-control\" class=\"form-control txtfield\" [(ngModel)]=\"reqData.opt[i]\" disabled=\"\">\\\n\t\t\t\t\t\t\t<option selected=\"\" value=\"\" disabled=\"\">Type</option>\t\n\t\t\t\t\t\t\t<option value=\"Tablet\">Tab</option>\n\t\t\t\t\t\t\t<option value=\"Capsule\">Cap</option>\n\t\t\t\t\t\t\t<option value=\"Syrup\">Syr</option>\n\t\t\t\t\t\t\t<option value=\"Suspension\">Sus</option>\n\t\t\t\t\t\t\t<option value=\"Emulsion\">Emu</option>\n\t\t\t\t\t\t\t<option value=\"Solution\">Sol</option>\n\t\t\t\t\t\t\t<option value=\"Injection\">Inj</option>\n\t\t\t\t\t\t\t<option value=\"MouthWash\">Mou</option>\n\t\t\t\t\t\t\t<option value=\"Powder\">Pow</option>\n\t\t\t\t\t\t\t<option value=\"Cream\">Cre</option>\n\t\t\t\t\t\t\t<option value=\"Gel\">Gel</option>\n\t\t\t\t\t\t\t<option value=\"Drops\">Dro</option>\n\t\t\t\t\t\t\t<option value=\"Aerosols\">Aer</option>\n\t\t\t\t\t\t\t<option value=\"Lotion\">Lot</option>\n\t\t\t\t\t\t\t<option value=\"Ointment\">Oin</option>\n\t\t\t\t\t\t\t<option value=\"Unit\">Unit</option>\n\t\t\t\t\t\t\t<option value=\"Box\">Box</option>\n\t\t\t\t\t\t\t<option value=\"Misc\">Misc</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</td>\n\n\t\t\t\t\t<td width=\"150px\" class=\"text-center\">\n\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Product\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\" [(ngModel)]=\"reqData.product[i]\" (keyup)=\"onTextChangeOfMedName(reqData.opt[i],$event.target.value)\" [matAutocomplete]=\"auto\" disabled=\"\">\n\t\t\t\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\" style=\"width:100%\">\n\t\t\t\t\t\t\t  <mat-option *ngFor=\"let option of productNameSuggestion\" [value]=\"option\">\n\t\t\t\t\t\t\t\t{{option}}\n\t\t\t\t\t\t\t  </mat-option>\n\t\t\t\t\t\t\t</mat-autocomplete>\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"85px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\"  [(ngModel)]=\"reqData.batch[i]\" disabled=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"110px\" class=\"text-center\">\n\t\t\t\t\t\t\t<span class=\"cstm-input cstm-2 input-inline\">\n\t\t\t\t\t\t\t\t<input style=\"padding:6px;\" type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" [(ngModel)]=\"reqData.month[i]\" disabled=\"\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>\n\t\t\t\t\t\t\t<span class=\"cstm-input cstm-2 input-inline\">\n\t\t\t\t\t\t\t\t<input style=\"padding:6px;\" type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" [(ngModel)]=\"reqData.year[i]\" disabled=\"\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"120px\" class=\"text-center\">\n\t\t\t\t\t\t\t<span class=\"cstm-input cstm-2 input-inline\">\n\t\t\t\t\t\t\t\t<input style=\"padding:6px;\"type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" [(ngModel)]=\"reqData.pack1[i]\" disabled=\"\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;X&nbsp;&nbsp;</span>\n\t\t\t\t\t\t\t<span class=\"cstm-input cstm-2 input-inline\">\n\t\t\t\t\t\t\t\t<input style=\"padding:6px;\" type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" [(ngModel)]=\"reqData.pack2[i]\" disabled=\"\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"80px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">          \n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" placeholder=\"\" [(ngModel)]=\"reqData.mrp[i]\" disabled=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"80px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"\" placeholder=\"\" value=\"{{returnPurchaseArray[i].qty}}\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<!-- <td width=\"80px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" disabled=\"{{getReturnStatus(i)}}\" placeholder=\"\" [(ngModel)]=\"reqData.quantity[i]\" (blur)=\"getTotalRecord(i)\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td> -->\n\n\t\t\t\t\t\t<td width=\"80px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" placeholder=\"\" [(ngModel)]=\"reqData.rate[i]\" (blur)=\"getTotalRecord(i)\" disabled=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"65px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" placeholder=\"\" [(ngModel)]=\"reqData.cgst[i]\" (blur)=\"getTotalRecord(i)\" disabled=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"65px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" placeholder=\"\"  [(ngModel)]=\"reqData.sgst[i]\" (blur)=\"getTotalRecord(i)\" disabled=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"70px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" placeholder=\"\" [(ngModel)]=\"reqData.discount[i]\" (blur)=\"getTotalRecord(i)\" disabled=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"80px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"\" placeholder=\"\" value=\"{{returnPurchaseArray[i].amount}}\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<!-- <td width=\"80px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" placeholder=\"\" [(ngModel)]=\"reqData.amount[i]\" (blur)=\"getTotalRecord(i)\"  disabled=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td> -->\n\t\t\t\t\t</tr>\n\t\t  \t</tbody>\n\t\t\t</table>\n\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"modal-footer\" >\n\t        <div class=\"col-lg-12\">\n\t        \t<div class=\"row\">\n\t         \t\t<div class=\"col-lg-3\">\n\t         \t\t\t<h3 class=\"mg-top\">Total Amount</h3>\n\t         \t\t</div>\n\t         \t\t<div class=\"col-lg-3 text-left\" style=\"margin-top: 15px\">\n\t         \t\t\t<button class=\"btn data-div\" readonly=\"\" disabled=\"\">\n\t\t\t\t\t\t\t<div>{{totalAmountOriginal}}</div>\n\t\t\t\t\t\t</button>\n\t         \t\t</div>\n\t         \t</div>\n\t        </div>\n\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-pharmacy/clinic-summary-pharmacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicSummaryPharmacyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClinicSummaryPharmacyComponent = /** @class */ (function () {
    function ClinicSummaryPharmacyComponent(UserService, toastr, datePipe) {
        this.UserService = UserService;
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
        this.returnQty = [];
    }
    ClinicSummaryPharmacyComponent.prototype.ngOnInit = function () {
        // this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails'])
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        this.salesBookArray = [];
        this.sortedData = [];
        this.sortedData2 = [];
        this.sortedData1 = [];
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.activatedtab = 0;
        this.activatetab(1);
    };
    ClinicSummaryPharmacyComponent.prototype.activatetab = function (i) {
        this.activatedtab = i;
        var object;
        object = {};
        var date = new Date();
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id,
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
        this.pharamacySalesBook(object);
        this.purchaseBook(object);
        this.getDocData(object);
        this.StockOnToday(object);
    };
    ClinicSummaryPharmacyComponent.prototype.pharamacySalesBook = function (object) {
        var _this = this;
        if (new Date(this.toDate).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        console.log(object);
        this.loading = true;
        this.salesBookArray = [];
        this.headerClicked = 0;
        this.totalAmountPharmacy = 0;
        this.totalCostPricePharmacy = 0;
        this.totalCostPharmacy = 0;
        this.UserService.SalesEntryBySmartPharmacyClinicSummary(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                // this.toastr.success(data.message, "Success")
                _this.salesBookArray = data.data;
                for (var i = 0; i < _this.salesBookArray.length; i++) {
                    _this.totalAmountPharmacy += _this.salesBookArray[i].total_amount;
                    _this.totalCostPricePharmacy += _this.salesBookArray[i].cost_amount;
                    _this.totalCostPharmacy += _this.salesBookArray[i].total_amount - _this.salesBookArray[i].cost_amount;
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
                // this.toastr.error(data.message, "Error")
            }
            console.log(_this.salesBookArray);
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    ClinicSummaryPharmacyComponent.prototype.purchaseBook = function (object) {
        var _this = this;
        this.totalBillPurchaseBook = 0;
        if (new Date(this.toDate1).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        this.loading = true;
        this.stockPurchaseArray = [];
        this.sortedData1 = [];
        this.headerClicked = 0;
        this.UserService.GetStockPurchaseBetweenTwoDatesClinicSummary(object).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                // this.toastr.success(data.message, "Success")
                _this.stockPurchaseArray = data.data;
                for (var i = 0; i < _this.stockPurchaseArray.length; i++) {
                    _this.stockPurchaseArray[i].amount = 0;
                    for (var ii = 0; ii < _this.stockPurchaseArray[i].stock.length; ii++) {
                        _this.totalBillPurchaseBook += _this.stockPurchaseArray[i].stock[ii].amount;
                        _this.stockPurchaseArray[i].amount += _this.stockPurchaseArray[i].stock[ii].amount;
                    }
                    if (_this.stockPurchaseArray[i].amount % 1 != 0) {
                        _this.stockPurchaseArray[i].amount = parseFloat(_this.stockPurchaseArray[i].amount.toFixed(2));
                    }
                }
                _this.sortedData1 = data.data.sort(function (a, b) {
                    return compare(a.stock[0].createdAt, b.stock[0].createdAt, false);
                });
                _this.sortedData1 = _this.stockPurchaseArray.slice();
            }
            else if (data.response == false) {
                // this.toastr.error(data.message, "Error")
            }
        }, function (err) {
            console.log(err);
        });
    };
    ClinicSummaryPharmacyComponent.prototype.StockOnToday = function (object) {
        var _this = this;
        if (new Date(this.toDate1).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        this.stockValuation = [];
        this.totalProducts = [];
        this.purchaseValueStock = 0;
        this.salesValueStock = 0;
        this.loading = true;
        this.stockArray = [];
        this.UserService.StockOnTodayClinicSummary(object).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                // this.toastr.success(data.message, "Success")
                _this.stockArray = data.data;
                _this.stockValuation = data.data;
                for (var i = 0; i < _this.stockArray.length; i++) {
                    _this.stockArray[i].stock = _this.stockArray[i].total_stock - _this.stockArray[i].sold_stock;
                    _this.stockArray[i].newPacking = Math.trunc(_this.stockArray[i].stock / (_this.stockArray[i].pack_units * _this.stockArray[i].pack_quantity));
                    _this.stockArray[i].newPackingReminder = _this.stockArray[i].stock % (_this.stockArray[i].pack_units * _this.stockArray[i].pack_quantity);
                    // this.stockArray[i].present_prate = Math.ceil(this.stockArray[i].amount*(this.stockArray[i].total_stock-this.stockArray[i].sold_stock)/
                    // 				  	(this.stockArray[i].pack_units*this.stockArray[i].pack_quantity))
                    // this.stockArray[i].present_mrate= Math.ceil(this.stockArray[i].mrp*(this.stockArray[i].total_stock-this.stockArray[i].sold_stock)/
                    // 				  	(this.stockArray[i].pack_units*this.stockArray[i].pack_quantity))
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
                    _this.salesValueStock += Math.ceil(_this.stockArray[i].present_mrate);
                    if (i == 0) {
                        _this.totalProducts.push(_this.stockArray[i]);
                    }
                    var boolean = false;
                    for (var j = 0; j < _this.totalProducts.length; j++) {
                        if (_this.stockArray[i].type == _this.totalProducts[j].type && _this.stockArray[i].product == _this.totalProducts[j].product) {
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        _this.totalProducts.push(_this.stockArray[i]);
                    }
                }
                var expiryValue = 0;
                for (var i = 0; i < data.dataExpiry.length; i++) {
                    data.dataExpiry[i].stock = data.dataExpiry[i].total_stock - data.dataExpiry[i].sold_stock;
                    data.dataExpiry[i].present_mrate = Math.ceil((data.dataExpiry[i].mrp * data.dataExpiry[i].stock) / (data.dataExpiry[i].pack_units * data.dataExpiry[i].pack_quantity));
                    expiryValue += Math.ceil(data.dataExpiry[i].present_mrate);
                }
                _this.sortedData2 = _this.stockValuation.slice();
            }
            else {
                // this.toastr.error(data.message, "Error")
            }
        }, function (err) {
            console.log(err);
        });
    };
    ClinicSummaryPharmacyComponent.prototype.getDocData = function (object) {
        var _this = this;
        if (new Date(this.toDate1).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        this.dataArray = [];
        this.otherSales = [];
        this.otherSalesPercent = 0;
        this.totalSalesOtherPercent = 0;
        this.totalSalesDoctorPlusWalkin = 0;
        this.totalSalesPerPresPercent = 0;
        this.totalSalesPerPres = 0;
        this.totalPrescriptions = 0;
        this.totalSales = 0;
        this.totalSalesWalkin = 0;
        this.totalConversion = 0;
        this.totalSalesAmount = 0;
        this.totalProfit = 0;
        this.loading = true;
        this.dataDoctors = [];
        this.UserService.PharmacyProgressTodayClinicSummary(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.dataDoctors = data.dataDoctors;
                _this.dataArray = data.data;
                _this.otherSales = data.data1;
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.dataArray[i].true_sales = [];
                    _this.dataArray[i].false_sales = [];
                    _this.dataArray[i].total_sales_amount = 0;
                    _this.dataArray[i].sales_per_pres = 0;
                    for (var j = 0; j < _this.dataArray[i].total_sales.length; j++) {
                        if (_this.dataArray[i].total_sales[j].pharmacy) {
                            _this.dataArray[i].total_sales_amount = _this.dataArray[i].total_sales_amount + _this.dataArray[i].total_sales[j].pharmacy_sales;
                            _this.totalProfit = _this.totalProfit + (_this.dataArray[i].total_sales[j].pharmacy_sales - _this.dataArray[i].total_sales[j].pharmacy_cost);
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
                    _this.totalProfit = _this.totalProfit + (data.data1[i].total_amount - data.data1[i].cost_amount);
                    _this.totalSalesWalkin = _this.totalSalesWalkin + data.data1[i].total_amount;
                }
                _this.totalSalesDoctorPlusWalkin = _this.getData(_this.totalSalesAmount + _this.totalSalesWalkin);
                // if(this.pharmacyData.doctorsRegisteredForSmartClinic.length>this.dataArray.length){
                // 	for (var i = 0; i < this.pharmacyData.doctorsRegisteredForSmartClinic.length; i++) {
                // 		var boolean = false
                // 		for (var j = 0; j < this.dataArray.length; j++) {
                // 			if(this.pharmacyData.doctorsRegisteredForSmartClinic[i]._id.toString() == this.dataArray[j]._id.toString()){
                // 				boolean = true
                // 				break		
                // 			}
                // 		}
                // 		if(boolean == false){
                // 			this.dataArray.push({
                // 				_id: this.pharmacyData.doctorsRegisteredForSmartClinic[i]._id,
                // 				total_sales: [],
                // 				true_sales: [],
                // 				total_sales_amount: 0,
                // 				conversion: 0,
                // 				sales_per_pres: 0
                // 			})
                // 		}
                // 	}
                // }
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
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    ClinicSummaryPharmacyComponent.prototype.getTotalRecord = function (i) {
        if (this.returnPurchaseArray[i].qty < this.reqData.quantity[i]) {
            this.toastr.warning("Return quantity can't exceed actual quantity", "Warning");
            return;
        }
        this.totalPRate = 0;
        this.newTotalCgst = 0;
        this.newATotalSgst = 0;
        this.newTotalDiscount = 0;
        this.totalNetAmount = 0;
        var rate;
        var cgst;
        var sgst;
        var discount;
        if (this.reqData.rate[i] == undefined || this.reqData.rate[i] == "") {
            rate = 0;
        }
        else {
            rate = this.reqData.rate[i];
        }
        if (this.reqData.cgst[i] == undefined || this.reqData.cgst[i] == "") {
            cgst = 0;
        }
        else {
            cgst = this.reqData.cgst[i];
        }
        if (this.reqData.sgst[i] == undefined || this.reqData.sgst[i] == "") {
            sgst = 0;
        }
        else {
            sgst = this.reqData.sgst[i];
        }
        if (this.reqData.discount[i] == undefined || this.reqData.discount[i] == "") {
            discount = 0;
        }
        else {
            discount = this.reqData.discount[i];
        }
        // this.reqData.amount[i] = rate + ((this.reqData.quantity[i] * (((cgst+sgst-discount)/100)*rate)))
        rate = rate * this.reqData.quantity[i];
        this.reqData.amount[i] = rate + (((cgst + sgst - discount) / 100) * rate);
        for (var j = 0; j < this.reqData.rate.length; j++) {
            if (this.reqData.rate[j]) {
                this.totalPRate += this.reqData.rate[j];
            }
        }
        for (var j = 0; j < this.reqData.cgst.length; j++) {
            if (this.reqData.cgst[j]) {
                this.newTotalCgst += this.reqData.cgst[j];
            }
        }
        for (var j = 0; j < this.reqData.sgst.length; j++) {
            if (this.reqData.sgst[j]) {
                if (this.reqData.sgst[j]) {
                    this.newATotalSgst += this.reqData.sgst[j];
                }
            }
        }
        for (var j = 0; j < this.reqData.discount.length; j++) {
            if (this.reqData.discount[j]) {
                this.newTotalDiscount += this.reqData.discount[j];
            }
        }
        for (var j = 0; j < this.reqData.amount.length; j++) {
            if (this.reqData.amount[j]) {
                this.totalNetAmount += this.reqData.amount[j];
            }
        }
        this.totalRefundAmount = 0;
        for (var ii = 0; ii < this.returnStatus.length; ii++) {
            if (this.returnStatus[ii] == true) {
                this.totalRefundAmount = this.totalRefundAmount + this.reqData.amount[ii];
            }
        }
        // this.totalNetAmount = this.totalNetAmount - this.returnEditable
        // this.partyTotal = Math.ceil(this.totalNetAmount)
    };
    ClinicSummaryPharmacyComponent.prototype.viewReturnData = function (item, data) {
        console.log(data);
        this.totalAmountOriginal = data.amount;
        this.totalRefundAmount = 0;
        this.returnPartyName = data.party_name;
        this.returnBillNo = data.stock[0].bill_no;
        this.totalTr = item;
        this.returnPurchaseArray = item;
        this.reqData = {};
        this.returnStatus = [];
        this.reqData.opt = [];
        this.reqData.product = [];
        this.reqData.pack1 = [];
        this.reqData.pack2 = [];
        this.reqData.quantity = [];
        this.reqData.mrp = [];
        this.reqData.rate = [];
        this.reqData.cgst = [];
        this.reqData.sgst = [];
        this.reqData.discount = [];
        this.reqData.amount = [];
        this.reqData.batch = [];
        this.reqData.month = [];
        this.reqData.year = [];
        this.reqData.id = [];
        for (var i = 0; i < item.length; i++) {
            this.returnStatus.push(false);
            this.reqData.id.push(item[i].id);
            this.reqData.opt.push(item[i].type);
            this.reqData.product.push(item[i].product);
            this.reqData.pack1.push(item[i].pack_units);
            this.reqData.pack2.push(item[i].pack_quantity);
            var amount = (item[i].amount / item[i].qty) * Math.trunc(item[i].current_stock / (item[i].pack_units * item[i].pack_quantity));
            // this.reqData.amount.push(amount)
            item[i].qty = Math.trunc(item[i].current_stock / (item[i].pack_units * item[i].pack_quantity));
            // this.reqData.quantity.push(item[i].qty)
            this.reqData.mrp.push(item[i].mrp);
            this.reqData.rate.push(item[i].p_rate);
            this.reqData.cgst.push(item[i].cgst);
            this.reqData.sgst.push(item[i].sgst);
            this.reqData.discount.push(item[i].discount);
            this.reqData.batch.push(item[i].batch);
            this.reqData.month.push(item[i].month);
            this.reqData.year.push(item[i].year);
            this.returnQty.push(item[i].qty);
        }
    };
    ClinicSummaryPharmacyComponent.prototype.sortData = function (sort) {
        var data = this.salesBookArray.slice();
        if (!sort.active || sort.direction === '') {
            this.salesBookArray = data;
            return;
        }
        this.salesBookArray = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'date': return compare(a.createdAt, b.createdAt, isAsc);
                case 'invoice': return compare(a.id, b.id, isAsc);
                case 'amount': return compare(a.total_amount, b.total_amount, isAsc);
                case 'cost': return compare(a.cost_amount, b.cost_amount, isAsc);
                case 'gross': return compare(a.total_amount - a.cost_amount, b.total_amount - a.cost_amount, isAsc);
                case 'profit': return compare(((a.total_amount - a.cost_amount) * a.cost_amount) / 100, ((b.total_amount - b.cost_amount) * b.cost_amount) / 100, isAsc);
                case 'patient': return compare(a.patient, b.patient, isAsc);
                default: return 0;
            }
        });
    };
    ClinicSummaryPharmacyComponent.prototype.sortData1 = function (sort) {
        var data = this.sortedData1.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData1 = data;
            return;
        }
        this.sortedData1 = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'createdAt': return compare(a.stock[0].createdAt, b.stock[0].createdAt, isAsc);
                case 'bill_no': return compare(a.stock[0].bill_no, b.stock[0].bill_no, isAsc);
                case 'party_name': return compare(a.party_name, b.party_name, isAsc);
                case 'amount': return compare(a.amount, b.amount, isAsc);
                default: return 0;
            }
        });
    };
    ClinicSummaryPharmacyComponent.prototype.sortData2 = function (sort) {
        var data = this.sortedData2.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData2 = data;
            return;
        }
        this.sortedData2 = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'product': return compare(a.product, b.product, isAsc);
                case 'type': return compare(a.type, b.type, isAsc);
                case 'batch': return compare(a.batch, b.batch, isAsc);
                case 'stock': return compare(a.stock, b.stock, isAsc);
                case 'p_rate': return compare(a.cost, b.cost, isAsc);
                case 'value': return compare(a.present_mrate, b.present_mrate, isAsc);
                case 'pvalue': return compare(a.present_prate, b.present_prate, isAsc);
                case 'packing': return compare(a.stock, b.stock, isAsc);
                case 'mrp': return compare(a.mrp, b.mrp, isAsc);
                default: return 0;
            }
        });
    };
    ClinicSummaryPharmacyComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    ClinicSummaryPharmacyComponent.prototype.getData = function (data) {
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
    ClinicSummaryPharmacyComponent.prototype.getTableHeaderClass = function (id) {
        if (this.headerClicked == id) {
            return 'selected';
        }
        else {
            return '';
        }
    };
    ClinicSummaryPharmacyComponent.prototype.setTableHeaderClass = function (id) {
        this.headerClicked = id;
    };
    ClinicSummaryPharmacyComponent.prototype.checkIsNan = function (data) {
        if (isNaN(data)) {
            return 0;
        }
        else {
            return data;
        }
    };
    ClinicSummaryPharmacyComponent.prototype.getPercentage = function (data, total) {
        return ((data * 100) / total);
    };
    ClinicSummaryPharmacyComponent.prototype.getDoctorName = function (id) {
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if (this.dataDoctors[i]._id == id) {
                return (this.dataDoctors[i].first_name);
            }
        }
    };
    ClinicSummaryPharmacyComponent.prototype.exportPdfProgress = function () {
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
            ob.Doctor = this.dataArray[i].first_name;
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
            Doctor: "Pharmacy Aggregates",
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
        doc.save('Pharmacy-BreakUp' + "(" + date + ")");
    };
    ClinicSummaryPharmacyComponent.prototype.go = function () {
        if (new Date(this.toDate1).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        this.activatedtab = 0;
        var object;
        object = {};
        object.start_date = this.fromDate1;
        object.end_date = this.toDate1;
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id;
        console.log(object);
        this.pharamacySalesBook(object);
        this.purchaseBook(object);
        this.getDocData(object);
        this.StockOnToday(object);
    };
    ClinicSummaryPharmacyComponent.prototype.getReturnStatus = function (i) {
        if (this.returnStatus[i] == true) {
            return false;
        }
        else {
            return true;
        }
    };
    ClinicSummaryPharmacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clinic-summary-pharmacy',
            template: __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-pharmacy/clinic-summary-pharmacy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-pharmacy/clinic-summary-pharmacy.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]])
    ], ClinicSummaryPharmacyComponent);
    return ClinicSummaryPharmacyComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-pharmacy/clinic-summary-pharmacy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicSummaryPharmacyModule", function() { return ClinicSummaryPharmacyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clinic_summary_pharmacy_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-pharmacy/clinic-summary-pharmacy-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clinic_summary_pharmacy_component__ = __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-pharmacy/clinic-summary-pharmacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ClinicSummaryPharmacyModule = /** @class */ (function () {
    function ClinicSummaryPharmacyModule() {
    }
    ClinicSummaryPharmacyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__clinic_summary_pharmacy_routing_module__["a" /* ClinicSummaryPharmacyRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_autocomplete__["a" /* MatAutocompleteModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__clinic_summary_pharmacy_component__["a" /* ClinicSummaryPharmacyComponent */]]
        })
    ], ClinicSummaryPharmacyModule);
    return ClinicSummaryPharmacyModule;
}());



/***/ })

});
//# sourceMappingURL=clinic-summary-pharmacy.module.chunk.js.map