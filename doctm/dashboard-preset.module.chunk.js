webpackJsonp(["dashboard-preset.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-preset/dashboard-preset-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPresetRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_preset_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-preset/dashboard-preset.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_preset_component__["a" /* DashboardPresetComponent */]
    }
];
var DashboardPresetRoutingModule = /** @class */ (function () {
    function DashboardPresetRoutingModule() {
    }
    DashboardPresetRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardPresetRoutingModule);
    return DashboardPresetRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-preset/dashboard-preset.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vacciSchedule-div>ul>li>div.active,\r\n.follow-ul>li.active,\r\n.frequency-ul li.active-cel,\r\n.duration-ul li.active-cel,\r\n.special-ul li.active-cel,\r\n.precond-ul li.active-cel,\r\n.special-ul.hindi li.active-cel,\r\n.combined_frequency > li.active-cel, \r\n.combined_duration > li.active-cel,\r\n.combined_instruc > li.active-cel,\r\n.combined_inject > li.active-cel,\r\n.combined_instruc.combined_drop > li.active-cel{\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n\r\n.pad-list>li.half-li {\r\n    width: 33.33%;\r\n    float: left;\r\n}\r\n\r\n.pad-list>li>div {\r\n    text-overflow: unset;\r\n    overflow: unset;\r\n    white-space: normal;\r\n    min-height: 57px;\r\n    padding: 5px 2px;\r\n    display: table;\r\n    height: 65px;\r\n    /*word-break: break-all;*/\r\n}\r\n\r\n.pad-list .medication-li div {\r\n    display: table;\r\n    width: 100%;\r\n    min-height: 55px;\r\n}\r\n\r\n.red-btn.my-pad {\r\n    padding: 15px 15px;\r\n}\r\n\r\nli.medication-li {\r\n    width: 99%;\r\n}\r\n\r\nspan.diseasen-name {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\nspan.medication-transform {\r\n    font-size: 18px;\r\n    width: 100%;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.pad-header>.blue-btn {\r\n    padding: 0px 1px;\r\n    border-right: 0;\r\n}\r\n\r\n.blue-btn .btn-custom {\r\n    padding: 16px 30px;\r\n    border-radius: 0;\r\n    min-width: 100%;\r\n    -webkit-box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12);\r\n            box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12);\r\n}\r\n\r\n.height-50 {\r\n    min-height: 144px;\r\n}\r\n\r\n.vacciSchedule-div>ul>li>div.active,\r\n.follow-ul>li.active,\r\n.frequency-ul li.active-cel,\r\n.duration-ul li.active-cel,\r\n.special-ul li.active-cel,\r\n.precond-ul li.active-cel,\r\n.special-ul.hindi li.active-cel {\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n\r\n.sphere-ul>li.active,\r\n.sphere-ul.right>li.active {\r\n    background-color: #01b0f0;\r\n}\r\n\r\n.flex-inner .table {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.flex-inner ol {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.flex-inner ol>div {\r\n    width: 100%;\r\n    float: left;\r\n    margin-left: -10px;\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n}\r\n\r\n.flex-inner ol>li {\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    word-break: break-all;\r\n    padding-right: 15px;\r\n    position: relative;\r\n}\r\n\r\n/*.flex-inner .medicationol > li{\r\n    margin-bottom: 8px;\r\n}*/\r\n\r\n.flex-inner .followol>li {\r\n    width: 100%;\r\n}\r\n\r\ninput.txt50 {\r\n    width: 100px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    #eyeModal .modal-dialog {\r\n        width: 650px;\r\n    }\r\n}\r\n\r\n.help-note {\r\n    font-size: 10px;\r\n    font-style: italic;\r\n}\r\n\r\n.selected_preset {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.only-text {\r\n    padding: 8px 5px;\r\n    font-size: 12px;\r\n    border: 1px solid rgba(198, 217, 241, 1);\r\n}\r\n\r\n.medication-modal-body .medication-form>.form-group>div.only-text {\r\n    border: 1px solid rgba(198, 217, 241, 1);\r\n}\r\n\r\n.selected_preset .medication-form>.duration>div {\r\n    color: #222;\r\n}\r\n\r\n.medic-info {\r\n    border-top: 0;\r\n}\r\n\r\n.active.lightblue-btn {\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n\r\n.show-some-text p {\r\n    margin-bottom: 0;\r\n    font-size: 14px;\r\n    color: #bababa;\r\n    font-style: italic;\r\n    text-align: center;\r\n    margin-top:10px;\r\n}\r\n\r\n/*** 12 Sep ***/\r\n\r\n.four-eight-wrap .surgery-form.flex-rowdiv {\r\n    width: 100%;\r\n    display: inline-block;\r\n    position: relative;\r\n    float: left;\r\n}\r\n\r\n.prescription-three-prnt {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -moz-flex;\r\n    display: -o-flex;\r\n    float: left;\r\n    width: 100%;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    margin-bottom: 15px;\r\n    max-height: 600px;\r\n    overflow: auto;\r\n}\r\n\r\n.prescription-prnt-innr {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: start;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    float: left;\r\n    width: 32%;\r\n    /*height: 100px;*/\r\n    height: auto;\r\n    -webkit-box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.2);\r\n            box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.2);\r\n    border: 1px solid rgb(74, 126, 187);\r\n    margin: 0px 6px 6px 0;\r\n    border-radius: 6px;\r\n    -webkit-transition: all 0.3s ease 0s;\r\n    transition: all 0.3s ease 0s;\r\n    \r\n}\r\n\r\n.prescription-prnt-innr.Instructions-cls .medicine-body {\r\n    margin-left: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.prescription-prnt-innr.Other-Treatment-cls .medicine-body {\r\n    margin-left: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.prescription-prnt-innr.srgry-cls-new .medicine-body {\r\n    margin-left: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.prescription-prnt-innr.srgry-cls-new .li-close {\r\n    width: 30px;\r\n    height: 15px;    \r\n    line-height: 1.4;\r\n    font-size: 14px;\r\n}\r\n\r\n.prescription-prnt-innr.Surgery-cls .sidebar-preset {\r\n    float: left;\r\n    margin-bottom: 15px;\r\n    width: 100%;\r\n    /*padding: 0 15px;*/\r\n}\r\n\r\n.Clinical-cls .investigation-body {\r\n    padding: 0 0 20px;\r\n}\r\n\r\n.prescription-prnt-innr.Surgery-cls .medic-control.medic-left {\r\n    font-size:14px;\r\n}\r\n\r\n.prescription-prnt-innr.Other-Treatment-cls .sidebar-preset {\r\n    width: 100%;\r\n}\r\n\r\n.prescription-prnt-innr.Other-Treatment-cls .treatment-modal-body .flex-rowdiv {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.prescription-prnt-innr.Other-Treatment-cls .treatment-modal-body .medication-form>.form-group>div {\r\n    border:1px solid rgba(198, 217, 241, 1);\r\n}\r\n\r\n.prescription-prnt-innr.Surgery-cls .presetul {\r\n    width: 100%;\r\n}\r\n\r\n.prescription-prnt-innr.Other-Treatment-cls .presetul {\r\n    width: 100%;\r\n}\r\n\r\n.prescription-prnt-innr:nth-child(7) {\r\n    opacity: 1;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.prescription-prnt-innr > .modal-body {\r\n    width: 100%;\r\n}\r\n\r\n.prescription-prnt-innr:hover {\r\n    -webkit-transition: all 0.3s ease 0s;\r\n    transition: all 0.3s ease 0s;\r\n    -webkit-box-shadow: 0 16px 26px -10px rgba(0, 34, 96, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2);\r\n            box-shadow: 0 16px 26px -10px rgba(0, 34, 96, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2);\r\n}\r\n\r\n.prescription-prnt-innr > p {\r\n    margin: 10px 0;\r\n    text-align: center;\r\n    width: 100%;\r\n    text-transform: uppercase;\r\n    font-weight: bold\r\n}\r\n\r\n.text-muted.m-t-5 {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.four-eight-wrap .medication-form.medicine-list > .form-group.col-lg-6 {\r\n    margin-bottom: 15px;\r\n    padding: 0 15px;\r\n}\r\n\r\n.four-eight-wrap .medication-form.medicine-list > .form-group.col-lg-6:first-child {\r\n    padding-left: 15px;\r\n}\r\n\r\n.prescription-prnt-innr.Instructions-cls .li-close {\r\n    width: 30px;\r\n    height: 15px;    \r\n    line-height: 1.4;\r\n    font-size: 14px;\r\n}\r\n\r\n.prescription-prnt-innr.Other-Treatment-cls .li-close {\r\n    width: 30px;\r\n    height: 15px;    \r\n    line-height: 1.4;\r\n    font-size: 14px;\r\n}\r\n\r\n.prescription-prnt-innr.Instructions-cls .plus-height>li {\r\n    min-height: auto;\r\n}\r\n\r\n.prescription-prnt-innr.Medication-cls .li-close {\r\n    width: 30px;\r\n    height: 15px;    \r\n    line-height: 1.4;\r\n    font-size: 14px;\r\n}\r\n\r\n.prescription-prnt-innr.Instructions-cls .medic-control.medic-left {\r\n    font-size:14px;\r\n}\r\n\r\n.prescription-prnt-innr.Other-Treatment-cls .medic-control.medic-left {\r\n    font-size:14px;\r\n}\r\n\r\n/** 12 Sep End **/\r\n\r\n.preset-heading {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.four-eight-wrap::after {\r\n  background-color: #333333;\r\n  bottom: 0;\r\n  content: \"\";\r\n  height: 100%;\r\n  left: 33%;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 1px;\r\n}\r\n\r\n@media (min-width:320px) and (max-width:767px) {\r\n    .four-eight-wrap::after {\r\n      height: 1px;\r\n      left: 0;\r\n      top: 240px;\r\n      width: 100%;\r\n    }\r\n}\r\n\r\n.four-eight-wrap {\r\n  float: left;\r\n  position: relative;\r\n  width: 100%;\r\n  padding-top: 15px;\r\n  min-height:600px;\r\n}\r\n\r\n.combined_modal .modal-dialog {\r\n    width: 830px;\r\n}\r\n\r\n.combined_flex {\r\n    width: 100%;\r\n    float: left;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n}\r\n\r\n.combined_flex>div {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 33.33%;\r\n    flex: 1 1 33.33%;\r\n    margin: 0 2px;\r\n    border: 1px solid #b9b9b9;\r\n}\r\n\r\n.combined_heading {\r\n    width: 100%;\r\n    float: left;\r\n    color: #fff;\r\n    margin: 0;\r\n    padding: 5px 0;\r\n    text-align: center;\r\n    background-color: #00b0f0;\r\n}\r\n\r\n.combined_frequency,\r\n.combined_duration,\r\n.combined_instruc,\r\n.combined_inject {\r\n    width: 100%;\r\n    float: left;\r\n    margin: 0;\r\n    padding: 5px 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    list-style-type: none;\r\n}\r\n\r\n.combined_frequency>li,\r\n.combined_duration>li,\r\n.combined_instruc>li,\r\n.combined_inject>li {\r\n    width: 70px;\r\n    height: 70px;\r\n    margin: 3px;\r\n    cursor: pointer;\r\n    padding: 0 15px;\r\n    border-radius: 10px;\r\n    border: 1px solid #777;\r\n    text-align: center;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n    display: -webkit-box;\r\n    - display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.combined_flex>div ul>li.active {\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n\r\n.combined_duration>li {\r\n    height: 32px;\r\n}\r\n\r\n.combined_flex>div.frquency_cmbnd ul {\r\n    background-color: #F2F2F2;\r\n}\r\n\r\n.combined_flex>div.duration_cmbnd ul {\r\n    background-color: #DAEDF4;\r\n}\r\n\r\n.combined_flex>div.instr_cmbnd ul.combined_instruc {\r\n    background-color: #EAF1DD;\r\n}\r\n\r\n.combined_flex>div.instr_cmbnd ul.combined_inject {\r\n    background-color: #FCEAD9;\r\n}\r\n\r\n.combined_flex>div.instr_cmbnd ul.combined_drop {\r\n    background-color: #FCEAD9;\r\n}\r\n\r\n.combined_flex>div.duration_cmbnd {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 20%;\r\n    flex: 1 1 20%;\r\n}\r\n\r\n.combined_flex>div.instr_cmbnd .combined_inject {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.combined_flex>div.instr_cmbnd .combined_inject>li {\r\n    width: 100%;\r\n    float: left;\r\n    font-size: 20px;\r\n    height: 62px;\r\n}\r\n\r\n.combined_flex>div.instr_cmbnd .combined_instruc>li {\r\n    width: 120px;\r\n    height: 40px;\r\n}\r\n\r\n#combinedModal2 .combined_flex>div.instr_cmbnd .combined_instruc>li {\r\n    height: 90px;\r\n}\r\n\r\n.combined_flex>div.instr_cmbnd .combined_drop>li {\r\n    width: 50px;\r\n    height: 62px;\r\n}\r\n\r\n.combined_flex>div.instr_cmbnd .combined_dosage>li {\r\n    width: 50px;\r\n    height: 39.5px;\r\n}\r\n\r\n.btn_green {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    background-color: #8BD053;\r\n}\r\n\r\n.instruction-from-select > .medicine-body {\r\n    margin-left:0;\r\n}\r\n\r\n.four-eight-wrap .medication-form .form-group.col-lg-12.col-md-12.col-sm-12.col-xs-12 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.prescription-prnt-innr.Clinical-cls .investigation-modal-body .sidebar-preset {\r\n    width: 100%;\r\n}\r\n\r\n.sidebar-preset.createpreset-surgery.srgry-new .flex-row-div .ng2-dropdown-menu.ng2-dropdown-menu--inside-element {\r\n    left: 53% !important;\r\n}\r\n\r\n.srgry-cls-new .sidebar-preset { \r\n    width: 100%;\r\n}\r\n\r\n.form-control.control-form.med-info-inpt {\r\n    border: 1px solid rgba(198, 217, 241, 1) !important;\r\n    border-radius: 0;\r\n}\r\n\r\ninput.form-control.control-form.med-info-inpt::-webkit-input-placeholder {\r\n    font-size: 12px;\r\n}\r\n\r\ninput.form-control.control-form.med-info-inpt::-moz-placeholder {\r\n    font-size: 12px;\r\n}\r\n\r\n/* Firefox 19+ */\r\n\r\ninput.form-control.control-form.med-info-inpt:-moz-placeholder {\r\n    font-size: 12px;\r\n}\r\n\r\n/* Firefox 18- */\r\n\r\ninput.form-control.control-form.med-info-inpt:-ms-input-placeholder {\r\n    font-size: 12px;\r\n}\r\n\r\n/* IE */\r\n\r\n.instruction-from-select .medic-control .li-close {\r\n    height: 15px;\r\n    line-height: 1.4;\r\n    font-size: 14px;\r\n}\r\n\r\n.instruction-from-select .medicine-body .plus-height>li {\r\n    min-height: 35px;\r\n}\r\n\r\nspan.prescription-head {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    margin: 10px 5px;\r\n    color: #333;\r\n}\r\n\r\na.right-preset {\r\n    color: #01b0f0;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    margin: 10px 5px;\r\n}\r\n\r\n.tags-listing-div .tags-listing.preset-popup-ul {\r\n    width: 100%;\r\n    float: left;\r\n    overflow: auto;\r\n    max-height: 280px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -moz-flex;\r\n    display: -o-flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    list-style-type: none;\r\n    padding: 0px;\r\n    border-radius: 3px;\r\n}\r\n\r\n#presetModal .modal-content {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-preset/dashboard-preset.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"preset-sec\">\n    <div class=\"preset-panel\">\n        <div class=\"preset-heading\">\n            <h4> {{headingName}} Presets  </h4>\n        </div>\n        <div class=\"four-eight-wrap\">\n            <div class=\"col-md-4 col-sm-4 col-xs-12\">\n                <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                    <select class=\"form-control txtfield\" [(ngModel)]=\"condition\" (change)=\"selectChange()\">\n                        <option value=\"abc\"> Select Preset Type </option>\n                        <option value=\"medication\"> Medication </option>\n                        <option value=\"med_info\"> Medicine Info </option>\n                        <option value=\"treatment\"> Other Treatment </option>\n                        <option value=\"symptoms\"> Symptoms </option>\n                        <option value=\"findings\"> Patient Complaints </option>\n                        <option value=\"diagnosis\"> Diagnosis </option>\n                        <option value=\"investigation\"> Investigation </option>\n                        <option value=\"surgery\"> Surgery / Procedure </option>\n                        <option value=\"instructions\"> Instructions </option>\n                        <option value=\"prescription\"> Prescription </option>\n                    </select>\n                </div>\n                <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"condition!='symptoms' && condition!='findings'&& condition!='diagnosis' && condition!='med_info'\">\n                    <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"Give Preset Name*\" [(ngModel)]='preset_name' />\n                </div>\n                <div class=\"form-group col-md-6 col-sm-6 col-xs-6 pull-left\">\n                    <button class=\"btn btn-custom\" type=\"Submit\" (click)=\"savePreset(condition)\"> Save </button>\n                </div>\n                <div class=\"form-group col-md-6 col-sm-6 col-xs-6 text-center\" *ngIf=\"condition!='symptoms' && condition!='findings'&& condition!='diagnosis'\">\n                    <button class=\"btn btn-custom\" type=\"button\" (click)=\"createMoreClicked(condition)\"> Create More </button>\n                </div>\n                <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" style=\"text-align:center;\">\n                    <button class=\"btn btn-custom\" type=\"button\" (click)=\"savePreset('prescription')\"> Save As Prescription Preset </button>\n                </div> -->\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"show-some-text\">\n                        <p>Saved Preset will be shown at prescription of patient</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-8 col-sm-8 col-xs-12\" *ngIf=\"condition=='medication'\">\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"medication-modal-body wrap-div\">\n                            <div class=\"sidebar-preset\">\n                                <ul class=\"presetul\">\n                                    <li class=\"{{mediClass(0)}}\" (click)=\"medicaTab(0,'Tablet')\"> Tablet </li>\n                                    <li class=\"{{mediClass(1)}}\" (click)=\"medicaTab(1,'Capsule')\"> Capsule </li>\n                                    <li class=\"{{mediClass(2)}}\" (click)=\"medicaTab(2,'Syrup')\"> Syrup </li>\n                                    <li class=\"{{mediClass(3)}}\" (click)=\"medicaTab(3,'Suspension')\"> Suspension </li>\n                                    <li class=\"{{mediClass(4)}}\" (click)=\"medicaTab(4,'Emulsion')\"> Emulsion </li>\n                                    <li class=\"{{mediClass(5)}}\" (click)=\"medicaTab(5,'Solution')\"> Solution </li>\n                                    <li class=\"{{mediClass(6)}}\" (click)=\"medicaTab(6,'Injection')\"> Injection </li>\n                                    <li class=\"{{mediClass(7)}}\" (click)=\"medicaTab(7,'Cream')\"> Cream </li>\n                                    <li class=\"{{mediClass(14)}}\" (click)=\"medicaTab(14,'Ointment')\"> Ointment </li>\n                                    <li class=\"{{mediClass(8)}}\" (click)=\"medicaTab(8,'Gel')\"> Gel </li>\n                                    <li class=\"{{mediClass(13)}}\" (click)=\"medicaTab(13,'Lotion')\"> Lotion </li>\n                                    <li class=\"{{mediClass(9)}}\" (click)=\"medicaTab(9,'Drops')\"> Drops </li>\n                                    <li class=\"{{mediClass(10)}}\" (click)=\"medicaTab(10,'Aerosols')\"> Aerosols &amp; Inhalent </li>\n                                    <li class=\"{{mediClass(11)}}\" (click)=\"medicaTab(11,'Powder')\"> Powder &amp; Granule </li>\n                                    <li class=\"{{mediClass(12)}}\" (click)=\"medicaTab(12,'Mouthwash')\"> Mouthwash &amp; Gargle </li>\n                                </ul>\n                            </div>\n                            <div class=\"medicine-body\">\n                            <div class=\"medicine-wrap\">\n                                <div class=\"\" *ngIf=\"medicationStatus[0].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Tablet </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationTabArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Tablet',$event.target.value)\" (onRemove)=\"onRemoveMedName('TabletInfo',medication.tab[i])\" (onAdd)=\"openFrequencyModalFromMed('TabletInfo',medication.tab[i])\" [(ngModel)]='medication.tab[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationTabletDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.tab[i])\"><span class=\"{{getMedFrequencyClass(medication.tab[i].frequency)}}\">{{medication.tab[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.tab[i])\"><span class=\"{{getMedDurationClass(medication.tab[i].duration)}}\">{{medication.tab[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.tab[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationTabletInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Tab',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div *ngIf=\"i == medicationTabArray.length-1\" class=\"li-close plus\" (click)=\"addMoreTab('Tab')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[1].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Capsule </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationCapArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Capsule',$event.target.value)\" (onRemove)=\"onRemoveMedName('CapsuleInfo',medication.cap[i])\" (onAdd)=\"openFrequencyModalFromMed('CapsuleInfo',medication.cap[i])\" [(ngModel)]='medication.cap[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationCapsuleDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.cap[i])\"><span class=\"{{getMedFrequencyClass(medication.cap[i].frequency)}}\">{{medication.cap[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.cap[i])\"><span class=\"{{getMedDurationClass(medication.cap[i].duration)}}\">{{medication.cap[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.cap[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationCapsuleInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Cap',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationCapArray.length-1\" (click)=\"addMoreTab('Cap')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[2].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Syrup </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationSypArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Syrup',$event.target.value)\" (onRemove)=\"onRemoveMedName('SyrupInfo',medication.syp[i])\" (onAdd)=\"openFrequencyModalFromMed('SyrupInfo',medication.syp[i])\" [(ngModel)]='medication.syp[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSyrupDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.syp[i])\"><span class=\"{{getMedFrequencyClass(medication.syp[i].frequency)}}\">{{medication.syp[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-toggle=\"modal\" data-target=\"#combinedModal4\" (click)=\"openFrequencyModal(medication.syp[i])\"><span class=\"{{getMedDosageClass(medication.syp[i].dosage)}}\">{{medication.syp[i].dosage}} (ml) </span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.syp[i])\"><span class=\"{{getMedDurationClass(medication.syp[i].duration)}}\">{{medication.syp[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.syp[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSyrupInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Syp',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationSypArray.length-1\" (click)=\"addMoreTab('Syp')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[3].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Suspension </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationSuspArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Suspension',$event.target.value)\" (onRemove)=\"onRemoveMedName('SuspensionInfo',medication.susp[i])\" (onAdd)=\"openFrequencyModalFromMed('SuspensionInfo',medication.susp[i])\" [(ngModel)]='medication.susp[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSuspensionDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.susp[i])\"><span class=\"{{getMedFrequencyClass(medication.susp[i].frequency)}}\">{{medication.susp[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-toggle=\"modal\" data-target=\"#combinedModal4\" (click)=\"openFrequencyModal(medication.susp[i])\"><span class=\"{{getMedDosageClass(medication.susp[i].dosage)}}\">{{medication.susp[i].dosage}} (ml) </span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#durationModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.susp[i])\"><span class=\"{{getMedDurationClass(medication.susp[i].duration)}}\">{{medication.susp[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.susp[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSuspensionInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Susp',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationSuspArray.length-1\" (click)=\"addMoreTab('Susp')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[4].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Emulsion </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationEmulsnArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Emulsion',$event.target.value)\" (onRemove)=\"onRemoveMedName('EmulsionInfo',medication.emulsn[i])\" (onAdd)=\"openFrequencyModalFromMed('EmulsionInfo',medication.emulsn[i])\" [(ngModel)]='medication.emulsn[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationEmulsionDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.emulsn[i])\"><span class=\"{{getMedFrequencyClass(medication.emulsn[i].frequency)}}\">{{medication.emulsn[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-toggle=\"modal\" data-target=\"#combinedModal4\" (click)=\"openFrequencyModal(medication.emulsn[i])\"><span class=\"{{getMedDosageClass(medication.emulsn[i].dosage)}}\">{{medication.emulsn[i].dosage}} (ml) </span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.emulsn[i])\"><span class=\"{{getMedDurationClass(medication.emulsn[i].duration)}}\">{{medication.emulsn[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.emulsn[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationEmulsionInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Emulsn',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationEmulsnArray.length-1\" (click)=\"addMoreTab('Emulsn')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[5].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Solution </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationSolutionArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Solution',$event.target.value)\" (onRemove)=\"onRemoveMedName('SolutionInfo',medication.tab[i])\" (onAdd)=\"openFrequencyModalFromMed('SolutionInfo',medication.solution[i])\" [(ngModel)]='medication.solution[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSolutionDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.solution[i])\"><span class=\"{{getMedFrequencyClass(medication.solution[i].frequency)}}\">{{medication.solution[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-toggle=\"modal\" data-target=\"#combinedModal4\" (click)=\"openFrequencyModal(medication.solution[i])\"><span class=\"{{getMedDosageClass(medication.solution[i].dosage)}}\">{{medication.solution[i].dosage}} (ml) </span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.solution[i])\"><span class=\"{{getMedDurationClass(medication.solution[i].duration)}}\">{{medication.solution[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.solution[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSolutionInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Solution',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationSolutionArray.length-1\" (click)=\"addMoreTab('Solution')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[6].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Injection </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationInjArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Injection',$event.target.value)\" (onRemove)=\"onRemoveMedName('InjectionInfo',medication.injection[i])\" (onAdd)=\"openFrequencyModalFromMed('InjectionInfo',medication.injection[i])\" [(ngModel)]='medication.injection[0].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationInjectionDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.injection[i])\"><span class=\"{{getMedFrequencyClass(medication.injection[i].frequency)}}\">{{medication.injection[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-target=\"#combinedModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.injection[i])\"><span class=\"{{getMedModeClass(medication.injection[i].mode)}}\">{{medication.injection[i].mode}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.injection[i])\"><span class=\"{{getMedDurationClass(medication.injection[i].duration)}}\">{{medication.injection[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.injection[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationInjectionInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Inj',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationInjArray.length-1\" (click)=\"addMoreTab('Inj')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[7].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Cream </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationCreamArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Cream',$event.target.value)\" (onRemove)=\"onRemoveMedName('CreamInfo',medication.cream[i])\" (onAdd)=\"openFrequencyModalFromMed('CreamInfo',medication.cream[i])\" [(ngModel)]='medication.cream[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationCreamDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.cream[i])\"><span class=\"{{getMedFrequencyClass(medication.cream[i].frequency)}}\">{{medication.cream[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.cream[i])\"><span class=\"{{getMedDurationClass(medication.cream[i].duration)}}\">{{medication.cream[i].duration}}</span></div>\n                                                </div>\n                                                <!-- <span class=\"li-close\"> <i class=\"material-icons\" (click)=\"removeMoreTab('Cream',i)\"> remove </i> </span> -->\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.cream[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationCreamInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Cream',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationCreamArray.length-1\" (click)=\"addMoreTab('Cream')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[8].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Gel </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationGelArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Gel',$event.target.value)\" (onRemove)=\"onRemoveMedName('GelInfo',medication.gel[i])\" (onAdd)=\"openFrequencyModalFromMed('GelInfo',medication.gel[i])\" [(ngModel)]='medication.gel[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationGelDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.gel[i])\"><span class=\"{{getMedFrequencyClass(medication.gel[i].frequency)}}\">{{medication.gel[i].frequency}}</span></div>\n                                                </div>\n                                                <!--  <div class=\"form-group frequency duration\">\n                                                    <div data-target=\"#quantityModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.gel[i])\"> {{medication.gel[i].quantity}} </div>\n                                                </div> -->\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.gel[i])\"><span class=\"{{getMedDurationClass(medication.gel[i].duration)}}\">{{medication.gel[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.gel[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationGelInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Gel',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationGelArray.length-1\" (click)=\"addMoreTab('Gel')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[9].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Drops </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationDropsArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Drops',$event.target.value)\" (onRemove)=\"onRemoveMedName('DropsInfo',medication.drops[i])\" (onAdd)=\"openFrequencyModalFromMed('DropsInfo',medication.drops[i])\" [(ngModel)]='medication.drops[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationDropsDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal3\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.drops[i])\"><span class=\"{{getMedFrequencyClass(medication.drops[i].frequency)}}\">{{medication.drops[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-target=\"#combinedModal3\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.drops[i])\"><span class=\"{{getMedQuantityClass(medication.drops[i].quantity)}}\">{{medication.drops[i].quantity}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal3\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.drops[i])\"><span class=\"{{getMedDurationClass(medication.drops[i].duration)}}\">{{medication.drops[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.drops[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationDropsDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Drops',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationDropsArray.length-1\" (click)=\"addMoreTab('Drops')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[10].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Aerosols &amp; Inhalent </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationAerosolsArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Aerosols',$event.target.value)\" (onRemove)=\"onRemoveMedName('AerosolsInfo',medication.aerosols[i])\" (onAdd)=\"openFrequencyModalFromMed('AerosolsInfo',medication.aerosols[i])\" [(ngModel)]='medication.aerosols[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationAerosolsDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.aerosols[i])\"><span class=\"{{getMedFrequencyClass(medication.aerosols[i].frequency)}}\">{{medication.aerosols[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.aerosols[i])\"><span class=\"{{getMedDurationClass(medication.aerosols[i].duration)}}\">{{medication.aerosols[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.aerosols[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationAerosolsInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Aerosols',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationAerosolsArray.length-1\" (click)=\"addMoreTab('Aerosols')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[11].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Powder &amp; Granule </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationPowderArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Powder',$event.target.value)\" (onRemove)=\"onRemoveMedName('PowderInfo',medication.powder[i])\" (onAdd)=\"openFrequencyModalFromMed('PowderInfo',medication.powder[i])\" [(ngModel)]='medication.powder[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationPowderDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.powder[i])\"><span class=\"{{getMedFrequencyClass(medication.powder[i].frequency)}}\">{{medication.powder[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.powder[i])\"><span class=\"{{getMedDurationClass(medication.powder[i].duration)}}\">{{medication.powder[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.powder[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationPowderInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Powder',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationPowderArray.length-1\" (click)=\"addMoreTab('Powder')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[12].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Mouthwash &amp; Gargle </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationMouthWashArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Mouthwash',$event.target.value)\" (onRemove)=\"onRemoveMedName('MouthwashInfo',medication.mouthwash[i])\" (onAdd)=\"openFrequencyModalFromMed('MouthWashInfo',medication.mouthwash[i])\" [(ngModel)]='medication.mouthwash[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationMouthwashDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.mouthwash[i])\"><span class=\"{{getMedFrequencyClass(medication.mouthwash[i].frequency)}}\">{{medication.mouthwash[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.mouthwash[i])\"><span class=\"{{getMedDurationClass(medication.mouthwash[i].duration)}}\">{{medication.mouthwash[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.mouthwash[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationMouthwashInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('MouthWash',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationMouthWashArray.length-1\" (click)=\"addMoreTab('MouthWash')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[13].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Lotion </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationLotionArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Lotion',$event.target.value)\" (onRemove)=\"onRemoveMedName('LotionInfo',medication.lotion[i])\" (onAdd)=\"openFrequencyModalFromMed('LotionInfo',medication.lotion[i])\" [(ngModel)]='medication.lotion[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationLotionDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.lotion[i])\"><span class=\"{{getMedFrequencyClass(medication.lotion[i].frequency)}}\">{{medication.lotion[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.lotion[i])\"><span class=\"{{getMedDurationClass(medication.lotion[i].duration)}}\">{{medication.lotion[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.lotion[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationLotionInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Lotion',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationLotionArray.length-1\" (click)=\"addMoreTab('Lotion')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[14].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Ointment </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationOintmentArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Ointment',$event.target.value)\" (onRemove)=\"onRemoveMedName('OintmentInfo',medication.ointment[i])\" (onAdd)=\"openFrequencyModalFromMed('OintmentInfo',medication.ointment[i])\" [(ngModel)]='medication.ointment[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationOitmentDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.ointment[i])\"><span class=\"{{getMedFrequencyClass(medication.ointment[i].frequency)}}\">{{medication.ointment[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.ointment[i])\"><span class=\"{{getMedDurationClass(medication.ointment[i].duration)}}\">{{medication.ointment[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.ointment[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationOitmentInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Ointment',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationOintmentArray.length-1\" (click)=\"addMoreTab('Ointment')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <!-- <div *ngIf=\"totalMedicationPresetSelected>0\">\n                                    <div class=\"\" *ngFor=\"let data of doctorPresetArray;let i =index\">\n                                        <div *ngIf=\"data.status==true\">\n                                            <div class=\"selected_preset\" *ngFor=\"let dataPreset of data.newPresetArray;let j =index\">\n                                                <div class=\"medic-heading\">\n                                                    <div class=\"medicHead\"> {{dataPreset.name}} </div>\n                                                </div>\n                                                <ul class=\"medicine-list\">\n                                                    <li *ngIf=\"dataPreset.name=='Tablet' || dataPreset.name=='Capsule' || dataPreset.name=='Cream' || dataPreset.name=='Ointment' || dataPreset.name=='Aerosols' || dataPreset.name=='Powder' || dataPreset.name=='MouthWash'\">\n                                                        <div class=\"flex-rowdiv medication-form\">\n                                                            <div class=\"form-group medicinfo\">\n                                                                <div class=\"only-text\">{{dataPreset.med_name[0].value}}</div>\n                                                            </div>\n                                                            <div class=\"form-group duration\">\n                                                                <div>{{dataPreset.frequency}}</div>\n                                                            </div>\n                                                            <div class=\"form-group duration\">\n                                                                <div>{{dataPreset.duration}}</div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group medicinfo\">\n                                                            <div class=\"medic-info only-text\" *ngIf=\"dataPreset.med_info\">{{dataPreset.med_info[0].value}}</div>\n                                                        </div>\n                                                        <div class=\"medic-control medic-right\">\n                                                            <div class=\"li-close\" (click)=\"removeMedPreset(i,j)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                        </div>\n                                                        <div class=\"medic-control medic-left\">\n                                                            {{j+1}}\n                                                        </div>\n                                                    </li>\n                                                    <li *ngIf=\"dataPreset.name=='Syrup' || dataPreset.name=='Suspension' || dataPreset.name=='Emulsion' || dataPreset.name=='Solution'\">\n                                                        <div class=\"flex-rowdiv medication-form\">\n                                                            <div class=\"form-group medicinfo\">\n                                                                <div class=\"only-text\">{{dataPreset.med_name[0].value}}</div>\n                                                            </div>\n                                                            <div class=\"form-group duration\">\n                                                                <div>{{dataPreset.frequency}}</div>\n                                                            </div>\n                                                            <div class=\"form-group frequency duration\">\n                                                                <div>{{dataPreset.dosage}}</div>\n                                                            </div>\n                                                            <div class=\"form-group duration\">\n                                                                <div>{{dataPreset.duration}}</div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group medicinfo\">\n                                                            <div class=\"medic-info only-text\" *ngIf=\"dataPreset.med_info\">{{dataPreset.med_info[0].value}}</div>\n                                                        </div>\n                                                        <div class=\"medic-control medic-right\">\n                                                            <div class=\"li-close\" (click)=\"removeMedPreset(i,j)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                        </div>\n                                                        <div class=\"medic-control medic-left\">\n                                                            {{j+1}}\n                                                        </div>\n                                                    </li>\n                                                    <li *ngIf=\"dataPreset.name=='Injection' || dataPreset.name=='Gel' || dataPreset.name=='Lotion'\">\n                                                        <div class=\"flex-rowdiv medication-form\">\n                                                            <div class=\"form-group medicinfo\">\n                                                                <div class=\"only-text\">{{dataPreset.med_name[0].value}}</div>\n                                                            </div>\n                                                            <div class=\"form-group duration\">\n                                                                <div>{{dataPreset.frequency}}</div>\n                                                            </div>\n                                                            <div class=\"form-group duration\">\n                                                                <div>{{dataPreset.duration}}</div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group medicinfo\">\n                                                            <div class=\"medic-info only-text\" *ngIf=\"dataPreset.med_info\">{{dataPreset.med_info[0].value}}</div>\n                                                        </div>\n                                                        <div class=\"medic-control medic-right\">\n                                                            <div class=\"li-close\" (click)=\"removeMedPreset(i,j)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                        </div>\n                                                        <div class=\"medic-control medic-left\">\n                                                            {{j+1}}\n                                                        </div>\n                                                    </li>\n                                                    <li *ngIf=\"dataPreset.name=='Drops'\">\n                                                        <div class=\"flex-rowdiv medication-form\">\n                                                            <div class=\"form-group medicinfo\">\n                                                                <div class=\"only-text\">{{dataPreset.med_name[0].value}}</div>\n                                                            </div>\n                                                            <div class=\"form-group duration\">\n                                                                <div>{{dataPreset.frequency}}</div>\n                                                            </div>\n                                                            <div class=\"form-group frequency duration\">\n                                                                <div>{{dataPreset.quantity}}</div>\n                                                            </div>\n                                                            <div class=\"form-group duration\">\n                                                                <div>{{dataPreset.duration}}</div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group medicinfo\">\n                                                            <div class=\"medic-info only-text\" *ngIf=\"dataPreset.med_info\">{{dataPreset.med_info[0].value}}</div>\n                                                        </div>\n                                                        <div class=\"medic-control medic-right\">\n                                                            <div class=\"li-close\" (click)=\"removeMedPreset(i,j)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                        </div>\n                                                        <div class=\"medic-control medic-left\">\n                                                            {{j+1}}\n                                                        </div>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div> -->\n                            </div>\n                            <div class=\"tags-listing-div\" *ngIf=\"medicationpreset==true\">\n                                <fieldset class=\"fieldset-preset\">\n                                    <legend class=\"legend-preset\">Presets</legend>\n                                    <ul class=\"tags-listing\" *ngIf=\"doctorPresetArray && doctorPresetArray.length>0\">\n                                        <li class=\"{{getMedPresetClass('Medication',i)}}\" *ngFor=\"let data of doctorPresetArray;let i = index\" (click)=\"showHidePreset('Medication',i)\"> <a href=\"javascript:void(0)\"> {{data.preset_name}} </a> </li>\n                                    </ul>\n                                    <h5 class=\"text-muted\" style=\"text-align:center\" *ngIf=\"!doctorPresetArray || doctorPresetArray.length<1\">\n                                        No Presets Found, create them on Create Preset page\n                                    </h5>\n                                </fieldset>\n                                <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n                                    <button class=\"btn btn-yellow btn-sm\" type=\"button\" (click)=\"medicatPresets()\"> OK </button>\n                                </div> -->\n                            </div>\n                        </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-8 col-sm-8 col-xs-12\" *ngIf=\"condition=='treatment'\">\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"treatment-modal-body wrap-div\">\n                            <div class=\"sidebar-preset\">\n                                <ul class=\"presetul\">\n                                    <li class=\"{{treatClass(0)}}\" (click)=\"treatTab(0)\"> Lifestyle Changes </li>\n                                    <li class=\"{{treatClass(1)}}\" (click)=\"treatTab(1)\"> Physiotherapy </li>\n                                    <li class=\"{{treatClass(2)}}\" (click)=\"treatTab(2)\"> Plaster </li>\n                                    <li class=\"{{treatClass(3)}}\" (click)=\"treatTab(3)\"> Fomentation </li>\n                                    <li class=\"{{treatClass(4)}}\" (click)=\"treatTab(4)\"> Gargle </li>\n                                    <li class=\"{{treatClass(5)}}\" (click)=\"treatTab(5)\"> Dressing </li>\n                                    <li class=\"{{treatClass(6)}}\" (click)=\"treatTab(6)\"> Bandage </li>\n                                    <li class=\"{{treatClass(7)}}\" (click)=\"treatTab(7)\"> Other </li>\n                                </ul>\n                            </div>\n                            <div class=\"medicine-body\">\n                                <div class=\"medicine-wrap\">\n                                    <div class=\"\" *ngIf=\"treatmentStatus[0].status==true\">\n                                        <div class=\"medic-heading\">\n                                            <div class=\"medicHead\"> Lifestyle Changes </div>\n                                        </div>\n                                        <ul class=\"medicine-list\">\n                                            <li>\n                                                <div class=\"medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [(ngModel)]='treatmentStatus[0].lifestyle' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Daily workout, No oily food etc.\" theme='bootstrap' [maxItems]=\"3\" [addOnBlur]=\"true\">\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorOtherTreatmentDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    1.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(0)\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"\" *ngIf=\"treatmentStatus[1].status==true\">\n                                        <div class=\"medic-heading\">\n                                            <div class=\"medicHead\"> Physiotherapy </div>\n                                        </div>\n                                        <ul class=\"medicine-list\">\n                                            <li>\n                                                <div class=\"flex-rowdiv medication-form\">\n                                                    <div class=\"form-group frequency\">\n                                                        <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus,1)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[1].Frequency)}}\">{{treatmentStatus[1].Frequency}}</span> </div>\n                                                    </div>\n                                                    <div class=\"form-group duration\">\n                                                        <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus,1)\"> <span class=\"{{getMedDurationClass(treatmentStatus[1].Duration)}}\">{{treatmentStatus[1].Duration}}</span> </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    1.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(1)\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"\" *ngIf=\"treatmentStatus[2].status==true\">\n                                        <div class=\"medic-heading\">\n                                            <div class=\"medicHead\"> Plaster </div>\n                                        </div>\n                                        <ul class=\"medicine-list plus-height\">\n                                            <!-- <li>\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#injuryModal\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus[2],2)\"> {{treatmentStatus[2].Injury_Area}} </div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <select class=\"form-control txtfield\" [(ngModel)]='treatmentStatus[2].plaster_type'>\n                                                        <option value=\"Plaster Type\" disabled=\"\"> Plaster Type </option>\n                                                        <option value=\"Type1\"> Type1 </option>\n                                                        <option value=\"Type2\"> Type2 </option>\n                                                        <option value=\"Type3\"> Type3 </option>\n                                                        <option value=\"Type4\"> Type4 </option>\n                                                    </select>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus[2],2)\"> {{treatmentStatus[2].Duration}} </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                1.\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close plus\" (click)=\"addPlasterDiv()\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li> -->\n                                            <li *ngFor=\"let data of treatmentStatus[2].div;let i = index\">\n                                                <div class=\"flex-rowdiv medication-form\">\n                                                    <div class=\"form-group duration\">\n                                                        <div data-target=\"#injuryModal\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal1(treatmentStatus,2,i)\"><span [ngClass]=\"treatmentStatus[2].div[i].Injury_Area != 'Injury Area' ? 'active' : ''\">{{treatmentStatus[2].div[i].Injury_Area}}</span> </div>\n                                                    </div>\n                                                    <div class=\"form-group duration\">\n                                                        <select class=\"form-control txtfield\" [(ngModel)]='treatmentStatus[2].div[i].plaster_type'>\n                                                            <option value=\"Plaster Type\" disabled=\"\"> Plaster Type </option>\n                                                            <option value=\"Type1\"> Type1 </option>\n                                                            <option value=\"Type2\"> Type2 </option>\n                                                            <option value=\"Type3\"> Type3 </option>\n                                                            <option value=\"Type4\"> Type4 </option>\n                                                        </select>\n                                                    </div>\n                                                    <div class=\"form-group duration\">\n                                                        <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal1(treatmentStatus,2,i)\"> <span class=\"{{getMedDurationClass(treatmentStatus[2].div[i].Duration)}}\">{{treatmentStatus[2].div[i].Duration}}</span> </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    {{i+1}}.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"removePlasterDiv(i)\"></i> </div>\n                                                    <div class=\"li-close plus\" (click)=\"addPlasterDiv()\" *ngIf=\"i==treatmentStatus[2].div.length-1\"> <i class=\"fa fa-plus\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"\" *ngIf=\"treatmentStatus[3].status==true\">\n                                        <div class=\"medic-heading\">\n                                            <div class=\"medicHead\"> Fomentation </div>\n                                        </div>\n                                        <ul class=\"medicine-list\">\n                                            <li>\n                                                <div class=\"flex-rowdiv medication-form\">\n                                                    <div class=\"form-group frequency\">\n                                                        <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus,3)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[3].Frequency)}}\">{{treatmentStatus[3].Frequency}}</span> </div>\n                                                    </div>\n                                                    <div class=\"form-group duration\">\n                                                        <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus,3)\"> <span class=\"{{getMedDurationClass(treatmentStatus[3].Duration)}}\">{{treatmentStatus[3].Duration}}</span> </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    1.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(3)\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"\" *ngIf=\"treatmentStatus[4].status==true\">\n                                        <div class=\"medic-heading\">\n                                            <div class=\"medicHead\"> Gargle </div>\n                                        </div>\n                                        <ul class=\"medicine-list\">\n                                            <li>\n                                                <div class=\"flex-rowdiv medication-form\">\n                                                    <div class=\"form-group medicinfo\">\n                                                        <!-- <input type=\"text\" name=\"\" class=\"form-control txtfield\" placeholder=\"Medicine Name\" [(ngModel)]='treatmentStatus[4].med_name' /> -->\n                                                        <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [(ngModel)]='treatmentStatus[4].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap' [addOnBlur]=\"true\" (onAdd)=\"onAddMedNameOtherTreat(treatmentStatus,4)\">\n                                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorOtherTreatmentGargleDB\"></tag-input-dropdown>\n                                                        </tag-input>\n                                                    </div>\n                                                    <div class=\"form-group frequency\">\n                                                        <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus,4)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[4].Frequency)}}\">{{treatmentStatus[4].Frequency}}</span> </div>\n                                                    </div>\n                                                    <div class=\"form-group duration\">\n                                                        <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus,4)\"> <span class=\"{{getMedDurationClass(treatmentStatus[4].Duration)}}\">{{treatmentStatus[4].Duration}}</span> </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    1.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(4)\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"\" *ngIf=\"treatmentStatus[5].status==true\">\n                                        <div class=\"medic-heading\">\n                                            <div class=\"medicHead\"> Dressing </div>\n                                        </div>\n                                        <ul class=\"medicine-list\">\n                                            <li>\n                                                <div class=\"flex-rowdiv medication-form\">\n                                                    <div class=\"form-group medicinfo\">\n                                                        <!-- <input type=\"text\" name=\"\" class=\"form-control txtfield\" placeholder=\"Medicine Name\" [(ngModel)]='treatmentStatus[5].med_name' /> -->\n                                                        <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [(ngModel)]='treatmentStatus[5].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap' [addOnBlur]=\"true\" (onAdd)=\"onAddMedNameOtherTreat(treatmentStatus,5)\">\n                                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorOtherTreatmentDressingDB\"></tag-input-dropdown>\n                                                        </tag-input>\n                                                    </div>\n                                                    <div class=\"form-group frequency\">\n                                                        <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus,5)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[5].Frequency)}}\">{{treatmentStatus[5].Frequency}}</span> </div>\n                                                    </div>\n                                                    <div class=\"form-group duration\">\n                                                        <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus,5)\"> <span class=\"{{getMedDurationClass(treatmentStatus[5].Duration)}}\">{{treatmentStatus[5].Duration}}</span> </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    1.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(5)\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"\" *ngIf=\"treatmentStatus[6].status==true\">\n                                        <div class=\"medic-heading\">\n                                            <div class=\"medicHead\"> Bandage </div>\n                                        </div>\n                                        <ul class=\"medicine-list\">\n                                            <li>\n                                                <div class=\"flex-rowdiv medication-form\">\n                                                    <div class=\"form-group medicinfo\">\n                                                        <!-- <input type=\"text\" name=\"\" class=\"form-control txtfield\" placeholder=\"Medicine Name\" [(ngModel)]='treatmentStatus[6].med_name' /> -->\n                                                        <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [(ngModel)]='treatmentStatus[6].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap' [addOnBlur]=\"true\" (onAdd)=\"onAddMedNameOtherTreat(treatmentStatus,6)\">\n                                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorOtherTreatmentBandageDB\"></tag-input-dropdown>\n                                                        </tag-input>\n                                                    </div>\n                                                    <div class=\"form-group frequency\">\n                                                        <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus,6)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[6].Frequency)}}\">{{treatmentStatus[6].Frequency}}</span> </div>\n                                                    </div>\n                                                    <div class=\"form-group duration\">\n                                                        <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus,6)\"> <span class=\"{{getMedDurationClass(treatmentStatus[6].Duration)}}\">{{treatmentStatus[6].Duration}}</span> </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    1.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(6)\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <!-- <div class=\"\" *ngIf=\"treatmentStatus[7].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Other </div>\n                                    </div>\n                                    <ul class=\"medicine-list plus-height\">\n                                        <li>\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [(ngModel)]='treatmentStatus[7].treat' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"injury area, injury area.......\" theme='bootstrap' [maxItems]=\"8-totalOtherTreatment\" (onAdd)=\"onAddOtherTreat()\" (onRemove)=\"onRemoveOtherTreat()\"></tag-input>\n                                                </div>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                1.\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\"> <i class=\"fa fa-minus\"(click)=\"treatTab(7)\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div> -->\n                                    <div class=\"\" *ngIf=\"treatmentStatus[7].status==true\">\n                                        <div class=\"medic-heading\">\n                                            <div class=\"medicHead\"> Other </div>\n                                        </div>\n                                        <ul class=\"medicine-list\">\n                                            <li *ngFor=\"let data of treatmentStatus[7].div;let i = index\">\n                                                <div class=\"flex-rowdiv medication-form\">\n                                                    <div class=\"form-group medicinfo\">\n                                                        <!-- <input type=\"text\" name=\"\" class=\"form-control txtfield\" placeholder=\"Treatment Name\" [(\n                                                    ngModel)]='treatmentStatus[7].div[i].med_name' /> -->\n                                                        <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [(ngModel)]='treatmentStatus[7].div[i].med_name' placeholder=\"Treatment Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Treatment Name\" theme='bootstrap' [addOnBlur]=\"true\" (onAdd)=\"onAddMedNameOtherTreat(treatmentStatus[7].div,i)\">\n                                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorOtherTreatmentOtherDB\"></tag-input-dropdown>\n                                                        </tag-input>\n                                                    </div>\n                                                    <div class=\"form-group frequency\">\n                                                        <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus[7].div,i)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[7].div[i].Frequency)}}\">{{treatmentStatus[7].div[i].Frequency}}</span> </div>\n                                                    </div>\n                                                    <div class=\"form-group duration\">\n                                                        <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus[7].div,i)\"> <span class=\"{{getMedDurationClass(treatmentStatus[7].div[i].Duration)}}\">{{treatmentStatus[7].div[i].Duration}}</span> </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    {{i+1}}.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"removeOtherDiv(i)\"></i> </div>\n                                                    <div class=\"li-close plus\" (click)=\"addOtherDiv()\" *ngIf=\"i==treatmentStatus[7].div.length-1\"> <i class=\"fa fa-plus\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                                <div class=\"tags-listing-div\" *ngIf=\"treatmentpreset==true\">\n                                    <fieldset class=\"fieldset-preset\">\n                                        <legend class=\"legend-preset\">Presets</legend>\n                                        <ul class=\"tags-listing\">\n                                            <li class=\"{{getMedPresetClass('Other Treatments',i)}}\" *ngFor=\"let data of presetArrayOtherTreatment;let i = index\" (click)=\"showHidePreset('Other Treatments',i)\"> <a href=\"javascript:void(0)\"> {{data.preset_name}} </a> </li>\n                                        </ul>\n                                    </fieldset>\n                                    <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n                                    <button class=\"btn btn-yellow btn-sm\" type=\"button\" (click)=\"treatPresets()\"> OK </button>\n                                </div> -->\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-8 col-sm-8 col-xs-12 symptoms-from-select\" *ngIf=\"condition=='symptoms'\">\n                <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"medication-modal-body p-0\">\n                        <tag-input class=\"selectize-qual\" [(ngModel)]='itemsymptoms' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Vomiting, Vertigo, Fever etc.\" theme='bootstrap' (onRemove)=\"removePresets('symptoms',$event )\" (onAdd)=\"addPresets('symptoms',itemsymptoms[itemsymptoms.length-1] )\" [displayBy]=\"'value'\" [maxItems]=\"4\" [blinkIfDupe]=true (keyup)=\"onTextChange('SYMPTOMS',$event.target.value)\">\n                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorSymptomsDB\"></tag-input-dropdown>\n                        </tag-input>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-8 col-sm-8 col-xs-12 symptoms-from-select\" *ngIf=\"condition=='findings'\">\n                <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"medication-modal-body p-0\">\n                        <tag-input class=\"selectize-qual\" [(ngModel)]='itemsfinding' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Bleeding nose, dry eyes, body rashes etc.\" theme='bootstrap' [displayBy]=\"'value'\" [maxItems]=\"4\" [blinkIfDupe]=true (keyup)=\"onTextChange('Patient Complaints',$event.target.value)\">\n                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorClinicalObservation\"></tag-input-dropdown>\n                        </tag-input>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-8 col-sm-8 col-xs-12 symptoms-from-select\" *ngIf=\"condition=='diagnosis'\">\n                <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"medication-modal-body p-0\">\n                        <tag-input class=\"selectize-qual\" [(ngModel)]='itemsdiagnosis' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Viral fever, cold, etc.\" theme='bootstrap' (onRemove)=\"removePresets('diagnosis',$event )\" (onAdd)=\"addPresets('diagnosis',itemsdiagnosis[itemsdiagnosis.length-1] )\" [displayBy]=\"'value'\" [maxItems]=\"4\" [blinkIfDupe]=true (keyup)=\"onTextChange('Diagnosis',$event.target.value)\">\n                                <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorDiagnosisDB\"></tag-input-dropdown>\n                            </tag-input>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-8 col-sm-8 col-xs-12\" *ngIf=\"condition=='investigation'\">\n                <div class=\"row\">\n                    <div class=\"medication-modal-body investigation-modal-body wrap-div\">\n                        <div class=\"sidebar-preset\">\n                            <ul class=\"investigationul\">\n                                <li class=\"{{invesClass(0)}}\" (click)=\"invesTab(0)\"> PATHOLOGY </li>\n                                <li class=\"{{invesClass(1)}}\" (click)=\"invesTab(1)\"> X-Ray </li>\n                                <li class=\"{{invesClass(2)}}\" (click)=\"invesTab(2)\"> Ultrasound </li>\n                                <li class=\"{{invesClass(3)}}\" (click)=\"invesTab(3)\"> Doppler studies </li>\n                                <li class=\"{{invesClass(4)}}\" (click)=\"invesTab(4)\"> ECG </li>\n                                <li class=\"{{invesClass(5)}}\" (click)=\"invesTab(5)\"> EEG </li>\n                                <li class=\"{{invesClass(6)}}\" (click)=\"invesTab(6)\"> TMT </li>\n                                <li class=\"{{invesClass(7)}}\" (click)=\"invesTab(7)\"> Echo </li>\n                                <li class=\"{{invesClass(8)}}\" (click)=\"invesTab(8)\"> CT-Scan </li>\n                                <li class=\"{{invesClass(9)}}\" (click)=\"invesTab(9)\"> MRI </li>\n                                <li class=\"{{invesClass(10)}}\" (click)=\"invesTab(10)\"> Nerve Test </li>\n                                <li class=\"{{invesClass(11)}}\" (click)=\"invesTab(11)\"> Uroflowmetry </li>\n                                <li class=\"{{invesClass(12)}}\" (click)=\"invesTab(12)\"> Audiometry </li>\n                                <li class=\"{{invesClass(13)}}\" (click)=\"invesTab(13)\"> Mammography </li>\n                                <li class=\"{{invesClass(14)}}\" (click)=\"invesTab(14)\"> Bone Densitometry </li>\n                                <li class=\"{{invesClass(15)}}\" (click)=\"invesTab(15)\"> Eye Tests </li>\n                                <li class=\"{{invesClass(16)}}\" (click)=\"invesTab(16)\"> Lung Test </li>\n                                <li class=\"{{invesClass(17)}}\" (click)=\"invesTab(17)\"> Others </li>\n                            </ul>\n                        </div>\n                        <div class=\"investigation-body\">\n                            <div class=\"\" *ngIf=\"investigationStatus[0].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\"> {{investigationStatus[0].name}} </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[0].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Lipid profile, KFT, Uric acid, etc.\" theme='bootstrap' [maxItems]=\"5\" (keyup)=\"onTextChange('Pathology',$event.target.value)\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"pathologySuggestionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[1].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[1].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[1].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"CHEST ( L LAT ), PNS, etc.\" theme='bootstrap' [maxItems]=\"5\" (keyup)=\"onTextChange(investigationStatus[1].name,$event.target.value)\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"xraySuggestionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[2].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[2].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[2].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Abdomen, RNS, BERA etc.\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[2].name,$event.target.value)\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"ultraSoundSuggestionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[3].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[3].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[3].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Renal, Pelvic etc.\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[3].name,$event.target.value)\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"dopplerSuggestionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[4].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[4].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[4].model'>\n                                        <option value=\"Select\" disabled=\"\"> Select </option>\n                                        <option value=\"{{data}}\" *ngFor=\"let data of ecgSuggestionDB\"> {{data}} </option>\n                                    </select>\n                                    <!-- <tag-input class=\"selectize-qual\" [onlyFromAutocomplete]=\"true\" [(ngModel)]='investigationStatus[4].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Area 1\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[4].name,$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"ecgSuggestionDB\"></tag-input-dropdown>\n                                        </tag-input> -->\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[5].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[5].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[5].model'>\n                                        <option value=\"Select\" disabled=\"\"> Select </option>\n                                        <option value=\"{{data}}\" *ngFor=\"let data of eegSuggestionDB\"> {{data}} </option>\n                                    </select>\n                                    <!-- <tag-input class=\"selectize-qual\" [onlyFromAutocomplete]=\"true\" [(ngModel)]='investigationStatus[5].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Area 1\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[5].name,$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"eegSuggestionDB\"></tag-input-dropdown>\n                                        </tag-input> -->\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[6].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[6].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[6].model'>\n                                        <option value=\"Select\" disabled=\"\"> Select </option>\n                                        <option value=\"{{data}}\" *ngFor=\"let data of tmtSuggestionDB\"> {{data}} </option>\n                                    </select>\n                                    <!-- <tag-input class=\"selectize-qual\" [onlyFromAutocomplete]=\"true\" [(ngModel)]='investigationStatus[6].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Area 1\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[6].name,$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"tmtSuggestionDB\"></tag-input-dropdown>\n                                        </tag-input> -->\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[7].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[7].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[7].model'>\n                                        <option value=\"Select\" disabled=\"\"> Select </option>\n                                        <option value=\"{{data}}\" *ngFor=\"let data of echoSuggestionDB\"> {{data}} </option>\n                                    </select>\n                                    <!-- <tag-input class=\"selectize-qual\" [onlyFromAutocomplete]=\"true\" [(ngModel)]='investigationStatus[7].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Area 1\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[7].name,$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"echoSuggestionDB\"></tag-input-dropdown>\n                                        </tag-input> -->\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[8].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[8].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[8].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Abdomen, kidney, chest etc.\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[8].name,$event.target.value)\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"ctScanSuggestionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[9].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[9].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[9].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Liver, heart, spleen etc.\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[9].name,$event.target.value)\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"mriSuggestionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[10].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[10].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[10].model'>\n                                        <option value=\"Select\" disabled=\"\"> Select </option>\n                                        <option value=\"{{data}}\" *ngFor=\"let data of nerveSuggestionDB\"> {{data}} </option>\n                                    </select>\n                                    <!-- <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[10].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"EMG, NCV, SSEP etc.\" theme='bootstrap' [maxItems]=\"3\" (keyup)=\"onTextChange('Nerve Test',$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"nerveSuggestionDB\"></tag-input-dropdown>\n                                        </tag-input> -->\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[11].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[11].name}}</div>\n                                </div>\n                                <!-- <div class=\"form-group\">\n                                        <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[11].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"PFT, Lung volume etc\" theme='bootstrap' [maxItems]=\"2\" ></tag-input>\n                                    </div> -->\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[12].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[12].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[12].model'>\n                                        <option value=\"Select\" disabled=\"\"> Select </option>\n                                        <option value=\"{{data}}\" *ngFor=\"let data of audioSuggestionDB\"> {{data}} </option>\n                                    </select>\n                                    <!-- <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[12].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"ABR, Tuning fork test etc.\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[12].name,$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"audioSuggestionDB\"></tag-input-dropdown>\n                                        </tag-input> -->\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[13].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[13].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[13].model'>\n                                        <option value=\"Select\" disabled=\"\"> Select </option>\n                                        <option value=\"{{data}}\" *ngFor=\"let data of mammograaphySuggestionDB\"> {{data}} </option>\n                                    </select>\n                                    <!-- <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[13].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"ABR, Tuning fork test etc.\" theme='bootstrap' [maxItems]=\"2\"></tag-input> -->\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[14].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[14].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[14].model'>\n                                        <option value=\"Select\" disabled=\"\"> Select </option>\n                                        <option value=\"{{data}}\" *ngFor=\"let data of boneSuggestionDB\"> {{data}} </option>\n                                    </select>\n                                    <!-- <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[14].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Area 1\" theme='bootstrap' [maxItems]=\"2\"></tag-input> -->\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[15].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[15].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[15].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Retinoscopy, Pachymetry etc.\" theme='bootstrap' [maxItems]=\"3\" (keyup)=\"onTextChange('Eye Test',$event.target.value)\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"eyeSuggestionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[16].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[16].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [onlyFromAutocomplete]=\"true\" [(ngModel)]='investigationStatus[16].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Area 1\" theme='bootstrap' [maxItems]=\"3\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"lungSuggestionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[17].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[17].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[17].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"test-1, test-2....\" theme='bootstrap' [maxItems]=\"2\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"otherSuggestionDB\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tags-listing-div\" *ngIf=\"investigationpreset==true\">\n                            <ul class=\"tags-listing\">\n                                <li class=\"{{getMedPresetClass('Investigation',i)}}\" *ngFor=\"let data of presetArrayInvestigation;let i = index\" (click)=\"showHidePreset('Investigation',i)\"> <a href=\"javascript:void(0)\"> {{data.preset_name}} </a> </li>\n                            </ul>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n                                <button class=\"btn btn-yellow btn-sm\" type=\"button\" (click)=\"invesPresets()\"> OK </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-8 col-sm-8 col-xs-12\" *ngIf=\"condition=='surgery'\">\n                <div class=\"sidebar-preset createpreset-surgery\">\n                    <ul class=\"presetul\">\n                        <li *ngFor=\"let option of suregeryOptionsTop;let i = index\" class=\"{{surgryClass(i)}}\" (click)=\"surgryTabTop(i)\">\n                            {{option.name}}\n                            <div class=\"small cus-switch\">\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" [checked]=\"option.status1\" (change)=\"surgeryOptionTopStatusChange(i)\">\n                                    <span class=\"slider round\"></span>\n                                </label>\n                            </div>\n                        </li>\n                        <li class=\"m-t-10 select_specialist\" (click)=\"showhideTab()\">\n                            Select upto 3 specialities\n                            <span class=\"pull-right arrow_down\"> <i class=\"material-icons\"> keyboard_arrow_down </i> </span>\n                        </li>\n                        <li [hidden]=\"!othertabs\" *ngFor=\"let option of suregeryOptions;let i = index\" (click)=\"surgryTab(i)\">\n                            {{option.name}}\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"medicine-body srgry-new\">\n                    <div class=\"medicine-wrap\">\n                        <div class=\"\" *ngFor=\"let option of suregeryOptionsTop | slice:0:3;let i = index\">\n                            <div class=\"medic-heading\" *ngIf=\"option.status==true\">\n                                <div class=\"medicHead\"> {{option.name}} </div>\n                            </div>\n                            <ul class=\"medicine-list plus-height\" *ngIf=\"option.status==true\">\n                                <li *ngFor=\"let options of option.div;let j = index\">\n                                    <div class=\"flex-rowdiv medication-form surgery-form\">\n                                        <div class=\"form-group\">\n                                            <select class=\"form-control txtfield\" [(ngModel)]=\"options.sub_speciality\" (change)=\"onSelectSubSpeciality(options,i,j)\">\n                                                <option value='' selected=\"\" disabled=\"\"> Sub-Speciality </option>\n                                                <option *ngFor=\"let subSpec of option.sub_speciality_array\" value=\"{{subSpec}}\">{{subSpec | titlecase}}</option>\n                                            </select>\n                                            <!-- <input type=\"text\" name=\"\" class=\"form-control txtfield\" placeholder=\"Sub-Speciality\" [(ngModel)]=\"options.sub_speciality\" /> -->\n                                        </div>\n                                        <div class=\"form-group medicinfo\">\n                                            <!-- <input type=\"text\" name=\"\" class=\"form-control txtfield\" placeholder=\"Procedure Name\" [(ngModel)]=\"options.procedure_name\" /> -->\n                                            <tag-input class=\"selectize-qual\" placeholder=\"Procedure Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Procedure Name\" theme='bootstrap' [displayBy]=\"'value'\" [maxItems]=\"1\" [blinkIfDupe]=true [(ngModel)]='options.procedure_name' [addOnBlur]=\"true\">\n                                                <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"option.database\"></tag-input-dropdown>\n                                            </tag-input>\n                                        </div>\n                                    </div>\n                                    <div class=\"medic-control medic-left\">\n                                        {{j+1}}.\n                                    </div>\n                                    <div class=\"medic-control medic-right\">\n                                        <div class=\"li-close\" (click)=\"removeTextBoxSuregery(i,j)\"> <i class=\"fa fa-minus\"></i> </div>\n                                        <div class=\"li-close plus\" *ngIf=\"j== option.div.length-1\" (click)=\"addTextBoxSuregery(i,j)\"> <i class=\"fa fa-plus\"></i> </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"tags-listing-div\" *ngIf=\"surgeryPreset==true\">\n                        <ul class=\"tags-listing\">\n                            <li class=\"{{getMedPresetClass('Surgery',i)}}\" *ngFor=\"let data of presetArraySurgery;let i = index\" (click)=\"showHidePreset('Surgery',i)\"> <a href=\"javascript:void(0)\"> {{data.preset_name}} </a> </li>\n                        </ul>\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n                            <button class=\"btn btn-yellow btn-sm\" type=\"button\" (click)=\"surgeryPresets()\"> OK </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-8 col-sm-8 col-xs-12 instruction-from-select\" *ngIf=\"condition=='instructions'\">\n                <div class=\"medicine-body\">\n                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                        <ul class=\"medicine-list plus-height\">\n                            <li *ngFor=\"let instructions of inputBox;let i = index\">\n                                <div class=\"form-group frequency\">\n                                    <tag-input class=\"selectize-qual\" placeholder=\"{{instructions.name}}\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"{{instructions.name}}\" theme='bootstrap' [displayBy]=\"'value'\" [maxItems]=\"1\" [blinkIfDupe]=true [(ngModel)]='inputBox[i].inputInstruction' [addOnBlur]=\"true\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'10 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"instructionsSavedDB\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                                <div class=\"medic-control medic-left\">\n                                    {{i+1}}.\n                                </div>\n                                <div class=\"medic-control medic-right\">\n                                    <div class=\"li-close\" (click)=\"removeTextbox(i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                    <div *ngIf=\"i==inputBox.length-1\" class=\"li-close plus\" (click)=\"addTextbox(i)\"> <i class=\"fa fa-plus\"></i> </div>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-8 col-sm-8 col-xs-12\" *ngIf=\"condition=='med_info'\">\n                <div class=\"flex-rowdiv medication-form surgery-form medicine-list\">\n                    <div class=\"form-group col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                        <select class=\"form-control txtfield\" [(ngModel)]=\"medInfoObject.medication_type\">\n                            <option value=\"abc\" disabled=\"\"> Medicine Type </option>\n                            <option value='TabletInfo'>Tablet</option>\n                            <option value='CapsuleInfo'>Capsule</option>\n                            <option value='SyrupInfo'>Syrup</option>\n                            <option value='SuspensionInfo'>Suspension</option>\n                            <option value='EmulsionInfo'>Emulsion</option>\n                            <option value='SolutionInfo'>Solution</option>\n                            <option value='InjectionInfo'>Injection</option>\n                            <option value='CreamInfo'>Cream</option>\n                            <option value='OitmentInfo'>Oitment</option>\n                            <option value='GelInfo'>Gel</option>\n                            <option value='LotionInfo'>Lotion</option>\n                            <option value='DropsInfo'>Drops</option>\n                            <option value='AerosolsInfo'>Aerosols</option>\n                            <option value='PowderInfo'>Powder</option>\n                            <option value='MouthWashInfo'>MouthWash</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group col-lg-12 col-md-12 col-sm-12 col-xs-12 medicinfo\">\n                        <tag-input class=\"selectize-qual\" placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap' [displayBy]=\"'value'\" [maxItems]=\"1\" [blinkIfDupe]=true [(ngModel)]='medInfoObject.med_name' [addOnBlur]=\"true\">\n                        </tag-input>\n                    </div>\n                    <div class=\"form-group col-lg-12 col-md-12 col-sm-12 col-xs-12 medicinfo\">\n                        <!-- <tag-input class=\"selectize-qual\" placeholder=\"Medicine Info 1\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info 1\" theme='bootstrap' [displayBy]=\"'value'\" [maxItems]=\"1\" [blinkIfDupe]=true [(ngModel)]='medInfoObject.med_info1' [addOnBlur]=\"true\">\n                        </tag-input> -->\n                        <input class=\"form-control control-form med-info-inpt\" type=\"text\" name=\"usrname\" maxlength=\"30\" placeholder=\"Medicine Info 1\" [(ngModel)]='medInfoObject.med_info1'>\n                        <small class=\"text-muted m-t-5\">Max. 30 Characters</small>\n                    </div>\n                    <div class=\"form-group col-lg-12 col-md-12 col-sm-12 col-xs-12 medicinfo\">\n                        <!-- <tag-input class=\"selectize-qual\" placeholder=\"Medicine Info 2\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info 2\" theme='bootstrap' [displayBy]=\"'value'\" [maxItems]=\"1\" [blinkIfDupe]=true [(ngModel)]='medInfoObject.med_info2' [addOnBlur]=\"true\">\n                        </tag-input> -->\n                        <input class=\"form-control control-form med-info-inpt\" type=\"text\" name=\"usrname\" maxlength=\"30\" placeholder=\"Medicine Info 2\" [(ngModel)]='medInfoObject.med_info2'>\n                        <small class=\"text-muted m-t-5\">Max. 30 Characters</small>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-8 col-sm-8 col-xs-12\" *ngIf=\"condition=='prescription'\">\n                <div class=\"prescription-three-prnt\">\n                    <div class=\"prescription-prnt-innr Symptoms-cls\">\n                        <span class=\"prescription-head\">Symptoms</span>\n                        <a href=\"javascript:;\" class=\"right-preset\" (click)=\"openPresetModal('Symptoms')\">Preset</a>\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <div class=\"medication-modal-body p-0\">\n                                <tag-input class=\"selectize-qual\" [(ngModel)]='itemsymptoms' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Vomiting, Vertigo, Fever etc.\" theme='bootstrap' (onRemove)=\"removePresets('symptoms',$event )\" (onAdd)=\"addPresets('symptoms',itemsymptoms[itemsymptoms.length-1] )\" [displayBy]=\"'value'\" [maxItems]=\"4\" [blinkIfDupe]=true (keyup)=\"onTextChange('SYMPTOMS',$event.target.value)\">\n                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorSymptomsDB\"></tag-input-dropdown>\n                                </tag-input>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"prescription-prnt-innr Diagnosis-cls\">\n                        <span class=\"prescription-head\">Diagnosis</span>\n                        <a href=\"javascript:;\" class=\"right-preset\" (click)=\"openPresetModal('Diagnosis')\">Preset</a>\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <div class=\"medication-modal-body p-0\">\n                                <tag-input class=\"selectize-qual\" [(ngModel)]='itemsdiagnosis' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Viral fever, cold, etc.\" theme='bootstrap' (onRemove)=\"removePresets('diagnosis',$event )\" (onAdd)=\"addPresets('diagnosis',itemsdiagnosis[itemsdiagnosis.length-1] )\" [displayBy]=\"'value'\" [maxItems]=\"4\" [blinkIfDupe]=true (keyup)=\"onTextChange('Diagnosis',$event.target.value)\">\n                                <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorDiagnosisDB\"></tag-input-dropdown>\n                            </tag-input>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"prescription-prnt-innr Instructions-cls\">\n                        <span class=\"prescription-head\">Instructions</span>\n                        <a href=\"javascript:;\" class=\"right-preset\" (click)=\"openPresetModal('Instructions')\">Preset</a>\n                        <div class=\"medicine-body\">\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                <ul class=\"medicine-list plus-height\">\n                                    <li *ngFor=\"let instructions of inputBox;let i = index\">\n                                        <div class=\"form-group frequency\">\n                                            <tag-input class=\"selectize-qual\" placeholder=\"{{instructions.name}}\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"{{instructions.name}}\" theme='bootstrap' [displayBy]=\"'value'\" [maxItems]=\"1\" [blinkIfDupe]=true [(ngModel)]='inputBox[i].inputInstruction' [addOnBlur]=\"true\">\n                                                <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'10 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"instructionsSavedDB\"></tag-input-dropdown>\n                                            </tag-input>\n                                        </div>\n                                        <div class=\"medic-control medic-left\">\n                                            {{i+1}}.\n                                        </div>\n                                        <div class=\"medic-control medic-right\">\n                                            <div class=\"li-close\" (click)=\"removeTextbox(i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                            <div *ngIf=\"i==inputBox.length-1\" class=\"li-close plus\" (click)=\"addTextbox(i)\"> <i class=\"fa fa-plus\"></i> </div>\n                                        </div>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"prescription-prnt-innr Clinical-cls\">\n                        <span class=\"prescription-head\">Investigation</span>\n                        <a href=\"javascript:;\" class=\"right-preset\" (click)=\"openPresetModal('Investigation')\">Preset</a>\n                        <div class=\"medication-modal-body investigation-modal-body wrap-div\">\n                            <div class=\"sidebar-preset\">\n                                <tag-input [(ngModel)]='investigationSelection' class=\"selectize-qual\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Select Investigation Type\" theme='bootstrap' [maxItems]=\"4\" (onAdd)=\"investigationAddFromList($event.value)\" (onRemove)=\"investigationRemoveFromList($event.value)\" [onlyFromAutocomplete]=\"true\">\n                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"investigationSelectionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                </tag-input>\n                            </div>\n                            <div class=\"investigation-body\">\n                                <div class=\"\" *ngIf=\"investigationStatus[0].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> {{investigationStatus[0].name}} </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[0].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Lipid profile, KFT, Uric acid, etc.\" theme='bootstrap' [maxItems]=\"5\" (keyup)=\"onTextChange('Pathology',$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"pathologySuggestionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                        </tag-input>\n                                    </div>\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[1].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[1].name}}</div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[1].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"CHEST ( L LAT ), PNS, etc.\" theme='bootstrap' [maxItems]=\"5\" (keyup)=\"onTextChange(investigationStatus[1].name,$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"xraySuggestionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                        </tag-input>\n                                    </div>\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[2].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[2].name}}</div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[2].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Abdomen, RNS, BERA etc.\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[2].name,$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"ultraSoundSuggestionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                        </tag-input>\n                                    </div>\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[3].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[3].name}}</div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[3].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Renal, Pelvic etc.\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[3].name,$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"dopplerSuggestionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                        </tag-input>\n                                    </div>\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[4].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[4].name}}</div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[4].model'>\n                                            <option value=\"Select\" disabled=\"\"> Select </option>\n                                            <option value=\"{{data}}\" *ngFor=\"let data of ecgSuggestionDB\"> {{data}} </option>\n                                        </select>\n                                        <!-- <tag-input class=\"selectize-qual\" [onlyFromAutocomplete]=\"true\" [(ngModel)]='investigationStatus[4].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Area 1\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[4].name,$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"ecgSuggestionDB\"></tag-input-dropdown>\n                                        </tag-input> -->\n                                    </div>\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[5].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[5].name}}</div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[5].model'>\n                                            <option value=\"Select\" disabled=\"\"> Select </option>\n                                            <option value=\"{{data}}\" *ngFor=\"let data of eegSuggestionDB\"> {{data}} </option>\n                                        </select>\n                                        <!-- <tag-input class=\"selectize-qual\" [onlyFromAutocomplete]=\"true\" [(ngModel)]='investigationStatus[5].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Area 1\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[5].name,$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"eegSuggestionDB\"></tag-input-dropdown>\n                                        </tag-input> -->\n                                    </div>\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[6].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[6].name}}</div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[6].model'>\n                                            <option value=\"Select\" disabled=\"\"> Select </option>\n                                            <option value=\"{{data}}\" *ngFor=\"let data of tmtSuggestionDB\"> {{data}} </option>\n                                        </select>\n                                        <!-- <tag-input class=\"selectize-qual\" [onlyFromAutocomplete]=\"true\" [(ngModel)]='investigationStatus[6].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Area 1\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[6].name,$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"tmtSuggestionDB\"></tag-input-dropdown>\n                                        </tag-input> -->\n                                    </div>\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[7].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[7].name}}</div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[7].model'>\n                                            <option value=\"Select\" disabled=\"\"> Select </option>\n                                            <option value=\"{{data}}\" *ngFor=\"let data of echoSuggestionDB\"> {{data}} </option>\n                                        </select>\n                                        <!-- <tag-input class=\"selectize-qual\" [onlyFromAutocomplete]=\"true\" [(ngModel)]='investigationStatus[7].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Area 1\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[7].name,$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"echoSuggestionDB\"></tag-input-dropdown>\n                                        </tag-input> -->\n                                    </div>\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[8].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[8].name}}</div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[8].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Abdomen, kidney, chest etc.\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[8].name,$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"ctScanSuggestionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                        </tag-input>\n                                    </div>\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[9].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[9].name}}</div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[9].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Liver, heart, spleen etc.\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[9].name,$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"mriSuggestionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                        </tag-input>\n                                    </div>\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[10].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[10].name}}</div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[10].model'>\n                                            <option value=\"Select\" disabled=\"\"> Select </option>\n                                            <option value=\"{{data}}\" *ngFor=\"let data of nerveSuggestionDB\"> {{data}} </option>\n                                        </select>\n                                        <!-- <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[10].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"EMG, NCV, SSEP etc.\" theme='bootstrap' [maxItems]=\"3\" (keyup)=\"onTextChange('Nerve Test',$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"nerveSuggestionDB\"></tag-input-dropdown>\n                                        </tag-input> -->\n                                    </div>\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[11].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[11].name}}</div>\n                                    </div>\n                                    <!-- <div class=\"form-group\">\n                                        <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[11].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"PFT, Lung volume etc\" theme='bootstrap' [maxItems]=\"2\" ></tag-input>\n                                    </div> -->\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[12].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[12].name}}</div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[12].model'>\n                                            <option value=\"Select\" disabled=\"\"> Select </option>\n                                            <option value=\"{{data}}\" *ngFor=\"let data of audioSuggestionDB\"> {{data}} </option>\n                                        </select>\n                                        <!-- <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[12].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"ABR, Tuning fork test etc.\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[12].name,$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"audioSuggestionDB\"></tag-input-dropdown>\n                                        </tag-input> -->\n                                    </div>\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[13].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[13].name}}</div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[13].model'>\n                                            <option value=\"Select\" disabled=\"\"> Select </option>\n                                            <option value=\"{{data}}\" *ngFor=\"let data of mammograaphySuggestionDB\"> {{data}} </option>\n                                        </select>\n                                        <!-- <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[13].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"ABR, Tuning fork test etc.\" theme='bootstrap' [maxItems]=\"2\"></tag-input> -->\n                                    </div>\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[14].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[14].name}}</div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[14].model'>\n                                            <option value=\"Select\" disabled=\"\"> Select </option>\n                                            <option value=\"{{data}}\" *ngFor=\"let data of boneSuggestionDB\"> {{data}} </option>\n                                        </select>\n                                        <!-- <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[14].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Area 1\" theme='bootstrap' [maxItems]=\"2\"></tag-input> -->\n                                    </div>\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[15].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[15].name}}</div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[15].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Retinoscopy, Pachymetry etc.\" theme='bootstrap' [maxItems]=\"3\" (keyup)=\"onTextChange('Eye Test',$event.target.value)\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"eyeSuggestionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                        </tag-input>\n                                    </div>\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[16].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[16].name}}</div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <tag-input class=\"selectize-qual\" [onlyFromAutocomplete]=\"true\" [(ngModel)]='investigationStatus[16].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Area 1\" theme='bootstrap' [maxItems]=\"3\">\n                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"lungSuggestionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                        </tag-input>\n                                    </div>\n                                </div>\n                                <div class=\"\" *ngIf=\"investigationStatus[17].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\">{{investigationStatus[17].name}}</div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[17].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"test-1, test-2....\" theme='bootstrap' [maxItems]=\"2\"></tag-input>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"tags-listing-div\" *ngIf=\"investigationpreset==true\">\n                                <ul class=\"tags-listing\">\n                                    <li class=\"{{getMedPresetClass('Investigation',i)}}\" *ngFor=\"let data of presetArrayInvestigation;let i = index\" (click)=\"showHidePreset('Investigation',i)\"> <a href=\"javascript:void(0)\"> {{data.preset_name}} </a> </li>\n                                </ul>\n                                <div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n                                    <button class=\"btn btn-yellow btn-sm\" type=\"button\" (click)=\"invesPresets()\"> OK </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"prescription-prnt-innr srgry-cls-new\">\n                        <span class=\"prescription-head\">Surgery</span>\n                        <a href=\"javascript:;\" class=\"right-preset\" (click)=\"openPresetModal('Surgery')\">Preset</a>\n                        <div class=\"medication-modal-body investigation-modal-body wrap-div\">\n                            <div class=\"sidebar-preset\">\n                                <tag-input [(ngModel)]='surgerySelection' class=\"selectize-qual\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Select Surgical Speciality\" theme='bootstrap' [maxItems]=\"3\" (onAdd)=\"surgeryAddFromList($event.value)\" (onRemove)=\"surgeryRemoveFromList($event.value)\" [onlyFromAutocomplete]=\"true\">\n                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"surgerySelectionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                </tag-input>\n                            </div>\n                            <div class=\"medicine-body\">\n                                <div class=\"medicine-wrap\">\n                                    <div class=\"\" *ngFor=\"let option of suregeryOptionsTop | slice:0:3;let i = index\">\n                                        <div class=\"medic-heading\" *ngIf=\"option.status==true\">\n                                            <div class=\"medicHead\"> {{option.name}} </div>\n                                        </div>\n                                        <ul class=\"medicine-list plus-height\" *ngIf=\"option.status==true\">\n                                            <li *ngFor=\"let options of option.div;let j = index\">\n                                                <div class=\"flex-rowdiv medication-form surgery-form\">\n                                                    <div class=\"form-group\">\n                                                        <select class=\"form-control txtfield\" [(ngModel)]=\"options.sub_speciality\" (change)=\"onSelectSubSpeciality(options,i,j)\">\n                                                            <option value='' selected=\"\" disabled=\"\"> Sub-Speciality </option>\n                                                            <option *ngFor=\"let subSpec of option.sub_speciality_array\" value=\"{{subSpec}}\">{{subSpec | titlecase}}</option>\n                                                        </select>\n                                                        <!-- <input type=\"text\" name=\"\" class=\"form-control txtfield\" placeholder=\"Sub-Speciality\" [(ngModel)]=\"options.sub_speciality\" /> -->\n                                                    </div>\n                                                    <div class=\"form-group medicinfo\">\n                                                        <!-- <input type=\"text\" name=\"\" class=\"form-control txtfield\" placeholder=\"Procedure Name\" [(ngModel)]=\"options.procedure_name\" /> -->\n                                                        <tag-input class=\"selectize-qual\" placeholder=\"Procedure Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Procedure Name\" theme='bootstrap' [displayBy]=\"'value'\" [maxItems]=\"1\" [blinkIfDupe]=true [(ngModel)]='options.procedure_name' [addOnBlur]=\"true\">\n                                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"option.database\"></tag-input-dropdown>\n                                                        </tag-input>\n                                                    </div>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    {{j+1}}.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\" (click)=\"removeTextBoxSuregery(i,j)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                    <div class=\"li-close plus\" *ngIf=\"j== option.div.length-1\" (click)=\"addTextBoxSuregery(i,j)\"> <i class=\"fa fa-plus\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                                <div class=\"tags-listing-div\" *ngIf=\"surgeryPreset==true\">\n                                    <ul class=\"tags-listing\">\n                                        <li class=\"{{getMedPresetClass('Surgery',i)}}\" *ngFor=\"let data of presetArraySurgery;let i = index\" (click)=\"showHidePreset('Surgery',i)\"> <a href=\"javascript:void(0)\"> {{data.preset_name}} </a> </li>\n                                    </ul>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n                                        <button class=\"btn btn-yellow btn-sm\" type=\"button\" (click)=\"surgeryPresets()\"> OK </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"prescription-prnt-innr Other-Treatment-cls\">\n                        <span class=\"prescription-head\">Other Treatment</span>\n                        <a href=\"javascript:;\" class=\"right-preset\" (click)=\"openPresetModal('Other Treatments')\">Preset</a>\n                        <div class=\"treatment-modal-body wrap-div\">\n                            <div class=\"sidebar-preset\">\n                                <tag-input [(ngModel)]='treatmentSelection' class=\"selectize-qual\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Select Treatment Type\" theme='bootstrap' [maxItems]=\"4\" (onAdd)=\"treatmentAddFromList($event.value)\" (onRemove)=\"treatmentRemoveFromList($event.value)\" [onlyFromAutocomplete]=\"true\">\n                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"treatmentSelectionDB\" class=\"strt-frm-lft\"></tag-input-dropdown>\n                                </tag-input>\n                                <!-- <ul class=\"presetul\">\n                                    <li class=\"{{treatClass(0)}}\" (click)=\"treatTab(0)\"> Lifestyle Changes </li>\n                                    <li class=\"{{treatClass(1)}}\" (click)=\"treatTab(1)\"> Physiotherapy </li>\n                                    <li class=\"{{treatClass(2)}}\" (click)=\"treatTab(2)\"> Plaster </li>\n                                    <li class=\"{{treatClass(3)}}\" (click)=\"treatTab(3)\"> Fomentation </li>\n                                    <li class=\"{{treatClass(4)}}\" (click)=\"treatTab(4)\"> Gargle </li>\n                                    <li class=\"{{treatClass(5)}}\" (click)=\"treatTab(5)\"> Dressing </li>\n                                    <li class=\"{{treatClass(6)}}\" (click)=\"treatTab(6)\"> Bandage </li>\n                                    <li class=\"{{treatClass(7)}}\" (click)=\"treatTab(7)\"> Other </li>\n                                </ul> -->\n                            </div>\n                            <div class=\"medicine-body\">\n                                <div class=\"medicine-wrap\">\n                                    <div class=\"\" *ngIf=\"treatmentStatus[0].status==true\">\n                                        <div class=\"medic-heading\">\n                                            <div class=\"medicHead\"> Lifestyle Changes </div>\n                                        </div>\n                                        <ul class=\"medicine-list\">\n                                            <li>\n                                                <div class=\"medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [(ngModel)]='treatmentStatus[0].lifestyle' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Daily workout, No oily food etc.\" theme='bootstrap' [maxItems]=\"3\" [addOnBlur]=\"true\">\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorOtherTreatmentDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    1.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(0)\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"\" *ngIf=\"treatmentStatus[1].status==true\">\n                                        <div class=\"medic-heading\">\n                                            <div class=\"medicHead\"> Physiotherapy </div>\n                                        </div>\n                                        <ul class=\"medicine-list\">\n                                            <li>\n                                                <div class=\"flex-rowdiv medication-form\">\n                                                    <div class=\"form-group frequency\">\n                                                        <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus,1)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[1].Frequency)}}\">{{treatmentStatus[1].Frequency}}</span> </div>\n                                                    </div>\n                                                    <div class=\"form-group duration\">\n                                                        <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus,1)\"> <span class=\"{{getMedDurationClass(treatmentStatus[1].Duration)}}\">{{treatmentStatus[1].Duration}}</span> </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    1.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(1)\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"\" *ngIf=\"treatmentStatus[2].status==true\">\n                                        <div class=\"medic-heading\">\n                                            <div class=\"medicHead\"> Plaster </div>\n                                        </div>\n                                        <ul class=\"medicine-list plus-height\">\n                                            <li *ngFor=\"let data of treatmentStatus[2].div;let i = index\">\n                                                <div class=\"flex-rowdiv medication-form\">\n                                                    <div class=\"form-group duration\">\n                                                        <div data-target=\"#injuryModal\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal1(treatmentStatus,2,i)\"><span [ngClass]=\"treatmentStatus[2].div[i].Injury_Area != 'Injury Area' ? 'active' : ''\">{{treatmentStatus[2].div[i].Injury_Area}}</span> </div>\n                                                    </div>\n                                                    <div class=\"form-group duration\">\n                                                        <select class=\"form-control txtfield\" [(ngModel)]='treatmentStatus[2].div[i].plaster_type'>\n                                                            <option value=\"Plaster Type\" disabled=\"\"> Plaster Type </option>\n                                                            <option value=\"Type1\"> Type1 </option>\n                                                            <option value=\"Type2\"> Type2 </option>\n                                                            <option value=\"Type3\"> Type3 </option>\n                                                            <option value=\"Type4\"> Type4 </option>\n                                                        </select>\n                                                    </div>\n                                                    <div class=\"form-group duration\">\n                                                        <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal1(treatmentStatus,2,i)\"> <span class=\"{{getMedDurationClass(treatmentStatus[2].div[i].Duration)}}\">{{treatmentStatus[2].div[i].Duration}}</span> </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    {{i+1}}.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"removePlasterDiv(i)\"></i> </div>\n                                                    <div class=\"li-close plus\" (click)=\"addPlasterDiv()\" *ngIf=\"i==treatmentStatus[2].div.length-1\"> <i class=\"fa fa-plus\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"\" *ngIf=\"treatmentStatus[3].status==true\">\n                                        <div class=\"medic-heading\">\n                                            <div class=\"medicHead\"> Fomentation </div>\n                                        </div>\n                                        <ul class=\"medicine-list\">\n                                            <li>\n                                                <div class=\"flex-rowdiv medication-form\">\n                                                    <div class=\"form-group frequency\">\n                                                        <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus,3)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[3].Frequency)}}\">{{treatmentStatus[3].Frequency}}</span> </div>\n                                                    </div>\n                                                    <div class=\"form-group duration\">\n                                                        <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus,3)\"> <span class=\"{{getMedDurationClass(treatmentStatus[3].Duration)}}\">{{treatmentStatus[3].Duration}}</span> </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    1.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(3)\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"\" *ngIf=\"treatmentStatus[4].status==true\">\n                                        <div class=\"medic-heading\">\n                                            <div class=\"medicHead\"> Gargle </div>\n                                        </div>\n                                        <ul class=\"medicine-list\">\n                                            <li>\n                                                <div class=\"flex-rowdiv medication-form\">\n                                                    <div class=\"form-group medicinfo\">\n                                                        <!-- <input type=\"text\" name=\"\" class=\"form-control txtfield\" placeholder=\"Medicine Name\" [(ngModel)]='treatmentStatus[4].med_name' /> -->\n                                                        <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [(ngModel)]='treatmentStatus[4].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap' [addOnBlur]=\"true\" (onAdd)=\"onAddMedNameOtherTreat(treatmentStatus,4)\">\n                                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorOtherTreatmentGargleDB\"></tag-input-dropdown>\n                                                        </tag-input>\n                                                    </div>\n                                                    <div class=\"form-group frequency\">\n                                                        <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus,4)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[4].Frequency)}}\">{{treatmentStatus[4].Frequency}}</span> </div>\n                                                    </div>\n                                                    <div class=\"form-group duration\">\n                                                        <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus,4)\"> <span class=\"{{getMedDurationClass(treatmentStatus[4].Duration)}}\">{{treatmentStatus[4].Duration}}</span> </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    1.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(4)\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"\" *ngIf=\"treatmentStatus[5].status==true\">\n                                        <div class=\"medic-heading\">\n                                            <div class=\"medicHead\"> Dressing </div>\n                                        </div>\n                                        <ul class=\"medicine-list\">\n                                            <li>\n                                                <div class=\"flex-rowdiv medication-form\">\n                                                    <div class=\"form-group medicinfo\">\n                                                        <!-- <input type=\"text\" name=\"\" class=\"form-control txtfield\" placeholder=\"Medicine Name\" [(ngModel)]='treatmentStatus[5].med_name' /> -->\n                                                        <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [(ngModel)]='treatmentStatus[5].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap' [addOnBlur]=\"true\" (onAdd)=\"onAddMedNameOtherTreat(treatmentStatus,5)\">\n                                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorOtherTreatmentDressingDB\"></tag-input-dropdown>\n                                                        </tag-input>\n                                                    </div>\n                                                    <div class=\"form-group frequency\">\n                                                        <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus,5)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[5].Frequency)}}\">{{treatmentStatus[5].Frequency}}</span> </div>\n                                                    </div>\n                                                    <div class=\"form-group duration\">\n                                                        <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus,5)\"> <span class=\"{{getMedDurationClass(treatmentStatus[5].Duration)}}\">{{treatmentStatus[5].Duration}}</span> </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    1.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(5)\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"\" *ngIf=\"treatmentStatus[6].status==true\">\n                                        <div class=\"medic-heading\">\n                                            <div class=\"medicHead\"> Bandage </div>\n                                        </div>\n                                        <ul class=\"medicine-list\">\n                                            <li>\n                                                <div class=\"flex-rowdiv medication-form\">\n                                                    <div class=\"form-group medicinfo\">\n                                                        <!-- <input type=\"text\" name=\"\" class=\"form-control txtfield\" placeholder=\"Medicine Name\" [(ngModel)]='treatmentStatus[6].med_name' /> -->\n                                                        <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [(ngModel)]='treatmentStatus[6].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap' [addOnBlur]=\"true\" (onAdd)=\"onAddMedNameOtherTreat(treatmentStatus,6)\">\n                                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorOtherTreatmentBandageDB\"></tag-input-dropdown>\n                                                        </tag-input>\n                                                    </div>\n                                                    <div class=\"form-group frequency\">\n                                                        <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus,6)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[6].Frequency)}}\">{{treatmentStatus[6].Frequency}}</span> </div>\n                                                    </div>\n                                                    <div class=\"form-group duration\">\n                                                        <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus,6)\"> <span class=\"{{getMedDurationClass(treatmentStatus[6].Duration)}}\">{{treatmentStatus[6].Duration}}</span> </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    1.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(6)\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"\" *ngIf=\"treatmentStatus[7].status==true\">\n                                        <div class=\"medic-heading\">\n                                            <div class=\"medicHead\"> Other </div>\n                                        </div>\n                                        <ul class=\"medicine-list\">\n                                            <li *ngFor=\"let data of treatmentStatus[7].div;let i = index\">\n                                                <div class=\"flex-rowdiv medication-form\">\n                                                    <div class=\"form-group medicinfo\">\n                                                        <!-- <input type=\"text\" name=\"\" class=\"form-control txtfield\" placeholder=\"Treatment Name\" [(\n                                            ngModel)]='treatmentStatus[7].div[i].med_name' /> -->\n                                                        <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [(ngModel)]='treatmentStatus[7].div[i].med_name' placeholder=\"Treatment Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Treatment Name\" theme='bootstrap' [addOnBlur]=\"true\" (onAdd)=\"onAddMedNameOtherTreat(treatmentStatus[7].div,i)\">\n                                                            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorOtherTreatmentOtherDB\"></tag-input-dropdown>\n                                                        </tag-input>\n                                                    </div>\n                                                    <div class=\"form-group frequency\">\n                                                        <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus[7].div,i)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[7].div[i].Frequency)}}\">{{treatmentStatus[7].div[i].Frequency}}</span> </div>\n                                                    </div>\n                                                    <div class=\"form-group duration\">\n                                                        <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus[7].div,i)\"> <span class=\"{{getMedDurationClass(treatmentStatus[7].div[i].Duration)}}\">{{treatmentStatus[7].div[i].Duration}}</span> </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"medic-control medic-left\">\n                                                    {{i+1}}.\n                                                </div>\n                                                <div class=\"medic-control medic-right\">\n                                                    <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"removeOtherDiv(i)\"></i> </div>\n                                                    <div class=\"li-close plus\" (click)=\"addOtherDiv()\" *ngIf=\"i==treatmentStatus[7].div.length-1\"> <i class=\"fa fa-plus\"></i> </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                                <div class=\"tags-listing-div\" *ngIf=\"treatmentpreset==true\">\n                                    <fieldset class=\"fieldset-preset\">\n                                        <legend class=\"legend-preset\">Presets</legend>\n                                        <ul class=\"tags-listing\">\n                                            <li class=\"{{getMedPresetClass('Other Treatments',i)}}\" *ngFor=\"let data of presetArrayOtherTreatment;let i = index\" (click)=\"showHidePreset('Other Treatments',i)\"> <a href=\"javascript:void(0)\"> {{data.preset_name}} </a> </li>\n                                        </ul>\n                                    </fieldset>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"prescription-prnt-innr Medication-cls\">\n                        <span class=\"prescription-head\">Medication</span>\n                        <a href=\"javascript:;\" class=\"right-preset\" (click)=\"openPresetModal('Medication')\">Preset</a>\n                        <div class=\"modal-body\">\n                            <div class=\"row\">\n                                <div class=\"medication-modal-body wrap-div\">\n                                    <div class=\"sidebar-preset\">\n                                        <ul class=\"presetul\">\n                                            <li class=\"{{mediClass(0)}}\" (click)=\"medicaTab(0,'Tablet')\"> Tablet </li>\n                                            <li class=\"{{mediClass(1)}}\" (click)=\"medicaTab(1,'Capsule')\"> Capsule </li>\n                                            <li class=\"{{mediClass(2)}}\" (click)=\"medicaTab(2,'Syrup')\"> Syrup </li>\n                                            <li class=\"{{mediClass(3)}}\" (click)=\"medicaTab(3,'Suspension')\"> Suspension </li>\n                                            <li class=\"{{mediClass(4)}}\" (click)=\"medicaTab(4,'Emulsion')\"> Emulsion </li>\n                                            <li class=\"{{mediClass(5)}}\" (click)=\"medicaTab(5,'Solution')\"> Solution </li>\n                                            <li class=\"{{mediClass(6)}}\" (click)=\"medicaTab(6,'Injection')\"> Injection </li>\n                                            <li class=\"{{mediClass(7)}}\" (click)=\"medicaTab(7,'Cream')\"> Cream </li>\n                                            <li class=\"{{mediClass(14)}}\" (click)=\"medicaTab(14,'Ointment')\"> Ointment </li>\n                                            <li class=\"{{mediClass(8)}}\" (click)=\"medicaTab(8,'Gel')\"> Gel </li>\n                                            <li class=\"{{mediClass(13)}}\" (click)=\"medicaTab(13,'Lotion')\"> Lotion </li>\n                                            <li class=\"{{mediClass(9)}}\" (click)=\"medicaTab(9,'Drops')\"> Drops </li>\n                                            <li class=\"{{mediClass(10)}}\" (click)=\"medicaTab(10,'Aerosols')\"> Aerosols &amp; Inhalent </li>\n                                            <li class=\"{{mediClass(11)}}\" (click)=\"medicaTab(11,'Powder')\"> Powder &amp; Granule </li>\n                                            <li class=\"{{mediClass(12)}}\" (click)=\"medicaTab(12,'Mouthwash')\"> Mouthwash &amp; Gargle </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"medicine-body\">\n                            <div class=\"medicine-wrap\">\n                                <div class=\"\" *ngIf=\"medicationStatus[0].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Tablet </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationTabArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Tablet',$event.target.value)\" (onRemove)=\"onRemoveMedName('TabletInfo',medication.tab[i])\" (onAdd)=\"openFrequencyModalFromMed('TabletInfo',medication.tab[i])\" [(ngModel)]='medication.tab[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationTabletDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.tab[i])\"><span class=\"{{getMedFrequencyClass(medication.tab[i].frequency)}}\">{{medication.tab[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.tab[i])\"><span class=\"{{getMedDurationClass(medication.tab[i].duration)}}\">{{medication.tab[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.tab[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationTabletInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Tab',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div *ngIf=\"i == medicationTabArray.length-1\" class=\"li-close plus\" (click)=\"addMoreTab('Tab')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[1].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Capsule </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationCapArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Capsule',$event.target.value)\" (onRemove)=\"onRemoveMedName('CapsuleInfo',medication.cap[i])\" (onAdd)=\"openFrequencyModalFromMed('CapsuleInfo',medication.cap[i])\" [(ngModel)]='medication.cap[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationCapsuleDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.cap[i])\"><span class=\"{{getMedFrequencyClass(medication.cap[i].frequency)}}\">{{medication.cap[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.cap[i])\"><span class=\"{{getMedDurationClass(medication.cap[i].duration)}}\">{{medication.cap[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.cap[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationCapsuleInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Cap',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationCapArray.length-1\" (click)=\"addMoreTab('Cap')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[2].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Syrup </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationSypArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Syrup',$event.target.value)\" (onRemove)=\"onRemoveMedName('SyrupInfo',medication.syp[i])\" (onAdd)=\"openFrequencyModalFromMed('SyrupInfo',medication.syp[i])\" [(ngModel)]='medication.syp[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSyrupDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.syp[i])\"><span class=\"{{getMedFrequencyClass(medication.syp[i].frequency)}}\">{{medication.syp[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-toggle=\"modal\" data-target=\"#combinedModal4\" (click)=\"openFrequencyModal(medication.syp[i])\"><span class=\"{{getMedDosageClass(medication.syp[i].dosage)}}\">{{medication.syp[i].dosage}} (ml) </span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.syp[i])\"><span class=\"{{getMedDurationClass(medication.syp[i].duration)}}\">{{medication.syp[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.syp[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSyrupInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Syp',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationSypArray.length-1\" (click)=\"addMoreTab('Syp')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[3].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Suspension </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationSuspArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Suspension',$event.target.value)\" (onRemove)=\"onRemoveMedName('SuspensionInfo',medication.susp[i])\" (onAdd)=\"openFrequencyModalFromMed('SuspensionInfo',medication.susp[i])\" [(ngModel)]='medication.susp[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSuspensionDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.susp[i])\"><span class=\"{{getMedFrequencyClass(medication.susp[i].frequency)}}\">{{medication.susp[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-toggle=\"modal\" data-target=\"#combinedModal4\" (click)=\"openFrequencyModal(medication.susp[i])\"><span class=\"{{getMedDosageClass(medication.susp[i].dosage)}}\">{{medication.susp[i].dosage}} (ml) </span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#durationModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.susp[i])\"><span class=\"{{getMedDurationClass(medication.susp[i].duration)}}\">{{medication.susp[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.susp[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSuspensionInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Susp',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationSuspArray.length-1\" (click)=\"addMoreTab('Susp')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[4].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Emulsion </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationEmulsnArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Emulsion',$event.target.value)\" (onRemove)=\"onRemoveMedName('EmulsionInfo',medication.emulsn[i])\" (onAdd)=\"openFrequencyModalFromMed('EmulsionInfo',medication.emulsn[i])\" [(ngModel)]='medication.emulsn[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationEmulsionDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.emulsn[i])\"><span class=\"{{getMedFrequencyClass(medication.emulsn[i].frequency)}}\">{{medication.emulsn[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-toggle=\"modal\" data-target=\"#combinedModal4\" (click)=\"openFrequencyModal(medication.emulsn[i])\"><span class=\"{{getMedDosageClass(medication.emulsn[i].dosage)}}\">{{medication.emulsn[i].dosage}} (ml) </span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.emulsn[i])\"><span class=\"{{getMedDurationClass(medication.emulsn[i].duration)}}\">{{medication.emulsn[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.emulsn[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationEmulsionInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Emulsn',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationEmulsnArray.length-1\" (click)=\"addMoreTab('Emulsn')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[5].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Solution </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationSolutionArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Solution',$event.target.value)\" (onRemove)=\"onRemoveMedName('SolutionInfo',medication.tab[i])\" (onAdd)=\"openFrequencyModalFromMed('SolutionInfo',medication.solution[i])\" [(ngModel)]='medication.solution[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSolutionDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.solution[i])\"><span class=\"{{getMedFrequencyClass(medication.solution[i].frequency)}}\">{{medication.solution[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-toggle=\"modal\" data-target=\"#combinedModal4\" (click)=\"openFrequencyModal(medication.solution[i])\"><span class=\"{{getMedDosageClass(medication.solution[i].dosage)}}\">{{medication.solution[i].dosage}} (ml) </span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.solution[i])\"><span class=\"{{getMedDurationClass(medication.solution[i].duration)}}\">{{medication.solution[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.solution[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSolutionInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Solution',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationSolutionArray.length-1\" (click)=\"addMoreTab('Solution')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[6].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Injection </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationInjArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Injection',$event.target.value)\" (onRemove)=\"onRemoveMedName('InjectionInfo',medication.injection[i])\" (onAdd)=\"openFrequencyModalFromMed('InjectionInfo',medication.injection[i])\" [(ngModel)]='medication.injection[0].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationInjectionDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.injection[i])\"><span class=\"{{getMedFrequencyClass(medication.injection[i].frequency)}}\">{{medication.injection[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-target=\"#combinedModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.injection[i])\"><span class=\"{{getMedModeClass(medication.injection[i].mode)}}\">{{medication.injection[i].mode}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.injection[i])\"><span class=\"{{getMedDurationClass(medication.injection[i].duration)}}\">{{medication.injection[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.injection[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationInjectionInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Inj',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationInjArray.length-1\" (click)=\"addMoreTab('Inj')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[7].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Cream </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationCreamArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Cream',$event.target.value)\" (onRemove)=\"onRemoveMedName('CreamInfo',medication.cream[i])\" (onAdd)=\"openFrequencyModalFromMed('CreamInfo',medication.cream[i])\" [(ngModel)]='medication.cream[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationCreamDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.cream[i])\"><span class=\"{{getMedFrequencyClass(medication.cream[i].frequency)}}\">{{medication.cream[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.cream[i])\"><span class=\"{{getMedDurationClass(medication.cream[i].duration)}}\">{{medication.cream[i].duration}}</span></div>\n                                                </div>\n                                                <!-- <span class=\"li-close\"> <i class=\"material-icons\" (click)=\"removeMoreTab('Cream',i)\"> remove </i> </span> -->\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.cream[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationCreamInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Cream',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationCreamArray.length-1\" (click)=\"addMoreTab('Cream')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[8].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Gel </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationGelArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Gel',$event.target.value)\" (onRemove)=\"onRemoveMedName('GelInfo',medication.gel[i])\" (onAdd)=\"openFrequencyModalFromMed('GelInfo',medication.gel[i])\" [(ngModel)]='medication.gel[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationGelDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.gel[i])\"><span class=\"{{getMedFrequencyClass(medication.gel[i].frequency)}}\">{{medication.gel[i].frequency}}</span></div>\n                                                </div>\n                                                <!--  <div class=\"form-group frequency duration\">\n                                                    <div data-target=\"#quantityModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.gel[i])\"> {{medication.gel[i].quantity}} </div>\n                                                </div> -->\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.gel[i])\"><span class=\"{{getMedDurationClass(medication.gel[i].duration)}}\">{{medication.gel[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.gel[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationGelInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Gel',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationGelArray.length-1\" (click)=\"addMoreTab('Gel')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[9].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Drops </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationDropsArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Drops',$event.target.value)\" (onRemove)=\"onRemoveMedName('DropsInfo',medication.drops[i])\" (onAdd)=\"openFrequencyModalFromMed('DropsInfo',medication.drops[i])\" [(ngModel)]='medication.drops[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationDropsDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal3\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.drops[i])\"><span class=\"{{getMedFrequencyClass(medication.drops[i].frequency)}}\">{{medication.drops[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-target=\"#combinedModal3\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.drops[i])\"><span class=\"{{getMedQuantityClass(medication.drops[i].quantity)}}\">{{medication.drops[i].quantity}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal3\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.drops[i])\"><span class=\"{{getMedDurationClass(medication.drops[i].duration)}}\">{{medication.drops[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.drops[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationDropsDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Drops',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationDropsArray.length-1\" (click)=\"addMoreTab('Drops')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[10].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Aerosols &amp; Inhalent </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationAerosolsArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Aerosols',$event.target.value)\" (onRemove)=\"onRemoveMedName('AerosolsInfo',medication.aerosols[i])\" (onAdd)=\"openFrequencyModalFromMed('AerosolsInfo',medication.aerosols[i])\" [(ngModel)]='medication.aerosols[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationAerosolsDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.aerosols[i])\"><span class=\"{{getMedFrequencyClass(medication.aerosols[i].frequency)}}\">{{medication.aerosols[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.aerosols[i])\"><span class=\"{{getMedDurationClass(medication.aerosols[i].duration)}}\">{{medication.aerosols[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.aerosols[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationAerosolsInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Aerosols',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationAerosolsArray.length-1\" (click)=\"addMoreTab('Aerosols')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[11].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Powder &amp; Granule </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationPowderArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Powder',$event.target.value)\" (onRemove)=\"onRemoveMedName('PowderInfo',medication.powder[i])\" (onAdd)=\"openFrequencyModalFromMed('PowderInfo',medication.powder[i])\" [(ngModel)]='medication.powder[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationPowderDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.powder[i])\"><span class=\"{{getMedFrequencyClass(medication.powder[i].frequency)}}\">{{medication.powder[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.powder[i])\"><span class=\"{{getMedDurationClass(medication.powder[i].duration)}}\">{{medication.powder[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.powder[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationPowderInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Powder',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationPowderArray.length-1\" (click)=\"addMoreTab('Powder')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[12].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Mouthwash &amp; Gargle </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationMouthWashArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Mouthwash',$event.target.value)\" (onRemove)=\"onRemoveMedName('MouthwashInfo',medication.mouthwash[i])\" (onAdd)=\"openFrequencyModalFromMed('MouthWashInfo',medication.mouthwash[i])\" [(ngModel)]='medication.mouthwash[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationMouthwashDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.mouthwash[i])\"><span class=\"{{getMedFrequencyClass(medication.mouthwash[i].frequency)}}\">{{medication.mouthwash[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.mouthwash[i])\"><span class=\"{{getMedDurationClass(medication.mouthwash[i].duration)}}\">{{medication.mouthwash[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.mouthwash[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationMouthwashInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('MouthWash',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationMouthWashArray.length-1\" (click)=\"addMoreTab('MouthWash')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[13].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Lotion </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationLotionArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Lotion',$event.target.value)\" (onRemove)=\"onRemoveMedName('LotionInfo',medication.lotion[i])\" (onAdd)=\"openFrequencyModalFromMed('LotionInfo',medication.lotion[i])\" [(ngModel)]='medication.lotion[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationLotionDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.lotion[i])\"><span class=\"{{getMedFrequencyClass(medication.lotion[i].frequency)}}\">{{medication.lotion[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.lotion[i])\"><span class=\"{{getMedDurationClass(medication.lotion[i].duration)}}\">{{medication.lotion[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.lotion[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationLotionInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Lotion',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationLotionArray.length-1\" (click)=\"addMoreTab('Lotion')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[14].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Ointment </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationOintmentArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Ointment',$event.target.value)\" (onRemove)=\"onRemoveMedName('OintmentInfo',medication.ointment[i])\" (onAdd)=\"openFrequencyModalFromMed('OintmentInfo',medication.ointment[i])\" [(ngModel)]='medication.ointment[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationOitmentDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.ointment[i])\"><span class=\"{{getMedFrequencyClass(medication.ointment[i].frequency)}}\">{{medication.ointment[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.ointment[i])\"><span class=\"{{getMedDurationClass(medication.ointment[i].duration)}}\">{{medication.ointment[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.ointment[i].med_info' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationOitmentInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Ointment',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationCreamArray.length-1\" (click)=\"addMoreTab('Ointment')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <!-- <div *ngIf=\"totalMedicationPresetSelected>0\">\n                                    <div class=\"\" *ngFor=\"let data of doctorPresetArray;let i =index\">\n                                        <div *ngIf=\"data.status==true\">\n                                            <div class=\"selected_preset\" *ngFor=\"let dataPreset of data.newPresetArray;let j =index\">\n                                                <div class=\"medic-heading\">\n                                                    <div class=\"medicHead\"> {{dataPreset.name}} </div>\n                                                </div>\n                                                <ul class=\"medicine-list\">\n                                                    <li *ngIf=\"dataPreset.name=='Tablet' || dataPreset.name=='Capsule' || dataPreset.name=='Cream' || dataPreset.name=='Ointment' || dataPreset.name=='Aerosols' || dataPreset.name=='Powder' || dataPreset.name=='MouthWash'\">\n                                                        <div class=\"flex-rowdiv medication-form\">\n                                                            <div class=\"form-group medicinfo\">\n                                                                <div class=\"only-text\">{{dataPreset.med_name[0].value}}</div>\n                                                            </div>\n                                                            <div class=\"form-group duration\">\n                                                                <div>{{dataPreset.frequency}}</div>\n                                                            </div>\n                                                            <div class=\"form-group duration\">\n                                                                <div>{{dataPreset.duration}}</div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group medicinfo\">\n                                                            <div class=\"medic-info only-text\" *ngIf=\"dataPreset.med_info\">{{dataPreset.med_info[0].value}}</div>\n                                                        </div>\n                                                        <div class=\"medic-control medic-right\">\n                                                            <div class=\"li-close\" (click)=\"removeMedPreset(i,j)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                        </div>\n                                                        <div class=\"medic-control medic-left\">\n                                                            {{j+1}}\n                                                        </div>\n                                                    </li>\n                                                    <li *ngIf=\"dataPreset.name=='Syrup' || dataPreset.name=='Suspension' || dataPreset.name=='Emulsion' || dataPreset.name=='Solution'\">\n                                                        <div class=\"flex-rowdiv medication-form\">\n                                                            <div class=\"form-group medicinfo\">\n                                                                <div class=\"only-text\">{{dataPreset.med_name[0].value}}</div>\n                                                            </div>\n                                                            <div class=\"form-group duration\">\n                                                                <div>{{dataPreset.frequency}}</div>\n                                                            </div>\n                                                            <div class=\"form-group frequency duration\">\n                                                                <div>{{dataPreset.dosage}}</div>\n                                                            </div>\n                                                            <div class=\"form-group duration\">\n                                                                <div>{{dataPreset.duration}}</div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group medicinfo\">\n                                                            <div class=\"medic-info only-text\" *ngIf=\"dataPreset.med_info\">{{dataPreset.med_info[0].value}}</div>\n                                                        </div>\n                                                        <div class=\"medic-control medic-right\">\n                                                            <div class=\"li-close\" (click)=\"removeMedPreset(i,j)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                        </div>\n                                                        <div class=\"medic-control medic-left\">\n                                                            {{j+1}}\n                                                        </div>\n                                                    </li>\n                                                    <li *ngIf=\"dataPreset.name=='Injection' || dataPreset.name=='Gel' || dataPreset.name=='Lotion'\">\n                                                        <div class=\"flex-rowdiv medication-form\">\n                                                            <div class=\"form-group medicinfo\">\n                                                                <div class=\"only-text\">{{dataPreset.med_name[0].value}}</div>\n                                                            </div>\n                                                            <div class=\"form-group duration\">\n                                                                <div>{{dataPreset.frequency}}</div>\n                                                            </div>\n                                                            <div class=\"form-group duration\">\n                                                                <div>{{dataPreset.duration}}</div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group medicinfo\">\n                                                            <div class=\"medic-info only-text\" *ngIf=\"dataPreset.med_info\">{{dataPreset.med_info[0].value}}</div>\n                                                        </div>\n                                                        <div class=\"medic-control medic-right\">\n                                                            <div class=\"li-close\" (click)=\"removeMedPreset(i,j)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                        </div>\n                                                        <div class=\"medic-control medic-left\">\n                                                            {{j+1}}\n                                                        </div>\n                                                    </li>\n                                                    <li *ngIf=\"dataPreset.name=='Drops'\">\n                                                        <div class=\"flex-rowdiv medication-form\">\n                                                            <div class=\"form-group medicinfo\">\n                                                                <div class=\"only-text\">{{dataPreset.med_name[0].value}}</div>\n                                                            </div>\n                                                            <div class=\"form-group duration\">\n                                                                <div>{{dataPreset.frequency}}</div>\n                                                            </div>\n                                                            <div class=\"form-group frequency duration\">\n                                                                <div>{{dataPreset.quantity}}</div>\n                                                            </div>\n                                                            <div class=\"form-group duration\">\n                                                                <div>{{dataPreset.duration}}</div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group medicinfo\">\n                                                            <div class=\"medic-info only-text\" *ngIf=\"dataPreset.med_info\">{{dataPreset.med_info[0].value}}</div>\n                                                        </div>\n                                                        <div class=\"medic-control medic-right\">\n                                                            <div class=\"li-close\" (click)=\"removeMedPreset(i,j)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                        </div>\n                                                        <div class=\"medic-control medic-left\">\n                                                            {{j+1}}\n                                                        </div>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div> -->\n                            </div>\n                            <div class=\"tags-listing-div\" *ngIf=\"medicationpreset==true\">\n                                <fieldset class=\"fieldset-preset\">\n                                    <legend class=\"legend-preset\">Presets</legend>\n                                    <ul class=\"tags-listing\" *ngIf=\"doctorPresetArray && doctorPresetArray.length>0\">\n                                        <li class=\"{{getMedPresetClass('Medication',i)}}\" *ngFor=\"let data of doctorPresetArray;let i = index\" (click)=\"showHidePreset('Medication',i)\"> <a href=\"javascript:void(0)\"> {{data.preset_name}} </a> </li>\n                                    </ul>\n                                    <h5 class=\"text-muted\" style=\"text-align:center\" *ngIf=\"!doctorPresetArray || doctorPresetArray.length<1\">\n                                        No Presets Found, create them on Create Preset page\n                                    </h5>\n                                </fieldset>\n                                <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n                                    <button class=\"btn btn-yellow btn-sm\" type=\"button\" (click)=\"medicatPresets()\"> OK </button>\n                                </div> -->\n                            </div>\n                        </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- treatment frequency modal -->\n<div class=\"modal fade cus-modal\" id=\"treatfrequencyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Frequency </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"frequency-modal-body wrap-div\">\n                        <div class=\"frequency-wrap\">\n                            <ul class=\"frequency-ul\">\n                                <li (click)=\"selectFromTreatFrequency('Once a day')\" class=\"{{getTreatFrequencyModalClass('Once a day')}}\"> Once a day </li>\n                                <li (click)=\"selectFromTreatFrequency('Twice a day')\" class=\"{{getTreatFrequencyModalClass('Twice a day')}}\"> Twice a day </li>\n                                <li (click)=\"selectFromTreatFrequency('Thrice a day')\" class=\"{{getTreatFrequencyModalClass('Thrice a day')}}\"> Thrice a day </li>\n                                <li (click)=\"selectFromTreatFrequency('Four times a day')\" class=\"{{getTreatFrequencyModalClass('Four times a day')}}\"> Four times a day </li>\n                                <li (click)=\"selectFromTreatFrequency('Once a week')\" class=\"{{getTreatFrequencyModalClass('Once a week')}}\"> Once a week </li>\n                                <li (click)=\"selectFromTreatFrequency('Every morning')\" class=\"{{getTreatFrequencyModalClass('Every morning')}}\"> Every morning </li>\n                                <li (click)=\"selectFromTreatFrequency('Every night')\" class=\"{{getTreatFrequencyModalClass('Every night')}}\"> Every night </li>\n                                <li (click)=\"selectFromTreatFrequency(' Every 1 hour')\" class=\"{{getTreatFrequencyModalClass(' Every 1 hour')}}\"> Every 1 hour </li>\n                                <li (click)=\"selectFromTreatFrequency('Every 2 hour')\" class=\"{{getTreatFrequencyModalClass('Every 2 hour')}}\"> Every 2 hour </li>\n                                <li (click)=\"selectFromTreatFrequency('Every 3 hour')\" class=\"{{getTreatFrequencyModalClass('Every 3 hour')}}\"> Every 3 hour </li>\n                                <li (click)=\"selectFromTreatFrequency('Every 4 hour')\" class=\"{{getTreatFrequencyModalClass('Every 4 hour')}}\"> Every 4 hour </li>\n                                <li (click)=\"selectFromTreatFrequency('Every 6 hour')\" class=\"{{getTreatFrequencyModalClass('Every 6 hour')}}\"> Every 6 hour </li>\n                                <li (click)=\"selectFromTreatFrequency('Alternate day')\" class=\"{{getTreatFrequencyModalClass('Alternate day')}}\"> Alternate day </li>\n                                <li (click)=\"selectFromTreatFrequency('At bed time')\" class=\"{{getTreatFrequencyModalClass('At bed time')}}\"> At bed time </li>\n                                <li (click)=\"selectFromTreatFrequency('SoS')\" class=\"{{getTreatFrequencyModalClass('SoS')}}\"> SoS </li>\n                            </ul>\n                            <ul class=\"frequency-ul hindi\">\n                                <li (click)=\"selectFromTreatFrequency('िदन मे 1 बार')\" class=\"{{getTreatFrequencyModalClass('िदन मे 1 बार')}}\"> िदन मे 1 बार </li>\n                                <li (click)=\"selectFromTreatFrequency('िदन मे 2 बार')\" class=\"{{getTreatFrequencyModalClass('िदन मे 2 बार')}}\"> िदन मे 2 बार </li>\n                                <li (click)=\"selectFromTreatFrequency('िदन मे 3 बार')\" class=\"{{getTreatFrequencyModalClass('िदन मे 3 बार')}}\"> िदन मे 3 बार </li>\n                                <li (click)=\"selectFromTreatFrequency('िदन मे 4 बार')\" class=\"{{getTreatFrequencyModalClass('िदन मे 4 बार')}}\"> िदन मे 4 बार </li>\n                                <li (click)=\"selectFromTreatFrequency('हफ्ते मे 1 बार')\" class=\"{{getTreatFrequencyModalClass('हफ्ते मे 1 बार')}}\"> हफ्ते मे 1 बार </li>\n                                <li (click)=\"selectFromTreatFrequency('रोज़ सुबह')\" class=\"{{getTreatFrequencyModalClass('रोज़ सुबह')}}\"> रोज़ सुबह </li>\n                                <li (click)=\"selectFromTreatFrequency('रोज़ रात मे')\" class=\"{{getTreatFrequencyModalClass('रोज़ रात मे')}}\"> रोज़ रात मे </li>\n                                <li (click)=\"selectFromTreatFrequency('हर 1 घंटे पर')\" class=\"{{getTreatFrequencyModalClass('हर 1 घंटे पर')}}\"> हर 1 घंटे पर </li>\n                                <li (click)=\"selectFromTreatFrequency('हर 2 घंटे पर')\" class=\"{{getTreatFrequencyModalClass('हर 2 घंटे पर')}}\"> हर 2 घंटे पर </li>\n                                <li (click)=\"selectFromTreatFrequency('हर 3 घंटे पर')\" class=\"{{getTreatFrequencyModalClass('हर 3 घंटे पर')}}\"> हर 3 घंटे पर </li>\n                                <li (click)=\"selectFromTreatFrequency('हर 4 घंटे पर')\" class=\"{{getTreatFrequencyModalClass('हर 4 घंटे पर')}}\"> हर 4 घंटे पर </li>\n                                <li (click)=\"selectFromTreatFrequency('हर 6 घंटे पर')\" class=\"{{getTreatFrequencyModalClass('हर 6 घंटे पर')}}\"> हर 6 घंटे पर </li>\n                                <li (click)=\"selectFromTreatFrequency('हर दूसरे िदन')\" class=\"{{getTreatFrequencyModalClass('हर दूसरे िदन')}}\"> हर दूसरे िदन </li>\n                                <li (click)=\"selectFromTreatFrequency('सोते समय')\" class=\"{{getTreatFrequencyModalClass('सोते समय')}}\"> सोते समय </li>\n                                <li (click)=\"selectFromTreatFrequency('आवश्यकता अनुसार')\" class=\"{{getTreatFrequencyModalClass('आवश्यकता अनुसार')}}\"> आवश्यकता अनुसार </li>\n                            </ul>\n                        </div>\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 p-0 duration-wrap\">\n                            <h4 class=\"\"> Special Instructions </h4>\n                            <ul class=\"special-ul\">\n                                <li (click)=\"selectFromTreatSpecialInstruction('After meals')\" class=\"{{getSpecialInstructionModalClass('After meals')}}\"> After meals</li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('Empty stomach')\" class=\"{{getSpecialInstructionModalClass('Empty stomach')}}\"> Empty stomach</li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('Before meals')\" class=\"{{getSpecialInstructionModalClass('Before meals')}}\"> Before meals</li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('As needed')\" class=\"{{getSpecialInstructionModalClass('As needed')}}\"> As needed</li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('Each night')\" class=\"{{getSpecialInstructionModalClass('Each night')}}\"> Each night</li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('With milk')\" class=\"{{getSpecialInstructionModalClass('With milk')}}\"> With milk</li>\n                            </ul>\n                            <ul class=\"special-ul hindi\">\n                                <li (click)=\"selectFromTreatSpecialInstruction('खाने के बाद')\" class=\"{{getSpecialInstructionModalClass('खाने के बाद')}}\"> खाने के बाद </li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('खाली पेट')\" class=\"{{getSpecialInstructionModalClass('खाली पेट')}}\"> खाली पेट </li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('खाने से पहले')\" class=\"{{getSpecialInstructionModalClass('खाने से पहले')}}\"> खाने से पहले </li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('आवश्यकता अनुसार')\" class=\"{{getSpecialInstructionModalClass('आवश्यकता अनुसार')}}\"> आवश्यकता अनुसार </li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('रोज़ रात मे')\" class=\"{{getSpecialInstructionModalClass('रोज़ रात मे')}}\"> रोज़ रात मे </li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('दूध क साथ')\" class=\"{{getSpecialInstructionModalClass('दूध क साथ')}}\"> दूध क साथ </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"tempSaveFrequency()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Treatment Duration modal -->\n<div class=\"modal fade cus-modal\" id=\"treatdurationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Duration </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"duration-modal-body wrap-div\">\n                        <div class=\"duration-wrap\">\n                            <ul class=\"duration-ul\">\n                                <li class=\"{{getDurationModalClass('1')}}\" (click)=\"selectFromTreatDuration('1')\">1</li>\n                                <li class=\"{{getDurationModalClass('2')}}\" (click)=\"selectFromTreatDuration('2')\">2</li>\n                                <li class=\"{{getDurationModalClass('3')}}\" (click)=\"selectFromTreatDuration('3')\">3</li>\n                                <li class=\"{{getDurationModalClass('4')}}\" (click)=\"selectFromTreatDuration('4')\">4</li>\n                                <li class=\"{{getDurationModalClass('5')}}\" (click)=\"selectFromTreatDuration('5')\">5</li>\n                                <li class=\"{{getDurationModalClass('6')}}\" (click)=\"selectFromTreatDuration('6')\"> 6 </li>\n                                <li class=\"{{getDurationModalClass('7')}}\" (click)=\"selectFromTreatDuration('7')\">7</li>\n                                <li class=\"{{getDurationModalClass('8')}}\" (click)=\"selectFromTreatDuration('8')\">8</li>\n                                <li class=\"{{getDurationModalClass('9')}}\" (click)=\"selectFromTreatDuration('9')\">9</li>\n                                <li class=\"{{getDurationModalClass('10')}}\" (click)=\"selectFromTreatDuration('10')\">10</li>\n                                <li class=\"{{getDurationModalClass('12')}}\" (click)=\"selectFromTreatDuration('12')\">12</li>\n                                <li class=\"{{getDurationModalClass('14')}}\" (click)=\"selectFromTreatDuration('14')\"> 14 </li>\n                                <li class=\"{{getDurationModalClass('15')}}\" (click)=\"selectFromTreatDuration('15')\">15</li>\n                                <li class=\"{{getDurationModalClass('18')}}\" (click)=\"selectFromTreatDuration('18')\">18</li>\n                                <li class=\"{{getDurationModalClass('21')}}\" (click)=\"selectFromTreatDuration('21')\">21</li>\n                                <li class=\"{{getDurationModalClass('25')}}\" (click)=\"selectFromTreatDuration('25')\">25</li>\n                                <li class=\"{{getDurationModalClass('28')}}\" (click)=\"selectFromTreatDuration('28')\">28</li>\n                                <li class=\"{{getDurationModalClass('30')}}\" (click)=\"selectFromTreatDuration('30')\"> 30 </li>\n                                <li class=\"{{getDurationModalClass('35')}}\" (click)=\"selectFromTreatDuration('35')\">35</li>\n                                <li class=\"{{getDurationModalClass('42')}}\" (click)=\"selectFromTreatDuration('42')\">42</li>\n                                <li class=\"{{getDurationModalClass('60')}}\" (click)=\"selectFromTreatDuration('60')\">60</li>\n                                <li class=\"{{getDurationModalClass('90')}}\" (click)=\"selectFromTreatDuration('90')\">90</li>\n                                <li class=\"{{getDurationModalClass('120')}}\" (click)=\"selectFromTreatDuration('120')\">120</li>\n                                <li class=\"{{getDurationModalClass('180')}}\" (click)=\"selectFromTreatDuration('180')\"> 180</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"tempSaveDuration()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- frequency modal -->\n<div class=\"modal fade cus-modal\" id=\"frequencyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Frequency </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"frequency-modal-body wrap-div\">\n                        <div class=\"frequency-wrap\">\n                            <ul class=\"frequency-ul\">\n                                <li class=\"{{getFrequencyClass('Once a day')}}\" (click)=\"selectFrequency('Once a day')\"> Once a day </li>\n                                <li class=\"{{getFrequencyClass('Twice a day')}}\" (click)=\"selectFrequency('Twice a day')\"> Twice a day </li>\n                                <li class=\"{{getFrequencyClass('Thrice a day')}}\" (click)=\"selectFrequency('Thrice a day')\"> Thrice a day </li>\n                                <li class=\"{{getFrequencyClass('Four times a day')}}\" (click)=\"selectFrequency('Four times a day')\"> Four times a day </li>\n                                <li class=\"{{getFrequencyClass('Once a week')}}\" (click)=\"selectFrequency('Once a week')\"> Once a week </li>\n                                <li class=\"{{getFrequencyClass('Every morning')}}\" (click)=\"selectFrequency('Every morning')\"> Every morning </li>\n                                <li class=\"{{getFrequencyClass('Every night')}}\" (click)=\"selectFrequency('Every night')\"> Every night </li>\n                                <li class=\"{{getFrequencyClass('Every 1 hour')}}\" (click)=\"selectFrequency('Every 1 hour')\"> Every 1 hour </li>\n                                <li class=\"{{getFrequencyClass('Every 2 hour')}}\" (click)=\"selectFrequency('Every 2 hour')\"> Every 2 hour </li>\n                                <li class=\"{{getFrequencyClass('Every 3 hour')}}\" (click)=\"selectFrequency('Every 3 hour')\"> Every 3 hour </li>\n                                <li class=\"{{getFrequencyClass('Every 4 hour')}}\" (click)=\"selectFrequency('Every 4 hour')\"> Every 4 hour </li>\n                                <li class=\"{{getFrequencyClass('Every 6 hour')}}\" (click)=\"selectFrequency('Every 6 hour')\"> Every 6 hour </li>\n                                <li class=\"{{getFrequencyClass('Alternate day')}}\" (click)=\"selectFrequency('Alternate day')\"> Alternate day </li>\n                                <li class=\"{{getFrequencyClass('At bed time')}}\" (click)=\"selectFrequency('At bed time')\"> At bed time </li>\n                                <li class=\"{{getFrequencyClass('SoS')}}\" (click)=\"selectFrequency('SoS')\"> SoS </li>\n                            </ul>\n                            <ul class=\"frequency-ul hindi\">\n                                <li class=\"{{getFrequencyClass('िदन मे 1 बार')}}\" (click)=\"selectFrequency('िदन मे 1 बार')\"> िदन मे 1 बार </li>\n                                <li class=\"{{getFrequencyClass('िदन मे 2 बार')}}\" (click)=\"selectFrequency('िदन मे 2 बार')\"> िदन मे 2 बार </li>\n                                <li class=\"{{getFrequencyClass('िदन मे 3 बार')}}\" (click)=\"selectFrequency('िदन मे 3 बार')\"> िदन मे 3 बार </li>\n                                <li class=\"{{getFrequencyClass('िदन मे 4 बार')}}\" (click)=\"selectFrequency('िदन मे 4 बार')\"> िदन मे 4 बार </li>\n                                <li class=\"{{getFrequencyClass('हफ्ते मे 1 बार')}}\" (click)=\"selectFrequency('हफ्ते मे 1 बार')\"> हफ्ते मे 1 बार </li>\n                                <li class=\"{{getFrequencyClass('रोज़ सुबह')}}\" (click)=\"selectFrequency('रोज़ सुबह')\"> रोज़ सुबह </li>\n                                <li class=\"{{getFrequencyClass('रोज़ रात मे')}}\" (click)=\"selectFrequency('रोज़ रात मे')\"> रोज़ रात मे </li>\n                                <li class=\"{{getFrequencyClass('हर 1 घंटे पर')}}\" (click)=\"selectFrequency('हर 1 घंटे पर')\"> हर 1 घंटे पर </li>\n                                <li class=\"{{getFrequencyClass('हर 2 घंटे पर')}}\" (click)=\"selectFrequency('हर 2 घंटे पर')\"> हर 2 घंटे पर </li>\n                                <li class=\"{{getFrequencyClass('हर 3 घंटे पर')}}\" (click)=\"selectFrequency('हर 3 घंटे पर')\"> हर 3 घंटे पर </li>\n                                <li class=\"{{getFrequencyClass('हर 4 घंटे पर')}}\" (click)=\"selectFrequency('हर 4 घंटे पर')\"> हर 4 घंटे पर </li>\n                                <li class=\"{{getFrequencyClass('हर 6 घंटे पर')}}\" (click)=\"selectFrequency('हर 6 घंटे पर')\"> हर 6 घंटे पर </li>\n                                <li class=\"{{getFrequencyClass('हर दूसरे िदन')}}\" (click)=\"selectFrequency('हर दूसरे िदन')\"> हर दूसरे िदन </li>\n                                <li class=\"{{getFrequencyClass('सोते समय ')}}\" (click)=\"selectFrequency('सोते समय ')\"> सोते समय </li>\n                                <li class=\"{{getFrequencyClass('आवश्यकता अनुसार')}}\" (click)=\"selectFrequency('आवश्यकता अनुसार')\"> आवश्यकता अनुसार </li>\n                            </ul>\n                        </div>\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 p-0 duration-wrap\">\n                            <h4 class=\"\"> Special Instructions </h4>\n                            <ul class=\"special-ul\">\n                                <li class=\"{{getFrequencyClassSpecial('After meals')}}\" (click)=\"selectFrequencySpecial('After meals')\"> After meals</li>\n                                <li class=\"{{getFrequencyClassSpecial('Empty stomach')}}\" (click)=\"selectFrequencySpecial('Empty stomach')\"> Empty stomach</li>\n                                <li class=\"{{getFrequencyClassSpecial('Before meals')}}\" (click)=\"selectFrequencySpecial('Before meals')\"> Before meals</li>\n                                <li class=\"{{getFrequencyClassSpecial('As needed')}}\" (click)=\"selectFrequencySpecial('As needed')\"> As needed</li>\n                                <li class=\"{{getFrequencyClassSpecial('Each night')}}\" (click)=\"selectFrequencySpecial('Each night')\"> Each night</li>\n                                <li class=\"{{getFrequencyClassSpecial('With milk')}}\" (click)=\"selectFrequencySpecial('With milk')\"> With milk</li>\n                            </ul>\n                            <ul class=\"special-ul hindi\">\n                                <li class=\"{{getFrequencyClassSpecial('खाने के बाद')}}\" (click)=\"selectFrequencySpecial('खाने के बाद')\"> खाने के बाद </li>\n                                <li class=\"{{getFrequencyClassSpecial('खाली पेट')}}\" (click)=\"selectFrequencySpecial('खाली पेट')\"> खाली पेट </li>\n                                <li class=\"{{getFrequencyClassSpecial('खाने से पहले')}}\" (click)=\"selectFrequencySpecial('खाने से पहले')\"> खाने से पहले </li>\n                                <li class=\"{{getFrequencyClassSpecial('आवश्यकता अनुसार')}}\" (click)=\"selectFrequencySpecial('आवश्यकता अनुसार')\"> आवश्यकता अनुसार </li>\n                                <li class=\"{{getFrequencyClassSpecial('रोज़ रात मे')}}\" (click)=\"selectFrequencySpecial('रोज़ रात मे')\"> रोज़ रात मे </li>\n                                <li class=\"{{getFrequencyClassSpecial('दूध क साथ')}}\" (click)=\"selectFrequencySpecial('दूध क साथ')\"> दूध क साथ </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#medicationModal\" type=\"button\" (click)=\"saveFrequency()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Duration modal -->\n<div class=\"modal fade cus-modal\" id=\"durationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Duration(days) </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"duration-modal-body wrap-div\">\n                        <div class=\"duration-wrap\">\n                            <ul class=\"duration-ul\">\n                                <li class=\"{{getDurationClass('1')}}\" (click)=\"selectDuration('1')\">1</li>\n                                <li class=\"{{getDurationClass('2')}}\" (click)=\"selectDuration('2')\">2</li>\n                                <li class=\"{{getDurationClass('3')}}\" (click)=\"selectDuration('3')\">3</li>\n                                <li class=\"{{getDurationClass('4')}}\" (click)=\"selectDuration('4')\">4</li>\n                                <li class=\"{{getDurationClass('5')}}\" (click)=\"selectDuration('5')\">5</li>\n                                <li class=\"{{getDurationClass('6')}}\" (click)=\"selectDuration('6')\">6</li>\n                                <li class=\"{{getDurationClass('7')}}\" (click)=\"selectDuration('7')\">7</li>\n                                <li class=\"{{getDurationClass('8')}}\" (click)=\"selectDuration('8')\">8</li>\n                                <li class=\"{{getDurationClass('9')}}\" (click)=\"selectDuration('9')\">9</li>\n                                <li class=\"{{getDurationClass('10')}}\" (click)=\"selectDuration('10')\">10</li>\n                                <li class=\"{{getDurationClass('12')}}\" (click)=\"selectDuration('12')\">12</li>\n                                <li class=\"{{getDurationClass('14')}}\" (click)=\"selectDuration('14')\">14</li>\n                                <li class=\"{{getDurationClass('15')}}\" (click)=\"selectDuration('15')\">15</li>\n                                <li class=\"{{getDurationClass('18')}}\" (click)=\"selectDuration('18')\">18</li>\n                                <li class=\"{{getDurationClass('21')}}\" (click)=\"selectDuration('21')\">21</li>\n                                <li class=\"{{getDurationClass('25')}}\" (click)=\"selectDuration('25')\">25</li>\n                                <li class=\"{{getDurationClass('28')}}\" (click)=\"selectDuration('28')\">28</li>\n                                <li class=\"{{getDurationClass('30')}}\" (click)=\"selectDuration('30')\">30</li>\n                                <li class=\"{{getDurationClass('35')}}\" (click)=\"selectDuration('35')\">35</li>\n                                <li class=\"{{getDurationClass('42')}}\" (click)=\"selectDuration('42')\">42</li>\n                                <li class=\"{{getDurationClass('60')}}\" (click)=\"selectDuration('60')\">60</li>\n                                <li class=\"{{getDurationClass('90')}}\" (click)=\"selectDuration('90')\">90</li>\n                                <li class=\"{{getDurationClass('120')}}\" (click)=\"selectDuration('120')\">120</li>\n                                <li class=\"{{getDurationClass('180')}}\" (click)=\"selectDuration('180')\">180</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveDuration()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Dosage modal -->\n<div class=\"modal fade cus-modal\" id=\"dosageModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Dosage (ml) </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"duration-modal-body wrap-div\">\n                        <div class=\"duration-wrap\">\n                            <ul class=\"duration-ul\">\n                                <li class=\"{{getClassDosage('1')}}\" (click)=\"selectDosage('1')\"> 1 </li>\n                                <li class=\"{{getClassDosage('2')}}\" (click)=\"selectDosage('2')\"> 2 </li>\n                                <li class=\"{{getClassDosage('3')}}\" (click)=\"selectDosage('3')\"> 3 </li>\n                                <li class=\"{{getClassDosage('4')}}\" (click)=\"selectDosage('4')\"> 4 </li>\n                                <li class=\"{{getClassDosage('5')}}\" (click)=\"selectDosage('5')\"> 5 </li>\n                                <li class=\"{{getClassDosage('1.5')}}\" (click)=\"selectDosage('1.5')\"> 1.5 </li>\n                                <li class=\"{{getClassDosage('2.5')}}\" (click)=\"selectDosage('2.5')\"> 2.5 </li>\n                                <li class=\"{{getClassDosage('3.5')}}\" (click)=\"selectDosage('3.5')\"> 3.5 </li>\n                                <li class=\"{{getClassDosage('4.5')}}\" (click)=\"selectDosage('4.5')\"> 4.5 </li>\n                                <li class=\"{{getClassDosage('5.5')}}\" (click)=\"selectDosage('5.5')\"> 5.5 </li>\n                                <li class=\"{{getClassDosage('6')}}\" (click)=\"selectDosage('6')\"> 6 </li>\n                                <li class=\"{{getClassDosage('7')}}\" (click)=\"selectDosage('7')\"> 7 </li>\n                                <li class=\"{{getClassDosage('8')}}\" (click)=\"selectDosage('8')\"> 8 </li>\n                                <li class=\"{{getClassDosage('9')}}\" (click)=\"selectDosage('9')\"> 9 </li>\n                                <li class=\"{{getClassDosage('10')}}\" (click)=\"selectDosage('10')\"> 10 </li>\n                                <li class=\"{{getClassDosage('6.5')}}\" (click)=\"selectDosage('6.5')\"> 6.5 </li>\n                                <li class=\"{{getClassDosage('7.5')}}\" (click)=\"selectDosage('7.5')\"> 7.5 </li>\n                                <li class=\"{{getClassDosage('8.5')}}\" (click)=\"selectDosage('8.5')\"> 8.5 </li>\n                                <li class=\"{{getClassDosage('9.5')}}\" (click)=\"selectDosage('9.5')\"> 9.5 </li>\n                                <li class=\"{{getClassDosage('10.5')}}\" (click)=\"selectDosage('10.5')\"> 10.5 </li>\n                                <li class=\"{{getClassDosage('11')}}\" (click)=\"selectDosage('11')\"> 11 </li>\n                                <li class=\"{{getClassDosage('12')}}\" (click)=\"selectDosage('12')\"> 12 </li>\n                                <li class=\"{{getClassDosage('15')}}\" (click)=\"selectDosage('15')\"> 15 </li>\n                                <li class=\"{{getClassDosage('20')}}\" (click)=\"selectDosage('20')\"> 20 </li>\n                                <li class=\"{{getClassDosage('25')}}\" (click)=\"selectDosage('25')\"> 25 </li>\n                                <li class=\"{{getClassDosage('11.5')}}\" (click)=\"selectDosage('11.5')\"> 11.5 </li>\n                                <li class=\"{{getClassDosage('12.5')}}\" (click)=\"selectDosage('12.5')\"> 12.5 </li>\n                                <li class=\"{{getClassDosage('30')}}\" (click)=\"selectDosage('30')\"> 30 </li>\n                                <li class=\"{{getClassDosage('40')}}\" (click)=\"selectDosage('40')\"> 40 </li>\n                                <li class=\"{{getClassDosage('50')}}\" (click)=\"selectDosage('50')\"> 50 </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#medicationModal\" type=\"button\" (click)=\"saveDosage()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Injection modal -->\n<div class=\"modal fade cus-modal\" id=\"injectionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Injection mode </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"duration-modal-body wrap-div\">\n                        <div class=\"duration-wrap\">\n                            <ul class=\"special-ul\">\n                                <li class=\"{{getClassInjection('Intramuscular')}}\" (click)=\"injectionSelected('Intramuscular')\"> Intramuscular </li>\n                                <li class=\"{{getClassInjection('Intravenous')}}\" (click)=\"injectionSelected('Intravenous')\"> Intravenous </li>\n                                <li class=\"{{getClassInjection('Intradermal')}}\" (click)=\"injectionSelected('Intradermal')\"> Intradermal </li>\n                                <li class=\"{{getClassInjection('Subcutaneous')}}\" (click)=\"injectionSelected('Subcutaneous')\"> Subcutaneous </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveInjection()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- quantity modal -->\n<div class=\"modal fade cus-modal\" id=\"quantityModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Quantity </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"duration-modal-body wrap-div\">\n                        <div class=\"duration-wrap\">\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                <!-- <input type=\"number\" class=\"form-control txtfield\" min=\"1\" max=\"99\" name=\"\" placeholder=\"Quantity (Number)\" #input (blur)=\"addTempQuantity($event.target.value)\" /> -->\n                                <select class=\"form-control txtfield\" [(ngModel)]=\"quantity_drops\">\n                                    <option value=\"Select\" selected=\"\" disabled=\"\"> Select </option>\n                                    <option value=\"{{value}}\" *ngFor=\"let value of quantity_range\"> {{value}} </option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"addTempQuantity(quantity_drops)\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Injury modal -->\n<div class=\"modal fade cus-modal\" id=\"injuryModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Injury Area</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"duration-modal-body wrap-div\">\n                        <div class=\"duration-wrap\">\n                            <ul class=\"precond-ul\">\n                                <li class=\"{{getClassInjuryModal('Hand/finger')}}\" (click)=\"setInjuryValue('Hand/finger')\"> Hand/finger </li>\n                                <li class=\"{{getClassInjuryModal('Forearm/wrist')}}\" (click)=\"setInjuryValue('Forearm/wrist')\"> Forearm/wrist </li>\n                                <li class=\"{{getClassInjuryModal('Elbow/forearm')}}\" (click)=\"setInjuryValue('Elbow/forearm')\"> Elbow/forearm </li>\n                                <li class=\"{{getClassInjuryModal('Knee')}}\" (click)=\"setInjuryValue('Knee')\"> Knee </li>\n                                <li class=\"{{getClassInjuryModal('Tibia')}}\" (click)=\"setInjuryValue('Tibia')\"> Tibia </li>\n                                <li class=\"{{getClassInjuryModal('fibula')}}\" (click)=\"setInjuryValue('fibula')\"> fibula </li>\n                                <li class=\"{{getClassInjuryModal('Ankle')}}\" (click)=\"setInjuryValue('Ankle')\"> Ankle </li>\n                                <li class=\"{{getClassInjuryModal('Foot')}}\" (click)=\"setInjuryValue('Foot')\"> Foot </li>\n                                <li class=\"{{getClassInjuryModal('Others')}}\" (click)=\"setInjuryValue('Others')\"> Others</li>\n                                <li>\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='otherInj' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" [maxItems]=\"1\" (onAdd)=\"onAddOtherInj(otherInj)\" (onRemove)=\"onRemoveOtherInj()\" secondaryPlaceholder=\"Injury Area\" theme='bootstrap'></tag-input>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveInjury()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Combined modal (Injection)-->\n<div class=\"modal fade combined_modal\" id=\"combinedModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\" *ngIf=\"currentFrequency && currentFrequency.med_name\"> {{currentFrequency.med_name[0].value}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"combined_flex\">\n                            <div class=\"frquency_cmbnd\">\n                                <h3 class=\"combined_heading\"> Frequency </h3>\n                                <ul class=\"combined_frequency\">\n                                    <li class=\"{{getFrequencyClass('Once a day')}}\" (click)=\"selectFrequency('Once a day')\"> Once a day </li>\n                                    <li class=\"{{getFrequencyClass('Twice a day')}}\" (click)=\"selectFrequency('Twice a day')\"> Twice a day </li>\n                                    <li class=\"{{getFrequencyClass('Thrice a day')}}\" (click)=\"selectFrequency('Thrice a day')\"> Thrice a day </li>\n                                    <li class=\"{{getFrequencyClass('Four times a day')}}\" (click)=\"selectFrequency('Four times a day')\"> Four times a day </li>\n                                    <li class=\"{{getFrequencyClass('Every Morning')}}\" (click)=\"selectFrequency('Every Morning')\"> Every Morning </li>\n                                    <li class=\"{{getFrequencyClass('Every Night')}}\" (click)=\"selectFrequency('Every Night')\"> Every Night </li>\n                                    <li class=\"{{getFrequencyClass('Once a week')}}\" (click)=\"selectFrequency('Once a week')\"> Once a week </li>\n                                    <li class=\"{{getFrequencyClass('Once a month')}}\" (click)=\"selectFrequency('Once a month')\"> Once a month </li>\n                                    <li class=\"{{getFrequencyClass('Once in two week')}}\" (click)=\"selectFrequency('Once in two week')\"> Once in two week </li>\n                                    <li class=\"{{getFrequencyClass('Every 1 hour')}}\" (click)=\"selectFrequency('Every 1 hour')\"> Every 1 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 2 hour')}}\" (click)=\"selectFrequency('Every 2 hour')\"> Every 2 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 3 hour')}}\" (click)=\"selectFrequency('Every 3 hour')\"> Every 3 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 4 hour')}}\" (click)=\"selectFrequency('Every 4 hour')\"> Every 4 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 5 hour')}}\" (click)=\"selectFrequency('Every 5 hour')\"> Every 5 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 6 hour')}}\" (click)=\"selectFrequency('Every 6 hour')\"> Every 6 hour </li>\n                                    <li class=\"{{getFrequencyClass('Alternate day')}}\" (click)=\"selectFrequency('Alternate day')\"> Alternate day </li>\n                                    <li class=\"{{getFrequencyClass('At bed time')}}\" (click)=\"selectFrequency('At bed time')\"> At bed time </li>\n                                    <li class=\"{{getFrequencyClass('SoS')}}\" (click)=\"selectFrequency('SoS')\"> SoS </li>\n                                </ul>\n                            </div>\n                            <div class=\"duration_cmbnd\">\n                                <h3 class=\"combined_heading\"> Duration (Days) </h3>\n                                <ul class=\"combined_duration\">\n                                    <li class=\"{{getDurationClass('1')}}\" (click)=\"selectDuration('1')\">1</li>\n                                    <li class=\"{{getDurationClass('2')}}\" (click)=\"selectDuration('2')\">2</li>\n                                    <li class=\"{{getDurationClass('3')}}\" (click)=\"selectDuration('3')\">3</li>\n                                    <li class=\"{{getDurationClass('4')}}\" (click)=\"selectDuration('4')\">4</li>\n                                    <li class=\"{{getDurationClass('5')}}\" (click)=\"selectDuration('5')\">5</li>\n                                    <li class=\"{{getDurationClass('6')}}\" (click)=\"selectDuration('6')\">6</li>\n                                    <li class=\"{{getDurationClass('7')}}\" (click)=\"selectDuration('7')\">7</li>\n                                    <li class=\"{{getDurationClass('8')}}\" (click)=\"selectDuration('8')\">8</li>\n                                    <li class=\"{{getDurationClass('9')}}\" (click)=\"selectDuration('9')\">9</li>\n                                    <li class=\"{{getDurationClass('10')}}\" (click)=\"selectDuration('10')\">10</li>\n                                    <li class=\"{{getDurationClass('12')}}\" (click)=\"selectDuration('12')\">12</li>\n                                    <li class=\"{{getDurationClass('14')}}\" (click)=\"selectDuration('14')\">14</li>\n                                    <li class=\"{{getDurationClass('15')}}\" (click)=\"selectDuration('15')\">15</li>\n                                    <li class=\"{{getDurationClass('18')}}\" (click)=\"selectDuration('18')\">18</li>\n                                    <li class=\"{{getDurationClass('21')}}\" (click)=\"selectDuration('21')\">21</li>\n                                    <li class=\"{{getDurationClass('25')}}\" (click)=\"selectDuration('25')\">25</li>\n                                    <li class=\"{{getDurationClass('28')}}\" (click)=\"selectDuration('28')\">28</li>\n                                    <li class=\"{{getDurationClass('30')}}\" (click)=\"selectDuration('30')\">30</li>\n                                    <li class=\"{{getDurationClass('35')}}\" (click)=\"selectDuration('35')\">35</li>\n                                    <li class=\"{{getDurationClass('42')}}\" (click)=\"selectDuration('42')\">42</li>\n                                    <li class=\"{{getDurationClass('60')}}\" (click)=\"selectDuration('60')\">60</li>\n                                    <li class=\"{{getDurationClass('90')}}\" (click)=\"selectDuration('90')\">90</li>\n                                    <li class=\"{{getDurationClass('120')}}\" (click)=\"selectDuration('120')\">120</li>\n                                    <li class=\"{{getDurationClass('180')}}\" (click)=\"selectDuration('180')\">180</li>\n                                </ul>\n                            </div>\n                            <div class=\"instr_cmbnd\">\n                                <h3 class=\"combined_heading\"> Special Instructions </h3>\n                                <ul class=\"combined_instruc\">\n                                    <li class=\"{{getFrequencyClassSpecial('After meals')}}\" (click)=\"selectFrequencySpecial('After meals')\"> After meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Empty stomach')}}\" (click)=\"selectFrequencySpecial('Empty stomach')\"> Empty stomach</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Before meals')}}\" (click)=\"selectFrequencySpecial('Before meals')\"> Before meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('As needed')}}\" (click)=\"selectFrequencySpecial('As needed')\"> As needed</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Each night')}}\" (click)=\"selectFrequencySpecial('Each night')\"> Each night</li>\n                                    <li class=\"{{getFrequencyClassSpecial('With milk')}}\" (click)=\"selectFrequencySpecial('With milk')\"> With milk</li>\n                                </ul>\n                                <h3 class=\"combined_heading\"> Injection Mode </h3>\n                                <ul class=\"combined_inject\">\n                                    <li class=\"{{getClassInjection('Intramuscular')}}\" (click)=\"injectionSelected('Intramuscular')\"> Intramuscular </li>\n                                    <li class=\"{{getClassInjection('Intravenous')}}\" (click)=\"injectionSelected('Intravenous')\"> Intravenous </li>\n                                    <li class=\"{{getClassInjection('Intradermal')}}\" (click)=\"injectionSelected('Intradermal')\"> Intradermal </li>\n                                    <li class=\"{{getClassInjection('Subcutaneous')}}\" (click)=\"injectionSelected('Subcutaneous')\"> Subcutaneous </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn_green\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"saveFreqDurInjection()\"> Save </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Combined modal (Tablet) -->\n<div class=\"modal fade combined_modal\" id=\"combinedModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\" *ngIf=\"currentFrequency && currentFrequency.med_name\"> {{currentFrequency.med_name[0].value}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"combined_flex\">\n                            <div class=\"frquency_cmbnd\">\n                                <h3 class=\"combined_heading\"> Frequency </h3>\n                                <ul class=\"combined_frequency\">\n                                    <li class=\"{{getFrequencyClass('Once a day')}}\" (click)=\"selectFrequency('Once a day')\"> Once a day </li>\n                                    <li class=\"{{getFrequencyClass('Twice a day')}}\" (click)=\"selectFrequency('Twice a day')\"> Twice a day </li>\n                                    <li class=\"{{getFrequencyClass('Thrice a day')}}\" (click)=\"selectFrequency('Thrice a day')\"> Thrice a day </li>\n                                    <li class=\"{{getFrequencyClass('Four times a day')}}\" (click)=\"selectFrequency('Four times a day')\"> Four times a day </li>\n                                    <li class=\"{{getFrequencyClass('Every Morning')}}\" (click)=\"selectFrequency('Every Morning')\"> Every Morning </li>\n                                    <li class=\"{{getFrequencyClass('Every Night')}}\" (click)=\"selectFrequency('Every Night')\"> Every Night </li>\n                                    <li class=\"{{getFrequencyClass('Once a week')}}\" (click)=\"selectFrequency('Once a week')\"> Once a week </li>\n                                    <li class=\"{{getFrequencyClass('Once a month')}}\" (click)=\"selectFrequency('Once a month')\"> Once a month </li>\n                                    <li class=\"{{getFrequencyClass('Once in two week')}}\" (click)=\"selectFrequency('Once in two week')\"> Once in two week </li>\n                                    <li class=\"{{getFrequencyClass('Every 1 hour')}}\" (click)=\"selectFrequency('Every 1 hour')\"> Every 1 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 2 hour')}}\" (click)=\"selectFrequency('Every 2 hour')\"> Every 2 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 3 hour')}}\" (click)=\"selectFrequency('Every 3 hour')\"> Every 3 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 4 hour')}}\" (click)=\"selectFrequency('Every 4 hour')\"> Every 4 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 5 hour')}}\" (click)=\"selectFrequency('Every 5 hour')\"> Every 5 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 6 hour')}}\" (click)=\"selectFrequency('Every 6 hour')\"> Every 6 hour </li>\n                                    <li class=\"{{getFrequencyClass('Alternate day')}}\" (click)=\"selectFrequency('Alternate day')\"> Alternate day </li>\n                                    <li class=\"{{getFrequencyClass('At bed time')}}\" (click)=\"selectFrequency('At bed time')\"> At bed time </li>\n                                    <li class=\"{{getFrequencyClass('SoS')}}\" (click)=\"selectFrequency('SoS')\"> SoS </li>\n                                </ul>\n                            </div>\n                            <div class=\"duration_cmbnd\">\n                                <h3 class=\"combined_heading\"> Duration (Days) </h3>\n                                <ul class=\"combined_duration\">\n                                    <li class=\"{{getDurationClass('1')}}\" (click)=\"selectDuration('1')\">1</li>\n                                    <li class=\"{{getDurationClass('2')}}\" (click)=\"selectDuration('2')\">2</li>\n                                    <li class=\"{{getDurationClass('3')}}\" (click)=\"selectDuration('3')\">3</li>\n                                    <li class=\"{{getDurationClass('4')}}\" (click)=\"selectDuration('4')\">4</li>\n                                    <li class=\"{{getDurationClass('5')}}\" (click)=\"selectDuration('5')\">5</li>\n                                    <li class=\"{{getDurationClass('6')}}\" (click)=\"selectDuration('6')\">6</li>\n                                    <li class=\"{{getDurationClass('7')}}\" (click)=\"selectDuration('7')\">7</li>\n                                    <li class=\"{{getDurationClass('8')}}\" (click)=\"selectDuration('8')\">8</li>\n                                    <li class=\"{{getDurationClass('9')}}\" (click)=\"selectDuration('9')\">9</li>\n                                    <li class=\"{{getDurationClass('10')}}\" (click)=\"selectDuration('10')\">10</li>\n                                    <li class=\"{{getDurationClass('12')}}\" (click)=\"selectDuration('12')\">12</li>\n                                    <li class=\"{{getDurationClass('14')}}\" (click)=\"selectDuration('14')\">14</li>\n                                    <li class=\"{{getDurationClass('15')}}\" (click)=\"selectDuration('15')\">15</li>\n                                    <li class=\"{{getDurationClass('18')}}\" (click)=\"selectDuration('18')\">18</li>\n                                    <li class=\"{{getDurationClass('21')}}\" (click)=\"selectDuration('21')\">21</li>\n                                    <li class=\"{{getDurationClass('25')}}\" (click)=\"selectDuration('25')\">25</li>\n                                    <li class=\"{{getDurationClass('28')}}\" (click)=\"selectDuration('28')\">28</li>\n                                    <li class=\"{{getDurationClass('30')}}\" (click)=\"selectDuration('30')\">30</li>\n                                    <li class=\"{{getDurationClass('35')}}\" (click)=\"selectDuration('35')\">35</li>\n                                    <li class=\"{{getDurationClass('42')}}\" (click)=\"selectDuration('42')\">42</li>\n                                    <li class=\"{{getDurationClass('60')}}\" (click)=\"selectDuration('60')\">60</li>\n                                    <li class=\"{{getDurationClass('90')}}\" (click)=\"selectDuration('90')\">90</li>\n                                    <li class=\"{{getDurationClass('120')}}\" (click)=\"selectDuration('120')\">120</li>\n                                    <li class=\"{{getDurationClass('180')}}\" (click)=\"selectDuration('180')\">180</li>\n                                </ul>\n                            </div>\n                            <div class=\"instr_cmbnd\">\n                                <h3 class=\"combined_heading\"> Special Instructions </h3>\n                                <ul class=\"combined_instruc\">\n                                    <li class=\"{{getFrequencyClassSpecial('After meals')}}\" (click)=\"selectFrequencySpecial('After meals')\"> After meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Empty stomach')}}\" (click)=\"selectFrequencySpecial('Empty stomach')\"> Empty stomach</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Before meals')}}\" (click)=\"selectFrequencySpecial('Before meals')\"> Before meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('As needed')}}\" (click)=\"selectFrequencySpecial('As needed')\"> As needed</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Each night')}}\" (click)=\"selectFrequencySpecial('Each night')\"> Each night</li>\n                                    <li class=\"{{getFrequencyClassSpecial('With milk')}}\" (click)=\"selectFrequencySpecial('With milk')\"> With milk</li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn_green\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"saveFreqDuration()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Combined modal (Drops) -->\n<div class=\"modal fade combined_modal\" id=\"combinedModal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\" *ngIf=\"currentFrequency && currentFrequency.med_name\"> {{currentFrequency.med_name[0].value}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"combined_flex\">\n                            <div class=\"frquency_cmbnd\">\n                                <h3 class=\"combined_heading\"> Frequency </h3>\n                                <ul class=\"combined_frequency\">\n                                    <li class=\"{{getFrequencyClass('Once a day')}}\" (click)=\"selectFrequency('Once a day')\"> Once a day </li>\n                                    <li class=\"{{getFrequencyClass('Twice a day')}}\" (click)=\"selectFrequency('Twice a day')\"> Twice a day </li>\n                                    <li class=\"{{getFrequencyClass('Thrice a day')}}\" (click)=\"selectFrequency('Thrice a day')\"> Thrice a day </li>\n                                    <li class=\"{{getFrequencyClass('Four times a day')}}\" (click)=\"selectFrequency('Four times a day')\"> Four times a day </li>\n                                    <li class=\"{{getFrequencyClass('Every Morning')}}\" (click)=\"selectFrequency('Every Morning')\"> Every Morning </li>\n                                    <li class=\"{{getFrequencyClass('Every Night')}}\" (click)=\"selectFrequency('Every Night')\"> Every Night </li>\n                                    <li class=\"{{getFrequencyClass('Once a week')}}\" (click)=\"selectFrequency('Once a week')\"> Once a week </li>\n                                    <li class=\"{{getFrequencyClass('Once a month')}}\" (click)=\"selectFrequency('Once a month')\"> Once a month </li>\n                                    <li class=\"{{getFrequencyClass('Once in two week')}}\" (click)=\"selectFrequency('Once in two week')\"> Once in two week </li>\n                                    <li class=\"{{getFrequencyClass('Every 1 hour')}}\" (click)=\"selectFrequency('Every 1 hour')\"> Every 1 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 2 hour')}}\" (click)=\"selectFrequency('Every 2 hour')\"> Every 2 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 3 hour')}}\" (click)=\"selectFrequency('Every 3 hour')\"> Every 3 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 4 hour')}}\" (click)=\"selectFrequency('Every 4 hour')\"> Every 4 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 5 hour')}}\" (click)=\"selectFrequency('Every 5 hour')\"> Every 5 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 6 hour')}}\" (click)=\"selectFrequency('Every 6 hour')\"> Every 6 hour </li>\n                                    <li class=\"{{getFrequencyClass('Alternate day')}}\" (click)=\"selectFrequency('Alternate day')\"> Alternate day </li>\n                                    <li class=\"{{getFrequencyClass('At bed time')}}\" (click)=\"selectFrequency('At bed time')\"> At bed time </li>\n                                    <li class=\"{{getFrequencyClass('SoS')}}\" (click)=\"selectFrequency('SoS')\"> SoS </li>\n                                </ul>\n                            </div>\n                            <div class=\"duration_cmbnd\">\n                                <h3 class=\"combined_heading\"> Duration (Days) </h3>\n                                <ul class=\"combined_duration\">\n                                    <li class=\"{{getDurationClass('1')}}\" (click)=\"selectDuration('1')\">1</li>\n                                    <li class=\"{{getDurationClass('2')}}\" (click)=\"selectDuration('2')\">2</li>\n                                    <li class=\"{{getDurationClass('3')}}\" (click)=\"selectDuration('3')\">3</li>\n                                    <li class=\"{{getDurationClass('4')}}\" (click)=\"selectDuration('4')\">4</li>\n                                    <li class=\"{{getDurationClass('5')}}\" (click)=\"selectDuration('5')\">5</li>\n                                    <li class=\"{{getDurationClass('6')}}\" (click)=\"selectDuration('6')\">6</li>\n                                    <li class=\"{{getDurationClass('7')}}\" (click)=\"selectDuration('7')\">7</li>\n                                    <li class=\"{{getDurationClass('8')}}\" (click)=\"selectDuration('8')\">8</li>\n                                    <li class=\"{{getDurationClass('9')}}\" (click)=\"selectDuration('9')\">9</li>\n                                    <li class=\"{{getDurationClass('10')}}\" (click)=\"selectDuration('10')\">10</li>\n                                    <li class=\"{{getDurationClass('12')}}\" (click)=\"selectDuration('12')\">12</li>\n                                    <li class=\"{{getDurationClass('14')}}\" (click)=\"selectDuration('14')\">14</li>\n                                    <li class=\"{{getDurationClass('15')}}\" (click)=\"selectDuration('15')\">15</li>\n                                    <li class=\"{{getDurationClass('18')}}\" (click)=\"selectDuration('18')\">18</li>\n                                    <li class=\"{{getDurationClass('21')}}\" (click)=\"selectDuration('21')\">21</li>\n                                    <li class=\"{{getDurationClass('25')}}\" (click)=\"selectDuration('25')\">25</li>\n                                    <li class=\"{{getDurationClass('28')}}\" (click)=\"selectDuration('28')\">28</li>\n                                    <li class=\"{{getDurationClass('30')}}\" (click)=\"selectDuration('30')\">30</li>\n                                    <li class=\"{{getDurationClass('35')}}\" (click)=\"selectDuration('35')\">35</li>\n                                    <li class=\"{{getDurationClass('42')}}\" (click)=\"selectDuration('42')\">42</li>\n                                    <li class=\"{{getDurationClass('60')}}\" (click)=\"selectDuration('60')\">60</li>\n                                    <li class=\"{{getDurationClass('90')}}\" (click)=\"selectDuration('90')\">90</li>\n                                    <li class=\"{{getDurationClass('120')}}\" (click)=\"selectDuration('120')\">120</li>\n                                    <li class=\"{{getDurationClass('180')}}\" (click)=\"selectDuration('180')\">180</li>\n                                </ul>\n                            </div>\n                            <div class=\"instr_cmbnd\">\n                                <h3 class=\"combined_heading\"> Special Instructions </h3>\n                                <ul class=\"combined_instruc\">\n                                    <li class=\"{{getFrequencyClassSpecial('After meals')}}\" (click)=\"selectFrequencySpecial('After meals')\"> After meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Empty stomach')}}\" (click)=\"selectFrequencySpecial('Empty stomach')\"> Empty stomach</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Before meals')}}\" (click)=\"selectFrequencySpecial('Before meals')\"> Before meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('As needed')}}\" (click)=\"selectFrequencySpecial('As needed')\"> As needed</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Each night')}}\" (click)=\"selectFrequencySpecial('Each night')\"> Each night</li>\n                                    <li class=\"{{getFrequencyClassSpecial('With milk')}}\" (click)=\"selectFrequencySpecial('With milk')\"> With milk</li>\n                                </ul>\n                                <h3 class=\"combined_heading\"> Drop quantity </h3>\n                                <ul class=\"combined_instruc combined_drop\">\n                                    <li *ngFor=\"let value of quantity_range\" [ngClass]=\"value==tempQuantity ? 'active-cel' : ''\" (click)=\"addTempQuantity(value)\"> {{value}} </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn_green\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"saveFreqDurDrops()\"> Save </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Combined modal (Syrup) -->\n<div class=\"modal fade combined_modal\" id=\"combinedModal4\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\" *ngIf=\"currentFrequency && currentFrequency.med_name\"> {{currentFrequency.med_name[0].value}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"combined_flex\">\n                            <div class=\"frquency_cmbnd\">\n                                <h3 class=\"combined_heading\"> Frequency </h3>\n                                <ul class=\"combined_frequency\">\n                                    <li class=\"{{getFrequencyClass('Once a day')}}\" (click)=\"selectFrequency('Once a day')\"> Once a day </li>\n                                    <li class=\"{{getFrequencyClass('Twice a day')}}\" (click)=\"selectFrequency('Twice a day')\"> Twice a day </li>\n                                    <li class=\"{{getFrequencyClass('Thrice a day')}}\" (click)=\"selectFrequency('Thrice a day')\"> Thrice a day </li>\n                                    <li class=\"{{getFrequencyClass('Four times a day')}}\" (click)=\"selectFrequency('Four times a day')\"> Four times a day </li>\n                                    <li class=\"{{getFrequencyClass('Every Morning')}}\" (click)=\"selectFrequency('Every Morning')\"> Every Morning </li>\n                                    <li class=\"{{getFrequencyClass('Every Night')}}\" (click)=\"selectFrequency('Every Night')\"> Every Night </li>\n                                    <li class=\"{{getFrequencyClass('Once a week')}}\" (click)=\"selectFrequency('Once a week')\"> Once a week </li>\n                                    <li class=\"{{getFrequencyClass('Once a month')}}\" (click)=\"selectFrequency('Once a month')\"> Once a month </li>\n                                    <li class=\"{{getFrequencyClass('Once in two week')}}\" (click)=\"selectFrequency('Once in two week')\"> Once in two week </li>\n                                    <li class=\"{{getFrequencyClass('Every 1 hour')}}\" (click)=\"selectFrequency('Every 1 hour')\"> Every 1 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 2 hour')}}\" (click)=\"selectFrequency('Every 2 hour')\"> Every 2 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 3 hour')}}\" (click)=\"selectFrequency('Every 3 hour')\"> Every 3 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 4 hour')}}\" (click)=\"selectFrequency('Every 4 hour')\"> Every 4 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 5 hour')}}\" (click)=\"selectFrequency('Every 5 hour')\"> Every 5 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 6 hour')}}\" (click)=\"selectFrequency('Every 6 hour')\"> Every 6 hour </li>\n                                    <li class=\"{{getFrequencyClass('Alternate day')}}\" (click)=\"selectFrequency('Alternate day')\"> Alternate day </li>\n                                    <li class=\"{{getFrequencyClass('At bed time')}}\" (click)=\"selectFrequency('At bed time')\"> At bed time </li>\n                                    <li class=\"{{getFrequencyClass('SoS')}}\" (click)=\"selectFrequency('SoS')\"> SoS </li>\n                                </ul>\n                            </div>\n                            <div class=\"duration_cmbnd\">\n                                <h3 class=\"combined_heading\"> Duration (Days) </h3>\n                                <ul class=\"combined_duration\">\n                                    <li class=\"{{getDurationClass('1')}}\" (click)=\"selectDuration('1')\">1</li>\n                                    <li class=\"{{getDurationClass('2')}}\" (click)=\"selectDuration('2')\">2</li>\n                                    <li class=\"{{getDurationClass('3')}}\" (click)=\"selectDuration('3')\">3</li>\n                                    <li class=\"{{getDurationClass('4')}}\" (click)=\"selectDuration('4')\">4</li>\n                                    <li class=\"{{getDurationClass('5')}}\" (click)=\"selectDuration('5')\">5</li>\n                                    <li class=\"{{getDurationClass('6')}}\" (click)=\"selectDuration('6')\">6</li>\n                                    <li class=\"{{getDurationClass('7')}}\" (click)=\"selectDuration('7')\">7</li>\n                                    <li class=\"{{getDurationClass('8')}}\" (click)=\"selectDuration('8')\">8</li>\n                                    <li class=\"{{getDurationClass('9')}}\" (click)=\"selectDuration('9')\">9</li>\n                                    <li class=\"{{getDurationClass('10')}}\" (click)=\"selectDuration('10')\">10</li>\n                                    <li class=\"{{getDurationClass('12')}}\" (click)=\"selectDuration('12')\">12</li>\n                                    <li class=\"{{getDurationClass('14')}}\" (click)=\"selectDuration('14')\">14</li>\n                                    <li class=\"{{getDurationClass('15')}}\" (click)=\"selectDuration('15')\">15</li>\n                                    <li class=\"{{getDurationClass('18')}}\" (click)=\"selectDuration('18')\">18</li>\n                                    <li class=\"{{getDurationClass('21')}}\" (click)=\"selectDuration('21')\">21</li>\n                                    <li class=\"{{getDurationClass('25')}}\" (click)=\"selectDuration('25')\">25</li>\n                                    <li class=\"{{getDurationClass('28')}}\" (click)=\"selectDuration('28')\">28</li>\n                                    <li class=\"{{getDurationClass('30')}}\" (click)=\"selectDuration('30')\">30</li>\n                                    <li class=\"{{getDurationClass('35')}}\" (click)=\"selectDuration('35')\">35</li>\n                                    <li class=\"{{getDurationClass('42')}}\" (click)=\"selectDuration('42')\">42</li>\n                                    <li class=\"{{getDurationClass('60')}}\" (click)=\"selectDuration('60')\">60</li>\n                                    <li class=\"{{getDurationClass('90')}}\" (click)=\"selectDuration('90')\">90</li>\n                                    <li class=\"{{getDurationClass('120')}}\" (click)=\"selectDuration('120')\">120</li>\n                                    <li class=\"{{getDurationClass('180')}}\" (click)=\"selectDuration('180')\">180</li>\n                                </ul>\n                            </div>\n                            <div class=\"instr_cmbnd\">\n                                <h3 class=\"combined_heading\"> Special Instructions </h3>\n                                <ul class=\"combined_instruc\">\n                                    <li class=\"{{getFrequencyClassSpecial('After meals')}}\" (click)=\"selectFrequencySpecial('After meals')\"> After meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Empty stomach')}}\" (click)=\"selectFrequencySpecial('Empty stomach')\"> Empty stomach</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Before meals')}}\" (click)=\"selectFrequencySpecial('Before meals')\"> Before meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('As needed')}}\" (click)=\"selectFrequencySpecial('As needed')\"> As needed</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Each night')}}\" (click)=\"selectFrequencySpecial('Each night')\"> Each night</li>\n                                    <li class=\"{{getFrequencyClassSpecial('With milk')}}\" (click)=\"selectFrequencySpecial('With milk')\"> With milk</li>\n                                </ul>\n                                <h3 class=\"combined_heading\"> Dosage (ml) </h3>\n                                <ul class=\"combined_instruc combined_drop combined_dosage\">\n                                    <li class=\"{{getClassDosage('1')}}\" (click)=\"selectDosage('1')\"> 1 </li>\n                                    <li class=\"{{getClassDosage('2')}}\" (click)=\"selectDosage('2')\"> 2 </li>\n                                    <li class=\"{{getClassDosage('3')}}\" (click)=\"selectDosage('3')\"> 3 </li>\n                                    <li class=\"{{getClassDosage('4')}}\" (click)=\"selectDosage('4')\"> 4 </li>\n                                    <li class=\"{{getClassDosage('5')}}\" (click)=\"selectDosage('5')\"> 5 </li>\n                                    <li class=\"{{getClassDosage('1.5')}}\" (click)=\"selectDosage('1.5')\"> 1.5 </li>\n                                    <li class=\"{{getClassDosage('2.5')}}\" (click)=\"selectDosage('2.5')\"> 2.5 </li>\n                                    <li class=\"{{getClassDosage('3.5')}}\" (click)=\"selectDosage('3.5')\"> 3.5 </li>\n                                    <li class=\"{{getClassDosage('4.5')}}\" (click)=\"selectDosage('4.5')\"> 4.5 </li>\n                                    <li class=\"{{getClassDosage('5.5')}}\" (click)=\"selectDosage('5.5')\"> 5.5 </li>\n                                    <li class=\"{{getClassDosage('6')}}\" (click)=\"selectDosage('6')\"> 6 </li>\n                                    <li class=\"{{getClassDosage('7')}}\" (click)=\"selectDosage('7')\"> 7 </li>\n                                    <li class=\"{{getClassDosage('8')}}\" (click)=\"selectDosage('8')\"> 8 </li>\n                                    <li class=\"{{getClassDosage('9')}}\" (click)=\"selectDosage('9')\"> 9 </li>\n                                    <li class=\"{{getClassDosage('10')}}\" (click)=\"selectDosage('10')\"> 10 </li>\n                                    <li class=\"{{getClassDosage('6.5')}}\" (click)=\"selectDosage('6.5')\"> 6.5 </li>\n                                    <li class=\"{{getClassDosage('7.5')}}\" (click)=\"selectDosage('7.5')\"> 7.5 </li>\n                                    <li class=\"{{getClassDosage('8.5')}}\" (click)=\"selectDosage('8.5')\"> 8.5 </li>\n                                    <li class=\"{{getClassDosage('9.5')}}\" (click)=\"selectDosage('9.5')\"> 9.5 </li>\n                                    <li class=\"{{getClassDosage('10.5')}}\" (click)=\"selectDosage('10.5')\"> 10.5 </li>\n                                    <li class=\"{{getClassDosage('11')}}\" (click)=\"selectDosage('11')\"> 11 </li>\n                                    <li class=\"{{getClassDosage('12')}}\" (click)=\"selectDosage('12')\"> 12 </li>\n                                    <li class=\"{{getClassDosage('15')}}\" (click)=\"selectDosage('15')\"> 15 </li>\n                                    <li class=\"{{getClassDosage('20')}}\" (click)=\"selectDosage('20')\"> 20 </li>\n                                    <li class=\"{{getClassDosage('25')}}\" (click)=\"selectDosage('25')\"> 25 </li>\n                                    <li class=\"{{getClassDosage('11.5')}}\" (click)=\"selectDosage('11.5')\"> 11.5 </li>\n                                    <li class=\"{{getClassDosage('12.5')}}\" (click)=\"selectDosage('12.5')\"> 12.5 </li>\n                                    <li class=\"{{getClassDosage('30')}}\" (click)=\"selectDosage('30')\"> 30 </li>\n                                    <li class=\"{{getClassDosage('40')}}\" (click)=\"selectDosage('40')\"> 40 </li>\n                                    <li class=\"{{getClassDosage('50')}}\" (click)=\"selectDosage('50')\"> 50 </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn_green\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"saveFreqDurDosage()\"> Save </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Other Treatment -->\n<div class=\"modal fade combined_modal\" id=\"combinedModal5\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\" *ngIf=\"tempTreatObject\"> {{tempTreatObject[tempTreatObjectIndex].name}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"combined_flex\">\n                            <div class=\"frquency_cmbnd\" *ngIf=\"tempTreatObject && tempTreatObject[tempTreatObjectIndex].name!='Plaster'\">\n                                <h3 class=\"combined_heading\"> Frequency </h3>\n                                <ul class=\"combined_frequency\">\n                                    <li (click)=\"selectFromTreatFrequency('Once a day')\" class=\"{{getTreatFrequencyModalClass('Once a day')}}\"> Once a day </li>\n                                    <li (click)=\"selectFromTreatFrequency('Twice a day')\" class=\"{{getTreatFrequencyModalClass('Twice a day')}}\"> Twice a day </li>\n                                    <li (click)=\"selectFromTreatFrequency('Thrice a day')\" class=\"{{getTreatFrequencyModalClass('Thrice a day')}}\"> Thrice a day </li>\n                                    <li (click)=\"selectFromTreatFrequency('Four times a day')\" class=\"{{getTreatFrequencyModalClass('Four times a day')}}\"> Four times a day </li>\n                                    <li (click)=\"selectFromTreatFrequency('Once a week')\" class=\"{{getTreatFrequencyModalClass('Once a week')}}\"> Once a week </li>\n                                    <li (click)=\"selectFromTreatFrequency('Every morning')\" class=\"{{getTreatFrequencyModalClass('Every morning')}}\"> Every morning </li>\n                                    <li (click)=\"selectFromTreatFrequency('Every night')\" class=\"{{getTreatFrequencyModalClass('Every night')}}\"> Every night </li>\n                                    <li (click)=\"selectFromTreatFrequency(' Every 1 hour')\" class=\"{{getTreatFrequencyModalClass(' Every 1 hour')}}\"> Every 1 hour </li>\n                                    <li (click)=\"selectFromTreatFrequency('Every 2 hour')\" class=\"{{getTreatFrequencyModalClass('Every 2 hour')}}\"> Every 2 hour </li>\n                                    <li (click)=\"selectFromTreatFrequency('Every 3 hour')\" class=\"{{getTreatFrequencyModalClass('Every 3 hour')}}\"> Every 3 hour </li>\n                                    <li (click)=\"selectFromTreatFrequency('Every 4 hour')\" class=\"{{getTreatFrequencyModalClass('Every 4 hour')}}\"> Every 4 hour </li>\n                                    <li (click)=\"selectFromTreatFrequency('Every 6 hour')\" class=\"{{getTreatFrequencyModalClass('Every 6 hour')}}\"> Every 6 hour </li>\n                                    <li (click)=\"selectFromTreatFrequency('Alternate day')\" class=\"{{getTreatFrequencyModalClass('Alternate day')}}\"> Alternate day </li>\n                                    <li (click)=\"selectFromTreatFrequency('At bed time')\" class=\"{{getTreatFrequencyModalClass('At bed time')}}\"> At bed time </li>\n                                    <li (click)=\"selectFromTreatFrequency('SoS')\" class=\"{{getTreatFrequencyModalClass('SoS')}}\"> SoS </li>\n                                </ul>\n                            </div>\n                            <div class=\"duration_cmbnd\">\n                                <h3 class=\"combined_heading\"> Duration (Days) </h3>\n                                <ul class=\"combined_duration\">\n                                    <li class=\"{{getDurationModalClass('1')}}\" (click)=\"selectFromTreatDuration('1')\">1</li>\n                                    <li class=\"{{getDurationModalClass('2')}}\" (click)=\"selectFromTreatDuration('2')\">2</li>\n                                    <li class=\"{{getDurationModalClass('3')}}\" (click)=\"selectFromTreatDuration('3')\">3</li>\n                                    <li class=\"{{getDurationModalClass('4')}}\" (click)=\"selectFromTreatDuration('4')\">4</li>\n                                    <li class=\"{{getDurationModalClass('5')}}\" (click)=\"selectFromTreatDuration('5')\">5</li>\n                                    <li class=\"{{getDurationModalClass('6')}}\" (click)=\"selectFromTreatDuration('6')\"> 6 </li>\n                                    <li class=\"{{getDurationModalClass('7')}}\" (click)=\"selectFromTreatDuration('7')\">7</li>\n                                    <li class=\"{{getDurationModalClass('8')}}\" (click)=\"selectFromTreatDuration('8')\">8</li>\n                                    <li class=\"{{getDurationModalClass('9')}}\" (click)=\"selectFromTreatDuration('9')\">9</li>\n                                    <li class=\"{{getDurationModalClass('10')}}\" (click)=\"selectFromTreatDuration('10')\">10</li>\n                                    <li class=\"{{getDurationModalClass('12')}}\" (click)=\"selectFromTreatDuration('12')\">12</li>\n                                    <li class=\"{{getDurationModalClass('14')}}\" (click)=\"selectFromTreatDuration('14')\"> 14 </li>\n                                    <li class=\"{{getDurationModalClass('15')}}\" (click)=\"selectFromTreatDuration('15')\">15</li>\n                                    <li class=\"{{getDurationModalClass('18')}}\" (click)=\"selectFromTreatDuration('18')\">18</li>\n                                    <li class=\"{{getDurationModalClass('21')}}\" (click)=\"selectFromTreatDuration('21')\">21</li>\n                                    <li class=\"{{getDurationModalClass('25')}}\" (click)=\"selectFromTreatDuration('25')\">25</li>\n                                    <li class=\"{{getDurationModalClass('28')}}\" (click)=\"selectFromTreatDuration('28')\">28</li>\n                                    <li class=\"{{getDurationModalClass('30')}}\" (click)=\"selectFromTreatDuration('30')\"> 30 </li>\n                                    <li class=\"{{getDurationModalClass('35')}}\" (click)=\"selectFromTreatDuration('35')\">35</li>\n                                    <li class=\"{{getDurationModalClass('42')}}\" (click)=\"selectFromTreatDuration('42')\">42</li>\n                                    <li class=\"{{getDurationModalClass('60')}}\" (click)=\"selectFromTreatDuration('60')\">60</li>\n                                    <li class=\"{{getDurationModalClass('90')}}\" (click)=\"selectFromTreatDuration('90')\">90</li>\n                                    <li class=\"{{getDurationModalClass('120')}}\" (click)=\"selectFromTreatDuration('120')\">120</li>\n                                    <li class=\"{{getDurationModalClass('180')}}\" (click)=\"selectFromTreatDuration('180')\"> 180</li>\n                                </ul>\n                            </div>\n                            <!-- <div class=\"instr_cmbnd\" *ngIf=\"tempTreatObject && tempTreatObject[tempTreatObjectIndex].name!='Fomentation' && tempTreatObject[tempTreatObjectIndex].name!='Plaster'\">\n                                <h3 class=\"combined_heading\"> Special Instructions </h3>\n                                <ul class=\"combined_instruc\">\n                                    <li (click)=\"selectFromTreatSpecialInstruction('After meals')\" class=\"{{getSpecialInstructionModalClass('After meals')}}\"> After meals</li>\n                                    <li (click)=\"selectFromTreatSpecialInstruction('Empty stomach')\" class=\"{{getSpecialInstructionModalClass('Empty stomach')}}\"> Empty stomach</li>\n                                    <li (click)=\"selectFromTreatSpecialInstruction('Before meals')\" class=\"{{getSpecialInstructionModalClass('Before meals')}}\"> Before meals</li>\n                                    <li (click)=\"selectFromTreatSpecialInstruction('As needed')\" class=\"{{getSpecialInstructionModalClass('As needed')}}\"> As needed</li>\n                                    <li (click)=\"selectFromTreatSpecialInstruction('Each night')\" class=\"{{getSpecialInstructionModalClass('Each night')}}\"> Each night</li>\n                                    <li (click)=\"selectFromTreatSpecialInstruction('With milk')\" class=\"{{getSpecialInstructionModalClass('With milk')}}\"> With milk</li>\n                                </ul>\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn_green\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"saveFreqDurationTreatment()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade combined_modal\" id=\"presetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\">Presets ({{presetType}})</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"tags-listing-div\">\n                    <fieldset class=\"fieldset-preset\">\n                        <ul class=\"tags-listing preset-popup-ul\">\n                            <li class=\"{{getMedPresetClass(presetType,i,data)}}\" *ngFor=\"let data of presetArray;let i = index\" (click)=\"showHidePreset(presetType,i,data)\"> <a href=\"javascript:void(0)\"> \n                            <span *ngIf=\"presetType=='Instructions' || presetType=='Surgery' || presetType=='Other Treatments' || presetType=='Investigation' || presetType=='Medication'\">{{data.preset_name}}</span>\n                            <span *ngIf=\"presetType=='Symptoms' || presetType=='Diagnosis'\">{{data.value}}\n                            </span>\n                            </a> </li>\n                        </ul>\n                    </fieldset>\n                </div>\n                <h4 *ngIf=\"!presetArray || presetArray.length<1\" class=\"text-muted\" style=\"text-align:center\">No Presets Found</h4>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"closePresetPop()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-preset/dashboard-preset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPresetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirmation_popup_confirmation_dialog_update_confirmation_dialog_update_component__ = __webpack_require__("../../../../../src/app/confirmation-popup/confirmation-dialog-update/confirmation-dialog-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardPresetComponent = /** @class */ (function () {
    function DashboardPresetComponent(toastr, userService, router, dialog) {
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this.condition = 'abc';
        this.treatab = 0;
        this.investigationtab = 0;
        this.surgeyproctab = 0;
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
        //Other Treatment
        this.itemsymptoms = [];
        this.itemsfinding = [];
        this.itemsdiagnosis = [];
        this.quantity_drops = 'Select';
        this.investigationSelection = [];
        this.surgerySelection = [];
        this.treatmentSelection = [];
        this.presetInstructions = [
            { id: 1, name: 'Avoid oily and spicy food' },
            { id: 2, name: 'Limit salt Intake' },
            { id: 3, name: 'Stop Smoking' },
            { id: 4, name: 'Limit your intake of alcohol' },
            { id: 5, name: 'include protein in your meal' },
            { id: 6, name: 'Avoid heavy and fried foods' },
            { id: 7, name: 'Drink plenty of water' },
            { id: 8, name: 'Take complete bed rest' },
            { id: 9, name: 'Eat variety of fruits and vegetables every day' },
            { id: 10, name: 'Take fluid diet' },
            { id: 11, name: 'Avoid driving after taking prescribed medicines' },
            { id: 12, name: 'Avoid crowded places' },
            { id: 13, name: 'Consult doctor if the fever does not subside' },
            { id: 14, name: 'Avoid direct sunlight' },
            { id: 15, name: 'Avoid outside Junk foods' },
            { id: 16, name: 'No dietary restrictions' },
            { id: 17, name: 'Stop tobacco intake' },
            { id: 18, name: 'Do daily exercise' },
            { id: 19, name: 'Drink lots of fluids to prevent dehydration' },
            { id: 20, name: 'Avoid travelling' },
        ];
    }
    DashboardPresetComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        this.preset_name = null;
        this.save_true = true;
        //medication
        // this.GetMedicationSuggestions('Tablet')
        // this.GetMedicationSuggestions('Capsule')
        // this.GetMedicationSuggestions('Syrup')
        // this.GetMedicationSuggestions('Suspension')
        // this.GetMedicationSuggestions('Emulsion')
        // this.GetMedicationSuggestions('Solution')
        // this.GetMedicationSuggestions('Injection')
        // this.GetMedicationSuggestions('Cream')
        // this.GetMedicationSuggestions('Oitment')
        // this.GetMedicationSuggestions('Gel')
        // this.GetMedicationSuggestions('Lotion')
        // this.GetMedicationSuggestions('Drops')
        // this.GetMedicationSuggestions('Aerosols')
        // this.GetMedicationSuggestions('Powder')
        // this.GetMedicationSuggestions('MouthWash')
        // this.GetMedicationSuggestions('TabletInfo')
        // this.GetMedicationSuggestions('CapsuleInfo')
        // this.GetMedicationSuggestions('SyrupInfo')
        // this.GetMedicationSuggestions('SuspensionInfo')
        // this.GetMedicationSuggestions('EmulsionInfo')
        // this.GetMedicationSuggestions('SolutionInfo')
        // this.GetMedicationSuggestions('InjectionInfo')
        // this.GetMedicationSuggestions('CreamInfo')
        // this.GetMedicationSuggestions('OitmentInfo')
        // this.GetMedicationSuggestions('GelInfo')
        // this.GetMedicationSuggestions('LotionInfo')
        // this.GetMedicationSuggestions('DropsInfo')
        // this.GetMedicationSuggestions('AerosolsInfo')
        // this.GetMedicationSuggestions('PowderInfo')
        // this.GetMedicationSuggestions('MouthWashInfo')
        // this.medicatab = 0
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
        this.totalMedications = -1;
        this.medicationSavedArray = [];
        // this.medicationStatus[0].status = true
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
        this.totalMedicationPresetSelected = 0;
        this.doctorPresetArray = [];
        this.medicationPresetShow = false;
        this.tempMedicationArray = [];
        //medication
        //Other treatment
        this.treatmentStatus = [
            { name: 'Lifestyle Changes', status: false, SpecialInstruction: null, lifestyle: null },
            { name: 'Physiotherapy', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' },
            { name: 'Plaster', status: false, SpecialInstruction: null, Injury_Area: 'Injury Area', plaster_type: null, Duration: 'Duration' },
            { name: 'Fomentation', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' },
            { name: 'Gargle', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: null },
            { name: 'Dressing', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: null },
            { name: 'Bandage', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: null },
            { name: 'Other', status: false, SpecialInstruction: null, treat: null }
        ];
        this.treatmentStatus[2].div = [];
        this.treatmentStatus[2].div.push({
            name: 'Plaster',
            status: false,
            SpecialInstruction: null,
            Injury_Area: 'Injury Area',
            plaster_type: null,
            Duration: 'Duration'
        });
        this.treatmentStatus[7].div = [];
        this.treatmentStatus[7].div.push({
            name: 'Other',
            status: false,
            SpecialInstruction: null,
            Frequency: 'Frequency',
            Duration: 'Duration',
            med_name: null
        });
        this.tempTreatObject = null;
        this.tempTreatObjectIndex = null;
        this.tempTreatFrequency = null;
        this.tempTreatSpecialInstruction = null;
        this.tempTreatDuration = null;
        this.totalOtherTreatment = 0;
        this.tempPlasterDivIndex = null;
        this.plaster_open_by_main = true;
        this.otherTreatmentPresetShow = false;
        //Other treatmenmt
        //investigation
        this.investigationArray = [];
        this.investigationStatus = [{
                name: 'Pathology',
                status: false,
                model: ''
            }, {
                name: 'X-Ray',
                status: false,
                model: ''
            }, {
                name: 'Ultrasound',
                status: false,
                model: ''
            }, {
                name: 'Doppler Studies',
                status: false,
                model: ''
            }, {
                name: 'ECG',
                status: false,
                model: ''
            }, {
                name: 'EEG',
                status: false,
                model: ''
            }, {
                name: 'TMT',
                status: false,
                model: ''
            }, {
                name: 'Echo',
                status: false,
                model: ''
            }, {
                name: 'CT-Scan',
                status: false,
                model: ''
            }, {
                name: 'MRI',
                status: false,
                model: ''
            },
            {
                name: 'Nerve Test',
                status: false,
                model: ''
            }, {
                name: 'Uroflowmetry',
                status: false,
                model: ''
            }, {
                name: 'Audiometry',
                status: false,
                model: ''
            }, {
                name: 'Mammography',
                status: false,
                model: ''
            }, {
                name: 'Bone Densitometry',
                status: false,
                model: ''
            }, {
                name: 'Eye Tests',
                status: false,
                model: ''
            }, {
                name: 'Lung Test',
                status: false,
                model: ''
            }, {
                name: 'Others',
                status: false,
                model: ''
            }
        ];
        this.numberOfInvestigationSelected = 0;
        //investigation
        //Surgery
        this.totalSurgeryOptionsSelected = 0;
        this.othertabs = true;
        this.suregeryOptions = [{
                name: 'Cardiology',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                    'BRONCHIAL INJURIES/FB',
                    'CABG',
                    'CARDIAC',
                    'CARDIAC INJURES',
                    'CARDIOTHORACIC',
                    'CHEST INJURY',
                    'CHEST SURGERY',
                    'CLOSED HEART',
                    'COIL CLOSURE',
                    'COMPLEX ARRHYTHMIAS',
                    'CONGENITAL (COMPLEX)',
                    'CONGENITAL (SIMPLE)',
                    'DEVICE CLOSURE',
                    'DIAPHRAGMATIC INJURIES',
                    'LUNGS',
                    'OESOPHAGEAL INJURY/FB',
                    'PERICARDIUM',
                    'SIMPLE ARRHYTHMIAS',
                    'VALVE REPAIR',
                    'VALVE REPLACEMENT'
                ]
            },
            {
                name: 'Dental',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                    'BRACES (ORTHODONTICS)',
                    'CROWN , BRIDGE & VENEER',
                    'DENTAL IMPLANT',
                    'DENTAL-TREATMENT FOR CHILDREN',
                    'DENTURE',
                    'ENDODONTICS',
                    'FILLINGS & COSMETIC TREATMENTS',
                    'GUM TREATMENT',
                    'ORAL SURGERY',
                    'OTHERS'
                ]
            },
            {
                name: 'ENT',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                    'EAR',
                    'NOSE',
                    'THROAT'
                ]
            },
            {
                name: 'Gastroenterology',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                    'EMERGENCY',
                    'GALL BLADDER',
                    'HERNIA',
                    'LARGE / SMALL INTESTINE',
                    'LARGE INTESTINE',
                    'LIVER',
                    'OESOPHAGUS',
                    'PANCREAS',
                    'SMALL INTESTINE',
                    'SPLEEN',
                    'STOMACH'
                ]
            },
            {
                name: 'General Surgery',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                    'GENERAL SURGERY',
                    'HEAD & NECK',
                    'ABDOMEN',
                    'ADRENAL',
                    'GALLBLADDER',
                    'BREAST',
                    'VASCULAR',
                    'UROLOGY'
                ]
            },
            {
                name: 'Gynaecology/Obstetrics',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                    'OBSTETRICS',
                    'GYNAECOLOGY'
                ]
            },
            // { name: 'Genito-Urinary', status: false, status1: false, div: [], database: [], sub_speciality_array: [] },
            { name: 'Neonatal', status: false, status1: false, div: [], database: [], sub_speciality_array: ['NEONATAL INTENSIVE CARE'] },
            {
                name: 'Neurology',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                    'ANEYRISMS',
                    'BRAIN',
                    'OTHER SURGERIES',
                    'SOFT TISSUE and VASCULAR',
                    'SPINAL SURGERIES',
                    'SPINE',
                    'TRIGEMINAL NEURALGIA'
                ]
            },
            {
                name: 'Oncology',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                    'ABDOMINAL WALL TUMOR',
                    'BONE / SOFT TISSUE TUMORS',
                    'BREAST TUMORS',
                    'CA. CERVIX',
                    'CA. EAR',
                    'CA. ENDOMETRIUM',
                    'CA. GALL BLADDER',
                    'CA. GASTRO INTESTINAL TRACT',
                    'CA. NASOPHARYNX',
                    'CA. PARATHYROID',
                    'CA. THYROID',
                    'CA. TRACHEA',
                    'CA. URINARY BLADDER',
                    'CA. EYE/ MAXILLA /PARA NASAL SINUS',
                    'CA.ORAL CAVITY',
                    'CA.RECTUM',
                    'CA.SOFT PALATE',
                    'ESOPHAGUS',
                    'GASTROINTESTINAL TRACT',
                    'GENITO URINARY CANCER',
                    'GENITO URINARY SYSTEM',
                    'GYNAEC CANCERS',
                    'GYNAECOLOGICAL ONCOLOGY',
                    'HEAD & NECK',
                    'LUNG',
                    'LUNG CANCER',
                    'PALLIATIVE SURGERIES',
                    'RECONSTRUCTION',
                    'RETROPERITONEAL TUMOR',
                    'SKIN TUMORS',
                    'SOFT TISSUE /BONE TUMORS . CHEST WALL',
                    'SOFT TISSUE AND BONE TUMORS',
                    'SPLEEN',
                    'TESTES CANCER',
                    'THORACIC AND MEDIASTINUM'
                ]
            },
            {
                name: 'Ophthalmology',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                    'CORNEA AND SCLERA',
                    'LID SURGERY',
                    'OPTHALMOLOGY',
                    'ORBIT',
                    'PEDIATRIC',
                    'RETINA',
                    'SQUINT CORRECTION',
                    'VITREO-RETINA'
                ]
            },
            {
                name: 'Orthopaedics',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                    'AMPUTATIONS -SUPRA MAJOR',
                    'AMPUTATIONS-INTERMEDIATE',
                    'AMPUTATIONS-MAJOR',
                    'AMPUTATIONS-MINOR',
                    'BONE AND JOINT',
                    'DAYCARE PROCEDURE',
                    'DISLOCATIONS',
                    'FEMORAL NECK FRACTURE',
                    'FRACTURE CORRECTION',
                    'FRACTURE K WIRE FIXATION',
                    'FRACTURE-CLOSED PINNING DISPLACED PAEDIATRIC FRACTURES',
                    'FRACTURE-EXTERNAL FIXATOR',
                    'FRACTURE-NAILING / CRIF',
                    'FRACTURE-PLATING-ORIF',
                    'FRACTURE-TENSION BAND WIRING',
                    'HIP',
                    'INTERMEDIATE WOUND DEBRIDEMENT AND WASHOUT',
                    'KNEE/HIP REPLACEMENT',
                    'MAJOR WOUND DEBRIDEMENT AND WASHOUT',
                    'MINOR/ SECOND LOOK WOUND DEBRIDEMENT AND WASHOUT',
                    'PAEDIATRIC FRACTURE-NAILING / CRIF',
                    'SOFT TISSUE SURGERY',
                    'SPINE SURGERY',
                    'TENDON REPAIR MAJOR',
                    'TENDON TRANSFERS MULTIPLE',
                    'TUMOR SURGERY',
                ]
            },
            {
                name: 'Paediatric',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                    'ABDOMEN',
                    'CHEST',
                    'CONGENITAL MALFORMATIONS',
                    'GENITOURINARY',
                    'HEAD AND NECK',
                    'MISCELLANEOUS',
                    'NEUROSURGERY',
                    'ONCOLOGY'
                ]
            },
            {
                name: 'Urology',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                    'BLADDER AND PROSTATE',
                    'CORRECTIVE SURGERIES',
                    'KIDNEY',
                    'LITHOTRIPSY',
                    'OTHER CORRECTIVE SURGERIES/PROCEDURE',
                    'RENAL',
                    'RENAL CALCULI',
                    'RENAL STONE SURGERY',
                    'TESTIS',
                    'URETER',
                    'URETHRA'
                ]
            },
            {
                name: 'Vascular',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                    'ENDOVASCULAR',
                    'LOWER LIMB BYPASS',
                    'OPEN VASCULAR',
                    'THROMBO EMBOLISM – LL',
                    'THROMBO EMBOLISM – UL'
                ]
            },
            { name: 'Medical Emergencies', status: false, status1: false, div: [], database: [], sub_speciality_array: ['MEDICALEMERGENCIES'] }
        ];
        this.suregeryOptionsTop = [];
        this.surgerySelectedArray = [];
        //Surgery
        //Instruction
        this.inputBox = [{ name: 'Instruction 1', instructionsInput: '', inputInstruction: '' }];
        //Instruction
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
        // this.onTextChange('Mammograaphy', '');
        // this.onTextChange('Bone densitometry', '')
        // this.onTextChange('ECG', '');
        // this.onTextChange('EEG', '');
        // this.onTextChange('TMT', '');
        // this.onTextChange('Echo', '');
        // this.onTextChange('NERVE TEST', '');
        // this.onTextChange('Audiometry', '');
        // this.onTextChange('Lung Test', '');
        // this.GetInvestigationSuggestions('Pathology')
        // this.GetInvestigationSuggestions('X-Ray')
        // this.GetInvestigationSuggestions('Ultrasound')
        // this.GetInvestigationSuggestions('Doppler Studies')
        // // this.GetInvestigationSuggestions('ECG')
        // // this.GetInvestigationSuggestions('EEG')
        // // this.GetInvestigationSuggestions('TMT')
        // // this.GetInvestigationSuggestions('Echo')
        // this.GetInvestigationSuggestions('CT-Scan')
        // this.GetInvestigationSuggestions('MRI')
        // // this.GetInvestigationSuggestions('Nerve Test')
        // // this.GetInvestigationSuggestions('Audiometry')
        // this.GetInvestigationSuggestions('Eye Tests')
        // // this.GetInvestigationSuggestions('Lung Test')
        this.currentObject = {};
        // this.investigationStatus[0].status = true
        // this.treatmentStatus[0].status = true
        if (this.condition == "abc") {
            this.headingName = 'Create new';
        }
        this.medInfoObject = {};
        this.medInfoObject.medication_type = 'abc';
        this.medInfoObject.med_name = null;
        this.medInfoObject.med_info1 = null;
        this.medInfoObject.med_info2 = null;
        this.quantity_range = [];
        var value = 1;
        while (value < 21) {
            this.quantity_range.push(value);
            value++;
        }
        this.itemsymptoms = [];
        this.itemsfinding = [];
        this.itemsdiagnosis = [];
        this.investigationSelectionDB = [
            'Pathology',
            'X-Ray',
            'Ultrasound',
            'Doppler Studies',
            'ECG',
            'EEG',
            'TMT',
            'Echo',
            'CT-Scan',
            'MRI',
            'Nerve Test',
            'Uroflowmetry',
            'Audiometry',
            'Mammography',
            'Bone Densitometry',
            'Eye Tests',
            'Lung Test',
            'Others'
        ];
        this.surgerySelectionDB = [
            'Cardiology',
            'Dental',
            'ENT',
            'Gastroenterology',
            'General Surgery',
            'Gynaecology/Obstetrics',
            'Neonatal',
            'Neurology',
            'Oncology',
            'Ophthalmology',
            'Orthopaedics',
            'Paediatric',
            'Urology',
            'Vascular'
        ];
        this.treatmentSelectionDB = [
            'Lifestyle Changes',
            'Physiotherapy',
            'Plaster',
            'Fomentation',
            'Gargle',
            'Dressing',
            'Bandage',
            'Other'
        ];
        this.investigationSelection = [];
        this.surgerySelection = [];
        this.treatmentSelection = [];
        this.AllPrescriptionData();
    };
    DashboardPresetComponent.prototype.openModal = function (type, data) {
        if (type == 'tablet') {
            $('#frequencyModal').modal('show');
            this.currentObject = data;
        }
        if (type == 'duration') {
            $("#durationModal").modal('show');
            this.currentObject.data;
        }
        if (type == 'dosage') {
            $("#dosageModal").modal('show');
            this.currentObject.data;
        }
    };
    DashboardPresetComponent.prototype.setMedicine = function (event, data) {
        data.medicine_data.medicine = event.target.value;
        console.log(data);
    };
    DashboardPresetComponent.prototype.addMoreTab = function (data) {
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
    };
    DashboardPresetComponent.prototype.removeMoreTab = function (data, i) {
        var _this = this;
        this.totalMedications = this.totalMedications - 1;
        if (data == 'Tab') {
            if (this.medication.tab[i].i_presetLength) {
                var index = this.doctorPresetArray.findIndex(function (p) { return p.i_presetValue == _this.medication.tab[i].i_presetValue; });
                if (index == this.medication.tab[i].i_presetValue) {
                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1;
                    this.medication.tab[i].i_presetLength = this.medication.tab[i].i_presetLength - 1;
                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                        this.doctorPresetArray[index].status = false;
                    }
                }
            }
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
            if (this.medication.cap[i].i_presetLength) {
                var index = this.doctorPresetArray.findIndex(function (p) { return p.i_presetValue == _this.medication.cap[i].i_presetValue; });
                if (index == this.medication.cap[i].i_presetValue) {
                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1;
                    this.medication.cap[i].i_presetLength = this.medication.cap[i].i_presetLength - 1;
                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                        this.doctorPresetArray[index].status = false;
                    }
                }
            }
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
            if (this.medication.syp[i].i_presetLength) {
                var index = this.doctorPresetArray.findIndex(function (p) { return p.i_presetValue == _this.medication.syp[i].i_presetValue; });
                if (index == this.medication.syp[i].i_presetValue) {
                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1;
                    this.medication.syp[i].i_presetLength = this.medication.syp[i].i_presetLength - 1;
                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                        this.doctorPresetArray[index].status = false;
                    }
                }
            }
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
            if (this.medication.susp[i].i_presetLength) {
                var index = this.doctorPresetArray.findIndex(function (p) { return p.i_presetValue == _this.medication.susp[i].i_presetValue; });
                if (index == this.medication.susp[i].i_presetValue) {
                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1;
                    this.medication.susp[i].i_presetLength = this.medication.susp[i].i_presetLength - 1;
                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                        this.doctorPresetArray[index].status = false;
                    }
                }
            }
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
            if (this.medication.emulsn[i].i_presetLength) {
                var index = this.doctorPresetArray.findIndex(function (p) { return p.i_presetValue == _this.medication.emulsn[i].i_presetValue; });
                if (index == this.medication.emulsn[i].i_presetValue) {
                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1;
                    this.medication.emulsn[i].i_presetLength = this.medication.emulsn[i].i_presetLength - 1;
                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                        this.doctorPresetArray[index].status = false;
                    }
                }
            }
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
            if (this.medication.injection[i].i_presetLength) {
                var index = this.doctorPresetArray.findIndex(function (p) { return p.i_presetValue == _this.medication.injection[i].i_presetValue; });
                if (index == this.medication.injection[i].i_presetValue) {
                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1;
                    this.medication.injection[i].i_presetLength = this.medication.injection[i].i_presetLength - 1;
                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                        this.doctorPresetArray[index].status = false;
                    }
                }
            }
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
            if (this.medication.cream[i].i_presetLength) {
                var index = this.doctorPresetArray.findIndex(function (p) { return p.i_presetValue == _this.medication.cream[i].i_presetValue; });
                if (index == this.medication.cream[i].i_presetValue) {
                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1;
                    this.medication.cream[i].i_presetLength = this.medication.cream[i].i_presetLength - 1;
                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                        this.doctorPresetArray[index].status = false;
                    }
                }
            }
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
            if (this.medication.gel[i].i_presetLength) {
                var index = this.doctorPresetArray.findIndex(function (p) { return p.i_presetValue == _this.medication.gel[i].i_presetValue; });
                if (index == this.medication.gel[i].i_presetValue) {
                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1;
                    this.medication.gel[i].i_presetLength = this.medication.gel[i].i_presetLength - 1;
                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                        this.doctorPresetArray[index].status = false;
                    }
                }
            }
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
            if (this.medication.drops[i].i_presetLength) {
                var index = this.doctorPresetArray.findIndex(function (p) { return p.i_presetValue == _this.medication.drops[i].i_presetValue; });
                if (index == this.medication.drops[i].i_presetValue) {
                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1;
                    this.medication.drops[i].i_presetLength = this.medication.drops[i].i_presetLength - 1;
                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                        this.doctorPresetArray[index].status = false;
                    }
                }
            }
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
            if (this.medication.powder[i].i_presetLength) {
                var index = this.doctorPresetArray.findIndex(function (p) { return p.i_presetValue == _this.medication.powder[i].i_presetValue; });
                if (index == this.medication.powder[i].i_presetValue) {
                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1;
                    this.medication.powder[i].i_presetLength = this.medication.powder[i].i_presetLength - 1;
                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                        this.doctorPresetArray[index].status = false;
                    }
                }
            }
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
            if (this.medication.aerosols[i].i_presetLength) {
                var index = this.doctorPresetArray.findIndex(function (p) { return p.i_presetValue == _this.medication.aerosols[i].i_presetValue; });
                if (index == this.medication.aerosols[i].i_presetValue) {
                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1;
                    this.medication.aerosols[i].i_presetLength = this.medication.aerosols[i].i_presetLength - 1;
                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                        this.doctorPresetArray[index].status = false;
                    }
                }
            }
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
            if (this.medication.mouthwash[i].i_presetLength) {
                var index = this.doctorPresetArray.findIndex(function (p) { return p.i_presetValue == _this.medication.mouthwash[i].i_presetValue; });
                if (index == this.medication.mouthwash[i].i_presetValue) {
                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1;
                    this.medication.mouthwash[i].i_presetLength = this.medication.mouthwash[i].i_presetLength - 1;
                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                        this.doctorPresetArray[index].status = false;
                    }
                }
            }
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
            if (this.medication.solution[i].i_presetLength) {
                var index = this.doctorPresetArray.findIndex(function (p) { return p.i_presetValue == _this.medication.solution[i].i_presetValue; });
                if (index == this.medication.solution[i].i_presetValue) {
                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1;
                    this.medication.solution[i].i_presetLength = this.medication.solution[i].i_presetLength - 1;
                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                        this.doctorPresetArray[index].status = false;
                    }
                }
            }
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
            if (this.medication.lotion[i].i_presetLength) {
                var index = this.doctorPresetArray.findIndex(function (p) { return p.i_presetValue == _this.medication.lotion[i].i_presetValue; });
                if (index == this.medication.lotion[i].i_presetValue) {
                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1;
                    this.medication.lotion[i].i_presetLength = this.medication.lotion[i].i_presetLength - 1;
                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                        this.doctorPresetArray[index].status = false;
                    }
                }
            }
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
            if (this.medication.ointment[i].i_presetLength) {
                var index = this.doctorPresetArray.findIndex(function (p) { return p.i_presetValue == _this.medication.ointment[i].i_presetValue; });
                if (index == this.medication.ointment[i].i_presetValue) {
                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1;
                    this.medication.ointment[i].i_presetLength = this.medication.ointment[i].i_presetLength - 1;
                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                        this.doctorPresetArray[index].status = false;
                    }
                }
            }
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
    DashboardPresetComponent.prototype.medicaTab = function (i, data) {
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
                    for (var j = 0; j < this.doctorPresetArray.length; j++) {
                        if (this.doctorPresetArray[j].status == true) {
                            var occurance = 0;
                            for (var k = 0; k < this.doctorPresetArray[j].preset_array.length; k++) {
                                if (data == this.doctorPresetArray[j].preset_array[k].name) {
                                    this.doctorPresetArray[j].preset_array[k].i_presetLength = this.doctorPresetArray[j].preset_array[k].i_presetLength - 1;
                                    occurance++;
                                }
                            }
                            this.doctorPresetArray[j].i_presetLength = this.doctorPresetArray[j].i_presetLength - occurance;
                            if (this.doctorPresetArray[j].i_presetLength == 0) {
                                this.doctorPresetArray[j].status = false;
                            }
                        }
                    }
                }
            }
        }
        console.log(this.totalMedications);
    };
    DashboardPresetComponent.prototype.mediClass = function (i) {
        if (this.medicationStatus[i].status == true) {
            return 'active';
        }
        else {
            return '';
        }
    };
    DashboardPresetComponent.prototype.selectChange = function () {
        if (this.condition == "abc") {
            this.headingName = 'Create new';
        }
        else if (this.condition == "medication") {
            this.headingName = ' Medication';
        }
        else if (this.condition == "treatment") {
            this.headingName = ' Other Treatment';
        }
        else if (this.condition == "symptoms") {
            this.headingName = ' Symptoms';
        }
        else if (this.condition == "findings") {
            this.headingName = ' Clinical findings';
        }
        else if (this.condition == "diagnosis") {
            this.headingName = ' Diagnosis';
        }
        else if (this.condition == "investigation") {
            this.headingName = ' Investigation';
        }
        else if (this.condition == "surgery") {
            this.headingName = ' Surgery / Procedure';
        }
        else if (this.condition == "instructions") {
            this.headingName = ' Instructions';
        }
        else if (this.condition == "med_info") {
            this.headingName = 'Medicine Info';
        }
        else if (this.condition == "prescription") {
            this.headingName = 'Prescription';
        }
    };
    DashboardPresetComponent.prototype.treatTab = function (i) {
        var _this = this;
        if (this.treatmentStatus[i].status == false) {
            if (this.totalOtherTreatment < 4) {
                this.treatab = i;
                this.treatmentStatus[i].status = !this.treatmentStatus[i].status;
                // if (i != 7) {
                this.totalOtherTreatment = this.totalOtherTreatment + 1;
                this.treatmentSelection.push({
                    display: this.treatmentStatus[i].name,
                    value: this.treatmentStatus[i].name
                });
                // }
            }
            else {
                this.toastr.warning("Maximum items can be 4", "Warning");
            }
        }
        else {
            this.treatab = i;
            this.treatmentStatus[i].status = !this.treatmentStatus[i].status;
            if (this.treatmentStatus[i].i_presetLength) {
                for (var j = 0; j < this.treatmentStatus.length; j++) {
                    if (this.treatmentStatus[j].i_presetValue == this.treatmentStatus[i].i_presetValue && i != j) {
                        this.treatmentStatus[j].i_presetLength = this.treatmentStatus[j].i_presetLength - 1;
                    }
                }
                this.treatmentStatus[i].i_presetLength = this.treatmentStatus[i].i_presetLength - 1;
                if (this.treatmentStatus[i].i_presetLength == 0) {
                    this.presetArrayOtherTreatment[this.treatmentStatus[i].i_presetValue].status = false;
                }
            }
            this.treatmentSelection.splice(this.treatmentSelection.findIndex(function (p) { return p.value == _this.treatmentStatus[i].name; }), 1);
            if (this.treatmentStatus[7].treat != null && this.treatmentStatus[7].treat.length > 0) {
                length = this.treatmentStatus[7].treat.length;
            }
            if (i == 7) {
                this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[7].div.length;
                this.treatmentStatus[7].div = [];
                this.treatmentStatus[7].div.push({
                    name: 'Other',
                    status: false,
                    SpecialInstruction: null,
                    Frequency: 'Frequency',
                    Duration: 'Duration',
                    med_name: []
                });
            }
            else if (i == 2) {
                this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[2].div.length;
                this.treatmentStatus[2].div = [];
                this.treatmentStatus[2].div.push({
                    name: 'Plaster',
                    status: false,
                    SpecialInstruction: null,
                    Injury_Area: 'Injury Area',
                    plaster_type: null,
                    Duration: 'Duration'
                });
            }
            else {
                this.totalOtherTreatment = this.totalOtherTreatment - 1;
            }
            if (this.treatmentSelection && this.treatmentSelection.length > 0) {
                for (var k = 0; k < this.treatmentSelection.length; k++) {
                    if (this.treatmentSelection[k].value == this.treatmentStatus[i].name) {
                        this.treatmentSelection.splice(k, 1);
                        break;
                    }
                }
            }
        }
        console.log(this.totalOtherTreatment);
    };
    DashboardPresetComponent.prototype.treatClass = function (i) {
        if (this.treatmentStatus[i].status == true) {
            return 'active';
        }
        else {
            return '';
        }
    };
    DashboardPresetComponent.prototype.openTreatFrequencyModal = function (data, i) {
        this.tempTreatObject = data;
        this.tempTreatObjectIndex = i;
        this.tempTreatSpecialInstruction = null;
        if (this.tempTreatObject[this.tempTreatObjectIndex].SpecialInstruction != null) {
            this.tempTreatObject[this.tempTreatObjectIndex].SpecialInstruction = null;
        }
        if (data[i].Frequency == 'Frequency') {
            this.tempTreatFrequency = null;
        }
        else {
            this.tempTreatFrequency = data[i].Frequency;
        }
        if (data[i].Duration == 'Duration') {
            this.tempTreatDuration = null;
        }
        else {
            this.tempTreatDuration = data[i].Duration;
        }
        this.plaster_open_by_main = true;
    };
    DashboardPresetComponent.prototype.openTreatFrequencyModal1 = function (data, i, j) {
        this.tempTreatObject = data;
        this.tempTreatObjectIndex = i;
        this.tempPlasterDivIndex = j;
        this.tempTreatFrequency = null;
        this.tempTreatSpecialInstruction = null;
        this.tempTreatDuration = null;
        this.plaster_open_by_main = false;
    };
    DashboardPresetComponent.prototype.selectFromTreatFrequency = function (data) {
        this.tempTreatFrequency = data;
    };
    DashboardPresetComponent.prototype.getTreatFrequencyModalClass = function (data) {
        if (data == this.tempTreatFrequency) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPresetComponent.prototype.selectFromTreatSpecialInstruction = function (data) {
        this.tempTreatSpecialInstruction = data;
    };
    DashboardPresetComponent.prototype.addPlasterDiv = function () {
        if (this.totalOtherTreatment < 4) {
            this.treatmentStatus[2].div.push({
                name: 'Plaster',
                status: false,
                SpecialInstruction: null,
                Injury_Area: 'Injury Area',
                plaster_type: null,
                Duration: 'Duration'
            });
            this.totalOtherTreatment = this.totalOtherTreatment + 1;
        }
        else {
            this.toastr.warning("Maximum items can be 4", "Warning");
        }
        console.log(this.totalOtherTreatment);
    };
    DashboardPresetComponent.prototype.removePlasterDiv = function (i) {
        if (this.treatmentStatus[2].div.length > 1) {
            this.treatmentStatus[2].div.splice(i, 1);
            this.totalOtherTreatment = this.totalOtherTreatment - 1;
        }
        else {
            this.treatmentStatus[2].status = false;
            if (this.treatmentSelection && this.treatmentSelection.length > 0) {
                for (var k = 0; k < this.treatmentSelection.length; k++) {
                    if (this.treatmentSelection[k].value == 'Plaster') {
                        this.treatmentSelection.splice(k, 1);
                        break;
                    }
                }
            }
        }
    };
    DashboardPresetComponent.prototype.getClassInjuryModal = function (data) {
        if (data == this.tempInjury) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPresetComponent.prototype.selectFromTreatDuration = function (data) {
        this.tempTreatDuration = data;
    };
    DashboardPresetComponent.prototype.saveInjury = function () {
        if (this.plaster_open_by_main == true) {
            if (this.tempInjury != null) {
                this.treatmentStatus[2].Injury_Area = this.tempInjury;
            }
            else {
                this.treatmentStatus[2].Injury_Area = 'Injury Area';
            }
        }
        else {
            if (this.tempInjury != null) {
                this.treatmentStatus[2].div[this.tempPlasterDivIndex].Injury_Area = this.tempInjury;
            }
            else {
                this.treatmentStatus[2].div[this.tempPlasterDivIndex].Injury_Area = 'Injury Area';
            }
        }
        console.log(this.treatmentStatus[2]);
    };
    DashboardPresetComponent.prototype.onAddOtherInj = function (data) {
        this.tempInjury = data[0].value;
        // this.treatmentStatus[2].div[this.tempPlasterDivIndex].Injury_Area = data[0].value    
    };
    DashboardPresetComponent.prototype.getSpecialInstructionModalClass = function (data) {
        if (data == this.tempTreatSpecialInstruction) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPresetComponent.prototype.tempSaveFrequency = function () {
        if (this.tempTreatFrequency != null) {
            this.tempTreatObject[this.tempTreatObjectIndex].Frequency = this.tempTreatFrequency;
        }
        if (this.tempTreatSpecialInstruction != null) {
            this.tempTreatObject[this.tempTreatObjectIndex].SpecialInstruction = this.tempTreatSpecialInstruction;
        }
    };
    DashboardPresetComponent.prototype.tempSaveDuration = function () {
        if (this.tempTreatDuration != null) {
            if (this.plaster_open_by_main == true) {
                this.tempTreatObject[this.tempTreatObjectIndex].Duration = this.tempTreatDuration;
            }
            else {
                this.treatmentStatus[this.tempTreatObjectIndex].div[this.tempPlasterDivIndex].Duration = this.tempTreatDuration;
            }
        }
    };
    DashboardPresetComponent.prototype.getDurationModalClass = function (data) {
        if (data == this.tempTreatDuration) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPresetComponent.prototype.setInjuryValue = function (data) {
        if (this.otherInj == null || this.otherInj == '' || this.otherInj.length < 1) {
            this.tempInjury = data;
        }
    };
    // invesTab(i) {
    //     if (this.investigationStatus[i].status == false) {
    //         if (this.numberOfInvestigationSelected < 4) {
    //             this.investigationtab = i
    //             this.investigationStatus[i].status = !this.investigationStatus[i].status
    //             this.numberOfInvestigationSelected = this.numberOfInvestigationSelected + 1
    //             let ob = {
    //                 display:this.investigationStatus[i].name,
    //                 value:this.investigationStatus[i].name
    //             }
    //             this.investigationSelection.push(ob)
    //         } else {
    //             this.investigationtab = i
    //         }
    //     } else {
    //         this.investigationtab = i
    //         this.investigationStatus[i].status = !this.investigationStatus[i].status
    //         this.investigationStatus[i].model = ''
    //         this.numberOfInvestigationSelected = this.numberOfInvestigationSelected - 1
    //         this.investigationSelection.splice(this.investigationSelection.findIndex(p => p.value == this.investigationStatus[i].name),1)
    //     }
    //     if(this.numberOfInvestigationSelected==0){
    //         for (var j = 0; j < this.presetArrayInvestigation.length; j++) {
    //             this.presetArrayInvestigation[j].status = false
    //         }
    //     }
    // }
    DashboardPresetComponent.prototype.invesTab = function (i) {
        var _this = this;
        if (this.investigationStatus[i].status == false) {
            if (this.numberOfInvestigationSelected < 4) {
                this.investigationtab = i;
                this.investigationStatus[i].status = !this.investigationStatus[i].status;
                this.numberOfInvestigationSelected = this.numberOfInvestigationSelected + 1;
                var ob = {
                    display: this.investigationStatus[i].name,
                    value: this.investigationStatus[i].name
                };
                this.investigationSelection.push(ob);
            }
            else {
                this.investigationtab = i;
            }
        }
        else {
            this.investigationtab = i;
            this.investigationStatus[i].status = !this.investigationStatus[i].status;
            this.investigationStatus[i].model = '';
            this.numberOfInvestigationSelected = this.numberOfInvestigationSelected - 1;
            this.investigationSelection.splice(this.investigationSelection.findIndex(function (p) { return p.value == _this.investigationStatus[i].name; }), 1);
            if (this.investigationStatus[i].i_presetLength) {
                for (var j = 0; j < this.investigationStatus.length; j++) {
                    if (this.investigationStatus[j].i_presetValue == this.investigationStatus[i].i_presetValue && i != j) {
                        this.investigationStatus[j].i_presetLength = this.investigationStatus[j].i_presetLength - 1;
                    }
                }
                this.investigationStatus[i].i_presetLength = this.investigationStatus[i].i_presetLength - 1;
                if (this.investigationStatus[i].i_presetLength == 0) {
                    this.presetArrayInvestigation[this.investigationStatus[i].i_presetValue].status = false;
                }
            }
        }
        if (this.numberOfInvestigationSelected == 0) {
            for (var j = 0; j < this.presetArrayInvestigation.length; j++) {
                this.presetArrayInvestigation[j].status = false;
            }
        }
    };
    DashboardPresetComponent.prototype.invesClass = function (i) {
        if (this.investigationStatus[i].status == true) {
            return 'active';
        }
        else {
            return '';
        }
    };
    DashboardPresetComponent.prototype.getClassInjection = function (data) {
        if (this.tempInjection == data) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPresetComponent.prototype.injectionSelected = function (data) {
        this.tempInjection = data;
    };
    DashboardPresetComponent.prototype.getMedFrequencyClass = function (data) {
        if (data == 'Frequency') {
            return '';
        }
        else {
            return 'active';
        }
    };
    DashboardPresetComponent.prototype.getMedDurationClass = function (data) {
        if (data == 'Duration') {
            return '';
        }
        else {
            return 'active';
        }
    };
    DashboardPresetComponent.prototype.getMedTABQuantityClass = function (data) {
        if (data == 'Quantity') {
            return '';
        }
        else {
            return 'active';
        }
    };
    DashboardPresetComponent.prototype.getMedDosageClass = function (data) {
        if (data == 'Dosage') {
            return '';
        }
        else {
            return 'active';
        }
    };
    DashboardPresetComponent.prototype.getMedModeClass = function (data) {
        if (data == 'Mode') {
            return '';
        }
        else {
            return 'active';
        }
    };
    DashboardPresetComponent.prototype.getMedQuantityClass = function (data) {
        if (data == 'Qty, (No)') {
            return '';
        }
        else {
            return 'active';
        }
    };
    DashboardPresetComponent.prototype.openFrequencyModal = function (data) {
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
    DashboardPresetComponent.prototype.openFrequencyModalFromMed = function (type, data) {
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
        for (var i = 0; i < this.medInfoDB.length; i++) {
            if (this.medInfoDB[i].type == type && this.medInfoDB[i].med_name == data.med_name[0].value) {
                data.med_info = [];
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
    };
    DashboardPresetComponent.prototype.selectFrequency = function (data) {
        this.tempFrequency = data;
    };
    DashboardPresetComponent.prototype.getFrequencyClass = function (data) {
        if (data == this.tempFrequency) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPresetComponent.prototype.selectFrequencySpecial = function (data) {
        if (data == this.tempFrequencySpecial || data == this.currentFrequency.specialInstruction) {
            this.tempFrequencySpecial = null;
            this.currentFrequency.specialInstruction = null;
        }
        else {
            this.tempFrequencySpecial = data;
        }
    };
    DashboardPresetComponent.prototype.getFrequencyClassSpecial = function (data) {
        if (data == this.tempFrequencySpecial) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPresetComponent.prototype.saveFrequency = function () {
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
    DashboardPresetComponent.prototype.selectDuration = function (data) {
        this.tempDuration = data;
    };
    DashboardPresetComponent.prototype.getDurationClass = function (data) {
        if (this.tempDuration == data) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPresetComponent.prototype.saveDuration = function () {
        if (this.tempDuration != null && this.tempDuration != '' && this.tempDuration != 'Duration') {
            this.currentFrequency.duration = this.tempDuration;
        }
    };
    DashboardPresetComponent.prototype.getClassDosage = function (data) {
        if (this.tempDosage == data) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPresetComponent.prototype.selectDosage = function (data) {
        this.tempDosage = data;
    };
    DashboardPresetComponent.prototype.saveDosage = function () {
        if (this.tempDosage != null && this.tempDosage != '' && this.tempDosage != 'Dosage') {
            this.currentFrequency.dosage = this.tempDosage;
            $("#durationModal").modal("show");
        }
    };
    DashboardPresetComponent.prototype.saveInjection = function (data) {
        if (this.tempInjection != null && this.tempInjection != '' && this.tempInjection != 'Mode') {
            this.currentFrequency.mode = this.tempInjection;
            $("#durationModal").modal("show");
        }
    };
    DashboardPresetComponent.prototype.addTempQuantity = function (data) {
        this.tempQuantity = data;
    };
    DashboardPresetComponent.prototype.onTextChange = function (type, suggestion) {
        var _this = this;
        var type1 = null;
        if (type == 'Patient Complaints') {
            type = 'SYMPTOMS';
            type1 = 'Patient Complaints';
        }
        var object = {
            type: type,
            suggestion: suggestion
        };
        this.userService.SearchSuggestion(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                if (type == 'Pathology') {
                    _this.pathologySuggestionDB = data.data;
                }
                else if (type == 'X-Ray') {
                    _this.xraySuggestionDB = data.data;
                }
                else if (type == 'Ultrasound') {
                    _this.ultraSoundSuggestionDB = data.data;
                }
                else if (type == 'Doppler Studies') {
                    _this.dopplerSuggestionDB = data.data;
                }
                else if (type == 'ECG') {
                    _this.ecgSuggestionDB = data.data;
                }
                else if (type == 'EEG') {
                    _this.eegSuggestionDB = data.data;
                }
                else if (type == 'TMT') {
                    _this.tmtSuggestionDB = data.data;
                }
                else if (type == 'Echo') {
                    _this.echoSuggestionDB = data.data;
                }
                else if (type == 'CT-Scan') {
                    _this.ctScanSuggestionDB = data.data;
                }
                else if (type == 'MRI') {
                    _this.mriSuggestionDB = data.data;
                }
                else if (type == 'NERVE TEST') {
                    _this.nerveSuggestionDB = data.data;
                }
                else if (type == 'Audiometry') {
                    _this.audioSuggestionDB = data.data;
                }
                else if (type == 'Bone densitometry') {
                    _this.boneSuggestionDB = data.data;
                }
                else if (type == 'Eye Test') {
                    _this.eyeSuggestionDB = data.data;
                }
                else if (type == 'Mammograaphy') {
                    _this.mammograaphySuggestionDB = data.data;
                }
                else if (type == 'Lung Test') {
                    _this.lungSuggestionDB = data.data;
                }
                else if (type == 'Diagnosis') {
                    _this.doctorDiagnosisDB = data.data;
                }
                else if (type == 'SYMPTOMS' && type1 == null) {
                    _this.doctorSymptomsDB = data.data;
                }
                else if (type == 'SYMPTOMS' && type1 == 'Patient Complaints') {
                    _this.doctorClinicalObservation = data.data;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPresetComponent.prototype.surgryClass = function (i) {
        if (this.suregeryOptionsTop[i].status == true) {
            return 'active';
        }
        else {
            return '';
        }
    };
    DashboardPresetComponent.prototype.showhideTab = function () {
        this.othertabs = !this.othertabs;
    };
    DashboardPresetComponent.prototype.addTextBoxSuregery = function (i, j) {
        if (this.totalSurgeryOptionsSelected > 2) {
            this.toastr.warning("Maximum items can be 3", "Warning");
        }
        else {
            if (this.suregeryOptionsTop[i].div[j].sub_speciality.trim().length > 0 && this.suregeryOptionsTop[i].div[j].procedure_name.length > 0) {
                this.suregeryOptionsTop[i].div.push({
                    sub_speciality: '',
                    procedure_name: ''
                });
                this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected + 1;
            }
            else {
                this.toastr.warning("Sub speciality or procedure name invalid", "Warning");
            }
        }
    };
    DashboardPresetComponent.prototype.removeTextBoxSuregery = function (i, j) {
        if (this.suregeryOptionsTop[i].i_presetLength) {
            for (var k = 0; k < this.suregeryOptionsTop.length; k++) {
                if (this.suregeryOptionsTop[k].i_presetValue == this.suregeryOptionsTop[i].i_presetValue && i != k) {
                    this.suregeryOptionsTop[k].i_presetLength = this.suregeryOptionsTop[k].i_presetLength - 1;
                }
            }
            this.suregeryOptionsTop[i].i_presetLength = this.suregeryOptionsTop[i].i_presetLength - 1;
            if (this.suregeryOptionsTop[i].i_presetLength == 0) {
                this.presetArraySurgery[this.suregeryOptionsTop[i].i_presetValue].status = false;
            }
        }
        if (this.suregeryOptionsTop[i].div.length > 1) {
            this.suregeryOptionsTop[i].div.splice(j, 1);
            this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected - 1;
        }
        else {
            // this.surgryTabTop(i)
            if (this.surgerySelection && this.surgerySelection.length > 0) {
                for (var k = 0; k < this.surgerySelection.length; k++) {
                    if (this.surgerySelection[k].value == this.suregeryOptionsTop[i].name) {
                        this.surgerySelection.splice(k, 1);
                        break;
                    }
                }
            }
            this.surgeryRemoveFromList(this.suregeryOptionsTop[i].name);
        }
    };
    DashboardPresetComponent.prototype.surgryTab = function (i) {
        if (this.totalSurgeryOptionsSelected > 2) {
            this.toastr.warning("Maximum items can be 3", "Warning");
        }
        else {
            this.suregeryOptions[i].status1 = true;
            if (this.suregeryOptionsTop.length < 1) {
                this.suregeryOptions[i].status = true;
                this.surgerySelection.push({
                    display: this.suregeryOptions[i].name,
                    value: this.suregeryOptions[i].name
                });
            }
            this.suregeryOptions[i].div = [];
            this.suregeryOptions[i].div.push({
                sub_speciality: '',
                procedure_name: ''
            });
            this.suregeryOptionsTop.push(this.suregeryOptions[i]);
            this.suregeryOptions.splice(i, 1);
            this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected + 1;
        }
        console.log(this.totalSurgeryOptionsSelected);
    };
    DashboardPresetComponent.prototype.surgryTabTop = function (i) {
        var _this = this;
        this.suregeryOptionsTop[i].status = !this.suregeryOptionsTop[i].status;
        if (this.suregeryOptionsTop[i].status == true) {
            this.surgerySelection.push({
                display: this.suregeryOptionsTop[i].name,
                value: this.suregeryOptionsTop[i].name
            });
        }
        else {
            this.surgerySelection.splice(this.surgerySelection.findIndex(function (p) { return p.value == _this.suregeryOptionsTop[i].name; }), 1);
        }
    };
    DashboardPresetComponent.prototype.surgeryOptionTopStatusChange = function (i) {
        var _this = this;
        this.suregeryOptionsTop[i].status1 = false;
        setTimeout(function () {
            _this.surgerySelection.splice(_this.surgerySelection.findIndex(function (p) { return p.value == _this.suregeryOptionsTop[i].name; }), 1);
            _this.suregeryOptionsTop[i].status = false;
            _this.suregeryOptionsTop[i].div = [];
            _this.suregeryOptions.push(_this.suregeryOptionsTop[i]);
            _this.suregeryOptionsTop.splice(i, 1);
            _this.totalSurgeryOptionsSelected = _this.totalSurgeryOptionsSelected - 1;
        }, 1000);
    };
    DashboardPresetComponent.prototype.addTextbox = function (index) {
        if (this.inputBox[index].inputInstruction.length > 0 && this.inputBox[index].inputInstruction) {
            this.inputBox[index].instructionsInput = this.inputBox[index].inputInstruction[0].value;
            var i = 3, j;
            if (this.inputBox.length < i) {
                var boolean = false;
                for (var i = 0; i < this.inputBox.length; i++) {
                    if (this.inputBox[i].instructionsInput == '' || this.inputBox[i].instructionsInput == null) {
                        boolean = true;
                        this.toastr.warning("Instruction cant be empty", "Warning");
                        return;
                    }
                }
                if (boolean == false) {
                    j = this.inputBox.length + 1;
                    this.inputBox.push({
                        name: 'Instruction ' + j,
                        instructionsInput: '',
                        inputInstruction: ''
                    });
                }
            }
            else {
                this.toastr.warning("Maximum items cab be 3", "Warning");
            }
        }
        else {
            this.toastr.warning("Instruction cant be empty", "Warning");
        }
    };
    DashboardPresetComponent.prototype.removeTextbox = function (i) {
        if (this.inputBox[i].i_presetLength) {
            this.inputBox[i].i_presetLength = this.inputBox[i].i_presetLength - 1;
            for (var j = 0; j < this.inputBox.length; j++) {
                if (this.inputBox[i].i_presetValue == this.inputBox[j].i_presetValue && i != j) {
                    this.inputBox[j].i_presetLength = this.inputBox[j].i_presetLength - 1;
                }
            }
            if (this.inputBox[i].i_presetLength == 0) {
                this.presetArrayInstruction[this.inputBox[i].i_presetValue].status = false;
            }
        }
        if (this.inputBox.length > 1) {
            this.inputBox.splice(i, 1);
        }
        else {
            this.inputBox = [{ name: 'Instruction 1', instructionsInput: '', inputInstruction: '' }];
            for (var j = 0; j < this.presetArrayInstruction.length; j++) {
                this.presetArrayInstruction[j].status = false;
            }
            $("#instructionsModal").modal("hide");
        }
    };
    DashboardPresetComponent.prototype.setFields = function (flag) {
        var _this = this;
        if (flag == 'findings') {
            if (this.itemsfinding.length > 0) {
                this.findingsSelected = this.itemsfinding;
                for (var i = 0; i < this.findingsSelected.length; i++) {
                    if (this.findingsSelected[i].value != null && this.findingsSelected[i].value != '') {
                        this.SaveDoctorOtherPreset('Patient Complaints', this.findingsSelected[i].value);
                    }
                }
            }
            else {
                this.toastr.warning("Invalid fields", "Warning");
            }
        }
        else if (flag == 'symptoms') {
            if (this.itemsymptoms.length > 0) {
                this.symptomsSelected = this.itemsymptoms;
                for (var i = 0; i < this.symptomsSelected.length; i++) {
                    if (this.symptomsSelected[i].value != null && this.symptomsSelected[i].value != '') {
                        this.SaveDoctorOtherPreset('Symptoms', this.symptomsSelected[i].value);
                    }
                }
            }
            else {
                this.toastr.warning("Invalid fields", "Warning");
            }
            this.symptomsSelected = this.itemsymptoms;
        }
        else if (flag == 'diagnosis') {
            if (this.itemsdiagnosis.length > 0) {
                this.diagnosisSelected = this.itemsdiagnosis;
                for (var i = 0; i < this.diagnosisSelected.length; i++) {
                    if (this.diagnosisSelected[i].value != null && this.diagnosisSelected[i].value != '') {
                        this.SaveDoctorOtherPreset('Diagnosis', this.diagnosisSelected[i].value);
                    }
                }
            }
            else {
                this.toastr.warning("Invalid fields", "Warning");
            }
        }
        else if (flag == 'instructions') {
            console.log(this.inputBox);
            var boolean = false;
            for (var i = 0; i < this.inputBox.length; i++) {
                if (this.inputBox[i].inputInstruction && this.inputBox[i].inputInstruction.length > 0) {
                    this.inputBox[i].instructionsInput = this.inputBox[i].inputInstruction[0].value;
                }
                if (this.inputBox[i].instructionsInput == '' || this.inputBox[i].instructionsInput == null) {
                    boolean = true;
                    this.toastr.warning("Instruction cant be empty", "Warning");
                    return;
                }
            }
            if (boolean == false) {
                if (this.inputBox.length <= 3) {
                    for (var i = 0; i < this.inputBox.length; i++) {
                        this.SaveDoctorPresetArray(this.preset_name.trim(), this.inputBox, 'Instructions');
                    }
                }
            }
        }
        else if (flag == 'investigation') {
            this.investigationArray = [];
            for (var i = 0; i < this.investigationStatus.length; i++) {
                if (this.investigationStatus[i].status == true && this.investigationStatus[i].model != '' && this.investigationStatus[i].model != null) {
                    this.investigationArray.push({
                        name: this.investigationStatus[i].name,
                        values: this.investigationStatus[i].model
                    });
                }
                else if (this.investigationStatus[i].name == 'Uroflowmetry' && this.investigationStatus[i].status == true) {
                    this.investigationArray.push({
                        name: 'Uroflowmetry',
                        values: 'Uroflowmetry'
                    });
                }
            }
            if (this.investigationArray.length > 0) {
                this.SaveDoctorPresetArray(this.preset_name.trim(), this.investigationArray, 'Investigation');
            }
            else {
                this.toastr.warning("Invalid fields", "Warning");
                return;
            }
        }
        else if (flag == 'surgery') {
            for (var i = 0; i < this.suregeryOptionsTop.length; i++) {
                for (var j = 0; j < this.suregeryOptionsTop[i].div.length; j++) {
                    if (this.suregeryOptionsTop[i].status == true) {
                        if (this.suregeryOptionsTop[i].div[j].sub_speciality.trim().length > 0 &&
                            this.suregeryOptionsTop[i].div[j].procedure_name.length > 0) {
                            boolean = true;
                        }
                        else {
                            this.toastr.warning("Sub speciality or procedure name invalid", "Warning");
                            return;
                        }
                    }
                }
            }
            var array = [];
            for (var i = 0; i < this.suregeryOptionsTop.length; i++) {
                if (this.suregeryOptionsTop[i].status == true) {
                    array.push(this.suregeryOptionsTop[i]);
                }
            }
            if (array.length > 0) {
                this.SaveDoctorPresetArray(this.preset_name.trim(), array, 'Surgery');
                this.AddDoctorSurgeryArray();
            }
            else {
                this.toastr.warning("Invalid fields", "Warning");
                return;
            }
        }
        else if (flag == 'medication') {
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
                            this.tempMedicationArray.push(this.medication.tab[i]);
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
                            this.tempMedicationArray.push(this.medication.cap[i]);
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
                            this.tempMedicationArray.push(this.medication.syp[i]);
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
                            this.tempMedicationArray.push(this.medication.susp[i]);
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
                            this.tempMedicationArray.push(this.medication.emulsn[i]);
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
                            this.tempMedicationArray.push(this.medication.solution[i]);
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
                            this.tempMedicationArray.push(this.medication.injection[i]);
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
                            this.tempMedicationArray.push(this.medication.mouthwash[i]);
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
                            this.tempMedicationArray.push(this.medication.powder[i]);
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
                            this.tempMedicationArray.push(this.medication.cream[i]);
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
                            this.tempMedicationArray.push(this.medication.gel[i]);
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
                            this.tempMedicationArray.push(this.medication.drops[i]);
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
                            this.tempMedicationArray.push(this.medication.aerosols[i]);
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
                            this.tempMedicationArray.push(this.medication.lotion[i]);
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
                            this.tempMedicationArray.push(this.medication.ointment[i]);
                        }
                    }
                }
                if (boolean == false && this.tempMedicationArray.length > 0) {
                    var object = {
                        preset_name: this.preset_name.trim(),
                        preset_array: this.tempMedicationArray,
                        doctor_id: this.doctorData.itemId
                    };
                    console.log(object);
                    this.userService.SaveDoctorPreset(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.toastr.success("Preset saved successfully", "Success");
                            if (_this.save_true == true) {
                                _this.router.navigate(['header-two-layout/dashboard-prescription']);
                            }
                            else {
                                _this.ngOnInit();
                            }
                        }
                        else {
                            if (data.message == "Data already exists") {
                                var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__confirmation_popup_confirmation_dialog_update_confirmation_dialog_update_component__["a" /* ConfirmationDialogUpdateComponent */], {});
                                dialogRef.afterClosed().subscribe(function (result) {
                                    console.log('The dialog was closed');
                                    if (result == "yes") {
                                        var object = {
                                            preset_name: _this.preset_name.trim(),
                                            preset_array: _this.tempMedicationArray,
                                            doctor_id: _this.doctorData.itemId,
                                            update_status: true
                                        };
                                        console.log(object);
                                        _this.userService.SaveDoctorPreset(object).subscribe(function (data) {
                                            _this.toastr.success(data.message, "Success");
                                            if (_this.save_true == true) {
                                                _this.router.navigate(['header-two-layout/dashboard-prescription']);
                                            }
                                            else {
                                                _this.ngOnInit();
                                            }
                                        }, function (err) {
                                            console.log(err);
                                        });
                                    }
                                    else {
                                        console.log("error or No Thanks button clicked");
                                    }
                                });
                            }
                            else {
                                _this.toastr.error(data.message, "Error");
                            }
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
        }
        else if (flag == 'treatment') {
            if (this.totalOtherTreatment > 0) {
                var boolean = false;
                for (var i = 0; i < this.treatmentStatus.length; i++) {
                    if (this.treatmentStatus[i].status == true) {
                        if (i == 0) {
                            if (this.treatmentStatus[0].lifestyle == null || this.treatmentStatus[0].lifestyle.length < 1) {
                                boolean = true;
                                this.toastr.warning("Invalid values in Lifestyle Changes", "Warning");
                                return;
                            }
                        }
                        if (i == 1 && (this.treatmentStatus[1].Frequency == 'Frequency' || this.treatmentStatus[1].Duration == 'Duration')) {
                            boolean = true;
                            this.toastr.warning("Invalid values in Physiotherapy", "Warning");
                            return;
                        }
                        if (i == 2) {
                            for (var ii = 0; ii < this.treatmentStatus[2].div.length; ii++) {
                                if (this.treatmentStatus[2].div[ii].Injury_Area == 'Injury Area' || this.treatmentStatus[2].div[ii].plaster_type == null || this.treatmentStatus[2].div[ii].Duration == 'Duration') {
                                    boolean = true;
                                    this.toastr.warning("Invalid values in Plaster", "Warning");
                                    return;
                                }
                            }
                        }
                        if (i == 3 && (this.treatmentStatus[3].Frequency == 'Frequency' || this.treatmentStatus[3].Duration == 'Duration')) {
                            boolean = true;
                            this.toastr.warning("Invalid values in Fomentation", "Warning");
                            return;
                        }
                        if (i == 4) {
                            if (this.treatmentStatus[4].Frequency == 'Frequency' || this.treatmentStatus[4].Duration == 'Duration' || this.treatmentStatus[4].med_name == null || this.treatmentStatus[4].med_name.length < 1) {
                                boolean = true;
                                this.toastr.warning("Invalid values in Gargle", "Warning");
                                return;
                            }
                        }
                        if (i == 5) {
                            if (this.treatmentStatus[5].Frequency == 'Frequency' || this.treatmentStatus[5].Duration == 'Duration' || this.treatmentStatus[5].med_name == null || this.treatmentStatus[5].med_name.length < 1) {
                                boolean = true;
                                this.toastr.warning("Invalid values in Dressing", "Warning");
                                return;
                            }
                        }
                        if (i == 6) {
                            if (this.treatmentStatus[6].Frequency == 'Frequency' || this.treatmentStatus[6].Duration == 'Duration' || this.treatmentStatus[6].med_name == null || this.treatmentStatus[6].med_name.length < 1) {
                                boolean = true;
                                this.toastr.warning("Invalid values in Bandage", "Warning");
                                return;
                            }
                        }
                        if (i == 7) {
                            for (var ii = 0; ii < this.treatmentStatus[7].div.length; ii++) {
                                if (this.treatmentStatus[7].div[ii].Frequency == 'Frequency' || this.treatmentStatus[7].div[ii].Duration == 'Duration' || this.treatmentStatus[7].div[ii].med_name == null || this.treatmentStatus[7].div[ii].med_name.length < 1) {
                                    boolean = true;
                                    this.toastr.warning("Invalid values in Other", "Warning");
                                    return;
                                }
                            }
                        }
                    }
                }
                if (boolean == false) {
                    var presetArray = [];
                    for (var i = 0; i < this.treatmentStatus.length; i++) {
                        if (this.treatmentStatus[i].status == true) {
                            presetArray.push(this.treatmentStatus[i]);
                        }
                    }
                    this.SaveDoctorPresetArray(this.preset_name.trim(), presetArray, 'Other Treatments');
                }
            }
            // } else if (flag == 'med_info') {
            //     if (this.medInfoObject.medication_type != 'abc' && this.medInfoObject.med_info != null) {
            //         let object = {
            //             doctor_id: this.doctorData.itemId,
            //             type: this.medInfoObject.medication_type,
            //             observation: this.medInfoObject.med_info[0].value
            //         }
            //         this.userService.SaveMedicationSuggestion(object).subscribe(data => {
            //             console.log(data)
            //             if (data.response == true) {
            //                 this.toastr.success("Preset saved successfully", "Success")
            //                 if (this.save_true == true) {
            //                     this.router.navigate(['header-two-layout/dashboard-prescription'])
            //                 } else {
            //                     this.ngOnInit()
            //                 }
            //             } else {
            //                 this.toastr.error(data.message, "Error")
            //                 if (data.message == "Data already exists") {
            //                     let dialogRef = this.dialog.open(ConfirmationDialogUpdateComponent, {});
            //                     dialogRef.afterClosed().subscribe(result => {
            //                         console.log('The dialog was closed');
            //                         if (result == "yes") {
            //                             let object = {
            //                                 doctor_id: this.doctorData.itemId,
            //                                 type: this.medInfoObject.medication_type,
            //                                 observation: this.medInfoObject.med_info[0].value,
            //                                 update_status: true
            //                             }
            //                             this.userService.SaveMedicationSuggestion(object).subscribe(data => {
            //                                 this.toastr.success(data.message, "Success")
            //                                 if (this.save_true == true) {
            //                                     this.router.navigate(['header-two-layout/dashboard-prescription'])
            //                                 } else {
            //                                     this.ngOnInit()
            //                                 }
            //                             }, err => {
            //                                 console.log(err);
            //                             })
            //                         } else {
            //                             console.log("error or No Thanks button clicked")
            //                         }
            //                     });
            //                 }
            //             }
            //         }, err => {
            //             console.log(err);
            //         })
            //     } else {
            //         this.toastr.warning("Invalid fields", "Warning")
            //         return
            //     }
        }
        else if (flag == 'med_info') {
            if (this.medInfoObject.medication_type != 'abc' && this.medInfoObject.med_name != null && //this.medInfoObject.med_info1 != null &&
                this.medInfoObject.med_name.length > 0) {
                // if((this.medInfoObject.med_info1[0].value.length>30) || (this.medInfoObject.med_info2!=null && this.medInfoObject.med_info2.length>0 && this.medInfoObject.med_info2[0].value.length>30)){
                //     this.toastr.warning("Maximum length can be 30 characters","Warning")
                // }else{
                var object_1;
                object_1 = {};
                object_1.doctor_id = this.doctorData.itemId;
                object_1.type = this.medInfoObject.medication_type;
                object_1.med_name = this.medInfoObject.med_name[0].value;
                // object.med_info1 = this.medInfoObject.med_info1[0].value
                object_1.med_info1 = this.medInfoObject.med_info1;
                if (this.medInfoObject.med_info2 != null && this.medInfoObject.med_info2.length > 0) {
                    // object.med_info2 = this.medInfoObject.med_info2[0].value
                    object_1.med_info2 = this.medInfoObject.med_info2;
                }
                this.userService.SaveDoctorMedicineInfo(object_1).subscribe(function (data) {
                    console.log(data);
                    if (data.response == true) {
                        _this.toastr.success("Preset saved successfully", "Success");
                        if (_this.save_true == true) {
                            _this.router.navigate(['header-two-layout/dashboard-prescription']);
                        }
                        else {
                            _this.ngOnInit();
                        }
                    }
                    else {
                        _this.toastr.error(data.message, "Error");
                        // if (data.message == "Data already exists") {
                        //     let dialogRef = this.dialog.open(ConfirmationDialogUpdateComponent, {});
                        //     dialogRef.afterClosed().subscribe(result => {
                        //         console.log('The dialog was closed');
                        //         if (result == "yes") {
                        //             let object = {
                        //                 doctor_id: this.doctorData.itemId,
                        //                 type: this.medInfoObject.medication_type,
                        //                 observation: this.medInfoObject.med_info[0].value,
                        //                 update_status: true
                        //             }
                        //             this.userService.SaveMedicationSuggestion(object).subscribe(data => {
                        //                 this.toastr.success(data.message, "Success")
                        //                 if (this.save_true == true) {
                        //                     this.router.navigate(['header-two-layout/dashboard-prescription'])
                        //                 } else {
                        //                     this.ngOnInit()
                        //                 }
                        //             }, err => {
                        //                 console.log(err);
                        //             })
                        //         } else {
                        //             console.log("error or No Thanks button clicked")
                        //         }
                        //     });
                        // }
                    }
                }, function (err) {
                    console.log(err);
                });
                // }                    
            }
            else {
                this.toastr.warning("Invalid fields", "Warning");
                return;
            }
        }
        else if (flag == 'prescription') {
            var objectArray = [];
            // if (this.itemsfinding.length > 0) {
            //     let object = {
            //         name: 'Patient Complaints',
            //         itemsfinding: this.itemsfinding
            //     }
            //     objectArray.push(object)
            // }
            if (this.itemsymptoms.length > 0) {
                var object_2 = {
                    name: 'Symptoms',
                    itemsymptoms: this.itemsymptoms
                };
                objectArray.push(object_2);
            }
            if (this.itemsdiagnosis.length > 0) {
                var object_3 = {
                    name: 'Diagnosis',
                    itemsdiagnosis: this.itemsdiagnosis
                };
                objectArray.push(object_3);
            }
            var boolean = false;
            for (var i = 0; i < this.treatmentStatus.length; i++) {
                if (this.treatmentStatus[i].status == true) {
                    if (i == 0) {
                        if (this.treatmentStatus[0].lifestyle == null || this.treatmentStatus[0].lifestyle.length < 1) {
                            boolean = true;
                            this.toastr.warning("Invalid values in Lifestyle Changes", "Warning");
                            return;
                        }
                    }
                    if (i == 1 && (this.treatmentStatus[1].Frequency == 'Frequency' || this.treatmentStatus[1].Duration == 'Duration')) {
                        boolean = true;
                        this.toastr.warning("Invalid values in Physiotherapy", "Warning");
                        return;
                    }
                    if (i == 2) {
                        for (var ii = 0; ii < this.treatmentStatus[2].div.length; ii++) {
                            if (this.treatmentStatus[2].div[ii].Injury_Area == 'Injury Area' || this.treatmentStatus[2].div[ii].plaster_type == null || this.treatmentStatus[2].div[ii].Duration == 'Duration') {
                                boolean = true;
                                this.toastr.warning("Invalid values in Plaster", "Warning");
                                return;
                            }
                        }
                    }
                    if (i == 3 && (this.treatmentStatus[3].Frequency == 'Frequency' || this.treatmentStatus[3].Duration == 'Duration')) {
                        boolean = true;
                        this.toastr.warning("Invalid values in Fomentation", "Warning");
                        return;
                    }
                    if (i == 4) {
                        if (this.treatmentStatus[4].Frequency == 'Frequency' || this.treatmentStatus[4].Duration == 'Duration' || this.treatmentStatus[4].med_name == null || this.treatmentStatus[4].med_name.length < 1) {
                            boolean = true;
                            this.toastr.warning("Invalid values in Gargle", "Warning");
                            return;
                        }
                    }
                    if (i == 5) {
                        if (this.treatmentStatus[5].Frequency == 'Frequency' || this.treatmentStatus[5].Duration == 'Duration' || this.treatmentStatus[5].med_name == null || this.treatmentStatus[5].med_name.length < 1) {
                            boolean = true;
                            this.toastr.warning("Invalid values in Dressing", "Warning");
                            return;
                        }
                    }
                    if (i == 6) {
                        if (this.treatmentStatus[6].Frequency == 'Frequency' || this.treatmentStatus[6].Duration == 'Duration' || this.treatmentStatus[6].med_name == null || this.treatmentStatus[6].med_name.length < 1) {
                            boolean = true;
                            this.toastr.warning("Invalid values in Bandage", "Warning");
                            return;
                        }
                    }
                    if (i == 7) {
                        for (var ii = 0; ii < this.treatmentStatus[7].div.length; ii++) {
                            if (this.treatmentStatus[7].div[ii].Frequency == 'Frequency' || this.treatmentStatus[7].div[ii].Duration == 'Duration' || this.treatmentStatus[7].div[ii].med_name == null || this.treatmentStatus[7].div[ii].med_name.length < 1) {
                                boolean = true;
                                this.toastr.warning("Invalid values in Other", "Warning");
                                return;
                            }
                        }
                    }
                }
            }
            if (boolean == false) {
                var presetArray = [];
                for (var i = 0; i < this.treatmentStatus.length; i++) {
                    if (this.treatmentStatus[i].status == true) {
                        presetArray.push(this.treatmentStatus[i]);
                    }
                }
                if (presetArray.length > 0) {
                    var object_4 = {
                        name: 'Other Treatment',
                        treatmentStatus: this.treatmentStatus
                    };
                    objectArray.push(object_4);
                }
            }
            this.investigationArray = [];
            for (var i = 0; i < this.investigationStatus.length; i++) {
                if (this.investigationStatus[i].status == true && this.investigationStatus[i].model != '' && this.investigationStatus[i].model != null) {
                    this.investigationArray.push({
                        name: this.investigationStatus[i].name,
                        values: this.investigationStatus[i].model
                    });
                }
                else if (this.investigationStatus[i].name == 'Uroflowmetry' && this.investigationStatus[i].status == true) {
                    this.investigationArray.push({
                        name: 'Uroflowmetry',
                        values: 'Uroflowmetry'
                    });
                }
            }
            if (this.investigationArray.length > 0) {
                var object_5 = {
                    name: 'Investigation',
                    investigationStatus: this.investigationStatus,
                    investigationArray: this.investigationArray
                };
                objectArray.push(object_5);
            }
            var surgeryArray = [];
            for (var i = 0; i < this.suregeryOptionsTop.length; i++) {
                for (var j = 0; j < this.suregeryOptionsTop[i].div.length; j++) {
                    if (this.suregeryOptionsTop[i].status == true) {
                        if (this.suregeryOptionsTop[i].div[j].sub_speciality.trim().length > 0 &&
                            this.suregeryOptionsTop[i].div[j].procedure_name.length > 0) {
                            surgeryArray.push(this.suregeryOptionsTop[i]);
                        }
                        else {
                            this.toastr.warning("Sub speciality or procedure name invalid", "Warning");
                            return;
                        }
                    }
                }
            }
            if (surgeryArray.length > 0) {
                var objectt = {
                    name: 'Surgery / Procedure',
                    suregeryOptionsTop: this.suregeryOptionsTop,
                    suregeryOptions: this.suregeryOptions
                };
                objectArray.push(objectt);
            }
            if (this.inputBox[0].inputInstruction && this.inputBox[0].inputInstruction.length > 0) {
                for (var i = 0; i < this.inputBox.length; i++) {
                    if (this.inputBox[i].inputInstruction && this.inputBox[i].inputInstruction.length > 0) {
                        this.inputBox[i].instructionsInput = this.inputBox[i].inputInstruction[0].value;
                    }
                    if (this.inputBox[i].instructionsInput == '' || this.inputBox[i].instructionsInput == null) {
                        boolean = true;
                        this.toastr.warning("Instruction cant be empty", "Warning");
                        return;
                    }
                }
                if (boolean == false) {
                    var object_6 = {
                        name: 'Instructions',
                        inputBox: this.inputBox
                    };
                    objectArray.push(object_6);
                }
            }
            this.tempMedicationArray = [];
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
                        this.tempMedicationArray.push(this.medication.tab[i]);
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
                        this.tempMedicationArray.push(this.medication.cap[i]);
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
                        this.tempMedicationArray.push(this.medication.syp[i]);
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
                        this.tempMedicationArray.push(this.medication.susp[i]);
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
                        this.tempMedicationArray.push(this.medication.emulsn[i]);
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
                        this.tempMedicationArray.push(this.medication.solution[i]);
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
                        this.tempMedicationArray.push(this.medication.injection[i]);
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
                        this.tempMedicationArray.push(this.medication.mouthwash[i]);
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
                        this.tempMedicationArray.push(this.medication.powder[i]);
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
                        this.tempMedicationArray.push(this.medication.cream[i]);
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
                        this.tempMedicationArray.push(this.medication.gel[i]);
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
                        this.tempMedicationArray.push(this.medication.drops[i]);
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
                        this.tempMedicationArray.push(this.medication.aerosols[i]);
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
                        this.tempMedicationArray.push(this.medication.lotion[i]);
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
                        this.tempMedicationArray.push(this.medication.ointment[i]);
                    }
                }
            }
            if (boolean == false && this.tempMedicationArray.length > 0) {
                var object_7 = {
                    name: 'Medication',
                    medication: this.medication,
                    medicationStatus: this.medicationStatus,
                    medicationTabArray: this.medicationTabArray,
                    medicationCapArray: this.medicationCapArray,
                    medicationSypArray: this.medicationSypArray,
                    medicationSuspArray: this.medicationSuspArray,
                    medicationEmulsnArray: this.medicationEmulsnArray,
                    medicationInjArray: this.medicationInjArray,
                    medicationCreamArray: this.medicationCreamArray,
                    medicationGelArray: this.medicationGelArray,
                    medicationDropsArray: this.medicationDropsArray,
                    medicationPowderArray: this.medicationPowderArray,
                    medicationAerosolsArray: this.medicationAerosolsArray,
                    medicationMouthWashArray: this.medicationMouthWashArray,
                    medicationSolutionArray: this.medicationSolutionArray,
                    medicationLotionArray: this.medicationLotionArray,
                    medicationOintmentArray: this.medicationOintmentArray,
                };
                objectArray.push(object_7);
            }
            console.log(objectArray);
            if (objectArray.length > 0) {
                var dataToSave = {
                    doctor_id: this.doctorData.itemId,
                    name: this.preset_name.trim(),
                    value: objectArray,
                };
                console.log(dataToSave);
                this.userService.SavePrescriptionPad(dataToSave).subscribe(function (data) {
                    console.log(data);
                    if (data.response == true) {
                        _this.toastr.success(data.message, "Success");
                        if (_this.save_true == true) {
                            _this.router.navigate(['header-two-layout/dashboard-prescription']);
                        }
                        else {
                            _this.ngOnInit();
                        }
                    }
                    else {
                        if (data.message == "Data already exists") {
                            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__confirmation_popup_confirmation_dialog_update_confirmation_dialog_update_component__["a" /* ConfirmationDialogUpdateComponent */], {});
                            dialogRef.afterClosed().subscribe(function (result) {
                                console.log('The dialog was closed');
                                if (result == "yes") {
                                    var object_8 = {
                                        doctor_id: _this.doctorData.itemId,
                                        name: _this.preset_name.trim(),
                                        value: objectArray,
                                        update_status: true
                                    };
                                    console.log(object_8);
                                    _this.userService.SavePrescriptionPad(object_8).subscribe(function (data) {
                                        _this.toastr.success(data.message, "Success");
                                        if (_this.save_true == true) {
                                            _this.router.navigate(['header-two-layout/dashboard-prescription']);
                                        }
                                        else {
                                            _this.ngOnInit();
                                        }
                                    }, function (err) {
                                        console.log(err);
                                    });
                                }
                                else {
                                    console.log("error or No Thanks button clicked");
                                }
                            });
                        }
                        else {
                            _this.toastr.error(data.message, "Error");
                        }
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    DashboardPresetComponent.prototype.SaveDoctorPresetArray = function (preset_name, preset_array, type) {
        var _this = this;
        var object = {
            preset_name: preset_name,
            preset_array: preset_array,
            doctor_id: this.doctorData.itemId,
            type: type
        };
        console.log(object);
        this.userService.SaveDoctorPresetArray(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.toastr.success("Preset saved successfully", "Success");
                if (_this.save_true == true) {
                    _this.router.navigate(['header-two-layout/dashboard-prescription']);
                }
                else {
                    _this.ngOnInit();
                }
            }
            else {
                if (data.message == "Data already exists") {
                    var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__confirmation_popup_confirmation_dialog_update_confirmation_dialog_update_component__["a" /* ConfirmationDialogUpdateComponent */], {});
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed');
                        if (result == "yes") {
                            var object = {
                                preset_name: preset_name,
                                preset_array: preset_array,
                                doctor_id: _this.doctorData.itemId,
                                type: type,
                                update_status: true
                            };
                            console.log(object);
                            _this.userService.SaveDoctorPresetArray(object).subscribe(function (data) {
                                _this.toastr.success(data.message, "Success");
                                if (_this.save_true == true) {
                                    _this.router.navigate(['header-two-layout/dashboard-prescription']);
                                }
                                else {
                                    _this.ngOnInit();
                                }
                            }, function (err) {
                                console.log(err);
                            });
                        }
                        else {
                            console.log("error or No Thanks button clicked");
                        }
                    });
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPresetComponent.prototype.SaveDoctorOtherPreset = function (type, preset) {
        var _this = this;
        var object = {
            doctor_id: this.doctorData.itemId,
            type: type,
            preset: preset
        };
        console.log(object);
        this.userService.SaveDoctorOtherPreset(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.toastr.success("Preset saved successfully", "Success");
                if (_this.save_true == true) {
                    _this.router.navigate(['header-two-layout/dashboard-prescription']);
                }
                else {
                    _this.ngOnInit();
                }
            }
            else {
                if (data.message == "Data already exists") {
                    var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__confirmation_popup_confirmation_dialog_update_confirmation_dialog_update_component__["a" /* ConfirmationDialogUpdateComponent */], {});
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed');
                        if (result == "yes") {
                            var object_9 = {
                                doctor_id: _this.doctorData.itemId,
                                type: type,
                                preset: preset,
                                update_status: true
                            };
                            console.log(object_9);
                            _this.userService.SaveDoctorOtherPreset(object_9).subscribe(function (data) {
                                _this.toastr.success(data.message, "Success");
                                if (_this.save_true == true) {
                                    _this.router.navigate(['header-two-layout/dashboard-prescription']);
                                }
                                else {
                                    _this.ngOnInit();
                                }
                            }, function (err) {
                                console.log(err);
                            });
                        }
                        else {
                            console.log("error or No Thanks button clicked");
                        }
                    });
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPresetComponent.prototype.savePreset = function (condition) {
        if (condition != "abc") {
            if (condition == 'prescription') {
                if (this.preset_name != undefined && this.preset_name != '' && this.preset_name != null) {
                    if (this.preset_name.trim().length < 1) {
                        this.toastr.warning("Invalid preset name", "Warning");
                        return;
                    }
                    else {
                        this.setFields('prescription');
                    }
                }
                else {
                    this.toastr.warning("Invalid preset name", "Warning");
                    return;
                }
            }
            else {
                if (condition != 'symptoms' && condition != 'findings' && condition != 'diagnosis' && condition != 'med_info') {
                    if (this.preset_name != undefined && this.preset_name != '' && this.preset_name != null) {
                        if (this.preset_name.trim().length < 1) {
                            this.toastr.warning("Invalid preset name", "Warning");
                            return;
                        }
                        else {
                            this.setFields(condition);
                        }
                    }
                    else {
                        this.toastr.warning("Invalid preset name", "Warning");
                        return;
                    }
                }
                else {
                    this.setFields(condition);
                }
            }
        }
    };
    DashboardPresetComponent.prototype.createMoreClicked = function (condition) {
        this.save_true = false;
        if (condition != "abc") {
            if (condition != 'symptoms' && condition != 'findings' && condition != 'diagnosis' && condition != 'med_info') {
                if (this.preset_name != undefined && this.preset_name != '' && this.preset_name != null) {
                    if (this.preset_name.trim().length < 1) {
                        this.toastr.warning("Invalid preset name", "Warning");
                        return;
                    }
                    else {
                        this.setFields(condition);
                    }
                }
                else {
                    this.toastr.warning("Invalid preset name", "Warning");
                    return;
                }
            }
            else {
                this.setFields(condition);
            }
        }
    };
    DashboardPresetComponent.prototype.GetMedicationSuggestions = function (type) {
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
                else if (type == 'TabletInfo') {
                    _this.doctorMedicationTabletInfoDB = [];
                    _this.doctorMedicationTabletInfoDB = data.data;
                }
                else if (type == 'CapsuleInfo') {
                    _this.doctorMedicationCapsuleInfoDB = [];
                    _this.doctorMedicationCapsuleInfoDB = data.data;
                }
                else if (type == 'SyrupInfo') {
                    _this.doctorMedicationSyrupInfoDB = [];
                    _this.doctorMedicationSyrupInfoDB = data.data;
                }
                else if (type == 'SuspensionInfo') {
                    _this.doctorMedicationSuspensionInfoDB = [];
                    _this.doctorMedicationSuspensionInfoDB = data.data;
                }
                else if (type == 'EmulsionInfo') {
                    _this.doctorMedicationEmulsionInfoDB = [];
                    _this.doctorMedicationEmulsionInfoDB = data.data;
                }
                else if (type == 'SolutionInfo') {
                    _this.doctorMedicationSolutionInfoDB = [];
                    _this.doctorMedicationSolutionInfoDB = data.data;
                }
                else if (type == 'InjectionInfo') {
                    _this.doctorMedicationInjectionInfoDB = [];
                    _this.doctorMedicationInjectionInfoDB = data.data;
                }
                else if (type == 'CreamInfo') {
                    _this.doctorMedicationCreamInfoDB = [];
                    _this.doctorMedicationCreamInfoDB = data.data;
                }
                else if (type == 'OitmentInfo') {
                    _this.doctorMedicationOitmentInfoDB = [];
                    _this.doctorMedicationOitmentInfoDB = data.data;
                }
                else if (type == 'GelInfo') {
                    _this.doctorMedicationGelInfoDB = [];
                    _this.doctorMedicationGelInfoDB = data.data;
                }
                else if (type == 'LotionInfo') {
                    _this.doctorMedicationLotionInfoDB = [];
                    _this.doctorMedicationLotionInfoDB = data.data;
                }
                else if (type == 'DropsInfo') {
                    _this.doctorMedicationDropsInfoDB = [];
                    _this.doctorMedicationDropsInfoDB = data.data;
                }
                else if (type == 'AerosolsInfo') {
                    _this.doctorMedicationAerosolsInfoDB = [];
                    _this.doctorMedicationAerosolsInfoDB = data.data;
                }
                else if (type == 'PowderInfo') {
                    _this.doctorMedicationPowderInfoDB = [];
                    _this.doctorMedicationPowderInfoDB = data.data;
                }
                else if (type == 'MouthWashInfo') {
                    _this.doctorMedicationMouthwashInfoDB = [];
                    _this.doctorMedicationMouthwashInfoDB = data.data;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPresetComponent.prototype.addOtherDiv = function () {
        if (this.totalOtherTreatment < 4) {
            this.treatmentStatus[7].div.push({
                name: 'Other',
                status: false,
                SpecialInstruction: null,
                Frequency: 'Frequency',
                Duration: 'Duration',
                med_name: null
            });
            this.totalOtherTreatment = this.totalOtherTreatment + 1;
        }
        else {
            this.toastr.warning("Maximum items can be 4", "Warning");
        }
        console.log(this.totalOtherTreatment);
    };
    DashboardPresetComponent.prototype.removeOtherDiv = function (i) {
        if (this.treatmentStatus[7].div.length > 1) {
            this.treatmentStatus[7].div.splice(i, 1);
            this.totalOtherTreatment = this.totalOtherTreatment - 1;
        }
        else {
            this.treatmentStatus[7].status = false;
            this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[7].div.length;
            this.treatmentStatus[7].div = [];
            this.treatmentStatus[7].div.push({
                name: 'Other',
                status: false,
                SpecialInstruction: null,
                Frequency: 'Frequency',
                Duration: 'Duration',
                med_name: []
            });
            if (this.treatmentSelection && this.treatmentSelection.length > 0) {
                for (var k = 0; k < this.treatmentSelection.length; k++) {
                    if (this.treatmentSelection[k].value == 'Other') {
                        this.treatmentSelection.splice(k, 1);
                        break;
                    }
                }
            }
        }
    };
    DashboardPresetComponent.prototype.GetInvestigationSuggestions = function (type) {
        var _this = this;
        var object = {
            doctor_id: this.doctorData.itemId,
            type: type
        };
        this.userService.GetInvestigationSuggestions(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                if (type == 'Pathology') {
                    _this.pathologySuggestionDB = data.data;
                }
                else if (type == 'X-Ray') {
                    _this.xraySuggestionDB = data.data;
                }
                else if (type == 'Ultrasound') {
                    _this.ultraSoundSuggestionDB = data.data;
                }
                else if (type == 'Doppler Studies') {
                    _this.dopplerSuggestionDB = data.data;
                }
                else if (type == 'ECG') {
                    _this.ecgSuggestionDB = data.data;
                }
                else if (type == 'EEG') {
                    _this.eegSuggestionDB = data.data;
                }
                else if (type == 'TMT') {
                    _this.tmtSuggestionDB = data.data;
                }
                else if (type == 'Echo') {
                    _this.echoSuggestionDB = data.data;
                }
                else if (type == 'CT-Scan') {
                    _this.ctScanSuggestionDB = data.data;
                }
                else if (type == 'MRI') {
                    _this.mriSuggestionDB = data.data;
                }
                else if (type == 'NERVE TEST') {
                    _this.nerveSuggestionDB = data.data;
                }
                else if (type == 'Audiometry') {
                    _this.audioSuggestionDB = data.data;
                }
                else if (type == 'Eye Tests') {
                    _this.eyeSuggestionDB = data.data;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPresetComponent.prototype.saveFreqDuration = function () {
        if (this.tempFrequency != null && this.tempFrequency != '' && this.tempFrequency != 'Frequency') {
            this.currentFrequency.frequency = this.tempFrequency;
        }
        this.currentFrequency.specialInstruction = this.tempFrequencySpecial;
        if (this.tempDuration != null && this.tempDuration != '' && this.tempDuration != 'Duration') {
            this.currentFrequency.duration = this.tempDuration;
        }
    };
    DashboardPresetComponent.prototype.saveFreqDurInjection = function () {
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
    DashboardPresetComponent.prototype.saveFreqDurDosage = function () {
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
    DashboardPresetComponent.prototype.saveFreqDurDrops = function () {
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
    DashboardPresetComponent.prototype.AllPrescriptionData = function () {
        var _this = this;
        var object = {
            doctor_id: this.doctorData.itemId,
            type: 'preset',
            registration: { id: "0" }
        };
        this.userService.AllPrescriptionData(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                //GetDoctorSurgeryArray
                // if (data.suregeryOptionsTop != null) {
                //     this.suregeryOptionsTop = data.suregeryOptionsTop
                //     this.suregeryOptions = data.suregeryOptions
                // }
                _this.totalSurgeryOptionsSelected = _this.suregeryOptionsTop.length;
                //GetDoctorClinicalObservations
                _this.doctorClinicalObservation = data.doctorClinicalObservation;
                //GetDoctorSymptoms
                _this.doctorSymptomsDB = data.doctorSymptomsDB;
                //GetDoctorDiagnosis
                _this.doctorDiagnosisDB = data.doctorDiagnosisDB;
                //GetMedicationSuggestions
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
                //med info
                // this.doctorMedicationTabletInfoDB = data.doctorMedicationTabletInfoDB
                // this.doctorMedicationCapsuleInfoDB = data.doctorMedicationCapsuleInfoDB
                // this.doctorMedicationSyrupInfoDB = data.doctorMedicationSyrupInfoDB
                // this.doctorMedicationSuspensionInfoDB = data.doctorMedicationSuspensionInfoDB
                // this.doctorMedicationEmulsionInfoDB = data.doctorMedicationEmulsionInfoDB
                // this.doctorMedicationSolutionInfoDB = data.doctorMedicationSolutionInfoDB
                // this.doctorMedicationInjectionInfoDB = data.doctorMedicationInjectionInfoDB
                // this.doctorMedicationCreamInfoDB = data.doctorMedicationCreamInfoDB
                // this.doctorMedicationOitmentInfoDB = data.doctorMedicationOitmentInfoDB
                // this.doctorMedicationGelInfoDB = data.doctorMedicationGelInfoDB
                // this.doctorMedicationLotionInfoDB = data.doctorMedicationLotionInfoDB
                // this.doctorMedicationDropsInfoDB = data.doctorMedicationDropsInfoDB
                // this.doctorMedicationAerosolsInfoDB = data.doctorMedicationAerosolsInfoDB
                // this.doctorMedicationPowderInfoDB = data.doctorMedicationPowderInfoDB
                // this.doctorMedicationMouthwashInfoDB = data.doctorMedicationMouthwashInfoDB
                //GetSurgerySuggestions
                for (var i = 0; i < _this.suregeryOptions.length; i++) {
                    if (_this.suregeryOptions[i].name == 'Cardiology') {
                        _this.suregeryOptions[i].database = data.CardiacDB;
                    }
                    else if (_this.suregeryOptions[i].name == 'ENT') {
                        _this.suregeryOptions[i].database = data.ENTDB;
                    }
                    else if (_this.suregeryOptions[i].name == 'Dental') {
                        _this.suregeryOptions[i].database = data.DentalDB;
                    }
                    else if (_this.suregeryOptions[i].name == 'Genito-Urinary') {
                        _this.suregeryOptions[i].database = data.GenitoDB;
                    }
                    else if (_this.suregeryOptions[i].name == 'Gynaecology/Obstetrics') {
                        _this.suregeryOptions[i].database = data.GynaecologyDB;
                    }
                    else if (_this.suregeryOptions[i].name == 'Neonatal') {
                        _this.suregeryOptions[i].database = data.NeonatalDB;
                    }
                    else if (_this.suregeryOptions[i].name == 'Neurology') {
                        _this.suregeryOptions[i].database = data.NeurologyDB;
                    }
                    else if (_this.suregeryOptions[i].name == 'Oncology') {
                        _this.suregeryOptions[i].database = data.OncologyDB;
                    }
                    else if (_this.suregeryOptions[i].name == 'Ophthalmology') {
                        _this.suregeryOptions[i].database = data.OphthalmologyDB;
                    }
                    else if (_this.suregeryOptions[i].name == 'Orthopaedics') {
                        _this.suregeryOptions[i].database = data.OrthopaedicsDB;
                    }
                    else if (_this.suregeryOptions[i].name == 'Paediatric') {
                        _this.suregeryOptions[i].database = data.PaediatricDB;
                    }
                    else if (_this.suregeryOptions[i].name == 'Vascular') {
                        _this.suregeryOptions[i].database = data.VascularDB;
                    }
                }
                // for (var i = 0; i < this.suregeryOptionsTop.length; i++) {
                //     if (this.suregeryOptionsTop[i].name == 'Cardiology') {
                //         this.suregeryOptionsTop[i].database = data.CardiacDB
                //     } else if (this.suregeryOptionsTop[i].name == 'ENT') {
                //         this.suregeryOptionsTop[i].database = data.ENTDB
                //     } else if (this.suregeryOptionsTop[i].name == 'Dental') {
                //         this.suregeryOptionsTop[i].database = data.DentalDB
                //     } else if (this.suregeryOptionsTop[i].name == 'Genito-Urinary') {
                //         this.suregeryOptionsTop[i].database = data.GenitoDB
                //     } else if (this.suregeryOptionsTop[i].name == 'Gynaecology/Obstetrics') {
                //         this.suregeryOptionsTop[i].database = data.GynaecologyDB
                //     } else if (this.suregeryOptionsTop[i].name == 'Neonatal') {
                //         this.suregeryOptionsTop[i].database = data.NeonatalDB
                //     } else if (this.suregeryOptionsTop[i].name == 'Neurology') {
                //         this.suregeryOptionsTop[i].database = data.NeurologyDB
                //     } else if (this.suregeryOptionsTop[i].name == 'Oncology') {
                //         this.suregeryOptionsTop[i].database = data.OncologyDB
                //     } else if (this.suregeryOptionsTop[i].name == 'Ophthalmology') {
                //         this.suregeryOptionsTop[i].database = data.OphthalmologyDB
                //     } else if (this.suregeryOptionsTop[i].name == 'Orthopaedics') {
                //         this.suregeryOptionsTop[i].database = data.OrthopaedicsDB
                //     } else if (this.suregeryOptionsTop[i].name == 'Paediatric') {
                //         this.suregeryOptionsTop[i].database = data.PaediatricDB
                //     } else if (this.suregeryOptionsTop[i].name == 'Vascular') {
                //         this.suregeryOptionsTop[i].database = data.VascularDB
                //     }
                // }
                //onTextChange
                _this.ecgSuggestionDB = data.ecgSuggestionDB;
                _this.eegSuggestionDB = data.eegSuggestionDB;
                _this.tmtSuggestionDB = data.tmtSuggestionDB;
                _this.echoSuggestionDB = data.echoSuggestionDB;
                _this.nerveSuggestionDB = data.nerveSuggestionDB;
                _this.audioSuggestionDB = data.audioSuggestionDB;
                _this.boneSuggestionDB = data.boneSuggestionDB;
                _this.mammograaphySuggestionDB = data.mammograaphySuggestionDB;
                _this.lungSuggestionDB = data.lungSuggestionDB;
                //
                _this.instructionsSavedDB = data.instructionsSavedDB;
                //
                //GetInvestigationSuggestions
                _this.pathologySuggestionDB = data.pathologySuggestionDB;
                _this.xraySuggestionDB = data.xraySuggestionDB;
                _this.ultraSoundSuggestionDB = data.ultraSoundSuggestionDB;
                _this.dopplerSuggestionDB = data.dopplerSuggestionDB;
                _this.ctScanSuggestionDB = data.ctScanSuggestionDB;
                _this.mriSuggestionDB = data.mriSuggestionDB;
                _this.eyeSuggestionDB = data.eyeSuggestionDB;
                _this.otherSuggestionDB = data.otherSuggestionDB;
                //GetDoctorPreset
                _this.doctorPresetArray = data.doctorPresetArray;
                //GetDoctorOtherPreset
                _this.findingPreSetVals = data.findingPreSetVals;
                _this.symptomsPresetArray = data.symptomsPresetArray;
                _this.diagnosisPresetArray = data.diagnosisPresetArray;
                //GetDoctorPresetArray
                _this.presetArrayInstruction = data.presetArrayInstruction;
                _this.presetArraySurgery = data.presetArraySurgery;
                _this.presetArrayOtherTreatment = data.presetArrayOtherTreatment;
                _this.presetArrayInvestigation = data.presetArrayInvestigation;
                //GetPrescriptionPad
                _this.savedPrescriptionPadArray = data.savedPrescriptionPadArray;
                //med info
                _this.medInfoDB = data.medInfoDB;
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPresetComponent.prototype.onSelectSubSpeciality = function (data, i, j) {
        var _this = this;
        var object = {
            type: data.sub_speciality
        };
        console.log(object);
        this.userService.FindProcedureNameOfSurgery(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                // this.suregeryOptionsTop[i].div[j].procedure_name = ""
                _this.suregeryOptionsTop[i].database = data.data;
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPresetComponent.prototype.saveFreqDurationTreatment = function () {
        if (this.tempTreatFrequency != null && this.tempTreatFrequency != '' && this.tempTreatFrequency != 'Frequency') {
            this.tempTreatObject[this.tempTreatObjectIndex].Frequency = this.tempTreatFrequency;
        }
        this.tempTreatObject[this.tempTreatObjectIndex].SpecialInstruction = this.tempTreatSpecialInstruction;
        if (this.tempTreatDuration != null && this.tempTreatDuration != '' && this.tempTreatDuration != 'Duration') {
            if (this.tempTreatObjectIndex != 2) {
                this.tempTreatObject[this.tempTreatObjectIndex].Duration = this.tempTreatDuration;
            }
            else {
                this.tempTreatObject[this.tempTreatObjectIndex].div[this.tempPlasterDivIndex].Duration = this.tempTreatDuration;
            }
        }
    };
    DashboardPresetComponent.prototype.onAddMedNameOtherTreat = function (data, i) {
        // $("#treatfrequencyModal").modal("show");
        $("#combinedModal5").modal("show");
        this.openTreatFrequencyModal(data, i);
    };
    DashboardPresetComponent.prototype.investigationAddFromList = function (data) {
        for (var i = 0; i < this.investigationStatus.length; i++) {
            if (this.investigationStatus[i].name == data) {
                if (this.numberOfInvestigationSelected < 4) {
                    this.investigationtab = i;
                    this.investigationStatus[i].status = !this.investigationStatus[i].status;
                    this.numberOfInvestigationSelected = this.numberOfInvestigationSelected + 1;
                }
                else {
                    this.investigationtab = i;
                }
            }
        }
    };
    DashboardPresetComponent.prototype.investigationRemoveFromList = function (data) {
        for (var i = 0; i < this.investigationStatus.length; i++) {
            if (this.investigationStatus[i].name == data) {
                this.investigationtab = i;
                this.investigationStatus[i].status = !this.investigationStatus[i].status;
                this.investigationStatus[i].model = '';
                this.numberOfInvestigationSelected = this.numberOfInvestigationSelected - 1;
                if (this.investigationStatus[i].i_presetLength) {
                    for (var j = 0; j < this.investigationStatus.length; j++) {
                        if (this.investigationStatus[j].i_presetValue == this.investigationStatus[i].i_presetValue && i != j) {
                            this.investigationStatus[j].i_presetLength = this.investigationStatus[j].i_presetLength - 1;
                        }
                    }
                    this.investigationStatus[i].i_presetLength = this.investigationStatus[i].i_presetLength - 1;
                    if (this.investigationStatus[i].i_presetLength == 0) {
                        this.presetArrayInvestigation[this.investigationStatus[i].i_presetValue].status = false;
                    }
                }
                if (this.numberOfInvestigationSelected == 0) {
                    for (var j = 0; j < this.presetArrayInvestigation.length; j++) {
                        this.presetArrayInvestigation[j].status = false;
                    }
                }
            }
        }
    };
    DashboardPresetComponent.prototype.surgeryAddFromList = function (data) {
        for (var i = 0; i < this.suregeryOptions.length; i++) {
            if (this.suregeryOptions[i].name == data) {
                this.suregeryOptions[i].status = true;
                this.suregeryOptions[i].status1 = true;
                this.suregeryOptions[i].div = [];
                this.suregeryOptions[i].div.push({
                    sub_speciality: '',
                    procedure_name: ''
                });
                this.suregeryOptionsTop.push(this.suregeryOptions[i]);
                this.suregeryOptions.splice(i, 1);
                this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected + 1;
                return;
            }
        }
    };
    DashboardPresetComponent.prototype.surgeryRemoveFromList = function (data) {
        for (var i = 0; i < this.suregeryOptionsTop.length; i++) {
            if (this.suregeryOptionsTop[i].name == data) {
                this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected - this.suregeryOptionsTop[i].div.length;
                this.suregeryOptions.push(this.suregeryOptionsTop[i]);
                this.suregeryOptionsTop.splice(i, 1);
                return;
            }
        }
    };
    DashboardPresetComponent.prototype.treatmentAddFromList = function (data) {
        for (var i = 0; i < this.treatmentStatus.length; i++) {
            if (this.treatmentStatus[i].name == data) {
                this.treatmentStatus[i].status = true;
                this.totalOtherTreatment = this.totalOtherTreatment + 1;
                return;
            }
        }
    };
    DashboardPresetComponent.prototype.treatmentRemoveFromList = function (data) {
        var i = -1;
        for (var ii = 0; ii < this.treatmentStatus.length; ii++) {
            if (this.treatmentStatus[ii].name == data) {
                this.treatmentStatus[ii].status = false;
                this.totalOtherTreatment = this.totalOtherTreatment - 1;
                i = ii;
                break;
                // return
            }
        }
        this.treatab = i;
        this.treatmentStatus[i].status = !this.treatmentStatus[i].status;
        if (this.treatmentStatus[i].i_presetLength) {
            for (var j = 0; j < this.treatmentStatus.length; j++) {
                if (this.treatmentStatus[j].i_presetValue == this.treatmentStatus[i].i_presetValue && i != j) {
                    this.treatmentStatus[j].i_presetLength = this.treatmentStatus[j].i_presetLength - 1;
                }
            }
            this.treatmentStatus[i].i_presetLength = this.treatmentStatus[i].i_presetLength - 1;
            if (this.treatmentStatus[i].i_presetLength == 0) {
                this.presetArrayOtherTreatment[this.treatmentStatus[i].i_presetValue].status = false;
            }
        }
        if (i == 7) {
            this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[7].div.length;
            this.treatmentStatus[7].div = [];
            this.treatmentStatus[7].div.push({
                name: 'Other',
                status: false,
                SpecialInstruction: null,
                Frequency: 'Frequency',
                Duration: 'Duration',
                med_name: []
            });
        }
        else if (i == 2) {
            this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[2].div.length;
            this.treatmentStatus[2].div = [];
            this.treatmentStatus[2].div.push({
                name: 'Plaster',
                status: false,
                SpecialInstruction: null,
                Injury_Area: 'Injury Area',
                plaster_type: null,
                Duration: 'Duration'
            });
        }
        else if (i == 0) {
            this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[0].lifestyle.length;
            this.treatmentStatus[0] = { name: 'Lifestyle Changes', status: false, SpecialInstruction: null, lifestyle: null };
        }
        else if (i == 1) {
            this.totalOtherTreatment = this.totalOtherTreatment - 1;
            this.treatmentStatus[1] = { name: 'Physiotherapy', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' };
        }
        else if (i == 3) {
            this.totalOtherTreatment = this.totalOtherTreatment - 1;
            this.treatmentStatus[3] = { name: 'Fomentation', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' };
        }
        else if (i == 4) {
            this.totalOtherTreatment = this.totalOtherTreatment - 1;
            this.treatmentStatus[4] = { name: 'Gargle', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] };
        }
        else if (i == 5) {
            this.totalOtherTreatment = this.totalOtherTreatment - 1;
            this.treatmentStatus[5] = { name: 'Dressing', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] };
        }
        else if (i == 6) {
            this.totalOtherTreatment = this.totalOtherTreatment - 1;
            this.treatmentStatus[6] = { name: 'Bandage', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] };
        }
    };
    DashboardPresetComponent.prototype.openPresetModal = function (type) {
        this.presetType = type;
        if (type == 'Medication') {
            this.presetArray = this.doctorPresetArray;
        }
        else if (type == 'Symptoms') {
            this.presetArray = this.symptomsPresetArray;
        }
        else if (type == 'Diagnosis') {
            this.presetArray = this.diagnosisPresetArray;
        }
        else if (type == 'Instructions') {
            this.presetArray = this.presetArrayInstruction;
        }
        else if (type == 'Investigation') {
            this.presetArray = this.presetArrayInvestigation;
        }
        else if (type == 'Surgery') {
            this.presetArray = this.presetArraySurgery;
        }
        else if (type == 'Other Treatments') {
            this.presetArray = this.presetArrayOtherTreatment;
        }
        $("#presetModal").modal("show");
    };
    DashboardPresetComponent.prototype.getMedPresetClass = function (type, i, data) {
        if (type == 'Medication') {
            if (this.doctorPresetArray[i].status == true) {
                return 'active';
            }
            else {
                return '';
            }
        }
        else if (type == 'Instructions') {
            if (this.presetArrayInstruction[i].status == true) {
                return 'active';
            }
            else {
                return '';
            }
        }
        else if (type == 'Surgery') {
            if (this.presetArraySurgery[i].status == true) {
                return 'active';
            }
            else {
                return '';
            }
        }
        else if (type == 'Other Treatments') {
            if (this.presetArrayOtherTreatment[i].status == true) {
                return 'active';
            }
            else {
                return '';
            }
        }
        else if (type == 'Investigation') {
            if (this.presetArrayInvestigation[i].status == true) {
                return 'active';
            }
            else {
                return '';
            }
        }
        else if (type == 'Symptoms' || type == 'Diagnosis') {
            if (data.status == true) {
                return 'active';
            }
            else {
                return '';
            }
        }
    };
    DashboardPresetComponent.prototype.showHidePreset = function (type, i, preset) {
        var _this = this;
        if (type == 'Medication') {
            if (!this.doctorPresetArray[i].status || this.doctorPresetArray[i].status == false) {
                var total = this.totalMedications + this.doctorPresetArray[i].preset_array.length;
                if (total > 9) {
                    this.toastr.warning("Maximum items can be 10", "Warning");
                }
                else {
                    if (this.doctorPresetArray[i].preset_array.length > 0) {
                        this.doctorPresetArray[i].i_presetLength = this.doctorPresetArray[i].preset_array.length;
                        this.doctorPresetArray[i].i_presetValue = i;
                        for (var j = 0; j < this.doctorPresetArray[i].preset_array.length; j++) {
                            this.doctorPresetArray[i].status = true;
                            this.doctorPresetArray[i].preset_array[j].i_presetValue = i;
                            this.doctorPresetArray[i].preset_array[j].i_presetLength = this.doctorPresetArray[i].preset_array.length;
                            if (this.doctorPresetArray[i].preset_array[j].name == 'Tablet' && this.medicationTabArray.length < 10) {
                                var boolean = false;
                                for (var k = 0; k < this.medication.tab.length; k++) {
                                    if (this.medication.tab[k].med_name == null) {
                                        this.medication.tab.splice(k, 1);
                                        // this.medicationTabArray.push('1')
                                        if (this.medicationStatus[0].status == false) {
                                            this.totalMedications = this.totalMedications + 1;
                                        }
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.tab.push(object2);
                                        this.medicationStatus[0].status = true;
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    this.medicationTabArray.push('1');
                                    this.totalMedications = this.totalMedications + 1;
                                    var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                    this.medication.tab.push(object2);
                                    this.medicationStatus[0].status = true;
                                }
                            }
                            else if (this.doctorPresetArray[i].preset_array[j].name == 'Capsule' && this.medicationCapArray.length < 10) {
                                var boolean = false;
                                for (var k = 0; k < this.medication.cap.length; k++) {
                                    if (this.medication.cap[k].med_name == null) {
                                        this.medication.cap.splice(k, 1);
                                        // this.medicationCapArray.push('1')
                                        if (this.medicationStatus[1].status == false) {
                                            this.totalMedications = this.totalMedications + 1;
                                        }
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.cap.push(object2);
                                        this.medicationStatus[1].status = true;
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    this.medicationCapArray.push('1');
                                    this.totalMedications = this.totalMedications + 1;
                                    var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                    this.medication.cap.push(object2);
                                    this.medicationStatus[1].status = true;
                                }
                            }
                            else if (this.doctorPresetArray[i].preset_array[j].name == 'Syrup' && this.medicationSypArray.length < 10) {
                                var boolean = false;
                                for (var k = 0; k < this.medication.syp.length; k++) {
                                    if (this.medication.syp[k].med_name == null) {
                                        this.medication.syp.splice(k, 1);
                                        // this.medicationSypArray.push('1')
                                        if (this.medicationStatus[2].status == false) {
                                            this.totalMedications = this.totalMedications + 1;
                                        }
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.syp.push(object2);
                                        this.medicationStatus[2].status = true;
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    this.medicationSypArray.push('1');
                                    this.totalMedications = this.totalMedications + 1;
                                    var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                    this.medication.syp.push(object2);
                                    this.medicationStatus[2].status = true;
                                }
                            }
                            else if (this.doctorPresetArray[i].preset_array[j].name == 'Suspension' && this.medicationSuspArray.length < 10) {
                                var boolean = false;
                                for (var k = 0; k < this.medication.susp.length; k++) {
                                    if (this.medication.susp[k].med_name == null) {
                                        this.medication.susp.splice(k, 1);
                                        // this.medicationSuspArray.push('1')
                                        if (this.medicationStatus[3].status == false) {
                                            this.totalMedications = this.totalMedications + 1;
                                        }
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.susp.push(object2);
                                        this.medicationStatus[3].status = true;
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    this.medicationSuspArray.push('1');
                                    this.totalMedications = this.totalMedications + 1;
                                    var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                    this.medication.susp.push(object2);
                                    this.medicationStatus[3].status = true;
                                }
                            }
                            else if (this.doctorPresetArray[i].preset_array[j].name == 'Emulsion' && this.medicationEmulsnArray.length < 10) {
                                var boolean = false;
                                for (var k = 0; k < this.medication.emulsn.length; k++) {
                                    if (this.medication.emulsn[k].med_name == null) {
                                        this.medication.emulsn.splice(k, 1);
                                        // this.medicationEmulsnArray.push('1')
                                        if (this.medicationStatus[4].status == false) {
                                            this.totalMedications = this.totalMedications + 1;
                                        }
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.emulsn.push(object2);
                                        this.medicationStatus[4].status = true;
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    this.medicationEmulsnArray.push('1');
                                    this.totalMedications = this.totalMedications + 1;
                                    var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                    this.medication.emulsn.push(object2);
                                    this.medicationStatus[4].status = true;
                                }
                            }
                            else if (this.doctorPresetArray[i].preset_array[j].name == 'Injection' && this.medicationInjArray.length < 10) {
                                var boolean = false;
                                for (var k = 0; k < this.medication.injection.length; k++) {
                                    if (this.medication.injection[k].med_name == null) {
                                        this.medication.injection.splice(k, 1);
                                        // this.medicationInjArray.push('1')
                                        if (this.medicationStatus[6].status == false) {
                                            this.totalMedications = this.totalMedications + 1;
                                        }
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.injection.push(object2);
                                        this.medicationStatus[6].status = true;
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    this.medicationInjArray.push('1');
                                    this.totalMedications = this.totalMedications + 1;
                                    var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                    this.medication.injection.push(object2);
                                    this.medicationStatus[6].status = true;
                                }
                            }
                            else if (this.doctorPresetArray[i].preset_array[j].name == 'Cream' && this.medicationCreamArray.length < 10) {
                                var boolean = false;
                                for (var k = 0; k < this.medication.cream.length; k++) {
                                    if (this.medication.cream[k].med_name == null) {
                                        this.medication.cream.splice(k, 1);
                                        // this.medicationCreamArray.push('1')
                                        if (this.medicationStatus[7].status == false) {
                                            this.totalMedications = this.totalMedications + 1;
                                        }
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.cream.push(object2);
                                        this.medicationStatus[7].status = true;
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    this.medicationCreamArray.push('1');
                                    this.totalMedications = this.totalMedications + 1;
                                    var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                    this.medication.cream.push(object2);
                                    this.medicationStatus[7].status = true;
                                }
                            }
                            else if (this.doctorPresetArray[i].preset_array[j].name == 'Gel' && this.medicationGelArray.length < 10) {
                                var boolean = false;
                                for (var k = 0; k < this.medication.gel.length; k++) {
                                    if (this.medication.gel[k].med_name == null) {
                                        this.medication.gel.splice(k, 1);
                                        // this.medicationGelArray.push('1')
                                        if (this.medicationStatus[8].status == false) {
                                            this.totalMedications = this.totalMedications + 1;
                                        }
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.gel.push(object2);
                                        this.medicationStatus[8].status = true;
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    this.medicationGelArray.push('1');
                                    this.totalMedications = this.totalMedications + 1;
                                    var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                    this.medication.gel.push(object2);
                                    this.medicationStatus[8].status = true;
                                }
                            }
                            else if (this.doctorPresetArray[i].preset_array[j].name == 'Drops' && this.medicationDropsArray.length < 10) {
                                var boolean = false;
                                for (var k = 0; k < this.medication.drops.length; k++) {
                                    if (this.medication.drops[k].med_name == null) {
                                        this.medication.drops.splice(k, 1);
                                        // this.medicationDropsArray.push('1')
                                        if (this.medicationStatus[9].status == false) {
                                            this.totalMedications = this.totalMedications + 1;
                                        }
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.drops.push(object2);
                                        this.medicationStatus[9].status = true;
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    this.medicationDropsArray.push('1');
                                    this.totalMedications = this.totalMedications + 1;
                                    var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                    this.medication.drops.push(object2);
                                    this.medicationStatus[9].status = true;
                                }
                            }
                            else if (this.doctorPresetArray[i].preset_array[j].name == 'Lotion' && this.medicationLotionArray.length < 10) {
                                var boolean = false;
                                for (var k = 0; k < this.medication.lotion.length; k++) {
                                    if (this.medication.lotion[k].med_name == null) {
                                        this.medication.lotion.splice(k, 1);
                                        // this.medicationLotionArray.push('1')
                                        if (this.medicationStatus[13].status == false) {
                                            this.totalMedications = this.totalMedications + 1;
                                        }
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.lotion.push(object2);
                                        this.medicationStatus[13].status = true;
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    this.medicationLotionArray.push('1');
                                    this.totalMedications = this.totalMedications + 1;
                                    var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                    this.medication.lotion.push(object2);
                                    this.medicationStatus[13].status = true;
                                }
                            }
                            else if (this.doctorPresetArray[i].preset_array[j].name == 'Ointment' && this.medicationOintmentArray.length < 10) {
                                var boolean = false;
                                for (var k = 0; k < this.medication.ointment.length; k++) {
                                    if (this.medication.ointment[k].med_name == null) {
                                        this.medication.ointment.splice(k, 1);
                                        // this.medicationOintmentArray.push('1')
                                        if (this.medicationStatus[14].status == false) {
                                            this.totalMedications = this.totalMedications + 1;
                                        }
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.ointment.push(object2);
                                        this.medicationStatus[14].status = true;
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    this.medicationOintmentArray.push('1');
                                    this.totalMedications = this.totalMedications + 1;
                                    var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                    this.medication.ointment.push(object2);
                                    this.medicationStatus[14].status = true;
                                }
                            }
                            else if (this.doctorPresetArray[i].preset_array[j].name == 'Powder' && this.medicationPowderArray.length < 10) {
                                var boolean = false;
                                for (var k = 0; k < this.medication.powder.length; k++) {
                                    if (this.medication.powder[k].med_name == null) {
                                        this.medication.powder.splice(k, 1);
                                        // this.medicationPowderArray.push('1')
                                        if (this.medicationStatus[11].status == false) {
                                            this.totalMedications = this.totalMedications + 1;
                                        }
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.powder.push(object2);
                                        this.medicationStatus[11].status = true;
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    this.medicationPowderArray.push('1');
                                    this.totalMedications = this.totalMedications + 1;
                                    var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                    this.medication.powder.push(object2);
                                    this.medicationStatus[11].status = true;
                                }
                            }
                            else if (this.doctorPresetArray[i].preset_array[j].name == 'Aerosols' && this.medicationAerosolsArray.length < 10) {
                                var boolean = false;
                                for (var k = 0; k < this.medication.aerosols.length; k++) {
                                    if (this.medication.aerosols[k].med_name == null) {
                                        this.medication.aerosols.splice(k, 1);
                                        // this.medicationAerosolsArray.push('1')
                                        if (this.medicationStatus[10].status == false) {
                                            this.totalMedications = this.totalMedications + 1;
                                        }
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.aerosols.push(object2);
                                        this.medicationStatus[10].status = true;
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    this.medicationAerosolsArray.push('1');
                                    this.totalMedications = this.totalMedications + 1;
                                    var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                    this.medication.aerosols.push(object2);
                                    this.medicationStatus[10].status = true;
                                }
                            }
                            else if (this.doctorPresetArray[i].preset_array[j].name == 'MouthWash' && this.medicationMouthWashArray.length < 10) {
                                var boolean = false;
                                for (var k = 0; k < this.medication.mouthwash.length; k++) {
                                    if (this.medication.mouthwash[k].med_name == null) {
                                        this.medication.mouthwash.splice(k, 1);
                                        // this.medicationMouthWashArray.push('1')
                                        if (this.medicationStatus[12].status == false) {
                                            this.totalMedications = this.totalMedications + 1;
                                        }
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.mouthwash.push(object2);
                                        this.medicationStatus[12].status = true;
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    this.medicationMouthWashArray.push('1');
                                    this.totalMedications = this.totalMedications + 1;
                                    var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                    this.medication.mouthwash.push(object2);
                                    this.medicationStatus[12].status = true;
                                }
                            }
                            else if (this.doctorPresetArray[i].preset_array[j].name == 'Solution' && this.medicationSolutionArray.length < 10) {
                                var boolean = false;
                                for (var k = 0; k < this.medication.solution.length; k++) {
                                    if (this.medication.solution[k].med_name == null) {
                                        this.medication.solution.splice(k, 1);
                                        // this.medicationSolutionArray.push('1')
                                        if (this.medicationStatus[5].status == false) {
                                            this.totalMedications = this.totalMedications + 1;
                                        }
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.solution.push(object2);
                                        this.medicationStatus[5].status = true;
                                        boolean = true;
                                        break;
                                    }
                                }
                                if (boolean == false) {
                                    this.medicationSolutionArray.push('1');
                                    this.totalMedications = this.totalMedications + 1;
                                    var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                    this.medication.solution.push(object2);
                                    this.medicationStatus[5].status = true;
                                }
                            }
                        }
                    }
                }
            }
            else {
                this.doctorPresetArray[i].status = false;
                this.totalMedicationPresetSelected = this.totalMedicationPresetSelected - 1;
                this.totalMedications = this.totalMedications - this.doctorPresetArray[i].i_presetLength;
                for (var j = 0; j < this.doctorPresetArray[i].preset_array.length; j++) {
                    if (this.doctorPresetArray[i].preset_array[j].name == 'Tablet' && this.medicationTabArray.length > 0) {
                        for (var k = 0; k < this.medication.tab.length; k++) {
                            if (this.medication.tab[k].i_presetValue == i) {
                                this.medication.tab.splice(k, 1);
                                this.medicationTabArray.splice(0, 1);
                                break;
                            }
                        }
                        if (this.medicationTabArray.length == 0) {
                            this.addMoreTab('Tab');
                            this.totalMedications = this.totalMedications - 1;
                            this.medicationStatus[0].status = false;
                        }
                    }
                    else if (this.doctorPresetArray[i].preset_array[j].name == 'Capsule' && this.medicationCapArray.length > 0) {
                        for (var k = 0; k < this.medication.cap.length; k++) {
                            if (this.medication.cap[k].i_presetValue == i) {
                                this.medication.cap.splice(k, 1);
                                this.medicationCapArray.splice(0, 1);
                                break;
                            }
                        }
                        if (this.medicationCapArray.length == 0) {
                            this.addMoreTab('Cap');
                            this.totalMedications = this.totalMedications - 1;
                            this.medicationStatus[1].status = false;
                        }
                    }
                    else if (this.doctorPresetArray[i].preset_array[j].name == 'Syrup' && this.medicationSypArray.length > 0) {
                        for (var k = 0; k < this.medication.syp.length; k++) {
                            if (this.medication.syp[k].i_presetValue == i) {
                                this.medication.syp.splice(k, 1);
                                this.medicationSypArray.splice(0, 1);
                                break;
                            }
                        }
                        if (this.medicationSypArray.length == 0) {
                            this.addMoreTab('Syp');
                            this.totalMedications = this.totalMedications - 1;
                            this.medicationStatus[2].status = false;
                        }
                    }
                    else if (this.doctorPresetArray[i].preset_array[j].name == 'Suspension' && this.medicationSuspArray.length > 0) {
                        for (var k = 0; k < this.medication.susp.length; k++) {
                            if (this.medication.susp[k].i_presetValue == i) {
                                this.medication.susp.splice(k, 1);
                                this.medicationSuspArray.splice(0, 1);
                                break;
                            }
                        }
                        if (this.medicationSuspArray.length == 0) {
                            this.addMoreTab('Susp');
                            this.totalMedications = this.totalMedications - 1;
                            this.medicationStatus[3].status = false;
                        }
                    }
                    else if (this.doctorPresetArray[i].preset_array[j].name == 'Emulsion' && this.medicationEmulsnArray.length > 0) {
                        for (var k = 0; k < this.medication.emulsn.length; k++) {
                            if (this.medication.emulsn[k].i_presetValue == i) {
                                this.medication.emulsn.splice(k, 1);
                                this.medicationEmulsnArray.splice(0, 1);
                                break;
                            }
                        }
                        if (this.medicationEmulsnArray.length == 0) {
                            this.addMoreTab('Emulsn');
                            this.totalMedications = this.totalMedications - 1;
                            this.medicationStatus[4].status = false;
                        }
                    }
                    else if (this.doctorPresetArray[i].preset_array[j].name == 'Injection' && this.medicationInjArray.length > 0) {
                        for (var k = 0; k < this.medication.injection.length; k++) {
                            if (this.medication.injection[k].i_presetValue == i) {
                                this.medication.injection.splice(k, 1);
                                this.medicationInjArray.splice(0, 1);
                                break;
                            }
                        }
                        if (this.medicationInjArray.length == 0) {
                            this.addMoreTab('Inj');
                            this.totalMedications = this.totalMedications - 1;
                            this.medicationStatus[6].status = false;
                        }
                    }
                    else if (this.doctorPresetArray[i].preset_array[j].name == 'Cream' && this.medicationCreamArray.length > 0) {
                        for (var k = 0; k < this.medication.cream.length; k++) {
                            if (this.medication.cream[k].i_presetValue == i) {
                                this.medication.cream.splice(k, 1);
                                this.medicationCreamArray.splice(0, 1);
                                break;
                            }
                        }
                        if (this.medicationCreamArray.length == 0) {
                            this.addMoreTab('Cream');
                            this.totalMedications = this.totalMedications - 1;
                            this.medicationStatus[7].status = false;
                        }
                    }
                    else if (this.doctorPresetArray[i].preset_array[j].name == 'Gel' && this.medicationGelArray.length > 0) {
                        for (var k = 0; k < this.medication.gel.length; k++) {
                            if (this.medication.gel[k].i_presetValue == i) {
                                this.medication.gel.splice(k, 1);
                                this.medicationGelArray.splice(0, 1);
                                break;
                            }
                        }
                        if (this.medicationGelArray.length == 0) {
                            this.addMoreTab('Gel');
                            this.totalMedications = this.totalMedications - 1;
                            this.medicationStatus[8].status = false;
                        }
                    }
                    else if (this.doctorPresetArray[i].preset_array[j].name == 'Drops' && this.medicationDropsArray.length > 0) {
                        for (var k = 0; k < this.medication.drops.length; k++) {
                            if (this.medication.drops[k].i_presetValue == i) {
                                this.medication.drops.splice(k, 1);
                                this.medicationDropsArray.splice(0, 1);
                                break;
                            }
                        }
                        if (this.medicationDropsArray.length == 0) {
                            this.addMoreTab('Drops');
                            this.totalMedications = this.totalMedications - 1;
                            this.medicationStatus[9].status = false;
                        }
                    }
                    else if (this.doctorPresetArray[i].preset_array[j].name == 'Lotion' && this.medicationLotionArray.length > 0) {
                        for (var k = 0; k < this.medication.lotion.length; k++) {
                            if (this.medication.lotion[k].i_presetValue == i) {
                                this.medication.lotion.splice(k, 1);
                                this.medicationLotionArray.splice(0, 1);
                                break;
                            }
                        }
                        if (this.medicationLotionArray.length == 0) {
                            this.addMoreTab('Lotion');
                            this.totalMedications = this.totalMedications - 1;
                            this.medicationStatus[13].status = false;
                        }
                    }
                    else if (this.doctorPresetArray[i].preset_array[j].name == 'Ointment' && this.medicationOintmentArray.length > 0) {
                        for (var k = 0; k < this.medication.ointment.length; k++) {
                            if (this.medication.ointment[k].i_presetValue == i) {
                                this.medication.ointment.splice(k, 1);
                                this.medicationOintmentArray.splice(0, 1);
                                break;
                            }
                        }
                        if (this.medicationOintmentArray.length == 0) {
                            this.addMoreTab('Ointment');
                            this.totalMedications = this.totalMedications - 1;
                            this.medicationStatus[14].status = false;
                        }
                    }
                    else if (this.doctorPresetArray[i].preset_array[j].name == 'Powder' && this.medicationPowderArray.length > 0) {
                        for (var k = 0; k < this.medication.powder.length; k++) {
                            if (this.medication.powder[k].i_presetValue == i) {
                                this.medication.powder.splice(k, 1);
                                this.medicationPowderArray.splice(0, 1);
                                break;
                            }
                        }
                        if (this.medicationPowderArray.length == 0) {
                            this.addMoreTab('Powder');
                            this.totalMedications = this.totalMedications - 1;
                            this.medicationStatus[11].status = false;
                        }
                    }
                    else if (this.doctorPresetArray[i].preset_array[j].name == 'Aerosols' && this.medicationAerosolsArray.length > 0) {
                        for (var k = 0; k < this.medication.aerosols.length; k++) {
                            if (this.medication.aerosols[k].i_presetValue == i) {
                                this.medication.aerosols.splice(k, 1);
                                this.medicationAerosolsArray.splice(0, 1);
                                break;
                            }
                        }
                        if (this.medicationAerosolsArray.length == 0) {
                            this.addMoreTab('Aerosols');
                            this.totalMedications = this.totalMedications - 1;
                            this.medicationStatus[10].status = false;
                        }
                    }
                    else if (this.doctorPresetArray[i].preset_array[j].name == 'MouthWash' && this.medicationMouthWashArray.length > 0) {
                        for (var k = 0; k < this.medication.mouthwash.length; k++) {
                            if (this.medication.mouthwash[k].i_presetValue == i) {
                                this.medication.mouthwash.splice(k, 1);
                                this.medicationMouthWashArray.splice(0, 1);
                                break;
                            }
                        }
                        if (this.medicationMouthWashArray.length == 0) {
                            this.addMoreTab('MouthWash');
                            this.totalMedications = this.totalMedications - 1;
                            this.medicationStatus[12].status = false;
                        }
                    }
                    else if (this.doctorPresetArray[i].preset_array[j].name == 'Solution' && this.medicationSolutionArray.length > 0) {
                        for (var k = 0; k < this.medication.solution.length; k++) {
                            if (this.medication.solution[k].i_presetValue == i) {
                                this.medication.solution.splice(k, 1);
                                this.medicationSolutionArray.splice(0, 1);
                                break;
                            }
                        }
                        if (this.medicationSolutionArray.length == 0) {
                            this.addMoreTab('Solution');
                            this.totalMedications = this.totalMedications - 1;
                            this.medicationStatus[5].status = false;
                        }
                    }
                }
            }
            console.log(this.totalMedications);
        }
        else if (type == 'Instructions') {
            if (!this.presetArrayInstruction[i].status || this.presetArrayInstruction[i].status == false) {
                if (this.presetArrayInstruction[i].preset_array.length == 3 && this.inputBox.length == 1) {
                    if (this.inputBox[0].inputInstruction.length == 0 || this.inputBox[0].inputInstruction == '') {
                        this.inputBox = [];
                        for (var k = 0; k < this.presetArrayInstruction[i].preset_array.length; k++) {
                            this.presetArrayInstruction[i].preset_array[k].i_presetValue = i;
                            this.presetArrayInstruction[i].preset_array[k].i_presetLength = this.presetArrayInstruction[i].preset_array.length;
                            var object2 = Object.assign({}, this.presetArrayInstruction[i].preset_array[k]);
                            this.inputBox.push(object2);
                        }
                        this.presetArrayInstruction[i].status = true;
                    }
                    else {
                        this.toastr.warning("Maximum items can be 3", "Warning");
                    }
                }
                else if (this.presetArrayInstruction[i].preset_array.length + this.inputBox.length < 4) {
                    for (var j = 0; j < this.inputBox.length; j++) {
                        if (this.inputBox[j].inputInstruction.length == 0 || this.inputBox[j].inputInstruction == '') {
                            this.inputBox.splice(j, 1);
                        }
                    }
                    for (var k = 0; k < this.presetArrayInstruction[i].preset_array.length; k++) {
                        this.presetArrayInstruction[i].preset_array[k].i_presetValue = i;
                        this.presetArrayInstruction[i].preset_array[k].i_presetLength = this.presetArrayInstruction[i].preset_array.length;
                        var object2 = Object.assign({}, this.presetArrayInstruction[i].preset_array[k]);
                        this.inputBox.push(object2);
                    }
                    this.presetArrayInstruction[i].status = true;
                }
                else {
                    this.toastr.warning("Maximum items can be 3", "Warning");
                }
            }
            else {
                for (var k = 0; k < this.presetArrayInstruction[i].preset_array.length; k++) {
                    for (var j = 0; j < this.inputBox.length; j++) {
                        if (this.inputBox[j].inputInstruction && this.inputBox[j].inputInstruction.length > 0) {
                            if (this.inputBox[j].inputInstruction[0].value == this.presetArrayInstruction[i].preset_array[k].instructionsInput) {
                                this.inputBox.splice(j, 1);
                                if (this.inputBox.length == 0) {
                                    this.inputBox = [{ name: 'Instruction 1', instructionsInput: '', inputInstruction: '' }];
                                }
                                break;
                            }
                        }
                    }
                }
                this.presetArrayInstruction[i].status = false;
            }
        }
        else if (type == 'Surgery') {
            this.userService.GetDoctorPresetArrayById(this.presetArraySurgery[i].id).subscribe(function (data) {
                console.log(data);
                data.data.status = _this.presetArraySurgery[i].status;
                _this.presetArraySurgery[i] = data.data;
                if (!_this.presetArraySurgery[i].status || _this.presetArraySurgery[i].status == false) {
                    if (_this.totalSurgeryOptionsSelected + _this.presetArraySurgery[i].preset_array.length > 3) {
                        _this.toastr.warning("Maximum items can be 3", "Warning");
                    }
                    else {
                        for (var k = 0; k < _this.presetArraySurgery[i].preset_array.length; k++) {
                            for (var j = 0; j < _this.suregeryOptionsTop.length; j++) {
                                if (_this.suregeryOptionsTop[j].name == _this.presetArraySurgery[i].preset_array[k].name) {
                                    // var object2 = Object.assign({},this.presetArraySurgery[i].preset_array[k]);
                                    // var object2 = this.presetArraySurgery[i].preset_array[k];
                                    // object2.status = true
                                    // object2.status1 = true
                                    if (_this.suregeryOptionsTop[j].i_presetValue > -1) {
                                        _this.presetArraySurgery[_this.suregeryOptionsTop[j].i_presetValue].status = false;
                                    }
                                    _this.presetArraySurgery[i].preset_array[k].status = true;
                                    _this.presetArraySurgery[i].preset_array[k].status1 = true;
                                    _this.presetArraySurgery[i].preset_array[k].i_presetValue = i;
                                    var length = 0;
                                    for (var l = 0; l < _this.presetArraySurgery[i].preset_array.length; l++) {
                                        length = length + _this.presetArraySurgery[i].preset_array[l].div.length;
                                    }
                                    _this.presetArraySurgery[i].preset_array[k].i_presetLength = length;
                                    _this.suregeryOptionsTop.splice(j, 1, Object.assign({}, _this.presetArraySurgery[i].preset_array[k]));
                                    _this.totalSurgeryOptionsSelected = _this.totalSurgeryOptionsSelected + _this.presetArraySurgery[i].preset_array[k].div.length - 1;
                                    // this.suregeryOptionsTop[j].i_presetValue = i
                                    // this.suregeryOptionsTop[j].i_presetLength = this.presetArraySurgery[i].preset_array.length
                                    break;
                                }
                            }
                        }
                        for (var k = 0; k < _this.presetArraySurgery[i].preset_array.length; k++) {
                            for (var j = 0; j < _this.suregeryOptions.length; j++) {
                                if (_this.suregeryOptions[j].name == _this.presetArraySurgery[i].preset_array[k].name) {
                                    // var object2 = Object.assign({},this.presetArraySurgery[i].preset_array[k]);
                                    // var object2 = this.presetArraySurgery[i].preset_array[k];
                                    // object2.status = true
                                    // object2.status1 = true
                                    _this.presetArraySurgery[i].preset_array[k].status = true;
                                    _this.presetArraySurgery[i].preset_array[k].status1 = true;
                                    _this.presetArraySurgery[i].preset_array[k].i_presetValue = i;
                                    var length = 0;
                                    for (var l = 0; l < _this.presetArraySurgery[i].preset_array.length; l++) {
                                        length = length + _this.presetArraySurgery[i].preset_array[l].div.length;
                                    }
                                    _this.presetArraySurgery[i].preset_array[k].i_presetLength = length;
                                    _this.suregeryOptionsTop.push(Object.assign({}, _this.presetArraySurgery[i].preset_array[k]));
                                    _this.totalSurgeryOptionsSelected = _this.totalSurgeryOptionsSelected + 1;
                                    _this.suregeryOptions.splice(j, 1);
                                    break;
                                }
                            }
                        }
                        // if(this.totalSurgeryOptionsSelected<4){
                        _this.presetArraySurgery[i].status = true;
                        // this.suregeryOptionsTop = this.suregeryOptionsTop;
                        // this.suregeryOptions = this.suregeryOptions;
                        // }else {
                        //     this.toastr.warning("Maximum items can be 3", "Warning")
                        // }
                    }
                }
                else {
                    console.log("elseeeeeeeeeeeeeeeeeeeeeeeee");
                    for (var k = 0; k < _this.presetArraySurgery[i].preset_array.length; k++) {
                        for (var j = 0; j < _this.suregeryOptionsTop.length; j++) {
                            if (_this.suregeryOptionsTop[j].name == _this.presetArraySurgery[i].preset_array[k].name) {
                                _this.suregeryOptionsTop[j].status = false;
                                _this.suregeryOptionsTop[j].status1 = false;
                                _this.totalSurgeryOptionsSelected = _this.totalSurgeryOptionsSelected - _this.suregeryOptionsTop[j].div.length;
                                _this.suregeryOptionsTop[j].div = [];
                                _this.suregeryOptionsTop[j].div.push({
                                    sub_speciality: '',
                                    procedure_name: ''
                                });
                                _this.suregeryOptions.push(_this.suregeryOptionsTop[j]);
                                _this.suregeryOptionsTop.splice(j, 1);
                                break;
                            }
                        }
                    }
                    _this.presetArraySurgery[i].status = false;
                }
                // this.totalSurgeryOptionsSelected = 0
                // for (var j = 0; j < this.suregeryOptionsTop.length; j++) {
                //     if (this.suregeryOptionsTop[j].status == true) {
                //         this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected + 1
                //         this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected + this.suregeryOptionsTop[j].div.length - 1
                //     }
                // }
                console.log(_this.totalSurgeryOptionsSelected);
            }, function (err) {
                console.log(err);
            });
        }
        else if (type == 'Other Treatments') {
            console.log(this.presetArrayOtherTreatment[i].preset_array);
            if (!this.presetArrayOtherTreatment[i].status || this.presetArrayOtherTreatment[i].status == false) {
                if (this.totalOtherTreatment + this.presetArrayOtherTreatment[i].preset_array.length <= 4) {
                    for (var j = 0; j < this.presetArrayOtherTreatment[i].preset_array.length; j++) {
                        for (var k = 0; k < this.treatmentStatus.length; k++) {
                            if (this.treatmentStatus[k].name == this.presetArrayOtherTreatment[i].preset_array[j].name) {
                                if (this.presetArrayOtherTreatment[i].preset_array[j].name == 'Plaster' || this.presetArrayOtherTreatment[i].preset_array[j].name == 'Other') {
                                    if (this.treatmentStatus[k].i_presetValue) {
                                        this.presetArrayOtherTreatment[this.treatmentStatus[k].i_presetValue].status = false;
                                        if (k == 7 || k == 2) {
                                            this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[k].div.length;
                                        }
                                        else {
                                            this.totalOtherTreatment = this.totalOtherTreatment - 1;
                                        }
                                    }
                                    if (this.totalOtherTreatment + this.presetArrayOtherTreatment[i].preset_array[j].div.length <= 4) {
                                        this.presetArrayOtherTreatment[i].preset_array[j].i_presetValue = i;
                                        this.presetArrayOtherTreatment[i].preset_array[j].i_presetLength = this.presetArrayOtherTreatment[i].preset_array.length;
                                        this.treatmentStatus.splice(k, 1, Object.assign({}, this.presetArrayOtherTreatment[i].preset_array[j]));
                                        // this.treatmentStatus[k] = Object.assign({}, this.presetArrayOtherTreatment[i].preset_array[j])
                                        this.treatmentStatus[k].status = true;
                                        break;
                                    }
                                    else {
                                        this.toastr.warning("Maximum items can be 4 only", "Warning");
                                    }
                                }
                                else {
                                    // this.treatmentStatus[k] = Object.assign({}, this.presetArrayOtherTreatment[i].preset_array[j])
                                    this.presetArrayOtherTreatment[i].preset_array[j].i_presetValue = i;
                                    this.presetArrayOtherTreatment[i].preset_array[j].i_presetLength = this.presetArrayOtherTreatment[i].preset_array.length;
                                    this.treatmentStatus.splice(k, 1, Object.assign({}, this.presetArrayOtherTreatment[i].preset_array[j]));
                                    this.treatmentStatus[k].status = true;
                                    break;
                                }
                            }
                        }
                    }
                    this.presetArrayOtherTreatment[i].status = true;
                    this.totalOtherTreatment = 0;
                    this.treatmentSelection = [];
                    for (var j = 0; j < this.treatmentStatus.length; j++) {
                        if (this.treatmentStatus[j].status == true) {
                            this.treatmentSelection.push({
                                display: this.treatmentStatus[j].name,
                                value: this.treatmentStatus[j].name
                            });
                            if (j == 7 || j == 2) {
                                this.totalOtherTreatment = this.totalOtherTreatment + this.treatmentStatus[j].div.length;
                            }
                            else {
                                this.totalOtherTreatment = this.totalOtherTreatment + 1;
                            }
                        }
                    }
                }
                else {
                    this.toastr.warning("Maximum items can be 4 only", "Warning");
                }
            }
            else {
                this.presetArrayOtherTreatment[i].status = false;
                for (var j = 0; j < this.presetArrayOtherTreatment[i].preset_array.length; j++) {
                    for (var k = 0; k < this.treatmentStatus.length; k++) {
                        if (this.treatmentStatus[k].name == this.presetArrayOtherTreatment[i].preset_array[j].name) {
                            this.treatmentStatus[k].status = false;
                            if (k == 7) {
                                this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[7].div.length;
                                this.treatmentStatus[7].div = [];
                                this.treatmentStatus[7].div.push({
                                    name: 'Other',
                                    status: false,
                                    SpecialInstruction: null,
                                    Frequency: 'Frequency',
                                    Duration: 'Duration',
                                    med_name: []
                                });
                            }
                            else if (k == 2) {
                                this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[2].div.length;
                                this.treatmentStatus[2].div = [];
                                this.treatmentStatus[2].div.push({
                                    name: 'Plaster',
                                    status: false,
                                    SpecialInstruction: null,
                                    Injury_Area: 'Injury Area',
                                    plaster_type: null,
                                    Duration: 'Duration'
                                });
                            }
                            else if (k == 0) {
                                this.totalOtherTreatment = this.totalOtherTreatment - 1;
                                this.treatmentStatus[0] = { name: 'Lifestyle Changes', status: false, SpecialInstruction: null, lifestyle: null };
                            }
                            else if (k == 1) {
                                this.totalOtherTreatment = this.totalOtherTreatment - 1;
                                this.treatmentStatus[1] = { name: 'Physiotherapy', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' };
                            }
                            else if (k == 3) {
                                this.totalOtherTreatment = this.totalOtherTreatment - 1;
                                this.treatmentStatus[3] = { name: 'Fomentation', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' };
                            }
                            else if (k == 4) {
                                this.totalOtherTreatment = this.totalOtherTreatment - 1;
                                this.treatmentStatus[4] = { name: 'Gargle', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] };
                            }
                            else if (k == 5) {
                                this.totalOtherTreatment = this.totalOtherTreatment - 1;
                                this.treatmentStatus[5] = { name: 'Dressing', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] };
                            }
                            else if (k == 6) {
                                this.totalOtherTreatment = this.totalOtherTreatment - 1;
                                this.treatmentStatus[6] = { name: 'Bandage', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] };
                            }
                        }
                    }
                }
                this.treatmentSelection = [];
                for (var j = 0; j < this.treatmentStatus.length; j++) {
                    if (this.treatmentStatus[j].status == true) {
                        this.treatmentSelection.push(this.treatmentStatus[j].name);
                    }
                }
            }
            console.log(this.totalOtherTreatment);
        }
        else if (type == 'Investigation') {
            if (this.presetArrayInvestigation[i].status == false || !this.presetArrayInvestigation[i].status) {
                if (this.numberOfInvestigationSelected + this.presetArrayInvestigation[i].preset_array.length <= 4) {
                    this.presetArrayInvestigation[i].status = !this.presetArrayInvestigation[i].status;
                    for (var j = 0; j < this.presetArrayInvestigation[i].preset_array.length; j++) {
                        for (var k = 0; k < this.investigationStatus.length; k++) {
                            if (this.investigationStatus[k].name == this.presetArrayInvestigation[i].preset_array[j].name) {
                                this.investigationStatus[k] = this.presetArrayInvestigation[i].preset_array[j];
                                this.investigationStatus[k].model = this.presetArrayInvestigation[i].preset_array[j].values;
                                this.investigationStatus[k].status = true;
                                this.investigationStatus[k].i_presetValue = i;
                                this.investigationStatus[k].i_presetLength = this.presetArrayInvestigation[i].preset_array.length;
                                var indexSelection = this.investigationSelection.findIndex(function (p) { return p.value == _this.investigationStatus[k].name; });
                                if (indexSelection < 0) {
                                    var ob = {
                                        display: this.presetArrayInvestigation[i].preset_array[j].name,
                                        value: this.presetArrayInvestigation[i].preset_array[j].name
                                    };
                                    this.investigationSelection.push(ob);
                                }
                                break;
                            }
                        }
                    }
                }
                else {
                    this.toastr.warning("Maximum items can be 4 only", "Warning");
                }
            }
            else {
                this.presetArrayInvestigation[i].status = !this.presetArrayInvestigation[i].status;
                for (var j = 0; j < this.presetArrayInvestigation[i].preset_array.length; j++) {
                    for (var k = 0; k < this.investigationStatus.length; k++) {
                        if (this.investigationStatus[k].name == this.presetArrayInvestigation[i].preset_array[j].name) {
                            this.investigationStatus[k] = this.presetArrayInvestigation[i].preset_array[j];
                            this.investigationStatus[k].model = this.presetArrayInvestigation[i].preset_array[j].values;
                            this.investigationStatus[k].status = false;
                            this.investigationSelection.splice(this.investigationSelection.findIndex(function (p) { return p.value == _this.presetArrayInvestigation[i].preset_array[j].name; }), 1);
                            // this.investigationRemoveFromList(this.presetArrayInvestigation[i].preset_array[j].name)
                            break;
                        }
                    }
                }
            }
            this.numberOfInvestigationSelected = 0;
            for (var j = 0; j < this.investigationStatus.length; j++) {
                if (this.investigationStatus[j].status == true) {
                    this.numberOfInvestigationSelected = this.numberOfInvestigationSelected + 1;
                }
            }
            if (this.numberOfInvestigationSelected == 0) {
                for (var j = 0; j < this.presetArrayInvestigation.length; j++) {
                    this.presetArrayInvestigation[j].status = false;
                }
            }
        }
        else if (type == 'Symptoms') {
            preset.status = !preset.status;
            if (preset.status) {
                var index = this.itemsymptoms.findIndex(function (p) { return p.value == preset.value; });
                if (index == -1) {
                    if (this.itemsymptoms.length < 4) {
                        this.itemsymptoms.push({
                            display: preset.value,
                            value: preset.value
                        });
                    }
                    else {
                        this.toastr.warning("Maximum items can be 4", "Warning");
                        preset.status = !preset.status;
                    }
                }
            }
            else {
                var index = this.itemsymptoms.findIndex(function (p) { return p.value == preset.value; });
                if (index > -1) {
                    this.itemsymptoms.splice(index, 1);
                }
            }
        }
        else if (type == 'Diagnosis') {
            preset.status = !preset.status;
            if (preset.status) {
                var index = this.itemsdiagnosis.findIndex(function (p) { return p.value == preset.value; });
                if (index == -1) {
                    if (this.itemsdiagnosis.length < 4) {
                        this.itemsdiagnosis.push({
                            display: preset.value,
                            value: preset.value
                        });
                    }
                    else {
                        this.toastr.warning("Maximum items can be 4", "Warning");
                        preset.status = !preset.status;
                    }
                }
            }
            else {
                var index = this.itemsdiagnosis.findIndex(function (p) { return p.value == preset.value; });
                if (index > -1) {
                    this.itemsdiagnosis.splice(index, 1);
                }
            }
        }
    };
    DashboardPresetComponent.prototype.onRemoveMedName = function (type, data) {
        data.med_info = [];
        if (type == 'TabletInfo') {
            this.doctorMedicationTabletInfoDB = [];
        }
        else if (type == 'CapsuleInfo') {
            this.doctorMedicationCapsuleInfoDB = [];
        }
        else if (type == 'SyrupInfo') {
            this.doctorMedicationSyrupInfoDB = [];
        }
        else if (type == 'SuspensionInfo') {
            this.doctorMedicationSuspensionInfoDB = [];
        }
        else if (type == 'EmulsionInfo') {
            this.doctorMedicationEmulsionInfoDB = [];
        }
        else if (type == 'SolutionInfo') {
            this.doctorMedicationSolutionInfoDB = [];
        }
        else if (type == 'InjectionInfo') {
            this.doctorMedicationInjectionInfoDB = [];
        }
        else if (type == 'CreamInfo') {
            this.doctorMedicationCreamInfoDB = [];
        }
        else if (type == 'OitmentInfo') {
            this.doctorMedicationOitmentInfoDB = [];
        }
        else if (type == 'GelInfo') {
            this.doctorMedicationGelInfoDB = [];
        }
        else if (type == 'LotionInfo') {
            this.doctorMedicationLotionInfoDB = [];
        }
        else if (type == 'DropsInfo') {
            this.doctorMedicationDropsInfoDB = [];
        }
        else if (type == 'AerosolsInfo') {
            this.doctorMedicationAerosolsInfoDB = [];
        }
        else if (type == 'PowderInfo') {
            this.doctorMedicationPowderInfoDB = [];
        }
        else if (type == 'MouthWashInfo') {
            this.doctorMedicationMouthwashInfoDB = [];
        }
    };
    DashboardPresetComponent.prototype.closePresetPop = function () {
        $("#presetModal").modal("hide");
    };
    DashboardPresetComponent.prototype.addPresets = function (flag, preset) {
        if (flag == 'findings') {
            var index = this.findingPreSetVals.findIndex(function (p) { return p.value == preset.value; });
            if (index != -1) {
                this.findingPreSetVals[index].status = true;
            }
        }
        else if (flag == 'symptoms') {
            var index = this.symptomsPresetArray.findIndex(function (p) { return p.value == preset.value; });
            if (index != -1) {
                this.symptomsPresetArray[index].status = true;
            }
        }
        else if (flag == 'diagnosis') {
            var index = this.diagnosisPresetArray.findIndex(function (p) { return p.value == preset.value; });
            if (index != -1) {
                this.diagnosisPresetArray[index].status = true;
            }
        }
    };
    DashboardPresetComponent.prototype.removePresets = function (flag, preset) {
        if (flag == 'findings') {
            var index = this.findingPreSetVals.findIndex(function (p) { return p.value == preset.value; });
            if (index != -1) {
                this.findingPreSetVals[index].status = false;
            }
        }
        else if (flag == 'symptoms') {
            var index = this.symptomsPresetArray.findIndex(function (p) { return p.value == preset.value; });
            if (index != -1) {
                this.symptomsPresetArray[index].status = false;
            }
        }
        else if (flag == 'diagnosis') {
            var index = this.diagnosisPresetArray.findIndex(function (p) { return p.value == preset.value; });
            if (index != -1) {
                this.diagnosisPresetArray[index].status = false;
            }
        }
    };
    DashboardPresetComponent.prototype.AddDoctorSurgeryArray = function () {
        var object = {
            doctor_id: this.doctorData.itemId,
            suregeryOptions: this.suregeryOptions,
            suregeryOptionsTop: this.suregeryOptionsTop,
        };
        console.log(object);
        this.userService.AddDoctorSurgeryArray(object).subscribe(function (data) {
            console.log(data);
            // if (data.response == true) {
            //     this.GetDoctorSurgeryArray(this.doctorData.itemId)
            // }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPresetComponent.prototype.onTextChangeOfMedName = function (type, observation) {
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
    DashboardPresetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-preset',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-preset/dashboard-preset.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-preset/dashboard-preset.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatDialog */]])
    ], DashboardPresetComponent);
    return DashboardPresetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-preset/dashboard-preset.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPresetModule", function() { return DashboardPresetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_chips__ = __webpack_require__("../../../../ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_preset_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-preset/dashboard-preset-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_preset_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-preset/dashboard-preset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardPresetModule = /** @class */ (function () {
    function DashboardPresetModule() {
    }
    DashboardPresetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_chips__["a" /* TagInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_preset_routing_module__["a" /* DashboardPresetRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__["c" /* MatDialogModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__dashboard_preset_component__["a" /* DashboardPresetComponent */]]
        })
    ], DashboardPresetModule);
    return DashboardPresetModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-preset.module.chunk.js.map