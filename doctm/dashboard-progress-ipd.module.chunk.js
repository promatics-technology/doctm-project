webpackJsonp(["dashboard-progress-ipd.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-ipd/dashboard-progress-ipd-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardProgressIpdRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_progress_ipd_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-ipd/dashboard-progress-ipd.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_progress_ipd_component__["a" /* DashboardProgressIpdComponent */]
    }
];
var DashboardProgressIpdRoutingModule = /** @class */ (function () {
    function DashboardProgressIpdRoutingModule() {
    }
    DashboardProgressIpdRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardProgressIpdRoutingModule);
    return DashboardProgressIpdRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-ipd/dashboard-progress-ipd.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table-cstm.cus-content-wrapper{\n\tpadding-top: 0px;\n\tpadding-bottom: 0px;\n}\n.hding > h3{\n\tmargin: 0px;\n\tpadding:15px 0px;\n\tbackground-color: #d9e0dd; \n}\n.hding  h5.btm{\n\tmargin: 0px;\n\tpadding:15px 0px;\n\tbackground-color: #d9e0dd; \n}\n.cstm-tbl{\n\twidth: 100%;\n}\n.clr-blue{\n    color: #00b0f0;\n}\n.clr-vlt{\n    color: #5c62af;\n}\n.tb-1{\n\tmargin-top:15px;\n}\n.tb-1 tr td{\n\tpadding:2px 8px;\n\tvertical-align: middle; \n}\n.cstm-tbl tr{\n\theight:40px;\n}\n.footer-cstm-an{\n\tposition: fixed;\n    float: left;\n    width: 100%;\n    bottom:0px;\n    background:transparent;\n    color:#000;\n    z-index: 99;\n    padding-top: 8px;\n    border-top: 1px solid #aba9a9;\n}\n.mt-table h3{\n\tmargin-top: 0px;\n}\n.cstm-tr{\n\tbackground-color:#92d050;\n\tcolor:#fff;\n\ttext-align: center;\n}\n.cstm-tr-2{\n\tbackground-color:#c5d8f1;\n}\n.cstm-tr-2 td{\n\tborder-right:1px solid #bbb; \n}\n.cstm-tr-2 td:last-child {\n border-right: none;\n}\n.cstm-tr-3{\n\tborder-bottom:1px solid #bbb; \n}\n.cstm-tr-3 td{\n\tborder-right:1px solid #bbb; \n}\n.cstm-tr-3 td:last-child {\n border-right: none;\n}\n.color-red {\n    color: #ff0000;\n    -webkit-transform: translateY(-8px);\n            transform: translateY(-8px);\n}\n.cstm-tr-4{\n\tbackground-color: #f2dada;\n}\n.cstm-mg{\n\tmargin-top: 5px;\n}\n.btn-go{\n\tbackground-color: transparent;\n    border: 1px solid #002160;\n    margin-bottom: 5px;\n    min-width: 62%;\n}\n.btn-go:hover{\n    -webkit-transition: 300ms;\n    transition: 300ms;\n    background: #98C74F;\n    border-color: #98C74F;\n    color: #fff;\n}\n.li-cstm a{\n\ttext-align: center!important;\n    background: #000!important;\n    color: #fff!important;\n    font-size: 16px!important;\n    font-weight: inherit!important;\n    padding: 6px!important;\n}\n.cus-sidebar{\n\theight: inherit!important;\n}\n/*karam @ 2019*/\n.side-bar-cstm{\n\tz-index: 99;\n}\n.res-tab-2{\n\tmax-height: 225px;\n}\n.cstm-ul-new li{\n\twidth:20%;\n}\n.cstm-ul-new li a{\n\tbackground-color:transparent;\n\tcolor:#000;\n\tpadding:10px;\n\tcursor: pointer;\n\tborder-radius: 0px;\n\tborder-bottom: 2px solid transparent; \n\ttext-align: center;\n}\n.cstm-ul-new li.active a{\n\tbackground-color: #e0e0e0;\n    color: #000;\n\tborder-bottom: 2px solid #00b0f0;\n}\n.tab-new{\n\tmin-height: 450px;\n    max-height: 450px;\n    padding: 0px 8px;\n    border-left: 1px solid #dcdcdc;\n    border-right: 1px solid #dcdcdc;\n    overflow-x: hidden;\n}\n.clr-blue{\n    color: #00b0f0;\n    font-weight: bold;\n}\n/*karam@30-jan-2019*/\n/*.tab-new-cstm tr td{\n\tfont-size: 10px;\n}*/\n.brder-cstm{\n\tpadding-bottom: 1px;\n    margin-bottom: 6px;\n    border-bottom: 1px solid #a7a7a7;\n    position: relative;\n}\n.brder-cstm::after{\n\tcontent: \"\";\n    position: absolute;\n    height: 6px;\n    width: 12px;\n    background-color: #ffffff;\n    top: 41px;\n    right: -3px;\n\t \n}\n.cus-sidebar ul{\n\tborder:1px solid #a7a7a7;\n}\n.mg-0{\n\tmargin-top: 0px;\n}\n.mg-bt{\n\tmargin-bottom:2px; \n}\n.txt-thm{\n\tcolor: rgb(0,32,96);\n}\n.txt-thm-1{\n\tcolor: rgb(0,112,192);\n}\n.foot-2{\n\tborder-bottom:1px solid #a7a7a7;\n\tword-spacing: 14px;\n}\n.hdr-2{\n\tpadding-bottom: 8px;\n\tborder-bottom:1px solid #a7a7a7;\n}\n.brdr-lft{\n\tmargin-left:-5px;\n\tborder-left:1px solid #a7a7a7; \n}\n.evn{\n\tbackground-color:#eff3ef;\n}\n.cus-content-wrapper .cus-content{\n\tmargin-left: 0px!important\n}\n.green {\n    color: green;\n}\n.red {\n    color: red;\n}\n.yellow {\n    color: #d28d07;\n}\n.blue {\n    color: blue;\n}\n.grey {\n    color: #ddd;\n}\n.beds-panel ul>li>a img.img-responsive {\n    width: 70px;\n    display: inline-block;\n    margin-bottom: 10px;\n}\n.list-bedul {\n    float: left;\n    padding: 0;\n    width: 100%;\n    margin: 30px 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -moz-flex;\n    display: -o-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    list-style-type: none;\n}\n.list-bedul>li {\n    width: 150px;\n    display: inline-block;\n    padding: 0;\n    font-size: 16px;\n    font-weight: 500;\n    text-align: center;\n    letter-spacing: 1.5px;\n    text-transform: uppercase;\n    line-height: 2.3;\n}\n.list-bedul>li>span.bed-no {\n    right: 0px;\n    float: none;\n    position: initial;\n    top: 15px;\n}\n.list-bedul>li.success {\n    color: #fff;\n    background-color: #00da5f;\n}\n.list-bedul>li.danger {\n    color: #fff;\n    background-color: #f32121;\n}\n.list-bedul>li.blue {\n    color: #fff;\n    background-color: #01b0f0;\n}\n.list-bedul>li>span input.form-control {\n    width: 38px;\n    color: #fff;\n    background: transparent;\n    border: 0;\n    display: inline-block;\n    vertical-align: middle;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    padding: 4px 4px;\n    text-align: right;\n}\n.list-bedul>li>span i.fa-pencil {\n    vertical-align: middle;\n    cursor: pointer;\n}\n.beds-panel {\n    width: 100%;\n    float: left;\n}\n.beds-panel ul {\n    width: 100%;\n    float: left;\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -moz-flex;\n    display: -o-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.beds-panel ul>li {\n    /*width: 15%;*/\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 16.69%;\n            flex: 1 1 16.69%;\n    float: left;\n    max-width: 20%;\n    margin-bottom: 15px;\n    padding: 5px;\n}\n.beds-panel ul>li>a {\n    display: block;\n    text-align: center;\n    padding: 10px 5px;\n    background-color: #fff;\n    border: 1px solid #01b0f0;\n    text-transform: uppercase;\n    color: #333;\n    font-weight: 500;\n    -webkit-transition: 0.3s all ease 0s;\n    transition: 0.3s all ease 0s;\n    height: 150px;\n}\n.beds-panel ul>li>a:focus {\n    text-decoration: none;\n}\n.beds-panel ul>li>a:hover {\n    text-decoration: none;\n    -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, .20);\n            box-shadow: 0 0 20px 0 rgba(0, 0, 0, .20);\n}\n.beds-panel ul>li>a img.img-responsive {\n    width: 70px;\n    display: inline-block;\n    margin-bottom: 10px;\n}\n.box-cstm{\n    padding:15px 20px;\n    margin-bottom: 15px;\n    background-color:#f2f2f2;  \n    -webkit-box-shadow: 3px 2px 5px 1px rgba(0,0,0,0.51);\n    box-shadow: 3px 2px 5px 1px rgba(0,0,0,0.51); \n}\n.blue-txt{\n    color:#2F497C;\n}\n.box-cstm h2{\n    margin-top:10px;\n}\n.cstm-tab-22{\n    min-height: 322px;\n    max-height: 150px;\n    overflow-y: scroll;\n    overflow-x: hidden;\n}\n.table-cstm tr td,\n.table-cstm tr th{\n        padding: 15px 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-ipd/dashboard-progress-ipd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"analytics-sec\">\n\t\n\t<div class=\"ipd-deatil-sec\">\n\t\t<div class=\"inner-tab\">\n\t\t\t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress\"> Patient </a></li>\n\t\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-time\"> Time</a></li>\n\t\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-prescription\">Prescription</a></li>\n\t\t\t\t<!--li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-pharmacy\"> Pharmacy</a></li>\n\t\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-diagnosis\"> Diagnostics </a></li>\n\t\t\t\t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-ipd\"> IPD </a></li-->\n\t\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-pharmacy\" *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy==true\"> Pharmacy</a></li>\n\t          \t<li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-diagnosis\" *ngIf=\"doctorData.clinic_services.Clinic_Diagnostics==true\"> Diagnostics </a></li>\n\t          \t<li role=\"presentation\" class=\"active\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/dashboard-progress-ipd\" *ngIf=\"doctorData.clinic_services.Clinic_IPD==true\"  > IPD </a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\n\t\t<div class=\"ipd-body\">\n\t\t\t<div class=\"cus-content-wrapper\">\n\t\t\t\t<div class=\"cus-content\">\n\t\t\t\t\t<div class=\"row brdr\">\n\t\t\t\t\t\t<div class=\"col-lg-5 col-lg-offset-1 text-center\">\n\t\t\t\t\t\t\t<div class=\"box-cstm\">\n\t\t\t\t\t\t\t\t<h2 class=\"blue-txt\">Occupancy Status ({{newDate | date:'dd/MM/yyyy'}})</h2>\n\t\t\t\t\t\t\t<p>TOTAL BEDS : <b>{{getData(total_general_beds+total_private_beds+total_semi_private_beds)}} | </b> OCCUPIED : <b>{{getData((total_general_beds+total_private_beds+total_semi_private_beds)-(genLength+privateLen +semiprivateLen))}} | </b> VACANT : <b>{{getData(genLength+privateLen +semiprivateLen)}}</b></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-5 text-center\">\n\t\t\t\t\t\t\t<div class=\"box-cstm\">\n\t\t\t\t\t\t\t<h2 class=\"blue-txt\">Collection</h2>\n\t\t\t\t\t\t\t<p>TOTAL -<span class=\"blue-txt\"> <b>Rs. {{totalIpdAmount}} |</b></span> ADVANCE - <span class=\"blue-txt\"><b>Rs. {{totalAdvanceAmount}}</b></span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<ul class=\"nav nav-tabs cstm-ul-new\">\n\t\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#home-cstm\" (click)=\"getDoctorId(0)\">IPD Aggregate ({{dataIpdPatient?.length}})</a></li>\n\t\t\t\t<li *ngFor=\"let doctor of dataDoctors\"><a data-toggle=\"tab\" href=\"#menu1-cstm\" (click)=\"getDoctorId(getDoctorFirstName(doctor._id))\">Dr. {{getDoctorFirstName(doctor?.first_name)}} ({{doctor?.patients}})</a></li>\n\t\t\t</ul>\n\t\t\t<div class=\"tab-content cstm-tab-22\" *ngIf=\"adminDoctor\">\n\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane active\" id=\"total\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t<!-- <h4 class=\"text-center\">GENERAL</h4> -->\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"beds-panel\">\n\t\t\t\t\t\t\t\t\t<ul *ngIf=\"dataIpdPatient.length > 0\">\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let patient of dataIpdPatient;let i = index;\">\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openPatientModal(patient.vacant,patient.bed_number,'General Bed',patient)\" class=\"{{getPatientListClassBorder(patient)}}\" data-dismiss=\"modal\" data-toggle=\"modal\" href=\"#javascript:void(0)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tG-{{patient.bed_number}}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"{{getImgPatient(patient)}}\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!patient.vacant\" class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{patient.patientName}}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!patient.vacant\" class=\"grey\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tDr. {{patient.consultDoc.first_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div *ngIf=\"adminDoctor.clinic_services.semi_private_beds && adminDoctor.clinic_services.semi_private_beds>0\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<h4 class=\"text-center\">SEMI-PRIVATE</h4>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"beds-panel\">\n\t\t\t\t\t\t\t\t\t<ul *ngIf=\"semiPatients.length > 0\">\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let patient of semiPatients;let i = index;\">\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openPatientModal(patient.vacant,patient.bed_number,'Semi Private Bed',patient)\" class=\"{{getPatientListClassBorder(patient)}}\" data-dismiss=\"modal\" data-toggle=\"modal\" href=\"#javascript:void(0)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tSP-{{patient.bed_number}}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"{{getImgPatient(patient)}}\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!patient.vacant\" class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{patient.patientName}}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!patient.vacant\" class=\"grey\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tDr. {{patient.consultDoc.first_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"adminDoctor.clinic_services.private_beds && adminDoctor.clinic_services.private_beds>0\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<h4 class=\"text-center\">PRIVATE</h4>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"beds-panel\" >\n\t\t\t\t\t\t\t\t\t<ul *ngIf=\"privatePatients.length > 0\">\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let patient of privatePatients;let i = index;\">\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openPatientModal(patient.vacant,patient.bed_number,'Private Bed',patient)\" class=\"{{getPatientListClassBorder(patient)}}\" data-dismiss=\"modal\" data-toggle=\"modal\" href=\"#javascript:void(0)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tP-{{patient.bed_number}}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"{{getImgPatient(patient)}}\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!patient.vacant\" class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{patient.patientName}}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!patient.vacant\" class=\"grey\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tDr. {{patient.consultDoc.first_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"general\" >\n\t\t\t\t\t<ul class=\"list-bedul\">\n\t\t\t\t\t\t<li class=\"success\">\n\t\t\t\t\t\t\tVacant: <span class=\"bed-no\" >{{genLength}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"danger\">\n\t\t\t\t\t\t\tOccupied: <span class=\"bed-no\"> {{total_general_beds-genLength}} </span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"beds-panel\">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let patient of generalPatients;let i = index;\">\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"openPatientModal(patient.vacant,patient.bed_number,'General Bed',patient)\" class=\"{{getPatientListClassBorder(patient)}}\" data-dismiss=\"modal\" data-toggle=\"modal\" href=\"#javascript:void(0)\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t\t\t\t\tG-{{patient.bed_number}}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"{{getImgPatient(patient)}}\"/>\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!patient.vacant\" class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{patient.patientName}}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!patient.vacant\" class=\"grey\">\n\t\t\t\t\t\t\t\t\t\t\t\tDr. {{patient.consultDoc.first_name}}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"semiprivate\">  \n\t\t\t\t\t<ul class=\"list-bedul\">\n\t\t\t\t\t\t<li class=\"success\">\n\t\t\t\t\t\t\tVacant: <span class=\"bed-no\"> {{semiprivateLen}} </span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"danger\">\n\t\t\t\t\t\t\tOccupied: <span class=\"bed-no\"> {{total_semi_private_beds-semiprivateLen}} </span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"beds-panel\">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let patient of semiPatients;let i = index;\">\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"openPatientModal(patient.vacant,patient.bed_number,'Semi Private Bed',patient)\"class=\"{{getPatientListClassBorder(patient)}}\" data-dismiss=\"modal\" data-toggle=\"modal\" href=\"#javascript:void(0)\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t\t\t\t\tSP-{{patient.bed_number}}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"{{getImgPatient(patient)}}\"/>\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!patient.vacant\" class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{patient.patientName}}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!patient.vacant\" class=\"grey\">\n\t\t\t\t\t\t\t\t\t\t\t\tDr. {{patient.consultDoc.first_name}}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\t\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"private\">\n\t\t\t\t\t<ul class=\"list-bedul\">\n\t\t\t\t\t\t<li class=\"success\">\n\t\t\t\t\t\t\tVacant: <span class=\"bed-no\">  {{privateLen}} </span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"danger\">\n\t\t\t\t\t\t\tOccupied: <span class=\"bed-no\"> {{total_private_beds-privateLen}} </span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"beds-panel\">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let patient of privatePatients;let i = index;\">\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"openPatientModal(patient.vacant,patient.bed_number,'Private Bed',patient)\"class=\"{{getPatientListClassBorder(patient)}}\" data-dismiss=\"modal\" data-toggle=\"modal\" href=\"#javascript:void(0)\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t\t\t\t\tP-{{patient.bed_number}}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"{{getImgPatient(patient)}}\"/>\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!patient.vacant\" class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{patient.patientName}}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!patient.vacant\" class=\"grey\">\n\t\t\t\t\t\t\t\t\t\t\t\tDr. {{patient.consultDoc.first_name}}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"approved\">\n\t\t\t\t\t<div *ngFor=\"let approvals of approvedPatients\">\n\t\t\t\t\t\t<h3 class=\"approvedDoctor\">\n\t\t\t\t\t\t\tDr. {{getDoctorName(approvals._id)}}\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"beds-panel\">\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let patient of approvals.approvedPatients;let i = index;\">\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openPatientModal(patient.vacant,patient.bed_number,'Semi Private Bed',patient)\" class=\"blueborder\" data-dismiss=\"modal\" data-toggle=\"modal\" href=\"#javascript:void(0)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"blue\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"patient.type=='general'\">G</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"patient.type=='private'\">P</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"patient.type=='semi_private'\">SP</span>-{{patient.bed_number}}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"{{getImgPatient(patient)}}\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"blue\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{patient.patientName}}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t                            <!-- <p class=\"grey\">\n\t\t\t\t\t\t\t\t                                Dr. {{getDoctorName(approvals._id)}}\n\t\t\t\t\t\t\t\t                            </p> -->\n\t\t\t\t\t\t\t\t                        </a>\n\t\t\t\t\t\t\t\t                    </li>\n\t\t\t\t\t\t\t\t                </ul>\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"modal fade cus-modal\" id=\"patientModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t  \t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t    \t<div class=\"modal-content\">\n\t\t\t    \t\t<div class=\"modal-header\">\n\t\t\t    \t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n\t\t\t    \t\t\t<h4 class=\"modal-title\"> Patient Details </h4>\n\t\t\t    \t\t</div>\n\t\t\t    \t\t<div class=\"modal-body newform-margin\" *ngIf=\"openedPatientDetail\">\n\t\t\t        \t\t<div class=\"row\">\n\t\t\t\t\t    \t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t    \t\t\t<div class=\"patient-popup\">\n\t\t\t\t\t    \t\t\t\t<div class=\"pat-center\">\n\t\t\t\t\t\t    \t\t\t\t<div class=\"pat-img\">\n\t\t\t\t\t\t    \t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!openedPatientDetail.imgSrc\"/>\n\t\t\t\t                                <img src=\"{{pateintPicPath}}{{openedPatientDetail.imgSrc}}\" class=\"img-responsive\" *ngIf=\"openedPatientDetail.imgSrc\"/>\n\t\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t\t    \t\t\t\t<p> {{openedPatientDetail.patientName}} ({{openedPatientDetail.gender}}), {{openedPatientDetail.age}}Y </p>\n\t\t\t\t\t\t    \t\t\t</div>\n\t\t\t\t\t\t    \t\t\t<table class=\"table table-bordered table-cstm\">\n\t\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t\t    \t\t\t\t\t<th>Bed Number</th>\n\t\t\t\t\t\t    \t\t\t\t\t<td> {{bedType.print}}-{{openedPatientDetail.bed_number}}</td>\n\t\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t\t    \t\t\t\n\t\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t\t    \t\t\t\t\t<th>Ailment/Procedure</th>\n\t\t\t\t\t\t    \t\t\t\t\t<td>{{openedPatientDetail.procedure}}</td>\n\t\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t\t    \t\t\t\t\n\t\t\t\t\t\t    \t\t\t\t<tr *ngIf=\"openedPatientDetail.prescription_id\">\n\t\t\t\t\t\t    \t\t\t\t\t<th>Prescription ID</th>\n\t\t\t\t\t\t    \t\t\t\t\t<td> {{openedPatientDetail.prescription_id}}</td>\n\t\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t\t    \t\t\t\n\t\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t\t    \t\t\t\t\t<th>Mobile Number</th>\n\t\t\t\t\t\t    \t\t\t\t\t<td> +91-{{openedPatientDetail.phone}}</td>\n\t\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t\t    \t\t\t\n\t\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t\t    \t\t\t\t\t<th>Consulting Doctor Name</th>\n\t\t\t\t\t\t    \t\t\t\t\t<td>Dr. {{openedPatientDetail.consultDoc.first_name}}</td>\n\t\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t\t    \t\t\t\n\t\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t\t    \t\t\t\t\t<th>Admit date and Time</th>\n\t\t\t\t\t\t    \t\t\t\t\t<td>{{openedPatientDetail.createdAt | date:'d MMM yy ,h:mm a' }} </td>\n\t\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t\t    \t\t\t</table>\n\t\t\t\t\t    \t\t\t</div>\n\t\t\t\t\t    \t\t</div>\n\t\t\t        \t\t</div>\n\t\t\t      \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t  \t</div>\n\t\t\t</div>\n\t\t\t<div class=\"container footer-cstm-an\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p>CURRENT OCCUPANCY: <b>{{getData(occupency)}}% </b></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p>ADMISSIONS TODAY : <b>{{patientAdmitted}}</b></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p>DISCHARGES TODAY : <b>{{patientDischarge}}</b></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-ipd/dashboard-progress-ipd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardProgressIpdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { MissionService } from '../../providers/mission.service';

var DashboardProgressIpdComponent = /** @class */ (function () {
    // totalAvgHours
    function DashboardProgressIpdComponent(userService, toastr) {
        this.userService = userService;
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
        this.events = null;
        this.appointmentDoctor = "";
        this.appointmentDate = new Date();
        this.doctorNote = null;
        this.dischargeDate = new Date();
        this.newDischargeDate = new Date();
    }
    DashboardProgressIpdComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData.smart_ipd_id);
        this.activatedtab = 0;
        this.generalPatient = [];
        this.privatepatient = [];
        this.semiPrivatePatient = [];
        this.dataArray = [];
        this.dataDispense = [];
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        //this.activatetab(1)
        this.discharegeTime = null;
        // this.discharegeTime.hour =  hoursIST
        // this.discharegeTime.minute = minutesIST
        //current time
        if (localStorage['smartIpdDetails']) {
            this.smartIpdData = JSON.parse(localStorage['smartIpdDetails']);
        }
        this.pateintPicPath = __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].patientPic;
        this.generalPatients = [];
        this.semiPatients = [];
        this.privatePatients = [];
        this.patientActivities = [];
        this.approvedPatients = [];
        this.dataIpdPatient = [];
        this.docWiseArray = [];
        this.webCam = false;
        this.imgSrc = './assets/imgs/placeholder.png';
        this.appointmentsForCalender = [{
                start: new Date().toJSON().toString().substr(0, 10),
                title: '1',
                time: ''
            }];
        this.shiftsOfParticularDay = [];
        //this.getDoctorId(0)
        //Akshay 27 Nov Start
        this.addpatientModal = {};
        this.addpatientModal.consultDoc = "";
        this.addpatientModal.gender = "";
        this.bedType = {};
        // Akshay 27 Nov End
        this.genLength = 0;
        this.privateLen = 0;
        this.semiprivateLen = 0;
        this.totalApprovedPatients = 0;
        this.addpatientModalData = {};
        this.addpatientModalData.type = "";
        this.dischargeDate = new Date();
        $.totalOpenedModal = 0;
        $('.modal').on('hidden.bs.modal', function (e) {
            $.totalOpenedModal = $.totalOpenedModal - 1;
            if ($.totalOpenedModal > 0) {
                $('body').addClass('cus-modalopen');
            }
            else {
                $('body').removeClass('cus-modalopen');
            }
        });
        $('.modal').on('shown.bs.modal', function (e) {
            $.totalOpenedModal = $.totalOpenedModal + 1;
        });
        this.GetSmartIpdDataAfterLogin();
        this.ipdAnalytics();
    };
    DashboardProgressIpdComponent.prototype.GetSmartIpdDataAfterLogin = function () {
        var _this = this;
        this.activatedtab = 0;
        this.generalPatient = [];
        this.privatepatient = [];
        this.semiPrivatePatient = [];
        this.dataArray = [];
        this.dataDispense = [];
        this.generalPatients = [];
        this.semiPatients = [];
        this.privatePatients = [];
        this.patientActivities = [];
        this.approvedPatients = [];
        this.addpatientModal = {};
        this.addpatientModal.consultDoc = "";
        this.addpatientModal.gender = "";
        this.bedType = {};
        // Akshay 27 Nov End
        this.genLength = 0;
        this.privateLen = 0;
        this.semiprivateLen = 0;
        this.totalApprovedPatients = 0;
        this.totalIpdAmount = 0;
        this.totalAdvanceAmount = 0;
        this.addpatientModalData = {};
        this.addpatientModalData.type = "";
        this.occupency = 0;
        this.loading = true;
        var object = {
            smart_ipd_id: this.doctorData.smart_ipd_id,
        };
        this.userService.GetSmartIpdDataAfterLogin(object).subscribe(function (data) {
            console.log(data);
            _this.dataDoctors = [];
            if (data.response == true) {
                _this.dataDoctors = data.doctorsRegisteredForSmartClinic;
                _this.dataSmartIpd = data.dataSmartIpd;
                _this.dataIpdPatient = data.dataIpdPatients;
                _this.approvedPatients = data.dataIpdPatientsApproved;
                for (var i = 0; i < _this.dataDoctors.length; i++) {
                    var count = 0;
                    for (var j = 0; j < _this.dataIpdPatient.length; j++) {
                        if (_this.dataDoctors[i]._id == _this.dataIpdPatient[j].consultDoc._id) {
                            count++;
                        }
                    }
                    _this.dataDoctors[i].patients = count;
                }
                for (var i = 0; i < _this.approvedPatients.length; i++) {
                    _this.totalApprovedPatients = _this.totalApprovedPatients + _this.approvedPatients[i].approvedPatients.length;
                    for (var j = 0; j < _this.approvedPatients[i].approvedPatients.length; j++) {
                        _this.totalIpdAmount += _this.approvedPatients[i].approvedPatients[j].total_bill;
                    }
                }
                for (var i = 0; i < data.dataIpdPatients.length; i++) {
                    if (data.dataIpdPatients[i].advanceReceived) {
                        _this.totalAdvanceAmount += data.dataIpdPatients[i].advanceReceived;
                    }
                    data.dataIpdPatients[i].vacant = false;
                    if (data.dataIpdPatients[i].type == 'general') {
                        _this.generalPatients.push(data.dataIpdPatients[i]);
                    }
                    else if (data.dataIpdPatients[i].type == 'private') {
                        _this.privatePatients.push(data.dataIpdPatients[i]);
                    }
                    else if (data.dataIpdPatients[i].type == 'semi_private') {
                        _this.semiPatients.push(data.dataIpdPatients[i]);
                    }
                }
                if (_this.dataDoctors.length > 0) {
                    var admin = _this.dataDoctors.filter(function (d) { return d.type_of_doctor == "admin_doctor"; });
                    _this.adminDoctor = admin[0];
                    _this.clinic_id = _this.adminDoctor.clinic_details.clinic_id;
                    _this.total_general_beds = _this.adminDoctor.clinic_services.general_beds;
                    _this.total_private_beds = _this.adminDoctor.clinic_services.private_beds;
                    _this.total_semi_private_beds = _this.adminDoctor.clinic_services.semi_private_beds;
                    _this.genLength = _this.total_general_beds - _this.generalPatients.length;
                    _this.privateLen = _this.total_private_beds - _this.privatePatients.length;
                    _this.semiprivateLen = _this.total_semi_private_beds - _this.semiPatients.length;
                }
                var occupybed = 0;
                occupybed = (_this.total_general_beds + _this.total_private_beds + _this.total_semi_private_beds) - (_this.genLength + _this.privateLen + _this.semiprivateLen);
                _this.occupency = (occupybed * 100) / (_this.total_general_beds + _this.total_private_beds + _this.total_semi_private_beds);
            }
            _this.getDoctorId(0);
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardProgressIpdComponent.prototype.ipdAnalytics = function () {
        var _this = this;
        this.patientAdmitted = 0;
        this.patientDischarge = 0;
        var object;
        object = {};
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id,
            object.start_date = new Date();
        object.end_date = new Date();
        this.loading = true;
        this.userService.IpdAnalytics(object).subscribe(function (result) {
            console.log(result);
            for (var i = 0; i < result.data.length; i++) {
                _this.ipdLength += result.data[i].dataIpd.length;
                for (var j = 0; j < result.data[i].dataIpd.length; j++) {
                    _this.patientAdmitted++;
                }
            }
            for (var i = 0; i < result.dataDischarge.length; i++) {
                for (var j = 0; j < result.dataDischarge[i].dataIpd.length; j++) {
                    _this.patientDischarge++;
                }
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardProgressIpdComponent.prototype.getDoctorId = function (id) {
        this.generalPatients = [];
        this.semiPatients = [];
        this.privatePatients = [];
        this.docWiseArray = [];
        for (var i = 0; i < this.dataIpdPatient.length; i++) {
            if (id == 0) {
                this.docWiseArray.push(this.dataIpdPatient[i]);
            }
            if (this.dataIpdPatient[i].consultDoc._id === id) {
                this.docWiseArray.push(this.dataIpdPatient[i]);
            }
        }
        for (var i = 0; i < this.docWiseArray.length; i++) {
            this.docWiseArray[i].vacant = false;
            if (this.docWiseArray[i].type == 'general') {
                this.generalPatients.push(this.docWiseArray[i]);
            }
            else if (this.docWiseArray[i].type == 'private') {
                this.privatePatients.push(this.docWiseArray[i]);
            }
            else if (this.docWiseArray[i].type == 'semi_private') {
                this.semiPatients.push(this.docWiseArray[i]);
            }
        }
    };
    DashboardProgressIpdComponent.prototype.getPatientListClassBorder = function (patient) {
        if (patient.vacant) {
            return 'greenborder';
        }
        else if (!patient.discharge_status) {
            return 'redborder';
        }
        else if (patient.discharge_status == 'requested_by_ipd') {
            return 'yellowborder';
        }
    };
    DashboardProgressIpdComponent.prototype.getPatientListClass = function (patient) {
        if (patient.vacant) {
            return 'green';
        }
        else if (!patient.discharge_status) {
            return 'red';
        }
        else if (patient.discharge_status == 'requested_by_ipd') {
            return 'yellow';
        }
    };
    DashboardProgressIpdComponent.prototype.getImgPatient = function (patient) {
        if (patient.vacant) {
            return './assets/imgs/no-icons.png';
        }
        else if (!patient.discharge_status) {
            return './assets/imgs/icons.png';
        }
        else if (patient.discharge_status == 'requested_by_ipd') {
            return './assets/imgs/yellow-bed.png';
        }
        else if (patient.discharge_status == 'approved_by_doctor') {
            return './assets/imgs/blue-bed.png';
        }
    };
    DashboardProgressIpdComponent.prototype.getDetailOfClinic = function () {
        this.smartIpdData = JSON.parse(localStorage['smartIpdDetails']);
    };
    DashboardProgressIpdComponent.prototype.openPatientModal = function (data, id, type, patient) {
        var _this = this;
        this.getDetailOfClinic();
        this.bedNumber = id;
        if (type == 'Private Bed') {
            this.bedType = {
                print: 'P',
                store: 'private',
                show: 'Private'
            };
            if (this.adminDoctor.clinic_services.private_bed_charges) {
                this.bedCharges = this.adminDoctor.clinic_services.private_bed_charges;
            }
        }
        else if (type == 'Semi Private Bed') {
            this.bedType = {
                print: 'SP',
                store: 'semi_private',
                show: 'Semi Private'
            };
            if (this.adminDoctor.clinic_services.semi_private_bed_charges) {
                this.bedCharges = this.adminDoctor.clinic_services.semi_private_bed_charges;
            }
        }
        else if (type == 'General Bed') {
            this.bedType = {
                print: 'G',
                store: 'general',
                show: 'General'
            };
            if (this.adminDoctor.clinic_services.general_bed_charges) {
                this.bedCharges = this.adminDoctor.clinic_services.general_bed_charges;
            }
        }
        if (patient.discharge_status == 'requested_by_ipd') {
            // this.toastr.warning("Patient requested for discharge","Message")
            $("#dischargeMessage").modal("show");
            setTimeout(function () {
                $("#dischargeMessage").modal("hide");
            }, 3000);
            return;
        }
        else if (patient.discharge_status == 'approved_by_doctor') {
            this.openedPatientDetail = patient;
            console.log(this.openedPatientDetail);
            this.totalActivitiesAmountPdf = 0;
            for (var i = 0; i < this.openedPatientDetail.patient_activities.length; i++) {
                if (!this.openedPatientDetail.patient_activities[i].unit) {
                    this.openedPatientDetail.patient_activities[i].unit = 0;
                }
                if (!this.openedPatientDetail.patient_activities[i].rate) {
                    this.openedPatientDetail.patient_activities[i].rate = 0;
                }
                this.openedPatientDetail.patient_activities[i].amount = this.openedPatientDetail.patient_activities[i].unit * this.openedPatientDetail.patient_activities[i].rate;
                this.totalActivitiesAmountPdf = this.totalActivitiesAmountPdf + this.openedPatientDetail.patient_activities[i].amount;
            }
            var totalOut = this.totalActivitiesAmountPdf + this.openedPatientDetail.occupancy_charges - this.openedPatientDetail.advanceReceived;
            if (totalOut < 0) {
                this.refundAmountPdf = totalOut + (-(2 * totalOut));
            }
            else {
                this.refundAmountPdf = 0;
            }
            $("#dischargePatientPdf").modal("show");
            // this.toastr.warning("Patient approved for discharge","Message")
            return;
        }
        //Akshay 28 nov end
        if (data == true) {
            $("#addpatientModal").modal("show");
        }
        else {
            this.openedPatientDetail = patient;
            this.userService.GetAllIpdActivityOfPatient(this.openedPatientDetail._id).subscribe(function (data) {
                console.log(data);
                _this.suggestionList = [];
                if (data.response == true) {
                    _this.patientActivities = data.data;
                    _this.totalActivitiesAmount = 0;
                    for (var i = 0; i < _this.patientActivities.length; i++) {
                        if (!_this.patientActivities[i].unit) {
                            _this.patientActivities[i].unit = 0;
                        }
                        if (!_this.patientActivities[i].rate) {
                            _this.patientActivities[i].rate = 0;
                        }
                        _this.patientActivities[i].amount = _this.patientActivities[i].unit * _this.patientActivities[i].rate;
                        _this.totalActivitiesAmount = _this.totalActivitiesAmount + _this.patientActivities[i].amount;
                    }
                }
                var diff = (new Date().getTime() - new Date(_this.openedPatientDetail.createdAt).getTime()) / 1000;
                diff /= (60 * 60);
                var hoursDifference = Math.abs(Math.round(diff));
                _this.differenceInDays = Math.trunc(hoursDifference / 24);
                _this.differenceInHours = Math.trunc(hoursDifference % 24);
                _this.occupancyHoursAmount = (_this.bedCharges / 24) * _this.differenceInHours;
                _this.occupancyCharges = Math.ceil((_this.differenceInDays * _this.bedCharges) + _this.occupancyHoursAmount);
                _this.totalActivityOccupancy = _this.totalActivitiesAmount + _this.occupancyCharges;
                if (!_this.openedPatientDetail.advanceReceived) {
                    _this.openedPatientDetail.advanceReceived = 0;
                }
                _this.totalActivitiesOutstandingAmount = _this.totalActivitiesAmount + _this.occupancyCharges - _this.openedPatientDetail.advanceReceived;
                if (_this.totalActivitiesOutstandingAmount < 0) {
                    _this.refundAmount = _this.totalActivitiesOutstandingAmount + (-(2 * _this.totalActivitiesOutstandingAmount));
                    _this.totalActivitiesOutstandingAmount = 0;
                }
                else {
                    _this.refundAmount = 0;
                }
                // this.loading = false
            }, function (err) {
                console.log(err);
            });
            $("#patientModal").modal("show");
        }
    };
    DashboardProgressIpdComponent.prototype.getDoctorFirstName = function (doctor) {
        var doc = doctor.split(" ");
        return doc[0];
    };
    DashboardProgressIpdComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    DashboardProgressIpdComponent.prototype.getData = function (data) {
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
    DashboardProgressIpdComponent.prototype.getDoctorName = function (id) {
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if (this.dataDoctors[i]._id.toString() == id.toString()) {
                return this.dataDoctors[i].first_name;
            }
        }
    };
    DashboardProgressIpdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-progress-ipd',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-ipd/dashboard-progress-ipd.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-ipd/dashboard-progress-ipd.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], DashboardProgressIpdComponent);
    return DashboardProgressIpdComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-progress-ipd/dashboard-progress-ipd.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardProgressIpdModule", function() { return DashboardProgressIpdModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_progress_ipd_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-ipd/dashboard-progress-ipd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_progress_ipd_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-progress-ipd/dashboard-progress-ipd-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_fullcalendar__ = __webpack_require__("../../../../ng-fullcalendar/ng-fullcalendar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import {WebcamModule} from 'ngx-webcam';




var DashboardProgressIpdModule = /** @class */ (function () {
    function DashboardProgressIpdModule() {
    }
    DashboardProgressIpdModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__dashboard_progress_ipd_routing_module__["a" /* DashboardProgressIpdRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng_fullcalendar__["b" /* FullCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_progress_ipd_component__["a" /* DashboardProgressIpdComponent */]]
        })
    ], DashboardProgressIpdModule);
    return DashboardProgressIpdModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-progress-ipd.module.chunk.js.map