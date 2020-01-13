webpackJsonp(["header-six-layout.module"],{

/***/ "../../../../../src/app/header-six-layout/header-six-layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderSixLayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_six_layout_component__ = __webpack_require__("../../../../../src/app/header-six-layout/header-six-layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__header_six_layout_component__["a" /* HeaderSixLayoutComponent */],
        children: [
            { path: '', redirectTo: 'dashboard-diagnostic' },
            { path: 'dashboard-diagnostic', loadChildren: './dashboarddiagnostic/dashboarddiagnostic.module#DashboarddiagnosticModule' },
            { path: 'diagnostic-detail', loadChildren: './diagnosticdetail/diagnosticdetail.module#DiagnosticdetailModule' },
            { path: 'diagnostic-purchase', loadChildren: './diagnosticpurchase/diagnosticpurchase.module#DiagnosticpurchaseModule' },
            { path: 'sales-bookd', loadChildren: './salesbookd/salesbookd.module#SalesbookdModule' },
            { path: 'test-catalogue', loadChildren: './test-catalogue/test-catalogue.module#TestCatalogueModule' },
            { path: 'sales-entry-diagnostics', loadChildren: './salesentrydiagnostics/salesentrydiagnostics.module#SalesentrydiagnosticsModule' },
            { path: 'sales-by-diagnostics', loadChildren: './salesbydiagnostics/salesbydiagnostics.module#SalesbydiagnosticsModule' },
            { path: 'diagnostics-progress', loadChildren: './diagnosticsprogress/diagnosticsprogress.module#DiagnosticsprogressModule' },
        ]
    }
];
var HeaderSixLayoutRoutingModule = /** @class */ (function () {
    function HeaderSixLayoutRoutingModule() {
    }
    HeaderSixLayoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], HeaderSixLayoutRoutingModule);
    return HeaderSixLayoutRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-six-layout/header-six-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.cstm-caret {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 17.5px;\r\n    background-color: #01b0f0;\r\n    z-index: 9;\r\n    right: 20px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 12px dashed;\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n}\r\n.cstm-caret-big {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 22px;\r\n    background-color: #01b0f0;\r\n    z-index: 1;\r\n    right: 5px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 17px dashed;\r\n    border-right: 14px solid transparent;\r\n    border-left: 14px solid transparent;\r\n}\r\n.cstm-crt-wrap {\r\n    position: relative;\r\n}\r\n.regis-modal-body .select-opt .disabled {\r\n    color: #ddd;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-six-layout/header-six-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-headersix></app-headersix>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/header-six-layout/header-six-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderSixLayoutComponent; });
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


var HeaderSixLayoutComponent = /** @class */ (function () {
    function HeaderSixLayoutComponent(_spinner) {
        this._spinner = _spinner;
    }
    HeaderSixLayoutComponent.prototype.ngOnInit = function () {
    };
    HeaderSixLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // hide spinner once all loaders are completed
        __WEBPACK_IMPORTED_MODULE_1__theme_services__["a" /* BaThemePreloader */].load().then(function (values) {
            _this._spinner.hide();
        });
    };
    HeaderSixLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-six-layout',
            template: __webpack_require__("../../../../../src/app/header-six-layout/header-six-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-six-layout/header-six-layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__theme_services__["b" /* BaThemeSpinner */]])
    ], HeaderSixLayoutComponent);
    return HeaderSixLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-six-layout/header-six-layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSixLayoutModule", function() { return HeaderSixLayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_six_layout_routing_module__ = __webpack_require__("../../../../../src/app/header-six-layout/header-six-layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_six_layout_component__ = __webpack_require__("../../../../../src/app/header-six-layout/header-six-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_headersix_headersix_component__ = __webpack_require__("../../../../../src/app/shared/headersix/headersix.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HeaderSixLayoutModule = /** @class */ (function () {
    function HeaderSixLayoutModule() {
    }
    HeaderSixLayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__header_six_layout_routing_module__["a" /* HeaderSixLayoutRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_autocomplete__["a" /* MatAutocompleteModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__header_six_layout_component__["a" /* HeaderSixLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_headersix_headersix_component__["a" /* HeadersixComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__theme_services__["b" /* BaThemeSpinner */]]
        })
    ], HeaderSixLayoutModule);
    return HeaderSixLayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/headersix/headersix.component.html":
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\"> \n\t\n\ta.cstm-sb-menu:hover{\n\t\tcolor:#01b0f0!important;\n\t}\n</style>\n<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"headersidebar-wrap\" [ngClass]=\"nosidebar\" >\n\t<div class=\"dashboard-header\">\n\t\t<div class=\"dashboard-header-one\">\n\t\t\t<div class=\"close-dashboard-sidebar\">\n\t\t        <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarclose()\" >\n\t\t            <span class=\"icon-bar\"></span>\n\t\t            <span class=\"icon-bar\"></span>\n\t\t            <span class=\"icon-bar\"></span>\n\t\t        </button>\n\t\t    </div>\n\n\t\t    <div class=\"welcomename\">\n\t\t    \t{{headertitle}}\n\t\t    </div>\n\n\t\t    <div class=\"dashboard-signout\">\n\t\t    \t<a routerLink=\"/\" (click)=\"signOut()\"> Sign-out </a>\n\t\t    </div>\n\t\t</div>\n\n\t\t<div class=\"dashboard-header-two\" *ngIf=\"hideElement=='global'\">\n\t\t\t<div class=\"dashboard-header-logo\" routerLink=\"/header-six-layout/dashboard-diagnostic\">\n\t\t\t\t<img src=\"./assets/imgs/logoDoctm.png\" class=\"img-responsive\" />\n\t\t\t</div>\n\t\t\t<div class=\"dashboard-header-smartclinic\">\n\t\t\t\tSmartClinic\n\t\t\t\t<div class=\"fingertip-slogan\"> Clinic at your fingertips </div>\n\t\t\t</div>\n\t\t\t<div class=\"dashboard-subscription\">\n\t\t\t \t<p> Subscription expires on  </p>\n\t\t\t \t<p> 15<sup>th</sup> June, 2018 </p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"dashboard-header-two\" *ngIf=\"stock\">\n\t\t\t<div class=\"\">\n\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t<div class=\"dashboard-header-logo\" routerLink=\"/header-six-layout/dashboard-diagnostic\">\n\t\t\t\t\t\t<img src=\"./assets/imgs/logoDoctm.png\" class=\"img-responsive\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"diagnosticsDetail\">\n\t\t\t\t\t\t<div class=\"dshbrd-btn\">\n\t\t\t\t\t\t\t<button class=\"btn btn-custom\" routerLink=\"/header-six-layout/dashboard-diagnostic\"> Dashboard </button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-2 text-center\">\n                        <div class=\"main-date\">\n                            <h3 class=\"dt\">\n                                {{day}} {{month}} , {{year}}\n                                <small>\n                                    {{hoursIST}}:{{getMin()}}\n                                </small>\n                            </h3>\n                        </div>\n                    </div>\n\t\t\t\t<div class=\"col-lg-6\" >\n\t\t\t\t\t<div class=\"dashboard-subscription\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t<div class=\"dashboard-btns new-reg\" >\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-1\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#registrationForm\" routerLink=\"/header-six-layout/sales-entry-diagnostics\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus-square\"></i>\n\t\t\t\t\t\t\t\t\t\t<div>SALE ENTRY </div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t<div class=\"dashboard-btns\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-2\" routerLink=\"/header-six-layout/diagnostics-progress\">\n\t\t\t\t\t\t\t\t\t\t<div> PROGRESS </div>\n\t\t\t\t\t\t\t\t\t\t<div> TODAY </div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t<div class=\"dashboard-btns app-list\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-3\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#stck-prchse-header\">\n\t\t\t\t\t\t\t\t\t\t<div> RETURN </div>\n\t\t\t\t\t\t\t\t\t\t<div> SALE </div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"page-sidebar-wrapper\">\n\t\t<div id=\"bs-example-navbar-collapse-1\" class=\"dashbrd-sidbar navbar-collapse p-0\" >\n\n\t\t\t<ul class=\"dshbrd-sidebar-menu m-0 p-0\" type=\"none\">\n\n\t\t\t\t<li class=\"sidebar-item\">\n\t\t\t\t\t<a class=\"sidebar-link\" href=\"javascript:void(0);\" routerLink=\"/header-six-layout/diagnostic-detail\">\n\t\t\t\t\t\t<span class=\"title\"> Diagnostic Details </span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li class=\"sidebar-item\">\n\t\t\t\t\t<a class=\"sidebar-link\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#tst-entry\">\n\t\t\t\t\t\t<span class=\"title\"> Test Entry </span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li class=\"sidebar-item\">\n\t\t\t\t\t<a class=\"sidebar-link\" href=\"javascript:void(0);\" routerLink=\"/header-six-layout/test-catalogue\">\n\t\t\t\t\t\t<span class=\"title\"> Test Catalogue </span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li class=\"sidebar-item\">\n\t\t\t\t\t<a class=\"sidebar-link\" href=\"javascript:void(0);\" routerLink=\"/header-six-layout/sales-bookd\">\n\t\t\t\t\t\t<span class=\"title\"> Sales Book </span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"tst-entry\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"reset()\">&times;</button>\n\t\t\t\t<h4 class=\"modal-title text-center\">Make a Test Entry</h4>\n\t\t\t</div>\n\t\t\t<form [formGroup] = \"detailsForm\">\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<select  class=\"form-control\" class=\"form-control txtfield\" [(ngModel)]=\"reqData.category\" required=\"\"  [formControl]=\"detailsForm.controls['category']\" (change)=\"onChange($event)\">\n\t\t\t\t\t\t\t\t\t<option selected=\"\" value=\"\" disabled=\"\">Category</option>\n\t\t\t\t\t\t\t\t\t<option value=\"{{option}}\" *ngFor=\"let option of diagnosticsData.dataSmartDiagnostics.diagnostics_services\">{{option}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['category'].valid  && ( detailsForm.controls['category'].touched)\">Invalid Category !!!</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Test Name\" [(ngModel)]=\"reqData.testName\" required=\"\" [formControl]=\"detailsForm.controls['testName']\" (keyup)=\"onTextChange(reqData.category,$event.target.value)\" [matAutocomplete]=\"auto\">\n\t\t\t\t\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\" >\n                                  <mat-option *ngFor=\"let option of testNameSuggestion\" [value]=\"option\" >\n                                    {{option}}\n                                  </mat-option>\n                                </mat-autocomplete>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['testName'].valid  && ( detailsForm.controls['testName'].touched)\">Invalid Test Name !!!</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Rate\" pattern=\"[0-9]+\" [(ngModel)]=\"reqData.rate\" required=\"\"  [formControl]=\"detailsForm.controls['rate']\">\n\t\t\t\t\t\t\t</div><p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['rate'].valid  && ( detailsForm.controls['rate'].touched)\">Invalid Rate !!!</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" maxlength=\"3\" pattern=\"[0-9]+\" placeholder=\"Discount(%)\" [(ngModel)]=\"reqData.discount\" required=\"\"  [formControl]=\"detailsForm.controls['discount']\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['discount'].valid  && ( detailsForm.controls['discount'].touched)\">Invalid Discount !!!</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-12 text-center\">\n\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-grin\" type=\"submit\" [disabled]=\"!detailsForm.valid\" (click)=\"submitForm()\">SUBMIT\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n      <!--   <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div> -->\n  \t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/headersix/headersix.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-custom {\n  color: #002160;\n  position: relative;\n  padding: 8px 30px;\n  border-radius: 4px;\n  font-size: 18px;\n  min-width: 150px;\n  font-weight: 700;\n  text-transform: uppercase;\n  border: 1px solid #002160;\n  -webkit-transition: all 0.3s ease 0s;\n  transition: all 0.3s ease 0s;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12);\n          box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12); }\n\n.dashboard-btns button {\n  border-radius: 10px;\n  border: 1px solid #bdbdbd;\n  color: #fff;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12), inset 0 3px 3px rgba(255, 255, 255, 0.9);\n  -moz-box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12), inset 0 3px 3px rgba(255, 255, 255, 0.9);\n  -o-box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12), inset 0 3px 3px rgba(255, 255, 255, 0.9); }\n\n.dashboard-btns button:hover {\n  -webkit-box-shadow: 0 16px 26px -10px rgba(0, 34, 96, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2);\n          box-shadow: 0 16px 26px -10px rgba(0, 34, 96, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2); }\n\n.dashboard-btns button.btn-1 {\n  background: -webkit-gradient(linear, left bottom, left top, from(#86ad44), color-stop(#96c34e), to(#a1d253));\n  background: linear-gradient(to top, #86ad44, #96c34e, #a1d253); }\n\n.dashboard-btns button.btn-2 {\n  background: -webkit-gradient(linear, left bottom, left top, from(#39609d), color-stop(#4673bd), to(#4e7fd3));\n  background: linear-gradient(to top, #39609d, #4673bd, #4e7fd3); }\n\n.dashboard-btns button.btn.btn-custom.btn-3 {\n  background: -webkit-gradient(linear, left bottom, left top, from(#e27f2a), color-stop(#f68d2f), to(#fe9c34));\n  background: linear-gradient(to top, #e27f2a, #f68d2f, #fe9c34); }\n\n.cstm-caret {\n  display: inline-block;\n  width: 0;\n  cursor: pointer;\n  position: absolute;\n  height: 0;\n  margin-left: 4px;\n  color: #000;\n  top: 70.5px;\n  background-color: #01b0f0;\n  z-index: 9;\n  right: 20px;\n  margin-bottom: 9px;\n  vertical-align: middle;\n  border-top: 12px dashed;\n  border-right: 10px solid transparent;\n  border-left: 10px solid transparent; }\n\n.cstm-caret-big {\n  display: inline-block;\n  width: 0;\n  cursor: pointer;\n  position: absolute;\n  height: 0;\n  margin-left: 4px;\n  color: #000;\n  top: 22px;\n  background-color: #01b0f0;\n  z-index: 1;\n  right: 5px;\n  margin-bottom: 9px;\n  vertical-align: middle;\n  border-top: 17px dashed;\n  border-right: 14px solid transparent;\n  border-left: 14px solid transparent; }\n\n.cstm-crt-wrap {\n  position: relative; }\n\n.regis-modal-body .select-opt .disabled {\n  color: #ddd; }\n\n.select-doctor {\n  background-color: #01b0f0;\n  margin-top: 55px;\n  color: #fff;\n  margin-bottom: 15px; }\n\nh3.dt {\n  color: #416bb1; }\n\nh3.dt > span {\n  color: #000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/headersix/headersix.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadersixComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_mission_service__ = __webpack_require__("../../../../../src/app/providers/mission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HeadersixComponent = /** @class */ (function () {
    function HeadersixComponent(router, missionService, toastr, userService, formBuilder) {
        var _this = this;
        this.router = router;
        this.missionService = missionService;
        this.toastr = toastr;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                _this.diagnosticsData = JSON.parse(localStorage['smartDiagnosticsDetails']);
                _this.nosidebar = 'no-sidebar';
                _this.stock = true;
                if (event.url == '/header-six-layout/diagnostic-purchase') {
                    _this.headertitle = "Diagnostic Purchase Entry";
                    _this.stock = false;
                    _this.diagnosticsDetail = false;
                }
                else if (event.url == '/header-six-layout/diagnostic-detail') {
                    _this.headertitle = "Diagnostic  Details";
                    _this.stock = false;
                    _this.diagnosticsDetail = false;
                    // }else if (event.url == '/header-five-layout/purchase-book'){
                    //     this.headertitle = "Purchase Book"
                    //     this.stock = false
                    //     this.diagnosticsDetail = false
                    // }else if (event.url == '/header-five-layout/stock-valuation'){
                    //     this.headertitle = "Stock Valuation"
                    //     this.stock = false
                    //     this.diagnosticsDetail = false
                }
                else if (event.url == '/header-six-layout/sales-bookd') {
                    _this.headertitle = "Sales Book";
                    _this.stock = false;
                    _this.diagnosticsDetail = false;
                }
                else if (event.url == '/header-six-layout/test-catalogue') {
                    _this.headertitle = "Test Catalogue";
                    _this.stock = false;
                    _this.diagnosticsDetail = false;
                }
                else if (event.url == '/header-six-layout/dashboard-diagnostic') {
                    _this.headertitle = "SmartDiagnostic ";
                    _this.stock = true;
                    _this.diagnosticsDetail = false;
                }
                else if (event.url == '/header-six-layout/sales-entry-diagnostics') {
                    _this.headertitle = "Sales Entry Diagnostics ";
                    _this.stock = false;
                    _this.diagnosticsDetail = false;
                }
                else if (event.url == '/header-six-layout/sales-by-diagnostics') {
                    _this.headertitle = "Sales By Diagnostics ";
                    _this.stock = false;
                    _this.diagnosticsDetail = false;
                }
                else if (event.url == '/header-six-layout/diagnostics-progress') {
                    _this.headertitle = "Diagnostics Progress Today";
                    _this.diagnosticsDetail = false;
                    _this.stock = false;
                    // }else if (event.url == '/header-five-layout/sales-entry'){
                    //     this.headertitle = "Sales Entry"
                    //     this.stock = false
                    //     this.diagnosticsDetail = false
                    // } else if (event.url == '/header-five-layout/dashboard-diagnostics'){
                    //     for (var i = 0; i < this.diagnosticsData.doctorsRegisteredForSmartClinic.length; i++) {
                    //         if(this.diagnosticsData.doctorsRegisteredForSmartClinic[i].type_of_doctor == "admin_doctor"){
                    //             this.headertitle = "SmartDiagnostics "+ this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_details.clinic_name
                    //             break
                    //         }
                    //     }
                    //     this.diagnosticsDetail = false
                }
            }
        });
    }
    HeadersixComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reqData = {};
        this.reqData.category = "";
        this.reqData.testName = "";
        this.reqData.discount = 0;
        this.socket = __WEBPACK_IMPORTED_MODULE_7_socket_io_client__(__WEBPACK_IMPORTED_MODULE_6__environments_environment_prod__["a" /* environment */].socket);
        this.nosidebar = 'no-sidebar';
        $('[data-toggle="tooltip"]').tooltip();
        this.GetSmartDiagnosticsDataAfterLogin();
        this.detailsForm = this.formBuilder.group({
            'category': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required,])],
            'discount': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].minLength(0), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].maxLength(3), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].max(100)])],
            'rate': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*')])],
            'testName': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
        });
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
        this.testNameSuggestion = [];
    };
    HeadersixComponent.prototype.GetSmartDiagnosticsDataAfterLogin = function () {
        var _this = this;
        var object = {
            smart_diagnostics_id: this.diagnosticsData.dataSmartDiagnostics._id
        };
        this.userService.GetSmartDiagnosticsDataAfterLogin(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                var dataToStore = {
                    dataSmartDiagnostics: data.dataSmartDiagnostics,
                    doctorsRegisteredForSmartClinic: data.doctorsRegisteredForSmartClinic,
                    doctorsOfSameClinic: data.doctorsOfSameClinic
                };
                localStorage['smartDiagnosticsDetails'] = JSON.stringify(dataToStore);
                for (var i = 0; i < dataToStore.doctorsRegisteredForSmartClinic.length; i++) {
                    if (dataToStore.doctorsRegisteredForSmartClinic[i].type_of_doctor == "admin_doctor") {
                        _this.headertitle = "SmartDiagnostics " + dataToStore.doctorsRegisteredForSmartClinic[i].clinic_details.clinic_name;
                        break;
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeadersixComponent.prototype.openDropdown = function () {
        if (this.dropdownMenu == 'active') {
            this.dropdownMenu = '';
        }
        else {
            this.dropdownMenu = 'active';
        }
    };
    HeadersixComponent.prototype.sidebarclose = function () {
        if (this.nosidebar == 'no-sidebar') {
            this.nosidebar = '';
        }
        else {
            this.nosidebar = 'no-sidebar';
        }
    };
    HeadersixComponent.prototype.signOut = function () {
        this.socket.emit('logout', { 'doctor_id': this.diagnosticsData._id });
        localStorage.removeItem(localStorage['smartDiagnosticsDetails']);
        localStorage.removeItem('isLoggedinSmartDiagnostics');
        this.router.navigate(['/']);
    };
    HeadersixComponent.prototype.submitForm = function () {
        var _this = this;
        var object = {
            smart_diagnostics_id: this.diagnosticsData.dataSmartDiagnostics._id,
            category: this.reqData.category,
            name: this.reqData.testName,
            rate: this.reqData.rate,
            discount: this.reqData.discount
        };
        this.userService.AddTestBySmartDiagnostics(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                // $("#tst-entry").modal("hide");
                _this.toastr.success(data.message, "Success");
                _this.ngOnInit();
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeadersixComponent.prototype.reset = function () {
        this.detailsForm.reset();
        this.reqData = {};
        this.reqData.category = "";
        this.reqData.discount = 0;
    };
    HeadersixComponent.prototype.getCurrentTime = function () {
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        this.hoursIST = ISTTime.getHours();
        this.minutesIST = ISTTime.getMinutes();
    };
    HeadersixComponent.prototype.getMin = function () {
        if (this.minutesIST < 10) {
            return "0" + this.minutesIST;
        }
        else {
            return this.minutesIST;
        }
    };
    HeadersixComponent.prototype.onTextChange = function (type, suggestion) {
        var _this = this;
        var type;
        if (type == 'PATHOLOGY') {
            type = 'Pathology';
        }
        else if (type == 'ULTRASOUND') {
            type = 'Ultrasound';
        }
        else if (type == 'AUDIOMETRY') {
            type = 'Audiometry';
        }
        else if (type == 'BONE DENSITOMETRY') {
            type = 'Bone densitometry';
        }
        else if (type == 'DOPPLER STUDIES') {
            type = 'Doppler Studies';
        }
        else if (type == 'MAMMOGRAPHY') {
            type = 'Mammograaphy';
        }
        else if (type == 'UROFLOWMETRY') {
            type = 'Uroflowmetry';
        }
        else if (type == 'Nerve Test') {
            type = 'NERVE TEST';
        }
        else if (type == 'Eye Tests') {
            type = 'Eye Test';
        }
        this.testNameSuggestion = [];
        var object = {
            type: type,
            suggestion: suggestion
        };
        this.userService.SearchSuggestion(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.testNameSuggestion = data.data;
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeadersixComponent.prototype.onChange = function (event) {
        event = this.reqData.testName = "";
        event = this.testNameSuggestion = [];
    };
    HeadersixComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-headersix',
            template: __webpack_require__("../../../../../src/app/shared/headersix/headersix.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/headersix/headersix.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_mission_service__["a" /* MissionService */], __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__providers_mission_service__["a" /* MissionService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */]])
    ], HeadersixComponent);
    return HeadersixComponent;
}());



/***/ })

});
//# sourceMappingURL=header-six-layout.module.chunk.js.map