webpackJsonp(["header-two-layout.module"],{

/***/ "../../../../../src/app/header-two-layout/header-two-layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderTwoLayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_two_layout_component__ = __webpack_require__("../../../../../src/app/header-two-layout/header-two-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__header_two_layout_component__["a" /* HeaderTwoLayoutComponent */],
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-prescription', loadChildren: './dashboard-prescription/dashboard-prescription.module#DashboardPrescriptionModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-prescription-pad', loadChildren: './dashboard-prescription-pad/dashboard-prescription-pad.module#DashboardPrescriptionPadModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-prescription-view', loadChildren: './dashboard-prescription-view/dashboard-prescription-view.module#DashboardPrescriptionViewModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-referral', loadChildren: './dashboard-referral/dashboard-referral.module#DashboardReferralModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            // { path: 'dashboard-sms', loadChildren: './dashboard-sms/dashboard-sms.module#DashboardSmsModule',canActivate: [AuthGuard] },
            { path: 'dashboard-ipd-detail', loadChildren: './dashboard-ipd-detail/dashboard-ipd-detail.module#DashboardIpdDetailModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-diagnostics-detail', loadChildren: './dashboard-diagnostics-detail/dashboard-diagnostics-detail.module#DashboardDiagnosticsDetailModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-pharmacy-detail', loadChildren: './dashboard-pharmacy-detail/dashboard-pharmacy-detail.module#DashboardPharmacyDetailModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-consultation-prescription', loadChildren: './dashboard-consultation-prescription/dashboard-consultation-prescription.module#DashboardConsultationPrescriptionModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-consultation-patient', loadChildren: './dashboard-consultation-patient/dashboard-consultation-patient.module#DashboardConsultationPatientModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-consultation-time', loadChildren: './dashboard-consultation-time/dashboard-consultation-time.module#DashboardConsultationTimeModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-consultation-treatment', loadChildren: './dashboard-consultation-treatment/dashboard-consultation-treatment.module#DashboardConsultationTreatmentModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-consultation-diagnosis', loadChildren: './dashboard-consultation-diagnosis/dashboard-consultation-diagnosis.module#DashboardConsultationDiagnosisModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-consultation-investigation', loadChildren: './dashboard-consultation-investigation/dashboard-consultation-investigation.module#DashboardConsultationInvestigationModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-aoi', loadChildren: './dashboard-aoi/dashboard-aoi.module#DashboardAoiModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-staff-management', loadChildren: './dashboard-staff-management/dashboard-staff-management.module#DashboardStaffManagementModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-clinic-report', loadChildren: './dashboard-clinic-report/dashboard-clinic-report.module#DashboardClinicReportModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-progress', loadChildren: './dashboard-progress/dashboard-progress.module#DashboardProgressModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-ongoprescription', loadChildren: './dashboard-ongoprescription/dashboard-ongoprescription.module#DashboardOngoprescriptionModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-preset', loadChildren: './dashboard-preset/dashboard-preset.module#DashboardPresetModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-savedpreset', loadChildren: './dashboard-savedpreset/dashboard-savedpreset.module#DashboardSavedpresetModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'edit-profile/:params', loadChildren: './edit-profile/edit-profile.module#EditProfileModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'discharge-patient', loadChildren: './discharge-patient/discharge-patient.module#DischargePatientModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'discharge-patientpdf', loadChildren: './discharge-patientpdf/discharge-patientpdf.module#DischargePatientpdfModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'sms', loadChildren: './sms/sms.module#SmsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'aoi', loadChildren: './aoi/aoi.module#AoiModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'opd', loadChildren: './opd/opd.module#OpdModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'clinic-summary-opd', loadChildren: './clinic-summary-opd/clinic-summary-opd.module#ClinicSummaryOpdModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'clinic-summary-diagnostic', loadChildren: './clinic-summary-diagnostic/clinic-summary-diagnostic.module#ClinicSummaryDiagnosticModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'clinic-summary-pharmacy', loadChildren: './clinic-summary-pharmacy/clinic-summary-pharmacy.module#ClinicSummaryPharmacyModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'clinic-summary-ipd', loadChildren: './clinic-summary-ipd/clinic-summary-ipd.module#ClinicSummaryIpdModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'clinic-summary-all', loadChildren: './clinic-summary-all/clinic-summary-all.module#ClinicSummaryAllModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'doctor-appointments', loadChildren: './doctor-appointments/doctor-appointments.module#DoctorAppointmentsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-progress-time', loadChildren: './dashboard-progress-time/dashboard-progress-time.module#DashboardProgressTimeModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-progress-diagnosis', loadChildren: './dashboard-progress-diagnosis/dashboard-progress-diagnosis.module#DashboardProgressDiagnosisModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-progress-ipd', loadChildren: './dashboard-progress-ipd/dashboard-progress-ipd.module#DashboardProgressIpdModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-progress-pharmacy', loadChildren: './dashboard-progress-pharmacy/dashboard-progress-pharmacy.module#DashboardProgressPharmacyModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-progress-prescription', loadChildren: './dashboard-progress-prescription/dashboard-progress-prescription.module#DashboardProgressPrescriptionModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'search-records', loadChildren: './search-records/search-records.module#SearchRecordsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'delete-records', loadChildren: './delete-records/delete-records.module#DeleteRecordsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'opd-holiday', loadChildren: './opd-holiday/opd-holiday.module#OpdHolidayModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'share', loadChildren: './share/share.module#ShareModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dashboard-prescription-pad-off', loadChildren: './dashboard-prescription-pad-off/dashboard-prescription-pad-off.module#DashboardPrescriptionPadOffModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'rate-clinic', loadChildren: './rate-clinic/rate-clinic.module#RateClinicModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'faq-doctor', loadChildren: './faq-doctor/faq-doctor.module#FaqDoctorModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'tutorials-doctor', loadChildren: './tutorials-doctor/tutorials-doctor.module#TutorialsDoctorModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'subscription', loadChildren: './subscription/subscription.module#SubscriptionModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'subscription-details', loadChildren: './subscription-details/subscription-details.module#SubscriptionDetailsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'subscription-payment', loadChildren: './subscription-payment/subscription-payment.module#SubscriptionPaymentModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'write-to-us', loadChildren: './write-to-us/write-to-us.module#WriteToUsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
            { path: 'purchase-service', loadChildren: './purchase-service/purchase-service.module#PurchaseServiceModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] }
        ]
    }
];
var HeaderTwoLayoutRoutingModule = /** @class */ (function () {
    function HeaderTwoLayoutRoutingModule() {
    }
    HeaderTwoLayoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], HeaderTwoLayoutRoutingModule);
    return HeaderTwoLayoutRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/header-two-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/header-two-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n\t<app-headertwo></app-headertwo>\n\t<app-dashboard-sidebar></app-dashboard-sidebar>\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/header-two-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderTwoLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderTwoLayoutComponent = /** @class */ (function () {
    function HeaderTwoLayoutComponent(_spinner, userService, router) {
        this._spinner = _spinner;
        this.userService = userService;
        this.router = router;
        if (localStorage['doctorDetails']) {
            this.doctorData = JSON.parse(localStorage['doctorDetails']);
        }
        this.GetDoctorDataById();
    }
    HeaderTwoLayoutComponent.prototype.ngOnInit = function () {
        if (localStorage['doctorDetails']) {
            this.doctorData = JSON.parse(localStorage['doctorDetails']);
        }
        if (localStorage['subscription_info']) {
            if (this.isJson(localStorage['subscription_info'])) {
                this.subscriptionInfo = JSON.parse(localStorage['subscription_info']);
            }
            else {
                this.subscriptionInfo = localStorage['subscription_info'];
            }
        }
    };
    HeaderTwoLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // hide spinner once all loaders are completed
        __WEBPACK_IMPORTED_MODULE_1__theme_services__["a" /* BaThemePreloader */].load().then(function (values) {
            _this._spinner.hide();
        });
    };
    HeaderTwoLayoutComponent.prototype.GetDoctorDataById = function () {
        if (this.doctorData) {
            this.userService.GetDoctorDataById(this.doctorData._id).subscribe(function (data) {
                console.log('subodhhh');
                console.log(data);
                if (data.response == true) {
                    localStorage['doctorDetails'] = JSON.stringify(data.data);
                    localStorage['subscription_info'] = JSON.stringify(data.data.subscription_id);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            localStorage.clear();
            this.router.navigate(['/header-one-layout/homepage']);
        }
    };
    HeaderTwoLayoutComponent.prototype.isJson = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    HeaderTwoLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-two-layout',
            template: __webpack_require__("../../../../../src/app/header-two-layout/header-two-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/header-two-layout.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__theme_services__["b" /* BaThemeSpinner */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], HeaderTwoLayoutComponent);
    return HeaderTwoLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/header-two-layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTwoLayoutModule", function() { return HeaderTwoLayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_two_layout_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/header-two-layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_two_layout_component__ = __webpack_require__("../../../../../src/app/header-two-layout/header-two-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_headertwo_headertwo_component__ = __webpack_require__("../../../../../src/app/shared/headertwo/headertwo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_dashboard_sidebar_dashboard_sidebar_component__ = __webpack_require__("../../../../../src/app/shared/dashboard-sidebar/dashboard-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HeaderTwoLayoutModule = /** @class */ (function () {
    function HeaderTwoLayoutModule() {
    }
    HeaderTwoLayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__header_two_layout_routing_module__["a" /* HeaderTwoLayoutRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__header_two_layout_component__["a" /* HeaderTwoLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_headertwo_headertwo_component__["a" /* HeaderTwoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_dashboard_sidebar_dashboard_sidebar_component__["a" /* DashboardSidebarComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__theme_services__["b" /* BaThemeSpinner */], __WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]],
        })
    ], HeaderTwoLayoutModule);
    return HeaderTwoLayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dashboard-sidebar/dashboard-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dashboard-sidebar/dashboard-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/shared/dashboard-sidebar/dashboard-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardSidebarComponent; });
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

var DashboardSidebarComponent = /** @class */ (function () {
    function DashboardSidebarComponent() {
    }
    DashboardSidebarComponent.prototype.ngOnInit = function () {
    };
    DashboardSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-sidebar',
            template: __webpack_require__("../../../../../src/app/shared/dashboard-sidebar/dashboard-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/dashboard-sidebar/dashboard-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardSidebarComponent);
    return DashboardSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/headertwo/headertwo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\n<style type=\"text/css\">\n\t\n\ta.cstm-sb-menu:hover{\n\t\tcolor:#01b0f0!important;\n\t}\n</style>\n<div class=\"headersidebar-wrap\" [ngClass]=\"nosidebar\" >\n\t<div class=\"dashboard-header\">\n\t\t<div class=\"dashboard-header-one\">\n\t\t\t<div class=\"close-dashboard-sidebar\">\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarclose()\" >\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t</button>\n\t\t\t\t<a routerLink=\"/header-two-layout/dashboard\"><i *ngIf =\"showHome\" class=\"fa fa-home hme-icn\" aria-hidden=\"true\"></i></a>\n\t\t\t</div>\n\t\t\t<!-- <div *ngIf=\"headertitle=='Area of Influence'\">\n\t\t\t</div> -->\n\t\t\t<div class=\"welcomename\">\n\n\t\t\t\t<!-- <a   href=\"\"></a> -->\n\t\t\t\t{{headertitle}}\n\t\t\t</div>\n\n\t\t\t<div class=\"dashboard-signout\">\n\t\t\t\t<a routerLink=\"/\" (click)=\"signOut()\"> Sign-out </a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"dashboard-header-two\" *ngIf=\"hideElement=='editProfile'\">\n\t\t\t<div class=\"dashboard-header-logo\" routerLink=\"/header-two-layout/dashboard\">\n\t\t\t\t<img src=\"./assets/imgs/logoDoctm.png\" class=\"img-responsive\" />\n\t\t\t</div>\n\t\t\t<!-- <div class=\"dashboard-header-smartclinic\">\n\t\t\t\tSmartClinic\n\t\t\t\t<div class=\"fingertip-slogan\"> Clinic at your fingertips </div>\n\t\t\t</div>\n\t\t\t<div class=\"dashboard-subscription\">\n\t\t\t \t<p> Subscription expires on  </p>\n\t\t\t \t<p> 15<sup>th</sup> June, 2018 </p>\n\t\t\t </div> -->\n\t\t\t</div>\n\n\t\t<!--div class=\"dashboard-header-two\" *ngIf=\"hideElement=='global'\">\n\t\t\t<div class=\"dashboard-header-logo\" routerLink=\"/header-two-layout/dashboard\">\n\t\t\t\t<img src=\"./assets/imgs/logoDoctm.png\" class=\"img-responsive\" />\n\t\t\t</div>\n\t\t\t<div class=\"dashboard-header-smartclinic\">\n\t\t\t\tSmartClinic\n\t\t\t\t<div class=\"fingertip-slogan\"> Clinic at your fingertips </div>\n\t\t\t</div>\n\t\t\t<div class=\"dashboard-subscription\" *ngIf = \"checkTrial && subscriptionData?.subscription.status!='active'\">\n\t\t\t \t<p > Trial expires on</p>\n\t\t\t \t<p>{{compareDate | date: 'dd-MMMM-yyyy'}}</p>\n\t\t\t</div>\n\t\t\t<div class=\"dashboard-subscription\" *ngIf = \"subscriptionData?.subscription\">\n\t\t\t \t<p><b>Subscription Activated On</b></p>\n\t\t\t \t<p>{{start_date | date: 'dd-MMMM-yyyy'}}</p>\n\t\t\t</div>\n\t\t\t<div class=\"dashboard-subscription\" *ngIf = \"!checkTrial && subscriptionData?.subscription.status!='active'\">\n\t\t\t \t<a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/edit-profile/clinic_services\" style=\"color:red\"><b>Subscribe/Activate Trial For Your Account</b></a>\n\t\t\t</div>\n\t\t</div-->\n\t\t\n\t\t\n\t\t<div class=\"dashboard-header-two\" *ngIf=\"hideElement=='global'\">\n\t\t\t<div class=\"dashboard-header-logo\" routerLink=\"/header-two-layout/dashboard\">\n\t\t\t\t<img src=\"./assets/imgs/logoDoctm.png\" class=\"img-responsive\" />\n\t\t\t</div>\n\t\t\t<div class=\"dashboard-header-smartclinic\">\n\t\t\t\tSmartClinic\n\t\t\t\t<div class=\"fingertip-slogan\"> Clinic at your fingertips </div>\n\t\t\t</div>\n\t\t\t<div class=\"dashboard-subscription\" *ngIf=\"!isExpired\">\n\t\t\t\t<p > {{plan}} plan expires on</p>\n\t\t\t\t<p>{{dd1}}<sup>{{th1}}</sup> {{month1}} {{year1}}</p>\n\t\t\t</div>\n\t\t\t<div class=\"dashboard-subscription\" *ngIf=\"isExpired\">\n\t\t\t\t<p style=\"color:red; font-weight:bold\">TRIAL EXPIRED</p>\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"dashboard-header-two\" *ngIf=\"hideElement=='prescription'\">\n\t\t\t<div class=\"dashboard-header-logo\" routerLink=\"/header-two-layout/dashboard\">\n\t\t\t\t<img src=\"./assets/imgs/logoDoctm.png\" class=\"img-responsive\" />\n\t\t\t</div>\n\t\t\t<div class=\"dashboard-header-smartclinic\">\n\t\t\t\t{{subheaderTitle}} \n\t\t\t\t<h4 *ngIf=\"subbottomTitle==true\">(Real-time) </h4>\n\t\t\t</div>\n\t\t\t<div class=\"dashboard-subscription\">\n\t\t\t\t<button class=\"btn btn-custom btn-orng\" routerLink=\"/header-two-layout/dashboard-prescription\" *ngIf=\"prescbutton=='progress'\"> Back to Consultation </button>\n\t\t\t\t<button class=\"btn btn-custom btn-orng\" routerLink=\"/header-two-layout/dashboard-savedpreset\" *ngIf=\"prescbutton=='preset'\"> My Saved Presets </button>\t\t\t \t\n\t\t\t\t<button class=\"btn btn-custom btn-orng\" routerLink=\"/header-two-layout/dashboard-prescription\" *ngIf=\"prescbutton=='preset'\"> Back to Consultation </button>\t\t\n\t\t\t\t<button class=\"btn btn-custom btn-orng\" routerLink=\"/header-two-layout/dashboard-preset\" *ngIf=\"prescbutton=='savedpreset'\"> Create Presets </button>\t\t\t \t \t\n\t\t\t\t<button class=\"btn btn-custom btn-orng\" routerLink=\"/header-two-layout/dashboard-prescription\"*ngIf=\"prescbutton=='savedpreset'\"> Back to Consultation </button>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"dashboard-header-ptwo\" *ngIf=\"hideElement=='onlyOne'\">\n\t\t\t<!-- <div class=\"col-lg-2\">\n\t\t\t\t<div class=\"dashboard-header-logo\" routerLink=\"/header-two-layout/dashboard\">\n\t\t\t\t\t<img src=\"./assets/imgs/logoDoctm.png\" class=\"img-responsive\" />\n\t\t\t\t\t<div class=\"dshbrd-btn\">\n\t\t\t\t\t\t<button class=\"btn btn-custom\" routerLink=\"/header-two-layout/dashboard\"> Dashboard </button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t\t\t\n\t\t\t<div class=\"\">\n\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t<h4> Consultation Time Utilization <span data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{helpText[8]?.text}}\"> <i class=\"fa fa-info-circle color-red\"></i> </span>\n\t\t\t\t\t</h4>\n\t\t\t\t\t<!-- <div class=\"progress-outer\"> -->\n\t\t\t\t\t\t<div class=\"progress\">\n\n\t\t\t\t\t\t\t<div class=\"progress-bar {{classColor}} main-wr\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"value\" style=\"width: 50%;line-height:2.2!important;font-size: 20px!important;\">\n\t\t\t\t\t\t\t\t<div class=\"ani-bar\">\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class=\"\">{{value}}%</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<!-- </div> -->\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6 text-left\">\n\t\t\t\t\t\t\t\t0%\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-6 text-right\">\n\t\t\t\t\t\t\t\t100%\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"form-group col-md-3 col-sm-3 col-xs-12 pad-marg\">\n\t\t\t\t\t\t\t\t<span class=\"box box-1\"></span>\n\t\t\t\t\t\t\t\t<label>< 30%, Poor </label>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-3 col-sm-3 col-xs-12  pad-marg\">\n\t\t\t\t\t\t\t\t<span class=\"box box-2\"></span>\n\t\t\t\t\t\t\t\t<label>30 - 50%, Good</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-3 col-sm-3 col-xs-12  pad-marg\">\n\t\t\t\t\t\t\t\t<span class=\"box box-3\"></span>\n\t\t\t\t\t\t\t\t<label>50-70%, Very Good</label>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-3 col-sm-3 col-xs-12 pad-marg\">\n\t\t\t\t\t\t\t\t<span class=\"box box-4\"></span>\n\t\t\t\t\t\t\t\t<label>>70%, Excellent</label>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div><b> <span class=\"cstm-font-1\">Avg. time per patient <span class=\"cstm-font\">{{avgTimePerPatient}} </span></span></b><span> min</span></div> -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-2\">\n\t\t\t\t\t\t<div class=\"dashboard-btns prgres\">\n\t\t\t\t\t\t\t<button class=\"btn btn-custom\" routerLink=\"/header-two-layout/dashboard-progress\">\n\t\t\t\t\t\t\t\tProgress\n\t\t\t\t\t\t\t\t<div> Today </div>\n\t\t\t\t\t\t\t\t<span data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{helpText[5]?.text}}\"> <i class=\"fa fa-info-circle color-red\"></i> </span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-2\">\n\t\t\t\t\t\t<div class=\"dashboard-btns prescription\">\n\t\t\t\t\t\t\t<button class=\"btn btn-custom\" routerLink=\"/header-two-layout/dashboard-ongoprescription\">\n\t\t\t\t\t\t\t\tON-THE-GO\n\t\t\t\t\t\t\t\t<div> Prescription </div>\n\t\t\t\t\t\t\t\t<span data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{helpText[6]?.text}}\"> <i class=\"fa fa-info-circle color-red\"></i> </span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-2\">\n\t\t\t\t\t\t<div class=\"dashboard-btns preset\">\n\t\t\t\t\t\t\t<button class=\"btn btn-custom\" routerLink=\"/header-two-layout/dashboard-preset\">\n\t\t\t\t\t\t\t\tCreate\n\t\t\t\t\t\t\t\t<div> Preset </div>\n\t\t\t\t\t\t\t\t<span data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{helpText[7]?.text}}\"> <i class=\"fa fa-info-circle color-red\"></i> </span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- <div class=\"progress-outer\">\n\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t<div class=\"progress-bar {{classColor}}\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"value\" >\n\t\t\t\t\t\t\t<span class=\"\">{{value}}% Complete</span>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t</div> -->\n\t\t<!-- \t<div class=\"dashboard-header-smartclinic\">\n\t\t\t\tSmartClinic\n\t\t\t\t<div class=\"fingertip-slogan\"> Clinic at your fingertips </div>\n\t\t\t\t<div class=\"dashboard-subscription\" *ngIf = \"!isExpired\">\n\t\t\t \t<p> {{plan}} plan expires on  </p>\n\t\t\t \t<p>{{dd1}}<sup>{{th1}}</sup> {{month1}} {{year1}}</p>\n\t\t\t\t</div>\n\t\t\t<div class=\"dashboard-subscription\" *ngIf = \"isExpired\">\n\t\t\t \t<p style=\"color:red; font-weight:bold\"> Trial Expired  </p>\n\t\t\t\t</div>\t\t\n\t\t\t</div> -->\n\n\n\t\t</div>\n\n\t\t<div class=\"dashboard-header-none\" *ngIf=\"hideElement=='none'\">\n\n\t\t</div>\n\t</div>\n\t<div class=\"page-sidebar-wrapper\">\n\t\t<div id=\"bs-example-navbar-collapse-1\" class=\"dashbrd-sidbar navbar-collapse p-0\" >\n\t\t\t<div class=\"sidebar-switch\">\n\t\t\t\t<div class=\"form-group col-md-12 co-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"cus-switch\" *ngIf=\"doctorData.digital_precipitation\">\n\t\t\t\t\t\t<span class=\"switch-text\"> Digital Prescription</span>\n\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t<input type=\"checkbox\"   value=\"{{doctorData.digital_precipitation}}\" (change)=\"checkDigital($event, doctorData.itemId)\" [checked]=\"(doctorData.digital_precipitation? 'checked' : '')\" />\n\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"cus-switch\" *ngIf=\"!doctorData.digital_precipitation\">\n\t\t\t\t\t\t<span class=\"switch-text\"> Digital Prescription</span>\n\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t<input type=\"checkbox\"   value=\"{{doctorData.digital_precipitation}}\" (change)=\"checkDigital($event, doctorData.itemId)\" />\n\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>   \n\t\t\t\t<!--{{doctorData.clinic_services | json}}-->\n\t\t\t\t<!--div class=\"form-group col-md-12 co-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"cus-switch\">\n\t\t\t\t\t\t<span class=\"switch-text\"> Notes </span>\n\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t  \t<input type=\"checkbox\" checked=\"\">\n\t\t\t\t\t\t  \t<span class=\"slider round\"></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div-->\t\t\t\t\n\t\t\t</div>\n\t\t\t<ul class=\"dshbrd-sidebar-menu m-0 p-0\" type=\"none\">\n\n\t\t\t\t<li class=\"sidebar-item\">\n\t\t\t\t\t<a class=\"sidebar-link\" href=\"javascript:void(0)\" routerLink=\"/header-two-layout/subscription\">\n\t\t\t\t\t\t<span class=\"title\"> Subscription </span>\t                    \n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li class=\"sidebar-item\">\n\t\t\t\t\t<a class=\"sidebar-link\" href=\"javascript:void(0)\" routerLink=\"/header-two-layout/tutorials-doctor\">\n\t\t\t\t\t\t<span class=\"title\"> Tutorials </span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li class=\"sidebar-item\">\n\t\t\t\t\t<a class=\"sidebar-link\" href=\"javascript:void(0)\" routerLink=\"/header-two-layout/opd-holiday\">\n\t\t\t\t\t\t<span class=\"title\">Set OPD Holiday </span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li class=\"sidebar-item dropdown sidebar-dropdown\">\n\t\t\t\t\t<a class=\"sidebar-link dropdown-toggle\" (click)=\"openDropdownList('Settings')\" href=\"javascript:void(0)\">\n\t\t\t\t\t\t<span class=\"title\">\n\t\t\t\t\t\t\tEdit <span class=\"caret\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<ul class=\"dropdown-menu\" [ngClass]=\"(settingDropdown)?'active':''\">\n<!-- \t\t        \t\t<li class=\"sidebar-item dropdown sidebar-dropdown cstm-sb-menu\">\n\t\t\t\t\t        <a class=\"sidebar-link dropdown-toggle cstm-sb-menu\" (click)=\"openDropdownList('Profile')\" href=\"javascript:void(0)\" style=\"color:#000;\">\n\t\t\t\t\t        \t<span class=\"title\">\n\t\t\t\t\t        \t\tEdit Profile <span class=\"caret\"></span>\n\t\t\t\t\t        \t</span>\n\t\t\t\t\t        </a>\n\t\t\t\t        \t<ul class=\"dropdown-menu\" [ngClass]=\"(editProfileList)?'active':''\">\n\t\t\t\t\t\t\t\t<li class=\"sidebar-item\"><a (click)=\"editProfile('change_mobile')\" href=\"javascript:void(0)\" class=\"sidebar-link\"><span class=\"title\"> Update Mobile </span> </a></li>\n\t\t\t\t\t\t\t\t<li class=\"sidebar-item\"><a (click)=\"editProfile('change_email')\" href=\"javascript:void(0)\" class=\"sidebar-link\"><span class=\"title\"> Update Email </span> </a></li>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t<li class=\"sidebar-item\"><a (click)=\"editProfile('edit_profile')\" href=\"javascript:void(0)\" class=\"sidebar-link\"><span class=\"title\">Profile </span> </a></li>\n\t\t\t\t\t\t<li class=\"sidebar-item\"><a (click)=\"editProfile('change_schedule')\" href=\"javascript:void(0)\" class=\"sidebar-link\"><span class=\"title\">Schedule </span> </a></li>\n\t\t\t\t\t\t<li class=\"sidebar-item\" *ngIf=\"doctorData.type_of_doctor == 'admin_doctor'\"><a (click)=\"editProfile('edit_clinic')\" href=\"javascript:void(0)\" class=\"sidebar-link\"><span class=\"title\">Clinic Details </span> </a></li>\n\t\t\t\t\t\t<li class=\"sidebar-item\"><a (click)=\"editProfile('pad_customization')\" href=\"javascript:void(0)\" class=\"sidebar-link\"><span class=\"title\"> Prescription</span> </a></li>\n\t\t\t\t\t\t<li class=\"sidebar-item\"><a (click)=\"editProfile('change_password')\" href=\"javascript:void(0)\" class=\"sidebar-link\"><span class=\"title\">Password / PIN </span> </a></li>\n\t\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\n\t\t\t\t<li class=\"sidebar-item dropdown sidebar-dropdown\">\n\t\t\t\t\t<a class=\"sidebar-link dropdown-toggle\" (click)=\"openDropdownList('Clinic')\" href=\"javascript:void(0)\">\n\t\t\t\t\t\t<span class=\"title\">\n\t\t\t\t\t\t\tClinic Setup <span class=\"caret\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<ul class=\"dropdown-menu\" [ngClass]=\"(clinicSetupList)?'active':''\">\n\t\t\t\t\t\t<li class=\"sidebar-item\"><a (click)=\"editProfile('clinic_doctors')\" href=\"javascript:void(0)\" class=\"sidebar-link\"><span class=\"title\"> Clinic Doctors </span> </a></li>\n\t\t\t\t\t\t<li class=\"sidebar-item\"><a (click)=\"editProfile('smart_assistant')\" href=\"javascript:void(0)\" class=\"sidebar-link\"><span class=\"title\"> SmartAssistant </span> </a></li>\n\t\t\t\t\t\t<li class=\"sidebar-item\"><a (click)=\"editProfile('clinic_services')\" href=\"javascript:void(0)\" class=\"sidebar-link\"><span class=\"title\"> Clinic Services </span> </a></li>\n\t\t\t\t\t\t<li class=\"sidebar-item\" *ngIf = \"doctorData?.clinic_services?.Clinic_Pharmacy == true\" ><a (click)=\"editProfile('smart_pharmacy')\"  href=\"javascript:void(0)\" class=\"sidebar-link\"><span class=\"title\"> SmartPharmacy </span> </a></li>\n\t\t\t\t\t\t<li class=\"sidebar-item\" *ngIf = \"doctorData?.clinic_services?.Clinic_Diagnostics==true\"><a (click)=\"editProfile('smart_diagnostics')\"  href=\"javascript:void(0)\" class=\"sidebar-link dropdown-toggle\"><span class=\"title\"> SmartDiagnostics </span> </a></li>\n\t\t\t\t\t\t<!--li class=\"sidebar-item\"  *ngIf=\"checkService('Smart IPD')\"><a (click)=\"editProfile('smart_ipd')\" *ngIf = \"doctorData.clinic_services.clinicServicesStatus == 'Yes'\" href=\"javascript:void(0)\"  class=\"sidebar-link\"><span class=\"title\"> Smart IPD </span> </a></li-->\n\t\t\t\t\t\t\n\t\t\t\t\t\t<li class=\"sidebar-item dropdown sidebar-dropdown\" *ngIf=\"doctorData?.clinic_services?.Clinic_IPD==true\">\n\t\t\t\t\t\t\t<a class=\"sidebar-link dropdown-toggle\" (click)=\"openDropdownList('Diagnostics')\" href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t<span class=\"title\">\n\t\t\t\t\t\t\t\t\tSmartIPD <span class=\"caret\"></span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu\" [ngClass]=\"(diagnosticsDrowdown)?'active':''\"><li class=\"sidebar-item\" ><a (click)=\"editProfile('smart_ipd')\"  class=\"sidebar-link\"><span class=\"title\">SmartIPD </span> </a></li>\n\t\t\t\t\t\t\t\t<li class=\"sidebar-item\">\n\t\t\t\t\t\t\t\t\t<a class=\"sidebar-link\" href=\"javascript:void(0)\" routerLink=\"/header-two-layout/discharge-patient\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"title\"> Discharge <span class=\"badge\">{{dataIpd}}</span></span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\n\n\t\t\t\t\t<li class=\"sidebar-item\">\n\t\t\t\t\t\t<a class=\"sidebar-link\" href=\"javascript:void(0)\" routerLink=\"/header-two-layout/delete-records\">\n\t\t\t\t\t\t\t<span class=\"title\"> Delete Records </span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li class=\"sidebar-item\">\n\t\t\t\t\t\t<a class=\"sidebar-link\" href=\"javascript:void(0)\" routerLink=\"/header-two-layout/write-to-us\">\n\t\t\t\t\t\t\t<span class=\"title\"> Write To Us </span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li class=\"sidebar-item\">\n\t\t\t\t\t\t<a class=\"sidebar-link\" href=\"javascript:void(0)\" routerLink=\"/header-two-layout/rate-clinic\">\n\t\t\t\t\t\t\t<span class=\"title\"> Rate us </span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li class=\"sidebar-item\">\n\t\t\t\t\t\t<a class=\"sidebar-link\" href=\"javascript:void(0)\" routerLink=\"/header-two-layout/share\">\n\t\t\t\t\t\t\t<span class=\"title\"> Share </span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\t            <!-- <li class=\"sidebar-item\">\n\t                <a class=\"sidebar-link\" href=\"javascript:void(0)\">\n\t                    <span class=\"title\"> Queries &amp; Suggestions </span>\n\t                </a>\n\t            </li> -->\n\n\t            <!-- <li class=\"sidebar-item\">\n\t                <a class=\"sidebar-link\" href=\"javascript:void(0)\" routerLink=\"/header-two-layout/sms\">\n\t                    <span class=\"title\"> Sms </span>\n\t                </a>\n\t            </li>\n\t        -->\n\t            <!-- <li class=\"sidebar-item\">\n\t                <a class=\"sidebar-link\" href=\"javascript:void(0)\" routerLink=\"/header-two-layout/opd\">\n\t                    <span class=\"title\"> OPD </span>\n\t                </a>\n\t            </li> -->\n\n\t            <!-- <li class=\"sidebar-item\">\n\t                <a class=\"sidebar-link\" href=\"javascript:void(0)\" routerLink=\"/header-two-layout/aoi\">\n\t                    <span class=\"title\"> Area of Influence </span>\n\t                </a>\n\t            </li> -->\n\n\n\n\n\n\t            <li class=\"sidebar-item\">\n\t            \t<a class=\"sidebar-link\" href=\"javascript:void(0)\">\n\t            \t\t<span class=\"title\" routerLink=\"/\" (click)=\"signOut()\"> Sign Out </span>\n\t            \t</a>\n\t            </li>\n\n\t        </ul>\n\t    </div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/headertwo/headertwo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hme-icn {\n  font-size: 40px;\n  color: #000;\n  padding-top: 1px;\n  padding-left: 10px; }\n\n.dashboard-header-two {\n  margin: 2px 0px !important; }\n\n.cus-content-wrapper {\n  padding-top: 0px; }\n\n.progress {\n  height: 50px !important;\n  margin-bottom: 10px; }\n\n.consult-time .progress-bar {\n  line-height: 2.2px !important;\n  font-size: 20px !important; }\n\n.progress-bar.green {\n  background-color: #72d447; }\n\n.progress-bar.red {\n  background-color: red; }\n\n.progress-bar.yellow {\n  background-color: #ffc000; }\n\n.progress-bar.blue {\n  background-color: #00b0f0; }\n\n.box {\n  display: inline-block;\n  width: 10px;\n  background-color: grey;\n  height: 10px; }\n\n.box-1 {\n  background-color: red; }\n\n.box-2 {\n  background-color: #ffc000; }\n\n.box-3 {\n  background-color: #00b0f0; }\n\n.box-4 {\n  background-color: #92d050; }\n\n.consult-time {\n  padding-left: 10px;\n  /*border-left: 1px solid #dcdcdc; */ }\n\n.wrap-tbl {\n  padding-top: 10px;\n  border-top: 1px solid #dcdcdc; }\n\n.chart-box {\n  width: initial;\n  float: none; }\n\n.bg-h4 {\n  color: #3ab00c;\n  margin-top: 0px; }\n\n.cus-sidebar-wrapper .cus-sidebar {\n  height: initial; }\n\n.mg-top {\n  margin-bottom: 0px; }\n\n.btn-custm {\n  display: block;\n  margin: 15px auto;\n  -webkit-box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.75);\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.75);\n  border-radius: 10px;\n  width: 93%;\n  font-size: 18px;\n  background: #bcd3e5;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: -webkit-gradient(linear, left top, left bottom, from(#bcd3e5), to(#8cb8ff));\n  background: linear-gradient(to bottom, #bcd3e5 0%, #8cb8ff 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bcd3e5', endColorstr='#8cb8ff',GradientType=0 );\n  /* IE6-9 */\n  word-spacing: 6px;\n  cursor: initial; }\n\n.btn-wh {\n  background: #a0fdb7 !important; }\n\n.cstm-font {\n  font-size: 16px;\n  color: #1565C0; }\n\n.cstm-font-1 {\n  font-size: 16px; }\n\n.side-bar-cstm {\n  z-index: 99; }\n\n.res-tab-2 {\n  max-height: 200px; }\n\n.cstm-ul-new li a {\n  background-color: transparent;\n  color: #000;\n  padding: 10px 104px;\n  cursor: pointer;\n  border-radius: 0px;\n  border-bottom: 2px solid transparent; }\n\n.cstm-ul-new li.active a {\n  background-color: #e0e0e0;\n  color: #000;\n  border-bottom: 2px solid #00b0f0; }\n\n.tab-new {\n  min-height: 450px;\n  max-height: 450px;\n  padding: 0px 8px;\n  border-left: 1px solid #dcdcdc;\n  border-right: 1px solid #dcdcdc;\n  overflow-x: hidden; }\n\n.clr-blue {\n  color: #00b0f0;\n  font-weight: bold; }\n\n.cstm-mg {\n  margin-top: 5px; }\n\n.btn-go {\n  background-color: transparent;\n  border: 1px solid #002160;\n  margin-bottom: 5px;\n  min-width: 62%; }\n\n.btn-go:hover {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  background: #98C74F;\n  border-color: #98C74F;\n  color: #fff; }\n\n/*.cus-content{\nz-index:1;\n}*/\n\n.li-cstm a {\n  text-align: center !important;\n  background: #000 !important;\n  color: #fff !important;\n  font-size: 16px !important;\n  font-weight: inherit !important;\n  padding: 6px !important; }\n\n/*.tab-new-cstm tr td{\nfont-size: 10px;\n}*/\n\n.brder-cstm {\n  padding-bottom: 1px;\n  margin-bottom: 6px;\n  border-bottom: 1px solid #a7a7a7;\n  position: relative; }\n\n.brder-cstm::after {\n  content: \"\";\n  position: absolute;\n  height: 6px;\n  width: 12px;\n  background-color: #ffffff;\n  top: 41px;\n  right: -3px; }\n\n.cus-sidebar ul {\n  border: 1px solid #a7a7a7; }\n\n.brdr-left {\n  border-left: 1px solid #bfc4cb; }\n\n.brdr-btm {\n  border-bottom: 1px solid #bfc4cb; }\n\n.blank-ftr {\n  height: 35px;\n  width: 100%;\n  background-color: #00b0f0;\n  float: left;\n  position: fixed;\n  bottom: 0;\n  z-index: 99; }\n\ncanvas {\n  height: 245px !important; }\n\n.cus-content-wrapper {\n  padding-bottom: 0px !important; }\n\n.cus-content-wrapper .cus-content {\n  margin-left: 0px !important; }\n\n.progress {\n  border-radius: 0px;\n  border: 1.5px solid #ababab;\n  /*position: relative;\noverflow: hidden;*/\n  /*border-bottom: 1.5px solid #ababab;\nborder-left: 1.5px solid #ababab;*/\n  background-color: #fff; }\n\n.main-wr {\n  position: relative;\n  overflow: hidden; }\n\n.progress-outer {\n  border: 1px solid #000;\n  padding: 2px 0px;\n  height: 56px; }\n\n.ani-bar {\n  width: 100%;\n  height: 46px;\n  position: absolute;\n  top: 0;\n  left: -72px;\n  /*\nbackground: -webkit-linear-gradient(left,transparent 12%,#ffffff 35%,transparent 55%)no-repeat;*/\n  background: -webkit-linear-gradient(left, transparent 4%, #ffffff 40%, transparent 82%) no-repeat;\n  -webkit-background-size: 50% 100%;\n  -webkit-animation-name: moving-gradient;\n  -webkit-animation-duration: 3s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n  opacity: 0.6; }\n\n.ani-bar {\n  -webkit-animation-duration: 3s; }\n\n@-webkit-keyframes moving-gradient {\n  0% {\n    left: -120px; }\n  100% {\n    left: 100%; } }\n\nh4 {\n  margin-top: -2px;\n  margin-bottom: 5px;\n  font-size: 16px; }\n\n.pad-marg {\n  padding-right: 0px !important;\n  margin: 0px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/headertwo/headertwo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderTwoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_mission_service__ = __webpack_require__("../../../../../src/app/providers/mission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_two_layout_subscription_details_subscription_details_component__ = __webpack_require__("../../../../../src/app/header-two-layout/subscription-details/subscription-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__confirmation_popup_custom_dialog_custom_dialog_component__ = __webpack_require__("../../../../../src/app/confirmation-popup/custom-dialog/custom-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HeaderTwoComponent = /** @class */ (function () {
    function HeaderTwoComponent(formBuilder, router, userService, toastr, missionService, datePipe, dialog) {
        //this.services=JSON.parse(localStorage['doctorsOfSameClinic']);
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
        this.missionService = missionService;
        this.datePipe = datePipe;
        this.dialog = dialog;
        this.showHome = false;
        this.helpText = [];
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy',
            defaultOpen: false,
        };
        this.fromDate = new Date();
        this.toDate = new Date();
        this.fromDate1 = new Date();
        this.toDate1 = new Date();
        this.newDate = new Date();
        this.color = 'accent';
        this.value = 0;
        this.classColor = '';
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]) {
                _this.nosidebar = 'no-sidebar';
                _this.showHome = false;
                if ((event.url.includes('/header-two-layout/dashboard-prescription')) || (event.url.includes('/header-two-layout/dashboard-prescription-pad'))) {
                    if (event.url.includes('/header-two-layout/dashboard-prescription') && !event.url.includes('/header-two-layout/dashboard-prescription-pad')) {
                        _this.hideElement = 'onlyOne';
                        _this.showHome = true;
                    }
                    else {
                        _this.hideElement = 'none';
                        _this.showHome = true;
                    }
                    _this.headertitle = 'CONSULTATION';
                    _this.subbottomTitle = false;
                    _this.showHome = true;
                }
                else if ((event.url.includes('/header-two-layout/dashboard-ongoprescription'))) {
                    _this.hideElement = 'prescription';
                    _this.headertitle = 'ON-THE-GO PRESCRIPTION';
                    _this.showHome = true;
                    if (event.url.includes('/header-two-layout/dashboard-preset')) {
                        _this.subheaderTitle = 'Presets';
                        _this.subbottomTitle = false;
                        _this.prescbutton = 'preset';
                    }
                    else {
                        _this.subheaderTitle = '';
                        _this.subbottomTitle = false;
                        _this.prescbutton = '';
                    }
                }
                else if (event.url.includes('/header-two-layout/dashboard-preset')) {
                    _this.hideElement = 'prescription';
                    _this.headertitle = 'CREATE NEW PRESETS';
                }
                else if (event.url.includes('/header-two-layout/dashboard-savedpreset')) {
                    _this.subheaderTitle = 'Saved Presets';
                    _this.hideElement = 'prescription';
                    _this.headertitle = 'CONSULTATION';
                    _this.prescbutton = 'savedpreset';
                    _this.subbottomTitle = false;
                }
                else if (event.url.includes('/header-two-layout/dashboard-consultation-prescription')) {
                    _this.headertitle = "YOUR PRESCRIPTION ANALYTICS";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/dashboard-consultation-time')) {
                    _this.headertitle = "YOUR TIME ANALYTICS";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/dashboard-consultation-patient')) {
                    _this.headertitle = "YOUR OPD ANALYTICS";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/dashboard-consultation-treatment')) {
                    _this.headertitle = "CLINIC PHARMACY ANALYTICS";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/dashboard-consultation-diagnosis')) {
                    _this.headertitle = "CLINIC DIAGNOSTIC ANALYTICS";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/dashboard-consultation-investigation')) {
                    _this.headertitle = "CLINIC IPD ANALYTICS";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/opd-holiday')) {
                    _this.headertitle = "Set OPD Holidays";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/discharge-patient')) {
                    _this.getDoctor();
                    _this.ngOnInit();
                }
                else if (event.url.includes('/header-two-layout/aoi')) {
                    _this.headertitle = "Area of Influence";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/clinic-summary-opd')) {
                    _this.headertitle = "CLINIC OPD";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/clinic-summary-pharmacy')) {
                    _this.headertitle = "CLINIC PHARMACY";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/clinic-summary-diagnostic')) {
                    _this.headertitle = "CLINIC DIAGNOSTICS";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/clinic-summary-ipd')) {
                    _this.headertitle = "CLINIC IPD";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/clinic-summary-all')) {
                    _this.headertitle = "CLINIC SUMMARY";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/doctor-appointments')) {
                    _this.headertitle = "Appointment List";
                    _this.hideElement = 'none';
                    // this.showHome = true
                }
                else if (event.url.includes('/header-two-layout/dashboard-progress')) {
                    _this.headertitle = "PROGRESS TODAY";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/edit-profile/clinic_services')) {
                    _this.headertitle = "Update Clinic Services";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/edit-profile/clinic_doctors')) {
                    _this.headertitle = " Doctors";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/search-records')) {
                    _this.headertitle = " Search Records";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/delete-records')) {
                    _this.headertitle = "Delete Records";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/dashboard-clinic-report')) {
                    _this.headertitle = " Clinic Records";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/dashboard-referral')) {
                    _this.headertitle = " Referrals";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/sms')) {
                    _this.headertitle = " SMS";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/edit-profile/clinic_services')) {
                    _this.headertitle = "Clinic Services";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/edit-profile/change_schedule')) {
                    _this.headertitle = "Edit Schedule";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/edit-profile/edit_clinic')) {
                    _this.headertitle = "Edit Clinic Details";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/edit-profile/pad_customization')) {
                    _this.headertitle = "Edit Prescription Pad";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/edit-profile/change_password')) {
                    _this.headertitle = "Change Password / PIN";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/edit-profile/smart_assistant')) {
                    _this.headertitle = "SmartAssistant";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/edit-profile/smart_ipd')) {
                    _this.headertitle = "SmartIPD";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/edit-profile/smart_diagnostics')) {
                    _this.headertitle = "SmartDiagnostics";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/edit-profile/smart_pharmacy')) {
                    _this.headertitle = "SmartPharmacy";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/edit-profile')) {
                    _this.headertitle = "Edit Profile";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/share')) {
                    _this.headertitle = "Share";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/dashboard-prescription-pad-off')) {
                    _this.headertitle = "CONSULTATION PAD";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/rate-clinic')) {
                    _this.headertitle = "Rate Us";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/faq-doctor')) {
                    _this.headertitle = "FAQ";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/tutorials-doctor')) {
                    _this.headertitle = "Tutorials";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/subscription')) {
                    _this.headertitle = "Subscription Details";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/opd')) {
                    _this.headertitle = "ANALYTICS CLINIC SCORE";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else if (event.url.includes('/header-two-layout/write-to-us')) {
                    _this.headertitle = "Write To Us";
                    _this.hideElement = 'none';
                    _this.showHome = true;
                }
                else {
                    _this.getDoctor();
                }
            }
        });
    }
    HeaderTwoComponent.prototype.ngDoCheck = function () {
        var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        if (localStorage['subscription_info']) {
            // console.log(localStorage['subscription_info']);
            if (this.isJson(localStorage['subscription_info'])) {
                this.subscriptionInfo = JSON.parse(localStorage['subscription_info']);
            }
            else {
                this.subscriptionInfo = localStorage['subscription_info'];
            }
            if (this.subscriptionInfo) {
                this.expiryDate = this.subscriptionInfo.trial_last_date;
            }
            var today = new Date();
            var someDate = new Date(this.expiryDate);
            if (someDate.setHours(0, 0, 0, 0) == today.setHours(0, 0, 0, 0)) {
                this.isExpired = true;
            }
            else {
                this.isExpired = false;
            }
            this.dd1 = someDate.getDate();
            this.th1 = this.nth(this.dd1);
            this.month1 = mlist[someDate.getMonth()];
            this.year1 = someDate.getFullYear();
            if (this.subscriptionInfo) {
                this.plan = this.subscriptionInfo.subscription_id;
            }
        }
    };
    HeaderTwoComponent.prototype.nth = function (d) {
        if (d > 3 && d < 21)
            return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    HeaderTwoComponent.prototype.ngOnInit = function () {
        //alert('here');
        this.nosidebar = 'no-sidebar';
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        this.services = this.doctorData.clinic_services;
        console.log(this.services);
        console.log(this.doctorData);
        //this.services=this.services.clinic_services;
        console.log(this.doctorData.services_purchased);
        $('[data-toggle="tooltip"]').tooltip();
        this.socket = __WEBPACK_IMPORTED_MODULE_8_socket_io_client__(__WEBPACK_IMPORTED_MODULE_7__environments_environment_prod__["a" /* environment */].socket);
        this.GetDoctorDetail();
        console.log(this.digitalPrec);
        /////////////////SOCKET ON//////////////////////
        this.socket.emit('room join', {
            room_id: this.doctorData.smart_assistant_id
        });
        this.socket.emit('room join', {
            room_id: this.doctorData.smart_pharmacy_id
        });
        this.socket.emit('room join', {
            room_id: this.doctorData.smart_diagnostics_id
        });
        this.fetchSubscription();
        // this.doctorData = JSON.parse(localStorage['doctorDetails'])
        console.log(this.doctorData);
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        this.activatedtab = 0;
        this.activatetab(1);
        /////////////////SOCKET ON end//////////////////////
        this.getHelpText();
    };
    HeaderTwoComponent.prototype.activatetab = function (ii) {
        var _this = this;
        this.totalHours = 0;
        this.totalMin = 0;
        this.countMonday = 0;
        this.countTuesday = 0;
        this.countWednesday = 0;
        this.countThursday = 0;
        this.countFriday = 0;
        this.countSaturday = 0;
        this.countSunday = 0;
        this.avgConsTime = 0;
        var localDateArray = [];
        this.timeArray = [];
        this.avgTimeArray = [];
        this.avgCtuPercentage = 0;
        this.doctorTotalWorkingMin = 0;
        this.activatedtab = ii;
        var object;
        object = {};
        var date = new Date();
        object.doctor_id = this.doctorData._id;
        object.end_date = new Date();
        if (ii == 1) {
            object.start_date = date;
        }
        // else if (ii == 1) {
        //     object.start_date = new Date(date.setDate(date.getDate() - 6))
        // } else if (ii == 2) {
        //     object.start_date = new Date(date.setDate(date.getDate() - 13))
        // } else if (ii == 3) {
        //     object.start_date = new Date(date.setMonth(date.getMonth() - 1))
        // } else if (ii == 4) {
        //     object.start_date = new Date(date.setMonth(date.getMonth() - 3))
        // } else if (ii == 5) {
        //     object.start_date = new Date(date.setMonth(date.getMonth() - 6))
        // } else if (ii == 6) {
        //     object.start_date = new Date(date.setFullYear(date.getFullYear() - 1))
        // } else if (ii == 7) {
        //     object.start_date = new Date()
        //     object.maximum = true
        // }
        console.log(object);
        this.fromDate = new Date(object.start_date);
        this.toDate = new Date(object.end_date);
        this.totalTimeUtilizedHours = 0;
        this.totalTimeUtilizedMin = 0;
        this.longestConsultationMin = 0;
        this.longestConsultationSec = 0;
        this.shortestConsultationMin = 0;
        this.shortestConsultationSec = 0;
        this.avgTimePerPatient = "";
        var totalPatients = 0;
        var dateArray = [];
        this.loading = true;
        this.userService.TimeAnalytics(object).subscribe(function (result) {
            console.log(result);
            if (result.response) {
                if (result.totalTimeInSeconds.length > 0) {
                    _this.totalTimeUtilizedHours = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) / 3600);
                    _this.totalTimeUtilizedMin = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) % 3600);
                    _this.totalTimeUtilizedMin = Math.floor(_this.totalTimeUtilizedMin / 60);
                }
                if (result.dataLongestConsultation.length > 0) {
                    _this.longestConsultationMin = Math.floor((result.dataLongestConsultation[0].totalSeconds) / 60);
                    _this.longestConsultationSec = Math.floor((result.dataLongestConsultation[0].totalSeconds) % 60);
                }
                if (result.dataShortestConsultation.length > 0) {
                    _this.shortestConsultationMin = Math.floor((result.dataShortestConsultation[0].totalSeconds) / 60);
                    _this.shortestConsultationSec = Math.floor((result.dataShortestConsultation[0].totalSeconds) % 60);
                }
                var avgTotalPatientSeconds = 0;
                var addTime = 0;
                var totalTimeInSeconds = 0;
                if (result.dataTotalPatientsDischarged.length > 0) {
                    for (var i = 0; i < result.dataTotalPatientsDischarged.length; i++) {
                        var totalPatientSeconds;
                        totalPatientSeconds = 0;
                        dateArray.push(_this.datePipe.transform(result.dataTotalPatientsDischarged[i].data[0].createAt, 'yyyy-MM-dd'));
                        for (var j = 0; j < result.dataTotalPatientsDischarged[i].data.length; j++) {
                            totalPatients++;
                            totalPatientSeconds = (result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)) / 3600;
                            totalTimeInSeconds += result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds);
                            addTime += result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds);
                        }
                        avgTotalPatientSeconds = (totalPatientSeconds / result.dataTotalPatientsDischarged[i].data.length) * 60;
                        _this.timeArray.push(totalPatientSeconds.toFixed(3));
                        _this.avgTimeArray.push(avgTotalPatientSeconds.toFixed(3));
                    }
                    ///////////// hours logic /////////////////////////////
                    var daysOfYear = [];
                    for (var d = _this.fromDate; d <= _this.toDate; d.setDate(d.getDate() + 1)) {
                        daysOfYear.push(new Date(d));
                    }
                    for (var i = 0; i < daysOfYear.length; i++) {
                        localDateArray.push(_this.datePipe.transform(daysOfYear[i], 'EEEE'));
                    }
                    for (var i = 0; i < localDateArray.length; i++) {
                        if (localDateArray[i] == "Monday") {
                            _this.countMonday++;
                        }
                        else if (localDateArray[i] == "Tuesday") {
                            _this.countTuesday++;
                        }
                        else if (localDateArray[i] == "Wednesday") {
                            _this.countWednesday++;
                        }
                        else if (localDateArray[i] == "Thursday") {
                            _this.countThursday++;
                        }
                        else if (localDateArray[i] == "Friday") {
                            _this.countFriday++;
                        }
                        else if (localDateArray[i] == "Saturday") {
                            _this.countSaturday++;
                        }
                        else if (localDateArray[i] == "Sunday") {
                            _this.countSunday++;
                        }
                    }
                    var total_diff = 0;
                    _this.avgConsTime = _this.doctorData.avgConsTime;
                    for (var j = 0; j < _this.doctorData.consultation_schedule.length; j++) {
                        var min_diff = 0;
                        var hour_diff = 0;
                        for (var k = 0; k < _this.doctorData.consultation_schedule[j].shifts.length; k++) {
                            min_diff += parseInt(_this.doctorData.consultation_schedule[j].shifts[k].toTime.minute) - parseInt(_this.doctorData.consultation_schedule[j].shifts[k].fromTime.minute);
                            hour_diff += parseInt(_this.doctorData.consultation_schedule[j].shifts[k].toTime.hour) - parseInt(_this.doctorData.consultation_schedule[j].shifts[k].fromTime.hour);
                            total_diff = min_diff + (hour_diff * 60);
                        }
                        if (_this.doctorData.consultation_schedule[j].Monday == true) {
                            _this.totalMin += (_this.countMonday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Tuesday == true) {
                            _this.totalMin += (_this.countTuesday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Wednesday == true) {
                            _this.totalMin += (_this.countWednesday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Thursday == true) {
                            _this.totalMin += (_this.countThursday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Friday == true) {
                            _this.totalMin += (_this.countFriday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Saturday == true) {
                            _this.totalMin += (_this.countSaturday * total_diff);
                        }
                        if (_this.doctorData.consultation_schedule[j].Sunday == true) {
                            _this.totalMin += (_this.countSunday * total_diff);
                        }
                    }
                    _this.doctorTotalWorkingMin = _this.totalMin;
                    _this.totalHours = _this.totalMin / 60;
                    _this.totalHours = Math.trunc(_this.totalHours);
                    _this.totalMin = _this.totalMin % 60;
                    console.log(_this.totalTimeUtilizedMin, _this.doctorTotalWorkingMin);
                    _this.value = Math.ceil(_this.getData((_this.totalTimeUtilizedMin / _this.doctorTotalWorkingMin) * 100));
                    if (_this.value < 30) {
                        _this.classColor = 'red';
                    }
                    else if (_this.value < 50) {
                        _this.classColor = 'yellow';
                    }
                    else if (_this.value < 70) {
                        _this.classColor = 'blue';
                    }
                    else {
                        _this.classColor = 'green';
                    }
                    ///////////////////////////////////////////////////////
                }
                _this.avgCtuPercentage = (addTime * 100) / (_this.totalHours * 3600);
                _this.lineChartData = [{
                        data: _this.timeArray,
                        label: 'Total Hours'
                    },];
                _this.lineChartData1 = [{
                        data: _this.avgTimeArray,
                        label: 'Total Avg Min'
                    },];
                _this.lineChartLabels = dateArray;
                _this.lineChartLabels1 = dateArray;
                var min = parseInt(_this.getData(_this.getData(totalTimeInSeconds / totalPatients) / 60));
                var sec = parseInt(_this.getData(_this.getData(totalTimeInSeconds / totalPatients) % 60));
                _this.avgTimePerPatient = min + ":" + sec;
                var newAvgTimeArray = [];
                for (var i = 0; i < dateArray.length; i++) {
                    newAvgTimeArray.push(dateArray[i]);
                }
                ///////////////////////////// Date Sort Logic //////////////////////
                _this.timeSort(dateArray, _this.timeArray);
                _this.avgTimeSort(newAvgTimeArray, _this.avgTimeArray);
                ///////////////////////////// End sort Logic ////////////////////////
                console.log(_this.totalMin);
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    HeaderTwoComponent.prototype.getData = function (data) {
        if (isNaN(data)) {
            return 0;
        }
        else if (data % 1 != 0) {
            return data.toFixed(2);
        }
        else {
            return data;
        }
    };
    HeaderTwoComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    HeaderTwoComponent.prototype.timeSort = function (a, b) {
        var swapped;
        do {
            swapped = false;
            for (var i = 0; i < a.length - 1; i++) {
                if (a[i] > a[i + 1]) {
                    var temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    var temp = b[i];
                    b[i] = b[i + 1];
                    b[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        var newDateArray = [];
        for (var i = 0; i < a.length; i++) {
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'));
        }
        this.lineChartLabels = newDateArray;
    };
    HeaderTwoComponent.prototype.avgTimeSort = function (a, b) {
        var swapped1;
        do {
            swapped1 = false;
            for (var i = 0; i < a.length - 1; i++) {
                if (a[i] > a[i + 1]) {
                    var temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    var temp = b[i];
                    b[i] = b[i + 1];
                    b[i + 1] = temp;
                    swapped1 = true;
                }
            }
        } while (swapped1);
        var newDateArray1 = [];
        for (var i = 0; i < a.length; i++) {
            newDateArray1.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'));
        }
        this.lineChartLabels1 = newDateArray1;
    };
    HeaderTwoComponent.prototype.getHelpText = function () {
        var _this = this;
        this.userService.GetHelpText().subscribe(function (data) {
            if (data.response == true) {
                _this.helpText = data.data;
                console.log(_this.helpText);
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        });
    };
    HeaderTwoComponent.prototype.isJson = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    HeaderTwoComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        /////////////////SOCKET ON//////////////////////        
        this.loading = true;
        var object = {
            itemId: this.doctorData.itemId,
            reg_id: 0
        };
        this.userService.UpdateConsultationInProgress(object).subscribe(function (data) {
            _this.loading = false;
            console.log(data);
            if (data.response == true) {
                localStorage['doctorDetails'] = JSON.stringify(data.data);
                _this.socket.emit('room leave', {
                    room_id: _this.doctorData.smart_assistant_id
                });
                _this.socket.emit('room leave', {
                    room_id: _this.doctorData.smart_pharmacy_id
                });
                _this.socket.emit('room leave', {
                    room_id: _this.doctorData.smart_diagnostics_id
                });
            }
        }, function (err) {
            console.log(err);
        });
        //////////////-----SOCKET ON------////////////////
    };
    HeaderTwoComponent.prototype.fetchSubscription = function () {
        var _this = this;
        this.loading = true;
        var ob = { doctor_id: this.doctorData._id };
        this.userService.fetchSubscription(ob).subscribe(function (data) {
            _this.loading = false;
            console.log(data);
            if (data.response) {
                _this.subscriptionData = data;
                if (_this.subscriptionData.subscription.start_at) {
                    _this.start_date = new Date(_this.subscriptionData.subscription.start_at * 1000);
                    _this.start_date = _this.start_date.toGMTString();
                    /* var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    this.start_date = this.start_date.toLocaleDateString('in-IN', options)(); */
                }
                //alert(this.subscriptionData.subscription.start_at);
                if (_this.subscriptionData.subscription.current_end) {
                    _this.end_date = new Date(_this.subscriptionData.subscription.current_end * 1000);
                    _this.end_date = _this.end_date.toGMTString();
                    /* var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    this.end_date = this.end_date.toLocaleDateString('in-IN', options); */
                }
                _this.subscriptionData.purchaseInformation.forEach(function (purchase) {
                    if (purchase.Price) {
                        _this.subTotal += parseFloat(purchase.Price);
                    }
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeaderTwoComponent.prototype.getDoctor = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        this.hideElement = 'global';
        this.headertitle = 'Welcome Dr. ' + this.doctorData.first_name; //+" "+this.doctorData.last_name
        this.subbottomTitle = false;
        this.prescbutton = '';
    };
    HeaderTwoComponent.prototype.openDropdown = function () {
        if (this.dropdownMenu == 'active') {
            this.dropdownMenu = '';
        }
        else {
            this.dropdownMenu = 'active';
        }
    };
    HeaderTwoComponent.prototype.sidebarclose = function () {
        if (this.nosidebar == 'no-sidebar') {
            this.nosidebar = '';
        }
        else {
            this.nosidebar = 'no-sidebar';
        }
    };
    HeaderTwoComponent.prototype.signOut = function () {
        this.socket.emit('logout', { 'doctor_id': this.doctorData._id });
        localStorage.removeItem(localStorage['doctorDetails']);
        localStorage.removeItem('isLoggedinDoctor');
        this.router.navigate(['/']);
    };
    HeaderTwoComponent.prototype.openDropdownList = function (type) {
        if (type == 'Clinic') {
            this.clinicSetupList = !this.clinicSetupList;
        }
        else if (type == 'Profile') {
            this.editProfileList = !this.editProfileList;
        }
        else if (type == 'Settings') {
            this.settingDropdown = !this.settingDropdown;
        }
        else if (type == 'Diagnostics') {
            this.diagnosticsDrowdown = !this.diagnosticsDrowdown;
        }
    };
    HeaderTwoComponent.prototype.editProfile = function (data) {
        this.router.navigate(['header-two-layout/edit-profile', data]);
    };
    HeaderTwoComponent.prototype.GetDoctorDetail = function () {
        var _this = this;
        this.dataIpd = 0;
        this.userService.GetDoctorDetail(this.doctorData.itemId).subscribe(function (data) {
            console.log('wooooooooooooooooooooo');
            console.log(data);
            if (data.response == true) {
                console.log(data.data.digital_precipitation, "abcdefg");
                _this.digitalPrec = data.data.digital_precipitation;
                localStorage['doctorDetails'] = JSON.stringify(data.data);
                localStorage['subscription_info'] = JSON.stringify(data.data.subscription_id);
                _this.dataIpd = data.dataIpd;
                for (var i = 0; i < data.doctorsOfSameClinic.length; i++) {
                    if (data.doctorsOfSameClinic[i]) {
                        if (data.doctorsOfSameClinic[i].type_of_doctor == "admin_doctor") {
                            _this.admin = data.doctorsOfSameClinic[i];
                            localStorage['doctorsOfSameClinic'] = JSON.stringify(_this.admin);
                            break;
                        }
                    }
                }
                _this.GetSevenDaysTrialSubscription();
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeaderTwoComponent.prototype.checkDigital = function (event, id) {
        var _this = this;
        if (!event.target.checked) {
            this.doctorData.digital_precipitation = false;
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__confirmation_popup_custom_dialog_custom_dialog_component__["a" /* CustomDialogComponent */], {
                data: {
                    header: "Note: Putting off the digital prescription will enable you to write hand written prescriptions with following changes.",
                    body1: '1. Blank prescriptions with pre-filled patient details can now be printed by SmartAssistant. This blank prescriptions to be given to patients entering the consultation room.',
                    body2: '2. You can see patient details and dispense them from your console. History, Consultation fee, Follow-up and Referral can still be done by you.',
                    body3: '3. After the consultation the SmartAssistant can upload the hand written prescriptions for future reference.',
                    btn1: 'Continue',
                    btn2: 'Cancel'
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log(result);
                console.log('The dialog was closed');
                if (result == "yes") {
                    //console.log(activity.id)
                    var status;
                    //alert(event.target.checked);
                    /* 	if (event.target.checked) {
                            status=true;
                        }else{
                            status=false;
                        } */
                    //console.log(!status);
                    _this.doctorData.digital_precipitation = event.target.checked;
                    localStorage['doctorDetails'] = JSON.stringify(_this.doctorData);
                    _this.loading = true;
                    var object = {
                        itemId: id,
                        digital_precipitation: event.target.checked
                    };
                    console.log(object);
                    _this.userService.ChangeDigitalPrescriptionStatus(object).subscribe(function (data) {
                        console.log(data);
                        if (data.response) {
                            _this.socket.emit('digitalPresc', {
                                room_id: _this.doctorData.smart_assistant_id
                            });
                            // console.log(this.socket)
                            _this.router.navigate(['/header-two-layout/dashboard']);
                            // window.location.reload()
                            _this.ngOnInit();
                            _this.toastr.success(data.message, "Succes");
                        }
                        else {
                            _this.toastr.success(data.message, "Error");
                        }
                        //alert(event.target.checked);
                        _this.loading = false;
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    _this.doctorData.digital_precipitation = true;
                    //	this.ngOnInit()
                }
            });
        }
        else {
            //console.log(activity.id)
            var status;
            //alert(event.target.checked);
            /* 	if (event.target.checked) {
                    status=true;
                }else{
                    status=false;
                } */
            //console.log(!status);
            this.doctorData.digital_precipitation = event.target.checked;
            localStorage['doctorDetails'] = JSON.stringify(this.doctorData);
            this.loading = true;
            var object = {
                itemId: id,
                digital_precipitation: event.target.checked
            };
            console.log(object);
            this.userService.ChangeDigitalPrescriptionStatus(object).subscribe(function (data) {
                console.log(data);
                if (data.response) {
                    _this.socket.emit('digitalPresc', {
                        room_id: _this.doctorData.smart_assistant_id
                    });
                    // console.log(this.socket)
                    _this.router.navigate(['/header-two-layout/dashboard']);
                    // window.location.reload()
                    _this.ngOnInit();
                    _this.toastr.success(data.message, "Succes");
                }
                else {
                    _this.toastr.success(data.message, "Error");
                }
                //alert(event.target.checked);
                _this.loading = false;
            }, function (err) {
                console.log(err);
            });
        }
    };
    HeaderTwoComponent.prototype.GetSevenDaysTrialSubscription = function () {
        var _this = this;
        this.userService.GetSevenDaysTrialSubscription().subscribe(function (data) {
            console.log(data);
            if (data.response) {
                _this.trialData = data.data;
                for (var i = 0; i < data.data.length; i++) {
                    //console.log(data.data[i].start_date , this.compareDate)
                    if (_this.admin) {
                        if (_this.admin._id == data.data[i].doctor_id) {
                            // console.log(data.data[i].start_date)
                            var date = new Date(data.data[i].start_date);
                            _this.compareDate = new Date(date.setDate(date.getDate() + 6));
                            console.log(_this.compareDate);
                            if (data.data[i].free_plan == 'free') {
                                _this.checkTrial = true;
                            }
                        }
                    }
                    if (_this.datePipe.transform(data.data[i].start_date, 'dd/MM/yyyy') > _this.datePipe.transform(_this.compareDate, 'dd/MM/yyy')) {
                        _this.checkTrial = false;
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeaderTwoComponent.prototype.checkService = function (service) {
        console.log(service);
        if (this.doctorData.services_purchased.length > 0) {
            if (this.doctorData.services_purchased.some(function (e) { return e.Item == service; })) {
                return true;
            }
        }
        else {
            if (this.doctorData) {
                console.log(this.doctorData);
                if (this.doctorData.clinic_services) {
                    if (this.doctorData.clinic_services.Clinic_IPD == true && service == 'Smart IPD') {
                        return true;
                    }
                    if (this.doctorData.clinic_services.Clinic_Pharmacy == true && service == 'Smart Pharmacy') {
                        return true;
                    }
                    if (this.doctorData.clinic_services.Clinic_Diagnostics == true && service == 'Smart Diagnostics') {
                        return true;
                    }
                }
            }
        }
        /* //console.log(JSON.stringify(this.services));
        if(this.services.Clinic_IPD && service=='IPD'){
        return true;
        }
        if(this.services.Clinic_Diagnostics && service=='Diagnostics'){
        return true;
        }
        if(this.services.Clinic_Pharmacy && service=='Pharmacy'){
        return true;
    } */
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__header_two_layout_subscription_details_subscription_details_component__["a" /* SubscriptionDetailsComponent */]),
        __metadata("design:type", Object)
    ], HeaderTwoComponent.prototype, "child", void 0);
    HeaderTwoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-headertwo',
            template: __webpack_require__("../../../../../src/app/shared/headertwo/headertwo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/headertwo/headertwo.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__providers_mission_service__["a" /* MissionService */], __WEBPACK_IMPORTED_MODULE_6__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatDialog */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_6__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_0__providers_mission_service__["a" /* MissionService */], __WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatDialog */]])
    ], HeaderTwoComponent);
    return HeaderTwoComponent;
}());



/***/ })

});
//# sourceMappingURL=header-two-layout.module.chunk.js.map