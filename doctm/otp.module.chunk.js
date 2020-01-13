webpackJsonp(["otp.module"],{

/***/ "../../../../../src/app/header-one-layout/otp/otp-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp_component__ = __webpack_require__("../../../../../src/app/header-one-layout/otp/otp.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__otp_component__["a" /* OtpComponent */]
    }
];
var OtpRoutingModule = /** @class */ (function () {
    function OtpRoutingModule() {
    }
    OtpRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], OtpRoutingModule);
    return OtpRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/otp/otp.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-one-layout/otp/otp.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login-sec\">\n\n\t<div class=\"container p-0\">\n\n\t\t<div class=\"login-panel\">\n\t\t\t<div class=\"col-md-offset-1 col-md-10 col-sm-12 col-xs-12\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<div class=\"login-left\">\n\t\t\t\t\t\t\t<h1> Welcome !</h1>\n\t\t\t\t\t\t\t<h1> to </h1> \n\t\t\t\t\t\t\t<h1> doctm </h1> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"m-t-40 col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<div class=\"login-right text-center\">\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t<input id=\"field1\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" />\n\t\t\t\t\t\t\t\t\t<label for=\"field1\" class=\"labelFloat\"> Please Enter the OTP received on your device. </label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n\t\t\t\t    \t\t\t<button class=\"btn btn-custom\" type=\"submit\"> Regenerate OTP </button>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n\t\t\t\t    \t\t\t<button class=\"btn btn-custom\" type=\"submit\"> Submit </button>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/header-one-layout/otp/otp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpComponent; });
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

var OtpComponent = /** @class */ (function () {
    function OtpComponent() {
    }
    OtpComponent.prototype.ngOnInit = function () {
    };
    OtpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-otp',
            template: __webpack_require__("../../../../../src/app/header-one-layout/otp/otp.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-one-layout/otp/otp.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OtpComponent);
    return OtpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/otp/otp.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpModule", function() { return OtpModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp_routing_module__ = __webpack_require__("../../../../../src/app/header-one-layout/otp/otp-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__otp_component__ = __webpack_require__("../../../../../src/app/header-one-layout/otp/otp.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OtpModule = /** @class */ (function () {
    function OtpModule() {
    }
    OtpModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__otp_routing_module__["a" /* OtpRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__otp_component__["a" /* OtpComponent */]]
        })
    ], OtpModule);
    return OtpModule;
}());



/***/ })

});
//# sourceMappingURL=otp.module.chunk.js.map