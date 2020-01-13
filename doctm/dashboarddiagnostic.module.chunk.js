webpackJsonp(["dashboarddiagnostic.module"],{

/***/ "../../../../../src/app/header-six-layout/dashboarddiagnostic/dashboarddiagnostic-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboarddiagnosticRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboarddiagnostic_component__ = __webpack_require__("../../../../../src/app/header-six-layout/dashboarddiagnostic/dashboarddiagnostic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboarddiagnostic_component__["a" /* DashboarddiagnosticComponent */]
    }
];
var DashboarddiagnosticRoutingModule = /** @class */ (function () {
    function DashboarddiagnosticRoutingModule() {
    }
    DashboarddiagnosticRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboarddiagnosticRoutingModule);
    return DashboarddiagnosticRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-six-layout/dashboarddiagnostic/dashboarddiagnostic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pad-list>li.half-li {\n    width: 33.33%;\n    float: left;\n}\n.green{\n    color: green;\n}\n.pad-list>li>div {\n    text-overflow: unset;\n    overflow: unset;\n    white-space: normal; \n    min-height: 57px;\n    padding: 5px 2px;\n    display: table;\n    height: 65px;\n    /*word-break: break-all;*/\n}\n.pad-list .medication-li div {\n    display: table;\n    width: 100%;\n    min-height: 55px;\n}\n.red-btn.my-pad {\n    padding: 15px 15px;\n}\nli.medication-li {\n    width: 99%;\n}\nspan.diseasen-name {\n    display: table-cell;\n    vertical-align: middle;\n}\nspan.medication-transform {\n    font-size: 18px;\n    width: 100%;\n    display: table-cell;\n    vertical-align: middle;\n}\n.pad-header>.blue-btn {\n    padding: 0px 1px;\n    border-right: 0;\n}\n.blue-btn .btn-custom {\n    padding: 16px 30px;\n    border-radius: 0;\n    min-width: 100%;\n    -webkit-box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12);\n            box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12);\n}\n.height-50 {\n    min-height: 144px;\n}\n.vacciSchedule-div>ul>li>div.active,\n.follow-ul>li.active,\n.frequency-ul li.active-cel,\n.duration-ul li.active-cel,\n.special-ul li.active-cel,\n.precond-ul>li.active-cel,\n.special-ul.hindi li.active-cel, \n.combined_frequency > li.active-cel, \n.combined_duration > li.active-cel,\n.combined_instruc > li.active-cel,\n.combined_inject > li.active-cel,\n.combined_instruc.combined_drop > li.active-cel{\n    background-color: #000;\n    color: #fff;\n    background: #000;\n}\n.sphere-ul>li.active,\n.sphere-ul.right>li.active {\n    background-color: #01b0f0;\n}\n.flex-inner .table {\n    margin-bottom: 0;\n}\n.flex-inner ol {\n    margin-bottom: 0;\n}\n.flex-inner ol>div {\n    width: 100%;\n    float: left;\n    margin-left: -10px;\n    font-weight: bold;\n    font-size: 12px;\n}\n.flex-inner ol>li {\n    font-size: 12px;\n    line-height: 15px;\n    word-break: break-all;\n    padding-right: 15px;\n    position: relative;\n}\n/*.flex-inner .medicationol > li{\n    margin-bottom: 8px;\n    }*/\n.flex-inner .followol>li {\n        width: 100%;\n    }\ninput.txt50 {\n        width: 100px;\n    }\n@media (min-width: 768px) {\n        #eyeModal .modal-dialog {\n            width: 650px;\n        }\n    }\n.help-note {\n        font-size: 10px;\n        font-style: italic;\n    }\n.selected_preset {\n        width: 100%;\n        float: left;\n    }\n.only-text {\n        padding: 8px 5px;\n        font-size: 12px;\n        border: 1px solid rgba(198, 217, 241, 1);\n    }\n.medication-modal-body .medication-form>.form-group>div.only-text {\n        border: 1px solid rgba(198, 217, 241, 1);\n    }\n.selected_preset .medication-form>.duration>div {\n        color: #222;\n    }\n.medic-info {\n        border-top: 0;\n    }\n.active.lightblue-btn {\n        background-color: #000;\n        color: #fff;\n    }\n.combined_modal .modal-dialog {\n        width: 830px;\n    }\n.combined_flex {\n        width: 100%;\n        float: left;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n        flex-direction: row;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n        justify-content: space-between;\n    }\n.combined_flex>div {\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 33.33%;\n        flex: 1 1 33.33%;\n        margin: 0 2px;\n        border: 1px solid #b9b9b9;\n    }\n.combined_heading {\n        width: 100%;\n        float: left;\n        color: #fff;\n        margin: 0;\n        padding: 5px 0;\n        text-align: center;\n        background-color: #00b0f0;\n    }\n.combined_frequency,\n    .combined_duration,\n    .combined_instruc,\n    .combined_inject {\n        width: 100%;\n        float: left;\n        margin: 0;\n        padding: 5px 0;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n        flex-direction: row;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        list-style-type: none;\n    }\n.combined_frequency>li,\n    .combined_duration>li,\n    .combined_instruc>li,\n    .combined_inject>li {\n        width: 70px;\n        height: 70px;\n        margin: 3px;\n        cursor: pointer;\n        padding: 0 15px;\n        border-radius: 10px;\n        border: 1px solid #777;\n        text-align: center;\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n        flex: 1 1 auto;\n        display: -webkit-box;\n        - display: flex;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n    }\n.combined_flex>div ul>li.active {\n        background-color: #000;\n        color: #fff;\n    }\n.combined_duration>li {\n        height: 32px;\n    }\n.combined_flex>div.frquency_cmbnd ul {\n        background-color: #F2F2F2;\n    }\n.combined_flex>div.duration_cmbnd ul {\n        background-color: #DAEDF4;\n    }\n.combined_flex>div.instr_cmbnd ul.combined_instruc {\n        background-color: #EAF1DD;\n    }\n.combined_flex>div.instr_cmbnd ul.combined_inject {\n        background-color: #FCEAD9;\n    }\n.combined_flex>div.instr_cmbnd ul.combined_drop {\n        background-color: #FCEAD9;\n    }\n.combined_flex>div.duration_cmbnd {\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 20%;\n        flex: 1 1 20%;\n    }\n.combined_flex>div.instr_cmbnd .combined_inject {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }\n.combined_flex>div.instr_cmbnd .combined_inject>li {\n        width: 100%;\n        float: left;\n        font-size: 20px;\n        height: 62px;\n    }\n.combined_flex>div.instr_cmbnd .combined_instruc>li {\n        width: 120px;\n        height: 40px;\n    }\n#combinedModal2 .combined_flex>div.instr_cmbnd .combined_instruc>li {\n        height: 90px;\n    }\n.combined_flex>div.instr_cmbnd .combined_drop>li {\n        width: 50px;\n        height: 62px;\n    }\n.combined_flex>div.instr_cmbnd .combined_dosage>li {\n        width: 50px;\n        height: 39.5px;\n    }\n.btn_green {\n        font-size: 18px;\n        color: #fff;\n        background-color: #8BD053;\n    }\np.help-note {\n        margin: 0 0 1px;\n    }\n.btn.sm_green-btn.lang-btn {\n        background: -webkit-gradient(linear, left bottom, left top, from(rgb(201, 181, 232)), color-stop(rgb(217, 203, 238)), to(rgb(240, 234, 249)));\n        background: linear-gradient(to top, rgb(201, 181, 232), rgb(217, 203, 238), rgb(240, 234, 249));\n        background: -o-linear-gradient(to top, rgb(201, 181, 232), rgb(217, 203, 238), rgb(240, 234, 249));\n        border:1px solid rgb(201, 181, 232)\n    }\n.btn.sm_green-btn.lang-btn.active, .btn.sm_green-btn.lang-btn:focus {\n        background: #000;\n        color: #fff;\n    }\n/*.precond-ul>li.active-cel {\n    background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.5), rgba(0,0,0,0.1));\n    }*/\nfieldset.fieldset-preset {\n        min-width: unset;\n        padding: 0 10px;\n        border: 1px solid rgba(56, 94, 138, 1);\n    }\nlegend.legend-preset {\n        width: 20%;\n        border-bottom: none;\n        text-align: center;\n        margin-bottom: 10px;\n    }\n.tags-listing-div .fieldset-preset .tags-listing {\n        width: 100%;\n        float: left;\n        overflow: auto;\n        max-height: 280px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        display: -moz-flex;\n        display: -o-flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        list-style-type: none;\n        padding: 0px;\n        border-radius: 3px;\n    }\n.li-blocked span {\n        font-weight: normal;\n    }\n#translated_div .modal-dialog .modal-header {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        display: -moz-flex;\n        display: -o-flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: space-evenly;\n            -ms-flex-pack: space-evenly;\n                justify-content: space-evenly;\n    }\n#translated_div .modal-dialog .modal-header>* {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 1 auto;\n                flex: 1 1 auto;\n    }\n.padview-header {\n        width: 100%;\n        float: left;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        display: -moz-flex;\n        display: -o-flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        -webkit-box-align: start;\n            -ms-flex-align: start;\n                align-items: flex-start;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n    }\n.pad-view-flx {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 1 50%;\n                flex: 1 1 50%;\n        -webkit-flex: 1 1 50%;\n        -moz-flex: 1 1 50%;\n        -o-flex: 1 1 50%;\n    }\n#previewModal .padview-bodyright {\n        width: 100%;\n        float: left;\n        padding: 9.5px 10px;\n        margin-bottom: 10px;\n        border: 2px solid #333;\n        border-right: 0;\n    }\n.reportImg img{\n        display: block;\n        max-width: 400px;\n        height: 400px;\n        -o-object-fit: cover;\n           object-fit: cover;\n        text-align: center;\n        margin: 0 auto;\n        margin-top:5px;\n        margin-bottom:5px;\n    }\n.wrap{\n        width:95%;\n        max-height:450px;\n        min-height:450px; \n        overflow-x:hidden;\n        overflow-y: scroll; \n    }\n.visit-status{\n        color: #002160;\n        font-weight: bold;\n    }\n.patient-date {\n        color: #bbb;\n    }\n.patient-textwrap{\n        -webkit-box-align: normal!important;\n            -ms-flex-align: normal!important;\n                align-items: normal!important;\n    }\n.patient-address {\n        padding-right: 0px;\n    }\n.cstm-drpdown-cnsulted-doc {\n        margin: 20px 0;\n        position: relative;\n    }\n.smrt-ass-dropdown {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n    }\n.cstm-drpdown-cnsulted-doc select {\n        font-size: 25px;\n        color: #fff;\n        width: 100%;\n        position: relative;\n        cursor: pointer;\n        padding: 15px;\n        background-color: #01b0f0;\n        border-radius: 10px;\n        border: none;\n    }\n.cstm-drpdown-cnsulted-doc option {\n        border-bottom: 1px #ccc dashed;\n        padding: 8px 7px;\n        -webkit-transition: .3s all;\n        transition: .3s all;\n        display: block;\n        color: #00b0f0;\n        border-radius: 0;\n        background-color: #fff;\n        font-size: 20px;\n    }\n.cstm-caret-big {\n        display: inline-block;\n        width: 0;\n        cursor: pointer;\n        position: absolute;\n        height: 0;\n        margin-left: 4px;\n        color: #000;\n        top: 22px;\n        background-color: #01b0f0;\n        z-index: 1;\n        right: 5px;\n        margin-bottom: 9px;\n        vertical-align: middle;\n        border-top: 17px dashed;\n        border-right: 14px solid transparent;\n        border-left: 14px solid transparent;\n    }\n.search-patient {\n        margin: 28px 0;\n    }\n.panel-success {\n        border: 2px solid #000;\n        border-radius: 0;\n        margin-bottom: 0;\n        min-height: 511px;\n    }\n.panel-body {\n        padding: 0;\n    }\n.today-appointment {\n        float: left;\n        /*width: 60%;*/\n        width: 49.9%;\n    }\n.appointment-heading {\n        font-size: 25px;\n        text-align: center;\n        background: -webkit-linear-gradient(top, #d6f8ff 0%, #a3ecff 72%);\n        padding: 10px 0;\n        /*border-right: 2px solid #000;*/\n        border-bottom: 2px solid #000;\n        width: 85%;\n        display: inline-block;\n    }\n.search-appointment{\n        width: 100%;\n    }\n.today-appointment-list-div {\n        padding: 10px;\n        /*padding: 13px;*/\n        width: 100%;\n        padding-bottom: 0;\n        float: left;\n        max-height: 450px;\n        overflow: auto;\n        /*border-right: 2px solid #000;*/\n    }\n.today-appointment-list {\n        float: left;\n        width: 100%;\n        margin-bottom: 10px;\n    }\n.today-appointment-ul {\n        float: left;\n        list-style-type: none;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n    }\n.today-appointment-ul {\n        padding: 0;\n        margin: 0;\n    }\n.today-appointment-ul li {\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n        flex: 1 1 auto;\n        cursor: pointer;\n        padding: 10px 15px;\n        border: 1px solid #adc4df;\n        background: -webkit-linear-gradient(top, #f2f6fa 0%, #cddbec 72%);\n        margin-right: 9px;\n        text-transform: uppercase;\n    }\n.today-appointment-ul li:last-child {\n        margin-right: 0;\n    }\n.tommorow-appointment {\n        float: left;\n        /*width: 40%;*/\n        width: 49.9%;\n    }\n.tommorow-appointment .appointment-heading {\n        background: -webkit-linear-gradient(top, #f0fedd 0%, #ddfeaf 72%);\n        border-right: none;\n        width: 85%;\n        display: inline-block;\n    }\n.tommorow-appointment .today-appointment-list-div {\n        border-right: none;\n    }\n.tommorow-appointment .today-appointment-ul li {\n        background: -webkit-linear-gradient(top, #f0fedd 0%, #ddfeaf 72%);\n    /*border:none;\n    box-shadow: 0 0 5px 0px rgba(0,0,0, 0.3);*/\n}\n.today-appointment-ul li:first-child {\n    width: 40px;\n    padding: 10px 9px;\n    text-align: center;\n}\n.today-appointment-ul li:nth-child(2) {\n    width: 225px;\n    overflow: overlay;\n}\n.today-appointment-ul li:nth-child(3) {\n    /*width: 85px;*/\n    width: 77px;\n}\n.today-appointment-ul li:nth-child(4) {\n    /*width: 85px;*/\n    width: 108px;\n}\n.tommorow-appointment .today-appointment-ul li:last-child {\n    /*width: 135px;*/\n    width: 87px;\n}\n.add-new {\n    width: 15.1%;\n    display: inline-block;\n    text-align: center;\n    font-size: 25px;\n    color: #fff;\n    margin: -3px;\n    background-color: #ffc000;\n    border: 2px solid #0b2966;\n    /*height: 57px;*/\n    height: 58px;\n    padding: 0;\n    /*    line-height: 2.2;*/\n    line-height: 2.3;\n    border-top: none;\n    border-right: none;\n}\n/*modal css */\n.pat-reg-modal-form {\n    width: 600px!important;\n    right: 60px!important;\n}\n.regis-modal-body .input-btn {\n    width: 100%;\n    padding: 8px;\n}\n.ok-btn {\n    background-color: transparent;\n    border: 1px solid #002160;\n    width: 50px;\n    margin-left: -15px;\n}\n.reg-btn {\n    background-color: rgb(161, 210, 83);\n    color: #fff;\n    width: 100%;\n    border: rgb(150, 195, 78);\n}\n.reg-btn.cancel {\n    background-color: #ffc000!important;\n    border: #ffc000!important;\n}\n.pat-app-modal-form {\n    width: 600px!important;\n    right: 60px!important;\n}\n.regis-modal-body label {\n    height: 35px;\n    padding: 9px;\n}\n.name-cstm-input {\n    border-radius: 0;\n    border: none;\n    background-color: #00b0f0;\n    color: #fff;\n    font-size: 20px;\n    text-align: center;\n    padding: 10px;\n}\n.appointments {\n    padding: 0;\n}\n.appoint-wrap {\n    max-width: 100%!important;\n}\n.vl {\n    border-right: 2px solid #000;\n    height: 511px;\n    width: 0px;\n    float: left;\n}\n.reg-btn-p {\n    margin-top: 4px;\n}\n.blue {\n    background: -webkit-linear-gradient(top, #f2f6fa 0%, #cddbec 72%)!important;\n}\n.yellow {\n    background: -webkit-linear-gradient(top, #f0fedd 0%, #ddfeaf 72%)!important;\n}\n.green {\n    background: -webkit-linear-gradient(top, #f0fedd 0%, #bdfdbf 72%)!important;\n}\n.red {\n    background: -webkit-linear-gradient(top, #f0fedd 0%, #ffb59e 72%)!important;\n}\n.orange {\n    background: -webkit-linear-gradient(top, #f0fedd 0%, #ffdebc 72%)!important;\n}\n.camera-div {\n    /*height:470px;*/\n    height: 600px;\n    padding: 10px;\n}\n.camera-btn {\n    text-align: center;\n    padding: 15px;\n    margin-top: 55px;\n}\n.upload-image {\n    padding: 3px;\n    text-align: center;\n}\n.upload-image a {\n    text-decoration: none;\n    color: #333;\n    position: absolute;\n    top: -8px;\n    right: 10px;\n}\n.upload-image i {\n    font-size: 16px;\n    padding: 10px;\n    background-color: #01b0f0;\n    border-radius: 5px;\n}\n.upload-image .img-thumbnail {\n    /*padding: 5px;\n    height:70px;\n    width:100%;*/\n    padding: 5px;\n    height: 35px;\n    width: 35px;\n}\n.p-upload {\n    margin-bottom: 11px;\n}\n.close-thik:after {\n    content: '\\2716';\n}\n.reg-cancel-btn {\n    width: 77%;\n    margin: auto;\n}\n.search-main-div {\n    width: 83%;\n    margin: auto;\n}\n.search-inner {\n    width: 100%;\n}\n.search-inner ul {\n    width: 100%;\n}\n/*.search-inner-ul li\n{\n    text-align: center;\n    }*/\n.search-inner-ul li:first-child {\n        text-align: center;\n    }\n.search-inner-ul li:nth-child(3) {\n        text-align: center;\n    }\n.search-inner-ul li:nth-child(4) {\n        text-align: center;\n    }\n.search-inner-ul li:nth-child(5) {\n        text-align: center;\n        width: 250px;\n    }\n.search-inner-ul li:nth-child(6) {\n        text-align: center;\n    }\n.search-inner-ul li:nth-child(7) {\n        text-align: center;\n    }\n.search-patient {\n        float: left;\n        width: 90%;\n        position: relative;\n    }\n.p-search-fa {\n        position: absolute;\n        top: 12px;\n        right: 10px;\n    }\n.p-search-btn {\n        float: right;\n        position: relative;\n        top: 28px;\n        width: 9%;\n    }\n.p-search-btn-in {\n        width: 100%;\n        padding: 9px;\n        border-radius: 6px;\n        background: #fff;\n        border: 1px solid #000;\n    }\n.time-select {\n        width: 800px!important;\n        right: 35%!important;\n    }\n.time-slots {\n        float: left;\n        width: 100%;\n        padding: 10px;\n        margin-bottom: 20px;\n        /*border: 1px solid #eee;*/\n    }\n.time-ul {\n        width: 100%;\n        float: left;\n        margin: 0px;\n        padding: 0;\n        text-align: center;\n        min-height: 90px;\n    }\n.time-ul>li {\n        float: left;\n        width: 16%;\n    }\n.time-ul>li>a {\n        padding: 6px;\n        border: 1px solid #333;\n        display: block;\n        margin: 5px 5px;\n        background-color: #a8e8ff;\n        /*background-color: #00b0f0;*/\n        color: #000;\n    }\n.time-ul>li>a:hover {\n        text-decoration: none;\n        background-color: #000!important;\n        color: #fff!important;\n    }\n.already-selected {\n        background-color: #000!important;\n        color: #fff!important;\n    }\n.blue-slot {\n        background-color: #a8e8ff!important;\n    }\n.grey-slot {\n        background-color: rgba(0, 0, 0, .2)!important;\n    }\n.select-doctor {\n        font-size: 16px;\n        color: #fff;\n        width: 100%;\n        cursor: pointer;\n        background-color: #01b0f0;\n        border-radius: 0px;\n        border: none;\n        position: relative;\n    }\n.cstm-caret {\n        display: inline-block;\n        width: 0;\n        cursor: pointer;\n        position: absolute;\n        height: 0;\n        margin-left: 4px;\n        color: #000;\n        top: 15px;\n        background-color: #01b0f0;\n        z-index: 9;\n        right: 20px;\n        margin-bottom: 9px;\n        vertical-align: middle;\n        border-top: 12px dashed;\n        border-right: 10px solid transparent;\n        border-left: 10px solid transparent;\n    }\n.select-opt {\n        border-bottom: 1px #ccc dashed!important;\n        padding: 10px!important;\n        color: #00b0f0;\n        border-radius: 0;\n        background-color: #fff;\n        font-size: 20px;\n    }\n.pickup-time {\n        margin-bottom: 10px;\n        padding: 0;\n        /*width: 16%;*/\n        /*border: 2px solid #01b0f0;*/\n    }\n.btn-success {\n        color: #fff;\n        background-color: #01b0f0;\n        border: 1px solid #bdbdbd;\n        border-radius: 10px;\n        padding: 2px 12px;\n        margin-bottom: 8px;\n    }\n.btn-success:active:hover {\n        color: #fff;\n        background-color: #01b0f0;\n        border: 1px solid #bdbdbd;\n        border-radius: 10px;\n        padding: 2px 12px;\n        margin-bottom: 8px;\n    }\nfieldset.fieldset-preset {\n        min-width: unset;\n        padding: 0 10px;\n        border: 1px solid rgba(56, 94, 138, 1);\n    }\nlegend.legend-preset {\n        width: 55%;\n        border-bottom: none;\n        text-align: center;\n        margin-bottom: 10px;\n        font-size: 15px;\n    }\n.tags-listing-div {\n        width: 30%;\n        margin: auto;\n        padding: 0 15px;\n        float: none;\n    }\n/*14-november*/\n.cnsulted-doc-head {\n        position: relative;\n        top: 15px;\n    }\n.cnsulted-doc-head h3 {\n        font-size: 23px;\n    }\n/*14-november*/\n.cstm-calender-opt, .cstm-calender-opt:hover{\n        color: #000;\n        text-decoration: none;\n    }\n.cnsulted-doc-head h3 {\n        font-size: 28px;\n    }\n.cstm-column{\n        padding: 0;\n    }\n.cstm-drpdown-cnsulted-doc[_ngcontent-c4] select[_ngcontent-c4] {\n        font-size: 20px;\n    }\n.cstm-caret-big[_ngcontent-c4] {\n        top:19px;\n    }\n.p-search-btn-in{\n        -webkit-transition: 300ms;\n        transition: 300ms;\n        width:50px;\n    }\n.p-search-btn-in:hover{\n        background-color:#98C74F;\n        border-color:#98C74F;\n        color:#fff;\n        -webkit-transition:300ms;\n        transition:300ms; \n    }\nh4.dt{\n        color:#416bb1;\n    }\nh4.dt > span{\n        color:#000;\n    }\n.table-bordered > tbody > tr > td{\n        border-color:#000;\n    }\n.table-bordered > tbody > tr > td.hding-tble{\n        border-color:#fff;\n        background-color:#000;\n        color:#fff;\n    }\n.table-bordered > tbody > tr > td.hding-total{\n        background-color:#e8e8e8;\n        color:#71A0DC;\n        border:#fff;\n    }\n.table-bordered > tbody > tr > td.data-mn{\n        border-color:#fff;\n        background-color:#DAE5F1;\n        font-size: 17px;\n    }\n.table-bordered > tbody > tr > td.data-mn-2{\n        border-color:#fff;\n        background-color:#D6E3BC;\n        font-size: 17px;\n    }\n.table-bordered > tbody > tr > td.hding-total-2{\n        background-color:#e8e8e8;\n        color:#09B256;\n        border:#fff;\n    }\n.footer-cstm{\n        /*padding:15px 0px;*/\n        /*padding-top: 0px;*/\n        float: left;\n        width: 100%;\n        background: #efefef;\n        position: fixed;\n        z-index: 99;\n        bottom: 0;\n        left:0;\n        border-top: 1px solid #a9a8a8;\n    }\n.tble-one{\n        position: relative;\n        min-height:290px;\n        max-height:290px;\n        overflow-y: scroll;\n        overflow-x: hidden; \n\n    }\n.heading-1{\n     padding: 10px;\n     color: #fff;\n     background: #000;\n     padding-bottom:0px;\n }\n.fix-hd{\n    border-top:1px solid #fff;\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n.heading-1 h4{\n    margin-bottom: 15px;\n}\n.brdr-right{\n    border-right: 1px solid #fff;\n}\n.brdr-both{\n    border-right:1px solid #fff;\n    border-left:1px solid #fff;   \n}\n.th-back{\n    background-color: #000;\n    color:#fff;\n    text-align: center;\n}\n.table-row td{\n    border:1px solid #fff;\n}\n.table-row {\n    background: #DAE5F1;\n}\n.table {\n    border: 1px solid #eee;\n}\n.history {\n    background-color: transparent;\n}\n.table-row td, .table-head th {\n    border-top: none;\n    padding: 8px 10px;\n}\n.select-duration {\n    padding-bottom: 30px;\n}\n.select-duration h3 {\n    margin: 0;\n}\n.ok-btn {\n    background-color: transparent;\n    border: 1px solid #002160;\n    width: 50px;\n}\ntbody {\n    display: block;\n    width:98%;\n    /*height: 250px;*/\n    /*overflow: auto;*/\n}\nthead, tbody tr {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n    /* even columns width , fix width of table too*/\n}\nthead {\n    width: calc( 100% - 1em)/* scrollbar is average 1em/16px width, remove it from thead width */\n}\n.btn-custom {\n    color: #002160;\n    position: relative;\n    padding: 6.5px 17px;\n    border-radius: 4px;\n    font-size: 14px;\n}\n.ipdbook {\n    padding: 0px;\n}\n.select-duration{\n    padding-bottom: 15px;\n}\n.tab-2{\n    background-color: rgb(214,227,188);\n}\n.table-wrap{\n    min-height: 340px;\n    max-height: 340px;\n    overflow-y: scroll;\n    overflow-x:hidden;\n    margin-top:-20px;\n}\n.table-wrap table{\n    width: 650px;\n    table-layout: fixed;\n}\n.cstm-tab-2{\n    background-color: #000;\n    width:100%;\n    padding: 10px;\n    color:#fff;\n    height: 50px;\n    text-align: center;\n    line-height: 2.3;\n}\n.cstm-tab-st{\n    background-color: #efefef;\n    width:100%;\n    padding: 10px;\n    color:#000;\n    height: 50px;\n    text-align: center;\n    border:1px solid #000;\n    line-height: 2.3;\n}\n.cstm-my-tab li a{\n    font-size: 12px;\n    padding:8px 10px; \n}\n.cstm-my-tab li.active a{\n    background-color: #000;\n    color:#fff;\n}\n.tbod-max-w tr{\n    font-size: 12px;\n}\n.tbod-max-w tr:hover{\n    cursor: pointer;\n    background-color: #002060!important;\n    color: #fff!important;\n    border-color: transparent;\n    -webkit-transition: all 0.3s ease 0s;\n    transition: all 0.3s ease 0s;\n    text-shadow: 0px 0px 20px #fff;\n    font-weight: bolder!important; \n    font-size: 14px!important;\n}\n.dashboard-header-two{\n    margin:10px 0px!important; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-six-layout/dashboarddiagnostic/dashboarddiagnostic.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\" class=\"loader-box\">\n    <img src=\"./assets/imgs/load.gif\"/>\n</div>\n<div class=\"dashboard-sec\">\n    <div class=\"dashboard-prescription\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <div class=\"\">\n                <div class=\"\">\n                        <div class=\"col-lg-8\">\n                            <div class=\"inner-tab\">\n                                <ul class=\"nav nav-tabs cstm-my-tab\" role=\"tablist\">\n                                    <li role=\"presentation\" [ngClass]=\"(doctor._id == consultationDoctor)?'active':''\" *ngFor=\"let doctor of dataDoctors;let i =index\"><a href=\"#pd\" aria-controls=\"total\" role=\"tab\" data-toggle=\"tab\" (click)=\"findPatientsForDiagnostics(doctor._id)\"> <span *ngIf=\"i!=dataDoctors.length-1\">Dr.</span> {{getDoctorFirstName(doctor.first_name)}}</a></li>\n                                    <!-- <li role=\"presentation\" class=\"\" *ngFor=\"let doctor of doctorsOfSameClinic\"><a href=\"#pd\" aria-controls=\"total\" role=\"tab\" data-toggle=\"tab\" (click)=\"findPatientsForDiagnostics(doctor._id)\"> Dr. {{getDoctorFirstName(doctor.first_name)}}</a></li> -->\n                                </ul>\n                            </div>\n                        </div>\n                    <div class=\"col-lg-4\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search by Mobile or Patient name\" (input)=\"search()\" [(ngModel)]=\"searchInput\" >\n                        </div>\n                    </div>\n                    <!-- <div class=\"col-lg-2\">\n                        <div class=\"main-date\">\n                            <h4 class=\"dt\">\n                                {{day}} {{month}} , {{year}}\n                                <small>\n                                    {{hoursIST}}:{{getMin()}}\n                                </small>\n                            </h4>\n                        </div>\n                    </div> -->\n                </div>\n                <div class=\"patient-panel\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-sm-6 col-xs-12 tb-1\">\n                            <table matSort (matSortChange)=\"sortData($event)\" cellpadding=\"20px\" class=\"table cstm-table\">\n                                <thead class=\"table-head\">\n                                    <tr>\n                                        <th class=\"th-back \" colspan=\"2\">\n                                        <div class=\"th-pd\"> <h5>WAITING ORDERS ({{waitingOrders.length}})</h5\n                                        ></div></th>\n                                    </tr>\n                                  <tr>\n                                    <th mat-sort-header=\"prescription_id\" class=\"th-back brdr-right\"><h5>PRESCRIPTION-ID</h5></th>\n                                    <th mat-sort-header=\"registration\" class=\"th-back\"><h5>PATIENT NAME</h5></th>\n                                  </tr>\n                               </thead>\n                            </table> \n                            <div class=\"table-wrap\">\n                                <table>\n                                    <tbody class=\"tbod-max-w\">\n                                        <tr class=\"table-row\" *ngFor=\"let item of sortedData; let i= index;\" >\n                                            <td class=\"text-center\" (click)=\"goForPharmacy(item)\">{{item.prescription_id}}</td> \n                                            <td class=\"text-center\" (click)=\"goForPharmacy(item)\">{{item.registration.pateintName}}</td>\n                                        </tr>\n                                    </tbody> \n                                </table>  \n                            </div>\n                        </div>\n                        <div class=\"col-md-6 col-sm-6 col-xs-12 tb-1\">                           \n                                <table matSort (matSortChange)=\"sortData1($event)\" cellpadding=\"20px\" class=\"table cstm-table\">\n                                    <thead class=\"table-head\">\n                                        <tr>\n                                            <th class=\"th-back \" colspan=\"3\">\n                                            <div class=\"th-pd\"> <h5>SALES ORDERS ({{waitingOrders1.length}})</h5></div></th>\n                                        </tr>\n                                      <tr>\n                                        <th mat-sort-header=\"prescription_id\" class=\"th-back brdr-right\"><h5>PRESCRIPTION-ID</h5></th>\n                                        <th mat-sort-header=\"registration\" class=\"th-back brdr-right\"><h5>PATIENT NAME</h5></th>\n                                        <th mat-sort-header=\"pharmacy_sales\" class=\"th-back\"><h5> SALES(Rs.)</h5></th>\n                                      </tr>\n                                   </thead>\n                                </table>  \n                                <div class=\"table-wrap\">\n                                    <table>\n                                          <tbody class=\"tbod-max-w\">\n                                          <tr class=\"table-row tab-2\" *ngFor=\"let item of sortedData1; let i= index;\" >\n                                            <td class=\"text-center\" (click)=\"receivedPayment(item)\">{{item.prescription_id}}</td> \n                                            <td class=\"text-center\" (click)=\"receivedPayment(item)\">{{item.registration.pateintName}}</td>\n                                            <td class=\"text-center\" (click)=\"receivedPayment(item)\">{{item.investigation_cost}}</td>\n                                          </tr>\n                                          </tbody>\n                                    </table>  \n                            </div>                     \n                        </div>\n                    </div>\n                </div>\n                <div class=\"footer-cstm\">\n                    <!-- <div class=\"row\"> -->\n                    <div class=\"col-lg-6 text-center\" *ngIf=\"!loading\">\n                        <div class=\"btn red-btn div_btn\">\n                            TODAY'S SALES : Rs.{{getData(totalSales)}}\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6 text-center\" *ngIf=\"!loading\">\n                        <!-- <div class=\"btn green-btn\">\n                            TODAY'S PROFIT : Rs.{{getData(totalSales)}}\n                        </div> -->\n                        <div class=\"btn green-btn div_btn\">\n                            SALE ORDER: {{totalSalesCount}}\n                        </div>\n                    </div>\n                    <!--  </div> -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-six-layout/dashboarddiagnostic/dashboarddiagnostic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboarddiagnosticComponent; });
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









var DashboarddiagnosticComponent = /** @class */ (function () {
    function DashboarddiagnosticComponent(formBuilder, toastr, userService, router, dialog) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this.waitingOrders = [];
        this.waitingOrders1 = [];
    }
    DashboarddiagnosticComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.diagnosticsData = JSON.parse(localStorage['smartDiagnosticsDetails']);
        console.log(this.diagnosticsData);
        this.consultationDoctor = "";
        if (localStorage.getItem('dashboardDiagnosticsSelectedDr')) {
            this.consultationDoctor = localStorage.getItem('dashboardDiagnosticsSelectedDr');
        }
        this.dataDoctors = [];
        this.waitingOrders = [];
        this.waitingOrders1 = [];
        this.waitingOrdersBackup = [];
        this.GetSmartDiagnosticsDataAfterLogin();
        this.socket = __WEBPACK_IMPORTED_MODULE_8_socket_io_client__(__WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__["a" /* environment */].socket);
        this.socket.emit('room join', {
            room_id: this.diagnosticsData.dataSmartDiagnostics._id.toString()
        });
        this.socket.on('registrationBooked', function (msg) {
            _this.ngOnInit();
        });
        this.totalSales = 0;
        this.totalSalesCount = 0;
    };
    DashboarddiagnosticComponent.prototype.ngOnDestroy = function () {
        this.socket.emit('room leave', {
            room_id: this.diagnosticsData.dataSmartDiagnostics._id.toString()
        });
    };
    DashboarddiagnosticComponent.prototype.GetSmartDiagnosticsDataAfterLogin = function () {
        var _this = this;
        var object = {
            smart_diagnostics_id: this.diagnosticsData.dataSmartDiagnostics._id
        };
        this.loading = true;
        this.userService.GetSmartDiagnosticsDataAfterLogin(object).subscribe(function (data) {
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
                _this.findPatientsForDiagnostics(_this.consultationDoctor);
            }
            else {
                for (var i = 0; i < _this.dataDoctors.length; i++) {
                    if (_this.dataDoctors[i].type_of_doctor == "admin_doctor") {
                        if (_this.consultationDoctor == '') {
                            _this.consultationDoctor = _this.dataDoctors[i]._id;
                        }
                        _this.dataDoctors.push({
                            _id: 0,
                            first_name: "Other"
                        });
                        _this.findPatientsForDiagnostics(_this.consultationDoctor);
                        break;
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboarddiagnosticComponent.prototype.findPatientsForDiagnostics = function (id) {
        var _this = this;
        this.consultationDoctor = id;
        localStorage.setItem('dashboardDiagnosticsSelectedDr', this.consultationDoctor);
        if (id != 0) {
            this.waitingOrders = [];
            var ob = {
                doctor_id: id,
                smart_diagnostics_id: this.diagnosticsData.dataSmartDiagnostics._id
            };
            this.userService.FindPatientsForDiagnostics(ob).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.waitingOrders = data.data;
                    _this.waitingOrders1 = data.data1;
                    _this.waitingOrdersBackup = data.data;
                    _this.totalSales = 0;
                    if (data.data2.length > 0) {
                        for (var i = 0; i < data.data2.length; i++) {
                            _this.waitingOrders1.push({
                                prescription_id: "Other sale",
                                id: data.data2[i].id,
                                total_amount: data.data2[i].total_amount,
                                investigation_cost: data.data2[i].total_amount,
                                registration: {
                                    pateintName: data.data2[i].patient_name
                                }
                            });
                        }
                    }
                    if (data.totalSalesSales.length > 0) {
                        _this.totalSales = data.totalSalesSales[0].totalSalesSales;
                    }
                    _this.totalSalesCount = data.totalSalesCount;
                    Math.ceil(_this.totalSales);
                    _this.sortedData = _this.waitingOrders.slice();
                    _this.sortedData1 = _this.waitingOrders1.slice();
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.findWalkinOtherPatientsForDiagnostics();
        }
    };
    DashboarddiagnosticComponent.prototype.deleteSearch = function () {
        this.searchInput = null;
    };
    DashboarddiagnosticComponent.prototype.sortData = function (sort) {
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
                case 'total_amount': return compare(a.total_amount, b.total_amount, isAsc);
                default: return 0;
            }
        });
    };
    DashboarddiagnosticComponent.prototype.sortData1 = function (sort) {
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
                case 'total_amount': return compare(a.total_amount, b.total_amount, isAsc);
                default: return 0;
            }
        });
    };
    DashboarddiagnosticComponent.prototype.goForPharmacy = function (data) {
        localStorage['patientDataForDiagnostics'] = JSON.stringify(data);
        this.router.navigate(['header-six-layout/sales-by-diagnostics']);
    };
    DashboarddiagnosticComponent.prototype.getDoctorFirstName = function (doctor) {
        var doc = doctor.split(" ");
        return doc[0];
    };
    DashboarddiagnosticComponent.prototype.search = function () {
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
    DashboarddiagnosticComponent.prototype.getData = function (data) {
        if (data) {
            if (data % 1 != 0) {
                return data.toFixed(2);
            }
            else {
                return data;
            }
        }
    };
    DashboarddiagnosticComponent.prototype.receivedPayment = function (activity) {
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
                _this.userService.ChangeSalesBookStatusDiagnostics(ob).subscribe(function (data) {
                    console.log(data);
                    if (data.response == true) {
                        _this.findPatientsForDiagnostics(_this.consultationDoctor);
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
    DashboarddiagnosticComponent.prototype.findWalkinOtherPatientsForDiagnostics = function () {
        var _this = this;
        this.waitingOrders = [];
        var ob = {
            smart_diagnostics_id: this.diagnosticsData.dataSmartDiagnostics._id
        };
        this.userService.findWalkinOtherPatientsForDiagnostics(ob).subscribe(function (data) {
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
                            total_amount: data.data[i].total_amount,
                            investigation_cost: data.data[i].total_amount,
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
    DashboarddiagnosticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboarddiagnostic',
            template: __webpack_require__("../../../../../src/app/header-six-layout/dashboarddiagnostic/dashboarddiagnostic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-six-layout/dashboarddiagnostic/dashboarddiagnostic.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatDialog */]])
    ], DashboarddiagnosticComponent);
    return DashboarddiagnosticComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/header-six-layout/dashboarddiagnostic/dashboarddiagnostic.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboarddiagnosticModule", function() { return DashboarddiagnosticModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboarddiagnostic_routing_module__ = __webpack_require__("../../../../../src/app/header-six-layout/dashboarddiagnostic/dashboarddiagnostic-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboarddiagnostic_component__ = __webpack_require__("../../../../../src/app/header-six-layout/dashboarddiagnostic/dashboarddiagnostic.component.ts");
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








var DashboarddiagnosticModule = /** @class */ (function () {
    function DashboarddiagnosticModule() {
    }
    DashboarddiagnosticModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__dashboarddiagnostic_routing_module__["a" /* DashboarddiagnosticRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["c" /* MatDialogModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboarddiagnostic_component__["a" /* DashboarddiagnosticComponent */]]
        })
    ], DashboarddiagnosticModule);
    return DashboarddiagnosticModule;
}());



/***/ })

});
//# sourceMappingURL=dashboarddiagnostic.module.chunk.js.map