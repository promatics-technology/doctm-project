webpackJsonp(["dashboard-prescription-pad-off.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-prescription-pad-off/dashboard-prescription-pad-off-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPrescriptionPadOffRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_prescription_pad_off_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-prescription-pad-off/dashboard-prescription-pad-off.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_prescription_pad_off_component__["a" /* DashboardPrescriptionPadOffComponent */]
    }
];
var DashboardPrescriptionPadOffRoutingModule = /** @class */ (function () {
    function DashboardPrescriptionPadOffRoutingModule() {
    }
    DashboardPrescriptionPadOffRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardPrescriptionPadOffRoutingModule);
    return DashboardPrescriptionPadOffRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-prescription-pad-off/dashboard-prescription-pad-off.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pad-list>li.half-li {\n    width: 33.33%;\n    float: left;\n}\n\n.pad-list>li>div {\n    text-overflow: unset;\n    overflow: unset;\n    white-space: normal; \n    min-height: 57px;\n    padding: 5px 2px;\n    display: table;\n    height: 65px;\n    /*word-break: break-all;*/\n}\n\n.pad-list .medication-li div {\n    display: table;\n    width: 100%;\n    min-height: 55px;\n}\n\n.red-btn.my-pad {\n    padding: 15px 15px;\n}\n\nli.medication-li {\n    width: 99%;\n}\n\nspan.diseasen-name {\n    display: table-cell;\n    vertical-align: middle;\n}\n\nspan.medication-transform {\n    font-size: 18px;\n    width: 100%;\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.pad-header>.blue-btn {\n    padding: 0px 1px;\n    border-right: 0;\n}\n\n.blue-btn .btn-custom {\n    padding: 16px 30px;\n    border-radius: 0;\n    min-width: 100%;\n    -webkit-box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12);\n            box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12);\n}\n\n.height-50 {\n    min-height: 144px;\n}\n\n.vacciSchedule-div>ul>li>div.active,\n.follow-ul>li.active,\n.frequency-ul li.active-cel,\n.duration-ul li.active-cel,\n.special-ul li.active-cel,\n.precond-ul>li.active-cel,\n.special-ul.hindi li.active-cel, \n.combined_frequency > li.active-cel, \n.combined_duration > li.active-cel,\n.combined_instruc > li.active-cel,\n.combined_inject > li.active-cel,\n.combined_instruc.combined_drop > li.active-cel{\n    background-color: #000;\n    color: #fff;\n    background: #000;\n}\n\n.sphere-ul>li.active,\n.sphere-ul.right>li.active {\n    background-color: #01b0f0;\n}\n\n.flex-inner .table {\n    margin-bottom: 0;\n}\n\n.flex-inner ol {\n    margin-bottom: 0;\n}\n\n.flex-inner ol>div {\n    width: 100%;\n    float: left;\n    margin-left: -10px;\n    font-weight: bold;\n    font-size: 12px;\n}\n\n.flex-inner ol>li {\n    font-size: 12px;\n    line-height: 15px;\n    word-break: break-all;\n    padding-right: 15px;\n    position: relative;\n}\n\n/*.flex-inner .medicationol > li{\n    margin-bottom: 8px;\n}*/\n\n.flex-inner .followol>li {\n    width: 100%;\n}\n\ninput.txt50 {\n    width: 100px;\n}\n\n@media (min-width: 768px) {\n    #eyeModal .modal-dialog {\n        width: 650px;\n    }\n}\n\n.help-note {\n    font-size: 10px;\n    font-style: italic;\n}\n\n.selected_preset {\n    width: 100%;\n    float: left;\n}\n\n.only-text {\n    padding: 8px 5px;\n    font-size: 12px;\n    border: 1px solid rgba(198, 217, 241, 1);\n}\n\n.medication-modal-body .medication-form>.form-group>div.only-text {\n    border: 1px solid rgba(198, 217, 241, 1);\n}\n\n.selected_preset .medication-form>.duration>div {\n    color: #222;\n}\n\n.medic-info {\n    border-top: 0;\n}\n\n.active.lightblue-btn {\n    background-color: #000;\n    color: #fff;\n}\n\n.combined_modal .modal-dialog {\n    width: 830px;\n}\n\n.combined_flex {\n    width: 100%;\n    float: left;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n}\n\n.combined_flex>div {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 33.33%;\n    flex: 1 1 33.33%;\n    margin: 0 2px;\n    border: 1px solid #b9b9b9;\n}\n\n.combined_heading {\n    width: 100%;\n    float: left;\n    color: #fff;\n    margin: 0;\n    padding: 5px 0;\n    text-align: center;\n    background-color: #00b0f0;\n}\n\n.combined_frequency,\n.combined_duration,\n.combined_instruc,\n.combined_inject {\n    width: 100%;\n    float: left;\n    margin: 0;\n    padding: 5px 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    list-style-type: none;\n}\n\n.combined_frequency>li,\n.combined_duration>li,\n.combined_instruc>li,\n.combined_inject>li {\n    width: 70px;\n    height: 70px;\n    margin: 3px;\n    cursor: pointer;\n    padding: 0 15px;\n    border-radius: 10px;\n    border: 1px solid #777;\n    text-align: center;\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    display: -webkit-box;\n    - display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.combined_flex>div ul>li.active {\n    background-color: #000;\n    color: #fff;\n}\n\n.combined_duration>li {\n    height: 32px;\n}\n\n.combined_flex>div.frquency_cmbnd ul {\n    background-color: #F2F2F2;\n}\n\n.combined_flex>div.duration_cmbnd ul {\n    background-color: #DAEDF4;\n}\n\n.combined_flex>div.instr_cmbnd ul.combined_instruc {\n    background-color: #EAF1DD;\n}\n\n.combined_flex>div.instr_cmbnd ul.combined_inject {\n    background-color: #FCEAD9;\n}\n\n.combined_flex>div.instr_cmbnd ul.combined_drop {\n    background-color: #FCEAD9;\n}\n\n.combined_flex>div.duration_cmbnd {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n}\n\n.combined_flex>div.instr_cmbnd .combined_inject {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.combined_flex>div.instr_cmbnd .combined_inject>li {\n    width: 100%;\n    float: left;\n    font-size: 20px;\n    height: 62px;\n}\n\n.combined_flex>div.instr_cmbnd .combined_instruc>li {\n    width: 120px;\n    height: 40px;\n}\n\n#combinedModal2 .combined_flex>div.instr_cmbnd .combined_instruc>li {\n    height: 90px;\n}\n\n.combined_flex>div.instr_cmbnd .combined_drop>li {\n    width: 50px;\n    height: 62px;\n}\n\n.combined_flex>div.instr_cmbnd .combined_dosage>li {\n    width: 50px;\n    height: 39.5px;\n}\n\n.btn_green {\n    font-size: 18px;\n    color: #fff;\n    background-color: #8BD053;\n}\n\np.help-note {\n    margin: 0 0 1px;\n}\n\n.btn.sm_green-btn.lang-btn {\n    background: -webkit-gradient(linear, left bottom, left top, from(rgb(201, 181, 232)), color-stop(rgb(217, 203, 238)), to(rgb(240, 234, 249)));\n    background: linear-gradient(to top, rgb(201, 181, 232), rgb(217, 203, 238), rgb(240, 234, 249));\n    background: -o-linear-gradient(to top, rgb(201, 181, 232), rgb(217, 203, 238), rgb(240, 234, 249));\n    border:1px solid rgb(201, 181, 232)\n}\n\n.btn.sm_green-btn.lang-btn.active, .btn.sm_green-btn.lang-btn:focus {\n    background: #000;\n    color: #fff;\n}\n\n/*.precond-ul>li.active-cel {\n    background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.5), rgba(0,0,0,0.1));\n}*/\n\nfieldset.fieldset-preset {\n    min-width: unset;\n    padding: 0 10px;\n    border: 1px solid rgba(56, 94, 138, 1);\n}\n\nlegend.legend-preset {\n    width: 20%;\n    border-bottom: none;\n    text-align: center;\n    margin-bottom: 10px;\n}\n\n.tags-listing-div .fieldset-preset .tags-listing {\n    width: 100%;\n    float: left;\n    overflow: auto;\n    max-height: 280px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -moz-flex;\n    display: -o-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    list-style-type: none;\n    padding: 0px;\n    border-radius: 3px;\n}\n\n.li-blocked span {\n    font-weight: normal;\n}\n\n#translated_div .modal-dialog .modal-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -moz-flex;\n    display: -o-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n}\n\n#translated_div .modal-dialog .modal-header>* {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\n.padview-header {\n    width: 100%;\n    float: left;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -moz-flex;\n    display: -o-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\n.pad-view-flx {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 50%;\n            flex: 1 1 50%;\n    -webkit-flex: 1 1 50%;\n    -moz-flex: 1 1 50%;\n    -o-flex: 1 1 50%;\n}\n\n#previewModal .padview-bodyright {\n    width: 100%;\n    float: left;\n    padding: 9.5px 10px;\n    margin-bottom: 10px;\n    border: 2px solid #333;\n    border-right: 0;\n}\n\n.padview-bodyright.historyprescription{\n    border-left: 0;\n}\n\n.reportImg img{\n    display: block;\n    max-width: 400px;\n    height: 400px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    text-align: center;\n    margin: 0 auto;\n    margin-top:5px;\n    margin-bottom:5px;\n}\n\n.wrap{\n    width:95%;\n    max-height:450px;\n    min-height:450px; \n    overflow-x:hidden;\n    overflow-y: scroll; \n}\n\n.cstm-gender-field{\n    position: relative;\n}\n\n.cstm-gender-field select{\n    position: absolute;\n    top: 0;\n    right:0px;\n    width: 75px;\n    font-size: 13px;\n    border-left: none;\n    border-radius: 0 5px 5px 0;\n    border-color: #385e8a;\n}\n\n.camera-div{\n    height: 500px;\n}\n\n.customize-pad{\n    border:transparent;\n}\n\n.cstm_profile{\n    float: none;\n    margin:0 auto;\n}\n\n.pdd-all{\n    margin-top: 15px;\n    border:1px solid #e4e4e4;\n    padding:5px;\n    position: relative; \n}\n\n.pdd-all .cancel-btn{\n    position: absolute;\n    top:0px;\n    right:5px;\n    color:red;\n    color:pointer;\n}\n\n.pdd-all .cancel-btn i{\n    color:pointer!important;\n}\n\n.btn_grrin {\n    font-size: 14px;\n    border-radius:4px; \n}\n\n.mg_ttop b{\n    padding-top:6px;\n    display:inline-block;\n}\n\n.mg_btm{\n    margin:8px 0px; \n}\n\n.mg_ttop{\n    position:relative;\n}\n\n.mg_ttop .cancel-btn{\n    position: absolute;\n    top:0;\n    right:0;\n}\n\n.row_cstm_style{\n    border-top:1px solid #000;\n    border-bottom:1px solid #000;\n}\n\n.btn-grin{\n    border-radius: 1px;\n    border: 1px solid rgb(0, 0, 0);\n    background-color: rgb(70, 170, 197);\n    color:#fff;\n}\n\n.btn_dispnse{\n    border-radius: 1px;\n    border: 1px solid rgb(0, 0, 0);\n    background-color:#B5E51D;\n    color:#000;\n}\n\ninput.txtcstm{\n    border-radius: 0px!important;\n    border:1px solid #000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-prescription-pad-off/dashboard-prescription-pad-off.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"prescription-pad\">\n    <div class=\"customize-pad row\">\n        <div class=\"col-lg-3 col-lg-offset-4\">\n            <div class=\"customize-pad-sidebar-wrapper\">\n                <div class=\"customize-pad-sidebar\">\n                    <div class=\"pad-profile\">\n                        <div class=\"pad-image\">\n                            <img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!consultingPatient.pateintPic\"/>\n                            <img src=\"{{pateintPicPath}}{{consultingPatient.pateintPic}}\" class=\"img-responsive\" *ngIf=\"consultingPatient.pateintPic\"/>\n                        </div>\n                        <div class=\"pad-name green-btn\">\n                            <div class=\"\">\n                                <p> {{consultingPatient.pateintName}}</p>\n                                <p class=\"m-0\"> {{consultingPatient.location}}, {{consultingPatient.city}} </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"pad-profile-button\">\n                        <div class=\"pad-hstry\">\n                            <a href=\"javascript:;\" (click)=\"openHistoryModal()\">\n                                Previous Prescription <span class=\"{{getHistoryClass()}}\"> </span>\n                            </a>\n                        </div>\n                        <div class=\"pad-test-reprt\" (click)=\"openTestReports()\">\n                            <a href=\"javascript:;\">\n                                Test Reports <span class=\"{{getTestReportClass()}}\"> </span>\n                            </a>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-2 mg_ttop\">\n            <br><br><br>\n            <div class=\"refer-header\" data-target=\"#referModal\" data-dismiss=\"modal\" data-toggle=\"modal\">\n                <button class=\"btn red-btn full-width\" style=\"width:50%;\">Refer</button>\n            </div>\n            \n            <div class=\"cancel-btn\" routerLink=\"/header-two-layout/dashboard-prescription\">\n                <i class=\"fa fa-times\" style=\"color: red;font-size: 54px;\"></i>\n            </div> \n        </div>\n        <div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3\" style=\"margin-top:12px;\">\n            <div class=\"row row_cstm_style\">\n                <div class=\"col-lg-3 mg_btm\">\n                    <div class=\"spcer\"  style=\"padding-top: 12px;\">\n                        <div> Prescription id:  </div>\n                        <div class=\"strong\" *ngIf=\"!consultingPatient.ID\"> {{getDay(day)}}{{getDay(numericMonth)}}{{year}}-{{consultingPatient.id}} </div>\n                        <div class=\"strong\" *ngIf=\"consultingPatient.ID\"> {{getDay(day)}}{{getDay(numericMonth)}}{{year}}-{{consultingPatient.ID}} </div>    \n                    </div>\n                </div>\n                <div class=\"col-lg-3 mg_btm\">\n                    <div class=\"spcer\" style=\"padding-top: 12px;\">\n                        <p style=\"margin-bottom: 0px;\"> <span class=\"color-blue\"> {{day}} {{month}},</span> {{year}} </p>\n                        <p> ({{minutes}} min :{{seconds}} sec) </p>\n                        <!-- <countdown-timer [start]=\"'2017-01-01 00:00:00'\"></countdown-timer> -->\n                    </div>\n                </div>\n                <div class=\"col-lg-3 mg_btm\">\n                    <div class=\"\">\n                        <div> Age: </div>\n                        <div class=\"cstm-gender-field\">\n                            <input type=\"text\" name=\"\" class=\"form-control txtfield\" placeholder=\"\" value=\"{{consultingPatient.age_in_years}}\" [(ngModel)]=\"consultingPatient.age_in_years\" [ngModelOptions]=\"{standalone: true}\"/>\n                           <!--  <select class=\"form-control txtfield\" [(ngModel)]=\"consultingPatient.gender\" [ngModelOptions]=\"{standalone: true}\">\n                                <option value=\"Male\">Male</option>\n                                <option value=\"Female\">Female</option>\n                                <option value=\"Other\">Other</option>\n                            </select> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 mg_btm\">\n                    <div class=\"\">\n                        <div> Sex: </div>\n                        <div class=\"\">\n                            <!-- <input type=\"text\" name=\"\" class=\"form-control txtfield\" placeholder=\"\" value=\"{{consultingPatient.age}}\" [(ngModel)]=\"consultingPatient.age\" [ngModelOptions]=\"{standalone: true}\"/> -->\n                            <select class=\"form-control \" [(ngModel)]=\"consultingPatient.gender\" [ngModelOptions]=\"{standalone: true}\">\n                                <option value=\"Male\">Male</option>\n                                <option value=\"Female\">Female</option>\n                                <option value=\"Other\">Other</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-6 mg_btm\">\n                    <div class=\"spcer\">\n                        <div class=\"wght\"> Weight:<span> (Kg)</span></div>\n                        <input type=\"text\" name=\"\" class=\"form-control txtfield text-center\" placeholder=\"\" value=\" {{consultingPatient.weight}}\" [(ngModel)]=\"consultingPatient.weight\" [ngModelOptions]=\"{standalone: true}\" />\n                    </div>\n                </div>\n                <div class=\"col-lg-6 mg_btm\">\n                    <div class=\"spcer\">\n                        <div class=\"hght\"> Height: <span> (cm) </span> </div>\n                        <input type=\"text\" name=\"\" class=\"form-control txtfield text-center\" placeholder=\"\" value=\" {{consultingPatient.height}}\" [(ngModel)]=\"consultingPatient.height\" [ngModelOptions]=\"{standalone: true}\"  />\n                    </div>\n                </div>\n\n                <div class=\"col-lg-12\">\n                    <div class=\"wght\">BP: <span>(mmHg)</span></div>\n                    <div class=\"col-lg-6 mg_btm\" style=\" padding: 0px 14px 0px 0px;\">\n                        <div class=\"spcer\">\n                            <div class=\"wght\"> SYS:<span>(mmHg)</span> </div>\n                            <input type=\"text\" name=\"\" class=\"form-control txtfield text-center\" placeholder=\"\" value=\" {{consultingPatient.bp}}\" [(ngModel)]=\"consultingPatient.bp\" [ngModelOptions]=\"{standalone: true}\" />\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6 mg_btm\" style=\"padding: 0px 0px 0px 15px;\">\n                        <div class=\"spcer\">\n                            <div class=\"wght\"> DIA:<span>(mmHg)</span> </div>\n                            <input type=\"text\" name=\"\" class=\"form-control txtfield text-center\" placeholder=\"\" value=\" {{consultingPatient.dia}}\" [(ngModel)]=\"consultingPatient.dia\" [ngModelOptions]=\"{standalone: true}\" />\n                        </div>\n                    </div>\n<!--                     <div class=\"col-lg-6 mg_btm\">\n                        <div class=\"spcer\">\n                            <div class=\"wght\">BP: <span>(mmHg)</span></div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\" style=\"padding: 0px;\">\n                                    <div class=\"col-lg-3 text-center\">SYS</div>\n                                    <div class=\"col-lg-9\">\n\n                                        <input type=\"text\" name=\"\" class=\"form-control txtfield text-center\" placeholder=\"\" value=\" {{consultingPatient.bp}}\" placeholder=\"SYS\" [(ngModel)]=\"consultingPatient.bp\" [ngModelOptions]=\"{standalone: true}\" />\n                                    </div>\n\n                                </div>\n                                <div class=\"col-lg-6\" style=\"padding: 0px;\">\n                                    <div class=\"col-lg-3 text-center\">DIA</div>\n                                    <div class=\"col-lg-9\">\n\n                                        <input type=\"text\" name=\"\" class=\"form-control txtfield text-center\" placeholder=\"\" value=\" {{consultingPatient.bp}}\" placeholder=\"DIA\" [(ngModel)]=\"consultingPatient.bp\" [ngModelOptions]=\"{standalone: true}\" />\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div> -->\n                </div>\n\n\n                <div class=\"col-lg-6 mg_btm\">\n                    <div class=\"spcer\">\n                        <div class=\"wght\"> RBS: <span> (mg/dL) </span></div>\n                        <input type=\"text\" name=\"\" class=\"form-control txtfield text-center\" placeholder=\"\" value=\" {{consultingPatient.rbs}}\" [(ngModel)]=\"consultingPatient.rbs\" [ngModelOptions]=\"{standalone: true}\" />\n                    </div>\n                </div>\n                <div class=\"col-lg-6 mg_btm\">\n                    <div class=\"spcer\">\n                        <div class=\"wght\"> Pulse: <span> (per min) </span></div>\n                        <input type=\"text\" name=\"\" class=\"form-control txtfield text-center\" placeholder=\"\" value=\" {{consultingPatient.pulse}}\" [(ngModel)]=\"consultingPatient.pulse\" [ngModelOptions]=\"{standalone: true}\" />\n                    </div>\n                </div>\n                <div class=\"col-lg-6 mg_btm\">\n                    <div class=\"spcer\">\n                        <div class=\"wght\"> SpO2: <span> (%) </span></div>\n                        <input type=\"text\" name=\"\" class=\"form-control txtfield text-center\" placeholder=\"\" value=\" {{consultingPatient.spo}}\" [(ngModel)]=\"consultingPatient.spo\" [ngModelOptions]=\"{standalone: true}\" />\n                    </div>\n                </div>\n                <div class=\"col-lg-6 mg_btm\">\n                    <div class=\"spcer\">\n                        <div class=\"wght\"> Temperature: <span> (0F) </span></div>\n                        <input type=\"text\" name=\"\" class=\"form-control txtfield text-center\" placeholder=\"\" value=\" {{consultingPatient.temp}}\" [(ngModel)]=\"consultingPatient.temp\" [ngModelOptions]=\"{standalone: true}\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"text-center foot_prescription col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12\" style=\"position: fixed;bottom:8px;\">\n        <div class=\"col-lg-1 col-lg-offset-1 mg_ttop\">\n            <b>Fee</b>\n        </div>\n        <div class=\"col-lg-2 mg_ttop\">\n\n            <input type=\"text\" name=\"\" class=\"form-control txtfield txtcstm\" [(ngModel)]=\"consultingPatient.fee\" [ngModelOptions]=\"{standalone: true}\"/>\n        </div>\n        <div class=\"col-lg-3 mg_ttop\">\n            <div class=\"refer-header\" data-target=\"#followModal\" data-toggle=\"modal\" data-dismiss=\"modal\">\n                <button class=\"btn btn-grin  full-width\">Follow-up</button>\n            </div>\n        </div> \n        <div class=\"col-lg-3 mg_ttop\">\n            <button class=\"btn btn_dispnse bnt-lg full-width\" (click)=\"saveDoctorPrescriptionForPatient()\" >\n                DISPENSE\n            </button>\n        </div>\n        \n\n\n\n    </div>\n</div>\n<!-- Modal -->\n<!-- <div class=\"modal fade cus-modal\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Select your prescription fields </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"presc-modal-body\">\n                        <ul class=\"presc-ul\">\n                            <li *ngFor=\"let item of prescList; let i = index\" class=\"{{getClass(i)}}\">\n                                <span (click)=\"popupClass(i)\">\n                                    {{item.item}}\n                                    <div class=\"small cus-switch pull-right\">\n                                        <label class=\"switch\">\n                                            <input type=\"checkbox\" [checked]=\"item.status\" (change)=\"prescListStatusChange(i)\">\n                                            <span class=\"slider round\"></span>\n                                </label>\n                    </div>\n                    </span>\n                    </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"saveSideBarFields()\"> Save </button>\n            <button class=\"btn btn-custom\" type=\"button\" data-dismiss=\"modal\" data-toggle=\"modal\" (click)=\"cancelSideBarFields()\"> Cancel </button>\n        </div>\n    </div>\n</div>\n</div> -->\n<!-- Preconditional Modal -->\n<!-- <div class=\"modal fade cus-modal\" id=\"preconditionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Pre Condition </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"precond-modal-body\">\n                        <ul class=\"precond-ul\">\n                            <li *ngFor=\"let data of preCondMdlArray; let i = index\" (click)=\"setPopUpValues(data, 'preconditions', i)\" [ngClass]=\"data.status ? 'active' : ''\"> <span *ngIf=\"data.purpose!='custom'\">{{data.text}}</span></li>\n                            <li class=\"other-text\" (click)=\"precmodalclick(10)\">\n                                <tag-input class=\"selectize-qual\" [(ngModel)]='otherPre' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" [maxItems]=\"4-precondlength\" secondaryPlaceholder=\"Anaemia, Smoking etc.\" theme='bootstrap'>\n                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [appendToBody]=\"false\" [autocompleteItems]=\"preConditionPresetArray\"></tag-input-dropdown>\n                                </tag-input>\n                            </li>\n                        </ul>\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12 p-0\" *ngIf=\"condition==true\">\n                            <textarea class=\"form-control txtfield\" rows=\"5\"></textarea>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"setFields('preconditions')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Allergy Modal -->\n<!-- <div class=\"modal fade cus-modal\" id=\"allergyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Allergy </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"allergy-modal-body wrap-div\">\n                        <div class=\"allergy-wrap\">\n                            <ul>\n                                <li *ngFor=\"let allergy of AllergyArray\">\n                                    <div class=\"allergy-left\">\n                                        {{ allergy.allergyName }}\n                                    </div>\n                                    <ul class=\"allergy-ul\">\n                                        <li *ngFor=\"let source of allergy.allergySource; let i = index\" (click)=\"setPopUpValues(source, 'allergy', i)\" [ngClass]=\"source.status ? 'active' : ''\"> {{source.text}} </li>\n                                    </ul>\n                                </li>\n                                <li class=\"other-text\">\n                                    <div class=\"allergy-left\">\n                                        Other\n                                    </div>\n                                    <ul class=\"allergy-ul\">\n                                        <li>\n                                            <tag-input class=\"selectize-qual\" [(ngModel)]='otherAllergy' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"allergy, allergy,....\" theme='bootstrap' [maxItems]=\"4-allergySelected.length\">\n                                                <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [appendToBody]=\"false\" [autocompleteItems]=\"allergyPresetArray\"></tag-input-dropdown>\n                                            </tag-input>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"setFields('allergy')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Body Indicators -->\n<!-- <div class=\"modal fade cus-modal\" id=\"bodyIndicatorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Body Indicators </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"indicator-modal-body\">\n                        <ul class=\"indicator-ul\">\n                            <li>\n                                <div class=\"col-md-7 col-sm-7 col-xs-12\">\n                                    <div class=\"indicator-heading\">\n                                        Temperature (<sup>o</sup>F)\n                                    </div>\n                                </div>\n                                <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='bodyIndicator.temp'>\n                                        <option value=\"Select\"> Select </option>\n                                        <option value=\"{{value}}\" *ngFor=\"let value of temperature_range\"> {{value}} </option>\n                                    </select>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"col-md-7 col-sm-7 col-xs-12\">\n                                    <div class=\"indicator-heading\">\n                                        Pulse (per min)\n                                    </div>\n                                </div>\n                                <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='bodyIndicator.pulse'>\n                                        <option value=\"Select\"> Select </option>\n                                        <option value=\"{{value}}\" *ngFor=\"let value of pulse_range\"> {{value}} </option>\n                                    </select>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"col-md-7 col-sm-7 col-xs-12\">\n                                    <div class=\"indicator-heading\">\n                                        Blood Pressure (mmHg)\n                                    </div>\n                                </div>\n                                <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                                            <select class=\"form-control txtfield\" [(ngModel)]='bodyIndicator.sys'>\n                                                <option value=\"Select\"> SYS </option>\n                                                <option value=\"{{value}}\" *ngFor=\"let value of sys_range\"> {{value}} </option>\n                                            </select>\n                                        </div>\n                                        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                                            <select class=\"form-control txtfield\" [(ngModel)]='bodyIndicator.dia'>\n                                                <option value=\"Select\"> DIA </option>\n                                                <option value=\"{{value}}\" *ngFor=\"let value of dia_range\"> {{value}} </option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"col-md-7 col-sm-7 col-xs-12\">\n                                    <div class=\"indicator-heading\">\n                                        SpO<sub>2</sub> (%)\n                                    </div>\n                                </div>\n                                <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='bodyIndicator.spo'>\n                                        <option value=\"Select\"> Select </option>\n                                        <option value=\"{{value}}\" *ngFor=\"let value of spo_range\"> {{value}} </option>\n                                    </select>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"col-md-7 col-sm-7 col-xs-12\">\n                                    <div class=\"indicator-heading\">\n                                        RBS (mg/dL)\n                                    </div>\n                                </div>\n                                <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='bodyIndicator.rbs'>\n                                        <option value=\"Select\"> Select </option>\n                                        <option value=\"{{value}}\" *ngFor=\"let value of rbs_range\"> {{value}} </option>\n                                    </select>\n                                </div>\n                            </li>\n                        </ul>\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"condition==true\">\n                            <textarea class=\"form-control txtfield\" rows=\"5\"></textarea>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"setFields('bodyIndicators')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Clinic Findings -->\n<!-- <div class=\"modal fade cus-modal\" id=\"clinicFindModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Patient Complaints </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"finding-modal-body wrap-div\">\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <tag-input class=\"selectize-qual\" [(ngModel)]='itemsfinding' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Bleeding nose, dry eyes, body rashes etc.\" theme='bootstrap' (onRemove)=\"removePresets('findings',$event)\" (onAdd)=\"addPresets('findings',itemsfinding[itemsfinding.length-1] )\" [displayBy]=\"'value'\" [maxItems]=\"4\" [blinkIfDupe]=true (keyup)=\"onTextChange('Patient Complaints',$event.target.value)\">\n                                <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorClinicalObservation\"></tag-input-dropdown>\n                            </tag-input>\n                        </div>\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" name=\"\" [(ngModel)]=\"filter\" /> Add to presets </label>\n                            </div>\n                        </div>\n                        <div class=\"addPreset-box\">\n                            <button class=\"btn lightblue-btn\"> <i class=\"fa fa-plus\"></i>\n                                <br/> Preset </button>\n                            <input type=\"text\" class=\"form-control txtfield sm-txtfield\" name=\"\" placeholder=\"Preset Name\" />\n                        </div>\n                        <div class=\"tags-listing-div\" *ngIf=\"findPresets==true\">\n                            <fieldset class=\"fieldset-preset\">\n                                <legend class=\"legend-preset\">Presets</legend>\n                                <ul class=\"tags-listing\" *ngIf=\"findingPreSetVals && findingPreSetVals.length>0\">\n                                    <li *ngFor=\"let preset of findingPreSetVals\" [ngClass]=\"(preset.status==true) ? 'active' : ''\" (click)=\"selectPreset('findings', preset)\"> <a href=\"javascript:void(0)\"> {{preset.value}} </a> </li>\n                                </ul>\n                                <h5 class=\"text-muted\" style=\"text-align:center\" *ngIf=\"!findingPreSetVals || findingPreSetVals.length<1\">\n                                    No Presets Found, create them on Create Preset page\n                                </h5>\n                            </fieldset>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-yellow\" type=\"button\" (click)=\"findingPresets()\"> Preset </button>\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"setFields('findings')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Sympotons  -->\n<!-- <div class=\"modal fade cus-modal\" id=\"symptomsModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Symptoms </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"symptoms-modal-body wrap-div\">\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <tag-input class=\"selectize-qual\" [(ngModel)]='itemsymptoms' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Vomiting, Vertigo, Fever etc.\" theme='bootstrap' (onRemove)=\"removePresets('symptoms',$event )\" (onAdd)=\"addPresets('symptoms',itemsymptoms[itemsymptoms.length-1] )\" [displayBy]=\"'value'\" [maxItems]=\"4\" [blinkIfDupe]=true (keyup)=\"onTextChange('SYMPTOMS',$event.target.value)\">\n                                <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorSymptomsDB\"></tag-input-dropdown>\n                            </tag-input>\n                        </div>\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" name=\"\" [(ngModel)]=\"filterSymptoms\" /> Add to presets </label>\n                            </div>\n                        </div>\n                        <div class=\"tags-listing-div\" *ngIf=\"symptomspreset==true\">\n                            <fieldset class=\"fieldset-preset\">\n                                <legend class=\"legend-preset\">Presets</legend>\n                                <ul class=\"tags-listing\" *ngIf=\"symptomsPresetArray && symptomsPresetArray.length>0\">\n                                    <li *ngFor=\"let preset of symptomsPresetArray\" [ngClass]=\"(preset.status==true) ? 'active' : ''\" (click)=\"selectPreset('symptoms', preset)\"> <a href=\"javascript:void(0)\"> {{preset.value}} </a> </li>\n                                </ul>\n                                <h5 class=\"text-muted\" style=\"text-align:center\" *ngIf=\"!symptomsPresetArray || symptomsPresetArray.length<1\">\n                                    No Presets Found, create them on Create Preset page\n                                </h5>\n                            </fieldset>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-yellow\" type=\"button\" (click)=\"symPresets()\"> Preset </button>\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"setFields('symptoms')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Diagnosis  -->\n<!-- <div class=\"modal fade cus-modal\" id=\"diagnosisModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Diagnosis </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"diagnosis-modal-body wrap-div\">\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <tag-input class=\"selectize-qual\" [(ngModel)]='itemsdiagnosis' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Viral fever, cold, etc.\" theme='bootstrap' (onRemove)=\"removePresets('diagnosis',$event )\" (onAdd)=\"addPresets('diagnosis',itemsdiagnosis[itemsdiagnosis.length-1] )\" [displayBy]=\"'value'\" [maxItems]=\"4\" [blinkIfDupe]=true (keyup)=\"onTextChange('Diagnosis',$event.target.value)\">\n                                <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorDiagnosisDB\"></tag-input-dropdown>\n                            </tag-input>\n                        </div>\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" value=\"diagnosis\" [(ngModel)]=\"filterDiagnosis\" name=\"\" /> Add to presets </label>\n                            </div>\n                        </div>\n                        <div class=\"tags-listing-div\" *ngIf=\"diagnosispreset==true\">\n                            <fieldset class=\"fieldset-preset\">\n                                <legend class=\"legend-preset\">Presets</legend>\n                                <ul class=\"tags-listing\" *ngIf=\"diagnosisPresetArray && diagnosisPresetArray.length>0\">\n                                    <li *ngFor=\"let preset of diagnosisPresetArray\" [ngClass]=\"(preset.status==true) ? 'active' : ''\" (click)=\"selectPreset('diagnosis', preset)\"> <a href=\"javascript:void(0)\"> {{preset.value}} </a> </li>\n                                </ul>\n                                <h5 class=\"text-muted\" style=\"text-align:center\" *ngIf=\"!diagnosisPresetArray || diagnosisPresetArray.length<1\">\n                                    No Presets Found, create them on Create Preset page\n                                </h5>\n                            </fieldset>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-yellow\" type=\"button\" (click)=\"diagPresets()\"> Preset </button>\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"setFields('diagnosis')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Medication  -->\n<!-- <div class=\"modal fade cus-modal\" id=\"medicationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Medication </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"medication-modal-body wrap-div\">\n                        <div class=\"sidebar-preset\">\n                            <ul class=\"presetul\">\n                                <li class=\"{{mediClass(0)}}\" (click)=\"medicaTab(0,'Tablet')\"> Tablet </li>\n                                <li class=\"{{mediClass(1)}}\" (click)=\"medicaTab(1,'Capsule')\"> Capsule </li>\n                                <li class=\"{{mediClass(2)}}\" (click)=\"medicaTab(2,'Syrup')\"> Syrup </li>\n                                <li class=\"{{mediClass(3)}}\" (click)=\"medicaTab(3,'Suspension')\"> Suspension </li>\n                                <li class=\"{{mediClass(4)}}\" (click)=\"medicaTab(4,'Emulsion')\"> Emulsion </li>\n                                <li class=\"{{mediClass(5)}}\" (click)=\"medicaTab(5,'Solution')\"> Solution </li>\n                                <li class=\"{{mediClass(6)}}\" (click)=\"medicaTab(6,'Injection')\"> Injection </li>\n                                <li class=\"{{mediClass(7)}}\" (click)=\"medicaTab(7,'Cream')\"> Cream </li>\n                                <li class=\"{{mediClass(14)}}\" (click)=\"medicaTab(14,'Ointment')\"> Ointment </li>\n                                <li class=\"{{mediClass(8)}}\" (click)=\"medicaTab(8,'Gel')\"> Gel </li>\n                                <li class=\"{{mediClass(13)}}\" (click)=\"medicaTab(13,'Lotion')\"> Lotion </li>\n                                <li class=\"{{mediClass(9)}}\" (click)=\"medicaTab(9,'Drops')\"> Drops </li>\n                                <li class=\"{{mediClass(10)}}\" (click)=\"medicaTab(10,'Aerosols')\"> Aerosols &amp; Inhalent </li>\n                                <li class=\"{{mediClass(11)}}\" (click)=\"medicaTab(11,'Powder')\"> Powder &amp; Granule </li>\n                                <li class=\"{{mediClass(12)}}\" (click)=\"medicaTab(12,'Mouthwash')\"> Mouthwash &amp; Gargle </li>\n                            </ul>\n                        </div>\n                        <div class=\"medicine-body\">\n                            <div class=\"medicine-wrap\">\n                                <div class=\"\" *ngIf=\"medicationStatus[0].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Tablet </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationTabArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Tablet',$event.target.value)\" (onRemove)=\"onRemoveMedName('TabletInfo',medication.tab[i])\" (onAdd)=\"openFrequencyModalFromMed('TabletInfo',medication.tab[i])\" [(ngModel)]='medication.tab[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationTabletDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.tab[i])\"><span class=\"{{getMedFrequencyClass(medication.tab[i].frequency)}}\">{{medication.tab[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.tab[i])\"><span class=\"{{getMedDurationClass(medication.tab[i].duration)}}\">{{medication.tab[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.tab[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationTabletInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Tab',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div *ngIf=\"i == medicationTabArray.length-1\" class=\"li-close plus\" (click)=\"addMoreTab('Tab')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[1].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Capsule </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationCapArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Capsule',$event.target.value)\" (onRemove)=\"onRemoveMedName('CapsuleInfo',medication.cap[i])\" (onAdd)=\"openFrequencyModalFromMed('CapsuleInfo',medication.cap[i])\" [(ngModel)]='medication.cap[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationCapsuleDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.cap[i])\"><span class=\"{{getMedFrequencyClass(medication.cap[i].frequency)}}\">{{medication.cap[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.cap[i])\"><span class=\"{{getMedDurationClass(medication.cap[i].duration)}}\">{{medication.cap[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.cap[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationCapsuleInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Cap',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationCapArray.length-1\" (click)=\"addMoreTab('Cap')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[2].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Syrup </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationSypArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Syrup',$event.target.value)\" (onRemove)=\"onRemoveMedName('SyrupInfo',medication.syp[i])\" (onAdd)=\"openFrequencyModalFromMed('SyrupInfo',medication.syp[i])\" [(ngModel)]='medication.syp[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSyrupDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.syp[i])\"><span class=\"{{getMedFrequencyClass(medication.syp[i].frequency)}}\">{{medication.syp[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-toggle=\"modal\" data-target=\"#combinedModal4\" (click)=\"openFrequencyModal(medication.syp[i])\"><span class=\"{{getMedDosageClass(medication.syp[i].dosage)}}\">{{medication.syp[i].dosage}} (ml) </span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.syp[i])\"><span class=\"{{getMedDurationClass(medication.syp[i].duration)}}\">{{medication.syp[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.syp[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSyrupInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Syp',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationSypArray.length-1\" (click)=\"addMoreTab('Syp')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[3].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Suspension </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationSuspArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Suspension',$event.target.value)\" (onRemove)=\"onRemoveMedName('SuspensionInfo',medication.susp[i])\" (onAdd)=\"openFrequencyModalFromMed('SuspensionInfo',medication.susp[i])\" [(ngModel)]='medication.susp[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSuspensionDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.susp[i])\"><span class=\"{{getMedFrequencyClass(medication.susp[i].frequency)}}\">{{medication.susp[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-toggle=\"modal\" data-target=\"#combinedModal4\" (click)=\"openFrequencyModal(medication.susp[i])\"><span class=\"{{getMedDosageClass(medication.susp[i].dosage)}}\">{{medication.susp[i].dosage}} (ml) </span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#durationModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.susp[i])\"><span class=\"{{getMedDurationClass(medication.susp[i].duration)}}\">{{medication.susp[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.susp[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSuspensionInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Susp',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationSuspArray.length-1\" (click)=\"addMoreTab('Susp')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[4].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Emulsion </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationEmulsnArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Emulsion',$event.target.value)\" (onRemove)=\"onRemoveMedName('EmulsionInfo',medication.emulsn[i])\" (onAdd)=\"openFrequencyModalFromMed('EmulsionInfo',medication.emulsn[i])\" [(ngModel)]='medication.emulsn[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationEmulsionDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.emulsn[i])\"><span class=\"{{getMedFrequencyClass(medication.emulsn[i].frequency)}}\">{{medication.emulsn[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-toggle=\"modal\" data-target=\"#combinedModal4\" (click)=\"openFrequencyModal(medication.emulsn[i])\"><span class=\"{{getMedDosageClass(medication.emulsn[i].dosage)}}\">{{medication.emulsn[i].dosage}} (ml) </span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.emulsn[i])\"><span class=\"{{getMedDurationClass(medication.emulsn[i].duration)}}\">{{medication.emulsn[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.emulsn[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationEmulsionInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Emulsn',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationEmulsnArray.length-1\" (click)=\"addMoreTab('Emulsn')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[5].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Solution </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationSolutionArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Solution',$event.target.value)\" (onRemove)=\"onRemoveMedName('SolutionInfo',medication.tab[i])\" (onAdd)=\"openFrequencyModalFromMed('SolutionInfo',medication.solution[i])\" [(ngModel)]='medication.solution[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSolutionDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.solution[i])\"><span class=\"{{getMedFrequencyClass(medication.solution[i].frequency)}}\">{{medication.solution[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-toggle=\"modal\" data-target=\"#combinedModal4\" (click)=\"openFrequencyModal(medication.solution[i])\"><span class=\"{{getMedDosageClass(medication.solution[i].dosage)}}\">{{medication.solution[i].dosage}} (ml) </span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal4\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.solution[i])\"><span class=\"{{getMedDurationClass(medication.solution[i].duration)}}\">{{medication.solution[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.solution[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationSolutionInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Solution',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationSolutionArray.length-1\" (click)=\"addMoreTab('Solution')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[6].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Injection </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationInjArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Injection',$event.target.value)\" (onRemove)=\"onRemoveMedName('InjectionInfo',medication.injection[i])\" (onAdd)=\"openFrequencyModalFromMed('InjectionInfo',medication.injection[i])\" [(ngModel)]='medication.injection[0].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationInjectionDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.injection[i])\"><span class=\"{{getMedFrequencyClass(medication.injection[i].frequency)}}\">{{medication.injection[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-target=\"#combinedModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.injection[i])\"><span class=\"{{getMedModeClass(medication.injection[i].mode)}}\">{{medication.injection[i].mode}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.injection[i])\"><span class=\"{{getMedDurationClass(medication.injection[i].duration)}}\">{{medication.injection[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.injection[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationInjectionInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Inj',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationInjArray.length-1\" (click)=\"addMoreTab('Inj')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[7].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Cream </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationCreamArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Cream',$event.target.value)\" (onRemove)=\"onRemoveMedName('CreamInfo',medication.cream[i])\" (onAdd)=\"openFrequencyModalFromMed('CreamInfo',medication.cream[i])\" [(ngModel)]='medication.cream[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationCreamDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.cream[i])\"><span class=\"{{getMedFrequencyClass(medication.cream[i].frequency)}}\">{{medication.cream[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.cream[i])\"><span class=\"{{getMedDurationClass(medication.cream[i].duration)}}\">{{medication.cream[i].duration}}</span></div>\n                                                </div>\n\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.cream[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationCreamInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Cream',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationCreamArray.length-1\" (click)=\"addMoreTab('Cream')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[8].status==true\">\n                                    <div class=\"medic-heading\" >\n                                        <div class=\"medicHead\"> Gel </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationGelArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Gel',$event.target.value)\" (onRemove)=\"onRemoveMedName('GelInfo',medication.gel[i])\" (onAdd)=\"openFrequencyModalFromMed('GelInfo',medication.gel[i])\" [(ngModel)]='medication.gel[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationGelDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.gel[i])\"><span class=\"{{getMedFrequencyClass(medication.gel[i].frequency)}}\">{{medication.gel[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.gel[i])\"><span class=\"{{getMedDurationClass(medication.gel[i].duration)}}\">{{medication.gel[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.gel[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationGelInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Gel',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationGelArray.length-1\" (click)=\"addMoreTab('Gel')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[9].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Drops </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationDropsArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Drops',$event.target.value)\" (onRemove)=\"onRemoveMedName('DropsInfo',medication.drops[i])\" (onAdd)=\"openFrequencyModalFromMed('DropsInfo',medication.drops[i])\" [(ngModel)]='medication.drops[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationDropsDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal3\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.drops[i])\"><span class=\"{{getMedFrequencyClass(medication.drops[i].frequency)}}\">{{medication.drops[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group frequency duration\">\n                                                    <div data-target=\"#combinedModal3\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.drops[i])\"><span class=\"{{getMedQuantityClass(medication.drops[i].quantity)}}\">{{medication.drops[i].quantity}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal3\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.drops[i])\"><span class=\"{{getMedDurationClass(medication.drops[i].duration)}}\">{{medication.drops[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.drops[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationDropsDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Drops',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationDropsArray.length-1\" (click)=\"addMoreTab('Drops')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[10].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Aerosols &amp; Inhalent </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationAerosolsArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Aerosols',$event.target.value)\" (onRemove)=\"onRemoveMedName('AerosolsInfo',medication.aerosols[i])\" (onAdd)=\"openFrequencyModalFromMed('AerosolsInfo',medication.aerosols[i])\" [(ngModel)]='medication.aerosols[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationAerosolsDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.aerosols[i])\"><span class=\"{{getMedFrequencyClass(medication.aerosols[i].frequency)}}\">{{medication.aerosols[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.aerosols[i])\"><span class=\"{{getMedDurationClass(medication.aerosols[i].duration)}}\">{{medication.aerosols[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.aerosols[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationAerosolsInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Aerosols',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationAerosolsArray.length-1\" (click)=\"addMoreTab('Aerosols')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[11].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Powder &amp; Granule </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationPowderArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Powder',$event.target.value)\" (onRemove)=\"onRemoveMedName('PowderInfo',medication.powder[i])\" (onAdd)=\"openFrequencyModalFromMed('PowderInfo',medication.powder[i])\" [(ngModel)]='medication.powder[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationPowderDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.powder[i])\"><span class=\"{{getMedFrequencyClass(medication.powder[i].frequency)}}\">{{medication.powder[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.powder[i])\"><span class=\"{{getMedDurationClass(medication.powder[i].duration)}}\">{{medication.powder[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.powder[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationPowderInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Powder',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationPowderArray.length-1\" (click)=\"addMoreTab('Powder')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[12].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Mouthwash &amp; Gargle </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationMouthWashArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Mouthwash',$event.target.value)\" (onRemove)=\"onRemoveMedName('MouthwashInfo',medication.mouthwash[i])\" (onAdd)=\"openFrequencyModalFromMed('MouthWashInfo',medication.mouthwash[i])\" [(ngModel)]='medication.mouthwash[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationMouthwashDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.mouthwash[i])\"><span class=\"{{getMedFrequencyClass(medication.mouthwash[i].frequency)}}\">{{medication.mouthwash[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.mouthwash[i])\"><span class=\"{{getMedDurationClass(medication.mouthwash[i].duration)}}\">{{medication.mouthwash[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.mouthwash[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationMouthwashInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('MouthWash',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationMouthWashArray.length-1\" (click)=\"addMoreTab('MouthWash')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[13].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Lotion </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationLotionArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Lotion',$event.target.value)\" (onRemove)=\"onRemoveMedName('LotionInfo',medication.lotion[i])\" (onAdd)=\"openFrequencyModalFromMed('LotionInfo',medication.lotion[i])\" [(ngModel)]='medication.lotion[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationLotionDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.lotion[i])\"><span class=\"{{getMedFrequencyClass(medication.lotion[i].frequency)}}\">{{medication.lotion[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.lotion[i])\"><span class=\"{{getMedDurationClass(medication.lotion[i].duration)}}\">{{medication.lotion[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.lotion[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationLotionInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Lotion',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationLotionArray.length-1\" (click)=\"addMoreTab('Lotion')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"medicationStatus[14].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Ointment </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of medicationOintmentArray;let i =index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [addOnBlur]=\"true\" (keyup)=\"onTextChangeOfMedName('Ointment',$event.target.value)\" (onRemove)=\"onRemoveMedName('OintmentInfo',medication.ointment[i])\" (onAdd)=\"openFrequencyModalFromMed('OintmentInfo',medication.ointment[i])\" [(ngModel)]='medication.ointment[i].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap'>\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationOitmentDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.ointment[i])\"><span class=\"{{getMedFrequencyClass(medication.ointment[i].frequency)}}\">{{medication.ointment[i].frequency}}</span></div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal2\" data-toggle=\"modal\" (click)=\"openFrequencyModal(medication.ointment[i])\"><span class=\"{{getMedDurationClass(medication.ointment[i].duration)}}\">{{medication.ointment[i].duration}}</span></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [addOnBlur]=\"true\" [maxItems]=\"2\" [(ngModel)]='medication.ointment[i].med_info' [onlyFromAutocomplete]=\"true\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Info\" theme='bootstrap'>\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorMedicationOitmentInfoDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeMoreTab('Ointment',i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"i == medicationOintmentArray.length-1\"  (click)=\"addMoreTab('Ointment')\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <div class=\"tags-listing-div\" *ngIf=\"medicationpreset==true\">\n                                <fieldset class=\"fieldset-preset\">\n                                    <legend class=\"legend-preset\">Presets</legend>\n                                    <ul class=\"tags-listing\" *ngIf=\"doctorPresetArray && doctorPresetArray.length>0\">\n                                        <li class=\"{{getMedPresetClass('Medication',i)}}\" *ngFor=\"let data of doctorPresetArray;let i = index\" (click)=\"showHidePreset('Medication',i)\"> <a href=\"javascript:void(0)\"> {{data.preset_name}} </a> </li>\n                                    </ul>\n                                    <h5 class=\"text-muted\" style=\"text-align:center\" *ngIf=\"!doctorPresetArray || doctorPresetArray.length<1\">\n                                        No Presets Found, create them on Create Preset page\n                                    </h5>\n                                </fieldset>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"addPreset-box\" *ngIf=\"totalMedications > -1\">\n                    <button class=\"{{getPresetMedButtonClass('Medication')}}\" (click)=\"PresetsShowHide('Medication')\">\n                        <i class=\"fa fa-plus\"></i>\n                        <br/> Preset\n                    </button>\n                    <input type=\"text\" class=\"form-control txtfield sm-txtfield\" name=\"\" placeholder=\"Preset Name\" *ngIf=\"medicationPresetShow==true\" [(ngModel)]=\"presentNameMedication\" />\n                </div>\n                <button class=\"btn btn-yellow\" type=\"button\" (click)=\"medicatPresets()\"> Preset </button>\n                <button class=\"btn btn-custom\" data-toggle=\"modal\" type=\"button\" (click)=\"setFields('medication')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- frequency modal -->\n<!-- <div class=\"modal fade cus-modal\" id=\"frequencyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Frequency </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"frequency-modal-body wrap-div\">\n                        <div class=\"frequency-wrap\">\n                            <ul class=\"frequency-ul\">\n                                <li class=\"{{getFrequencyClass('Once a day')}}\" (click)=\"selectFrequency('Once a day')\"> Once a day </li>\n                                <li class=\"{{getFrequencyClass('Twice a day')}}\" (click)=\"selectFrequency('Twice a day')\"> Twice a day </li>\n                                <li class=\"{{getFrequencyClass('Thrice a day')}}\" (click)=\"selectFrequency('Thrice a day')\"> Thrice a day </li>\n                                <li class=\"{{getFrequencyClass('Four times a day')}}\" (click)=\"selectFrequency('Four times a day')\"> Four times a day </li>\n                                <li class=\"{{getFrequencyClass('Once a week')}}\" (click)=\"selectFrequency('Once a week')\"> Once a week </li>\n                                <li class=\"{{getFrequencyClass('Every morning')}}\" (click)=\"selectFrequency('Every morning')\"> Every morning </li>\n                                <li class=\"{{getFrequencyClass('Every night')}}\" (click)=\"selectFrequency('Every night')\"> Every night </li>\n                                <li class=\"{{getFrequencyClass('Every 1 hour')}}\" (click)=\"selectFrequency('Every 1 hour')\"> Every 1 hour </li>\n                                <li class=\"{{getFrequencyClass('Every 2 hour')}}\" (click)=\"selectFrequency('Every 2 hour')\"> Every 2 hour </li>\n                                <li class=\"{{getFrequencyClass('Every 3 hour')}}\" (click)=\"selectFrequency('Every 3 hour')\"> Every 3 hour </li>\n                                <li class=\"{{getFrequencyClass('Every 4 hour')}}\" (click)=\"selectFrequency('Every 4 hour')\"> Every 4 hour </li>\n                                <li class=\"{{getFrequencyClass('Every 6 hour')}}\" (click)=\"selectFrequency('Every 6 hour')\"> Every 6 hour </li>\n                                <li class=\"{{getFrequencyClass('Alternate day')}}\" (click)=\"selectFrequency('Alternate day')\"> Alternate day </li>\n                                <li class=\"{{getFrequencyClass('At bed time')}}\" (click)=\"selectFrequency('At bed time')\"> At bed time </li>\n                                <li class=\"{{getFrequencyClass('SoS')}}\" (click)=\"selectFrequency('SoS')\"> SoS </li>\n                            </ul>\n                            <ul class=\"frequency-ul hindi\">\n                                <li class=\"{{getFrequencyClass('िदन मे 1 बार')}}\" (click)=\"selectFrequency('िदन मे 1 बार')\"> िदन मे 1 बार </li>\n                                <li class=\"{{getFrequencyClass('िदन मे 2 बार')}}\" (click)=\"selectFrequency('िदन मे 2 बार')\"> िदन मे 2 बार </li>\n                                <li class=\"{{getFrequencyClass('िदन मे 3 बार')}}\" (click)=\"selectFrequency('िदन मे 3 बार')\"> िदन मे 3 बार </li>\n                                <li class=\"{{getFrequencyClass('िदन मे 4 बार')}}\" (click)=\"selectFrequency('िदन मे 4 बार')\"> िदन मे 4 बार </li>\n                                <li class=\"{{getFrequencyClass('हफ्ते मे 1 बार')}}\" (click)=\"selectFrequency('हफ्ते मे 1 बार')\"> हफ्ते मे 1 बार </li>\n                                <li class=\"{{getFrequencyClass('रोज़ सुबह')}}\" (click)=\"selectFrequency('रोज़ सुबह')\"> रोज़ सुबह </li>\n                                <li class=\"{{getFrequencyClass('रोज़ रात मे')}}\" (click)=\"selectFrequency('रोज़ रात मे')\"> रोज़ रात मे </li>\n                                <li class=\"{{getFrequencyClass('हर 1 घंटे पर')}}\" (click)=\"selectFrequency('हर 1 घंटे पर')\"> हर 1 घंटे पर </li>\n                                <li class=\"{{getFrequencyClass('हर 2 घंटे पर')}}\" (click)=\"selectFrequency('हर 2 घंटे पर')\"> हर 2 घंटे पर </li>\n                                <li class=\"{{getFrequencyClass('हर 3 घंटे पर')}}\" (click)=\"selectFrequency('हर 3 घंटे पर')\"> हर 3 घंटे पर </li>\n                                <li class=\"{{getFrequencyClass('हर 4 घंटे पर')}}\" (click)=\"selectFrequency('हर 4 घंटे पर')\"> हर 4 घंटे पर </li>\n                                <li class=\"{{getFrequencyClass('हर 6 घंटे पर')}}\" (click)=\"selectFrequency('हर 6 घंटे पर')\"> हर 6 घंटे पर </li>\n                                <li class=\"{{getFrequencyClass('हर दूसरे िदन')}}\" (click)=\"selectFrequency('हर दूसरे िदन')\"> हर दूसरे िदन </li>\n                                <li class=\"{{getFrequencyClass('सोते समय ')}}\" (click)=\"selectFrequency('सोते समय ')\"> सोते समय </li>\n                                <li class=\"{{getFrequencyClass('आवश्यकता अनुसार')}}\" (click)=\"selectFrequency('आवश्यकता अनुसार')\"> आवश्यकता अनुसार </li>\n                            </ul>\n                        </div>\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 p-0 duration-wrap\">\n                            <h4 class=\"\"> Special Instructions </h4>\n                            <ul class=\"special-ul\">\n                                <li class=\"{{getFrequencyClassSpecial('After meals')}}\" (click)=\"selectFrequencySpecial('After meals')\"> After meals</li>\n                                <li class=\"{{getFrequencyClassSpecial('Empty stomach')}}\" (click)=\"selectFrequencySpecial('Empty stomach')\"> Empty stomach</li>\n                                <li class=\"{{getFrequencyClassSpecial('Before meals')}}\" (click)=\"selectFrequencySpecial('Before meals')\"> Before meals</li>\n                                <li class=\"{{getFrequencyClassSpecial('As needed')}}\" (click)=\"selectFrequencySpecial('As needed')\"> As needed</li>\n                                <li class=\"{{getFrequencyClassSpecial('Each night')}}\" (click)=\"selectFrequencySpecial('Each night')\"> Each night</li>\n                                <li class=\"{{getFrequencyClassSpecial('With milk')}}\" (click)=\"selectFrequencySpecial('With milk')\"> With milk</li>\n                            </ul>\n                            <ul class=\"special-ul hindi\">\n                                <li class=\"{{getFrequencyClassSpecial('खाने के बाद')}}\" (click)=\"selectFrequencySpecial('खाने के बाद')\"> खाने के बाद </li>\n                                <li class=\"{{getFrequencyClassSpecial('खाली पेट')}}\" (click)=\"selectFrequencySpecial('खाली पेट')\"> खाली पेट </li>\n                                <li class=\"{{getFrequencyClassSpecial('खाने से पहले')}}\" (click)=\"selectFrequencySpecial('खाने से पहले')\"> खाने से पहले </li>\n                                <li class=\"{{getFrequencyClassSpecial('आवश्यकता अनुसार')}}\" (click)=\"selectFrequencySpecial('आवश्यकता अनुसार')\"> आवश्यकता अनुसार </li>\n                                <li class=\"{{getFrequencyClassSpecial('रोज़ रात मे')}}\" (click)=\"selectFrequencySpecial('रोज़ रात मे')\"> रोज़ रात मे </li>\n                                <li class=\"{{getFrequencyClassSpecial('दूध क साथ')}}\" (click)=\"selectFrequencySpecial('दूध क साथ')\"> दूध क साथ </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveFrequency()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Duration modal -->\n<!-- <div class=\"modal fade cus-modal\" id=\"durationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Duration(days) </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"duration-modal-body wrap-div\">\n                        <div class=\"duration-wrap\">\n                            <ul class=\"duration-ul\">\n                                <li class=\"{{getDurationClass('1')}}\" (click)=\"selectDuration('1')\">1</li>\n                                <li class=\"{{getDurationClass('2')}}\" (click)=\"selectDuration('2')\">2</li>\n                                <li class=\"{{getDurationClass('3')}}\" (click)=\"selectDuration('3')\">3</li>\n                                <li class=\"{{getDurationClass('4')}}\" (click)=\"selectDuration('4')\">4</li>\n                                <li class=\"{{getDurationClass('5')}}\" (click)=\"selectDuration('5')\">5</li>\n                                <li class=\"{{getDurationClass('6')}}\" (click)=\"selectDuration('6')\">6</li>\n                                <li class=\"{{getDurationClass('7')}}\" (click)=\"selectDuration('7')\">7</li>\n                                <li class=\"{{getDurationClass('8')}}\" (click)=\"selectDuration('8')\">8</li>\n                                <li class=\"{{getDurationClass('9')}}\" (click)=\"selectDuration('9')\">9</li>\n                                <li class=\"{{getDurationClass('10')}}\" (click)=\"selectDuration('10')\">10</li>\n                                <li class=\"{{getDurationClass('12')}}\" (click)=\"selectDuration('12')\">12</li>\n                                <li class=\"{{getDurationClass('14')}}\" (click)=\"selectDuration('14')\">14</li>\n                                <li class=\"{{getDurationClass('15')}}\" (click)=\"selectDuration('15')\">15</li>\n                                <li class=\"{{getDurationClass('18')}}\" (click)=\"selectDuration('18')\">18</li>\n                                <li class=\"{{getDurationClass('21')}}\" (click)=\"selectDuration('21')\">21</li>\n                                <li class=\"{{getDurationClass('25')}}\" (click)=\"selectDuration('25')\">25</li>\n                                <li class=\"{{getDurationClass('28')}}\" (click)=\"selectDuration('28')\">28</li>\n                                <li class=\"{{getDurationClass('30')}}\" (click)=\"selectDuration('30')\">30</li>\n                                <li class=\"{{getDurationClass('35')}}\" (click)=\"selectDuration('35')\">35</li>\n                                <li class=\"{{getDurationClass('42')}}\" (click)=\"selectDuration('42')\">42</li>\n                                <li class=\"{{getDurationClass('60')}}\" (click)=\"selectDuration('60')\">60</li>\n                                <li class=\"{{getDurationClass('90')}}\" (click)=\"selectDuration('90')\">90</li>\n                                <li class=\"{{getDurationClass('120')}}\" (click)=\"selectDuration('120')\">120</li>\n                                <li class=\"{{getDurationClass('180')}}\" (click)=\"selectDuration('180')\">180</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveDuration()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Dosage modal -->\n<!-- <div class=\"modal fade cus-modal\" id=\"dosageModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Dosage (ml) </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"duration-modal-body wrap-div\">\n                        <div class=\"duration-wrap\">\n                            <ul class=\"duration-ul\">\n                                <li class=\"{{getClassDosage('1')}}\" (click)=\"selectDosage('1')\"> 1 </li>\n                                <li class=\"{{getClassDosage('2')}}\" (click)=\"selectDosage('2')\"> 2 </li>\n                                <li class=\"{{getClassDosage('3')}}\" (click)=\"selectDosage('3')\"> 3 </li>\n                                <li class=\"{{getClassDosage('4')}}\" (click)=\"selectDosage('4')\"> 4 </li>\n                                <li class=\"{{getClassDosage('5')}}\" (click)=\"selectDosage('5')\"> 5 </li>\n                                <li class=\"{{getClassDosage('1.5')}}\" (click)=\"selectDosage('1.5')\"> 1.5 </li>\n                                <li class=\"{{getClassDosage('2.5')}}\" (click)=\"selectDosage('2.5')\"> 2.5 </li>\n                                <li class=\"{{getClassDosage('3.5')}}\" (click)=\"selectDosage('3.5')\"> 3.5 </li>\n                                <li class=\"{{getClassDosage('4.5')}}\" (click)=\"selectDosage('4.5')\"> 4.5 </li>\n                                <li class=\"{{getClassDosage('5.5')}}\" (click)=\"selectDosage('5.5')\"> 5.5 </li>\n                                <li class=\"{{getClassDosage('6')}}\" (click)=\"selectDosage('6')\"> 6 </li>\n                                <li class=\"{{getClassDosage('7')}}\" (click)=\"selectDosage('7')\"> 7 </li>\n                                <li class=\"{{getClassDosage('8')}}\" (click)=\"selectDosage('8')\"> 8 </li>\n                                <li class=\"{{getClassDosage('9')}}\" (click)=\"selectDosage('9')\"> 9 </li>\n                                <li class=\"{{getClassDosage('10')}}\" (click)=\"selectDosage('10')\"> 10 </li>\n                                <li class=\"{{getClassDosage('6.5')}}\" (click)=\"selectDosage('6.5')\"> 6.5 </li>\n                                <li class=\"{{getClassDosage('7.5')}}\" (click)=\"selectDosage('7.5')\"> 7.5 </li>\n                                <li class=\"{{getClassDosage('8.5')}}\" (click)=\"selectDosage('8.5')\"> 8.5 </li>\n                                <li class=\"{{getClassDosage('9.5')}}\" (click)=\"selectDosage('9.5')\"> 9.5 </li>\n                                <li class=\"{{getClassDosage('10.5')}}\" (click)=\"selectDosage('10.5')\"> 10.5 </li>\n                                <li class=\"{{getClassDosage('11')}}\" (click)=\"selectDosage('11')\"> 11 </li>\n                                <li class=\"{{getClassDosage('12')}}\" (click)=\"selectDosage('12')\"> 12 </li>\n                                <li class=\"{{getClassDosage('15')}}\" (click)=\"selectDosage('15')\"> 15 </li>\n                                <li class=\"{{getClassDosage('20')}}\" (click)=\"selectDosage('20')\"> 20 </li>\n                                <li class=\"{{getClassDosage('25')}}\" (click)=\"selectDosage('25')\"> 25 </li>\n                                <li class=\"{{getClassDosage('11.5')}}\" (click)=\"selectDosage('11.5')\"> 11.5 </li>\n                                <li class=\"{{getClassDosage('12.5')}}\" (click)=\"selectDosage('12.5')\"> 12.5 </li>\n                                <li class=\"{{getClassDosage('30')}}\" (click)=\"selectDosage('30')\"> 30 </li>\n                                <li class=\"{{getClassDosage('40')}}\" (click)=\"selectDosage('40')\"> 40 </li>\n                                <li class=\"{{getClassDosage('50')}}\" (click)=\"selectDosage('50')\"> 50 </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveDosage()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Injection modal -->\n<!-- <div class=\"modal fade cus-modal\" id=\"injectionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Injection mode </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"duration-modal-body wrap-div\">\n                        <div class=\"duration-wrap\">\n                            <ul class=\"special-ul\">\n                                <li class=\"{{getClassInjection('Intramuscular')}}\" (click)=\"injectionSelected('Intramuscular')\"> Intramuscular </li>\n                                <li class=\"{{getClassInjection('Intravenous')}}\" (click)=\"injectionSelected('Intravenous')\"> Intravenous </li>\n                                <li class=\"{{getClassInjection('Intradermal')}}\" (click)=\"injectionSelected('Intradermal')\"> Intradermal </li>\n                                <li class=\"{{getClassInjection('Subcutaneous')}}\" (click)=\"injectionSelected('Subcutaneous')\"> Subcutaneous </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveInjection()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- quantity modal -->\n<!-- <div class=\"modal fade cus-modal\" id=\"quantityModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Quantity </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"duration-modal-body wrap-div\">\n                        <div class=\"duration-wrap\">\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                <select class=\"form-control txtfield\" [(ngModel)]=\"quantity_drops\">\n                                    <option value=\"Select\" selected=\"\" disabled=\"\"> Select </option>\n                                    <option value=\"{{value}}\" *ngFor=\"let value of quantity_range\"> {{value}} </option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"addTempQuantity(quantity_drops)\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Instructions  -->\n<!-- <div class=\"modal fade cus-modal\" id=\"instructionsModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Instructions </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"diagnosis-modal-body wrap-div\">\n                        <ul class=\"medicine-list plus-height\">\n                            <li *ngFor=\"let instructions of inputBox;let i = index\">\n                                <div class=\"form-group medicinfo\">\n                                    <tag-input class=\"selectize-qual\" placeholder=\"{{instructions.name}}\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"{{instructions.name}}\" theme='bootstrap' [displayBy]=\"'value'\" [maxItems]=\"1\" [blinkIfDupe]=true [(ngModel)]='inputBox[i].inputInstruction' [addOnBlur]=\"true\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'10 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"instructionsSavedDB\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                                <div class=\"medic-control medic-left\">\n                                    {{i+1}}.\n                                </div>\n                                <div class=\"medic-control medic-right\">\n                                    <div class=\"li-close\" (click)=\"removeTextbox(i)\"> <i class=\"fa fa-minus\"></i> </div>\n                                    <div *ngIf=\"i==inputBox.length-1\" class=\"li-close plus\" (click)=\"addTextbox(i)\"> <i class=\"fa fa-plus\"></i> </div>\n                                </div>\n                            </li>\n                        </ul>\n                        <div class=\"addPreset-box\">\n                            <button class=\"{{getPresetMedButtonClass('Instructions')}}\" (click)=\"PresetsShowHide('Instructions')\">\n                                <i class=\"fa fa-plus\"></i>\n                                <br/> Preset\n                            </button>\n                            <input type=\"text\" class=\"form-control txtfield sm-txtfield\" name=\"\" placeholder=\"Preset Name\" *ngIf=\"instructionPresetShow==true\" [(ngModel)]=\"presentNameInstrcutions\" />\n                        </div>\n                        <div class=\"tags-listing-div\" *ngIf=\"instructionpreset==true\">\n                            <fieldset class=\"fieldset-preset\">\n                                <legend class=\"legend-preset\">Presets</legend>\n                                <ul class=\"tags-listing\" *ngIf=\"presetArrayInstruction || presetArrayInstruction.length>0\">\n                                    <li class=\"{{getMedPresetClass('Instructions',i)}}\" *ngFor=\"let data of presetArrayInstruction;let i = index\" (click)=\"showHidePreset('Instructions',i)\"> <a href=\"javascript:void(0)\"> {{data.preset_name}} </a> </li>\n                                </ul>\n                                <h5 class=\"text-muted\" style=\"text-align:center\" *ngIf=\"!presetArrayInstruction || presetArrayInstruction.length<1\">\n                                        No Presets Found, create them on Create Preset page\n                                    </h5>\n                            </fieldset>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-yellow\" type=\"button\" (click)=\"instrucPresets()\"> Preset </button>\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"setFields('instructions')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Other treatments  -->\n<!-- <div class=\"modal fade cus-modal\" id=\"treatmentModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Other Treatments </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"treatment-modal-body wrap-div\">\n                        <div class=\"sidebar-preset\">\n                            <ul class=\"presetul\">\n                                <li class=\"{{treatClass(0)}}\" (click)=\"treatTab(0)\"> Lifestyle Changes </li>\n                                <li class=\"{{treatClass(1)}}\" (click)=\"treatTab(1)\"> Physiotherapy </li>\n                                <li class=\"{{treatClass(2)}}\" (click)=\"treatTab(2)\"> Plaster </li>\n                                <li class=\"{{treatClass(3)}}\" (click)=\"treatTab(3)\"> Fomentation </li>\n                                <li class=\"{{treatClass(4)}}\" (click)=\"treatTab(4)\"> Gargle </li>\n                                <li class=\"{{treatClass(5)}}\" (click)=\"treatTab(5)\"> Dressing </li>\n                                <li class=\"{{treatClass(6)}}\" (click)=\"treatTab(6)\"> Bandage </li>\n                                <li class=\"{{treatClass(7)}}\" (click)=\"treatTab(7)\"> Other </li>\n                            </ul>\n                        </div>\n                        <div class=\"medicine-body\">\n                            <div class=\"medicine-wrap\">\n                                <div class=\"\" *ngIf=\"treatmentStatus[0].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Lifestyle Changes </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li>\n                                            <div class=\"medicinfo\">\n                                                <tag-input class=\"selectize-qual\" [(ngModel)]='treatmentStatus[0].lifestyle' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Daily workout, No oily food etc.\" theme='bootstrap' [maxItems]=\"3\" [addOnBlur]=\"true\">\n                                                    <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorOtherTreatmentDB\"></tag-input-dropdown>\n                                                </tag-input>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                1.\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(0)\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"treatmentStatus[1].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Physiotherapy </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li>\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus,1)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[1].Frequency)}}\">{{treatmentStatus[1].Frequency}}</span> </div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus,1)\"> <span class=\"{{getMedDurationClass(treatmentStatus[1].Duration)}}\">{{treatmentStatus[1].Duration}}</span> </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                1.\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(1)\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"treatmentStatus[2].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Plaster </div>\n                                    </div>\n                                    <ul class=\"medicine-list plus-height\">\n                                    \n                                        <li *ngFor=\"let data of treatmentStatus[2].div;let i = index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#injuryModal\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal1(treatmentStatus,2,i)\"><span [ngClass]=\"treatmentStatus[2].div[i].Injury_Area != 'Injury Area' ? 'active' : ''\">{{treatmentStatus[2].div[i].Injury_Area}}</span> </div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <select class=\"form-control txtfield\" [(ngModel)]='treatmentStatus[2].div[i].plaster_type'>\n                                                        <option value=\"Plaster Type\" disabled=\"\"> Plaster Type </option>\n                                                        <option value=\"Type1\"> Type1 </option>\n                                                        <option value=\"Type2\"> Type2 </option>\n                                                        <option value=\"Type3\"> Type3 </option>\n                                                        <option value=\"Type4\"> Type4 </option>\n                                                    </select>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal1(treatmentStatus,2,i)\"> <span class=\"{{getMedDurationClass(treatmentStatus[2].div[i].Duration)}}\">{{treatmentStatus[2].div[i].Duration}}</span> </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}.\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"removePlasterDiv(i)\"></i> </div>\n                                                <div class=\"li-close plus\" (click)=\"addPlasterDiv()\" *ngIf=\"i==treatmentStatus[2].div.length-1\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"treatmentStatus[3].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Fomentation </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li>\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus,3)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[3].Frequency)}}\">{{treatmentStatus[3].Frequency}}</span> </div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus,3)\"> <span class=\"{{getMedDurationClass(treatmentStatus[3].Duration)}}\">{{treatmentStatus[3].Duration}}</span> </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                1.\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(3)\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"treatmentStatus[4].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Gargle </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li>\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [(ngModel)]='treatmentStatus[4].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap' [addOnBlur]=\"true\" (onAdd)=\"onAddMedNameOtherTreat(treatmentStatus,4)\">\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorOtherTreatmentGargleDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus,4)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[4].Frequency)}}\">{{treatmentStatus[4].Frequency}}</span> </div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus,4)\"> <span class=\"{{getMedDurationClass(treatmentStatus[4].Duration)}}\">{{treatmentStatus[4].Duration}}</span> </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                1.\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(4)\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"treatmentStatus[5].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Dressing </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li>\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [(ngModel)]='treatmentStatus[5].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap' [addOnBlur]=\"true\" (onAdd)=\"onAddMedNameOtherTreat(treatmentStatus,5)\">\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorOtherTreatmentDressingDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus,5)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[5].Frequency)}}\">{{treatmentStatus[5].Frequency}}</span> </div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus,5)\"> <span class=\"{{getMedDurationClass(treatmentStatus[5].Duration)}}\">{{treatmentStatus[5].Duration}}</span> </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                1.\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(5)\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"treatmentStatus[6].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Bandage </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li>\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [(ngModel)]='treatmentStatus[6].med_name' placeholder=\"Medicine Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Medicine Name\" theme='bootstrap' [addOnBlur]=\"true\" (onAdd)=\"onAddMedNameOtherTreat(treatmentStatus,6)\">\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorOtherTreatmentBandageDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus,6)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[6].Frequency)}}\">{{treatmentStatus[6].Frequency}}</span> </div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus,6)\"> <span class=\"{{getMedDurationClass(treatmentStatus[6].Duration)}}\">{{treatmentStatus[6].Duration}}</span> </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                1.\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"treatTab(6)\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            \n                                <div class=\"\" *ngIf=\"treatmentStatus[7].status==true\">\n                                    <div class=\"medic-heading\">\n                                        <div class=\"medicHead\"> Other </div>\n                                    </div>\n                                    <ul class=\"medicine-list\">\n                                        <li *ngFor=\"let data of treatmentStatus[7].div;let i = index\">\n                                            <div class=\"flex-rowdiv medication-form\">\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" [maxItems]=\"1\" [(ngModel)]='treatmentStatus[7].div[i].med_name' placeholder=\"Treatment Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Treatment Name\" theme='bootstrap' [addOnBlur]=\"true\" (onAdd)=\"onAddMedNameOtherTreat(treatmentStatus[7].div,i)\">\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"doctorOtherTreatmentOtherDB\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                                <div class=\"form-group frequency\">\n                                                    <div data-target=\"#combinedModal5\" (click)=\"openTreatFrequencyModal(treatmentStatus[7].div,i)\" data-toggle=\"modal\"> <span class=\"{{getMedFrequencyClass(treatmentStatus[7].div[i].Frequency)}}\">{{treatmentStatus[7].div[i].Frequency}}</span> </div>\n                                                </div>\n                                                <div class=\"form-group duration\">\n                                                    <div data-target=\"#combinedModal5\" data-toggle=\"modal\" (click)=\"openTreatFrequencyModal(treatmentStatus[7].div,i)\"> <span class=\"{{getMedDurationClass(treatmentStatus[7].div[i].Duration)}}\">{{treatmentStatus[7].div[i].Duration}}</span> </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{i+1}}.\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\"> <i class=\"fa fa-minus\" (click)=\"removeOtherDiv(i)\"></i> </div>\n                                                <div class=\"li-close plus\" (click)=\"addOtherDiv()\" *ngIf=\"i==treatmentStatus[7].div.length-1\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <div class=\"tags-listing-div\" *ngIf=\"treatmentpreset==true\">\n                                <fieldset class=\"fieldset-preset\">\n                                    <legend class=\"legend-preset\">Presets</legend>\n                                    <ul class=\"tags-listing\" *ngIf=\"presetArrayOtherTreatment || presetArrayOtherTreatment.length>0\">\n                                        <li class=\"{{getMedPresetClass('Other Treatments',i)}}\" *ngFor=\"let data of presetArrayOtherTreatment;let i = index\" (click)=\"showHidePreset('Other Treatments',i)\"> <a href=\"javascript:void(0)\"> {{data.preset_name}} </a> </li>\n                                    </ul>\n                                    <h5 class=\"text-muted\" style=\"text-align:center\" *ngIf=\"!presetArrayOtherTreatment || presetArrayOtherTreatment.length<1\">\n                                        No Presets Found, create them on Create Preset page\n                                    </h5>\n                                </fieldset>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"addPreset-box\" *ngIf=\"totalOtherTreatment>0\">\n                    <button class=\"{{getPresetMedButtonClass('Other Treatments')}}\" (click)=\"PresetsShowHide('Other Treatments')\">\n                        <i class=\"fa fa-plus\"></i>\n                        <br/> Preset </button>\n                    <input type=\"text\" class=\"form-control txtfield sm-txtfield\" name=\"\" placeholder=\"Preset Name\" *ngIf=\"otherTreatmentPresetShow==true\" [(ngModel)]=\"presentNameOtherTreatment\" />\n                </div>\n                <button class=\"btn btn-yellow\" type=\"button\" (click)=\"treatPresets()\"> Preset </button>\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"setFields('treatment')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- treatment frequency modal -->\n<!-- <div class=\"modal fade cus-modal\" id=\"treatfrequencyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Frequency </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"frequency-modal-body wrap-div\">\n                        <div class=\"frequency-wrap\">\n                            <ul class=\"frequency-ul\">\n                                <li (click)=\"selectFromTreatFrequency('Once a day')\" class=\"{{getTreatFrequencyModalClass('Once a day')}}\"> Once a day </li>\n                                <li (click)=\"selectFromTreatFrequency('Twice a day')\" class=\"{{getTreatFrequencyModalClass('Twice a day')}}\"> Twice a day </li>\n                                <li (click)=\"selectFromTreatFrequency('Thrice a day')\" class=\"{{getTreatFrequencyModalClass('Thrice a day')}}\"> Thrice a day </li>\n                                <li (click)=\"selectFromTreatFrequency('Four times a day')\" class=\"{{getTreatFrequencyModalClass('Four times a day')}}\"> Four times a day </li>\n                                <li (click)=\"selectFromTreatFrequency('Once a week')\" class=\"{{getTreatFrequencyModalClass('Once a week')}}\"> Once a week </li>\n                                <li (click)=\"selectFromTreatFrequency('Every morning')\" class=\"{{getTreatFrequencyModalClass('Every morning')}}\"> Every morning </li>\n                                <li (click)=\"selectFromTreatFrequency('Every night')\" class=\"{{getTreatFrequencyModalClass('Every night')}}\"> Every night </li>\n                                <li (click)=\"selectFromTreatFrequency(' Every 1 hour')\" class=\"{{getTreatFrequencyModalClass(' Every 1 hour')}}\"> Every 1 hour </li>\n                                <li (click)=\"selectFromTreatFrequency('Every 2 hour')\" class=\"{{getTreatFrequencyModalClass('Every 2 hour')}}\"> Every 2 hour </li>\n                                <li (click)=\"selectFromTreatFrequency('Every 3 hour')\" class=\"{{getTreatFrequencyModalClass('Every 3 hour')}}\"> Every 3 hour </li>\n                                <li (click)=\"selectFromTreatFrequency('Every 4 hour')\" class=\"{{getTreatFrequencyModalClass('Every 4 hour')}}\"> Every 4 hour </li>\n                                <li (click)=\"selectFromTreatFrequency('Every 6 hour')\" class=\"{{getTreatFrequencyModalClass('Every 6 hour')}}\"> Every 6 hour </li>\n                                <li (click)=\"selectFromTreatFrequency('Alternate day')\" class=\"{{getTreatFrequencyModalClass('Alternate day')}}\"> Alternate day </li>\n                                <li (click)=\"selectFromTreatFrequency('At bed time')\" class=\"{{getTreatFrequencyModalClass('At bed time')}}\"> At bed time </li>\n                                <li (click)=\"selectFromTreatFrequency('SoS')\" class=\"{{getTreatFrequencyModalClass('SoS')}}\"> SoS </li>\n                            </ul>\n                            <ul class=\"frequency-ul hindi\">\n                                <li (click)=\"selectFromTreatFrequency('िदन मे 1 बार')\" class=\"{{getTreatFrequencyModalClass('िदन मे 1 बार')}}\"> िदन मे 1 बार </li>\n                                <li (click)=\"selectFromTreatFrequency('िदन मे 2 बार')\" class=\"{{getTreatFrequencyModalClass('िदन मे 2 बार')}}\"> िदन मे 2 बार </li>\n                                <li (click)=\"selectFromTreatFrequency('िदन मे 3 बार')\" class=\"{{getTreatFrequencyModalClass('िदन मे 3 बार')}}\"> िदन मे 3 बार </li>\n                                <li (click)=\"selectFromTreatFrequency('िदन मे 4 बार')\" class=\"{{getTreatFrequencyModalClass('िदन मे 4 बार')}}\"> िदन मे 4 बार </li>\n                                <li (click)=\"selectFromTreatFrequency('हफ्ते मे 1 बार')\" class=\"{{getTreatFrequencyModalClass('हफ्ते मे 1 बार')}}\"> हफ्ते मे 1 बार </li>\n                                <li (click)=\"selectFromTreatFrequency('रोज़ सुबह')\" class=\"{{getTreatFrequencyModalClass('रोज़ सुबह')}}\"> रोज़ सुबह </li>\n                                <li (click)=\"selectFromTreatFrequency('रोज़ रात मे')\" class=\"{{getTreatFrequencyModalClass('रोज़ रात मे')}}\"> रोज़ रात मे </li>\n                                <li (click)=\"selectFromTreatFrequency('हर 1 घंटे पर')\" class=\"{{getTreatFrequencyModalClass('हर 1 घंटे पर')}}\"> हर 1 घंटे पर </li>\n                                <li (click)=\"selectFromTreatFrequency('हर 2 घंटे पर')\" class=\"{{getTreatFrequencyModalClass('हर 2 घंटे पर')}}\"> हर 2 घंटे पर </li>\n                                <li (click)=\"selectFromTreatFrequency('हर 3 घंटे पर')\" class=\"{{getTreatFrequencyModalClass('हर 3 घंटे पर')}}\"> हर 3 घंटे पर </li>\n                                <li (click)=\"selectFromTreatFrequency('हर 4 घंटे पर')\" class=\"{{getTreatFrequencyModalClass('हर 4 घंटे पर')}}\"> हर 4 घंटे पर </li>\n                                <li (click)=\"selectFromTreatFrequency('हर 6 घंटे पर')\" class=\"{{getTreatFrequencyModalClass('हर 6 घंटे पर')}}\"> हर 6 घंटे पर </li>\n                                <li (click)=\"selectFromTreatFrequency('हर दूसरे िदन')\" class=\"{{getTreatFrequencyModalClass('हर दूसरे िदन')}}\"> हर दूसरे िदन </li>\n                                <li (click)=\"selectFromTreatFrequency('सोते समय')\" class=\"{{getTreatFrequencyModalClass('सोते समय')}}\"> सोते समय </li>\n                                <li (click)=\"selectFromTreatFrequency('आवश्यकता अनुसार')\" class=\"{{getTreatFrequencyModalClass('आवश्यकता अनुसार')}}\"> आवश्यकता अनुसार </li>\n                            </ul>\n                        </div>\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 p-0 duration-wrap\">\n                            <h4 class=\"\"> Special Instructions </h4>\n                            <ul class=\"special-ul\">\n                                <li (click)=\"selectFromTreatSpecialInstruction('After meals')\" class=\"{{getSpecialInstructionModalClass('After meals')}}\"> After meals</li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('Empty stomach')\" class=\"{{getSpecialInstructionModalClass('Empty stomach')}}\"> Empty stomach</li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('Before meals')\" class=\"{{getSpecialInstructionModalClass('Before meals')}}\"> Before meals</li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('As needed')\" class=\"{{getSpecialInstructionModalClass('As needed')}}\"> As needed</li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('Each night')\" class=\"{{getSpecialInstructionModalClass('Each night')}}\"> Each night</li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('With milk')\" class=\"{{getSpecialInstructionModalClass('With milk')}}\"> With milk</li>\n                            </ul>\n                            <ul class=\"special-ul hindi\">\n                                <li (click)=\"selectFromTreatSpecialInstruction('खाने के बाद')\" class=\"{{getSpecialInstructionModalClass('खाने के बाद')}}\"> खाने के बाद </li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('खाली पेट')\" class=\"{{getSpecialInstructionModalClass('खाली पेट')}}\"> खाली पेट </li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('खाने से पहले')\" class=\"{{getSpecialInstructionModalClass('खाने से पहले')}}\"> खाने से पहले </li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('आवश्यकता अनुसार')\" class=\"{{getSpecialInstructionModalClass('आवश्यकता अनुसार')}}\"> आवश्यकता अनुसार </li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('रोज़ रात मे')\" class=\"{{getSpecialInstructionModalClass('रोज़ रात मे')}}\"> रोज़ रात मे </li>\n                                <li (click)=\"selectFromTreatSpecialInstruction('दूध क साथ')\" class=\"{{getSpecialInstructionModalClass('दूध क साथ')}}\"> दूध क साथ </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"tempSaveFrequency()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Treatment Duration modal -->\n<!-- <div class=\"modal fade cus-modal\" id=\"treatdurationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Duration </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"duration-modal-body wrap-div\">\n                        <div class=\"duration-wrap\">\n                            <ul class=\"duration-ul\">\n                                <li class=\"{{getDurationModalClass('1')}}\" (click)=\"selectFromTreatDuration('1')\">1</li>\n                                <li class=\"{{getDurationModalClass('2')}}\" (click)=\"selectFromTreatDuration('2')\">2</li>\n                                <li class=\"{{getDurationModalClass('3')}}\" (click)=\"selectFromTreatDuration('3')\">3</li>\n                                <li class=\"{{getDurationModalClass('4')}}\" (click)=\"selectFromTreatDuration('4')\">4</li>\n                                <li class=\"{{getDurationModalClass('5')}}\" (click)=\"selectFromTreatDuration('5')\">5</li>\n                                <li class=\"{{getDurationModalClass('6')}}\" (click)=\"selectFromTreatDuration('6')\"> 6 </li>\n                                <li class=\"{{getDurationModalClass('7')}}\" (click)=\"selectFromTreatDuration('7')\">7</li>\n                                <li class=\"{{getDurationModalClass('8')}}\" (click)=\"selectFromTreatDuration('8')\">8</li>\n                                <li class=\"{{getDurationModalClass('9')}}\" (click)=\"selectFromTreatDuration('9')\">9</li>\n                                <li class=\"{{getDurationModalClass('10')}}\" (click)=\"selectFromTreatDuration('10')\">10</li>\n                                <li class=\"{{getDurationModalClass('12')}}\" (click)=\"selectFromTreatDuration('12')\">12</li>\n                                <li class=\"{{getDurationModalClass('14')}}\" (click)=\"selectFromTreatDuration('14')\"> 14 </li>\n                                <li class=\"{{getDurationModalClass('15')}}\" (click)=\"selectFromTreatDuration('15')\">15</li>\n                                <li class=\"{{getDurationModalClass('18')}}\" (click)=\"selectFromTreatDuration('18')\">18</li>\n                                <li class=\"{{getDurationModalClass('21')}}\" (click)=\"selectFromTreatDuration('21')\">21</li>\n                                <li class=\"{{getDurationModalClass('25')}}\" (click)=\"selectFromTreatDuration('25')\">25</li>\n                                <li class=\"{{getDurationModalClass('28')}}\" (click)=\"selectFromTreatDuration('28')\">28</li>\n                                <li class=\"{{getDurationModalClass('30')}}\" (click)=\"selectFromTreatDuration('30')\"> 30 </li>\n                                <li class=\"{{getDurationModalClass('35')}}\" (click)=\"selectFromTreatDuration('35')\">35</li>\n                                <li class=\"{{getDurationModalClass('42')}}\" (click)=\"selectFromTreatDuration('42')\">42</li>\n                                <li class=\"{{getDurationModalClass('60')}}\" (click)=\"selectFromTreatDuration('60')\">60</li>\n                                <li class=\"{{getDurationModalClass('90')}}\" (click)=\"selectFromTreatDuration('90')\">90</li>\n                                <li class=\"{{getDurationModalClass('120')}}\" (click)=\"selectFromTreatDuration('120')\">120</li>\n                                <li class=\"{{getDurationModalClass('180')}}\" (click)=\"selectFromTreatDuration('180')\"> 180</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"tempSaveDuration()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Injury modal -->\n<!-- <div class=\"modal fade cus-modal\" id=\"injuryModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Injury Area</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"duration-modal-body wrap-div\">\n                        <div class=\"duration-wrap\">\n                            <ul class=\"precond-ul\">\n                                <li class=\"{{getClassInjuryModal('Hand/finger')}}\" (click)=\"setInjuryValue('Hand/finger')\"> Hand/finger </li>\n                                <li class=\"{{getClassInjuryModal('Forearm/wrist')}}\" (click)=\"setInjuryValue('Forearm/wrist')\"> Forearm/wrist </li>\n                                <li class=\"{{getClassInjuryModal('Elbow/forearm')}}\" (click)=\"setInjuryValue('Elbow/forearm')\"> Elbow/forearm </li>\n                                <li class=\"{{getClassInjuryModal('Knee')}}\" (click)=\"setInjuryValue('Knee')\"> Knee </li>\n                                <li class=\"{{getClassInjuryModal('Tibia')}}\" (click)=\"setInjuryValue('Tibia')\"> Tibia </li>\n                                <li class=\"{{getClassInjuryModal('fibula')}}\" (click)=\"setInjuryValue('fibula')\"> fibula </li>\n                                <li class=\"{{getClassInjuryModal('Ankle')}}\" (click)=\"setInjuryValue('Ankle')\"> Ankle </li>\n                                <li class=\"{{getClassInjuryModal('Foot')}}\" (click)=\"setInjuryValue('Foot')\"> Foot </li>\n                                <li class=\"{{getClassInjuryModal('Others')}}\" (click)=\"setInjuryValue('Others')\"> Others</li>\n                                <li>\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='otherInj' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" [maxItems]=\"1\" (onAdd)=\"onAddOtherInj(otherInj)\" (onRemove)=\"onRemoveOtherInj()\" secondaryPlaceholder=\"Injury Area\" theme='bootstrap'></tag-input>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveInjury()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Investigation  -->\n<!-- <div class=\"modal fade cus-modal\" id=\"investigationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Investigation </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"investigation-modal-body wrap-div\">\n                        <div class=\"sidebar-preset\">\n                            <ul class=\"investigationul\">\n                                <li class=\"{{invesClass(0)}}\" (click)=\"invesTab(0)\"> PATHOLOGY </li>\n                                <li class=\"{{invesClass(1)}}\" (click)=\"invesTab(1)\"> X-Ray </li>\n                                <li class=\"{{invesClass(2)}}\" (click)=\"invesTab(2)\"> Ultrasound </li>\n                                <li class=\"{{invesClass(3)}}\" (click)=\"invesTab(3)\"> Doppler studies </li>\n                                <li class=\"{{invesClass(4)}}\" (click)=\"invesTab(4)\"> ECG </li>\n                                <li class=\"{{invesClass(5)}}\" (click)=\"invesTab(5)\"> EEG </li>\n                                <li class=\"{{invesClass(6)}}\" (click)=\"invesTab(6)\"> TMT </li>\n                                <li class=\"{{invesClass(7)}}\" (click)=\"invesTab(7)\"> Echo </li>\n                                <li class=\"{{invesClass(8)}}\" (click)=\"invesTab(8)\"> CT-Scan </li>\n                                <li class=\"{{invesClass(9)}}\" (click)=\"invesTab(9)\"> MRI </li>\n                                <li class=\"{{invesClass(10)}}\" (click)=\"invesTab(10)\"> Nerve Test </li>\n                                <li class=\"{{invesClass(11)}}\" (click)=\"invesTab(11)\"> Uroflowmetry </li>\n                                <li class=\"{{invesClass(12)}}\" (click)=\"invesTab(12)\"> Audiometry </li>\n                                <li class=\"{{invesClass(13)}}\" (click)=\"invesTab(13)\"> Mammography </li>\n                                <li class=\"{{invesClass(14)}}\" (click)=\"invesTab(14)\"> Bone Densitometry </li>\n                                <li class=\"{{invesClass(15)}}\" (click)=\"invesTab(15)\"> Eye Tests </li>\n                                <li class=\"{{invesClass(16)}}\" (click)=\"invesTab(16)\"> Lung Test </li>\n                                <li class=\"{{invesClass(17)}}\" (click)=\"invesTab(17)\"> Others </li>\n                            </ul>\n                        </div>\n                        <div class=\"investigation-body\">\n                            <div class=\"\" *ngIf=\"investigationStatus[0].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\"> {{investigationStatus[0].name}} </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[0].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Lipid profile, KFT, Uric acid, etc.\" theme='bootstrap' [maxItems]=\"5\" (keyup)=\"onTextChange('Pathology',$event.target.value)\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"pathologySuggestionDB\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[1].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[1].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[1].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"CHEST ( L LAT ), PNS, etc.\" theme='bootstrap' [maxItems]=\"5\" (keyup)=\"onTextChange(investigationStatus[1].name,$event.target.value)\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"xraySuggestionDB\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[2].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[2].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[2].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Abdomen, RNS, BERA etc.\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[2].name,$event.target.value)\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"ultraSoundSuggestionDB\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[3].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[3].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[3].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Renal, Pelvic etc.\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[3].name,$event.target.value)\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"dopplerSuggestionDB\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[4].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[4].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[4].model'>\n                                        <option value=\"\"> Select </option>\n                                        <option value=\"{{data}}\" *ngFor=\"let data of ecgSuggestionDB\"> {{data}} </option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[5].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[5].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[5].model'>\n                                        <option value=\"\"> Select </option>\n                                        <option value=\"{{data}}\" *ngFor=\"let data of eegSuggestionDB\"> {{data}} </option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[6].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[6].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[6].model'>\n                                        <option value=\"\"> Select </option>\n                                        <option value=\"{{data}}\" *ngFor=\"let data of tmtSuggestionDB\"> {{data}} </option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[7].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[7].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[7].model'>\n                                        <option value=\"\"> Select </option>\n                                        <option value=\"{{data}}\" *ngFor=\"let data of echoSuggestionDB\"> {{data}} </option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[8].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[8].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[8].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Abdomen, kidney, chest etc.\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[8].name,$event.target.value)\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"ctScanSuggestionDB\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[9].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[9].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[9].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Liver, heart, spleen etc.\" theme='bootstrap' [maxItems]=\"2\" (keyup)=\"onTextChange(investigationStatus[9].name,$event.target.value)\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"mriSuggestionDB\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[10].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[10].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [onlyFromAutocomplete]=\"true\" [(ngModel)]='investigationStatus[10].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"EMG, NCV, SSEP etc.\" theme='bootstrap' [maxItems]=\"3\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"nerveSuggestionDB\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[11].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[11].name}}</div>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[12].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[12].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [onlyFromAutocomplete]=\"true\" [(ngModel)]='investigationStatus[12].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"ABR, Tuning fork test etc.\" theme='bootstrap' [maxItems]=\"2\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"audioSuggestionDB\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[13].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[13].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <select class=\"form-control txtfield\" [(ngModel)]='investigationStatus[13].model'>\n                                        <option value=\"\"> Select </option>\n                                        <option value=\"{{data}}\" *ngFor=\"let data of mammograaphySuggestionDB\"> {{data}} </option>\n                                    </select>\n                                    </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[14].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[14].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [onlyFromAutocomplete]=\"true\" [(ngModel)]='investigationStatus[14].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Select\" theme='bootstrap' [maxItems]=\"3\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"boneSuggestionDB\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[15].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[15].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual Eye-testing\" [(ngModel)]='investigationStatus[15].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Retinoscopy, Pachymetry etc.\" theme='bootstrap' [maxItems]=\"3\" (keyup)=\"onTextChange('Eye Test',$event.target.value)\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"eyeSuggestionDB\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[16].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[16].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [onlyFromAutocomplete]=\"true\" [(ngModel)]='investigationStatus[16].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Select\" theme='bootstrap' [maxItems]=\"3\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"lungSuggestionDB\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                            <div class=\"\" *ngIf=\"investigationStatus[17].status==true\">\n                                <div class=\"medic-heading\">\n                                    <div class=\"medicHead\">{{investigationStatus[17].name}}</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <tag-input class=\"selectize-qual\" [(ngModel)]='investigationStatus[17].model' placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"test-1, test-2....\" theme='bootstrap' [maxItems]=\"2\">\n                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"otherSuggestionDB\"></tag-input-dropdown>\n                                    </tag-input>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tags-listing-div\" *ngIf=\"investigationpreset==true\">\n                            <fieldset class=\"fieldset-preset\">\n                                <legend class=\"legend-preset\">Presets</legend>\n                                <ul class=\"tags-listing\" *ngIf=\"presetArrayInvestigation && presetArrayInvestigation.length>0\">\n                                    <li class=\"{{getMedPresetClass('Investigation',i)}}\" *ngFor=\"let data of presetArrayInvestigation;let i = index\" (click)=\"showHidePreset('Investigation',i)\"> <a href=\"javascript:void(0)\"> {{data.preset_name}} </a> </li>\n                                </ul>\n                                <h5 class=\"text-muted\" style=\"text-align:center\" *ngIf=\"!presetArrayInvestigation || presetArrayInvestigation.length<1\">\n                                        No Presets Found, create them on Create Preset page\n                                    </h5>\n                            </fieldset>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"addPreset-box\" *ngIf=\"numberOfInvestigationSelected>=0\">\n                    <button class=\"btn lightblue-btn\" class=\"{{getPresetMedButtonClass('Investigation')}}\" (click)=\"PresetsShowHide('Investigation')\">\n                        <i class=\"fa fa-plus\"></i>\n                        <br/> Preset </button>\n                    <input type=\"text\" class=\"form-control txtfield sm-txtfield\" name=\"\" placeholder=\"Preset Name\" *ngIf=\"investigationPresetShow==true\" [(ngModel)]=\"presentNameInvestigation\" />\n                </div>\n                <button class=\"btn btn-yellow\" type=\"button\" (click)=\"invesPresets()\"> Preset </button>\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"doneInvestigation()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Surgery / Procedure  -->\n<!-- <div class=\"modal fade cus-modal\" id=\"surgeryModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Surgery / Procedure </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"surgery-modal-body wrap-div\">\n                        <div class=\"sidebar-preset\">\n                            <ul class=\"presetul\">\n                                <li *ngFor=\"let option of suregeryOptionsTop;let i = index\" class=\"{{surgryClass(i)}}\" (click)=\"surgryTabTop(i)\">\n                                    {{option.name}}\n                                    <div class=\"small cus-switch\">\n                                        <label class=\"switch\">\n                                            <input type=\"checkbox\" [checked]=\"option.status1\" (change)=\"surgeryOptionTopStatusChange(i)\">\n                                            <span class=\"slider round\"></span>\n                                        </label>\n                                    </div>\n                                </li>\n                                <li class=\"m-t-10 select_specialist\" (click)=\"showhideTab()\">\n                                    Select upto 3 specialities\n                                    <span class=\"pull-right arrow_down\"> <i class=\"material-icons\"> keyboard_arrow_down </i> </span>\n                                </li>\n                                <li [hidden]=\"!othertabs\" *ngFor=\"let option of suregeryOptions;let i = index\" (click)=\"surgryTab(i)\">\n                                    {{option.name}}\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"medicine-body\">\n                            <div class=\"medicine-wrap\">\n                                <div class=\"\" *ngFor=\"let option of suregeryOptionsTop | slice:0:3;let i = index\">\n                                    <div class=\"medic-heading\" *ngIf=\"option.status==true\">\n                                        <div class=\"medicHead\"> {{option.name}} </div>\n                                    </div>\n                                    <ul class=\"medicine-list plus-height\" *ngIf=\"option.status==true\">\n                                        <li *ngFor=\"let options of option.div;let j = index\">\n                                            <div class=\"flex-rowdiv medication-form surgery-form\">\n                                                <div class=\"form-group\">\n                                                    <select class=\"form-control txtfield\" [(ngModel)]=\"options.sub_speciality\" (change)=\"onSelectSubSpeciality(options,i,j)\">\n                                                        <option value='' disabled=\"\" selected=\"\"> Sub-Speciality </option>\n                                                        <option *ngFor=\"let subSpec of option.sub_speciality_array\" value=\"{{subSpec}}\">{{subSpec | titlecase}}</option>\n                                                    </select>\n                                                </div>\n                                                <div class=\"form-group medicinfo\">\n                                                    <tag-input class=\"selectize-qual\" placeholder=\"Procedure Name\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Procedure Name\" theme='bootstrap' [displayBy]=\"'value'\" [maxItems]=\"1\" [blinkIfDupe]=true [(ngModel)]='options.procedure_name' [addOnBlur]=\"true\">\n                                                        <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [keepOpen]=\"false\" [offset]=\"'30 0'\" [appendToBody]=\"false\" [autocompleteItems]=\"option.database\"></tag-input-dropdown>\n                                                    </tag-input>\n                                                </div>\n                                            </div>\n                                            <div class=\"medic-control medic-left\">\n                                                {{j+1}}.\n                                            </div>\n                                            <div class=\"medic-control medic-right\">\n                                                <div class=\"li-close\" (click)=\"removeTextBoxSuregery(i,j)\"> <i class=\"fa fa-minus\"></i> </div>\n                                                <div class=\"li-close plus\" *ngIf=\"j== option.div.length-1\" (click)=\"addTextBoxSuregery(i,j)\"> <i class=\"fa fa-plus\"></i> </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <div class=\"tags-listing-div\" *ngIf=\"surgeryPreset==true\">\n                                <fieldset class=\"fieldset-preset\">\n                                    <legend class=\"legend-preset\">Presets</legend>\n                                    <ul class=\"tags-listing\" *ngIf=\"presetArraySurgery && presetArraySurgery.length>0\">\n                                        <li class=\"{{getMedPresetClass('Surgery',i)}}\" *ngFor=\"let data of presetArraySurgery;let i = index\" (click)=\"showHidePreset('Surgery',i)\"> <a href=\"javascript:void(0)\"> {{data.preset_name}} </a> </li>\n                                    </ul>\n                                    <h5 class=\"text-muted\" style=\"text-align:center\" *ngIf=\"!presetArraySurgery || presetArraySurgery.length<1\">\n                                    No Presets Found, create them on Create Preset page\n                                </h5>\n                                </fieldset>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"addPreset-box\" *ngIf=\"totalSurgeryOptionsSelected>0\">\n                    <button class=\"{{getPresetMedButtonClass('Surgery')}}\" (click)=\"PresetsShowHide('Surgery')\">\n                        <i class=\"fa fa-plus\"></i>\n                        <br/> Preset </button>\n                    <input type=\"text\" class=\"form-control txtfield sm-txtfield\" name=\"\" placeholder=\"Preset Name\" *ngIf=\"surgeryPresetShow==true\" [(ngModel)]=\"presentNameSurgery\" />\n                </div>\n                <button class=\"btn btn-yellow\" type=\"button\" (click)=\"surgeryPresets()\"> Preset </button>\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"setFields('surgery')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Eye Prescription  -->\n<!-- <div class=\"modal fade cus-modal\" id=\"eyeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Eye Prescription </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"eye-modal-body wrap-div\">\n                        <div class=\"form-group eye-div\">\n                            <div class=\"table-responsive col-md-12 col-sm-12 col-xs-12\">\n                                <table class=\"table table-bordered table-striped\">\n                                    <thead>\n                                        <tr>\n                                            <th> Eye </th>\n                                            <th> Sphere </th>\n                                            <th> Cylinder </th>\n                                            <th> Axis </th>\n                                            <th> ADD </th>\n                                            <th> PD (mm) </th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <th> Right (OD) </th>\n                                            <td>\n                                                <input type=\"number\" max=\"20\" min=\"-20\" step=\"0.25\" name=\"\" class=\"txt50\" [(ngModel)]=\"rightOD.sphere\" />\n                                            </td>\n                                            <td>\n                                                <input type=\"number\" max=\"5\" min=\"0\" step=\"0.25\" name=\"\" class=\"txt50\" [(ngModel)]=\"rightOD.cylinder\" />\n                                            </td>\n                                            <td>\n                                                <input type=\"number\" max=\"180\" min=\"0\" name=\"\" class=\"txt50\" [(ngModel)]=\"rightOD.axis\" />\n                                            </td>\n                                            <td>\n                                                <input type=\"number\" max=\"3.5\" min=\"0\" step=\"0.25\" name=\"\" class=\"txt50\" [(ngModel)]=\"rightOD.add\" />\n                                            </td>\n                                            <td>\n                                                <input type=\"number\" max=\"100\" min=\"1\" class=\"txt50\" [(ngModel)]=\"rightOD.pd\" />\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <th> Left (OS) </th>\n                                            <td>\n                                                <input type=\"number\" max=\"20\" min=\"-20\" step=\"0.25\" name=\"\" class=\"txt50\" [(ngModel)]=\"leftOD.sphere\" />\n                                            </td>\n                                            <td>\n                                                <input type=\"number\" max=\"5\" min=\"0\" step=\"0.25\" name=\"\" class=\"txt50\" [(ngModel)]=\"leftOD.cylinder\" />\n                                            </td>\n                                            <td>\n                                                <input type=\"number\" max=\"180\" min=\"0\" name=\"\" class=\"txt50\" [(ngModel)]=\"leftOD.axis\" />\n                                            </td>\n                                            <td>\n                                                <input type=\"number\" max=\"3.5\" min=\"0\" step=\"0.25\" name=\"\" class=\"txt50\" [(ngModel)]=\"leftOD.add\" />\n                                            </td>\n                                            <td>\n                                                <input type=\"number\" max=\"100\" min=\"1\" name=\"\" class=\"txt50\" [(ngModel)]=\"leftOD.pd\" />\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" type=\"button\" (click)=\"setFields('eye_pres')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- sphere Modal  -->\n<!-- <div class=\"modal fade sphere-modal\" id=\"sphereLModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Sphere (L) </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"sphere-modal-body wrap-div\">\n                        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                            <ul class=\"sphere-ul\">\n                                <li class=\"{{getclassSphere('left',num)}}\" *ngFor=\"let num of spherePositive\"> <a (click)=\"selectSphere('left',num)\">  {{num}} </a> </li>\n                            </ul>\n                        </div>\n                        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                            <ul class=\"sphere-ul right\">\n                                <li class=\"{{getclassSphere('left',num)}}\" *ngFor=\"let num of sphereNegative\"> <a (click)=\"selectSphere('left',num)\">  {{num}} </a> </li>\n                            </ul>\n                        </div>\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 sphere-bttom\">\n                            <span class=\"spher-btomtext\"> Higher </span>\n                            <div class=\"plusminus-div\">\n                                <div class=\"\"> <i class=\"fa fa-plus\"></i> </div>\n                                <div class=\"\"> <i class=\"fa fa-minus\"></i> </div>\n                            </div>\n                            <div class=\"textbox-bottom\">\n                                <input type=\"number\" class=\"form-control txtfield\" step=\"0.01\" min=\"-13.50\" max=\"13.50\" placeholder=\"__.__\" />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveEyePresciption('Sphere_L')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade sphere-modal\" id=\"sphereRModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Sphere (R) </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"sphere-modal-body wrap-div\">\n                        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                            <ul class=\"sphere-ul\">\n                                <li class=\"{{getclassSphere('right',num)}}\" *ngFor=\"let num of spherePositive\" (click)=\"selectSphere('right',num)\"> <a>  {{num}} </a> </li>\n                            </ul>\n                        </div>\n                        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                            <ul class=\"sphere-ul right\">\n                                <li class=\"{{getclassSphere('right',num)}}\" *ngFor=\"let num of sphereNegative\" (click)=\"selectSphere('right',num)\"> <a>  {{num}} </a> </li>\n                            </ul>\n                        </div>\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 sphere-bttom\">\n                            <span class=\"spher-btomtext\"> Higher </span>\n                            <div class=\"plusminus-div\">\n                                <div class=\"\"> <i class=\"fa fa-plus\"></i> </div>\n                                <div class=\"\"> <i class=\"fa fa-minus\"></i> </div>\n                            </div>\n                            <div class=\"textbox-bottom\">\n                                <input type=\"number\" class=\"form-control txtfield\" step=\"0.01\" min=\"-13.50\" max=\"13.50\" placeholder=\"__.__\" />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveEyePresciption('Sphere_R')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Cylinder Modal  -->\n<!-- <div class=\"modal fade sphere-modal\" id=\"cylinderRModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Cylinder (R) </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"cylinder-modal-body wrap-div\">\n                        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                            <ul class=\"sphere-ul\">\n                                <li class=\"{{getclassCylinder('right',num)}}\" *ngFor=\"let num of cylinderPositive\" (click)=\"selectCylinder('right',num)\"> <a>  {{num}} </a> </li>\n                            </ul>\n                        </div>\n                        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                            <ul class=\"sphere-ul right\">\n                                <li class=\"{{getclassCylinder('right',num)}}\" *ngFor=\"let num of cylinderNegative\" (click)=\"selectCylinder('right',num)\"> <a>  {{num}} </a> </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveEyePresciption('Cylinder_R')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Cylinder Modal  -->\n<!-- <div class=\"modal fade sphere-modal\" id=\"cylinderLModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Cylinder (L) </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"cylinder-modal-body wrap-div\">\n                        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                            <ul class=\"sphere-ul\">\n                                <li class=\"{{getclassCylinder('left',num)}}\" *ngFor=\"let num of cylinderPositive\" (click)=\"selectCylinder('left',num)\"> <a>  {{num}} </a> </li>\n                            </ul>\n                        </div>\n                        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                            <ul class=\"sphere-ul right\">\n                                <li class=\"{{getclassCylinder('left',num)}}\" *ngFor=\"let num of cylinderNegative\" (click)=\"selectCylinder('left',num)\"> <a>  {{num}} </a> </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveEyePresciption('Cylinder_L')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Axis Right Modal  -->\n<!-- <div class=\"modal fade axis-modal\" id=\"axisRModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Axis (R) </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"axis-modal-body wrap-div\">\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <ul class=\"sphere-ul\">\n                                <li class=\"{{getclassAxis('right',num)}}\" *ngFor=\"let num of axisNumber\" (click)=\"selectAxis('right',num)\"> <a>  {{num}} </a> </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveEyePresciption('Axis_R')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Axis left Modal  -->\n<!-- <div class=\"modal fade axis-modal\" id=\"axisLModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Axis (L) </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"axis-modal-body wrap-div\">\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <ul class=\"sphere-ul\">\n                                <li class=\"{{getclassAxis('left',num)}}\" *ngFor=\"let num of axisNumber\" (click)=\"selectAxis('left',num)\"> <a>  {{num}} </a> </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveEyePresciption('Axis_L')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Add (R/L) Modal  -->\n<!-- <div class=\"modal fade add-modal\" id=\"addRModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Add (R) </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"add-modal-body wrap-div\">\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <ul class=\"sphere-ul right\">\n                                <li class=\"{{getclassAdd('right',num)}}\" *ngFor=\"let num of addNumber\" (click)=\"selectAdd('right',num)\"> <a>  {{num}} </a> </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveEyePresciption('Add_R')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Add (R/L) Modal  -->\n<!-- <div class=\"modal fade add-modal\" id=\"addLModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Add (L) </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"add-modal-body wrap-div\">\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <ul class=\"sphere-ul right\">\n                                <li class=\"{{getclassAdd('left',num)}}\" *ngFor=\"let num of addNumber\" (click)=\"selectAdd('left',num)\"> <a>  {{num}} </a> </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveEyePresciption('Add_L')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- PD (R/L) Modal  -->\n<!-- <div class=\"modal fade pd-modal\" id=\"pdRModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> PD (R) </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"pd-modal-body wrap-div\">\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <label> Pupillary Distance (mm) </label>\n                            <input type=\"text\" class=\"form-control txtfield\" step=\"0.01\" #input (blur)=\"addTempPD('right',$event.target.value)\" placeholder=\"__.__\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveEyePresciption('Pd_R')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- PD (R/L) Modal  -->\n<!-- <div class=\"modal fade pd-modal\" id=\"pdLModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> PD (L) </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"pd-modal-body wrap-div\">\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <label> Pupillary Distance (mm) </label>\n                            <input type=\"text\" class=\"form-control txtfield\" step=\"0.01\" #input (blur)=\"addTempPD('left',$event.target.value)\" placeholder=\"__.__\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveEyePresciption('Pd_L')\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- Vaccination  -->\n<!-- <div class=\"modal fade cus-modal\" id=\"vaccinationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Vaccination </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"vaccination-modal-body wrap-div\">\n                        <div class=\"vacci-div\">\n                            <h4> Current vaccination </h4>\n                            <div class=\"row\">\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 p-0\">\n                                        <button class=\"btn btn-green\" type=\"button\" data-toggle=\"modal\" data-target=\"#vaccinationScheduleModal\" (click)=\"selectVaccination('current')\"> Select </button>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\" *ngIf=\"currentVaccinationComplete==true\">\n                                    <ol>\n                                        <li *ngFor=\"let data of tempCurrentVaccinationArray\"> {{data}} </li>\n                                    </ol>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"vacci-div\">\n                            <h4> Due vaccination </h4>\n                            <div class=\"row\">\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12 p-0\">\n                                        <div class=\"cus-datetimepicker\">\n                                            <label class=\"labelFloat\"> Due Date<sup>*</sup> </label>\n                                            <angular2-date-picker [(ngModel)]=\"vaccinationDate\" [settings]=\"settings\"></angular2-date-picker>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 p-0\">\n                                        <button class=\"btn btn-green\" type=\"button\" data-toggle=\"modal\" data-target=\"#vaccinationScheduleModal\" (click)=\"selectVaccination('due')\"> Select </button>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\" *ngIf=\"dueVaccinationComplete==true\">\n                                    <ol>\n                                        <li *ngFor=\"let data of tempDueVaccinationArray\"> {{data}} </li>\n                                    </ol>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"setFields('vaccination')\"> Done </button>\n            </div>\n        </div>\n    </div> -->\n    <!-- </div> -->\n    <!-- Vaccination Schedule  -->\n<!-- <div class=\"modal fade cus-modal\" id=\"vaccinationScheduleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Vaccination Schedule </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"vaccination-modal-body wrap-div\">\n                        <div class=\"vacciSchedule-div\">\n                            <ul class=\"\">\n                                <li>\n                                    <div class=\"\"> Birth </div>\n                                    <div class=\"{{getClassVaccination('BCG')}}\" (click)=\"vaccination('BCG')\"> BCG </div>\n                                    <div class=\"{{getClassVaccination('OPV 0')}}\" (click)=\"vaccination('OPV 0')\"> OPV 0 </div>\n                                    <div class=\"{{getClassVaccination('Hep-B 1')}}\" (click)=\"vaccination('Hep-B 1')\"> Hep-B 1 </div>\n                                </li>\n                                <li>\n                                    <div class=\"\"> 06 week </div>\n                                    <div class=\"{{getClassVaccination('DTwP 1')}}\" (click)=\"vaccination('DTwP 1')\"> DTwP 1 </div>\n                                    <div class=\"{{getClassVaccination('IPV 1')}}\" (click)=\"vaccination('IPV 1')\"> IPV 1 </div>\n                                    <div class=\"{{getClassVaccination('Hep-B 2')}}\" (click)=\"vaccination('Hep-B 2')\"> Hep-B 2 </div>\n                                    <div class=\"{{getClassVaccination('Hib 1')}}\" (click)=\"vaccination('Hib 1')\"> Hib 1 </div>\n                                    <div class=\"{{getClassVaccination('Rotavirus2')}}\" (click)=\"vaccination('Rotavirus2')\"> Rotavirus<sup>2</sup> </div>\n                                    <div class=\"{{getClassVaccination('PCV 2')}}\" (click)=\"vaccination('PCV 2')\"> PCV 2 </div>\n                                </li>\n                                <li>\n                                    <div class=\"\"> 10 week </div>\n                                    <div class=\"{{getClassVaccination('DTwP 2')}}\" (click)=\"vaccination('DTwP 2')\"> DTwP 2 </div>\n                                    <div class=\"{{getClassVaccination('IPV 2')}}\" (click)=\"vaccination('IPV 2')\"> IPV 2 </div>\n                                    <div class=\"{{getClassVaccination('Hib 2')}}\" (click)=\"vaccination('Hib 2')\"> Hib 2 </div>\n                                    <div class=\"{{getClassVaccination('Rotavirus 2')}}\" (click)=\"vaccination('Rotavirus 2')\"> Rotavirus<sup>2</sup> </div>\n                                    <div class=\"{{getClassVaccination('PCV2')}}\" (click)=\"vaccination('PCV2')\"> PCV<sup>2</sup> </div>\n                                </li>\n                                <li>\n                                    <div class=\"\"> 14 week </div>\n                                    <div class=\"{{getClassVaccination('DTwP 3')}}\" (click)=\"vaccination('DTwP 3')\"> DTwP 3 </div>\n                                    <div class=\"{{getClassVaccination('IPV 3')}}\" (click)=\"vaccination('IPV 3')\"> IPV 3 </div>\n                                    <div class=\"{{getClassVaccination('Hib 3')}}\" (click)=\"vaccination('Hib 3')\"> Hib 3 </div>\n                                    <div class=\"{{getClassVaccination('Rotavirus 3')}}\" (click)=\"vaccination('Rotavirus 3')\"> Rotavirus<sup>3</sup> </div>\n                                    <div class=\"{{getClassVaccination('PCV 3')}}\" (click)=\"vaccination('PCV 3')\"> PCV<sup>3</sup> </div>\n                                </li>\n                                <li>\n                                    <div class=\"\"> 6 Month </div>\n                                    <div class=\"{{getClassVaccination('OPV 1')}}\" (click)=\"vaccination('OPV 1')\"> OPV 1 </div>\n                                    <div class=\"{{getClassVaccination('Hep-B3')}}\" (click)=\"vaccination('Hep-B3')\"> Hep-B3 </div>\n                                </li>\n                                <li>\n                                    <div class=\"\"> 9 Month </div>\n                                    <div class=\"{{getClassVaccination('OPV')}}\" (click)=\"vaccination('OPV')\"> OPV </div>\n                                    <div class=\"{{getClassVaccination('MMR-1')}}\" (click)=\"vaccination('MMR-1')\"> MMR-1 </div>\n                                </li>\n                                <li>\n                                    <div class=\"\"> 9-12 Month </div>\n                                    <div class=\"{{getClassVaccination('TCV')}}\" (click)=\"vaccination('TCV')\"> TCV </div>\n                                </li>\n                                <li>\n                                    <div class=\"\"> 12 Month </div>\n                                    <div class=\"{{getClassVaccination('Hep-A1')}}\" (click)=\"vaccination('Hep-A1')\"> Hep-A1 </div>\n                                </li>\n                                <li>\n                                    <div class=\"\"> 15 Month </div>\n                                    <div class=\"{{getClassVaccination('MMR 2')}}\" (click)=\"vaccination('MMR 2')\"> MMR 2 </div>\n                                    <div class=\"{{getClassVaccination('Varicella 1')}}\" (click)=\"vaccination('Varicella 1')\"> Varicella 1 </div>\n                                    <div class=\"{{getClassVaccination('PCV booster')}}\" (click)=\"vaccination('PCV booster')\"> PCV booster </div>\n                                </li>\n                                <li>\n                                    <div class=\"\"> 16 to 18 Month </div>\n                                    <div class=\"{{getClassVaccination('DTwP B1/DTaP B1')}}\" (click)=\"vaccination('DTwP B1/DTaP B1')\"> DTwP B1/DTaP B1 </div>\n                                    <div class=\"{{getClassVaccination('IPV B1')}}\" (click)=\"vaccination('IPV B1')\"> IPV B1 </div>\n                                    <div class=\"{{getClassVaccination('Hib B1')}}\" (click)=\"vaccination('Hib B1')\"> Hib B1 </div>\n                                </li>\n                                <li>\n                                    <div class=\"\"> 18 Month </div>\n                                    <div class=\"{{getClassVaccination('Hep-A 2')}}\" (click)=\"vaccination('Hep-A 2')\"> Hep-A 2 </div>\n                                </li>\n                                <li>\n                                    <div class=\"\"> 2 Year </div>\n                                    <div class=\"{{getClassVaccination('TCV Booster')}}\" (click)=\"vaccination('TCV Booster')\"> TCV Booster </div>\n                                </li>\n                                <li>\n                                    <div class=\"\"> 4 to 6 Year </div>\n                                    <div class=\"{{getClassVaccination('DTwP B2/DTaP B2')}}\" (click)=\"vaccination('DTwP B2/DTaP B2')\"> DTwP B2/DTaP B2 </div>\n                                    <div class=\"{{getClassVaccination('OPV 3')}}\" (click)=\"vaccination('OPV 3')\"> OPV 3 </div>\n                                    <div class=\"{{getClassVaccination('Varicella 2')}}\" (click)=\"vaccination('Varicella 2')\"> Varicella 2 </div>\n                                    <div class=\"{{getClassVaccination('MMR 3')}}\" (click)=\"vaccination('MMR 3')\"> MMR 3 </div>\n                                </li>\n                                <li>\n                                    <div class=\"\"> 10 to 12 Year </div>\n                                    <div class=\"{{getClassVaccination('Tdap/Td')}}\" (click)=\"vaccination('Tdap/Td')\"> Tdap/Td </div>\n                                    <div class=\"{{getClassVaccination('HPV')}}\" (click)=\"vaccination('HPV')\"> HPV </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveVaccination()\"> Done </button>\n            </div>\n        </div>\n    </div> -->\n    <!-- </div> -->\n    <!-- Refer Modal  -->\n    <div class=\"modal fade cus-modal\" id=\"referModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">×</span>\n                    </button>\n                    <h4 class=\"modal-title\"> Refer </h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"refer-modal-body wrap-div\">\n                            <form [formGroup]=\"doctorReferForm\">\n                                <h4> Referred to</h4>\n                                <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                    <label for=\"field1\" class=\"labelFloat\">Doctor Mobile Number </label>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">+91</span>\n                                        <input id=\"field1\" autocomplete=\"off\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"referDetail.phone\" [formControl]=\"doctorReferForm.controls['phone']\" (blur)=\"findDoctorReferDetail()\" />\n                                    </div>\n                                    <p style=\"color: #FF0000\" *ngIf=\"!doctorReferForm.controls['phone'].valid  && (doctorReferForm.controls['phone'].touched)\">Invalid mobile number !!!</p>\n                                </div>\n                                <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                    <label for=\"field1\" class=\"labelFloat\">Doctor Name </label>\n                                    <input id=\"field1\" autocomplete=\"off\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"referDetail.doctor_name\" [formControl]=\"doctorReferForm.controls['doctor_name']\" />\n                                </div>\n                                <p style=\"color: #FF0000\" *ngIf=\"!doctorReferForm.controls['doctor_name'].valid  && (doctorReferForm.controls['doctor_name'].touched)\">Invalid doctor name !!!</p>\n                                <h4> Referral Note </h4>\n                                <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                    <textarea class=\"form-control txtfield\" rows=\"4\" placeholder=\"\" [(ngModel)]=\"referDetail.note\" [formControl]=\"doctorReferForm.controls['note']\"></textarea>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" [disabled]=\"!doctorReferForm.valid\" (click)=\"referToDcotor()\"> Refer </button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Follow-up Modal  -->\n    <div class=\"modal fade cus-modal reverse-animate\" id=\"followModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">×</span>\n                    </button>\n                    <h4 class=\"modal-title\"> Follow up (Days)</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"follow-modal-body wrap-div\">\n                            <div class=\"follow-wrap\">\n                                <ul class=\"follow-ul\">\n                                    <li class=\"{{getFollowUpClass(1)}}\" (click)=\"saveFollowUp(1)\"> 1 </li>\n                                    <li class=\"{{getFollowUpClass(2)}}\" (click)=\"saveFollowUp(2)\"> 2 </li>\n                                    <li class=\"{{getFollowUpClass(3)}}\" (click)=\"saveFollowUp(3)\"> 3 </li>\n                                    <li class=\"{{getFollowUpClass(4)}}\" (click)=\"saveFollowUp(4)\"> 4 </li>\n                                    <li class=\"{{getFollowUpClass(5)}}\" (click)=\"saveFollowUp(5)\"> 5 </li>\n                                    <li class=\"{{getFollowUpClass(6)}}\" (click)=\"saveFollowUp(6)\"> 6 </li>\n                                    <li class=\"{{getFollowUpClass(7)}}\" (click)=\"saveFollowUp(7)\"> 7 </li>\n                                    <li class=\"{{getFollowUpClass(8)}}\" (click)=\"saveFollowUp(8)\"> 8 </li>\n                                    <li class=\"{{getFollowUpClass(9)}}\" (click)=\"saveFollowUp(9)\"> 9 </li>\n                                    <li class=\"{{getFollowUpClass(10)}}\" (click)=\"saveFollowUp(10)\"> 10 </li>\n                                    <li class=\"{{getFollowUpClass(12)}}\" (click)=\"saveFollowUp(12)\"> 12 </li>\n                                    <li class=\"{{getFollowUpClass(14)}}\" (click)=\"saveFollowUp(14)\"> 14 </li>\n                                    <li class=\"{{getFollowUpClass(15)}}\" (click)=\"saveFollowUp(15)\"> 15 </li>\n                                    <li class=\"{{getFollowUpClass(18)}}\" (click)=\"saveFollowUp(18)\"> 18 </li>\n                                    <li class=\"{{getFollowUpClass(20)}}\" (click)=\"saveFollowUp(20)\"> 20 </li>\n                                    <li class=\"{{getFollowUpClass(25)}}\" (click)=\"saveFollowUp(25)\"> 25 </li>\n                                    <li class=\"{{getFollowUpClass(28)}}\" (click)=\"saveFollowUp(28)\"> 28 </li>\n                                    <li class=\"{{getFollowUpClass(30)}}\" (click)=\"saveFollowUp(30)\"> 30 </li>\n                                    <li class=\"{{getFollowUpClass(35)}}\" (click)=\"saveFollowUp(35)\"> 35 </li>\n                                    <li class=\"{{getFollowUpClass(42)}}\" (click)=\"saveFollowUp(42)\"> 42 </li>\n                                    <li class=\"{{getFollowUpClass(60)}}\" (click)=\"saveFollowUp(60)\"> 60 </li>\n                                    <li class=\"{{getFollowUpClass(90)}}\" (click)=\"saveFollowUp(90)\"> 90 </li>\n                                    <li class=\"{{getFollowUpClass(120)}}\" (click)=\"saveFollowUp(120)\"> 120 </li>\n                                    <li class=\"{{getFollowUpClass(180)}}\" (click)=\"saveFollowUp(180)\"> 180 </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"setFields('follow')\"> Done </button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Karam -->\n\n    <div class=\"modal fade cus-preview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <div>\n                        <h4 class=\"modal-title\"> Preview </h4>\n                    </div>\n                    <div class=\"text-center\">\n                        <button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n                    </div>\n                    <div>\n                        <button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n                    </div>\n                </div>\n                <div class=\"modal-body\" id=\"previewModalPdf\">\n                    <div class=\"row\">\n                        <div class=\"presc-modal-body\">\n                            <div class=\"pad-view\">\n                                <div class=\"padview-header\">\n                                   <div class=\"pad-view-flx col-lg-4\">\n                                    <div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\">\n                                        <h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{doctorData.first_name}} </h1>\n                                    </div>\n                                    <div class=\"form-group qual\">\n                                        <p class=\"color-purple\">\n                                            <span *ngIf=\"checkOptionOfPad('Specialization')\">({{doctorData.specialization}})</span><br>\n                                            <span *ngIf=\"checkOptionOfPad('Qualifications')\">\n                                                <span *ngFor=\"let data of doctorData.qualification;let i = index\">\n                                                   {{data.value}} <span *ngIf=\"i!=doctorData.qualification.length-1\">,</span>\n                                               </span>\n                                           </span>\n                                       </p>\n                                       <p *ngIf=\"checkOptionOfPad('Experience')\">Experience - <span class=\"color-purple\">{{experience}} years</span> </p>\n                                       <p *ngIf=\"checkOptionOfPad('registration_no')\"> Registration: <span class=\"color-purple\"> {{doctorData.registration_no}} </span> </p>\n                                       <p *ngIf=\"checkOptionOfPad('Professional_affiliation')\">\n                                        <span class=\"color-purple\" *ngFor=\"let pa of doctorData.professional_affiliation;let i=index\">\n                                            {{pa.value}}<span *ngIf=\"i!=doctorData.professional_affiliation.length-1\">,</span>\n                                        </span>\n                                    </p>\n                                </div>\n                            </div>\n\n                            <div class=\"pad-view-flx col-lg-8\">\n                                <ul class=\"clinic-detail\">\n                                    <li class=\"clinic-name\" *ngIf=\"checkOptionOfPad('Clinic_name')\">\n                                        <h1 id=\"translated_clinicName\"> {{doctorsDetails.clinic_details.clinic_name}} </h1>\n                                    </li>\n                                    <li *ngIf=\"checkOptionOfPad('Clinic_address')\">{{doctorsDetails.clinic_details.address}}, {{doctorsDetails.clinic_details.area}}, {{doctorsDetails.clinic_details.city}}, {{doctorsDetails.clinic_details.state}}</li>\n                                    <li class=\"li-cstm\">\n                                        <div class=\"row\" *ngIf=\"checkOptionOfPad('Appointment_contacts')\">\n                                            <div class=\"col-lg-12\">\n                                                <h4 class=\"for-apt\"> For appointments </h4>\n                                                <p *ngIf=\"doctorsDetails.clinic_details.landline\"> Tel: {{doctorsDetails.clinic_details.std_code}}-{{doctorsDetails.clinic_details.landline}}</p>\n                                                <p> Mb: +91-{{doctorsDetails.clinic_details.mobile}} </p>\n                                            </div>\n                                        </div>                                           \n                                    </li>\n                                </ul>\n                            </div>\n\n                        </div>\n                        <p class=\"text-center\" *ngIf=\"checkOptionOfPad('Header_note')\">\n                            <label id=\"translated_appointmentText\"> {{getHeaderText()}} </label>\n                        </p>\n                        <div class=\"padview-body\">\n                            <div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n                                <div class=\"emergency-wrap\">\n                                    <div class=\"form-group emrgency-consult\" *ngIf=\"consultingPatient.type=='Emergency'\">\n                                        <p class=\"small\" id=\"translated_emergencyText\"><i> Emergency Consultation </i> </p>\n                                    </div>\n                                    <div class=\"form-group schdl\" *ngIf=\"checkOptionOfPad('Clinic_schedule')\">\n                                        <h5 class=\" color-blue\"> Schedule: </h5>\n                                        <div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\"> \n                                            <span><strong style=\"display:block; width:110px;\"> {{shift.day}}: </strong>\n                                                <span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\"> \n                                                    [\n                                                    <span *ngIf=\"time.fromTime.hour=='0'\">{{time.fromTime.hour}}0:</span>\n                                                    <span *ngIf=\"time.fromTime.hour!='0'\">{{time.fromTime.hour}}:</span>\n                                                    <span *ngIf=\"time.fromTime.minute=='0'\">{{time.fromTime.minute}}0 –</span>\n                                                    <span *ngIf=\"time.fromTime.minute!='0'\">{{time.fromTime.minute}} –</span>\n                                                    <span *ngIf=\"time.toTime.hour=='0'\">{{time.toTime.hour}}0:</span>\n                                                    <span *ngIf=\"time.toTime.hour!='0'\">{{time.toTime.hour}}:</span>\n                                                    <span *ngIf=\"time.toTime.minute=='0'\">{{time.toTime.minute}}0</span>\n                                                    <span *ngIf=\"time.toTime.minute!='0'\">{{time.toTime.minute}}</span>\n                                                    ]\n                                                </span>\n                                                <br>\n                                            </span>\n                                        </div>\n                                        <div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\"> \n                                            <span><strong> {{shift.day}}: </strong> Closed \n                                            </span>\n                                        </div>\n                                    </div>\n                                    <div id=\"translated_treatmentText\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n                                        <h5 class=\"color-blue\"> Available Treatments: </h5>\n                                        <ul style=\"padding-left:15px!important;\">\n                                            <li *ngFor=\"let treat of doctorData.expertise\">{{treat.value}}</li>\n                                        </ul>\n                                    </div>\n                                    <div *ngIf=\"doctorData.clinic_services_status=='Yes' && checkOptionOfPad('Available_services')\" id=\"translated_servicesText\">\n                                        <h5 class=\"color-blue\"> Available Services: </h5>\n                                        <ul style=\"padding-left:15px!important;\">\n                                            <li *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy\">Pharmacy</li>\n                                            <li *ngIf=\"doctorData.clinic_services.Clinic_IPD\">IPD</li>\n                                            <li *ngFor=\"let cs of doctorData.clinic_services.ClinicServicesDetail\"> {{cs}} </li>\n                                            <li *ngFor=\"let cs of doctorData.clinic_services.OtherClinicService\"> {{cs.value}} </li>\n                                        </ul>\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n                                <div class=\"padview-bodyright\">\n                                    <ul class=\"padview-body-header\">\n                                        <li>\n                                            <div class=\"text-underline\"> Prescription ID </div>\n                                            <div class=\"strong\" *ngIf=\"!consultingPatient.ID\"> {{getDay(day)}}{{getDay(numericMonth)}}{{year}}-{{consultingPatient.id}} </div>\n                                            <div class=\"strong\" *ngIf=\"consultingPatient.ID\"> {{getDay(day)}}{{getDay(numericMonth)}}{{year}}-{{consultingPatient.ID}} </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"text-underline\"> Name </div>\n                                            <div class=\"strong\"> {{consultingPatient.pateintName}} </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"text-underline\"> Age/Sex </div>\n                                            <div class=\"strong\"> {{consultingPatient.age}} {{consultingPatient.gender}} </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"text-underline\"> Weight </div>\n                                            <div class=\"strong\" *ngIf=\"consultingPatient.weight\"> {{consultingPatient.weight}} Kg </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"text-underline\"> Height </div>\n                                            <div class=\"strong\" *ngIf=\"consultingPatient.height\"> {{consultingPatient.height}} cm </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"strong\"> {{day}} {{month}} , {{year}}</div>\n                                        </li>\n                                    </ul>\n                                    <ul class=\"padview-patient\">\n                                        <li class=\"img-patient\">\n                                            <img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!consultingPatient.pateintPic\"/>\n                                            <img src=\"{{pateintPicPath}}{{consultingPatient.pateintPic}}\" class=\"img-responsive\" *ngIf=\"consultingPatient.pateintPic\"/>\n                                        </li>\n                                        <li *ngIf=\"preConditionComplete==true && finalPreConditions.length>0\">\n                                            <div class=\"pat-heading\"><span id=\"translated_PreCondHeading\"> Existing health status </span> </div>\n                                            <ul class=\"pat-type\">\n                                                <li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n                                            </ul>\n                                        </li>\n                                        <li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected.length>0\">\n                                            <div class=\"pat-heading\"><span id=\"translated_BIHeading\"> Body Indicators</span> </div>\n                                            <ul class=\"pat-type\">\n                                                <li  *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n                                                </li>\n                                            </ul>\n                                        </li>\n                                        <li *ngIf=\"allergyComplete==true && finalAllergy.length>0\">\n                                            <div class=\"pat-heading\"><span id=\"translated_allergyHeading\"> Allergy</span> </div>\n                                            <ul class=\" pat-type\" style=\"padding-left:15px\">\n                                                <li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n                                            </ul>\n                                        </li>\n                                    </ul>\n                                    <div class=\"middle-body\">\n                                        <div class=\"\">\n                                            <div class=\"number-div\" *ngIf=\"findingsComplete==true && findingsSelected.length>0\">\n                                                <div class=\"pat-heading\"><span id=\"translated_PTHeading\"> Patient's Complaints</span> </div>\n                                                <ul class=\"numberol\">\n                                                    <li *ngFor=\"let data of findingsSelected\"> {{data.value}} </li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected.length>0\">\n                                                <div class=\"pat-heading\"><span id=\"translated_sympHeading\"> Symptoms</span> </div>\n                                                <ul class=\"numberol\">\n                                                    <li *ngFor=\"let data of symptomsSelected\"> {{data.value}} </li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"number-div\" *ngIf=\"diagnosisComplete==true && diagnosisSelected.length>0\">\n                                                <div class=\"pat-heading\"><span id=\"translated_diagnosisHeading\"> Diagnosis</span> </div>\n                                                <ul class=\"numberol\">\n                                                    <li *ngFor=\"let data of diagnosisSelected\">{{data.value}}</li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"third-body\">\n                                        <div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray.length\">\n                                            <div class=\"pat-heading\"> <span id=\"translated_invHeading\"> Investigation</span> </div>\n                                            <ol class=\"numberol pl10\">\n                                                <li *ngFor=\"let data of investigationArray\">\n                                                    <span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n                                                        <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n                                                            <span *ngIf=\"i!=data.values.length-1\">\\</span>\n                                                        </span>\n                                                    </span>\n                                                    <span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n                                                        <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n                                                    </span>\n                                                </li>\n                                            </ol>\n                                        </div>\n                                        <div class=\"number-div\" *ngIf=\"treatmentComplete==true\" id=\"translated_OTHeading\">\n                                            <div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n                                            <ul class=\"numberol\">\n                                                <li *ngFor=\"let data of treatmentArray;let i =index\">\n                                                    <span *ngIf=\"data.name=='Lifestyle Changes'\">\n                                                        {{data.name}} - <span *ngFor=\"let value of data.lifestyle;let j = index\">{{value.value}} <span *ngIf=\"j!=data.lifestyle.length-1\">\\</span></span>\n                                                    </span>\n                                                    <span *ngIf=\"data.name=='Physiotherapy' || data.name=='Fomentation'\">\n                                                        {{data.name}} - {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                                                    </span>\n                                                    <span *ngIf=\"data.name=='Plaster'\">\n                                                        <span class=\"notranslate\">{{data.name}}</span> - on <span class=\"notranslate\">{{data.Injury_Area}}</span> of {{data.plaster_type}} for {{data.Duration}} days \n                                                    </span>\n                                                    <span *ngIf=\"data.name=='Gargle' || data.name=='Dressing' || data.name=='Bandage' || data.name=='Other'\">\n                                                        <span *ngIf=\"data.name!='Other'\">{{data.name}} - </span>{{data.med_name[0].value}} {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                                                    </span>\n                                                    <span>\n                                                        {{data.value}}\n                                                    </span>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class=\"note-box\">\n                                        <div class=\"note-innerbox\">\n                                            <div class=\"note-innerdiv\">\n                                                <div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray.length>0\">\n                                                    <div class=\"pat-heading\"> <span id=\"translated_surgHeading\"> Recommended Surgery</span> </div>\n                                                    <ul class=\"numberol\">\n                                                        <li *ngFor=\"let data of surgerySelectedArray\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n                                                    </ul>\n                                                </div>\n                                                <div class=\"number-div\" *ngIf=\"refer_status\" style=\"padding:0 30px;\">\n                                                    <div class=\"pat-heading\"> <span> Referred To</span> </div>\n                                                    <p> {{referDetail.doctor_name}} </p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"\" *ngIf=\"eyePresComplete==true\">\n                                            <div class=\"pat-heading\"> <span id=\"translated_eyeHeading\"> Eye Prescription</span> </div>\n                                            <div class=\"table-responsive\">\n                                                <table class=\"table table-bordered table-striped cstm-table\">\n                                                    <thead>\n                                                        <tr>\n                                                            <th> Eye </th>\n                                                            <th> Sphere </th>\n                                                            <th> Cylinder </th>\n                                                            <th> Axis </th>\n                                                            <th> Add </th>\n                                                            <th> PD (mm) </th>\n                                                        </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                        <tr>\n                                                            <td> Right (OD): </td>\n                                                            <td> {{finalRightOD.sphere}} </td>\n                                                            <td> {{finalRightOD.cylinder}} </td>\n                                                            <td> {{finalRightOD.axis}} </td>\n                                                            <td> {{finalRightOD.add}} </td>\n                                                            <td> {{finalRightOD.pd}} </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td> Left (OS): </td>\n                                                            <td> {{finalLeftOD.sphere}} </td>\n                                                            <td> {{finalLeftOD.cylinder}} </td>\n                                                            <td> {{finalLeftOD.axis}} </td>\n                                                            <td> {{finalLeftOD.add}} </td>\n                                                            <td> {{finalLeftOD.pd}} </td>\n                                                        </tr>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"third-body\">\n                                        <div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n                                            <div class=\"pat-heading\"> <span> Follow-Up</span></div>\n                                            <p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n                                            <p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"forth-body\">\n                                        <div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n                                            <div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div>\n                                        </div>\n                                        <div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"padview-footer\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n                            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                <div class=\"padview-powered\">\n                                    <div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n                                    <div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com</div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12 col-sm-4 col-xs-12\" id=\"translated_footer\">\n                                <div class=\"legal\">\n                                    <h3>{{getFooterText()}}</h3>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n\n<div class=\"modal fade cus-preview\" id=\"previewModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content show-default\">\n            <div class=\"modal-header\">\n                <div>\n                    <h4 class=\"modal-title\"> Preview </h4>\n                </div>\n                <div class=\"text-center\">\n                    <button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n                </div>\n                <div>\n                    <button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"presc-modal-body\">\n                        <div class=\"pad-view\">\n                            <div class=\"padview-header\">\n                                <div class=\"pad-view-flx col-lg-4\">\n                                    <div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\">\n                                        <h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{doctorData.first_name}} </h1>\n                                    </div>\n                                    <div class=\"form-group qual\">\n                                        <p class=\"color-purple\">\n                                            <span *ngIf=\"checkOptionOfPad('Specialization')\">({{doctorData.specialization}})</span><br>\n                                            <span *ngIf=\"checkOptionOfPad('Qualifications')\">\n                                                <span *ngFor=\"let data of doctorData.qualification;let i = index\">\n                                                   {{data.value}} <span *ngIf=\"i!=doctorData.qualification.length-1\">,</span>\n                                               </span>\n                                           </span>\n                                       </p>\n                                       <p *ngIf=\"checkOptionOfPad('Experience')\">Experience - <span class=\"color-purple\">{{experience}} years</span> </p>\n                                       <p *ngIf=\"checkOptionOfPad('registration_no')\"> Registration: <span class=\"color-purple\"> {{doctorData.registration_no}} </span> </p>\n                                       <p *ngIf=\"checkOptionOfPad('Professional_affiliation')\">\n                                        <span class=\"color-purple\" *ngFor=\"let pa of doctorData.professional_affiliation;let i=index\">\n                                            {{pa.value}}<span *ngIf=\"i!=doctorData.professional_affiliation.length-1\">,</span>\n                                        </span>\n                                    </p>\n                                </div>\n                            </div>\n\n                            <div class=\"pad-view-flx col-lg-8\">\n                                <ul class=\"clinic-detail\">\n                                    <li class=\"clinic-name\" *ngIf=\"checkOptionOfPad('Clinic_name')\">\n                                        <h1 id=\"translated_clinicName\"> {{doctorsDetails.clinic_details.clinic_name}} </h1>\n                                    </li>\n                                    <li *ngIf=\"checkOptionOfPad('Clinic_address')\">{{doctorsDetails.clinic_details.address}}, {{doctorsDetails.clinic_details.area}}, {{doctorsDetails.clinic_details.city}}, {{doctorsDetails.clinic_details.state}}</li>\n                                    <li class=\"li-cstm\">\n                                        <div class=\"row\" *ngIf=\"checkOptionOfPad('Appointment_contacts')\">\n                                            <div class=\"col-lg-12\">\n                                                <h4 class=\"for-apt\"> For appointments </h4>\n                                                <p *ngIf=\"doctorsDetails.clinic_details.landline\"> Tel: {{doctorsDetails.clinic_details.std_code}}-{{doctorsDetails.clinic_details.landline}}</p>\n                                                <p> Mb: +91-{{doctorsDetails.clinic_details.mobile}} </p>\n                                            </div>\n                                        </div>\n\n                                    </li>\n                                </ul>\n                            </div>\n\n                        </div>\n                        <p class=\"text-center\" *ngIf=\"checkOptionOfPad('Header_note')\">\n                            <label id=\"translated_appointmentText\"> {{getHeaderText()}} </label>\n                        </p>\n                        <div class=\"padview-body\">\n                            <div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n                                <div class=\"emergency-wrap\">\n                                    <div class=\"form-group emrgency-consult\" *ngIf=\"consultingPatient.type=='Emergency'\">\n                                        <p class=\"small\" id=\"translated_emergencyText\"><i> Emergency Consultation </i> </p>\n                                    </div>\n                                    <div class=\"form-group schdl\" *ngIf=\"checkOptionOfPad('Clinic_schedule')\">\n                                        <h5 class=\"color-blue\"> Schedule: </h5>\n                                        <div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\"> \n                                            <span><strong style=\"display:block; width:110px;\"> {{shift.day}}: </strong>\n                                                <span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\"> \n                                                    [\n                                                    <span *ngIf=\"time.fromTime.hour=='0'\">{{time.fromTime.hour}}0:</span>\n                                                    <span *ngIf=\"time.fromTime.hour!='0'\">{{time.fromTime.hour}}:</span>\n                                                    <span *ngIf=\"time.fromTime.minute=='0'\">{{time.fromTime.minute}}0 –</span>\n                                                    <span *ngIf=\"time.fromTime.minute!='0'\">{{time.fromTime.minute}} –</span>\n                                                    <span *ngIf=\"time.toTime.hour=='0'\">{{time.toTime.hour}}0:</span>\n                                                    <span *ngIf=\"time.toTime.hour!='0'\">{{time.toTime.hour}}:</span>\n                                                    <span *ngIf=\"time.toTime.minute=='0'\">{{time.toTime.minute}}0</span>\n                                                    <span *ngIf=\"time.toTime.minute!='0'\">{{time.toTime.minute}}</span>\n                                                    ]\n                                                </span>\n                                                <br>\n                                            </span>\n                                        </div>\n                                        <div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\"> \n                                            <span><strong> {{shift.day}}: </strong> Closed \n                                            </span>\n                                        </div>\n                                    </div>\n                                    <div id=\"translated_treatmentText\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n                                        <h5 class=\"color-blue\"> Available Treatments: </h5>\n                                        <ul style=\"padding-left:15px!important;\">\n                                            <li *ngFor=\"let treat of doctorData.expertise\">{{treat.value}}</li>\n                                        </ul>\n                                    </div>\n                                    <div *ngIf=\"doctorData.clinic_services_status=='Yes' && checkOptionOfPad('Available_services')\" id=\"translated_servicesText\">\n                                        <h5 class=\"color-blue\"> Available Services: </h5>\n                                        <ul style=\"padding-left:15px!important;\">\n                                            <li *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy\">Pharmacy</li>\n                                            <li *ngIf=\"doctorData.clinic_services.Clinic_IPD\">IPD</li>\n                                            <li *ngFor=\"let cs of doctorData.clinic_services.ClinicServicesDetail\"> {{cs}} </li>\n                                            <li *ngFor=\"let cs of doctorData.clinic_services.OtherClinicService\"> {{cs.value}} </li>\n                                        </ul>\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n                                <div class=\"padview-bodyright\">\n                                    <ul class=\"padview-body-header\">\n                                        <li>\n                                            <div class=\"text-underline\"> Prescription ID </div>\n                                            <div class=\"strong\" *ngIf=\"!consultingPatient.ID\"> {{getDay(day)}}{{getDay(numericMonth)}}{{year}}-{{consultingPatient.id}} </div>\n                                            <div class=\"strong\" *ngIf=\"consultingPatient.ID\"> {{getDay(day)}}{{getDay(numericMonth)}}{{year}}-{{consultingPatient.ID}} </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"text-underline\"> Name </div>\n                                            <div class=\"strong\"> {{consultingPatient.pateintName}} </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"text-underline\"> Age/Sex </div>\n                                            <div class=\"strong\"> {{consultingPatient.age}} {{consultingPatient.gender}} </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"text-underline\"> Weight </div>\n                                            <div class=\"strong\" *ngIf=\"consultingPatient.weight\"> {{consultingPatient.weight}} Kg </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"text-underline\"> Height </div>\n                                            <div class=\"strong\" *ngIf=\"consultingPatient.height\"> {{consultingPatient.height}} cm </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"strong\"> {{day}} {{month}} , {{year}}</div>\n                                        </li>\n                                    </ul>\n                                    <ul class=\"padview-patient\">\n                                        <li class=\"img-patient\">\n                                            <img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!consultingPatient.pateintPic\"/>\n                                            <img src=\"{{pateintPicPath}}{{consultingPatient.pateintPic}}\" class=\"img-responsive\" *ngIf=\"consultingPatient.pateintPic\"/>\n                                        </li>\n                                        <li *ngIf=\"preConditionComplete==true && finalPreConditions.length>0\">\n                                            <div class=\"pat-heading\"><span id=\"translated_PreCondHeading\"> Existing health status </span> </div>\n                                            <ul class=\"pat-type\">\n                                                <li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n                                            </ul>\n                                        </li>\n                                        <li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected.length>0\">\n                                            <div class=\"pat-heading\"><span id=\"translated_BIHeading\"> Body Indicators</span> </div>\n                                            <ul class=\"pat-type\">\n                                                <li *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n                                                </li>\n                                            </ul>\n                                        </li>\n                                        <li *ngIf=\"allergyComplete==true && finalAllergy.length>0\">\n                                            <div class=\"pat-heading\"><span id=\"translated_allergyHeading\"> Allergy</span> </div>\n                                            <ul class=\" pat-type\">\n                                                <li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n                                            </ul>\n                                        </li>\n                                    </ul>\n                                    <div class=\"middle-body\">\n                                        <div class=\"\">\n                                            <div class=\"number-div\" *ngIf=\"findingsComplete==true && findingsSelected.length>0\">\n                                                <div class=\"pat-heading\"><span id=\"translated_PTHeading\"> Patient's Complaints</span> </div>\n                                                <ul class=\"numberol\">\n                                                    <li *ngFor=\"let data of findingsSelected\"> {{data.value}} </li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected.length>0\">\n                                                <div class=\"pat-heading\"><span id=\"translated_sympHeading\"> Symptoms</span> </div>\n                                                <ul class=\"numberol\">\n                                                    <li *ngFor=\"let data of symptomsSelected\"> {{data.value}} </li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"number-div\" *ngIf=\"diagnosisComplete==true && diagnosisSelected.length>0\">\n                                                <div class=\"pat-heading\"><span id=\"translated_diagnosisHeading\"> Diagnosis</span> </div>\n                                                <ul class=\"numberol\">\n                                                    <li *ngFor=\"let data of diagnosisSelected\">{{data.value}}</li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                        <div class=\"\" *ngIf=\"medicationComplete==true\">\n                                            <div class=\"padview-medic\" id=\"translated_medication\">\n                                                <div class=\"pat-heading\"><span> Medicines</span> </div>\n                                                <ol style=\"padding-left:10px\">\n                                                    <li *ngFor=\"let data of tempMedicationArray\">\n                                                        <span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n                                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                        </span>\n                                                    </span>\n                                                    <span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n                                                        {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                        <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                    </span>\n                                                </span>\n                                                <span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n                                                    {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n                                                    <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                </span>\n                                            </span>\n                                            <span *ngIf=\"data.name=='Drops'\">\n                                                {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                            </span>\n                                        </span>\n                                    </li>\n                                </ol>\n                            </div>\n                            <div class=\"number-div vac-div\">\n                             <div *ngIf=\"vaccinationComplete==true\">\n                                <div class=\"pat-heading\" id=\"translated_VaccinationHeading\"> <span> Vaccination</span> </div>\n                                <ul *ngIf=\"currentVaccinationComplete == true\" class=\"medicationol\">\n                                    <div><b>Current</b></div>\n                                    <li *ngFor=\"let data of finalCurrentVaccinationArray\">{{data}}</li>\n                                </ul>\n                                <ul *ngIf=\"dueVaccinationComplete == true\" class=\"medicationol\">\n                                    <span *ngIf=\"finalDueVaccinationArray.length>0\"><strong>Due </strong>({{vaccinationDate.toString().substr(4,11)}})\n                                    </span>\n                                    <li *ngFor=\"let data of finalDueVaccinationArray\">{{data}}</li>\n                                </ul>\n                            </div>\n                            <div class=\"\" *ngIf=\"instructionsComplete==true && instructionsSelected.length>0\" id=\"translated_instHeading\">\n                                <div class=\"pat-heading\"> <span> Instructions</span> </div>\n                                <ul class=\"numberol\" start=\"1\">\n                                    <li *ngFor=\"let data of instructionsSelected\">{{data}}</li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"third-body\">\n                    <div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray.length\">\n                        <div class=\"pat-heading\"> <span id=\"translated_invHeading\"> Investigation</span> </div>\n                        <ol class=\"numberol pl10\">\n                            <li *ngFor=\"let data of investigationArray\">\n                                <span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n                                    <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n                                        <span *ngIf=\"i!=data.values.length-1\">\\</span>\n                                    </span>\n                                </span>\n                                <span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n                                    <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n                                </span>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"number-div\" *ngIf=\"treatmentComplete==true\" id=\"translated_OTHeading\">\n                        <div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n                        <ul class=\"numberol\">\n                            <li *ngFor=\"let data of treatmentArray;let i =index\">\n                                <span *ngIf=\"data.name=='Lifestyle Changes'\">\n                                    {{data.name}} - <span *ngFor=\"let value of data.lifestyle;let j = index\">{{value.value}} <span *ngIf=\"j!=data.lifestyle.length-1\">\\</span></span>\n                                </span>\n                                <span *ngIf=\"data.name=='Physiotherapy' || data.name=='Fomentation'\">\n                                    {{data.name}} - {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                                </span>\n                                <span *ngIf=\"data.name=='Plaster'\">\n                                    <span class=\"notranslate\">{{data.name}}</span> - on <span class=\"notranslate\">{{data.Injury_Area}}</span> of {{data.plaster_type}} for {{data.Duration}} days \n                                </span>\n                                <span *ngIf=\"data.name=='Gargle' || data.name=='Dressing' || data.name=='Bandage' || data.name=='Other'\">\n                                    <span *ngIf=\"data.name!='Other'\">{{data.name}} - </span>{{data.med_name[0].value}} {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                                </span>\n                                <span>\n                                    {{data.value}}\n                                </span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"note-box\">\n                    <div class=\"note-innerbox\">\n                        <div class=\"note-innerdiv\">\n                            <div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray.length>0\">\n                                <div class=\"pat-heading\"> <span id=\"translated_surgHeading\"> Recommended Surgery</span> </div>\n                                <ul class=\"numberol\">\n                                    <li *ngFor=\"let data of surgerySelectedArray\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n                                </ul>\n                            </div>\n                            <div class=\"number-div\" *ngIf=\"refer_status\" style=\"padding:0 30px;\">\n                                <div class=\"pat-heading\"> <span> Referred To</span> </div>\n                                <p> {{referDetail.doctor_name}} </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"\" *ngIf=\"eyePresComplete==true\">\n                        <div class=\"pat-heading\"> <span id=\"translated_eyeHeading\"> Eye Prescription</span> </div>\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-bordered table-striped cstm-table\">\n                                <thead>\n                                    <tr>\n                                        <th> Eye </th>\n                                        <th> Sphere </th>\n                                        <th> Cylinder </th>\n                                        <th> Axis </th>\n                                        <th> Add </th>\n                                        <th> PD (mm) </th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td> Right (OD): </td>\n                                        <td> {{finalRightOD.sphere}} </td>\n                                        <td> {{finalRightOD.cylinder}} </td>\n                                        <td> {{finalRightOD.axis}} </td>\n                                        <td> {{finalRightOD.add}} </td>\n                                        <td> {{finalRightOD.pd}} </td>\n                                    </tr>\n                                    <tr>\n                                        <td> Left (OS): </td>\n                                        <td> {{finalLeftOD.sphere}} </td>\n                                        <td> {{finalLeftOD.cylinder}} </td>\n                                        <td> {{finalLeftOD.axis}} </td>\n                                        <td> {{finalLeftOD.add}} </td>\n                                        <td> {{finalLeftOD.pd}} </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"third-body\">\n                    <div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n                        <div class=\"pat-heading\"> <span> Follow Up</span></div>\n                        <p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n                        <p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n                    </div>\n                </div>\n                <div class=\"forth-body\">\n                    <div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n                        <div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div>\n                    </div>\n                    <div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"padview-footer\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <div class=\"padview-powered\">\n                <div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n                <div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com </div>\n            </div>\n        </div>\n        <div class=\"col-md-12 col-sm-4 col-xs-12\" id=\"translated_footer\">\n            <div class=\"legal\">\n                <h3>{{getFooterText()}}</h3>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n\n<!-- ends -->\n\n<div class=\"modal fade cus-preview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div>\n                    <h4 class=\"modal-title\"> Preview </h4>\n                </div>\n                <div class=\"text-center\">\n                    <button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n                </div>\n                <div>\n                    <button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n                </div>\n            </div>\n            <div class=\"modal-body\" id=\"previewModalTranslated\">\n                <div class=\"row\">\n                    <div class=\"presc-modal-body\">\n                        <div class=\"pad-view\">\n                            <div class=\"padview-header\">\n                                <div class=\"pad-view-flx col-lg-4\">\n                                    <div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\">\n                                        <h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{doctorData.first_name}} </h1>\n                                    </div>\n                                    <div class=\"form-group qual\">\n                                        <p class=\"color-purple\">\n                                            <span *ngIf=\"checkOptionOfPad('Specialization')\">({{doctorData.specialization}})</span><br>\n                                            <span *ngIf=\"checkOptionOfPad('Qualifications')\">\n                                                <span *ngFor=\"let data of doctorData.qualification;let i = index\">\n                                                   {{data.value}} <span *ngIf=\"i!=doctorData.qualification.length-1\">,</span>\n                                               </span>\n                                           </span>\n                                       </p>\n                                       <p *ngIf=\"checkOptionOfPad('Experience')\">Experience - <span class=\"color-purple\">{{experience}} years</span> </p>\n                                       <p *ngIf=\"checkOptionOfPad('registration_no')\"> Registration: <span class=\"color-purple\"> {{doctorData.registration_no}} </span> </p>\n                                       <p *ngIf=\"checkOptionOfPad('Professional_affiliation')\">\n                                        <span class=\"color-purple\" *ngFor=\"let pa of doctorData.professional_affiliation;let i=index\">\n                                            {{pa.value}}<span *ngIf=\"i!=doctorData.professional_affiliation.length-1\">,</span>\n                                        </span>\n                                    </p>\n                                </div>\n                            </div>\n\n                            <div class=\"pad-view-flx col-lg-8\">\n                                <ul class=\"clinic-detail\">\n                                    <li class=\"clinic-name\" *ngIf=\"checkOptionOfPad('Clinic_name')\">\n                                        <h1 id=\"translated_clinicName\"> {{doctorData.clinic_details.clinic_name}} </h1>\n                                    </li>\n                                    <li *ngIf=\"checkOptionOfPad('Clinic_address')\">{{doctorData.clinic_details.address}}, {{doctorData.clinic_details.area}}, {{doctorData.clinic_details.city}}, {{doctorData.clinic_details.state}}</li>\n                                    <li class=\"li-cstm\">\n                                        <div class=\"row\" *ngIf=\"checkOptionOfPad('Appointment_contacts')\">\n                                            <div class=\"col-lg-12\">\n                                                <h4 class=\"for-apt\"> For appointments </h4>\n                                                <p *ngIf=\"doctorData.clinic_details.landline\"> Tel: {{doctorData.clinic_details.std_code}}-{{doctorData.clinic_details.landline}}</p>\n                                                <p> Mb: +91-{{doctorData.clinic_details.mobile}} </p>\n                                            </div>\n                                        </div>                                           \n                                    </li>\n                                </ul>\n                            </div>\n\n                        </div>\n                        <p class=\"text-center\" *ngIf=\"checkOptionOfPad('Header_note')\">\n                            <label [innerHTML]=\"getSafeContent(translated_appointmentText)\"></label>\n                        </p>\n                        <div class=\"padview-body\">\n                            <div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n                                <div class=\"emergency-wrap\">\n                                    <div class=\"form-group emrgency-consult\"*ngIf=\"consultingPatient.type=='Emergency'\">\n                                        <p class=\"small\" [innerHTML]=\"getSafeContent(translated_emergencyText)\"></p>\n                                    </div>\n                                    <div class=\"form-group schdl\" *ngIf=\"checkOptionOfPad('Clinic_schedule')\">\n                                        <h5 class=\" color-blue\"> Schedule: </h5>\n                                        <div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\"> \n                                            <span><strong style=\"display:block; width:110px;\"> {{shift.day}}: </strong>\n                                                <span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\"> \n                                                    [\n                                                    <span *ngIf=\"time.fromTime.hour=='0'\">{{time.fromTime.hour}}0:</span>\n                                                    <span *ngIf=\"time.fromTime.hour!='0'\">{{time.fromTime.hour}}:</span>\n                                                    <span *ngIf=\"time.fromTime.minute=='0'\">{{time.fromTime.minute}}0 –</span>\n                                                    <span *ngIf=\"time.fromTime.minute!='0'\">{{time.fromTime.minute}} –</span>\n                                                    <span *ngIf=\"time.toTime.hour=='0'\">{{time.toTime.hour}}0:</span>\n                                                    <span *ngIf=\"time.toTime.hour!='0'\">{{time.toTime.hour}}:</span>\n                                                    <span *ngIf=\"time.toTime.minute=='0'\">{{time.toTime.minute}}0</span>\n                                                    <span *ngIf=\"time.toTime.minute!='0'\">{{time.toTime.minute}}</span>\n                                                    ]\n                                                </span>\n                                                <br>\n                                            </span>\n                                        </div>\n                                        <div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\"> \n                                            <span><strong> {{shift.day}}: </strong> Closed \n                                            </span>\n                                        </div>\n                                    </div>\n                                    <div [innerHTML]=\"getSafeContent(translated_treatmentText)\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n                                    </div>\n                                    <div *ngIf=\"doctorData.clinic_services_status=='Yes' && checkOptionOfPad('Available_services')\" [innerHTML]=\"getSafeContent(translated_servicesText)\">\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n                                <div class=\"padview-bodyright\">\n                                    <ul class=\"padview-body-header\">\n                                        <li>\n                                            <div class=\"text-underline\"> Prescription ID </div>\n                                            <div class=\"strong\" *ngIf=\"!consultingPatient.ID\"> {{getDay(day)}}{{getDay(numericMonth)}}{{year}}-{{consultingPatient.id}} </div>\n                                            <div class=\"strong\" *ngIf=\"consultingPatient.ID\"> {{getDay(day)}}{{getDay(numericMonth)}}{{year}}-{{consultingPatient.ID}} </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"text-underline\"> Name </div>\n                                            <div class=\"strong\"> {{consultingPatient.pateintName}} </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"text-underline\"> Age/Sex </div>\n                                            <div class=\"strong\"> {{consultingPatient.age}} {{consultingPatient.gender}} </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"text-underline\"> Weight </div>\n                                            <div class=\"strong\" *ngIf=\"consultingPatient.weight\"> {{consultingPatient.weight}} Kg </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"text-underline\"> Height </div>\n                                            <div class=\"strong\" *ngIf=\"consultingPatient.height\"> {{consultingPatient.height}} cm </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"strong\"> {{day}} {{month}} , {{year}}</div>\n                                        </li>\n                                    </ul>\n                                    <ul class=\"padview-patient\">\n                                        <li class=\"img-patient\">\n                                            <img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!consultingPatient.pateintPic\"/>\n                                            <img src=\"{{pateintPicPath}}{{consultingPatient.pateintPic}}\" class=\"img-responsive\" *ngIf=\"consultingPatient.pateintPic\"/>\n                                        </li>\n                                        <li *ngIf=\"preConditionComplete==true && finalPreConditions.length>0\">\n                                            <div class=\"pat-heading\"><span [innerHTML]=\"getSafeContent(translated_PreCondHeading)\"> Existing health status </span> </div>\n                                            <ul class=\"pat-type\">\n                                                <li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n                                            </ul>\n                                        </li>\n                                        <li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected.length>0\">\n                                            <div class=\"pat-heading\"><span [innerHTML]=\"getSafeContent(translated_BIHeading)\"> Body Indicators</span> </div>\n                                            <ul class=\"pat-type\">\n                                                <li  *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n                                                </li>\n                                            </ul>\n                                        </li>\n                                        <li *ngIf=\"allergyComplete==true && finalAllergy.length>0\">\n                                            <div class=\"pat-heading\"><span [innerHTML]=\"getSafeContent(translated_allergyHeading)\"> Allergy</span> </div>\n                                            <ul class=\" pat-type\" style=\"padding-left:15px\">\n                                                <li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n                                            </ul>\n                                        </li>\n                                    </ul>\n                                    <div class=\"middle-body\">\n                                        <div class=\"\">\n                                            <div class=\"number-div\" *ngIf=\"findingsComplete==true && findingsSelected.length>0\">\n                                                <div class=\"pat-heading\"><span [innerHTML]=\"getSafeContent(translated_PTHeading)\"> Patient's Complaints</span> </div>\n                                                <ul class=\"numberol\">\n                                                    <li *ngFor=\"let data of findingsSelected\"> {{data.value}} </li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected.length>0\">\n                                                <div class=\"pat-heading\"><span [innerHTML]=\"getSafeContent(translated_sympHeading)\"> Symptoms</span> </div>\n                                                <ul class=\"numberol\">\n                                                    <li *ngFor=\"let data of symptomsSelected\"> {{data.value}} </li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"number-div\" *ngIf=\"diagnosisComplete==true && diagnosisSelected.length>0\">\n                                                <div class=\"pat-heading\"><span [innerHTML]=\"getSafeContent(translated_diagnosisHeading)\"> Diagnosis</span> </div>\n                                                <ul class=\"numberol\">\n                                                    <li *ngFor=\"let data of diagnosisSelected\">{{data.value}}</li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                        <div class=\"\" *ngIf=\"medicationComplete==true\">\n                                            <div class=\"padview-medic\" [innerHTML]=\"getSafeContent(translated_medication)\">\n                                                <div class=\"pat-heading\"><span> Medicines</span> </div>\n                                                <ol style=\"padding-left:10px\">\n                                                    <li *ngFor=\"let data of tempMedicationArray\">\n                                                        <span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n                                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                        </span>\n                                                    </span>\n                                                    <span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n                                                        {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                        <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                    </span>\n                                                </span>\n                                                <span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n                                                    {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n                                                    <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                </span>\n                                            </span>\n                                            <span *ngIf=\"data.name=='Drops'\">\n                                                {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                            </span>\n                                        </span>\n                                    </li>\n                                </ol>\n                            </div>\n                            <div class=\"number-div vac-div\">\n                                <div *ngIf=\"vaccinationComplete==true\">\n                                    <div class=\"pat-heading\" [innerHTML]=\"getSafeContent(translated_VaccinationHeading)\"> <span> Vaccination</span> </div>\n                                    <ul *ngIf=\"currentVaccinationComplete == true\" class=\"medicationol\">\n                                        <div><b>Current</b></div>\n                                        <li *ngFor=\"let data of finalCurrentVaccinationArray\">{{data}}</li>\n                                    </ul>\n                                    <ul *ngIf=\"dueVaccinationComplete == true\" class=\"medicationol\">\n                                        <span *ngIf=\"finalDueVaccinationArray.length>0\"><strong>Due </strong>({{vaccinationDate.toString().substr(4,11)}})\n                                        </span>\n                                        <li *ngFor=\"let data of finalDueVaccinationArray\">{{data}}</li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"instructionsComplete==true && instructionsSelected.length>0\" [innerHTML]=\"getSafeContent(translated_instHeading)\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"third-body\">\n                        <div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray.length\">\n                            <div class=\"pat-heading\"> <span [innerHTML]=\"getSafeContent(translated_invHeading)\"> Investigation</span> </div>\n                            <ol class=\"numberol pl10\">\n                                <li *ngFor=\"let data of investigationArray\">\n                                    <span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n                                        <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n                                            <span *ngIf=\"i!=data.values.length-1\">\\</span>\n                                        </span>\n                                    </span>\n                                    <span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n                                        <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n                                    </span>\n                                </li>\n                            </ol>\n                        </div>\n                        <div class=\"number-div\" *ngIf=\"treatmentComplete==true\"  [innerHTML]=\"getSafeContent(translated_OTHeading)\"></div>\n                    </div>\n                    <div class=\"note-box\">\n                        <div class=\"note-innerbox\">\n                            <div class=\"note-innerdiv\">\n                                <div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray.length>0\">\n                                    <div class=\"pat-heading\"> <span  [innerHTML]=\"getSafeContent(translated_surgHeading)\"> Recommended Surgery</span> </div>\n                                    <ul class=\"numberol\">\n                                        <li *ngFor=\"let data of surgerySelectedArray\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n                                    </ul>\n                                </div>\n                                <div class=\"number-div\" *ngIf=\"refer_status\" style=\"padding:0 30px;\">\n                                    <div class=\"pat-heading\"> <span> Referred To</span> </div>\n                                    <p> {{referDetail.doctor_name}} </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"\" *ngIf=\"eyePresComplete==true\">\n                            <div class=\"pat-heading\"> <span [innerHTML]=\"getSafeContent(translated_eyeHeading)\"> Eye Prescription</span> </div>\n                            <div class=\"table-responsive\">\n                                <table class=\"table table-bordered table-striped cstm-table\">\n                                    <thead>\n                                        <tr>\n                                            <th> Eye </th>\n                                            <th> Sphere </th>\n                                            <th> Cylinder </th>\n                                            <th> Axis </th>\n                                            <th> Add </th>\n                                            <th> PD (mm) </th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td> Right (OD): </td>\n                                            <td> {{finalRightOD.sphere}} </td>\n                                            <td> {{finalRightOD.cylinder}} </td>\n                                            <td> {{finalRightOD.axis}} </td>\n                                            <td> {{finalRightOD.add}} </td>\n                                            <td> {{finalRightOD.pd}} </td>\n                                        </tr>\n                                        <tr>\n                                            <td> Left (OS): </td>\n                                            <td> {{finalLeftOD.sphere}} </td>\n                                            <td> {{finalLeftOD.cylinder}} </td>\n                                            <td> {{finalLeftOD.axis}} </td>\n                                            <td> {{finalLeftOD.add}} </td>\n                                            <td> {{finalLeftOD.pd}} </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"third-body\">\n                        <div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n                            <div class=\"pat-heading\"> <span> Follow-Up</span></div>\n                            <p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n                            <p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n                        </div>\n                    </div>\n                    <div class=\"forth-body\">\n                        <div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n                            <div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div>\n                        </div>\n                        <div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"padview-footer\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"padview-powered\">\n                    <div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n                    <div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com</div>\n                </div>\n            </div>\n            <div class=\"col-md-12 col-sm-4 col-xs-12\" [innerHTML]=\"getSafeContent(translated_footer)\"></div>\n        </div>\n    </div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n\n<div class=\"modal fade cus-preview\" id=\"translated_div\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content show-default\">\n            <div class=\"modal-header\">\n                <div>\n                    <h4 class=\"modal-title\"> Preview </h4>\n                </div>\n                <div class=\"text-center\">\n                    <button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n                </div>\n                <div>\n                    <button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"presc-modal-body\">\n                        <div class=\"pad-view\">\n                            <div class=\"padview-header\">\n                                <div class=\"pad-view-flx col-lg-4\">\n                                    <div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\">\n                                        <h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{doctorData.first_name}} </h1>\n                                    </div>\n                                    <div class=\"form-group qual\">\n                                        <p class=\"color-purple\">\n                                            <span *ngIf=\"checkOptionOfPad('Specialization')\">({{doctorData.specialization}})</span><br>\n                                            <span *ngIf=\"checkOptionOfPad('Qualifications')\">\n                                                <span *ngFor=\"let data of doctorData.qualification;let i = index\">\n                                                   {{data.value}} <span *ngIf=\"i!=doctorData.qualification.length-1\">,</span>\n                                               </span>\n                                           </span>\n                                       </p>\n                                       <p *ngIf=\"checkOptionOfPad('Experience')\">Experience - <span class=\"color-purple\">{{experience}} years</span> </p>\n                                       <p *ngIf=\"checkOptionOfPad('registration_no')\"> Registration: <span class=\"color-purple\"> {{doctorData.registration_no}} </span> </p>\n                                       <p *ngIf=\"checkOptionOfPad('Professional_affiliation')\">\n                                        <span class=\"color-purple\" *ngFor=\"let pa of doctorData.professional_affiliation;let i=index\">\n                                            {{pa.value}}<span *ngIf=\"i!=doctorData.professional_affiliation.length-1\">,</span>\n                                        </span>\n                                    </p>\n                                </div>\n                            </div>\n\n                            <div class=\"pad-view-flx col-lg-8\">\n                                <ul class=\"clinic-detail\">\n                                    <li class=\"clinic-name\" *ngIf=\"checkOptionOfPad('Clinic_name')\">\n                                        <h1 id=\"translated_clinicName\"> {{doctorData.clinic_details.clinic_name}} </h1>\n                                    </li>\n                                    <li *ngIf=\"checkOptionOfPad('Clinic_address')\">{{doctorData.clinic_details.address}}, {{doctorData.clinic_details.area}}, {{doctorData.clinic_details.city}}, {{doctorData.clinic_details.state}}</li>\n                                    <li class=\"li-cstm\">\n                                        <div class=\"row\" *ngIf=\"checkOptionOfPad('Appointment_contacts')\">\n                                            <div class=\"col-lg-12\">\n                                                <h4 class=\"for-apt\"> For appointments </h4>\n                                                <p *ngIf=\"doctorData.clinic_details.landline\"> Tel: {{doctorData.clinic_details.std_code}}-{{doctorData.clinic_details.landline}}</p>\n                                                <p> Mb: +91-{{doctorData.clinic_details.mobile}} </p>\n                                            </div>\n                                        </div>                                           \n                                    </li>\n                                </ul>\n                            </div>\n\n                        </div>\n                        <p class=\"text-center\" *ngIf=\"checkOptionOfPad('Header_note')\">\n                            <label [innerHTML]=\"getSafeContent(translated_appointmentText)\"></label>\n                        </p>\n                        <div class=\"padview-body\">\n                            <div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n                                <div class=\"emergency-wrap\">\n                                    <div class=\"form-group emrgency-consult\"*ngIf=\"consultingPatient.type=='Emergency'\">\n                                        <p class=\"small\" [innerHTML]=\"getSafeContent(translated_emergencyText)\"></p>\n                                    </div>\n                                    <div class=\"form-group schdl\" *ngIf=\"checkOptionOfPad('Clinic_schedule')\">\n                                        <h5 class=\" color-blue\"> Schedule: </h5>\n                                        <div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\"> \n                                            <span><strong style=\"display:block; width: 110px;\"> {{shift.day}}: </strong>\n                                                <span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\"> \n                                                    [\n                                                    <span *ngIf=\"time.fromTime.hour=='0'\">{{time.fromTime.hour}}0:</span>\n                                                    <span *ngIf=\"time.fromTime.hour!='0'\">{{time.fromTime.hour}}:</span>\n                                                    <span *ngIf=\"time.fromTime.minute=='0'\">{{time.fromTime.minute}}0 –</span>\n                                                    <span *ngIf=\"time.fromTime.minute!='0'\">{{time.fromTime.minute}} –</span>\n                                                    <span *ngIf=\"time.toTime.hour=='0'\">{{time.toTime.hour}}0:</span>\n                                                    <span *ngIf=\"time.toTime.hour!='0'\">{{time.toTime.hour}}:</span>\n                                                    <span *ngIf=\"time.toTime.minute=='0'\">{{time.toTime.minute}}0</span>\n                                                    <span *ngIf=\"time.toTime.minute!='0'\">{{time.toTime.minute}}</span>\n                                                    ]\n                                                </span>\n                                                <br>\n                                            </span>\n                                        </div>\n                                        <div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\"> \n                                            <span><strong> {{shift.day}}: </strong> Closed \n                                            </span>\n                                        </div>\n                                    </div>\n                                    <div [innerHTML]=\"getSafeContent(translated_treatmentText)\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n                                    </div>\n                                    <div *ngIf=\"doctorData.clinic_services_status=='Yes' && checkOptionOfPad('Available_services')\" [innerHTML]=\"getSafeContent(translated_servicesText)\">\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n                                <div class=\"padview-bodyright\">\n                                    <ul class=\"padview-body-header\">\n                                        <li>\n                                            <div class=\"text-underline\"> Prescription ID </div>\n                                            <div class=\"strong\" *ngIf=\"!consultingPatient.ID\"> {{getDay(day)}}{{getDay(numericMonth)}}{{year}}-{{consultingPatient.id}} </div>\n                                            <div class=\"strong\" *ngIf=\"consultingPatient.ID\"> {{getDay(day)}}{{getDay(numericMonth)}}{{year}}-{{consultingPatient.ID}} </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"text-underline\"> Name </div>\n                                            <div class=\"strong\"> {{consultingPatient.pateintName}} </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"text-underline\"> Age/Sex </div>\n                                            <div class=\"strong\"> {{consultingPatient.age}} {{consultingPatient.gender}} </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"text-underline\"> Weight </div>\n                                            <div class=\"strong\" *ngIf=\"consultingPatient.weight\"> {{consultingPatient.weight}} Kg </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"text-underline\"> Height </div>\n                                            <div class=\"strong\" *ngIf=\"consultingPatient.height\"> {{consultingPatient.height}} cm </div>\n                                        </li>\n                                        <li>\n                                            <div class=\"strong\"> {{day}} {{month}} , {{year}}</div>\n                                        </li>\n                                    </ul>\n                                    <ul class=\"padview-patient\">\n                                        <li class=\"img-patient\">\n                                            <img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!consultingPatient.pateintPic\"/>\n                                            <img src=\"{{pateintPicPath}}{{consultingPatient.pateintPic}}\" class=\"img-responsive\" *ngIf=\"consultingPatient.pateintPic\"/>\n                                        </li>\n                                        <li *ngIf=\"preConditionComplete==true && finalPreConditions.length>0\">\n                                            <div class=\"pat-heading\"><span [innerHTML]=\"getSafeContent(translated_PreCondHeading)\"> Existing health status </span> </div>\n                                            <ul class=\"pat-type\">\n                                                <li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n                                            </ul>\n                                        </li>\n                                        <li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected.length>0\">\n                                            <div class=\"pat-heading\"><span [innerHTML]=\"getSafeContent(translated_BIHeading)\"> Body Indicators</span> </div>\n                                            <ul class=\"pat-type\">\n                                                <li  *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n                                                </li>\n                                            </ul>\n                                        </li>\n                                        <li *ngIf=\"allergyComplete==true && finalAllergy.length>0\">\n                                            <div class=\"pat-heading\"><span [innerHTML]=\"getSafeContent(translated_allergyHeading)\"> Allergy</span> </div>\n                                            <ul class=\" pat-type\" style=\"padding-left:15px\">\n                                                <li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n                                            </ul>\n                                        </li>\n                                    </ul>\n                                    <div class=\"middle-body\">\n                                        <div class=\"\">\n                                            <div class=\"number-div\" *ngIf=\"findingsComplete==true && findingsSelected.length>0\">\n                                                <div class=\"pat-heading\"><span [innerHTML]=\"getSafeContent(translated_PTHeading)\"> Patient's Complaints</span> </div>\n                                                <ul class=\"numberol\">\n                                                    <li *ngFor=\"let data of findingsSelected\"> {{data.value}} </li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected.length>0\">\n                                                <div class=\"pat-heading\"><span [innerHTML]=\"getSafeContent(translated_sympHeading)\"> Symptoms</span> </div>\n                                                <ul class=\"numberol\">\n                                                    <li *ngFor=\"let data of symptomsSelected\"> {{data.value}} </li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"number-div\" *ngIf=\"diagnosisComplete==true && diagnosisSelected.length>0\">\n                                                <div class=\"pat-heading\"><span [innerHTML]=\"getSafeContent(translated_diagnosisHeading)\"> Diagnosis</span> </div>\n                                                <ul class=\"numberol\">\n                                                    <li *ngFor=\"let data of diagnosisSelected\">{{data.value}}</li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                        <div class=\"\" *ngIf=\"medicationComplete==true\">\n                                            <div class=\"padview-medic\" [innerHTML]=\"getSafeContent(translated_medication)\">\n                                                <div class=\"pat-heading\"><span> Medicines</span> </div>\n                                                <ol style=\"padding-left:10px\">\n                                                    <li *ngFor=\"let data of tempMedicationArray\">\n                                                        <span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n                                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                        </span>\n                                                    </span>\n                                                    <span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n                                                        {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                        <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                    </span>\n                                                </span>\n                                                <span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n                                                    {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n                                                    <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                </span>\n                                            </span>\n                                            <span *ngIf=\"data.name=='Drops'\">\n                                                {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                            </span>\n                                        </span>\n                                    </li>\n                                </ol>\n                            </div>\n                            <div class=\"number-div vac-div\">\n                                <div *ngIf=\"vaccinationComplete==true\">\n                                    <div class=\"pat-heading\" [innerHTML]=\"getSafeContent(translated_VaccinationHeading)\"> <span> Vaccination</span> </div>\n                                    <ul *ngIf=\"currentVaccinationComplete == true\" class=\"medicationol\">\n                                        <div><b>Current</b></div>\n                                        <li *ngFor=\"let data of finalCurrentVaccinationArray\">{{data}}</li>\n                                    </ul>\n                                    <ul *ngIf=\"dueVaccinationComplete == true\" class=\"medicationol\">\n                                        <span *ngIf=\"finalDueVaccinationArray.length>0\"><strong>Due </strong>({{vaccinationDate.toString().substr(4,11)}})\n                                        </span>\n                                        <li *ngFor=\"let data of finalDueVaccinationArray\">{{data}}</li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"instructionsComplete==true && instructionsSelected.length>0\" [innerHTML]=\"getSafeContent(translated_instHeading)\"></div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"third-body\">\n                        <div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray.length\">\n                            <div class=\"pat-heading\"> <span [innerHTML]=\"getSafeContent(translated_invHeading)\"> Investigation</span> </div>\n                            <ol class=\"numberol pl10\">\n                                <li *ngFor=\"let data of investigationArray\">\n                                    <span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n                                        <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n                                            <span *ngIf=\"i!=data.values.length-1\">\\</span>\n                                        </span>\n                                    </span>\n                                    <span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n                                        <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n                                    </span>\n                                </li>\n                            </ol>\n                        </div>\n                        <div class=\"number-div\" *ngIf=\"treatmentComplete==true\"  [innerHTML]=\"getSafeContent(translated_OTHeading)\"></div>\n                    </div>\n                    <div class=\"note-box\">\n                        <div class=\"note-innerbox\">\n                            <div class=\"note-innerdiv\">\n                                <div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray.length>0\">\n                                    <div class=\"pat-heading\"> <span  [innerHTML]=\"getSafeContent(translated_surgHeading)\"> Recommended Surgery</span> </div>\n                                    <ul class=\"numberol\">\n                                        <li *ngFor=\"let data of surgerySelectedArray\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n                                    </ul>\n                                </div>\n                                <div class=\"number-div\" *ngIf=\"refer_status\" style=\"padding:0 30px;\">\n                                    <div class=\"pat-heading\"> <span> Referred To</span> </div>\n                                    <p> {{referDetail.doctor_name}} </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"\" *ngIf=\"eyePresComplete==true\">\n                            <div class=\"pat-heading\"> <span [innerHTML]=\"getSafeContent(translated_eyeHeading)\"> Eye Prescription</span> </div>\n                            <div class=\"table-responsive\">\n                                <table class=\"table table-bordered table-striped cstm-table\">\n                                    <thead>\n                                        <tr>\n                                            <th> Eye </th>\n                                            <th> Sphere </th>\n                                            <th> Cylinder </th>\n                                            <th> Axis </th>\n                                            <th> Add </th>\n                                            <th> PD (mm) </th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td> Right (OD): </td>\n                                            <td> {{finalRightOD.sphere}} </td>\n                                            <td> {{finalRightOD.cylinder}} </td>\n                                            <td> {{finalRightOD.axis}} </td>\n                                            <td> {{finalRightOD.add}} </td>\n                                            <td> {{finalRightOD.pd}} </td>\n                                        </tr>\n                                        <tr>\n                                            <td> Left (OS): </td>\n                                            <td> {{finalLeftOD.sphere}} </td>\n                                            <td> {{finalLeftOD.cylinder}} </td>\n                                            <td> {{finalLeftOD.axis}} </td>\n                                            <td> {{finalLeftOD.add}} </td>\n                                            <td> {{finalLeftOD.pd}} </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"third-body\">\n                        <div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n                            <div class=\"pat-heading\"> <span> Follow-Up</span></div>\n                            <p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n                            <p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n                        </div>\n                    </div>\n                    <div class=\"forth-body\">\n                        <div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n                            <div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div>\n                        </div>\n                        <div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"padview-footer\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"padview-powered\">\n                    <div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n                    <div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com</div>\n                </div>\n            </div>\n            <div class=\"col-md-12 col-sm-4 col-xs-12\" [innerHTML]=\"getSafeContent(translated_footer)\"></div>\n        </div>\n    </div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n<!-- History Modal -->\n<div class=\"modal fade cus-preview\" id=\"historyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\" *ngIf=\"consultingPatient.lastVisit.status\">\n        <div class=\"modal-content show-default\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"pull-right btn-sm btn btn-custom\"  (click)=\"importFromHistory()\" *ngIf=\"!consultingPatient.lastVisit.data.webcam_pic\"> Import </button>\n                <button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n                <h4 class=\"modal-title\"> Previous Prescription </h4>\n            </div>\n            <div class=\"modal-body\" *ngIf=\"!consultingPatient.lastVisit.data.webcam_pic\">\n                <div class=\"row\">\n                    <div class=\"presc-modal-body\">\n                        <div class=\"pad-view\">\n                            <div class=\"padview-body\">\n                                <div class=\"col-md-12 col-sm-12 col-xs-12 p-0\" style=\"font-size: 10px;\">\n                                    <div class=\"padview-bodyright historyprescription\">\n                                        <ul class=\"padview-body-header\">\n                                            <li>\n                                                <div class=\"text-underline\"> Prescription ID </div>\n                                                <div class=\"strong\"> {{day_history}}{{numericMonth_history}}{{year_history}}-{{consultingPatient.lastVisit.data.registration.ID}} </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"> Name </div>\n                                                <div class=\"strong\"> {{consultingPatient.lastVisit.data.registration.pateintName}} </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"> Age/Sex </div>\n                                                <div class=\"strong\"> {{consultingPatient.lastVisit.data.registration.age}} {{consultingPatient.lastVisit.data.registration.gender}} </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"> Weight </div>\n                                                <div class=\"strong\" *ngIf=\"consultingPatient.lastVisit.data.registration.weight\"> {{consultingPatient.lastVisit.data.registration.weight}} Kg </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"> Height </div>\n                                                <div class=\"strong\" *ngIf=\"consultingPatient.lastVisit.data.registration.height\"> {{consultingPatient.lastVisit.data.registration.height}} cm </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"strong\"> {{day_history}} {{month_history}} , {{year_history}}</div>\n                                            </li>\n                                        </ul>\n                                        <ul class=\"padview-patient\">\n                                            <li class=\"img-patient\">\n                                                <img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!consultingPatient.lastVisit.data.registration.pateintPic\"/>\n                                                <img src=\"{{pateintPicPath}}{{consultingPatient.lastVisit.data.registration.pateintPic}}\" class=\"img-responsive\" *ngIf=\"consultingPatient.lastVisit.data.registration.pateintPic\"/>\n                                            </li>\n                                            <li *ngIf=\"preConditionComplete_history==true && finalPreConditions_history.length>0\">\n                                                <div class=\"pat-heading\"><span> Existing health status </span> </div>\n                                                <ul class=\"pat-type\">\n                                                    <li *ngFor=\"let data of finalPreConditions_history\"> {{data}} </li>\n                                                </ul>\n                                            </li>\n                                            <li *ngIf=\"bodyIndicatorComplete_history==true && bodyIndicatorSelected_history.length>0\">\n                                                <div class=\"pat-heading\"><span> Body Indicators</span> </div>\n                                                <ul class=\"pat-type\">\n                                                    <li *ngFor=\"let data of bodyIndicatorSelected_history\"> {{data}}\n                                                    </li>\n                                                </ul>\n                                            </li>\n                                            <li *ngIf=\"allergyComplete_history==true && finalAllergy_history.length>0\">\n                                                <div class=\"pat-heading\"><span> Allergy</span> </div>\n                                                <ul class=\" pat-type\">\n                                                    <li *ngFor=\"let data of finalAllergy_history\"> {{data}} </li>\n                                                </ul>\n                                            </li>\n                                        </ul>\n                                        <div class=\"middle-body\">\n                                            <div class=\"\">\n                                                <div class=\"number-div\" *ngIf=\"findingsComplete_history==true && findingsSelected_history.length>0\">\n                                                    <div class=\"pat-heading\"><span> Patient's Complaints</span> </div>\n                                                    <ul class=\"numberol\">\n                                                        <li *ngFor=\"let data of findingsSelected_history\"> {{data.value}} </li>\n                                                    </ul>\n                                                </div>\n                                                <div class=\"number-div\" *ngIf=\"symptomsComplete_history==true && symptomsSelected_history.length>0\">\n                                                    <div class=\"pat-heading\"><span> Symptoms</span> </div>\n                                                    <ul class=\"numberol\">\n                                                        <li *ngFor=\"let data of symptomsSelected_history\"> {{data.value}} </li>\n                                                    </ul>\n                                                </div>\n                                                <div class=\"number-div\" *ngIf=\"diagnosisComplete_history==true && diagnosisSelected_history.length>0\">\n                                                    <div class=\"pat-heading\"><span> Diagnosis</span> </div>\n                                                    <ul class=\"numberol\">\n                                                        <li *ngFor=\"let data of diagnosisSelected_history\">{{data.value}}</li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                            <div class=\"\" *ngIf=\"medicationComplete_history==true\">\n                                                <div class=\"padview-medic\">\n                                                    <div class=\"pat-heading\"><span> Medicines</span> </div>\n                                                    <ol style=\"padding-left:10px\">\n                                                        <li *ngFor=\"let data of tempMedicationArray_history\">\n                                                            <span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n                                                                {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                                <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                            </span>\n                                                        </span>\n                                                        <span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n                                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                        </span>\n                                                    </span>\n                                                    <span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n                                                        {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n                                                        <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                    </span>\n                                                </span>\n                                                <span *ngIf=\"data.name=='Drops'\">\n                                                    {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                    <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                </span>\n                                            </span>\n                                        </li>\n                                    </ol>\n                                </div>\n                                <div class=\"number-div vac-div\">\n                                 <div *ngIf=\"vaccinationComplete_history==true\">\n                                    <div class=\"pat-heading\"> <span> Vaccination</span> </div>\n                                    <ul *ngIf=\"currentVaccinationComplete_history == true\" class=\"medicationol\">\n                                        <div><b>Current</b></div>\n                                        <li *ngFor=\"let data of finalCurrentVaccinationArray_history\">{{data}}</li>\n                                    </ul>\n                                    <ul *ngIf=\"dueVaccinationComplete_history == true\" class=\"medicationol\">\n                                        <span *ngIf=\"finalDueVaccinationArray_history.length>0\"><strong>Due </strong>({{vaccinationDate_history.toString().substr(4,11)}})\n                                        </span>\n                                        <li *ngFor=\"let data of finalDueVaccinationArray_history\">{{data}}</li>\n                                    </ul>\n                                </div>\n                                <div class=\"\" *ngIf=\"instructionsComplete_history==true && instructionsSelected_history.length>0\">\n                                    <div class=\"pat-heading\"> <span> Instructions</span> </div>\n                                    <ul class=\"numberol\" start=\"1\">\n                                        <li *ngFor=\"let data of instructionsSelected_history\">{{data}}</li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"third-body\">\n                        <div class=\"number-div\" *ngIf=\"investigationIndicatorComplete_history==true && investigationArray_history.length\">\n                            <div class=\"pat-heading\"> <span> Investigation</span> </div>\n                            <ol class=\"numberol pl10\">\n                                <li *ngFor=\"let data of investigationArray_history\">\n                                    <span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n                                        <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n                                            <span *ngIf=\"i!=data.values.length-1\">\\</span>\n                                        </span>\n                                    </span>\n                                    <span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n                                        <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n                                    </span>\n                                </li>\n                            </ol>\n                        </div>\n                        <div class=\"number-div\" *ngIf=\"treatmentComplete_history==true\">\n                            <div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n                            <ul class=\"numberol\">\n                                <li *ngFor=\"let data of treatmentArray_history;let i =index\">\n                                    <span *ngIf=\"data.name=='Lifestyle Changes'\">\n                                        {{data.name}} - <span *ngFor=\"let value of data.lifestyle;let j = index\">{{value.value}} <span *ngIf=\"j!=data.lifestyle.length-1\">\\</span></span>\n                                    </span>\n                                    <span *ngIf=\"data.name=='Physiotherapy' || data.name=='Fomentation'\">\n                                        {{data.name}} - {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                                    </span>\n                                    <span *ngIf=\"data.name=='Plaster'\">\n                                        <span class=\"notranslate\">{{data.name}}</span> - on <span class=\"notranslate\">{{data.Injury_Area}}</span> of {{data.plaster_type}} for {{data.Duration}} days \n                                    </span>\n                                    <span *ngIf=\"data.name=='Gargle' || data.name=='Dressing' || data.name=='Bandage' || data.name=='Other'\">\n                                        <span *ngIf=\"data.name!='Other'\">{{data.name}} - </span>{{data.med_name[0].value}} {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                                    </span>\n                                    <span>\n                                        {{data.value}}\n                                    </span>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"note-box\">\n                        <div class=\"note-innerbox\">\n                            <div class=\"note-innerdiv\">\n                                <div class=\"number-div\" *ngIf=\"surgeryComplete_history==true && surgerySelectedArray_history.length>0\">\n                                    <div class=\"pat-heading\"> <span> Recommended Surgery</span> </div>\n                                    <ul class=\"numberol\">\n                                        <li *ngFor=\"let data of surgerySelectedArray_history\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n                                    </ul>\n                                </div>\n                                <div class=\"number-div\" *ngIf=\"refer_status\" style=\"padding:0 30px;\">\n                                    <div class=\"pat-heading\"> <span> Referred To</span> </div>\n                                    <p> {{referDetail.doctor_name}} </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"\" *ngIf=\"eyePresComplete_history==true\">\n                            <div class=\"pat-heading\"> <span> Eye Prescription</span> </div>\n                            <div class=\"table-responsive\">\n                                <table class=\"table table-bordered table-striped cstm-table\">\n                                    <thead>\n                                        <tr>\n                                            <th> Eye </th>\n                                            <th> Sphere </th>\n                                            <th> Cylinder </th>\n                                            <th> Axis </th>\n                                            <th> Add </th>\n                                            <th> PD (mm) </th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td> Right (OD): </td>\n                                            <td> {{finalRightOD_history.sphere}} </td>\n                                            <td> {{finalRightOD_history.cylinder}} </td>\n                                            <td> {{finalRightOD_history.axis}} </td>\n                                            <td> {{finalRightOD_history.add}} </td>\n                                            <td> {{finalRightOD_history.pd}} </td>\n                                        </tr>\n                                        <tr>\n                                            <td> Left (OS): </td>\n                                            <td> {{finalLeftOD_history.sphere}} </td>\n                                            <td> {{finalLeftOD_history.cylinder}} </td>\n                                            <td> {{finalLeftOD_history.axis}} </td>\n                                            <td> {{finalLeftOD_history.add}} </td>\n                                            <td> {{finalLeftOD_history.pd}} </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n</div>\n<div class=\"modal-body\" *ngIf=\"consultingPatient.lastVisit.data.webcam_pic\">\n    <div class=\"camera-div text-center\">\n        <img src=\"{{uploadedPrescriptionPath}}{{consultingPatient.lastVisit.data.image}}\">\n    </div>\n</div>\n</div>\n</div>\n</div>\n<!-- Test Report Modal -->\n<div class=\"modal fade cus-preview\" id=\"Test-report-Modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content modal-lg\">\n            <div class=\"modal-header\">\n                <!-- <button type=\"button\" class=\"pull-right btn-sm btn btn-custom\" > Print </button> -->\n                <button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n                <h4 class=\"modal-title\"> Test Report </h4>\n            </div>\n            <div class=\"modal-body\" *ngIf=\"consultingPatient.reportPics && consultingPatient.reportPics.length>0\">\n                <div class=\"row\">\n                    <div class=\"wrap\">\n                        <div class=\"presc-modal-body\">\n                            <div *ngFor=\"let report of consultingPatient.reportPics\" class=\"reportImg\">\n                                <img src=\"{{reportPic}}{{report}}\" class=\"img-responsive\"/>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Saved presets modal -->\n<div class=\"modal fade cus-modal reverse-animate\" id=\"savedPreset\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Saved Prescription Presets </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"savedpreset-modal-body wrap-div\">\n                        <ul class=\"name-ul\">\n                            <li [ngClass]=\"data.status ? 'active' : ''\" *ngFor=\"let data of savedPrescriptionPadArray\" (click)=\"GetPrescriptionPadDetail(data.id)\"> {{data.name}}</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"applyPrescriptionPreset()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Add presets modal -->\n<div class=\"modal fade cus-modal reverse-animate\" id=\"addPreset\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Add to prescription Presets </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"addpreset-modal-body wrap-div\">\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <input type=\"text\" name=\"\" class=\"form-control txtfield\" placeholder=\"Enter Name of preset\" [(ngModel)]=\"presentNamePrescPad\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveWholePrescriptionPad()\"> Save </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Language modal -->\n<div class=\"modal fade cus-modal reverse-animate\" id=\"select-language-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Select Language </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"addpreset-modal-body wrap-div\">\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <div class=\"select-style\">\n                                <select class=\"form-control txtfield\" [(ngModel)]='languageOption'>\n                                    <option value=\"\" selected=\"\"> English </option>\n                                    <option value=\"hi\">Hindi</option>\n                                    <option value=\"pa\">Punjabi</option>\n                                    <option value=\"bn\">Bengali</option>\n                                    <option value=\"gu\">Gujarati</option>\n                                    <option value=\"kn\">Kannada</option>\n                                    <option value=\"ml\">Malayalam</option>\n                                    <option value=\"mr\">Marathi</option>\n                                    <option value=\"ta\">Tamil</option>\n                                    <option value=\"te\">Telugu</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" data-dismiss=\"modal\" type=\"button\" (click)=\"languageSave()\"> Save </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Combined modal (Injection)-->\n<div class=\"modal fade combined_modal\" id=\"combinedModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\" *ngIf=\"currentFrequency && currentFrequency.med_name\"> {{currentFrequency.med_name[0].value}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"combined_flex\">\n                            <div class=\"frquency_cmbnd\">\n                                <h3 class=\"combined_heading\"> Frequency </h3>\n                                <ul class=\"combined_frequency\">\n                                    <li class=\"{{getFrequencyClass('Once a day')}}\" (click)=\"selectFrequency('Once a day')\"> Once a day </li>\n                                    <li class=\"{{getFrequencyClass('Twice a day')}}\" (click)=\"selectFrequency('Twice a day')\"> Twice a day </li>\n                                    <li class=\"{{getFrequencyClass('Thrice a day')}}\" (click)=\"selectFrequency('Thrice a day')\"> Thrice a day </li>\n                                    <li class=\"{{getFrequencyClass('Four times a day')}}\" (click)=\"selectFrequency('Four times a day')\"> Four times a day </li>\n                                    <li class=\"{{getFrequencyClass('Every Morning')}}\" (click)=\"selectFrequency('Every Morning')\"> Every Morning </li>\n                                    <li class=\"{{getFrequencyClass('Every Night')}}\" (click)=\"selectFrequency('Every Night')\"> Every Night </li>\n                                    <li class=\"{{getFrequencyClass('Once a week')}}\" (click)=\"selectFrequency('Once a week')\"> Once a week </li>\n                                    <li class=\"{{getFrequencyClass('Once a month')}}\" (click)=\"selectFrequency('Once a month')\"> Once a month </li>\n                                    <li class=\"{{getFrequencyClass('Once in two week')}}\" (click)=\"selectFrequency('Once in two week')\"> Once in two week </li>\n                                    <li class=\"{{getFrequencyClass('Every 1 hour')}}\" (click)=\"selectFrequency('Every 1 hour')\"> Every 1 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 2 hour')}}\" (click)=\"selectFrequency('Every 2 hour')\"> Every 2 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 3 hour')}}\" (click)=\"selectFrequency('Every 3 hour')\"> Every 3 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 4 hour')}}\" (click)=\"selectFrequency('Every 4 hour')\"> Every 4 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 5 hour')}}\" (click)=\"selectFrequency('Every 5 hour')\"> Every 5 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 6 hour')}}\" (click)=\"selectFrequency('Every 6 hour')\"> Every 6 hour </li>\n                                    <li class=\"{{getFrequencyClass('Alternate day')}}\" (click)=\"selectFrequency('Alternate day')\"> Alternate day </li>\n                                    <li class=\"{{getFrequencyClass('At bed time')}}\" (click)=\"selectFrequency('At bed time')\"> At bed time </li>\n                                    <li class=\"{{getFrequencyClass('SoS')}}\" (click)=\"selectFrequency('SoS')\"> SoS </li>\n                                </ul>\n                            </div>\n                            <div class=\"duration_cmbnd\">\n                                <h3 class=\"combined_heading\"> Duration (Days) </h3>\n                                <ul class=\"combined_duration\">\n                                    <li class=\"{{getDurationClass('1')}}\" (click)=\"selectDuration('1')\">1</li>\n                                    <li class=\"{{getDurationClass('2')}}\" (click)=\"selectDuration('2')\">2</li>\n                                    <li class=\"{{getDurationClass('3')}}\" (click)=\"selectDuration('3')\">3</li>\n                                    <li class=\"{{getDurationClass('4')}}\" (click)=\"selectDuration('4')\">4</li>\n                                    <li class=\"{{getDurationClass('5')}}\" (click)=\"selectDuration('5')\">5</li>\n                                    <li class=\"{{getDurationClass('6')}}\" (click)=\"selectDuration('6')\">6</li>\n                                    <li class=\"{{getDurationClass('7')}}\" (click)=\"selectDuration('7')\">7</li>\n                                    <li class=\"{{getDurationClass('8')}}\" (click)=\"selectDuration('8')\">8</li>\n                                    <li class=\"{{getDurationClass('9')}}\" (click)=\"selectDuration('9')\">9</li>\n                                    <li class=\"{{getDurationClass('10')}}\" (click)=\"selectDuration('10')\">10</li>\n                                    <li class=\"{{getDurationClass('12')}}\" (click)=\"selectDuration('12')\">12</li>\n                                    <li class=\"{{getDurationClass('14')}}\" (click)=\"selectDuration('14')\">14</li>\n                                    <li class=\"{{getDurationClass('15')}}\" (click)=\"selectDuration('15')\">15</li>\n                                    <li class=\"{{getDurationClass('18')}}\" (click)=\"selectDuration('18')\">18</li>\n                                    <li class=\"{{getDurationClass('21')}}\" (click)=\"selectDuration('21')\">21</li>\n                                    <li class=\"{{getDurationClass('25')}}\" (click)=\"selectDuration('25')\">25</li>\n                                    <li class=\"{{getDurationClass('28')}}\" (click)=\"selectDuration('28')\">28</li>\n                                    <li class=\"{{getDurationClass('30')}}\" (click)=\"selectDuration('30')\">30</li>\n                                    <li class=\"{{getDurationClass('35')}}\" (click)=\"selectDuration('35')\">35</li>\n                                    <li class=\"{{getDurationClass('42')}}\" (click)=\"selectDuration('42')\">42</li>\n                                    <li class=\"{{getDurationClass('60')}}\" (click)=\"selectDuration('60')\">60</li>\n                                    <li class=\"{{getDurationClass('90')}}\" (click)=\"selectDuration('90')\">90</li>\n                                    <li class=\"{{getDurationClass('120')}}\" (click)=\"selectDuration('120')\">120</li>\n                                    <li class=\"{{getDurationClass('180')}}\" (click)=\"selectDuration('180')\">180</li>\n                                </ul>\n                            </div>\n                            <div class=\"instr_cmbnd\">\n                                <h3 class=\"combined_heading\"> Special Instructions </h3>\n                                <ul class=\"combined_instruc\">\n                                    <li class=\"{{getFrequencyClassSpecial('After meals')}}\" (click)=\"selectFrequencySpecial('After meals')\"> After meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Empty stomach')}}\" (click)=\"selectFrequencySpecial('Empty stomach')\"> Empty stomach</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Before meals')}}\" (click)=\"selectFrequencySpecial('Before meals')\"> Before meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('As needed')}}\" (click)=\"selectFrequencySpecial('As needed')\"> As needed</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Each night')}}\" (click)=\"selectFrequencySpecial('Each night')\"> Each night</li>\n                                    <li class=\"{{getFrequencyClassSpecial('With milk')}}\" (click)=\"selectFrequencySpecial('With milk')\"> With milk</li>\n                                </ul>\n                                <h3 class=\"combined_heading\"> Injection Mode </h3>\n                                <ul class=\"combined_inject\">\n                                    <li class=\"{{getClassInjection('Intramuscular')}}\" (click)=\"injectionSelected('Intramuscular')\"> Intramuscular </li>\n                                    <li class=\"{{getClassInjection('Intravenous')}}\" (click)=\"injectionSelected('Intravenous')\"> Intravenous </li>\n                                    <li class=\"{{getClassInjection('Intradermal')}}\" (click)=\"injectionSelected('Intradermal')\"> Intradermal </li>\n                                    <li class=\"{{getClassInjection('Subcutaneous')}}\" (click)=\"injectionSelected('Subcutaneous')\"> Subcutaneous </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn_green\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"saveFreqDurInjection()\"> Save </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Combined modal (Tablet) -->\n<div class=\"modal fade combined_modal\" id=\"combinedModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\" *ngIf=\"currentFrequency && currentFrequency.med_name\"> {{currentFrequency.med_name[0].value}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"combined_flex\">\n                            <div class=\"frquency_cmbnd\">\n                                <h3 class=\"combined_heading\"> Frequency </h3>\n                                <ul class=\"combined_frequency\">\n                                    <li class=\"{{getFrequencyClass('Once a day')}}\" (click)=\"selectFrequency('Once a day')\"> Once a day </li>\n                                    <li class=\"{{getFrequencyClass('Twice a day')}}\" (click)=\"selectFrequency('Twice a day')\"> Twice a day </li>\n                                    <li class=\"{{getFrequencyClass('Thrice a day')}}\" (click)=\"selectFrequency('Thrice a day')\"> Thrice a day </li>\n                                    <li class=\"{{getFrequencyClass('Four times a day')}}\" (click)=\"selectFrequency('Four times a day')\"> Four times a day </li>\n                                    <li class=\"{{getFrequencyClass('Every Morning')}}\" (click)=\"selectFrequency('Every Morning')\"> Every Morning </li>\n                                    <li class=\"{{getFrequencyClass('Every Night')}}\" (click)=\"selectFrequency('Every Night')\"> Every Night </li>\n                                    <li class=\"{{getFrequencyClass('Once a week')}}\" (click)=\"selectFrequency('Once a week')\"> Once a week </li>\n                                    <li class=\"{{getFrequencyClass('Once a month')}}\" (click)=\"selectFrequency('Once a month')\"> Once a month </li>\n                                    <li class=\"{{getFrequencyClass('Once in two week')}}\" (click)=\"selectFrequency('Once in two week')\"> Once in two week </li>\n                                    <li class=\"{{getFrequencyClass('Every 1 hour')}}\" (click)=\"selectFrequency('Every 1 hour')\"> Every 1 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 2 hour')}}\" (click)=\"selectFrequency('Every 2 hour')\"> Every 2 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 3 hour')}}\" (click)=\"selectFrequency('Every 3 hour')\"> Every 3 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 4 hour')}}\" (click)=\"selectFrequency('Every 4 hour')\"> Every 4 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 5 hour')}}\" (click)=\"selectFrequency('Every 5 hour')\"> Every 5 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 6 hour')}}\" (click)=\"selectFrequency('Every 6 hour')\"> Every 6 hour </li>\n                                    <li class=\"{{getFrequencyClass('Alternate day')}}\" (click)=\"selectFrequency('Alternate day')\"> Alternate day </li>\n                                    <li class=\"{{getFrequencyClass('At bed time')}}\" (click)=\"selectFrequency('At bed time')\"> At bed time </li>\n                                    <li class=\"{{getFrequencyClass('SoS')}}\" (click)=\"selectFrequency('SoS')\"> SoS </li>\n                                </ul>\n                            </div>\n                            <div class=\"duration_cmbnd\">\n                                <h3 class=\"combined_heading\"> Duration (Days) </h3>\n                                <ul class=\"combined_duration\">\n                                    <li class=\"{{getDurationClass('1')}}\" (click)=\"selectDuration('1')\">1</li>\n                                    <li class=\"{{getDurationClass('2')}}\" (click)=\"selectDuration('2')\">2</li>\n                                    <li class=\"{{getDurationClass('3')}}\" (click)=\"selectDuration('3')\">3</li>\n                                    <li class=\"{{getDurationClass('4')}}\" (click)=\"selectDuration('4')\">4</li>\n                                    <li class=\"{{getDurationClass('5')}}\" (click)=\"selectDuration('5')\">5</li>\n                                    <li class=\"{{getDurationClass('6')}}\" (click)=\"selectDuration('6')\">6</li>\n                                    <li class=\"{{getDurationClass('7')}}\" (click)=\"selectDuration('7')\">7</li>\n                                    <li class=\"{{getDurationClass('8')}}\" (click)=\"selectDuration('8')\">8</li>\n                                    <li class=\"{{getDurationClass('9')}}\" (click)=\"selectDuration('9')\">9</li>\n                                    <li class=\"{{getDurationClass('10')}}\" (click)=\"selectDuration('10')\">10</li>\n                                    <li class=\"{{getDurationClass('12')}}\" (click)=\"selectDuration('12')\">12</li>\n                                    <li class=\"{{getDurationClass('14')}}\" (click)=\"selectDuration('14')\">14</li>\n                                    <li class=\"{{getDurationClass('15')}}\" (click)=\"selectDuration('15')\">15</li>\n                                    <li class=\"{{getDurationClass('18')}}\" (click)=\"selectDuration('18')\">18</li>\n                                    <li class=\"{{getDurationClass('21')}}\" (click)=\"selectDuration('21')\">21</li>\n                                    <li class=\"{{getDurationClass('25')}}\" (click)=\"selectDuration('25')\">25</li>\n                                    <li class=\"{{getDurationClass('28')}}\" (click)=\"selectDuration('28')\">28</li>\n                                    <li class=\"{{getDurationClass('30')}}\" (click)=\"selectDuration('30')\">30</li>\n                                    <li class=\"{{getDurationClass('35')}}\" (click)=\"selectDuration('35')\">35</li>\n                                    <li class=\"{{getDurationClass('42')}}\" (click)=\"selectDuration('42')\">42</li>\n                                    <li class=\"{{getDurationClass('60')}}\" (click)=\"selectDuration('60')\">60</li>\n                                    <li class=\"{{getDurationClass('90')}}\" (click)=\"selectDuration('90')\">90</li>\n                                    <li class=\"{{getDurationClass('120')}}\" (click)=\"selectDuration('120')\">120</li>\n                                    <li class=\"{{getDurationClass('180')}}\" (click)=\"selectDuration('180')\">180</li>\n                                </ul>\n                            </div>\n                            <div class=\"instr_cmbnd\">\n                                <h3 class=\"combined_heading\"> Special Instructions </h3>\n                                <ul class=\"combined_instruc\">\n                                    <li class=\"{{getFrequencyClassSpecial('After meals')}}\" (click)=\"selectFrequencySpecial('After meals')\"> After meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Empty stomach')}}\" (click)=\"selectFrequencySpecial('Empty stomach')\"> Empty stomach</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Before meals')}}\" (click)=\"selectFrequencySpecial('Before meals')\"> Before meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('As needed')}}\" (click)=\"selectFrequencySpecial('As needed')\"> As needed</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Each night')}}\" (click)=\"selectFrequencySpecial('Each night')\"> Each night</li>\n                                    <li class=\"{{getFrequencyClassSpecial('With milk')}}\" (click)=\"selectFrequencySpecial('With milk')\"> With milk</li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn_green\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"saveFreqDuration()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Combined modal (Drops) -->\n<div class=\"modal fade combined_modal\" id=\"combinedModal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\" *ngIf=\"currentFrequency && currentFrequency.med_name\"> {{currentFrequency.med_name[0].value}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"combined_flex\">\n                            <div class=\"frquency_cmbnd\">\n                                <h3 class=\"combined_heading\"> Frequency </h3>\n                                <ul class=\"combined_frequency\">\n                                    <li class=\"{{getFrequencyClass('Once a day')}}\" (click)=\"selectFrequency('Once a day')\"> Once a day </li>\n                                    <li class=\"{{getFrequencyClass('Twice a day')}}\" (click)=\"selectFrequency('Twice a day')\"> Twice a day </li>\n                                    <li class=\"{{getFrequencyClass('Thrice a day')}}\" (click)=\"selectFrequency('Thrice a day')\"> Thrice a day </li>\n                                    <li class=\"{{getFrequencyClass('Four times a day')}}\" (click)=\"selectFrequency('Four times a day')\"> Four times a day </li>\n                                    <li class=\"{{getFrequencyClass('Every Morning')}}\" (click)=\"selectFrequency('Every Morning')\"> Every Morning </li>\n                                    <li class=\"{{getFrequencyClass('Every Night')}}\" (click)=\"selectFrequency('Every Night')\"> Every Night </li>\n                                    <li class=\"{{getFrequencyClass('Once a week')}}\" (click)=\"selectFrequency('Once a week')\"> Once a week </li>\n                                    <li class=\"{{getFrequencyClass('Once a month')}}\" (click)=\"selectFrequency('Once a month')\"> Once a month </li>\n                                    <li class=\"{{getFrequencyClass('Once in two week')}}\" (click)=\"selectFrequency('Once in two week')\"> Once in two week </li>\n                                    <li class=\"{{getFrequencyClass('Every 1 hour')}}\" (click)=\"selectFrequency('Every 1 hour')\"> Every 1 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 2 hour')}}\" (click)=\"selectFrequency('Every 2 hour')\"> Every 2 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 3 hour')}}\" (click)=\"selectFrequency('Every 3 hour')\"> Every 3 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 4 hour')}}\" (click)=\"selectFrequency('Every 4 hour')\"> Every 4 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 5 hour')}}\" (click)=\"selectFrequency('Every 5 hour')\"> Every 5 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 6 hour')}}\" (click)=\"selectFrequency('Every 6 hour')\"> Every 6 hour </li>\n                                    <li class=\"{{getFrequencyClass('Alternate day')}}\" (click)=\"selectFrequency('Alternate day')\"> Alternate day </li>\n                                    <li class=\"{{getFrequencyClass('At bed time')}}\" (click)=\"selectFrequency('At bed time')\"> At bed time </li>\n                                    <li class=\"{{getFrequencyClass('SoS')}}\" (click)=\"selectFrequency('SoS')\"> SoS </li>\n                                </ul>\n                            </div>\n                            <div class=\"duration_cmbnd\">\n                                <h3 class=\"combined_heading\"> Duration (Days) </h3>\n                                <ul class=\"combined_duration\">\n                                    <li class=\"{{getDurationClass('1')}}\" (click)=\"selectDuration('1')\">1</li>\n                                    <li class=\"{{getDurationClass('2')}}\" (click)=\"selectDuration('2')\">2</li>\n                                    <li class=\"{{getDurationClass('3')}}\" (click)=\"selectDuration('3')\">3</li>\n                                    <li class=\"{{getDurationClass('4')}}\" (click)=\"selectDuration('4')\">4</li>\n                                    <li class=\"{{getDurationClass('5')}}\" (click)=\"selectDuration('5')\">5</li>\n                                    <li class=\"{{getDurationClass('6')}}\" (click)=\"selectDuration('6')\">6</li>\n                                    <li class=\"{{getDurationClass('7')}}\" (click)=\"selectDuration('7')\">7</li>\n                                    <li class=\"{{getDurationClass('8')}}\" (click)=\"selectDuration('8')\">8</li>\n                                    <li class=\"{{getDurationClass('9')}}\" (click)=\"selectDuration('9')\">9</li>\n                                    <li class=\"{{getDurationClass('10')}}\" (click)=\"selectDuration('10')\">10</li>\n                                    <li class=\"{{getDurationClass('12')}}\" (click)=\"selectDuration('12')\">12</li>\n                                    <li class=\"{{getDurationClass('14')}}\" (click)=\"selectDuration('14')\">14</li>\n                                    <li class=\"{{getDurationClass('15')}}\" (click)=\"selectDuration('15')\">15</li>\n                                    <li class=\"{{getDurationClass('18')}}\" (click)=\"selectDuration('18')\">18</li>\n                                    <li class=\"{{getDurationClass('21')}}\" (click)=\"selectDuration('21')\">21</li>\n                                    <li class=\"{{getDurationClass('25')}}\" (click)=\"selectDuration('25')\">25</li>\n                                    <li class=\"{{getDurationClass('28')}}\" (click)=\"selectDuration('28')\">28</li>\n                                    <li class=\"{{getDurationClass('30')}}\" (click)=\"selectDuration('30')\">30</li>\n                                    <li class=\"{{getDurationClass('35')}}\" (click)=\"selectDuration('35')\">35</li>\n                                    <li class=\"{{getDurationClass('42')}}\" (click)=\"selectDuration('42')\">42</li>\n                                    <li class=\"{{getDurationClass('60')}}\" (click)=\"selectDuration('60')\">60</li>\n                                    <li class=\"{{getDurationClass('90')}}\" (click)=\"selectDuration('90')\">90</li>\n                                    <li class=\"{{getDurationClass('120')}}\" (click)=\"selectDuration('120')\">120</li>\n                                    <li class=\"{{getDurationClass('180')}}\" (click)=\"selectDuration('180')\">180</li>\n                                </ul>\n                            </div>\n                            <div class=\"instr_cmbnd\">\n                                <h3 class=\"combined_heading\"> Special Instructions </h3>\n                                <ul class=\"combined_instruc\">\n                                    <li class=\"{{getFrequencyClassSpecial('After meals')}}\" (click)=\"selectFrequencySpecial('After meals')\"> After meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Empty stomach')}}\" (click)=\"selectFrequencySpecial('Empty stomach')\"> Empty stomach</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Before meals')}}\" (click)=\"selectFrequencySpecial('Before meals')\"> Before meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('As needed')}}\" (click)=\"selectFrequencySpecial('As needed')\"> As needed</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Each night')}}\" (click)=\"selectFrequencySpecial('Each night')\"> Each night</li>\n                                    <li class=\"{{getFrequencyClassSpecial('With milk')}}\" (click)=\"selectFrequencySpecial('With milk')\"> With milk</li>\n                                </ul>\n                                <h3 class=\"combined_heading\"> Drop quantity </h3>\n                                <ul class=\"combined_instruc combined_drop\">\n                                    <li *ngFor=\"let value of quantity_range\" [ngClass]=\"value==tempQuantity ? 'active-cel' : ''\" (click)=\"addTempQuantity(value)\"> {{value}} </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn_green\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"saveFreqDurDrops()\"> Save </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Combined modal (Syrup) -->\n<div class=\"modal fade combined_modal\" id=\"combinedModal4\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\" *ngIf=\"currentFrequency && currentFrequency.med_name\"> {{currentFrequency.med_name[0].value}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"combined_flex\">\n                            <div class=\"frquency_cmbnd\">\n                                <h3 class=\"combined_heading\"> Frequency </h3>\n                                <ul class=\"combined_frequency\">\n                                    <li class=\"{{getFrequencyClass('Once a day')}}\" (click)=\"selectFrequency('Once a day')\"> Once a day </li>\n                                    <li class=\"{{getFrequencyClass('Twice a day')}}\" (click)=\"selectFrequency('Twice a day')\"> Twice a day </li>\n                                    <li class=\"{{getFrequencyClass('Thrice a day')}}\" (click)=\"selectFrequency('Thrice a day')\"> Thrice a day </li>\n                                    <li class=\"{{getFrequencyClass('Four times a day')}}\" (click)=\"selectFrequency('Four times a day')\"> Four times a day </li>\n                                    <li class=\"{{getFrequencyClass('Every Morning')}}\" (click)=\"selectFrequency('Every Morning')\"> Every Morning </li>\n                                    <li class=\"{{getFrequencyClass('Every Night')}}\" (click)=\"selectFrequency('Every Night')\"> Every Night </li>\n                                    <li class=\"{{getFrequencyClass('Once a week')}}\" (click)=\"selectFrequency('Once a week')\"> Once a week </li>\n                                    <li class=\"{{getFrequencyClass('Once a month')}}\" (click)=\"selectFrequency('Once a month')\"> Once a month </li>\n                                    <li class=\"{{getFrequencyClass('Once in two week')}}\" (click)=\"selectFrequency('Once in two week')\"> Once in two week </li>\n                                    <li class=\"{{getFrequencyClass('Every 1 hour')}}\" (click)=\"selectFrequency('Every 1 hour')\"> Every 1 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 2 hour')}}\" (click)=\"selectFrequency('Every 2 hour')\"> Every 2 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 3 hour')}}\" (click)=\"selectFrequency('Every 3 hour')\"> Every 3 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 4 hour')}}\" (click)=\"selectFrequency('Every 4 hour')\"> Every 4 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 5 hour')}}\" (click)=\"selectFrequency('Every 5 hour')\"> Every 5 hour </li>\n                                    <li class=\"{{getFrequencyClass('Every 6 hour')}}\" (click)=\"selectFrequency('Every 6 hour')\"> Every 6 hour </li>\n                                    <li class=\"{{getFrequencyClass('Alternate day')}}\" (click)=\"selectFrequency('Alternate day')\"> Alternate day </li>\n                                    <li class=\"{{getFrequencyClass('At bed time')}}\" (click)=\"selectFrequency('At bed time')\"> At bed time </li>\n                                    <li class=\"{{getFrequencyClass('SoS')}}\" (click)=\"selectFrequency('SoS')\"> SoS </li>\n                                </ul>\n                            </div>\n                            <div class=\"duration_cmbnd\">\n                                <h3 class=\"combined_heading\"> Duration (Days) </h3>\n                                <ul class=\"combined_duration\">\n                                    <li class=\"{{getDurationClass('1')}}\" (click)=\"selectDuration('1')\">1</li>\n                                    <li class=\"{{getDurationClass('2')}}\" (click)=\"selectDuration('2')\">2</li>\n                                    <li class=\"{{getDurationClass('3')}}\" (click)=\"selectDuration('3')\">3</li>\n                                    <li class=\"{{getDurationClass('4')}}\" (click)=\"selectDuration('4')\">4</li>\n                                    <li class=\"{{getDurationClass('5')}}\" (click)=\"selectDuration('5')\">5</li>\n                                    <li class=\"{{getDurationClass('6')}}\" (click)=\"selectDuration('6')\">6</li>\n                                    <li class=\"{{getDurationClass('7')}}\" (click)=\"selectDuration('7')\">7</li>\n                                    <li class=\"{{getDurationClass('8')}}\" (click)=\"selectDuration('8')\">8</li>\n                                    <li class=\"{{getDurationClass('9')}}\" (click)=\"selectDuration('9')\">9</li>\n                                    <li class=\"{{getDurationClass('10')}}\" (click)=\"selectDuration('10')\">10</li>\n                                    <li class=\"{{getDurationClass('12')}}\" (click)=\"selectDuration('12')\">12</li>\n                                    <li class=\"{{getDurationClass('14')}}\" (click)=\"selectDuration('14')\">14</li>\n                                    <li class=\"{{getDurationClass('15')}}\" (click)=\"selectDuration('15')\">15</li>\n                                    <li class=\"{{getDurationClass('18')}}\" (click)=\"selectDuration('18')\">18</li>\n                                    <li class=\"{{getDurationClass('21')}}\" (click)=\"selectDuration('21')\">21</li>\n                                    <li class=\"{{getDurationClass('25')}}\" (click)=\"selectDuration('25')\">25</li>\n                                    <li class=\"{{getDurationClass('28')}}\" (click)=\"selectDuration('28')\">28</li>\n                                    <li class=\"{{getDurationClass('30')}}\" (click)=\"selectDuration('30')\">30</li>\n                                    <li class=\"{{getDurationClass('35')}}\" (click)=\"selectDuration('35')\">35</li>\n                                    <li class=\"{{getDurationClass('42')}}\" (click)=\"selectDuration('42')\">42</li>\n                                    <li class=\"{{getDurationClass('60')}}\" (click)=\"selectDuration('60')\">60</li>\n                                    <li class=\"{{getDurationClass('90')}}\" (click)=\"selectDuration('90')\">90</li>\n                                    <li class=\"{{getDurationClass('120')}}\" (click)=\"selectDuration('120')\">120</li>\n                                    <li class=\"{{getDurationClass('180')}}\" (click)=\"selectDuration('180')\">180</li>\n                                </ul>\n                            </div>\n                            <div class=\"instr_cmbnd\">\n                                <h3 class=\"combined_heading\"> Special Instructions </h3>\n                                <ul class=\"combined_instruc\">\n                                    <li class=\"{{getFrequencyClassSpecial('After meals')}}\" (click)=\"selectFrequencySpecial('After meals')\"> After meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Empty stomach')}}\" (click)=\"selectFrequencySpecial('Empty stomach')\"> Empty stomach</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Before meals')}}\" (click)=\"selectFrequencySpecial('Before meals')\"> Before meals</li>\n                                    <li class=\"{{getFrequencyClassSpecial('As needed')}}\" (click)=\"selectFrequencySpecial('As needed')\"> As needed</li>\n                                    <li class=\"{{getFrequencyClassSpecial('Each night')}}\" (click)=\"selectFrequencySpecial('Each night')\"> Each night</li>\n                                    <li class=\"{{getFrequencyClassSpecial('With milk')}}\" (click)=\"selectFrequencySpecial('With milk')\"> With milk</li>\n                                </ul>\n                                <h3 class=\"combined_heading\"> Dosage (ml) </h3>\n                                <ul class=\"combined_instruc combined_drop combined_dosage\">\n                                    <li class=\"{{getClassDosage('1')}}\" (click)=\"selectDosage('1')\"> 1 </li>\n                                    <li class=\"{{getClassDosage('2')}}\" (click)=\"selectDosage('2')\"> 2 </li>\n                                    <li class=\"{{getClassDosage('3')}}\" (click)=\"selectDosage('3')\"> 3 </li>\n                                    <li class=\"{{getClassDosage('4')}}\" (click)=\"selectDosage('4')\"> 4 </li>\n                                    <li class=\"{{getClassDosage('5')}}\" (click)=\"selectDosage('5')\"> 5 </li>\n                                    <li class=\"{{getClassDosage('1.5')}}\" (click)=\"selectDosage('1.5')\"> 1.5 </li>\n                                    <li class=\"{{getClassDosage('2.5')}}\" (click)=\"selectDosage('2.5')\"> 2.5 </li>\n                                    <li class=\"{{getClassDosage('3.5')}}\" (click)=\"selectDosage('3.5')\"> 3.5 </li>\n                                    <li class=\"{{getClassDosage('4.5')}}\" (click)=\"selectDosage('4.5')\"> 4.5 </li>\n                                    <li class=\"{{getClassDosage('5.5')}}\" (click)=\"selectDosage('5.5')\"> 5.5 </li>\n                                    <li class=\"{{getClassDosage('6')}}\" (click)=\"selectDosage('6')\"> 6 </li>\n                                    <li class=\"{{getClassDosage('7')}}\" (click)=\"selectDosage('7')\"> 7 </li>\n                                    <li class=\"{{getClassDosage('8')}}\" (click)=\"selectDosage('8')\"> 8 </li>\n                                    <li class=\"{{getClassDosage('9')}}\" (click)=\"selectDosage('9')\"> 9 </li>\n                                    <li class=\"{{getClassDosage('10')}}\" (click)=\"selectDosage('10')\"> 10 </li>\n                                    <li class=\"{{getClassDosage('6.5')}}\" (click)=\"selectDosage('6.5')\"> 6.5 </li>\n                                    <li class=\"{{getClassDosage('7.5')}}\" (click)=\"selectDosage('7.5')\"> 7.5 </li>\n                                    <li class=\"{{getClassDosage('8.5')}}\" (click)=\"selectDosage('8.5')\"> 8.5 </li>\n                                    <li class=\"{{getClassDosage('9.5')}}\" (click)=\"selectDosage('9.5')\"> 9.5 </li>\n                                    <li class=\"{{getClassDosage('10.5')}}\" (click)=\"selectDosage('10.5')\"> 10.5 </li>\n                                    <li class=\"{{getClassDosage('11')}}\" (click)=\"selectDosage('11')\"> 11 </li>\n                                    <li class=\"{{getClassDosage('12')}}\" (click)=\"selectDosage('12')\"> 12 </li>\n                                    <li class=\"{{getClassDosage('15')}}\" (click)=\"selectDosage('15')\"> 15 </li>\n                                    <li class=\"{{getClassDosage('20')}}\" (click)=\"selectDosage('20')\"> 20 </li>\n                                    <li class=\"{{getClassDosage('25')}}\" (click)=\"selectDosage('25')\"> 25 </li>\n                                    <li class=\"{{getClassDosage('11.5')}}\" (click)=\"selectDosage('11.5')\"> 11.5 </li>\n                                    <li class=\"{{getClassDosage('12.5')}}\" (click)=\"selectDosage('12.5')\"> 12.5 </li>\n                                    <li class=\"{{getClassDosage('30')}}\" (click)=\"selectDosage('30')\"> 30 </li>\n                                    <li class=\"{{getClassDosage('40')}}\" (click)=\"selectDosage('40')\"> 40 </li>\n                                    <li class=\"{{getClassDosage('50')}}\" (click)=\"selectDosage('50')\"> 50 </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn_green\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"saveFreqDurDosage()\"> Save </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Other Treatment -->\n<div class=\"modal fade combined_modal\" id=\"combinedModal5\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\" *ngIf=\"tempTreatObject\"> {{tempTreatObject[tempTreatObjectIndex].name}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"combined_flex\">\n                            <div class=\"frquency_cmbnd\" *ngIf=\"tempTreatObject && tempTreatObject[tempTreatObjectIndex].name!='Plaster'\">\n                                <h3 class=\"combined_heading\"> Frequency </h3>\n                                <ul class=\"combined_frequency\">\n                                    <li (click)=\"selectFromTreatFrequency('Once a day')\" class=\"{{getTreatFrequencyModalClass('Once a day')}}\"> Once a day </li>\n                                    <li (click)=\"selectFromTreatFrequency('Twice a day')\" class=\"{{getTreatFrequencyModalClass('Twice a day')}}\"> Twice a day </li>\n                                    <li (click)=\"selectFromTreatFrequency('Thrice a day')\" class=\"{{getTreatFrequencyModalClass('Thrice a day')}}\"> Thrice a day </li>\n                                    <li (click)=\"selectFromTreatFrequency('Four times a day')\" class=\"{{getTreatFrequencyModalClass('Four times a day')}}\"> Four times a day </li>\n                                    <li (click)=\"selectFromTreatFrequency('Once a week')\" class=\"{{getTreatFrequencyModalClass('Once a week')}}\"> Once a week </li>\n                                    <li (click)=\"selectFromTreatFrequency('Every morning')\" class=\"{{getTreatFrequencyModalClass('Every morning')}}\"> Every morning </li>\n                                    <li (click)=\"selectFromTreatFrequency('Every night')\" class=\"{{getTreatFrequencyModalClass('Every night')}}\"> Every night </li>\n                                    <li (click)=\"selectFromTreatFrequency(' Every 1 hour')\" class=\"{{getTreatFrequencyModalClass(' Every 1 hour')}}\"> Every 1 hour </li>\n                                    <li (click)=\"selectFromTreatFrequency('Every 2 hour')\" class=\"{{getTreatFrequencyModalClass('Every 2 hour')}}\"> Every 2 hour </li>\n                                    <li (click)=\"selectFromTreatFrequency('Every 3 hour')\" class=\"{{getTreatFrequencyModalClass('Every 3 hour')}}\"> Every 3 hour </li>\n                                    <li (click)=\"selectFromTreatFrequency('Every 4 hour')\" class=\"{{getTreatFrequencyModalClass('Every 4 hour')}}\"> Every 4 hour </li>\n                                    <li (click)=\"selectFromTreatFrequency('Every 6 hour')\" class=\"{{getTreatFrequencyModalClass('Every 6 hour')}}\"> Every 6 hour </li>\n                                    <li (click)=\"selectFromTreatFrequency('Alternate day')\" class=\"{{getTreatFrequencyModalClass('Alternate day')}}\"> Alternate day </li>\n                                    <li (click)=\"selectFromTreatFrequency('At bed time')\" class=\"{{getTreatFrequencyModalClass('At bed time')}}\"> At bed time </li>\n                                    <li (click)=\"selectFromTreatFrequency('SoS')\" class=\"{{getTreatFrequencyModalClass('SoS')}}\"> SoS </li>\n                                </ul>\n                            </div>\n                            <div class=\"duration_cmbnd\">\n                                <h3 class=\"combined_heading\"> Duration (Days) </h3>\n                                <ul class=\"combined_duration\">\n                                    <li class=\"{{getDurationModalClass('1')}}\" (click)=\"selectFromTreatDuration('1')\">1</li>\n                                    <li class=\"{{getDurationModalClass('2')}}\" (click)=\"selectFromTreatDuration('2')\">2</li>\n                                    <li class=\"{{getDurationModalClass('3')}}\" (click)=\"selectFromTreatDuration('3')\">3</li>\n                                    <li class=\"{{getDurationModalClass('4')}}\" (click)=\"selectFromTreatDuration('4')\">4</li>\n                                    <li class=\"{{getDurationModalClass('5')}}\" (click)=\"selectFromTreatDuration('5')\">5</li>\n                                    <li class=\"{{getDurationModalClass('6')}}\" (click)=\"selectFromTreatDuration('6')\"> 6 </li>\n                                    <li class=\"{{getDurationModalClass('7')}}\" (click)=\"selectFromTreatDuration('7')\">7</li>\n                                    <li class=\"{{getDurationModalClass('8')}}\" (click)=\"selectFromTreatDuration('8')\">8</li>\n                                    <li class=\"{{getDurationModalClass('9')}}\" (click)=\"selectFromTreatDuration('9')\">9</li>\n                                    <li class=\"{{getDurationModalClass('10')}}\" (click)=\"selectFromTreatDuration('10')\">10</li>\n                                    <li class=\"{{getDurationModalClass('12')}}\" (click)=\"selectFromTreatDuration('12')\">12</li>\n                                    <li class=\"{{getDurationModalClass('14')}}\" (click)=\"selectFromTreatDuration('14')\"> 14 </li>\n                                    <li class=\"{{getDurationModalClass('15')}}\" (click)=\"selectFromTreatDuration('15')\">15</li>\n                                    <li class=\"{{getDurationModalClass('18')}}\" (click)=\"selectFromTreatDuration('18')\">18</li>\n                                    <li class=\"{{getDurationModalClass('21')}}\" (click)=\"selectFromTreatDuration('21')\">21</li>\n                                    <li class=\"{{getDurationModalClass('25')}}\" (click)=\"selectFromTreatDuration('25')\">25</li>\n                                    <li class=\"{{getDurationModalClass('28')}}\" (click)=\"selectFromTreatDuration('28')\">28</li>\n                                    <li class=\"{{getDurationModalClass('30')}}\" (click)=\"selectFromTreatDuration('30')\"> 30 </li>\n                                    <li class=\"{{getDurationModalClass('35')}}\" (click)=\"selectFromTreatDuration('35')\">35</li>\n                                    <li class=\"{{getDurationModalClass('42')}}\" (click)=\"selectFromTreatDuration('42')\">42</li>\n                                    <li class=\"{{getDurationModalClass('60')}}\" (click)=\"selectFromTreatDuration('60')\">60</li>\n                                    <li class=\"{{getDurationModalClass('90')}}\" (click)=\"selectFromTreatDuration('90')\">90</li>\n                                    <li class=\"{{getDurationModalClass('120')}}\" (click)=\"selectFromTreatDuration('120')\">120</li>\n                                    <li class=\"{{getDurationModalClass('180')}}\" (click)=\"selectFromTreatDuration('180')\"> 180</li>\n                                </ul>\n                            </div>\n                            <!-- <div class=\"instr_cmbnd\" *ngIf=\"tempTreatObject && tempTreatObject[tempTreatObjectIndex].name!='Fomentation' && tempTreatObject[tempTreatObjectIndex].name!='Plaster'\">\n                                <h3 class=\"combined_heading\"> Special Instructions </h3>\n                                <ul class=\"combined_instruc\">\n                                    <li (click)=\"selectFromTreatSpecialInstruction('After meals')\" class=\"{{getSpecialInstructionModalClass('After meals')}}\"> After meals</li>\n                                    <li (click)=\"selectFromTreatSpecialInstruction('Empty stomach')\" class=\"{{getSpecialInstructionModalClass('Empty stomach')}}\"> Empty stomach</li>\n                                    <li (click)=\"selectFromTreatSpecialInstruction('Before meals')\" class=\"{{getSpecialInstructionModalClass('Before meals')}}\"> Before meals</li>\n                                    <li (click)=\"selectFromTreatSpecialInstruction('As needed')\" class=\"{{getSpecialInstructionModalClass('As needed')}}\"> As needed</li>\n                                    <li (click)=\"selectFromTreatSpecialInstruction('Each night')\" class=\"{{getSpecialInstructionModalClass('Each night')}}\"> Each night</li>\n                                    <li (click)=\"selectFromTreatSpecialInstruction('With milk')\" class=\"{{getSpecialInstructionModalClass('With milk')}}\"> With milk</li>\n                                </ul>\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn_green\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"saveFreqDurationTreatment()\"> Done </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-prescription-pad-off/dashboard-prescription-pad-off.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPrescriptionPadOffComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_scroll_to_el__ = __webpack_require__("../../../../ng2-scroll-to-el/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirmation_popup_confirmation_dialog_update_confirmation_dialog_update_component__ = __webpack_require__("../../../../../src/app/confirmation-popup/confirmation-dialog-update/confirmation-dialog-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
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











var DashboardPrescriptionPadOffComponent = /** @class */ (function () {
    function DashboardPrescriptionPadOffComponent(toastr, route, userService, scrollService, dialog, formBuilder, domSanitizer, router) {
        var _this = this;
        this.toastr = toastr;
        this.route = route;
        this.userService = userService;
        this.scrollService = scrollService;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.domSanitizer = domSanitizer;
        this.router = router;
        this.showhideaddfiled = '';
        this.spherePositive = [];
        this.sphereNegative = [];
        this.cylinderPositive = [];
        this.cylinderNegative = [];
        this.addNumber = [];
        this.axisNumber = [];
        this.medicatab = 0;
        this.treatmentab = 0;
        this.treatab = 0;
        this.investigationtab = 0;
        this.surgeyproctab = 0;
        this.loading = false;
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
        this.addField = 'Add Field';
        this.selectedIndexDataValue = [
            { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
            { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
            { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
            { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
            { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
            { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
            { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
            { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
            { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
            { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
            { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
            { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
            { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
            { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
            { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' }
        ];
        this.selectedIndexDataValueForShowleft = [];
        this.selectedIndexDataValueForShowright = [];
        this.preCondMdlArray = [{
                'status': false,
                'text': 'Pregnant'
            }, {
                'status': false,
                'text': 'Breast-Feeding'
            }, {
                'status': false,
                'text': 'Diabetic'
            }, {
                'status': false,
                'text': 'Cardiovascular Problem'
            }, {
                'status': false,
                'text': 'Thyroid'
            }, {
                'status': false,
                'text': 'Hypertension'
            }, {
                'status': false,
                'text': 'Auto-immune disorder'
            }, {
                'status': false,
                'text': 'Arthritis'
            }, {
                'status': false,
                'text': 'Asthma'
            }, {
                'status': false,
                'text': 'Other',
                'purpose': 'more'
            }];
        this.AllergyArray = [{
                'allergyName': 'Drug Allergy',
                'allergySource': [{
                        'status': false,
                        'text': 'Aspirin'
                    }, {
                        'status': false,
                        'text': 'Ampicillin'
                    }, {
                        'status': false,
                        'text': 'Pain killer'
                    }, {
                        'status': false,
                        'text': 'Antibiotics'
                    }, {
                        'status': false,
                        'text': 'Tetracycline'
                    }, {
                        'status': false,
                        'text': 'Sulfa'
                    }]
            }, {
                'allergyName': 'Food Allergy',
                'allergySource': [{
                        'status': false,
                        'text': 'Chocolate'
                    }, {
                        'status': false,
                        'text': 'Egg'
                    }, {
                        'status': false,
                        'text': 'Fish'
                    }, {
                        'status': false,
                        'text': 'Milk'
                    }, {
                        'status': false,
                        'text': 'Nuts'
                    }, {
                        'status': false,
                        'text': 'Prawn'
                    }, {
                        'status': false,
                        'text': 'Meat'
                    }, {
                        'status': false,
                        'text': 'Sea Food'
                    }, {
                        'status': false,
                        'text': 'Spices'
                    }]
            }, {
                'allergyName': 'Skin Allergy',
                'allergySource': [{
                        'status': false,
                        'text': 'Urticaria'
                    }, {
                        'status': false,
                        'text': 'Rash'
                    }, {
                        'status': false,
                        'text': 'Sun'
                    }, {
                        'status': false,
                        'text': 'Anaphylaxis'
                    }, {
                        'status': false,
                        'text': 'Dye'
                    }, {
                        'status': false,
                        'text': 'Detergent'
                    }]
            }, {
                'allergyName': 'Respiratory Allergy',
                'allergySource': [{
                        'status': false,
                        'text': 'Dust'
                    }, {
                        'status': false,
                        'text': 'Pollen'
                    }, {
                        'status': false,
                        'text': 'Paint smell'
                    }, {
                        'status': false,
                        'text': 'Smoke'
                    }, {
                        'status': false,
                        'text': 'Perfume'
                    }, {
                        'status': false,
                        'text': 'Temp change'
                    }]
            }];
        this.vaccinationDate = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy',
            defaultOpen: false
        };
        this.prescList1 = [];
        this.prescList2 = [];
        this.preCondSelected = [];
        this.finalPreConditions = [];
        this.finalAllergy = [];
        this.allergySelected = [];
        this.bodyIndicatorSelected = [];
        this.status = false;
        this.bodyIndicator = {
            'temp': 'Select',
            'pulse': 'Select',
            'sys': 'Select',
            'dia': 'Select',
            'spo': 'Select',
            'rbs': 'Select'
        };
        this.itemsfinding = [];
        this.findingPreSetVals = [];
        this.preConditionComplete = false;
        this.allergyComplete = false;
        this.findingsComplete = false;
        this.bodyIndicatorComplete = false;
        this.findingsSelected = [];
        this.itemsymptoms = [];
        this.symptomsPresetArray = [];
        this.symptomsSelected = [];
        this.symptomsComplete = false;
        this.itemsdiagnosis = [];
        this.diagnosisPresetArray = [];
        this.diagnosisSelected = [];
        this.preConditionPresetArray = [];
        this.allergyPresetArray = [];
        this.diagnosisComplete = false;
        this.addPresetInstruction = false;
        this.presetArrayInstruction = [];
        this.presetArraySurgery = [];
        this.presetArrayOtherTreatment = [];
        this.presetArrayInvestigation = [];
        this.instructionsComplete = false;
        this.instructionsSelected = [];
        this.numberOfInvestigationSelected = 0;
        this.investigationArray = [];
        this.investigationIndicatorComplete = false;
        this.surgeryComplete = false;
        this.followDaysComplete = false;
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
        this.totalMedications = 0;
        this.totalSurgeryOptionsSelected = 0;
        this.surgerySelectedArray = [];
        this.finalSurgeryArray = [];
        this.followUpDays = 0;
        this.finalfollowUpDays = 0;
        this.followUpDate = new Date();
        this.currentVaccinationArray = [];
        this.dueVaccinationArray = [];
        this.tempDueVaccinationArray = [];
        this.tempCurrentVaccinationArray = [];
        this.finalDueVaccinationArray = [];
        this.finalCurrentVaccinationArray = [];
        this.currentVaccinationComplete = false;
        this.dueVaccinationComplete = false;
        this.vaccinationComplete = false;
        this.medicationSavedArray = [];
        this.treatmentComplete = false;
        this.medicationComplete = false;
        this.tempSphereRight = null;
        this.tempSphereLeft = null;
        this.tempCylinderRight = null;
        this.tempCylinderLeft = null;
        this.tempAxisRight = null;
        this.tempAxisLeft = null;
        this.tempAddRight = null;
        this.tempAddLeft = null;
        this.tempPDRight = null;
        this.tempPDLeft = null;
        this.eyePresComplete = false;
        this.show_otherPrecondition = false;
        //Other Treatment
        this.totalOtherTreatment = 0;
        this.treatmentArray = [];
        this.plaster_open_by_main = true;
        this.quantity_drops = 'Select';
        this.languageOption = "";
        this.languageOptionSelected = "";
        this.route.params.subscribe(function (params) {
            _this.patientData = params;
        });
        this.referDetail = {};
        this.doctorReferForm = this.formBuilder.group({
            'phone': [null, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_7__angular_forms__["n" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["n" /* Validators */].maxLength(10)
                ])],
            'doctor_name': [null, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z ]*')])],
            'note': [null]
        });
        // function googleTranslateElementInit() {
        // new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
        // }
    }
    DashboardPrescriptionPadOffComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        // localStorage['doctorDetails']=JSON.stringify(data.data)
        // this.doctorsDetails = 
        this.consultingPatient = JSON.parse(localStorage['consultingPatient']);
        console.log(this.consultingPatient);
        this.pateintPicPath = __WEBPACK_IMPORTED_MODULE_9__environments_environment_prod__["a" /* environment */].patientPic;
        this.reportPic = __WEBPACK_IMPORTED_MODULE_9__environments_environment_prod__["a" /* environment */].reportPic;
        this.uploadedPrescriptionPath = __WEBPACK_IMPORTED_MODULE_9__environments_environment_prod__["a" /* environment */].uploadedPrescriptionPath;
        console.log(this.doctorData.smart_pharmacy_id);
        this.doctorsDetails = JSON.parse(localStorage['doctorsOfSameClinic']);
        console.log(this.doctorsDetails);
        // this.getDoctorPrescriptionFields(this.doctorData.itemId);
        // this.GetDoctorSurgeryArray(this.doctorData.itemId);
        // this.GetDoctorClinicalObservations(this.doctorData.itemId);
        // this.GetDoctorSymptoms(this.doctorData.itemId);
        // this.GetDoctorDiagnosis(this.doctorData.itemId);
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
        // this.GetSavedSuggestions('Lifestyle')
        // this.GetSavedSuggestions('Gargle')
        // this.GetSavedSuggestions('Bandage')
        // this.GetSavedSuggestions('Dressing')
        // this.GetSavedSuggestions('Other')
        // this.GetSavedSuggestions('Instruction')
        // this.GetSavedSuggestions('Pre Condition')
        // this.GetSavedSuggestions('Allergy')
        // this.GetSurgerySuggestions('Cardiology')
        // this.GetSurgerySuggestions('ENT')
        // this.GetSurgerySuggestions('Dental')
        // this.GetSurgerySuggestions('Genito-Urinary')
        // this.GetSurgerySuggestions('Gynaecology/Obstetrics')
        // this.GetSurgerySuggestions('Neonatal')
        // this.GetSurgerySuggestions('Neurology')
        // this.GetSurgerySuggestions('Oncology')
        // this.GetSurgerySuggestions('Ophthalmology')
        // this.GetSurgerySuggestions('Orthopaedics')
        // this.GetSurgerySuggestions('Paediatric')
        // this.GetSurgerySuggestions('Vascular')
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
        // this.GetInvestigationSuggestions('Others');
        // this.GetDoctorPreset();
        // this.GetDoctorOtherPreset('Patient Complaints')
        // this.GetDoctorOtherPreset('Symptoms')
        // this.GetDoctorOtherPreset('Diagnosis')
        // this.GetDoctorPresetArray('Instructions')
        // this.GetDoctorPresetArray('Surgery')
        // this.GetDoctorPresetArray('Other Treatments')
        // this.GetDoctorPresetArray('Investigation')
        // this.GetPrescriptionPad();
        var options = { month: 'short' };
        var today = new Date();
        this.month = today.toLocaleDateString("en-IN", options);
        this.day = new Date().getDate();
        this.year = new Date().getFullYear();
        this.numericMonth = new Date().getMonth() + 1;
        this.prescList = [
            { structure: 'three', targetId: 'preconditionModal', float: 'left', item: 'Pre Condition', status: false, status1: false, field: "Add Field", values: ['a', 'b', 'c'], width: 'pre-cond' },
            { structure: 'three', targetId: 'allergyModal', float: 'left', item: 'Allergy', status: false, status1: false, field: "Add Field", values: [], width: 'allergy' },
            { structure: 'three', targetId: 'bodyIndicatorModal', float: 'left', item: 'Body Indicator', status: false, status1: false, field: "Add Field", values: [], width: 'indicator' },
            { structure: 'one', targetId: 'clinicFindModal', float: 'left', item: 'Patient Complaints', status: false, status1: false, field: "Add Field", values: [], width: 'finding' },
            { structure: 'one', targetId: 'symptomsModal', float: 'left', item: 'Symptoms', status: false, status1: false, field: "Add Field", values: [], width: 'symptoms' },
            { structure: 'one', targetId: 'diagnosisModal', float: 'left', item: 'Diagnosis', status: false, status1: false, field: "Add Field", values: [], width: 'diagnosis' },
            // {structure:'one',targetId:'medicationModal',float:'right',item:'Medication', status: false,status1:false,field:"Add Field",values:[],width:'pad-medication'},
            { structure: 'one', targetId: 'treatmentModal', float: 'right', item: 'Other Treatment', status: false, status1: false, field: "Add Field", values: [], width: 'pad-treatments' },
            { structure: 'one', targetId: 'investigationModal', float: 'left', item: 'Investigation', status: false, status1: false, field: "Add Field", values: [], width: 'investigation' },
            { structure: 'one', targetId: 'surgeryModal', float: 'left', item: 'Surgery / Procedure', status: false, status1: false, field: "Add Field", values: [], width: 'surgery' },
            // {structure:'two',targetId:'followModal',float:'left',item:'Follow-up', status: false,status1:false,field:"Add Field",values:[],width:'follow'},
            // {structure:'two',targetId:'referModal',float:'left',item:'Refer', status: false,status1:false,field:"Add Field",values:[],width:'refered'},
            { structure: 'one', targetId: 'eyeModal', float: 'right', item: 'Eye Prescription', status: false, status1: false, field: "Add Field", values: [], width: 'pad-eye' },
            { structure: 'one', targetId: 'vaccinationModal', float: 'left', item: 'Vaccination', status: false, status1: false, field: "Add Field", values: [], width: 'vaccination' },
            { structure: 'one', targetId: 'instructionsModal', float: 'right', item: 'Instructions', status: false, status1: false, field: "Add Field", values: [], width: 'pad-instruc' }
        ];
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
        this.condition = false;
        this.findPresets = true;
        this.symptomspreset = true;
        this.diagnosispreset = true;
        this.instructionpreset = true;
        this.investigationpreset = true;
        this.surgeryPreset = true;
        this.othertabs = false;
        this.inputBox = [{ name: 'Instruction 1', instructionsInput: '', inputInstruction: '' }];
        this.treatBox = ['Instruction 1'];
        this.medicationStatus[0].status = true;
        // this.investigationStatus[0].status = true
        // this.numberOfInvestigationSelected = this.numberOfInvestigationSelected + 1
        this.treatmentStatus = [
            { name: 'Lifestyle Changes', status: false, SpecialInstruction: null, lifestyle: null },
            { name: 'Physiotherapy', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' },
            { name: 'Plaster', status: false, SpecialInstruction: null, Injury_Area: 'Injury Area', plaster_type: null, Duration: 'Duration' },
            { name: 'Fomentation', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' },
            { name: 'Gargle', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] },
            { name: 'Dressing', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] },
            { name: 'Bandage', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] },
            { name: 'Other', status: false, SpecialInstruction: null, treat: null }
        ];
        // this.treatmentStatus[0].status = true
        // this.totalOtherTreatment = 1
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
            med_name: []
        });
        /*------For Sphere-------*/
        var i = 0;
        var l = '0.00';
        while (i <= 13.50) {
            this.spherePositive.push(l);
            i = i + 0.25;
            l = i.toFixed(2);
        }
        var j = 0;
        var k = '0.00';
        while (j >= -13.50) {
            this.sphereNegative.push(k);
            j = j - 0.25;
            k = j.toFixed(2);
        }
        /*--------For Cylinder---------*/
        var c = 0;
        var cl;
        while (c < 5.00) {
            c = c + 0.25;
            cl = c.toFixed(2);
            this.cylinderPositive.push(cl);
        }
        var cs = 0;
        var ck;
        while (cs > -5.00) {
            cs = cs - 0.25;
            ck = cs.toFixed(2);
            this.cylinderNegative.push(ck);
        }
        /*--------For Axis---------*/
        var a = 1;
        while (a <= 180) {
            this.axisNumber.push(a);
            a = a + 1;
        }
        /*--------For Add---------*/
        var ad = 0;
        var adl;
        while (ad < 3.50) {
            ad = ad + 0.25;
            adl = ad.toFixed(2);
            this.addNumber.push(adl);
            // this.addNumber.push(adl);
        }
        //medication harman
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
        this.investigation = {};
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
        this.rightOD = {};
        // this.rightOD.sphere = '--.--'
        // this.rightOD.cylinder = '-.--'
        // this.rightOD.axis = '---'
        // this.rightOD.add = '-.--'
        // this.rightOD.pd = '--.-'
        this.rightOD.sphere = 0;
        this.rightOD.cylinder = 0;
        this.rightOD.axis = 0;
        this.rightOD.add = 0;
        this.rightOD.pd = 0;
        this.leftOD = {};
        this.leftOD.sphere = 0;
        this.leftOD.cylinder = 0;
        this.leftOD.axis = 0;
        this.leftOD.add = 0;
        this.leftOD.pd = 0;
        this.finalRightOD = {};
        this.finalLeftOD = {};
        // this.surgryTab(0);
        this.spo_range = [];
        var valueSpo = 80;
        while (valueSpo < 100) {
            this.spo_range.push(valueSpo);
            valueSpo++;
        }
        this.temperature_range = [];
        var valueTem = 97;
        while (valueTem < 107) {
            this.temperature_range.push(valueTem);
            valueTem++;
        }
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
        this.rbs_range = [];
        var valueRbs = 50;
        while (valueRbs < 401) {
            this.rbs_range.push(valueRbs);
            valueRbs++;
        }
        this.quantity_range = [];
        var value = 1;
        while (value < 21) {
            this.quantity_range.push(value);
            value++;
        }
        this.doctorClinicalObservation = [];
        this.doctorSymptomsDB = [];
        this.doctorDiagnosisDB = [];
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
        this.doctorOtherTreatmentDB = [];
        this.doctorOtherTreatmentBandageDB = [];
        this.doctorOtherTreatmentOtherDB = [];
        this.doctorOtherTreatmentGargleDB = [];
        this.doctorOtherTreatmentDressingDB = [];
        this.pathologySuggestionDB = [];
        this.xraySuggestionDB = [];
        this.ultraSoundSuggestionDB = [];
        this.dopplerSuggestionDB = [];
        this.ecgSuggestionDB = [];
        this.eegSuggestionDB = [];
        this.tmtSuggestionDB = [];
        this.echoSuggestionDB = [];
        this.ctScanSuggestionDB = [];
        this.mriSuggestionDB = [];
        this.nerveSuggestionDB = [];
        this.audioSuggestionDB = [];
        this.mammograaphySuggestionDB = [];
        this.boneSuggestionDB = [];
        this.eyeSuggestionDB = [];
        this.lungSuggestionDB = [];
        this.otherSuggestionDB = [];
        this.instructionsSavedDB = [];
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
        this.precondlength = 0;
        this.medicationPresetShow = false;
        this.instructionPresetShow = false;
        this.surgeryPresetShow = false;
        this.treatmentpreset = true;
        this.otherTreatmentPresetShow = false;
        this.investigationPresetShow = false;
        this.totalMedicationPresetSelected = 0;
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
        this.savedPrescriptionPadArray = [];
        this.otherPre = [];
        this.refer_status = false;
        this.AllPrescriptionData();
        this.setAllShiftsForPreview();
        // this.doTranslation("translated_doctorName")
        // this.doTranslation("translated_clinicName")
        // this.doTranslation("translated_appointmentText")
        // this.doTranslation("translated_emergencyText")
        // this.doTranslation("translated_treatmentText")
        // this.doTranslation("translated_servicesText")
        // this.doTranslation("translated_footer")
        this.socket = __WEBPACK_IMPORTED_MODULE_10_socket_io_client__(__WEBPACK_IMPORTED_MODULE_9__environments_environment_prod__["a" /* environment */].socket);
        if (this.consultingPatient.temp) {
            this.bodyIndicator.temp = this.consultingPatient.temp;
        }
        if (this.consultingPatient.pulse) {
            this.bodyIndicator.pulse = this.consultingPatient.pulse;
        }
        if (this.consultingPatient.bp) {
            this.bodyIndicator.sys = this.consultingPatient.bp;
        }
        if (this.consultingPatient.dia) {
            this.bodyIndicator.dia = this.consultingPatient.dia;
        }
        if (this.consultingPatient.rbs) {
            this.bodyIndicator.rbs = this.consultingPatient.rbs;
        }
        if (this.consultingPatient.spo) {
            this.bodyIndicator.spo = this.consultingPatient.spo;
        }
        this.setFields("bodyIndicators");
        var currentYear = new Date().getFullYear();
        this.experience = currentYear - parseInt(this.doctorData.practicing_since);
        this.UpdateConsultationInProgress();
    };
    DashboardPrescriptionPadOffComponent.prototype.UpdateConsultationInProgress = function () {
        var _this = this;
        var presc_id;
        console.log(this.consultingPatient);
        if (this.consultingPatient.ID) {
            presc_id = this.consultingPatient.ID;
        }
        else {
            presc_id = this.consultingPatient.id;
        }
        var object = {
            itemId: this.doctorData.itemId,
            reg_id: presc_id,
            registration_id: this.consultingPatient.id,
            presc_id: this.consultingPatient.ID
        };
        this.userService.UpdateConsultationInProgress(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                localStorage['doctorDetails'] = JSON.stringify(data.data);
                _this.socket.emit('patientSelected', {
                    room_id: _this.doctorData.smart_assistant_id
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        /////////////////SOCKET ON//////////////////////        
        this.loading = true;
        var object = {
            itemId: this.doctorData.itemId,
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
    DashboardPrescriptionPadOffComponent.prototype.getClass = function (i) {
        if (this.prescList[i].status == true) {
            return 'active';
        }
        else {
            return '';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.removeTreatbox = function () {
        if (this.treatBox.length > 0) {
            this.treatBox.splice(this.treatBox.length - 1, 1);
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.medicaTab = function (i, data) {
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
    DashboardPrescriptionPadOffComponent.prototype.mediClass = function (i) {
        if (this.medicationStatus[i].status == true) {
            return 'active';
        }
        else {
            return '';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.treatTab = function (i) {
        if (this.treatmentStatus[i].status == false) {
            if (this.totalOtherTreatment < 4) {
                this.treatab = i;
                this.treatmentStatus[i].status = !this.treatmentStatus[i].status;
                // if (i != 7) {
                this.totalOtherTreatment = this.totalOtherTreatment + 1;
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
        }
        console.log(this.totalOtherTreatment);
    };
    DashboardPrescriptionPadOffComponent.prototype.treatClass = function (i) {
        if (this.treatmentStatus[i].status == true) {
            return 'active';
        }
        else {
            return '';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.invesClass = function (i) {
        if (this.investigationStatus[i].status == true) {
            return 'active';
        }
        else {
            return '';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.incrementTimer = function () {
        if (this.seconds < 59) {
            this.seconds = this.seconds + 1;
        }
        else {
            this.seconds = 0;
            this.minutes = this.minutes + 1;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.prescListStatusChange = function (i) {
        this.prescList[i].status = !this.prescList[i].status;
        if (this.prescList[i].status == true) {
            this.prescList1.push(this.prescList[i]);
        }
        else {
            for (var ii = 0; ii < this.prescList1.length; ii++) {
                if (this.prescList1[ii].item == this.prescList[i].item) {
                    this.prescList1.splice(ii, 1);
                    return;
                }
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.saveSideBarFields = function () {
        var _this = this;
        this.prescList2 = [];
        for (var i = 0; i < this.prescList.length; i++) {
            if (this.prescList[i].status == true) {
                this.prescList2.push(this.prescList[i]);
            }
        }
        var object = {
            doctor_id: this.doctorData.itemId,
            prescription_fields: this.prescList2
        };
        console.log(object);
        this.userService.AddDoctorPrescriptionFields(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.getDoctorPrescriptionFields(_this.doctorData.itemId);
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.AddDoctorSurgeryArray = function () {
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
    DashboardPrescriptionPadOffComponent.prototype.cancelSideBarFields = function () {
        this.prescList1 = [];
        for (var i = 0; i < this.prescList2.length; i++) {
            this.prescList1.push(this.prescList2[i]);
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.setPopUpValues = function (data, type, i) {
        if (type == 'preconditions' && i != 9) {
            var length = this.precondlength + this.otherPre.length;
            console.log(this.precondlength, this.otherPre.length);
            var text = this.preCondMdlArray[i].text;
            if (data.status == false) {
                if (length <= 3) {
                    this.preCondSelected.push(text);
                    this.precondlength = this.precondlength + 1;
                    this.preCondMdlArray[i].status = true;
                }
                else {
                    this.toastr.warning("Maximum items can be 4", "Warning");
                }
            }
            else {
                var index = this.preCondSelected.indexOf(text);
                this.precondlength = this.precondlength - 1;
                this.preCondMdlArray[i].status = false;
                if (index > -1) {
                    this.preCondSelected.splice(index, 1);
                }
            }
        }
        else if (type == 'allergy') {
            if (data.status == false) {
                var Allergylength;
                if (this.otherAllergy) {
                    Allergylength = this.allergySelected.length + this.otherAllergy.length;
                }
                else {
                    Allergylength = this.allergySelected.length;
                }
                if (Allergylength <= 3) {
                    if (data.purpose != 'more') {
                        this.allergySelected.push(data.text);
                        data.status = true;
                    }
                    else { }
                }
                else {
                    data.status = false;
                    this.toastr.warning("Maximum items can be 4", "Warning");
                    // this.preCondMdlArray[i].status = false;
                }
            }
            else {
                var index = this.allergySelected.indexOf(data.text);
                data.status = false;
                if (index > -1) {
                    this.allergySelected.splice(index, 1);
                }
            }
        }
        console.log(this.allergySelected);
        console.log(this.bodyIndicatorSelected);
        console.log(this.preCondSelected);
    };
    // setPopUpValues(data, type, i) {
    //     if (data) {
    //         var purpose = data.purpose;
    //         var text = data.text;
    //         var dataIndex = i;
    //         data.status = !data.status;
    //     }
    //     if (type == 'preconditions') {
    //         if (data.status == true) {
    //             if (this.precondlength <= 3) {
    //                 this.precondlength = this.precondlength + 1
    //                 if (purpose != 'more') {
    //                     this.preCondSelected.push(text);
    //                 } else {
    //                     this.preCondMdlArray[i].status = !this.preCondMdlArray[i].status
    //                 }
    //             } else {
    //                 this.toastr.warning("Maximum items can be 4", "Warning")
    //                 this.preCondMdlArray[i].status = false;
    //             }
    //         } else {
    //             var index = this.preCondSelected.indexOf(text);
    //             if (index > -1) {
    //                 this.preCondSelected.splice(index, 1);
    //                 this.precondlength = this.precondlength - 1
    //             }
    //         }
    //     } else if (type == 'allergy') {
    //         if (data.status == true) {
    //             var Allergylength
    //             if (this.otherAllergy) {
    //                 Allergylength = this.allergySelected.length + this.otherAllergy.length
    //             } else {
    //                 Allergylength = this.allergySelected.length
    //             }
    //             if (Allergylength <= 3) {
    //                 if (purpose != 'more') {
    //                     this.allergySelected.push(text);
    //                 } else {}
    //             } else {
    //                 data.status = false;
    //                 this.toastr.warning("Maximum items can be 4", "Warning")
    //                 // this.preCondMdlArray[i].status = false;
    //             }
    //         } else {
    //             var index = this.allergySelected.indexOf(text);
    //             if (index > -1) {
    //                 this.allergySelected.splice(index, 1);
    //             }
    //         }
    //     }
    //     console.log(this.allergySelected);
    //     console.log(this.bodyIndicatorSelected);
    //     console.log(this.preCondSelected);
    // }
    DashboardPrescriptionPadOffComponent.prototype.yesform = function () {
        if (this.condition == true) {
            this.condition = false;
        }
        else {
            this.condition = true;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.precmodalclick = function (i) {
        this.precmodalActive = i;
    };
    DashboardPrescriptionPadOffComponent.prototype.precClass = function (i) {
        if (i == this.precmodalActive) {
            return 'active';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.findingPresets = function () {
        if (this.findPresets == true) {
            this.findPresets = false;
        }
        else {
            this.findPresets = true;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.symPresets = function () {
        if (this.symptomspreset == true) {
            this.symptomspreset = false;
        }
        else {
            this.symptomspreset = true;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.diagPresets = function () {
        if (this.diagnosispreset == true) {
            this.diagnosispreset = false;
        }
        else {
            this.diagnosispreset = true;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.instrucPresets = function () {
        this.instructionpreset = !this.instructionpreset;
    };
    DashboardPrescriptionPadOffComponent.prototype.addTextbox = function (index) {
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
    DashboardPrescriptionPadOffComponent.prototype.removeTextbox = function (i) {
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
    DashboardPrescriptionPadOffComponent.prototype.treatPresets = function () {
        if (this.treatmentpreset == true) {
            this.treatmentpreset = false;
        }
        else {
            this.treatmentpreset = true;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.addTreatbox = function () {
        var i = 3, j;
        if (this.treatBox.length < i) {
            j = this.treatBox.length + 1;
            this.treatBox.push('Instruction ' + j);
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.medicatPresets = function () {
        if (this.medicationpreset == true) {
            this.medicationpreset = false;
        }
        else {
            this.medicationpreset = true;
        }
    };
    // medicaTab(i) {
    //     this.medicatab = i
    // }
    // mediClass(i) {
    //     if (i == this.medicatab) {
    //         return 'active'
    //     } else if (i < this.medicatab) {
    //         return 'completed'
    //     }
    // }
    DashboardPrescriptionPadOffComponent.prototype.prescField = function () {
        if (this.showhideaddfiled == 'activemorefield') {
            this.showhideaddfiled = '';
        }
        else {
            this.showhideaddfiled = 'activemorefield';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.findWithAttr = function (array, attr, value) {
        for (var i = 0; i < array.length; i += 1) {
            if (array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    };
    DashboardPrescriptionPadOffComponent.prototype.setFields = function (flag) {
        var _this = this;
        if (flag == 'preconditions') {
            this.preConditionComplete = true;
            if (this.preCondSelected.length <= 4) {
                this.preCondSelected = [];
                this.precondlength = 0;
                for (var j = 0; j < this.preCondMdlArray.length; j++) {
                    if (this.preCondMdlArray[j].status == true) {
                        this.preCondSelected.push(this.preCondMdlArray[j].text);
                        this.precondlength++;
                    }
                }
                this.finalPreConditions = [];
                if (this.otherPre.length > 0) {
                    var newArray = [];
                    for (var i = 0; i < this.otherPre.length; i++) {
                        newArray.push(this.otherPre[i].value);
                    }
                    this.finalPreConditions = this.finalPreConditions.concat(newArray);
                }
                for (var i = 0; i < this.preCondSelected.length; i++) {
                    this.finalPreConditions.push(this.preCondSelected[i]);
                    this.SaveOtherTreatmentSuggestions('Pre Condition', this.finalPreConditions[i]);
                }
                this.GetSavedSuggestions('Pre Condition');
                this.doTranslation("translated_PreCondHeading");
            }
        }
        else if (flag == 'allergy') {
            this.allergyComplete = true;
            if (this.allergySelected.length <= 4) {
                console.log("dsad");
                this.allergySelected = [];
                for (var i = 0; i < this.AllergyArray.length; i++) {
                    for (var j = 0; j < this.AllergyArray[i].allergySource.length; j++) {
                        if (this.AllergyArray[i].allergySource[j].status == true) {
                            this.allergySelected.push(this.AllergyArray[i].allergySource[j].text);
                        }
                    }
                    this.AllergyArray[i];
                }
                this.finalAllergy = [];
                if (this.otherAllergy && this.otherAllergy.length > 0) {
                    var newArray = [];
                    for (var i = 0; i < this.otherAllergy.length; i++) {
                        newArray.push(this.otherAllergy[i].value);
                    }
                    this.finalAllergy = this.finalAllergy.concat(newArray);
                }
                for (var i = 0; i < this.allergySelected.length; i++) {
                    this.finalAllergy.push(this.allergySelected[i]);
                    this.SaveOtherTreatmentSuggestions('Allergy', this.finalAllergy[i]);
                }
                this.GetSavedSuggestions('Allergy');
                this.doTranslation("translated_allergyHeading");
            }
        }
        else if (flag == 'bodyIndicators') {
            this.bodyIndicatorSelected = [];
            if (this.bodyIndicator.temp != 'Select') {
                if (this.bodyIndicatorSelected.indexOf('Temp: ' + this.bodyIndicator.temp + 'F') == -1) {
                    this.bodyIndicatorSelected.push('Temp: ' + this.bodyIndicator.temp + 'F');
                }
            }
            if (this.bodyIndicator.sys != 'Select' && this.bodyIndicator.dia != 'Select') {
                if (this.bodyIndicatorSelected.indexOf('BP: ' + this.bodyIndicator.sys + '/' + this.bodyIndicator.dia) == -1) {
                    this.bodyIndicatorSelected.push('BP: ' + this.bodyIndicator.sys + '/' + this.bodyIndicator.dia + 'mmHg');
                }
            }
            if (this.bodyIndicator.pulse != 'Select') {
                if (this.bodyIndicatorSelected.indexOf('Pulse: ' + this.bodyIndicator.pulse) == -1) {
                    this.bodyIndicatorSelected.push('Pulse: ' + this.bodyIndicator.pulse + 'pm');
                }
            }
            if (this.bodyIndicator.spo != 'Select') {
                if (this.bodyIndicatorSelected.indexOf('SpO2: ' + this.bodyIndicator.spo) == -1) {
                    this.bodyIndicatorSelected.push('SpO2: ' + this.bodyIndicator.spo + "%");
                }
            }
            if (this.bodyIndicator.rbs != 'Select') {
                if (this.bodyIndicatorSelected.indexOf('RBS: ' + this.bodyIndicator.rbs) == -1) {
                    this.bodyIndicatorSelected.push('RBS: ' + this.bodyIndicator.rbs + "mg/dL");
                }
            }
            if (!this.bodyIndicatorComplete) {
                this.bodyIndicatorComplete = true;
                this.doTranslation("translated_BIHeading");
            }
        }
        else if (flag == 'findings') {
            if (this.itemsfinding.length > 0) {
                this.findingsSelected = this.itemsfinding;
                console.log(this.findingsSelected);
                if (!this.findingsComplete) {
                    this.findingsComplete = true;
                }
                this.saveClinicalObservations();
                if (this.filter) {
                    for (var i = 0; i < this.findingsSelected.length; i++) {
                        if (this.findingsSelected[i].value != null && this.findingsSelected[i].value != '') {
                            this.SaveDoctorOtherPreset('Patient Complaints', this.findingsSelected[i].value);
                        }
                    }
                }
                this.GetDoctorOtherPreset('Patient Complaints');
                this.doTranslation("translated_PTHeading");
            }
        }
        else if (flag == 'symptoms') {
            if (this.itemsymptoms.length > 0) {
                this.symptomsSelected = this.itemsymptoms;
                console.log(this.symptomsSelected);
                if (!this.symptomsComplete) {
                    this.symptomsComplete = true;
                }
                this.saveSymptoms();
                if (this.filterSymptoms) {
                    for (var i = 0; i < this.symptomsSelected.length; i++) {
                        if (this.symptomsSelected[i].value != null && this.symptomsSelected[i].value != '') {
                            this.SaveDoctorOtherPreset('Symptoms', this.symptomsSelected[i].value);
                        }
                    }
                }
                this.GetDoctorOtherPreset('Symptoms');
                this.doTranslation("translated_sympHeading");
            }
        }
        else if (flag == 'diagnosis') {
            if (this.itemsdiagnosis.length > 0) {
                this.diagnosisSelected = this.itemsdiagnosis;
                console.log(this.diagnosisSelected);
                if (!this.diagnosisComplete) {
                    this.diagnosisComplete = true;
                }
                this.saveDiagnosis();
                if (this.filterDiagnosis) {
                    for (var i = 0; i < this.diagnosisSelected.length; i++) {
                        if (this.diagnosisSelected[i].value != null && this.diagnosisSelected[i].value != '') {
                            this.SaveDoctorOtherPreset('Diagnosis', this.diagnosisSelected[i].value);
                        }
                    }
                }
                this.doTranslation("translated_diagnosisHeading");
            }
        }
        else if (flag == 'instructions') {
            console.log(this.inputBox);
            this.instructionsComplete = false;
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
                    this.instructionsSelected = [];
                    for (var i = 0; i < this.inputBox.length; i++) {
                        if (this.instructionPresetShow == true) {
                            if (this.presentNameInstrcutions != undefined && this.presentNameInstrcutions != '' && this.presentNameInstrcutions != null) {
                                if (this.presentNameInstrcutions.trim().length < 1) {
                                    this.toastr.warning("Invalid preset name", "Warning");
                                    boolean = true;
                                    return;
                                }
                            }
                            else {
                                this.toastr.warning("Invalid preset name", "Warning");
                                boolean = true;
                                return;
                            }
                            this.SaveDoctorPresetArray(this.presentNameInstrcutions.trim(), this.inputBox, 'Instructions');
                        }
                        this.instructionsSelected.push(this.inputBox[i].instructionsInput);
                        this.SaveOtherTreatmentSuggestions('Instruction', this.inputBox[i].instructionsInput);
                        this.instructionPresetShow = false;
                        this.presentNameInstrcutions = null;
                    }
                    this.instructionsComplete = true;
                    this.doTranslation("translated_instHeading");
                }
            }
        }
        else if (flag == 'investigation') {
            if (this.investigationPresetShow == true) {
                if (this.presentNameInvestigation != undefined && this.presentNameInvestigation != '' && this.presentNameInvestigation != null) {
                    if (this.presentNameInvestigation.trim().length < 1) {
                        this.toastr.warning("Invalid preset name", "Warning");
                        boolean = true;
                        return;
                    }
                }
                else {
                    this.toastr.warning("Invalid preset name", "Warning");
                    boolean = true;
                    return;
                }
                // for (var i = 0; i < this.investigationArray.length; i++) {
                this.SaveDoctorPresetArray(this.presentNameInvestigation.trim(), this.investigationArray, 'Investigation');
                // this.investigationArray[i]
                // }
            }
            this.investigationIndicatorComplete = true;
            this.investigationPresetShow = false;
            this.presentNameInvestigation = null;
            this.doTranslation("translated_invHeading");
        }
        else if (flag == 'surgery') {
            var boolean = false;
            this.surgeryComplete = false;
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
            if (this.surgeryPresetShow == true) {
                if (this.presentNameSurgery != undefined && this.presentNameSurgery != '' && this.presentNameSurgery != null) {
                    if (this.presentNameSurgery.trim().length < 1) {
                        this.toastr.warning("Invalid preset name", "Warning");
                        boolean = true;
                        return;
                    }
                }
                else {
                    this.toastr.warning("Invalid preset name", "Warning");
                    boolean = true;
                    return;
                }
                var array = [];
                for (var i = 0; i < this.suregeryOptionsTop.length; i++) {
                    if (this.suregeryOptionsTop[i].status == true) {
                        array.push(this.suregeryOptionsTop[i]);
                    }
                }
                if (array.length > 0) {
                    this.SaveDoctorPresetArray(this.presentNameSurgery.trim(), array, 'Surgery');
                }
            }
            if (boolean == true) {
                this.surgerySelectedArray = [];
                for (var i = 0; i < this.suregeryOptionsTop.length; i++) {
                    for (var j = 0; j < this.suregeryOptionsTop[i].div.length; j++) {
                        if (this.suregeryOptionsTop[i].status == true) {
                            this.surgerySelectedArray.push(Object.assign({}, this.suregeryOptionsTop[i].div[j]));
                            // this.SaveOtherTreatmentSuggestions(this.suregeryOptionsTop[i].name, this.suregeryOptionsTop[i].div[j].procedure_name[0].value)
                        }
                    }
                }
                this.surgeryComplete = true;
                this.surgeryPresetShow = false;
                this.presentNameSurgery = null;
                this.AddDoctorSurgeryArray();
                this.SaveUniqueMedicinesForAnalytics('Surgery', this.suregeryOptionsTop);
                this.doTranslation("translated_surgHeading");
            }
            console.log(this.surgerySelectedArray);
        }
        else if (flag == 'follow') {
            this.followDaysComplete = false;
            if (this.followUpDays != 0) {
                this.finalfollowUpDays = this.followUpDays;
                this.followUpDate.setDate(new Date().getDate() + this.finalfollowUpDays);
                var options = { month: 'short' };
                this.followUpMonth = this.followUpDate.toLocaleDateString("en-IN", options);
                this.followUpDay = this.followUpDate.getDate();
                this.followUpYear = this.followUpDate.getFullYear();
                this.followDaysComplete = true;
            }
        }
        else if (flag == 'vaccination') {
            this.vaccinationComplete = false;
            this.finalCurrentVaccinationArray = [];
            this.finalDueVaccinationArray = [];
            if (this.currentVaccinationComplete == false && this.dueVaccinationComplete == false) {
                this.toastr.warning("No value selected", "Warning");
            }
            else {
                if (this.currentVaccinationComplete == true) {
                    for (var i = 0; i < this.tempCurrentVaccinationArray.length; i++) {
                        this.finalCurrentVaccinationArray.push(this.tempCurrentVaccinationArray[i]);
                    }
                }
                if (this.dueVaccinationComplete == true) {
                    for (var i = 0; i < this.tempDueVaccinationArray.length; i++) {
                        this.finalDueVaccinationArray.push(this.tempDueVaccinationArray[i]);
                    }
                }
                // else {
                // this.vaccinationDate = null
                // }
                this.vaccinationComplete = true;
                this.doTranslation("translated_VaccinationHeading");
            }
        }
        else if (flag == 'medication') {
            this.tempMedicationArray = [];
            this.medicationComplete = false;
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
                            this.SaveUniqueMedicinesForAnalytics(this.medication.tab[i].name, this.medication.tab[i].med_name[0].value);
                            // if (this.medication.tab[i].med_info) {
                            //     if (this.medication.tab[i].med_info.length > 0) {
                            //         this.saveMedicationSuggestion(this.medication.tab[i].name + "Info", this.medication.tab[i].med_info[0].value)
                            //     }
                            // }
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
                            this.SaveUniqueMedicinesForAnalytics(this.medication.cap[i].name, this.medication.cap[i].med_name[0].value);
                            // if (this.medication.cap[i].med_info) {
                            //     if (this.medication.cap[i].med_info.length > 0) {
                            //         this.saveMedicationSuggestion(this.medication.cap[i].name + "Info", this.medication.cap[i].med_info[0].value)
                            //     }
                            // }
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
                            this.SaveUniqueMedicinesForAnalytics(this.medication.syp[i].name, this.medication.syp[i].med_name[0].value);
                            // if (this.medication.syp[i].med_info) {
                            //     if (this.medication.syp[i].med_info.length > 0) {
                            //         this.saveMedicationSuggestion(this.medication.syp[i].name + "Info", this.medication.syp[i].med_info[0].value)
                            //     }
                            // }
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
                            this.SaveUniqueMedicinesForAnalytics(this.medication.susp[i].name, this.medication.susp[i].med_name[0].value);
                            // if (this.medication.susp[i].med_info) {
                            //     if (this.medication.susp[i].med_info.length > 0) {
                            //         this.saveMedicationSuggestion(this.medication.susp[i].name + "Info", this.medication.susp[i].med_info[0].value)
                            //     }
                            // }
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
                            this.SaveUniqueMedicinesForAnalytics(this.medication.emulsn[i].name, this.medication.emulsn[i].med_name[0].value);
                            // if (this.medication.emulsn[i].name.med_info) {
                            //     if (this.medication.emulsn[i].name.med_info.length > 0) {
                            //         this.saveMedicationSuggestion(this.medication.emulsn[i].name + "Info", this.medication.emulsn[i].med_info[0].value)
                            //     }
                            // }
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
                            this.SaveUniqueMedicinesForAnalytics(this.medication.solution[i].name, this.medication.solution[i].med_name[0].value);
                            // if (this.medication.solution[i].med_info) {
                            //     if (this.medication.solution[i].med_info.length > 0) {
                            //         this.saveMedicationSuggestion(this.medication.solution[i].name + "Info", this.medication.solution[i].med_info[0].value)
                            //     }
                            // }
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
                            this.SaveUniqueMedicinesForAnalytics(this.medication.injection[i].name, this.medication.injection[i].med_name[0].value);
                            // if (this.medication.injection[i].med_info) {
                            //     if (this.medication.injection[i].med_info.length > 0) {
                            //         this.saveMedicationSuggestion(this.medication.injection[i].name + "Info", this.medication.injection[i].med_info[0].value)
                            //     }
                            // }
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
                            this.SaveUniqueMedicinesForAnalytics(this.medication.mouthwash[i].name, this.medication.mouthwash[i].med_name[0].value);
                            // if (this.medication.mouthwash[i].med_info) {
                            //     if (this.medication.mouthwash[i].med_info.length > 0) {
                            //         this.saveMedicationSuggestion(this.medication.mouthwash[i].name + "Info", this.medication.mouthwash[i].med_info[0].value)
                            //     }
                            // }
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
                            this.SaveUniqueMedicinesForAnalytics(this.medication.powder[i].name, this.medication.powder[i].med_name[0].value);
                            // if (this.medication.powder[i].med_info) {
                            //     if (this.medication.powder[i].med_info.length > 0) {
                            //         this.saveMedicationSuggestion(this.medication.powder[i].name + "Info", this.medication.powder[i].med_info[0].value)
                            //     }
                            // }
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
                            this.SaveUniqueMedicinesForAnalytics(this.medication.cream[i].name, this.medication.cream[i].med_name[0].value);
                            // if (this.medication.cream[i].med_info) {
                            //     if (this.medication.cream[i].med_info.length > 0) {
                            //         this.saveMedicationSuggestion(this.medication.cream[i].name + "Info", this.medication.cream[i].med_info[0].value)
                            //     }
                            // }
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
                            this.SaveUniqueMedicinesForAnalytics(this.medication.gel[i].name, this.medication.gel[i].med_name[0].value);
                            // if (this.medication.gel[i].med_info) {
                            //     if (this.medication.gel[i].med_info.length > 0) {
                            //         this.saveMedicationSuggestion(this.medication.gel[i].name + "Info", this.medication.gel[i].med_info[0].value)
                            //     }
                            // }
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
                            this.SaveUniqueMedicinesForAnalytics(this.medication.drops[i].name, this.medication.drops[i].med_name[0].value);
                            // if (this.medication.drops[i].med_info) {
                            //     if (this.medication.drops[i].med_info.length > 0) {
                            //         this.saveMedicationSuggestion(this.medication.drops[i].name + "Info", this.medication.drops[i].med_info[0].value)
                            //     }
                            // }
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
                            this.SaveUniqueMedicinesForAnalytics(this.medication.aerosols[i].name, this.medication.aerosols[i].med_name[0].value);
                            // if (this.medication.aerosols[i].med_info) {
                            //     if (this.medication.aerosols[i].med_info.length > 0) {
                            //         this.saveMedicationSuggestion(this.medication.aerosols[i].name + "Info", this.medication.aerosols[i].med_info[0].value)
                            //     }
                            // }
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
                            this.SaveUniqueMedicinesForAnalytics(this.medication.lotion[i].name, this.medication.lotion[i].med_name[0].value);
                            // if (this.medication.lotion[i].med_info) {
                            //     if (this.medication.lotion[i].med_info.length > 0) {
                            //         this.saveMedicationSuggestion(this.medication.lotion[i].name + "Info", this.medication.lotion[i].med_info[0].value)
                            //     }
                            // }
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
                            this.SaveUniqueMedicinesForAnalytics('Oitment', this.medication.ointment[i].med_name[0].value);
                            // if (this.medication.ointment[i].med_info) {
                            //     if (this.medication.ointment[i].med_info.length > 0) {
                            //         this.saveMedicationSuggestion('Oitment' + "Info", this.medication.ointment[i].med_info[0].value)
                            //     }
                            // }
                        }
                    }
                }
                if (boolean == false) {
                    if (this.totalMedicationPresetSelected > 0) {
                        for (var i = 0; i < this.doctorPresetArray.length; i++) {
                            if (this.doctorPresetArray[i].status && this.doctorPresetArray[i].status == true) {
                                for (var j = 0; j < this.doctorPresetArray[i].newPresetArray.length; j++) {
                                    this.tempMedicationArray.push(this.doctorPresetArray[i].newPresetArray[j]);
                                }
                            }
                        }
                    }
                    if (this.medicationPresetShow == true) {
                        if (this.presentNameMedication != undefined && this.presentNameMedication != '' && this.presentNameMedication != null) {
                            if (this.presentNameMedication.trim().length < 1) {
                                this.toastr.warning("Invalid preset name", "Warning");
                                boolean = true;
                                return;
                            }
                            else {
                                var object = {
                                    preset_name: this.presentNameMedication.trim(),
                                    preset_array: this.tempMedicationArray,
                                    doctor_id: this.doctorData.itemId
                                };
                                console.log(object);
                                this.userService.SaveDoctorPreset(object).subscribe(function (data) {
                                    console.log(data);
                                    if (data.response == true) {
                                        _this.medicationPresetShow = false;
                                        _this.presentNameMedication = null;
                                        _this.GetDoctorPreset();
                                    }
                                    else {
                                        // this.toastr.error(data.message, "Error")
                                        if (data.message == "Data already exists") {
                                            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__confirmation_popup_confirmation_dialog_update_confirmation_dialog_update_component__["a" /* ConfirmationDialogUpdateComponent */], {});
                                            dialogRef.afterClosed().subscribe(function (result) {
                                                console.log('The dialog was closed');
                                                if (result == "yes") {
                                                    var object = {
                                                        preset_name: _this.presentNameMedication.trim(),
                                                        preset_array: _this.tempMedicationArray,
                                                        doctor_id: _this.doctorData.itemId,
                                                        update_status: true
                                                    };
                                                    console.log(object);
                                                    _this.userService.SaveDoctorPreset(object).subscribe(function (data) {
                                                        if (data.response == true) {
                                                            _this.medicationPresetShow = false;
                                                            _this.presentNameMedication = null;
                                                            _this.GetDoctorPreset();
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
                                    }
                                }, function (err) {
                                    console.log(err);
                                });
                            }
                        }
                        else {
                            this.toastr.warning("Invalid preset name", "Warning");
                            boolean = true;
                            return;
                        }
                    }
                    this.medicationComplete = true;
                    $("#medicationModal").modal("hide");
                    this.doTranslation("translated_medication");
                }
            }
        }
        else if (flag == 'eye_pres') {
            this.eyePresComplete = false;
            if (this.rightOD.sphere == null) {
                this.rightOD.sphere = 0;
            }
            if (this.rightOD.cylinder == null) {
                this.rightOD.cylinder = 0;
            }
            if (this.rightOD.axis == null) {
                this.rightOD.axis = 0;
            }
            if (this.rightOD.add == null) {
                this.rightOD.add = 0;
            }
            if (this.rightOD.pd == null) {
                this.rightOD.pd = 0;
            }
            if (this.rightOD.pd == null) {
                this.rightOD.pd = 0;
            }
            if (this.leftOD.sphere == null) {
                this.leftOD.sphere = 0;
            }
            if (this.leftOD.cylinder == null) {
                this.leftOD.cylinder = 0;
            }
            if (this.leftOD.axis == null) {
                this.leftOD.axis = 0;
            }
            if (this.leftOD.add == null) {
                this.leftOD.add = 0;
            }
            if (this.leftOD.pd == null) {
                this.leftOD.pd = 0;
            }
            if (parseFloat(this.rightOD.sphere) == 0 && parseFloat(this.rightOD.cylinder) == 0 &&
                parseFloat(this.rightOD.axis) == 0 && parseFloat(this.rightOD.add) == 0 &&
                parseFloat(this.rightOD.pd) == 0 && parseFloat(this.rightOD.pd) == 0 &&
                parseFloat(this.leftOD.sphere) == 0 && parseFloat(this.leftOD.cylinder) == 0 &&
                parseFloat(this.leftOD.axis) == 0 && parseFloat(this.leftOD.add) == 0 &&
                parseFloat(this.leftOD.pd) == 0) {
                this.toastr.warning("Invalid values of eye prescription", "Warning");
            }
            else {
                if ((parseFloat(this.rightOD.sphere) < -20 || parseFloat(this.rightOD.sphere) > 20) ||
                    (parseFloat(this.leftOD.sphere) < -20 || parseFloat(this.leftOD.sphere) > 20)) {
                    this.toastr.warning("Sphere values should be between -20 to 20", "Warning");
                    return;
                }
                else if ((parseFloat(this.rightOD.cylinder) < 0 || parseFloat(this.rightOD.cylinder) > 5) ||
                    (parseFloat(this.leftOD.cylinder) < 0 || parseFloat(this.leftOD.cylinder) > 5)) {
                    this.toastr.warning("Cylinder values should be between 0 to 5", "Warning");
                    return;
                }
                else if ((parseFloat(this.rightOD.axis) < 0 || parseFloat(this.rightOD.axis) > 180) ||
                    (parseFloat(this.leftOD.axis) < 0 || parseFloat(this.leftOD.axis) > 180)) {
                    this.toastr.warning("Axis values should be between 1 to 180", "Warning");
                    return;
                }
                else if (parseFloat(this.rightOD.add) < 0 || parseFloat(this.rightOD.add) > 3.5 ||
                    parseFloat(this.leftOD.add) < 0 || parseFloat(this.leftOD.add) > 3.5) {
                    this.toastr.warning("Add values should be between 0.25 to 3.5", "Warning");
                    return;
                }
                else if ((parseFloat(this.rightOD.pd) < 0 || parseFloat(this.rightOD.pd) > 100) ||
                    (parseFloat(this.leftOD.pd) < 0 || parseFloat(this.leftOD.pd) > 100)) {
                    this.toastr.warning("Pupillary distance values should be between 0 to 100", "Warning");
                    return;
                }
                else {
                    $("#eyeModal").modal("hide");
                    this.eyePresComplete = true;
                    // if (parseFloat(this.rightOD.add) > 0) {
                    //     this.rightOD.add = "+" + this.rightOD.add
                    // }
                    // if (parseFloat(this.leftOD.add) > 0) {
                    //     this.leftOD.add = "+" + this.leftOD.add
                    // }
                    this.finalRightOD = Object.assign({}, this.rightOD);
                    this.finalLeftOD = Object.assign({}, this.leftOD);
                    this.doTranslation("translated_eyeHeading");
                }
            }
        }
        else if (flag == 'treatment') {
            this.treatmentComplete = false;
            this.treatmentArray = [];
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
                            else {
                                for (var ii = 0; ii < this.treatmentStatus[0].lifestyle.length; ++ii) {
                                    this.SaveOtherTreatmentSuggestions('Lifestyle', this.treatmentStatus[0].lifestyle[ii].value);
                                }
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
                            else {
                                this.SaveOtherTreatmentSuggestions('Gargle', this.treatmentStatus[4].med_name[0].value);
                            }
                        }
                        if (i == 5) {
                            if (this.treatmentStatus[5].Frequency == 'Frequency' || this.treatmentStatus[5].Duration == 'Duration' || this.treatmentStatus[5].med_name == null || this.treatmentStatus[5].med_name.length < 1) {
                                boolean = true;
                                this.toastr.warning("Invalid values in Dressing", "Warning");
                                return;
                            }
                            else {
                                this.SaveOtherTreatmentSuggestions('Dressing', this.treatmentStatus[5].med_name[0].value);
                            }
                        }
                        if (i == 6) {
                            if (this.treatmentStatus[6].Frequency == 'Frequency' || this.treatmentStatus[6].Duration == 'Duration' || this.treatmentStatus[6].med_name == null || this.treatmentStatus[6].med_name.length < 1) {
                                boolean = true;
                                this.toastr.warning("Invalid values in Bandage", "Warning");
                                return;
                            }
                            else {
                                this.SaveOtherTreatmentSuggestions('Bandage', this.treatmentStatus[6].med_name[0].value);
                            }
                        }
                        if (i == 7) {
                            for (var ii = 0; ii < this.treatmentStatus[7].div.length; ii++) {
                                if (this.treatmentStatus[7].div[ii].Frequency == 'Frequency' || this.treatmentStatus[7].div[ii].Duration == 'Duration' || this.treatmentStatus[7].div[ii].med_name == null || this.treatmentStatus[7].div[ii].med_name.length < 1) {
                                    boolean = true;
                                    this.toastr.warning("Invalid values in Other", "Warning");
                                    return;
                                }
                                else {
                                    this.SaveOtherTreatmentSuggestions('Other', this.treatmentStatus[7].div[ii].med_name[0].value);
                                }
                            }
                        }
                        if (this.otherTreatmentPresetShow == true) {
                            if (this.presentNameOtherTreatment != undefined && this.presentNameOtherTreatment != '' && this.presentNameOtherTreatment != null) {
                                if (this.presentNameOtherTreatment.trim().length < 1) {
                                    this.toastr.warning("Invalid preset name", "Warning");
                                    boolean = true;
                                    return;
                                }
                            }
                            else {
                                this.toastr.warning("Invalid preset name", "Warning");
                                boolean = true;
                                return;
                            }
                        }
                    }
                }
                if (boolean == false) {
                    var presetArray = [];
                    this.treatmentComplete = true;
                    for (var i = 0; i < this.treatmentStatus.length; i++) {
                        if (this.treatmentStatus[i].status == true) {
                            if (i == 2) {
                                for (var j = 0; j < this.treatmentStatus[2].div.length; j++) {
                                    this.treatmentArray.push(Object.assign({}, this.treatmentStatus[i].div[j]));
                                }
                            }
                            else if (i != 7) {
                                this.treatmentArray.push(Object.assign({}, this.treatmentStatus[i]));
                            }
                            else {
                                for (var j = 0; j < this.treatmentStatus[7].div.length; j++) {
                                    this.treatmentArray.push(Object.assign({}, this.treatmentStatus[7].div[j]));
                                }
                            }
                            if (this.otherTreatmentPresetShow == true) {
                                presetArray.push(this.treatmentStatus[i]);
                            }
                        }
                    }
                    if (this.otherTreatmentPresetShow == true) {
                        this.SaveDoctorPresetArray(this.presentNameOtherTreatment.trim(), presetArray, 'Other Treatments');
                    }
                    console.log(this.treatmentArray);
                    this.otherTreatmentPresetShow = false;
                    this.presentNameOtherTreatment = null;
                    this.doTranslation("translated_OTHeading");
                }
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getclass = function (state) {
        if (state == 'preconditions') {
            if (this.preConditionComplete) {
                return "active";
            }
            else {
                return "";
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.changedTitle = function (va) {
        this.testValue = va.target.innerHTML;
        console.log(this.testValue);
        //alert(va.target.innerHTML)
    };
    DashboardPrescriptionPadOffComponent.prototype.addPresets = function (flag, preset) {
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
    DashboardPrescriptionPadOffComponent.prototype.removePresets = function (flag, preset) {
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
    DashboardPrescriptionPadOffComponent.prototype.selectPreset = function (type, preset) {
        preset.status = !preset.status;
        if (type == 'findings') {
            if (preset.status) {
                var index = this.itemsfinding.findIndex(function (p) { return p.value == preset.value; });
                if (index == -1) {
                    if (this.itemsfinding.length < 4) {
                        this.itemsfinding.push({
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
                var index = this.itemsfinding.findIndex(function (p) { return p.value == preset.value; });
                if (index > -1) {
                    this.itemsfinding.splice(index, 1);
                }
            }
        }
        else if (type == 'symptoms') {
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
        else if (type == 'diagnosis') {
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
    DashboardPrescriptionPadOffComponent.prototype.showVal = function (data) {
        data.text = this.testValue;
        data.status = true;
        console.log(data);
    };
    DashboardPrescriptionPadOffComponent.prototype.invesTab = function (i) {
        if (this.investigationStatus[i].status == false) {
            if (this.numberOfInvestigationSelected < 4) {
                this.investigationtab = i;
                this.investigationStatus[i].status = !this.investigationStatus[i].status;
                this.numberOfInvestigationSelected = this.numberOfInvestigationSelected + 1;
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
    DashboardPrescriptionPadOffComponent.prototype.invesPresets = function () {
        this.investigationpreset = !this.investigationpreset;
    };
    DashboardPrescriptionPadOffComponent.prototype.surgeryPresets = function () {
        this.surgeryPreset = !this.surgeryPreset;
    };
    DashboardPrescriptionPadOffComponent.prototype.surgryTab = function (i) {
        if (this.totalSurgeryOptionsSelected > 2) {
            this.toastr.warning("Maximum items can be 3", "Warning");
        }
        else {
            this.suregeryOptions[i].status1 = true;
            if (this.suregeryOptionsTop.length < 1) {
                this.suregeryOptions[i].status = true;
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
    DashboardPrescriptionPadOffComponent.prototype.surgryTabTop = function (i) {
        this.suregeryOptionsTop[i].status = !this.suregeryOptionsTop[i].status;
    };
    DashboardPrescriptionPadOffComponent.prototype.surgeryOptionTopStatusChange = function (i) {
        var _this = this;
        this.suregeryOptionsTop[i].status1 = false;
        setTimeout(function () {
            _this.suregeryOptionsTop[i].status = false;
            _this.suregeryOptionsTop[i].div = [];
            _this.suregeryOptions.push(_this.suregeryOptionsTop[i]);
            _this.suregeryOptionsTop.splice(i, 1);
            _this.totalSurgeryOptionsSelected = _this.totalSurgeryOptionsSelected - 1;
        }, 1000);
    };
    DashboardPrescriptionPadOffComponent.prototype.surgryClass = function (i) {
        if (this.suregeryOptionsTop[i].status == true) {
            return 'active';
        }
        else {
            return '';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.showhideTab = function () {
        this.othertabs = !this.othertabs;
    };
    DashboardPrescriptionPadOffComponent.prototype.addInstructionValue = function (data, i) {
        if (data.trim().length > 0) {
            this.inputBox[i].instructionsInput = data;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.doneInvestigation = function () {
        this.investigationArray = [];
        for (var i = 0; i < this.investigationStatus.length; i++) {
            if (this.investigationStatus[i].status == true && this.investigationStatus[i].model != '' && this.investigationStatus[i].model != null) {
                this.investigationArray.push({
                    name: this.investigationStatus[i].name,
                    values: this.investigationStatus[i].model
                });
                if (this.investigationStatus[i].name != 'Mammography' &&
                    // this.investigationStatus[i].name != 'Bone Densitometry' &&                    
                    this.investigationStatus[i].name != 'ECG' && this.investigationStatus[i].name != 'EEG' &&
                    this.investigationStatus[i].name != 'TMT' && this.investigationStatus[i].name != 'Echo' &&
                    // this.investigationStatus[i].name != 'Nerve Test' && this.investigationStatus[i].name != 'Audiometry' &&
                    // this.investigationStatus[i].name != 'Lung Test' && 
                    this.investigationStatus[i].name != 'Uroflowmetry') {
                    for (var j = 0; j < this.investigationStatus[i].model.length; j++) {
                        this.saveInvestigationSuggestion(this.investigationStatus[i].name, this.investigationStatus[i].model[j]);
                        this.SaveUniqueMedicinesForAnalyticsInvestigation(this.investigationStatus[i].name, this.investigationStatus[i].model[j].value);
                    }
                }
                else {
                    this.saveInvestigationSuggestion(this.investigationStatus[i].name, this.investigationStatus[i].model);
                    this.SaveUniqueMedicinesForAnalyticsInvestigation(this.investigationStatus[i].name, this.investigationStatus[i].model);
                }
            }
            else if (this.investigationStatus[i].name == 'Uroflowmetry' && this.investigationStatus[i].status == true) {
                this.investigationArray.push({
                    name: 'Uroflowmetry',
                    values: 'Uroflowmetry'
                });
            }
        }
        this.setFields('investigation');
        console.log(this.investigationArray);
    };
    DashboardPrescriptionPadOffComponent.prototype.popupClass = function (i) {
        this.classActive = i;
        this.selectedValue = this.prescList[i].item;
    };
    // getclasssecond(item) {
    //     if (this.selectedIndexDataValue.map(it => {
    //             return it.headings
    //         }).indexOf(item) != -1) {
    //         return true
    //     }
    // }
    DashboardPrescriptionPadOffComponent.prototype.addprescfield = function (j) {
        this.ppclass = j;
        this.selectedIndex = j;
        this.classActive = null;
        this.selectedValue = null;
    };
    // savebuttonNew(i, flag) {
    //     if (flag) {
    //         let temp = []
    //         //  alert(this.prescList[this.classActive].item);
    //         temp.push({
    //             headings: this.prescList[i].item,
    //             width: this.prescList[i].width,
    //             float: this.prescList[i].float,
    //             modalId: this.prescList[i].targetId,
    //             targetId: this.prescList[i].targetId,
    //             selectedStatus: true
    //         })
    //         if (this.prescList[i].structure == 'three' || this.prescList[i].structure == 'two') {
    //             if (this.selectedIndexDataValueForShowleft.map(it => {
    //                     return it.structure
    //                 }).indexOf(this.prescList[i].structure) == -1) {
    //                 this.selectedIndexDataValueForShowleft.push({
    //                     key: temp,
    //                     structure: this.prescList[i].structure
    //                 })
    //             } else {
    //                 let index = this.selectedIndexDataValueForShowleft.map(it => {
    //                     return it.structure
    //                 }).indexOf(this.prescList[i].structure)
    //                 this.selectedIndexDataValueForShowleft[index].key.push(temp[0])
    //                 // this.selectedIndexDataValueForShowleft.push(
    //                 //    {
    //                 //       key:temp,
    //                 //       structure:this.prescList[this.classActive].structure
    //                 //    })
    //             }
    //         } else {
    //             this.selectedIndexDataValueForShowleft.push({
    //                 key: temp,
    //                 structure: this.prescList[i].structure
    //             })
    //         }
    //         if (this.selectedIndexDataValue.map(it => {
    //                 return it.headings
    //             }).indexOf(this.prescList[i].item) == -1) {
    //             this.selectedIndexDataValue[this.selectedIndex].headings = this.prescList[i].item
    //             this.selectedIndexDataValue[this.selectedIndex].width = this.prescList[i].width
    //             this.selectedIndexDataValue[this.selectedIndex].float = this.prescList[i].float
    //             this.selectedIndexDataValue[this.selectedIndex].targetId = this.prescList[i].targetId
    //             this.selectedIndexDataValue[this.selectedIndex].modalId = this.prescList[i].targetId
    //             this.selectedIndexDataValue[this.selectedIndex].selectedStatus = true
    //             // this.selectedIndexDataValueForShowleft=this.selectedIndexDataValue.filter(item=>item.selectedStatus==true && item.float=='left')
    //             // this.selectedIndexDataValueForShowright=this.selectedIndexDataValue.filter(item=>item.selectedStatus==true && item.float=='right')
    //             // code...
    //         }
    //         // this.selectedIndexDataValue.push({headings:this.prescList[this.classActive].item,selectedStatus:true,field:"Add Field",values:[],width:this.prescList[this.classActive].wdtih})
    //         /////////////////////////////
    //         var boolean = false
    //         for (var k = 0; k < this.prescList.length; k++) {
    //             if (this.prescList[k].field == this.selectedValue) {
    //                 console.log("cant add already present")
    //                 boolean = true
    //                 break;
    //             }
    //         }
    //         if (boolean == false) {
    //             this.prescList[this.ppclass].status = true;
    //             this.prescList[i].status1 = true;
    //             this.prescList[this.ppclass].field = this.prescList[i].item;
    //         }
    //         console.log(this.prescList)
    //     } else {
    //         this.selectedIndexDataValue.splice(this.findWithAttr(this.selectedIndexDataValue, 'headings', this.prescList[i].item, ), 1);
    //         alert(JSON.stringify(this.selectedIndexDataValue));
    //     }
    //     alert(JSON.stringify(this.selectedIndexDataValueForShowleft));
    // }
    // savebutton() {
    //     let temp = []
    //     //  alert(this.prescList[this.classActive].item);
    //     temp.push({
    //         headings: this.prescList[this.classActive].item,
    //         width: this.prescList[this.classActive].width,
    //         float: this.prescList[this.classActive].float,
    //         modalId: this.prescList[this.classActive].targetId,
    //         targetId: this.prescList[this.classActive].targetId,
    //         selectedStatus: true
    //     })
    //     if (this.prescList[this.classActive].structure == 'three' || this.prescList[this.classActive].structure == 'two') {
    //         if (this.selectedIndexDataValueForShowleft.map(it => {
    //                 return it.structure
    //             }).indexOf(this.prescList[this.classActive].structure) == -1) {
    //             this.selectedIndexDataValueForShowleft.push({
    //                 key: temp,
    //                 structure: this.prescList[this.classActive].structure
    //             })
    //         } else {
    //             let index = this.selectedIndexDataValueForShowleft.map(it => {
    //                 return it.structure
    //             }).indexOf(this.prescList[this.classActive].structure)
    //             this.selectedIndexDataValueForShowleft[index].key.push(temp[0])
    //             // this.selectedIndexDataValueForShowleft.push(
    //             //    {
    //             //       key:temp,
    //             //       structure:this.prescList[this.classActive].structure
    //             //    })
    //         }
    //         // code...
    //     } else {
    //         this.selectedIndexDataValueForShowleft.push({
    //             key: temp,
    //             structure: this.prescList[this.classActive].structure
    //         })
    //     }
    //     //   
    //     /////////////////////////////////
    //     if (this.selectedIndexDataValue.map(it => {
    //             return it.headings
    //         }).indexOf(this.prescList[this.classActive].item) == -1) {
    //         this.selectedIndexDataValue[this.selectedIndex].headings = this.prescList[this.classActive].item
    //         this.selectedIndexDataValue[this.selectedIndex].width = this.prescList[this.classActive].width
    //         this.selectedIndexDataValue[this.selectedIndex].float = this.prescList[this.classActive].float
    //         this.selectedIndexDataValue[this.selectedIndex].targetId = this.prescList[this.classActive].targetId
    //         this.selectedIndexDataValue[this.selectedIndex].modalId = this.prescList[this.classActive].targetId
    //         this.selectedIndexDataValue[this.selectedIndex].selectedStatus = true
    //         // this.selectedIndexDataValueForShowleft=this.selectedIndexDataValue.filter(item=>item.selectedStatus==true && item.float=='left')
    //         // this.selectedIndexDataValueForShowright=this.selectedIndexDataValue.filter(item=>item.selectedStatus==true && item.float=='right')
    //         // code...
    //     }
    //     // this.selectedIndexDataValue.push({headings:this.prescList[this.classActive].item,selectedStatus:true,field:"Add Field",values:[],width:this.prescList[this.classActive].wdtih})
    //     /////////////////////////////
    //     var boolean = false
    //     for (var i = 0; i < this.prescList.length; i++) {
    //         if (this.prescList[i].field == this.selectedValue) {
    //             console.log("cant add already present")
    //             boolean = true
    //             break;
    //         }
    //     }
    //     if (boolean == false) {
    //         this.prescList[this.ppclass].status = true;
    //         this.prescList[this.classActive].status1 = true;
    //         this.prescList[this.ppclass].field = this.prescList[this.classActive].item;
    //     }
    //     console.log(this.prescList)
    // }
    DashboardPrescriptionPadOffComponent.prototype.removeOther = function (data, type, index) {
        this.preCondMdlArray.splice(index, 1);
        // console.log(this.preCondSelected)
        // console.log(data)
    };
    DashboardPrescriptionPadOffComponent.prototype.addMoreTab = function (data) {
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
    DashboardPrescriptionPadOffComponent.prototype.removeMoreTab = function (data, i) {
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
    DashboardPrescriptionPadOffComponent.prototype.addTextBoxSuregery = function (i, j) {
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
    DashboardPrescriptionPadOffComponent.prototype.removeTextBoxSuregery = function (i, j) {
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
            this.surgryTabTop(i);
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.saveFollowUp = function (data) {
        if (this.followUpDays == data) {
            this.followUpDays = 0;
        }
        else {
            this.followUpDays = data;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getFollowUpClass = function (data) {
        if (data == this.followUpDays) {
            return 'active';
        }
        else {
            return '';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.vaccination = function (data) {
        if (this.vaccination_type == 'current') {
            var index = this.currentVaccinationArray.indexOf(data);
            if (index > -1) {
                this.currentVaccinationArray.splice(index, 1);
            }
            else {
                if (this.currentVaccinationArray.length < 4) {
                    this.currentVaccinationArray.push(data);
                }
                else {
                    this.toastr.warning("Maximum values can be 4 only", "Warning");
                }
            }
        }
        else if (this.vaccination_type == 'due') {
            var index = this.dueVaccinationArray.indexOf(data);
            if (index > -1) {
                this.dueVaccinationArray.splice(index, 1);
            }
            else {
                if (this.dueVaccinationArray.length < 4) {
                    this.dueVaccinationArray.push(data);
                }
                else {
                    this.toastr.warning("Maximum values can be 4 only", "Warning");
                }
            }
        }
        console.log(this.currentVaccinationArray);
        console.log(this.dueVaccinationArray);
    };
    DashboardPrescriptionPadOffComponent.prototype.selectVaccination = function (type) {
        this.vaccination_type = type;
        if (this.vaccination_type == 'current') {
            this.currentVaccinationArray = [];
        }
        else if (this.vaccination_type == 'due') {
            this.dueVaccinationArray = [];
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getClassVaccination = function (data) {
        if (this.vaccination_type == 'current') {
            if (this.tempCurrentVaccinationArray.length > 0) {
                this.currentVaccinationArray = this.tempCurrentVaccinationArray;
            }
            if (this.currentVaccinationArray.map(function (it) { return it; }).indexOf(data) != -1) {
                return 'active';
            }
            else {
                return '';
            }
        }
        else {
            if (this.tempDueVaccinationArray.length > 0) {
                this.dueVaccinationArray = this.tempDueVaccinationArray;
            }
            if (this.dueVaccinationArray.map(function (it) { return it; }).indexOf(data) != -1) {
                return 'active';
            }
            else {
                return '';
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.saveVaccination = function () {
        this.tempCurrentVaccinationArray = this.currentVaccinationArray;
        this.tempDueVaccinationArray = this.dueVaccinationArray;
        this.currentVaccinationComplete = false;
        this.dueVaccinationComplete = false;
        if (this.tempCurrentVaccinationArray.length > 0) {
            this.currentVaccinationComplete = true;
        }
        if (this.tempDueVaccinationArray.length > 0) {
            this.dueVaccinationComplete = true;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.openFrequencyModal = function (data) {
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
    DashboardPrescriptionPadOffComponent.prototype.openFrequencyModalFromMed = function (type, data) {
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
    DashboardPrescriptionPadOffComponent.prototype.selectFrequency = function (data) {
        this.tempFrequency = data;
    };
    DashboardPrescriptionPadOffComponent.prototype.getFrequencyClass = function (data) {
        if (data == this.tempFrequency) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.selectFrequencySpecial = function (data) {
        if (data == this.tempFrequencySpecial || data == this.currentFrequency.specialInstruction) {
            this.tempFrequencySpecial = null;
            this.currentFrequency.specialInstruction = null;
        }
        else {
            this.tempFrequencySpecial = data;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getFrequencyClassSpecial = function (data) {
        if (data == this.tempFrequencySpecial) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.saveFrequency = function () {
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
    DashboardPrescriptionPadOffComponent.prototype.selectDuration = function (data) {
        this.tempDuration = data;
    };
    DashboardPrescriptionPadOffComponent.prototype.getDurationClass = function (data) {
        if (this.tempDuration == data) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.saveDuration = function () {
        if (this.tempDuration != null && this.tempDuration != '' && this.tempDuration != 'Duration') {
            this.currentFrequency.duration = this.tempDuration;
        }
        //     if (this.currentFrequency.dosage) {
        //         $("#dosageModal").modal("show");
        //     }
        //     if (this.currentFrequency.quantity) {
        //         $("#quantityModal").modal("show");
        //     }
        //     if (this.currentFrequency.mode) {
        //         $("#injectionModal").modal("show");
        //     }
    };
    DashboardPrescriptionPadOffComponent.prototype.getClassDosage = function (data) {
        if (this.tempDosage == data) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.selectDosage = function (data) {
        this.tempDosage = data;
    };
    DashboardPrescriptionPadOffComponent.prototype.saveDosage = function () {
        if (this.tempDosage != null && this.tempDosage != '' && this.tempDosage != 'Dosage') {
            this.currentFrequency.dosage = this.tempDosage;
            $("#durationModal").modal("show");
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getClassInjection = function (data) {
        if (this.tempInjection == data) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.injectionSelected = function (data) {
        this.tempInjection = data;
    };
    DashboardPrescriptionPadOffComponent.prototype.saveInjection = function (data) {
        if (this.tempInjection != null && this.tempInjection != '' && this.tempInjection != 'Mode') {
            this.currentFrequency.mode = this.tempInjection;
            $("#durationModal").modal("show");
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.addTempQuantity = function (data) {
        this.tempQuantity = data;
        // if (data > 0 && data < 20) {
        //     this.currentFrequency.quantity = data
        //     // $("#durationModal").modal("show");
        // } else {
        //     this.toastr.warning("Quantity ranges between 1 to 20", "Warning")
        // }
    };
    DashboardPrescriptionPadOffComponent.prototype.selectSphere = function (type, data) {
        if (type == 'right') {
            this.tempSphereRight = data;
        }
        else if (type == 'left') {
            this.tempSphereLeft = data;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getclassSphere = function (type, data) {
        if (type == 'right') {
            if (data == this.tempSphereRight) {
                return 'active';
            }
            else {
                return '';
            }
        }
        else if (type == 'left') {
            if (data == this.tempSphereLeft) {
                return 'active';
            }
            else {
                return '';
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.saveEyePresciption = function (type) {
        if (type == 'Sphere_R') {
            if (this.tempSphereRight != null) {
                this.rightOD.sphere = this.tempSphereRight;
            }
        }
        else if (type == 'Sphere_L') {
            if (this.tempSphereLeft != null) {
                this.leftOD.sphere = this.tempSphereLeft;
            }
        }
        else if (type == 'Cylinder_R') {
            if (this.tempCylinderRight != null) {
                this.rightOD.cylinder = this.tempCylinderRight;
            }
        }
        else if (type == 'Cylinder_L') {
            if (this.tempCylinderLeft != null) {
                this.leftOD.cylinder = this.tempCylinderLeft;
            }
        }
        else if (type == 'Axis_L') {
            if (this.tempAxisLeft != null) {
                this.leftOD.axis = this.tempAxisLeft;
            }
        }
        else if (type == 'Axis_R') {
            if (this.tempAxisRight != null) {
                this.rightOD.axis = this.tempAxisRight;
            }
        }
        else if (type == 'Add_L') {
            if (this.tempAddLeft != null) {
                this.leftOD.add = this.tempAddLeft;
            }
        }
        else if (type == 'Add_R') {
            if (this.tempAddRight != null) {
                this.rightOD.add = this.tempAddRight;
            }
        }
        else if (type == 'Pd_R') {
            if (this.tempPDRight != null) {
                this.rightOD.pd = this.tempPDRight;
            }
        }
        else if (type == 'Pd_L') {
            if (this.tempPDLeft != null) {
                this.leftOD.pd = this.tempPDLeft;
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.openModalFromEyePres = function () {
        this.eyePresComplete = false;
        this.finalRightOD = {};
        this.finalLeftOD = {};
        this.tempSphereRight = null;
        this.tempSphereLeft = null;
        this.tempCylinderRight = null;
        this.tempCylinderLeft = null;
        this.tempAxisRight = null;
        this.tempAxisLeft = null;
        this.tempAddRight = null;
        this.tempAddLeft = null;
        this.tempPDRight = null;
        this.tempPDLeft = null;
    };
    DashboardPrescriptionPadOffComponent.prototype.selectCylinder = function (type, data) {
        if (type == 'right') {
            this.tempCylinderRight = data;
        }
        else if (type == 'left') {
            this.tempCylinderLeft = data;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getclassCylinder = function (type, data) {
        if (type == 'right') {
            if (data == this.tempCylinderRight) {
                return 'active';
            }
            else {
                return '';
            }
        }
        else if (type == 'left') {
            if (data == this.tempCylinderLeft) {
                return 'active';
            }
            else {
                return '';
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getclassAxis = function (type, data) {
        if (type == 'right') {
            if (data == this.tempAxisRight) {
                return 'active';
            }
            else {
                return '';
            }
        }
        else if (type == 'left') {
            if (data == this.tempAxisLeft) {
                return 'active';
            }
            else {
                return '';
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.selectAxis = function (type, data) {
        if (type == 'right') {
            this.tempAxisRight = data;
        }
        else if (type == 'left') {
            this.tempAxisLeft = data;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getclassAdd = function (type, data) {
        if (type == 'right') {
            if (data == this.tempAddRight) {
                return 'active';
            }
            else {
                return '';
            }
        }
        else if (type == 'left') {
            if (data == this.tempAddLeft) {
                return 'active';
            }
            else {
                return '';
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.selectAdd = function (type, data) {
        if (type == 'right') {
            this.tempAddRight = data;
        }
        else if (type == 'left') {
            this.tempAddLeft = data;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.addTempPD = function (type, data) {
        if (type == 'right') {
            if (isNaN(data) || data > 100 || data < 0 || data == '') {
                this.toastr.warning("Invalid Pupillary Distance", "Warning");
            }
            else {
                this.tempPDRight = data;
            }
        }
        else if (type == 'left') {
            if (isNaN(data) || data > 100 || data < 0 || data == '') {
                this.toastr.warning("Invalid Pupillary Distance", "Warning");
            }
            else {
                this.tempPDLeft = data;
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getPrescList2Class = function (data) {
        if (data == 'Pre Condition') {
            if (this.preConditionComplete == true && this.finalPreConditions.length > 0) {
                return 'half-li active';
            }
            else {
                return 'half-li';
            }
        }
        else if (data == 'Allergy') {
            if (this.allergyComplete == true && this.finalAllergy.length > 0) {
                return 'half-li active';
            }
            else {
                return 'half-li';
            }
        }
        else if (data == 'Body Indicator') {
            if (this.bodyIndicatorComplete == true && this.bodyIndicatorSelected.length > 0) {
                return 'half-li active';
            }
            else {
                return 'half-li';
            }
        }
        else if (data == 'Patient Complaints') {
            if (this.findingsComplete == true && this.findingsSelected.length > 0) {
                return 'half-li active';
            }
            else {
                return 'half-li';
            }
        }
        else if (data == 'Symptoms') {
            if (this.symptomsComplete == true && this.symptomsSelected.length > 0) {
                return 'half-li active';
            }
            else {
                return 'half-li';
            }
        }
        else if (data == 'Diagnosis') {
            if (this.diagnosisComplete == true && this.diagnosisSelected.length > 0) {
                return 'half-li active';
            }
            else {
                return 'half-li';
            }
        }
        else if (data == 'Other Treatment') {
            if (this.treatmentComplete == true) {
                return 'half-li active';
            }
            else {
                return 'half-li';
            }
        }
        else if (data == 'Investigation') {
            if (this.investigationIndicatorComplete == true && this.investigationArray.length > 0) {
                return 'half-li active';
            }
            else {
                return 'half-li';
            }
        }
        else if (data == 'Surgery / Procedure') {
            if (this.surgeryComplete == true && this.surgerySelectedArray.length > 0) {
                return 'half-li active';
            }
            else {
                return 'half-li';
            }
        }
        else if (data == 'Eye Prescription') {
            if (this.eyePresComplete == true) {
                return 'half-li active';
            }
            else {
                return 'half-li';
            }
        }
        else if (data == 'Vaccination') {
            if (this.vaccinationComplete == true) {
                return 'half-li active';
            }
            else {
                return 'half-li';
            }
        }
        else if (data == 'Instructions') {
            if (this.instructionsComplete == true && this.instructionsSelected.length > 0) {
                return 'half-li active';
            }
            else {
                return 'half-li';
            }
        }
        else if (data == 'Medication') {
            if (this.medicationComplete == true) {
                return 'medication-li active';
            }
            else {
                return 'medication-li';
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.hideMedication = function () {
        this.medicationComplete = false;
    };
    DashboardPrescriptionPadOffComponent.prototype.deleteAndResetSelectedDiv = function (data) {
        console.log(data);
        if (data == 'Pre Condition') {
            this.preConditionComplete = false;
            this.preCondSelected = [];
            for (var i = 0; i < this.preCondMdlArray.length; i++) {
                this.preCondMdlArray[i].status = false;
            }
            this.precondlength = 0;
        }
        else if (data == 'Body Indicators') {
            this.bodyIndicatorSelected = [];
            this.bodyIndicatorComplete = false;
            this.bodyIndicator = {
                'temp': 'Select',
                'pulse': 'Select',
                'sys': 'Select',
                'dia': 'Select',
                'spo': 'Select',
                'rbs': 'Select'
            };
        }
        else if (data == 'Surgery / Procedure') {
            this.surgeryComplete = false;
            this.totalSurgeryOptionsSelected = 0;
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
            this.GetDoctorSurgeryArray(this.doctorData.itemId);
            // this.GetSurgerySuggestions('Cardiology')
            // this.GetSurgerySuggestions('ENT')
            // this.GetSurgerySuggestions('Dental')
            // this.GetSurgerySuggestions('Genito-Urinary')
            // this.GetSurgerySuggestions('Gynaecology/Obstetrics')
            // this.GetSurgerySuggestions('Neonatal')
            // this.GetSurgerySuggestions('Neurology')
            // this.GetSurgerySuggestions('Oncology')
            // this.GetSurgerySuggestions('Ophthalmology')
            // this.GetSurgerySuggestions('Orthopaedics')
            // this.GetSurgerySuggestions('Paediatric')
            // this.GetSurgerySuggestions('Vascular')
            this.surgeryPresetShow = false;
            for (var i = 0; i < this.presetArraySurgery.length; i++) {
                this.presetArraySurgery[i].status = false;
            }
        }
        else if (data == 'Vaccination') {
            this.vaccinationComplete = false;
            this.finalCurrentVaccinationArray = [];
            this.finalDueVaccinationArray = [];
            this.tempCurrentVaccinationArray = [];
            this.tempDueVaccinationArray = [];
            this.currentVaccinationComplete = false;
            this.dueVaccinationComplete = false;
            this.currentVaccinationArray = [];
            this.dueVaccinationArray = [];
            this.vaccinationDate = new Date();
        }
        else if (data == 'Medication') {
            this.medicationComplete = false;
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
            this.totalMedications = 0;
            this.medicationSavedArray = [];
            this.medicationStatus[0].status = true;
            this.investigationStatus[0].status = true;
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
            this.totalMedicationPresetSelected = 0;
            this.medicationPresetShow = false;
            for (var i = 0; i < this.doctorPresetArray.length; i++) {
                this.doctorPresetArray[i].status = false;
            }
        }
        else if (data == 'Instruction') {
            this.instructionsComplete = false;
            this.instructionsSelected = [];
            this.inputBox = [{ name: 'Instruction 1', instructionsInput: '', inputInstruction: '' }];
            this.instructionPresetShow = false;
            for (var j = 0; j < this.presetArrayInstruction.length; j++) {
                this.presetArrayInstruction[j].status = false;
            }
        }
        else if (data == 'Investigation') {
            this.investigationIndicatorComplete = false;
            this.investigationArray = [];
            this.numberOfInvestigationSelected = 0;
            this.investigationPresetShow = false;
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
            for (var i = 0; i < this.presetArrayInvestigation.length; i++) {
                this.presetArrayInvestigation[i].status = false;
            }
        }
        else if (data == 'Eye Prescription') {
            this.eyePresComplete = false;
            this.openModalFromEyePres();
            this.rightOD = {};
            this.rightOD.sphere = 0;
            this.rightOD.cylinder = 0;
            this.rightOD.axis = 0;
            this.rightOD.add = 0;
            this.rightOD.pd = 0;
            this.leftOD = {};
            this.leftOD.sphere = 0;
            this.leftOD.cylinder = 0;
            this.leftOD.axis = 0;
            this.leftOD.add = 0;
            this.leftOD.pd = 0;
            this.finalRightOD = {};
            this.finalLeftOD = {};
        }
        else if (data == 'Diagnosis') {
            this.diagnosisSelected = [];
            this.itemsdiagnosis = [];
            this.diagnosisComplete = false;
            for (var i = 0; i < this.diagnosisPresetArray.length; i++) {
                this.diagnosisPresetArray[i].status = false;
            }
        }
        else if (data == 'Allergy') {
            this.allergyComplete = false;
            this.allergySelected = [];
            this.finalAllergy = [];
            this.otherAllergy = [];
            this.AllergyArray = [{
                    'allergyName': 'Drug Allergy',
                    'allergySource': [{
                            'status': false,
                            'text': 'Aspirin'
                        }, {
                            'status': false,
                            'text': 'Ampicillin'
                        }, {
                            'status': false,
                            'text': 'Pain killer'
                        }, {
                            'status': false,
                            'text': 'Antibiotics'
                        }, {
                            'status': false,
                            'text': 'Tetracycline'
                        }, {
                            'status': false,
                            'text': 'Sulfa'
                        }]
                }, {
                    'allergyName': 'Food Allergy',
                    'allergySource': [{
                            'status': false,
                            'text': 'Chocolate'
                        }, {
                            'status': false,
                            'text': 'Egg'
                        }, {
                            'status': false,
                            'text': 'Fish'
                        }, {
                            'status': false,
                            'text': 'Milk'
                        }, {
                            'status': false,
                            'text': 'Nuts'
                        }, {
                            'status': false,
                            'text': 'Prawn'
                        }, {
                            'status': false,
                            'text': 'Meat'
                        }, {
                            'status': false,
                            'text': 'Sea Food'
                        }, {
                            'status': false,
                            'text': 'Spices'
                        }]
                }, {
                    'allergyName': 'Skin Allergy',
                    'allergySource': [{
                            'status': false,
                            'text': 'Urticaria'
                        }, {
                            'status': false,
                            'text': 'Rash'
                        }, {
                            'status': false,
                            'text': 'Sun'
                        }, {
                            'status': false,
                            'text': 'Anaphylaxis'
                        }, {
                            'status': false,
                            'text': 'Dye'
                        }, {
                            'status': false,
                            'text': 'Detergent'
                        }]
                }, {
                    'allergyName': 'Respiratory Allergy',
                    'allergySource': [{
                            'status': false,
                            'text': 'Dust'
                        }, {
                            'status': false,
                            'text': 'Pollen'
                        }, {
                            'status': false,
                            'text': 'Paint smell'
                        }, {
                            'status': false,
                            'text': 'Smoke'
                        }, {
                            'status': false,
                            'text': 'Perfume'
                        }, {
                            'status': false,
                            'text': 'Temp change'
                        }]
                }];
        }
        else if (data == 'Patient Complaints') {
            this.findingsSelected = [];
            this.itemsfinding = [];
            this.findingsComplete = false;
            for (var i = 0; i < this.findingPreSetVals.length; i++) {
                this.findingPreSetVals[i].status = false;
            }
        }
        else if (data == 'Symptoms') {
            this.symptomsSelected = [];
            this.symptomsComplete = false;
            this.itemsymptoms = [];
            for (var i = 0; i < this.symptomsPresetArray.length; i++) {
                this.symptomsPresetArray[i].status = false;
            }
        }
        else if (data == 'Follow-up') {
            this.finalfollowUpDays = 0;
            this.followUpDays = 0;
            this.followDaysComplete = false;
        }
        else if (data == 'Other Treatment') {
            this.treatmentComplete = false;
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
            // this.treatmentStatus[0].status = true
            this.tempTreatObject = null;
            this.tempTreatObjectIndex = null;
            this.tempTreatFrequency = null;
            this.tempTreatSpecialInstruction = null;
            this.tempTreatDuration = null;
            this.totalOtherTreatment = 0;
            this.treatmentArray = [];
            this.tempPlasterDivIndex = null;
            this.plaster_open_by_main = true;
            this.otherTreatmentPresetShow = false;
            for (var i = 0; i < this.presetArrayOtherTreatment.length; i++) {
                this.presetArrayOtherTreatment[i].status = false;
            }
        }
        this.resetClassPrecPreset();
    };
    //Other Treatment
    DashboardPrescriptionPadOffComponent.prototype.openTreatFrequencyModal = function (data, i) {
        console.log(data);
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
    DashboardPrescriptionPadOffComponent.prototype.openTreatFrequencyModal1 = function (data, i, j) {
        this.tempTreatObject = data;
        this.tempTreatObjectIndex = i;
        this.tempPlasterDivIndex = j;
        this.tempTreatFrequency = null;
        this.tempTreatSpecialInstruction = null;
        this.tempTreatDuration = null;
        this.plaster_open_by_main = false;
    };
    DashboardPrescriptionPadOffComponent.prototype.onAddMedNameOtherTreat = function (data, i) {
        // $("#treatfrequencyModal").modal("show");
        $("#combinedModal5").modal("show");
        this.openTreatFrequencyModal(data, i);
    };
    DashboardPrescriptionPadOffComponent.prototype.selectFromTreatFrequency = function (data) {
        this.tempTreatFrequency = data;
    };
    DashboardPrescriptionPadOffComponent.prototype.getTreatFrequencyModalClass = function (data) {
        if (data == this.tempTreatFrequency) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.selectFromTreatSpecialInstruction = function (data) {
        this.tempTreatSpecialInstruction = data;
    };
    DashboardPrescriptionPadOffComponent.prototype.getSpecialInstructionModalClass = function (data) {
        if (data == this.tempTreatSpecialInstruction) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.selectFromTreatDuration = function (data) {
        this.tempTreatDuration = data;
    };
    DashboardPrescriptionPadOffComponent.prototype.getDurationModalClass = function (data) {
        if (data == this.tempTreatDuration) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.tempSaveFrequency = function () {
        if (this.tempTreatSpecialInstruction != null) {
            this.tempTreatObject[this.tempTreatObjectIndex].SpecialInstruction = this.tempTreatSpecialInstruction;
        }
        if (this.tempTreatFrequency != null) {
            this.tempTreatObject[this.tempTreatObjectIndex].Frequency = this.tempTreatFrequency;
            $("#treatdurationModal").modal("show");
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.tempSaveDuration = function () {
        if (this.tempTreatDuration != null) {
            if (this.plaster_open_by_main == true) {
                this.tempTreatObject[this.tempTreatObjectIndex].Duration = this.tempTreatDuration;
            }
            else {
                this.treatmentStatus[this.tempTreatObjectIndex].div[this.tempPlasterDivIndex].Duration = this.tempTreatDuration;
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.setInjuryValue = function (data) {
        if (this.otherInj == null || this.otherInj == '' || this.otherInj.length < 1) {
            this.tempInjury = data;
        }
        // if (this.plaster_open_by_main == true) {
        //     this.treatmentStatus[2].Injury_Area = data
        // } else {
        //     this.treatmentStatus[2].div[this.tempPlasterDivIndex].Injury_Area = data
        // }
    };
    DashboardPrescriptionPadOffComponent.prototype.onAddOtherInj = function (data) {
        this.tempInjury = data[0].value;
        // this.treatmentStatus[2].div[this.tempPlasterDivIndex].Injury_Area = data[0].value    
    };
    DashboardPrescriptionPadOffComponent.prototype.onRemoveOtherInj = function () {
        this.tempInjury = null;
    };
    DashboardPrescriptionPadOffComponent.prototype.saveInjury = function () {
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
    DashboardPrescriptionPadOffComponent.prototype.getClassInjuryModal = function (data) {
        if (data == this.tempInjury) {
            return 'active-cel';
        }
        else {
            return '';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.hideOtherTreatment = function () {
        this.treatmentComplete = false;
    };
    DashboardPrescriptionPadOffComponent.prototype.hideOtherTreatmentFromSide = function (data) {
        if (data == 'Other Treatment') {
            this.treatmentComplete = false;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.onAddOtherTreat = function () {
        this.totalOtherTreatment = this.totalOtherTreatment + 1;
    };
    DashboardPrescriptionPadOffComponent.prototype.onRemoveOtherTreat = function () {
        this.totalOtherTreatment = this.totalOtherTreatment - 1;
    };
    DashboardPrescriptionPadOffComponent.prototype.addPlasterDiv = function () {
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
    DashboardPrescriptionPadOffComponent.prototype.addOtherDiv = function () {
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
    DashboardPrescriptionPadOffComponent.prototype.removePlasterDiv = function (i) {
        if (this.treatmentStatus[2].div.length > 1) {
            // if (this.treatmentStatus[2].div[i].i_presetValue) {
            //     var index = this.presetArrayOtherTreatment.findIndex(p => p.i_presetValue == this.treatmentStatus[2].div[i].i_presetValue);
            //     this.presetArrayOtherTreatment[index].i_presetLength = this.presetArrayOtherTreatment[index].i_presetLength - 1
            //     if (this.presetArrayOtherTreatment[index].i_presetLength == 0) {
            //         this.presetArrayOtherTreatment[index].status = false
            //     }
            // }
            if (this.treatmentStatus[2].div[i].i_presetLength) {
                this.treatmentStatus[2].div[i].i_presetLength = this.treatmentStatus[2].div[i].i_presetLength - 1;
                if (this.treatmentStatus[2].div[i].i_presetLength == 0) {
                    this.presetArrayOtherTreatment[this.treatmentStatus[2].div[i].i_presetValue].status = false;
                }
            }
            this.treatmentStatus[2].div.splice(i, 1);
            this.totalOtherTreatment = this.totalOtherTreatment - 1;
        }
        else {
            this.treatTab(2);
            // var index = this.presetArrayOtherTreatment.findIndex(p => p.i_presetValue == this.treatmentStatus[2].div[i].i_presetValue);
            // this.presetArrayOtherTreatment[index].status = false
            // this.treatmentStatus[2].status = false
            // this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[2].div.length
            // this.treatmentStatus[2].div = []
            // this.treatmentStatus[2].div.push({
            //     name: 'Plaster',
            //     status: false,
            //     SpecialInstruction: null,
            //     Injury_Area: 'Injury Area',
            //     plaster_type: null,
            //     Duration: 'Duration'
            // })
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.removeOtherDiv = function (i) {
        if (this.treatmentStatus[7].div.length > 1) {
            // if (this.treatmentStatus[7].div[i].i_presetValue) {
            //     var index = this.presetArrayOtherTreatment.findIndex(p => p.i_presetValue == this.treatmentStatus[7].i_presetValue);
            //     this.presetArrayOtherTreatment[index].i_presetLength = this.presetArrayOtherTreatment[index].i_presetLength - 1
            //     if (this.presetArrayOtherTreatment[index].i_presetLength == 0) {
            //         this.presetArrayOtherTreatment[index].status = false
            //     }
            // }
            if (this.treatmentStatus[7].div[i].i_presetLength) {
                this.treatmentStatus[7].div[i].i_presetLength = this.treatmentStatus[7].div[i].i_presetLength - 1;
                if (this.treatmentStatus[7].div[i].i_presetLength == 0) {
                    this.presetArrayOtherTreatment[this.treatmentStatus[7].div[i].i_presetValue].status = false;
                }
            }
            this.treatmentStatus[7].div.splice(i, 1);
            this.totalOtherTreatment = this.totalOtherTreatment - 1;
        }
        else {
            this.treatTab(7);
            // this.treatmentStatus[7].status = false
            // this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[7].div.length
            // this.treatmentStatus[7].div = []
            // this.treatmentStatus[7].div.push({
            //     name: 'Other',
            //     status: false,
            //     SpecialInstruction: null,
            //     Frequency: 'Frequency',
            //     Duration: 'Duration',
            //     med_name: []
            // })
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getDoctorPrescriptionFields = function (item) {
        var _this = this;
        this.userService.GetDoctorPrescriptionFields(item).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.prescList2 = data.data.prescription_fields;
                for (var i = 0; i < _this.prescList2.length; i++) {
                    for (var j = 0; j < _this.prescList.length; j++) {
                        if (_this.prescList2[i].item == _this.prescList[j].item) {
                            _this.prescList[j].status = true;
                        }
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.GetDoctorSurgeryArray = function (item) {
        var _this = this;
        this.userService.GetDoctorSurgeryArray(item).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.suregeryOptionsTop = data.data.suregeryOptionsTop;
                _this.suregeryOptions = data.data.suregeryOptions;
                _this.totalSurgeryOptionsSelected = _this.suregeryOptionsTop.length;
                console.log(_this.totalSurgeryOptionsSelected);
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.saveClinicalObservations = function () {
        var _this = this;
        var items = [];
        for (var i = 0; i < this.findingsSelected.length; i++) {
            if (this.findingsSelected[i].value != null && this.findingsSelected[i].value != '') {
                items.push(this.findingsSelected[i]);
            }
        }
        var object = {
            doctor_id: this.doctorData.itemId,
            findingsSelected: items
        };
        this.userService.SaveClinicalObservations(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.GetDoctorClinicalObservations(_this.doctorData.itemId);
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.GetDoctorClinicalObservations = function (item) {
        var _this = this;
        this.doctorClinicalObservation = [];
        this.userService.GetDoctorClinicalObservations(item).subscribe(function (data) {
            console.log(data);
            _this.doctorClinicalObservation = data.data;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.saveSymptoms = function () {
        var _this = this;
        var items = [];
        for (var i = 0; i < this.symptomsSelected.length; i++) {
            if (this.symptomsSelected[i].value != null && this.symptomsSelected[i].value != '') {
                items.push(this.symptomsSelected[i]);
            }
        }
        console.log(items);
        // this.SaveUniqueMedicinesForAnalytics('Symptoms', items)
        var object = {
            doctor_id: this.doctorData.itemId,
            findingsSelected: items
        };
        this.userService.SaveSymptoms(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.GetDoctorSymptoms(_this.doctorData.itemId);
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.GetDoctorSymptoms = function (item) {
        var _this = this;
        this.doctorSymptomsDB = [];
        this.userService.GetDoctorSymptoms(item).subscribe(function (data) {
            console.log(data);
            _this.doctorSymptomsDB = data.data;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.saveDiagnosis = function () {
        var _this = this;
        var items = [];
        for (var i = 0; i < this.diagnosisSelected.length; i++) {
            if (this.diagnosisSelected[i].value != null && this.diagnosisSelected[i].value != '') {
                items.push(this.diagnosisSelected[i]);
            }
        }
        this.SaveUniqueMedicinesForAnalytics('Diagnosis', items);
        var object = {
            doctor_id: this.doctorData.itemId,
            findingsSelected: items
        };
        this.userService.SaveDiagnosis(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.GetDoctorDiagnosis(_this.doctorData.itemId);
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.GetDoctorDiagnosis = function (item) {
        var _this = this;
        this.doctorDiagnosisDB = [];
        this.userService.GetDoctorDiagnosis(item).subscribe(function (data) {
            console.log(data);
            _this.doctorDiagnosisDB = data.data;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.GetMedicationSuggestions = function (type) {
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
                // for medication info 
                // else if (type == 'TabletInfo') {
                //     this.doctorMedicationTabletInfoDB = []
                //     this.doctorMedicationTabletInfoDB = data.data
                // } else if (type == 'CapsuleInfo') {
                //     this.doctorMedicationCapsuleInfoDB = []
                //     this.doctorMedicationCapsuleInfoDB = data.data
                // } else if (type == 'SyrupInfo') {
                //     this.doctorMedicationSyrupInfoDB = []
                //     this.doctorMedicationSyrupInfoDB = data.data
                // } else if (type == 'SuspensionInfo') {
                //     this.doctorMedicationSuspensionInfoDB = []
                //     this.doctorMedicationSuspensionInfoDB = data.data
                // } else if (type == 'EmulsionInfo') {
                //     this.doctorMedicationEmulsionInfoDB = []
                //     this.doctorMedicationEmulsionInfoDB = data.data
                // } else if (type == 'SolutionInfo') {
                //     this.doctorMedicationSolutionInfoDB = []
                //     this.doctorMedicationSolutionInfoDB = data.data
                // } else if (type == 'InjectionInfo') {
                //     this.doctorMedicationInjectionInfoDB = []
                //     this.doctorMedicationInjectionInfoDB = data.data
                // } else if (type == 'CreamInfo') {
                //     this.doctorMedicationCreamInfoDB = []
                //     this.doctorMedicationCreamInfoDB = data.data
                // } else if (type == 'OitmentInfo') {
                //     this.doctorMedicationOitmentInfoDB = []
                //     this.doctorMedicationOitmentInfoDB = data.data
                // } else if (type == 'GelInfo') {
                //     this.doctorMedicationGelInfoDB = []
                //     this.doctorMedicationGelInfoDB = data.data
                // } else if (type == 'LotionInfo') {
                //     this.doctorMedicationLotionInfoDB = []
                //     this.doctorMedicationLotionInfoDB = data.data
                // } else if (type == 'DropsInfo') {
                //     this.doctorMedicationDropsInfoDB = []
                //     this.doctorMedicationDropsInfoDB = data.data
                // } else if (type == 'AerosolsInfo') {
                //     this.doctorMedicationAerosolsInfoDB = []
                //     this.doctorMedicationAerosolsInfoDB = data.data
                // } else if (type == 'PowderInfo') {
                //     this.doctorMedicationPowderInfoDB = []
                //     this.doctorMedicationPowderInfoDB = data.data
                // } else if (type == 'MouthWashInfo') {
                //     this.doctorMedicationMouthwashInfoDB = []
                //     this.doctorMedicationMouthwashInfoDB = data.data
                // }
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.saveMedicationSuggestion = function (type, item) {
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
                // if (type == 'Tablet') {
                //     this.GetMedicationSuggestions('Tablet')
                // } else if (type == 'Capsule') {
                //     this.GetMedicationSuggestions('Capsule')
                // } else if (type == 'Syrup') {
                //     this.GetMedicationSuggestions('Syrup')
                // } else if (type == 'Suspension') {
                //     this.GetMedicationSuggestions('Suspension')
                // } else if (type == 'Emulsion') {
                //     this.GetMedicationSuggestions('Emulsion')
                // } else if (type == 'Solution') {
                //     this.GetMedicationSuggestions('Solution')
                // } else if (type == 'Injection') {
                //     this.GetMedicationSuggestions('Injection')
                // } else if (type == 'Cream') {
                //     this.GetMedicationSuggestions('Cream')
                // } else if (type == 'Oitment') {
                //     this.GetMedicationSuggestions('Oitment')
                // } else if (type == 'Gel') {
                //     this.GetMedicationSuggestions('Gel')
                // } else if (type == 'Lotion') {
                //     this.GetMedicationSuggestions('Lotion')
                // } else if (type == 'Drops') {
                //     this.GetMedicationSuggestions('Drops')
                // } else if (type == 'Aerosols') {
                //     this.GetMedicationSuggestions('Aerosols')
                // } else if (type == 'Powder') {
                //     this.GetMedicationSuggestions('Powder')
                // } else if (type == 'MouthWash') {
                //     this.GetMedicationSuggestions('MouthWash')
                // }
                // // medication info
                // else if (type == 'TabletInfo') {
                //     this.GetMedicationSuggestions('TabletInfo')
                // } else if (type == 'CapsuleInfo') {
                //     this.GetMedicationSuggestions('CapsuleInfo')
                // } else if (type == 'SyrupInfo') {
                //     this.GetMedicationSuggestions('SyrupInfo')
                // } else if (type == 'SuspensionInfo') {
                //     this.GetMedicationSuggestions('SuspensionInfo')
                // } else if (type == 'EmulsionInfo') {
                //     this.GetMedicationSuggestions('EmulsionInfo')
                // } else if (type == 'SolutionInfo') {
                //     this.GetMedicationSuggestions('SolutionInfo')
                // } else if (type == 'InjectionInfo') {
                //     this.GetMedicationSuggestions('InjectionInfo')
                // } else if (type == 'CreamInfo') {
                //     this.GetMedicationSuggestions('CreamInfo')
                // } else if (type == 'OitmentInfo') {
                //     this.GetMedicationSuggestions('OitmentInfo')
                // } else if (type == 'GelInfo') {
                //     this.GetMedicationSuggestions('GelInfo')
                // } else if (type == 'LotionInfo') {
                //     this.GetMedicationSuggestions('LotionInfo')
                // } else if (type == 'DropsInfo') {
                //     this.GetMedicationSuggestions('DropsInfo')
                // } else if (type == 'AerosolsInfo') {
                //     this.GetMedicationSuggestions('AerosolsInfo')
                // } else if (type == 'PowderInfo') {
                //     this.GetMedicationSuggestions('PowderInfo')
                // } else if (type == 'MouthWashInfo') {
                //     this.GetMedicationSuggestions('MouthWashInfo')
                // }
            }
            else {
                // this.toastr.error(data.message, "Error")
                // if (data.message == "Data already exists") {
                //     let dialogRef = this.dialog.open(ConfirmationDialogUpdateComponent, {});
                //     dialogRef.afterClosed().subscribe(result => {
                //         console.log('The dialog was closed');
                //         if (result == "yes") {
                //             let object = {
                //                 doctor_id: this.doctorData.itemId,
                //                 type: type,
                //                 observation: item,
                //                 update_status: true
                //             }
                //             this.userService.SaveMedicationSuggestion(object).subscribe(data => {
                //                 this.toastr.success(data.message, "Success")
                //                 if (data.response == true) {
                //                     this.GetMedicationSuggestions(type)
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
    };
    DashboardPrescriptionPadOffComponent.prototype.GetSavedSuggestions = function (type) {
        var _this = this;
        var object = {
            doctor_id: this.doctorData.itemId,
            type: type
        };
        this.userService.GetSavedSuggestions(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                if (type == 'Lifestyle') {
                    _this.doctorOtherTreatmentDB = [];
                    _this.doctorOtherTreatmentDB = data.data;
                }
                else if (type == 'Bandage') {
                    _this.doctorOtherTreatmentBandageDB = [];
                    _this.doctorOtherTreatmentBandageDB = data.data;
                }
                else if (type == 'Other') {
                    _this.doctorOtherTreatmentOtherDB = [];
                    _this.doctorOtherTreatmentOtherDB = data.data;
                }
                else if (type == 'Gargle') {
                    _this.doctorOtherTreatmentGargleDB = [];
                    _this.doctorOtherTreatmentGargleDB = data.data;
                }
                else if (type == 'Dressing') {
                    _this.doctorOtherTreatmentDressingDB = [];
                    _this.doctorOtherTreatmentDressingDB = data.data;
                }
                else if (type == 'Instruction') {
                    _this.instructionsSavedDB = [];
                    _this.instructionsSavedDB = data.data;
                }
                else if (type == 'Pre Condition') {
                    _this.preConditionPresetArray = [];
                    _this.preConditionPresetArray = data.data;
                }
                else if (type == 'Allergy') {
                    _this.allergyPresetArray = [];
                    _this.allergyPresetArray = data.data;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.SaveOtherTreatmentSuggestions = function (type, item) {
        var _this = this;
        var object = {
            doctor_id: this.doctorData.itemId,
            type: type,
            observation: item
        };
        console.log(object);
        this.userService.SaveOtherTreatmentSuggestions(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                if (type == 'Lifestyle') {
                    _this.GetSavedSuggestions('Lifestyle');
                }
                else if (type == 'Gargle') {
                    _this.GetSavedSuggestions('Gargle');
                }
                else if (type == 'Bandage') {
                    _this.GetSavedSuggestions('Bandage');
                }
                else if (type == 'Other') {
                    _this.GetSavedSuggestions('Other');
                }
                else if (type == 'Dressing') {
                    _this.GetSavedSuggestions('Dressing');
                }
                else if (type == 'Instruction') {
                    _this.GetSavedSuggestions('Instruction');
                }
                else if (type == 'Pre Condition') {
                    _this.GetSavedSuggestions('Pre Condition');
                }
                else if (type == 'Allergy') {
                    _this.GetSavedSuggestions('Allergy');
                }
                else {
                    _this.GetSurgerySuggestions(type);
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.onTextChange = function (type, suggestion) {
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
        console.log(object);
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
    DashboardPrescriptionPadOffComponent.prototype.GetInvestigationSuggestions = function (type) {
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
                else if (type == 'Others') {
                    _this.otherSuggestionDB = data.data;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.saveInvestigationSuggestion = function (type, item) {
        var object = {
            doctor_id: this.doctorData.itemId,
            type: type,
            observation: item.value
        };
        console.log(object);
        this.userService.SaveInvestigationSuggestion(object).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.GetSurgerySuggestions = function (type) {
        var _this = this;
        var object = {
            doctor_id: this.doctorData.itemId,
            type: type
        };
        this.userService.GetSavedSuggestions(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                var index = -1;
                for (var i = 0; i < _this.suregeryOptions.length; i++) {
                    if (_this.suregeryOptions[i].name == type) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    _this.suregeryOptions[i].database = data.data;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    // addOtherPrecond() {
    //     this.precondlength = this.precondlength + 1
    // }
    // removeOtherPrecond() {
    //     this.precondlength = this.precondlength - 1
    // }
    DashboardPrescriptionPadOffComponent.prototype.getMedFrequencyClass = function (data) {
        if (data == 'Frequency') {
            return '';
        }
        else {
            return 'active';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getMedDurationClass = function (data) {
        if (data == 'Duration') {
            return '';
        }
        else {
            return 'active';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getMedDosageClass = function (data) {
        if (data == 'Dosage') {
            return '';
        }
        else {
            return 'active';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getMedModeClass = function (data) {
        if (data == 'Mode') {
            return '';
        }
        else {
            return 'active';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getMedQuantityClass = function (data) {
        if (data == 'Qty, (No)') {
            return '';
        }
        else {
            return 'active';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.PresetsShowHide = function (type) {
        if (type == 'Medication') {
            this.medicationPresetShow = !this.medicationPresetShow;
        }
        else if (type == 'Instructions') {
            this.instructionPresetShow = !this.instructionPresetShow;
        }
        else if (type == 'Surgery') {
            this.surgeryPresetShow = !this.surgeryPresetShow;
        }
        else if (type == 'Other Treatments') {
            this.otherTreatmentPresetShow = !this.otherTreatmentPresetShow;
        }
        else if (type == 'Investigation') {
            this.investigationPresetShow = !this.investigationPresetShow;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.GetDoctorPreset = function () {
        var _this = this;
        this.doctorPresetArray = [];
        this.userService.GetDoctorPreset(this.doctorData.itemId).subscribe(function (data) {
            console.log(data);
            _this.doctorPresetArray = data.data;
            // for (var i = 0; i < this.doctorPresetArray.length; i++) {
            //     this.doctorPresetArray[i].newPresetArray = []
            //     for (var j = 0; j < this.doctorPresetArray[i].preset_array.length; j++) {
            //         this.doctorPresetArray[i].preset_array[j].status = true
            //         this.doctorPresetArray[i].newPresetArray.push(this.doctorPresetArray[i].preset_array[j])
            //     }
            // }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.showHidePreset = function (type, i) {
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
                    var boolean = false;
                    var tt;
                    tt = _this.totalSurgeryOptionsSelected;
                    for (var l = 0; l < _this.suregeryOptionsTop.length; l++) {
                        for (var m = 0; m < _this.presetArraySurgery[i].preset_array.length; m++) {
                            if (_this.suregeryOptionsTop[l].name == _this.presetArraySurgery[i].preset_array[m].name) {
                                tt = tt - 1;
                                break;
                            }
                        }
                    }
                    if (tt + _this.presetArraySurgery[i].preset_array.length > 3) {
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
                                if (this.treatmentStatus[k].i_presetValue) {
                                    this.presetArrayOtherTreatment[this.treatmentStatus[k].i_presetValue].status = false;
                                    if (k == 7 || k == 2) {
                                        this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[k].div.length;
                                    }
                                    else {
                                        this.totalOtherTreatment = this.totalOtherTreatment - 1;
                                    }
                                }
                                if (this.presetArrayOtherTreatment[i].preset_array[j].name == 'Plaster' || this.presetArrayOtherTreatment[i].preset_array[j].name == 'Other') {
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
                    for (var j = 0; j < this.treatmentStatus.length; j++) {
                        if (this.treatmentStatus[j].status == true) {
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
    };
    DashboardPrescriptionPadOffComponent.prototype.getMedPresetClass = function (type, i) {
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
    };
    DashboardPrescriptionPadOffComponent.prototype.getPresetMedButtonClass = function (type) {
        if (type == 'Medication') {
            if (this.medicationPresetShow == true) {
                return 'active btn lightblue-btn';
            }
            else {
                return 'btn lightblue-btn';
            }
        }
        else if (type == 'Instructions') {
            if (this.instructionPresetShow == true) {
                return 'active btn lightblue-btn';
            }
            else {
                return 'btn lightblue-btn';
            }
        }
        else if (type == 'Surgery') {
            if (this.surgeryPresetShow == true) {
                return 'active btn lightblue-btn';
            }
            else {
                return 'btn lightblue-btn';
            }
        }
        else if (type == 'Other Treatments') {
            if (this.otherTreatmentPresetShow == true) {
                return 'active btn lightblue-btn';
            }
            else {
                return 'btn lightblue-btn';
            }
        }
        else if (type == 'Investigation') {
            if (this.investigationPresetShow == true) {
                return 'active btn lightblue-btn';
            }
            else {
                return 'btn lightblue-btn';
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.removeMedPreset = function (i, j) {
        this.totalMedications = this.totalMedications - 1;
        this.doctorPresetArray[i].newPresetArray.splice(j, 1);
        if (this.doctorPresetArray[i].preset_array.length < 1) {
            this.doctorPresetArray[i].status = false;
            this.doctorPresetArray[i].newPresetArray = [];
            for (var k = 0; k < this.doctorPresetArray[i].preset_array.length; k++) {
                this.doctorPresetArray[i].preset_array[k].status = true;
                this.doctorPresetArray[i].newPresetArray.push(this.doctorPresetArray[i].preset_array[k]);
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.SaveDoctorOtherPreset = function (type, preset) {
        if (preset.trim().length > 0) {
            var object = {
                doctor_id: this.doctorData.itemId,
                type: type,
                preset: preset
            };
            console.log(object);
            this.userService.SaveDoctorOtherPreset(object).subscribe(function (data) {
                console.log(data);
                // if (data.response == false) {
                //     this.toastr.error(data.message, "Error")
                //     if (data.message == "Data already exists") {
                //         let dialogRef = this.dialog.open(ConfirmationDialogUpdateComponent, {});
                //         dialogRef.afterClosed().subscribe(result => {
                //             console.log('The dialog was closed');
                //             if (result == "yes") {
                //                 let object = {
                //                     doctor_id: this.doctorData.itemId,
                //                     type: type,
                //                     preset: preset,
                //                     update_status: true
                //                 }
                //                 console.log(object)
                //                 this.userService.SaveDoctorOtherPreset(object).subscribe(data => {
                //                     this.toastr.success(data.message, "Success")
                //                     if (this.save_true == true) {
                //                         this.router.navigate(['header-two-layout/dashboard-prescription'])
                //                     } else {
                //                         this.ngOnInit()
                //                     }
                //                 }, err => {
                //                     console.log(err);
                //                 })
                //             } else {
                //                 console.log("error or No Thanks button clicked")
                //             }
                //         });
                //     }
                // }
            }, function (err) {
                console.log(err);
            });
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.GetDoctorOtherPreset = function (type) {
        var _this = this;
        var object = {
            doctor_id: this.doctorData.itemId,
            type: type
        };
        this.userService.GetDoctorOtherPreset(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                if (type == 'Patient Complaints') {
                    _this.findingPreSetVals = [];
                    _this.findingPreSetVals = data.data;
                    for (var i = 0; i < _this.itemsfinding.length; i++) {
                        for (var j = 0; j < _this.findingPreSetVals.length; j++) {
                            if (_this.itemsfinding[i].value == _this.findingPreSetVals[j].value) {
                                _this.findingPreSetVals[j].status = true;
                                break;
                            }
                        }
                    }
                }
                else if (type == 'Symptoms') {
                    _this.symptomsPresetArray = [];
                    _this.symptomsPresetArray = data.data;
                    for (var i = 0; i < _this.itemsymptoms.length; i++) {
                        for (var j = 0; j < _this.symptomsPresetArray.length; j++) {
                            if (_this.itemsymptoms[i].value == _this.symptomsPresetArray[j].value) {
                                _this.symptomsPresetArray[j].status = true;
                                break;
                            }
                        }
                    }
                }
                else if (type == 'Diagnosis') {
                    _this.diagnosisPresetArray = [];
                    _this.diagnosisPresetArray = data.data;
                    for (var i = 0; i < _this.itemsdiagnosis.length; i++) {
                        for (var j = 0; j < _this.diagnosisPresetArray.length; j++) {
                            if (_this.itemsdiagnosis[i].value == _this.diagnosisPresetArray[j].value) {
                                _this.diagnosisPresetArray[j].status = true;
                                break;
                            }
                        }
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.SaveDoctorPresetArray = function (preset_name, preset_array, type) {
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
                _this.GetDoctorPresetArray(type);
            }
            else {
                // this.toastr.error(data.message, "Warning")
                if (data.message == "Data already exists") {
                    var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__confirmation_popup_confirmation_dialog_update_confirmation_dialog_update_component__["a" /* ConfirmationDialogUpdateComponent */], {});
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
                                if (data.response == true) {
                                    _this.GetDoctorPresetArray(type);
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
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.GetDoctorPresetArray = function (type) {
        var _this = this;
        var object = {
            doctor_id: this.doctorData.itemId,
            type: type
        };
        this.userService.GetDoctorPresetArray(object).subscribe(function (data) {
            console.log(data);
            if (type == 'Instructions') {
                _this.presetArrayInstruction = [];
                _this.presetArrayInstruction = data.data;
            }
            else if (type == 'Surgery') {
                _this.presetArraySurgery = [];
                _this.presetArraySurgery = data.data;
            }
            else if (type == 'Other Treatments') {
                _this.presetArrayOtherTreatment = [];
                _this.presetArrayOtherTreatment = data.data;
            }
            else if (type == 'Investigation') {
                _this.presetArrayInvestigation = [];
                _this.presetArrayInvestigation = data.data;
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.saveWholePrescriptionPad = function () {
        var _this = this;
        if (this.presentNamePrescPad != undefined && this.presentNamePrescPad != '' && this.presentNamePrescPad != null) {
            if (this.presentNamePrescPad.trim().length < 1) {
                this.toastr.warning("Invalid preset name", "Warning");
                return;
            }
            else {
                var objectArray = [];
                // if (this.preConditionComplete == true && this.preCondSelected.length > 0) {
                //     let object = {
                //         name: 'Pre Condition',
                //         preCondMdlArray: this.preCondMdlArray,
                //         preCondSelected: this.preCondSelected,
                //         otherPre: this.otherPre
                //     }
                //     objectArray.push(object)
                // }
                // if (this.allergyComplete == true && this.allergySelected.length > 0) {
                //     let object = {
                //         name: 'Allergy',
                //         AllergyArray: this.AllergyArray,
                //         otherAllergy: this.otherAllergy,
                //         allergySelected: this.allergySelected
                //     }
                //     objectArray.push(object)
                // }
                // if (this.bodyIndicatorComplete == true && this.bodyIndicatorSelected.length > 0) {
                //     let object = {
                //         name: 'Body Indicator',
                //         bodyIndicator: this.bodyIndicator
                //     }
                //     objectArray.push(object)
                // }
                if (this.findingsComplete == true && this.findingsSelected.length > 0) {
                    var object = {
                        name: 'Patient Complaints',
                        itemsfinding: this.itemsfinding
                    };
                    objectArray.push(object);
                }
                if (this.symptomsComplete == true && this.symptomsSelected.length > 0) {
                    var object = {
                        name: 'Symptoms',
                        itemsymptoms: this.itemsymptoms
                    };
                    objectArray.push(object);
                }
                if (this.diagnosisComplete == true && this.diagnosisSelected.length > 0) {
                    var object = {
                        name: 'Diagnosis',
                        itemsdiagnosis: this.itemsdiagnosis
                    };
                    objectArray.push(object);
                }
                if (this.treatmentComplete == true) {
                    var object = {
                        name: 'Other Treatment',
                        treatmentStatus: this.treatmentStatus
                    };
                    objectArray.push(object);
                }
                if (this.investigationIndicatorComplete == true && this.investigationArray.length > 0) {
                    var object = {
                        name: 'Investigation',
                        investigationStatus: this.investigationStatus,
                        investigationArray: this.investigationArray
                    };
                    objectArray.push(object);
                }
                if (this.surgeryComplete == true && this.surgerySelectedArray.length > 0) {
                    var object = {
                        name: 'Surgery / Procedure',
                        suregeryOptionsTop: this.suregeryOptionsTop,
                        suregeryOptions: this.suregeryOptions
                    };
                    objectArray.push(object);
                }
                // if (this.eyePresComplete == true) {
                //     let object = {
                //         name: 'Eye Prescription',
                //         rightOD: this.rightOD,
                //         leftOD: this.leftOD
                //     }
                //     objectArray.push(object)
                // }
                // if (this.vaccinationComplete == true) {
                //     let object = {
                //         name: 'Vaccination',
                //         finalCurrentVaccinationArray: this.finalCurrentVaccinationArray,
                //         finalDueVaccinationArray: this.finalDueVaccinationArray,
                //         currentVaccinationComplete: this.currentVaccinationComplete,
                //         dueVaccinationComplete: this.dueVaccinationComplete
                //     }
                //     objectArray.push(object)
                // }
                if (this.instructionsComplete == true && this.instructionsSelected.length > 0) {
                    var object = {
                        name: 'Instructions',
                        inputBox: this.inputBox
                    };
                    objectArray.push(object);
                }
                if (this.medicationComplete == true) {
                    var object = {
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
                    objectArray.push(object);
                }
                // if (this.followDaysComplete == true) {
                //     let object = {
                //         name: 'Follow',
                //         finalfollowUpDays: this.finalfollowUpDays
                //     }
                //     objectArray.push(object)
                // }
                console.log(objectArray);
                if (objectArray.length > 0) {
                    var dataToSave = {
                        doctor_id: this.doctorData.itemId,
                        name: this.presentNamePrescPad.trim(),
                        value: objectArray
                    };
                    this.userService.SavePrescriptionPad(dataToSave).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.toastr.success(data.message, "Success");
                            _this.GetPrescriptionPad();
                        }
                        else {
                            if (data.message == "Data already exists") {
                                var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__confirmation_popup_confirmation_dialog_update_confirmation_dialog_update_component__["a" /* ConfirmationDialogUpdateComponent */], {});
                                dialogRef.afterClosed().subscribe(function (result) {
                                    console.log('The dialog was closed');
                                    if (result == "yes") {
                                        var object = {
                                            doctor_id: _this.doctorData.itemId,
                                            name: _this.presentNamePrescPad.trim(),
                                            value: objectArray,
                                            update_status: true
                                        };
                                        console.log(object);
                                        _this.userService.SavePrescriptionPad(object).subscribe(function (data) {
                                            if (data.response == true) {
                                                _this.toastr.success(data.message, "Success");
                                                _this.GetPrescriptionPad();
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
                            }
                            else {
                                _this.toastr.error(data.message, "Error");
                            }
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    this.toastr.warning("Nothing found to be saved", "Warning");
                }
            }
        }
        else {
            this.toastr.warning("Invalid preset name", "Warning");
            return;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.GetPrescriptionPad = function () {
        var _this = this;
        this.userService.GetPrescriptionPad(this.doctorData.itemId).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.savedPrescriptionPadArray = data.data;
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.GetPrescriptionPadDetail = function (id) {
        this.temp_preset_id = id;
        for (var i = 0; i < this.savedPrescriptionPadArray.length; i++) {
            if (this.savedPrescriptionPadArray[i].id == this.temp_preset_id) {
                this.savedPrescriptionPadArray[i].status = true;
            }
            else {
                this.savedPrescriptionPadArray[i].status = false;
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.applyPrescriptionPreset = function () {
        var _this = this;
        this.userService.GetPrescriptionPadDetail(this.temp_preset_id).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.prescriptionPadDetail = data.data;
                // this.resetAll()
                _this.deleteAndResetSelectedDiv('Symptoms');
                _this.deleteAndResetSelectedDiv('Diagnosis');
                _this.deleteAndResetSelectedDiv('Other Treatment');
                _this.deleteAndResetSelectedDiv('Investigation');
                // this.deleteAndResetSelectedDiv('Surgery / Procedure')
                _this.resetSurgery();
                _this.deleteAndResetSelectedDiv('Instructions');
                _this.deleteAndResetSelectedDiv('Medication');
                for (var i = 0; i < data.data.value.length; i++) {
                    console.log(data.data.value[i].name);
                    // if (data.data.value[i].name == 'Pre Condition') {
                    //     this.preCondMdlArray = data.data.value[i].preCondMdlArray
                    //     this.preCondSelected = data.data.value[i].preCondSelected
                    //     this.otherPre = data.data.value[i].otherPre
                    //     this.setFields('preconditions')
                    // } else if (data.data.value[i].name == 'Allergy') {
                    //     this.AllergyArray = data.data.value[i].AllergyArray
                    //     this.otherAllergy = data.data.value[i].otherAllergy
                    //     this.allergySelected = data.data.value[i].allergySelected
                    //     this.setFields('allergy')
                    // } else if (data.data.value[i].name == 'Body Indicator') {
                    //     this.bodyIndicator = data.data.value[i].bodyIndicator
                    //     this.setFields('bodyIndicators')
                    // } else 
                    // if (data.data.value[i].name == 'Patient Complaints') {
                    //     this.itemsfinding = data.data.value[i].itemsfinding
                    //     this.setFields('findings')
                    // } else 
                    if (data.data.value[i].name == 'Symptoms') {
                        _this.itemsymptoms = data.data.value[i].itemsymptoms;
                        _this.setFields('symptoms');
                    }
                    else if (data.data.value[i].name == 'Diagnosis') {
                        _this.itemsdiagnosis = data.data.value[i].itemsdiagnosis;
                        _this.setFields('diagnosis');
                    }
                    else if (data.data.value[i].name == 'Other Treatment') {
                        _this.treatmentStatus = data.data.value[i].treatmentStatus;
                        _this.totalOtherTreatment = 0;
                        for (var j = 0; j < _this.treatmentStatus.length; j++) {
                            if (_this.treatmentStatus[j].status == true) {
                                if (j == 2 || j == 7) {
                                    _this.totalOtherTreatment = _this.totalOtherTreatment + _this.treatmentStatus[j].div.length;
                                }
                                else {
                                    _this.totalOtherTreatment = _this.totalOtherTreatment + 1;
                                }
                            }
                        }
                        _this.setFields('treatment');
                    }
                    else if (data.data.value[i].name == 'Investigation') {
                        _this.investigationStatus = data.data.value[i].investigationStatus;
                        _this.investigationArray = data.data.value[i].investigationArray;
                        _this.numberOfInvestigationSelected = 0;
                        for (var j = 0; j < _this.investigationStatus.length; j++) {
                            if (_this.investigationStatus[j].status == true) {
                                _this.totalOtherTreatment = _this.totalOtherTreatment + 1;
                            }
                        }
                        _this.setFields('investigation');
                    }
                    else if (data.data.value[i].name == 'Surgery / Procedure') {
                        _this.suregeryOptionsTop = data.data.value[i].suregeryOptionsTop;
                        _this.suregeryOptions = data.data.value[i].suregeryOptions;
                        _this.totalSurgeryOptionsSelected = 0;
                        for (var j = 0; j < _this.suregeryOptionsTop.length; j++) {
                            if (_this.suregeryOptionsTop[j].status == true) {
                                _this.totalSurgeryOptionsSelected = _this.totalSurgeryOptionsSelected + 1;
                                _this.totalSurgeryOptionsSelected = _this.totalSurgeryOptionsSelected + _this.suregeryOptionsTop[j].div.length - 1;
                            }
                        }
                        _this.setFields('surgery');
                        // } else if (data.data.value[i].name == 'Eye Prescription') {
                        //     this.rightOD = data.data.value[i].rightOD,
                        //         this.leftOD = data.data.value[i].leftOD
                        //     this.setFields('eye_pres')
                        // } else if (data.data.value[i].name == 'Vaccination') {
                        //     this.finalCurrentVaccinationArray = data.data.value[i].finalCurrentVaccinationArray
                        //     this.finalDueVaccinationArray = data.data.value[i].finalDueVaccinationArray
                        //     this.tempCurrentVaccinationArray = data.data.value[i].finalCurrentVaccinationArray
                        //     this.tempDueVaccinationArray = data.data.value[i].finalDueVaccinationArray
                        //     this.currentVaccinationComplete = data.data.value[i].currentVaccinationComplete
                        //     this.dueVaccinationComplete = data.data.value[i].dueVaccinationComplete
                        //     this.setFields('vaccination')
                    }
                    else if (data.data.value[i].name == 'Instructions') {
                        _this.inputBox = data.data.value[i].inputBox;
                        _this.setFields('instructions');
                    }
                    else if (data.data.value[i].name == 'Medication') {
                        _this.medication = {};
                        _this.medication = data.data.value[i].medication;
                        _this.medicationStatus = data.data.value[i].medicationStatus;
                        _this.totalMedications = -1;
                        _this.medicationTabArray = data.data.value[i].medicationTabArray;
                        _this.medicationCapArray = data.data.value[i].medicationCapArray;
                        _this.medicationSypArray = data.data.value[i].medicationSypArray;
                        _this.medicationSuspArray = data.data.value[i].medicationSuspArray;
                        _this.medicationEmulsnArray = data.data.value[i].medicationEmulsnArray;
                        _this.medicationInjArray = data.data.value[i].medicationInjArray;
                        _this.medicationCreamArray = data.data.value[i].medicationCreamArray;
                        _this.medicationGelArray = data.data.value[i].medicationGelArray;
                        _this.medicationDropsArray = data.data.value[i].medicationDropsArray;
                        _this.medicationPowderArray = data.data.value[i].medicationPowderArray;
                        _this.medicationAerosolsArray = data.data.value[i].medicationAerosolsArray;
                        _this.medicationMouthWashArray = data.data.value[i].medicationMouthWashArray;
                        _this.medicationSolutionArray = data.data.value[i].medicationSolutionArray;
                        _this.medicationLotionArray = data.data.value[i].medicationLotionArray;
                        _this.medicationOintmentArray = data.data.value[i].medicationOintmentArray;
                        for (var j = 0; j < _this.medicationStatus.length; j++) {
                            if (_this.medicationStatus[j].status == true) {
                                if (j == 0) {
                                    _this.totalMedications = _this.totalMedications + _this.medicationTabArray.length;
                                }
                                else if (j == 1) {
                                    _this.totalMedications = _this.totalMedications + _this.medicationCapArray.length;
                                }
                                else if (j == 2) {
                                    _this.totalMedications = _this.totalMedications + _this.medicationSypArray.length;
                                }
                                else if (j == 3) {
                                    _this.totalMedications = _this.totalMedications + _this.medicationSuspArray.length;
                                }
                                else if (j == 4) {
                                    _this.totalMedications = _this.totalMedications + _this.medicationEmulsnArray.length;
                                }
                                else if (j == 5) {
                                    _this.totalMedications = _this.totalMedications + _this.medicationSolutionArray.length;
                                }
                                else if (j == 6) {
                                    _this.totalMedications = _this.totalMedications + _this.medicationInjArray.length;
                                }
                                else if (j == 7) {
                                    _this.totalMedications = _this.totalMedications + _this.medicationCreamArray.length;
                                }
                                else if (j == 8) {
                                    _this.totalMedications = _this.totalMedications + _this.medicationGelArray.length;
                                }
                                else if (j == 9) {
                                    _this.totalMedications = _this.totalMedications + _this.medicationDropsArray.length;
                                }
                                else if (j == 11) {
                                    _this.totalMedications = _this.totalMedications + _this.medicationPowderArray.length;
                                }
                                else if (j == 10) {
                                    _this.totalMedications = _this.totalMedications + _this.medicationAerosolsArray.length;
                                }
                                else if (j == 12) {
                                    _this.totalMedications = _this.totalMedications + _this.medicationMouthWashArray.length;
                                }
                                else if (j == 13) {
                                    _this.totalMedications = _this.totalMedications + _this.medicationLotionArray.length;
                                }
                                else if (j == 14) {
                                    _this.totalMedications = _this.totalMedications + _this.medicationOintmentArray.length;
                                }
                            }
                        }
                        _this.setFields('medication');
                    }
                    // else if (data.data.value[i].name == 'Follow') {
                    //     this.finalfollowUpDays = data.data.value[i].finalfollowUpDays
                    //     this.setFields('follow')
                    // }
                }
                $("#savedPreset").modal("hide");
                _this.resetClassPrecPreset();
            }
        }, function (err) {
            console.log(err);
        });
    };
    // createPdf() {
    //     // if(this.languageOptionSelected == ""){
    //     //     html2canvas(document.getElementById('previewModalPdf1')).then(function(canvas) {
    //     //         var img = canvas.toDataURL("image/png");
    //     //         var doc = new jsPDF({
    //     //             orientation: 'potrait',
    //     //             // width: 1000, 
    //     //             unit: 'in',
    //     //             format: [12, 20]
    //     //         });
    //     //         doc.addImage(img, 'JPEG', 0.5, 0.5, 0, 0);
    //     //         doc.save('Prescription.pdf');
    //     //     });
    //     // }else{
    //         html2canvas(document.getElementById('previewModalPdf')).then(function(canvas) {
    //             var img = canvas.toDataURL("image/png");
    //             var doc = new jsPDF({
    //                 orientation: 'potrait',
    //                 // width: 1000, 
    //                 unit: 'in',
    //                 format: [12, 20]
    //             });
    //             doc.addImage(img, 'JPEG', 0.5, 0.5, 0, 0);
    //             doc.save('Prescription.pdf');
    //         });
    //     // }
    // }
    DashboardPrescriptionPadOffComponent.prototype.createPdf = function () {
        this.saveDoctorPrescriptionForPatient();
    };
    DashboardPrescriptionPadOffComponent.prototype.saveFreqDuration = function () {
        if (this.tempFrequency != null && this.tempFrequency != '' && this.tempFrequency != 'Frequency') {
            this.currentFrequency.frequency = this.tempFrequency;
        }
        this.currentFrequency.specialInstruction = this.tempFrequencySpecial;
        if (this.tempDuration != null && this.tempDuration != '' && this.tempDuration != 'Duration') {
            this.currentFrequency.duration = this.tempDuration;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.saveFreqDurInjection = function () {
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
    DashboardPrescriptionPadOffComponent.prototype.saveFreqDurDosage = function () {
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
    DashboardPrescriptionPadOffComponent.prototype.saveFreqDurDrops = function () {
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
    DashboardPrescriptionPadOffComponent.prototype.AllPrescriptionData = function () {
        var _this = this;
        var object = {
            doctor_id: this.doctorData.itemId,
            registration: this.consultingPatient
        };
        this.loading = true;
        this.userService.AllPrescriptionData(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                //getDoctorPrescriptionFields
                if (data.prescList2 != null && data.prescList2 != '') {
                    _this.prescList2 = data.prescList2;
                }
                for (var i = 0; i < _this.prescList2.length; i++) {
                    for (var j = 0; j < _this.prescList.length; j++) {
                        if (_this.prescList2[i].item == _this.prescList[j].item) {
                            _this.prescList[j].status = true;
                        }
                    }
                }
                //GetDoctorSurgeryArray
                if (data.suregeryOptionsTop != null) {
                    _this.suregeryOptionsTop = data.suregeryOptionsTop;
                    _this.suregeryOptions = data.suregeryOptions;
                }
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
                //GetSavedSuggestions
                _this.doctorOtherTreatmentDB = data.doctorOtherTreatmentDB;
                _this.doctorOtherTreatmentBandageDB = data.doctorOtherTreatmentBandageDB;
                _this.doctorOtherTreatmentOtherDB = data.doctorOtherTreatmentOtherDB;
                _this.doctorOtherTreatmentGargleDB = data.doctorOtherTreatmentGargleDB;
                _this.doctorOtherTreatmentDressingDB = data.doctorOtherTreatmentDressingDB;
                _this.instructionsSavedDB = data.instructionsSavedDB;
                _this.preConditionPresetArray = data.preConditionPresetArray;
                _this.allergyPresetArray = data.allergyPresetArray;
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
            else {
                _this.toastr.error(data.message, "Error");
                _this.router.navigate(['header-two-layout/dashboard-prescription']);
                return;
            }
            _this.loading = false;
            _this.minutes = 0;
            _this.seconds = 0;
            setInterval(function () {
                _this.incrementTimer();
            }, 1000);
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.findDoctorReferDetail = function () {
        var _this = this;
        console.log(this.referDetail);
        if (!isNaN(this.referDetail.phone) && this.referDetail.phone.trim().length == 10) {
            this.userService.FindDoctorReferDetail(this.referDetail.phone).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    _this.referDetail.doctor_name = "Dr. " + data.data.first_name; //+ " " + data.data.last_name
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.referToDcotor = function () {
        console.log(this.referDetail);
        this.refer_status = true;
    };
    DashboardPrescriptionPadOffComponent.prototype.onSelectSubSpeciality = function (data, i, j) {
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
    DashboardPrescriptionPadOffComponent.prototype.saveFreqDurationTreatment = function () {
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
    DashboardPrescriptionPadOffComponent.prototype.resetAll = function () {
        this.preConditionComplete = false;
        this.preCondSelected = [];
        for (var i = 0; i < this.preCondMdlArray.length; i++) {
            this.preCondMdlArray[i].status = false;
        }
        this.precondlength = 0;
        this.bodyIndicatorSelected = [];
        this.bodyIndicatorComplete = false;
        this.bodyIndicator = {
            'temp': 'Select',
            'pulse': 'Select',
            'sys': 'Select',
            'dia': 'Select',
            'spo': 'Select',
            'rbs': 'Select'
        };
        this.surgeryComplete = false;
        this.totalSurgeryOptionsSelected = 0;
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
        this.GetDoctorSurgeryArray(this.doctorData.itemId);
        // this.GetSurgerySuggestions('Cardiology')
        // this.GetSurgerySuggestions('ENT')
        // this.GetSurgerySuggestions('Dental')
        // this.GetSurgerySuggestions('Genito-Urinary')
        // this.GetSurgerySuggestions('Gynaecology/Obstetrics')
        // this.GetSurgerySuggestions('Neonatal')
        // this.GetSurgerySuggestions('Neurology')
        // this.GetSurgerySuggestions('Oncology')
        // this.GetSurgerySuggestions('Ophthalmology')
        // this.GetSurgerySuggestions('Orthopaedics')
        // this.GetSurgerySuggestions('Paediatric')
        // this.GetSurgerySuggestions('Vascular')
        this.surgeryPresetShow = false;
        for (var i = 0; i < this.presetArraySurgery.length; i++) {
            this.presetArraySurgery[i].status = false;
        }
        this.vaccinationComplete = false;
        this.finalCurrentVaccinationArray = [];
        this.finalDueVaccinationArray = [];
        this.tempCurrentVaccinationArray = [];
        this.tempDueVaccinationArray = [];
        this.currentVaccinationComplete = false;
        this.dueVaccinationComplete = false;
        this.currentVaccinationArray = [];
        this.dueVaccinationArray = [];
        this.vaccinationDate = new Date();
        this.medicationComplete = false;
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
        this.totalMedications = 0;
        this.medicationSavedArray = [];
        this.medicationStatus[0].status = true;
        this.investigationStatus[0].status = true;
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
        this.totalMedicationPresetSelected = 0;
        this.medicationPresetShow = false;
        for (var i = 0; i < this.doctorPresetArray.length; i++) {
            this.doctorPresetArray[i].status = false;
        }
        this.instructionsComplete = false;
        this.instructionsSelected = [];
        this.inputBox = [{ name: 'Instruction 1', instructionsInput: '', inputInstruction: '' }];
        this.instructionPresetShow = false;
        for (var j = 0; j < this.presetArrayInstruction.length; j++) {
            this.presetArrayInstruction[j].status = false;
        }
        this.investigationIndicatorComplete = false;
        this.investigationArray = [];
        this.numberOfInvestigationSelected = 0;
        this.investigationPresetShow = false;
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
        for (var i = 0; i < this.presetArrayInvestigation.length; i++) {
            this.presetArrayInvestigation[i].status = false;
        }
        this.eyePresComplete = false;
        this.openModalFromEyePres();
        this.rightOD = {};
        this.rightOD.sphere = 0;
        this.rightOD.cylinder = 0;
        this.rightOD.axis = 0;
        this.rightOD.add = 0;
        this.rightOD.pd = 0;
        this.leftOD = {};
        this.leftOD.sphere = 0;
        this.leftOD.cylinder = 0;
        this.leftOD.axis = 0;
        this.leftOD.add = 0;
        this.leftOD.pd = 0;
        this.finalRightOD = {};
        this.finalLeftOD = {};
        this.diagnosisSelected = [];
        this.itemsdiagnosis = [];
        this.diagnosisComplete = false;
        for (var i = 0; i < this.diagnosisPresetArray.length; i++) {
            this.diagnosisPresetArray[i].status = false;
        }
        this.allergyComplete = false;
        this.allergySelected = [];
        this.finalAllergy = [];
        this.otherAllergy = [];
        this.AllergyArray = [{
                'allergyName': 'Drug Allergy',
                'allergySource': [{
                        'status': false,
                        'text': 'Aspirin'
                    }, {
                        'status': false,
                        'text': 'Ampicillin'
                    }, {
                        'status': false,
                        'text': 'Pain killer'
                    }, {
                        'status': false,
                        'text': 'Antibiotics'
                    }, {
                        'status': false,
                        'text': 'Tetracycline'
                    }, {
                        'status': false,
                        'text': 'Sulfa'
                    }]
            }, {
                'allergyName': 'Food Allergy',
                'allergySource': [{
                        'status': false,
                        'text': 'Chocolate'
                    }, {
                        'status': false,
                        'text': 'Egg'
                    }, {
                        'status': false,
                        'text': 'Fish'
                    }, {
                        'status': false,
                        'text': 'Milk'
                    }, {
                        'status': false,
                        'text': 'Nuts'
                    }, {
                        'status': false,
                        'text': 'Prawn'
                    }, {
                        'status': false,
                        'text': 'Meat'
                    }, {
                        'status': false,
                        'text': 'Sea Food'
                    }, {
                        'status': false,
                        'text': 'Spices'
                    }]
            }, {
                'allergyName': 'Skin Allergy',
                'allergySource': [{
                        'status': false,
                        'text': 'Urticaria'
                    }, {
                        'status': false,
                        'text': 'Rash'
                    }, {
                        'status': false,
                        'text': 'Sun'
                    }, {
                        'status': false,
                        'text': 'Anaphylaxis'
                    }, {
                        'status': false,
                        'text': 'Dye'
                    }, {
                        'status': false,
                        'text': 'Detergent'
                    }]
            }, {
                'allergyName': 'Respiratory Allergy',
                'allergySource': [{
                        'status': false,
                        'text': 'Dust'
                    }, {
                        'status': false,
                        'text': 'Pollen'
                    }, {
                        'status': false,
                        'text': 'Paint smell'
                    }, {
                        'status': false,
                        'text': 'Smoke'
                    }, {
                        'status': false,
                        'text': 'Perfume'
                    }, {
                        'status': false,
                        'text': 'Temp change'
                    }]
            }];
        this.findingsSelected = [];
        this.itemsfinding = [];
        this.findingsComplete = false;
        for (var i = 0; i < this.findingPreSetVals.length; i++) {
            this.findingPreSetVals[i].status = false;
        }
        this.symptomsSelected = [];
        this.symptomsComplete = false;
        this.itemsymptoms = [];
        for (var i = 0; i < this.symptomsPresetArray.length; i++) {
            this.symptomsPresetArray[i].status = false;
        }
        this.finalfollowUpDays = 0;
        this.followUpDays = 0;
        this.followDaysComplete = false;
        this.treatmentComplete = false;
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
        // this.treatmentStatus[0].status = true
        this.tempTreatObject = null;
        this.tempTreatObjectIndex = null;
        this.tempTreatFrequency = null;
        this.tempTreatSpecialInstruction = null;
        this.tempTreatDuration = null;
        this.totalOtherTreatment = 0;
        this.treatmentArray = [];
        this.tempPlasterDivIndex = null;
        this.plaster_open_by_main = true;
        this.otherTreatmentPresetShow = false;
        for (var i = 0; i < this.presetArrayOtherTreatment.length; i++) {
            this.presetArrayOtherTreatment[i].status = false;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.onTextChangeOfMedName = function (type, observation) {
        var _this = this;
        var object = {
            doctor_id: this.doctorData.itemId,
            type: type,
            observation: observation,
            smart_pharmacy_id: this.doctorData.smart_pharmacy_id
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
    DashboardPrescriptionPadOffComponent.prototype.SaveMedicineNameInMedDB = function (type, item) {
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
    DashboardPrescriptionPadOffComponent.prototype.onRemoveMedName = function (type, data) {
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
    DashboardPrescriptionPadOffComponent.prototype.getSafeContent = function (data) {
        return this.domSanitizer.bypassSecurityTrustHtml(data);
    };
    DashboardPrescriptionPadOffComponent.prototype.getClassLanguage = function () {
        if (this.languageOptionSelected == "") {
            return 'btn sm_green-btn lang-btn';
        }
        else {
            return 'btn sm_green-btn lang-btn active';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.languageSave = function () {
        if (this.languageOptionSelected == "") {
            this.languageOptionSelected = this.doctorData.language;
            // this.doTranslation("translated_doctorName")
            // this.doTranslation("translated_clinicName")
            this.doTranslation("translated_appointmentText");
            this.doTranslation("translated_emergencyText");
            this.doTranslation("translated_treatmentText");
            this.doTranslation("translated_servicesText");
            this.doTranslation("translated_footer");
            this.doTranslation("translated_VaccinationHeading");
            this.doTranslation("translated_PreCondHeading");
            this.doTranslation("translated_allergyHeading");
            this.doTranslation("translated_BIHeading");
            this.doTranslation("translated_PTHeading");
            this.doTranslation("translated_sympHeading");
            this.doTranslation("translated_diagnosisHeading");
            this.doTranslation("translated_instHeading");
            this.doTranslation("translated_invHeading");
            this.doTranslation("translated_surgHeading");
            this.doTranslation("translated_medication");
            this.doTranslation("translated_eyeHeading");
            this.doTranslation("translated_OTHeading");
        }
        else {
            this.languageOptionSelected = "";
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.previewClicked = function () {
        if (this.consultingPatient.fee && isNaN(this.consultingPatient.fee)) {
            this.toastr.warning("Invalid fee", "Warning");
            return;
        }
        if (this.consultingPatient.age && isNaN(this.consultingPatient.age)) {
            this.toastr.warning("Invalid age", "Warning");
            return;
        }
        if (this.consultingPatient.weight && isNaN(this.consultingPatient.weight)) {
            this.toastr.warning("Invalid weight", "Warning");
            return;
        }
        if (this.consultingPatient.height && isNaN(this.consultingPatient.height)) {
            this.toastr.warning("Invalid height", "Warning");
            return;
        }
        if (this.languageOptionSelected != "") {
            // this.loading = true
            // var container = document.getElementById("previewModalPdf");
            // let object = {
            //     language:this.languageOptionSelected,
            //     text:container.innerHTML
            // }
            // this.userService.GoogleTransaltion(object).subscribe(data => {
            //     this.loading = false
            //     console.log(data)            
            //     if(data.response == true){
            // this.translatedDiv = data.data
            // $("#previewModal").modal("hide");
            $("#translated_div").modal("show");
            //     }else{
            //         this.toastr.error("Some error occured while transaltion. Please try again!","Error")
            //     }
            // }, err => {
            //     console.log(err);
            // })
        }
        else {
            $("#previewModal").modal("show");
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.setAllShiftsForPreview = function () {
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
    DashboardPrescriptionPadOffComponent.prototype.doTranslation = function (type) {
        var _this = this;
        setTimeout(function () {
            if (_this.languageOptionSelected != "") {
                // if(type=="translated_doctorName"){
                //     var container = document.getElementById("translated_doctorName");
                //     console.log(container)
                //     let object = {
                //         language:this.languageOptionSelected,
                //         text:container.innerHTML.toString().toLowerCase()
                //     }
                //     this.userService.GoogleTransaltion(object).subscribe(data => {
                //         console.log(data)            
                //         if(data.response == true){
                //             this.translated_doctorName = data.data
                //         }else{
                //             this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                //         }
                //     }, err => {
                //         console.log(err);
                //     })                
                // }
                // else if(type=="translated_clinicName"){
                //     var container = document.getElementById("translated_clinicName");
                //     let object = {
                //         language:this.languageOptionSelected,
                //         text:container.innerHTML.toString().toLowerCase()
                //     }
                //     this.userService.GoogleTransaltion(object).subscribe(data => {
                //         console.log(data)            
                //         if(data.response == true){
                //             this.translated_clinicName = data.data
                //         }else{
                //             this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                //         }
                //     }, err => {
                //         console.log(err);
                //     })
                // }
                // else 
                if (type == "translated_appointmentText") {
                    var container = document.getElementById("translated_appointmentText");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML.toString().toLowerCase()
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_appointmentText = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_emergencyText") {
                    var container = document.getElementById("translated_emergencyText");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML.toString().toLowerCase()
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_emergencyText = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_treatmentText") {
                    var container = document.getElementById("translated_treatmentText");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML //.toString().toLowerCase()
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_treatmentText = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_servicesText") {
                    var container = document.getElementById("translated_servicesText");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML //.toString().toLowerCase()
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_servicesText = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_medication") {
                    var container = document.getElementById("translated_medication");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_medication = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_PreCondHeading") {
                    var container = document.getElementById("translated_PreCondHeading");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML.toString().toLowerCase()
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_PreCondHeading = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_BIHeading") {
                    var container = document.getElementById("translated_BIHeading");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML.toString().toLowerCase()
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_BIHeading = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_allergyHeading") {
                    var container = document.getElementById("translated_allergyHeading");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML.toString().toLowerCase()
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_allergyHeading = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_sympHeading") {
                    var container = document.getElementById("translated_sympHeading");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML.toString().toLowerCase()
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_sympHeading = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_PTHeading") {
                    var container = document.getElementById("translated_PTHeading");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML.toString().toLowerCase()
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_PTHeading = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_diagnosisHeading") {
                    var container = document.getElementById("translated_diagnosisHeading");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML.toString().toLowerCase()
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_diagnosisHeading = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_invHeading") {
                    var container = document.getElementById("translated_invHeading");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_invHeading = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_OTHeading") {
                    var container = document.getElementById("translated_OTHeading");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_OTHeading = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_surgHeading") {
                    var container = document.getElementById("translated_surgHeading");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_surgHeading = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_instHeading") {
                    var container = document.getElementById("translated_instHeading");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_instHeading = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_eyeHeading") {
                    var container = document.getElementById("translated_eyeHeading");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML.toString().toLowerCase()
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_eyeHeading = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_footer") {
                    var container = document.getElementById("translated_footer");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_footer = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else if (type == "translated_VaccinationHeading") {
                    var container = document.getElementById("translated_VaccinationHeading");
                    var object = {
                        language: _this.languageOptionSelected,
                        text: container.innerHTML.toString().toLowerCase()
                    };
                    _this.userService.GoogleTransaltion(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.translated_VaccinationHeading = data.data;
                        }
                        else {
                            _this.toastr.error("Some error occured while transaltion. Please try again!", "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
        }, 1000);
    };
    DashboardPrescriptionPadOffComponent.prototype.resetClassPrecPreset = function () {
        var medi = false;
        var inv = false;
        var symp = false;
        var diag = false;
        var instr = false;
        var surgery = false;
        var othertreat = false;
        if (!(this.symptomsComplete == true && this.symptomsSelected.length > 0)) {
            symp = true;
        }
        if (!(this.diagnosisComplete == true && this.diagnosisSelected.length > 0)) {
            diag = true;
        }
        if (!(this.treatmentComplete == true)) {
            othertreat = true;
        }
        if (!(this.investigationIndicatorComplete == true && this.investigationArray.length > 0)) {
            inv = true;
        }
        if (!(this.surgeryComplete == true && this.surgerySelectedArray.length > 0)) {
            surgery = true;
        }
        if (!(this.instructionsComplete == true && this.instructionsSelected.length > 0)) {
            instr = true;
        }
        if (this.medicationComplete == false) {
            medi = true;
        }
        if (medi == true && inv == true && symp == true && diag == true && instr == true && surgery == true && othertreat == true) {
            for (var i = 0; i < this.savedPrescriptionPadArray.length; i++) {
                if (this.savedPrescriptionPadArray[i].status == true) {
                    console.log("fdgbvkjfgbvjsbvjskdkjv");
                    this.savedPrescriptionPadArray[i].status = false;
                    break;
                }
            }
        }
        else {
            for (var i = 0; i < this.savedPrescriptionPadArray.length; i++) {
                if (this.savedPrescriptionPadArray[i].id == this.temp_preset_id) {
                    this.savedPrescriptionPadArray[i].status = true;
                }
                else {
                    this.savedPrescriptionPadArray[i].status = false;
                }
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.resetSurgery = function () {
        this.surgeryComplete = false;
        this.totalSurgeryOptionsSelected = 0;
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
    };
    DashboardPrescriptionPadOffComponent.prototype.checkOptionOfPad = function (value) {
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
    DashboardPrescriptionPadOffComponent.prototype.getFooterText = function () {
        if (!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length < 1) {
            return "Not for Medico-Legal Purpose";
        }
        else {
            return this.doctorData.pad_customization_options[12].text;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getHeaderText = function () {
        if (!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length < 1) {
            return "PLEASE TAKE PRIOR APPOINTMENT";
        }
        else {
            return this.doctorData.pad_customization_options[8].text;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.saveDoctorPrescriptionForPatient = function () {
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
            medicationComplete: false,
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
        console.log(this.consultingPatient.ID);
        var prec_id;
        if (this.consultingPatient.ID) {
            prec_id = this.consultingPatient.ID;
        }
        else {
            prec_id = this.consultingPatient.id;
        }
        var dataToSend = {
            doctor_id: this.doctorData._id,
            precription: precription,
            smart_assistant_id: this.consultingPatient.smart_assistant_id._id,
            registration: this.consultingPatient,
            prescription_id: this.day.toString() + this.numericMonth.toString() + this.year.toString() + "-" + prec_id,
            refer_status: this.refer_status,
            referDetail: this.referDetail
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
    DashboardPrescriptionPadOffComponent.prototype.getTestReportClass = function () {
        if (this.consultingPatient.reportPics && this.consultingPatient.reportPics.length > 0) {
            return 'badge green';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.getHistoryClass = function () {
        if (this.consultingPatient.lastVisit.status == true) {
            return 'badge green';
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.openTestReports = function () {
        if (this.consultingPatient.reportPics && this.consultingPatient.reportPics.length > 0) {
            $("#Test-report-Modal").modal("show");
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.openHistoryModal = function () {
        console.log(this.consultingPatient);
        if (this.consultingPatient) {
            if (this.consultingPatient.lastVisit) {
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
            }
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.importFromHistory = function () {
        this.preConditionComplete = this.preConditionComplete_history;
        this.finalPreConditions = this.finalPreConditions_history;
        this.allergyComplete = this.allergyComplete_history;
        this.finalAllergy = this.finalAllergy_history;
        this.symptomsComplete = this.symptomsComplete_history;
        this.symptomsSelected = this.symptomsSelected_history;
        this.diagnosisComplete = this.diagnosisComplete_history;
        this.diagnosisSelected = this.diagnosisSelected_history;
        this.medicationComplete = this.medicationComplete_history;
        this.tempMedicationArray = this.tempMedicationArray_history;
        this.instructionsComplete = this.instructionsComplete_history;
        this.instructionsSelected = this.instructionsSelected_history;
        this.treatmentComplete = this.treatmentComplete_history;
        this.treatmentArray = this.treatmentArray_history;
        $("#historyModal").modal("hide");
    };
    DashboardPrescriptionPadOffComponent.prototype.getDay = function (n) {
        if (n < 10) {
            return "0" + n;
        }
        else {
            return n;
        }
    };
    DashboardPrescriptionPadOffComponent.prototype.SaveUniqueMedicinesForAnalytics = function (type, data) {
        var array = [];
        var object;
        object = {};
        if (type == 'Symptoms' || type == 'Diagnosis') {
            for (var i = 0; i < data.length; i++) {
                array.push(data[i].value);
            }
            object.array = array;
        }
        else if (type == 'Surgery') {
            object.surgery = true;
            for (var i = 0; i < data.length; i++) {
                array.push({
                    type: data[i].name,
                    value: data[i].div[0].procedure_name[0].value
                });
            }
            object.array = array;
        }
        else {
            object.medication = true;
            object.data = data;
        }
        object.type = type;
        object.doctor_id = this.doctorData._id;
        console.log(object);
        this.userService.SaveUniqueMedicinesForAnalytics(object).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    DashboardPrescriptionPadOffComponent.prototype.SaveUniqueMedicinesForAnalyticsInvestigation = function (type, data) {
        var array = [];
        var object;
        object = {};
        object.type = type;
        object.data = data;
        object.doctor_id = this.doctorData._id;
        object.investigation = true;
        console.log(object);
        this.userService.SaveUniqueMedicinesForAnalyticsInvestigation(object).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('previewModalPdf'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DashboardPrescriptionPadOffComponent.prototype, "el", void 0);
    DashboardPrescriptionPadOffComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-prescription-pad-off',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-prescription-pad-off/dashboard-prescription-pad-off.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-prescription-pad-off/dashboard-prescription-pad-off.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4_ng2_scroll_to_el__["b" /* ScrollToService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], DashboardPrescriptionPadOffComponent);
    return DashboardPrescriptionPadOffComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-prescription-pad-off/dashboard-prescription-pad-off.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPrescriptionPadOffModule", function() { return DashboardPrescriptionPadOffModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_prescription_pad_off_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-prescription-pad-off/dashboard-prescription-pad-off.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_prescription_pad_off_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-prescription-pad-off/dashboard-prescription-pad-off-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_countdown_timer__ = __webpack_require__("../../../../ngx-countdown-timer/ngx-countdown-timer.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_countdown_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_countdown_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/ng2-dnd.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_auto_complete__ = __webpack_require__("../../../../ng4-auto-complete/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_chips__ = __webpack_require__("../../../../ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DashboardPrescriptionPadOffModule = /** @class */ (function () {
    function DashboardPrescriptionPadOffModule() {
    }
    DashboardPrescriptionPadOffModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__dashboard_prescription_pad_off_routing_module__["a" /* DashboardPrescriptionPadOffRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_chips__["a" /* TagInputModule */],
                // ShContextMenuModule,
                __WEBPACK_IMPORTED_MODULE_11_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_countdown_timer__["CountdownTimerModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_dnd__["a" /* DndModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng4_auto_complete__["a" /* AutoCompleteModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__["c" /* MatDialogModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_prescription_pad_off_component__["a" /* DashboardPrescriptionPadOffComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__providers_user_service__["a" /* UserService */]]
        })
    ], DashboardPrescriptionPadOffModule);
    return DashboardPrescriptionPadOffModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-prescription-pad-off.module.chunk.js.map