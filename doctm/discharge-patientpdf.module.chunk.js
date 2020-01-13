webpackJsonp(["discharge-patientpdf.module"],{

/***/ "../../../../../src/app/header-two-layout/discharge-patientpdf/discharge-patientpdf-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DischargePatientpdfRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discharge_patientpdf_component__ = __webpack_require__("../../../../../src/app/header-two-layout/discharge-patientpdf/discharge-patientpdf.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__discharge_patientpdf_component__["a" /* DischargePatientpdfComponent */]
    }
];
var DischargePatientpdfRoutingModule = /** @class */ (function () {
    function DischargePatientpdfRoutingModule() {
    }
    DischargePatientpdfRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DischargePatientpdfRoutingModule);
    return DischargePatientpdfRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/discharge-patientpdf/discharge-patientpdf.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cus-content-wrapper {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 15px;\r\n}\r\n.cus-content-wrapper .cus-content {\r\n    margin-left: 0px;\r\n}\r\n.cus-content {\r\n    position: relative;\r\n}\r\n.list-bedul {\r\n    float: left;\r\n    padding: 0;\r\n    width: 100%;\r\n    margin: 30px 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -moz-flex;\r\n    display: -o-flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    list-style-type: none;\r\n}\r\n.list-bedul>li {\r\n    width: 150px;\r\n    display: inline-block;\r\n    padding: 0;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    letter-spacing: 1.5px;\r\n    text-transform: uppercase;\r\n    line-height: 2.3;\r\n}\r\n.list-bedul>li>span.bed-no {\r\n    right: 0px;\r\n    float: none;\r\n    position: initial;\r\n    top: 15px;\r\n}\r\n.list-bedul>li.success {\r\n    color: #fff;\r\n    background-color: #00da5f;\r\n}\r\n.list-bedul>li.danger {\r\n    color: #fff;\r\n    background-color: #f32121;\r\n}\r\n.list-bedul>li.blue {\r\n    color: #fff;\r\n    background-color: #01b0f0;\r\n}\r\n.list-bedul>li>span input.form-control {\r\n    width: 38px;\r\n    color: #fff;\r\n    background: transparent;\r\n    border: 0;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    padding: 4px 4px;\r\n    text-align: right;\r\n}\r\n.list-bedul>li>span i.fa-pencil {\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n}\r\n.beds-panel {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.beds-panel ul {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style-type: none;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -moz-flex;\r\n    display: -o-flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.beds-panel ul>li {\r\n    /*width: 15%;*/\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 16.69%;\r\n            flex: 1 1 16.69%;\r\n    float: left;\r\n    max-width: 20%;\r\n    margin-bottom: 15px;\r\n    padding: 5px;\r\n}\r\n.beds-panel ul>li>a {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 10px 5px;\r\n    background-color: #fff;\r\n    border: 1px solid #01b0f0;\r\n    text-transform: uppercase;\r\n    color: #333;\r\n    font-weight: 500;\r\n    -webkit-transition: 0.3s all ease 0s;\r\n    transition: 0.3s all ease 0s;\r\n    height: 150px;\r\n}\r\n.beds-panel ul>li>a:focus {\r\n    text-decoration: none;\r\n}\r\n.beds-panel ul>li>a:hover {\r\n    text-decoration: none;\r\n    -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, .20);\r\n            box-shadow: 0 0 20px 0 rgba(0, 0, 0, .20);\r\n}\r\n.beds-panel ul>li>a img.img-responsive {\r\n    width: 70px;\r\n    display: inline-block;\r\n    margin-bottom: 10px;\r\n}\r\n.patient-popup, .pat-center {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.pat-center {\r\n    text-align: center;\r\n}\r\n.pat-center>p {\r\n    font-weight: 600;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n}\r\n.pat-center .pat-img {\r\n    display: inline-block;\r\n    position: relative;\r\n    margin-bottom: 15px;\r\n    overflow: hidden;\r\n}\r\n.pat-center .pat-img>img {\r\n    width: 120px;\r\n    display: inline-block;\r\n    border-radius: 100px;\r\n    height: 120px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n.pat-center .pat-img input[type=\"file\"] {\r\n    border-radius: 100px;\r\n}\r\n.chart-box {\r\n    width: 85%;\r\n    float: left;\r\n    margin-bottom: 5px;\r\n}\r\n.chart-box canvas {\r\n    width: 100%;\r\n}\r\n.cus-modal .close {\r\n    font-size: 40px;\r\n    line-height: 0.6;\r\n}\r\n.cus-modal .modal-footer>.btn+.btn, .cus-modal .modal-footer>.btn {\r\n    margin-bottom: 15px;\r\n}\r\n.modal-footer .addPreset-box {\r\n    width: auto;\r\n    padding: 0;\r\n}\r\n/*himani*/\r\n#activityModal .modal-content {\r\n    height: 600px;\r\n    width: 550px;\r\n    right: 10%;\r\n    overflow: auto;\r\n}\r\n#activityModal .modal-content .modal-title {\r\n    display: inline-block;\r\n}\r\n#dischargeModal .modal-footer {\r\n    border-top: 0;\r\n    text-align: center;\r\n}\r\n#dischargeModal .modal-content {\r\n    width: 650px;\r\n    right: 20%;\r\n}\r\n.Dischargesheet-head {\r\n    font-size: 20px;\r\n}\r\n.Discharge-clinic-name {\r\n    text-align: center;\r\n    font-size: 20px;\r\n    color: #002160;\r\n    background-color: #00b0f0;\r\n    padding: 5px 0px;\r\n    margin-bottom: 0;\r\n}\r\n.discharge-popup {\r\n    margin-bottom: 15px;\r\n}\r\n.discharge.pat-img img {\r\n    width: 130px;\r\n}\r\n.detail-list p {\r\n    margin-bottom: 5px;\r\n}\r\n.discharge-date p {\r\n    color: red;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n}\r\n.discharge-note {\r\n    /*border: 1px solid #aaa;*/\r\n    /*border-radius: 5px;*/\r\n    /*padding: 10px;*/\r\n}\r\n.green {\r\n    color: green;\r\n}\r\n.red {\r\n    color: red;\r\n}\r\n.grey {\r\n    color: #ddd;\r\n}\r\n.greenborder {\r\n    border: 1px solid green!important;\r\n}\r\n.redborder {\r\n    border: 1px solid red!important;\r\n}\r\n.bed-status {\r\n    font-size: 16px;\r\n    margin-right: 30px;\r\n    margin-bottom: 0;\r\n    display: inline-block;\r\n}\r\n.discharge-activity-list {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.discharge-activity-list li {\r\n    list-style-type: none;\r\n    padding: 10px;\r\n    background-color: #eee;\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);\r\n            box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);\r\n    margin-bottom: 15px;\r\n    border: 1px solid #ddd;\r\n}\r\n.activity-name {\r\n    font-size: 17px;\r\n    color: #00b0f0;\r\n}\r\n.discharge-activity-list li p {\r\n    margin-bottom: 0;\r\n    position: relative;\r\n}\r\n.edit-icon {\r\n    color: #00b0f0;\r\n    font-size: 20px;\r\n    position: absolute;\r\n    right: 60px;\r\n    cursor: pointer;\r\n}\r\n.dlt-icon {\r\n    color: #00b0f0;\r\n    font-size: 20px;\r\n    position: absolute;\r\n    right: 30px;\r\n    cursor: pointer;\r\n}\r\n.activity-time {\r\n    position: relative;\r\n    margin: 20px 0px;\r\n}\r\n.activity-time::after {\r\n    content: \"\";\r\n    background-color: #000;\r\n    top: 8px;\r\n    left: 10px;\r\n    width: 200px;\r\n    height: 2px;\r\n    position: absolute;\r\n}\r\n.activity-time::before {\r\n    content: \"\";\r\n    background-color: #000;\r\n    top: 8px;\r\n    right: 10px;\r\n    width: 200px;\r\n    height: 2px;\r\n    position: absolute;\r\n}\r\n#mat-autocomplete-0 {\r\n    width: 100% !important;\r\n}\r\n/*.time-select {\r\n    width: 800px!important;\r\n    right: 35%!important;\r\n}\r\n.time-slots {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-bottom: 20px;\r\n    \r\n}\r\n.time-ul {\r\n    width: 100%;\r\n    float: left;\r\n    margin: 0px;\r\n    padding: 0;\r\n    text-align: center;\r\n    min-height: 90px;\r\n}\r\n.time-ul>li {\r\n    float: left;\r\n    width: 16%;\r\n}\r\n.time-ul>li>a {\r\n    padding: 6px;\r\n    border: 1px solid #333;\r\n    display: block;\r\n    margin: 5px 5px;\r\n    background-color: #a8e8ff;\r\n   \r\n    color: #000;\r\n}\r\n.time-ul>li>a:hover {\r\n    text-decoration: none;\r\n    background-color: #000!important;\r\n    color: #fff!important;\r\n}\r\n.already-selected {\r\n    background-color: #000!important;\r\n    color: #fff!important;\r\n}\r\n.blue-slot {\r\n    background-color: #a8e8ff!important;\r\n}\r\n.grey-slot {\r\n    background-color: rgba(0, 0, 0, .2)!important;\r\n}\r\n*/\r\n.time-cstm {\r\n    color: rgb(86, 87, 133);\r\n}\r\n.cstm-modal-ht {\r\n    min-height: 400px;\r\n    max-height: 500px;\r\n}\r\n.li-cstm {\r\n    position: relative;\r\n    padding-top: 15px!important;\r\n}\r\n.li-cstm .cstm-icons {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: -20px;\r\n}\r\n.btn-cstm {\r\n    margin-bottom: 15px;\r\n}\r\ninput.txt-trans, input.txt-trans:hover, input.txt-trans:focus, input.txt-trans:active {\r\n    border: transparent;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n}\r\n.sign-usr {\r\n    min-height: 30px;\r\n    max-height: 30px;\r\n}\r\n.input-cstm {\r\n    height: 25px;\r\n}\r\n.chrges input {\r\n    display: inline-block;\r\n    width: 10%;\r\n}\r\n.txt-red {\r\n    color: red;\r\n    font-size: 13px;\r\n}\r\n/*.cstm-my-tab li{\r\n    width:25%;\r\n}*/\r\n.wrap-tab-cont {\r\n    padding: 20px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.pad-list>li.half-li {\r\n    width: 33.33%;\r\n    float: left;\r\n}\r\n.pad-list>li>div {\r\n    text-overflow: unset;\r\n    overflow: unset;\r\n    white-space: normal;\r\n    min-height: 57px;\r\n    padding: 5px 2px;\r\n    display: table;\r\n    height: 65px;\r\n    /*word-break: break-all;*/\r\n}\r\n.pad-list .medication-li div {\r\n    display: table;\r\n    width: 100%;\r\n    min-height: 55px;\r\n}\r\n.red-btn.my-pad {\r\n    padding: 15px 15px;\r\n}\r\nli.medication-li {\r\n    width: 99%;\r\n}\r\nspan.diseasen-name {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\nspan.medication-transform {\r\n    font-size: 18px;\r\n    width: 100%;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.pad-header>.blue-btn {\r\n    padding: 0px 1px;\r\n    border-right: 0;\r\n}\r\n.blue-btn .btn-custom {\r\n    padding: 16px 30px;\r\n    border-radius: 0;\r\n    min-width: 100%;\r\n    -webkit-box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12);\r\n            box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12);\r\n}\r\n.height-50 {\r\n    min-height: 144px;\r\n}\r\n.vacciSchedule-div>ul>li>div.active, .follow-ul>li.active, .frequency-ul li.active-cel, .duration-ul li.active-cel, .special-ul li.active-cel, .precond-ul>li.active-cel, .special-ul.hindi li.active-cel, .combined_frequency>li.active-cel, .combined_duration>li.active-cel, .combined_instruc>li.active-cel, .combined_inject>li.active-cel, .combined_instruc.combined_drop>li.active-cel {\r\n    background-color: #000;\r\n    color: #fff;\r\n    background: #000;\r\n}\r\n.sphere-ul>li.active, .sphere-ul.right>li.active {\r\n    background-color: #01b0f0;\r\n}\r\n.flex-inner .table {\r\n    margin-bottom: 0;\r\n}\r\n.flex-inner ol {\r\n    margin-bottom: 0;\r\n}\r\n.flex-inner ol>div {\r\n    width: 100%;\r\n    float: left;\r\n    margin-left: -10px;\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n}\r\n.flex-inner ol>li {\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    word-break: break-all;\r\n    padding-right: 15px;\r\n    position: relative;\r\n}\r\n/*.flex-inner .medicationol > li{\r\n    margin-bottom: 8px;\r\n}*/\r\n.flex-inner .followol>li {\r\n    width: 100%;\r\n}\r\ninput.txt50 {\r\n    width: 100px;\r\n}\r\n@media (min-width: 768px) {\r\n    #eyeModal .modal-dialog {\r\n        width: 650px;\r\n    }\r\n}\r\n.help-note {\r\n    font-size: 10px;\r\n    font-style: italic;\r\n}\r\n.selected_preset {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.only-text {\r\n    padding: 8px 5px;\r\n    font-size: 12px;\r\n    border: 1px solid rgba(198, 217, 241, 1);\r\n}\r\n.medication-modal-body .medication-form>.form-group>div.only-text {\r\n    border: 1px solid rgba(198, 217, 241, 1);\r\n}\r\n.selected_preset .medication-form>.duration>div {\r\n    color: #222;\r\n}\r\n.medic-info {\r\n    border-top: 0;\r\n}\r\n.active.lightblue-btn {\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n.combined_modal .modal-dialog {\r\n    width: 830px;\r\n}\r\n.combined_flex {\r\n    width: 100%;\r\n    float: left;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n}\r\n.combined_flex>div {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 33.33%;\r\n    flex: 1 1 33.33%;\r\n    margin: 0 2px;\r\n    border: 1px solid #b9b9b9;\r\n}\r\n.combined_heading {\r\n    width: 100%;\r\n    float: left;\r\n    color: #fff;\r\n    margin: 0;\r\n    padding: 5px 0;\r\n    text-align: center;\r\n    background-color: #00b0f0;\r\n}\r\n.combined_frequency, .combined_duration, .combined_instruc, .combined_inject {\r\n    width: 100%;\r\n    float: left;\r\n    margin: 0;\r\n    padding: 5px 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    list-style-type: none;\r\n}\r\n.combined_frequency>li, .combined_duration>li, .combined_instruc>li, .combined_inject>li {\r\n    width: 70px;\r\n    height: 70px;\r\n    margin: 3px;\r\n    cursor: pointer;\r\n    padding: 0 15px;\r\n    border-radius: 10px;\r\n    border: 1px solid #777;\r\n    text-align: center;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n    display: -webkit-box;\r\n    - display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n.combined_flex>div ul>li.active {\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n.combined_duration>li {\r\n    height: 32px;\r\n}\r\n.combined_flex>div.frquency_cmbnd ul {\r\n    background-color: #F2F2F2;\r\n}\r\n.combined_flex>div.duration_cmbnd ul {\r\n    background-color: #DAEDF4;\r\n}\r\n.combined_flex>div.instr_cmbnd ul.combined_instruc {\r\n    background-color: #EAF1DD;\r\n}\r\n.combined_flex>div.instr_cmbnd ul.combined_inject {\r\n    background-color: #FCEAD9;\r\n}\r\n.combined_flex>div.instr_cmbnd ul.combined_drop {\r\n    background-color: #FCEAD9;\r\n}\r\n.combined_flex>div.duration_cmbnd {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 20%;\r\n    flex: 1 1 20%;\r\n}\r\n.combined_flex>div.instr_cmbnd .combined_inject {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n.combined_flex>div.instr_cmbnd .combined_inject>li {\r\n    width: 100%;\r\n    float: left;\r\n    font-size: 20px;\r\n    height: 62px;\r\n}\r\n.combined_flex>div.instr_cmbnd .combined_instruc>li {\r\n    width: 120px;\r\n    height: 40px;\r\n}\r\n#combinedModal2 .combined_flex>div.instr_cmbnd .combined_instruc>li {\r\n    height: 90px;\r\n}\r\n.combined_flex>div.instr_cmbnd .combined_drop>li {\r\n    width: 50px;\r\n    height: 62px;\r\n}\r\n.combined_flex>div.instr_cmbnd .combined_dosage>li {\r\n    width: 50px;\r\n    height: 39.5px;\r\n}\r\n.btn_green {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    background-color: #8BD053;\r\n}\r\np.help-note {\r\n    margin: 0 0 1px;\r\n}\r\n.btn.sm_green-btn.lang-btn {\r\n    background: -webkit-gradient(linear, left bottom, left top, from(rgb(201, 181, 232)), color-stop(rgb(217, 203, 238)), to(rgb(240, 234, 249)));\r\n    background: linear-gradient(to top, rgb(201, 181, 232), rgb(217, 203, 238), rgb(240, 234, 249));\r\n    background: -o-linear-gradient(to top, rgb(201, 181, 232), rgb(217, 203, 238), rgb(240, 234, 249));\r\n    border: 1px solid rgb(201, 181, 232)\r\n}\r\n.btn.sm_green-btn.lang-btn.active, .btn.sm_green-btn.lang-btn:focus {\r\n    background: #000;\r\n    color: #fff;\r\n}\r\n/*.precond-ul>li.active-cel {\r\n    background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.5), rgba(0,0,0,0.1));\r\n}*/\r\nfieldset.fieldset-preset {\r\n    min-width: unset;\r\n    padding: 0 10px;\r\n    border: 1px solid rgba(56, 94, 138, 1);\r\n}\r\nlegend.legend-preset {\r\n    width: 20%;\r\n    border-bottom: none;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n}\r\n.tags-listing-div .fieldset-preset .tags-listing {\r\n    width: 100%;\r\n    float: left;\r\n    overflow: auto;\r\n    max-height: 280px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -moz-flex;\r\n    display: -o-flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    list-style-type: none;\r\n    padding: 0px;\r\n    border-radius: 3px;\r\n}\r\n.li-blocked span {\r\n    font-weight: normal;\r\n}\r\n#translated_div .modal-dialog .modal-header {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -moz-flex;\r\n    display: -o-flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: space-evenly;\r\n        -ms-flex-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n}\r\n#translated_div .modal-dialog .modal-header>* {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n.padview-header {\r\n    width: 100%;\r\n    float: left;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -moz-flex;\r\n    display: -o-flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.pad-view-flx {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 50%;\r\n            flex: 1 1 50%;\r\n    -webkit-flex: 1 1 50%;\r\n    -moz-flex: 1 1 50%;\r\n    -o-flex: 1 1 50%;\r\n}\r\n#previewModal .padview-bodyright {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 9.5px 10px;\r\n    margin-bottom: 10px;\r\n    border: 2px solid #333;\r\n    border-right: 0;\r\n}\r\n.padview-bodyright.historyprescription {\r\n    border-left: 0;\r\n}\r\n.reportImg img {\r\n    display: block;\r\n    max-width: 400px;\r\n    height: 400px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n.wrap {\r\n    width: 95%;\r\n    max-height: 450px;\r\n    min-height: 450px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n.cstm-gender-field {\r\n    position: relative;\r\n}\r\n.cstm-gender-field select {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 18px;\r\n    width: 75px;\r\n    font-size: 13px;\r\n    border-left: none;\r\n    border-radius: 0 5px 5px 0;\r\n    border-color: #385e8a;\r\n}\r\n.camera-div {\r\n    height: 500px;\r\n}\r\n.pat-img img {\r\n    margin-top: 25px;\r\n}\r\n.nxt-btn{\r\n    margin-top: 5px \r\n}\r\n.my-tab1{\r\n    margin-left: 91px;\r\n}\r\n.my-tab2{\r\n   margin-left: -55px;\r\n}\r\n.nxt-btn1{\r\n    margin-top: -16px;\r\n    margin-bottom: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/discharge-patientpdf/discharge-patientpdf.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n\t<div class=\"container\">\n\t\t<div class=\"cus-content-wrapper\">\n\t\t\t<div class=\"cus-content\">\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<div class=\"inner-tab\">\n\t\t\t\t    \t<!-- Nav tabs -->\n\t\t\t\t      \t<ul class=\"nav nav-tabs cstm-my-tab\" role=\"tablist\">\n\t\t\t\t      \t\t<li role=\"presentation\" class=\"{{getClassTab('pd')}}\"><a href=\"#pd\" aria-controls=\"total\" role=\"tab\" data-toggle=\"tab\"> Patient Details</a></li>\n\t\t\t\t          \t<li role=\"presentation\" class=\"{{getClassTab('billing')}}\"><a href=\"#billing\" aria-controls=\"general\" role=\"tab\" data-toggle=\"tab\">Billing</a></li>\n\t\t\t\t          \t<li role=\"presentation\" class=\"{{getClassTab('dis-med')}}\"><a href=\"#dis-med\" aria-controls=\"semiprivate\" role=\"tab\" data-toggle=\"tab\"> Discharge Medications</a></li>\n\t\t\t\t          \t<li role=\"presentation\" class=\"{{getClassTab('dis-ins')}}\"><a href=\"#dis-ins\" aria-controls=\"private\" role=\"tab\" data-toggle=\"tab\">Discharge Instructions </a></li>\n\t\t\t\t          \t<li role=\"presentation\" class=\"{{getClassTab('doc-note')}}\"><a href=\"#doc-note\" aria-controls=\"private\" role=\"tab\" data-toggle=\"tab\">Doctor Note </a></li>\n\t\t\t\t        </ul>\n\n\t\t\t\t      \t<!-- Tab panes -->\n\t\t\t\t      \t<div class=\"tab-content\">\n\t\t\t\t      \t\t<div role=\"tabpanel\" class=\"tab-pane active\" id=\"pd\">\n\t\t\t\t      \t\t\t<div class=\" \">\n\t\t\t\t      \t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t    \t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t    \t\t\t<div class=\"patient-popup\">\n\t\t\t\t\t\t\t    \t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t        \t\t\t<div class=\"col-lg-6 col-lg-offset-6 text-right nxt-btn\">\n\t\t\t\t\t\t\t\t        \t\t\t\t<div class=\"dshbrd-btn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#billing\" aria-controls=\"general\" role=\"tab\" data-toggle=\"tab\" class=\"btn btn-custom\" (click)=\"changeCurrentTab('billing')\">Next</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t        \t\t\t</div>\n\t\t\t\t\t\t\t\t        \t\t</div>\n\t\t\t\t\t\t\t    \t\t\t\t<div class=\"pat-center\">\n\t\t\t\t\t\t\t\t    \t\t\t\t<div class=\"pat-img\">\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!patientDataForDischarge.imgSrc\"/>\n\t\t\t\t\t\t                                <img src=\"{{pateintPicPath}}{{patientDataForDischarge.imgSrc}}\" class=\"img-responsive\" *ngIf=\"patientDataForDischarge.imgSrc\"/>\n\t\t\t\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t\t\t\t    \t\t\t\t<p> {{patientDataForDischarge.patientName}} ({{patientDataForDischarge.gender}}), {{patientDataForDischarge.age}}Y </p>\n\t\t\t\t\t\t\t\t    \t\t\t</div>\n\t\t\t\t\t\t\t\t    \t\t\t<!-- <p> <label>Bed number:</label> \n\t\t\t\t\t\t\t\t    \t\t\t\t<span *ngIf=\"patientDataForDischarge.type=='general'\">G</span>\n\t\t\t\t\t\t\t\t    \t\t\t\t<span *ngIf=\"patientDataForDischarge.type=='semi_private'\">SP</span>\n\t\t\t\t\t\t\t\t    \t\t\t\t<span *ngIf=\"patientDataForDischarge.type=='private'\">P</span>\n\t\t\t\t\t\t\t\t    \t\t\t-{{patientDataForDischarge.bed_number}} </p>\n\t\t\t\t\t\t\t\t    \t\t\t<p> <label>Ailment/Procedure: </label> {{patientDataForDischarge.procedure}} </p>\n\t\t\t\t\t\t\t\t    \t\t\t<p> <label>Patient ID:</label> {{patientDataForDischarge.id}} </p>\n\t\t\t\t\t\t\t\t    \t\t\t<p *ngIf=\"patientDataForDischarge.prescription_id\"> <label>Prescription ID:</label> {{patientDataForDischarge.prescription_id}} </p>\n\t\t\t\t\t\t\t\t    \t\t\t<p *ngIf=\"!patientDataForDischarge.prescription_id\"> <label>Prescription ID:</label> -- </p>\n\t\t\t\t\t\t\t\t    \t\t\t<p> <label>Mobile Number:</label> +91-{{patientDataForDischarge.phone}} </p>\n\t\t\t\t\t\t\t\t    \t\t\t<p> <label>Admit date and Time:</label> {{patientDataForDischarge.createdAt | date:'d MMM yy ,h:mm a' }} </p> -->\n\t\t\t\t\t\t\t\t    \t\t\t<!-- <table style=\"width: 65%;\" class=\"table-bordered table-cstm\" align=\"center\">\n\t\t\t\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<th>Bed Number</th>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<span *ngIf=\"patientDataForDischarge.type=='general'\">G</span>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<span *ngIf=\"patientDataForDischarge.type=='semi_private'\">SP</span>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<span *ngIf=\"patientDataForDischarge.type=='private'\">P</span>-{{patientDataForDischarge.bed_number}}\n\t\t\t\t\t\t\t\t    \t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t\t\t\t    \t\t\t\t<br>\n\t\t\t\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<th>Ailment/Procedure</th>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<td> {{patientDataForDischarge.procedure}}</td>\n\t\t\t\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t\t\t\t    \t\t\t\t<br>\n\t\t\t\t\t\t\t\t    \t\t\t\t<tr *ngIf=\"patientDataForDischarge.prescription_id\">\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<th>Prescription ID</th>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<td> {{patientDataForDischarge.prescription_id}}</td>\n\t\t\t\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t\t\t\t    \t\t\t\t<br>\n\t\t\t\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<th>Mobile Number</th>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<td> +91-{{patientDataForDischarge.phone}}</td>\n\t\t\t\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t\t\t\t    \t\t\t\t<br>\n\t\t\t\t\t\t\t\t    \t\t\t\t<tr>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<th>Admit date and Time</th>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<td>{{patientDataForDischarge.createdAt | date:'d MMM yy ,h:mm a' }} </td>\n\t\t\t\t\t\t\t\t    \t\t\t\t</tr>\n\t\t\t\t\t\t\t\t    \t\t\t</table> -->\n\t\t\t\t\t\t\t\t    \t\t\t\t<table style=\"width: 80%\" class=\"table-bordered my-tab my-tab1\" >\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<th>Bed Number</th>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t\t<span *ngIf=\"patientDataForDischarge.type=='general'\">G</span>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<span *ngIf=\"patientDataForDischarge.type=='semi_private'\">SP</span>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<span *ngIf=\"patientDataForDischarge.type=='private'\">P</span>-{{patientDataForDischarge.bed_number}}\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<th>Ailment/Procedure</th>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<td> {{patientDataForDischarge.procedure}}</td>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<tr *ngIf=\"patientDataForDischarge.prescription_id\">\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<th>Prescription ID</th>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<td> {{patientDataForDischarge.prescription_id}}</td>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<th>Mobile Number</th>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<td> +91-{{patientDataForDischarge.phone}}</td>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<th>Admit date and Time</th>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<td> {{patientDataForDischarge.createdAt | date:'d MMM yy ,h:mm a' }}</td>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t</table>\n\t\t\t\t\t\t\t    \t\t\t</div>\n\t\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t        \t\t</div>\n\t\t\t\t\t        \t\t\n\t\t\t\t      \t\t\t</div>\n\t\t\t\t          \t</div>\n\t\t\t\t          \t<div role=\"tabpanel\" class=\"tab-pane\" id=\"billing\">\n\t\t\t\t      \t\t\t<div class=\" \">\n\t\t\t\t      \t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t    \t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t    \t\t\t<div class=\"patient-popup\">\n\t\t\t\t\t\t\t    \t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t        \t\t\t<div class=\"col-lg-6 col-lg-offset-6 text-right nxt-btn\">\n\t\t\t\t\t\t\t\t        \t\t\t\t<div class=\"dshbrd-btn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#dis-med\" aria-controls=\"general\" role=\"tab\" data-toggle=\"tab\" class=\"btn btn-custom\" (click)=\"changeCurrentTab('dis-med')\">Next</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t        \t\t\t</div>\n\t\t\t\t\t\t\t\t        \t\t</div>\n\t\t\t\t\t\t\t    \t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-12 p-0\">\n\t\t\t\t\t\t\t\t    \t\t\t\t<div class=\"discharge pat-img \">\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!patientDataForDischarge.imgSrc\"/>\n\t\t\t\t\t\t                                <img src=\"{{pateintPicPath}}{{patientDataForDischarge.imgSrc}}\" class=\"img-responsive\" *ngIf=\"patientDataForDischarge.imgSrc\"/>\n\t\t\t\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t\t\t    \t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-12 p-r-0\">\n\t\t\t\t\t\t\t\t    \t\t\t\t<div class=\"discharge-detail\">\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<!-- <div class=\"row\">\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<div class=\"detail-list\">\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<p><b>Name:<span> {{patientDataForDischarge.patientName}}</span></b></p>\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<p><b>Doctor:<span> {{doctorData.first_name}} </span></b></p>\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<p><b>Patient Id:<span> {{patientDataForDischarge.id}}</span></b></p>\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<div class=\"detail-list\">\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<p><b>Age/Gender:<span> {{patientDataForDischarge.age}}/{{patientDataForDischarge.gender}}</span></b></p>\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<p><b>Mobile:<span> +91 {{patientDataForDischarge.phone}}</span></b></p>\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t    \t\t\t\t<table style=\"width: 80%\" class=\"table-bordered my-tab my-tab2\">\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<td> {{patientDataForDischarge.patientName}}</td>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<th>Bed Number</th>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t\t<span *ngIf=\"patientDataForDischarge.type=='general'\">G</span>\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<span *ngIf=\"patientDataForDischarge.type=='semi_private'\">SP</span>\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<span *ngIf=\"patientDataForDischarge.type=='private'\">P</span>-{{patientDataForDischarge.bed_number}}\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<th>Doctor</th>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<td> {{doctorData.first_name}}</td>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<th>Invoice number</th>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<td> {{patientDataForDischarge.id}}</td>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<th>Age/Gender</th>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<td> {{patientDataForDischarge.age}}/{{patientDataForDischarge.gender}}</td>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<th>Advance received</th>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<td> {{patientDataForDischarge.advanceReceived}}</td>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<th>Mobile:</th>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<td> +91 {{patientDataForDischarge.phone }}</td>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<th>Date Of Admission</th>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<td> {{patientDataForDischarge.createdAt | date:'d MMM yy ,h:mm a' }}</td>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<th>Date Of Discharge</th>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<td class=\"cstm\"> \n\t\t\t\t\t\t\t\t    \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"dischargeDate\" [settings]=\"settings\" (onDateSelect)=\"onDateSelect($event)\" class=\"pulll-left\"></angular2-date-picker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    \t<ngb-timepicker [(ngModel)]=\"discharegeTime\" [spinners]=\"false\" class=\"ng-tm\" (ngModelChange)=\"onTimeChange()\"></ngb-timepicker>\t\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<tr *ngIf=\"discharegeTime != null\">\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<th>Admission Duration</th>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<td> {{getDifferenceInDays()}} days {{getDifferenceInHours()}} hrs</td>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t<!-- <div class=\"row\">\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<div class=\"detail-list\">\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<p>Date Of Admission:<span> {{patientDataForDischarge.createdAt | date:'d MMM yy ,h:mm a' }}</span></p>\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t\t<p>Date Of Discharge:</p>\n\t\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<div class=\"col-lg-4 dt-pick\">\n\t\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"dischargeDate\" [settings]=\"settings\" (onDateSelect)=\"onDateSelect($event)\" class=\"pulll-left\"></angular2-date-picker>\n\t\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t\t<ngb-timepicker [(ngModel)]=\"discharegeTime\" [spinners]=\"false\" class=\"ng-tm\"></ngb-timepicker>\n\t\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t</div>\t\t\t    \t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<p>Admission Duration:<span> {{getDifferenceInDays()}} days {{getDifferenceInHours()}} hrs</span></p>\t\n\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t\t\t    \t\t\t</div>\n\t\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t        \t\t</div>\n\t\t\t\t\t        \t\t<div class=\"row\">\n\t\t\t\t\t\t\t    \t\t<div class=\"col-md-12  col-sm-12 col-xs-12 text-left\">\n\t\t\t\t\t\t\t    \t\t\t<div class=\"patient-popup chrges\">\n\t\t\t\t\t\t\t\t    \t\t\t<h4>Occupancy Charges(a): \n\t\t\t\t\t\t\t\t    \t\t\t\t<span> \n\t\t\t\t\t\t\t\t    \t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control input-cstm\" [(ngModel)]=\"occupancyCharges\" (blur)=\"calculateCharges()\">\n\t\t\t\t\t\t\t\t    \t\t\t\t</span>\n\t\t\t\t\t\t\t\t    \t\t\t</h4>\n\t\t\t\t\t\t\t    \t\t\t</div>\n\t\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t        \t\t</div>\n\t\t\t\t\t        \t\t<div class=\"row\">\n\t\t\t\t\t        \t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t        \t\t\t\t<div class=\"patient-popup discharge-popup\">\n\t\t\t\t\t        \t\t\t\t\t<h4>Other Charges (b):</h4>\n\t\t\t\t\t        \t\t\t\t\t<table class=\"table table-striped table-bordered table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t    <thead>\n\t\t\t\t\t\t\t\t\t\t\t\t      <tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t        <th>Date : Time</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t        <th width=\"100px\">Activity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t        <th>Description</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t        <th width=\"80px\">Unit</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t        <th width=\"80px\">Rate</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t        <th width=\"70px\">Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t\t\t\t\t    </thead>\n\t\t\t\t\t\t\t\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t      <tr *ngFor=\"let activity of patientActivities; let i = index;\" >\n\t\t\t\t\t\t\t\t\t\t\t\t        <td width=\"130px\"> \n\t\t\t\t\t\t\t\t\t\t\t\t        \t{{activity.createdAt | date:'d MMM yy ,h:mm a' }}\n\t\t\t\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t        <td width=\"100px\"> \n\t\t\t\t\t\t\t\t\t\t\t\t        \t<!-- <div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t        \t{{activity.type}}\n\t\t\t\t\t\t\t\t\t\t\t\t        \t<!-- </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t        <td> \n\t\t\t\t\t\t\t\t\t\t\t\t        \t<input type=\"text\" name=\"\" class=\"form-control input-cstm\" [(ngModel)]=\"activity.instruction\">\n\t\t\t\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t    \t<td width=\"80px\">\n\t\t\t\t\t\t\t\t\t\t\t\t    \t\t<input type=\"number\" name=\"\" class=\"form-control input-cstm\" [(ngModel)]=\"activity.unit\" (blur)=\"calculateCharges()\" >\t\n\t\t\t\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t        <td width=\"80px\"> \n\t\t\t\t\t\t\t\t\t\t\t\t        \t<input type=\"number\" name=\"\" class=\"form-control input-cstm\" [(ngModel)]=\"activity.rate\" (blur)=\"calculateCharges()\" >\n\t\t\t\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t        <td width=\"70px\"> \n\t\t\t\t\t\t\t\t\t\t\t\t        \t{{activity.amount}}\n\t\t\t\t\t\t\t\t\t\t\t\t    \t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t      <tr class=\"cstm-tr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t        <td colspan=\"5\" class=\"text-right\">Total (b)</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t        <td>{{totalActivitiesAmount}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t\t\t\t\t      <tr class=\"cstm-tr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t        <td colspan=\"5\" class=\"text-right\">Gross Total (a+b)</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t        <td>{{totalActivitiesAmount+occupancyCharges}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t\t\t\t\t      <tr class=\"cstm-tr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t        <td colspan=\"5\" class=\"text-right\">Advance Received</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t        <td>{{patientDataForDischarge.advanceReceived}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t\t\t\t\t      <tr class=\"cstm-tr\" *ngIf=\"refundAmount>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t    \t<td colspan=\"5\" class=\"text-right\">Total Refund</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t        <td>{{refundAmount}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t\t\t\t\t      <tr class=\"cstm-tr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t        <td colspan=\"5\" class=\"text-right\">Total Outstanding</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t        <td>{{totalActivitiesOutstandingAmount}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t        \t\t\t\t</div>\n\t\t\t\t\t        \t\t\t</div>\n\t\t\t\t\t        \t\t</div>\n\t\t\t\t\t        \t\t\n\t\t\t\t      \t\t\t</div>\n\t\t\t\t          \t</div>\n\t\t\t\t          \t<div role=\"tabpanel\" class=\"tab-pane\" id=\"dis-med\">\n\t\t\t\t      \t\t\t<div class=\"wrap-tab-cont\">\n\t\t\t\t      \t\t\t\t<div class=\"row\">\n\t\t\t\t      \t\t\t\t\t\n\t\t\t\t\t                    <div class=\"medication-modal-body wrap-div\">\n\t\t\t\t\t                    \t<div class=\"row\">\n\t\t\t\t\t\t\t        \t\t\t<div class=\"col-lg-6 col-lg-offset-6 text-right nxt-btn\">\n\t\t\t\t\t\t\t        \t\t\t\t<div class=\"dshbrd-btn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#dis-ins\" aria-controls=\"general\" role=\"tab\" data-toggle=\"tab\" class=\"btn btn-custom\" (click)=\"changeCurrentTab('dis-ins')\">Next</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t        \t\t\t</div>\n\t\t\t\t\t\t\t        \t\t</div>\n\t\t\t\t\t                        <div class=\"sidebar-preset\">\n\t\t\t\t\t                            <ul class=\"presetul\">\n\t\t\t\t\t                                <li class=\"{{mediClass(0)}}\" (click)=\"medicaTab(0,'Tablet')\"> Tablet </li>\n\t\t\t\t\t                                <li class=\"{{mediClass(1)}}\" (click)=\"medicaTab(1,'Capsule')\"> Capsule </li>\n\t\t\t\t\t                                <li class=\"{{mediClass(2)}}\" (click)=\"medicaTab(2,'Syrup')\"> Syrup </li>\n\t\t\t\t\t                                <li class=\"{{mediClass(3)}}\" (click)=\"medicaTab(3,'Suspension')\"> Suspension </li>\n\t\t\t\t\t                                <li class=\"{{mediClass(4)}}\" (click)=\"medicaTab(4,'Emulsion')\"> Emulsion </li>\n\t\t\t\t\t                                <li class=\"{{mediClass(5)}}\" (click)=\"medicaTab(5,'Solution')\"> Solution </li>\n\t\t\t\t\t                                <li class=\"{{mediClass(6)}}\" (click)=\"medicaTab(6,'Injection')\"> Injection </li>\n\t\t\t\t\t                                <li class=\"{{mediClass(7)}}\" (click)=\"medicaTab(7,'Cream')\"> Cream </li>\n\t\t\t\t\t                                <li class=\"{{mediClass(14)}}\" (click)=\"medicaTab(14,'Ointment')\"> Ointment </li>\n\t\t\t\t\t                                <li class=\"{{mediClass(8)}}\" (click)=\"medicaTab(8,'Gel')\"> Gel </li>\n\t\t\t\t\t                                <li class=\"{{mediClass(13)}}\" (click)=\"medicaTab(13,'Lotion')\"> Lotion </li>\n\t\t\t\t\t                                <li class=\"{{mediClass(9)}}\" (click)=\"medicaTab(9,'Drops')\"> Drops </li>\n\t\t\t\t\t                                <li class=\"{{mediClass(10)}}\" (click)=\"medicaTab(10,'Aerosols')\"> Aerosols &amp; Inhalent </li>\n\t\t\t\t\t                                <li class=\"{{mediClass(11)}}\" (click)=\"medicaTab(11,'Powder')\"> Powder &amp; Granule </li>\n\t\t\t\t\t                                <li class=\"{{mediClass(12)}}\" (click)=\"medicaTab(12,'Mouthwash')\"> Mouthwash &amp; Gargle </li>\n\t\t\t\t\t                            </ul>\n\t\t\t\t\t                        </div>\n\t\t\t\t\t                        <div class=\"medicine-body\">\n\t\t\t\t\t                            <div class=\"medicine-wrap\">\n\t\t\t\t\t                                <div class=\"\" *ngIf=\"medicationStatus[0].status==true\">\n\t\t\t\t\t                                    <div class=\"medic-heading\" >\n\t\t\t\t\t                                        <div class=\"medicHead\"> Tablet </div>\n\t\t\t\t\t                                    </div>\n\t\t\t\t\t                                    <ul class=\"medicine-list\">\n\t\t\t\t\t                                        <li *ngFor=\"let data of medicationTabArray;let i =index\">\n\t\t\t\t\t                                            <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Tablet',$event.target.value)\" (onRemove)=\"onRemoveMedName('TabletInfo',medication.tab[i])\" (onAdd)=\"openFrequencyModalFromMed('TabletInfo',medication.tab[i])\" [(ngModel)]='medication.tab[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n\t\t\t\t\t                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationTabletDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                    </tag-input>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.tab[i])\"><span class=\"{{getMedFrequencyClass(medication.tab[i].frequency)}}\">{{medication.tab[i].frequency}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.tab[i])\"><span class=\"{{getMedDurationClass(medication.tab[i].duration)}}\">{{medication.tab[i].duration}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medicinfo\">\n\t\t\t\t\t                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.tab[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n\t\t\t\t\t                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationTabletInfoDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                </tag-input>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                {{i+1}}\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                <div class=\"li-close\" (click)=\"removeMoreTab('Tab',i)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                <div *ngIf=\"i == medicationTabArray.length-1\" class=\"li-close plus\" (click)=\"addMoreTab('Tab')\"> <i class=\"fa fa-plus\"></i> </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                        </li>\n\t\t\t\t\t                                    </ul>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <div class=\"\" *ngIf=\"medicationStatus[1].status==true\">\n\t\t\t\t\t                                    <div class=\"medic-heading\" >\n\t\t\t\t\t                                        <div class=\"medicHead\"> Capsule </div>\n\t\t\t\t\t                                    </div>\n\t\t\t\t\t                                    <ul class=\"medicine-list\">\n\t\t\t\t\t                                        <li *ngFor=\"let data of medicationCapArray;let i =index\">\n\t\t\t\t\t                                            <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Capsule',$event.target.value)\" (onRemove)=\"onRemoveMedName('CapsuleInfo',medication.cap[i])\" (onAdd)=\"openFrequencyModalFromMed('CapsuleInfo',medication.cap[i])\" [(ngModel)]='medication.cap[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n\t\t\t\t\t                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationCapsuleDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                    </tag-input>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.cap[i])\"><span class=\"{{getMedFrequencyClass(medication.cap[i].frequency)}}\">{{medication.cap[i].frequency}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.cap[i])\"><span class=\"{{getMedDurationClass(medication.cap[i].duration)}}\">{{medication.cap[i].duration}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medicinfo\">\n\t\t\t\t\t                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.cap[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n\t\t\t\t\t                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationCapsuleInfoDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                </tag-input>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                {{i+1}}\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                <div class=\"li-close\" (click)=\"removeMoreTab('Cap',i)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                <div class=\"li-close plus\" *ngIf=\"i == medicationCapArray.length-1\" (click)=\"addMoreTab('Cap')\"> <i class=\"fa fa-plus\"></i> </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                        </li>\n\t\t\t\t\t                                    </ul>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <div class=\"\" *ngIf=\"medicationStatus[2].status==true\">\n\t\t\t\t\t                                    <div class=\"medic-heading\" >\n\t\t\t\t\t                                        <div class=\"medicHead\"> Syrup </div>\n\t\t\t\t\t                                    </div>\n\t\t\t\t\t                                    <ul class=\"medicine-list\">\n\t\t\t\t\t                                        <li *ngFor=\"let data of medicationSypArray;let i =index\">\n\t\t\t\t\t                                            <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Syrup',$event.target.value)\" (onRemove)=\"onRemoveMedName('SyrupInfo',medication.syp[i])\" (onAdd)=\"openFrequencyModalFromMed('SyrupInfo',medication.syp[i])\" [(ngModel)]='medication.syp[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n\t\t\t\t\t                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSyrupDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                    </tag-input>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.syp[i])\"><span class=\"{{getMedFrequencyClass(medication.syp[i].frequency)}}\">{{medication.syp[i].frequency}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency duration\">\n\t\t\t\t\t                                                    <div data-toggle=\"modal\" data-target=\"#combinedModal4\" (click)=\"openFrequencyModal(medication.syp[i])\"><span class=\"{{getMedDosageClass(medication.syp[i].dosage)}}\">{{medication.syp[i].dosage}} (ml) </span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.syp[i])\"><span class=\"{{getMedDurationClass(medication.syp[i].duration)}}\">{{medication.syp[i].duration}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medicinfo\">\n\t\t\t\t\t                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.syp[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n\t\t\t\t\t                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSyrupInfoDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                </tag-input>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                {{i+1}}\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                <div class=\"li-close\" (click)=\"removeMoreTab('Syp',i)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                <div class=\"li-close plus\" *ngIf=\"i == medicationSypArray.length-1\" (click)=\"addMoreTab('Syp')\"> <i class=\"fa fa-plus\"></i> </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                        </li>\n\t\t\t\t\t                                    </ul>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <div class=\"\" *ngIf=\"medicationStatus[3].status==true\">\n\t\t\t\t\t                                    <div class=\"medic-heading\" >\n\t\t\t\t\t                                        <div class=\"medicHead\"> Suspension </div>\n\t\t\t\t\t                                    </div>\n\t\t\t\t\t                                    <ul class=\"medicine-list\">\n\t\t\t\t\t                                        <li *ngFor=\"let data of medicationSuspArray;let i =index\">\n\t\t\t\t\t                                            <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Suspension',$event.target.value)\" (onRemove)=\"onRemoveMedName('SuspensionInfo',medication.susp[i])\" (onAdd)=\"openFrequencyModalFromMed('SuspensionInfo',medication.susp[i])\" [(ngModel)]='medication.susp[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n\t\t\t\t\t                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSuspensionDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                    </tag-input>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.susp[i])\"><span class=\"{{getMedFrequencyClass(medication.susp[i].frequency)}}\">{{medication.susp[i].frequency}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency duration\">\n\t\t\t\t\t                                                    <div data-toggle=\"modal\" data-target=\"#combinedModal4\" (click)=\"openFrequencyModal(medication.susp[i])\"><span class=\"{{getMedDosageClass(medication.susp[i].dosage)}}\">{{medication.susp[i].dosage}} (ml) </span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#durationModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.susp[i])\"><span class=\"{{getMedDurationClass(medication.susp[i].duration)}}\">{{medication.susp[i].duration}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medicinfo\">\n\t\t\t\t\t                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.susp[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n\t\t\t\t\t                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSuspensionInfoDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                </tag-input>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                {{i+1}}\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                <div class=\"li-close\" (click)=\"removeMoreTab('Susp',i)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                <div class=\"li-close plus\" *ngIf=\"i == medicationSuspArray.length-1\" (click)=\"addMoreTab('Susp')\"> <i class=\"fa fa-plus\"></i> </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                        </li>\n\t\t\t\t\t                                    </ul>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <div class=\"\" *ngIf=\"medicationStatus[4].status==true\">\n\t\t\t\t\t                                    <div class=\"medic-heading\" >\n\t\t\t\t\t                                        <div class=\"medicHead\"> Emulsion </div>\n\t\t\t\t\t                                    </div>\n\t\t\t\t\t                                    <ul class=\"medicine-list\">\n\t\t\t\t\t                                        <li *ngFor=\"let data of medicationEmulsnArray;let i =index\">\n\t\t\t\t\t                                            <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Emulsion',$event.target.value)\" (onRemove)=\"onRemoveMedName('EmulsionInfo',medication.emulsn[i])\" (onAdd)=\"openFrequencyModalFromMed('EmulsionInfo',medication.emulsn[i])\" [(ngModel)]='medication.emulsn[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n\t\t\t\t\t                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationEmulsionDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                    </tag-input>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.emulsn[i])\"><span class=\"{{getMedFrequencyClass(medication.emulsn[i].frequency)}}\">{{medication.emulsn[i].frequency}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency duration\">\n\t\t\t\t\t                                                    <div data-toggle=\"modal\" data-target=\"#combinedModal4\" (click)=\"openFrequencyModal(medication.emulsn[i])\"><span class=\"{{getMedDosageClass(medication.emulsn[i].dosage)}}\">{{medication.emulsn[i].dosage}} (ml) </span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.emulsn[i])\"><span class=\"{{getMedDurationClass(medication.emulsn[i].duration)}}\">{{medication.emulsn[i].duration}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medicinfo\">\n\t\t\t\t\t                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.emulsn[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n\t\t\t\t\t                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationEmulsionInfoDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                </tag-input>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                {{i+1}}\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                <div class=\"li-close\" (click)=\"removeMoreTab('Emulsn',i)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                <div class=\"li-close plus\" *ngIf=\"i == medicationEmulsnArray.length-1\" (click)=\"addMoreTab('Emulsn')\"> <i class=\"fa fa-plus\"></i> </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                        </li>\n\t\t\t\t\t                                    </ul>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <div class=\"\" *ngIf=\"medicationStatus[5].status==true\">\n\t\t\t\t\t                                    <div class=\"medic-heading\" >\n\t\t\t\t\t                                        <div class=\"medicHead\"> Solution </div>\n\t\t\t\t\t                                    </div>\n\t\t\t\t\t                                    <ul class=\"medicine-list\">\n\t\t\t\t\t                                        <li *ngFor=\"let data of medicationSolutionArray;let i =index\">\n\t\t\t\t\t                                            <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Solution',$event.target.value)\" (onRemove)=\"onRemoveMedName('SolutionInfo',medication.tab[i])\" (onAdd)=\"openFrequencyModalFromMed('SolutionInfo',medication.solution[i])\" [(ngModel)]='medication.solution[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n\t\t\t\t\t                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSolutionDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                    </tag-input>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.solution[i])\"><span class=\"{{getMedFrequencyClass(medication.solution[i].frequency)}}\">{{medication.solution[i].frequency}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency duration\">\n\t\t\t\t\t                                                    <div data-toggle=\"modal\" data-target=\"#combinedModal4\" (click)=\"openFrequencyModal(medication.solution[i])\"><span class=\"{{getMedDosageClass(medication.solution[i].dosage)}}\">{{medication.solution[i].dosage}} (ml) </span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.solution[i])\"><span class=\"{{getMedDurationClass(medication.solution[i].duration)}}\">{{medication.solution[i].duration}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medicinfo\">\n\t\t\t\t\t                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.solution[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n\t\t\t\t\t                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSolutionInfoDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                </tag-input>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                {{i+1}}\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                <div class=\"li-close\" (click)=\"removeMoreTab('Solution',i)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                <div class=\"li-close plus\" *ngIf=\"i == medicationSolutionArray.length-1\" (click)=\"addMoreTab('Solution')\"> <i class=\"fa fa-plus\"></i> </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                        </li>\n\t\t\t\t\t                                    </ul>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <div class=\"\" *ngIf=\"medicationStatus[6].status==true\">\n\t\t\t\t\t                                    <div class=\"medic-heading\" >\n\t\t\t\t\t                                        <div class=\"medicHead\"> Injection </div>\n\t\t\t\t\t                                    </div>\n\t\t\t\t\t                                    <ul class=\"medicine-list\">\n\t\t\t\t\t                                        <li *ngFor=\"let data of medicationInjArray;let i =index\">\n\t\t\t\t\t                                            <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Injection',$event.target.value)\" (onRemove)=\"onRemoveMedName('InjectionInfo',medication.injection[i])\" (onAdd)=\"openFrequencyModalFromMed('InjectionInfo',medication.injection[i])\" [(ngModel)]='medication.injection[0].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n\t\t\t\t\t                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationInjectionDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                    </tag-input>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.injection[i])\"><span class=\"{{getMedFrequencyClass(medication.injection[i].frequency)}}\">{{medication.injection[i].frequency}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.injection[i])\"><span class=\"{{getMedModeClass(medication.injection[i].mode)}}\">{{medication.injection[i].mode}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.injection[i])\"><span class=\"{{getMedDurationClass(medication.injection[i].duration)}}\">{{medication.injection[i].duration}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medicinfo\">\n\t\t\t\t\t                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.injection[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n\t\t\t\t\t                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationInjectionInfoDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                </tag-input>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                {{i+1}}\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                <div class=\"li-close\" (click)=\"removeMoreTab('Inj',i)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                <div class=\"li-close plus\" *ngIf=\"i == medicationInjArray.length-1\" (click)=\"addMoreTab('Inj')\"> <i class=\"fa fa-plus\"></i> </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                        </li>\n\t\t\t\t\t                                    </ul>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <div class=\"\" *ngIf=\"medicationStatus[7].status==true\">\n\t\t\t\t\t                                    <div class=\"medic-heading\" >\n\t\t\t\t\t                                        <div class=\"medicHead\"> Cream </div>\n\t\t\t\t\t                                    </div>\n\t\t\t\t\t                                    <ul class=\"medicine-list\">\n\t\t\t\t\t                                        <li *ngFor=\"let data of medicationCreamArray;let i =index\">\n\t\t\t\t\t                                            <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Cream',$event.target.value)\" (onRemove)=\"onRemoveMedName('CreamInfo',medication.cream[i])\" (onAdd)=\"openFrequencyModalFromMed('CreamInfo',medication.cream[i])\" [(ngModel)]='medication.cream[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n\t\t\t\t\t                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationCreamDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                    </tag-input>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.cream[i])\"><span class=\"{{getMedFrequencyClass(medication.cream[i].frequency)}}\">{{medication.cream[i].frequency}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.cream[i])\"><span class=\"{{getMedDurationClass(medication.cream[i].duration)}}\">{{medication.cream[i].duration}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <!-- <span class=\"li-close\"> <i class=\"material-icons\" (click)=\"removeMoreTab('Cream',i)\"> remove </i> </span> -->\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medicinfo\">\n\t\t\t\t\t                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.cream[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n\t\t\t\t\t                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationCreamInfoDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                </tag-input>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                {{i+1}}\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                <div class=\"li-close\" (click)=\"removeMoreTab('Cream',i)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                <div class=\"li-close plus\" *ngIf=\"i == medicationCreamArray.length-1\" (click)=\"addMoreTab('Cream')\"> <i class=\"fa fa-plus\"></i> </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                        </li>\n\t\t\t\t\t                                    </ul>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <div class=\"\" *ngIf=\"medicationStatus[8].status==true\">\n\t\t\t\t\t                                    <div class=\"medic-heading\" >\n\t\t\t\t\t                                        <div class=\"medicHead\"> Gel </div>\n\t\t\t\t\t                                    </div>\n\t\t\t\t\t                                    <ul class=\"medicine-list\">\n\t\t\t\t\t                                        <li *ngFor=\"let data of medicationGelArray;let i =index\">\n\t\t\t\t\t                                            <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Gel',$event.target.value)\" (onRemove)=\"onRemoveMedName('GelInfo',medication.gel[i])\" (onAdd)=\"openFrequencyModalFromMed('GelInfo',medication.gel[i])\" [(ngModel)]='medication.gel[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n\t\t\t\t\t                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationGelDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                    </tag-input>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.gel[i])\"><span class=\"{{getMedFrequencyClass(medication.gel[i].frequency)}}\">{{medication.gel[i].frequency}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <!--  <div class=\"form-group frequency duration\">\n\t\t\t\t\t                                                    <div data-target=\"#quantityModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.gel[i])\"> {{medication.gel[i].quantity}} </div>\n\t\t\t\t\t                                                </div> -->\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.gel[i])\"><span class=\"{{getMedDurationClass(medication.gel[i].duration)}}\">{{medication.gel[i].duration}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medicinfo\">\n\t\t\t\t\t                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.gel[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n\t\t\t\t\t                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationGelInfoDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                </tag-input>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                {{i+1}}\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                <div class=\"li-close\" (click)=\"removeMoreTab('Gel',i)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                <div class=\"li-close plus\" *ngIf=\"i == medicationGelArray.length-1\" (click)=\"addMoreTab('Gel')\"> <i class=\"fa fa-plus\"></i> </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                        </li>\n\t\t\t\t\t                                    </ul>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <div class=\"\" *ngIf=\"medicationStatus[9].status==true\">\n\t\t\t\t\t                                    <div class=\"medic-heading\">\n\t\t\t\t\t                                        <div class=\"medicHead\"> Drops </div>\n\t\t\t\t\t                                    </div>\n\t\t\t\t\t                                    <ul class=\"medicine-list\">\n\t\t\t\t\t                                        <li *ngFor=\"let data of medicationDropsArray;let i =index\">\n\t\t\t\t\t                                            <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Drops',$event.target.value)\" (onRemove)=\"onRemoveMedName('DropsInfo',medication.drops[i])\" (onAdd)=\"openFrequencyModalFromMed('DropsInfo',medication.drops[i])\" [(ngModel)]='medication.drops[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n\t\t\t\t\t                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationDropsDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                    </tag-input>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal3\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.drops[i])\"><span class=\"{{getMedFrequencyClass(medication.drops[i].frequency)}}\">{{medication.drops[i].frequency}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal3\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.drops[i])\"><span class=\"{{getMedQuantityClass(medication.drops[i].quantity)}}\">{{medication.drops[i].quantity}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal3\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.drops[i])\"><span class=\"{{getMedDurationClass(medication.drops[i].duration)}}\">{{medication.drops[i].duration}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medicinfo\">\n\t\t\t\t\t                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.drops[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n\t\t\t\t\t                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationDropsDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                </tag-input>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                {{i+1}}\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                <div class=\"li-close\" (click)=\"removeMoreTab('Drops',i)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                <div class=\"li-close plus\" *ngIf=\"i == medicationDropsArray.length-1\" (click)=\"addMoreTab('Drops')\"> <i class=\"fa fa-plus\"></i> </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                        </li>\n\t\t\t\t\t                                    </ul>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <div class=\"\" *ngIf=\"medicationStatus[10].status==true\">\n\t\t\t\t\t                                    <div class=\"medic-heading\">\n\t\t\t\t\t                                        <div class=\"medicHead\"> Aerosols &amp; Inhalent </div>\n\t\t\t\t\t                                    </div>\n\t\t\t\t\t                                    <ul class=\"medicine-list\">\n\t\t\t\t\t                                        <li *ngFor=\"let data of medicationAerosolsArray;let i =index\">\n\t\t\t\t\t                                            <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Aerosols',$event.target.value)\" (onRemove)=\"onRemoveMedName('AerosolsInfo',medication.aerosols[i])\" (onAdd)=\"openFrequencyModalFromMed('AerosolsInfo',medication.aerosols[i])\" [(ngModel)]='medication.aerosols[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n\t\t\t\t\t                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationAerosolsDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                    </tag-input>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.aerosols[i])\"><span class=\"{{getMedFrequencyClass(medication.aerosols[i].frequency)}}\">{{medication.aerosols[i].frequency}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.aerosols[i])\"><span class=\"{{getMedDurationClass(medication.aerosols[i].duration)}}\">{{medication.aerosols[i].duration}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medicinfo\">\n\t\t\t\t\t                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.aerosols[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n\t\t\t\t\t                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationAerosolsInfoDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                </tag-input>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                {{i+1}}\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                <div class=\"li-close\" (click)=\"removeMoreTab('Aerosols',i)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                <div class=\"li-close plus\" *ngIf=\"i == medicationAerosolsArray.length-1\" (click)=\"addMoreTab('Aerosols')\"> <i class=\"fa fa-plus\"></i> </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                        </li>\n\t\t\t\t\t                                    </ul>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <div class=\"\" *ngIf=\"medicationStatus[11].status==true\">\n\t\t\t\t\t                                    <div class=\"medic-heading\">\n\t\t\t\t\t                                        <div class=\"medicHead\"> Powder &amp; Granule </div>\n\t\t\t\t\t                                    </div>\n\t\t\t\t\t                                    <ul class=\"medicine-list\">\n\t\t\t\t\t                                        <li *ngFor=\"let data of medicationPowderArray;let i =index\">\n\t\t\t\t\t                                            <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Powder',$event.target.value)\" (onRemove)=\"onRemoveMedName('PowderInfo',medication.powder[i])\" (onAdd)=\"openFrequencyModalFromMed('PowderInfo',medication.powder[i])\" [(ngModel)]='medication.powder[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n\t\t\t\t\t                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationPowderDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                    </tag-input>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.powder[i])\"><span class=\"{{getMedFrequencyClass(medication.powder[i].frequency)}}\">{{medication.powder[i].frequency}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.powder[i])\"><span class=\"{{getMedDurationClass(medication.powder[i].duration)}}\">{{medication.powder[i].duration}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medicinfo\">\n\t\t\t\t\t                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.powder[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n\t\t\t\t\t                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationPowderInfoDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                </tag-input>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                {{i+1}}\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                <div class=\"li-close\" (click)=\"removeMoreTab('Powder',i)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                <div class=\"li-close plus\" *ngIf=\"i == medicationPowderArray.length-1\" (click)=\"addMoreTab('Powder')\"> <i class=\"fa fa-plus\"></i> </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                        </li>\n\t\t\t\t\t                                    </ul>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <div class=\"\" *ngIf=\"medicationStatus[12].status==true\">\n\t\t\t\t\t                                    <div class=\"medic-heading\">\n\t\t\t\t\t                                        <div class=\"medicHead\"> Mouthwash &amp; Gargle </div>\n\t\t\t\t\t                                    </div>\n\t\t\t\t\t                                    <ul class=\"medicine-list\">\n\t\t\t\t\t                                        <li *ngFor=\"let data of medicationMouthWashArray;let i =index\">\n\t\t\t\t\t                                            <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Mouthwash',$event.target.value)\" (onRemove)=\"onRemoveMedName('MouthwashInfo',medication.mouthwash[i])\" (onAdd)=\"openFrequencyModalFromMed('MouthWashInfo',medication.mouthwash[i])\" [(ngModel)]='medication.mouthwash[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n\t\t\t\t\t                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationMouthwashDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                    </tag-input>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.mouthwash[i])\"><span class=\"{{getMedFrequencyClass(medication.mouthwash[i].frequency)}}\">{{medication.mouthwash[i].frequency}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.mouthwash[i])\"><span class=\"{{getMedDurationClass(medication.mouthwash[i].duration)}}\">{{medication.mouthwash[i].duration}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medicinfo\">\n\t\t\t\t\t                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.mouthwash[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n\t\t\t\t\t                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationMouthwashInfoDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                </tag-input>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                {{i+1}}\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                <div class=\"li-close\" (click)=\"removeMoreTab('MouthWash',i)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                <div class=\"li-close plus\" *ngIf=\"i == medicationMouthWashArray.length-1\" (click)=\"addMoreTab('MouthWash')\"> <i class=\"fa fa-plus\"></i> </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                        </li>\n\t\t\t\t\t                                    </ul>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <div class=\"\" *ngIf=\"medicationStatus[13].status==true\">\n\t\t\t\t\t                                    <div class=\"medic-heading\">\n\t\t\t\t\t                                        <div class=\"medicHead\"> Lotion </div>\n\t\t\t\t\t                                    </div>\n\t\t\t\t\t                                    <ul class=\"medicine-list\">\n\t\t\t\t\t                                        <li *ngFor=\"let data of medicationLotionArray;let i =index\">\n\t\t\t\t\t                                            <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Lotion',$event.target.value)\" (onRemove)=\"onRemoveMedName('LotionInfo',medication.lotion[i])\" (onAdd)=\"openFrequencyModalFromMed('LotionInfo',medication.lotion[i])\" [(ngModel)]='medication.lotion[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n\t\t\t\t\t                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationLotionDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                    </tag-input>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.lotion[i])\"><span class=\"{{getMedFrequencyClass(medication.lotion[i].frequency)}}\">{{medication.lotion[i].frequency}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.lotion[i])\"><span class=\"{{getMedDurationClass(medication.lotion[i].duration)}}\">{{medication.lotion[i].duration}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medicinfo\">\n\t\t\t\t\t                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.lotion[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n\t\t\t\t\t                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationLotionInfoDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                </tag-input>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                {{i+1}}\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                <div class=\"li-close\" (click)=\"removeMoreTab('Lotion',i)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                <div class=\"li-close plus\" *ngIf=\"i == medicationLotionArray.length-1\" (click)=\"addMoreTab('Lotion')\"> <i class=\"fa fa-plus\"></i> </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                        </li>\n\t\t\t\t\t                                    </ul>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <div class=\"\" *ngIf=\"medicationStatus[14].status==true\">\n\t\t\t\t\t                                    <div class=\"medic-heading\">\n\t\t\t\t\t                                        <div class=\"medicHead\"> Ointment </div>\n\t\t\t\t\t                                    </div>\n\t\t\t\t\t                                    <ul class=\"medicine-list\">\n\t\t\t\t\t                                        <li *ngFor=\"let data of medicationOintmentArray;let i =index\">\n\t\t\t\t\t                                            <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Ointment',$event.target.value)\" (onRemove)=\"onRemoveMedName('OintmentInfo',medication.ointment[i])\" (onAdd)=\"openFrequencyModalFromMed('OintmentInfo',medication.ointment[i])\" [(ngModel)]='medication.ointment[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n\t\t\t\t\t                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationOitmentDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                    </tag-input>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group frequency\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.ointment[i])\"><span class=\"{{getMedFrequencyClass(medication.ointment[i].frequency)}}\">{{medication.ointment[i].frequency}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <div class=\"form-group duration\">\n\t\t\t\t\t                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.ointment[i])\"><span class=\"{{getMedDurationClass(medication.ointment[i].duration)}}\">{{medication.ointment[i].duration}}</span></div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medicinfo\">\n\t\t\t\t\t                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.ointment[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n\t\t\t\t\t                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationOitmentInfoDB\"></tag-input-dropdown>\n\t\t\t\t\t                                                </tag-input>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                {{i+1}}\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                            <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                <div class=\"li-close\" (click)=\"removeMoreTab('Ointment',i)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                <div class=\"li-close plus\" *ngIf=\"i == medicationOintmentArray.length-1\"  (click)=\"addMoreTab('Ointment')\"> <i class=\"fa fa-plus\"></i> </div>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                        </li>\n\t\t\t\t\t                                    </ul>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <!-- <div *ngIf=\"totalMedicationPresetSelected>0\">\n\t\t\t\t\t                                    <div class=\"\" *ngFor=\"let data of doctorPresetArray;let i =index\">\n\t\t\t\t\t                                        <div *ngIf=\"data.status==true\">\n\t\t\t\t\t                                            <div class=\"selected_preset\" *ngFor=\"let dataPreset of data.newPresetArray;let j =index\">\n\t\t\t\t\t                                                <div class=\"medic-heading\">\n\t\t\t\t\t                                                    <div class=\"medicHead\"> {{dataPreset.name}} </div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                                <ul class=\"medicine-list\">\n\t\t\t\t\t                                                    <li *ngIf=\"dataPreset.name=='Tablet' || dataPreset.name=='Capsule' || dataPreset.name=='Cream' || dataPreset.name=='Ointment' || dataPreset.name=='Aerosols' || dataPreset.name=='Powder' || dataPreset.name=='MouthWash'\">\n\t\t\t\t\t                                                        <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                            <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                                <div class=\"only-text\">{{dataPreset.med_name[0].value}}</div>\n\t\t\t\t\t                                                            </div>\n\t\t\t\t\t                                                            <div class=\"form-group duration\">\n\t\t\t\t\t                                                                <div>{{dataPreset.frequency}}</div>\n\t\t\t\t\t                                                            </div>\n\t\t\t\t\t                                                            <div class=\"form-group duration\">\n\t\t\t\t\t                                                                <div>{{dataPreset.duration}}</div>\n\t\t\t\t\t                                                            </div>\n\t\t\t\t\t                                                        </div>\n\t\t\t\t\t                                                        <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                            <div class=\"medic-info only-text\" *ngIf=\"dataPreset.med_info\">{{dataPreset.med_info[0].value}}</div>\n\t\t\t\t\t                                                        </div>\n\t\t\t\t\t                                                        <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                            <div class=\"li-close\" (click)=\"removeMedPreset(i,j)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                        </div>\n\t\t\t\t\t                                                        <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                            {{j+1}}\n\t\t\t\t\t                                                        </div>\n\t\t\t\t\t                                                    </li>\n\t\t\t\t\t                                                    <li *ngIf=\"dataPreset.name=='Syrup' || dataPreset.name=='Suspension' || dataPreset.name=='Emulsion' || dataPreset.name=='Solution'\">\n\t\t\t\t\t                                                        <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                            <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                                <div class=\"only-text\">{{dataPreset.med_name[0].value}}</div>\n\t\t\t\t\t                                                            </div>\n\t\t\t\t\t                                                            <div class=\"form-group duration\">\n\t\t\t\t\t                                                                <div>{{dataPreset.frequency}}</div>\n\t\t\t\t\t                                                            </div>\n\t\t\t\t\t                                                            <div class=\"form-group frequency duration\">\n\t\t\t\t\t                                                                <div>{{dataPreset.dosage}}</div>\n\t\t\t\t\t                                                            </div>\n\t\t\t\t\t                                                            <div class=\"form-group duration\">\n\t\t\t\t\t                                                                <div>{{dataPreset.duration}}</div>\n\t\t\t\t\t                                                            </div>\n\t\t\t\t\t                                                        </div>\n\t\t\t\t\t                                                        <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                            <div class=\"medic-info only-text\" *ngIf=\"dataPreset.med_info\">{{dataPreset.med_info[0].value}}</div>\n\t\t\t\t\t                                                        </div>\n\t\t\t\t\t                                                        <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                            <div class=\"li-close\" (click)=\"removeMedPreset(i,j)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                        </div>\n\t\t\t\t\t                                                        <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                            {{j+1}}\n\t\t\t\t\t                                                        </div>\n\t\t\t\t\t                                                    </li>\n\t\t\t\t\t                                                    <li *ngIf=\"dataPreset.name=='Injection' || dataPreset.name=='Gel' || dataPreset.name=='Lotion'\">\n\t\t\t\t\t                                                        <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                            <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                                <div class=\"only-text\">{{dataPreset.med_name[0].value}}</div>\n\t\t\t\t\t                                                            </div>\n\t\t\t\t\t                                                            <div class=\"form-group duration\">\n\t\t\t\t\t                                                                <div>{{dataPreset.frequency}}</div>\n\t\t\t\t\t                                                            </div>\n\t\t\t\t\t                                                            <div class=\"form-group duration\">\n\t\t\t\t\t                                                                <div>{{dataPreset.duration}}</div>\n\t\t\t\t\t                                                            </div>\n\t\t\t\t\t                                                        </div>\n\t\t\t\t\t                                                        <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                            <div class=\"medic-info only-text\" *ngIf=\"dataPreset.med_info\">{{dataPreset.med_info[0].value}}</div>\n\t\t\t\t\t                                                        </div>\n\t\t\t\t\t                                                        <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                            <div class=\"li-close\" (click)=\"removeMedPreset(i,j)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                        </div>\n\t\t\t\t\t                                                        <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                            {{j+1}}\n\t\t\t\t\t                                                        </div>\n\t\t\t\t\t                                                    </li>\n\t\t\t\t\t                                                    <li *ngIf=\"dataPreset.name=='Drops'\">\n\t\t\t\t\t                                                        <div class=\"flex-rowdiv medication-form\">\n\t\t\t\t\t                                                            <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                                <div class=\"only-text\">{{dataPreset.med_name[0].value}}</div>\n\t\t\t\t\t                                                            </div>\n\t\t\t\t\t                                                            <div class=\"form-group duration\">\n\t\t\t\t\t                                                                <div>{{dataPreset.frequency}}</div>\n\t\t\t\t\t                                                            </div>\n\t\t\t\t\t                                                            <div class=\"form-group frequency duration\">\n\t\t\t\t\t                                                                <div>{{dataPreset.quantity}}</div>\n\t\t\t\t\t                                                            </div>\n\t\t\t\t\t                                                            <div class=\"form-group duration\">\n\t\t\t\t\t                                                                <div>{{dataPreset.duration}}</div>\n\t\t\t\t\t                                                            </div>\n\t\t\t\t\t                                                        </div>\n\t\t\t\t\t                                                        <div class=\"form-group medicinfo\">\n\t\t\t\t\t                                                            <div class=\"medic-info only-text\" *ngIf=\"dataPreset.med_info\">{{dataPreset.med_info[0].value}}</div>\n\t\t\t\t\t                                                        </div>\n\t\t\t\t\t                                                        <div class=\"medic-control medic-right\">\n\t\t\t\t\t                                                            <div class=\"li-close\" (click)=\"removeMedPreset(i,j)\"> <i class=\"fa fa-minus\"></i> </div>\n\t\t\t\t\t                                                        </div>\n\t\t\t\t\t                                                        <div class=\"medic-control medic-left\">\n\t\t\t\t\t                                                            {{j+1}}\n\t\t\t\t\t                                                        </div>\n\t\t\t\t\t                                                    </li>\n\t\t\t\t\t                                                </ul>\n\t\t\t\t\t                                            </div>\n\t\t\t\t\t                                        </div>\n\t\t\t\t\t                                    </div>\n\t\t\t\t\t                                </div> -->\n\t\t\t\t\t                            </div>\n\t\t\t\t\t                            <div class=\"tags-listing-div\" *ngIf=\"medicationpreset==true\">\n\t\t\t\t\t                                <fieldset class=\"fieldset-preset\">\n\t\t\t\t\t                                    <legend class=\"legend-preset\">Presets</legend>\n\t\t\t\t\t                                    <ul class=\"tags-listing\" *ngIf=\"doctorPresetArray && doctorPresetArray.length>0\">\n\t\t\t\t\t                                        <li class=\"{{getMedPresetClass('Medication',i)}}\" *ngFor=\"let data of doctorPresetArray;let i = index\" (click)=\"showHidePreset('Medication',i)\"> <a href=\"javascript:void(0)\"> {{data.preset_name}} </a> </li>\n\t\t\t\t\t                                    </ul>\n\t\t\t\t\t                                    <h5 class=\"text-muted\" style=\"text-align:center\" *ngIf=\"!doctorPresetArray || doctorPresetArray.length<1\">\n\t\t\t\t\t                                        No Presets Found, create them on Create Preset page\n\t\t\t\t\t                                    </h5>\n\t\t\t\t\t                                </fieldset>\n\t\t\t\t\t                                <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n\t\t\t\t\t                                    <button class=\"btn btn-yellow btn-sm\" type=\"button\" (click)=\"medicatPresets()\"> OK </button>\n\t\t\t\t\t                                </div> -->\n\t\t\t\t\t                            </div>\n\t\t\t\t\t                        </div>\n\t\t\t\t\t                    </div>\n\t\t\t\t\t                </div> \n\t\t\t\t      \t\t\t</div>\n\t\t\t\t          \t</div>\n\t\t\t\t          \t<div role=\"tabpanel\" class=\"tab-pane\" id=\"dis-ins\">\n\t\t\t\t      \t\t\t<div class=\"wrap-tab-cont\">\n\t\t\t\t      \t\t\t\t<div class=\"row\">\n\t\t\t\t\t        \t\t\t<div class=\"col-lg-6 col-lg-offset-6 text-right nxt-btn\">\n\t\t\t\t\t        \t\t\t\t<div class=\"dshbrd-btn\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#doc-note\" aria-controls=\"general\" role=\"tab\" data-toggle=\"tab\" class=\"btn btn-custom\" (click)=\"changeCurrentTab('doc-note')\">Next</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t        \t\t\t</div>\n\t\t\t\t\t        \t\t</div>\n\t\t\t\t      \t\t\t\t<h4><b>Wound care</b></h4>\n\t\t\t\t      \t\t\t\t<div class=\"row\">\n\t\t\t\t      \t\t\t\t\t<div class=\"col-lg-6\">\n\t\t      \t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t      \t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Type here\" [(ngModel)]=\"woundCare.one\">\n\t\t      \t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t      \t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t      \t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Type here\" [(ngModel)]=\"woundCare.two\">\n\t\t      \t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t\t</div>\n\t\t\t\t      \t\t\t\t</div>\n\t\t\t\t      \t\t\t\t<h4><b>Diet</b></h4>\n\t\t\t\t      \t\t\t\t<div class=\"row\">\n\t\t\t\t      \t\t\t\t\t<div class=\"col-lg-6\">\n\t\t      \t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t      \t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Type here\" [(ngModel)]=\"diet.one\">\n\t\t      \t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t      \t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t      \t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Type here\" [(ngModel)]=\"diet.two\">\n\t\t      \t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t\t</div>\n\t\t\t\t      \t\t\t\t</div>\n\t\t\t\t      \t\t\t\t<h4><b>Lifestyle Changes</b></h4>\n\t\t\t\t      \t\t\t\t<div class=\"row\">\n\t\t\t\t      \t\t\t\t\t<div class=\"col-lg-6\">\n\t\t      \t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t      \t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Type here\" [(ngModel)]=\"lifestyle.one\">\n\t\t      \t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t      \t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t      \t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Type here\" [(ngModel)]=\"lifestyle.two\">\n\t\t      \t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t\t</div>\n\t\t\t\t      \t\t\t\t</div>\n\t\t\t\t      \t\t\t\t<h4><b>Others</b></h4>\n\t\t\t\t      \t\t\t\t<div class=\"row\">\n\t\t\t\t      \t\t\t\t\t<div class=\"col-lg-6\">\n\t\t      \t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t      \t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Type here\" [(ngModel)]=\"others.one\">\n\t\t      \t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t      \t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t      \t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Type here\" [(ngModel)]=\"others.two\">\n\t\t      \t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t\t\t</div>\n\t\t\t\t      \t\t\t\t</div>\n\t\t\t\t      \t\t\t</div>\n\t\t\t\t      \t\t\t\n\t\t\t\t          \t</div>\n\t\t\t\t          \t<div role=\"tabpanel\" class=\"tab-pane\" id=\"doc-note\">\n\t\t\t\t      \t\t\t<div class=\"wrap-tab-cont\">\n\t\t\t\t      \t\t\t\t<div class=\"row\">\n\t\t\t\t      \t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t        \t\t\t<div class=\"col-lg-11 col-lg-offset-6 text-center nxt-btn1\">\n\t\t\t\t\t\t        \t\t\t\t<div class=\"dshbrd-btn\" (click)=\"dischargePatientApprovalByDr()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-custom\"> Approve </a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t        \t\t\t</div>\n\t\t\t\t\t\t        \t\t</div>\n\t\t\t\t\t\t\t    \t\t<div class=\"col-md-12 col-sm-10 col-xs-12\">\n\t\t\t\t\t\t\t    \t\t\t<div class=\"patient-popup discharge-popup\">\n\t\t\t\t\t\t\t    \t\t\t\t<label>Doctor Note:</label>\n\t\t\t\t\t\t\t    \t\t\t\t<div class=\"discharge-note\">\n\t\t\t\t\t\t\t    \t\t\t\t\t<textarea class=\"form-control txtfield\" name=\"\" rows=\"5\" placeholder=\"Note\" type=\"text\" [(ngModel)]=\"doctorNote\"></textarea>\n\t\t\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t\t\t    \t\t\t</div>\n\t\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t        \t\t</div>\n\t\t\t\t      \t\t\t</div>\n\t\t\t\t          \t</div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!-- model -->\n<!-- Combined modal (Injection)-->\n<div class=\"modal fade combined_modal\" id=\"combinedModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\" *ngIf=\"currentFrequency && currentFrequency.med_name\"> {{currentFrequency.med_name[0].value}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"combined_flex\">\n                            <div class=\"frquency_cmbnd\">\n                                <h3 class=\"combined_heading\"> Frequency </h3>\n                                <ul class=\"combined_frequency\">\n                                    <li class=\"{{getFrequencyClass('Once a day')}}\" (click)=\"selectFrequency('Once a day')\"> Once a day </li>\n                                    <li class=\"{{getFrequencyClass('Twice a day')}}\" (click)=\"selectFrequency('Twice a day')\"> Twice a day </li>\n                                    <li class=\"{{getFrequencyClass('Thrice a day')}}\" (click)=\"selectFrequency('Thrice a day')\"> Thrice a day </li>\n                                    <li class=\"{{getFrequencyClass('Four times a day')}}\" (click)=\"selectFrequency('Four times a day')\"> Four times a day </li>\n                                    <li class=\"{{getFrequencyClass('Every Morning')}}\" (click)=\"selectFrequency('Every Morning')\"> Every Morning </li>\n                                    <li class=\"{{getFrequencyClass('Every Night')}}\" (click)=\"selectFrequency('Every Night')\"> Every Night </li>\n                                    <li class=\"{{getFrequencyClass('Once a week')}}\" (click)=\"selectFrequency('Once a week')\"> Once a week </li>\n                                    <li class=\"{{getFrequencyClass('Once a month')}}\" (click)=\"selectFrequency('Once a month')\"> Once a month </li>\n                                    <li class=\"{{getFrequencyClass('Once in two week')}}\" (click)=\"selectFrequency('Once in two week')\"> Once in two week </li>\n                                    <li class=\"{{getFrequencyClass('Every 1 hour')}}\" (click)=\"selectFrequency('Every 1 hour')\"> Every 1 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 2 hour')}}\" (click)=\"selectFrequency('Every 2 hour')\"> Every 2 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 3 hour')}}\" (click)=\"selectFrequency('Every 3 hour')\"> Every 3 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 4 hour')}}\" (click)=\"selectFrequency('Every 4 hour')\"> Every 4 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 5 hour')}}\" (click)=\"selectFrequency('Every 5 hour')\"> Every 5 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 6 hour')}}\" (click)=\"selectFrequency('Every 6 hour')\"> Every 6 hour </li>\n                                    <li class=\"{{getFrequencyClass('Alternate day')}}\" (click)=\"selectFrequency('Alternate day')\"> Alternate day </li>\n                                    <li class=\"{{getFrequencyClass('At bed time')}}\" (click)=\"selectFrequency('At bed time')\"> At bed time </li>\n                                    <li class=\"{{getFrequencyClass('SoS')}}\" (click)=\"selectFrequency('SoS')\"> SoS </li>\n                                </ul>\n                            </div>\n                            <div class=\"duration_cmbnd\">\n                                <h3 class=\"combined_heading\"> Duration (Days) </h3>\n                                <ul class=\"combined_duration\">\n                                    <li class=\"{{getDurationClass('1')}}\" (click)=\"selectDuration('1')\">1</li>\n                                    <li class=\"{{getDurationClass('2')}}\" (click)=\"selectDuration('2')\">2</li>\n                                    <li class=\"{{getDurationClass('3')}}\" (click)=\"selectDuration('3')\">3</li>\n                                    <li class=\"{{getDurationClass('4')}}\" (click)=\"selectDuration('4')\">4</li>\n                                    <li class=\"{{getDurationClass('5')}}\" (click)=\"selectDuration('5')\">5</li>\n                                    <li class=\"{{getDurationClass('6')}}\" (click)=\"selectDuration('6')\">6</li>\n                                    <li class=\"{{getDurationClass('7')}}\" (click)=\"selectDuration('7')\">7</li>\n                                    <li class=\"{{getDurationClass('8')}}\" (click)=\"selectDuration('8')\">8</li>\n                                    <li class=\"{{getDurationClass('9')}}\" (click)=\"selectDuration('9')\">9</li>\n                                    <li class=\"{{getDurationClass('10')}}\" (click)=\"selectDuration('10')\">10</li>\n                                    <li class=\"{{getDurationClass('12')}}\" (click)=\"selectDuration('12')\">12</li>\n                                    <li class=\"{{getDurationClass('14')}}\" (click)=\"selectDuration('14')\">14</li>\n                                    <li class=\"{{getDurationClass('15')}}\" (click)=\"selectDuration('15')\">15</li>\n                                    <li class=\"{{getDurationClass('18')}}\" (click)=\"selectDuration('18')\">18</li>\n                                    <li class=\"{{getDurationClass('21')}}\" (click)=\"selectDuration('21')\">21</li>\n                                    <li class=\"{{getDurationClass('25')}}\" (click)=\"selectDuration('25')\">25</li>\n                                    <li class=\"{{getDurationClass('28')}}\" (click)=\"selectDuration('28')\">28</li>\n                                    <li class=\"{{getDurationClass('30')}}\" (click)=\"selectDuration('30')\">30</li>\n                                    <li class=\"{{getDurationClass('35')}}\" (click)=\"selectDuration('35')\">35</li>\n                                    <li class=\"{{getDurationClass('42')}}\" (click)=\"selectDuration('42')\">42</li>\n                                    <li class=\"{{getDurationClass('60')}}\" (click)=\"selectDuration('60')\">60</li>\n                                    <li class=\"{{getDurationClass('90')}}\" (click)=\"selectDuration('90')\">90</li>\n                                    <li class=\"{{getDurationClass('120')}}\" (click)=\"selectDuration('120')\">120</li>\n                                    <li class=\"{{getDurationClass('180')}}\" (click)=\"selectDuration('180')\">180</li>\n                                </ul>\n                            </div>\n                            <div class=\"instr_cmbnd\">\n                                <h3 class=\"combined_heading\"> Special Instructions </h3>\n                                <ul class=\"combined_instruc\">\n                                    <li class=\"{{getFrequencyClassSpecial('After meals')}}\" (click)=\"selectFrequencySpecial('After meals')\"> After meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Empty stomach')}}\" (click)=\"selectFrequencySpecial('Empty stomach')\"> Empty stomach</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Before meals')}}\" (click)=\"selectFrequencySpecial('Before meals')\"> Before meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('As needed')}}\" (click)=\"selectFrequencySpecial('As needed')\"> As needed</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Each night')}}\" (click)=\"selectFrequencySpecial('Each night')\"> Each night</li>\n                                    <li class=\"{{getFrequencyClassSpecial('With milk')}}\" (click)=\"selectFrequencySpecial('With milk')\"> With milk</li>\n                                </ul>\n                                <h3 class=\"combined_heading\"> Injection Mode </h3>\n                                <ul class=\"combined_inject\">\n                                    <li class=\"{{getClassInjection('Intramuscular')}}\" (click)=\"injectionSelected('Intramuscular')\"> Intramuscular </li>\n                                    <li class=\"{{getClassInjection('Intravenous')}}\" (click)=\"injectionSelected('Intravenous')\"> Intravenous </li>\n                                    <li class=\"{{getClassInjection('Intradermal')}}\" (click)=\"injectionSelected('Intradermal')\"> Intradermal </li>\n                                    <li class=\"{{getClassInjection('Subcutaneous')}}\" (click)=\"injectionSelected('Subcutaneous')\"> Subcutaneous </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn_green\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"saveFreqDurInjection()\"> Save </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Combined modal (Tablet) -->\n<div class=\"modal fade combined_modal\" id=\"combinedModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\" *ngIf=\"currentFrequency && currentFrequency.med_name\"> {{currentFrequency.med_name[0].value}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"combined_flex\">\n                            <div class=\"frquency_cmbnd\">\n                                <h3 class=\"combined_heading\"> Frequency </h3>\n                                <ul class=\"combined_frequency\">\n                                    <li class=\"{{getFrequencyClass('Once a day')}}\" (click)=\"selectFrequency('Once a day')\"> Once a day </li>\n                                    <li class=\"{{getFrequencyClass('Twice a day')}}\" (click)=\"selectFrequency('Twice a day')\"> Twice a day </li>\n                                    <li class=\"{{getFrequencyClass('Thrice a day')}}\" (click)=\"selectFrequency('Thrice a day')\"> Thrice a day </li>\n                                    <li class=\"{{getFrequencyClass('Four times a day')}}\" (click)=\"selectFrequency('Four times a day')\"> Four times a day </li>\n                                    <li class=\"{{getFrequencyClass('Every Morning')}}\" (click)=\"selectFrequency('Every Morning')\"> Every Morning </li>\n                                    <li class=\"{{getFrequencyClass('Every Night')}}\" (click)=\"selectFrequency('Every Night')\"> Every Night </li>\n                                    <li class=\"{{getFrequencyClass('Once a week')}}\" (click)=\"selectFrequency('Once a week')\"> Once a week </li>\n                                    <li class=\"{{getFrequencyClass('Once a month')}}\" (click)=\"selectFrequency('Once a month')\"> Once a month </li>\n                                    <li class=\"{{getFrequencyClass('Once in two week')}}\" (click)=\"selectFrequency('Once in two week')\"> Once in two week </li>\n                                    <li class=\"{{getFrequencyClass('Every 1 hour')}}\" (click)=\"selectFrequency('Every 1 hour')\"> Every 1 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 2 hour')}}\" (click)=\"selectFrequency('Every 2 hour')\"> Every 2 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 3 hour')}}\" (click)=\"selectFrequency('Every 3 hour')\"> Every 3 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 4 hour')}}\" (click)=\"selectFrequency('Every 4 hour')\"> Every 4 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 5 hour')}}\" (click)=\"selectFrequency('Every 5 hour')\"> Every 5 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 6 hour')}}\" (click)=\"selectFrequency('Every 6 hour')\"> Every 6 hour </li>\n                                    <li class=\"{{getFrequencyClass('Alternate day')}}\" (click)=\"selectFrequency('Alternate day')\"> Alternate day </li>\n                                    <li class=\"{{getFrequencyClass('At bed time')}}\" (click)=\"selectFrequency('At bed time')\"> At bed time </li>\n                                    <li class=\"{{getFrequencyClass('SoS')}}\" (click)=\"selectFrequency('SoS')\"> SoS </li>\n                                </ul>\n                            </div>\n                            <div class=\"duration_cmbnd\">\n                                <h3 class=\"combined_heading\"> Duration (Days) </h3>\n                                <ul class=\"combined_duration\">\n                                    <li class=\"{{getDurationClass('1')}}\" (click)=\"selectDuration('1')\">1</li>\n                                    <li class=\"{{getDurationClass('2')}}\" (click)=\"selectDuration('2')\">2</li>\n                                    <li class=\"{{getDurationClass('3')}}\" (click)=\"selectDuration('3')\">3</li>\n                                    <li class=\"{{getDurationClass('4')}}\" (click)=\"selectDuration('4')\">4</li>\n                                    <li class=\"{{getDurationClass('5')}}\" (click)=\"selectDuration('5')\">5</li>\n                                    <li class=\"{{getDurationClass('6')}}\" (click)=\"selectDuration('6')\">6</li>\n                                    <li class=\"{{getDurationClass('7')}}\" (click)=\"selectDuration('7')\">7</li>\n                                    <li class=\"{{getDurationClass('8')}}\" (click)=\"selectDuration('8')\">8</li>\n                                    <li class=\"{{getDurationClass('9')}}\" (click)=\"selectDuration('9')\">9</li>\n                                    <li class=\"{{getDurationClass('10')}}\" (click)=\"selectDuration('10')\">10</li>\n                                    <li class=\"{{getDurationClass('12')}}\" (click)=\"selectDuration('12')\">12</li>\n                                    <li class=\"{{getDurationClass('14')}}\" (click)=\"selectDuration('14')\">14</li>\n                                    <li class=\"{{getDurationClass('15')}}\" (click)=\"selectDuration('15')\">15</li>\n                                    <li class=\"{{getDurationClass('18')}}\" (click)=\"selectDuration('18')\">18</li>\n                                    <li class=\"{{getDurationClass('21')}}\" (click)=\"selectDuration('21')\">21</li>\n                                    <li class=\"{{getDurationClass('25')}}\" (click)=\"selectDuration('25')\">25</li>\n                                    <li class=\"{{getDurationClass('28')}}\" (click)=\"selectDuration('28')\">28</li>\n                                    <li class=\"{{getDurationClass('30')}}\" (click)=\"selectDuration('30')\">30</li>\n                                    <li class=\"{{getDurationClass('35')}}\" (click)=\"selectDuration('35')\">35</li>\n                                    <li class=\"{{getDurationClass('42')}}\" (click)=\"selectDuration('42')\">42</li>\n                                    <li class=\"{{getDurationClass('60')}}\" (click)=\"selectDuration('60')\">60</li>\n                                    <li class=\"{{getDurationClass('90')}}\" (click)=\"selectDuration('90')\">90</li>\n                                    <li class=\"{{getDurationClass('120')}}\" (click)=\"selectDuration('120')\">120</li>\n                                    <li class=\"{{getDurationClass('180')}}\" (click)=\"selectDuration('180')\">180</li>\n                                </ul>\n                            </div>\n                            <div class=\"instr_cmbnd\">\n                                <h3 class=\"combined_heading\"> Special Instructions </h3>\n                                <ul class=\"combined_instruc\">\n                                    <li class=\"{{getFrequencyClassSpecial('After meals')}}\" (click)=\"selectFrequencySpecial('After meals')\"> After meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Empty stomach')}}\" (click)=\"selectFrequencySpecial('Empty stomach')\"> Empty stomach</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Before meals')}}\" (click)=\"selectFrequencySpecial('Before meals')\"> Before meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('As needed')}}\" (click)=\"selectFrequencySpecial('As needed')\"> As needed</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Each night')}}\" (click)=\"selectFrequencySpecial('Each night')\"> Each night</li>\n                                    <li class=\"{{getFrequencyClassSpecial('With milk')}}\" (click)=\"selectFrequencySpecial('With milk')\"> With milk</li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn_green\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"saveFreqDuration()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Combined modal (Drops) -->\n<div class=\"modal fade combined_modal\" id=\"combinedModal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\" *ngIf=\"currentFrequency && currentFrequency.med_name\"> {{currentFrequency.med_name[0].value}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"combined_flex\">\n                            <div class=\"frquency_cmbnd\">\n                                <h3 class=\"combined_heading\"> Frequency </h3>\n                                <ul class=\"combined_frequency\">\n                                    <li class=\"{{getFrequencyClass('Once a day')}}\" (click)=\"selectFrequency('Once a day')\"> Once a day </li>\n                                    <li class=\"{{getFrequencyClass('Twice a day')}}\" (click)=\"selectFrequency('Twice a day')\"> Twice a day </li>\n                                    <li class=\"{{getFrequencyClass('Thrice a day')}}\" (click)=\"selectFrequency('Thrice a day')\"> Thrice a day </li>\n                                    <li class=\"{{getFrequencyClass('Four times a day')}}\" (click)=\"selectFrequency('Four times a day')\"> Four times a day </li>\n                                    <li class=\"{{getFrequencyClass('Every Morning')}}\" (click)=\"selectFrequency('Every Morning')\"> Every Morning </li>\n                                    <li class=\"{{getFrequencyClass('Every Night')}}\" (click)=\"selectFrequency('Every Night')\"> Every Night </li>\n                                    <li class=\"{{getFrequencyClass('Once a week')}}\" (click)=\"selectFrequency('Once a week')\"> Once a week </li>\n                                    <li class=\"{{getFrequencyClass('Once a month')}}\" (click)=\"selectFrequency('Once a month')\"> Once a month </li>\n                                    <li class=\"{{getFrequencyClass('Once in two week')}}\" (click)=\"selectFrequency('Once in two week')\"> Once in two week </li>\n                                    <li class=\"{{getFrequencyClass('Every 1 hour')}}\" (click)=\"selectFrequency('Every 1 hour')\"> Every 1 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 2 hour')}}\" (click)=\"selectFrequency('Every 2 hour')\"> Every 2 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 3 hour')}}\" (click)=\"selectFrequency('Every 3 hour')\"> Every 3 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 4 hour')}}\" (click)=\"selectFrequency('Every 4 hour')\"> Every 4 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 5 hour')}}\" (click)=\"selectFrequency('Every 5 hour')\"> Every 5 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 6 hour')}}\" (click)=\"selectFrequency('Every 6 hour')\"> Every 6 hour </li>\n                                    <li class=\"{{getFrequencyClass('Alternate day')}}\" (click)=\"selectFrequency('Alternate day')\"> Alternate day </li>\n                                    <li class=\"{{getFrequencyClass('At bed time')}}\" (click)=\"selectFrequency('At bed time')\"> At bed time </li>\n                                    <li class=\"{{getFrequencyClass('SoS')}}\" (click)=\"selectFrequency('SoS')\"> SoS </li>\n                                </ul>\n                            </div>\n                            <div class=\"duration_cmbnd\">\n                                <h3 class=\"combined_heading\"> Duration (Days) </h3>\n                                <ul class=\"combined_duration\">\n                                    <li class=\"{{getDurationClass('1')}}\" (click)=\"selectDuration('1')\">1</li>\n                                    <li class=\"{{getDurationClass('2')}}\" (click)=\"selectDuration('2')\">2</li>\n                                    <li class=\"{{getDurationClass('3')}}\" (click)=\"selectDuration('3')\">3</li>\n                                    <li class=\"{{getDurationClass('4')}}\" (click)=\"selectDuration('4')\">4</li>\n                                    <li class=\"{{getDurationClass('5')}}\" (click)=\"selectDuration('5')\">5</li>\n                                    <li class=\"{{getDurationClass('6')}}\" (click)=\"selectDuration('6')\">6</li>\n                                    <li class=\"{{getDurationClass('7')}}\" (click)=\"selectDuration('7')\">7</li>\n                                    <li class=\"{{getDurationClass('8')}}\" (click)=\"selectDuration('8')\">8</li>\n                                    <li class=\"{{getDurationClass('9')}}\" (click)=\"selectDuration('9')\">9</li>\n                                    <li class=\"{{getDurationClass('10')}}\" (click)=\"selectDuration('10')\">10</li>\n                                    <li class=\"{{getDurationClass('12')}}\" (click)=\"selectDuration('12')\">12</li>\n                                    <li class=\"{{getDurationClass('14')}}\" (click)=\"selectDuration('14')\">14</li>\n                                    <li class=\"{{getDurationClass('15')}}\" (click)=\"selectDuration('15')\">15</li>\n                                    <li class=\"{{getDurationClass('18')}}\" (click)=\"selectDuration('18')\">18</li>\n                                    <li class=\"{{getDurationClass('21')}}\" (click)=\"selectDuration('21')\">21</li>\n                                    <li class=\"{{getDurationClass('25')}}\" (click)=\"selectDuration('25')\">25</li>\n                                    <li class=\"{{getDurationClass('28')}}\" (click)=\"selectDuration('28')\">28</li>\n                                    <li class=\"{{getDurationClass('30')}}\" (click)=\"selectDuration('30')\">30</li>\n                                    <li class=\"{{getDurationClass('35')}}\" (click)=\"selectDuration('35')\">35</li>\n                                    <li class=\"{{getDurationClass('42')}}\" (click)=\"selectDuration('42')\">42</li>\n                                    <li class=\"{{getDurationClass('60')}}\" (click)=\"selectDuration('60')\">60</li>\n                                    <li class=\"{{getDurationClass('90')}}\" (click)=\"selectDuration('90')\">90</li>\n                                    <li class=\"{{getDurationClass('120')}}\" (click)=\"selectDuration('120')\">120</li>\n                                    <li class=\"{{getDurationClass('180')}}\" (click)=\"selectDuration('180')\">180</li>\n                                </ul>\n                            </div>\n                            <div class=\"instr_cmbnd\">\n                                <h3 class=\"combined_heading\"> Special Instructions </h3>\n                                <ul class=\"combined_instruc\">\n                                    <li class=\"{{getFrequencyClassSpecial('After meals')}}\" (click)=\"selectFrequencySpecial('After meals')\"> After meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Empty stomach')}}\" (click)=\"selectFrequencySpecial('Empty stomach')\"> Empty stomach</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Before meals')}}\" (click)=\"selectFrequencySpecial('Before meals')\"> Before meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('As needed')}}\" (click)=\"selectFrequencySpecial('As needed')\"> As needed</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Each night')}}\" (click)=\"selectFrequencySpecial('Each night')\"> Each night</li>\n                                    <li class=\"{{getFrequencyClassSpecial('With milk')}}\" (click)=\"selectFrequencySpecial('With milk')\"> With milk</li>\n                                </ul>\n                                <h3 class=\"combined_heading\"> Drop quantity </h3>\n                                <ul class=\"combined_instruc combined_drop\">\n                                    <li *ngFor=\"let value of quantity_range\" [ngClass]=\"value==tempQuantity ? 'active-cel' : ''\" (click)=\"addTempQuantity(value)\"> {{value}} </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn_green\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"saveFreqDurDrops()\"> Save </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Combined modal (Syrup) -->\n<div class=\"modal fade combined_modal\" id=\"combinedModal4\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\" *ngIf=\"currentFrequency && currentFrequency.med_name\"> {{currentFrequency.med_name[0].value}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"combined_flex\">\n                            <div class=\"frquency_cmbnd\">\n                                <h3 class=\"combined_heading\"> Frequency </h3>\n                                <ul class=\"combined_frequency\">\n                                    <li class=\"{{getFrequencyClass('Once a day')}}\" (click)=\"selectFrequency('Once a day')\"> Once a day </li>\n                                    <li class=\"{{getFrequencyClass('Twice a day')}}\" (click)=\"selectFrequency('Twice a day')\"> Twice a day </li>\n                                    <li class=\"{{getFrequencyClass('Thrice a day')}}\" (click)=\"selectFrequency('Thrice a day')\"> Thrice a day </li>\n                                    <li class=\"{{getFrequencyClass('Four times a day')}}\" (click)=\"selectFrequency('Four times a day')\"> Four times a day </li>\n                                    <li class=\"{{getFrequencyClass('Every Morning')}}\" (click)=\"selectFrequency('Every Morning')\"> Every Morning </li>\n                                    <li class=\"{{getFrequencyClass('Every Night')}}\" (click)=\"selectFrequency('Every Night')\"> Every Night </li>\n                                    <li class=\"{{getFrequencyClass('Once a week')}}\" (click)=\"selectFrequency('Once a week')\"> Once a week </li>\n                                    <li class=\"{{getFrequencyClass('Once a month')}}\" (click)=\"selectFrequency('Once a month')\"> Once a month </li>\n                                    <li class=\"{{getFrequencyClass('Once in two week')}}\" (click)=\"selectFrequency('Once in two week')\"> Once in two week </li>\n                                    <li class=\"{{getFrequencyClass('Every 1 hour')}}\" (click)=\"selectFrequency('Every 1 hour')\"> Every 1 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 2 hour')}}\" (click)=\"selectFrequency('Every 2 hour')\"> Every 2 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 3 hour')}}\" (click)=\"selectFrequency('Every 3 hour')\"> Every 3 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 4 hour')}}\" (click)=\"selectFrequency('Every 4 hour')\"> Every 4 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 5 hour')}}\" (click)=\"selectFrequency('Every 5 hour')\"> Every 5 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 6 hour')}}\" (click)=\"selectFrequency('Every 6 hour')\"> Every 6 hour </li>\n                                    <li class=\"{{getFrequencyClass('Alternate day')}}\" (click)=\"selectFrequency('Alternate day')\"> Alternate day </li>\n                                    <li class=\"{{getFrequencyClass('At bed time')}}\" (click)=\"selectFrequency('At bed time')\"> At bed time </li>\n                                    <li class=\"{{getFrequencyClass('SoS')}}\" (click)=\"selectFrequency('SoS')\"> SoS </li>\n                                </ul>\n                            </div>\n                            <div class=\"duration_cmbnd\">\n                                <h3 class=\"combined_heading\"> Duration (Days) </h3>\n                                <ul class=\"combined_duration\">\n                                    <li class=\"{{getDurationClass('1')}}\" (click)=\"selectDuration('1')\">1</li>\n                                    <li class=\"{{getDurationClass('2')}}\" (click)=\"selectDuration('2')\">2</li>\n                                    <li class=\"{{getDurationClass('3')}}\" (click)=\"selectDuration('3')\">3</li>\n                                    <li class=\"{{getDurationClass('4')}}\" (click)=\"selectDuration('4')\">4</li>\n                                    <li class=\"{{getDurationClass('5')}}\" (click)=\"selectDuration('5')\">5</li>\n                                    <li class=\"{{getDurationClass('6')}}\" (click)=\"selectDuration('6')\">6</li>\n                                    <li class=\"{{getDurationClass('7')}}\" (click)=\"selectDuration('7')\">7</li>\n                                    <li class=\"{{getDurationClass('8')}}\" (click)=\"selectDuration('8')\">8</li>\n                                    <li class=\"{{getDurationClass('9')}}\" (click)=\"selectDuration('9')\">9</li>\n                                    <li class=\"{{getDurationClass('10')}}\" (click)=\"selectDuration('10')\">10</li>\n                                    <li class=\"{{getDurationClass('12')}}\" (click)=\"selectDuration('12')\">12</li>\n                                    <li class=\"{{getDurationClass('14')}}\" (click)=\"selectDuration('14')\">14</li>\n                                    <li class=\"{{getDurationClass('15')}}\" (click)=\"selectDuration('15')\">15</li>\n                                    <li class=\"{{getDurationClass('18')}}\" (click)=\"selectDuration('18')\">18</li>\n                                    <li class=\"{{getDurationClass('21')}}\" (click)=\"selectDuration('21')\">21</li>\n                                    <li class=\"{{getDurationClass('25')}}\" (click)=\"selectDuration('25')\">25</li>\n                                    <li class=\"{{getDurationClass('28')}}\" (click)=\"selectDuration('28')\">28</li>\n                                    <li class=\"{{getDurationClass('30')}}\" (click)=\"selectDuration('30')\">30</li>\n                                    <li class=\"{{getDurationClass('35')}}\" (click)=\"selectDuration('35')\">35</li>\n                                    <li class=\"{{getDurationClass('42')}}\" (click)=\"selectDuration('42')\">42</li>\n                                    <li class=\"{{getDurationClass('60')}}\" (click)=\"selectDuration('60')\">60</li>\n                                    <li class=\"{{getDurationClass('90')}}\" (click)=\"selectDuration('90')\">90</li>\n                                    <li class=\"{{getDurationClass('120')}}\" (click)=\"selectDuration('120')\">120</li>\n                                    <li class=\"{{getDurationClass('180')}}\" (click)=\"selectDuration('180')\">180</li>\n                                </ul>\n                            </div>\n                            <div class=\"instr_cmbnd\">\n                                <h3 class=\"combined_heading\"> Special Instructions </h3>\n                                <ul class=\"combined_instruc\">\n                                    <li class=\"{{getFrequencyClassSpecial('After meals')}}\" (click)=\"selectFrequencySpecial('After meals')\"> After meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Empty stomach')}}\" (click)=\"selectFrequencySpecial('Empty stomach')\"> Empty stomach</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Before meals')}}\" (click)=\"selectFrequencySpecial('Before meals')\"> Before meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('As needed')}}\" (click)=\"selectFrequencySpecial('As needed')\"> As needed</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Each night')}}\" (click)=\"selectFrequencySpecial('Each night')\"> Each night</li>\n                                    <li class=\"{{getFrequencyClassSpecial('With milk')}}\" (click)=\"selectFrequencySpecial('With milk')\"> With milk</li>\n                                </ul>\n                                <h3 class=\"combined_heading\"> Dosage (ml) </h3>\n                                <ul class=\"combined_instruc combined_drop combined_dosage\">\n                                    <li class=\"{{getClassDosage('1')}}\" (click)=\"selectDosage('1')\"> 1 </li>\n                                    <li class=\"{{getClassDosage('2')}}\" (click)=\"selectDosage('2')\"> 2 </li>\n                                    <li class=\"{{getClassDosage('3')}}\" (click)=\"selectDosage('3')\"> 3 </li>\n                                    <li class=\"{{getClassDosage('4')}}\" (click)=\"selectDosage('4')\"> 4 </li>\n                                    <li class=\"{{getClassDosage('5')}}\" (click)=\"selectDosage('5')\"> 5 </li>\n                                    <li class=\"{{getClassDosage('1.5')}}\" (click)=\"selectDosage('1.5')\"> 1.5 </li>\n                                    <li class=\"{{getClassDosage('2.5')}}\" (click)=\"selectDosage('2.5')\"> 2.5 </li>\n                                    <li class=\"{{getClassDosage('3.5')}}\" (click)=\"selectDosage('3.5')\"> 3.5 </li>\n                                    <li class=\"{{getClassDosage('4.5')}}\" (click)=\"selectDosage('4.5')\"> 4.5 </li>\n                                    <li class=\"{{getClassDosage('5.5')}}\" (click)=\"selectDosage('5.5')\"> 5.5 </li>\n                                    <li class=\"{{getClassDosage('6')}}\" (click)=\"selectDosage('6')\"> 6 </li>\n                                    <li class=\"{{getClassDosage('7')}}\" (click)=\"selectDosage('7')\"> 7 </li>\n                                    <li class=\"{{getClassDosage('8')}}\" (click)=\"selectDosage('8')\"> 8 </li>\n                                    <li class=\"{{getClassDosage('9')}}\" (click)=\"selectDosage('9')\"> 9 </li>\n                                    <li class=\"{{getClassDosage('10')}}\" (click)=\"selectDosage('10')\"> 10 </li>\n                                    <li class=\"{{getClassDosage('6.5')}}\" (click)=\"selectDosage('6.5')\"> 6.5 </li>\n                                    <li class=\"{{getClassDosage('7.5')}}\" (click)=\"selectDosage('7.5')\"> 7.5 </li>\n                                    <li class=\"{{getClassDosage('8.5')}}\" (click)=\"selectDosage('8.5')\"> 8.5 </li>\n                                    <li class=\"{{getClassDosage('9.5')}}\" (click)=\"selectDosage('9.5')\"> 9.5 </li>\n                                    <li class=\"{{getClassDosage('10.5')}}\" (click)=\"selectDosage('10.5')\"> 10.5 </li>\n                                    <li class=\"{{getClassDosage('11')}}\" (click)=\"selectDosage('11')\"> 11 </li>\n                                    <li class=\"{{getClassDosage('12')}}\" (click)=\"selectDosage('12')\"> 12 </li>\n                                    <li class=\"{{getClassDosage('15')}}\" (click)=\"selectDosage('15')\"> 15 </li>\n                                    <li class=\"{{getClassDosage('20')}}\" (click)=\"selectDosage('20')\"> 20 </li>\n                                    <li class=\"{{getClassDosage('25')}}\" (click)=\"selectDosage('25')\"> 25 </li>\n                                    <li class=\"{{getClassDosage('11.5')}}\" (click)=\"selectDosage('11.5')\"> 11.5 </li>\n                                    <li class=\"{{getClassDosage('12.5')}}\" (click)=\"selectDosage('12.5')\"> 12.5 </li>\n                                    <li class=\"{{getClassDosage('30')}}\" (click)=\"selectDosage('30')\"> 30 </li>\n                                    <li class=\"{{getClassDosage('40')}}\" (click)=\"selectDosage('40')\"> 40 </li>\n                                    <li class=\"{{getClassDosage('50')}}\" (click)=\"selectDosage('50')\"> 50 </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn_green\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"saveFreqDurDosage()\"> Save </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/discharge-patientpdf/discharge-patientpdf.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DischargePatientpdfComponent; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_socket_io_client__);
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



var DischargePatientpdfComponent = /** @class */ (function () {
    function DischargePatientpdfComponent(formBuilder, toastr, userService, router, dialog, _spinner) {
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
        //MEDICATION
        this.medicatab = 0;
        this.medicationStatus = [
            { status: false },
            { status: false },
            { status: false },
            { status: false },
            { status: false },
            { status: false },
            { status: false },
            { status: false },
            { status: false },
            { status: false },
            { status: false },
            { status: false },
            { status: false },
            { status: false },
            { status: false }
        ];
        this.medicationTabArray = [];
        this.medicationCapArray = [];
        this.medicationSypArray = [];
        this.medicationSuspArray = [];
        this.medicationEmulsnArray = [];
        this.medicationInjArray = [];
        this.medicationCreamArray = [];
        this.medicationGelArray = [];
        this.medicationDropsArray = [];
        this.medicationPowderArray = [];
        this.medicationAerosolsArray = [];
        this.medicationMouthWashArray = [];
        this.medicationSolutionArray = [];
        this.medicationLotionArray = [];
        this.medicationOintmentArray = [];
        this.totalMedications = -1;
        this.trigger = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
    }
    DischargePatientpdfComponent.prototype.ngOnInit = function () {
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
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        this.patientDataForDischarge = JSON.parse(localStorage['patientDataForDischarge']);
        this.patientActivities = this.patientDataForDischarge.patient_activities;
        this.dataSmartIpd = this.patientDataForDischarge.smart_ipd_id;
        console.log(this.patientDataForDischarge);
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
        // this.smartIpdData = JSON.parse(localStorage['smartIpdDetails'])
        this.pateintPicPath = __WEBPACK_IMPORTED_MODULE_9__environments_environment_prod__["a" /* environment */].patientPic;
        this.webCam = false;
        this.imgSrc = './assets/imgs/placeholder.png';
        this.appointmentsForCalender = [{
                start: new Date().toJSON().toString().substr(0, 10),
                title: '1',
                time: ''
            }];
        this.shiftsOfParticularDay = [];
        //Akshay 27 Nov Start
        this.addpatientModal = {};
        this.addpatientModal.consultDoc = "";
        this.addpatientModal.gender = "";
        this.registerForm = this.formBuilder.group({
            'phone': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].maxLength(10)
                ])],
            'patientName': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z ]*')])],
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
        this.addpatientModalData = {};
        this.addpatientModalData.type = "";
        this.addActivityForm = this.formBuilder.group({
            'type': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required])],
            'instruction': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ]*'),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].maxLength(80), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].min(1)])],
            'unit': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*')])],
            'rate': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].max(9999999), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].min(0)])],
            'amount': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].min(0),
                ])],
        });
        this.dischargeDate = this.patientDataForDischarge.discharge_date;
        this.newDischargeDate = this.patientDataForDischarge.discharge_date;
        this.discharegeTime = {
            hour: new Date(this.dischargeDate).getHours(),
            minute: new Date(this.dischargeDate).getMinutes()
        };
        //MEDICATION
        // this.medicationStatus[0].status = true
        this.medicationTabArray.push('1');
        this.medicationCapArray.push('1');
        this.medicationSypArray.push('1');
        this.medicationSuspArray.push('1');
        this.medicationEmulsnArray.push('1');
        this.medicationInjArray.push('1');
        this.medicationCreamArray.push('1');
        this.medicationGelArray.push('1');
        this.medicationDropsArray.push('1');
        this.medicationPowderArray.push('1');
        this.medicationAerosolsArray.push('1');
        this.medicationMouthWashArray.push('1');
        this.medicationSolutionArray.push('1');
        this.medicationLotionArray.push('1');
        this.medicationOintmentArray.push('1');
        this.doctorMedicationTabletDB = [];
        this.doctorMedicationCapsuleDB = [];
        this.doctorMedicationSyrupDB = [];
        this.doctorMedicationSuspensionDB = [];
        this.doctorMedicationEmulsionDB = [];
        this.doctorMedicationSolutionDB = [];
        this.doctorMedicationInjectionDB = [];
        this.doctorMedicationCreamDB = [];
        this.doctorMedicationOitmentDB = [];
        this.doctorMedicationGelDB = [];
        this.doctorMedicationLotionDB = [];
        this.doctorMedicationDropsDB = [];
        this.doctorMedicationAerosolsDB = [];
        this.doctorMedicationPowderDB = [];
        this.doctorMedicationMouthwashDB = [];
        this.doctorMedicationTabletInfoDB = [];
        this.doctorMedicationCapsuleInfoDB = [];
        this.doctorMedicationSyrupInfoDB = [];
        this.doctorMedicationSuspensionInfoDB = [];
        this.doctorMedicationEmulsionInfoDB = [];
        this.doctorMedicationSolutionInfoDB = [];
        this.doctorMedicationInjectionInfoDB = [];
        this.doctorMedicationCreamInfoDB = [];
        this.doctorMedicationOitmentInfoDB = [];
        this.doctorMedicationGelInfoDB = [];
        this.doctorMedicationLotionInfoDB = [];
        this.doctorMedicationDropsInfoDB = [];
        this.doctorMedicationAerosolsInfoDB = [];
        this.doctorMedicationPowderInfoDB = [];
        this.doctorMedicationMouthwashInfoDB = [];
        this.medInfoDB = [];
        this.medication = {};
        this.medication.tab = [{}];
        this.medication.tab[0].frequency = 'Frequency';
        this.medication.tab[0].duration = 'Duration';
        this.medication.cap = [{}];
        this.medication.cap[0].frequency = 'Frequency';
        this.medication.cap[0].duration = 'Duration';
        this.medication.syp = [{}];
        this.medication.syp[0].frequency = 'Frequency';
        this.medication.syp[0].dosage = 'Dosage';
        this.medication.syp[0].duration = 'Duration';
        this.medication.susp = [{}];
        this.medication.susp[0].frequency = 'Frequency';
        this.medication.susp[0].dosage = 'Dosage';
        this.medication.susp[0].duration = 'Duration';
        this.medication.emulsn = [{}];
        this.medication.emulsn[0].frequency = 'Frequency';
        this.medication.emulsn[0].dosage = 'Dosage';
        this.medication.emulsn[0].duration = 'Duration';
        this.medication.solution = [{}];
        this.medication.solution[0].frequency = 'Frequency';
        this.medication.solution[0].dosage = 'Dosage';
        this.medication.solution[0].duration = 'Duration';
        this.medication.injection = [{}];
        this.medication.injection[0].frequency = 'Frequency';
        this.medication.injection[0].mode = 'Mode';
        this.medication.injection[0].duration = 'Duration';
        this.medication.powder = [{}];
        this.medication.powder[0].frequency = 'Frequency';
        this.medication.powder[0].duration = 'Duration';
        this.medication.cream = [{}];
        this.medication.cream[0].frequency = 'Frequency';
        this.medication.cream[0].duration = 'Duration';
        this.medication.aerosols = [{}];
        this.medication.aerosols[0].frequency = 'Frequency';
        this.medication.aerosols[0].duration = 'Duration';
        this.medication.mouthwash = [{}];
        this.medication.mouthwash[0].frequency = 'Frequency';
        this.medication.mouthwash[0].duration = 'Duration';
        this.medication.gel = [{}];
        this.medication.gel[0].frequency = 'Frequency';
        this.medication.gel[0].duration = 'Duration';
        // this.medication.gel[0].quantity = 'Qty, (No)'
        this.medication.drops = [{}];
        this.medication.drops[0].frequency = 'Frequency';
        this.medication.drops[0].duration = 'Duration';
        this.medication.drops[0].quantity = 'Qty, (No)';
        this.medication.lotion = [{}];
        this.medication.lotion[0].frequency = 'Frequency';
        this.medication.lotion[0].duration = 'Duration';
        this.medication.ointment = [{}];
        this.medication.ointment[0].frequency = 'Frequency';
        this.medication.ointment[0].duration = 'Duration';
        this.tempMedicationArray = [];
        //MEDICATION
        this.currentTab = 'pd';
        this.occupancyCharges = this.patientDataForDischarge.occupancy_charges;
        this.FindDoctorsOfSameClinic();
        this.woundCare = {};
        this.diet = {};
        this.lifestyle = {};
        this.others = {};
        this.GetDoctorSuggestions();
        /////////////////SOCKET ON//////////////////////
        this.socket = __WEBPACK_IMPORTED_MODULE_11_socket_io_client__(__WEBPACK_IMPORTED_MODULE_9__environments_environment_prod__["a" /* environment */].socket);
        this.socket.emit('room join', {
            room_id: this.doctorData.smart_ipd_id.toString()
        });
        /////////////////SOCKET ON end//////////////////////
    };
    DischargePatientpdfComponent.prototype.findUniqueBedNumber = function (id, array) {
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
    DischargePatientpdfComponent.prototype.openWebCam = function () {
        this.webCam = true;
    };
    DischargePatientpdfComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
        this.webCam = false;
    };
    DischargePatientpdfComponent.prototype.handleImage = function (webcamImage) {
        console.info('received webcam image', webcamImage);
        this.imgSrc = webcamImage._imageAsDataUrl;
    };
    Object.defineProperty(DischargePatientpdfComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DischargePatientpdfComponent.prototype.openCalendar = function () {
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
    DischargePatientpdfComponent.prototype.clickButton = function (model) {
        this.displayEvent = model;
    };
    DischargePatientpdfComponent.prototype.dayClick = function (model) {
        this.calenderDateClicked(model.date._d);
    };
    DischargePatientpdfComponent.prototype.eventClick = function (model) {
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
    DischargePatientpdfComponent.prototype.calenderDateClicked = function (model) {
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
    DischargePatientpdfComponent.prototype.getClassTime = function (shift) {
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
    DischargePatientpdfComponent.prototype.checkCustomTimeShifts = function () {
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
    DischargePatientpdfComponent.prototype.getClassSlot = function (data) {
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
    DischargePatientpdfComponent.prototype.onTimeSelection = function (data) {
        $("#selectAppointmentTime").modal("hide");
        $("#appointmentCalender").modal("hide");
        // $("#addpatientModal").modal("hide");
        // $("#addpatientModal").modal("show");
    };
    //calendar end
    //Akshay 28 Nov
    DischargePatientpdfComponent.prototype.registerClick = function () {
        var _this = this;
        this.addpatientModal.type = this.bedType.store;
        this.addpatientModal.bed_number = this.bedNumber;
        if (this.imgSrc != './assets/imgs/placeholder.png') {
            this.addpatientModal.imgSrc = this.imgSrc;
        }
        this.addpatientModal.smart_ipd_id = this.dataSmartIpd._id;
        this.addpatientModal.clinic_id = this.adminDoctor.doctm_clinic_id;
        this.userService.BookIpdForPatient(this.addpatientModal).subscribe(function (data) {
            console.log(data);
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
    DischargePatientpdfComponent.prototype.resetForm = function () {
        this.registerForm.reset();
        this.imgSrc = './assets/imgs/placeholder.png';
    };
    DischargePatientpdfComponent.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    DischargePatientpdfComponent.prototype.GetPatientLastPrescription = function () {
        var _this = this;
        if (this.addpatientModal.patientName && this.addpatientModal.patientName != null && this.addpatientModal.patientName != '' && this.addpatientModal.patientName.trim().length > 0) {
            var object = void 0;
            object = {};
            object.clinic_id = this.clinic_id;
            object.mobile = this.addpatientModal.phone;
            object.name = this.addpatientModal.patientName;
            this.userService.GetPatientLastPrescription(object).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    _this.addpatientModal.age = data.data.registration.age;
                    _this.addpatientModal.gender = data.data.registration.gender;
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    DischargePatientpdfComponent.prototype.findPatientNameFromPhone = function (data) {
        var _this = this;
        if (!isNaN(data)) {
            data = data.trim();
            if (data.length > 0) {
                var object = void 0;
                object = {};
                //  var doctor = this.admin.filter(d=>d._id.toString()==this.appointmentDoctor.toString())
                object.clinic_id = this.clinic_id;
                object.mobile = data;
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
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    DischargePatientpdfComponent.prototype.onKey = function (procedure) {
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
    DischargePatientpdfComponent.prototype.openActivitySheet = function () {
        // this.userService.GetAllIpdActivityOfPatient(this.patientDataForDischarge._id).subscribe(data => {
        //     console.log(data)
        //     this.suggestionList = []
        //     if (data.response == true) {
        //         this.patientDataForDischarge.patient_activities = data.data
        $("#activityModal").modal("show");
        //     }
        // }, err => {
        //     console.log(err);
        // })
    };
    DischargePatientpdfComponent.prototype.addActivity = function () {
        this.addUpdateActivityText = "Add Activity";
        $("#addActivityModal").modal("show");
        // $("#patientModal").modal("hide");
        // $("#activityModal").modal("hide")
    };
    DischargePatientpdfComponent.prototype.updateActivity = function (data, id) {
        this.addUpdateActivityText = "Update Activity";
        this.updateActivityId = id;
        this.addpatientModalData = data;
        $("#addActivityModal").modal("show");
    };
    DischargePatientpdfComponent.prototype.addUpdateActivity = function () {
        var _this = this;
        if (this.addUpdateActivityText == "Add Activity") {
            this.addpatientModalData.amount = this.addpatientModalData.unit * this.addpatientModalData.rate;
            this.addpatientModalData.ipdPatientId = this.patientDataForDischarge._id;
            this.userService.AddActivity(this.addpatientModalData).subscribe(function (data) {
                console.log(_this.addpatientModalData);
                if (data.response == true) {
                    $("#addActivityModal").modal("hide");
                    $("#patientModal").modal("hide");
                    $("#activityModal").modal("hide");
                    _this.toastr.success(data.message, "Success");
                    _this.ngOnInit();
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
            this.userService.UpdateActivity(this.addpatientModalData).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    $("#addActivityModal").modal("hide");
                    $("#patientModal").modal("hide");
                    $("#activityModal").modal("hide");
                    _this.toastr.success(data.message, "Success");
                    _this.ngOnInit();
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    DischargePatientpdfComponent.prototype.DeleteActivity = function (activity) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__confirmation_popup_confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */], {
            // width: '250px',
            data: activity.instruction
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result == "yes") {
                _this.userService.DeleteActivity(activity._id).subscribe(function (data) {
                    console.log(data);
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
    DischargePatientpdfComponent.prototype.printDischarge = function () {
        if (this.discharegeTime == null) {
            this.toastr.warning('Invalid discharge time', 'Warning');
            return;
        }
        else if (new Date(this.patientDataForDischarge.createdAt) >= new Date(new Date(this.newDischargeDate).toISOString())) {
            this.toastr.warning('Invalid discharge date', 'Warning');
        }
        else if (this.totalActivitiesOutstandingAmount < 0) {
            this.toastr.warning('Amount can not be negative', 'Warning');
        }
        else {
            var object = {
                id: this.patientDataForDischarge.id,
                doctor_note: this.doctorNote,
                duration_days: this.differenceInDays,
                duration_hours: this.differenceInHours,
                newDischargeDate: this.newDischargeDate,
                total_bill: this.patientDataForDischarge.advanceReceived + this.totalActivitiesOutstandingAmount
            };
            console.log(object);
            // this.userService.DischargePatient(object).subscribe(data => {
            //     console.log(data);
            //     if (data.response == true) {
            //         this.toastr.success(data.message, "Success");
            // $("#addActivityModal").modal("hide");
            // $("#patientModal").modal("hide");
            // $("#activityModal").modal("hide");    
            // $("#dischargeModal").modal("hide");                     
            $('#discharge_sheet').printThis({
                debug: false,
                importCSS: true,
                importStyle: true,
                printContainer: true,
                pageTitle: "Prescription",
                removeInline: false,
                printDelay: 333,
                header: null,
                formValues: true
            });
            //             setTimeout(() => {
            //                 this.ngOnInit()
            //             }, 1500);
            //         } else {
            //             this.toastr.error(data.message, "Error");
            //         }
            //     }, err => {
            //         console.log(err);
            //     })
        }
    };
    // calculateCharges(){ 
    //     this.totalActivitiesAmount = 0
    //     this.occupancyCharges = 0
    //     this.totalActivitiesOutstandingAmount = 0
    //     this.refundAmount = 0
    //     this.totalActivityOccupancy=0
    //     this.occupancyHoursAmount =0
    //     for (var i = 0; i < this.patientDataForDischarge.patient_activities.length; i++) {
    //         if(!this.patientDataForDischarge.patient_activities[i].unit)
    //         {
    //          this.patientDataForDischarge.patient_activities[i].unit = 0   
    //         }
    //         if(!this.patientDataForDischarge.patient_activities[i].rate){
    //             this.patientDataForDischarge.patient_activities[i].rate = 0
    //         }
    //         this.patientDataForDischarge.patient_activities[i].amount = this.patientDataForDischarge.patient_activities[i].unit * this.patientDataForDischarge.patient_activities[i].rate
    //         this.totalActivitiesAmount = this.totalActivitiesAmount + this.patientDataForDischarge.patient_activities[i].amount
    //     }
    //     var diff =(new Date(this.newDischargeDate).getTime() - new Date(this.patientDataForDischarge.createdAt).getTime()) / 1000;
    //     diff /= (60 * 60);
    //     var hoursDifference : number = Math.abs(Math.round(diff))
    //     this.differenceInDays = Math.trunc(hoursDifference / 24)
    //     this.differenceInHours = Math.trunc(hoursDifference % 24)
    //     if(!this.bedCharges){
    //         this.bedCharges = 0
    //     }
    //     this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
    //     this.totalActivitiesAmount = this.totalActivitiesAmount
    //     this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges
    //     this.occupancyHoursAmount = (this.bedCharges/24)*this.differenceInHours
    //     this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.patientDataForDischarge.advanceReceived
    //     if(this.totalActivitiesOutstandingAmount < 0 ){
    //         this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2*this.totalActivitiesOutstandingAmount))
    //         this.totalActivitiesOutstandingAmount = 0
    //     }else{
    //         this.refundAmount = 0
    //     }
    // }
    DischargePatientpdfComponent.prototype.calculateCharges = function () {
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
        var diff = (new Date(this.newDischargeDate).getTime() - new Date(this.patientDataForDischarge.createdAt).getTime()) / 1000;
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
        if (!this.patientDataForDischarge.advanceReceived) {
            this.patientDataForDischarge.advanceReceived = 0;
        }
        this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.patientDataForDischarge.advanceReceived;
        if (this.totalActivitiesOutstandingAmount < 0) {
            this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2 * this.totalActivitiesOutstandingAmount));
            this.totalActivitiesOutstandingAmount = 0;
        }
        else {
            this.refundAmount = 0;
        }
    };
    DischargePatientpdfComponent.prototype.onDateSelect = function (evt) {
        if (new Date(this.patientDataForDischarge.createdAt) >= new Date(evt.toISOString())) {
            this.toastr.warning('Invalid discharge date', 'Warning');
        }
        else {
            var diff = (new Date(evt).getTime() - new Date(this.patientDataForDischarge.createdAt).getTime()) / 1000;
            diff /= (60 * 60);
            var hoursDifference = Math.abs(Math.round(diff));
            this.differenceInDays = Math.trunc(hoursDifference / 24);
            this.differenceInHours = Math.trunc(hoursDifference % 24);
            this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges) + this.occupancyHoursAmount);
            this.totalActivitiesAmount = this.totalActivitiesAmount;
            this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges;
            this.occupancyHoursAmount = (this.bedCharges / 24) * this.differenceInHours;
            this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.patientDataForDischarge.advanceReceived;
            if (this.totalActivitiesOutstandingAmount < 0) {
                this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2 * this.totalActivitiesOutstandingAmount));
                this.totalActivitiesOutstandingAmount = 0;
            }
            else {
                this.refundAmount = 0;
            }
        }
    };
    DischargePatientpdfComponent.prototype.getDetailOfClinic = function () {
        this.smartIpdData = JSON.parse(localStorage['smartIpdDetails']);
    };
    DischargePatientpdfComponent.prototype.onKey1 = function (instruction) {
        var _this = this;
        var object;
        object = {};
        object.id = this.patientDataForDischarge.id;
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
    DischargePatientpdfComponent.prototype.getDifferenceInDays = function () {
        if (this.discharegeTime == null) {
            return;
        }
        this.newDischargeDate = new Date(this.dischargeDate);
        this.newDischargeDate.setHours(this.discharegeTime.hour, this.discharegeTime.minute);
        // new Date(this.dischargeDate).setHours(this.discharegeTime.hour, this.discharegeTime.minute)
        var diff = (new Date(this.newDischargeDate).getTime() - new Date(this.patientDataForDischarge.createdAt).getTime()) / 1000;
        diff /= (60 * 60);
        var hoursDifference = Math.abs(Math.round(diff));
        this.differenceInDays = Math.trunc(hoursDifference / 24);
        this.differenceInHours = Math.trunc(hoursDifference % 24);
        // this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
        this.totalActivitiesAmount = this.totalActivitiesAmount;
        this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges;
        this.occupancyHoursAmount = (this.bedCharges / 24) * this.differenceInHours;
        this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.patientDataForDischarge.advanceReceived;
        if (this.totalActivitiesOutstandingAmount < 0) {
            this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2 * this.totalActivitiesOutstandingAmount));
            this.totalActivitiesOutstandingAmount = 0;
        }
        else {
            this.refundAmount = 0;
        }
        return this.differenceInDays;
    };
    DischargePatientpdfComponent.prototype.getDifferenceInHours = function () {
        if (this.discharegeTime == null) {
            return;
        }
        // this.dischargeDate.setHours(this.discharegeTime.hour, this.discharegeTime.minute)
        this.newDischargeDate = new Date(this.dischargeDate);
        this.newDischargeDate.setHours(this.discharegeTime.hour, this.discharegeTime.minute);
        // new Date(this.dischargeDate).setHours(this.discharegeTime.hour, this.discharegeTime.minute)
        var diff = (new Date(this.newDischargeDate).getTime() - new Date(this.patientDataForDischarge.createdAt).getTime()) / 1000;
        diff /= (60 * 60);
        var hoursDifference = Math.abs(Math.round(diff));
        this.differenceInDays = Math.trunc(hoursDifference / 24);
        this.differenceInHours = Math.trunc(hoursDifference % 24);
        // this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
        this.totalActivitiesAmount = this.totalActivitiesAmount;
        this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges;
        this.occupancyHoursAmount = (this.bedCharges / 24) * this.differenceInHours;
        this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.patientDataForDischarge.advanceReceived;
        if (this.totalActivitiesOutstandingAmount < 0) {
            this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2 * this.totalActivitiesOutstandingAmount));
            this.totalActivitiesOutstandingAmount = 0;
        }
        else {
            this.refundAmount = 0;
        }
        return this.differenceInHours;
    };
    //MEDICATION
    DischargePatientpdfComponent.prototype.mediClass = function (i) {
        if (this.medicationStatus[i].status == true) {
            return 'active';
        }
        else {
            return '';
        }
    };
    DischargePatientpdfComponent.prototype.medicaTab = function (i, data) {
        this.medicatab = i;
        if (this.totalMedications > 8 && this.medicationStatus[i].status == false) {
            this.toastr.warning("Maximum items can be 10", "Warning");
        }
        else {
            this.medicationStatus[i].status = !this.medicationStatus[i].status;
            if (this.medicationStatus[i].status == true) {
                this.totalMedications = this.totalMedications + 1;
                // var elmnt = document.getElementById("medicinelistid1");
                // console.log(elmnt);
                // elmnt.scrollIntoView();
                // this.scrollService.scrollTo('medicinelistid' + i);
                // var objDiv = document.getElementById("medicine-list-id"+i);
                // console.log(objDiv)
                // objDiv.scrollTop = objDiv.scrollHeight;
            }
            else {
                if (this.totalMedications > -1) {
                    if (i == 0) {
                        this.totalMedications = this.totalMedications - this.medicationTabArray.length;
                        this.medicationTabArray = [];
                        this.totalMedications = this.totalMedications - 1;
                        this.medication.tab = [];
                        this.addMoreTab('Tab');
                    }
                    else if (i == 1) {
                        this.totalMedications = this.totalMedications - this.medicationCapArray.length;
                        this.medicationCapArray = [];
                        this.totalMedications = this.totalMedications - 1;
                        this.medication.cap = [];
                        this.addMoreTab('Cap');
                    }
                    else if (i == 2) {
                        this.totalMedications = this.totalMedications - this.medicationSypArray.length;
                        this.medicationSypArray = [];
                        this.totalMedications = this.totalMedications - 1;
                        this.medication.syp = [];
                        this.addMoreTab('Syp');
                    }
                    else if (i == 3) {
                        this.totalMedications = this.totalMedications - this.medicationSuspArray.length;
                        this.medicationSuspArray = [];
                        this.totalMedications = this.totalMedications - 1;
                        this.medication.susp = [];
                        this.addMoreTab('Susp');
                    }
                    else if (i == 4) {
                        this.totalMedications = this.totalMedications - this.medicationEmulsnArray.length;
                        this.medicationEmulsnArray = [];
                        this.totalMedications = this.totalMedications - 1;
                        this.medication.emulsn = [];
                        this.addMoreTab('Emulsn');
                    }
                    else if (i == 5) {
                        this.totalMedications = this.totalMedications - this.medicationSolutionArray.length;
                        this.medicationSolutionArray = [];
                        this.totalMedications = this.totalMedications - 1;
                        this.medication.solution = [];
                        this.addMoreTab('Solution');
                    }
                    else if (i == 6) {
                        this.totalMedications = this.totalMedications - this.medicationInjArray.length;
                        this.medicationInjArray = [];
                        this.totalMedications = this.totalMedications - 1;
                        this.medication.injection = [];
                        this.addMoreTab('Inj');
                    }
                    else if (i == 7) {
                        this.totalMedications = this.totalMedications - this.medicationCreamArray.length;
                        this.medicationCreamArray = [];
                        this.totalMedications = this.totalMedications - 1;
                        this.medication.cream = [];
                        this.addMoreTab('Cream');
                    }
                    else if (i == 8) {
                        this.totalMedications = this.totalMedications - this.medicationGelArray.length;
                        this.medicationGelArray = [];
                        this.totalMedications = this.totalMedications - 1;
                        this.medication.gel = [];
                        this.addMoreTab('Gel');
                    }
                    else if (i == 9) {
                        this.totalMedications = this.totalMedications - this.medicationDropsArray.length;
                        this.medicationDropsArray = [];
                        this.totalMedications = this.totalMedications - 1;
                        this.medication.drops = [];
                        this.addMoreTab('Drops');
                    }
                    else if (i == 11) {
                        this.totalMedications = this.totalMedications - this.medicationPowderArray.length;
                        this.medicationPowderArray = [];
                        this.totalMedications = this.totalMedications - 1;
                        this.medication.powder = [];
                        this.addMoreTab('Powder');
                    }
                    else if (i == 10) {
                        this.totalMedications = this.totalMedications - this.medicationAerosolsArray.length;
                        this.medicationAerosolsArray = [];
                        this.totalMedications = this.totalMedications - 1;
                        this.medication.aerosols = [];
                        this.addMoreTab('Aerosols');
                    }
                    else if (i == 12) {
                        this.totalMedications = this.totalMedications - this.medicationMouthWashArray.length;
                        this.medicationMouthWashArray = [];
                        this.totalMedications = this.totalMedications - 1;
                        this.medication.mouthwash = [];
                        this.addMoreTab('MouthWash');
                    }
                    else if (i == 13) {
                        this.totalMedications = this.totalMedications - this.medicationLotionArray.length;
                        this.medicationLotionArray = [];
                        this.totalMedications = this.totalMedications - 1;
                        this.medication.lotion = [];
                        this.addMoreTab('Lotion');
                    }
                    else if (i == 14) {
                        this.totalMedications = this.totalMedications - this.medicationOintmentArray.length;
                        this.medicationOintmentArray = [];
                        this.totalMedications = this.totalMedications - 1;
                        this.medication.ointment = [];
                        this.addMoreTab('Ointment');
                    }
                    // for (var j = 0; j < this.doctorPresetArray.length; j++) {
                    //     if(this.doctorPresetArray[j].status == true){
                    //         var occurance : number = 0
                    //         for (var k = 0; k < this.doctorPresetArray[j].preset_array.length; k++) {
                    //             if(data==this.doctorPresetArray[j].preset_array[k].name){
                    //                 this.doctorPresetArray[j].preset_array[k].i_presetLength = this.doctorPresetArray[j].preset_array[k].i_presetLength - 1
                    //                 occurance ++
                    //             }
                    //         }
                    //         this.doctorPresetArray[j].i_presetLength = this.doctorPresetArray[j].i_presetLength - occurance
                    //         if(this.doctorPresetArray[j].i_presetLength == 0){
                    //             this.doctorPresetArray[j].status = false
                    //         }
                    //     }
                    // }
                }
            }
        }
        console.log(this.totalMedications);
    };
    DischargePatientpdfComponent.prototype.onTextChangeOfMedName = function (type, observation) {
        var _this = this;
        var object = {
            doctor_id: this.doctorData.itemId,
            type: type,
            observation: observation
        };
        this.userService.onTextChangeOfMedName(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                if (type == 'Tablet') {
                    _this.doctorMedicationTabletDB = [];
                    _this.doctorMedicationTabletDB = data.data;
                }
                else if (type == 'Capsule') {
                    _this.doctorMedicationCapsuleDB = [];
                    _this.doctorMedicationCapsuleDB = data.data;
                }
                else if (type == 'Syrup') {
                    _this.doctorMedicationSyrupDB = [];
                    _this.doctorMedicationSyrupDB = data.data;
                }
                else if (type == 'Suspension') {
                    _this.doctorMedicationSuspensionDB = [];
                    _this.doctorMedicationSuspensionDB = data.data;
                }
                else if (type == 'Emulsion') {
                    _this.doctorMedicationEmulsionDB = [];
                    _this.doctorMedicationEmulsionDB = data.data;
                }
                else if (type == 'Solution') {
                    _this.doctorMedicationSolutionDB = [];
                    _this.doctorMedicationSolutionDB = data.data;
                }
                else if (type == 'Injection') {
                    _this.doctorMedicationInjectionDB = [];
                    _this.doctorMedicationInjectionDB = data.data;
                }
                else if (type == 'Cream') {
                    _this.doctorMedicationCreamDB = [];
                    _this.doctorMedicationCreamDB = data.data;
                }
                else if (type == 'Oitment') {
                    _this.doctorMedicationOitmentDB = [];
                    _this.doctorMedicationOitmentDB = data.data;
                }
                else if (type == 'Gel') {
                    _this.doctorMedicationGelDB = [];
                    _this.doctorMedicationGelDB = data.data;
                }
                else if (type == 'Lotion') {
                    _this.doctorMedicationLotionDB = [];
                    _this.doctorMedicationLotionDB = data.data;
                }
                else if (type == 'Drops') {
                    _this.doctorMedicationDropsDB = [];
                    _this.doctorMedicationDropsDB = data.data;
                }
                else if (type == 'Aerosols') {
                    _this.doctorMedicationAerosolsDB = [];
                    _this.doctorMedicationAerosolsDB = data.data;
                }
                else if (type == 'Powder') {
                    _this.doctorMedicationPowderDB = [];
                    _this.doctorMedicationPowderDB = data.data;
                }
                else if (type == 'MouthWash') {
                    _this.doctorMedicationMouthwashDB = [];
                    _this.doctorMedicationMouthwashDB = data.data;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    DischargePatientpdfComponent.prototype.SaveMedicineNameInMedDB = function (type, item) {
        var object = {
            doctor_id: this.doctorData.itemId,
            type: type,
            observation: item
        };
        this.userService.SaveMedicineNameInMedDB(object).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    DischargePatientpdfComponent.prototype.getClassDosage = function (data) {
        if (this.tempDosage == data) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DischargePatientpdfComponent.prototype.selectDosage = function (data) {
        this.tempDosage = data;
    };
    DischargePatientpdfComponent.prototype.saveDosage = function () {
        if (this.tempDosage != null && this.tempDosage != '' && this.tempDosage != 'Dosage') {
            this.currentFrequency.dosage = this.tempDosage;
            $("#durationModal").modal("show");
        }
    };
    DischargePatientpdfComponent.prototype.getClassInjection = function (data) {
        if (this.tempInjection == data) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DischargePatientpdfComponent.prototype.injectionSelected = function (data) {
        this.tempInjection = data;
    };
    DischargePatientpdfComponent.prototype.saveInjection = function (data) {
        if (this.tempInjection != null && this.tempInjection != '' && this.tempInjection != 'Mode') {
            this.currentFrequency.mode = this.tempInjection;
            $("#durationModal").modal("show");
        }
    };
    DischargePatientpdfComponent.prototype.selectDuration = function (data) {
        this.tempDuration = data;
    };
    DischargePatientpdfComponent.prototype.getDurationClass = function (data) {
        if (this.tempDuration == data) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DischargePatientpdfComponent.prototype.saveDuration = function () {
        if (this.tempDuration != null && this.tempDuration != '' && this.tempDuration != 'Duration') {
            this.currentFrequency.duration = this.tempDuration;
        }
    };
    DischargePatientpdfComponent.prototype.getMedFrequencyClass = function (data) {
        if (data == 'Frequency') {
            return '';
        }
        else {
            return 'active';
        }
    };
    DischargePatientpdfComponent.prototype.getMedDurationClass = function (data) {
        if (data == 'Duration') {
            return '';
        }
        else {
            return 'active';
        }
    };
    DischargePatientpdfComponent.prototype.getMedDosageClass = function (data) {
        if (data == 'Dosage') {
            return '';
        }
        else {
            return 'active';
        }
    };
    DischargePatientpdfComponent.prototype.getMedModeClass = function (data) {
        if (data == 'Mode') {
            return '';
        }
        else {
            return 'active';
        }
    };
    DischargePatientpdfComponent.prototype.getMedQuantityClass = function (data) {
        if (data == 'Qty, (No)') {
            return '';
        }
        else {
            return 'active';
        }
    };
    DischargePatientpdfComponent.prototype.selectFrequency = function (data) {
        this.tempFrequency = data;
    };
    DischargePatientpdfComponent.prototype.getFrequencyClass = function (data) {
        if (data == this.tempFrequency) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DischargePatientpdfComponent.prototype.selectFrequencySpecial = function (data) {
        if (data == this.tempFrequencySpecial || data == this.currentFrequency.specialInstruction) {
            this.tempFrequencySpecial = null;
            this.currentFrequency.specialInstruction = null;
        }
        else {
            this.tempFrequencySpecial = data;
        }
    };
    DischargePatientpdfComponent.prototype.getFrequencyClassSpecial = function (data) {
        if (data == this.tempFrequencySpecial) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DischargePatientpdfComponent.prototype.saveFrequency = function () {
        if (this.tempFrequency != null && this.tempFrequency != '' && this.tempFrequency != 'Frequency') {
            this.currentFrequency.frequency = this.tempFrequency;
            if (this.currentFrequency.dosage) {
                $("#dosageModal").modal("show");
            }
            else if (this.currentFrequency.quantity) {
                $("#quantityModal").modal("show");
            }
            else if (this.currentFrequency.mode) {
                $("#injectionModal").modal("show");
            }
            else {
                $("#durationModal").modal("show");
            }
        }
        this.currentFrequency.specialInstruction = this.tempFrequencySpecial;
    };
    DischargePatientpdfComponent.prototype.addMoreTab = function (data) {
        if (this.totalMedications < 9) {
            if (data == 'Tab' && this.medicationTabArray.length < 10) {
                this.totalMedications = this.totalMedications + 1;
                this.medicationTabArray.push('1');
                this.medication.tab.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                });
            }
            else if (data == 'Cap' && this.medicationCapArray.length < 10) {
                this.totalMedications = this.totalMedications + 1;
                this.medicationCapArray.push('1');
                this.medication.cap.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                });
                console.log(this.medication.cap);
            }
            else if (data == 'Syp' && this.medicationSypArray.length < 10) {
                this.totalMedications = this.totalMedications + 1;
                this.medicationSypArray.push('1');
                this.medication.syp.push({
                    med_name: null,
                    frequency: 'Frequency',
                    dosage: 'Dosage',
                    duration: 'Duration',
                });
                console.log(this.medication.syp);
            }
            else if (data == 'Susp' && this.medicationSuspArray.length < 10) {
                this.totalMedications = this.totalMedications + 1;
                this.medicationSuspArray.push('1');
                this.medication.susp.push({
                    med_name: null,
                    frequency: 'Frequency',
                    dosage: 'Dosage',
                    duration: 'Duration',
                });
                console.log(this.medication.susp);
            }
            else if (data == 'Emulsn' && this.medicationEmulsnArray.length < 10) {
                this.totalMedications = this.totalMedications + 1;
                this.medicationEmulsnArray.push('1');
                this.medication.emulsn.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    dosage: 'Dosage',
                });
                console.log(this.medication.emulsn);
            }
            else if (data == 'Inj' && this.medicationInjArray.length < 10) {
                this.totalMedications = this.totalMedications + 1;
                this.medicationInjArray.push('1');
                this.medication.injection.push({
                    med_name: null,
                    frequency: 'Frequency',
                    mode: 'Mode',
                    duration: 'Duration',
                });
                console.log(this.medication.injection);
            }
            else if (data == 'Cream' && this.medicationCreamArray.length < 10) {
                this.totalMedications = this.totalMedications + 1;
                this.medicationCreamArray.push('1');
                this.medication.cream.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                });
                console.log(this.medication.cream);
            }
            else if (data == 'Gel' && this.medicationGelArray.length < 10) {
                this.totalMedications = this.totalMedications + 1;
                this.medicationGelArray.push('1');
                this.medication.gel.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                });
                console.log(this.medication.gel);
            }
            else if (data == 'Drops' && this.medicationDropsArray.length < 10) {
                this.totalMedications = this.totalMedications + 1;
                this.medicationDropsArray.push('1');
                this.medication.drops.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    quantity: 'Qty, (No)'
                });
                console.log(this.medication.drops);
            }
            else if (data == 'Lotion' && this.medicationLotionArray.length < 10) {
                this.totalMedications = this.totalMedications + 1;
                this.medicationLotionArray.push('1');
                this.medication.lotion.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                });
                console.log(this.medication.powder);
            }
            else if (data == 'Ointment' && this.medicationOintmentArray.length < 10) {
                this.totalMedications = this.totalMedications + 1;
                this.medicationOintmentArray.push('1');
                this.medication.ointment.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                });
                console.log(this.medication.powder);
            }
            else if (data == 'Powder' && this.medicationPowderArray.length < 10) {
                this.totalMedications = this.totalMedications + 1;
                this.medicationPowderArray.push('1');
                this.medication.powder.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                });
                console.log(this.medication.powder);
            }
            else if (data == 'Aerosols' && this.medicationAerosolsArray.length < 10) {
                this.totalMedications = this.totalMedications + 1;
                this.medicationAerosolsArray.push('1');
                this.medication.aerosols.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                });
                console.log(this.medication.aerosols);
            }
            else if (data == 'MouthWash' && this.medicationMouthWashArray.length < 10) {
                this.totalMedications = this.totalMedications + 1;
                this.medicationMouthWashArray.push('1');
                this.medication.mouthwash.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                });
                console.log(this.medication.mouthwash);
            }
            else if (data == 'Solution' && this.medicationSolutionArray.length < 10) {
                this.totalMedications = this.totalMedications + 1;
                this.medicationSolutionArray.push('1');
                this.medication.solution.push({
                    med_name: null,
                    frequency: 'Frequency',
                    dosage: 'Dosage',
                    duration: 'Duration',
                });
                console.log(this.medication.solution);
            }
        }
        else {
            this.toastr.warning("Maximum items can be 10", "Warning");
        }
        console.log(this.totalMedications);
    };
    DischargePatientpdfComponent.prototype.removeMoreTab = function (data, i) {
        this.totalMedications = this.totalMedications - 1;
        if (data == 'Tab') {
            // if (this.medication.tab[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.tab[i].i_presetValue);
            //     if (index == this.medication.tab[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.tab[i].i_presetLength = this.medication.tab[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationTabArray.splice(0, 1);
            this.medication.tab.splice(i, 1);
            if (this.medicationTabArray.length == 0) {
                this.medicationTabArray = [];
                this.medication.tab = [];
                this.medicationStatus[0].status = false;
                this.totalMedications = this.totalMedications - 1;
                this.addMoreTab(data);
            }
        }
        else if (data == 'Cap') {
            // if (this.medication.cap[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.cap[i].i_presetValue);
            //     if (index == this.medication.cap[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.cap[i].i_presetLength = this.medication.cap[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationCapArray.splice(0, 1);
            this.medication.cap.splice(i, 1);
            if (this.medicationCapArray.length == 0) {
                this.medicationCapArray = [];
                this.medication.cap = [];
                this.medicationStatus[1].status = false;
                this.totalMedications = this.totalMedications - 1;
                this.addMoreTab(data);
            }
        }
        else if (data == 'Syp') {
            // if (this.medication.syp[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.syp[i].i_presetValue);
            //     if (index == this.medication.syp[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.syp[i].i_presetLength = this.medication.syp[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationSypArray.splice(0, 1);
            this.medication.syp.splice(i, 1);
            if (this.medicationSypArray.length == 0) {
                this.medicationSypArray = [];
                this.medication.syp = [];
                this.medicationStatus[2].status = false;
                this.totalMedications = this.totalMedications - 1;
                this.addMoreTab(data);
            }
        }
        else if (data == 'Susp') {
            // if (this.medication.susp[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.susp[i].i_presetValue);
            //     if (index == this.medication.susp[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.susp[i].i_presetLength = this.medication.susp[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationSuspArray.splice(0, 1);
            this.medication.susp.splice(i, 1);
            if (this.medicationSuspArray.length == 0) {
                this.medicationSuspArray = [];
                this.medication.susp = [];
                this.medicationStatus[3].status = false;
                this.totalMedications = this.totalMedications - 1;
                this.addMoreTab(data);
            }
        }
        else if (data == 'Emulsn') {
            // if (this.medication.emulsn[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.emulsn[i].i_presetValue);
            //     if (index == this.medication.emulsn[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.emulsn[i].i_presetLength = this.medication.emulsn[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationEmulsnArray.splice(0, 1);
            this.medication.emulsn.splice(i, 1);
            if (this.medicationEmulsnArray.length == 0) {
                this.medicationEmulsnArray = [];
                this.medication.emulsn = [];
                this.medicationStatus[4].status = false;
                this.totalMedications = this.totalMedications - 1;
                this.addMoreTab(data);
            }
        }
        else if (data == 'Inj') {
            // if (this.medication.injection[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.injection[i].i_presetValue);
            //     if (index == this.medication.injection[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.injection[i].i_presetLength = this.medication.injection[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationInjArray.splice(0, 1);
            this.medication.injection.splice(i, 1);
            if (this.medicationInjArray.length == 0) {
                this.medicationInjArray = [];
                this.medication.injection = [];
                this.medicationStatus[6].status = false;
                this.totalMedications = this.totalMedications - 1;
                this.addMoreTab(data);
            }
        }
        else if (data == 'Cream') {
            // if (this.medication.cream[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.cream[i].i_presetValue);
            //     if (index == this.medication.cream[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.cream[i].i_presetLength = this.medication.cream[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationCreamArray.splice(0, 1);
            this.medication.cream.splice(i, 1);
            if (this.medicationCreamArray.length == 0) {
                this.medicationCreamArray = [];
                this.medication.cream = [];
                this.medicationStatus[7].status = false;
                this.totalMedications = this.totalMedications - 1;
                this.addMoreTab(data);
            }
        }
        else if (data == 'Gel') {
            // if (this.medication.gel[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.gel[i].i_presetValue);
            //     if (index == this.medication.gel[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.gel[i].i_presetLength = this.medication.gel[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationGelArray.splice(0, 1);
            this.medication.gel.splice(i, 1);
            if (this.medicationGelArray.length == 0) {
                this.medicationGelArray = [];
                this.medication.gel = [];
                this.medicationStatus[8].status = false;
                this.totalMedications = this.totalMedications - 1;
                this.addMoreTab(data);
            }
        }
        else if (data == 'Drops') {
            // if (this.medication.drops[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.drops[i].i_presetValue);
            //     if (index == this.medication.drops[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.drops[i].i_presetLength = this.medication.drops[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationDropsArray.splice(0, 1);
            this.medication.drops.splice(i, 1);
            if (this.medicationDropsArray.length == 0) {
                this.medicationDropsArray = [];
                this.medication.drops = [];
                this.medicationStatus[9].status = false;
                this.totalMedications = this.totalMedications - 1;
                this.addMoreTab(data);
            }
        }
        else if (data == 'Powder') {
            // if (this.medication.powder[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.powder[i].i_presetValue);
            //     if (index == this.medication.powder[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.powder[i].i_presetLength = this.medication.powder[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationPowderArray.splice(0, 1);
            this.medication.powder.splice(i, 1);
            if (this.medicationPowderArray.length == 0) {
                this.medicationPowderArray = [];
                this.medication.powder = [];
                this.medicationStatus[11].status = false;
                this.totalMedications = this.totalMedications - 1;
                this.addMoreTab(data);
            }
        }
        else if (data == 'Aerosols') {
            // if (this.medication.aerosols[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.aerosols[i].i_presetValue);
            //     if (index == this.medication.aerosols[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.aerosols[i].i_presetLength = this.medication.aerosols[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationAerosolsArray.splice(0, 1);
            this.medication.aerosols.splice(i, 1);
            if (this.medicationAerosolsArray.length == 0) {
                this.medicationAerosolsArray = [];
                this.medication.aerosols = [];
                this.medicationStatus[10].status = false;
                this.totalMedications = this.totalMedications - 1;
                this.addMoreTab(data);
            }
        }
        else if (data == 'MouthWash') {
            // if (this.medication.mouthwash[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.mouthwash[i].i_presetValue);
            //     if (index == this.medication.mouthwash[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.mouthwash[i].i_presetLength = this.medication.mouthwash[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationMouthWashArray.splice(0, 1);
            this.medication.mouthwash.splice(i, 1);
            if (this.medicationMouthWashArray.length == 0) {
                this.medicationMouthWashArray = [];
                this.medication.mouthwash = [];
                this.medicationStatus[12].status = false;
                this.totalMedications = this.totalMedications - 1;
                this.addMoreTab(data);
            }
        }
        else if (data == 'Solution') {
            // if (this.medication.solution[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.solution[i].i_presetValue);
            //     if (index == this.medication.solution[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.solution[i].i_presetLength = this.medication.solution[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationSolutionArray.splice(0, 1);
            this.medication.solution.splice(i, 1);
            if (this.medicationSolutionArray.length == 0) {
                this.medicationSolutionArray = [];
                this.medication.solution = [];
                this.medicationStatus[5].status = false;
                this.totalMedications = this.totalMedications - 1;
                this.addMoreTab(data);
            }
        }
        else if (data == 'Lotion') {
            // if (this.medication.lotion[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.lotion[i].i_presetValue);
            //     if (index == this.medication.lotion[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.lotion[i].i_presetLength = this.medication.lotion[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationLotionArray.splice(0, 1);
            this.medication.lotion.splice(i, 1);
            if (this.medicationLotionArray.length == 0) {
                this.medicationLotionArray = [];
                this.medication.lotion = [];
                this.medicationStatus[13].status = false;
                this.totalMedications = this.totalMedications - 1;
                this.addMoreTab(data);
            }
        }
        else if (data == 'Ointment') {
            // if (this.medication.ointment[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.ointment[i].i_presetValue);
            //     if (index == this.medication.ointment[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.ointment[i].i_presetLength = this.medication.ointment[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationOintmentArray.splice(0, 1);
            this.medication.ointment.splice(i, 1);
            if (this.medicationOintmentArray.length == 0) {
                this.medicationOintmentArray = [];
                this.medication.ointment = [];
                this.medicationStatus[14].status = false;
                this.totalMedications = this.totalMedications - 1;
                this.addMoreTab(data);
            }
        }
        console.log(this.totalMedications);
    };
    DischargePatientpdfComponent.prototype.openFrequencyModalFromMed = function (type, data) {
        // this.currentFrequency = data
        // this.tempFrequency = null
        // this.tempFrequencySpecial = null
        // this.tempDuration = null
        // this.tempDosage = null
        // this.tempInjection = null
        if (data.mode) {
            $("#combinedModal").modal("show");
        }
        else if (data.dosage) {
            $("#combinedModal4").modal("show");
        }
        else if (data.quantity) {
            $("#combinedModal3").modal("show");
        }
        else {
            $("#combinedModal2").modal("show");
        }
        this.openFrequencyModal(data);
        var allMedInfo = [];
        data.med_info = [];
        for (var i = 0; i < this.medInfoDB.length; i++) {
            allMedInfo.push(this.medInfoDB[i].med_info1);
            if (this.medInfoDB[i].med_info2) {
                allMedInfo.push(this.medInfoDB[i].med_info2);
            }
            if (this.medInfoDB[i].type == type && this.medInfoDB[i].med_name == data.med_name[0].value) {
                data.med_info.push({ display: this.medInfoDB[i].med_info1, value: this.medInfoDB[i].med_info1 });
                if (this.medInfoDB[i].med_info2) {
                    data.med_info.push({ display: this.medInfoDB[i].med_info2, value: this.medInfoDB[i].med_info2 });
                }
                if (type == 'TabletInfo') {
                    this.doctorMedicationTabletInfoDB = [];
                    this.doctorMedicationTabletInfoDB.push(this.medInfoDB[i].med_info1);
                    if (this.medInfoDB[i].med_info2) {
                        this.doctorMedicationTabletInfoDB.push(this.medInfoDB[i].med_info2);
                    }
                }
                else if (type == 'CapsuleInfo') {
                    this.doctorMedicationCapsuleInfoDB = [];
                    this.doctorMedicationCapsuleInfoDB.push(this.medInfoDB[i].med_info1);
                    if (this.medInfoDB[i].med_info2) {
                        this.doctorMedicationCapsuleInfoDB.push(this.medInfoDB[i].med_info2);
                    }
                }
                else if (type == 'SyrupInfo') {
                    this.doctorMedicationSyrupInfoDB = [];
                    this.doctorMedicationSyrupInfoDB.push(this.medInfoDB[i].med_info1);
                    if (this.medInfoDB[i].med_info2) {
                        this.doctorMedicationSyrupInfoDB.push(this.medInfoDB[i].med_info2);
                    }
                }
                else if (type == 'SuspensionInfo') {
                    this.doctorMedicationSuspensionInfoDB = [];
                    this.doctorMedicationSuspensionInfoDB.push(this.medInfoDB[i].med_info1);
                    if (this.medInfoDB[i].med_info2) {
                        this.doctorMedicationSuspensionInfoDB.push(this.medInfoDB[i].med_info2);
                    }
                }
                else if (type == 'EmulsionInfo') {
                    this.doctorMedicationEmulsionInfoDB = [];
                    this.doctorMedicationEmulsionInfoDB.push(this.medInfoDB[i].med_info1);
                    if (this.medInfoDB[i].med_info2) {
                        this.doctorMedicationEmulsionInfoDB.push(this.medInfoDB[i].med_info2);
                    }
                }
                else if (type == 'SolutionInfo') {
                    this.doctorMedicationSolutionInfoDB = [];
                    this.doctorMedicationSolutionInfoDB.push(this.medInfoDB[i].med_info1);
                    if (this.medInfoDB[i].med_info2) {
                        this.doctorMedicationSolutionInfoDB.push(this.medInfoDB[i].med_info2);
                    }
                }
                else if (type == 'InjectionInfo') {
                    this.doctorMedicationInjectionInfoDB = [];
                    this.doctorMedicationInjectionInfoDB.push(this.medInfoDB[i].med_info1);
                    if (this.medInfoDB[i].med_info2) {
                        this.doctorMedicationInjectionInfoDB.push(this.medInfoDB[i].med_info2);
                    }
                }
                else if (type == 'CreamInfo') {
                    this.doctorMedicationCreamInfoDB = [];
                    this.doctorMedicationCreamInfoDB.push(this.medInfoDB[i].med_info1);
                    if (this.medInfoDB[i].med_info2) {
                        this.doctorMedicationCreamInfoDB.push(this.medInfoDB[i].med_info2);
                    }
                }
                else if (type == 'OitmentInfo') {
                    this.doctorMedicationOitmentInfoDB = [];
                    this.doctorMedicationOitmentInfoDB.push(this.medInfoDB[i].med_info1);
                    if (this.medInfoDB[i].med_info2) {
                        this.doctorMedicationOitmentInfoDB.push(this.medInfoDB[i].med_info2);
                    }
                }
                else if (type == 'GelInfo') {
                    this.doctorMedicationGelInfoDB = [];
                    this.doctorMedicationGelInfoDB.push(this.medInfoDB[i].med_info1);
                    if (this.medInfoDB[i].med_info2) {
                        this.doctorMedicationGelInfoDB.push(this.medInfoDB[i].med_info2);
                    }
                }
                else if (type == 'LotionInfo') {
                    this.doctorMedicationLotionInfoDB = [];
                    this.doctorMedicationLotionInfoDB.push(this.medInfoDB[i].med_info1);
                    if (this.medInfoDB[i].med_info2) {
                        this.doctorMedicationLotionInfoDB.push(this.medInfoDB[i].med_info2);
                    }
                }
                else if (type == 'DropsInfo') {
                    this.doctorMedicationDropsInfoDB = [];
                    this.doctorMedicationDropsInfoDB.push(this.medInfoDB[i].med_info1);
                    if (this.medInfoDB[i].med_info2) {
                        this.doctorMedicationDropsInfoDB.push(this.medInfoDB[i].med_info2);
                    }
                }
                else if (type == 'AerosolsInfo') {
                    this.doctorMedicationAerosolsInfoDB = [];
                    this.doctorMedicationAerosolsInfoDB.push(this.medInfoDB[i].med_info1);
                    if (this.medInfoDB[i].med_info2) {
                        this.doctorMedicationAerosolsInfoDB.push(this.medInfoDB[i].med_info2);
                    }
                }
                else if (type == 'PowderInfo') {
                    this.doctorMedicationPowderInfoDB = [];
                    this.doctorMedicationPowderInfoDB.push(this.medInfoDB[i].med_info1);
                    if (this.medInfoDB[i].med_info2) {
                        this.doctorMedicationPowderInfoDB.push(this.medInfoDB[i].med_info2);
                    }
                }
                else if (type == 'MouthWashInfo') {
                    this.doctorMedicationMouthwashInfoDB = [];
                    this.doctorMedicationMouthwashInfoDB.push(this.medInfoDB[i].med_info1);
                    if (this.medInfoDB[i].med_info2) {
                        this.doctorMedicationMouthwashInfoDB.push(this.medInfoDB[i].med_info2);
                    }
                }
            }
        }
        if (type == 'TabletInfo' && data.med_info.length == 0) {
            this.doctorMedicationTabletInfoDB = allMedInfo;
        }
        else if (type == 'CapsuleInfo' && data.med_info.length == 0) {
            this.doctorMedicationCapsuleInfoDB = allMedInfo;
        }
        else if (type == 'SyrupInfo' && data.med_info.length == 0) {
            this.doctorMedicationSyrupInfoDB = allMedInfo;
        }
        else if (type == 'SuspensionInfo' && data.med_info.length == 0) {
            this.doctorMedicationSuspensionInfoDB = allMedInfo;
        }
        else if (type == 'EmulsionInfo' && data.med_info.length == 0) {
            this.doctorMedicationEmulsionInfoDB = allMedInfo;
        }
        else if (type == 'SolutionInfo' && data.med_info.length == 0) {
            this.doctorMedicationSolutionInfoDB = allMedInfo;
        }
        else if (type == 'InjectionInfo' && data.med_info.length == 0) {
            this.doctorMedicationInjectionInfoDB = allMedInfo;
        }
        else if (type == 'CreamInfo' && data.med_info.length == 0) {
            this.doctorMedicationCreamInfoDB = allMedInfo;
        }
        else if (type == 'OitmentInfo' && data.med_info.length == 0) {
            this.doctorMedicationOitmentInfoDB = allMedInfo;
        }
        else if (type == 'GelInfo' && data.med_info.length == 0) {
            this.doctorMedicationGelInfoDB = allMedInfo;
        }
        else if (type == 'LotionInfo' && data.med_info.length == 0) {
            this.doctorMedicationLotionInfoDB = allMedInfo;
        }
        else if (type == 'DropsInfo' && data.med_info.length == 0) {
            this.doctorMedicationDropsInfoDB = allMedInfo;
        }
        else if (type == 'AerosolsInfo' && data.med_info.length == 0) {
            this.doctorMedicationAerosolsInfoDB = allMedInfo;
        }
        else if (type == 'PowderInfo' && data.med_info.length == 0) {
            this.doctorMedicationPowderInfoDB = allMedInfo;
        }
        else if (type == 'MouthWashInfo' && data.med_info.length == 0) {
            this.doctorMedicationMouthwashInfoDB = allMedInfo;
        }
    };
    DischargePatientpdfComponent.prototype.openFrequencyModal = function (data) {
        this.currentFrequency = data;
        if (this.currentFrequency.frequency == 'Frequency') {
            this.tempFrequency = null;
        }
        else {
            this.tempFrequency = this.currentFrequency.frequency;
        }
        if (this.currentFrequency.duration == 'Duration') {
            this.tempDuration = null;
        }
        else {
            this.tempDuration = this.currentFrequency.duration;
        }
        if (this.currentFrequency.duration == 'Duration') {
            this.tempDuration = null;
        }
        else {
            this.tempDuration = this.currentFrequency.duration;
        }
        if (this.currentFrequency.specialInstruction == null) {
            this.tempFrequencySpecial = null;
        }
        else {
            this.tempFrequencySpecial = this.currentFrequency.specialInstruction;
        }
        if (this.currentFrequency.mode == 'Mode') {
            this.tempInjection = null;
        }
        else {
            this.tempInjection = this.currentFrequency.mode;
        }
        if (this.currentFrequency.dosage == 'Dosage') {
            this.tempDosage = null;
        }
        else {
            this.tempDosage = this.currentFrequency.dosage;
        }
        if (this.currentFrequency.quantity == 'Qty, (No)') {
            this.tempQuantity = null;
        }
        else {
            this.tempQuantity = this.currentFrequency.quantity;
        }
    };
    DischargePatientpdfComponent.prototype.saveFreqDuration = function () {
        if (this.tempFrequency != null && this.tempFrequency != '' && this.tempFrequency != 'Frequency') {
            this.currentFrequency.frequency = this.tempFrequency;
        }
        this.currentFrequency.specialInstruction = this.tempFrequencySpecial;
        if (this.tempDuration != null && this.tempDuration != '' && this.tempDuration != 'Duration') {
            this.currentFrequency.duration = this.tempDuration;
        }
    };
    DischargePatientpdfComponent.prototype.saveFreqDurInjection = function () {
        if (this.tempFrequency != null && this.tempFrequency != '' && this.tempFrequency != 'Frequency') {
            this.currentFrequency.frequency = this.tempFrequency;
        }
        this.currentFrequency.specialInstruction = this.tempFrequencySpecial;
        if (this.tempDuration != null && this.tempDuration != '' && this.tempDuration != 'Duration') {
            this.currentFrequency.duration = this.tempDuration;
        }
        if (this.tempInjection != null && this.tempInjection != '' && this.tempInjection != 'Mode') {
            this.currentFrequency.mode = this.tempInjection;
        }
    };
    DischargePatientpdfComponent.prototype.saveFreqDurDosage = function () {
        if (this.tempFrequency != null && this.tempFrequency != '' && this.tempFrequency != 'Frequency') {
            this.currentFrequency.frequency = this.tempFrequency;
        }
        this.currentFrequency.specialInstruction = this.tempFrequencySpecial;
        if (this.tempDuration != null && this.tempDuration != '' && this.tempDuration != 'Duration') {
            this.currentFrequency.duration = this.tempDuration;
        }
        if (this.tempDosage != null && this.tempDosage != '' && this.tempDosage != 'Dosage') {
            this.currentFrequency.dosage = this.tempDosage;
        }
    };
    DischargePatientpdfComponent.prototype.saveFreqDurDrops = function () {
        if (this.tempFrequency != null && this.tempFrequency != '' && this.tempFrequency != 'Frequency') {
            this.currentFrequency.frequency = this.tempFrequency;
        }
        this.currentFrequency.specialInstruction = this.tempFrequencySpecial;
        if (this.tempDuration != null && this.tempDuration != '' && this.tempDuration != 'Duration') {
            this.currentFrequency.duration = this.tempDuration;
        }
        if (this.tempQuantity != null && this.tempQuantity != '' && this.tempQuantity != 'Qty, (No)') {
            this.currentFrequency.quantity = this.tempQuantity;
        }
    };
    //MEDICATION
    DischargePatientpdfComponent.prototype.ngOnDestroy = function () {
        localStorage.removeItem('patientDataForDischarge');
        this.socket.emit('room leave', {
            room_id: this.doctorData.smart_ipd_id.toString()
        });
    };
    DischargePatientpdfComponent.prototype.getClassTab = function (data) {
        if (data == this.currentTab) {
            return 'active';
        }
        else {
            return '';
        }
    };
    DischargePatientpdfComponent.prototype.changeCurrentTab = function (data) {
        console.log(data);
        this.currentTab = data;
    };
    DischargePatientpdfComponent.prototype.dischargePatientApprovalByDr = function () {
        var _this = this;
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
            this.toastr.warning('Billing amount can not be negative', 'Warning');
        }
        else {
            //medication
            this.tempMedicationArray = [];
            if (this.totalMedications >= 0) {
                var boolean = false;
                if (this.medicationStatus[0].status == true) {
                    for (var i = 0; i < this.medication.tab.length; i++) {
                        if (!this.medication.tab[i].med_name || this.medication.tab[i].med_name.length < 1 ||
                            this.medication.tab[i].frequency == 'Frequency' || this.medication.tab[i].duration == 'Duration') {
                            this.toastr.warning("Invalid values of Tablet", "Warning");
                            boolean = true;
                            return;
                        }
                        else {
                            this.medication.tab[i].name = "Tablet";
                            this.medication.tab[i].short_name = "Tab";
                            this.tempMedicationArray.push(Object.assign({}, this.medication.tab[i]));
                            this.saveMedicationSuggestion(this.medication.tab[i].name, this.medication.tab[i].med_name[0].value);
                        }
                    }
                }
                if (this.medicationStatus[1].status == true) {
                    for (var i = 0; i < this.medication.cap.length; i++) {
                        if (!this.medication.cap[i].med_name || this.medication.cap[i].med_name.length < 1 ||
                            this.medication.cap[i].frequency == 'Frequency' || this.medication.cap[i].duration == 'Duration') {
                            this.toastr.warning("Invalid values of Capsule", "Warning");
                            boolean = true;
                            return;
                        }
                        else {
                            this.medication.cap[i].name = "Capsule";
                            this.medication.cap[i].short_name = "Cap";
                            this.tempMedicationArray.push(Object.assign({}, this.medication.cap[i]));
                            this.saveMedicationSuggestion(this.medication.cap[i].name, this.medication.cap[i].med_name[0].value);
                        }
                    }
                }
                if (this.medicationStatus[2].status == true) {
                    for (var i = 0; i < this.medication.syp.length; i++) {
                        if (!this.medication.syp[i].med_name || this.medication.syp[i].med_name.length < 1 ||
                            this.medication.syp[i].frequency == 'Frequency' || this.medication.syp[i].duration == 'Duration' ||
                            this.medication.syp[i].dosage == 'Dosage') {
                            this.toastr.warning("Invalid values of Syrup", "Warning");
                            boolean = true;
                            return;
                        }
                        else {
                            this.medication.syp[i].name = "Syrup";
                            this.medication.syp[i].short_name = "Syr";
                            this.tempMedicationArray.push(Object.assign({}, this.medication.syp[i]));
                            this.saveMedicationSuggestion(this.medication.syp[i].name, this.medication.syp[i].med_name[0].value);
                        }
                    }
                }
                if (this.medicationStatus[3].status == true) {
                    for (var i = 0; i < this.medication.susp.length; i++) {
                        if (!this.medication.susp[i].med_name || this.medication.susp[i].med_name.length < 1 ||
                            this.medication.susp[i].frequency == 'Frequency' || this.medication.susp[i].duration == 'Duration' ||
                            this.medication.susp[i].dosage == 'Dosage') {
                            this.toastr.warning("Invalid values of Suspension", "Warning");
                            boolean = true;
                            return;
                        }
                        else {
                            this.medication.susp[i].name = "Suspension";
                            this.medication.susp[i].short_name = "Sus";
                            this.tempMedicationArray.push(Object.assign({}, this.medication.susp[i]));
                            this.saveMedicationSuggestion(this.medication.susp[i].name, this.medication.susp[i].med_name[0].value);
                        }
                    }
                }
                if (this.medicationStatus[4].status == true) {
                    for (var i = 0; i < this.medication.emulsn.length; i++) {
                        if (!this.medication.emulsn[i].med_name || this.medication.emulsn[i].med_name.length < 1 ||
                            this.medication.emulsn[i].frequency == 'Frequency' || this.medication.emulsn[i].duration == 'Duration' ||
                            this.medication.emulsn[i].dosage == 'Dosage') {
                            this.toastr.warning("Invalid values of Emulsion", "Warning");
                            boolean = true;
                            return;
                        }
                        else {
                            this.medication.emulsn[i].name = "Emulsion";
                            this.medication.emulsn[i].short_name = "Emu";
                            this.tempMedicationArray.push(Object.assign({}, this.medication.emulsn[i]));
                            this.saveMedicationSuggestion(this.medication.emulsn[i].name, this.medication.emulsn[i].med_name[0].value);
                        }
                    }
                }
                if (this.medicationStatus[5].status == true) {
                    for (var i = 0; i < this.medication.solution.length; i++) {
                        if (!this.medication.solution[i].med_name || this.medication.solution[i].med_name.length < 1 ||
                            this.medication.solution[i].frequency == 'Frequency' || this.medication.solution[i].duration == 'Duration' ||
                            this.medication.solution[i].dosage == 'Dosage') {
                            this.toastr.warning("Invalid values of Solution", "Warning");
                            boolean = true;
                            return;
                        }
                        else {
                            this.medication.solution[i].name = "Solution";
                            this.medication.solution[i].short_name = "Sol";
                            this.tempMedicationArray.push(Object.assign({}, this.medication.solution[i]));
                            this.saveMedicationSuggestion(this.medication.solution[i].name, this.medication.solution[i].med_name[0].value);
                        }
                    }
                }
                if (this.medicationStatus[6].status == true) {
                    for (var i = 0; i < this.medication.injection.length; i++) {
                        if (!this.medication.injection[i].med_name || this.medication.injection[i].med_name.length < 1 ||
                            this.medication.injection[i].frequency == 'Frequency' || this.medication.injection[i].duration == 'Duration' ||
                            this.medication.injection[i].mode == 'Mode') {
                            this.toastr.warning("Invalid values of Injection", "Warning");
                            boolean = true;
                            return;
                        }
                        else {
                            this.medication.injection[i].name = "Injection";
                            this.medication.injection[i].short_name = "Inj";
                            this.tempMedicationArray.push(Object.assign({}, this.medication.injection[i]));
                            this.saveMedicationSuggestion(this.medication.injection[i].name, this.medication.injection[i].med_name[0].value);
                        }
                    }
                }
                if (this.medicationStatus[12].status == true) {
                    for (var i = 0; i < this.medication.mouthwash.length; i++) {
                        if (!this.medication.mouthwash[i].med_name || this.medication.mouthwash[i].med_name.length < 1 ||
                            this.medication.mouthwash[i].frequency == 'Frequency' || this.medication.mouthwash[i].duration == 'Duration') {
                            this.toastr.warning("Invalid values of MouthWash", "Warning");
                            boolean = true;
                            return;
                        }
                        else {
                            this.medication.mouthwash[i].name = "MouthWash";
                            this.medication.mouthwash[i].short_name = "Mou";
                            this.tempMedicationArray.push(Object.assign({}, this.medication.mouthwash[i]));
                            this.saveMedicationSuggestion(this.medication.mouthwash[i].name, this.medication.mouthwash[i].med_name[0].value);
                        }
                    }
                }
                if (this.medicationStatus[11].status == true) {
                    for (var i = 0; i < this.medication.powder.length; i++) {
                        if (!this.medication.powder[i].med_name || this.medication.powder[i].med_name.length < 1 ||
                            this.medication.powder[i].frequency == 'Frequency' || this.medication.powder[i].duration == 'Duration') {
                            this.toastr.warning("Invalid values of Powder", "Warning");
                            boolean = true;
                            return;
                        }
                        else {
                            this.medication.powder[i].name = "Powder";
                            this.medication.powder[i].short_name = "Pow";
                            this.tempMedicationArray.push(Object.assign({}, this.medication.powder[i]));
                            this.saveMedicationSuggestion(this.medication.powder[i].name, this.medication.powder[i].med_name[0].value);
                        }
                    }
                }
                if (this.medicationStatus[7].status == true) {
                    for (var i = 0; i < this.medication.cream.length; i++) {
                        if (!this.medication.cream[i].med_name || this.medication.cream[i].med_name.length < 1 ||
                            this.medication.cream[i].frequency == 'Frequency' || this.medication.cream[i].duration == 'Duration') {
                            this.toastr.warning("Invalid values of Cream", "Warning");
                            boolean = true;
                            return;
                        }
                        else {
                            this.medication.cream[i].name = "Cream";
                            this.medication.cream[i].short_name = "Cre";
                            this.tempMedicationArray.push(Object.assign({}, this.medication.cream[i]));
                            this.saveMedicationSuggestion(this.medication.cream[i].name, this.medication.cream[i].med_name[0].value);
                        }
                    }
                }
                if (this.medicationStatus[8].status == true) {
                    for (var i = 0; i < this.medication.gel.length; i++) {
                        if (!this.medication.gel[i].med_name || this.medication.gel[i].med_name.length < 1 ||
                            this.medication.gel[i].frequency == 'Frequency' || this.medication.gel[i].duration == 'Duration') {
                            this.toastr.warning("Invalid values of Gel", "Warning");
                            boolean = true;
                            return;
                        }
                        else {
                            this.medication.gel[i].name = "Gel";
                            this.medication.gel[i].short_name = "Gel";
                            this.tempMedicationArray.push(Object.assign({}, this.medication.gel[i]));
                            this.saveMedicationSuggestion(this.medication.gel[i].name, this.medication.gel[i].med_name[0].value);
                        }
                    }
                }
                if (this.medicationStatus[9].status == true) {
                    for (var i = 0; i < this.medication.drops.length; i++) {
                        if (!this.medication.drops[i].med_name || this.medication.drops[i].med_name.length < 1 ||
                            this.medication.drops[i].frequency == 'Frequency' || this.medication.drops[i].duration == 'Duration' ||
                            this.medication.drops[i].quantity == 'Qty, (No)') {
                            this.toastr.warning("Invalid values of Drops", "Warning");
                            boolean = true;
                            return;
                        }
                        else {
                            this.medication.drops[i].name = "Drops";
                            this.medication.drops[i].short_name = "Dro";
                            this.tempMedicationArray.push(Object.assign({}, this.medication.drops[i]));
                            this.saveMedicationSuggestion(this.medication.drops[i].name, this.medication.drops[i].med_name[0].value);
                        }
                    }
                }
                if (this.medicationStatus[10].status == true) {
                    for (var i = 0; i < this.medication.aerosols.length; i++) {
                        if (!this.medication.aerosols[i].med_name || this.medication.aerosols[i].med_name.length < 1 ||
                            this.medication.aerosols[i].frequency == 'Frequency' || this.medication.aerosols[i].duration == 'Duration') {
                            this.toastr.warning("Invalid values of Aerosols", "Warning");
                            boolean = true;
                            return;
                        }
                        else {
                            this.medication.aerosols[i].name = "Aerosols";
                            this.medication.aerosols[i].short_name = "Aer";
                            this.tempMedicationArray.push(Object.assign({}, this.medication.aerosols[i]));
                            this.saveMedicationSuggestion(this.medication.aerosols[i].name, this.medication.aerosols[i].med_name[0].value);
                        }
                    }
                }
                if (this.medicationStatus[13].status == true) {
                    for (var i = 0; i < this.medication.lotion.length; i++) {
                        if (!this.medication.lotion[i].med_name || this.medication.lotion[i].med_name.length < 1 ||
                            this.medication.lotion[i].frequency == 'Frequency' || this.medication.lotion[i].duration == 'Duration') {
                            this.toastr.warning("Invalid values of Lotion", "Warning");
                            boolean = true;
                            return;
                        }
                        else {
                            this.medication.lotion[i].name = "Lotion";
                            this.medication.lotion[i].short_name = "Lot";
                            this.tempMedicationArray.push(Object.assign({}, this.medication.lotion[i]));
                            this.saveMedicationSuggestion(this.medication.lotion[i].name, this.medication.lotion[i].med_name[0].value);
                        }
                    }
                }
                if (this.medicationStatus[14].status == true) {
                    for (var i = 0; i < this.medication.ointment.length; i++) {
                        if (!this.medication.ointment[i].med_name || this.medication.ointment[i].med_name.length < 1 ||
                            this.medication.ointment[i].frequency == 'Frequency' || this.medication.ointment[i].duration == 'Duration') {
                            this.toastr.warning("Invalid values of Ointment", "Warning");
                            boolean = true;
                            return;
                        }
                        else {
                            this.medication.ointment[i].name = "Ointment";
                            this.medication.ointment[i].short_name = "Oin";
                            this.tempMedicationArray.push(Object.assign({}, this.medication.ointment[i]));
                            this.saveMedicationSuggestion('Oitment', this.medication.ointment[i].med_name[0].value);
                        }
                    }
                }
            }
            var ob = {
                id: this.patientDataForDischarge.id,
                doctor_note: this.doctorNote,
                duration_days: this.differenceInDays,
                duration_hours: this.differenceInHours,
                discharge_date: this.newDischargeDate,
                patient_activities: this.patientActivities,
                total_bill: this.totalActivitiesAmount + this.occupancyCharges,
                medication: this.tempMedicationArray,
                woundCare: this.woundCare,
                diet: this.diet,
                lifestyle: this.lifestyle,
                others: this.others,
                occupancy_charges: this.occupancyCharges
            };
            console.log(ob);
            this.userService.DischargePatientApprovalByDr(ob).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    _this.toastr.success(data.message, "Success");
                    _this.socket.emit('registrationBooked', {
                        room_id: _this.doctorData.smart_ipd_id.toString()
                    });
                    _this.router.navigate(['header-two-layout/discharge-patient']);
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    DischargePatientpdfComponent.prototype.saveMedicationSuggestion = function (type, item) {
        var _this = this;
        this.SaveMedicineNameInMedDB(type, item);
        var object = {
            doctor_id: this.doctorData.itemId,
            type: type,
            observation: item
        };
        this.userService.SaveMedicationSuggestion(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.GetMedicationSuggestions(type);
            }
            else {
            }
        }, function (err) {
            console.log(err);
        });
    };
    DischargePatientpdfComponent.prototype.GetMedicationSuggestions = function (type) {
        var _this = this;
        var object = {
            doctor_id: this.doctorData.itemId,
            type: type
        };
        this.userService.GetMedicationSuggestions(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                if (type == 'Tablet') {
                    _this.doctorMedicationTabletDB = [];
                    _this.doctorMedicationTabletDB = data.data;
                }
                else if (type == 'Capsule') {
                    _this.doctorMedicationCapsuleDB = [];
                    _this.doctorMedicationCapsuleDB = data.data;
                }
                else if (type == 'Syrup') {
                    _this.doctorMedicationSyrupDB = [];
                    _this.doctorMedicationSyrupDB = data.data;
                }
                else if (type == 'Suspension') {
                    _this.doctorMedicationSuspensionDB = [];
                    _this.doctorMedicationSuspensionDB = data.data;
                }
                else if (type == 'Emulsion') {
                    _this.doctorMedicationEmulsionDB = [];
                    _this.doctorMedicationEmulsionDB = data.data;
                }
                else if (type == 'Solution') {
                    _this.doctorMedicationSolutionDB = [];
                    _this.doctorMedicationSolutionDB = data.data;
                }
                else if (type == 'Injection') {
                    _this.doctorMedicationInjectionDB = [];
                    _this.doctorMedicationInjectionDB = data.data;
                }
                else if (type == 'Cream') {
                    _this.doctorMedicationCreamDB = [];
                    _this.doctorMedicationCreamDB = data.data;
                }
                else if (type == 'Oitment') {
                    _this.doctorMedicationOitmentDB = [];
                    _this.doctorMedicationOitmentDB = data.data;
                }
                else if (type == 'Gel') {
                    _this.doctorMedicationGelDB = [];
                    _this.doctorMedicationGelDB = data.data;
                }
                else if (type == 'Lotion') {
                    _this.doctorMedicationLotionDB = [];
                    _this.doctorMedicationLotionDB = data.data;
                }
                else if (type == 'Drops') {
                    _this.doctorMedicationDropsDB = [];
                    _this.doctorMedicationDropsDB = data.data;
                }
                else if (type == 'Aerosols') {
                    _this.doctorMedicationAerosolsDB = [];
                    _this.doctorMedicationAerosolsDB = data.data;
                }
                else if (type == 'Powder') {
                    _this.doctorMedicationPowderDB = [];
                    _this.doctorMedicationPowderDB = data.data;
                }
                else if (type == 'MouthWash') {
                    _this.doctorMedicationMouthwashDB = [];
                    _this.doctorMedicationMouthwashDB = data.data;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    DischargePatientpdfComponent.prototype.GetDoctorSuggestions = function () {
        var _this = this;
        var object = {
            doctor_id: this.doctorData.itemId
        };
        this.userService.GetDoctorSuggestions(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.medInfoDB = data.medInfoDB;
                _this.doctorMedicationTabletDB = data.doctorMedicationTabletDB;
                _this.doctorMedicationCapsuleDB = data.doctorMedicationCapsuleDB;
                _this.doctorMedicationSyrupDB = data.doctorMedicationSyrupDB;
                _this.doctorMedicationSuspensionDB = data.doctorMedicationSuspensionDB;
                _this.doctorMedicationEmulsionDB = data.doctorMedicationEmulsionDB;
                _this.doctorMedicationSolutionDB = data.doctorMedicationSolutionDB;
                _this.doctorMedicationInjectionDB = data.doctorMedicationInjectionDB;
                _this.doctorMedicationCreamDB = data.doctorMedicationCreamDB;
                _this.doctorMedicationOitmentDB = data.doctorMedicationOitmentDB;
                _this.doctorMedicationGelDB = data.doctorMedicationGelDB;
                _this.doctorMedicationLotionDB = data.doctorMedicationLotionDB;
                _this.doctorMedicationDropsDB = data.doctorMedicationDropsDB;
                _this.doctorMedicationAerosolsDB = data.doctorMedicationAerosolsDB;
                _this.doctorMedicationPowderDB = data.doctorMedicationPowderDB;
                _this.doctorMedicationMouthwashDB = data.doctorMedicationMouthwashDB;
            }
        }, function (err) {
            console.log(err);
        });
    };
    DischargePatientpdfComponent.prototype.FindDoctorsOfSameClinic = function () {
        var _this = this;
        this.userService.FindDoctorsOfSameClinic(this.doctorData.doctm_clinic_id).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                var admin = data.data.filter(function (d) { return d.type_of_doctor == "admin_doctor"; });
                _this.adminDoctor = admin[0];
                if (_this.patientDataForDischarge.type == 'general') {
                    _this.bedCharges = _this.adminDoctor.clinic_services.general_bed_charges;
                }
                else if (_this.patientDataForDischarge.type == 'semi_private') {
                    _this.bedCharges = _this.adminDoctor.clinic_services.semi_private_bed_charges;
                }
                else if (_this.patientDataForDischarge.type == 'private') {
                    _this.bedCharges = _this.adminDoctor.clinic_services.private_bed_charges;
                }
                _this.calculateCharges();
            }
        }, function (err) {
            console.log(err);
        });
    };
    DischargePatientpdfComponent.prototype.onTimeChange = function () {
        if (this.discharegeTime == null) {
            return;
        }
        this.newDischargeDate = new Date(this.dischargeDate);
        this.newDischargeDate.setHours(this.discharegeTime.hour, this.discharegeTime.minute);
        // new Date(this.dischargeDate).setHours(this.discharegeTime.hour, this.discharegeTime.minute)
        var diff = (new Date(this.newDischargeDate).getTime() - new Date(this.patientDataForDischarge.createdAt).getTime()) / 1000;
        diff /= (60 * 60);
        var hoursDifference = Math.abs(Math.round(diff));
        this.differenceInDays = Math.trunc(hoursDifference / 24);
        this.differenceInHours = Math.trunc(hoursDifference % 24);
        this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges) + this.occupancyHoursAmount);
        this.totalActivitiesAmount = this.totalActivitiesAmount;
        this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges;
        this.occupancyHoursAmount = (this.bedCharges / 24) * this.differenceInHours;
        this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.patientDataForDischarge.advanceReceived;
        if (this.totalActivitiesOutstandingAmount < 0) {
            this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2 * this.totalActivitiesOutstandingAmount));
            this.totalActivitiesOutstandingAmount = 0;
        }
        else {
            this.refundAmount = 0;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_ng_fullcalendar__["a" /* CalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ng_fullcalendar__["a" /* CalendarComponent */])
    ], DischargePatientpdfComponent.prototype, "ucCalendar", void 0);
    DischargePatientpdfComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-discharge-patientpdf',
            template: __webpack_require__("../../../../../src/app/header-two-layout/discharge-patientpdf/discharge-patientpdf.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/discharge-patientpdf/discharge-patientpdf.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_0__theme_services__["b" /* BaThemeSpinner */]])
    ], DischargePatientpdfComponent);
    return DischargePatientpdfComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/discharge-patientpdf/discharge-patientpdf.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DischargePatientpdfModule", function() { return DischargePatientpdfModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__discharge_patientpdf_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/discharge-patientpdf/discharge-patientpdf-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__discharge_patientpdf_component__ = __webpack_require__("../../../../../src/app/header-two-layout/discharge-patientpdf/discharge-patientpdf.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_webcam__ = __webpack_require__("../../../../ngx-webcam/ngx-webcam.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_fullcalendar__ = __webpack_require__("../../../../ng-fullcalendar/ng-fullcalendar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_chips__ = __webpack_require__("../../../../ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_countdown_timer__ = __webpack_require__("../../../../ngx-countdown-timer/ngx-countdown-timer.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_countdown_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_countdown_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/ng2-dnd.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng4_auto_complete__ = __webpack_require__("../../../../ng4-auto-complete/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var DischargePatientpdfModule = /** @class */ (function () {
    function DischargePatientpdfModule() {
    }
    DischargePatientpdfModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__discharge_patientpdf_routing_module__["a" /* DischargePatientpdfRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_webcam__["a" /* WebcamModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_fullcalendar__["b" /* FullCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_chips__["a" /* TagInputModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_countdown_timer__["CountdownTimerModule"],
                __WEBPACK_IMPORTED_MODULE_11_ng2_dnd__["a" /* DndModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng4_auto_complete__["a" /* AutoCompleteModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__discharge_patientpdf_component__["a" /* DischargePatientpdfComponent */]]
        })
    ], DischargePatientpdfModule);
    return DischargePatientpdfModule;
}());



/***/ })

});
//# sourceMappingURL=discharge-patientpdf.module.chunk.js.map