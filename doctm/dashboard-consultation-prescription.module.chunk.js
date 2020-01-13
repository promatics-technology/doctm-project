webpackJsonp(["dashboard-consultation-prescription.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-prescription/dashboard-consultation-prescription-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardConsultationPrescriptionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_consultation_prescription_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-prescription/dashboard-consultation-prescription.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_consultation_prescription_component__["a" /* DashboardConsultationPrescriptionComponent */]
    }
];
var DashboardConsultationPrescriptionRoutingModule = /** @class */ (function () {
    function DashboardConsultationPrescriptionRoutingModule() {
    }
    DashboardConsultationPrescriptionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardConsultationPrescriptionRoutingModule);
    return DashboardConsultationPrescriptionRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-prescription/dashboard-consultation-prescription.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cus-content-wrapper{\r\n\tpadding-top: 0px;\r\n}\r\n.tr-cstm{\r\n\tbackground-color: #000;color:#fff;\r\n}\r\n.clr-blue{\r\n\tcolor:#00b0f0;\r\n\tfont-weight: bold;\r\n\tcursor: pointer;\r\n}\r\n.sign-war{\r\n\tcolor: rgb(255,0,0);\r\n\tposition: relative;\r\n\t-webkit-transform: translateY(-5px);\r\n\t        transform: translateY(-5px);\r\n}\r\n.tbl-diag{\r\n\tmin-height:373px;\r\n\tmax-height:373px;\r\n\tmargin-bottom:15px;\r\n\toverflow-x:hidden;\r\n\toverflow-y: scroll;   \r\n}\r\n.tbl-diag-1{\r\n\tmin-height:10px;\r\n\tmax-height:190px;\r\n\tmargin-bottom:15px;\r\n\toverflow-x:hidden;\r\n\toverflow-y: scroll;   \r\n}\r\n.cus-sidebar-wrapper .cus-sidebar{\r\n\theight: initial;\r\n}\r\n.cus-sidebar-wrapper{\r\n\tz-index: 99;\r\n}\r\n.dashboard-header-two{\r\n\tpadding-top: 0px;\r\n}\r\n.table{\r\n\tmargin-bottom:0px;\r\n}\r\n.table tr td{\r\n\tpadding:7px 0px; \r\n}\r\n.inner-tab{\r\n\tmargin-bottom: 12px;\r\n}\r\n/*karam @29-1-2018*/\r\n.side-bar-cstm{\r\n\tz-index: 99;\r\n}\r\n.res-tab-2{\r\n\tmax-height: 200px;\r\n}\r\n.cstm-ul-new li a{\r\n\tbackground-color:transparent;\r\n\tcolor:#000;\r\n\tpadding:10px 104px;\r\n\tcursor: pointer;\r\n\tborder-radius: 0px;\r\n\tborder-bottom: 2px solid transparent; \r\n}\r\n.cstm-ul-new li.active a{\r\n\tbackground-color: #e0e0e0;\r\n    color: #000;\r\n\tborder-bottom: 2px solid #00b0f0;\r\n}\r\n.tab-new{\r\n\tmin-height: 450px;\r\n    max-height: 450px;\r\n    padding: 0px 8px;\r\n    border-left: 1px solid #dcdcdc;\r\n    border-right: 1px solid #dcdcdc;\r\n    overflow-x: hidden;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n    font-weight: bold;\r\n}\r\n.cstm-mg{\r\n\tmargin-top: 5px;\r\n}\r\n.btn-go{\r\n\tbackground-color: transparent;\r\n    border: 1px solid #002160;\r\n    margin-bottom: 5px;\r\n    min-width: 62%;\r\n}\r\n.btn-go:hover{\r\n    -webkit-transition: 300ms;\r\n    transition: 300ms;\r\n    background: #98C74F;\r\n    border-color: #98C74F;\r\n    color: #fff;\r\n}\r\n.cstm-ul li a{\r\n\tborder-radius:0px!important;\r\n\tmargin-right: 0px!important; \r\n}\r\n/*.cus-content{\r\n\tz-index:1;\r\n}*/\r\n.li-cstm a{\r\n\ttext-align: center!important;\r\n    background: #000!important;\r\n    color: #fff!important;\r\n    font-size: 16px!important;\r\n    font-weight: inherit!important;\r\n    padding: 6px!important;\r\n}\r\n/*.tab-new-cstm tr td{\r\n\tfont-size: 10px;\r\n}*/\r\n.brder-cstm{\r\n\tpadding-bottom: 1px;\r\n    margin-bottom: 6px;\r\n    border-bottom: 1px solid #a7a7a7;\r\n    position: relative;\r\n}\r\n.brder-cstm::after{\r\n\tcontent: \"\";\r\n    position: absolute;\r\n    height: 6px;\r\n    width: 12px;\r\n    background-color: #ffffff;\r\n    top: 41px;\r\n    right: -3px;\r\n\t \r\n}\r\n.cus-sidebar ul{\r\n\tborder:1px solid #a7a7a7;\r\n}\r\n.txt-thm{\r\n\tfont-weight: bold;\r\n\tcolor: rgb(0,32,96);\r\n}\r\n.cstm-tr td{\r\n\tborder-bottom: 1px solid #a5a4a4!important;\r\n\tborder-top: 1px solid #a5a4a4!important;\r\n}\r\n.my-table-fv tr td{\r\n\tpadding:4px; \r\n}\r\n.evn{\r\n\tbackground-color:#eff3ef;\r\n}\r\n.cstm-ul li.active a,\r\n.cstm-ul li.active a:active,\r\n.cstm-ul li.active a:focus,\r\n.cstm-ul li.active a:hover{\r\n\tbackground: #002160!important;\r\n\tcolor:#fff!important;\r\n}\r\n.my-tab-5{\r\n\tmin-height:392px;\r\n    max-height:392px;\r\n}\r\n.tab-9 tr td{\r\n\tpadding:8px;\r\n}\r\n.cstm-brdr{\r\n\t    border-right: 1px solid #bfbfbf;\r\n\t    border-left:1px solid #bfbfbf;\r\n}\r\n.btn-brdr{\r\n\tborder-bottom: 1px solid #bfbfbf;\r\n}\r\n.one-tab tr td{\r\n\tpadding:4.5px 8px!important; \r\n}\r\n.blank-ftr{\r\n\theight:35px;\r\n\twidth:100%;\r\n\tbackground-color:#00b0f0;\r\n\tfloat:left;\r\n\tposition:fixed;\r\n\tbottom: 0;\r\n}\r\n.cus-content-wrapper{\r\n\tpadding-bottom: 0px!important;\r\n}\r\n.inner-tab{\r\n\tmargin-bottom: 4px!important;\r\n}\r\n.modal.fade .modal-dialog {\r\n  -webkit-transform: translate3d(0, 100vh, 0);\r\n          transform: translate3d(0, 100vh, 0);\r\n  -webkit-transition: 700ms;\r\n  transition: 700ms;\r\n}\r\n.modal.in .modal-dialog {\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0);\r\n  -webkit-transition: 700ms;\r\n  transition: 700ms;\r\n}\r\n.cstm-tr-2{\r\n\tbackground-color:#d7e4e3;\r\n}\r\n.cstm-tr-2 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-2 td:last-child {\r\n border-right: none;\r\n}\r\n.cstm-tr-3{\r\n\tborder-bottom:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td:last-child {\r\n border-right: none;\r\n}\r\n/*.cstm-md-bdy {\r\n\tposition: absolute;\r\n\ttop: -30px;\r\n    right: 8px;\r\n}*/\r\n.modal-body{\r\n\tpadding-top: 1px;\r\n\tpadding-bottom: -1px;\r\n}\r\n.left-algn{\r\n\ttext-align: left;\r\n\tpadding-left: 6px!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-prescription/dashboard-consultation-prescription.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"analytics-sec\">\t\n\t<div class=\"ipd-deatil-sec\">\n\t\t<!-- <div class=\"md-tab\">\n\t      \t\n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t          \t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-prescription\"> Consultation </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-pharmacy-detail\"> Clinic Services </a></li>\n\t      \t</ul>\n\t    </div> -->\n\n\t    <div class=\"inner-tab\">\n\t    \t<!-- Nav tabs -->\n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-patient\"> OPD </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-time\"> Time</a></li>\n\t          \t<li role=\"presentation\" *ngIf = \"doctorData.digital_precipitation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-prescription\" >Prescription</a></li>\n\t\t\t\t<!--li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor'\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-treatment\"> Pharmacy</a></li>\n\t          \t<li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor'\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-diagnosis\"> Diagnostics </a></li>\n\t          \t<li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor'\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-investigation\"> IPD </a></li-->\n\t\t\t\t<li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor' && doctorData.clinic_services.Clinic_Pharmacy==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-treatment\"> Pharmacy</a></li>\n\t          \t<li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor' && doctorData.clinic_services.Clinic_Diagnostics==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-diagnosis\"> Diagnostics </a></li>\n\t          \t<li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor' && doctorData.clinic_services.Clinic_IPD==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-investigation\"> IPD </a></li>\n\t      \t</ul>\n\t    </div>\n\n\t    <div class=\"ipd-body\">\n\t    \t<div class=\"cus-sidebar-wrapper\">\n\t    \t\t<div class=\"cus-sidebar\">\n\t    \t\t\t<ul class=\"nav nav-tabs cstm-ul\" role=\"tablist\">\n\t    \t\t\t\t<li>\n\t    \t\t\t\t\t<div class=\"\">\n\t    \t\t\t\t\t\t<div class=\"col-lg-3\">\n\t    \t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>From</b></h4>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t<div class=\"col-lg-9\">\n\t    \t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t    \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"fromDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t    \t\t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t</li>\n\t    \t\t\t\t<li>\n\t    \t\t\t\t\t<div class=\"\">\n\t    \t\t\t\t\t\t<div class=\"col-lg-3\">\n\t    \t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>To</b></h4>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t<div class=\"col-lg-9\">\n\t    \t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t    \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"toDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t    \t\t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t</li>\n\t    \t\t\t\t<li class=\"text-right brder-cstm\">\n\t    \t\t\t\t\t<div class=\"col-lg-12 text-center\">\n\t    \t\t\t\t\t\t<button class=\"btn btn-go\" (click)=\"go()\">Go</button>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t</li>\n\t\t\t          \t<li class=\"li-cstm\"> <a href=\"javascript:void(0);\"> For Past</a> </li>\n\t    \t\t\t\t<!-- <li class=\"{{getClass(0)}}\" (click)=\"activatetab(0)\" class=\"active\"> <a href=\"javascript:void(0);\"> Current </a> </li> -->\n\t    \t\t\t\t<li class=\"{{getClass(1)}}\" (click)=\"activatetab(1)\"> <a href=\"javascript:void(0);\"> 1 Week &nbsp;<small *ngIf=\"activatedtab==1\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(2)}}\" (click)=\"activatetab(2)\"> <a href=\"javascript:void(0);\"> 2 Weeks &nbsp;<small *ngIf=\"activatedtab==2\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small>  </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month &nbsp;<small *ngIf=\"activatedtab==3\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month &nbsp;<small *ngIf=\"activatedtab==4\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month &nbsp;<small *ngIf=\"activatedtab==5\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year &nbsp;<small *ngIf=\"activatedtab==6\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> All </a> </li>\n\t\t\t      \t</ul>\n\t    \t\t</div>\n\t    \t</div>\n\n    \t\t<div class=\"cus-content-wrapper\" style=\"position: relative;\">\n    \t\t\t<div class=\"cus-content\">\n    \t\t\t\t<div class=\"row\">\n    \t\t\t\t\t<div class=\"col-lg-6  btn-brdr cstm-brdr\">\n    \t\t\t\t\t\t<div class=\"table-wrap\" *ngIf=\"!loadingMedication\">\n    \t\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t\t    <thead>\n\t\t\t\t\t\t\t    \t<tr class=\"tr-cstm\">\n\t\t\t\t\t\t\t    \t\t<th colspan=\"3\" class=\"text-center\">Medication </th>\n\t\t\t\t\t\t\t    \t</tr>\n\t\t\t\t\t\t\t\t    </thead>\n\t\t\t\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td style=\"color: red;\"><b><span [matTooltipPosition]=\"position\" [matTooltip]=\"helpText[1]?.text\">Medication Spectrum  <i class=\"fa fa-exclamation-circle sign-war\" aria-hidden=\"true\"></i></span></b></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"150px\"><b>: {{medicationSpectrum.length}} meds</b></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal\" (click) = \"getSorted(1)\">View</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t<td>No. of medicines prescribed</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"150px\">: {{noOfmedicinesPrescribed}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>20 most prescribed medicine</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left clr-blue\" width=\"150px\">: <span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal2\" >View</span></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t<td>Most frequent Follow-up given</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"150px\">: {{maximumFollowUpDays}} days</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t\t</table>\n    \t\t\t\t\t\t</div>\n\n    \t\t\t\t\t\t<div class=\"table-wrap\" *ngIf=\"!loadingInvestigation\">\n    \t\t\t\t\t\t\t<table class=\"table my-table-fv tb-hnew tab-9\">\n\t\t\t\t\t\t\t\t    <thead>\n\t\t\t\t\t\t\t    \t<tr class=\"tr-cstm\">\n\t\t\t\t\t\t\t    \t\t<th colspan=\"3\" class=\"text-center\">Investigation </th>\n\t\t\t\t\t\t\t    \t</tr>\n\t\t\t\t\t\t\t\t    </thead>\n\t\t\t\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"color: red;\"><b><span [matTooltipPosition]=\"position\" [matTooltip]=\"helpText[3]?.text\">Investigation Spectrum  <i class=\"fa fa-exclamation-circle sign-war\" aria-hidden=\"true\"></i></span></b></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"150px\"> <b> : {{investigationSpectrum.length}}</b></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal\" (click) = \"getSorted(2)\">View</span></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t<td>Prescriptions with Investigation</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"150px\"> :<b> {{investigationWithPrec}} </b><small>({{getData(investigationWithPrecentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-right clr-blue\"></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>No. of Pathology test</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"150px\"> :<b> {{countPathology}} </b><small>({{getData(pathologyPercentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-right clr-blue\"><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal3\" (click) = \"testName(1)\">View</span></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t<td>No of USG test</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"150px\"> :<b> {{countUsg}} </b><small>({{getData(usgPercentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-right clr-blue\"><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal3\" (click) = \"testName(2)\">View</span></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>No. of X-Ray test</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"150px\"> :<b> {{countXray}} </b><small>({{getData(xrayPercentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right clr-blue\"><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal3\" (click) = \"testName(3)\">View</span></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t<td>No. of MRI test</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"150px\"> :<b> {{countMri}} </b><small>({{getData(mriPercentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right clr-blue\"><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal3\" (click) = \"testName(4)\">View</span></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>No. of CT-Scan test</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"150px\"> :<b> {{countCtScan}} </b><small>({{getData(ctScanPercentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right clr-blue\"><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal3\" (click) = \"testName(5)\">View</span></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t<td>No. of other tests</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"150px\"> :<b> {{countOther}} </b><small>({{getData(otherPercentage)}}%)</small></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right clr-blue\"><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal3\" (click) = \"testName(6)\">View</span></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t\t</table>\n    \t\t\t\t\t\t</div>\n    \t\t\t\t\t</div>\n    \t\t\t\t\t<div class=\"col-lg-6 btn-brdr \">\n    \t\t\t\t\t\t<div class=\"table-wrap my-tab-5\" *ngIf=\"!loadingDiagnosis\">\n    \t\t\t\t\t\t\t<table class=\"table my-table-fv one-tab\">\n\t\t\t\t\t\t\t\t    <thead>\n\t\t\t\t\t\t\t    \t<tr class=\"tr-cstm\">\n\t\t\t\t\t\t\t    \t\t<th colspan=\"3\" class=\"text-center\">Diagnosis </th>\n\t\t\t\t\t\t\t    \t</tr>\n\t\t\t\t\t\t\t\t    </thead>\n\t\t\t\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t<td style=\"color: red;\"><b><span [matTooltipPosition]=\"position\" [matTooltip]=\"helpText[2]?.text\">Diagnosis Spectrum  <i class=\"fa fa-exclamation-circle sign-war\" aria-hidden=\"true\"></i></span></b></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"150px\"><b>: {{symptomsSpectrum.length}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right clr-blue\"><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal\" (click) = \"getSorted(3)\">View</span></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"cstm-tr evn\">\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"txt-thm\">Diagnosis</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left txt-thm\" width=\"150px\">Patients</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right txt-thm\">% of total</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor = \"let list of diagnosisArray | slice:0:9\">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{list.value}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"150px\">{{list.occurrence}} Patients</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{getData(list.percentage)}}%</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t\t</table>\n    \t\t\t\t\t\t</div>\n    \t\t\t\t\t\t<div class=\"table-wrap\" *ngIf=\"!loadingSurgery\">\n    \t\t\t\t\t\t\t<table class=\"table my-table-fv\">\n\t\t\t\t\t\t\t\t    <thead>\n\t\t\t\t\t\t\t    \t<tr class=\"tr-cstm\">\n\t\t\t\t\t\t\t    \t\t<th colspan=\"3\" class=\"text-center\">Surgery & Procedure </th>\n\t\t\t\t\t\t\t    \t</tr>\n\t\t\t\t\t\t\t\t    </thead>\n\t\t\t\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td style=\"color: red;\"><b><span [matTooltipPosition]=\"position\" [matTooltip]=\"helpText[4]?.text\">Surgery & Procedure Spectrum  <i class=\"fa fa-exclamation-circle sign-war\" aria-hidden=\"true\"></i></span></b></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"150px\"><b>: {{surgerySpectrum.length}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal\" (click) = \"getSorted(4)\">View</span></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t<td>Prescriptions with Surgery</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" colspan=\"2\"><b>: {{surgeryWithPrecp}}</b>\n\t\t\t\t\t\t\t\t\t\t\t <small>({{getData(surgeryWithPercentage)}}%)</small>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <td class=\"text-right clr-blue\">View</td> -->\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Prescribed Surgery & Procedures</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"150px\"><b>: {{surgeryArray.length}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><span class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#myModal1\">View</span></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t\t</table>\n    \t\t\t\t\t\t</div>\n    \t\t\t\t\t</div>\n    \t\t\t\t</div>\n\t    \t\t</div>\n\t    \t\t<div class=\"row\">\n\t\t    \t\t<div class=\"blank-ftr\">\t    \t\t\t\n\t\t\t\t\t</div>\n\t    \t\t</div>\n\t    \t</div>\n\t    </div>\n\t</div>\n</div>\n\n<!-- Top 10 Products (Max Profit.) -->\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body cstm-md-bdy\">          \t\n      \t \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      \t\t<div class=\"cstm-tab\">\n\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t    <tbody>\n\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Type</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Name</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of commanArray;let i = index; \">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{data.type}}</td>\n\t\t\t\t\t\t\t<td class=\"left-algn\">{{data.data}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n      \t\t</div>      \n        </div>\n      </div>\n    </div>\n</div>\n\n<!-- Surgary Array -->\n<div class=\"modal fade\" id=\"myModal1\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body cstm-md-bdy\">          \t\n      \t \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      \t\t<div class=\"cstm-tab\">\n\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t    <tbody>\n\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Type</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Name</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Occurence</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Percentage</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of surgeryArray;let i = index; \">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{data.type}}</td>\n\t\t\t\t\t\t\t<td class=\"left-algn\">{{data.data}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{data.occurence}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{getData(data.percentage)}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n      \t\t</div>      \n        </div>\n      </div>\n    </div>\n</div>\n\n<!-- 20 most prescribed medicine -->\n<div class=\"modal fade\" id=\"myModal2\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body cstm-md-bdy\">          \t\n      \t \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      \t\t<div class=\"cstm-tab\">\n\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t    <tbody>\n\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Type</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Name</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Occurence</b></td>\n\t\t\t\t\t\t\t<!-- <td class=\"text-center\"><b>Percentage</b></td> -->\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of medicationPrescribed;let i = index; \">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{data.type}}</td>\n\t\t\t\t\t\t\t<td class=\"left-algn\">{{data.med}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{data.occurrence}}</td>\n\t\t\t\t\t\t\t<!-- <td class=\"text-center\">{{getData(data.percentage)}}</td> -->\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n      \t\t</div>      \n        </div>\n      </div>\n    </div>\n</div>\n\n<!-- Prescriptions with test -->\n<div class=\"modal fade\" id=\"myModal3\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body cstm-md-bdy\">          \t\n      \t \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      \t\t<div class=\"cstm-tab\">\n\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t    <tbody>\n\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Type</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Name</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Occurence</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of testArray;let i = index; \">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{data.type}}</td>\n\t\t\t\t\t\t\t<td class=\"left-algn\">{{data.name}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{data.count}}</td>\n\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n      \t\t</div>      \n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-prescription/dashboard-consultation-prescription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardConsultationPrescriptionComponent; });
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




var DashboardConsultationPrescriptionComponent = /** @class */ (function () {
    function DashboardConsultationPrescriptionComponent(userService, datePipe, toastr) {
        this.userService = userService;
        this.datePipe = datePipe;
        this.toastr = toastr;
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
        this.toolTip = "This is demo text";
        this.position = "right";
        this.helpText = [];
    }
    DashboardConsultationPrescriptionComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        this.medicationSpectrum = [];
        this.medicationPrescribed = [];
        this.surgeryArray = [];
        this.investigationSpectrum = [];
        this.surgerySpectrum = [];
        this.symptomsSpectrum = [];
        this.commanArray = [];
        this.testArray = [];
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        this.activatetab(1);
        this.getHelpText();
    };
    DashboardConsultationPrescriptionComponent.prototype.getHelpText = function () {
        var _this = this;
        this.userService.GetHelpText().subscribe(function (data) {
            if (data.response == true) {
                _this.helpText = data.data;
                console.log(_this.helpText);
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        });
    };
    DashboardConsultationPrescriptionComponent.prototype.activatetab = function (ii) {
        this.activatedtab = ii;
        var object;
        object = {};
        var date = new Date();
        //object.smart_diagnostics_id = this.doctorData.smart_diagnostics_id
        object.end_date = new Date();
        if (ii == 0) {
            object.start_date = date;
        }
        else if (ii == 1) {
            object.start_date = new Date(date.setDate(date.getDate() - 6));
        }
        else if (ii == 2) {
            object.start_date = new Date(date.setDate(date.getDate() - 13));
        }
        else if (ii == 3) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 1));
        }
        else if (ii == 4) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 3));
        }
        else if (ii == 5) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 6));
        }
        else if (ii == 6) {
            object.start_date = new Date(date.setFullYear(date.getFullYear() - 1));
        }
        else if (ii == 7) {
            object.start_date = new Date();
            object.maximum = true;
        }
        this.fromDate = new Date(object.start_date);
        this.toDate = new Date(object.end_date);
        object.doctor_id = this.doctorData._id;
        object.doctorid = this.doctorData.itemId;
        console.log(object);
        this.loadingMedication = true;
        this.loadingInvestigation = true;
        this.loadingDiagnosis = true;
        this.loadingSurgery = true;
        this.PrescriptionAnalyticsMedication(object);
        this.PrescriptionAnalyticsInvestigation(object);
        this.PrescriptionAnalyticsDiagnosis(object);
        this.PrescriptionAnalyticsSurgery(object);
    };
    DashboardConsultationPrescriptionComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else {
            return '';
        }
    };
    DashboardConsultationPrescriptionComponent.prototype.PrescriptionAnalyticsMedication = function (object) {
        var _this = this;
        this.userService.PrescriptionAnalyticsMedication(object).subscribe(function (data) {
            console.log(data);
            _this.medicationSpectrum = [];
            _this.medicationPrescribed = [];
            _this.maximumFollowUpDays = 0;
            // this.maximumFollowUpDaysPercentage = 0 
            if (data.response) {
                _this.calculateMedicationSpectrum(data);
            }
            _this.loadingMedication = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardConsultationPrescriptionComponent.prototype.calculateMedicationSpectrum = function (data) {
        // for unique medicines
        this.medicationSpectrum = data.dataMedicationSpectrum;
        var followUpArray = [];
        if (data.dataMedicinesPrescribed.length > 0) {
            for (var i = 0; i < data.dataMedicinesPrescribed.length; i++) {
                if (data.dataMedicinesPrescribed[i].precription.followDaysComplete) {
                    followUpArray.push(data.dataMedicinesPrescribed[i].precription.finalfollowUpDays);
                }
                for (var j = 0; j < data.dataMedicinesPrescribed[i].precription.medication.tab.length; j++) {
                    if (data.dataMedicinesPrescribed[i].precription.medication.tab[j].frequency != "Frequency") {
                        var boolean = false;
                        for (var k = 0; k < this.medicationPrescribed.length; k++) {
                            if (this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.tab[j].name &&
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.tab[j].med_name[0].value) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.tab[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.tab[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.tab[j].med_name[0].value
                            });
                        }
                    }
                }
                for (var j = 0; j < data.dataMedicinesPrescribed[i].precription.medication.cap.length; j++) {
                    if (data.dataMedicinesPrescribed[i].precription.medication.cap[j].frequency != "Frequency") {
                        var boolean = false;
                        for (var k = 0; k < this.medicationPrescribed.length; k++) {
                            if (this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.cap[j].name &&
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.cap[j].med_name[0].value) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.cap[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.cap[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.cap[j].med_name[0].value
                            });
                        }
                    }
                }
                for (var j = 0; j < data.dataMedicinesPrescribed[i].precription.medication.syp.length; j++) {
                    if (data.dataMedicinesPrescribed[i].precription.medication.syp[j].frequency != "Frequency") {
                        var boolean = false;
                        for (var k = 0; k < this.medicationPrescribed.length; k++) {
                            if (this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.syp[j].name &&
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.syp[j].med_name[0].value) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.syp[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.syp[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.syp[j].med_name[0].value
                            });
                        }
                    }
                }
                for (var j = 0; j < data.dataMedicinesPrescribed[i].precription.medication.susp.length; j++) {
                    if (data.dataMedicinesPrescribed[i].precription.medication.susp[j].frequency != "Frequency") {
                        var boolean = false;
                        for (var k = 0; k < this.medicationPrescribed.length; k++) {
                            if (this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.susp[j].name &&
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.susp[j].med_name[0].value) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.susp[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.susp[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.susp[j].med_name[0].value
                            });
                        }
                    }
                }
                for (var j = 0; j < data.dataMedicinesPrescribed[i].precription.medication.emulsn.length; j++) {
                    if (data.dataMedicinesPrescribed[i].precription.medication.emulsn[j].frequency != "Frequency") {
                        var boolean = false;
                        for (var k = 0; k < this.medicationPrescribed.length; k++) {
                            if (this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.emulsn[j].name &&
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.emulsn[j].med_name[0].value) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.emulsn[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.emulsn[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.emulsn[j].med_name[0].value
                            });
                        }
                    }
                }
                for (var j = 0; j < data.dataMedicinesPrescribed[i].precription.medication.solution.length; j++) {
                    if (data.dataMedicinesPrescribed[i].precription.medication.solution[j].frequency != "Frequency") {
                        var boolean = false;
                        for (var k = 0; k < this.medicationPrescribed.length; k++) {
                            if (this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.solution[j].name &&
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.solution[j].med_name[0].value) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.solution[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.solution[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.solution[j].med_name[0].value
                            });
                        }
                    }
                }
                for (var j = 0; j < data.dataMedicinesPrescribed[i].precription.medication.injection.length; j++) {
                    if (data.dataMedicinesPrescribed[i].precription.medication.injection[j].frequency != "Frequency") {
                        var boolean = false;
                        for (var k = 0; k < this.medicationPrescribed.length; k++) {
                            if (this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.injection[j].name &&
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.injection[j].med_name[0].value) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.injection[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.injection[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.injection[j].med_name[0].value
                            });
                        }
                    }
                }
                for (var j = 0; j < data.dataMedicinesPrescribed[i].precription.medication.powder.length; j++) {
                    if (data.dataMedicinesPrescribed[i].precription.medication.powder[j].frequency != "Frequency") {
                        var boolean = false;
                        for (var k = 0; k < this.medicationPrescribed.length; k++) {
                            if (this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.powder[j].name &&
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.powder[j].med_name[0].value) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.powder[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.powder[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.powder[j].med_name[0].value
                            });
                        }
                    }
                }
                for (var j = 0; j < data.dataMedicinesPrescribed[i].precription.medication.cream.length; j++) {
                    if (data.dataMedicinesPrescribed[i].precription.medication.cream[j].frequency != "Frequency") {
                        var boolean = false;
                        for (var k = 0; k < this.medicationPrescribed.length; k++) {
                            if (this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.cream[j].name &&
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.cream[j].med_name[0].value) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.cream[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.cream[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.cream[j].med_name[0].value
                            });
                        }
                    }
                }
                for (var j = 0; j < data.dataMedicinesPrescribed[i].precription.medication.aerosols.length; j++) {
                    if (data.dataMedicinesPrescribed[i].precription.medication.aerosols[j].frequency != "Frequency") {
                        var boolean = false;
                        for (var k = 0; k < this.medicationPrescribed.length; k++) {
                            if (this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.aerosols[j].name &&
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.aerosols[j].med_name[0].value) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.aerosols[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.aerosols[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.aerosols[j].med_name[0].value
                            });
                        }
                    }
                }
                for (var j = 0; j < data.dataMedicinesPrescribed[i].precription.medication.mouthwash.length; j++) {
                    if (data.dataMedicinesPrescribed[i].precription.medication.mouthwash[j].frequency != "Frequency") {
                        var boolean = false;
                        for (var k = 0; k < this.medicationPrescribed.length; k++) {
                            if (this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.mouthwash[j].name &&
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.mouthwash[j].med_name[0].value) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.mouthwash[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.mouthwash[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.mouthwash[j].med_name[0].value
                            });
                        }
                    }
                }
                for (var j = 0; j < data.dataMedicinesPrescribed[i].precription.medication.gel.length; j++) {
                    if (data.dataMedicinesPrescribed[i].precription.medication.gel[j].frequency != "Frequency") {
                        var boolean = false;
                        for (var k = 0; k < this.medicationPrescribed.length; k++) {
                            if (this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.gel[j].name &&
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.gel[j].med_name[0].value) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.gel[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.gel[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.gel[j].med_name[0].value
                            });
                        }
                    }
                }
                for (var j = 0; j < data.dataMedicinesPrescribed[i].precription.medication.drops.length; j++) {
                    if (data.dataMedicinesPrescribed[i].precription.medication.drops[j].frequency != "Frequency") {
                        var boolean = false;
                        for (var k = 0; k < this.medicationPrescribed.length; k++) {
                            if (this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.drops[j].name &&
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.drops[j].med_name[0].value) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.drops[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.drops[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.drops[j].med_name[0].value
                            });
                        }
                    }
                }
                for (var j = 0; j < data.dataMedicinesPrescribed[i].precription.medication.lotion.length; j++) {
                    if (data.dataMedicinesPrescribed[i].precription.medication.lotion[j].frequency != "Frequency") {
                        var boolean = false;
                        for (var k = 0; k < this.medicationPrescribed.length; k++) {
                            if (this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.lotion[j].name &&
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.lotion[j].med_name[0].value) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.lotion[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.lotion[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.lotion[j].med_name[0].value
                            });
                        }
                    }
                }
                for (var j = 0; j < data.dataMedicinesPrescribed[i].precription.medication.ointment.length; j++) {
                    if (data.dataMedicinesPrescribed[i].precription.medication.ointment[j].frequency != "Frequency") {
                        var boolean = false;
                        for (var k = 0; k < this.medicationPrescribed.length; k++) {
                            if (this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.ointment[j].name &&
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.ointment[j].med_name[0].value) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.ointment[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.ointment[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.ointment[j].med_name[0].value
                            });
                        }
                    }
                }
            }
            for (var i = 0; i < this.medicationPrescribed.length; i++) {
                this.medicationPrescribed[i].occurrence = this.calculateMedicineOccurrence(this.medicationPrescribed[i], data.dataMedicinesPrescribed);
            }
            this.medicationPrescribed.sort(function (a, b) {
                var nameA = a.occurrence, nameB = b.occurrence;
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
            });
            // for (var i = 0; i < followUpArray.length; i++) {
            //     if(this.maximumFollowUpDays < followUpArray[i]){
            //         this.maximumFollowUpDays = followUpArray[i]
            //     }
            // }
            var followUpCount = [];
            for (var i = 0; i < followUpArray.length; i++) {
                var count;
                count = 0;
                for (var j = 0; j < followUpArray.length; j++) {
                    if (followUpArray[i] == followUpArray[j]) {
                        count++;
                    }
                }
                followUpCount.push(count);
            }
            var newMaxValue = followUpCount.findIndex(function (x) { return x == Math.max.apply(Math, followUpCount); });
            this.maximumFollowUpDays = followUpArray[newMaxValue];
            console.log(followUpArray);
            console.log(followUpCount);
            // this.maximumFollowUpDaysPercentage = this.getData(this.getPercentage(count,followUpArray.length))
            this.noOfmedicinesPrescribed = 0;
            for (var i = 0; i < this.medicationPrescribed.length; i++) {
                this.noOfmedicinesPrescribed += this.medicationPrescribed[i].occurrence;
            }
        }
        this.medicationPrescribed.sort(function (a, b) { return parseInt(b.occurrence) - parseInt(a.occurrence); });
        // console.log(this.medicationPrescribed)//unique medicines found
        // console.log(this.maximumFollowUpDays)
        // console.log(this.maximumFollowUpDaysPercentage)
    };
    DashboardConsultationPrescriptionComponent.prototype.calculateMedicineOccurrence = function (med, array) {
        var count;
        count = 0;
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array[i].precription.medication.tab.length; j++) {
                if (array[i].precription.medication.tab[j].frequency != "Frequency" &&
                    med.type == array[i].precription.medication.tab[j].name &&
                    med.med == array[i].precription.medication.tab[j].med_name[0].value) {
                    count++;
                }
            }
            for (var j = 0; j < array[i].precription.medication.cap.length; j++) {
                if (array[i].precription.medication.cap[j].frequency != "Frequency" &&
                    med.type == array[i].precription.medication.cap[j].name &&
                    med.med == array[i].precription.medication.cap[j].med_name[0].value) {
                    count++;
                }
            }
            for (var j = 0; j < array[i].precription.medication.syp.length; j++) {
                if (array[i].precription.medication.syp[j].frequency != "Frequency" &&
                    med.type == array[i].precription.medication.syp[j].name &&
                    med.med == array[i].precription.medication.syp[j].med_name[0].value) {
                    count++;
                }
            }
            for (var j = 0; j < array[i].precription.medication.susp.length; j++) {
                if (array[i].precription.medication.susp[j].frequency != "Frequency" &&
                    med.type == array[i].precription.medication.susp[j].name &&
                    med.med == array[i].precription.medication.susp[j].med_name[0].value) {
                    count++;
                }
            }
            for (var j = 0; j < array[i].precription.medication.emulsn.length; j++) {
                if (array[i].precription.medication.emulsn[j].frequency != "Frequency" &&
                    med.type == array[i].precription.medication.emulsn[j].name &&
                    med.med == array[i].precription.medication.emulsn[j].med_name[0].value) {
                    count++;
                }
            }
            for (var j = 0; j < array[i].precription.medication.solution.length; j++) {
                if (array[i].precription.medication.solution[j].frequency != "Frequency" &&
                    med.type == array[i].precription.medication.solution[j].name &&
                    med.med == array[i].precription.medication.solution[j].med_name[0].value) {
                    count++;
                }
            }
            for (var j = 0; j < array[i].precription.medication.injection.length; j++) {
                if (array[i].precription.medication.injection[j].frequency != "Frequency" &&
                    med.type == array[i].precription.medication.injection[j].name &&
                    med.med == array[i].precription.medication.injection[j].med_name[0].value) {
                    count++;
                }
            }
            for (var j = 0; j < array[i].precription.medication.powder.length; j++) {
                if (array[i].precription.medication.powder[j].frequency != "Frequency" &&
                    med.type == array[i].precription.medication.powder[j].name &&
                    med.med == array[i].precription.medication.powder[j].med_name[0].value) {
                    count++;
                }
            }
            for (var j = 0; j < array[i].precription.medication.cream.length; j++) {
                if (array[i].precription.medication.cream[j].frequency != "Frequency" &&
                    med.type == array[i].precription.medication.cream[j].name &&
                    med.med == array[i].precription.medication.cream[j].med_name[0].value) {
                    count++;
                }
            }
            for (var j = 0; j < array[i].precription.medication.aerosols.length; j++) {
                if (array[i].precription.medication.aerosols[j].frequency != "Frequency" &&
                    med.type == array[i].precription.medication.aerosols[j].name &&
                    med.med == array[i].precription.medication.aerosols[j].med_name[0].value) {
                    count++;
                }
            }
            for (var j = 0; j < array[i].precription.medication.mouthwash.length; j++) {
                if (array[i].precription.medication.mouthwash[j].frequency != "Frequency" &&
                    med.type == array[i].precription.medication.mouthwash[j].name &&
                    med.med == array[i].precription.medication.mouthwash[j].med_name[0].value) {
                    count++;
                }
            }
            for (var j = 0; j < array[i].precription.medication.gel.length; j++) {
                if (array[i].precription.medication.gel[j].frequency != "Frequency" &&
                    med.type == array[i].precription.medication.gel[j].name &&
                    med.med == array[i].precription.medication.gel[j].med_name[0].value) {
                    count++;
                }
            }
            for (var j = 0; j < array[i].precription.medication.drops.length; j++) {
                if (array[i].precription.medication.drops[j].frequency != "Frequency" &&
                    med.type == array[i].precription.medication.drops[j].name &&
                    med.med == array[i].precription.medication.drops[j].med_name[0].value) {
                    count++;
                }
            }
            for (var j = 0; j < array[i].precription.medication.lotion.length; j++) {
                if (array[i].precription.medication.lotion[j].frequency != "Frequency" &&
                    med.type == array[i].precription.medication.lotion[j].name &&
                    med.med == array[i].precription.medication.lotion[j].med_name[0].value) {
                    count++;
                }
            }
            for (var j = 0; j < array[i].precription.medication.ointment.length; j++) {
                if (array[i].precription.medication.ointment[j].frequency != "Frequency" &&
                    med.type == array[i].precription.medication.ointment[j].name &&
                    med.med == array[i].precription.medication.ointment[j].med_name[0].value) {
                    count++;
                }
            }
        }
        return count;
    };
    DashboardConsultationPrescriptionComponent.prototype.PrescriptionAnalyticsInvestigation = function (object) {
        var _this = this;
        this.userService.PrescriptionAnalyticsInvestigation(object).subscribe(function (data) {
            console.log(data);
            _this.investigationSpectrum = [];
            _this.investigationWithPrec = 0;
            _this.countPathology = 0;
            _this.countUsg = 0;
            _this.countXray = 0;
            _this.countMri = 0;
            _this.countCtScan = 0;
            _this.countOther = 0;
            _this.investigationWithPrecentage = 0;
            _this.pathologyPercentage;
            _this.usgPercentage = 0;
            _this.xrayPercentage = 0;
            _this.mriPercentage = 0;
            _this.ctScanPercentage = 0;
            _this.otherPercentage = 0;
            _this.testArray = [];
            _this.investigationUniqueArray = [];
            if (data.response) {
                for (var i = 0; i < data.dataInvestigationSpectrum.length; i++) {
                    _this.investigationSpectrum.push({ type: data.dataInvestigationSpectrum[i].type,
                        data: data.dataInvestigationSpectrum[i].data,
                        count: 0
                    });
                }
                _this.investigationWithPrec = data.dataInvestigationPrescribed.length;
                _this.investigationWithPrecentage = (data.dataInvestigationPrescribed.length * 100) / data.dataInvestigationPrescribedTotal;
                for (var k = 0; k < data.dataInvestigationPrescribed.length; k++) {
                    for (var l = 0; l < data.dataInvestigationPrescribed[k].precription.investigationArray.length; l++) {
                        var boolean1 = false;
                        if (data.dataInvestigationPrescribed[k].precription.investigationArray[l].name != 'Mammography' &&
                            data.dataInvestigationPrescribed[k].precription.investigationArray[l].name != 'ECG' &&
                            data.dataInvestigationPrescribed[k].precription.investigationArray[l].name != 'EEG' &&
                            data.dataInvestigationPrescribed[k].precription.investigationArray[l].name != 'Echo' &&
                            data.dataInvestigationPrescribed[k].precription.investigationArray[l].name != 'Uroflowmetry' &&
                            data.dataInvestigationPrescribed[k].precription.investigationArray[l].name != 'TMT') {
                            for (var m = 0; m < data.dataInvestigationPrescribed[k].precription.investigationArray[l].values.length; m++) {
                                var boolean = false;
                                for (var a = 0; a < _this.investigationUniqueArray.length; a++) {
                                    if (data.dataInvestigationPrescribed[k].precription.investigationArray[l].name == _this.investigationUniqueArray[a].type &&
                                        data.dataInvestigationPrescribed[k].precription.investigationArray[l].values[m].value == _this.investigationUniqueArray[a].name) {
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    _this.investigationUniqueArray.push({
                                        type: data.dataInvestigationPrescribed[k].precription.investigationArray[l].name,
                                        name: data.dataInvestigationPrescribed[k].precription.investigationArray[l].values[m].value,
                                        count: 0
                                    });
                                }
                            }
                        }
                        else {
                            for (var a = 0; a < _this.investigationUniqueArray.length; a++) {
                                if (data.dataInvestigationPrescribed[k].precription.investigationArray[l].name == _this.investigationUniqueArray[a].type &&
                                    data.dataInvestigationPrescribed[k].precription.investigationArray[l].values == _this.investigationUniqueArray[a].name) {
                                    boolean1 = true;
                                    break;
                                }
                            }
                            if (boolean1 == false) {
                                console.log(data.dataInvestigationPrescribed[k].precription.investigationArray[l].values);
                                _this.investigationUniqueArray.push({
                                    type: data.dataInvestigationPrescribed[k].precription.investigationArray[l].name,
                                    name: data.dataInvestigationPrescribed[k].precription.investigationArray[l].values,
                                    count: 0
                                });
                            }
                        }
                    }
                }
                for (var i = 0; i < _this.investigationUniqueArray.length; i++) {
                    for (var k = 0; k < data.dataInvestigationPrescribed.length; k++) {
                        for (var l = 0; l < data.dataInvestigationPrescribed[k].precription.investigationArray.length; l++) {
                            if (data.dataInvestigationPrescribed[k].precription.investigationArray[l].name != 'Mammography' &&
                                data.dataInvestigationPrescribed[k].precription.investigationArray[l].name != 'ECG' &&
                                data.dataInvestigationPrescribed[k].precription.investigationArray[l].name != 'EEG' &&
                                data.dataInvestigationPrescribed[k].precription.investigationArray[l].name != 'Echo' &&
                                data.dataInvestigationPrescribed[k].precription.investigationArray[l].name != 'Uroflowmetry' &&
                                data.dataInvestigationPrescribed[k].precription.investigationArray[l].name != 'TMT') {
                                for (var m = 0; m < data.dataInvestigationPrescribed[k].precription.investigationArray[l].values.length; m++) {
                                    if (data.dataInvestigationPrescribed[k].precription.investigationArray[l].name == _this.investigationUniqueArray[i].type &&
                                        data.dataInvestigationPrescribed[k].precription.investigationArray[l].values[m].value == _this.investigationUniqueArray[i].name) {
                                        _this.investigationUniqueArray[i].count++;
                                    }
                                }
                            }
                            else {
                                if (data.dataInvestigationPrescribed[k].precription.investigationArray[l].name == _this.investigationUniqueArray[i].type &&
                                    data.dataInvestigationPrescribed[k].precription.investigationArray[l].values == _this.investigationUniqueArray[i].name) {
                                    _this.investigationUniqueArray[i].count++;
                                }
                            }
                        }
                    }
                    if (_this.investigationUniqueArray[i].type == "Pathology") {
                        _this.countPathology += _this.investigationUniqueArray[i].count;
                    }
                    else if (_this.investigationUniqueArray[i].type == "Ultrasound") {
                        _this.countUsg += _this.investigationUniqueArray[i].count;
                    }
                    else if (_this.investigationUniqueArray[i].type == "X-Ray") {
                        _this.countXray += _this.investigationUniqueArray[i].count;
                    }
                    else if (_this.investigationUniqueArray[i].type == "MRI") {
                        _this.countMri += _this.investigationUniqueArray[i].count;
                    }
                    else if (_this.investigationUniqueArray[i].type == "CT-Scan") {
                        _this.countCtScan += _this.investigationUniqueArray[i].count;
                    }
                    else {
                        _this.countOther++;
                    }
                }
                console.log("test array", _this.investigationUniqueArray);
                var totalPrecriArrayLength = 0;
                totalPrecriArrayLength = (_this.countPathology + _this.countUsg + _this.countXray + _this.countMri + _this.countCtScan + _this.countOther);
                _this.pathologyPercentage = (_this.countPathology * 100) / totalPrecriArrayLength;
                _this.usgPercentage = (_this.countUsg * 100) / totalPrecriArrayLength;
                _this.xrayPercentage = (_this.countXray * 100) / totalPrecriArrayLength;
                _this.mriPercentage = (_this.countMri * 100) / totalPrecriArrayLength;
                _this.ctScanPercentage = (_this.countCtScan * 100) / totalPrecriArrayLength;
                _this.otherPercentage = (_this.countOther * 100) / totalPrecriArrayLength;
            }
            _this.loadingInvestigation = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardConsultationPrescriptionComponent.prototype.PrescriptionAnalyticsDiagnosis = function (object) {
        var _this = this;
        this.userService.PrescriptionAnalyticsDiagnosis(object).subscribe(function (data) {
            console.log(data);
            _this.symptomsSpectrum = [];
            _this.diagnosisArray = [];
            if (data.response) {
                for (var i = 0; i < data.dataSymptomsSpectrum.length; i++) {
                    _this.symptomsSpectrum.push({
                        type: data.dataSymptomsSpectrum[i].type,
                        data: data.dataSymptomsSpectrum[i].data
                    });
                }
                for (var i = 0; i < data.dataSymptomsPrescribed.length; i++) {
                    for (var j = 0; j < data.dataSymptomsPrescribed[i].precription.diagnosisSelected.length; j++) {
                        var boolean = false;
                        for (var k = 0; k < _this.diagnosisArray.length; k++) {
                            if (_this.diagnosisArray[k].value == data.dataSymptomsPrescribed[i].precription.diagnosisSelected[j].display) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            _this.diagnosisArray.push({
                                value: data.dataSymptomsPrescribed[i].precription.diagnosisSelected[j].display,
                                occurrence: 0,
                                percentage: 0
                            });
                        }
                    }
                }
                for (var k = 0; k < _this.diagnosisArray.length; k++) {
                    var count = 0;
                    var totalLengthDiagnosis = 0;
                    for (var i = 0; i < data.dataSymptomsPrescribed.length; i++) {
                        for (var j = 0; j < data.dataSymptomsPrescribed[i].precription.diagnosisSelected.length; j++) {
                            if (data.dataSymptomsPrescribed[i].precription.diagnosisSelected[j].display) {
                                totalLengthDiagnosis++;
                            }
                            if (_this.diagnosisArray[k].value == data.dataSymptomsPrescribed[i].precription.diagnosisSelected[j].display) {
                                count++;
                            }
                            _this.diagnosisArray[k].occurrence = count;
                            _this.diagnosisArray[k].percentage = (count * 100) / totalLengthDiagnosis;
                        }
                    }
                }
                _this.diagnosisArray.sort(function (a, b) { return parseInt(b.occurrence) - parseInt(a.occurrence); });
            }
            _this.loadingDiagnosis = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardConsultationPrescriptionComponent.prototype.PrescriptionAnalyticsSurgery = function (object) {
        var _this = this;
        this.userService.PrescriptionAnalyticsSurgery(object).subscribe(function (data) {
            console.log(data);
            _this.surgerySpectrum = [];
            _this.surgeryArray = [];
            _this.surgeryWithPrecp = 0;
            _this.surgeryWithPercentage = 0;
            if (data.response) {
                for (var i = 0; i < data.dataSurgerySpectrum.length; i++) {
                    _this.surgerySpectrum.push({
                        type: data.dataSurgerySpectrum[i].type,
                        data: data.dataSurgerySpectrum[i].data
                    });
                }
                var count = 0;
                _this.surgeryWithPrecp = data.dataSurgeryPrescribed.length;
                _this.surgeryWithPercentage = (data.dataSurgeryPrescribed.length * 100) / data.dataSurgeryPrescribedTotal;
                for (var i = 0; i < data.dataSurgeryPrescribed.length; i++) {
                    for (var j = 0; j < data.dataSurgeryPrescribed[i].precription.surgerySelectedArray.length; j++) {
                        if (data.dataSurgeryPrescribed[i].precription.surgerySelectedArray[j].procedure_name[0].display) {
                            count++;
                        }
                        var boolean = false;
                        for (var k = 0; k < _this.surgeryArray.length; k++) {
                            if (_this.surgeryArray[k].data == data.dataSurgeryPrescribed[i].precription.surgerySelectedArray[j].procedure_name[0].display &&
                                _this.surgeryArray[k].type == data.dataSurgeryPrescribed[i].precription.surgerySelectedArray[j].sub_speciality) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            _this.surgeryArray.push({
                                data: data.dataSurgeryPrescribed[i].precription.surgerySelectedArray[j].procedure_name[0].display,
                                type: data.dataSurgeryPrescribed[i].precription.surgerySelectedArray[j].sub_speciality,
                                occurence: 0,
                                percentage: 0
                            });
                        }
                    }
                }
                for (var a = 0; a < _this.surgeryArray.length; a++) {
                    for (var i = 0; i < data.dataSurgeryPrescribed.length; i++) {
                        for (var j = 0; j < data.dataSurgeryPrescribed[i].precription.surgerySelectedArray.length; j++) {
                            if (_this.surgeryArray[a].data == data.dataSurgeryPrescribed[i].precription.surgerySelectedArray[j].procedure_name[0].display &&
                                _this.surgeryArray[a].type == data.dataSurgeryPrescribed[i].precription.surgerySelectedArray[j].sub_speciality) {
                                _this.surgeryArray[a].occurence++;
                                _this.surgeryArray[a].percentage = (_this.surgeryArray[a].occurence * 100) / count;
                            }
                        }
                    }
                }
            }
            _this.loadingSurgery = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardConsultationPrescriptionComponent.prototype.go = function () {
        this.activatedtab = 0;
        var object;
        object = {};
        object.doctor_id = this.doctorData._id;
        object.doctorid = this.doctorData.itemId;
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
        this.loadingMedication = true;
        this.loadingInvestigation = true;
        this.loadingDiagnosis = true;
        this.loadingSurgery = true;
        this.PrescriptionAnalyticsMedication(object);
        this.PrescriptionAnalyticsInvestigation(object);
        this.PrescriptionAnalyticsDiagnosis(object);
        this.PrescriptionAnalyticsSurgery(object);
    };
    DashboardConsultationPrescriptionComponent.prototype.getData = function (data) {
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
    DashboardConsultationPrescriptionComponent.prototype.getPercentage = function (data, total) {
        return this.getData((data * 100) / total);
    };
    DashboardConsultationPrescriptionComponent.prototype.getClassMap = function (data, i) {
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
    DashboardConsultationPrescriptionComponent.prototype.getSorted = function (a) {
        if (a == 1) {
            this.commanArray = this.medicationSpectrum;
        }
        else if (a == 2) {
            // console.log(this.investigationSpectrum)
            //console.log(this.investigationSpectrum.sort((a, b) => ((a.type).toString() -( b.type).toString())))
            this.investigationSpectrum.sort(function (a, b) {
                var textA = a.type.toUpperCase();
                var textB = b.type.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            this.commanArray = this.investigationSpectrum;
        }
        else if (a == 3) {
            this.commanArray = this.symptomsSpectrum;
        }
        else if (a == 4) {
            this.commanArray = this.surgerySpectrum;
        }
    };
    DashboardConsultationPrescriptionComponent.prototype.testName = function (b) {
        var pathology = [];
        var ultrasound = [];
        var mri = [];
        var xray = [];
        var ctScan = [];
        var other = [];
        for (var i = 0; i < this.investigationUniqueArray.length; i++) {
            if (this.investigationUniqueArray[i].type == "Pathology") {
                pathology.push({
                    type: this.investigationUniqueArray[i].type,
                    name: this.investigationUniqueArray[i].name,
                    count: this.investigationUniqueArray[i].count
                });
            }
            else if (this.investigationUniqueArray[i].type == "MRI") {
                mri.push({
                    type: this.investigationUniqueArray[i].type,
                    name: this.investigationUniqueArray[i].name,
                    count: this.investigationUniqueArray[i].count
                });
            }
            else if (this.investigationUniqueArray[i].type == "Ultrasound") {
                ultrasound.push({
                    type: this.investigationUniqueArray[i].type,
                    name: this.investigationUniqueArray[i].name,
                    count: this.investigationUniqueArray[i].count
                });
            }
            else if (this.investigationUniqueArray[i].type == "X-Ray") {
                xray.push({
                    type: this.investigationUniqueArray[i].type,
                    name: this.investigationUniqueArray[i].name,
                    count: this.investigationUniqueArray[i].count
                });
            }
            else if (this.investigationUniqueArray[i].type == "CT-Scan") {
                ctScan.push({
                    type: this.investigationUniqueArray[i].type,
                    name: this.investigationUniqueArray[i].name,
                    count: this.investigationUniqueArray[i].count
                });
            }
            else {
                other.push({
                    type: this.investigationUniqueArray[i].type,
                    name: this.investigationUniqueArray[i].name,
                    count: this.investigationUniqueArray[i].count
                });
            }
        }
        if (b == 1) {
            this.testArray = pathology;
        }
        else if (b == 2) {
            this.testArray = ultrasound;
        }
        else if (b == 3) {
            this.testArray = xray;
        }
        else if (b == 4) {
            this.testArray = mri;
        }
        else if (b == 5) {
            this.testArray = ctScan;
        }
        else if (b == 6) {
            this.testArray = other;
        }
    };
    DashboardConsultationPrescriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-consultation-prescription',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-prescription/dashboard-consultation-prescription.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-prescription/dashboard-consultation-prescription.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], DashboardConsultationPrescriptionComponent);
    return DashboardConsultationPrescriptionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-prescription/dashboard-consultation-prescription.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardConsultationPrescriptionModule", function() { return DashboardConsultationPrescriptionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_consultation_prescription_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-prescription/dashboard-consultation-prescription-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_consultation_prescription_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-prescription/dashboard-consultation-prescription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardConsultationPrescriptionModule = /** @class */ (function () {
    function DashboardConsultationPrescriptionModule() {
    }
    DashboardConsultationPrescriptionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_consultation_prescription_routing_module__["a" /* DashboardConsultationPrescriptionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_tooltip__["a" /* MatTooltipModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__dashboard_consultation_prescription_component__["a" /* DashboardConsultationPrescriptionComponent */]]
        })
    ], DashboardConsultationPrescriptionModule);
    return DashboardConsultationPrescriptionModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-consultation-prescription.module.chunk.js.map