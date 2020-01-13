webpackJsonp(["dashboard-prescription-view.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-prescription-view/dashboard-prescription-view-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPrescriptionViewRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_prescription_view_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-prescription-view/dashboard-prescription-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_prescription_view_component__["a" /* DashboardPrescriptionViewComponent */]
    }
];
var DashboardPrescriptionViewRoutingModule = /** @class */ (function () {
    function DashboardPrescriptionViewRoutingModule() {
    }
    DashboardPrescriptionViewRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardPrescriptionViewRoutingModule);
    return DashboardPrescriptionViewRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-prescription-view/dashboard-prescription-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-prescription-view/dashboard-prescription-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-view\">\n\n\t<div class=\"padview-header\">\n\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\n\t\t\t<div class=\"form-group doctor-name\">\n\t\t\t\t<h1> Dr. Name </h1>\n\t\t\t</div>\n\t\t\t<div class=\"form-group qual\">\n\t\t\t\tQualification: M.S. (Ortho), FRCS (London), PGD (Ortho), Fellowship (France), RTEF\n\t\t\t</div>\n\t\t\t<div class=\"form-group assoc\">\n\t\t\t\tAssociation: Associations: Retired Head of Dept., Orthopaedics, AIIMS\n\t\t\t</div>\n\t\t\t<div class=\"form-group schdl\">\n\t\t\t\t<h4> Schedule: </h4>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\tMon-Fri: [9:30 – 13:30] [ 14:30 – 18:00] [ 18:30 – 21:30]\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\tSat: [17:00 – 21:00]\n\t\t\t\t</div>\n\t\t\t\t<div class=\"\">\n\t\t\t\t\tClosed\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\n\t\t\t<ul class=\"clinic-detail\">\n\t\t\t\t<li class=\"clinic-name\"><h1> Clinic Name </h1> </li>\n\t\t\t\t<li> Clinic add Line </li>\n\t\t\t\t<li>\n\t\t\t\t\t<h4> For Appointments </h4>\n\t\t\t\t\t<p> Tel: 0522-234578</p>\n\t\t\t\t\t<p> Mb: +91-8967886635 </p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"text-center\">\n\t\t\t\t\t<label> Note: PLEASE TAKE PRIOR APPOINTMENT </label>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<div class=\"padview-body\">\n\t\t<div class=\"col-md-2 col-sm-3 col-xs-12 p-0\">\n\t\t\t<div class=\"emergency-wrap\">\n\t\t\t\t<div class=\"form-group emrgency-consult\">\n\t\t\t\t\t<h5> Emergency Consultion </h5>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"color-blue\"> Treatment for: </h5>\n\t\t\t\t<ul>\n\t\t\t\t\t<li> Diabetes </li>\n\t\t\t\t\t<li> Sinus </li>\n\t\t\t\t\t<li> Hernia </li>\n\t\t\t\t\t<li> Heart problem </li>\n\t\t\t\t\t<li> Hypertension </li>\n\t\t\t\t\t<li> Cold </li>\n\t\t\t\t\t<li> Viral fever </li>\n\t\t\t\t\t<li> Appendicitis </li>\n\t\t\t\t\t<li> DNS </li>\n\t\t\t\t\t<li> Allergy </li>\n\t\t\t\t</ul>\n\t\t\t\t<h5 class=\"color-blue\"> Services Available: </h5>\n\t\t\t\t<ul>\n\t\t\t\t\t<li> X-Ray </li>\n\t\t\t\t\t<li> Ultra Sound </li>\n\t\t\t\t\t<li> TMT </li>\n\t\t\t\t\t<li> ECG </li>\n\t\t\t\t\t<li> Echo </li>\n\t\t\t\t\t<li> Pharmacy </li>\n\t\t\t\t\t<li> Pathology </li>\n\t\t\t\t\t<li> IPD </li>\n\t\t\t\t\t<li> General Surgery </li>\n\t\t\t\t\t<li> Emergency </li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-10 col-sm-9 col-xs-12 p-0\">\n\t\t\t<div class=\"padview-bodyright\">\n\t\t\t\t<ul class=\"padview-body-header\">\n\t\t\t\t\t<li> Prescription ID: 28042018-005 </li>\n\t\t\t\t\t<li> History </li>\n\t\t\t\t\t<li> Test Reports </li>\n\t\t\t\t\t<li> 28<sup>th</sup> April, 2018, 15:32 </li>\n\t\t\t\t</ul>\n\n\t\t\t\t<ul class=\"padview-patient\">\n\t\t\t\t\t<li class=\"img-patient\">\n\t\t\t\t\t\t<img src=\"./assets/imgs/profile_user.jpg\" class=\"img-responsive\" />\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"pat-heading\"> Patient Detail </div>\n\t\t\t\t\t\t<div class=\"\"> <label> Name:</label> Anjali Kapoor </div>\n\t\t\t\t\t\t<div class=\"\"> <label> Age/Sex:</label> 35 Y /F </div>\n\t\t\t\t\t\t<div class=\"\"> <label> Weight: </label> 55 Kg </div>\n\t\t\t\t\t\t<div class=\"\"> <label> Height: </label> 155 cm </div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"pat-heading\"> Patient Detail </div>\n\t\t\t\t\t\t<ul class=\"pat-type\">\n\t\t\t\t\t\t\t<li> Pregnant </li>\n\t\t\t\t\t\t\t<li> Breast Feeding </li>\n\t\t\t\t\t\t\t<li> Diabetic </li>\n\t\t\t\t\t\t\t<li> Hypertensive </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"pat-heading\"> Allergy </div>\n\t\t\t\t\t\t<ul class=\"pat-allergy\">\n\t\t\t\t\t\t\t<li> 1 </li>\n\t\t\t\t\t\t\t<li> 2 </li>\n\t\t\t\t\t\t\t<li> 3 </li>\n\t\t\t\t\t\t\t<li> 4 </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"pat-heading\"> Body Indicators </div>\n\t\t\t\t\t\t<div class=\"\"> <label> Temp: </label> 101.4F </div>\n\t\t\t\t\t\t<div class=\"\"> <label> BP: </label> 178/84 </div>\n\t\t\t\t\t\t<div class=\"\"> <label> Pulse: </label> 86 </div>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\n\t\t\t\t<div class=\"middle-body\">\n\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t<div class=\"number-div\">\t\n\t\t\t\t\t\t\t<div class=\"pat-heading\"> SYMPTOMS </div>\n\t\t\t\t\t\t\t<ol class=\"numberol\">\n\t\t\t\t\t\t\t\t<li> Stomach pain </li>\n\t\t\t\t\t\t\t\t<li> Throat pain </li>\n\t\t\t\t\t\t\t\t<li> Dry eyes </li>\n\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"number-div\">\t\n\t\t\t\t\t\t\t<div class=\"pat-heading\"> FINDINGS </div>\n\t\t\t\t\t\t\t<ol class=\"numberol\">\n\t\t\t\t\t\t\t\t<li> Congested chest </li>\n\t\t\t\t\t\t\t\t<li> Redness in throat </li>\n\t\t\t\t\t\t\t\t<li> Dry eyes </li>\n\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"number-div\">\t\n\t\t\t\t\t\t\t<div class=\"pat-heading\"> DIAGNOSIS </div>\n\t\t\t\t\t\t\t<ol class=\"numberol\">\n\t\t\t\t\t\t\t\t<li> Conjunctivitis </li>\n\t\t\t\t\t\t\t\t<li> Throat pain </li>\n\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t<div class=\"padview-medic\">\n\t\t\t\t\t\t\t<div class=\"pat-heading\"> Medication </div>\n\t\t\t\t\t\t\t<ol class=\"numberol\">\n\t\t\t\t\t\t\t\t<li> Tab <strong>Azee DS</strong> 350mg- twice a day X 5 days </li>\n\t\t\t\t\t\t\t\t<li> Syrup <strong>Augmintin 200</strong> - once a day X 5 days </li>\n\t\t\t\t\t\t\t\t<li> Suspension <strong>Ibugesic Plus</strong> -8ml,X SoS </li>\n\t\t\t\t\t\t\t\t<li> Tab <strong>Crocin Pain Relief</strong>- 2 times X 3 days (after meal) </li>\n\t\t\t\t\t\t\t\t<li> Inj <strong>Bentox 20ml</strong>- daily X 10 days </li>\n\t\t\t\t\t\t\t\t<li> Syrup <strong>Augmintin 200</strong>- once a day X 5 days </li>\n\t\t\t\t\t\t\t\t<li> Suspension <strong>Ibugesic Plus</strong>- 8ml,X SoS </li>\n\t\t\t\t\t\t\t\t<li> Tab <strong>Crocin Pain Relief</strong>- 2 times X 3 days (after meal) </li>\n\t\t\t\t\t\t\t\t<li> Inj <strong>Bentox 20ml</strong>- daily X 10 days </li>\n\t\t\t\t\t\t\t\t<li> Tab <strong>Crocin Pain Relief</strong>- 2 times X 3 days (Bed time) </li>\n\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\t\n\n\t\t\t\t<div class=\"third-body\">\n\t\t\t\t\t<div class=\"number-div\">\t\n\t\t\t\t\t\t<div class=\"pat-heading\"> INVESTIGATION </div>\n\t\t\t\t\t\t<ol class=\"numberol\">\n\t\t\t\t\t\t\t<li> Liver Function Test, LFT </li>\n\t\t\t\t\t\t\t<li> Lipid Profile </li>\n\t\t\t\t\t\t\t<li> Uric Acid </li>\n\t\t\t\t\t\t\t<li> Diabetes screen </li>\n\t\t\t\t\t\t\t<li> ANA Serum </li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"number-div\">\t\n\t\t\t\t\t\t<div class=\"pat-heading\"> OTHER TREATMENTS </div>\n\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t<li>  Gargle 3 times for 5 days</li>\n\t\t\t\t\t\t\t<li>  Physiotherapy 1 hr daily</li>\n\t\t\t\t\t\t\t<li>  Foment 2 times for 10 days</li>\n\t\t\t\t\t\t\t<li>  Exercise daily 30 mints</li>\n\t\t\t\t\t\t\t<li>  Walking daily 20 mints</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"number-div\">\t\n\t\t\t\t\t\t<div class=\"pat-heading\"> VACCINATION </div>\n\t\t\t\t\t\t<h5 class=\"m-0\"> Current</h5>\n\t\t\t\t\t\t<p class=\"m-0\">  1 ....., 2..... </p>\n\t\t\t\t\t\t<h5 class=\"m-0\"> Due</h5>\n\t\t\t\t\t\t<p class=\"m-0\">  1 ....., 2..... </p>\n\t\t\t\t\t\t<p class=\"m-0\">  (Date) </p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"note-box\">\n\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t<table class=\"table table-bordered table-striped\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th> Eye </th>\n\t\t\t\t\t\t\t\t\t\t<th> Sphere </th>\n\t\t\t\t\t\t\t\t\t\t<th> Cylinder </th>\n\t\t\t\t\t\t\t\t\t\t<th> Axis </th>\n\t\t\t\t\t\t\t\t\t\t<th> Add </th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td> Right (OD): </td>\n\t\t\t\t\t\t\t\t\t\t<td> -0.50 </td>\n\t\t\t\t\t\t\t\t\t\t<td> -1.25 </td>\n\t\t\t\t\t\t\t\t\t\t<td> 20 </td>\n\t\t\t\t\t\t\t\t\t\t<td> +2.00 </td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td> Left (OS): </td>\n\t\t\t\t\t\t\t\t\t\t<td> -0.50 </td>\n\t\t\t\t\t\t\t\t\t\t<td> -0.25 </td>\n\t\t\t\t\t\t\t\t\t\t<td> 48 </td>\n\t\t\t\t\t\t\t\t\t\t<td> +2.00 </td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td> PD: </td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\"> 63 </td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\"> 60 </td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"third-body\">\n\t\t\t\t\t<div class=\"number-div\">\t\n\t\t\t\t\t\t<div class=\"pat-heading\"> FOLLOW-UP </div>\n\t\t\t\t\t\t<p> Re-visit after 5 days</p>\n\t\t\t\t\t\t<p> 26/08/2018 </p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"number-div\">\t\n\t\t\t\t\t\t<div class=\"pat-heading\"> SURGERY Reqd. </div>\n\t\t\t\t\t\t<ul class=\"numberol\">\n\t\t\t\t\t\t\t<li> Retinoplasty </li>\n\t\t\t\t\t\t\t<li> Keratoplasty </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"number-div\">\t\n\t\t\t\t\t\t<div class=\"pat-heading\"> REFER: </div>\n\t\t\t\t\t\t<p> Dr..... </p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"padview-sign\">\n\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12 p-0\">\t\n\t\t\t\t\t\t\t<div class=\"padview-confee\">\n\t\t\t\t\t\t\t\t<div class=\"cons-time\"> <strong>Consultation Time:</strong> 5 mins 46 sec </div>\n\t\t\t\t\t\t\t\t<div class=\"\"> <strong>Fee:</strong> 500 INR </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12 text-right p-0\">\n\t\t\t\t\t\t\t<div class=\"signature\">(Signature)</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"padview-footer\">\n\t\t<div class=\"col-md-4 col-sm-4 col-xs-12\">\n\t\t\t<div class=\"padview-powered\">\n\t\t\t\t<div>Powered by <span class=\"color-blue\">doctm</span></div>\n\t\t\t\t<div>For prescription visit <a href=\"#\" class=\"color-blue\">www.mydoctm.com</a></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-4 col-sm-4 col-xs-12\">\n\t\t\t<div class=\"legal\"> <h3> Not for Medico-Legal Purpose </h3> </div>\n\t\t</div>\n\n\t</div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-prescription-view/dashboard-prescription-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPrescriptionViewComponent; });
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

var DashboardPrescriptionViewComponent = /** @class */ (function () {
    function DashboardPrescriptionViewComponent() {
    }
    DashboardPrescriptionViewComponent.prototype.ngOnInit = function () {
    };
    DashboardPrescriptionViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-prescription-view',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-prescription-view/dashboard-prescription-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-prescription-view/dashboard-prescription-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardPrescriptionViewComponent);
    return DashboardPrescriptionViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-prescription-view/dashboard-prescription-view.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPrescriptionViewModule", function() { return DashboardPrescriptionViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_prescription_view_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-prescription-view/dashboard-prescription-view-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_prescription_view_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-prescription-view/dashboard-prescription-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardPrescriptionViewModule = /** @class */ (function () {
    function DashboardPrescriptionViewModule() {
    }
    DashboardPrescriptionViewModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_prescription_view_routing_module__["a" /* DashboardPrescriptionViewRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_prescription_view_component__["a" /* DashboardPrescriptionViewComponent */]]
        })
    ], DashboardPrescriptionViewModule);
    return DashboardPrescriptionViewModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-prescription-view.module.chunk.js.map