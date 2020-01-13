webpackJsonp(["smart-clinic-login.module"],{

/***/ "../../../../../src/app/header-one-layout/smart-clinic-login/smart-clinic-login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartClinicLoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smart_clinic_login_component__ = __webpack_require__("../../../../../src/app/header-one-layout/smart-clinic-login/smart-clinic-login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__smart_clinic_login_component__["a" /* SmartClinicLoginComponent */],
    }
];
var SmartClinicLoginRoutingModule = /** @class */ (function () {
    function SmartClinicLoginRoutingModule() {
    }
    SmartClinicLoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], SmartClinicLoginRoutingModule);
    return SmartClinicLoginRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/smart-clinic-login/smart-clinic-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-one-layout/smart-clinic-login/smart-clinic-login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login-sec\">\n\n\t<div class=\"container p-0\">\n\n\t\t<div class=\"login-panel\">\n\t\t\t<div class=\"col-md-offset-1 col-md-10 col-sm-12 col-xs-12\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<div class=\"login-left\">\n\t\t\t\t\t\t\t<h1> Welcome</h1>\n\t\t\t\t\t\t\t<h1> to </h1> \n\t\t\t\t\t\t\t<h1> doctm </h1> \n\t\t\t\t\t\t\t<h1> SmartClinic </h1> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<form [formGroup]=\"loginForm\">\n\t\t\t\t\t\t<div class=\"m-t-40 col-md-6 col-sm-6 col-xs-12\"> \n\t\t\t\t\t\t\t<div class=\"login-right newform-margin\">\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t<input id=\"field1\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"loginData.doctm_clinic_id\" [formControl]=\"loginForm.controls['doctm_clinic_id']\" />\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!loginForm.controls['doctm_clinic_id'].valid  && ( loginForm.controls['doctm_clinic_id'].touched)\">Invalid Id  !!!</p>\n\t\t\t\t\t\t\t\t\t\t<label for=\"field1\" class=\"labelFloat\"> User ID (Email) </label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t<input id=\"field2\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"loginData.password\" [formControl]=\"loginForm.controls['password']\" />\n\t\t\t\t\t\t\t\t\t\t<label for=\"field2\" class=\"labelFloat\"> Password </label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t\t<re-captcha (resolved)=\"resolved($event, 'step1')\" siteKey=\"6LdBQZoUAAAAACukEUlsU0fnfOcFdXQYuyAcpO9J\"></re-captcha>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"\" [(ngModel)]=\"remember_me\" [formControl]=\"loginForm.controls['remember_me']\" /> Remember me </label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/header-one-layout/forgot-password/doctor\" class=\"forgt_pass\" > Forgot Password? </a>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"!loginForm.valid || !captcha_step_1\" (click)=\"LoginDoctor()\"> Submit </button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"m-t-40 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12 dwnld-login\">\n\t\t\t\t\t\t\t<h1> Download doctm SmartClinic App </h1>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12 googlePlay-login\">\n\t\t\t\t\t\t\t<a href=\"#\"> <img src=\"./assets/imgs/googlePlay.png\" class=\"img-responsive\" > </a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/header-one-layout/smart-clinic-login/smart-clinic-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartClinicLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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







var SmartClinicLoginComponent = /** @class */ (function () {
    function SmartClinicLoginComponent(formBuilder, toastr, userService, router) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.captcha_step_1 = false;
    }
    SmartClinicLoginComponent.prototype.ngOnInit = function () {
        this.loginData = {};
        this.remember_me = false;
        this.loginForm = this.formBuilder.group({
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required])],
            'doctm_clinic_id': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'remember_me': [null]
        });
        this.socket = __WEBPACK_IMPORTED_MODULE_6_socket_io_client__(__WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__["a" /* environment */].socket);
        // this.socket.on('numberOfOnlineUser', (numberOfOnlineUser)=>{
        //   this.numberOfOnlineUser = numberOfOnlineUser
        // })
        console.log(this.numberOfOnlineUser);
    };
    SmartClinicLoginComponent.prototype.LoginDoctor = function () {
        var _this = this;
        this.userService.LoginDoctor(this.loginData).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                localStorage['isLoggedinDoctor'] = 1;
                _this.toastr.success(data.message, 'Success');
                // if(this.remember_me == true){
                // alert(this.remember_me);
                console.log(data.data);
                _this.doctor_id = data.data;
                localStorage['doctorDetails'] = JSON.stringify(data.data);
                localStorage['subscription_info'] = JSON.stringify(data.data.subscription_id);
                // socket.on('counter', function (data) {
                //   $("#counter").text(data.count);
                // });
                // this.socket.emit('connect',{
                //   doctor_id: data._id
                // })
                _this.socket.emit('login', {
                    doctor_id: _this.doctor_id._id,
                    type: 'Doctor'
                });
                // } 
                _this.router.navigate(['/header-two-layout/dashboard']);
            }
            else {
                _this.toastr.error(data.message, 'Error');
            }
        }, function (err) {
            console.log(err);
        });
    };
    SmartClinicLoginComponent.prototype.resolved = function (captchaResponse, step) {
        console.log("Resolved captcha with response: " + captchaResponse);
        if (step == 'step1') {
            this.captcha_step_1 = true;
        }
    };
    SmartClinicLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-smart-clinic-login',
            template: __webpack_require__("../../../../../src/app/header-one-layout/smart-clinic-login/smart-clinic-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-one-layout/smart-clinic-login/smart-clinic-login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], SmartClinicLoginComponent);
    return SmartClinicLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/smart-clinic-login/smart-clinic-login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartClinicLoginModule", function() { return SmartClinicLoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smart_clinic_login_routing_module__ = __webpack_require__("../../../../../src/app/header-one-layout/smart-clinic-login/smart-clinic-login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__smart_clinic_login_component__ = __webpack_require__("../../../../../src/app/header-one-layout/smart-clinic-login/smart-clinic-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_recaptcha__ = __webpack_require__("../../../../ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_recaptcha__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SmartClinicLoginModule = /** @class */ (function () {
    function SmartClinicLoginModule() {
    }
    SmartClinicLoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__smart_clinic_login_routing_module__["a" /* SmartClinicLoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_recaptcha__["RecaptchaModule"].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__smart_clinic_login_component__["a" /* SmartClinicLoginComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_user_service__["a" /* UserService */]]
        })
    ], SmartClinicLoginModule);
    return SmartClinicLoginModule;
}());



/***/ })

});
//# sourceMappingURL=smart-clinic-login.module.chunk.js.map