webpackJsonp(["clinic-summary-ipd.module"],{

/***/ "../../../../../src/app/header-two-layout/clinic-summary-ipd/clinic-summary-ipd-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicSummaryIpdRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clinic_summary_ipd_component__ = __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-ipd/clinic-summary-ipd.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__clinic_summary_ipd_component__["a" /* ClinicSummaryIpdComponent */],
    }
];
var ClinicSummaryIpdRoutingModule = /** @class */ (function () {
    function ClinicSummaryIpdRoutingModule() {
    }
    ClinicSummaryIpdRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ClinicSummaryIpdRoutingModule);
    return ClinicSummaryIpdRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-ipd/clinic-summary-ipd.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.cus-content-wrapper{\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n.hding > h3{\r\n    margin: 0px;\r\n    padding:15px 0px;\r\n    background-color: #d9e0dd; \r\n}\r\n.hding  h5.btm{\r\n    margin: 0px;\r\n    padding:15px 0px;\r\n    background-color: #d9e0dd; \r\n}\r\n.cstm-tbl{\r\n    width: 100%;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n}\r\n.clr-vlt{\r\n    color: #5c62af;\r\n}\r\n.tb-1{\r\n    margin-top:15px;\r\n}\r\n.tb-1 tr td{\r\n    padding:2px 8px;\r\n    vertical-align: middle; \r\n}\r\n.cstm-tbl tr{\r\n    height:40px;\r\n}\r\n.footer-cstm-an{\r\n    position: fixed;\r\n    float: left;\r\n    width: 100%;\r\n    bottom:0px;\r\n    background: #00b0f0;\r\n    color:#fff;\r\n    z-index: 99;\r\n    padding-top: 8px;\r\n}\r\n.mt-table h3{\r\n    margin-top: 0px;\r\n}\r\n.cstm-tr{\r\n    background-color:#92d050;\r\n    color:#fff;\r\n    text-align: center;\r\n}\r\n.cstm-tr-2{\r\n    background-color:#c5d8f1;\r\n}\r\n.cstm-tr-2 td{\r\n    border-right:1px solid #bbb; \r\n}\r\n.cstm-tr-2 td:last-child {\r\n border-right: none;\r\n}\r\n.cstm-tr-3{\r\n    border-bottom:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td{\r\n    border-right:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td:last-child {\r\n border-right: none;\r\n}\r\n.color-red {\r\n    color: #ff0000;\r\n    -webkit-transform: translateY(-8px);\r\n            transform: translateY(-8px);\r\n}\r\n.cstm-tr-4{\r\n    background-color: #f2dada;\r\n}\r\n.cstm-mg{\r\n    margin-top: 5px;\r\n}\r\n.btn-go{\r\n    background-color: transparent;\r\n    border: 1px solid #002160;\r\n    margin-bottom: 5px;\r\n    min-width: 62%;\r\n}\r\n.btn-go:hover{\r\n    -webkit-transition: 300ms;\r\n    transition: 300ms;\r\n    background: #98C74F;\r\n    border-color: #98C74F;\r\n    color: #fff;\r\n}\r\n.li-cstm a{\r\n    text-align: center!important;\r\n    background: #000!important;\r\n    color: #fff!important;\r\n    font-size: 16px!important;\r\n    font-weight: inherit!important;\r\n    padding: 6px!important;\r\n}\r\n.cus-sidebar{\r\n    height: inherit!important;\r\n}\r\n/*karam @ 2019*/\r\n.side-bar-cstm{\r\n    z-index: 99;\r\n}\r\n.res-tab-2{\r\n    max-height: 225px;\r\n}\r\n.cstm-ul-new li{\r\n    width:170px;\r\n}\r\n.cstm-ul-new li a{\r\n    background-color:transparent;\r\n    color:#000;\r\n    padding:10px;\r\n    cursor: pointer;\r\n    border-radius: 0px;\r\n    border-bottom: 2px solid transparent; \r\n    text-align: center;\r\n}\r\n.cstm-ul-new li.active a{\r\n    background-color: #e0e0e0;\r\n    color: #000;\r\n    border-bottom: 2px solid #00b0f0;\r\n}\r\n.tab-new{\r\n    min-height: 450px;\r\n    max-height: 450px;\r\n    padding: 0px 8px;\r\n    border-left: 1px solid #dcdcdc;\r\n    border-right: 1px solid #dcdcdc;\r\n    overflow-x: hidden;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n    font-weight: bold;\r\n}\r\n/*karam@30-jan-2019*/\r\n/*.tab-new-cstm tr td{\r\n    font-size: 10px;\r\n}*/\r\n.brder-cstm{\r\n    padding-bottom: 1px;\r\n    margin-bottom: 6px;\r\n    border-bottom: 1px solid #a7a7a7;\r\n    position: relative;\r\n}\r\n.brder-cstm::after{\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 6px;\r\n    width: 12px;\r\n    background-color: #ffffff;\r\n    top: 41px;\r\n    right: -3px;\r\n     \r\n}\r\n.cus-sidebar ul{\r\n    border:1px solid #a7a7a7;\r\n}\r\n.mg-0{\r\n    margin-top: 0px;\r\n}\r\n.mg-bt{\r\n    margin-bottom:2px; \r\n}\r\n.txt-thm{\r\n    color: rgb(0,32,96);\r\n}\r\n.txt-thm-1{\r\n    color: rgb(0,112,192);\r\n}\r\n.foot-2{\r\n    border-bottom:1px solid #a7a7a7;\r\n    word-spacing: 14px;\r\n}\r\n.hdr-2{\r\n    padding-bottom: 8px;\r\n    border-bottom:1px solid #a7a7a7;\r\n}\r\n.brdr-lft{\r\n    margin-left:-5px;\r\n    border-left:1px solid #a7a7a7; \r\n}\r\n.evn{\r\n    background-color:#eff3ef;\r\n}\r\n.odd{\r\n    background-color:#e3e3e3;\r\n}\r\n.new-ul-1 li a{\r\n    height: 55px;\r\n    line-height: 3;\r\n}\r\n.new-table-24 tr td{\r\n    border-right:1px solid #fff;\r\n}\r\n.new-table-24 tr:last-child{\r\n    border-right:none;\r\n}\r\nli.clz a{\r\n    line-height:1.5!important;\r\n}\r\ntr.tbl-blk-hd{\r\n    background:rgb(0,112,192);\r\n    color:#fff;\r\n}\r\ntr.tbl-blk-hd td{\r\n    border-right:1px solid #fff;\r\n}\r\ntr.tbl-blk-hd:last-child{\r\n    border-right: none;\r\n}\r\n.tbl-hd-2{\r\n    background-color: #000;\r\n    color: #fff;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n.new-table-24 tr td{\r\n    padding: 4.5px 15px!important;\r\n}\r\n/*.tbl-blk-hd{\r\n    height: 45px;\r\n}\r\n.tbl-blk-hd td{\r\n    padding: 12px!important;\r\n}*/\r\n/*kjdf=========================*/\r\n.cstm-row{\r\n    margin-top: 20px;\r\n}\r\n.cstm-row button{\r\n    margin-top:38px;\r\n}\r\n.cstm-hdr{\r\n    margin-top: 15px;\r\n}\r\n.tbl-head{\r\n    margin-bottom:2px;\r\n    margin-top:20px;\r\n}\r\n.tbl-head tr {\r\n    border-top:1px solid #fff!important;\r\n    border-left:1px solid #fff!important;\r\n    border-right:1px solid #fff!important;\r\n}\r\n.tbl-head tr th{\r\n    background-color:#A1D253!important;\r\n    border-color:#fff;\r\n    color: black;\r\n}\r\n.table-bordered > tbody > tr > td{\r\n    border: 1px solid #fff;\r\n}\r\n.tbl-cntrol{\r\n    min-height:300px;\r\n    max-height: 300px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n.tbl-cntrol .tbl-data{\r\n    min-width: 882px;\r\n}\r\n.btn-wrap{\r\n    margin-top: 20px;\r\n}\r\n.btn-grin{\r\n    background-color:rgb(161, 210, 83);\r\n}\r\n.btn-grin-2{\r\n    padding:20px 30px; \r\n}\r\n.btn-wrap button{\r\n    margin-right: 10px;\r\n}\r\n.btn-red-1{\r\n    background-color: #FF0000;\r\n}\r\n.btn-ornge{\r\n    background-color: #E36C09;\r\n}\r\n.table{\r\n    margin-bottom:5px;\r\n    font-size: 17px;\r\n}\r\n.cstm-th tr th{\r\n    background-color: #A1D253;\r\n    color: black;\r\n    border:1px solid #fff;\r\n}\r\n.cstm-caret {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 70.5px;\r\n    background-color: #01b0f0;\r\n    z-index: 9;\r\n    right: 20px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 12px dashed;\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n}\r\n.cstm-caret-big {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 22px;\r\n    background-color: #01b0f0;\r\n    z-index: 1;\r\n    right: 5px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 17px dashed;\r\n    border-right: 14px solid transparent;\r\n    border-left: 14px solid transparent;\r\n}\r\n.cstm-crt-wrap {\r\n    position: relative;\r\n}\r\n.regis-modal-body .select-opt .disabled {\r\n    color: #ddd;\r\n}\r\n.select-doctor{\r\n    background-color: #01b0f0;\r\n    margin-top: 55px;\r\n    color: #fff;\r\n    margin-bottom: 15px;\r\n}\r\n.new-thd th {\r\n    color: #fff;\r\n    background-color: #A1D253;\r\n    border: 1px solid #fff;\r\n    color: black;\r\n}\r\n.new-thd {\r\n    color: #fff;\r\n    background-color: #A1D253;\r\n    border: 1px solid #fff;\r\n    color: black;\r\n}\r\n.tbl-cntrol{\r\n    min-height:100px;\r\n    max-height: 380px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n.tbl-cntrol .tbl-data{\r\n    min-width: 880px;\r\n}\r\nth.selected{\r\n    background-color: #00b0f0!important;\r\n}\r\n.cstm-name{\r\n    background-color: #01B0F0;\r\n    color: white;\r\n}\r\n.cstm-blue{\r\n    background-color: #4978C6;\r\n    color: white;\r\n}\r\ntr td , tr th {\r\n    vertical-align: center;\r\n    vertical-align: middle;\r\n}\r\n.tfoot td{\r\n    padding:15px 0px; \r\n}\r\n.fix-footer{\r\n    position: fixed;\r\n    bottom:0;\r\n    margin-bottom: 10px;\r\n}\r\n.fontsmall{\r\n    font-size: 50%;\r\n    color: black;\r\n}\r\n/*#01B0F0*/\r\nh3.dt{\r\n    color:#416bb1;\r\n    text-align: center;\r\n}\r\nh3.dt > span{\r\n    color:#000;\r\n    text-align: center;\r\n}\r\n.cstm-ul-new-width li{\r\n    width:50%;\r\n}\r\n.tab-12 th{\r\n    padding: 10px;\r\n    border:1px solid #ddd;\r\n}\r\n.tab-12 tr td{\r\n     padding: 10px;\r\n    border:1px solid #ddd!important;\r\n}\r\n.high-light-clr{\r\n    background: rgb(238,236,255);\r\n}\r\n/*another table styling*/\r\n.cntrst{\r\n    background-color:rgb(215,228,189); \r\n}\r\n.vlt{\r\n    background: rgb(179,162,199);\r\n}\r\n.grin-new{\r\n    background:rgb(146,208,80);\r\n}\r\n.blk{\r\n    border-color:#000!important;\r\n   background: #000!important;\r\n   color: #fff!important; \r\n}\r\n.new-thd {\r\n    color: #fff;\r\n    background-color: #A1D253;\r\n    border: 1px solid #fff;\r\n    color: black;\r\n}\r\n.tab-copy tr th{\r\n    background: #000;\r\n    color:#fff;\r\n}\r\n.tab-copy-tr tr{\r\n    color:#000!important;\r\n    background-color: #dae5f1;\r\n    border: 1px solid #fff !important;\r\n}\r\n.tab-copy-tr tr:hover{\r\n   background-color:#b8d9fd!important;\r\n}\r\n.tab-copy-tr tr td{\r\n    font-size: 14px;\r\n}\r\n.cstm-footer{\r\n    position: fixed;\r\n    bottom: 0;\r\n    z-index: 99;\r\n    -webkit-transform: scale(0.8,0.8);\r\n            transform: scale(0.8,0.8);\r\n}\r\n.cstm-footer h4 {\r\n    font-size: 16px;\r\n}\r\n.new-set-footer{\r\n    width: 70%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-ipd/clinic-summary-ipd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"analytics-sec\">\n\t\n\t<div class=\"ipd-deatil-sec\">\n\t    <div class=\"inner-tab\">\n\t      \t<ul class=\"nav nav-tabs new-ul-1\" role=\"tablist\">\n\t      \t\t<li role=\"presentation\"  class=\"clz\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-opd\"> <div>OPD</div><small> (All Doctors)</small> </a></li>\n\t      \t\t<li role=\"presentation\" *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-pharmacy\">Pharmacy</a></li>\n\t      \t\t<li role=\"presentation\" *ngIf=\"doctorData.clinic_services.Clinic_Diagnostics==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-diagnostic\"> Diagnostics </a></li>\n\t      \t\t<li role=\"presentation\" class=\"active\" *ngIf=\"doctorData.clinic_services.Clinic_IPD==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-ipd\"> IPD </a></li>\n\t      \t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-all\">Summary</a></li>\n\t      \t</ul>\n\t    </div>\n\t    <div class=\"ipd-body\">\n\t      \t<div class=\"cus-sidebar-wrapper side-bar-cstm\">\n\t      \t\t<div class=\"cus-sidebar\">\n\t      \t\t\t<ul> \n\t      \t\t\t\t<li>\n\t      \t\t\t\t\t<div class=\"\">\n\t      \t\t\t\t\t\t<div class=\"col-lg-3\">\n\t      \t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>From</b></h4>\n\t      \t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t<div class=\"col-lg-9\">\n\t      \t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t      \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"fromDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t      \t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t</div>\n\t      \t\t\t\t\t</div>\n\t      \t\t\t\t</li>\n\t      \t\t\t\t<li>\n\t      \t\t\t\t\t<div class=\"\">\n\t      \t\t\t\t\t\t<div class=\"col-lg-3\">\n\t      \t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>To</b></h4>\n\t      \t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t<div class=\"col-lg-9\">\n\t      \t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t      \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"toDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t      \t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t</div>\n\t      \t\t\t\t\t</div>\n\t      \t\t\t\t</li>\n\t      \t\t\t\t<li class=\"text-right brder-cstm\">\n    \t\t\t\t\t\t<div class=\"col-lg-12 text-center\">\n\t      \t\t\t\t\t\t<button class=\"btn btn-go\" (click)=\"go()\">Go</button>\n\t      \t\t\t\t\t</div>\n\t      \t\t\t\t</li>\n\t      \t\t\t\t<li class=\"li-cstm\"> <a href=\"javascript:void(0);\"> For Past</a> </li>\n\t      \t\t\t\t<!-- <li class=\"{{getClass(0)}}\" (click)=\"activatetab(0)\" class=\"active\"> <a href=\"javascript:void(0);\"> Current </a> </li> -->\n\t      \t\t\t\t<li class=\"{{getClass(1)}}\" (click)=\"activatetab(1)\"> <a href=\"javascript:void(0);\"> 1 Week &nbsp;<small *ngIf=\"activatedtab==1\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t      \t\t\t\t<li class=\"{{getClass(2)}}\" (click)=\"activatetab(2)\"> <a href=\"javascript:void(0);\"> 2 Weeks &nbsp;<small *ngIf=\"activatedtab==2\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small>  </a> </li>\n\t      \t\t\t\t<li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month &nbsp;<small *ngIf=\"activatedtab==3\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t      \t\t\t\t<li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month &nbsp;<small *ngIf=\"activatedtab==4\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t      \t\t\t\t<li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month &nbsp;<small *ngIf=\"activatedtab==5\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t      \t\t\t\t<li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year &nbsp;<small *ngIf=\"activatedtab==6\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t      \t\t\t\t<li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> All </a> </li>\n\t      \t\t\t</ul>\n\t      \t\t</div>\n\t      \t</div>\n\t      \t<div class=\"stock-tab\">\n\t\t\t\t<div class=\"col-lg-10 col-lg-offset-2\">\n\t\t\t\t\t<ul class=\"nav nav-tabs cstm-ul-new cstm-ul-new-width\">\n\t\t\t\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#home-cstm\">IPD Book</a></li>\n\t\t\t\t\t\t<li><a data-toggle=\"tab\" href=\"#menu2-cstm\">BREAK UP</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t    <div id=\"home-cstm\" class=\"tab-pane fade in active\">\n\t\t\t\t\t    \t<div class=\"row\">\n\t\t\t\t\t    \t\t<div class=\"col-lg-12\">\n\t\t\t\t\t    \t\t\t<br>\n\t\t\t\t\t    \t\t\t<!-- <div class=\"\"> -->\n\t\t\t\t\t\t\t\t\t\t<div style=\"min-height: 10px; max-height:425px; overflow-y: scroll;\">\n\t\t\t\t\t\t\t\t            <table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\" >\n\t\t\t\t\t\t\t\t               <thead class=\"new-thd tab-copy\">\n\t\t\t\t\t\t\t\t                    <tr>\n\t\t\t\t\t\t\t\t                        <th mat-sort-header=\"date\" width=\"4%\" class=\"{{getTableHeaderClass(1)}} text-center\" (click)=\"setTableHeaderClass(1)\"><h4 style=\"width: 100%; text-align: center;\">SNo</h4>\n\t\t\t\t\t\t\t\t                        </th>\n\t\t\t\t\t\t\t\t                        <th mat-sort-header=\"patientName \" width=\"16%\" class=\"{{getTableHeaderClass(2)}} text-center\" (click)=\"setTableHeaderClass(2)\"><h4 style=\"width: 100%; text-align: center;\">Patient Name</h4>\n\t\t\t\t\t\t\t\t                        </th>\n\t\t\t\t\t\t\t\t                        <th mat-sort-header=\"procedure \" width=\"10%\" class=\"{{getTableHeaderClass(7)}} text-center\" (click)=\"setTableHeaderClass(7)\"><h4 style=\"width: 100%; text-align: center;\">Procedure</h4>\n\t\t\t\t\t\t\t\t                        </th>\n\t\t\t\t\t\t\t\t                        <th mat-sort-header=\"first_name \" width=\"18%\" class=\"{{getTableHeaderClass(3)}} text-center\" (click)=\"setTableHeaderClass(3)\"><h4 style=\"width: 100%; text-align: center;\">Doctor</h4>\n\t\t\t\t\t\t\t\t                        </th>\n\t\t\t\t\t\t\t\t                        <th mat-sort-header=\"createdAt \" width=\"10%\" class=\"{{getTableHeaderClass(4)}} text-center\" (click)=\"setTableHeaderClass(4)\"><h4 style=\"width: 100%; text-align: center;\">Admission</h4>\n\t\t\t\t\t\t\t\t                        </th>\n\t\t\t\t\t\t\t\t                        <th mat-sort-header=\"discharge_date \" width=\"10%\" class=\"{{getTableHeaderClass(5)}} text-center\" (click)=\"setTableHeaderClass(5)\"><h4 style=\"width: 100%; text-align: center;\">Dishcharge</h4>\n\t\t\t\t\t\t\t\t                        </th>\n\t\t\t\t\t\t\t\t                        <th mat-sort-header=\"duration_days \" width=\"10%\" class=\"{{getTableHeaderClass(6)}} text-center\" (click)=\"setTableHeaderClass(6)\"><h4 style=\"width: 100%; text-align: center;\">Dur(day:hrs)</h4>\n\t\t\t\t\t\t\t\t                        </th>\n\t\t\t\t\t\t\t\t                        <th width=\"10%\" mat-sort-header=invoice class=\"{{getTableHeaderClass(8)}} text-center\" (click)=\"setTableHeaderClass(8)\"><h4 style=\"width: 100%; text-align: center;\">Invoice No.</h4>\n\t\t\t\t\t\t\t\t                        </th>\n\t\t\t\t\t\t\t\t                         <th width=\"7%\" mat-sort-header=\"total_bill\" class=\"{{getTableHeaderClass(9)}} text-center\" (click)=\"setTableHeaderClass(9)\"><h4 style=\"width: 100%; text-align: center;\">Bill Amount</h4>\n\t\t\t\t\t\t\t\t                        </th>\n\t\t\t\t\t\t\t\t                    </tr>\n\t\t\t\t\t\t\t\t               </thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody class=\"tab-copy-tr\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"table-row\"  *ngFor=\"let item of sortedData; let i= index;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"60px\">{{i+1}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{item.patientName}}</td> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{item.procedure}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{item.consultDoc.first_name}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{item.createdAt | date:'d MMM yy ,H:mm'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.discharge_date\">{{item.discharge_date | date:'d MMM yy ,H:mm'}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span *ngIf=\"item.discharge_date\">{{item.duration_days}} days {{item.duration_hours}} hrs</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.discharge_date\">{{item.id}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{item.total_bill}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t            </table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row cstm-footer new-set-footer\"  *ngIf=\"patinetlist.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sub-total-div\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3><p>Total patients admitted: <b>{{patinetlist.length}}</b></p></h3>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sub-total-div\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3><p>Total Occupancy Hours: <b>{{totalOccupancy}}</b></p></h3>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sub-total-div\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3><p>Total Bill Value: <b>Rs. {{totalBill}} </b></p></h3>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t\t\t<!-- </div> -->\n\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t    \t</div>\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div id=\"menu2-cstm\" class=\"tab-pane fade\">\n\t\t\t\t\t    \t<br>\n\t\t\t\t\t      \t<div class=\"row\">\n\t\t\t\t\t      \t\t<div class=\"col-lg-12\" id=\"previewModalPdf\">\n\t\t\t\t\t      \t\t\t<div style=\"min-height:29em;\">\n\t\t\t\t\t      \t\t\t\t<table class=\"table table-bordered tab-12\">\n\t\t\t\t\t\t\t\t\t\t\t<thead class=\"high-light-clr\">\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-left\">Consulting Doctor</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Patients Admitted</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Patients Discharged</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">IPD Revenue (Rs.)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Admission Duration (Hrs)</th>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let op of dataArray\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-left\">Dr. {{getDoctorName(op._id)}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\">{{op.patientNotDischarge.length}}<small> ({{getData(getPercentage(op.patientNotDischarge.length,patientAdmitted)) }}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\">{{op.patientDischarge.length}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\">{{op.total_sales_amount}} <small>({{getData(getPercentage(op.total_sales_amount,ipdRevenue))}} %)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\">{{op.admisssionHours}}<small> ({{getData(getPercentage(op.admisssionHours,totalAdmissionHours))}} %)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"high-light-clr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-left\"><b>IPD Aggregate</b> </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\"><b>{{patientAdmitted}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\"><b>{{patientDischarge}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\"><b>{{ipdRevenue}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\"><b>{{totalAdmissionHours}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t      \t\t\t</div>\t\n\t\t\t\t\t      \t\t</div>\n\t\t\t\t\t      \t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-grin\" (click) = \"createPdf()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div> PRINT </div>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <button class=\"btn btn-custom btn-grin\" (click) = \"exportPdf()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div> PRINT </div>\n\t\t\t\t\t\t\t\t\t\t\t</button> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t    </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t    </div>\n\t  </div>\n\t</div>\n"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-ipd/clinic-summary-ipd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicSummaryIpdComponent; });
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




var ClinicSummaryIpdComponent = /** @class */ (function () {
    function ClinicSummaryIpdComponent(UserService, toastr, datePipe) {
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
    }
    ClinicSummaryIpdComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        //this.smartIpdData = JSON.parse(localStorage['smartIpdDetails'])
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        this.salesBookArray = [];
        this.sortedData = [];
        this.patinetlist = [];
        this.activatedtab = 0;
        this.activatetab(1);
    };
    ClinicSummaryIpdComponent.prototype.activatetab = function (i) {
        this.activatedtab = i;
        var object;
        object = {};
        var date = new Date();
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id;
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
        console.log(object);
        this.DocBreakUp(object);
        this.IpdBook();
    };
    ClinicSummaryIpdComponent.prototype.createPdf = function () {
        $('#previewModalPdf').printThis({
            debug: false,
            importCSS: true,
            importStyle: true,
            printContainer: true,
            pageTitle: "Clinic IPD Break Up",
            removeInline: false,
            printDelay: 333,
            header: null,
            formValues: true
        });
    };
    ClinicSummaryIpdComponent.prototype.IpdBook = function () {
        var _this = this;
        if (new Date(this.toDate).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        var object = {
            id: this.doctorData.smart_ipd_id,
            start_date: this.fromDate,
            end_date: this.toDate
        };
        this.loading = true;
        this.UserService.GetIpdPatientsDataBetweenTwoDates(object).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                // this.toastr.success(data.message,"Success")
                _this.totalOccupancy = 0;
                _this.totalBill = 0;
                _this.patinetlist = [];
                _this.sortedData = [];
                _this.totalOccupancyDays = 0;
                _this.totalOccupancyHours = 0;
                _this.patinetlist = data.data;
                for (var i = 0; i < _this.patinetlist.length; i++) {
                    if (_this.patinetlist[i].discharge_date) {
                        _this.patinetlist[i].product = (_this.patinetlist[i].duration_days * 24) + _this.patinetlist[i].duration_hours;
                    }
                    else {
                        _this.patinetlist[i].product = 0;
                        _this.patinetlist[i].id = null;
                    }
                    _this.patinetlist[i].first_name = data.data[i].consultDoc.first_name;
                    if (data.data[i].total_bill) {
                        _this.totalBill = _this.totalBill + data.data[i].total_bill;
                    }
                    if (data.data[i].discharge_date) {
                        var diff = (new Date(data.data[i].discharge_date).getTime() - new Date(data.data[i].createdAt).getTime()) / 1000;
                        diff /= (60 * 60);
                        var hoursDifference = Math.abs(Math.round(diff));
                        _this.totalOccupancy = _this.totalOccupancy + hoursDifference;
                    }
                }
                _this.sortedData = _this.patinetlist.slice();
                _this.totalOccupancyDays = Math.trunc(_this.totalOccupancy / 24);
                _this.totalOccupancyHours = Math.trunc(_this.totalOccupancy % 24);
            }
            else if (data.response == false) {
                // this.toastr.error(data.message,"Error")
            }
        }, function (err) {
            console.log(err);
        });
    };
    ClinicSummaryIpdComponent.prototype.DocBreakUp = function (object) {
        var _this = this;
        this.dataArray = [];
        this.patientAdmitted = 0;
        this.patientDischarge = 0;
        this.ipdRevenue = 0;
        this.totalAdmissionHours = 0;
        this.totalPrescriptions = 0;
        this.loading = true;
        this.UserService.IpdSummaryBreakUp(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.dataDoctorArray = data.dataDoctors;
                _this.dataArray = data.data;
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.dataArray[i].patientDischarge = [];
                    _this.dataArray[i].patientNotDischarge = [];
                    _this.dataArray[i].totalRevenuePercentage = 0;
                    _this.dataArray[i].admisssionHours = 0;
                    _this.dataArray[i].admisssionHoursPercentage = 0;
                    _this.dataArray[i].total_sales_amount = 0;
                    var totalHours = 0;
                    var totalAmount = 0;
                    for (var j = 0; j < _this.dataArray[i].total_sales.length; j++) {
                        if (_this.dataArray[i].total_sales[j].duration_days || _this.dataArray[i].total_sales[j].duration_hours)
                            _this.dataArray[i].admisssionHours += (_this.dataArray[i].total_sales[j].duration_days * 24) + _this.dataArray[i].total_sales[j].duration_hours;
                        totalHours += (_this.dataArray[i].total_sales[j].duration_days * 24) + _this.dataArray[i].total_sales[j].duration_hours;
                        totalAmount += _this.dataArray[i].total_sales[j].total_bill;
                        if (_this.dataArray[i].total_sales[j].total_bill) {
                            _this.dataArray[i].total_sales_amount += _this.dataArray[i].total_sales[j].total_bill;
                        }
                        if (_this.dataArray[i].total_sales[j].discharge == true) {
                            _this.dataArray[i].patientDischarge.push(_this.dataArray[i].total_sales[j]);
                            _this.patientDischarge++;
                        }
                        else {
                            _this.dataArray[i].patientNotDischarge.push(_this.dataArray[i].total_sales[j]);
                            _this.patientAdmitted++;
                        }
                    }
                    _this.dataArray[i].admisssionHoursPercentage = (_this.dataArray[i].admisssionHours * 100) / totalHours;
                    _this.dataArray[i].totalRevenuePercentage = (_this.dataArray[i].total_sales_amount * 100) / totalAmount;
                }
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.ipdRevenue += _this.dataArray[i].total_sales_amount;
                    _this.totalAdmissionHours += _this.dataArray[i].admisssionHours;
                }
            }
            _this.totalPrescriptions = _this.patientDischarge + _this.patientAdmitted;
            console.log(_this.dataArray);
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    ClinicSummaryIpdComponent.prototype.sortData = function (sort) {
        var data = this.sortedData.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'patientName': return compare(a.patientName, b.patientName, isAsc);
                case 'procedure': return compare(a.procedure, b.procedure, isAsc);
                case 'consultDoc': return compare(a.consultDoc, b.consultDoc, isAsc);
                case 'createdAt': return compare(a.createdAt, b.createdAt, isAsc);
                case 'discharge_date': return compare(a.discharge_date, b.discharge_date, isAsc);
                case 'duration_days': return compare(a.product, b.product, isAsc);
                case 'invoice': return compare(a.id, b.id, isAsc);
                case 'total_bill': return compare(a.total_bill, b.total_bill, isAsc);
                case 'first_name': return compare(a.first_name, b.first_name, isAsc);
                default: return 0;
            }
        });
    };
    ClinicSummaryIpdComponent.prototype.go = function () {
        if (new Date(this.toDate1).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        var object;
        object = {
            doctm_clinic_id: this.doctorData.doctm_clinic_id,
            start_date: this.fromDate1,
            end_date: this.toDate1
        };
        console.log(object);
        this.activatedtab = 0;
        this.IpdBook();
        this.DocBreakUp(object);
    };
    ClinicSummaryIpdComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    ClinicSummaryIpdComponent.prototype.getData = function (data) {
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
    ClinicSummaryIpdComponent.prototype.getTableHeaderClass = function (id) {
        if (this.headerClicked == id) {
            return 'selected';
        }
        else {
            return '';
        }
    };
    ClinicSummaryIpdComponent.prototype.setTableHeaderClass = function (id) {
        this.headerClicked = id;
    };
    ClinicSummaryIpdComponent.prototype.getPercentage = function (data, total) {
        return ((data * 100) / total);
    };
    ClinicSummaryIpdComponent.prototype.getDoctorName = function (id) {
        for (var i = 0; i < this.dataDoctorArray.length; i++) {
            if (this.dataDoctorArray[i]._id == id) {
                var name = this.dataDoctorArray[i].first_name.split(' ');
                return (name[0]);
            }
        }
    };
    ClinicSummaryIpdComponent.prototype.exportPdf = function () {
        var head = [
            { title: 'Consulting Doctor', dataKey: "Doctor" },
            { title: 'Patients Admitted', dataKey: "admitted" },
            { title: 'Patients Discharged', dataKey: "dicharge" },
            { title: 'IPD Revenue (Rs.)	', dataKey: "Amount" },
            { title: 'Admission Duration (Hrs)', dataKey: "admission" },
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
            ob.admitted = this.dataArray[i].patientNotDischarge.length;
            ob.dicharge = this.dataArray[i].patientDischarge.length;
            ob.Amount = this.dataArray[i].total_sales_amount;
            ob.admission = this.dataArray[i].admisssionHours;
            csvData.push(ob);
        }
        csvData.push({
            Doctor: "IPD Aggregates",
            admitted: this.patientAdmitted,
            dicharge: this.patientDischarge,
            Amount: this.getData(this.ipdRevenue),
            admission: this.getData(this.totalAdmissionHours)
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
        doc.save('IPD-BreakUp' + "(" + date + ")");
    };
    ClinicSummaryIpdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clinic-summary-ipd',
            template: __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-ipd/clinic-summary-ipd.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-ipd/clinic-summary-ipd.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]])
    ], ClinicSummaryIpdComponent);
    return ClinicSummaryIpdComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-ipd/clinic-summary-ipd.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicSummaryIpdModule", function() { return ClinicSummaryIpdModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clinic_summary_ipd_component__ = __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-ipd/clinic-summary-ipd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clinic_summary_ipd_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-ipd/clinic-summary-ipd-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ClinicSummaryIpdModule = /** @class */ (function () {
    function ClinicSummaryIpdModule() {
    }
    ClinicSummaryIpdModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__clinic_summary_ipd_routing_module__["a" /* ClinicSummaryIpdRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSortModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__clinic_summary_ipd_component__["a" /* ClinicSummaryIpdComponent */]]
        })
    ], ClinicSummaryIpdModule);
    return ClinicSummaryIpdModule;
}());



/***/ })

});
//# sourceMappingURL=clinic-summary-ipd.module.chunk.js.map