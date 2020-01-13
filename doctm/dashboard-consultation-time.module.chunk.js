webpackJsonp(["dashboard-consultation-time.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-time/dashboard-consultation-time-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardConsultationTimeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_consultation_time_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-time/dashboard-consultation-time.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_consultation_time_component__["a" /* DashboardConsultationTimeComponent */],
    }
];
var DashboardConsultationTimeRoutingModule = /** @class */ (function () {
    function DashboardConsultationTimeRoutingModule() {
    }
    DashboardConsultationTimeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardConsultationTimeRoutingModule);
    return DashboardConsultationTimeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-time/dashboard-consultation-time.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cus-content-wrapper{\r\n\tpadding-top: 0px;\r\n}\r\n.progress{\r\n    height:50px!important;\r\n    margin-bottom: 10px;\r\n}\r\n.consult-time .progress-bar {\r\n    line-height: 55px!important;\t\r\n}\r\n.progress-bar{\r\n\tbackground-color: #72d447;\r\n}\r\n.box{\r\n\tdisplay: inline-block;\r\n\twidth: 10px;\r\n\tbackground-color:grey;\r\n\theight: 10px;\r\n}\r\n.box-1{\r\n\tbackground-color: rgb(255,0,0);\r\n}\r\n.box-2{\r\n\tbackground-color: rgb(255,192,0);\r\n}\r\n.box-3{\r\n\tbackground-color: rgb(146,208,80);\r\n}\r\n.consult-time{\r\n\tpadding-left:10px;\r\n\t/*border-left: 1px solid #dcdcdc; */\r\n}\r\n.wrap-tbl{\r\n\tpadding-top:10px; \r\n\tborder-top: 1px solid #dcdcdc;\r\n}\r\n.chart-box{\r\n\twidth: initial;\r\n\tfloat: none;\r\n}\r\n.bg-h4{\r\n\tcolor:rgb(58,176,12);\r\n\tmargin-top: 0px;\r\n}\r\n.cus-sidebar-wrapper .cus-sidebar {\r\n     height:initial;\r\n}\r\n.mg-top{\r\n\tmargin-bottom: 0px;\r\n}\r\n.btn-custm{\r\n\tdisplay: block;\r\n\tmargin:15px auto;\r\n\t-webkit-box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.75);\r\n\tbox-shadow: 0px 4px 5px -2px rgba(0,0,0,0.75);\r\n\tborder-radius: 10px;\r\n\twidth:93%;\r\n\tfont-size: 18px;\r\n\tbackground: #bcd3e5; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n\tbackground: -webkit-gradient(linear, left top, left bottom, from(#bcd3e5),to(#8cb8ff));\r\n\tbackground: linear-gradient(to bottom, #bcd3e5 0%,#8cb8ff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bcd3e5', endColorstr='#8cb8ff',GradientType=0 ); /* IE6-9 */\r\n\tword-spacing: 6px;\r\n\tcursor: initial;\r\n}\r\n.btn-wh{\r\n\tbackground: #a0fdb7!important; \r\n}\r\n.cstm-font{\r\n\tfont-size: 23px;\r\n\tcolor: #1565C0;\r\n}\r\n.cstm-font-1{\r\n\tfont-size: 22px;\r\n}\r\n.side-bar-cstm{\r\n\tz-index: 99;\r\n}\r\n.res-tab-2{\r\n\tmax-height: 200px;\r\n}\r\n.cstm-ul-new li a{\r\n\tbackground-color:transparent;\r\n\tcolor:#000;\r\n\tpadding:10px 104px;\r\n\tcursor: pointer;\r\n\tborder-radius: 0px;\r\n\tborder-bottom: 2px solid transparent; \r\n}\r\n.cstm-ul-new li.active a{\r\n\tbackground-color: #e0e0e0;\r\n    color: #000;\r\n\tborder-bottom: 2px solid #00b0f0;\r\n}\r\n.tab-new{\r\n\tmin-height: 450px;\r\n    max-height: 450px;\r\n    padding: 0px 8px;\r\n    border-left: 1px solid #dcdcdc;\r\n    border-right: 1px solid #dcdcdc;\r\n    overflow-x: hidden;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n    font-weight: bold;\r\n}\r\n.cstm-mg{\r\n\tmargin-top: 5px;\r\n}\r\n.btn-go{\r\n\tbackground-color: transparent;\r\n    border: 1px solid #002160;\r\n    margin-bottom: 5px;\r\n    min-width: 62%;\r\n}\r\n.btn-go:hover{\r\n    -webkit-transition: 300ms;\r\n    transition: 300ms;\r\n    background: #98C74F;\r\n    border-color: #98C74F;\r\n    color: #fff;\r\n}\r\n/*.cus-content{\r\n\tz-index:1;\r\n}*/\r\n.li-cstm a{\r\n\ttext-align: center!important;\r\n    background: #000!important;\r\n    color: #fff!important;\r\n    font-size: 16px!important;\r\n    font-weight: inherit!important;\r\n    padding: 6px!important;\r\n}\r\n/*.tab-new-cstm tr td{\r\n\tfont-size: 10px;\r\n}*/\r\n.brder-cstm{\r\n\tpadding-bottom: 1px;\r\n    margin-bottom: 6px;\r\n    border-bottom: 1px solid #a7a7a7;\r\n    position: relative;\r\n}\r\n.brder-cstm::after{\r\n\tcontent: \"\";\r\n    position: absolute;\r\n    height: 6px;\r\n    width: 12px;\r\n    background-color: #ffffff;\r\n    top: 41px;\r\n    right: -3px;\r\n\t \r\n}\r\n.cus-sidebar ul{\r\n\tborder:1px solid #a7a7a7;\r\n}\r\n.brdr-left{\r\n    border-left: 1px solid #bfc4cb;\r\n}\r\n.brdr-btm{\r\n\tborder-bottom: 1px solid #bfc4cb;\t\r\n}\r\n.blank-ftr{\r\n\theight:35px;\r\n\twidth:100%;\r\n\tbackground-color:#00b0f0;\r\n\tfloat:left;\r\n\tposition:fixed;\r\n\tbottom: 0;\r\n\tz-index: 99;\r\n}\r\ncanvas{\r\n\theight:245px!important;\r\n}\r\n.cus-content-wrapper{\r\n\tpadding-bottom: 0px!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-time/dashboard-consultation-time.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"analytics-sec\">\n\t\n\t<div class=\"ipd-deatil-sec\">\n\t<!-- \t<div class=\"md-tab\">\n\t      \n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t          \t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-prescription\"> Consultation </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-pharmacy-detail\"> Clinic Services </a></li>\n\t      \t</ul>\n\t    </div> -->\n\n\t    <div class=\"inner-tab\">\n\t    \t<!-- Nav tabs -->\n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t          \t<li role=\"presentation\" ><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-patient\"> OPD </a></li>\n\t          \t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-time\"> Time</a></li>\n\t          \t<li role=\"presentation\" *ngIf = \"doctorData.digital_precipitation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-prescription\" >Prescription</a></li>\n\t\t\t\t<!--li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor'\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-treatment\"> Pharmacy</a></li>\n\t          \t<li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor'\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-diagnosis\"> Diagnostics </a></li>\n\t          \t<li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor'\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-investigation\"> IPD </a></li-->\n\t      \t<li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor' && doctorData.clinic_services.Clinic_Pharmacy==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-treatment\"> Pharmacy</a></li>\n\t          \t<li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor' && doctorData.clinic_services.Clinic_Diagnostics==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-diagnosis\"> Diagnostics </a></li>\n\t          \t<li role=\"presentation\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor' && doctorData.clinic_services.Clinic_IPD==true\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-investigation\"> IPD </a></li>\n\t\t\t</ul>\n\t    </div>\n\n\t   <div class=\"ipd-body\">\n\t    \t<div class=\"cus-sidebar-wrapper side-bar-cstm\">\n\t    \t\t<div class=\"cus-sidebar\">\n\t    \t\t\t<ul> \n\t    \t\t\t\t<li>\n\t    \t\t\t\t\t<div class=\"\">\n\t    \t\t\t\t\t\t<div class=\"col-lg-3\">\n\t    \t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>From</b></h4>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t<div class=\"col-lg-9\">\n\t    \t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t    \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"fromDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t    \t\t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t</li>\n\t    \t\t\t\t<li>\n\t    \t\t\t\t\t<div class=\"\">\n\t    \t\t\t\t\t\t<div class=\"col-lg-3\">\n\t    \t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>To</b></h4>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t<div class=\"col-lg-9\">\n\t    \t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t    \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"toDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t    \t\t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t</li>\n\t    \t\t\t\t<li class=\"text-right brder-cstm\">\n\t    \t\t\t\t\t<div class=\"col-lg-12 text-center\">\n\t    \t\t\t\t\t\t<button class=\"btn btn-go\" (click)=\"go()\">Go</button>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t</li>\n\t    \t\t\t\t\n\t    \t\t\t\t<li class=\"li-cstm\"> <a href=\"javascript:void(0);\"> For Past</a> </li>\n\t    \t\t\t\t<!-- <li class=\"{{getClass(0)}}\" (click)=\"activatetab(0)\" class=\"active\"> <a href=\"javascript:void(0);\"> Current </a> </li> -->\n\t    \t\t\t\t<li class=\"{{getClass(1)}}\" (click)=\"activatetab(1)\"> <a href=\"javascript:void(0);\"> 1 Week &nbsp;<small *ngIf=\"activatedtab==1\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(2)}}\" (click)=\"activatetab(2)\"> <a href=\"javascript:void(0);\"> 2 Weeks &nbsp;<small *ngIf=\"activatedtab==2\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small>  </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month &nbsp;<small *ngIf=\"activatedtab==3\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month &nbsp;<small *ngIf=\"activatedtab==4\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month &nbsp;<small *ngIf=\"activatedtab==5\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year &nbsp;<small *ngIf=\"activatedtab==6\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> All </a> </li>\n\t    \t\t\t</ul>\n\t    \t\t</div>\n\t    \t</div>\n\n    \t\t<div class=\"cus-content-wrapper\" style=\"position: relative;\">\n    \t\t\t<div class=\"cus-content\">\n\t    \t\t\t<div class=\"\">\n\t    \t\t\t\t<div class=\"consult-time\">\n\t    \t\t\t\t\t<div class=\"row\">\n\t    \t\t\t\t\t\t<div class=\"col-lg-6 text-center brdr-btm\"  *ngIf=\"!loading\">\n\t    \t\t\t\t\t\t\t<h4 class=\"bg-h4\"> Consultation Time Utilization (CTU)<span [matTooltipPosition]=\"position\" [matTooltip]=\"helpText[9]?.text\"> <i class=\"fa fa-exclamation-circle sign-war\" aria-hidden=\"true\"></i></span></h4>\n\t\t\t\t\t\t\t\t\t<div class=\"chart-diagnos chart-box wrap-canavas\">\n\t\t\t\t\t    \t\t\t\t<canvas baseChart\n\t\t\t\t\t\t                [datasets]=\"lineChartData\"\n\t\t\t\t\t\t                [labels]=\"lineChartLabels\"\n\t\t\t\t\t\t                [options]=\"lineChartOptions\"\n\t\t\t\t\t\t                [colors]=\"lineChartColors\"\n\t\t\t\t\t\t                [legend]=\"lineChartLegend\"\n\t\t\t\t\t\t                [chartType]=\"lineChartType\"\n\t\t\t\t\t\t                (chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t\t                (chartClick)=\"chartClicked($event)\"></canvas>\n\t\t\t\t\t\t            </div>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t<div class=\"col-lg-6 text-center brdr-left brdr-btm\"  *ngIf=\"!loading\">\n\t    \t\t\t\t\t\t\t<h4 class=\"bg-h4\"> Average Time Per Patient <span [matTooltipPosition]=\"position\" [matTooltip]=\"helpText[10]?.text\"> <i class=\"fa fa-exclamation-circle sign-war\" aria-hidden=\"true\"></i></span></h4>\n\t    \t\t\t\t\t\t\t<div class=\"chart-diagnos chart-box wrap-canavas\">\n\t\t\t\t\t    \t\t\t\t<canvas baseChart\n\t\t\t\t\t\t                [datasets]=\"lineChartData1\"\n\t\t\t\t\t\t                [labels]=\"lineChartLabels1\"\n\t\t\t\t\t\t                [options]=\"lineChartOptions\"\n\t\t\t\t\t\t                [colors]=\"lineChartColors\"\n\t\t\t\t\t\t                [legend]=\"lineChartLegend\"\n\t\t\t\t\t\t                [chartType]=\"lineChartType\"\n\t\t\t\t\t\t                (chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t\t                (chartClick)=\"chartClicked($event)\"></canvas>\n\t\t\t\t\t            \t</div>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t\t\n\t    \t\t\t\t\t<div class=\"row\">\t\n\t\t    \t\t\t\t\t<!-- <div class=\"col-lg-7\">\n\t\t    \t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t    \t\t\t\t\t\t<h5> Consultation Time Utilization <i class=\"fa fa-info-circle color-red\"></i> \n\t\t\t    \t\t\t\t\t\t</h5>\n\t\t\t    \t\t\t\t\t</div>\n\t\t    \t\t\t\t\t\t“CTU is the fraction of your total clinic time for which you are actually engaged in consultation process. Higher the CTU busier you are. “\n\t\t    \t\t\t\t\t\t<div class=\"wrap-tbl\">\n\t    \t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t  <tbody>\n\t\t\t\t\t\t\t\t\t\t\t      <tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t        <td width=\"400px\">Total Clinic Time Available</td>\n\t\t\t\t\t\t\t\t\t\t\t        <td width=\"300px\">: <b>480</b> min </td>\n\t\t\t\t\t\t\t\t\t\t\t        <td width=\"300px\" class=\"text-right\">Total Clinic Time Utilized</td>\n\t\t\t\t\t\t\t\t\t\t\t        <td width=\"300px\" class=\"text-right\">: <b>380</b> min </td>\n\t\t\t\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t\t\t\t      <tr class=\"evn\">\n\t\t\t\t\t\t\t\t\t\t\t        <td width=\"400px\">Longest Consultation</td>\n\t\t\t\t\t\t\t\t\t\t\t        <td width=\"300px\">: <b>20</b> min </td>\n\t\t\t\t\t\t\t\t\t\t\t        <td width=\"300px\" class=\"text-right\">Shortest Consultation</td>\n\t\t\t\t\t\t\t\t\t\t\t        <td width=\"300px\" class=\"text-right\">: <b>4</b> min </td>\n\t\t\t\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t\t\t\t  </tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t\t<h5 class=\"mg-top\">Average Consultation Time Per Minute : 8 min Average CTU : 68%</h5>\n\t\t    \t\t\t\t\t</div>\n\t\t    \t\t\t\t\t<div class=\"col-lg-5\">\n\t\t    \t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t  \t<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:70%\">\n\t\t\t\t\t\t\t\t\t    \t<span class=\"\">70% Complete</span>\n\t\t\t\t\t\t\t\t\t  \t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 text-left\">\n\t\t\t\t\t\t\t\t\t\t\t0%\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t100%\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-4 col-sm-4 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"box box-1\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<label>< 25%, Poor </label>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-4 col-sm-4 col-xs-12 text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"box box-2\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<label>25 - 50%, Good</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-4 col-sm-4 col-xs-12 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"box box-3\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<label>50%, Excellent</label>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t    \t\t\t\t\t</div> -->\n\t\t    \t\t\t\t\t<div class=\"col-lg-6 text-center\">\n\t\t    \t\t\t\t\t\t<button class=\"btn btn-custm\"><b>Total clinic time available : <span class=\"cstm-font\">{{totalHours}}:{{totalMin}}</span> </b><span> hrs</span></button>\n\t\t    \t\t\t\t\t\t<button class=\"btn btn-custm\"><b>Total clinic time utilized : <span class=\"cstm-font\">{{totalTimeUtilizedHours}}:{{totalTimeUtilizedMin}}</span></b> <span> hrs</span></button>\n\t\t    \t\t\t\t\t\t<button class=\"btn btn-custm btn-wh\"><b> <span class=\"cstm-font-1\">Avg. CTU <br><span class=\"cstm-font\">{{getData(avgCtuPercentage)}} %</span></span></b></button>\n\t\t    \t\t\t\t\t</div>\n\t\t    \t\t\t\t\t<div class=\"col-lg-6 text-center\">\n\t\t    \t\t\t\t\t\t<button class=\"btn btn-custm\"><b>Longest consultation : <span class=\"cstm-font\">{{longestConsultationMin}}:{{longestConsultationSec}}</span></b> min</button>\n\t\t    \t\t\t\t\t\t<button class=\"btn btn-custm\"><b>Shortest consultation : <span class=\"cstm-font\">{{shortestConsultationMin}}:{{shortestConsultationSec}}</span></b> <span> min</span></button>\n\t\t    \t\t\t\t\t\t<button class=\"btn btn-custm btn-wh\"><b> <span class=\"cstm-font-1\">Avg. time per patient <br><span class=\"cstm-font\">{{avgTimePerPatient}} </span></span></b><span> min</span></button>\n\t\t    \t\t\t\t\t</div>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t\n\t    \t\t\t\t</div>\n\t    \t\t\t</div>\n\t    \t\t</div>\n\t    \t\t<div class=\"row\">\n\t\t    \t\t<div class=\"blank-ftr\">\t    \t\t\t\n\t\t\t\t\t</div>\n\t    \t\t</div>\n\t    \t</div>\n\n\t    </div>\n\n\t</div>\n\t\t\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-time/dashboard-consultation-time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardConsultationTimeComponent; });
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




var DashboardConsultationTimeComponent = /** @class */ (function () {
    function DashboardConsultationTimeComponent(userService, datePipe, toastr) {
        this.userService = userService;
        this.datePipe = datePipe;
        this.toastr = toastr;
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy',
            defaultOpen: false,
        };
        this.fromDate = new Date();
        this.toDate = new Date();
        this.fromDate1 = new Date();
        this.toDate1 = new Date();
        this.newDate = new Date();
        this.activatedtab = 0;
        this.toolTip = "This is demo text";
        this.position = "right";
        this.lineChartData = [{
                data: [],
                label: 'Total Hours'
            },
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true,
            legend: {
                display: false,
            }
        };
        this.lineChartData1 = [{
                data: [],
                label: 'Total Avg Min'
            },
        ];
        this.lineChartLabels1 = [];
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
    }
    DashboardConsultationTimeComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        this.activatedtab = 0;
        this.activatetab(1);
        this.getHelpText();
    };
    DashboardConsultationTimeComponent.prototype.activatetab = function (ii) {
        var _this = this;
        this.totalHours = 0;
        this.totalMin = 0;
        this.countMonday = 0;
        this.countTuesday = 0;
        this.countWednesday = 0;
        this.countThursday = 0;
        this.countFriday = 0;
        this.countSaturday = 0;
        this.countSunday = 0;
        this.avgConsTime = 0;
        var localDateArray = [];
        this.timeArray = [];
        this.avgTimeArray = [];
        this.avgCtuPercentage = 0;
        this.activatedtab = ii;
        var object;
        object = {};
        var date = new Date();
        object.doctor_id = this.doctorData._id;
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
        console.log(object);
        this.fromDate = new Date(object.start_date);
        this.toDate = new Date(object.end_date);
        this.totalTimeUtilizedHours = 0;
        this.totalTimeUtilizedMin = 0;
        this.longestConsultationMin = 0;
        this.longestConsultationSec = 0;
        this.shortestConsultationMin = 0;
        this.shortestConsultationSec = 0;
        this.avgTimePerPatient = "";
        var totalPatients = 0;
        var dateArray = [];
        this.loading = true;
        this.userService.TimeAnalytics(object).subscribe(function (result) {
            console.log(result);
            if (result.response) {
                if (result.totalTimeInSeconds.length > 0) {
                    _this.totalTimeUtilizedHours = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) / 3600);
                    _this.totalTimeUtilizedMin = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) % 3600);
                    _this.totalTimeUtilizedMin = Math.floor(_this.totalTimeUtilizedMin / 60);
                }
                if (result.dataLongestConsultation.length > 0) {
                    _this.longestConsultationMin = Math.floor((result.dataLongestConsultation[0].totalSeconds) / 60);
                    _this.longestConsultationSec = Math.floor((result.dataLongestConsultation[0].totalSeconds) % 60);
                }
                if (result.dataShortestConsultation.length > 0) {
                    _this.shortestConsultationMin = Math.floor((result.dataShortestConsultation[0].totalSeconds) / 60);
                    _this.shortestConsultationSec = Math.floor((result.dataShortestConsultation[0].totalSeconds) % 60);
                }
                var avgTotalPatientSeconds = 0;
                var addTime = 0;
                var totalTimeInSeconds = 0;
                if (result.dataTotalPatientsDischarged.length > 0) {
                    for (var i = 0; i < result.dataTotalPatientsDischarged.length; i++) {
                        var totalPatientSeconds;
                        totalPatientSeconds = 0;
                        dateArray.push(_this.datePipe.transform(result.dataTotalPatientsDischarged[i].data[0].createAt, 'yyyy-MM-dd'));
                        for (var j = 0; j < result.dataTotalPatientsDischarged[i].data.length; j++) {
                            totalPatients++;
                            totalPatientSeconds = (result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)) / 3600;
                            totalTimeInSeconds += result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds);
                            addTime += result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds);
                        }
                        avgTotalPatientSeconds = (totalPatientSeconds / result.dataTotalPatientsDischarged[i].data.length) * 60;
                        _this.timeArray.push(totalPatientSeconds.toFixed(3));
                        _this.avgTimeArray.push(avgTotalPatientSeconds.toFixed(3));
                    }
                    ///////////// hours logic /////////////////////////////
                    var daysOfYear = [];
                    for (var d = _this.fromDate; d <= _this.toDate; d.setDate(d.getDate() + 1)) {
                        daysOfYear.push(new Date(d));
                    }
                    for (var i = 0; i < daysOfYear.length; i++) {
                        localDateArray.push(_this.datePipe.transform(daysOfYear[i], 'EEEE'));
                    }
                    for (var i = 0; i < localDateArray.length; i++) {
                        if (localDateArray[i] == "Monday") {
                            _this.countMonday++;
                        }
                        else if (localDateArray[i] == "Tuesday") {
                            _this.countTuesday++;
                        }
                        else if (localDateArray[i] == "Wednesday") {
                            _this.countWednesday++;
                        }
                        else if (localDateArray[i] == "Thursday") {
                            _this.countThursday++;
                        }
                        else if (localDateArray[i] == "Friday") {
                            _this.countFriday++;
                        }
                        else if (localDateArray[i] == "Saturday") {
                            _this.countSaturday++;
                        }
                        else if (localDateArray[i] == "Sunday") {
                            _this.countSunday++;
                        }
                    }
                    var total_diff = 0;
                    _this.avgConsTime = _this.doctorData.avgConsTime;
                    for (var j = 0; j < _this.doctorData.consultation_schedule.length; j++) {
                        var min_diff = 0;
                        var hour_diff = 0;
                        for (var k = 0; k < _this.doctorData.consultation_schedule[j].shifts.length; k++) {
                            min_diff += parseInt(_this.doctorData.consultation_schedule[j].shifts[k].toTime.minute) - parseInt(_this.doctorData.consultation_schedule[j].shifts[k].fromTime.minute);
                            hour_diff += parseInt(_this.doctorData.consultation_schedule[j].shifts[k].toTime.hour) - parseInt(_this.doctorData.consultation_schedule[j].shifts[k].fromTime.hour);
                            total_diff = min_diff + (hour_diff * 60);
                        }
                        if (_this.doctorData.consultation_schedule[j].Monday == true) {
                            _this.totalMin += (_this.countMonday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Tuesday == true) {
                            _this.totalMin += (_this.countTuesday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Wednesday == true) {
                            _this.totalMin += (_this.countWednesday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Thursday == true) {
                            _this.totalMin += (_this.countThursday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Friday == true) {
                            _this.totalMin += (_this.countFriday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Saturday == true) {
                            _this.totalMin += (_this.countSaturday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Sunday == true) {
                            _this.totalMin += (_this.countSunday * total_diff);
                        }
                    }
                    _this.totalHours = _this.totalMin / 60;
                    _this.totalHours = Math.trunc(_this.totalHours);
                    _this.totalMin = _this.totalMin % 60;
                    ///////////////////////////////////////////////////////
                }
                _this.avgCtuPercentage = (addTime * 100) / (_this.totalHours * 3600);
                _this.lineChartData = [{
                        data: _this.timeArray,
                        label: 'Total Hours'
                    },];
                _this.lineChartData1 = [{
                        data: _this.avgTimeArray,
                        label: 'Total Avg Min'
                    },];
                _this.lineChartLabels = dateArray;
                _this.lineChartLabels1 = dateArray;
                var min = parseInt(_this.getData(_this.getData(totalTimeInSeconds / totalPatients) / 60));
                var sec = parseInt(_this.getData(_this.getData(totalTimeInSeconds / totalPatients) % 60));
                _this.avgTimePerPatient = min + ":" + sec;
                var newAvgTimeArray = [];
                for (var i = 0; i < dateArray.length; i++) {
                    newAvgTimeArray.push(dateArray[i]);
                }
                ///////////////////////////// Date Sort Logic //////////////////////
                _this.timeSort(dateArray, _this.timeArray);
                _this.avgTimeSort(newAvgTimeArray, _this.avgTimeArray);
                ///////////////////////////// End sort Logic ////////////////////////
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardConsultationTimeComponent.prototype.timeSort = function (a, b) {
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
    DashboardConsultationTimeComponent.prototype.avgTimeSort = function (a, b) {
        var swapped1;
        do {
            swapped1 = false;
            for (var i = 0; i < a.length - 1; i++) {
                if (a[i] > a[i + 1]) {
                    var temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    var temp = b[i];
                    b[i] = b[i + 1];
                    b[i + 1] = temp;
                    swapped1 = true;
                }
            }
        } while (swapped1);
        var newDateArray1 = [];
        for (var i = 0; i < a.length; i++) {
            newDateArray1.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'));
        }
        this.lineChartLabels1 = newDateArray1;
    };
    DashboardConsultationTimeComponent.prototype.go = function () {
        var _this = this;
        this.activatedtab = 0;
        this.totalHours = 0;
        this.totalMin = 0;
        this.countMonday = 0;
        this.countTuesday = 0;
        this.countWednesday = 0;
        this.countThursday = 0;
        this.countFriday = 0;
        this.countSaturday = 0;
        this.countSunday = 0;
        this.avgConsTime = 0;
        var totalPatients = 0;
        var localDateArray = [];
        var dateArray = [];
        this.timeArray = [];
        this.avgTimeArray = [];
        this.avgCtuPercentage = 0;
        this.totalTimeUtilizedHours = 0;
        this.totalTimeUtilizedMin = 0;
        this.longestConsultationMin = 0;
        this.longestConsultationSec = 0;
        this.shortestConsultationMin = 0;
        this.shortestConsultationSec = 0;
        this.avgTimePerPatient = "";
        var object;
        object = {};
        object.start_date = this.fromDate1;
        object.end_date = this.toDate1;
        object.doctor_id = this.doctorData._id;
        if (new Date(this.toDate1).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        this.loading = true;
        this.userService.TimeAnalytics(object).subscribe(function (result) {
            console.log(result);
            if (result.response) {
                if (result.totalTimeInSeconds.length > 0) {
                    _this.totalTimeUtilizedHours = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) / 3600);
                    _this.totalTimeUtilizedMin = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) % 3600);
                    _this.totalTimeUtilizedMin = Math.floor(_this.totalTimeUtilizedMin / 60);
                }
                if (result.dataLongestConsultation.length > 0) {
                    _this.longestConsultationMin = Math.floor((result.dataLongestConsultation[0].totalSeconds) / 60);
                    _this.longestConsultationSec = Math.floor((result.dataLongestConsultation[0].totalSeconds) % 60);
                }
                if (result.dataShortestConsultation.length > 0) {
                    _this.shortestConsultationMin = Math.floor((result.dataShortestConsultation[0].totalSeconds) / 60);
                    _this.shortestConsultationSec = Math.floor((result.dataShortestConsultation[0].totalSeconds) % 60);
                }
                var avgTotalPatientSeconds = 0;
                var addTime = 0;
                var totalTimeInSeconds = 0;
                if (result.dataTotalPatientsDischarged.length > 0) {
                    for (var i = 0; i < result.dataTotalPatientsDischarged.length; i++) {
                        var totalPatientSeconds;
                        totalPatientSeconds = 0;
                        dateArray.push(_this.datePipe.transform(result.dataTotalPatientsDischarged[i].data[0].createAt, 'yyyy-MM-dd'));
                        for (var j = 0; j < result.dataTotalPatientsDischarged[i].data.length; j++) {
                            totalPatients++;
                            totalPatientSeconds = (result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)) / 3600;
                            totalTimeInSeconds += result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds);
                            addTime += result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds);
                        }
                        avgTotalPatientSeconds = (totalPatientSeconds / result.dataTotalPatientsDischarged[i].data.length) * 60;
                        _this.timeArray.push(totalPatientSeconds.toFixed(3));
                        _this.avgTimeArray.push(avgTotalPatientSeconds.toFixed(3));
                    }
                    ///////////// hours logic /////////////////////////////
                    var daysOfYear = [];
                    for (var d = new Date(_this.fromDate1); d <= new Date(_this.toDate1); d.setDate(d.getDate() + 1)) {
                        daysOfYear.push(new Date(d));
                    }
                    for (var i = 0; i < daysOfYear.length; i++) {
                        daysOfYear[i];
                        localDateArray.push(_this.datePipe.transform(daysOfYear[i], 'EEEE'));
                    }
                    for (var i = 0; i < localDateArray.length; i++) {
                        if (localDateArray[i] == "Monday") {
                            _this.countMonday++;
                        }
                        else if (localDateArray[i] == "Tuesday") {
                            _this.countTuesday++;
                        }
                        else if (localDateArray[i] == "Wednesday") {
                            _this.countWednesday++;
                        }
                        else if (localDateArray[i] == "Thursday") {
                            _this.countThursday++;
                        }
                        else if (localDateArray[i] == "Friday") {
                            _this.countFriday++;
                        }
                        else if (localDateArray[i] == "Saturday") {
                            _this.countSaturday++;
                        }
                        else if (localDateArray[i] == "Sunday") {
                            _this.countSunday++;
                        }
                    }
                    var total_diff = 0;
                    _this.avgConsTime = _this.doctorData.avgConsTime;
                    for (var j = 0; j < _this.doctorData.consultation_schedule.length; j++) {
                        var min_diff = 0;
                        var hour_diff = 0;
                        for (var k = 0; k < _this.doctorData.consultation_schedule[j].shifts.length; k++) {
                            min_diff += parseInt(_this.doctorData.consultation_schedule[j].shifts[k].toTime.minute) - parseInt(_this.doctorData.consultation_schedule[j].shifts[k].fromTime.minute);
                            hour_diff += parseInt(_this.doctorData.consultation_schedule[j].shifts[k].toTime.hour) - parseInt(_this.doctorData.consultation_schedule[j].shifts[k].fromTime.hour);
                            total_diff = min_diff + (hour_diff * 60);
                        }
                        if (_this.doctorData.consultation_schedule[j].Monday == true) {
                            _this.totalMin += (_this.countMonday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Tuesday == true) {
                            _this.totalMin += (_this.countTuesday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Wednesday == true) {
                            _this.totalMin += (_this.countWednesday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Thursday == true) {
                            _this.totalMin += (_this.countThursday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Friday == true) {
                            _this.totalMin += (_this.countFriday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Saturday == true) {
                            _this.totalMin += (_this.countSaturday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Sunday == true) {
                            _this.totalMin += (_this.countSunday * total_diff);
                        }
                    }
                    _this.totalHours = _this.totalMin / 60;
                    _this.totalHours = Math.trunc(_this.totalHours);
                    _this.totalMin = _this.totalMin % 60;
                    ///////////////////////////////////////////////////////
                }
                _this.avgCtuPercentage = (addTime * 100) / (_this.totalHours * 3600);
                _this.lineChartData = [{
                        data: _this.timeArray,
                        label: 'Total Hours'
                    },];
                _this.lineChartData1 = [{
                        data: _this.avgTimeArray,
                        label: 'Total Avg Min'
                    },];
                _this.lineChartLabels = dateArray;
                _this.lineChartLabels1 = dateArray;
                var min = parseInt(_this.getData(_this.getData(totalTimeInSeconds / totalPatients) / 60));
                var sec = parseInt(_this.getData(_this.getData(totalTimeInSeconds / totalPatients) % 60));
                _this.avgTimePerPatient = min + ":" + sec;
                var newAvgTimeArray = [];
                for (var i = 0; i < dateArray.length; i++) {
                    newAvgTimeArray.push(dateArray[i]);
                }
                ///////////////////////////// Date Sort Logic //////////////////////
                _this.timeSort(dateArray, _this.timeArray);
                _this.avgTimeSort(newAvgTimeArray, _this.avgTimeArray);
                ///////////////////////////// End sort Logic ////////////////////////
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardConsultationTimeComponent.prototype.getHelpText = function () {
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
    DashboardConsultationTimeComponent.prototype.getData = function (data) {
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
    DashboardConsultationTimeComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    // events
    DashboardConsultationTimeComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardConsultationTimeComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardConsultationTimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-consultation-time',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-time/dashboard-consultation-time.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-time/dashboard-consultation-time.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], DashboardConsultationTimeComponent);
    return DashboardConsultationTimeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-consultation-time/dashboard-consultation-time.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardConsultationTimeModule", function() { return DashboardConsultationTimeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_consultation_time_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-time/dashboard-consultation-time-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_consultation_time_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-consultation-time/dashboard-consultation-time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardConsultationTimeModule = /** @class */ (function () {
    function DashboardConsultationTimeModule() {
    }
    DashboardConsultationTimeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_consultation_time_routing_module__["a" /* DashboardConsultationTimeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_tooltip__["a" /* MatTooltipModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__dashboard_consultation_time_component__["a" /* DashboardConsultationTimeComponent */]]
        })
    ], DashboardConsultationTimeModule);
    return DashboardConsultationTimeModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-consultation-time.module.chunk.js.map