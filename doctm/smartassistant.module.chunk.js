webpackJsonp(["smartassistant.module"],{

/***/ "../../../../../src/app/header-three-layout/smartassistant/smartassistant-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartassistantRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smartassistant_component__ = __webpack_require__("../../../../../src/app/header-three-layout/smartassistant/smartassistant.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__smartassistant_component__["a" /* SmartassistantComponent */]
    }
];
var SmartassistantRoutingModule = /** @class */ (function () {
    function SmartassistantRoutingModule() {
    }
    SmartassistantRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], SmartassistantRoutingModule);
    return SmartassistantRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-three-layout/smartassistant/smartassistant.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn.btn-custom.date-btn {\r\n    padding: 6px 15px !important;\r\n    min-width: auto;\r\n}\r\n.action-option {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 10px;\r\n    font-size: 16px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -moz-flex;\r\n    display: -o-flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n.action-option a {\r\n    color: #002160;\r\n}\r\n.md-tab.inner-tab .nav-tabs .active a {\r\n    padding: 10px 15px;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    font-size: 20px;\r\n    text-transform: capitalize;\r\n}\r\n.md-tab.inner-tab .nav-tabs .active a {\r\n    padding: 10px 15px;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n.md-tab.inner-tab .nav-tabs>li>a {\r\n    text-align: center;\r\n    text-transform: capitalize;\r\n    margin-right: 2px;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    padding: 10px 15px;\r\n    min-width: 160px;\r\n    color: rgba(0, 0, 0, 0.47);\r\n    border: 0;\r\n    border-bottom: 2px solid transparent;\r\n    -webkit-transition: all 0.3s ease 0s;\r\n    transition: all 0.3s ease 0s;\r\n    margin-bottom: 0\r\n}\r\n.cstm-drpdown-cnsulted-doc {\r\n    margin: 20px 0;\r\n    position: relative;\r\n}\r\n.grey-placeholder{\r\n\tcolor:#BBBBBB !important;\r\n}\r\n.black-class{\r\n\tcolor:black;\r\n}\r\n.grey-class{\r\n\t\tcolor:#BBBBBB !important;\r\n}\r\n.smrt-ass-dropdown {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n.cstm-drpdown-cnsulted-doc select {\r\n    font-size: 25px;\r\n    color: #fff;\r\n    width: 100%;\r\n    position: relative;\r\n    cursor: pointer;\r\n    padding: 15px;\r\n    background-color: #01b0f0;\r\n    border-radius: 10px;\r\n    border: none;\r\n}\r\n.cstm-drpdown-cnsulted-doc option {\r\n    border-bottom: 1px #ccc dashed;\r\n    padding: 8px 7px;\r\n    -webkit-transition: .3s all;\r\n    transition: .3s all;\r\n    display: block;\r\n    color: #00b0f0;\r\n    border-radius: 0;\r\n    background-color: #fff;\r\n    font-size: 20px;\r\n}\r\n/*.smrt-ass-dropdown li a{\r\n    display: block;\r\n    padding: 14px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #fff;\r\n    margin: 0;\r\n    position: relative;\r\n    text-align: center;\r\n    background-color: #01b0f0;\r\n    border-radius: 10px;\r\n}*/\r\n/*.smrt-ass-dropdown li.cus-dropdown .dropdown-menu{\r\n    display: block;\r\n    opacity: 1;\r\n    visibility: visible;\r\n    float: left;\r\n    width: 100%;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.smrt-ass-dropdown li.cus-dropdown .dropdown-menu .parent-hide{\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style-type: none;\r\n}*/\r\n/*.smrt-ass-dropdown li.cus-dropdown .dropdown-menu .parent-hide li.inner-li a{\r\n    border-bottom: 1px #ccc dashed;\r\n    padding: 8px 7px;\r\n    transition: .3s all;\r\n    display: block;\r\n    color: #00b0f0;\r\n    border-radius: 0;\r\n    background-color: transparent;\r\n    font-size: 20px;\r\n}*/\r\n.consulation-progress-div {\r\n    float: left;\r\n    width: 100%;\r\n    font-size: 22px;\r\n    color: #0376a0;\r\n    text-align: left;\r\n    background-color: #d6e9c6;\r\n    margin: 20px 0;\r\n}\r\n.in-progress {\r\n    text-align: center;\r\n    width: 30%;\r\n    display: inline-block;\r\n    margin: 5px 0;\r\n    border-right: 1px solid #0376a0;\r\n    font-size: 21px;\r\n    line-height: 1.2;\r\n}\r\n.in-progress-detail {\r\n    width: 67%;\r\n    float: right;\r\n    display: inline-block;\r\n}\r\n.in-progress-detail .pending_ul>li>a {\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    border-radius: 0;\r\n}\r\n.in-progress-detail .pending_ul>li {\r\n    margin-bottom: 0;\r\n}\r\n.in-progress-detail .pending_ul>li>a img {\r\n    width: 50px;\r\n    height: 50px;\r\n    float: left;\r\n    display: inline-block;\r\n    border-radius: 100px;\r\n}\r\n.in-progress-detail .patient-text {\r\n    text-align: left;\r\n    padding-left: 70px;\r\n    padding-top: 4px;\r\n}\r\n.smartassistant-panel .panel-success .panel-heading span, .smartassistant-panel .pending-patient-box .pending-heading span {\r\n    color: #fff;\r\n}\r\n.smartassistant-panel .patient-text .patient-duration {\r\n    color: #bbb;\r\n    margin-bottom: 1px;\r\n}\r\n.smartassistant-panel .patient-consult-status {\r\n    font-size: 13px;\r\n    color: #bbb;\r\n}\r\n.smartassistant-panel .patient-text .patient-date {\r\n    color: #bbb;\r\n}\r\n.pending_ul>li>span {\r\n    right: 20px;\r\n    top: 7px;\r\n    font-size: 13px;\r\n}\r\n.pending_ul>li>span p {\r\n    margin-bottom: 5px;\r\n}\r\n.pending-exp-time {\r\n    font-size: 18px;\r\n}\r\n.pat-reg-modal-form {\r\n    width: 600px!important;\r\n    right: 60px!important;\r\n}\r\n.cstm-fee-label {\r\n    background-color: #01b0f0;\r\n    font-size: 27px;\r\n    height: 38px!important;\r\n    padding: 0!important;\r\n    border: 1px solid #000;\r\n    text-align: center;\r\n}\r\n.cstm-fee-input {\r\n    border: 1px solid #000;\r\n    border-radius: 0;\r\n    height: 38px;\r\n    border-left: 0;\r\n    font-size: 25px;\r\n}\r\n.select-doctor {\r\n    font-size: 16px;\r\n    color: #fff;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    background-color: #01b0f0;\r\n    border-radius: 0px;\r\n    border: none;\r\n    position: relative;\r\n}\r\n.cstm-caret {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 15px;\r\n    background-color: #01b0f0;\r\n    z-index: 9;\r\n    right: 20px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 12px dashed;\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n}\r\n.cstm-caret-big {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 22px;\r\n    background-color: #01b0f0;\r\n    z-index: 1;\r\n    right: 5px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 17px dashed;\r\n    border-right: 14px solid transparent;\r\n    border-left: 14px solid transparent;\r\n}\r\n.cstm-crt-wrap {\r\n    position: relative;\r\n}\r\n.regis-modal-body .select-opt .disabled {\r\n    color: #ddd;\r\n}\r\n.select-opt {\r\n    border-bottom: 1px #ccc dashed!important;\r\n    padding: 10px!important;\r\n    color: #00b0f0;\r\n    border-radius: 0;\r\n    background-color: #fff;\r\n    font-size: 20px;\r\n}\r\n.regis-modal-body .input-btn {\r\n    width: 100%;\r\n    padding: 8px;\r\n}\r\n.ok-btn {\r\n    background-color: transparent;\r\n    border: 1px solid #002160;\r\n    width: 50px;\r\n    margin-left: -15px;\r\n}\r\n.reg-btn {\r\n    background-color: rgb(161, 210, 83);\r\n    color: #fff;\r\n    width: 100%;\r\n    border: rgb(150, 195, 78);\r\n}\r\n.pat-app-modal-form {\r\n    width: 600px!important;\r\n    right: 60px!important;\r\n}\r\n.regis-modal-body label {\r\n    height: 30px;\r\n    /*padding: 9px;*/\r\n}\r\n/*14-november*/\r\n.cnsulted-doc-head {\r\n    position: relative;\r\n    top: 15px;\r\n}\r\n.cnsulted-doc-head h3 {\r\n    font-size: 28px;\r\n}\r\n.cstm-column{\r\n    padding: 0;\r\n}\r\n.pad-list>li.half-li {\r\n    width: 33.33%;\r\n    float: left;\r\n}\r\n.pad-list>li>div {\r\n    text-overflow: unset;\r\n    overflow: unset;\r\n    white-space: normal; \r\n    min-height: 57px;\r\n    padding: 5px 2px;\r\n    display: table;\r\n    height: 65px;\r\n    /*word-break: break-all;*/\r\n}\r\n.pad-list .medication-li div {\r\n    display: table;\r\n    width: 100%;\r\n    min-height: 55px;\r\n}\r\n.red-btn.my-pad {\r\n    padding: 15px 15px;\r\n}\r\nli.medication-li {\r\n    width: 99%;\r\n}\r\nspan.diseasen-name {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\nspan.medication-transform {\r\n    font-size: 18px;\r\n    width: 100%;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.pad-header>.blue-btn {\r\n    padding: 0px 1px;\r\n    border-right: 0;\r\n}\r\n.blue-btn .btn-custom {\r\n    padding: 16px 30px;\r\n    border-radius: 0;\r\n    min-width: 100%;\r\n    -webkit-box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12);\r\n            box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12);\r\n}\r\n.height-50 {\r\n    min-height: 144px;\r\n}\r\n.vacciSchedule-div>ul>li>div.active,\r\n.follow-ul>li.active,\r\n.frequency-ul li.active-cel,\r\n.duration-ul li.active-cel,\r\n.special-ul li.active-cel,\r\n.precond-ul>li.active-cel,\r\n.special-ul.hindi li.active-cel, \r\n.combined_frequency > li.active-cel, \r\n.combined_duration > li.active-cel,\r\n.combined_instruc > li.active-cel,\r\n.combined_inject > li.active-cel,\r\n.combined_instruc.combined_drop > li.active-cel{\r\n    background-color: #000;\r\n    color: #fff;\r\n    background: #000;\r\n}\r\n.sphere-ul>li.active,\r\n.sphere-ul.right>li.active {\r\n    background-color: #01b0f0;\r\n}\r\n.flex-inner .table {\r\n    margin-bottom: 0;\r\n}\r\n.flex-inner ol {\r\n    margin-bottom: 0;\r\n}\r\n.flex-inner ol>div {\r\n    width: 100%;\r\n    float: left;\r\n    margin-left: -10px;\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n}\r\n.flex-inner ol>li {\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    word-break: break-all;\r\n    padding-right: 15px;\r\n    position: relative;\r\n}\r\n/*.flex-inner .medicationol > li{\r\n    margin-bottom: 8px;\r\n}*/\r\n.flex-inner .followol>li {\r\n    width: 100%;\r\n}\r\ninput.txt50 {\r\n    width: 100px;\r\n}\r\n@media (min-width: 768px) {\r\n    #eyeModal .modal-dialog {\r\n        width: 650px;\r\n    }\r\n}\r\n.help-note {\r\n    font-size: 10px;\r\n    font-style: italic;\r\n}\r\n.selected_preset {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.only-text {\r\n    padding: 8px 5px;\r\n    font-size: 12px;\r\n    border: 1px solid rgba(198, 217, 241, 1);\r\n}\r\n.medication-modal-body .medication-form>.form-group>div.only-text {\r\n    border: 1px solid rgba(198, 217, 241, 1);\r\n}\r\n.selected_preset .medication-form>.duration>div {\r\n    color: #222;\r\n}\r\n.medic-info {\r\n    border-top: 0;\r\n}\r\n.active.lightblue-btn {\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n.combined_modal .modal-dialog {\r\n    width: 830px;\r\n}\r\n.combined_flex {\r\n    width: 100%;\r\n    float: left;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n}\r\n.combined_flex>div {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 33.33%;\r\n    flex: 1 1 33.33%;\r\n    margin: 0 2px;\r\n    border: 1px solid #b9b9b9;\r\n}\r\n.combined_heading {\r\n    width: 100%;\r\n    float: left;\r\n    color: #fff;\r\n    margin: 0;\r\n    padding: 5px 0;\r\n    text-align: center;\r\n    background-color: #00b0f0;\r\n}\r\n.combined_frequency,\r\n.combined_duration,\r\n.combined_instruc,\r\n.combined_inject {\r\n    width: 100%;\r\n    float: left;\r\n    margin: 0;\r\n    padding: 5px 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    list-style-type: none;\r\n}\r\n.combined_frequency>li,\r\n.combined_duration>li,\r\n.combined_instruc>li,\r\n.combined_inject>li {\r\n    width: 70px;\r\n    height: 70px;\r\n    margin: 3px;\r\n    cursor: pointer;\r\n    padding: 0 15px;\r\n    border-radius: 10px;\r\n    border: 1px solid #777;\r\n    text-align: center;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n    display: -webkit-box;\r\n    - display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n.combined_flex>div ul>li.active {\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n.combined_duration>li {\r\n    height: 32px;\r\n}\r\n.combined_flex>div.frquency_cmbnd ul {\r\n    background-color: #F2F2F2;\r\n}\r\n.combined_flex>div.duration_cmbnd ul {\r\n    background-color: #DAEDF4;\r\n}\r\n.combined_flex>div.instr_cmbnd ul.combined_instruc {\r\n    background-color: #EAF1DD;\r\n}\r\n.combined_flex>div.instr_cmbnd ul.combined_inject {\r\n    background-color: #FCEAD9;\r\n}\r\n.combined_flex>div.instr_cmbnd ul.combined_drop {\r\n    background-color: #FCEAD9;\r\n}\r\n.combined_flex>div.duration_cmbnd {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 20%;\r\n    flex: 1 1 20%;\r\n}\r\n.combined_flex>div.instr_cmbnd .combined_inject {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n.combined_flex>div.instr_cmbnd .combined_inject>li {\r\n    width: 100%;\r\n    float: left;\r\n    font-size: 20px;\r\n    height: 62px;\r\n}\r\n.combined_flex>div.instr_cmbnd .combined_instruc>li {\r\n    width: 120px;\r\n    height: 40px;\r\n}\r\n#combinedModal2 .combined_flex>div.instr_cmbnd .combined_instruc>li {\r\n    height: 90px;\r\n}\r\n.combined_flex>div.instr_cmbnd .combined_drop>li {\r\n    width: 50px;\r\n    height: 62px;\r\n}\r\n.combined_flex>div.instr_cmbnd .combined_dosage>li {\r\n    width: 50px;\r\n    height: 39.5px;\r\n}\r\n.btn_green {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    background-color: #8BD053;\r\n}\r\np.help-note {\r\n    margin: 0 0 1px;\r\n}\r\n.btn.sm_green-btn.lang-btn {\r\n    background: -webkit-gradient(linear, left bottom, left top, from(rgb(201, 181, 232)), color-stop(rgb(217, 203, 238)), to(rgb(240, 234, 249)));\r\n    background: linear-gradient(to top, rgb(201, 181, 232), rgb(217, 203, 238), rgb(240, 234, 249));\r\n    background: -o-linear-gradient(to top, rgb(201, 181, 232), rgb(217, 203, 238), rgb(240, 234, 249));\r\n    border:1px solid rgb(201, 181, 232)\r\n}\r\n.btn.sm_green-btn.lang-btn.active, .btn.sm_green-btn.lang-btn:focus {\r\n    background: #000;\r\n    color: #fff;\r\n}\r\n/*.precond-ul>li.active-cel {\r\n    background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.5), rgba(0,0,0,0.1));\r\n}*/\r\nfieldset.fieldset-preset {\r\n    min-width: unset;\r\n    padding: 0 10px;\r\n    border: 1px solid rgba(56, 94, 138, 1);\r\n}\r\nlegend.legend-preset {\r\n    width: 20%;\r\n    border-bottom: none;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n}\r\n.tags-listing-div .fieldset-preset .tags-listing {\r\n    width: 100%;\r\n    float: left;\r\n    overflow: auto;\r\n    max-height: 280px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -moz-flex;\r\n    display: -o-flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    list-style-type: none;\r\n    padding: 0px;\r\n    border-radius: 3px;\r\n}\r\n.li-blocked span {\r\n    font-weight: normal;\r\n}\r\n#translated_div .modal-dialog .modal-header {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -moz-flex;\r\n    display: -o-flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: space-evenly;\r\n        -ms-flex-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n}\r\n#translated_div .modal-dialog .modal-header>* {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n.padview-header {\r\n    width: 100%;\r\n    float: left;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -moz-flex;\r\n    display: -o-flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.pad-view-flx {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 50%;\r\n            flex: 1 1 50%;\r\n    -webkit-flex: 1 1 50%;\r\n    -moz-flex: 1 1 50%;\r\n    -o-flex: 1 1 50%;\r\n}\r\n#previewModal .padview-bodyright {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 9.5px 10px;\r\n    margin-bottom: 10px;\r\n    border: 2px solid #333;\r\n    border-right: 0;\r\n}\r\n.reportImg img{\r\n    display: block;\r\n    max-width: 400px;\r\n    height: 400px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    margin-top:5px;\r\n    margin-bottom:5px;\r\n}\r\n.wrap{\r\n    width:95%;\r\n    max-height:450px;\r\n    min-height:450px; \r\n    overflow-x:hidden;\r\n    overflow-y: scroll; \r\n}\r\n.visit-status{\r\n    color: #002160;\r\n    font-weight: bold;\r\n}\r\n.green{\r\n    color: green;\r\n}\r\n.camera-div {\r\n    height: 550px;\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n.camera-btn {\r\n    text-align: center;\r\n    padding: 15px;\r\n}\r\n.camera-div img{\r\n    max-width: 550px;\r\n}\r\n#webcamModal .modal-title, #uploadedPrescriptionModal .modal-title{\r\n    display: inline-block;\r\n}\r\n.upload-image {\r\n    padding: 3px;\r\n    text-align: center;\r\n}\r\n.upload-image a {\r\n    text-decoration: none;\r\n    color: #333;\r\n    position: absolute;\r\n    top: -8px;\r\n    right: 10px;\r\n}\r\n.upload-image i {\r\n    font-size: 16px;\r\n    padding: 10px;\r\n    background-color: #01b0f0;\r\n    border-radius: 5px;\r\n}\r\n.upload-image .img-thumbnail {\r\n    /*padding: 5px;\r\n    height:70px;\r\n    width:100%;*/\r\n    padding: 5px;\r\n    height: 35px;\r\n    width: 35px;\r\n}\r\n.p-upload {\r\n    margin-bottom: 11px;\r\n}\r\n.close-thik:after {\r\n    content: '\\2716';\r\n}\r\n.cross{\r\n        position: absolute;\r\n    right: 10px;\r\n}\r\n.mg-bottom{\r\n    margin-bottom:20px;\r\n}\r\n/*select{\r\n   -moz-appearance:button!important;\r\n}*/\r\n.cstm-my-tab li.active a{\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n.cstm-my-tab li{\r\n   width:25%;\r\n}\r\n.patient-number{\r\n    font-size: 18px;\r\n}\r\n.in-progress-detail[_ngcontent-c9] .pending_ul[_ngcontent-c9] > li[_ngcontent-c9] > a[_ngcontent-c9] img[_ngcontent-c9]{\r\n    width: 30px;\r\n    height: 30px;\r\n    float: left;\r\n    display: inline-block;\r\n    border-radius: 100px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n.padview-body-header{\r\n    -ms-flex-wrap:wrap;\r\n        flex-wrap:wrap;\r\n}\r\n.padview-body-header>li{\r\n    -webkit-box-flex:1!important;\r\n        -ms-flex:auto!important;\r\n            flex:auto!important;\r\n    margin:0px;\r\n}\r\n.padview-bodyright{\r\n    padding: 01px!important;\r\n}\r\n.rd-2{\r\n\tmargin-left:25px;\r\n}\r\n.wrap-radio{\r\n\tmargin-top:8px;\r\n}\r\n.print-clr{\r\n    color: rgb(150, 195, 78)\r\n}\r\n* {-webkit-box-sizing: border-box;box-sizing: border-box;}\r\n.img-zoom-container {\r\n  position: relative!important;\r\n}\r\n.img-zoom-lens {\r\n  position: absolute!important;\r\n  border: 1px solid #d4d4d4!important;\r\n  /*set the size of the lens:*/\r\n  width: 40px!important;\r\n  height: 40px!important;\r\n}\r\n.img-zoom-result {\r\n  border: 1px solid #d4d4d4!important;\r\n  /*set the size of the result div:*/\r\n  width: 300px!important;\r\n  height: 300px!important;\r\n}\r\n.fieldDesign\r\n{\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n}\r\n.fieldDesign.input-group-addon\r\n{\r\n    background-color: #fff!important;\r\n    border: 1px solid rgba(56, 94, 138, 1)!important;\r\n    border-radius: 6px 0 0 6px!important;\r\n}\r\n.fieldDesign span\r\n{\r\n    border: 1px solid rgba(56, 94, 138, 1);\r\n    border-radius:6px 0px 0px 6px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-three-layout/smartassistant/smartassistant.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\t\n\n<div class=\"smartassitant-sec\">\n\t<!-- <div class=\"container-fluid\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-3 col-lg-offset-1 col-md-4 col-sm-12 col-xs-12\">\n\t      \t\t<div class=\"cnsulted-doc-head text-center\">\n\t      \t\t\t<h3>Consulting Doctor:</h3>\n\t      \t\t</div>\n\t      \t</div>\n\t      \t<div class=\"col-lg-3 col-md-4 col-sm-12 col-xs-12\">\n\t      \t\t<div class=\"cstm-drpdown-cnsulted-doc\">\n\t      \t\t\t<span  class=\"caret cstm-caret-big\"></span>\n\t\t\t        <select [(ngModel)]=\"consultationDoctor\" (change)=\"filterAppointmentsByDoctor(consultationDoctor)\">\n\t\t\t\t        <option selected=\"\" disabled=\"\" value=\"\">CONSULTING DOCTOR </option>\n                        <option value=\"{{doctor._id}}\" *ngFor=\"let doctor of dataDoctors\"> Dr. {{doctor.first_name}}</option>\n\t\t\t    \t</select>\n\t      \t\t</div>\n\t      \t</div>\n\t      \t<div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n\t      \t\t<div class=\"consulation-progress-div\"> \n\t      \t\t\t<div class=\"in-progress\">Consultation in Progress </div>\n\t      \t\t\t<div class=\"in-progress-detail\">\n\t\t      \t\t\t<ul class=\"list-group pending_ul\">\n\t                        <li class=\"\">\n\t                            <a href=\"javascript:void(0)\" *ngIf=\"consultingPatient.length>0\">\n\t                                <div class=\"patient-number\"><span>{{dataDispensedPatients.length+1}}. </span></div>\n\t                                <img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!consultingPatient[0].pateintPic\"/>\n\t                                <img src=\"{{pateintPicPath}}{{consultingPatient[0].pateintPic}}\" class=\"img-responsive\" *ngIf=\"consultingPatient[0].pateintPic\"/>\n\t                                <div class=\"patient-text\">\n\t                                    <p class=\"patient-name\">{{consultingPatient[0].pateintName}} </p>\n\t                                    <p class=\"patient-gender\">{{consultingPatient[0].age}} {{consultingPatient[0].gender}}</p>\n\t                                </div>\n\t                            </a>\n\t                        </li>\n\t                    </ul>\n                    </div>\n\t      \t\t</div>\n\t    \t</div>\n\t\t</div>\n\t</div> -->\n\t\n\t<div class=\"col-md-12 col-sm-12 col-xs-12\" style=\"position: fixed; bottom:0; z-index: 99; border-top:1px solid #efefef;background-color: #fff;\">\n\t\t<div class=\"dashboard-perscpt\">\n\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12 toatl-reg text-center\">\n\t\t\t\t<h5 class=\"blue-color\"> Appointments not registered so far - {{dataAppointment.length}} </h5>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-3 col-sm-12 col-xs-12 text-center\">\n\t\t\t\t<h5 align=\"center\" class=\"blue-color\">Registrations so far – {{dataRegistration.length+dataDispensedPatients.length}}</h5>\n\t\t\t</div>\n\t            <!--div class=\"col-lg-2 col-md-3 col-sm-12 col-xs-12 main-date text-center\">\n\t                <h5> {{day}} {{month}} , {{year}} </h5>\n\t            </div-->\n\t\t\t\t<!--div class=\"col-lg-2 col-md-3 col-sm-12 col-xs-12 main-date text-center\">\n\t                <h5> {{day}} {{month}} , {{year}} </h5>\n\t            </div-->\n\t            <div class=\"col-lg-5 col-md-3 col-sm-12 col-xs-12 main-date text-center \">\n\t            \t<h5 class=\"pull-left\" style=\"margin-top:14px;\">Consultation in Progress | </h5>\n\t            \t<div class=\"in-progress-detail\">\n\t            \t\t<ul class=\"list-group pending_ul\">\n\t            \t\t\t<li class=\"\">\n\t            \t\t\t\t<a href=\"javascript:void(0)\" *ngIf=\"consultingPatient.length>0\">\n\t            \t\t\t\t\t<div class=\"patient-number\"><span>{{dataDispensedPatients.length+1}}. </span></div>\n\t            \t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!consultingPatient[0].pateintPic\"/>\n\t            \t\t\t\t\t<img src=\"{{pateintPicPath}}{{consultingPatient[0].pateintPic}}\" class=\"img-responsive\" *ngIf=\"consultingPatient[0].pateintPic\"/>\n\t            \t\t\t\t\t<div class=\"patient-text\">\n\t            \t\t\t\t\t\t<span class=\"patient-name\">{{jsUcfirst(consultingPatient[0].pateintName)}} </span >\n\t            \t\t\t\t\t\t<span  class=\"patient-gender\">{{consultingPatient[0].age}} {{consultingPatient[0].gender}}</span >\n\t            \t\t\t\t\t</div>\n\t            \t\t\t\t</a>\n\t            \t\t\t</li>\n\t            \t\t</ul>\n\t            \t</div>\n\t            </div>\n\t        </div>\n\t    </div>\n\n\t    <div class=\"smartassistant-panel\">\n\t    \t<div class=\"patient-panel\">\n\t    \t\t<div class=\"\">\n\t    \t\t\t<div class=\"panel-wrap\">\n\t    \t\t\t\t<div class=\"col-lg-12\">\n\t    \t\t\t\t\t<div _ngcontent-c9=\"\" class=\"inner-tab\">\n\t    \t\t\t\t\t\t<ul _ngcontent-c9=\"\" class=\"nav nav-tabs cstm-my-tab\" role=\"tablist\">\n\t\t\t\t\t\t\t\t<!-- <li _ngcontent-c9=\"\" role=\"presentation\" ng-reflect-ng-class=\"active\" class=\"ng-star-inserted active\"><a _ngcontent-c9=\"\" aria-controls=\"total\" data-toggle=\"tab\" href=\"#pd\" role=\"tab\"><span _ngcontent-c9=\"\" class=\"ng-star-inserted\">Dr.</span>  Vikas</a></li>\n\t\t\t\t\t\t\t\t<li _ngcontent-c9=\"\" role=\"presentation\" class=\"ng-star-inserted\" ng-reflect-ng-class=\"\"><a _ngcontent-c9=\"\" aria-controls=\"total\" data-toggle=\"tab\" href=\"#pd\" role=\"tab\"><span _ngcontent-c9=\"\" class=\"ng-star-inserted\">Dr.</span>  Akshay</a></li>\n\t\t\t\t\t\t\t\t<li _ngcontent-c9=\"\" role=\"presentation\" ng-reflect-ng-class=\"\" class=\"ng-star-inserted\"><a _ngcontent-c9=\"\" aria-controls=\"total\" data-toggle=\"tab\" href=\"#pd\" role=\"tab\"><span _ngcontent-c9=\"\" class=\"ng-star-inserted\">Dr.</span>  Gagandeep</a></li>\n\t\t\t\t\t\t\t\t<li _ngcontent-c9=\"\" role=\"presentation\" ng-reflect-ng-class=\"\" class=\"ng-star-inserted\"><a _ngcontent-c9=\"\" aria-controls=\"total\" data-toggle=\"tab\" href=\"#pd\" role=\"tab\"><span _ngcontent-c9=\"\" class=\"ng-star-inserted\">Dr.</span>  Gagandeep</a></li>\n\t\t\t\t\t\t\t\t<li _ngcontent-c9=\"\" role=\"presentation\" ng-reflect-ng-class=\"\" class=\"ng-star-inserted\"><a _ngcontent-c9=\"\" aria-controls=\"total\" data-toggle=\"tab\" href=\"#pd\" role=\"tab\"><span _ngcontent-c9=\"\" class=\"ng-star-inserted\">Dr.</span>  Gagandeep</a></li> -->\n\t\t\t\t\t\t\t\t<!-- *ngIf=\"i!=dataDoctors.length-1\" -->\n\t\t\t\t\t\t\t\t<li role=\"presentation\" [ngClass]=\"(doctor._id == consultationDoctor)?'active':''\"*ngFor=\"let doctor of dataDoctors;let i =index\"><a href=\"#pd\" aria-controls=\"total\" role=\"tab\" data-toggle=\"tab\" (click)=\"filterAppointmentsByDoctor(doctor._id)\"> <span>Dr.</span>  {{doctor.first_name}}</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-12 pd-0\">\n\t\t\t\t\t\t<div class=\"panel panel-success\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\tDispensed Patients ({{dataDispensedPatients.length}})\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t<ul class=\"list-group pending_ul\">\n\t\t\t\t\t\t\t\t\t<!--p>{{dataDispensedPatients | json}} </p-->\n\t\t\t\t\t\t\t\t\t<li class=\"\" *ngFor=\"let item of dataDispensedPatients; let i = index\"  style=\"position: relative;\">\n\t\t\t\t\t\t\t\t\t\t<span (click)=\"clickModal(item)\" style=\"    height: 28px;\n\t\t\t\t\t\t\t\t\t\tbackground: #01b0f0;\n\t\t\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\t\t\t\t\tz-index: 999;\n\t\t\t\t\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\t\t\t\t\tline-height: 2.2;\n\t\t\t\t\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t\t\t\t\t\tpadding: 0px 8px;\">Reciept</span>\t\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"position: relative;z-index: 0;\" (click)=\"openPrescriptionPreview(item)\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"patient-number\"><span> {{dataDispensedPatients.length-i}}. </span></div>\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!item.registration.pateintPic && item.registration.gender=='Male'\"/>\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/female.png\" class=\"img-responsive\" *ngIf=\"!item.registration.pateintPic && item.registration.gender=='Female'\"/>\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pateintPicPath}}{{item.registration.pateintPic}}\" class=\"img-responsive\" *ngIf=\"item.registration.pateintPic\"/>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"patient-text pos-ab\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"patient-name\">{{jsUcfirst(item.registration.pateintName)}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"!item.registration.doctor_id.digital_precipitation\">\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i style=\"color: green\" *ngIf = \"item.image\" class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"item.registration.doctor_id.digital_precipitation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-check green\" *ngIf=\"item.precription.medicationComplete || item.webcam_pic\"></i> \n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"patient-gender\"><span *ngIf=\"item.registration.age_in_years > 0\">{{item.registration.age_in_years}} </span><span *ngIf=\"item.registration.age_in_months > 0\">{{item.registration.age_in_months}} Months,  </span>{{item.registration.gender}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"patient-duration\" *ngIf = \"!item.registration.doctor_id.digital_precipitation && !item.image\">Upload Prescription</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"patient-duration\"><i> Duration: <span class=\"color-blue\"> {{item.precription.minutes}} min {{item.precription.seconds}} sec </span> </i></p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<span _ngcontent-c4=\"\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"patient-consult-status\"><i> {{item.registration.status}}</i> </p>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-7 col-sm-7 col-xs-12\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"panel pending-patient-box\">\n\t\t\t\t\t\t\t\t<div class=\"pending-heading\"> \n\t\t\t\t\t\t\t\t\tPending Patients ({{dataRegistration.length}}) \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<ul class=\"list-group pending_ul\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"\" *ngFor=\"let item of dataRegistration; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-times cross\" (click)=\"deleteReg(item)\"></i> \n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"patient-number\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"consultingPatient.length<1\"> {{dataDispensedPatients.length+1+i}}. </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"consultingPatient.length>0\"> {{dataDispensedPatients.length+2+i}}. </span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!item.pateintPic && item.gender=='Male'\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/female.png\" class=\"img-responsive\" *ngIf=\"!item.pateintPic && item.gender=='Female'\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pateintPicPath}}{{item.pateintPic}}\" class=\"img-responsive\" *ngIf=\"item.pateintPic\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"patient-text\" (click)=\"updateReg(item)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"patient-textwrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-namedata\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"patient-name\">{{jsUcfirst(item.pateintName)}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"patient-gender\"><span *ngIf=\"item.age_in_years\">{{item.age_in_years}}</span><span *ngIf=\"item.age_in_years==0\">{{item.age_in_months}} Months, </span> {{item.gender}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"patient-date\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"visit-status\" *ngIf=\"item.lastVisit.status  == true\">Total Visits: {{item.lastVisit.count}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.lastVisit.status  == true\"> Last Visit - {{item.lastVisit.time | date:'mediumDate' }}</span> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.lastVisit.status  == false\">New</span>  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"patient-address\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p> {{item.location}} <br/> {{item.city}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!--div style=\"margin-left: 43em\" *ngIf=\"i==0 || i==1\"><i class=\"fa fa-print\" *ngIf = \"!item.doctor_id.digital_precipitation\" (click)=\"digitalPresc(item, dataDispensedPatients.length+1+i)\"></i>  </div-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"margin-left: 43em\" *ngIf=\"i==0 || i==1 \"><i class=\"fa fa-print\" *ngIf = \"!item.doctor_id.digital_precipitation && item.print == 0\" (click)=\"digitalPresc(item, dataDispensedPatients.length+1+i)\"></i>  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"margin-left: 43em\" *ngIf=\"i==0 || i==1 \"><i class=\"fa fa-print print-clr\" *ngIf = \"!item.doctor_id.digital_precipitation && item.print == 1\" (click)=\"digitalPresc(item, dataDispensedPatients.length+1+i)\"></i>  </div>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t<span _ngcontent-c4=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"patient-consult-status\"><i> {{item.type}} \n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.type=='Appointment'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.appointmentTime.startHour}}:{{item.appointmentTime.startMin}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</i> </p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"pending-exp-time color-blue\" *ngIf=\"timeFetched=='fetched'\">{{getRegistrationTime(item.waitingTime)}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"pending-wait-time\" *ngIf=\"timeFetched=='fetched'\"><i> Waiting time: {{item.waitingTime}} min</i> </p>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\n\t                                        <!-- <span>\n\t                                        \t<button class=\"btn btn-outline\">Cancel</button>\n\t                                        </span> -->\n\t                                    </li>\n\t                                    <!-- <button type=\"button\" class=\"fa fa-print\"  data-toggle=\"modal\" data-target=\"#myModel\"></button> -->\n\t                                </ul>\n\n\t                            </div>\n\t                            \n\t                        </div>\n\n\t                    </div>\n\t                </div>\n\t            </div>\n\n\t        </div>\n\t    </div>\n\t</div>\n</div>\n<div>\n\t<button (click)=\"clickModal()\">Open Modal</button>\n</div>\n<div class=\"modal fade cus-preview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" *ngIf=\"doctorData\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<div>\n\t\t\t\t\t<h4 class=\"modal-title\"> Preview </h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline btn_updte\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" id=\"previewModalPdf\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"presc-modal-body\">\n\t\t\t\t\t\t<div class=\"pad-view\">\n\t\t\t\t\t\t\t<div class=\"padview-header\">\n\t\t\t\t\t\t\t\t<div class=\"pad-view-flx col-lg-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\" style=\"margin-bottom: 0px;\">\n\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{doctorData.first_name}} </h1>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group qual\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"color-purple\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"checkOptionOfPad('Specialization')\">({{doctorData.specialization}})</span><br>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"checkOptionOfPad('Qualifications')\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let data of doctorData.qualification;let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.value}} <span *ngIf=\"i!=doctorData.qualification.length-1\">,</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"checkOptionOfPad('registration_no')\"> Registration. <span class=\"color-purple\"> {{doctorData.registration_no}} </span> </p>\n\t\t\t\t\t\t\t\t\t\t<p> <span class=\"color-purple\">{{getExperienceYearOfDoc}} years of experience</span></p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"checkOptionOfPad('Professional_affiliation')\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"color-purple\" *ngFor=\"let pa of doctorData.professional_affiliation;let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{pa.value}}<span *ngIf=\"i!=doctorData.professional_affiliation.length-1\">,</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"pad-view-flx col-lg-8\">\n\t\t\t\t\t\t\t\t\t<ul class=\"clinic-detail\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"clinic-name\" *ngIf=\"adminDoctor.clinic_details\">\n\t\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_clinicName\"> {{adminDoctor.clinic_details.clinic_name}} </h1>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"adminDoctor.clinic_details\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"margin-top: -9px;\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t{{adminDoctor.clinic_details.address}}, {{adminDoctor.clinic_details.area}}, {{adminDoctor.clinic_details.city}}, {{adminDoctor.clinic_details.state}}</li>\n\t\t\t\t\t\t\t\t\t<li class=\"li-cstm\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\" *ngIf=\"adminDoctor.clinic_details\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"for-apt\"> For appointments </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"adminDoctor.clinic_details\"> Tel: {{adminDoctor.clinic_details.std_code}}-{{adminDoctor.clinic_details.landline}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p> Mb: +91-{{adminDoctor.clinic_details.mobile}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Website: {{adminDoctor.clinic_details.website}}</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p>Email: {{adminDoctor.email}}</p>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"text-center\">\n\t\t\t\t\t\t\t<label id=\"translated_appointmentText\"> {{getHeaderText}} </label>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class=\"padview-body\">\n\t\t\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n\t\t\t\t\t\t\t\t<div class=\"emergency-wrap\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group emrgency-consult\" *ngIf=\"dispensedPatient.type=='Emergency'\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"small\" id=\"translated_emergencyText\"><i> Emergency Consultation </i> </p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group schdl\" *ngIf=\"checkOptionOfPad('Clinic_schedule')\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\" color-blue\"> Schedule: </h5>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\"> \n\t\t\t\t\t\t\t\t\t\t\t<span><strong style=\"display:block; width:110px;word-break:break-word\"> {{shift.day}}: </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\" style=\"white-space:nowrap\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.hour=='0'\">{{time.fromTime.hour}}0:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.hour!='0'\">{{time.fromTime.hour}}:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.minute=='0'\">{{time.fromTime.minute}}0 –</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.minute!='0'\">{{time.fromTime.minute}} –</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.toTime.hour=='0'\">{{time.toTime.hour}}0:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.toTime.hour!='0'\">{{time.toTime.hour}}:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.toTime.minute=='0'\">{{time.toTime.minute}}0</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.toTime.minute!='0'\">{{time.toTime.minute}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\"> \n\t\t\t\t\t\t\t\t\t\t\t<span><strong> {{shift.day}}: </strong> Closed \n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div id=\"translated_treatmentText\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Available Treatments: </h5>\n\t\t\t\t\t\t\t\t\t\t<ul style=\"padding-left:15px!important;\">\n\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let treat of doctorData.expertise\">{{treat.value}}</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"doctorData.clinic_services_status=='Yes' && checkOptionOfPad('Available_services')\" id=\"translated_servicesText\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Available Services: </h5>\n\t\t\t\t\t\t\t\t\t\t<ul style=\"padding-left:15px!important;\">\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy\">Pharmacy</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"doctorData.clinic_services.Clinic_IPD\">IPD</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let cs of doctorData.clinic_services.ClinicServicesDetail\"> {{cs}} </li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let cs of doctorData.clinic_services.OtherClinicService\"> {{cs.value}} </li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n\t\t\t\t\t\t\t\t<div class=\"padview-bodyright\">\n\t\t\t\t\t\t\t\t\t<ul class=\"padview-body-header\">\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Prescription ID </div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\">{{todayDate | date: 'ddMMyyyy'}}-{{patientData.id}}</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline \" > Name </div>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"patientData.pateintName\">{{jsUcfirst(patientData.pateintName)}}</span>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<div  class=\"text-underline\"> Age/Sex </div>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"patientData.age\">{{patientData.age_in_year}}</span> \n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"!patientData.age\">{{patientData.new_age}}, </span> \n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"patientData.gender\">{{patientData.gender}}</span>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Weight (kg)</div>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"patientData.weight\">{{patientData.weight}}</span>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Height (cm)</div>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"patientData.height\">{{patientData.height}}</span>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{todayDate | date: 'dd MMM,yyyy'}}</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n                                            <!-- <li>\n                                                <div class=\"text-underline\" *ngIf = \"patientData.temp\"> Temperature(0F)</div>\n                                                <span >{{patientData.temp}}</span>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\" *ngIf = \"patientData.pulse\"> Pulse (per min)</div>\n                                                <span >{{patientData.pulse}}</span>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\" *ngIf = \"patientData.bp\"> Blood Pressure (mmHg)</div>\n                                                <span >{{patientData.bp}}</span>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"  *ngIf = \"patientData.dia\">DIA</div>\n                                                <span>{{patientData.dia}}</span>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\" *ngIf = \"patientData.rbs\"> RBS (mg/dL)</div>\n                                                <span >{{patientData.rbs}}</span>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\" *ngIf = \"patientData.spo\"> SpO2 (%)</div>\n                                                <span >{{patientData.spo}}</span>\n                                            </li> -->\n                                        </ul>\n                                        <ul class=\"padview-patient\">\n                                        \t<li class=\"img-patient\">\n                                        \t\t<img src=\"{{pateintPicPath}}{{patientData.pateintPic}}\" class=\"img-responsive\" *ngIf=\"patientData.pateintPic\"/>\n                                                <!--img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!patientData.pateintPic && patientData.gender=='Male'\"  />\n                                                \t<img src=\"./assets/imgs/female.png\" class=\"img-responsive\" *ngIf=\"!patientData.pateintPic && patientData.gender=='Female'\"  /-->\n                                                </li>\n                                                <li *ngIf=\"preConditionComplete==true && finalPreConditions.length>0\">\n                                                \t<div class=\"pat-heading\"><span id=\"translated_PreCondHeading\"> Existing health status </span> </div>\n                                                \t<ul class=\"pat-type\">\n                                                \t\t<li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n                                                \t</ul>\n                                                </li>\n                                                <li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected.length>0\">\n                                                \t<div class=\"pat-heading\"><span id=\"translated_BIHeading\"> Body Indicators</span> </div>\n                                                \t<ul class=\"pat-type\">\n                                                \t\t<li  *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n                                                \t\t</li>\n                                                \t</ul>\n                                                </li>\n                                                <li *ngIf=\"allergyComplete==true && finalAllergy.length>0\">\n                                                \t<div class=\"pat-heading\"><span id=\"translated_allergyHeading\"> Allergy</span> </div>\n                                                \t<ul class=\" pat-type\" style=\"padding-left:15px\">\n                                                \t\t<li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n                                                \t</ul>\n                                                </li>\n                                            </ul>\n                                            <div class=\"middle-body\">\n                                            \t<div class=\"\">\n                                            \t\t<div class=\"number-div\" *ngIf=\"findingsComplete==true && findingsSelected.length>0\">\n                                            \t\t\t<div class=\"pat-heading\"><span id=\"translated_PTHeading\"> Patient's Complaints</span> </div>\n                                            \t\t\t<ul class=\"numberol\">\n                                            \t\t\t\t<li *ngFor=\"let data of findingsSelected\"> {{data.value}} </li>\n                                            \t\t\t</ul>\n                                            \t\t</div>\n                                            \t\t<div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected.length>0\">\n                                            \t\t\t<div class=\"pat-heading\"><span id=\"translated_sympHeading\"> Symptoms</span> </div>\n                                            \t\t\t<ul class=\"numberol\">\n                                            \t\t\t\t<li *ngFor=\"let data of symptomsSelected\"> {{data.value}} </li>\n                                            \t\t\t</ul>\n                                            \t\t</div>\n                                            \t\t<div class=\"number-div\" *ngIf=\"diagnosisComplete==true && diagnosisSelected.length>0\">\n                                            \t\t\t<div class=\"pat-heading\"><span id=\"translated_diagnosisHeading\"> Diagnosis</span> </div>\n                                            \t\t\t<ul class=\"numberol\">\n                                            \t\t\t\t<li *ngFor=\"let data of diagnosisSelected\">{{data.value}}</li>\n                                            \t\t\t</ul>\n                                            \t\t</div>\n                                            \t</div>\n                                            \t<div class=\"\" *ngIf=\"medicationComplete==true\">\n                                            \t\t<div class=\"padview-medic\" id=\"translated_medication\">\n                                            \t\t\t<div class=\"pat-heading\"><span> Medicines</span> </div>\n                                            \t\t\t<ol style=\"padding-left:10px\">\n                                            \t\t\t\t<li *ngFor=\"let data of tempMedicationArray\">\n                                            \t\t\t\t\t<span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n                                            \t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                            \t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                            \t\t\t\t\t</span>\n                                            \t\t\t\t</span>\n                                            \t\t\t\t<span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n                                            \t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                            \t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                            \t\t\t\t</span>\n                                            \t\t\t</span>\n                                            \t\t\t<span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n                                            \t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n                                            \t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                            \t\t\t</span>\n                                            \t\t</span>\n                                            \t\t<span *ngIf=\"data.name=='Drops'\">\n                                            \t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                            \t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                            \t\t</span>\n                                            \t</span>\n                                            </li>\n                                        </ol>\n                                    </div>\n                                    <div class=\"number-div vac-div\">\n                                    \t<div *ngIf=\"vaccinationComplete==true\">\n                                    \t\t<div class=\"pat-heading\" id=\"translated_VaccinationHeading\"> <span> Vaccination</span> </div>\n                                    \t\t<ul *ngIf=\"currentVaccinationComplete == true\" class=\"medicationol\">\n                                    \t\t\t<div><b>Current</b></div>\n                                    \t\t\t<li *ngFor=\"let data of finalCurrentVaccinationArray\">{{data}}</li>\n                                    \t\t</ul>\n                                    \t\t<ul *ngIf=\"dueVaccinationComplete == true\" class=\"medicationol\">\n                                    \t\t\t<span *ngIf=\"finalDueVaccinationArray.length>0\"><strong>Due </strong>({{vaccinationDate.toString().substr(4,11)}})\n                                    \t\t\t</span>\n                                    \t\t\t<li *ngFor=\"let data of finalDueVaccinationArray\">{{data}}</li>\n                                    \t\t</ul>\n                                    \t</div>\n                                    \t<div class=\"\" *ngIf=\"instructionsComplete==true && instructionsSelected.length>0\" id=\"translated_instHeading\">\n                                    \t\t<div class=\"pat-heading\"> <span> Instructions</span> </div>\n                                    \t\t<ul class=\"numberol\" start=\"1\">\n                                    \t\t\t<li *ngFor=\"let data of instructionsSelected\">{{data}}</li>\n                                    \t\t</ul>\n                                    \t</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"third-body\">\n                            \t<div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray.length\">\n                            \t\t<div class=\"pat-heading\"> <span id=\"translated_invHeading\"> Investigation</span> </div>\n                            \t\t<ol class=\"numberol pl10\">\n                            \t\t\t<li *ngFor=\"let data of investigationArray\">\n                            \t\t\t\t<span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n                            \t\t\t\t\t<span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n                            \t\t\t\t\t\t<span *ngIf=\"i!=data.values.length-1\">\\</span>\n                            \t\t\t\t\t</span>\n                            \t\t\t\t</span>\n                            \t\t\t\t<span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n                            \t\t\t\t\t<span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n                            \t\t\t\t</span>\n                            \t\t\t</li>\n                            \t\t</ol>\n                            \t</div>\n                            \t<div class=\"number-div\" *ngIf=\"treatmentComplete==true\" id=\"translated_OTHeading\">\n                            \t\t<div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n                            \t\t<ul class=\"numberol\">\n                            \t\t\t<li *ngFor=\"let data of treatmentArray;let i =index\">\n                            \t\t\t\t<span *ngIf=\"data.name=='Lifestyle Changes'\">\n                            \t\t\t\t\t{{data.name}} - <span *ngFor=\"let value of data.lifestyle;let j = index\">{{value.value}} <span *ngIf=\"j!=data.lifestyle.length-1\">\\</span></span>\n                            \t\t\t\t</span>\n                            \t\t\t\t<span *ngIf=\"data.name=='Physiotherapy' || data.name=='Fomentation'\">\n                            \t\t\t\t\t{{data.name}} - {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                            \t\t\t\t</span>\n                            \t\t\t\t<span *ngIf=\"data.name=='Plaster'\">\n                            \t\t\t\t\t<span class=\"notranslate\">{{data.name}}</span> - on <span class=\"notranslate\">{{data.Injury_Area}}</span> of {{data.plaster_type}} for {{data.Duration}} days \n                            \t\t\t\t</span>\n                            \t\t\t\t<span *ngIf=\"data.name=='Gargle' || data.name=='Dressing' || data.name=='Bandage' || data.name=='Other'\">\n                            \t\t\t\t\t<span *ngIf=\"data.name!='Other'\">{{data.name}} - </span>{{data.med_name[0].value}} {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                            \t\t\t\t</span>\n                            \t\t\t\t<span>\n                            \t\t\t\t\t{{data.value}}\n                            \t\t\t\t</span>\n                            \t\t\t</li>\n                            \t\t</ul>\n                            \t</div>\n                            </div>\n                            <div class=\"note-box\">\n                            \t<div class=\"note-innerbox\">\n                            \t\t<div class=\"note-innerdiv\">\n                            \t\t\t<div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray.length>0\">\n                            \t\t\t\t<div class=\"pat-heading\"> <span id=\"translated_surgHeading\"> Recommended Surgery</span> </div>\n                            \t\t\t\t<ul class=\"numberol\">\n                            \t\t\t\t\t<li *ngFor=\"let data of surgerySelectedArray\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n                            \t\t\t\t</ul>\n                            \t\t\t</div>\n                            \t\t\t<div class=\"number-div\" *ngIf=\"refer_status\" style=\"padding:0 30px;\">\n                            \t\t\t\t<div class=\"pat-heading\"> <span> Referred To</span> </div>\n                            \t\t\t\t<p> {{referDetail.doctor_name}} </p>\n                            \t\t\t</div>\n                            \t\t</div>\n                            \t</div>\n                            \t<div class=\"\" *ngIf=\"eyePresComplete==true\">\n                            \t\t<div class=\"pat-heading\"> <span id=\"translated_eyeHeading\"> Eye Prescription</span> </div>\n                            \t\t<div class=\"table-responsive\">\n                            \t\t\t<table class=\"table table-bordered table-striped cstm-table\">\n                            \t\t\t\t<thead>\n                            \t\t\t\t\t<tr>\n                            \t\t\t\t\t\t<th> Eye </th>\n                            \t\t\t\t\t\t<th> Sphere </th>\n                            \t\t\t\t\t\t<th> Cylinder </th>\n                            \t\t\t\t\t\t<th> Axis </th>\n                            \t\t\t\t\t\t<th> Add </th>\n                            \t\t\t\t\t\t<th> PD (mm) </th>\n                            \t\t\t\t\t</tr>\n                            \t\t\t\t</thead>\n                            \t\t\t\t<tbody>\n                            \t\t\t\t\t<tr>\n                            \t\t\t\t\t\t<td> Right (OD): </td>\n                            \t\t\t\t\t\t<td> {{finalRightOD.sphere}} </td>\n                            \t\t\t\t\t\t<td> {{finalRightOD.cylinder}} </td>\n                            \t\t\t\t\t\t<td> {{finalRightOD.axis}} </td>\n                            \t\t\t\t\t\t<td> {{finalRightOD.add}} </td>\n                            \t\t\t\t\t\t<td> {{finalRightOD.pd}} </td>\n                            \t\t\t\t\t</tr>\n                            \t\t\t\t\t<tr>\n                            \t\t\t\t\t\t<td> Left (OS): </td>\n                            \t\t\t\t\t\t<td> {{finalLeftOD.sphere}} </td>\n                            \t\t\t\t\t\t<td> {{finalLeftOD.cylinder}} </td>\n                            \t\t\t\t\t\t<td> {{finalLeftOD.axis}} </td>\n                            \t\t\t\t\t\t<td> {{finalLeftOD.add}} </td>\n                            \t\t\t\t\t\t<td> {{finalLeftOD.pd}} </td>\n                            \t\t\t\t\t</tr>\n                            \t\t\t\t</tbody>\n                            \t\t\t</table>\n                            \t\t</div>\n                            \t</div>\n                            </div>\n                            <div class=\"third-body\">\n                            \t<div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n                            \t\t<div class=\"pat-heading\"> <span> Follow-Up</span></div>\n                            \t\t<p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n                            \t\t<p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n                            \t</div>\n                            </div>\n                            <div class=\"forth-body\">\n                            \t<div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n                            \t\t<!-- <div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div> -->\n                            \t</div>\n                            \t<div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"padview-footer\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n                \t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n                \t\t<div class=\"padview-powered\">\n                \t\t\t<div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n                \t\t\t<div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com</div>\n                \t\t</div>\n                \t</div>\n                \t<div class=\"col-md-12 col-sm-4 col-xs-12\" id=\"translated_footer\">\n                \t\t<div class=\"legal\">\n                \t\t\t<h3>{{getFooterText}}</h3>\n                \t\t</div>\n                \t</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n</div>\n</div>\n\n<div class=\"modal fade cus-preview\" id=\"previewModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" *ngIf=\"doctorData\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content show-default\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<div>\n\t\t\t\t\t<h4 class=\"modal-title\"> Preview </h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline btn_updte\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"presc-modal-body\">\n\t\t\t\t\t\t<div class=\"pad-view\">\n\t\t\t\t\t\t\t<div class=\"padview-header\">\n\t\t\t\t\t\t\t\t<div class=\"pad-view-flx col-lg-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\" style=\"margin-bottom: 0px;\">\n\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{doctorData.first_name}} </h1>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group qual\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"color-purple\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"checkOptionOfPad('Specialization')\">({{doctorData.specialization}})</span><br>\n                                            <!--span *ngIf=\"checkOptionOfPad('Qualifications')\">\n                                                <span *ngFor=\"let data of doctorData.qualification;let i = index\">\n                                               {{data.value}} <span *ngIf=\"i!=doctorData.qualification.length-1\">,</span>\n                                                </span>\n                                            </span-->\n\n                                            <span *ngIf=\"checkOptionOfPad('Qualifications')\">\n                                            \t<span *ngFor=\"let data of doctorData.qualification;let i = index\">\n                                            \t\t{{data.value}} <span *ngIf=\"i!=doctorData.qualification.length-1\">,</span>\n                                            \t</span> (Reg. <span class=\"color-purple\"> {{doctorData.registration_no}})\n                                            \t</span>\n                                            </span>\n\n                                        </p>\n                                        <!--p *ngIf=\"checkOptionOfPad('registration_no')\"> Registration: <span class=\"color-purple\"> {{doctorData.registration_no}} </span> </p-->\n                                        <p><span class=\"color-purple\">{{getExperienceYearOfDoc}} years of experience</span></p>\n                                        <p *ngIf=\"checkOptionOfPad('Professional_affiliation')\">\n                                        \t<span class=\"color-purple\" *ngFor=\"let pa of doctorData.professional_affiliation;let i=index\">\n                                        \t\t{{pa.value}}<span *ngIf=\"i!=doctorData.professional_affiliation.length-1\">,</span>\n                                        \t</span>\n                                        </p>\n                                    </div>\n                                </div>\n\n                                <div class=\"pad-view-flx col-lg-8\">\n                                \t<ul class=\"clinic-detail\">\n                                \t\t<li class=\"clinic-name\" *ngIf=\"checkOptionOfPad('Clinic_name')\">\n                                \t\t\t<h1 id=\"translated_clinicName\"> {{adminDoctor.clinic_details.clinic_name}} </h1>\n                                \t\t</li>\n                                \t\t<li *ngIf=\"checkOptionOfPad('Clinic_address')\" style=\"margin-top: -9px;\">\n\n                                \t\t{{adminDoctor.clinic_details.address}}, {{adminDoctor.clinic_details.area}}, {{adminDoctor.clinic_details.city}}, {{adminDoctor.clinic_details.state}}</li>\n                                \t\t<li class=\"li-cstm\">\n                                \t\t\t<div class=\"row\" *ngIf=\"checkOptionOfPad('Appointment_contacts')\">\n                                \t\t\t\t<div class=\"col-lg-12\">\n                                \t\t\t\t\t<h5 class=\"for-apt\" style=\"margin-top:5px;\"> <b>For appointments </b></h5>\n                                \t\t\t\t\t<p *ngIf=\"adminDoctor.clinic_details.landline\"> Tel: {{adminDoctor.clinic_details.std_code}}-{{adminDoctor.clinic_details.landline}}</p>\n                                \t\t\t\t\t<p> Mb: +91-{{adminDoctor.clinic_details.mobile}} </p>\n                                \t\t\t\t\t<p>Website: {{adminDoctor.clinic_details.website}}</p>\n                                \t\t\t\t</div>\n                                \t\t\t</div>\n                                \t\t\t<p>Email: {{adminDoctor.email}}</p>\n                                \t\t</li>\n                                \t</ul>\n                                </div>\n\n\n                            </div>\n                            <p class=\"text-center\">\n                            \t<label *ngIf = \"getHeaderText\"> {{getHeaderText}} </label>\n                            </p>\n                            <div class=\"padview-body\">\n                            \t<div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n                            \t\t<div class=\"emergency-wrap\">\n                            \t\t\t<div class=\"form-group emrgency-consult\" *ngIf=\"dispensedPatient.type=='Emergency'\">\n                            \t\t\t\t<p class=\"small\" id=\"translated_emergencyText\"><i> Emergency Consultation </i> </p>\n                            \t\t\t</div>\n                            \t\t\t<div class=\"form-group schdl\" *ngIf=\"newDoctorObject.consultation_schedule\">\n                            \t\t\t\t<h5 class=\"color-blue\"> Schedule: </h5>\n                            \t\t\t\t<div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\"> \n                            \t\t\t\t\t<span><strong style=\"display:block; width:110px;word-break:break-word\"> {{shift.day}}: </strong>\n                            \t\t\t\t\t\t<span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\" style=\"white-space:nowrap\"> \n                            \t\t\t\t\t\t\t[\n                            \t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.hour=='0'\">{{time.fromTime.hour}}0:</span>\n                            \t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.hour!='0'\">{{time.fromTime.hour}}:</span>\n                            \t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.minute=='0'\">{{time.fromTime.minute}}0 –</span>\n                            \t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.minute!='0'\">{{time.fromTime.minute}} –</span>\n                            \t\t\t\t\t\t\t<span *ngIf=\"time.toTime.hour=='0'\">{{time.toTime.hour}}0:</span>\n                            \t\t\t\t\t\t\t<span *ngIf=\"time.toTime.hour!='0'\">{{time.toTime.hour}}:</span>\n                            \t\t\t\t\t\t\t<span *ngIf=\"time.toTime.minute=='0'\">{{time.toTime.minute}}0</span>\n                            \t\t\t\t\t\t\t<span *ngIf=\"time.toTime.minute!='0'\">{{time.toTime.minute}}</span>\n                            \t\t\t\t\t\t\t]\n                            \t\t\t\t\t\t</span>\n                            \t\t\t\t\t\t<br>\n                            \t\t\t\t\t</span>\n                            \t\t\t\t</div>\n                            \t\t\t\t<div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\"> \n                            \t\t\t\t\t<span><strong> {{shift.day}}: </strong> Closed \n                            \t\t\t\t\t</span>\n                            \t\t\t\t</div>\n                            \t\t\t</div>\n                            \t\t\t<div id=\"translated_treatmentText\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n                            \t\t\t\t<h5 class=\"color-blue\"> Available Treatments: </h5>\n                            \t\t\t\t<ul style=\"padding-left:15px!important;\">\n                            \t\t\t\t\t<li *ngFor=\"let treat of doctorData.expertise\">{{treat.value}}</li>\n                            \t\t\t\t</ul>\n                            \t\t\t</div>\n                            \t\t\t<div *ngIf=\"doctorData.clinic_services_status=='Yes' && checkOptionOfPad('Available_services')\" id=\"translated_servicesText\">\n                            \t\t\t\t<h5 class=\"color-blue\"> Available Services: </h5>\n                            \t\t\t\t<ul style=\"padding-left:15px!important;\">\n                            \t\t\t\t\t<li *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy\">Pharmacy</li>\n                            \t\t\t\t\t<li *ngIf=\"doctorData.clinic_services.Clinic_IPD\">IPD</li>\n                            \t\t\t\t\t<li *ngFor=\"let cs of doctorData.clinic_services.ClinicServicesDetail\"> {{cs}} </li>\n                            \t\t\t\t\t<li *ngFor=\"let cs of doctorData.clinic_services.OtherClinicService\"> {{cs.value}} </li>\n                            \t\t\t\t</ul>\n                            \t\t\t</div>\n                            \t\t</div>                                   \n                            \t</div>\n                            \t<div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n                            \t\t<div class=\"padview-bodyright\">\n                            \t\t\t<ul class=\"padview-body-header\">\n                            \t\t\t\t<li>\n                            \t\t\t\t\t<div class=\"text-underline\"> Prescription ID </div>\n                            \t\t\t\t\t<div class=\"strong\"><b>{{prescription_id}}</b></div>\n                            \t\t\t\t</li>\n                            \t\t\t\t<li>\n                            \t\t\t\t\t<div class=\"text-underline\"> Name </div>\n                            \t\t\t\t\t<div class=\"strong\"> <b>{{dispensedPatient.pateintName}} </b></div>\n                            \t\t\t\t</li>\n                            \t\t\t\t<li>\n                            \t\t\t\t\t<div class=\"text-underline\"> Age/Sex </div>\n                            \t\t\t\t\t<div class=\"strong\"> <span *ngIf=\"dispensedPatient.age_in_years\"><b>{{dispensedPatient.age_in_years}}</b></span>\n                            \t\t\t\t\t\t<span *ngIf=\"dispensedPatient.age_in_months > 0\"><b>{{dispensedPatient.age_in_months}} Months,</b> </span><b>{{dispensedPatient.gender}} </b></div>\n                            \t\t\t\t\t</li>\n                            \t\t\t\t\t<li>\n                            \t\t\t\t\t\t<div class=\"text-underline\"> Weight </div>\n                            \t\t\t\t\t\t<div class=\"strong\" *ngIf=\"dispensedPatient.weight\"> <b>{{dispensedPatient.weight}} Kg </b></div>\n                            \t\t\t\t\t</li>\n                            \t\t\t\t\t<li>\n                            \t\t\t\t\t\t<div class=\"text-underline\"> Height </div>\n                            \t\t\t\t\t\t<div class=\"strong\" *ngIf=\"dispensedPatient.height\"> <b>{{dispensedPatient.height}} cm </b></div>\n                            \t\t\t\t\t</li>\n                            \t\t\t\t\t<li>\n                            \t\t\t\t\t\t<div class=\"strong\"> {{day}} {{month}} , {{year}}</div>\n                            \t\t\t\t\t</li>\n                            \t\t\t\t</ul>\n                            \t\t\t\t<ul class=\"padview-patient\">\n                            \t\t\t\t\t<li class=\"img-patient\">\n                            \t\t\t\t\t\t<img src=\"{{pateintPicPath}}{{dispensedPatient.pateintPic}}\" class=\"img-responsive\" *ngIf=\"dispensedPatient.pateintPic\"/>\n                            \t\t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!dispensedPatient.pateintPic\"/>\n                            \t\t\t\t\t</li>\n                            \t\t\t\t\t<li *ngIf=\"preConditionComplete==true && finalPreConditions.length>0\">\n                            \t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_PreCondHeading\"> Existing health status </span> </div>\n                            \t\t\t\t\t\t<ul class=\"pat-type\">\n                            \t\t\t\t\t\t\t<li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n                            \t\t\t\t\t\t</ul>\n                            \t\t\t\t\t</li>\n                            \t\t\t\t\t<li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected.length>0\">\n                            \t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_BIHeading\"> Body Indicators</span> </div>\n                            \t\t\t\t\t\t<ul class=\"pat-type\">\n                            \t\t\t\t\t\t\t<li *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n                            \t\t\t\t\t\t\t</li>\n                            \t\t\t\t\t\t</ul>\n                            \t\t\t\t\t</li>\n                            \t\t\t\t\t<li *ngIf=\"allergyComplete==true && finalAllergy.length>0\">\n                            \t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_allergyHeading\"> Allergy</span> </div>\n                            \t\t\t\t\t\t<ul class=\" pat-type\">\n                            \t\t\t\t\t\t\t<li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n                            \t\t\t\t\t\t</ul>\n                            \t\t\t\t\t</li>\n                            \t\t\t\t</ul>\n                            \t\t\t\t<div class=\"middle-body\">\n                            \t\t\t\t\t<div class=\"\">\n                            \t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"findingsComplete==true && findingsSelected.length>0\">\n                            \t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_PTHeading\"> Patient's Complaints</span> </div>\n                            \t\t\t\t\t\t\t<ul class=\"numberol\">\n                            \t\t\t\t\t\t\t\t<li *ngFor=\"let data of findingsSelected\"> {{data.value}} </li>\n                            \t\t\t\t\t\t\t</ul>\n                            \t\t\t\t\t\t</div>\n                            \t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected.length>0\">\n                            \t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_sympHeading\"> Symptoms</span> </div>\n                            \t\t\t\t\t\t\t<ul class=\"numberol\">\n                            \t\t\t\t\t\t\t\t<li *ngFor=\"let data of symptomsSelected\"> {{data.value}} </li>\n                            \t\t\t\t\t\t\t</ul>\n                            \t\t\t\t\t\t</div>\n                            \t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"diagnosisComplete==true && diagnosisSelected.length>0\">\n                            \t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_diagnosisHeading\"> Diagnosis</span> </div>\n                            \t\t\t\t\t\t\t<ul class=\"numberol\">\n                            \t\t\t\t\t\t\t\t<li *ngFor=\"let data of diagnosisSelected\">{{data.value}}</li>\n                            \t\t\t\t\t\t\t</ul>\n                            \t\t\t\t\t\t</div>\n                            \t\t\t\t\t</div>\n                            \t\t\t\t\t<div class=\"\" *ngIf=\"medicationComplete==true\">\n                            \t\t\t\t\t\t<div class=\"padview-medic\" id=\"translated_medication\">\n                            \t\t\t\t\t\t\t<div class=\"pat-heading\"><span> Medicines</span> </div>\n                            \t\t\t\t\t\t\t<ol style=\"padding-left:10px\">\n                            \t\t\t\t\t\t\t\t<li *ngFor=\"let data of tempMedicationArray\">\n                            \t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n                            \t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                            \t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                            \t\t\t\t\t\t\t\t\t</span>\n                            \t\t\t\t\t\t\t\t</span>\n                            \t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n                            \t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                            \t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                            \t\t\t\t\t\t\t\t</span>\n                            \t\t\t\t\t\t\t</span>\n                            \t\t\t\t\t\t\t<span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n                            \t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n                            \t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                            \t\t\t\t\t\t\t</span>\n                            \t\t\t\t\t\t</span>\n                            \t\t\t\t\t\t<span *ngIf=\"data.name=='Drops'\">\n                            \t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                            \t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                            \t\t\t\t\t\t</span>\n                            \t\t\t\t\t</span>\n                            \t\t\t\t</li>\n                            \t\t\t</ol>\n                            \t\t</div>\n                            \t\t<div class=\"number-div vac-div\">\n                            \t\t\t<div *ngIf=\"vaccinationComplete==true\">\n                            \t\t\t\t<div class=\"pat-heading\" id=\"translated_VaccinationHeading\"> <span> Vaccination</span> </div>\n                            \t\t\t\t<ul *ngIf=\"currentVaccinationComplete == true\" class=\"medicationol\">\n                            \t\t\t\t\t<div><b>Current</b></div>\n                            \t\t\t\t\t<li *ngFor=\"let data of finalCurrentVaccinationArray\">{{data}}</li>\n                            \t\t\t\t</ul>\n                            \t\t\t\t<ul *ngIf=\"dueVaccinationComplete == true\" class=\"medicationol\">\n                            \t\t\t\t\t<span *ngIf=\"finalDueVaccinationArray.length>0\"><strong>Due </strong>({{vaccinationDate.toString().substr(4,11)}})\n                            \t\t\t\t\t</span>\n                            \t\t\t\t\t<li *ngFor=\"let data of finalDueVaccinationArray\">{{data}}</li>\n                            \t\t\t\t</ul>\n                            \t\t\t</div>\n                            \t\t\t<div class=\"\" *ngIf=\"instructionsComplete==true && instructionsSelected.length>0\" id=\"translated_instHeading\">\n                            \t\t\t\t<div class=\"pat-heading\"> <span> Instructions</span> </div>\n                            \t\t\t\t<ul class=\"numberol\" start=\"1\">\n                            \t\t\t\t\t<li *ngFor=\"let data of instructionsSelected\">{{data}}</li>\n                            \t\t\t\t</ul>\n                            \t\t\t</div>\n                            \t\t</div>\n                            \t</div>\n                            </div>\n                            <div class=\"third-body\">\n                            \t<div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray.length\">\n                            \t\t<div class=\"pat-heading\"> <span id=\"translated_invHeading\"> Investigation</span> </div>\n                            \t\t<ol class=\"numberol pl10\">\n                            \t\t\t<li *ngFor=\"let data of investigationArray\">\n                            \t\t\t\t<span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n                            \t\t\t\t\t<span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n                            \t\t\t\t\t\t<span *ngIf=\"i!=data.values.length-1\">\\</span>\n                            \t\t\t\t\t</span>\n                            \t\t\t\t</span>\n                            \t\t\t\t<span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n                            \t\t\t\t\t<span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n                            \t\t\t\t</span>\n                            \t\t\t</li>\n                            \t\t</ol>\n                            \t</div>\n                            \t<div class=\"number-div\" *ngIf=\"treatmentComplete==true\" id=\"translated_OTHeading\">\n                            \t\t<div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n                            \t\t<ul class=\"numberol\">\n                            \t\t\t<li *ngFor=\"let data of treatmentArray;let i =index\">\n                            \t\t\t\t<span *ngIf=\"data.name=='Lifestyle Changes'\">\n                            \t\t\t\t\t{{data.name}} - <span *ngFor=\"let value of data.lifestyle;let j = index\">{{value.value}} <span *ngIf=\"j!=data.lifestyle.length-1\">\\</span></span>\n                            \t\t\t\t</span>\n                            \t\t\t\t<span *ngIf=\"data.name=='Physiotherapy' || data.name=='Fomentation'\">\n                            \t\t\t\t\t{{data.name}} - {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                            \t\t\t\t</span>\n                            \t\t\t\t<span *ngIf=\"data.name=='Plaster'\">\n                            \t\t\t\t\t<span class=\"notranslate\">{{data.name}}</span> - on <span class=\"notranslate\">{{data.Injury_Area}}</span> of {{data.plaster_type}} for {{data.Duration}} days \n                            \t\t\t\t</span>\n                            \t\t\t\t<span *ngIf=\"data.name=='Gargle' || data.name=='Dressing' || data.name=='Bandage' || data.name=='Other'\">\n                            \t\t\t\t\t<span *ngIf=\"data.name!='Other'\">{{data.name}} - </span>{{data.med_name[0].value}} {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                            \t\t\t\t</span>\n                            \t\t\t\t<span>\n                            \t\t\t\t\t{{data.value}}\n                            \t\t\t\t</span>\n                            \t\t\t</li>\n                            \t\t</ul>\n                            \t</div>\n                            </div>\n                            <div class=\"note-box\">\n                            \t<div class=\"note-innerbox\">\n                            \t\t<div class=\"note-innerdiv\">\n                            \t\t\t<div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray.length>0\">\n                            \t\t\t\t<div class=\"pat-heading\"> <span id=\"translated_surgHeading\"> Recommended Surgery</span> </div>\n                            \t\t\t\t<ul class=\"numberol\">\n                            \t\t\t\t\t<li *ngFor=\"let data of surgerySelectedArray\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n                            \t\t\t\t</ul>\n                            \t\t\t</div>\n                            \t\t\t<div class=\"number-div\" *ngIf=\"refer_status\" style=\"padding:0 30px;\">\n                            \t\t\t\t<div class=\"pat-heading\"> <span> Referred To</span> </div>\n                            \t\t\t\t<p> {{referDetail.doctor_name}} </p>\n                            \t\t\t</div>\n                            \t\t</div>\n                            \t</div>\n                            \t<div class=\"\" *ngIf=\"eyePresComplete==true\">\n                            \t\t<div class=\"pat-heading\"> <span id=\"translated_eyeHeading\"> Eye Prescription</span> </div>\n                            \t\t<div class=\"table-responsive\">\n                            \t\t\t<table class=\"table table-bordered table-striped cstm-table\">\n                            \t\t\t\t<thead>\n                            \t\t\t\t\t<tr>\n                            \t\t\t\t\t\t<th> Eye </th>\n                            \t\t\t\t\t\t<th> Sphere </th>\n                            \t\t\t\t\t\t<th> Cylinder </th>\n                            \t\t\t\t\t\t<th> Axis </th>\n                            \t\t\t\t\t\t<th> Add </th>\n                            \t\t\t\t\t\t<th> PD (mm) </th>\n                            \t\t\t\t\t</tr>\n                            \t\t\t\t</thead>\n                            \t\t\t\t<tbody>\n                            \t\t\t\t\t<tr>\n                            \t\t\t\t\t\t<td> Right (OD): </td>\n                            \t\t\t\t\t\t<td> {{finalRightOD.sphere}} </td>\n                            \t\t\t\t\t\t<td> {{finalRightOD.cylinder}} </td>\n                            \t\t\t\t\t\t<td> {{finalRightOD.axis}} </td>\n                            \t\t\t\t\t\t<td> {{finalRightOD.add}} </td>\n                            \t\t\t\t\t\t<td> {{finalRightOD.pd}} </td>\n                            \t\t\t\t\t</tr>\n                            \t\t\t\t\t<tr>\n                            \t\t\t\t\t\t<td> Left (OS): </td>\n                            \t\t\t\t\t\t<td> {{finalLeftOD.sphere}} </td>\n                            \t\t\t\t\t\t<td> {{finalLeftOD.cylinder}} </td>\n                            \t\t\t\t\t\t<td> {{finalLeftOD.axis}} </td>\n                            \t\t\t\t\t\t<td> {{finalLeftOD.add}} </td>\n                            \t\t\t\t\t\t<td> {{finalLeftOD.pd}} </td>\n                            \t\t\t\t\t</tr>\n                            \t\t\t\t</tbody>\n                            \t\t\t</table>\n                            \t\t</div>\n                            \t</div>\n                            </div>\n                            <div class=\"third-body\">\n                            \t<div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n                            \t\t<div class=\"pat-heading\"> <span> Follow Up</span></div>\n                            \t\t<p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n                            \t\t<p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n                            \t</div>\n                            </div>\n                            <div class=\"forth-body\">\n                            \t<div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n                            \t\t<div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div>\n                            \t</div>\n                            \t<div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"padview-footer\">\n                \t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n                \t\t<div class=\"padview-powered\">\n                \t\t\t<div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n                \t\t\t<div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com </div>\n                \t\t</div>\n                \t</div>\n                \t<div class=\"col-md-12 col-sm-4 col-xs-12\" id=\"translated_footer\">\n                \t\t<div class=\"legal\">\n                \t\t\t<h3>{{getFooterText}}</h3>\n                \t\t</div>\n                \t</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n</div>\n</div>\n\n<div class=\"modal fade cus-modal\" id=\"pateintConsultaionDetail\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t<div class=\"modal-dialog\" role=\"document\" *ngIf=\"pateintConsultaionDetail\">\n\t\t<div class=\"modal-content pat-reg-modal-form\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">×</span>\n\t\t\t\t</button>\n\t\t\t\t<div class=\" col-md-8 col-md-offset-2 col-sm-12 col-xs-12\" *ngIf=\"!webCam\">\n\t\t\t\t\t<input class=\"form-control txtfield  name-cstm-input\" name=\"\" readonly=\"\" value=\"Dr. {{pateintConsultaionDetail.doctor_id.first_name}}\" type=\"text\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"row\" *ngIf=\"!webCam\">\n\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-3 col-xs-12\">\n\t\t\t\t\t\t<div class=\"regis-modal-body\">\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<label>Consulting Type*</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<label>Patient Mobile*</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<label>Patient Name*</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_dob\">\n\t\t\t\t\t\t\t\t<label>Patient DOB*</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_age\">\n\t\t\t\t\t\t\t\t<label>Patient Age*</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<label>Gender*</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<label style=\"height:70px;float:left;width:100%;\">Address*</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_weight\">\n\t\t\t\t\t\t\t\t<label>Weight (Kg)</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_height\">\n\t\t\t\t\t\t\t\t<label>Height (cm)</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_temp\">\n\t\t\t\t\t\t\t\t<label>Temperature(0F)</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_pulse\">\n\t\t\t\t\t\t\t\t<label>Pulse (per min)</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_bp\">\n\t\t\t\t\t\t\t\t<label>Blood Pressure (mmHg)</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_rbs\">\n\t\t\t\t\t\t\t\t<label>RBS (mg/dL)</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_spo\">\n\t\t\t\t\t\t\t\t<label>SpO2 (%)</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_patientPic\">\n\t\t\t\t\t\t\t\t<label>Patient Photo</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_testReport\">\n\t\t\t\t\t\t\t\t<label>Upload test reports</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\n\t\t\t\t\t\t<div class=\"regis-modal-body\">\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12 cstm-crt-wrap\">\n\t\t\t\t\t\t\t\t<span  class=\"caret cstm-caret\"></span>\n\t\t\t\t\t\t\t\t<select class=\"form-control txtfield select-doctor\" [(ngModel)]=\"appointment.type\" [ngModelOptions]=\"{standalone: true}\">\n\t\t\t\t\t\t\t\t\t<option selected=\"\" value=\"\" disabled=\"\" class=\"select-opt\"> Consultation Type* </option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let ct of consultationType\" value=\"{{ct}}\">{{ct}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"input-group fieldDesign\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">+91</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" [(ngModel)]=\"appointment.pateintPhone\" [ngModelOptions]=\"{standalone: true}\" (blur)=\"findPatientNameFromPhone($event.target.value)\"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"\" [(ngModel)]=\"appointment.pateintName\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"SearchPatientName($event.target.value)\" [matAutocomplete]=\"autoPatNameApnt\" />\n\t\t\t\t\t\t\t\t<mat-autocomplete #autoPatNameApnt=\"matAutocomplete\" class=\"mat-autocomplete-registration\">\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let patient of patientList\" [value]=\"patient.name\">\n\t\t\t\t\t\t\t\t\t\t{{patient.name}}\n\t\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t</mat-autocomplete>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_dob\">\n\t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"appointment.dob\" [ngModelOptions]=\"{standalone: true}\" [settings]=\"settings\"></angular2-date-picker>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-lg-4 col-md-4 col-sm-6 col-xs-12\" *ngIf=\"field_age\">\n\t\t\t\t\t\t\t\t<input type=\"text\" min=\"1\" max=\"100\" class=\"form-control txtfield\" name=\"\" placeholder=\"Age\" [(ngModel)]=\"appointment.age\" [ngModelOptions]=\"{standalone: true}\" />\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-6 col-xs-12\" *ngIf=\"field_age\">\n\t\t\t\t\t\t\t\t<div class=\"wrap-radio\">\t\n\t\t\t\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"appointment.age_param\">\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"years\">Year(s)</mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"months\" class=\"rd-2\">Month(s)</mat-radio-button>\n\t\t\t\t\t\t\t\t\t</mat-radio-group> \t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<select class=\"form-control txtfield {{genderClass}}\" [(ngModel)]=\"appointment.gender\" [ngModelOptions]=\"{standalone: true}\">\n\t\t\t\t\t\t\t\t\t<option selected=\"\" disabled=\"\" value=\"Select\"> Gender </option>\n\t\t\t\t\t\t\t\t\t<option value=\"Male\"> Male</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Female\"> Female </option>\n\t\t\t\t\t\t\t\t\t<option value=\"Other\"> Other </option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" style=\"height:70px;float:left;width:100%;\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<input class=\"form-control txtfield\" placeholder=\"City\" (onAddressChange)=\"GetLatLng($event)\" [(ngModel)]=\"appointment.city\" [ngModelOptions]=\"{standalone: true}\" ngx-google-places-autocomplete [options]=\"{ types: [(cities)],componentRestrictions: { country: 'IN' } }\" autocomplete=\"off\" #placesRef=\"ngx-places\" />\n                                <!--mat-autocomplete #auto1=\"matAutocomplete\" class=\"mat-autocomplete-registration\">\n                                  <mat-option *ngFor=\"let city of citiesList\" [value]=\"city.name\" (onAddressChange)=\"GetLatLng(city.name)\">\n                                    {{city.name}}\n                                  </mat-option>\n                              </mat-autocomplete-->\n                              <br>\n                                <!-- <input class=\"form-control txtfield\" placeholder=\"Area/Location\" style=\"margin-top: -8px\" [matAutocomplete]=\"auto\" (keyup)=\"SearchLocation($event.target.value)\" [(ngModel)]=\"appointment.location\" [ngModelOptions]=\"{standalone: true}\">\n                                <mat-autocomplete #auto=\"matAutocomplete\" class=\"mat-autocomplete-registration\">\n                                  <mat-option *ngFor=\"let option of locationSuggestionDB\" [value]=\"option\" >\n                                    {{option}}\n                                  </mat-option>\n                              </mat-autocomplete> -->\n                              <input class=\"form-control txtfield\" placeholder=\"Area/Location\" style=\"margin-top: -8px\" [(ngModel)]=\"appointment.location\" [ngModelOptions]=\"{standalone: true}\"  ngx-google-places-autocomplete [options]=\"{ types: [(geocode)],componentRestrictions: { country: 'IN' } }\" #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" />\n                          </div>\n                      </div>\n                      <div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_weight\">\n                      \t<input class=\"form-control txtfield\" name=\"\" placeholder=\"Weight\" type=\"text\" min=\"1\" max=\"150\" [(ngModel)]=\"appointment.weight\" [ngModelOptions]=\"{standalone: true}\">\n                      </div>\n                      <div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_height\">\n                      \t<input class=\"form-control txtfield\" name=\"\" placeholder=\"Height\" type=\"text\" min=\"1\" max=\"240\" [(ngModel)]=\"appointment.height\" [ngModelOptions]=\"{standalone: true}\">\n                      </div>\n                      <div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_temp\">\n                      \t<select class=\"form-control txtfield {{temp_class}}\" [(ngModel)]=\"appointment.temp\" [ngModelOptions]=\"{standalone: true}\">\n                      \t\t<option value=\"\"> Select </option>\n                      \t\t<option value=\"{{value}}\" *ngFor=\"let value of temperature_range\"> {{value}} </option>\n                      \t</select>\n                      </div>\n                      <div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_pulse\">\n                      \t<select class=\"form-control txtfield {{pulse_class}}\" [(ngModel)]=\"appointment.pulse\" [ngModelOptions]=\"{standalone: true}\">\n                      \t\t<option value=\"\"> Select </option>\n                      \t\t<option value=\"{{value}}\" *ngFor=\"let value of pulse_range\"> {{value}} </option>\n                      \t</select>\n                      </div>\n                      <div class=\"mg-bottom col-md-6 col-sm-6 col-xs-12\" *ngIf=\"field_bp\">\n                      \t<select class=\"form-control txtfield {{sys_class}}\" [(ngModel)]=\"appointment.bp\" [ngModelOptions]=\"{standalone: true}\" >\n                      \t\t<option value=\"\"> SYS </option>\n                      \t\t<option value=\"{{value}}\" *ngFor=\"let value of sys_range\"> {{value}} </option>\n                      \t</select>\n                      </div>\n                      <div class=\"mg-bottom col-md-6 col-sm-6 col-xs-12\" *ngIf=\"field_bp\">\n                      \t<select class=\"form-control txtfield {{dia_class}}\" [(ngModel)]=\"appointment.dia\" [ngModelOptions]=\"{standalone: true}\">\n                      \t\t<option value=\"\"> DIA </option>\n                      \t\t<option value=\"{{value}}\" *ngFor=\"let value of dia_range\"> {{value}} </option>\n                      \t</select>\n                      </div>\n                      <div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_rbs\">\n                      \t<select class=\"form-control txtfield {{rbs_class}}\" [(ngModel)]=\"appointment.rbs\" [ngModelOptions]=\"{standalone: true}\">\n                      \t\t<option value=\"Select\"> Select </option>\n                      \t\t<option value=\"{{value}}\" *ngFor=\"let value of rbs_range\"> {{value}} </option>\n                      \t</select>\n                      </div>\n                      <div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_spo\">\n                      \t<select class=\"form-control txtfield {{spo_class}}\" [(ngModel)]=\"appointment.spo\" [ngModelOptions]=\"{standalone: true}\">\n                      \t\t<option value=\"Select\"> Select </option>\n                      \t\t<option value=\"{{value}}\" *ngFor=\"let value of spo_range\"> {{value}} </option>\n                      \t</select>\n                      </div>\n                      <div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_patientPic && !appointment.pateintPic && !pateintPic\">\n                      \t<span class=\"input-btn btn btn-default\" (click)=\"openWebCam('patient')\">\n                      \t\tTake Picture \n                      \t</span>\n                      </div>\n                      <div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12 upload-image-main\" *ngIf=\"field_patientPic && appointment.pateintPic && !pateintPic\">\n                      \t<div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-4 upload-image\" (click)=\"openWebCam('patient')\">\n                      \t\t<img href=\"javascript:void(0)\" src=\"{{pateintPicPath}}{{appointment.pateintPic}}\" alt=\"pic\" class=\"img-thumbnail\">\n                      \t</div>\n                      </div>\n                      <div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12 upload-image-main\" *ngIf=\"field_patientPic && pateintPic\">\n                      \t<div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-4 upload-image\" (click)=\"openWebCam('patient')\">\n                      \t\t<img href=\"javascript:void(0)\" src=\"{{pateintPic}}\" alt=\"pic\" class=\"img-thumbnail\">\n                      \t</div>\n                      </div>\n                      <div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_testReport && (appointment.reportPics.length<1 && reportPics.length<1)\">\n                      \t<span class=\"input-btn btn btn-default\" (click)=\"openWebCam('report')\">\n                      \t\tTake Picture \n                      \t</span>\n                      </div>\n                      <div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12 upload-image-main\" *ngIf=\"field_testReport && (appointment.reportPics.length>0 || reportPics.length>0)\">\n                      \t<div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-4 upload-image\" *ngFor=\"let image of appointment.reportPics;let i = index\">\n                      \t\t<img href=\"javascript:void(0)\" src=\"{{reportPicPath}}{{image}}\" alt=\"pic\" class=\"img-thumbnail\">\n                      \t\t<a (click)=\"removeImageFromReportPics(i,'server',image)\" class=\"close-thik\"></a>\n                      \t</div>\n                      \t<div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-4 upload-image\" *ngFor=\"let image of reportPics;let i = index\">\n                      \t\t<img href=\"javascript:void(0)\" src=\"{{image}}\" alt=\"pic\" class=\"img-thumbnail\">\n                      \t\t<a (click)=\"removeImageFromReportPics(i,'local',image)\" class=\"close-thik\"></a>\n                      \t</div>\n                      \t<div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-4 upload-image\" *ngIf=\"(appointment.reportPics.length+reportPics.length)<3\">\n                      \t\t<i class=\"fa fa-plus\" (click)=\"openWebCam('report')\"></i>      \n                      \t</div>  \n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n              \t<div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12\">\n              \t\t<div class=\"reg-cancel-btn\">\n              \t\t\t<button class=\"btn btn-custom reg-btn cancel\" style=\"background-color:#FFC000\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\"> Cancel  </button> \n              \t\t</div>\n              \t</div>\n              \t<div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12\">\n              \t\t<div class=\"reg-cancel-btn\">\n              \t\t\t<button class=\"btn btn-custom reg-btn\" type=\"button\" (click)=\"UpdateReg()\"> Update </button>\n              \t\t</div>\n              \t</div>\n              </div>    \n          </div>\n          <div *ngIf=\"webCam\" class=\"camera-div\">\n          \t<webcam [height]=\"550\" [width]=\"550\" [trigger]=\"triggerObservableUpdate\" (imageCapture)=\"handleImageUpdate($event)\" ></webcam>\n          \t<div class=\"mg-bottom col-md-10 col-md-offset-1 col-sm-12 col-xs-12 camera-btn\">\n          \t\t<button class=\"btn btn-custom\" type=\"button\" (click)=\"triggerSnapshotUpdate()\">OK</button>\n          \t</div>\n          </div>\n      </div>\n\n  </div>\n</div>\n</div>\n\n<div class=\"modal fade cus-preview\" id=\"webcamModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">Upload Prescription</h3>\n\t\t\t\t<button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline btn_updte\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"camera-div\">\n\t\t\t\t\t<webcam [height]=\"550\" [width]=\"550\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" ></webcam>\n\t\t\t\t\t<div class=\"form-group col-md-10 col-md-offset-1 col-sm-12 col-xs-12 camera-btn\">\n\t\t\t\t\t\t<button class=\"btn btn-custom\" type=\"button\" (click)=\"triggerSnapshot()\">Upload</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade cus-preview\" id=\"uploadedPrescriptionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" *ngIf=\"dispensedPatientSelected\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">Prescription</h3>\n\t\t\t\t<button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline btn_updte\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"camera-div\">\n\t\t\t\t\t\t\t<img src=\"{{uploadedPrescriptionPath}}{{dispensedPatientSelected.image}}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div></div>\n\n\t<div class=\"modal fade cus-preview\" id=\"previewModalNewABCD\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" *ngIf=\"doctorArrayObject\">\n\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t<div class=\"modal-content show-default\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<h4 class=\"modal-title\"> Preview </h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline btn_updte\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"presc-modal-body\">\n\t\t\t\t\t\t\t<div class=\"pad-view\">\n\t\t\t\t\t\t\t\t<div class=\"padview-header\">\n\t\t\t\t\t\t\t\t\t<div class=\"pad-view-flx col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group doctor-name\" *ngIf=\"newDoctorObject\" style=\"margin-bottom: 0px;\">\n\t\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{newDoctorObject.first_name}} </h1>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group qual\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"color-purple\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"newDoctorObject.specialization\">({{newDoctorObject.specialization}})</span><br>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"newDoctorObject.qualification\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let data of newDoctorObject.qualification;let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.value}} <span *ngIf=\"i!=newDoctorObject.qualification.length-1\">,</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span> (Reg. <span class=\"color-purple\"> {{newDoctorObject.registration_no}}) </span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t\t\t<p><span class=\"color-purple\">{{getExperienceYear}} years of experience</span></p>\n\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"color-purple\" *ngFor=\"let pa of newDoctorObject.professional_affiliation;let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{pa.value}}<span *ngIf=\"i!=newDoctorObject.professional_affiliation.length-1\">,</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"pad-view-flx col-lg-8\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"clinic-detail\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"clinic-name\" *ngIf=\"doctorArrayObject.clinic_details\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_clinicName\"> {{doctorArrayObject.clinic_details.clinic_name}} </h1>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"doctorArrayObject.clinic_details\"style=\"margin-top: -9px;\">{{doctorArrayObject.clinic_details.address}}, {{doctorArrayObject.clinic_details.area}}, {{doctorArrayObject.clinic_details.city}}, {{doctorArrayObject.clinic_details.state}}</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"li-cstm\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" *ngIf=\"doctorArrayObject.clinic_details\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"for-apt\" style=\"margin-top:5px;\"> <b>For appointments </b></h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"doctorArrayObject.clinic_details\"> Tel: {{doctorArrayObject.clinic_details.std_code}}-{{doctorArrayObject.clinic_details.landline}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p> Mb: +91-{{doctorArrayObject.clinic_details.mobile}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Website: {{doctorArrayObject.clinic_details.website}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Email: {{doctorArrayObject.email}}</p>\n\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p class=\"text-center\" >\n\t\t\t\t\t\t\t\t\t<label id=\"translated_appointmentText\"> {{getHeaderText}} </label>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<div class=\"padview-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"emergency-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group schdl\" >\n\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Schedule: </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t<span><strong style=\"display:block; width:100px;\"> {{shift.day}}: </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\" > \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.hour=='0'\">{{time.fromTime.hour}}0:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.hour!='0'\">{{time.fromTime.hour}}:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.minute=='0'\">{{time.fromTime.minute}}0 –</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.minute!='0'\">{{time.fromTime.minute}} –</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.toTime.hour=='0'\">{{time.toTime.hour}}0:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.toTime.hour!='0'\">{{time.toTime.hour}}:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.toTime.minute=='0'\">{{time.toTime.minute}}0</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.toTime.minute!='0'\">{{time.toTime.minute}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t<span><strong> {{shift.day}}: </strong> Closed \n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"translated_treatmentText\" *ngIf=\"doctorArrayObject.expertise\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Available Treatments: </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul style=\"padding-left:15px!important;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let treat of doctorArrayObject.expertise\">{{treat.value}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"doctorArrayObject.clinic_services_status=='Yes' && doctorArrayObject.clinic_services\" id=\"translated_servicesText\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Available Services: </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul style=\"padding-left:15px!important;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"doctorArrayObject.clinic_services.Clinic_Pharmacy\">Pharmacy</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"doctorArrayObject.clinic_services.Clinic_IPD\">IPD</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let cs of doctorArrayObject.clinic_services.ClinicServicesDetail\"> {{cs}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let cs of doctorArrayObject.clinic_services.OtherClinicService\"> {{cs.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>                                   \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"padview-bodyright\">\n\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"padview-body-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Prescription ID </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"><b>{{todayDate | date: 'ddMMyyyy'}}-{{patientData.serial_number}}</b></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline \" > Name </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"patientData.pateintName\"><b>{{jsUcfirst(patientData.pateintName)}}</b></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"text-underline\"> Age/Sex </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"patientData.age_in_years > 0\"><b>{{patientData.age_in_years}}</b></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"patientData.age_in_months > 0\"><b>{{patientData.age_in_months}} Months, </b></span>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"patientData.gender\"><b>{{patientData.gender}}</b></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Weight (kg)</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"patientData.weight\"><b>{{patientData.weight}}</b></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Height (cm)</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf = \"patientData.height\"><b>{{patientData.height}}</b></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{todayDate | date: 'dd MMM,yyyy'}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n                                            <!-- <li>\n                                                <div class=\"text-underline\" *ngIf = \"patientData.temp\"> Temperature(0F)</div>\n                                                <span >{{patientData.temp}}</span>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\" *ngIf = \"patientData.pulse\"> Pulse (per min)</div>\n                                                <span >{{patientData.pulse}}</span>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\" *ngIf = \"patientData.bp\"> Blood Pressure (mmHg)</div>\n                                                <span >{{patientData.bp}}</span>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"  *ngIf = \"patientData.dia\">DIA</div>\n                                                <span>{{patientData.dia}}</span>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\" *ngIf = \"patientData.rbs\"> RBS (mg/dL)</div>\n                                                <span >{{patientData.rbs}}</span>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\" *ngIf = \"patientData.spo\"> SpO2 (%)</div>\n                                                <span >{{patientData.spo}}</span>\n                                            </li> -->\n                                        </ul>\n                                        <ul class=\"padview-patient\">\n                                        \t<li class=\"img-patient\">\n                                        \t\t<img src=\"{{pateintPicPath}}{{patientData.pateintPic}}\" class=\"img-responsive\" *ngIf=\"patientData.pateintPic\"/>\n                                                <!--img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!patientData.pateintPic && patientData.gender=='Male'\"/>\n                                                \t<img src=\"./assets/imgs/female.png\" class=\"img-responsive\" *ngIf=\"!patientData.pateintPic && patientData.gender=='Female'\"/-->\n                                                </li>\n\n                                            </ul>\n                                            <ul class=\"padview-patient\">\n                                            \t<li *ngIf=\"preConditionComplete==true && finalPreConditions.length>0\">\n                                            \t\t<div class=\"pat-heading\"><span id=\"translated_PreCondHeading\"> Existing health status </span> </div>\n                                            \t\t<ul class=\"pat-type\">\n                                            \t\t\t<li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n                                            \t\t</ul>\n                                            \t</li>\n                                            \t<li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected.length>0\">\n                                            \t\t<div class=\"pat-heading\"><span id=\"translated_BIHeading\"> Body Indicators</span> </div>\n                                            \t\t<ul class=\"pat-type\">\n                                            \t\t\t<li *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n                                            \t\t\t</li>\n                                            \t\t</ul>\n                                            \t</li>\n                                            \t<li *ngIf=\"allergyComplete==true && finalAllergy.length>0\">\n                                            \t\t<div class=\"pat-heading\"><span id=\"translated_allergyHeading\"> Allergy</span> </div>\n                                            \t\t<ul class=\" pat-type\">\n                                            \t\t\t<li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n                                            \t\t</ul>\n                                            \t</li>\n                                            </ul>\n\n                                            <div class=\"middle-body\">\n                                            \t<div class=\"\">\n                                            \t\t<div class=\"number-div\" *ngIf=\"findingsComplete==true && findingsSelected.length>0\">\n                                            \t\t\t<div class=\"pat-heading\"><span id=\"translated_PTHeading\"> Patient's Complaints</span> </div>\n                                            \t\t\t<ul class=\"numberol\">\n                                            \t\t\t\t<li *ngFor=\"let data of findingsSelected\"> {{data.value}} </li>\n                                            \t\t\t</ul>\n                                            \t\t</div>\n                                            \t\t<div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected.length>0\">\n                                            \t\t\t<div class=\"pat-heading\"><span id=\"translated_sympHeading\"> Symptoms</span> </div>\n                                            \t\t\t<ul class=\"numberol\">\n                                            \t\t\t\t<li *ngFor=\"let data of symptomsSelected\"> {{data.value}} </li>\n                                            \t\t\t</ul>\n                                            \t\t</div>\n                                            \t\t<div class=\"number-div\" *ngIf=\"diagnosisComplete==true && diagnosisSelected.length>0\">\n                                            \t\t\t<div class=\"pat-heading\"><span id=\"translated_diagnosisHeading\"> Diagnosis</span> </div>\n                                            \t\t\t<ul class=\"numberol\">\n                                            \t\t\t\t<li *ngFor=\"let data of diagnosisSelected\">{{data.value}}</li>\n                                            \t\t\t</ul>\n                                            \t\t</div>\n                                            \t</div>\n                                            \t<div class=\"\" *ngIf=\"medicationComplete==true\">\n                                            \t\t<div class=\"padview-medic\" id=\"translated_medication\">\n                                            \t\t\t<div class=\"pat-heading\"><span> Medicines</span> </div>\n                                            \t\t\t<ol style=\"padding-left:10px\">\n                                            \t\t\t\t<li *ngFor=\"let data of tempMedicationArray\">\n                                            \t\t\t\t\t<span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n                                            \t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                            \t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                            \t\t\t\t\t</span>\n                                            \t\t\t\t</span>\n                                            \t\t\t\t<span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n                                            \t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                            \t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                            \t\t\t\t</span>\n                                            \t\t\t</span>\n                                            \t\t\t<span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n                                            \t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n                                            \t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                            \t\t\t</span>\n                                            \t\t</span>\n                                            \t\t<span *ngIf=\"data.name=='Drops'\">\n                                            \t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                            \t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                            \t\t</span>\n                                            \t</span>\n                                            </li>\n                                        </ol>\n                                    </div>\n                                    <div class=\"number-div vac-div\">\n                                    \t<div *ngIf=\"vaccinationComplete==true\">\n                                    \t\t<div class=\"pat-heading\" id=\"translated_VaccinationHeading\"> <span> Vaccination</span> </div>\n                                    \t\t<ul *ngIf=\"currentVaccinationComplete == true\" class=\"medicationol\">\n                                    \t\t\t<div><b>Current</b></div>\n                                    \t\t\t<li *ngFor=\"let data of finalCurrentVaccinationArray\">{{data}}</li>\n                                    \t\t</ul>\n                                    \t\t<ul *ngIf=\"dueVaccinationComplete == true\" class=\"medicationol\">\n                                    \t\t\t<span *ngIf=\"finalDueVaccinationArray.length>0\"><strong>Due </strong>({{vaccinationDate.toString().substr(4,11)}})\n                                    \t\t\t</span>\n                                    \t\t\t<li *ngFor=\"let data of finalDueVaccinationArray\">{{data}}</li>\n                                    \t\t</ul>\n                                    \t</div>\n                                    \t<div class=\"\" *ngIf=\"instructionsComplete==true && instructionsSelected.length>0\" id=\"translated_instHeading\">\n                                    \t\t<div class=\"pat-heading\"> <span> Instructions</span> </div>\n                                    \t\t<ul class=\"numberol\" start=\"1\">\n                                    \t\t\t<li *ngFor=\"let data of instructionsSelected\">{{data}}</li>\n                                    \t\t</ul>\n                                    \t</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"third-body\">\n                            \t<div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray.length\">\n                            \t\t<div class=\"pat-heading\"> <span id=\"translated_invHeading\"> Investigation</span> </div>\n                            \t\t<ol class=\"numberol pl10\">\n                            \t\t\t<li *ngFor=\"let data of investigationArray\">\n                            \t\t\t\t<span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n                            \t\t\t\t\t<span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n                            \t\t\t\t\t\t<span *ngIf=\"i!=data.values.length-1\">\\</span>\n                            \t\t\t\t\t</span>\n                            \t\t\t\t</span>\n                            \t\t\t\t<span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n                            \t\t\t\t\t<span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n                            \t\t\t\t</span>\n                            \t\t\t</li>\n                            \t\t</ol>\n                            \t</div>\n                            \t<div class=\"number-div\" *ngIf=\"treatmentComplete==true\" id=\"translated_OTHeading\">\n                            \t\t<div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n                            \t\t<ul class=\"numberol\">\n                            \t\t\t<li *ngFor=\"let data of treatmentArray;let i =index\">\n                            \t\t\t\t<span *ngIf=\"data.name=='Lifestyle Changes'\">\n                            \t\t\t\t\t{{data.name}} - <span *ngFor=\"let value of data.lifestyle;let j = index\">{{value.value}} <span *ngIf=\"j!=data.lifestyle.length-1\">\\</span></span>\n                            \t\t\t\t</span>\n                            \t\t\t\t<span *ngIf=\"data.name=='Physiotherapy' || data.name=='Fomentation'\">\n                            \t\t\t\t\t{{data.name}} - {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                            \t\t\t\t</span>\n                            \t\t\t\t<span *ngIf=\"data.name=='Plaster'\">\n                            \t\t\t\t\t<span class=\"notranslate\">{{data.name}}</span> - on <span class=\"notranslate\">{{data.Injury_Area}}</span> of {{data.plaster_type}} for {{data.Duration}} days \n                            \t\t\t\t</span>\n                            \t\t\t\t<span *ngIf=\"data.name=='Gargle' || data.name=='Dressing' || data.name=='Bandage' || data.name=='Other'\">\n                            \t\t\t\t\t<span *ngIf=\"data.name!='Other'\">{{data.name}} - </span>{{data.med_name[0].value}} {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                            \t\t\t\t</span>\n                            \t\t\t\t<span>\n                            \t\t\t\t\t{{data.value}}\n                            \t\t\t\t</span>\n                            \t\t\t</li>\n                            \t\t</ul>\n                            \t</div>\n                            </div>\n                            <div class=\"note-box\">\n                            \t<div class=\"note-innerbox\">\n                            \t\t<div class=\"note-innerdiv\">\n                            \t\t\t<div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray.length>0\">\n                            \t\t\t\t<div class=\"pat-heading\"> <span id=\"translated_surgHeading\"> Recommended Surgery</span> </div>\n                            \t\t\t\t<ul class=\"numberol\">\n                            \t\t\t\t\t<li *ngFor=\"let data of surgerySelectedArray\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n                            \t\t\t\t</ul>\n                            \t\t\t</div>\n                            \t\t\t<div class=\"number-div\" *ngIf=\"refer_status\" style=\"padding:0 30px;\">\n                            \t\t\t\t<div class=\"pat-heading\"> <span> Referred To</span> </div>\n                            \t\t\t\t<p> {{referDetail.doctor_name}} </p>\n                            \t\t\t</div>\n                            \t\t</div>\n                            \t</div>\n                            \t<div class=\"\" *ngIf=\"eyePresComplete==true\">\n                            \t\t<div class=\"pat-heading\"> <span id=\"translated_eyeHeading\"> Eye Prescription</span> </div>\n                            \t\t<div class=\"table-responsive\">\n                            \t\t\t<table class=\"table table-bordered table-striped cstm-table\">\n                            \t\t\t\t<thead>\n                            \t\t\t\t\t<tr>\n                            \t\t\t\t\t\t<th> Eye </th>\n                            \t\t\t\t\t\t<th> Sphere </th>\n                            \t\t\t\t\t\t<th> Cylinder </th>\n                            \t\t\t\t\t\t<th> Axis </th>\n                            \t\t\t\t\t\t<th> Add </th>\n                            \t\t\t\t\t\t<th> PD (mm) </th>\n                            \t\t\t\t\t</tr>\n                            \t\t\t\t</thead>\n                            \t\t\t\t<tbody>\n                            \t\t\t\t\t<tr>\n                            \t\t\t\t\t\t<td> Right (OD): </td>\n                            \t\t\t\t\t\t<td> {{finalRightOD.sphere}} </td>\n                            \t\t\t\t\t\t<td> {{finalRightOD.cylinder}} </td>\n                            \t\t\t\t\t\t<td> {{finalRightOD.axis}} </td>\n                            \t\t\t\t\t\t<td> {{finalRightOD.add}} </td>\n                            \t\t\t\t\t\t<td> {{finalRightOD.pd}} </td>\n                            \t\t\t\t\t</tr>\n                            \t\t\t\t\t<tr>\n                            \t\t\t\t\t\t<td> Left (OS): </td>\n                            \t\t\t\t\t\t<td> {{finalLeftOD.sphere}} </td>\n                            \t\t\t\t\t\t<td> {{finalLeftOD.cylinder}} </td>\n                            \t\t\t\t\t\t<td> {{finalLeftOD.axis}} </td>\n                            \t\t\t\t\t\t<td> {{finalLeftOD.add}} </td>\n                            \t\t\t\t\t\t<td> {{finalLeftOD.pd}} </td>\n                            \t\t\t\t\t</tr>\n                            \t\t\t\t</tbody>\n                            \t\t\t</table>\n                            \t\t</div>\n                            \t</div>\n                            </div>\n                            <div class=\"third-body\">\n                            \t<div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n                            \t\t<div class=\"pat-heading\"> <span> Follow Up</span></div>\n                            \t\t<p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n                            \t\t<p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n                            \t</div>\n                            </div>\n                            <div class=\"forth-body\">\n                            \t<div class=\"padview-confee\" >\n                            \t\t<!-- <div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div> -->\n                            \t</div>\n                            \t<div class=\"signature\" >(Signature)</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"padview-footer\" >\n                \t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n                \t\t<div class=\"padview-powered\">\n                \t\t\t<div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n                \t\t\t<div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com </div>\n                \t\t</div>\n                \t</div>\n                \t<div class=\"col-md-12 col-sm-4 col-xs-12\">\n                \t\t<div class=\"legal\">\n                \t\t\t<h3>{{getFooterText}}</h3>\n                \t\t</div>\n                \t</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n</div>\n\n</div>\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"receiptModal\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\n\t\t\t<!-- Modal Header -->\n\t\t\t<!-- <div class=\"modal-header\">\n\t\t\t\t<h4 class=\"modal-title\">Modal Heading</h4>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t</div>\n\t\t-->\n\t\t<!-- Modal body -->\n\t\t<div class=\" modal-body-1\">\n\t\t\t<div style=\"border:1px solid #4d4d4d;\"id=\"ReceptPrintID\">\n\t\t\t\t<table class=\"table\" style=\"width: 100%;\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr style=\"background-color: #dbeef4;border-bottom: 2px solid #4d4d4d;\">\n\t\t\t\t\t\t\t<th colspan=\"4\">\n\t\t\t\t\t\t\t\t<h1 style=\"text-transform: uppercase;text-align: center;font-weight: bold;\">{{adminDoctor.clinic_details.clinic_name}}</h1>\n\t\t\t\t\t\t\t\t<h4 style=\"text-align: center;\">{{adminDoctor.clinic_details.address}}, {{adminDoctor.clinic_details.area}}, {{adminDoctor.clinic_details.city}}, {{adminDoctor.clinic_details.state}}</h4>\n\t\t\t\t\t\t\t\t<h4 style=\"text-align: center;\">Mb: +91-{{adminDoctor.clinic_details.mobile}}</h4>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th colspan=\"3\" style=\"border:transparent;\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<h3 style=\"text-align:right;font-weight: bold;text-transform: uppercase;\"><u>reciept</u></h3>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th colspan=\"1\" style=\"border:transparent;\">\n\t\t\t\t\t\t\t\t<h5 style=\"text-align:right;\">{{todayDate | date: 'dd'}}<sup>st</sup> {{todayDate | date: 'MMM'}} {{todayDate | date: 'yyyy'}}</h5>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t</table>\n\t\t\t\t<table class=\"table\" style=\"width: 90%;\">\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: left;border:transparent;font-size: 20px;width:40%\">Patient Name</td>\n\t\t\t\t\t\t\t<td style=\"text-align: left;border:transparent;font-size: 20px;width:60%\"><b>: {{receptData?.registration?.pateintName}}</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: left;border:transparent;font-size: 20px;width:40%\">Consulting Doctor</td>\n\t\t\t\t\t\t\t<td style=\"text-align: left;border:transparent;font-size: 20px;width:60%\"><b>: Dr. {{receptData?.registration?.doctor_id?.first_name}}</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td style=\"text-align: left;border:transparent;font-size: 20px;width:40%\">Fee Recieved </td>\n\t\t\t\t\t\t\t<td style=\"text-align: left;border:transparent;font-size: 20px;width:60%\"><b>: Rs. {{receptData?.registration?.fee}}</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<table class=\"table-1\" style=\"width: 90%;\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th colspan=\"3\" style=\"border:transparent;\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<h4 style=\"text-align:right;padding-right:11em;\">For</h4>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th colspan=\"4\" style=\"border:transparent;\">\n\t\t\t\t\t\t\t\t<h4 style=\"text-align:right;padding-right:30px; \">Signature</h4>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div style=\"text-align: center;position: relative;\">\n\t\t\t\t<button class=\"btn btn-info btn-sm\" (click)=\"printRecept()\" style=\"position: absolute;\n\t\t\t\ttop: -38px;\n\t\t\t\tleft: 43%;\">PRINT</button>\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<!-- Modal footer -->\n\t\t\t<!-- <div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n\t\t\t</div>\n\t\t-->\n\t</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-three-layout/smartassistant/smartassistant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartassistantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs-compat/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_mission_service__ = __webpack_require__("../../../../../src/app/providers/mission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__confirmation_popup_confirmation_dialog_confirmation_dialog_component__ = __webpack_require__("../../../../../src/app/confirmation-popup/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SmartassistantComponent = /** @class */ (function () {
    function SmartassistantComponent(formBuilder, toastr, userService, router, missionService, dialog) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.missionService = missionService;
        this.dialog = dialog;
        this.mouseWheelDir = '';
        this.imgWidth = 300;
        this.date = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy',
            defaultOpen: false
        };
        this.followUpDays = 0;
        this.finalfollowUpDays = 0;
        this.followUpDate = new Date();
        this.todayDate = new Date();
        this.listOne2 = [
            { name: 'John (4)', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F Ref', age: 22, status: 'Appointment' },
            { name: 'Name2 (4)', image: './assets/imgs/avatar3.jpg', date: '22 July,2018', gender: 'F Ref', age: 23, status: 'Fast-Track' },
            { name: 'Name3', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F Ref', age: 24, status: 'Fast-Track' },
            { name: 'Name4', image: './assets/imgs/avatar3.jpg', date: '22 July,2018', gender: 'F Ref', age: 25, status: 'Appointment' },
            { name: 'Name5 (3)', image: './assets/imgs/avatar3.jpg', date: '22 July,2018', gender: 'F Ref', age: 26, status: 'Appointment' },
            { name: 'Name6', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F Ref', age: 27, status: 'Walk-in' },
            { name: 'Name7', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F Ref', age: 28, status: 'Appointment' }
        ];
        this.listOne3 = [
            { name: 'John (5)', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F ', age: 22, status: 'Appointment (13:04)' },
            { name: 'Name2 (5)', image: './assets/imgs/avatar3.jpg', date: '22 July,2018', gender: 'F Ref', age: 23, status: 'Fast-Track' },
            { name: 'Name3 (1)', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F Ref', age: 24, status: 'Appointment' },
            { name: 'Name4', image: './assets/imgs/avatar3.jpg', date: '22 July,2018', gender: 'F Ref', age: 25, status: 'Walk-in' },
            { name: 'Name5', image: './assets/imgs/avatar3.jpg', date: '22 July,2018', gender: 'F Ref', age: 26, status: 'Fast-Track' },
            { name: 'Name6', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F Ref', age: 27, status: 'Walk-in' },
            { name: 'Name7', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F Ref', age: 28, status: 'Fast-Track' }
        ];
        this.trigger = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.triggerUpdate = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.subscription = missionService.missionAnnounced$.subscribe(function (mission) {
            if (mission == 'reload_smart_assistant_page') {
                _this.ngOnInit();
            }
        });
    }
    SmartassistantComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SmartassistantComponent.prototype.ngOnInit = function () {
        this.checkPrescUploaded = false;
        this.doctorArrayObject = {};
        this.newDoctorObject = {};
        this.patientData = {};
        this.loading = true;
        this.socket = __WEBPACK_IMPORTED_MODULE_10_socket_io_client__(__WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__["a" /* environment */].socket);
        this.smartAssistantData = JSON.parse(localStorage['smartAssistantDetails']);
        this.pateintPicPath = __WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__["a" /* environment */].patientPic;
        this.reportPicPath = __WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__["a" /* environment */].reportPic;
        this.pateintPic = null;
        this.reportPics = [];
        this.bodyIndicator = {};
        this.bodyIndicatorSelected = [];
        this.GetSmartAssistantDataAfterLogin();
        this.pulse_range = [];
        var valuePulse = 30;
        while (valuePulse < 181) {
            this.pulse_range.push(valuePulse);
            valuePulse++;
        }
        this.sys_range = [];
        var valueSys = 70;
        while (valueSys < 191) {
            this.sys_range.push(valueSys);
            valueSys++;
        }
        this.dia_range = [];
        var valueDia = 40;
        while (valueDia < 101) {
            this.dia_range.push(valueDia);
            valueDia++;
        }
        this.temperature_range = [];
        var valueTem = 97;
        while (valueTem < 107) {
            this.temperature_range.push(valueTem);
            valueTem++;
        }
        this.rbs_range = [];
        var valueRbs = 50;
        while (valueRbs < 401) {
            this.rbs_range.push(valueRbs);
            valueRbs++;
        }
        this.spo_range = [];
        var valueSpo = 80;
        while (valueSpo < 100) {
            this.spo_range.push(valueSpo);
            valueSpo++;
        }
        this.dataRegistration = [];
        this.dataAppointment = [];
        this.dataRegistrationCopy = [];
        this.dataAppointmentCopy = [];
        this.dataDispensedPatients = [];
        this.dataDispensedPatientsCopy = [];
        this.dispensedPatient = {};
        this.lastVisit = [];
        this.consultingPatient = [];
        this.countLastVisit = [];
        this.consultationType = [
            'Appointment',
            'Walk-in',
            'Emergency'
        ];
        var options = { month: 'short' };
        var today = new Date();
        this.month = today.toLocaleDateString("en-IN", options);
        this.day = new Date().getDate();
        this.year = new Date().getFullYear();
        this.uploadedPrescriptionPath = __WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__["a" /* environment */].uploadedPrescriptionPath;
        this.patientList = [];
        this.patientList1 = [];
        this.AllPatinetsForTodayBySmartAssistant();
    };
    SmartassistantComponent.prototype.imageZoom = function (imgID, resultID) {
        var img, lens, result, cx, cy;
        img = document.getElementById(imgID);
        result = document.getElementById(resultID);
        /*create lens:*/
        lens = document.createElement("DIV");
        lens.setAttribute("class", "img-zoom-lens");
        /*insert lens:*/
        img.parentElement.insertBefore(lens, img);
        /*calculate the ratio between result DIV and lens:*/
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;
        /*set background properties for the result DIV:*/
        result.style.backgroundImage = "url('" + img.src + "')";
        result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
        /*execute a function when someone moves the cursor over the image, or the lens:*/
        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        /*and also for touch screens:*/
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);
        function moveLens(e) {
            var pos, x, y;
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*get the cursor's x and y positions:*/
            pos = getCursorPos(e);
            /*calculate the position of the lens:*/
            x = pos.x - (lens.offsetWidth / 2);
            y = pos.y - (lens.offsetHeight / 2);
            /*prevent the lens from being positioned outside the image:*/
            if (x > img.width - lens.offsetWidth) {
                x = img.width - lens.offsetWidth;
            }
            if (x < 0) {
                x = 0;
            }
            if (y > img.height - lens.offsetHeight) {
                y = img.height - lens.offsetHeight;
            }
            if (y < 0) {
                y = 0;
            }
            /*set the position of the lens:*/
            lens.style.left = x + "px";
            lens.style.top = y + "px";
            /*display what the lens "sees":*/
            result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
        }
        function getCursorPos(e) {
            var a, x = 0, y = 0;
            e = e || window.event;
            /*get the x and y positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x and y coordinates, relative to the image:*/
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return { x: x, y: y };
        }
    };
    SmartassistantComponent.prototype.mouseWheelUpFunc = function () {
        console.log('mouse wheel up');
        this.imgWidth = this.imgWidth + 10;
    };
    SmartassistantComponent.prototype.mouseWheelDownFunc = function () {
        console.log('mouse wheel down');
        this.imgWidth = this.imgWidth - 10;
    };
    SmartassistantComponent.prototype.GetSmartAssistantDataAfterLogin = function () {
        var _this = this;
        var object = {
            smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id
        };
        this.userService.GetSmartAssistantDataAfterLogin(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.dataDoctors = data.doctorsRegisteredForSmartClinic;
                if (_this.dataDoctors.length == 1) {
                    _this.doctorArrayObject = _this.dataDoctors[0];
                    _this.consultationDoctor = _this.dataDoctors[0]._id;
                    _this.digitalTrue = _this.dataDoctors[0].digital_precipitation;
                }
                else {
                    for (var i = 0; i < _this.dataDoctors.length; i++) {
                        if (_this.dataDoctors[i].type_of_doctor == "admin_doctor") {
                            _this.consultationDoctor = _this.dataDoctors[i]._id;
                            _this.doctorArrayObject = _this.dataDoctors[i];
                            _this.digitalTrue = _this.dataDoctors[i].digital_precipitation;
                            break;
                        }
                    }
                }
                for (var i = 0; i < data.doctorsRegisteredForSmartClinic.length; i++) {
                    if (data.doctorsRegisteredForSmartClinic[i].type_of_doctor == "admin_doctor") {
                        _this.adminDoctor = data.doctorsRegisteredForSmartClinic[i];
                    }
                }
                console.log(_this.adminDoctor);
                _this.AllPatinetsForTodayBySmartAssistant();
            }
        }, function (err) {
            console.log(err);
        });
    };
    SmartassistantComponent.prototype.AllPatinetsForTodayBySmartAssistant = function () {
        var _this = this;
        console.log(this.smartAssistantData);
        var object = {
            // doctor_id: this.consultationDoctor,
            smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id
        };
        this.userService.AllPatinetsForTodayBySmartAssistant(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.dataRegistrationCopy = data.dataRegistration;
                _this.dataAppointmentCopy = data.dataAppointment;
                _this.dataDispensedPatientsCopy = data.dataDispensedPatients;
                _this.lastVisit = data.lastVisit;
                _this.countLastVisit = data.countLastVisit;
            }
            _this.filterAppointmentsByDoctor(_this.consultationDoctor);
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    SmartassistantComponent.prototype.filterAppointmentsByDoctor = function (doctor_id) {
        var _this = this;
        if (doctor_id) {
            //alert(doctor_id);
            this.consultingPatient = [];
            console.log(doctor_id);
            this.dataRegistration = [];
            this.dataAppointment = [];
            this.dataDispensedPatients = [];
            if (this.dataRegistrationCopy.length > 0) {
                console.log('here');
                console.log('Registration Data');
                console.log(this.dataRegistration);
                this.dataRegistration = this.dataRegistrationCopy.filter(function (d) { return d.doctor_id._id.toString() == doctor_id.toString(); });
            }
            for (var i = 0; i < this.dataRegistration.length; i++) {
                this.dataRegistration[i].lastVisit = this.getLastTime(this.dataRegistration[i]);
            }
            if (this.dataAppointmentCopy.length > 0) {
                this.dataAppointment = this.dataAppointmentCopy.filter(function (d) { return d.doctor_id.toString() == doctor_id.toString(); });
            }
            if (this.dataDispensedPatientsCopy.length > 0) {
                this.dataDispensedPatients = this.dataDispensedPatientsCopy.filter(function (d) { return d.doctor_id.toString() == doctor_id.toString(); });
            }
            var doctor = this.dataDoctors.filter(function (d) { return d._id.toString() == doctor_id.toString(); });
            this.doctorData = doctor[0];
            console.log(this.doctorData);
            console.log('Registration Data');
            console.log(this.dataRegistration);
            if (this.doctorData.consultationInProgress != 0 && this.dataRegistration.length > 0) {
                console.log('Registration Data');
                console.log(this.dataRegistration);
                console.log('Doctor Data');
                console.log(this.doctorData);
                if (this.doctorData.consultationInProgress) {
                    this.consultingPatient = this.dataRegistration.filter(function (d) { return d.serial_order == _this.doctorData.consultationInProgress && d.doctor_id._id == _this.doctorData._id; });
                }
                console.log(this.consultingPatient);
                if (this.consultingPatient.length > 0) {
                    for (var i = 0; i < this.dataRegistration.length; i++) {
                        if (this.dataRegistration[i].id == this.consultingPatient[0].id) {
                            this.dataRegistration.splice(i, 1);
                            break;
                        }
                    }
                }
            }
            if (this.dataRegistration.length > 0) {
                var currentTime = new Date();
                var currentOffset = currentTime.getTimezoneOffset();
                var ISTOffset = 330;
                var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
                var hoursIST = ISTTime.getHours();
                var minutesIST = ISTTime.getMinutes();
                console.log('Average Consultation Time:' + this.dataRegistration[0].doctor_id.avgConsTime);
                var time;
                if (this.dataRegistration[0].doctor_id.avgConsTime == 'Auto') {
                    console.log(this.dataRegistration[0].doctor_id);
                    var ob = {
                        doctor_id: this.dataRegistration[0].doctor_id._id
                    };
                    this.userService.getAverageConsultationTime(ob).subscribe(function (data) {
                        console.log(data);
                        _this.timeFetched = 'fetched';
                        time = data.mins;
                        console.log('time is:' + time);
                        for (var i = 0; i < _this.dataRegistration.length; i++) {
                            if (_this.doctorData.consultationInProgress == 0) {
                                _this.dataRegistration[i].waitingTime = time * (i);
                            }
                            else {
                                _this.dataRegistration[i].waitingTime = time * (i + 1);
                            }
                            _this.dataRegistration[i].currentPlusWaitingTime = (hoursIST * 60) + minutesIST + _this.dataRegistration[i].waitingTime;
                        }
                        //this.appointment.city = data.city
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    this.timeFetched = 'fetched';
                    time = parseInt(this.dataRegistration[0].doctor_id.avgConsTime.substr(0, 3));
                    for (var i = 0; i < this.dataRegistration.length; i++) {
                        if (this.doctorData.consultationInProgress == 0) {
                            this.dataRegistration[i].waitingTime = time * (i);
                        }
                        else {
                            this.dataRegistration[i].waitingTime = time * (i + 1);
                        }
                        this.dataRegistration[i].currentPlusWaitingTime = (hoursIST * 60) + minutesIST + this.dataRegistration[i].waitingTime;
                    }
                }
                console.log('Average Consultation Time After Process:' + time);
                if (this.doctorData.consultationInProgress != 0) {
                    setInterval(function () {
                        // this.incrementWaitingTimeByOneMin(this.dataRegistration)
                    }, 60000);
                }
            }
        }
    };
    // getRegistrationTime(time){
    //     var hour = Math.trunc(time / 60).toString();
    //     var min = Math.trunc(time % 60).toString();
    //     if(hour.length==1){
    //         hour = "0"+ hour
    //     }
    //     if(min.length==1){
    //         min = "0"+ min
    //     }
    //     var string = hour +":"+ min
    //     return string
    // }
    SmartassistantComponent.prototype.getRegistrationTime = function (time) {
        /*  var hour = Math.trunc(time / 60).toString();
         var min = Math.trunc(time % 60).toString();
         if(hour.length==1){
             hour = "0"+ hour
         }
         if(min.length==1){
             min = "0"+ min
         }
         var string = hour +":"+ min */
        var d = new Date(); // for now
        d.setMinutes(d.getMinutes() + time); // timestamp
        d = new Date(d);
        d.getHours(); // => 9
        d.getMinutes(); // =>  30
        d.getSeconds(); // => 51
        var hour = d.getHours().toString();
        var min = d.getMinutes().toString();
        if (hour.length == 1) {
            hour = "0" + hour;
        }
        if (min.length == 1) {
            min = "0" + min;
        }
        var string = hour + ":" + min;
        return string;
    };
    SmartassistantComponent.prototype.incrementWaitingTimeByOneMin = function (dataRegistration) {
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        var hoursIST = ISTTime.getHours();
        var minutesIST = ISTTime.getMinutes();
        console.log(dataRegistration);
        var time = parseInt(dataRegistration[0].doctor_id.avgConsTime.substr(0, 3));
        for (var i = 0; i < dataRegistration.length; i++) {
            dataRegistration[i].waitingTime = dataRegistration[i].waitingTime + 1;
            dataRegistration[i].currentPlusWaitingTime = (hoursIST * 60) + minutesIST + dataRegistration[i].waitingTime;
        }
    };
    SmartassistantComponent.prototype.clickModal = function (item) {
        this.receptData = item;
        console.log(this.receptData);
        $('#receiptModal').modal('show');
    };
    SmartassistantComponent.prototype.openPrescriptionPreview = function (data) {
        console.log(data);
        this.prescription_id = data.prescription_id;
        this.dispensedPatientSelected = data;
        console.log(this.dispensedPatientSelected);
        /** If digital prescription off and report not uploaded ***/
        if (!data.registration.doctor_id.digital_precipitation) {
            if (!data.image) {
                $("#webcamModal").modal("show");
            }
            else {
                $("#uploadedPrescriptionModal").modal("show");
            }
        }
        else {
            //alert('there');
            if (!data.webcam_pic && !data.image) {
                //	alert('hii');
                this.dispensedPatient = data.registration;
                this.finalPreConditions = data.precription.finalPreConditions;
                this.bodyIndicatorSelected = data.precription.bodyIndicatorSelected;
                this.bodyIndicatorComplete = data.precription.bodyIndicatorComplete;
                this.finalAllergy = data.precription.finalAllergy;
                this.findingsSelected = data.precription.findingsSelected;
                this.symptomsSelected = data.precription.symptomsSelected;
                this.diagnosisSelected = data.precription.diagnosisSelected;
                this.tempMedicationArray = data.precription.tempMedicationArray;
                this.itemsfinding = data.precription.itemsfinding;
                this.itemsymptoms = data.precription.itemsymptoms;
                this.itemsdiagnosis = data.precription.itemsdiagnosis;
                this.treatmentStatus = data.precription.treatmentStatus;
                this.investigationStatus = data.precription.investigationStatus;
                this.suregeryOptionsTop = data.precription.suregeryOptionsTop;
                this.suregeryOptions = data.precription.suregeryOptions;
                this.inputBox = data.precription.inputBox;
                this.medication = data.precription.medication;
                this.medicationStatus = data.precription.medicationStatus;
                this.medicationTabArray = data.precription.medicationTabArray;
                this.medicationCapArray = data.precription.medicationCapArray;
                this.medicationSypArray = data.precription.medicationSypArray;
                this.medicationSuspArray = data.precription.medicationSuspArray;
                this.medicationEmulsnArray = data.precription.medicationEmulsnArray;
                this.medicationInjArray = data.precription.medicationInjArray;
                this.medicationCreamArray = data.precription.medicationCreamArray;
                this.medicationGelArray = data.precription.medicationGelArray;
                this.medicationDropsArray = data.precription.medicationDropsArray;
                this.medicationPowderArray = data.precription.medicationPowderArray;
                this.medicationAerosolsArray = data.precription.medicationAerosolsArray;
                this.medicationMouthWashArray = data.precription.medicationMouthWashArray;
                this.medicationSolutionArray = data.precription.medicationSolutionArray;
                this.medicationLotionArray = data.precription.medicationLotionArray;
                this.medicationOintmentArray = data.precription.medicationOintmentArray;
                this.symptomsComplete = data.precription.symptomsComplete;
                this.diagnosisComplete = data.precription.diagnosisComplete;
                this.treatmentComplete = data.precription.treatmentComplete;
                this.treatmentArray = data.precription.treatmentArray;
                this.investigationIndicatorComplete = data.precription.investigationIndicatorComplete;
                this.investigationArray = data.precription.investigationArray;
                this.surgeryComplete = data.precription.surgeryComplete;
                this.surgerySelectedArray = data.precription.surgerySelectedArray;
                this.instructionsComplete = data.precription.instructionsComplete;
                this.instructionsSelected = data.precription.instructionsSelected;
                this.medicationComplete = data.precription.medicationComplete;
                this.currentVaccinationComplete = data.precription.currentVaccinationComplete;
                this.finalCurrentVaccinationArray = data.precription.finalCurrentVaccinationArray;
                this.dueVaccinationComplete = data.precription.dueVaccinationComplete;
                this.finalDueVaccinationArray = data.precription.finalDueVaccinationArray;
                this.eyePresComplete = data.precription.eyePresComplete;
                this.finalRightOD = data.precription.finalRightOD;
                this.finalLeftOD = data.precription.finalLeftOD;
                this.followDaysComplete = data.precription.followDaysComplete;
                this.finalfollowUpDays = data.precription.finalfollowUpDays;
                this.followUpDate.setDate(new Date(data.createdAt).getDate() + this.finalfollowUpDays);
                console.log(this.followUpDate);
                var options = { month: 'short' };
                this.followUpMonth = this.followUpDate.toLocaleDateString("en-IN", options);
                this.followUpDay = this.followUpDate.getDate();
                this.followUpYear = this.followUpDate.getFullYear();
                this.minutes = data.precription.minutes;
                this.seconds = data.precription.seconds;
                this.languageOptionSelected = data.precription.languageOptionSelected;
                var newDate = new Date();
                newDate.setDate(newDate.getDate() + 1);
                //this.doctorArrayObject = item.doctor_id
                var getYear = new Date();
                var newOne = getYear.getFullYear();
                console.log(newOne - parseInt(data.registration.doctor_id.practicing_since));
                this.getExperienceYearOfDoc = newOne - parseInt(data.registration.doctor_id.practicing_since);
                console.log(this.getExperienceYearOfDoc);
                $("#previewModal").modal("show");
            }
            else if (data.image) {
                $("#uploadedPrescriptionModal").modal("show");
            }
            else {
                $("#uploadedPrescriptionModal").modal("show");
            }
        }
    };
    SmartassistantComponent.prototype.checkOptionOfPad = function (value) {
        if (!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length < 1) {
            return true;
        }
        else {
            for (var i = 0; i < this.doctorData.pad_customization_options.length; i++) {
                if (this.doctorData.pad_customization_options[i].value == value) {
                    if (this.doctorData.pad_customization_options[i].status == true) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
    };
    // getFooterText(){
    //     if(!this.doctorArrayObject.pad_customization_options ||this.doctorArrayObject.pad_customization_options.length<1){
    //         return "Not for Medico-Legal Purpose"
    //     }else{
    //         return this.doctorArrayObject.pad_customization_options[12].text
    //     }
    // }
    // getHeaderText(){
    //     if(!this.doctorArrayObject.pad_customization_options || this.doctorArrayObject.pad_customization_options.length<1){
    //         return "PLEASE TAKE PRIOR APPOINTMENT"
    //     }else{
    //         return this.doctorArrayObject.pad_customization_options[8].text
    //     }
    // }
    SmartassistantComponent.prototype.setAllShiftsForPreview = function (item) {
        this.allShifts = [];
        var Mon = false;
        var Tue = false;
        var Wed = false;
        var Thu = false;
        var Fri = false;
        var Sat = false;
        var Sun = false;
        for (var i = 0; i < item.consultation_schedule.length; i++) {
            var string = '';
            if (item.consultation_schedule[i].Monday == true) {
                Mon = true;
                if (string == '') {
                    string = "Mon";
                }
                else {
                    string = string + ", " + "Mon";
                }
            }
            if (item.consultation_schedule[i].Tuesday == true) {
                Tue = true;
                if (string == '') {
                    string = "Tue";
                }
                else {
                    string = string + ", " + "Tue";
                }
            }
            if (item.consultation_schedule[i].Wednesday == true) {
                Wed = true;
                if (string == '') {
                    string = "Wed";
                }
                else {
                    string = string + ", " + "Wed";
                }
            }
            if (item.consultation_schedule[i].Thursday == true) {
                Thu = true;
                if (string == '') {
                    string = "Thu";
                }
                else {
                    string = string + ", " + "Thu";
                }
            }
            if (item.consultation_schedule[i].Friday == true) {
                Fri = true;
                if (string == '') {
                    string = "Fri";
                }
                else {
                    string = string + ", " + "Fri";
                }
            }
            if (item.consultation_schedule[i].Saturday == true) {
                Sat = true;
                if (string == '') {
                    string = "Sat";
                }
                else {
                    string = string + ", " + "Sat";
                }
            }
            if (item.consultation_schedule[i].Sunday == true) {
                Sun = true;
                if (string == '') {
                    string = "Sun";
                }
                else {
                    string = string + ", " + "Sun";
                }
            }
            var object = {
                day: string,
                shifts: item.consultation_schedule[i].shifts
            };
            this.allShifts.push(object);
        }
        var stringClosed = '';
        this.allShiftsClosed = [];
        if (Mon == false) {
            if (stringClosed == '') {
                stringClosed = "Mon";
            }
            else {
                stringClosed = stringClosed + ", " + "Mon";
            }
        }
        if (Tue == false) {
            if (stringClosed == '') {
                stringClosed = "Tue";
            }
            else {
                stringClosed = stringClosed + ", " + "Tue";
            }
        }
        if (Wed == false) {
            if (stringClosed == '') {
                stringClosed = "Wed";
            }
            else {
                stringClosed = stringClosed + ", " + "Wed";
            }
        }
        if (Thu == false) {
            if (stringClosed == '') {
                stringClosed = "Thu";
            }
            else {
                stringClosed = stringClosed + ", " + "Thu";
            }
        }
        if (Fri == false) {
            if (stringClosed == '') {
                stringClosed = "Fri";
            }
            else {
                stringClosed = stringClosed + ", " + "Fri";
            }
        }
        if (Sat == false) {
            if (stringClosed == '') {
                stringClosed = "Sat";
            }
            else {
                stringClosed = stringClosed + ", " + "Sat";
            }
        }
        if (Sun == false) {
            if (stringClosed == '') {
                stringClosed = "Sun";
            }
            else {
                stringClosed = stringClosed + ", " + "Sun";
            }
        }
        if (stringClosed != '') {
            var object = {
                day: stringClosed
            };
            this.allShiftsClosed.push(object);
        }
    };
    SmartassistantComponent.prototype.printRecept = function () {
        $('#ReceptPrintID').printThis({
            debug: false,
            importCSS: true,
            importStyle: true,
            printContainer: true,
            pageTitle: "Fee Recept",
            removeInline: false,
            printDelay: 333,
            header: null,
            formValues: true
        });
    };
    SmartassistantComponent.prototype.createPdf = function () {
        $('#previewModalPdf').printThis({
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
        this.patientData.print = 1;
        console.log(this.patientData);
        var ob = {
            _id: this.patientData._id
        };
        this.userService.UpdatePrintOutStatusReg(ob).subscribe(function (data) {
            console.log(data);
            //this.appointment.city = data.city
        }, function (err) {
            console.log(err);
        });
    };
    SmartassistantComponent.prototype.getLastTime = function (data) {
        console.log(this.lastVisit);
        console.log(data.doctor_id._id);
        var boolean = false;
        for (var i = 0; i < this.lastVisit.length; i++) {
            if (this.lastVisit[i].registration.pateintName == data.pateintName &&
                this.lastVisit[i].registration.pateintPhone == data.pateintPhone
                && this.lastVisit[i].doctor_id == data.doctor_id._id) {
                var ob;
                ob = {};
                ob.status = true;
                ob.data = this.lastVisit[i];
                ob.count = this.getLastVisitCount(this.lastVisit[i].registration.pateintPhone, this.lastVisit[i].registration.pateintName, data.doctor_id._id);
                ob.time = this.lastVisit[i].registration.createdAt;
                console.log(ob);
                return ob;
            }
        }
        if (boolean == false) {
            var ob;
            ob = {};
            ob.status = false;
            return ob;
        }
    };
    SmartassistantComponent.prototype.getLastVisitCount = function (phone, name, doctor_id) {
        for (var i = 0; i < this.countLastVisit.length; i++) {
            if (this.countLastVisit[i].pateintName == name &&
                this.countLastVisit[i].pateintPhone == phone
                && this.countLastVisit[i].doctor_id == doctor_id) {
                return this.countLastVisit[i].count;
            }
        }
    };
    SmartassistantComponent.prototype.updateReg = function (data) {
        if (data.age_in_years > 0) {
            data.age = data.age_in_years;
            data.age_param = "years";
        }
        else {
            data.age = data.age_in_months;
            data.age_param = "months";
        }
        this.pateintConsultaionDetail = data;
        this.appointment = data;
        if (!data.temp) {
            this.temp_class = "grey-placeholder";
            this.appointment.temp = "";
        }
        else {
            this.temp_class = "black-class";
        }
        if (!data.pulse) {
            this.appointment.pulse = "";
            this.pulse_class = "grey-placeholder";
        }
        else {
            this.pulse_class = "black-class";
        }
        if (!data.bp) {
            this.appointment.bp = "";
            this.genderClass = "grey-placeholder";
            this.sys_class = "grey-placeholder";
        }
        else {
            this.sys_class = "black-class";
        }
        if (!data.dia) {
            this.appointment.dia = "";
            this.dia_class = "grey-placeholder";
        }
        else {
            this.dia_class = "black-class";
        }
        if (!data.rbs || data.rbs == "Select") {
            this.appointment.rbs = "Select";
            this.rbs_class = "grey-placeholder";
        }
        else {
            this.rbs_class = "black-class";
        }
        if (!data.spo || data.spo == "Select") {
            this.appointment.spo = "Select";
            this.spo_class = "grey-placeholder";
        }
        else {
            this.spo_class = "black-class";
        }
        if (!data.dob) {
        }
        else {
            this.dob_class = "black-class";
        }
        if (data.type == 'Appointment') {
            this.consultationType = [
                'Appointment',
                'Walk-in',
                'Emergency'
            ];
        }
        else {
            this.consultationType = [
                'Walk-in',
                'Emergency'
            ];
        }
        console.log(data);
        // this.appointment.name = data.patient_id.name
        // this.appointment.phone = data.patient_id.mobile
        this.GetCityFromClinicId(data.doctor_id.clinic_details.clinic_id);
        this.checkWhichFieldsToShow(data.doctor_id);
        // this.appointment.gender = "Select"
        // if(data.color == 'green'){
        //     this.appointment.type = "Appointment"
        // }else{
        //     this.appointment.type = 'Walk-in'
        // }
    };
    SmartassistantComponent.prototype.GetCityFromClinicId = function (id) {
        var _this = this;
        this.userService.GetCityFromClinicId(id).subscribe(function (data) {
            console.log(data);
            _this.citiesList = data.data;
            _this.citiesList1 = data.data;
            _this.state = data.state;
            //this.appointment.city = data.city
        }, function (err) {
            console.log(err);
        });
    };
    SmartassistantComponent.prototype.checkWhichFieldsToShow = function (doctor) {
        console.log(doctor.reg_fields);
        this.field_dob = false;
        this.field_age = false;
        this.field_weight = false;
        this.field_height = false;
        this.field_temp = false;
        this.field_pulse = false;
        this.field_bp = false;
        this.field_rbs = false;
        this.field_spo = false;
        this.field_patientPic = false;
        this.field_testReport = false;
        this.field_fee = false;
        for (var i = 0; i < doctor.reg_fields.length; i++) {
            if (doctor.reg_fields[i].value == "DOB") {
                this.field_dob = true;
            }
            else if (doctor.reg_fields[i].value == "Age") {
                this.field_age = true;
            }
            else if (doctor.reg_fields[i].value == "Weight") {
                this.field_weight = true;
            }
            else if (doctor.reg_fields[i].value == "Height") {
                this.field_height = true;
            }
            else if (doctor.reg_fields[i].value == "Bodytemperature") {
                this.field_temp = true;
            }
            else if (doctor.reg_fields[i].value == "Pulse") {
                this.field_pulse = true;
            }
            else if (doctor.reg_fields[i].value == "BloodPressure(BP)") {
                this.field_bp = true;
            }
            else if (doctor.reg_fields[i].value == "RandomBloodSugar(RBS)") {
                this.field_rbs = true;
            }
            else if (doctor.reg_fields[i].value == "SpO2") {
                this.field_spo = true;
            }
            else if (doctor.reg_fields[i].value == "Patientphoto") {
                this.field_patientPic = true;
            }
            else if (doctor.reg_fields[i].value == "PatientTestreports") {
                this.field_testReport = true;
            }
            else if (doctor.reg_fields[i].value == "ConsultationFee") {
                this.field_fee = true;
            }
        }
        $("#pateintConsultaionDetail").modal("show");
    };
    SmartassistantComponent.prototype.openWebCam = function (data) {
        if (data == 'patient') {
            this.webCamOpenedBY = 'patient';
        }
        else {
            this.webCamOpenedBY = 'report';
        }
        this.webCam = true;
    };
    SmartassistantComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
        this.webCam = false;
    };
    SmartassistantComponent.prototype.triggerSnapshotUpdate = function () {
        this.triggerUpdate.next();
        this.webCam = false;
    };
    SmartassistantComponent.prototype.handleImage = function (webcamImage) {
        var _this = this;
        $("#webcamModal").modal("hide");
        this.loading = true;
        var object = {
            id: this.dispensedPatientSelected.id,
            image: webcamImage._imageAsDataUrl
        };
        this.userService.UpdatePrescriptionByImage(object).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.checkPrescUploaded = true;
                _this.socket.emit('prescUpload', {
                    room_id: _this.smartAssistantData.dataSmartAssistant._id.toString()
                });
                _this.ngOnInit();
                _this.toastr.success(data.message, "Success");
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    SmartassistantComponent.prototype.handleImageUpdate = function (webcamImage) {
        if (this.webCamOpenedBY == 'patient') {
            this.pateintPic = webcamImage._imageAsDataUrl;
        }
        else if (this.webCamOpenedBY == 'report') {
            this.reportPics.push(webcamImage._imageAsDataUrl);
            console.log(this.reportPics);
        }
    };
    SmartassistantComponent.prototype.removeImageFromReportPics = function (i, type, image) {
        var _this = this;
        if (type == 'local') {
            this.reportPics.splice(i, 1);
        }
        else {
            this.loading = true;
            this.appointment.reportPics.splice(i, 1);
            var object = {
                id: this.appointment.id,
                image: image,
                reportPics: this.appointment.reportPics
            };
            console.log(object);
            this.userService.RemoveTestReportImage(object).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.toastr.success(data.message, "Success");
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    Object.defineProperty(SmartassistantComponent.prototype, "triggerObservableUpdate", {
        get: function () {
            return this.triggerUpdate.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartassistantComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SmartassistantComponent.prototype.UpdateReg = function () {
        var _this = this;
        if (this.appointment.pateintPhone == "" || this.appointment.pateintPhone == null) {
            this.toastr.warning("Please Enter Phone Number", "Warning");
            return;
        }
        if (this.appointment.pateintName == "" || this.appointment.pateintName == null || !isNaN(this.appointment.pateintName)) {
            this.toastr.warning("Please Enter Name", "Warning");
            return;
        }
        if (this.field_age && ((this.appointment.age == "" || this.appointment.age == null) || (this.appointment.age < 1 || this.appointment.age > 100 || isNaN(this.appointment.age)))) {
            this.toastr.warning("Please Enter age", "Warning");
            return;
        }
        if (this.field_dob && (this.appointment.dob == "" || this.appointment.dob == null)) {
            this.toastr.warning("Please Enter date of birth", "Warning");
            return;
        }
        if (this.appointment.gender == "Select") {
            this.toastr.warning("Please Enter gender", "Warning");
            return;
        }
        if (this.appointment.city == null || this.appointment.city == "" || this.appointment.city == undefined || this.appointment.city.trim().length < 1
            || this.appointment.location == null || this.appointment.location == "" || this.appointment.location == undefined || this.appointment.location.trim().length < 1) {
            this.toastr.warning("Please Enter address", "Warning");
            return;
        }
        if (this.appointment.weight != null && this.appointment.weight != '' && (this.appointment.weight < 1 || this.appointment.weight > 150 || isNaN(this.appointment.weight))) {
            this.toastr.warning("Please Enter weight", "Warning");
            return;
        }
        else if (this.appointment.height != null && this.appointment.height != '' && (this.appointment.height < 1 || this.appointment.height > 240 || isNaN(this.appointment.height))) {
            this.toastr.warning("Please Enter height", "Warning");
            return;
        }
        $("#pateintConsultaionDetail").modal("hide");
        var ob;
        ob = {};
        ob.registration = this.appointment;
        ob.appointment_detail = this.appointment;
        if (this.reportPics.length > 0) {
            ob.reportPics = this.reportPics;
        }
        if (this.pateintPic != null && this.pateintPic != '') {
            ob.pateintPic = this.pateintPic;
        }
        ob.lat = this.lat;
        ob.lng = this.lng;
        console.log(ob);
        this.loading = true;
        this.userService.UpdateReg(ob).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.toastr.success(data.message, "Success");
                _this.socket.emit('registrationBooked', {
                    room_id: _this.smartAssistantData.dataSmartAssistant._id.toString()
                });
                _this.ngOnInit();
            }
        }, function (err) {
            console.log(err);
        });
    };
    SmartassistantComponent.prototype.SearchPatientName = function (data) {
        data = data.toLowerCase();
        if (data && data.trim() != '') {
            this.patientList = this.patientList1.filter(function (item) {
                var b = item.name.toLowerCase();
                return (b.indexOf(data) > -1);
            });
        }
        if (data == '') {
            this.patientList = this.patientList1;
        }
    };
    SmartassistantComponent.prototype.findPatientNameFromPhone = function (data) {
        var _this = this;
        if (!isNaN(data)) {
            data = data.trim();
            if (data.length > 0) {
                var object = void 0;
                object = {};
                object.clinic_id = this.appointment.doctor_id.doctm_clinic_id;
                object.mobile = data;
                this.userService.GetPatientDetail(object).subscribe(function (data) {
                    console.log(data);
                    _this.patientList = [];
                    _this.patientList1 = [];
                    if (data.response == true) {
                        if (data.data.length == 1) {
                            _this.appointment.pateintName = data.data[0].name;
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
    SmartassistantComponent.prototype.deleteReg = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__confirmation_popup_confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */], {
            data: data.pateintName + "'s registration"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result == "yes") {
                _this.userService.DeleteReg(data._id).subscribe(function (data) {
                    console.log(data);
                    if (data.response == true) {
                        _this.toastr.success(data.message, "Success");
                        _this.socket.emit('registrationBooked', {
                            room_id: _this.smartAssistantData.dataSmartAssistant._id.toString()
                        });
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
    SmartassistantComponent.prototype.SearchCity = function (data) {
        data = data.toLowerCase();
        if (data && data.trim() != '') {
            this.citiesList = this.citiesList1.filter(function (item) {
                var b = item.name.toLowerCase();
                return (b.indexOf(data) > -1);
            });
        }
        if (data == '') {
            this.citiesList = this.citiesList1;
        }
    };
    SmartassistantComponent.prototype.SearchLocation = function (data) {
        var _this = this;
        data.replace(" ", "");
        var object = {
            search: data,
            lat: this.lat,
            lng: this.lng
        };
        this.userService.SearchLocation(object).subscribe(function (data) {
            console.log(data);
            _this.locationSuggestionDB = [];
            for (var i = 0; i < data.data.predictions.length; i++) {
                var string = data.data.predictions[i].structured_formatting.main_text;
                _this.locationSuggestionDB.push(string);
            }
        });
    };
    SmartassistantComponent.prototype.GetLatLng = function ($event) {
        console.log($event);
        this.appointment.city = JSON.parse(JSON.stringify($event)).formatted_address;
        console.log(this.appointment.city);
        this.lat = JSON.parse(JSON.stringify($event.geometry.location)).lat;
        this.lng = JSON.parse(JSON.stringify($event.geometry.location)).lng;
        console.log(this.lat + ' ' + this.lng);
        /*      var string = city +","+this.state
             string = string.replace(" ","")
             var object = {
                 string: string.trim()
             }
             console.log(object)
             this.userService.GetLatLng(object).subscribe(data=>{
                 console.log(data)
                 if(data.response==true){
                     this.lat = data.data[0].latitude
                     this.lng = data.data[0].longitude
                 }
             })  */
    };
    SmartassistantComponent.prototype.handleAddressChange = function ($event) {
        //alert('');
        this.lat = JSON.parse(JSON.stringify($event.geometry.location)).lat;
        this.lng = JSON.parse(JSON.stringify($event.geometry.location)).lng;
        this.appointment.location = $event.name;
    };
    SmartassistantComponent.prototype.checkWhichFieldsToShowNew = function (id) {
        console.log(id);
    };
    SmartassistantComponent.prototype.digitalPresc = function (item, i) {
        item.serial_number = i;
        this.bodyIndicatorSelected = [];
        if (item.temp != '' && item.temp != null && item.temp != undefined) {
            this.bodyIndicator.temp = item.temp;
        }
        if (item.pulse != '' && item.pulse != null && item.pulse != undefined) {
            this.bodyIndicator.pulse = item.pulse;
        }
        if (item.bp != '' && item.bp != null && item.bp != undefined) {
            this.bodyIndicator.sys = item.bp;
        }
        if (item.dia != '' && item.dia != null && item.dia != undefined) {
            this.bodyIndicator.dia = item.dia;
        }
        if (item.rbs != '' && item.rbs != null && item.rbs != undefined) {
            this.bodyIndicator.rbs = item.rbs;
        }
        if (item.spo != '' && item.spo != null && item.spo != undefined) {
            this.bodyIndicator.spo = item.spo;
        }
        this.setAllShiftsForPreview(item.doctor_id);
        //this.doctorArrayObject = item.doctor_id
        this.newDoctorObject = item.doctor_id;
        this.patientData = item;
        if (this.bodyIndicator.temp != 'Select' && this.bodyIndicator.temp != undefined) {
            if (this.bodyIndicatorSelected.indexOf('Temp: ' + this.bodyIndicator.temp + 'F') == -1) {
                this.bodyIndicatorSelected.push('Temp: ' + this.bodyIndicator.temp + 'F');
            }
        }
        if (this.bodyIndicator.sys != 'Select' && this.bodyIndicator.sys != undefined) {
            if (this.bodyIndicatorSelected.indexOf('BP: ' + this.bodyIndicator.sys + '/' + this.bodyIndicator.dia) == -1) {
                this.bodyIndicatorSelected.push('BP: ' + this.bodyIndicator.sys + '/' + this.bodyIndicator.dia + 'mmHg');
            }
        }
        if (this.bodyIndicator.pulse != 'Select' && this.bodyIndicator.pulse != undefined) {
            if (this.bodyIndicatorSelected.indexOf('Pulse: ' + this.bodyIndicator.pulse) == -1) {
                this.bodyIndicatorSelected.push('Pulse: ' + this.bodyIndicator.pulse + 'pm');
            }
        }
        if (this.bodyIndicator.spo != 'Select' && this.bodyIndicator.spo != undefined) {
            if (this.bodyIndicatorSelected.indexOf('SpO2: ' + this.bodyIndicator.spo) == -1) {
                this.bodyIndicatorSelected.push('SpO2: ' + this.bodyIndicator.spo + "%");
            }
        }
        if (this.bodyIndicator.rbs != 'Select' && this.bodyIndicator.rbs != undefined) {
            if (this.bodyIndicatorSelected.indexOf('RBS: ' + this.bodyIndicator.rbs) == -1) {
                this.bodyIndicatorSelected.push('RBS: ' + this.bodyIndicator.rbs + "mg/dL");
            }
        }
        if (this.bodyIndicator.dia != 'Select' && this.bodyIndicator.dia != undefined) {
            if (this.bodyIndicatorSelected.indexOf('DIA: ' + this.bodyIndicator.dia) == -1) {
                this.bodyIndicatorSelected.push('DIA: ' + this.bodyIndicator.dia + "mg/dL");
            }
        }
        if (!this.bodyIndicatorComplete) {
            this.bodyIndicatorComplete = true;
            console.log(this.bodyIndicatorSelected);
        }
        console.log(item);
        var newDate = new Date();
        newDate.setDate(newDate.getDate() + 1);
        //this.doctorArrayObject = item.doctor_id
        var getYear = new Date();
        var newOne = getYear.getFullYear();
        console.log(newOne - parseInt(item.doctor_id.practicing_since));
        this.getExperienceYear = newOne - parseInt(item.doctor_id.practicing_since);
        console.log("working");
        //$("#myModela").modal("show");getFooterText
        if (!item.doctor_id.pad_customization_options || item.doctor_id.pad_customization_options.length < 1) {
            this.getFooterText = "Not for Medico-Legal Purpose";
        }
        else {
            this.getFooterText = item.doctor_id.pad_customization_options[12].text;
        }
        if (!this.doctorArrayObject.pad_customization_options || this.doctorArrayObject.pad_customization_options.length < 1) {
            this.getHeaderText = "PLEASE TAKE PRIOR APPOINTMENT";
        }
        else {
            this.getHeaderText = this.doctorArrayObject.pad_customization_options[8].text;
        }
        $("#previewModalNewABCD").modal("show");
    };
    SmartassistantComponent.prototype.jsUcfirst = function (string) {
        if (string) {
            return string.toUpperCase();
        }
        else {
            return "";
        }
    };
    SmartassistantComponent.prototype.check_age = function (item) {
        if (!item.dob) {
            if (!item.new_age) {
                return item.age;
            }
            else {
                if (item.new_age.includes('months')) {
                    return item.new_age + ', ';
                }
                else if (item.new_age.includes('years')) {
                    return item.new_age.split('years')[0];
                }
                else if (item.age) {
                    return item.age;
                }
            }
        }
        else {
            return item.age;
        }
    };
    SmartassistantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-smartassistant',
            template: __webpack_require__("../../../../../src/app/header-three-layout/smartassistant/smartassistant.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-three-layout/smartassistant/smartassistant.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__providers_mission_service__["a" /* MissionService */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatDialog */]])
    ], SmartassistantComponent);
    return SmartassistantComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-three-layout/smartassistant/smartassistant.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartassistantModule", function() { return SmartassistantModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__smartassistant_routing_module__ = __webpack_require__("../../../../../src/app/header-three-layout/smartassistant/smartassistant-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__smartassistant_component__ = __webpack_require__("../../../../../src/app/header-three-layout/smartassistant/smartassistant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_webcam__ = __webpack_require__("../../../../ngx-webcam/ngx-webcam.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_google_places_autocomplete__ = __webpack_require__("../../../../ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_google_places_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_google_places_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var SmartassistantModule = /** @class */ (function () {
    function SmartassistantModule() {
    }
    SmartassistantModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY',
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__smartassistant_routing_module__["a" /* SmartassistantRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_webcam__["a" /* WebcamModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_google_places_autocomplete__["GooglePlaceModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["h" /* MatRadioModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__smartassistant_component__["a" /* SmartassistantComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__providers_user_service__["a" /* UserService */]]
        })
    ], SmartassistantModule);
    return SmartassistantModule;
}());



/***/ })

});
//# sourceMappingURL=smartassistant.module.chunk.js.map