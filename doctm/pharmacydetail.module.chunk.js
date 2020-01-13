webpackJsonp(["pharmacydetail.module"],{

/***/ "../../../../../src/app/header-five-layout/pharmacydetail/pharmacydetail-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmacydetailRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pharmacydetail_component__ = __webpack_require__("../../../../../src/app/header-five-layout/pharmacydetail/pharmacydetail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pharmacydetail_component__["a" /* PharmacydetailComponent */]
    }
];
var PharmacydetailRoutingModule = /** @class */ (function () {
    function PharmacydetailRoutingModule() {
    }
    PharmacydetailRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PharmacydetailRoutingModule);
    return PharmacydetailRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/pharmacydetail/pharmacydetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cstm-input input{\r\n\tborder-radius: 6px;\r\n\tborder: 1px solid rgba(56, 94, 138, 1);\r\n\theight: 40px;\r\n}\r\nh3.dt{\r\n    color:#416bb1;\r\n    text-align: center;\r\n}\r\nh3.dt > span{\r\n    color:#000;\r\n    text-align: center;\r\n}\r\n.cstm-hdr{\r\n\t\r\n    margin-top: 5px;\r\n}\r\n.cstm-form{\r\n\tmargin-top: 15px;\r\n}\r\n/*.cstm-hdr-1{\r\n\tmargin-left: -7em;\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-five-layout/pharmacydetail/pharmacydetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"cstm-hdr container-fluid\">\n\t<div class=\"row\">\n        <div  class=\"col-lg-2 cstm-hdr-1\">\n            <div  class=\"dashboard-header-logo\">\n                <img _ngcontent-c3=\"\" class=\"img-responsive\" src=\"./assets/imgs/logoDoctm.png\"\n                routerLink=\"/header-five-layout/dashboard-pharmacy\">\n            </div>\n          <!--   <div >\n                <div _ngcontent-c3=\"\" class=\"dshbrd-btn\">\n                    <button  class=\"btn btn-custom\" routerLink=\"/header-five-layout/dashboard-pharmacy\" tabindex=\"0\"> Dashboard </button>\n                </div>\n            </div> -->\n        </div>\n        <div class=\"col-lg-9\">\n             <h3 class=\"dt\">\n                {{day}} {{month}} , {{year}}\n                <small>\n                    {{hoursIST}}:{{getMin()}}\n                </small>\n            </h3>\n        </div>\n\t\t<div class=\"col-lg-10 col-lg-offset-1 cstm-form\">\n            <form [formGroup]=\"detailsForm\">\n    \t\t\t<div class=\"row\">\n            \t\t<div class=\"col-lg-6\">\n            \t\t\t<div class=\"form-group text-left cstm-input\">\n        \t\t\t\t    <label for=\"usr\" class=\"txt-theme\">Name of Pharmacy*</label>\n        \t\t\t\t    <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"Medical Store\" [(ngModel)]=\"reqData.pharmacyName\" required=\"\"  [formControl]=\"detailsForm.controls['pharmacyName']\">\n    \t\t\t\t\t</div>\n                        <p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['pharmacyName'].valid  && ( detailsForm.controls['pharmacyName'].touched)\">Invalid Pharmacy Name !!!</p>\n            \t\t</div>\n            \t\t<div class=\"col-lg-6\">\n            \t\t\t<div class=\"form-group text-left cstm-input\">\n    \t\t\t\t      <label for=\"pwd\" class=\"txt-theme\">Pharmacy Address*</label>\n    \t\t\t\t      <input type=\"text\" class=\"form-control\" value=\"\"  [(ngModel)]=\"reqData.address\" placeholder=\"M4/32, Awadh Vihar Colony, Lucknow\"[formControl]=\"detailsForm.controls['address']\">\n    \t\t\t\t    </div>\n                        <p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['address'].valid  && ( detailsForm.controls['address'].touched)\">Invalid Pharmacy Address !!!</p>\n            \t\t</div>\n            \t\t<div class=\"col-lg-6\">\n            \t\t\t<div class=\"form-group text-left cstm-input\">\n    \t\t\t\t      <label for=\"pwd\" class=\"txt-theme\">Pharmacy Phone*</label>\n    \t\t\t\t      <input type=\"text\" maxlength=\"10\" class=\"form-control\" value=\"\" [(ngModel)]=\"reqData.phone\"  placeholder=\"9876543210\" pattern=\"[0-9]+\" [formControl]=\"detailsForm.controls['phone']\">\n    \t\t\t\t    </div>\n                        <p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['phone'].valid  && ( detailsForm.controls['phone'].touched)\">Invalid Phone Number !!!</p>\n            \t\t</div>\n            \t\t<div class=\"col-lg-6\">\n            \t\t\t<div class=\"form-group text-left cstm-input\">\n    \t\t\t\t      <label for=\"pwd\" class=\"txt-theme\">Drug License Number*</label>\n    \t\t\t\t      <input type=\"text\" class=\"form-control\" value=\"\"  [(ngModel)]=\"reqData.drugLicense\" placeholder=\"XXXXXX000029 /  XXXXXX000029\" [formControl]=\"detailsForm.controls['drugLicense']\">\n    \t\t\t\t    </div>\n                        <p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['drugLicense'].valid  && ( detailsForm.controls['drugLicense'].touched)\">Invalid Drug License Number !!!</p>\n            \t\t</div>\n            \t\t<div class=\"col-lg-12\">\n            \t\t\t<div class=\"form-group text-left cstm-input\">\n    \t\t\t\t      <label for=\"pwd\" class=\"txt-theme\">GSTIN Number*</label>\n    \t\t\t\t      <input type=\"text\" class=\"form-control\" value=\"\" [(ngModel)]=\"reqData.gstinNumber\" placeholder=\"XXXXXX000029 /  XXXXXX000029\"  [formControl]=\"detailsForm.controls['gstinNumber']\"> \n    \t\t\t\t    </div>\n                        <p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['gstinNumber'].valid  && ( detailsForm.controls['gstinNumber'].touched)\">Invalid GSTIN Number !!!</p>\n            \t\t</div>\n            \t\t<div class=\"col-lg-6\">\n            \t\t\t<div class=\"form-group text-left cstm-input\">\n    \t\t\t\t      <label for=\"pwd\" class=\"txt-theme\">Terms & Conditions 1</label>\n    \t\t\t\t      <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"\" [formControl]=\"detailsForm.controls['conditionOne']\" [(ngModel)]=\"reqData.conditionOne\">\n    \t\t\t\t    </div>\n            \t\t</div>\n            \t\t<div class=\"col-lg-6\">\n            \t\t\t<div class=\"form-group text-left cstm-input\">\n    \t\t\t\t      <label for=\"pwd\" class=\"txt-theme\">Terms & Conditions 2</label>\n    \t\t\t\t      <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"\" [formControl]=\"detailsForm.controls['conditionTwo']\" [(ngModel)]=\"reqData.conditionTwo\">\n    \t\t\t\t    </div>\n            \t\t</div>\n            \t\t<div class=\"col-lg-6\">\n            \t\t\t<div class=\"form-group text-left cstm-input\">\n    \t\t\t\t      <label for=\"pwd\" class=\"txt-theme\">Terms & Conditions 3</label>\n    \t\t\t\t      <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"\" [formControl]=\"detailsForm.controls['conditionThree']\" [(ngModel)]=\"reqData.conditionThree\">\n    \t\t\t\t    </div>\n            \t\t</div>\n            \t\t<div class=\"col-lg-6\">\n            \t\t\t<div class=\"form-group text-left cstm-input\">\n    \t\t\t\t      <label for=\"pwd\" class=\"txt-theme\">Terms & Conditions 4</label>\n    \t\t\t\t      <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"\" [formControl]=\"detailsForm.controls['conditionFour']\" [(ngModel)]=\"reqData.conditionFour\">\n    \t\t\t\t    </div>\n            \t\t</div>\n            \t\t<div  class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card text-center\">\n                            <button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"!detailsForm.valid\" (click)=\"saveDetails()\"> Submit </button>\n                        </div>\n                    </div>\n            \t</div>\n            </form>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-five-layout/pharmacydetail/pharmacydetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmacydetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
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





var PharmacydetailComponent = /** @class */ (function () {
    function PharmacydetailComponent(formBuilder, toastr, userService, router) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
    }
    PharmacydetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reqData = {};
        this.detailsForm = this.formBuilder.group({
            'pharmacyName': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'address': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'drugLicense': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'phone': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(10)])],
            'gstinNumber': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'conditionOne': [null],
            'conditionTwo': [null],
            'conditionThree': [null],
            'conditionFour': [null],
        });
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails']);
        this.checkIfAddress();
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
    };
    PharmacydetailComponent.prototype.checkIfAddress = function () {
        if (this.pharmacyData.dataSmartPharmacy.address_filled) {
            this.reqData.pharmacyName = this.pharmacyData.dataSmartPharmacy.pharmacy_name;
            this.reqData.address = this.pharmacyData.dataSmartPharmacy.pharmacy_address;
            this.reqData.phone = this.pharmacyData.dataSmartPharmacy.pharmacy_phone;
            this.reqData.drugLicense = this.pharmacyData.dataSmartPharmacy.pharmacy_license;
            this.reqData.gstinNumber = this.pharmacyData.dataSmartPharmacy.pharmacy_gst_no;
            this.reqData.conditionOne = this.pharmacyData.dataSmartPharmacy.term1;
            this.reqData.conditionTwo = this.pharmacyData.dataSmartPharmacy.term2;
            this.reqData.conditionThree = this.pharmacyData.dataSmartPharmacy.term3;
            this.reqData.conditionFour = this.pharmacyData.dataSmartPharmacy.term4;
        }
        else {
            this.reqData.conditionOne = "Goods once sold will not be taken back.";
            this.reqData.conditionTwo = "Replacement within 10 days with sale receipt only.";
            this.reqData.conditionThree = "We are not responsible for any breakage, shortage, leakage or damage as soon as goods leave our premises.";
            this.reqData.conditionFour = "Subject to local jurisdiction only.";
        }
    };
    PharmacydetailComponent.prototype.saveDetails = function () {
        var _this = this;
        this.loading = true;
        this.reqData.id = this.pharmacyData.dataSmartPharmacy.id;
        this.userService.UpdatePharmacyDetail(this.reqData).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.toastr.success(data.message, "Success");
                localStorage['smartPharmacyDetails'] = JSON.stringify(data.data);
                _this.router.navigate(['/header-five-layout/dashboard-pharmacy']);
            }
            else if (data.response == false) {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    PharmacydetailComponent.prototype.getCurrentTime = function () {
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        this.hoursIST = ISTTime.getHours();
        this.minutesIST = ISTTime.getMinutes();
    };
    PharmacydetailComponent.prototype.getMin = function () {
        if (this.minutesIST < 10) {
            return "0" + this.minutesIST;
        }
        else {
            return this.minutesIST;
        }
    };
    PharmacydetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pharmacydetail',
            template: __webpack_require__("../../../../../src/app/header-five-layout/pharmacydetail/pharmacydetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-five-layout/pharmacydetail/pharmacydetail.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], PharmacydetailComponent);
    return PharmacydetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/pharmacydetail/pharmacydetail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacydetailModule", function() { return PharmacydetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pharmacydetail_routing_module__ = __webpack_require__("../../../../../src/app/header-five-layout/pharmacydetail/pharmacydetail-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pharmacydetail_component__ = __webpack_require__("../../../../../src/app/header-five-layout/pharmacydetail/pharmacydetail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PharmacydetailModule = /** @class */ (function () {
    function PharmacydetailModule() {
    }
    PharmacydetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__pharmacydetail_routing_module__["a" /* PharmacydetailRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["m" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__pharmacydetail_component__["a" /* PharmacydetailComponent */]]
        })
    ], PharmacydetailModule);
    return PharmacydetailModule;
}());



/***/ })

});
//# sourceMappingURL=pharmacydetail.module.chunk.js.map