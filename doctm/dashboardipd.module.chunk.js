webpackJsonp(["dashboardipd.module"],{

/***/ "../../../../../src/app/header-four-layout/dashboardipd/dashboardipd-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardipdRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboardipd_component__ = __webpack_require__("../../../../../src/app/header-four-layout/dashboardipd/dashboardipd.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboardipd_component__["a" /* DashboardipdComponent */]
    }
];
var DashboardipdRoutingModule = /** @class */ (function () {
    function DashboardipdRoutingModule() {
    }
    DashboardipdRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardipdRoutingModule);
    return DashboardipdRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-four-layout/dashboardipd/dashboardipd.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cus-content-wrapper {\n    width: 100%;\n    float: left;\n    padding: 15px;\n}\n.cus-content-wrapper .cus-content {\n    margin-left: 0px;\n}\n.cus-content {\n    position: relative;\n}\n.list-bedul {\n    float: left;\n    padding: 0;\n    width: 100%;\n    margin: 30px 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -moz-flex;\n    display: -o-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    list-style-type: none;\n}\n.list-bedul>li {\n    width: 150px;\n    display: inline-block;\n    padding: 0;\n    font-size: 16px;\n    font-weight: 500;\n    text-align: center;\n    letter-spacing: 1.5px;\n    text-transform: uppercase;\n    line-height: 2.3;\n}\n.list-bedul>li>span.bed-no {\n    right: 0px;\n    float: none;\n    position: initial;\n    top: 15px;\n}\n.list-bedul>li.success {\n    color: #fff;\n    background-color: #00da5f;\n}\n.list-bedul>li.danger {\n    color: #fff;\n    background-color: #f32121;\n}\n.list-bedul>li.blue {\n    color: #fff;\n    background-color: #01b0f0;\n}\n.list-bedul>li>span input.form-control {\n    width: 38px;\n    color: #fff;\n    background: transparent;\n    border: 0;\n    display: inline-block;\n    vertical-align: middle;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    padding: 4px 4px;\n    text-align: right;\n}\n.list-bedul>li>span i.fa-pencil {\n    vertical-align: middle;\n    cursor: pointer;\n}\n.beds-panel {\n    width: 100%;\n    float: left;\n}\n.beds-panel ul {\n    width: 100%;\n    float: left;\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -moz-flex;\n    display: -o-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.beds-panel ul>li {\n    /*width: 15%;*/\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 16.69%;\n            flex: 1 1 16.69%;\n    float: left;\n    max-width: 20%;\n    margin-bottom: 15px;\n    padding: 5px;\n}\n.beds-panel ul>li>a {\n    display: block;\n    text-align: center;\n    padding: 10px 5px;\n    background-color: #fff;\n    border: 1px solid #01b0f0;\n    text-transform: uppercase;\n    color: #333;\n    font-weight: 500;\n    -webkit-transition: 0.3s all ease 0s;\n    transition: 0.3s all ease 0s;\n    height: 150px;\n}\n.beds-panel ul>li>a:focus {\n    text-decoration: none;\n}\n.beds-panel ul>li>a:hover {\n    text-decoration: none;\n    -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, .20);\n            box-shadow: 0 0 20px 0 rgba(0, 0, 0, .20);\n}\n.beds-panel ul>li>a img.img-responsive {\n    width: 70px;\n    display: inline-block;\n    margin-bottom: 10px;\n}\n.patient-popup, .pat-center {\n    width: 100%;\n    float: left;\n}\n.pat-center {\n    text-align: center;\n}\n.pat-center>p {\n    font-weight: 600;\n    font-size: 16px;\n    text-transform: uppercase;\n}\n.pat-center .pat-img {\n    display: inline-block;\n    position: relative;\n    margin-bottom: 15px;\n    overflow: hidden;\n}\n.pat-center .pat-img>img {\n    width: 120px;\n    display: inline-block;\n    border-radius: 100px;\n    height: 120px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.pat-center .pat-img input[type=\"file\"] {\n    border-radius: 100px;\n}\n.chart-box {\n    width: 85%;\n    float: left;\n    margin-bottom: 5px;\n}\n.chart-box canvas {\n    width: 100%;\n}\n.cus-modal .close {\n    font-size: 40px;\n    line-height: 0.6;\n}\n.cus-modal .modal-footer>.btn+.btn, .cus-modal .modal-footer>.btn {\n    margin-bottom: 15px;\n}\n.modal-footer .addPreset-box {\n    width: auto;\n    padding: 0;\n}\n/*himani*/\n#activityModal .modal-content {\n    height: 600px;\n    width: 550px;\n    right: 10%;\n\n}\n#activityModal .modal-content .modal-title {\n    display: inline-block;\n}\n#dischargeModal .modal-footer {\n    border-top: 0;\n    text-align: center;\n}\n#dischargeModal .modal-content {\n    width: 650px;\n    right: 20%;\n}\n.Dischargesheet-head {\n    font-size: 20px;\n}\n.Discharge-clinic-name {\n    text-align: center;\n    font-size: 20px;\n    color: #002160;\n    background-color: #00b0f0;\n    padding: 5px 0px;\n    margin-bottom: 0;\n}\n.discharge-popup {\n    margin-bottom: 15px;\n}\n.discharge.pat-img img {\n    width: 130px;\n}\n.detail-list p {\n    margin-bottom: 5px;\n}\n.discharge-date p {\n    color: white;\n    font-weight: bold;\n    font-size: 16px;\n    background-color: #01b0f0;\n    width:45px;\n    text-align: center;\n}\n.discharge-note {\n    /*border: 1px solid #aaa;*/\n    /*border-radius: 5px;*/\n    /*padding: 10px;*/\n}\n.green {\n    color: green;\n}\n.red {\n    color: red;\n}\n.yellow {\n    color: #d28d07;\n}\n.blue {\n    color: blue;\n}\n.grey {\n    color: #ddd;\n}\n.greenborder {\n    border: 1px solid green!important;\n}\n.redborder {\n    border: 1px solid red!important;\n}\n.yellowborder {\n    border: 1px solid #d28d07!important;\n}\n.blueborder {\n    border: 1px solid blue!important;\n}\n.bed-status {\n    font-size: 16px;\n    margin-right: 30px;\n    margin-bottom: 0;\n    display: inline-block;\n}\n.discharge-activity-list {\n    padding: 0;\n    margin: 0;\n}\n.discharge-activity-list li {\n    list-style-type: none;\n    padding: 10px;\n    background-color: #eee;\n    border-radius: 5px;\n    -webkit-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);\n            box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);\n    margin-bottom: 15px;\n    border: 1px solid #ddd;\n}\n.activity-name {\n    font-size: 17px;\n    color: #00b0f0;\n}\n.discharge-activity-list li p {\n    margin-bottom: 0;\n    position: relative;\n}\n.edit-icon {\n    color: #00b0f0;\n    font-size: 20px;\n    position: absolute;\n    right: 60px;\n    cursor: pointer;\n}\n.dlt-icon {\n    color: #00b0f0;\n    font-size: 20px;\n    position: absolute;\n    right: 30px;\n    cursor: pointer;\n}\n.activity-time {\n    position: relative;\n    margin: 20px 0px;\n}\n.activity-time::after {\n    content: \"\";\n    background-color: #000;\n    top: 8px;\n    left: 10px;\n    width: 200px;\n    height: 2px;\n    position: absolute;\n}\n.activity-time::before {\n    content: \"\";\n    background-color: #000;\n    top: 8px;\n    right: 10px;\n    width: 200px;\n    height: 2px;\n    position: absolute;\n}\n#mat-autocomplete-0 {\n    width: 100% !important;\n}\n/*.time-select {\n    width: 800px!important;\n    right: 35%!important;\n}\n.time-slots {\n    float: left;\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 20px;\n    \n}\n.time-ul {\n    width: 100%;\n    float: left;\n    margin: 0px;\n    padding: 0;\n    text-align: center;\n    min-height: 90px;\n}\n.time-ul>li {\n    float: left;\n    width: 16%;\n}\n.time-ul>li>a {\n    padding: 6px;\n    border: 1px solid #333;\n    display: block;\n    margin: 5px 5px;\n    background-color: #a8e8ff;\n   \n    color: #000;\n}\n.time-ul>li>a:hover {\n    text-decoration: none;\n    background-color: #000!important;\n    color: #fff!important;\n}\n.already-selected {\n    background-color: #000!important;\n    color: #fff!important;\n}\n.blue-slot {\n    background-color: #a8e8ff!important;\n}\n.grey-slot {\n    background-color: rgba(0, 0, 0, .2)!important;\n}\n*/\n.time-cstm {\n    color: rgb(86, 87, 133);\n}\n.cstm-modal-ht {\n    min-height: 400px;\n    max-height: 500px;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n.li-cstm {\n    position: relative;\n    padding-top: 15px!important;\n}\n.li-cstm .cstm-icons {\n    position: absolute;\n    top: 10px;\n    right: -20px;\n}\n.btn-cstm {\n    margin-bottom: 15px;\n}\ninput.txt-trans, input.txt-trans:hover, input.txt-trans:focus, input.txt-trans:active {\n    border: transparent;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\n.sign-usr {\n    min-height: 30px;\n    max-height: 30px;\n}\n.input-cstm {\n    height: 25px;\n}\n.chrges input {\n    display: inline-block;\n    width: 10%;\n}\n.txt-red {\n    color: red;\n    font-size: 13px;\n}\n.activity-sheet\n{\n    color: #01b0f0;\n\n}\n.mdl-2{\n    padding:0px 5px; \n}\n.p-cstm{\n    margin-bottom: 0px;\n    margin-top: 10px;\n}\n.cstm-cloz{\n    margin-top:5px;\n}\n.div-bg{\n    background-color: #000;\n    float: left;\n    width:100%;\n}\n.div-bg h4{\n    color:#fff;\n}\n.btn-grin{\n    border-radius: 0px;\n    background:#96CF5A;\n    color: #fff;\n    padding: 10px 15px;\n    -webkit-transform: translateX(15px);\n            transform: translateX(15px);\n}\n.table-cstm{\n    width: 100%;\n}\n.table-cstm tr td,\n.table-cstm tr th{\n    padding:15px 10px; \n    width:50%;\n}\ndiv.wc-date-container{\n    width:48%!important;\n}\n.approvedDoctor{\n    text-align: center;\n    margin-top: 70px;\n}\n#dischargeModal .modal-content{\n    width: 65em;\n    right: 50%;\n}\ntextarea.txt-ar{\n    resize: none;\n    resize:vertical;\n    height: auto!important;\n}\n.wrap-tab{\n    display: table;\n}\n@media (min-width: 992px){\ndiv.modal-lg.modal-cstm{\n    width: 680px;\n    }\n}\n.cstm-row-mr{\n    margin-top:15px;\n}\n.cstm-date{\n    padding-top: 18px;\n    min-height: 40px; \n    max-height: 40px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.modal-cstm .modal-header{\n    padding-bottom:8px; \n}\n.cstm-ol{\n    margin:0px;\n    padding-left:20px;\n}\n.doc-note textarea{\n    resize: none;\n    resize: vertical;\n    margin-bottom: 5px;\n}\n.cstm-modal-cnt{\n    min-height: 550px;\n    max-height: 550px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n.cstm-h4{\n    position: relative;\n}\n.cstm-h4 button{\n    position: absolute;\n    top:0;\n    left: 0;\n}\n.btn-33{\n    padding: 6px 30px!important;\n    min-width: 88px!important;\n    height: 30px!important;\n    font-size: 12px;\n}\n.table-bordered.my-tab{\n    width: 100%!important;\n}\n.mg--top{\n    margin-bottom: 15px;\n}\n#header-main {\n    position: fixed; \n    width: 100%; \n    top: 0; \n    left: 0; \n    right: 0;\n}\n#footer-main{\n    position: fixed; \n    width: 100%; \n    bottom:0; \n    left: 0; \n    right: 0;\n}\n.pagebreak {\n    page-break-before: always;\n}\n.pdf-table th,\n.pdf-table td{\n    padding:5px 10px;\n    height:20px;\n    line-height:.5;   \n}\n.med-list li{\n    margin:15px 0px; \n}\n/*#main {\n  display: table-row-group;\n}*/\ntr { \n  page-break-inside: avoid !important;\n}\ntd { \n  page-break-inside: avoid !important;\n}\n.cstm-ul-header li{\n    width: 20%!important;\n}\n@media (max-width:768px){\n     ul.cstm-ul-header li{\n        width:100%!important;\n    }\n   \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-four-layout/dashboardipd/dashboardipd.component.html":
/***/ (function(module, exports) {

module.exports = ".<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<section>\n\t<div class=\"container cont-custm\">\n\t\t<div class=\"cus-content-wrapper\">\n\t\t\t<div class=\"cus-content\">\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<div class=\"inner-tab\">\n\t\t\t\t    \t<!-- Nav tabs -->\n\t\t\t\t      \t<ul class=\"nav nav-tabs tabs-cstm cstm-ul-header\" role=\"tablist\">\n\t\t\t\t      \t\t<li role=\"presentation\" class=\"active\"><a href=\"#total\" aria-controls=\"total\" role=\"tab\" data-toggle=\"tab\"> All </a></li>\n\t\t\t\t          \t<li role=\"presentation\"><a href=\"#general\" aria-controls=\"general\" role=\"tab\" data-toggle=\"tab\"> General Bed </a></li>\n\t\t\t\t          \t<li role=\"presentation\"><a href=\"#semiprivate\" aria-controls=\"semiprivate\" role=\"tab\" data-toggle=\"tab\"> Semi-Private Bed </a></li>\n\t\t\t\t          \t<li role=\"presentation\"><a href=\"#private\" aria-controls=\"private\" role=\"tab\" data-toggle=\"tab\"> Private Bed </a></li>\n\t\t\t\t          \t<li role=\"presentation\"><a href=\"#approved\" aria-controls=\"approved\" role=\"tab\" data-toggle=\"tab\"> Approved Patients <span class=\"badge\">{{totalApprovedPatients}}</span></a></li>\n\t\t\t\t      \t</ul>\n\n\t\t\t\t      \t<!-- Tab panes -->\n\t\t\t\t      \t<div class=\"tab-content\" *ngIf=\"adminDoctor\">\n\t\t\t\t      \t\t<div role=\"tabpanel\" class=\"tab-pane active\" id=\"total\">\n\t\t\t\t      \t\t\t<div *ngIf=\"adminDoctor.clinic_services.general_beds && adminDoctor.clinic_services.general_beds>0\">\n\t\t\t\t\t\t\t\t    <ul class=\"list-bedul\">\n\t\t\t\t\t\t\t\t        <li class=\"success\">\n\t\t\t\t\t\t\t\t            Vacant:\n\t\t\t\t\t\t\t\t            <span class=\"bed-no\">\n\t\t\t\t\t\t\t\t              {{genLength}}\n\t\t\t\t\t\t\t\t            </span>\n\t\t\t\t\t\t\t\t        </li>\n\t\t\t\t\t\t\t\t        <li class=\"\">\n\t\t\t\t\t\t\t\t            <h4>\n\t\t\t\t\t\t\t\t                General\n\t\t\t\t\t\t\t\t            </h4>\n\t\t\t\t\t\t\t\t        </li>\n\t\t\t\t\t\t\t\t        <li class=\"danger\">\n\t\t\t\t\t\t\t\t            Occupied:\n\t\t\t\t\t\t\t\t            <span class=\"bed-no\">\n\t\t\t\t\t\t\t\t              {{total_general_beds-genLength}}\n\t\t\t\t\t\t\t\t            </span>\n\t\t\t\t\t\t\t\t        </li>\n\t\t\t\t\t\t\t\t    </ul>\n\t\t\t\t\t\t\t\t    <div class=\"row\">\n\t\t\t\t\t\t\t\t        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t            <div class=\"beds-panel\">\n\t\t\t\t\t\t\t\t                <ul *ngIf=\"generalPatients.length > 0\">\n\t\t\t\t\t\t\t\t                    <li *ngFor=\"let patient of generalPatients;let i = index;\">\n\t\t\t\t\t\t\t\t                        <a (click)=\"openPatientModal(patient.vacant,patient.bed_number,'General Bed',patient)\" class=\"{{getPatientListClassBorder(patient)}}\" data-dismiss=\"modal\" data-toggle=\"modal\" href=\"#javascript:void(0)\">\n\t\t\t\t\t\t\t\t                        \t<p class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t                        \t\tG-{{patient.bed_number}}\n\t\t\t\t\t\t\t\t                        \t</p>\n\t\t\t\t\t\t\t\t                        \t<img class=\"img-responsive\" src=\"{{getImgPatient(patient)}}\"/>\n\t\t\t\t\t\t\t\t                            <p *ngIf=\"patient.vacant\" class=\"green\">\n\t\t\t\t\t\t\t\t                                ------\n\t\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t\t                            <p *ngIf=\"!patient.vacant\" class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t                                {{patient.patientName}}\n\t\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t\t                            <p *ngIf=\"!patient.vacant\" class=\"grey\">\n\t\t\t\t\t\t\t\t                                Dr. {{patient.consultDoc.first_name}}\n\t\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t\t                        </a>\n\t\t\t\t\t\t\t\t                    </li>\n\t\t\t\t\t\t\t\t                </ul>\n\t\t\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"adminDoctor.clinic_services.semi_private_beds && adminDoctor.clinic_services.semi_private_beds>0\">\n\t\t\t\t\t\t\t\t    <ul class=\"list-bedul\">\n\t\t\t\t\t\t\t\t        <li class=\"success\">\n\t\t\t\t\t\t\t\t            Vacant:\n\t\t\t\t\t\t\t\t            <span class=\"bed-no\">\n\t\t\t\t\t\t\t\t               {{semiprivateLen}}\n\t\t\t\t\t\t\t\t            </span>\n\t\t\t\t\t\t\t\t        </li>\n\t\t\t\t\t\t\t\t        <li class=\"\">\n\t\t\t\t\t\t\t\t            <h4>\n\t\t\t\t\t\t\t\t                Semi-Private\n\t\t\t\t\t\t\t\t            </h4>\n\t\t\t\t\t\t\t\t        </li>\n\t\t\t\t\t\t\t\t        <li class=\"danger\">\n\t\t\t\t\t\t\t\t            Occupied:\n\t\t\t\t\t\t\t\t            <span class=\"bed-no\">\n\t\t\t\t\t\t\t\t                {{total_semi_private_beds-semiprivateLen}}\n\t\t\t\t\t\t\t\t            </span>\n\t\t\t\t\t\t\t\t        </li>\n\t\t\t\t\t\t\t\t    </ul>\n\t\t\t\t\t\t\t\t    <div class=\"row\">\n\t\t\t\t\t\t\t\t        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t            <div class=\"beds-panel\">\n\t\t\t\t\t\t\t\t                <ul *ngIf=\"semiPatients.length > 0\">\n\t\t\t\t\t\t\t\t                    <li *ngFor=\"let patient of semiPatients;let i = index;\">\n\t\t\t\t\t\t\t\t                        <a (click)=\"openPatientModal(patient.vacant,patient.bed_number,'Semi Private Bed',patient)\" class=\"{{getPatientListClassBorder(patient)}}\" data-dismiss=\"modal\" data-toggle=\"modal\" href=\"#javascript:void(0)\">\n\t\t\t\t\t\t\t\t                        \t<p class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t                        \t\tSP-{{patient.bed_number}}\n\t\t\t\t\t\t\t\t                        \t</p>\n\t\t\t\t\t\t\t\t                        \t<img class=\"img-responsive\" src=\"{{getImgPatient(patient)}}\"/>\n\t\t\t\t\t\t\t\t                            <p *ngIf=\"patient.vacant\" class=\"green\">\n\t\t\t\t\t\t\t\t                                ------\n\t\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t\t                            <p *ngIf=\"!patient.vacant\" class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t                                {{patient.patientName}}\n\t\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t\t                            <p *ngIf=\"!patient.vacant\" class=\"grey\">\n\t\t\t\t\t\t\t\t                                Dr. {{patient.consultDoc.first_name}}\n\t\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t\t                        </a>\n\t\t\t\t\t\t\t\t                    </li>\n\t\t\t\t\t\t\t\t                </ul>\n\t\t\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"adminDoctor.clinic_services.private_beds && adminDoctor.clinic_services.private_beds>0\">\n\t\t\t\t\t\t\t\t    <ul class=\"list-bedul\">\n\t\t\t\t\t\t\t\t        <li class=\"success\">\n\t\t\t\t\t\t\t\t            Vacant:\n\t\t\t\t\t\t\t\t            <span class=\"bed-no\">\n\t\t\t\t\t\t\t\t              {{privateLen}}\n\t\t\t\t\t\t\t\t            </span>\n\t\t\t\t\t\t\t\t        </li>\n\t\t\t\t\t\t\t\t        <li class=\"\">\n\t\t\t\t\t\t\t\t            <h4>\n\t\t\t\t\t\t\t\t                Private\n\t\t\t\t\t\t\t\t            </h4>\n\t\t\t\t\t\t\t\t        </li>\n\t\t\t\t\t\t\t\t        <li class=\"danger\">\n\t\t\t\t\t\t\t\t            Occupied:\n\t\t\t\t\t\t\t\t            <span class=\"bed-no\">\n\t\t\t\t\t\t\t\t                {{total_private_beds-privateLen}}\n\t\t\t\t\t\t\t\t            </span>\n\t\t\t\t\t\t\t\t        </li>\n\t\t\t\t\t\t\t\t    </ul>\n\t\t\t\t\t\t\t\t    <div class=\"row\">\n\t\t\t\t\t\t\t\t        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t            <div class=\"beds-panel\" >\n\t\t\t\t\t\t\t\t                <ul *ngIf=\"privatePatients.length > 0\">\n\t\t\t\t\t\t\t\t                    <li *ngFor=\"let patient of privatePatients;let i = index;\">\n\t\t\t\t\t\t\t\t                        <a (click)=\"openPatientModal(patient.vacant,patient.bed_number,'Private Bed',patient)\" class=\"{{getPatientListClassBorder(patient)}}\" data-dismiss=\"modal\" data-toggle=\"modal\" href=\"#javascript:void(0)\">\n\t\t\t\t\t\t\t\t                        \t<p class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t                        \t\tP-{{patient.bed_number}}\n\t\t\t\t\t\t\t\t                        \t</p>\n\t\t\t\t\t\t\t\t                        \t<img class=\"img-responsive\" src=\"{{getImgPatient(patient)}}\"/>\n\t\t\t\t\t\t\t\t                            <p *ngIf=\"patient.vacant\" class=\"green\">\n\t\t\t\t\t\t\t\t                                ------\n\t\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t\t                            <p *ngIf=\"!patient.vacant\" class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t\t                                {{patient.patientName}}\n\t\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t\t                            <p *ngIf=\"!patient.vacant\" class=\"grey\">\n\t\t\t\t\t\t\t\t                                Dr. {{patient.consultDoc.first_name}}\n\t\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t\t                        </a>\n\t\t\t\t\t\t\t\t                    </li>\n\t\t\t\t\t\t\t\t                </ul>\n\t\t\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t          \t</div>\n\t\t\t\t          \t<div role=\"tabpanel\" class=\"tab-pane\" id=\"general\" >\n\t\t\t\t          \t\t<ul class=\"list-bedul\">\n\t\t\t\t          \t\t\t<li class=\"success\">\n\t\t\t\t          \t\t\t\tVacant: <span class=\"bed-no\" >{{genLength}}</span>\n\t\t\t\t          \t\t\t</li>\n\t\t\t\t          \t\t\t<li class=\"danger\">\n\t\t\t\t          \t\t\t\tOccupied: <span class=\"bed-no\"> {{total_general_beds-genLength}} </span>\n\t\t\t\t          \t\t\t</li>\n\t\t\t\t          \t\t</ul>\n\n\t\t\t\t          \t\t<div class=\"row\">\n\t\t\t\t\t          \t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t          \t\t\t<div class=\"beds-panel\">\n\t\t\t\t\t\t          \t\t\t<ul>\n\t\t\t\t\t\t          \t\t\t\t<li *ngFor=\"let patient of generalPatients;let i = index;\">\n\t\t\t\t\t\t\t                        <a (click)=\"openPatientModal(patient.vacant,patient.bed_number,'General Bed',patient)\" class=\"{{getPatientListClassBorder(patient)}}\" data-dismiss=\"modal\" data-toggle=\"modal\" href=\"#javascript:void(0)\">\n\t\t\t\t\t\t\t                        \t<p class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t                        \t\tG-{{patient.bed_number}}\n\t\t\t\t\t\t\t                        \t</p>\n\t\t\t\t\t\t\t                        \t<img class=\"img-responsive\" src=\"{{getImgPatient(patient)}}\"/>\n\t\t\t\t\t\t\t                            <p *ngIf=\"patient.vacant\" class=\"green\">\n\t\t\t\t\t\t\t                                ------\n\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t                            <p *ngIf=\"!patient.vacant\" class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t                                {{patient.patientName}}\n\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t                            <p *ngIf=\"!patient.vacant\" class=\"grey\">\n\t\t\t\t\t\t\t                                Dr. {{patient.consultDoc.first_name}}\n\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t                        </a>\n\t\t\t\t\t\t\t                    </li>\n\t\t\t\t\t\t          \t\t\t</ul>\n\t\t\t\t\t          \t\t\t</div>\n\t\t\t\t\t          \t\t</div>\n\t\t\t\t\t          \t</div>\n\t\t\t\t          \t</div>\n\t\t\t\t          \t<div role=\"tabpanel\" class=\"tab-pane\" id=\"semiprivate\">  \n\t\t\t\t          \t\t<ul class=\"list-bedul\">\n\t\t\t\t          \t\t\t<li class=\"success\">\n\t\t\t\t          \t\t\t\tVacant: <span class=\"bed-no\"> {{semiprivateLen}} </span>\n\t\t\t\t          \t\t\t</li>\n\t\t\t\t          \t\t\t<li class=\"danger\">\n\t\t\t\t          \t\t\t\tOccupied: <span class=\"bed-no\"> {{total_semi_private_beds-semiprivateLen}} </span>\n\t\t\t\t          \t\t\t</li>\n\t\t\t\t          \t\t</ul>\n\n\t\t\t\t          \t\t<div class=\"row\">\n\t\t\t\t\t          \t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t          \t\t\t<div class=\"beds-panel\">\n\t\t\t\t\t\t          \t\t\t<ul>\n\t\t\t\t\t\t          \t\t\t\t<li *ngFor=\"let patient of semiPatients;let i = index;\">\n\t\t\t\t\t\t\t                        <a (click)=\"openPatientModal(patient.vacant,patient.bed_number,'Semi Private Bed',patient)\"class=\"{{getPatientListClassBorder(patient)}}\" data-dismiss=\"modal\" data-toggle=\"modal\" href=\"#javascript:void(0)\">\n\t\t\t\t\t\t\t                        \t<p class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t                        \t\tSP-{{patient.bed_number}}\n\t\t\t\t\t\t\t                        \t</p>\n\t\t\t\t\t\t\t                        \t<img class=\"img-responsive\" src=\"{{getImgPatient(patient)}}\"/>\n\t\t\t\t\t\t\t                            <p *ngIf=\"patient.vacant\" class=\"green\">\n\t\t\t\t\t\t\t                                ------\n\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t                            <p *ngIf=\"!patient.vacant\" class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t                                {{patient.patientName}}\n\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t                            <p *ngIf=\"!patient.vacant\" class=\"grey\">\n\t\t\t\t\t\t\t                                Dr. {{patient.consultDoc.first_name}}\n\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t                        </a>\n\t\t\t\t\t\t\t                    </li>\t\n\t\t\t\t\t\t          \t\t\t</ul>\n\t\t\t\t\t          \t\t\t</div>\n\t\t\t\t\t          \t\t</div>\n\t\t\t\t\t          \t</div>\n\t\t\t\t          \t</div>\n\t\t\t\t          \t<div role=\"tabpanel\" class=\"tab-pane\" id=\"private\">\n\t\t\t\t          \t\t<ul class=\"list-bedul\">\n\t\t\t\t          \t\t\t<li class=\"success\">\n\t\t\t\t          \t\t\t\tVacant: <span class=\"bed-no\">  {{privateLen}} </span>\n\t\t\t\t          \t\t\t</li>\n\t\t\t\t          \t\t\t<li class=\"danger\">\n\t\t\t\t          \t\t\t\tOccupied: <span class=\"bed-no\"> {{total_private_beds-privateLen}} </span>\n\t\t\t\t          \t\t\t</li>\n\t\t\t\t          \t\t</ul>\n\n\t\t\t\t          \t\t<div class=\"row\">\n\t\t\t\t\t          \t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t          \t\t\t<div class=\"beds-panel\">\n\t\t\t\t\t\t          \t\t\t<ul>\n\t\t\t\t\t\t          \t\t\t\t<li *ngFor=\"let patient of privatePatients;let i = index;\">\n\t\t\t\t\t\t\t                        <a (click)=\"openPatientModal(patient.vacant,patient.bed_number,'Private Bed',patient)\"class=\"{{getPatientListClassBorder(patient)}}\" data-dismiss=\"modal\" data-toggle=\"modal\" href=\"#javascript:void(0)\">\n\t\t\t\t\t\t\t                        \t<p class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t                        \t\tP-{{patient.bed_number}}\n\t\t\t\t\t\t\t                        \t</p>\n\t\t\t\t\t\t\t                        \t<img class=\"img-responsive\" src=\"{{getImgPatient(patient)}}\"/>\n\t\t\t\t\t\t\t                            <p *ngIf=\"patient.vacant\" class=\"green\">\n\t\t\t\t\t\t\t                                ------\n\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t                            <p *ngIf=\"!patient.vacant\" class=\"{{getPatientListClass(patient)}}\">\n\t\t\t\t\t\t\t                                {{patient.patientName}}\n\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t                            <p *ngIf=\"!patient.vacant\" class=\"grey\">\n\t\t\t\t\t\t\t                                Dr. {{patient.consultDoc.first_name}}\n\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t                        </a>\n\t\t\t\t\t\t\t                    </li>\n\t\t\t\t\t\t          \t\t\t</ul>\n\t\t\t\t\t          \t\t\t</div>\n\t\t\t\t\t          \t\t</div>\n\t\t\t\t\t          \t</div>\n\t\t\t\t          \t</div>\n\t\t\t\t          \t<div role=\"tabpanel\" class=\"tab-pane\" id=\"approved\">\n\t\t\t\t          \t\t<div *ngFor=\"let approvals of approvedPatients\">\n\t\t\t\t\t          \t\t<h3 class=\"approvedDoctor\">\n\t\t\t\t\t\t                Dr. {{getDoctorName(approvals._id)}}\n\t\t\t\t\t\t            </h3>\n\t\t\t\t\t          \t\t<div class=\"row\">\n\t\t\t\t\t\t          \t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t          \t\t\t<div class=\"beds-panel\">\n\t\t\t\t\t\t\t          \t\t\t<ul>\n\t\t\t\t\t\t\t          \t\t\t\t<li *ngFor=\"let patient of approvals.approvedPatients;let i = index;\">\n\t\t\t\t\t\t\t\t                        <a (click)=\"openPatientModal(patient.vacant,patient.bed_number,'Semi Private Bed',patient)\" class=\"blueborder\" data-dismiss=\"modal\" data-toggle=\"modal\" href=\"#javascript:void(0)\">\n\t\t\t\t\t\t\t\t                        \t<p class=\"blue\">\n\t\t\t\t\t\t\t\t\t                        \t<span *ngIf=\"patient.type=='general'\">G</span>\n\t\t\t\t\t\t\t\t                                <span *ngIf=\"patient.type=='private'\">P</span>\n\t\t\t\t\t\t\t\t                                <span *ngIf=\"patient.type=='semi_private'\">SP</span>-{{patient.bed_number}}\n\t\t\t\t\t\t\t\t                        \t</p>\n\t\t\t\t\t\t\t\t                        \t<img class=\"img-responsive\" src=\"{{getImgPatient(patient)}}\"/>\n\t\t\t\t\t\t\t\t                            <p class=\"blue\">\n\t\t\t\t\t\t\t\t                                {{patient.patientName}}\n\t\t\t\t\t\t\t\t                            </p>\n\t\t\t\t\t\t\t\t                            <!-- <p class=\"grey\">\n\t\t\t\t\t\t\t\t                                Dr. {{getDoctorName(approvals._id)}}\n\t\t\t\t\t\t\t\t                            </p> -->\n\t\t\t\t\t\t\t\t                        </a>\n\t\t\t\t\t\t\t\t                    </li>\n\t\t\t\t\t\t\t          \t\t\t</ul>\n\t\t\t\t\t\t          \t\t\t</div>\n\t\t\t\t\t\t          \t\t</div>\n\t\t\t\t\t\t          \t</div>\n\t\t\t\t\t\t        </div>\n\t\t\t\t          \t</div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!-- model -->\n<div class=\"modal fade cus-modal\" id=\"patientModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  \t<div class=\"modal-dialog\" role=\"document\">\n    \t<div class=\"modal-content\">\n    \t\t<div class=\"modal-header\">\n    \t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n    \t\t\t<h4 class=\"modal-title\"> Patient Details </h4>\n    \t\t</div>\n    \t\t<div class=\"modal-body newform-margin\" *ngIf=\"openedPatientDetail\">\n        \t\t<div class=\"row\">\n\t\t    \t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t    \t\t\t<div class=\"patient-popup\">\n\t\t    \t\t\t\t<div class=\"pat-center\">\n\t\t\t    \t\t\t\t<div class=\"pat-img\">\n\t\t\t    \t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!openedPatientDetail.imgSrc\"/>\n\t                                <img src=\"{{pateintPicPath}}{{openedPatientDetail.imgSrc}}\" class=\"img-responsive\" *ngIf=\"openedPatientDetail.imgSrc\"/>\n\t\t\t    \t\t\t\t</div>\n\t\t\t    \t\t\t\t<p> {{openedPatientDetail.patientName}} ({{openedPatientDetail.gender}}), {{openedPatientDetail.age}}Y </p>\n\t\t\t    \t\t\t</div>\n\t\t\t    \t\t\t<!-- <p> <label>Bed number:</label> {{bedType.print}}-{{openedPatientDetail.bed_number}} </p>\n\t\t\t    \t\t\t<p> <label>Ailment/Procedure: </label> {{openedPatientDetail.procedure}} </p>\n\t\t\t    \t\t\t<p> <label>Patient ID:</label> {{openedPatientDetail.id}} </p>\n\t\t\t    \t\t\t<p *ngIf=\"openedPatientDetail.prescription_id\"> <label>Prescription ID:</label> {{openedPatientDetail.prescription_id}} </p>\n\t\t\t    \t\t\t<p *ngIf=\"!openedPatientDetail.prescription_id\"> <label>Prescription ID:</label> -- </p>\n\t\t\t    \t\t\t<p> <label>Mobile Number:</label> +91-{{openedPatientDetail.phone}} </p>\n\t\t\t    \t\t\t<p> <label>Consulting Doctor Name:</label> Dr. {{openedPatientDetail.consultDoc.first_name}} </p>\n\t\t\t    \t\t\t<p> <label>Admit date and Time:</label> {{openedPatientDetail.createdAt | date:'d MMM yy ,h:mm a' }} </p> -->\n\t\t\t    \t\t\t<table class=\"table-bordered table-cstm\">\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Bed Number</th>\n\t\t\t    \t\t\t\t\t<td> {{bedType.print}}-{{openedPatientDetail.bed_number}}</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Ailment/Procedure</th>\n\t\t\t    \t\t\t\t\t<td>{{openedPatientDetail.procedure}}</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\t\n\t\t\t    \t\t\t\t<tr *ngIf=\"openedPatientDetail.prescription_id\">\n\t\t\t    \t\t\t\t\t<th>Prescription ID</th>\n\t\t\t    \t\t\t\t\t<td> {{openedPatientDetail.prescription_id}}</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Mobile Number</th>\n\t\t\t    \t\t\t\t\t<td> +91-{{openedPatientDetail.phone}}</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Consulting Doctor Name</th>\n\t\t\t    \t\t\t\t\t<td>Dr. {{openedPatientDetail.consultDoc.first_name}}</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Admit date and Time</th>\n\t\t\t    \t\t\t\t\t<td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.createdAt) | date:'d MMM yy ,h:mm a' }} </td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t</table>\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n        \t\t</div>\n      \t\t</div>\n\n      \t\t<div class=\"modal-footer\">\n      \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n      \t\t\t\t<button class=\"full-width btn btn-custom\" type=\"button\" (click)=\"openConfirmationDialog()\"> Billing </button>\n      \t\t\t</div>\n      \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n      \t\t\t\t<button class=\"full-width btn btn-custom\" type=\"button\" (click)=\"openActivitySheet()\"> Activity Sheet </button>\n      \t\t\t</div>\n\n      \t\t</div>\n\n\t\t</div>\n  \t</div>\n</div>\n\n<div class=\"modal fade cus-modal\" id=\"addpatientModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  \t<div class=\"modal-dialog\" role=\"document\">\n    \t<div class=\"modal-content\">\n    \t\t<div class=\"modal-header\">\n    \t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=resetForm()><span aria-hidden=\"true\">&times;</span></button>\n    \t\t\t<h4 class=\"modal-title\"> {{bedType.print}}-{{bedNumber}}  </h4>\n    \t\t</div>\n    \t\t<div class=\"modal-body newform-margin\">\n        \t\t<div class=\"row\">\n\t\t    \t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\n\t\t    \t\t\t<div class=\"patient-popup\" *ngIf=\"!webCam\">\n\t\t    \t\t\t\t<form [formGroup]=\"registerForm\">\n\t\t    \t\t\t\t<div class=\"pat-center\">\n\t\t\t    \t\t\t\t<div class=\"pat-img\">\n\t\t\t    \t\t\t\t\t<img src=\"{{imgSrc}}\" class=\"img-responsive\" (click)=\"openWebCam()\"/>\n\t\t\t    \t\t\t\t\t<i class=\"fa fa-edit\" (click)=\"openWebCam()\"></i>\n\t\t\t    \t\t\t\t</div>\n\t\t\t    \t\t\t\t<!-- <small (click)=\"openWebCam()\" class=\"text-center\">Click to update</small> -->\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t\t<div class=\" col-md-12 col-sm-12 col-xs-12\">\n\t\t\t                    <div class=\"input-group fieldDesign\">\n\t\t\t                        <span class=\"input-group-addon\">+91</span>\n\t\t\t                        <input class=\"form-control txtfield\" name=\"\" placeholder=\"Mobile Number\" type=\"text\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"addpatientModal.phone\" (blur)=\"findPatientNameFromPhone($event.target.value)\" [formControl]=\"registerForm.controls['phone']\">\n\t\t\t                    </div>\n\t\t\t                    <p style=\"color: #FF0000\" *ngIf=\"!registerForm.controls['phone'].valid  && ( registerForm.controls['phone'].touched)\">Invalid Phone Number !!!</p>\n\t\t\t                </div>\n\t        \t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t        \t\t\t\t\t<div class=\"fieldDesign\">\n\t\t        \t\t\t\t\t<input id=\"field2\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[a-zA-z0-9 ]+\" [(ngModel)]=\"addpatientModal.patientName\" matInput [formControl]=\"registerForm.controls['patientName']\" [matAutocomplete]=\"auto\" (blur)=\"GetPatientLastPrescription()\" >\n\t\t\t\t\t\t\t\t\t<label for=\"field2\" class=\"labelFloat\"> Patient Name </label>\t\n\t\t\t\t\t\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\" style=\"width:100%\">\n\t\t\t\t\t\t\t\t\t  <mat-option *ngFor=\"let option of patientList\" [value]=\"option.name\">\n\t\t\t\t\t\t\t\t\t\t{{option.name}}\n\t\t\t\t\t\t\t\t\t  </mat-option>\n\t\t\t\t\t\t\t\t\t</mat-autocomplete>\t\t\n\t\t        \t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!registerForm.controls['patientName'].valid  && ( registerForm.controls['patientName'].touched)\">Invalid Name !!!</p>\n\t\t        \t\t\t\t</div>\n\t        \t\t\t\t</div>\n\t        \t\t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t        \t\t\t\t\t<div class=\"fieldDesign\">\n\t\t        \t\t\t\t\t<input id=\"field3\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxlength=\"3\" [(ngModel)]=\"addpatientModal.age\" [formControl]=\"registerForm.controls['age']\"/>\n\t\t        \t\t\t\t\t<label for=\"field3\" class=\"labelFloat\"> Age </label>\n\t\t        \t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!registerForm.controls['age'].valid  && ( registerForm.controls['age'].touched)\">Invalid Age !!!</p>\n\t\t        \t\t\t\t</div>\n\t        \t\t\t\t</div>\n\t        \t\t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\n\t        \t\t\t\t\t<select class=\"form-control txtfield\" [(ngModel)]=\"addpatientModal.gender\" [formControl]=\"registerForm.controls['gender']\" >\n\t        \t\t\t\t\t\t<option  disabled=\"\" value=\"\">Gender</option>\n\t        \t\t\t\t\t\t<option value=\"Male\"> Male </option>\n\t        \t\t\t\t\t\t<option value=\"Female\"> Female </option>\n\t        \t\t\t\t\t\t<option value=\"Other\"> Other </option>\n\t        \t\t\t\t\t</select>\n\t\t        \t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!registerForm.controls['gender'].valid  && ( registerForm.controls['gender'].touched)\">Please Select gender !!!</p>\n\t        \t\t\t\t</div>\n\t        \t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t        \t\t\t\t\t \n\t\t        \t\t\t\t<select class=\"form-control txtfield\" [(ngModel)]=\"addpatientModal.consultDoc\" [formControl]=\"registerForm.controls['consultDoc']\">\n\t\t        \t\t\t\t\t<option disabled=\"\" value=\"\"  >CONSULTING DOCTOR </option>\n\t\t        \t\t\t\t\t<option value=\"{{doctor._id}}\" *ngFor=\"let doctor of dataDoctors\">{{doctor.first_name}}</option>\n\t\t        \t\t\t\t</select>\n\t\t        \t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!registerForm.controls['consultDoc'].valid  && ( registerForm.controls['consultDoc'].touched)\">Please Select Consulting Doctor !!!</p>\n\t\t        \t\t\t</div>\n\t\t        \t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t        \t\t\t\t\t<div class=\"fieldDesign\">\n\t\t        \t\t\t\t\t<input id=\"field10\" type=\"text\" class=\"form-control txtfield\" name=\"\" pattern=\"[a-zA-z0-9 ]+\" (keyup)=\"onKey($event.target.value)\" [matAutocomplete]=\"auto1\" [(ngModel)]=\"addpatientModal.procedure\" [formControl]=\"registerForm.controls['procedure']\" />\n\t\t        \t\t\t\t\t<label for=\"field10\" class=\"labelFloat\"> Ailment / Procedure</label>\n\t\t        \t\t\t\t\t<mat-autocomplete #auto1=\"matAutocomplete\" style=\"width:100%\">\n\t\t\t\t\t\t\t\t\t  <mat-option *ngFor=\"let suggestion of suggestionList\" [value]=\"suggestion\">\n\t\t\t\t\t\t\t\t\t\t{{suggestion}}\n\t\t\t\t\t\t\t\t\t  </mat-option>\n\t\t\t\t\t\t\t\t\t</mat-autocomplete>\t\t\n\t\t        \t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!registerForm.controls['procedure'].valid  && ( registerForm.controls['procedure'].touched)\">Invalid Procedure !!!</p>\n\n\t\t        \t\t\t\t</div>\n\t        \t\t\t\t</div>\n\t\t        \t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t        \t\t\t\t\t<div class=\"fieldDesign\">\n\t\t        \t\t\t\t\t<input id=\"field11\" type=\"text\" class=\"form-control txtfield\" name=\"\"  pattern=\"[0-9.]+\" [(ngModel)]=\"addpatientModal.advanceReceived\" [formControl]=\"registerForm.controls['advanceReceived']\" />\n\t\t        \t\t\t\t\t<label for=\"field11\" class=\"labelFloat\"> Advance received</label>\n\t\t        \t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!registerForm.controls['advanceReceived'].valid  && ( registerForm.controls['advanceReceived'].touched)\">Invalid Payment !!!</p>\n\n\t\t        \t\t\t\t</div>\n\t        \t\t\t\t</div>\n\t        \t\t\t\t<!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t        \t\t\t\t\t<div class=\"fieldDesign\" (click)=\"openCalendar()\">\n\t\t        \t\t\t\t\t<input id=\"field1\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" />\n\t\t        \t\t\t\t\t<label for=\"field1\" class=\"labelFloat\"> Date and Time</label>\n\t\t        \t\t\t\t</div>\n\t        \t\t\t\t</div> -->\n\t        \t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t        \t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"!registerForm.valid\" (click)=\"registerClick()\" > Register </button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t    \t\t\t</div>\n\t\t    \t\t\t<div *ngIf=\"webCam\" class=\"camera-div\">\n\t\t                    <webcam [height]=\"450\" [width]=\"450\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" ></webcam>\n\t\t                    <div class=\"form-group col-md-10 col-md-offset-1 col-sm-12 col-xs-12 camera-btn text-center\" >\n\t\t                        <button class=\"btn btn-custom\" type=\"button\" (click)=\"triggerSnapshot()\">OK</button>\n\t\t                    </div>\n\t\t                </div>\n\t\t    \t\t</div>\n\n        \t\t</div>\n      \t\t</div>\n\n      \t\t<!-- <div class=\"modal-footer\">\n\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n\t\t\t\t\t<button class=\"btn btn-custom\" type=\"submit\"> Register </button>\n\t\t\t\t</div>\n      \t\t</div> -->\n\n\t\t</div>\n  \t</div>\n</div>\n\n<!-- <div class=\"modal fade cus-modal\" id=\"appointmentCalender\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\" *ngIf=\"calendarOptions\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h3>Dr. Faiz Khan</h3>\n            </div>\n            <div class=\"modal-body\">\n                <div *ngIf=\"calendarOptions\">\n                    <a href=\"javascript:void(0)\" class=\"cstm-calender-opt\">\n                        <ng-fullcalendar #ucCalendar [options]=\"calendarOptions\" (eventClick)=\"eventClick($event.detail)\" (eventDrop)=\"updateEvent($event.detail)\" (eventResize)=\"updateEvent($event.detail)\" (dayClick)=\"dayClick($event.detail)\" (clickButton)=\"clickButton($event.detail)\" [(eventsModel)]=\"events\"></ng-fullcalendar>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade cus-modal\" id=\"selectAppointmentTime\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content time-select\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <div class=\" col-md-8 col-md-offset-2 col-sm-12 col-xs-1 text-center\">\n                    <h3 style=\"margin:0px\"> {{appointmentDate | date:'fullDate' }} </h3>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\" col-md-12 col-sm-12 col-xs-1 text-center\">\n                        <div class=\"time-slots\" *ngFor=\"let schedule of shiftsOfParticularDay;let i = index\">\n                            <h3>Slot {{i+1}} [{{schedule.startHour}}:<span *ngIf=\"schedule.startMin.length>1\">{{schedule.startMin}}</span><span *ngIf=\"schedule.startMin.length==1\">0{{schedule.startMin}}</span> - {{schedule.endHour}}:<span *ngIf=\"schedule.endMin.length>1\">{{schedule.endMin}}</span><span *ngIf=\"schedule.endMin.length==1\">0{{schedule.endMin}}</span>]</h3>\n                            <ul class=\"time-ul\" type=\"none\">\n                                <li *ngFor=\"let shift of schedule.shift\" (click)=\"onTimeSelection(shift)\"><a href=\"javascript:void(0)\" class=\"{{getClassSlot(shift)}}\">{{shift.startHour}}:<span *ngIf=\"shift.startMin.length>1\">{{shift.startMin}}</span><span *ngIf=\"shift.startMin.length==1\">0{{shift.startMin}}</span></a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->\n\n<div class=\"modal fade cus-modal modal-cstm\" id=\"dischargeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  \t<div class=\"modal-dialog\" role=\"document\" *ngIf=\"adminDoctor && openedPatientDetail && patientActivities\">\n    \t<div class=\"modal-content\">\n    \t\t<div class=\"modal-header\">\n    \t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n    \t\t\t<div class=\" col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12\" *ngIf=\"dataSmartIpd.address && dataSmartIpd.address.clinic_name\">\n                    <p class=\"Discharge-clinic-name\">{{dataSmartIpd.address.clinic_name}}</p>\n                </div>\n    \t\t</div>\n    \t\t<div class=\"modal-body\">\n        \t\t<div class=\"row\">\n\t\t    \t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t    \t\t\t<div class=\"patient-popup\">\n\t\t    \t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-12 p-0 cstm-tb\">\n\t\t\t    \t\t\t\t<div class=\"discharge pat-img \">\n\t\t\t    \t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!openedPatientDetail.imgSrc\"/>\n\t                                <img src=\"{{pateintPicPath}}{{openedPatientDetail.imgSrc}}\" class=\"img-responsive\" *ngIf=\"openedPatientDetail.imgSrc\"/>\n\t\t\t    \t\t\t\t</div>\n\t\t    \t\t\t\t</div>\n\t\t    \t\t\t\t\n\t\t    \t\t\t\t<table style=\"width: 80%\" class=\"table-bordered my-tab\">\n\t\t    \t\t\t\t\t<tr>\n\t\t    \t\t\t\t\t\t<th>Name</th>\n\t\t    \t\t\t\t\t\t<td>{{openedPatientDetail.patientName}}</td>\n\t\t    \t\t\t\t\t</tr>\n\t\t    \t\t\t\t\t<tr>\n\t\t    \t\t\t\t\t\t<th>Bed Number</th>\n\t\t    \t\t\t\t\t\t<td> {{bedType.print}}-{{openedPatientDetail.bed_number}} ({{bedType.show}})</td>\n\t\t    \t\t\t\t\t</tr>\n\t\t    \t\t\t\t\t<tr>\n\t\t    \t\t\t\t\t\t<th>Doctor</th>\n\t\t    \t\t\t\t\t\t<td>{{adminDoctor.first_name}}</td>\n\t\t    \t\t\t\t\t</tr>\n\t\t    \t\t\t\t\t<tr>\n\t\t    \t\t\t\t\t\t<th>Invoice number</th>\n\t\t    \t\t\t\t\t\t<td> {{openedPatientDetail.id}}</td>\n\t\t    \t\t\t\t\t</tr>\n\t\t    \t\t\t\t\t<tr>\n\t\t    \t\t\t\t\t\t<th>Age/Gender</th>\n\t\t    \t\t\t\t\t\t<td> {{openedPatientDetail.age}}/{{openedPatientDetail.gender}}</td>\n\t\t    \t\t\t\t\t</tr>\t\t\t\t\t\n\t\t    \t\t\t\t\t<tr>\n\t\t    \t\t\t\t\t\t<th>Advance received</th>\n\t\t    \t\t\t\t\t\t<td> {{openedPatientDetail.advanceReceived}}</td>\n\t\t    \t\t\t\t\t</tr>\n\t\t    \t\t\t\t\t<tr>\n\t\t    \t\t\t\t\t\t<th>Date Of Admission</th>\n\t\t    \t\t\t\t\t\t<td> {{getTimeFiveAndHalfHoursBefore(openedPatientDetail.createdAt) | date:'d MMM yy ,h:mm a' }}</td>\n\t\t    \t\t\t\t\t</tr>\n\t\t    \t\t\t\t\t<tr>\n\t\t    \t\t\t\t\t\t<th>Date Of Discharge</th>\n\t\t    \t\t\t\t\t\t<td class=\"cstm\"> \t\t    \t\t\t\t\t\t\t\n\t    \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"dischargeDate\" [settings]=\"settings\" (onDateSelect)=\"onDateSelect($event)\" class=\"pulll-left\"></angular2-date-picker>\n\t    \t\t\t\t\t\t\t\t<ngb-timepicker [(ngModel)]=\"discharegeTime\" [spinners]=\"false\" class=\"ng-tm\" (ngModelChange)=\"onTimeChange()\"></ngb-timepicker>\n\t    \t\t\t\t\t\t\t</td>\n\t\t    \t\t\t\t\t</tr>\n\t\t    \t\t\t\t\t<tr>\n\t\t    \t\t\t\t\t\t<th>Admission Duration</th>\n\t\t    \t\t\t\t\t\t<td> \n\t\t    \t\t\t\t\t\t\t<span *ngIf=\"discharegeTime != test\">{{getDifferenceInDays()}} days {{getDifferenceInHours()}} hrs</span>\n\t\t    \t\t\t\t\t\t</td>\n\t\t    \t\t\t\t\t</tr>\n\t\t\t    \t\t\t</table>\t\t\t    \t\t\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n        \t\t</div>\n        \t\t<div class=\"row\">\n\t\t    \t\t<div class=\"col-md-12  col-sm-12 col-xs-12 text-left\">\n\t\t    \t\t\t<div class=\"patient-popup chrges\">\n\t\t\t    \t\t\t<h4>Occupancy Charges(a): \n\t\t\t    \t\t\t\t<span> \n\t\t\t    \t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control input-cstm\" [(ngModel)]=\"occupancyCharges\" (blur)=\"calculateCharges()\">\n\t\t\t    \t\t\t\t</span>\n\t\t\t    \t\t\t</h4>\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n        \t\t</div>\n        \t\t<div class=\"row\">\n        \t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n        \t\t\t\t<div class=\"patient-popup discharge-popup\">\n        \t\t\t\t\t<h4>Other Charges (b):</h4>\n        \t\t\t\t\t<table class=\"table table-striped table-bordered table-responsive\">\n\t\t\t\t\t\t\t    <thead>\n\t\t\t\t\t\t\t      <tr>\n\t\t\t\t\t\t\t        <th>Date : Time</th>\n\t\t\t\t\t\t\t        <th>Activity</th>\n\t\t\t\t\t\t\t        <th>Description</th>\n\t\t\t\t\t\t\t        <th width=\"80px\">Unit</th>\n\t\t\t\t\t\t\t        <th width=\"80px\">Rate</th>\n\t\t\t\t\t\t\t        <th>Amount</th>\n\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t    </thead>\n\t\t\t\t\t\t\t    <tbody style=\"margin-top: 6em;\">\n\t\t\t\t\t\t\t      <tr *ngFor=\"let activity of patientActivities; let i = index;\">\n\t\t\t\t\t\t\t        <td width=\"130px\"> \n\t\t\t\t\t\t\t        \t{{getTimeFiveAndHalfHoursBefore(activity.createdAt) | date:'d MMM yy ,h:mm a' }}\n\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t        <td> \n\t\t\t\t\t\t\t        \t{{activity.type}}\n\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t    \t<td>\n\t\t\t\t\t\t\t    \t\t<textarea type=\"text\" name=\"\" class=\"form-control input-cstm txt-ar\" [(ngModel)]=\"activity.instruction\"></textarea>\n\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t    \t<td class=\"80px\">\n\t\t\t\t\t\t\t    \t\t<input type=\"number\" name=\"\" class=\"form-control input-cstm \" [(ngModel)]=\"activity.unit\" (blur)=\"calculateCharges()\" >\t\n\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t        <td class=\"80px\"> \n\t\t\t\t\t\t\t        \t<input type=\"number\" name=\"\" class=\"form-control input-cstm\" [(ngModel)]=\"activity.rate\" (blur)=\"calculateCharges()\" >\n\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t        <td> \n\t\t\t\t\t\t\t        \t{{activity.amount}}\n\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t     \t<tr class=\"cstm-tr\">\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\" class=\"text-right\">Total (b)</td>\n\t\t\t\t\t\t\t\t        <td>{{totalActivitiesAmount}}</td>\n\t\t\t\t\t\t\t\t   \t</tr>\n\t\t\t\t\t\t\t\t    <tr class=\"cstm-tr\">  \n\t\t\t\t\t\t\t\t    \t<td colspan=\"5\" class=\"text-right\">Gross Total (a+b)</td>\n\t\t\t\t\t\t\t\t        <td>{{totalActivitiesAmount+occupancyCharges}}</td>\n\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t\t    <tr class=\"cstm-tr\">\t\t\t\t\t\t\t       \n\t\t\t\t\t\t\t\t        <td colspan=\"5\" class=\"text-right\">Advance Received</td>\n\t\t\t\t\t\t\t\t        <td>{{openedPatientDetail.advanceReceived}}</td>\n\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t\t    <tr class=\"cstm-tr\" *ngIf=\"refundAmount>0\">\n\t\t\t\t\t\t\t\t        <td colspan=\"5\" class=\"text-right\">Total Refund</td>\n\t\t\t\t\t\t\t\t        <td>{{refundAmount}}</td>\n\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t\t    <tr class=\"cstm-tr\">\n\t\t\t\t\t\t\t\t        <td colspan=\"5\" class=\"text-right\">Total Outstanding</td>\n\t\t\t\t\t\t\t\t        <td>{{totalActivitiesOutstandingAmount}}</td>\n\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t</table>\n        \t\t\t\t</div>\n        \t\t\t</div>\n        \t\t</div>\n        \t\t<!-- <div class=\"row\">\n\t\t    \t\t<div class=\"col-md-12 col-sm-10 col-xs-12\">\n\t\t    \t\t\t<div class=\"patient-popup discharge-popup\">\n\t\t    \t\t\t\t<label>Doctor Note:</label>\n\t\t    \t\t\t\t<div class=\"discharge-note\">\n\t\t    \t\t\t\t\t<textarea class=\"form-control txtfield\" name=\"\" rows=\"5\" placeholder=\"Note\" type=\"text\" [(ngModel)]=\"doctorNote\"></textarea>\n\t\t    \t\t\t\t</div>\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n        \t\t</div> -->\n        \t\t<!-- <div class=\"row\">\n\t\t    \t\t<div class=\"col-md-6 col-md-offset-6 col-sm-6  col-sm-offset-6 col-xs-12\">\n\t\t    \t\t\t<div class=\"sign-usr\">\n\t\t    \t\t\t\t\n\t\t    \t\t\t</div>\n\t\t    \t\t\t<div class=\"patient-popup \">\t\n\t\t    \t\t\t\t<div class=\"signature\">(Signature)</div>\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n        \t\t</div> -->\n      \t\t</div>\n      \t\t<div class=\"modal-footer text-center\">\n      \t\t\t<button class=\"btn btn-custom\" type=\"button\" (click)=\"printDischarge()\"> Request for Discharge </button>\n      \t\t</div>\n\t\t</div>\n  \t</div>\n</div>\n\n<div class=\"modal fade cus-modal\" id=\"dischargeModalPreview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  \t<div class=\"modal-dialog\" role=\"document\" *ngIf=\"adminDoctor && openedPatientDetail && patientActivities\">\n    \t<div class=\"modal-content\">\n    \t\t<div class=\"modal-header\">\n    \t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n    \t\t\t<div class=\" col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12\">\n                    <p class=\"Discharge-clinic-name\">{{adminDoctor.clinic_details.clinic_name}}</p>\n                </div>\n    \t\t</div>\n    \t\t<div class=\"modal-body\" id=\"discharge_sheet\">\n\t\t    \t<!-- <table>\n\t\t    \t\t<tr>\n\t\t    \t\t\t<td width=\"420px\">\n\t\t    \t\t\t\t<div class=\"col-lg-5 text-left\">\n\t\t\t\t\t\t\t\t<h3><b>Invoice No. {{openedPatientDetail.id}}</b></h3>\n\t\t\t\t\t\t\t\t<p >Discharge Sheet</p>\n\t\t\t\t\t\t\t\t<p class=\"txt-red\">{{dischargeDate | date:'d MMM yy ,h:mm a' }}</p>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t    \t\t\t</td>\n\t\t    \t\t\t<td>\n\t\t    \t\t\t\t<div class=\"col-md-7 col-sm-7 col-xs-12 text-right\">\n\t\t\t\t\t\t\t\t<h3 *ngIf=\"dataSmartIpd.address && dataSmartIpd.address.clinic_name\"><b>{{dataSmartIpd.address.clinic_name}}</b></h3>\n\t\t\t\t\t\t\t\t<p *ngIf=\"dataSmartIpd.address && dataSmartIpd.address.address\">{{dataSmartIpd.address.address}}</p>\n\t\t\t\t\t\t\t\t<p *ngIf=\"dataSmartIpd.address && dataSmartIpd.address.mobile\">{{dataSmartIpd.address.mobile}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t    \t\t\t</td>\n\t\t    \t\t</tr>\n\t\t    \t</table> -->\n    \t\t\t<!-- <div class=\"row\">\n    \t\t\t\t<div class=\"col-lg-5 text-left\">\n\t\t\t\t\t\t<h3><b>Invoice No. {{openedPatientDetail.id}}</b></h3>\n\t\t\t\t\t\t<p >Discharge Sheet</p>\n\t\t\t\t\t\t<p class=\"txt-red\">{{dischargeDate | date:'d MMM yy ,h:mm a' }}</p>\n\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-7 col-sm-7 col-xs-12 text-right\">\n\t\t\t\t\t\t<h3 *ngIf=\"dataSmartIpd.address && dataSmartIpd.address.clinic_name\"><b>{{dataSmartIpd.address.clinic_name}}</b></h3>\n\t\t\t\t\t\t<p *ngIf=\"dataSmartIpd.address && dataSmartIpd.address.address\">{{dataSmartIpd.address.address}}</p>\n\t\t\t\t\t\t<p *ngIf=\"dataSmartIpd.address && dataSmartIpd.address.mobile\">{{dataSmartIpd.address.mobile}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n        \t\t<div class=\"row\">\n\t\t    \t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t    \t\t\t<div class=\"patient-popup\">\n\t\t    \t\t\t\t<table>\n\t\t    \t\t\t\t\t<tr>\n\t\t    \t\t\t\t\t\t<td width=\"200px\">\n\t    \t\t\t\t\t\t\t\t<div class=\"p-0\">\n\t\t\t\t\t\t    \t\t\t\t<div class=\"discharge pat-img \">\n\t\t\t\t\t\t    \t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!openedPatientDetail.imgSrc\"/>\n\t\t\t\t                                <img src=\"{{pateintPicPath}}{{openedPatientDetail.imgSrc}}\" class=\"img-responsive\" *ngIf=\"openedPatientDetail.imgSrc\"/>\n\t\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t    \t\t\t\t</div>\n\t\t    \t\t\t\t\t\t</td>\n\t\t    \t\t\t\t\t\t<td>\n\t\t    \t\t\t\t\t\t\t<div class=\"p-r-0\">\n\t\t\t\t\t\t    \t\t\t\t<div class=\"discharge-detail\">\n\t\t\t\t\t\t    \t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t    \t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<div class=\"detail-list\">\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<p><b>Name:<span> {{openedPatientDetail.patientName}}</span></b></p>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<p><b>Doctor:<span> {{adminDoctor.first_name}} </span></b></p>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<p><b>Invoice number:<span> {{openedPatientDetail.id}}</span></b></p>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t\t\t    \t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t    \t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<div class=\"detail-list\">\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<p>Date Of Admission:<span> {{getTimeFiveAndHalfHoursBefore(openedPatientDetail.createdAt) | date:'d MMM yy ,h:mm a' }}</span></p>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<p>Date Of Discharge:<span> {{newDischargeDate | date:'d MMM yy ,h:mm a' }}</span></p>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<p>Admission Duration:<span> {{differenceInDays}} days {{differenceInHours}} hrs</span></p>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t    \t\t\t\t</div>\n\t\t    \t\t\t\t\t\t</td>\n\t\t    \t\t\t\t\t\t<td>\n\t\t    \t\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t    \t\t\t\t\t<div class=\"detail-list\">\n\t\t\t\t\t    \t\t\t\t\t\t<p><b>Age/Gender:<span> {{openedPatientDetail.age}}/{{openedPatientDetail.gender}}</span></b></p>\n\t\t\t\t\t    \t\t\t\t\t\t<p><b>Mobile:<span> +91 {{openedPatientDetail.phone}}</span></b></p>\n\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t    \t\t\t\t\t</div>\n\t\t    \t\t\t\t\t\t</td>\n\t\t    \t\t\t\t\t</tr>\n\t\t    \t\t\t\t</table>\n\t\t    \t\t\t\n\t\t    \t\t\t\t\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n        \t\t</div>\n        \t\t<div class=\"row\">\n\t\t    \t\t<div class=\"col-md-6 col-md-offset-6 col-sm-6  col-sm-offset-6 col-xs-12\">\n\t\t    \t\t\t<div class=\"patient-popup\">\n\t\t\t    \t\t\t<h4>Occupancy Charges(a): <span> {{bedCharges}} Rs.</span></h4>\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n        \t\t</div>\n        \t\t<div class=\"row\">\n        \t\t\t<div class=\"col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12\">\n        \t\t\t\t<div class=\"patient-popup discharge-popup\">\n        \t\t\t\t\t<h4>Other Charges (b):</h4>\n        \t\t\t\t\t<table class=\"table table-striped table-bordered table-responsive\">\n\t\t\t\t\t\t\t    <thead>\n\t\t\t\t\t\t\t      <tr>\n\t\t\t\t\t\t\t        <th>Date : Time</th>\n\t\t\t\t\t\t\t        <th>Activity</th>\n\t\t\t\t\t\t\t        <th>Description</th>\n\t\t\t\t\t\t\t        <th>Unit</th>\n\t\t\t\t\t\t\t        <th>Rate</th>\n\t\t\t\t\t\t\t        <th>Amount</th>\n\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t    </thead>\n\t\t\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t\t      <tr *ngFor=\"let activity of patientActivities; let i = index;\">\n\t\t\t\t\t\t\t        <td>{{getTimeFiveAndHalfHoursBefore(activity.createdAt) | date:'d MMM yy ,h:mm a' }}</td>\n\t\t\t\t\t\t\t        <td>{{activity.type}}</td>\n\t\t\t\t\t\t\t        <td>{{activity.instruction}}</td>\n\t\t\t\t\t\t\t        <td>{{activity.unit}}</td>\n\t\t\t\t\t\t\t        <td>{{activity.rate}}</td>\n\t\t\t\t\t\t\t        <td>{{activity.amount}}</td>\n\t\t\t\t\t\t\t      <tr>\n\t\t\t\t\t\t\t      <tr>\n\t\t\t\t\t\t\t        <td></td>\n\t\t\t\t\t\t\t        <td></td>\n\t\t\t\t\t\t\t        <td></td>\n\t\t\t\t\t\t\t        <td></td>\n\t\t\t\t\t\t\t        <td>Occupancy Charges</td>\n\t\t\t\t\t\t\t        <td>{{occupancyCharges}}</td>\n\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t      <tr>\n\t\t\t\t\t\t\t        <td></td>\n\t\t\t\t\t\t\t        <td></td>\n\t\t\t\t\t\t\t        <td></td>\n\t\t\t\t\t\t\t        <td></td>\n\t\t\t\t\t\t\t        <td>Total</td>\n\t\t\t\t\t\t\t        <td>{{totalActivitiesAmount}}</td>\n\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t      <tr>\n\t\t\t\t\t\t\t        <td></td>\n\t\t\t\t\t\t\t        <td></td>\n\t\t\t\t\t\t\t        <td></td>\n\t\t\t\t\t\t\t        <td></td>\n\t\t\t\t\t\t\t        <td>Advance received</td>\n\t\t\t\t\t\t\t        <td>{{openedPatientDetail.advanceReceived}}</td>\n\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t      <tr>\n\t\t\t\t\t\t\t        <td></td>\n\t\t\t\t\t\t\t        <td></td>\n\t\t\t\t\t\t\t        <td></td>\n\t\t\t\t\t\t\t        <td></td>\n\t\t\t\t\t\t\t        <td>Total Outstanding</td>\n\t\t\t\t\t\t\t        <td>{{totalActivitiesOutstandingAmount}}</td>\n\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t  </table>\n        \t\t\t\t</div>\n        \t\t\t</div>\n        \t\t</div>\n        \t\t<!-- <div class=\"row\">\n\t\t    \t\t<div class=\"col-md-12 col-sm-10 col-xs-12\">\n\t\t    \t\t\t<div class=\"patient-popup discharge-popup\">\n\t\t    \t\t\t\t<label>Doctor Note:</label>\n\t\t    \t\t\t\t<div class=\"discharge-note\">\n\t\t    \t\t\t\t\t<p class=\"txt-manage\">{{doctorNote}}</p>\n\t\t    \t\t\t\t</div>\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n        \t\t</div> -->\n        \t\t<!-- <div class=\"row\">\n\t\t    \t\t<div class=\"col-md-6 col-md-offset-6 col-sm-6  col-sm-offset-6 col-xs-12\">\n\t\t    \t\t\t<div class=\"sign-usr\">\n\t\t    \t\t\t\t\n\t\t    \t\t\t</div>\n\t\t    \t\t\t<div class=\"patient-popup \">\t\n\t\t    \t\t\t\t<div class=\"signature\">(Signature)</div>\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n        \t\t</div> -->\n      \t\t</div>\n      \t\t<div class=\"modal-footer text-center\">\n      \t\t\t<button class=\"btn btn-custom\" type=\"button\" (click)=\"printDischarge()\"> Print </button>\n      \t\t</div>\n\t\t</div>\n  \t</div>\n</div>\n\n<div class=\"modal fade cus-modal\" id=\"activityModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  \t<div class=\"modal-dialog\" role=\"document\">\n    \t<div class=\"modal-content cstm-modal-cnt\">\n    \t\t<div class=\"modal-header mdl-2\" *ngIf=\"openedPatientDetail\">\n    \t\t\t<!-- <h4 class=\"modal-title\"> Activity Sheet  </h4> -->\n    \t\t\t<div class=\"row\">\n    \t\t\t\t<div class=\"col-md-3 col-sm-4 col-xs-12 text-left\">\n    \t\t\t\t\t<div class=\"discharge-date\">\n    \t\t\t\t\t\t<p class=\"p-cstm\">{{bedType.print}}-{{openedPatientDetail.bed_number}}</p>\n    \t\t\t\t\t</div>\n\t\t\t\t\t</div>\n    \t\t\t\t<div class=\"col-md-6 col-sm-4 col-xs-12 text-center\">\n\t\t\t\t\t\t<!-- <h4><b>{{openedPatientDetail.patientName}}</b></h4> -->\n\t\t\t\t\t\t<h4 class=\"activity-sheet\">ACTIVITY SHEET</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 col-sm-2 col-xs-12 text-right\">\n    \t\t\t\t\t<button type=\"button\" class=\"close cstm-cloz\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n    \t\t\n    \t\t</div>\n\t\t\t<div class=\"div-bg\">\t\t\t\t\n    \t\t\t<div class=\"col-lg-9 text-center\" *ngIf=\"openedPatientDetail\">\n    \t\t\t\t <h4><b>{{openedPatientDetail.patientName}}</b></h4>\n    \t\t\t</div>\n    \t\t\t<div class=\"col-lg-3\">\n    \t\t\t\t<button class=\"btn btn-md btn-block btn-grin\" (click)=\"addActivity()\"><i class=\"fa fa-plus\"></i> ACTIVITY</button>\n    \t\t\t</div>\n    \t\t</div>\n    \t\t<div class=\"clearfix\"></div> \n    \t\t<div class=\"modal-body\">\n        \t\t<div class=\"row\">\n\t\t    \t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t    \t\t\t<!-- <div class=\"patient-popup\" *ngFor=\"let patientActivity of patientActivities\">\n\t\t    \t\t\t\t<h4 class=\"text-center activity-time\">{{patientActivity.time}}</h4> -->\n\t\t    \t\t\t\t<ul class=\"discharge-activity-list\">\n\t\t    \t\t\t\t\t<li *ngFor=\"let activity of patientActivities; let i = index;\" class=\"li-cstm\">\n\t\t    \t\t\t\t\t\t<div class=\"row\">\n\t\t    \t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t    \t\t\t\t\t\t\t<span> {{activity.type}} </span>\n\t\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t\t<div class=\"col-lg-4 text-center\">\n\t    \t\t\t\t\t\t\t\t<small class=\"time-cstm\">&nbsp;&nbsp;&nbsp;&nbsp; {{getTimeFiveAndHalfHoursBefore(activity.createdAt) | date:'d MMM yy ,h:mm a' }} </small>\n\t    \t\t\t\t\t\t\t</div>\n\t    \t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t    \t\t\t\t\t\t\t\t<div class=\"\">\n\t\t    \t\t\t\t\t\t\t\t<i class=\"fa fa-pencil edit-icon\" (click)=\"updateActivity(activity,activity._id)\"></i>\t\t\t\t\t\t\t\t    \t\n\t\t    \t\t\t\t\t\t\t\t<i class=\"fa fa-trash dlt-icon\" (click)=\"DeleteActivity(activity)\"></i>\n\t\t\t\t\t\t\t\t\t    </div>\n\t    \t\t\t\t\t\t\t</div>\n\t\t    \t\t\t\t\t\t</div>\n\t\t    \t\t\t\t\t\t\n\t    \t\t\t\t\t\t\t<p class=\"activity-name\"><span> {{activity.instruction}} </span>\n\t    \t\t\t\t\t\t\t</p>\n\t    \t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t        <div class=\"col-md-4 col-sm-4 col-xs-12\">Unit: {{activity.unit}} \n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t        <div class=\"col-md-4 col-sm-4 col-xs-12\">Rate: {{activity.rate}}\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t        <div class=\"col-md-4 col-sm-4 col-xs-12\"><b>Amount: {{activity.amount}}</b>\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t   \n\t\t    \t\t\t\t\t</li>\n\t\t    \t\t\t\t</ul>\n\t\t    \t\t\t<!-- </div> -->\n\t\t    \t\t</div>\n        \t\t</div>\n      \t\t</div>\n      \t\t<!-- <div class=\"modal-footer text-center\">\n      \t\t\t<button class=\"btn btn-custom\" type=\"button\"> Print </button>\n      \t\t</div> -->\n\t\t</div>\n  \t</div>\n</div>\n\n<div class=\"modal fade cus-modal\" id=\"addActivityModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  \t<div class=\"modal-dialog\" role=\"document\">\n    \t<div class=\"modal-content\">\n    \t\t<div class=\"modal-header\">\n    \t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)='resetAddActivityForm()'><span aria-hidden=\"true\">&times;</span></button>\n    \t\t\t<h4 class=\"modal-title\"> {{addUpdateActivityText}} </h4>\n    \t\t</div>\n    \t\t<div class=\"modal-body cstm-modal-ht\">\n    \t\t\t<form [formGroup]=\"addActivityForm\">\n    \t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n    \t\t\t\t\t<select class=\"form-control txtfield\" [(ngModel)]=\"addpatientModalData.type\" [formControl]=\"addActivityForm.controls['type']\" >\n    \t\t\t\t\t\t<option  disabled=\"\" value=\"\">Type</option>\n    \t\t\t\t\t\t<option value=\"Nursing\">Nursing</option>\n\t\t\t\t\t\t\t<option value=\"Food\">Food</option>\n\t\t\t\t\t\t\t<option value=\"ICU\">ICU</option>\n\t\t\t\t\t\t\t<option value=\"OT\">OT</option>\n\t\t\t\t\t\t\t<option value=\"Medicine\">Medicine</option>\n\t\t\t\t\t\t\t<option value=\"Consumables\">Consumables</option>\n\t\t\t\t\t\t\t<option value=\"Professional\">Professional</option>\n\t\t\t\t\t\t\t<option value=\"Investigation\">Investigation</option>\n\t\t\t\t\t\t\t<option value=\"Ambulance\">Ambulance</option>\n\t\t\t\t\t\t\t<option value=\"Miscellaneous\">Miscellaneous</option>\n    \t\t\t\t\t</select>\n        \t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!addActivityForm.controls['type'].valid  && ( addActivityForm.controls['type'].touched)\">Please Select type !!!</p>\n    \t\t\t\t</div>\n    \t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t    \t\t\t<div class=\"input-group fieldDesign\">\n\t                        <textarea class=\"form-control txtfield txt-ar\" name=\"\" maxLength=\"80\" placeholder=\"Activity Description\" type=\"text\" [(ngModel)]=\"addpatientModalData.instruction\" [formControl]=\"addActivityForm.controls['instruction']\" (keyup)=\"onKey1($event.target.value)\" [matAutocomplete]=\"auto2\" ></textarea>\n\t                        <mat-autocomplete #auto2=\"matAutocomplete\" style=\"width:100%\">\n\t\t\t\t\t\t\t  <mat-option *ngFor=\"let suggestion of suggestionListInstruction\" [value]=\"suggestion\">\n\t\t\t\t\t\t\t\t{{suggestion}}\n\t\t\t\t\t\t\t  </mat-option>\n\t\t\t\t\t\t\t</mat-autocomplete>\n\t            \t\t</div>\n\t            \t</div>\n\t                <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t                    <div class=\"input-group fieldDesign\">\n\t                        <input class=\"form-control txtfield\" name=\"\" placeholder=\"Unit\" pattern=\"[0-9.]+\" type=\"text\" [(ngModel)]=\"addpatientModalData.unit\" [formControl]=\"addActivityForm.controls['unit']\">\n\t                    </div>\n\t                    <p style=\"color: #FF0000\" *ngIf=\"!addActivityForm.controls['unit'].valid  && ( addActivityForm.controls['unit'].touched)\">Invalid unit !!!</p>\n\t                </div>\n\t                <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t                    <div class=\"input-group fieldDesign\">\n\t                        <input class=\"form-control txtfield\" name=\"\" pattern=\"[0-9.]+\" maxLength=\"7\"  placeholder=\"Rate\" type=\"text\" [(ngModel)]=\"addpatientModalData.rate\" [formControl]=\"addActivityForm.controls['rate']\">\n\t                    </div>\n\t                    <p style=\"color: #FF0000\" *ngIf=\"!addActivityForm.controls['rate'].valid  && ( addActivityForm.controls['rate'].touched)\">Invalid rate !!!</p>\n\t                </div>\n\t                <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t                    <div class=\"input-group fieldDesign\">\n\t                        <input class=\"form-control txtfield\" [attr.disabled]=\"true\" min=\"0\" placeholder=\"Amount\" type=\"number\"[(ngModel)]=\"addpatientModalData.amount\" value=\"{{addpatientModalData.unit*addpatientModalData.rate}}\" [formControl]=\"addActivityForm.controls['amount']\">\n\t                    </div>\n\t                  <!--   <p style=\"color: #FF0000\" *ngIf=\"!addActivityForm.controls['amount'].valid  && ( addActivityForm.controls['amount'].touched)\">Invalid amount !!!</p> -->\n\t                </div>\n\t\t\t\t\n\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n    \t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n\t\t\t\t\t\t<button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"!addActivityForm.valid\" (click)=\"addUpdateActivity()\" > Save </button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t</form>\n      \t\t</div>\n\t\t</div>\n  \t</div>\n</div>\n\n<div class=\"modal fade cus-modal\" id=\"dischargePatientPdf\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" *ngIf=\"openedPatientDetail\">\n  \t<div class=\"modal-dialog wrap-tab\" role=\"document\">\n    \t<div class=\"modal-content modal-lg modal-cstm\">\n    \t\t<div class=\"modal-header text-center\">\n    \t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)='resetAddActivityForm()'><span aria-hidden=\"true\">&times;</span></button>\n    \t\t\t<h4 class=\"modal-title cstm-h4\" *ngIf=\"dataSmartIpd.address && dataSmartIpd.address.clinic_name\">{{dataSmartIpd.address.clinic_name}} \n    \t\t\t\t<button (click)=\"printPdfAndDischarge()\" class=\"btn btn-custom btn-33\">Print</button>\n    \t\t\t</h4>\n    \t\t\t<div class=\"row cstm-row-mr\">\n    \t\t\t\t<div class=\"col-lg-6 text-left\">\n    \t\t\t\t\t<div class=\"cstm-date\">\n    \t\t\t\t\t\t<b>Date: </b><span>{{appointmentDate | date:'d MMM yy ,h:mm a' }}</span>\n    \t\t\t\t\t</div>\n    \t\t\t\t</div>\n    \t\t\t\t<div class=\"col-lg-6 text-right\">\n    \t\t\t\t\t<div *ngIf=\"dataSmartIpd.address && dataSmartIpd.address.address\">{{dataSmartIpd.address.address}}</div>\n\t\t\t\t\t\t<div *ngIf=\"dataSmartIpd.address && dataSmartIpd.address.mobile\">\n\t\t\t\t\t\tIPD contact: {{dataSmartIpd.address.mobile}}</div>\n    \t\t\t\t</div>\n    \t\t\t</div>\n    \t\t</div>\n    \t\t<div class=\"modal-body cstm-modal-ht\">\n    \t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t    \t\t\t<div class=\"patient-popup\">\n\t    \t\t\t\t<div class=\"pat-center\">\n\t\t    \t\t\t\t<div class=\"pat-img\">\n\t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"./assets/imgs/no-person.jpg\">\n\t\t    \t\t\t\t</div>\n\t\t    \t\t\t\t<p>{{openedPatientDetail.patientName}} ({{openedPatientDetail.gender}}), {{openedPatientDetail.age}}Y</p>\n\t\t    \t\t\t</div>\n\t\t    \t\t\t<table class=\"table-cstm\">\n\t\t    \t\t\t\t<tbody>\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Bed Number</th>\n\t\t\t    \t\t\t\t\t<td> \n\t\t\t    \t\t\t\t\t\t<span *ngIf=\"openedPatientDetail.type=='general'\">G</span>\n\t\t                                <span *ngIf=\"openedPatientDetail.type=='private'\">P</span>\n\t\t                                <span *ngIf=\"openedPatientDetail.type=='semi_private'\">SP</span>-{{openedPatientDetail.bed_number}}\n\t\t\t    \t\t\t\t\t</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Ailment/Procedure</th>\n\t\t\t    \t\t\t\t\t<td>{{openedPatientDetail.procedure}}</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\t\n\t\t\t    \t\t\t\t<tr *ngIf=\"openedPatientDetail.prescription_id\">\n\t\t\t    \t\t\t\t\t<th>Prescription ID</th>\n\t\t\t    \t\t\t\t\t<td> {{openedPatientDetail.prescription_id}}</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Mobile Number</th>\n\t\t\t    \t\t\t\t\t<td> +91-{{openedPatientDetail.phone}}</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Consulting Doctor Name</th>\n\t\t\t    \t\t\t\t\t<td>Dr. {{getDoctorName(openedPatientDetail.consultDoc)}}</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Admit date and Time</th>\n\t\t\t    \t\t\t\t\t<td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.createdAt) | date:'d MMM yy ,h:mm a' }} </td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\t<tr>\n\t\t\t    \t\t\t\t\t<th>Discharge Date and Time</th>\n\t\t\t    \t\t\t\t\t<td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.discharge_date) | date:'d MMM yy ,h:mm a' }}</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\t<tr *ngIf=\"openedPatientDetail.medication.length>0\">\n\t\t\t    \t\t\t\t\t<td colspan=\"2\"> \n\t\t\t    \t\t\t\t\t\t<div class=\"\">\n                                    <div><h4><b> Medicines</b></h4></div>\n\t                                    <ol style=\"padding-left:10px\">\n\t                                        <li *ngFor=\"let data of openedPatientDetail.medication\">\n\t                                            <span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n\t                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t                                            </span>\n\t                                            </span>\n\t                                            <span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n\t                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t                                            </span>\n\t                                            </span>\n\t                                            <span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n\t                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n\t                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t                                            </span>\n\t                                            </span>\n\t                                            <span *ngIf=\"data.name=='Drops'\">\n\t                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t                                            </span>\n\t                                            </span>\n\t                                        </li>\n\t                                    </ol>  \n\t                                </div>\n\t\t\t    \t\t\t\t\t</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t\t<tr *ngIf=\"openedPatientDetail.woundCare || openedPatientDetail.diet || openedPatientDetail.lifestyle || openedPatientDetail.others\">\n\t\t\t    \t\t\t\t\t<td colspan=\"2\">\n\t\t\t    \t\t\t\t\t\t<div class=\"row\">\n\t\t\t    \t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t    \t\t\t\t\t\t\t\t<h4 *ngIf=\"getDischargeInstructionsStatus()\">\n\t\t\t    \t\t\t\t\t\t\t\t\t<b>Discharge Instructions</b>\n\t\t\t    \t\t\t\t\t\t\t\t</h4>\n\t\t\t    \t\t\t\t\t\t\t\t<h5 *ngIf=\"openedPatientDetail.woundCare && (openedPatientDetail.woundCare.one || openedPatientDetail.woundCare.two)\"><b>Wound Care</b></h5>\n\t\t\t    \t\t\t\t\t\t\t\t<ol class=\"cstm-ol\" *ngIf=\"openedPatientDetail.woundCare && (openedPatientDetail.woundCare.one || openedPatientDetail.woundCare.two)\">\n\t\t\t    \t\t\t\t\t\t\t\t\t<li *ngIf=\"openedPatientDetail.woundCare.one\">{{openedPatientDetail.woundCare.one}}</li>\n\t\t\t    \t\t\t\t\t\t\t\t\t<li *ngIf=\"openedPatientDetail.woundCare.two\">{{openedPatientDetail.woundCare.two}}</li>\n\t\t\t    \t\t\t\t\t\t\t\t</ol>\n\t\t\t    \t\t\t\t\t\t\t\t<h5 *ngIf=\"openedPatientDetail.diet &&  (openedPatientDetail.diet.one || openedPatientDetail.diet.two)\"><b>Diet</b></h5>\n\t\t\t    \t\t\t\t\t\t\t\t<ol class=\"cstm-ol\" *ngIf=\"openedPatientDetail.diet && (openedPatientDetail.diet.one || openedPatientDetail.diet.two)\">\n\t\t\t    \t\t\t\t\t\t\t\t\t<li *ngIf=\"openedPatientDetail.diet.one\">{{openedPatientDetail.diet.one}}</li>\n\t\t\t    \t\t\t\t\t\t\t\t\t<li *ngIf=\"openedPatientDetail.diet.two\">{{openedPatientDetail.diet.two}}</li>\n\t\t\t    \t\t\t\t\t\t\t\t</ol>\n\t\t\t    \t\t\t\t\t\t\t\t<h5 *ngIf=\"openedPatientDetail.lifestyle && (openedPatientDetail.lifestyle.one || openedPatientDetail.lifestyle.two)\"><b>Lifestyle changes</b></h5>\n\t\t\t    \t\t\t\t\t\t\t\t<ol class=\"cstm-ol\" *ngIf=\"openedPatientDetail.lifestyle && (openedPatientDetail.lifestyle.one || openedPatientDetail.lifestyle.two)\">\n\t\t\t    \t\t\t\t\t\t\t\t\t<li *ngIf=\"openedPatientDetail.lifestyle.one\">{{openedPatientDetail.lifestyle.one}}</li>\n\t\t\t    \t\t\t\t\t\t\t\t\t<li *ngIf=\"openedPatientDetail.lifestyle.two\">{{openedPatientDetail.lifestyle.two}}</li>\n\t\t\t    \t\t\t\t\t\t\t\t</ol>\n\t\t\t    \t\t\t\t\t\t\t\t<h5 *ngIf=\"openedPatientDetail.others && (openedPatientDetail.others.one || openedPatientDetail.others.two)\"><b>Other Instructions</b></h5>\n\t\t\t    \t\t\t\t\t\t\t\t<ol class=\"cstm-ol\" *ngIf=\"openedPatientDetail.others && (openedPatientDetail.others.one || openedPatientDetail.others.two)\">\n\t\t\t    \t\t\t\t\t\t\t\t\t<li *ngIf=\"openedPatientDetail.others.one\">{{openedPatientDetail.others.one}}</li>\n\t\t\t    \t\t\t\t\t\t\t\t\t<li *ngIf=\"openedPatientDetail.others.two\">{{openedPatientDetail.others.two}}</li>\n\t\t\t    \t\t\t\t\t\t\t\t</ol>\n\t\t\t    \t\t\t\t\t\t\t\t<h4><b>Doctor Discharge Note</b></h4>\n\t\t\t    \t\t\t\t\t\t\t\t<div class=\"form-group doc-note\">\n\t\t\t\t\t\t\t\t\t\t\t\t  <textarea class=\"form-control\" rows=\"10\" id=\"comment\" value=\"{{openedPatientDetail.doctor_note}}\" readonly=\"\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t</div><br><br>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>(Doctor Signature)</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t    \t\t\t\t\t\t\t</div>\n\t\t\t    \t\t\t\t\t\t</div>\n\t\t\t    \t\t\t\t\t</td>\n\t\t\t    \t\t\t\t</tr>\n\t\t\t    \t\t\t</tbody>\n\t\t    \t\t\t</table>\n\t\t    \t\t\t<div class=\"row\">\n\t\t\t\t    \t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t    \t\t\t<div class=\"patient-popup\">\t\t\t\n\t\t\t\t    \t\t\t\t<div><h4><b> Billing</b></h4></div>\t    \t\t\t\t\n\t\t\t\t    \t\t\t\t<table style=\"width: 80%\" class=\"table-bordered my-tab\">\n\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t    \t\t\t\t\t\t<th>Name</th>\n\t\t\t\t    \t\t\t\t\t\t<td>{{openedPatientDetail.patientName}}</td>\n\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t\t    \t\t\t\t\t<th>Bed Number</th>\n\t\t\t\t\t    \t\t\t\t\t<td> \n\t\t\t\t\t    \t\t\t\t\t\t<span *ngIf=\"openedPatientDetail.type=='general'\">G</span>\n\t\t\t\t                                <span *ngIf=\"openedPatientDetail.type=='private'\">P</span>\n\t\t\t\t                                <span *ngIf=\"openedPatientDetail.type=='semi_private'\">SP</span>-{{openedPatientDetail.bed_number}}\n\t\t\t\t\t    \t\t\t\t\t</td>\n\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t    \t\t\t\n\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t    \t\t\t\t\t<th>Ailment/Procedure</th>\n\t\t\t\t\t    \t\t\t\t\t<td>{{openedPatientDetail.procedure}}</td>\n\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t    \t\t\t\t\n\t\t\t\t\t    \t\t\t\t<tr *ngIf=\"openedPatientDetail.prescription_id\">\n\t\t\t\t\t    \t\t\t\t\t<th>Prescription ID</th>\n\t\t\t\t\t    \t\t\t\t\t<td> {{openedPatientDetail.prescription_id}}</td>\n\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t    \t\t\t\n\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t    \t\t\t\t\t<th>Mobile Number</th>\n\t\t\t\t\t    \t\t\t\t\t<td> +91-{{openedPatientDetail.phone}}</td>\n\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t    \t\t\t\n\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t    \t\t\t\t\t<th>Consulting Doctor Name</th>\n\t\t\t\t\t    \t\t\t\t\t<td>Dr. {{getDoctorName(openedPatientDetail.consultDoc)}}</td>\n\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t    \t\t\t\n\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t    \t\t\t\t\t<th>Admit date and Time</th>\n\t\t\t\t\t    \t\t\t\t\t<td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.createdAt) | date:'d MMM yy ,h:mm a' }} </td>\n\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t    \t\t\t\t\t<th>Discharge Date and Time</th>\n\t\t\t\t\t    \t\t\t\t\t<td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.discharge_date) | date:'d MMM yy ,h:mm a' }}</td>\n\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t    \t\t\t</table>\t\t\t\t\t    \t\t\n\t\t\t\t    \t\t\t</div>\n\t\t\t\t    \t\t</div>\n\t\t        \t\t</div>\n\t\t        \t\t<div class=\"row\">\n\t\t\t\t    \t\t<div class=\"col-md-12  col-sm-12 col-xs-12 text-left\">\n\t\t\t\t    \t\t\t<div class=\"patient-popup chrges\">\n\t\t\t\t\t    \t\t\t<h4>Occupancy Charges(a): \n\t\t\t\t\t    \t\t\t\t<span> \n\t\t\t\t\t    \t\t\t\t\t{{openedPatientDetail.occupancy_charges}}\n\t\t\t\t\t    \t\t\t\t</span>\n\t\t\t\t\t    \t\t\t</h4>\n\t\t\t\t    \t\t\t</div>\n\t\t\t\t    \t\t</div>\n\t\t        \t\t</div>\n\t\t        \t\t<div class=\"row\">\n\t\t        \t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t        \t\t\t\t<div class=\"patient-popup discharge-popup\">\n\t\t        \t\t\t\t\t<h4>Other Charges (b):</h4>\n\t\t        \t\t\t\t\t<table class=\"table table-striped table-bordered table-responsive\">\n\t\t\t\t\t\t\t\t\t    <thead>\n\t\t\t\t\t\t\t\t\t      <tr>\n\t\t\t\t\t\t\t\t\t        <th>Date : Time</th>\n\t\t\t\t\t\t\t\t\t\t        <th>Activity</th>\n\t\t\t\t\t\t\t\t\t\t        <th>Description</th>\n\t\t\t\t\t\t\t\t\t\t        <th width=\"80px\">Unit</th>\n\t\t\t\t\t\t\t\t\t\t        <th width=\"80px\">Rate</th>\n\t\t\t\t\t\t\t\t\t\t        <th>Amount</th>\n\t\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t\t    </thead>\n\t\t\t\t\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t\t\t\t      <tr *ngFor=\"let activity of openedPatientDetail.patient_activities; let i = index;\">\n\t\t\t\t\t\t\t\t\t        <td width=\"130px\"> \n\t\t\t\t\t\t\t\t\t        \t{{getTimeFiveAndHalfHoursBefore(activity.createdAt) | date:'d MMM yy ,h:mm a' }}\n\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t        <td> \n\t\t\t\t\t\t\t\t\t        \t{{activity.type}}\n\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t    \t<td>\n\t\t\t\t\t\t\t\t\t    \t\t{{activity.instruction}}\n\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t    \t<td class=\"80px\">\n\t\t\t\t\t\t\t\t\t    \t\t{{activity.unit}}\n\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t        <td class=\"80px\"> \n\t\t\t\t\t\t\t\t\t        \t{{activity.rate}}\n\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t        <td> \n\t\t\t\t\t\t\t\t\t        \t{{activity.amount}}\n\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t     \t<tr class=\"cstm-tr\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\" class=\"text-right\">Total (b)</td>\n\t\t\t\t\t\t\t\t\t\t        <td>{{totalActivitiesAmountPdf}}</td>\n\t\t\t\t\t\t\t\t\t\t   \t</tr>\n\t\t\t\t\t\t\t\t\t\t    <tr class=\"cstm-tr\">  \n\t\t\t\t\t\t\t\t\t\t    \t<td colspan=\"5\" class=\"text-right\">Gross Total (a+b)</td>\n\t\t\t\t\t\t\t\t\t\t        <td>{{totalActivitiesAmountPdf+openedPatientDetail.occupancy_charges}}</td>\n\t\t\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t\t\t\t    <tr class=\"cstm-tr\">\t\t\t\t\t\t\t       \n\t\t\t\t\t\t\t\t\t\t        <td colspan=\"5\" class=\"text-right\">Advance Received</td>\n\t\t\t\t\t\t\t\t\t\t        <td>{{openedPatientDetail.advanceReceived}}</td>\n\t\t\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t\t\t\t    <tr class=\"cstm-tr\" *ngIf=\"refundAmountPdf>0\">\n\t\t\t\t\t\t\t\t\t\t        <td colspan=\"5\" class=\"text-right\">Total Refunded</td>\n\t\t\t\t\t\t\t\t\t\t        <td>{{refundAmountPdf}}</td>\n\t\t\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t\t\t\t    <tr class=\"cstm-tr\">\n\t\t\t\t\t\t\t\t\t\t        <td colspan=\"5\" class=\"text-right\">Total Bill</td>\n\t\t\t\t\t\t\t\t\t\t        <td>{{openedPatientDetail.total_bill}}</td>\n\t\t\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t        \t\t\t\t</div>\n\t\t        \t\t\t</div>\n\t\t        \t\t</div>\n\t    \t\t\t</div>\n\t    \t\t</div>\n      \t\t</div>\n\t\t</div>\n  \t</div>\n</div>\n\n<div class=\"modal fade cus-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" *ngIf=\"openedPatientDetail\">\n   <div class=\"modal-dialog wrap-tab\" role=\"document\">\n      <div id=\"generatePdfModal\">\n\t\t<div class=\"modal-title mg--top\" *ngIf=\"dataSmartIpd.address && \tdataSmartIpd.address.clinic_name\">\n\t<h4 style=\"float: left; width:100%; text-align: center;\">{{dataSmartIpd.address.clinic_name}}</h4>\n\t<div class=\"\" style=\"float: left;width:50%;\">\n\t<b>Date: </b><span>{{appointmentDate | date:'d MMM yy ,h:mm a' }}</span>\n\t</div>\n\t<div *ngIf=\"dataSmartIpd.address && dataSmartIpd.address.address\" style=\"float: right;width:50%;\">{{dataSmartIpd.address.address}}<br>\n\t<span *ngIf=\"dataSmartIpd.address && dataSmartIpd.address.mobile\" >\n\tIPD contact: {{dataSmartIpd.address.mobile}}</span>\n\t</div>\n\t\t</div>\n\n<div class=\"modal-body\">\n   <div style=\"margin-top: 7em;\">\n      <div class=\"patient-popup\">\n\t\t<div class=\"pat-center\">\n\t\t\t<div class=\"pat-img\">\n\t\t\t\t<img class=\"img-responsive\" src=\"./assets/imgs/no-person.jpg\">\n\t\t\t</div>\n\t\t\t<p>{{openedPatientDetail.patientName}} ({{openedPatientDetail.gender}}), {{openedPatientDetail.age}}Y</p>\n\t\t</div>\n\t\t<table class=\"table-cstm pdf-table\">\n\t\t    <tbody>\n\t\t       <tr>\n\t\t          <th>Bed Number</th>\n\t\t          <td> \n\t\t             <span *ngIf=\"openedPatientDetail.type=='general'\">G</span>\n\t\t             <span *ngIf=\"openedPatientDetail.type=='private'\">P</span>\n\t\t             <span *ngIf=\"openedPatientDetail.type=='semi_private'\">SP</span>-{{openedPatientDetail.bed_number}}\n\t\t          </td>\n\t\t       </tr>\n\t\t       <tr>\n\t\t          <th>Ailment/Procedure</th>\n\t\t          <td>{{openedPatientDetail.procedure}}</td>\n\t\t       </tr>\n\t\t       <tr *ngIf=\"openedPatientDetail.prescription_id\">\n\t\t          <th>Prescription ID</th>\n\t\t          <td> {{openedPatientDetail.prescription_id}}</td>\n\t\t       </tr>\n\t\t       <tr>\n\t\t          <th>Mobile Number</th>\n\t\t          <td> +91-{{openedPatientDetail.phone}}</td>\n\t\t       </tr>\n\t\t       <tr>\n\t\t          <th>Consulting Doctor Name</th>\n\t\t          <td>Dr. {{getDoctorName(openedPatientDetail.consultDoc)}}</td>\n\t\t       </tr>\n\t\t       <tr>\n\t\t          <th>Admit date and Time</th>\n\t\t          <td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.createdAt) | date:'d MMM yy ,h:mm a' }} </td>\n\t\t       </tr>\n\t\t       <tr>\n\t\t          <th>Discharge Date and Time</th>\n\t\t          <td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.discharge_date) | date:'d MMM yy ,h:mm a' }}</td>\n\t\t       </tr>\n\t\t       <tr *ngIf=\"openedPatientDetail.medication.length>0\">\n\t\t          <td colspan=\"2\">\n\t\t             <div class=\"\">\n\t\t                <div>\n\t\t                   <h4><b> Medicines</b></h4>\n\t\t                </div>\n\t\t                <ol style=\"padding-left:10px\" class=\"med-list\">\n\t\t                   <li *ngFor=\"let data of openedPatientDetail.medication\">\n\t\t                      <span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n\t\t                         {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t                         <span *ngIf=\"data.med_info\">\n\t\t                            <p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t                         </span>\n\t\t                      </span>\n\t\t                      <span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n\t\t                         {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t                         <span *ngIf=\"data.med_info\">\n\t\t                            <p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t                         </span>\n\t\t                      </span>\n\t\t                      <span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n\t\t                         {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n\t\t                         <span *ngIf=\"data.med_info\">\n\t\t                            <p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t                         </span>\n\t\t                      </span>\n\t\t                      <span *ngIf=\"data.name=='Drops'\">\n\t\t                         {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t                         <span *ngIf=\"data.med_info\">\n\t\t                            <p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t                         </span>\n\t\t                      </span>\n\t\t                   </li>\n\t\t                </ol>\n\t\t             </div>\n\t\t          </td>\n\t\t       </tr>\n\t\t       <tr *ngIf=\"openedPatientDetail.woundCare || openedPatientDetail.diet || openedPatientDetail.lifestyle || openedPatientDetail.others\">\n\t\t          <td colspan=\"2\">\n\t\t             <div class=\"row\">\n\t\t                <div class=\"col-lg-12\">\n\t\t                   <h4 *ngIf=\"getDischargeInstructionsStatus()\">\n\t\t                      <b>Discharge Instructions</b>\n\t\t                   </h4>\n\t\t                   <h5 *ngIf=\"openedPatientDetail.woundCare && (openedPatientDetail.woundCare.one || openedPatientDetail.woundCare.two)\"><b>Wound Care</b></h5>\n\t\t                   <ol class=\"cstm-ol\" *ngIf=\"openedPatientDetail.woundCare && (openedPatientDetail.woundCare.one || openedPatientDetail.woundCare.two)\">\n\t\t                      <li  style=\"display: block;margin: 20px 0px;\" *ngIf=\"openedPatientDetail.woundCare.one\">{{openedPatientDetail.woundCare.one}}</li>\n\t\t                      <li  style=\"display: block;margin: 20px 0px;\" *ngIf=\"openedPatientDetail.woundCare.two\">{{openedPatientDetail.woundCare.two}}</li>\n\t\t                   </ol>\n\t\t                   <h5 *ngIf=\"openedPatientDetail.diet &&  (openedPatientDetail.diet.one || openedPatientDetail.diet.two)\"><b>Diet</b></h5>\n\t\t                   <ol class=\"cstm-ol\" *ngIf=\"openedPatientDetail.diet && (openedPatientDetail.diet.one || openedPatientDetail.diet.two)\">\n\t\t                      <li style=\"display: block;margin: 20px 0px;\" *ngIf=\"openedPatientDetail.diet.one\">{{openedPatientDetail.diet.one}}</li>\n\t\t                      <li style=\"display: block;margin: 20px 0px;\"  *ngIf=\"openedPatientDetail.diet.two\">{{openedPatientDetail.diet.two}}</li>\n\t\t                   </ol>\n\t\t                   <h5 *ngIf=\"openedPatientDetail.lifestyle && (openedPatientDetail.lifestyle.one || openedPatientDetail.lifestyle.two)\"><b>Lifestyle changes</b></h5>\n\t\t                   <ol class=\"cstm-ol\" *ngIf=\"openedPatientDetail.lifestyle && (openedPatientDetail.lifestyle.one || openedPatientDetail.lifestyle.two)\">\n\t\t                      <li  style=\"display: block;margin: 20px 0px;\" *ngIf=\"openedPatientDetail.lifestyle.one\">{{openedPatientDetail.lifestyle.one}}</li>\n\t\t                      <li style=\"display: block;margin: 20px 0px;\"  *ngIf=\"openedPatientDetail.lifestyle.two\">{{openedPatientDetail.lifestyle.two}}</li>\n\t\t                   </ol>\n\t\t                   <h5 *ngIf=\"openedPatientDetail.others && (openedPatientDetail.others.one || openedPatientDetail.others.two)\"><b>Other Instructions</b></h5>\n\t\t                   <ol class=\"cstm-ol\" *ngIf=\"openedPatientDetail.others && (openedPatientDetail.others.one || openedPatientDetail.others.two)\">\n\t\t                      <li  style=\"display: block;margin: 20px 0px;\" *ngIf=\"openedPatientDetail.others.one\">{{openedPatientDetail.others.one}}</li>\n\t\t                      <li  style=\"display: block;margin: 20px 0px;\" *ngIf=\"openedPatientDetail.others.two\">{{openedPatientDetail.others.two}}</li>\n\t\t                   </ol>\n\t\t                   <h4><b>Doctor Discharge Note</b></h4>\n\t\t                   <div class=\"form-group doc-note\">\n\t\t                      <textarea class=\"form-control\" rows=\"10\" id=\"comment\" value=\"{{openedPatientDetail.doctor_note}}\" readonly=\"\"></textarea>\n\t\t                   </div>\n\t\t                   <br><br>\n\t\t                   <div class=\"text-right\">\n\t\t                      <h5>(Doctor Signature)</h5>\n\t\t                   </div>\n\t\t                </div>\n\t\t             </div>\n\t\t          </td>\n\t\t       </tr>\n\t\t    </tbody>\n\t\t</table>\n\t\t<div class=\"row pagebreak\">\n\t\t    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t       <div class=\"patient-popup\">\n\t\t          <div>\n\t\t             <h4><b> Billing</b></h4>\n\t\t          </div>\n\t\t          <table class=\"table-bordered my-tab\">\n\t\t             <tr>\n\t\t                <th>Name</th>\n\t\t                <td>{{openedPatientDetail.patientName}}</td>\n\t\t             </tr>\n\t\t             <tr>\n\t\t                <th>Bed Number</th>\n\t\t                <td> \n\t\t                   <span *ngIf=\"openedPatientDetail.type=='general'\">G</span>\n\t\t                   <span *ngIf=\"openedPatientDetail.type=='private'\">P</span>\n\t\t                   <span *ngIf=\"openedPatientDetail.type=='semi_private'\">SP</span>-{{openedPatientDetail.bed_number}}\n\t\t                </td>\n\t\t             </tr>\n\t\t             <tr>\n\t\t                <th>Ailment/Procedure</th>\n\t\t                <td>{{openedPatientDetail.procedure}}</td>\n\t\t             </tr>\n\t\t             <tr *ngIf=\"openedPatientDetail.prescription_id\">\n\t\t                <th>Prescription ID</th>\n\t\t                <td> {{openedPatientDetail.prescription_id}}</td>\n\t\t             </tr>\n\t\t             <tr>\n\t\t                <th>Mobile Number</th>\n\t\t                <td> +91-{{openedPatientDetail.phone}}</td>\n\t\t             </tr>\n\t\t             <tr>\n\t\t                <th>Consulting Doctor Name</th>\n\t\t                <td>Dr. {{getDoctorName(openedPatientDetail.consultDoc)}}</td>\n\t\t             </tr>\n\t\t             <tr>\n\t\t                <th>Admit date and Time</th>\n\t\t                <td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.createdAt) | date:'d MMM yy ,h:mm a' }} </td>\n\t\t             </tr>\n\t\t             <tr>\n\t\t                <th>Discharge Date and Time</th>\n\t\t                <td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.discharge_date) | date:'d MMM yy ,h:mm a' }}</td>\n\t\t             </tr>\n\t\t          </table>\n\t\t       </div>\n\t\t    </div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t    <div class=\"col-md-12  col-sm-12 col-xs-12 text-left\">\n\t\t       <div class=\"patient-popup chrges\">\n\t\t          <h4>Occupancy Charges(a):\n\t\t             <span> \n\t\t             {{openedPatientDetail.occupancy_charges}}\n\t\t             </span>\n\t\t          </h4>\n\t\t       </div>\n\t\t    </div>\n\t\t</div>\n\n\n        <div class=\"row pagebreak\">\n               <div class=\"patient-popup discharge-popup\">\n                  <h4>Other Charges (b):</h4>\n                  <table class=\"table table-striped table-bordered table-responsive\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th width=\"370px\"style=\"text-align: center;width:400px;\">Date : Time</th>\n\t\t\t\t\t\t\t<th width=\"170px\">Activity</th>\n\t\t\t\t\t\t\t<th width=\"170px\">Description</th>\n\t\t\t\t\t\t\t<th width=\"140px\">Unit</th>\n\t\t\t\t\t\t\t<th width=\"170px\">Rate</th>\n\t\t\t\t\t\t\t<th width=\"170px\">Amount</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let activity of openedPatientDetail.patient_activities; let i = index;\">\n\t\t\t\t\t\t\t<td width=\"370px\"style=\"text-align: center;width:400px;\"> \n\t\t\t\t\t\t\t<span>{{getTimeFiveAndHalfHoursBefore(activity.createdAt) | date:'d MMM yy ,h:mm a' }}</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width=\"170px\"> \n\t\t\t\t\t\t\t{{activity.type}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width=\"170px\">\n\t\t\t\t\t\t\t{{activity.instruction}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width=\"140px\">\n\t\t\t\t\t\t\t{{activity.unit}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width=\"170px\"> \n\t\t\t\t\t\t\t{{activity.rate}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width=\"170px\"> \n\t\t\t\t\t\t\t{{activity.amount}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"cstm-tr\">\n\t\t\t\t\t\t\t<td colspan=\"5\" class=\"text-right\">Total (b)</td>\n\t\t\t\t\t\t\t<td>{{totalActivitiesAmountPdf}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"cstm-tr\">\n\t\t\t\t\t\t\t<td colspan=\"5\" class=\"text-right\">Gross Total (a+b)</td>\n\t\t\t\t\t\t\t<td>{{totalActivitiesAmountPdf+openedPatientDetail.occupancy_charges}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"cstm-tr\">\n\t\t\t\t\t\t\t<td colspan=\"5\" class=\"text-right\">Advance Received</td>\n\t\t\t\t\t\t\t <td>{{openedPatientDetail.advanceReceived}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"cstm-tr\" *ngIf=\"refundAmountPdf>0\">\n\t\t\t\t\t\t\t<td colspan=\"5\" class=\"text-right\">Total Refunded</td>\n\t\t\t\t\t\t\t<td>{{refundAmountPdf}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"cstm-tr\">\n\t\t\t\t\t\t\t<td colspan=\"5\" class=\"text-right\">Total Bill</td>\n\t\t\t\t\t\t\t<td>{{openedPatientDetail.total_bill}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n                  </table>\n\n               </div>\n         </div>\n\t\t\n      </div>\n   </div>\n</div>\n\n<div class=\"modal-title mg--top\">\n\t<h4 style=\"float: left; width:100%; text-align:left;margin-bottom:5px;\"><b>Clinic Services</b></h4>\n\t\n\t<div class=\"\" style=\"float: left;width:100%;\">\n\t<small>\n\t\t<span>Pharmacy:&nbsp;</span>\n\t\t<span>PATHOLOGY:&nbsp;</span>\n\t\t<span>X-Ray:&nbsp;</span>\n\t\t<span>ECG:&nbsp;</span>\n\t\t<span>Lung Test:&nbsp;</span>\n\t\t<span>ULTRASOUND:&nbsp;</span>\n\t\t<span>MRI:&nbsp;</span>\n\t\t<span>EMG:&nbsp;</span>\n\t\t<span>DOPPLER STUDIES:&nbsp;</span>\n\t\t<span>Eye Tests:&nbsp;</span>\n\t\t<span>TMT:&nbsp;</span>\n\t\t<span>MAMMOGRAPHY:&nbsp;</span>\n\t\t<span>Echo:&nbsp;</span>\n\t\t<span>AUDIOMETRY:&nbsp;</span>\n\t\t<span>UROFLOWMETRY:&nbsp;</span>\n\t\t<span>Nerve Test:&nbsp;</span>\n\t\t<span>BONE DENSITOMETRY:&nbsp;</span>\n\t\t<span>EEG:&nbsp;</span>\n\t\t<span>CT-Scan:&nbsp;</span>\n\t</small>\n\t</div>\n</div>\n\n</div>\n</div>\n</div>\n\n<!-- <div class=\"modal fade cus-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" *ngIf=\"openedPatientDetail\">\n   <div class=\"modal-dialog wrap-tab\" role=\"document\">\n      <div id=\"generatePdfModal\">\n\t\t<div id=\"header-main\" class=\"modal-title mg--top\" *ngIf=\"dataSmartIpd.address && \tdataSmartIpd.address.clinic_name\">\n\t<h4 style=\"float: left; width:100%; text-align: center;\">{{dataSmartIpd.address.clinic_name}}</h4>\n\t<div class=\"\" style=\"float: left;width:50%;\">\n\t<b>Date: </b><span>{{appointmentDate | date:'d MMM yy ,h:mm a' }}</span>\n\t</div>\n\t<div *ngIf=\"dataSmartIpd.address && dataSmartIpd.address.address\" style=\"float: right;width:50%;\">{{dataSmartIpd.address.address}}<br>\n\t<span *ngIf=\"dataSmartIpd.address && dataSmartIpd.address.mobile\" >\n\tIPD contact: {{dataSmartIpd.address.mobile}}</span>\n\t</div>\n\t\t</div>\n\n<div class=\"modal-body\">\n   <div style=\"margin-top: 7em;\">\n      <div class=\"patient-popup\">\n\t\t<div class=\"pat-center\">\n\t\t\t<div class=\"pat-img\">\n\t\t\t\t<img class=\"img-responsive\" src=\"./assets/imgs/no-person.jpg\">\n\t\t\t</div>\n\t\t\t<p>{{openedPatientDetail.patientName}} ({{openedPatientDetail.gender}}), {{openedPatientDetail.age}}Y</p>\n\t\t</div>\n\t\t<table class=\"table-cstm pdf-table\">\n\t\t    <tbody>\n\t\t       <tr>\n\t\t          <th>Bed Number</th>\n\t\t          <td> \n\t\t             <span *ngIf=\"openedPatientDetail.type=='general'\">G</span>\n\t\t             <span *ngIf=\"openedPatientDetail.type=='private'\">P</span>\n\t\t             <span *ngIf=\"openedPatientDetail.type=='semi_private'\">SP</span>-{{openedPatientDetail.bed_number}}\n\t\t          </td>\n\t\t       </tr>\n\t\t       <tr>\n\t\t          <th>Ailment/Procedure</th>\n\t\t          <td>{{openedPatientDetail.procedure}}</td>\n\t\t       </tr>\n\t\t       <tr *ngIf=\"openedPatientDetail.prescription_id\">\n\t\t          <th>Prescription ID</th>\n\t\t          <td> {{openedPatientDetail.prescription_id}}</td>\n\t\t       </tr>\n\t\t       <tr>\n\t\t          <th>Mobile Number</th>\n\t\t          <td> +91-{{openedPatientDetail.phone}}</td>\n\t\t       </tr>\n\t\t       <tr>\n\t\t          <th>Consulting Doctor Name</th>\n\t\t          <td>Dr. {{getDoctorName(openedPatientDetail.consultDoc)}}</td>\n\t\t       </tr>\n\t\t       <tr>\n\t\t          <th>Admit date and Time</th>\n\t\t          <td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.createdAt) | date:'d MMM yy ,h:mm a' }} </td>\n\t\t       </tr>\n\t\t       <tr>\n\t\t          <th>Discharge Date and Time</th>\n\t\t          <td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.discharge_date) | date:'d MMM yy ,h:mm a' }}</td>\n\t\t       </tr>\n\t\t       <tr *ngIf=\"openedPatientDetail.medication.length>0\">\n\t\t          <td colspan=\"2\">\n\t\t             <div class=\"\">\n\t\t                <div style=\"margin-top:8em;\">\n\t\t                   <h4><b> Medicines</b></h4>\n\t\t                </div>\n\t\t                <ol style=\"padding-left:10px\" class=\"med-list\">\n\t\t                   <li *ngFor=\"let data of openedPatientDetail.medication\">\n\t\t                      <span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n\t\t                         {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t                         <span *ngIf=\"data.med_info\">\n\t\t                            <p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t                         </span>\n\t\t                      </span>\n\t\t                      <span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n\t\t                         {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t                         <span *ngIf=\"data.med_info\">\n\t\t                            <p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t                         </span>\n\t\t                      </span>\n\t\t                      <span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n\t\t                         {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n\t\t                         <span *ngIf=\"data.med_info\">\n\t\t                            <p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t                         </span>\n\t\t                      </span>\n\t\t                      <span *ngIf=\"data.name=='Drops'\">\n\t\t                         {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t                         <span *ngIf=\"data.med_info\">\n\t\t                            <p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t                         </span>\n\t\t                      </span>\n\t\t                   </li>\n\t\t                </ol>\n\t\t             </div>\n\t\t          </td>\n\t\t       </tr>\n\t\t       <tr *ngIf=\"openedPatientDetail.woundCare || openedPatientDetail.diet || openedPatientDetail.lifestyle || openedPatientDetail.others\">\n\t\t          <td colspan=\"2\">\n\t\t             <div class=\"row\">\n\t\t                <div class=\"col-lg-12\" style=\"margin-top:6em;\">\n\t\t                   <h4 *ngIf=\"getDischargeInstructionsStatus()\">\n\t\t                      <b>Discharge Instructions</b>\n\t\t                   </h4>\n\t\t                   <h5 *ngIf=\"openedPatientDetail.woundCare && (openedPatientDetail.woundCare.one || openedPatientDetail.woundCare.two)\"><b>Wound Care</b></h5>\n\t\t                   <ol class=\"cstm-ol\" *ngIf=\"openedPatientDetail.woundCare && (openedPatientDetail.woundCare.one || openedPatientDetail.woundCare.two)\">\n\t\t                      <li *ngIf=\"openedPatientDetail.woundCare.one\">{{openedPatientDetail.woundCare.one}}</li>\n\t\t                      <li *ngIf=\"openedPatientDetail.woundCare.two\">{{openedPatientDetail.woundCare.two}}</li>\n\t\t                   </ol>\n\t\t                   <h5 *ngIf=\"openedPatientDetail.diet &&  (openedPatientDetail.diet.one || openedPatientDetail.diet.two)\"><b>Diet</b></h5>\n\t\t                   <ol class=\"cstm-ol\" *ngIf=\"openedPatientDetail.diet && (openedPatientDetail.diet.one || openedPatientDetail.diet.two)\">\n\t\t                      <li *ngIf=\"openedPatientDetail.diet.one\">{{openedPatientDetail.diet.one}}</li>\n\t\t                      <li *ngIf=\"openedPatientDetail.diet.two\">{{openedPatientDetail.diet.two}}</li>\n\t\t                   </ol>\n\t\t                   <h5 *ngIf=\"openedPatientDetail.lifestyle && (openedPatientDetail.lifestyle.one || openedPatientDetail.lifestyle.two)\"><b>Lifestyle changes</b></h5>\n\t\t                   <ol class=\"cstm-ol\" *ngIf=\"openedPatientDetail.lifestyle && (openedPatientDetail.lifestyle.one || openedPatientDetail.lifestyle.two)\">\n\t\t                      <li *ngIf=\"openedPatientDetail.lifestyle.one\">{{openedPatientDetail.lifestyle.one}}</li>\n\t\t                      <li *ngIf=\"openedPatientDetail.lifestyle.two\">{{openedPatientDetail.lifestyle.two}}</li>\n\t\t                   </ol>\n\t\t                   <h5 *ngIf=\"openedPatientDetail.others && (openedPatientDetail.others.one || openedPatientDetail.others.two)\"><b>Other Instructions</b></h5>\n\t\t                   <ol class=\"cstm-ol\" *ngIf=\"openedPatientDetail.others && (openedPatientDetail.others.one || openedPatientDetail.others.two)\">\n\t\t                      <li *ngIf=\"openedPatientDetail.others.one\">{{openedPatientDetail.others.one}}</li>\n\t\t                      <li *ngIf=\"openedPatientDetail.others.two\">{{openedPatientDetail.others.two}}</li>\n\t\t                   </ol>\n\t\t                   <h4><b>Doctor Discharge Note</b></h4>\n\t\t                   <div class=\"form-group doc-note\">\n\t\t                      <textarea class=\"form-control\" rows=\"10\" id=\"comment\" value=\"{{openedPatientDetail.doctor_note}}\" readonly=\"\"></textarea>\n\t\t                   </div>\n\t\t                   <br><br>\n\t\t                   <div class=\"text-right\">\n\t\t                      <h5>(Doctor Signature)</h5>\n\t\t                   </div>\n\t\t                </div>\n\t\t             </div>\n\t\t          </td>\n\t\t       </tr>\n\t\t    </tbody>\n\t\t</table>\n\t\t<div class=\"row pagebreak\">\n\t\t    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t       <div class=\"patient-popup\" style=\"margin-top:6em;\">\n\t\t          <div>\n\t\t             <h4><b> Billing</b></h4>\n\t\t          </div>\n\t\t          <table style=\"width: 80%\" class=\"table-bordered my-tab\">\n\t\t             <tr>\n\t\t                <th>Name</th>\n\t\t                <td>{{openedPatientDetail.patientName}}</td>\n\t\t             </tr>\n\t\t             <tr>\n\t\t                <th>Bed Number</th>\n\t\t                <td> \n\t\t                   <span *ngIf=\"openedPatientDetail.type=='general'\">G</span>\n\t\t                   <span *ngIf=\"openedPatientDetail.type=='private'\">P</span>\n\t\t                   <span *ngIf=\"openedPatientDetail.type=='semi_private'\">SP</span>-{{openedPatientDetail.bed_number}}\n\t\t                </td>\n\t\t             </tr>\n\t\t             <tr>\n\t\t                <th>Ailment/Procedure</th>\n\t\t                <td>{{openedPatientDetail.procedure}}</td>\n\t\t             </tr>\n\t\t             <tr *ngIf=\"openedPatientDetail.prescription_id\">\n\t\t                <th>Prescription ID</th>\n\t\t                <td> {{openedPatientDetail.prescription_id}}</td>\n\t\t             </tr>\n\t\t             <tr>\n\t\t                <th>Mobile Number</th>\n\t\t                <td> +91-{{openedPatientDetail.phone}}</td>\n\t\t             </tr>\n\t\t             <tr>\n\t\t                <th>Consulting Doctor Name</th>\n\t\t                <td>Dr. {{getDoctorName(openedPatientDetail.consultDoc)}}</td>\n\t\t             </tr>\n\t\t             <tr>\n\t\t                <th>Admit date and Time</th>\n\t\t                <td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.createdAt) | date:'d MMM yy ,h:mm a' }} </td>\n\t\t             </tr>\n\t\t             <tr>\n\t\t                <th>Discharge Date and Time</th>\n\t\t                <td>{{getTimeFiveAndHalfHoursBefore(openedPatientDetail.discharge_date) | date:'d MMM yy ,h:mm a' }}</td>\n\t\t             </tr>\n\t\t          </table>\n\t\t       </div>\n\t\t    </div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t    <div class=\"col-md-12  col-sm-12 col-xs-12 text-left\">\n\t\t       <div class=\"patient-popup chrges\">\n\t\t          <h4>Occupancy Charges(a): \n\t\t             <span> \n\t\t             {{openedPatientDetail.occupancy_charges}}\n\t\t             </span>\n\t\t          </h4>\n\t\t       </div>\n\t\t    </div>\n\t\t</div>\n\n\n        <div class=\"row pagebreak\" style=\"margin-top:8em;\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n               <div class=\"patient-popup discharge-popup\">\n                  <h4>Other Charges (b):</h4>\n                  <table class=\"table table-striped table-bordered table-responsive\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Date : Time</th>\n\t\t\t\t\t\t\t<th>Activity</th>\n\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t<th width=\"80px\">Unit</th>\n\t\t\t\t\t\t\t<th width=\"80px\">Rate</th>\n\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n                  </table>\n               </div>\n            </div>\n         </div>\n         <div class=\"row\">\n         \t<div class=\"col-lg-12\">\n         \t\t<table class=\"table table-striped table-bordered table-responsive\">\n         \t\t\t  <tbody>\n                        <tr *ngFor=\"let activity of openedPatientDetail.patient_activities; let i = index;\">\n                           <td width=\"130px\"> \n                              <span>{{getTimeFiveAndHalfHoursBefore(activity.createdAt) | date:'d MMM yy ,h:mm a' }}</span>\n                           </td>\n                           <td> \n                              {{activity.type}}\n                           </td>\n                           <td>\n                              {{activity.instruction}}\n                           </td>\n                           <td class=\"80px\">\n                              {{activity.unit}}\n                           </td>\n                           <td class=\"80px\"> \n                              {{activity.rate}}\n                           </td>\n                           <td> \n                              {{activity.amount}}\n                           </td>\n                        </tr>\n                        <tr class=\"cstm-tr\">\n                           <td colspan=\"5\" class=\"text-right\">Total (b)</td>\n                           <td>{{totalActivitiesAmountPdf}}</td>\n                        </tr>\n                        <tr class=\"cstm-tr\">\n                           <td colspan=\"5\" class=\"text-right\">Gross Total (a+b)</td>\n                           <td>{{totalActivitiesAmountPdf+openedPatientDetail.occupancy_charges}}</td>\n                        </tr>\n                        <tr class=\"cstm-tr\">\n                           <td colspan=\"5\" class=\"text-right\">Advance Received</td>\n                           <td>{{openedPatientDetail.advanceReceived}}</td>\n                        </tr>\n                        <tr class=\"cstm-tr\" *ngIf=\"refundAmountPdf>0\">\n                           <td colspan=\"5\" class=\"text-right\">Total Refunded</td>\n                           <td>{{refundAmountPdf}}</td>\n                        </tr>\n                        <tr class=\"cstm-tr\">\n                           <td colspan=\"5\" class=\"text-right\">Total Bill</td>\n                           <td>{{openedPatientDetail.total_bill}}</td>\n                        </tr>\n                    </tbody>\n         \t\t</table>\n         \t</div>\n         </div>\n      </div>\n   </div>\n</div>\n\n<div id=\"footer-main\" class=\"modal-title mg--top\">\n\t<h4 style=\"float: left; width:100%; text-align:left;margin-bottom:5px;\"><b>Clinic Services</b></h4>\n\t\n\t<div class=\"\" style=\"float: left;width:100%;\">\n\t<small>\n\t\t<span>Pharmacy:&nbsp;</span>\n\t\t<span>PATHOLOGY:&nbsp;</span>\n\t\t<span>X-Ray:&nbsp;</span>\n\t\t<span>ECG:&nbsp;</span>\n\t\t<span>Lung Test:&nbsp;</span>\n\t\t<span>ULTRASOUND:&nbsp;</span>\n\t\t<span>MRI:&nbsp;</span>\n\t\t<span>EMG:&nbsp;</span>\n\t\t<span>DOPPLER STUDIES:&nbsp;</span>\n\t\t<span>Eye Tests:&nbsp;</span>\n\t\t<span>TMT:&nbsp;</span>\n\t\t<span>MAMMOGRAPHY:&nbsp;</span>\n\t\t<span>Echo:&nbsp;</span>\n\t\t<span>AUDIOMETRY:&nbsp;</span>\n\t\t<span>UROFLOWMETRY:&nbsp;</span>\n\t\t<span>Nerve Test:&nbsp;</span>\n\t\t<span>BONE DENSITOMETRY:&nbsp;</span>\n\t\t<span>EEG:&nbsp;</span>\n\t\t<span>CT-Scan:&nbsp;</span>\n\t</small>\n\t</div>\n</div>\n\n</div>\n</div>\n</div> -->\n\n\n\n\n<div class=\"modal fade cus-modal\" id=\"dischargeMessage\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  \t<div class=\"modal-dialog\" role=\"document\">\n    \t<div class=\"modal-content\">\n    \t\t<div class=\"modal-body newform-margin\">\n        \t\t<div class=\"row\">\n        \t\t\t<div class=\"col-lg-12 text-center\">\n        \t\t\t\t<i class=\"fa fa-check-circle-o\" style=\"font-size: 100px;color:#69cc69;\"></i>\n        \t\t\t</div>\n\t\t    \t\t<div class=\"col-lg-12 text-center\">\n\t\t    \t\t\t<h3>Requested</h3><br>\n\t\t    \t\t\t<h4>Discharge request sent to doctor successfully </h4><br>\n\t\t    \t\t\t<button class=\"btn btn-info\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">OK</span></button>\n\t\t    \t\t</div>\n        \t\t</div>\n      \t\t</div>\n\n      \t\t<!-- <div class=\"modal-footer\">\n\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n\t\t\t\t\t<button class=\"btn btn-custom\" type=\"submit\"> Register </button>\n\t\t\t\t</div>\n      \t\t</div> -->\n\n\t\t</div>\n  \t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header-four-layout/dashboardipd/dashboardipd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardipdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs-compat/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_fullcalendar__ = __webpack_require__("../../../../ng-fullcalendar/ng-fullcalendar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__confirmation_popup_confirmation_dialog_confirmation_dialog_component__ = __webpack_require__("../../../../../src/app/confirmation-popup/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__confirmation_popup_custom_dialog_custom_dialog_component__ = __webpack_require__("../../../../../src/app/confirmation-popup/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_socket_io_client__);
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




var DashboardipdComponent = /** @class */ (function () {
    function DashboardipdComponent(formBuilder, toastr, userService, router, dialog, _spinner) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this._spinner = _spinner;
        this.events = null;
        this.appointmentDoctor = "";
        this.appointmentDate = new Date();
        this.doctorNote = null;
        this.dischargeDate = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MM-yyyy',
            defaultOpen: false
        };
        this.newDischargeDate = new Date();
        this.trigger = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
    }
    DashboardipdComponent.prototype.ngOnInit = function () {
        var _this = this;
        //current time
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        var hoursIST = ISTTime.getHours();
        var minutesIST = ISTTime.getMinutes();
        this.discharegeTime = null;
        // this.discharegeTime.hour =  hoursIST
        // this.discharegeTime.minute = minutesIST
        //current time
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
        this.smartIpdData = JSON.parse(localStorage['smartIpdDetails']);
        this.pateintPicPath = __WEBPACK_IMPORTED_MODULE_9__environments_environment_prod__["a" /* environment */].patientPic;
        this.generalPatients = [];
        this.semiPatients = [];
        this.privatePatients = [];
        this.patientActivities = [];
        this.approvedPatients = [];
        this.webCam = false;
        this.imgSrc = './assets/imgs/placeholder.png';
        this.appointmentsForCalender = [{
                start: new Date().toJSON().toString().substr(0, 10),
                title: '1',
                time: ''
            }];
        this.shiftsOfParticularDay = [];
        this.GetSmartIpdDataAfterLogin();
        //Akshay 27 Nov Start
        this.addpatientModal = {};
        this.addpatientModal.consultDoc = "";
        this.addpatientModal.gender = "";
        this.registerForm = this.formBuilder.group({
            'phone': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].maxLength(10)
                ])],
            'patientName': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ]*')])],
            'age': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].max(100), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].min(0)])],
            'procedure': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ]*')])],
            'advanceReceived': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].min(0)
                ])],
            'gender': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required])],
            'consultDoc': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required])],
        });
        this.bedType = {};
        // Akshay 27 Nov End
        this.genLength = 0;
        this.privateLen = 0;
        this.semiprivateLen = 0;
        this.totalApprovedPatients = 0;
        this.addpatientModalData = {};
        this.addpatientModalData.type = "";
        this.addActivityForm = this.formBuilder.group({
            'type': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required])],
            'instruction': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ]*'),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].maxLength(80), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].min(0)])],
            'unit': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*')])],
            'rate': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].max(9999999), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].min(0)])],
            'amount': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].min(0),
                ])],
        });
        this.dischargeDate = new Date();
        console.log(this.smartIpdData.dataSmartIpd._id.toString());
        this.socket = __WEBPACK_IMPORTED_MODULE_12_socket_io_client__(__WEBPACK_IMPORTED_MODULE_9__environments_environment_prod__["a" /* environment */].socket);
        this.socket.emit('room join', {
            room_id: this.smartIpdData.dataSmartIpd._id.toString()
        });
        this.socket.on('registrationBooked', function (msg) {
            _this.ngOnInit();
        });
    };
    DashboardipdComponent.prototype.GetSmartIpdDataAfterLogin = function () {
        var _this = this;
        this.loading = true;
        var object = {
            smart_ipd_id: this.smartIpdData.dataSmartIpd._id
        };
        this.userService.GetSmartIpdDataAfterLogin(object).subscribe(function (data) {
            console.log(data);
            _this.dataDoctors = [];
            if (data.response == true) {
                _this.dataDoctors = data.doctorsRegisteredForSmartClinic;
                _this.dataSmartIpd = data.dataSmartIpd;
                _this.approvedPatients = data.dataIpdPatientsApproved;
                for (var i = 0; i < _this.approvedPatients.length; i++) {
                    _this.totalApprovedPatients = _this.totalApprovedPatients + _this.approvedPatients[i].approvedPatients.length;
                }
                for (var i = 0; i < data.dataIpdPatients.length; i++) {
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
                    for (var i = 0; i < _this.genLength; i++) {
                        var id = _this.findUniqueBedNumber(i + 1, _this.generalPatients);
                        _this.generalPatients.push({
                            vacant: true,
                            bed_number: id
                        });
                    }
                    for (var i = 0; i < _this.privateLen; i++) {
                        var id = _this.findUniqueBedNumber(i + 1, _this.privatePatients);
                        _this.privatePatients.push({
                            vacant: true,
                            bed_number: id
                        });
                    }
                    for (var i = 0; i < _this.semiprivateLen; i++) {
                        var id = _this.findUniqueBedNumber(i + 1, _this.semiPatients);
                        _this.semiPatients.push({
                            vacant: true,
                            bed_number: id
                        });
                    }
                }
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardipdComponent.prototype.findUniqueBedNumber = function (id, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].bed_number == id) {
                id = id + 1;
                var idd = this.findUniqueBedNumber(id, array);
                return idd;
            }
        }
        return id;
    };
    //Akshay 28 Nov start
    DashboardipdComponent.prototype.openPatientModal = function (data, id, type, patient) {
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
            this.calculateCharges();
            // this.loading = true
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
    DashboardipdComponent.prototype.openWebCam = function () {
        this.webCam = true;
    };
    DashboardipdComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
        this.webCam = false;
    };
    DashboardipdComponent.prototype.handleImage = function (webcamImage) {
        console.info('received webcam image', webcamImage);
        this.imgSrc = webcamImage._imageAsDataUrl;
    };
    Object.defineProperty(DashboardipdComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DashboardipdComponent.prototype.openCalendar = function () {
        this.events = this.appointmentsForCalender;
        this.calendarOptions = {
            editable: true,
            eventLimit: false,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: ''
            },
            events: this.appointmentsForCalender
        };
        $("#appointmentCalender").modal("show");
    };
    //calendar
    DashboardipdComponent.prototype.clickButton = function (model) {
        this.displayEvent = model;
    };
    DashboardipdComponent.prototype.dayClick = function (model) {
        this.calenderDateClicked(model.date._d);
    };
    DashboardipdComponent.prototype.eventClick = function (model) {
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,
                title: model.event.title,
                allDay: model.event.allDay
                // other params
            },
            duration: {}
        };
        this.displayEvent = model;
        this.calenderDateClicked(model.event.start._d);
    };
    DashboardipdComponent.prototype.calenderDateClicked = function (model) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (new Date(model.setHours(0, 0, 0, 0)) >= today) {
            console.log(model);
            this.appointmentDate = model;
            var day = model.toString().substr(0, 3);
            var doctor;
            var consulation;
            doctor = {};
            // for (var i = 0; i < this.dataDoctors.length; i++) {
            //     if (this.dataDoctors[i]._id == this.appointmentDoctor) {
            doctor = this.dataDoctors[0];
            //         break;
            //     }
            // }
            // console.log(doctor)
            var boolean = true;
            for (var i = 0; i < doctor.consultation_schedule.length; i++) {
                if (day == "Mon") {
                    if (doctor.consultation_schedule[i].Monday == true) {
                        consulation = doctor.consultation_schedule[i];
                        boolean = false;
                        break;
                    }
                }
                else if (day == "Tue") {
                    if (doctor.consultation_schedule[i].Tuesday == true) {
                        consulation = doctor.consultation_schedule[i];
                        boolean = false;
                        break;
                    }
                }
                else if (day == "Wed") {
                    if (doctor.consultation_schedule[i].Wednesday == true) {
                        consulation = doctor.consultation_schedule[i];
                        boolean = false;
                        break;
                    }
                }
                else if (day == "Thu") {
                    if (doctor.consultation_schedule[i].Thursday == true) {
                        consulation = doctor.consultation_schedule[i];
                        boolean = false;
                        break;
                    }
                }
                else if (day == "Fri") {
                    if (doctor.consultation_schedule[i].Friday == true) {
                        consulation = doctor.consultation_schedule[i];
                        boolean = false;
                        break;
                    }
                }
                else if (day == "Sat") {
                    if (doctor.consultation_schedule[i].Saturday == true) {
                        consulation = doctor.consultation_schedule[i];
                        boolean = false;
                        break;
                    }
                }
                else if (day == "Sun") {
                    if (doctor.consultation_schedule[i].Sunday == true) {
                        consulation = doctor.consultation_schedule[i];
                        boolean = false;
                        break;
                    }
                }
            }
            // console.log(consulation)
            if (boolean == false) {
                this.shiftsOfParticularDay = [];
                for (var i = 0; i < consulation.shifts.length; i++) {
                    var shiftOfOneSchedule;
                    shiftOfOneSchedule = {};
                    shiftOfOneSchedule.startHour = parseInt(consulation.shifts[i].fromTime.hour) * 60;
                    shiftOfOneSchedule.endHour = parseInt(consulation.shifts[i].toTime.hour) * 60;
                    shiftOfOneSchedule.consultationTime = parseInt(doctor.avgConsTime.substr(0, 2));
                    var startTime = shiftOfOneSchedule.startHour;
                    var endTime = shiftOfOneSchedule.endHour;
                    var schedules = [];
                    while (startTime + shiftOfOneSchedule.consultationTime <= endTime) {
                        schedules.push({
                            startHour: Math.trunc(startTime / 60).toString(),
                            startMin: Math.trunc(startTime % 60).toString(),
                            endHour: Math.trunc((startTime + shiftOfOneSchedule.consultationTime) / 60).toString(),
                            endMin: Math.trunc((startTime + shiftOfOneSchedule.consultationTime) % 60).toString()
                        });
                        this.getClassTime(schedules[schedules.length - 1]);
                        startTime = startTime + shiftOfOneSchedule.consultationTime;
                    }
                    this.shiftsOfParticularDay.push({
                        shift: schedules,
                        startHour: consulation.shifts[i].fromTime.hour.toString(),
                        startMin: consulation.shifts[i].fromTime.minute.toString(),
                        endHour: consulation.shifts[i].toTime.hour.toString(),
                        endMin: consulation.shifts[i].toTime.minute.toString()
                    });
                }
                console.log(this.shiftsOfParticularDay);
                this.checkCustomTimeShifts();
            }
            else {
                this.toastr.warning("Doctor does not work on this day", "Warning");
                return;
            }
            $("#selectAppointmentTime").modal("show");
        }
        else {
            this.toastr.warning("Appointment cant be booked for past dates", "Warning");
        }
    };
    DashboardipdComponent.prototype.getClassTime = function (shift) {
        var _this = this;
        if (this.appointmentsForCalender.length > 0) {
            var appointments;
            appointments = this.appointmentsForCalender.filter(function (d) { return d.start == new Date(new Date(_this.appointmentDate).setDate(_this.appointmentDate.getDate() + 1)).toJSON().toString().substr(0, 10); });
            if (appointments.length > 0) {
                for (var i = 0; i < appointments[0].time.length; i++) {
                    if (appointments[0].time[i].startHour == shift.startHour && appointments[0].time[i].startMin == shift.startMin) {
                        shift.already = true;
                    }
                }
            }
        }
    };
    DashboardipdComponent.prototype.checkCustomTimeShifts = function () {
        var _this = this;
        this.customShifts = [];
        if (this.appointmentsForCalender.length > 0) {
            var appointments;
            appointments = this.appointmentsForCalender.filter(function (d) { return d.start == new Date(new Date(_this.appointmentDate).setDate(_this.appointmentDate.getDate() + 1)).toJSON().toString().substr(0, 10); });
            if (appointments.length > 0) {
                for (var i = 0; i < appointments[0].time.length; i++) {
                    if (appointments[0].time[i].customTime) {
                        this.customShifts.push(appointments[0].time[i]);
                    }
                }
            }
        }
    };
    DashboardipdComponent.prototype.getClassSlot = function (data) {
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        var hoursIST = ISTTime.getHours();
        var minutesIST = ISTTime.getMinutes();
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (data.already) {
            return 'already-selected';
        }
        else {
            if (today.toString() == this.appointmentDate.toString()) {
                if (data.startHour < hoursIST) {
                    return 'grey-slot';
                }
                else if (data.startHour == hoursIST) {
                    if (data.startMin <= minutesIST) {
                        return 'grey-slot';
                    }
                }
            }
            else {
                return 'blue-slot';
            }
        }
    };
    DashboardipdComponent.prototype.onTimeSelection = function (data) {
        $("#selectAppointmentTime").modal("hide");
        $("#appointmentCalender").modal("hide");
        // $("#addpatientModal").modal("hide");
        // $("#addpatientModal").modal("show");
    };
    //calendar end
    //Akshay 28 Nov
    DashboardipdComponent.prototype.registerClick = function () {
        var _this = this;
        this.addpatientModal.type = this.bedType.store;
        this.addpatientModal.bed_number = this.bedNumber;
        if (this.imgSrc != './assets/imgs/placeholder.png') {
            this.addpatientModal.imgSrc = this.imgSrc;
        }
        this.addpatientModal.smart_ipd_id = this.dataSmartIpd._id;
        this.addpatientModal.clinic_id = this.adminDoctor.doctm_clinic_id;
        this.loading = true;
        this.userService.BookIpdForPatient(this.addpatientModal).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.toastr.success(data.message, "Success");
                $("#addpatientModal").modal("hide");
                _this.ngOnInit();
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardipdComponent.prototype.resetForm = function () {
        this.registerForm.reset();
        this.imgSrc = './assets/imgs/placeholder.png';
    };
    DashboardipdComponent.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    DashboardipdComponent.prototype.GetPatientLastPrescription = function () {
        var _this = this;
        if (this.addpatientModal.patientName && this.addpatientModal.patientName != null && this.addpatientModal.patientName != '' && this.addpatientModal.patientName.trim().length > 0) {
            var object = void 0;
            object = {};
            object.clinic_id = this.clinic_id;
            object.mobile = this.addpatientModal.phone;
            object.name = this.addpatientModal.patientName;
            // this.loading = true
            this.userService.GetPatientLastPrescription(object).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    _this.addpatientModal.age = data.data.registration.age;
                    _this.addpatientModal.gender = data.data.registration.gender;
                }
                // this.loading = false
            }, function (err) {
                console.log(err);
            });
        }
    };
    DashboardipdComponent.prototype.findPatientNameFromPhone = function (data) {
        var _this = this;
        if (!isNaN(data)) {
            data = data.trim();
            if (data.length > 0) {
                var object = void 0;
                object = {};
                //  var doctor = this.admin.filter(d=>d._id.toString()==this.appointmentDoctor.toString())
                object.clinic_id = this.clinic_id;
                object.mobile = data;
                // this.loading = true
                this.userService.GetPatientDetail(object).subscribe(function (data) {
                    console.log(data);
                    _this.patientList = [];
                    _this.patientList1 = [];
                    if (data.response == true) {
                        if (data.data.length == 1) {
                            _this.addpatientModal.patientName = data.data[0].name;
                        }
                        else {
                            _this.patientList = data.data;
                            _this.patientList1 = data.data;
                        }
                    }
                    // this.loading = false
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    DashboardipdComponent.prototype.onKey = function (procedure) {
        var _this = this;
        var object;
        object = {};
        object.clinic_id = this.clinic_id;
        object.procedure = procedure;
        this.userService.FindProcedureSuggestion(object).subscribe(function (data) {
            console.log(data);
            _this.suggestionList = [];
            if (data.response == true) {
                _this.suggestionList = data.data;
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardipdComponent.prototype.openActivitySheet = function () {
        // this.userService.GetAllIpdActivityOfPatient(this.openedPatientDetail._id).subscribe(data => {
        //     console.log(data)
        //     this.suggestionList = []
        //     if (data.response == true) {
        //         this.patientActivities = data.data
        $("#activityModal").modal("show");
        //     }
        // }, err => {
        //     console.log(err);
        // })
    };
    DashboardipdComponent.prototype.addActivity = function () {
        this.addUpdateActivityText = "Add Activity";
        this.addpatientModalData.type = "";
        $("#addActivityModal").modal("show");
    };
    DashboardipdComponent.prototype.updateActivity = function (data, id) {
        this.addUpdateActivityText = "Update Activity";
        this.updateActivityId = id;
        // this.addpatientModalData = Object.assign({}, data)
        this.addpatientModalData.type = data.type;
        if (data.instruction) {
            this.addpatientModalData.instruction = data.instruction;
        }
        if (data.unit) {
            this.addpatientModalData.unit = data.unit;
        }
        if (data.rate) {
            this.addpatientModalData.rate = data.rate;
        }
        if (data.amount) {
            this.addpatientModalData.amount = data.amount;
        }
        $("#addActivityModal").modal("show");
    };
    DashboardipdComponent.prototype.addUpdateActivity = function () {
        var _this = this;
        if (this.addUpdateActivityText == "Add Activity") {
            this.addpatientModalData.amount = this.addpatientModalData.unit * this.addpatientModalData.rate;
            this.addpatientModalData.ipdPatientId = this.openedPatientDetail._id;
            this.loading = true;
            this.userService.AddActivity(this.addpatientModalData).subscribe(function (data) {
                console.log(_this.addpatientModalData);
                _this.loading = false;
                if (data.response == true) {
                    $("#addActivityModal").modal("hide");
                    // $("#patientModal").modal("hide");
                    // $("#activityModal").modal("hide");                
                    _this.toastr.success(data.message, "Success");
                    // this.ngOnInit()
                    _this.openPatientModal(_this.openedPatientDetail.vacant, _this.openedPatientDetail.bed_number, _this.bedType.show + " Bed", _this.openedPatientDetail);
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
        else if (this.addUpdateActivityText == "Update Activity") {
            this.addpatientModalData._id = this.updateActivityId;
            this.loading = true;
            this.userService.UpdateActivity(this.addpatientModalData).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    $("#addActivityModal").modal("hide");
                    // $("#patientModal").modal("hide");
                    // $("#activityModal").modal("hide");                
                    _this.toastr.success(data.message, "Success");
                    // this.ngOnInit()
                    _this.openPatientModal(_this.openedPatientDetail.vacant, _this.openedPatientDetail.bed_number, _this.bedType.show + " Bed", _this.openedPatientDetail);
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    DashboardipdComponent.prototype.DeleteActivity = function (activity) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__confirmation_popup_confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */], {
            // width: '250px',
            data: activity.instruction
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result == "yes") {
                _this.loading = true;
                _this.userService.DeleteActivity(activity._id).subscribe(function (data) {
                    console.log(data);
                    _this.loading = false;
                    if (data.response == true) {
                        _this.toastr.success(data.message, "Success");
                        $("#addActivityModal").modal("hide");
                        $("#patientModal").modal("hide");
                        $("#activityModal").modal("hide");
                        _this.ngOnInit();
                    }
                    else {
                        _this.toastr.error(data.message, "Error");
                    }
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                console.log("error or No Thanks button clicked");
            }
        });
    };
    DashboardipdComponent.prototype.printDischarge = function () {
        var _this = this;
        for (var i = 0; i < this.patientActivities.length; i++) {
            if (isNaN(this.patientActivities[i].unit) || isNaN(this.patientActivities[i].rate)) {
                this.toastr.warning('Invalid unit or rate', 'Warning');
                return;
            }
        }
        this.newDischargeDate.setSeconds(0);
        var getTime = new Date();
        getTime.setSeconds(0);
        if (this.discharegeTime == null) {
            this.toastr.warning('Invalid discharge time', 'Warning');
            return;
        }
        else if (new Date(this.newDischargeDate) < getTime) {
            this.toastr.warning('Invalid discharge date and time', 'Warning');
            return;
        }
        else if (this.totalActivitiesOutstandingAmount < 0) {
            this.toastr.warning('Amount can not be negative', 'Warning');
            return;
        }
        else {
            var object = {
                id: this.openedPatientDetail.id,
                doctor_note: this.doctorNote,
                duration_days: this.differenceInDays,
                duration_hours: this.differenceInHours,
                discharge_date: this.newDischargeDate,
                patient_activities: this.patientActivities,
                total_bill: this.totalActivitiesAmount + this.occupancyCharges,
                occupancy_charges: this.occupancyCharges
            };
            console.log(object);
            this.loading = true;
            this.userService.RequestToDischargePatient(object).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.toastr.success(data.message, "Success");
                    $("#addActivityModal").modal("hide");
                    $("#patientModal").modal("hide");
                    $("#activityModal").modal("hide");
                    $("#dischargeModal").modal("hide");
                    // $('#discharge_sheet').printThis({
                    //     debug: false,
                    //     importCSS: true,
                    //     importStyle: true,
                    //     printContainer: true,
                    //     pageTitle: "Prescription",
                    //     removeInline: false,
                    //     printDelay: 333,
                    //     header: null,
                    //     formValues: true
                    // });
                    // setTimeout(() => {
                    _this.ngOnInit();
                    // }, 1500);
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    DashboardipdComponent.prototype.calculateCharges = function () {
        this.totalActivitiesAmount = 0;
        // this.occupancyCharges = 0
        this.occupancyHoursAmount = 0;
        this.totalActivitiesOutstandingAmount = 0;
        for (var i = 0; i < this.patientActivities.length; i++) {
            if (!this.patientActivities[i].unit) {
                this.patientActivities[i].unit = 0;
            }
            if (!this.patientActivities[i].rate) {
                this.patientActivities[i].rate = 0;
            }
            this.patientActivities[i].amount = this.patientActivities[i].unit * this.patientActivities[i].rate;
            this.totalActivitiesAmount = this.totalActivitiesAmount + this.patientActivities[i].amount;
        }
        var diff = (new Date(this.newDischargeDate).getTime() - new Date(this.openedPatientDetail.createdAt).getTime()) / 1000;
        diff /= (60 * 60);
        var hoursDifference = Math.abs(Math.round(diff));
        this.differenceInDays = Math.trunc(hoursDifference / 24);
        this.differenceInHours = Math.trunc(hoursDifference % 24);
        if (!this.bedCharges) {
            this.bedCharges = 0;
        }
        this.occupancyHoursAmount = (this.bedCharges / 24) * this.differenceInHours;
        // this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
        this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges;
        if (!this.openedPatientDetail.advanceReceived) {
            this.openedPatientDetail.advanceReceived = 0;
        }
        this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.openedPatientDetail.advanceReceived;
        if (this.totalActivitiesOutstandingAmount < 0) {
            this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2 * this.totalActivitiesOutstandingAmount));
            this.totalActivitiesOutstandingAmount = 0;
        }
        else {
            this.refundAmount = 0;
        }
    };
    DashboardipdComponent.prototype.onDateSelect = function (evt) {
        if (new Date(this.openedPatientDetail.createdAt) >= new Date(evt.toISOString())) {
            this.toastr.warning('Invalid discharge date', 'Warning');
        }
        else {
            var diff = (new Date(evt).getTime() - new Date(this.openedPatientDetail.createdAt).getTime()) / 1000;
            diff /= (60 * 60);
            var hoursDifference = Math.abs(Math.round(diff));
            this.differenceInDays = Math.trunc(hoursDifference / 24);
            this.differenceInHours = Math.trunc(hoursDifference % 24);
            this.occupancyHoursAmount = (this.bedCharges / 24) * this.differenceInHours;
            this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges) + this.occupancyHoursAmount);
            this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges;
            if (!this.openedPatientDetail.advanceReceived) {
                this.openedPatientDetail.advanceReceived = 0;
            }
            this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.openedPatientDetail.advanceReceived;
            if (this.totalActivitiesOutstandingAmount < 0) {
                this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2 * this.totalActivitiesOutstandingAmount));
                this.totalActivitiesOutstandingAmount = 0;
            }
            else {
                this.refundAmount = 0;
            }
        }
    };
    DashboardipdComponent.prototype.getDetailOfClinic = function () {
        this.smartIpdData = JSON.parse(localStorage['smartIpdDetails']);
    };
    DashboardipdComponent.prototype.onKey1 = function (instruction) {
        var _this = this;
        var object;
        object = {};
        object.id = this.openedPatientDetail.id;
        object.instruction = instruction;
        this.userService.FindInstructionSuggestion(object).subscribe(function (data) {
            console.log(data);
            _this.suggestionListInstruction = [];
            if (data.response == true) {
                _this.suggestionListInstruction = data.data;
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardipdComponent.prototype.getDifferenceInDays = function () {
        if (this.discharegeTime == null) {
            return;
        }
        this.newDischargeDate = new Date(this.dischargeDate);
        this.newDischargeDate.setHours(this.discharegeTime.hour, this.discharegeTime.minute);
        var diff = (new Date(this.newDischargeDate).getTime() - new Date(this.openedPatientDetail.createdAt).getTime()) / 1000;
        diff /= (60 * 60);
        var hoursDifference = Math.abs(Math.round(diff));
        this.differenceInDays = Math.trunc(hoursDifference / 24);
        this.differenceInHours = Math.trunc(hoursDifference % 24);
        this.occupancyHoursAmount = (this.bedCharges / 24) * this.differenceInHours;
        this.occupancyHoursAmount = (this.bedCharges / 24) * this.differenceInHours;
        // this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
        this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges;
        if (!this.openedPatientDetail.advanceReceived) {
            this.openedPatientDetail.advanceReceived = 0;
        }
        this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.openedPatientDetail.advanceReceived;
        if (this.totalActivitiesOutstandingAmount < 0) {
            this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2 * this.totalActivitiesOutstandingAmount));
            this.totalActivitiesOutstandingAmount = 0;
        }
        else {
            this.refundAmount = 0;
        }
        return this.differenceInDays;
    };
    DashboardipdComponent.prototype.getDifferenceInHours = function () {
        if (this.discharegeTime == null) {
            return;
        }
        this.newDischargeDate = new Date(this.dischargeDate);
        this.newDischargeDate.setHours(this.discharegeTime.hour, this.discharegeTime.minute);
        var diff = (new Date(this.newDischargeDate).getTime() - new Date(this.openedPatientDetail.createdAt).getTime()) / 1000;
        diff /= (60 * 60);
        var hoursDifference = Math.abs(Math.round(diff));
        this.differenceInDays = Math.trunc(hoursDifference / 24);
        this.differenceInHours = Math.trunc(hoursDifference % 24);
        this.occupancyHoursAmount = (this.bedCharges / 24) * this.differenceInHours;
        this.occupancyHoursAmount = (this.bedCharges / 24) * this.differenceInHours;
        // this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
        this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges;
        if (!this.openedPatientDetail.advanceReceived) {
            this.openedPatientDetail.advanceReceived = 0;
        }
        this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.openedPatientDetail.advanceReceived;
        if (this.totalActivitiesOutstandingAmount < 0) {
            this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2 * this.totalActivitiesOutstandingAmount));
            this.totalActivitiesOutstandingAmount = 0;
        }
        else {
            this.refundAmount = 0;
        }
        return this.differenceInHours;
    };
    DashboardipdComponent.prototype.getPatientListClassBorder = function (patient) {
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
    DashboardipdComponent.prototype.getPatientListClass = function (patient) {
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
    DashboardipdComponent.prototype.getImgPatient = function (patient) {
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
    DashboardipdComponent.prototype.resetAddActivityForm = function () {
        this.addActivityForm.reset();
    };
    DashboardipdComponent.prototype.openConfirmationDialog = function (activity) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__confirmation_popup_custom_dialog_custom_dialog_component__["a" /* CustomDialogComponent */], {
            data: {
                header: "Confirmation",
                body: "Are you sure you want to generate bill for this patient ?"
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result == "yes") {
                $("#dischargeModal").modal("show");
                $('textarea').autoResize();
            }
            else {
                console.log("error or No Thanks button clicked");
            }
        });
    };
    DashboardipdComponent.prototype.getDoctorName = function (id) {
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if (this.dataDoctors[i]._id.toString() == id.toString()) {
                return this.dataDoctors[i].first_name;
            }
        }
    };
    DashboardipdComponent.prototype.printPdfAndDischarge = function () {
        var _this = this;
        this.loading = true;
        this.userService.UpdateDischargeStatusIpdPatient(this.openedPatientDetail).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.toastr.success(data.message, "Success");
                $("#dischargePatientPdf").modal("hide");
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
                    _this.ngOnInit();
                }, 1000);
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardipdComponent.prototype.getDischargeInstructionsStatus = function () {
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
    DashboardipdComponent.prototype.onTimeChange = function () {
        if (this.discharegeTime == null) {
            return;
        }
        this.newDischargeDate = new Date(this.dischargeDate);
        this.newDischargeDate.setHours(this.discharegeTime.hour, this.discharegeTime.minute);
        var diff = (new Date(this.newDischargeDate).getTime() - new Date(this.openedPatientDetail.createdAt).getTime()) / 1000;
        diff /= (60 * 60);
        var hoursDifference = Math.abs(Math.round(diff));
        this.differenceInDays = Math.trunc(hoursDifference / 24);
        this.differenceInHours = Math.trunc(hoursDifference % 24);
        this.occupancyHoursAmount = (this.bedCharges / 24) * this.differenceInHours;
        this.occupancyHoursAmount = (this.bedCharges / 24) * this.differenceInHours;
        this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges) + this.occupancyHoursAmount);
        this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges;
        if (!this.openedPatientDetail.advanceReceived) {
            this.openedPatientDetail.advanceReceived = 0;
        }
        this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.openedPatientDetail.advanceReceived;
        if (this.totalActivitiesOutstandingAmount < 0) {
            this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2 * this.totalActivitiesOutstandingAmount));
            this.totalActivitiesOutstandingAmount = 0;
        }
        else {
            this.refundAmount = 0;
        }
    };
    DashboardipdComponent.prototype.getTimeFiveAndHalfHoursBefore = function (date) {
        return (new Date(date).setMinutes(new Date(date).getMinutes() - 330));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_ng_fullcalendar__["a" /* CalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ng_fullcalendar__["a" /* CalendarComponent */])
    ], DashboardipdComponent.prototype, "ucCalendar", void 0);
    DashboardipdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-dashboardipd',
            template: __webpack_require__("../../../../../src/app/header-four-layout/dashboardipd/dashboardipd.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-four-layout/dashboardipd/dashboardipd.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_0__theme_services__["b" /* BaThemeSpinner */]])
    ], DashboardipdComponent);
    return DashboardipdComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-four-layout/dashboardipd/dashboardipd.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardipdModule", function() { return DashboardipdModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboardipd_routing_module__ = __webpack_require__("../../../../../src/app/header-four-layout/dashboardipd/dashboardipd-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboardipd_component__ = __webpack_require__("../../../../../src/app/header-four-layout/dashboardipd/dashboardipd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_webcam__ = __webpack_require__("../../../../ngx-webcam/ngx-webcam.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_fullcalendar__ = __webpack_require__("../../../../ng-fullcalendar/ng-fullcalendar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DashboardipdModule = /** @class */ (function () {
    function DashboardipdModule() {
    }
    DashboardipdModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__dashboardipd_routing_module__["a" /* DashboardipdRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_webcam__["a" /* WebcamModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_fullcalendar__["b" /* FullCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__dashboardipd_component__["a" /* DashboardipdComponent */]]
        })
    ], DashboardipdModule);
    return DashboardipdModule;
}());



/***/ })

});
//# sourceMappingURL=dashboardipd.module.chunk.js.map