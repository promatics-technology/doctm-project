webpackJsonp(["header-three-layout.module"],{

/***/ "../../../../../src/app/header-three-layout/header-three-layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderThreeLayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_three_layout_component__ = __webpack_require__("../../../../../src/app/header-three-layout/header-three-layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__header_three_layout_component__["a" /* HeaderThreeLayoutComponent */],
        children: [
            { path: '', redirectTo: 'smartassistant' },
            { path: 'smartassistant', loadChildren: './smartassistant/smartassistant.module#SmartassistantModule' },
            { path: 'smartassistantnew', loadChildren: './smart-assistant-new-appointment/smart-assistant-new-appointment.module#SmartAssistantNewAppointmentModule' },
            { path: 'smartassistantregister', loadChildren: './smart-assistant-new-register/smart-assistant-new-register.module#SmartAssistantNewRegisterModule' },
            { path: 'smartassistantappointmentList', loadChildren: './appointment-list/appointment-list.module#AppointmentListModule' },
        ]
    }
];
var HeaderThreeLayoutRoutingModule = /** @class */ (function () {
    function HeaderThreeLayoutRoutingModule() {
    }
    HeaderThreeLayoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], HeaderThreeLayoutRoutingModule);
    return HeaderThreeLayoutRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-three-layout/header-three-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn.btn-custom.date-btn {\n    padding: 6px 15px !important;\n    min-width: auto;\n}\n.action-option {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 10px;\n    font-size: 16px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -moz-flex;\n    display: -o-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.grey-placeholder{\n\tcolor:#BBBBBB !important;\n}\n.black-class{\n\tcolor:black;\n}\n.action-option a {\n    color: #002160;\n}\n.md-tab.inner-tab .nav-tabs .active a {\n    padding: 10px 15px;\n    background-color: rgba(255, 255, 255, 0.5);\n    font-size: 20px;\n    text-transform: capitalize;\n}\n.md-tab.inner-tab .nav-tabs .active a {\n    padding: 10px 15px;\n    background-color: rgba(255, 255, 255, 0.5);\n}\n.md-tab.inner-tab .nav-tabs>li>a {\n    text-align: center;\n    text-transform: capitalize;\n    margin-right: 2px;\n    font-size: 20px;\n    font-weight: 500;\n    padding: 10px 15px;\n    min-width: 160px;\n    color: rgba(0, 0, 0, 0.47);\n    border: 0;\n    border-bottom: 2px solid transparent;\n    -webkit-transition: all 0.3s ease 0s;\n    transition: all 0.3s ease 0s;\n    margin-bottom: 0\n}\n.cstm-drpdown-cnsulted-doc {\n    margin: 20px 0;\n    position: relative;\n}\n.smrt-ass-dropdown {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n.cstm-drpdown-cnsulted-doc select {\n    font-size: 25px;\n    color: #fff;\n    width: 100%;\n    position: relative;\n    cursor: pointer;\n    padding: 15px;\n    background-color: #01b0f0;\n    border-radius: 10px;\n    border: none;\n}\n.cstm-drpdown-cnsulted-doc option {\n    border-bottom: 1px #ccc dashed;\n    padding: 8px 7px;\n    -webkit-transition: .3s all;\n    transition: .3s all;\n    display: block;\n    color: #00b0f0;\n    border-radius: 0;\n    background-color: #fff;\n    font-size: 20px;\n}\n.consulation-progress-div {\n    float: left;\n    width: 100%;\n    font-size: 22px;\n    color: #0376a0;\n    text-align: left;\n    background-color: #d6e9c6;\n    margin: 20px 0;\n}\n.in-progress {\n    text-align: center;\n    width: 30%;\n    display: inline-block;\n    margin: 5px 0;\n    border-right: 1px solid #0376a0;\n    font-size: 21px;\n    line-height: 1.2;\n}\n.in-progress-detail {\n    width: 67%;\n    float: right;\n    display: inline-block;\n}\n.in-progress-detail .pending_ul>li>a {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 0;\n}\n.in-progress-detail .pending_ul>li {\n    margin-bottom: 0;\n}\n.in-progress-detail .pending_ul>li>a img {\n    width: 50px;\n    height: 50px;\n    float: left;\n    display: inline-block;\n    border-radius: 100px;\n}\n.in-progress-detail .patient-text {\n    text-align: left;\n    padding-left: 70px;\n    padding-top: 4px;\n}\n.smartassistant-panel .panel-success .panel-heading span, .smartassistant-panel .pending-patient-box .pending-heading span {\n    color: #fff;\n}\n.smartassistant-panel .patient-text .patient-duration {\n    color: #bbb;\n}\n.smartassistant-panel .patient-consult-status {\n    font-size: 13px;\n    color: #bbb;\n}\n.smartassistant-panel .patient-text .patient-date {\n    color: #bbb;\n}\n.pending_ul>li>span {\n    right: 20px;\n    top: 7px;\n    font-size: 13px;\n}\n.pending_ul>li>span p {\n    margin-bottom: 5px;\n}\n.pending-exp-time {\n    font-size: 18px;\n}\n.pat-reg-modal-form {\n    width: 600px;\n    right: 60px;\n}\n.cstm-fee-label {\n    background-color: #01b0f0;\n    font-size: 27px;\n    height: 38px!important;\n    padding: 0!important;\n    border: 1px solid #000;\n    text-align: center;\n}\n.cstm-fee-input {\n    border: 1px solid #000;\n    border-radius: 0;\n    height: 38px;\n    border-left: 0;\n    font-size: 25px;\n}\n.select-doctor {\n    font-size: 16px;\n    color: #fff;\n    width: 100%;\n    cursor: pointer;\n    background-color: #01b0f0;\n    border-radius: 0px;\n    border: none;\n    position: relative;\n}\n.cstm-caret {\n    display: inline-block;\n    width: 0;\n    cursor: pointer;\n    position: absolute;\n    height: 0;\n    margin-left: 4px;\n    color: #000;\n    top: 12px;\n    background-color: #01b0f0;\n    z-index: 9;\n    right: 20px;\n    margin-bottom: 9px;\n    vertical-align: middle;\n    border-top: 12px dashed;\n    border-right: 10px solid transparent;\n    border-left: 10px solid transparent;\n}\n.cstm-caret-big {\n    display: inline-block;\n    width: 0;\n    cursor: pointer;\n    position: absolute;\n    height: 0;\n    margin-left: 4px;\n    color: #000;\n    top: 22px;\n    background-color: #01b0f0;\n    z-index: 1;\n    right: 5px;\n    margin-bottom: 9px;\n    vertical-align: middle;\n    border-top: 17px dashed;\n    border-right: 14px solid transparent;\n    border-left: 14px solid transparent;\n}\n.cstm-crt-wrap {\n    position: relative;\n}\n.regis-modal-body .select-opt .disabled {\n    color: #ddd;\n}\n.select-opt {\n    border-bottom: 1px #ccc dashed!important;\n    padding: 10px!important;\n    color: #00b0f0;\n    border-radius: 0;\n    background-color: #fff;\n    font-size: 20px;\n}\n.regis-modal-body .input-btn {\n    width: 100%;\n    padding: 8px;\n}\n.ok-btn {\n    background-color: transparent;\n    border: 1px solid #002160;\n    width: 50px;\n    margin-left: -15px;\n}\n.reg-btn {\n    background-color: rgb(161, 210, 83);\n    color: #fff;\n    width: 100%;\n    border: rgb(150, 195, 78);\n}\n.regis-modal-body label {\n    height: 35px;\n    padding: 9px;\n}\n.reg-btn .cancel {\n    background-color: #ffc000!important;\n    border: #ffc000!important;\n}\n.name-cstm-input {\n    border-radius: 0;\n    border: none;\n    background-color: #00b0f0;\n    color: #fff;\n    font-size: 20px;\n    text-align: center;\n    padding: 4px!important;\n}\n.time-select {\n    width: 800px!important;\n    right: 35%!important;\n}\n.time-slots {\n    float: left;\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 20px;\n    /*border: 1px solid #eee;*/\n}\n.time-ul {\n    width: 100%;\n    float: left;\n    margin: 0px;\n    padding: 0;\n    text-align: center;\n    min-height: 90px;\n}\n.time-ul>li {\n    float: left;\n    width: 16%;\n}\n.time-ul>li>a {\n    padding: 6px;\n    border: 1px solid #333;\n    display: block;\n    margin: 5px 5px;\n    background-color:#a8e8ff;\n    /*background-color: #00b0f0;*/\n    color: #000;\n}\n.time-ul>li>a:hover {\n    text-decoration: none;\n    background-color: #000!important;\n    color: #fff!important;\n}\n.already-selected {\n    background-color: #000!important;\n    color: #fff!important;\n}\n.blue-slot {\n    background-color: #a8e8ff!important;\n}\n.grey-slot {\n    background-color: rgba(0,0,0,.2)!important;\n}\n/********  SIDEBAR OPTION CSS ************/\n/*************  END **********/\n.pickup-time {\n    margin-bottom: 10px;\n    padding: 0;\n    /*width: 16%;*/\n    /*border: 2px solid #01b0f0;*/\n}\n.btn-success {\n    color: #fff;\n    background-color: #01b0f0;\n    border: 1px solid #bdbdbd;\n    border-radius: 10px;\n    padding: 2px 12px;\n    margin-bottom: 8px;\n}\n.btn-success:active:hover {\n    color: #fff;\n    background-color: #01b0f0;\n    border: 1px solid #bdbdbd;\n    border-radius: 10px;\n    padding: 2px 12px;\n    margin-bottom: 8px;\n}\nfieldset.fieldset-preset {\n    min-width: unset;\n    padding: 0 10px;\n    border: 1px solid rgba(56, 94, 138, 1);\n}\nlegend.legend-preset {\n    width: 55%;\n    border-bottom: none;\n    text-align: center;\n    margin-bottom: 10px;\n    font-size: 15px;\n}\n.tags-listing-div {\n    width: 30%;\n    margin: auto;\n    padding: 0 15px;\n    float: none;\n}\n.camera-div {\n    /*height:470px;*/\n    height: 600px;\n    padding: 10px;\n}\n.camera-btn {\n    text-align: center;\n    padding: 15px;\n    margin-top: 55px;\n}\n.upload-image {\n    padding: 3px;\n    text-align: center;\n}\n.upload-image a {\n    text-decoration: none;\n    color: #333;\n    position: absolute;\n    top: -8px;\n    right: 10px;\n}\n.upload-image i {\n    font-size: 16px;\n    padding: 10px;\n    background-color: #01b0f0;\n    border-radius: 5px;\n}\n.upload-image .img-thumbnail {\n    /*padding: 5px;\n    height:70px;\n    width:100%;*/\n    padding: 5px;\n    height: 35px;\n    width: 35px;\n}\n.p-upload {\n    margin-bottom: 11px;\n}\n.close-thik:after {\n    content: '\\2716';\n}\n/*09 nov 2018*/\n.fieldDesign\n{\n    width: 100%;\n    float: left;\n    position: relative;\n}\n.fieldDesign.input-group-addon\n{\n    background-color: #fff!important;\n    border: 1px solid rgba(56, 94, 138, 1)!important;\n    border-radius: 6px 0 0 6px!important;\n}\n.fieldDesign span\n{\n    border: 1px solid rgba(56, 94, 138, 1);\n    border-radius:6px 0px 0px 6px;\n}\n/*14-november*/\n.cstm-calender-opt, .cstm-calender-opt:hover{\n    color: #000;\n    text-decoration: none;\n}\n.regis-modal-body label{\n    margin:0px;\n}\n.mg-bottom{\n    margin-bottom:20px;\n}\n.reg-bnt{\n    margin: 5px 0px;\n}\n.cstm-modal-lg{\n    display: table;\n}\n.new-table .table > tbody > tr > td{\n    border:none!important;    \n    line-height: 2.428571!important;\n}\n.cstm_modal{\n    display: table;\n}\n.my_tab_new .table > tbody > tr > td{\n    border:transparent!important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-three-layout/header-three-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-headerthree></app-headerthree>\n<router-outlet></router-outlet>\n<!-- Modal -->\n<div class=\"loader-box\" *ngIf=\"loading\">\n   <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"modal fade cus-modal\" id=\"registrationForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n   <div class=\"modal-dialog cstm-modal-lg\" role=\"document\">\n      <div class=\"modal-content modal-lg\">\n         <div class=\"modal-header\" *ngIf=\"!webCam\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"ngOnInit()\">\n            <span aria-hidden=\"true\">×</span>\n            </button>\n            <div class=\"row cstm-mr\">\n               <div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12\">\n                  <div class=\"input-group fieldDesign\">\n                     <span class=\"input-group-addon\">+91</span>\n\t\t\t\t\t  <input class=\"form-control txtfield\" name=\"\" placeholder=\"Patient Mobile Number\" type=\"text\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"registrationData.phone\" [ngModelOptions]=\"{standalone: true}\" (blur)=\"fetchPatientAppointments(registrationData.phone)\" (keydown)=\"hide()\"/>\n\t\t\t\t</div>\n               </div>\n\t\t\t   <div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" pattern=\"[a-zA-Z ]+\" placeholder=\"Patient Name\" [(ngModel)]=\"registrationData.name\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"SearchPatientNameReg($event.target.value)\"  [matAutocomplete]=\"autoPatNameReg\" (blur)=\"GetPatientLastPrescriptionByName()\" (focus)=\"getPatientList()\"  (keyup.enter)=\"findPatientAppointmentByPhoneAndName(registrationData)\"/>\n                              <mat-autocomplete #autoPatNameReg=\"matAutocomplete\" class=\"mat-autocomplete-registration\" (optionSelected)=\"fillInfo($event)\" >\n                                 <mat-option *ngFor=\"let patient of patientListReg\" [value]=\"patient.name\">\n                                 {{patient.name}}\n                                 </mat-option>\n                              </mat-autocomplete>\n\t\t\t   </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-12 col-xs-12 text-center hvr_green\">\n                  <button class=\"btn ok-btn\" style=\"padding: 5px;\" type=\"button\" (click)=\"findPatientAppointmentByPhoneAndName(registrationData)\"> Go </button>\n               </div>\n            </div>\n            <!-- <h4 class=\"modal-title\"> Registration Form </h4> -->\n         </div>\n         <div class=\"modal-body\" *ngIf=\"numberWritten\">\n            <div class=\"row\" *ngIf=\"!webCam\">\n               <div class=\"col-lg-6\">\n                  <div class=\" mg-bottom\">\n                     <span  class=\"caret cstm-caret\"></span>\n                     <select [(ngModel)]=\"consultationDoctor\" (change)=\"checkWhichFieldsToShow()\" class=\"form-control txtfield select-doctor\">\n                     <option selected = \"Select Doctor\" disabled=\"\" value=\"Select Doctor\">SELECT DOCTOR* </option>\n                     <option value=\"{{doctor._id}}\" *ngFor=\"let doctor of dataDoctors\"> Dr. {{doctor.first_name}}</option>\n                     </select>\n                  </div>\n               </div>\n               <div class=\"col-lg-6\">\n                  <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12 cstm-crt-wrap\">\n                     <span  class=\"caret cstm-caret\"></span>\n                     <select class=\"form-control txtfield select-doctor\" [(ngModel)]=\"registrationData.type\" [ngModelOptions]=\"{standalone: true}\">\n                     <option selected=\"\" value=\"Select_doc\" disabled=\"\" class=\"select-opt\"> Consultation Type* </option>\n                     <option *ngFor=\"let ct of consultationType\" value=\"{{ct}}\">{{ct}}</option>\n                     </select>\n                  </div>\n               </div>\n               <div class=\"col-lg-12 new-table\">\n                  <div class=\"\">\n                     <table class=\"table\">\n                        <!--tr>\n                           <td width=\"150px\">\n                              <label>Patient Name*</label>\n                           </td>\n                           <td>\n                              <input type=\"text\" class=\"form-control txtfield\" name=\"\" pattern=\"[a-zA-Z ]+\" placeholder=\"\" [(ngModel)]=\"registrationData.name\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"SearchPatientNameReg($event.target.value)\"  [matAutocomplete]=\"autoPatNameReg\" (blur)=\"GetPatientLastPrescriptionByName()\"/>\n                              <mat-autocomplete #autoPatNameReg=\"matAutocomplete\" class=\"mat-autocomplete-registration\" (optionSelected)=\"fillInfo($event)\" >\n                                 <mat-option *ngFor=\"let patient of patientListReg\" [value]=\"patient.name\">\n                                 {{patient.name}}\n                                 </mat-option>\n                              </mat-autocomplete>\n                           </td>\n                        </tr-->\n                        <tr *ngIf=\"field_dob\">\n                           <td width=\"185px\" ><label>Patient DOB*</label></td>\n                           <td>\n                              <div  *ngIf=\"field_dob\">\n                                 <angular2-date-picker class=\"{{dob_class}}\" [(ngModel)]=\"registrationData.dob\" [ngModelOptions]=\"{standalone: true}\" [settings]=\"settings\" (ngModelChange)=\"changeClass('dobClass')\"></angular2-date-picker>\n                              </div>\n                           </td>\n                        </tr>\n                        <tr *ngIf=\"field_age\">\n                           <td width=\"185px\" ><label>Patient Age*</label></td>\n                           <td>\n\t\t\t\t\t\t   <div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n                                 <input type=\"text\" min=\"1\" max=\"100\" class=\"form-control txtfield\" name=\"\" placeholder=\"Age\" [(ngModel)]=\"registrationData.age\"  [ngModelOptions]=\"{standalone: true}\" />\n                              </div>\n\t\t\t\t\t\t\t  <div class=\"col-lg-6\">\n\t\t\t\t\t\t\t <mat-radio-group [(ngModel)]=\"registrationData.age_param\">\n\t\t\t\t\t\t\t  <mat-radio-button value=\"years\">Year(s)</mat-radio-button>\n\t\t\t\t\t\t\t  <mat-radio-button value=\"months\" >Month(s)</mat-radio-button>\n\t\t\t\t\t\t\t</mat-radio-group> \n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t   \n\t\t\t\t\t\t   </div>\n                              \n                           </td>\n                        </tr>\n                        <tr>\n                           <td width=\"185px\"><label>Gender*</label></td>\n                           <td>\n                              <select class=\"form-control txtfield {{genderClass}}\" [(ngModel)]=\"registrationData.gender\" [ngModelOptions]=\"{standalone: true}\" (change)=\"changeClass('genderClass')\">\n                              <option selected=\"\" disabled=\"\" value=\"Select\"> Gender </option>\n                              <option value=\"Male\"> Male </option>\n                              <option value=\"Female\"> Female </option>\n                              <option value=\"Other\"> Other </option>\n                              </select>\n                           </td>\n                        </tr>\n                        <tr>\n                           <td width=\"185px\"><label>Address*</label></td>\n                           <td>\n                              <div>\n\t\t\t\t\t\t\t  \n                                <!-- <input class=\"form-control txtfield\" placeholder=\"City\" [matAutocomplete]=\"auto1\" (keyup)=\"SearchCity($event.target.value)\" [(ngModel)]=\"registrationData.city\" [ngModelOptions]=\"{standalone: true}\" /> -->         \n\t\t\t\t\t\t\t\t<input class=\"form-control txtfield\" placeholder=\"City\" [(ngModel)]=\"registrationData.city\" [ngModelOptions]=\"{standalone: true}\" ngx-google-places-autocomplete [options]=\"{ types: [(cities)],componentRestrictions: { country: 'IN' } }\" #placesRef=\"ngx-places\" (onAddressChange)=\"changeCity($event)\"  style=\"margin-top:20px;\" (blur)=\"clearSuggestions()\"/><!--mat-autocomplete #auto1=\"matAutocomplete\" class=\"mat-autocomplete-registration\">\n                                    <mat-option *ngFor=\"let city of allCities\" [value]=\"city\" (onSelectionChange)=\"GetLatLng(city)\">\n                                    {{city}}\n                                    </mat-option>\n                                 </mat-autocomplete-->\n                                 <input class=\"form-control txtfield\" placeholder=\"Area/Location\" [(ngModel)]=\"registrationData.location\" [ngModelOptions]=\"{standalone: true}\" ngx-google-places-autocomplete [options]=\"{ types: [(geocode)],componentRestrictions: { country: 'IN' } }\" #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" style=\"margin-top:20px;\" *ngIf=\"area_suggestions.length <=0\"  (keyup)=\"checkSuggestions($event)\"/>\n\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t  <input class=\"form-control txtfield\" placeholder=\"Area/Location\" [(ngModel)]=\"registrationData.location\" [ngModelOptions]=\"{standalone: true}\"  style=\"margin-top:20px;\" [matAutocomplete]=\"autoAreaFill\" (keyup)=\"SearchArea($event.target.value)\" *ngIf=\"area_suggestions.length>0\"/>\n\t\t\t\t\t\t\t\t <mat-autocomplete  #autoAreaFill=\"matAutocomplete\" class=\"mat-autocomplete-registration\" (optionSelected)=\"handleAddressClick($event)\" >\n                                 <mat-option *ngFor=\"let area of area_suggestions\" [value]=\"area\">\n                                 {{area.location}}\n                                 </mat-option>\n                                 </mat-autocomplete>\n                              </div>\n                           </td>\n                        </tr>\n                        <tr *ngIf=\"field_weight\">\n                           <td width=\"185px\"><label>Weigth (Kg)</label></td>\n                           <td><input class=\"form-control txtfield\" name=\"\" placeholder=\"weight\" type=\"text\" min=\"1\" max=\"150\" [(ngModel)]=\"registrationData.weight\" [ngModelOptions]=\"{standalone: true}\"></td>\n                        </tr>\n                        <tr *ngIf=\"field_height\">\n                           <td width=\"185px\"><label>Height (cm)</label></td>\n                           <td> <input class=\"form-control txtfield\" name=\"\" placeholder=\"height\" type=\"text\" min=\"1\" max=\"240\" [(ngModel)]=\"registrationData.height\" [ngModelOptions]=\"{standalone: true}\">\n                           </td>\n                        </tr>\n                        <tr *ngIf=\"field_temp\">\n                           <td width=\"185px\"><label>Temperature (0F)</label></td>\n                           <td>\n                              <select class=\"form-control txtfield {{temp_class}}\" [(ngModel)]=\"registrationData.temp\" [ngModelOptions]=\"{standalone: true}\" (change)=\"changeClass('tempClass')\">\n                              <option value=\"\"> Select </option>\n                              <option value=\"{{value}}\" *ngFor=\"let value of temperature_range\"> {{value}} </option>\n                              </select>\n                           </td>\n                        </tr>\n                        <tr *ngIf=\"field_pulse\">\n                           <td width=\"185px\"><label>Pulse (per min)</label></td>\n                           <td>\n                              <select class=\"form-control txtfield {{pulse_class}}\" [(ngModel)]=\"registrationData.pulse\" [ngModelOptions]=\"{standalone: true}\" (change)=\"changeClass('pulseClass')\">\n                              <option value=\"\"> Select </option>\n                              <option value=\"{{value}}\" *ngFor=\"let value of pulse_range\"> {{value}} </option>\n                              </select>\n                           </td>\n                        </tr>\n                        <tr *ngIf=\"field_bp\">\n                           <td width=\"185px\"><label>Blood Pressure (mmHg)</label></td>\n                           <td>\n                              <div class=\"\">\n                                 <div class=\" col-md-6 col-sm-6 col-xs-12\"  *ngIf=\"field_bp\" style=\"padding-left: 0px;\">\n                                    <select class=\"form-control txtfield {{sys_class}}\" [(ngModel)]=\"registrationData.bp\" [ngModelOptions]=\"{standalone: true}\" id=\"sys\" (change)=\"changeClass('sys_class')\">\n                                    <option value=\"\"> SYS </option>\n                                    <option value=\"{{value}}\" *ngFor=\"let value of sys_range\"> {{value}} </option>\n                                    </select>\n                                 </div>\n                                 <div class=\" col-md-6 col-sm-6 col-xs-12\" *ngIf=\"field_bp\" style=\"padding-right: 0px;\">\n                                    <select class=\"form-control txtfield {{dia_class}}\" [(ngModel)]=\"registrationData.dia\" [ngModelOptions]=\"{standalone: true}\" (change)=\"changeClass('diaClass')\">\n                                    <option value=\"\"> DIA </option>\n                                    <option value=\"{{value}}\" *ngFor=\"let value of dia_range\"> {{value}} </option>\n                                    </select>\n                                 </div>\n                              </div>\n                           </td>\n                        </tr>\n                        <tr *ngIf=\"field_rbs\">\n                            <td>\n                                <div *ngIf=\"field_rbs\">\n                                    <label>RBS (mg/dL)</label>\n                                </div>\n                            </td>\n                            <td>\n                                <div  *ngIf=\"field_rbs\">\n                                    <select class=\"form-control txtfield {{rbs_class}}\" [(ngModel)]=\"registrationData.rbs\" [ngModelOptions]=\"{standalone: true}\" (change)=\"changeClass('rbsClass')\">\n                                        <option value=\"\"> Select </option>\n                                        <option value=\"{{value}}\" *ngFor=\"let value of rbs_range\"> {{value}} </option>\n                                      </select>\n                                </div>\n                            </td>\n                        </tr>\n\t\t\t\t\t\t    <tr *ngIf=\"field_spo\">\n                            <td>\n                                <div *ngIf=\"field_spo\">\n                                    <label>SpO2 (%)</label>\n                                </div>\n                            </td>\n                            <td>\n                                <div  *ngIf=\"field_spo\">\n                                   <select class=\"form-control txtfield {{spo_class}}\" [(ngModel)]=\"registrationData.spo\" [ngModelOptions]=\"{standalone: true}\" (change)=\"changeClass('spoClass')\">\n                                    <option value=\"Select\"> Select </option>\n                                    <option value=\"{{value}}\" *ngFor=\"let value of spo_range\"> {{value}} </option>\n                                </select>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"field_patientPic\">\n                           <td width=\"185px\"><label>Patient Photo</label></td>\n                           <td>\n                              <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_patientPic && !pateintPic && !uploadedPatientPic\" style=\"padding: 0px;\">\n                                 <span class=\"input-btn btn btn-default\" (click)=\"openWebCam('patient')\">\n                                 Take Picture\n                                 </span>\n                              </div>\n                              <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12 upload-image-main\" *ngIf=\"field_patientPic && (pateintPic || uploadedPatientPic)\">\n                                 <div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-4 upload-image\" (click)=\"openWebCam('patient')\">\n                                    <img href=\"javascript:void(0)\" src=\"{{pateintPic}}\" alt=\"pic\" class=\"img-thumbnail\" *ngIf=\"pateintPic\">\n                                    <img href=\"javascript:void(0)\" src=\"{{pateintPicPath}}{{uploadedPatientPic}}\" alt=\"pic\" class=\"img-thumbnail\" *ngIf=\"uploadedPatientPic\">\n                                 </div>\n                              </div>\n                           </td>\n                        </tr>\n                        <tr *ngIf=\"field_testReport\">\n                           <td width=\"185px\"><label>Upload test reports</label></td>\n                           <td>\n                              <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_testReport && reportPics.length<1\" style=\"padding: 0px;\">\n                                 <span class=\"input-btn btn btn-default\" (click)=\"openWebCam('report')\">\n                                 Take Picture \n                                 </span>\n                              </div>\n                              <div class=\"upload-image-main\" *ngIf=\"field_testReport && reportPics.length>0\">\n                                 <div class=\"col-md-1 col-lg-1 col-sm-1 col-xs-1 upload-image\" *ngFor=\"let image of reportPics;let i = index\">\n                                    <img href=\"javascript:void(0)\" src=\"{{image}}\" alt=\"pic\" class=\"img-thumbnail\">\n                                    <a (click)=\"removeImageFromReportPics(i)\" class=\"close-thik\"></a>\n                                 </div>\n                                 <div class=\"col-md-1 col-lg-1 col-sm-1 col-xs-1 upload-image\" *ngIf=\"reportPics.length<3\">\n                                    <i class=\"fa fa-plus\" (click)=\"openWebCam('report')\"></i>      \n                                 </div>\n                              </div>\n                           </td>\n                        </tr>\n                        <tr *ngIf=\"field_fee\">\n                            <td><div> <label> Fee </label></div></td>\n                            <td><div>  \n                              <input class=\"form-control txtfield \" name=\"\" type=\"number\" [(ngModel)]=\"registrationData.fee\" [ngModelOptions]=\"{standalone: true}\">\n                          </div></td>\n                        </tr>\n                     </table>\n                  </div>\n               </div>\n               <!--  <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <div class=\"regis-modal-body\">\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\">\n                          <span  class=\"caret cstm-caret\"></span>\n                          <select [(ngModel)]=\"consultationDoctor\" (change)=\"checkWhichFieldsToShow()\" class=\"form-control txtfield select-doctor\">\n                              <option selected = \"Select Doctor\" disabled=\"\" value=\"Select Doctor\">SELECT DOCTOR* </option>\n                              <option value=\"{{doctor._id}}\" *ngFor=\"let doctor of dataDoctors\"> Dr. {{doctor.first_name}}</option>\n                          </select>\n                      </div>\n                      <div class=\"mg-bottom col-md-12 col-sm-12 col-xs-12\">\n                          <label>Patient Name*</label>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_dob\">\n                          <label>Patient DOB*</label>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_age\">\n                          <label>Patient Age*</label>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\">\n                          <label>Gender*</label>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" style=\"height:70px;float:left;width:100%;\">\n                          <label>Address*</label>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_weight\">\n                          <label>Weight (Kg)</label>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_height\">\n                          <label>Height (cm)</label>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_temp\">\n                          <label>Temperature(0F)</label>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_pulse\">\n                          <label>Pulse (per min)</label>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_bp\">\n                          <label>Blood Pressure (mmHg)</label>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_rbs\">\n                          <label>RBS (mg/dL)</label>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_spo\">\n                          <label>SpO2 (%)</label>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_patientPic\">\n                          <label>Patient Photo</label>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_testReport\">\n                          <label>Upload test reports</label>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_fee\">\n                          <label class=\"col-md-6 cstm-fee-label\"> FEE </label>\n                          <div class=\"col-md-6 col-sm-6\" style=\"padding-left:0\">  \n                              <input class=\"form-control txtfield cstm-fee-input\" name=\"\" type=\"number\" [(ngModel)]=\"registrationData.fee\" [ngModelOptions]=\"{standalone: true}\">\n                          </div>\n                      </div>\n                  </div>\n                  </div>\n                  <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <div class=\"regis-modal-body\">\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12 cstm-crt-wrap\">\n                          <span  class=\"caret cstm-caret\"></span>\n                          <select class=\"form-control txtfield select-doctor\" [(ngModel)]=\"registrationData.type\" [ngModelOptions]=\"{standalone: true}\">\n                              <option selected=\"\" value=\"Select_doc\" disabled=\"\" class=\"select-opt\"> Consultation Type* </option>\n                              <option *ngFor=\"let ct of consultationType\" value=\"{{ct}}\">{{ct}}</option>\n                          </select>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\">\n                          <input type=\"text\" class=\"form-control txtfield\" name=\"\" pattern=\"[a-zA-Z ]+\" placeholder=\"\" [(ngModel)]=\"registrationData.name\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"SearchPatientNameReg($event.target.value)\"  [matAutocomplete]=\"autoPatNameReg\" (blur)=\"GetPatientLastPrescriptionByName()\"/>\n                          <mat-autocomplete #autoPatNameReg=\"matAutocomplete\" class=\"mat-autocomplete-registration\">\n                            <mat-option *ngFor=\"let patient of patientListReg\" [value]=\"patient.name\">\n                              {{patient.name}}\n                            </mat-option>\n                          </mat-autocomplete>\n                        \n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_dob\">\n                          <angular2-date-picker [(ngModel)]=\"registrationData.dob\" [ngModelOptions]=\"{standalone: true}\" [settings]=\"settings\"></angular2-date-picker>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_age\">\n                          <input type=\"text\" min=\"1\" max=\"100\" class=\"form-control txtfield\" name=\"\" placeholder=\"Age\" [(ngModel)]=\"registrationData.age\" [ngModelOptions]=\"{standalone: true}\" />\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\">\n                          <select class=\"form-control txtfield\" [(ngModel)]=\"registrationData.gender\" [ngModelOptions]=\"{standalone: true}\">\n                              <option selected=\"\" disabled=\"\" value=\"Select\"> Gender </option>\n                              <option value=\"Male\"> Male </option>\n                              <option value=\"Female\"> Female </option>\n                              <option value=\"Other\"> Other </option>\n                          </select>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" style=\"height:70px;float:left;width:100%;\"> \n                      <div>\n                                     <input class=\"form-control txtfield\" placeholder=\"City\" [matAutocomplete]=\"auto1\" (keyup)=\"SearchCity($event.target.value)\" [(ngModel)]=\"registrationData.city\" [ngModelOptions]=\"{standalone: true}\">\n                          <mat-autocomplete #auto1=\"matAutocomplete\" class=\"mat-autocomplete-registration\">\n                            <mat-option *ngFor=\"let city of citiesList\" [value]=\"city.name\" (onSelectionChange)=\"GetLatLng(city.name)\">\n                              {{city.name}}\n                            </mat-option>\n                          </mat-autocomplete>\n                      \n                     <br>\n                          <input class=\"form-control txtfield\" placeholder=\"Area/Location\" [(ngModel)]=\"registrationData.location\" [ngModelOptions]=\"{standalone: true}\" ngx-google-places-autocomplete [options]=\"{ types: [(geocode)],componentRestrictions: { country: 'IN' } }\" #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" />\n                      \n                      </div>\n                  \n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_weight\">\n                          <input class=\"form-control txtfield\" name=\"\" placeholder=\"weight\" type=\"text\" min=\"1\" max=\"150\" [(ngModel)]=\"registrationData.weight\" [ngModelOptions]=\"{standalone: true}\">\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_height\">\n                          <input class=\"form-control txtfield\" name=\"\" placeholder=\"height\" type=\"text\" min=\"1\" max=\"240\" [(ngModel)]=\"registrationData.height\" [ngModelOptions]=\"{standalone: true}\">\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_temp\">\n                          <select class=\"form-control txtfield\" [(ngModel)]=\"registrationData.temp\" [ngModelOptions]=\"{standalone: true}\">\n                              <option value=\"\"> Select </option>\n                              <option value=\"{{value}}\" *ngFor=\"let value of temperature_range\"> {{value}} </option>\n                          </select>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_pulse\">\n                          <select class=\"form-control txtfield\" [(ngModel)]=\"registrationData.pulse\" [ngModelOptions]=\"{standalone: true}\">\n                              <option value=\"\"> Select </option>\n                              <option value=\"{{value}}\" *ngFor=\"let value of pulse_range\"> {{value}} </option>\n                          </select>\n                      </div>\n                      <div class=\" col-md-6 col-sm-6 col-xs-12\" style=\"height: 62px;\" *ngIf=\"field_bp\">\n                          <select class=\"form-control txtfield\" [(ngModel)]=\"registrationData.bp\" [ngModelOptions]=\"{standalone: true}\">\n                              <option value=\"\"> SYS </option>\n                              <option value=\"{{value}}\" *ngFor=\"let value of sys_range\"> {{value}} </option>\n                          </select>\n                      </div>\n                      <div class=\" col-md-6 col-sm-6 col-xs-12\" *ngIf=\"field_bp\">\n                          <select class=\"form-control txtfield\" [(ngModel)]=\"registrationData.dia\" [ngModelOptions]=\"{standalone: true}\">\n                              <option value=\"\"> DIA </option>\n                              <option value=\"{{value}}\" *ngFor=\"let value of dia_range\"> {{value}} </option>\n                          </select>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_rbs\">\n                          <select class=\"form-control txtfield\" [(ngModel)]=\"registrationData.rbs\" [ngModelOptions]=\"{standalone: true}\">\n                              <option value=\"\"> Select </option>\n                              <option value=\"{{value}}\" *ngFor=\"let value of rbs_range\"> {{value}} </option>\n                          </select>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_spo\">\n                          <select class=\"form-control txtfield\" [(ngModel)]=\"registrationData.spo\" [ngModelOptions]=\"{standalone: true}\">\n                              <option value=\"\"> Select </option>\n                              <option value=\"{{value}}\" *ngFor=\"let value of spo_range\"> {{value}} </option>\n                          </select>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_patientPic && !pateintPic && !uploadedPatientPic\">\n                          <span class=\"input-btn btn btn-default\" (click)=\"openWebCam('patient')\">\n                              Take Picture\n                          </span>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12 upload-image-main\" *ngIf=\"field_patientPic && (pateintPic || uploadedPatientPic)\">\n                          <div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-4 upload-image\" (click)=\"openWebCam('patient')\">\n                              <img href=\"javascript:void(0)\" src=\"{{pateintPic}}\" alt=\"pic\" class=\"img-thumbnail\" *ngIf=\"pateintPic\">\n                              <img href=\"javascript:void(0)\" src=\"{{pateintPicPath}}{{uploadedPatientPic}}\" alt=\"pic\" class=\"img-thumbnail\" *ngIf=\"uploadedPatientPic\">\n                          </div>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12\" *ngIf=\"field_testReport && reportPics.length<1\">\n                          <span class=\"input-btn btn btn-default\" (click)=\"openWebCam('report')\">\n                              Take Picture \n                          </span>\n                      </div>\n                      <div class=\" mg-bottom col-md-12 col-sm-12 col-xs-12 upload-image-main\" *ngIf=\"field_testReport && reportPics.length>0\">\n                          <div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-4 upload-image\" *ngFor=\"let image of reportPics;let i = index\">\n                              <img href=\"javascript:void(0)\" src=\"{{image}}\" alt=\"pic\" class=\"img-thumbnail\">\n                              <a (click)=\"removeImageFromReportPics(i)\" class=\"close-thik\"></a>\n                          </div>\n                          <div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-4 upload-image\" *ngIf=\"reportPics.length<3\">\n                              <i class=\"fa fa-plus\" (click)=\"openWebCam('report')\"></i>      \n                          </div>  \n                      </div>\n                  </div>\n                  </div> -->\n               <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n                  <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12 reg-bnt\">\n                     <div class=\"reg-cancel-btn\">\n                        <button class=\"btn btn-custom reg-btn cancel\" style=\"background-color:#FFC000\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" (click)=\"ngOnInit()\"> Cancel  </button> \n                     </div>\n                  </div>\n                  <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12 reg-bnt\">\n                     <div class=\"reg-cancel-btn\">\n                        <button class=\"btn btn-custom reg-btn\" type=\"button\" (click)=\"NewRegistration()\"> Register </button>\n                     </div>\n                  </div>\n               </div>\n            </div>\n            <div *ngIf=\"webCam\" class=\"camera-div\">\n               <webcam [height]=\"550\" [width]=\"550\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" ></webcam>\n               <div class=\" col-md-10 col-md-offset-1 col-sm-12 col-xs-12 camera-btn\">\n                  <button class=\"btn btn-custom\" type=\"button\" (click)=\"triggerSnapshot()\">OK</button>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n<!-- Modal -->\n<div class=\"modal fade cus-modal\" id=\"appointmentForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n   <div class=\"modal-dialog cstm_modal\" role=\"document\">\n      <div class=\"modal-content pat-app-modal-form modal-md\">\n         <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"resetAppointmentModal()\">\n            <span aria-hidden=\"true\">×</span>\n            </button>\n            <!-- <h4 class=\"modal-title\"> Registration Form </h4> -->\n            <div class=\" col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12\">\n               <span  class=\"caret cstm-caret\"></span>\n               <select class=\"form-control txtfield select-doctor\" (change)=\"changeDoctor()\" [(ngModel)]=\"appointmentDoctor\" [ngModelOptions]=\"{standalone: true}\">\n               <option selected=\"Select App\" disabled=\"\" value=\"Select App\" class=\"select-opt\"> Select Doctor* </option>\n               <option *ngFor=\"let doctor of dataDoctors\" value=\"{{doctor._id}}\" > Dr. {{doctor.first_name}}</option>\n               </select>\n            </div>\n         </div>\n         <div class=\"modal-body\">\n            <div class=\"table-responsive my_tab_new\">\n               <table class=\"table\">\n                  <tr>\n                     <td width=\"200px;\"> <label>Appointment Date &amp; Time </label></td>\n                     <td>\n                        <div *ngIf=\"dateSelected\">\n                           <input type=\"text\" class=\"form-control txtfield\" value=\"{{appointmentDate.getDate()}}-{{appointmentDate.getMonth()+1}}-{{appointmentDate.getFullYear()}}  {{appointmentTime.startHour}}:{{getAppointmentMinToShow(appointmentTime.startMin)}}\" readonly=\"\" name=\"\" placeholder=\"\" (click)=\"AppointmentsBySmartAssistant()\"/>\n                        </div>\n                        <div  *ngIf=\"!dateSelected\">\n                           <input type=\"text\" class=\"form-control txtfield\" value=\"\" name=\"\" placeholder=\"Appointment Date & Time\" (click)=\"AppointmentsBySmartAssistant()\"/>\n                        </div>\n                     </td>\n                  </tr>\n                  <tr>\n                     <td>\n                        <label> Patient Mobile* </label>\n                     </td>\n                     <td>\n                        <div class=\"input-group fieldDesign\">\n                           <span class=\"input-group-addon\">+91</span>\n                           <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"Mobile Number\" pattern=\"[0-9.]+\" maxLength=\"10\" (blur)=\"findPatientNameFromPhone($event.target.value)\" [(ngModel)]=\"appointment.phone\" [ngModelOptions]=\"{standalone: true}\"/>\n                        </div>\n                     </td>\n                  </tr>\n                  <tr>\n                     <td>\n                        <label> Patient Name* </label>\n                     </td>\n                     <td>\n                        <input type=\"text\" class=\"form-control txtfield\" name=\"\" pattern=\"[a-zA-Z ]+\" placeholder=\"Patient Name\" [(ngModel)]=\"appointment.name\" [ngModelOptions]=\"{standalone: true}\" (onfocus)=\"SearchPatientName($event.target.value)\" [matAutocomplete]=\"autoPatNameApnt\"/>\n                        <mat-autocomplete #autoPatNameApnt=\"matAutocomplete\" class=\"mat-autocomplete-registration\">\n                           <mat-option *ngFor=\"let patient of patientList\" [value]=\"patient.name\">\n                           {{patient.name}}\n                           </mat-option>\n                        </mat-autocomplete>\n                     </td>\n                  </tr>\n                  <tr>\n                     <td colspan=\"3\" class=\"text-center\">\n                        <button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"!dateSelected || !appointment.phone || appointment.phone.length<10 || !appointment.name\" (click)=\"bookAppointment()\"> BOOK APPOINTMENT </button>\n                     </td>\n                  </tr>\n               </table>\n            </div>\n            <!-- <div class=\"row\">\n               <div class=\"regis-modal-body\">\n                   <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                       <div class=\"cus-datetimepicker\">\n                           <label class=\"col-md-4 col-sm-4 col-xs-12\">Appointment Date &amp; Time </label>\n                           <div class=\"col-md-8 col-sm-8 col-xs-12\" *ngIf=\"dateSelected\">\n                               <input type=\"text\" class=\"form-control txtfield\" value=\"{{appointmentDate.getDate()}}-{{appointmentDate.getMonth()+1}}-{{appointmentDate.getFullYear()}}  {{appointmentTime.startHour}}:{{getAppointmentMinToShow(appointmentTime.startMin)}}\" readonly=\"\" name=\"\" placeholder=\"\" (click)=\"AppointmentsBySmartAssistant()\"/>\n                           </div>\n                           <div class=\"col-md-8 col-sm-8 col-xs-12\" *ngIf=\"!dateSelected\">\n                               <input type=\"text\" class=\"form-control txtfield\" value=\"\" name=\"\" placeholder=\"Appointment Date & Time\" (click)=\"AppointmentsBySmartAssistant()\"/>\n                           </div>\n                          \n                       </div>\n                   </div>\n                   <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                       <label class=\"col-md-4 col-sm-4 col-xs-12\"> Patient Mobile* </label>\n                       <div class=\"col-md-8 col-sm-8 col-xs-12\">\n                           <div class=\"input-group fieldDesign\">\n                               <span class=\"input-group-addon\">+91</span>\n                               <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"Mobile Number\" pattern=\"[0-9.]+\" maxLength=\"10\" (blur)=\"findPatientNameFromPhone($event.target.value)\" [(ngModel)]=\"appointment.phone\" [ngModelOptions]=\"{standalone: true}\"/>\n                           </div>\n                       </div>\n                   </div>\n                   <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                       <label class=\"col-md-4 col-sm-4 col-xs-12\"> Patient Name* </label>\n                       <div class=\"col-md-8 col-sm-8 col-xs-12\">\n                           <input type=\"text\" class=\"form-control txtfield\" name=\"\" pattern=\"[a-zA-Z ]+\" placeholder=\"\" [(ngModel)]=\"appointment.name\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"SearchPatientName($event.target.value)\" [matAutocomplete]=\"autoPatNameApnt\"/>\n                           <mat-autocomplete #autoPatNameApnt=\"matAutocomplete\" class=\"mat-autocomplete-registration\">\n                             <mat-option *ngFor=\"let patient of patientList\" [value]=\"patient.name\">\n                               {{patient.name}}\n                             </mat-option>\n                           </mat-autocomplete>\n                         \n                       </div>\n                   </div>\n                   <div class=\"form-group col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12 text-center\">\n                       <button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"!dateSelected || !appointment.phone || appointment.phone.length<10 || !appointment.name\" (click)=\"bookAppointment()\"> BOOK APPOINTMENT </button>\n                   </div>\n               </div>\n               </div> -->\n         </div>\n      </div>\n   </div>\n</div>\n<!-- appointmeny calender model -->\n<div class=\"modal fade cus-modal\" id=\"appointmentCalender\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n   <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n         <div class=\"modal-header\" *ngIf=\"calendarOptions\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click) = \"closeAppointment()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">×</span>\n            </button>\n            <h3 *ngIf = \"getDoctorName(appointmentDoctor)\">Dr. {{getDoctorName(appointmentDoctor)}}</h3>\n            <!-- <h4 class=\"modal-title\"> Registration Form </h4> -->\n         </div>\n         <div class=\"modal-body\">\n            <div *ngIf=\"calendarOptions\">\n               <a href=\"javascript:void(0)\" class=\"cstm-calender-opt\">\n               <ng-fullcalendar #ucCalendar [options]=\"calendarOptions\" (eventClick)=\"eventClick($event.detail)\" (eventDrop)=\"updateEvent($event.detail)\" (eventResize)=\"updateEvent($event.detail)\" (dayClick)=\"dayClick($event.detail)\" (clickButton)=\"clickButton($event.detail)\" [(eventsModel)]=\"events\"></ng-fullcalendar>\n               </a>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n<div class=\"modal fade cus-modal\" id=\"selectAppointmentTime\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n   <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content time-select\">\n         <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">×</span>\n            </button>\n            <!-- <h4 class=\"modal-title\"> Registration Form </h4> -->\n            <div class=\" col-md-8 col-md-offset-2 col-sm-12 col-xs-1 text-center\">\n               <h3 style=\"margin:0px\"> {{appointmentDate | date:'fullDate' }} </h3>\n            </div>\n         </div>\n         <div class=\"modal-body\">\n            <div class=\"row\">\n               <div class=\" col-md-12 col-sm-12 col-xs-1 text-center\">\n                  <div class=\"time-slots\" *ngFor=\"let schedule of shiftsOfParticularDay;let i = index\">\n                     <h3>Shift {{i+1}} [{{schedule.startHour}}:<span *ngIf=\"schedule.startMin.length>1\">{{schedule.startMin}}</span><span *ngIf=\"schedule.startMin.length==1\">0{{schedule.startMin}}</span> - {{schedule.endHour}}:<span *ngIf=\"schedule.endMin.length>1\">{{schedule.endMin}}</span><span *ngIf=\"schedule.endMin.length==1\">0{{schedule.endMin}}</span>]</h3>\n                     <ul class=\"time-ul\" type=\"none\">\n                        <li *ngFor=\"let shift of schedule.shift\" (click)=\"onTimeSelection(shift)\"><a href=\"javascript:void(0)\" class=\"{{getClassSlot(shift)}}\">{{shift.startHour}}:<span *ngIf=\"shift.startMin.length>1\">{{shift.startMin}}</span><span *ngIf=\"shift.startMin.length==1\">0{{shift.startMin}}</span></a></li>\n                     </ul>\n                  </div>\n                  <div class=\"time-slots\" *ngIf=\"customShifts.length>0\">\n                     <h3>More Shifts</h3>\n                     <ul class=\"time-ul\" type=\"none\">\n                        <li *ngFor=\"let shift of customShifts\"><a href=\"javascript:void(0)\" class=\"already-selected\">{{shift.startHour}}:<span *ngIf=\"shift.startMin.length>1\">{{shift.startMin}}</span><span *ngIf=\"shift.startMin.length<=1\">0{{shift.startMin}}</span></a></li>\n                     </ul>\n                  </div>\n                  <div class=\"tags-listing-div\">\n                     <fieldset class=\"fieldset-preset\">\n                        <legend class=\"legend-preset\">Add New Slot</legend>\n                        <div class=\"col-md-offset-2 col-md-10 pickup-time\">\n                           <ngb-timepicker [spinners]=\"false\" [(ngModel)]=\"customTime\"></ngb-timepicker>\n                        </div>\n                        <div class=\"col-md-12\">\n                           <button class=\"btn-success\" (click)=\"SaveAppointmentForCustomTime(customTime)\">Save</button>\n                        </div>\n                     </fieldset>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n<!-- end -->\n<div class=\"modal fade cus-preview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" *ngIf=\"doctorArrayObject\">\n   <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n         <div class=\"modal-header\">\n            <div>\n               <h4 class=\"modal-title\"> Preview </h4>\n            </div>\n            <div class=\"text-center\">\n               <button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n            </div>\n            <div>\n               <button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n            </div>\n         </div>\n         <div class=\"modal-body\" id=\"previewModalPdfNew\">\n            <div class=\"row\">\n               <div class=\"presc-modal-body\">\n                  <div class=\"pad-view\">\n                     <div class=\"padview-header\">\n                        <div class=\"pad-view-flx col-lg-6\" style=\"float:left;width:49%;\">\n                           <div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\">\n                              <h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{doctorArrayObject.first_name}} </h1>\n                           </div>\n                           <div class=\"form-group qual\">\n                              <p class=\"color-purple\">\n                                 <span *ngIf=\"checkOptionOfPad('Specialization')\">({{doctorArrayObject.specialization}})</span><br>\n                                 <span *ngIf=\"checkOptionOfPad('Qualifications')\">\n                                 <span *ngFor=\"let data of doctorArrayObject.qualification;let i = index\">\n                                 {{data.value}} <span *ngIf=\"i!=doctorArrayObject.qualification.length-1\">,</span>\n                                 </span>\n                                 </span>\n                              </p>\n                              <p > Registration: <span class=\"color-purple\"> {{doctorArrayObject.registration_no}} </span> </p>\n                              <p style=\"width:200px;word-break: break-all;\">\n                                 <span class=\"color-purple\" *ngFor=\"let pa of doctorArrayObject.professional_affiliation;let i=index\">\n                                 {{pa.value}}<span *ngIf=\"i!=doctorArrayObject.professional_affiliation.length-1\">,</span>\n                                 </span>\n                              </p>\n                           </div>\n                        </div>\n                        <div class=\"pad-view-flx col-lg-6\" style=\"float:left;width:49%;\">\n                           <ul class=\"clinic-detail\">\n                              <li class=\"clinic-name\" *ngIf=\"doctorArrayObject.clinic_details\">\n                                 <h1 id=\"translated_clinicName\"> {{doctorArrayObject.clinic_details.clinic_name}} </h1>\n                              </li>\n                              <li *ngIf=\"doctorArrayObject.clinic_details\">{{doctorArrayObject.clinic_details.address}}, {{doctorArrayObject.clinic_details.area}}, {{doctorArrayObject.clinic_details.city}}, {{doctorArrayObject.clinic_details.state}}</li>\n                              <li class=\"li-cstm\">\n                                 <div class=\"row\" *ngIf=\"doctorArrayObject.clinic_details\">\n                                    <div class=\"col-lg-12\">\n                                       <h4 class=\"for-apt\"> For appointments </h4>\n                                       <p *ngIf=\"doctorArrayObject.clinic_details.landline\"> Tel: {{doctorArrayObject.clinic_details.std_code}}-{{doctorArrayObject.clinic_details.landline}}</p>\n                                       <p> Mb: +91-{{doctorArrayObject.clinic_details.mobile}} </p>\n                                    </div>\n                                 </div>\n                              </li>\n                           </ul>\n                        </div>\n                     </div>\n                     <p class=\"text-center\" *ngIf=\"checkOptionOfPad('Header_note')\">\n                        <label id=\"translated_appointmentText\"> {{getHeaderText()}} </label>\n                     </p>\n                     <div class=\"padview-body\">\n                        <div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n                           <div class=\"emergency-wrap\">\n                              <!-- <div class=\"form-group emrgency-consult\" *>\n                                 <p class=\"small\" id=\"translated_emergencyText\"><i> Emergency Consultation </i> </p>\n                                 </div> -->\n                              <div class=\"form-group schdl\" >\n                                 <h5 class=\"color-blue\"> Schedule: </h5>\n                                 <div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\"> \n                                    <span><strong style=\"display:block; width:110px;\"> {{shift.day}}: </strong>\n                                    <span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\"> \n                                    [\n                                    <span *ngIf=\"time.fromTime.hour=='0'\">{{time.fromTime.hour}}0:</span>\n                                    <span *ngIf=\"time.fromTime.hour!='0'\">{{time.fromTime.hour}}:</span>\n                                    <span *ngIf=\"time.fromTime.minute=='0'\">{{time.fromTime.minute}}0 –</span>\n                                    <span *ngIf=\"time.fromTime.minute!='0'\">{{time.fromTime.minute}} –</span>\n                                    <span *ngIf=\"time.toTime.hour=='0'\">{{time.toTime.hour}}0:</span>\n                                    <span *ngIf=\"time.toTime.hour!='0'\">{{time.toTime.hour}}:</span>\n                                    <span *ngIf=\"time.toTime.minute=='0'\">{{time.toTime.minute}}0</span>\n                                    <span *ngIf=\"time.toTime.minute!='0'\">{{time.toTime.minute}}</span>\n                                    ]\n                                    </span>\n                                    <br>\n                                    </span>\n                                 </div>\n                                 <div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\"> \n                                    <span><strong> {{shift.day}}: </strong> Closed \n                                    </span>\n                                 </div>\n                              </div>\n                              <div id=\"translated_treatmentText\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n                                 <h5 class=\"color-blue\"> Available Treatments: </h5>\n                                 <ul style=\"padding-left:15px!important;\">\n                                    <li *ngFor=\"let treat of doctorArrayObject.expertise\">{{treat.value}}</li>\n                                 </ul>\n                              </div>\n                              <div *ngIf=\"doctorArrayObject.clinic_services_status=='Yes' && checkOptionOfPad('Available_services')\" id=\"translated_servicesText\">\n                                 <h5 class=\"color-blue\"> Available Services: </h5>\n                                 <ul style=\"padding-left:15px!important;\">\n                                    <li *ngIf=\"doctorArrayObject.clinic_services.Clinic_Pharmacy\">Pharmacy</li>\n                                    <li *ngIf=\"doctorArrayObject.clinic_services.Clinic_IPD\">IPD</li>\n                                    <li *ngFor=\"let cs of doctorArrayObject.clinic_services.ClinicServicesDetail\"> {{cs}} </li>\n                                    <li *ngFor=\"let cs of doctorArrayObject.clinic_services.OtherClinicService\"> {{cs.value}} </li>\n                                 </ul>\n                              </div>\n                           </div>\n                        </div>\n                        <div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n                           <div class=\"padview-bodyright\">\n                              <ul class=\"padview-body-header\">\n                                 <li>\n                                    <div class=\"text-underline \" > Name </div>\n                                    <input type=\"\"  disabled=\"\" name=\"\" [(ngModel)]=\"registrationData.name\" style=\"border:transparent;text-align: center\"> \n                                 </li>\n                                 <li>\n                                    <div  class=\"text-underline\"> Age/Sex </div>\n                                    <input type=\"\"  disabled=\"\" name=\"\" [(ngModel)]=\"registrationData.gender\" style=\"width: 38px;border:transparent\"> \n                                 </li>\n                                 <li>\n                                    <div class=\"text-underline\"> Weight (kg)</div>\n                                    <input type=\"\"  disabled=\"\" name=\"\" [(ngModel)]=\"registrationData.weight\" style=\"width: 38px;border:transparent\">\n                                 </li>\n                                 <li>\n                                    <div class=\"text-underline\"> Height (cm)</div>\n                                    <input type=\"\"  disabled=\"\" name=\"\" [(ngModel)]=\"registrationData.height\" style=\"width: 38px;border:transparent\">\n                                 </li>\n                                 <li>\n                                    <div class=\"strong\"> {{todayDate | date: 'dd MMM,yyyy'}}</div>\n                                 </li>\n                              </ul>\n                              <ul class=\"padview-patient\">\n                                 <!-- <li class=\"img-patient\">\n                                    <img src=\"{{pateintPicPath}}{{dispensedPatient.pateintPic}}\" class=\"img-responsive\" *ngIf=\"dispensedPatient.pateintPic\"/>\n                                    <img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!dispensedPatient.pateintPic\"/>\n                                    </li> -->\n                                 <li *ngIf=\"preConditionComplete==true && finalPreConditions.length>0\">\n                                    <div class=\"pat-heading\"><span id=\"translated_PreCondHeading\"> Existing health status </span> </div>\n                                    <ul class=\"pat-type\">\n                                       <li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n                                    </ul>\n                                 </li>\n                                 <li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected.length>0\">\n                                    <div class=\"pat-heading\"><span id=\"translated_BIHeading\"> Body Indicators</span> </div>\n                                    <ul class=\"pat-type\">\n                                       <li *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n                                       </li>\n                                    </ul>\n                                 </li>\n                                 <li *ngIf=\"allergyComplete==true && finalAllergy.length>0\">\n                                    <div class=\"pat-heading\"><span id=\"translated_allergyHeading\"> Allergy</span> </div>\n                                    <ul class=\" pat-type\">\n                                       <li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n                                    </ul>\n                                 </li>\n                              </ul>\n                              <div class=\"middle-body\">\n                                 <div class=\"\">\n                                    <div class=\"number-div\" *ngIf=\"findingsComplete==true && findingsSelected.length>0\">\n                                       <div class=\"pat-heading\"><span id=\"translated_PTHeading\"> Patient's Complaints</span> </div>\n                                       <ul class=\"numberol\">\n                                          <li *ngFor=\"let data of findingsSelected\"> {{data.value}} </li>\n                                       </ul>\n                                    </div>\n                                    <div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected.length>0\">\n                                       <div class=\"pat-heading\"><span id=\"translated_sympHeading\"> Symptoms</span> </div>\n                                       <ul class=\"numberol\">\n                                          <li *ngFor=\"let data of symptomsSelected\"> {{data.value}} </li>\n                                       </ul>\n                                    </div>\n                                    <div class=\"number-div\" *ngIf=\"diagnosisComplete==true && diagnosisSelected.length>0\">\n                                       <div class=\"pat-heading\"><span id=\"translated_diagnosisHeading\"> Diagnosis</span> </div>\n                                       <ul class=\"numberol\">\n                                          <li *ngFor=\"let data of diagnosisSelected\">{{data.value}}</li>\n                                       </ul>\n                                    </div>\n                                 </div>\n                                 <div class=\"\" *ngIf=\"medicationComplete==true\">\n                                    <div class=\"padview-medic\" id=\"translated_medication\">\n                                       <div class=\"pat-heading\"><span> Medicines</span> </div>\n                                       <ol style=\"padding-left:10px\">\n                                          <li *ngFor=\"let data of tempMedicationArray\">\n                                             <span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n                                                {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                <span *ngIf=\"data.med_info\">\n                                                   <p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                </span>\n                                             </span>\n                                             <span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n                                                {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                <span *ngIf=\"data.med_info\">\n                                                   <p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                </span>\n                                             </span>\n                                             <span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n                                                {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n                                                <span *ngIf=\"data.med_info\">\n                                                   <p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                </span>\n                                             </span>\n                                             <span *ngIf=\"data.name=='Drops'\">\n                                                {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                <span *ngIf=\"data.med_info\">\n                                                   <p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                </span>\n                                             </span>\n                                          </li>\n                                       </ol>\n                                    </div>\n                                    <div class=\"number-div vac-div\">\n                                       <div *ngIf=\"vaccinationComplete==true\">\n                                          <div class=\"pat-heading\" id=\"translated_VaccinationHeading\"> <span> Vaccination</span> </div>\n                                          <ul *ngIf=\"currentVaccinationComplete == true\" class=\"medicationol\">\n                                             <div><b>Current</b></div>\n                                             <li *ngFor=\"let data of finalCurrentVaccinationArray\">{{data}}</li>\n                                          </ul>\n                                          <ul *ngIf=\"dueVaccinationComplete == true\" class=\"medicationol\">\n                                             <span *ngIf=\"finalDueVaccinationArray.length>0\"><strong>Due </strong>({{vaccinationDate.toString().substr(4,11)}})\n                                             </span>\n                                             <li *ngFor=\"let data of finalDueVaccinationArray\">{{data}}</li>\n                                          </ul>\n                                       </div>\n                                       <div class=\"\" *ngIf=\"instructionsComplete==true && instructionsSelected.length>0\" id=\"translated_instHeading\">\n                                          <div class=\"pat-heading\"> <span> Instructions</span> </div>\n                                          <ul class=\"numberol\" start=\"1\">\n                                             <li *ngFor=\"let data of instructionsSelected\">{{data}}</li>\n                                          </ul>\n                                       </div>\n                                    </div>\n                                 </div>\n                              </div>\n                              <div class=\"third-body\">\n                                 <div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray.length\">\n                                    <div class=\"pat-heading\"> <span id=\"translated_invHeading\"> Investigation</span> </div>\n                                    <ol class=\"numberol pl10\">\n                                       <li *ngFor=\"let data of investigationArray\">\n                                          <span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n                                          <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n                                          <span *ngIf=\"i!=data.values.length-1\">\\</span>\n                                          </span>\n                                          </span>\n                                          <span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n                                          <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n                                          </span>\n                                       </li>\n                                    </ol>\n                                 </div>\n                                 <div class=\"number-div\" *ngIf=\"treatmentComplete==true\" id=\"translated_OTHeading\">\n                                    <div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n                                    <ul class=\"numberol\">\n                                       <li *ngFor=\"let data of treatmentArray;let i =index\">\n                                          <span *ngIf=\"data.name=='Lifestyle Changes'\">\n                                          {{data.name}} - <span *ngFor=\"let value of data.lifestyle;let j = index\">{{value.value}} <span *ngIf=\"j!=data.lifestyle.length-1\">\\</span></span>\n                                          </span>\n                                          <span *ngIf=\"data.name=='Physiotherapy' || data.name=='Fomentation'\">\n                                          {{data.name}} - {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                                          </span>\n                                          <span *ngIf=\"data.name=='Plaster'\">\n                                          <span class=\"notranslate\">{{data.name}}</span> - on <span class=\"notranslate\">{{data.Injury_Area}}</span> of {{data.plaster_type}} for {{data.Duration}} days \n                                          </span>\n                                          <span *ngIf=\"data.name=='Gargle' || data.name=='Dressing' || data.name=='Bandage' || data.name=='Other'\">\n                                          <span *ngIf=\"data.name!='Other'\">{{data.name}} - </span>{{data.med_name[0].value}} {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                                          </span>\n                                          <span>\n                                          {{data.value}}\n                                          </span>\n                                       </li>\n                                    </ul>\n                                 </div>\n                              </div>\n                              <div class=\"note-box\">\n                                 <div class=\"note-innerbox\">\n                                    <div class=\"note-innerdiv\">\n                                       <div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray.length>0\">\n                                          <div class=\"pat-heading\"> <span id=\"translated_surgHeading\"> Recommended Surgery</span> </div>\n                                          <ul class=\"numberol\">\n                                             <li *ngFor=\"let data of surgerySelectedArray\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n                                          </ul>\n                                       </div>\n                                       <div class=\"number-div\" *ngIf=\"refer_status\" style=\"padding:0 30px;\">\n                                          <div class=\"pat-heading\"> <span> Referred To</span> </div>\n                                          <p> {{referDetail.doctor_name}} </p>\n                                       </div>\n                                    </div>\n                                 </div>\n                                 <div class=\"\" *ngIf=\"eyePresComplete==true\">\n                                    <div class=\"pat-heading\"> <span id=\"translated_eyeHeading\"> Eye Prescription</span> </div>\n                                    <div class=\"table-responsive\">\n                                       <table class=\"table table-bordered table-striped cstm-table\">\n                                          <thead>\n                                             <tr>\n                                                <th> Eye </th>\n                                                <th> Sphere </th>\n                                                <th> Cylinder </th>\n                                                <th> Axis </th>\n                                                <th> Add </th>\n                                                <th> PD (mm) </th>\n                                             </tr>\n                                          </thead>\n                                          <tbody>\n                                             <tr>\n                                                <td> Right (OD): </td>\n                                                <td> {{finalRightOD.sphere}} </td>\n                                                <td> {{finalRightOD.cylinder}} </td>\n                                                <td> {{finalRightOD.axis}} </td>\n                                                <td> {{finalRightOD.add}} </td>\n                                                <td> {{finalRightOD.pd}} </td>\n                                             </tr>\n                                             <tr>\n                                                <td> Left (OS): </td>\n                                                <td> {{finalLeftOD.sphere}} </td>\n                                                <td> {{finalLeftOD.cylinder}} </td>\n                                                <td> {{finalLeftOD.axis}} </td>\n                                                <td> {{finalLeftOD.add}} </td>\n                                                <td> {{finalLeftOD.pd}} </td>\n                                             </tr>\n                                          </tbody>\n                                       </table>\n                                    </div>\n                                 </div>\n                              </div>\n                              <div class=\"third-body\">\n                                 <div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n                                    <div class=\"pat-heading\"> <span> Follow Up</span></div>\n                                    <p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n                                    <p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n                                 </div>\n                              </div>\n                              <div class=\"forth-body\">\n                                 <div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n                                    <div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div>\n                                 </div>\n                                 <div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                     <div class=\"padview-footer\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n                        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                           <div class=\"padview-powered\">\n                              <div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n                              <div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com </div>\n                           </div>\n                        </div>\n                        <div class=\"col-md-12 col-sm-4 col-xs-12\" id=\"translated_footer\">\n                           <div class=\"legal\">\n                              <h3>{{getFooterText()}}</h3>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-three-layout/header-three-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderThreeLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs-compat/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_mission_service__ = __webpack_require__("../../../../../src/app/providers/mission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_fullcalendar__ = __webpack_require__("../../../../ng-fullcalendar/ng-fullcalendar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HeaderThreeLayoutComponent = /** @class */ (function () {
    //////////////
    function HeaderThreeLayoutComponent(missionService, _spinner, formBuilder, toastr, userService, router, datePipe) {
        this.missionService = missionService;
        this._spinner = _spinner;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.datePipe = datePipe;
        this.appointmentDate = new Date();
        this.events = null;
        this.trigger = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
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
        this.area_suggestions = [];
        this.area_suggestions1 = [];
    }
    HeaderThreeLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var response = {
            "message": "Data featched",
            "location": [
                {
                    "city": "Ludhiana",
                    "location": "Promatics Technologies"
                },
                {
                    "city": "Ludhiana",
                    "location": "New Vishwakarma Nagar",
                    "lat": 30.8958021,
                    "lng": 75.90023040000005
                },
                {
                    "city": "Ludhiana",
                    "location": "Promatics Technologies"
                },
                {
                    "city": "Ludhiana",
                    "location": "Promatics Technologies Pvt.Ltd",
                    "lat": 28.4185204,
                    "lng": 77.03808419999996
                },
                {
                    "city": "Ludhiana",
                    "location": "New Vishwakarma Nagar",
                    "lat": 30.8958021,
                    "lng": 75.90023040000005
                },
                {
                    "city": "Ludhiana",
                    "location": "Model Town",
                    "lat": 30.8883034,
                    "lng": 75.84017760000006
                },
                {
                    "city": "Ludhiana",
                    "location": "Model Town",
                    "lat": 30.8883034,
                    "lng": 75.84017760000006
                },
                {
                    "city": "Ludhiana",
                    "location": "New Vishwakarma Nagar"
                },
                {
                    "city": "Ludhiana",
                    "location": "New Vishwakarma Nagar",
                    "lat": 30.8958021,
                    "lng": 75.90023040000005
                },
                {
                    "city": "Ludhiana",
                    "location": "New Vishwakarma Nagar"
                }
            ],
            "response": true
        };
        /* 		this.area_suggestions=response.location;
                this.area_suggestions1=response.location; */
        this.genderClass = "grey-placeholder";
        this.sys_class = "grey-placeholder";
        this.dob_class = "grey-placeholder";
        this.temp_class = "grey-placeholder";
        this.rbs_class = "grey-placeholder";
        this.dia_class = "grey-placeholder";
        this.pulse_class = "grey-placeholder";
        this.spo_class = "grey-placeholder";
        this.getHolidayList = [];
        this.smartAssistantData = JSON.parse(localStorage['smartAssistantDetails']);
        this.socket = __WEBPACK_IMPORTED_MODULE_7_socket_io_client__(__WEBPACK_IMPORTED_MODULE_8__environments_environment_prod__["a" /* environment */].socket);
        this.pateintPicPath = __WEBPACK_IMPORTED_MODULE_8__environments_environment_prod__["a" /* environment */].patientPic;
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
        this.webCam = false;
        this.appointmentDoctor = "";
        this.appointment = {};
        this.appointmentTime = {};
        this.dateSelected = false;
        this.patientList = [];
        this.patientList1 = [];
        this.customTime = { hour: 18, minute: 30 };
        this.customShifts = [];
        this.reportPics = [];
        this.pateintPic = null;
        this.registrationData = {};
        this.registrationData.type = "";
        this.registrationData.gender = "Select";
        this.registrationData.temp = "";
        this.registrationData.pulse = "";
        this.registrationData.bp = "";
        this.registrationData.dia = "";
        this.registrationData.rbs = "";
        this.registrationData.spo = "Select";
        this.patientListReg = [];
        this.patientListReg1 = [];
        this.numberWritten = false;
        this.consultationType = [
            'Appointment',
            'Walk-in',
            'Emergency'
        ];
        this.uploadedPatientPic = null;
        /////////////////SOCKET ON//////////////////////
        this.socket.emit('room join', {
            room_id: this.smartAssistantData.dataSmartAssistant._id.toString()
        });
        this.socket.on('room join', function (msg) {
            if (msg.room_id.toString() == _this.smartAssistantData.dataSmartAssistant._id.toString()) {
                console.log("socket connected");
                // this.missionService.announceMission("reload_smart_assistant_page");
            }
        });
        this.socket.on('room leave', function (msg) {
            if (msg.room_id.toString() == _this.smartAssistantData.dataSmartAssistant._id.toString()) {
                console.log("socket disconnected");
                _this.missionService.announceMission("reload_smart_assistant_page");
            }
        });
        this.socket.on('digitalPresc', function (msg) {
            _this.missionService.announceMission("reload_smart_assistant_page");
            console.log("digitalPresc");
        });
        this.socket.on('opdHoliday', function (msg) {
            _this.ngOnInit();
            _this.missionService.announceMission("reload_smart_assistant_page");
            console.log("opdHoliday");
        });
        this.socket.on('patientSelected', function (msg) {
            _this.missionService.announceMission("reload_smart_assistant_page");
        });
        //////////////-----SOCKET ON------////////////////
        this.consultationDoctor = "Select Doctor";
        this.allCities = [];
    };
    HeaderThreeLayoutComponent.prototype.changeClass = function (myclass) {
        if (myclass == 'sys_class') {
            this.sys_class = "black-class";
        }
        if (myclass == 'genderClass') {
            this.genderClass = "black-class";
        }
        if (myclass == 'dobClass') {
            this.dob_class = "black-class";
        }
        if (myclass == 'tempClass') {
            this.temp_class = "black-class";
        }
        if (myclass == 'diaClass') {
            this.dia_class = "black-class";
        }
        if (myclass == 'pulseClass') {
            this.pulse_class = "black-class";
        }
        if (myclass == 'rbsClass') {
            this.rbs_class = "black-class";
        }
        if (myclass == 'spoClass') {
            this.spo_class = "black-class";
        }
    };
    HeaderThreeLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // hide spinner once all loaders are completed
        __WEBPACK_IMPORTED_MODULE_0__theme_services__["a" /* BaThemePreloader */].load().then(function (values) {
            _this._spinner.hide();
        });
    };
    HeaderThreeLayoutComponent.prototype.GetSmartAssistantDataAfterLogin = function () {
        var _this = this;
        var object = {
            smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id
        };
        this.userService.GetSmartAssistantDataAfterLogin(object).subscribe(function (data) {
            console.log(data);
            _this.dataDoctors = [];
            if (data.response == true) {
                _this.dataDoctors = data.doctorsRegisteredForSmartClinic;
                _this.doctorArrayObject = _this.dataDoctors[0];
                _this.currentDocForData = data.doctorsRegisteredForSmartClinic;
                _this.clinicId = _this.dataDoctors[0].clinic_details.clinic_id;
                if (_this.dataDoctors.length == 1) {
                    _this.consultationDoctor = _this.dataDoctors[0]._id;
                    _this.appointmentDoctor = _this.dataDoctors[0]._id;
                }
                else {
                    for (var i = 0; i < _this.dataDoctors.length; i++) {
                        if (_this.dataDoctors[i].type_of_doctor == "admin_doctor") {
                            _this.consultationDoctor = _this.dataDoctors[i]._id;
                            _this.appointmentDoctor = _this.dataDoctors[i]._id;
                            _this.appointmentDoctorCopy = _this.dataDoctors[i]._id;
                            break;
                        }
                    }
                }
                _this.checkWhichFieldsToShow(_this.consultationDoctor);
                _this.appointmentDoctor = "Select App";
                _this.setAllShiftsForPreview();
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeaderThreeLayoutComponent.prototype.SearchLocation = function (data) {
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
    HeaderThreeLayoutComponent.prototype.SearchLocationSuggestions = function () {
        var _this = this;
        var object = {
            city: this.registrationData.city,
            smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id
        };
        this.userService.SearchLocationSuggestions(object).subscribe(function (data) {
            console.log(data);
            _this.area_suggestions = data.location;
            _this.area_suggestions1 = data.location;
        });
    };
    HeaderThreeLayoutComponent.prototype.changeCity = function ($event) {
        console.log($event.name);
        this.registrationData.city = $event.name;
    };
    HeaderThreeLayoutComponent.prototype.handleAddressChange = function ($event) {
        this.lat = JSON.parse(JSON.stringify($event.geometry.location)).lat;
        this.lng = JSON.parse(JSON.stringify($event.geometry.location)).lng;
        this.registrationData.location = $event.name;
        console.log(JSON.stringify($event.name));
        //this.registrationData.city=$event.name;
    };
    HeaderThreeLayoutComponent.prototype.handleAddressClick = function (data) {
        console.log('suggested address clicked');
        console.log(data.option);
        this.lat = data.option.value.lat;
        this.lng = data.option.value.lng;
        this.registrationData.location = data.option.value.location;
        console.log(data);
    };
    HeaderThreeLayoutComponent.prototype.checkWhichFieldsToShow = function (doctor) {
        var _this = this;
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
        this.digitalTrue = false;
        var doctor = this.dataDoctors.filter(function (d) { return d._id.toString() == _this.consultationDoctor.toString(); });
        console.log(doctor);
        this.registrationData.fee = doctor[0].consultation_fee;
        for (var i = 0; i < doctor[0].reg_fields.length; i++) {
            if (doctor[0].reg_fields[i].value == "DOB") {
                this.field_dob = true;
            }
            else if (doctor[0].reg_fields[i].value == "Age") {
                this.field_age = true;
            }
            else if (doctor[0].reg_fields[i].value == "Weight") {
                this.field_weight = true;
            }
            else if (doctor[0].reg_fields[i].value == "Height") {
                this.field_height = true;
            }
            else if (doctor[0].reg_fields[i].value == "Bodytemperature") {
                this.field_temp = true;
            }
            else if (doctor[0].reg_fields[i].value == "Pulse") {
                this.field_pulse = true;
            }
            else if (doctor[0].reg_fields[i].value == "BloodPressure(BP)") {
                this.field_bp = true;
            }
            else if (doctor[0].reg_fields[i].value == "RandomBloodSugar(RBS)") {
                this.field_rbs = true;
            }
            else if (doctor[0].reg_fields[i].value == "SpO2") {
                this.field_spo = true;
            }
            else if (doctor[0].reg_fields[i].value == "Patientphoto") {
                this.field_patientPic = true;
            }
            else if (doctor[0].reg_fields[i].value == "PatientTestreports") {
                this.field_testReport = true;
            }
            else if (doctor[0].reg_fields[i].value == "ConsultationFee") {
                this.field_fee = true;
            }
            else if (doctor[0].digital_precipitation == true) {
                this.digitalTrue = true;
            }
        }
        console.log(doctor[0].digital_precipitation);
        this.userService.GetCityFromClinicId(this.clinicId).subscribe(function (data) {
            console.log(data);
            //alert(data.city);
            _this.citiesList = [];
            _this.citiesList1 = data.data;
            _this.state = data.state;
            var city = _this.citiesList.filter(function (d) { return doctor[0].clinic_details.city == d.name; });
            if (!_this.registrationData.city) {
                _this.registrationData.city = data.city;
            }
            _this.GetPatientLastPrescription();
        }, function (err) {
            console.log(err);
        });
    };
    HeaderThreeLayoutComponent.prototype.openWebCam = function (data) {
        if (data == 'patient') {
            this.webCamOpenedBY = 'patient';
        }
        else {
            this.webCamOpenedBY = 'report';
        }
        this.webCam = true;
    };
    HeaderThreeLayoutComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
        this.webCam = false;
    };
    HeaderThreeLayoutComponent.prototype.handleImage = function (webcamImage) {
        console.info('received webcam image', webcamImage);
        if (this.webCamOpenedBY == 'patient') {
            this.pateintPic = webcamImage._imageAsDataUrl;
            this.uploadedPatientPic = null;
        }
        else if (this.webCamOpenedBY == 'report') {
            this.reportPics.push(webcamImage._imageAsDataUrl);
        }
    };
    HeaderThreeLayoutComponent.prototype.removeImageFromReportPics = function (i) {
        this.reportPics.splice(i, 1);
    };
    Object.defineProperty(HeaderThreeLayoutComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    HeaderThreeLayoutComponent.prototype.findPatientNameFromPhone = function (data) {
        var _this = this;
        if (!isNaN(data)) {
            data = data.trim();
            if (data.length > 0) {
                var object = void 0;
                object = {};
                var doctor = this.dataDoctors.filter(function (d) { return d._id.toString() == _this.appointmentDoctor.toString(); });
                if (this.appointmentDoctor == "Select App") {
                    this.toastr.warning('Select doctor first', 'Warning');
                    return;
                }
                object.clinic_id = doctor[0].doctm_clinic_id;
                object.mobile = data;
                this.userService.GetPatientDetail(object).subscribe(function (data) {
                    console.log(data);
                    _this.patientList = [];
                    _this.patientList1 = [];
                    if (data.response == true) {
                        if (data.data.length == 1) {
                            _this.appointment.name = data.data[0].name;
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
    HeaderThreeLayoutComponent.prototype.GetPatientLastPrescription = function () {
        var _this = this;
        if (this.registrationData.name && this.registrationData.name != null && this.registrationData.name != '' && this.registrationData.name.trim().length > 0) {
            var object = void 0;
            object = {};
            var doctor = this.dataDoctors.filter(function (d) { return d._id.toString() == _this.consultationDoctor.toString(); });
            console.log(doctor);
            if (doctor) {
                if (doctor[0]) {
                    object.clinic_id = doctor[0].doctm_clinic_id;
                }
            }
            object.mobile = this.registrationData.phone;
            object.name = this.registrationData.name;
            this.userService.GetPatientLastPrescription(object).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    // this.registrationData = data.data.registration
                    _this.registrationData.name = data.data.registration.pateintName;
                    _this.registrationData.phone = data.data.registration.pateintPhone;
                    _this.lat = data.data.registration.lat;
                    _this.lng = data.data.registration.lng;
                    _this.registrationData.weight = "";
                    _this.registrationData.height = "";
                    _this.registrationData.temp = "";
                    _this.registrationData.pulse = "";
                    _this.registrationData.bp = "";
                    _this.registrationData.dia = "";
                    _this.registrationData.rbs = "";
                    _this.registrationData.spo = "";
                    if (data.data.registration.dob) {
                        var diff_ms = Date.now() - new Date(data.data.registration.dob).getTime();
                        var age_dt = new Date(diff_ms);
                        _this.registrationData.age = Math.abs(age_dt.getUTCFullYear() - 1970);
                    }
                    if (data.data.registration.pateintPic) {
                        _this.uploadedPatientPic = data.data.registration.pateintPic;
                        _this.registrationData.isPatientPic = true;
                        _this.registrationData.uploadedPatientPic = _this.uploadedPatientPic;
                    }
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    HeaderThreeLayoutComponent.prototype.GetPatientLastPrescriptionByName = function () {
        console.log(this.registrationData);
        if (!isNaN(this.registrationData.phone)) {
            this.registrationData.phone = this.registrationData.phone.trim();
            if (this.registrationData.phone.length > 0) {
                this.GetPatientLastPrescription();
            }
        }
        this.getPatientInfo(this.registrationData);
    };
    HeaderThreeLayoutComponent.prototype.fillInfo = function ($event) {
        if (!isNaN(this.registrationData.phone)) {
            this.registrationData.phone = this.registrationData.phone.trim();
            if (this.registrationData.phone.length > 0) {
                this.GetPatientLastPrescription();
            }
        }
        this.registrationData.name = $event.option.value;
        //this.getPatientInfo(this.registrationData);
        this.genderClass = "black-class";
        this.dob_class = "black-class";
        var ob = { 'phone': this.registrationData.phone,
            'name': this.registrationData.name };
        this.findPatientAppointmentByPhoneAndName(ob);
    };
    HeaderThreeLayoutComponent.prototype.findPatientAppointmentByPhone = function (data) {
        var _this = this;
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
        this.digitalTrue = false;
        this.registrationData.age_param = "Years";
        if (this.registrationData.phone.length < 10) {
            this.toastr.warning("Please fill atleast 10 digits number", "Warning");
            return;
        }
        if (!isNaN(data)) {
            data = data.trim();
            if (data.length > 0) {
                var ob = {
                    mobile: data,
                    smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id
                };
                this.userService.FindPatientAppointmentByPhone(ob).subscribe(function (dataReceived) {
                    console.log(dataReceived);
                    _this.GetPatientLastPrescription();
                    console.log("Data Received");
                    console.log(dataReceived);
                    if (dataReceived.response == true) {
                        _this.toastr.success(dataReceived.message, "Success");
                        _this.patientListReg = [];
                        _this.patientListReg1 = [];
                        _this.registrationData.name = dataReceived.data[0].patient_id.name;
                        _this.registrationData.type = "Appointment";
                        _this.registrationData.appointment_detail = dataReceived.data[0];
                        _this.registrationData.gender = dataReceived.data[0].patient_id.gender;
                        if (_this.registrationData.gender) {
                            _this.genderClass = "black-class";
                            //   this.dob_class="black-class"
                        }
                        _this.consultationDoctor = dataReceived.data[0].doctor_id;
                        _this.checkWhichFieldsToShow(_this.consultationDoctor);
                        /** Get Patient Details **/
                        var object = void 0;
                        object = {};
                        var doctor = _this.dataDoctors.filter(function (d) { return d._id.toString() == _this.consultationDoctor.toString(); });
                        if (doctor[0]) {
                            object.clinic_id = doctor[0].doctm_clinic_id;
                        }
                        object.mobile = data;
                        console.log('here');
                        _this.userService.GetPatientDetail(object).subscribe(function (data2) {
                            _this.consultationDoctor = _this.consultationDoctor;
                            console.log(data2);
                            _this.GetPatientLastPrescription();
                            if (data2.response == true) {
                                if (data2.data.length == 1) {
                                    _this.genderClass = "black-class";
                                    _this.dob_class = "black-class";
                                    _this.registrationData.name = data2.data[0].name;
                                    _this.registrationData.dob = data2.data[0].dob;
                                    _this.registrationData.gender = data2.data[0].gender;
                                    _this.registrationData.age = data2.data[0].age;
                                    _this.registrationData.city = data2.data[0].city;
                                    _this.registrationData.location = data2.data[0].address;
                                    if (data2.data[0].new_age) {
                                        if (data2.data[0].new_age.includes("months")) {
                                            _this.registrationData.age_param = "Months";
                                        }
                                        else {
                                            _this.registrationData.age_param = "Years";
                                        }
                                    }
                                    else {
                                        _this.registrationData.age_param = "Years";
                                    }
                                }
                                else {
                                    _this.patientListReg = data2.data;
                                    _this.patientListReg1 = data2.data;
                                }
                            }
                        }, function (err) {
                            console.log(err);
                        });
                        /*************************/
                    }
                    else {
                        //this.consultationDoctor = "Select Doctor"
                        if (dataReceived.message == 'No appointment found for today') {
                            _this.toastr.success(dataReceived.message, "Success");
                            _this.consultationType = [
                                'Walk-in',
                                'Emergency'
                            ];
                            _this.registrationData.type = "Walk-in";
                            var object = void 0;
                            object = {};
                            var doctor = _this.dataDoctors.filter(function (d) { return d._id.toString() == _this.consultationDoctor.toString(); });
                            if (doctor[0]) {
                                object.clinic_id = doctor[0].doctm_clinic_id;
                            }
                            object.mobile = data;
                            console.log('here');
                            _this.userService.GetPatientDetail(object).subscribe(function (data2) {
                                _this.consultationDoctor = "Select Doctor";
                                console.log(data2);
                                _this.GetPatientLastPrescription();
                                if (data2.response == true) {
                                    if (data2.data.length == 1) {
                                        _this.genderClass = "black-class";
                                        _this.dob_class = "black-class";
                                        _this.registrationData.name = data2.data[0].name;
                                        _this.registrationData.dob = data2.data[0].dob;
                                        _this.registrationData.gender = data2.data[0].gender;
                                        _this.registrationData.age = data2.data[0].age;
                                        _this.registrationData.city = data2.data[0].city;
                                        _this.registrationData.location = data2.data[0].address;
                                        if (data2.data[0].new_age) {
                                            if (data2.data[0].new_age.includes("months")) {
                                                _this.registrationData.age_param = "Months";
                                            }
                                            else {
                                                _this.registrationData.age_param = "Years";
                                            }
                                        }
                                        else {
                                            _this.registrationData.age_param = "Years";
                                        }
                                    }
                                    else {
                                        _this.patientListReg = data2.data;
                                        _this.patientListReg1 = data2.data;
                                    }
                                }
                            }, function (err) {
                                console.log(err);
                            });
                        }
                        else {
                            _this.toastr.error(dataReceived.message, "Error");
                        }
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            this.toastr.warning("Invalid phone number", "Warning");
        }
    };
    HeaderThreeLayoutComponent.prototype.findPatientAppointmentByPhoneAndName = function (data) {
        var _this = this;
        console.log(data);
        this.GetPatientLastPrescriptionByName();
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
        this.digitalTrue = false;
        if (this.registrationData.phone.length < 10) {
            this.toastr.warning("Please fill atleast 10 digits number", "Warning");
            return;
        }
        if (!isNaN(data.phone)) {
            data.phone = data.phone.trim();
            if (data.phone.length > 0) {
                var ob = {
                    mobile: data.phone,
                    smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id,
                    name: data.name
                };
                this.userService.FindPatientAppointmentByPhone(ob).subscribe(function (dataReceived) {
                    console.log(dataReceived);
                    _this.numberWritten = true;
                    _this.GetPatientLastPrescription();
                    console.log("Data Received");
                    console.log(dataReceived);
                    if (dataReceived.response == true) {
                        _this.consultationType = [
                            'Appointment'
                        ];
                        _this.registrationData.type = "Appointment";
                        _this.toastr.success(dataReceived.message, "Success");
                        _this.patientListReg = [];
                        _this.patientListReg1 = [];
                        _this.registrationData.name = dataReceived.data[0].patient_id.name;
                        _this.registrationData.type = "Appointment";
                        _this.registrationData.appointment_detail = dataReceived.data[0];
                        _this.consultationDoctor = dataReceived.data[0].doctor_id;
                        _this.checkWhichFieldsToShow(_this.consultationDoctor);
                        /** Get Patient Details **/
                        var object = void 0;
                        object = {};
                        var doctor = _this.dataDoctors.filter(function (d) { return d._id.toString() == _this.consultationDoctor.toString(); });
                        if (doctor[0]) {
                            object.clinic_id = doctor[0].doctm_clinic_id;
                        }
                        else {
                            object.clinic_id = _this.clinicId;
                        }
                        object.mobile = data.phone;
                        object.name = data.name;
                        console.log('here');
                        _this.userService.GetPatientDetail(object).subscribe(function (data2) {
                            _this.consultationDoctor = _this.consultationDoctor;
                            console.log(data2);
                            _this.GetPatientLastPrescription();
                            if (data2.response == true) {
                                //alert(data2.data.length);
                                if (data2.data.length == 1) {
                                    _this.registrationData.name = data2.data[0].name;
                                    _this.registrationData.dob = data2.data[0].dob;
                                    if (data2.data[0].dob) {
                                        _this.dob_class = "black-class";
                                    }
                                    if (data2.data[0].gender) {
                                        _this.registrationData.gender = data2.data[0].gender;
                                        _this.genderClass = "black-class";
                                    }
                                    else {
                                        _this.registrationData.gender = "Select";
                                    }
                                    _this.registrationData.age_param = "years";
                                    if (data2.data[0].age_in_years > 0) {
                                        _this.registrationData.age = data2.data[0].age_in_years;
                                        _this.registrationData.age_param = "years";
                                    }
                                    else {
                                        if (data2.data[0].age_in_months) {
                                            _this.registrationData.age_param = "months";
                                        }
                                        if (data2.data[0].age_in_months) {
                                            _this.registrationData.age_param = "months";
                                            _this.registrationData.age = data2.data[0].age_in_months;
                                        }
                                    }
                                    _this.registrationData.city = data2.data[0].city;
                                    _this.userService.GetCityFromClinicId(_this.clinicId).subscribe(function (data) {
                                        console.log(data);
                                        //alert(data.city);
                                        _this.citiesList = [];
                                        _this.citiesList1 = data.data;
                                        _this.state = data.state;
                                        var city = _this.citiesList.filter(function (d) { return doctor[0].clinic_details.city == d.name; });
                                        if (!_this.registrationData.city) {
                                            _this.registrationData.city = data.city;
                                        }
                                    }, function (err) {
                                        console.log(err);
                                    });
                                    _this.registrationData.location = data2.data[0].address;
                                }
                                else {
                                    _this.patientListReg = data2.data;
                                    _this.patientListReg1 = data2.data;
                                }
                            }
                        }, function (err) {
                            console.log(err);
                        });
                        /*************************/
                    }
                    else {
                        //this.consultationDoctor = "Select Doctor"
                        if (dataReceived.message == 'No appointment found for today') {
                            _this.toastr.success(dataReceived.message, "Success");
                            _this.consultationType = [
                                'Walk-in',
                                'Emergency'
                            ];
                            _this.registrationData.type = "Walk-in";
                            var object = void 0;
                            object = {};
                            var doctor = _this.dataDoctors.filter(function (d) { return d._id.toString() == _this.consultationDoctor.toString(); });
                            if (doctor[0]) {
                                object.clinic_id = doctor[0].doctm_clinic_id;
                            }
                            else {
                                object.clinic_id = _this.clinicId;
                            }
                            object.mobile = data.phone;
                            object.name = data.name;
                            console.log('here');
                            _this.userService.GetPatientDetail(object).subscribe(function (data2) {
                                _this.consultationDoctor = "Select Doctor";
                                console.log(data2);
                                _this.GetPatientLastPrescription();
                                //alert(data2.response);
                                if (data2.response == true) {
                                    //alert(data2.data.length);
                                    if (data2.data.length == 1) {
                                        _this.genderClass = "black-class";
                                        _this.dob_class = "black-class";
                                        _this.registrationData.name = data2.data[0].name;
                                        _this.registrationData.dob = data2.data[0].dob;
                                        _this.registrationData.gender = data2.data[0].gender;
                                        if (data2.data[0].age_in_years > 0) {
                                            _this.registrationData.age = data2.data[0].age_in_years;
                                            _this.registrationData.age_param = "years";
                                        }
                                        else {
                                            _this.registrationData.age = data2.data[0].age_in_months;
                                            _this.registrationData.age_param = "months";
                                        }
                                        _this.registrationData.city = data2.data[0].city;
                                        _this.registrationData.location = data2.data[0].address;
                                        // alert(data2.data[0].new_age);
                                    }
                                    else {
                                        _this.patientListReg = data2.data;
                                        _this.patientListReg1 = data2.data;
                                    }
                                }
                                else {
                                    _this.registrationData = {};
                                    _this.genderClass = "grey-placeholder";
                                    _this.sys_class = "grey-placeholder";
                                    _this.dob_class = "grey-placeholder";
                                    _this.temp_class = "grey-placeholder";
                                    _this.rbs_class = "grey-placeholder";
                                    _this.dia_class = "grey-placeholder";
                                    _this.pulse_class = "grey-placeholder";
                                    _this.spo_class = "grey-placeholder";
                                    _this.registrationData = {};
                                    _this.registrationData.type = "";
                                    _this.registrationData.gender = "Select";
                                    _this.registrationData.temp = "";
                                    _this.registrationData.pulse = "";
                                    _this.registrationData.bp = "";
                                    _this.registrationData.dia = "";
                                    _this.registrationData.rbs = "";
                                    _this.registrationData.spo = "Select";
                                    _this.registrationData.phone = data.phone;
                                    _this.registrationData.name = data.name;
                                    _this.registrationData.age_param = "years";
                                    _this.consultationType = [
                                        'Walk-in',
                                        'Emergency'
                                    ];
                                    _this.registrationData.type = "Walk-in";
                                    _this.userService.GetCityFromClinicId(_this.clinicId).subscribe(function (data) {
                                        console.log(data);
                                        //alert(data.city);
                                        _this.citiesList = [];
                                        _this.citiesList1 = data.data;
                                        _this.state = data.state;
                                        var city = _this.citiesList.filter(function (d) { return doctor[0].clinic_details.city == d.name; });
                                        if (!_this.registrationData.city) {
                                            _this.registrationData.city = data.city;
                                        }
                                        _this.GetPatientLastPrescription();
                                    }, function (err) {
                                        console.log(err);
                                    });
                                }
                            }, function (err) {
                                console.log(err);
                            });
                        }
                        else {
                            _this.toastr.error(dataReceived.message, "Error");
                        }
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            this.toastr.warning("Invalid phone number", "Warning");
        }
        this.SearchLocationSuggestions();
    };
    HeaderThreeLayoutComponent.prototype.findPatientAppointmentByPhoneKey = function (event, data) {
        var _this = this;
        if (event.keyCode == 13) {
            //alert('hii');
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
            this.digitalTrue = false;
            this.registrationData.age_param = "Years";
            if (this.registrationData.phone.length < 10) {
                this.toastr.warning("Please fill atleast 10 digits number", "Warning");
                return;
            }
            if (!isNaN(data)) {
                data = data.trim();
                if (data.length > 0) {
                    var ob = {
                        mobile: data,
                        smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id
                    };
                    this.userService.FindPatientAppointmentByPhone(ob).subscribe(function (dataReceived) {
                        console.log(dataReceived);
                        _this.numberWritten = true;
                        // this.GetPatientLastPrescription()
                        console.log("Data Received");
                        console.log(dataReceived);
                        if (dataReceived.response == true) {
                            if (dataReceived.data.length == 1) {
                                //	alert(dataReceived.data.length);
                                _this.toastr.success(dataReceived.message, "Success");
                                _this.patientListReg = [];
                                _this.patientListReg1 = [];
                                _this.registrationData.name = dataReceived.data[0].patient_id.name;
                                _this.registrationData.type = "Appointment";
                                _this.registrationData.appointment_detail = dataReceived.data[0];
                                _this.consultationDoctor = dataReceived.data[0].doctor_id;
                                _this.registrationData.gender = dataReceived.data[0].patient_id.gender;
                                if (_this.registrationData.gender) {
                                    _this.genderClass = "black-class";
                                    //this.dob_class="black-class"
                                }
                                _this.registrationData.dob = dataReceived.data[0].dob;
                                //this.registrationData.gender = data2.data[0].gender
                                _this.registrationData.age = dataReceived.data[0].age;
                                if (_this.registrationData.dob) {
                                    //this.genderClass="black-class"
                                    _this.dob_class = "black-class";
                                }
                                _this.checkWhichFieldsToShow(_this.consultationDoctor);
                                /** Get Patient Details **/
                                var object = void 0;
                                object = {};
                                var doctor = _this.dataDoctors.filter(function (d) { return d._id.toString() == _this.consultationDoctor.toString(); });
                                if (doctor[0]) {
                                    object.clinic_id = doctor[0].doctm_clinic_id;
                                }
                                object.mobile = data;
                                //alert('here');
                                _this.userService.GetPatientDetail(object).subscribe(function (data2) {
                                    _this.consultationDoctor = _this.consultationDoctor;
                                    console.log(data2);
                                    _this.GetPatientLastPrescription();
                                    if (data2.response == true) {
                                        if (data2.data.length == 1) {
                                            //alert('hey')
                                            _this.genderClass = "black-class";
                                            _this.dob_class = "black-class";
                                            _this.registrationData.name = data2.data[0].name;
                                            _this.registrationData.dob = data2.data[0].dob;
                                            _this.registrationData.gender = data2.data[0].gender;
                                            _this.registrationData.age = data2.data[0].age;
                                            _this.registrationData.city = data2.data[0].city;
                                            _this.registrationData.location = data2.data[0].address;
                                            if (data2.data[0].new_age) {
                                                //alert(data2.data[0].new_age);
                                                if (data2.data[0].new_age.includes('months')) {
                                                    _this.registrationData.age_param = "Months";
                                                    _this.registrationData.age = data2.data[0].new_age.split('months')[0].toString().trim();
                                                }
                                                else {
                                                    _this.registrationData.age_param = "Years";
                                                    _this.registrationData.age = data2.data[0].new_age.split('years')[0].toString().trim();
                                                }
                                            }
                                            else {
                                                _this.registrationData.age_param = "Years";
                                            }
                                            //alert('here');
                                            //alert( this.registrationData.age_param);
                                        }
                                        else {
                                            _this.patientListReg = data2.data;
                                            _this.patientListReg1 = data2.data;
                                        }
                                    }
                                }, function (err) {
                                    console.log(err);
                                });
                                /*************************/
                            }
                        }
                        else {
                            //this.consultationDoctor = "Select Doctor"
                            if (dataReceived.message == 'No appointment found for today') {
                                _this.toastr.success(dataReceived.message, "Success");
                                _this.consultationType = [
                                    'Walk-in',
                                    'Emergency'
                                ];
                                _this.registrationData.type = "Walk-in";
                                var object = void 0;
                                object = {};
                                var doctor = _this.dataDoctors.filter(function (d) { return d._id.toString() == _this.consultationDoctor.toString(); });
                                if (doctor[0]) {
                                    object.clinic_id = doctor[0].doctm_clinic_id;
                                }
                                object.mobile = data;
                                console.log('here');
                                _this.userService.GetPatientDetail(object).subscribe(function (data2) {
                                    _this.consultationDoctor = "Select Doctor";
                                    console.log(data2);
                                    _this.GetPatientLastPrescription();
                                    if (data2.response == true) {
                                        if (data2.data.length == 1) {
                                            _this.genderClass = "black-class";
                                            _this.dob_class = "black-class";
                                            _this.registrationData.name = data2.data[0].name;
                                            _this.registrationData.dob = data2.data[0].dob;
                                            _this.registrationData.gender = data2.data[0].gender;
                                            _this.registrationData.age = data2.data[0].age;
                                            _this.registrationData.city = data2.data[0].city;
                                            _this.registrationData.location = data2.data[0].address;
                                            if (data2.data[0].new_age) {
                                                if (data2.data[0].new_age.includes('months')) {
                                                    _this.registrationData.age_param = "Months";
                                                    _this.registrationData.age = data2.data[0].new_age.split('months')[0].toString().trim();
                                                }
                                                else {
                                                    _this.registrationData.age_param = "Years";
                                                    _this.registrationData.age = data2.data[0].new_age.split('years')[0].toString().trim();
                                                }
                                            }
                                            else {
                                                _this.registrationData.age_param = "Years";
                                            }
                                        }
                                        else {
                                            _this.patientListReg = data2.data;
                                            _this.patientListReg1 = data2.data;
                                        }
                                    }
                                }, function (err) {
                                    console.log(err);
                                });
                            }
                            else {
                                _this.toastr.error(dataReceived.message, "Error");
                            }
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
            else {
                this.toastr.warning("Invalid phone number", "Warning");
            }
        }
    };
    HeaderThreeLayoutComponent.prototype.getPatientInfo = function (data) {
        var _this = this;
        var object;
        object = {};
        var doctor = this.dataDoctors.filter(function (d) { return d._id.toString() == _this.consultationDoctor.toString(); });
        if (doctor[0]) {
            object.clinic_id = doctor[0].doctm_clinic_id;
        }
        else {
            object.clinic_id = this.clinicId;
        }
        object.mobile = data.phone;
        if (data.name) {
            object.name = data.name;
        }
        console.log('here');
        this.userService.GetPatientDetail(object).subscribe(function (data2) {
            //  this.GetPatientLastPrescription()
            if (data2.response == true) {
                if (data2.data.length == 1) {
                    _this.registrationData.name = data2.data[0].name;
                    if (data2.data[0].dob) {
                        _this.registrationData.dob = data2.data[0].dob;
                        _this.dob_class = "black-class";
                    }
                    else {
                        _this.dob_class = "grey-placeholder";
                    }
                    if (data2.data[0].gender) {
                        _this.registrationData.gender = data2.data[0].gender;
                        _this.genderClass = "black-class";
                    }
                    else {
                        _this.genderClass = "grey-placeholder";
                    }
                    _this.registrationData.age = data2.data[0].age;
                    if (data2.data[0].city) {
                        _this.registrationData.city = data2.data[0].city;
                    }
                    _this.registrationData.location = data2.data[0].address;
                    console.log(data2.data[0].dob);
                    _this.registrationData.age_param = "years";
                    if (data2.data[0].age_in_years > 0) {
                        _this.registrationData.age = data2.data[0].age_in_years;
                        _this.registrationData.age_param = "years";
                    }
                    if (data2.data[0].age_in_months > 0) {
                        _this.registrationData.age = data2.data[0].age_in_months;
                        _this.registrationData.age_param = "months";
                    }
                }
                else {
                    _this.patientListReg = data2.data;
                    _this.patientListReg1 = data2.data;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeaderThreeLayoutComponent.prototype.AppointmentsBySmartAssistant = function () {
        var _this = this;
        var ob = {
            doctor_id: this.appointmentDoctor
        };
        this.userService.getAverageConsultationTime(ob).subscribe(function (data) {
            console.log(data);
            _this.auto_time = parseInt(data.mins);
        }, function (err) {
            console.log(err);
            _this.auto_time = 3;
        });
        var currentDoc = {};
        console.log(this.appointmentDoctor);
        this.getOpdHolidays(this.appointmentDoctor);
        for (var i = 0; i < this.currentDocForData.length; i++) {
            console.log(this.currentDocForData[i]._id);
            if (this.currentDocForData[i]._id == this.appointmentDoctor) {
                currentDoc = this.currentDocForData[i];
                break;
            }
        }
        console.log(currentDoc);
        this.checkHoliday(currentDoc);
        // console.log(this.appointmentDoctor)
        if (this.appointmentDoctor == "" || this.appointmentDoctor == "Select App") {
            this.toastr.warning("Select doctor first", "Warning");
            return;
        }
        else {
            var ob_1 = {
                smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id,
                doctor_id: this.appointmentDoctor
            };
            this.userService.AppointmentsBySmartAssistant(ob_1).subscribe(function (data) {
                console.log(data);
                _this.appointmentsForCalender = [];
                if (data.response == true) {
                    for (var i = 0; i < data.data.length; i++) {
                        /*  for (var j = 0; j < this.getOPDHOlidayCopy.length; j++) {
                             if(this.getOPDHOlidayCopy[j].date == data.data[i]._id){
                                this.deleteAppointment(data.data[i]._id)
                             }
                         } */
                        _this.appointmentsForCalender.push({
                            start: new Date(data.data[i]._id).toJSON().toString().substr(0, 10),
                            title: data.data[i].time.length,
                            time: data.data[i].time,
                            textColor: '#2ac120'
                        });
                    }
                    // console.log(this.appointmentsForCalender)
                }
                // console.log(this.getOPDHOliday)
                for (var i = 0; i < _this.getOPDHOliday.length; i++) {
                    // $("td[data-date='"+this.getOPDHOliday[i].date.split('T')[0]+"']").css('background-color','#FFB347');
                    _this.appointmentsForCalender.push({
                        start: _this.getOPDHOliday[i].start,
                        title: 'Closed',
                        textColor: 'grey'
                        // color: '#FFB347',
                        //time : data.data[i].time
                    });
                    // $("td[data-date='"+this.getOPDHOliday[i].date.split('T')[0]+"']").css('background-color','#FFB347');
                }
                _this.events = _this.appointmentsForCalender;
                _this.calendarOptions = {
                    editable: true,
                    eventLimit: false,
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: ''
                    },
                    events: _this.appointmentsForCalender,
                };
                // console.log('Appointment List');
                // console.log(this.appointmentsForCalender);
                $("#appointmentCalender").modal("show");
            }, function (err) {
                console.log(err);
            });
        }
    };
    HeaderThreeLayoutComponent.prototype.clickButton = function (model) {
        this.displayEvent = model;
    };
    HeaderThreeLayoutComponent.prototype.dayClick = function (model) {
        //alert(model.date._d);
        this.calenderDateClicked(model.date._d);
    };
    HeaderThreeLayoutComponent.prototype.eventClick = function (model) {
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
    HeaderThreeLayoutComponent.prototype.calenderDateClicked = function (model) {
        var localDate = model;
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (new Date(today.setHours(0, 0, 0, 0)) >= today) {
            console.log(model);
            var day = model.toString().substr(0, 3);
            var doctor;
            var consulation;
            this.appointmentDate = model;
            if (today.setHours(0, 0, 0, 0) > this.appointmentDate.setHours(0, 0, 0, 0)) {
                this.toastr.warning('You cant set appointment of past days');
                return;
            }
            for (var i = 0; i < this.getHolidayList.length; i++) {
                console.log(new Date(this.getHolidayList[i].date).toJSON().toString().substr(0, 10), model.toJSON().toString().substr(0, 10));
                //if(this.getHolidayList[i].date == model){
                if (new Date(this.getHolidayList[i].date).toJSON().toString().substr(0, 10) == this.datePipe.transform(localDate, 'yyyy-MM-dd')) {
                    this.toastr.warning("Opd Holiday", "Warning");
                    return;
                }
            }
            doctor = {};
            for (var i = 0; i < this.dataDoctors.length; i++) {
                if (this.dataDoctors[i]._id == this.appointmentDoctor) {
                    doctor = this.dataDoctors[i];
                    break;
                }
            }
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
                    //shiftOfOneSchedule.consultationTime = parseInt(doctor.avgConsTime.substr(0, 2))
                    if (doctor.avgConsTime != 'Auto') {
                        shiftOfOneSchedule.consultationTime = parseInt(doctor.avgConsTime.substr(0, 2));
                    }
                    else {
                        shiftOfOneSchedule.consultationTime = this.auto_time;
                    }
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
            console.log('Selected Date');
            console.log(this.appointmentDate);
            $("#selectAppointmentTime").modal("show");
        }
        else {
            this.toastr.warning("Appointment cant be booked for past dates", "Warning");
        }
    };
    HeaderThreeLayoutComponent.prototype.updateEvent = function (model) {
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,
                title: model.event.title
                // other params
            },
            duration: {
                _data: model.duration._data
            }
        };
        this.displayEvent = model;
    };
    HeaderThreeLayoutComponent.prototype.onTimeSelection = function (data) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (data.already == true) {
            this.toastr.warning("Time slot already booked", "Warning");
            return;
        }
        else if (today.toString() == this.appointmentDate.toString()) {
            var currentTime = new Date();
            var currentOffset = currentTime.getTimezoneOffset();
            var ISTOffset = 330;
            var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
            var hoursIST = ISTTime.getHours();
            var minutesIST = ISTTime.getMinutes();
            if (data.startHour < hoursIST) {
                this.toastr.warning("Passed time slots can not be booked", "Warning");
                return;
            }
            else if (data.startHour == hoursIST) {
                if (data.startMin <= minutesIST) {
                    this.toastr.warning("Passed time slots can not be booked", "Warning");
                    return;
                }
            }
            this.appointmentTime = data;
            $("#selectAppointmentTime").modal("hide");
            $("#appointmentCalender").modal("hide");
            this.dateSelected = true;
        }
        else {
            this.appointmentTime = data;
            $("#selectAppointmentTime").modal("hide");
            $("#appointmentCalender").modal("hide");
            this.dateSelected = true;
        }
    };
    HeaderThreeLayoutComponent.prototype.changeDoctor = function () {
        this.dateSelected = false;
    };
    HeaderThreeLayoutComponent.prototype.bookAppointment = function () {
        var _this = this;
        //alert(this.appointmentDate);
        if (!isNaN(this.appointment.name) || this.appointment.name == null || this.appointment.name == undefined) {
            this.toastr.warning("Invalid Name", "Warning");
            return;
        }
        if (!isNaN(this.appointment.phone) && this.appointment.phone.length > 9 && this.appointment.name.trim().length > 0) {
            var lowerCase = (/[a-z]/.test(this.appointment.name));
            var upperCase = (/[A-Z]/.test(this.appointment.name));
            var numberCase = (/[0-9]/.test(this.appointment.name));
            if (lowerCase || upperCase || numberCase) {
                var object = void 0;
                object = {};
                object.date = this.appointmentDate,
                    object.time = this.appointmentTime,
                    object.doctor_id = this.appointmentDoctor,
                    object.patient_mobile = this.appointment.phone,
                    object.patient_name = this.appointment.name,
                    object.smart_assistant_id = this.smartAssistantData.dataSmartAssistant._id;
                object.date = new Date(object.date).setDate(this.appointmentDate.getDate() + 1);
                var doctor = this.dataDoctors.filter(function (d) { return d._id.toString() == _this.appointmentDoctor.toString(); });
                object.clinic_id = doctor[0].doctm_clinic_id;
                $("#appointmentForm").modal("hide");
                this.loading = true;
                this.userService.BookAppointment(object).subscribe(function (data) {
                    console.log(data);
                    _this.loading = false;
                    if (data.response == true) {
                        _this.toastr.success(data.message, "Success");
                        _this.ngOnInit();
                        // this.missionService.announceMission("reload_appointment_list");
                    }
                    else {
                        _this.toastr.error(data.message, "Error");
                        return;
                    }
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                this.toastr.error("Invalid detail", "Error");
                return;
            }
        }
        else {
            this.toastr.error("Invalid detail", "Error");
            return;
        }
    };
    HeaderThreeLayoutComponent.prototype.getClassTime = function (shift) {
        var _this = this;
        // console.log(this.appointmentsForCalender)
        if (this.appointmentsForCalender.length > 0) {
            var appointments;
            appointments = this.appointmentsForCalender.filter(function (d) { return d.start == _this.datePipe.transform(_this.appointmentDate, 'yyyy-MM-dd'); });
            if (appointments) {
                if (appointments.length > 0) {
                    if (appointments[0].time) {
                        for (var i = 0; i < appointments[0].time.length; i++) {
                            if (appointments[0].time[i].startHour == shift.startHour && appointments[0].time[i].startMin == shift.startMin) {
                                shift.already = true;
                            }
                        }
                    }
                }
            }
        }
    };
    HeaderThreeLayoutComponent.prototype.SaveAppointmentForCustomTime = function (customTime) {
        var doctor;
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if (this.dataDoctors[i]._id.toString() == this.appointmentDoctor.toString()) {
                doctor = this.dataDoctors[i];
            }
        }
        var boolean = false;
        for (var i = 0; i < this.shiftsOfParticularDay.length; i++) {
            for (var j = 0; j < this.shiftsOfParticularDay[i].shift.length; j++) {
                if (this.shiftsOfParticularDay[i].shift[j].already == true &&
                    this.shiftsOfParticularDay[i].shift[j].startHour == customTime.hour &&
                    this.shiftsOfParticularDay[i].shift[j].startMin == customTime.minute) {
                    this.toastr.warning("Time slot already booked", "Warning");
                    boolean = true;
                    return;
                }
                else if (this.shiftsOfParticularDay[i].shift[j].startHour == customTime.hour &&
                    this.shiftsOfParticularDay[i].shift[j].startMin == customTime.minute) {
                    this.toastr.warning("Time slot already exists", "Warning");
                    boolean = true;
                    return;
                }
                else if ((((parseInt(customTime.hour) * 60) + parseInt(customTime.minute)) <
                    ((parseInt(this.shiftsOfParticularDay[i].shift[j].endHour) * 60) + parseInt(this.shiftsOfParticularDay[i].shift[j].endMin))) &&
                    (((parseInt(customTime.hour) * 60) + parseInt(customTime.minute)) >=
                        ((parseInt(this.shiftsOfParticularDay[i].shift[j].startHour) * 60) + parseInt(this.shiftsOfParticularDay[i].shift[j].startMin)))) {
                    this.toastr.warning("In between time slots are not allowed", "Warning");
                    boolean = true;
                    return;
                }
                else if (doctor.avgConsTime != 'Auto') {
                    if (((parseInt(customTime.hour) * 60) + parseInt(customTime.minute)) %
                        parseInt(doctor.avgConsTime.substr(0, 2)) != 0) {
                        this.toastr.warning("Time slot format mismatches", "Warning");
                        boolean = true;
                        return;
                    }
                }
                else {
                    if (((parseInt(customTime.hour) * 60) + parseInt(customTime.minute)) %
                        parseInt(this.auto_time) != 0) {
                        this.toastr.warning("Time slot format mismatches", "Warning");
                        boolean = true;
                        return;
                    }
                }
            }
        }
        for (var j = 0; j < this.customShifts.length; j++) {
            if (this.customShifts[j].startHour == customTime.hour &&
                this.customShifts[j].startMin == customTime.minute) {
                this.toastr.warning("Time slot already booked", "Warning");
                boolean = true;
                return;
            }
        }
        if (boolean == false) {
            var today = new Date();
            today.setHours(0, 0, 0, 0);
            if (today.toString() == this.appointmentDate.toString()) {
                var currentTime = new Date();
                var currentOffset = currentTime.getTimezoneOffset();
                var ISTOffset = 330;
                var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
                var hoursIST = ISTTime.getHours();
                var minutesIST = ISTTime.getMinutes();
                if (customTime.hour < hoursIST) {
                    this.toastr.warning("Passed time slots can not be booked", "Warning");
                    return;
                }
                else if (customTime.hour == hoursIST) {
                    if (customTime.Minute <= minutesIST) {
                        this.toastr.warning("Passed time slots can not be booked", "Warning");
                        return;
                    }
                }
            }
            this.appointmentTime = {};
            this.appointmentTime.startHour = customTime.hour.toString(),
                this.appointmentTime.startMin = customTime.minute.toString(),
                this.appointmentTime.endHour = null;
            this.appointmentTime.endMin = null;
            this.appointmentTime.customTime = true;
            $("#selectAppointmentTime").modal("hide");
            $("#appointmentCalender").modal("hide");
            this.dateSelected = true;
        }
    };
    HeaderThreeLayoutComponent.prototype.checkCustomTimeShifts = function () {
        var _this = this;
        this.customShifts = [];
        if (this.appointmentsForCalender.length > 0) {
            var appointments;
            console.log('selected appoints');
            console.log(this.appointmentsForCalender);
            appointments = this.appointmentsForCalender.filter(function (d) { return d.start == _this.datePipe.transform(_this.appointmentDate, 'yyyy-MM-dd'); });
            if (appointments.length > 0) {
                for (var i = 0; i < appointments[0].time.length; i++) {
                    if (appointments[0].time[i].customTime) {
                        this.customShifts.push(appointments[0].time[i]);
                    }
                }
            }
        }
    };
    HeaderThreeLayoutComponent.prototype.resetAppointmentModal = function () {
        this.dateSelected = false;
        this.appointmentDate = new Date();
        this.appointmentTime = {};
        this.appointment = {};
        this.appointmentDoctor = "Select App";
    };
    HeaderThreeLayoutComponent.prototype.getClassSlot = function (data) {
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
    HeaderThreeLayoutComponent.prototype.SearchCity = function (data) {
        data = data.toLowerCase();
        if (data && data.trim() != '') {
            this.citiesList = this.allCities.filter(function (item) {
                var b = item.toLowerCase();
                return (b.indexOf(data) > -1);
            });
        }
        if (data == '') {
            this.citiesList = this.allCities;
        }
    };
    HeaderThreeLayoutComponent.prototype.GetLatLng = function (city) {
        var _this = this;
        var string = city + "," + this.state;
        string = string.replace(" ", "");
        var object = {
            string: string.trim()
        };
        console.log(object);
        this.userService.GetLatLng(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.lat = data.data[0].latitude;
                _this.lng = data.data[0].longitude;
            }
        });
    };
    HeaderThreeLayoutComponent.prototype.SearchPatientName = function (data) {
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
    HeaderThreeLayoutComponent.prototype.SearchArea = function (data) {
        data = data.toLowerCase();
        if (data && data.trim() != '') {
            this.area_suggestions = this.area_suggestions.filter(function (item) {
                var b = item.location.toLowerCase();
                return (b.indexOf(data) > -1);
            });
        }
        if (data.trim() == '') {
            this.area_suggestions = this.area_suggestions1;
        }
    };
    HeaderThreeLayoutComponent.prototype.clearSuggestions = function () {
        this.area_suggestions = [];
        this.area_suggestions1 = [];
    };
    HeaderThreeLayoutComponent.prototype.checkSuggestions = function (event) {
        if (this.area_suggestions1.length <= 0) {
            this.SearchLocationSuggestions();
        }
        if (event.target.value.trim() == '') {
            this.area_suggestions = this.area_suggestions1;
        }
        console.log(this.area_suggestions);
        console.log(event.target.value);
    };
    HeaderThreeLayoutComponent.prototype.SearchPatientNameReg = function (data) {
        data = data.toLowerCase();
        if (data && data.trim() != '') {
            this.patientListReg = this.patientListReg1.filter(function (item) {
                var b = item.name.toLowerCase();
                return (b.indexOf(data) > -1);
            });
        }
        if (data == '') {
            this.patientListReg = this.patientListReg1;
        }
        console.log(this.patientListReg);
    };
    HeaderThreeLayoutComponent.prototype.NewRegistration = function () {
        var _this = this;
        var newDate = new Date();
        newDate.setDate(newDate.getDate());
        if (this.registrationData.phone == "" || this.registrationData.phone == null || isNaN(this.registrationData.phone)) {
            this.toastr.warning("Please Enter Phone", "Warning");
            return;
        }
        if (this.consultationDoctor == "" || this.consultationDoctor == "Select Doctor") {
            this.toastr.warning("Please Select Doctor", "Warning");
            return;
        }
        if (this.registrationData.type == "") {
            this.toastr.warning("Please Enter consulatation type", "Warning");
            return;
        }
        if (this.registrationData.name == "" || this.registrationData.name == null || !isNaN(this.registrationData.name)) {
            this.toastr.warning("Please Enter Name", "Warning");
            return;
        }
        if (this.field_age && ((this.registrationData.age == "" || this.registrationData.age == null) || (this.registrationData.age < 1 || this.registrationData.age > 100 || isNaN(this.registrationData.age)))) {
            this.toastr.warning("Please Enter age", "Warning");
            return;
        }
        if (this.field_dob && (this.registrationData.dob == "" || this.registrationData.dob == null)) {
            this.toastr.warning("Please Enter date of birth", "Warning");
            return;
        }
        else if (new Date(this.registrationData.dob).setHours(0, 0, 0, 0) > new Date(newDate).setHours(0, 0, 0, 0)) {
            console.log(new Date().getDate() + 1);
            this.toastr.warning("Please Enter date of birth", "Warning");
            return;
        }
        if (this.registrationData.gender == "Select") {
            this.toastr.warning("Please select gender", "Warning");
            return;
        }
        if (this.registrationData.fee && isNaN(this.registrationData.fee)) {
            this.toastr.warning("Please Enter fee", "Warning");
            return;
        }
        if (this.registrationData.city == null || this.registrationData.city == "" || this.registrationData.city == undefined || this.registrationData.city.trim().length < 1
            || this.registrationData.location == null || this.registrationData.location == "" || this.registrationData.location == undefined || this.registrationData.location.trim().length < 1) {
            this.toastr.warning("Please Enter address", "Warning");
            return;
        }
        if (this.registrationData.weight != null && this.registrationData.weight != '' && (this.registrationData.weight < 1 || this.registrationData.weight > 150 || isNaN(this.registrationData.weight))) {
            this.toastr.warning("Please Enter weight", "Warning");
            return;
        }
        else if (this.registrationData.height != null && this.registrationData.height != '' && (this.registrationData.height < 1 || this.registrationData.height > 240 || isNaN(this.registrationData.height))) {
            this.toastr.warning("Please Enter height", "Warning");
            return;
        }
        var ob;
        ob = {};
        ob.registration = this.registrationData;
        /* if(this.registrationData.age_param=="Months" && this.registrationData.age){
            ob.registration.new_age=this.registrationData.age+' months';
        }
        if(this.registrationData.age_param=="Years" && this.registrationData.age){
            ob.registration.new_age=this.registrationData.age+' years';
        } */
        /* if(this.registrationData.age_param){
            ob.registration.age_param=this.registrationData.age_param;
        } */
        ob.consultationDoctor = this.consultationDoctor;
        var doctor = this.dataDoctors.filter(function (d) { return d._id.toString() == _this.consultationDoctor.toString(); });
        console.log();
        ob.clinic_id = doctor[0].doctm_clinic_id;
        ob.smart_assistant_id = this.smartAssistantData.dataSmartAssistant._id;
        if (this.reportPics.length > 0) {
            ob.reportPics = this.reportPics;
        }
        if (this.pateintPic != null && this.pateintPic != '') {
            ob.pateintPic = this.pateintPic;
        }
        ob.lat = this.lat;
        ob.lng = this.lng;
        $("#registrationForm").modal("hide");
        this.loading = true;
        console.log(ob);
        this.userService.NewRegistration(ob).subscribe(function (data) {
            _this.loading = false;
            _this.patientList = [];
            console.log(data);
            if (data.response == true) {
                _this.toastr.success(data.message, "Success");
                _this.ngOnInit();
                _this.missionService.announceMission("reload_smart_assistant_page");
                _this.socket.emit('registrationBooked', {
                    room_id: _this.smartAssistantData.dataSmartAssistant._id.toString()
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeaderThreeLayoutComponent.prototype.getDoctorName = function (id) {
        if (this.dataDoctors) {
            var doctor = this.dataDoctors.filter(function (d) { return d._id.toString() == id.toString(); });
            if (doctor[0]) {
                return doctor[0].first_name;
            }
            else {
                return 'Dr.';
            }
        }
        else {
            return 'doctor';
        }
    };
    HeaderThreeLayoutComponent.prototype.getAppointmentMinToShow = function (min) {
        if (min < 10) {
            return "0" + min;
        }
        else {
            return min;
        }
    };
    /////////////////////////////////////////////////
    HeaderThreeLayoutComponent.prototype.openPrescriptionView = function () {
        var newDate = new Date();
        newDate.setDate(newDate.getDate());
        if (this.registrationData.phone == "" || this.registrationData.phone == null || isNaN(this.registrationData.phone)) {
            this.toastr.warning("Please Enter Phone", "Warning");
            return;
        }
        if (this.registrationData.type == "") {
            this.toastr.warning("Please Enter consulatation type", "Warning");
            return;
        }
        if (this.registrationData.name == "" || this.registrationData.name == null || !isNaN(this.registrationData.name)) {
            this.toastr.warning("Please Enter Name", "Warning");
            return;
        }
        if (this.field_age && ((this.registrationData.age == "" || this.registrationData.age == null) || (this.registrationData.age < 1 || this.registrationData.age > 100 || isNaN(this.registrationData.age)))) {
            this.toastr.warning("Please Enter age", "Warning");
            return;
        }
        if (this.field_dob && (this.registrationData.dob == "" || this.registrationData.dob == null)) {
            this.toastr.warning("Please Enter date of birth", "Warning");
            return;
        }
        else if (new Date(this.registrationData.dob).setHours(0, 0, 0, 0) >= new Date(newDate).setHours(0, 0, 0, 0)) {
            console.log(new Date().getDate() + 1);
            this.toastr.warning("Please Enter date of birth", "Warning");
            return;
        }
        if (this.registrationData.gender == "Select") {
            this.toastr.warning("Please select gender", "Warning");
            return;
        }
        if (this.registrationData.fee && isNaN(this.registrationData.fee)) {
            this.toastr.warning("Please Enter fee", "Warning");
            return;
        }
        if (this.registrationData.city == null || this.registrationData.city == "" || this.registrationData.city == undefined || this.registrationData.city.trim().length < 1
            || this.registrationData.location == null || this.registrationData.location == "" || this.registrationData.location == undefined || this.registrationData.location.trim().length < 1) {
            this.toastr.warning("Please Enter address", "Warning");
            return;
        }
        if (this.registrationData.weight != null && this.registrationData.weight != '' && (this.registrationData.weight < 1 || this.registrationData.weight > 150 || isNaN(this.registrationData.weight))) {
            this.toastr.warning("Please Enter weight", "Warning");
            return;
        }
        else if (this.registrationData.height != null && this.registrationData.height != '' && (this.registrationData.height < 1 || this.registrationData.height > 240 || isNaN(this.registrationData.height))) {
            this.toastr.warning("Please Enter height", "Warning");
            return;
        }
        console.log("working");
        console.log(this.doctorArrayObject);
        //this.dispensedPatientSelected = data
        // if(!data.precription.medicationComplete && !data.webcam_pic){
        //     $("#webcamModal").modal("show");         
        //     this.webCamOpenedBY = "prescription"
        // }else{
        //if(!data.webcam_pic){
        //this.dispensedPatient = this.registrationData.phone
        this.finalPreConditions = this.registrationData.phone;
        // this.bodyIndicatorSelected = data.precription.bodyIndicatorSelected
        // this.bodyIndicatorComplete = data.precription.bodyIndicatorComplete
        // this.finalAllergy = data.precription.finalAllergy
        // this.findingsSelected = data.precription.findingsSelected
        // this.symptomsSelected = data.precription.symptomsSelected
        // this.diagnosisSelected = data.precription.diagnosisSelected
        // this.tempMedicationArray = data.precription.tempMedicationArray
        // this.itemsfinding = data.precription.itemsfinding
        // this.itemsymptoms = data.precription.itemsymptoms
        // this.itemsdiagnosis = data.precription.itemsdiagnosis
        // this.treatmentStatus = data.precription.treatmentStatus
        // this.investigationStatus = data.precription.investigationStatus
        // this.suregeryOptionsTop = data.precription.suregeryOptionsTop
        // this.suregeryOptions = data.precription.suregeryOptions
        // this.inputBox = data.precription.inputBox
        // this.medication = data.precription.medication
        // this.medicationStatus = data.precription.medicationStatus
        // this.medicationTabArray = data.precription.medicationTabArray
        // this.medicationCapArray = data.precription.medicationCapArray
        // this.medicationSypArray = data.precription.medicationSypArray
        // this.medicationSuspArray = data.precription.medicationSuspArray
        // this.medicationEmulsnArray = data.precription.medicationEmulsnArray
        // this.medicationInjArray = data.precription.medicationInjArray
        // this.medicationCreamArray = data.precription.medicationCreamArray
        // this.medicationGelArray = data.precription.medicationGelArray
        // this.medicationDropsArray = data.precription.medicationDropsArray
        // this.medicationPowderArray = data.precription.medicationPowderArray
        // this.medicationAerosolsArray = data.precription.medicationAerosolsArray
        // this.medicationMouthWashArray = data.precription.medicationMouthWashArray
        // this.medicationSolutionArray = data.precription.medicationSolutionArray
        // this.medicationLotionArray = data.precription.medicationLotionArray
        // this.medicationOintmentArray = data.precription.medicationOintmentArray
        // this.symptomsComplete = data.precription.symptomsComplete
        // this.diagnosisComplete = data.precription.diagnosisComplete
        // this.treatmentComplete = data.precription.treatmentComplete
        // this.treatmentArray = data.precription.treatmentArray
        // this.investigationIndicatorComplete = data.precription.investigationIndicatorComplete
        // this.investigationArray = data.precription.investigationArray
        // this.surgeryComplete = data.precription.surgeryComplete
        // this.surgerySelectedArray = data.precription.surgerySelectedArray
        // this.instructionsComplete = data.precription.instructionsComplete
        // this.instructionsSelected = data.precription.instructionsSelected
        // this.medicationComplete = data.precription.medicationComplete
        // this.currentVaccinationComplete = data.precription.currentVaccinationComplete
        // this.finalCurrentVaccinationArray = data.precription.finalCurrentVaccinationArray
        // this.dueVaccinationComplete = data.precription.dueVaccinationComplete
        // this.finalDueVaccinationArray = data.precription.finalDueVaccinationArray
        // this.eyePresComplete = data.precription.eyePresComplete
        // this.finalRightOD = data.precription.finalRightOD
        // this.finalLeftOD = data.precription.finalLeftOD
        // this.followDaysComplete = data.precription.followDaysComplete
        // this.finalfollowUpDays = data.precription.finalfollowUpDays
        // this.followUpDate.setDate(new Date(data.createdAt).getDate() + this.finalfollowUpDays);
        // console.log(this.followUpDate)
        // var options = { month: 'short' };
        // this.followUpMonth = this.followUpDate.toLocaleDateString("en-IN", options);
        // this.followUpDay = this.followUpDate.getDate()
        // this.followUpYear = this.followUpDate.getFullYear()
        // this.minutes = data.precription.minutes
        // this.seconds = data.precription.seconds
        // this.languageOptionSelected = data.precription.languageOptionSelected
        $("#previewModalNew").modal("show");
        // }else{                
        //     $("#uploadedPrescriptionModal").modal("show");
        // }
        //}
    };
    HeaderThreeLayoutComponent.prototype.checkOptionOfPad = function (value) {
        if (!this.dataDoctors.pad_customization_options || this.dataDoctors.pad_customization_options.length < 1) {
            return true;
        }
        else {
            for (var i = 0; i < this.dataDoctors.pad_customization_options.length; i++) {
                if (this.dataDoctors.pad_customization_options[i].value == value) {
                    if (this.dataDoctors.pad_customization_options[i].status == true) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
    };
    HeaderThreeLayoutComponent.prototype.getFooterText = function () {
        if (!this.dataDoctors[0].pad_customization_options || this.dataDoctors[0].pad_customization_options.length < 1) {
            return "Not for Medico-Legal Purpose";
        }
        else {
            return this.dataDoctors[0].pad_customization_options[12].text;
        }
    };
    HeaderThreeLayoutComponent.prototype.getHeaderText = function () {
        if (!this.dataDoctors[0].pad_customization_options || this.dataDoctors[0].pad_customization_options.length < 1) {
            return "PLEASE TAKE PRIOR APPOINTMENT";
        }
        else {
            return this.dataDoctors[0].pad_customization_options[8].text;
        }
    };
    HeaderThreeLayoutComponent.prototype.setAllShiftsForPreview = function () {
        console.log(this.doctorArrayObject);
        this.allShifts = [];
        var Mon = false;
        var Tue = false;
        var Wed = false;
        var Thu = false;
        var Fri = false;
        var Sat = false;
        var Sun = false;
        for (var i = 0; i < this.doctorArrayObject.consultation_schedule.length; i++) {
            var string = '';
            if (this.doctorArrayObject.consultation_schedule[i].Monday == true) {
                Mon = true;
                if (string == '') {
                    string = "Mon";
                }
                else {
                    string = string + ", " + "Mon";
                }
            }
            if (this.doctorArrayObject.consultation_schedule[i].Tuesday == true) {
                Tue = true;
                if (string == '') {
                    string = "Tue";
                }
                else {
                    string = string + ", " + "Tue";
                }
            }
            if (this.doctorArrayObject.consultation_schedule[i].Wednesday == true) {
                Wed = true;
                if (string == '') {
                    string = "Wed";
                }
                else {
                    string = string + ", " + "Wed";
                }
            }
            if (this.doctorArrayObject.consultation_schedule[i].Thursday == true) {
                Thu = true;
                if (string == '') {
                    string = "Thu";
                }
                else {
                    string = string + ", " + "Thu";
                }
            }
            if (this.doctorArrayObject.consultation_schedule[i].Friday == true) {
                Fri = true;
                if (string == '') {
                    string = "Fri";
                }
                else {
                    string = string + ", " + "Fri";
                }
            }
            if (this.doctorArrayObject.consultation_schedule[i].Saturday == true) {
                Sat = true;
                if (string == '') {
                    string = "Sat";
                }
                else {
                    string = string + ", " + "Sat";
                }
            }
            if (this.doctorArrayObject.consultation_schedule[i].Sunday == true) {
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
                shifts: this.doctorArrayObject.consultation_schedule[i].shifts
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
    HeaderThreeLayoutComponent.prototype.createPdf = function () {
        $('#previewModalPdfNew').printThis({
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
    HeaderThreeLayoutComponent.prototype.getOpdHolidays = function (id) {
        var _this = this;
        this.getOPDHOliday = [];
        var ob = { 'doctor_id': id };
        this.userService.GetOpdHoliday(ob).subscribe(function (data) {
            console.log(data);
            var arr = [];
            _this.getOPDHOlidayCopy = data.data;
            for (var i = 0; i < data.data.length; i++) {
                console.log(_this.appointmentDoctorCopy);
                //if(data.data[i].doctor_id == id){
                arr.push(new Date(data.data[i].date).toJSON().toString().substr(0, 10));
                //}
            }
            for (var i = 0; i < arr.length; i++) {
                if (data.data[i].date) {
                    _this.getOPDHOliday.push({
                        start: arr[i],
                        title: 'Closed',
                        // color: '#FFB347'
                        textColor: 'grey'
                        //time : data.data[i].time
                    });
                }
            }
            console.log(arr);
            console.log(_this.getOPDHOliday);
            if (data.response) {
                _this.toastr.success(data.message, 'Success');
            }
            else {
                _this.toastr.error(data.message, 'Error');
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeaderThreeLayoutComponent.prototype.closeAppointment = function () {
        this.ngOnInit();
    };
    HeaderThreeLayoutComponent.prototype.updateDropdown = function () {
        /*   var $s=$('#sys');
         var option = $s.find("option:contains('120')");
          var optionTop = option.offset().top
          var selectTop = $s.offset().top;
          $s.scrollTop($s.scrollTop() + (optionTop - selectTop));
        //  alert($s.scrollTop() + (optionTop - selectTop));
         option.prop('selected', true) */
        // $('#sys').animate({ scrollTop: -567 });
        var h = "<option value=''>SYS";
        for (var i = 70; i < 190; i++)
            h += '<option value=' + i + '>' + i;
        $('#sys').html(h).val(120).scrollTop(567);
    };
    HeaderThreeLayoutComponent.prototype.checkHoliday = function (currentDoc) {
        console.log(currentDoc);
        this.doctorScheduleHolidays = [];
        for (var i = 0; i < currentDoc.consultation_schedule.length; i++) {
            if (!currentDoc.consultation_schedule[i].Sunday) {
                this.doctorScheduleHolidays.push('Sunday');
            }
            if (!currentDoc.consultation_schedule[i].Monday) {
                this.doctorScheduleHolidays.push('Monday');
            }
            if (!currentDoc.consultation_schedule[i].Tuesday) {
                this.doctorScheduleHolidays.push('Tuesday');
            }
            if (!currentDoc.consultation_schedule[i].Wednesday) {
                this.doctorScheduleHolidays.push('Wednesday');
            }
            if (!currentDoc.consultation_schedule[i].Friday) {
                this.doctorScheduleHolidays.push('Friday');
            }
            if (!currentDoc.consultation_schedule[i].Saturday) {
                this.doctorScheduleHolidays.push('Saturday');
            }
        }
        var date = new Date();
        this.getDaysInMonth(date.getMonth(), date.getFullYear());
        var arr = [];
        var newDate = new Date();
        //console.log(this.getAllDates.setDate(newDate.getDate()+1))
        for (var i = 0; i < this.doctorScheduleHolidays.length; i++) {
            for (var j = 0; j < this.getAllDates.length; j++) {
                if (this.doctorScheduleHolidays[i] == this.datePipe.transform(this.getAllDates[j], 'EEEE')) {
                    //console.log(this.getAllDates[j].setDate(1))
                    arr.push({
                        start: this.datePipe.transform(this.getAllDates[j], 'yyyy-MM-dd'),
                        title: 'Closed',
                        id: 1,
                        // color: '#FFB347'
                        textColor: 'grey'
                    });
                }
            }
        }
        // console.log(arr2)
        Array.prototype.push.apply(this.getOPDHOliday, arr);
        //this.showListOfHoliday.concat(arr)
        console.log(this.getOPDHOliday);
        //console.log(this.docHoliday)
    };
    HeaderThreeLayoutComponent.prototype.getDaysInMonth = function (month, year) {
        var date = new Date(year, month, 1);
        this.getAllDates = [];
        while (date.getMonth() === month) {
            this.getAllDates.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return this.getAllDates;
    };
    HeaderThreeLayoutComponent.prototype.deleteAppointment = function (data) {
        var _this = this;
        var ob = {
            date: data
        };
        console.log(ob);
        this.userService.DeleteAppointmentViaHoliday(ob).subscribe(function (data) {
            _this.ngOnInit();
        }, function (err) {
            console.log(err);
        });
    };
    /********** Updated Functions *************/
    HeaderThreeLayoutComponent.prototype.hide = function () {
        this.numberWritten = false;
        this.registrationData.name = "";
    };
    HeaderThreeLayoutComponent.prototype.fetchPatientAppointments = function (data) {
        var _this = this;
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
        this.digitalTrue = false;
        this.registrationData.age_param = "Years";
        if (this.registrationData.phone.length < 10) {
            this.toastr.warning("Please fill atleast 10 digits number", "Warning");
            return;
        }
        if (!isNaN(data)) {
            data = data.trim();
            if (data.length > 0) {
                var ob = {
                    mobile: data,
                    smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id
                };
                this.userService.FindPatientAppointmentByPhone(ob).subscribe(function (dataReceived) {
                    console.log(dataReceived);
                    if (dataReceived.response == true) {
                        if (dataReceived.data.length == 1) {
                            _this.toastr.success(dataReceived.message, "Success");
                            _this.patientListReg = [];
                            _this.patientListReg1 = [];
                            _this.registrationData.name = dataReceived.data[0].patient_id.name;
                            _this.registrationData.type = "Appointment";
                            _this.registrationData.appointment_detail = dataReceived.data[0];
                            _this.registrationData.gender = dataReceived.data[0].patient_id.gender;
                            if (_this.registrationData.gender) {
                                _this.genderClass = "black-class";
                            }
                            _this.consultationDoctor = dataReceived.data[0].doctor_id;
                            _this.GetPatientLastPrescription();
                            _this.checkWhichFieldsToShow(_this.consultationDoctor);
                            _this.getPatientInfo(_this.registrationData);
                            _this.consultationType = [
                                'Appointment'
                            ];
                            _this.registrationData.type = "Appointment";
                        }
                        else {
                            _this.getPatientInfo(_this.registrationData);
                            _this.toastr.warning("Multiple Appointments Found On this Number. Please choose patient name to continue", "Warning");
                            return;
                        }
                    }
                    else {
                        if (dataReceived.message == 'No appointment found for today') {
                            _this.toastr.success(dataReceived.message, "Success");
                            _this.consultationType = [
                                'Walk-in',
                                'Emergency'
                            ];
                            _this.registrationData.type = "Walk-in";
                            var object = void 0;
                            object = {};
                            var doctor = _this.dataDoctors.filter(function (d) { return d._id.toString() == _this.consultationDoctor.toString(); });
                            if (doctor[0]) {
                                object.clinic_id = doctor[0].doctm_clinic_id;
                            }
                            object.mobile = data;
                            _this.getPatientInfo(_this.registrationData);
                            _this.GetPatientLastPrescription();
                        }
                        else {
                            _this.toastr.error(dataReceived.message, "Error");
                        }
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            this.toastr.warning("Invalid phone number", "Warning");
        }
    };
    HeaderThreeLayoutComponent.prototype.getPatientList = function () {
        var _this = this;
        this.patientListReg = [];
        this.patientListReg1 = [];
        var object;
        object = {};
        var doctor = this.dataDoctors.filter(function (d) { return d._id.toString() == _this.consultationDoctor.toString(); });
        if (doctor[0]) {
            object.clinic_id = doctor[0].doctm_clinic_id;
        }
        else {
            object.clinic_id = this.clinicId;
        }
        object.mobile = this.registrationData.phone;
        this.userService.GetPatientDetail(object).subscribe(function (data2) {
            if (data2.response == true) {
                if (data2.data.length > 1) {
                    _this.patientListReg = data2.data;
                    _this.patientListReg1 = data2.data;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_10_ng_fullcalendar__["a" /* CalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10_ng_fullcalendar__["a" /* CalendarComponent */])
    ], HeaderThreeLayoutComponent.prototype, "ucCalendar", void 0);
    HeaderThreeLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-header-three-layout',
            template: __webpack_require__("../../../../../src/app/header-three-layout/header-three-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-three-layout/header-three-layout.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_9__providers_mission_service__["a" /* MissionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_mission_service__["a" /* MissionService */], __WEBPACK_IMPORTED_MODULE_0__theme_services__["b" /* BaThemeSpinner */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_11__angular_common__["DatePipe"]])
    ], HeaderThreeLayoutComponent);
    return HeaderThreeLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-three-layout/header-three-layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderThreeLayoutModule", function() { return HeaderThreeLayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_three_layout_routing_module__ = __webpack_require__("../../../../../src/app/header-three-layout/header-three-layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_three_layout_component__ = __webpack_require__("../../../../../src/app/header-three-layout/header-three-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_headerthree_headerthree_component__ = __webpack_require__("../../../../../src/app/shared/headerthree/headerthree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_google_places_autocomplete__ = __webpack_require__("../../../../ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_google_places_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_google_places_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_webcam__ = __webpack_require__("../../../../ngx-webcam/ngx-webcam.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng_fullcalendar__ = __webpack_require__("../../../../ng-fullcalendar/ng-fullcalendar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var HeaderThreeLayoutModule = /** @class */ (function () {
    function HeaderThreeLayoutModule() {
    }
    HeaderThreeLayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__header_three_layout_routing_module__["a" /* HeaderThreeLayoutRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_google_places_autocomplete__["GooglePlaceModule"],
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY',
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["h" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_webcam__["a" /* WebcamModule */],
                __WEBPACK_IMPORTED_MODULE_13_ng_fullcalendar__["b" /* FullCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__header_three_layout_component__["a" /* HeaderThreeLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_headerthree_headerthree_component__["a" /* HeaderthreeComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__theme_services__["b" /* BaThemeSpinner */], __WEBPACK_IMPORTED_MODULE_8__providers_user_service__["a" /* UserService */]]
        })
    ], HeaderThreeLayoutModule);
    return HeaderThreeLayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/headerthree/headerthree.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .modal-title{\n  \tdisplay: inline-block;\n  }\n  .cstm-modal-body{\n    float: left;\n    width: 100%;\n  }\n  .connected-doctor-name{\n   \tbackground-color: #f6f6f6;\n    border: 1px solid #81a04d!important;\n    padding: 3px 10px;\n    font-size: 16px;\n    font-weight: normal;\n    border-radius: 5px;\n    -webkit-box-shadow: 0 2px 5px 0px rgba(0,0,0, 0.2);\n            box-shadow: 0 2px 5px 0px rgba(0,0,0, 0.2);\n    margin:4px 8px 4px 4px;\n}\n  .cstm-modal-body{\n\tpadding: 20px 0;\n}\n  .remove{\n\tbackground-color: #f6f6f6;\n  border: 1px solid #01b0f0;\n  padding: 3px;\n  color: #000;\n  width: 100%;\n  min-width: 100px;\n  font-weight: normal;\n}\n  .connected-doctors{\n  float: left;\n  width: 100%;\n}\n  .add{\n  background-color: #fbd4b4;\n  border: 1px solid #fcb47a;\n  color: #000;\n  margin-top: 6px;\n}\n  .add.active{\n  background-color: #ffff00;\n}\n  .add-new-feilds{\n  float: left;\nvisibility: hidden;\n  width: 100%;\n  max-height: 225px;\n}\n  .add-new-feilds.show-div{\n  visibility: visible;\n}\n  .connected-doctors-modal{\n  width: 700px!important;\n  right: 20%!important;\n}\n  .dr-head\n{\n  width:45%;\n  margin: auto;\n}\n  .dr-head label\n{\n  /*width: 100%;*/\n  text-align: center!important;\n  font-size:16px;\n  /*padding-left: 20px;*/\n}\n  .doctor-detail thead\n{\n\n}\n  .doctor-detail tr td  \n{ \n  padding: 1px 6px;\n}\n  .doctor-detail tr td p\n{\n    border: 1px solid #81a04d!important;\n    border-radius: 5px;\n    width: 100%;\n    padding: 5px;\n \n}\n  .doctor-detail tr th\n{\n  font-size: 16px;\n  padding-left: 10px;\n  padding-bottom: 10px;\n}\n  .con-dr\n{\n  width:225px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/headerthree/headerthree.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"headersidebar-wrap\" [ngClass]=\"nosidebar\" >\n\t<div class=\"dashboard-header\">\n\t\t<div class=\"dashboard-header-one\">\n\t\t\t<div class=\"close-dashboard-sidebar\">\n\t\t        <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarclose()\" >\n\t\t            <span class=\"icon-bar\"></span>\n\t\t            <span class=\"icon-bar\"></span>\n\t\t            <span class=\"icon-bar\"></span>\n\t\t        </button>\n\t\t    </div>\n\t\t    <div>\n\t\t\t    <div *ngIf=\"!showDashboardButton\">\n\t\t\t\t    <div class=\"welcomename\" *ngIf=\"smartAssistantData.doctorsRegisteredForSmartClinic.length>0\"> \n\t\t\t\t     Smart Assistant - {{smartAssistantData.doctorsRegisteredForSmartClinic[0].clinic_details.clinic_name}}\n\t\t\t\t    </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"welcomename\" *ngIf=\"showDashboardButton\">\n\t\t\t\tAppointment List\n\t\t\t</div>\n\t\t\t</div>\n\n\t\t    <div class=\"dashboard-signout\">\n\t\t    \t<a routerLink=\"/\" (click)=\"signOut()\"> Sign-out </a>\n\t\t    </div>\n\t\t</div>\n\n\t\t<div class=\"dashboard-header-pthree\" *ngIf=\"!showDashboardButton\">\n\t\t\n\t\t<div class=\"col-lg-2\">\n\t\t\t<div class=\"dashboard-header-logo\" routerLink=\"/header-three-layout/smartassistant\">\n\t\t\t\t<img src=\"./assets/imgs/logoDoctm.png\" class=\"img-responsive\" />\n\t\t\t\t<div class=\"dshbrd-btn\" *ngIf=\"showDashboardButton\">\n\t\t\t\t\t<button class=\"btn btn-custom\" routerLink=\"/header-three-layout/smartassistant\"> Dashboard </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-2\" style=\"font-size:22pt\">\n\t\t{{currentDate}}\n\t\t</div>\n\t\t<div class=\"col-lg-2\">\n\t\t\t<div class=\"dashboard-btns new-reg\" *ngIf=\"!showDashboardButton\">\n\t\t\t\t<button class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#registrationForm\">\n\t\t\t\t\t<i class=\"fa fa-plus-square\"></i>\n\t\t\t\t\t<div> Registration </div>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-2\">\n\t\t\t<div class=\"dashboard-btns\" *ngIf=\"!showDashboardButton\">\n\t\t\t\t<button class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#appointmentForm\">\n\t\t\t\t\t<i class=\"fa fa-plus-square\"></i>\n\t\t\t\t\t<div> APPOINTMENT </div>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-2\">\n\t\t\t\t<div class=\"dashboard-btns app-list\" *ngIf=\"!showDashboardButton\">\n\t\t\t\t<button class=\"btn btn-custom\" routerLink=\"/header-three-layout/smartassistantappointmentList\">\n\t\t\t\t\tAPPOINTMENT\n\t\t\t\t\t<div> LIST </div>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\t\n\t\t</div>\n\t</div>\n\t<div class=\"page-sidebar-wrapper\">\n\t    <div id=\"bs-example-navbar-collapse-1\" class=\"dashbrd-sidbar navbar-collapse p-0\" >\n\t        <ul class=\"dshbrd-sidebar-menu m-0 p-0\" type=\"none\">\n\t            <li class=\"sidebar-item dropdown sidebar-dropdown\">\n\t\t\t        <a class=\"sidebar-link dropdown-toggle\" (click)=\"openDropdown()\" href=\"javascript:void(0)\">\n\t\t\t        \t<span class=\"title\">\n\t\t\t        \t\tSettings <span class=\"caret\"></span>\n\t\t\t        \t</span>\n\t\t\t        </a>\n\t\t        \t<ul class=\"dropdown-menu\" [ngClass]=\"dropdownMenu\">\n\t\t\t\t\t\t<li class=\"sidebar-item\"><a href=\"\" data-dismiss=\"modal\" data-target=\"#personalDetailModal\" data-toggle=\"modal\" class=\"sidebar-link\"><span class=\"title\"> Personal details </span> </a></li>\n\t\t\t\t\t\t<li class=\"sidebar-item\"><a href=\"\" data-dismiss=\"modal\" data-target=\"#connectedDoctorModal\" data-toggle=\"modal\" class=\"sidebar-link\"><span class=\"title\"> Connected Doctors </span> </a></li>\n\t\t\t\t\t</ul>\n\t\t\t    </li>\n\t        </ul>\n\t    </div>\n\t</div>\n\n</div>\n\n<!-- Modal  -->\n<div class=\"modal fade cus-modal\" id=\"personalDetailModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  \t<div class=\"modal-dialog\" role=\"document\">\n    \t<div class=\"modal-content\">\n    \t\t<div class=\"modal-header\">\n\t    \t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t                <span aria-hidden=\"true\">×</span>\n\t            </button>\n\t            <div class=\"row\">\n\t    \t\t\t<div class=\"regis-modal-body\">\n\t    \t\t\t\t<form [formGroup]=\"form\">\n\t        \t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-4 col-sm-4 col-xs-12\"> Mobile Number </label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-8 col-sm-8 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"smartAssiMob\" [formControl]=\"form.controls['phone']\"/>\n                                    <p style=\"color: #FF0000\" *ngIf=\"!form.controls['phone'].valid  && (form.controls['phone'].touched)\">Invalid mobile number !!!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-4 col-sm-4 col-xs-12\"> Assistant Name  </label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-8 col-sm-8 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" [(ngModel)]=\"smartAssiName\" [formControl]=\"form.controls['name']\" />\n\t                                <p style=\"color: #FF0000\" *ngIf=\"!form.controls['name'].valid  && (form.controls['name'].touched)\">Invalid name !!!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<div class=\"form-group col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12 text-center\">\n\t\t\t\t\t\t\t<button class=\"btn btn-custom\" type=\"button\" (click)=\"updateSmartAssistant()\" [disabled]=\"(!form.valid)\"> SAVE </button>\n\t\t\t\t\t\t</div>\n\t        \t\t</div>\n\t        \t</div>\n\t        </div>\n\t\t</div>\n  \t</div>\n</div>\n<div class=\"modal fade cus-modal\" id=\"connectedDoctorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  \t<div class=\"modal-dialog\" role=\"document\">\n    \t<div class=\"modal-content connected-doctors-modal\">\n    \t\t<div class=\"modal-header\">\n    \t\t\t<h4 class=\"modal-title\"> Connected Doctors  </h4>\n\t    \t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t                <span aria-hidden=\"true\">×</span>\n\t            </button>\n    \t\t\t<div class=\"cstm-modal-body\">\n    \t\t\t\t<div class=\"connected-doctors\">\n\t\t\t\t\t\t<div class=\"doctor-detail\">\n\t\t\t\t\t\t\t<table class=\"\" width=\"100%\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th class=\"con-dr\">Doctor Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Doctor ID</th>\n\t\t\t\t\t\t\t\t\t\t<th>Avg. consultation time/patient</th>\n\t\t\t\t\t\t\t\t\t\t<th>Appointment Waiting time</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let doctor of doctorsRegisteredForSmartClinic; let i=index\">\n\t\t\t\t\t\t\t\t\t\t<td><p>{{i+1}}. Dr. {{doctor.first_name}}</p></td>\n\t\t\t\t\t\t\t\t\t\t<td><p>{{doctor.doctm_id}}</p></td>\n\t\t\t\t\t\t\t\t\t\t<td><p>{{doctor.avgConsTime}}</p></td>\n\t\t\t\t\t\t\t\t\t\t<td><p>{{doctor.waitingTime}}</p></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-right\" *ngIf=\"doctorsRegisteredForSmartClinic && doctorsOfSameClinic && doctorsRegisteredForSmartClinic.length<5 && doctorsOfSameClinic.length>0\">\n\t\t\t\t\t\t<button [ngClass]=\"addViewDiv ? 'btn btn-custom reg-btn add active':'btn btn-custom reg-btn add'\" type=\"button\" (click)=\"addViewDivClicked()\">ADD NEW</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 text-right\">\n\t\t\t\t\t\t<div class=\"add-new-feilds{{getAddDoctorClass()}}\">\n\t\t\t\t\t\t\t<div class=\"form-group col-md-8 col-md-offset-2 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<select class=\"form-control txtfield\" [(ngModel)]=\"doctorToAdd\" [ngModelOptions]=\"{standalone: true}\">\n\t        \t\t\t\t\t<option selected=\"\" disabled=\"\" value=\"\"> Select clinic doctor </option>\n\t        \t\t\t\t\t<option value=\"{{doctor._id}}\" *ngFor=\"let doctor of doctorsOfSameClinic\" value=\"\">Dr. {{doctor.first_name}}</option>\n\t        \t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-8 col-md-offset-2 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"doctm Doctor id\"  [(ngModel)]=\"doctorItemId\" [ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12 text-center\">\n\t\t\t\t\t\t\t<button class=\"btn btn-custom\" type=\"button\" *ngIf=\"addViewDiv\" (click)=\"addDcotorBySmartAssistant(doctorItemId)\">ADD</button>\n\t\t\t\t\t\t\t<button class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" type=\"button\" *ngIf=\"!addViewDiv\">OK</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n        \t\t</div>\n\t        </div>\n\t\t</div>\n  \t</div>\n</div>\n<!-- model end -->"

/***/ }),

/***/ "../../../../../src/app/shared/headerthree/headerthree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderthreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderthreeComponent = /** @class */ (function () {
    function HeaderthreeComponent(formBuilder, router, userService, toastr) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
        this.form = this.formBuilder.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'phone': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["n" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["n" /* Validators */].maxLength(10)
                ])]
        });
        this.showDashboardButton = false;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                if ((event.url == '/header-three-layout/smartassistant' && '/header-three-layout/smartassistantappointmentList')) {
                    _this.showDashboardButton = false;
                }
                else {
                    _this.showDashboardButton = true;
                }
                // if(event.url.includes('/header-three-layout/smartassistantappointmentList')){
                //       this.headertitle = "Appointment List"
                //       this.hideElement = 'none';
                //       this.showDashboardButton = false
                //       // this.showHome = true
                //   }
            }
        });
        var today = new Date();
        var options = { month: 'short' };
        this.month = today.toLocaleDateString("en-IN", options);
        this.day = new Date().getDate();
        this.year = new Date().getFullYear();
        this.currentDate = this.month + ' ' + this.day + ', ' + this.year;
    }
    HeaderthreeComponent.prototype.ngOnInit = function () {
        this.nosidebar = 'no-sidebar';
        $('[data-toggle="tooltip"]').tooltip();
        this.socket = __WEBPACK_IMPORTED_MODULE_6_socket_io_client__(__WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__["a" /* environment */].socket);
        this.addViewDiv = false;
        this.smartAssistantData = JSON.parse(localStorage['smartAssistantDetails']);
        console.log(this.smartAssistantData);
        this.GetSmartAssistantDataAfterLogin();
        this.doctorToAdd = "";
    };
    HeaderthreeComponent.prototype.openDropdown = function () {
        if (this.dropdownMenu == 'active') {
            this.dropdownMenu = '';
        }
        else {
            this.dropdownMenu = 'active';
        }
    };
    HeaderthreeComponent.prototype.sidebarclose = function () {
        if (this.nosidebar == 'no-sidebar') {
            this.nosidebar = '';
        }
        else {
            this.nosidebar = 'no-sidebar';
        }
    };
    HeaderthreeComponent.prototype.signOut = function () {
        this.socket.emit('logout', { 'doctor_id': this.smartAssistantData._id });
        // localStorage.clear();
        localStorage.removeItem(localStorage['smartAssistantDetails']);
        localStorage.removeItem('isLoggedinSmartAssistant');
        this.router.navigate(['/']);
    };
    HeaderthreeComponent.prototype.addViewDivClicked = function () {
        this.addViewDiv = !this.addViewDiv;
    };
    HeaderthreeComponent.prototype.getAddDoctorClass = function () {
        if (this.addViewDiv) {
            return 'show-div';
        }
        else {
            return '';
        }
    };
    HeaderthreeComponent.prototype.GetSmartAssistantDataAfterLogin = function () {
        var _this = this;
        var object = {
            smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id
        };
        this.userService.GetSmartAssistantDataAfterLogin(object).subscribe(function (data) {
            console.log(data);
            var dataToStore = {
                dataSmartAssistant: data.dataSmartAssistant,
                doctorsRegisteredForSmartClinic: data.doctorsRegisteredForSmartClinic,
                doctorsOfSameClinic: data.doctorsOfSameClinic
            };
            localStorage['smartAssistantDetails'] = JSON.stringify(dataToStore);
            _this.doctorsOfSameClinic = data.doctorsOfSameClinic;
            _this.doctorsRegisteredForSmartClinic = data.doctorsRegisteredForSmartClinic;
            _this.smartAssiMob = data.dataSmartAssistant.phone;
            _this.smartAssiName = data.dataSmartAssistant.name;
        }, function (err) {
            console.log(err);
        });
    };
    HeaderthreeComponent.prototype.addDcotorBySmartAssistant = function (data) {
        var _this = this;
        if (data == null || data.trim().length < 11 || data.trim().length > 11 || this.doctorToAdd == "") {
            this.toastr.error("Invalid doctor details", "Error");
        }
        else {
            var object = {
                smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id,
                doctor_id: this.doctorToAdd,
                doctorItemId: this.doctorItemId
            };
            this.userService.AddDcotorBySmartAssistant(object).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
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
    HeaderthreeComponent.prototype.updateSmartAssistant = function () {
        var _this = this;
        var object = {
            smart_assistant_id: this.smartAssistantData.dataSmartAssistant.id,
            smartAssiMob: this.smartAssiMob,
            smartAssiName: this.smartAssiName
        };
        this.userService.UpdateSmartAssistant(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                $("#personalDetailModal").modal("hide");
                _this.toastr.success(data.message, "Success");
                _this.ngOnInit();
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeaderthreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-headerthree',
            template: __webpack_require__("../../../../../src/app/shared/headerthree/headerthree.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/headerthree/headerthree.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], HeaderthreeComponent);
    return HeaderthreeComponent;
}());



/***/ })

});
//# sourceMappingURL=header-three-layout.module.chunk.js.map