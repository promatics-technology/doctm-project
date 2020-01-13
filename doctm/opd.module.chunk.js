webpackJsonp(["opd.module"],{

/***/ "../../../../../src/app/header-two-layout/opd/opd-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpdRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opd_component__ = __webpack_require__("../../../../../src/app/header-two-layout/opd/opd.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__opd_component__["a" /* OpdComponent */],
    }
];
var OpdRoutingModule = /** @class */ (function () {
    function OpdRoutingModule() {
    }
    OpdRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], OpdRoutingModule);
    return OpdRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/opd/opd.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cus-content-wrapper{\r\n\tpadding-top: 0px;\r\n}\r\n.hding > h3{\r\n\tmargin: 0px;\r\n\tpadding:15px 0px;\r\n\tbackground-color: #d9e0dd; \r\n}\r\n.hding  h5.btm{\r\n\tmargin: 0px;\r\n\tpadding:15px 0px;\r\n\tbackground-color: #d9e0dd; \r\n}\r\n.cstm-tbl{\r\n\twidth: 100%;\r\n/*\tmargin-top: 15px;*/\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n    cursor: pointer;\r\n}\r\n.clr-vlt{\r\n    color: #5c62af;\r\n}\r\n.tb-1{\r\n\tmargin-top:15px;\r\n}\r\n.cstm-tbl tr{\r\n\theight:40px;\r\n}\r\n.footer-cstm-an{\r\n\tposition: fixed;\r\n    float: left;\r\n    width: 100%;\r\n    bottom: 0;\r\n    background: #fff;\r\n    border-top: 1px solid #d6d6d6;\r\n    padding-top: 8px;\r\n}\r\n.mt-table h3{\r\n\tmargin-top: 0px;\r\n}\r\n.cstm-tr{\r\n\tbackground-color:#92d050;\r\n\tcolor:#fff;\r\n\ttext-align: center;\r\n}\r\n.cstm-tr-2{\r\n\tbackground-color:#c5d8f1;\r\n}\r\n.cstm-tr-2 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-2 td:last-child {\r\n border-right: none;\r\n}\r\n.cstm-tr-3{\r\n\tborder-bottom:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td:last-child {\r\n border-right: none;\r\n}\r\n.color-red {\r\n    color: #ff0000;\r\n    -webkit-transform: translateY(-8px);\r\n            transform: translateY(-8px);\r\n}\r\n.cstm-tr-4{\r\n\tbackground-color: #f2dada;\r\n}\r\n.tabs-cstm li{\r\n\twidth:50%;\r\n}\r\n.tabs-cstm li.active{\r\n\tbackground-color:#f2f3f5!important;\r\n    border-bottom: 2px solid #2cbef7;\r\n}\r\n.tabs-cstm li.active a{\r\n\tbackground-color:transparent;\r\n}\r\n.grin{\r\n    color: #38af13;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n}\r\n.red-u{\r\n     color: #ff0000; \r\n}\r\nbutton.cstm-btn{\r\n\tbackground:#00b050;\r\n\tmargin-bottom:8px;\r\n\tfont-size: 14px;\r\n}\r\n.chart-box, canvas{\r\n\twidth:100%;\r\n}\r\n.modal-header{\r\n\tpadding-top: 0px;\r\n}\r\n.close {\r\n    font-size: 42px;\r\n}\r\n.ylo{\r\n\tcolor:#ff8300;\r\n}\r\n.cl-2{\r\n\tmargin-top: -12px\r\n}\r\n.hder-2{\r\n \tpadding-bottom: 0px;\r\n \tborder-bottom: transparent;\r\n }\r\n.snp {\r\n \tpadding-bottom: 8px;\r\n \tborder-bottom: 1px solid #d4d4d4;\r\n }\r\n.globl h5{\r\n \tmargin:20px 0px;\r\n }\r\n.clr-bl-2{\r\n \tcolor:#006abe;\r\n }\r\n.clr-bl-2 h4{\r\n \tmargin:5px 0px; \r\n }\r\n.cstm-th{\r\n \tborder-top:1px solid #ddd;\r\n }\r\n.btm-stts{\r\n \tmargin-top:25px;\r\n }\r\n.img-star img{\r\n \topacity: 0.4;\r\n }\r\n.globl-2 h5{\r\n    background:#d4d4d4;\r\n    margin: 15px 0px;\r\n    padding: 8px 0px;\r\n    padding-left: 5px;\r\n}\r\n.last-child{\r\n\tborder-bottom: 1px solid #ddd; \r\n}\r\n.cstm-tab-3 button{\r\n\tmargin-top:8px; \r\n}\r\n.modal.fade .modal-dialog {\r\n  -webkit-transform: translate3d(0, 100vh, 0);\r\n          transform: translate3d(0, 100vh, 0);\r\n  -webkit-transition: 700ms;\r\n  transition: 700ms;\r\n}\r\n.modal.in .modal-dialog {\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0);\r\n  -webkit-transition: 700ms;\r\n  transition: 700ms;\r\n}\r\n.cstm-tr-2{\r\n\tbackground-color:#d7e4e3;\r\n}\r\n.cstm-tr-2 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-2 td:last-child {\r\n border-right: none;\r\n}\r\n.cstm-tr-3{\r\n\tborder-bottom:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td:last-child {\r\n border-right: none;\r\n}\r\n/*.cstm-md-bdy {\r\n\tposition: absolute;\r\n\ttop: -30px;\r\n    right: 8px;\r\n}*/\r\n.modal-body{\r\n\tpadding-top: 1px;\r\n\tpadding-bottom: -1px;\r\n}\r\n.cstm-tbl tr{\r\n    height: 25px;\r\n}\r\n.cstm-table-55 tr td h4{\r\n\tfont-size: 14px;\r\n\tmargin:4px 0px; \r\n}\r\nsmall{\r\n\tfont-weight: bold!important;\r\n}\r\n.cstm-range{\r\n\tposition: relative;\r\n\tmargin-bottom:8px;\r\n}\r\n.cstm-range img.needle{\r\n   transform-origin: 87% 42%;\r\n   -webkit-transform-origin: 87% 42%;\r\n   -moz-transform-origin: 87% 42%;\r\n    position: absolute;\r\n    bottom: -10px;\r\n    left: 15%;\r\n    -webkit-transform: rotate(17.5deg);\r\n            transform: rotate(17.5deg);\r\n}\r\n.cstm-range img.avr{\r\n\t-webkit-transform: rotate(65.5deg)!important;\r\n\t        transform: rotate(65.5deg)!important;\r\n}\r\n.cstm-range img.good{\r\n\t-webkit-transform: rotate(115.5deg)!important;\r\n\t        transform: rotate(115.5deg)!important;\r\n}\r\n.cstm-range img.exe{\r\n\t-webkit-transform: rotate(165.5deg)!important;\r\n\t        transform: rotate(165.5deg)!important;\r\n}\r\n.gldn{\r\n\tcolor:rgb(255,192,0);\r\n}\r\n.table-new-bn table{\r\n\twidth:100%;\r\n}\r\n.table-new-bn tr td{\r\n\tpadding:5px!important;\r\n}\r\n.mg-all{\r\n\tmargin:5px 0px;\r\n}\r\n.heading-cstm{\r\n\t    border-bottom: 1px solid #b9b9b9;\r\n}\r\n.cstm-brdr-left{\r\n\tborder-left:1px solid #d4d4d4;\r\n}\r\n/*.table-new-bn table tr:last-child{\r\n\tborder-top:1px solid #d4d4d4;\r\n}*/\r\n.tab-cstm-cont{\r\n\tmargin-top: 10px;\r\n}\r\n.tabs-new-sum li{\r\n\twidth:25%;\r\n}\r\n.new-tab-56 tr td{\r\n\tpadding:8px 0px; \r\n}\r\n.footer-inner-fix{\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n}\r\na.btn-blue{\r\n\tbackground-color: #01B0F0!important;\r\n\tborder:1px solid #01B0F0!important;\r\n\tpadding-left:50px;\r\n\tpadding-right:50px;\r\n\tmargin-bottom: 10px; \r\n}\r\n.btn-big{\r\n    bottom: 17px;\r\n    position: relative;\r\n    -webkit-transform: scale(2,2);\r\n            transform: scale(2,2);\r\n    left: 20px;\r\n    padding-left:18px;\r\n    padding-right:18px; \r\n}\r\n.in-span{\r\n\tposition: absolute;\r\n    top: -12px;\r\n    left:0;\r\n    font-size: 6px;\r\n}\r\n.h4-mg{\r\n\tmargin:0px;\r\n}\r\n.blck-color{\r\n\tcolor: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/opd/opd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"analytics-sec\">\n\t<div class=\"ipd-deatil-sec\">\n\t\t<div class=\"ipd-body\">\n\t\t\t<div class=\"cus-sidebar-wrapper\">\n\t\t\t\t<div class=\"cus-sidebar\" style=\"height: initial;\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li> <h4 class=\"text-center\">For Past</h4> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month &nbsp;<small *ngIf=\"activatedtab==3\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month &nbsp;<small *ngIf=\"activatedtab==4\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month &nbsp;<small *ngIf=\"activatedtab==5\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year &nbsp;<small *ngIf=\"activatedtab==6\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> All </a> </li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"cus-content-wrapper\">\n\t\t\t\t<div class=\"cus-content\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t<ul class=\"nav nav-tabs tabs-cstm\">\n\t\t\t\t\t\t\t\t<li class=\"text-center active\"><a data-toggle=\"tab\" href=\"#home\"><b>MY OPD SCORE</b></a></li>\n\t\t\t\t\t\t\t\t<li class=\"text-center\"><a data-toggle=\"tab\" href=\"#menu1\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor'\"><b>MY CLINIC SCORE</b></a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"tab-content tab-cstm-cont\">\n\t\t\t\t\t\t\t\t<div id=\"home\" class=\"tab-pane fade in active\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"cstm-tbl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th  width=\"300px\" class=\"text-left clr-bl-2\"><h4>OPD Parameters</h4></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-left clr-bl-2\"><h4>Performance</h4></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-right clr-bl-2\"><h4>Trend</h4></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"300px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>Prescriptions</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{totalPrescriptions}},\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span *ngIf =\"totalOrderTrends>0\" class=\"grin\">+{{totalOrderTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span *ngIf =\"totalOrderTrends<0\" class=\"red-u\">{{totalOrderTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span *ngIf =\"totalOrderTrends==0\" >{{totalOrderTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(1)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\"  width=\"300px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>Collection</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{getData(totalCollection)}}, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"opdCollectionTrend>0\" class=\"grin\">+{{opdCollectionTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"opdCollectionTrend<0\" class=\"red-u\">{{opdCollectionTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"opdCollectionTrend==0\">{{opdCollectionTrend}}%</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(2)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\"  width=\"300px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>CTU</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{getData(avgCtuPercentage)}}%,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span *ngIf =\"ctuTrend>0\" class=\"grin\">+{{ctuTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span *ngIf =\"ctuTrend<0\" class=\"red-u\">{{ctuTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span *ngIf =\"ctuTrend==0\">{{ctuTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(12)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\"  width=\"300px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>AVG Consultation Time Per Patient</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{getData(avgTime)}} min, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"timePatientTrend>0\" class=\"grin\">+{{timePatientTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"timePatientTrend<0\" class=\"red-u\">{{timePatientTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"timePatientTrend==0\" class=\"red-u\">{{timePatientTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(7)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\"  width=\"300px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>Frequent Patients</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{oldPatients}}, <small>({{getData(freqPatientPercentage)}}%)</small> </b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(3)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\"  width=\"300px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>New Patients </h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{getData(newPatients)}}, <small>({{getData(newPatientsPrercenatge)}}%)</small> </b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(4)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-lg-offset-1 text-center footer-inner-fix\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success cstm-btn\" (click) = \"showChartOpd()\"><h4>COMPUTE MY OPD SCORE</h4></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-5 cstm-brdr-left\" *ngIf = \"showChartOpdNow\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"cstm-range\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/mtr.png\" class=\"img-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/needle.png\" class=\"img-responsive needle {{value}}\" [ngStyle]=\"{'transform': 'translateX(' + $value + 'px)'}\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"text-center mg-all\">{{diagnosisWeighted}}</h2>\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"text-center gldn mg-all\">{{getNotes(diagnosisWeighted)}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-new-bn\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" class=\"heading-cstm\"><h4 class=\"h4-mg\">Snapshots</h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>OPD collection</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"opdCollectionTrend>0\">Rising</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"opdCollectionTrend<0\">Falling</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"opdCollectionTrend==0\">Neutral</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"opdCollectionTrend>0\">+{{opdCollectionTrend}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"opdCollectionTrend<0\">{{opdCollectionTrend}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"opdCollectionTrend==0\">{{opdCollectionTrend}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Patient Inflow</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf = \"totalOrderTrends>0\"> Rising</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf = \"totalOrderTrends<0\">Falling</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf = \"totalOrderTrends==0\">Neutral</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf = \"totalOrderTrends>0\">+{{totalOrderTrends}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf = \"totalOrderTrends<0\">{{totalOrderTrends}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf = \"totalOrderTrends==0\">{{totalOrderTrends}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>New Patient Added</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{newPatients}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf = \"newPatientTrend>0\">+{{newPatientTrend}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf = \"newPatientTrend<0\">{{newPatientTrend}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf = \"newPatientTrend==0\">{{newPatientTrend}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Patient retention rate</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"oldPatientTrend>0\">Rising</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"oldPatientTrend<0\">Falling</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"oldPatientTrend==0\">Neutral</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"oldPatientTrend>0\">+{{getData(oldPatientTrend)}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"oldPatientTrend<0\">{{getData(oldPatientTrend)}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"oldPatientTrend==0\">{{getData(oldPatientTrend)}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>CTU</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"ctuTrend>0\">Rising</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"ctuTrend<0\">Falling</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"ctuTrend==0\">Neutral</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf = \"ctuTrend>0\">+{{ctuTrend}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf = \"ctuTrend<0\">{{ctuTrend}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf = \"ctuTrend==0\">{{ctuTrend}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Time per patient</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{TimePerPatient}} min</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf = \"timePatientTrend>0\">+{{timePatientTrend}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf = \"timePatientTrend<0\">{{timePatientTrend}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf = \"timePatientTrend==0\">{{timePatientTrend}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"grin\">You are doing Great</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"menu1\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-tabs tabs-cstm tabs-new-sum\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"text-center active li-1\"><a data-toggle=\"tab\" href=\"#tab-1\"><b>OPD <small>(All doctors)</small></b></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"text-center li-2\" *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy==true\"><a data-toggle=\"tab\" href=\"#tab-2\"><b>PHARMACY</b></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"text-center li-3\" *ngIf=\"doctorData.clinic_services.Clinic_Diagnostics==true\"><a data-toggle=\"tab\" href=\"#tab-3\"><b>DIAGNOSTICS</b></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"text-center li-4\"><a data-toggle=\"tab\" href=\"#tab-4\" *ngIf=\"doctorData.clinic_services.Clinic_IPD==true\"><b>IPD</b></a></li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"tab-1\" class=\"tab-pane fade in active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"cstm-tbl cstm-table-55 new-tab-56\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"250px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>Prescriptions</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{totalPrescriptions}}, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf =\"totalOrderTrends>0\" class=\"grin\">+{{totalOrderTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span *ngIf =\"totalOrderTrends<0\" class=\"red-u\">{{totalOrderTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span *ngIf =\"totalOrderTrends==0\" >{{totalOrderTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(1)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\"  width=\"250px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>Collection</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{getData(totalCollection)}},\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"opdCollectionTrend>0\" class=\"grin\">+{{opdCollectionTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"opdCollectionTrend<0\" class=\"red-u\">{{opdCollectionTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"opdCollectionTrend==0\">{{opdCollectionTrend}}%</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(2)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\"  width=\"250px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>CTU</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{getData(avgCtuPercentage)}}%, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf =\"ctuTrend>0\" class=\"grin\">+{{ctuTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span *ngIf =\"ctuTrend<0\" class=\"red-u\">{{ctuTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span *ngIf =\"ctuTrend==0\">{{ctuTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(12)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-center pull-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"ylo\">{{overAllRating}} {{getNotes(overAllRating)}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\"  width=\"250px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>AVG Consultation Time Per Patient</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{getData(avgTime)}} min, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"timePatientTrend>0\" class=\"grin\">+{{timePatientTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"timePatientTrend<0\" class=\"red-u\">{{timePatientTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"timePatientTrend==0\">{{timePatientTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(7)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\"  width=\"250px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>Frequent Patients</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{oldPatients}}, <small>({{getData(freqPatientPercentage)}}%)</small> </b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(3)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\"  width=\"250px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>New Patients </h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{newPatients}}, <small>({{getData(newPatientsPrercenatge)}}%)</small> </b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(4)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-lg-offset-1  text-center footer-inner-fix \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"cstm-tab-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#tab-2\"  class=\"btn btn-success cstm-btn btn-blue\" (click)=\"tabClicked()\"><h4>NEXT</h4></a>&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-big\"><b>{{opdCollectionWeighted}}</b><span class=\"in-span\">OPD sub-score</span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"tab-2\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"cstm-tbl cstm-table-55 new-tab-56\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"250px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>Sales</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{opdPharmacySales}}, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf =\"pharmacyTrends>0\" class=\"grin\">+{{pharmacyTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf =\"pharmacyTrends<0\" class=\"red-u\">{{pharmacyTrends}}%</span> <span  *ngIf =\"pharmacyTrends==0\" class=\"grin\">{{pharmacyTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(5)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"250px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>Profit</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{opdPhrmacyProfit}}, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf =\"PharmacyprofitTrends>0\" class=\"grin\">+{{PharmacyprofitTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf =\"PharmacyprofitTrends<0\" class=\"red-u\">{{PharmacyprofitTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf =\"PharmacyprofitTrends==0\">{{PharmacyprofitTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(13)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"250px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>Conversion</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{getData(pharmacyConversion)}}% \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<<span *ngIf =\"PharmacyconversionTrend>0\" class=\"red-u\">+{{PharmacyconversionTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf =\"PharmacyconversionTrend<0\" class=\"red-u\">{{PharmacyconversionTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf =\"PharmacyconversionTrend==0\">{{PharmacyconversionTrend}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(8)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-lg-offset-1  text-center footer-inner-fix \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"cstm-tab-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#tab-3\"  class=\"btn btn-success cstm-btn btn-blue\" (click)=\"tabClicked2()\"><h4>NEXT</h4></a>&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-big\"><b>{{pharmacyWeighted}}</b><span class=\"in-span\">Pharmacy sub-score</span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"tab-3\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"cstm-tbl cstm-table-55 new-tab-56\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"250px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>Sales</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{opdDiagonsSales}}, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf =\"diagnosticsTrends>0\" class=\"grin\">+{{diagnosticsTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf =\"diagnosticsTrends<0\" class=\"red-u\">{{diagnosticsTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf =\"diagnosticsTrends==0\">{{diagnosticsTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(6)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"250px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>Conversion</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{getData(diagnosisConversion)}}%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span *ngIf =\"diagnosticsConversionTrends>0\" class=\"grin\">+{{diagnosticsConversionTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span *ngIf =\"diagnosticsConversionTrends<0\" class=\"red-u\">{{diagnosticsConversionTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span *ngIf =\"diagnosticsConversionTrends==0\">{{diagnosticsConversionTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(9)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-lg-offset-1  text-center footer-inner-fix \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"cstm-tab-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#tab-4\"  class=\"btn btn-success cstm-btn btn-blue\" (click)=\"tabClicked3()\"><h4>NEXT</h4></a>&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-big\"><b>{{diagnosisWeighted}}</b><span class=\"in-span\">Diagnostics sub-score</span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"tab-4\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"cstm-tbl cstm-table-55 new-tab-56\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"250px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>Revenue</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{ipdfinalTotal}}, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf =\"ipdTrends>0\" class=\"grin\">+{{ipdTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf =\"ipdTrends<0\" class=\"red-u\">{{ipdTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf =\"ipdTrends==0\">{{ipdTrends}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(10)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"250px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>Occupancy</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{getData(ipdOccupancy)}}%, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(15)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"250px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>>Admission Rate</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b>: {{getData(admissionRate)}}%</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"clr-blue\" data-toggle=\"modal\" data-target=\"#Modal-can\" (click)=\"getChart(14)\">: View</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-lg-offset-1  text-center footer-inner-fix \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"cstm-tab-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a  class=\"btn btn-success cstm-btn btn-blue\" (click)=\"showChart()\"><h4>COMPUTE MY CLINIC SCORE</h4></a>&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-big blck-color\"><b>{{ipdWeighted}}</b><span class=\"in-span\" >IPD sub-score</span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-5 cstm-brdr-left\" *ngIf = \"showChartNow\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"cstm-range\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/mtr.png\" class=\"img-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/needle.png\" class=\"img-responsive needle\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"text-center mg-a\">{{overAllRating}}</h2>\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"text-center gldn mg-all\">{{getNotes(overAllRating)}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-new-bn\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" class=\"heading-cstm\"><h4 class=\"h4-mg\">Snapshots</h4></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>OPD collection</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"opdCollectionTrend>0\">Rising</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"opdCollectionTrend<0\">Falling</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"opdCollectionTrend==0\">Neutral</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"opdCollectionTrend>0\">+{{opdCollectionTrend}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"opdCollectionTrend<0\">{{opdCollectionTrend}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"opdCollectionTrend==0\">{{opdCollectionTrend}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Pharmacy sales</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"pharmacyTrends>0\">Rising</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"pharmacyTrends<0\">Falling</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"pharmacyTrends==0\">Neutral</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"pharmacyTrends>0\">+{{pharmacyTrends}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"pharmacyTrends<0\">{{pharmacyTrends}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"pharmacyTrends==0\">{{pharmacyTrends}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Diagnostics Sales</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"diagnosticsTrends>0\">Rising</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"diagnosticsTrends<0\">Falling</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"diagnosticsTrends==0\">Neutral</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"diagnosticsTrends>0\">+{{diagnosticsTrends}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"diagnosticsTrends<0\">{{diagnosticsTrends}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"diagnosticsTrends==0\">{{diagnosticsTrends}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>IPD revenue</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"ipdTrends>0\">Rising</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"ipdTrends<0\">Falling</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"ipdTrends==0\">Neutral</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"ipdTrends>0\">+{{ipdTrends}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"ipdTrends<0\">{{ipdTrends}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf =\"ipdTrends==0\">{{ipdTrends}}%</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><b class=\"grin\">{{getNotes(overAllRating)}}</b></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"Modal-can\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"modal-header text-center\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\">{{showDataOnGraph}}</h4>\n\t\t\t\t\t<small>{{fromDate | date:'dd/MM/yyyy'}}- {{toDate | date:'dd/MM/yyyy'}}</small>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<div class=\"chart-diagnos chart-box wrap-canavas\" *ngIf=\"!loading\">\n\t\t\t\t\t\t\t<canvas baseChart\n\t\t\t\t\t\t\t[datasets]=\"lineChartData\"\n\t\t\t\t\t\t\t[labels]=\"lineChartLabels\"\n\t\t\t\t\t\t\t[options]=\"lineChartOptions\"\n\t\t\t\t\t\t\t[colors]=\"lineChartColors\"\n\t\t\t\t\t\t\t[legend]=\"lineChartLegend\"\n\t\t\t\t\t\t\t[chartType]=\"lineChartType\"\n\t\t\t\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t\t\t(chartClick)=\"chartClicked($event)\"></canvas>\n\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"modal fade\" id=\"Modal-1-mnth\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"modal-header hder-2 text-center\">\n\t\t\t\t\t<button type=\"button\" class=\"close cl-2\" data-toggle=\"modal\" data-target=\"#Modal-1-mnth\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title title-2 clr-bl-2\">Your OPD Score for past onme month <span class=\"ylo\">7.6 (Very Good)</span></h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-12 globl\">\n\t\t\t\t\t\t<h4 class=\"snp\"><b>Snapshots</b></h4>\n\t\t\t\t\t\t<h5>1. The OPD revenue showed <span class=\"grin\">Rising </span>trend of <span class=\"grin\"> +15%</span></h5>\n\t\t\t\t\t\t<h5>2.  Your patient inflow <span class=\"red-u\"> fell</span> by <span class=\"red-u\"> -15%</span></h5>\n\t\t\t\t\t\t<h5>3. Your clinic added <span class=\"grin\">5</span> new patients</h5>\n\t\t\t\t\t\t<h5>4. The patient retention rate was <span class=\"ylo\"> GOOD</span>  ie. <span class=\"ylo\">80%</span></h5>\n\t\t\t\t\t\t<h5>Your CTU was  <span class=\"grin\">80%. You are doing excellent. </span></h5>\n\t\t\t\t\t\t<h5>6. Your avg consultation time per patient was  <span class=\"grin\">7</span>  minutes. <span class=\"grin\">25 decrease</span> decrease during the period. </h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-12 img-star\">\n\t\t\t\t\t\t<img src=\"assets\\imgs\\star.png\" class=\"img-responsive\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"modal fade\" id=\"Modal-2-mnth\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"modal-header hder-2 text-center\">\n\t\t\t\t\t<button type=\"button\" class=\"close cl-2\" class=\"modal fade\" id=\"Modal-1-mnth\" role=\"dialog\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title title-2 clr-bl-2\">Your Clinic Score for past <span class=\"ylo\">one month </span><span class=\"grin\">8.63 (Excellent)</span></h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-12 globl globl-2\">\n\t\t\t\t\t\t<h4 class=\"snp\"><b>Snapshots</b></h4>\n\t\t\t\t\t\t<h5>1. The OPD revenue showed\n\t\t\t\t\t\t <span *ngIf =\"opdCollectionTrend>0\" class=\"grin\">Rising </span>\n\t\t\t\t\t\t <span *ngIf =\"opdCollectionTrend<0\" class=\"red-u\">Falling </span>\n\t\t\t\t\t\t <span *ngIf =\"opdCollectionTrend==0\">Neutral </span>trend of \n\t\t\t\t\t\t <span *ngIf =\"opdCollectionTrend>0\" class=\"grin\"> +{{opdCollectionTrend}}%</span>\n\t\t\t\t\t\t<span *ngIf =\"opdCollectionTrend<0\" class=\"red-u\"> {{opdCollectionTrend}}%</span>\n\t\t\t\t\t\t<span *ngIf =\"opdCollectionTrend==0\"> {{opdCollectionTrend}}%</span>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t<h5>2.  Your patient inflow \n\t\t\t\t\t\t\t<span *ngIf = \"totalOrderTrends>0\" class=\"red-u\"> rise</span>\n\t\t\t\t\t\t\t<span *ngIf = \"totalOrderTrends<0\" class=\"red-u\"> fell</span>\n\t\t\t\t\t\t\t<span *ngIf = \"totalOrderTrends==0\"> netural</span> by\n\t\t\t\t\t\t\t<span *ngIf = \"totalOrderTrends>0\" class=\"red-u\"> +{{totalOrderTrends}}%</span>\n\t\t\t\t\t\t\t<span *ngIf = \"totalOrderTrends<0\" class=\"red-u\"> {{totalOrderTrends}}%</span>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<span *ngIf = \"totalOrderTrends==0\"> {{totalOrderTrends}}%</span>\n\t\t\t\t\t\t<h5>3. Your clinic added \n\t\t\t\t\t\t\t<span class=\"grin\">{{newPatients}}\n\t\t\t\t\t\t\t</span> new patients</h5>\n\t\t\t\t\t\t<h5>4. The patient retention rate was\n\t\t\t\t\t\t <span class=\"ylo\"> GOOD</span> \n\t\t\t\t\t\t  ie. <span class=\"ylo\">80%</span></h5>\n\t\t\t\t\t\t<h5>Your CTU was \n\t\t\t\t\t\t <span class=\"grin\">80%. You are doing excellent. </span></h5>\n\t\t\t\t\t\t<h5>6. Your avg consultation time per patient was  <span class=\"grin\">7</span>  minutes.\n\t\t\t\t\t\t <span class=\"grin\">25</span> decrease during the period. </h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-12 img-star\">\n\t\t\t\t\t\t<img src=\"assets\\imgs\\star.png\" class=\"img-responsive\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- <div class=\"modal fade\" id=\"Modal-can\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"modal-header text-center\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\">Prescription Vs Time</h4>\n\t\t\t\t\t<small>(03/01/2019 - 02/02/2019)</small>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-12\">  \n\t\t\t\t\t\t<div class=\"chart-diagnos chart-box wrap-canavas\" *ngIf=\"!loadingMyClinicScore\">\n\t\t\t\t\t\t\t<canvas baseChart\n\t\t\t\t\t\t\t[datasets]=\"lineChartData\"\n\t\t\t\t\t\t\t[labels]=\"lineChartLabels\"\n\t\t\t\t\t\t\t[options]=\"lineChartOptions\"\n\t\t\t\t\t\t\t[colors]=\"lineChartColors\"\n\t\t\t\t\t\t\t[legend]=\"lineChartLegend\"\n\t\t\t\t\t\t\t[chartType]=\"lineChartType\"\n\t\t\t\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t\t\t(chartClick)=\"chartClicked($event)\"></canvas>\n\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"Modal-can2\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"modal-header text-center\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\">Prescription Vs Time</h4>\n\t\t\t\t\t<small>(03/01/2019 - 02/02/2019)</small>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-12\">  \n\t\t\t\t\t\t<div class=\"chart-diagnos chart-box wrap-canavas\" *ngIf=\"!loadingMyClinicScore\">\n\t\t\t\t\t\t\t<canvas baseChart\n\t\t\t\t\t\t\t[datasets]=\"lineChartData\"\n\t\t\t\t\t\t\t[labels]=\"lineChartLabels2\"\n\t\t\t\t\t\t\t[options]=\"lineChartOptions\"\n\t\t\t\t\t\t\t[colors]=\"lineChartColors\"\n\t\t\t\t\t\t\t[legend]=\"lineChartLegend\"\n\t\t\t\t\t\t\t[chartType]=\"lineChartType\"\n\t\t\t\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t\t\t(chartClick)=\"chartClicked($event)\"></canvas>\n\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/opd/opd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OpdComponent = /** @class */ (function () {
    function OpdComponent(userService, toastr, datePipe) {
        this.userService = userService;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.activatedtab = 0;
        this.fromDate = new Date();
        this.toDate = new Date();
        ///////////////////////End Score Variables///////////////
        this.value = "";
        this.lineChartData = [
            { data: [], label: 'Total Sales' },
        ];
        this.lineChartLabels = [];
        this.lineChartLabels2 = [];
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
    OpdComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        ///////////////////// j query code start
        // $('.li-1').click(function({
        // }));
        ///////////////////// j query code end
        this.newPatientArray = [];
        this.oldPatientsArray = [];
        this.minusTen = -10;
        this.five = 5;
        this.fifteen = 15;
        this.fifty = 50;
        this.sixty = 60;
        this.seventyFive = 75;
        this.zero = 0;
        this.thirty = 30;
        this.minusThirty = -30;
        this.one = 1;
        this.ten = 10;
        this.twentyFive = 25;
        /////////////////////////
        this.prescWeighted = 0.5;
        this.collectionWeighted = 0.1;
        this.ctuWeighted = 0.1;
        this.avgTimeWeighted = 0.1;
        this.newPatientWeighted = 0.1;
        this.oldPatientWeighted = 0.1;
        this.pharmacySalesWeighted = 0.5;
        this.pharmacyProfitWeighted = 0.25;
        this.pharmacyRatioWeighted = 0.25;
        this.diagnosisSalesWeighted = 0.7;
        this.diagnosisRationWeighted = 0.3;
        this.ipdSalesWeighted = 0.5;
        this.occWeighted = 0.25;
        this.admissionWeighted = 0.25;
        this.opdCollectionWeighted = 0;
        this.divideByFour = 4;
        this.divideByTen = 10;
        this.overAllRating = 0;
        this.showDataOnGraph = "";
        this.showDateOnGraph = "";
        this.showChartNow = false;
        this.showChartOpdNow = false;
        this.activatetab(3);
    };
    // events
    OpdComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    OpdComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    OpdComponent.prototype.activatetab = function (ii) {
        this.activatedtab = ii;
        var object;
        object = {};
        var date = new Date();
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id;
        object.end_date = new Date();
        if (ii == 0) {
            object.start_date = date;
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
        console.log(object);
        var localFreqArray = [];
        this.totalCollection = 0;
        this.totalPrescriptions = 0;
        this.freqPatientPercentage = 0;
        this.newPatientsPrercenatge = 0;
        this.oldPatients = 0;
        this.avgTime = 0;
        this.opdPharmacySales = 0;
        this.opdDiagonsSales = 0;
        this.ipdfinalTotal = 0;
        this.pharmacyConversion = 0;
        this.diagnosisConversion = 0;
        this.ipdConversion = 0;
        this.opdPhrmacyProfit = 0;
        this.admissionRate = 0;
        this.ipdOccupancy = 0;
        this.totalGeneralBeds = 0;
        this.totalPrivateBeds = 0;
        this.totalSemiPrivateBeds = 0;
        this.doctorArray = [];
        this.newTotalSalesArray = [];
        //this.IpdAnalytics(object)
        this.timeAnalytics(object);
        //this.MyClinicScore(object)
    };
    OpdComponent.prototype.MyClinicScore = function (object) {
        var _this = this;
        var localFreqArray = [];
        this.userService.MyClinicScore(object).subscribe(function (data) {
            console.log(data);
            if (data.response) {
                var avgTimeTotal = 0;
                _this.newPatients = 0;
                var pharmacyTrue = 0;
                var diagnosticsTrue = 0;
                var maxArray = [];
                _this.totalOpdCollArray = [];
                _this.totalOpdOrderArray = [];
                _this.datesArray = [];
                _this.newPatientArray = [];
                _this.oldPatientsArray = [];
                _this.pharmacyArray = [];
                _this.diaonosisArray = [];
                _this.ipdArray = [];
                _this.avgTimeArray = [];
                _this.pharmacyTrueArray = [];
                _this.diagnosticsTrueArray = [];
                _this.pharmacyProfitArray = [];
                _this.avgTimeScore = 0;
                _this.pharmacyWeighted = 0;
                _this.diagnosisWeighted = 0;
                _this.overAllRating = 0;
                _this.oldPatientTrend = 0;
                //this.newPatients = data.dataRegistrations.length 
                var addTime = 0;
                //this.totalPrescriptions = data.data1.length
                for (var i = 0; i < data.data.length; i++) {
                    var totalPatientSeconds = 0;
                    var totalTimeInSeconds = 0;
                    //var addTime = 0
                    for (var j = 0; j < data.data[i].total_sales.length; j++) {
                        _this.newTotalSalesArray.push(data.data[i].total_sales[j]);
                        _this.totalPrescriptions++;
                        if (data.data[i].total_sales[j].registration.fee) {
                            _this.totalCollection += parseInt(data.data[i].total_sales[j].registration.fee);
                        }
                        _this.opdPharmacySales += data.data[i].total_sales[j].pharmacy_sales;
                        _this.opdDiagonsSales += data.data[i].total_sales[j].investigation_cost;
                        _this.opdPhrmacyProfit += data.data[i].total_sales[j].pharmacy_sales - data.data[i].total_sales[j].pharmacy_cost;
                        avgTimeTotal += data.data[i].total_sales[j].registration.hourIntoMin;
                        totalPatientSeconds = (data.data[i].total_sales[j].precription.minutes * 60 + (data.data[i].total_sales[j].precription.seconds)) / 3600;
                        totalTimeInSeconds += data.data[i].total_sales[j].precription.minutes * 60 + (data.data[i].total_sales[j].precription.seconds);
                        addTime += data.data[i].total_sales[j].precription.minutes * 60 + (data.data[i].total_sales[j].precription.seconds);
                        maxArray.push(_this.datePipe.transform(data.data[i].total_sales[j].createdAt, 'yyyy-MM-dd'));
                        if (data.data[i].total_sales[j].registration.lastVisit.status == true) {
                            _this.oldPatients++;
                        }
                        if (data.data[i].total_sales[j].registration.lastVisit.status == false) {
                            _this.newPatients++;
                        }
                        if (data.data[i].total_sales[j].diagnostics) {
                            diagnosticsTrue++;
                        }
                        if (data.data[i].total_sales[j].pharmacy) {
                            pharmacyTrue++;
                        }
                    }
                }
                addTime += totalPatientSeconds;
                console.log(_this.totalPrescriptions);
                _this.avgTime = (addTime / 60) / (_this.totalPrescriptions);
                _this.freqPatientPercentage = (_this.oldPatients * 100) / (_this.totalPrescriptions);
                _this.newPatientsPrercenatge = (_this.newPatients * 100) / (_this.totalPrescriptions);
                _this.pharmacyConversion = (pharmacyTrue * 100) / _this.totalPrescriptions;
                _this.diagnosisConversion = (diagnosticsTrue * 100) / _this.totalPrescriptions;
                /////////////////////////////New and Old patient Unique Array////////////////////
                // var localUniqueArray = []
                // for (var i = 0; i < data.data.length; i++) {
                // 	var boolean = false
                // 	for (var j = 0; j < data.data[i].total_sales.length; j++) {
                // 		for (var a = 0; a < localUniqueArray.length; a++) {
                // 			if(localUniqueArray[a].name == data.data[i].total_sales.registration.pateintName &&
                // 				localUniqueArray[a].name == data.data[i].total_sales.registration.pateintPhone){
                // 				boolean = true
                // 				break;
                // 			}
                // 		}
                // 		if(boolean == false){
                // 			if(data.data[i].total_sales.registration.lastVisit.status==false){
                // 				this.newPatients++
                // 			}else{
                // 				this.oldPatients++
                // 			}
                // 		}
                // 	}
                // }
                /////////////////////////////End New and Old patient Unique Array///////////////
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
                    var total_prep_orders = 0;
                    var new_patients = 0;
                    var old_patient = 0;
                    var pharmacy_sales = 0;
                    var dignostics_sales = 0;
                    var avg_time = 0;
                    var pharmacy_true = 0;
                    var diagnostics_true = 0;
                    var pharmacy_profit = 0;
                    for (var j = 0; j < data.data.length; j++) {
                        var totalPatientSeconds = 0;
                        var totalTimeInSeconds = 0;
                        var addTime = 0;
                        for (var k = 0; k < data.data[j].total_sales.length; k++) {
                            if (newMaxArray[i] == _this.datePipe.transform(data.data[j].total_sales[k].createdAt, 'yyyy-MM-dd')) {
                                //avg_time += data.data[j].total_sales[k].registration.hourIntoMin 
                                totalPatientSeconds = (data.data[j].total_sales[k].precription.minutes * 60 + (data.data[j].total_sales[k].precription.seconds)) / 3600;
                                totalTimeInSeconds += data.data[j].total_sales[k].precription.minutes * 60 + (data.data[j].total_sales[k].precription.seconds);
                                addTime += data.data[j].total_sales[k].precription.minutes * 60 + (data.data[j].total_sales[k].precription.seconds);
                                //total_prep_amount += data.data[j].total_sales[k].pharmacy_sales+data.data[j].total_sales[k].investigation_cost
                                if (data.data[j].total_sales[k].registration.fee) {
                                    total_prep_amount += parseInt(data.data[j].total_sales[k].registration.fee);
                                }
                                total_prep_orders++;
                                if (data.data[j].total_sales[k].registration.lastVisit.status == true) {
                                    old_patient++;
                                }
                                else {
                                    new_patients++;
                                }
                                if (data.data[j].total_sales[k].pharmacy == true) {
                                    pharmacy_sales += data.data[j].total_sales[k].pharmacy_sales;
                                    pharmacy_profit += data.data[j].total_sales[k].pharmacy_sales - data.data[j].total_sales[k].pharmacy_cost;
                                    pharmacy_true++;
                                }
                                if (data.data[j].total_sales[k].diagnostics == true) {
                                    dignostics_sales += data.data[j].total_sales[k].investigation_cost;
                                    diagnostics_true++;
                                }
                            }
                        }
                    }
                    _this.totalOpdCollArray.push(total_prep_amount);
                    _this.totalOpdOrderArray.push(total_prep_orders);
                    _this.newPatientArray.push(new_patients);
                    _this.oldPatientsArray.push(old_patient);
                    _this.pharmacyArray.push(pharmacy_sales);
                    _this.diaonosisArray.push(dignostics_sales);
                    _this.datesArray.push(newMaxArray[i]);
                    _this.pharmacyProfitArray.push(pharmacy_profit);
                    _this.avgTimeArray.push(totalTimeInSeconds);
                    _this.pharmacyTrueArray.push(_this.getData((pharmacy_true * 100) / _this.totalPrescriptions));
                    _this.diagnosticsTrueArray.push(_this.getData((diagnostics_true * 100) / _this.totalPrescriptions));
                }
                //////////////chart/////////////
                _this.lineChartData = [{
                        data: _this.totalOpdCollArray,
                        label: 'Total Sales'
                    }];
                var newDateArray11 = [];
                _this.lineChartLabels = _this.datesArray;
                for (var i = 0; i < _this.datesArray.length; i++) {
                    newDateArray11.push(_this.datesArray[i]);
                }
                _this.opdCollectionTrend = _this.getTrends(_this.totalOpdCollArray);
                _this.newPatientTrend = _this.getTrends(_this.newPatientArray);
                _this.oldPatientTrend = _this.getTrends(_this.oldPatientsArray);
                _this.pharmacyTrends = _this.getTrends(_this.pharmacyArray);
                _this.diagnosticsTrends = _this.getTrends(_this.diaonosisArray);
                _this.totalOrderTrends = _this.getTrends(_this.totalOpdOrderArray);
                _this.PharmacyprofitTrends = _this.getTrends(_this.pharmacyProfitArray);
                _this.PharmacyconversionTrend = _this.getTrends(_this.pharmacyTrueArray);
                _this.diagnosticsConversionTrends = _this.getTrends(_this.diagnosticsTrueArray);
                _this.avgTimeTrends = _this.getTrends(_this.avgTimeArray);
                console.log(_this.newPatientArray);
                if (_this.oldPatientTrend == Infinity) {
                    _this.oldPatientTrend = 1 / _this.oldPatientTrend;
                }
                //this.getTrends(this.totalOpdCollArray)
                _this.sortSales(newDateArray11, _this.totalOpdCollArray);
                _this.sortOrder(newDateArray11, _this.totalOpdOrderArray);
                _this.sortNewPatient(newDateArray11, _this.newPatientArray);
                _this.sortOldPatient(newDateArray11, _this.oldPatientsArray);
                _this.sortPharmacy(newDateArray11, _this.pharmacyArray);
                _this.sortDiagnosis(newDateArray11, _this.diaonosisArray);
                _this.sortTimeArray(newDateArray11, _this.avgTimeArray);
                _this.sortpharmacyTrueArray(newDateArray11, _this.pharmacyTrueArray);
                _this.sortdiagnosticsTrueArray(newDateArray11, _this.diagnosticsTrueArray);
                _this.sortPharmacyProfitArray(newDateArray11, _this.pharmacyProfitArray);
                /////////end chart///////////
                ////////////////////Calculate Score///////////////////
                var profitscore = 0;
                var PharmacyconversionScore = 0;
                var diagnosticsConversionScore = 0;
                profitscore = _this.getScore(_this.PharmacyprofitTrends, _this.five, _this.five, _this.ten, _this.ten, _this.twentyFive, _this.twentyFive);
                PharmacyconversionScore = _this.getScore(_this.PharmacyconversionTrend, _this.fifty, _this.fifty, _this.sixty, _this.sixty, _this.seventyFive, _this.seventyFive);
                diagnosticsConversionScore = _this.getScore(_this.diagnosticsConversionTrends, _this.fifty, _this.fifty, _this.sixty, _this.sixty, _this.seventyFive, _this.seventyFive);
                _this.avgTimeScore = _this.getScore(_this.avgTimeTrends, _this.thirty, _this.zero, _this.thirty, _this.minusThirty, _this.zero, _this.minusThirty);
                _this.opdCollectionScore = _this.getScore(_this.opdCollectionTrend, _this.minusTen, _this.minusTen, _this.five, _this.five, _this.fifteen, _this.fifteen);
                _this.newPatientScore = _this.getScore(_this.newPatientTrend, _this.one, _this.one, _this.five, _this.five, _this.ten, _this.ten);
                _this.oldPatientScore = _this.getScore(_this.oldPatientTrend, _this.ten, _this.ten, _this.thirty, _this.thirty, _this.fifty, _this.fifty);
                _this.pharmacyScores = _this.getScore(_this.pharmacyTrends, _this.minusTen, _this.minusTen, _this.five, _this.five, _this.fifteen, _this.fifteen);
                _this.diagnosticsScores = _this.getScore(_this.diagnosticsTrends, _this.minusTen, _this.minusTen, _this.five, _this.five, _this.fifteen, _this.fifteen);
                _this.totalOrderScores = _this.getScore(_this.totalOrderTrends, _this.minusTen, _this.minusTen, _this.five, _this.five, _this.fifteen, _this.fifteen);
                ////////////////////Over all rating/////////
                _this.overAllRating = 0;
                _this.opdCollectionWeighted = _this.getData((((_this.totalOrderScores * _this.prescWeighted) + (_this.opdCollectionScore * _this.collectionWeighted) +
                    (_this.newPatientScore * _this.newPatientWeighted) + (_this.oldPatientScore * _this.oldPatientWeighted) + (_this.ctuScore * _this.ctuWeighted) +
                    (_this.avgTimeScore * _this.avgTimeWeighted)) * _this.divideByFour) / _this.divideByTen);
                _this.pharmacyWeighted = _this.getData(((_this.pharmacyScores * _this.pharmacySalesWeighted) + (profitscore * _this.pharmacyProfitWeighted) +
                    (PharmacyconversionScore * _this.pharmacyRatioWeighted) * _this.divideByFour) / _this.divideByTen);
                _this.diagnosisWeighted = _this.getData(((_this.diagnosticsScores * _this.diagnosisSalesWeighted) + (diagnosticsConversionScore + _this.diagnosisRationWeighted) *
                    _this.divideByFour) / _this.divideByTen);
                // console.log(parseInt(this.opdCollectionWeighted + this.pharmacyWeighted + this.diagnosisWeighted + this.ipdWeighted))
                // console.log(parseFloat(this.opdCollectionWeighted) + parseFloat(this.pharmacyWeighted) + parseFloat(this.diagnosisWeighted) + parseFloat(this.ipdWeighted))
                // console.log(this.ipdWeighted/4)
                _this.overAllRating = _this.getData((parseFloat(_this.opdCollectionWeighted) + parseFloat(_this.pharmacyWeighted) + parseFloat(_this.diagnosisWeighted) + parseFloat(_this.ipdWeighted)) / _this.divideByFour);
                /////////////////////End Score //////////////////////
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    OpdComponent.prototype.IpdAnalytics = function (object) {
        var _this = this;
        var maxArray1 = [];
        this.ipdDateArray = [];
        this.ipdSalesArray = [];
        this.ipdConversionArray = [];
        this.newIpdConArray = [];
        this.occupencyArray = [];
        this.admissionArray = [];
        var patientAdmitted = 0;
        //object.smart_ipd_id = this.doctorData.smart_ipd_id
        this.ipdfinalTotal = 0;
        var totalIpdLength = 0;
        var dispanseLenght = 0;
        this.ipdScore = 0;
        this.ipdWeighted = 0;
        this.userService.IpdAnalytics(object).subscribe(function (result) {
            console.log(result);
            dispanseLenght = result.dataDispensed.length;
            _this.doctorArray = result.dataDoctors;
            for (var i = 0; i < result.data.length; i++) {
                for (var j = 0; j < result.data[i].dataIpd.length; j++) {
                    patientAdmitted++;
                    totalIpdLength += result.data[i].dataIpd.length;
                    maxArray1.push(_this.datePipe.transform(result.data[i].dataIpd[j].createdAt, 'yyyy/MM/dd'));
                    if (result.data[i].dataIpd[j].total_bill) {
                        _this.ipdfinalTotal += result.data[i].dataIpd[j].total_bill;
                    }
                }
            }
            for (var i = 0; i < _this.doctorArray.length; i++) {
                if (_this.doctorArray[i].type_of_doctor == "admin_doctor") {
                    _this.totalGeneralBeds += _this.doctorArray[i].clinic_services.general_beds;
                    _this.totalPrivateBeds += _this.doctorArray[i].clinic_services.private_beds;
                    _this.totalSemiPrivateBeds += _this.doctorArray[i].clinic_services.semi_private_beds;
                    break;
                }
            }
            _this.ipdOccupancy = (patientAdmitted * 100) / (_this.totalGeneralBeds + _this.totalPrivateBeds + _this.totalSemiPrivateBeds);
            _this.ipdConversion = (totalIpdLength * 100) / result.dataDispensed.length;
            _this.admissionRate = (patientAdmitted * 100) / dispanseLenght;
            var newMaxArray1 = [];
            newMaxArray1.push(maxArray1[0]);
            for (var i = 0; i < maxArray1.length; i++) {
                var boolean = false;
                for (var j = 0; j < newMaxArray1.length; j++) {
                    if (maxArray1[i] == newMaxArray1[j]) {
                        boolean = true;
                        break;
                    }
                }
                if (boolean == false) {
                    newMaxArray1.push(maxArray1[i]);
                }
            }
            for (var i = 0; i < newMaxArray1.length; i++) {
                var total_ipd_amount = 0;
                var ipd_conversion = 0;
                var dispense_patient = 0;
                var patient_admitted = 0;
                for (var j = 0; j < result.data.length; j++) {
                    for (var k = 0; k < result.data[j].dataIpd.length; k++) {
                        if (newMaxArray1[i] == _this.datePipe.transform(result.data[j].dataIpd[k].createdAt, 'yyyy/MM/dd')) {
                            dispense_patient++;
                            patient_admitted++;
                            if (result.data[j].dataIpd[k].total_bill) {
                                total_ipd_amount += result.data[j].dataIpd[k].total_bill;
                            }
                        }
                    }
                }
                _this.admissionArray.push(_this.getData((patient_admitted * 100) / dispanseLenght));
                _this.occupencyArray.push(_this.getData((patient_admitted * 100) / (_this.totalGeneralBeds + _this.totalPrivateBeds + _this.totalSemiPrivateBeds)));
                _this.ipdDateArray.push(newMaxArray1[i]);
                _this.ipdSalesArray.push(total_ipd_amount);
                _this.ipdConversionArray.push(_this.getData((dispense_patient * 100) / dispanseLenght));
            }
            var testDateArray = [];
            var testDateArray2 = [];
            for (var i = 0; i < _this.ipdDateArray.length; i++) {
                _this.newIpdConArray.push(_this.datePipe.transform(_this.ipdDateArray[i], 'dd-MM-yy'));
                testDateArray.push(_this.datePipe.transform(_this.ipdDateArray[i], 'dd-MM-yy'));
                testDateArray2.push(_this.datePipe.transform(_this.ipdDateArray[i], 'dd-MM-yy'));
            }
            //console.log(this.ipdSalesArray)	
            var occRatioTrends;
            var admissionTrends;
            _this.ipdTrends = _this.getTrends(_this.ipdSalesArray);
            occRatioTrends = _this.getTrends(_this.newIpdConArray);
            admissionTrends = _this.getTrends(_this.admissionArray);
            ///////////// score///////////////////
            var occRatioScore = 0;
            var admissionScore = 0;
            occRatioScore = _this.getScore(occRatioTrends, _this.minusTen, _this.minusTen, _this.five, _this.five, _this.fifteen, _this.fifteen);
            admissionScore = _this.getScore(admissionTrends, _this.one, _this.one, _this.five, _this.five, _this.ten, _this.ten);
            _this.ipdScore = _this.getScore(_this.ipdTrends, _this.minusTen, _this.minusTen, _this.five, _this.five, _this.fifteen, _this.fifteen);
            ////////////end Score////////////////
            _this.sortAdmissionArray(testDateArray, _this.admissionArray);
            _this.sortIpdSalesArray(_this.ipdDateArray, _this.ipdSalesArray);
            _this.sortIpdConversionArray(_this.newIpdConArray, _this.ipdConversionArray);
            _this.sortOccupencyArray(testDateArray2, _this.occupencyArray);
            ///////////////////////Score////
            _this.ipdWeighted = _this.getData(((_this.ipdScore * _this.ipdSalesWeighted) + (occRatioTrends * _this.occWeighted) +
                (admissionScore * _this.admissionWeighted) * _this.divideByFour) / _this.divideByTen);
            ///////////////////////end score////////
        }, function (err) {
            console.log(err);
        });
    };
    OpdComponent.prototype.timeAnalytics = function (object) {
        var _this = this;
        this.countMonday = 0;
        this.countTuesday = 0;
        this.countWednesday = 0;
        this.countThursday = 0;
        this.countFriday = 0;
        this.countSaturday = 0;
        this.countSunday = 0;
        var localDateArray = [];
        this.avgCtuPercentage = 0;
        this.totalHours = 0;
        this.totalTimeUtilizedHours = 0;
        this.totalTimeUtilizedMin = 0;
        this.totalMin = 0;
        var totalPatients = 0;
        this.timeArray = [];
        this.timeDateArray = [];
        this.TimePerPatient = 0;
        this.timePerPatientArray = [];
        this.timePatientTrend = 0;
        this.ctuScore = 0;
        var dispense_patient = 0;
        //this.loadingMyClinicScore = true
        this.loading = true;
        this.userService.TimeAnalyticsClinic(object).subscribe(function (result) {
            console.log(result);
            if (result.response) {
                for (var i = 0; i < result.dataTotalPatientsDischarged.length; i++) {
                    dispense_patient += result.dataTotalPatientsDischarged[i].data.length;
                }
                console.log(dispense_patient);
                if (result.totalTimeInSeconds.length > 0) {
                    _this.totalTimeUtilizedHours = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) / 3600);
                    _this.totalTimeUtilizedMin = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) % 3600);
                    _this.totalTimeUtilizedMin = Math.floor(_this.totalTimeUtilizedMin / 60);
                }
                var avgTotalPatientSeconds = 0;
                var addTime = 0;
                var totalTimeInSeconds = 0;
                if (result.dataTotalPatientsDischarged.length > 0) {
                    for (var i = 0; i < result.dataTotalPatientsDischarged.length; i++) {
                        var totalPatientSeconds;
                        totalPatientSeconds = 0;
                        _this.timeDateArray.push(_this.datePipe.transform(result.dataTotalPatientsDischarged[i].data[0].createAt, 'yyyy-MM-dd'));
                        for (var j = 0; j < result.dataTotalPatientsDischarged[i].data.length; j++) {
                            totalPatients++;
                            totalPatientSeconds = (result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)) / 3600;
                            totalTimeInSeconds += result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds);
                            addTime += result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds);
                        }
                        avgTotalPatientSeconds = (totalPatientSeconds / result.dataTotalPatientsDischarged[i].data.length) * 60;
                        addTime += totalPatientSeconds;
                        _this.timeArray.push(totalPatientSeconds.toFixed(3));
                        _this.timePerPatientArray.push(totalTimeInSeconds / 60);
                    }
                    ///////////// hours logic /////////////////////////////
                    var daysOfYear = [];
                    for (var d = _this.fromDate; d <= _this.toDate; d.setDate(d.getDate() + 1)) {
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
                    var timeperpat = 0;
                    console.log(totalTimeInSeconds, dispense_patient);
                    timeperpat = totalTimeInSeconds / dispense_patient;
                    console.log(timeperpat);
                    var min = parseInt(_this.getData(_this.getData(timeperpat) / 60));
                    var sec = parseInt(_this.getData(_this.getData(timeperpat) % 60));
                    _this.TimePerPatient = min + ":" + sec;
                    ///////////////////////////////////////////////////////
                }
                console.log(_this.timeArray);
                _this.avgCtuPercentage = (addTime * 100) / (_this.totalHours * 3600);
                _this.timePatientTrend = _this.getTrends(_this.timePerPatientArray);
                _this.ctuTrend = _this.getTrends(_this.timeArray);
                _this.ctuScore = _this.getScore(_this.ctuTrend, _this.fifty, _this.fifty, _this.sixty, _this.sixty, _this.seventyFive, _this.seventyFive);
                console.log(_this.ctuScore);
                _this.timeSort(_this.timeDateArray, _this.timeArray);
            }
            // this.loadingTwo = true
            _this.IpdAnalytics(object);
            // this.loadingTwo =false
            _this.MyClinicScore(object);
        }, function (err) {
            console.log(err);
        });
    };
    OpdComponent.prototype.getChart = function (id) {
        if (id == 1) {
            this.lineChartData = [{
                    data: this.totalOpdOrderArray,
                    label: 'Total Prescriptions'
                }];
            console.log(this.lineChartLabels);
            this.lineChartLabels = this.datesArray;
            this.showDataOnGraph = "Prescriptions";
            this.showDateOnGraph = this.datePipe.transform(new Date(this.fromDate), 'dd/MM/yyyy'), this.datePipe.transform(new Date(this.toDate), 'dd/MM/yyyy');
        }
        else if (id == 2) {
            this.lineChartData = [{
                    data: this.totalOpdCollArray,
                    label: 'Total Sales'
                }];
            this.lineChartLabels = this.datesArray;
            this.showDataOnGraph = "Sales";
            this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy');
        }
        else if (id == 3) {
            this.lineChartData = [{
                    data: this.oldPatientsArray,
                    label: 'Frequent Patients'
                }];
            this.lineChartLabels = this.datesArray;
            this.showDataOnGraph = "Frequent Patients";
            this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy');
        }
        else if (id == 4) {
            this.lineChartData = [{
                    data: this.newPatientArray,
                    label: 'New Patients'
                }];
            this.lineChartLabels = this.datesArray;
            this.showDataOnGraph = "New Patients";
            this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy');
        }
        else if (id == 5) {
            this.lineChartData = [{
                    data: this.pharmacyArray,
                    label: 'Total Sales'
                }];
            this.lineChartLabels = this.datesArray;
            this.showDataOnGraph = "Sales";
            this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy');
        }
        else if (id == 6) {
            this.lineChartData = [{
                    data: this.diaonosisArray,
                    label: 'Total Sales'
                }];
            this.lineChartLabels = this.datesArray;
            this.showDataOnGraph = "Sales";
            this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy');
        }
        else if (id == 7) {
            this.lineChartData = [{
                    data: this.avgTimeArray,
                    label: 'Avg CTU Time'
                }];
            this.lineChartLabels = this.datesArray;
            this.showDataOnGraph = "Avg CTU Time";
            this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy');
        }
        else if (id == 8) {
            this.lineChartData = [{
                    data: this.pharmacyTrueArray,
                    label: 'Pharmacy Conversion'
                }];
            this.lineChartLabels = this.datesArray;
            this.showDataOnGraph = "Conversion";
            this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy');
        }
        else if (id == 9) {
            this.lineChartData = [{
                    data: this.diagnosticsTrueArray,
                    label: 'Diagnostics Conversion'
                }];
            this.lineChartLabels = this.datesArray;
            this.showDataOnGraph = "Conversion";
            this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy');
        }
        else if (id == 10) {
            this.lineChartData = [{
                    data: this.ipdSalesArray,
                    label: 'Total Sales'
                }];
            var newDateArrayIpd = [];
            for (var i = 0; i < this.ipdDateArray.length; i++) {
                newDateArrayIpd.push(this.datePipe.transform(this.ipdDateArray[i], 'dd-MM-yy'));
            }
            this.lineChartLabels2 = newDateArrayIpd;
            this.showDataOnGraph = "Sales";
            this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy');
        }
        else if (id == 11) {
            this.lineChartData = [{
                    data: this.ipdConversionArray,
                    label: 'Total Conversion'
                }];
            this.lineChartLabels2 = this.newIpdConArray;
            this.showDataOnGraph = "Conversion";
            this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy');
        }
        else if (id == 12) {
            this.lineChartData = [{
                    data: this.timeArray,
                    label: 'Total Hours'
                }];
            var newDateArrayIpd = [];
            for (var i = 0; i < this.timeDateArray.length; i++) {
                newDateArrayIpd.push(this.datePipe.transform(this.timeDateArray[i], 'dd-MM-yy'));
            }
            this.lineChartLabels = newDateArrayIpd;
            this.showDataOnGraph = "Hours";
            this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy');
        }
        else if (id == 13) {
            this.lineChartData = [{
                    data: this.pharmacyProfitArray,
                    label: 'Pharmacy Profit'
                }];
            this.lineChartLabels = this.datesArray;
            this.showDataOnGraph = "Profit";
            this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy');
        }
        else if (id == 14) {
            this.lineChartData = [{
                    data: this.admissionArray,
                    label: 'Admission Rate'
                }];
            // var newDateArrayIpd = []
            // for (var i = 0; i < this.ipdDateArray.length; i++) {
            // 	newDateArrayIpd.push(this.datePipe.transform(this.ipdDateArray[i],'dd-MM-yy'))
            // }
            this.lineChartLabels2 = this.newIpdConArray;
            this.showDataOnGraph = "Admission Rate";
            this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy');
        }
        else if (id == 15) {
            this.lineChartData = [{
                    data: this.occupencyArray,
                    label: 'Total Occupency'
                }];
            this.lineChartLabels2 = this.newIpdConArray;
            this.showDataOnGraph = "Occupency";
            this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy');
        }
    };
    OpdComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    OpdComponent.prototype.getData = function (data) {
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
    OpdComponent.prototype.getClassMap = function (data, i) {
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
    OpdComponent.prototype.sortSales = function (a, b) {
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
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'));
        }
        this.lineChartLabels = newDateArray;
    };
    OpdComponent.prototype.sortOrder = function (a, b) {
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
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'));
        }
        this.lineChartLabels = newDateArray;
    };
    OpdComponent.prototype.sortNewPatient = function (a, b) {
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
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'));
        }
        this.lineChartLabels = newDateArray;
    };
    OpdComponent.prototype.sortOldPatient = function (a, b) {
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
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'));
        }
        this.lineChartLabels = newDateArray;
    };
    OpdComponent.prototype.sortPharmacy = function (a, b) {
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
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'));
        }
        this.lineChartLabels = newDateArray;
    };
    OpdComponent.prototype.sortDiagnosis = function (a, b) {
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
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'));
        }
        this.lineChartLabels = newDateArray;
    };
    OpdComponent.prototype.sortAvgTime = function (a, b) {
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
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'));
        }
        this.lineChartLabels = newDateArray;
    };
    OpdComponent.prototype.sortTimeArray = function (a, b) {
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
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'));
        }
        this.lineChartLabels = newDateArray;
    };
    OpdComponent.prototype.sortpharmacyTrueArray = function (a, b) {
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
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'));
        }
        this.lineChartLabels = newDateArray;
    };
    OpdComponent.prototype.sortdiagnosticsTrueArray = function (a, b) {
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
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'));
        }
        this.lineChartLabels = newDateArray;
    };
    OpdComponent.prototype.sortIpdSalesArray = function (a, b) {
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
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'));
        }
        this.lineChartLabels2 = newDateArray;
    };
    OpdComponent.prototype.sortIpdConversionArray = function (a, b) {
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
        // var newDateArray = []
        // for (var i = 0; i < a.length; i++) {
        // 	newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
        // }
        this.lineChartLabels2 = a;
    };
    OpdComponent.prototype.timeSort = function (a, b) {
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
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'));
        }
        this.lineChartLabels = newDateArray;
    };
    OpdComponent.prototype.sortPharmacyProfitArray = function (a, b) {
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
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'));
        }
        this.lineChartLabels = newDateArray;
    };
    OpdComponent.prototype.sortAdmissionArray = function (a, b) {
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
        this.lineChartLabels = a;
    };
    OpdComponent.prototype.sortOccupencyArray = function (a, b) {
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
        // var newDateArray = []
        // for (var i = 0; i < a.length; i++) {
        // 	newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
        // }
        this.lineChartLabels = a;
    };
    OpdComponent.prototype.tabClicked = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.tabs-new-sum li').removeClass('active');
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.li-2').addClass('active');
    };
    OpdComponent.prototype.tabClicked2 = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.tabs-new-sum li').removeClass('active');
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.li-3').addClass('active');
    };
    OpdComponent.prototype.tabClicked3 = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.tabs-new-sum li').removeClass('active');
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.li-4').addClass('active');
    };
    OpdComponent.prototype.getTrends = function (totalOpdCollArray) {
        var X = 0;
        var Y = 0;
        var xMinusX = [];
        var yMinusY = [];
        var xMinusXSquare = [];
        var xMinusXIntoyMinusY = [];
        var xMinusXIntoyMinusYPlus = 0;
        var xMinusXSquarePlus = 0;
        var m = 0;
        var b = 0;
        var Y1 = 0;
        var Yn = 0;
        var percentageChange = 0;
        //totalOpdCollArray = [34,30,29,15,25,30,33,12,25,20,13,19,15,14,6,6,3,10,6,6,9,12,5]
        var arr = [];
        for (var i = 0; i < totalOpdCollArray.length; i++) {
            arr.push(parseFloat(totalOpdCollArray[i]));
        }
        for (var i = 0; i < arr.length; i++) {
            X += i + 1;
            Y += arr[i];
        }
        X = X / arr.length;
        Y = Y / arr.length;
        for (var i = 0; i < arr.length; i++) {
            xMinusX.push((i + 1) - (X));
            yMinusY.push(arr[i] - Y);
        }
        for (var i = 0; i < xMinusX.length; i++) {
            xMinusXSquare.push(xMinusX[i] * xMinusX[i]);
            xMinusXIntoyMinusY.push(xMinusX[i] * yMinusY[i]);
        }
        for (var i = 0; i < xMinusXSquare.length; i++) {
            xMinusXIntoyMinusYPlus += xMinusXIntoyMinusY[i];
            xMinusXSquarePlus += xMinusXSquare[i];
        }
        m = parseFloat(this.getData(xMinusXIntoyMinusYPlus / xMinusXSquarePlus));
        b = Y - (m * X);
        Y1 = (m * 1) + b;
        Yn = (m * arr.length) + b;
        percentageChange = parseFloat(this.getData(((Yn - Y1) * 100) / Y1));
        //console.log( arr.length,m,b,Y1,Yn, percentageChange)
        return percentageChange;
    };
    OpdComponent.prototype.getScore = function (putScore, one, two, three, four, five, six) {
        var score = 0;
        if (putScore <= one) {
            score = 1;
        }
        else if (one <= two && two >= three) {
            score = 2;
        }
        else if (three <= four && four >= five) {
            score = 3;
        }
        else if (five >= six) {
            score = 4;
        }
        //console.log(score)
        return score;
    };
    OpdComponent.prototype.getNotes = function (note) {
        if (note <= 3) {
            this.value = "";
            return "POOR";
        }
        else if (note <= 5) {
            this.value = "avr";
            return "AVERAGE";
        }
        else if (note <= 8) {
            this.value = "good";
            return "GOOD";
        }
        else if (note < 9) {
            this.value = "exe";
            return "EXCELLENT";
        }
    };
    OpdComponent.prototype.showChart = function () {
        this.showChartNow = true;
    };
    OpdComponent.prototype.showChartOpd = function () {
        this.showChartOpdNow = true;
    };
    OpdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-opd',
            template: __webpack_require__("../../../../../src/app/header-two-layout/opd/opd.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/opd/opd.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], OpdComponent);
    return OpdComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/opd/opd.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdModule", function() { return OpdModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opd_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/opd/opd-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opd_component__ = __webpack_require__("../../../../../src/app/header-two-layout/opd/opd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OpdModule = /** @class */ (function () {
    function OpdModule() {
    }
    OpdModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__opd_routing_module__["a" /* OpdRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__["ChartsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__opd_component__["a" /* OpdComponent */]]
        })
    ], OpdModule);
    return OpdModule;
}());



/***/ }),

/***/ "../../../../ng2-charts/ng2-charts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("../../../../ng2-charts/index.js"));


/***/ })

});
//# sourceMappingURL=opd.module.chunk.js.map