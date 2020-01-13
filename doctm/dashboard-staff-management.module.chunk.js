webpackJsonp(["dashboard-staff-management.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-staff-management/dashboard-staff-management-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardStaffManagementRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_staff_management_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-staff-management/dashboard-staff-management.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_staff_management_component__["a" /* DashboardStaffManagementComponent */],
    }
];
var DashboardStaffManagementRoutingModule = /** @class */ (function () {
    function DashboardStaffManagementRoutingModule() {
    }
    DashboardStaffManagementRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardStaffManagementRoutingModule);
    return DashboardStaffManagementRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-staff-management/dashboard-staff-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-staff-management/dashboard-staff-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"staff-manage-sec\">\n\n\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t<div class=\"sec-heading\">\n\t\t\t<h3> <i class=\"fa fa-users\"></i> Staff Management <button data-toggle=\"modal\" data-dismiss=\"modal\" data-target=\"#inchargeModal\" type=\"button\" class=\"btn btn-custom\"> Add incharge </button> </h3>\n\t\t</div>\n\t</div>\n\n\t<div class=\"table-responsive col-md-12 col-sm-12 col-xs-12\">\n\n\t\t<table class=\"table table-bordered table-striped\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th> Name (Job Title) </th>\n\t\t\t\t\t<th> Designation </th>\n\t\t\t\t\t<th> Subscription Status </th>\n\t\t\t\t\t<th> Contact Number </th>\n\t\t\t\t\t<th> Action </th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td> <p> Giacomo Guilizzoni </p> <p> Doctor </p> </td>\n\t\t\t\t\t<td> IPD Incharge </td>\n\t\t\t\t\t<td> 14 Days Left <button type=\"button\" class=\"btn btn-success\"> Renew </button> </td>\n\t\t\t\t\t<td> +91-9874563210 </td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"Edit\"> <i class=\"fa fa-pencil-square-o\"></i> </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"Delete\"> <i class=\"fa fa-trash\"></i> </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"View\"> <i class=\"fa fa-eye\"></i> </a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td> <p> Giacomo Guilizzoni </p> <p> Doctor </p> </td>\n\t\t\t\t\t<td> IPD Incharge </td>\n\t\t\t\t\t<td> 14 Days Left <button type=\"button\" class=\"btn btn-success\"> Renew </button> </td>\n\t\t\t\t\t<td> +91-9874563210 </td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"Edit\"> <i class=\"fa fa-pencil-square-o\"></i> </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"Delete\"> <i class=\"fa fa-trash\"></i> </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"View\"> <i class=\"fa fa-eye\"></i> </a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t\n\t\t\t\t<tr>\n\t\t\t\t\t<td> <p> Giacomo Guilizzoni </p> <p> Doctor </p> </td>\n\t\t\t\t\t<td> IPD Incharge </td>\n\t\t\t\t\t<td> 14 Days Left <button type=\"button\" class=\"btn btn-success\"> Renew </button> </td>\n\t\t\t\t\t<td> +91-9874563210 </td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"Edit\"> <i class=\"fa fa-pencil-square-o\"></i> </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"Delete\"> <i class=\"fa fa-trash\"></i> </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"View\"> <i class=\"fa fa-eye\"></i> </a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t\n\t\t\t\t<tr>\n\t\t\t\t\t<td> <p> Giacomo Guilizzoni </p> <p> Doctor </p> </td>\n\t\t\t\t\t<td> IPD Incharge </td>\n\t\t\t\t\t<td> 3 Days Left <button type=\"button\" class=\"btn btn-danger\"> Renew </button> </td>\n\t\t\t\t\t<td> +91-9874563210 </td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"Edit\"> <i class=\"fa fa-pencil-square-o\"></i> </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"Delete\"> <i class=\"fa fa-trash\"></i> </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"View\"> <i class=\"fa fa-eye\"></i> </a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t\n\t\t\t\t<tr>\n\t\t\t\t\t<td> <p> Giacomo Guilizzoni </p> <p> Doctor </p> </td>\n\t\t\t\t\t<td> IPD Incharge </td>\n\t\t\t\t\t<td> 2 Days Left <button type=\"button\" class=\"btn btn-danger\"> Renew </button> </td>\n\t\t\t\t\t<td> +91-9874563210 </td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"Edit\"> <i class=\"fa fa-pencil-square-o\"></i> </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"Delete\"> <i class=\"fa fa-trash\"></i> </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"View\"> <i class=\"fa fa-eye\"></i> </a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t\n\t\t\t\t<tr>\n\t\t\t\t\t<td> <p> Giacomo Guilizzoni </p> <p> Doctor </p> </td>\n\t\t\t\t\t<td> IPD Incharge </td>\n\t\t\t\t\t<td> 1 Days Left <button type=\"button\" class=\"btn btn-danger\"> Renew </button> </td>\n\t\t\t\t\t<td> +91-9874563210 </td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"Edit\"> <i class=\"fa fa-pencil-square-o\"></i> </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"Delete\"> <i class=\"fa fa-trash\"></i> </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"View\"> <i class=\"fa fa-eye\"></i> </a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t\n\t\t\t\t<tr>\n\t\t\t\t\t<td> <p> Giacomo Guilizzoni </p> <p> Doctor </p> </td>\n\t\t\t\t\t<td> IPD Incharge </td>\n\t\t\t\t\t<td> 14 Days Left <button type=\"button\" class=\"btn btn-success\"> Renew </button> </td>\n\t\t\t\t\t<td> +91-9874563210 </td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"Edit\"> <i class=\"fa fa-pencil-square-o\"></i> </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"Delete\"> <i class=\"fa fa-trash\"></i> </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"View\"> <i class=\"fa fa-eye\"></i> </a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t\n\t\t\t\t<tr>\n\t\t\t\t\t<td> <p> Giacomo Guilizzoni </p> <p> Doctor </p> </td>\n\t\t\t\t\t<td> IPD Incharge </td>\n\t\t\t\t\t<td> 14 Days Left <button type=\"button\" class=\"btn btn-success\"> Renew </button> </td>\n\t\t\t\t\t<td> +91-9874563210 </td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"Edit\"> <i class=\"fa fa-pencil-square-o\"></i> </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"Delete\"> <i class=\"fa fa-trash\"></i> </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" title=\"View\"> <i class=\"fa fa-eye\"></i> </a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t\n\t\t\t</tbody>\n\t\t</table>\n\n\t</div>\n\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade cus-modal\" id=\"inchargeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  \t<div class=\"modal-dialog\" role=\"document\">\n    \t<div class=\"modal-content\">\n    \t\t<div class=\"modal-header\">\n    \t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n    \t\t\t<h4 class=\"modal-title\"> Add Incharge </h4>\n    \t\t</div>\n    \t\t<div class=\"modal-body newform-margin\">\n        \t\t<div class=\"row\">\n\t\t    \t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t    \t\t\t<div class=\"fieldDesign\">\n\t\t    \t\t\t\t<input id=\"field1\" type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"\" required=\"\" />\n\t\t    \t\t\t\t<label for=\"field1\" class=\"labelFloat\"> Name </label>\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n\t\t    \t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t    \t\t\t\t<label> Mobile Number </label>\n\t    \t\t\t\t<div class=\"input-group\">\n                            <span class=\"input-group-field\">\n                                <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"eg. 0121\" />\n                            </span>\n                            <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"Eg. 011-678543\" />\n                        </div>\n\t\t    \t\t</div>\n\t\t    \t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t    \t\t\t<div class=\"fieldDesign\">\n\t\t    \t\t\t\t<input id=\"field2\" type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"\" required=\"\" />\n\t\t    \t\t\t\t<label for=\"field2\" class=\"labelFloat\"> User ID </label>\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n\t\t    \t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t    \t\t\t<div class=\"fieldDesign\">\n\t\t    \t\t\t\t<input id=\"field3\" type=\"password\" class=\"form-control txtfield\" name=\"\" placeholder=\"\" required=\"\" />\n\t\t    \t\t\t\t<label for=\"field3\" class=\"labelFloat\"> Password </label>\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n\t\t    \t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t    \t\t\t<div class=\"fieldDesign\">\n\t\t    \t\t\t\t<input id=\"field4\" type=\"password\" class=\"form-control txtfield\" name=\"\" placeholder=\"\" required=\"\" />\n\t\t    \t\t\t\t<label for=\"field4\" class=\"labelFloat\"> Repeat Password </label>\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n\t\t    \t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t    \t\t\t<select class=\"form-control txtfield\">\n\t\t    \t\t\t\t<option> Choose service </option>\n\t\t    \t\t\t\t<option> Service1 </option>\n\t\t    \t\t\t\t<option> Service2 </option>\n\t\t    \t\t\t\t<option> Service3 </option>\n\t\t    \t\t\t\t<option> Service4 </option>\n\t\t    \t\t\t\t<option> Service5 </option>\n\t\t    \t\t\t\t<option> Service6 </option>\n\t\t    \t\t\t</select>\n\t\t    \t\t</div>\n\n        \t\t</div>\n      \t\t</div>\n\n      \t\t<div class=\"modal-footer\">\n      \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n      \t\t\t\t<button class=\"full-width btn btn-custom\" type=\"button\"> Cancel </button>\n      \t\t\t</div>\n      \t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n      \t\t\t\t<button class=\"full-width btn btn-custom\" type=\"button\"> Add </button>\n      \t\t\t</div>\n\n      \t\t</div>\n\n\t\t</div>\n  \t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-staff-management/dashboard-staff-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardStaffManagementComponent; });
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

var DashboardStaffManagementComponent = /** @class */ (function () {
    function DashboardStaffManagementComponent() {
    }
    DashboardStaffManagementComponent.prototype.ngOnInit = function () {
    };
    DashboardStaffManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-staff-management',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-staff-management/dashboard-staff-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-staff-management/dashboard-staff-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardStaffManagementComponent);
    return DashboardStaffManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-staff-management/dashboard-staff-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardStaffManagementModule", function() { return DashboardStaffManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_staff_management_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-staff-management/dashboard-staff-management-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_staff_management_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-staff-management/dashboard-staff-management.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardStaffManagementModule = /** @class */ (function () {
    function DashboardStaffManagementModule() {
    }
    DashboardStaffManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_staff_management_routing_module__["a" /* DashboardStaffManagementRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_staff_management_component__["a" /* DashboardStaffManagementComponent */]]
        })
    ], DashboardStaffManagementModule);
    return DashboardStaffManagementModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-staff-management.module.chunk.js.map