webpackJsonp(["share.module"],{

/***/ "../../../../../src/app/header-two-layout/share/share-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_component__ = __webpack_require__("../../../../../src/app/header-two-layout/share/share.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__share_component__["a" /* ShareComponent */]
    }
];
var ShareRoutingModule = /** @class */ (function () {
    function ShareRoutingModule() {
    }
    ShareRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ShareRoutingModule);
    return ShareRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/share/share.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*chkbox*/\n/* The container */\n.cstm-checkbox {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 18px;\n  cursor: pointer;\n  font-size:12px;\n  text-transform: uppercase;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/* Hide the browser's default radio button */\n.cstm-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n/* Create a custom radio button */\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height:18px;\n  width: 18px;\n  background-color: #eee;\n  border-radius: 50%;\n}\n/* On mouse-over, add a grey background color */\n.cstm-checkbox:hover input ~ .checkmark {\n  background-color: #ccc;\n}\n/* When the radio button is checked, add a blue background */\n.cstm-checkbox input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n/* Create the indicator (the dot/circle - hidden when not checked) */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n/* Show the indicator (dot/circle) when checked */\n.cstm-checkbox input:checked ~ .checkmark:after {\n  display: block;\n}\n/* Style the indicator (dot/circle) */\n.cstm-checkbox .checkmark:after {\n \ttop: 5px;\n\tleft: 5px;\n\twidth: 8px;\n\theight: 8px;\n\tborder-radius: 50%;\n\tbackground: white;\n}\nsmall.fader{\n\tcolor:#868686;\n\tpadding-left: 8px;\n    font-weight: normal;\n}\n.mg-t-0{\n\tmargin-top: 0px;\n}\n.thm-clr{\n\tcolor: #00b0f0;\n}\n.footer-cstm-an{\n\tposition: fixed;\n    float: left;\n    width: 100%;\n    bottom: 0;\n    background: #fff;\n    border-top: 1px solid #d6d6d6;\n    padding-top: 8px;\n}\n.btn-cstm{\n\tbackground-color: #00b0f0;\n\tborder-radius: 6px;\n\tcolor:#000;\n\t-webkit-box-shadow: none;\n\t        box-shadow: none;\n\tmargin-bottom:8px; \n\tpadding: 7px 22px;\n}\n/**/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/share/share.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-lg-offset-3\">\n            <form [formGroup]=\"sendSmsForm\">\n                <br><br><br><br>\n                <div class=\"row\">\n                    <div class=\"col-lg-1\">\n                        <div style=\"margin-top: 10px;font-size: 18px;\">+91</div>\n                    </div>\n                \t<div class=\"col-lg-5\">\n                        <div class=\"cstm-input\">\n\n                            <input type=\"text\" name=\"\" placeholder=\"Enter Mobile Number\" class=\"form-control input-lg\" minlength=\"10\" maxlength=\"10\" pattern=\"[0-9]+\" [(ngModel)] = \"smsDetails.phone\" [formControl]=\"sendSmsForm.controls['phone']\">\n                           <p style=\"color: #FF0000\" *ngIf=\"!sendSmsForm.controls['phone'].valid  && (sendSmsForm.controls['phone'].touched)\">Invalid phone number !!!</p>\n                        </div>\n                    </div>\n                   \n                    <div class=\"col-lg-1\">\n                         <div style=\"margin-top: 10px;font-size: 18px;\">or</div>\n                    </div>\n                    <div class=\"col-lg-5\">\n                        <div class=\"cstm-input\">\n                            <input id=\"field2\" type=\"text\" class=\"form-control input-lg\" value = 96855 name=\"\" placeholder=\"Enter Email\" [(ngModel)]=\"smsDetails.email\" [formControl]=\"sendSmsForm.controls['email1']\" />\n                            <p style=\"color: #FF0000\" *ngIf=\"!sendSmsForm.controls['email1'].valid  && ( sendSmsForm.controls['email1'].touched)\">Invalid email ID !!!</p>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12 col-xs-12\">\n                        <br>\n                    \t<div class=\"form-group\">\n\t\t\t\t\t\t  <label for=\"comment\">Message:</label>\n\t\t\t\t\t\t  <textarea class=\"form-control\" rows=\"11\" disabled=\"\" id=\"comment\" [(ngModel)] = \"smsDetails.message\" [formControl]=\"sendSmsForm.controls['message']\" style=\"display:none\"></textarea>\n\t\t\t\t\t\t  <div style=\"border:1px solid #c1c1c1;padding:8px; text-align:justify\">Check out this amazing medical practice platform for your clinic. Its <b>easy-to-use, \nsecure</b> and <b>fully customizable</b> to your needs. It integrates all your clinic services not only to deliver best patient experience but also to keep you fully informed anytime, anywhere. You can <a href='javascript:void(0);'>Download</a> the app from the playstore or register yourself on <a href='https://mydoctm.com' target=\"_blank\">https://mydoctm.com</a></div>\n\t\t\t\t\t\t  <p style=\"color: #FF0000\" *ngIf=\"!sendSmsForm.controls['message'].valid  && (sendSmsForm.controls['message'].touched)\">Invalid message !!!</p>\n\t\t\t\t\t\t</div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<div class=\"container footer-cstm-an\">\n    <div class=\"row\">\n<!--         <div class=\"col-lg-6 text-center\">\n        </div> -->\n        <div class=\"col-lg-12 text-center\">\n            <div>\n                <button class=\"btn btn-cstm\" [disabled]=\"!sendSmsForm.valid\" (click)=\"sendSMS()\">SEND</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/share/share.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareComponent; });
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





var ShareComponent = /** @class */ (function () {
    function ShareComponent(toastr, formBuilder, userService, router) {
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
    }
    ShareComponent.prototype.ngOnInit = function () {
        this.smsDetails = {};
        this.smsDetails.message = "Check out this amazing medical practice platform for your clinic. Its easy-to-use, secure and fully customizable to your needs. It integrates all your clinic services not only to deliver best patient experience but also to keep you fully informed anytime, anywhere. You can Download the app from the playstore or register yourself on https://mydoctm.com";
        this.sendSmsForm = this.formBuilder.group({
            'phone': [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(10),])],
            'email1': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
            'message': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'abcd': [],
        });
    };
    ShareComponent.prototype.sendSMS = function () {
        var _this = this;
        var value = $("#phoneNo").val();
        console.log(value);
        if (this.smsDetails.phone == '' || this.smsDetails.phone == undefined
            || this.smsDetails.phone == null || this.smsDetails.phone.length < 10 || isNaN(this.smsDetails.phone)) {
            if (this.smsDetails.email == '' || this.smsDetails.email == undefined || this.smsDetails.email == null || this.smsDetails.email.trim().length < 1) {
                this.toastr.warning('Invalid phone number or email', "Warning");
                return;
            }
        }
        console.log(this.smsDetails);
        this.userService.ShareByDoctor(this.smsDetails).subscribe(function (data) {
            console.log(data);
            if (data.response) {
                _this.toastr.success(data.message, 'Success');
                _this.router.navigateByUrl('/header-two-layout/dashboard');
            }
            else {
                _this.toastr.error(data.message, 'Error');
            }
        }, function (err) {
            console.log(err);
        });
    };
    ShareComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-share',
            template: __webpack_require__("../../../../../src/app/header-two-layout/share/share.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/share/share.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], ShareComponent);
    return ShareComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/share/share.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_component__ = __webpack_require__("../../../../../src/app/header-two-layout/share/share.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/share/share-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    ShareModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__share_routing_module__["a" /* ShareRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__share_component__["a" /* ShareComponent */]]
        })
    ], ShareModule);
    return ShareModule;
}());



/***/ })

});
//# sourceMappingURL=share.module.chunk.js.map