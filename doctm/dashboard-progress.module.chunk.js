webpackJsonp(["dashboard-progress.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-progress/dashboard-progress-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardProgressRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_progress_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress/dashboard-progress.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_progress_component__["a" /* DashboardProgressComponent */]
    }
];
var DashboardProgressRoutingModule = /** @class */ (function () {
    function DashboardProgressRoutingModule() {
    }
    DashboardProgressRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardProgressRoutingModule);
    return DashboardProgressRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress/dashboard-progress.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tb-1{\n\tmargin-bottom: 0px;\n}\n.evn{\n\tbackground-color:#eff3ef;\n}\n.grin{\n\tcolor:#38af13;\n}\n.red-u{\n\tcolor:#ff0000;\n}\n.tb-1 h4{\n\tmargin: 0px;\n}\n.wrap-canavas{\n\tfloat: none;\n\twidth:100%;\n}\n.clr-blue{\n\tcolor:#00b0f0;\n\tfont-weight: bold;\n\tcursor: pointer;\n}\n.blu-2{\n\tcolor:#1639bf;\n}\n.footer-cstm-an{\n\tposition: fixed;\n    float: left;\n    width: 100%;\n    bottom: 0;\n    background:transparent;\n    color:#000;\n    z-index: 99;\n    border-top: 1px solid #d6d6d6;\n    padding-top: 8px;\n}\n.cus-content-wrapper{\n\tpadding-top: 0px;\n}\n.wrap-height{\n\tmin-height:480px;\n\tpadding:0px 8px;\n\tborder-left: 1px solid #dcdcdc;\n\tborder-right:1px solid #dcdcdc;\n}\n/*karam*/\n.cstm-ul-new li a{\n\tbackground-color:transparent;\n\tcolor:#000;\n\tpadding:10px 87px;\n\tcursor: pointer;\n\tborder-radius: 0px;\n\tborder-bottom: 2px solid transparent; \n}\n.cstm-ul-new li.active a{\n\tbackground-color: #e0e0e0;\n    color: #000;\n\tborder-bottom: 2px solid #00b0f0;\n}\n.wrap-height{\n\tmin-height:200px;\n\tmax-height: 200px;\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n}\n.tb-2 tr td{\n\tpadding: 5px;\n}\n.cus-sidebar-wrapper .cus-sidebar{\n\theight: initial!important;\n}\n.tb-1{\n\tmargin-bottom: 0px;\n}\n.evn{\n\tbackground-color:#eff3ef;\n}\n.grin{\n\tcolor:#38af13;\n}\n.red-u{\n\tcolor:#ff0000;\n}\n.tb-1 h4{\n\tmargin: 0px;\n}\n.wrap-canavas{\n\tfloat: none;\n\twidth:100%;\n}\n.clr-blue{\n\tcolor:#00b0f0;\n\tfont-weight: bold;\n}\n.blu-2{\n\tcolor:#1639bf;\n}\n.cus-content-wrapper{\n\tpadding-top: 0px;\n}\n.wrap-height{\n\tmin-height:250px;\n\tmax-height: 250px;\n\tpadding:0px 8px;\n\tborder-left: 1px solid #dcdcdc;\n\tborder-right:1px solid #dcdcdc;\n\toverflow-x: hidden;\n}\n.mt-table h3{\n\tmargin-top: 0px;\n}\n.cstm-tr{\n\tbackground-color: #000;\n\tcolor:#fff;\n\ttext-align: center;\n}\n.cstm-tr-2{\n\tbackground-color:#d7e4e3;\n}\n.cstm-tr-2 td{\n\tborder-right:1px solid #bbb; \n}\n.cstm-tr-2 td:last-child {\n border-right: none;\n}\n.cstm-tr-3{\n\tborder-bottom:1px solid #bbb; \n}\n.cstm-tr-3 td{\n\tborder-right:1px solid #bbb; \n}\n.cstm-tr-3 td:last-child {\n border-right: none;\n}\n.cus-sidebar-wrapper .cus-sidebar{\n\theight: initial;\n}\n.cstm-mg{\n\tmargin-top: 5px;\n}\n.btn-go{\n\tbackground-color: transparent;\n    border: 1px solid #002160;\n    margin-bottom: 5px;\n    min-width: 62%;\n}\n.btn-go:hover{\n    -webkit-transition: 300ms;\n    transition: 300ms;\n    background: #98C74F;\n    border-color: #98C74F;\n    color: #fff;\n}\n/*.cus-content{\n\tz-index:1;\n}*/\n.li-cstm a{\n\ttext-align: center!important;\n    background: #000!important;\n    color: #fff!important;\n    font-size: 16px!important;\n    font-weight: inherit!important;\n    padding: 6px!important;\n}\n/*karam @29-1-2018*/\n.side-bar-cstm{\n\tz-index: 99;\n}\n.res-tab-2{\n\tmax-height: 200px;\n}\n.cstm-ul-new li{\n\twidth: 100%;\n}\n.cstm-ul-new li a{\n\tbackground-color:transparent;\n\tcolor:#000;\n\tpadding:10px 108px;\n\tcursor: pointer;\n\tborder-radius: 0px;\n\tborder-bottom: 2px solid transparent; \n}\n.cstm-ul-new li.active a{\n\tbackground-color: #e0e0e0;\n    color: #000;\n\tborder-bottom: 2px solid #00b0f0;\n}\n.tab-new{\n    padding: 0px 8px;\n    border-left: 1px solid #dcdcdc;\n    border-right: 1px solid #dcdcdc;\n    overflow-x: hidden;\n}\n.clr-blue{\n    color: #00b0f0;\n    font-weight: bold;\n}\n/*karam@30-jan-2019*/\n/*.tab-new-cstm tr td{\n\tfont-size: 10px;\n}*/\n.brder-cstm{\n\tpadding-bottom: 1px;\n    margin-bottom: 6px;\n    border-bottom: 1px solid #a7a7a7;\n    position: relative;\n}\n.brder-cstm::after{\n\tcontent: \"\";\n    position: absolute;\n    height: 6px;\n    width: 12px;\n    background-color: #ffffff;\n    top: 41px;\n    right: -3px;\n\t \n}\n.cus-sidebar ul{\n\tborder:1px solid #a7a7a7;\n}\n.can-vas{\n\theight:196px!important;\n}\n.my-tab-1 tr td{\n\tpadding:2px;\t\n}\n.tb-pd-hi tr td{\n\tpadding:12px 8px; \n}\n.brdr-left{\n\tborder-left:1px solid #bfc4cb;\n}\n.cstm-md-bdy{\n\tposition: relative;\n}\n.modal.fade .modal-dialog {\n  -webkit-transform: translate3d(0, 100vh, 0);\n          transform: translate3d(0, 100vh, 0);\n  -webkit-transition: 700ms;\n  transition: 700ms;\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transition: 700ms;\n  transition: 700ms;\n}\n.cstm-tr-2{\n\tbackground-color:#d7e4e3;\n}\n.cstm-tr-2 td{\n\tborder-right:1px solid #bbb; \n}\n.cstm-tr-2 td:last-child {\n border-right: none;\n}\n.cstm-tr-3{\n\tborder-bottom:1px solid #bbb; \n}\n.cstm-tr-3 td{\n\tborder-right:1px solid #bbb; \n}\n.cstm-tr-3 td:last-child {\n border-right: none;\n}\n/*.cstm-md-bdy {\n\tposition: absolute;\n\ttop: -30px;\n    right: 8px;\n}*/\n.modal-body{\n\tpadding-top: 1px;\n\tpadding-bottom: -1px;\n}\n.cstm-heading{\n  text-align: center;\n  font-weight: bold;\n}\ncanvas{\n\tmax-height:208px;\n\tmin-height:208px;\n\theight:167px; \n}\n.cstm-popup{\n\twidth: 131%;\n    margin-left: -114px;\n}\n.cus-content-wrapper .cus-content{\n\tmargin-left: 0px!important\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress/dashboard-progress.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"analytics-sec\">\n\t\n\t<div class=\"ipd-deatil-sec\">\n\t<!-- \t<div class=\"md-tab\">\n\t      \n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t          \t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-prescription\"> Consultation </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-pharmacy-detail\"> Clinic Services </a></li>\n\t      \t</ul>\n\t    </div> -->\n\n\t    <div class=\"inner-tab\">\n\t    \t<!-- Nav tabs -->\n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\" *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">\n\t          \t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress\"> Patient </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-time\"> Time</a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-prescription\" *ngIf=\"doctorData.digital_precipitation ==true\">Prescription</a></li>\n\t\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-pharmacy\" *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy==true\"> Pharmacy</a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-diagnosis\" *ngIf=\"doctorData.clinic_services.Clinic_Diagnostics==true\"> Diagnostics </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-ipd\" *ngIf=\"doctorData.clinic_services.Clinic_IPD==true\"> IPD </a></li>\n\t      \t</ul>\n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\" *ngIf=\"doctorData.type_of_doctor=='normal_doctor'\">\n\t          \t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress\"> Patient </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-time\"> Time</a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-prescription\" *ngIf=\"doctorData.digital_precipitation ==true\">Prescription</a></li>\n\t\t\t\t<!-- <li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-pharmacy\" *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy==true && doctorData.digital_precipitation ==true\"> Pharmacy</a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-diagnosis\" *ngIf=\"doctorData.clinic_services.Clinic_Diagnostics==true && doctorData.digital_precipitation ==true\"> Diagnostics </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-ipd\" *ngIf=\"doctorData.clinic_services.Clinic_IPD==true && doctorData.digital_precipitation ==true\"> IPD </a></li> -->\n\t      \t</ul>\n\t    </div>\n\n\t    <div class=\"ipd-body\">\n    \t\t<div class=\"cus-content-wrapper\">\n    \t\t\t<div class=\"cus-content\">\n\t    \t\t\t<div class=\"\">\n\t    \t\t\t\t<div class=\"row\">\n\t    \t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t  <div class=\"tab-content\">\n\t\t\t\t\t\t\t\t    <div id=\"home-cstm\" class=\"tab-pane fade in active\">\n\t\t\t\t\t\t\t\t    \t<div class=\"cstm-pad\">\n\t\t\t\t\t\t        \t\t\t<div class=\"table-responsive\">\n\t\t\t    \t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table tb-1 tb-pd-hi\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Consultation Collection</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"totalConsultationCollection>=0\"><b>{{totalCollection}} &nbsp;</b><span class=\"grin\">(+{{totalConsultationCollection}})</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"totalConsultationCollection<0\"><b>{{totalCollection}} &nbsp;</b><span style=\"color: red\">(-{{totalConsultationCollection}})</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Dispensed patients</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(totalPrescriptions)}} &nbsp;</b><span class=\"grin\">({{percentTotalDispensed}}%)</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Patients Registered</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"totalDispensedpatient>=0\"><b>{{getData(totalRegisteredPatient)}}</b><span class=\"grin\"> (+{{totalDispensedpatient}})</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"totalDispensedpatient<0\"><b>{{getData(UniquePatientArray.length)}}</b><span class=\"red-u\"> (-{{totalDispensedpatient}})</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">New patients</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{newPatients}} &nbsp; </b><b  class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal5\">View </b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Old Patients</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalRegisteredPatient - newPatients}} &nbsp; </b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Walk in patients</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalWalkIn}} &nbsp;</b><small>({{getData(totalWalkInPercentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Appointment patients</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalAppointment}} &nbsp;</b><small>({{getData(totalAppointmentPercentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Emergency patients</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalEmergency}} &nbsp;</b><small>({{getData(totalEmergencyPercentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Males</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalMale}} &nbsp;</b><small>({{getData(totalMalePercentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Females</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalFemale}} &nbsp;</b><small>({{getData(totalFemalePercentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Avg. Patient Age (Yrs)</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(avgAge)}} &nbsp;</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Top 10 Diagnosis</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <b>{{getData(diagnosisArray.length)}} &nbsp;</b> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b  class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal\">View </b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t    \t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t    \t</div>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    <!-- <div id=\"menu1-cstm\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t   \t\t<div class=\"cstm-pad\">\n\t\t\t\t\t\t\t\t   \t\t\t<div class=\"table-responsive\">\n\t\t\t    \t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table tb-1 my-tab-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Total patients</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(UniquePatientArray.length)}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">New patients added</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{newPatients}} &nbsp; </b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Males</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalMale}} &nbsp;</b><small>({{getData(totalMalePercentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Females</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalFemale}} &nbsp;</b><small>({{getData(totalFemalePercentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Avg. Patient Age (Yrs)</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{getData(avgAge)}} &nbsp;</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Walk in patients</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalWalkIn}} &nbsp;</b><small>({{getData(totalWalkInPercentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Appointment patients</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalAppointment}} &nbsp;</b><small>({{getData(totalAppointmentPercentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"350px\">Emergency patients</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalEmergency}} &nbsp;</b><small>({{getData(totalEmergencyPercentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"cstm-heading\">PATIENT</h5> \n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"chart-diagnos chart-box wrap-canavas\" *ngIf=\"!loading\">\n\t\t\t\t\t\t\t\t    \t\t\t\t<canvas baseChart class=\"can-vas\"\n\t\t\t\t\t\t\t\t\t                [datasets]=\"lineChartData1\"\n\t\t\t\t\t\t\t\t\t                [labels]=\"lineChartLabels1\"\n\t\t\t\t\t\t\t\t\t                [options]=\"lineChartOptions\"\n\t\t\t\t\t\t\t\t\t                [colors]=\"lineChartColors\"\n\t\t\t\t\t\t\t\t\t                [legend]=\"lineChartLegend\"\n\t\t\t\t\t\t\t\t\t                [chartType]=\"lineChartType\"\n\t\t\t\t\t\t\t\t\t                (chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t\t\t\t\t                (chartClick)=\"chartClicked($event)\"></canvas>\n\t\t\t\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t    \t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t   \t\t</div>\n\t\t\t\t\t\t\t\t    </div> -->\n\t\t\t\t\t\t\t\t  </div>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t\t<h5 class=\"cstm-heading\">Patients</h5> \n\t    \t\t\t\t\t<div class=\"col-lg-6 brdr-left\">\n\t    \t\t\t\t\t\t<div class=\"chart-diagnos chart-box wrap-canavas\" *ngIf=\"!loading\">\n\t\t\t\t    \t\t\t\t<canvas baseChart\n\t\t\t\t\t                [datasets]=\"lineChartData\"\n\t\t\t\t\t                [labels]=\"lineChartLabels\"\n\t\t\t\t\t                [options]=\"lineChartOptions\"\n\t\t\t\t\t                [colors]=\"lineChartColors\"\n\t\t\t\t\t                [legend]=\"lineChartLegend\"\n\t\t\t\t\t                [chartType]=\"lineChartType\"\n\t\t\t\t\t                (chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t                (chartClick)=\"chartClicked($event)\"></canvas>\n\t\t\t\t\t            </div>\n\t\t\t\t            \t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t  <table class=\"table tb-1 tb-2\">\n\t\t\t\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t\t\t    \t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t        <td width=\"350px\">\n\t\t\t\t\t\t\t\t        \t<span>Pending follow-ups for today</span>\n\t\t\t\t\t\t\t\t        </td>\n\t\t\t\t\t\t\t\t        <td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t        <td><b>{{dataReferralTo.length}} &nbsp;</b> <span (click)=\"viewReferralPatients(1)\" class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal4\">View</span></td>\n\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t      <tr class=\"evn\">\n\t\t\t\t\t\t\t\t        <td width=\"350px\">\n\t\t\t\t\t\t\t\t        \t<span>Follow ups given today</span>\n\t\t\t\t\t\t\t\t        </td>\n\t\t\t\t\t\t\t\t        <td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t        <td><b>{{dataReferralTo.length}} &nbsp;</b> <span (click)=\"viewReferralPatients(1)\" class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal4\">View</span></td>\n\t\t\t\t\t\t\t\t      </tr>\n\n\t\t\t\t\t\t\t\t       <tr class=\"evn\">\n\t\t\t\t\t\t\t\t        <td width=\"350px\">\n\t\t\t\t\t\t\t\t        \t<span>Appointments</span>\n\t\t\t\t\t\t\t\t        </td>\n\t\t\t\t\t\t\t\t        <td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t        <td><b>{{dataReferralTo.length}} &nbsp;</b> <span (click)=\"viewReferralPatients(1)\" class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal4\">View</span></td>\n\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t      <tr class=\"evn\">\n\t\t\t\t\t\t\t\t        <td width=\"350px\">Shift-1</td>\n\t\t\t\t\t\t\t\t        <td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t        <td><b>{{shiftOne}} &nbsp; </b><span><b></b> ({{getData(shiftOnepercentage)}}%)</span></td>\n\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t      <tr>\n\t\t\t\t\t\t\t\t        <td width=\"350px\">Shift-2\n\t\t\t\t\t\t\t\t       </td>\n\t\t\t\t\t\t\t\t        <td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t        <td><b>{{shiftTwo}}  &nbsp;</b>({{getData(shiftTwopercentage)}}%)</td>\n\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t      <tr>\n\t\t\t\t\t\t\t\t        <!-- <td width=\"350px\">Shift-3\n\t\t\t\t\t\t\t\t       </td>\n\t\t\t\t\t\t\t\t        <td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t        <td><b>{{shiftThree}}  &nbsp;</b>({{getData(shiftThreepercentage)}}%)</td>\n\t\t\t\t\t\t\t\t      </tr> -->\n\t\t\t\t\t\t\t\t     <!--  <tr class=\"\">\n\t\t\t\t\t\t\t\t        <td width=\"350px\"><span>Top 20 Diagnosis</span></td>\n\t\t\t\t\t\t\t\t        <td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t        <td>\n\t\t\t\t\t\t\t\t        \t<b  class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal\">View </b>\n\t\t\t\t\t\t\t\t        \t\n\t\t\t\t\t\t\t\t        \t</td>\n\t\t\t\t\t\t\t\t      </tr> -->\n\n\t\t\t\t\t\t\t\t      <tr class=\"evn\">\n\t\t\t\t\t\t\t\t        <td width=\"350px\">\n\t\t\t\t\t\t\t\t        \t<span>Referred  Patients (TO)</span>\n\t\t\t\t\t\t\t\t        </td>\n\t\t\t\t\t\t\t\t        <td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t        <td><b>{{dataReferralTo.length}} &nbsp;</b> <span (click)=\"viewReferralPatients(1)\" class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal4\">View</span></td>\n\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t      <tr>\n\t\t\t\t\t\t\t\t        <td width=\"350px\">Referred Patients (FROM)</td>\n\t\t\t\t\t\t\t\t        <td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t        <td><b>{{dataReferralFrom.length}} &nbsp;</b><span (click)=\"viewReferralPatients(2)\" class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal4\">View</span></td>\n\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t\t\t        <td width=\"350px\">Frequent Patients (>=2Visits) </td>\n\t\t\t\t\t\t\t\t        <td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t        <td><b>{{freqPatientArray.length}} &nbsp;</b><span class=\"clr-blue\"  data-toggle=\"modal\" data-target=\"#myModal3\">View</span></td>\n\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t      <!-- <tr>\n\t\t\t\t\t\t\t\t        <td width=\"350px\">Frequent Patients (>=3 Times)</td>\n\t\t\t\t\t\t\t\t        <td width=\"5px\"><h4><b>:</b></h4></td>\n\t\t\t\t\t\t\t\t        <td><b>5 &nbsp;</b><span class=\"clr-blue\">Views</span></td>\n\t\t\t\t\t\t\t\t      </tr> -->\n\t\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t\t\t\t</div>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t</div>\n\t    \t\t\t</div>\n\t\t\t\t</div>\n\t    \t</div>\n\t    </div>\n\t</div>\n<div class=\"container footer-cstm-an\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12 text-center\">\n\t\t\t<div>\n\t\t\t\t<p>TOP AREA : <b>Sector 78, NOIDA ( 18</b> Patients <b>), 30%</b> </p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Top 20 Diagnosis View -->\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body cstm-md-bdy\">          \t\n      \t \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      \t\t<div class=\"cstm-tab\">\n\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t    <tbody>\n\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Diagnosis</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Number of Patients</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Percentages</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of diagnosisArray | slice:0:10;let i = index; \">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t<td class=\"text-left\">{{data.value}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{data.occurrence}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{getData(data.percentage)}}%</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n      \t\t</div>      \n        </div>\n      </div>\n    </div>\n</div>\n<!-- Referred Patients (TO) -->\n<div class=\"modal fade\" id=\"myModal1\" role=\"dialog1\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body cstm-md-bdy\">          \t\n      \t \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      \t\t<div class=\"cstm-tab\">\n\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t    <tbody>\n\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Diagnosis</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Number of Patients</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Percentages</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of diagnosisArray | slice:0:20;let i = index; \">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t<td class=\"text-left\">{{data.value}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{data.occurrence}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{getData(data.percentage)}}%</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n      \t\t</div>      \n        </div>\n      </div>\n    </div>\n</div>\n<!-- Referred Patients (FROM) -->\n<div class=\"modal fade\" id=\"myModal2\" role=\"dialog2\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body cstm-md-bdy\">          \t\n      \t \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      \t\t<div class=\"cstm-tab\">\n\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t    <tbody>\n\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Diagnosis</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Number of Patients</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Percentages</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of diagnosisArray | slice:0:20;let i = index; \">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t<td class=\"text-left\">{{data.value}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{data.occurrence}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{getData(data.percentage)}}%</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n      \t\t</div>      \n        </div>\n      </div>\n    </div>\n</div>\n<!-- Frequent Patients (>=2Visits) -->\n<div class=\"modal fade\" id=\"myModal3\" role=\"dialog3\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body cstm-md-bdy\">          \t\n      \t \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      \t\t<div class=\"cstm-tab\">\n\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t    <tbody>\n\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Patient Name</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>No of Visits</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Phone Number</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of freqPatientArray;let i = index; \">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t<td class=\"text-left\">{{data.name}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{data.count}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{data.phone}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n      \t\t</div>      \n        </div>\n      </div>\n    </div>\n</div>\n<!-- Referral Patients -->\n<div class=\"modal fade\" id=\"myModal4\" role=\"dialog4\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content cstm-popup\">\n        <div class=\"modal-body cstm-md-bdy\">          \t\n      \t \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      \t\t<div class=\"cstm-tab\">\n\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t    <tbody>\n\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Doctor Name</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Date</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Patient Name</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Phone</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Note</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of referralPatientArray;let i = index; \">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t<td class=\"text-left\">{{data.name}}</td>\n\t\t\t\t\t\t\t<td class=\"text-left\">{{data.date | date: 'dd/MM/yyyy'}}</td>\n\t\t\t\t\t\t\t<td class=\"text-left\">{{data.patientName}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{data.phone}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{data.note}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n      \t\t</div>      \n        </div>\n      </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"myModal5\" role=\"dialog4\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content cstm-popup\">\n        <div class=\"modal-body cstm-md-bdy\">          \t\n      \t \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      \t\t<div class=\"cstm-tab\">\n\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t    <tbody>\n\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Name</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Phone</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of newPatientArray;let i = index; \">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t<td class=\"text-left\">{{data.name}}</td>\n\t\t\t\t\t\t\t<td class=\"text-left\">{{data.phone}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n      \t\t</div>      \n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress/dashboard-progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardProgressComponent; });
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




var DashboardProgressComponent = /** @class */ (function () {
    function DashboardProgressComponent(userService, toastr, datePipe) {
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
        this.lineChartData = [
            { data: [], label: 'Total Collection' },
        ];
        this.lineChartLabels = [];
        this.lineChartData1 = [
            { data: [], label: 'Total Patient' },
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
    DashboardProgressComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
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
        this.UniquePatientArraYestarday = [];
        this.uniqueFrequentArray = [];
        this.uniqueFrequentArrayYestartday = [];
        this.activatedtab = 0;
        this.activatetab(1);
    };
    // events
    DashboardProgressComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardProgressComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardProgressComponent.prototype.activatetab = function (i) {
        var _this = this;
        var object;
        this.activatedtab = i;
        object = {};
        var date = new Date();
        //object.smart_diagnostics_id = this.doctorData.smart_diagnostics_id
        object.doctor_id = this.doctorData._id;
        object.end_date = new Date();
        if (i == 1) {
            object.start_date = date;
        }
        this.fromDate = new Date(object.start_date);
        this.toDate = new Date(object.end_date);
        console.log(object);
        this.totalCollection = 0;
        this.totalCollectionYesterday = 0;
        this.avgCollection = 0;
        this.dateDiff = 0;
        var maxArray = [];
        this.feeArray = [];
        this.maxSaleOfDay = 0;
        this.minSaleOfDay = 0;
        this.maxCollectionDate = 0;
        this.minCollectionDate = 0;
        this.totalPrescriptions = 0;
        this.totalPrescriptionsYestarday = 0;
        this.totalPrescriptionsLength = 0;
        this.maxPrescofDay = 0;
        this.minPrescOfDay = 0;
        this.maxPresconDate = 0;
        this.minPresconDate = 0;
        this.totalRegPatients = 0;
        this.newPatients = 0;
        this.newPatientsYestartday = 0;
        this.totalMale = 0;
        this.totalFemale = 0;
        this.totalMale1 = 0;
        this.totalFemale1 = 0;
        this.totalMalePercentage = 0;
        this.totalFemalePercentage = 0;
        this.totalWalkIn = 0;
        this.totalEmergency = 0;
        this.totalDispensedpatient = 0;
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
        this.percentTotalDispensed = 0;
        this.freqPatientArray = [];
        var localFreqArray = [];
        this.diagnosisArray = [];
        this.UniquePatientArray = [];
        this.UniquePatientArraYestarday = [];
        this.uniqueFrequentArray = [];
        this.newPatientArray = [];
        this.newPatientArrayYestarday = [];
        this.fiveMinArray = [];
        this.dataDispenseArray = [];
        this.dataRegArray = [];
        this.loading = true;
        this.FindReferralPatients(object);
        this.totalRegisteredPatient = 0;
        this.totalRegisteredPatientYestarday = 0;
        console.log(object);
        this.userService.OPDAnalytics(object).subscribe(function (data) {
            console.log(data);
            if (data.response) {
                _this.dataDispenseArray = data.dataDispensed;
                _this.dataRegArray = data.dataRegistrations;
                _this.dataDispensedYesterday = data.dataDispensedYesterday;
                _this.totalPrescriptionsLength = data.dataDispensedYesterday.length;
                _this.dataRegistrationsYesterday = data.dataRegistrationsYesterday;
                _this.totalPrescriptions = data.dataDispensed.length;
                _this.totalRegPatients = data.dataRegistrations.length;
                _this.totalRegisteredPatient = data.dataDispensed.length + data.dataRegistrations.length;
                _this.totalRegisteredPatientYestarday = data.dataDispensedYesterday.length + data.dataRegistrationsYesterday.length;
                console.log(_this.dataDispensedYesterday);
                _this.totalPrescriptionsYestarday = (_this.totalPrescriptions - _this.totalPrescriptionsLength);
                for (var i = 0; i < _this.dataDispensedYesterday.length; i++) {
                    if (_this.dataDispensedYesterday[i].registration.fee) {
                        _this.totalCollectionYesterday += parseInt(_this.dataDispensedYesterday[i].registration.fee);
                        // console.log(this.totalCollectionYesterday)
                    }
                }
                for (var i = 0; i < _this.dataRegistrationsYesterday.length; ++i) {
                    if (_this.dataRegistrationsYesterday[i].fee) {
                        _this.totalCollectionYesterday += parseInt(_this.dataRegistrationsYesterday[i].fee);
                    }
                }
                console.log(_this.totalCollectionYesterday);
                for (var i = 0; i < data.dataDispensed.length; i++) {
                    if (data.dataDispensed[i].registration.fee) {
                        _this.totalCollection += parseInt(data.dataDispensed[i].registration.fee);
                    }
                    _this.getShift(data.dataDispensed[i].registration.createdAt);
                    maxArray.push(_this.datePipe.transform(data.dataDispensed[i].createAt, 'yyyy-MM-dd'));
                    if (data.dataDispensed[i].registration.type == "Walk-in") {
                        _this.totalWalkIn++;
                    }
                    else if (data.dataDispensed[i].registration.type == "Emergency") {
                        _this.totalEmergency++;
                    }
                    else {
                        _this.totalAppointment++;
                    }
                    if (data.dataDispensed[i].registration.age_in_years) {
                        totalAge += data.dataDispensed[i].registration.age_in_years;
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
                    if (data.dataRegistrations[i].type == "Walk-in") {
                        _this.totalWalkIn++;
                    }
                    else if (data.dataRegistrations[i].type == "Emergency") {
                        _this.totalEmergency++;
                    }
                    else {
                        _this.totalAppointment++;
                    }
                    if (data.dataRegistrations[i].age_in_years) {
                        totalAge += data.dataRegistrations[i].age_in_years;
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
                _this.totalConsultationCollection = (_this.totalCollection - _this.totalCollectionYesterday);
                console.log(_this.totalConsultationCollection);
                ////////Unique Patient////////////////
                _this.newPatientArray = [];
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
                            _this.newPatientArray.push({
                                name: data.dataRegistrations[i].pateintName,
                                phone: data.dataRegistrations[i].pateintPhone
                            });
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
                            _this.newPatientArray.push({
                                name: data.dataDispensed[i].registration.pateintName,
                                phone: data.dataDispensed[i].registration.pateintPhone
                            });
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
                for (var i = 0; i < _this.dataRegistrationsYesterday.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.UniquePatientArraYestarday.length; j++) {
                        if (_this.UniquePatientArraYestarday[j].name == _this.dataRegistrationsYesterday[i].pateintName &&
                            _this.UniquePatientArraYestarday[j].phone == _this.dataRegistrationsYesterday[i].pateintPhone) {
                            if (_this.dataRegistrationsYesterday[i].lastVisit.status == false) {
                                _this.newPatientsYestartday++;
                            }
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        if (_this.dataRegistrationsYesterday[i].lastVisit.status == false) {
                            _this.newPatientsYestartday++;
                            _this.newPatientArrayYestartday.push({
                                name: _this.dataRegistrationsYesterday[i].pateintName,
                                phone: _this.dataRegistrationsYesterday[i].pateintPhone
                            });
                        }
                        if (_this.dataRegistrationsYesterday[i].gender == 'Male') {
                            _this.totalMale1++;
                        }
                        if (_this.dataRegistrationsYesterday[i].gender == 'Female') {
                            _this.totalFemale1++;
                        }
                        _this.UniquePatientArraYestarday.push({
                            name: _this.dataRegistrationsYesterday[i].pateintName,
                            phone: _this.dataRegistrationsYesterday[i].pateintPhone
                        });
                    }
                }
                for (var i = 0; i < _this.dataDispensedYesterday.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.UniquePatientArraYestarday.length; j++) {
                        if (_this.UniquePatientArraYestarday[j].name == _this.dataDispensedYesterday[i].registration.pateintName &&
                            _this.UniquePatientArraYestarday[j].phone == _this.dataDispensedYesterday[i].registration.pateintPhone) {
                            if (_this.dataDispensedYesterday[i].registration.lastVisit.status == false) {
                                _this.newPatientsYestartday++;
                            }
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        if (_this.dataDispensedYesterday[i].registration.lastVisit.status == false) {
                            _this.newPatientsYestartday++;
                            _this.newPatientArrayYestartday.push({
                                name: _this.dataDispensedYesterday[i].registration.pateintName,
                                phone: _this.dataDispensedYesterday[i].registration.pateintPhone
                            });
                        }
                        if (_this.dataDispensedYesterday[i].registration.gender == 'Male') {
                            _this.totalMale1++;
                        }
                        else {
                            _this.totalFemale1++;
                        }
                        _this.UniquePatientArraYestarday.push({
                            name: _this.dataDispensedYesterday[i].registration.pateintName,
                            phone: _this.dataDispensedYesterday[i].registration.pateintPhone
                        });
                    }
                }
                console.log(_this.newPatients);
                _this.totalDispensedpatient = (_this.totalRegisteredPatient - _this.totalRegisteredPatientYestarday);
                _this.percentTotalDispensed = (_this.totalPrescriptions / _this.totalRegisteredPatient * 100);
                console.log(_this.totalPrescriptions);
                console.log(_this.UniquePatientArray.length);
                console.log(_this.percentTotalDispensed);
                // this.percentTotalDispensed = parseInt(parseInt() /parseInt())*100)
                ///console.log(this.newPatientArray)			
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
                var diff = Math.abs(_this.toDate.getTime() - _this.fromDate.getTime());
                _this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
                _this.totalMalePercentage = (_this.totalMale * 100) / (_this.UniquePatientArray.length);
                _this.totalFemalePercentage = (_this.totalFemale * 100) / (_this.UniquePatientArray.length);
                _this.totalWalkInPercentage = (_this.totalWalkIn * 100) / (_this.totalPrescriptions + _this.totalRegPatients);
                _this.totalEmergencyPercentage = (_this.totalEmergency * 100) / (_this.totalPrescriptions + _this.totalRegPatients);
                _this.totalAppointmentPercentage = (_this.totalAppointment * 100) / (_this.totalPrescriptions + _this.totalRegPatients);
                console.log(totalAge);
                _this.avgAge = totalAge / (_this.totalRegisteredPatient);
                console.log(_this.avgAge);
                var dateArray = [];
                var newMaxArray = [];
                var prescriptionArray = [];
                var patientArray = [];
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
                            total_fee += parseInt(data.dataDispensed[j].registration.fee);
                            total_prescriptions++;
                            total_patients++;
                        }
                    }
                    for (var k = 0; k < data.dataRegistrations.length; k++) {
                        if (newMaxArray[i] == _this.datePipe.transform(data.dataRegistrations[k].createAt, 'yyyy-MM-dd')) {
                            total_reg_fee += parseInt(data.dataRegistrations[k].fee);
                            total_reg_patient++;
                        }
                    }
                    prescriptionArray.push(total_prescriptions);
                    _this.feeArray.push(total_fee + total_reg_fee);
                    patientArray.push(total_patients + total_reg_patient);
                    dateArray.push(newMaxArray[i]);
                }
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
            _this.getFiveMinData();
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardProgressComponent.prototype.getFiveMinData = function () {
        this.finalTimeMinArray = [];
        this.fiveMinPatintArray = [];
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
            var count = 0;
            for (var j = 0; j < this.dataDispenseArray.length; j++) {
                if (parseInt(this.datePipe.transform(this.dataDispenseArray[j].createdAt, 'HH')) * 60 + parseInt(this.datePipe.transform(this.dataDispenseArray[j].createdAt, 'mm')) > this.fiveMinArray[i] &&
                    parseInt(this.datePipe.transform(this.dataDispenseArray[j].createdAt, 'HH')) * 60 + parseInt(this.datePipe.transform(this.dataDispenseArray[j].createdAt, 'mm')) <= this.fiveMinArray[i + 1]) {
                    count++;
                }
            }
            for (var k = 0; k < this.dataRegArray.length; k++) {
                if (parseInt(this.datePipe.transform(this.dataRegArray[k].createdAt, 'HH')) * 60 + parseInt(this.datePipe.transform(this.dataRegArray[k].createdAt, 'mm')) > this.fiveMinArray[i] &&
                    parseInt(this.datePipe.transform(this.dataRegArray[k].createdAt, 'HH')) * 60 + parseInt(this.datePipe.transform(this.dataRegArray[k].createdAt, 'mm')) <= this.fiveMinArray[i + 1]) {
                    count++;
                }
            }
            this.fiveMinPatintArray.push(count);
        }
        for (var i = 0; i < this.fiveMinArray.length; i++) {
            this.finalTimeMinArray.push(Math.trunc(this.fiveMinArray[i] / 60) + ":" + Math.trunc(this.fiveMinArray[i] % 60));
        }
        this.lineChartData = [
            { data: this.fiveMinPatintArray, label: 'Patient' },
        ];
        this.lineChartLabels = this.finalTimeMinArray;
    };
    DashboardProgressComponent.prototype.otherRange = function (start, end, step) {
        if (step == undefined) {
            step = 1;
        }
        ;
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
        ;
        return this.fiveMinArray;
    };
    ;
    DashboardProgressComponent.prototype.getShift = function (date) {
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
    DashboardProgressComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    DashboardProgressComponent.prototype.sortSales = function (a, b) {
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
    DashboardProgressComponent.prototype.sortPatient = function (a, b) {
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
    DashboardProgressComponent.prototype.go = function () {
        var _this = this;
        this.activatedtab = 0;
        this.totalCollection = 0;
        this.totalConsultationCollection = 0;
        this.avgCollection = 0;
        this.dateDiff = 0;
        var maxArray = [];
        this.feeArray = [];
        this.maxSaleOfDay = 0;
        this.minSaleOfDay = 0;
        this.maxCollectionDate = 0;
        this.minCollectionDate = 0;
        this.totalPrescriptions = 0;
        this.totalPrescriptionsYestarday = 0;
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
        this.UniquePatientArray = [];
        this.uniqueFrequentArray = [];
        var localFreqArray = [];
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
        this.userService.OPDAnalytics(object).subscribe(function (data) {
            console.log(data);
            if (data.response) {
                _this.totalPrescriptions = data.dataDispensed.length;
                _this.totalRegPatients = data.dataRegistrations.length;
                for (var i = 0; i < data.dataDispensed.length; i++) {
                    _this.totalCollection += parseInt(data.dataDispensed[i].registration.fee);
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
                        totalAge += data.dataDispensed[i].registration.age_in_years;
                    }
                    if (data.dataDispensed[i].registration.lastVisit.count >= 1) {
                        localFreqArray.push({
                            name: data.dataDispensed[i].registration.pateintName,
                            count: data.dataDispensed[i].registration.lastVisit.count + 1,
                            createdAt: data.dataDispensed[i].registration.createdAt,
                            phone: data.dataDispensed[i].registration.pateintPhone
                        });
                    }
                }
                for (var i = 0; i < data.dataRegistrations.length; i++) {
                    _this.totalCollection += parseInt(data.dataRegistrations[i].fee);
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
                        totalAge += data.dataRegistrations[i].age_in_years;
                    }
                    if (data.dataRegistrations[i].lastVisit.count >= 1) {
                        localFreqArray.push({
                            name: data.dataRegistrations[i].pateintName,
                            count: data.dataRegistrations[i].lastVisit.count + 1,
                            createdAt: data.dataRegistrations[i].createdAt,
                            phone: data.dataRegistrations[i].pateintPhone
                        });
                    }
                }
                console.log(localFreqArray);
                ////////Unique Patient////////////////
                for (var i = 0; i < data.dataRegistrations.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.UniquePatientArray.length; j++) {
                        if (_this.UniquePatientArray[j].name == data.dataRegistrations[i].pateintName &&
                            _this.UniquePatientArray[j].phone == data.dataRegistrations[i].pateintPhone) {
                            boolean = true;
                        }
                    }
                    if (boolean == false) {
                        if (data.dataRegistrations[i].lastVisit.status == false) {
                            _this.newPatients++;
                        }
                        if (data.dataRegistrations[i].gender == 'Male') {
                            _this.totalMale++;
                        }
                        else {
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
                            boolean = true;
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
                var newMaxArray = [];
                var prescriptionArray = [];
                var patientArray = [];
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
                            total_fee += parseInt(data.dataDispensed[j].registration.fee);
                            total_prescriptions++;
                            total_patients++;
                        }
                    }
                    for (var k = 0; k < data.dataRegistrations.length; k++) {
                        if (newMaxArray[i] == _this.datePipe.transform(data.dataRegistrations[k].createAt, 'yyyy-MM-dd')) {
                            total_reg_fee += parseInt(data.dataRegistrations[k].fee);
                            total_reg_patient++;
                        }
                    }
                    prescriptionArray.push(total_prescriptions);
                    _this.feeArray.push(total_fee + total_reg_fee);
                    patientArray.push(total_patients + total_reg_patient);
                    dateArray.push(newMaxArray[i]);
                }
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
                for (var i = 0; i < localFreqArray.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.freqPatientArray.length; j++) {
                        if (_this.freqPatientArray[j].name == localFreqArray[i].name && _this.freqPatientArray[j].phone == localFreqArray[i].phone) {
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        _this.freqPatientArray.push({
                            name: localFreqArray[i].name,
                            count: localFreqArray[i].count,
                            phone: localFreqArray[i].phone
                        });
                    }
                }
                // for (var i = 0; i < this.freqPatientArray.length; i++) {
                // 	for (var j = 0; j < data.dataRegistrations.length; j++) {
                // 		if(data.dataRegistrations[j].pateintName == this.freqPatientArray[i].name && 
                // 			data.dataRegistrations[j].pateintPhone == this.freqPatientArray[i].phone){
                // 			this.freqPatientArray[i].count++
                // 		}
                // 	}	
                // 	for (var k = 0; k < data.dataDispensed.length; k++) {
                // 		if(this.freqPatientArray[i].name ==  data.dataDispensed[k].registration.pateintName &&
                // 			this.freqPatientArray[i].phone ==  data.dataDispensed[k].registration.pateintPhone){
                // 			this.freqPatientArray[i].count++
                // 		}
                // 	}
                // }
                console.log(_this.freqPatientArray.length);
                for (var i = 0; i < _this.freqPatientArray.length; i++) {
                    _this.freqPatientArray[i].count = 0;
                    for (var j = 0; j < localFreqArray.length; j++) {
                        if (_this.freqPatientArray[i].name == localFreqArray[j].name &&
                            _this.freqPatientArray[i].phone == localFreqArray[j].phone) {
                            _this.freqPatientArray[i].count++;
                        }
                    }
                }
                console.log(_this.freqPatientArray);
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
    DashboardProgressComponent.prototype.getData = function (data) {
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
    DashboardProgressComponent.prototype.getDataCeil = function (data) {
        return Math.ceil(data);
    };
    DashboardProgressComponent.prototype.getClassMap = function (data, i) {
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
    DashboardProgressComponent.prototype.FindReferralPatients = function (object) {
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
    DashboardProgressComponent.prototype.viewReferralPatients = function (status) {
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
                    name: "Dr. " + this.dataReferralFrom[i].by_doctor_id.first_name,
                    phone: this.dataReferralFrom[i].phone,
                    note: this.dataReferralFrom[i].note,
                    date: this.dataReferralFrom[i].createdAt,
                    patientName: this.dataReferralFrom[i].patient_name
                });
            }
        }
    };
    DashboardProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-progress',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress/dashboard-progress.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress/dashboard-progress.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], DashboardProgressComponent);
    return DashboardProgressComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress/dashboard-progress.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardProgressModule", function() { return DashboardProgressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_progress_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress/dashboard-progress-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_progress_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress/dashboard-progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardProgressModule = /** @class */ (function () {
    function DashboardProgressModule() {
    }
    DashboardProgressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_progress_routing_module__["a" /* DashboardProgressRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_progress_component__["a" /* DashboardProgressComponent */]]
        })
    ], DashboardProgressModule);
    return DashboardProgressModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-progress.module.chunk.js.map