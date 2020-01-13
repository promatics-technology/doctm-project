webpackJsonp(["header-one-layout.module"],{

/***/ "../../../../../src/app/header-one-layout/header-one-layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderOneLayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_one_layout_component__ = __webpack_require__("../../../../../src/app/header-one-layout/header-one-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__header_one_layout_component__["a" /* HeaderOneLayoutComponent */],
        children: [
            { path: '', redirectTo: 'homepage' },
            { path: 'homepage', loadChildren: './homepage/homepage.module#HomepageModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'login', loadChildren: './login/login.module#LoginModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'forgot-password/:id', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'otp', loadChildren: './otp/otp.module#OtpModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'smartClinicLogin', loadChildren: './smart-clinic-login/smart-clinic-login.module#SmartClinicLoginModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'smartAssistantLogin', loadChildren: './smart-assistant-login/smart-assistant-login.module#SmartAssistantLoginModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'smartPharmacyLogin', loadChildren: './smart-pharmacy-login/smart-pharmacy-login.module#SmartPharmacyLoginModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'smartDiagnosticsLogin', loadChildren: './smart-diagnostics-login/smart-diagnostics-login.module#SmartDiagnosticsLoginModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'smartIPDLogin', loadChildren: './smart-ipdlogin/smart-ipdlogin.module#SmartIpdloginModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'signup', loadChildren: './signup-new/signup-new.module#SignupNewModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'faq', loadChildren: './faq/faq.module#FaqModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'pricing', loadChildren: './pricing/pricing.module#PricingModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'privacy-policy', loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'term', loadChildren: './term/term.module#TermModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'smart-clinic-service', loadChildren: './smart-clinic-service/smart-clinic-service.module#SmartClinicServiceModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'smart-assistant-service', loadChildren: './smart-assistant-service/smart-assistant-service.module#SmartAssistantServiceModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'smart-pharmacy-service', loadChildren: './smart-pharmacy-service/smart-pharmacy-service.module#SmartPharmacyServiceModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'smart-diagnostics-service', loadChildren: './smart-diagnostics-service/smart-diagnostics-service.module#SmartDiagnosticsServiceModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'smart-ipd-service', loadChildren: './smart-ipd-service/smart-ipd-service.module#SmartIpdServiceModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
        ]
    }
];
var HeaderOneLayoutRoutingModule = /** @class */ (function () {
    function HeaderOneLayoutRoutingModule() {
    }
    HeaderOneLayoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], HeaderOneLayoutRoutingModule);
    return HeaderOneLayoutRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/header-one-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-one-layout/header-one-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/header-one-layout/header-one-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderOneLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderOneLayoutComponent = /** @class */ (function () {
    function HeaderOneLayoutComponent(_spinner) {
        this._spinner = _spinner;
    }
    HeaderOneLayoutComponent.prototype.ngOnInit = function () {
    };
    HeaderOneLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // hide spinner once all loaders are completed
        __WEBPACK_IMPORTED_MODULE_1__theme_services__["a" /* BaThemePreloader */].load().then(function (values) {
            _this._spinner.hide();
        });
    };
    HeaderOneLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-one-layout',
            template: __webpack_require__("../../../../../src/app/header-one-layout/header-one-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-one-layout/header-one-layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__theme_services__["b" /* BaThemeSpinner */]])
    ], HeaderOneLayoutComponent);
    return HeaderOneLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/header-one-layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderOneLayoutModule", function() { return HeaderOneLayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_one_layout_routing_module__ = __webpack_require__("../../../../../src/app/header-one-layout/header-one-layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_one_layout_component__ = __webpack_require__("../../../../../src/app/header-one-layout/header-one-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HeaderOneLayoutModule = /** @class */ (function () {
    function HeaderOneLayoutModule() {
    }
    HeaderOneLayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__header_one_layout_routing_module__["a" /* HeaderOneLayoutRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__header_one_layout_component__["a" /* HeaderOneLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_header_header_component__["a" /* HeaderComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__theme_services__["b" /* BaThemeSpinner */], __WEBPACK_IMPORTED_MODULE_6__providers_user_service__["a" /* UserService */]]
        })
    ], HeaderOneLayoutModule);
    return HeaderOneLayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\n<header>\n\t<div class=\"srch-prescription\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"\">\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<label class=\"\">For prescription</label>\n\t\t\t\t</div>\n\t\t\t\t<!-- <form formGroup=\"stepOneForm\"> -->\n\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<input id=\"phoneNo\" type=\"text\"  autocomplete=\"new-phoneNo\" class=\"form-control\" placeholder=\"Enter Mobile Number\" maxlength=\"10\" minlength=\"10\" pattern=\"[0-9.]+\">\n\t\t\t\t\t\t\t<span class=\"input-group-btn btn-go-hm\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click) = \"checkPhone()\"> Go </button>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- </form> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<nav class=\"navbar navbar-default\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<a class=\"navbar-brand\" routerLink=\"/header-one-layout/homepage\"><img src=\"./assets/imgs/logoDoctm.png\"></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t<li><a href=\"javascript:void(0)\" routerLink=\"/header-one-layout/about-us\">About us</a></li>\n\t\t\t\t\t\t<li class=\"dropdown cus-dropdown\">\n\t\t\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"javascript:void(0)\">Services\n\t\t\t\t\t\t\t\t<span class=\"caret\"></span></a>\n\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t<!-- <li class=\"cus-dropdown\">\n\t\t\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"javascript:void(0)\">SmartClinic <i class=\"pull-right fa fa-angle-right\"></i></a>\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu sub-dropdown\">\n\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\">Digital Prescription</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\">Clinic Analytics</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\">SMS</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\">Area of Influence(AoI)</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\">Clinic Score</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\">Clinic Reports</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\">Referrals </a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\">Search records</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\">Appointments</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\">Clinic summary</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li> -->\n\n\t\t\t\t\t\t<li><a routerLink=\"/header-one-layout/smart-clinic-service\">SmartClinic</a></li>\n\t\t\t\t\t\t<li><a routerLink=\"/header-one-layout/smart-assistant-service\">SmartAssistant</a></li>\n\t\t\t\t\t\t<li><a routerLink=\"/header-one-layout/smart-pharmacy-service\">SmartPharmacy</a></li>\n\t\t\t\t\t\t<li><a routerLink=\"/header-one-layout/smart-diagnostics-service\">SmartDiagnostics</a></li>\n\t\t\t\t\t\t<li><a routerLink=\"/header-one-layout/smart-ipd-service\">SmartIPD</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t<li><a routerLink=\"/header-one-layout/pricing\">Pricing</a></li>\n\t\t\t\t<li><a routerLink=\"/header-one-layout/faq\">FAQ</a></li>\n\t\t\t\t<li><a target=\"_blank\" href=\"http://promatics.gagzweblab.xyz/Doctm-blog-design/blog.html\">Blog</a></li>\n\t\t\t\t<li class=\"dropdown cus-dropdown signin_dropdown\" (mouseover)=\"onHoverSignIn()\">\n\t\t\t\t\t<a class=\"dropdown-toggle btn btn-theme btn-info\" data-toggle=\"dropdown\" href=\"javascript:void(0)\">Sign-in\n\t\t\t\t\t\t<span class=\"caret\"></span></a>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" id=\"parent\">\n\t\t\t\t\t\t\t<ul class=\"parent-hide\">\n\t\t\t\t\t\t\t\t<li><a routerLink=\"/header-one-layout/smartClinicLogin\" (click)=\"selectClass()\">Doctor</a></li>\n\t\t\t\t\t\t\t\t<li><a routerLink=\"/header-one-layout/smartAssistantLogin\" (click)=\"selectClass()\">SmartAssistant</a></li>\n\t\t\t\t\t\t\t\t<li><a routerLink=\"/header-one-layout/smartPharmacyLogin\" (click)=\"selectClass()\">SmartPharmacy</a></li>\n\t\t\t\t\t\t\t\t<li><a routerLink=\"/header-one-layout/smartDiagnosticsLogin\" (click)=\"selectClass()\">SmartDiagnostics</a></li>\n\t\t\t\t\t\t\t\t<li><a routerLink=\"/header-one-layout/smartIPDLogin\" (click)=\"selectClass()\">SmartIPD</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"for_newuser\">\n\t\t\t\t\t\t\t\t<p class=\"pull-left\"> New user?  </p>\n\t\t\t\t\t\t\t\t<div class=\"inner_newuser\">\n\t\t\t\t\t\t\t\t\t<p> <a href=\"#myModalConf\" data-toggle=\"modal\" data-dismiss=\"modal\" class=\"btn btn-custom\" (click)=\"selectClass()\"> Sign-up </a> </p>\n\t\t\t\t\t\t\t\t\t<p> (for doctors only) </p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</nav> \n</header>\n<!-- Modal -->\n<div class=\"modal fade cus-modal\" id=\"myModalConf\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">×</span>\n\t\t\t\t</button>\n\t\t\t\t<h4 class=\"modal-title mdl-title\">Documents Required </h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"contact-modal-body\">\n\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<p><b>Please Note: </b>Following documents ( jpg / pdf format ) are required to be uploaded for successful sign-up.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t\t\t\t<p><span class=\"color-blue\">1.</span> <b>Photo ID*</b> <small class=\"txt-muted\">(Any one)</small></p>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>PAN Card</li>\n\t\t\t\t\t\t\t\t<li>Driving License</li>\n\t\t\t\t\t\t\t\t<li>Aadhaar Card</li>\n\t\t\t\t\t\t\t\t<li>Passport</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t<p><span class=\"color-blue\">2.</span> <b>Clinic Documents* <small>(Any one)</small></b><small class=\"txt-muted\" style=\"display:block\">(For clinic owners only)</small></p>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>Latest clinic electricity bill</li>\n\t\t\t\t\t\t\t\t<li>Undertaking <i class=\"fa fa-info-circle\"></i></li>\n\t\t\t\t\t\t\t\t<li>Latest post paid  mobile or  clinic landline phone bill</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t<p><span class=\"color-blue\">3.</span> <b>Medical registration certificate*</b></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<div class=\"col-lg-5 col-lg-offset-1\">\n\t\t\t\t\t<button class=\"btn btn-custom\" type=\"submit\" data-dismiss=\"modal\" data-toggle=\"modal\" routerLink=\"/header-one-layout/signup\"> Continue</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t\t<button class=\"btn btn-custom\" type=\"button\" data-dismiss=\"modal\" data-toggle=\"modal\"> Cancel </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- <script type=\"text/javascript\">\ndocument.getElementsByClassName(\"li-child\");\n\n</script> -->\n\n<div class=\"modal fade cus-preview\" id=\"show-list\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t<div class=\"modal-dialog cstm-width\" role=\"document\">\n\t\t<div class=\"modal-content modal-lg\">\n\t\t\t<div class=\"modal-header cancel-wrap\" style=\"position: relative;\">\n\t\t\t\t<div>\n\t\t\t\t\t<h3 class=\"text-center\">Search results</h3>\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" style=\"position: absolute;top:5px; right:10px;\">&times;</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t<div class=\"cstm-tab\">\n\t\t\t\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr class=\"cstm-tr-2\" >\n\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\"><b>Sr no</b></th>\n\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\"><b>Date</b></th>\n\t\t\t\t\t\t\t\t\t\t<!--th class=\"text-center\"><b>Phone Number</b></th-->\n\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\"><b>Patient Name</b></th>\n\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\"><b></b>Doctor Name</th>\n\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\"><b></b>Prescription</th>\n\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\"><b></b>Report</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor = \"let list of patientList; let i = index\">\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{i+1}}</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{list.createdAt | date: 'dd/MM/yyyy'}}</td>\n\t\t\t\t\t\t\t\t\t\t<!--td class=\"text-center\">{{list.registration.pateintPhone}}</td-->\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{list.registration.pateintName  | uppercase}}</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{getDocNameList(list.registration.doctor_id) | uppercase}}</td>\n\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center cusr\" (click)=\"openPrescriptionPreview(list)\" *ngIf=\"checkPrescription(list)\">view</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center cusr\" *ngIf=\"!checkPrescription(list)\">NA</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center cusr\" (click)=\"openReportPreview(list)\" *ngIf=\"checkReports(list)\">view</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center cusr\" *ngIf=\"!checkReports(list)\">NA</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"modal fade cus-preview\" id=\"show-otp\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header cancel-wrap\">\n\t\t\t\t<div>\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"row\" style=\"padding: 10px;\">\n\t\t\t\t\t<div class=\"col-lg-3 text-right\">\n\t\t\t\t\t\t<h4><b>Enter OTP</b></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<!-- <input type=\"\" name=\"\" class=\"form-control\" > -->\n\n\t\t\t\t\t\t<input id=\"otpAbcd\" type=\"text\" class=\"form-control txtfield\" name=\"\" pattern=\"[0-9.]+\" maxLength=\"10\"  placeholder =\"Enter OTP\"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t\t\t\t<button class=\"btn-sm btn btn-custom\" (click) = \"getData()\" >Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-center col-lg-12\">\n\n\t\t\t\t\t\t\t<a href=\"#\" style=\"margin-top: 10px;display: inline-block;font-weight: bold;\">Resend OTP</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade cus-preview\" tabindex=\"-1\"  id=\"uploadedPrescriptionModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t<h4 class=\"modal-title\"> Prescription </h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-center col-lg-4\">\n\t\t\t\t\t<button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf1(uploadedPrescription)\"> Print </button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t<button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" *ngIf=\"uploadedPrescription\" id=\"uploadedPrescriptionModalPDF\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<div class=\"presc-modal-body\">\n\t\t\t\t\t\t\t<div class=\"reportImg\">\n\t\t\t\t\t\t\t\t<img src=\"http://18.188.229.2/public/prescriptions_uploaded/{{uploadedPrescription}}\" class=\"img-responsive\"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n\n<div class=\"modal fade cus-preview\" id=\"previewModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content show-default\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<div>\n\t\t\t\t\t<h4 class=\"modal-title\"> Preview </h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"presc-modal-body\">\n\t\t\t\t\t\t<div class=\"pad-view\">\n\t\t\t\t\t\t\t<div class=\"padview-header\">\n\t\t\t\t\t\t\t\t<div class=\"pad-view-flx col-lg-4\" *ngFor = \"let data of doctorData | slice:0:1\" >\n\t\t\t\t\t\t\t\t\t<div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\">\n\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{docName | uppercase}} </h1>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group qual\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"color-purple\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"checkOptionOfPad('Specialization')\">({{docSpecialization}})</span><br>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"checkOptionOfPad('Qualifications')\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let data of newGlobalArray.qualification;let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.value}} <span *ngIf=\"i!=newGlobalArray?.qualification?.length-1\">,</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"checkOptionOfPad('registration_no')\"> Registration: <span class=\"color-purple\"> {{newGlobalArray.registration_no}} </span> </p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"checkOptionOfPad('Professional_affiliation')\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"color-purple\" *ngFor=\"let pa of newGlobalArray?.professional_affiliation;let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{pa.value}}<span *ngIf=\"i!=newGlobalArray?.professional_affiliation?.length-1\">,</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"pad-view-flx col-lg-8\">\n\t\t\t\t\t\t\t\t\t<ul class=\"clinic-detail\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"clinic-name\" *ngIf=\"newDocAllData?.clinic_details\">\n\t\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_clinicName\" > {{newDocAllData.clinic_details.clinic_name}} </h1>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"clinic-name\" *ngIf=\"!newDocAllData?.clinic_details\">\n\t\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_clinicName\" >---</h1>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"newDocAllData?.clinic_details\">{{newDocAllData.clinic_details.address}}, {{newDocAllData.clinic_details.area}}, {{newDocAllData.clinic_details.city}}, {{newDocAllData.clinic_details.state}}</li>\n\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"!newDocAllData?.clinic_details\">-----</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"li-cstm\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"for-apt\" > For appointments </h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"newDocAllData?.clinic_details\"> Tel: {{newDocAllData?.clinic_details?.std_code}}-{{newDocAllData?.clinic_details?.landline}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!newDocAllData?.clinic_details\"> Tel: ---</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"newDocAllData?.clinic_details\"> Mb: +91-{{newDocAllData?.clinic_details?.mobile}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!newDocAllData?.clinic_details\"> Mb: +91---</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p class=\"text-center\">\n\t\t\t\t\t\t\t\t<label id=\"translated_appointmentText\"> {{getHeaderText()}} </label>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div class=\"padview-body\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n\t\t\t\t\t\t\t\t\t<div class=\"emergency-wrap\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group emrgency-consult\" *ngIf=\"dispensedPatient?.type=='Emergency'\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"small\" id=\"translated_emergencyText\"><i> Emergency Consultation </i> </p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group schdl\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Schedule: </h5>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<span><strong style=\"display:block; width:110px;\"> {{shift.day}}: </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.fromTime?.hour=='0'\">{{time?.fromTime?.hour}}0:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.fromTime?.hour!='0'\">{{time?.fromTime?.hour}}:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.fromTime?.minute=='0'\">{{time?.fromTime?.minute}}0 –</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.minute!='0'\">{{time?.fromTime?.minute}} –</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.toTime?.hour=='0'\">{{time?.toTime?.hour}}0:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.toTime?.hour!='0'\">{{time?.toTime?.hour}}:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.toTime?.minute=='0'\">{{time?.toTime?.minute}}0</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time?.toTime?.minute!='0'\">{{time?.toTime?.minute}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<span><strong> {{shift.day}}: </strong> Closed \n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div id=\"translated_treatmentText\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Available Treatments: </h5>\n\t\t\t\t\t\t\t\t\t\t\t<ul style=\"padding-left:15px!important;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let treat of newGlobalArray.expertise\">{{treat.value}}</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"newGlobalArray.clinic_services_status=='Yes' && checkOptionOfPad('Available_services')\" id=\"translated_servicesText\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Available Services: </h5>\n\t\t\t\t\t\t\t\t\t\t\t<ul style=\"padding-left:15px!important;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"newGlobalArray.clinic_services.Clinic_Pharmacy\">Pharmacy</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"newGlobalArray.clinic_services.Clinic_IPD\">IPD</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let cs of newGlobalArray.clinic_services.ClinicServicesDetail\"> {{cs}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let cs of newGlobalArray.clinic_services.OtherClinicService\"> {{cs.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>                                   \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"padview-bodyright\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"padview-body-header\">\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Prescription ID </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\">{{prescription_id}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Name </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{dispensedPatient.pateintName | uppercase}} </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Age/Sex </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{dispensedPatient.age_in_years}} {{dispensedPatient.gender}} </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Weight </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\" *ngIf=\"dispensedPatient.weight\"> {{dispensedPatient.weight}} Kg </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Height </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\" *ngIf=\"dispensedPatient.height\"> {{dispensedPatient.height}} cm </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\">{{lastDate | date: 'dd/MMM/yyyy'}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"padview-patient\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"img-patient\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pateintPicPath}}{{dispensedPatient.pateintPic}}\" class=\"img-responsive\" *ngIf=\"dispensedPatient.pateintPic\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!dispensedPatient.pateintPic\"/>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"preConditionComplete==true && finalPreConditions?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_PreCondHeading\"> Existing health status </span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_BIHeading\"> Body Indicators</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"finalAllergy?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_allergyHeading\"> Allergy</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\" pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<div class=\"middle-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"findingsSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_PTHeading\"> Patient's Complaints</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of findingsSelected\"> {{data.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_sympHeading\"> Symptoms</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of symptomsSelected\"> {{data.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\" diagnosisSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_diagnosisHeading\"> Diagnosis</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of diagnosisSelected\">{{data.value}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\" *ngIf=\"medicationComplete==true\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"padview-medic\" id=\"translated_medication\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span> Medicines</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ol style=\"padding-left:10px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of tempMedicationArray\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info?.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info?.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info?.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info?.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info?.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Drops'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info?.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info?.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"flex-inner five-height vaccination\" *ngIf=\"vaccinationComplete==true\" data-target=\"#vaccinationModal\" data-toggle=\"modal\" data-dismiss=\"modal\">\n                                                <div class=\"heading-wrap\">\n                                                    <a class=\"heading-pad\" href=\"javascript:void(0)\" data-toggle=\"modal\" data-dismiss=\"modal\">\n                                                 Vaccination \n                                                 </a>\n                                                    <span class=\"heading-delete\" (click)=\"$event.stopPropagation(); deleteAndResetSelectedDiv('Vaccination')\"> <i class=\"fa fa-times\"></i> </span>\n                                                </div>\n                                                <ol *ngIf=\"currentVaccinationComplete == true\">\n                                                    <div>Current</div>\n                                                    <li *ngFor=\"let data of finalCurrentVaccinationArray\">{{data}}</li>\n                                                </ol>\n                                                <ol *ngIf=\"dueVaccinationComplete == true\">\n                                                    <!-- <div class=\"li-blocked\">\n                                                        <li *ngIf=\"finalDueVaccinationArray.length>0\">\n                                                            <span><strong>Due </strong>                                    ({{vaccinationDate.toString().substr(4,11)}})\n                                                            </span>\n                                                        </li>\n                                                    </div> -->\n                                                    <!-- <div>Due <span *ngIf=\"vaccinationDate!=null\" style=\"float:left;font-weight: bold; padding-left:30px; text-align:right; font-size: 12px;\"></span>\n                                                    </div> -->\n                                                    <span *ngIf=\"finalDueVaccinationArray?.length>0\"><strong>Due </strong>({{vaccinationDate.toString().substr(4,11)}})\n                                                    </span>\n                                                    <li *ngFor=\"let data of finalDueVaccinationArray\">{{data}}</li>\n                                                </ol>\n                                            </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"third-body\">\n\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray?.length\">\n\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span id=\"translated_invHeading\"> Investigation</span> </div>\n\t\t\t\t\t\t\t\t<ol class=\"numberol pl10\">\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of investigationArray\">\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"i!=data.values?.length-1\">\\</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"treatmentComplete==true\" id=\"translated_OTHeading\">\n\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of treatmentArray;let i =index\">\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Lifestyle Changes'\">\n\t\t\t\t\t\t\t\t\t\t\t{{data.name}} - <span *ngFor=\"let value of data.lifestyle;let j = index\">{{value.value}} <span *ngIf=\"j!=data.lifestyle?.length-1\">\\</span></span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Physiotherapy' || data.name=='Fomentation'\">\n\t\t\t\t\t\t\t\t\t\t\t{{data.name}} - {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Plaster'\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notranslate\">{{data.name}}</span> - on <span class=\"notranslate\">{{data.Injury_Area}}</span> of {{data.plaster_type}} for {{data.Duration}} days \n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Gargle' || data.name=='Dressing' || data.name=='Bandage' || data.name=='Other'\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name!='Other'\">{{data.name}} - </span>{{data.med_name[0].value}} {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t{{data.value}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"note-box\">\n\t\t\t\t\t\t\t<div class=\"note-innerbox\">\n\t\t\t\t\t\t\t\t<div class=\"note-innerdiv\">\n\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray?.length>0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span id=\"translated_surgHeading\"> Recommended Surgery</span> </div>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of surgerySelectedArray\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"refer_status\" style=\"padding:0 30px;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Referred To</span> </div>\n\t\t\t\t\t\t\t\t\t\t<p> {{referDetail.doctor_name | uppercase}} </p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"\" *ngIf=\"eyePresComplete==true\">\n\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span id=\"translated_eyeHeading\"> Eye Prescription</span> </div>\n\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-striped cstm-table\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th> Eye </th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th> Sphere </th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th> Cylinder </th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th> Axis </th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th> Add </th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th> PD (mm) </th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> Right (OD): </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.sphere}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.cylinder}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.axis}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.add}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalRightOD.pd}} </td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> Left (OS): </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.sphere}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.cylinder}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.axis}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.add}} </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td> {{finalLeftOD.pd}} </td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"third-body\">\n\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n\t\t\t\t\t\t\t\t<div class=\"pat-heading\"> <span> Follow Up</span></div>\n\t\t\t\t\t\t\t\t<p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n\t\t\t\t\t\t\t\t<p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"forth-body\">\n\t\t\t\t\t\t\t<div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n\t\t\t\t\t\t\t\t<div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"padview-footer\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"padview-powered\">\n\t\t\t\t\t\t<div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n\t\t\t\t\t\t<div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12 col-sm-4 col-xs-12\" id=\"translated_footer\">\n\t\t\t\t\t<div class=\"legal\">\n\t\t\t\t\t\t<h3>{{getFooterText()}}</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n\n\n<div class=\"modal fade cus-preview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<div>\n\t\t\t\t\t<h4 class=\"modal-title\"> Preview </h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" id=\"previewModalPdf\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"presc-modal-body\">\n\t\t\t\t\t\t<div class=\"pad-view\">\n\t\t\t\t\t\t\t<div class=\"padview-header\">\n\t\t\t\t\t\t\t\t<div class=\"pad-view-flx col-lg-6\" *ngFor = \"let data of doctorData | slice:0:1\"  style=\"float:left;width:49%;\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\">\n\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{docName}} </h1>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group qual\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"color-purple\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"checkOptionOfPad('Specialization')\">({{docSpecialization}})</span><br>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"checkOptionOfPad('Qualifications')\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let data of newGlobalArray.qualification;let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.value}} <span *ngIf=\"i!=newGlobalArray.qualification?.length-1\">,</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"checkOptionOfPad('registration_no')\"> Registration: <span class=\"color-purple\"> {{newGlobalArray.registration_no}} </span> </p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"checkOptionOfPad('Professional_affiliation')\" style=\"width:200px;word-break: break-all;\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"color-purple\" *ngFor=\"let pa of newGlobalArray.professional_affiliation;let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{pa.value}}<span *ngIf=\"i!=newGlobalArray.professional_affiliation?.length-1\">,</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"pad-view-flx col-lg-6\" style=\"float:left;width:49%;\">\n\t\t\t\t\t\t\t\t\t<ul class=\"clinic-detail\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"clinic-name\" *ngIf=\"newDocAllData.clinic_details\">\n\t\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_clinicName\" > {{newDocAllData.clinic_details.clinic_name}} </h1>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"clinic-name\" *ngIf=\"!newDocAllData.clinic_details\">\n\t\t\t\t\t\t\t\t\t\t\t<h1 id=\"translated_clinicName\" >---</h1>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"newDocAllData.clinic_details\">{{newDocAllData.clinic_details.address}}, {{newDocAllData.clinic_details.area}}, {{newDocAllData.clinic_details.city}}, {{newDocAllData.clinic_details.state}}</li>\n\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"!newDocAllData.clinic_details\">-----</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"li-cstm\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"for-apt\" > For appointments </h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"newDocAllData.clinic_details\"> Tel: {{newDocAllData.clinic_details.std_code}}-{{newDocAllData.clinic_details.landline}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!newDocAllData.clinic_details\"> Tel: ---</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"newDocAllData.clinic_details\"> Mb: +91-{{newDocAllData.clinic_details.mobile}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"!newDocAllData.clinic_details\"> Mb: +91---</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p class=\"text-center\">\n\t\t\t\t\t\t\t\t<label id=\"translated_appointmentText\"> {{getHeaderText()}} </label>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div class=\"padview-body\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n\t\t\t\t\t\t\t\t\t<div class=\"emergency-wrap\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group emrgency-consult\" *ngIf=\"dispensedPatient.type=='Emergency'\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"small\" id=\"translated_emergencyText\"><i> Emergency Consultation </i> </p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group schdl\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Schedule: </h5>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<span><strong style=\"display:block; width:110px;\"> {{shift.day}}: </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.hour=='0'\">{{time.fromTime.hour}}0:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.hour!='0'\">{{time.fromTime.hour}}:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.minute=='0'\">{{time.fromTime.minute}}0 –</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.fromTime.minute!='0'\">{{time.fromTime.minute}} –</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.toTime.hour=='0'\">{{time.toTime.hour}}0:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.toTime.hour!='0'\">{{time.toTime.hour}}:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.toTime.minute=='0'\">{{time.toTime.minute}}0</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"time.toTime.minute!='0'\">{{time.toTime.minute}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<span><strong> {{shift.day}}: </strong> Closed \n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div id=\"translated_treatmentText\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Available Treatments: </h5>\n\t\t\t\t\t\t\t\t\t\t\t<ul style=\"padding-left:15px!important;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let treat of newGlobalArray.expertise\">{{treat.value}}</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"newGlobalArray.clinic_services_status=='Yes' && checkOptionOfPad('Available_services')\" id=\"translated_servicesText\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"color-blue\"> Available Services: </h5>\n\t\t\t\t\t\t\t\t\t\t\t<ul style=\"padding-left:15px!important;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"newGlobalArray.clinic_services.Clinic_Pharmacy\">Pharmacy</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"newGlobalArray.clinic_services.Clinic_IPD\">IPD</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let cs of newGlobalArray.clinic_services.ClinicServicesDetail\"> {{cs}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let cs of newGlobalArray.clinic_services.OtherClinicService\"> {{cs.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>                                   \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"padview-bodyright\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"padview-body-header\">\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Prescription ID </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\">{{prescription_id}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Name </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{dispensedPatient.pateintName}} </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Age/Sex </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\"> {{dispensedPatient.age}} {{dispensedPatient.gender}} </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Weight </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\" *ngIf=\"dispensedPatient.weight\"> {{dispensedPatient.weight}} Kg </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-underline\"> Height </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\" *ngIf=\"dispensedPatient.height\"> {{dispensedPatient.height}} cm </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"strong\">{{lastDate | date: 'dd/MMM/yyyy'}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"padview-patient\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"img-patient\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pateintPicPath}}{{dispensedPatient.pateintPic}}\" class=\"img-responsive\" *ngIf=\"dispensedPatient.pateintPic\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!dispensedPatient.pateintPic\"/>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"preConditionComplete==true && finalPreConditions?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_PreCondHeading\"> Existing health status </span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_BIHeading\"> Body Indicators</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"finalAllergy?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_allergyHeading\"> Allergy</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\" pat-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<div class=\"middle-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"findingsSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_PTHeading\"> Patient's Complaints</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of findingsSelected\"> {{data.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_sympHeading\"> Symptoms</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of symptomsSelected\"> {{data.value}} </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"number-div\" *ngIf=\" diagnosisSelected?.length>0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span id=\"translated_diagnosisHeading\"> Diagnosis</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of diagnosisSelected\">{{data.value}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\" *ngIf=\"medicationComplete==true\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"padview-medic\" id=\"translated_medication\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pat-heading\"><span> Medicines</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ol style=\"padding-left:10px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of tempMedicationArray\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info?.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info?.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info?.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info?.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info?.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info?.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.name=='Drops'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info?.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info?.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"flex-inner five-height vaccination\" *ngIf=\"vaccinationComplete==true\" data-target=\"#vaccinationModal\" data-toggle=\"modal\" data-dismiss=\"modal\">\n\t\t\t\t\t\t\t\t\t<div class=\"heading-wrap\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"heading-pad\" href=\"javascript:void(0)\" data-toggle=\"modal\" data-dismiss=\"modal\">\n\t\t\t\t\t\t\t\t\t\t\tVaccination \n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<span class=\"heading-delete\" (click)=\"$event.stopPropagation(); deleteAndResetSelectedDiv('Vaccination')\"> <i class=\"fa fa-times\"></i> </span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<ol *ngIf=\"currentVaccinationComplete == true\">\n\t\t\t\t\t\t\t\t\t\t<div>Current</div>\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let data of finalCurrentVaccinationArray\">{{data}}</li>\n\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t\t<ol *ngIf=\"dueVaccinationComplete == true\">\n                                                    <!-- <div class=\"li-blocked\">\n                                                        <li *ngIf=\"finalDueVaccinationArray.length>0\">\n                                                            <span><strong>Due </strong>                                    ({{vaccinationDate.toString().substr(4,11)}})\n                                                            </span>\n                                                        </li>\n                                                    </div> -->\n                                                    <!-- <div>Due <span *ngIf=\"vaccinationDate!=null\" style=\"float:left;font-weight: bold; padding-left:30px; text-align:right; font-size: 12px;\"></span>\n                                                    </div> -->\n                                                    <span *ngIf=\"finalDueVaccinationArray?.length>0\"><strong>Due </strong>({{vaccinationDate.toString().substr(4,11)}})\n                                                    </span>\n                                                    <li *ngFor=\"let data of finalDueVaccinationArray\">{{data}}</li>\n                                                </ol>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"third-body\">\n                                    \t<div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray?.length\">\n                                    \t\t<div class=\"pat-heading\"> <span id=\"translated_invHeading\"> Investigation</span> </div>\n                                    \t\t<ol class=\"numberol pl10\">\n                                    \t\t\t<li *ngFor=\"let data of investigationArray\">\n                                    \t\t\t\t<span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n                                    \t\t\t\t\t<span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n                                    \t\t\t\t\t\t<span *ngIf=\"i!=data.values?.length-1\">\\</span>\n                                    \t\t\t\t\t</span>\n                                    \t\t\t\t</span>\n                                    \t\t\t\t<span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n                                    \t\t\t\t\t<span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n                                    \t\t\t\t</span>\n                                    \t\t\t</li>\n                                    \t\t</ol>\n                                    \t</div>\n                                    \t<div class=\"number-div\" *ngIf=\"treatmentComplete==true\" id=\"translated_OTHeading\">\n                                    \t\t<div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n                                    \t\t<ul class=\"numberol\">\n                                    \t\t\t<li *ngFor=\"let data of treatmentArray;let i =index\">\n                                    \t\t\t\t<span *ngIf=\"data.name=='Lifestyle Changes'\">\n                                    \t\t\t\t\t{{data.name}} - <span *ngFor=\"let value of data.lifestyle;let j = index\">{{value.value}} <span *ngIf=\"j!=data.lifestyle?.length-1\">\\</span></span>\n                                    \t\t\t\t</span>\n                                    \t\t\t\t<span *ngIf=\"data.name=='Physiotherapy' || data.name=='Fomentation'\">\n                                    \t\t\t\t\t{{data.name}} - {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                                    \t\t\t\t</span>\n                                    \t\t\t\t<span *ngIf=\"data.name=='Plaster'\">\n                                    \t\t\t\t\t<span class=\"notranslate\">{{data.name}}</span> - on <span class=\"notranslate\">{{data.Injury_Area}}</span> of {{data.plaster_type}} for {{data.Duration}} days \n                                    \t\t\t\t</span>\n                                    \t\t\t\t<span *ngIf=\"data.name=='Gargle' || data.name=='Dressing' || data.name=='Bandage' || data.name=='Other'\">\n                                    \t\t\t\t\t<span *ngIf=\"data.name!='Other'\">{{data.name}} - </span>{{data.med_name[0].value}} {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                                    \t\t\t\t</span>\n                                    \t\t\t\t<span>\n                                    \t\t\t\t\t{{data.value}}\n                                    \t\t\t\t</span>\n                                    \t\t\t</li>\n                                    \t\t</ul>\n                                    \t</div>\n                                    </div>\n                                    <div class=\"note-box\">\n                                    \t<div class=\"note-innerbox\">\n                                    \t\t<div class=\"note-innerdiv\">\n                                    \t\t\t<div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray?.length>0\">\n                                    \t\t\t\t<div class=\"pat-heading\"> <span id=\"translated_surgHeading\"> Recommended Surgery</span> </div>\n                                    \t\t\t\t<ul class=\"numberol\">\n                                    \t\t\t\t\t<li *ngFor=\"let data of surgerySelectedArray\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n                                    \t\t\t\t</ul>\n                                    \t\t\t</div>\n                                    \t\t\t<div class=\"number-div\" *ngIf=\"refer_status\" style=\"padding:0 30px;\">\n                                    \t\t\t\t<div class=\"pat-heading\"> <span> Referred To</span> </div>\n                                    \t\t\t\t<p> {{referDetail.doctor_name | uppercase}} </p>\n                                    \t\t\t</div>\n                                    \t\t</div>\n                                    \t</div>\n                                    \t<div class=\"\" *ngIf=\"eyePresComplete==true\">\n                                    \t\t<div class=\"pat-heading\"> <span id=\"translated_eyeHeading\"> Eye Prescription</span> </div>\n                                    \t\t<div class=\"table-responsive\">\n                                    \t\t\t<table class=\"table table-bordered table-striped cstm-table\">\n                                    \t\t\t\t<thead>\n                                    \t\t\t\t\t<tr>\n                                    \t\t\t\t\t\t<th> Eye </th>\n                                    \t\t\t\t\t\t<th> Sphere </th>\n                                    \t\t\t\t\t\t<th> Cylinder </th>\n                                    \t\t\t\t\t\t<th> Axis </th>\n                                    \t\t\t\t\t\t<th> Add </th>\n                                    \t\t\t\t\t\t<th> PD (mm) </th>\n                                    \t\t\t\t\t</tr>\n                                    \t\t\t\t</thead>\n                                    \t\t\t\t<tbody>\n                                    \t\t\t\t\t<tr>\n                                    \t\t\t\t\t\t<td> Right (OD): </td>\n                                    \t\t\t\t\t\t<td> {{finalRightOD.sphere}} </td>\n                                    \t\t\t\t\t\t<td> {{finalRightOD.cylinder}} </td>\n                                    \t\t\t\t\t\t<td> {{finalRightOD.axis}} </td>\n                                    \t\t\t\t\t\t<td> {{finalRightOD.add}} </td>\n                                    \t\t\t\t\t\t<td> {{finalRightOD.pd}} </td>\n                                    \t\t\t\t\t</tr>\n                                    \t\t\t\t\t<tr>\n                                    \t\t\t\t\t\t<td> Left (OS): </td>\n                                    \t\t\t\t\t\t<td> {{finalLeftOD.sphere}} </td>\n                                    \t\t\t\t\t\t<td> {{finalLeftOD.cylinder}} </td>\n                                    \t\t\t\t\t\t<td> {{finalLeftOD.axis}} </td>\n                                    \t\t\t\t\t\t<td> {{finalLeftOD.add}} </td>\n                                    \t\t\t\t\t\t<td> {{finalLeftOD.pd}} </td>\n                                    \t\t\t\t\t</tr>\n                                    \t\t\t\t</tbody>\n                                    \t\t\t</table>\n                                    \t\t</div>\n                                    \t</div>\n                                    </div>\n                                    <div class=\"third-body\">\n                                    \t<div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n                                    \t\t<div class=\"pat-heading\"> <span> Follow Up</span></div>\n                                    \t\t<p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n                                    \t\t<p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n                                    \t</div>\n                                    </div>\n                                    <div class=\"forth-body\">\n                                    \t<div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n                                    \t\t<div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div>\n                                    \t</div>\n                                    \t<div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"padview-footer\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n                        \t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        \t\t<div class=\"padview-powered\">\n                        \t\t\t<div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n                        \t\t\t<div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com </div>\n                        \t\t</div>\n                        \t</div>\n                        \t<div class=\"col-md-12 col-sm-4 col-xs-12\" id=\"translated_footer\">\n                        \t\t<div class=\"legal\">\n                        \t\t\t<h3>{{getFooterText()}}</h3>\n                        \t\t</div>\n                        \t</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n\n\n<div class=\"modal fade cus-preview\" id=\"Test-report-Modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<!-- <button type=\"button\" class=\"pull-right btn-sm btn btn-custom\" > Print </button> -->\n\t\t\t\t<button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n\t\t\t\t<h4 class=\"modal-title\"> Test Report </h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" *ngIf=\"getTestReports.reportPics && getTestReports.reportPics?.length>0\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<div class=\"presc-modal-body\">\n\t\t\t\t\t\t\t<div *ngFor=\"let report of getTestReports.reportPics\" class=\"reportImg\">\n\t\t\t\t\t\t\t\t<img src=\"{{reportPic}}{{report}}\" class=\"img-responsive\"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".txt-muted {\n  color: #777; }\n\n.mdl-title {\n  color: #002060; }\n\n.cancel-wrap {\n  padding: 5px; }\n\n.cancel-wrap button.close {\n  font-size: 32px;\n  margin-right: 8px; }\n\n.cstm-tr-2 {\n  background-color: #cacaca; }\n\n.cstm-width {\n  display: table; }\n\n.cstm-tab {\n  min-height: 0.1px;\n  max-height: 500px;\n  overflow-y: scroll;\n  margin: 10px 22px; }\n\n.cusr {\n  cursor: pointer; }\n\n.btn-go-hm {\n  left: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { FormsModule,ReactiveFormsModule } from '@angular/forms';




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(formBuilder, userService, toastr) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.toastr = toastr;
        this.followUpDays = 0;
        this.finalfollowUpDays = 0;
        this.followUpDate = new Date();
        this.Form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required]);
        //this.getDoctor()
        this.admin = {};
        this.admin.landline = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.admin = {};
        this.admin.landline = 0;
        this.doctorData = [];
        this.newGlobalArray = [];
        this.getDoctor();
        this.newDocAllData = {};
        this.newDocAllData.qualification = [];
        this.newDocAllData.clinic_details = {};
        this.pateintPicPath = __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__["a" /* environment */].patientPic;
        this.reportPic = __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__["a" /* environment */].reportPic;
        var options = { month: 'short' };
        var today = new Date();
        this.month = today.toLocaleDateString("en-IN", options);
        this.day = new Date().getDate();
        this.year = new Date().getFullYear();
        this.numericMonth = new Date().getMonth() + 1;
        this.dataRegistration = [];
        this.dataAppointment = [];
        this.dataDispensedPatients = [];
        // this.lastVisit = []
        // this.countLastVisit = []
        this.dispensedPatient = {};
        this.getTestReports = {};
        //this.setAllShiftsForPreview()
    };
    HeaderComponent.prototype.checkPhone = function () {
        var value = $("#phoneNo").val();
        this.patientContact = value;
        console.log(value);
        if (value == '' || value == null || value == undefined || isNaN(value) || value.length < 10) {
            this.toastr.warning('Invalid phone number', 'Warning');
            return;
        }
        else {
            $("#show-otp").modal("show");
            this.GenerateOtp();
            $("#phoneNo").val('');
        }
    };
    HeaderComponent.prototype.getData = function () {
        var _this = this;
        this.patientList = [];
        var checkOtp = 0;
        checkOtp = $("#otpAbcd").val();
        if (parseInt(this.getFinalOtp) == checkOtp) {
            this.loading = true;
            var value = this.patientContact;
            var mobile = value;
            var ob = { mobile: mobile };
            //ob.phone = value
            // console.log(ob)
            this.userService.AllDispensePatientsHistory(ob).subscribe(function (data) {
                // console.log(data)
                if (data.response) {
                    for (var i = 0; i < data.arr.length; i++) {
                        // if(data.arr[i].registration.doctor_id.first_name){
                        _this.patientList.push(data.arr[i]);
                        // }
                    }
                    _this.toastr.success(data.message, 'Success');
                    $("#show-otp").modal("hide");
                    $("#show-list").modal("show");
                }
                _this.loading = false;
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.toastr.error('Wrong password', "Error");
        }
    };
    HeaderComponent.prototype.GenerateOtp = function () {
        var _this = this;
        var value = this.patientContact;
        // console.log(value)
        var phone = value;
        var ob = { phone: phone };
        //var varifyOtp
        var checkOtp = 0;
        checkOtp = $("#otpAbcd").val();
        // console.log(ob)
        // console.log(checkOtp)
        this.loading = true;
        this.userService.GenerateOtpForActiveDoctor(ob).subscribe(function (data) {
            // console.log(data)
            if (data.response == true) {
                _this.getFinalOtp = data.otpPhone;
                _this.toastr.success(data.message, "Success");
                $("#otpAbcd").val('');
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    HeaderComponent.prototype.getDoctor = function () {
        var _this = this;
        this.adminDocotrsArray = [];
        this.userService.GetAllDoctors().subscribe(function (data) {
            // console.log(data)
            _this.doctorData = data.data;
            // console.log(this.doctorData)
        }, function (err) {
            console.log(err);
        });
    };
    HeaderComponent.prototype.resendOTP = function () {
        this.GenerateOtp();
    };
    HeaderComponent.prototype.openPrescriptionPreview = function (data) {
        var _this = this;
        this.admin = {};
        this.uploadedPrescription = null;
        // console.log(data)
        this.prescription_id = data.prescription_id;
        this.uploadedPrescription = data.image;
        this.dispensedPatient = data.registration;
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
        this.lastDate = data.createdAt;
        this.followUpDate.setDate(new Date(data.createdAt).getDate() + this.finalfollowUpDays);
        //console.log(this.followUpDate)
        var options = { month: 'short' };
        this.followUpMonth = this.followUpDate.toLocaleDateString("en-IN", options);
        this.followUpDay = this.followUpDate.getDate();
        this.followUpYear = this.followUpDate.getFullYear();
        this.minutes = data.precription.minutes;
        this.seconds = data.precription.seconds;
        if (typeof data.doctor_id == 'object') {
            this.docName = data.doctor_id.first_name;
            this.docSpecialization = data.registration.doctor_id.specialization;
            this.newDocAllData = data.registration.doctor_id;
        }
        else {
            if (data.registration.doctor_id.clinic_name == null || data.registration.doctor_id.clinic_name == '' || data.registration.doctor_id.clinic_name == undefined) {
                for (var i = 0; i < this.doctorData.length; i++) {
                    if (this.doctorData[i]._id == data.doctor_id) {
                        this.docAffiliation =
                            this.docName = this.doctorData[i].first_name;
                        this.docSpecialization = this.doctorData[i].specialization;
                        //if(this.adminDocotrsArray)
                        this.newGlobalArray = this.doctorData[i];
                        this.userService.GetDoctorDetail(this.doctorData[i].itemId).subscribe(function (data) {
                            //console.log(data)
                            if (data.response == true) {
                                //this.dataIpd = data.dataIpd
                                for (var i = 0; i < data.doctorsOfSameClinic.length; i++) {
                                    if (data.doctorsOfSameClinic[i]) {
                                        if (data.doctorsOfSameClinic[i].type_of_doctor == "admin_doctor") {
                                            _this.admin = data.doctorsOfSameClinic[i];
                                            _this.newDocAllData = data.doctorsOfSameClinic[i];
                                            break;
                                        }
                                    }
                                }
                                // console.log("in the service",this.admin)
                                _this.newDocAllData = _this.admin;
                                // console.log(this.newDocAllData.clinic_details.landline)
                                // this.setAllShiftsForPreview(this.newGlobalArray)
                            }
                        }, function (err) {
                            console.log(err);
                        });
                        // console.log(this.admin)
                        // console.log(this.newDocAllData)
                        this.setAllShiftsForPreview();
                        // this.landlineNo = this.admin.clinic_details.landline
                        // this.clinicName = this.admin.clinic_details.clinic_name
                        // this.addressClinic = this.admin.clinic_details.address
                        // this.areaClinic = this.admin.clinic_details.area
                        // this.cityClinic = this.admin.clinic_details.city
                        // this.stateClinic = this.admin.clinic_details.state
                        //this.mobileClinic = this.admin.clinic_details.mobile
                        // this.newDocAllData = this.doctorData[i]
                        // console.log("in if condition" , this.newDocAllData)
                    }
                }
            }
            // console.log(this.newDocAllData)
            // console.log(this.newGlobalArray)
        }
        // this.languageOptionSelected = data.precription.languageOptionSelected
        //$("#show-list").modal("hide");
        if (this.uploadedPrescription) {
            $("#uploadedPrescriptionModal").modal("show");
        }
        else {
            $("#previewModal").modal("show");
        }
    };
    HeaderComponent.prototype.checkOptionOfPad = function (value) {
        // console.log(value)
        for (var i = 0; i < this.doctorData.length; i++) {
            if (!this.doctorData[i].pad_customization_options || this.doctorData[i].pad_customization_options.length < 1 || this.doctorData[i].pad_customization_options == "") {
                this.newDocData = this.doctorData[i].clinic_details.address;
                return true;
            }
            else {
                for (var i = 0; i < this.doctorData[i].pad_customization_options.length; i++) {
                    if (this.doctorData[i].pad_customization_options[i].value == value) {
                        if (this.doctorData[i].pad_customization_options[i].status == true) {
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
    HeaderComponent.prototype.getFooterText = function () {
        for (var i = 0; i < this.doctorData.length; i++) {
            if (!this.doctorData[i].pad_customization_options || this.doctorData[i].pad_customization_options.length < 1) {
                return "Not for Medico-Legal Purpose";
            }
            else {
                return this.doctorData[i].pad_customization_options[12].text;
            }
        }
    };
    HeaderComponent.prototype.getHeaderText = function () {
        for (var i = 0; i < this.doctorData.length; i++) {
            if (!this.doctorData[i].pad_customization_options || this.doctorData[i].pad_customization_options.length < 1) {
                return "PLEASE TAKE PRIOR APPOINTMENT";
            }
            else {
                return this.doctorData[i].pad_customization_options[8].text;
            }
        }
    };
    HeaderComponent.prototype.selectClass = function () {
        document.getElementById("parent").style.opacity = "0";
    };
    HeaderComponent.prototype.onHoverSignIn = function () {
        document.getElementById("parent").style.opacity = "1";
    };
    HeaderComponent.prototype.getDocNameList = function (id) {
        if (typeof id == 'object') {
            return id.first_name;
        }
        else {
            for (var i = 0; i < this.doctorData.length; i++) {
                if (this.doctorData[i]._id == id) {
                    return this.doctorData[i].first_name;
                }
            }
        }
    };
    HeaderComponent.prototype.setAllShiftsForPreview = function () {
        this.allShifts = [];
        var Mon = false;
        var Tue = false;
        var Wed = false;
        var Thu = false;
        var Fri = false;
        var Sat = false;
        var Sun = false;
        for (var i = 0; i < this.newGlobalArray.consultation_schedule.length; i++) {
            var string = '';
            if (this.newGlobalArray.consultation_schedule[i].Monday == true) {
                Mon = true;
                if (string == '') {
                    string = "Mon";
                }
                else {
                    string = string + ", " + "Mon";
                }
            }
            if (this.newGlobalArray.consultation_schedule[i].Tuesday == true) {
                Tue = true;
                if (string == '') {
                    string = "Tue";
                }
                else {
                    string = string + ", " + "Tue";
                }
            }
            if (this.newGlobalArray.consultation_schedule[i].Wednesday == true) {
                Wed = true;
                if (string == '') {
                    string = "Wed";
                }
                else {
                    string = string + ", " + "Wed";
                }
            }
            if (this.newGlobalArray.consultation_schedule[i].Thursday == true) {
                Thu = true;
                if (string == '') {
                    string = "Thu";
                }
                else {
                    string = string + ", " + "Thu";
                }
            }
            if (this.newGlobalArray.consultation_schedule[i].Friday == true) {
                Fri = true;
                if (string == '') {
                    string = "Fri";
                }
                else {
                    string = string + ", " + "Fri";
                }
            }
            if (this.newGlobalArray.consultation_schedule[i].Saturday == true) {
                Sat = true;
                if (string == '') {
                    string = "Sat";
                }
                else {
                    string = string + ", " + "Sat";
                }
            }
            if (this.newGlobalArray.consultation_schedule[i].Sunday == true) {
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
                shifts: this.newGlobalArray.consultation_schedule[i].shifts
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
    HeaderComponent.prototype.createPdf = function () {
        // console.log(this.dispensedPatient)
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
    HeaderComponent.prototype.createPdf1 = function (img) {
        // console.log(img);
        // console.log(this.dispensedPatient)
        $('#uploadedPrescriptionModalPDF').printThis({
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
    HeaderComponent.prototype.openReportPreview = function (data) {
        this.getTestReports = [];
        this.getTestReports = data.registration;
        // console.log(this.getTestReports.reportPics)
        $("#Test-report-Modal").modal("show");
    };
    HeaderComponent.prototype.checkReports = function (data) {
        if (data.registration.reportPics.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    HeaderComponent.prototype.checkPrescription = function (data) {
        if (data.precription) {
            return true;
        }
        else {
            return false;
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/shared/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/header/header.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ })

});
//# sourceMappingURL=header-one-layout.module.chunk.js.map