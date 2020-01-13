webpackJsonp(["dashboard-progress-time.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-time/dashboard-progress-time-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardProgressTimeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_progress_time_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-time/dashboard-progress-time.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_progress_time_component__["a" /* DashboardProgressTimeComponent */]
    }
];
var DashboardProgressTimeRoutingModule = /** @class */ (function () {
    function DashboardProgressTimeRoutingModule() {
    }
    DashboardProgressTimeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardProgressTimeRoutingModule);
    return DashboardProgressTimeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-time/dashboard-progress-time.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hme-icn{\nfont-size: 40px;\ncolor: #000;\npadding-top: 1px;\npadding-left: 10px\n}\n.dashboard-header-two{\nmargin:2px 0px!important;\n}\n.cus-content-wrapper{\npadding-top: 0px;\n}\n.progress{\nheight:50px!important;\nmargin-bottom: 10px;\n}\n.consult-time .progress-bar {\nline-height:2.2px!important;\nfont-size: 20px!important;\n}\n.progress-bar.green{\nbackground-color: #72d447;\n}\n.progress-bar.red{\nbackground-color: rgb(255,0,0);\n}\n.progress-bar.yellow{\nbackground-color: rgb(255,192,0);\n}\n.progress-bar.blue{\nbackground-color: #00b0f0;\n}\n.box{\ndisplay: inline-block;\nwidth: 10px;\nbackground-color:grey;\nheight: 10px;\n}\n.box-1{\nbackground-color: rgb(255,0,0);\n}\n.box-2{\nbackground-color: rgb(255,192,0);\n}\n.box-3{\nbackground-color: #00b0f0;\n}\n.box-4{\nbackground-color: rgb(146,208,80);\n}\n.consult-time{\npadding-left:10px;\n/*border-left: 1px solid #dcdcdc; */\n}\n.wrap-tbl{\npadding-top:10px;\nborder-top: 1px solid #dcdcdc;\n}\n.chart-box{\nwidth: initial;\nfloat: none;\n}\n.bg-h4{\ncolor:rgb(58,176,12);\nmargin-top: 0px;\n}\n.cus-sidebar-wrapper .cus-sidebar {\nheight:initial;\n}\n.mg-top{\nmargin-bottom: 0px;\n}\n.btn-custm{\ndisplay: block;\nmargin:15px auto;\n-webkit-box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.75);\nbox-shadow: 0px 4px 5px -2px rgba(0,0,0,0.75);\nborder-radius: 10px;\nwidth:93%;\nfont-size: 18px;\nbackground: #bcd3e5; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\nbackground: -webkit-gradient(linear, left top, left bottom, from(#bcd3e5),to(#8cb8ff));\nbackground: linear-gradient(to bottom, #bcd3e5 0%,#8cb8ff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bcd3e5', endColorstr='#8cb8ff',GradientType=0 ); /* IE6-9 */\nword-spacing: 6px;\ncursor: initial;\n}\n.btn-wh{\nbackground: #a0fdb7!important;\n}\n.cstm-font{\nfont-size: 16px;\ncolor: #1565C0;\n}\n.cstm-font-1{\nfont-size: 16px;\n}\n.side-bar-cstm{\nz-index: 99;\n}\n.res-tab-2{\nmax-height: 200px;\n}\n.cstm-ul-new li a{\nbackground-color:transparent;\ncolor:#000;\npadding:10px 104px;\ncursor: pointer;\nborder-radius: 0px;\nborder-bottom: 2px solid transparent;\n}\n.cstm-ul-new li.active a{\nbackground-color: #e0e0e0;\ncolor: #000;\nborder-bottom: 2px solid #00b0f0;\n}\n.tab-new{\nmin-height: 450px;\nmax-height: 450px;\npadding: 0px 8px;\nborder-left: 1px solid #dcdcdc;\nborder-right: 1px solid #dcdcdc;\noverflow-x: hidden;\n}\n.clr-blue{\ncolor: #00b0f0;\nfont-weight: bold;\n}\n.cstm-mg{\nmargin-top: 5px;\n}\n.btn-go{\nbackground-color: transparent;\nborder: 1px solid #002160;\nmargin-bottom: 5px;\nmin-width: 62%;\n}\n.btn-go:hover{\n-webkit-transition: 300ms;\ntransition: 300ms;\nbackground: #98C74F;\nborder-color: #98C74F;\ncolor: #fff;\n}\n/*.cus-content{\nz-index:1;\n}*/\n.li-cstm a{\ntext-align: center!important;\nbackground: #000!important;\ncolor: #fff!important;\nfont-size: 16px!important;\nfont-weight: inherit!important;\npadding: 6px!important;\n}\n/*.tab-new-cstm tr td{\nfont-size: 10px;\n}*/\n.brder-cstm{\npadding-bottom: 1px;\nmargin-bottom: 6px;\nborder-bottom: 1px solid #a7a7a7;\nposition: relative;\n}\n.brder-cstm::after{\ncontent: \"\";\nposition: absolute;\nheight: 6px;\nwidth: 12px;\nbackground-color: #ffffff;\ntop: 41px;\nright: -3px;\n\n}\n.cus-sidebar ul{\nborder:1px solid #a7a7a7;\n}\n.brdr-left{\nborder-left: 1px solid #bfc4cb;\n}\n.brdr-btm{\nborder-bottom: 1px solid #bfc4cb;\n}\n.blank-ftr{\nheight:35px;\nwidth:100%;\nbackground-color:#00b0f0;\nfloat:left;\nposition:fixed;\nbottom: 0;\nz-index: 99;\n}\ncanvas{\nheight:245px!important;\n}\n.cus-content-wrapper{\npadding-bottom: 0px!important;\n}\n.cus-content-wrapper .cus-content{\nmargin-left: 0px!important\n}\n.progress{\nborder-radius:0px;\nborder: 1.5px solid #ababab;\n/*position: relative;\noverflow: hidden;*/\n/*border-bottom: 1.5px solid #ababab;\nborder-left: 1.5px solid #ababab;*/\nbackground-color: #fff;\n}\n.main-wr{\nposition: relative;\noverflow: hidden;\n}\n.progress-outer{\nborder:1px solid #000;\npadding: 2px 0px;\nheight: 56px;\n\n}\n.ani-bar {\n   width:100%;\n   height: 46px;\n   position: absolute;\n   top:0;\n   left:-72px;\n/*\nbackground: -webkit-linear-gradient(left,transparent 12%,#ffffff 35%,transparent 55%)no-repeat;*/\nbackground: -webkit-linear-gradient(left, transparent 4%, #ffffff 40%, transparent 82%) no-repeat;\n   -webkit-background-size: 50% 100%;\n   -webkit-animation-name: moving-gradient;\n   -webkit-animation-duration: 3s;\n   -webkit-animation-iteration-count: infinite;\n   -webkit-animation-timing-function: linear;\n   opacity: 0.6;\n}\n.ani-bar { -webkit-animation-duration:3s; }\n@-webkit-keyframes moving-gradient {\n   0% { left:-120px;}\n   100% { left: 100%; }\n}\nh4{\nmargin-top: -2px;\nmargin-bottom: 5px;\nfont-size: 16px;\n}\n.pad-marg{\npadding-right: 0px!important;;\nmargin: 0px!important;;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-time/dashboard-progress-time.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"analytics-sec\">\n\t\n\t<div class=\"ipd-deatil-sec\">\n\t<!-- \t<div class=\"md-tab\">\n\t      \n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t          \t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-consultation-prescription\"> Consultation </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-pharmacy-detail\"> Clinic Services </a></li>\n\t      \t</ul>\n\t      </div> -->\n\n\t      <div class=\"inner-tab\">\n\t      \t<!-- Nav tabs -->\n\t      \t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t      \t\t<li role=\"presentation\" ><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress\"> Patient </a></li>\n\t      \t\t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-time\"> Time</a></li>\n\t      \t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-prescription\">Prescription</a></li>\n\t\t\t\t<!--li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-pharmacy\"> Pharmacy</a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-diagnosis\"> Diagnostics </a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-ipd\"> IPD </a></li-->\n\t          \t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-pharmacy\" *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy==true\"> Pharmacy</a></li>\n\t          \t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-diagnosis\" *ngIf=\"doctorData.clinic_services.Clinic_Diagnostics==true\"> Diagnostics </a></li>\n\t          \t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-ipd\" *ngIf=\"doctorData.clinic_services.Clinic_IPD==true\"> IPD </a></li>\n\t          \t</ul>\n\t          </div>\n\n\t          <div class=\"ipd-body\">\n\t    \t<!-- <div class=\"cus-sidebar-wrapper side-bar-cstm\">\n\t    \t\t<div class=\"cus-sidebar\">\n\t    \t\t\t<ul> \n\t    \t\t\t\t<li>\n\t    \t\t\t\t\t<div class=\"\">\n\t    \t\t\t\t\t\t<div class=\"col-lg-3\">\n\t    \t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>From</b></h4>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t<div class=\"col-lg-9\">\n\t    \t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t    \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"fromDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t    \t\t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t</li>\n\t    \t\t\t\t<li>\n\t    \t\t\t\t\t<div class=\"\">\n\t    \t\t\t\t\t\t<div class=\"col-lg-3\">\n\t    \t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>To</b></h4>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t<div class=\"col-lg-9\">\n\t    \t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t    \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"toDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t    \t\t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t</li>\n\t    \t\t\t\t<li class=\"text-right brder-cstm\">\n\t    \t\t\t\t\t<div class=\"col-lg-12 text-center\">\n\t    \t\t\t\t\t\t<button class=\"btn btn-go\" (click)=\"go()\">Go</button>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t</li>\n\t    \t\t\t\t\n\t    \t\t\t\t<li class=\"li-cstm\"> <a href=\"javascript:void(0);\"> For Past</a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(1)}}\" (click)=\"activatetab(1)\"> <a href=\"javascript:void(0);\"> 1 Week &nbsp;<small *ngIf=\"activatedtab==1\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(2)}}\" (click)=\"activatetab(2)\"> <a href=\"javascript:void(0);\"> 2 Weeks &nbsp;<small *ngIf=\"activatedtab==2\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small>  </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month &nbsp;<small *ngIf=\"activatedtab==3\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month &nbsp;<small *ngIf=\"activatedtab==4\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month &nbsp;<small *ngIf=\"activatedtab==5\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year &nbsp;<small *ngIf=\"activatedtab==6\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> All </a> </li>\n\t    \t\t\t</ul>\n\t    \t\t</div>\n\t    \t</div>\n\t    -->\n\t    <div class=\"cus-content-wrapper\" style=\"position: relative;\">\n\t    \t<div class=\"cus-content\">\n\t    \t\t<div class=\"\">\n\t    \t\t\t<div class=\"consult-time\">\n\t    \t\t\t\t<div class=\"col-lg-12\">\n\t    \t\t\t\t\t<div class=\"text-center\">\n\t    \t\t\t\t\t\t<h2> Consultation Time Utilization  \n\t    \t\t\t\t\t\t</h2>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t</div>\n\t    \t\t\t\t<div class=\"col-lg-4\">\n\n\t    \t\t\t\t\t<h3 style=\"line-height: 1.3;font-family: 'Josefin Sans', sans-serif;\">“CTU is the fraction of your total clinic time for which you are actually engaged in consultation process. Higher the CTU busier you are. “</h3>\n\n\t    \t\t\t\t</div>\n\t    \t\t\t\t<div class=\"col-lg-8\" style=\"padding-top: 35px;\">\n\t    \t\t\t\t\t<div class=\"\">\n\t    \t\t\t\t\t\t<div class=\"progress\">\n\n\t    \t\t\t\t\t\t\t<div class=\"progress-bar {{classColor}} main-wr\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"value\" style=\"width: 50%;line-height:2.2!important;font-size: 20px!important;\">\n\t    \t\t\t\t\t\t\t\t<div class=\"ani-bar\">\n\n\t    \t\t\t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t\t\t<span class=\"\">{{value}}%</span>\n\t    \t\t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t</div>\n\n\t    \t\t\t\t\t</div>\n\n\t    \t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6 text-left\">\n\t\t\t\t\t\t\t\t0%\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-6 text-right\">\n\t\t\t\t\t\t\t\t100%\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\" style=\"padding-bottom: 21px;\">\n\t\t\t\t\t\t\t<div class=\"form-group col-md-3 col-sm-3 col-xs-12 pad-marg\">\n\t\t\t\t\t\t\t\t<span class=\"box box-1\"></span>\n\t\t\t\t\t\t\t\t<label>< 30%, Poor </label>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-3 col-sm-3 col-xs-12  pad-marg\">\n\t\t\t\t\t\t\t\t<span class=\"box box-2\"></span>\n\t\t\t\t\t\t\t\t<label>30 - 50%, Good</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-3 col-sm-3 col-xs-12  pad-marg\">\n\t\t\t\t\t\t\t\t<span class=\"box box-3\"></span>\n\t\t\t\t\t\t\t\t<label>50-70%, Very Good</label>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-3 col-sm-3 col-xs-12 pad-marg\">\n\t\t\t\t\t\t\t\t<span class=\"box box-4\"></span>\n\t\t\t\t\t\t\t\t<label>>70%, Excellent</label>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t    \t\t\t\t</div>\n\n\t    \t\t\t\t<div class=\"row\">\n\t    \t\t\t\t\t<div class=\"col-lg-5  col-lg-offset-1 text-center\">\n\t    \t\t\t\t\t\t<button class=\"btn btn-custm\"><b>Total Consultation Time Available : <span class=\"cstm-font\">{{totalHours}} Hrs {{totalMin}} Min</span> </b></button>\n\t    \t\t\t\t\t\t<button class=\"btn btn-custm\"><b>Total Consultation Tome Utilised : <span class=\"cstm-font\">{{totalTimeUtilizedHours}} Hrs {{totalTimeUtilizedMin}} Min</span></b> </button>\n\t    \t\t\t\t\t\t<!-- <button class=\"btn btn-custm btn-wh\"><b> <span class=\"cstm-font-1\">Avg. CTU <br><span class=\"cstm-font\">{{getData(avgCtuPercentage)}} %</span></span></b></button> -->\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t\t<div class=\"col-lg-5 text-center\">\n\t    \t\t\t\t\t\t<button class=\"btn btn-custm\"><b>Longest consultation : <span class=\"cstm-font\">{{longestConsultationMin}} Min {{longestConsultationSec}} Sec</span></b> </button>\n\t    \t\t\t\t\t\t<button class=\"btn btn-custm\"><b>Shortest consultation : <span class=\"cstm-font\">{{shortestConsultationMin}} Min {{shortestConsultationSec}} Sec</span></b> </button>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 text-center\">\n\t    \t\t\t\t\t\t<button class=\"btn btn-custm btn-wh\"><b> <span class=\"cstm-font-1\">Avg. time per patient <br><span class=\"cstm-font\">{{avgTimePerPatient}} </span></span></b><span> minutes</span></button>\n\t    \t\t\t\t\t</div>\n\t    \t\t\t\t</div>\n\n\t    \t\t\t</div>\n\t    \t\t</div>\n\t    \t</div>\n\t    \t<div class=\"row\">\n\t    \t\t<div class=\"blank-ftr\">\t    \t\t\t\n\t    \t\t</div>\n\t    \t</div>\n\t    </div>\n\n\t</div>\n\n</div>\n\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal fade\" id=\"undertaking-modal\">\n\t<div class=\"modal-dialog modal-sm\">\n\t\t<div class=\"modal-content\">\n\n\t\t\t<!-- Modal Header -->\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h4 class=\"modal-title\">Consultation Time Utilization</h4>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- Modal body -->\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t{{helpText[8]?.text}}\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- Modal footer -->\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-time/dashboard-progress-time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardProgressTimeComponent; });
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




var DashboardProgressTimeComponent = /** @class */ (function () {
    function DashboardProgressTimeComponent(userService, datePipe, toastr) {
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
        this.color = 'accent';
        this.value = 0;
        this.classColor = '';
        this.helpText = [];
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
    DashboardProgressTimeComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        this.activatedtab = 0;
        this.activatetab(1);
        this.getHelpText();
    };
    DashboardProgressTimeComponent.prototype.getHelpText = function () {
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
    // showUndertakingInfo(){
    //     $('#undertaking-modal').modal('show');
    // }
    DashboardProgressTimeComponent.prototype.activatetab = function (ii) {
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
        this.doctorTotalWorkingMin = 0;
        this.activatedtab = ii;
        var object;
        object = {};
        var date = new Date();
        object.doctor_id = this.doctorData._id;
        object.end_date = new Date();
        if (ii == 1) {
            object.start_date = date;
        }
        // else if (ii == 1) {
        //     object.start_date = new Date(date.setDate(date.getDate() - 6))
        // } else if (ii == 2) {
        //     object.start_date = new Date(date.setDate(date.getDate() - 13))
        // } else if (ii == 3) {
        //     object.start_date = new Date(date.setMonth(date.getMonth() - 1))
        // } else if (ii == 4) {
        //     object.start_date = new Date(date.setMonth(date.getMonth() - 3))
        // } else if (ii == 5) {
        //     object.start_date = new Date(date.setMonth(date.getMonth() - 6))
        // } else if (ii == 6) {
        //     object.start_date = new Date(date.setFullYear(date.getFullYear() - 1))
        // } else if (ii == 7) {
        //     object.start_date = new Date()
        //     object.maximum = true
        // }
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
                    _this.doctorTotalWorkingMin = _this.totalMin;
                    _this.totalHours = _this.totalMin / 60;
                    _this.totalHours = Math.trunc(_this.totalHours);
                    _this.totalMin = _this.totalMin % 60;
                    console.log(_this.totalTimeUtilizedMin, _this.doctorTotalWorkingMin);
                    _this.value = Math.ceil(_this.getData((_this.totalTimeUtilizedMin / _this.doctorTotalWorkingMin) * 100));
                    if (_this.value < 30) {
                        _this.classColor = 'red';
                    }
                    else if (_this.value < 50) {
                        _this.classColor = 'yellow';
                    }
                    else if (_this.value < 70) {
                        _this.classColor = 'blue';
                    }
                    else {
                        _this.classColor = 'green';
                    }
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
                console.log(_this.totalMin);
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardProgressTimeComponent.prototype.timeSort = function (a, b) {
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
    DashboardProgressTimeComponent.prototype.avgTimeSort = function (a, b) {
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
    DashboardProgressTimeComponent.prototype.go = function () {
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
    DashboardProgressTimeComponent.prototype.getData = function (data) {
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
    DashboardProgressTimeComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    // events
    DashboardProgressTimeComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardProgressTimeComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardProgressTimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-progress-time',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-time/dashboard-progress-time.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-time/dashboard-progress-time.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], DashboardProgressTimeComponent);
    return DashboardProgressTimeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-time/dashboard-progress-time.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardProgressTimeModule", function() { return DashboardProgressTimeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_progress_time_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-time/dashboard-progress-time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_progress_time_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-time/dashboard-progress-time-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_progress_bar__ = __webpack_require__("../../../material/esm5/progress-bar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DashboardProgressTimeModule = /** @class */ (function () {
    function DashboardProgressTimeModule() {
    }
    DashboardProgressTimeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__dashboard_progress_time_routing_module__["a" /* DashboardProgressTimeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_progress_bar__["a" /* MatProgressBarModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_progress_time_component__["a" /* DashboardProgressTimeComponent */]]
        })
    ], DashboardProgressTimeModule);
    return DashboardProgressTimeModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-progress-time.module.chunk.js.map