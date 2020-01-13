webpackJsonp(["dashboard-ongoprescription.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-ongoprescription/dashboard-ongoprescription-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardOngoprescriptionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_ongoprescription_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-ongoprescription/dashboard-ongoprescription.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_ongoprescription_component__["a" /* DashboardOngoprescriptionComponent */]
    }
];
var DashboardOngoprescriptionRoutingModule = /** @class */ (function () {
    function DashboardOngoprescriptionRoutingModule() {
    }
    DashboardOngoprescriptionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardOngoprescriptionRoutingModule);
    return DashboardOngoprescriptionRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-ongoprescription/dashboard-ongoprescription.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-group-addon{\r\n   background-color: #fff;\r\n   border: 1px solid rgba(56, 94, 138, 1);\r\n   border-radius: 6px 0 0 6px;\r\n   position: absolute;\r\n   height: 34px;\r\n   border-radius: 5px!important;\r\n   border-bottom-right-radius: 0px!important;\r\n   border-top-right-radius: 0px!important;\r\n   width: 40px;\r\n   padding: 0px;\r\n   line-height: 2.4;\r\n   z-index: 9;\r\n}\r\n#field1{\r\npadding-left: 48px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-ongoprescription/dashboard-ongoprescription.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\t\t\n<div class=\"ongo-sec\">\n\n\t<div class=\"ongo-panel\">\n\t\t<!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t<h2 class=\"text-center\"> On-The-go Prescription </h2>\n\t\t</div> -->\n\n\t\t<form [formGroup]=\"stepOneForm\">\n\t\t\t<div class=\"ongo-form\">\n\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<label for=\"field1\" class=\"\"> Patient Mobile Number<sup>*</sup> </label>\n\t\t\t\t\t<span class=\"input-group-addon\">+91</span>\n\t\t\t\t\t<input id=\"field1\" type=\"text\" class=\"form-control txtfield\" name=\"\" maxLength=\"10\" required=\"\" [(ngModel)]=\"registrationData.phone\" [formControl]=\"stepOneForm.controls['phone']\" (blur)=\"findPatientAppointmentByPhone($event.target.value)\"/>\n\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepOneForm.controls['phone'].valid  && ( stepOneForm.controls['phone'].touched)\">Invalid phone number !!!</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<label for=\"field1\" class=\"\"> Patient Name<sup>*</sup> </label>\n\t\t\t\t\t<input  type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"registrationData.name\" [formControl]=\"stepOneForm.controls['name']\" [matAutocomplete]=\"autoPatNameReg\"/>\n\t\t\t\t\t<mat-autocomplete #autoPatNameReg=\"matAutocomplete\" class=\"mat-autocomplete-registration\">\n\t\t\t\t\t\t<mat-option *ngFor=\"let patient of patientListReg\" [value]=\"patient.name\">\n\t\t\t\t\t\t\t{{patient.name}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-autocomplete>\n\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepOneForm.controls['name'].valid  && ( stepOneForm.controls['name'].touched)\">Invalid name !!!</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<label for=\"field1\" class=\"\"> Patient Email </label>\n\t\t\t\t\t<input  type=\"text\" class=\"form-control txtfield\" name=\"\"  required=\"\" [(ngModel)]=\"registrationData.email\" [formControl]=\"stepOneForm.controls['email1']\"/>\n\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepOneForm.controls['email1'].valid  && ( stepOneForm.controls['email1'].touched)\">Invalid email !!!</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<label for=\"field1\" class=\"\"> Date of birth </label>\n\t\t\t\t\t<div class=\"cus-datetimepicker\">\n\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"registrationData.dob\" [formControl]=\"stepOneForm.controls['date']\" [settings]=\"settings\"></angular2-date-picker>\n\t\t\t\t\t\t<!-- <input [(ngModel)]=\"myDate\" ng2-datetime-picker date-only=\"true\" /> -->\n\t\t\t\t\t\t<!-- <input placeholder=\"Date of birth\" class=\"form-control txtfield\" [date-only]=\"true\" [close-on-select]=\"false\" [(ngModel)]=\"date\" ng2-datetime-picker date-format=\"MM/DD/YYYY HH:mm\" parse-format=\"YYYY-MM-DD HH:mm:ss\" /> -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepOneForm.controls['date'].valid  && ( stepOneForm.controls['date'].touched)\">Invalid date !!!</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<label for=\"field1\" class=\"\"> Gender<sup>*</sup> </label>\n\t\t\t\t\t<select class=\"form-control txtfield\" [(ngModel)]=\"registrationData.gender\" [formControl]=\"stepOneForm.controls['gender']\">\n\t\t\t\t\t\t<option value=\"\" disabled> Gender </option>\n\t\t\t\t\t\t<option value=\"Male\"> Male </option>\n\t\t\t\t\t\t<option value=\"Female\"> Female </option>\n\t\t\t\t\t\t<option value=\"Other\"> Other </option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepOneForm.controls['gender'].valid  && ( stepOneForm.controls['gender'].touched)\">Invalid gender !!!</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<button class=\"btn btn-custom full-width\" type=\"button\" [disabled]=\"!registrationData.gender || !registrationData.phone || !registrationData.name\" (click)=\"NewRegistration()\"> Prescribe </button>\n\t\t\t\t\t<button class=\"btn btn-custom btn-orange btn-block\" type=\"button\" routerLink=\"/header-two-layout/dashboard-prescription\" style=\"margin-top:15px;\"> Cancel </button>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</form>\n\n\t\t<!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-right\">\n\t\t\t\n\t\t</div> -->\n\n\t</div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-ongoprescription/dashboard-ongoprescription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardOngoprescriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardOngoprescriptionComponent = /** @class */ (function () {
    function DashboardOngoprescriptionComponent(formBuilder, toastr, userService, router) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy',
            defaultOpen: false
        };
    }
    DashboardOngoprescriptionComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        this.registrationData = {};
        this.registrationData.dob = new Date();
        this.registrationData.gender = "Select";
        this.stepOneForm = this.formBuilder.group({
            'phone': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(10)
                ])],
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z ]*')])],
            'date': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required])],
            'gender': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required])],
            'email1': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
        });
        this.registrationData.gender = '';
    };
    DashboardOngoprescriptionComponent.prototype.NewRegistration = function () {
        var _this = this;
        var newDate = new Date();
        newDate.setDate(newDate.getDate() + 1);
        if (this.registrationData.phone == "" || this.registrationData.phone == null || isNaN(this.registrationData.phone)) {
            this.toastr.warning("Invalid Phone", "Warning");
            return;
        }
        if (this.registrationData.name == "" || this.registrationData.name == null || !isNaN(this.registrationData.name)) {
            this.toastr.warning("Invalid Name", "Warning");
            return;
        }
        if ((this.registrationData.dob == "" || this.registrationData.dob == null)) {
            this.toastr.warning("Invalid date of birth", "Warning");
            return;
        }
        else if (new Date(this.registrationData.dob).setHours(0, 0, 0, 0) >= new Date(newDate).setHours(0, 0, 0, 0)) {
            console.log(new Date().getDate() + 1);
            this.toastr.warning("Invalid date of birth", "Warning");
            return;
        }
        if (this.registrationData.gender == "Select") {
            this.toastr.warning("Please select gender", "Warning");
            return;
        }
        var ob;
        ob = {};
        ob.registration = this.registrationData;
        ob.registration.type = 'Walk-in';
        ob.consultationDoctor = this.doctorData._id;
        ob.clinic_id = this.doctorData.doctm_clinic_id;
        ob.smart_assistant_id = undefined;
        if (this.doctorData.smart_assistant_id) {
            ob.smart_assistant_id = this.doctorData.smart_assistant_id;
        }
        ob.lat = 0;
        ob.lng = 0;
        ob.registration.email = this.registrationData.email;
        ob.registration.isOtg = true;
        console.log(ob);
        this.loading = true;
        this.userService.NewRegistration(ob).subscribe(function (data) {
            // this.loading = false
            console.log(data);
            if (data.response == true) {
                _this.toastr.success(data.message, "Success");
                localStorage['consultingPatient'] = JSON.stringify(data.data);
                _this.router.navigate(['header-two-layout/dashboard-prescription-pad']);
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardOngoprescriptionComponent.prototype.findPatientAppointmentByPhone = function (data) {
        var _this = this;
        if (data.length < 10) {
            this.toastr.warning("Please fill atleast 10 digits number", "Warning");
            return;
        }
        if (!isNaN(data)) {
            data = data.trim();
            if (data.length > 0) {
                var ob = void 0;
                ob = {};
                ob.mobile = data;
                ob.clinic_id = this.doctorData.doctm_clinic_id;
                this.patientListReg = [];
                this.userService.GetPatientDetail(ob).subscribe(function (dataReceived) {
                    console.log(dataReceived);
                    if (dataReceived.response == true) {
                        _this.registrationData.name = dataReceived.data[0].name;
                        _this.registrationData.dob = dataReceived.data[0].dob;
                        _this.registrationData.gender = dataReceived.data[0].gender;
                        _this.patientListReg = dataReceived.data;
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
    DashboardOngoprescriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-ongoprescription',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-ongoprescription/dashboard-ongoprescription.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-ongoprescription/dashboard-ongoprescription.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], DashboardOngoprescriptionComponent);
    return DashboardOngoprescriptionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-ongoprescription/dashboard-ongoprescription.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardOngoprescriptionModule", function() { return DashboardOngoprescriptionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_ongoprescription_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-ongoprescription/dashboard-ongoprescription-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_ongoprescription_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-ongoprescription/dashboard-ongoprescription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';






var DashboardOngoprescriptionModule = /** @class */ (function () {
    function DashboardOngoprescriptionModule() {
    }
    DashboardOngoprescriptionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                //Ng2DatetimePickerModule,
                __WEBPACK_IMPORTED_MODULE_2__dashboard_ongoprescription_routing_module__["a" /* DashboardOngoprescriptionRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_ongoprescription_component__["a" /* DashboardOngoprescriptionComponent */]]
        })
    ], DashboardOngoprescriptionModule);
    return DashboardOngoprescriptionModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-ongoprescription.module.chunk.js.map