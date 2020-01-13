webpackJsonp(["dashboardpharmacy.module"],{

/***/ "../../../../../src/app/header-five-layout/dashboardpharmacy/dashboardpharmacy-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardpharmacyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboardpharmacy_component__ = __webpack_require__("../../../../../src/app/header-five-layout/dashboardpharmacy/dashboardpharmacy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboardpharmacy_component__["a" /* DashboardpharmacyComponent */]
    }
];
var DashboardpharmacyRoutingModule = /** @class */ (function () {
    function DashboardpharmacyRoutingModule() {
    }
    DashboardpharmacyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardpharmacyRoutingModule);
    return DashboardpharmacyRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/dashboardpharmacy/dashboardpharmacy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pad-list>li.half-li {\r\n    width: 33.33%;\r\n    float: left;\r\n}\r\n.green {\r\n    color: green;\r\n}\r\n.pad-list>li>div {\r\n    text-overflow: unset;\r\n    overflow: unset;\r\n    white-space: normal;\r\n    min-height: 57px;\r\n    padding: 5px 2px;\r\n    display: table;\r\n    height: 65px;\r\n    /*word-break: break-all;*/\r\n}\r\n.pad-list .medication-li div {\r\n    display: table;\r\n    width: 100%;\r\n    min-height: 55px;\r\n}\r\n.red-btn.my-pad {\r\n    padding: 15px 15px;\r\n}\r\nli.medication-li {\r\n    width: 99%;\r\n}\r\nspan.diseasen-name {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\nspan.medication-transform {\r\n    font-size: 18px;\r\n    width: 100%;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.pad-header>.blue-btn {\r\n    padding: 0px 1px;\r\n    border-right: 0;\r\n}\r\n.blue-btn .btn-custom {\r\n    padding: 16px 30px;\r\n    border-radius: 0;\r\n    min-width: 100%;\r\n    -webkit-box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12);\r\n            box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12);\r\n}\r\n.height-50 {\r\n    min-height: 144px;\r\n}\r\n.vacciSchedule-div>ul>li>div.active, .follow-ul>li.active, .frequency-ul li.active-cel, .duration-ul li.active-cel, .special-ul li.active-cel, .precond-ul>li.active-cel, .special-ul.hindi li.active-cel, .combined_frequency>li.active-cel, .combined_duration>li.active-cel, .combined_instruc>li.active-cel, .combined_inject>li.active-cel, .combined_instruc.combined_drop>li.active-cel {\r\n    background-color: #000;\r\n    color: #fff;\r\n    background: #000;\r\n}\r\n.sphere-ul>li.active, .sphere-ul.right>li.active {\r\n    background-color: #01b0f0;\r\n}\r\n.flex-inner .table {\r\n    margin-bottom: 0;\r\n}\r\n.flex-inner ol {\r\n    margin-bottom: 0;\r\n}\r\n.flex-inner ol>div {\r\n    width: 100%;\r\n    float: left;\r\n    margin-left: -10px;\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n}\r\n.flex-inner ol>li {\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    word-break: break-all;\r\n    padding-right: 15px;\r\n    position: relative;\r\n}\r\n/*.flex-inner .medicationol > li{\r\n    margin-bottom: 8px;\r\n}*/\r\n.flex-inner .followol>li {\r\n    width: 100%;\r\n}\r\ninput.txt50 {\r\n    width: 100px;\r\n}\r\n@media (min-width: 768px) {\r\n    #eyeModal .modal-dialog {\r\n        width: 650px;\r\n    }\r\n}\r\n.help-note {\r\n    font-size: 10px;\r\n    font-style: italic;\r\n}\r\n.selected_preset {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.only-text {\r\n    padding: 8px 5px;\r\n    font-size: 12px;\r\n    border: 1px solid rgba(198, 217, 241, 1);\r\n}\r\n.medication-modal-body .medication-form>.form-group>div.only-text {\r\n    border: 1px solid rgba(198, 217, 241, 1);\r\n}\r\n.selected_preset .medication-form>.duration>div {\r\n    color: #222;\r\n}\r\n.medic-info {\r\n    border-top: 0;\r\n}\r\n.active.lightblue-btn {\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n.combined_modal .modal-dialog {\r\n    width: 830px;\r\n}\r\n.combined_flex {\r\n    width: 100%;\r\n    float: left;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n}\r\n.combined_flex>div {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 33.33%;\r\n    flex: 1 1 33.33%;\r\n    margin: 0 2px;\r\n    border: 1px solid #b9b9b9;\r\n}\r\n.combined_heading {\r\n    width: 100%;\r\n    float: left;\r\n    color: #fff;\r\n    margin: 0;\r\n    padding: 5px 0;\r\n    text-align: center;\r\n    background-color: #00b0f0;\r\n}\r\n.combined_frequency, .combined_duration, .combined_instruc, .combined_inject {\r\n    width: 100%;\r\n    float: left;\r\n    margin: 0;\r\n    padding: 5px 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    list-style-type: none;\r\n}\r\n.combined_frequency>li, .combined_duration>li, .combined_instruc>li, .combined_inject>li {\r\n    width: 70px;\r\n    height: 70px;\r\n    margin: 3px;\r\n    cursor: pointer;\r\n    padding: 0 15px;\r\n    border-radius: 10px;\r\n    border: 1px solid #777;\r\n    text-align: center;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n    display: -webkit-box;\r\n    - display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n.combined_flex>div ul>li.active {\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n.combined_duration>li {\r\n    height: 32px;\r\n}\r\n.combined_flex>div.frquency_cmbnd ul {\r\n    background-color: #F2F2F2;\r\n}\r\n.combined_flex>div.duration_cmbnd ul {\r\n    background-color: #DAEDF4;\r\n}\r\n.combined_flex>div.instr_cmbnd ul.combined_instruc {\r\n    background-color: #EAF1DD;\r\n}\r\n.combined_flex>div.instr_cmbnd ul.combined_inject {\r\n    background-color: #FCEAD9;\r\n}\r\n.combined_flex>div.instr_cmbnd ul.combined_drop {\r\n    background-color: #FCEAD9;\r\n}\r\n.combined_flex>div.duration_cmbnd {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 20%;\r\n    flex: 1 1 20%;\r\n}\r\n.combined_flex>div.instr_cmbnd .combined_inject {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n.combined_flex>div.instr_cmbnd .combined_inject>li {\r\n    width: 100%;\r\n    float: left;\r\n    font-size: 20px;\r\n    height: 62px;\r\n}\r\n.combined_flex>div.instr_cmbnd .combined_instruc>li {\r\n    width: 120px;\r\n    height: 40px;\r\n}\r\n#combinedModal2 .combined_flex>div.instr_cmbnd .combined_instruc>li {\r\n    height: 90px;\r\n}\r\n.combined_flex>div.instr_cmbnd .combined_drop>li {\r\n    width: 50px;\r\n    height: 62px;\r\n}\r\n.combined_flex>div.instr_cmbnd .combined_dosage>li {\r\n    width: 50px;\r\n    height: 39.5px;\r\n}\r\n.btn_green {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    background-color: #8BD053;\r\n}\r\np.help-note {\r\n    margin: 0 0 1px;\r\n}\r\n.btn.sm_green-btn.lang-btn {\r\n    background: -webkit-gradient(linear, left bottom, left top, from(rgb(201, 181, 232)), color-stop(rgb(217, 203, 238)), to(rgb(240, 234, 249)));\r\n    background: linear-gradient(to top, rgb(201, 181, 232), rgb(217, 203, 238), rgb(240, 234, 249));\r\n    background: -o-linear-gradient(to top, rgb(201, 181, 232), rgb(217, 203, 238), rgb(240, 234, 249));\r\n    border: 1px solid rgb(201, 181, 232)\r\n}\r\n.btn.sm_green-btn.lang-btn.active, .btn.sm_green-btn.lang-btn:focus {\r\n    background: #000;\r\n    color: #fff;\r\n}\r\n/*.precond-ul>li.active-cel {\r\n    background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.5), rgba(0,0,0,0.1));\r\n}*/\r\nfieldset.fieldset-preset {\r\n    min-width: unset;\r\n    padding: 0 10px;\r\n    border: 1px solid rgba(56, 94, 138, 1);\r\n}\r\nlegend.legend-preset {\r\n    width: 20%;\r\n    border-bottom: none;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n}\r\n.tags-listing-div .fieldset-preset .tags-listing {\r\n    width: 100%;\r\n    float: left;\r\n    overflow: auto;\r\n    max-height: 280px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -moz-flex;\r\n    display: -o-flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    list-style-type: none;\r\n    padding: 0px;\r\n    border-radius: 3px;\r\n}\r\n.li-blocked span {\r\n    font-weight: normal;\r\n}\r\n#translated_div .modal-dialog .modal-header {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -moz-flex;\r\n    display: -o-flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: space-evenly;\r\n        -ms-flex-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n}\r\n#translated_div .modal-dialog .modal-header>* {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n.padview-header {\r\n    width: 100%;\r\n    float: left;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -moz-flex;\r\n    display: -o-flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.pad-view-flx {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 50%;\r\n            flex: 1 1 50%;\r\n    -webkit-flex: 1 1 50%;\r\n    -moz-flex: 1 1 50%;\r\n    -o-flex: 1 1 50%;\r\n}\r\n#previewModal .padview-bodyright {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 9.5px 10px;\r\n    margin-bottom: 10px;\r\n    border: 2px solid #333;\r\n    border-right: 0;\r\n}\r\n.reportImg img {\r\n    display: block;\r\n    max-width: 400px;\r\n    height: 400px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n.wrap {\r\n    width: 95%;\r\n    max-height: 450px;\r\n    min-height: 450px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n.visit-status {\r\n    color: #002160;\r\n    font-weight: bold;\r\n}\r\n.patient-date {\r\n    color: #bbb;\r\n}\r\n.patient-textwrap {\r\n    -webkit-box-align: normal!important;\r\n        -ms-flex-align: normal!important;\r\n            align-items: normal!important;\r\n}\r\n.patient-address {\r\n    padding-right: 0px;\r\n}\r\n.cstm-drpdown-cnsulted-doc {\r\n    margin: 20px 0;\r\n    position: relative;\r\n}\r\n.smrt-ass-dropdown {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n.cstm-drpdown-cnsulted-doc select {\r\n    font-size: 25px;\r\n    color: #fff;\r\n    width: 100%;\r\n    position: relative;\r\n    cursor: pointer;\r\n    padding: 15px;\r\n    background-color: #01b0f0;\r\n    border-radius: 10px;\r\n    border: none;\r\n}\r\n.cstm-drpdown-cnsulted-doc option {\r\n    border-bottom: 1px #ccc dashed;\r\n    padding: 8px 7px;\r\n    -webkit-transition: .3s all;\r\n    transition: .3s all;\r\n    display: block;\r\n    color: #00b0f0;\r\n    border-radius: 0;\r\n    background-color: #fff;\r\n    font-size: 20px;\r\n}\r\n.cstm-caret-big {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 22px;\r\n    background-color: #01b0f0;\r\n    z-index: 1;\r\n    right: 5px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 17px dashed;\r\n    border-right: 14px solid transparent;\r\n    border-left: 14px solid transparent;\r\n}\r\n.search-patient {\r\n    margin: 28px 0;\r\n}\r\n.panel-success {\r\n    border: 2px solid #000;\r\n    border-radius: 0;\r\n    margin-bottom: 0;\r\n    min-height: 511px;\r\n}\r\n.panel-body {\r\n    padding: 0;\r\n}\r\n.today-appointment {\r\n    float: left;\r\n    /*width: 60%;*/\r\n    width: 49.9%;\r\n}\r\n.appointment-heading {\r\n    font-size: 25px;\r\n    text-align: center;\r\n    background: -webkit-linear-gradient(top, #d6f8ff 0%, #a3ecff 72%);\r\n    padding: 10px 0;\r\n    /*border-right: 2px solid #000;*/\r\n    border-bottom: 2px solid #000;\r\n    width: 85%;\r\n    display: inline-block;\r\n}\r\n.search-appointment {\r\n    width: 100%;\r\n}\r\n.today-appointment-list-div {\r\n    padding: 10px;\r\n    /*padding: 13px;*/\r\n    width: 100%;\r\n    padding-bottom: 0;\r\n    float: left;\r\n    max-height: 450px;\r\n    overflow: auto;\r\n    /*border-right: 2px solid #000;*/\r\n}\r\n.today-appointment-list {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n.today-appointment-ul {\r\n    float: left;\r\n    list-style-type: none;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.today-appointment-ul {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.today-appointment-ul li {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n    cursor: pointer;\r\n    padding: 10px 15px;\r\n    border: 1px solid #adc4df;\r\n    background: -webkit-linear-gradient(top, #f2f6fa 0%, #cddbec 72%);\r\n    margin-right: 9px;\r\n    text-transform: uppercase;\r\n}\r\n.today-appointment-ul li:last-child {\r\n    margin-right: 0;\r\n}\r\n.tommorow-appointment {\r\n    float: left;\r\n    /*width: 40%;*/\r\n    width: 49.9%;\r\n}\r\n.tommorow-appointment .appointment-heading {\r\n    background: -webkit-linear-gradient(top, #f0fedd 0%, #ddfeaf 72%);\r\n    border-right: none;\r\n    width: 85%;\r\n    display: inline-block;\r\n}\r\n.tommorow-appointment .today-appointment-list-div {\r\n    border-right: none;\r\n}\r\n.tommorow-appointment .today-appointment-ul li {\r\n    background: -webkit-linear-gradient(top, #f0fedd 0%, #ddfeaf 72%);\r\n    /*border:none;\r\n    box-shadow: 0 0 5px 0px rgba(0,0,0, 0.3);*/\r\n}\r\n.today-appointment-ul li:first-child {\r\n    width: 40px;\r\n    padding: 10px 9px;\r\n    text-align: center;\r\n}\r\n.today-appointment-ul li:nth-child(2) {\r\n    width: 225px;\r\n    overflow: overlay;\r\n}\r\n.today-appointment-ul li:nth-child(3) {\r\n    /*width: 85px;*/\r\n    width: 77px;\r\n}\r\n.today-appointment-ul li:nth-child(4) {\r\n    /*width: 85px;*/\r\n    width: 108px;\r\n}\r\n.tommorow-appointment .today-appointment-ul li:last-child {\r\n    /*width: 135px;*/\r\n    width: 87px;\r\n}\r\n.add-new {\r\n    width: 15.1%;\r\n    display: inline-block;\r\n    text-align: center;\r\n    font-size: 25px;\r\n    color: #fff;\r\n    margin: -3px;\r\n    background-color: #ffc000;\r\n    border: 2px solid #0b2966;\r\n    /*height: 57px;*/\r\n    height: 58px;\r\n    padding: 0;\r\n    /*    line-height: 2.2;*/\r\n    line-height: 2.3;\r\n    border-top: none;\r\n    border-right: none;\r\n}\r\n/*modal css */\r\n.pat-reg-modal-form {\r\n    width: 600px!important;\r\n    right: 60px!important;\r\n}\r\n.regis-modal-body .input-btn {\r\n    width: 100%;\r\n    padding: 8px;\r\n}\r\n.ok-btn {\r\n    background-color: transparent;\r\n    border: 1px solid #002160;\r\n    width: 50px;\r\n    margin-left: -15px;\r\n}\r\n.reg-btn {\r\n    background-color: rgb(161, 210, 83);\r\n    color: #fff;\r\n    width: 100%;\r\n    border: rgb(150, 195, 78);\r\n}\r\n.reg-btn.cancel {\r\n    background-color: #ffc000!important;\r\n    border: #ffc000!important;\r\n}\r\n.pat-app-modal-form {\r\n    width: 600px!important;\r\n    right: 60px!important;\r\n}\r\n.regis-modal-body label {\r\n    height: 35px;\r\n    padding: 9px;\r\n}\r\n.name-cstm-input {\r\n    border-radius: 0;\r\n    border: none;\r\n    background-color: #00b0f0;\r\n    color: #fff;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n.appointments {\r\n    padding: 0;\r\n}\r\n.appoint-wrap {\r\n    max-width: 100%!important;\r\n}\r\n.vl {\r\n    border-right: 2px solid #000;\r\n    height: 511px;\r\n    width: 0px;\r\n    float: left;\r\n}\r\n.reg-btn-p {\r\n    margin-top: 4px;\r\n}\r\n.blue {\r\n    background: -webkit-linear-gradient(top, #f2f6fa 0%, #cddbec 72%)!important;\r\n}\r\n.yellow {\r\n    background: -webkit-linear-gradient(top, #f0fedd 0%, #ddfeaf 72%)!important;\r\n}\r\n.green {\r\n    background: -webkit-linear-gradient(top, #f0fedd 0%, #bdfdbf 72%)!important;\r\n}\r\n.red {\r\n    background: -webkit-linear-gradient(top, #f0fedd 0%, #ffb59e 72%)!important;\r\n}\r\n.orange {\r\n    background: -webkit-linear-gradient(top, #f0fedd 0%, #ffdebc 72%)!important;\r\n}\r\n.camera-div {\r\n    /*height:470px;*/\r\n    height: 600px;\r\n    padding: 10px;\r\n}\r\n.camera-btn {\r\n    text-align: center;\r\n    padding: 15px;\r\n    margin-top: 55px;\r\n}\r\n.upload-image {\r\n    padding: 3px;\r\n    text-align: center;\r\n}\r\n.upload-image a {\r\n    text-decoration: none;\r\n    color: #333;\r\n    position: absolute;\r\n    top: -8px;\r\n    right: 10px;\r\n}\r\n.upload-image i {\r\n    font-size: 16px;\r\n    padding: 10px;\r\n    background-color: #01b0f0;\r\n    border-radius: 5px;\r\n}\r\n.upload-image .img-thumbnail {\r\n    /*padding: 5px;\r\n    height:70px;\r\n    width:100%;*/\r\n    padding: 5px;\r\n    height: 35px;\r\n    width: 35px;\r\n}\r\n.p-upload {\r\n    margin-bottom: 11px;\r\n}\r\n.close-thik:after {\r\n    content: '\\2716';\r\n}\r\n.reg-cancel-btn {\r\n    width: 77%;\r\n    margin: auto;\r\n}\r\n.search-main-div {\r\n    width: 83%;\r\n    margin: auto;\r\n}\r\n.search-inner {\r\n    width: 100%;\r\n}\r\n.search-inner ul {\r\n    width: 100%;\r\n}\r\n/*.search-inner-ul li\r\n{\r\n    text-align: center;\r\n}*/\r\n.search-inner-ul li:first-child {\r\n    text-align: center;\r\n}\r\n.search-inner-ul li:nth-child(3) {\r\n    text-align: center;\r\n}\r\n.search-inner-ul li:nth-child(4) {\r\n    text-align: center;\r\n}\r\n.search-inner-ul li:nth-child(5) {\r\n    text-align: center;\r\n    width: 250px;\r\n}\r\n.search-inner-ul li:nth-child(6) {\r\n    text-align: center;\r\n}\r\n.search-inner-ul li:nth-child(7) {\r\n    text-align: center;\r\n}\r\n.search-patient {\r\n    float: left;\r\n    width: 90%;\r\n    position: relative;\r\n}\r\n.p-search-fa {\r\n    position: absolute;\r\n    top: 12px;\r\n    right: 10px;\r\n}\r\n.p-search-btn {\r\n    float: right;\r\n    position: relative;\r\n    top: 28px;\r\n    width: 9%;\r\n}\r\n.p-search-btn-in {\r\n    width: 100%;\r\n    padding: 9px;\r\n    border-radius: 6px;\r\n    background: #fff;\r\n    border: 1px solid #000;\r\n}\r\n.time-select {\r\n    width: 800px!important;\r\n    right: 35%!important;\r\n}\r\n.time-slots {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-bottom: 20px;\r\n    /*border: 1px solid #eee;*/\r\n}\r\n.time-ul {\r\n    width: 100%;\r\n    float: left;\r\n    margin: 0px;\r\n    padding: 0;\r\n    text-align: center;\r\n    min-height: 90px;\r\n}\r\n.time-ul>li {\r\n    float: left;\r\n    width: 16%;\r\n}\r\n.time-ul>li>a {\r\n    padding: 6px;\r\n    border: 1px solid #333;\r\n    display: block;\r\n    margin: 5px 5px;\r\n    background-color: #a8e8ff;\r\n    /*background-color: #00b0f0;*/\r\n    color: #000;\r\n}\r\n.time-ul>li>a:hover {\r\n    text-decoration: none;\r\n    background-color: #000!important;\r\n    color: #fff!important;\r\n}\r\n.already-selected {\r\n    background-color: #000!important;\r\n    color: #fff!important;\r\n}\r\n.blue-slot {\r\n    background-color: #a8e8ff!important;\r\n}\r\n.grey-slot {\r\n    background-color: rgba(0, 0, 0, .2)!important;\r\n}\r\n.select-doctor {\r\n    font-size: 16px;\r\n    color: #fff;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    background-color: #01b0f0;\r\n    border-radius: 0px;\r\n    border: none;\r\n    position: relative;\r\n}\r\n.cstm-caret {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 15px;\r\n    background-color: #01b0f0;\r\n    z-index: 9;\r\n    right: 20px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 12px dashed;\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n}\r\n.select-opt {\r\n    border-bottom: 1px #ccc dashed!important;\r\n    padding: 10px!important;\r\n    color: #00b0f0;\r\n    border-radius: 0;\r\n    background-color: #fff;\r\n    font-size: 20px;\r\n}\r\n.pickup-time {\r\n    margin-bottom: 10px;\r\n    padding: 0;\r\n    /*width: 16%;*/\r\n    /*border: 2px solid #01b0f0;*/\r\n}\r\n.btn-success {\r\n    color: #fff;\r\n    background-color: #01b0f0;\r\n    border: 1px solid #bdbdbd;\r\n    border-radius: 10px;\r\n    padding: 2px 12px;\r\n    margin-bottom: 8px;\r\n}\r\n.btn-success:active:hover {\r\n    color: #fff;\r\n    background-color: #01b0f0;\r\n    border: 1px solid #bdbdbd;\r\n    border-radius: 10px;\r\n    padding: 2px 12px;\r\n    margin-bottom: 8px;\r\n}\r\nfieldset.fieldset-preset {\r\n    min-width: unset;\r\n    padding: 0 10px;\r\n    border: 1px solid rgba(56, 94, 138, 1);\r\n}\r\nlegend.legend-preset {\r\n    width: 55%;\r\n    border-bottom: none;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n}\r\n.tags-listing-div {\r\n    width: 30%;\r\n    margin: auto;\r\n    padding: 0 15px;\r\n    float: none;\r\n}\r\n/*14-november*/\r\n.cnsulted-doc-head {\r\n    position: relative;\r\n    top: 15px;\r\n}\r\n.cnsulted-doc-head h3 {\r\n    font-size: 23px;\r\n}\r\n/*14-november*/\r\n.cstm-calender-opt, .cstm-calender-opt:hover {\r\n    color: #000;\r\n    text-decoration: none;\r\n}\r\n.cnsulted-doc-head h3 {\r\n    font-size: 28px;\r\n}\r\n.cstm-column {\r\n    padding: 0;\r\n}\r\n.cstm-drpdown-cnsulted-doc[_ngcontent-c4] select[_ngcontent-c4] {\r\n    font-size: 20px;\r\n}\r\n.cstm-caret-big[_ngcontent-c4] {\r\n    top: 19px;\r\n}\r\n.p-search-btn-in {\r\n    -webkit-transition: 300ms;\r\n    transition: 300ms;\r\n    width: 50px;\r\n}\r\n.p-search-btn-in:hover {\r\n    background-color: #98C74F;\r\n    border-color: #98C74F;\r\n    color: #fff;\r\n    -webkit-transition: 300ms;\r\n    transition: 300ms;\r\n}\r\nh4.dt {\r\n    color: #416bb1;\r\n}\r\nh4.dt>span {\r\n    color: #000;\r\n}\r\n.table-bordered>tbody>tr>td {\r\n    border-color: #000;\r\n}\r\n.table-bordered>tbody>tr>td.hding-tble {\r\n    border-color: #fff;\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n.table-bordered>tbody>tr>td.hding-total {\r\n    background-color: #e8e8e8;\r\n    color: #71A0DC;\r\n    border: #fff;\r\n}\r\n.table-bordered>tbody>tr>td.data-mn {\r\n    border-color: #fff;\r\n    background-color: #DAE5F1;\r\n    font-size: 17px;\r\n}\r\n.table-bordered>tbody>tr>td.data-mn-2 {\r\n    border-color: #fff;\r\n    background-color: #D6E3BC;\r\n    font-size: 17px;\r\n}\r\n.table-bordered>tbody>tr>td.hding-total-2 {\r\n    background-color: #e8e8e8;\r\n    color: #09B256;\r\n    border: #fff;\r\n}\r\n.footer-cstm {\r\n    /*padding:15px 0px;*/\r\n    /*padding-top: 0px;*/\r\n    float: left;\r\n    width: 100%;\r\n    background: #efefef;\r\n    position: fixed;\r\n    z-index: 99;\r\n    bottom: 0;\r\n    left: 0;\r\n    border-top: 1px solid #a9a8a8;\r\n}\r\n.tble-one {\r\n    position: relative;\r\n    min-height: 290px;\r\n    max-height: 290px;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n}\r\n.heading-1 {\r\n    padding: 10px;\r\n    color: #fff;\r\n    background: #000;\r\n    padding-bottom: 0px;\r\n}\r\n.fix-hd {\r\n    border-top: 1px solid #fff;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n.heading-1 h4 {\r\n    margin-bottom: 15px;\r\n}\r\n.brdr-right {\r\n    border-right: 1px solid #fff;\r\n}\r\n.brdr-both {\r\n    border-right: 1px solid #fff;\r\n    border-left: 1px solid #fff;\r\n}\r\n.th-back {\r\n    background-color: #000;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n/*.th-pd{\r\n    padding:5px 0px; \r\n}*/\r\n.table-row td {\r\n    border: 1px solid #fff;\r\n}\r\n.table-row {\r\n    background: #DAE5F1;\r\n}\r\n.table {\r\n    border: 1px solid #eee;\r\n}\r\n.history {\r\n    background-color: transparent;\r\n}\r\n.table-row td, .table-head th {\r\n    border-top: none;\r\n    padding: 8px 10px;\r\n    /*font-size: 12px;*/\r\n}\r\n.select-duration {\r\n    padding-bottom: 30px;\r\n}\r\n.select-duration h3 {\r\n    margin: 0;\r\n}\r\n.ok-btn {\r\n    background-color: transparent;\r\n    border: 1px solid #002160;\r\n    width: 50px;\r\n}\r\ntbody {\r\n    display: block;\r\n    width: 98%;\r\n    /*height: 250px;*/\r\n    /*overflow: auto;*/\r\n}\r\nthead, tbody tr {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n    /* even columns width , fix width of table too*/\r\n}\r\nthead {\r\n    width: calc( 100% - 1em)/* scrollbar is average 1em/16px width, remove it from thead width */\r\n}\r\n.btn-custom {\r\n    color: #002160;\r\n    position: relative;\r\n    padding: 6.5px 17px;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n}\r\n.ipdbook {\r\n    padding: 0px;\r\n}\r\n.select-duration {\r\n    padding-bottom: 15px;\r\n}\r\n.tab-2 {\r\n    background-color: rgb(214, 227, 188);\r\n}\r\n.tab-2 td{\r\n    word-break: break-all;\r\n}\r\n.table-wrap {\r\n    min-height: 340px;\r\n    max-height: 340px;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    margin-top: -20px;\r\n}\r\n.table-wrap table {\r\n    width: 650px;\r\n    table-layout: fixed;\r\n}\r\n.cstm-tab-2 {\r\n    background-color: #000;\r\n    width: 100%;\r\n    padding: 10px;\r\n    color: #fff;\r\n    height: 50px;\r\n    text-align: center;\r\n    line-height: 2.3;\r\n}\r\n.cstm-tab-st {\r\n    background-color: #efefef;\r\n    width: 100%;\r\n    padding: 10px;\r\n    color: #000;\r\n    height: 50px;\r\n    text-align: center;\r\n    border: 1px solid #000;\r\n    line-height: 2.3;\r\n}\r\n.cstm-my-tab li a {\r\n    font-size: 12px;\r\n    padding: 8px 10px;\r\n}\r\n.cstm-my-tab li.active a {\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n.tbod-max-w tr {\r\n    font-size: 12px;\r\n}\r\n.tbod-max-w tr:hover {\r\n    cursor: pointer;\r\n    background-color: #002060!important;\r\n    color: #fff!important;\r\n    border-color: transparent;\r\n    -webkit-transition: all 0.3s ease 0s;\r\n    transition: all 0.3s ease 0s;\r\n    text-shadow: 0px 0px 20px #fff;\r\n    font-weight: bolder!important;\r\n    font-size: 14px!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-five-layout/dashboardpharmacy/dashboardpharmacy.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\" class=\"loader-box\">\n    <img src=\"./assets/imgs/load.gif\"/>\n</div>\n<div class=\"dashboard-sec\">\n    <div class=\"dashboard-prescription\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <div class=\"\">\n                        <div class=\"col-lg-8 col-xs-12\">\n                            <div class=\"inner-tab\">\n                                <ul class=\"nav nav-tabs cstm-my-tab\" role=\"tablist\">\n                                    <li role=\"presentation\" [ngClass]=\"(doctor._id == consultationDoctor)?'active':''\"*ngFor=\"let doctor of dataDoctors;let i =index\"><a href=\"#pd\" aria-controls=\"total\" role=\"tab\" data-toggle=\"tab\" (click)=\"findPatientsForPharmacy(doctor._id)\"> <span *ngIf=\"i!=dataDoctors.length-1\">Dr.</span>  {{getDoctorFirstName(doctor.first_name)}}</a></li>\n                                    <!-- <li role=\"presentation\" class=\"\" *ngFor=\"let doctor of doctorsOfSameClinic\"><a href=\"#pd\" aria-controls=\"total\" role=\"tab\" data-toggle=\"tab\" (click)=\"findPatientsForPharmacy(doctor._id)\"> Dr. {{getDoctorFirstName(doctor.first_name)}}</a></li> -->\n                                </ul>\n                            </div>\n                        </div>\n                    <div class=\"col-lg-4 col-xs-12\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search by Mobile or Patient name\" (input)=\"search()\" [(ngModel)]=\"searchInput\" >\n                        </div>\n                    </div>\n                    <!-- <div class=\"col-lg-2\">\n                        <div class=\"main-date\">\n                            <h4 class=\"dt\">\n                                {{day}} {{month}} , {{year}}\n                                <small>\n                                    {{hoursIST}}:{{getMin()}}\n                                </small>\n                            </h4>\n                        </div>\n                    </div> -->\n               \n                <div class=\"patient-panel\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-sm-6 col-xs-12 tb-1\">\n                            <table matSort (matSortChange)=\"sortData($event)\" cellpadding=\"20px\" class=\"table cstm-table\">\n                                <thead class=\"table-head\">\n                                    <tr>\n                                        <th class=\"th-back \" colspan=\"2\">\n                                        <div class=\"th-pd\"> <h5>WAITING ORDERS ({{waitingOrders.length}})</h5\n                                        ></div></th>\n                                    </tr>\n                                  <tr>\n                                    <th mat-sort-header=\"prescription_id\" class=\"th-back brdr-right\"><h5>PRESCRIPTION-ID</h5></th>\n                                    <th mat-sort-header=\"registration\" class=\"th-back\"><h5>PATIENT NAME</h5></th>\n                                  </tr>\n                               </thead>\n                            </table> \n                            <div class=\"table-wrap\">\n                                <table>\n                                    <tbody class=\"tbod-max-w\">\n                                        <tr class=\"table-row\" *ngFor=\"let item of sortedData; let i= index;\" >\n                                            <td class=\"text-center\" (click)=\"goForPharmacy(item)\">{{item.prescription_id}}</td> \n                                            <td class=\"text-center\" (click)=\"goForPharmacy(item)\">{{item.registration.pateintName}}</td>\n                                        </tr>\n                                    </tbody> \n                                </table>  \n                            </div>\n                        </div>\n                        <div class=\"col-md-6 col-sm-6 col-xs-12 tb-1\">                           \n                                <table matSort (matSortChange)=\"sortData1($event)\" cellpadding=\"20px\" class=\"table cstm-table\">\n                                    <thead class=\"table-head\">\n                                        <tr>\n                                            <th class=\"th-back \" colspan=\"3\">\n                                            <div class=\"th-pd\"> <h5>SALES ORDERS ({{waitingOrders1.length}})</h5></div></th>\n                                        </tr>\n                                      <tr>\n                                        <th mat-sort-header=\"prescription_id\" class=\"th-back brdr-right\"><h5>PRESCRIPTION-ID</h5></th>\n                                        <th mat-sort-header=\"registration\" class=\"th-back brdr-right\"><h5>PATIENT NAME</h5></th>\n                                        <th mat-sort-header=\"pharmacy_sales\" class=\"th-back\"><h5> SALES(Rs.)</h5></th>\n                                      </tr>\n                                   </thead>\n                                </table>  \n                                <div class=\"table-wrap\">\n                                    <table>\n                                          <tbody class=\"tbod-max-w\">\n                                          <tr class=\"table-row tab-2\" *ngFor=\"let item of sortedData1; let i= index;\" >\n                                            <td class=\"text-center\" (click)=\"receivedPayment(item)\">{{item.prescription_id}}</td> \n                                            <td class=\"text-center\" (click)=\"receivedPayment(item)\">{{item.registration.pateintName}}</td>\n                                            <td class=\"text-center\" (click)=\"receivedPayment(item)\">{{item.pharmacy_sales}}</td>\n                                          </tr>\n                                          </tbody>\n                                    </table>  \n                            </div>                     \n                        </div>\n                    </div>\n                </div>\n                <div class=\"footer-cstm\">\n                    <!-- <div class=\"row\"> -->\n                    <div class=\"col-lg-6 text-center\" *ngIf=\"!loading\">\n                        <div class=\"btn red-btn mg-all\">\n                            TODAY'S SALES : Rs.{{getData(totalSales)}}\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6 text-center\" *ngIf=\"!loading\">\n                        <div class=\"btn green-btn mg-all\">\n                            TODAY'S PROFIT : Rs.{{getData(totalSales-totalCost)}}\n                        </div>\n                    </div>\n                    <!--  </div> -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-five-layout/dashboardpharmacy/dashboardpharmacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardpharmacyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirmation_popup_custom_dialog_custom_dialog_component__ = __webpack_require__("../../../../../src/app/confirmation-popup/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DashboardpharmacyComponent = /** @class */ (function () {
    function DashboardpharmacyComponent(formBuilder, toastr, userService, router, dialog) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this.waitingOrders = [];
        this.waitingOrders1 = [];
    }
    DashboardpharmacyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails']);
        console.log(this.pharmacyData);
        // var currentTime = new Date();
        // var currentOffset = currentTime.getTimezoneOffset();
        // var ISTOffset = 330;
        // var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        // this.hoursIST = ISTTime.getHours()
        // this.minutesIST = ISTTime.getMinutes()
        // setInterval(() => {
        //     this.getCurrentTime()
        // }, 60000);
        // var options = {
        //     month: 'short'
        // };
        // var today = new Date();
        // this.month = today.toLocaleDateString("en-IN", options);
        // this.day = new Date().getDate()
        // this.year = new Date().getFullYear()
        // this.numericMonth = new Date().getMonth() + 1
        this.consultationDoctor = "";
        if (localStorage.getItem('dashboardPharmacySelectedDr')) {
            this.consultationDoctor = localStorage.getItem('dashboardPharmacySelectedDr');
        }
        this.dataDoctors = [];
        this.waitingOrders = [];
        this.waitingOrders1 = [];
        this.waitingOrdersBackup = [];
        this.GetSmartPharmacyDataAfterLogin();
        this.socket = __WEBPACK_IMPORTED_MODULE_8_socket_io_client__(__WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__["a" /* environment */].socket);
        this.socket.emit('room join', {
            room_id: this.pharmacyData.dataSmartPharmacy._id.toString()
        });
        this.socket.on('registrationBooked', function (msg) {
            _this.ngOnInit();
        });
        //set height
        // console.log(window.innerHeight)
        // document.getElementById("leftTable").style.height =  window.innerHeight + "px";
        //
    };
    // getCurrentTime(){
    //     var currentTime = new Date();
    //     var currentOffset = currentTime.getTimezoneOffset();
    //     var ISTOffset = 330;
    //     var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
    //     this.hoursIST = ISTTime.getHours()
    //     this.minutesIST = ISTTime.getMinutes()
    // }
    // getMin(){
    //     if(this.minutesIST<10){
    //         return "0"+this.minutesIST
    //     }else{
    //         return this.minutesIST
    //     }
    // }
    DashboardpharmacyComponent.prototype.ngOnDestroy = function () {
        this.socket.emit('room leave', {
            room_id: this.pharmacyData.dataSmartPharmacy._id.toString()
        });
    };
    DashboardpharmacyComponent.prototype.GetSmartPharmacyDataAfterLogin = function () {
        var _this = this;
        var object = {
            smart_pharmacy_id: this.pharmacyData.dataSmartPharmacy._id
        };
        this.loading = true;
        this.userService.GetSmartPharmacyDataAfterLogin(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.dataDoctors = data.doctorsRegisteredForSmartClinic;
                _this.doctorsOfSameClinic = data.doctorsOfSameClinic;
            }
            if (_this.dataDoctors.length == 1) {
                _this.dataDoctors.push({
                    _id: 0,
                    first_name: "Other"
                });
                if (_this.consultationDoctor == '') {
                    _this.consultationDoctor = _this.dataDoctors[0]._id;
                }
                _this.findPatientsForPharmacy(_this.consultationDoctor);
            }
            else {
                for (var i = 0; i < _this.dataDoctors.length; i++) {
                    if (_this.dataDoctors[i].type_of_doctor == "admin_doctor") {
                        _this.dataDoctors.push({
                            _id: 0,
                            first_name: "Other"
                        });
                        if (_this.consultationDoctor == '') {
                            _this.consultationDoctor = _this.dataDoctors[i]._id;
                        }
                        _this.findPatientsForPharmacy(_this.consultationDoctor);
                        break;
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardpharmacyComponent.prototype.findPatientsForPharmacy = function (id) {
        var _this = this;
        this.consultationDoctor = id;
        localStorage.setItem('dashboardPharmacySelectedDr', this.consultationDoctor);
        if (id != 0) {
            this.waitingOrders = [];
            var ob = {
                doctor_id: id,
                smart_pharmacy_id: this.pharmacyData.dataSmartPharmacy._id
            };
            this.userService.FindPatientsForPharmacy(ob).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.waitingOrders = data.data; //.concat(data.data).concat(data.data).concat(data.data).concat(data.data).concat(data.data).concat(data.data)
                    _this.waitingOrders1 = data.data1;
                    _this.waitingOrdersBackup = data.data;
                    _this.totalCost = 0;
                    _this.totalSales = 0;
                    if (data.data2.length > 0) {
                        for (var i = 0; i < data.data2.length; i++) {
                            _this.waitingOrders1.push({
                                prescription_id: "Other sale",
                                id: data.data2[i].id,
                                pharmacy_cost: data.data2[i].cost_amount,
                                pharmacy_sales: data.data2[i].total_amount,
                                registration: {
                                    pateintName: data.data2[i].patient_name
                                }
                            });
                        }
                    }
                    // for (var i = 0; i < this.waitingOrders1.length; i++) {
                    //     this.totalCost += this.waitingOrders1[i].pharmacy_cost
                    //     this.totalSales += this.waitingOrders1[i].pharmacy_sales
                    // }
                    if (data.totalCostSales.length > 0) {
                        _this.totalCost = data.totalCostSales[0].totalCostSales;
                    }
                    // if(data.totalCostDispensed.length>0){
                    //     this.totalCost = this.totalCost + data.totalCostDispensed[0].totalCostDispensed
                    // }
                    // if(data.totalSalesDispensed.length>0){
                    //     this.totalSales = data.totalSalesDispensed[0].totalSalesDispensed
                    // }
                    if (data.totalSalesSales.length > 0) {
                        _this.totalSales = data.totalSalesSales[0].totalSalesSales;
                    }
                    Math.ceil(_this.totalCost);
                    Math.ceil(_this.totalSales);
                    _this.sortedData = _this.waitingOrders.slice();
                    _this.sortedData1 = _this.waitingOrders1.slice();
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.findWalkinOtherPatientsForPharmacy();
        }
    };
    DashboardpharmacyComponent.prototype.deleteSearch = function () {
        this.searchInput = null;
    };
    DashboardpharmacyComponent.prototype.sortData = function (sort) {
        var data = this.sortedData.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'prescription_id': return compare(a.prescription_id, b.prescription_id, isAsc);
                case 'registration': return compare(a.registration.pateintName, b.registration.pateintName, isAsc);
                case 'pharmacy_sales': return compare(a.pharmacy_sales, b.pharmacy_sales, isAsc);
                default: return 0;
            }
        });
    };
    DashboardpharmacyComponent.prototype.sortData1 = function (sort) {
        var data = this.sortedData1.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData1 = data;
            return;
        }
        this.sortedData1 = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'prescription_id': return compare(a.prescription_id, b.prescription_id, isAsc);
                case 'registration': return compare(a.registration.pateintName, b.registration.pateintName, isAsc);
                case 'pharmacy_sales': return compare(a.pharmacy_sales, b.pharmacy_sales, isAsc);
                default: return 0;
            }
        });
    };
    DashboardpharmacyComponent.prototype.goForPharmacy = function (data) {
        localStorage['patientDataForPharmacy'] = JSON.stringify(data);
        this.router.navigate(['header-five-layout/sales-entry']);
    };
    DashboardpharmacyComponent.prototype.getDoctorFirstName = function (doctor) {
        var doc = doctor.split(" ");
        return doc[0];
    };
    DashboardpharmacyComponent.prototype.search = function () {
        var _this = this;
        this.searchInput = this.searchInput.toLowerCase();
        if (this.searchInput && this.searchInput.trim() != '') {
            this.waitingOrders = this.waitingOrdersBackup.filter(function (item) {
                var b = item.registration.pateintName.toLowerCase();
                var c = item.registration.pateintPhone;
                return (b.indexOf(_this.searchInput) > -1 || c.indexOf(_this.searchInput) > -1);
            });
        }
        if (this.searchInput == '') {
            this.waitingOrders = this.waitingOrdersBackup;
        }
        this.sortedData = this.waitingOrders.slice();
    };
    DashboardpharmacyComponent.prototype.getData = function (data) {
        if (isNaN(data)) {
            return 0;
        }
        else if (data == Infinity) {
            return 0;
        }
        else if (data == '') {
            return 0;
        }
        else if (data % 1 != 0) {
            return data.toFixed(2);
        }
        else {
            return data;
        }
    };
    DashboardpharmacyComponent.prototype.receivedPayment = function (activity) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__confirmation_popup_custom_dialog_custom_dialog_component__["a" /* CustomDialogComponent */], {
            data: {
                header: "Confirmation",
                body: "Payment received?"
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result == "yes") {
                console.log(activity.id);
                var ob = {
                    id: activity.id,
                    prescription_id: activity.prescription_id
                };
                console.log(ob);
                _this.userService.ChangeSalesBookStatus(ob).subscribe(function (data) {
                    console.log(data);
                    if (data.response == true) {
                        _this.findPatientsForPharmacy(_this.consultationDoctor);
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
    DashboardpharmacyComponent.prototype.findWalkinOtherPatientsForPharmacy = function () {
        var _this = this;
        this.waitingOrders = [];
        var ob = {
            smart_pharmacy_id: this.pharmacyData.dataSmartPharmacy._id
        };
        this.userService.findWalkinOtherPatientsForPharmacy(ob).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.waitingOrders = [];
                _this.waitingOrders1 = [];
                _this.waitingOrdersBackup = [];
                if (data.data.length > 0) {
                    for (var i = 0; i < data.data.length; i++) {
                        _this.waitingOrders1.push({
                            prescription_id: "Other sale",
                            id: data.data[i].id,
                            pharmacy_cost: data.data[i].cost_amount,
                            pharmacy_sales: data.data[i].total_amount,
                            registration: {
                                pateintName: data.data[i].patient_name
                            }
                        });
                    }
                }
                _this.sortedData = _this.waitingOrders.slice();
                _this.sortedData1 = _this.waitingOrders1.slice();
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardpharmacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboardpharmacy',
            template: __webpack_require__("../../../../../src/app/header-five-layout/dashboardpharmacy/dashboardpharmacy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-five-layout/dashboardpharmacy/dashboardpharmacy.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatDialog */]])
    ], DashboardpharmacyComponent);
    return DashboardpharmacyComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/header-five-layout/dashboardpharmacy/dashboardpharmacy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardpharmacyModule", function() { return DashboardpharmacyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboardpharmacy_routing_module__ = __webpack_require__("../../../../../src/app/header-five-layout/dashboardpharmacy/dashboardpharmacy-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboardpharmacy_component__ = __webpack_require__("../../../../../src/app/header-five-layout/dashboardpharmacy/dashboardpharmacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DashboardpharmacyModule = /** @class */ (function () {
    function DashboardpharmacyModule() {
    }
    DashboardpharmacyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__dashboardpharmacy_routing_module__["a" /* DashboardpharmacyRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["c" /* MatDialogModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboardpharmacy_component__["a" /* DashboardpharmacyComponent */]]
        })
    ], DashboardpharmacyModule);
    return DashboardpharmacyModule;
}());



/***/ })

});
//# sourceMappingURL=dashboardpharmacy.module.chunk.js.map