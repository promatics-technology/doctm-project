webpackJsonp(["purchase-service.module"],{

/***/ "../../../../../src/app/header-two-layout/purchase-service/purchase-service-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseServiceRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchase_service_component__ = __webpack_require__("../../../../../src/app/header-two-layout/purchase-service/purchase-service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__purchase_service_component__["a" /* PurchaseServiceComponent */]
    }
];
var PurchaseServiceRoutingModule = /** @class */ (function () {
    function PurchaseServiceRoutingModule() {
    }
    PurchaseServiceRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PurchaseServiceRoutingModule);
    return PurchaseServiceRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/purchase-service/purchase-service.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*section 2*/\r\n.table_paymnt{\r\n    margin-top: 30px;\r\n}\r\n.table_paymnt table{\r\n    font-size: 22px;\r\n}\r\n.bck_pay a{\r\n    display:inline-block;\r\n    padding:20px;\r\n    text-decoration: none;\r\n    border-radius:15px;\r\n    font-size:24px;\r\n    color:#000; \r\n    width:100%;\r\n    text-align: center;\r\n}\r\n.bck_pay a.btn-1{\r\n    background: rgba(255,195,0);\r\n}\r\n.bck_pay a.btn-2{\r\n    background:#00b0f0;\r\n}\r\n/*ends*/\r\n.hdr{\r\n\t    font-weight: bold;\r\n    color: #fff;\r\n    padding: 10px;\r\n    background: #00b0f0;\r\n}\r\n.clinic-2 input, clini-2 button{\r\n\tdisplay:inline-block;\r\n}\r\n.clinic-2 input{\r\n\twidth:95%;\r\n}\r\n.clinic-2 button.bt-green{\r\n\t    margin-left: 7px!important;\r\n    background: #24bf24!important;\r\n    font-weight: bold!important;\r\n    margin-top: -5px!important;\r\n}\r\n.fixed_data div.wrap-data{\r\n\tbackground-color: #deddd9;\r\n    padding:0px 0px;\r\n\twidth:20%;\r\n\tfloat:left; \r\n\tfont-weight: bold;\r\n\r\n}\r\n.fixed_data div.ft{\r\n\tcolor:#ea5a5a;\r\n\t/*font-size:22px;  */\r\n}\r\n.fixed_data div.lt{\r\n\tcolor:#09a541;\r\n\t/*font-size:22px; */\r\n}\r\n.fixed-2{\r\n\tborder:8px solid #3e82f7;\r\n\tmargin-top:10px;\r\n}\r\n.fixed-2 h6{\r\n\tmargin:10px;\r\n}\r\n.txt_green{\r\n\tcolor:#24bf24!important;\r\n}\r\n.mat-sort-header-container {\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.tr_sort th{\r\n\tbackground:#24bf24;\r\n}\r\n.mat-sort-header-arrow{\r\n    /* opacity: 0; */\r\n    color:red!important;\r\n}\r\n.tb-1 td{\r\n\tbackground-color: #7ee632;\r\n\tcolor:#000;\r\n\tfont-weight: bold;\r\n}\r\n.tb-1-blue td{\r\n\tbackground-color:#3e3e3e;\r\n\tcolor:#fff; \r\n}\r\n.evn-drk td{\r\n\tbackground-color:#cfcfd0;\r\n}\r\n.odd-lyt td{\r\n\tbackground-color:#eaeaea;\r\n}\r\n.inner-table{\r\n\tpadding-left:0px;\r\n\tpadding-right:0px;\r\n}\r\n.act{\r\n\tcursor:pointer;\r\n}\r\n.txt-danger{\r\n\tcolor:red;\r\n}\r\ntd  a{\r\n\tcolor:#00b0f0;\r\n}\r\n.tb-bl-1{\r\n\tbackground-color:#5477de;\r\n\tcolor:#fff;\r\n}\r\n.btn-cyan{\r\n\tbackground:#99f1e9;\r\n\tborder-radius:0px;\r\n\tcolor:#000;\r\n\tborder:1px solid #000; \r\n\tfont-size: 18px;\r\n    width: 12%;\r\n}\r\n.tr_sort td{\r\n\tbackground:#99f1e9; \r\n}\r\n.last{\r\n\tbackground: #5bd85b;\r\n}\r\n.mg-top{\r\n\tmargin-top: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/purchase-service/purchase-service.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n\t<!--div class=\"col-lg-12\">\n\t\t<h3><u>Service Rates & Discounts</u><small> (applicable through out)</small></h3>\n\t</div-->\n\n\t<div class=\"col-lg-10 col-lg-offset-1\" style=\"margin-top:3%\">\n\t\t<table class=\"table table-bordered\">\n            <tbody>\n                <tr class=\"tb-bl-1\">\n                    <td class=\"text-center\" width=\"50px\">\n                        <b>Sr.No</b> \n                    </td>\n                    <td class=\"text-center\" width=\"300px\">\n                        <b>Modules</b>\n                    </td>\n                    <td  class=\"text-center\">\n                        <b>Plan Duration</b>\n                    </td>\n                    <td  class=\"text-center\">\n                        <b>Base Rate</b>\n                    </td>\n                    <td  class=\"text-center\">\n                        <b>Discount(%)</b>\n                    </td>\n                    <td  class=\"text-center\">\n                        <b>Amount Payable (INR)</b>\n                    </td>\n                </tr>\n                <tr class=\"evn-drk\" *ngFor=\"let purchase of purchase_summary.purchase_data.services; let i=index\">\n                    <td width=\"50px\">\n                        <h5><b>{{i+1}}</b></h5>\n                    </td>\n                    <td width=\"300px\" class=\"text-left\">\n                        <b>{{purchase.name}}</b>\n                    </td>\n                    <td>\n                    \t<b>{{purchase.duration}} Days</b>\n                    </td>\n                    <td >\n                    \t<b>{{ round(purchase.mrp)}}</b>\n                    </td>\n                    <td>\n                       <b>{{purchase.discount}}%</b>\n                    </td>\n                    <td>\n                    \t<b>{{round(purchase.amount)}}</b>\n                    </td>\n                </tr>\n              \n                <tr class=\"evn-drk\">\n                    <td width=\"50px\" colspan=\"3\">\n                        <h3><b>TOTAL</b></h3>\n                    </td>\n                    <td class=\"text-left\">\n                        <h3><b>{{round(purchase_summary.purchase_data.mrp)}}</b></h3>\n                    </td>\n                    <td>\n                    \t<h3><b></b></h3>\n                    </td>\n                    <td>\n                    \t<h3><b>{{round(purchase_summary.purchase_data.payable)}}</b></h3>\n                    </td>\n                </tr>\n                <tr class=\"odd-lyt\">\n                    <td width=\"50px\">\n                        <h5><b>{{purchase_summary.purchase_data.services.length+1}}</b></h5>\n                    </td>\n                    <td width=\"300px\" class=\"text-left\">\n                        <b>Service Tax(GST)</b>\n                    </td>\n                    <td colspan=\"3\" class=\"text-center\">\n                    \t<b>{{purchase_summary.purchase_data.gst}}%</b>\n                    </td>\n                    <td>\n                    \t<b>{{round(purchase_summary.purchase_data.payable*purchase_summary.purchase_data.gst/100)}}</b>\n                    </td>\n                </tr>\n                <tr class=\"text-center\">\n                \t<td class=\"last text-left\" colspan=\"5\">\n                \t\t<h3 class=\"mg-top\"><b>Total Payable</b></h3>\n                \t</td>\n                \t<td class=\"last\">\n                \t\t<h3 class=\"mg-top\"><b>{{round(purchase_summary.purchase_data.payable+purchase_summary.purchase_data.payable*purchase_summary.purchase_data.gst/100)}}</b></h3>\n                \t\t<small>(You Save <b>₹  {{round(purchase_summary.purchase_data.mrp-purchase_summary.purchase_data.payable)}}</b>)</small>\n                \t</td>\n                </tr>\n            </tbody>\n        </table>\n\t</div>\n</div>\n<div class=\"row\" style=\"margin-top:5%\">\n\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t<div class=\"bck_pay\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"backClicked()\" class=\"btn-1\">BACK</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t<div class=\"bck_pay\">\n\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn-2\" (click)=\"createSubscription()\"><b>PAY</b>&nbsp;&nbsp;<span style=\"color:#fff;font-weight: bolder;\">₹ {{round(purchase_summary.purchase_data.payable+purchase_summary.purchase_data.payable*purchase_summary.purchase_data.gst/100)}}</span></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/purchase-service/purchase-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PurchaseServiceComponent = /** @class */ (function () {
    function PurchaseServiceComponent(_location, router, route, toastr, userService) {
        this._location = _location;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.userService = userService;
        this.grand_total = 0;
        this.total_amt = 0;
    }
    PurchaseServiceComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        this.purchase_summary = JSON.parse(localStorage['purchase_summary']);
        this.grand_total = 1000;
        //alert(isDevMode());
    };
    PurchaseServiceComponent.prototype.getDoctorDetail = function () {
        var _this = this;
        this.userService.GetDoctorDetail(this.doctorData.itemId).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                localStorage['doctorDetails'] = JSON.stringify(data.data);
                localStorage['subscription_info'] = JSON.stringify(data.data.subscription_id);
                _this.router.navigate(['/header-two-layout/dashboard']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    PurchaseServiceComponent.prototype.backClicked = function () {
        this._location.back();
    };
    PurchaseServiceComponent.prototype.getGST = function (price) {
        var p = (price * 18) / 100;
        return Math.ceil(p);
    };
    PurchaseServiceComponent.prototype.getPayAble = function (price) {
        var p = (price * 18) / 100;
        return price + Math.ceil(p);
    };
    PurchaseServiceComponent.prototype.createSubs = function () {
        console.log(this.plan);
    };
    PurchaseServiceComponent.prototype.createSubscription = function () {
        if (localStorage['purchase_summary']) {
            var purchase_info = JSON.parse(localStorage['purchase_summary']);
            console.log(purchase_info);
            var amount = this.purchase_summary.purchase_data.payable + this.purchase_summary.purchase_data.payable * this.purchase_summary.purchase_data.gst / 100;
            //alert(amount);
            this.checkOut(this.round(amount) * 100);
        }
        /* this.loading = true;
        var services_selected=this.plan.services;
        var plan_type=this.plan.plan.name;
        var amount_payable=this.grand_total;
        var duration=this.plan.plan.name;
        let ob = {
                planName : plan_type,
                description : "Subscription Plan Created for DocTm User-"+services_selected.toString(),
                total_amount :amount_payable*100 ,
                notes:"Dummy doctor data",
                doctor_id:this.doctorData._id,
                duration:duration,
                services:services_selected
                }
              this.userService.CreateUserPlan(ob).subscribe(data => {
                    console.log(data)
                    this.loading = false
                    if (data.status == true) {
                        this.toastr.success(data.message, 'Success')
                       this.showCheckOutForm(data.subscription_id,services_selected,duration, amount_payable);
                    } else {
                        this.toastr.error(data.message, 'Error')
                    }
                }, err => {
                    console.log(err);
                    this.loading = false
                })
            
                console.log('here');  */
    };
    PurchaseServiceComponent.prototype.checkOut = function (amount) {
        var self = this;
        var options = {
            "key": "rzp_test_ZXisTAaZeIwiSh",
            "amount": amount,
            "name": "DocTm Solutions.",
            "description": "DocTm AdOns",
            "image": "/assets/imgs/logoDoctm.png",
            "handler": function (response) {
                if (response.razorpay_payment_id) {
                    self.loading = true;
                    self.updateServices(response);
                    /* var ob={
                           razorpay_customer_id: subs_id,
                           payment_id: response.razorpay_payment_id,
                           services: services_selected,
                           plan_duration:type,
                           doctor_id: self.doctorData._id,
                           total_amount:amount
                          }
                    self.userService.updateDoctorSubscription(ob).subscribe(data => {
                    console.log(data)
                     if (data.response == true) {
                        self.toastr.success(data.message, 'Success')
                        self.updateServices();
                     } else {
                         self.toastr.error(data.message, 'Error')
                     }
                 }, err => {
                     console.log(err);
                     self.loading = false
                 }) */
                }
                else {
                    self.toastr.error("Something went wrong. Please try again later", "Error");
                }
                //
            },
            "prefill": {
                "name": this.doctorData.first_name,
                "email": this.doctorData.email,
                "method": "netbanking"
            },
            "notes": {
                "note_key": "DocTm Subscription"
            },
            "theme": {
                "color": "#00B0F0"
            },
            "external": {
                wallets: ['paytm', 'citrus'],
                handler: function (data) {
                    // write code on how to handle the external wallet here, based on the param 'data'
                    console.log(this, data);
                }
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    };
    PurchaseServiceComponent.prototype.showCheckOutForm = function (amount) {
        var self = this;
        var options = {
            "key": "rzp_test_ZXisTAaZeIwiSh",
            "amount": amount,
            "name": "DocTm Solutions.",
            "description": "DocTm AddOns",
            "image": "/assets/imgs/logoDoctm.png",
            "handler": function (response) {
                if (response.razorpay_payment_id) {
                    self.loading = true;
                    self.updateServices(response);
                    /* var ob={
                           razorpay_customer_id: subs_id,
                           payment_id: response.razorpay_payment_id,
                           services: services_selected,
                           plan_duration:type,
                           doctor_id: self.doctorData._id,
                           total_amount:amount
                          }
                    self.userService.updateDoctorSubscription(ob).subscribe(data => {
                    console.log(data)
                     if (data.response == true) {
                        self.toastr.success(data.message, 'Success')
                        self.updateServices();
                     } else {
                         self.toastr.error(data.message, 'Error')
                     }
                 }, err => {
                     console.log(err);
                     self.loading = false
                 }) */
                }
                else {
                    self.toastr.error("Something went wrong. Please try again later", "Error");
                }
                //
            },
            "prefill": {
                "name": this.doctorData.first_name,
                "email": this.doctorData.email,
                "method": "netbanking"
            },
            "notes": {
                "note_key": "DocTm Subscription"
            },
            "theme": {
                "color": "#00B0F0"
            },
            "external": {
                wallets: ['paytm', 'citrus'],
                handler: function (data) {
                    // write code on how to handle the external wallet here, based on the param 'data'
                    console.log(this, data);
                }
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    };
    PurchaseServiceComponent.prototype.updateServices = function (res) {
        var _this = this;
        console.log(res);
        var ob;
        if (localStorage['purchase_summary']) {
            ob = JSON.parse(localStorage['purchase_summary']);
        }
        else {
            //alert('hereeeeee')
            var diagnostics;
            var ipd;
            var pharmacy;
            if (this.plan.services.indexOf('SmartPharmacy') != -1) {
                pharmacy = true;
            }
            if (this.plan.services.indexOf('SmartIPD') != -1) {
                ipd = true;
            }
            if (this.plan.services.indexOf('SmartDiagnostics') != -1) {
                diagnostics = true;
            }
            this.ClinicServicesDetailObject = {
                Clinic_Diagnostics: diagnostics,
                Clinic_Pharmacy: pharmacy,
                Clinic_IPD: ipd,
            };
            var updates = {
                clinic_services: this.ClinicServicesDetailObject
            };
            ob = {
                itemId: this.doctorData.itemId,
                toUpdate: updates
            };
            console.log('uuuuuuuuuuuuuuuu');
            console.log(ob);
        }
        console.log(ob);
        // (parseFloat(this.getAmount(s))*parseFloat(this.gst)/100)
        // round(purchase_summary.purchase_data.payable+purchase_summary.purchase_data.payable*purchase_summary.purchase_data.gst/100)
        var amount1;
        var gst1;
        amount1 = parseFloat(ob.purchase_data.services[0].amount);
        gst1 = parseFloat(ob.purchase_data.gst);
        amount1 = parseFloat(amount1);
        gst1 = parseFloat(gst1);
        var obj = {
            transaction: res.razorpay_payment_id,
            gst: ob.purchase_data.gst,
            gst_amount: ((amount1 * gst1) / 100),
            total_amt_with_gst: ((amount1 + (amount1 * gst1)) / 100),
            amount_purchased: parseInt(ob.purchase_data.services[0].amount),
            discount: ob.purchase_data.services[0].discount,
            service: ob.purchase_data.services[0].name,
            clinic_services: ob.toUpdate.clinic_services
        };
        ob.purchedDetails = obj;
        console.log(obj);
        console.log(ob);
        this.userService.EditDoctorProfile(ob).subscribe(function (data) {
            console.log(data);
            //  this.loading = false
            if (data.response == true) {
                _this.toastr.success(data.message, 'You are now successfully connected to subscribed services!');
                _this.GetDoctorDetailAndNavigateToHome();
            }
            else {
                _this.toastr.error(data.message, 'Error');
            }
        }, function (err) {
            console.log(err);
        });
    };
    PurchaseServiceComponent.prototype.GetDoctorDetailAndNavigateToHome = function () {
        var _this = this;
        // this.loading = true
        this.userService.GetDoctorDetail(this.doctorData.itemId).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                localStorage['doctorDetails'] = JSON.stringify(data.data);
                _this.router.navigate(['/header-two-layout/subscription']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    PurchaseServiceComponent.prototype.round = function (num) {
        if (num > 0) {
            return Math.round(num);
        }
        return num;
    };
    PurchaseServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-purchase-service',
            template: __webpack_require__("../../../../../src/app/header-two-layout/purchase-service/purchase-service.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/purchase-service/purchase-service.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]])
    ], PurchaseServiceComponent);
    return PurchaseServiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/purchase-service/purchase-service.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseServiceModule", function() { return PurchaseServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchase_service_component__ = __webpack_require__("../../../../../src/app/header-two-layout/purchase-service/purchase-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__purchase_service_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/purchase-service/purchase-service-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PurchaseServiceModule = /** @class */ (function () {
    function PurchaseServiceModule() {
    }
    PurchaseServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__purchase_service_routing_module__["a" /* PurchaseServiceRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__purchase_service_component__["a" /* PurchaseServiceComponent */]]
        })
    ], PurchaseServiceModule);
    return PurchaseServiceModule;
}());



/***/ })

});
//# sourceMappingURL=purchase-service.module.chunk.js.map