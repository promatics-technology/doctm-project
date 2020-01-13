webpackJsonp(["dashboard-prescription.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-prescription/dashboard-prescription-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPrescriptionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_prescription_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-prescription/dashboard-prescription.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_prescription_component__["a" /* DashboardPrescriptionComponent */],
    }
];
var DashboardPrescriptionRoutingModule = /** @class */ (function () {
    function DashboardPrescriptionRoutingModule() {
    }
    DashboardPrescriptionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardPrescriptionRoutingModule);
    return DashboardPrescriptionRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-prescription/dashboard-prescription.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pad-list>li.half-li {\n    width: 33.33%;\n    float: left;\n}\n.green{\n    color: green;\n}\n.pad-list>li>div {\n    text-overflow: unset;\n    overflow: unset;\n    white-space: normal; \n    min-height: 57px;\n    padding: 5px 2px;\n    display: table;\n    height: 65px;\n    /*word-break: break-all;*/\n}\n.pad-list .medication-li div {\n    display: table;\n    width: 100%;\n    min-height: 55px;\n}\n.red-btn.my-pad {\n    padding: 15px 15px;\n}\nli.medication-li {\n    width: 99%;\n}\nspan.diseasen-name {\n    display: table-cell;\n    vertical-align: middle;\n}\nspan.medication-transform {\n    font-size: 18px;\n    width: 100%;\n    display: table-cell;\n    vertical-align: middle;\n}\n.pad-header>.blue-btn {\n    padding: 0px 1px;\n    border-right: 0;\n}\n.blue-btn .btn-custom {\n    padding: 16px 30px;\n    border-radius: 0;\n    min-width: 100%;\n    -webkit-box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12);\n            box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12);\n}\n.height-50 {\n    min-height: 144px;\n}\n.vacciSchedule-div>ul>li>div.active,\n.follow-ul>li.active,\n.frequency-ul li.active-cel,\n.duration-ul li.active-cel,\n.special-ul li.active-cel,\n.precond-ul>li.active-cel,\n.special-ul.hindi li.active-cel, \n.combined_frequency > li.active-cel, \n.combined_duration > li.active-cel,\n.combined_instruc > li.active-cel,\n.combined_inject > li.active-cel,\n.combined_instruc.combined_drop > li.active-cel{\n    background-color: #000;\n    color: #fff;\n    background: #000;\n}\n.sphere-ul>li.active,\n.sphere-ul.right>li.active {\n    background-color: #01b0f0;\n}\n.flex-inner .table {\n    margin-bottom: 0;\n}\n.flex-inner ol {\n    margin-bottom: 0;\n}\n.flex-inner ol>div {\n    width: 100%;\n    float: left;\n    margin-left: -10px;\n    font-weight: bold;\n    font-size: 12px;\n}\n.flex-inner ol>li {\n    font-size: 12px;\n    line-height: 15px;\n    word-break: break-all;\n    padding-right: 15px;\n    position: relative;\n}\n/*.flex-inner .medicationol > li{\n    margin-bottom: 8px;\n    }*/\n.flex-inner .followol>li {\n        width: 100%;\n    }\ninput.txt50 {\n        width: 100px;\n    }\n@media (min-width: 768px) {\n        #eyeModal .modal-dialog {\n            width: 650px;\n        }\n    }\n.help-note {\n        font-size: 10px;\n        font-style: italic;\n    }\n.selected_preset {\n        width: 100%;\n        float: left;\n    }\n.only-text {\n        padding: 8px 5px;\n        font-size: 12px;\n        border: 1px solid rgba(198, 217, 241, 1);\n    }\n.medication-modal-body .medication-form>.form-group>div.only-text {\n        border: 1px solid rgba(198, 217, 241, 1);\n    }\n.selected_preset .medication-form>.duration>div {\n        color: #222;\n    }\n.medic-info {\n        border-top: 0;\n    }\n.active.lightblue-btn {\n        background-color: #000;\n        color: #fff;\n    }\n.combined_modal .modal-dialog {\n        width: 830px;\n    }\n.combined_flex {\n        width: 100%;\n        float: left;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n        flex-direction: row;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n        justify-content: space-between;\n    }\n.combined_flex>div {\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 33.33%;\n        flex: 1 1 33.33%;\n        margin: 0 2px;\n        border: 1px solid #b9b9b9;\n    }\n.combined_heading {\n        width: 100%;\n        float: left;\n        color: #fff;\n        margin: 0;\n        padding: 5px 0;\n        text-align: center;\n        background-color: #00b0f0;\n    }\n.combined_frequency,\n    .combined_duration,\n    .combined_instruc,\n    .combined_inject {\n        width: 100%;\n        float: left;\n        margin: 0;\n        padding: 5px 0;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n        flex-direction: row;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        list-style-type: none;\n    }\n.combined_frequency>li,\n    .combined_duration>li,\n    .combined_instruc>li,\n    .combined_inject>li {\n        width: 70px;\n        height: 70px;\n        margin: 3px;\n        cursor: pointer;\n        padding: 0 15px;\n        border-radius: 10px;\n        border: 1px solid #777;\n        text-align: center;\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n        flex: 1 1 auto;\n        display: -webkit-box;\n        - display: flex;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n    }\n.combined_flex>div ul>li.active {\n        background-color: #000;\n        color: #fff;\n    }\n.combined_duration>li {\n        height: 32px;\n    }\n.combined_flex>div.frquency_cmbnd ul {\n        background-color: #F2F2F2;\n    }\n.combined_flex>div.duration_cmbnd ul {\n        background-color: #DAEDF4;\n    }\n.combined_flex>div.instr_cmbnd ul.combined_instruc {\n        background-color: #EAF1DD;\n    }\n.combined_flex>div.instr_cmbnd ul.combined_inject {\n        background-color: #FCEAD9;\n    }\n.combined_flex>div.instr_cmbnd ul.combined_drop {\n        background-color: #FCEAD9;\n    }\n.combined_flex>div.duration_cmbnd {\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 20%;\n        flex: 1 1 20%;\n    }\n.combined_flex>div.instr_cmbnd .combined_inject {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }\n.combined_flex>div.instr_cmbnd .combined_inject>li {\n        width: 100%;\n        float: left;\n        font-size: 20px;\n        height: 62px;\n    }\n.combined_flex>div.instr_cmbnd .combined_instruc>li {\n        width: 120px;\n        height: 40px;\n    }\n#combinedModal2 .combined_flex>div.instr_cmbnd .combined_instruc>li {\n        height: 90px;\n    }\n.combined_flex>div.instr_cmbnd .combined_drop>li {\n        width: 50px;\n        height: 62px;\n    }\n.combined_flex>div.instr_cmbnd .combined_dosage>li {\n        width: 50px;\n        height: 39.5px;\n    }\n.btn_green {\n        font-size: 18px;\n        color: #fff;\n        background-color: #8BD053;\n    }\np.help-note {\n        margin: 0 0 1px;\n    }\n.btn.sm_green-btn.lang-btn {\n        background: -webkit-gradient(linear, left bottom, left top, from(rgb(201, 181, 232)), color-stop(rgb(217, 203, 238)), to(rgb(240, 234, 249)));\n        background: linear-gradient(to top, rgb(201, 181, 232), rgb(217, 203, 238), rgb(240, 234, 249));\n        background: -o-linear-gradient(to top, rgb(201, 181, 232), rgb(217, 203, 238), rgb(240, 234, 249));\n        border:1px solid rgb(201, 181, 232)\n    }\n.btn.sm_green-btn.lang-btn.active, .btn.sm_green-btn.lang-btn:focus {\n        background: #000;\n        color: #fff;\n    }\n/*.precond-ul>li.active-cel {\n    background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.5), rgba(0,0,0,0.1));\n    }*/\nfieldset.fieldset-preset {\n        min-width: unset;\n        padding: 0 10px;\n        border: 1px solid rgba(56, 94, 138, 1);\n    }\nlegend.legend-preset {\n        width: 20%;\n        border-bottom: none;\n        text-align: center;\n        margin-bottom: 10px;\n    }\n.tags-listing-div .fieldset-preset .tags-listing {\n        width: 100%;\n        float: left;\n        overflow: auto;\n        max-height: 280px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        display: -moz-flex;\n        display: -o-flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        list-style-type: none;\n        padding: 0px;\n        border-radius: 3px;\n    }\n.li-blocked span {\n        font-weight: normal;\n    }\n#translated_div .modal-dialog .modal-header {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        display: -moz-flex;\n        display: -o-flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: space-evenly;\n            -ms-flex-pack: space-evenly;\n                justify-content: space-evenly;\n    }\n#translated_div .modal-dialog .modal-header>* {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 1 auto;\n                flex: 1 1 auto;\n    }\n.padview-header {\n        width: 100%;\n        float: left;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        display: -moz-flex;\n        display: -o-flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        -webkit-box-align: start;\n            -ms-flex-align: start;\n                align-items: flex-start;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n    }\n.pad-view-flx {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 1 50%;\n                flex: 1 1 50%;\n        -webkit-flex: 1 1 50%;\n        -moz-flex: 1 1 50%;\n        -o-flex: 1 1 50%;\n    }\n#previewModal .padview-bodyright {\n        width: 100%;\n        float: left;\n        padding: 9.5px 10px;\n        margin-bottom: 10px;\n        border: 2px solid #333;\n        border-right: 0;\n    }\n.reportImg img{\n        display: block;\n        max-width: 400px;\n        height: 400px;\n        -o-object-fit: cover;\n           object-fit: cover;\n        text-align: center;\n        margin: 0 auto;\n        margin-top:5px;\n        margin-bottom:5px;\n    }\n.wrap{\n        width:95%;\n        max-height:450px;\n        min-height:450px; \n        overflow-x:hidden;\n        overflow-y: scroll; \n    }\n.camera-div img{\n        max-width: 550px;\n    }\n.visit-status{\n        color: #002160;\n        font-weight: bold;\n    }\n.patient-date {\n        color: #bbb;\n    }\n.patient-textwrap{\n        -webkit-box-align: normal!important;\n            -ms-flex-align: normal!important;\n                align-items: normal!important;\n    }\n.patient-address {\n        padding-right: 0px;\n    }\n#webcamModal .modal-title, #uploadedPrescriptionModal .modal-title{\n        display: inline-block;\n    }\n.cstm-font{\n        font-size: 16px;\n        color: #1565C0;\n    }\n.cstm-font-1{\n        font-size: 12px;\n    }\n.custom-modal{\n        position:fixed;\n        width:100%;\n        height: 100%;\n        background: rgba(0,0,0,0.65);\n        z-index:999;\n    }\n.custom-modal-inner{\n        border-radius: 5px;\n        margin: 40px auto;\n        width: 48.7%;\n        height: 86.5%;\n        background: #fff;\n        padding: 23px 18px;\n        position: relative;\n        top: 5px;\n        right: 8px;\n        font-size: 15px;\n        cursor: pointer;\n    }\n.custom-modal-inner img{\n        width:695px;\n        height:515px; \n    }\n.dlt{\n       /* position: absolute;\n        top:5px;\n        right:8px;\n        cursor: pointer;\n        font-size:14px; \n        z-index: 999;*/\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-prescription/dashboard-prescription.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"dashboard-sec\">\n\t<div class=\"dashboard-prescription\">\n\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\n\t\t\t<div class=\"dashboard-panel\">\n\t\t\t\t<div class=\"dashboard-perscpt\">\n\t\t\t\t\t<div class=\"col-lg-5 text-center\">\n\t\t\t\t\t\t<h4>Registrations so far – {{dataRegistration?.length+dataDispensedPatients?.length}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"toatl-reg col-lg-3\" >\n\t\t\t\t\t\t<h5 class=\"blue-color\" style=\"    font-size: 17px;text-align: left\"> Appointments not registered so far - {{dataAppointment?.length}} </h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class =\"toatl-reg col-lg-2\"><b> <span class=\"cstm-font-1\">Avg. time per patient <span class=\"cstm-font\">{{avgTimePerPatient}} </span></span></b><span> min</span></div>\n\t\t\t\t\t<div class=\"main-date col-lg-2\">\n\t\t\t\t\t\t<h4> {{day}} {{month}} , {{year}} </h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"patient-panel\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"panel-wrap\">\n\t\t\t\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"panel panel-success\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\tDispensed Patients ({{dataDispensedPatients?.length}})\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-group pending_ul\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"\" *ngFor=\"let item of dataDispensedPatients; let i = index\" (click)=\"openPrescriptionPreview(item)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"patient-number\"><span> {{dataDispensedPatients?.length-i}}. </span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!item.registration.pateintPic\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pateintPicPath}}{{item.registration.pateintPic}}\" class=\"img-responsive\" *ngIf=\"item?.registration?.pateintPic\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"patient-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"patient-name\">{{item?.registration?.pateintName | uppercase}} \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-check green\" ></i> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"patient-gender\" *ngIf=\"!item?.registration?.age\">{{item?.registration?.age_in_years}} {{item?.registration?.gender}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"patient-gender\" *ngIf=\"item?.registration?.age\">{{item?.registration.age}} {{item?.registration?.gender}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"patient-duration\"><i> Duration: <span class=\"color-blue\"> {{item?.precription.minutes}} min {{item?.precription?.seconds}} sec </span> </i> </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--p class=\"patient-duration\"><i> Duration: <span class=\"color-blue\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.precription.minutes}} min {{item.precription.seconds}} sec </span> </i> </p-->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-7 col-sm-7 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"panel pending-patient-box\">\n\t\t\t\t\t\t\t\t\t<div class=\"pending-heading\"> Pending Patients ({{dataRegistration?.length}}) </div>\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t<!-- <ul class=\"list-group pending_ul\" dnd-sortable-container [sortableData]=\"dataRegistration\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-group pending_ul\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"\" *ngFor=\"let item of dataRegistration; let i = index\" dnd-sortable [sortableIndex]=\"i\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"\" *ngFor=\"let item of dataRegistration; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showPad(item,i,dataDispensedPatients?.length+1+i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"patient-number\"><span> {{dataDispensedPatients?.length+1+i}}. </span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!item?.pateintPic\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pateintPicPath}}{{item?.pateintPic}}\" class=\"img-responsive\" *ngIf=\"item?.pateintPic\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"patient-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"patient-textwrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-namedata\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"patient-name\">{{item?.pateintName | uppercase}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"item?.age_in_years\" class=\"patient-gender\">{{item?.age_in_years}}Y {{item?.gender}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!item?.age_in_years\" class=\"patient-gender\">{{item?.age_in_months}}M {{item?.gender}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"patient-date\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"visit-status\" *ngIf=\"item?.lastVisit?.status  == true\">Total Visits: {{item?.lastVisit?.count}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item?.lastVisit?.status  == true\"> Last Visit - {{item?.lastVisit?.time | date:'mediumDate' }}</span>  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item?.lastVisit?.status  == false\">New</span>  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"patient-address\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"consul-type\"> {{item?.type}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p> {{item?.location}} <br/> {{item?.city}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span dnd-sortable-handle><img src=\"./assets/imgs/grag_icon.png\" class=\"img-responsive\" /></span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n\t<div class=\"modal fade cus-preview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4 class=\"modal-title\"> Preview </h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline btn_updte\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\" id=\"previewModalPdf\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"presc-modal-body\">\n\t\t\t\t\t\t\t<div class=\"pad-view\">\n\t\t\t\t\t\t\t\t<div class=\"padview-header\">\n\t\t\t\t\t\t\t\t\t<div class=\"pad-view-flx col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\" style=\"margin-bottom: 0px;\">\n\t\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{doctorData?.first_name | uppercase}} </h1>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group qual\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"color-purple\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"checkOptionOfPad('Specialization')\">({{doctorData?.specialization}})</span><br>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"checkOptionOfPad('Qualifications')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let data of doctorData?.qualification;let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data?.value}} <span *ngIf=\"i!=doctorData?.qualification?.length-1\">,</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"checkOptionOfPad('registration_no')\"> Registration. <span class=\"color-purple\"> {{doctorData?.registration_no}} </span> </p>\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"checkOptionOfPad('Experience')\"><span class=\"color-purple\">{{experience}} years of experience</span> </p>\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"checkOptionOfPad('Professional_affiliation')\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"color-purple\" *ngFor=\"let pa of doctorData?.professional_affiliation;let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{pa.value}}<span *ngIf=\"i!=doctorData?.professional_affiliation?.length-1\">,</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"pad-view-flx col-lg-8\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"clinic-detail\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"clinic-name\" *ngIf=\"checkOptionOfPad('Clinic_name')\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_clinicName\"> {{doctorsDetails?.clinic_details.clinic_name}} </h1>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"checkOptionOfPad('Clinic_address')\" style=\"padding-top:0px;\">{{doctorsDetails?.clinic_details.address}}, {{doctorsDetails?.clinic_details.area}}, {{doctorsDetails.clinic_details.city}}, {{doctorsDetails?.clinic_details.state}}</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"li-cstm\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" *ngIf=\"checkOptionOfPad('Appointment_contacts')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"for-apt\"> For appointments </h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"doctorsDetails.clinic_details.landline\"> Tel: {{doctorsDetails?.clinic_details.std_code}}-{{doctorsDetails?.clinic_details.landline}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p> Mb: +91-{{doctorsDetails?.clinic_details?.mobile}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Website: {{doctorsDetails?.clinic_details?.website}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>   \n\t\t\t\t\t\t\t\t\t\t\t\t<p>Email: {{doctorsDetails?.email}}</p>                                        \n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p class=\"text-center\" *ngIf=\"checkOptionOfPad('Header_note')\">\n\t\t\t\t\t\t\t\t\t<label id=\"translated_appointmentText\"> {{getHeaderText()}} </label>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<div class=\"padview-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"emergency-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group emrgency-consult\" *ngIf=\"dispensedPatient?.type=='Emergency'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small\" id=\"translated_emergencyText\"><i> Emergency Consultation </i> </p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group schdl\" *ngIf=\"checkOptionOfPad('Clinic_schedule')\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\" color-blue\"> Schedule: </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t<span><strong style=\"display:block; width:110px;\"> {{shift.day}}: </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.fromTime?.hour=='0'\">{{time?.fromTime?.hour}}0:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.fromTime?.hour!='0'\">{{time?.fromTime?.hour}}:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.fromTime?.minute=='0'\">{{time?.fromTime?.minute}}0 –</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.fromTime?.minute!='0'\">{{time?.fromTime?.minute}} –</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.toTime?.hour=='0'\">{{time?.toTime?.hour}}0:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.toTime?.hour!='0'\">{{time?.toTime?.hour}}:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.toTime?.minute=='0'\">{{time?.toTime?.minute}}0</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.toTime?.minute!='0'\">{{time?.toTime?.minute}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t<span><strong> {{shift?.day}}: </strong> Closed \n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"translated_treatmentText\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Available Treatments: </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul style=\"padding-left:15px!important;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let treat of doctorData.expertise\">{{treat?.value}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"doctorData?.clinic_services_status=='Yes' && checkOptionOfPad('Available_services')\" id=\"translated_servicesText\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Available Services: </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul style=\"padding-left:15px!important;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"doctorData?.clinic_services?.Clinic_Pharmacy\">Pharmacy</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"doctorData?.clinic_services?.Clinic_IPD\">IPD</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let cs of doctorData?.clinic_services?.ClinicServicesDetail\"> {{cs}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let cs of doctorData?.clinic_services?.OtherClinicService\"> {{cs?.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"padview-bodyright\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"padview-body-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Prescription ID </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\">{{prescription_id}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Name </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{dispensedPatient?.pateintName | uppercase}} </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Age/Sex </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{dispensedPatient?.age}} {{dispensedPatient?.gender}} </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Weight </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\" *ngIf=\"dispensedPatient?.weight\"> {{dispensedPatient?.weight}} Kg </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Height </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\" *ngIf=\"dispensedPatient?.height\"> {{dispensedPatient?.height}} cm </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{day}} {{month}} , {{year}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"padview-patient\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"img-patient\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pateintPicPath}}{{dispensedPatient?.pateintPic}}\" class=\"img-responsive\" *ngIf=\"dispensedPatient?.pateintPic\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!dispensedPatient?.pateintPic\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"preConditionComplete==true && finalPreConditions?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_PreCondHeading\"> Existing health status </span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_BIHeading\"> Body Indicators</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li  *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"finalAllergy?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_allergyHeading\"> Allergy</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\" pat-type\" style=\"padding-left:15px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"middle-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"findingsSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_PTHeading\"> Patient's Complaints</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of findingsSelected\"> {{data?.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_sympHeading\"> Symptoms</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of symptomsSelected\"> {{data?.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"diagnosisComplete==true && diagnosisSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_diagnosisHeading\"> Diagnosis</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of diagnosisSelected\">{{data?.value}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\" *ngIf=\"medicationComplete==true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"padview-medic\" id=\"translated_medication\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span> Medicines</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ol style=\"padding-left:10px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of tempMedicationArray\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name=='Tablet' || data?.name=='Capsule' || data?.name=='Cream' || data?.name=='Ointment' || data?.name=='Aerosols' || data?.name=='Powder' || data?.name=='MouthWash'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data?.specialInstruction!=null\"> ({{data?.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.med_info\"><p class=\"help-note\" *ngIf=\"data?.med_info?.length>0\">({{data?.med_info[0].value}}<span *ngIf=\"data?.med_info?.length>1\"> / {{data?.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name=='Syrup' || data?.name=='Suspension' || data?.name=='Emulsion' || data?.name=='Solution'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data?.short_name}}<b class=\"notranslate\"> {{data?.med_name[0]?.value}} </b>- {{data?.dosage}}ml <span class=\"notranslate\"> X </span> {{data?.frequency}} <span class=\"notranslate\"> X </span> {{data?.duration}} days <span *ngIf=\"data?.specialInstruction!=null\"> ({{data?.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.med_info\"><p class=\"help-note\" *ngIf=\"data?.med_info?.length>0\">({{data?.med_info[0]?.value}}<span *ngIf=\"data?.med_info?.length>1\"> / {{data?.med_info[1]?.value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name=='Injection' || data?.name=='Gel' || data?.name=='Lotion'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data?.short_name}}<b class=\"notranslate\"> {{data?.med_name[0]?.value}} </b><span *ngIf=\"data?.mode\"> ({{data?.mode}}) </span> -{{data?.frequency}} <span class=\"notranslate\"> X </span> {{data?.duration}} days <span *ngIf=\"data?.specialInstruction!=null\"> ({{data?.specialInstruction}})</span><span *ngIf=\"data?.mode\"> ({{data?.mode}}) </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.med_info\"><p class=\"help-note\" *ngIf=\"data?.med_info?.length>0\">({{data?.med_info[0]?.value}}<span *ngIf=\"data?.med_info?.length>1\"> / {{data?.med_info[1]?.value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.name=='Drops'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data?.short_name}}<b class=\"notranslate\"> {{data?.med_name[0].value}} </b>-{{data?.quantity}} drops <span class=\"notranslate\"> X </span> {{data?.frequency}} <span class=\"notranslate\"> X </span> {{data?.duration}} days <span *ngIf=\"data?.specialInstruction!=null\"> ({{data?.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data?.med_info\"><p class=\"help-note\" *ngIf=\"data?.med_info.length>0\">({{data?.med_info[0].value}}<span *ngIf=\"data?.med_info.length>1\"> / {{data?.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"number-div vac-div\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"finalCurrentVaccinationArray?.length>0 || finalDueVaccinationArray?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\" id=\"translated_VaccinationHeading\"> <span> Vaccination</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t<ul *ngIf=\"finalCurrentVaccinationArray?.length>0\" class=\"medicationol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div><b>Current</b></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalCurrentVaccinationArray\">{{data}}</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<ul *ngIf=\"finalDueVaccinationArray?.length>0\" class=\"medicationol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Due </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span *ngIf=\"finalDueVaccinationArray.length>0\"><strong>Due </strong>({{vaccinationDate.toString().substr(4,11)}}) -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- </span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalDueVaccinationArray\">{{data}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\" *ngIf=\"instructionsComplete==true && instructionsSelected?.length>0\" id=\"translated_instHeading\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Instructions</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\" start=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of instructionsSelected\">{{data}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"third-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray.length\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span id=\"translated_invHeading\"> Investigation</span> </div>\n\t\t\t\t\t\t\t\t\t\t<ol class=\"numberol pl10\">\n\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of investigationArray\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"i!=data.values.length-1\">\\</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"treatmentComplete==true\" id=\"translated_OTHeading\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of treatmentArray;let i =index\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Lifestyle Changes'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.name}} - <span *ngFor=\"let value of data.lifestyle;let j = index\">{{value.value}} <span *ngIf=\"j!=data.lifestyle.length-1\">\\</span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Physiotherapy' || data.name=='Fomentation'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.name}} - {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Plaster'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"notranslate\">{{data.name}}</span> - on <span class=\"notranslate\">{{data.Injury_Area}}</span> of {{data.plaster_type}} for {{data.Duration}} days \n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Gargle' || data.name=='Dressing' || data.name=='Bandage' || data.name=='Other'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name!='Other'\">{{data.name}} - </span>{{data.med_name[0].value}} {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.value}}\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"note-box\">\n\t\t\t\t\t\t\t\t\t<div class=\"note-innerbox\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"note-innerdiv\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span id=\"translated_surgHeading\"> Recommended Surgery</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of surgerySelectedArray\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"referDoctorName?.first_name\" style=\"padding:0 30px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Referred To</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<p> {{referDoctorName?.first_name | uppercase}} </p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"\" *ngIf=\"eyePresComplete==true\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span id=\"translated_eyeHeading\"> Eye Prescription</span> </div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-striped cstm-table\">\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th> Eye </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th> Sphere </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th> Cylinder </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th> Axis </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th> Add </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th> PD (mm) </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> Right (OD): </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.sphere}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.cylinder}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.axis}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.add}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.pd}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> Left (OS): </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.sphere}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.cylinder}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.axis}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.add}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.pd}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"third-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Follow-Up</span></div>\n\t\t\t\t\t\t\t\t\t\t<p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n\t\t\t\t\t\t\t\t\t\t<p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"forth-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"padview-footer\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"padview-powered\">\n\t\t\t\t\t\t\t\t<div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n\t\t\t\t\t\t\t\t<div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-4 col-xs-12\" id=\"translated_footer\">\n\t\t\t\t\t\t\t<div class=\"legal\">\n\t\t\t\t\t\t\t\t<h3>{{getFooterText()}}</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n</div>\n</div>\n\n<div class=\"modal fade cus-preview\" id=\"previewModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content show-default\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<div>\n\t\t\t\t\t<h4 class=\"modal-title\"> Preview </h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline btn-updte\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"presc-modal-body\">\n\t\t\t\t\t\t<div class=\"pad-view\">\n\t\t\t\t\t\t\t<div class=\"padview-header\">\n\t\t\t\t\t\t\t\t<div class=\"pad-view-flx col-lg-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\" style=\"margin-bottom: 0px;\">\n\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{doctorData.first_name | uppercase}} </h1>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group qual\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"color-purple\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"checkOptionOfPad('Specialization')\">({{doctorData.specialization}})</span><br>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"checkOptionOfPad('Qualifications')\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let data of doctorData.qualification;let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.value}} <span *ngIf=\"i!=doctorData.qualification.length-1\">,</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"checkOptionOfPad('registration_no')\"> Registration. <span class=\"color-purple\"> {{doctorData.registration_no}} </span> </p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"checkOptionOfPad('Experience')\"><span class=\"color-purple\">{{experience}} years of experience</span> </p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"checkOptionOfPad('Professional_affiliation')\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"color-purple\" *ngFor=\"let pa of doctorData.professional_affiliation;let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{pa.value}}<span *ngIf=\"i!=doctorData.professional_affiliation.length-1\">,</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"pad-view-flx col-lg-8\">\n\t\t\t\t\t\t\t\t\t<ul class=\"clinic-detail\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"clinic-name\" *ngIf=\"checkOptionOfPad('Clinic_name')\">\n\t\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_clinicName\"> {{doctorsDetails?.clinic_details.clinic_name}} </h1>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"checkOptionOfPad('Clinic_address')\" style=\"padding-top:0px;\">{{doctorsDetails?.clinic_details.address}}, {{doctorsDetails?.clinic_details.area}}, {{doctorsDetails?.clinic_details.city}}, {{doctorsDetails?.clinic_details.state}}</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"li-cstm\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" *ngIf=\"checkOptionOfPad('Appointment_contacts')\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"for-apt\"> For appointments </h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"doctorsDetails?.clinic_details.landline\"> Tel: {{doctorsDetails?.clinic_details.std_code}}-{{doctorsDetails?.clinic_details.landline}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p> Mb: +91-{{doctorsDetails?.clinic_details.mobile}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Website: {{doctorsDetails?.clinic_details.website}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<p>Email: {{doctorsDetails?.email}}</p>\n\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p class=\"text-center\" *ngIf=\"checkOptionOfPad('Header_note')\">\n\t\t\t\t\t\t\t\t<label id=\"translated_appointmentText\"> {{getHeaderText()}} </label>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div class=\"padview-body\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n\t\t\t\t\t\t\t\t\t<div class=\"emergency-wrap\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group emrgency-consult\" *ngIf=\"dispensedPatient?.type=='Emergency'\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"small\" id=\"translated_emergencyText\"><i> Emergency Consultation </i> </p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group schdl\" *ngIf=\"checkOptionOfPad('Clinic_schedule')\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Schedule: </h5>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<span><strong style=\"display:block; width:110px;\"> {{shift.day}}: </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.hour=='0'\">{{time.fromTime.hour}}0:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.hour!='0'\">{{time.fromTime.hour}}:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.minute=='0'\">{{time.fromTime.minute}}0 –</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.minute!='0'\">{{time.fromTime.minute}} –</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.toTime.hour=='0'\">{{time.toTime.hour}}0:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.toTime.hour!='0'\">{{time.toTime.hour}}:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.toTime.minute=='0'\">{{time.toTime.minute}}0</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.toTime.minute!='0'\">{{time.toTime.minute}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<span><strong> {{shift.day}}: </strong> Closed \n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div id=\"translated_treatmentText\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Available Treatments: </h5>\n\t\t\t\t\t\t\t\t\t\t\t<ul style=\"padding-left:15px!important;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let treat of doctorData?.expertise\">{{treat.value}}</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"doctorData?.clinic_services_status=='Yes' && checkOptionOfPad('Available_services')\" id=\"translated_servicesText\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Available Services: </h5>\n\t\t\t\t\t\t\t\t\t\t\t<ul style=\"padding-left:15px!important;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"doctorData?.clinic_services?.Clinic_Pharmacy\">Pharmacy</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"doctorData?.clinic_services?.Clinic_IPD\">IPD</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let cs of doctorData?.clinic_services?.ClinicServicesDetail\"> {{cs}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let cs of doctorData?.clinic_services?.OtherClinicService\"> {{cs.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>                                   \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"padview-bodyright\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"padview-body-header\">\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Prescription ID </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\">{{prescription_id}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Name </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{dispensedPatient?.pateintName | uppercase}} </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Age/Sex </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{dispensedPatient?.age}} {{dispensedPatient?.gender}} </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Weight </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\" *ngIf=\"dispensedPatient?.weight\"> {{dispensedPatient?.weight}} Kg </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Height </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\" *ngIf=\"dispensedPatient?.height\"> {{dispensedPatient?.height}} cm </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{day}} {{month}} , {{year}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"padview-patient\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"img-patient\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pateintPicPath}}{{dispensedPatient?.pateintPic}}\" class=\"img-responsive\" *ngIf=\"dispensedPatient?.pateintPic\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!dispensedPatient?.pateintPic\"/>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"preConditionComplete==true && finalPreConditions?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_PreCondHeading\"> Existing health status </span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_BIHeading\"> Body Indicators</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"finalAllergy?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_allergyHeading\"> Allergy</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\" pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<div class=\"middle-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"findingsSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_PTHeading\"> Patient's Complaints</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of findingsSelected\"> {{data.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_sympHeading\"> Symptoms</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of symptomsSelected\"> {{data.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"diagnosisComplete==true && diagnosisSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_diagnosisHeading\"> Diagnosis</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of diagnosisSelected\">{{data.value}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\" *ngIf=\"medicationComplete==true\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"padview-medic\" id=\"translated_medication\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span> Medicines</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ol style=\"padding-left:10px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of tempMedicationArray\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Drops'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"number-div vac-div\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"finalCurrentVaccinationArray?.length>0 || finalDueVaccinationArray?.length>0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\" id=\"translated_VaccinationHeading\"> <span> Vaccination</span> </div>\n\t\t\t\t\t\t\t\t\t\t<ul *ngIf=\"finalCurrentVaccinationArray?.length>0\" class=\"medicationol\">\n\t\t\t\t\t\t\t\t\t\t\t<div><b>Current</b></div>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalCurrentVaccinationArray\">{{data}}</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<ul *ngIf=\"finalDueVaccinationArray?.length>0\" class=\"medicationol\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>Due </strong>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <span *ngIf=\"finalDueVaccinationArray.length>0\"><strong>Due </strong>({{vaccinationDate.toString().substr(4,11)}}) -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- </span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalDueVaccinationArray\">{{data}}</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"\" *ngIf=\"instructionsComplete==true && instructionsSelected?.length>0\" id=\"translated_instHeading\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Instructions</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\" start=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of instructionsSelected\">{{data}}</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"third-body\">\n\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray.length\">\n\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span id=\"translated_invHeading\"> Investigation</span> </div>\n\t\t\t\t\t\t\t\t\t<ol class=\"numberol pl10\">\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of investigationArray\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"i!=data.values.length-1\">\\</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"treatmentComplete==true\" id=\"translated_OTHeading\">\n\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of treatmentArray;let i =index\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Lifestyle Changes'\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{data.name}} - <span *ngFor=\"let value of data.lifestyle;let j = index\">{{value.value}} <span *ngIf=\"j!=data.lifestyle.length-1\">\\</span></span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Physiotherapy' || data.name=='Fomentation'\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{data.name}} - {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Plaster'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"notranslate\">{{data.name}}</span> - on <span class=\"notranslate\">{{data.Injury_Area}}</span> of {{data.plaster_type}} for {{data.Duration}} days \n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Gargle' || data.name=='Dressing' || data.name=='Bandage' || data.name=='Other'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name!='Other'\">{{data.name}} - </span>{{data.med_name[0].value}} {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t{{data.value}}\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"note-box\">\n\t\t\t\t\t\t\t\t<div class=\"note-innerbox\">\n\t\t\t\t\t\t\t\t\t<div class=\"note-innerdiv\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span id=\"translated_surgHeading\"> Recommended Surgery</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of surgerySelectedArray\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"referDoctorName?.first_name\" style=\"padding:0 30px;\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Referred To</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t<p> {{referDoctorName?.first_name | uppercase}} </p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"\" *ngIf=\"eyePresComplete==true\">\n\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span id=\"translated_eyeHeading\"> Eye Prescription</span> </div>\n\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-striped cstm-table\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th> Eye </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th> Sphere </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th> Cylinder </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th> Axis </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th> Add </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th> PD (mm) </th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td> Right (OD): </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.sphere}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.cylinder}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.axis}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.add}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.pd}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td> Left (OS): </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.sphere}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.cylinder}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.axis}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.add}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.pd}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"third-body\">\n\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Follow Up</span></div>\n\t\t\t\t\t\t\t\t\t<p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n\t\t\t\t\t\t\t\t\t<p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"forth-body\">\n\t\t\t\t\t\t\t\t<div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n\t\t\t\t\t\t\t\t\t<div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"padview-footer\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<div class=\"padview-powered\">\n\t\t\t\t\t\t\t<div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n\t\t\t\t\t\t\t<div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-12 col-sm-4 col-xs-12\" id=\"translated_footer\">\n\t\t\t\t\t\t<div class=\"legal\">\n\t\t\t\t\t\t\t<h3>{{getFooterText()}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n</div>\n</div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"digitalOff\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<h4 class=\"modal-title\"></h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"float:left;width:100%;\">\n\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"pad-profile\">\n\t\t\t\t\t\t<div  class=\"pad-image\">\n\t\t\t\t\t\t\t<img class=\"img-responsive ng-star-inserted\" src=\"./assets/imgs/no-person.jpg\">\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div  class=\"pad-name green-btn\">\n\t\t\t\t\t\t\t<div  class=\"\">\n\t\t\t\t\t\t\t\t<p> {{consultingPatient.pateintName | uppercase}} </p>\n\t\t\t\t\t\t\t\t<p> {{consultingPatient.location}} </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pad-profile-button\">\n\t\t\t\t\t\t<div  class=\"pad-hstry\">\n\t\t\t\t\t\t\t<a href=\"javascript:;\" (click)=\"openHistoryModal()\">\n\t\t\t\t\t\t\t\tHistory <span class=\"{{getHistoryClass()}}\"> </span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div  class=\"pad-test-reprt\">\n\t\t\t\t\t\t\t<a  href=\"javascript:;\" (click)=\"openTestReports()\">\n\t\t\t\t\t\t\t\tTest Reports <span class=\"{{getTestReportClass()}}\"> </span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t<div  class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-12 form-group\">\n\t\t\t\t\t\t\t<!-- <div class=\"\" style=\"margin-top: 8px; float: left;width:100%;\"> Prescription id:  <span  class=\"strong ng-star-inserted\"> 18032019-1 </span></div> -->\n\t\t\t\t\t\t\t<div class=\"strong\" *ngIf=\"consultingPatient.ID\"> {{getDay(day)}}{{getDay(numericMonth)}}{{year}}-{{consultingPatient.ID}} </div>\n\t\t\t\t\t\t\t<div class=\"strong\" *ngIf=\"!consultingPatient.ID\"> {{getDay(day)}}{{getDay(numericMonth)}}{{year}}-{{consultingPatient.id}} </div>\n\t\t\t\t\t\t\t<!-- </div> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-6 form-group\">\n\t\t\t\t\t\t\t<div>Gender:</div>\n\t\t\t\t\t\t\t<div class=\"cstm-gender-field\">\n\t\t\t\t\t\t\t\t<input class=\"form-control txtfield ng-untouched ng-pristine ng-valid\"  type=\"text\" [(ngModel)] = \"consultingPatient.gender\" value = \"{{consultingPatient.gender}}\" disabled=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-6 form-group\">\n\t\t\t\t\t\t\t<div> Age: </div>\n\n\t\t\t\t\t\t\t<div class=\"cstm-gender-field\">\n\t\t\t\t\t\t\t\t<input class=\"form-control txtfield ng-untouched ng-pristine ng-valid\" [(ngModel)] = \"consultingPatient.age\" value = \"{{consultingPatient.age}}\"  type=\"text\">\n                        <!-- <select class=\"form-control txtfield ng-untouched ng-pristine ng-valid\">\n                            <option value=\"Male\">Male</option>\n                            <option value=\"Female\" >Female</option>\n                            <option value=\"Other\" >Other</option>\n                        </select> -->\n                    </div>\n                </div>\n                <div class=\"col-lg-6 form-group\">\n                \t<div class=\"wght\"> Weight:  <span>(Kg)</span> </div>\n                \t<input class=\"form-control txtfield ng-untouched ng-pristine ng-valid\" name=\"\" [(ngModel)] = \"consultingPatient.weight\" value = \"{{consultingPatient.weight}}\" type=\"text\">\n\n                </div>\n                <div class=\"col-lg-6 form-group\">\n                \t<div class=\"hght\"> Height: <span>(cm)</span></div>\n                \t<input class=\"form-control txtfield ng-untouched ng-pristine ng-valid\" name=\"\" [(ngModel)] = \"consultingPatient.height\" value = \"{{consultingPatient.height}}\" type=\"text\">\n\n                </div>\n                <div class=\"col-lg-12\">\n                \t<p> <span class=\"color-blue\"> {{day}} {{month}},</span> {{year}} </p>\n                \t<p> <span>  ({{minutes}} min :{{seconds}} sec) </span> </p>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n    \t<div class=\"col-lg-12 form-group text-center\">\n    \t\t<button class=\"btn red-btn\" (click) = \"saveDoctorPrescriptionForPatient()\">Dispense</button>\n    \t</div>\n    </div>\n</div>\n\n</div>\n</div>\n\n\n\n<!-- History Modal -->\n<div class=\"modal fade cus-preview\" id=\"historyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t<div class=\"modal-dialog\" role=\"document\" *ngIf=\"consultingPatient?.lastVisit?.status\">\n\t\t<div class=\"modal-content show-default\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<!-- <button type=\"button\" class=\"pull-right btn-sm btn btn-custom\" (click)=\"importFromHistory()\" *ngIf=\"!consultingPatient.lastVisit.data.webcam_pic\"> Import </button> -->\n\t\t\t\t<button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline btn_updte\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t\t\t<h4 class=\"modal-title\"> History </h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" *ngIf=\"!consultingPatient.lastVisit.data.webcam_pic\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"presc-modal-body\">\n\t\t\t\t\t\t<div class=\"pad-view\">\n\t\t\t\t\t\t\t<div class=\"padview-body\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 p-0\" style=\"font-size: 10px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"padview-bodyright historyprescription\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"padview-body-header\">\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Prescription ID </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{day_history}}{{numericMonth_history}}{{year_history}}-{{consultingPatient.lastVisit.data.registration.id}} </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Name </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{consultingPatient?.lastVisit?.data?.registration?.pateintName | uppercase}} </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Age/Sex </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{consultingPatient?.lastVisit?.data?.registration?.age}} / {{consultingPatient?.lastVisit?.data?.registration?.gender}} </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Weight </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\" *ngIf=\"consultingPatient.lastVisit.data.registration.weight\"> {{consultingPatient.lastVisit.data.registration.weight}} Kg </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Height </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\" *ngIf=\"consultingPatient.lastVisit.data.registration.height\"> {{consultingPatient.lastVisit.data.registration.height}} cm </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{day_history}} {{month_history}} , {{year_history}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"padview-patient\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"img-patient\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!consultingPatient.lastVisit.data.registration.pateintPic\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pateintPicPath}}{{consultingPatient.lastVisit.data.registration.pateintPic}}\" class=\"img-responsive\" *ngIf=\"consultingPatient.lastVisit.data.registration.pateintPic\"/>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"preConditionComplete_history==true && finalPreConditions_history.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span> Existing health status </span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalPreConditions_history\"> {{data}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"bodyIndicatorComplete_history==true && bodyIndicatorSelected_history.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span> Body Indicators</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of bodyIndicatorSelected_history\"> {{data}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\" finalAllergy_history?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span> Allergy</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\" pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalAllergy_history\"> {{data}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<div class=\"middle-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"findingsComplete_history==true && findingsSelected_history.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span> Patient's Complaints</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of findingsSelected_history\"> {{data.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"symptomsComplete_history==true && symptomsSelected_history.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span> Symptoms</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of symptomsSelected_history\"> {{data.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"diagnosisComplete_history==true && diagnosisSelected_history.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span> Diagnosis</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of diagnosisSelected_history\">{{data.value}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\" *ngIf=\"medicationComplete_history==true\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"padview-medic\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span> Medicines</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ol style=\"padding-left:10px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of tempMedicationArray_history\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Drops'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"number-div vac-div\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"vaccinationComplete_history==true\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Vaccination</span> </div>\n\t\t\t\t\t\t\t\t\t\t<ul *ngIf=\"currentVaccinationComplete_history == true\" class=\"medicationol\">\n\t\t\t\t\t\t\t\t\t\t\t<div><b>Current</b></div>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalCurrentVaccinationArray_history\">{{data}}</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<ul *ngIf=\"dueVaccinationComplete_history == true\" class=\"medicationol\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"finalDueVaccinationArray_history.length>0\"><strong>Due </strong>({{vaccinationDate_history.toString().substr(4,11)}})\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalDueVaccinationArray_history\">{{data}}</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"\" *ngIf=\"instructionsComplete_history==true && instructionsSelected_history.length>0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Instructions</span> </div>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\" start=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of instructionsSelected_history\">{{data}}</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"third-body\">\n\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"investigationIndicatorComplete_history==true && investigationArray_history.length\">\n\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Investigation</span> </div>\n\t\t\t\t\t\t\t\t<ol class=\"numberol pl10\">\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of investigationArray_history\">\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"i!=data.values.length-1\">\\</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"treatmentComplete_history==true\">\n\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of treatmentArray_history;let i =index\">\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Lifestyle Changes'\">\n\t\t\t\t\t\t\t\t\t\t\t{{data.name}} - <span *ngFor=\"let value of data.lifestyle;let j = index\">{{value.value}} <span *ngIf=\"j!=data.lifestyle.length-1\">\\</span></span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Physiotherapy' || data.name=='Fomentation'\">\n\t\t\t\t\t\t\t\t\t\t\t{{data.name}} - {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Plaster'\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notranslate\">{{data.name}}</span> - on <span class=\"notranslate\">{{data.Injury_Area}}</span> of {{data.plaster_type}} for {{data.Duration}} days \n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Gargle' || data.name=='Dressing' || data.name=='Bandage' || data.name=='Other'\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name!='Other'\">{{data.name}} - </span>{{data.med_name[0].value}} {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t{{data.value}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"note-box\">\n\t\t\t\t\t\t\t<div class=\"note-innerbox\">\n\t\t\t\t\t\t\t\t<div class=\"note-innerdiv\">\n\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"surgeryComplete_history==true && surgerySelectedArray_history.length>0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Recommended Surgery</span> </div>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of surgerySelectedArray_history\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"referDoctorName?.first_name\" style=\"padding:0 30px;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Referred To</span> </div>\n\t\t\t\t\t\t\t\t\t\t<p> {{referDoctorName?.first_name | uppercase}} </p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"\" *ngIf=\"eyePresComplete_history==true\">\n\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Eye Prescription</span> </div>\n\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-striped cstm-table\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th> Eye </th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th> Sphere </th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th> Cylinder </th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th> Axis </th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th> Add </th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th> PD (mm) </th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> Right (OD): </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD_history.sphere}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD_history.cylinder}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD_history.axis}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD_history.add}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD_history.pd}} </td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> Left (OS): </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD_history.sphere}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD_history.cylinder}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD_history.axis}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD_history.add}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD_history.pd}} </td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n</div>\n<div class=\"modal-body\" *ngIf=\"consultingPatient.lastVisit.data.webcam_pic\">\n\t<div class=\"camera-div text-center\">\n\t\t<img src=\"{{uploadedPrescriptionPath}}{{consultingPatient.lastVisit.data.image}}\">\n\t</div>\n</div>\n</div>\n</div>\n</div>\n\n<div class=\"modal fade cus-preview\" id=\"uploadedPrescriptionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" *ngIf=\"prescription_image\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">Prescription</h3>\n\t\t\t\t<button type=\"button\" style=\"margin-bottom:15px;\" class=\"pull-right btn-sm btn btn-custom btn-outline btn_updte\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t\t\t<!-- <button type=\"button\" (click)=\"zoomin()\"> Zoom In</button> -->\n\t\t\t\t<!-- <button type=\"button\" (click)=\"zoomout()\"> Zoom Out</button> -->\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"camera-div\">\n\n\t\t\t\t\t\t\t<img id=\"zoom\" src=\"{{uploadedPrescriptionPath}}{{prescription_image}}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade cus-preview\" id=\"Test-report-Modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<!-- <button type=\"button\" class=\"pull-right btn-sm btn btn-custom\" > Print </button> -->\n\t\t\t\t<button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline btn_updte\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t\t\t<h4 class=\"modal-title\"> Test Report </h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" *ngIf=\"consultingPatient.reportPics && consultingPatient.reportPics.length>0\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<div class=\"presc-modal-body\">\n\t\t\t\t\t\t\t<div *ngFor=\"let report of consultingPatient.reportPics\" class=\"reportImg\">\n\t\t\t\t\t\t\t\t<img src=\"{{reportPic}}{{report}}\" class=\"img-responsive\"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"custom-modal\">\n\t<div class=\"custom-modal-inner\">\n\t\t<div class=\"col-lg-6\">\n\t\t<h3 class=\"modal-title\">Prescription</h3>\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<button type=\"button\" style=\"margin-bottom:15px;\" class=\"pull-right btn-sm btn btn-custom btn-outline btn_updte dlt\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t</div>\n\t\t<!-- <i class=\"fa fa-times dlt\"></i> -->\n\t\t<img class='zoom' src=\"{{uploadedPrescriptionPath}}{{prescription_image}}\" alt='Daisy!'/>\n\t</div>\n\n</div>\n<!-- <button class=\"kk\">kk</button> -->"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-prescription/dashboard-prescription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPrescriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardPrescriptionComponent = /** @class */ (function () {
    // wheelzoom
    function DashboardPrescriptionComponent(formBuilder, toastr, userService, router, datePipe) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.datePipe = datePipe;
        this.listOne = [
            { name: 'John', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F', age: 22 },
            { name: 'Name2', image: './assets/imgs/avatar3.jpg', date: '22 July,2018', gender: 'F', age: 23 },
            { name: 'Name3', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F', age: 24 },
            { name: 'Name4', image: './assets/imgs/avatar3.jpg', date: '22 July,2018', gender: 'F', age: 25 },
            { name: 'Name5', image: './assets/imgs/avatar3.jpg', date: '22 July,2018', gender: 'F', age: 26 },
            { name: 'Name6', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F', age: 27 },
            { name: 'Name7', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F', age: 28 }
        ];
        this.listOne2 = [
            { name: 'John (4)', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F Ref', age: 22 },
            { name: 'Name2 (4)', image: './assets/imgs/avatar3.jpg', date: '22 July,2018', gender: 'F', age: 23 },
            { name: 'Name3 (New)', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F Ref', age: 24 },
            { name: 'Name4', image: './assets/imgs/avatar3.jpg', date: '22 July,2018', gender: 'F', age: 25 },
            { name: 'Name5 (3)', image: './assets/imgs/avatar3.jpg', date: '22 July,2018', gender: 'F Ref', age: 26 },
            { name: 'Name6', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F', age: 27 },
            { name: 'Name7', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F Ref', age: 28 }
        ];
        this.listOne3 = [
            { name: 'John (5)', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F ', age: 22 },
            { name: 'Name2 (5)', image: './assets/imgs/avatar3.jpg', date: '22 July,2018', gender: 'F Ref', age: 23 },
            { name: 'Name3 (1)', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F', age: 24 },
            { name: 'Name4 (New)', image: './assets/imgs/avatar3.jpg', date: '22 July,2018', gender: 'F Ref', age: 25 },
            { name: 'Name5', image: './assets/imgs/avatar3.jpg', date: '22 July,2018', gender: 'F', age: 26 },
            { name: 'Name6', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F Ref', age: 27 },
            { name: 'Name7', image: './assets/imgs/avatar2.jpg', date: '22 July,2018', gender: 'F', age: 28 }
        ];
        this.loading = false;
        this.followUpDays = 0;
        this.finalfollowUpDays = 0;
        this.followUpDate = new Date();
        this.consultingPatient = {};
        this.helpText = [];
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
        this.color = 'accent';
        this.value = 0;
        this.classColor = '';
        this.uploadedPrescriptionPath = __WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__["a" /* environment */].uploadedPrescriptionPath;
        // const wz = mouseWheelZoom({
        //     element: document.querySelector('[data-wheel-zoom]'),
        //     zoomStep: .25  
        // });
        // wz.reset();
    }
    DashboardPrescriptionComponent.prototype.ngAfterViewInit = function () {
        this.consultingPatient = {};
        this.AllPatinetsForTodayDoctor();
    };
    DashboardPrescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(".custom-modal").hide();
        $(".kk").click(function () {
            $(".custom-modal").fadeIn();
        });
        $(".dlt").click(function () {
            $(".custom-modal").fadeOut();
        });
        wheelzoom(document.querySelectorAll('img.zoom'));
        this.minutes = 0;
        this.seconds = 0;
        // this. = {}
        if (localStorage['doctorDetails']) {
            this.doctorData = JSON.parse(localStorage['doctorDetails']);
        }
        if (localStorage['doctorsOfSameClinic']) {
            this.doctorsDetails = JSON.parse(localStorage['doctorsOfSameClinic']);
            console.log(this.doctorsDetails);
        }
        this.reqData = {};
        this.pateintPicPath = __WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__["a" /* environment */].patientPic;
        this.socket = __WEBPACK_IMPORTED_MODULE_6_socket_io_client__(__WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__["a" /* environment */].socket);
        var options = { month: 'short' };
        var today = new Date();
        this.month = today.toLocaleDateString("en-IN", options);
        this.day = new Date().getDate();
        this.year = new Date().getFullYear();
        this.numericMonth = new Date().getMonth() + 1;
        this.dataRegistration = [];
        this.dataAppointment = [];
        this.dataDispensedPatients = [];
        this.lastVisit = [];
        this.countLastVisit = [];
        this.dispensedPatient = {};
        if (this.doctorData) {
            this.AllPatinetsForTodayDoctor();
            this.setAllShiftsForPreview();
        }
        /////////////////SOCKET ON//////////////////////
        this.socket.emit('room join', {
            room_id: this.doctorData.smart_assistant_id
        });
        this.socket.emit('room join', {
            room_id: this.doctorData.smart_pharmacy_id
        });
        this.socket.emit('room join', {
            room_id: this.doctorData.smart_diagnostics_id
        });
        this.socket.on('registrationBooked', function (msg) {
            console.log("registration booked");
            _this.ngOnInit();
        });
        this.socket.on('prescUpload', function (msg) {
            console.log("presc Uploaded");
            _this.ngOnInit();
        });
        /////////////////SOCKET ON end//////////////////////
        this.reportPic = __WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__["a" /* environment */].reportPic;
        var currentYear = new Date().getFullYear();
        this.experience = currentYear - parseInt(this.doctorsDetails.practicing_since);
        this.activatetab(1);
        this.getHelpText();
    };
    DashboardPrescriptionComponent.prototype.zoomin = function () {
        var myImg = document.getElementById("map");
        var currWidth = myImg.clientWidth;
        if (currWidth == 5000)
            return false;
        else {
            myImg.style.width = (currWidth + 100) + "px";
        }
    };
    DashboardPrescriptionComponent.prototype.zoomout = function () {
        var myImg = document.getElementById("map");
        var currWidth = myImg.clientWidth;
        if (currWidth == 100)
            return false;
        else {
            myImg.style.width = (currWidth - 100) + "px";
        }
    };
    DashboardPrescriptionComponent.prototype.showUndertakingInfo = function () {
        $('#undertaking-modal').modal('show');
    };
    DashboardPrescriptionComponent.prototype.activatetab = function (ii) {
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
                    if (_this.value < 25) {
                        _this.classColor = 'red';
                    }
                    else if (_this.value <= 50) {
                        _this.classColor = 'yellow';
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
    DashboardPrescriptionComponent.prototype.getData = function (data) {
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
    DashboardPrescriptionComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    DashboardPrescriptionComponent.prototype.timeSort = function (a, b) {
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
    DashboardPrescriptionComponent.prototype.avgTimeSort = function (a, b) {
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
    DashboardPrescriptionComponent.prototype.getHelpText = function () {
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
    DashboardPrescriptionComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        /////////////////SOCKET ON//////////////////////        
        this.loading = true;
        if (this.doctorData) {
            var itemId = this.doctorData.itemId;
        }
        var object = {
            itemId: itemId,
            reg_id: 0
        };
        this.userService.UpdateConsultationInProgress(object).subscribe(function (data) {
            _this.loading = false;
            console.log(data);
            if (data.response == true) {
                localStorage['doctorDetails'] = JSON.stringify(data.data);
                _this.socket.emit('room leave', {
                    room_id: _this.doctorData.smart_assistant_id
                });
                _this.socket.emit('room leave', {
                    room_id: _this.doctorData.smart_pharmacy_id
                });
                _this.socket.emit('room leave', {
                    room_id: _this.doctorData.smart_diagnostics_id
                });
            }
        }, function (err) {
            console.log(err);
        });
        //////////////-----SOCKET ON------////////////////
    };
    DashboardPrescriptionComponent.prototype.showPad = function (patient, i, id, digital) {
        var _this = this;
        console.log('hey');
        console.log(patient);
        this.loading = true;
        if (i == 0) {
            if (patient.doctor_id.digital_precipitation) {
                patient.ID = id;
                localStorage['consultingPatient'] = JSON.stringify(patient);
                // this.consultingPatient = patient
                this.minutes = 0;
                this.seconds = 0;
                setInterval(function () {
                    _this.incrementTimer();
                }, 1000);
                this.router.navigate(['header-two-layout/dashboard-prescription-pad']);
                /////////////////SOCKET ON//////////////////////
                // this.loading = true
                // var object = {
                //     itemId: this.doctorData.itemId,
                //     reg_id: patient.id
                // }
                // this.userService.UpdateConsultationInProgress(object).subscribe(data => {
                //     this.loading = false
                //     console.log(data)
                //     if (data.response == true) {
                //         localStorage['doctorDetails']=JSON.stringify(data.data)
                //         this.socket.emit('patientSelected',{
                //             room_id: this.doctorData.smart_assistant_id
                //         })
                //         //////////////-----SOCKET ON------////////////////
                //         patient.ID = id
                //         localStorage['consultingPatient']=JSON.stringify(patient)
                //         this.router.navigate(['header-two-layout/dashboard-prescription-pad'])
                //     }
                // }, err => {
                //   console.log(err);
                // })
            }
            else {
                patient.ID = id;
                //dashboard-prescription-pad-off
                localStorage['consultingPatient'] = JSON.stringify(patient);
                this.minutes = 0;
                this.seconds = 0;
                setInterval(function () {
                    _this.incrementTimer();
                }, 1000);
                this.router.navigate(['header-two-layout/dashboard-prescription-pad-off']);
                //$("#digitalOff").modal("show");
            }
        }
    };
    DashboardPrescriptionComponent.prototype.AllPatinetsForTodayDoctor = function () {
        var _this = this;
        this.loading = true;
        var object = {
            doctor_id: this.doctorData._id
        };
        this.userService.AllPatinetsForTodayDoctor(object).subscribe(function (data) {
            _this.loading = false;
            console.log(data);
            if (data.response == true) {
                _this.dataRegistration = data.dataRegistration;
                _this.dataAppointment = data.dataAppointment;
                _this.dataDispensedPatients = data.dataDispensedPatients;
                _this.lastVisit = data.lastVisit;
                _this.countLastVisit = data.countLastVisit;
                if (_this.dataRegistration) {
                    for (var i = 0; i < _this.dataRegistration.length; i++) {
                        _this.dataRegistration[i].lastVisit = _this.getLastTime(_this.dataRegistration[i]);
                        _this.consultingPatient = _this.dataRegistration[i];
                    }
                }
                console.log(_this.consultingPatient);
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionComponent.prototype.openPrescriptionPreview = function (data) {
        this.prescription_image = data.image;
        this.prescription_id = data.prescription_id;
        this.dispensedPatient = data.registration;
        console.log(data);
        this.referDoctorName = data.registration.doctor_id;
        console.log(this.referDoctorName);
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
        // this.languageOptionSelected = data.precription.languageOptionSelected
        if (this.prescription_image) {
            // $("#uploadedPrescriptionModal").modal("show");
            $(".custom-modal").fadeIn();
        }
        else {
            $("#previewModal").modal("show");
        }
    };
    DashboardPrescriptionComponent.prototype.checkOptionOfPad = function (value) {
        if (this.doctorData) {
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
        }
    };
    DashboardPrescriptionComponent.prototype.getFooterText = function () {
        if (this.doctorData) {
            if (!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length < 1) {
                return "Not for Medico-Legal Purpose";
            }
            else {
                return this.doctorData.pad_customization_options[12].text;
            }
        }
    };
    DashboardPrescriptionComponent.prototype.getHeaderText = function () {
        if (this.doctorData) {
            if (!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length < 1) {
                return "PLEASE TAKE PRIOR APPOINTMENT";
            }
            else {
                return this.doctorData.pad_customization_options[8].text;
            }
        }
    };
    DashboardPrescriptionComponent.prototype.setAllShiftsForPreview = function () {
        this.allShifts = [];
        var Mon = false;
        var Tue = false;
        var Wed = false;
        var Thu = false;
        var Fri = false;
        var Sat = false;
        var Sun = false;
        for (var i = 0; i < this.doctorData.consultation_schedule.length; i++) {
            var string = '';
            if (this.doctorData.consultation_schedule[i].Monday == true) {
                Mon = true;
                if (string == '') {
                    string = "Mon";
                }
                else {
                    string = string + ", " + "Mon";
                }
            }
            if (this.doctorData.consultation_schedule[i].Tuesday == true) {
                Tue = true;
                if (string == '') {
                    string = "Tue";
                }
                else {
                    string = string + ", " + "Tue";
                }
            }
            if (this.doctorData.consultation_schedule[i].Wednesday == true) {
                Wed = true;
                if (string == '') {
                    string = "Wed";
                }
                else {
                    string = string + ", " + "Wed";
                }
            }
            if (this.doctorData.consultation_schedule[i].Thursday == true) {
                Thu = true;
                if (string == '') {
                    string = "Thu";
                }
                else {
                    string = string + ", " + "Thu";
                }
            }
            if (this.doctorData.consultation_schedule[i].Friday == true) {
                Fri = true;
                if (string == '') {
                    string = "Fri";
                }
                else {
                    string = string + ", " + "Fri";
                }
            }
            if (this.doctorData.consultation_schedule[i].Saturday == true) {
                Sat = true;
                if (string == '') {
                    string = "Sat";
                }
                else {
                    string = string + ", " + "Sat";
                }
            }
            if (this.doctorData.consultation_schedule[i].Sunday == true) {
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
                shifts: this.doctorData.consultation_schedule[i].shifts
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
    DashboardPrescriptionComponent.prototype.createPdf = function () {
        console.log(this.dispensedPatient);
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
    };
    DashboardPrescriptionComponent.prototype.getLastTime = function (data) {
        var boolean = false;
        for (var i = 0; i < this.lastVisit.length; i++) {
            if (this.lastVisit[i].registration.pateintName == data.pateintName &&
                this.lastVisit[i].registration.pateintPhone == data.pateintPhone) {
                var ob;
                ob = {};
                ob.status = true;
                ob.data = this.lastVisit[i];
                ob.count = this.getLastVisitCount(this.lastVisit[i].registration.pateintPhone, this.lastVisit[i].registration.pateintName);
                ob.time = this.lastVisit[i].registration.createdAt;
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
    DashboardPrescriptionComponent.prototype.getLastVisitCount = function (phone, name) {
        for (var i = 0; i < this.countLastVisit.length; i++) {
            if (this.countLastVisit[i].pateintName == name &&
                this.countLastVisit[i].pateintPhone == phone) {
                return this.countLastVisit[i].count;
            }
        }
    };
    DashboardPrescriptionComponent.prototype.getHistoryClass = function () {
        if (this.consultingPatient.lastVisit) {
            return 'badge green';
        }
    };
    DashboardPrescriptionComponent.prototype.openHistoryModal = function () {
        console.log(this.consultingPatient.lastVisit.data.precription);
        if (this.consultingPatient.lastVisit.status == true) {
            var options = { month: 'short' };
            this.day_history = new Date(this.consultingPatient.lastVisit.data.createdAt).getDate();
            this.month_history = new Date(this.consultingPatient.lastVisit.data.createdAt).toLocaleDateString("en-IN", options);
            this.year_history = new Date(this.consultingPatient.lastVisit.data.createdAt).getFullYear();
            this.numericMonth_history = new Date(this.consultingPatient.lastVisit.data.createdAt).getMonth() + 1;
            this.preConditionComplete_history = this.consultingPatient.lastVisit.data.precription.preConditionComplete;
            this.finalPreConditions_history = this.consultingPatient.lastVisit.data.precription.finalPreConditions;
            this.bodyIndicatorComplete_history = this.consultingPatient.lastVisit.data.precription.bodyIndicatorComplete;
            this.bodyIndicatorSelected_history = this.consultingPatient.lastVisit.data.precription.bodyIndicatorSelected;
            this.allergyComplete_history = this.consultingPatient.lastVisit.data.precription.allergyComplete;
            this.finalAllergy_history = this.consultingPatient.lastVisit.data.precription.finalAllergy;
            this.findingsComplete_history = this.consultingPatient.lastVisit.data.precription.findingsComplete;
            this.findingsSelected_history = this.consultingPatient.lastVisit.data.precription.findingsSelected;
            this.symptomsComplete_history = this.consultingPatient.lastVisit.data.precription.symptomsComplete;
            this.symptomsSelected_history = this.consultingPatient.lastVisit.data.precription.symptomsSelected;
            this.diagnosisComplete_history = this.consultingPatient.lastVisit.data.precription.diagnosisComplete;
            this.diagnosisSelected_history = this.consultingPatient.lastVisit.data.precription.diagnosisSelected;
            this.medicationComplete_history = this.consultingPatient.lastVisit.data.precription.medicationComplete;
            this.tempMedicationArray_history = this.consultingPatient.lastVisit.data.precription.tempMedicationArray;
            this.vaccinationComplete_history = this.consultingPatient.lastVisit.data.precription.vaccinationComplete;
            this.currentVaccinationComplete_history = this.consultingPatient.lastVisit.data.precription.currentVaccinationComplete;
            this.finalCurrentVaccinationArray_history = this.consultingPatient.lastVisit.data.precription.finalCurrentVaccinationArray;
            this.dueVaccinationComplete_history = this.consultingPatient.lastVisit.data.precription.dueVaccinationComplete;
            this.finalDueVaccinationArray_history = this.consultingPatient.lastVisit.data.precription.finalDueVaccinationArray;
            this.vaccinationDate_history = this.consultingPatient.lastVisit.data.precription.vaccinationDate;
            this.instructionsComplete_history = this.consultingPatient.lastVisit.data.precription.instructionsComplete;
            this.instructionsSelected_history = this.consultingPatient.lastVisit.data.precription.instructionsSelected;
            this.investigationIndicatorComplete_history = this.consultingPatient.lastVisit.data.precription.investigationIndicatorComplete;
            this.investigationArray_history = this.consultingPatient.lastVisit.data.precription.investigationArray;
            this.treatmentComplete_history = this.consultingPatient.lastVisit.data.precription.treatmentComplete;
            this.treatmentArray_history = this.consultingPatient.lastVisit.data.precription.treatmentArray;
            this.surgeryComplete_history = this.consultingPatient.lastVisit.data.precription.surgeryComplete;
            this.surgerySelectedArray_history = this.consultingPatient.lastVisit.data.precription.surgerySelectedArray;
            this.eyePresComplete_history = this.consultingPatient.lastVisit.data.precription.eyePresComplete;
            this.finalRightOD_history = this.consultingPatient.lastVisit.data.precription.finalRightOD;
            this.finalLeftOD_history = this.consultingPatient.lastVisit.data.precription.finalLeftOD;
            $("#historyModal").modal("show");
        }
    };
    DashboardPrescriptionComponent.prototype.saveDoctorPrescriptionForPatient = function () {
        var _this = this;
        var precription = {
            finalPreConditions: this.finalPreConditions,
            bodyIndicatorSelected: this.bodyIndicatorSelected,
            bodyIndicatorComplete: this.bodyIndicatorComplete,
            finalAllergy: this.finalAllergy,
            findingsSelected: this.findingsSelected,
            symptomsSelected: this.symptomsSelected,
            diagnosisSelected: this.diagnosisSelected,
            tempMedicationArray: this.tempMedicationArray,
            itemsfinding: this.itemsfinding,
            itemsymptoms: this.itemsymptoms,
            itemsdiagnosis: this.itemsdiagnosis,
            treatmentStatus: this.treatmentStatus,
            investigationStatus: true,
            suregeryOptionsTop: this.suregeryOptionsTop,
            suregeryOptions: this.suregeryOptions,
            inputBox: this.inputBox,
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
            symptomsComplete: this.symptomsComplete,
            diagnosisComplete: this.diagnosisComplete,
            treatmentComplete: this.treatmentComplete,
            treatmentArray: this.treatmentArray,
            investigationIndicatorComplete: true,
            investigationArray: this.investigationArray,
            surgeryComplete: this.surgeryComplete,
            surgerySelectedArray: this.surgerySelectedArray,
            instructionsComplete: this.instructionsComplete,
            instructionsSelected: this.instructionsSelected,
            medicationComplete: true,
            currentVaccinationComplete: this.currentVaccinationComplete,
            finalCurrentVaccinationArray: this.finalCurrentVaccinationArray,
            dueVaccinationComplete: this.dueVaccinationComplete,
            finalDueVaccinationArray: this.finalDueVaccinationArray,
            eyePresComplete: this.eyePresComplete,
            finalRightOD: this.finalRightOD,
            finalLeftOD: this.finalLeftOD,
            followDaysComplete: this.followDaysComplete,
            finalfollowUpDays: this.finalfollowUpDays,
            minutes: this.minutes,
            seconds: this.seconds,
            languageOptionSelected: this.languageOptionSelected
        };
        if (this.day < 9) {
            this.day = "0" + this.day.toString();
        }
        if (this.numericMonth < 9) {
            this.numericMonth = "0" + this.numericMonth.toString();
        }
        console.log();
        var dataToSend = {
            doctor_id: this.doctorData._id,
            precription: precription,
            smart_assistant_id: this.consultingPatient.smart_assistant_id._id,
            registration: this.consultingPatient,
            prescription_id: this.day.toString() + this.numericMonth.toString() + this.year.toString() + "-" + this.consultingPatient.id,
            refer_status: '',
            referDetail: ''
        };
        console.log(dataToSend);
        this.loading = true;
        this.userService.SaveDoctorPrescriptionForPatient(dataToSend).subscribe(function (data) {
            _this.loading = false;
            console.log(data);
            if (data.response == true) {
                _this.toastr.success(data.message, "Success");
                _this.socket.emit('registrationBooked', {
                    room_id: _this.doctorData.smart_pharmacy_id
                });
                _this.socket.emit('registrationBooked', {
                    room_id: _this.doctorData.smart_diagnostics_id
                });
                _this.router.navigate(['header-two-layout/dashboard-prescription']);
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
            $("#digitalOff").modal("hide");
        }, function (err) {
            console.log(err);
        });
        //this.ngOnDestroy()
    };
    DashboardPrescriptionComponent.prototype.incrementTimer = function () {
        if (this.seconds < 59) {
            this.seconds = this.seconds + 1;
        }
        else {
            this.seconds = 0;
            this.minutes = this.minutes + 1;
        }
    };
    DashboardPrescriptionComponent.prototype.getDay = function (n) {
        if (n < 10) {
            return "0" + n;
        }
        else {
            return n;
        }
    };
    DashboardPrescriptionComponent.prototype.openTestReports = function () {
        if (this.consultingPatient.reportPics && this.consultingPatient.reportPics.length > 0) {
            $("#Test-report-Modal").modal("show");
        }
    };
    DashboardPrescriptionComponent.prototype.getTestReportClass = function () {
        if (this.consultingPatient.reportPics && this.consultingPatient.reportPics.length > 0) {
            return 'badge green';
        }
    };
    DashboardPrescriptionComponent.prototype.getStatus = function (obj) {
        if (obj) {
            console.log(obj);
            return true;
        }
        else {
            return false;
        }
    };
    DashboardPrescriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-prescription',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-prescription/dashboard-prescription.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-prescription/dashboard-prescription.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"]])
    ], DashboardPrescriptionComponent);
    return DashboardPrescriptionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-prescription/dashboard-prescription.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPrescriptionModule", function() { return DashboardPrescriptionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/ng2-dnd.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_prescription_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-prescription/dashboard-prescription-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_prescription_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-prescription/dashboard-prescription.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardPrescriptionModule = /** @class */ (function () {
    function DashboardPrescriptionModule() {
    }
    DashboardPrescriptionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ng2_dnd__["a" /* DndModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__dashboard_prescription_routing_module__["a" /* DashboardPrescriptionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__dashboard_prescription_component__["a" /* DashboardPrescriptionComponent */]]
        })
    ], DashboardPrescriptionModule);
    return DashboardPrescriptionModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-prescription.module.chunk.js.map