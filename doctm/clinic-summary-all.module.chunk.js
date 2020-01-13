webpackJsonp(["clinic-summary-all.module"],{

/***/ "../../../../../src/app/header-two-layout/clinic-summary-all/clinic-summary-all-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicSummaryAllRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clinic_summary_all_component__ = __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-all/clinic-summary-all.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__clinic_summary_all_component__["a" /* ClinicSummaryAllComponent */],
    }
];
var ClinicSummaryAllRoutingModule = /** @class */ (function () {
    function ClinicSummaryAllRoutingModule() {
    }
    ClinicSummaryAllRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ClinicSummaryAllRoutingModule);
    return ClinicSummaryAllRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-all/clinic-summary-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.cus-content-wrapper{\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n.hding > h3{\r\n    margin: 0px;\r\n    padding:15px 0px;\r\n    background-color: #d9e0dd; \r\n}\r\n.hding  h5.btm{\r\n    margin: 0px;\r\n    padding:15px 0px;\r\n    background-color: #d9e0dd; \r\n}\r\n.cstm-tbl{\r\n    width: 100%;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n}\r\n.clr-vlt{\r\n    color: #5c62af;\r\n}\r\n.tb-1{\r\n    margin-top:15px;\r\n}\r\n.tb-1 tr td{\r\n    padding:2px 8px;\r\n    vertical-align: middle; \r\n}\r\n.cstm-tbl tr{\r\n    height:40px;\r\n}\r\n.footer-cstm-an{\r\n    position: fixed;\r\n    float: left;\r\n    width: 100%;\r\n    bottom:0px;\r\n    background: #00b0f0;\r\n    color:#fff;\r\n    z-index: 99;\r\n    padding-top: 8px;\r\n}\r\n.mt-table h3{\r\n    margin-top: 0px;\r\n}\r\n.cstm-tr{\r\n    background-color:#92d050;\r\n    color:#fff;\r\n    text-align: center;\r\n}\r\n.cstm-tr-2{\r\n    background-color:#c5d8f1;\r\n}\r\n.cstm-tr-2 td{\r\n    border-right:1px solid #bbb; \r\n}\r\n.cstm-tr-2 td:last-child {\r\n border-right: none;\r\n}\r\n.cstm-tr-3{\r\n    border-bottom:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td{\r\n    border-right:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td:last-child {\r\n border-right: none;\r\n}\r\n.color-red {\r\n    color: #ff0000;\r\n    -webkit-transform: translateY(-8px);\r\n            transform: translateY(-8px);\r\n}\r\n.cstm-tr-4{\r\n    background-color: #f2dada;\r\n}\r\n.cstm-mg{\r\n    margin-top: 5px;\r\n}\r\n.btn-go{\r\n    background-color: transparent;\r\n    border: 1px solid #002160;\r\n    margin-bottom: 5px;\r\n    min-width: 62%;\r\n}\r\n.btn-go:hover{\r\n    -webkit-transition: 300ms;\r\n    transition: 300ms;\r\n    background: #98C74F;\r\n    border-color: #98C74F;\r\n    color: #fff;\r\n}\r\n.li-cstm a{\r\n    text-align: center!important;\r\n    background: #000!important;\r\n    color: #fff!important;\r\n    font-size: 16px!important;\r\n    font-weight: inherit!important;\r\n    padding: 6px!important;\r\n}\r\n.cus-sidebar{\r\n    height: inherit!important;\r\n}\r\n/*karam @ 2019*/\r\n.side-bar-cstm{\r\n    z-index: 99;\r\n}\r\n.res-tab-2{\r\n    max-height: 225px;\r\n}\r\n.cstm-ul-new li{\r\n    width:170px;\r\n}\r\n.cstm-ul-new li a{\r\n    background-color:transparent;\r\n    color:#000;\r\n    padding:10px;\r\n    cursor: pointer;\r\n    border-radius: 0px;\r\n    border-bottom: 2px solid transparent; \r\n    text-align: center;\r\n}\r\n.cstm-ul-new li.active a{\r\n    background-color: #e0e0e0;\r\n    color: #000;\r\n    border-bottom: 2px solid #00b0f0;\r\n}\r\n.tab-new{\r\n    min-height: 450px;\r\n    max-height: 450px;\r\n    padding: 0px 8px;\r\n    border-left: 1px solid #dcdcdc;\r\n    border-right: 1px solid #dcdcdc;\r\n    overflow-x: hidden;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n    font-weight: bold;\r\n}\r\n/*karam@30-jan-2019*/\r\n/*.tab-new-cstm tr td{\r\n    font-size: 10px;\r\n}*/\r\n.brder-cstm{\r\n    padding-bottom: 1px;\r\n    margin-bottom: 6px;\r\n    border-bottom: 1px solid #a7a7a7;\r\n    position: relative;\r\n}\r\n.brder-cstm::after{\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 6px;\r\n    width: 12px;\r\n    background-color: #ffffff;\r\n    top: 41px;\r\n    right: -3px;\r\n     \r\n}\r\n.cus-sidebar ul{\r\n    border:1px solid #a7a7a7;\r\n}\r\n.mg-0{\r\n    margin-top: 0px;\r\n}\r\n.mg-bt{\r\n    margin-bottom:2px; \r\n}\r\n.txt-thm{\r\n    color: rgb(0,32,96);\r\n}\r\n.txt-thm-1{\r\n    color: rgb(0,112,192);\r\n}\r\n.foot-2{\r\n    border-bottom:1px solid #a7a7a7;\r\n    word-spacing: 14px;\r\n}\r\n.hdr-2{\r\n    padding-bottom: 8px;\r\n    border-bottom:1px solid #a7a7a7;\r\n}\r\n.brdr-lft{\r\n    margin-left:-5px;\r\n    border-left:1px solid #a7a7a7; \r\n}\r\n.evn{\r\n    background-color:#eff3ef;\r\n}\r\n.odd{\r\n    background-color:#e3e3e3;\r\n}\r\n.new-ul-1 li a{\r\n    height: 55px;\r\n    line-height: 3;\r\n}\r\n.new-table-24 tr td{\r\n    border-right:1px solid #fff;\r\n}\r\n.new-table-24 tr:last-child{\r\n    border-right:none;\r\n}\r\nli.clz a{\r\n    line-height:1.5!important;\r\n}\r\ntr.tbl-blk-hd{\r\n    background:rgb(0,112,192);\r\n    color:#fff;\r\n}\r\ntr.tbl-blk-hd td{\r\n    border-right:1px solid #fff;\r\n}\r\ntr.tbl-blk-hd:last-child{\r\n    border-right: none;\r\n}\r\n.tbl-hd-2{\r\n    background-color: #000;\r\n    color: #fff;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n.new-table-24 tr td{\r\n    padding: 4.5px 15px!important;\r\n}\r\n/*.tbl-blk-hd{\r\n    height: 45px;\r\n}\r\n.tbl-blk-hd td{\r\n    padding: 12px!important;\r\n}*/\r\n/*kjdf=========================*/\r\n.cstm-row{\r\n    margin-top: 20px;\r\n}\r\n.cstm-row button{\r\n    margin-top:38px;\r\n}\r\n.cstm-hdr{\r\n    margin-top: 15px;\r\n}\r\n.tbl-head{\r\n    margin-bottom:2px;\r\n    margin-top:20px;\r\n}\r\n.tbl-head tr {\r\n    border-top:1px solid #fff!important;\r\n    border-left:1px solid #fff!important;\r\n    border-right:1px solid #fff!important;\r\n}\r\n.tbl-head tr th{\r\n    background-color:#A1D253!important;\r\n    border-color:#fff;\r\n    color: black;\r\n}\r\n.table-bordered > tbody > tr > td{\r\n    border: 1px solid #fff;\r\n}\r\n.tbl-cntrol{\r\n    min-height:300px;\r\n    max-height: 300px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n.tbl-cntrol .tbl-data{\r\n    min-width: 882px;\r\n}\r\n.btn-wrap{\r\n    margin-top: 20px;\r\n}\r\n.btn-grin{\r\n    background-color:rgb(161, 210, 83);\r\n}\r\n.btn-grin-2{\r\n    padding:20px 30px; \r\n}\r\n.btn-wrap button{\r\n    margin-right: 10px;\r\n}\r\n.btn-red-1{\r\n    background-color: #FF0000;\r\n}\r\n.btn-ornge{\r\n    background-color: #E36C09;\r\n}\r\n.table{\r\n    margin-bottom:5px;\r\n    font-size: 17px;\r\n}\r\n.cstm-th tr th{\r\n    background-color: #A1D253;\r\n    color: black;\r\n    border:1px solid #fff;\r\n}\r\n.cstm-caret {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 70.5px;\r\n    background-color: #01b0f0;\r\n    z-index: 9;\r\n    right: 20px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 12px dashed;\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n}\r\n.cstm-caret-big {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 22px;\r\n    background-color: #01b0f0;\r\n    z-index: 1;\r\n    right: 5px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 17px dashed;\r\n    border-right: 14px solid transparent;\r\n    border-left: 14px solid transparent;\r\n}\r\n.cstm-crt-wrap {\r\n    position: relative;\r\n}\r\n.regis-modal-body .select-opt .disabled {\r\n    color: #ddd;\r\n}\r\n.select-doctor{\r\n    background-color: #01b0f0;\r\n    margin-top: 55px;\r\n    color: #fff;\r\n    margin-bottom: 15px;\r\n}\r\n.new-thd th {\r\n    color: #fff;\r\n    background-color: #A1D253;\r\n    border: 1px solid #fff;\r\n    color: black;\r\n}\r\n.new-thd {\r\n    color: #fff;\r\n    background-color: #A1D253;\r\n    border: 1px solid #fff;\r\n    color: black;\r\n}\r\n.tbl-cntrol{\r\n    min-height:100px;\r\n    max-height: 380px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n.tbl-cntrol .tbl-data{\r\n    min-width: 880px;\r\n}\r\nth.selected{\r\n    background-color: #00b0f0!important;\r\n}\r\n.cstm-name{\r\n    background-color: #01B0F0;\r\n    color: white;\r\n}\r\n.cstm-blue{\r\n    background-color: #4978C6;\r\n    color: white;\r\n}\r\ntr td , tr th {\r\n    vertical-align: center;\r\n    vertical-align: middle;\r\n}\r\n.tfoot td{\r\n    padding:15px 0px; \r\n}\r\n.fix-footer{\r\n    position: fixed;\r\n    bottom:0;\r\n    margin-bottom: 10px;\r\n}\r\n.fontsmall{\r\n    font-size: 50%;\r\n    color: black;\r\n}\r\n/*#01B0F0*/\r\nh3.dt{\r\n    color:#416bb1;\r\n    text-align: center;\r\n}\r\nh3.dt > span{\r\n    color:#000;\r\n    text-align: center;\r\n}\r\n.cstm-ul-new-width li{\r\n    width:50%;\r\n}\r\n.tab-12 th{\r\n    padding: 10px;\r\n    border:1px solid #ddd;\r\n}\r\n.tab-12 tr td{\r\n     padding: 10px;\r\n    border:1px solid #ddd!important;\r\n}\r\n.high-light-clr{\r\n    background: rgb(238,236,255);\r\n}\r\n/*another table styling*/\r\n.cntrst{\r\n    background-color:rgb(215,228,189); \r\n}\r\n.vlt{\r\n    background: rgb(179,162,199);\r\n}\r\n.grin-new{\r\n    background:rgb(146,208,80);\r\n}\r\n.blk{\r\n    border-color:#000!important;\r\n   background: #000!important;\r\n   color: #fff!important; \r\n}\r\n.ornge{\r\n    color:orange;\r\n}\r\n.clinic-tab > tbody > tr > td > div{\r\n    font-size:20px!important;\r\n}\r\n.clinic-tab > tbody  > tr  > td{\r\n    border: 1px solid #000;\r\n}\r\n.grin-new div b{\r\n    font-size: 25px;\r\n}\r\n.tr-head td{\r\n    font-size: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-all/clinic-summary-all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"analytics-sec\">\n\t\n\t<div class=\"ipd-deatil-sec\">\n\t\t<div class=\"inner-tab\">\n\t\t\t<ul class=\"nav nav-tabs new-ul-1\" role=\"tablist\">\n\t\t\t\t<li role=\"presentation\"  class=\"clz\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-opd\"> <div>OPD</div><small> (All Doctors)</small> </a></li>\n\t\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-pharmacy\">Pharmacy</a></li>\n\t\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-diagnostic\"> Diagnostics </a></li>\n\t\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-ipd\"> IPD </a></li>\n\t\t\t\t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-all\">Summary</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"ipd-body\">\n\t\t\t<div class=\"cus-sidebar-wrapper side-bar-cstm\">\n\t\t\t\t<div class=\"cus-sidebar\">\n\t\t\t\t\t<ul> \n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>From</b></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-9\">\n\t\t\t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t\t\t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"fromDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>To</b></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-9\">\n\t\t\t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t\t\t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"toDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"text-right brder-cstm\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12 text-center\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-go\" (click)=\"go()\">Go</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"li-cstm\"> <a href=\"javascript:void(0);\"> For Past</a> </li>\n\t\t\t\t\t\t<!-- <li class=\"{{getClass(0)}}\" (click)=\"activatetab(0)\" class=\"active\"> <a href=\"javascript:void(0);\"> Current </a> </li> -->\n\t\t\t\t\t\t<li class=\"{{getClass(1)}}\" (click)=\"activatetab(1)\"> <a href=\"javascript:void(0);\"> 1 Week &nbsp;<small *ngIf=\"activatedtab==1\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(2)}}\" (click)=\"activatetab(2)\"> <a href=\"javascript:void(0);\"> 2 Weeks &nbsp;<small *ngIf=\"activatedtab==2\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small>  </a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month &nbsp;<small *ngIf=\"activatedtab==3\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month &nbsp;<small *ngIf=\"activatedtab==4\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month &nbsp;<small *ngIf=\"activatedtab==5\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year &nbsp;<small *ngIf=\"activatedtab==6\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> All </a> </li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"stock-tab\">\n\t\t\t\t<div class=\"col-lg-10 col-lg-offset-2\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t<table class=\"table clinic-tab\">\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr class=\"cntrst\">\n\t\t\t\t\t\t\t\t\t\t<td rowspan=\"2\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<div>Services</div> <div>&</div><div> Doctors</div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center\"><b>OPD</b></td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center\"><b>PHARMACY</b></td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center\"><b>DIAGNOSTICS</b></td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center\"><b>IPD</b></td>\n\t\t\t\t\t\t\t\t\t\t\t<td rowspan=\"2\" class=\"text-center\"><div>TOTAL </div><small>(Rs.)</small></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"tr-head\">\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Collection</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Patients </td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Sales</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Profit </td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Collection </td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Orders </td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Collection</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Admission</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\" *ngFor=\"let dr of dataSummaryArray\">\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\"><div>Dr. {{getDoctorName(dr.doctor_id)}}</div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.collection}}</small></div><div><small>({{dr.collectionPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.patients}}</small></div><div><small>({{dr.patientsPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div class=\"ornge\"><small>{{dr.sales}}</small></div><div class=\"ornge\"><small>({{dr.salesPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.profit}}</small></div><div><small>({{dr.profitPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.collectionDiagnostics}}</small></div><div><small>({{dr.collectionDiagnosticsPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.orders}}</small></div><div><small>({{dr.ordersPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.collectionIpd}}</small></div><div><small>({{dr.collectionIpdPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><small>{{dr.ordersIpd}}</small></div><div><small>({{dr.ordersIpdPerc}}%)</small></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div><b>{{dr.totalCollection}}</b></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div><b>({{dr.totalCollectionPerc}}%)</b></div>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr> \n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">Other Sales</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">N.A</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">N.A</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">0</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">0</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">0</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">0</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">N.A</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">N.A</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">0</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"cntrst\">\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>Total</b></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{opdCollection}}</b></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{patientsArray.length}}</b></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{pharmacySales}}</b></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center vlt\"><div><b>{{pharmacyProfit}}</b></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{diagnosticsCollection}}</b></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{diagnosticsOrders}}</b></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{ipdCollection}}</b></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><div><b>{{ipdAdmission}}</b></div></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center grin-new\"><div><b>{{totalClinicCollection}}</b></div></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 text-right\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom blk\">\n\t\t\t\t\t\t\t\t\t\t\t<small>Total clinic collection </small> <span><b>: Rs. {{totalClinicCollection}}</b></span>\n\t\t\t\t\t\t\t\t\t\t</button>&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-primary\" (click)=\"exportPdf()\">  \n\t\t\t\t\t\t\t\t\t\t\t<div>Export</div>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-all/clinic-summary-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicSummaryAllComponent; });
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




var ClinicSummaryAllComponent = /** @class */ (function () {
    function ClinicSummaryAllComponent(userService, toastr, datePipe) {
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
    }
    ClinicSummaryAllComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        this.dataSummaryArray = [];
        this.patientsArray = [];
        this.activatedtab = 0;
        this.activatetab(1);
    };
    ClinicSummaryAllComponent.prototype.activatetab = function (i) {
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
        this.AllClinicSummary(object);
    };
    ClinicSummaryAllComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    ClinicSummaryAllComponent.prototype.getData = function (data) {
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
    ClinicSummaryAllComponent.prototype.go = function () {
        this.activatedtab = 0;
        var object;
        object = {};
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id;
        object.start_date = this.fromDate1;
        object.end_date = this.toDate1;
        console.log(object);
        this.AllClinicSummary(object);
    };
    ClinicSummaryAllComponent.prototype.AllClinicSummary = function (object) {
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
                                _this.dataSummaryArray[j].collection += parseInt(data.dataRegistrations[i].data[k].fee);
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
                            collection += parseInt(data.dataRegistrations[i].data[k].fee);
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
                                _this.dataSummaryArray[j].collection += parseInt(data.dataDispensed[i].data[k].registration.fee);
                            }
                            boolean = true;
                        }
                    }
                    if (boolean == false) {
                        var collection;
                        collection = 0;
                        for (var k = 0; k < data.dataDispensed[i].data.length; k++) {
                            _this.addPatient(data.dataDispensed[i].data[k].registration.pateintName, data.dataDispensed[i].data[k].registration.pateintPhone, data.dataDispensed[i]._id);
                            collection += parseInt(data.dataDispensed[i].data[k].registration.fee);
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
                for (var i = 0; i < data.dataSalesEntryDiagnostics.length; i++) {
                    data.dataSalesEntryDiagnostics[i].doctor_id = _this.getDoctorIdDiagnostics(data.dataSalesEntryDiagnostics[i]._id);
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
                        // tslint:disable-next-line:indent
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
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    ClinicSummaryAllComponent.prototype.addPatient = function (name, num, doctor) {
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
    ClinicSummaryAllComponent.prototype.getDoctorName = function (id) {
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if (this.dataDoctors[i]._id == id) {
                var name = this.dataDoctors[i].first_name.split(' ');
                return (name[0]);
            }
        }
    };
    ClinicSummaryAllComponent.prototype.getDoctorIdPharmacy = function (id) {
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if (this.dataDoctors[i].smart_pharmacy_id == id) {
                return this.dataDoctors[i]._id;
            }
        }
    };
    ClinicSummaryAllComponent.prototype.getDoctorIdDiagnostics = function (id) {
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if (this.dataDoctors[i].smart_diagnostics_id == id) {
                return this.dataDoctors[i]._id;
            }
        }
    };
    ClinicSummaryAllComponent.prototype.exportPdf = function () {
        var head = [
            { title: 'Doctor', dataKey: "doctor" },
            { title: 'OPD Collection', dataKey: "collection" },
            { title: 'OPD Patients', dataKey: "patients" },
            { title: 'Pharmacy Sales', dataKey: "sales" },
            { title: 'Pharmacy Profit', dataKey: "profit" },
            { title: 'Diagnostics Collection', dataKey: "collectionDiagnostics" },
            { title: 'Diagnostics Orders', dataKey: "orders" },
            { title: 'IPD Collection', dataKey: "collectionIpd" },
            { title: 'IPD Admission', dataKey: "ordersIpd" },
            { title: 'Total (Rs)', dataKey: "totalCollection" },
        ];
        var csvData = [];
        for (var i = 0; i < this.dataSummaryArray.length; i++) {
            var ob;
            ob = {};
            ob.doctor = "Dr. " + this.getDoctorName(this.dataSummaryArray[i].doctor_id);
            ob.collection = this.dataSummaryArray[i].collection + " (" + this.dataSummaryArray[i].collectionPerc + "%)";
            ob.patients = this.dataSummaryArray[i].patients + " (" + this.dataSummaryArray[i].patientsPerc + "%)";
            ob.sales = this.dataSummaryArray[i].sales + " (" + this.dataSummaryArray[i].salesPerc + "%)";
            ob.profit = this.dataSummaryArray[i].profit + " (" + this.dataSummaryArray[i].profitPerc + "%)";
            ob.collectionDiagnostics = this.dataSummaryArray[i].collectionDiagnostics + " (" + this.dataSummaryArray[i].collectionDiagnosticsPerc + "%)";
            ob.orders = this.dataSummaryArray[i].orders + " (" + this.dataSummaryArray[i].ordersPerc + "%)";
            ob.collectionIpd = this.dataSummaryArray[i].collectionIpd + " (" + this.dataSummaryArray[i].collectionIpdPerc + "%)";
            ob.ordersIpd = this.dataSummaryArray[i].ordersIpd + " (" + this.dataSummaryArray[i].ordersIpdPerc + "%)";
            ob.totalCollection = this.dataSummaryArray[i].totalCollection + " (" + this.dataSummaryArray[i].totalCollectionPerc + "%)";
            csvData.push(ob);
        }
        csvData.push({
            doctor: "Total",
            collection: this.opdCollection,
            patients: this.patientsArray.length,
            sales: this.pharmacySales,
            profit: this.pharmacyProfit,
            collectionDiagnostics: this.diagnosticsCollection,
            orders: this.diagnosticsOrders,
            collectionIpd: this.ipdCollection,
            ordersIpd: this.ipdAdmission,
            totalCollection: this.totalClinicCollection
        });
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
        doc.save('ClinicSummary');
    };
    ClinicSummaryAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clinic-summary-all',
            template: __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-all/clinic-summary-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-all/clinic-summary-all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], ClinicSummaryAllComponent);
    return ClinicSummaryAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-all/clinic-summary-all.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicSummaryAllModule", function() { return ClinicSummaryAllModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clinic_summary_all_component__ = __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-all/clinic-summary-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clinic_summary_all_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-all/clinic-summary-all-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ClinicSummaryAllModule = /** @class */ (function () {
    function ClinicSummaryAllModule() {
    }
    ClinicSummaryAllModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__clinic_summary_all_routing_module__["a" /* ClinicSummaryAllRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__clinic_summary_all_component__["a" /* ClinicSummaryAllComponent */]]
        })
    ], ClinicSummaryAllModule);
    return ClinicSummaryAllModule;
}());



/***/ })

});
//# sourceMappingURL=clinic-summary-all.module.chunk.js.map