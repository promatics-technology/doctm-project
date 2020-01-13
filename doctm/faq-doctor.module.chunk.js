webpackJsonp(["faq-doctor.module"],{

/***/ "../../../../../src/app/header-two-layout/faq-doctor/faq-doctor-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqDoctorRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_doctor_component__ = __webpack_require__("../../../../../src/app/header-two-layout/faq-doctor/faq-doctor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__faq_doctor_component__["a" /* FaqDoctorComponent */]
    }
];
var FaqDoctorRoutingModule = /** @class */ (function () {
    function FaqDoctorRoutingModule() {
    }
    FaqDoctorRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], FaqDoctorRoutingModule);
    return FaqDoctorRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/faq-doctor/faq-doctor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-example{\n\tmargin-top:10px;\n\tmin-height:300px;\n\tmax-height:300px; \n\toverflow-x: hidden;\n    margin: 20px;\n    overflow-y: scroll;\n}\n.panel-heading{\n\tpadding:0px; \n}\n.panel-heading h4 a:hover,\n.panel-heading h4 a:active,\n.panel-heading h4 a:focus{\n\ttext-decoration: none;\n}\n.panel-heading h4 a{\n\tpadding: 10px 15px;\n\twidth:100%;\n\tdisplay: block;\n}\n.panel-default > .panel-heading {\n    color: #fff;\n    background-color: #00b0f0;\n    border-color: #ddd;\n}\n.bs-example{\n    \tmargin: 20px;\n    }\n.rotate{\n\t-webkit-transition: 300ms;\n\ttransition: 300ms;\n\t-webkit-transform: rotate(90deg);  /* Chrome, Safari, Opera */  /* Firefox */  /* IE 9 */\n\ttransform: rotate(90deg);  /* Standard syntax */    \n }\na[data-toggle=\"collapse\"]{\n\tposition: relative;\n}\na[data-toggle=\"collapse\"] span{\n\tposition: absolute;\n\ttop:10px;\n\tright:12px;\n\t-webkit-transition:200ms;\n\ttransition:200ms;\n}\n/*\n@media only screen and (min-width:1900px) and (max-width: 9500px){\n   body #ftr{\n        position: fixed!important;\n        bottom: 0!important;\n    }\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/faq-doctor/faq-doctor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"container cont-cstm\">\n <div class=\"row\">\n \t<!-- <div class=\"col-lg-12\">\n \t\t<h3 class=\"text-center\">FAQ</h3>\n \t</div> -->\n \t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n \t\t<div class=\"bs-example\">\n\t\t    <div class=\"panel-group\" id=\"accordion\">\n\t\t        <div class=\"panel panel-default\" *ngFor = \"let list of getFaqData; let i= index \">\n\t\t            <div class=\"panel-heading\">\n\t\t                <h4 class=\"panel-title\">\n\t\t                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=#{{i+1}}><span class=\"glyphicon glyphicon-menu-right\"></span> {{i+1}} &nbsp;{{list.question}}</a>\n\t\t                </h4>\n\t\t            </div>\n\t\t            <div id={{i+1}} class=\"panel-collapse collapse\">\n\t\t                <div class=\"panel-body\">\n\t\t                    <p>{{list.answer}}</p>\n\t\t                </div>\n\t\t            </div>\n\t\t        </div>\n\t\t        <!-- <div class=\"panel panel-default\">\n\t\t            <div class=\"panel-heading\">\n\t\t                <h4 class=\"panel-title\">\n\t\t                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\"><span class=\"glyphicon glyphicon-menu-right\"></span> 2. Lorem Ipsum</a>\n\t\t                </h4>\n\t\t            </div>\n\t\t            <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n\t\t                <div class=\"panel-body\">\n\t\t                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\t\t                </div>\n\t\t            </div>\n\t\t        </div>\n\t\t        <div class=\"panel panel-default\">\n\t\t            <div class=\"panel-heading\">\n\t\t                <h4 class=\"panel-title\">\n\t\t                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\"><span class=\"glyphicon glyphicon-menu-right\"></span> 3. Lorem Ipsum</a>\n\t\t                </h4>\n\t\t            </div>\n\t\t            <div id=\"collapseThree\" class=\"panel-collapse collapse\">\n\t\t                <div class=\"panel-body\">\n\t\t                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>\n\t\t                </div>\n\t\t            </div>\n\t\t        </div>\n\t\t         <div class=\"panel panel-default\">\n\t\t            <div class=\"panel-heading\">\n\t\t                <h4 class=\"panel-title\">\n\t\t                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\"><span class=\"glyphicon glyphicon-menu-right\"></span> 4. Lorem Ipsum</a>\n\t\t                </h4>\n\t\t            </div>\n\t\t            <div id=\"collapse3\" class=\"panel-collapse collapse\">\n\t\t                <div class=\"panel-body\">\n\t\t                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\t\t                </div>\n\t\t            </div>\n\t\t        </div> -->\n\t\t    </div>\n\t\t</div>\n \t</div>\n </div>\n</div>\n    \n\n"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/faq-doctor/faq-doctor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqDoctorComponent; });
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



var FaqDoctorComponent = /** @class */ (function () {
    function FaqDoctorComponent(toastr, userService) {
        this.toastr = toastr;
        this.userService = userService;
    }
    FaqDoctorComponent.prototype.ngOnInit = function () {
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
    FaqDoctorComponent.prototype.getFaq = function () {
        var _this = this;
        this.getFaqData = [];
        this.loading = true;
        this.userService.GetFaqForDoctor().subscribe(function (data) {
            console.log(data);
            _this.getFaqData = data.data;
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    FaqDoctorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq-doctor',
            template: __webpack_require__("../../../../../src/app/header-two-layout/faq-doctor/faq-doctor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/faq-doctor/faq-doctor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */]])
    ], FaqDoctorComponent);
    return FaqDoctorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/faq-doctor/faq-doctor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqDoctorModule", function() { return FaqDoctorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_doctor_component__ = __webpack_require__("../../../../../src/app/header-two-layout/faq-doctor/faq-doctor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faq_doctor_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/faq-doctor/faq-doctor-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FaqDoctorModule = /** @class */ (function () {
    function FaqDoctorModule() {
    }
    FaqDoctorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__faq_doctor_routing_module__["a" /* FaqDoctorRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__faq_doctor_component__["a" /* FaqDoctorComponent */]]
        })
    ], FaqDoctorModule);
    return FaqDoctorModule;
}());



/***/ })

});
//# sourceMappingURL=faq-doctor.module.chunk.js.map