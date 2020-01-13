webpackJsonp(["dashboard-progress-diagnosis.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-diagnosis/dashboard-progress-diagnosis-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardProgressDiagnosisRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_progress_diagnosis_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-diagnosis/dashboard-progress-diagnosis.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_progress_diagnosis_component__["a" /* DashboardProgressDiagnosisComponent */]
    }
];
var DashboardProgressDiagnosisRoutingModule = /** @class */ (function () {
    function DashboardProgressDiagnosisRoutingModule() {
    }
    DashboardProgressDiagnosisRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardProgressDiagnosisRoutingModule);
    return DashboardProgressDiagnosisRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-diagnosis/dashboard-progress-diagnosis.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tb-1{\n\tmargin-bottom: 0px;\n}\n.evn{\n\tbackground-color:#eff3ef;\n}\n.grin{\n\tcolor:#38af13;\n}\n.red-u{\n\tcolor:#ff0000;\n}\n.tb-1 h4{\n\tmargin: 0px;\n}\n.wrap-canavas{\n\tfloat: none;\n\twidth:100%;\n}\n.clr-blue{\n\tcolor:#00b0f0;\n\tfont-weight: bold;\n\tcursor: pointer;\n}\n.blu-2{\n\tcolor:#1639bf;\n}\n.footer-cstm-an{\n    position: fixed;\n    z-index: 99;\n    float: left;\n    width: 100%;\n    bottom: 0;\n    background: #00b0f0;\n    color: #fff;\n    border-top: 1px solid #d6d6d6;\n    padding-top: 8px;\n}\n.cus-content-wrapper{\n\tpadding-top: 0px;\n}\n.wrap-height{\n\tmin-height:250px;\n\tmax-height: 250px;\n\tpadding:0px 8px;\n\tborder-left: 1px solid #dcdcdc;\n\tborder-right:1px solid #dcdcdc;\n\toverflow-x: hidden;\n}\n.mt-table h3{\n\tmargin-top: 0px;\n}\n.cstm-tr{\n\tbackground-color: #000;\n\tcolor:#fff;\n\ttext-align: center;\n}\n.cstm-tr-2{\n\tbackground-color:#d7e4e3;\n}\n.cstm-tr-2 td{\n\tborder-right:1px solid #bbb; \n}\n.cstm-tr-2 td:last-child {\n border-right: none;\n}\n.cstm-tr-3{\n\tborder-bottom:1px solid #bbb; \n}\n.cstm-tr-3 td{\n\tborder-right:1px solid #bbb; \n}\n.cstm-tr-3 td:last-child {\n border-right: none;\n}\n.cus-sidebar-wrapper .cus-sidebar{\n\theight: initial;\n}\n.cstm-mg{\n\tmargin-top: 5px;\n}\n.btn-go{\n\tbackground-color: transparent;\n    border: 1px solid #002160;\n    margin-bottom: 5px;\n    min-width: 62%;\n}\n.btn-go:hover{\n    -webkit-transition: 300ms;\n    transition: 300ms;\n    background: #98C74F;\n    border-color: #98C74F;\n    color: #fff;\n}\n/*.cus-content{\n\tz-index:1;\n}*/\n.li-cstm a{\n\ttext-align: center!important;\n    background: #000!important;\n    color: #fff!important;\n    font-size: 16px!important;\n    font-weight: inherit!important;\n    padding: 6px!important;\n}\n/*karam @29-1-2018*/\n.side-bar-cstm{\n\tz-index: 99;\n}\n.res-tab-2{\n\tmax-height: 200px;\n}\n.cstm-ul-new li{\n\twidth:100%;\n\ttext-align: center;\n}\n.cstm-ul-new li a{\n\tbackground-color:transparent;\n\tcolor:#000;\n\tcursor: pointer;\n\tborder-radius: 0px;\n\tborder-bottom: 2px solid transparent; \n}\n.cstm-ul-new li.active a{\n\tbackground-color: #e0e0e0;\n    color: #000;\n\tborder-bottom: 2px solid #00b0f0;\n}\n.tab-new{\n\tmin-height: 450px;\n    max-height: 450px;\n    padding: 0px 8px;\n    border-left: 1px solid #dcdcdc;\n    border-right: 1px solid #dcdcdc;\n    overflow-x: hidden;\n}\n.clr-blue{\n    color: #00b0f0;\n    font-weight: bold;\n}\n/*karam@30-jan-2019*/\n.tab-new-cstm tr td{\n\tfont-size: 10px;\n}\n.brder-cstm{\n\tpadding-bottom: 1px;\n    margin-bottom: 6px;\n    border-bottom: 1px solid #a7a7a7;\n    position: relative;\n}\n.brder-cstm::after{\n\tcontent: \"\";\n    position: absolute;\n    height: 6px;\n    width: 12px;\n    background-color: #ffffff;\n    top: 41px;\n    right: -3px;\n\t \n}\n.cus-sidebar ul{\n\tborder:1px solid #a7a7a7;\n}\n.can-vas{\n\theight:227px!important;\n}\n.can-vas-1{\n\theight:210px!important;\n}\n.cstm-heading{\n  text-align: center;\n  font-weight: bold;\n}\n.xs-small{\n\tfont-size: 75%!important;\n}\n.cstm-tab-new tr td{\n\tpadding: 5px;\n}\n.new-table tr td{\n\tpadding: 8px;\n}\n.new-table-two tr td{\n\tpadding: 7px;\n}\n.brdr-rght{\n    border-right: 1px solid #bfc4cb;\n}\n.can-vas{\n\theight: 227px!important;\n}\n.modal.fade .modal-dialog {\n  -webkit-transform: translate3d(0, 100vh, 0);\n          transform: translate3d(0, 100vh, 0);\n  -webkit-transition: 700ms;\n  transition: 700ms;\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transition: 700ms;\n  transition: 700ms;\n}\n.cstm-tr-2{\n\tbackground-color:#d7e4e3;\n}\n.cstm-tr-2 td{\n\tborder-right:1px solid #bbb; \n}\n.cstm-tr-2 td:last-child {\n border-right: none;\n}\n.cstm-tr-3{\n\tborder-bottom:1px solid #bbb; \n}\n.cstm-tr-3 td{\n\tborder-right:1px solid #bbb; \n}\n.cstm-tr-3 td:last-child {\n border-right: none;\n}\n/*.cstm-md-bdy {\n\tposition: absolute;\n\ttop: -30px;\n    right: 8px;\n}*/\n.modal-body{\n\tpadding-top: 1px;\n\tpadding-bottom: -1px;\n}\n.cus-content-wrapper .cus-content{\n\tmargin-left: 0px!important\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-diagnosis/dashboard-progress-diagnosis.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"analytics-sec\">\n\t\n\t<div class=\"ipd-deatil-sec\">\n\t<!-- \t<div class=\"md-tab\">\n\t      \t\n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t          \t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-prescription\"> Consultation </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-pharmacy-detail\"> Clinic Services </a></li>\n\t      \t</ul>\n\t    </div>\n\t-->\n\t<div class=\"inner-tab\">\n\t\t<!-- Nav tabs -->\n\t\t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t\t\t<li role=\"presentation\" ><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress\"> Patient </a></li>\n\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-time\"> Time</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-prescription\">Prescription</a></li>\n\t\t\t\t<!--li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-pharmacy\"> Pharmacy</a></li>\n\t          \t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-diagnosis\"> Diagnostics </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-ipd\"> IPD </a></li-->\n\t          \t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-pharmacy\" *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy==true\"> Pharmacy</a></li>\n\t          \t\t<li role=\"presentation\"  class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-diagnosis\" *ngIf=\"doctorData.clinic_services.Clinic_Diagnostics==true\" > Diagnostics </a></li>\n\t          \t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-ipd\" *ngIf=\"doctorData.clinic_services.Clinic_IPD==true\"> IPD </a></li>\n\t          \t</ul>\n\t          </div>\n\n\t          <div class=\"ipd-body\">\n\t    \t<!-- <div class=\"cus-sidebar-wrapper side-bar-cstm\">\n\t    \t\t<div class=\"cus-sidebar\">\n\t    \t\t\t<ul> \n\t    \t\t\t\t<li>\n\t    \t\t\t\t\t<div class=\"\">\n\t    \t\t\t\t\t\t<div class=\"col-lg-3\">\n\t    \t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>From</b></h4>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t<div class=\"col-lg-9\">\n\t    \t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t    \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"fromDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t    \t\t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t</li>\n\t    \t\t\t\t<li>\n\t    \t\t\t\t\t<div class=\"\">\n\t    \t\t\t\t\t\t<div class=\"col-lg-3\">\n\t    \t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>To</b></h4>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t<div class=\"col-lg-9\">\n\t    \t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t    \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"toDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t    \t\t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t</li>\n\t    \t\t\t\t<li class=\"text-right brder-cstm\">\n\t    \t\t\t\t\t<div class=\"col-lg-12 text-center\">\n\t    \t\t\t\t\t\t<button class=\"btn btn-go\" (click)=\"go()\">Go</button>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t</li>\n\t    \t\t\t\t<li class=\"li-cstm\"> <a href=\"javascript:void(0);\"> For Past</a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(1)}}\" (click)=\"activatetab(1)\"> <a href=\"javascript:void(0);\"> 1 Week &nbsp;<small *ngIf=\"activatedtab==1\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(2)}}\" (click)=\"activatetab(2)\"> <a href=\"javascript:void(0);\"> 2 Weeks &nbsp;<small *ngIf=\"activatedtab==2\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small>  </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month &nbsp;<small *ngIf=\"activatedtab==3\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month &nbsp;<small *ngIf=\"activatedtab==4\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month &nbsp;<small *ngIf=\"activatedtab==5\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year &nbsp;<small *ngIf=\"activatedtab==6\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> All </a> </li>\n\t    \t\t\t</ul>\n\t    \t\t</div>\n\t    \t</div> -->\n\n\t    \t<div class=\"cus-content-wrapper\">\n\t    \t\t<div class=\"cus-content\">\n\t    \t\t\t<div class=\"row\">\n\t    \t\t\t\t<div class=\"col-lg-6 brdr-rght\">\n\t    \t\t\t\t\t<ul class=\"nav nav-tabs cstm-ul-new\">\n\t    \t\t\t\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#home-cstm\">DIAGNOSTICS DETAILS FOR TODAY</a></li>\n\t    \t\t\t\t\t\t<!-- <li><a data-toggle=\"tab\" href=\"#menu2-cstm\">Order</a></li> -->\n\t    \t\t\t\t\t</ul>\n\t    \t\t\t\t\t<div class=\"tab-content\">\n\t    \t\t\t\t\t\t<div id=\"home-cstm\" class=\"tab-pane fade in active\">\n\t    \t\t\t\t\t\t\t<div class=\"cstm-pad\">\n\t    \t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t    \t\t\t\t\t\t\t\t\t<div class=\"\">\n\t    \t\t\t\t\t\t\t\t\t\t<table class=\"table tb-1 new-table\">\n\t    \t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Total Diagnostic Sales</td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalPharmacySales + totalWalkinSales}} &nbsp;</b></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Prescriptions Sales</td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalPharmacySales}} &nbsp;</b></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Other Sales</td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalWalkinSales}}</b> </td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Cash collection</td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalCashAmount+totalWalkinCashAmount}} </b> <small class=\"xs-small\">({{getData(checkIsNan(totalWalkinCashPatient))}}%)</small>&nbsp;</td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Online collection</td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalOnlineAmount+totalWalkinOnlineAmount}}</b> <small class=\"xs-small\">({{getData(checkIsNan(totalWalkinOnlinePatient))}}%)</small>&nbsp;</td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Total Sale Orders</td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalPharmacySalesLength + totalWalkinPatient}} &nbsp;</b></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Prescription Orders</td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalPharmacySalesLength}} &nbsp;</b><small class=\"xs-small\">({{getData(checkIsNan(totalPrecOrdersPercentage))}}%)</small></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Other Orders</td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalWalkinPatient}} &nbsp;</b><small class=\"xs-small\">({{getData(checkIsNan(totalOthersOrdersPercentage))}}%)</small></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Avg sale per Order</td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(checkIsNan((totalPharmacySales + totalWalkinSales)/(totalPharmacySalesLength + totalWalkinPatient)))}} &nbsp;</b></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Diagnostics Sales per Prescription</td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(DiagnosticsSalesperPrescription)}} &nbsp;</b></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Total test done</td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{investigationUniqueArray.length}} &nbsp;</b><b><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal2\">View</span></b></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Min collection in a day</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{minSaleOfDay}} &nbsp;</b><span>({{minCollectionDate | date: 'dd/MM/yyyy'}})</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Avg. daily collection</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(checkIsNan((totalPharmacySales + totalWalkinSales)/(dateDiff)))}} &nbsp;</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Prescriptions sales</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalPharmacySales}} &nbsp;</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Other Sales</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalWalkinSales}}</b> </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Top 10 Test (Sale Num.)</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal\" (click) =\"getSorted(1)\">View</span></b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Top 10 Test (Sale Value)</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal\" (click) =\"getSorted(2)\">View</span></b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t    <!-- <div id=\"menu2-cstm\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t      \t<div class=\"cstm-pad\">\n\t\t\t\t\t\t\t\t   \t\t\t<div class=\"table-responsive\">\n\t\t\t    \t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table tb-1 new-table-two\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Max order in a day </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{checkIsNan(maxOrderOfDay)}} &nbsp;</b><span>({{maxOrderDate | date: 'dd/MM/yyyy'}})</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Min order in a day</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{checkIsNan(minOrderOfDay)}} &nbsp;</b><span>({{minOrderDate | date: 'dd/MM/yyyy'}})</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Avg daily order</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getDataCeil((totalPharmacySalesLength+totalWalkinPatient)/(dateDiff))}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"cstm-heading\">DIAGNOSTICS ORDERS</h5>     \n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"chart-diagnos chart-box wrap-canavas\" *ngIf=\"!loading\">\n\t\t\t\t\t\t\t\t    \t\t\t\t<canvas baseChart class=\"can-vas-1\"\n\t\t\t\t\t\t\t\t\t                [datasets]=\"lineChartData2\"\n\t\t\t\t\t\t\t\t\t                [labels]=\"lineChartLabels2\"\n\t\t\t\t\t\t\t\t\t                [options]=\"lineChartOptions2\"\n\t\t\t\t\t\t\t\t\t                [colors]=\"lineChartColors\"\n\t\t\t\t\t\t\t\t\t                [legend]=\"lineChartLegend2\"\n\t\t\t\t\t\t\t\t\t                [chartType]=\"lineChartType2\"\n\t\t\t\t\t\t\t\t\t                (chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t\t\t\t\t                (chartClick)=\"chartClicked($event)\"></canvas>\n\t\t\t\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t    \t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t   \t\t</div>\n\t\t\t\t\t\t\t\t   \t</div> -->\n\t\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h5 class=\"cstm-heading\">DIAGNOSTICS SALES</h5>     \n\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"chart-diagnos chart-box wrap-canavas\" *ngIf=\"!loading\">\n\t\t\t\t\t\t\t\t\t\t<canvas baseChart class=\"can-vas\" \n\t\t\t\t\t\t\t\t\t\t[datasets]=\"lineChartData\"\n\t\t\t\t\t\t\t\t\t\t[labels]=\"lineChartLabels\"\n\t\t\t\t\t\t\t\t\t\t[options]=\"lineChartOptions\"\n\t\t\t\t\t\t\t\t\t\t[colors]=\"lineChartColors\"\n\t\t\t\t\t\t\t\t\t\t[legend]=\"lineChartLegend\"\n\t\t\t\t\t\t\t\t\t\t[chartType]=\"lineChartType\"\n\t\t\t\t\t\t\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t\t\t\t\t\t(chartClick)=\"chartClicked($event)\"></canvas>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t<table class=\"table tb-1 table-bordered tab-new-cstm\">\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"cstm-tr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDoctor-wise Break-up\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <td class=\"text-center\" width=\"80px\"><b>Sr no</b></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDoctor Name\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSales(Rs.) Contribution\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOrder contribution\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAvg Sales per Prescription\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- {{dataArray | json}} -->\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let op of dataArray; let i = index\" class=\"cstm-tr-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <td class=\"text-center\" width=\"80px\">{{i+1}}</td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tDr. {{getDoctorName(op._id)}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{op.total_sales_amount}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"fontsmall\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t({{getData(checkIsNan(getPercentage(op.total_sales_amount,totalSalesDoctorPlusWalkin)))}}%)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{op.conversion}} <small> ({{getData(op.orderPercentage)}}%)</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{op.sales_per_pres}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <td class=\"text-center\" width=\"80px\">1</td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tOther Sales\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{checkIsNan(totalSalesWalkin)}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"fontsmall\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t({{getData(checkIsNan(getPercentage(totalSalesWalkin,totalSalesDoctorPlusWalkin)))}}%)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <td class=\"text-center\">{{checkIsNan(totalSalesWalkin)}} <small class='fontsmall'>({{getData(checkIsNan(getPercentage(totalSalesWalkin,totalSalesDoctorPlusWalkin)))}}%)</small></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tN.A\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{getData(checkIsNan(totalSalesWalkin/otherSales.length))}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"container footer-cstm-an\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p class=\"brdr-rght\">SALES : <b>{{checkIsNan(totalConversion)}}%</b></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p class=\"brdr-rght\">TESTS DONE : <b>{{investigationUniqueArray.length}}</b></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p class=\"\">CONVERSION RATIO : <b>{{checkIsNan(totalConversion)}}%</b></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- Top 10 Products (Sale Num.) -->\n\t\t<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n\t\t\t<div class=\"modal-dialog\">\n\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t<div class=\"modal-body cstm-md-bdy\">          \t\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t\t<div class=\"cstm-tab\">\n\t\t\t\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Type</b></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Name</b></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Total Sales</b></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Occurence</b></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Perncetage</b></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of topProfitArray | slice: 0:10;let i = index; \">\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">{{data.type}}</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{data.name}}</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{data.sales}}</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{data.occurence}}</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{getData(data.percentage)}}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>      \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- total test-->\n\t\t<div class=\"modal fade\" id=\"myModal2\" role=\"dialog\">\n\t\t\t<div class=\"modal-dialog\">\n\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t<div class=\"modal-body cstm-md-bdy\">          \t\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t\t<div class=\"cstm-tab\">\n\t\t\t\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Type</b></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Test Name</b></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Occurrence</b></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of investigationUniqueArray;let i = index; \">\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">{{data.type}}</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">{{data.name}}</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">{{data.count}}</td>\n\t\t\t\t\t\t\t\t\t\t<!-- <td class=\"text-center\">{{data.sales}}</td> -->\n\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>      \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-diagnosis/dashboard-progress-diagnosis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardProgressDiagnosisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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




var DashboardProgressDiagnosisComponent = /** @class */ (function () {
    //charts end ////////
    function DashboardProgressDiagnosisComponent(userService, datePipe, toastr) {
        this.userService = userService;
        this.datePipe = datePipe;
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
        //CHARTS ////////////
        this.lineChartData = [{
                data: [],
                label: 'Total Sales'
            },
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true,
            legend: {
                display: false,
            }
        };
        this.lineChartColors = [{
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
        //charts end /////////
        ////Chart Orders //////////////
        this.lineChartData2 = [{
                data: [],
                label: 'Total Profit'
            },
        ];
        this.lineChartLabels2 = [];
        this.lineChartOptions2 = {
            responsive: true,
            legend: {
                display: false,
            }
        };
        this.lineChartLegend2 = true;
        this.lineChartType2 = 'line';
    }
    DashboardProgressDiagnosisComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        this.activatedtab = 0;
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        this.activatetab(1);
        this.doctorArray = [];
        this.dataArray = [];
        this.otherSales = [];
    };
    // events
    DashboardProgressDiagnosisComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardProgressDiagnosisComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardProgressDiagnosisComponent.prototype.activatetab = function (i) {
        var _this = this;
        this.activatedtab = i;
        var object;
        object = {};
        var date = new Date();
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id;
        object.end_date = new Date();
        this.totalPatient = 0;
        this.totalWalkinPatient = 0;
        this.totalWalkinCashPatient = 0;
        this.totalWalkinOnlinePatient = 0;
        this.totalPharmacySales = 0;
        this.totalWalkinSales = 0;
        this.totalPharmacySalesLength = 0;
        this.maxSaleOfDay = 0;
        this.minSaleOfDay = 0;
        this.prescriptionsSalespercentage = 0;
        this.NonprescriptionsSalespercentage = 0;
        this.totalSalePercentage = 0;
        this.totalNonSalePercentage = 0;
        this.totalPrescriptions = 0;
        this.totalSales = 0;
        this.totalSalesAmount = 0;
        this.totalConversion = 0;
        this.totalSalesPerPres = 0;
        this.totalSalesWalkin = 0;
        this.totalProfit = 0;
        this.totalSalesDoctorPlusWalkin = 0;
        this.otherSalesPercent = 0;
        this.totalSalesOtherPercent = 0;
        this.totalSalesPerPresPercent = 0;
        this.maxSaleInADay = 0;
        this.totalWalkinProfit = 0;
        this.maxCollectionDate = 0;
        this.minCollectionDate = 0;
        this.maxOrderOfDay = 0;
        this.minOrderOfDay = 0;
        this.minOrderDate = 0;
        this.maxOrderDate = 0;
        this.dateDiff = 0;
        this.totalMale = 0;
        this.totalFemale = 0;
        this.totalMalePercentage = 0;
        this.totalFemalePercentage = 0;
        this.totalWalkInPatientsbyDoc = 0;
        this.totalAppointmentPatients = 0;
        this.totalEmergencyPatients = 0;
        this.totalWalkInPatientsbyDocPercentage = 0;
        this.totalAppointmentPatientsPercentage = 0;
        this.totalEmergencyPatientsPercentage = 0;
        this.avgAge = 0;
        this.newPatient = 0;
        this.prescriptionArray = [];
        this.totalSalesArray = [];
        this.standaloneArray = [];
        this.totalCashAmount = 0;
        this.totalOnlineAmount = 0;
        this.totalWalkinCashAmount = 0;
        this.totalWalkinOnlineAmount = 0;
        this.prescriptionOrdersArray = [];
        this.totalSalesOrdersArray = [];
        this.standaloneOrdersArray = [];
        this.totalPrecOrdersPercentage = 0;
        this.totalOthersOrdersPercentage = 0;
        this.DiagnosticsSalesperPrescription = 0;
        this.topProfitArray = [];
        this.investigationUniqueArray = [];
        if (i == 1) {
            object.start_date = date;
        }
        // else if (i == 1) {
        //     object.start_date = new Date(date.setDate(date.getDate() - 6))
        // } else if (i == 2) {
        //     object.start_date = new Date(date.setDate(date.getDate() - 13))
        // } else if (i == 3) {
        //     object.start_date = new Date(date.setMonth(date.getMonth() - 1))
        // } else if (i == 4) {
        //     object.start_date = new Date(date.setMonth(date.getMonth() - 3))
        // } else if (i == 5) {
        //     object.start_date = new Date(date.setMonth(date.getMonth() - 6))
        // } else if (i == 6) {
        //     object.start_date = new Date(date.setFullYear(date.getFullYear() - 1))
        // } else if (i == 7) {
        //     object.start_date = new Date()
        //     object.maximum = true
        // }
        //console.log(object)
        this.fromDate = new Date(object.start_date);
        this.toDate = new Date(object.end_date);
        this.loading = true;
        this.userService.DiagnosticsAnalytics(object).subscribe(function (result) {
            console.log(result);
            if (result.response) {
                var walkinTrue = [];
                var walkinFalse = [];
                for (var i = 0; i < result.data1.length; i++) {
                    if (result.data1[i].walkin_patient) {
                        walkinTrue.push(result.data1[i]);
                    }
                    else {
                        walkinFalse.push(result.data1[i]);
                    }
                }
                var maxInData = [];
                var maxArray = [];
                var maxProfit = [];
                var maxOrder = [];
                var age = 0;
                var latestArray;
                _this.doctorArray = result.dataDoctors;
                var total_sales_length = 0;
                for (var i = 0; i < result.data.length; i++) {
                    _this.totalPatient = result.data.length;
                    for (var j = 0; j < result.data[i].total_sales.length; j++) {
                        if (result.data[i].total_sales[j].diagnostics == true) {
                            _this.totalPharmacySalesLength++;
                            _this.totalPharmacySales += result.data[i].total_sales[j].investigation_cost;
                            maxInData.push(result.data[i].total_sales[j].investigation_cost);
                            maxArray.push(_this.datePipe.transform(result.data[i].total_sales[j].createdAt, 'yyyy-MM-dd'));
                            total_sales_length++;
                            if (result.data[i].total_sales[j].payment_mode_diagnostics == 'Cash') {
                                _this.totalCashAmount += result.data[i].total_sales[j].investigation_cost;
                                _this.totalWalkinCashPatient++;
                            }
                            else {
                                _this.totalOnlineAmount += result.data[i].total_sales[j].investigation_cost;
                                _this.totalWalkinOnlinePatient++;
                            }
                            if (result.data[i].total_sales[j].registration.age) {
                                age += result.data[i].total_sales[j].registration.age;
                            }
                            if (result.data[i].total_sales[j].registration.lastVisit.status == false) {
                                _this.newPatient++;
                            }
                        }
                    }
                    maxOrder.push(result.data[i].total_sales.length);
                }
                for (var i = 0; i < walkinTrue.length; i++) {
                    _this.totalWalkinPatient = walkinTrue.length;
                    _this.totalWalkinSales += walkinTrue[i].total_amount;
                    maxProfit.push(walkinTrue[i].total_amount - walkinTrue[i].cost_amount);
                    maxInData.push(walkinTrue[i].total_amount);
                    maxArray.push(_this.datePipe.transform(walkinTrue[i].createdAt, 'yyyy-MM-dd'));
                    maxOrder.push(walkinTrue.length);
                    if (walkinTrue[i].payment_mode == 'Cash') {
                        _this.totalWalkinCashAmount += walkinTrue[i].total_amount;
                        _this.totalWalkinCashPatient++;
                    }
                    else {
                        _this.totalWalkinOnlineAmount += walkinTrue[i].total_amount;
                        _this.totalWalkinOnlinePatient++;
                    }
                }
                var diff = Math.abs(_this.toDate.getTime() - _this.fromDate.getTime());
                _this.DiagnosticsSalesperPrescription = (_this.totalPharmacySales / _this.totalPharmacySalesLength);
                _this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
                _this.totalWalkinCashPatient = (_this.totalWalkinCashPatient * 100) / (total_sales_length + _this.totalWalkinPatient);
                _this.totalWalkinOnlinePatient = (_this.totalWalkinOnlinePatient * 100) / (total_sales_length + _this.totalWalkinPatient);
                _this.totalPrecOrdersPercentage = (_this.totalPharmacySalesLength * 100) / (total_sales_length + _this.totalWalkinPatient);
                _this.totalOthersOrdersPercentage = (_this.totalWalkinPatient * 100) / (total_sales_length + _this.totalWalkinPatient);
                _this.prescriptionsSalespercentage = (_this.totalPharmacySales / (_this.totalPharmacySales + _this.totalWalkinSales)) * 100;
                _this.NonprescriptionsSalespercentage = (_this.totalWalkinSales / (_this.totalPharmacySales + _this.totalWalkinSales)) * 100;
                _this.totalSalePercentage = (_this.totalPharmacySalesLength / (_this.totalPharmacySalesLength + _this.totalWalkinPatient)) * 100;
                _this.totalNonSalePercentage = (_this.totalWalkinPatient / (_this.totalPharmacySalesLength + _this.totalWalkinPatient)) * 100;
                _this.dataArray = result.data;
                _this.otherSales = walkinTrue;
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.dataArray[i].true_sales = [];
                    _this.dataArray[i].false_sales = [];
                    _this.dataArray[i].total_sales_amount = 0;
                    _this.dataArray[i].sales_per_pres = 0;
                    _this.dataArray[i].orderPercentage = 0;
                    for (var j = 0; j < _this.dataArray[i].total_sales.length; j++) {
                        if (_this.dataArray[i].total_sales[j].diagnostics) {
                            _this.dataArray[i].total_sales_amount = _this.dataArray[i].total_sales_amount + _this.dataArray[i].total_sales[j].investigation_cost;
                            _this.dataArray[i].true_sales.push(_this.dataArray[i].total_sales[j]);
                        }
                        else {
                            _this.dataArray[i].false_sales.push(_this.dataArray[i].total_sales[j]);
                        }
                    }
                    _this.dataArray[i].conversion = _this.dataArray[i].true_sales.length;
                    //this.dataArray[i].conversion = this.getData((this.dataArray[i].true_sales.length * 100) / this.dataArray[i].total_sales.length)
                    if (_this.dataArray[i].true_sales.length > 0) {
                        _this.dataArray[i].sales_per_pres = parseFloat(_this.getData(_this.dataArray[i].total_sales_amount / _this.dataArray[i].true_sales.length));
                    }
                }
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.dataArray[i].orderPercentage = (_this.dataArray[i].true_sales.length * 100) / _this.totalPharmacySalesLength;
                    _this.totalPrescriptions = _this.totalPrescriptions + _this.dataArray[i].total_sales.length;
                    _this.totalSales = _this.totalSales + _this.dataArray[i].true_sales.length;
                    _this.totalSalesAmount = _this.totalSalesAmount + _this.dataArray[i].total_sales_amount;
                }
                _this.totalConversion = _this.getData((_this.totalSales * 100) / _this.totalPrescriptions);
                for (var i = 0; i < walkinTrue.length; i++) {
                    _this.totalSalesWalkin = _this.totalSalesWalkin + walkinTrue[i].total_amount;
                }
                _this.totalSalesDoctorPlusWalkin = _this.getData(_this.totalSalesAmount + _this.totalSalesWalkin);
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
                var dateArray = [];
                var newMaxArray = [];
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
                    var total_prep_amount = 0;
                    var total_walkin_amount = 0;
                    var total_prep_orders = 0;
                    for (var j = 0; j < _this.dataArray.length; j++) {
                        for (var k = 0; k < _this.dataArray[j].total_sales.length; k++) {
                            if (_this.dataArray[j].total_sales[k].diagnostics == true) {
                                if (newMaxArray[i] == _this.datePipe.transform(_this.dataArray[j].total_sales[k].createdAt, 'yyyy-MM-dd')) {
                                    total_prep_amount += _this.dataArray[j].total_sales[k].investigation_cost;
                                    total_prep_orders++;
                                }
                            }
                        }
                    }
                    _this.prescriptionOrdersArray.push(total_prep_orders);
                    _this.prescriptionArray.push(total_prep_amount);
                    var total_walkin_orders = 0;
                    for (var l = 0; l < _this.otherSales.length; l++) {
                        //total_walkin_orders = (this.otherSales.length)
                        if (newMaxArray[i] == _this.datePipe.transform(_this.otherSales[l].createdAt, 'yyyy-MM-dd')) {
                            total_walkin_amount += _this.otherSales[l].total_amount;
                            total_walkin_orders++;
                        }
                    }
                    _this.standaloneOrdersArray.push(total_walkin_orders);
                    _this.standaloneArray.push(total_walkin_amount);
                    _this.totalSalesArray.push(total_prep_amount + total_walkin_amount);
                    _this.totalSalesOrdersArray.push(total_prep_orders + total_walkin_orders);
                    dateArray.push(newMaxArray[i]);
                }
                _this.maxSaleOfDay = Math.max.apply(Math, _this.totalSalesArray);
                _this.minSaleOfDay = Math.min.apply(Math, _this.totalSalesArray);
                var newMaxValue = -1;
                newMaxValue = _this.totalSalesArray.findIndex(function (x) { return x == _this.maxSaleOfDay; });
                _this.maxCollectionDate = dateArray[newMaxValue];
                var newMinValue = -1;
                newMinValue = _this.totalSalesArray.findIndex(function (x) { return x == _this.minSaleOfDay; });
                _this.minCollectionDate = dateArray[newMinValue];
                /////////// set chart detail ///////////////
                _this.lineChartData = [{
                        data: _this.totalSalesArray,
                        label: 'Total Sales'
                    },
                ];
                var newDateArray11 = [];
                _this.datesArray = dateArray;
                _this.lineChartLabels = _this.datesArray;
                for (var i = 0; i < dateArray.length; i++) {
                    newDateArray11.push(dateArray[i]);
                }
                /////////// set chart detail ///////////////
                /////////////Chart Profit/////////////////////
                _this.maxOrderOfDay = Math.max.apply(Math, _this.totalSalesOrdersArray);
                _this.minOrderOfDay = Math.min.apply(Math, _this.totalSalesOrdersArray);
                var newMinOrder = -1;
                newMinOrder = _this.totalSalesOrdersArray.findIndex(function (x) { return x == _this.minOrderOfDay; });
                _this.minOrderDate = dateArray[newMinOrder];
                var newMaxOrder = -1;
                newMaxOrder = _this.totalSalesOrdersArray.findIndex(function (x) { return x == _this.maxOrderOfDay; });
                _this.maxOrderDate = dateArray[newMaxOrder];
                _this.lineChartData2 = [{
                        data: _this.totalSalesOrdersArray, label: 'Total Orders'
                    },
                ];
                _this.lineChartLabels2 = dateArray;
                /////////////////////////// Date Sort Logic //////////////////////
                _this.sortSales(dateArray, _this.totalSalesArray);
                _this.sortOrders(newDateArray11, _this.totalSalesOrdersArray);
                ///////////////////////// End sort Logic ////////////////////////
                //////////////////////////Top 10 Products///////////////////
                for (var i = 0; i < result.data1.length; i++) {
                    for (var j = 0; j < result.data1[i].tests.length; j++) {
                        for (var k = 0; k < result.data1[i].tests[j].amount.length; k++) {
                            var boolean = false;
                            for (var a = 0; a < _this.topProfitArray.length; a++) {
                                if (result.data1[i].tests[j].opt[k] == _this.topProfitArray[a].type &&
                                    result.data1[i].tests[j].product[k] == _this.topProfitArray[a].name) {
                                    boolean = true;
                                }
                            }
                            if (boolean == false) {
                                _this.topProfitArray.push({
                                    type: result.data1[i].tests[j].opt[k],
                                    name: result.data1[i].tests[j].product[k],
                                    sales: 0,
                                    occurence: 0,
                                    percentage: 0
                                });
                            }
                        }
                    }
                }
                for (var a = 0; a < _this.topProfitArray.length; a++) {
                    for (var i = 0; i < result.data1.length; i++) {
                        for (var j = 0; j < result.data1[i].tests.length; j++) {
                            for (var k = 0; k < result.data1[i].tests[j].amount.length; k++) {
                                if (result.data1[i].tests[j].opt[k] == _this.topProfitArray[a].type &&
                                    result.data1[i].tests[j].product[k] == _this.topProfitArray[a].name) {
                                    _this.topProfitArray[a].occurence++;
                                    _this.topProfitArray[a].sales += result.data1[i].tests[j].amount[k];
                                    _this.topProfitArray[a].percentage = (_this.topProfitArray[a].sales * 100) / (_this.totalWalkinSales + _this.totalPharmacySales);
                                }
                            }
                        }
                    }
                }
                console.log(_this.topProfitArray);
                /////////////////////////Top 10 End ///////////////////////
                ///////////////////////////Total Test//////////////////////
                for (var k = 0; k < result.data.length; k++) {
                    for (var b = 0; b < result.data[k].total_sales.length; b++) {
                        var boolean1 = false;
                        var count1 = 0;
                        for (var l = 0; l < result.data[k].total_sales[b].precription.investigationArray.length; l++) {
                            if (result.data[k].total_sales[b].precription.investigationArray[l].name != 'Mammography' &&
                                result.data[k].total_sales[b].precription.investigationArray[l].name != 'ECG' &&
                                result.data[k].total_sales[b].precription.investigationArray[l].name != 'EEG' &&
                                result.data[k].total_sales[b].precription.investigationArray[l].name != 'Echo' &&
                                result.data[k].total_sales[b].precription.investigationArray[l].name != 'Uroflowmetry' &&
                                result.data[k].total_sales[b].precription.investigationArray[l].name != 'TMT') {
                                for (var m = 0; m < result.data[k].total_sales[b].precription.investigationArray[l].values.length; m++) {
                                    var boolean = false;
                                    for (var a = 0; a < _this.investigationUniqueArray.length; a++) {
                                        if (result.data[k].total_sales[b].precription.investigationArray[l].name == _this.investigationUniqueArray[a].type &&
                                            result.data[k].total_sales[b].precription.investigationArray[l].values[m].display == _this.investigationUniqueArray[a].name) {
                                            count1++;
                                            boolean = true;
                                            break;
                                        }
                                    }
                                    if (boolean == false) {
                                        _this.investigationUniqueArray.push({
                                            type: result.data[k].total_sales[b].precription.investigationArray[l].name,
                                            name: result.data[k].total_sales[b].precription.investigationArray[l].values[m].value,
                                            count: count1 + 1
                                        });
                                    }
                                }
                            }
                            else {
                                for (var a = 0; a < _this.investigationUniqueArray.length; a++) {
                                    if (result.data[k].total_sales[b].precription.investigationArray[l].name == _this.investigationUniqueArray[a].type &&
                                        result.data[k].total_sales[b].precription.investigationArray[l].values == _this.investigationUniqueArray[a].name) {
                                        count1++;
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    _this.investigationUniqueArray.push({
                                        type: result.data[k].total_sales[b].precription.investigationArray[l].name,
                                        name: result.data[k].total_sales[b].precription.investigationArray[l].values,
                                        count: count1 + 1
                                    });
                                }
                            }
                        }
                    }
                }
                for (var a = 0; a < _this.investigationUniqueArray.length; a++) {
                    for (var i = 0; i < result.data1.length; i++) {
                        for (var j = 0; j < result.data1[i].tests.length; j++) {
                            for (var k = 0; k < result.data1[i].tests[j].amount.length; k++) {
                                if (result.data1[i].tests[j].opt[k] == _this.investigationUniqueArray[a].type &&
                                    result.data1[i].tests[j].product[k] == _this.investigationUniqueArray[a].name) {
                                    _this.investigationUniqueArray[a].sales += parseInt(result.data1[i].total_amount);
                                }
                            }
                        }
                    }
                }
                console.log(_this.investigationUniqueArray);
                ///////////////////////total test End /////////////////////
            }
            _this.getFiveMinData();
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardProgressDiagnosisComponent.prototype.getFiveMinData = function () {
        this.finalTimeMinArray = [];
        this.fiveMinPatintArray = [];
        this.fiveMinArray = [];
        var localShiftArray = [];
        var ii = localShiftArray[0];
        for (var i = 0; i < this.doctorData.consultation_schedule.length; i++) {
            for (var k = 0; k < this.doctorData.consultation_schedule[i].shifts.length; k++) {
                localShiftArray.push((parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute));
                localShiftArray.push((parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute));
                this.otherRange((parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute), (parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour) * 60) + parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute), 5);
            }
        }
        for (var i = 0; i < this.fiveMinArray.length; i++) {
            var amount_data = 0;
            for (var j = 0; j < this.dataArray.length; j++) {
                for (var k = 0; k < this.dataArray[j].total_sales.length; k++) {
                    if (parseInt(this.datePipe.transform(this.dataArray[j].total_sales[k].createdAt, 'HH')) * 60 + parseInt(this.datePipe.transform(this.dataArray[j].total_sales[k].createdAt, 'mm')) > this.fiveMinArray[i] &&
                        parseInt(this.datePipe.transform(this.dataArray[j].total_sales[k].createdAt, 'HH')) * 60 + parseInt(this.datePipe.transform(this.dataArray[j].total_sales[k].createdAt, 'mm')) <= this.fiveMinArray[i + 1]) {
                        amount_data = this.dataArray[j].total_sales[k].investigation_cost;
                    }
                }
            }
            for (var l = 0; l < this.otherSales.length; l++) {
                if (parseInt(this.datePipe.transform(this.otherSales[l].createdAt, 'HH')) * 60 + parseInt(this.datePipe.transform(this.otherSales[l].createdAt, 'mm')) > this.fiveMinArray[i] &&
                    parseInt(this.datePipe.transform(this.otherSales[l].createdAt, 'HH')) * 60 + parseInt(this.datePipe.transform(this.otherSales[l].createdAt, 'mm')) <= this.fiveMinArray[i + 1]) {
                    amount_data = this.otherSales[l].total_amount;
                }
            }
            this.fiveMinPatintArray.push(amount_data);
        }
        for (var i = 0; i < this.fiveMinArray.length; i++) {
            this.finalTimeMinArray.push(Math.trunc(this.fiveMinArray[i] / 60) + ":" + Math.trunc(this.fiveMinArray[i] % 60));
        }
        console.log(this.fiveMinPatintArray);
        console.log(this.finalTimeMinArray);
        this.lineChartData = [
            { data: this.fiveMinPatintArray, label: 'Sales' },
        ];
        this.lineChartLabels = this.finalTimeMinArray;
    };
    DashboardProgressDiagnosisComponent.prototype.otherRange = function (start, end, step) {
        if (step == undefined) {
            step = 1;
        }
        if (step > 0) {
            for (var i = start; i <= end; i += step) {
                this.fiveMinArray.push(i);
            }
        }
        else {
            for (var i = start; i >= end; i += step) {
                this.fiveMinArray.push(i);
            }
        }
        return this.fiveMinArray;
    };
    DashboardProgressDiagnosisComponent.prototype.sortOrders = function (c, d) {
        var swapped1;
        do {
            swapped1 = false;
            for (var j = 0; j < c.length - 1; j++) {
                if (c[j] > c[j + 1]) {
                    var temp = c[j];
                    c[j] = c[j + 1];
                    c[j + 1] = temp;
                    var temp = d[j];
                    d[j] = d[j + 1];
                    d[j + 1] = temp;
                    swapped1 = true;
                }
            }
        } while (swapped1);
        console.log(d);
        var newDateArray1 = [];
        for (var i = 0; i < c.length; i++) {
            newDateArray1.push(this.datePipe.transform(c[i], 'dd-MM-yyyy'));
        }
        this.lineChartLabels2 = newDateArray1;
    };
    DashboardProgressDiagnosisComponent.prototype.sortSales = function (a, b) {
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
        // }  
        var newDateArray = [];
        for (var i = 0; i < a.length; i++) {
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'));
        }
        this.lineChartLabels = newDateArray;
    };
    // go() {
    //     this.activatedtab = 0
    //     this.totalPatient = 0
    //     this.totalWalkinPatient = 0
    //     this.totalWalkinCashPatient = 0
    //     this.totalWalkinOnlinePatient = 0
    //     this.totalPharmacySales = 0
    //     this.totalWalkinSales = 0
    //     this.totalPharmacySalesLength = 0
    //     this.maxSaleOfDay = 0
    //     this.minSaleOfDay = 0
    //     this.prescriptionsSalespercentage = 0
    //     this.NonprescriptionsSalespercentage = 0
    //     this.totalSalePercentage = 0
    //     this.totalNonSalePercentage = 0
    //     this.totalPrescriptions = 0
    //     this.totalSales = 0
    //     this.totalSalesAmount = 0
    //     this.totalConversion = 0
    //     this.totalSalesPerPres = 0
    //     this.totalSalesWalkin = 0
    //     this.totalProfit = 0
    //     this.totalSalesDoctorPlusWalkin = 0
    //     this.otherSalesPercent = 0
    //     this.totalSalesOtherPercent = 0
    //     this.totalSalesPerPresPercent = 0
    //     this.maxSaleInADay = 0
    //     this.totalWalkinProfit = 0
    //     this.maxCollectionDate = 0
    //     this.minCollectionDate = 0
    //     this.maxOrderOfDay = 0
    //     this.minOrderOfDay = 0
    //     this.minOrderDate = 0
    //     this.maxOrderDate = 0
    //     this.dateDiff = 0
    //     this.totalMale = 0
    //     this.totalFemale = 0
    //     this.totalMalePercentage = 0
    //     this.totalFemalePercentage = 0
    //     this.totalWalkInPatientsbyDoc = 0
    //     this.totalAppointmentPatients = 0
    //     this.totalEmergencyPatients = 0
    //     this.totalWalkInPatientsbyDocPercentage = 0
    //     this.totalAppointmentPatientsPercentage = 0
    //     this.totalEmergencyPatientsPercentage = 0
    //     this.avgAge = 0
    //     this.newPatient = 0
    //     this.prescriptionArray = []
    //     this.totalSalesArray = []
    //     this.standaloneArray = []
    //     this.totalCashAmount = 0
    //     this.totalOnlineAmount = 0
    //     this.totalWalkinCashAmount = 0
    //     this.totalWalkinOnlineAmount = 0
    //     this.prescriptionOrdersArray = []
    //     this.totalSalesOrdersArray = []
    //     this.standaloneOrdersArray = []
    //     this.totalPrecOrdersPercentage = 0
    //     this.totalOthersOrdersPercentage = 0
    //     var object
    //     object = {}
    //     object.start_date = this.fromDate1
    //     object.end_date = this.toDate1
    //     object.doctm_clinic_id = this.doctorData.doctm_clinic_id
    //     console.log(object)
    //     if (new Date(this.toDate1).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
    //         this.toastr.warning("Invalid date selected", "Warning")
    //         return
    //     }
    //     if (new Date(this.fromDate1).setHours(0, 0, 0, 0) !> new Date(this.toDate1).setHours(0, 0, 0, 0)) {
    //         this.toastr.warning("Invalid date selected", "Warning")
    //         return
    //     }
    //     this.loading = true
    //     this.userService.DiagnosticsAnalytics(object).subscribe((result) => {
    //         console.log(result)
    //         if (result.response) {
    //             var walkinTrue = []
    //             var walkinFalse = []
    //             for (var i = 0; i < result.data1.length; i++) {
    //                 if(result.data1[i].walkin_patient){
    //                     walkinTrue.push(result.data1[i])
    //                 }else{
    //                     walkinFalse.push(result.data1[i])
    //                 }
    //             }
    //             var maxInData = []
    //             var maxArray = []
    //             var maxProfit = []
    //             var maxOrder = []
    //             var age = 0
    //             var latestArray
    //             this.doctorArray = result.dataDoctors
    //             var total_sales_length = 0
    //             for (var i = 0; i < result.data.length; i++) {
    //                 this.totalPatient = result.data.length
    //                 for (var j = 0; j < result.data[i].total_sales.length; j++) {
    //                     if (result.data[i].total_sales[j].diagnostics == true) {
    //                         this.totalPharmacySalesLength++
    //                         this.totalPharmacySales += result.data[i].total_sales[j].investigation_cost
    //                         maxInData.push(result.data[i].total_sales[j].investigation_cost)
    //                         maxArray.push(this.datePipe.transform(result.data[i].total_sales[j].createdAt, 'yyyy-MM-dd'))
    //                         total_sales_length++
    //                         if (result.data[i].total_sales[j].payment_mode_diagnostics == 'Cash') {
    //                             this.totalCashAmount += result.data[i].total_sales[j].investigation_cost
    //                             this.totalWalkinCashPatient++
    //                         } else {
    //                             this.totalOnlineAmount += result.data[i].total_sales[j].investigation_cost
    //                             this.totalWalkinOnlinePatient++
    //                         }
    //                         if (result.data[i].total_sales[j].registration.age) {
    //                             age += result.data[i].total_sales[j].registration.age
    //                         }
    //                         if (result.data[i].total_sales[j].registration.lastVisit.status == false) {
    //                             this.newPatient++
    //                         }
    //                     }
    //                 }
    //                 maxOrder.push(result.data[i].total_sales.length)
    //             }
    //             for (var i = 0; i < walkinTrue.length; i++) {
    //                 this.totalWalkinPatient = walkinTrue.length
    //                 this.totalWalkinSales += walkinTrue[i].total_amount
    //                 maxProfit.push(walkinTrue[i].total_amount - walkinTrue[i].cost_amount)
    //                 maxInData.push(walkinTrue[i].total_amount)
    //                 maxArray.push(this.datePipe.transform(walkinTrue[i].createdAt, 'yyyy-MM-dd'))
    //                 maxOrder.push(walkinTrue.length)
    //                 if (walkinTrue[i].payment_mode == 'Cash') {
    //                     this.totalWalkinCashAmount += walkinTrue[i].total_amount
    //                     this.totalWalkinCashPatient++
    //                 } else {
    //                     this.totalWalkinOnlineAmount += walkinTrue[i].total_amount
    //                     this.totalWalkinOnlinePatient++
    //                 }
    //             }
    //             var diff = Math.abs(this.toDate.getTime() - this.fromDate.getTime());
    //             this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
    //             this.totalWalkinCashPatient = (this.totalWalkinCashPatient * 100) / (total_sales_length + this.totalWalkinPatient)
    //             this.totalWalkinOnlinePatient = (this.totalWalkinOnlinePatient * 100) / (total_sales_length + this.totalWalkinPatient)
    //             this.totalPrecOrdersPercentage = (this.totalPharmacySalesLength * 100) / (total_sales_length + this.totalWalkinPatient)
    //             this.totalOthersOrdersPercentage = (this.totalWalkinPatient * 100) / (total_sales_length + this.totalWalkinPatient)
    //             this.prescriptionsSalespercentage = (this.totalPharmacySales / (this.totalPharmacySales + this.totalWalkinSales)) * 100
    //             this.NonprescriptionsSalespercentage = (this.totalWalkinSales / (this.totalPharmacySales + this.totalWalkinSales)) * 100
    //             this.totalSalePercentage = (this.totalPharmacySalesLength / (this.totalPharmacySalesLength + this.totalWalkinPatient)) * 100
    //             this.totalNonSalePercentage = (this.totalWalkinPatient / (this.totalPharmacySalesLength + this.totalWalkinPatient)) * 100
    //             this.dataArray = result.data
    //             this.otherSales = walkinTrue
    //             for (var i = 0; i < this.dataArray.length; i++) {
    //                 this.dataArray[i].true_sales = []
    //                 this.dataArray[i].false_sales = []
    //                 this.dataArray[i].total_sales_amount = 0
    //                 this.dataArray[i].sales_per_pres = 0
    //                 this.dataArray[i].orderPercentage = 0
    //                 for (var j = 0; j < this.dataArray[i].total_sales.length; j++) {
    //                     if (this.dataArray[i].total_sales[j].diagnostics) {
    //                         this.dataArray[i].total_sales_amount = this.dataArray[i].total_sales_amount + this.dataArray[i].total_sales[j].investigation_cost
    //                         this.dataArray[i].true_sales.push(this.dataArray[i].total_sales[j])
    //                     } else {
    //                         this.dataArray[i].false_sales.push(this.dataArray[i].total_sales[j])
    //                     }
    //                 }
    //                 this.dataArray[i].conversion = this.dataArray[i].true_sales.length
    //                 //this.dataArray[i].conversion = this.getData((this.dataArray[i].true_sales.length * 100) / this.dataArray[i].total_sales.length)
    //                 if (this.dataArray[i].true_sales.length > 0) {
    //                     this.dataArray[i].sales_per_pres = parseFloat(this.getData(this.dataArray[i].total_sales_amount / this.dataArray[i].true_sales.length))
    //                 }
    //             }
    //             for (var i = 0; i < this.dataArray.length; i++) {
    //                 this.dataArray[i].orderPercentage = (this.dataArray[i].true_sales.length * 100) / this.totalPharmacySalesLength
    //                 this.totalPrescriptions = this.totalPrescriptions + this.dataArray[i].total_sales.length
    //                 this.totalSales = this.totalSales + this.dataArray[i].true_sales.length
    //                 this.totalSalesAmount = this.totalSalesAmount + this.dataArray[i].total_sales_amount
    //             }
    //             this.totalConversion = this.getData((this.totalSales * 100) / this.totalPrescriptions)
    //             for (var i = 0; i < walkinTrue.length; i++) {
    //                 this.totalSalesWalkin = this.totalSalesWalkin + walkinTrue[i].total_amount
    //             }
    //             this.totalSalesDoctorPlusWalkin = this.getData(this.totalSalesAmount + this.totalSalesWalkin)
    //             if (this.doctorArray.length > this.dataArray.length) {
    //                 for (var i = 0; i < this.doctorArray.length; i++) {
    //                     var boolean = false
    //                     for (var j = 0; j < this.dataArray.length; j++) {
    //                         if (this.doctorArray[i]._id.toString() == this.dataArray[j]._id.toString()) {
    //                             boolean = true
    //                             break
    //                         }
    //                     }
    //                     if (boolean == false) {
    //                         this.dataArray.push({
    //                             _id: this.doctorArray[i]._id,
    //                             total_sales: [],
    //                             true_sales: [],
    //                             total_sales_amount: 0,
    //                             conversion: 0,
    //                             sales_per_pres: 0
    //                         })
    //                     }
    //                 }
    //             }
    //             this.totalSales = this.totalSales + this.otherSales.length
    //             for (var i = 0; i < this.dataArray.length; i++) {
    //                 this.dataArray[i].totalPrescriptionsPercent = this.getData(this.checkIsNan(this.getPercentage(this.dataArray[i].total_sales.length, this.totalPrescriptions)))
    //                 this.dataArray[i].trueSalesPercent = this.getData(this.checkIsNan(this.getPercentage(this.dataArray[i].true_sales.length, this.totalSales)))
    //                 this.dataArray[i].trueSalesAmtPercent = this.getData(this.checkIsNan(this.getPercentage(this.dataArray[i].total_sales_amount, this.totalSalesDoctorPlusWalkin)))
    //             }
    //             this.otherSalesPercent = this.getData(this.checkIsNan(this.getPercentage(this.otherSales.length, this.totalSales)))
    //             this.totalSalesOtherPercent = this.getData(this.checkIsNan(this.getPercentage(this.totalSalesWalkin, this.totalSalesDoctorPlusWalkin)))
    //             this.totalSalesPerPresPercent = this.getData(this.checkIsNan(this.totalSalesWalkin / this.otherSales.length))
    //             this.totalSalesPerPres = parseFloat(this.getData(this.totalSalesDoctorPlusWalkin / this.totalSales))
    //             var dateArray = []
    //             var newMaxArray = []
    //             newMaxArray.push(maxArray[0])
    //             for (var i = 0; i < maxArray.length; i++) {
    //                 var boolean = false
    //                 for (var j = 0; j < newMaxArray.length; j++) {
    //                     if (maxArray[i] == newMaxArray[j]) {
    //                         boolean = true
    //                         break
    //                     }
    //                 }
    //                 if (boolean == false) {
    //                     newMaxArray.push(maxArray[i])
    //                 }
    //             }
    //             for (var i = 0; i < newMaxArray.length; i++) {
    //                 var total_prep_amount: number = 0
    //                 var total_walkin_amount: number = 0
    //                 var total_prep_orders: number = 0
    //                 for (var j = 0; j < this.dataArray.length; j++) {
    //                     for (var k = 0; k < this.dataArray[j].total_sales.length; k++) {
    //                         if (this.dataArray[j].total_sales[k].diagnostics == true) {
    //                             if (newMaxArray[i] == this.datePipe.transform(this.dataArray[j].total_sales[k].createdAt, 'yyyy-MM-dd')) {
    //                                 total_prep_amount += this.dataArray[j].total_sales[k].investigation_cost
    //                                 total_prep_orders++
    //                             }
    //                         }
    //                     }
    //                 }
    //                 this.prescriptionOrdersArray.push(total_prep_orders)
    //                 this.prescriptionArray.push(total_prep_amount)
    //                 var total_walkin_orders: number = 0
    //                 for (var l = 0; l < this.otherSales.length; l++) {
    //                     //total_walkin_orders = (this.otherSales.length)
    //                     if (newMaxArray[i] == this.datePipe.transform(this.otherSales[l].createdAt, 'yyyy-MM-dd')) {
    //                         total_walkin_amount += this.otherSales[l].total_amount
    //                         total_walkin_orders++
    //                     }
    //                 }
    //                 this.standaloneOrdersArray.push(total_walkin_orders)
    //                 this.standaloneArray.push(total_walkin_amount)
    //                 this.totalSalesArray.push(total_prep_amount + total_walkin_amount)
    //                 this.totalSalesOrdersArray.push(total_prep_orders + total_walkin_orders)
    //                 dateArray.push(newMaxArray[i])
    //             }
    //             this.maxSaleOfDay = Math.max(...this.totalSalesArray)
    //             this.minSaleOfDay = Math.min(...this.totalSalesArray)
    //             var newMaxValue = -1
    //             newMaxValue = this.totalSalesArray.findIndex(x => x == this.maxSaleOfDay);
    //             this.maxCollectionDate = dateArray[newMaxValue]
    //             var newMinValue = -1
    //             newMinValue = this.totalSalesArray.findIndex(x => x == this.minSaleOfDay);
    //             this.minCollectionDate = dateArray[newMinValue]
    //             /////////// set chart detail ///////////////
    //             this.lineChartData = [{
    //                     data: this.totalSalesArray,
    //                     label: 'Total Sales'
    //                 },
    //             ];
    //             var newDateArray11 = []
    //             this.datesArray = dateArray
    //             this.lineChartLabels = this.datesArray
    //             for (var i = 0; i < dateArray.length; i++) {
    //                 newDateArray11.push(dateArray[i])
    //             }
    //             /////////// set chart detail ///////////////
    //             /////////////Chart Profit/////////////////////
    //             this.maxOrderOfDay = Math.max(...this.totalSalesOrdersArray)
    //             this.minOrderOfDay = Math.min(...this.totalSalesOrdersArray)
    //             var newMinOrder = -1
    //             newMinOrder = this.totalSalesOrdersArray.findIndex(x => x == this.minOrderOfDay);
    //             this.minOrderDate = dateArray[newMinOrder]
    //             var newMaxOrder = -1
    //             newMaxOrder = this.totalSalesOrdersArray.findIndex(x => x == this.maxOrderOfDay);
    //             this.maxOrderDate = dateArray[newMaxOrder]
    //             this.lineChartData2 = [{
    //                 data: this.totalSalesOrdersArray,label: 'Total Orders'},
    //             ];
    //             this.lineChartLabels2 = dateArray
    //             /////////////////////////// Date Sort Logic //////////////////////
    //             this.sortSales(dateArray, this.totalSalesArray)
    //             this.sortOrders(newDateArray11, this.totalSalesOrdersArray);
    //             ///////////////////////// End sort Logic ////////////////////////
    //         }
    //         this.loading = false
    //     }, err => {
    //         console.log(err)
    //     })
    // }
    DashboardProgressDiagnosisComponent.prototype.getSorted = function (abc) {
        if (abc == 1) {
            this.topProfitArray.sort(function (a, b) { return parseInt(b.occurence) - parseInt(a.occurence); });
        }
        else {
            this.topProfitArray.sort(function (a, b) { return parseInt(b.sales) - parseInt(a.sales); });
        }
    };
    DashboardProgressDiagnosisComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    DashboardProgressDiagnosisComponent.prototype.getData = function (data) {
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
    DashboardProgressDiagnosisComponent.prototype.getDoctorName = function (id) {
        for (var i = 0; i < this.doctorArray.length; i++) {
            if (this.doctorArray[i]._id == id) {
                return (this.doctorArray[i].first_name);
            }
        }
    };
    DashboardProgressDiagnosisComponent.prototype.checkIsNan = function (data) {
        if (isNaN(data)) {
            return 0;
        }
        else {
            return data;
        }
    };
    DashboardProgressDiagnosisComponent.prototype.getPercentage = function (data, total) {
        return ((data * 100) / total);
    };
    DashboardProgressDiagnosisComponent.prototype.getDataCeil = function (data) {
        return Math.ceil(data);
    };
    DashboardProgressDiagnosisComponent.prototype.getClassMap = function (data, i) {
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
    DashboardProgressDiagnosisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-progress-diagnosis',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-diagnosis/dashboard-progress-diagnosis.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-diagnosis/dashboard-progress-diagnosis.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], DashboardProgressDiagnosisComponent);
    return DashboardProgressDiagnosisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-diagnosis/dashboard-progress-diagnosis.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardProgressDiagnosisModule", function() { return DashboardProgressDiagnosisModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_progress_diagnosis_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-diagnosis/dashboard-progress-diagnosis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_progress_diagnosis_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-diagnosis/dashboard-progress-diagnosis-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardProgressDiagnosisModule = /** @class */ (function () {
    function DashboardProgressDiagnosisModule() {
    }
    DashboardProgressDiagnosisModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__dashboard_progress_diagnosis_routing_module__["a" /* DashboardProgressDiagnosisRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_progress_diagnosis_component__["a" /* DashboardProgressDiagnosisComponent */]]
        })
    ], DashboardProgressDiagnosisModule);
    return DashboardProgressDiagnosisModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-progress-diagnosis.module.chunk.js.map