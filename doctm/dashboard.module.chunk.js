webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
    }];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashbrd-heading{\n\tmargin-bottom: 5px!important;\n}\n.dashboard-body{\n\tpadding-top: 8px!important;\n\tpadding-bottom:0px!important;\n}\n.dashboard-header-two{\n\tmargin:2px 0px!important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-sec\">\n\t<div class=\"dashboard-body\">\n\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf = \"!isExpired\">\n\t\t\t<h1 class=\"dashbrd-heading\" routerLink=\"/header-two-layout/dashboard-prescription\"> Consultation <span class=\"pull-right\"> <i class=\"fa fa-unlock\"></i> </span> </h1>\n\t\t</div>\n\n\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf = \"isExpired\">\n\t\t\t<a class=\"dashbrd-heading\" style=\"text-decoration: none;\" href=\"javascript:void(0);\" disabled=\"\"  data-toggle=\"modal\" data-target=\"#myModal\"> Consultation <span class=\"pull-right\"> <i class=\"fa fa-lock\"></i> </span> </a>\n\t\t</div>\n\n\t\t<div class=\"dashboard-box\">\n\t\t\t<ul class=\"dashboard-boxul\">\n\t\t\t\t<li *ngIf = \"!isExpired\">\n\t\t\t\t\t<!-- <a routerLink=\"\" data-toggle=\"modal\" data-target=\"#myModal\" disabled=\"\" > -->\n\t\t\t\t\t<a  routerLink=\"/header-two-layout/dashboard-consultation-patient\">\t\n\t\t\t\t\t\t<span class=\"lock\"> <i class=\"fa fa-unlock\"></i> </span>\n\t\t\t\t\t\t<img src=\"./assets/imgs/features-2.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t<p> Analytics </p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf = \"isExpired\">\n\t\t\t\t\t<a routerLink=\"\" data-toggle=\"modal\" data-target=\"#myModal\" disabled=\"\">\n\t\t\t\t\t<!-- <a routerLink=\"/header-two-layout/dashboard-consultation-patient\"> -->\t\n\t\t\t\t\t\t<span class=\"lock\"> <i class=\"fa fa-lock\"></i> </span>\n\t\t\t\t\t\t<img src=\"./assets/imgs/features-2.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t<p> Analytics </p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t\n\t\t\t\t<li *ngIf = \"!isExpired\">\n\t\t\t\t\t<a routerLink=\"/header-two-layout/doctor-appointments\">\n\t\t\t\t\t\t<span class=\"lock\"> <i class=\"fa fa-unlock\"></i> </span>\n\t\t\t\t\t\t<img src=\"./assets/imgs/features-9.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t<p> Appointments <span class=\"badge\">{{appointments_today}}</span></p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li  *ngIf = \"isExpired\">\n\t\t\t\t\t<a routerLink=\"\" data-toggle=\"modal\" data-target=\"#myModal\" disabled=\"\">\n\t\t\t\t\t\t<span class=\"lock\"> <i class=\"fa fa-lock\"></i> </span>\n\t\t\t\t\t\t<img src=\"./assets/imgs/features-9.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t<p> Appointments <span class=\"badge\">{{appointments_today}}</span> </p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li  *ngIf = \"!isExpired\">\n\t\t\t\t\t<a routerLink=\"/header-two-layout/sms\">\n\t\t\t\t\t\t<span class=\"lock\"> <i class=\"fa fa-unlock\"></i> </span>\n\t\t\t\t\t\t<img src=\"./assets/imgs/features-3.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t<p> SMS </p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li *ngIf = \"isExpired\">\n\t\t\t\t\t<a routerLink=\"\" data-toggle=\"modal\" data-target=\"#myModal\" disabled=\"\">\n\t\t\t\t\t\t<span class=\"lock\"> <i class=\"fa fa-lock\"></i> </span>\n\t\t\t\t\t\t<img src=\"./assets/imgs/features-3.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t<p> SMS </p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li  *ngIf = \"!isExpired\">\n\t\t\t\t\t<a routerLink=\"/header-two-layout/aoi\">\n\t\t\t\t\t\t<span class=\"lock\"> <i class=\"fa fa-unlock\"></i> </span>\n\t\t\t\t\t\t<img src=\"./assets/imgs/features-4.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t<p> Area of Influence (AoI) </p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li  *ngIf = \"isExpired\">\n\t\t\t\t\t<a routerLink=\"\" data-toggle=\"modal\" data-target=\"#myModal\" disabled=\"\">\n\t\t\t\t\t\t<span class=\"lock\"> <i class=\"fa fa-lock\"></i> </span>\n\t\t\t\t\t\t<img src=\"./assets/imgs/features-4.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t<p> Area of Influence (AoI) </p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf = \"!isExpired\">\n\t\t\t\t\t<a routerLink=\"/header-two-layout/opd\">\n\t\t\t\t\t\t<span class=\"lock\"> <i class=\"fa fa-unlock\"></i> </span>\n\t\t\t\t\t\t<img src=\"./assets/imgs/features-5.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t<p *ngIf=\"doctorData?.type_of_doctor=='admin_doctor'\"> Clinic score </p>\n\t\t\t\t\t\t<p *ngIf=\"doctorData?.type_of_doctor!='admin_doctor'\"> OPD score </p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf = \"isExpired\">\n\t\t\t\t\t<a routerLink=\"\" data-toggle=\"modal\" data-target=\"#myModal\" disabled=\"\">\n\t\t\t\t\t\t<span class=\"lock\"> <i class=\"fa fa-lock\"></i> </span>\n\t\t\t\t\t\t<img src=\"./assets/imgs/features-5.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t<p *ngIf=\"doctorData?.type_of_doctor=='admin_doctor'\"> Clinic score </p>\n\t\t\t\t\t\t<p *ngIf=\"doctorData?.type_of_doctor!='admin_doctor'\"> OPD score </p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf = \"!isExpired\">\n\t\t\t\t\t<a routerLink=\"/header-two-layout/dashboard-clinic-report\">\n\t\t\t\t\t\t<span class=\"lock\"> <i class=\"fa fa-unlock\"></i> </span>\n\t\t\t\t\t\t<img src=\"./assets/imgs/features-6.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t<p *ngIf=\"doctorData?.type_of_doctor=='admin_doctor'\"> Clinic reports </p>\n\t\t\t\t\t\t<p *ngIf=\"doctorData?.type_of_doctor!='admin_doctor'\"> OPD reports </p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf = \"isExpired\">\n\t\t\t\t\t<a routerLink=\"\" data-toggle=\"modal\" data-target=\"#myModal\" disabled=\"\">\t\t\t\t\t\t<span class=\"lock\"> <i class=\"fa fa-lock\"></i> </span>\n\t\t\t\t\t\t<img src=\"./assets/imgs/features-6.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t<p *ngIf=\"doctorData?.type_of_doctor=='admin_doctor'\"> Clinic reports </p>\n\t\t\t\t\t\t<p *ngIf=\"doctorData?.type_of_doctor!='admin_doctor'\"> OPD reports </p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a routerLink=\"/header-two-layout/dashboard-referral\">\n\t\t\t\t\t\t<img src=\"./assets/imgs/features-7.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t<p>Referrals <span class=\"badge\">{{referrals}}</span></p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li *ngIf = \"!isExpired\">\n\t\t\t\t\t<a routerLink=\"/header-two-layout/search-records\">\n\t\t\t\t\t\t<span class=\"lock\"> <i class=\"fa fa-unlock\"></i> </span>\n\t\t\t\t\t\t<img src=\"./assets/imgs/features-8.png\" class=\"img-responsive\" /> \n\t\t\t\t\t\t<p> Search records</p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf = \"isExpired\">\n\t\t\t\t\t<a routerLink=\"\" data-toggle=\"modal\" data-target=\"#myModal\" disabled=\"\">\n\t\t\t\t\t\t<span class=\"lock\"> <i class=\"fa fa-lock\"></i> </span>\n\t\t\t\t\t\t<img src=\"./assets/imgs/features-8.png\" class=\"img-responsive\" /> \n\t\t\t\t\t\t<p> Search records</p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t</ul>\n\t\t</div>\n\t\t<div *ngIf = \"!isExpired\">\n\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf=\"doctorData.type_of_doctor == 'admin_doctor'\">\n\t\t\t\t<a class=\"clinicsumary\" routerLink=\"/header-two-layout/clinic-summary-opd\"> Clinic Summary <span class=\"pull-right\"> <i class=\"fa fa-unlock\"></i> </span> </a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf = \"isExpired\">\n\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf=\"doctorData.type_of_doctor == 'admin_doctor'\">\n\t\t\t\t<a class=\"clinicsumary\"  routerLink=\"\" data-toggle=\"modal\" data-target=\"#myModal\" disabled=\"\"> Clinic Summary <span class=\"pull-right\"> <i class=\"fa fa-lock\"></i> </span> </a>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade subscription-plan\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" *ngIf = \"doctorData.type_of_doctor == 'admin_doctor'\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t<span aria-hidden=\"true\">×</span>\n\t\t\t</button>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"subsc-modal-body\">\n\t\t\t\t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12 text-center\">\n\t\t\t\t\t\t\t<button class=\"btn black-btn btn-lg\" type=\"button\"> Subscribe </button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12 text-center\">\n\t\t\t\t\t\t\t<button class=\"btn black-btn btn-lg\" type=\"button\" (click) = \"SevenDaysTrialSubscription()\"> Start 7 Days Trial </button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, toastr, userService, datePipe) {
        this.router = router;
        this.toastr = toastr;
        this.userService = userService;
        this.datePipe = datePipe;
        this.subscriptionData = {};
        this.today = new Date();
        this.date = new Date();
        this.subscriptionData.subscription = { 'start_at': '30-05-2019',
            'current_end': '30-05-2010',
            'status': 'active' };
        //this.subscriptionData.subscription={}
        this.subscriptionData.subscription.start_at = "30-05-2019";
        //this.subscriptionData.subscription.current_end="30-05-2020"
        this.subscriptionData.subscription.status = "active";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //alert(localStorage['subscription_info']);
        var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        if (this.IsJsonString(localStorage['doctorDetails'])) {
            this.doctorData = JSON.parse(localStorage['doctorDetails']);
        }
        else {
            if (localStorage['doctorDetails']) {
                this.doctorData = localStorage['doctorDetails'];
            }
        }
        if (localStorage['doctorsOfSameClinic']) {
            // console.log('Doctors of same clinic');
            // console.log(localStorage['doctorsOfSameClinic']);
            this.adminDoctor = JSON.parse(localStorage['doctorsOfSameClinic']);
        }
        // console.log(this.adminDoctor) 
        //console.log(this.adminDoctor.clinic_details.clinic_name);
        if (!this.adminDoctor.clinic_details.clinic_name) {
            this.toastr.warning('Looks like the main admin doctor is not connected with us anymore. Please associate your account with other clinic by providing Clinic Id.', 'Warning');
            this.router.navigate(['/header-two-layout/edit-profile/edit_profile']);
        }
        this.compareDate = new Date(this.date.setDate(this.date.getDate() + 6));
        this.GetSevenDaysTrialSubscription();
        this.FindReferralPatients();
        this.fetchSubscription();
    };
    DashboardComponent.prototype.ngDoCheck = function () {
        if (localStorage['subscription_info']) {
            if (this.isJson(localStorage['subscription_info'])) {
                this.subscriptionInfo = JSON.parse(localStorage['subscription_info']);
            }
            else {
                this.subscriptionInfo = localStorage['subscription_info'];
            }
            if (this.subscriptionInfo) {
                this.expiryDate = this.subscriptionInfo.trial_last_date;
            }
            var someDate = new Date(this.expiryDate);
            var today = new Date();
            if (someDate.getTime() < today.getTime()) {
                this.isExpired = true;
            }
            else {
                this.isExpired = false;
            }
            //alert(someDate);
            //alert(today);
            //alert(this.isExpired);
            var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            this.dd = someDate.getDate();
            this.th = this.nth(this.dd);
            this.month = mlist[someDate.getMonth()];
            this.year = someDate.getFullYear();
        }
        // console.log('Expiry Time:');
        // console.log(someDate.getTime());
        // console.log('Today Time:');
        // console.log(today.getTime());
    };
    DashboardComponent.prototype.isJson = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    DashboardComponent.prototype.nth = function (d) {
        if (d > 3 && d < 21)
            return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    DashboardComponent.prototype.IsJsonString = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    DashboardComponent.prototype.FindReferralPatients = function () {
        var _this = this;
        var ob = {
            doctorData: this.doctorData,
            object: { maximum: true }
        };
        this.userService.FindReferralPatients(ob).subscribe(function (data) {
            // console.log(data)
            if (data.response) {
                _this.referrals = data.dataReferralFrom.length;
                _this.appointments_today = data.appointmentsToday.length;
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.SevenDaysTrialSubscription = function () {
        var _this = this;
        for (var i = 0; i < this.trialData.length; i++) {
            if (this.trialData[i].doctor_id == this.adminDoctor._id) {
                this.toastr.warning('You already used trail plan', 'Warning');
                return;
            }
            break;
        }
        var ob = {
            doctor_id: this.adminDoctor._id,
            start_date: this.today,
            free_plan: 'free'
        };
        this.userService.SevenDaysTrialSubscription(ob).subscribe(function (data) {
            // console.log(data)
            _this.toastr.success(data.message, 'Success');
            $("#myModal").modal("hide");
            _this.ngOnInit();
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.GetSevenDaysTrialSubscription = function () {
        var _this = this;
        this.userService.GetSevenDaysTrialSubscription().subscribe(function (data) {
            // console.log(data)
            if (data.response) {
                _this.trialData = data.data;
                for (var i = 0; i < data.data.length; i++) {
                    // console.log(data.data[i].start_date , this.compareDate)
                    if (_this.adminDoctor._id == data.data[i].doctor_id) {
                        if (data.data[i].free_plan == 'free') {
                            _this.checkTrial = true;
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
    DashboardComponent.prototype.fetchSubscription = function () {
        var _this = this;
        // this.loading=true
        var ob = { doctor_id: this.doctorData._id };
        this.userService.fetchSubscription(ob).subscribe(function (data) {
            //this.loading=false;
            // console.log(data)
            if (1) {
                //  this.subscriptionData = data
                _this.subscriptionData.subscription = { 'start_at': '30-05-2019',
                    'current_end': '30-05-2010',
                    'status': 'active' };
                _this.subscriptionData.subscription.start_at = "30-05-2019";
                _this.subscriptionData.subscription.current_end = "30-05-2020";
                _this.subscriptionData.subscription.status = "active";
                if (_this.subscriptionData.subscription.start_at) {
                    _this.start_date = new Date(_this.subscriptionData.subscription.start_at * 1000);
                    _this.start_date = _this.start_date.toGMTString();
                    /* var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    this.start_date = this.start_date.toLocaleDateString('in-IN', options)(); */
                }
                //alert(this.subscriptionData.subscription.start_at);
                //alert(this.subscriptionData.subscription.status);
                if (_this.subscriptionData.subscription.current_end) {
                    _this.end_date = new Date(_this.subscriptionData.subscription.current_end * 1000);
                    _this.end_date = _this.end_date.toGMTString();
                    /* var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    this.end_date = this.end_date.toLocaleDateString('in-IN', options); */
                }
                if (_this.subscriptionData) {
                    if (_this.subscriptionData.purchaseInformation) {
                        _this.subscriptionData.purchaseInformation.forEach(function (purchase) {
                            if (purchase.Price) {
                                _this.subTotal += parseFloat(purchase.Price);
                            }
                        });
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__["a" /* DashboardRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map