webpackJsonp(["privacy-policy.module"],{

/***/ "../../../../../src/app/header-one-layout/privacy-policy/privacy-policy-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacy_policy_component__ = __webpack_require__("../../../../../src/app/header-one-layout/privacy-policy/privacy-policy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__privacy_policy_component__["a" /* PrivacyPolicyComponent */]
    }
];
var PrivacyPolicyRoutingModule = /** @class */ (function () {
    function PrivacyPolicyRoutingModule() {
    }
    PrivacyPolicyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PrivacyPolicyRoutingModule);
    return PrivacyPolicyRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/privacy-policy/privacy-policy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".abt-us{\r\n\tfloat: left;\r\n    width: 100%;\r\n    min-height: 100px;\r\n    padding-top: 20px;\r\n    position: relative;\r\n    background-color: #142260;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n.abt-us::after {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    content: \"\";\r\n    z-index: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(11, 74, 97, 0.36);\r\n}\r\n.abt-us h3{\r\n\tcolor: #fff;\r\n    position: relative;\r\n    z-index: 10;\r\n    text-align: center;\r\n}\r\n.wrap-txt {\r\n    padding: 25px;\r\n    text-align: justify;\r\n    border: 5px solid #002060;\r\n    margin:45px 0px; \r\n}\r\n.high-color{\r\n    color:#00b0f0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-one-layout/privacy-policy/privacy-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"abt-us\" style=\"background-image: url('./assets/imgs/slider-1.jpg');\">\n\t<h3>Privacy Policy</h3>\n</section>\n\n<div class=\"col-lg-8 col-lg-offset-2\">\n\t<div class=\"wrap-txt\">\n\t\t<div innerHtml=\"{{getData}}\"></div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-one-layout/privacy-policy/privacy-policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent(toastr, userService) {
        this.toastr = toastr;
        this.userService = userService;
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        this.getFaq();
    };
    PrivacyPolicyComponent.prototype.getFaq = function () {
        var _this = this;
        //this.getFaqData =[]
        this.loading = true;
        this.userService.PrivacyPolicy().subscribe(function (data) {
            console.log(data);
            _this.getData = data.data.content;
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    PrivacyPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__("../../../../../src/app/header-one-layout/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-one-layout/privacy-policy/privacy-policy.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */]])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/privacy-policy/privacy-policy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyModule", function() { return PrivacyPolicyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacy_policy_component__ = __webpack_require__("../../../../../src/app/header-one-layout/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__privacy_policy_routing_module__ = __webpack_require__("../../../../../src/app/header-one-layout/privacy-policy/privacy-policy-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PrivacyPolicyModule = /** @class */ (function () {
    function PrivacyPolicyModule() {
    }
    PrivacyPolicyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__privacy_policy_routing_module__["a" /* PrivacyPolicyRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__privacy_policy_component__["a" /* PrivacyPolicyComponent */]]
        })
    ], PrivacyPolicyModule);
    return PrivacyPolicyModule;
}());



/***/ })

});
//# sourceMappingURL=privacy-policy.module.chunk.js.map