webpackJsonp(["header-four-layout.module"],{

/***/ "../../../../../src/app/header-four-layout/header-four-layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderFourLayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_four_layout_component__ = __webpack_require__("../../../../../src/app/header-four-layout/header-four-layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__header_four_layout_component__["a" /* HeaderFourLayoutComponent */],
        children: [
            { path: '', redirectTo: 'dashboard-ipd' },
            { path: 'dashboard-ipd', loadChildren: './dashboardipd/dashboardipd.module#DashboardipdModule' },
            { path: 'ipd-book', loadChildren: './ipdbook/ipdbook.module#IpdbookModule' },
        ]
    }
];
var HeaderFourLayoutRoutingModule = /** @class */ (function () {
    function HeaderFourLayoutRoutingModule() {
    }
    HeaderFourLayoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], HeaderFourLayoutRoutingModule);
    return HeaderFourLayoutRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-four-layout/header-four-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-row{\n\tbackground: -webkit-linear-gradient(top, #d6f8ff 0%, #a3ecff 72%);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-four-layout/header-four-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-headerfour></app-headerfour>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/header-four-layout/header-four-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderFourLayoutComponent; });
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


var HeaderFourLayoutComponent = /** @class */ (function () {
    function HeaderFourLayoutComponent(_spinner) {
        this._spinner = _spinner;
    }
    HeaderFourLayoutComponent.prototype.ngOnInit = function () {
    };
    HeaderFourLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // hide spinner once all loaders are completed
        __WEBPACK_IMPORTED_MODULE_1__theme_services__["a" /* BaThemePreloader */].load().then(function (values) {
            _this._spinner.hide();
        });
    };
    HeaderFourLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-four-layout',
            template: __webpack_require__("../../../../../src/app/header-four-layout/header-four-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-four-layout/header-four-layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__theme_services__["b" /* BaThemeSpinner */]])
    ], HeaderFourLayoutComponent);
    return HeaderFourLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-four-layout/header-four-layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFourLayoutModule", function() { return HeaderFourLayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_four_layout_routing_module__ = __webpack_require__("../../../../../src/app/header-four-layout/header-four-layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_four_layout_component__ = __webpack_require__("../../../../../src/app/header-four-layout/header-four-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_headerfour_headerfour_component__ = __webpack_require__("../../../../../src/app/shared/headerfour/headerfour.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HeaderFourLayoutModule = /** @class */ (function () {
    function HeaderFourLayoutModule() {
    }
    HeaderFourLayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__header_four_layout_routing_module__["a" /* HeaderFourLayoutRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__header_four_layout_component__["a" /* HeaderFourLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_headerfour_headerfour_component__["a" /* HeaderfourComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__theme_services__["b" /* BaThemeSpinner */]]
        })
    ], HeaderFourLayoutModule);
    return HeaderFourLayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/headerfour/headerfour.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.modal-header{\n\tborder-bottom: 0;\n}*/\n.modal-title{\n\tdisplay: inline-block;\n}\n.clinic-id-box{\n\tbackground-color: #00b0f0;\n\tcolor: #002160;\n\tborder-radius: 4px;\n\tpadding: 5px 20px;\n\tborder: 1px solid #002160;\n}\n.patient-status{\n\tpadding: 0;\n\tmargin: 0;\n}\n.patient-status li{\n\tlist-style-type: none;\n    font-size: 15px;\n    padding: 7px;\n    background-color: #eee;\n    margin-bottom: 10px;\n}\n.patient-status-span{\n\tcolor: #00b0f0;\n}\n.txt-theme{\n\tcolor:#1565c0;\n}\n.mod-head{\n\tbackground: #00b0f0;\n    color: #fff;\n}\n.mod-head button.close{\n\topacity: 1;\n\tcolor:#fff;\n}\n.mdl-dlg{\n\tdisplay: table;\n}\n.mdl-dlg > .modal-content{\n\twidth:650px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/headerfour/headerfour.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"headersidebar-wrap\" [ngClass]=\"nosidebar\" >\n\t<div class=\"dashboard-header\">\n\t\t<div class=\"dashboard-header-one\">\n\t\t\t<div class=\"close-dashboard-sidebar\">\n\t\t        <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarclose()\" >\n\t\t            <span class=\"icon-bar\"></span>\n\t\t            <span class=\"icon-bar\"></span>\n\t\t            <span class=\"icon-bar\"></span>\n\t\t        </button>\n\t\t    </div>\n\n\t\t    <div class=\"welcomename\">\n\t\t    \tSmart IPD - {{headerHeading}}\n\t\t    </div>\n\t\t    <div class=\"dashboard-signout\">\n\t\t    \t<a routerLink=\"/\" (click)=\"signOut()\"> Sign-out </a>\n\t\t    </div>\n\t\t</div>\n\n\t\t<div class=\"dashboard-header-pthree\" *ngIf=\"heading != 'IPD Book'\">\n\t\t\t<div class=\"dashboard-header-logo\" routerLink=\"/header-four-layout/dashboard-ipd\">\n\t\t\t\t<img src=\"./assets/imgs/logoDoctm.png\" class=\"img-responsive\" />\n\t\t\t\t<div class=\"dshbrd-btn\" *ngIf=\"ipd\">\n\t\t\t\t\t<button class=\"btn btn-custom\" routerLink=\"/header-four-layout/dashboard-ipd\"> Dashboard </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<h1>{{heading}}\n\t\t\t\t</h1>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"page-sidebar-wrapper\">\n\t    <div id=\"bs-example-navbar-collapse-1\" class=\"dashbrd-sidbar navbar-collapse p-0\" >\n\t        <ul class=\"dshbrd-sidebar-menu m-0 p-0\" type=\"none\">\n\t            <li class=\"sidebar-item\">\n\t                <!-- <a class=\"sidebar-link\" href=\"javascript:void(0);\" data-target=\"#clinicDetailModal\" data-dismiss=\"modal\"> -->\n\t                <a class=\"sidebar-link\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#clinicDetailModal\">\n\t                    <span class=\"title\"> Clinic IPD details </span>\t                    \n\t                </a>\n\t            </li>\n\t            <li class=\"sidebar-item\">\n\t                <a class=\"sidebar-link\" href=\"javascript:void(0);\" (click)=\"GetIPDPatients()\">\n\t                    <span class=\"title\"> Consulting doctors </span>\t                    \n\t                </a>\n\t            </li>\n\t            <li class=\"sidebar-item\">\n\t                <a class=\"sidebar-link\" href=\"javascript:void(0);\" routerLink=\"/header-four-layout/ipd-book\" (click)=\"sidebarclose()\">\n\t                    <span class=\"title\"> IPD Book </span>\t                    \n\t                </a>\n\t            </li>\n\t        </ul>\n\t    </div>\n\t</div>\n</div>\n<!-- modal -->\n<div class=\"modal fade cus-modal\" id=\"clinicDetailModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" data-keyboard=\"false\" data-backdrop=\"static\">\n  \t<div class=\"modal-dialog mdl-dlg\" role=\"document\">\n    \t<div class=\"modal-content\">\n    \t\t<div class=\"modal-header mod-head\">\n    \t\t\t<h4 class=\"modal-title\"> Clinic IPD details </h4>\n\t    \t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeClinicModal()\">\n\t                <span aria-hidden=\"true\">×</span>\n\t            </button>\n\t        </div>\n\t        <div class=\"modal-body text-center\" *ngIf=\"adminDoctor\">\n\t        \t<div class=\"row\">\n\t        \t\t<div class=\"col-lg-6\">\n\t        \t\t\t <div class=\"form-group text-left\">\n\t\t\t\t\t\t      <label for=\"usr\" class=\"txt-theme\">Clinic Name</label>\n\t\t\t\t\t\t      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"clinic_name\" [ngModelOptions]=\"{standalone: true}\">\n\t\t\t\t\t\t</div>\n\t        \t\t</div>\n\t        \t\t<div class=\"col-lg-6\">\n\t        \t\t\t<div class=\"form-group text-left\">\n\t\t\t\t\t      <label for=\"pwd\" class=\"txt-theme\">Clinic Address</label>\n\t\t\t\t\t      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"address\" [ngModelOptions]=\"{standalone: true}\">\n\t\t\t\t\t    </div>\n\t        \t\t</div>\n\t        \t</div>\n\t       \t\t<div class=\"row\">\n\t       \t\t\t<div class=\"col-lg-6\">\n\t       \t\t\t\t<div class=\"form-group text-left\">\n\t\t\t\t\t      <label for=\"pwd\" class=\"txt-theme\">Clinic IPD Phone</label>\n\t\t\t\t\t      <input type=\"number\" maxlength=\"10\" class=\"form-control\" [(ngModel)]=\"mobile\" [ngModelOptions]=\"{standalone: true}\">\n\t\t\t\t\t    </div>\n\t       \t\t\t</div>\n\t       \t\t\t<div class=\"col-lg-6\">\n\t       \t\t\t\t<div class=\"form-group text-left\">\n\t\t\t\t\t     <label for=\"pwd\" class=\"txt-theme\">Clinic ID</label>\n\t\t\t\t\t     <input type=\"\" class=\"form-control\" readonly=\"\" disabled=\"\" value=\"{{adminDoctor.doctm_clinic_id}}\">\n\t\t\t\t\t    </div>\n\t       \t\t\t</div>\n\t       \t\t</div>\n\t\t\t    <div class=\"row\">\n\t\t\t    \t<div class=\"col-lg-12 text-left\">\n\t\t\t    \t\t<label for=\"pwd\" class=\"txt-theme\">Bed Charges(per day)</label>\n\t\t\t    \t</div>\n\t\t\t    \t<div class=\"col-lg-4\">\n\t\t\t    \t\t<div class=\"row\">\n\t\t\t    \t\t\t<div class=\"col-lg-5\">\n\t\t\t\t\t    \t\t<div class=\"form-group text-left\">\n\t\t\t\t\t\t\t      <label for=\"pwd\" class=\"\">General</label>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t    \t</div>\n\t\t\t\t\t    \t<div class=\"col-lg-7\">\n\t\t\t\t\t    \t\t<div class=\"form-group text-left\">\n\t\t\t\t\t\t\t      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"general_bed_charges\" [ngModelOptions]=\"{standalone: true}\" min=\"0\" max=\"999999\">\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t    \t</div>\n\t\t\t    \t\t</div>\n\t\t\t    \t</div>\n\t\t\t    \t<div class=\"col-lg-4\">\n\t\t\t    \t\t<div class=\"row\">\n\t\t\t    \t\t\t<div class=\"col-lg-5\">\n\t\t\t\t\t    \t\t<div class=\"form-group text-left\">\n\t\t\t\t\t\t\t      <label for=\"pwd\" class=\"\">Semi - Private</label>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t    \t</div>\n\t\t\t\t\t    \t<div class=\"col-lg-7\">\n\t\t\t\t\t    \t\t<div class=\"form-group text-left\">\n\t\t\t\t\t\t\t      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"semi_private_bed_charges\" [ngModelOptions]=\"{standalone: true}\" min=\"0\" max=\"999999\">\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t    \t</div>\n\t\t\t    \t\t</div>\n\t\t\t    \t</div>\n\t\t\t    \t<div class=\"col-lg-4\">\n\t\t\t    \t\t<div class=\"row\">\n\t\t\t    \t\t\t<div class=\"col-lg-5\">\n\t\t\t\t\t    \t\t<div class=\"form-group text-left\">\n\t\t\t\t\t\t\t      <label for=\"pwd\" class=\"\">Private</label>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t    \t</div>\n\t\t\t\t\t    \t<div class=\"col-lg-7\">\n\t\t\t\t\t    \t\t<div class=\"form-group text-left\">\n\t\t\t\t\t\t\t      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"private_bed_charges\" [ngModelOptions]=\"{standalone: true}\" min=\"0\" max=\"999999\">\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t    \t</div>\n\t\t\t    \t\t</div>\n\t\t\t    \t</div>\n\t\t\t    \t<div class=\"col-lg-12 text-center\">\n\t\t\t    \t\t<button class=\"btn btn-custom\" (click)=\"updateBedCharges()\"> Save </button>\n\t\t\t    \t</div>\n\t\t\t    </div>\t\t\t   \n\t        </div>\n        </div>\n\t</div>\n</div>\n\n<div class=\"modal fade cus-modal\" id=\"consultingDoctorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  \t<div class=\"modal-dialog\" role=\"document\">\n    \t<div class=\"modal-content\">\n    \t\t<div class=\"modal-header mod-head\">\n    \t\t\t<h4 class=\"modal-title\"> Consulting Doctors  </h4>\n\t    \t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t                <span aria-hidden=\"true\">×</span>\n\t            </button>\n\t        </div>\n\t        <div class=\"modal-body\">\n\t        \t<div class=\"row\">\n\t        \t\t<div class=\"col-md-8 col-sm-8 col-xs-12\">\n\t\t        \t\t<div class=\"ipd-connected doctors\">\n\t\t        \t\t\t<h5 class=\"\"> Connected doctors </h5>\n\t\t        \t\t\t<ul class=\"patient-status\"> \n\t\t\t\t\t\t\t\t<li *ngFor=\"let doctor of totalPendingPatients\">Dr. {{GetDoctorNameById(doctor._id)}}</li>\n\t\t\t\t\t\t\t</ul>\n\t\t        \t\t</div>\n\t\t        \t</div>\n\t\t        \t<div class=\"col-md-4 col-sm-4 col-xs-12\">\n\t\t        \t\t<div class=\"ipd-connected doctors\">\n\t\t        \t\t\t<h5 class=\"\"> Current occupancy </h5>\n\t\t        \t\t\t<ul class=\"patient-status\">\n\t\t\t\t\t\t\t\t<li *ngFor=\"let doctor of totalPendingPatients\">{{doctor.doctor.length}}-Patient</li>\n\t\t\t\t\t\t\t</ul>\n\t\t        \t\t</div>\n\t\t        \t</div>\n\t        \t</div>\n\t        \t<!-- <h4 class=\"\"> Connected doctors - <span>Current occupancy</span></h4> -->\n\t\t\t\t<!-- <ul class=\"patient-status\">\n\t\t\t\t\t<li>Dr. Gagandeep Sethi - <span class=\"patient-status-span\">3 patients</span></li>\n\t\t\t\t\t<li>Dr. Gagandeep Sethi - <span class=\"patient-status-span\">3 patients</span></li>\n\t\t\t\t\t<li>Dr. Gagandeep Sethi - <span class=\"patient-status-span\">3 patients</span></li>\n\t\t\t\t\t<li>Dr. Gagandeep Sethi - <span class=\"patient-status-span\">3 patients</span></li>\n\t\t\t\t</ul> -->\n    \t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/headerfour/headerfour.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderfourComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
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







var HeaderfourComponent = /** @class */ (function () {
    function HeaderfourComponent(formBuilder, router, userService, toastr) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
        this.smartIpdData = JSON.parse(localStorage['smartIpdDetails']);
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                if (event.url == '/header-four-layout/dashboard-ipd' || event.url == "/header-four-layout") {
                    _this.doctorsRegisteredForSmartClinic = _this.smartIpdData.doctorsRegisteredForSmartClinic;
                    var admin = _this.doctorsRegisteredForSmartClinic.filter(function (d) { return d.type_of_doctor == "admin_doctor"; });
                    _this.adminDoctor = admin[0];
                    _this.headerHeading = _this.adminDoctor.clinic_details.clinic_name;
                    _this.heading = "Occupancy Status";
                    _this.ipd = false;
                }
                else if (event.url == '/header-four-layout/ipd-book') {
                    _this.heading = "IPD Book";
                    _this.headerHeading = "IPD Book";
                    _this.ipd = true;
                }
            }
        });
    }
    HeaderfourComponent.prototype.ngOnInit = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_6_socket_io_client__(__WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__["a" /* environment */].socket);
        this.nosidebar = 'no-sidebar';
        this.GetSmartIpdDataAfterLogin();
        this.general_bed_charges = 0;
        this.semi_private_bed_charges = 0;
        this.private_bed_charges = 0;
        this.addressFilled = true;
    };
    HeaderfourComponent.prototype.sidebarclose = function () {
        if (this.nosidebar == 'no-sidebar') {
            this.nosidebar = '';
        }
        else {
            this.nosidebar = 'no-sidebar';
        }
    };
    HeaderfourComponent.prototype.signOut = function () {
        this.socket.emit('logout', { 'doctor_id': this.smartIpdData._id });
        localStorage.removeItem(localStorage['smartIpdDetails']);
        localStorage.removeItem('isLoggedinSmartIpd');
        this.router.navigate(['/']);
        // localStorage.clear();
    };
    HeaderfourComponent.prototype.GetSmartIpdDataAfterLogin = function () {
        var _this = this;
        var object = {
            smart_ipd_id: this.smartIpdData.dataSmartIpd._id
        };
        this.userService.GetSmartIpdDataAfterLogin(object).subscribe(function (data) {
            console.log(data);
            var dataToStore = {
                dataSmartIpd: data.dataSmartIpd,
                doctorsRegisteredForSmartClinic: data.doctorsRegisteredForSmartClinic,
                doctorsOfSameClinic: data.doctorsOfSameClinic
            };
            localStorage['smartIpdDetails'] = JSON.stringify(dataToStore);
            if (data.dataSmartIpd.address && data.dataSmartIpd.address.clinic_name) {
                _this.clinic_name = data.dataSmartIpd.address.clinic_name;
            }
            else {
                _this.addressFilled = false;
            }
            if (data.dataSmartIpd.address && data.dataSmartIpd.address.address) {
                _this.address = data.dataSmartIpd.address.address;
            }
            else {
                _this.addressFilled = false;
            }
            if (data.dataSmartIpd.address && data.dataSmartIpd.address.mobile) {
                _this.mobile = data.dataSmartIpd.address.mobile;
            }
            else {
                _this.addressFilled = false;
            }
            _this.doctorsOfSameClinic = data.doctorsOfSameClinic;
            _this.doctorsRegisteredForSmartClinic = data.doctorsRegisteredForSmartClinic;
            var admin = _this.doctorsRegisteredForSmartClinic.filter(function (d) { return d.type_of_doctor == "admin_doctor"; });
            _this.adminDoctor = admin[0];
            console.log(_this.adminDoctor);
            if (!_this.adminDoctor.clinic_services.general_bed_charges ||
                !_this.adminDoctor.clinic_services.semi_private_bed_charges ||
                !_this.adminDoctor.clinic_services.private_bed_charges) {
                _this.addressFilled = false;
            }
            _this.general_bed_charges = _this.adminDoctor.clinic_services.general_bed_charges;
            _this.semi_private_bed_charges = _this.adminDoctor.clinic_services.semi_private_bed_charges;
            _this.private_bed_charges = _this.adminDoctor.clinic_services.private_bed_charges;
            if (!_this.addressFilled) {
                $("#clinicDetailModal").modal("show");
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeaderfourComponent.prototype.updateBedCharges = function () {
        var _this = this;
        if (this.general_bed_charges < 0 || this.semi_private_bed_charges < 0 || this.private_bed_charges < 0) {
            this.toastr.warning("Charges can't be negative", "Warning");
            return;
        }
        else if (this.general_bed_charges == null || this.semi_private_bed_charges == null || this.private_bed_charges == null) {
            this.toastr.warning("Enter charges", "Warning");
            return;
        }
        else if (this.clinic_name == null || this.address == null || this.mobile == null || this.clinic_name == "" || this.address == "" || this.mobile == "" || this.clinic_name == undefined || this.address == undefined || this.mobile == undefined || isNaN(this.mobile) || this.mobile.toString().length != 10) {
            this.toastr.warning("Invalid clinic details", "Warning");
            return;
        }
        else {
            var object = {
                id: this.smartIpdData.dataSmartIpd.id,
                address: {
                    clinic_name: this.clinic_name,
                    address: this.address,
                    mobile: this.mobile
                }
            };
            this.userService.UpdateSmartIpdAddress(object).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    var object = {
                        itemId: _this.adminDoctor.itemId,
                        general_bed_charges: _this.general_bed_charges,
                        semi_private_bed_charges: _this.semi_private_bed_charges,
                        private_bed_charges: _this.private_bed_charges
                    };
                    _this.userService.UpdateBedCharges(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response == true) {
                            _this.toastr.success(data.message, "Success");
                            _this.ngOnInit();
                            $("#clinicDetailModal").modal("hide");
                        }
                        else {
                            _this.toastr.error(data.message, "Error");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
        // $('#subscr_modal').modal({
        //     backdrop: 'static',
        //     keyboard: false
        // })
    };
    HeaderfourComponent.prototype.GetIPDPatients = function () {
        var _this = this;
        this.userService.GetTotalIpdPendingPatientsOfDoctors(this.smartIpdData.dataSmartIpd._id).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.totalPendingPatients = data.data;
                $("#consultingDoctorModal").modal("show");
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeaderfourComponent.prototype.GetDoctorNameById = function (id) {
        for (var i = 0; i < this.doctorsRegisteredForSmartClinic.length; i++) {
            if (this.doctorsRegisteredForSmartClinic[i]._id.toString() == id) {
                return this.doctorsRegisteredForSmartClinic[i].first_name;
            }
        }
    };
    HeaderfourComponent.prototype.closeClinicModal = function () {
        if (this.addressFilled) {
            $("#clinicDetailModal").modal("hide");
        }
    };
    HeaderfourComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-headerfour',
            template: __webpack_require__("../../../../../src/app/shared/headerfour/headerfour.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/headerfour/headerfour.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], HeaderfourComponent);
    return HeaderfourComponent;
}());



/***/ })

});
//# sourceMappingURL=header-four-layout.module.chunk.js.map