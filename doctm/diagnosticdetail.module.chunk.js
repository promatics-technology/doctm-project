webpackJsonp(["diagnosticdetail.module"],{

/***/ "../../../../../src/app/header-six-layout/diagnosticdetail/diagnosticdetail-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosticdetailRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diagnosticdetail_component__ = __webpack_require__("../../../../../src/app/header-six-layout/diagnosticdetail/diagnosticdetail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__diagnosticdetail_component__["a" /* DiagnosticdetailComponent */]
    }
];
var DiagnosticdetailRoutingModule = /** @class */ (function () {
    function DiagnosticdetailRoutingModule() {
    }
    DiagnosticdetailRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DiagnosticdetailRoutingModule);
    return DiagnosticdetailRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-six-layout/diagnosticdetail/diagnosticdetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cstm-input input{\r\n\tborder-radius: 6px;\r\n\tborder: 1px solid rgba(56, 94, 138, 1);\r\n\theight: 40px;\r\n}\r\n/* The container */\r\n.chk-diag {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size:14px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n/* Hide the browser's default checkbox */\r\n.chk-diag input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 0;\r\n  width: 0;\r\n}\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 18px;\r\n  width: 18px;\r\n  background-color: #eee;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.chk-diag:hover input ~ .checkmark {\r\n  background-color: #ccc;\r\n}\r\n/* When the checkbox is checked, add a blue background */\r\n.chk-diag input:checked ~ .checkmark {\r\n  background-color: #002060;\r\n}\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n/* Show the checkmark when checked */\r\n.chk-diag input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n/* Style the checkmark/indicator */\r\n.chk-diag .checkmark:after {\r\n  left: 7px;\r\n  top: 3px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n.pd-l{\r\n\tpadding-left: 20px;\r\n}\r\n.cstm-hdr-2{\r\n  margin-top: 5px!important;\r\n}\r\n.mg-top{\r\n    margin-top:5px;\r\n    display: block;\r\n    text-align: center;\r\n}\r\nh3.dt{\r\n    color:#416bb1;\r\n    text-align: center;\r\n}\r\nh3.dt > span{\r\n    color:#000;\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-six-layout/diagnosticdetail/diagnosticdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"cstm-hdr-2 container-fluid\">\n   <div class=\"row\">\n      <div  class=\"col-lg-2\">\n         <div class=\"dashboard-header-logo\">\n            <img class=\"img-responsive\" src=\"./assets/imgs/logoDoctm.png\" routerLink=\"/header-six-layout/dashboard-diagnostic\">\n         </div>\n         <div >\n            <div class=\"dshbrd-btn\">\n               <button  class=\"btn btn-custom\" routerLink=\"/header-six-layout/dashboard-diagnostic\" tabindex=\"0\"> Dashboard </button>\n            </div>\n         </div>\n      </div>\n      <div class=\"col-lg-9\">\n          <h3 class=\"dt\">\n                {{day}} {{month}} , {{year}}\n                <small>\n                    {{hoursIST}}:{{getMin()}}\n                </small>\n            </h3>\n      </div>\n   <div class=\"col-lg-8\">\n        <form [formGroup]=\"detailsForm\">\n            <div class=\"row cstm-hdr-2\">\n               <div class=\"col-lg-6\">\n                  <div class=\"form-group text-left cstm-input\">\n                     <label for=\"usr\" class=\"txt-theme\">Name of Diagnostic*</label>\n                     <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"New Fine Medical Store\" [(ngModel)]=\"reqData.diagnosticsName\" required=\"\"  [formControl]=\"detailsForm.controls['diagnosticsName']\">\n                  </div>\n                  <p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['diagnosticsName'].valid  && ( detailsForm.controls['diagnosticsName'].touched)\">Invalid Diagnostic Name !!!</p>\n               </div>\n               <div class=\"col-lg-6\">\n                  <div class=\"form-group text-left cstm-input\">\n                     <label for=\"pwd\" class=\"txt-theme\">Diagnostic Address*</label>\n                     <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"M4/32, Awadh Vihar Colony, Lucknow\" [(ngModel)]=\"reqData.address\" required=\"\"  [formControl]=\"detailsForm.controls['address']\">\n                  </div>\n                  <p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['address'].valid  && ( detailsForm.controls['address'].touched)\">Invalid Diagnostic Address !!!</p>\n               </div>\n               <div class=\"col-lg-6\">\n                  <div class=\"form-group text-left cstm-input\">\n                     <label for=\"pwd\" class=\"txt-theme\">Diagnostic Phone*</label>\n                     <input type=\"text\" class=\"form-control\" value=\"\" pattern=\"[0-9]+\" maxlength=\"10\" placeholder=\"XXXXXX2874\" [(ngModel)]=\"reqData.phone\" required=\"\"  [formControl]=\"detailsForm.controls['phone']\">\n                  </div>\n                  <p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['phone'].valid  && ( detailsForm.controls['phone'].touched)\">Invalid Diagnostic Phone !!!</p>\n               </div>\n               <div class=\"col-lg-6\">\n                  <div class=\"form-group text-left cstm-input\">\n                     <label for=\"pwd\" class=\"txt-theme\">License Number</label>\n                     <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"XXXXXX000029 /  XXXXXX000029\" [(ngModel)]=\"reqData.drugLicense\" [formControl]=\"detailsForm.controls['drugLicense']\">\n                  </div>\n               </div>\n               <div class=\"col-lg-12\">\n                  <div class=\"form-group text-left cstm-input\">\n                     <label for=\"pwd\" class=\"txt-theme\">Diagnostic services available</label>\n                     <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                           <div class=\"pd-l\">\n                              <!-- <li *ngFor=\"let option of clinicDiagnosticsList; let i = index;\">\n                                 <label class=\"checkbox-inline\">\n                                    <input type=\"checkbox\" name=\"\" [checked]=\"option.status\"/> {{option.name}}\n                                 </label>\n                              </li> -->\n                              <!-- <mat-checkbox *ngFor=\"let option of clinicDiagnosticsList; let i = index;\" [checked]=\"option.status\">{{option.name}}</mat-checkbox> -->\n                              <div class=\"row\">\n                                 \n                              \n                              <div *ngFor=\"let option of servicesArray; let i = index;\">\n                                 <div class=\"col-lg-4\">\n                                    <label class=\"chk-diag\">{{option.name}}\n                                    <input type=\"checkbox\" [checked]=\"option.status\" [(ngModel)]=\"option.status\" [ngModelOptions]=\"{standalone: true}\" >\n                                    <span class=\"checkmark\"></span>\n                                    </label>\n                                 </div>\n                              </div>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n               <div class=\"col-lg-12\">\n                  <div class=\"form-group text-left cstm-input\">\n                     <label for=\"pwd\" class=\"txt-theme\">GSTIN Number</label>\n                     <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"XXXXXX000029 /  XXXXXX000029\" [(ngModel)]=\"reqData.gstinNumber\"  [formControl]=\"detailsForm.controls['gstinNumber']\">\n                  </div>\n               </div>\n               <div class=\"col-lg-12\">\n                  <div class=\"form-group text-left cstm-input\">\n                     <label for=\"pwd\" class=\"txt-theme\">Note</label>\n                     <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"\" [(ngModel)]=\"reqData.conditionOne\" [formControl]=\"detailsForm.controls['conditionOne']\">\n                  </div>\n               </div>\n              <!--  <div class=\"col-lg-6\">\n                  <div class=\"form-group text-left cstm-input\">\n                     <label for=\"pwd\" class=\"txt-theme\">Term & Conditions 2</label>\n                     <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"\" [(ngModel)]=\"reqData.conditionOne\" [formControl]=\"detailsForm.controls['conditionOne']\">\n                  </div>\n               </div>\n               <div class=\"col-lg-6\">\n                  <div class=\"form-group text-left cstm-input\">\n                     <label for=\"pwd\" class=\"txt-theme\">Term & Conditions 3</label>\n                     <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"\" [(ngModel)]=\"reqData.conditionOne\" [formControl]=\"detailsForm.controls['conditionOne']\">\n                  </div>\n               </div>\n               <div class=\"col-lg-6\">\n                  <div class=\"form-group text-left cstm-input\">\n                     <label for=\"pwd\" class=\"txt-theme\">Term & Conditions 4</label>\n                     <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"\" [(ngModel)]=\"reqData.conditionOne\" [formControl]=\"detailsForm.controls['conditionOne']\">\n                  </div>\n               </div> -->\n               <div  class=\"col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"signup-card text-center\">\n                     <button class=\"btn btn-custom\" [disabled]=\"!detailsForm.valid\" type=\"submit\" (click)=\"submitForm()\"> Save </button>\n                  </div>\n               </div>\n            </div>\n        </form>\n      </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header-six-layout/diagnosticdetail/diagnosticdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosticdetailComponent; });
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





var DiagnosticdetailComponent = /** @class */ (function () {
    function DiagnosticdetailComponent(formBuilder, toastr, userService, router) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
    }
    DiagnosticdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.diagnosticsData = JSON.parse(localStorage['smartDiagnosticsDetails']);
        console.log(this.diagnosticsData);
        this.servicesArray = [];
        this.reqData = {};
        this.detailsForm = this.formBuilder.group({
            'diagnosticsName': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'phone': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(10)])],
            'address': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'gstinNumber': [null],
            'drugLicense': [null],
            'conditionOne': [null],
            'conditionTwo': [null],
            'conditionThree': [null],
            'conditionFour': [null],
        });
        this.GetServices();
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        this.hoursIST = ISTTime.getHours();
        this.minutesIST = ISTTime.getMinutes();
        setInterval(function () {
            _this.getCurrentTime();
        }, 60000);
        var options = {
            month: 'short'
        };
        var today = new Date();
        this.month = today.toLocaleDateString("en-IN", options);
        this.day = new Date().getDate();
        this.year = new Date().getFullYear();
        this.numericMonth = new Date().getMonth() + 1;
    };
    DiagnosticdetailComponent.prototype.checkIfAddress = function () {
        if (this.diagnosticsData.dataSmartDiagnostics.address_filled) {
            this.reqData.diagnosticsName = this.diagnosticsData.dataSmartDiagnostics.diagnostics_name;
            this.reqData.address = this.diagnosticsData.dataSmartDiagnostics.diagnostics_address;
            this.reqData.phone = this.diagnosticsData.dataSmartDiagnostics.diagnostics_phone;
            this.reqData.drugLicense = this.diagnosticsData.dataSmartDiagnostics.diagnostics_license;
            this.reqData.gstinNumber = this.diagnosticsData.dataSmartDiagnostics.diagnostics_gst_no;
            this.reqData.conditionOne = this.diagnosticsData.dataSmartDiagnostics.term1;
            this.reqData.conditionTwo = this.diagnosticsData.dataSmartDiagnostics.term2;
            this.reqData.conditionThree = this.diagnosticsData.dataSmartDiagnostics.term3;
            this.reqData.conditionFour = this.diagnosticsData.dataSmartDiagnostics.term4;
            for (var i = 0; i < this.diagnosticsData.dataSmartDiagnostics.diagnostics_services.length; i++) {
                for (var j = 0; j < this.servicesArray.length; j++) {
                    if (this.servicesArray[j].name == this.diagnosticsData.dataSmartDiagnostics.diagnostics_services[i]) {
                        this.servicesArray[j].status = true;
                        break;
                    }
                }
            }
        }
        // else{
        // this.reqData.conditionOne = "Goods once sold will not be taken back."
        // this.reqData.conditionTwo = "Replacement within 10 days with sale receipt only."
        // this.reqData.conditionThree = "We are not responsible for any breakage, shortage, leakage or damage as soon as goods leave our premises."
        // this.reqData.conditionFour = "Subject to local jurisdiction only."
        // }
    };
    DiagnosticdetailComponent.prototype.submitForm = function () {
        var _this = this;
        var array = [];
        for (var i = 0; i < this.servicesArray.length; i++) {
            if (this.servicesArray[i].status == true) {
                array.push(this.servicesArray[i].name);
            }
        }
        if (array.length > 0) {
            this.reqData.id = this.diagnosticsData.dataSmartDiagnostics.id;
            this.reqData.diagnostics_services = array;
            console.log(this.reqData);
            this.loading = true;
            this.userService.UpdateDiagnosticDetail(this.reqData).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.toastr.success(data.message, "Success");
                    localStorage['smartDiagnosticsDetails'] = JSON.stringify(data.data);
                    _this.router.navigate(['/header-six-layout/dashboard-diagnostic']);
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.toastr.warning("Please select atleast one service", "Warning");
        }
    };
    DiagnosticdetailComponent.prototype.GetServices = function () {
        this.servicesArray.push({
            status: false,
            name: this.diagnosticsData.doctorsRegisteredForSmartClinic[0].clinic_services.ClinicServicesDetail[0]
        });
        for (var i = 0; i < this.diagnosticsData.doctorsRegisteredForSmartClinic.length; i++) {
            for (var j = 0; j < this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.ClinicServicesDetail.length; j++) {
                var boolean = false;
                for (var k = 0; k < this.servicesArray.length; k++) {
                    if (this.servicesArray[k].name == this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.ClinicServicesDetail[j]) {
                        boolean = true;
                        break;
                    }
                }
                if (boolean == false) {
                    this.servicesArray.push({
                        status: false,
                        name: this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.ClinicServicesDetail[j]
                    });
                }
            }
            for (var j = 0; j < this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.OtherClinicService.length; j++) {
                var boolean = false;
                for (var k = 0; k < this.servicesArray.length; k++) {
                    if (this.servicesArray[k].name == this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.OtherClinicService[j].value) {
                        boolean = true;
                        break;
                    }
                }
                if (boolean == false) {
                    this.servicesArray.push({
                        status: false,
                        name: this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.OtherClinicService[j].value
                    });
                }
            }
        }
        this.checkIfAddress();
    };
    DiagnosticdetailComponent.prototype.getCurrentTime = function () {
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        this.hoursIST = ISTTime.getHours();
        this.minutesIST = ISTTime.getMinutes();
    };
    DiagnosticdetailComponent.prototype.getMin = function () {
        if (this.minutesIST < 10) {
            return "0" + this.minutesIST;
        }
        else {
            return this.minutesIST;
        }
    };
    DiagnosticdetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-diagnosticdetail',
            template: __webpack_require__("../../../../../src/app/header-six-layout/diagnosticdetail/diagnosticdetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-six-layout/diagnosticdetail/diagnosticdetail.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], DiagnosticdetailComponent);
    return DiagnosticdetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-six-layout/diagnosticdetail/diagnosticdetail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticdetailModule", function() { return DiagnosticdetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diagnosticdetail_routing_module__ = __webpack_require__("../../../../../src/app/header-six-layout/diagnosticdetail/diagnosticdetail-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__diagnosticdetail_component__ = __webpack_require__("../../../../../src/app/header-six-layout/diagnosticdetail/diagnosticdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DiagnosticdetailModule = /** @class */ (function () {
    function DiagnosticdetailModule() {
    }
    DiagnosticdetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__diagnosticdetail_routing_module__["a" /* DiagnosticdetailRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_checkbox__["a" /* MatCheckboxModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__diagnosticdetail_component__["a" /* DiagnosticdetailComponent */]]
        })
    ], DiagnosticdetailModule);
    return DiagnosticdetailModule;
}());



/***/ })

});
//# sourceMappingURL=diagnosticdetail.module.chunk.js.map