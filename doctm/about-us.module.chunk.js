webpackJsonp(["about-us.module"],{

/***/ "../../../../../src/app/header-one-layout/about-us/about-us-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_us_component__ = __webpack_require__("../../../../../src/app/header-one-layout/about-us/about-us.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__about_us_component__["a" /* AboutUsComponent */]
    }
];
var AboutUsRoutingModule = /** @class */ (function () {
    function AboutUsRoutingModule() {
    }
    AboutUsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AboutUsRoutingModule);
    return AboutUsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".abt-us{\r\n\tfloat: left;\r\n    width: 100%;\r\n    min-height: 100px;\r\n    padding-top: 20px;\r\n    position: relative;\r\n    background-color: #142260;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n.abt-us::after {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    content: \"\";\r\n    z-index: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(11, 74, 97, 0.36);\r\n}\r\n.abt-us h3{\r\n\tcolor: #fff;\r\n    position: relative;\r\n    z-index: 10;\r\n    text-align: center;\r\n}\r\n.abt-txt{\r\n\tpadding: 25px 0px;\r\n\tfloat: left;\r\n\twidth: 100%;\r\n}\r\n.high-color{\r\n\tcolor:#00b0f0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-one-layout/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<section class=\"abt-us\" style=\"background-image: url('./assets/imgs/slider-1.jpg');\">\n    <h3>About Us</h3>\n</section>\n<section class=\"abt-txt\">\n\t<div class=\"container text-center\">\n\t\t<!-- <h3 class=\"high-color\">Lorem Ispum</h3> -->\n\t\t<div innerHtml=\"{{getData}}\"></div>\n\t\t<!-- <p>\n\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t</p>\n\t\t<h3 class=\"high-color\">Lorem Ispum</h3>\n\t\t<p>\n\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t</p>\n\t\t<h3 class=\"high-color\">Lorem Ispum</h3>\n\t\t<p>\n\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t</p> -->\n\t</div>\n\t\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/header-one-layout/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
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



var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(toastr, userService) {
        this.toastr = toastr;
        this.userService = userService;
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        this.getFaq();
    };
    AboutUsComponent.prototype.getFaq = function () {
        var _this = this;
        //this.getFaqData =[]
        this.loading = true;
        this.userService.AboutUs().subscribe(function (data) {
            console.log(data);
            _this.getData = data.data.content;
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__("../../../../../src/app/header-one-layout/about-us/about-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-one-layout/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/about-us/about-us.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsModule", function() { return AboutUsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_us_component__ = __webpack_require__("../../../../../src/app/header-one-layout/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_us_routing_module__ = __webpack_require__("../../../../../src/app/header-one-layout/about-us/about-us-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutUsModule = /** @class */ (function () {
    function AboutUsModule() {
    }
    AboutUsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__about_us_routing_module__["a" /* AboutUsRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__about_us_component__["a" /* AboutUsComponent */]]
        })
    ], AboutUsModule);
    return AboutUsModule;
}());



/***/ })

});
//# sourceMappingURL=about-us.module.chunk.js.map