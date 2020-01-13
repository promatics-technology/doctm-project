webpackJsonp(["dashboard-progress-pharmacy.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-pharmacy/dashboard-progress-pharmacy-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardProgressPharmacyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_progress_pharmacy_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-pharmacy/dashboard-progress-pharmacy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_progress_pharmacy_component__["a" /* DashboardProgressPharmacyComponent */]
    }
];
var DashboardProgressPharmacyRoutingModule = /** @class */ (function () {
    function DashboardProgressPharmacyRoutingModule() {
    }
    DashboardProgressPharmacyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardProgressPharmacyRoutingModule);
    return DashboardProgressPharmacyRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-pharmacy/dashboard-progress-pharmacy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tb-1{\n\tmargin-bottom: 0px;\n}\n.evn{\n\tbackground-color:#eff3ef;\n}\n.grin{\n\tcolor:#38af13;\n}\n.red-u{\n\tcolor:#ff0000;\n}\n.tb-1 h4{\n\tmargin: 0px;\n}\n.wrap-canavas{\n\tfloat: none;\n\twidth:100%;\n}\n.clr-blue{\n\tcolor:#00b0f0;\n\tfont-weight: bold;\n\tcursor: pointer;\n}\n.blu-2{\n\tcolor:#1639bf;\n}\n.footer-cstm-an{\n\tposition: fixed;\n    float: left;\n    width: 100%;\n    bottom: 0;\n    background:#fff;\n    color:#000;\n    border-top: 1px solid #d6d6d6;\n    padding-top: 8px;\n    z-index: 99;\n}\n.cus-content-wrapper{\n\tpadding-top: 0px;\n}\n.wrap-height{\n\tmin-height:250px;\n\tmax-height: 250px;\n\tpadding:0px 8px;\n\tborder-left: 1px solid #dcdcdc;\n\tborder-right:1px solid #dcdcdc;\n\toverflow-x: hidden;\n}\n.mt-table h3{\n\tmargin-top: 0px;\n}\n.cstm-tr{\n\tbackground-color: #000;\n\tcolor:#fff;\n\ttext-align: center;\n}\n.cstm-tr-2{\n\tbackground-color:#d7e4e3;\n}\n.cstm-tr-2 td{\n\tborder-right:1px solid #bbb; \n}\n/*.cstm-tr-2 td:last-child {\n border-right: none;\n}*/\n.cstm-tr-3{\n\tborder-bottom:1px solid #bbb; \n}\n.cstm-tr-3 td{\n\tborder-right:1px solid #bbb; \n}\n/*.cstm-tr-3 td:last-child {\n border-right: none;\n}*/\n.cus-sidebar-wrapper .cus-sidebar{\n\theight: initial;\n}\n.cstm-mg{\n\tmargin-top: 5px;\n}\n.btn-go{\n\tbackground-color: transparent;\n    border: 1px solid #002160;\n    margin-bottom: 5px;\n    min-width: 62%;\n}\n.btn-go:hover{\n    -webkit-transition: 300ms;\n    transition: 300ms;\n    background: #98C74F;\n    border-color: #98C74F;\n    color: #fff;\n}\n.li-cstm a{\n\ttext-align: center!important;\n    background: #000!important;\n    color: #fff!important;\n    font-size: 16px!important;\n    font-weight: inherit!important;\n    padding: 6px!important;\n}\n/*karam@29-1-2019 chocolate day*/\n.side-bar-cstm{\n\tz-index: 99;\n}\n.res-tab-2{\n\tmax-height: 200px;\n}\n.cstm-ul-new li a{\n\tbackground-color:transparent;\n\tcolor:#000;\n\t/*padding:10px 60px;*/\n\tcursor: pointer;\n\tborder-radius: 0px;\n\tborder-bottom: 2px solid transparent; \n}\n.cstm-ul-new li{\n\twidth:100%;\n\ttext-align: center;\n}\n.cstm-ul-new li.active a{\n\tbackground-color: #e0e0e0;\n    color: #000;\n\tborder-bottom: 2px solid #00b0f0;\n}\n.tab-new{\n\tmin-height: 450px;\n    max-height: 450px;\n    padding: 0px 8px;\n    border-left: 1px solid #dcdcdc;\n    border-right: 1px solid #dcdcdc;\n    overflow-x: hidden;\n}\n.clr-blue{\n    color: #00b0f0;\n    font-weight: bold;\n}\n.tab-new-cstm tr td{\n\tfont-size: 10px;\n}\n/*karam@30-jan-2019*/\n/*.tab-new-cstm tr td{\n\tfont-size: 10px;\n}*/\n.brder-cstm{\n\tpadding-bottom: 1px;\n    margin-bottom: 6px;\n    border-bottom: 1px solid #a7a7a7;\n    position: relative;\n}\n.brder-cstm::after{\n\tcontent: \"\";\n    position: absolute;\n    height: 6px;\n    width: 12px;\n    background-color: #ffffff;\n    top: 41px;\n    right: -3px;\n\t \n}\n.cus-sidebar ul{\n\tborder:1px solid #a7a7a7;\n}\n.can-vas{\n\theight:227px!important;\n}\n.can-vas-1{\n\theight:200px!important;\n}\n.tab-new-one tr td{\n\tpadding:2px 8px;\n\tvertical-align: middle; \n}\n.tab-new-one tr td h4{\n\tmargin:5px 0px;  \n}\n.cstm-heading{\n  text-align: center;\n  font-weight: bold;\n}\n.brdr-rght{\n    border-right:1px solid #d6d6d6!important;\n}\n.xs-small{\n\tfont-size: 75%!important;\n}\n.cstm-tab-new tr td{\n\tpadding: 5px;\n}\n.can-vas{\n\theight: 227px!important;\n}\n.brdr-rght{\n\tborder-right:1px solid #fff;\n}\n.modal.fade .modal-dialog {\n  -webkit-transform: translate3d(0, 100vh, 0);\n          transform: translate3d(0, 100vh, 0);\n  -webkit-transition: 700ms;\n  transition: 700ms;\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transition: 700ms;\n  transition: 700ms;\n}\n.cstm-tr-2{\n\tbackground-color:#d7e4e3;\n}\n.cstm-tr-2 td{\n\tborder-right:1px solid #bbb; \n}\n/*.cstm-tr-2 td:last-child {\n border-right: none;\n}*/\n.cstm-tr-3{\n\tborder-bottom:1px solid #bbb; \n}\n.cstm-tr-3 td{\n\tborder-right:1px solid #bbb; \n}\n/*.cstm-tr-3 td:last-child {\n border-right: none;\n}*/\n/*.cstm-md-bdy {\n\tposition: absolute;\n\ttop: -30px;\n    right: 8px;\n}*/\n.modal-body{\n\tpadding-top: 1px;\n\tpadding-bottom: -1px;\n}\n.cus-content-wrapper .cus-content{\n\tmargin-left: 0px!important\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-pharmacy/dashboard-progress-pharmacy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"analytics-sec\">\n\t\n\t<div class=\"ipd-deatil-sec\">\n\t<!-- \t<div class=\"md-tab\">\n\t      \t\n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t          \t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-prescription\"> Consultation </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-pharmacy-detail\"> Clinic Services </a></li>\n\t      \t</ul>\n\t    </div>\n\t-->\n\t<div class=\"inner-tab\">\n\t\t<!-- Nav tabs -->\n\t\t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress\"> Patient </a></li>\n\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-time\"> Time</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-prescription\">Prescription</a></li>\n\t\t\t<!--li role=\"presentation\"  class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-pharmacy\"> Pharmacy</a></li>\n\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-diagnosis\"> Diagnostics </a></li>\n\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-ipd\"> IPD </a></li-->\n\t\t\t<li role=\"presentation\"  class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-pharmacy\" *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy==true\"> Pharmacy</a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-diagnosis\" *ngIf=\"doctorData.clinic_services.Clinic_Diagnostics==true\"> Diagnostics </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-ipd\" *ngIf=\"doctorData.clinic_services.Clinic_IPD==true\"> IPD </a></li>\n\t\t</ul>\n\t</div>\n\n\t<div class=\"ipd-body\">\n\t    \t<div class=\"cus-content-wrapper\">\n\t    \t\t<div class=\"cus-content\">\n\t    \t\t\t<div class=\"\" class=\"\">\n\t    \t\t\t\t<div class=\"row\">\n\t    \t\t\t\t\t<div class=\"col-lg-6 brdr-rght\">\n\t    \t\t\t\t\t\t<ul class=\"nav nav-tabs cstm-ul-new\">\n\t    \t\t\t\t\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#home-cstm\">PHARMACY DETAILS FOR TODAY</a></li>\n<!-- \t    \t\t\t\t\t\t\t<li><a data-toggle=\"tab\" href=\"#menu1-cstm\">Profit</a></li>\n\t    \t\t\t\t\t\t\t<li><a data-toggle=\"tab\" href=\"#menu2-cstm\">Orders</a></li> -->\n\t    \t\t\t\t\t\t</ul>\n\t    \t\t\t\t\t\t<div class=\"tab-content\">\n\t    \t\t\t\t\t\t\t<div id=\"home-cstm\" class=\"tab-pane fade in active\">\n\t    \t\t\t\t\t\t\t\t<div class=\"cstm-pad\">\n\t    \t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t    \t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t    \t\t\t\t\t\t\t\t\t\t\t<table class=\"table tab-new-one\">\n\t    \t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"\">\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"360px\">Total Pharmacy Sales</td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"200px\"><b>{{totalPharmacySales+totalWalkinSales}} &nbsp;</b></td>\n\t    \t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Total Prescription</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalPharmacySalesLength+totalWalkinPatient}} &nbsp; <span class=\"red-u\">(-3)</span></b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"360px\">Prescription Sales</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"200px\"><b>{{totalPharmacySales}} &nbsp;</b><small class=\"xs-small\">({{getData(prescriptionsSalespercentage)}})%</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"360px\">Other Sales</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"200px\"><b>{{checkIsNan(totalSalesWalkin)}} &nbsp;</b><small class=\"xs-small\">({{getData(checkIsNan(getPercentage(totalSalesWalkin,totalSalesDoctorPlusWalkin)))}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Profit</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(totalProfitPrec+totalWalkinProfit)}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"360px\">Cash collection</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"200px\"><b>{{totalCashAmount+totalWalkinCashAmount}} &nbsp;</b><small class=\"xs-small\">({{getData(totalWalkinCashPatient)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"360px\">Online collection</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"200px\"><b>{{totalOnlineAmount+totalWalkinOnlineAmount}} &nbsp;</b><small class=\"xs-small\">({{getData(totalWalkinOnlinePatient)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Total Sale Orders</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalPharmacySalesLength+totalWalkinPatient}}</b><span></span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Prescription Orders</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalPharmacySalesLength}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Other Orders</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalWalkinPatient}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"360px\">Avg sale per Order</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"200px\"><b>{{getData(totalPharmacySales/totalPharmacySalesLength)}} &nbsp;</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Avg profit per Order</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(totalProfitPrec+totalWalkinProfit/(totalPharmacySalesLength+totalWalkinPatient))}} &nbsp;</b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"360px\">Top 10 Products (Sale Num.)</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"200px\"><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal\" (click) =\"getSorted(1)\">View</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"360px\">Top 10 Products (Sale Value)</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"200px\"><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal\" (click) =\"getSorted(2)\">View</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div id=\"menu1-cstm\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t\t<div class=\"cstm-pad\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table tb-1 cstm-tab-new\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Max profit in a day</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(maxProfitOfDay)}} &nbsp; </b><span>({{maxprofitDate | date: 'dd/MM/yyyy'}})</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Min profit in a day</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(minProfitOfDay)}} &nbsp;</b><span>({{minProfitDate | date: 'dd/MM/yyyy'}})</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Avg daily profit</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(totalProfitPrec+totalWalkinProfit/(dateDiff))}} &nbsp;</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Top 10 Products (Max Profit.)</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal2\">View</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"cstm-heading\">PHARMACY PROFIT</h5>     \n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"chart-diagnos chart-box wrap-canavas\" *ngIf=\"!loading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<canvas baseChart class=\"can-vas\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[datasets]=\"lineChartData1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[labels]=\"lineChartLabels1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[options]=\"lineChartOptions1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[colors]=\"lineChartColors\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[legend]=\"lineChartLegend1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[chartType]=\"lineChartType1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(chartClick)=\"chartClicked($event)\"></canvas>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"menu2-cstm\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t\t<div class=\"cstm-pad\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table tb-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Max order in a day</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(maxOrderOfDay)}} &nbsp;</b> <span>({{maxOrderDate | date: 'dd/MM/yyyy'}})</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Min order in a day</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(minOrderOfDay)}} &nbsp;</b><span>({{minOrderDate | date: 'dd/MM/yyyy'}})</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Avg daily order</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getDataCeil((totalPharmacySalesLength+totalWalkinPatient)/(dateDiff))}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"cstm-heading\">PHARMACY ORDERS</h5>     \n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"chart-diagnos chart-box wrap-canavas\" *ngIf=\"!loading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<canvas baseChart class=\"can-vas-1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[datasets]=\"lineChartData2\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[labels]=\"lineChartLabels2\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[options]=\"lineChartOptions2\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[colors]=\"lineChartColors\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[legend]=\"lineChartLegend2\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[chartType]=\"lineChartType2\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(chartClick)=\"chartClicked($event)\"></canvas>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h5 class=\"cstm-heading\">PHARMACY SALES</h5>     \n\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t<div class=\"chart-diagnos chart-box wrap-canavas\" *ngIf=\"!loading\">\n\t\t\t\t\t\t\t\t<canvas baseChart class=\"can-vas\" \n\t\t\t\t\t\t\t\t[datasets]=\"lineChartData\"\n\t\t\t\t\t\t\t\t[labels]=\"lineChartLabels\"\n\t\t\t\t\t\t\t\t[options]=\"lineChartOptions\"\n\t\t\t\t\t\t\t\t[colors]=\"lineChartColors\"\n\t\t\t\t\t\t\t\t[legend]=\"lineChartLegend\"\n\t\t\t\t\t\t\t\t[chartType]=\"lineChartType\"\n\t\t\t\t\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t\t\t\t(chartClick)=\"chartClicked($event)\"></canvas>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"table-responsive res-tab-2\">\n\t\t\t\t\t\t\t\t<table class=\"table tb-1 table-bordered tab-new-cstm\">\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"cstm-tr\">\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tDoctor-wise Break-up\n\t\t\t\t\t\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- <td class=\"text-center\" width=\"80px\"><b>Sr no</b></td> -->\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\t\t\t\t\t\tDoctor Name\n\t\t\t\t\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\t\t\t\t\t\tSales(Rs.) Contribution\n\t\t\t\t\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\t\t\t\t\t\tOrder contribution\n\t\t\t\t\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\t\t\t\t\t\tAvg. Sale prescription\n\t\t\t\t\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let op of dataArray; let i = index\" class=\"cstm-tr-3\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- <td class=\"text-center\" width=\"80px\">{{i+1}}</td> -->\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\tDr. {{getDoctorName(op._id)}}\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{getData(op.total_sales_amount)}}\n\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"fontsmall\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t({{getData(checkIsNan(getPercentage(op.total_sales_amount,totalSalesDoctorPlusWalkin)))}}%)\n\t\t\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{op.conversion}} <small> ({{getData(op.orderPercentage)}}%)</small>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{op.sales_per_pres}}\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <td class=\"text-center\" width=\"80px\">1</td> -->\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\tOther Sales\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{checkIsNan(totalSalesWalkin)}}\n\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"fontsmall\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t({{getData(checkIsNan(getPercentage(totalSalesWalkin,totalSalesDoctorPlusWalkin)))}}%)\n\t\t\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <td class=\"text-center\">{{checkIsNan(totalSalesWalkin)}} <small class='fontsmall'>({{getData(checkIsNan(getPercentage(totalSalesWalkin,totalSalesDoctorPlusWalkin)))}}%)</small></td> -->\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\tN.A\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{getData(checkIsNan(totalSalesWalkin/otherSales.length))}}\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n</div>\n\n</div>\n\n<div class=\"container footer-cstm-an\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-3 text-center\">\n\t\t\t<div>\n\t\t\t\t<p class=\"brdr-rght\">SALES  : <b>{{getData(totalPharmacySales+totalWalkinSales)}}</b></p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-3 text-center\">\n\t\t\t<div>\n\t\t\t\t<p class=\"brdr-rght\">PROFIT  : <b>{{getData(totalProfit)}}</b></p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-3 text-center\">\n\t\t\t<div>\n\t\t\t\t<p class=\"brdr-rght\">CONVERSION : <b>{{checkIsNan(totalConversion)}}%</b></p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-3 text-center \">\n\t\t\t<div>\n\t\t\t\t<p class=\"\">CURRENT STOCK VALUATION  : <b>360000</b></p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Top 10 Products (Sale Num.) -->\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-body cstm-md-bdy\">          \t\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<div class=\"cstm-tab\">\n\t\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Type</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Name</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Total Sales</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Occurence</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Percentage</b></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of topProfitArray | slice: 0:10;let i = index; \">\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-left\">{{data.type}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{data.name}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{data.sales}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{data.occurence}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{getData(data.percentage)}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>      \n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- Top 10 Products (Max Profit.) -->\n<div class=\"modal fade\" id=\"myModal2\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-body cstm-md-bdy\">          \t\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<div class=\"cstm-tab\">\n\t\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Type</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Name</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Total Profit</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Occurence</b></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>Percentage</b></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of topProfitArray | slice: 0:10;let i = index; \">\n\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-left\">{{data.type}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{data.name}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{getData(data.profit)}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{data.occurence}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{getData(data.profitPer)}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>      \n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-pharmacy/dashboard-progress-pharmacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardProgressPharmacyComponent; });
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




var DashboardProgressPharmacyComponent = /** @class */ (function () {
    //charts end ////////2
    function DashboardProgressPharmacyComponent(userService, datePipe, toastr) {
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
            }];
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
            }, {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }, {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        //charts end /////////
        ////Chart Profit //////////////
        this.lineChartData1 = [{
                data: [],
                label: 'Total Profit'
            }];
        this.lineChartLabels1 = [];
        this.lineChartOptions1 = {
            responsive: true,
            legend: {
                display: false,
            }
        };
        this.lineChartLegend1 = true;
        this.lineChartType1 = 'line';
        //charts end /////////
        ////Chart Profit //////////////
        this.lineChartData2 = [{
                data: [],
                label: 'Total Profit'
            }];
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
    DashboardProgressPharmacyComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        this.activatedtab = 0;
        this.activatetab(1);
        this.doctorArray = [];
        this.dataArray = [];
        this.otherSales = [];
    };
    // events
    DashboardProgressPharmacyComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardProgressPharmacyComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardProgressPharmacyComponent.prototype.activatetab = function (i) {
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
        this.totalCashAmount = 0;
        this.totalOnlineAmount = 0;
        this.totalWalkinCashAmount = 0;
        this.totalWalkinOnlineAmount = 0;
        this.maxSaleInADay = 0;
        this.totalWalkinProfit = 0;
        this.maxProfitOfDay = 0;
        this.minProfitOfDay = 0;
        this.maxOrderOfDay = 0;
        this.minOrderOfDay = 0;
        this.dateDiff = 0;
        this.prescriptionArray = [];
        this.totalSalesArray = [];
        this.standaloneArray = [];
        this.prescriptionProfitArray = [];
        this.totalSalesProfitArray = [];
        this.standaloneProfitArray = [];
        this.prescriptionOrdersArray = [];
        this.totalSalesOrdersArray = [];
        this.standaloneOrdersArray = [];
        this.topProfitArray = [];
        this.totalProfitPrec = 0;
        if (i == 1) {
            object.start_date = date;
        }
        // } else if (i == 1) {
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
        this.userService.PharmacyAnalytics(object).subscribe(function (result) {
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
                var total_sales_length = 0;
                _this.doctorArray = result.dataDoctors;
                for (var i = 0; i < result.data.length; i++) {
                    _this.totalPatient = result.data.length;
                    for (var j = 0; j < result.data[i].total_sales.length; j++) {
                        if (result.data[i].total_sales[j].pharmacy == true) {
                            _this.totalPharmacySales += result.data[i].total_sales[j].pharmacy_sales;
                            _this.totalPharmacySalesLength++;
                            maxInData.push(result.data[i].total_sales[j].pharmacy_sales);
                            maxArray.push(_this.datePipe.transform(result.data[i].total_sales[j].createdAt, 'yyyy-MM-dd'));
                            _this.totalProfitPrec += result.data[i].total_sales[j].pharmacy_sales - result.data[i].total_sales[j].pharmacy_cost;
                            maxProfit.push(result.data[i].total_sales[j].pharmacy_sales - result.data[i].total_sales[j].pharmacy_cost);
                            total_sales_length++;
                            if (result.data[i].total_sales[j].payment_mode_pharmacy == 'Cash') {
                                _this.totalCashAmount += result.data[i].total_sales[j].pharmacy_sales;
                                _this.totalWalkinCashPatient++;
                            }
                            else {
                                _this.totalOnlineAmount += result.data[i].total_sales[j].pharmacy_sales;
                                _this.totalWalkinOnlinePatient++;
                            }
                        }
                    }
                    maxOrder.push(result.data[i].total_sales.length);
                }
                console.log(walkinTrue);
                for (var i = 0; i < walkinTrue.length; i++) {
                    _this.totalWalkinPatient = walkinTrue.length;
                    _this.totalWalkinSales += walkinTrue[i].total_amount;
                    _this.totalWalkinProfit += walkinTrue[i].total_amount - walkinTrue[i].cost_amount;
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
                console.log(_this.totalProfitPrec, _this.totalWalkinProfit);
                var diff = Math.abs(_this.toDate.getTime() - _this.fromDate.getTime());
                _this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
                _this.totalWalkinOnlinePatient = (_this.totalWalkinOnlinePatient * 100) / (total_sales_length + _this.totalWalkinPatient);
                _this.totalWalkinCashPatient = (_this.totalWalkinCashPatient * 100) / (total_sales_length + _this.totalWalkinPatient);
                _this.prescriptionsSalespercentage = (_this.totalPharmacySales / (_this.totalPharmacySales + _this.totalWalkinSales)) * 100;
                _this.NonprescriptionsSalespercentage = (_this.totalWalkinSales / (_this.totalPharmacySales + _this.totalWalkinSales)) * 100;
                _this.totalSalePercentage = (_this.totalPharmacySalesLength / (_this.totalPharmacySalesLength + _this.totalWalkinPatient)) * 100;
                _this.totalNonSalePercentage = (_this.totalWalkinPatient / (_this.totalPharmacySalesLength + _this.totalWalkinPatient)) * 100;
                _this.dataArray = result.data;
                _this.otherSales = walkinTrue;
                console.log(_this.totalPharmacySalesLength);
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.dataArray[i].true_sales = [];
                    _this.dataArray[i].false_sales = [];
                    _this.dataArray[i].total_sales_amount = 0;
                    _this.dataArray[i].sales_per_pres = 0;
                    _this.dataArray[i].orderPercentage = 0;
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
                    //  this.dataArray[i].conversion = this.getData((this.dataArray[i].true_sales.length * 100) / this.dataArray[i].total_sales.length)
                    _this.dataArray[i].conversion = _this.dataArray[i].true_sales.length;
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
                // this.totalConversion = this.getData((this.totalSales * 100) / this.totalPrescriptions)
                // this.totalSalesPerPres = this.totalSalesPerPres + parseFloat(this.getData(this.totalSalesAmount / this.totalSales))
                //calculate amount for walkin patients//
                for (var i = 0; i < walkinTrue.length; i++) {
                    _this.totalProfit = _this.totalProfit + (walkinTrue[i].total_amount - walkinTrue[i].cost_amount);
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
                    var total_prep_profit_amount = 0;
                    var total_walkin_profit_amount = 0;
                    var total_prep_orders = 0;
                    for (var j = 0; j < _this.dataArray.length; j++) {
                        for (var k = 0; k < _this.dataArray[j].total_sales.length; k++) {
                            if (_this.dataArray[j].total_sales[k].pharmacy == true) {
                                if (newMaxArray[i] == _this.datePipe.transform(_this.dataArray[j].total_sales[k].createdAt, 'yyyy-MM-dd')) {
                                    total_prep_amount += _this.dataArray[j].total_sales[k].pharmacy_sales;
                                    total_prep_profit_amount += (_this.dataArray[j].total_sales[k].pharmacy_sales - _this.dataArray[j].total_sales[k].pharmacy_cost);
                                    total_prep_orders++;
                                    total_prep_orders = total_prep_orders + 1;
                                }
                            }
                        }
                    }
                    _this.prescriptionOrdersArray.push(total_prep_orders);
                    _this.prescriptionArray.push(total_prep_amount);
                    _this.prescriptionProfitArray.push(total_prep_profit_amount);
                    var total_walkin_orders = 0;
                    for (var l = 0; l < _this.otherSales.length; l++) {
                        //total_walkin_orders = (this.otherSales.length)
                        if (newMaxArray[i] == _this.datePipe.transform(_this.otherSales[l].createdAt, 'yyyy-MM-dd')) {
                            total_walkin_amount += _this.otherSales[l].total_amount;
                            total_walkin_profit_amount += (_this.otherSales[l].total_amount - _this.otherSales[l].cost_amount);
                            total_walkin_orders++;
                            total_walkin_orders = total_walkin_orders + 1;
                        }
                    }
                    _this.standaloneOrdersArray.push(total_walkin_orders);
                    _this.standaloneArray.push(total_walkin_amount);
                    _this.totalSalesArray.push(total_prep_amount + total_walkin_amount);
                    _this.standaloneProfitArray.push(total_walkin_profit_amount);
                    _this.totalSalesProfitArray.push(total_prep_profit_amount + total_walkin_profit_amount);
                    _this.totalSalesOrdersArray.push(total_prep_orders + total_walkin_orders);
                    dateArray.push(newMaxArray[i]);
                }
                _this.maxSaleOfDay = Math.max.apply(Math, _this.totalSalesArray);
                _this.minSaleOfDay = Math.min.apply(Math, _this.totalSalesArray);
                var newMaxValue = -1;
                newMaxValue = _this.totalSalesArray.findIndex(function (x) { return x == _this.maxSaleOfDay; });
                _this.maxCollectionDate = newMaxArray[newMaxValue];
                var newMinValue = -1;
                newMinValue = _this.totalSalesArray.findIndex(function (x) { return x == _this.minSaleOfDay; });
                _this.minCollectionDate = newMaxArray[newMinValue];
                /////////// set chart detail ///////////////
                _this.lineChartData = [{
                        data: _this.totalSalesArray,
                        label: 'Total Sales'
                    }];
                _this.datesArray = dateArray;
                _this.lineChartLabels = _this.datesArray;
                /////////// set chart detail ///////////////
                /////////////Chart Profit/////////////////////
                _this.maxProfitOfDay = Math.max.apply(Math, _this.totalSalesProfitArray);
                _this.minProfitOfDay = Math.min.apply(Math, _this.totalSalesProfitArray);
                _this.maxOrderOfDay = Math.max.apply(Math, _this.totalSalesOrdersArray);
                _this.minOrderOfDay = Math.min.apply(Math, _this.totalSalesOrdersArray);
                var newMaxProfit = -1;
                newMaxProfit = _this.totalSalesProfitArray.findIndex(function (x) { return x == _this.maxProfitOfDay; });
                _this.maxprofitDate = maxArray[newMaxProfit];
                var newMinProfit = -1;
                newMinProfit = _this.totalSalesProfitArray.findIndex(function (x) { return x == _this.minProfitOfDay; });
                _this.minProfitDate = maxArray[newMinProfit];
                var newMinOrder = -1;
                newMinOrder = _this.totalSalesOrdersArray.findIndex(function (x) { return x == _this.minOrderOfDay; });
                _this.minOrderDate = maxArray[newMinOrder];
                var newMaxOrder = -1;
                newMaxOrder = _this.totalSalesOrdersArray.findIndex(function (x) { return x == _this.maxOrderOfDay; });
                _this.maxOrderDate = maxArray[newMaxOrder];
                _this.lineChartData1 = [{
                        data: _this.totalSalesProfitArray,
                        label: 'Total Profit'
                    }];
                _this.lineChartLabels1 = _this.datesArray;
                _this.lineChartData2 = [{
                        data: _this.totalSalesOrdersArray,
                        label: 'Total Orders'
                    }];
                _this.lineChartLabels2 = _this.datesArray;
                var profitDateArray = [];
                var orderDateArray = [];
                for (var i = 0; i < dateArray.length; i++) {
                    profitDateArray.push(dateArray[i]);
                    orderDateArray.push(dateArray[i]);
                }
                /////////////////////////// Map Date Sort Logic //////////////////////
                _this.sortSales(dateArray, _this.totalSalesArray);
                _this.sortProfit(profitDateArray, _this.totalSalesProfitArray);
                _this.sortOrder(orderDateArray, _this.totalSalesOrdersArray);
                ///////////////////////// Map End sort Logic //////////////////////// 
                //////////////////////////Top 10 Products///////////////////
                for (var i = 0; i < result.data1.length; i++) {
                    for (var j = 0; j < result.data1[i].medicines.length; j++) {
                        for (var k = 0; k < result.data1[i].medicines[j].amount.length; k++) {
                            var boolean = false;
                            for (var a = 0; a < _this.topProfitArray.length; a++) {
                                if (result.data1[i].medicines[j].opt[k] == _this.topProfitArray[a].type &&
                                    result.data1[i].medicines[j].product[k] == _this.topProfitArray[a].name) {
                                    boolean = true;
                                }
                            }
                            if (boolean == false) {
                                _this.topProfitArray.push({
                                    type: result.data1[i].medicines[j].opt[k],
                                    name: result.data1[i].medicines[j].product[k],
                                    sales: 0,
                                    occurence: 0,
                                    percentage: 0,
                                    profit: 0,
                                    profitPer: 0
                                });
                            }
                        }
                    }
                }
                console.log(result.data1);
                var totalMRP = 0;
                var totalPrate = 0;
                for (var a = 0; a < _this.topProfitArray.length; a++) {
                    for (var i = 0; i < result.data1.length; i++) {
                        for (var j = 0; j < result.data1[i].medicines.length; j++) {
                            for (var k = 0; k < result.data1[i].medicines[j].amount.length; k++) {
                                if (result.data1[i].medicines[j].opt[k] == _this.topProfitArray[a].type &&
                                    result.data1[i].medicines[j].product[k] == _this.topProfitArray[a].name) {
                                    _this.topProfitArray[a].occurence++;
                                    _this.topProfitArray[a].sales += result.data1[i].medicines[j].amount[k];
                                    _this.topProfitArray[a].percentage = (_this.topProfitArray[a].sales * 100) / (_this.totalWalkinSales + _this.totalPharmacySales);
                                    totalPrate = (result.data1[i].medicines[j].medicineStock[k].data.p_rate / (result.data1[i].medicines[j].medicineStock[k].data.pack_units * result.data1[i].medicines[j].medicineStock[k].data.pack_quantity)) * result.data1[i].medicines[j].quantity[k];
                                    totalMRP = (result.data1[i].medicines[j].mrp[k]); //.data.mrp/(result.data1[i].medicines[j].medicineStock[k].data.pack_units*result.data1[i].medicines[j].medicineStock[k].data.pack_quantity))*result.data1[i].medicines[j].quantity[k]
                                    _this.topProfitArray[a].profit += (totalMRP - totalPrate);
                                    _this.topProfitArray[a].profitPer = (_this.topProfitArray[a].profit * 100) / (_this.totalProfitPrec + _this.totalWalkinProfit);
                                }
                            }
                        }
                    }
                }
                /////////////////////////Top 10 End ///////////////////////
            }
            _this.getFiveMinData();
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardProgressPharmacyComponent.prototype.getFiveMinData = function () {
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
                        amount_data = this.dataArray[j].total_sales[k].pharmacy_sales;
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
    DashboardProgressPharmacyComponent.prototype.otherRange = function (start, end, step) {
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
    DashboardProgressPharmacyComponent.prototype.getSorted = function (abc) {
        if (abc == 1) {
            this.topProfitArray.sort(function (a, b) { return parseInt(b.occurence) - parseInt(a.occurence); });
        }
        else if (abc == 2) {
            this.topProfitArray.sort(function (a, b) { return parseInt(b.sales) - parseInt(a.sales); });
        }
        else {
            this.topProfitArray.sort(function (a, b) { return parseInt(b.profit) - parseInt(a.profit); });
        }
    };
    DashboardProgressPharmacyComponent.prototype.sortSales = function (a, b) {
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
    DashboardProgressPharmacyComponent.prototype.sortProfit = function (a, b) {
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
        var newDateArray1 = [];
        for (var i = 0; i < a.length; i++) {
            newDateArray1.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'));
        }
        this.lineChartLabels1 = newDateArray1;
    };
    DashboardProgressPharmacyComponent.prototype.sortOrder = function (a, b) {
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
        var newDateArray3 = [];
        for (var i = 0; i < a.length; i++) {
            newDateArray3.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'));
        }
        this.lineChartLabels2 = newDateArray3;
    };
    DashboardProgressPharmacyComponent.prototype.go = function () {
        var _this = this;
        this.activatedtab = 0;
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
        this.totalCashAmount = 0;
        this.totalOnlineAmount = 0;
        this.totalWalkinCashAmount = 0;
        this.totalWalkinOnlineAmount = 0;
        this.maxSaleInADay = 0;
        this.totalWalkinProfit = 0;
        this.maxProfitOfDay = 0;
        this.minProfitOfDay = 0;
        this.maxOrderOfDay = 0;
        this.minOrderOfDay = 0;
        this.dateDiff = 0;
        this.prescriptionArray = [];
        this.totalSalesArray = [];
        this.standaloneArray = [];
        this.prescriptionProfitArray = [];
        this.totalSalesProfitArray = [];
        this.standaloneProfitArray = [];
        this.prescriptionOrdersArray = [];
        this.totalSalesOrdersArray = [];
        this.standaloneOrdersArray = [];
        this.topProfitArray = [];
        var object;
        object = {};
        object.start_date = this.fromDate1;
        object.end_date = this.toDate1;
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id;
        if (new Date(this.toDate1).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        this.loading = true;
        this.userService.PharmacyAnalytics(object).subscribe(function (result) {
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
                var total_sales_length = 0;
                _this.doctorArray = result.dataDoctors;
                for (var i = 0; i < result.data.length; i++) {
                    _this.totalPatient = result.data.length;
                    for (var j = 0; j < result.data[i].total_sales.length; j++) {
                        if (result.data[i].total_sales[j].pharmacy == true) {
                            _this.totalPharmacySales += result.data[i].total_sales[j].pharmacy_sales;
                            _this.totalPharmacySalesLength++;
                            maxInData.push(result.data[i].total_sales[j].pharmacy_sales);
                            maxArray.push(_this.datePipe.transform(result.data[i].total_sales[j].createdAt, 'yyyy-MM-dd'));
                            _this.totalProfitPrec += result.data[i].total_sales[j].pharmacy_sales - result.data[i].total_sales[j].pharmacy_cost;
                            maxProfit.push(result.data[i].total_sales[j].pharmacy_sales - result.data[i].total_sales[j].pharmacy_cost);
                            total_sales_length++;
                            if (result.data[i].total_sales[j].payment_mode_pharmacy == 'Cash') {
                                _this.totalCashAmount += result.data[i].total_sales[j].pharmacy_sales;
                                _this.totalWalkinCashPatient++;
                            }
                            else {
                                _this.totalOnlineAmount += result.data[i].total_sales[j].pharmacy_sales;
                                _this.totalWalkinOnlinePatient++;
                            }
                        }
                    }
                    maxOrder.push(result.data[i].total_sales.length);
                }
                console.log(walkinTrue);
                for (var i = 0; i < walkinTrue.length; i++) {
                    _this.totalWalkinPatient = walkinTrue.length;
                    _this.totalWalkinSales += walkinTrue[i].total_amount;
                    _this.totalWalkinProfit += walkinTrue[i].total_amount - walkinTrue[i].cost_amount;
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
                console.log(_this.totalProfitPrec, _this.totalWalkinProfit);
                var diff = Math.abs(new Date(_this.toDate).getTime() - new Date(_this.fromDate).getTime());
                _this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
                _this.totalWalkinOnlinePatient = (_this.totalWalkinOnlinePatient * 100) / (total_sales_length + _this.totalWalkinPatient);
                _this.totalWalkinCashPatient = (_this.totalWalkinCashPatient * 100) / (total_sales_length + _this.totalWalkinPatient);
                _this.prescriptionsSalespercentage = (_this.totalPharmacySales / (_this.totalPharmacySales + _this.totalWalkinSales)) * 100;
                _this.NonprescriptionsSalespercentage = (_this.totalWalkinSales / (_this.totalPharmacySales + _this.totalWalkinSales)) * 100;
                _this.totalSalePercentage = (_this.totalPharmacySalesLength / (_this.totalPharmacySalesLength + _this.totalWalkinPatient)) * 100;
                _this.totalNonSalePercentage = (_this.totalWalkinPatient / (_this.totalPharmacySalesLength + _this.totalWalkinPatient)) * 100;
                _this.dataArray = result.data;
                _this.otherSales = walkinTrue;
                console.log(_this.totalPharmacySalesLength);
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.dataArray[i].true_sales = [];
                    _this.dataArray[i].false_sales = [];
                    _this.dataArray[i].total_sales_amount = 0;
                    _this.dataArray[i].sales_per_pres = 0;
                    _this.dataArray[i].orderPercentage = 0;
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
                    //  this.dataArray[i].conversion = this.getData((this.dataArray[i].true_sales.length * 100) / this.dataArray[i].total_sales.length)
                    _this.dataArray[i].conversion = _this.dataArray[i].true_sales.length;
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
                // this.totalConversion = this.getData((this.totalSales * 100) / this.totalPrescriptions)
                // this.totalSalesPerPres = this.totalSalesPerPres + parseFloat(this.getData(this.totalSalesAmount / this.totalSales))
                //calculate amount for walkin patients//
                for (var i = 0; i < walkinTrue.length; i++) {
                    _this.totalProfit = _this.totalProfit + (walkinTrue[i].total_amount - walkinTrue[i].cost_amount);
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
                    var total_prep_profit_amount = 0;
                    var total_walkin_profit_amount = 0;
                    var total_prep_orders = 0;
                    for (var j = 0; j < _this.dataArray.length; j++) {
                        for (var k = 0; k < _this.dataArray[j].total_sales.length; k++) {
                            if (_this.dataArray[j].total_sales[k].pharmacy == true) {
                                if (newMaxArray[i] == _this.datePipe.transform(_this.dataArray[j].total_sales[k].createdAt, 'yyyy-MM-dd')) {
                                    total_prep_amount += _this.dataArray[j].total_sales[k].pharmacy_sales;
                                    total_prep_profit_amount += (_this.dataArray[j].total_sales[k].pharmacy_sales - _this.dataArray[j].total_sales[k].pharmacy_cost);
                                    total_prep_orders++;
                                    total_prep_orders = total_prep_orders + 1;
                                }
                            }
                        }
                    }
                    _this.prescriptionOrdersArray.push(total_prep_orders);
                    _this.prescriptionArray.push(total_prep_amount);
                    _this.prescriptionProfitArray.push(total_prep_profit_amount);
                    var total_walkin_orders = 0;
                    for (var l = 0; l < _this.otherSales.length; l++) {
                        //total_walkin_orders = (this.otherSales.length)
                        if (newMaxArray[i] == _this.datePipe.transform(_this.otherSales[l].createdAt, 'yyyy-MM-dd')) {
                            total_walkin_amount += _this.otherSales[l].total_amount;
                            total_walkin_profit_amount += (_this.otherSales[l].total_amount - _this.otherSales[l].cost_amount);
                            total_walkin_orders++;
                            total_walkin_orders = total_walkin_orders + 1;
                        }
                    }
                    _this.standaloneOrdersArray.push(total_walkin_orders);
                    _this.standaloneArray.push(total_walkin_amount);
                    _this.totalSalesArray.push(total_prep_amount + total_walkin_amount);
                    _this.standaloneProfitArray.push(total_walkin_profit_amount);
                    _this.totalSalesProfitArray.push(total_prep_profit_amount + total_walkin_profit_amount);
                    _this.totalSalesOrdersArray.push(total_prep_orders + total_walkin_orders);
                    dateArray.push(newMaxArray[i]);
                }
                _this.maxSaleOfDay = Math.max.apply(Math, _this.totalSalesArray);
                _this.minSaleOfDay = Math.min.apply(Math, _this.totalSalesArray);
                var newMaxValue = -1;
                newMaxValue = _this.totalSalesArray.findIndex(function (x) { return x == _this.maxSaleOfDay; });
                _this.maxCollectionDate = newMaxArray[newMaxValue];
                var newMinValue = -1;
                newMinValue = _this.totalSalesArray.findIndex(function (x) { return x == _this.minSaleOfDay; });
                _this.minCollectionDate = newMaxArray[newMinValue];
                /////////// set chart detail ///////////////
                _this.lineChartData = [{
                        data: _this.totalSalesArray,
                        label: 'Total Sales'
                    }];
                _this.datesArray = dateArray;
                _this.lineChartLabels = _this.datesArray;
                /////////// set chart detail ///////////////
                /////////////Chart Profit/////////////////////
                _this.maxProfitOfDay = Math.max.apply(Math, _this.totalSalesProfitArray);
                _this.minProfitOfDay = Math.min.apply(Math, _this.totalSalesProfitArray);
                _this.maxOrderOfDay = Math.max.apply(Math, _this.totalSalesOrdersArray);
                _this.minOrderOfDay = Math.min.apply(Math, _this.totalSalesOrdersArray);
                var newMaxProfit = -1;
                newMaxProfit = _this.totalSalesProfitArray.findIndex(function (x) { return x == _this.maxProfitOfDay; });
                _this.maxprofitDate = maxArray[newMaxProfit];
                var newMinProfit = -1;
                newMinProfit = _this.totalSalesProfitArray.findIndex(function (x) { return x == _this.minProfitOfDay; });
                _this.minProfitDate = maxArray[newMinProfit];
                var newMinOrder = -1;
                newMinOrder = _this.totalSalesOrdersArray.findIndex(function (x) { return x == _this.minOrderOfDay; });
                _this.minOrderDate = maxArray[newMinOrder];
                var newMaxOrder = -1;
                newMaxOrder = _this.totalSalesOrdersArray.findIndex(function (x) { return x == _this.maxOrderOfDay; });
                _this.maxOrderDate = maxArray[newMaxOrder];
                _this.lineChartData1 = [{
                        data: _this.totalSalesProfitArray,
                        label: 'Total Profit'
                    }];
                _this.lineChartLabels1 = _this.datesArray;
                _this.lineChartData2 = [{
                        data: _this.totalSalesOrdersArray,
                        label: 'Total Orders'
                    }];
                _this.lineChartLabels2 = _this.datesArray;
                var profitDateArray = [];
                var orderDateArray = [];
                for (var i = 0; i < dateArray.length; i++) {
                    profitDateArray.push(dateArray[i]);
                    orderDateArray.push(dateArray[i]);
                }
                /////////////////////////// Map Date Sort Logic //////////////////////
                _this.sortSales(dateArray, _this.totalSalesArray);
                _this.sortProfit(profitDateArray, _this.totalSalesProfitArray);
                _this.sortOrder(orderDateArray, _this.totalSalesOrdersArray);
                ///////////////////////// Map End sort Logic //////////////////////// 
                //////////////////////////Top 10 Products///////////////////
                for (var i = 0; i < result.data1.length; i++) {
                    for (var j = 0; j < result.data1[i].medicines.length; j++) {
                        for (var k = 0; k < result.data1[i].medicines[j].amount.length; k++) {
                            var boolean = false;
                            for (var a = 0; a < _this.topProfitArray.length; a++) {
                                if (result.data1[i].medicines[j].opt[k] == _this.topProfitArray[a].type &&
                                    result.data1[i].medicines[j].product[k] == _this.topProfitArray[a].name) {
                                    boolean = true;
                                }
                            }
                            if (boolean == false) {
                                _this.topProfitArray.push({
                                    type: result.data1[i].medicines[j].opt[k],
                                    name: result.data1[i].medicines[j].product[k],
                                    sales: 0,
                                    occurence: 0,
                                    percentage: 0,
                                    profit: 0,
                                    profitPer: 0
                                });
                            }
                        }
                    }
                }
                console.log(result.data1);
                var totalMRP = 0;
                var totalPrate = 0;
                for (var a = 0; a < _this.topProfitArray.length; a++) {
                    for (var i = 0; i < result.data1.length; i++) {
                        for (var j = 0; j < result.data1[i].medicines.length; j++) {
                            for (var k = 0; k < result.data1[i].medicines[j].amount.length; k++) {
                                if (result.data1[i].medicines[j].opt[k] == _this.topProfitArray[a].type &&
                                    result.data1[i].medicines[j].product[k] == _this.topProfitArray[a].name) {
                                    _this.topProfitArray[a].occurence++;
                                    _this.topProfitArray[a].sales += result.data1[i].medicines[j].amount[k];
                                    _this.topProfitArray[a].percentage = (_this.topProfitArray[a].sales * 100) / (_this.totalWalkinSales + _this.totalPharmacySales);
                                    totalPrate = (result.data1[i].medicines[j].medicineStock[k].data.p_rate / (result.data1[i].medicines[j].medicineStock[k].data.pack_units * result.data1[i].medicines[j].medicineStock[k].data.pack_quantity)) * result.data1[i].medicines[j].quantity[k];
                                    totalMRP = (result.data1[i].medicines[j].mrp[k]); //.data.mrp/(result.data1[i].medicines[j].medicineStock[k].data.pack_units*result.data1[i].medicines[j].medicineStock[k].data.pack_quantity))*result.data1[i].medicines[j].quantity[k]
                                    _this.topProfitArray[a].profit += (totalMRP - totalPrate);
                                    _this.topProfitArray[a].profitPer = (_this.topProfitArray[a].profit * 100) / (_this.totalProfitPrec + _this.totalWalkinProfit);
                                }
                            }
                        }
                    }
                }
                /////////////////////////Top 10 End ///////////////////////
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardProgressPharmacyComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    DashboardProgressPharmacyComponent.prototype.getData = function (data) {
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
    DashboardProgressPharmacyComponent.prototype.getDoctorName = function (id) {
        for (var i = 0; i < this.doctorArray.length; i++) {
            if (this.doctorArray[i]._id == id) {
                return (this.doctorArray[i].first_name);
            }
        }
    };
    DashboardProgressPharmacyComponent.prototype.checkIsNan = function (data) {
        if (isNaN(data)) {
            return 0;
        }
        else {
            return data;
        }
    };
    DashboardProgressPharmacyComponent.prototype.getPercentage = function (data, total) {
        return ((data * 100) / total);
    };
    DashboardProgressPharmacyComponent.prototype.getOrderDate = function (date) {
        var count = 0;
        for (var i = 0; i < this.dataArray.length; i++) {
            for (var j = 0; j < this.dataArray[i].total_sales.length; j++) {
                if (new Date(date).setHours(0, 0, 0, 0) == new Date(this.dataArray[i].total_sales[j].createdAt).setHours(0, 0, 0, 0)) {
                    count++;
                }
            }
        }
        return count;
    };
    DashboardProgressPharmacyComponent.prototype.getDataCeil = function (data) {
        return Math.ceil(data);
    };
    DashboardProgressPharmacyComponent.prototype.getClassMap = function (data, i) {
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
    DashboardProgressPharmacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-progress-pharmacy',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-pharmacy/dashboard-progress-pharmacy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-pharmacy/dashboard-progress-pharmacy.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], DashboardProgressPharmacyComponent);
    return DashboardProgressPharmacyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-pharmacy/dashboard-progress-pharmacy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardProgressPharmacyModule", function() { return DashboardProgressPharmacyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_progress_pharmacy_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-pharmacy/dashboard-progress-pharmacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_progress_pharmacy_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-pharmacy/dashboard-progress-pharmacy-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardProgressPharmacyModule = /** @class */ (function () {
    function DashboardProgressPharmacyModule() {
    }
    DashboardProgressPharmacyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__dashboard_progress_pharmacy_routing_module__["a" /* DashboardProgressPharmacyRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_progress_pharmacy_component__["a" /* DashboardProgressPharmacyComponent */]]
        })
    ], DashboardProgressPharmacyModule);
    return DashboardProgressPharmacyModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-progress-pharmacy.module.chunk.js.map