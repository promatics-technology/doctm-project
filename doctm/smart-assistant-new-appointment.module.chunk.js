webpackJsonp(["smart-assistant-new-appointment.module"],{

/***/ "../../../../../src/app/header-three-layout/smart-assistant-new-appointment/smart-assistant-new-appointment-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartAssistantNewAppointmentRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smart_assistant_new_appointment_component__ = __webpack_require__("../../../../../src/app/header-three-layout/smart-assistant-new-appointment/smart-assistant-new-appointment.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__smart_assistant_new_appointment_component__["a" /* SmartAssistantNewAppointmentComponent */]
    }
];
var SmartAssistantNewAppointmentRoutingModule = /** @class */ (function () {
    function SmartAssistantNewAppointmentRoutingModule() {
    }
    SmartAssistantNewAppointmentRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], SmartAssistantNewAppointmentRoutingModule);
    return SmartAssistantNewAppointmentRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-three-layout/smart-assistant-new-appointment/smart-assistant-new-appointment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup-content-wrapper .signup-content {\r\n    margin-left: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-three-layout/smart-assistant-new-appointment/smart-assistant-new-appointment.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"signup-content-wrapper\">\n\t<div class=\"signup-content\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t<div class=\"signup-card\">\n\t\t\t\t\t<h3 class=\"signup-contentHead\"> SmartClinic New Appointment </h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12\">\n\t\t\t\t<div class=\"signup-card newform-margin\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n        \t\t\t\t\t<label> Select Consulting Doctor </label>\n        \t\t\t\t\t<select class=\"form-control txtfield\">\n        \t\t\t\t\t\t<option> Dr. John Doe </option>\n        \t\t\t\t\t\t<option> Dr. Fareed Khan </option>\n        \t\t\t\t\t\t<option> Dr. Jamshed </option>\n        \t\t\t\t\t</select>\n        \t\t\t\t</div>\n        \t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t<input id=\"field1\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" />\n\t\t\t\t\t\t\t\t<label for=\"field1\" class=\"labelFloat\"> Mobile Number </label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t<input id=\"field1\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" />\n\t\t\t        \t\t\t<label for=\"field1\" class=\"labelFloat\"> Patient Name </label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<label for=\"field1\" class=\"labelFloat\">Appointment Date & Time </label>\n\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"ProfileDetail\" [settings]=\"settings\"></angular2-date-picker>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t        \t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t        \t\t<div class=\"signup-card text-center\">\n\t\t\t        \t\t\t<button class=\"btn btn-custom\" type=\"submit\"> Done </button>\n\t\t\t        \t\t</div>\n\t\t\t        \t</div>\n\t\t    \t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n -->\n"

/***/ }),

/***/ "../../../../../src/app/header-three-layout/smart-assistant-new-appointment/smart-assistant-new-appointment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartAssistantNewAppointmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartAssistantNewAppointmentComponent = /** @class */ (function () {
    function SmartAssistantNewAppointmentComponent() {
        this.date = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: true,
            format: 'dd-MMM-yyyy hh:mm',
            defaultOpen: false
        };
    }
    SmartAssistantNewAppointmentComponent.prototype.ngOnInit = function () {
    };
    SmartAssistantNewAppointmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-smart-assistant-new-appointment',
            template: __webpack_require__("../../../../../src/app/header-three-layout/smart-assistant-new-appointment/smart-assistant-new-appointment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-three-layout/smart-assistant-new-appointment/smart-assistant-new-appointment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SmartAssistantNewAppointmentComponent);
    return SmartAssistantNewAppointmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-three-layout/smart-assistant-new-appointment/smart-assistant-new-appointment.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartAssistantNewAppointmentModule", function() { return SmartAssistantNewAppointmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smart_assistant_new_appointment_routing_module__ = __webpack_require__("../../../../../src/app/header-three-layout/smart-assistant-new-appointment/smart-assistant-new-appointment-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__smart_assistant_new_appointment_component__ = __webpack_require__("../../../../../src/app/header-three-layout/smart-assistant-new-appointment/smart-assistant-new-appointment.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SmartAssistantNewAppointmentModule = /** @class */ (function () {
    function SmartAssistantNewAppointmentModule() {
    }
    SmartAssistantNewAppointmentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__smart_assistant_new_appointment_routing_module__["a" /* SmartAssistantNewAppointmentRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__smart_assistant_new_appointment_component__["a" /* SmartAssistantNewAppointmentComponent */]]
        })
    ], SmartAssistantNewAppointmentModule);
    return SmartAssistantNewAppointmentModule;
}());



/***/ })

});
//# sourceMappingURL=smart-assistant-new-appointment.module.chunk.js.map