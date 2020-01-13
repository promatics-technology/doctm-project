webpackJsonp(["header-five-layout.module"],{

/***/ "../../../../../src/app/header-five-layout/header-five-layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderFiveLayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_five_layout_component__ = __webpack_require__("../../../../../src/app/header-five-layout/header-five-layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__header_five_layout_component__["a" /* HeaderFiveLayoutComponent */],
        children: [
            { path: '', redirectTo: 'dashboard-pharmacy' },
            { path: 'dashboard-pharmacy', loadChildren: './dashboardpharmacy/dashboardpharmacy.module#DashboardpharmacyModule' },
            { path: 'pharmacy-detail', loadChildren: './pharmacydetail/pharmacydetail.module#PharmacydetailModule' },
            { path: 'stock-purchase', loadChildren: './stockpurchase/stockpurchase.module#StockpurchaseModule' },
            { path: 'purchase-book', loadChildren: './purchasebook/purchasebook.module#PurchasebookModule' },
            { path: 'stock-valuation', loadChildren: './stockvaluation/stockvaluation.module#StockvaluationModule' },
            { path: 'sales-book', loadChildren: './salesbook/salesbook.module#SalesbookModule' },
            { path: 'reorder-book', loadChildren: './reorderbook/reorderbook.module#ReorderbookModule' },
            { path: 'expiry-book', loadChildren: './expirybook/expirybook.module#ExpirybookModule' },
            { path: 'sales-entry', loadChildren: './salesentry/salesentry.module#SalesentryModule' },
            { path: 'sales-entry-one', loadChildren: './salesentryone/salesentryone.module#SalesentryoneModule' },
            { path: 'reorder-products', loadChildren: './reorderproducts/reorderproducts.module#ReorderproductsModule' },
            { path: 'pharmacy-progress', loadChildren: './pharmacyprogress/pharmacyprogress.module#PharmacyprogressModule' },
        ]
    }
];
var HeaderFiveLayoutRoutingModule = /** @class */ (function () {
    function HeaderFiveLayoutRoutingModule() {
    }
    HeaderFiveLayoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], HeaderFiveLayoutRoutingModule);
    return HeaderFiveLayoutRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/header-five-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-five-layout/header-five-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-headerfive></app-headerfive>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/header-five-layout/header-five-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderFiveLayoutComponent; });
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


var HeaderFiveLayoutComponent = /** @class */ (function () {
    function HeaderFiveLayoutComponent(_spinner) {
        this._spinner = _spinner;
    }
    HeaderFiveLayoutComponent.prototype.ngOnInit = function () {
    };
    HeaderFiveLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // hide spinner once all loaders are completed
        __WEBPACK_IMPORTED_MODULE_1__theme_services__["a" /* BaThemePreloader */].load().then(function (values) {
            _this._spinner.hide();
        });
    };
    HeaderFiveLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-five-layout',
            template: __webpack_require__("../../../../../src/app/header-five-layout/header-five-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-five-layout/header-five-layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__theme_services__["b" /* BaThemeSpinner */]])
    ], HeaderFiveLayoutComponent);
    return HeaderFiveLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/header-five-layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFiveLayoutModule", function() { return HeaderFiveLayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_five_layout_routing_module__ = __webpack_require__("../../../../../src/app/header-five-layout/header-five-layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_five_layout_component__ = __webpack_require__("../../../../../src/app/header-five-layout/header-five-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_headerfive_headerfive_component__ = __webpack_require__("../../../../../src/app/shared/headerfive/headerfive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HeaderFiveLayoutModule = /** @class */ (function () {
    function HeaderFiveLayoutModule() {
    }
    HeaderFiveLayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__header_five_layout_routing_module__["a" /* HeaderFiveLayoutRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__header_five_layout_component__["a" /* HeaderFiveLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_headerfive_headerfive_component__["a" /* HeaderfiveComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__theme_services__["b" /* BaThemeSpinner */]]
        })
    ], HeaderFiveLayoutModule);
    return HeaderFiveLayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/headerfive/headerfive.component.html":
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\"> \n\t\n\ta.cstm-sb-menu:hover{\n\t\tcolor:#01b0f0!important;\n\t}\n</style>\n<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"headersidebar-wrap\" [ngClass]=\"nosidebar\" >\n\t<div class=\"dashboard-header\">\n\t\t<div class=\"dashboard-header-one\">\n\t\t\t<div class=\"close-dashboard-sidebar\">\n\t\t        <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarclose()\" >\n\t\t            <span class=\"icon-bar\"></span>\n\t\t            <span class=\"icon-bar\"></span>\n\t\t            <span class=\"icon-bar\"></span>\n\t\t        </button>\n\t\t    </div>\n\n\t\t    <div class=\"welcomename\">\n\t\t    \t{{headertitle}}\n\t\t    </div>\n\n\t\t    <div class=\"dashboard-signout\">\n\t\t    \t<a routerLink=\"/\" (click)=\"signOut()\"> Sign-out </a>\n\t\t    </div>\n\t\t</div>\n\n\t\t<div class=\"dashboard-header-two\" *ngIf=\"hideElement=='global'\">\n\t\t\t<div class=\"dashboard-header-logo\" routerLink=\"/header-five-layout/dashboard-pharmacy\">\n\t\t\t\t<img src=\"./assets/imgs/logoDoctm.png\" class=\"img-responsive\" />\n\t\t\t</div>\n\t\t\t<div class=\"dashboard-header-smartclinic\">\n\t\t\t\tSmartClinic\n\t\t\t\t<div class=\"fingertip-slogan\"> Clinic at your fingertips </div>\n\t\t\t</div>\n\t\t\t<div class=\"dashboard-subscription\">\n\t\t\t \t<p> Subscription expires on  </p>\n\t\t\t \t<p> 15<sup>th</sup> June, 2018 </p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"dashboard-header-two\" *ngIf=\"stock\">\n\t\t\t<div class=\"\">\n\t\t\t\t<div class=\"col-lg-4 col-md-3 col-sm-2\">\n\t\t\t\t\t<div class=\"dashboard-header-logo\" routerLink=\"/header-five-layout/dashboard-pharmacy\">\n\t\t\t\t\t\t<img src=\"./assets/imgs/logoDoctm.png\" class=\"img-responsive\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"dshbrd-btn\" *ngIf=\"pharmacyDetail\">\n\t\t\t\t\t\t\t<button class=\"btn btn-custom\" routerLink=\"/header-five-layout/dashboard-pharmacy\"> Dashboard </button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-2 col-md-2  col-sm-3 text-center\">\n                        <div class=\"main-date\">\n                            <h3 class=\"dt\">\n                                {{day}} {{month}} , {{year}}\n                                <small>\n                                    {{hoursIST}}:{{getMin()}}\n                                </small>\n                            </h3>\n                        </div>\n                    </div>\n\t\t\t\t<div class=\"col-lg-6 col-md-7 col-sm-7\" *ngIf=\"!pharmacyDetail\">\n\t\t\t\t\t<div class=\"dashboard-subscription\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center\">\n\t\t\t\t\t\t\t\t<div class=\"dashboard-btns new-reg\" *ngIf=\"!showDashboardButton\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-1\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#registrationForm\"  routerLink=\"/header-five-layout/sales-entry-one\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus-square\"></i>\n\t\t\t\t\t\t\t\t\t\t<div>SALE ENTRY </div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center\">\n\t\t\t\t\t\t\t\t<div class=\"dashboard-btns\" *ngIf=\"!showDashboardButton\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-2\" routerLink=\"/header-five-layout/pharmacy-progress\">\n\t\t\t\t\t\t\t\t\t\t<div> PROGRESS </div>\n\t\t\t\t\t\t\t\t\t\t<div> TODAY </div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center\">\n\t\t\t\t\t\t\t\t<div class=\"dashboard-btns app-list\" *ngIf=\"!showDashboardButton\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-3\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#stck-prchse-header\">\n\t\t\t\t\t\t\t\t\t\t<div> RETURN </div>\n\t\t\t\t\t\t\t\t\t\t<div> SALE </div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"page-sidebar-wrapper\">\n\t    <div id=\"bs-example-navbar-collapse-1\" class=\"dashbrd-sidbar navbar-collapse p-0\" >\n\n\t        <ul class=\"dshbrd-sidebar-menu m-0 p-0\" type=\"none\">\n\t            \n\t            <li class=\"sidebar-item\">\n\t                <a class=\"sidebar-link\" href=\"javascript:void(0);\" routerLink=\"/header-five-layout/stock-purchase\">\n\t                    <span class=\"title\"> Purchase Entry </span>\t                    \n\t                </a>\n\t            </li>\n\n\t            <li class=\"sidebar-item\">\n\t                <a class=\"sidebar-link\" href=\"javascript:void(0);\" routerLink=\"/header-five-layout/purchase-book\">\n\t                    <span class=\"title\"> Purchase Book </span>\n\t                </a>\n\t            </li>\n\n\t            <li class=\"sidebar-item\">\n\t                <a class=\"sidebar-link\" href=\"javascript:void(0);\" routerLink=\"/header-five-layout/stock-valuation\">\n\t                    <span class=\"title\"> Stock </span>\n\t                </a>\n\t            </li>\n\n\t            <li class=\"sidebar-item\">\n\t                <a class=\"sidebar-link\" href=\"javascript:void(0);\" routerLink=\"/header-five-layout/sales-book\">\n\t                    <span class=\"title\"> Sales Book </span>\n\t                </a>\n\t            </li>\n\n\t            <li class=\"sidebar-item\">\n\t                <a class=\"sidebar-link\" href=\"javascript:void(0);\" routerLink=\"/header-five-layout/reorder-products\">\n\t                    <span class=\"title\"> Re-order Book <span class=\"badge\">{{reorderArray.length}}</span></span>\n\t                </a>\n\t            </li>\n\n\t            <li class=\"sidebar-item\">\n\t                <a class=\"sidebar-link\" href=\"javascript:void(0);\" routerLink=\"/header-five-layout/expiry-book\">\n\t                    <span class=\"title\">Expiry Book <span class=\"badge\">{{dataExpiry}}</span></span>\n\t                </a>\n\t            </li>\n\n\t            <li class=\"sidebar-item\">\n\t                <a class=\"sidebar-link\" href=\"javascript:void(0);\" routerLink=\"/header-five-layout/pharmacy-detail\">\n\t                    <span class=\"title\"> Pharmacy Details </span>\n\t                </a>\n\t            </li>\n\t        </ul>\n\t    </div>\n\t</div>\n</div>\n\n  <!-- Modal -->\n<div class=\"modal fade\" id=\"stck-prchse-header\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content modal-lg modal-cstm\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"resetReturn()\">&times;</button>\n          <h3 class=\"modal-title text-center\">Return Sale</h3>\n        </div>\n        <div class=\"modal-body\">\n\t        <div class=\"col-lg-3 col-lg-offset-1 text-right\">\n\t         \t<b class=\"bill-no\">Receipt Number</b>\n\t        </div>\n\t        <div class=\"col-lg-4\">\n\t         \t<div class=\"form-group\">\n\t         \t\t<input type=\"number\" name=\"\" class=\"form-control\" [(ngModel)]=\"receiptNumberSearch\" (keyup)=\"onKey($event,'bill')\">\n\t         \t</div>\n\t        </div>\n\t        <div class=\"col-lg-4\">\n\t         \t<button class=\"btn btn-custom\" (click)=\"fetchBill()\">\n\t\t\t\t\t<div> Search </div>\n\t\t\t\t</button>\n\t        </div>\n\t        <div class=\"stock-tab\" *ngIf=\"billFetched\">\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<div class=\"table tab-stock tab-stock-2\">\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<thead class=\"table-head tble-new\">\n\t\t\t\t\t\t\t  \t<tr>\n\t\t\t\t\t\t\t\t  \t<!-- <th  class=\"text-center\"  width=\"120px\"><h4>Return item</h4></th> -->\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>Type</h4></th>\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>Product Name</h4></th>\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>Pack</h4></th>\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>M.R.P</h4></th>\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>Order QTY</h4></th>\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>Return QTY</h4></th>\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>Disc%</h4></th>\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>Amount</h4></th>\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>Batch</h4></th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tr class=\"mg-top\" *ngFor=\"let tr of returnPurchaseArray.opt;let i = index;\">\n\t\t\t\t\t\t\t\t<!-- <td width=\"120px\">\n\t\t\t\t\t\t\t\t\t<label class=\"cstm-chk\">\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"returnStatus[i]\" [checked]=\"returnStatus[i]\" (change)=\"getTotalReturn()\">\n\t\t\t\t\t\t\t\t\t  <span class=\"checkmark\"></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</td> -->\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.opt[i]}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"pro-trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.product[i]}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.pack1[i]}} x {{returnPurchaseArray.pack2[i]}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.mrp[i]}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.quantity[i]}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"\" class=\"cstm-put\" [(ngModel)]=\"returnQty[i]\" max=\"{{returnPurchaseArray.quantity[i]}}\" (blur)=\"getTotalReturn()\" disabled=\"{{getReturnStatus(i)}}\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.discount[i]}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"0\" class=\"cstm-put\" value=\"{{returnPurchaseArray.amount[i]}}\"  readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.batch[i]}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>\n        <div class=\"modal-footer\" *ngIf=\"billFetched\">\n         <div class=\"col-lg-6\">\n         \t<div class=\"row\">\n         \t\t<div class=\"col-lg-6\">\n         \t\t\t<h3 class=\"mg-top\">Total Refund Amount</h3>\n         \t\t</div>\n         \t\t<div class=\"col-lg-6 text-left\">\n         \t\t\t<button class=\"btn data-div\" readonly=\"\" disabled=\"\">\n\t\t\t\t\t\t<div> {{quantityReturn}}</div>\n\t\t\t\t\t</button>\n         \t\t</div>\n         \t</div>\n         </div>\n         <div class=\"col-lg-6\">\n         \t<button class=\"btn btn-custom\" (click)=\"updateReturnAmount()\">\n\t\t\t\t<div> Return </div>\n\t\t\t</button>\n         </div>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>      \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/headerfive/headerfive.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-custom {\n  color: #002160;\n  position: relative;\n  padding: 8px 30px;\n  border-radius: 4px;\n  font-size: 18px;\n  min-width: 150px;\n  font-weight: 700;\n  text-transform: uppercase;\n  border: 1px solid #002160;\n  -webkit-transition: all 0.3s ease 0s;\n  transition: all 0.3s ease 0s;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12);\n          box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12); }\n\n.dashboard-btns button {\n  border-radius: 10px;\n  border: 1px solid #bdbdbd;\n  color: #fff;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12), inset 0 3px 3px rgba(255, 255, 255, 0.9);\n  -moz-box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12), inset 0 3px 3px rgba(255, 255, 255, 0.9);\n  -o-box-shadow: 0 2px 2px 0 rgba(39, 80, 176, 0.14), 0 3px 1px -2px rgba(39, 87, 176, 0.2), 0 1px 5px 0 rgba(39, 74, 176, 0.12), inset 0 3px 3px rgba(255, 255, 255, 0.9); }\n\n.dashboard-btns button:hover {\n  -webkit-box-shadow: 0 16px 26px -10px rgba(0, 34, 96, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2);\n          box-shadow: 0 16px 26px -10px rgba(0, 34, 96, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2); }\n\n.dashboard-btns button.btn-1 {\n  background: -webkit-gradient(linear, left bottom, left top, from(#86ad44), color-stop(#96c34e), to(#a1d253));\n  background: linear-gradient(to top, #86ad44, #96c34e, #a1d253); }\n\n.dashboard-btns button.btn-2 {\n  background: -webkit-gradient(linear, left bottom, left top, from(#39609d), color-stop(#4673bd), to(#4e7fd3));\n  background: linear-gradient(to top, #39609d, #4673bd, #4e7fd3); }\n\n.dashboard-btns button.btn.btn-custom.btn-3 {\n  background: -webkit-gradient(linear, left bottom, left top, from(#e27f2a), color-stop(#f68d2f), to(#fe9c34));\n  background: linear-gradient(to top, #e27f2a, #f68d2f, #fe9c34); }\n\nh3.dt {\n  color: #416bb1; }\n\nh3.dt > span {\n  color: #000; }\n\n.dashboard-header-logo img.img-responsive {\n  margin-top: 10px; }\n\n.btn-wrap {\n  margin-top: 20px; }\n\n.btn-grin {\n  background-color: #a1d253; }\n\n.cstm-txt input {\n  background-color: #76923C;\n  color: #fff; }\n\n.cstm-txt input::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #fff; }\n\n.cstm-txt input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #fff; }\n\n.cstm-txt input:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #fff; }\n\n.cstm-txt input:-moz-placeholder {\n  /* Firefox 18- */\n  color: #fff; }\n\n.vr-mid {\n  vertical-align: middle; }\n\n.ex-txt {\n  color: #000; }\n\n.btn-grin-2 {\n  padding: 20px 30px; }\n\n.btn-custom {\n  -webkit-transition: 300ms;\n  transition: 300ms; }\n\n.btn-custom:hover .ex-txt {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  color: #fff; }\n\n.cstm-row {\n  margin-top: 15px; }\n\n.cstm-row button {\n  padding: 3px 30px; }\n\n.btn-wrap {\n  margin-top: 20px; }\n\n.btn-grin {\n  background-color: #a1d253; }\n\n.cstm-txt input {\n  background-color: #76923C;\n  color: #fff; }\n\n.cstm-txt input::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #fff; }\n\n.cstm-txt input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #fff; }\n\n.cstm-txt input:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #fff; }\n\n.cstm-txt input:-moz-placeholder {\n  /* Firefox 18- */\n  color: #fff; }\n\n.vr-mid {\n  vertical-align: middle; }\n\n.ex-txt {\n  color: #000; }\n\n.btn-grin-2 {\n  padding: 20px 30px; }\n\n.btn-custom {\n  -webkit-transition: 300ms;\n  transition: 300ms; }\n\n.btn-custom:hover .ex-txt {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  color: #fff; }\n\ndiv.ad-remove i.fa-minus {\n  color: #f00;\n  cursor: pointer;\n  margin-left: 10px;\n  font-size: 20px; }\n\ndiv.ad-remove i.fa-plus {\n  color: #92d050;\n  cursor: pointer;\n  margin-left: 10px;\n  font-size: 20px; }\n\n.ad-remove {\n  margin-right: 30px; }\n\n.txt {\n  margin-top: 15px;\n  margin-left: 18px; }\n\n.cstm-drpdown-cnsulted-doc {\n  position: relative; }\n\n.smrt-ass-dropdown {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\n.cstm-drpdown-cnsulted-doc select {\n  font-size: 13px;\n  color: #fff;\n  width: 100%;\n  position: relative;\n  cursor: pointer;\n  padding: 8px;\n  background-color: #01b0f0;\n  border-radius: 5px;\n  border: none; }\n\n.cstm-drpdown-cnsulted-doc option {\n  border-bottom: 1px #ccc dashed;\n  padding: 8px 7px;\n  -webkit-transition: .3s all;\n  transition: .3s all;\n  display: block;\n  color: #00b0f0;\n  border-radius: 0;\n  background-color: #fff;\n  font-size: 20px; }\n\n.cstm-caret-big {\n  display: inline-block;\n  width: 0;\n  cursor: pointer;\n  position: absolute;\n  height: 0;\n  margin-left: 4px;\n  color: #000;\n  top: 10px;\n  background-color: #01b0f0;\n  z-index: 1;\n  right: 5px;\n  margin-bottom: 9px;\n  vertical-align: middle;\n  border-top: 10px dashed;\n  border-right: 10px solid transparent;\n  border-left: 10px solid transparent; }\n\n/*.stock-tab{\r\n    float: left;\r\n    width:100%;\r\n    padding:5px 0px; \r\n    padding-bottom: 0px;\r\n}\r\n.hd-one{\r\n    display: inline-block;\r\n    padding:10px 25.5px;\r\n    border:1px solid #000;\r\n    background: #DAE5F1;\r\n}\r\n/*.tab-stock{\r\n    margin-top: 15px;\r\n}*/\n\n.tab-stock table tr td div.trans-input input {\n  width: 97%;\n  padding: 6px 8px; }\n\n.tab-stock table tr td div.pro-trans-input input {\n  width: 98%;\n  padding: 6px 8px; }\n\n.tab-stock table tr td select {\n  width: 82px;\n  height: 36px;\n  border-radius: 0px;\n  margin-right: 3px; }\n\n.tab-stock {\n  min-height: 190px;\n  max-height: 190px;\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\ntr.mg-top {\n  margin-top: 5px;\n  display: block; }\n\ntd.ad-remove i.fa-minus {\n  color: #f00;\n  cursor: pointer;\n  margin-left: 10px;\n  font-size: 20px; }\n\ntd.ad-remove i.fa-plus {\n  color: #92d050;\n  cursor: pointer;\n  margin-left: 10px;\n  font-size: 20px; }\n\n.footer-cstm-1 {\n  padding: 15px 0px; }\n\ntr.foot-data {\n  background: #EAF1DD; }\n\n#stck-prchse-header .modal-body {\n  float: left;\n  width: 100%; }\n\n#stck-prchse-header .modal-header h3 {\n  color: #002060; }\n\n#stck-prchse-header .modal-body button {\n  background: #92D050;\n  color: #fff;\n  padding: 3px 18px;\n  font-size: 16px;\n  min-width: 100px; }\n\nb.bill-no {\n  font-size: 18px; }\n\n#stck-prchse-header .modal-content {\n  background-color: #f2f2f2;\n  border-radius: 20px; }\n\n#stck-prchse-header .modal-dialog {\n  display: table; }\n\ndiv.hd-two {\n  background-color: #FDE9D8;\n  display: inline-block;\n  padding: 8px 39.3px;\n  border: 1px solid #ffc0c0;\n  min-height: 53px;\n  max-height: 53px;\n  vertical-align: middle;\n  text-align: center; }\n\n@media (min-width: 992px) {\n  .modal-lg.modal-cstm {\n    width: 1185px; } }\n\n.tab-stock-2 table tr td select {\n  width: 67px; }\n\n/* The container */\n\n.cstm-chk {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/* Hide the browser's default checkbox */\n\n.cstm-chk input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n\n/* Create a custom checkbox */\n\n.checkmark {\n  position: absolute;\n  top: -6.5px;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #fff; }\n\n/* On mouse-over, add a grey background color */\n\n.cstm-chk:hover input ~ .checkmark {\n  background-color: #ccc; }\n\n/* When the checkbox is checked, add a blue background */\n\n.cstm-chk input:checked ~ .checkmark {\n  background-color: #fff; }\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n/* Show the checkmark when checked */\n\n.cstm-chk input:checked ~ .checkmark:after {\n  display: block; }\n\n/* Style the checkmark/indicator */\n\n.cstm-chk .checkmark:after {\n  left: 9px;\n  top: 3px;\n  width: 6px;\n  height: 16px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n#stck-prchse-header button.close {\n  opacity: 1;\n  font-size: 30px; }\n\n/*ctsm table sorting ------------------------- -------------*/\n\n.ipdbook {\n  float: left;\n  width: 100%;\n  padding: 30px 0; }\n\n.table-row {\n  background: -webkit-linear-gradient(top, #d6f8ff 0%, #a3ecff 72%); }\n\n.table {\n  border: 1px solid #eee; }\n\n.history {\n  background-color: transparent; }\n\n.table-row td, .table-head th {\n  border-top: none;\n  padding: 8px 0px; }\n\n.select-duration {\n  padding-bottom: 30px; }\n\n.select-duration h3 {\n  margin: 0; }\n\n.ok-btn {\n  background-color: transparent;\n  border: 1px solid #002160;\n  width: 50px; }\n\n/*tbody.my-tbdy {\r\n    display: block;\r\n    height: 250px;\r\n    overflow: auto;\r\n}*/\n\nthead.table-head, tbody.my-tbdy tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  /* even columns width , fix width of table too*/ }\n\nthead.table-head {\n  width: calc( 100% - 1em); }\n\n.table-scroll-outside {\n  min-height: 300px;\n  max-height: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n.table-scroll-outside table tbody {\n  display: block; }\n\n.btn-custom {\n  color: #002160;\n  position: relative;\n  padding: 6.5px 17px;\n  border-radius: 4px;\n  font-size: 14px; }\n\n.ipdbook {\n  padding: 0px; }\n\n.select-duration {\n  padding-bottom: 15px; }\n\n.my-tbdy td {\n  vertical-align: middle; }\n\n.table-head tr th {\n  border-right: 1px solid #fff;\n  background-color: #000;\n  color: #fff; }\n\n.table-head tr th h4 {\n  font-size: 12px; }\n\n.my-tbdy tr td {\n  border-right: 1px solid #fff;\n  background-color: #DAE5F1 !important;\n  color: #000;\n  border-bottom: 1px solid #fff; }\n\n.cstm-table {\n  margin-bottom: 0px; }\n\n.cstm-input input {\n  width: 40%;\n  display: inline-block; }\n\n.cstm-input-2 input {\n  display: inline-block;\n  width: 98%; }\n\n.foot-btm {\n  position: fixed;\n  bottom: 0; }\n\n.min i {\n  color: #ff0000;\n  font-size: 22px;\n  cursor: pointer; }\n\n.add i {\n  color: #00B050;\n  font-size: 22px;\n  cursor: pointer; }\n\n.chk-2 {\n  top: -20.5px; }\n\n.mg-top {\n  margin-top: 0px; }\n\n.tble-new {\n  width: 100% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/headerfive/headerfive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderfiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_mission_service__ = __webpack_require__("../../../../../src/app/providers/mission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
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







var HeaderfiveComponent = /** @class */ (function () {
    ////////
    function HeaderfiveComponent(router, missionService, toastr, userService) {
        var _this = this;
        this.router = router;
        this.missionService = missionService;
        this.toastr = toastr;
        this.userService = userService;
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails']);
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                _this.nosidebar = 'no-sidebar';
                _this.stock = true;
                if (event.url == '/header-five-layout/pharmacy-detail') {
                    _this.headertitle = "Pharmacy Details";
                    _this.pharmacyDetail = false;
                    _this.stock = false;
                }
                else if (event.url == '/header-five-layout/stock-purchase') {
                    _this.headertitle = "Stock Purchase Entry";
                    _this.stock = false;
                }
                else if (event.url == '/header-five-layout/purchase-book') {
                    _this.headertitle = "Purchase Book";
                    _this.stock = false;
                    _this.pharmacyDetail = false;
                }
                else if (event.url == '/header-five-layout/stock-valuation') {
                    _this.headertitle = "Stock Valuation as on " + _this.day + " " + _this.month + ", " + _this.year;
                    _this.stock = false;
                    _this.pharmacyDetail = false;
                }
                else if (event.url == '/header-five-layout/sales-book') {
                    _this.headertitle = "Sales Book";
                    _this.stock = false;
                    _this.pharmacyDetail = false;
                }
                else if (event.url == '/header-five-layout/reorder-book' || event.url == '/header-five-layout/reorder-products') {
                    _this.headertitle = "Re-order Book";
                    _this.stock = false;
                    _this.pharmacyDetail = false;
                }
                else if (event.url == '/header-five-layout/expiry-book') {
                    _this.headertitle = "Expiry Book";
                    _this.stock = false;
                    _this.pharmacyDetail = false;
                }
                else if (event.url == '/header-five-layout/sales-entry' || event.url == '/header-five-layout/sales-entry-one') {
                    _this.headertitle = "Sales Entry";
                    _this.stock = false;
                    _this.pharmacyDetail = false;
                }
                else if (event.url == '/header-five-layout/pharmacy-progress') {
                    _this.headertitle = "Pharmacy Progress Today";
                    _this.pharmacyDetail = false;
                    _this.stock = false;
                }
                else if (event.url == '/header-five-layout/dashboard-pharmacy') {
                    for (var i = 0; i < _this.pharmacyData.doctorsRegisteredForSmartClinic.length; i++) {
                        if (_this.pharmacyData.doctorsRegisteredForSmartClinic[i].type_of_doctor == "admin_doctor") {
                            _this.headertitle = "SmartPharmacy " + _this.pharmacyData.doctorsRegisteredForSmartClinic[i].clinic_details.clinic_name;
                            break;
                        }
                    }
                    _this.pharmacyDetail = false;
                }
            }
        });
    }
    HeaderfiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nosidebar = 'no-sidebar';
        $('[data-toggle="tooltip"]').tooltip();
        this.GetSmartPharmacyDataAfterLogin();
        this.socket = __WEBPACK_IMPORTED_MODULE_6_socket_io_client__(__WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__["a" /* environment */].socket);
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
        ///////////////////////////
        this.returnPurchaseArray = [];
        this.returnStatus = [];
        this.returnQty = [];
        this.stockToReturn = [];
        this.reorderArray = [];
        ///////////////////////////
    };
    HeaderfiveComponent.prototype.GetSmartPharmacyDataAfterLogin = function () {
        var _this = this;
        var object = {
            smart_pharmacy_id: this.pharmacyData.dataSmartPharmacy._id
        };
        this.reorderArray = [];
        this.userService.GetSmartPharmacyDataAfterLoginAndExpiry(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.dataExpiry = data.dataExpiry;
                var dataToStore = {
                    dataSmartPharmacy: data.dataSmartPharmacy,
                    doctorsRegisteredForSmartClinic: data.doctorsRegisteredForSmartClinic,
                    doctorsOfSameClinic: data.doctorsOfSameClinic
                };
                localStorage['smartPharmacyDetails'] = JSON.stringify(dataToStore);
                for (var i = 0; i < dataToStore.doctorsRegisteredForSmartClinic.length; i++) {
                    if (dataToStore.doctorsRegisteredForSmartClinic[i].type_of_doctor == "admin_doctor") {
                        _this.headertitle = "SmartPharmacy " + dataToStore.doctorsRegisteredForSmartClinic[i].clinic_details.clinic_name;
                        break;
                    }
                }
                for (var i = 0; i < data.dataReorder.length; i++) {
                    for (var j = 0; j < data.dataReorder[i].length; j++) {
                        data.dataReorder[i][j].newPacking = Math.trunc(data.dataReorder[i][j].current_stock / (data.dataReorder[i][j].pack_units * data.dataReorder[i][j].pack_quantity));
                        data.dataReorder[i][j].newPackingReminder = data.dataReorder[i][j].current_stock % (data.dataReorder[i][j].pack_units * data.dataReorder[i][j].pack_quantity);
                        data.dataReorder[i][j].tent_amount = 0;
                        _this.reorderArray.push(data.dataReorder[i][j]);
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeaderfiveComponent.prototype.openDropdown = function () {
        if (this.dropdownMenu == 'active') {
            this.dropdownMenu = '';
        }
        else {
            this.dropdownMenu = 'active';
        }
    };
    HeaderfiveComponent.prototype.sidebarclose = function () {
        if (this.nosidebar == 'no-sidebar') {
            this.nosidebar = '';
        }
        else {
            this.nosidebar = 'no-sidebar';
        }
    };
    HeaderfiveComponent.prototype.signOut = function () {
        this.socket.emit('logout', { 'doctor_id': this.pharmacyData._id });
        localStorage.removeItem(localStorage['smartPharmacyDetails']);
        localStorage.removeItem('isLoggedinSmartPharmacy');
        this.router.navigate(['/']);
    };
    HeaderfiveComponent.prototype.getCurrentTime = function () {
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        this.hoursIST = ISTTime.getHours();
        this.minutesIST = ISTTime.getMinutes();
    };
    HeaderfiveComponent.prototype.getMin = function () {
        if (this.minutesIST < 10) {
            return "0" + this.minutesIST;
        }
        else {
            return this.minutesIST;
        }
    };
    HeaderfiveComponent.prototype.resetReturn = function () {
        this.returnQty = [];
        this.returnStatus = [];
        this.returnPurchaseArray = [];
        this.receiptNumberSearch = null;
        this.billFetched = false;
        this.quantityReturn = 0;
    };
    HeaderfiveComponent.prototype.getTotalReturn = function () {
        for (var i = 0; i < this.returnPurchaseArray.quantity.length; i++) {
            if (this.returnPurchaseArray.quantity[i] < this.returnQty[i]) {
                this.toastr.warning("Return quantity can't exceed actual quantity", "Warning");
                return;
            }
            else if (this.returnQty[i] < 0 || this.returnQty[i] == null) {
                this.toastr.warning("Minimum return quantity can be 0", "Warning");
                return;
            }
        }
        this.quantityReturn = 0;
        var calculatedAmount = 0;
        this.returnPurchaseArray.qtyReturn = [];
        this.returnPurchaseArray.amountReturn = [];
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                calculatedAmount = this.returnQty[i] * (this.returnPurchaseArray.amount[i] / this.returnPurchaseArray.quantity[i]);
                this.quantityReturn = this.quantityReturn + calculatedAmount;
                this.returnPurchaseArray.amountReturn.push(calculatedAmount);
            }
        }
    };
    HeaderfiveComponent.prototype.getReturnStatus = function (i) {
        if (this.returnStatus[i] == true) {
            return false;
        }
        else {
            return true;
        }
    };
    HeaderfiveComponent.prototype.onKey = function (event, type) {
        if (event.keyCode == 13) {
            if (type == 'bill') {
                this.fetchBill();
            }
        }
    };
    HeaderfiveComponent.prototype.fetchBill = function () {
        var _this = this;
        this.returnQty = [];
        this.returnStatus = [];
        this.returnPurchaseArray = [];
        this.billFetched = false;
        this.quantityReturn = 0;
        if (this.receiptNumberSearch != null && this.receiptNumberSearch != '' && !isNaN(this.receiptNumberSearch)) {
            this.loading = true;
            var ob = {
                smart_pharmacy_id: this.pharmacyData.dataSmartPharmacy._id,
                id: this.receiptNumberSearch
            };
            this.userService.FetchReceipt(ob).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.billFetched = true;
                    _this.returnPurchaseArray = data.data.medicines[0];
                    _this.returnStatus = [];
                    _this.returnQty = [];
                    for (var i = 0; i < _this.returnPurchaseArray.quantity.length; i++) {
                        _this.returnStatus.push(true);
                        _this.returnQty.push(0);
                        // this.returnQty.push(this.returnPurchaseArray.quantity[i])
                    }
                    _this.toastr.success(data.message, "Success");
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    HeaderfiveComponent.prototype.updateReturnAmount = function () {
        var _this = this;
        for (var i = 0; i < this.returnPurchaseArray.quantity.length; i++) {
            if (this.returnPurchaseArray.quantity[i] < this.returnQty[i]) {
                this.toastr.warning("Return quantity can't exceed actual quantity", "Warning");
                return;
            }
            else if (this.returnQty[i] < 0 || this.returnQty[i] == null) {
                this.toastr.warning("Minimum return quantity can be 0", "Warning");
                return;
            }
        }
        this.quantityReturn = 0;
        var calculatedAmount = 0;
        this.returnPurchaseArray.qtyReturn = [];
        this.returnPurchaseArray.amountReturn = [];
        this.stockToReturn = [];
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                calculatedAmount = this.returnQty[i] * (this.returnPurchaseArray.amount[i] / this.returnPurchaseArray.quantity[i]);
                this.quantityReturn = this.quantityReturn + calculatedAmount;
                this.returnPurchaseArray.amountReturn.push(calculatedAmount);
                this.returnPurchaseArray.qtyReturn.push(this.returnQty[i]);
                this.stockToReturn.push({
                    stock_id: this.returnPurchaseArray.medicineStock[i].data.id,
                    qtyReturn: this.returnQty[i]
                });
            }
        }
        var medicines = [];
        medicines.push({
            amount: [],
            batch: [],
            discount: [],
            expiry: [],
            medicineStock: [],
            mrp: [],
            opt: [],
            pack1: [],
            pack2: [],
            product: [],
            quantity: []
        });
        var return_total_amount = 0;
        var return_cost_amount = 0;
        for (var i = 0; i < this.returnPurchaseArray.amount.length; i++) {
            return_total_amount += this.returnPurchaseArray.amount[i] - this.returnPurchaseArray.amountReturn[i];
            medicines[0].batch.push(this.returnPurchaseArray.batch[i]);
            medicines[0].discount.push(this.returnPurchaseArray.discount[i]);
            medicines[0].mrp.push(this.returnPurchaseArray.mrp[i]);
            medicines[0].opt.push(this.returnPurchaseArray.opt[i]);
            medicines[0].pack1.push(this.returnPurchaseArray.pack1[i]);
            medicines[0].pack2.push(this.returnPurchaseArray.pack2[i]);
            medicines[0].product.push(this.returnPurchaseArray.product[i]);
            medicines[0].quantity.push(this.returnPurchaseArray.quantity[i] - this.returnPurchaseArray.qtyReturn[i]);
            medicines[0].amount.push(this.returnPurchaseArray.amount[i] - this.returnPurchaseArray.amountReturn[i]);
            medicines[0].medicineStock.push({
                i: this.returnPurchaseArray.medicineStock[i].i,
                data: {
                    amount: this.returnPurchaseArray.medicineStock[i].data.amount,
                    batch: this.returnPurchaseArray.medicineStock[i].data.batch,
                    bill_no: this.returnPurchaseArray.medicineStock[i].data.bill_no,
                    cgst: this.returnPurchaseArray.medicineStock[i].data.cgst,
                    createAt: this.returnPurchaseArray.medicineStock[i].data.createAt,
                    createdAt: this.returnPurchaseArray.medicineStock[i].data.createdAt,
                    discount: this.returnPurchaseArray.medicineStock[i].data.discount,
                    expiry: this.returnPurchaseArray.medicineStock[i].data.expiry,
                    id: this.returnPurchaseArray.medicineStock[i].data.id,
                    invoice_date: this.returnPurchaseArray.medicineStock[i].data.invoice_date,
                    month: this.returnPurchaseArray.medicineStock[i].data.month,
                    mrp: this.returnPurchaseArray.medicineStock[i].data.mrp,
                    p_rate: this.returnPurchaseArray.medicineStock[i].data.p_rate,
                    pack_quantity: this.returnPurchaseArray.medicineStock[i].data.pack_quantity,
                    pack_units: this.returnPurchaseArray.medicineStock[i].data.pack_units,
                    party_name: this.returnPurchaseArray.medicineStock[i].data.party_name,
                    product: this.returnPurchaseArray.medicineStock[i].data.product,
                    qty: this.returnPurchaseArray.medicineStock[i].data.qty,
                    sgst: this.returnPurchaseArray.medicineStock[i].data.sgst,
                    smart_pharmacy_id: this.returnPurchaseArray.medicineStock[i].data.smart_pharmacy_id,
                    sold_stock: this.returnPurchaseArray.medicineStock[i].data.sold_stock - this.returnPurchaseArray.qtyReturn[i],
                    current_stock: this.returnPurchaseArray.medicineStock[i].data.current_stock + this.returnPurchaseArray.qtyReturn[i],
                    total_stock: this.returnPurchaseArray.medicineStock[i].data.total_stock,
                    type: this.returnPurchaseArray.medicineStock[i].data.type,
                    updateAt: this.returnPurchaseArray.medicineStock[i].data.updateAt,
                    updatedAt: this.returnPurchaseArray.medicineStock[i].data.updatedAt,
                    year: this.returnPurchaseArray.medicineStock[i].data.year,
                    __v: this.returnPurchaseArray.medicineStock[i].data.__v,
                    _id: this.returnPurchaseArray.medicineStock[i].data._id
                }
            });
        }
        for (var ii = 0; ii < medicines[0].medicineStock.length; ii++) {
            return_cost_amount += (medicines[0].medicineStock[ii].data.amount * medicines[0].quantity[ii]) / (medicines[0].medicineStock[ii].data.pack_units * medicines[0].medicineStock[ii].data.pack_quantity * medicines[0].medicineStock[ii].data.qty);
        }
        console.log(this.returnPurchaseArray);
        if (this.returnPurchaseArray.qtyReturn.length > 0 && this.stockToReturn.length > 0) {
            var ob = {
                // smart_pharmacy_id:this.pharmacyData.dataSmartPharmacy._id,
                id: this.receiptNumberSearch,
                stockToReturn: this.stockToReturn,
                medicines: medicines,
                return_total_amount: return_total_amount,
                return_cost_amount: return_cost_amount
            };
            console.log(ob);
            this.loading = true;
            this.userService.UpdateSalesEntry(ob).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.toastr.success(data.message, "Success");
                    $("#stck-prchse-header").modal("hide");
                    _this.resetReturn();
                    _this.ngOnInit();
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    HeaderfiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-headerfive',
            template: __webpack_require__("../../../../../src/app/shared/headerfive/headerfive.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/headerfive/headerfive.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_mission_service__["a" /* MissionService */], __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__providers_mission_service__["a" /* MissionService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */]])
    ], HeaderfiveComponent);
    return HeaderfiveComponent;
}());



/***/ })

});
//# sourceMappingURL=header-five-layout.module.chunk.js.map