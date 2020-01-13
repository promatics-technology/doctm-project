webpackJsonp(["forgot-password.module"],{

/***/ "../../../../../src/app/header-one-layout/forgot-password/forgot-password-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_component__ = __webpack_require__("../../../../../src/app/header-one-layout/forgot-password/forgot-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__forgot_password_component__["a" /* ForgotPasswordComponent */]
    }
];
var ForgotPasswordRoutingModule = /** @class */ (function () {
    function ForgotPasswordRoutingModule() {
    }
    ForgotPasswordRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ForgotPasswordRoutingModule);
    return ForgotPasswordRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/forgot-password/forgot-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-one-layout/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login-sec\">\n\n\t<div class=\"container p-0\">\n\n\t\t<div class=\"login-panel\">\n\t\t\t<div class=\"col-md-offset-1 col-md-10 col-sm-12 col-xs-12\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<div class=\"login-left\">\n\t\t\t\t\t\t\t<h1> Welcome !</h1>\n\t\t\t\t\t\t\t<h1> to </h1> \n\t\t\t\t\t\t\t<h1> doctm </h1> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"m-t-40 col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<div class=\"login-right text-center newform-margin\">\n\t\t\t\t\t\t\t<h1 class=\"m-t-0\"> Forgot Password </h1>\n\t\t\t\t\t\t\t<p> Enter registered mobile number </p>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t<input id=\"field1\" pattern=\"[0-9]+\" minlength=\"10\" maxlength=\"10\" [(ngModel)] = \"phone\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" />\n\t\t\t\t\t\t\t\t\t<label for=\"field1\" class=\"labelFloat\"> Mobile Number </label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-custom\" type=\"submit\" (click) = \"forgetPass()\"> Send </button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <p class=\"text-center\"><a href=\"login.php\"> I remembered my password </a> </p> -->\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n</section>\n\n\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\n\t\t<!-- Modal content-->\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<h4 class=\"modal-title\">Password</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<form [formGroup]=\"form\" autocomplete=\"off\">\n\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t<input id=\"field1\" pattern=\"[0-9]+\"  [formControl]=\"form.controls['newOtp']\" [(ngModel)] = \"newOtp\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" />\n\t\t\t\t\t\t<label for=\"field1\" class=\"labelFloat\"> Enter OTP </label>\n\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!form.controls['newOtp'].valid  && ( form.controls['newOtp'].touched)\">Invalid Otp !!!</p>\n\t\t\t\t\t</div><br><br><br>\n\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t<input id=\"field1\"  [formControl]=\"form.controls['docPassword']\" [(ngModel)] = \"docPassword\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" />\n\t\t\t\t\t\t<label for=\"field1\" class=\"labelFloat\"> Enter Password </label>\n\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!form.controls['docPassword'].valid  && ( form.controls['docPassword'].touched)\">Invalid Password  !!!</p>\n\t\t\t\t\t</div><br><br><br>\n\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t<input id=\"field1\" [formControl]=\"form.controls['confirmDocPassword']\" [(ngModel)] = \"confirmDocPassword\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" />\n\t\t\t\t\t\t<label for=\"field1\" class=\"labelFloat\"> Enter Confirm Password </label>\n\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!form.controls['confirmDocPassword'].valid  && ( form.controls['confirmDocPassword'].touched)\">Invalid confirm password !!!</p>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<br><br>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" [disabled] = \"!form.valid\" (click) = \"UpdateDoctorPassword()\">Submit</button>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-one-layout/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(toastr, userService, router, formBuilder, route) {
        var _this = this;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.route.params.subscribe(function (id) {
            _this.type = id.id;
        });
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            'newOtp': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                ])],
            'docPassword': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* Validators */].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* Validators */].minLength(8)
                ])],
            'confirmDocPassword': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* Validators */].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* Validators */].minLength(8)
                ])],
        });
        console.log(this.type);
    };
    ForgotPasswordComponent.prototype.forgetPass = function () {
        var _this = this;
        if (this.phone == null || this.phone == undefined || this.phone == '' || isNaN(this.phone) || this.phone.length < 10) {
            console.log("ok");
            this.toastr.error('Enter correct phone number', 'Error');
            return;
        }
        console.log(this.phone);
        var ob = {
            phone: this.phone
        };
        this.loading = true;
        if (this.type == 'doctor') {
            this.userService.FindOneDoctorByPhone(ob).subscribe(function (data) {
                console.log(data);
                if (data.response) {
                    _this.toastr.success('ok', 'Success');
                    _this.docPhone = data.data.phone;
                    _this.sendOtp(_this.docPhone);
                    $("#myModal").modal("show");
                }
                else {
                    _this.toastr.error('Enter correct phone number', 'Error');
                }
                _this.loading = false;
            }, function (err) {
                console.log(err);
            });
        }
        if (this.type == 'assistant') {
            this.userService.FindOneAssistantByPhone(ob).subscribe(function (data) {
                console.log(data);
                if (data.response) {
                    _this.toastr.success('ok', 'Success');
                    _this.docPhone = data.data.phone;
                    _this.sendOtp(_this.docPhone);
                    $("#myModal").modal("show");
                }
                else {
                    _this.toastr.error('Enter correct phone number', 'Error');
                }
                _this.loading = false;
            }, function (err) {
                console.log(err);
            });
        }
        if (this.type == 'pharmacy') {
            this.userService.FindOnePharmacyByPhone(ob).subscribe(function (data) {
                console.log(data);
                if (data.response) {
                    _this.toastr.success('ok', 'Success');
                    _this.docPhone = data.data.phone;
                    _this.sendOtp(_this.docPhone);
                    $("#myModal").modal("show");
                }
                else {
                    _this.toastr.error('Enter correct phone number', 'Error');
                }
                _this.loading = false;
            }, function (err) {
                console.log(err);
            });
        }
        if (this.type == 'diagnostics') {
            this.userService.FindOneDiagnosticsByPhone(ob).subscribe(function (data) {
                console.log(data);
                if (data.response) {
                    _this.toastr.success('ok', 'Success');
                    _this.docPhone = data.data.phone;
                    _this.sendOtp(_this.docPhone);
                    $("#myModal").modal("show");
                }
                else {
                    _this.toastr.error('Enter correct phone number', 'Error');
                }
                _this.loading = false;
            }, function (err) {
                console.log(err);
            });
        }
        if (this.type == 'ipd') {
            this.userService.FindOneIPDByPhone(ob).subscribe(function (data) {
                console.log(data);
                if (data.response) {
                    _this.toastr.success('ok', 'Success');
                    _this.docPhone = data.data.phone;
                    _this.sendOtp(_this.docPhone);
                    $("#myModal").modal("show");
                }
                else {
                    _this.toastr.error('Enter correct phone number', 'Error');
                }
                _this.loading = false;
            }, function (err) {
                console.log(err);
            });
        }
    };
    ForgotPasswordComponent.prototype.sendOtp = function (data) {
        var _this = this;
        console.log(data);
        var ob = {
            phone: parseInt(data)
        };
        this.userService.GenerateOtpForActiveDoctor(ob).subscribe(function (data) {
            console.log(data);
            if (data.response) {
                _this.getOtp = data.otpPhone;
                console.log(_this.getOtp);
            }
            else {
                _this.toastr.error('Enter correct phone number', 'Error');
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    ForgotPasswordComponent.prototype.UpdateDoctorPassword = function () {
        var _this = this;
        if (this.type == 'doctor') {
            if (this.docPassword == this.confirmDocPassword) {
                if (parseInt(this.newOtp) == parseInt(this.getOtp)) {
                    var ob = {
                        phone: this.docPhone,
                        password: this.docPassword
                    };
                    this.userService.UpdateDoctorPassword(ob).subscribe(function (data) {
                        console.log(data);
                        if (data.response) {
                            $("#myModal").modal("hide");
                            _this.router.navigate(['header-one-layout/smartClinicLogin']);
                        }
                        _this.loading = false;
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    this.toastr.error('Enter correct otp', 'Error');
                }
            }
            else {
                this.toastr.error('Password and confirm password not matched', 'Error');
            }
        }
        if (this.type == 'assistant') {
            if (this.docPassword == this.confirmDocPassword) {
                if (parseInt(this.newOtp) == parseInt(this.getOtp)) {
                    var ob = {
                        phone: this.docPhone,
                        password: this.docPassword
                    };
                    this.userService.UpdateAssistantPassword(ob).subscribe(function (data) {
                        console.log(data);
                        if (data.response) {
                            $("#myModal").modal("hide");
                            _this.router.navigate(['header-one-layout/smartClinicLogin']);
                        }
                        _this.loading = false;
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    this.toastr.error('Enter correct otp', 'Error');
                }
            }
            else {
                this.toastr.error('Password and confirm password not matched', 'Error');
            }
        }
        if (this.type == 'pharmacy') {
            if (this.docPassword == this.confirmDocPassword) {
                if (parseInt(this.newOtp) == parseInt(this.getOtp)) {
                    var ob = {
                        phone: this.docPhone,
                        password: this.docPassword
                    };
                    this.userService.UpdatePharmacyPassword(ob).subscribe(function (data) {
                        console.log(data);
                        if (data.response) {
                            $("#myModal").modal("hide");
                            _this.router.navigate(['header-one-layout/smartClinicLogin']);
                        }
                        _this.loading = false;
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    this.toastr.error('Enter correct otp', 'Error');
                }
            }
            else {
                this.toastr.error('Password and confirm password not matched', 'Error');
            }
        }
        if (this.type == 'diagnostics') {
            if (this.docPassword == this.confirmDocPassword) {
                if (parseInt(this.newOtp) == parseInt(this.getOtp)) {
                    var ob = {
                        phone: this.docPhone,
                        password: this.docPassword
                    };
                    this.userService.UpdateDiagnosticsPassword(ob).subscribe(function (data) {
                        console.log(data);
                        if (data.response) {
                            $("#myModal").modal("hide");
                            _this.router.navigate(['header-one-layout/smartClinicLogin']);
                        }
                        _this.loading = false;
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    this.toastr.error('Enter correct otp', 'Error');
                }
            }
            else {
                this.toastr.error('Password and confirm password not matched', 'Error');
            }
        }
        if (this.type == 'ipd') {
            if (this.docPassword == this.confirmDocPassword) {
                if (parseInt(this.newOtp) == parseInt(this.getOtp)) {
                    var ob = {
                        phone: this.docPhone,
                        password: this.docPassword
                    };
                    this.userService.UpdateIPDPassword(ob).subscribe(function (data) {
                        console.log(data);
                        if (data.response) {
                            $("#myModal").modal("hide");
                            _this.router.navigate(['header-one-layout/smartClinicLogin']);
                        }
                        _this.loading = false;
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    this.toastr.error('Enter correct otp', 'Error');
                }
            }
            else {
                this.toastr.error('Password and confirm password not matched', 'Error');
            }
        }
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/header-one-layout/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-one-layout/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/forgot-password/forgot-password.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function() { return ForgotPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_routing_module__ = __webpack_require__("../../../../../src/app/header-one-layout/forgot-password/forgot-password-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password_component__ = __webpack_require__("../../../../../src/app/header-one-layout/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ForgotPasswordModule = /** @class */ (function () {
    function ForgotPasswordModule() {
    }
    ForgotPasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__forgot_password_routing_module__["a" /* ForgotPasswordRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__forgot_password_component__["a" /* ForgotPasswordComponent */]]
        })
    ], ForgotPasswordModule);
    return ForgotPasswordModule;
}());



/***/ })

});
//# sourceMappingURL=forgot-password.module.chunk.js.map