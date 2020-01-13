webpackJsonp(["ipdbook.module"],{

/***/ "../../../../../src/app/header-four-layout/ipdbook/ipdbook-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpdbookRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ipdbook_component__ = __webpack_require__("../../../../../src/app/header-four-layout/ipdbook/ipdbook.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__ipdbook_component__["a" /* IpdbookComponent */]
    }
];
var IpdbookRoutingModule = /** @class */ (function () {
    function IpdbookRoutingModule() {
    }
    IpdbookRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], IpdbookRoutingModule);
    return IpdbookRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-four-layout/ipdbook/ipdbook.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.ipdbook {\n    float: left;\n    width: 100%;\n    padding: 30px 0;\n}\n.table-row {\n    background: -webkit-linear-gradient(top, #d6f8ff 0%, #a3ecff 72%);\n}\n.table {\n    border: 1px solid #eee;\n}\n.history {\n    background-color: transparent;\n}\n.table-row td, .table-head th {\n    border-top: none;\n    padding: 15px 10px;\n}\n.select-duration {\n    padding-bottom: 30px;\n}\n.select-duration h3 {\n    margin: 0;\n}\n.ok-btn {\n    background-color: transparent;\n    border: 1px solid #002160;\n    width: 50px;\n}\n/*.p-search-btn {\n    float: right;\n    position: relative;\n    top: 28px;\n    width: 9%;\n}\n.p-search-btn-in {\n    width: 100%;\n    padding: 9px;\n    border-radius: 6px;\n    background: #fff;\n    border: 1px solid #000;\n}*/\n\n/*table.cstm-table {\n  width: 100%;\n  display: block;\n}\n\n.cstm-table tbody{\n    display:block;\n    overflow:auto;\n    height:100px;\n    width:100%;\n}\n.cstm-table thead {\n  display:block;\n\n}*/\n\ntbody.tbd{\n    display: block;\n    height: 320px;\n    overflow-y:scroll;\n\n}\n\nthead, tbody tr {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n    /* even columns width , fix width of table too*/\n}\n\nthead {\n    width: calc( 100% - 1em)/* scrollbar is average 1em/16px width, remove it from thead width */\n}\n\n.btn-custom {\n    color: #002160;\n    position: relative;\n    padding: 6.5px 17px;\n    border-radius: 4px;\n    font-size: 14px;\n}\n\n.ipdbook {\n    padding: 0px;\n}\n\n.select-duration{\n    padding-bottom: 15px;\n}\n\n.cstm-table thead th{\n    background: #000;\n    color:#fff;\n    border-right: 1px solid #fff;\n    text-align: center;\n}\n\n.cstm-table tbody td{\n    background:#dae5f1;\n    border-right: 1px solid #fff;\n    text-align: center;\n}\n\n/*.ts-btn button{\n    transform: translateX(2.5em);\n}*/\n\n.btn-go button{\n    -webkit-transition: 300ms;\n    transition: 300ms;\n}\n\n.btn-go button:hover{\n    -webkit-transition: 300ms;\n    transition: 300ms;\n    background: #98C74F;\n    border-color: #98C74F;\n    color:#fff;\n}\n\n.dashboard-header-pthree>div {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n}\n\n@media (min-width: 992px){\ndiv.modal-lg.modal-cstm{\n    width: 680px;\n    }\n}\n\n.cstm-row-mr{\n    margin-top:15px;\n}\n\n.cstm-date{\n    padding-top: 18px;\n    min-height: 40px; \n    max-height: 40px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.modal-cstm .modal-header{\n    padding-bottom:8px; \n}\n\n.cstm-ol{\n    margin:0px;\n    padding-left:20px;\n}\n\n.doc-note textarea{\n    resize: none;\n    resize: vertical;\n    margin-bottom: 5px;\n}\n\n.cstm-modal-cnt{\n    min-height: 550px;\n    max-height: 550px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n\n.cstm-h4{\n    position: relative;\n}\n\n.cstm-h4 button{\n    position: absolute;\n    top:0;\n    left: 0;\n}\n\n.btn-33{\n    padding: 6px 30px!important;\n    min-width: 88px!important;\n    height: 30px!important;\n    font-size: 12px;\n}\n\n.table-bordered.my-tab{\n    width: 100%!important;\n}\n\n.mg--top{\n    margin-bottom: 15px;\n}\n\n.table-cstm{\n    width: 100%;\n}\n\n.table-cstm tr td,\n.table-cstm tr th{\n    padding:15px 10px; \n    width:50%;\n}\n\n*/\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.cus-content-wrapper {\n    width: 100%;\n    float: left;\n    padding: 15px;\n}\n\n.cus-content-wrapper .cus-content {\n    margin-left: 0px;\n}\n\n.cus-content {\n    position: relative;\n}\n\n.list-bedul {\n    float: left;\n    padding: 0;\n    width: 100%;\n    margin: 30px 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -moz-flex;\n    display: -o-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    list-style-type: none;\n}\n\n.list-bedul>li {\n    width: 150px;\n    display: inline-block;\n    padding: 0;\n    font-size: 16px;\n    font-weight: 500;\n    text-align: center;\n    letter-spacing: 1.5px;\n    text-transform: uppercase;\n    line-height: 2.3;\n}\n\n.list-bedul>li>span.bed-no {\n    right: 0px;\n    float: none;\n    position: initial;\n    top: 15px;\n}\n\n.list-bedul>li.success {\n    color: #fff;\n    background-color: #00da5f;\n}\n\n.list-bedul>li.danger {\n    color: #fff;\n    background-color: #f32121;\n}\n\n.list-bedul>li.blue {\n    color: #fff;\n    background-color: #01b0f0;\n}\n\n.list-bedul>li>span input.form-control {\n    width: 38px;\n    color: #fff;\n    background: transparent;\n    border: 0;\n    display: inline-block;\n    vertical-align: middle;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    padding: 4px 4px;\n    text-align: right;\n}\n\n.list-bedul>li>span i.fa-pencil {\n    vertical-align: middle;\n    cursor: pointer;\n}\n\n.beds-panel {\n    width: 100%;\n    float: left;\n}\n\n.beds-panel ul {\n    width: 100%;\n    float: left;\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -moz-flex;\n    display: -o-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.beds-panel ul>li {\n    /*width: 15%;*/\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 16.69%;\n            flex: 1 1 16.69%;\n    float: left;\n    max-width: 20%;\n    margin-bottom: 15px;\n    padding: 5px;\n}\n\n.beds-panel ul>li>a {\n    display: block;\n    text-align: center;\n    padding: 10px 5px;\n    background-color: #fff;\n    border: 1px solid #01b0f0;\n    text-transform: uppercase;\n    color: #333;\n    font-weight: 500;\n    -webkit-transition: 0.3s all ease 0s;\n    transition: 0.3s all ease 0s;\n    height: 150px;\n}\n\n.beds-panel ul>li>a:focus {\n    text-decoration: none;\n}\n\n.beds-panel ul>li>a:hover {\n    text-decoration: none;\n    -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, .20);\n            box-shadow: 0 0 20px 0 rgba(0, 0, 0, .20);\n}\n\n.beds-panel ul>li>a img.img-responsive {\n    width: 70px;\n    display: inline-block;\n    margin-bottom: 10px;\n}\n\n.patient-popup, .pat-center {\n    width: 100%;\n    float: left;\n}\n\n.pat-center {\n    text-align: center;\n}\n\n.pat-center>p {\n    font-weight: 600;\n    font-size: 16px;\n    text-transform: uppercase;\n}\n\n.pat-center .pat-img {\n    display: inline-block;\n    position: relative;\n    margin-bottom: 15px;\n    overflow: hidden;\n}\n\n.pat-center .pat-img>img {\n    width: 120px;\n    display: inline-block;\n    border-radius: 100px;\n    height: 120px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.pat-center .pat-img input[type=\"file\"] {\n    border-radius: 100px;\n}\n\n.chart-box {\n    width: 85%;\n    float: left;\n    margin-bottom: 5px;\n}\n\n.chart-box canvas {\n    width: 100%;\n}\n\n.cus-modal .close {\n    font-size: 40px;\n    line-height: 0.6;\n}\n\n.cus-modal .modal-footer>.btn+.btn, .cus-modal .modal-footer>.btn {\n    margin-bottom: 15px;\n}\n\n.modal-footer .addPreset-box {\n    width: auto;\n    padding: 0;\n}\n\n/*himani*/\n\n#activityModal .modal-content {\n    height: 600px;\n    width: 550px;\n    right: 10%;\n\n}\n\n#activityModal .modal-content .modal-title {\n    display: inline-block;\n}\n\n#dischargeModal .modal-footer {\n    border-top: 0;\n    text-align: center;\n}\n\n#dischargeModal .modal-content {\n    width: 650px;\n    right: 20%;\n}\n\n.Dischargesheet-head {\n    font-size: 20px;\n}\n\n.Discharge-clinic-name {\n    text-align: center;\n    font-size: 20px;\n    color: #002160;\n    background-color: #00b0f0;\n    padding: 5px 0px;\n    margin-bottom: 0;\n}\n\n.discharge-popup {\n    margin-bottom: 15px;\n}\n\n.discharge.pat-img img {\n    width: 130px;\n}\n\n.detail-list p {\n    margin-bottom: 5px;\n}\n\n.discharge-date p {\n    color: white;\n    font-weight: bold;\n    font-size: 16px;\n    background-color: #01b0f0;\n    width:45px;\n    text-align: center;\n}\n\n.discharge-note {\n    /*border: 1px solid #aaa;*/\n    /*border-radius: 5px;*/\n    /*padding: 10px;*/\n}\n\n.green {\n    color: green;\n}\n\n.red {\n    color: red;\n}\n\n.yellow {\n    color: #d28d07;\n}\n\n.blue {\n    color: blue;\n}\n\n.grey {\n    color: #ddd;\n}\n\n.greenborder {\n    border: 1px solid green!important;\n}\n\n.redborder {\n    border: 1px solid red!important;\n}\n\n.yellowborder {\n    border: 1px solid #d28d07!important;\n}\n\n.blueborder {\n    border: 1px solid blue!important;\n}\n\n.bed-status {\n    font-size: 16px;\n    margin-right: 30px;\n    margin-bottom: 0;\n    display: inline-block;\n}\n\n.discharge-activity-list {\n    padding: 0;\n    margin: 0;\n}\n\n.discharge-activity-list li {\n    list-style-type: none;\n    padding: 10px;\n    background-color: #eee;\n    border-radius: 5px;\n    -webkit-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);\n            box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);\n    margin-bottom: 15px;\n    border: 1px solid #ddd;\n}\n\n.activity-name {\n    font-size: 17px;\n    color: #00b0f0;\n}\n\n.discharge-activity-list li p {\n    margin-bottom: 0;\n    position: relative;\n}\n\n.edit-icon {\n    color: #00b0f0;\n    font-size: 20px;\n    position: absolute;\n    right: 60px;\n    cursor: pointer;\n}\n\n.dlt-icon {\n    color: #00b0f0;\n    font-size: 20px;\n    position: absolute;\n    right: 30px;\n    cursor: pointer;\n}\n\n.activity-time {\n    position: relative;\n    margin: 20px 0px;\n}\n\n.activity-time::after {\n    content: \"\";\n    background-color: #000;\n    top: 8px;\n    left: 10px;\n    width: 200px;\n    height: 2px;\n    position: absolute;\n}\n\n.activity-time::before {\n    content: \"\";\n    background-color: #000;\n    top: 8px;\n    right: 10px;\n    width: 200px;\n    height: 2px;\n    position: absolute;\n}\n\n#mat-autocomplete-0 {\n    width: 100% !important;\n}\n\n/*.time-select {\n    width: 800px!important;\n    right: 35%!important;\n}\n.time-slots {\n    float: left;\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 20px;\n    \n}\n.time-ul {\n    width: 100%;\n    float: left;\n    margin: 0px;\n    padding: 0;\n    text-align: center;\n    min-height: 90px;\n}\n.time-ul>li {\n    float: left;\n    width: 16%;\n}\n.time-ul>li>a {\n    padding: 6px;\n    border: 1px solid #333;\n    display: block;\n    margin: 5px 5px;\n    background-color: #a8e8ff;\n   \n    color: #000;\n}\n.time-ul>li>a:hover {\n    text-decoration: none;\n    background-color: #000!important;\n    color: #fff!important;\n}\n.already-selected {\n    background-color: #000!important;\n    color: #fff!important;\n}\n.blue-slot {\n    background-color: #a8e8ff!important;\n}\n.grey-slot {\n    background-color: rgba(0, 0, 0, .2)!important;\n}\n*/\n\n.time-cstm {\n    color: rgb(86, 87, 133);\n}\n\n.cstm-modal-ht {\n    min-height: 400px;\n    max-height: 500px;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.li-cstm {\n    position: relative;\n    padding-top: 15px!important;\n}\n\n.li-cstm .cstm-icons {\n    position: absolute;\n    top: 10px;\n    right: -20px;\n}\n\n.btn-cstm {\n    margin-bottom: 15px;\n}\n\ninput.txt-trans, input.txt-trans:hover, input.txt-trans:focus, input.txt-trans:active {\n    border: transparent;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\n\n.sign-usr {\n    min-height: 30px;\n    max-height: 30px;\n}\n\n.input-cstm {\n    height: 25px;\n}\n\n.chrges input {\n    display: inline-block;\n    width: 10%;\n}\n\n.txt-red {\n    color: red;\n    font-size: 13px;\n}\n\n.activity-sheet\n{\n    color: #01b0f0;\n\n}\n\n.mdl-2{\n    padding:0px 5px; \n}\n\n.p-cstm{\n    margin-bottom: 0px;\n    margin-top: 10px;\n}\n\n.cstm-cloz{\n    margin-top:5px;\n}\n\n.div-bg{\n    background-color: #000;\n    float: left;\n    width:100%;\n}\n\n.div-bg h4{\n    color:#fff;\n}\n\n.btn-grin{\n    border-radius: 0px;\n    background:#96CF5A;\n    color: #fff;\n    padding: 10px 15px;\n    -webkit-transform: translateX(15px);\n            transform: translateX(15px);\n}\n\n.table-cstm{\n    width: 100%;\n}\n\n.table-cstm tr td,\n.table-cstm tr th{\n    padding:15px 10px; \n    width:50%;\n}\n\ndiv.wc-date-container{\n    width:48%!important;\n}\n\n.approvedDoctor{\n    text-align: center;\n    margin-top: 70px;\n}\n\n#dischargeModal .modal-content{\n    width: 65em;\n    right: 50%;\n}\n\ntextarea.txt-ar{\n    resize: none;\n    resize:vertical;\n}\n\n.wrap-tab{\n    display: table;\n}\n\n@media (min-width: 992px){\ndiv.modal-lg.modal-cstm{\n    width: 680px;\n    }\n}\n\n.cstm-row-mr{\n    margin-top:15px;\n}\n\n.cstm-date{\n    padding-top: 18px;\n    min-height: 40px; \n    max-height: 40px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.modal-cstm .modal-header{\n    padding-bottom:8px; \n}\n\n.cstm-ol{\n    margin:0px;\n    padding-left:20px;\n}\n\n.doc-note textarea{\n    resize: none;\n    resize: vertical;\n    margin-bottom: 5px;\n}\n\n.cstm-modal-cnt{\n    min-height: 550px;\n    max-height: 550px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n\n.cstm-h4{\n    position: relative;\n}\n\n.cstm-h4 button{\n    position: absolute;\n    top:0;\n    left: 0;\n}\n\n.btn-33{\n    padding: 6px 30px!important;\n    min-width: 88px!important;\n    height: 30px!important;\n    font-size: 12px;\n}\n\n.table-bordered.my-tab{\n    width: 100%!important;\n}\n\n.mg--top{\n    margin-bottom: 15px;\n}\n\ntbody tr:hover{\n    background-color:#b8d9fd!important;    \n}\n\ntbody tr:hover td{\n    background-color:#b8d9fd!important;\n}\n\nth.selected{\n    background-color: #00b0f0!important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-four-layout/ipdbook/ipdbook.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<section class=\"ipdbook\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"dashboard-header-pthree\">\n\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-12 col-xs-12 \">\n\t\t\t\t<div class=\"dashboard-header-logo\" routerLink=\"/header-four-layout/dashboard-ipd\">\n\t\t\t\t\t<img src=\"./assets/imgs/logoDoctm.png\" class=\"img-responsive\" />\n\t\t\t\t\t<div class=\"dshbrd-btn\">\n\t\t\t\t\t\t<button class=\"btn btn-custom\" routerLink=\"/header-four-layout/dashboard-ipd\"> Dashboard </button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-10 col-md-10 col-sm-12 col-xs-12 \">\n\t\t\t\t<div class=\"row\">\n                  \t<div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\n                  \t\t<div class=\"select-duration\">\n                  \t\t\t<h3>Select Duration:</h3>\n                  \t\t</div>\n                  \t</div>\n      \t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-5 col-xs-12\">\n      \t\t\t\t\t<div class=\"row\">\t\n      \t\t\t\t\t\n      \t\t\t\t\t\t<label class=\" col-md-3 col-sm-3 col-xs-12\">From:</label>\n      \t\t\t\t\t\t<div class=\"col-md-9  col-sm-9 col-xs-12\">\n      \t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"fromDate\" [settings]=\"settings\"></angular2-date-picker>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\n      \t\t\t\t\t</div>\n      \t\t\t\t</div>\n      \t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-5 col-xs-12\">\n      \t\t\t\t\t<div class=\"row\">\n      \t\t\t\t\t\t<label class=\" col-md-3 col-sm-3 col-xs-12\">To:</label>\n      \t\t\t\t\t\t<div class=\"col-md-9  col-sm-9 col-xs-12\">\n      \t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"toDate\" [settings]=\"settings\"></angular2-date-picker>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t</div>\n      \t\t\t\t</div>\n                  \t<div class=\"col-lg-1 col-md-1 col-sm-2 col-xs-12\">\n                  \t\t<div class=\"select-duration btn-go\">\n\t\t\t\t\t\t\t<button class=\"btn ok-btn\" type=\"submit\" data-dismiss=\"modal\" (click)='viaDate()'> Go </button>\n                  \t\t</div>\n                  \t</div>\n                </div>\n            \t<div class=\"row\">\n                \t<div class=\"col-lg-11 col-md-11 col-sm-11 col-xs-12\">\n\t                \t<div class=\"form-group\">\n\t                \t\t<input type=\"number\" name=\"\" class=\"form-control\" placeholder=\"Search by invoice\" [(ngModel)]=\"invoiceId\" >\n\t                \t</div>\n                \t</div>\n                \t<div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-11 btn-go\">\n                \t\t<button class=\"btn ok-btn\" (click)=\"FindByInvoiceID()\">Go</button>\n                \t</div>\n                </div>\n\t             \n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t        <div class=\"signup-content-wrapper history\">\n\t            <div class=\"signup-clinicServc\">\n\t                <div class=\"table-doc\">\n\t\t                <div class=\"row\">\n\t\t                     <div class=\"table-responsive\" *ngIf=\"patinetlist.length>0\">\n\t\t\t                        <table matSort (matSortChange)=\"sortData($event)\" cellpadding=\"20px\" class=\"table cstm-table nn-5\">\n\t\t\t                        \t<thead class=\"table-head\">\n\t\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t    <th width=\"60px\"><h4>SNo.</h4></th>\n\t\t\t\t\t\t\t\t\t\t    <th mat-sort-header=\"patientName\" class=\"{{getTableHeaderClass(1)}}\" (click)=\"setTableHeaderClass(1)\"><h4>Name</h4></th>\n\t\t\t\t\t\t\t\t\t\t    <th mat-sort-header=\"procedure\" class=\"{{getTableHeaderClass(2)}}\" (click)=\"setTableHeaderClass(2)\"><h4>Procedure</h4></th>\n\t\t\t\t\t\t\t\t\t\t    <th mat-sort-header=\"first_name\" class=\"{{getTableHeaderClass(3)}}\" (click)=\"setTableHeaderClass(3)\"><h4>Doctor</h4></th>\n\t\t\t\t\t\t\t\t\t\t    <th mat-sort-header=\"createdAt\" class=\"{{getTableHeaderClass(4)}}\" (click)=\"setTableHeaderClass(4)\"><h4>Admission</h4></th>\n\t\t\t\t\t\t\t\t\t\t    <th mat-sort-header=\"discharge_date\" class=\"{{getTableHeaderClass(5)}}\" (click)=\"setTableHeaderClass(5)\"><h4>Discharge</h4></th>\n\t\t\t\t\t\t\t\t\t\t    <th mat-sort-header=\"duration_days\" class=\"{{getTableHeaderClass(6)}}\" (click)=\"setTableHeaderClass(6)\"><h4>Dur(days:hrs)</h4></th>\n\t\t\t\t\t\t\t\t\t\t    <th mat-sort-header=\"invoice\" class=\"{{getTableHeaderClass(7)}}\" (click)=\"setTableHeaderClass(7)\"><h4>Invoice No.</h4></th>\n\t\t\t\t\t\t\t\t\t\t    <th mat-sort-header=\"total_bill\" class=\"{{getTableHeaderClass(8)}}\" (click)=\"setTableHeaderClass(8)\"><h4>Bill (Rs)</h4></th>\n\t\t\t\t\t\t\t\t\t\t    <th><h4>Status</h4></th>\n\t\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t   </thead>\n\t\t\t\t\t\t\t\t\t    <tbody class=\"tbd\">\n\n\t\t\t\t\t\t\t\t\t  <tr class=\"table-row\"  *ngFor=\"let item of sortedData; let i= index;\">\n\t\t\t\t\t\t\t\t\t    <td width=\"60px\">{{i+1}}</td>\n\t\t\t\t\t\t\t\t\t    <td>{{item.patientName}}</td> \n\t\t\t\t\t\t\t\t\t    <td>{{item.procedure}}</td>\n\t\t\t\t\t\t\t\t\t    <td>{{item.consultDoc.first_name}}</td>\n\t\t\t\t\t\t\t\t\t    <td>{{getTimeFiveAndHalfHoursBefore(item.createdAt) | date:'d MMM yy ,h:mm a'}}</td>\n\t\t\t\t\t\t\t\t\t    <td>\n\t\t\t\t\t\t\t\t\t    \t<span *ngIf=\"item.discharge_date\">{{getTimeFiveAndHalfHoursBefore(item.discharge_date) | date:'d MMM yy ,h:mm a'}}</span>\n\t\t\t\t\t\t\t\t\t    </td>\n\t\t\t\t\t\t\t\t\t    <td><span *ngIf=\"item.discharge_date\">{{item.duration_days}} days {{item.duration_hours}} hrs</span></td>\n\t\t\t\t\t\t\t\t\t    <td>\n\t\t\t\t\t\t\t\t\t    \t<span *ngIf=\"item.discharge_date\">{{item.id}}</span>\n\t\t\t\t\t\t\t\t\t    </td>\n\t\t\t\t\t\t\t\t\t    <td>{{item.total_bill}}</td>\n\t\t\t\t\t\t\t\t\t    <td>\n\t\t\t\t\t\t\t\t\t    \t<span *ngIf=\"!item.discharge_date\">Admitted</span>\n\t\t\t\t\t\t\t\t\t    \t<span *ngIf=\"item.discharge_status=='requested_by_ipd'\">Requested</span>\n\t\t\t\t\t\t\t\t\t    \t<span *ngIf=\"item.discharge_status=='approved_by_doctor'\">\n\t\t\t\t\t\t\t\t\t    \t\t<button class=\"btn btn-primary\" (click)=\"printPdfAndDischarge(item)\"> View </button> \n\t\t\t\t\t\t\t\t\t    \t\t<!-- <i class=\"fa fa-download\" (click)=\"printPdfAndDischarge(item)\"></i> -->\n\t\t\t\t\t\t\t\t\t    \t</span>\n\t\t\t\t\t\t\t\t\t    \t<span *ngIf=\"item.discharge_status=='printed'\">View <i class=\"fa fa-download\"></i></span>\n\t\t\t\t\t\t\t\t\t    </td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  </tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t                     </div>\n\t\t                     <div class=\"col-lg-12\" *ngIf=\"patinetlist.length<1\">\n\t\t                     \t<h3 class=\"text-center\">No data found ...</h3>\n\t\t                     </div> \n\t\t                </div>\n\t\t                <div class=\"row\" *ngIf=\"patinetlist.length>0\">\n\t\t                  \t<div class=\"col-md-3 col-lg-offset-1 col-sm-4 col-xs-12 text-center\">\n\t\t                  \t\t<div class=\"sub-total-div\">\n\t\t                  \t\t\t<h4><p>Total patients admitted: <b>{{patientAdmitted}}</b></p></h4>\n\t\t                  \t\t</div>\n\t\t                  \t</div>\n\t\t                  \t<div class=\"col-md-3 col-sm-4 col-xs-12 text-center\">\n\t\t                  \t\t<div class=\"sub-total-div\">\n\t\t                  \t\t\t<h4><p>Total Occupancy Hours: <b>{{totalOccupancy}}</b></p></h4>\n\t\t                  \t\t</div>\n\t\t                  \t</div>\n\t\t                  \t<div class=\"col-md-3 col-sm-4 col-xs-12 text-center\">\n\t\t                  \t\t<div class=\"sub-total-div\">\n\t\t                  \t\t\t<h4><p>Total Bill Value: <b>Rs. {{totalBill}} </b></p></h4>\n\t\t                  \t\t</div>\n\t\t                  \t</div>\n\t\t                  \t<div class=\"col-lg-2 col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf=\"patinetlist.length>0\">\n\t\t                \t\t<div class=\"dshbrd-btn ts-btn\">\n\t\t\t\t\t\t\t\t\t<!-- <button class=\"btn btn-custom\" (click)=\"onGenerateCsv()\"> Export </button> -->\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom\" (click)=\"exportPdf()\"> Export </button>\n\t\t\t\t\t\t\t\t</div>\n\t\t                \t</div>\n\t\t                </div>\n\t                </div>\n\t            </div>\n\t        </div>\n\t\t</div>\n\t</div>\n</section>\n<div class=\"modal fade cus-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" *ngIf=\"openedPatientDetail\">\n  \t<div class=\"modal-dialog wrap-tab\" role=\"document\">\n    \t<div id=\"generatePdfModal\">\n    \t\t<div class=\" text-center\">\n    \t\t\t<h4 class=\"modal-title mg--top\" *ngIf=\"smartIpdData.dataSmartIpd.address && smartIpdData.dataSmartIpd.address.clinic_name\">{{smartIpdData.dataSmartIpd.address.clinic_name}}</h4>\n    \t\t\t<table>\n    \t\t\t\t<tr>\n    \t\t\t\t\t<td>\n    \t\t\t\t\t\t<div class=\"col-lg-6 text-left\">\n\t\t    \t\t\t\t\t<div class=\"\">\n\t\t    \t\t\t\t\t\t<b>Date: </b><span>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.updatedAt) | date:'d MMM yy ,h:mm a' }}</span>\n\t\t    \t\t\t\t\t</div>\n\t\t    \t\t\t\t</div>\n    \t\t\t\t\t</td>\n    \t\t\t\t\t<td>\t\n\t\t    \t\t\t\t<div class=\"col-lg-6 text-right\">\n\t\t    \t\t\t\t\t<div *ngIf=\"smartIpdData.dataSmartIpd.address && smartIpdData.dataSmartIpd.address.address\">{{smartIpdData.dataSmartIpd.address.address}}</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"smartIpdData.dataSmartIpd.address && smartIpdData.dataSmartIpd.address.mobile\">\n\t\t\t\t\t\t\t\tIPD contact: {{smartIpdData.dataSmartIpd.address.mobile}}</div>\n\t\t    \t\t\t\t</div>\t\n    \t\t\t\t\t</td>\n    \t\t\t\t</tr>\n    \t\t\t</table>\n    \t\t</div>\n    \t\t<div class=\"modal-body\">\n    \t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t    \t\t\t<div class=\"patient-popup\">\n\t    \t\t\t\t<div class=\"pat-center\">\n\t\t    \t\t\t\t<div class=\"pat-img\">\n\t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"./assets/imgs/no-person.jpg\">\n\t\t    \t\t\t\t</div>\n\t\t    \t\t\t\t<p>{{openedPatientDetail.patientName}} ({{openedPatientDetail.gender}}), {{openedPatientDetail.age}}Y</p>\n\t\t    \t\t\t</div>\n\t\t    \t\t\t<table class=\"table-cstm\">\n\t\t    \t\t\t\t<tbody>\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Bed Number</th>\n\t\t\t    \t\t\t\t\t<td> \n\t\t\t    \t\t\t\t\t\t<span *ngIf=\"openedPatientDetail.type=='general'\">G</span>\n\t\t                                <span *ngIf=\"openedPatientDetail.type=='private'\">P</span>\n\t\t                                <span *ngIf=\"openedPatientDetail.type=='semi_private'\">SP</span>-{{openedPatientDetail.bed_number}}\n\t\t\t    \t\t\t\t\t</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Ailment/Procedure</th>\n\t\t\t    \t\t\t\t\t<td>{{openedPatientDetail.procedure}}</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\t\n\t\t\t    \t\t\t\t<tr *ngIf=\"openedPatientDetail.prescription_id\">\n\t\t\t    \t\t\t\t\t<th>Prescription ID</th>\n\t\t\t    \t\t\t\t\t<td> {{openedPatientDetail.prescription_id}}</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Mobile Number</th>\n\t\t\t    \t\t\t\t\t<td> +91-{{openedPatientDetail.phone}}</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Consulting Doctor Name</th>\n\t\t\t    \t\t\t\t\t<td>Dr. {{getDoctorName(openedPatientDetail.consultDoc._id)}}</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Admit date and Time</th>\n\t\t\t    \t\t\t\t\t<td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.createdAt) | date:'d MMM yy ,h:mm a' }} </td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Discharge Date and Time</th>\n\t\t\t    \t\t\t\t\t<td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.discharge_date) | date:'d MMM yy ,h:mm a' }}</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\t<tr *ngIf=\"openedPatientDetail.medication.length>0\">\n\t\t\t    \t\t\t\t\t<td colspan=\"2\"> \n\t\t\t    \t\t\t\t\t\t<div class=\"\">\n                                    \t<div><h4><b> Medicines</b></h4></div>\n\t                                    <ol style=\"padding-left:10px\">\n\t                                        <li *ngFor=\"let data of openedPatientDetail.medication\">\n\t                                            <span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n\t                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t                                            </span>\n\t                                            </span>\n\t                                            <span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n\t                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t                                            </span>\n\t                                            </span>\n\t                                            <span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n\t                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n\t                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t                                            </span>\n\t                                            </span>\n\t                                            <span *ngIf=\"data.name=='Drops'\">\n\t                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t                                            </span>\n\t                                            </span>\n\t                                        </li>\n\t                                    </ol>  \n\t                                </div>\n\t\t\t    \t\t\t\t\t</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\t<tr *ngIf=\"openedPatientDetail.woundCare || openedPatientDetail.diet || openedPatientDetail.lifestyle || openedPatientDetail.others\">\n\t\t\t    \t\t\t\t\t<td colspan=\"2\">\n\t\t\t    \t\t\t\t\t\t<div class=\"row\">\n\t\t\t    \t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t    \t\t\t\t\t\t\t\t<h4 *ngIf=\"getDischargeInstructionsStatus()\">\n\t\t\t    \t\t\t\t\t\t\t\t\t<b>Discharge Instructions</b>\n\t\t\t    \t\t\t\t\t\t\t\t</h4>\n\t\t\t    \t\t\t\t\t\t\t\t<h5 *ngIf=\"openedPatientDetail.woundCare && (openedPatientDetail.woundCare.one || openedPatientDetail.woundCare.two)\"><b>Wound Care</b></h5>\n\t\t\t    \t\t\t\t\t\t\t\t<ol class=\"cstm-ol\" *ngIf=\"openedPatientDetail.woundCare && (openedPatientDetail.woundCare.one || openedPatientDetail.woundCare.two)\">\n\t\t\t    \t\t\t\t\t\t\t\t\t<li *ngIf=\"openedPatientDetail.woundCare.one\">{{openedPatientDetail.woundCare.one}}</li>\n\t\t\t    \t\t\t\t\t\t\t\t\t<li *ngIf=\"openedPatientDetail.woundCare.two\">{{openedPatientDetail.woundCare.two}}</li>\n\t\t\t    \t\t\t\t\t\t\t\t</ol>\n\t\t\t    \t\t\t\t\t\t\t\t<h5 *ngIf=\"openedPatientDetail.diet &&  (openedPatientDetail.diet.one || openedPatientDetail.diet.two)\"><b>Diet</b></h5>\n\t\t\t    \t\t\t\t\t\t\t\t<ol class=\"cstm-ol\" *ngIf=\"openedPatientDetail.diet && (openedPatientDetail.diet.one || openedPatientDetail.diet.two)\">\n\t\t\t    \t\t\t\t\t\t\t\t\t<li *ngIf=\"openedPatientDetail.diet.one\">{{openedPatientDetail.diet.one}}</li>\n\t\t\t    \t\t\t\t\t\t\t\t\t<li *ngIf=\"openedPatientDetail.diet.two\">{{openedPatientDetail.diet.two}}</li>\n\t\t\t    \t\t\t\t\t\t\t\t</ol>\n\t\t\t    \t\t\t\t\t\t\t\t<h5 *ngIf=\"openedPatientDetail.lifestyle && (openedPatientDetail.lifestyle.one || openedPatientDetail.lifestyle.two)\"><b>Lifestyle changes</b></h5>\n\t\t\t    \t\t\t\t\t\t\t\t<ol class=\"cstm-ol\" *ngIf=\"openedPatientDetail.lifestyle && (openedPatientDetail.lifestyle.one || openedPatientDetail.lifestyle.two)\">\n\t\t\t    \t\t\t\t\t\t\t\t\t<li *ngIf=\"openedPatientDetail.lifestyle.one\">{{openedPatientDetail.lifestyle.one}}</li>\n\t\t\t    \t\t\t\t\t\t\t\t\t<li *ngIf=\"openedPatientDetail.lifestyle.two\">{{openedPatientDetail.lifestyle.two}}</li>\n\t\t\t    \t\t\t\t\t\t\t\t</ol>\n\t\t\t    \t\t\t\t\t\t\t\t<h5 *ngIf=\"openedPatientDetail.others && (openedPatientDetail.others.one || openedPatientDetail.others.two)\"><b>Other Instructions</b></h5>\n\t\t\t    \t\t\t\t\t\t\t\t<ol class=\"cstm-ol\" *ngIf=\"openedPatientDetail.others && (openedPatientDetail.others.one || openedPatientDetail.others.two)\">\n\t\t\t    \t\t\t\t\t\t\t\t\t<li *ngIf=\"openedPatientDetail.others.one\">{{openedPatientDetail.others.one}}</li>\n\t\t\t    \t\t\t\t\t\t\t\t\t<li *ngIf=\"openedPatientDetail.others.two\">{{openedPatientDetail.others.two}}</li>\n\t\t\t    \t\t\t\t\t\t\t\t</ol>\n\t\t\t    \t\t\t\t\t\t\t\t<h4><b>Doctor Discharge Note</b></h4>\n\t\t\t    \t\t\t\t\t\t\t\t<div class=\"form-group doc-note\">\n\t\t\t\t\t\t\t\t\t\t\t\t  <textarea class=\"form-control\" rows=\"10\" id=\"comment\" value=\"{{openedPatientDetail.doctor_note}}\" readonly=\"\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t</div><br><br>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>(Doctor Signature)</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t    \t\t\t\t\t\t\t</div>\n\t\t\t    \t\t\t\t\t\t</div>\n\t\t\t    \t\t\t\t\t</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t</tbody>\n\t\t    \t\t\t</table>\n\t\t    \t\t\t<div class=\"row\">\n\t\t\t\t    \t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t    \t\t\t<div class=\"patient-popup\">\t\t\n                                     <div><h4><b> Billing</b></h4></div>\n\t\t\t\t    \t\t\t\t<table style=\"width: 80%\" class=\"table-bordered my-tab\">\n\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t    \t\t\t\t\t\t<th>Name</th>\n\t\t\t\t    \t\t\t\t\t\t<td>{{openedPatientDetail.patientName}}</td>\n\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t\t    \t\t\t\t\t<th>Bed Number</th>\n\t\t\t\t\t    \t\t\t\t\t<td> \n\t\t\t\t\t    \t\t\t\t\t\t<span *ngIf=\"openedPatientDetail.type=='general'\">G</span>\n\t\t\t\t                                <span *ngIf=\"openedPatientDetail.type=='private'\">P</span>\n\t\t\t\t                                <span *ngIf=\"openedPatientDetail.type=='semi_private'\">SP</span>-{{openedPatientDetail.bed_number}}\n\t\t\t\t\t    \t\t\t\t\t</td>\n\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t    \t\t\t\n\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t    \t\t\t\t\t<th>Ailment/Procedure</th>\n\t\t\t\t\t    \t\t\t\t\t<td>{{openedPatientDetail.procedure}}</td>\n\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t    \t\t\t\t\n\t\t\t\t\t    \t\t\t\t<tr *ngIf=\"openedPatientDetail.prescription_id\">\n\t\t\t\t\t    \t\t\t\t\t<th>Prescription ID</th>\n\t\t\t\t\t    \t\t\t\t\t<td> {{openedPatientDetail.prescription_id}}</td>\n\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t    \t\t\t\n\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t    \t\t\t\t\t<th>Mobile Number</th>\n\t\t\t\t\t    \t\t\t\t\t<td> +91-{{openedPatientDetail.phone}}</td>\n\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t    \t\t\t\n\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t    \t\t\t\t\t<th>Consulting Doctor Name</th>\n\t\t\t\t\t    \t\t\t\t\t<td>Dr. {{getDoctorName(openedPatientDetail.consultDoc._id)}}</td>\n\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t    \t\t\t\n\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t    \t\t\t\t\t<th>Admit date and Time</th>\n\t\t\t\t\t    \t\t\t\t\t<td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.createdAt) | date:'d MMM yy ,h:mm a' }} </td>\n\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t    \t\t\t\t\t<th>Discharge Date and Time</th>\n\t\t\t\t\t    \t\t\t\t\t<td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.discharge_date) | date:'d MMM yy ,h:mm a' }}</td>\n\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t    \t\t\t</table>\t\t\t\t\t    \t\t\n\t\t\t\t    \t\t\t</div>\n\t\t\t\t    \t\t</div>\n\t\t        \t\t</div>\n\t\t        \t\t<div class=\"row\">\n\t\t\t\t    \t\t<div class=\"col-md-12  col-sm-12 col-xs-12 text-left\">\n\t\t\t\t    \t\t\t<div class=\"patient-popup chrges\">\n\t\t\t\t\t    \t\t\t<h4>Occupancy Charges(a): \n\t\t\t\t\t    \t\t\t\t<span> \n\t\t\t\t\t    \t\t\t\t\t{{openedPatientDetail.occupancy_charges}}\n\t\t\t\t\t    \t\t\t\t</span>\n\t\t\t\t\t    \t\t\t</h4>\n\t\t\t\t    \t\t\t</div>\n\t\t\t\t    \t\t</div>\n\t\t        \t\t</div>\n\t\t        \t\t<div class=\"row\">\n\t\t        \t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t        \t\t\t\t<div class=\"patient-popup discharge-popup\">\n\t\t        \t\t\t\t\t<h4>Other Charges (b):</h4>\n\t\t        \t\t\t\t\t<table class=\"table table-striped table-bordered table-responsive\">\n\t\t\t\t\t\t\t\t\t    <thead>\n\t\t\t\t\t\t\t\t\t      <tr>\n\t\t\t\t\t\t\t\t\t        <th width=\"75px\">Date : Time</th>\n\t\t\t\t\t\t\t\t\t        <th width=\"90px\">Activity</th>\n\t\t\t\t\t\t\t\t\t        <th width=\"100px\">Description</th>\n\t\t\t\t\t\t\t\t\t        <th width=\"80px\">Unit</th>\n\t\t\t\t\t\t\t\t\t        <th width=\"80px\">Rate</th>\n\t\t\t\t\t\t\t\t\t        <th width=\"80px\">Amount</th>\n\t\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t\t    </thead>\n\t\t\t\t\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t\t\t\t      <tr *ngFor=\"let activity of openedPatientDetail.patient_activities; let i = index;\">\n\t\t\t\t\t\t\t\t\t        <td width=\"75px\"> \n\t\t\t\t\t\t\t\t\t        \t{{getTimeFiveAndHalfHoursBefore(activity.createdAt) | date:'d MMM yy ,h:mm a' }}\n\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t        <td width=\"90px\"> \n\t\t\t\t\t\t\t\t\t        \t{{activity.type}}\n\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t    \t<td width=\"100px\">\n\t\t\t\t\t\t\t\t\t    \t\t{{activity.instruction}}\n\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t    \t<td class=\"80px\">\n\t\t\t\t\t\t\t\t\t    \t\t{{activity.unit}}\n\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t        <td class=\"80px\"> \n\t\t\t\t\t\t\t\t\t        \t{{activity.rate}}\n\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t        <td> \n\t\t\t\t\t\t\t\t\t        \t{{activity.amount}}\n\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t     \t<tr class=\"cstm-tr\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\" class=\"text-right\">Total</td>\n\t\t\t\t\t\t\t\t\t\t        <td>{{totalActivitiesAmountPdf}}</td>\n\t\t\t\t\t\t\t\t\t\t   \t</tr>\n\t\t\t\t\t\t\t\t\t\t    <tr class=\"cstm-tr\">  \n\t\t\t\t\t\t\t\t\t\t    \t<td colspan=\"5\" class=\"text-right\">Occupancy Charges</td>\n\t\t\t\t\t\t\t\t\t\t        <td>{{openedPatientDetail.occupancy_charges}}</td>\n\t\t\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t\t\t\t    <tr class=\"cstm-tr\">\t\t\t\t\t\t\t       \n\t\t\t\t\t\t\t\t\t\t        <td colspan=\"5\" class=\"text-right\">Advance Received</td>\n\t\t\t\t\t\t\t\t\t\t        <td>{{openedPatientDetail.advanceReceived}}</td>\n\t\t\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t\t\t\t    <tr class=\"cstm-tr\" *ngIf=\"refundAmountPdf>0\">\n\t\t\t\t\t\t\t\t\t\t        <td colspan=\"5\" class=\"text-right\">Total Refunded</td>\n\t\t\t\t\t\t\t\t\t\t        <td>{{refundAmountPdf}}</td>\n\t\t\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t\t\t\t    <tr class=\"cstm-tr\">\n\t\t\t\t\t\t\t\t\t\t        <td colspan=\"5\" class=\"text-right\">Total Bill</td>\n\t\t\t\t\t\t\t\t\t\t        <td>{{openedPatientDetail.total_bill}}</td>\n\t\t\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t        \t\t\t\t</div>\n\t\t        \t\t\t</div>\n\t\t        \t\t</div>\n\t    \t\t\t</div>\n\t    \t\t</div>\n      \t\t</div>\n\t\t</div>\n  \t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header-four-layout/ipdbook/ipdbook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpdbookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular5_csv_Angular5_csv__ = __webpack_require__("../../../../angular5-csv/Angular5-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular5_csv_Angular5_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular5_csv_Angular5_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IpdbookComponent = /** @class */ (function () {
    function IpdbookComponent(UserService, toastr, datePipe) {
        this.UserService = UserService;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.patinetlist = [];
        this.fromDate = new Date();
        this.toDate = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy',
            defaultOpen: false
        };
        this.newDate = new Date();
        // this.sortedData = this.patinetlist.slice();
    }
    IpdbookComponent.prototype.sortData = function (sort) {
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
    IpdbookComponent.prototype.ngOnInit = function () {
        this.smartIpdData = JSON.parse(localStorage['smartIpdDetails']);
        var dd = this.fromDate.getDate();
        this.fromDate.setDate(1);
        this.fromDate.setMonth(this.fromDate.getMonth() - 1);
        this.fromDate.setDate(this.fromDate.getDate() + dd);
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.viaDate();
        // this.UserService.GetIpdPatientsDataForToday(this.smartIpdData.dataSmartIpd._id).subscribe(data=>{
        //     console.log(data);
        //     if (data.response==true) {
        //         this.totalOccupancy = 0
        //         this.totalBill = 0
        //         this.patinetlist = data.data
        //         for (var i = 0; i < this.patinetlist.length; i++) {
        //             if(this.patinetlist[i].duration_days){
        //                 this.patinetlist[i].product=(this.patinetlist[i].duration_days*24)+this.patinetlist[i].duration_hours
        //             }
        //             this.patinetlist[i].first_name= data.data[i].consultDoc.first_name
        //             if(data.data[i].total_bill){
        //                 this.totalBill = this.totalBill + data.data[i].total_bill
        //             }
        //             if(data.data[i].discharge_date){
        //                 var diff =(new Date(data.data[i].discharge_date).getTime() - new Date(data.data[i].createdAt).getTime()) / 1000;
        //                 diff /= (60 * 60);
        //                 var hoursDifference : number = Math.abs(Math.round(diff))
        //                 this.totalOccupancy = this.totalOccupancy + hoursDifference
        //             }
        //         }
        //         this.sortedData = this.patinetlist.slice();
        //         this.totalOccupancyDays = Math.trunc(this.totalOccupancy / 24)
        //         this.totalOccupancyHours = Math.trunc(this.totalOccupancy % 24)
        //     }
        //     else if(data.response==false){
        //         this.toastr.error(data.message,"Error")
        //     }
        // },err=>{
        //     console.log(err);
        // })
    };
    IpdbookComponent.prototype.viaDate = function () {
        var _this = this;
        this.patientAdmitted = 0;
        if (new Date(this.toDate).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        var object = {
            id: this.smartIpdData.dataSmartIpd._id,
            start_date: this.fromDate,
            end_date: this.toDate
        };
        if (new Date(this.fromDate).setHours(0, 0, 0, 0) > new Date(this.toDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        this.loading = true;
        this.UserService.GetIpdPatientsDataBetweenTwoDates(object).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.invoiceId = null;
                _this.toastr.success(data.message, "Success");
                _this.totalOccupancy = 0;
                _this.totalBill = 0;
                _this.patinetlist = data.data;
                console.log(_this.patinetlist);
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
                    else {
                        _this.patientAdmitted++;
                    }
                }
                console.log(_this.patientAdmitted);
                _this.sortedData = _this.patinetlist.slice();
                _this.totalOccupancyDays = Math.trunc(_this.totalOccupancy / 24);
                _this.totalOccupancyHours = Math.trunc(_this.totalOccupancy % 24);
            }
            else if (data.response == false) {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    IpdbookComponent.prototype.FindByInvoiceID = function () {
        var _this = this;
        if (this.invoiceId == null || this.invoiceId == '' || this.invoiceId == undefined || isNaN(this.invoiceId)) {
            this.toastr.warning("Invalid invoice ID", "Warning");
        }
        else {
            this.UserService.FindByInvoiceID(this.invoiceId).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    _this.toastr.success(data.message, "Success");
                    _this.totalOccupancy = 0;
                    _this.totalBill = 0;
                    _this.patinetlist = data.data;
                    for (var i = 0; i < _this.patinetlist.length; i++) {
                        if (_this.patinetlist[i].discharge_date) {
                            _this.patinetlist[i].product = (_this.patinetlist[i].duration_days * 24) + _this.patinetlist[i].duration_hours;
                        }
                        else {
                            _this.patinetlist[i].product = 0;
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
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    IpdbookComponent.prototype.onGenerateCsv = function () {
        var head = ['Name', 'Procedure', 'Consulting Doctor',
            'Admission Date', 'Discharge Date', 'Invoice No.', 'Duration', 'Bill (Rs)'];
        var csvData = [];
        var totalDuration;
        var dates = [];
        for (var i = 0; i < this.patinetlist.length; i++) {
            var ob;
            ob = {};
            //.split('T')[0],
            ob.patientName = this.patinetlist[i].patientName;
            ob.procedure = this.patinetlist[i].procedure;
            ob.first_name = this.patinetlist[i].first_name;
            var date = this.patinetlist[i].createdAt.split('T');
            ob.createdAt = date[0] + " " + date[1].substr(0, 5);
            if (this.patinetlist[i].discharge_date) {
                var date = this.patinetlist[i].discharge_date.split('T');
                ob.discharge_date = date[0] + " " + date[1].substr(0, 5);
            }
            else {
                ob.discharge_date = "Admitted";
            }
            if (this.patinetlist[i].duration_days) {
                ob.invoice = this.patinetlist[i].id;
            }
            else {
                ob.invoice = "";
            }
            if (this.patinetlist[i].duration_days) {
                ob.totalDuration = this.patinetlist[i].duration_days.toString() + " days " + this.patinetlist[i].duration_hours.toString() + " hrs";
            }
            else {
                ob.duration_days = "";
            }
            if (this.patinetlist[i].total_bill) {
                ob.total_bill = this.patinetlist[i].total_bill;
            }
            else {
                ob.total_bill = "";
            }
            csvData.push(ob);
        }
        csvData.push({
            total: 'Total',
            procedure: '',
            consulting: '',
            admission: '',
            discharge: '',
            invoice: '',
            totdalDuration: this.totalOccupancyDays.toString() + " days " + this.totalOccupancyHours.toString() + " hrs",
            totalResultBill: this.totalBill
        });
        var from = new Date(this.fromDate).toJSON().toString().substr(0, 10);
        var to = new Date(this.toDate).toJSON().toString().substr(0, 10);
        new __WEBPACK_IMPORTED_MODULE_3_angular5_csv_Angular5_csv__["Angular5Csv"](csvData, 'IPD' + "(" + from + " to " + to + ")", { headers: (head) });
    };
    IpdbookComponent.prototype.exportPdf = function () {
        var option = '';
        if (this.invoiceId == null || this.invoiceId == '' || this.invoiceId == undefined) {
            option = ' (' + this.datePipe.transform(this.fromDate, 'dd-MM-yyyy') + " to " + this.datePipe.transform(this.toDate, 'dd-MM-yyyy') + ")";
        }
        var head = [
            { title: '#', dataKey: "id" },
            { title: 'Name', dataKey: "patientName" },
            { title: 'Procedure', dataKey: "procedure" },
            { title: 'Consulting Doctor', dataKey: "first_name" },
            { title: 'Admission Date' + option, dataKey: "createdAt" },
            { title: 'Discharge Date', dataKey: "discharge_date" },
            { title: 'Invoice No.', dataKey: "invoice" },
            { title: 'Duration', dataKey: "totalDuration" },
            { title: 'Bill (Rs)', dataKey: "total_bill" }
        ];
        var csvData = [];
        var totalDuration;
        var dates = [];
        for (var i = 0; i < this.patinetlist.length; i++) {
            var ob;
            ob = {};
            ob.id = i + 1;
            ob.patientName = this.patinetlist[i].patientName;
            ob.procedure = this.patinetlist[i].procedure;
            ob.first_name = this.patinetlist[i].first_name;
            var date = this.patinetlist[i].createdAt.split('T');
            ob.createdAt = date[0] + " " + date[1].substr(0, 5);
            if (this.patinetlist[i].discharge_date) {
                var date = this.patinetlist[i].discharge_date.split('T');
                ob.discharge_date = date[0] + " " + date[1].substr(0, 5);
            }
            else {
                ob.discharge_date = "Admitted";
            }
            if (this.patinetlist[i].discharge_date) {
                ob.invoice = this.patinetlist[i].id;
            }
            else {
                ob.invoice = "";
            }
            if (this.patinetlist[i].duration_days) {
                ob.totalDuration = this.patinetlist[i].duration_days.toString() + " days " + this.patinetlist[i].duration_hours.toString() + " hrs";
            }
            else {
                ob.totalDuration = "";
            }
            if (this.patinetlist[i].total_bill) {
                ob.total_bill = this.patinetlist[i].total_bill;
            }
            else {
                ob.total_bill = "";
            }
            csvData.push(ob);
        }
        csvData.push({
            id: "Total",
            patientName: "",
            procedure: "",
            first_name: "",
            createdAt: "",
            discharge_date: "",
            invoice: "",
            totalDuration: this.totalOccupancyDays.toString() + " days " + this.totalOccupancyHours.toString() + " hrs",
            total_bill: this.totalBill
        });
        var from = new Date(this.fromDate).toJSON().toString().substr(0, 10);
        var to = new Date(this.toDate).toJSON().toString().substr(0, 10);
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
        doc.save('IPD' + "(" + from + " to " + to + ")");
    };
    IpdbookComponent.prototype.getDoctorName = function (id) {
        for (var i = 0; i < this.smartIpdData.doctorsRegisteredForSmartClinic.length; i++) {
            if (this.smartIpdData.doctorsRegisteredForSmartClinic[i]._id.toString() == id.toString()) {
                return this.smartIpdData.doctorsRegisteredForSmartClinic[i].first_name;
            }
        }
    };
    IpdbookComponent.prototype.printPdfAndDischarge = function (patient) {
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
        setTimeout(function () {
            $('#generatePdfModal').printThis({
                debug: false,
                importCSS: true,
                importStyle: true,
                printContainer: true,
                pageTitle: "",
                removeInline: false,
                printDelay: 333,
                header: null,
                formValues: true
            });
        }, 1000);
    };
    IpdbookComponent.prototype.getDischargeInstructionsStatus = function () {
        if ((this.openedPatientDetail.woundCare && (this.openedPatientDetail.woundCare.one || this.openedPatientDetail.woundCare.two)) ||
            (this.openedPatientDetail.diet && (this.openedPatientDetail.diet.one || this.openedPatientDetail.diet.two)) ||
            (this.openedPatientDetail.lifestyle && (this.openedPatientDetail.lifestyle.one || this.openedPatientDetail.lifestyle.two)) ||
            (this.openedPatientDetail.others && (this.openedPatientDetail.others.one || this.openedPatientDetail.others.two))) {
            return true;
        }
        else {
            return false;
        }
    };
    IpdbookComponent.prototype.getTableHeaderClass = function (id) {
        if (this.headerClicked == id) {
            return 'selected';
        }
        else {
            return '';
        }
    };
    IpdbookComponent.prototype.setTableHeaderClass = function (id) {
        this.headerClicked = id;
    };
    IpdbookComponent.prototype.getTimeFiveAndHalfHoursBefore = function (date) {
        return (new Date(date).setMinutes(new Date(date).getMinutes() - 330));
    };
    IpdbookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ipdbook',
            template: __webpack_require__("../../../../../src/app/header-four-layout/ipdbook/ipdbook.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-four-layout/ipdbook/ipdbook.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"]])
    ], IpdbookComponent);
    return IpdbookComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/header-four-layout/ipdbook/ipdbook.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpdbookModule", function() { return IpdbookModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ipdbook_routing_module__ = __webpack_require__("../../../../../src/app/header-four-layout/ipdbook/ipdbook-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ipdbook_component__ = __webpack_require__("../../../../../src/app/header-four-layout/ipdbook/ipdbook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import {DragDropModule} from '@angular/cdk/drag-drop';
// import {ScrollingModule} from '@angular/cdk/scrolling';

// import {CdkTreeModule} from '@angular/cdk/tree';




// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
var IpdbookModule = /** @class */ (function () {
    function IpdbookModule() {
    }
    IpdbookModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__ipdbook_routing_module__["a" /* IpdbookRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                // DragDropModule,
                // ScrollingModule,
                __WEBPACK_IMPORTED_MODULE_5__angular_cdk_table__["m" /* CdkTableModule */],
                // CdkTreeModule,
                __WEBPACK_IMPORTED_MODULE_6__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatInputModule */],
                // BrowserModule,
                __WEBPACK_IMPORTED_MODULE_6__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatSortModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__ipdbook_component__["a" /* IpdbookComponent */]]
        })
    ], IpdbookModule);
    return IpdbookModule;
}());



/***/ }),

/***/ "../../../../angular5-csv/Angular5-csv.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CsvConfigConsts = (function () {
    function CsvConfigConsts() {
    }
    CsvConfigConsts.EOL = "\r\n";
    CsvConfigConsts.BOM = "\ufeff";
    CsvConfigConsts.DEFAULT_FIELD_SEPARATOR = ',';
    CsvConfigConsts.DEFAULT_DECIMAL_SEPARATOR = '.';
    CsvConfigConsts.DEFAULT_QUOTE = '"';
    CsvConfigConsts.DEFAULT_SHOW_TITLE = false;
    CsvConfigConsts.DEFAULT_TITLE = 'My Report';
    CsvConfigConsts.DEFAULT_FILENAME = 'mycsv.csv';
    CsvConfigConsts.DEFAULT_SHOW_LABELS = false;
    CsvConfigConsts.DEFAULT_USE_BOM = true;
    CsvConfigConsts.DEFAULT_HEADER = [];
    CsvConfigConsts.DEFAULT_NO_DOWNLOAD = false;
    return CsvConfigConsts;
}());
exports.CsvConfigConsts = CsvConfigConsts;
exports.ConfigDefaults = {
    filename: CsvConfigConsts.DEFAULT_FILENAME,
    fieldSeparator: CsvConfigConsts.DEFAULT_FIELD_SEPARATOR,
    quoteStrings: CsvConfigConsts.DEFAULT_QUOTE,
    decimalseparator: CsvConfigConsts.DEFAULT_DECIMAL_SEPARATOR,
    showLabels: CsvConfigConsts.DEFAULT_SHOW_LABELS,
    showTitle: CsvConfigConsts.DEFAULT_SHOW_TITLE,
    title: CsvConfigConsts.DEFAULT_TITLE,
    useBom: CsvConfigConsts.DEFAULT_USE_BOM,
    headers: CsvConfigConsts.DEFAULT_HEADER,
    noDownload: CsvConfigConsts.DEFAULT_NO_DOWNLOAD
};
var Angular5Csv = (function () {
    function Angular5Csv(DataJSON, filename, options) {
        this.csv = "";
        var config = options || {};
        this.data = typeof DataJSON != 'object' ? JSON.parse(DataJSON) : DataJSON;
        this._options = objectAssign({}, exports.ConfigDefaults, config);
        if (this._options.filename) {
            this._options.filename = filename;
        }
        this.generateCsv();
    }
    /**
     * Generate and Download Csv
     */
    Angular5Csv.prototype.generateCsv = function () {
        if (this._options.useBom) {
            this.csv += CsvConfigConsts.BOM;
        }
        if (this._options.showTitle) {
            this.csv += this._options.title + '\r\n\n';
        }
        this.getHeaders();
        this.getBody();
        if (this.csv == '') {
            console.log("Invalid data");
            return;
        }
        if (this._options.noDownload) {
            return this.csv;
        }
        var blob = new Blob([this.csv], { "type": "text/csv;charset=utf8;" });
        if (navigator.msSaveBlob) {
            var filename = this._options.filename.replace(/ /g, "_") + ".csv";
            navigator.msSaveBlob(blob, filename);
        }
        else {
            var uri = 'data:attachment/csv;charset=utf-8,' + encodeURI(this.csv);
            var link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.setAttribute('visibility', 'hidden');
            link.download = this._options.filename.replace(/ /g, "_") + ".csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    /**
     * Create Headers
     */
    Angular5Csv.prototype.getHeaders = function () {
        if (this._options.headers.length > 0) {
            var row = "";
            for (var _i = 0, _a = this._options.headers; _i < _a.length; _i++) {
                var column = _a[_i];
                row += column + this._options.fieldSeparator;
            }
            row = row.slice(0, -1);
            this.csv += row + CsvConfigConsts.EOL;
        }
    };
    /**
     * Create Body
     */
    Angular5Csv.prototype.getBody = function () {
        for (var i = 0; i < this.data.length; i++) {
            var row = "";
            for (var index in this.data[i]) {
                row += this.formartData(this.data[i][index]) + this._options.fieldSeparator;
            }
            row = row.slice(0, -1);
            this.csv += row + CsvConfigConsts.EOL;
        }
    };
    /**
     * Format Data
     * @param {any} data
     */
    Angular5Csv.prototype.formartData = function (data) {
        if (this._options.decimalseparator === 'locale' && Angular5Csv.isFloat(data)) {
            return data.toLocaleString();
        }
        if (this._options.decimalseparator !== '.' && Angular5Csv.isFloat(data)) {
            return data.toString().replace('.', this._options.decimalseparator);
        }
        if (typeof data === 'string') {
            data = data.replace(/"/g, '""');
            if (this._options.quoteStrings || data.indexOf(',') > -1 || data.indexOf('\n') > -1 || data.indexOf('\r') > -1) {
                data = this._options.quoteStrings + data + this._options.quoteStrings;
            }
            return data;
        }
        if (typeof data === 'boolean') {
            return data ? 'TRUE' : 'FALSE';
        }
        return data;
    };
    /**
     * Check if is Float
     * @param {any} input
     */
    Angular5Csv.isFloat = function (input) {
        return +input === input && (!isFinite(input) || Boolean(input % 1));
    };
    return Angular5Csv;
}());
exports.Angular5Csv = Angular5Csv;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
/**
 * Convet to Object
 * @param {any} val
 */
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
/**
 * Assign data  to new Object
 * @param {any}   target
 * @param {any[]} ...source
 */
function objectAssign(target) {
    var source = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        source[_i - 1] = arguments[_i];
    }
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (Object.getOwnPropertySymbols) {
            symbols = Object.getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
}
//# sourceMappingURL=Angular5-csv.js.map

/***/ })

});
//# sourceMappingURL=ipdbook.module.chunk.js.map