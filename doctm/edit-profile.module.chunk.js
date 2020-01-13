webpackJsonp(["edit-profile.module"],{

/***/ "../../../../../src/app/header-two-layout/edit-profile/edit-profile-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_component__ = __webpack_require__("../../../../../src/app/header-two-layout/edit-profile/edit-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__edit_profile_component__["a" /* EditProfileComponent */]
    }
];
var EditProfileRoutingModule = /** @class */ (function () {
    function EditProfileRoutingModule() {
    }
    EditProfileRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], EditProfileRoutingModule);
    return EditProfileRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/edit-profile/edit-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".instruction-ul {\n    float: left;\n    width: 100%;\n}\n.instruction-ul ul {\n    list-style-type: none;\n    display: inline-block;\n    float: left;\n    width: 100%;\n    padding-left: 15px;\n    margin: 10px 0;\n}\n.instruction-ul ul li {\n    float: left;\n    width: 50%;\n    position: relative;\n}\n.instruction-ul > ul > li.passed{\n    color: green;\n}\n.instruction-ul > ul > li.passed::after {\n    position: absolute;\n    top: -2px;\n    left: -18px;\n    content: \"\\F00C\";\n    font-family: 'fontawesome';\n    color: green;\n}\n.fieldDesign .input-group-addon {\n    background-color: #fff;\n    border: 1px solid rgba(56, 94, 138, 1);\n    border-radius: 6px 0 0 6px;\n}\n.input-group.fieldDesign .txtfield {\n    height: 40px;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 0px 6px 6px 0px !important;\n    border: 1px solid rgba(56, 94, 138, 1);\n}\n.input-group.fieldDesign label.labelFloat {\n    position: absolute;\n    left: 55px;\n    z-index: 9;\n}\n.input-group.fieldDesign p {\n    color: #FF0000;\n    position: absolute;\n    top: 41px;\n    left: 0;\n}\n.success-upload .fa.fa-check {\n    color: #009900;\n}\nspan.input-group-addon.input-btn.success-upload {\n    padding: 8px 10px;\n    float: right;\n    display: inline-block;\n    text-align: center;\n    width: 35px;\n}\n.color-blue{\n    color: #01b0f0;\n}\n/** 21 Sep **/\n.shift-trash.ok-btn-prnt.m-b-5 {\n    border: none;\n    /*background-color: #f70f0f;*/\n    color: #fff;\n    border-radius: 4PX;\n    height: auto;\n    width: 30px;\n    height: unset;\n    padding: 2px 0px;\n}\n.shift-trash.ok-btn-prnt.m-b-5 img{\n    max-width: 50px!important;\n}\n.wrapper-div-cstm {\n    float: left;\n    width: 100%;\n    padding: 15px;\n    border: 1px solid #ccc;\n    margin-bottom: 20px;\n}\n.Week-name {\n    float: left;\n    width: 100%;\n    margin-bottom: 5px;\n}\n.week-name-wrp {\n    float: left;\n    width: 50%;\n    font-weight: bold;\n}\n.week-time-wrap {\n    float: left;\n    width: 50%;\n}\n.week-time {\n    float: left;\n    width: auto;\n    margin-right: 10px;\n}\n.resend-link{\n    text-align: center;\n    text-decoration: none;\n    font-weight: bold;\n}\n/** 21 Sep **/\n/*12-nov-2018*/\n.table-doc table td,.table-doc table th {\n    border-top: transparent;\n    border-bottom:1px solid #d8d8d8; \n    vertical-align: middle;\n    text-align: center;\n}\ntd.doc-img{\n    width: 20px;\n}\ntd.doc-img img{\n    max-width: 65px;\n    height: 65px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 100%;\n    border:1px solid blue;\n    display: inline-block;\n\twidth:65px;\n}\ntd.name-doc{\n    width: 200px;\n   \n}\n.img-big img{\n    max-width:170px;\n    height:170px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 100%;\n    border:1px solid blue;\n    display: inline-block;\n    margin-bottom: 15px;\n}\n#previewModalPrescription .modal-dialog .modal-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -moz-flex;\n    display: -o-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n}\n#previewModalPrescription .modal-dialog .modal-header>* {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n#previewModalPrescription .modal-dialog .modal-header>*:nth(1)-child {\n    text-align: center;\n}\n.cls-red{\n    color: red;\n    font-weight: bold;\n}\n.cls-grn{\n    color:#13e213;\n    font-weight: bold;\n}\n.signup-card{\n    padding-top:0px;\n    padding-bottom:0px; \n    margin-bottom: 15px;\n}\n.no-need{\n    visibility: hidden;\n}\n.re-pass{\n    margin-top: 0px;\n    margin-bottom:0px;\n}\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #00B0F0;\n}\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color:#00B0F0;\n}\n.sub_checkboxul{\n\tpadding-left:0px;\n}\n.signup-clinicServc .sub_checkboxul>li {\n    display: inline-block;\n    width: 50%;\n    margin-top: 10px;\n}\n.csm-inside-btn {\n    position: absolute;\n    top: 25px;\n    right: 15px;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n    background: #00b0f0;\n    border-color: #00b0f0;\n    color: black;\n    font-weight: bold;\n}\n.csm-inside-btn:hover:active,\n.csm-inside-btn:hover{\n    color: white;\n    background: #00b0f0;\n}\n.btn-nineone{\n    position: absolute;\n    top: 60px;\n    left: 15px;\n    padding: 6px 8px;\n    border-top-left-radius: 7px;\n    border-bottom-left-radius: 7px;\n    border: 1px solid #cccccc;\n}\n.verify-btn-pop:hover,\n.verify-btn-pop:active{\n    color: white;\n}\n.verify-btn-pop{\n    background: #008dc0;\n    color: black;\n    font-weight: bold;\n    border-color: #008dc0;\n}\n.nwpadig{\n    padding-bottom: 15px;\n    padding-top: 15px;\n}\n.mrgbtmthry{\n    margin-bottom: 30px!important;\n}\n.ltaligned label{\n    left: 15px!important;\n}\n/****** LOGIN MODAL ******/\n.loginmodal-container {\n    padding: 30px;\n    /* max-width: 350px; */\n    width: 100% !important;\n    background-color: #F7F7F7;\n    margin: 0 auto;\n    border-radius: 2px;\n    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    overflow: hidden;\n    font-family: roboto;\n  }\n.loginmodal-container h1 {\n    text-align: center;\n    font-size: 1.8em;\n    font-family: roboto;\n  }\n.loginmodal-container input[type=submit] {\n    width: 100%;\n    display: block;\n    margin-bottom: 10px;\n    position: relative;\n  }\n.loginmodal-container input[type=text], input[type=password] {\n    height: 44px;\n    font-size: 16px;\n    width: 100%;\n    margin-bottom: 10px;\n    -webkit-appearance: none;\n    background: #fff;\n    border: 1px solid #d9d9d9;\n    border-top: 1px solid #c0c0c0;\n    /* border-radius: 2px; */\n    padding: 0 8px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -moz-box-sizing: border-box;\n  }\n.loginmodal-container input[type=text]:hover, input[type=password]:hover {\n    border: 1px solid #b9b9b9;\n    border-top: 1px solid #a0a0a0;\n    -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n    box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n  }\n.loginmodal {\n    text-align: center;\n    font-size: 14px;\n    font-family: 'Arial', sans-serif;\n    font-weight: 700;\n    height: 36px;\n    padding: 0 8px;\n  /* border-radius: 3px; */\n  /* -webkit-user-select: none;\n    user-select: none; */\n  }\n.loginmodal-submit {\n    /* border: 1px solid #3079ed; */\n    border: 0px;\n    color: #fff;\n    text-shadow: 0 1px rgba(0,0,0,0.1); \n    background-color: #008dc0;\n    padding: 17px 0px;\n    font-family: roboto;\n    font-size: 14px;\n    /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\n  }\n.loginmodal-cancel {\n    /* border: 1px solid #3079ed; */\n    border: 0px;\n    color: #fff;\n    text-shadow: 0 1px rgba(0,0,0,0.1); \n    background-color: red;\n    padding: 17px 0px;\n    font-family: roboto;\n    font-size: 14px;\n    /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\n  }\n.loginmodal-submit:hover {\n    /* border: 1px solid #2f5bb7; */\n    border: 0px;\n    text-shadow: 0 1px rgba(0,0,0,0.3);\n    background-color: #008dc0;\n    /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\n  }\n.loginmodal-container a {\n    text-decoration: none;\n    color: #666;\n    font-weight: 400;\n    text-align: center;\n    display: inline-block;\n    opacity: 0.6;\n    -webkit-transition: opacity ease 0.5s;\n    transition: opacity ease 0.5s;\n  }\n.login-help{\n    font-size: 12px;\n  }\n.login-btn {\n    text-align:center;\n    margin-top: 50px;\n  }\n.all-limancls{\n  padding: 0px;\n}\n.all-limancls li{\n  list-style: none;\n  width: 33.33%;\n  display: inline-block;\n  padding-bottom: 5px;\n}\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n\n<section class=\"signup-sec\">\n    <!-- <div class=\"signup-sidebar-wrapper\">\n        <div id=\"bs-example-navbar-collapse-1\" class=\"signup-sidbar navbar-collapse p-0\">\n            <ul class=\"\">\n                <li class=\"{{getClass(0)}}\" (click)=\"activatetab('Your Contact details',0)\"> <a> Your Contact details </a> </li>\n                <li class=\"{{getClass(1)}}\" (click)=\"activatetab('Create your profile',1)\"> <a> Create your profile </a> </li>\n                <li class=\"{{getClass(2)}}\" (click)=\"activatetab('Clinic contact details',2)\"> <a> Clinic contact details </a> </li>\n                <li class=\"{{getClass(3)}}\" (click)=\"activatetab('Your consultation schedule',3)\"> <a> Your consultation schedule </a> </li>\n                <li class=\"{{getClass(4)}}\" (click)=\"activatetab('Add SmartAssistant',4)\"> <a> Add SmartAssistant </a> </li>\n                <li class=\"{{getClass(5)}}\" (click)=\"activatetab('Add clinic services',5)\"> <a> Add clinic services </a> </li>\n                <li class=\"{{getClass(7)}}\" (click)=\"activatetab('Language Selection',7)\"> <a> Language Selection </a> </li>\n                <li class=\"{{getClass(6)}}\" (click)=\"activatetab('Upload documents',6)\"> <a> Upload documents </a> </li>\n            </ul>\n        </div>\n    </div> -->\n    <div class=\"\" *ngIf=\"activatedtab==0\">\n        <div class=\"signup-content-wrapper\">\n            <div class=\"signup-content\">\n                <div class=\"row\">\n                    <!--div class=\"col-lg-10\">\n                        <div class=\"signup-card\">\n                            <h3 class=\"signup-contentHead\"> {{activatedtabHeading}}</h3>\n                        </div>\n                    </div-->\n                    \n                    <form [formGroup]=\"stepOneForm\" autocomplete=\"off\">\n                            <input type=\"password\" name=\"pword\" style=\"opacity:0\" />\n                        <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                            <div class=\"signup-card newform-margin\">\n                                <div class=\"row\">\n                                    <div class=\"col-lg-12\">\n                                        <h4>Web password </h4>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!change_phone_div\">\n                                        <div class=\"input-group fieldDesign\">\n                                            <span class=\"input-group-addon\">+91</span>\n                                            <input id=\"field1\" type=\"text\" [attr.disabled]=\"otp_verified ? '' : null\" class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"InitialDetail.phone\" [formControl]=\"stepOneForm.controls['phone']\" />\n                                            <label for=\"field1\" class=\"labelFloat\" *ngIf=\"!otp_verified\"> Mobile Number<sup>*</sup> </label>\n                                            <p style=\"color: #FF0000\" *ngIf=\"!stepOneForm.controls['phone'].valid  && ( stepOneForm.controls['phone'].touched)\">Invalid phone number !!!</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!change_email_div\">\n                                        <div class=\"fieldDesign\">\n                                            <input id=\"field2\" type=\"text\" [attr.disabled]=\"otp_verified ? '' : null\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"InitialDetail.email\" [formControl]=\"stepOneForm.controls['email']\" />\n                                            <label for=\"field2\" class=\"labelFloat\" *ngIf=\"!otp_verified\"> Email<sup>*</sup>(User ID) </label>\n                                            <p style=\"color: #FF0000\" *ngIf=\"!stepOneForm.controls['email'].valid  && ( stepOneForm.controls['email'].touched)\">Invalid email ID !!!</p>\n                                        </div>\n                                    </div>\n                                  \n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!change_password_div\">\n                                        <div class=\"fieldDesign\">\n                                            <input id=\"field5\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"InitialDetail.current_password\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"false\" (keyup)=\"checkOldPassword()\"/>\n                                            <label for=\"field5\" class=\"labelFloat\" > Current password<sup>*</sup></label>\n                                            <p style=\"color: #FF0000\" *ngIf=\"!correct_password\">Invalid Current Password!!!</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!change_password_div\">\n                                        <div class=\"fieldDesign\">\n                                        \n                                            <input id=\"field3\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"InitialDetail.password\" [formControl]=\"stepOneForm.controls['password']\" (input)=\"checkPassword(InitialDetail.password)\" autocomplete=\"false\"/>\n                                            <label for=\"field3\" class=\"labelFloat\">Create password<sup>*</sup> </label>\n                                            <p style=\"color: #FF0000\" *ngIf=\"!stepOneForm.controls['password'].valid  && (stepOneForm.controls['password'].touched)\">Invalid password pattern!!!</p>\n                                            <div class=\"instruction-ul\">\n                                                <ul>\n                                                    <li [ngClass]=\"(lowerCase==true) ? 'passed': ''\">One lowercase character</li>\n                                                    <li [ngClass]=\"(specialCase==true) ? 'passed': ''\">One special character</li>\n                                                    <li [ngClass]=\"(upperCase==true) ? 'passed': ''\">One uppercase character</li>\n                                                    <li [ngClass]=\"(lengthCase==true) ? 'passed': ''\">8 characters minimum</li>\n                                                    <li [ngClass]=\"(numberCase==true) ? 'passed': ''\">One number</li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12 mrgbtmthry\" [hidden]=\"!change_password_div\">\n                                        <div class=\"fieldDesign\">\n                                            <input id=\"field4\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" (keyup)=\"onKey($event)\" [(ngModel)]=\"InitialDetail.confirm_password\" [formControl]=\"stepOneForm.controls['confirm_password']\"/>\n                                            <label for=\"field4\" class=\"labelFloat\"> Repeat password<sup>*</sup> </label>\n                                            <p style=\"color: #FF0000\" *ngIf=\"p_false\">Password and repeat password are not same !!!</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                            <div class=\"signup-card newform-margin\">\n                                <div class=\"row\">\n                                     <div class=\"col-lg-12\">\n                                        <h4>App PIN </h4>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!change_phone_div\">\n                                        <div class=\"input-group fieldDesign\">\n                                            <span class=\"input-group-addon\">+91</span>\n                                            <input id=\"field1\" type=\"text\" [attr.disabled]=\"otp_verified ? '' : null\" class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"InitialDetail.phone\" [formControl]=\"stepOneForm.controls['phone']\" />\n                                            <label for=\"field1\" class=\"labelFloat\" *ngIf=\"!otp_verified\"> Mobile Number<sup>*</sup> </label>\n                                            <p style=\"color: #FF0000\" *ngIf=\"!stepOneForm.controls['phone'].valid  && ( stepOneForm.controls['phone'].touched)\">Invalid phone number !!!</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!change_email_div\">\n                                        <div class=\"fieldDesign\">\n                                            <input id=\"field2\" type=\"text\" [attr.disabled]=\"otp_verified ? '' : null\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"InitialDetail.email\" [formControl]=\"stepOneForm.controls['email']\" />\n                                            <label for=\"field2\" class=\"labelFloat\" *ngIf=\"!otp_verified\"> Email<sup>*</sup>(User ID) </label>\n                                            <p style=\"color: #FF0000\" *ngIf=\"!stepOneForm.controls['email'].valid  && ( stepOneForm.controls['email'].touched)\">Invalid email ID !!!</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!change_password_div\">\n                                        <div class=\"fieldDesign\">\n                                            <input id=\"field5\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"InitialDetail.current_pin\" [ngModelOptions]=\"{standalone: true}\" />\n                                            <label for=\"field5\" class=\"labelFloat\" > Current PIN<sup>*</sup></label>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!change_password_div\">\n                                        <div class=\"fieldDesign\">\n                                            <input id=\"field3\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"InitialDetail.pin\" [formControl]=\"stepOneForm.controls['password']\" (input)=\"checkPassword(InitialDetail.password)\" />\n                                            <label for=\"field3\" class=\"labelFloat\">Create PIN<sup>*</sup> </label>\n                                            <p style=\"color: #FF0000\" *ngIf=\"!stepOneForm.controls['password'].valid  && (stepOneForm.controls['password'].touched)\">Invalid PIN pattern!!!</p>\n                                            <div class=\"instruction-ul no-need\">\n                                                <ul>\n                                                    <li [ngClass]=\"(lowerCase==true) ? 'passed': ''\">One lowercase character</li>\n                                                    <li [ngClass]=\"(specialCase==true) ? 'passed': ''\">One special character</li>\n                                                    <li [ngClass]=\"(upperCase==true) ? 'passed': ''\">One uppercase character</li>\n                                                    <li [ngClass]=\"(lengthCase==true) ? 'passed': ''\">8 characters minimum</li>\n                                                    <li [ngClass]=\"(numberCase==true) ? 'passed': ''\">One number</li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12 mrgbtmthry\" [hidden]=\"!change_password_div\">\n                                        <div class=\"fieldDesign\">\n                                            <input id=\"field4\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" (keyup)=\"onKey($event)\" [(ngModel)]=\"InitialDetail.confirm_pin\" [formControl]=\"stepOneForm.controls['confirm_password']\" />\n                                            <label for=\"field4\" class=\"labelFloat\"> Repeat PIN<sup>*</sup> </label>\n                                            <p style=\"color: #FF0000\" *ngIf=\"p_false\">PIN and repeat PIN are not same !!!</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                        <div class=\"signup-card text-center nwpadig\">\n                             <button class=\"btn btn-primary\" (click) = \"askOtpPasswordChange()\"  *ngIf=\"change_password_div\" class=\"btn btn-custom\" type=\"submit\" [disabled]=\"(!stepOneForm.valid) || (p_false) || (!InitialDetail.current_password) ||  !correct_password\"> Save </button>\n                             <button *ngIf=\"!change_password_div\" class=\"btn btn-custom\" type=\"submit\" [disabled]=\"(!stepOneForm.valid) || (p_false)\" (click)=\"openOTPModal()\"> Verify </button>\n                            <p *ngIf=\"!change_password_div\" class=\"help-note m-t-5\"><small>OTP (One Time Password) will be sent to you for verification</small></p>\n                        </div>\n                    </div>\n                    <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                        <div class=\"signup-card text-center nwpadig\">\n                             <button class=\"btn btn-primary\" (click) = \"askOtpPasswordChange()\"  *ngIf=\"change_password_div\" class=\"btn btn-custom\" type=\"submit\" [disabled]=\"(!stepOneForm.valid) || (p_false) || (!InitialDetail.current_password)\"> Save </button>\n                             <button *ngIf=\"!change_password_div\" class=\"btn btn-custom\" type=\"submit\" [disabled]=\"(!stepOneForm.valid) || (p_false)\" (click)=\"openOTPModal()\"> Verify </button>\n                            <p *ngIf=\"!change_password_div\" class=\"help-note m-t-5\"><small>OTP (One Time Password) will be sent to you for verification</small></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"\" *ngIf=\"activatedtab==1\">\n        <div class=\"signup-content-wrapper\">\n            <div class=\"signup-content\">\n                <div class=\"row\">\n                  <!-- {{doctorData | json}} -->\n                    <form [formGroup]=\"stepTwoForm\" autocomplete=\"off\">\n                        <div class=\"col-md-7 col-sm-7 col-xs-12\">\n                            <div class=\"signup-card\">\n                                <div class=\"row\">\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12 inform-margin\">\n                                        <div class=\"fieldDesign\">\n                                            <input id=\"field6\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[a-zA-Z ]+\" [(ngModel)]=\"ProfileDetail.first_name\" [formControl]=\"stepTwoForm.controls['first_name']\" />\n                                            <label for=\"field6\" class=\"labelFloat\"> Full Name<sup>*</sup> </label>\n                                            <p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['first_name'].valid  && (stepTwoForm.controls['first_name'].touched)\">Invalid name !!!</p>\n                                        </div>\n                                    </div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t <div class=\"form-group  col-md-12 col-sm-12 col-xs-12\">\n                                        \n                                        <label>Mobile Number <small class=\"text-muted\">(OTP Verification Required to Update this field)</small><sup>*</sup> </label>\n                                        <div class=\"input-group fieldDesign\">\n                                                <span class=\"input-group-addon\">+91</span>\n                                                <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"8506006693\" [(ngModel)]=\"doctorData.phone\" [ngModelOptions]=\"{standalone: true}\" disabled />\n                                                <!--p style=\"color: #FF0000\" *ngIf=\"!stepThreeForm.controls['mobile'].valid  && (stepThreeForm.controls['mobile'].touched)\">Invalid mobile number !!!</p-->\n                                            <button class=\"btn btn-primary csm-inside-btn\" (click)=\"askOtp('email')\"   style=\"top: 0px; right: 0px; z-index: 9; padding: 9px 15px;\">Change</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!--nput type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"Mobile Number\" [(ngModel)]=\"doctorData.phone\" [ngModelOptions]=\"{standalone: true}\" disabled /-->\n\t\t\t\t\t\t\t\t\t\t\n                                       \n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <label> Select Specialisation<sup>*</sup> </label>\n                                        <select class=\"form-control txtfield\" [(ngModel)]=\"ProfileDetail.specialization\" [formControl]=\"stepTwoForm.controls['specialization']\" (change)=\"checkOther(ProfileDetail.specialization)\">\n                                            <option selected disabled=\"\" selected=\"\"> Select Specialization </option>\n                                            <option value=\"CARDIOLOGIST\"> CARDIOLOGIST </option>\n                                            <option value=\"DENTIST\"> DENTIST </option>\n                                            <option value=\"DERMATOLOGIST\"> DERMATOLOGIST </option>\n                                            <option value=\"DIABETOLOGIST\"> DIABETOLOGIST </option>\n                                            <option value=\"DIETICIAN\"> DIETICIAN </option>\n                                            <option value=\"E.N.T.\">E.N.T.</option>\n                                            <option value=\"GASTROENTEROLOGIST\"> GASTROENTEROLOGIST </option>\n                                            <option value=\"GENERAL PHYSICIAN\"> GENERAL PHYSICIAN </option>\n                                            <option value=\"GENERAL SURGEON\"> GENERAL SURGEON </option>\n                                            <option value=\"GYNOCOLOGIST/OBSTETRICIAN\"> GYNOCOLOGIST/OBSTETRICIAN </option>\n                                            <option value=\"NEPHROLOGIST\"> NEPHROLOGIST </option>\n                                            <option value=\"NEUROLOGIST\"> NEUROLOGIST </option>\n                                            <option value=\"ONCOLOGIST\"> ONCOLOGIST </option>\n                                            <option value=\"OPTHALMOLOGIST\"> OPTHALMOLOGIST </option>\n                                            <option value=\"ORTHOPEDIST\"> ORTHOPEDIST </option>\n                                            <option value=\"PEDIATRICIAN\"> PEDIATRICIAN </option>\n                                            <option value=\"PSYCHIATRIST\"> PSYCHIATRIST </option>\n                                            <option value=\"PULMONOLOGIST\"> PULMONOLOGIST </option>\n                                            <option value=\"RHEUMATOLOGIST\"> RHEUMATOLOGIST </option>\n                                            <option value=\"SEXOLOGIST\"> SEXOLOGIST </option>\n                                            <option value=\"UROLOGIST\"> UROLOGIST </option>\n                                            <option value=\"OTHER\"> OTHER </option>\n                                        </select>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"other_specialization\">\n                                        <label> Enter Other Specialisation<sup>*</sup> </label>\n                                        <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"Other Specialization\" [(ngModel)]=\"ProfileDetail.other_specialization\" [formControl]=\"stepTwoForm.controls['other_specialization']\" />\n                                        <p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['other_specialization'].valid\">Invalid Entry !!!</p>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <label> Medical/State council registration number<sup>*</sup> </label>\n                                        <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"110067\" [(ngModel)]=\"ProfileDetail.registration_no\" [formControl]=\"stepTwoForm.controls['registration_no']\" />\n                                        <p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['registration_no'].valid  && (stepTwoForm.controls['registration_no'].touched)\">Invalid registration number !!!</p>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <label> Qualification<sup>*</sup> <small class=\"text-muted\">(Degrees separated by comma) </small></label>\n                                        <tag-input class=\"selectize-qual\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"MBBS, MD\" theme='bootstrap' [(ngModel)]=\"ProfileDetail.qualification\" [formControl]=\"stepTwoForm.controls['qualification']\"></tag-input>\n                                        <p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['qualification'].valid  && (stepTwoForm.controls['qualification'].touched)\">Invalid qualification !!!</p>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <label> Professional Affiliation <small class=\"text-muted\">(Separated by comma) </small></label>\n                                        <tag-input class=\"selectize-qual\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Retired Head of Dept., AIIMS\" theme='bootstrap' [(ngModel)]=\"ProfileDetail.professional_affiliation\" [formControl]=\"stepTwoForm.controls['professional_affiliation']\"></tag-input>\n                                        <p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['professional_affiliation'].valid  && (stepTwoForm.controls['professional_affiliation'].touched)\">Invalid professional affiliation !!!</p>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <label> Date of Birth<sup>*</sup> </label>\n                                        <angular2-date-picker [(ngModel)]=\"ProfileDetail.dob\" [formControl]=\"stepTwoForm.controls['dob']\" [settings]=\"settings\"></angular2-date-picker>\n                                        <p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['dob'].valid  && (stepTwoForm.controls['dob'].touched)\">Invalid date of birth !!!</p>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <label> Practising Since<sup>*</sup> </label>\n                                        <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"yyyy\" pattern=\"[0-9.]+\" maxLength=\"4\" [(ngModel)]=\"ProfileDetail.practicing_since\" [formControl]=\"stepTwoForm.controls['practicing_since']\" />\n                                        <p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['practicing_since'].valid  && (stepTwoForm.controls['practicing_since'].touched)\">Invalid year !!!</p>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <label> Consultation fee<sup>*</sup>\n                                        </label>\n                                        <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"500\" pattern=\"[0-9.]+\" maxLength=\"10\" value=\"0\" [(ngModel)]=\"ProfileDetail.consultation_fee\" [formControl]=\"stepTwoForm.controls['consultation_fee']\" />\n                                        <p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['consultation_fee'].valid  && (stepTwoForm.controls['consultation_fee'].touched)\">Invalid fee !!!</p>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <label>Specialized treatments available for<sup>*</sup> <small class=\"text-muted\">(Diseases/Conditions seperated by comma)</small></label>\n                                        <tag-input class=\"selectize-qual\" [separatorKeyCodes]=\"[188]\" placeholder=\"Add more\" secondaryPlaceholder=\"Diabetes, Asthma etc\" theme='bootstrap' [(ngModel)]=\"ProfileDetail.expertise\" [formControl]=\"stepTwoForm.controls['expertise']\"></tag-input>\n                                        <p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['expertise'].valid  && (stepTwoForm.controls['expertise'].touched)\">Invalid expertise(s) !!!</p>\n                                    </div>\n                                   \n                                    <div class=\"form-group  col-md-12 col-sm-12 col-xs-12\">\n                                        <label *ngIf=\"doctorData.type_of_doctor == 'admin_doctor'\">Your Clinic Id<sup>*</sup>  </label>\n                                        <label *ngIf=\"doctorData.type_of_doctor == 'normal_doctor'\">Clinic Id you are associated with <small class=\"text-muted\">(OTP Verification Required to Update this field)</small><sup>*</sup> </label>\n                                        <input *ngIf=\"doctorData.type_of_doctor == 'admin_doctor'\" type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"Clinic Id\" [(ngModel)]=\"ProfileDetail.doctm_clinic_id\" [ngModelOptions]=\"{standalone: true}\" disabled />\n                                        <input *ngIf=\"doctorData.type_of_doctor == 'normal_doctor'\" type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"Clinic Id\" [(ngModel)]=\"ProfileDetail.doctm_clinic_id\" [ngModelOptions]=\"{standalone: true}\"  />\n                                        <button class=\"btn btn-primary csm-inside-btn\" *ngIf=\"doctorData.type_of_doctor == 'admin_doctor'\" (click)=\"shareClinicId(ProfileDetail)\">Share</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary csm-inside-btn\" *ngIf=\"doctorData.type_of_doctor == 'normal_doctor'\" (click)=\"changeClinicId('clinicid')\">Change</button>\n                                       \n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <label>doctm Id<sup>*</sup> </label>\n                                        <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"Clinic Id\" [(ngModel)]=\"ClinicContactDetail.doctm_id\" [ngModelOptions]=\"{standalone: true}\" disabled=\"\" />\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <label>Second Language </label>\n                                         <select class=\"form-control txtfield\" [(ngModel)]='ProfileDetail.language' [ngModelOptions]=\"{standalone: true}\">\n                                                <option value=\"\" selected=\"\"> None </option>\n                                                <option value=\"hi\">Hindi</option>\n                                                <option value=\"pa\">Punjabi</option>\n                                                <option value=\"bn\">Bengali</option>\n                                                <option value=\"gu\">Gujarati</option>\n                                                <option value=\"kn\">Kannada</option>\n                                                <option value=\"ml\">Malayalam</option>\n                                                <option value=\"mr\">Marathi</option>\n                                                <option value=\"ta\">Tamil</option>\n                                                <option value=\"te\">Telugu</option>\n                                            </select>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                    <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                        <div class=\"signup-card\">\n                            <div class=\"signup-profile\">\n                                <div class=\"signup-uploadimg\">\n                                    <img src=\"./assets/imgs/profile-placeholder.png\" class=\"img-responsive\" *ngIf=\"!ProfileDetail.selectedImage\" />\n                                    <img [src]=\"ProfileDetail.selectedImage\" class=\"img-responsive\" *ngIf=\"ProfileDetail.selectedImage && !ProfileDetail.imageAlready\" />\n                                    <img src=\"{{doctorPic}}{{ProfileDetail.selectedImage}}\" class=\"img-responsive\" *ngIf=\"ProfileDetail.imageAlready\" />\n                                    <input type=\"file\" (change)=\"onupload($event)\" name=\"\" class=\"inpt-file\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card text-center\">\n                            <button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"!stepTwoForm.valid\" (click)=\"saveStepTwoDetails()\"> Save </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"\" *ngIf=\"activatedtab==2\">\n        <div class=\"signup-content-wrapper\">\n            <div class=\"signup-content\">\n                <div class=\"row\">\n                    <!--div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card\">\n                            <h3 class=\"signup-contentHead\"> {{activatedtabHeading}}</h3>\n                        </div>\n                    </div-->\n                    <div class=\"col-md-7 col-sm-12 col-xs-12\" *ngIf=\"!loading\">\n                        <div class=\"signup-card\">\n                            <div class=\"row\">\n                                <form [formGroup]=\"stepThreeForm\" autocomplete=\"off\">\n                                    <div class=\"yes-form\" *ngIf=\"condition\">\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12 inform-margin\">\n                                            <label> Clinic Name <sup>*</sup></label>\n                                            <!-- <input class=\"form-control txtfield\" placeholder=\"Clinic Name\" [(ngModel)]=\"ClinicContactDetail.clinic_name\" [formControl]=\"stepThreeForm.controls['clinic_name']\" ngx-google-places-autocomplete [options]=\"{ types: [(geocode)],componentRestrictions: { country: 'IN' } }\" #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" /> -->\n                                            <input type=\"text\"  class=\"form-control txtfield\" placeholder=\"Clinic Name\" [(ngModel)]=\"ClinicContactDetail.clinic_name\" [formControl]=\"stepThreeForm.controls['clinic_name']\" >\n                                            <p style=\"color: #FF0000\" *ngIf=\"!stepThreeForm.controls['clinic_name'].valid  && (stepThreeForm.controls['clinic_name'].touched)\">Invalid name !!!</p>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-md-12\">\n                                            <h4> Clinic Contact Details \n\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"!editDetails\" class=\"btn btn-custom\" style=\"float: right;    padding: 2px 0px; min-width: 70px; font-weight: bold;    font-size: 14px;\" (click)=\"toggleEdit()\">Edit</button >\n\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"editDetails\"class=\"btn btn-custom\" style=\"float: right;    padding: 2px 0px; min-width: 70px; font-weight: bold;    font-size: 14px; background: #d9534f; color: white;Ne    border-color: #d9534f;\" (click)=\"toggleEdit()\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t\t</h4>\n                                        </div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                                            <label> Flat/House/building No<sup>*</sup></label>\n                                            <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"E-286\" [(ngModel)]=\"ClinicContactDetail.address\" [formControl]=\"stepThreeForm.controls['address']\" [readonly]=\"!editDetails\" />\n                                            <p style=\"color: #FF0000\" *ngIf=\"!stepThreeForm.controls['address'].valid  && (stepThreeForm.controls['address'].touched)\">Invalid address !!!</p>\n                                        </div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                                            <label> Location/Area <sup>*</sup></label>\n                                            <input class=\"form-control txtfield\" [(ngModel)]=\"ClinicContactDetail.area\" [formControl]=\"stepThreeForm.controls['area']\" [readonly]=\"!editDetails\" />\n                                            <!--mat-autocomplete #auto=\"matAutocomplete\" >\n                                              <mat-option (onSelectionChange)=\"onAddLocation($event)\" *ngFor=\"let option of ClinicContactDetail.database\" [value]=\"option\" >\n                                                {{option}}\n                                              </mat-option>\n                                            </mat-autocomplete-->\n                                        </div>\n                                        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                                            <label> State <sup>*</sup></label>\n                                            <select name=\"state\" class=\"form-control txtfield\" [(ngModel)]=\"state\" [formControl]=\"stepThreeForm.controls['state']\" (change)=\"stateSelected()\" [attr.disabled]=\"editDetails == false ? true : null\" >\n                                                <option *ngFor=\"let state of statesList\" value=\"{{state.id}}\">{{state.name}}</option>\n                                            </select>\n                                        </div>\n                                        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                                            <label> City<sup>*</sup></label>\n                                            <select name=\"city\" class=\"form-control txtfield\" [(ngModel)]=\"city\" [formControl]=\"stepThreeForm.controls['city']\" (change)=\"citySelected()\" [attr.disabled]=\"editDetails == false ? true : null\">\n                                                <option *ngFor=\"let city of citiesList\" value=\"{{city.id}}\">{{city.name}}</option>\n                                            </select>\n                                        </div>\n                                      \n                                        \n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <label> Clinic Land line number (for appointments) </label>\n                                            <div class=\"input-group\">\n                                                <span class=\"input-group-field\">\n                                                    <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"0121\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"ClinicContactDetail.std_code\" [formControl]=\"stepThreeForm.controls['std_code']\"/>\n                                                </span>\n                                                <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"22492032\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"ClinicContactDetail.landline\" [formControl]=\"stepThreeForm.controls['landline']\" />\n                                            </div>\n                                            <p style=\"color: #FF0000\" *ngIf=\"!stepThreeForm.controls['std_code'].valid  && (stepThreeForm.controls['std_code'].touched)\">Invalid Code !!!</p>\n                                            <p style=\"color: #FF0000\" *ngIf=\"!stepThreeForm.controls['landline'].valid  && (stepThreeForm.controls['landline'].touched)\">Invalid number !!!</p>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <label> Clinic Mobile number (for appointments) <sup>*</sup></label>\n                                            <div class=\"input-group fieldDesign\">\n                                                <span class=\"input-group-addon\">+91</span>\n                                                <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"8506006693\" pattern=\"[0-9-+.]+\" maxLength=\"10\" [(ngModel)]=\"ClinicContactDetail.mobile\" [formControl]=\"stepThreeForm.controls['mobile']\" />\n                                                <p style=\"color: #FF0000\" *ngIf=\"!stepThreeForm.controls['mobile'].valid  && (stepThreeForm.controls['mobile'].touched)\">Invalid mobile number !!!</p>\n                                            </div>\n                                        </div>\n                                        <!--div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"!enableEdit\">\n                                            <label> Clinic Location on Google Map</label>\n                                            <agm-map [zoom]=\"16\" [latitude]=\"lat\" [longitude]=\"lng\">\n                                                <agm-marker [markerDraggable]=\"true\" [markerClickable]=\"true\" (dragEnd)=\"placeMarker($event)\" [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n                                            </agm-map>\n                                            <a href=\"javascript:void(0);\" style=\"float:right; margin-top:3px; font-weight:bolder; text-decoration:none;\" (click)=\"editMap(1)\">Edit</a>\n                                         </div-->\n                                        \n\t\t\t\t\t\t\t\t\t\t   <div class=\"form-group col-md-12 col-sm-12 col-xs-12 map-box\" *ngIf=\"!editDetails || enable_map\">\n                                            <p><small *ngIf=\"editDetails\">Drag the marker to exactly locate your clinic</small></p>\n                                            <!-- <input id=\"pac-input\" class=\"form-control\" type=\"text\" placeholder=\"Search Box\"> -->\n                                            <agm-map [zoom]=\"16\" [latitude]=\"lat\" [longitude]=\"lng\">\n                                                <agm-marker [markerDraggable]=\"editDetails\" [markerClickable]=\"editDetails\" (dragEnd)=\"placeMarker($event)\" [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n                                            </agm-map>\n\t\t\t\t\t\t\t\t\t\t\t<!--a href=\"javascript:void(0);\" style=\"float:right; margin-top:3px; font-weight:bolder; text-decoration:none;\" (click)=\"editMap(1)\">Edit</a--> \n                                        </div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 inform-margin\" *ngIf=\"editDetails\">\n                                            <label *ngIf=\"!enable_map\">Search your clinic by typing name of your clinic on Google Directory<sup>*</sup></label>\n                                            <input *ngIf=\"!enable_map\" class=\"form-control txtfield\" placeholder=\"Write Your Clinic Name\" [(ngModel)]=\"ClinicContactDetail.clinic_name1\" [formControl]=\"stepThreeForm.controls['clinic_name1']\" ngx-google-places-autocomplete [options]=\"{ types: [(geocode)],componentRestrictions: { country: 'IN' } }\" #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" />\n                                            \n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" style=\"float:right; margin-top:3px; font-weight:bolder; text-decoration:none;\" (click)=\"showMap('manual')\" *ngIf=\"!enable_map\">Could not find your clinic? Locate manually</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" style=\"float:right; margin-top:3px; font-weight:bolder; text-decoration:none;\" (click)=\"showMap('auto')\" *ngIf=\"enable_map\">Search your clinic by typing clinic name</a>\t\t\t\t\t\t\t\t\t\t\t\n                                        </div>\n\t\t\t\t\t\t\t\t\t\t\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <label> Clinic email</label>\n                                            <div class=\"input-group fieldDesign\">\n                                                <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"doctm@gmail.com\"[(ngModel)]=\"ClinicContactDetail.email\" [formControl]=\"stepThreeForm.controls['clinic_email']\" />\n                                                \n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <label> Clinic website </label>\n                                            <div class=\"input-group fieldDesign\">\n                                                <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"https://doctm.com\"  [(ngModel)]=\"ClinicContactDetail.website\" [formControl]=\"stepThreeForm.controls['website']\"/>\n                                               \n                                            </div>\n                                        </div>\n                                     \n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                        <div class=\"signup-card text-center\">\n                            <button *ngIf=\"condition\" class=\"btn btn-custom\" type=\"submit\" [disabled]=\"!stepThreeForm.valid\" (click)=\"saveStepThreeDetails()\"> Save </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"\" *ngIf=\"activatedtab==3\">\n        <div class=\"signup-content-wrapper\">\n            <div class=\"signup-content signup-consultSchedul\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card\">\n                            <div class=\"row\">\n                                <!--div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-12\">\n                                    <h3 class=\"signup-contentHead\"> SmartClinic Sign-up / {{activatedtabHeading}}</h3>\n                                </div-->\n                                <div class=\"col-lg-12 col-md-12 col-sm-4 col-xs-12\">\n                                    <div class=\"btn btn-custom pull-right\" (click)=\"preview()\">Preview</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <ul class=\"consult-scheduleul\">\n                        <li *ngFor=\"let schedule of scheduleArray;let i = index;\">\n                            <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                                <div class=\"signup-card schedul-box\">\n                                    <div class=\"panel panel-default\">\n                                        <div class=\"panel-heading\" role=\"tab\" id=\"heading\">\n                                            <h4 class=\"panel-title\">\n                                                <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse{{i+1}}\" aria-expanded=\"true\" aria-controls=\"collapse\">\n                                                Schedule #{{i+1}} <span class=\"trash-schedule\"> <i class=\"fa fa-trash\" (click)=\"deleteSchedule(i)\"></i> </span></a>\n                                            </h4>\n                                        </div>\n                                        <div id=\"collapse{{i+1}}\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"heading\">\n                                            <div class=\"panel-body\">\n                                                <div class=\"row\">\n                                                    <div class=\"opened-schedule\">\n                                                        <div class=\"day_schedule\">\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" (change)=\"changeDay(schedule.Monday,1,i)\" [(ngModel)]=\"schedule.Monday\" [ngModelOptions]=\"{standalone: true}\" value=\"Monday\" name=\"\" /> Monday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" (change)=\"changeDay(schedule.Tuesday,2,i)\" [(ngModel)]=\"schedule.Tuesday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Tuesday\" /> Tuesday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" (change)=\"changeDay(schedule.Wednesday,3,i)\" [(ngModel)]=\"schedule.Wednesday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Wednesday\" /> Wednesday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" (change)=\"changeDay(schedule.Thursday,4,i)\" [(ngModel)]=\"schedule.Thursday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Thursday\" /> Thursday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" (change)=\"changeDay(schedule.Friday,5,i)\" [(ngModel)]=\"schedule.Friday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Friday\" /> Friday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" (change)=\"changeDay(schedule.Saturday,6,i)\" [(ngModel)]=\"schedule.Saturday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Saturday\" /> Saturday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" (change)=\"changeDay(schedule.Sunday,7,i)\" [(ngModel)]=\"schedule.Sunday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Sunday\" /> Sunday\n                                                            </label>\n                                                        </div>\n                                                        <ul class=\"shift-schedule\">\n                                                            <li *ngFor=\"let shift of schedule.shifts;let j = index\">\n                                                                <h5 class=\"text-uppercase\"> Shift-{{j+1}} </h5>\n                                                                <div class=\"table-schedule\">\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <label> From <small class=\"text-muted\">(HH : MM)</small></label>\n                                                                        <ngb-timepicker [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [(ngModel)]=\"schedule.shifts[j].fromTime\"></ngb-timepicker>\n                                                                    </div>\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <label> Untill <small class=\"text-muted\">(HH : MM)</small></label>\n                                                                        <ngb-timepicker [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [(ngModel)]=\"schedule.shifts[j].toTime\"></ngb-timepicker>\n                                                                    </div>\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <a href=\"javascript:void(0);\" class=\"shift-trash ok-btn-prnt m-b-5\"> <span class=\"trash-schedule\"><i class=\"fa fa-trash\" (click)=\"deleteShiftFromArray(i,j)\"></i> </span></a>\n                                                                    </div>\n                                                                </div>\n                                                            </li>\n                                                            <li *ngIf=\"schedule.shifts.length<6 && schedule.show_new_shift==true\">\n                                                                <h5 class=\"text-uppercase\"> New Shift </h5>\n                                                                <div class=\"table-schedule\">\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <label> From <small class=\"text-muted\">(HH : MM)</small></label>\n                                                                        <ngb-timepicker [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [(ngModel)]=\"schedule.fromTime\"></ngb-timepicker>\n                                                                    </div>\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <label> Untill <small class=\"text-muted\">(HH : MM)</small></label>\n                                                                        <ngb-timepicker [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [(ngModel)]=\"schedule.toTime\"></ngb-timepicker>\n                                                                    </div>\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <a href=\"javascript:void(0);\" class=\"shift-trash ok-btn-prnt m-b-5\">\n                                                                            <!-- <i class=\"fa fa-cloud-upload\" (click)=\"addShiftInArray(i)\"></i>\n                                                                         -->\n                                                                            <!-- <span class=\"ok-btn\" (click)=\"addShiftInArray(i)\"></span> -->\n                                                                            <img src=\"./assets/imgs/submit.png\" (click)=\"addShiftInArray(i)\"  />\n                                                                        </a>\n                                                                        <a href=\"javascript:void(0);\" class=\"shift-trash  ok-btn-prnt m-b-5\" *ngIf=\"schedule.shifts.length>0\"> <i class=\"fa fa-trash\" (click)=\"hideNewShiftSchedule(i)\"></i> </a>\n                                                                    </div>\n                                                                </div>\n                                                            </li>\n                                                        </ul>\n                                                        <div *ngIf=\"schedule.shifts.length<6\" class=\"opened-heading\" (click)=\"addShiftInArray(i)\">\n                                                            <h5 class=\"text-center\"> Add More Shift <a href=\"javascript:void(0);\" class=\"shift-add\"> <i class=\"fa fa-plus-circle\"></i> </a> </h5>\n                                                        </div>\n                                                        <!-- <div class=\"opened-heading\" *ngIf=\"schedule.shifts.length==6\" (click)=\"addShiftInArray(i)\">\n                                                            <h5 class=\"text-center\"> Save </h5>\n                                                        </div> -->\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                        <li *ngIf=\"show_new_schedule==true\">\n                            <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                                <div class=\"signup-card schedul-box\">\n                                    <div class=\"panel panel-default\">\n                                        <div class=\"panel-heading\" role=\"tab\" id=\"heading2\">\n                                            <h4 class=\"panel-title\">\n                                                <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseStatic\" aria-expanded=\"true\" aria-controls=\"collapseStatic\">\n                                                New Schedule <span class=\"trash-schedule\" *ngIf=\"scheduleArray.length>0\"> <i class=\"fa fa-trash\" (click)=\"hideNewSchedule()\"></i> </span></a>\n                                            </h4>\n                                        </div>\n                                        <div id=\"collapseStatic\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"heading2\">\n                                            <div class=\"panel-body\">\n                                                <div class=\"row\">\n                                                    <div class=\"opened-schedule\">\n                                                        <div class=\"day_schedule\">\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" disabled=\"{{mondayDisabled}}\" [(ngModel)]=\"myObject.Monday\" [ngModelOptions]=\"{standalone: true}\" value=\"Monday\" name=\"\" /> Monday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" disabled=\"{{tuesdayDisabled}}\" [(ngModel)]=\"myObject.Tuesday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Tuesday\" /> Tuesday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" disabled=\"{{wednesdayDisabled}}\" [(ngModel)]=\"myObject.Wednesday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Wednesday\" /> Wednesday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" disabled=\"{{thursdayDisabled}}\" [(ngModel)]=\"myObject.Thursday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Thursday\" /> Thursday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" disabled=\"{{fridayDisabled}}\" [(ngModel)]=\"myObject.Friday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Friday\" /> Friday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" disabled=\"{{saturdayDisabled}}\" [(ngModel)]=\"myObject.Saturday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Saturday\" /> Saturday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" disabled=\"{{sundayDisabled}}\" [(ngModel)]=\"myObject.Sunday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Sunday\" /> Sunday\n                                                            </label>\n                                                        </div>\n                                                        <ul class=\"shift-schedule\">\n                                                            <li *ngFor=\"let shift of myObject.shifts;let j = index\">\n                                                                <h5 class=\"text-uppercase\"> Shift-{{j+1}} </h5>\n                                                                <div class=\"table-schedule\">\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <label> From <small class=\"text-muted\">(HH : MM)</small></label>\n                                                                        <ngb-timepicker [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [(ngModel)]=\"myObject.shifts[j].fromTime\"></ngb-timepicker>\n                                                                    </div>\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <label> Untill <small class=\"text-muted\">(HH : MM)</small></label>\n                                                                        <ngb-timepicker [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [(ngModel)]=\"myObject.shifts[j].toTime\"></ngb-timepicker>\n                                                                    </div>\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <a href=\"javascript:void(0);\" class=\"shift-trash\"> <i class=\"fa fa-trash\" (click)=\"deleteShift(j)\"></i> </a>\n                                                                    </div>\n                                                                </div>\n                                                            </li>\n                                                            <li *ngIf=\"myObject.shifts.length<6 && show_new_shift==true\">\n                                                                <h5 class=\"text-uppercase\"> New Shift </h5>\n                                                                <div class=\"table-schedule\">\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <label> From <small class=\"text-muted\">(HH : MM)</small></label>\n                                                                        <ngb-timepicker [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [(ngModel)]=\"myObject.fromTime\"></ngb-timepicker>\n                                                                    </div>\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <label> Untill <small class=\"text-muted\">(HH : MM)</small></label>\n                                                                        <ngb-timepicker [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [(ngModel)]=\"myObject.toTime\"></ngb-timepicker>\n                                                                    </div>\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <a href=\"javascript:void(0);\" class=\"shift-trash ok-btn-prnt m-b-5\"><!--  <i class=\"fa fa-cloud-upload\" (click)=\"addShift('not_show')\"></i> \n                                                                        --> <!-- <span class=\"ok-btn\" (click)=\"addShift('not_show')\"></span> -->\n                                                                        <img src=\"./assets/imgs/submit.png\" (click)=\"addShift('not_show')\"/>\n                                                                        </a>\n                                                                        <a href=\"javascript:void(0);\" class=\"shift-trash\" *ngIf=\"myObject.shifts.length>0\"> <i class=\"fa fa-trash\" (click)=\"hideNewShift()\"></i> </a>\n                                                                    </div>\n                                                                </div>\n                                                            </li>\n                                                        </ul>\n                                                        <div *ngIf=\"myObject.shifts.length<6\" class=\"opened-heading\" (click)=\"addShift('show')\">\n                                                            <h5 class=\"text-center\"> Add More Shift <a href=\"javascript:void(0);\" class=\"shift-add\"> <i class=\"fa fa-plus-circle\"></i> </a> </h5>\n                                                        </div>\n                                                        <!-- <div class=\"opened-heading\" *ngIf=\"myObject.shifts.length==6\" (click)=\"addShift('not_show')\">\n                                                            <h5 class=\"text-center\"> Save </h5>\n                                                        </div> -->\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                        <!-- <li>\n                            <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                                <div class=\"signup-card schedul-box\">\n                                    \n                                    <div class=\"panel panel-default\">\n                                        <div class=\"panel-heading\" role=\"tab\" id=\"heading3\">\n                                            <h4 class=\"panel-title\">\n                                                <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\" aria-expanded=\"true\" aria-controls=\"collapse3\">\n                                                Schedule #3 <span class=\"trash-schedule\"> <i class=\"fa fa-trash\"></i> </span></a>\n                                            </h4>\n                                        </div>\n                                        <div id=\"collapse3\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"heading3\">\n                                            <div class=\"panel-body\">                                                \n                                                <div class=\"row\">\n                                                    <div class=\"opened-schedule\">\n                                                        \n                                                        <div class=\"day_schedule\">\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" value=\"monday\" name=\"\" /> Monday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" name=\"\" value=\"tuesday\" /> Tuesday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" name=\"\" value=\"wednesday\" /> Wednesday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" name=\"\" value=\"thursday\" /> Thursday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" name=\"\" value=\"friday\" /> Friday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" name=\"\" value=\"saturday\" /> Saturday\n                                                            </label>\n                                                            <label class=\"checkbox-inline\">\n                                                                <input type=\"checkbox\" name=\"\" value=\"sunday\" /> Sunday\n                                                            </label>\n                                                        </div>\n\n                                                        <ul class=\"shift-schedule\">\n                                                            <li>\n                                                                <h5 class=\"text-uppercase\"> Shift-1 </h5>\n                                                                <div class=\"table-schedule\">\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <label> From </label>\n                                                                        <input type=\"text\" class=\"timepicker1 form-control txtfield\" name=\"\" />\n                                                                    </div>\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <label> Untill </label>\n                                                                        <input type=\"text\" class=\"timepicker1 form-control txtfield\" name=\"\" />\n                                                                    </div>\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <a href=\"javascript:void(0);\" class=\"shift-trash\"> <i class=\"fa fa-trash\"></i> </a>\n                                                                    </div>\n                                                                    \n                                                                </div>\n                                                            </li>\n                                                            <li>\n                                                                <h5 class=\"text-uppercase\"> Shift-2 </h5>\n                                                                <div class=\"table-schedule\">\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <label> From </label>\n                                                                        <input type=\"text\" class=\"timepicker1 form-control txtfield\" name=\"\" />\n                                                                    </div>\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <label> Untill </label>\n                                                                        <input type=\"text\" class=\"timepicker1 form-control txtfield\" name=\"\" />\n                                                                    </div>\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <a href=\"javascript:void(0);\" class=\"shift-trash\"> <i class=\"fa fa-trash\"></i> </a>\n                                                                    </div>\n                                                                    \n                                                                </div>\n                                                            </li>\n                                                            <li>\n                                                                <h5 class=\"text-uppercase\"> Shift-3 </h5>\n                                                                <div class=\"table-schedule\">\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <label> From </label>\n                                                                        <input type=\"text\" class=\"timepicker1 form-control txtfield\" name=\"\" />\n                                                                    </div>\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <label> Untill </label>\n                                                                        <input type=\"text\" class=\"timepicker1 form-control txtfield\" name=\"\" />\n                                                                    </div>\n                                                                    <div class=\"tablecell-schedule\">\n                                                                        <a href=\"javascript:void(0);\" class=\"shift-trash\"> <i class=\"fa fa-trash\"></i> </a>\n                                                                    </div>\n                                                                    \n                                                                </div>\n                                                            </li>\n                                                        </ul>\n                                                        <div class=\"opened-heading\">\n                                                            <h5 class=\"text-center\"> Add More Shift <a href=\"javascript:void(0);\" class=\"shift-add\"> <i class=\"fa fa-plus-circle\"></i> </a> </h5>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n                                        </div>\n\n                                    </div>\n\n\n                                </div>\n\n                            </div>\n                        </li> -->\n                        <li>\n                            <div class=\"addschedul-box\">\n                                <div class=\"signup-card schedul-box\">\n                                    <div class=\"addschedul-div\" (click)=\"addAnotherSchedule()\">\n                                        <i class=\"fa fa-plus-circle\"></i> Add Another Schedule\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                    </ul>\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card text-center\">\n                            <button class=\"btn btn-custom\" type=\"submit\" (click)=\"saveConsultationSchedule()\"> Save </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"\" *ngIf=\"activatedtab==4\">\n        <div class=\"signup-content-wrapper\">\n            <div class=\"signup-content\">\n                <div class=\"row\">\n                    <!--div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card\">\n                            <h3 class=\"signup-contentHead\"> {{activatedtabHeading}}</h3>\n                        </div>\n                    </div-->\n                    <div class=\"smartasst-box\">\n                        <form [formGroup]=\"stepFourForm\" autocomplete=\"off\">\n                            <div class=\"col-md-5 col-sm-12 col-xs-12\">\n                                <div class=\"signup-card signup-smartasst\">\n                                    <h3 class=\"text-center m-b-30\">SmartAssistant</h3>\n                                    <p> SmartAssistant module is the reception module of your clinic. It is for doing registration of your patients and also for booking appointments for consultation. <span *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">To avail its services, you need to fill-in the login credentials of SmartAssistant module and also select module parameters given here as per your choice.</span></p>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">The User ID can be same as your SmartClinic or different.</p>\n                                    \n                                </div>\n                            </div>\n                            <div class=\"col-md-7 col-sm-12 col-xs-12\">\n                                <div class=\"signup-card newform-margin\">\n                                    <div class=\"wrapper-div-cstm\" *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">\n\t\t\t\t\t\t\t\t\t<!-- {{SmartAssistantDetail | json }} -->\n                                    \n                                        <h4> 1. Define SmartAssistant Login Credentials </h4>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <div class=\"fieldDesign\">\n                                                <input id=\"field8\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"SmartAssistantDetail.name\" [formControl]=\"stepFourForm.controls['name']\" />\n                                                <label for=\"field8\" class=\"labelFloat\">Assistant Name</label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"!stepFourForm.controls['name'].valid  && (stepFourForm.controls['name'].touched)\">Invalid name !!!</p>\n                                            </div>\n                                        </div>\n                                        <div [ngClass]=\"classEnabled || SmartAssistantDetail.phone ? 'form-group col-md-12 col-sm-12 col-xs-12 ltaligned': 'form-group col-md-12 col-sm-12 col-xs-12'\" >\n                                            <div class=\"input-group fieldDesign\">\n                                                <span class=\"input-group-addon\">+ 91</span>\n                                                <input id=\"field9\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"SmartAssistantDetail.phone\" [formControl]=\"stepFourForm.controls['phone']\" (blur)=\"GetSmartAssistantByPhone(SmartAssistantDetail.phone)\" (focus)=\"addClass()\"/>\n                                                <label for=\"field9\" class=\"labelFloat nwmancls2\"> Assistant Mobile Number<sup>*</sup> </label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"!stepFourForm.controls['phone'].valid  && (stepFourForm.controls['phone'].touched)\">Invalid mobile number !!!</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <div class=\"fieldDesign\">\n                                                <input id=\"field10\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"SmartAssistantDetail.unique_id\" [formControl]=\"stepFourForm.controls['unique_id']\"/>\n                                                \n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"field10\" class=\"labelFloat\"> Assistant User ID (Email format)<sup>*</sup></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted\">(User ID can be same as your SmartClinic or different)</p>\n                                                <p style=\"color: #FF0000\" *ngIf=\"!stepFourForm.controls['unique_id'].valid  && (stepFourForm.controls['unique_id'].touched)\">Invalid email id !!!</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">\n                                            <div class=\"fieldDesign\">\n                                                <label class=\"checkbox-inline\">\n                                                    <input type=\"checkbox\" [(ngModel)]=\"updateSmartAsstPassword\" [checked]=\"updateSmartAsstPassword\" [ngModelOptions]=\"{standalone: true}\" (change)=\"ShowHideSmartAsstPassword()\" name=\"\" /> Update Password\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!updateSmartAsstPassword\">\n                                            <div class=\"fieldDesign\">\n                                                <input id=\"field11\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"SmartAssistantDetail.password\" [formControl]=\"stepFourForm.controls['password']\" (input)=\"checkPassword1(SmartAssistantDetail.password)\"/>\n                                                <label for=\"field11\" class=\"labelFloat\">Create password<sup>*</sup></label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"!stepFourForm.controls['password'].valid  && (stepFourForm.controls['password'].touched)\">Password can be of 8 to 15 characters !!!</p>\n                                                <div class=\"instruction-ul\">\n                                                    <ul>\n                                                        <li [ngClass]=\"(lowerCase1==true) ? 'passed': ''\">One lowercase character</li>\n                                                        <li [ngClass]=\"(specialCase1==true) ? 'passed': ''\">One special character</li>\n                                                        <li [ngClass]=\"(upperCase1==true) ? 'passed': ''\">One uppercase character</li>\n                                                        <li [ngClass]=\"(lengthCase1==true) ? 'passed': ''\">8 characters minimum</li>\n                                                        <li [ngClass]=\"(numberCase1==true) ? 'passed': ''\">One number</li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!updateSmartAsstPassword\">\n                                            <div class=\"fieldDesign\">\n                                                <input id=\"field12\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" (keyup)=\"onKey1($event)\" [(ngModel)]=\"SmartAssistantDetail.confirm_password\" [formControl]=\"stepFourForm.controls['confirm_password']\"/>\n                                                <label for=\"field12\" class=\"labelFloat\">Confirm password<sup>*</sup></label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"p_false1\">Password and confirm password are not same !!!</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"wrapper-div-cstm\">\n                                        <h4><span *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">2.</span><span *ngIf=\"doctorData.type_of_doctor=='normal_doctor'\">1. </span> Define SmartAssistant module Parameters</h4>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <label> Select average consultation time per patient</label>\n                                            <select class=\"form-control txtfield\" [(ngModel)]='SmartAssistantDetail.avgConsTime' [formControl]=\"stepFourForm.controls['avgConsTime']\" (change)=\"getAutoConsultationTime()\" >\n                                                <option selected disabled=\"\" selected=\"\"> Average consultation time per patient </option>\n                                                <option value=\"5 mins\"> 5 mins </option>\n                                                <option value=\"6 mins\"> 6 mins </option>\n                                                <option value=\"8 mins\"> 8 mins </option>\n                                                <option value=\"10 mins\"> 10 mins </option>\n                                                <option value=\"12 mins\"> 12 mins </option>\n                                                <option value=\"15 mins\"> 15 mins </option>\n                                                <option value=\"20 mins\"> 20 mins </option>\n                                                <option value=\"Auto\"> Auto </option>\n                                            </select>\n                                            <p *ngIf=\"SmartAssistantDetail.avgConsTime=='Auto'\" style=\"color:green; font-size:12px; margin-top:4px\">(Your Average Consultation Time Based On Last 30 days Prescriptions is : <b>{{timeFetched}}</b> mins)</p>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <label> Select waiting time for a given Appointment</label>\n                                            <select class=\"form-control txtfield\" [(ngModel)]='SmartAssistantDetail.waitingTime' [formControl]=\"stepFourForm.controls['waitingTime']\" >\n                                                <option selected disabled=\"\" selected=\"\"> Waiting time for a given Appointment </option>\n                                                <option value=\"10 mins\"> 10 mins </option>\n                                                <option value=\"15 mins\"> 15 mins </option>\n                                                <option value=\"30 mins\"> 30 mins </option>\n                                                <option value=\"45 mins\"> 45 mins </option>\n                                                <option value=\"60 mins\"> 60 mins </option>\n                                                <option value=\"90 mins\"> 90 mins </option>\n                                                <option value=\"120 mins\">120 mins </option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"wrapper-div-cstm\">\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                            <h4><span *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">3.</span><span *ngIf=\"doctorData.type_of_doctor=='normal_doctor'\">2.</span> Define patient registration form fields</h4>\n                                            <div class=\"pat-reg-form\">\n                                                <label class=\"checkbox-inline\" *ngFor=\"let pt of smartAssistantRegFields\">\n                                                    <input type=\"checkbox\" [disabled]=\"pt.disable\" [checked]=\"pt.status\" (change)=\"changeSmartAssistantRegFields(pt)\" name=\"\" /> {{pt.name}}<span *ngIf=\"pt.star\">*</span>\n                                                </label>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card smartasstFooter\">\n                            <!-- <a (click)=\"saveStepFourDetails(0)\" class=\"btn\" type=\"button\">\n                                Skip\n                                <div class=\"outlinebtn_text\"> <small> You can add later </small> </div>\n                            </a> -->                            \n                            <button *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\" class=\"btn btn-custom\" type=\"submit\" [disabled]=\"(!stepFourForm.valid) || (p_false1)\" (click)=\"saveStepFourDetails(1)\"> Save </button>\n                            <button *ngIf=\"doctorData.type_of_doctor=='normal_doctor'\" class=\"btn btn-custom\" type=\"submit\"  (click)=\"saveStepFourDetails(1)\"> Save </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"\" *ngIf=\"activatedtab==5\">\n        <div class=\"signup-content-wrapper\">\n            <div class=\"signup-content signup-clinicServc\">\n                <div class=\"row\">\n                    <!--div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card\">\n                            <h3 class=\"signup-contentHead\"> {{activatedtabHeading}}</h3>\n                        </div>\n\t\t\t\t\t\t\t{{doctorData.clinic_services | json}}\n                    </div-->\n\t\t\t\t\n\t\t\t\t    \n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card\">\n\t\t\t\t\t\n                            <h4 *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\"> ​Check the Modules you want to add</h4>\n                            <h4 *ngIf=\"doctorData.type_of_doctor=='normal_doctor'\">​Check the Modules you want to add </h4>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t <!--div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"plan\">\n\t\t\t\t\t\t\t  <mat-radio-button value=\"Trial\" >Trial</mat-radio-button>\n\t\t\t\t\t\t\t  <mat-radio-button value=\"oneMonth\" >Monthly Plan</mat-radio-button>\n\t\t\t\t\t\t\t  <mat-radio-button value=\"sixMonths\">Quarterly Plan</mat-radio-button>\n\t\t\t\t\t\t\t  <mat-radio-button value=\"oneYear\">Yearly Plan</mat-radio-button>\n\t\t\t\t\t\t\t</mat-radio-group> \n\t\t\t\t\t\t\t </div--> \n\t\t\t\t\t\t\t  <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                <div class=\"checkbox m-0\">\n                                    <label>\n                                        <input type=\"checkbox\" name=\"\" checked disabled /> SmartClinic </label>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">\n                                <div class=\"checkbox m-0\">\n                                    <label>\n                                        <input type=\"checkbox\"   name=\"\" [(ngModel)]=\"Clinic_Pharmacy\" [ngModelOptions]=\"{standalone: true}\" (click)=\"showModal($event, 'pharmacy')\" /> SmartPharmacy </label>\n                                </div>\n                            </div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"doctorData.type_of_doctor=='normal_doctor' && admin?.clinic_services?.Clinic_Pharmacy==true\">\n                                <div class=\"checkbox m-0\">\n                                    <label>\n                                        <input type=\"checkbox\"   name=\"\" [(ngModel)]=\"Clinic_Pharmacy\" [ngModelOptions]=\"{standalone: true}\" (click)=\"showModal($event, 'pharmacy')\" /> SmartPharmacy </label>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">\n                                <div class=\"checkbox m-0\">\n                                    <label>\n                                        <input type=\"checkbox\"   class=\"clincdiag\" name=\"\" [(ngModel)]=\"Clinic_Diagnostics\" [ngModelOptions]=\"{standalone: true}\" (click)=\"showModal($event, 'diagnostics')\" /> SmartDiagnostics </label>\n                                </div>\n                                \n                            </div>\n\t\t\t\t\t\t\t  <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"doctorData.type_of_doctor=='normal_doctor' && admin?.clinic_services?.Clinic_Diagnostics==true\">\n                                <div class=\"checkbox m-0\">\n                                    <label>\n                                        <input type=\"checkbox\"   class=\"clincdiag\" name=\"\" [(ngModel)]=\"Clinic_Diagnostics\" [ngModelOptions]=\"{standalone: true}\" (click)=\"showModal($event, 'diagnostics')\" /> SmartDiagnostics </label>\n                                </div>\n                                \n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">\n                                <div class=\"checkbox m-0\">\n                                    <label>\n                                        <input   type=\"checkbox\" name=\"\" class=\"ipd\" [(ngModel)]=\"Clinic_IPD\" [ngModelOptions]=\"{standalone: true}\" (click)=\"showModal($event, 'ipd')\"/> SmartIPD </label>\n                                </div>\n                            </div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"doctorData.type_of_doctor=='normal_doctor' && admin?.clinic_services?.Clinic_IPD==true\">\n                                <div class=\"checkbox m-0\">\n                                    <label>\n                                        <input   type=\"checkbox\" name=\"\" class=\"ipd\" [(ngModel)]=\"Clinic_IPD\" [ngModelOptions]=\"{standalone: true}\" (click)=\"showModal($event, 'ipd')\"/> SmartIPD </label>\n                                </div>\n                            </div>\n                            <!--div class=\"row\" *ngIf=\"Clinic_IPD && doctorData.type_of_doctor=='admin_doctor'\">\n                                <div class=\"signup-clinicBeds hideme\">\n                                    <form [formGroup]=\"editBeds\" >\n                                        <div class=\"col-lg-12 m-b-10\">\n                                            <small class=\"pull-left\"> (Write numbers of bed available) </small>\n                                        </div>\n                                        <div class=\"col-md-2 col-sm-3 col-xs-4\">\n                                            <label> General Beds </label>\n                                            <input type=\"number\" name=\"\" min=\"0\" [(ngModel)]=\"general_beds\" class=\"form-control txtfield\" pattern=\"[0-9.]+\" maxLength=\"3\"  [formControl]=\"editBeds.controls['generalBeds']\"/>\n                                            <p style=\"color: #FF0000\" *ngIf=\"!editBeds.controls['generalBeds'].valid  && ( editBeds.controls['generalBeds'].touched)\">Invalid Bed !!!</p>\n                                        </div>\n                                        <div class=\"col-md-2 col-sm-3 col-xs-4\">\n                                            <label> Semi-Private Beds </label>\n                                            <input type=\"number\" name=\"\" min=\"0\" [(ngModel)]=\"semi_private_beds\" class=\"form-control txtfield\" pattern=\"[0-9.]+\" maxLength=\"3\"  [formControl]=\"editBeds.controls['semiPrivateBeds']\"/>\n                                            <p style=\"color: #FF0000\" *ngIf=\"!editBeds.controls['semiPrivateBeds'].valid  && ( editBeds.controls['semiPrivateBeds'].touched)\">Invalid Bed !!!</p>\n                                        </div>\n                                        <div class=\"col-md-2 col-sm-3 col-xs-4\">\n                                            <label> Private Beds </label>\n                                            <input type=\"number\" name=\"\" min=\"0\" [(ngModel)]=\"private_beds\" class=\"form-control txtfield\" pattern=\"[0-9.]+\" maxLength=\"3\"  [formControl]=\"editBeds.controls['privateBeds']\"/>\n                                            <p style=\"color: #FF0000\" *ngIf=\"!editBeds.controls['privateBeds'].valid  && ( editBeds.controls['privateBeds'].touched)\">Invalid Bed !!!</p>\n                                        </div>\n                                        <div class=\"col-md-2 col-sm-3 col-xs-4\">\n                                            <label> Total Beds </label>\n                                            <input type=\"number\" disabled=\"\" name=\"\" min=\"0\" value=\"{{general_beds+semi_private_beds+private_beds}}\" class=\"form-control txtfield\" />\n                                        </div>\n                                   </form>\n                                </div>\n                            </div-->\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card smartasstFooter\">\n                            <button class=\"btn btn-custom\" type=\"submit\" *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\" [disabled]=\"!Clinic_Diagnostics && !Clinic_Pharmacy && !Clinic_IPD\" (click)=\"saveStepFiveDetails(1)\"> Update {{currentPlan}} Plan </button>\n                            <button class=\"btn btn-custom\" *ngIf=\"doctorData.type_of_doctor!='admin_doctor'\" type=\"submit\" [disabled]=\"!Clinic_Diagnostics && !Clinic_Pharmacy && !Clinic_IPD\" (click)=\"saveStepFiveDetails(1)\"> Update {{currentPlan}} Plan </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"\" *ngIf=\"activatedtab==6\">\n        <div class=\"signup-content-wrapper\">\n            <div class=\"signup-content signup-clinicServc\">\n                <div class=\"row\">\n                    <!--div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card\">\n                            <h3 class=\"signup-contentHead\"> {{activatedtabHeading}}</h3>\n                        </div>\n                    </div-->\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card\">\n                            <p class=\"help-note small\"> Please Upload documents in *.jpg, *.pdf format only. </p>\n                            <div class=\"wrapper-div-cstm\">\n                                <h4><span class=\"color-blue\">1.</span> Photo ID<sup>*</sup> <small>(Select any one)</small> </h4>\n                                <div class=\"row\">\n                                    <ul class=\"upload-ul\">\n                                        <li *ngFor=\"let photoId of photoIDDocumentsList;let i = index\">\n                                            <label> {{photoId.name}} </label>\n                                            <div class=\"input-group\">\n                                                <span class=\"input-group-addon\">\n                                                    <input type=\"radio\" name=\"photo\" [checked]=\"photoId.status\" (click)=\"enablePhotoId(i)\"/>\n                                                </span>\n                                                <input type=\"text\" class=\"form-control txtfield\" [(ngModel)]=\"photoId.document_name\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!photoId.status\" placeholder=\"{{photoId.placeholder}}\" />\n                                                <span class=\"input-group-btn\" (change)=\"onuploadPhotoId($event,i)\">\n                                                    <input type=\"file\" accept=\".jpg,.jpeg,.pdf\" class=\"inpt-file\" [disabled]=\"!photoId.status\"/>\n                                                    <button *ngIf=\"!photoId.image\" class=\"btn btn-default\" type=\"button\" [disabled]=\"!photoId.status\"> Browse </button>\n                                                    <button *ngIf=\"photoId.image\" class=\"btn btn-success\" type=\"button\"> Uploaded <i class=\"fa fa-check-circle\"></i> </button>\n                                                </span>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <div class=\"wrapper-div-cstm\">\n                                <h4> <span class=\"color-blue\">2.</span> Clinic Documents <sup>*</sup> <small>(Select any one)</small> </h4>\n                                <div class=\"row\">\n                                    <ul class=\"upload-ul clinicDoc\">\n                                        <li *ngFor=\"let clinicDocumentId of clinicDocumentsList;let i = index\">\n                                            <label> {{clinicDocumentId.name}} </label>\n                                            <div class=\"input-group\">\n                                                <span class=\"input-group-addon\">\n                                                    <input type=\"radio\" name=\"clinic\" [checked]=\"clinicDocumentId.status\" (click)=\"enableClinicDocumentId(i)\" />\n                                                </span>\n                                                <span class=\"input-group-btn\" (change)=\"onuploadClinicDocument($event,i)\">\n                                                    <input type=\"file\" accept=\".jpg,.jpeg,.pdf\" name=\"\" class=\"inpt-file\" [disabled]=\"!clinicDocumentId.status\" />\n                                                    <button *ngIf=\"!clinicDocumentId.image\" class=\"btn btn-default\" type=\"button\" [disabled]=\"!clinicDocumentId.status\"> Browse </button>\n                                                    <button *ngIf=\"clinicDocumentId.image\" class=\"btn btn-success\" type=\"button\"> Uploaded <i class=\"fa fa-check-circle\"></i> </button>\n                                                </span>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <div class=\"wrapper-div-cstm\">\n                                <div class=\"medicalReg\">\n                                    <h4 class=\"medicalReg-text\"> <span class=\"color-blue\">3.</span> Medical registration certificate<sup>*</sup> </h4>\n                                    <span *ngIf=\"!medical_certificate\" class=\"input-btn btn btn-default\" (change)=\"onuploadMedicalCert($event,i)\">\n                                        Browse <input type=\"file\" accept=\".jpg,.jpeg,.pdf\" class=\"inpt-file\">\n                                    </span>\n                                    <span *ngIf=\"medical_certificate\" class=\"input-btn btn btn-success\" (change)=\"onuploadMedicalCert($event,i)\">\n                                        Uploaded <i class=\"fa fa-check-circle\"></i> <input type=\"file\" accept=\".jpg,.jpeg,.pdf\" class=\"inpt-file\">\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"signup-card text-center\">\n                            <button class=\"btn btn-custom\" type=\"submit\" (click)=\"saveStepSixDetails()\"> Save </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"\" *ngIf=\"activatedtab==7\">\n        <div class=\"signup-content-wrapper\">\n            <div class=\"signup-content\">\n                <div class=\"row\">\n                    <!--div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card\">\n                            <h3 class=\"signup-contentHead\"> {{activatedtabHeading}}</h3>\n                        </div>\n                    </div-->\n                    <div class=\"smartasst-box\">\n                        <form [formGroup]=\"stepFourForm\" autocomplete=\"off\">\n                            <div class=\"col-md-5 col-sm-12 col-xs-12\">\n                                <div class=\"signup-card signup-smartasst\">\n                                    <h3 class=\"text-center m-b-30\">Why Second language?</h3>\n                                    <p>Please select your second preferred lanaguage which best suit to you. This will also help pateints to read their prescription in the second language.</p>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7 col-sm-12 col-xs-12\">\n                                <div class=\"signup-card newform-margin\">\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <div class=\"fieldDesign\">\n                                            <select class=\"form-control txtfield\" [(ngModel)]='languageOption' [ngModelOptions]=\"{standalone: true}\">\n                                                <option value=\"\" selected=\"\"> None </option>\n                                                <option value=\"hi\">Hindi</option>\n                                                <option value=\"pa\">Punjabi</option>\n                                                <option value=\"bn\">Bengali</option>\n                                                <option value=\"gu\">Gujarati</option>\n                                                <option value=\"kn\">Kannada</option>\n                                                <option value=\"ml\">Malayalam</option>\n                                                <option value=\"mr\">Marathi</option>\n                                                <option value=\"ta\">Tamil</option>\n                                                <option value=\"te\">Telugu</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card smartasstFooter\">\n                            <button class=\"btn btn-custom\" type=\"submit\" (click)=\"saveStepSevenDetails()\"> Save </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"clinicDoctorDiv==true\">\n        <div class=\"signup-content-wrapper\">\n            <div class=\"signup-content signup-clinicServc\">\n                <div class=\"table-doc\">\n                  <div class=\"row\">\n                     <div class=\"col-lg-11\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th>Image</th>\n                                    <th>Name</th>\n                                    <th>Doctor Type</th>\n                                    <th>Phone</th>\n                                    <th>doctm Id</th>\n                                    <th>Detail</th>\n                                    <!-- <th>Status</th> -->\n                                    <th>Status</th>\n                                    <th>Action</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let doctor of doctorsOfSameClinic\">\n                                    <td class=\"doc-img\">\n                                        <img src=\"{{doctorPic}}{{doctor.profile_image}}\" class=\"img-responsive\" *ngIf=\"doctor.profile_image\"/>\n                                        <img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!doctor.profile_image\"/>\n                                    </td>\n                                    <td class=\"name-doc\">Dr. {{doctor.first_name}}</td>\n                                    <td *ngIf=\"doctor.type_of_doctor=='admin_doctor'\"><i style=\"color:#1DA1F2;\" class=\"fa fa-hospital-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t<i style=\"color:#1DA1F2;\" class=\"fa fa-user-md\" aria-hidden=\"true\"></i> Admin Doctor</td>\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"doctor.type_of_doctor=='normal_doctor'\"><i style=\"color:#1DA1F2;\" class=\"fa fa-user-md\" aria-hidden=\"true\"></i> Normal Doctor</td>\n                                    <td><i style=\"color:#1DA1F2;\"class=\"fa fa-mobile\" aria-hidden=\"true\"></i> +91 {{doctor.phone}}</td>\n                                    <td>{{doctor.doctm_id}}</td>\n                                    <td class=\"text-right\"><button class=\"btn btn-primary\" (click)=\"detailOfDoctor(doctor)\" >View More</button></td>\n                                    <td *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">\n                                        <button *ngIf=\"!doctor.admin_verified\" (click)=\"askToRemove( doctor, 'approve_doc')\" class=\"btn btn-danger\">Pending </button>\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"doctor.admin_verified\" src=\"assets/imgs/verified.svg\" height=28 width=28 />\n                                        <!--button *ngIf=\"doctor.documents_verified\"  class=\"btn btn-success\">Approved</-->\n                                    </td>\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"doctorData.type_of_doctor=='normal_doctor'\">\n                                        <label *ngIf=\"!doctor.admin_verified\">Pending</label>\n\t\t\t\t\t\t\t\t\t\t<label *ngIf=\"doctor.admin_verified\" >Approved</label>\n                                        <!--button *ngIf=\"doctor.documents_verified\"  class=\"btn btn-success\">Approved</button-->\n                                    </td>\n                                    <td *ngIf=\"doctorData.type_of_doctor=='admin_doctor' \">\n                                        <button *ngIf=\"doctor.type_of_doctor=='normal_doctor'\" class=\"btn btn-primary\" (click) = \"askToRemove( doctor.itemId, doctor.profile_image)\" >Remove/Reject</button>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"doctor.type_of_doctor=='admin_doctor'\">--</span>\n                                    </td>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"doctorData.type_of_doctor=='normal_doctor'\">\n\t\t\t\t\t\t\t\t\t\t\tN/A\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                     </div> \n                  </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"smartPhrarmacyDiv==true\">\n        <div class=\"signup-content-wrapper\">\n            <div class=\"signup-content\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card\">\n                            <h3 class=\"signup-contentHead\"> Update Smart Pharmacy </h3>\n                        </div>\n                    </div>\n                    <div class=\"smartasst-box\">\n                        <form [formGroup]=\"smartPharmacyForm\" autocomplete=\"off\">\n                            <div class=\"col-md-5 col-sm-12 col-xs-12\">\n                                <div class=\"signup-card signup-smartasst\">\n                                    <h3 class=\"text-center m-b-30\">SmartPharmacy</h3>\n                                    <p *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">SmartPharmacy module is for your clinic Pharmacy.  To avail its services, you need to fill-in the login credentials of SmartPharmacy module here.</p>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">The User ID can be same as your SmartClinic or different</p>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"doctorData.type_of_doctor=='normal_doctor'\">​SmartPharmacy module is for your clinic Pharmacy.  ​​Your prescribed medicines get instantly communicated to the clinic pharmay</p>\n                                   \n                                </div>\n                            </div>\n                            <div class=\"col-md-7 col-sm-12 col-xs-12\">\n                                <div class=\"signup-card newform-margin\">\n                                    <div class=\"wrapper-div-cstm\">\n                                        <h4> Define SmartPharmacy Login Credentials </h4>\n                                        <!--div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t<label style=\"font-weight:normal;\" *ngIf=\"doctorData.type_of_doctor=='normal_doctor'\">Pharmacist Name</label>\n                                            <div class=\"fieldDesign\">\n                                                <input id=\"field8\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"SmartPharmacyDetail.name\" [readonly]=\"doctorData.type_of_doctor=='normal_doctor'\" [formControl]=\"smartPharmacyForm.controls['name']\" />\n                                                <label for=\"field8\" class=\"labelFloat\" *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">Pharmacist Name</label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"!smartPharmacyForm.controls['name'].valid  && (smartPharmacyForm.controls['name'].touched)\">Invalid name !!!</p>\n                                            </div>\n                                        </div-->\n                                        <!--div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t<label style=\"font-weight:normal;\" *ngIf=\"doctorData.type_of_doctor=='normal_doctor'\">Pharmacist Mobile Number<sup>*</sup></label>\n                                            <div class=\"input-group fieldDesign\">\n                                                <span class=\"input-group-addon\">+ 91</span>\n                                                <input id=\"field9\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"SmartPharmacyDetail.phone\" [formControl]=\"smartPharmacyForm.controls['phone']\" (blur)=\"GetSmartPharmacyByPhone(SmartPharmacyDetail.phone)\" [readonly]=\"doctorData.type_of_doctor=='normal_doctor'\"/>\n                                                <label for=\"field9\" class=\"labelFloat\" *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\"> Pharmacist Mobile Number<sup>*</sup> </label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"!smartPharmacyForm.controls['phone'].valid  && (smartPharmacyForm.controls['phone'].touched)\">Invalid mobile number !!!</p>\n                                            </div>\n                                        </div-->\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t<label style=\"font-weight:normal;\" *ngIf=\"doctorData.type_of_doctor=='normal_doctor'\">Pharmacy User ID (Email format)<sup>*</sup></label>\n                                            <div class=\"fieldDesign\">\n                                                <input id=\"field10\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"SmartPharmacyDetail.unique_id\" [formControl]=\"smartPharmacyForm.controls['unique_id']\" autocomplete=\"off\" [readonly]=\"doctorData.type_of_doctor=='normal_doctor'\"/>\n                                                <label for=\"field10\" class=\"labelFloat\" *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\"> Pharmacy User ID (Email format)<sup>*</sup></label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"!smartPharmacyForm.controls['unique_id'].valid  && (smartPharmacyForm.controls['unique_id'].touched)\">Invalid email id !!!</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">\n                                            <div class=\"fieldDesign\">\n                                                <label class=\"checkbox-inline\">\n                                                    <input type=\"checkbox\" [(ngModel)]=\"updateSmartPharmacyPassword\" [checked]=\"updateSmartPharmacyPassword\" [ngModelOptions]=\"{standalone: true}\" (change)=\"ShowHideSmartPharmacyPassword()\" name=\"\" /> Update Password\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!updateSmartPharmacyPassword\">\n                                            <div class=\"fieldDesign\">\n                                                <input id=\"field11\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"SmartPharmacyDetail.password\" [formControl]=\"smartPharmacyForm.controls['password']\" (input)=\"checkPassword1(SmartPharmacyDetail.password)\"/>\n                                                <label for=\"field11\" class=\"labelFloat\">Create password<sup>*</sup></label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"!smartPharmacyForm.controls['password'].valid  && (smartPharmacyForm.controls['password'].touched)\">Password can be of 8 to 15 characters !!!</p>\n                                                <div class=\"instruction-ul\">\n                                                    <ul>\n                                                        <li [ngClass]=\"(lowerCase1==true) ? 'passed': ''\">One lowercase character</li>\n                                                        <li [ngClass]=\"(specialCase1==true) ? 'passed': ''\">One special character</li>\n                                                        <li [ngClass]=\"(upperCase1==true) ? 'passed': ''\">One uppercase character</li>\n                                                        <li [ngClass]=\"(lengthCase1==true) ? 'passed': ''\">8 characters minimum</li>\n                                                        <li [ngClass]=\"(numberCase1==true) ? 'passed': ''\">One number</li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!updateSmartPharmacyPassword\">\n                                            <div class=\"fieldDesign\">\n                                                <input id=\"field12\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" (keyup)=\"onKey3($event)\" [(ngModel)]=\"SmartPharmacyDetail.confirm_password\" [formControl]=\"smartPharmacyForm.controls['confirm_password']\"/>\n                                                <label for=\"field12\" class=\"labelFloat\">Confirm password<sup>*</sup></label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"p_false3\">Password and confirm password are not same !!!</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card smartasstFooter\">\n                            <!-- <a (click)=\"saveStepFourDetails(0)\" class=\"btn\" type=\"button\">\n                                Skip\n                                <div class=\"outlinebtn_text\"> <small> You can add later </small> </div>\n                            </a> -->                            \n                            <button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"(!smartPharmacyForm.valid) || (p_false3)\" (click)=\"updateSmartPharmacy()\"> Save </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"smartDiagnosticsDiv==true\">\n        <div class=\"signup-content-wrapper\">\n            <div class=\"signup-content signup-clinicServc\">\n                <!-- Smart Diagnostics start from here -->\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card\">\n                            <h3 class=\"signup-contentHead\"> Update Smart Diagnostics </h3>\n                        </div>\n                    </div>\n                    <div class=\"smartasst-box\">\n                        <form [formGroup]=\"smartDiagnosticsForm\" autocomplete=\"off\">\n                            <div class=\"col-md-5 col-sm-12 col-xs-12\">\n                                <div class=\"signup-card signup-smartasst\">\n                                    <h3 class=\"text-center m-b-30\">SmartDiagnostics</h3>\n                                    <p *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">SmartDiagnostics module is for your clinic diagnostics facility. To avail its services you need to fill-in the login credentials here . Also the respective diagnostic Test or Test category that is available to your patients in the clinic.</p>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">The User ID can be same as your SmartClinic or different.</p>\n\t\t\t\t\t\t\t\t\t <p *ngIf=\"doctorData.type_of_doctor=='normal_doctor'\">​SmartDiagnostics module is for your clinic diagnostics facility. To avail its services you need to check the diagnostic tests that are available to your patients in the clinic.</p>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7 col-sm-12 col-xs-12\">\n                                <div class=\"signup-card newform-margin\">\n                                    <div class=\"wrapper-div-cstm\" *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">\n                                        <h4>1. Define SmartDiagnostics Login Credentials </h4>\n                                        <!--div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <div class=\"fieldDesign\">\n                                                <input id=\"field8\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"SmartDiagnosticsDetail.name\" [formControl]=\"smartDiagnosticsForm.controls['name']\" />\n                                                <label for=\"field8\" class=\"labelFloat\">In-charge Name</label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"!smartDiagnosticsForm.controls['name'].valid  && (smartDiagnosticsForm.controls['name'].touched)\">Invalid name !!!</p>\n                                            </div>\n                                        </div-->\n                                        <!--div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <div class=\"input-group fieldDesign\">\n                                                <span class=\"input-group-addon\">+ 91</span>\n                                                <input id=\"field9\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"SmartDiagnosticsDetail.phone\" [formControl]=\"smartDiagnosticsForm.controls['phone']\" (blur)=\"GetSmartDiagnosticsByPhone(SmartDiagnosticsDetail.phone)\"/>\n                                                <label for=\"field9\" class=\"labelFloat\"> In-charge Mobile Number<sup>*</sup> </label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"!smartDiagnosticsForm.controls['phone'].valid  && (smartDiagnosticsForm.controls['phone'].touched)\">Invalid mobile number !!!</p>\n                                            </div>\n                                        </div-->\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <div class=\"fieldDesign\">\n                                                <input id=\"field10\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"SmartDiagnosticsDetail.unique_id\" [formControl]=\"smartDiagnosticsForm.controls['unique_id']\"/>\n                                                <label for=\"field10\" class=\"labelFloat\"> Diagnostics User ID (Email format)<sup>*</sup></label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"!smartDiagnosticsForm.controls['unique_id'].valid  && (smartDiagnosticsForm.controls['unique_id'].touched)\">Invalid email id !!!</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">\n                                            <div class=\"fieldDesign\">\n                                                <label class=\"checkbox-inline\">\n                                                    <input type=\"checkbox\" [(ngModel)]=\"updateSmartDiagnosticsPassword\" [checked]=\"updateSmartDiagnosticsPassword\" [ngModelOptions]=\"{standalone: true}\" (change)=\"ShowHideSmartDiagnosticsPassword()\" name=\"\" /> Update Password\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!updateSmartDiagnosticsPassword\">\n                                            <div class=\"fieldDesign\">\n                                                <input id=\"field11\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"SmartDiagnosticsDetail.password\" [formControl]=\"smartDiagnosticsForm.controls['password']\" (input)=\"checkPassword1(SmartDiagnosticsDetail.password)\"/>\n                                                <label for=\"field11\" class=\"labelFloat\">Create password<sup>*</sup></label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"!smartDiagnosticsForm.controls['password'].valid  && (smartDiagnosticsForm.controls['password'].touched)\">Password can be of 8 to 15 characters !!!</p>\n                                                <div class=\"instruction-ul\">\n                                                    <ul>\n                                                        <li [ngClass]=\"(lowerCase1==true) ? 'passed': ''\">One lowercase character</li>\n                                                        <li [ngClass]=\"(specialCase1==true) ? 'passed': ''\">One special character</li>\n                                                        <li [ngClass]=\"(upperCase1==true) ? 'passed': ''\">One uppercase character</li>\n                                                        <li [ngClass]=\"(lengthCase1==true) ? 'passed': ''\">8 characters minimum</li>\n                                                        <li [ngClass]=\"(numberCase1==true) ? 'passed': ''\">One number</li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!updateSmartDiagnosticsPassword\">\n                                            <div class=\"fieldDesign\">\n                                                <input id=\"field12\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" (keyup)=\"onKey4($event)\" [(ngModel)]=\"SmartDiagnosticsDetail.confirm_password\" [formControl]=\"smartDiagnosticsForm.controls['confirm_password']\"/>\n                                                <label for=\"field12\" class=\"labelFloat\">Confirm password<sup>*</sup></label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"p_false4\">Password and confirm password are not same !!!</p>\n                                            </div>\n                                        </div>\n                                    </div>\n\t\t\t\t\t\t\t\t\t<div class=\"wrapper-div-cstm\">\n                                        <h4><span *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">2.</span><span *ngIf=\"doctorData.type_of_doctor=='normal_doctor'\">1. </span> Define SmartDiagnostics Services </h4>\n\t\t\t\t\t\t\t\t\t <ul class=\"sub_checkboxul hideme\" *ngIf=\"Clinic_Diagnostics\">\n                                    <li *ngFor=\"let option of clinicDiagnosticsList; let i = index;\">\n                                        <label class=\"checkbox-inline\">\n                                            <input type=\"checkbox\" (change)=\"push(option.name,i)\" name=\"\" [checked]=\"option.status\" /> {{option.name}} </label>\n                                    </li>\n                                    <li>\n                                        <label class=\"checkbox-inline\">\n                                            <input type=\"checkbox\" value=\"other\" name=\"\" (change)=\"push(1,-1)\" [(ngModel)]=\"otherSelected\" [ngModelOptions]=\"{standalone: true}\" /> Others\n                                            <tag-input *ngIf=\"otherSelected\" class=\"otherfield hideme\" placeholder=\"Other (comma separated)\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Other (comma separated)\" theme='bootstrap' [(ngModel)]=\"OtherClinicService\" [ngModelOptions]=\"{standalone: true}\"></tag-input>\n                                        </label>\n                                    </li>\n                                </ul>\n\t\t\t\t\t\t\t\t\t</div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card smartasstFooter\">\n                            <!-- <a (click)=\"saveStepFourDetails(0)\" class=\"btn\" type=\"button\">\n                                Skip\n                                <div class=\"outlinebtn_text\"> <small> You can add later </small> </div>\n                            </a> -->                            \n                            <button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"(!smartDiagnosticsForm.valid) || (p_false4)\" (click)=\"updateSmartDiagnostics()\" *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\"> Save </button>\n                            <button class=\"btn btn-custom\" type=\"submit\"  (click)=\"updateSmartDiagnostics()\" *ngIf=\"doctorData.type_of_doctor=='normal_doctor'\"> Save </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"smartIpdDiv==true\">\n        <div class=\"signup-content-wrapper\">\n            <div class=\"signup-content\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card\">\n                            <h3 class=\"signup-contentHead\"> Update Smart IPD </h3>\n                        </div>\n                    </div>\n                    <div class=\"smartasst-box\">\n                        <form [formGroup]=\"smartIpdForm\" autocomplete=\"off\">\n                            <div class=\"col-md-5 col-sm-12 col-xs-12\">\n                                <div class=\"signup-card signup-smartasst\">\n                                    <h3 class=\"text-center m-b-30\">SmartIPD</h3>\n                                    <p *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">SmartIPD module is for in-bound patient facility of your clinic. To avail its services you need to fill-in the login credentials here along with the bed availability.</p>\n                                    <p *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">The User ID can be same as your SmartClinic or different</p>\n                                    <p *ngIf=\"doctorData.type_of_doctor=='normal_doctor'\">​SmartIPD module is for in-bound patient facility of your clinic. You can now admit and keep full track of your patients using the SmartIPD module.</p>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7 col-sm-12 col-xs-12\">\n                                <div class=\"signup-card newform-margin\">\n                                    <div class=\"wrapper-div-cstm\">\n                                        <h4>1. Define SmartIPD Login Credentials </h4>\n                                        <!--div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <div class=\"fieldDesign\">\n                                                <input id=\"field8\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"SmartIpdDetail.name\" [formControl]=\"smartIpdForm.controls['name']\" />\n                                                <label for=\"field8\" class=\"labelFloat\">In-charge Name</label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"!smartIpdForm.controls['name'].valid  && (smartIpdForm.controls['name'].touched)\">Invalid name !!!</p>\n                                            </div>\n                                        </div-->\n                                        <!--div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <div class=\"input-group fieldDesign\">\n                                                <span class=\"input-group-addon\">+ 91</span>\n                                                <input id=\"field9\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"SmartIpdDetail.phone\" [formControl]=\"smartIpdForm.controls['phone']\" (blur)=\"GetSmartIpdByPhone(SmartIpdDetail.phone)\"/>\n                                                <label for=\"field9\" class=\"labelFloat\"> In-charge Mobile Number<sup>*</sup> </label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"!smartIpdForm.controls['phone'].valid  && (smartIpdForm.controls['phone'].touched)\">Invalid mobile number !!!</p>\n                                            </div>\n                                        </div-->\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <div class=\"fieldDesign\">\n                                                <input id=\"field10\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"SmartIpdDetail.unique_id\" [formControl]=\"smartIpdForm.controls['unique_id']\"/>\n                                                <label for=\"field10\" class=\"labelFloat\"> IPD User ID (Email format)<sup>*</sup></label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"!smartIpdForm.controls['unique_id'].valid  && (smartIpdForm.controls['unique_id'].touched)\">Invalid email id !!!</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"doctorData.type_of_doctor=='admin_doctor'\">\n                                            <div class=\"fieldDesign\">\n                                                <label class=\"checkbox-inline\">\n                                                    <input type=\"checkbox\" [(ngModel)]=\"updateSmartIpdPassword\" [checked]=\"updateSmartIpdPassword\" [ngModelOptions]=\"{standalone: true}\" (change)=\"ShowHideSmartIpdPassword()\" name=\"\" /> Update Password\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!updateSmartIpdPassword\">\n                                            <div class=\"fieldDesign\">\n                                                <input id=\"field11\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"SmartIpdDetail.password\" [formControl]=\"smartIpdForm.controls['password']\" (input)=\"checkPassword1(SmartIpdDetail.password)\"/>\n                                                <label for=\"field11\" class=\"labelFloat\">Create password<sup>*</sup></label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"!smartIpdForm.controls['password'].valid  && (smartIpdForm.controls['password'].touched)\">Password can be of 8 to 15 characters !!!</p>\n                                                <div class=\"instruction-ul\">\n                                                    <ul>\n                                                        <li [ngClass]=\"(lowerCase1==true) ? 'passed': ''\">One lowercase character</li>\n                                                        <li [ngClass]=\"(specialCase1==true) ? 'passed': ''\">One special character</li>\n                                                        <li [ngClass]=\"(upperCase1==true) ? 'passed': ''\">One uppercase character</li>\n                                                        <li [ngClass]=\"(lengthCase1==true) ? 'passed': ''\">8 characters minimum</li>\n                                                        <li [ngClass]=\"(numberCase1==true) ? 'passed': ''\">One number</li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!updateSmartIpdPassword\">\n                                            <div class=\"fieldDesign\">\n                                                <input id=\"field12\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" (keyup)=\"onKey2($event)\" [(ngModel)]=\"SmartIpdDetail.confirm_password\" [formControl]=\"smartIpdForm.controls['confirm_password']\"/>\n                                                <label for=\"field12\" class=\"labelFloat\">Confirm password<sup>*</sup></label>\n                                                <p style=\"color: #FF0000\" *ngIf=\"p_false2\">Password and confirm password are not same !!!</p>\n                                            </div>\n                                        </div>\n                                    </div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"wrapper-div-cstm\" *ngIf=\"Clinic_IPD && doctorData.type_of_doctor=='admin_doctor'\">\n                                        <h4>2. Define Number of Available Beds</h4>\n                                         <div class=\"row\" >\n                                <div class=\"signup-clinicBeds hideme\">\n                                    <form [formGroup]=\"editBeds\" >\n                                        <div class=\"col-lg-12 m-b-10\">\n                                            <small class=\"pull-left\"> (Write numbers of bed available) </small>\n                                        </div>\n                                        <div class=\"col-md-6 col-sm-12 col-xs-12\">\n                                            <label> General Beds </label>\n                                            <input type=\"number\" name=\"\" min=\"0\" [(ngModel)]=\"general_beds\" class=\"form-control txtfield\" pattern=\"[0-9.]+\" maxLength=\"3\"  [formControl]=\"editBeds.controls['generalBeds']\"/>\n                                            <p style=\"color: #FF0000\" *ngIf=\"!editBeds.controls['generalBeds'].valid  && ( editBeds.controls['generalBeds'].touched)\">Invalid Bed !!!</p>\n                                        </div>\n                                        <div class=\"col-md-6 col-sm-12 col-xs-12\">\n                                            <label> Semi-Private Beds </label>\n                                            <input type=\"number\" name=\"\" min=\"0\" [(ngModel)]=\"semi_private_beds\" class=\"form-control txtfield\" pattern=\"[0-9.]+\" maxLength=\"3\"  [formControl]=\"editBeds.controls['semiPrivateBeds']\"/>\n                                            <p style=\"color: #FF0000\" *ngIf=\"!editBeds.controls['semiPrivateBeds'].valid  && ( editBeds.controls['semiPrivateBeds'].touched)\">Invalid Bed !!!</p>\n                                        </div>\n                                        <div class=\"col-md-6 col-sm-12 col-xs-12\">\n                                            <label> Private Beds </label>\n                                            <input type=\"number\" name=\"\" min=\"0\" [(ngModel)]=\"private_beds\" class=\"form-control txtfield\" pattern=\"[0-9.]+\" maxLength=\"3\"  [formControl]=\"editBeds.controls['privateBeds']\"/>\n                                            <p style=\"color: #FF0000\" *ngIf=\"!editBeds.controls['privateBeds'].valid  && ( editBeds.controls['privateBeds'].touched)\">Invalid Bed !!!</p>\n                                        </div>\n                                        <div class=\"col-md-6 col-sm-12 col-xs-12\">\n                                            <label> Total Beds </label>\n                                            <input type=\"number\" disabled=\"\" name=\"\" min=\"0\" value=\"{{general_beds+semi_private_beds+private_beds}}\" class=\"form-control txtfield\" />\n                                        </div>\n                                   </form>\n                                </div>\n                            </div>\n                                    </div>\n                                </div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card smartasstFooter\">\n                            <!-- <a (click)=\"saveStepFourDetails(0)\" class=\"btn\" type=\"button\">\n                                Skip\n                                <div class=\"outlinebtn_text\"> <small> You can add later </small> </div>\n                            </a> -->                            \n                            <button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"(!smartIpdForm.valid) || (p_false2)\" (click)=\"updateSmartIpd()\"> Save </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"padCustomizationDiv==true\">\n         <div class=\"signup-content-wrapper\">\n            <div class=\"signup-content signup-clinicServc\">\n                <div class=\"row\">\n                    <!--div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card\">\n                            <h3 class=\"signup-contentHead\"> {{activatedtabHeading}}</h3>\n                        </div>\n                    </div-->\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card\">\n                            <h4>Customize your prescription pad by checking the fields below. Only checked fields will be shown in the prescription pad.</h4>\n                            <!--div>{{doctorsOfSameClinic | json}}</div-->\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                <!-- *ngIf=\"Clinic_Diagnostics\" -->\n                                <ul class=\"sub_checkboxul hideme\" >\n                                    <li *ngFor=\"let option of padCustomizationOptions; let i = index;\">\n                                        <label class=\"checkbox-inline\">\n                                            <input type=\"checkbox\" (change)=\"pushPadCustom(option.value)\" name=\"\" [checked]=\"option.status\" /> {{option.name}} \n                                        </label>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"checkOptionOfPad('Header_note')\">\n                                <label class=\"col-md-2 col-sm-2 col-xs-12\">Header note (write in the field below)</label>\n                                <div class=\"col-md-8 col-sm-8 col-xs-12\">\n                                    <input type=\"text\" name=\"header note\" class=\"form-control txtfield\" [(ngModel)]=\"padCustomizationOptions[8].text\" [ngModelOptions]=\"{standalone: true}\"  />\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n                                <label class=\"col-md-2 col-sm-2 col-xs-12\">Footer note (write in the field below)</label>\n                                <div class=\"col-md-8 col-sm-8 col-xs-12\">\n                                    <input type=\"text\" name=\"footer note\" class=\"form-control txtfield\" [(ngModel)]=\"padCustomizationOptions[12].text\" [ngModelOptions]=\"{standalone: true}\"  />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"signup-card smartasstFooter\">\n                            <button class=\"btn btn-custom\" type=\"submit\" (click)=\"updatePadOptions()\" > Save </button>\n                            <button class=\"btn btn-custom\" type=\"submit\" data-target=\"#previewModalPrescription\" data-toggle=\"modal\" data-dismiss=\"modal\" > Preview </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>        \n    </div>\n</section>\n<!-- Modal -->\n<div class=\"modal fade cus-modal\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\"> Contact details verification </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"contact-modal-body\">\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"change_phone_div\">\n                            <input type=\"number\" class=\"form-control txtfield\" name=\"\" placeholder=\"Enter OTP received on Mobile\" [(ngModel)]=\"otpPhone\" [ngModelOptions]=\"{standalone: true}\" />\n                        </div>\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"change_email_div\">\n                            <input type=\"number\" class=\"form-control txtfield\" name=\"\" placeholder=\"Enter OTP received on Email\" [(ngModel)]=\"otpEmail\" [ngModelOptions]=\"{standalone: true}\" />\n                        </div>\n                        <div class=\"form-group text-center col-md-12 col-sm-12 col-xs-12\">\n                            <a href=\"javascript:void(0);\" (click)=\"openOTPModal()\" class=\"resend-link\">Resend OTP</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"!otpPhone || !otpEmail\" (click)=\"verifyOTP()\"> Save </button>\n                <button class=\"btn btn-custom\" type=\"button\" data-dismiss=\"modal\" data-toggle=\"modal\"> Cancel </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Preview Modal -->\n<div class=\"modal fade\" id=\"previewModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div>\n                    <h4 class=\"modal-title\"> Preview </h4>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"presc-modal-body\">\n                        <div class=\"pad-view\">\n                            <div class=\"padview-header\">\n                                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                                    <div class=\"form-group schdl\">\n                                        <h4 class=\"text-underline\"> Schedule: </h4>\n                                        <div class=\"Week-name\" *ngFor=\"let shift of allShifts\">\n                                            <div class=\"week-name-wrp\">\n                                                <span class=\"week-spn\">{{shift.day}}</span>\n                                            </div>\n                                            <div class=\"week-time-wrap\">\n                                                <span class=\"week-time\" *ngFor=\"let time of shift.shifts\">[{{time.fromTime.hour}}:{{time.fromTime.minute}} – {{time.toTime.hour}}:{{time.toTime.minute}}]</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"Week-name\" *ngFor=\"let shift of allShiftsClosed\">\n                                            <div class=\"week-name-wrp\">\n                                                <span class=\"week-spn\">{{shift.day}}</span>\n                                            </div>\n                                            <div class=\"week-time-wrap\">\n                                                Closed\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <p class=\"text-center\">Total number of working hours per week: <strong>{{totalHours}} Hours & {{totalMin}} Minutes</strong></p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Doctor detail Modal -->\n<div class=\"modal fade\" id=\"doctorDetailModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\" *ngIf=\"doctorDetailForModal\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"pull-right btn-sm btn btn-custom\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n                <h4 class=\"modal-title\"> Dr. {{doctorDetailForModal.first_name}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-sm-12\">\n                        <div class=\"img-big text-center\">\n                            <img src=\"{{doctorPic}}{{doctorDetailForModal.profile_image}}\" class=\"img-responsive\" *ngIf=\"doctorDetailForModal.profile_image\"/>\n                            <img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!doctorDetailForModal.profile_image\"/>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <table class=\"table table-bordered\">\n                                <tbody>\n                                  <tr>\n                                    <td class=\"text-left\" width=\"200px;\"> <b>Mobile:</b></td>\n                                    <td class=\"text-left\">  +91 {{doctorDetailForModal.phone}}</td>\n                                  </tr>\n                                  <tr>\n                                    <td class=\"text-left\" width=\"200px;\"> <b>Email:</b></td>\n                                    <td class=\"text-left\"> {{doctorDetailForModal.email}}</td>\n                                  </tr>\n                                  <tr>\n                                    <td class=\"text-left\" width=\"200px;\">   <b>Speciality:</b></td>\n                                    <td class=\"text-left\"> {{doctorDetailForModal.specialization}}</td>\n                                  </tr>\n                                  <tr>\n                                    <td class=\"text-left\" width=\"200px;\">  <b>Registration No:</b></td>\n                                    <td class=\"text-left\">{{doctorDetailForModal.registration_no}}</td>\n                                  </tr>\n                                  <tr>\n                                    <td class=\"text-left\" width=\"200px;\"> <b>Qualification:</b></td>\n                                    <td class=\"text-left\"> \n                                        <span *ngFor=\"let ql of doctorDetailForModal.qualification;let i = index;\">\n                                            {{ql.value}}\n                                            <span *ngIf=\"i<doctorDetailForModal.qualification.length-1\">,</span>\n                                        </span>\n                                    </td>\n                                  </tr>\n                                  <tr>\n                                    <td class=\"text-left\" width=\"200px;\">  <b>Professional Affiliation:</b></td>\n                                    <td class=\"text-left\">\n                                        <span *ngFor=\"let pa of doctorDetailForModal.professional_affiliation;let i = index;\">\n                                            {{pa.value}}\n                                            <span *ngIf=\"i<doctorDetailForModal.professional_affiliation.length-1\">,</span>\n                                        </span>\n                                    </td>\n                                  </tr>\n                                  <tr>\n                                    <td class=\"text-left\" width=\"200px;\">  <b>Date of Birth:</b></td>\n                                    <td class=\"text-left\">{{doctorDetailForModal.dob | date:'longDate' }}</td>\n                                  </tr>\n                                  <tr>\n                                    <td class=\"text-left\" width=\"200px;\">  <b>Practising Since:</b></td>\n                                    <td class=\"text-left\">{{doctorDetailForModal.practicing_since}}</td>\n                                  </tr>\n                                  <tr>\n                                    <td class=\"text-left\" width=\"200px;\">  <b>Consultation Fee:</b></td>\n                                    <td class=\"text-left\">{{doctorDetailForModal.consultation_fee}}</td>\n                                  </tr>\n                                  <tr>\n                                    <td class=\"text-left\" width=\"200px;\">  <b>Secondary Language:</b></td>\n                                    <td class=\"text-left\">{{getLanguage(doctorDetailForModal.language)}}</td>\n                                  </tr>\n                                  <tr>\n                                    <td class=\"text-left\" width=\"200px;\">  <b>Type:</b></td>\n                                    <td class=\"text-left\">\n                                        <span *ngIf=\"doctorDetailForModal.type_of_doctor=='admin_doctor'\">Admin Doctor</span>\n                                        <span *ngIf=\"doctorDetailForModal.type_of_doctor=='normal_doctor'\">Normal Doctor</span>\n                                    </td>\n                                  </tr>\n                                  <tr>\n                                    <td class=\"text-left\" colspan=\"2\" style=\"border-bottom: 1px solid #fff;border-left:1px solid #fff;border-right: 1px solid #fff;\">  <b>Schedule Timing:</b></td>\n                                  </tr>\n                                  <tr>\n                                      <td class=\"text-left\" colspan=\"2\">  \n                                        <div class=\"row\" *ngFor=\"let shift of doctorDetailForModal.allShifts\">\n                                            <div class=\"col-lg-4 text-left\">\n                                                   <b>{{shift.day}}</b>\n                                            </div>\n                                            <div class=\"col-lg-8\">\n                                                 <span *ngFor=\"let time of shift.shifts\"> \n                                                        [\n                                                            <span *ngIf=\"time.fromTime.hour=='0'\">{{time.fromTime.hour}}0:</span>\n                                                            <span *ngIf=\"time.fromTime.hour!='0'\">{{time.fromTime.hour}}:</span>\n                                                            <span *ngIf=\"time.fromTime.minute=='0'\">{{time.fromTime.minute}}0 –</span>\n                                                            <span *ngIf=\"time.fromTime.minute!='0'\">{{time.fromTime.minute}} –</span>\n                                                            <span *ngIf=\"time.toTime.hour=='0'\">{{time.toTime.hour}}0:</span>\n                                                            <span *ngIf=\"time.toTime.hour!='0'\">{{time.toTime.hour}}:</span>\n                                                            <span *ngIf=\"time.toTime.minute=='0'\">{{time.toTime.minute}}0</span>\n                                                            <span *ngIf=\"time.toTime.minute!='0'\">{{time.toTime.minute}}</span>\n                                                        ]\n                                                </span>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\" *ngFor=\"let shift of doctorDetailForModal.allShiftsClosed\">\n                                            <div class=\"col-lg-4 text-left\">\n                                                   <b>{{shift.day}}</b>\n                                            </div>\n                                            <div class=\"col-lg-8\">\n                                                Closed\n                                            </div>\n                                        </div>\n                                    </td>\n                                  </tr>\n                                </tbody>\n                          </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade cus-preview\" id=\"previewModalPrescription\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content show-default\">\n            <div class=\"modal-header\">\n                <div>\n                    <h4 class=\"modal-title\"> Preview </h4>\n                </div>\n                <div class=\"text-center\">\n                    <button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\" > Print </button>\n                </div>\n                <div>\n                    <button type=\"button\" class=\"pull-right btn-sm btn btn-custom\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n                </div>\n            </div>\n            <div class=\"modal-body\" id=\"PreviewPrint\">\n                <div class=\"row\">\n                    <div class=\"presc-modal-body\">\n                        <div class=\"pad-view\">\n                            <div class=\"padview-header\">\n                                <div class=\"pad-view-flx col-lg-5 col-md-4 col-sm-4 col-xs-4\">\n                                    <div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\">\n                                        <h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{doctorData.first_name}} </h1>\n                                    </div>\n                                    <div class=\"form-group qual\">\n                                        <p class=\"color-purple\">\n                                            <span *ngIf=\"checkOptionOfPad('Specialization')\">({{doctorData.specialization}})</span><br>\n                                            <span *ngIf=\"checkOptionOfPad('Qualifications')\">\n                                                <span *ngFor=\"let data of doctorData.qualification;let i = index\">\n                                               {{data.value}} <span *ngIf=\"i!=doctorData.qualification.length-1\">,</span>\n                                                </span>\n                                            </span>\n                                                <span *ngIf=\"checkOptionOfPad('registration_no')\"> (Reg.{{doctorData.registration_no}}) </span>\n                                        \n                                        \n                                        <p *ngIf=\"checkOptionOfPad('Professional_affiliation')\">\n                                            <span class=\"color-purple\" *ngFor=\"let pa of doctorData.professional_affiliation;let i=index\">\n                                            {{pa.value}}<span *ngIf=\"i!=doctorData.professional_affiliation.length-1\">,</span>\n                                            </span>\n                                        </p>\n                                        <p *ngIf=\"checkOptionOfPad('Experience')\">{{experience}} years of Experience</p>\n                                    </div>\n                                </div>\n\n                                <div class=\"pad-view-flx col-lg-7 col-md-8 col-sm-8 col-xs-8\">\n                                    <ul class=\"clinic-detail\">\n                                        <li class=\"clinic-name\" *ngIf=\"checkOptionOfPad('Clinic_name')\">\n                                            <h1 id=\"translated_clinicName\" *ngIf=\"doctorData?.clinic_details?.clinic_name\"> {{doctorData.clinic_details.clinic_name}} </h1>\n                                            <h1 id=\"translated_clinicName\" *ngIf=\"!doctorData?.clinic_details?.clinic_name\"> {{doctorsOfSameClinic[0]?.clinic_details.clinic_name}} </h1>\n                                        </li>\n                                        <li *ngIf=\"checkOptionOfPad('Clinic_address') && doctorData?.clinic_details?.address\">{{doctorData?.clinic_details?.address}}, {{doctorData?.clinic_details?.area}}, {{doctorData?.clinic_details?.city}}, {{doctorData?.clinic_details?.state}}</li>\n                                        <li *ngIf=\"checkOptionOfPad('Clinic_address') && !doctorData?.clinic_details?.address\">{{doctorsOfSameClinic[0]?.clinic_details.address}}, {{doctorsOfSameClinic[0]?.clinic_details?.area}}, {{doctorsOfSameClinic[0]?.clinic_details?.city}}, {{doctorsOfSameClinic[0]?.clinic_details?.state}}</li>\n                                        <li class=\"li-cstm\">\n                                        <div class=\"row\" *ngIf=\"checkOptionOfPad('Appointment_contacts')\">\n                                            <div class=\"col-lg-12\">\n                                                <h4 class=\"for-apt\" style=\"font-weight:bold; margin-top:5px\"> For appointments </h4>\n                                                <p *ngIf=\"doctorData?.clinic_details?.landline\"> Tel: {{doctorData.clinic_details.std_code}}-{{doctorData.clinic_details.landline}}</p>\n                                                <p *ngIf=\"doctorsOfSameClinic[0]?.clinic_details?.landline &&  !doctorData?.clinic_details?.landline\"> Tel: {{doctorsOfSameClinic[0]?.clinic_details.std_code}}-{{doctorsOfSameClinic[0]?.clinic_details.landline}}</p>\n                                                <p *ngIf=\"doctorData?.clinic_details?.mobile\"> Mb: +91-{{doctorData.clinic_details.mobile}} </p>\n                                                <p *ngIf=\"!doctorData?.clinic_details?.mobile && doctorsOfSameClinic[0]?.clinic_details?.mobile\"> Mb: +91-{{doctorsOfSameClinic[0]?.clinic_details.mobile}} </p>\n                                                <p *ngIf=\"doctorData?.clinic_details?.email\">Email: {{doctorData.clinic_details.email}}</p>\n                                                <p *ngIf=\"!doctorData?.clinic_details?.email && doctorsOfSameClinic[0]?.clinic_details?.email\">Email: {{doctorsOfSameClinic[0]?.clinic_details.email}}</p>\n                                                <p *ngIf=\"doctorData?.clinic_details?.website\">Web Address: {{doctorData.clinic_details.website}}</p>\n                                                <p *ngIf=\"!doctorData?.clinic_details?.website && doctorsOfSameClinic[0]?.clinic_details?.website\">Web Address: {{doctorsOfSameClinic[0]?.clinic_details.website}}</p>\n                                            </div>\n                                        </div>\n                                           \n                                        </li>\n                                    </ul>\n                                </div>\n\n                            </div>\n                            <p class=\"text-center\" *ngIf=\"checkOptionOfPad('Header_note')\">\n                                <label id=\"translated_appointmentText\"> {{getHeaderText()}} </label>\n                            </p>\n                            <div class=\"padview-body\">\n                                <div class=\"col-md-2 col-sm-2 col-xs- p-0\" style=\"width:20%;\">\n                                    <div class=\"emergency-wrap\">\n                                        <!--div class=\"form-group emrgency-consult\">\n                                            <p class=\"small\" id=\"translated_emergencyText\"><i> Emergency Consultation </i> </p>\n                                        </div-->\n                                        <div class=\"form-group schdl\" *ngIf=\"checkOptionOfPad('Clinic_schedule')\">\n                                            <h5 class=\"color-blue\"> Schedule: </h5>\n                                            <div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\"> \n                                                <span><strong style=\"display:block; width:140px;\"> {{shift.day}}: </strong>\n                                                    <span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\"> \n                                                        [\n                                                            <span *ngIf=\"time.fromTime.hour=='0'\">{{time.fromTime.hour}}0:</span>\n                                                            <span *ngIf=\"time.fromTime.hour!='0'\">{{time.fromTime.hour}}:</span>\n                                                            <span *ngIf=\"time.fromTime.minute=='0'\">{{time.fromTime.minute}}0 –</span>\n                                                            <span *ngIf=\"time.fromTime.minute!='0'\">{{time.fromTime.minute}} –</span>\n                                                            <span *ngIf=\"time.toTime.hour=='0'\">{{time.toTime.hour}}0:</span>\n                                                            <span *ngIf=\"time.toTime.hour!='0'\">{{time.toTime.hour}}:</span>\n                                                            <span *ngIf=\"time.toTime.minute=='0'\">{{time.toTime.minute}}0</span>\n                                                            <span *ngIf=\"time.toTime.minute!='0'\">{{time.toTime.minute}}</span>\n                                                        ]\n                                                </span>\n                                                <br>\n                                                </span>\n                                            </div>\n                                            <div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\"> \n                                                <span><strong> {{shift.day}}: </strong> Closed \n                                                </span>\n                                            </div>\n                                        </div>\n                                        <div id=\"translated_treatmentText\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n                                            <h5 class=\"color-blue\">Treatments: </h5>\n                                            <ul style=\"padding-left:15px!important;\">\n                                                <li *ngFor=\"let treat of doctorData.expertise\">{{treat.value}}</li>\n                                            </ul>\n                                        </div>\n                                        <div *ngIf=\"doctorData?.clinic_services?.Clinic_Pharmacy || doctorData?.clinic_services?.Clinic_IPD || doctorData?.clinic_services?.Clinic_Diagnostics\" id=\"translated_servicesText\">\n                                            <h5 class=\"color-blue\">Services: </h5>\n                                            <ul style=\"padding-left:15px!important;\">\n                                                <li *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy\"> Pharmacy </li>\n                                                <li *ngIf=\"doctorData.clinic_services.Clinic_Diagnostics\"> Diagnostics </li>\n                                                <li *ngIf=\"doctorData.clinic_services.Clinic_IPD\"> IPD </li>\n                                                <li *ngFor=\"let cs of doctorData.clinic_services.ClinicServicesDetail\"> {{cs}} </li>\n                                                <li *ngFor=\"let cs of doctorData.clinic_services.OtherClinicService\"> {{cs.value}} </li>\n                                               \n                                            </ul>\n                                        </div>\n                                    </div>\n                                   \n                                </div>\n                                <div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n                                    <div class=\"padview-bodyright\">\n                                        <ul class=\"padview-body-header\">\n                                            <li>\n                                                <div class=\"text-underline\"> Prescription ID </div>\n                                                <div class=\"strong\"> 28042018-005 </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"> Name </div>\n                                                <div class=\"strong\"> Akshay </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"> Age/Sex </div>\n                                                <div class=\"strong\"> 22M </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"> Weight </div>\n                                                <div class=\"strong\"> 62 Kg </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"> Height </div>\n                                                <div class=\"strong\"> 181 cm </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"strong\"> {{day}} {{month}} , {{year}}</div>\n                                            </li>\n                                        </ul>\n                                        <div class=\"forth-body\">\n                                            <div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n                                                <div class=\"cons-time\">Consultation Duration: 4 min 30 sec </div>\n                                            </div>\n                                            <div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"padview-footer\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n                                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                    <div class=\"padview-powered\">\n                                        <div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n                                        <div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12 col-sm-4 col-xs-12\" id=\"translated_footer\">\n                                    <div class=\"legal\">\n                                        <h3> {{getFooterText()}} </h3>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade cus-preview\" id=\"zohan-ten\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div>\n                    <button type=\"button\" class=\"pull-right btn-sm btn btn-custom\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                 <div class=\"row\" style=\"padding: 10px;\">\n                    <div class=\"col-lg-3 text-right\">\n                        <h4><b>Enter OTP</b></h4>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <!-- <input type=\"\" name=\"\" class=\"form-control\" > -->\n                    \n                    <input id=\"field1\" type=\"text\" [attr.disabled]=\"topVerifed ? '' : null\" class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"verifyPhone\" placeholder =\"Enter OTP\"/>\n                    </div>\n                    <div class=\"col-lg-12 text-center\">\n                        <div *ngIf=\"getDocStatus==1\">\n                            <button (click) = \"CheckAndVerify(1)\"  class=\"btn btn-primary\">Submit</button>\n                        </div>\n                        <div *ngIf=\"getDocStatus==0\">\n                            <button (click) = \"CheckAndVerify(0)\" class=\"btn btn-primary\" >Submit</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"remove-doctor\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div>\n                    <button type=\"button\" class=\"pull-right btn-sm btn btn-custom\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                 <div class=\"row\" style=\"padding: 10px;\">\n                    <div class=\"col-lg-3 text-right\">\n                        <h4><b>Enter OTP</b></h4>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <!-- <input type=\"\" name=\"\" class=\"form-control\" > -->\n                    \n                        <input id=\"field1\" type=\"text\" [attr.disabled]=\"topVerifed ? '' : null\" class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"verifyRemoveDocOtp\" placeholder =\"Enter OTP\"/>\n                    </div>\n                    <div>\n                    <div  class=\"col-lg-12 text-center\">\n                        <div class=\"\">\n                            <br>\n                             <button (click) = \"removeDoctor()\" class=\"btn btn-primary\" >Submit</button>\n                        </div>\n                       \n                    </div>\n                    </div>\n                 </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade cus-preview\" id=\"change-password\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div>\n                    <button type=\"button\" class=\"pull-right btn-sm btn btn-custom\"  aria-label=\"Close\" (click)=\"closeModal()\"> Close </button>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                 <div class=\"row\" style=\"padding: 10px;\">\n                    <div class=\"col-lg-3 text-right\">\n                        <h4><b>Enter OTP</b></h4>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <!-- <input type=\"\" name=\"\" class=\"form-control\" > -->\n                    \n                        <input id=\"field1\" type=\"text\"  class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"verifyChnagePassword\" placeholder =\"Enter OTP\"/>\n                    </div>\n                 </div>\n                 <div class=\"modal-footer\" style=\"text-align: center;\">\n                    <button (click) = \"openOTPModal()\" class=\"btn-sm btn btn-custom\">Submit</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade cus-preview\" id=\"verify-doctor\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div>\n                    <button type=\"button\" class=\"pull-right btn-sm btn btn-custom\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                 <div class=\"row\" style=\"padding: 10px;\">\n                    <div class=\"col-lg-3 text-right\">\n                        <h4><b>Enter OTP</b></h4>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <!-- <input type=\"\" name=\"\" class=\"form-control\" > -->\n                    \n                    <input id=\"field1\" type=\"text\"  class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"verifyDoctorOtp\" placeholder =\"Enter OTP\"/>\n                    </div>\n                    <div>\n                    <!-- <div >\n                        <button  (click)=\"VerifyDoctor()\" >Submit</button>\n                    </div> -->\n                    <div class=\"col-lg-12 text-center\">\n                        <div *ngIf=\"getDocVerifyStatus==1\">\n                            <button (click) = \"VerifyDoctor(1)\"  class=\"btn btn-primary\">Submit</button>\n                        </div>\n                        <div *ngIf=\"getDocVerifyStatus==0\">\n                            <button (click) = \"VerifyDoctor(0)\" class=\"btn btn-primary\" >Submit</button>\n                        </div>\n                    </div>\n                </div>\n                 </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div id=\"OTPModal\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-login\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">        \n          <h4 class=\"modal-title\">Verify OTP</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n        </div>\n        <div class=\"modal-body\">        \n          <div class=\"form-group\">\n            <label>Please enter OTP sent to your phone</label>\n\t\t\t<input id=\"field_1\" type=\"text\"  class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"verifyNonAdminDoctor\" placeholder =\"Enter OTP\"/>\n          </div>\n          <span id=\"error_text_otp\" style=\"color: red;\"></span>\n                    \n        </div>\n        <div class=\"modal-footer\">\n          \n          <input type=\"button\" id=\"verify_button\" class=\"btn btn-primary pull-right\" value=\"Verify Now\" (click)=\"updateProfileOTP()\" >\n        </div>\n    </div>\n  </div>\n</div> \n\n\n<div id=\"EmailOTPModal\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-login\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">        \n          <h4 class=\"modal-title\">Verify OTP</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n        </div>\n        <div class=\"modal-body\">        \n          <div class=\"form-group\">\n            <label>Please enter OTP sent to new mobile number</label>\n            <!--input type=\"text\" class=\"form-control\" id=\"otp\" required=\"required\"-->\n\t\t\t<input id=\"field_1\" type=\"text\"  class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"verifyEmailOTP\" placeholder =\"Enter OTP\"/>\n          </div>\n          <span id=\"error_text_otp\" style=\"color: red;\"></span>\n                    \n        </div>\n        <div class=\"modal-footer\">\n          \n          <input type=\"button\" id=\"verify_button\" class=\"btn btn-primary pull-right\" value=\"Verify Now\" (click)=\"updateEmailOTP()\" >\n        </div>\n    </div>\n  </div>\n</div> \n\n\n<div id=\"shareModal\" class=\"modal fade\">\n    <div class=\"modal-dialog modal-sm modal-login\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">        \n            <h4 class=\"modal-title\">Share Clinic ID\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n            </h4>\n          </div>\n\t\t  <form [formGroup]=\"shareForm\">\n          <div class=\"modal-body\">        \n            <div class=\"form-group\">\n              <label>Please enter phone number to share clinic ID</label>\n              <!--input type=\"text\" class=\"form-control\" id=\"otp\" required=\"required\"-->\n              <input id=\"field_1\" type=\"text\"  formControlName=\"phone\" class=\"form-control txtfield\" name=\"\" style=\"padding-left: 50px;\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"sharePhone\" placeholder =\"Enter Phone Number\"/>\n              <span class=\"btn-nineone\">+91</span>\n\t\t\t  </div>\n\t\t\t <p style=\"color: #FF0000\" *ngIf=\"!shareForm.controls['phone'].valid  && ( shareForm.controls['phone'].touched)\">Invalid phone number !!!</p>\n            <span id=\"error_text_otp\" style=\"color: red;\"></span>\n                      \n          </div>\n          <div class=\"modal-footer\" style=\"text-align: center;\">\n            \n            <input type=\"button\" id=\"verify_button\" class=\"btn btn-primary verify-btn-pop\" value=\"Send SMS\" [disabled]=\"(!shareForm.valid)\"  (click)=\"SendSMS()\" >\n          </div>\n\t\t</form>\n\t\t \n      </div>\n    </div>\n  </div> \n  \n  \n  <div id=\"ClinicIdModal\" class=\"modal fade\">\n    <div class=\"modal-dialog modal-sm modal-login\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">        \n            <h4 class=\"modal-title\">Associate New Clinic ID\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n            </h4>\n          </div>\n\t\t  <form [formGroup]=\"clinicIDform\">\n          <div class=\"modal-body\">        \n            <div class=\"form-group\">\n              <label>Please provide new Clinic Id that needs to be associated with your account:</label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"clinicid\" id=\"clinic_id\" name=\"\" required=\"\" [(ngModel)]=\"clinicid\" placeholder=\"Enter New Clinic ID\">\n              </div>\n\t\t\t <p style=\"color: #FF0000\" *ngIf=\"!clinicIDform.controls['clinicid'].valid  && ( clinicIDform.controls['clinicid'].touched)\">Invalid Clinic ID !!!</p>\n            <span id=\"error_text_otp\" style=\"color: red;\"></span>\n                      \n          </div>\n          <div class=\"modal-footer\" style=\"text-align: center;\">\n            <input type=\"button\" id=\"change_clinic_id\" class=\"btn btn-primary verify-btn-pop\" value=\"Submit\" [disabled]=\"(!clinicIDform.valid)\"  (click)=\"changeClinicIdOTP('clinicid')\" >\n          </div>\n\t\t</form>\n\t\t \n      </div>\n    </div>\n  </div> \n  \n  \n  \n    <div id=\"EmailModal\" class=\"modal fade\">\n    <div class=\"modal-dialog modal-sm modal-login\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">        \n            <h4 class=\"modal-title\">Enter New Mobile Number:\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n            </h4>\n          </div>\n\t\t  <form [formGroup]=\"emailAddressForm\">\n          <div class=\"modal-body\">        \n            <div class=\"form-group\">\n              <label>OTP will be sent to your new mobile number for verification</label>\n\t\t\t  <span style=\"position: absolute; top: 60px; padding: 7px; border-right: 2px solid #6f6f6f\">+91</span>\n              <input type=\"text\" class=\"form-control\" formControlName=\"user_id\" id=\"user_id\" name=\"\" required=\"\" [(ngModel)]=\"user_id\" placeholder=\"Enter New Phone Number\" style=\"    padding-left: 50px;\">\n              </div>\n\t\t\t <p style=\"color: #FF0000\" *ngIf=\"!emailAddressForm.controls['user_id'].valid  && ( emailAddressForm.controls['user_id'].touched)\">Invalid Mobile Number !!!</p>\n            <span id=\"error_text_otp\" style=\"color: red;\"></span>\n                      \n          </div>\n          <div class=\"modal-footer\" style=\"text-align: center;\">\n            <input type=\"button\" id=\"change_clinic_id\" class=\"btn btn-primary verify-btn-pop\" value=\"Submit\" [disabled]=\"(!emailAddressForm.valid)\"  (click)=\"changeClinicIdOTP('email')\" >\n          </div>\n\t\t</form>\n\t\t \n      </div>\n    </div>\n  </div> \n\n\n\n  <div class=\"modal fade\" id=\"pharmacy-credentials-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n    <div class=\"modal-dialog\"> \n          <div class=\"loginmodal-container\">\n              <h1>Create Smart Pharmacy Login Credentials</h1><br>\n              <form [formGroup]=\"smartPharmacyForm\">\n              <!--input class=\"form-control\"  type=\"text\" formControlName=\"name\" [(ngModel)]=\"SmartPharmacyDetail.name\" placeholder=\"Pharmacy Name\" [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\"/>\n\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!smartPharmacyForm.controls['name'].valid  && (smartPharmacyForm.controls['name'].touched)\">Invalid name !!!</p>\n\t\t\t  <div style=\"position: relative;\">\n\t\t\t\t\t<span style=\"position: absolute; top: 0; padding: 12px; border-right: 1px solid #c0c0c0;\">+91</span>\n\t\t\t\t   <input class=\"form-control\"  type=\"text\" formControlName=\"phone\" [(ngModel)]=\"SmartPharmacyDetail.phone\" placeholder=\"Pharmacy Mobile Number\" [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\" style=\"padding-left: 60px;\" />\n\t\t\t\t   <p style=\"color:#FF0000\" *ngIf=\"!smartPharmacyForm.controls['phone'].valid  && (smartPharmacyForm.controls['phone'].touched)\" >Invalid mobile number !!!</p>\n\t\t\t   </div-->\n\t\t\t  <input type=\"text\" name=\"dummy\" style=\"display:none\"/>\n              <input type=\"password\" name=\"pword\" style=\"display:none\"/>\n              <!--input class=\"form-control\"  type=\"text\"  formControlName=\"name\" [(ngModel)]=\"clinicPharmacyCredentials.pharmacyName\" placeholder=\"Enter Pharmacy Name\"/>\n              <p style=\"color: #FF0000\" *ngIf=\"!heroForm.controls['name'].valid  && ( heroForm.controls['name'].touched)\">Invalid name !!!</p-->\n              <input class=\"form-control\"  type=\"text\" formControlName=\"unique_id\" [(ngModel)]=\"SmartPharmacyDetail.unique_id\" placeholder=\"Enter Pharmacy User Id\" [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\"/>\n              <p style=\"font-size:14px\">( You can choose same User Id as your Smart Clinic Id or It could be different. )</p>\n             <p style=\"color: #FF0000\" *ngIf=\"!smartPharmacyForm.controls['unique_id'].valid  && (smartPharmacyForm.controls['unique_id'].touched)\">Invalid email id !!!</p>\n              <!--input class=\"form-control\"  type=\"text\"  formControlName=\"phone\" [(ngModel)]=\"clinicPharmacyCredentials.pharmacyPhone\" placeholder=\"Enter Pharmacy Phone\"  autocomplete=\"sdfdsfdrt\"/>\n              <p style=\"color: #FF0000\" *ngIf=\"!heroForm.controls['phone'].valid  && ( heroForm.controls['phone'].touched)\">Invalid phone number !!!</p-->\n              <input class=\"form-control\"  type=\"password\"  formControlName=\"password\" [(ngModel)]=\"SmartPharmacyDetail.password\"  placeholder=\"Enter Pharmacy Password\" [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\" />\n\t\t\t  <p style=\"color: #FF0000\" *ngIf=\"!smartPharmacyForm.controls['password'].valid  && (smartPharmacyForm.controls['password'].touched)\">Password can be of 8 to 15 characters !!!</p>\n              <input class=\"form-control\" type=\"password\"  formControlName=\"confirm_password\"  (keyup)=\"onKey3($event)\" [(ngModel)]=\"SmartPharmacyDetail.confirm_password\" placeholder=\"Confirm Password\" [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\"/>\n             \n                  \n              <div class=\"cnt\">\n              <a (click)=\"cancelservice('pharmacy')\" class=\"btn btn-outline\" type=\"button\">\n                      Cancel\n                  </a>\n              <button *ngIf=\"doctorData.type_of_doctor == 'admin_doctor'\" class=\"btn btn-custom\" type=\"submit\"   [disabled]=\"(!smartPharmacyForm.valid) || (p_false3)\" (click)=\"updateSmartPharmacy1()\"> Save </button>\n\t\t\t   \n\t\t\t  <button *ngIf=\"doctorData.type_of_doctor == 'normal_doctor'\" class=\"btn btn-custom\" type=\"submit\" (click)=\"closeModal1('pharmacy')\"> OK </button>\n              </div>\n          </form>\n          </div>\n      </div>\n</div>\n\n<div class=\"modal fade\" id=\"diagnostics-credentials-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n\t<div class=\"modal-dialog\">\n\t\t  <div class=\"loginmodal-container\">\n\t\t\t  <h1><span *ngIf=\"doctorData.type_of_doctor == 'admin_doctor'\">Provide</span> Details About Smart Diagnostics</h1><br>\n\t\t\t <form [formGroup]=\"smartDiagnosticsForm\" > \n\t\t\t  <fieldset>\n\t\t\t\t<legend><span *ngIf=\"doctorData.type_of_doctor == 'normal_doctor'\">Choose</span> Diagnostics Services:</legend>\n\t\t\t <ul class=\"sub_checkboxul hideme all-limancls\" *ngIf=\"Clinic_Diagnostics\">\n\t\t\t\t\t\t\t\t<li *ngFor=\"let option of clinicDiagnosticsList; let i = index;\">\n\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"push(option.name,i)\" name=\"\" [checked]=\"option.status\"  /> {{option.name}} </label>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"other\" name=\"\" (change)=\"push(1,-1)\" [(ngModel)]=\"otherSelected\" [ngModelOptions]=\"{standalone: true}\" /> Others\n\t\t\t\t\t\t\t\t\t\t<tag-input *ngIf=\"otherSelected\" class=\"otherfield hideme\" placeholder=\"Other (comma separated)\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Other (comma separated)\" theme='bootstrap' [(ngModel)]=\"OtherClinicService\" [ngModelOptions]=\"{standalone: true}\"></tag-input>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t</fieldset>\n\t\t\t\t<fieldset>\n\t\t\t<legend>Create Diagnostics Login Credentials:</legend>\n\t\t\t\n\t\t\t\n\t\t\t<div class=\"nwinputcsl\">\n\t\t\t\t<!--div class=\"main-input\">\n\t\t\t\t\t<input type=\"text\" formControlName=\"name\" [(ngModel)]=\"clinicDiagnosticsCredentials.name\" placeholder=\"Enter Smart Diagnostics Name\" name=\"dname\" autocpmplete=\"asdasd\"/>\n\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!diagnosticsGrp.controls['name'].valid  && ( diagnosticsGrp.controls['name'].touched)\">Invalid name !!!</p>\n\t\t\t\t</div>\t-->\t\t \n\t\t\t\t<!--div class=\"main-input\">\n\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" formControlName=\"name\" [(ngModel)]=\"SmartDiagnosticsDetail.name\" placeholder=\"Diagnostics Name\" name=\"\" autocpmplete=\"asdacfwefweadfaasd\" [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\" />\n\t\t\t\t\t<p style=\"color: #FF0000\"  *ngIf=\"!smartDiagnosticsForm.controls['name'].valid  && (smartDiagnosticsForm.controls['name'].touched)\">Invalid Diagnostics Name !!!</p>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"main-input\" style=\"position: relative;\">\n\t\t\t\t\t<span style=\"position: absolute; top: 0; padding: 12px; border-right: 1px solid #c0c0c0;\">+91</span>\n\t\t\t\t\t<input type=\"text\" formControlName=\"phone\" [(ngModel)]=\"SmartDiagnosticsDetail.phone\" [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\" placeholder=\" Diagnostics Mobile Number\" name=\"\" autocpmplete=\"asdacfwefweadfaasd\" (blur)=\"GetSmartDiagnosticsByPhone(SmartDiagnosticsDetail.phone)\" style=\"    padding-left: 60px;\" />\n\t\t\t\t\t<p style=\"color: #FF0000\"  *ngIf=\"!smartDiagnosticsForm.controls['phone'].valid  && (smartDiagnosticsForm.controls['phone'].touched)\">Invalid Diagnostics Phone Number !!!</p>\n\t\t\t\t</div-->\n\t\t\t\t<div class=\"main-input\">\n\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" formControlName=\"unique_id\" [(ngModel)]=\"SmartDiagnosticsDetail.unique_id\" placeholder=\"Diagnostics User ID (Email format)\" name=\"_user_mail\" autocpmplete=\"off\" [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\" />\n\t\t\t\t\t( You can choose same User Id as your Smart Clinic Id or It could be different. )\n\t\t\t\t\t<p style=\"color: #FF0000\"  *ngIf=\"!smartDiagnosticsForm.controls['unique_id'].valid  && (smartDiagnosticsForm.controls['unique_id'].touched)\">Invalid email address !!!</p>\n\t\t\t\t</div>\n\t\t\t\t<!--div class=\"main-input\">\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"clinicDiagnosticsCredentials.phone\" placeholder=\"Enter  Smart Diagnostics Phone\" formControlName=\"phone\" name=\"_phone\" autocpmplete=\"asadfdasd\"/>\n\t\t\t\t\t<p style=\"color: #FF0000\"  *ngIf=\"!diagnosticsGrp.controls['phone'].valid  && ( diagnosticsGrp.controls['phone'].touched)\">Invalid Phone number !!!</p>\n\t\t\t\t</div-->\n\t\t\t\n\t\t\t\n\t\t\t\t<div class=\"main-input\">\n\t\t\t\t\t<input type=\"password\" formControlName=\"password\" [(ngModel)]=\"SmartDiagnosticsDetail.password\" [formControl]=\"smartDiagnosticsForm.controls['password']\" (input)=\"checkPassword1(SmartDiagnosticsDetail.password)\" [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\" placeholder=\"Diagnostics Password\"/>\n\t\t\t\t\t<p style=\"color: #FF0000\"  *ngIf=\"!diagnosticsGrp.controls['password'].valid  && ( diagnosticsGrp.controls['password'].touched)\">Invalid Password !!!</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"main-input\">\n\t\t\t\t\t<input type=\"password\" placeholder=\"Confirm Password\" (keyup)=\"onKey4($event)\" [(ngModel)]=\"SmartDiagnosticsDetail.confirm_password\" [formControl]=\"smartDiagnosticsForm.controls['confirm_password']\" autocpmplete=\"asasddasd\" [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\"/>\n\t\t\t\t\t <p style=\"color: #FF0000\" *ngIf=\"p_false4\">Password and confirm password are not same !!!</p>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t</fieldset>\n\t\t\t<div class=\"cnt\">\n\t\t\t\t<a (click)=\"cancelservice('diagnostics')\" class=\"btn btn-outline\" type=\"button\">Cancel</a>\n\t\t\t\t<button class=\"btn btn-custom\" *ngIf=\"doctorData.type_of_doctor == 'admin_doctor'\"  type=\"submit\"  [disabled]=\"(!smartDiagnosticsForm.valid) || (p_false4)\" (click)=\"updateSmartDiagnostics1()\" > Save </button>\n\t\t\t\t <button *ngIf=\"doctorData.type_of_doctor == 'normal_doctor'\" class=\"btn btn-custom\" type=\"submit\" (click)=\"closeModal1('diagnostics')\" (click)=\"updateSmartDiagnostics()\"> Save </button>\n\t\t\t</div> \n\t\t\t</form> \n\t\t\t \n\t\t  </div>\n\t  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"ipd-credentials-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n\t<div class=\"modal-dialog\">\n\t\t  <div class=\"loginmodal-container\">\n\t\t\t  <h1><span *ngIf=\"doctorData.type_of_doctor == 'admin_doctor'\">Provide</span> Details About Smart IPD</h1><br>\n\t\t\t  <form [formGroup]=\"editBeds\">\n\t\t\t  <fieldset *ngIf=\"Clinic_IPD && ClinicContactDetail.userOwnClinic == 'Yes'\">\n\t\t\t\t<legend>Enter Bed Details for your IPD:</legend>\n\t\t\t\t <div class=\"row\" *ngIf=\"Clinic_IPD && ClinicContactDetail.userOwnClinic == 'Yes'\">\n\t\t\t\t\t\t\t<div class=\"signup-clinicBeds hideme\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12 m-b-10\">\n\t\t\t\t\t\t\t\t\t<small class=\"pull-left\"> (Write numbers of bed available) </small>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-3 col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t<label> General<br>Beds </label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\"  [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\" pattern=\"[0-9.]+\" maxLength=\"3\"   class=\"form-control txtfield\" name=\"\"  [(ngModel)]=\"general_beds\" [formControl]=\"editBeds.controls['generalBeds']\" />\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!editBeds.controls['generalBeds'].valid  && ( editBeds.controls['generalBeds'].touched)\">Invalid Bed !!!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-3 col-xs-4\">\n\t\t\t\t\t\t\t\t\t<label> Semi-Private Beds </label>\n\t\t\t\t\t\t\t\t\t<input [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\" type=\"number\" name=\"\" min=\"0\" max=\"100\" [(ngModel)]=\"semi_private_beds\"  class=\"form-control txtfield\" pattern=\"[0-9.]+\" maxLength=\"3\" [formControl]=\"editBeds.controls['semiPrivateBeds']\"/>\n\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!editBeds.controls['semiPrivateBeds'].valid  && ( editBeds.controls['semiPrivateBeds'].touched)\">Invalid Bed !!!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-3 col-xs-4\">\n\t\t\t\t\t\t\t\t\t<label> Private<br>Beds </label>\n\t\t\t\t\t\t\t\t\t<input [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\" type=\"number\" name=\"\" min=\"0\" max=\"100\" [(ngModel)]=\"private_beds\" class=\"form-control txtfield\" pattern=\"[0-9.]+\" maxLength=\"3\" [formControl]=\"editBeds.controls['privateBeds']\"/>\n\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!editBeds.controls['privateBeds'].valid  && ( editBeds.controls['privateBeds'].touched)\">Invalid Bed !!!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-3 col-xs-4\">\n\t\t\t\t\t\t\t\t\t<label> Total<br>Beds </label>\n\t\t\t\t\t\t\t\t\t<input [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\" *ngIf=\"doctorData.type_of_doctor == 'admin_doctor'\" type=\"number\" disabled=\"\" name=\"\" min=\"0\" value=\"{{general_beds+semi_private_beds+private_beds}}\" class=\"form-control txtfield\" />\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t\t</form>\n\t\t\t<form [formGroup]=\"smartIpdForm\">\n\t\t\t<fieldset>\n\t\t\t\t\n\t\t\t<legend><span *ngIf=\"doctorData.type_of_doctor == 'admin_doctor'\" >Create</span> Smart IPD Login Credentials:</legend>\n\t\t\t<div class=\"nwinputcsl\">\t\t\t \n\t\t\t\t\n\n\t\t\t\t<input type=\"email\" name=\"email\" style=\"display:none\" />\n\t\t\t\t<input type=\"password\" name=\"password\" style=\"display:none\" />\n\t\t\t\t<input [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\" type=\"text\" formControlName=\"unique_id\" [(ngModel)]=\"SmartIpdDetail.unique_id\" placeholder=\"IPD User ID (Email format)\" name=\"_ipdemail\" autocomplete=\"ghghghffgf\"/>\n\t\t\t\t( You can choose same User Id as your Smart Clinic Id or It could be different. )\n\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!smartIpdForm.controls['unique_id'].valid  && (smartIpdForm.controls['unique_id'].touched)\">Invalid email id !!!</p>\n\t\t\t\t<input [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\" type=\"password\" formControlName=\"password\" [(ngModel)]=\"SmartIpdDetail.password\" placeholder=\"Enter  Smart IPD Password\" />\n\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!smartIpdForm.controls['password'].valid  && ( smartIpdForm.controls['password'].touched)\">Invalid Password !!!</p>\n\n\t\t\t\t<input [readonly]=\"doctorData.type_of_doctor == 'normal_doctor'\" type=\"password\" formControlName=\"confirm_password\" [(ngModel)]=\"SmartIpdDetail.confirm_password\" placeholder=\"Confirm Password\" />\n\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!smartIpdForm.controls['confirm_password'].valid  && ( smartIpdForm.controls['confirm_password'].touched)\">Invalid Confirm Password !!!</p>\n\t\t\t</div>\t\n\t\t\t</fieldset>\n\t\t\t<div class=\"cnt\">\n\t\t\t\t<a (click)=\"cancelservice('ipd')\" class=\"btn btn-outline\" type=\"button\">Cancel</a>\n\t\t\t\t<button *ngIf=\"doctorData.type_of_doctor == 'admin_doctor'\" class=\"btn btn-custom\" type=\"submit\" [disabled]=\"(!smartIpdForm.valid) || (p_false2)\" (click)=\"updateSmartIpd1()\" > Save </button>\n\t\t\t\t<button *ngIf=\"doctorData.type_of_doctor == 'normal_doctor'\" class=\"btn btn-custom\" type=\"submit\" (click)=\"closeModal1('ipd')\"> OK </button>\n\t\t\t</div>  \n\t\t</form>\n\t\t\t \n\t\t  </div>\n\t  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/edit-profile/edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_mission_service__ = __webpack_require__("../../../../../src/app/providers/mission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {} from 'googlemaps';




var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(formBuilder, toastr, userService, router, mapsAPILoader, ngZone, route, missionService) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.route = route;
        this.missionService = missionService;
        this.services1 = [];
        this.addressBackup = {};
        this.purchase_details = {};
        this.editDetails = false;
        this.activatedtab = 0;
        this.enableEdit = 0;
        this.correct_password = true;
        this.enable_map = false;
        this.activatedtabHeading = 'Your Contact details';
        this.clinicPharmacyCredentials = {};
        this.clinicDiagnosticsCredentials = {};
        this.clinicIpdCredentials = {};
        this.title = 'DocTM';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.mondayDisabled = false;
        this.tuesdayDisabled = false;
        this.wednesdayDisabled = false;
        this.thursdayDisabled = false;
        this.fridayDisabled = false;
        this.saturdayDisabled = false;
        this.sundayDisabled = false;
        this.p_false = false;
        this.p_false1 = false;
        this.Clinic_Diagnostics = false;
        this.Clinic_Pharmacy = false;
        this.Clinic_IPD = false;
        this.hourStep = 1;
        this.minuteStep = 15;
        this.date = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy',
            defaultOpen: false
        };
        this.lowerCase = false;
        this.upperCase = false;
        this.specialCase = false;
        this.lengthCase = false;
        this.numberCase = false;
        this.lowerCase1 = false;
        this.upperCase1 = false;
        this.specialCase1 = false;
        this.lengthCase1 = false;
        this.numberCase1 = false;
        this.show_new_shift = true;
        this.show_new_schedule = true;
        this.other_specialization = false;
        this.classEnabled = false;
        this.p_false2 = false;
        this.SmartPharmacyDetail = {};
        this.p_false3 = false;
        this.p_false4 = false;
        this.values = '';
        this.values1 = '';
        this.values2 = '';
        this.values3 = '';
        this.values4 = '';
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.purchase_details.services = [];
        this.condition = true;
        this.formClass1 = 'active';
        this.SmartAssistantDetail = {};
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        this.checkService('Smart IPD');
        this.checkService('Smart Diagnostics');
        this.checkService('Smart Pharmacy');
        /* if(this.services.Clinic_IPD==true){
            this.Clinic_IPD=true;
        }
        if(this.services.Clinic_Pharmacy==true){
            this.Clinic_Pharmacy=true;
        }
        if(this.services.Clinic_Diagnostics==true){
            this.Clinic_Diagnostics=true;
        } */
        if (this.isJson(localStorage['subscription_info'])) {
            this.subscriptionInfo = JSON.parse(localStorage['subscription_info']);
        }
        else {
            this.subscriptionInfo = localStorage['subscription_info'];
        }
        //alert('Here');
        //alert(this.subscriptionInfo.subscription_id)
        this.currentPlan = this.subscriptionInfo.subscription_id;
        console.log('Hereeeeeeee');
        console.log(this.doctorData);
        this.plan = "Trial";
        if (this.doctorData.plan_duration == "monthly") {
            this.plan = "oneMonth";
        }
        if (this.doctorData.plan_duration == "quarterly") {
            this.plan = "sixMonths";
        }
        if (this.doctorData.plan_duration == "yearly") {
            this.plan = "oneYear";
        }
        this.GetDoctorDetail(this.doctorData.itemId);
        this.services = this.doctorData.clinic_services;
        //this.services=this.services.clinic_services;
        this.scheduleArray = [];
        this.myObject = {};
        this.myObject.fromTime = {};
        this.myObject.fromTime.minute = 0;
        this.myObject.fromTime.hour = 9;
        this.myObject.toTime = {};
        this.myObject.toTime.minute = 0;
        this.myObject.toTime.hour = 18;
        this.myObject.shifts = [];
        this.myObject.Monday = false;
        this.myObject.Tuesday = false;
        this.myObject.Wednesday = false;
        this.myObject.Thursday = false;
        this.myObject.Friday = false;
        this.myObject.Saturday = false;
        this.myObject.Sunday = false;
        this.InitialDetail = {};
        this.stepOneForm = this.formBuilder.group({
            'phone': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(10)
                ])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(8)
                ])],
            'confirm_password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(8)
                ])],
        });
        var currentYear = new Date().getFullYear();
        this.ProfileDetail = {};
        this.ProfileDetail.selectedImage = null;
        this.ProfileDetail.dob = null;
        this.stepTwoForm = this.formBuilder.group({
            'first_name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z ]*')])],
            // 'last_name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z ]*')])],
            'specialization': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required])],
            'registration_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(15)
                ])],
            'qualification': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'professional_affiliation': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'dob': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required])],
            'practicing_since': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].max(currentYear), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].min(1950)
                ])],
            'consultation_fee': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].min(0)
                ])],
            'expertise': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'other_specialization': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
        });
        this.ClinicContactDetail = {};
        // this.GetStatesOfCountry()
        this.userOwnClinicStatus = true;
        this.ClinicContactDetail.userOwnClinic = "Yes";
        this.stepThreeForm = this.formBuilder.group({
            'clinic_name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'clinic_name1': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'state': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required])],
            'city': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required])],
            'area': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required])],
            'address': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'mobile': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]+-*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(10)
                ])],
            'std_code': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(10)
                ])],
            'landline': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]+'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(15)
                ])],
            'clinic_email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required])],
            'website': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required])],
        });
        this.heroForm = this.formBuilder.group({
            //name: ['', Validators.required],
            email: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(15)
                ])],
            confirm: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(6)]],
        }, {
            validator: this.passwordMatchValidator
        });
        this.diagnosticsGrp = this.formBuilder.group({
            //  name: ['', Validators.required],
            email: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(15)
                ])],
            confirm: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(6)]],
        }, {
            validator: this.passwordMatchValidator
        });
        this.addBeds = this.formBuilder.group({
            'generalBeds': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].max(999), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].min(0)])],
            'semiPrivateBeds': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].max(999), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].min(0)])],
            'privateBeds': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].max(999), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].min(0)])],
            // 'name':[null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z ]*')])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(8)
                ])],
            'confirm': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(8)
                ])],
        }, {
            validator: this.passwordMatchValidator
        });
        this.shareForm = this.formBuilder.group({
            'phone': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(10)
                ])],
        });
        this.clinicIDform = this.formBuilder.group({
            'clinicid': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required])],
        });
        this.emailAddressForm = this.formBuilder.group({
            'user_id': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(10)
                ])],
        });
        this.SmartAssistantDetail = {};
        this.stepFourForm = this.formBuilder.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'phone': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(10)
                ])],
            'unique_id': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(8)
                ])],
            'confirm_password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(8)
                ])],
            'avgConsTime': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required])],
            'waitingTime': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required])]
        });
        this.SmartIpdDetail = {};
        this.smartIpdForm = this.formBuilder.group({
            'unique_id': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(8)
                ])],
            'confirm_password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(8)
                ])]
        });
        this.SmartPharmacyDetail = {};
        this.smartPharmacyForm = this.formBuilder.group({
            'unique_id': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(8)
                ])],
            'confirm_password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(8)
                ])]
        });
        this.SmartDiagnosticsDetail = {};
        this.smartDiagnosticsForm = this.formBuilder.group({
            'unique_id': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(8)
                ])],
            'confirm_password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(8)
                ])]
        });
        this.ClinicServicesDetail = [];
        this.clinicDiagnosticsList = [{
                name: 'PATHOLOGY',
                status: false
            },
            {
                name: 'ULTRASOUND',
                status: false
            },
            {
                name: 'X-Ray',
                status: false
            },
            {
                name: 'CT-Scan',
                status: false
            },
            {
                name: 'MRI',
                status: false
            },
            {
                name: 'ECG',
                status: false
            },
            {
                name: 'Echo',
                status: false
            },
            {
                name: 'EEG',
                status: false
            },
            // { name: 'EMG', status: false },
            {
                name: 'TMT',
                status: false
            },
            {
                name: 'AUDIOMETRY',
                status: false
            },
            {
                name: 'BONE DENSITOMETRY',
                status: false
            },
            {
                name: 'DOPPLER STUDIES',
                status: false
            },
            {
                name: 'MAMMOGRAPHY',
                status: false
            },
            {
                name: 'UROFLOWMETRY',
                status: false
            },
            {
                name: 'Nerve Test',
                status: false
            },
            {
                name: 'Eye Tests',
                status: false
            },
            {
                name: 'Lung Test',
                status: false
            }
        ];
        this.otherSelected = false;
        this.ClinicServicesDetailObject = {};
        this.private_beds = 0;
        this.semi_private_beds = 0;
        this.general_beds = 0;
        this.photoIDDocumentsList = [{
                name: 'PAN Card',
                status: false,
                document_name: '',
                image: '',
                placeholder: 'Pan card number'
            },
            {
                name: 'Driving License',
                status: false,
                document_name: '',
                image: '',
                placeholder: 'Driving license number'
            },
            {
                name: 'Aadhaar card',
                status: false,
                document_name: '',
                image: '',
                placeholder: 'Aadhaar number'
            },
            {
                name: 'Passport',
                status: false,
                document_name: '',
                image: '',
                placeholder: 'Passport number'
            }
        ];
        this.clinicDocumentsList = [{
                name: 'Latest clinic electricity bill',
                status: false,
                image: ''
            },
            {
                name: 'Undertaking',
                status: false,
                document_name: '',
                image: ''
            },
            {
                name: 'Latest clinic landline phone bill',
                status: false,
                image: ''
            }
        ];
        this.DocumentsDetail = {};
        this.allShifts = [];
        this.allShiftsClosed = [];
        this.languageOption = "";
        this.languageSelected = false;
        this.otp_verified = false;
        this.otpVerifed = false;
        this.smartAssistantRegFields = [{
                name: 'Patient Name',
                value: 'PatientName',
                status: true,
                disable: true,
                star: true
            },
            {
                name: 'Mobile Number',
                value: 'MobileNumber',
                status: true,
                disable: true,
                star: true
            },
            {
                name: 'Age',
                value: 'Age',
                status: false,
                disable: false
            },
            {
                name: 'DOB',
                value: 'DOB',
                status: true,
                disable: false,
                star: true
            },
            {
                name: 'Gender',
                value: 'Gender',
                status: true,
                disable: true,
                star: true
            },
            {
                name: 'Address',
                value: 'Address',
                status: true,
                disable: true,
                star: true
            },
            {
                name: 'Weight',
                value: 'Weight',
                status: false,
                disable: false
            },
            {
                name: 'Height',
                value: 'Height',
                status: false,
                disable: false
            },
            {
                name: 'Body temperature',
                value: 'Bodytemperature',
                status: false,
                disable: false
            },
            {
                name: 'Pulse',
                value: 'Pulse',
                status: false,
                disable: false
            },
            {
                name: 'Blood Pressure(BP)',
                value: 'BloodPressure(BP)',
                status: false,
                disable: false
            },
            {
                name: 'Random Blood Sugar(RBS)',
                value: 'RandomBloodSugar(RBS)',
                status: false,
                disable: false
            },
            {
                name: 'SpO2',
                value: 'SpO2',
                status: false,
                disable: false
            },
            {
                name: 'Patient photo (recommended)',
                value: 'Patientphoto',
                status: false,
                disable: false
            },
            {
                name: 'Patient Test reports',
                value: 'PatientTestreports',
                status: false,
                disable: false
            },
            {
                name: 'Consultation Fee',
                value: 'ConsultationFee',
                status: false,
                disable: false
            }
        ];
        this.SmartAssistantDetail.reg_fields = [];
        for (var j = 0; j < this.smartAssistantRegFields.length; j++) {
            if (this.smartAssistantRegFields[j].status == true) {
                this.SmartAssistantDetail.reg_fields.push(this.smartAssistantRegFields[j]);
            }
        }
        this.chooseFromLocation = false;
        this.smartAssistantDiv = true;
        this.padCustomizationOptions = [{
                name: 'Doctor name',
                value: 'Doctor_name',
                status: true
            },
            {
                name: 'Specialization',
                value: 'Specialization',
                status: true
            },
            {
                name: 'Qualifications',
                value: 'Qualifications',
                status: true
            },
            {
                name: 'Medical council registration no.',
                value: 'registration_no',
                status: true
            },
            {
                name: 'Professional affiliation',
                value: 'Professional_affiliation',
                status: true
            },
            {
                name: 'Clinic name',
                value: 'Clinic_name',
                status: true
            },
            {
                name: 'Clinic address',
                value: 'Clinic_address',
                status: true
            },
            {
                name: 'Appointment contacts',
                value: 'Appointment_contacts',
                status: true
            },
            {
                name: 'Header note (with text field)',
                value: 'Header_note',
                status: true,
                text: 'PLEASE TAKE PRIOR APPOINTMENT'
            },
            {
                name: 'Clinic schedule',
                value: 'Clinic_schedule',
                status: true
            },
            {
                name: 'Available treatments',
                value: 'Available_treatments',
                status: true
            },
            {
                name: 'Available services',
                value: 'Available_services',
                status: true
            },
            {
                name: 'Footer note (with text field)',
                value: 'Footer_note',
                status: true,
                text: 'Not for Medico-Legal Purpose'
            },
            {
                name: 'Consultation duration',
                value: 'Consultation_duration',
                status: true
            },
            {
                name: 'Signature',
                value: 'Signature',
                status: true
            },
            {
                name: 'Experience',
                value: 'Experience',
                status: true
            }
        ];
        this.doctorsOfSameClinic = [];
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.change_phone_div = false;
            _this.change_email_div = false;
            _this.change_password_div = false;
            _this.clinicDoctorDiv = false;
            _this.smartPhrarmacyDiv = false;
            _this.smartDiagnosticsDiv = false;
            _this.smartIpdDiv = false;
            _this.padCustomizationDiv = false;
            _this.activatedtab = -1;
            if (params.params == 'clinic_doctors') {
                _this.clinicDoctorDiv = true;
            }
            else if (params.params == 'smart_assistant') {
                _this.activatetab('Update smart assistant', 4);
            }
            else if (params.params == 'clinic_services') {
                _this.activatetab('Update clinic services', 5);
            }
            else if (params.params == 'change_mobile' || params.params == 'change_email' || params.params == 'change_password') {
                _this.activatetab('Update Profile', 0);
                if (params.params == 'change_mobile') {
                    _this.change_phone_div = true;
                }
                else if (params.params == 'change_email') {
                    _this.change_email_div = true;
                }
                else if (params.params == 'change_password') {
                    _this.change_password_div = true;
                }
                if (_this.change_password_div) {
                    _this.InitialDetail.password = null;
                    _this.InitialDetail.confirm_password = null;
                }
                else {
                    _this.InitialDetail.password = "Hahaha@123";
                    _this.InitialDetail.confirm_password = "Hahaha@123";
                }
            }
            else if (params.params == 'edit_clinic') {
                _this.yesform();
                _this.activatetab('Update clinic contact details', 2);
            }
            else if (params.params == 'pad_custom') {
            }
            else if (params.params == 'change_schedule') {
                _this.activatetab('Update consultation schedule', 3);
            }
            else if (params.params == 'smart_pharmacy') {
                _this.smartPhrarmacyDiv = true;
                _this.activatedtab = -1;
            }
            else if (params.params == 'smart_diagnostics') {
                _this.smartDiagnosticsDiv = true;
                _this.activatedtab = -1;
            }
            else if (params.params == 'smart_ipd') {
                _this.smartIpdDiv = true;
                _this.activatedtab = -1;
            }
            else if (params.params == 'pad_customization') {
                _this.padCustomizationDiv = true;
                _this.activatedtab = -1;
                _this.activatedtabHeading = "Prescription pad customization";
            }
            else if (params.params == 'edit_profile') {
                _this.activatetab('Update your profile', 1);
            }
            else {
                _this.router.navigate(['header-two-layout']);
            }
        });
        this.doctorPic = __WEBPACK_IMPORTED_MODULE_6__environments_environment_prod__["a" /* environment */].doctorPic;
        this.updateSmartAsstPassword = false;
        this.updateSmartPharmacyPassword = false;
        this.updateSmartIpdPassword = false;
        this.updateSmartDiagnosticsPassword = false;
        this.experience = currentYear - parseInt(this.doctorData.practicing_since);
        this.OtherClinicService = [];
        //harman end 
        //Akshay
        this.editBeds = this.formBuilder.group({
            'generalBeds': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].max(999), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].min(0)])],
            'semiPrivateBeds': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].max(999), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].min(0)])],
            'privateBeds': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].max(999), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].min(0)])],
        });
        //akshay end
        this.setAllShiftsForPreview();
        this.getAutoConsultationTimeAuto();
        console.log('Before Function');
        this.getSmartIPDDetails();
        //alert(this.ClinicContactDetail
    };
    EditProfileComponent.prototype.isJson = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    EditProfileComponent.prototype.ngAfterViewInit = function () {
        this.setCurrentPosition();
    };
    EditProfileComponent.prototype.passwordMatchValidator = function (frm) {
        return frm.controls['password'].value ===
            frm.controls['confirm'].value ? null : {
            'mismatch': true
        };
    };
    EditProfileComponent.prototype.showModal = function (event, type) {
        var _this = this;
        if (type == 'pharmacy') {
            if (event.target.checked == true) {
                //console.log(event);
                //alert('bumba');
                $('#pharmacy-credentials-modal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            }
            else {
                if (this.doctorData.type_of_doctor == 'admin_doctor') {
                    console.log(this.SmartPharmacyDetail._id);
                    __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default.a.fire({
                        title: 'Are you sure?',
                        text: "All the features associated with this service will be removed from the system",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#01B0F0',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, remove the service!'
                    }).then(function (result) {
                        if (result.value) {
                            var ob = {
                                pharmacy_id: _this.SmartPharmacyDetail._id,
                                service_type: 'pharmacy',
                                doctor_id: _this.doctorData._id
                            };
                            _this.userService.deleteServiceAccount(ob).subscribe(function (data) {
                                _this.finishPurchase(1);
                                /* this.GetDoctorDetailAndNavigate();
                                this.saveStepFiveDetails_1(1); */
                            }, function (err) {
                                _this.Clinic_Pharmacy = true;
                                console.log(err);
                            });
                        }
                        else {
                            _this.Clinic_Pharmacy = true;
                        }
                    });
                }
            }
        }
        if (type == 'diagnostics') {
            if (event.target.checked == true) {
                //this.SmartDiagnosticsDetail.name="xxx";
                //this.SmartDiagnosticsDetail.phone="0000000000";
                //console.log(event);
                //alert('bumba');
                $('#diagnostics-credentials-modal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            }
            else {
                if (this.doctorData.type_of_doctor == 'admin_doctor') {
                    console.log(this.SmartDiagnosticsDetail._id);
                    __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default.a.fire({
                        title: 'Are you sure?',
                        text: "All the features associated with this service will be removed from the system",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#01B0F0',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, remove the service!'
                    }).then(function (result) {
                        if (result.value) {
                            var ob = {
                                pharmacy_id: _this.SmartDiagnosticsDetail._id,
                                service_type: 'diagnostics',
                                doctor_id: _this.doctorData._id
                            };
                            _this.userService.deleteServiceAccount(ob).subscribe(function (data) {
                                _this.finishPurchase(1);
                                /*  this.GetDoctorDetailAndNavigate();
                                 this.saveStepFiveDetails_1(1); */
                            }, function (err) {
                                _this.Clinic_Diagnostics = true;
                                console.log(err);
                            });
                        }
                        else {
                            _this.Clinic_Pharmacy = true;
                        }
                    });
                }
            }
        }
        if (type == 'ipd') {
            if (event.target.checked == true) {
                //console.log(event);
                //alert('bumba');
                $('#ipd-credentials-modal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            }
            else {
                if (this.doctorData.type_of_doctor == 'admin_doctor') {
                    console.log(this.SmartIpdDetail._id);
                    __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default.a.fire({
                        title: 'Are you sure?',
                        text: "All the features associated with this service will be removed from the system",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#01B0F0',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, remove the service!'
                    }).then(function (result) {
                        if (result.value) {
                            var ob = {
                                pharmacy_id: _this.SmartIpdDetail._id,
                                service_type: 'ipd',
                                doctor_id: _this.doctorData._id
                            };
                            _this.userService.deleteServiceAccount(ob).subscribe(function (data) {
                                _this.finishPurchase(1);
                                /* this.GetDoctorDetailAndNavigate();
                                this.saveStepFiveDetails_1(1); */
                            }, function (err) {
                                _this.Clinic_IPD = true;
                                console.log(err);
                            });
                        }
                        else {
                            _this.Clinic_IPD = true;
                        }
                    });
                }
            }
        }
    };
    EditProfileComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    EditProfileComponent.prototype.setPrevPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = _this.addressBackup.lat;
                _this.lng = _this.addressBackup.lng;
                _this.zoom = 12;
            });
        }
    };
    EditProfileComponent.prototype.getAutoConsultationTimeAuto = function () {
        var _this = this;
        var ob = {
            doctor_id: this.doctorData._id,
        };
        this.userService.getAverageConsultationTime(ob).subscribe(function (data) {
            console.log(data);
            _this.timeFetched = data.mins;
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.getAutoConsultationTime = function () {
        var _this = this;
        if (this.SmartAssistantDetail) {
            if (this.SmartAssistantDetail.avgConsTime == 'Auto') {
                var ob = {
                    doctor_id: this.doctorData._id,
                };
                this.userService.getAverageConsultationTime(ob).subscribe(function (data) {
                    console.log(data);
                    _this.timeFetched = data.mins;
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    EditProfileComponent.prototype.yesform = function () {
        this.condition = true;
        this.formClass1 = 'active';
        this.formClass2 = '';
        this.userOwnClinicStatus = true;
        this.ClinicContactDetail.userOwnClinic = "Yes";
        this.smartAssistantDiv = true;
        this.SmartAssistantDetail.unique_id = '';
        this.SmartAssistantDetail.password = '';
        this.SmartAssistantDetail.confirm_password = '';
    };
    EditProfileComponent.prototype.noform = function () {
        this.condition = false;
        this.formClass1 = '';
        this.formClass2 = 'active';
        this.userOwnClinicStatus = false;
        this.ClinicContactDetail = {};
        this.ClinicContactDetail.userOwnClinic = "No";
        this.stepThreeForm.reset();
        this.ClinicContactDetail.clinic_id = null;
        this.chooseFromLocation = true;
        this.smartAssistantDiv = false;
        this.SmartAssistantDetail.unique_id = 'already@doctm.com';
        this.SmartAssistantDetail.password = 'NoPassword@doctm1';
        this.SmartAssistantDetail.confirm_password = 'NoPassword@doctm1';
    };
    EditProfileComponent.prototype.activatetab = function (data, i) {
        // if (i == 1) {
        //     if (!(this.InitialDetail.phone && this.InitialDetail.email && this.InitialDetail.password &&
        //         this.InitialDetail.confirm_password && this.p_false == false && this.stepOneForm.valid)) {
        //        return 
        //     }
        // } else if (i == 2) {
        //     if (!(this.stepTwoForm.valid)) {
        //        return 
        //     }
        // } else if (i == 3) {
        //     if (this.userOwnClinicStatus == false && this.ClinicContactDetail.clinic_id == null) {
        //        return 
        //     // } else if (!(this.stepThreeForm.valid && this.userOwnClinicStatus == true && this.ClinicContactDetail.clinic_id != null)) {
        //     } else if (!this.stepThreeForm.valid && this.userOwnClinicStatus == true || this.ClinicContactDetail.clinic_id == null) {
        //         return 
        //     }
        // } else if (i == 4) {
        //     if (!(this.scheduleArray.length > 0)) {
        //        return 
        //     }
        // } else if (i == 5) {
        //     if (!this.SmartAssistantDetail.smartAssistant || (this.SmartAssistantDetail.smartAssistant == 'Yes' && !this.stepFourForm.valid)) {
        //         return 
        //     }
        // } else if (i == 7) {
        //     if (!this.ClinicServicesDetailObject.clinicServicesStatus) {
        //         return 
        //     } else if (this.ClinicServicesDetailObject.clinicServicesStatus == 'Yes') {
        //         if (this.private_beds < 0 && this.Clinic_IPD) {
        //             this.toastr.warning('Invalid number of private beds', 'Warning')
        //             return
        //         } else if (this.semi_private_beds < 0 && this.Clinic_IPD) {
        //             this.toastr.warning('Invalid number of semi private beds', 'Warning')
        //             return
        //         } else if (this.general_beds < 0 && this.Clinic_IPD) {
        //             this.toastr.warning('Invalid number of general beds', 'Warning')
        //             return
        //         }
        //         if ((this.OtherClinicService == null || this.OtherClinicService == undefined || this.OtherClinicService == '' || this.OtherClinicService.length < 1) &&
        //             this.otherSelected == true) {
        //             this.toastr.warning('Please enter value in "Clinic Diagnostics"', 'Warning')
        //             return
        //         }
        //         if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
        //             this.toastr.warning('Please select atleast one value in "Clinic Diagnostics"', 'Warning')
        //             return
        //         }
        //     }
        // } else if (i == 6) {
        //     if (!(this.languageSelected)) {
        //        return 
        //     }
        // } 
        this.activatedtab = i;
        this.activatedtabHeading = data;
    };
    EditProfileComponent.prototype.increasetab = function () {
        if (this.activatedtab < 7) {
            this.activatedtab = this.activatedtab + 1;
        }
    };
    EditProfileComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i == 3) {
            if (this.scheduleArray.length > 0) {
                return 'completed';
            }
            else {
                return '';
            }
        }
        else if (i == 0) {
            if (this.InitialDetail.phone && this.InitialDetail.email && this.InitialDetail.password &&
                this.InitialDetail.confirm_password && this.p_false == false && this.stepOneForm.valid) {
                return 'completed';
            }
            else {
                return '';
            }
        }
        else if (i == 1) {
            if (this.stepTwoForm.valid) {
                return 'completed';
            }
            else {
                return '';
            }
        }
        else if (i == 2) {
            if (this.userOwnClinicStatus == false && this.ClinicContactDetail.clinic_id != null) {
                return 'completed';
            }
            else if (this.stepThreeForm.valid && this.userOwnClinicStatus == true && this.ClinicContactDetail.clinic_id != null) {
                return 'completed';
            }
            else {
                return '';
            }
        }
        else if (i == 4) {
            if (this.SmartAssistantDetail.smartAssistant == 'No') {
                return 'completed';
            }
            else if (this.stepFourForm.valid && this.SmartAssistantDetail.smartAssistant == 'Yes') {
                return 'completed';
            }
            else {
                return '';
            }
        }
        else if (i == 5) {
            if (this.ClinicServicesDetailObject.clinicServicesStatus == 'No') {
                return 'completed';
            }
            else if (this.ClinicServicesDetailObject.clinicServicesStatus == 'Yes') {
                if (this.private_beds < 0 && this.Clinic_IPD) {
                    this.toastr.warning('Invalid number of private beds', 'Warning');
                    return;
                }
                else if (this.semi_private_beds < 0 && this.Clinic_IPD) {
                    this.toastr.warning('Invalid number of semi private beds', 'Warning');
                    return;
                }
                else if (this.general_beds < 0 && this.Clinic_IPD) {
                    this.toastr.warning('Invalid number of general beds', 'Warning');
                    return;
                }
                /*  if ((this.OtherClinicService == null || this.OtherClinicService == undefined || this.OtherClinicService == '' || this.OtherClinicService.length < 1) &&
                     this.otherSelected == true) {
                     this.toastr.warning('Please enter value in "Clinic Diagnostics"', 'Warning')
                     return
                 } */
                // if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
                if (0) {
                    this.toastr.warning('Please select atleast one value in "Clinic Diagnostics"', 'Warning');
                    return;
                }
                return 'completed';
            }
            else {
                return '';
            }
        }
        else if (i == 7) {
            if (this.languageSelected) {
                return 'completed';
            }
            else {
                return '';
            }
        }
    };
    EditProfileComponent.prototype.addShift = function (type) {
        if (this.show_new_shift == false) {
            this.show_new_shift = true;
            this.myObject.fromTime = {};
            this.myObject.fromTime.minute = 0;
            this.myObject.fromTime.hour = this.myObject.shifts[this.myObject.shifts.length - 1].toTime.hour;
            // this.myObject.fromTime.hour = 9
            this.myObject.toTime = {};
            this.myObject.toTime.minute = 0;
            this.myObject.toTime.hour = this.myObject.shifts[this.myObject.shifts.length - 1].toTime.hour + 1;
            // this.myObject.toTime.hour = 18
        }
        else {
            var boolean = false;
            if (this.myObject.fromTime == null || this.myObject.fromTime == '' || this.myObject.fromTime == undefined ||
                this.myObject.toTime == null || this.myObject.toTime == '' || this.myObject.toTime == undefined) {
                this.toastr.warning('Invalid time selected', 'Warning');
                boolean = true;
            }
            // console.log(this.myObject)
            // if(this.myObject.fromTime.hour>=this.myObject.toTime.hour || (this.myObject.fromTime.hour==this.myObject.toTime.hour
            //  && this.myObject.fromTime.minute>=this.myObject.toTime.minute)){
            //     this.toastr.warning('Invalid Time','Warning')
            //     return
            // }
            if (this.myObject.fromTime.hour > this.myObject.toTime.hour) {
                this.toastr.warning('Invalid Time', 'Warning');
                return;
            }
            else if (this.myObject.fromTime.hour == this.myObject.toTime.hour &&
                this.myObject.fromTime.minute >= this.myObject.toTime.minute) {
                this.toastr.warning('Invalid Time', 'Warning');
                return;
            }
            for (var i = 0; i < this.myObject.shifts.length; i++) {
                if (this.myObject.shifts[i].fromTime.hour == this.myObject.fromTime.hour &&
                    this.myObject.shifts[i].fromTime.minute == this.myObject.fromTime.minute &&
                    this.myObject.shifts[i].toTime.minute == this.myObject.toTime.minute &&
                    this.myObject.shifts[i].toTime.minute == this.myObject.toTime.minute) {
                    boolean = true;
                    this.toastr.warning('Same schedule already exists', 'Warning');
                    return;
                }
                if (this.myObject.shifts[i].fromTime.hour > this.myObject.shifts[i].toTime.hour) {
                    this.toastr.warning('Invalid Time', 'Warning');
                    return;
                }
                else if (this.myObject.shifts[i].fromTime.hour == this.myObject.shifts[i].toTime.hour &&
                    this.myObject.shifts[i].fromTime.minute >= this.myObject.shifts[i].toTime.minute) {
                    this.toastr.warning('Invalid Time', 'Warning');
                    return;
                }
            }
            if (boolean == false) {
                var object = {
                    fromTime: this.myObject.fromTime,
                    toTime: this.myObject.toTime
                };
                this.show_new_shift = false;
                this.myObject.shifts.push(object);
                this.myObject.fromTime = {};
                this.myObject.fromTime.minute = 0;
                this.myObject.fromTime.hour = this.myObject.shifts[this.myObject.shifts.length - 1].toTime.hour + 1;
                this.myObject.toTime = {};
                this.myObject.toTime.minute = 0;
                this.myObject.toTime.hour = this.myObject.shifts[this.myObject.shifts.length - 1].toTime.hour + 1;
                if (type == 'show') {
                    this.show_new_shift = true;
                }
                this.myObject.show_new_shift = this.show_new_shift;
            }
        }
        //Akshay
        // console.log(this.myObject.shifts)
        // console.log(this.myObject.shifts[i].fromTime.hour)
        // console.log(this.myObject.shifts[i].toTime.hour)
        //Akshay
    };
    EditProfileComponent.prototype.hideNewShiftSchedule = function (i) {
        this.scheduleArray[i].show_new_shift = false;
    };
    EditProfileComponent.prototype.addShiftInArray = function (i) {
        if (this.scheduleArray[i].show_new_shift == false) {
            this.scheduleArray[i].show_new_shift = true;
            this.scheduleArray[i].fromTime = {};
            this.scheduleArray[i].fromTime.hour = this.scheduleArray[this.scheduleArray.length - 1].toTime.hour + 1;
            this.scheduleArray[i].fromTime.minute = 0;
            this.scheduleArray[i].toTime = {};
            this.scheduleArray[i].toTime.hour = 0;
            this.scheduleArray[i].toTime.minute = this.scheduleArray[this.scheduleArray.length - 1].toTime.hour + 1;
        }
        else {
            var boolean = false;
            if (this.scheduleArray[i].fromTime == null || this.scheduleArray[i].fromTime == '' || this.scheduleArray[i].fromTime == undefined ||
                this.scheduleArray[i].toTime == null || this.scheduleArray[i].toTime == '' || this.scheduleArray[i].toTime == undefined) {
                this.toastr.warning('Invalid time selected', 'Warning');
                boolean = true;
            }
            if (this.scheduleArray.length > 0) {
                for (var j = 0; j < this.scheduleArray.length; j++) {
                    for (var k = 0; k < this.scheduleArray[i].shifts.length; k++) {
                        if (this.scheduleArray[j].shifts[k].fromTime.hour == this.scheduleArray[i].fromTime.hour &&
                            this.scheduleArray[j].shifts[k].fromTime.minute == this.scheduleArray[i].fromTime.minute &&
                            this.scheduleArray[j].shifts[k].toTime.minute == this.scheduleArray[i].toTime.minute &&
                            this.scheduleArray[j].shifts[k].toTime.minute == this.scheduleArray[i].toTime.minute) {
                            boolean = true;
                            this.toastr.warning('Same schedule already exists', 'Warning');
                            return;
                        }
                    }
                }
            }
            if (boolean == false) {
                var object = {
                    fromTime: this.scheduleArray[i].fromTime,
                    toTime: this.scheduleArray[i].toTime
                };
                this.scheduleArray[i].shifts.push(object);
                this.scheduleArray[i].fromTime = {};
                this.scheduleArray[i].fromTime.hour = this.scheduleArray[this.scheduleArray.length - 1].toTime.hour + 1;
                this.scheduleArray[i].fromTime.minute = 0;
                this.scheduleArray[i].toTime = {};
                this.scheduleArray[i].toTime.hour = this.scheduleArray[this.scheduleArray.length - 1].toTime.hour + 1;
                this.scheduleArray[i].toTime.minute = 0;
                this.scheduleArray[i].show_new_shift = false;
            }
            console.log(this.scheduleArray);
        }
    };
    EditProfileComponent.prototype.deleteShift = function (j) {
        this.myObject.shifts.splice(j, 1);
    };
    EditProfileComponent.prototype.deleteShiftFromArray = function (i, j) {
        this.scheduleArray[i].shifts.splice(j, 1);
    };
    EditProfileComponent.prototype.deleteSchedule = function (i) {
        this.scheduleArray.splice(i, 1);
        this.resetButtonsAfterAnyChangeInSchedule();
    };
    EditProfileComponent.prototype.addAnotherSchedule = function () {
        this.show_new_shift = true;
        if (this.show_new_schedule == false) {
            this.show_new_schedule = true;
        }
        else {
            var boolean = false;
            if (this.myObject.Monday == false &&
                this.myObject.Tuesday == false &&
                this.myObject.Wednesday == false &&
                this.myObject.Thursday == false &&
                this.myObject.Friday == false &&
                this.myObject.Saturday == false &&
                this.myObject.Sunday == false) {
                boolean = true;
                this.toastr.warning('Please select atleast one day', 'Warning');
                return;
            }
            if (this.myObject.shifts.length < 1) {
                boolean = true;
                this.toastr.warning('Please enter atleast one shift', 'Warning');
                return;
            }
            for (var i = 0; i < this.scheduleArray.length; i++) {
                if (this.scheduleArray[i].Monday == false &&
                    this.scheduleArray[i].Tuesday == false &&
                    this.scheduleArray[i].Wednesday == false &&
                    this.scheduleArray[i].Thursday == false &&
                    this.scheduleArray[i].Friday == false &&
                    this.scheduleArray[i].Saturday == false &&
                    this.scheduleArray[i].Sunday == false) {
                    boolean = true;
                    this.toastr.warning('Please select atleast one day', 'Warning');
                    return;
                }
                if (this.scheduleArray[i].shifts.length < 1) {
                    boolean = true;
                    this.toastr.warning('Please enter atleast one shift', 'Warning');
                    return;
                }
            }
            if (boolean == false) {
                this.scheduleArray.push(this.myObject);
                console.log(this.scheduleArray);
                this.resetButtonsAfterAnyChangeInSchedule();
            }
        }
    };
    EditProfileComponent.prototype.changeDay = function (data, status, i) {
        if (data == false && status == 1) {
            this.myObject.Monday = false;
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Monday = false;
                }
            }
            this.mondayDisabled = false;
        }
        else if (data == true && status == 1) {
            this.myObject.Monday = false;
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Monday = false;
                }
            }
            this.mondayDisabled = true;
        }
        if (data == false && status == 2) {
            this.myObject.Tuesday = false;
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Tuesday = false;
                }
            }
            this.tuesdayDisabled = false;
        }
        else if (data == true && status == 2) {
            this.myObject.Tuesday = false;
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Tuesday = false;
                }
            }
            this.tuesdayDisabled = true;
        }
        if (data == false && status == 3) {
            this.myObject.Wednesday = false;
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Wednesday = false;
                }
            }
            this.wednesdayDisabled = false;
        }
        else if (data == true && status == 3) {
            this.myObject.Wednesday = false;
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Wednesday = false;
                }
            }
            this.wednesdayDisabled = true;
        }
        if (data == false && status == 4) {
            this.myObject.Thursday = false;
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Thursday = false;
                }
            }
            this.thursdayDisabled = false;
        }
        else if (data == true && status == 4) {
            this.myObject.Thursday = false;
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Thursday = false;
                }
            }
            this.thursdayDisabled = true;
        }
        if (data == false && status == 5) {
            this.myObject.Friday = false;
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Friday = false;
                }
            }
            this.fridayDisabled = false;
        }
        else if (data == true && status == 5) {
            this.myObject.Friday = false;
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Friday = false;
                }
            }
            this.fridayDisabled = true;
        }
        if (data == false && status == 6) {
            this.myObject.Saturday = false;
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Saturday = false;
                }
            }
            this.saturdayDisabled = false;
        }
        else if (data == true && status == 6) {
            this.myObject.Saturday = false;
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Saturday = false;
                }
            }
            this.saturdayDisabled = true;
        }
        if (data == false && status == 7) {
            this.myObject.Sunday = false;
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Sunday = false;
                }
            }
            this.sundayDisabled = false;
        }
        else if (data == true && status == 7) {
            this.myObject.Sunday = false;
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Sunday = false;
                }
            }
            this.sundayDisabled = true;
        }
    };
    EditProfileComponent.prototype.resetButtonsAfterAnyChangeInSchedule = function () {
        this.myObject = {};
        this.myObject.fromTime = {};
        this.myObject.fromTime.minute = 0;
        this.myObject.fromTime.hour = 9; //this.myObject.shifts[this.myObject.shifts.length-1].toTime.hour
        this.myObject.toTime = {};
        this.myObject.toTime.minute = 0;
        this.myObject.toTime.hour = 18; //this.myObject.shifts[this.myObject.shifts.length-1].toTime.hour + 1
        this.myObject.shifts = [];
        this.myObject.Monday = false;
        this.myObject.Tuesday = false;
        this.myObject.Wednesday = false;
        this.myObject.Thursday = false;
        this.myObject.Friday = false;
        this.myObject.Saturday = false;
        this.myObject.Sunday = false;
        this.mondayDisabled = false;
        this.tuesdayDisabled = false;
        this.wednesdayDisabled = false;
        this.thursdayDisabled = false;
        this.fridayDisabled = false;
        this.saturdayDisabled = false;
        this.sundayDisabled = false;
        for (var i = 0; i < this.scheduleArray.length; i++) {
            if (this.scheduleArray[i].Monday == true) {
                this.mondayDisabled = true;
            }
            if (this.scheduleArray[i].Tuesday == true) {
                this.tuesdayDisabled = true;
            }
            if (this.scheduleArray[i].Wednesday == true) {
                this.wednesdayDisabled = true;
            }
            if (this.scheduleArray[i].Thursday == true) {
                this.thursdayDisabled = true;
            }
            if (this.scheduleArray[i].Friday == true) {
                this.fridayDisabled = true;
            }
            if (this.scheduleArray[i].Saturday == true) {
                this.saturdayDisabled = true;
            }
            if (this.scheduleArray[i].Sunday == true) {
                this.sundayDisabled = true;
            }
        }
    };
    EditProfileComponent.prototype.saveConsultationSchedule = function () {
        var _this = this;
        var boolean = false;
        if (this.show_new_schedule == true) {
            if (this.myObject.Monday == false &&
                this.myObject.Tuesday == false &&
                this.myObject.Wednesday == false &&
                this.myObject.Thursday == false &&
                this.myObject.Friday == false &&
                this.myObject.Saturday == false &&
                this.myObject.Sunday == false) {
                boolean = true;
                this.toastr.warning('Please select atleast one day', 'Warning');
            }
            if (this.myObject.shifts.length < 1) {
                boolean = true;
                this.toastr.warning('Please enter atleast one shift', 'Warning');
            }
        }
        for (var i = 0; i < this.myObject.shifts.length; i++) {
            if (this.myObject.shifts[i].fromTime.hour > this.myObject.shifts[i].toTime.hour) {
                this.toastr.warning('Invalid Time', 'Warning');
                return;
            }
            else if (this.myObject.shifts[i].fromTime.hour == this.myObject.shifts[i].toTime.hour &&
                this.myObject.shifts[i].fromTime.minute >= this.myObject.shifts[i].toTime.minute) {
                this.toastr.warning('Invalid Time', 'Warning');
                return;
            }
        }
        if (this.scheduleArray.length > 0) {
            for (var i = 0; i < this.scheduleArray.length; i++) {
                if (this.scheduleArray[i].Monday == false &&
                    this.scheduleArray[i].Tuesday == false &&
                    this.scheduleArray[i].Wednesday == false &&
                    this.scheduleArray[i].Thursday == false &&
                    this.scheduleArray[i].Friday == false &&
                    this.scheduleArray[i].Saturday == false &&
                    this.scheduleArray[i].Sunday == false) {
                    boolean = true;
                    this.toastr.warning('Please select atleast one day', 'Warning');
                    return;
                }
                if (this.scheduleArray[i].shifts.length < 1) {
                    boolean = true;
                    this.toastr.warning('Please enter atleast one shift', 'Warning');
                    return;
                }
                for (var j = 0; j < this.scheduleArray[i].shifts.length; j++) {
                    if (this.scheduleArray[i].shifts[j].fromTime.hour > this.scheduleArray[i].shifts[j].toTime.hour) {
                        this.toastr.warning('Invalid Time', 'Warning');
                        return;
                    }
                    else if (this.scheduleArray[i].shifts[j].fromTime.hour == this.scheduleArray[i].shifts[j].toTime.hour &&
                        this.scheduleArray[i].shifts[j].fromTime.minute >= this.scheduleArray[i].shifts[j].toTime.minute) {
                        this.toastr.warning('Invalid Time', 'Warning');
                        return;
                    }
                }
            }
        }
        if (boolean == false) {
            this.loading = true;
            if (this.show_new_schedule == true) {
                this.scheduleArray.push(this.myObject);
            }
            this.show_new_schedule = false;
            var toUpdate = {
                consultation_schedule: this.scheduleArray
            };
            var ob = {
                itemId: this.doctorData.itemId,
                toUpdate: toUpdate
            };
            this.userService.EditDoctorProfile(ob).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.toastr.success(data.message, 'Success');
                    _this.GetDoctorDetailAndNavigateToHome();
                }
                else {
                    _this.toastr.error(data.message, 'Error');
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    EditProfileComponent.prototype.onKey = function (event) {
        this.values = event.target.value;
        if (this.InitialDetail.password == this.values) {
            this.p_false = false;
        }
        else {
            this.p_false = true;
        }
    };
    EditProfileComponent.prototype.closeModal = function () {
        $("#change-password").modal("hide");
        this.verifyChnagePassword = "";
    };
    EditProfileComponent.prototype.addClass = function () {
        this.classEnabled = true;
    };
    EditProfileComponent.prototype.openOTPModal = function () {
        var _this = this;
        if (this.doctorDetail.phone == this.InitialDetail.phone && this.doctorDetail.email == this.InitialDetail.email && !this.change_password_div) {
            this.toastr.warning("No changes found", "Warning");
            return;
        }
        else {
            if (this.change_password_div && (this.InitialDetail.current_password == null || this.InitialDetail.current_password == '' || this.InitialDetail.current_password.trim().length < 1)) {
                this.toastr.warning("Enter current password", "Warning");
                return;
            }
            if (parseInt(this.optTochangePassword) == this.verifyChnagePassword) {
                if (this.change_password_div) {
                    var ob = {
                        itemId: this.doctorData.itemId,
                        InitialDetail: this.InitialDetail
                    };
                    this.userService.ChangePasswordDoctor(ob).subscribe(function (data) {
                        console.log(data);
                        _this.loading = false;
                        if (data.response == true) {
                            _this.toastr.success(data.message, 'Success');
                            $("#change-password").modal("hide");
                            _this.verifyChnagePassword = "";
                            _this.ngOnInit();
                            localStorage.removeItem(localStorage['doctorDetails']);
                            //localStorage.clear();
                            ///this.router.navigate(['header-one-layout/smartClinicLogin']); 
                            //this.router.navigateByUrl('/header-two-layout/dashboard');
                        }
                        else {
                            _this.toastr.error(data.message, 'Error');
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    this.otpRes = {};
                    this.loading = true;
                    var type;
                    if (this.change_phone_div) {
                        type = 'phone';
                    }
                    if (this.change_email_div) {
                        type = 'email';
                    }
                    if (this.change_password_div) {
                        type = 'passsword';
                    }
                    var ob = {
                        itemId: this.doctorData.itemId,
                        InitialDetail: this.InitialDetail,
                        type: type
                    };
                    this.userService.GenerateOTPUpdate(ob).subscribe(function (data) {
                        console.log(data);
                        _this.loading = false;
                        if (data.response == true) {
                            _this.otpRes.otpEmail = data.otpEmail;
                            _this.otpRes.otpPhone = data.otpPhone;
                            _this.toastr.success(data.message, 'Success');
                            if (type == 'phone') {
                                _this.otpEmail = data.otpEmail;
                            }
                            else if (type == 'email') {
                                _this.otpPhone = data.otpPhone;
                            }
                            else if (type == 'passsword') {
                            }
                            $("#myModal").modal("show");
                        }
                        else {
                            _this.toastr.error(data.message, 'Error');
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
            else {
                this.toastr.error('Wrong OTP', 'Error');
            }
        }
    };
    EditProfileComponent.prototype.verifyOTP = function () {
        var _this = this;
        if (this.otpPhone == parseInt(this.otpRes.otpPhone) && this.otpEmail == parseInt(this.otpRes.otpEmail)) {
            var ob = {
                itemId: this.doctorData.itemId,
                InitialDetail: this.InitialDetail
            };
            this.userService.UpdateDoctorEmailPhone(ob).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    $("#myModal").modal("hide");
                    _this.toastr.success(data.message, 'Success');
                    _this.GetDoctorDetailAndNavigateToHome();
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.toastr.error('Wrong OTP entered', 'Error');
        }
    };
    EditProfileComponent.prototype.saveStepOneDetails = function () {
        if (this.activatedtab < 7) {
            this.activatedtab = this.activatedtab + 1;
            console.log(this.InitialDetail);
        }
    };
    EditProfileComponent.prototype.onupload = function (evt) {
        var _this = this;
        this.ProfileDetail.selectedImage = null;
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        var file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
            return;
        }
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            var mainImage = fr.result;
            _this.ProfileDetail.selectedImage = mainImage;
            _this.ProfileDetail.imageAlready = false;
        };
        fr.readAsDataURL(file);
    };
    EditProfileComponent.prototype.updateEmailOTP = function () {
        var _this = this;
        if (this.generatedOTP == this.verifyEmailOTP) {
            $("#EmailOTPModal").modal("hide");
            this.loading = true;
            var ob = {
                'email_address': this.user_id,
                'itemId': this.doctorData.itemId
            };
            this.userService.GenerateOTPChangeEmail(ob).subscribe(function (data) {
                console.log(data);
                //this.loading = false
                if (data.response == true) {
                    var ob1 = {
                        itemId: _this.doctorData.itemId,
                        email_address: _this.user_id
                    };
                    _this.userService.UpdateDoctorUserID(ob1).subscribe(function (data) {
                        console.log(data);
                        _this.loading = false;
                        if (data.response == true) {
                            _this.toastr.success('Phone Number has been updated successfully.', 'Success');
                            _this.GetDoctorDetailAndNavigateToHome();
                        }
                    }, function (err) {
                        _this.loading = false;
                        console.log(err);
                    });
                }
                else {
                    _this.toastr.error(data.message, 'Error');
                }
            }, function (err) {
                _this.loading = false;
                console.log(err);
            });
        }
        else {
            this.toastr.error('Incorrect OTP', 'Error');
        }
    };
    EditProfileComponent.prototype.updateProfileOTP = function () {
        var _this = this;
        if (this.generatedOTP == this.verifyNonAdminDoctor) {
            $("#OTPModal").modal("hide");
            this.ProfileDetail.doctm_clinic_id = this.clinicid;
            if (this.other_specialization == true && (this.ProfileDetail.other_specialization == null || this.ProfileDetail.other_specialization == '' ||
                this.ProfileDetail.other_specialization == undefined)) {
                this.toastr.warning("Invalid Specialization", "Warning");
            }
            else {
                if (this.other_specialization == true) {
                    this.ProfileDetail.specialization = this.ProfileDetail.other_specialization;
                }
                console.log(this.ProfileDetail);
                if (this.ProfileDetail.type_of_doctor == "normal_doctor") {
                    this.ProfileDetail.doctm_clinic_id;
                }
                var ob = {
                    itemId: this.doctorData.itemId,
                    ProfileDetail: this.ProfileDetail
                };
                this.loading = true;
                this.userService.UpdateDoctorClinicID(ob).subscribe(function (data) {
                    console.log(data);
                    _this.loading = false;
                    if (data.response == true) {
                        _this.toastr.success('Clinic ID changed successfully. Please login again to continue!', 'Success');
                        _this.signOut();
                        //  this.GetDoctorDetailAndNavigateToHome()
                    }
                    else {
                        _this.toastr.error(data.message, 'Error');
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            this.toastr.error('Wrong OTP', 'Error');
        }
    };
    EditProfileComponent.prototype.signOut = function () {
        localStorage.removeItem(localStorage['doctorDetails']);
        localStorage.removeItem('isLoggedinDoctor');
        this.router.navigate(['/']);
    };
    EditProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        if (this.generatedOTP == this.verifyNonAdminDoctor) {
            $("#OTPModal").modal("hide");
            if (this.other_specialization == true && (this.ProfileDetail.other_specialization == null || this.ProfileDetail.other_specialization == '' ||
                this.ProfileDetail.other_specialization == undefined)) {
                this.toastr.warning("Invalid Specialization", "Warning");
            }
            else {
                if (this.other_specialization == true) {
                    this.ProfileDetail.specialization = this.ProfileDetail.other_specialization;
                }
                console.log(this.ProfileDetail);
                if (this.ProfileDetail.type_of_doctor == "normal_doctor") {
                    this.ProfileDetail.doctm_clinic_id;
                }
                var ob = {
                    itemId: this.doctorData.itemId,
                    ProfileDetail: this.ProfileDetail
                };
                this.loading = true;
                this.userService.UpdateDoctorPersonalDetail(ob).subscribe(function (data) {
                    console.log(data);
                    _this.loading = false;
                    if (data.response == true) {
                        _this.toastr.success(data.message, 'Success');
                        _this.GetDoctorDetailAndNavigateToHome();
                    }
                    else {
                        _this.toastr.error(data.message, 'Error');
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            this.toastr.error('Wrong OTP', 'Error');
        }
    };
    EditProfileComponent.prototype.changeClinicIdOTP = function (event) {
        if (event == 'clinicid') {
            $('#ClinicIdModal').modal('hide');
            this.GenerateOtpToChangeClinicId();
            $("#OTPModal").modal("show");
        }
        else {
            $;
            this.GenerateOTPChangeEmail();
        }
    };
    EditProfileComponent.prototype.saveStepTwoDetails = function () {
        var _this = this;
        if (JSON.parse(localStorage['doctorDetails']).clinic_details.clinic_id != this.ProfileDetail.doctm_clinic_id) {
            this.GenerateOtpToChangeClinicId();
            $("#OTPModal").modal("show");
        }
        else {
            if (this.other_specialization == true && (this.ProfileDetail.other_specialization == null || this.ProfileDetail.other_specialization == '' ||
                this.ProfileDetail.other_specialization == undefined)) {
                this.toastr.warning("Invalid Specialization", "Warning");
            }
            else {
                if (this.other_specialization == true) {
                    this.ProfileDetail.specialization = this.ProfileDetail.other_specialization;
                }
                console.log(this.ProfileDetail);
                if (this.ProfileDetail.type_of_doctor == "normal_doctor") {
                    this.ProfileDetail.doctm_clinic_id;
                }
                var ob = {
                    itemId: this.doctorData.itemId,
                    ProfileDetail: this.ProfileDetail
                };
                this.loading = true;
                this.userService.UpdateDoctorPersonalDetail(ob).subscribe(function (data) {
                    console.log(data);
                    _this.loading = false;
                    if (data.response == true) {
                        _this.toastr.success(data.message, 'Success');
                        _this.GetDoctorDetailAndNavigateToHome();
                    }
                    else {
                        _this.toastr.error(data.message, 'Error');
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    EditProfileComponent.prototype.saveStepThreeDetails = function () {
        var _this = this;
        this.ClinicContactDetail.lat = this.lat;
        this.ClinicContactDetail.lng = this.lng;
        var toUpdate = {
            clinic_details: this.ClinicContactDetail
        };
        var ob = {
            itemId: this.doctorData.itemId,
            toUpdate: toUpdate
        };
        this.loading = true;
        this.userService.EditDoctorProfile(ob).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.toastr.success(data.message, 'Success');
                _this.GetDoctorDetailAndNavigateToHome();
            }
            else {
                _this.toastr.error(data.message, 'Error');
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.onKey1 = function (event) {
        this.values1 = event.target.value;
        if (this.SmartAssistantDetail.password == this.values1) {
            this.p_false1 = false;
        }
        else {
            this.p_false1 = true;
        }
    };
    EditProfileComponent.prototype.saveStepFourDetails = function (status) {
        var _this = this;
        if (this.SmartAssistantDetail.password !== this.SmartAssistantDetail.confirm_password) {
            this.p_false1 = true;
        }
        else {
            this.SmartAssistantDetail.smartAssistant = "Yes";
            if (!this.SmartAssistantDetail.id) {
                this.SmartAssistantDetail.id = 0;
            }
            var object = {
                doctor_id: this.doctorData.itemId,
                doctm_clinic_id: this.doctorData.doctm_clinic_id,
                SmartAssistantDetail: this.SmartAssistantDetail
            };
            this.userService.UpdateSmartAssistantByDoctor(object).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    _this.toastr.success(data.message, 'Success');
                    _this.GetDoctorDetailAndNavigateToHome();
                }
                else {
                    _this.toastr.error(data.message, 'Error');
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    EditProfileComponent.prototype.push = function (data, i) {
        if (data != 1) {
            if (this.ClinicServicesDetail.indexOf(data) == -1) {
                this.ClinicServicesDetail.push(data);
                this.clinicDiagnosticsList[i].status = true;
            }
            else {
                var index = this.ClinicServicesDetail.indexOf(data);
                this.clinicDiagnosticsList[i].status = false;
                var a = this.ClinicServicesDetail.splice(index, 1);
            }
        }
        if (this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
            this.Clinic_Diagnostics = false;
        }
        else {
            this.Clinic_Diagnostics = true;
        }
        //  console.log(this.ClinicServicesDetail)
    };
    EditProfileComponent.prototype.finishPurchase = function (status) {
        var _this = this;
        var boolean = false;
        console.log("Selected Services");
        console.log(this.Clinic_Diagnostics);
        console.log(this.Clinic_Pharmacy);
        console.log(this.Clinic_IPD);
        if (this.Clinic_Diagnostics == false) {
            this.ClinicServicesDetail = [];
            for (var i = 0; i < this.clinicDiagnosticsList.length; i++) {
                this.clinicDiagnosticsList[i].status = false;
            }
        }
        if (status == 1) {
            if (this.private_beds < 0 && this.Clinic_IPD) {
                boolean = true;
                this.toastr.warning('Invalid number of private beds', 'Warning');
                return;
            }
            else if (this.semi_private_beds < 0 && this.Clinic_IPD) {
                boolean = true;
                this.toastr.warning('Invalid number of semi private beds', 'Warning');
                return;
            }
            else if (this.general_beds < 0 && this.Clinic_IPD) {
                boolean = true;
                this.toastr.warning('Invalid number of general beds', 'Warning');
                return;
            }
            /*    if ((this.OtherClinicService == null || this.OtherClinicService == undefined || this.OtherClinicService == '' || this.OtherClinicService.length < 1) &&
                   this.otherSelected == true){
                   boolean = true;
                   this.toastr.warning('Please enter value in "Clinic Diagnostics"', 'Warning')
                   return
               } */
            /* if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
                boolean = true;
                this.toastr.warning('Please select atleast one value in "Clinic Diagnostics"', 'Warning')
                return
            } */
            if (!this.Clinic_IPD) {
                this.private_beds = null;
                this.general_beds = null;
                this.semi_private_beds = null;
            }
        }
        if (this.activatedtab < 7 && boolean == false) {
            if (this.otherSelected == false) {
                this.OtherClinicService = [];
            }
            if (status == 0) {
                this.ClinicServicesDetailObject = {};
                this.ClinicServicesDetailObject.clinicServicesStatus = "No";
                this.ClinicServicesDetail = [];
                this.Clinic_Diagnostics = false;
                this.Clinic_Pharmacy = false;
                this.Clinic_IPD = false;
                this.private_beds = null;
                this.semi_private_beds = null;
                this.general_beds = null;
                for (var i = 0; i < this.clinicDiagnosticsList.length; i++) {
                    this.clinicDiagnosticsList[i].status = false;
                }
            }
            else {
                this.ClinicServicesDetailObject = {
                    ClinicServicesDetail: this.ClinicServicesDetail,
                    Clinic_Diagnostics: this.Clinic_Diagnostics,
                    Clinic_Pharmacy: this.Clinic_Pharmacy,
                    Clinic_IPD: this.Clinic_IPD,
                    private_beds: this.private_beds,
                    semi_private_beds: this.semi_private_beds,
                    general_beds: this.general_beds,
                    clinicServicesStatus: "Yes",
                    OtherClinicService: this.OtherClinicService
                };
            }
            console.log(this.ClinicServicesDetailObject);
            var toUpdate = {
                clinic_services: this.ClinicServicesDetailObject
            };
            var ob = {
                itemId: this.doctorData.itemId,
                toUpdate: toUpdate
            };
            this.loading = true;
            this.userService.EditDoctorProfile(ob).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.toastr.success(data.message, 'Success');
                    _this.GetDoctorDetailAndNavigateToHome();
                }
                else {
                    _this.toastr.error(data.message, 'Error');
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    EditProfileComponent.prototype.finalizePurchase = function (status) {
        var boolean = false;
        console.log("Selected Services");
        console.log(this.Clinic_Diagnostics);
        console.log(this.Clinic_Pharmacy);
        console.log(this.Clinic_IPD);
        if (this.Clinic_Diagnostics == false) {
            this.ClinicServicesDetail = [];
            for (var i = 0; i < this.clinicDiagnosticsList.length; i++) {
                this.clinicDiagnosticsList[i].status = false;
            }
        }
        if (status == 1) {
            if (this.private_beds < 0 && this.Clinic_IPD) {
                boolean = true;
                this.toastr.warning('Invalid number of private beds', 'Warning');
                return;
            }
            else if (this.semi_private_beds < 0 && this.Clinic_IPD) {
                boolean = true;
                this.toastr.warning('Invalid number of semi private beds', 'Warning');
                return;
            }
            else if (this.general_beds < 0 && this.Clinic_IPD) {
                boolean = true;
                this.toastr.warning('Invalid number of general beds', 'Warning');
                return;
            }
            /*    if ((this.OtherClinicService == null || this.OtherClinicService == undefined || this.OtherClinicService == '' || this.OtherClinicService.length < 1) &&
                   this.otherSelected == true){
                   boolean = true;
                   this.toastr.warning('Please enter value in "Clinic Diagnostics"', 'Warning')
                   return
               } */
            /* if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
                boolean = true;
                this.toastr.warning('Please select atleast one value in "Clinic Diagnostics"', 'Warning')
                return
            } */
            if (!this.Clinic_IPD) {
                this.private_beds = null;
                this.general_beds = null;
                this.semi_private_beds = null;
            }
        }
        if (this.activatedtab < 7 && boolean == false) {
            if (this.otherSelected == false) {
                this.OtherClinicService = [];
            }
            if (status == 0) {
                this.ClinicServicesDetailObject = {};
                this.ClinicServicesDetailObject.clinicServicesStatus = "No";
                this.ClinicServicesDetail = [];
                this.Clinic_Diagnostics = false;
                this.Clinic_Pharmacy = false;
                this.Clinic_IPD = false;
                this.private_beds = null;
                this.semi_private_beds = null;
                this.general_beds = null;
                for (var i = 0; i < this.clinicDiagnosticsList.length; i++) {
                    this.clinicDiagnosticsList[i].status = false;
                }
            }
            else {
                this.ClinicServicesDetailObject = {
                    ClinicServicesDetail: this.ClinicServicesDetail,
                    Clinic_Diagnostics: this.Clinic_Diagnostics,
                    Clinic_Pharmacy: this.Clinic_Pharmacy,
                    Clinic_IPD: this.Clinic_IPD,
                    private_beds: this.private_beds,
                    semi_private_beds: this.semi_private_beds,
                    general_beds: this.general_beds,
                    clinicServicesStatus: "Yes",
                    OtherClinicService: this.OtherClinicService
                };
            }
            console.log(this.ClinicServicesDetailObject);
            var toUpdate = {
                clinic_services: this.ClinicServicesDetailObject
            };
            var ob = {
                itemId: this.doctorData.itemId,
                toUpdate: toUpdate,
                purchase_data: this.purchase_details
            };
            localStorage['purchase_summary'] = JSON.stringify(ob);
        }
    };
    EditProfileComponent.prototype.finishPurchase1 = function (status) {
        var _this = this;
        var boolean = false;
        console.log("Selected Services");
        console.log(this.Clinic_Diagnostics);
        console.log(this.Clinic_Pharmacy);
        console.log(this.Clinic_IPD);
        if (this.Clinic_Diagnostics == false) {
            this.ClinicServicesDetail = [];
            for (var i = 0; i < this.clinicDiagnosticsList.length; i++) {
                this.clinicDiagnosticsList[i].status = false;
            }
        }
        if (status == 1) {
            if (this.private_beds < 0 && this.Clinic_IPD) {
                boolean = true;
                this.toastr.warning('Invalid number of private beds', 'Warning');
                return;
            }
            else if (this.semi_private_beds < 0 && this.Clinic_IPD) {
                boolean = true;
                this.toastr.warning('Invalid number of semi private beds', 'Warning');
                return;
            }
            else if (this.general_beds < 0 && this.Clinic_IPD) {
                boolean = true;
                this.toastr.warning('Invalid number of general beds', 'Warning');
                return;
            }
            /*    if ((this.OtherClinicService == null || this.OtherClinicService == undefined || this.OtherClinicService == '' || this.OtherClinicService.length < 1) &&
                   this.otherSelected == true){
                   boolean = true;
                   this.toastr.warning('Please enter value in "Clinic Diagnostics"', 'Warning')
                   return
               } */
            /* if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
                boolean = true;
                this.toastr.warning('Please select atleast one value in "Clinic Diagnostics"', 'Warning')
                return
            } */
            if (!this.Clinic_IPD) {
                this.private_beds = null;
                this.general_beds = null;
                this.semi_private_beds = null;
            }
        }
        if (this.activatedtab < 7 && boolean == false) {
            if (this.otherSelected == false) {
                this.OtherClinicService = [];
            }
            if (status == 0) {
                this.ClinicServicesDetailObject = {};
                this.ClinicServicesDetailObject.clinicServicesStatus = "No";
                this.ClinicServicesDetail = [];
                this.Clinic_Diagnostics = false;
                this.Clinic_Pharmacy = false;
                this.Clinic_IPD = false;
                this.private_beds = null;
                this.semi_private_beds = null;
                this.general_beds = null;
                for (var i = 0; i < this.clinicDiagnosticsList.length; i++) {
                    this.clinicDiagnosticsList[i].status = false;
                }
            }
            else {
                this.ClinicServicesDetailObject = {
                    ClinicServicesDetail: this.ClinicServicesDetail,
                    Clinic_Diagnostics: this.Clinic_Diagnostics,
                    Clinic_Pharmacy: this.Clinic_Pharmacy,
                    Clinic_IPD: this.Clinic_IPD,
                    private_beds: this.private_beds,
                    semi_private_beds: this.semi_private_beds,
                    general_beds: this.general_beds,
                    clinicServicesStatus: "Yes",
                    OtherClinicService: this.OtherClinicService
                };
            }
            console.log(this.ClinicServicesDetailObject);
            var toUpdate = {
                clinic_services: this.ClinicServicesDetailObject
            };
            var ob = {
                itemId: this.doctorData.itemId,
                toUpdate: toUpdate
            };
            this.loading = true;
            this.userService.EditDoctorProfile(ob).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.toastr.success(data.message, 'Success');
                    _this.GetDoctorDetailAndNavigate();
                }
                else {
                    _this.toastr.error(data.message, 'Error');
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    EditProfileComponent.prototype.saveStepFiveDetails = function (status) {
        if (this.isJson(localStorage['subscription_info'])) {
            this.subscriptionInfo = JSON.parse(localStorage['subscription_info']);
        }
        else {
            this.subscriptionInfo = localStorage['subscription_info'];
        }
        console.log(this.subscriptionInfo);
        if (this.currentPlan == 'trial' || this.currentPlan == 'Trial') {
            this.finishPurchase(status);
        }
        else {
            this.estimatePricingAndServices();
        }
        /*  this.expiryDate=this.subscriptionInfo.trial_last_date;
          
            var someDate = new Date(this.expiryDate);
            var today=new Date();
            if(someDate.getTime()<today.getTime()){
                this.isExpired=true
            }else{
                this.isExpired=false
                
            }
        if(this.currentPlan=='trial' && this.isExpired==false){
         this.finishPurchase(status);
        }else{
        //alert('here');
        var plan_name="";
        var total_price=0
        var services_selected=[]
        //services_selected.push('Smart Clinic');
        console.log(this.plan);
        console.log(JSON.parse(localStorage['doctorsOfSameClinic']));
        console.log('Clinic Diagnostics: '+this.Clinic_Diagnostics );
        console.log('Clinic Pharmacy: '+this.Clinic_Pharmacy);
        console.log('Clinic IPD: '+ this.Clinic_IPD);
        //this.services1.push('Smart Clinic + Smart Assistant');
        if(this.Clinic_Pharmacy==true){
            if(this.doctorData.clinic_services){
                if(this.doctorData.clinic_services.Clinic_Pharmacy==false){
                        this.services1.push('Smart Pharmacy');
                }
            }
        }
        
        if(this.Clinic_IPD==true){
            if(this.doctorData.clinic_services){
                if(this.doctorData.clinic_services.Clinic_IPD==false){
                        
            this.services1.push('Smart IPD');
            }
        }
        }
        if(this.Clinic_Diagnostics==true){
            if(this.doctorData.clinic_services){
                if(this.doctorData.clinic_services.Clinic_Diagnostics==false){
            this.services1.push('Smart Diagnostics');
            }
            }
        }
        this.fetchPricing(status);
        } */
    };
    EditProfileComponent.prototype.saveStepFiveDetails_1 = function (status) {
        var _this = this;
        var plan_name = "";
        var total_price = 0;
        var services_selected = [];
        services_selected.push('Smart Clinic');
        console.log(this.plan);
        console.log(JSON.parse(localStorage['doctorsOfSameClinic']));
        console.log('Clinic Diagnostics: ' + this.Clinic_Diagnostics);
        console.log('Clinic Pharmacy: ' + this.Clinic_Pharmacy);
        console.log('Clinic IPD: ' + this.Clinic_IPD);
        this.loading = true;
        if (this.Clinic_Diagnostics) {
            services_selected.push({
                'Item': 'Smart Diagnostics',
                'Price': 0
            });
        }
        if (this.Clinic_Pharmacy) {
            services_selected.push({
                'Item': 'Smart Pharmacy',
                'Price': 0
            });
        }
        if (this.Clinic_IPD) {
            services_selected.push({
                'Item': 'Smart IPD',
                'Price': 0
            });
        }
        var ob = {
            services: services_selected,
            doctor_id: this.doctorData._id
        };
        this.userService.updateDoctorSubscription(ob).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.toastr.success(data.message, 'Success');
                _this.finishPurchase1(status);
                //this.showCheckOutForm(data.subscription_id,final_array,duration);
            }
            else {
                _this.toastr.error(data.message, 'Error');
            }
        }, function (err) {
            console.log(err);
            _this.loading = false;
        });
    };
    EditProfileComponent.prototype.saveStepFiveDetails_old = function (status) {
        var _this = this;
        var plan_name = "";
        var total_price = 0;
        var services_selected = [];
        services_selected.push('Smart Clinic');
        console.log(this.plan);
        console.log(JSON.parse(localStorage['doctorsOfSameClinic']));
        console.log('Clinic Diagnostics: ' + this.Clinic_Diagnostics);
        console.log('Clinic Pharmacy: ' + this.Clinic_Pharmacy);
        console.log('Clinic IPD: ' + this.Clinic_IPD);
        this.loading = true;
        this.userService.GetPricing().subscribe(function (data) {
            var plans = data.data;
            var newArray = plans.filter(function (item) {
                return (item.duration == _this.plan);
            });
            if (_this.Clinic_Diagnostics) {
                services_selected.push('Smart Diagnostics');
            }
            if (_this.Clinic_Pharmacy) {
                services_selected.push('Smart Pharmacy');
            }
            if (_this.Clinic_IPD) {
                services_selected.push('Smart IPD');
            }
            var final_array = [];
            var duration;
            newArray.forEach(function (item) {
                if (services_selected.includes(item.type)) {
                    total_price = total_price + item.price;
                    final_array.push({
                        'Item': item.type,
                        'Price': item.price
                    });
                    plan_name = plan_name + item.type + '_';
                }
                if (item.duration == 'sixMonths') {
                    duration = "quarterly";
                }
                if (item.duration == 'oneMonth') {
                    duration = "monthly";
                }
                if (item.duration == 'oneYear') {
                    duration = "yearly";
                }
            });
            console.log(final_array);
            console.log('Total Price: ' + total_price);
            console.log(newArray);
            //this.loading = false
            var ob = {
                planName: plan_name,
                description: "Subscription Plan Created for DocTm User",
                total_amount: total_price * 100,
                notes: "Dummy doctor data",
                doctor_id: _this.doctorData._id,
                duration: duration
            };
            _this.userService.CreateUserPlan(ob).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.status == true) {
                    _this.toastr.success(data.message, 'Success');
                    _this.showCheckOutForm(data.subscription_id, final_array, duration, status);
                }
                else {
                    _this.toastr.error(data.message, 'Error');
                }
            }, function (err) {
                console.log(err);
                _this.loading = false;
            });
        }, function (err) {
            console.log(err);
            _this.loading = false;
        });
        console.log('here');
        /*         var boolean = false
                if (this.Clinic_Diagnostics == false) {
                    this.ClinicServicesDetail = []
                    for (var i = 0; i < this.clinicDiagnosticsList.length; i++) {
                        this.clinicDiagnosticsList[i].status = false
                    }
                }
                if (status == 1) {
                    if (this.private_beds < 0 && this.Clinic_IPD) {
                        boolean = true
                        this.toastr.warning('Invalid number of private beds', 'Warning')
                        return
                    } else if (this.semi_private_beds < 0 && this.Clinic_IPD) {
                        boolean = true
                        this.toastr.warning('Invalid number of semi private beds', 'Warning')
                        return
                    } else if (this.general_beds < 0 && this.Clinic_IPD) {
                        boolean = true
                        this.toastr.warning('Invalid number of general beds', 'Warning')
                        return
                    }
                    if ((this.OtherClinicService == null || this.OtherClinicService == undefined || this.OtherClinicService == '' || this.OtherClinicService.length < 1) &&
                        this.otherSelected == true){
                        boolean = true;
                        this.toastr.warning('Please enter value in "Clinic Diagnostics"', 'Warning')
                        return
                    }
                    if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
                        boolean = true;
                        this.toastr.warning('Please select atleast one value in "Clinic Diagnostics"', 'Warning')
                        return
                    }
                    if (!this.Clinic_IPD) {
                        this.private_beds = null
                        this.general_beds = null
                        this.semi_private_beds = null
                    }
                }
                if (this.activatedtab < 7 && boolean == false) {
                    if (this.otherSelected == false){
                        this.OtherClinicService = []
                    }
                    if (status == 0) {
                        this.ClinicServicesDetailObject = {}
                        this.ClinicServicesDetailObject.clinicServicesStatus = "No"
                        this.ClinicServicesDetail = []
                        this.Clinic_Diagnostics = false
                        this.Clinic_Pharmacy = false
                        this.Clinic_IPD = false
                        this.private_beds = null
                        this.semi_private_beds = null
                        this.general_beds = null
                        for (var i = 0; i < this.clinicDiagnosticsList.length; i++) {
                            this.clinicDiagnosticsList[i].status = false
                        }
                    } else {
                        this.ClinicServicesDetailObject = {
                            ClinicServicesDetail: this.ClinicServicesDetail,
                           // Clinic_Diagnostics: this.Clinic_Diagnostics,
                           // Clinic_Pharmacy: this.Clinic_Pharmacy,
                            //Clinic_IPD: this.Clinic_IPD,
                            private_beds: this.private_beds,
                            semi_private_beds: this.semi_private_beds,
                            general_beds: this.general_beds,
                            clinicServicesStatus: "Yes",
                            OtherClinicService : this.OtherClinicService
                        }
                    }
                    console.log(this.ClinicServicesDetailObject)
                    let toUpdate = {
                        clinic_services: this.ClinicServicesDetailObject
                    }
                    let ob = {
                        itemId : this.doctorData.itemId,
                        toUpdate : toUpdate
                    }
                    this.loading = true
                    this.userService.EditDoctorProfile(ob).subscribe(data => {
                        console.log(data)
                        this.loading = false
                        if (data.response == true) {
                            this.toastr.success(data.message, 'Success')
                            this.GetDoctorDetailAndNavigateToHome()
                        } else {
                            this.toastr.error(data.message, 'Error')
                        }
                    }, err => {
                        console.log(err);
                    })
                } */
    };
    EditProfileComponent.prototype.shareClinicId = function (details) {
        $('#shareModal').modal('show');
    };
    EditProfileComponent.prototype.changeClinicId = function (type) {
        if (type == 'clinicid') {
            $('#ClinicIdModal').modal('show');
        }
        else {
            $('#EmailModal').modal('show');
        }
    };
    EditProfileComponent.prototype.SendSMS = function () {
        var _this = this;
        var ob = {
            phone: this.sharePhone,
            clinic_id: this.ProfileDetail.doctm_clinic_id,
            doctor_name: this.doctorData.first_name
        };
        this.userService.ShareClinicId(ob).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.toastr.success(data.message, 'Success');
                $('#shareModal').modal('hide');
                _this.sharePhone = '';
            }
            else {
                _this.toastr.error(data.message, 'Error');
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.enablePhotoId = function (index) {
        for (var i = 0; i < this.photoIDDocumentsList.length; i++) {
            if (i == index) {
                this.photoIDDocumentsList[index].status = true;
            }
            else {
                this.photoIDDocumentsList[i].status = false;
                this.photoIDDocumentsList[i].document_name = '';
                this.photoIDDocumentsList[i].image = '';
            }
        }
    };
    EditProfileComponent.prototype.onuploadPhotoId = function (evt, index) {
        var _this = this;
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        var file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg' && file.type !== 'application/pdf') {
            return;
        }
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            var mainImage = fr.result;
            _this.photoIDDocumentsList[index].image = mainImage;
            console.log(_this.photoIDDocumentsList[index]);
        };
        fr.readAsDataURL(file);
    };
    EditProfileComponent.prototype.enableClinicDocumentId = function (index) {
        for (var i = 0; i < this.clinicDocumentsList.length; i++) {
            if (i == index) {
                this.clinicDocumentsList[index].status = true;
            }
            else {
                this.clinicDocumentsList[i].status = false;
                this.clinicDocumentsList[i].image = '';
            }
        }
    };
    EditProfileComponent.prototype.onuploadClinicDocument = function (evt, index) {
        var _this = this;
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        var file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg' && file.type !== 'application/pdf') {
            return;
        }
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            var mainImage = fr.result;
            _this.clinicDocumentsList[index].image = mainImage;
            console.log(_this.clinicDocumentsList[index]);
        };
        fr.readAsDataURL(file);
    };
    EditProfileComponent.prototype.onuploadMedicalCert = function (evt, index) {
        var _this = this;
        this.medical_certificate = null;
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        var file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg' && file.type !== 'application/pdf') {
            return;
        }
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            var mainImage = fr.result;
            _this.medical_certificate = mainImage;
        };
        fr.readAsDataURL(file);
    };
    EditProfileComponent.prototype.saveStepSevenDetails = function () {
        this.languageSelected = true;
        this.activatedtab = 6;
    };
    EditProfileComponent.prototype.editMap = function (data) {
        if (data == 1) {
            this.enableEdit = 1;
        }
    };
    EditProfileComponent.prototype.checkOldPassword = function () {
        var _this = this;
        var ob = {
            'doctor_id': this.doctorData.itemId,
            'current_password': this.InitialDetail.current_password
        };
        this.userService.checkOldPassword(ob).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.correct_password = true;
                // this.toastr.success(data.message, 'Success')
                // this.router.navigate(['/header-one-layout/smartClinicLogin']);
            }
            else {
                //this.toastr.error(data.message, 'Error')
                _this.correct_password = false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.saveStepSixDetails = function (status) {
        var _this = this;
        console.log(this.medical_certificate);
        var boolean = false;
        if (!this.InitialDetail || !this.p_false == false || !this.stepOneForm.valid) {
            boolean = true;
            this.toastr.warning('Error in YOUR CONTACT DETAILS ', 'Warning');
            return;
        }
        else if (!this.stepTwoForm.valid && this.ClinicContactDetail.clinic_id == null) {
            boolean = true;
            this.toastr.warning('Error in CREATE YOUR PROFILE ', 'Warning');
            return;
        }
        else if ((this.userOwnClinicStatus == true) && (!this.stepThreeForm.valid || this.userOwnClinicStatus == false)) {
            boolean = true;
            this.toastr.warning('Error in CLINIC CONTACT DETAILS ', 'Warning');
            return;
        }
        else if (this.scheduleArray.length < 1) {
            boolean = true;
            this.toastr.warning('Error in CONSULATATION SCHEDULE ', 'Warning');
            return;
        }
        else if (!this.stepFourForm.valid && this.SmartAssistantDetail.smartAssistant == 'Yes') {
            boolean = true;
            this.toastr.warning('Error in SMART ASSISTANT ', 'Warning');
            return;
        }
        else if (!this.ClinicServicesDetailObject.clinicServicesStatus) {
            boolean = true;
            this.toastr.warning('Error in CLINIC SERVICES ', 'Warning');
            return;
        }
        else if (this.ClinicServicesDetailObject.clinicServicesStatus == 'Yes') {
            if (this.private_beds < 0 && this.Clinic_IPD) {
                boolean = true;
                this.toastr.warning('Invalid number of private beds', 'Warning');
                return;
            }
            else if (this.semi_private_beds < 0 && this.Clinic_IPD) {
                boolean = true;
                this.toastr.warning('Invalid number of semi private beds', 'Warning');
                return;
            }
            else if (this.general_beds < 0 && this.Clinic_IPD) {
                boolean = true;
                this.toastr.warning('Invalid number of general beds', 'Warning');
                return;
            }
            /*    if ((this.OtherClinicService == null || this.OtherClinicService == undefined || this.OtherClinicService == '' || this.OtherClinicService.length < 1) &&
                   this.otherSelected == true) {
                   boolean = true;
                   this.toastr.warning('Please enter value in "Clinic Diagnostics"', 'Warning')
                   return
               } */
            /*    if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
                   boolean = true;
                   this.toastr.warning('Please select atleast one value in "Clinic Diagnostics"', 'Warning')
                   return
               } */
        }
        else {
            var true_happens = false;
            for (var i = 0; i < this.photoIDDocumentsList.length; i++) {
                if (this.photoIDDocumentsList[i].status == true && (this.photoIDDocumentsList[i].document_name == '' ||
                    this.photoIDDocumentsList[i].document_name.trim().length < 1)) {
                    boolean = true;
                    true_happens = true;
                    this.toastr.warning('Invalid document name', 'Warning');
                    return;
                }
                else if (this.photoIDDocumentsList[i].status == true) {
                    true_happens = true;
                    break;
                }
                else if (this.photoIDDocumentsList[i].status == true && this.photoIDDocumentsList[i].image == '') {
                    boolean = true;
                    true_happens = true;
                    this.toastr.warning('Please uplaod PhotoID Proof', 'Warning');
                    return;
                }
            }
            if (true_happens == false) {
                boolean = true;
                this.toastr.warning('Please upload PHOTO ID', 'Warning');
                return;
            }
            var true_happens1 = false;
            for (var i = 0; i < this.clinicDocumentsList.length; i++) {
                if (this.clinicDocumentsList[i].status == true) {
                    if (this.clinicDocumentsList[i].image == '') {
                        this.toastr.warning('Please uplaod Clinic certificate', 'Warning');
                        return;
                    }
                    else {
                        true_happens1 = true;
                        break;
                    }
                }
            }
            if (true_happens1 == false) {
                boolean = true;
                this.toastr.warning('Please upload CLINIC DOCUMENT', 'Warning');
                return;
            }
            else if (!this.medical_certificate) {
                boolean = true;
                this.toastr.warning('Please upload MEDICAL CERTIFICATE', 'Warning');
                return;
            }
        }
        if (boolean == false) {
            this.DocumentsDetail.medical_certificate = this.medical_certificate;
            var clinic_true_id;
            for (var i = 0; i < this.clinicDocumentsList.length; i++) {
                if (this.clinicDocumentsList[i].status == true) {
                    clinic_true_id = i;
                    break;
                }
            }
            this.DocumentsDetail.clinic_certificate = this.clinicDocumentsList[clinic_true_id];
            var photo_id_true_id;
            for (var i = 0; i < this.photoIDDocumentsList.length; i++) {
                if (this.photoIDDocumentsList[i].status == true) {
                    photo_id_true_id = i;
                    break;
                }
            }
            this.DocumentsDetail.photoId_certificate = this.photoIDDocumentsList[photo_id_true_id];
            console.log('Yeaaaaaaaaaaa');
            console.log(this.ClinicContactDetail);
            this.UserDetailForSignUp = {};
            this.UserDetailForSignUp.ConsultationSchedule = this.scheduleArray;
            this.UserDetailForSignUp.InitialDetail = this.InitialDetail;
            this.UserDetailForSignUp.ProfileDetail = this.ProfileDetail;
            this.ClinicContactDetail.lat = this.lat;
            this.ClinicContactDetail.lng = this.lng;
            this.UserDetailForSignUp.ClinicContactDetail = this.ClinicContactDetail;
            this.UserDetailForSignUp.SmartAssistantDetail = this.SmartAssistantDetail;
            this.UserDetailForSignUp.ClinicServicesDetailObject = this.ClinicServicesDetailObject;
            this.UserDetailForSignUp.DocumentsDetail = this.DocumentsDetail;
            this.UserDetailForSignUp.language = this.languageOption;
            console.log(this.UserDetailForSignUp);
            this.loading = true;
            this.userService.SignUpDoctor(this.UserDetailForSignUp).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.toastr.success(data.message, 'Success');
                    _this.router.navigate(['/header-one-layout/smartClinicLogin']);
                }
                else {
                    _this.toastr.error(data.message, 'Error');
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    EditProfileComponent.prototype.stateSelected = function () {
        var _this = this;
        console.log(this.state);
        this.userService.GetCitiesOfState(this.state).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.citiesList = data.data;
            }
            else {
                _this.toastr.error(data.message, 'Error');
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.citySelected = function () {
        var _this = this;
        //alert('changed');
        for (var i = 0; i < this.statesList.length; i++) {
            if (this.statesList[i].id == this.state) {
                this.ClinicContactDetail.state = this.statesList[i].name;
                break;
            }
        }
        for (var i = 0; i < this.citiesList.length; i++) {
            if (this.citiesList[i].id == this.city) {
                this.ClinicContactDetail.city = this.citiesList[i].name;
                break;
            }
        }
        var state = null;
        var city = null;
        for (var i = 0; i < this.statesList.length; i++) {
            if (this.statesList[i].id == this.state) {
                state = this.statesList[i].name;
                break;
            }
        }
        for (var i = 0; i < this.citiesList.length; i++) {
            if (this.citiesList[i].id == this.city) {
                city = this.citiesList[i].name;
                break;
            }
        }
        if (1) {
            if (city != null && state != null) {
                var string = city + "," + state;
                if (this.ClinicContactDetail.area) {
                    string = this.ClinicContactDetail.area + ', ' + city + ', ' + state;
                }
                string = string.replace(" ", "");
                var object = {
                    string: string.trim()
                };
                console.log(object);
                this.userService.GetLatLng(object).subscribe(function (data) {
                    console.log(data);
                    if (data.response == true) {
                        _this.lat = data.data[0].latitude;
                        _this.lng = data.data[0].longitude;
                    }
                });
            }
        }
    };
    EditProfileComponent.prototype.GetStatesOfCountry = function () {
        var _this = this;
        this.userService.GetStatesOfCountry().subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.statesList = data.data;
            }
            else {
                _this.toastr.error(data.message, 'Error');
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.checkPassword = function (str) {
        this.lowerCase = (/[a-z]/.test(str));
        this.upperCase = (/[A-Z]/.test(str));
        this.numberCase = (/[0-9]/.test(str));
        this.lengthCase = str.length >= 8 ? true : false;
        this.specialCase = (/[!@#\$%\^&\*\)\(\-_=+]/.test(str));
    };
    EditProfileComponent.prototype.checkPassword1 = function (str) {
        this.lowerCase1 = (/[a-z]/.test(str));
        this.upperCase1 = (/[A-Z]/.test(str));
        this.numberCase1 = (/[0-9]/.test(str));
        this.lengthCase1 = str.length >= 8 ? true : false;
        this.specialCase1 = (/[!@#\$%\^&\*\)\(\-_=+]/.test(str));
    };
    EditProfileComponent.prototype.handleAddressChange = function ($event) {
        var _this = this;
        this.chooseFromLocation = false;
        //this.ClinicContactDetail.clinic_name = $event.name
        this.lat = JSON.parse(JSON.stringify($event.geometry.location)).lat;
        this.lng = JSON.parse(JSON.stringify($event.geometry.location)).lng;
        // this.ClinicContactDetail.area = $event.formatted_address
        var splitAddr = $event.formatted_address.split(",");
        var state = splitAddr[splitAddr.length - 2].replace(/[0-9]/g, '').trim();
        var city = splitAddr[splitAddr.length - 3].trim();
        if (state != null || state.length > 0) {
            var matchState = this.statesList.filter(function (item) { return item.name == state; });
            if (matchState != null || matchState.length > 0) {
                this.state = matchState[0].id;
                this.userService.GetCitiesOfState(parseInt(matchState[0].id)).subscribe(function (data) {
                    console.log(data);
                    if (data.response == true) {
                        _this.citiesList = data.data;
                        var matchCity = _this.citiesList.filter(function (item) { return item.name == city; });
                        _this.city = matchCity[0].id;
                        if (matchCity != null || matchCity.length > 0) {
                            _this.citySelected();
                        }
                    }
                    else {
                        _this.toastr.error(data.message, 'Error');
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    EditProfileComponent.prototype.hideNewShift = function () {
        this.show_new_shift = false;
    };
    EditProfileComponent.prototype.hideNewSchedule = function () {
        this.show_new_schedule = false;
    };
    EditProfileComponent.prototype.checkOther = function (data) {
        this.other_specialization = false;
        if (data == 'OTHER') {
            this.other_specialization = true;
        }
    };
    EditProfileComponent.prototype.placeMarker = function (data) {
        //this.loading = true
        this.lat = data.coords.lat;
        this.lng = data.coords.lng;
        /* console.log(data);
        var self=this;
        var geocoder = new google.maps.Geocoder;
        var latlng = {lat: this.lat, lng: this.lng};
        geocoder.geocode({'location': latlng}, function(results, status) {
       
            if (results[0]) {
                console.log(results[0]);
            if (self.ClinicContactDetail.area) {
                self.ClinicContactDetail.area=results[0].formatted_address;
                
                 var  value=results[0].formatted_address.split(",");

                    var count=value.length;
                    var country=value[count-1];
                    var state=value[count-2].replace(/\d+/g, '').trim();
                    //alert(state);
                    var city=value[count-3].trim();
                
            var matchState = self.statesList.filter(item => item.name == state)
            //	alert(matchState.length);
            if (matchState.length != 0) {
                //alert(matchState[0].id);
                self.state = matchState[0].id
                self.userService.GetCitiesOfState(parseInt(matchState[0].id)).subscribe(data => {
                    console.log(data)
                    if (data.response == true) {
                         self.loading = false;
                        self.citiesList = data.data
                        var matchCity = self.citiesList.filter(item => item.name == city)
                        self.city = matchCity[0].id
                        if (matchCity != null || matchCity.length > 0) {
                            self.citySelected()
                        }
                    } else {
                         self.loading = false;
                        self.toastr.error(data.message, 'Error')
                    }
                }, err => {
                    console.log(err);
                     self.loading = false;
                })
                }else{
                     self.loading = false;
                }
            }
            }
          
        }); */
    };
    EditProfileComponent.prototype.preview = function () {
        var boolean = false;
        if (this.show_new_schedule == true) {
            if (this.myObject.Monday == false &&
                this.myObject.Tuesday == false &&
                this.myObject.Wednesday == false &&
                this.myObject.Thursday == false &&
                this.myObject.Friday == false &&
                this.myObject.Saturday == false &&
                this.myObject.Sunday == false) {
                boolean = true;
                this.toastr.warning('Please select atleast one day', 'Warning');
            }
            if (this.myObject.shifts.length < 1) {
                boolean = true;
                this.toastr.warning('Please enter atleast one shift', 'Warning');
            }
        }
        if (this.scheduleArray.length > 0) {
            for (var i = 0; i < this.scheduleArray.length; i++) {
                if (this.scheduleArray[i].Monday == false &&
                    this.scheduleArray[i].Tuesday == false &&
                    this.scheduleArray[i].Wednesday == false &&
                    this.scheduleArray[i].Thursday == false &&
                    this.scheduleArray[i].Friday == false &&
                    this.scheduleArray[i].Saturday == false &&
                    this.scheduleArray[i].Sunday == false) {
                    boolean = true;
                    this.toastr.warning('Please select atleast one day', 'Warning');
                    return;
                }
                if (this.scheduleArray[i].shifts.length < 1) {
                    boolean = true;
                    this.toastr.warning('Please enter atleast one shift', 'Warning');
                    return;
                }
            }
        }
        if (boolean == false) {
            if (this.show_new_schedule == true) {
                this.scheduleArray.push(this.myObject);
            }
            this.resetButtonsAfterAnyChangeInSchedule();
            this.show_new_schedule = false;
            this.totalMin = 0;
            for (var i = 0; i < this.scheduleArray.length; i++) {
                var count = 0;
                if (this.scheduleArray[i].Monday == true) {
                    count++;
                }
                if (this.scheduleArray[i].Tuesday == true) {
                    count++;
                }
                if (this.scheduleArray[i].Wednesday == true) {
                    count++;
                }
                if (this.scheduleArray[i].Thursday == true) {
                    count++;
                }
                if (this.scheduleArray[i].Friday == true) {
                    count++;
                }
                if (this.scheduleArray[i].Saturday == true) {
                    count++;
                }
                if (this.scheduleArray[i].Sunday == true) {
                    count++;
                }
                for (var j = 0; j < this.scheduleArray[i].shifts.length; j++) {
                    var min_diff = parseInt(this.scheduleArray[i].shifts[j].toTime.minute) - parseInt(this.scheduleArray[i].shifts[j].fromTime.minute);
                    var hour_diff = parseInt(this.scheduleArray[i].shifts[j].toTime.hour) - parseInt(this.scheduleArray[i].shifts[j].fromTime.hour);
                    min_diff = min_diff + (hour_diff * 60);
                    min_diff = min_diff * count;
                    this.totalMin = this.totalMin + min_diff;
                    if (this.scheduleArray[i].shifts[j].fromTime.hour.toString().length == 1) {
                        this.scheduleArray[i].shifts[j].fromTime.hour = "0" + this.scheduleArray[i].shifts[j].fromTime.hour;
                    }
                    if (this.scheduleArray[i].shifts[j].fromTime.minute.toString().length == 1) {
                        this.scheduleArray[i].shifts[j].fromTime.minute = "0" + this.scheduleArray[i].shifts[j].fromTime.minute;
                    }
                    if (this.scheduleArray[i].shifts[j].toTime.hour.toString().length == 1) {
                        this.scheduleArray[i].shifts[j].toTime.hour = "0" + this.scheduleArray[i].shifts[j].toTime.hour;
                    }
                    if (this.scheduleArray[i].shifts[j].toTime.minute.toString().length == 1) {
                        this.scheduleArray[i].shifts[j].toTime.minute = "0" + this.scheduleArray[i].shifts[j].toTime.minute;
                    }
                }
                // this.totalMin = this.totalMin * count
            }
            this.totalHours = this.totalMin / 60;
            this.totalHours = Math.trunc(this.totalHours);
            this.totalMin = this.totalMin % 60;
            this.allShifts = [];
            var Mon = false;
            var Tue = false;
            var Wed = false;
            var Thu = false;
            var Fri = false;
            var Sat = false;
            var Sun = false;
            for (var i = 0; i < this.scheduleArray.length; i++) {
                var string = '';
                if (this.scheduleArray[i].Monday == true) {
                    Mon = true;
                    if (string == '') {
                        string = "Mon";
                    }
                    else {
                        string = string + ", " + "Mon";
                    }
                }
                if (this.scheduleArray[i].Tuesday == true) {
                    Tue = true;
                    if (string == '') {
                        string = "Tue";
                    }
                    else {
                        string = string + ", " + "Tue";
                    }
                }
                if (this.scheduleArray[i].Wednesday == true) {
                    Wed = true;
                    if (string == '') {
                        string = "Wed";
                    }
                    else {
                        string = string + ", " + "Wed";
                    }
                }
                if (this.scheduleArray[i].Thursday == true) {
                    Thu = true;
                    if (string == '') {
                        string = "Thu";
                    }
                    else {
                        string = string + ", " + "Thu";
                    }
                }
                if (this.scheduleArray[i].Friday == true) {
                    Fri = true;
                    if (string == '') {
                        string = "Fri";
                    }
                    else {
                        string = string + ", " + "Fri";
                    }
                }
                if (this.scheduleArray[i].Saturday == true) {
                    Sat = true;
                    if (string == '') {
                        string = "Sat";
                    }
                    else {
                        string = string + ", " + "Sat";
                    }
                }
                if (this.scheduleArray[i].Sunday == true) {
                    Sun = true;
                    if (string == '') {
                        string = "Sun";
                    }
                    else {
                        string = string + ", " + "Sun";
                    }
                }
                var object = {
                    day: string,
                    shifts: this.scheduleArray[i].shifts
                };
                this.allShifts.push(object);
            }
            var stringClosed = '';
            this.allShiftsClosed = [];
            if (Mon == false) {
                if (stringClosed == '') {
                    stringClosed = "Mon";
                }
                else {
                    stringClosed = stringClosed + ", " + "Mon";
                }
            }
            if (Tue == false) {
                if (stringClosed == '') {
                    stringClosed = "Tue";
                }
                else {
                    stringClosed = stringClosed + ", " + "Tue";
                }
            }
            if (Wed == false) {
                if (stringClosed == '') {
                    stringClosed = "Wed";
                }
                else {
                    stringClosed = stringClosed + ", " + "Wed";
                }
            }
            if (Thu == false) {
                if (stringClosed == '') {
                    stringClosed = "Thu";
                }
                else {
                    stringClosed = stringClosed + ", " + "Thu";
                }
            }
            if (Fri == false) {
                if (stringClosed == '') {
                    stringClosed = "Fri";
                }
                else {
                    stringClosed = stringClosed + ", " + "Fri";
                }
            }
            if (Sat == false) {
                if (stringClosed == '') {
                    stringClosed = "Sat";
                }
                else {
                    stringClosed = stringClosed + ", " + "Sat";
                }
            }
            if (Sun == false) {
                if (stringClosed == '') {
                    stringClosed = "Sun";
                }
                else {
                    stringClosed = stringClosed + ", " + "Sun";
                }
            }
            if (stringClosed != '') {
                var object = {
                    day: stringClosed
                };
                this.allShiftsClosed.push(object);
            }
            $("#previewModal").modal("show");
        }
    };
    EditProfileComponent.prototype.SearchLocation = function (data) {
        var _this = this;
        if (this.lat != 51.678418 && this.lng != 7.809007 && data && data.trim().length > 0) {
            data.replace(" ", "");
            var object = {
                search: data,
                lat: this.lat,
                lng: this.lng
            };
            this.userService.SearchLocation(object).subscribe(function (data) {
                _this.locationSuggestionDB = data.data.predictions;
                console.log(data);
                _this.ClinicContactDetail.database = [];
                for (var i = 0; i < data.data.predictions.length; i++) {
                    var string = data.data.predictions[i].structured_formatting.main_text;
                    _this.ClinicContactDetail.database.push(string);
                }
            });
        }
    };
    EditProfileComponent.prototype.onAddLocation = function (data) {
        var _this = this;
        if (this.chooseFromLocation) {
            data = data.source.value;
            var index = -1;
            for (var i = 0; i < this.locationSuggestionDB.length; i++) {
                var string = this.locationSuggestionDB[i].structured_formatting.main_text;
                if (string == data) {
                    index = i;
                    break;
                }
            }
            if (index != -1) {
                var object = {
                    string: data.trim()
                };
                console.log(object);
                this.userService.GetLatLng(object).subscribe(function (data) {
                    console.log(data);
                    if (data.response == true) {
                        _this.lat = data.data[0].latitude;
                        _this.lng = data.data[0].longitude;
                    }
                });
            }
        }
    };
    EditProfileComponent.prototype.changeSmartAssistantRegFields = function (data) {
        data.status = !data.status;
        var i = this.smartAssistantRegFields.filter(function (d) { return d.name == 'Age'; });
        var j = this.smartAssistantRegFields.filter(function (d) { return d.name == 'DOB'; });
        if (data.name == 'Age') {
            if (i[0].status == false) {
                j[0].status = true;
            }
            else {
                j[0].status = false;
            }
        }
        else if (data.name == 'DOB') {
            if (j[0].status == false) {
                i[0].status = true;
            }
            else {
                i[0].status = false;
            }
        }
        console.log(this.smartAssistantRegFields);
        this.SmartAssistantDetail.reg_fields = [];
        for (var k = 0; k < this.smartAssistantRegFields.length; k++) {
            if (this.smartAssistantRegFields[k].status == true) {
                this.SmartAssistantDetail.reg_fields.push(this.smartAssistantRegFields[k]);
            }
            if (this.SmartAssistantDetail.reg_fields == null) {
                this.SmartAssistantDetail.reg_fields.push(this.smartAssistantRegFields[k]);
            }
        }
    };
    EditProfileComponent.prototype.GetSmartAssistantByPhone = function (data) {
        var _this = this;
        this.classEnabled = false;
        var object = {
            phone: data.trim(),
            doctm_clinic_id: this.doctorData.doctm_clinic_id
        };
        this.userService.VerifySmartAssistantOfSameClinic(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                if (data.data != null) {
                    _this.SmartAssistantDetail.name = data.data.name;
                }
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.GetDoctorDetail = function (id) {
        var _this = this;
        this.loading = true;
        this.userService.GetStatesOfCountry().subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.statesList = data.data;
            }
            _this.userService.GetDoctorDetail(id).subscribe(function (data) {
                console.log(data);
                _this.admin = data.doctorsOfSameClinic[0];
                console.log('Admin doctor details:');
                console.log(_this.admin);
                _this.loading = false;
                if (data.response == true) {
                    _this.doctorDetail = data.data;
                    console.log(_this.doctorDetail);
                    // if(this.activatedtab == 0){
                    _this.InitialDetail.phone = data.data.phone;
                    _this.InitialDetail.email = data.data.email;
                    if (_this.change_password_div) {
                        _this.InitialDetail.password = null;
                        _this.InitialDetail.confirm_password = null;
                    }
                    else {
                        _this.InitialDetail.password = "Hahaha@123";
                        _this.InitialDetail.confirm_password = "Hahaha@123";
                    }
                    // if(this.activatedtab == 0){       
                    _this.ProfileDetail.first_name = data.data.first_name;
                    _this.ProfileDetail.consultation_fee = data.data.consultation_fee;
                    _this.ProfileDetail.dob = data.data.dob;
                    _this.ProfileDetail.expertise = data.data.expertise;
                    _this.ProfileDetail.practicing_since = data.data.practicing_since;
                    _this.ProfileDetail.qualification = data.data.qualification;
                    _this.ProfileDetail.professional_affiliation = data.data.professional_affiliation;
                    _this.ProfileDetail.registration_no = data.data.registration_no;
                    _this.ProfileDetail.specialization = data.data.specialization;
                    _this.ProfileDetail.selectedImage = data.data.profile_image;
                    _this.ProfileDetail.doctm_clinic_id = data.data.doctm_clinic_id;
                    _this.ProfileDetail.type_of_doctor = data.data.type_of_doctor;
                    _this.ProfileDetail.language = data.data.language;
                    if (_this.ProfileDetail.selectedImage != "") {
                        _this.ProfileDetail.imageAlready = true;
                    }
                    // }else if(this.activatedtab == 2){
                    _this.ClinicContactDetail = data.data.clinic_details;
                    _this.lat = _this.ClinicContactDetail.lat;
                    _this.lng = _this.ClinicContactDetail.lng;
                    _this.ClinicContactDetail.doctm_id = data.data.doctm_id;
                    for (var i = 0; i < _this.statesList.length; i++) {
                        if (_this.ClinicContactDetail.state == _this.statesList[i].name) {
                            _this.state = _this.statesList[i].id;
                            _this.userService.GetCitiesOfState(_this.state).subscribe(function (data) {
                                console.log(data);
                                if (data.response == true) {
                                    _this.citiesList = data.data;
                                    for (var i = 0; i < _this.citiesList.length; i++) {
                                        if (_this.ClinicContactDetail.city == _this.citiesList[i].name) {
                                            _this.city = _this.citiesList[i].id;
                                            _this.addressBackup = Object.assign({}, _this.ClinicContactDetail);
                                            /* this.addressBackup.city=Object.assign({}, this.city);
                                            this.addressBackup.state=Object.assign({}, this.state);
                                            this.addressBackup.lat=Object.assign({}, this.lat);
                                            this.addressBackup.lng=Object.assign({}, this.lng); */
                                            _this.citySelected();
                                            break;
                                        }
                                    }
                                }
                            }, function (err) {
                                console.log(err);
                            });
                            break;
                        }
                    }
                    // }else if(this.activatedtab == 3){
                    _this.scheduleArray = data.data.consultation_schedule;
                    _this.show_new_schedule = false;
                    // }else if(this.activatedtab == 4 && data.data.smart_assistant_status == 'Yes'){
                    if (data.data.smart_assistant_id) {
                        _this.SmartAssistantDetail.avgConsTime = {};
                        _this.SmartAssistantDetail.waitingTime = {};
                        _this.SmartAssistantDetail.reg_fields = {};
                        console.log(data.data.smart_assistant_id);
                        _this.loading = true;
                        _this.userService.GetSmartAssistantById(data.data.smart_assistant_id).subscribe(function (dataSmart) {
                            console.log(dataSmart);
                            console.log(_this.doctorData);
                            _this.loading = false;
                            if (data.response == true) {
                                _this.SmartAssistantDetail = dataSmart.data;
                                _this.SmartAssistantDetail.avgConsTime = _this.doctorData.avgConsTime;
                                _this.SmartAssistantDetail.waitingTime = _this.doctorData.waitingTime;
                                _this.SmartAssistantDetail.reg_fields = _this.doctorData.reg_fields;
                                console.log(_this.SmartAssistantDetail);
                                if (_this.doctorData.reg_fields) {
                                    for (var i = 0; i < _this.doctorData.reg_fields.length; i++) {
                                        for (var j = 0; j < _this.smartAssistantRegFields.length; j++) {
                                            if (_this.smartAssistantRegFields[j].value == _this.doctorData.reg_fields[i].value) {
                                                _this.smartAssistantRegFields[j] = _this.doctorData.reg_fields[i];
                                            }
                                        }
                                    }
                                }
                                var ii = _this.smartAssistantRegFields.filter(function (d) { return d.name == 'Age'; });
                                var jj = _this.smartAssistantRegFields.filter(function (d) { return d.name == 'DOB'; });
                                if (ii[0].status == false) {
                                    jj[0].status = true;
                                }
                                else {
                                    jj[0].status = false;
                                }
                                _this.SmartAssistantDetail.password = "Test123@doctm";
                                _this.SmartAssistantDetail.confirm_password = "Test123@doctm";
                            }
                            else {
                                _this.toastr.error(data.message, "Error");
                            }
                        }, function (err) {
                            console.log(err);
                        });
                    }
                    else {
                        _this.SmartAssistantDetail.password = "Test123@doctm";
                        _this.SmartAssistantDetail.confirm_password = "Test123@doctm";
                    }
                    if (data.data.smart_ipd_id) {
                        _this.loading = true;
                        _this.userService.GetSmartIpdById(data.data.smart_ipd_id).subscribe(function (dataSmart) {
                            console.log(dataSmart);
                            _this.loading = false;
                            if (data.response == true) {
                                _this.SmartIpdDetail = dataSmart.data;
                                _this.SmartIpdDetail.password = "Test123@doctm";
                                _this.SmartIpdDetail.confirm_password = "Test123@doctm";
                            }
                            else {
                                _this.toastr.error(data.message, "Error");
                            }
                        }, function (err) {
                            console.log(err);
                        });
                    }
                    else {
                        _this.SmartIpdDetail.password = "Test123@doctm";
                        _this.SmartIpdDetail.confirm_password = "Test123@doctm";
                    }
                    if (data.data.smart_pharmacy_id) {
                        _this.loading = true;
                        _this.userService.GetSmartPharmacyById(data.data.smart_pharmacy_id).subscribe(function (dataSmart) {
                            console.log(dataSmart);
                            _this.loading = false;
                            if (data.response == true) {
                                _this.SmartPharmacyDetail = dataSmart.data;
                                _this.SmartPharmacyDetail.password = "Test123@doctm";
                                _this.SmartPharmacyDetail.confirm_password = "Test123@doctm";
                            }
                            else {
                                _this.toastr.error(data.message, "Error");
                            }
                        }, function (err) {
                            console.log(err);
                        });
                    }
                    else if (_this.admin.smart_pharmacy_id) {
                        _this.loading = true;
                        _this.userService.GetSmartPharmacyById(_this.admin.smart_pharmacy_id).subscribe(function (dataSmart) {
                            console.log(dataSmart);
                            _this.loading = false;
                            if (data.response == true) {
                                _this.SmartPharmacyDetail = dataSmart.data;
                                _this.SmartPharmacyDetail.password = "Test123@doctm";
                                _this.SmartPharmacyDetail.confirm_password = "Test123@doctm";
                            }
                            else {
                                _this.toastr.error(data.message, "Error");
                            }
                        }, function (err) {
                            console.log(err);
                        });
                    }
                    else {
                        _this.SmartPharmacyDetail.password = "Test123@doctm";
                        _this.SmartPharmacyDetail.confirm_password = "Test123@doctm";
                    }
                    if (data.data.smart_diagnostics_id) {
                        _this.loading = true;
                        _this.userService.GetSmartDiagnosticsById(data.data.smart_diagnostics_id).subscribe(function (dataSmart) {
                            console.log(dataSmart);
                            _this.loading = false;
                            if (data.response == true) {
                                _this.SmartDiagnosticsDetail = dataSmart.data;
                                _this.SmartDiagnosticsDetail.password = "Test123@doctm";
                                _this.SmartDiagnosticsDetail.confirm_password = "Test123@doctm";
                            }
                            else {
                                _this.toastr.error(data.message, "Error");
                            }
                        }, function (err) {
                            console.log(err);
                        });
                    }
                    else if (_this.admin.smart_diagnostics_id) {
                        _this.loading = true;
                        _this.userService.GetSmartDiagnosticsById(_this.admin.smart_diagnostics_id).subscribe(function (dataSmart) {
                            console.log(dataSmart);
                            _this.loading = false;
                            if (data.response == true) {
                                _this.SmartDiagnosticsDetail = dataSmart.data;
                                _this.SmartDiagnosticsDetail.password = "Test123@doctm";
                                _this.SmartDiagnosticsDetail.confirm_password = "Test123@doctm";
                            }
                            else {
                                _this.toastr.error(data.message, "Error");
                            }
                        }, function (err) {
                            console.log(err);
                        });
                    }
                    else {
                        _this.SmartDiagnosticsDetail.password = "Test123@doctm";
                        _this.SmartDiagnosticsDetail.confirm_password = "Test123@doctm";
                    }
                    // }else if(this.activatedtab == 5){
                    if (data.data.clinic_services && data.data.clinic_services.ClinicServicesDetail) {
                        _this.ClinicServicesDetail = data.data.clinic_services.ClinicServicesDetail;
                    }
                    if (data.data.clinic_services && data.data.clinic_services.OtherClinicService) {
                        _this.OtherClinicService = data.data.clinic_services.OtherClinicService;
                    }
                    if (_this.OtherClinicService.length > 0) {
                        _this.otherSelected = true;
                    }
                    // if(data.data.clinic_services && data.data.clinic_services.Clinic_Diagnostics){
                    //     this.Clinic_Diagnostics = data.data.clinic_services.Clinic_Diagnostics
                    // }
                    // if(data.data.clinic_services && data.data.clinic_services.Clinic_Pharmacy){
                    //     this.Clinic_Pharmacy = data.data.clinic_services.Clinic_Pharmacy
                    // }
                    // if(data.data.clinic_services && data.data.clinic_services.Clinic_IPD){
                    //     this.Clinic_IPD = data.data.clinic_services.Clinic_IPD                    
                    // }
                    if (data.data.clinic_services && data.data.clinic_services.private_beds) {
                        _this.private_beds = data.data.clinic_services.private_beds;
                    }
                    if (data.data.clinic_services && data.data.clinic_services.semi_private_beds) {
                        _this.semi_private_beds = data.data.clinic_services.semi_private_beds;
                    }
                    if (data.data.clinic_services && data.data.clinic_services.general_beds) {
                        _this.general_beds = data.data.clinic_services.general_beds;
                    }
                    for (var i = 0; i < _this.ClinicServicesDetail.length; i++) {
                        for (var j = 0; j < _this.clinicDiagnosticsList.length; j++) {
                            if (_this.clinicDiagnosticsList[j].name == _this.ClinicServicesDetail[i]) {
                                _this.clinicDiagnosticsList[j].status = true;
                                break;
                            }
                        }
                    }
                    // }
                    // }else if(this.activatedtab == 5){
                    console.log(_this.padCustomizationOptions);
                    if (data.data.pad_customization_options.length > 0) {
                        _this.padCustomizationOptions = data.data.pad_customization_options;
                    }
                    // }
                    //doctorsOfSameClinic
                    _this.doctorsOfSameClinic = data.doctorsOfSameClinic;
                    console.log(_this.doctorsOfSameClinic);
                    _this.doctorsOfSameClinic = _this.doctorsOfSameClinic.filter(function (doctor) {
                        return (doctor.documents_verified == true || doctor.type_of_doctor == 'admin_doctor');
                    });
                    console.log(_this.doctorsOfSameClinic);
                }
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.GetDoctorDetailAndNavigateToHome = function () {
        var _this = this;
        this.loading = true;
        this.userService.GetDoctorDetail(this.doctorData.itemId).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                localStorage['doctorDetails'] = JSON.stringify(data.data);
                _this.router.navigate(['/header-two-layout/dashboard']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.GetDoctorDetailAndNavigate = function () {
        var _this = this;
        this.loading = true;
        this.userService.GetDoctorDetail(this.doctorData.itemId).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                localStorage['doctorDetails'] = JSON.stringify(data.data);
                __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default.a.fire('Deleted!', 'Service has been removed from your plan', 'success');
                //this.router.navigate(['/header-two-layout/dashboard']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.pushPadCustom = function (data) {
        for (var i = 0; i < this.padCustomizationOptions.length; i++) {
            if (this.padCustomizationOptions[i].value == data) {
                this.padCustomizationOptions[i].status = !this.padCustomizationOptions[i].status;
                break;
            }
        }
    };
    EditProfileComponent.prototype.updatePadOptions = function () {
        var _this = this;
        var boolean = false;
        for (var i = 0; i < this.padCustomizationOptions.length; i++) {
            if (this.padCustomizationOptions[i].status == true) {
                boolean = true;
                break;
            }
        }
        if (this.padCustomizationOptions[8].status == true &&
            (this.padCustomizationOptions[8].text == null || this.padCustomizationOptions[8].text == undefined ||
                this.padCustomizationOptions[8].text == "" || this.padCustomizationOptions[8].text.trim().length < 1)) {
            this.toastr.warning('Enter header text', 'Warning');
            return;
        }
        if (this.padCustomizationOptions[12].status == true &&
            (this.padCustomizationOptions[12].text == null || this.padCustomizationOptions[12].text == undefined ||
                this.padCustomizationOptions[12].text == "" || this.padCustomizationOptions[12].text.trim().length < 1)) {
            this.toastr.warning('Enter footer text', 'Warning');
            return;
        }
        if (boolean == false) {
            this.toastr.warning('Please atleast one option', 'Warning');
            return;
        }
        else {
            this.loading = true;
            var toUpdate = {
                pad_customization_options: this.padCustomizationOptions
            };
            var ob = {
                itemId: this.doctorData.itemId,
                toUpdate: toUpdate
            };
            this.userService.EditDoctorProfile(ob).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.toastr.success(data.message, 'Success');
                    _this.GetDoctorDetailAndNavigateToHome();
                }
                else {
                    _this.toastr.error(data.message, 'Error');
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    EditProfileComponent.prototype.detailOfDoctor = function (data) {
        this.doctorDetailForModal = data;
        this.doctorDetailForModal.allShifts = [];
        var Mon = false;
        var Tue = false;
        var Wed = false;
        var Thu = false;
        var Fri = false;
        var Sat = false;
        var Sun = false;
        for (var i = 0; i < this.doctorDetailForModal.consultation_schedule.length; i++) {
            var string = '';
            if (this.doctorDetailForModal.consultation_schedule[i].Monday == true) {
                Mon = true;
                if (string == '') {
                    string = "Mon";
                }
                else {
                    string = string + ", " + "Mon";
                }
            }
            if (this.doctorDetailForModal.consultation_schedule[i].Tuesday == true) {
                Tue = true;
                if (string == '') {
                    string = "Tue";
                }
                else {
                    string = string + ", " + "Tue";
                }
            }
            if (this.doctorDetailForModal.consultation_schedule[i].Wednesday == true) {
                Wed = true;
                if (string == '') {
                    string = "Wed";
                }
                else {
                    string = string + ", " + "Wed";
                }
            }
            if (this.doctorDetailForModal.consultation_schedule[i].Thursday == true) {
                Thu = true;
                if (string == '') {
                    string = "Thu";
                }
                else {
                    string = string + ", " + "Thu";
                }
            }
            if (this.doctorDetailForModal.consultation_schedule[i].Friday == true) {
                Fri = true;
                if (string == '') {
                    string = "Fri";
                }
                else {
                    string = string + ", " + "Fri";
                }
            }
            if (this.doctorDetailForModal.consultation_schedule[i].Saturday == true) {
                Sat = true;
                if (string == '') {
                    string = "Sat";
                }
                else {
                    string = string + ", " + "Sat";
                }
            }
            if (this.doctorDetailForModal.consultation_schedule[i].Sunday == true) {
                Sun = true;
                if (string == '') {
                    string = "Sun";
                }
                else {
                    string = string + ", " + "Sun";
                }
            }
            var object = {
                day: string,
                shifts: this.doctorDetailForModal.consultation_schedule[i].shifts
            };
            this.doctorDetailForModal.allShifts.push(object);
        }
        var stringClosed = '';
        this.doctorDetailForModal.allShiftsClosed = [];
        if (Mon == false) {
            if (stringClosed == '') {
                stringClosed = "Mon";
            }
            else {
                stringClosed = stringClosed + ", " + "Mon";
            }
        }
        if (Tue == false) {
            if (stringClosed == '') {
                stringClosed = "Tue";
            }
            else {
                stringClosed = stringClosed + ", " + "Tue";
            }
        }
        if (Wed == false) {
            if (stringClosed == '') {
                stringClosed = "Wed";
            }
            else {
                stringClosed = stringClosed + ", " + "Wed";
            }
        }
        if (Thu == false) {
            if (stringClosed == '') {
                stringClosed = "Thu";
            }
            else {
                stringClosed = stringClosed + ", " + "Thu";
            }
        }
        if (Fri == false) {
            if (stringClosed == '') {
                stringClosed = "Fri";
            }
            else {
                stringClosed = stringClosed + ", " + "Fri";
            }
        }
        if (Sat == false) {
            if (stringClosed == '') {
                stringClosed = "Sat";
            }
            else {
                stringClosed = stringClosed + ", " + "Sat";
            }
        }
        if (Sun == false) {
            if (stringClosed == '') {
                stringClosed = "Sun";
            }
            else {
                stringClosed = stringClosed + ", " + "Sun";
            }
        }
        if (stringClosed != '') {
            var object = {
                day: stringClosed
            };
            this.doctorDetailForModal.allShiftsClosed.push(object);
        }
        $("#doctorDetailModal").modal("show");
    };
    EditProfileComponent.prototype.closeModal1 = function (type) {
        if (type == 'pharmacy') {
            $('#pharmacy-credentials-modal').modal('hide');
            //this.Clinic_Pharmacy=false;
        }
        if (type == 'diagnostics') {
            $('#diagnostics-credentials-modal').modal('hide');
            //this.Clinic_Diagnostics=false;
        }
        if (type == 'ipd') {
            $('#ipd-credentials-modal').modal('hide');
            //this.Clinic_IPD=false;
        }
    };
    EditProfileComponent.prototype.cancelservice = function (type) {
        if (type == 'pharmacy') {
            $('#pharmacy-credentials-modal').modal('hide');
            this.Clinic_Pharmacy = false;
        }
        if (type == 'diagnostics') {
            $('#diagnostics-credentials-modal').modal('hide');
            this.Clinic_Diagnostics = false;
        }
        if (type == 'ipd') {
            $('#ipd-credentials-modal').modal('hide');
            this.Clinic_IPD = false;
        }
    };
    EditProfileComponent.prototype.getLanguage = function (type) {
        if (type == "" || type == null) {
            return "None";
        }
        else if (type == "hi") {
            return 'Hindi';
        }
        else if (type == "pa") {
            return 'Punjabi';
        }
        else if (type == "bn") {
            return 'Bengali';
        }
        else if (type == "gu") {
            return 'Gujarati';
        }
        else if (type == "kn") {
            return 'Kannada';
        }
        else if (type == "ml") {
            return 'Malayalam';
        }
        else if (type == "mr") {
            return 'Marathi';
        }
        else if (type == "ta") {
            return 'Tamil';
        }
        else if (type == "te") {
            return 'Telugu';
        }
    };
    EditProfileComponent.prototype.changeBlockedStatus = function (status, doctor_id) {
        var _this = this;
        console.log(status, doctor_id);
        this.loading = true;
        var object = {
            itemId: doctor_id,
            blocked: status
        };
        console.log(object);
        this.userService.ChangeBlockedStatus(object).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.toastr.success(data.message, "Succes");
                _this.ngOnInit();
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.ShowHideSmartPharmacyPassword = function () {
        if (this.updateSmartPharmacyPassword) {
            this.SmartPharmacyDetail.password = null;
            this.SmartPharmacyDetail.confirm_password = null;
        }
        else {
            this.SmartPharmacyDetail.password = "Test123@doctm";
            this.SmartPharmacyDetail.confirm_password = "Test123@doctm";
        }
    };
    EditProfileComponent.prototype.ShowHideSmartAsstPassword = function () {
        if (this.updateSmartAsstPassword) {
            this.SmartAssistantDetail.password = null;
            this.SmartAssistantDetail.confirm_password = null;
        }
        else {
            this.SmartAssistantDetail.password = "Test123@doctm";
            this.SmartAssistantDetail.confirm_password = "Test123@doctm";
        }
    };
    EditProfileComponent.prototype.ShowHideSmartIpdPassword = function () {
        if (this.updateSmartIpdPassword) {
            this.SmartIpdDetail.password = null;
            this.SmartIpdDetail.confirm_password = null;
        }
        else {
            this.SmartIpdDetail.password = "Test123@doctm";
            this.SmartIpdDetail.confirm_password = "Test123@doctm";
        }
    };
    EditProfileComponent.prototype.checkOptionOfPad = function (value) {
        if (!this.padCustomizationOptions || this.padCustomizationOptions.length < 1) {
            return true;
        }
        else {
            for (var i = 0; i < this.padCustomizationOptions.length; i++) {
                if (this.padCustomizationOptions[i].value == value) {
                    if (this.padCustomizationOptions[i].status == true) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
    };
    EditProfileComponent.prototype.getFooterText = function () {
        return this.padCustomizationOptions[12].text;
    };
    EditProfileComponent.prototype.getHeaderText = function () {
        return this.padCustomizationOptions[8].text;
    };
    EditProfileComponent.prototype.onKey2 = function (event) {
        this.values2 = event.target.value;
        if (this.SmartIpdDetail.password == this.values2) {
            this.p_false2 = false;
        }
        else {
            this.p_false2 = true;
        }
    };
    EditProfileComponent.prototype.GetSmartIpdByPhone = function (data) {
        var _this = this;
        var object = {
            phone: data.trim(),
            doctm_clinic_id: this.doctorData.doctm_clinic_id
        };
        this.userService.GetSmartIpdByPhone(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                if (data.data != null) {
                    _this.SmartIpdDetail.name = data.data.name;
                }
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.updateSmartIpd = function (status) {
        var _this = this;
        if (this.SmartIpdDetail.password !== this.SmartIpdDetail.confirm_password) {
            this.p_false2 = true;
        }
        else {
            if (!this.SmartIpdDetail.id) {
                this.SmartIpdDetail.id = 0;
            }
            var object = {
                doctor_id: this.doctorData.itemId,
                doctm_clinic_id: this.doctorData.doctm_clinic_id,
                SmartIpdDetail: this.SmartIpdDetail,
                general_beds: this.general_beds,
                private_beds: this.private_beds,
                semi_private_beds: this.semi_private_beds
            };
            console.log(object);
            this.userService.UpdateSmartIpdByDoctor(object).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    _this.toastr.success(data.message, 'Success');
                    _this.GetDoctorDetailAndNavigateToHome();
                }
                else {
                    _this.toastr.error(data.message, 'Error');
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    EditProfileComponent.prototype.updateSmartIpd1 = function (status) {
        var _this = this;
        if (this.SmartIpdDetail.password !== this.SmartIpdDetail.confirm_password) {
            this.p_false2 = true;
        }
        else {
            if (!this.SmartIpdDetail.id) {
                this.SmartIpdDetail.id = 0;
            }
            var object = {
                doctor_id: this.doctorData.itemId,
                doctm_clinic_id: this.doctorData.doctm_clinic_id,
                SmartIpdDetail: this.SmartIpdDetail
            };
            console.log(object);
            this.userService.UpdateSmartIpdByDoctor(object).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    _this.toastr.success(data.message, 'Success');
                    $('#ipd-credentials-modal').modal('hide');
                }
                else {
                    _this.toastr.error(data.message, 'Error');
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    EditProfileComponent.prototype.onKey3 = function (event) {
        this.values3 = event.target.value;
        if (this.SmartPharmacyDetail.password == this.values3) {
            this.p_false3 = false;
        }
        else {
            this.p_false3 = true;
        }
    };
    EditProfileComponent.prototype.onKey4 = function (event) {
        this.values4 = event.target.value;
        if (this.SmartDiagnosticsDetail.password == this.values4) {
            this.p_false4 = false;
        }
        else {
            this.p_false4 = true;
        }
    };
    EditProfileComponent.prototype.GetSmartPharmacyByPhone = function (data) {
        var _this = this;
        var object = {
            phone: data.trim(),
            doctm_clinic_id: this.doctorData.doctm_clinic_id
        };
        this.userService.GetSmartPharmacyByPhone(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                if (data.data != null) {
                    _this.SmartPharmacyDetail.name = data.data.name;
                }
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.GetSmartDiagnosticsByPhone = function (data) {
        var _this = this;
        var object = {
            phone: data.trim(),
            doctm_clinic_id: this.doctorData.doctm_clinic_id
        };
        this.userService.GetSmartDiagnosticsByPhone(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                if (data.data != null) {
                    _this.SmartDiagnosticsDetail.name = data.data.name;
                }
            }
            else {
                _this.toastr.warning(data.message, "Warning");
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.updateSmartPharmacy = function (status) {
        var _this = this;
        if (this.SmartPharmacyDetail.password !== this.SmartPharmacyDetail.confirm_password) {
            this.p_false3 = true;
        }
        else {
            if (!this.SmartPharmacyDetail.id) {
                this.SmartPharmacyDetail.id = 0;
            }
            var object = {
                doctor_id: this.doctorData.itemId,
                doctm_clinic_id: this.doctorData.doctm_clinic_id,
                SmartPharmacyDetail: this.SmartPharmacyDetail
            };
            console.log(object);
            this.userService.UpdateSmartPharmacyByDoctor(object).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    _this.toastr.success(data.message, 'Success');
                    _this.GetDoctorDetailAndNavigateToHome();
                }
                else {
                    _this.toastr.error(data.message, 'Error');
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    EditProfileComponent.prototype.updateSmartPharmacy1 = function (status) {
        var _this = this;
        if (this.SmartPharmacyDetail.password !== this.SmartPharmacyDetail.confirm_password) {
            this.p_false3 = true;
        }
        else {
            if (!this.SmartPharmacyDetail.id) {
                this.SmartPharmacyDetail.id = 0;
            }
            var object = {
                doctor_id: this.doctorData.itemId,
                doctm_clinic_id: this.doctorData.doctm_clinic_id,
                SmartPharmacyDetail: this.SmartPharmacyDetail
            };
            console.log(object);
            this.userService.UpdateSmartPharmacyByDoctor(object).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    //this.toastr.success(data.message, 'Success');
                    $('#pharmacy-credentials-modal').modal('hide');
                    //this.GetDoctorDetailAndNavigateToHome()
                }
                else {
                    _this.toastr.error(data.message, 'Error');
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    EditProfileComponent.prototype.askOtp = function (type) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default.a.fire({
            title: "Change Phone Number",
            text: "Are you sure you want to update your registered mobile number? All the communication messages will be sent to your updated phone number only",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#01B0F0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                _this.changeClinicId(type);
            }
            else {
                //this.removeDoctor();
            }
        });
    };
    EditProfileComponent.prototype.askToRemove = function (item_id, image) {
        var _this = this;
        var title = "Disconnect Doctor";
        var text = "Are you sure you want to remove the doctor from your clinic?";
        if (image == 'approve_doc') {
            title = "Connect Doctor";
            text = "Are you sure you want to connect this doctor with your clinic?";
        }
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default.a.fire({
            title: title,
            text: text,
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#01B0F0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                if (image == 'approve_doc') {
                    _this.GenerateOtpForActiveDoctor(item_id.itemId, item_id.blocked);
                    $('#zohan-ten').modal('show');
                }
                else {
                    _this.GenerateOtpToRemoveDoctor(item_id, image);
                    $('#remove-doctor').modal('show');
                }
            }
            else {
                //this.removeDoctor();
            }
        });
    };
    EditProfileComponent.prototype.estimatePricingAndServices = function () {
        var _this = this;
        var daysLeft = 0;
        var date2 = new Date();
        var date1 = new Date(this.subscriptionInfo.trial_last_date);
        var Difference_In_Time = date1.getTime() - date2.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        this.left_days = Math.round(Difference_In_Days);
        //alert(this.left_days);
        console.log(this.currentPlan);
        console.log(this.left_days);
        this.userService.GetPricingListing().subscribe(function (data) {
            console.log(data.data.pricing_object);
            _this.gst = data.data.gst;
            if (_this.currentPlan == 'Monthly') {
                _this.plan = data.data.pricing_object.filter(function (item) {
                    return item.name == "monthly";
                });
                _this.plan = _this.plan[0];
                var pharmacy_amount = 0;
                var pharmacy_mrp = 0;
                var ipd_amount = 0;
                var ipd_mrp = 0;
                var diagnostics_amount = 0;
                var diagnostics_mrp = 0;
                if (_this.Clinic_Pharmacy) {
                    pharmacy_amount = _this.getAmount('SmartPharmacy');
                    pharmacy_mrp = _this.getMRP('SmartPharmacy');
                }
                console.log(_this.plan);
                console.log(pharmacy_amount);
                if (_this.Clinic_Pharmacy) {
                    console.log('PHARMACY AMOUNT REVEALED');
                    pharmacy_amount = _this.getAmount('SmartPharmacy');
                    pharmacy_mrp = _this.getMRP('SmartPharmacy');
                    console.log(_this.plan);
                    console.log(pharmacy_amount / 30);
                    console.log(_this.left_days);
                    var final_amount = _this.left_days * (pharmacy_amount / 30);
                    console.log('Original Price');
                    console.log(pharmacy_amount);
                    console.log('Calculated Price');
                    console.log(final_amount);
                    if (_this.purchase_details.services.some(function (purchase) { return purchase.name === "SmartPharmacy"; })) { }
                    else {
                        _this.purchase_details.services.push({
                            'name': 'SmartPharmacy',
                            'duration': _this.left_days,
                            'amount': final_amount,
                            'mrp': pharmacy_mrp / 30 * _this.left_days,
                            'discount': _this.getDiscount('SmartPharmacy')
                        });
                    }
                }
                if (_this.Clinic_IPD) {
                    console.log('IPD AMOUNT REVEALED');
                    ipd_amount = _this.getAmount('SmartIPD');
                    ipd_mrp = _this.getMRP('SmartIPD');
                    console.log(_this.plan);
                    console.log(ipd_amount / 30);
                    console.log(_this.left_days);
                    var final_amount = _this.left_days * (ipd_amount / 30);
                    console.log('Original Price');
                    console.log(ipd_amount);
                    console.log('Calculated Price');
                    console.log(final_amount);
                    if (_this.purchase_details.services.some(function (purchase) { return purchase.name === "SmartIPD"; })) {
                    }
                    else {
                        _this.purchase_details.services.push({
                            'name': 'SmartIPD',
                            'duration': _this.left_days,
                            'amount': final_amount,
                            'mrp': ipd_mrp / 30 * _this.left_days,
                            'discount': _this.getDiscount('SmartIPD')
                        });
                    }
                }
                if (_this.Clinic_Diagnostics) {
                    console.log('DIAGNOSTICS AMOUNT REVEALED');
                    diagnostics_amount = _this.getAmount('SmartDiagnostics');
                    diagnostics_mrp = _this.getMRP('SmartDiagnostics');
                    console.log(_this.plan);
                    console.log(diagnostics_amount / 30);
                    console.log(_this.left_days);
                    var final_amount = _this.left_days * (diagnostics_amount / 30);
                    console.log('Original Price');
                    console.log(diagnostics_amount);
                    console.log('Calculated Price');
                    console.log(diagnostics_amount);
                    if (_this.purchase_details.services.some(function (purchase) { return purchase.name === "SmartDiagnostics"; })) {
                    }
                    else {
                        _this.purchase_details.services.push({
                            'name': 'SmartDiagnostics',
                            'duration': _this.left_days,
                            'amount': final_amount,
                            'mrp': diagnostics_mrp / 30 * _this.left_days,
                            'discount': _this.getDiscount('SmartIPD')
                        });
                    }
                    console.log('Purchase Details....');
                    console.log(_this.purchase_details);
                }
                if (_this.doctorData.clinic_services) {
                    if (_this.doctorData.clinic_services.Clinic_Pharmacy) {
                        var removeIndex = _this.purchase_details.services.map(function (item) {
                            return item.name;
                        }).indexOf('SmartPharmacy');
                        _this.purchase_details.services.splice(removeIndex, 1);
                    }
                    if (_this.doctorData.clinic_services.Clinic_IPD) {
                        var removeIndex = _this.purchase_details.services.map(function (item) {
                            return item.name;
                        }).indexOf('SmartIPD');
                        _this.purchase_details.services.splice(removeIndex, 1);
                    }
                    if (_this.doctorData.clinic_services.Clinic_Diagnostics) {
                        var removeIndex = _this.purchase_details.services.map(function (item) {
                            return item.name;
                        }).indexOf('SmartDiagnostics');
                        _this.purchase_details.services.splice(removeIndex, 1);
                    }
                }
                _this.purchase_details.payable = _this.purchase_details.services.map(function (item) { return item.amount; }).reduce(function (prev, curr) { return prev + curr; }, 0);
                _this.purchase_details.mrp = _this.purchase_details.services
                    .map(function (item) { return item.mrp; })
                    .reduce(function (prev, curr) { return prev + curr; }, 0);
                _this.purchase_details.gst = _this.gst;
                // alert(this.purchase_details.payable); 
                _this.finalizePurchase(1);
                if (_this.purchase_details.services.length > 0) {
                    _this.router.navigate(['/header-two-layout/purchase-service']);
                }
                else {
                    _this.toastr.error('All services have already been purchased.', 'Error');
                }
            }
            if (_this.currentPlan == 'Quarterly') {
                _this.plan = data.data.pricing_object.filter(function (item) {
                    return item.name == "quarterly";
                });
                _this.plan = _this.plan[0];
                console.log(_this.plan);
                var pharmacy_amount = 0;
                if (_this.Clinic_Pharmacy) {
                    console.log('PHARMACY AMOUNT REVEALED');
                    pharmacy_amount = _this.getAmount('SmartPharmacy');
                    pharmacy_mrp = _this.getMRP('SmartPharmacy');
                    console.log(_this.plan);
                    console.log(pharmacy_amount / 90);
                    console.log(_this.left_days);
                    var final_amount = _this.left_days * (pharmacy_amount / 90);
                    console.log('Original Price');
                    console.log(pharmacy_amount);
                    console.log('Calculated Price');
                    console.log(final_amount);
                    if (_this.purchase_details.services.some(function (purchase) { return purchase.name === "SmartPharmacy"; })) { }
                    else {
                        _this.purchase_details.services.push({
                            'name': 'SmartPharmacy',
                            'duration': _this.left_days,
                            'amount': final_amount,
                            'mrp': pharmacy_mrp / 90 * _this.left_days,
                            'discount': _this.getDiscount('SmartPharmacy')
                        });
                    }
                }
                if (_this.Clinic_IPD) {
                    console.log('IPD AMOUNT REVEALED');
                    ipd_amount = _this.getAmount('SmartIPD');
                    ipd_mrp = _this.getMRP('SmartIPD');
                    console.log(_this.plan);
                    console.log(ipd_amount / 90);
                    console.log(_this.left_days);
                    var final_amount = _this.left_days * (ipd_amount / 90);
                    console.log('Original Price');
                    console.log(ipd_amount);
                    console.log('Calculated Price');
                    console.log(final_amount);
                    if (_this.purchase_details.services.some(function (purchase) { return purchase.name === "SmartIPD"; })) {
                    }
                    else {
                        _this.purchase_details.services.push({
                            'name': 'SmartIPD',
                            'duration': _this.left_days,
                            'amount': final_amount,
                            'mrp': ipd_mrp / 90 * _this.left_days,
                            'discount': _this.getDiscount('SmartIPD')
                        });
                    }
                }
                if (_this.Clinic_Diagnostics) {
                    console.log('DIAGNOSTICS AMOUNT REVEALED');
                    diagnostics_amount = _this.getAmount('SmartDiagnostics');
                    diagnostics_mrp = _this.getMRP('SmartDiagnostics');
                    console.log(_this.plan);
                    console.log(diagnostics_amount / 90);
                    console.log(_this.left_days);
                    var final_amount = _this.left_days * (diagnostics_amount / 90);
                    console.log('Original Price');
                    console.log(diagnostics_amount);
                    console.log('Calculated Price');
                    console.log(diagnostics_amount);
                    if (_this.purchase_details.services.some(function (purchase) { return purchase.name === "SmartDiagnostics"; })) {
                    }
                    else {
                        _this.purchase_details.services.push({
                            'name': 'SmartDiagnostics',
                            'duration': _this.left_days,
                            'amount': final_amount,
                            'mrp': diagnostics_mrp / 90 * _this.left_days,
                            'discount': _this.getDiscount('SmartIPD')
                        });
                    }
                    console.log('Purchase Details....');
                    console.log(_this.purchase_details);
                }
                if (_this.doctorData.clinic_services) {
                    if (_this.doctorData.clinic_services.Clinic_Pharmacy) {
                        var removeIndex = _this.purchase_details.services.map(function (item) {
                            return item.name;
                        }).indexOf('SmartPharmacy');
                        _this.purchase_details.services.splice(removeIndex, 1);
                    }
                    if (_this.doctorData.clinic_services.Clinic_IPD) {
                        var removeIndex = _this.purchase_details.services.map(function (item) {
                            return item.name;
                        }).indexOf('SmartIPD');
                        _this.purchase_details.services.splice(removeIndex, 1);
                    }
                    if (_this.doctorData.clinic_services.Clinic_Diagnostics) {
                        var removeIndex = _this.purchase_details.services.map(function (item) {
                            return item.name;
                        }).indexOf('SmartDiagnostics');
                        _this.purchase_details.services.splice(removeIndex, 1);
                    }
                }
                _this.purchase_details.payable = _this.purchase_details.services.map(function (item) { return item.amount; }).reduce(function (prev, curr) { return prev + curr; }, 0);
                _this.purchase_details.mrp = _this.purchase_details.services
                    .map(function (item) { return item.mrp; })
                    .reduce(function (prev, curr) { return prev + curr; }, 0);
                _this.purchase_details.gst = _this.gst;
                // alert(this.purchase_details.payable); 
                _this.finalizePurchase(1);
                if (_this.purchase_details.services.length > 0) {
                    _this.router.navigate(['/header-two-layout/purchase-service']);
                }
                else {
                    _this.toastr.error('All services have already been purchased.', 'Error');
                }
            }
            if (_this.currentPlan == 'Yearly') {
                _this.plan = data.data.pricing_object.filter(function (item) {
                    return item.name == "yearly";
                });
                _this.plan = _this.plan[0];
                console.log(_this.plan);
                var pharmacy_amount = 0;
                if (_this.Clinic_Pharmacy) {
                    pharmacy_amount = _this.getAmount('SmartPharmacy');
                }
                console.log(_this.plan);
                console.log(pharmacy_amount);
                if (_this.Clinic_Pharmacy) {
                    console.log('PHARMACY AMOUNT REVEALED');
                    pharmacy_amount = _this.getAmount('SmartPharmacy');
                    pharmacy_mrp = _this.getMRP('SmartPharmacy');
                    console.log(_this.plan);
                    console.log(pharmacy_amount / 365);
                    console.log(_this.left_days);
                    var final_amount = _this.left_days * (pharmacy_amount / 365);
                    console.log('Original Price');
                    console.log(pharmacy_amount);
                    console.log('Calculated Price');
                    console.log(final_amount);
                    if (_this.purchase_details.services.some(function (purchase) { return purchase.name === "SmartPharmacy"; })) { }
                    else {
                        _this.purchase_details.services.push({
                            'name': 'SmartPharmacy',
                            'duration': _this.left_days,
                            'amount': final_amount,
                            'mrp': pharmacy_mrp / 365 * _this.left_days,
                            'discount': _this.getDiscount('SmartPharmacy')
                        });
                    }
                }
                if (_this.Clinic_IPD) {
                    console.log('IPD AMOUNT REVEALED');
                    ipd_amount = _this.getAmount('SmartIPD');
                    ipd_mrp = _this.getMRP('SmartIPD');
                    console.log(_this.plan);
                    console.log(ipd_amount / 365);
                    console.log(_this.left_days);
                    var final_amount = _this.left_days * (ipd_amount / 365);
                    console.log('Original Price');
                    console.log(ipd_amount);
                    console.log('Calculated Price');
                    console.log(final_amount);
                    if (_this.purchase_details.services.some(function (purchase) { return purchase.name === "SmartIPD"; })) {
                    }
                    else {
                        _this.purchase_details.services.push({
                            'name': 'SmartIPD',
                            'duration': _this.left_days,
                            'amount': final_amount,
                            'mrp': ipd_mrp / 365 * _this.left_days,
                            'discount': _this.getDiscount('SmartIPD')
                        });
                    }
                }
                if (_this.Clinic_Diagnostics) {
                    console.log('DIAGNOSTICS AMOUNT REVEALED');
                    diagnostics_amount = _this.getAmount('SmartDiagnostics');
                    diagnostics_mrp = _this.getMRP('SmartDiagnostics');
                    console.log(_this.plan);
                    console.log(diagnostics_amount / 365);
                    console.log(_this.left_days);
                    var final_amount = _this.left_days * (diagnostics_amount / 365);
                    console.log('Original Price');
                    console.log(diagnostics_amount);
                    console.log('Calculated Price');
                    console.log(diagnostics_amount);
                    if (_this.purchase_details.services.some(function (purchase) { return purchase.name === "SmartDiagnostics"; })) {
                    }
                    else {
                        _this.purchase_details.services.push({
                            'name': 'SmartDiagnostics',
                            'duration': _this.left_days,
                            'amount': final_amount,
                            'mrp': diagnostics_mrp / 365 * _this.left_days,
                            'discount': _this.getDiscount('SmartIPD')
                        });
                    }
                    console.log('Purchase Details....');
                    console.log(_this.purchase_details);
                }
                if (_this.doctorData.clinic_services) {
                    if (_this.doctorData.clinic_services.Clinic_Pharmacy) {
                        var removeIndex = _this.purchase_details.services.map(function (item) {
                            return item.name;
                        }).indexOf('SmartPharmacy');
                        _this.purchase_details.services.splice(removeIndex, 1);
                    }
                    if (_this.doctorData.clinic_services.Clinic_IPD) {
                        var removeIndex = _this.purchase_details.services.map(function (item) {
                            return item.name;
                        }).indexOf('SmartIPD');
                        _this.purchase_details.services.splice(removeIndex, 1);
                    }
                    if (_this.doctorData.clinic_services.Clinic_Diagnostics) {
                        var removeIndex = _this.purchase_details.services.map(function (item) {
                            return item.name;
                        }).indexOf('SmartDiagnostics');
                        _this.purchase_details.services.splice(removeIndex, 1);
                    }
                }
                _this.purchase_details.payable = _this.purchase_details.services.map(function (item) { return item.amount; }).reduce(function (prev, curr) { return prev + curr; }, 0);
                _this.purchase_details.mrp = _this.purchase_details.services
                    .map(function (item) { return item.mrp; })
                    .reduce(function (prev, curr) { return prev + curr; }, 0);
                _this.purchase_details.gst = _this.gst;
                // alert(this.purchase_details.payable); 
                _this.finalizePurchase(1);
                if (_this.purchase_details.services.length > 0) {
                    _this.router.navigate(['/header-two-layout/purchase-service']);
                }
                else {
                    _this.toastr.error('All services have already been purchased.', 'Error');
                }
            }
        });
    };
    EditProfileComponent.prototype.getAmount = function (service) {
        var item = this.plan.services.filter(function (el) {
            return el.services_name == service;
        });
        console.log(this.plan);
        if (this.plan.name == 'monthly') {
            return item[0].monthlyPlan;
        }
        if (this.plan.name == 'quarterly') {
            return item[0].quarterPlan;
        }
        if (this.plan.name == 'yearly') {
            return item[0].annualPlan;
        }
        return 0;
    };
    EditProfileComponent.prototype.getMRP = function (service) {
        var item = this.plan.services.filter(function (el) {
            return el.services_name == service;
        });
        console.log(this.plan);
        if (this.plan.name == 'monthly') {
            return item[0].baseRate;
        }
        if (this.plan.name == 'quarterly') {
            return 3 * item[0].baseRate;
        }
        if (this.plan.name == 'yearly') {
            return 12 * item[0].baseRate;
        }
        return 0;
    };
    EditProfileComponent.prototype.fetchPricing1 = function (event) {
        var _this = this;
        //this.services=[];
        //  this.subTotal=0;
        var days = 0;
        this.userService.GetPricingListing().subscribe(function (data) {
            console.log(data.data.pricing_object);
            _this.gst = data.data.gst;
            if (_this.currentPlan == 'Monthly') {
                _this.plan = data.data.pricing_object.filter(function (item) {
                    return item.name == "monthly";
                });
                _this.plan = _this.plan[0];
                console.log(_this.plan);
                days = 30;
                _this.left_days = days;
                var someDate = new Date();
                var numberOfDaysToAdd = days;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                _this.dd = someDate.getDate();
                _this.th = _this.nth(_this.dd);
                _this.month = mlist[someDate.getMonth()];
                _this.year = someDate.getFullYear();
            }
            if (_this.currentPlan == 'Quarterly') {
                _this.plan = data.data.pricing_object.filter(function (item) {
                    return item.name == "quarterly";
                });
                _this.plan = _this.plan[0];
                console.log(_this.plan);
                days = 90;
                var someDate = new Date();
                var numberOfDaysToAdd = days;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                _this.dd = someDate.getDate();
                _this.th = _this.nth(_this.dd);
                _this.month = mlist[someDate.getMonth()];
                _this.year = someDate.getFullYear();
            }
            if (_this.currentPlan == 'Yearly') {
                _this.plan = data.data.pricing_object.filter(function (item) {
                    return item.name == "yearly";
                });
                _this.plan = _this.plan[0];
                console.log(_this.plan);
                //this.services=this.doctorData.services_purchased;
                days = 365;
                //this.left_days=days;
                var someDate = new Date();
                var numberOfDaysToAdd = days;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                _this.dd = someDate.getDate();
                _this.th = _this.nth(_this.dd);
                _this.month = mlist[someDate.getMonth()];
                _this.year = someDate.getFullYear();
            }
        });
    };
    EditProfileComponent.prototype.fetchPricing = function (event) {
        var _this = this;
        localStorage.removeItem('plan_data');
        this.subTotal = 0;
        var days = 0;
        this.userService.GetPricingListing().subscribe(function (data) {
            if (_this.currentPlan == 'Monthly') {
                _this.userPlan = data.montly;
                console.log('HIIIIIIIIIIIIIIII');
                console.log(_this.userPlan);
                days = 30;
                _this.left_days = days;
                var someDate = new Date();
                var numberOfDaysToAdd = days;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                _this.dd = someDate.getDate();
                _this.th = _this.nth(_this.dd);
                _this.month = mlist[someDate.getMonth()];
                _this.year = someDate.getFullYear();
                var _loop_1 = function (s) {
                    item = _this.userPlan.filter(function (el) {
                        return el.service == s;
                    });
                    console.log(item);
                    _this.subTotal = _this.subTotal + item[0].price;
                };
                var item;
                for (var _i = 0, _a = _this.services1; _i < _a.length; _i++) {
                    var s = _a[_i];
                    _loop_1(s);
                }
                var ob = {
                    services: _this.services1,
                    plan: _this.userPlan,
                    total: _this.subTotal
                };
                console.log(ob);
                _this.loading = true;
                localStorage['plan_data'] = JSON.stringify(ob);
                _this.finalizePurchase(1);
                _this.router.navigate(['/header-two-layout/purchase-service']);
            }
            if (_this.currentPlan == 'Quarterly') {
                _this.userPlan = data.quarterly;
                days = 90;
                _this.left_days = days;
                var someDate = new Date();
                var numberOfDaysToAdd = days;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                _this.dd = someDate.getDate();
                _this.th = _this.nth(_this.dd);
                _this.month = mlist[someDate.getMonth()];
                _this.year = someDate.getFullYear();
                var _loop_2 = function (s) {
                    item = _this.userPlan.filter(function (el) {
                        return el.service == s;
                    });
                    console.log(item);
                    _this.subTotal = _this.subTotal + item[0].price;
                };
                var item;
                for (var _b = 0, _c = _this.services1; _b < _c.length; _b++) {
                    var s = _c[_b];
                    _loop_2(s);
                }
                var ob = {
                    services: _this.services1,
                    plan: _this.userPlan,
                    total: _this.subTotal
                };
                console.log(ob);
                _this.loading = true;
                localStorage['plan_data'] = JSON.stringify(ob);
                _this.finalizePurchase(1);
                _this.router.navigate(['/header-two-layout/purchase-service']);
            }
            if (_this.currentPlan == 'Yearly') {
                _this.userPlan = data.yearly;
                days = 365;
                _this.left_days = days;
                var someDate = new Date();
                var numberOfDaysToAdd = days;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                _this.dd = someDate.getDate();
                _this.th = _this.nth(_this.dd);
                _this.month = mlist[someDate.getMonth()];
                _this.year = someDate.getFullYear();
                var _loop_3 = function (s) {
                    item = _this.userPlan.filter(function (el) {
                        return el.service == s;
                    });
                    console.log(item);
                    _this.subTotal = _this.subTotal + item[0].price;
                };
                var item;
                for (var _d = 0, _e = _this.services1; _d < _e.length; _d++) {
                    var s = _e[_d];
                    _loop_3(s);
                }
                var ob = {
                    services: _this.services1,
                    plan: _this.userPlan,
                    total: _this.subTotal
                };
                console.log(ob);
                _this.loading = true;
                localStorage['plan_data'] = JSON.stringify(ob);
                _this.finalizePurchase(1);
                _this.router.navigate(['/header-two-layout/purchase-service']);
            }
        });
    };
    EditProfileComponent.prototype.nth = function (d) {
        if (d > 3 && d < 21)
            return 'th';
        switch (d % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };
    EditProfileComponent.prototype.save = function () {
        var ob = {
            services: this.services1,
            plan: this.plan,
            total: this.subTotal
        };
        localStorage['plan_data'] = JSON.stringify(ob);
        this.router.navigate(['/header-two-layout/subscription-details']);
    };
    EditProfileComponent.prototype.updateSmartDiagnostics = function (status) {
        var _this = this;
        if (this.SmartDiagnosticsDetail.password !== this.SmartDiagnosticsDetail.confirm_password) {
            this.p_false4 = true;
        }
        else {
            if (!this.SmartDiagnosticsDetail.id) {
                this.SmartDiagnosticsDetail.id = 0;
            }
            var object = {
                doctor_id: this.doctorData.itemId,
                doctm_clinic_id: this.doctorData.doctm_clinic_id,
                SmartDiagnosticsDetail: this.SmartDiagnosticsDetail,
                ClinicServicesDetail: this.ClinicServicesDetail,
                OtherClinicService: this.OtherClinicService
            };
            console.log(object);
            this.userService.UpdateSmartDiagnosticsByDoctor(object).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    _this.toastr.success(data.message, 'Success');
                    _this.GetDoctorDetailAndNavigateToHome();
                }
                else {
                    _this.toastr.error(data.message, 'Error');
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    EditProfileComponent.prototype.updateSmartDiagnostics1 = function (status) {
        var _this = this;
        if (this.SmartDiagnosticsDetail.password !== this.SmartDiagnosticsDetail.confirm_password) {
            this.p_false4 = true;
        }
        else {
            if (!this.SmartDiagnosticsDetail.id) {
                this.SmartDiagnosticsDetail.id = 0;
            }
            var object = {
                doctor_id: this.doctorData.itemId,
                doctm_clinic_id: this.doctorData.doctm_clinic_id,
                SmartDiagnosticsDetail: this.SmartDiagnosticsDetail,
                ClinicServicesDetail: this.ClinicServicesDetailObject
            };
            console.log(object);
            this.userService.UpdateSmartDiagnosticsByDoctor(object).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    // this.loading = true
                    _this.userService.GetDoctorDetail(_this.doctorData.itemId).subscribe(function (data) {
                        console.log(data);
                        _this.loading = false;
                        if (data.response == true) {
                            localStorage['doctorDetails'] = JSON.stringify(data.data);
                            $('#diagnostics-credentials-modal').modal('hide');
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    _this.toastr.error(data.message, 'Error');
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    EditProfileComponent.prototype.ShowHideSmartDiagnosticsPassword = function () {
        if (this.updateSmartDiagnosticsPassword) {
            this.SmartDiagnosticsDetail.password = null;
            this.SmartDiagnosticsDetail.confirm_password = null;
        }
        else {
            this.SmartDiagnosticsDetail.password = "Test123@doctm";
            this.SmartDiagnosticsDetail.confirm_password = "Test123@doctm";
        }
    };
    EditProfileComponent.prototype.setAllShiftsForPreview = function () {
        this.allShifts = [];
        var Mon = false;
        var Tue = false;
        var Wed = false;
        var Thu = false;
        var Fri = false;
        var Sat = false;
        var Sun = false;
        for (var i = 0; i < this.doctorData.consultation_schedule.length; i++) {
            var string = '';
            if (this.doctorData.consultation_schedule[i].Monday == true) {
                Mon = true;
                if (string == '') {
                    string = "Mon";
                }
                else {
                    string = string + ", " + "Mon";
                }
            }
            if (this.doctorData.consultation_schedule[i].Tuesday == true) {
                Tue = true;
                if (string == '') {
                    string = "Tue";
                }
                else {
                    string = string + ", " + "Tue";
                }
            }
            if (this.doctorData.consultation_schedule[i].Wednesday == true) {
                Wed = true;
                if (string == '') {
                    string = "Wed";
                }
                else {
                    string = string + ", " + "Wed";
                }
            }
            if (this.doctorData.consultation_schedule[i].Thursday == true) {
                Thu = true;
                if (string == '') {
                    string = "Thu";
                }
                else {
                    string = string + ", " + "Thu";
                }
            }
            if (this.doctorData.consultation_schedule[i].Friday == true) {
                Fri = true;
                if (string == '') {
                    string = "Fri";
                }
                else {
                    string = string + ", " + "Fri";
                }
            }
            if (this.doctorData.consultation_schedule[i].Saturday == true) {
                Sat = true;
                if (string == '') {
                    string = "Sat";
                }
                else {
                    string = string + ", " + "Sat";
                }
            }
            if (this.doctorData.consultation_schedule[i].Sunday == true) {
                Sun = true;
                if (string == '') {
                    string = "Sun";
                }
                else {
                    string = string + ", " + "Sun";
                }
            }
            var object = {
                day: string,
                shifts: this.doctorData.consultation_schedule[i].shifts
            };
            this.allShifts.push(object);
        }
        var stringClosed = '';
        this.allShiftsClosed = [];
        if (Mon == false) {
            if (stringClosed == '') {
                stringClosed = "Mon";
            }
            else {
                stringClosed = stringClosed + ", " + "Mon";
            }
        }
        if (Tue == false) {
            if (stringClosed == '') {
                stringClosed = "Tue";
            }
            else {
                stringClosed = stringClosed + ", " + "Tue";
            }
        }
        if (Wed == false) {
            if (stringClosed == '') {
                stringClosed = "Wed";
            }
            else {
                stringClosed = stringClosed + ", " + "Wed";
            }
        }
        if (Thu == false) {
            if (stringClosed == '') {
                stringClosed = "Thu";
            }
            else {
                stringClosed = stringClosed + ", " + "Thu";
            }
        }
        if (Fri == false) {
            if (stringClosed == '') {
                stringClosed = "Fri";
            }
            else {
                stringClosed = stringClosed + ", " + "Fri";
            }
        }
        if (Sat == false) {
            if (stringClosed == '') {
                stringClosed = "Sat";
            }
            else {
                stringClosed = stringClosed + ", " + "Sat";
            }
        }
        if (Sun == false) {
            if (stringClosed == '') {
                stringClosed = "Sun";
            }
            else {
                stringClosed = stringClosed + ", " + "Sun";
            }
        }
        if (stringClosed != '') {
            var object = {
                day: stringClosed
            };
            this.allShiftsClosed.push(object);
        }
    };
    EditProfileComponent.prototype.GenerateOtpForActiveDoctor = function (itemId, status) {
        var _this = this;
        var phone = parseInt(this.doctorData.phone);
        var ob = {
            phone: phone
        };
        console.log(phone);
        this.userService.GenerateOtpForActiveDoctor(ob).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.otpOnPhone = data.otpPhone;
                console.log(_this.otpOnPhone);
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
        this.getDocID = itemId;
        this.getDocStatus = status;
    };
    EditProfileComponent.prototype.showPrompt = function () {
        this.ChangeVerifiedStatus(1, this.getDocID);
        this.toastr.success("success 1", "success");
        /*  Swal.fire({
            
             title: "Connection Request",
             text: "Doctor is waiting for your approval to connect himself to your clinic.",
             type: 'info',
             showCancelButton: true,
             confirmButtonColor: '#01B0F0',
             cancelButtonColor: '#d33',
             confirmButtonText: 'Approve',
             cancelButtonText: 'Reject'
         }).then((result) => {
             if (result.value) {
                 this.ChangeVerifiedStatus(1, this.getDocID);
                 this.toastr.success("success 1", "success")
             } else {
                 this.removeDoctor();
             }
         }) */
    };
    EditProfileComponent.prototype.CheckAndVerify = function (id) {
        console.log(id, this.getDocID, this.getDocStatus);
        if (this.verifyPhone == parseInt(this.otpOnPhone)) {
            this.otpVerifed = true;
            $('#zohan-ten').modal('hide');
            this.showPrompt();
            /* console.log("sfdhs")
            if(id==1){
                this.changeBlockedStatus(0,this.getDocID)
                this.toastr.success("success 1","success")
            }else{
                this.changeBlockedStatus(1,this.getDocID)
                this.toastr.success("success 0","success")
            }
            $("#zohan-ten").modal("hide");
            this.router.navigate(['header-two-layout/edit-profile/clinic_doctors']);
            // this.saveStepOneDetails() */
        }
        else {
            this.toastr.error('Wrong OTP entered', 'Error');
        }
    };
    EditProfileComponent.prototype.GenerateOtpToRemoveDoctor = function (item, pic) {
        var _this = this;
        var phone = parseInt(this.doctorData.phone);
        var ob = {
            phone: phone
        };
        console.log(phone);
        this.userService.GenerateOtpForActiveDoctor(ob).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.optToRemoveDoc = data.otpPhone;
                console.log(_this.optToRemoveDoc);
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
        this.getDocRemoveID = item;
        // this.getDocStatus = status
    };
    EditProfileComponent.prototype.removeDoctor = function () {
        var _this = this;
        this.userService.DeleteDoctor(this.getVerifyDocId).subscribe(function (data) {
            console.log(data);
            // this.loading = false;
            if (data.response == true) {
                //this.ngOnInit();
                _this.toastr.success('', data.message);
            }
            else {
                _this.toastr.error('', data.message);
            }
        }, function (err) {
            console.log(err);
        });
        this.ngOnInit();
        this.router.navigate(['header-two-layout/edit-profile/clinic_doctors']);
    };
    EditProfileComponent.prototype.GenerateOtpToChangePassowd = function () {
        var _this = this;
        var phone = parseInt(this.doctorData.phone);
        var ob = {
            phone: phone
        };
        console.log(phone);
        this.userService.GenerateOtpForActiveDoctor(ob).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.optTochangePassword = data.otpPhone;
                console.log(_this.optToRemoveDoc);
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.GenerateOtpToVerifyDoctor = function (itemId, status) {
        var _this = this;
        var phone = parseInt(this.doctorData.phone);
        var ob = {
            phone: phone
        };
        console.log(phone);
        // this.verifyDocDataOtp = 1111
        this.userService.GenerateOtpForActiveDoctor(ob).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.verifyDocDataOtp = data.otpPhone;
                console.log(_this.optToRemoveDoc);
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
        this.getVerifyDocId = itemId;
        this.getDocVerifyStatus = status;
    };
    EditProfileComponent.prototype.ChangeVerifiedStatus = function (status, doctor_id) {
        var _this = this;
        console.log(status, doctor_id);
        this.loading = true;
        var object = {
            itemId: doctor_id,
            documents_verified: status
        };
        console.log(object);
        this.userService.ChangeVerifiedStatus(object).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.toastr.success(data.message, "Succes");
                _this.ngOnInit();
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.VerifyDoctor = function (id) {
        console.log(id, this.getVerifyDocId, this.getDocVerifyStatus);
        //this.otpOnPhone = 1234
        if (this.verifyDoctorOtp == parseInt(this.verifyDocDataOtp)) {
            this.otpVerifed = true;
            console.log("sfdhs");
            if (id == 1) {
                this.ChangeVerifiedStatus(0, this.getVerifyDocId);
                this.toastr.success("success 1", "success");
            }
            else {
                this.ChangeVerifiedStatus(1, this.getVerifyDocId);
                this.toastr.success("success 0", "success");
            }
            $("#verify-doctor").modal("hide");
            this.router.navigate(['header-two-layout/edit-profile/clinic_doctors']);
            // this.saveStepOneDetails()
        }
        else {
            this.toastr.error('Wrong OTP entered', 'Error');
        }
    };
    EditProfileComponent.prototype.checkService = function (service) {
        // alert('here');
        //console.log(this.services);
        if (this.doctorData.clinic_services) {
            if (this.doctorData.clinic_services.Clinic_IPD == true) {
                this.Clinic_IPD = true;
            }
            if (this.doctorData.clinic_services.Clinic_Pharmacy == true) {
                this.Clinic_Pharmacy = true;
            }
            if (this.doctorData.clinic_services.Clinic_Diagnostics == true) {
                this.Clinic_Diagnostics = true;
            }
        }
        else {
            this.Clinic_IPD = false;
            this.Clinic_Pharmacy = false;
            this.Clinic_Diagnostics = false;
        }
    };
    /* 	checkService(service){
            console.log(JSON.stringify(this.services));
            if(this.services.Clinic_IPD && service=='IPD'){
            
            }
            if(this.services.Clinic_Diagnostics && service=='Diagnostics'){
            
            }
            if(this.services.Clinic_Pharmacy && service=='Pharmacy'){
            
            }
            
        } */
    EditProfileComponent.prototype.disableService = function (service) {
        console.log(JSON.stringify(this.services));
        if (this.services.Clinic_IPD && service == 'IPD') {
            return true;
        }
        if (this.services.Clinic_Diagnostics && service == 'Diagnostics') {
            return true;
        }
        if (this.services.Clinic_Pharmacy && service == 'Pharmacy') {
            return true;
        }
    };
    EditProfileComponent.prototype.showCheckOutForm = function (subs_id, plan_object, type, status) {
        var self = this;
        var options = {
            "key": "rzp_test_ZXisTAaZeIwiSh",
            "subscription_id": subs_id,
            "name": "DocTm Solutions.",
            "description": "DocTm " + type + " Plan",
            "image": "/assets/imgs/logoDoctm.png",
            "handler": function (response) {
                if (response.razorpay_payment_id) {
                    this.loading = true;
                    var ob = {
                        razorpay_customer_id: subs_id,
                        payment_id: response.razorpay_payment_id,
                        services: plan_object,
                        plan_duration: type,
                        doctor_id: self.doctorData._id
                    };
                    self.userService.updateDoctorSubscription(ob).subscribe(function (data) {
                        console.log(data);
                        self.loading = false;
                        if (data.response == true) {
                            self.toastr.success(data.message, 'Success');
                            self.finishPurchase(status);
                            //this.showCheckOutForm(data.subscription_id,final_array,duration);
                        }
                        else {
                            self.toastr.error(data.message, 'Error');
                        }
                    }, function (err) {
                        console.log(err);
                        self.loading = false;
                    });
                }
                else {
                    self.toastr.error("Something went wrong. Please try again later", "Error");
                }
                //
            },
            "prefill": {
                "name": this.doctorDetail.first_name,
                "email": this.doctorDetail.email,
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
    EditProfileComponent.prototype.showMap = function (type) {
        if (type == 'auto') {
            this.enable_map = false;
        }
        else {
            this.enable_map = true;
        }
    };
    EditProfileComponent.prototype.createPdf = function () {
        $('#PreviewPrint').printThis({
            debug: false,
            importCSS: true,
            importStyle: true,
            printContainer: true,
            pageTitle: "Prescription",
            removeInline: false,
            printDelay: 333,
            header: null,
            formValues: true
        });
        //this.patientData.print=1;
    };
    EditProfileComponent.prototype.GenerateOtpToChangeClinicId = function () {
        var _this = this;
        var phone = parseInt(this.doctorData.phone);
        var ob = {
            phone: phone
        };
        console.log(phone);
        //this.optTochangePassword = 1111
        this.userService.GenerateOtpForActiveDoctor(ob).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                // this.optTochangePassword = data.otpPhone
                _this.generatedOTP = data.otpPhone;
                console.log(_this.optToRemoveDoc);
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
        //this.getDocRemoveID=item
        // this.getDocStatus = status
    };
    EditProfileComponent.prototype.GenerateOTPChangeEmail = function () {
        var _this = this;
        var phone = parseInt(this.user_id);
        var ob = {
            phone: phone
        };
        console.log(phone);
        //this.optTochangePassword = 1111
        this.userService.GenerateOtpForChangeMobile(ob).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                // this.optTochangePassword = data.otpPhone
                _this.generatedOTP = data.otpPhone;
                $('#EmailModal').modal('hide');
                $("#EmailOTPModal").modal("show");
                console.log(_this.optToRemoveDoc);
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
        //this.getDocRemoveID=item
        // this.getDocStatus = status
    };
    EditProfileComponent.prototype.getSmartIPDDetails = function () {
        var doc = JSON.parse(localStorage['doctorsOfSameClinic']);
        console.log(doc);
        this.userService.GetDoctorDetail(doc.itemId).subscribe(function (data) {
            console.log('Yayaaaaaaaaaa');
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    EditProfileComponent.prototype.getDiscount = function (service) {
        var item = this.plan.services.filter(function (el) {
            return el.services_name == service;
        });
        console.log(item);
        //return 0;
        if (this.plan.name == 'monthly') {
            return item[0].monthlyDiscount;
        }
        if (this.plan.name == 'quarterly') {
            return item[0].quarterDiscount;
        }
        if (this.plan.name == 'yearly') {
            return item[0].annualDiscount;
        }
    };
    EditProfileComponent.prototype.toggleEdit = function () {
        var _this = this;
        this.editDetails = !this.editDetails;
        if (this.editDetails) {
            this.ClinicContactDetail.area = null;
            this.ClinicContactDetail.address = null;
            this.state = null;
            this.city = null;
            this.setCurrentPosition();
        }
        else {
            this.enable_map = false;
            console.log(this.addressBackup);
            this.ClinicContactDetail.area = this.addressBackup.area;
            this.ClinicContactDetail.address = this.addressBackup.address;
            var state = this.addressBackup.state;
            var city = this.addressBackup.city;
            this.lat = this.addressBackup.lat;
            this.lng = this.addressBackup.lng;
            this.setPrevPosition();
            this.citySelected();
            var matchState = this.statesList.filter(function (item) { return item.name == state; });
            if (matchState != null || matchState.length > 0) {
                this.state = matchState[0].id;
                this.userService.GetCitiesOfState(parseInt(matchState[0].id)).subscribe(function (data) {
                    console.log(data);
                    if (data.response == true) {
                        _this.citiesList = data.data;
                        var matchCity = _this.citiesList.filter(function (item) { return item.name == city; });
                        _this.city = matchCity[0].id;
                        if (matchCity != null || matchCity.length > 0) {
                            _this.citySelected();
                        }
                    }
                    else {
                        _this.toastr.error(data.message, 'Error');
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    EditProfileComponent.prototype.askOtpPasswordChange = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default.a.fire({
            title: "Change Password",
            text: "Are you sure you want to change your password?",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#01B0F0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                _this.GenerateOtpToChangePassowd();
                $('#change-password').modal('show');
            }
            else {
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditProfileComponent.prototype, "searchElementRef", void 0);
    EditProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__("../../../../../src/app/header-two-layout/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/edit-profile/edit-profile.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__providers_mission_service__["a" /* MissionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7__providers_mission_service__["a" /* MissionService */]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/edit-profile/edit-profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileModule", function() { return EditProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/edit-profile/edit-profile-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_profile_component__ = __webpack_require__("../../../../../src/app/header-two-layout/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_chips__ = __webpack_require__("../../../../ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_google_places_autocomplete__ = __webpack_require__("../../../../ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_google_places_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ngx_google_places_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var EditProfileModule = /** @class */ (function () {
    function EditProfileModule() {
    }
    EditProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__edit_profile_routing_module__["a" /* EditProfileRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_google_places_autocomplete__["GooglePlaceModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_chips__["a" /* TagInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_radio__["a" /* MatRadioModule */],
                // AgmCoreModule.forRoot({
                //      apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY'
                //    })
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY',
                    libraries: ["places"]
                })
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__edit_profile_component__["a" /* EditProfileComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* NativeDateAdapter */]]
        })
    ], EditProfileModule);
    return EditProfileModule;
}());



/***/ })

});
//# sourceMappingURL=edit-profile.module.chunk.js.map