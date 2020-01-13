webpackJsonp(["faq.module"],{

/***/ "../../../../../src/app/header-one-layout/faq/faq-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_component__ = __webpack_require__("../../../../../src/app/header-one-layout/faq/faq.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__faq_component__["a" /* FaqComponent */]
    }
];
var FaqRoutingModule = /** @class */ (function () {
    function FaqRoutingModule() {
    }
    FaqRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], FaqRoutingModule);
    return FaqRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/faq/faq.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-example{\r\n\tmargin-top:10px;\r\n\tmin-height:300px;\r\n\tmax-height:300px; \r\n\toverflow-x: hidden;\r\n    margin: 20px;\r\n    overflow-y: scroll;\r\n}\r\n.panel-heading{\r\n\tpadding:0px; \r\n}\r\n.panel-heading h4 a:hover,\r\n.panel-heading h4 a:active,\r\n.panel-heading h4 a:focus{\r\n\ttext-decoration: none;\r\n}\r\n.panel-heading h4 a{\r\n\tpadding: 10px 15px;\r\n\twidth:100%;\r\n\tdisplay: block;\r\n}\r\n.panel-default > .panel-heading {\r\n    color: #fff;\r\n    background-color: #00b0f0;\r\n    border-color: #ddd;\r\n}\r\n.bs-example{\r\n    \tmargin: 20px;\r\n    }\r\n.rotate{\r\n\t-webkit-transition: 300ms;\r\n\ttransition: 300ms;\r\n\t-webkit-transform: rotate(90deg);  /* Chrome, Safari, Opera */  /* Firefox */  /* IE 9 */\r\n\ttransform: rotate(90deg);  /* Standard syntax */    \r\n }\r\na[data-toggle=\"collapse\"]{\r\n\tposition: relative;\r\n}\r\na[data-toggle=\"collapse\"] span{\r\n\tposition: absolute;\r\n\ttop:10px;\r\n\tright:12px;\r\n\t-webkit-transition:200ms;\r\n\ttransition:200ms;\r\n}\r\n/*\r\n@media only screen and (min-width:1900px) and (max-width: 9500px){\r\n   body #ftr{\r\n        position: fixed!important;\r\n        bottom: 0!important;\r\n    }\r\n}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-one-layout/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"container\">\n <div class=\"row\">\n \t<div class=\"col-lg-12\">\n \t\t<h3 class=\"text-center\">FAQ</h3>\n \t</div>\n \t<div class=\"col-lg-12\">\n \t\t<div class=\"bs-example\" style=\"max-height: unset; overflow: unset;\">\n\t\t    <div class=\"panel-group\" id=\"accordion\">\n\t\t        <div class=\"panel panel-default\" *ngFor = \"let list of getFaqData; let i= index \">\n\t\t            <div class=\"panel-heading\">\n\t\t                <h4 class=\"panel-title\">\n\t\t                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=#{{i+1}}><span class=\"glyphicon glyphicon-menu-right\"></span> {{i+1}} &nbsp;{{list.question}}</a>\n\t\t                </h4>\n\t\t            </div>\n\t\t            <div id={{i+1}} class=\"panel-collapse collapse\">\n\t\t                <div class=\"panel-body\">\n\t\t                    <p>{{list.answer}}</p>\n\t\t                </div>\n\t\t            </div>\n\t\t        </div>\n\t\t        \n\t\t    </div>\n\t\t</div>\n \t</div>\n </div>\n</div>\n    \n\n"

/***/ }),

/***/ "../../../../../src/app/header-one-layout/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaqComponent = /** @class */ (function () {
    function FaqComponent(toastr, userService) {
        this.toastr = toastr;
        this.userService = userService;
    }
    FaqComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            // Add minus icon for collapse element which is open by default
            $(".collapse.in").each(function () {
                $(this).siblings(".panel-heading").find(".glyphicon").addClass("rotate");
            });
            // Toggle plus minus icon on show hide of collapse element
            $(".collapse").on('show.bs.collapse', function () {
                $(this).parent().find(".glyphicon").addClass("rotate");
            }).on('hide.bs.collapse', function () {
                $(this).parent().find(".glyphicon").removeClass("rotate");
            });
        });
        this.getFaq();
    };
    FaqComponent.prototype.getFaq = function () {
        var _this = this;
        this.getFaqData = [];
        this.loading = true;
        this.userService.GetFaq().subscribe(function (data) {
            console.log(data);
            _this.getFaqData = data.data;
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__("../../../../../src/app/header-one-layout/faq/faq.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-one-layout/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/faq/faq.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqModule", function() { return FaqModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_component__ = __webpack_require__("../../../../../src/app/header-one-layout/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faq_routing_module__ = __webpack_require__("../../../../../src/app/header-one-layout/faq/faq-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FaqModule = /** @class */ (function () {
    function FaqModule() {
    }
    FaqModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__faq_routing_module__["a" /* FaqRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__faq_component__["a" /* FaqComponent */]]
        })
    ], FaqModule);
    return FaqModule;
}());



/***/ })

});
//# sourceMappingURL=faq.module.chunk.js.map