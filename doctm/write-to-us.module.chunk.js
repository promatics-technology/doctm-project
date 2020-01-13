webpackJsonp(["write-to-us.module"],{

/***/ "../../../../../src/app/header-two-layout/write-to-us/write-to-us-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriteToUsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__write_to_us_component__ = __webpack_require__("../../../../../src/app/header-two-layout/write-to-us/write-to-us.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__write_to_us_component__["a" /* WriteToUsComponent */]
    }
];
var WriteToUsRoutingModule = /** @class */ (function () {
    function WriteToUsRoutingModule() {
    }
    WriteToUsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], WriteToUsRoutingModule);
    return WriteToUsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/write-to-us/write-to-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\t.btn-sve{\r\n\t\tbackground-color: #00b0f0;\r\n\t\tborder-radius: 6px;\r\n\t\tcolor: #000;\r\n\t\t-webkit-box-shadow: none;\r\n\t\tbox-shadow: none;\r\n\t\tmargin-bottom: 8px;\r\n\t\tpadding: 7px 22px;\r\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/write-to-us/write-to-us.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\" style=\"padding-top: 60px;\">\r\n\t<form [formGroup]=\"Form\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-8 col-lg-offset-2\">\r\n\t\t\t<div class=\"form-group cstm-txt-ar\">\r\n\t\t\t\t<label for=\"comment\">Subject:</label>\r\n\t\t\t\t <input type=\"text\"  [(ngModel)]=\"reqData.subject\" [formControl]=\"Form.controls['subject']\" class=\"form-control\" placeholder=\"Enter the subject\">\r\n\t\t\t\t <p style=\"color: #E80358\"  *ngIf=\"!Form.controls['subject'].valid  && ( Form.controls['subject'].touched)\" >Enter valid subject</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group cstm-txt-ar\">\r\n\t\t\t\t<label for=\"comment\">Message:</label>\r\n\t\t\t\t<textarea class=\"form-control\" [formControl]=\"Form.controls['message']\" [(ngModel)] =\"reqData.message\" s=\"5\" id=\"comment\" rows=\"9\" style=\"width:100%;\" placeholder=\"Max 150 characters\"></textarea>\r\n\t\t\t\t<p style=\"color: #E80358\"  *ngIf=\"!Form.controls['message'].valid  && ( Form.controls['message'].touched)\" >Enter the message  [Maxmimum 150 words]</p>\r\n\t\t\t</div>\r\n\t\t\t<p><i>Note: ​We will respond to your query shortly on your registered e-mail</i></p>\r\n\t\t\t<br>\r\n\t\t\t<div class=\"text-center\">\r\n\t\t\t<button  (click) = \"save()\" [disabled]=\"!Form.valid\" class=\"btn btn-sve text-center\">Submit</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\t</form>\r\n\t\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/write-to-us/write-to-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriteToUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WriteToUsComponent = /** @class */ (function () {
    function WriteToUsComponent(UserService, toastr, router, formBuilder) {
        this.UserService = UserService;
        this.toastr = toastr;
        this.router = router;
        this.formBuilder = formBuilder;
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        this.Form = formBuilder.group({
            'subject': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* Validators */].required])],
            'message': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* Validators */].maxLength(150)])],
        });
    }
    WriteToUsComponent.prototype.ngOnInit = function () {
        this.reqData = {};
    };
    WriteToUsComponent.prototype.save = function () {
        var _this = this;
        var obj = {
            subject: this.reqData.subject,
            message: this.reqData.message,
            doctor_name: this.doctorData.first_name,
            doctor_email: this.doctorData.email,
        };
        console.log(obj);
        this.UserService.AddWriteToUs(obj).subscribe(function (data) {
            if (data.response) {
                _this.toastr.success(data.message, 'Success');
                // this.ngOnInit()
                _this.router.navigate(['/header-two-layout/dashboard']);
            }
            else {
                _this.toastr.error(data.message, 'error');
            }
        }, function (err) {
            console.log(err);
        });
    };
    WriteToUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-write-to-us',
            template: __webpack_require__("../../../../../src/app/header-two-layout/write-to-us/write-to-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/write-to-us/write-to-us.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */]])
    ], WriteToUsComponent);
    return WriteToUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/write-to-us/write-to-us.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteToUsModule", function() { return WriteToUsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__write_to_us_component__ = __webpack_require__("../../../../../src/app/header-two-layout/write-to-us/write-to-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__write_to_us_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/write-to-us/write-to-us-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WriteToUsModule = /** @class */ (function () {
    function WriteToUsModule() {
    }
    WriteToUsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__write_to_us_routing_module__["a" /* WriteToUsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__write_to_us_component__["a" /* WriteToUsComponent */]]
        })
    ], WriteToUsModule);
    return WriteToUsModule;
}());



/***/ })

});
//# sourceMappingURL=write-to-us.module.chunk.js.map