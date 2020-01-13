webpackJsonp(["dashboard-diagnostics-detail.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-diagnostics-detail/dashboard-diagnostics-detail-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDiagnosticsDetailRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_diagnostics_detail_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-diagnostics-detail/dashboard-diagnostics-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_diagnostics_detail_component__["a" /* DashboardDiagnosticsDetailComponent */],
    }
];
var DashboardDiagnosticsDetailRoutingModule = /** @class */ (function () {
    function DashboardDiagnosticsDetailRoutingModule() {
    }
    DashboardDiagnosticsDetailRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardDiagnosticsDetailRoutingModule);
    return DashboardDiagnosticsDetailRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-diagnostics-detail/dashboard-diagnostics-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-diagnostics-detail/dashboard-diagnostics-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"analytics-sec\">\n\t\n\t<div class=\"ipd-deatil-sec\">\n\t\t<div class=\"md-tab\">\n\t      \t<!-- Nav tabs -->\n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-prescription\"> Consultation </a></li>\n\t          \t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-pharmacy-detail\"> Clinic Services </a></li>\n\t      \t</ul>\n\t    </div>\n\n\t    <div class=\"inner-tab\">\n\t    \t<!-- Nav tabs -->\n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-pharmacy-detail\"> Pharmacy </a></li>\n\t          \t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-diagnostics-detail\"> Diagnostics </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-ipd-detail\"> IPD </a></li>\n\t      \t</ul>\n\t    </div>\n\n\t    <div class=\"ipd-body\">\n\t    \t<div class=\"cus-sidebar-wrapper\">\n\t    \t\t<div class=\"cus-sidebar\">\n\t    \t\t\t<ul>\n\t    \t\t\t\t<li class=\"{{getClass(0)}}\" (click)=\"activatetab(0)\" class=\"active\"> <a href=\"javascript:void(0);\"> Current </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(1)}}\" (click)=\"activatetab(1)\"> <a href=\"javascript:void(0);\"> 7 Days </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(2)}}\" (click)=\"activatetab(2)\"> <a href=\"javascript:void(0);\"> 14 Days </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> Max </a> </li>\n\t    \t\t\t</ul>\n\t    \t\t</div>\n\t    \t</div>\n\n    \t\t<div class=\"cus-content-wrapper\">\n    \t\t\t<div class=\"cus-content\">\n\n\t    \t\t\t<div class=\"\" *ngIf=\"activatedtab==0\">\n\t    \t\t\t\t\n\t    \t\t\t\t<div class=\"chart-diagnos chart-box\">\n\t\t    \t\t\t\t<canvas baseChart\n\t\t\t                [datasets]=\"lineChartData\"\n\t\t\t                [labels]=\"lineChartLabels\"\n\t\t\t                [options]=\"lineChartOptions\"\n\t\t\t                [colors]=\"lineChartColors\"\n\t\t\t                [legend]=\"lineChartLegend\"\n\t\t\t                [chartType]=\"lineChartType\"\n\t\t\t                (chartHover)=\"chartHovered($event)\"\n\t\t\t                (chartClick)=\"chartClicked($event)\"></canvas>\n\t\t\t            </div>\n\t\t\t            <div class=\"row\">\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total Diagnostics Sales </label>\n\t\t\t    \t\t\t\t<p> Rs. 8575.0 (+1456.0) (75 orders) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total prescription sales (all doctors)  </label>\n\t\t\t    \t\t\t\t<p> Rs. 6500.0 (76%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total Standalone Sales </label>\n\t\t\t    \t\t\t\t<p> Rs.2075.0 (24%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Patients using Clinic Diagnostics </label>\n\t\t\t    \t\t\t\t<p> 54/64 (85%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t\n\n\t\t\t    \t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t    \t\t\t\t<h4> Doctor-wise break-up </h4>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t\t<div class=\"table-responsive col-md-12 col-sm-12 col-xs-12\">\n\t\t\t    \t\t\t\t<table class=\"table table-striped\">\n\t\t\t    \t\t\t\t\t<thead>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<th> Clinic Doctor Name </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Sales Contribution (Rs.) </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Patients using clinic Pharmacy </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Medication Cost/patient(Rs.) </th>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t</thead>\n\t\t\t    \t\t\t\t\t<tbody>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 3000 (50%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 22/28 (79%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 3000/22 = 136 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 3000 (50%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 22/28 (79%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 3000/22 = 136 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 3000 (50%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 22/28 (79%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 3000/22 = 136 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 3000 (50%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 22/28 (79%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 3000/22 = 136 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t</tbody>\n\t\t\t    \t\t\t\t</table>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t</div>\n\n\t    \t\t\t</div>\n\t\t\t    \t\n\t\t\t    \t<div class=\"\" *ngIf=\"activatedtab==1\">\n\t\t\t    \t\t\n\t\t\t    \t\t<div class=\"row\">\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total Diagnostics Sales </label>\n\t\t\t    \t\t\t\t<p> Rs. 38575.0 (400 orders) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total prescription sales (all doctors) </label>\n\t\t\t    \t\t\t\t<p> Rs. 26500.0 (76%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total Standalone Sales </label>\n\t\t\t    \t\t\t\t<p> Rs.12075.0 (24%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Patient turnout at Diagnostics (%) </label>\n\t\t\t    \t\t\t\t<p> 354/417 (85%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Maximum Sale in a day </label>\n\t\t\t    \t\t\t\t<p> Rs. 18575.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Minimum Sale in a day </label>\n\t\t\t    \t\t\t\t<p> Rs. 6500.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Average daily Sales </label>\n\t\t\t    \t\t\t\t<p> Rs.10075.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t    \t\t\t\t<h4> Doctor-wise break-up </h4>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t\t<div class=\"table-responsive col-md-12 col-sm-12 col-xs-12\">\n\t\t\t    \t\t\t\t<table class=\"table table-striped\">\n\t\t\t    \t\t\t\t\t<thead>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<th> Clinic Doctor Name </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Sales Contribution (Rs.) </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Patient turnout at clinic pharmacy </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Medication Cost/patient (Rs.) </th>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t</thead>\n\t\t\t    \t\t\t\t\t<tbody>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\n\t\t\t    \t\t\t\t\t</tbody>\n\t\t\t    \t\t\t\t</table>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t</div>\n\n\t\t\t    \t</div>\n\n\t\t\t    \t<div class=\"\" *ngIf=\"activatedtab==2\">\n\t\t\t    \t\t<div class=\"row\">\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total Diagnostics Sales </label>\n\t\t\t    \t\t\t\t<p> Rs. 38575.0 (400 orders) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total prescription sales (all doctors) </label>\n\t\t\t    \t\t\t\t<p> Rs. 26500.0 (76%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total Standalone Sales </label>\n\t\t\t    \t\t\t\t<p> Rs.12075.0 (24%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Patient turnout at Diagnostics (%) </label>\n\t\t\t    \t\t\t\t<p> 354/417 (85%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Maximum Sale in a day </label>\n\t\t\t    \t\t\t\t<p> Rs. 18575.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Minimum Sale in a day </label>\n\t\t\t    \t\t\t\t<p> Rs. 6500.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Average daily Sales </label>\n\t\t\t    \t\t\t\t<p> Rs.10075.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t    \t\t\t\t<h4> Doctor-wise break-up </h4>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t\t<div class=\"table-responsive col-md-12 col-sm-12 col-xs-12\">\n\t\t\t    \t\t\t\t<table class=\"table table-striped\">\n\t\t\t    \t\t\t\t\t<thead>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<th> Clinic Doctor Name </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Sales Contribution (Rs.) </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Patient turnout at clinic pharmacy </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Medication Cost/patient (Rs.) </th>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t</thead>\n\t\t\t    \t\t\t\t\t<tbody>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t\n\t\t\t    \t\t\t\t\t</tbody>\n\t\t\t    \t\t\t\t</table>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t</div>\n\t\t\t    \t</div>\n\n\t\t\t    \t<div class=\"\" *ngIf=\"activatedtab==3\">\n\t\t\t    \t\t<div class=\"row\">\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total Diagnostics Sales </label>\n\t\t\t    \t\t\t\t<p> Rs. 38575.0 (400 orders) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total prescription sales (all doctors) </label>\n\t\t\t    \t\t\t\t<p> Rs. 26500.0 (76%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total Standalone Sales </label>\n\t\t\t    \t\t\t\t<p> Rs.12075.0 (24%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Patient turnout at Diagnostics (%) </label>\n\t\t\t    \t\t\t\t<p> 354/417 (85%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Maximum Sale in a day </label>\n\t\t\t    \t\t\t\t<p> Rs. 18575.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Minimum Sale in a day </label>\n\t\t\t    \t\t\t\t<p> Rs. 6500.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Average daily Sales </label>\n\t\t\t    \t\t\t\t<p> Rs.10075.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t    \t\t\t\t<h4> Doctor-wise break-up </h4>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t\t<div class=\"table-responsive col-md-12 col-sm-12 col-xs-12\">\n\t\t\t    \t\t\t\t<table class=\"table table-striped\">\n\t\t\t    \t\t\t\t\t<thead>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<th> Clinic Doctor Name </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Sales Contribution (Rs.) </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Patient turnout at clinic pharmacy </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Medication Cost/patient (Rs.) </th>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t</thead>\n\t\t\t    \t\t\t\t\t<tbody>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t\n\t\t\t    \t\t\t\t\t</tbody>\n\t\t\t    \t\t\t\t</table>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t</div>\n\t\t\t    \t</div>\n\n\t\t\t    \t<div class=\"\" *ngIf=\"activatedtab==4\">\n\t\t\t    \t\t<div class=\"row\">\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total Diagnostics Sales </label>\n\t\t\t    \t\t\t\t<p> Rs. 38575.0 (400 orders) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total prescription sales (all doctors) </label>\n\t\t\t    \t\t\t\t<p> Rs. 26500.0 (76%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total Standalone Sales </label>\n\t\t\t    \t\t\t\t<p> Rs.12075.0 (24%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Patient turnout at Diagnostics (%) </label>\n\t\t\t    \t\t\t\t<p> 354/417 (85%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Maximum Sale in a day </label>\n\t\t\t    \t\t\t\t<p> Rs. 18575.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Minimum Sale in a day </label>\n\t\t\t    \t\t\t\t<p> Rs. 6500.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Average daily Sales </label>\n\t\t\t    \t\t\t\t<p> Rs.10075.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t    \t\t\t\t<h4> Doctor-wise break-up </h4>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t\t<div class=\"table-responsive col-md-12 col-sm-12 col-xs-12\">\n\t\t\t    \t\t\t\t<table class=\"table table-striped\">\n\t\t\t    \t\t\t\t\t<thead>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<th> Clinic Doctor Name </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Sales Contribution (Rs.) </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Patient turnout at clinic pharmacy </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Medication Cost/patient (Rs.) </th>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t</thead>\n\t\t\t    \t\t\t\t\t<tbody>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t\n\t\t\t    \t\t\t\t\t</tbody>\n\t\t\t    \t\t\t\t</table>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t</div>\n\t\t\t    \t</div>\n\n\t\t\t    \t<div class=\"\" *ngIf=\"activatedtab==5\">\n\t\t\t    \t\t<div class=\"row\">\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total Diagnostics Sales </label>\n\t\t\t    \t\t\t\t<p> Rs. 38575.0 (400 orders) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total prescription sales (all doctors) </label>\n\t\t\t    \t\t\t\t<p> Rs. 26500.0 (76%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total Standalone Sales </label>\n\t\t\t    \t\t\t\t<p> Rs.12075.0 (24%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Patient turnout at Diagnostics (%) </label>\n\t\t\t    \t\t\t\t<p> 354/417 (85%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Maximum Sale in a day </label>\n\t\t\t    \t\t\t\t<p> Rs. 18575.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Minimum Sale in a day </label>\n\t\t\t    \t\t\t\t<p> Rs. 6500.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Average daily Sales </label>\n\t\t\t    \t\t\t\t<p> Rs.10075.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t    \t\t\t\t<h4> Doctor-wise break-up </h4>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t\t<div class=\"table-responsive col-md-12 col-sm-12 col-xs-12\">\n\t\t\t    \t\t\t\t<table class=\"table table-striped\">\n\t\t\t    \t\t\t\t\t<thead>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<th> Clinic Doctor Name </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Sales Contribution (Rs.) </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Patient turnout at clinic pharmacy </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Medication Cost/patient (Rs.) </th>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t</thead>\n\t\t\t    \t\t\t\t\t<tbody>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t\n\t\t\t    \t\t\t\t\t</tbody>\n\t\t\t    \t\t\t\t</table>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t</div>\n\t\t\t    \t</div>\n\n\t\t\t    \t<div class=\"\" *ngIf=\"activatedtab==6\">\n\t\t\t    \t\t<div class=\"row\">\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total Diagnostics Sales </label>\n\t\t\t    \t\t\t\t<p> Rs. 38575.0 (400 orders) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total prescription sales (all doctors) </label>\n\t\t\t    \t\t\t\t<p> Rs. 26500.0 (76%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total Standalone Sales </label>\n\t\t\t    \t\t\t\t<p> Rs.12075.0 (24%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Patient turnout at Diagnostics (%) </label>\n\t\t\t    \t\t\t\t<p> 354/417 (85%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Maximum Sale in a day </label>\n\t\t\t    \t\t\t\t<p> Rs. 18575.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Minimum Sale in a day </label>\n\t\t\t    \t\t\t\t<p> Rs. 6500.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Average daily Sales </label>\n\t\t\t    \t\t\t\t<p> Rs.10075.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t    \t\t\t\t<h4> Doctor-wise break-up </h4>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t\t<div class=\"table-responsive col-md-12 col-sm-12 col-xs-12\">\n\t\t\t    \t\t\t\t<table class=\"table table-striped\">\n\t\t\t    \t\t\t\t\t<thead>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<th> Clinic Doctor Name </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Sales Contribution (Rs.) </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Patient turnout at clinic pharmacy </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Medication Cost/patient (Rs.) </th>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t</thead>\n\t\t\t    \t\t\t\t\t<tbody>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t\n\t\t\t    \t\t\t\t\t</tbody>\n\t\t\t    \t\t\t\t</table>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t</div>\n\t\t\t    \t</div>\n\n\t\t\t    \t<div class=\"\" *ngIf=\"activatedtab==7\">\n\t\t\t    \t\t<div class=\"row\">\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total Diagnostics Sales </label>\n\t\t\t    \t\t\t\t<p> Rs. 38575.0 (400 orders) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total prescription sales (all doctors) </label>\n\t\t\t    \t\t\t\t<p> Rs. 26500.0 (76%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Total Standalone Sales </label>\n\t\t\t    \t\t\t\t<p> Rs.12075.0 (24%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Patient turnout at Diagnostics (%) </label>\n\t\t\t    \t\t\t\t<p> 354/417 (85%) </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Maximum Sale in a day </label>\n\t\t\t    \t\t\t\t<p> Rs. 18575.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Minimum Sale in a day </label>\n\t\t\t    \t\t\t\t<p> Rs. 6500.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t    \t\t\t\t<label> Average daily Sales </label>\n\t\t\t    \t\t\t\t<p> Rs.10075.0 </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t    \t\t\t\t<h4> Doctor-wise break-up </h4>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t\t<div class=\"table-responsive col-md-12 col-sm-12 col-xs-12\">\n\t\t\t    \t\t\t\t<table class=\"table table-striped\">\n\t\t\t    \t\t\t\t\t<thead>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<th> Clinic Doctor Name </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Sales Contribution (Rs.) </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Patient turnout at clinic pharmacy </th>\n\t\t\t    \t\t\t\t\t\t\t<th> Medication Cost/patient (Rs.) </th>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t</thead>\n\t\t\t    \t\t\t\t\t<tbody>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t\t\t<td> Dr. Deepak Gupta (admin) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000 (46%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 122/158 (78%) </td>\n\t\t\t    \t\t\t\t\t\t\t<td> 13000/122 = 116 </td>\n\t\t\t    \t\t\t\t\t\t</tr>\n\t\t\t    \t\t\t\t\t\t\n\t\t\t    \t\t\t\t\t</tbody>\n\t\t\t    \t\t\t\t</table>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t</div>\n\t\t\t    \t</div>\n\n\t    \t\t</div>\n\t    \t</div>\n\n\n\n\t    </div>\n\n\t</div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-diagnostics-detail/dashboard-diagnostics-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDiagnosticsDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardDiagnosticsDetailComponent = /** @class */ (function () {
    function DashboardDiagnosticsDetailComponent() {
        this.activatedtab = 0;
        this.lineChartData = [
            { data: [5000, 5500, 6000, 6500, 7000, 7520, 8575], label: 'Total Sales' },
            { data: [2500, 3000, 3500, 4000, 4500, 5000, 6500], label: 'Prescription Sales' },
            { data: [500, 1000, 1200, 1800, 1900, 1999, 2075], label: 'Standalone Sales' }
        ];
        this.lineChartLabels = ['0', '4', '8', '12', '16', '20', '24'];
        this.lineChartOptions = {
            responsive: true
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
    DashboardDiagnosticsDetailComponent.prototype.ngOnInit = function () {
    };
    // events
    DashboardDiagnosticsDetailComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardDiagnosticsDetailComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardDiagnosticsDetailComponent.prototype.activatetab = function (i) {
        this.activatedtab = i;
    };
    DashboardDiagnosticsDetailComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    DashboardDiagnosticsDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-diagnostics-detail',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-diagnostics-detail/dashboard-diagnostics-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-diagnostics-detail/dashboard-diagnostics-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardDiagnosticsDetailComponent);
    return DashboardDiagnosticsDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-diagnostics-detail/dashboard-diagnostics-detail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDiagnosticsDetailModule", function() { return DashboardDiagnosticsDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_diagnostics_detail_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-diagnostics-detail/dashboard-diagnostics-detail-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_diagnostics_detail_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-diagnostics-detail/dashboard-diagnostics-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardDiagnosticsDetailModule = /** @class */ (function () {
    function DashboardDiagnosticsDetailModule() {
    }
    DashboardDiagnosticsDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_diagnostics_detail_routing_module__["a" /* DashboardDiagnosticsDetailRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_diagnostics_detail_component__["a" /* DashboardDiagnosticsDetailComponent */]]
        })
    ], DashboardDiagnosticsDetailModule);
    return DashboardDiagnosticsDetailModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-diagnostics-detail.module.chunk.js.map