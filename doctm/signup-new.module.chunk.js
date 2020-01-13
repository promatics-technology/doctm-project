webpackJsonp(["signup-new.module"],{

/***/ "../../../../../src/app/header-one-layout/signup-new/signup-new-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupNewRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_new_component__ = __webpack_require__("../../../../../src/app/header-one-layout/signup-new/signup-new.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__signup_new_component__["a" /* SignupNewComponent */]
    }];
var SignupNewRoutingModule = /** @class */ (function () {
    function SignupNewRoutingModule() {
    }
    SignupNewRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], SignupNewRoutingModule);
    return SignupNewRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/signup-new/signup-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".instruction-ul {\n    float: left;\n    width: 100%;\n}\n.instruction-ul ul {\n    list-style-type: none;\n    display: inline-block;\n    float: left;\n    width: 100%;\n    padding-left: 15px;\n    margin: 10px 0;\n}\n.instruction-ul ul li {\n    float: left;\n    width: 50%;\n    position: relative;\n}\n.instruction-ul > ul > li.passed{\n    color: green;\n}\n.instruction-ul > ul > li.passed::after {\n    position: absolute;\n    top: -2px;\n    left: -18px;\n    content: \"\\F00C\";\n    font-family: 'fontawesome';\n    color: green;\n}\n.fieldDesign .input-group-addon {\n    background-color: #fff;\n    border: 1px solid rgba(56, 94, 138, 1);\n    border-radius: 6px 0 0 6px;\n}\n.input-group.fieldDesign .txtfield {\n    height: 40px;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 0px 6px 6px 0px !important;\n    border: 1px solid rgba(56, 94, 138, 1);\n}\n.input-group.fieldDesign label.labelFloat {\n    position: absolute;\n    left: 55px;\n    z-index: 9;\n}\n.input-group.fieldDesign p {\n    color: #FF0000;\n    position: absolute;\n    top: 41px;\n    left: 0;\n}\n.success-upload .fa.fa-check {\n    color: #009900;\n}\nspan.input-group-addon.input-btn.success-upload {\n    padding: 8px 10px;\n    float: right;\n    display: inline-block;\n    text-align: center;\n    width: 35px;\n}\n.color-blue{\n    color: #01b0f0;\n}\n/** 21 Sep **/\n.shift-trash.ok-btn-prnt.m-b-5 {\n    border: none;\n    /*background-color: #f70f0f;*/\n    /*color: #fff;*/\n    color: red;\n    border-radius: 4PX;\n    height: auto;\n    width: 30px;\n    height: unset;\n    padding: 2px 0px;\n}\n.shift-trash.ok-btn-prnt.m-b-5 img{\n    max-width: 50px!important;\n}\n.wrapper-div-cstm {\n    float: left;\n    width: 100%;\n    padding: 15px;\n    border: 1px solid #ccc;\n    margin-bottom: 20px;\n}\n.Week-name {\n    float: left;\n    width: 100%;\n    margin-bottom: 5px;\n}\n.week-name-wrp {\n    float: left;\n    width: 50%;\n    font-weight: bold;\n}\noption{\n  color: #555;\n}\nselect:invalid {\n  color: #c1c1c1;;\n}\nselect option:first-child {\n  color: #c1c1c1;;\n}\nselect:invalid option:not(:first-child) {\n  color: black;\n}\n.week-time-wrap {\n    float: left;\n    width: 50%;\n}\n.week-time {\n    float: left;\n    width: auto;\n    margin-right: 10px;\n}\n.resend-link{\n    text-align: center;\n    text-decoration: none;\n    font-weight: bold;\n}\n.input_cstm{\n\theight:40px;\n}\n/****** LOGIN MODAL ******/\n.loginmodal-container {\n  padding: 30px;\n  /* max-width: 350px; */\n  width: 100% !important;\n  background-color: #F7F7F7;\n  margin: 0 auto;\n  border-radius: 2px;\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  font-family: roboto;\n}\n.loginmodal-container h1 {\n  text-align: center;\n  font-size: 1.8em;\n  font-family: roboto;\n}\n.loginmodal-container input[type=submit] {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  position: relative;\n}\n.loginmodal-container input[type=text], input[type=password] {\n  height: 44px;\n  font-size: 16px;\n  width: 100%;\n  margin-bottom: 10px;\n  -webkit-appearance: none;\n  background: #fff;\n  border: 1px solid #d9d9d9;\n  border-top: 1px solid #c0c0c0;\n  /* border-radius: 2px; */\n  padding: 0 8px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n.loginmodal-container input[type=text]:hover, input[type=password]:hover {\n  border: 1px solid #b9b9b9;\n  border-top: 1px solid #a0a0a0;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n}\n.loginmodal {\n  text-align: center;\n  font-size: 14px;\n  font-family: 'Arial', sans-serif;\n  font-weight: 700;\n  height: 36px;\n  padding: 0 8px;\n/* border-radius: 3px; */\n/* -webkit-user-select: none;\n  user-select: none; */\n}\n.loginmodal-submit {\n  /* border: 1px solid #3079ed; */\n  border: 0px;\n  color: #fff;\n  text-shadow: 0 1px rgba(0,0,0,0.1); \n  background-color: #008dc0;\n  padding: 17px 0px;\n  font-family: roboto;\n  font-size: 14px;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\n}\n.loginmodal-cancel {\n  /* border: 1px solid #3079ed; */\n  border: 0px;\n  color: #fff;\n  text-shadow: 0 1px rgba(0,0,0,0.1); \n  background-color: red;\n  padding: 17px 0px;\n  font-family: roboto;\n  font-size: 14px;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\n}\n.loginmodal-submit:hover {\n  /* border: 1px solid #2f5bb7; */\n  border: 0px;\n  text-shadow: 0 1px rgba(0,0,0,0.3);\n  background-color: #008dc0;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\n}\n.loginmodal-container a {\n  text-decoration: none;\n  color: #666;\n  font-weight: 400;\n  text-align: center;\n  display: inline-block;\n  opacity: 0.6;\n  -webkit-transition: opacity ease 0.5s;\n  transition: opacity ease 0.5s;\n}\n.login-help{\n  font-size: 12px;\n}\n.login-btn {\n  text-align:center;\n  margin-top: 50px;\n}\n/** 21 Sep **/\n.all-limancls{\n  padding: 0px;\n}\n.all-limancls li{\n  list-style: none;\n  width: 33.33%;\n  display: inline-block;\n  padding-bottom: 5px;\n}\n.cnt{\n  text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-one-layout/signup-new/signup-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n<img src=\"./assets/imgs/load.gif\" />\n</div>\n<section class=\"signup-sec\">\n<div class=\"signup-sidebar-wrapper\">\n\t<div id=\"bs-example-navbar-collapse-1\" class=\"signup-sidbar navbar-collapse p-0\">\n\t\t<ul class=\"\">\n\t\t\t<li class=\"{{getClass(0)}}\" (click)=\"activatetab('Your Contact details',0)\"> <a> Your Contact details </a> </li>\n\t\t\t<li class=\"{{getClass(1)}}\" (click)=\"activatetab('Create your profile',1)\"> <a> Create your profile </a> </li>\n\t\t\t<li class=\"{{getClass(2)}}\" (click)=\"activatetab('Clinic contact details',2)\"> <a> Clinic contact details </a> </li>\n\t\t\t<li class=\"{{getClass(3)}}\" (click)=\"activatetab('Your consultation schedule',3)\"> <a> Your consultation schedule </a> </li>\n\t\t\t<li class=\"{{getClass(4)}}\" (click)=\"activatetab('Add SmartAssistant',4)\"> <a> Add SmartAssistant </a> </li>\n\t\t\t<li class=\"{{getClass(5)}}\" (click)=\"activatetab('Add clinic services',5)\"> <a> Add clinic services </a> </li>\n\t\t\t<li class=\"{{getClass(7)}}\" (click)=\"activatetab('Language Selection',7)\"> <a> Language Selection </a> </li>\n\t\t\t<li class=\"{{getClass(6)}}\" (click)=\"activatetab('Upload documents',6)\"> <a> Upload documents </a> </li>\n\t\t</ul>\n\t</div>\n</div>\n<div class=\"\" *ngIf=\"activatedtab==0\">\n\t<div class=\"signup-content-wrapper\">\n\t\t<div class=\"signup-content\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card\">\n\t\t\t\t\t\t<h3 class=\"signup-contentHead\"> SmartClinic Sign-up / {{activatedtabHeading}}</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<form [formGroup]=\"stepOneForm\" autocomplete=\"off\">\n\t\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-12\">\n\t\t\t\t\t\t<div class=\"signup-card newform-margin\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t<input id=\"field1\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\"  pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"InitialDetail.phone\" [formControl]=\"stepOneForm.controls['phone']\" />\n\t\t\t\t\t\t\t\t\t\t<label for=\"field1\" class=\"labelFloat\"> Mobile Number<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepOneForm.controls['phone'].valid  && ( stepOneForm.controls['phone'].touched)\">Invalid phone number !!!</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">+91</span>\n\t\t\t\t\t\t\t\t\t\t<input id=\"field1\" type=\"text\" [attr.disabled]=\"otp_verified ? '' : null\" class=\"form-control txtfield\" name=\"the_phone\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"InitialDetail.phone\" [formControl]=\"stepOneForm.controls['phone']\" autocomplete=\"absdhgm\"/>\n\t\t\t\t\t\t\t\t\t\t<label for=\"field1\" class=\"labelFloat\" *ngIf=\"!otp_verified\"> Mobile Number<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepOneForm.controls['phone'].valid  && ( stepOneForm.controls['phone'].touched)\">Invalid phone number !!!</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t<input id=\"field2\" type=\"text\" [attr.disabled]=\"otp_verified ? '' : null\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"InitialDetail.email\" [formControl]=\"stepOneForm.controls['email']\" autocomplete=\"new-email\"/>\n\t\t\t\t\t\t\t\t\t\t<label for=\"field2\" class=\"labelFloat\" *ngIf=\"!otp_verified\"> Email<sup>*</sup>(User ID) </label>\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepOneForm.controls['email'].valid  && ( stepOneForm.controls['email'].touched)\">Invalid email ID !!!</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t<input id=\"field3\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"InitialDetail.password\" [formControl]=\"stepOneForm.controls['password']\" />\n\t\t\t\t\t\t\t\t\t\t<label for=\"field3\" class=\"labelFloat\">Create password<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepOneForm.controls['password'].valid  && (stepOneForm.controls['password'].touched)\">Password can be of 8 to 15 characters !!!</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t<input id=\"field3\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"InitialDetail.password\" [formControl]=\"stepOneForm.controls['password']\" (input)=\"checkPassword(InitialDetail.password)\" autocomplete=\"new-password\" />\n\t\t\t\t\t\t\t\t\t\t<label for=\"field3\" class=\"labelFloat\">Create password<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepOneForm.controls['password'].valid  && (stepOneForm.controls['password'].touched)\">Invalid password pattern!!!</p>\n\t\t\t\t\t\t\t\t\t\t<div class=\"instruction-ul\">\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"(lowerCase==true) ? 'passed': ''\">One lowercase character</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"(specialCase==true) ? 'passed': ''\">One special character</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"(upperCase==true) ? 'passed': ''\">One uppercase character</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"(lengthCase==true) ? 'passed': ''\">8 characters minimum</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"(numberCase==true) ? 'passed': ''\">One number</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t<input id=\"field4\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" (keyup)=\"onKey($event)\" [(ngModel)]=\"InitialDetail.confirm_password\" [formControl]=\"stepOneForm.controls['confirm_password']\" />\n\t\t\t\t\t\t\t\t\t\t<label for=\"field4\" class=\"labelFloat\"> Repeat password<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"p_false\">Password and confirm password are not same !!!</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t<re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LdBQZoUAAAAACukEUlsU0fnfOcFdXQYuyAcpO9J\"></re-captcha>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<!--div class=\"row\">\n\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card text-center\">\n\t\t\t\t\t\t <re-captcha (resolved)=\"resolved($event,'step1')\" siteKey=\"6LdBQZoUAAAAACukEUlsU0fnfOcFdXQYuyAcpO9J\"></re-captcha>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div-->\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card text-center\">\n\t\t\t\t\t\t <button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"(!stepOneForm.valid) || (p_false)\" (click)=\"openOTPModal()\"> Verify </button>\n\t\t\t\t\t\t<!-- <button class=\"btn btn-custom\" type=\"submit\" data-target=\"#myModal\" data-toggle=\"modal\" data-dismiss=\"modal\"> Verify </button> -->\n\t\t\t\t\t\t<p class=\"help-note m-t-5\"><small>Separate OTP (One Time Password) will be sent to your registered mobile number and email for verification</small></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"\" *ngIf=\"activatedtab==1\">\n\t<div class=\"signup-content-wrapper\">\n\t\t<div class=\"signup-content\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card\">\n\t\t\t\t\t\t<h3 class=\"signup-contentHead\"> SmartClinic Sign-up / {{activatedtabHeading}}</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<form [formGroup]=\"stepTwoForm\" autocomplete=\"off\">\n\t\t\t\t\t<div class=\"col-md-7 col-sm-7 col-xs-12\">\n\t\t\t\t\t\t<div class=\"signup-card\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 inform-margin\">\n\t\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"field6\"> Full Name<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t\t<input id=\"field6\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[A-Z ]+\" [(ngModel)]=\"ProfileDetail.first_name\" [formControl]=\"stepTwoForm.controls['first_name']\" placeholder=\"Enter your full name in capital letter\"/>\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['first_name'].valid  && (stepTwoForm.controls['first_name'].touched)\">plase enter name in capital letter only !!!</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<label> Select Specialization<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t<select class=\"form-control txtfield {{dynamic_class}}\" required [(ngModel)]=\"ProfileDetail.specialization\" [formControl]=\"stepTwoForm.controls['specialization']\" (change)=\"checkOther(ProfileDetail.specialization)\">\n\t\t\t\t\t\t\t\t\t\t<option selected  value=\"\"  > Select Specialization </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"CARDIOLOGIST\"> CARDIOLOGIST </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"DENTIST\"> DENTIST </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"DERMATOLOGIST\"> DERMATOLOGIST </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"DIABETOLOGIST\"> DIABETOLOGIST </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"DIETICIAN\"> DIETICIAN </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"E.N.T.\">E.N.T.</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"GASTROENTEROLOGIST\"> GASTROENTEROLOGIST </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"GENERAL PHYSICIAN\"> GENERAL PHYSICIAN </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"GENERAL SURGEON\"> GENERAL SURGEON </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"GYNOCOLOGIST/OBSTETRICIAN\"> GYNOCOLOGIST/OBSTETRICIAN </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"NEPHROLOGIST\"> NEPHROLOGIST </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"NEUROLOGIST\"> NEUROLOGIST </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"ONCOLOGIST\"> ONCOLOGIST </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"OPTHALMOLOGIST\"> OPTHALMOLOGIST </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"ORTHOPEDIST\"> ORTHOPEDIST </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"PEDIATRICIAN\"> PEDIATRICIAN </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"PSYCHIATRIST\"> PSYCHIATRIST </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"PULMONOLOGIST\"> PULMONOLOGIST </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"RHEUMATOLOGIST\"> RHEUMATOLOGIST </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"SEXOLOGIST\"> SEXOLOGIST </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"UROLOGIST\"> UROLOGIST </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"OTHER\"> OTHER </option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"other_specialization\">\n\t\t\t\t\t\t\t\t\t<label> Enter Other Specialisation<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"Other Specialization\" [(ngModel)]=\"ProfileDetail.other_specialization\" [formControl]=\"stepTwoForm.controls['other_specialization']\" />\n\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['other_specialization'].valid\">Invalid Entry !!!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<label> Medical/State council registration number<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"110067\" [(ngModel)]=\"ProfileDetail.registration_no\" [formControl]=\"stepTwoForm.controls['registration_no']\" />\n\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['registration_no'].valid  && (stepTwoForm.controls['registration_no'].touched)\">Invalid registration number !!!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<label> Qualification<sup>*</sup> <small class=\"text-muted\">(Degrees separated by comma) </small></label>\n\t\t\t\t\t\t\t\t\t<tag-input class=\"selectize-qual\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"MBBS, MD\" theme='bootstrap' [(ngModel)]=\"ProfileDetail.qualification\" [formControl]=\"stepTwoForm.controls['qualification']\"></tag-input>\n\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['qualification'].valid  && (stepTwoForm.controls['qualification'].touched)\">Invalid qualification !!!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<label> Professional Affiliation <small class=\"text-muted\">(Separated by comma) </small></label>\n\t\t\t\t\t\t\t\t\t<tag-input class=\"selectize-qual\" placeholder=\"Add more\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Sr. consultant at Fortis, Member of API....\" theme='bootstrap' [(ngModel)]=\"ProfileDetail.professional_affiliation\" [formControl]=\"stepTwoForm.controls['professional_affiliation']\"></tag-input>\n\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['professional_affiliation'].valid  && (stepTwoForm.controls['professional_affiliation'].touched)\">Invalid professional affiliation !!!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<label> Date of Birth<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t\t<input type='text' class=\"form-control txtfield\" id='datetimepicker' placeholder=\"(YYYY-MM-DD)\" pattern=\"(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))\" [(ngModel)]=\"ProfileDetail.dob\" [formControl]=\"stepTwoForm.controls['dob']\" />\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['dob'].valid  && (stepTwoForm.controls['dob'].touched)\">Invalid date of birth !!!</p>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<label> Date of Birth<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t<!-- <input matInput class=\"form-control txtfield\" id='datetimepicker' placeholder=\"DOB\" [matDatepicker]=\"picker\" (dateInput)=\"inputFromDate(ProfileDetail.dob)\" [(ngModel)]=\"ProfileDetail.dob\" [formControl]=\"stepTwoForm.controls['dob']\" />\n\t\t\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t\t\t\t\t\t\t\t<mat-datepicker #picker></mat-datepicker> -->\n\t\t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"ProfileDetail.dob\" [formControl]=\"stepTwoForm.controls['dob']\" [settings]=\"settings\"></angular2-date-picker>\n\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['dob'].valid  && (stepTwoForm.controls['dob'].touched)\">Invalid date of birth !!!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<label> Practicing Since<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"yyyy\" pattern=\"[0-9.]+\" maxLength=\"4\" [(ngModel)]=\"ProfileDetail.practicing_since\" [formControl]=\"stepTwoForm.controls['practicing_since']\" />\n\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['practicing_since'].valid  && (stepTwoForm.controls['practicing_since'].touched)\">Invalid year !!!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<label> Consultation fee\n\t\t\t\t\t\t\t\t\t\t<sup>*</sup>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"500\" pattern=\"[0-9.]+\" maxLength=\"10\" value=\"0\" [(ngModel)]=\"ProfileDetail.consultation_fee\" [formControl]=\"stepTwoForm.controls['consultation_fee']\" />\n\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['consultation_fee'].valid  && (stepTwoForm.controls['consultation_fee'].touched)\">Invalid fee !!!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<!-- <label> Your Expertise<sup>*</sup> (Disease &amp; Conditions) (Multiple Field seperated by coma)  </label> -->\n\t\t\t\t\t\t\t\t\t<label>Specialized treatments available for<sup>*</sup> <small class=\"text-muted\">(Diseases/Conditions seperated by comma)</small></label>\n\t\t\t\t\t\t\t\t\t<tag-input class=\"selectize-qual\" [separatorKeyCodes]=\"[188]\" placeholder=\"Add more\" secondaryPlaceholder=\"Diabetes, Asthma etc\" theme='bootstrap' [(ngModel)]=\"ProfileDetail.expertise\" [formControl]=\"stepTwoForm.controls['expertise']\"></tag-input>\n\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepTwoForm.controls['expertise'].valid  && (stepTwoForm.controls['expertise'].touched)\">Invalid expertise(s) !!!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"row\"> -->\n\t\t\t\t\t\t\t\t\t<!--div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"signup-card text-center\">\n\t\t\t\t\t\t\t\t\t\t\t <re-captcha (resolved)=\"resolved($event, 'step2')\" siteKey=\"6LdBQZoUAAAAACukEUlsU0fnfOcFdXQYuyAcpO9J\"></re-captcha>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div-->\n\t\t\t\t\t\t\t\t<!-- </div> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card\">\n\t\t\t\t\t\t<div class=\"signup-profile\">\n\t\t\t\t\t\t\t<div class=\"signup-uploadimg\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/profile-placeholder.png\" class=\"img-responsive\" *ngIf=\"!ProfileDetail.selectedImage\" />\n\t\t\t\t\t\t\t\t<img [src]=\"ProfileDetail.selectedImage\" class=\"img-responsive\" *ngIf=\"ProfileDetail.selectedImage\" />\n\t\t\t\t\t\t\t\t<input type=\"file\" (change)=\"onupload($event)\" name=\"\" class=\"inpt-file\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card text-center\">\n\t\t\t\t\t\t<!-- <button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"!stepTwoForm.valid || !ProfileDetail.selectedImage\" (click)=\"saveStepTwoDetails()\"> Save </button> -->\n\t\t\t\t\t\t<button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"(!stepTwoForm.valid)\" (click)=\"saveStepTwoDetails()\"> Save </button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"\" *ngIf=\"activatedtab==2\">\n\t<div class=\"signup-content-wrapper\">\n\t\t<div class=\"signup-content\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card\">\n\t\t\t\t\t\t<h3 class=\"signup-contentHead\"> SmartClinic Sign-up / {{activatedtabHeading}}</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7 col-sm-12 col-xs-12\" *ngIf=\"!loading\">\n\t\t\t\t\t<div class=\"signup-card\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<form [formGroup]=\"stepThreeForm\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t<div class=\"option-div\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-8 col-sm-8 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"option-ques\"> Do you own the clinic? </h3>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-4 col-sm-4 col-xs-12\"> \n\t\t\t\t\t\t\t\t\t\t<ul class=\"option-form\">\n\t\t\t\t\t\t\t\t\t\t\t<li value=\"yes\" [ngClass]=\"formClass1\" (click)=\"yesform()\"> Yes </li>\n\t\t\t\t\t\t\t\t\t\t\t<li value=\"no\" [ngClass]=\"formClass2\" (click)=\"noform()\"> No </li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 inform-margin\" *ngIf=\"condition\">\n\t\t\t\t\t\t\t\t\t\t<label> Clinic Name <sup>*</sup></label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control txtfield\" pattern=\"[A-Z ]+\" placeholder=\"Enter Clinic Name In Capital Letter\" [(ngModel)]=\"ClinicContactDetail.clinic_name\" [formControl]=\"stepThreeForm.controls['clinic_name']\" /><!-- ngx-google-places-autocomplete [options]=\"{ types: [(geocode)],componentRestrictions: { country: 'IN' } }\" #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" /> -->\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepThreeForm.controls['clinic_name'].valid  && (stepThreeForm.controls['clinic_name'].touched) && condition\">Plase enter capital letter's only !!!</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-md-12\" *ngIf=\"condition\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"pull-left\"> Clinic Contact Details </h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"yes-form\" *ngIf=\"condition\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<label> Flat/House/building No<sup>*</sup></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"E-286\" [(ngModel)]=\"ClinicContactDetail.address\" [formControl]=\"stepThreeForm.controls['address']\" />\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepThreeForm.controls['address'].valid  && (stepThreeForm.controls['address'].touched)\">Invalid address !!!</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<label> Location/Area <sup>*</sup></label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control txtfield\" [(ngModel)]=\"ClinicContactDetail.area\" [formControl]=\"stepThreeForm.controls['area']\"/>\n\t\t\t\t\t\t\t\t\t\t<!--  [matAutocomplete]=\"auto\" (keyup)=\"SearchLocation(ClinicContactDetail.area)\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <mat-autocomplete #auto=\"matAutocomplete\" >\n\t\t\t\t\t\t\t\t\t\t  <mat-option (onSelectionChange)=\"onAddLocation($event)\" *ngFor=\"let option of ClinicContactDetail.database\" [value]=\"option\" >\n\t\t\t\t\t\t\t\t\t\t\t{{option}}\n\t\t\t\t\t\t\t\t\t\t  </mat-option>\n\t\t\t\t\t\t\t\t\t\t</mat-autocomplete> -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<label> State <sup>*</sup></label>\n\t\t\t\t\t\t\t\t\t\t<select name=\"state\" class=\"form-control txtfield\" [(ngModel)]=\"state\" [formControl]=\"stepThreeForm.controls['state']\" (change)=\"stateSelected()\">\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let state of statesList\" value=\"{{state.id}}\">{{state.name}}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<label> City<sup>*</sup></label>\n\t\t\t\t\t\t\t\t\t\t<select name=\"city\" class=\"form-control txtfield\" [(ngModel)]=\"city\" [formControl]=\"stepThreeForm.controls['city']\" (change)=\"citySelected()\">\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let city of citiesList\" value=\"{{city.id}}\">{{city.name}}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<label> Clinic Land line number (for appointments) </label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"0121\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"ClinicContactDetail.std_code\" [formControl]=\"stepThreeForm.controls['std_code']\"/>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"22492032\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"ClinicContactDetail.landline\" [formControl]=\"stepThreeForm.controls['landline']\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepThreeForm.controls['std_code'].valid  && (stepThreeForm.controls['std_code'].touched)\">Invalid Code !!!</p>\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepThreeForm.controls['landline'].valid  && (stepThreeForm.controls['landline'].touched)\">Invalid number !!!</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<label> Clinic Mobile number (for appointments) <sup>*</sup></label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">+91</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"mobile\" class=\"form-control txtfield\" name=\"\" placeholder=\"8506006693\" pattern=\"[0-9-+.]+\" maxLength=\"10\" [(ngModel)]=\"ClinicContactDetail.mobile\" [formControl]=\"stepThreeForm.controls['mobile']\" />\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepThreeForm.controls['mobile'].valid  && (stepThreeForm.controls['mobile'].touched)\">Invalid mobile number !!!</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <label> Clinic email</label>\n                                            \n                                                <input type=\"text\"  class=\"form-control txtfield\" name=\"\" placeholder=\"doctm@gmail.com\" [(ngModel)]=\"ClinicContactDetail.email\" [formControl]=\"stepThreeForm.controls['email']\" autocomplete=\"asdkgubmnlk\"/>\n                                                \n                                            \n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <label> Clinic website </label>\n                                            \n                                                <input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"https://doctm.com\"  [(ngModel)]=\"ClinicContactDetail.website\" [formControl]=\"stepThreeForm.controls['website']\" (keyup)=\"checkData()\"/>\n                                               \n                                            \n                                        </div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<label> Search your clinic on Google Map</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control txtfield\" placeholder=\"Write your clinic name\" [(ngModel)]=\"ClinicContactDetail.clinic_name1\" [formControl]=\"stepThreeForm.controls['clinic_name1']\" ngx-google-places-autocomplete [options]=\"{ types: [(geocode)],componentRestrictions: { country: 'IN' } }\" #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" *ngIf=\"!enable_map\"/> \n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepThreeForm.controls['clinic_name1'].valid  && (stepThreeForm.controls['clinic_name1'].touched)&& \t!enable_map\">Invalid name !!!</p>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" style=\"float:right; margin-top:3px; font-weight:bolder; text-decoration:none;\" (click)=\"showMap('manual')\" *ngIf=\"!enable_map\">Could not find your clinic? Locate manually</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" style=\"float:right; margin-top:3px; font-weight:bolder; text-decoration:none;\" (click)=\"showMap('auto')\" *ngIf=\"enable_map\">Search your clinic by typing clinic name</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 map-box\" *ngIf=\"enable_map\">\n\t\t\t\t\t\t\t\t\t\t<p><small>Drag the marker to exactly locate your clinic</small></p>\n\t\t\t\t\t\t\t\t\t\t<!-- <input id=\"pac-input\" class=\"form-control\" type=\"text\" placeholder=\"Search Box\"> -->\n\t\t\t\t\t\t\t\t\t\t<agm-map [zoom]=\"16\" [latitude]=\"lat\" [longitude]=\"lng\">\n\t\t\t\t\t\t\t\t\t\t\t<agm-marker [markerDraggable]=\"true\" [markerClickable]=\"true\" (dragEnd)=\"placeMarker($event)\" [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n\t\t\t\t\t\t\t\t\t\t</agm-map>\n\t\t\t\t\t\t\t\t\t\t<!-- <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" \n\t\t\t\t\t\t\t\t\t\t[zoom]=\"zoom\" style=\"height: 250px;\">\n\t\t\t\t\t\t\t\t\t\t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n\t\t\t\t\t\t\t\t\t\t</agm-map> -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">Clinic Id and Doctor Id are automatically generated and can be seen on the profile page after the sign up.</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<label> Clinic id<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" disabled=\"true\" value=\"{{ClinicContactDetail.clinic_id}}\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<label> Doctor id<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" disabled=\"true\" value=\"{{ProfileDetail.registration_no}}\" />\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"no-form\" *ngIf=\"!condition\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<label>Clinic Id you want to associate with<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" placeholder=\"Clinic Id\" [(ngModel)]=\"ClinicContactDetail.clinic_id\" [ngModelOptions]=\"{standalone: true}\"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<p>Your clinic contact details will be same as the clinic you get associated with. Your doctm ID will be automatically generated and can be seen on your profile page after the sign up.</p>\n\t\t\t\t\t\t\t\t\t\t<!-- <label> Doctor id<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control txtfield\" name=\"\" disabled=\"true\" value=\"{{ProfileDetail.registration_no}}\" /> -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--div class=\"signup-card text-center\">\n\t\t\t\t\t\t<re-captcha (resolved)=\"resolved($event, 'step3')\" siteKey=\"6LdBQZoUAAAAACukEUlsU0fnfOcFdXQYuyAcpO9J\"></re-captcha>\n\t\t\t\t\t</div-->\n\t\t\t\t\t<div class=\"signup-card text-center\">\n\t\t\t\t\t\t<button *ngIf=\"condition\" class=\"btn btn-custom\" type=\"submit\" [disabled]=\"!stepThreeForm.valid\" (click)=\"saveStepThreeDetails()\"> Save </button>\n\t\t\t\t\t\t<button *ngIf=\"ClinicContactDetail.userOwnClinic=='No'\" class=\"btn btn-custom\" type=\"submit\" [disabled]=\"!ClinicContactDetail.clinic_id\" (click)=\"saveStepThreeDetails()\"> Save </button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"\" *ngIf=\"activatedtab==3\">\n\t<div class=\"signup-content-wrapper\">\n\t\t<div class=\"signup-content signup-consultSchedul\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-12\">\n\t\t\t\t\t\t\t\t<h3 class=\"signup-contentHead\"> SmartClinic Sign-up / {{activatedtabHeading}}</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"btn btn-custom pull-right\" (click)=\"preview()\">Preview</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"consult-scheduleul\">\n\t\t\t\t\t<li *ngFor=\"let schedule of scheduleArray;let i = index;\">\n\t\t\t\t\t\t<div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n\t\t\t\t\t\t\t<div class=\"signup-card schedul-box\">\n\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\" role=\"tab\" id=\"heading\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse{{i+1}}\" aria-expanded=\"true\" aria-controls=\"collapse\">\n\t\t\t\t\t\t\t\t\t\t\tSchedule #{{i+1}} <span class=\"trash-schedule\"> <i class=\"fa fa-trash\" (click)=\"deleteSchedule(i)\"></i> </span></a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div id=\"collapse{{i+1}}\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"heading\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"opened-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"day_schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"changeDay(schedule.Monday,1,i)\" [(ngModel)]=\"schedule.Monday\" [ngModelOptions]=\"{standalone: true}\" value=\"Monday\" name=\"\" /> Monday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"changeDay(schedule.Tuesday,2,i)\" [(ngModel)]=\"schedule.Tuesday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Tuesday\" /> Tuesday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"changeDay(schedule.Wednesday,3,i)\" [(ngModel)]=\"schedule.Wednesday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Wednesday\" /> Wednesday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"changeDay(schedule.Thursday,4,i)\" [(ngModel)]=\"schedule.Thursday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Thursday\" /> Thursday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"changeDay(schedule.Friday,5,i)\" [(ngModel)]=\"schedule.Friday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Friday\" /> Friday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"changeDay(schedule.Saturday,6,i)\" [(ngModel)]=\"schedule.Saturday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Saturday\" /> Saturday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"changeDay(schedule.Sunday,7,i)\" [(ngModel)]=\"schedule.Sunday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Sunday\" /> Sunday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"shift-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let shift of schedule.shifts;let j = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"text-uppercase\"> Shift-{{j+1}} </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> From <small class=\"text-muted\">(HH : MM)</small></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-timepicker [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [(ngModel)]=\"schedule.shifts[j].fromTime\"></ngb-timepicker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> Untill <small class=\"text-muted\">(HH : MM)</small></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-timepicker [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [(ngModel)]=\"schedule.shifts[j].toTime\"></ngb-timepicker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"shift-trash ok-btn-prnt m-b-5\"> <span class=\"trash-schedule\"><i class=\"fa fa-trash\" (click)=\"deleteShiftFromArray(i,j)\"></i> </span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"schedule.shifts.length<6 && schedule.show_new_shift==true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"text-uppercase\"> New Shift </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> From <small class=\"text-muted\">(HH : MM)</small></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-timepicker [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [(ngModel)]=\"schedule.fromTime\"></ngb-timepicker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> Untill <small class=\"text-muted\">(HH : MM)</small></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-timepicker [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [(ngModel)]=\"schedule.toTime\"></ngb-timepicker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"shift-trash ok-btn-prnt m-b-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-cloud-upload\" (click)=\"addShiftInArray(i)\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span class=\"ok-btn\" (click)=\"addShiftInArray(i)\"></span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/submit.png\" (click)=\"addShiftInArray(i)\"  />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"shift-trash  ok-btn-prnt m-b-5\" *ngIf=\"schedule.shifts.length>0\"> <i class=\"fa fa-trash\" (click)=\"hideNewShiftSchedule(i)\"></i> </a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"schedule.shifts.length<6\" class=\"opened-heading\" (click)=\"addShiftInArray(i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"text-center\"> Add More Shift <a href=\"javascript:void(0);\" class=\"shift-add\"> <i class=\"fa fa-plus-circle\"></i> </a> </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"opened-heading\" *ngIf=\"schedule.shifts.length==6\" (click)=\"addShiftInArray(i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"text-center\"> Save </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li *ngIf=\"show_new_schedule==true\">\n\t\t\t\t\t\t<div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n\t\t\t\t\t\t\t<div class=\"signup-card schedul-box\">\n\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\" role=\"tab\" id=\"heading2\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseStatic\" aria-expanded=\"true\" aria-controls=\"collapseStatic\">\n\t\t\t\t\t\t\t\t\t\t\tNew Schedule <span class=\"trash-schedule\" *ngIf=\"scheduleArray.length>0\"> <i class=\"fa fa-trash\" (click)=\"hideNewSchedule()\"></i> </span></a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div id=\"collapseStatic\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"heading2\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"opened-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"day_schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" disabled=\"{{mondayDisabled}}\" [(ngModel)]=\"myObject.Monday\" [ngModelOptions]=\"{standalone: true}\" value=\"Monday\" name=\"\" /> Monday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" disabled=\"{{tuesdayDisabled}}\" [(ngModel)]=\"myObject.Tuesday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Tuesday\" /> Tuesday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" disabled=\"{{wednesdayDisabled}}\" [(ngModel)]=\"myObject.Wednesday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Wednesday\" /> Wednesday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" disabled=\"{{thursdayDisabled}}\" [(ngModel)]=\"myObject.Thursday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Thursday\" /> Thursday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" disabled=\"{{fridayDisabled}}\" [(ngModel)]=\"myObject.Friday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Friday\" /> Friday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" disabled=\"{{saturdayDisabled}}\" [(ngModel)]=\"myObject.Saturday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Saturday\" /> Saturday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" disabled=\"{{sundayDisabled}}\" [(ngModel)]=\"myObject.Sunday\" [ngModelOptions]=\"{standalone: true}\" name=\"\" value=\"Sunday\" /> Sunday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"shift-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let shift of myObject.shifts;let j = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"text-uppercase\"> Shift-{{j+1}} </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> From <small class=\"text-muted\">(HH : MM)</small></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-timepicker [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [(ngModel)]=\"myObject.shifts[j].fromTime\"></ngb-timepicker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> Untill <small class=\"text-muted\">(HH : MM)</small></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-timepicker [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [(ngModel)]=\"myObject.shifts[j].toTime\"></ngb-timepicker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"shift-trash\"> <i class=\"fa fa-trash\" (click)=\"deleteShift(j)\"></i> </a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"myObject.shifts.length<6 && show_new_shift==true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"text-uppercase\"> New Shift </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> From <small class=\"text-muted\">(HH : MM)</small></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-timepicker [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [(ngModel)]=\"myObject.fromTime\"></ngb-timepicker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> Untill <small class=\"text-muted\">(HH : MM)</small></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-timepicker [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [(ngModel)]=\"myObject.toTime\"></ngb-timepicker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"shift-trash ok-btn-prnt m-b-5\"><!--  <i class=\"fa fa-cloud-upload\" (click)=\"addShift('not_show')\"></i> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t--> <!-- <span class=\"ok-btn\" (click)=\"addShift('not_show')\"></span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/imgs/submit.png\" (click)=\"addShift('not_show')\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"shift-trash\" *ngIf=\"myObject.shifts.length>0\"> <i class=\"fa fa-trash\" (click)=\"hideNewShift()\"></i> </a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"myObject.shifts.length<6\" class=\"opened-heading\" (click)=\"addShift('show')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"text-center\"> Add More Shift <a href=\"javascript:void(0);\" class=\"shift-add\"> <i class=\"fa fa-plus-circle\"></i> </a> </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"opened-heading\" *ngIf=\"myObject.shifts.length==6\" (click)=\"addShift('not_show')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"text-center\"> Save </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- <li>\n\t\t\t\t\t\t<div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n\t\t\t\t\t\t\t<div class=\"signup-card schedul-box\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\" role=\"tab\" id=\"heading3\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\" aria-expanded=\"true\" aria-controls=\"collapse3\">\n\t\t\t\t\t\t\t\t\t\t\tSchedule #3 <span class=\"trash-schedule\"> <i class=\"fa fa-trash\"></i> </span></a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div id=\"collapse3\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"heading3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">                                                \n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"opened-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"day_schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"monday\" name=\"\" /> Monday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\" value=\"tuesday\" /> Tuesday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\" value=\"wednesday\" /> Wednesday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\" value=\"thursday\" /> Thursday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\" value=\"friday\" /> Friday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\" value=\"saturday\" /> Saturday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\" value=\"sunday\" /> Sunday\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"shift-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"text-uppercase\"> Shift-1 </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> From </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"timepicker1 form-control txtfield\" name=\"\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> Untill </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"timepicker1 form-control txtfield\" name=\"\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"shift-trash\"> <i class=\"fa fa-trash\"></i> </a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"text-uppercase\"> Shift-2 </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> From </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"timepicker1 form-control txtfield\" name=\"\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> Untill </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"timepicker1 form-control txtfield\" name=\"\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"shift-trash\"> <i class=\"fa fa-trash\"></i> </a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"text-uppercase\"> Shift-3 </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> From </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"timepicker1 form-control txtfield\" name=\"\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> Untill </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"timepicker1 form-control txtfield\" name=\"\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tablecell-schedule\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"shift-trash\"> <i class=\"fa fa-trash\"></i> </a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"opened-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"text-center\"> Add More Shift <a href=\"javascript:void(0);\" class=\"shift-add\"> <i class=\"fa fa-plus-circle\"></i> </a> </h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li> -->\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"addschedul-box\">\n\t\t\t\t\t\t\t<div class=\"signup-card schedul-box\">\n\t\t\t\t\t\t\t\t<div class=\"addschedul-div\" (click)=\"addAnotherSchedule()\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus-circle\"></i> Add Another Schedule\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<!--div class=\"col-md-6 col-sm-6 col-xs-6\">\n\t\t\t\t\t<div class=\"signup-card text-center\">\n\t\t\t\t\t\t<re-captcha (resolved)=\"resolved($event, 'step4')\" siteKey=\"6LdBQZoUAAAAACukEUlsU0fnfOcFdXQYuyAcpO9J\"></re-captcha>\n\t\t\t\t\t</div>\n\t\t\t\t</div-->\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card text-center\">\n\t\t\t\t\t\t<button class=\"btn btn-custom\"   type=\"submit\" (click)=\"saveConsultationSchedule()\"> Save </button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"\" *ngIf=\"activatedtab==4\">\n\t<div class=\"signup-content-wrapper\">\n\t\t<div class=\"signup-content\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card\">\n\t\t\t\t\t\t<h3 class=\"signup-contentHead\"> SmartClinic Sign-up / {{activatedtabHeading}}</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"smartasst-box\">\n\t\t\t\t\t<form [formGroup]=\"stepFourForm\" autocomplete=\"off\">\n\t\t\t\t\t\t<div class=\"col-md-5 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"signup-card signup-smartasst\">\n\t\t\t\t\t\t\t\t<h3 class=\"text-center m-b-30\">SmartAssistant</h3>\n\t\t\t\t\t\t\t\t<p>SmartAssistant for the clinic you have associated with will also do registration and book appointments for your patients. To avail its services, you need to select the given module parameters as per your choice.</p>\n\t\t\t\t\t\t\t\t<!-- <p>SmartAssistant module is the reception module of your clinic. It is for doing registration of your patients and also for booking appointments for consultation.</p>\n\t\t\t\t\t\t\t\t<p>To avail its services, you need to fill-in the login credentials of SmartAssistant module and also select module parameters given here as per your choice.</p>\n\t\t\t\t\t\t\t\t<p>The User ID can be same as your SmartClinic or different.</p> -->\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-7 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"signup-card newform-margin\">\n\t\t\t\t\t\t\t\t<div class=\"wrapper-div-cstm\" *ngIf=\"smartAssistantDiv\">\n\t\t\t\t\t\t\t\t\t<h4 *ngIf=\"smartAssistantDiv\"> 1. Define SmartAssistant Login Credentials </h4>\n\t\t\t\t\t\t\t\t\t<!-- <h4 *ngIf=\"!smartAssistantDiv\"> 1. Details about your Smart Assistant</h4> -->\n\t\t\t\t\t\t\t\t<!-- \t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<label for=\"field8\" *ngIf=\"!smartAssistantDiv\">Assistant Name</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t\t<input *ngIf=\"!smartAssistantDiv\" readonly id=\"field8\" type=\"text\" class=\"form-control txtfield\" name=\"\" pattern=\"[a-zA-z ]+\" required=\"\" [(ngModel)]=\"SmartAssistantDetail.name\" [formControl]=\"stepFourForm.controls['name']\" />\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<input *ngIf=\"smartAssistantDiv\" id=\"field8\" type=\"text\" class=\"form-control txtfield\" name=\"\" pattern=\"[a-zA-z ]+\" required=\"\" [(ngModel)]=\"SmartAssistantDetail.name\" [formControl]=\"stepFourForm.controls['name']\" />\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"field8\" class=\"labelFloat\" *ngIf=\"smartAssistantDiv\">Assistant Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepFourForm.controls['name'].valid  && (stepFourForm.controls['name'].touched)\">Invalid name !!!</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<label *ngIf=\"!smartAssistantDiv\" for=\"field9\"> Assistant Mobile Number<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"smartAssistantDiv\" class=\"input-group-addon\">+ 91</span>\n\t\t\t\t\t\t\t\t\t\t\t<input *ngIf=\"smartAssistantDiv\" id=\"field9\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"SmartAssistantDetail.phone\" [formControl]=\"stepFourForm.controls['phone']\" (blur)=\"GetSmartAssistantByPhone(SmartAssistantDetail.phone)\" autocomplete=\"new-mobile-id\"/>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<input *ngIf=\"!smartAssistantDiv\" id=\"field9\" readonly type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"SmartAssistantDetail.phone\" [formControl]=\"stepFourForm.controls['phone']\" (blur)=\"GetSmartAssistantByPhone(SmartAssistantDetail.phone)\" autocomplete=\"new-mobile-id\"/>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<label *ngIf=\"smartAssistantDiv\" for=\"field9\" class=\"labelFloat\"> Assistant Mobile Number<sup>*</sup> </label>\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepFourForm.controls['phone'].valid  && (stepFourForm.controls['phone'].touched)\">Invalid mobile number !!!</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!smartAssistantDiv\"> \n\t\t\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t\t<input id=\"field10\" type=\"text\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"SmartAssistantDetail.unique_id\" [formControl]=\"stepFourForm.controls['unique_id']\" autocomplete=\"new-email-id\"/>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"field10\" class=\"labelFloat\"> Assistant User ID (Email format)<sup>*</sup></label>\n\t\t\t\t\t\t\t\t\t\t\t<p>​(User ID can be same as your SmartClinic or different)</p>\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepFourForm.controls['unique_id'].valid  && (stepFourForm.controls['unique_id'].touched)\">Invalid email id !!!</p>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!smartAssistantDiv\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<input id=\"field11\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" [(ngModel)]=\"SmartAssistantDetail.password\" [formControl]=\"stepFourForm.controls['password']\" (input)=\"checkPassword1(SmartAssistantDetail.password)\" autocomplete=\"off\"/>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"field11\" class=\"labelFloat\">Create password<sup>*</sup></label>\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!stepFourForm.controls['password'].valid  && (stepFourForm.controls['password'].touched)\">Password can be of 8 to 15 characters !!!</p>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"instruction-ul\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"(lowerCase1==true) ? 'passed': ''\">One lowercase character</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"(specialCase1==true) ? 'passed': ''\">One special character</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"(upperCase1==true) ? 'passed': ''\">One uppercase character</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"(lengthCase1==true) ? 'passed': ''\">8 characters minimum</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"(numberCase1==true) ? 'passed': ''\">One number</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\" [hidden]=\"!smartAssistantDiv\">\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t\t<input id=\"field12\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" (keyup)=\"onKey1($event)\" [(ngModel)]=\"SmartAssistantDetail.confirm_password\" [formControl]=\"stepFourForm.controls['confirm_password']\"/>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"field12\" class=\"labelFloat\">Confirm password<sup>*</sup></label>\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"p_false1\">Password and confirm password are not same !!!</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"wrapper-div-cstm\">\n\t\t\t\t\t\t\t\t\t<h4 *ngIf=\"!smartAssistantDiv\">1. Details about your Smart Assistant</h4>\n\t\t\t\t\t\t\t\t\t<h4 *ngIf=\"smartAssistantDiv\">2. Details about your Smart Assistant</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<label> Select average consultation time per patient</label>\n\t\t\t\t\t\t\t\t\t\t<select required class=\"form-control txtfield {{param_one_class}}\" [(ngModel)]='SmartAssistantDetail.avgConsTime' [formControl]=\"stepFourForm.controls['avgConsTime']\" (change)=\"changeParamOneClass($event)\" >\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\"> Average consultation time per patient </option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"5 mins\"> 5 mins </option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"6 mins\"> 6 mins </option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"8 mins\"> 8 mins </option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"10 mins\"> 10 mins </option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"12 mins\"> 12 mins </option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"15 mins\"> 15 mins </option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"20 mins\"> 20 mins </option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"Auto\"> Auto </option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<label> Select waiting time for a given Appointment</label>\n\t\t\t\t\t\t\t\t\t\t<select required class=\"form-control txtfield {{param_two_class}}\" [(ngModel)]='SmartAssistantDetail.waitingTime' [formControl]=\"stepFourForm.controls['waitingTime']\" (change)=\"changeParamTwoClass($event)\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\"> Waiting time for a given Appointment </option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"10 mins\"> 10 mins </option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"15 mins\"> 15 mins </option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"30 mins\"> 30 mins </option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"45 mins\"> 45 mins </option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"60 mins\"> 60 mins </option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"90 mins\"> 90 mins </option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"120 mins\"> 120 mins </option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"wrapper-div-cstm\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<h4 *ngIf=\"!smartAssistantDiv\">2. Define patient registration form fields</h4>\n\t\t\t\t\t\t\t\t\t\t<h4 *ngIf=\"smartAssistantDiv\">3. Define patient registration form fields</h4>\n\t\t\t\t\t\t\t\t\t\t<div class=\"pat-reg-form\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\" *ngFor=\"let pt of smartAssistantRegFields\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [disabled]=\"pt.disable\" [checked]=\"pt.status\" (change)=\"changeSmartAssistantRegFields(pt)\" name=\"\" /> {{pt.name}}<span *ngIf=\"pt.star\">*</span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!--div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"signup-card smartasstFooter\">\n\t\t\t\t\t\t\t\t\t\t<re-captcha (resolved)=\"resolved($event, 'step5')\" siteKey=\"6LdBQZoUAAAAACukEUlsU0fnfOcFdXQYuyAcpO9J\"></re-captcha>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div-->\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card smartasstFooter\">\n\t\t\t\t\t\t<!--a (click)=\"saveStepFourDetails(0)\" class=\"btn btn-outline\" type=\"button\">\n\t\t\t\t\t\t\tSkip\n\t\t\t\t\t\t\t<div class=\"outlinebtn_text\"> <small> You can add later </small> </div>\n\t\t\t\t\t\t</a-->\n\t\t\t\t\t\t<!-- (!stepFourForm.valid) || -->\n\t\t\t\t\t\t<button class=\"btn btn-custom\" type=\"submit\" [disabled]=\" (p_false1)\" (click)=\"saveStepFourDetails(1)\"> Save </button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"\" *ngIf=\"activatedtab==5\">\n\t<div class=\"signup-content-wrapper\">\n\t\t<div class=\"signup-content signup-clinicServc\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card\">\n\t\t\t\t\t\t<h3 class=\"signup-contentHead\"> SmartClinic Sign-up / {{activatedtabHeading}}</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card\">\n\t\t\t\t\t\t<h4> Check to add additional service modules required for your clinic </h4>\n\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"checkbox m-0\">\n\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\"  checked disabled /> Smart Clinic </label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"services\" *ngIf=\"smartAssistantDiv\">\n\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"checkbox m-0\">\n\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\" [(ngModel)]=\"Clinic_Pharmacy\" [ngModelOptions]=\"{standalone: true}\" (click)=\"showModal($event, 'pharmacy')\"/>Smart Pharmacy </label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"checkbox m-0\">\n\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"clincdiag\" name=\"\" [(ngModel)]=\"Clinic_Diagnostics\" [ngModelOptions]=\"{standalone: true}\" (click)=\"showModal($event, 'diagnostics')\" />Smart Diagnostics </label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--ul class=\"sub_checkboxul hideme\" *ngIf=\"Clinic_Diagnostics\">\n\t\t\t\t\t\t\t\t<li *ngFor=\"let option of clinicDiagnosticsList; let i = index;\">\n\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"push(option.name,i)\" name=\"\" [checked]=\"option.status\" /> {{option.name}} </label>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"other\" name=\"\" (change)=\"push(1,-1)\" [(ngModel)]=\"otherSelected\" [ngModelOptions]=\"{standalone: true}\" /> Others\n\t\t\t\t\t\t\t\t\t\t<tag-input *ngIf=\"otherSelected\" class=\"otherfield hideme\" placeholder=\"Other (comma separated)\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Other (comma separated)\" theme='bootstrap' [(ngModel)]=\"OtherClinicService\" [ngModelOptions]=\"{standalone: true}\"></tag-input>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul-->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"checkbox m-0\">\n\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\" class=\"ipd\" [(ngModel)]=\"Clinic_IPD\" [ngModelOptions]=\"{standalone: true}\" (click)=\"showModal($event, 'ipd')\" />Smart IPD </label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t    <div class=\"services\" *ngIf=\"!smartAssistantDiv\">\n\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"savedClinicServices.Clinic_Pharmacy\">\n\t\t\t\t\t\t\t<div class=\"checkbox m-0\">\n\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\" [(ngModel)]=\"Clinic_Pharmacy\" [ngModelOptions]=\"{standalone: true}\" /> Pharmacy </label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"savedClinicServices.Clinic_Diagnostics\">\n\t\t\t\t\t\t\t<div class=\"checkbox m-0\">\n\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"clincdiag\" name=\"\" [(ngModel)]=\"Clinic_Diagnostics\" [ngModelOptions]=\"{standalone: true}\" />Smart Diagnostics </label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--ul class=\"sub_checkboxul hideme\" *ngIf=\"Clinic_Diagnostics\">\n\t\t\t\t\t\t\t\t<li *ngFor=\"let option of clinicDiagnosticsList; let i = index;\">\n\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"push(option.name,i)\" name=\"\" [checked]=\"option.status\" /> {{option.name}} </label>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"other\" name=\"\" (change)=\"push(1,-1)\" [(ngModel)]=\"otherSelected\" [ngModelOptions]=\"{standalone: true}\" /> Others\n\t\t\t\t\t\t\t\t\t\t<tag-input *ngIf=\"otherSelected\" class=\"otherfield hideme\" placeholder=\"Other (comma separated)\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Other (comma separated)\" theme='bootstrap' [(ngModel)]=\"OtherClinicService\" [ngModelOptions]=\"{standalone: true}\"></tag-input>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul-->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"savedClinicServices.Clinic_IPD\">\n\t\t\t\t\t\t\t<div class=\"checkbox m-0\">\n\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\" class=\"ipd\" [(ngModel)]=\"Clinic_IPD\" [ngModelOptions]=\"{standalone: true}\" />Smart IPD </label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card smartasstFooter\">\n\t\t\t\t\t<re-captcha (resolved)=\"resolved($event, 'step6')\" siteKey=\"6LdBQZoUAAAAACukEUlsU0fnfOcFdXQYuyAcpO9J\"></re-captcha>\n\t\t\t\t</div>\n\t\t\t\t</div-->\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card smartasstFooter\">\n\t\t\t\t\t\t<!--a (click)=\"saveStepFiveDetails(0)\" class=\"btn btn-outline\" type=\"button\">\n\t\t\t\t\t\t\tSkip\n\t\t\t\t\t\t\t<div class=\"outlinebtn_text\"> <small> You can add later </small> </div>\n\t\t\t\t\t\t</a-->\n\t\t\t\t\t\t<button class=\"btn btn-custom\" type=\"submit\" (click)=\"saveStepFiveDetails(1)\"> Save </button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"\" *ngIf=\"activatedtab==6\">\n\t<div class=\"signup-content-wrapper\">\n\t\t<div class=\"signup-content signup-clinicServc\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card\">\n\t\t\t\t\t\t<h3 class=\"signup-contentHead\"> SmartClinic Sign-up / {{activatedtabHeading}}</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card\">\n\t\t\t\t\t\t<p class=\"help-note small\"> <b>Following documents  ( jpg / pdf format ) are required to be uploaded for successfull signup</b> </p>\n\t\t\t\t\t\t<div class=\"wrapper-div-cstm\">\n\t\t\t\t\t\t\t<h4><span class=\"color-blue\">1.</span> Photo ID<sup>*</sup> <small>(Select any one)</small> </h4>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<ul class=\"upload-ul\">\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let photoId of photoIDDocumentsList;let i = index\">\n\t\t\t\t\t\t\t\t\t\t<label> {{photoId.name}} </label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"\"  type=\"radio\" name=\"photo\" [checked]=\"photoId.status\" (click)=\"enablePhotoId(i)\"/>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control input_cstm txtfield\" [(ngModel)]=\"photoId.document_name\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!photoId.status\" placeholder=\"{{photoId.placeholder}}\" />\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-btn\" (change)=\"onuploadPhotoId($event,i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" accept=\".jpg,.jpeg,.pdf\" class=\"inpt-file\" [disabled]=\"!photoId.status\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"!photoId.image\" class=\"btn btn-default\" type=\"button\" [disabled]=\"!photoId.status\"> Browse </button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"photoId.image\" class=\"btn btn-success\" type=\"button\"> Uploaded <i class=\"fa fa-check-circle\"></i> </button>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"wrapper-div-cstm\" *ngIf=\"ClinicContactDetail.userOwnClinic=='Yes'\">\n\t\t\t\t\t\t\t<h4> <span class=\"color-blue\">2.</span> Clinic Documents <sup>*</sup> <small>(Select any one)</small> </h4>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<ul class=\"upload-ul clinicDoc\">\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let clinicDocumentId of clinicDocumentsList;let i = index\">\n\t\t\t\t\t\t\t\t\t\t<label> {{clinicDocumentId.name}}&nbsp;&nbsp;&nbsp;<span style=\"font-size: 20px;\" class=\"fa fa-info-circle\" *ngIf=\"clinicDocumentId.name=='Undertaking'\" ngbPopover=\"popContent\" popoverTitle=\"Greeting\" #p=\"ngbPopover\" triggers=\"manual\" (click)=\"showUndertakingInfo()\"></span> </label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"clinic\" [checked]=\"clinicDocumentId.status\" (click)=\"enableClinicDocumentId(i)\" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-btn\" (change)=\"onuploadClinicDocument($event,i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" accept=\".jpg,.jpeg,.pdf\" name=\"\" class=\"inpt-file\" [disabled]=\"!clinicDocumentId.status\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"!clinicDocumentId.image\" class=\"btn btn-default\" type=\"button\" [disabled]=\"!clinicDocumentId.status\"> Browse </button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"clinicDocumentId.image\" class=\"btn btn-success\" type=\"button\"> Uploaded <i class=\"fa fa-check-circle\"></i> </button>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"wrapper-div-cstm\">\n\t\t\t\t\t\t\t<div class=\"medicalReg\">\n\t\t\t\t\t\t\t\t<h4 class=\"medicalReg-text\"> <span class=\"color-blue\" *ngIf=\"ClinicContactDetail.userOwnClinic=='Yes'\">3.</span> <span class=\"color-blue\" *ngIf=\"ClinicContactDetail.userOwnClinic=='No'\">2.</span> Medical registration certificate<sup>*</sup> </h4>\n\t\t\t\t\t\t\t\t<span *ngIf=\"!medical_certificate\" class=\"input-btn btn btn-default\" (change)=\"onuploadMedicalCert($event,i)\">\n\t\t\t\t\t\t\t\t\tBrowse <input type=\"file\" accept=\".jpg,.jpeg,.pdf\" class=\"inpt-file\">\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"medical_certificate\" class=\"input-btn btn btn-success\" (change)=\"onuploadMedicalCert($event,i)\">\n\t\t\t\t\t\t\t\t\tUploaded <i class=\"fa fa-check-circle\"></i> <input type=\"file\" accept=\".jpg,.jpeg,.pdf\" class=\"inpt-file\">\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--div class=\"signup-card text-center\">\n\t\t\t\t\t\t<re-captcha (resolved)=\"resolved($event, 'step3')\" siteKey=\"6LdBQZoUAAAAACukEUlsU0fnfOcFdXQYuyAcpO9J\"></re-captcha>\n\t\t\t\t\t\t</div-->\n\t\t\t\t\t<div class=\"signup-card text-center\">\n\t\t\t\t\t\t<button class=\"btn btn-custom\"  type=\"submit\" (click)=\"saveStepSixDetails()\"> Save </button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"\" *ngIf=\"activatedtab==7\">\n\t<div class=\"signup-content-wrapper\">\n\t\t<div class=\"signup-content\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card\">\n\t\t\t\t\t\t<h3 class=\"signup-contentHead\"> SmartClinic Sign-up / {{activatedtabHeading}}</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"smartasst-box\">\n\t\t\t\t\t<form [formGroup]=\"stepFourForm\" autocomplete=\"off\">\n\t\t\t\t\t\t<div class=\"col-md-5 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"signup-card signup-smartasst\">\n\t\t\t\t\t\t\t\t<h3 class=\"text-center m-b-30\">Why Second language?</h3>\n\t\t\t\t\t\t\t\t<p> Selecting your second language will allow you to get your prescriptions printed in that language. This will help your patiens to understand prescriptions in their own vernacular language. You can choose \"none\" for not availing this service now and may add later.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-7 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"signup-card newform-margin\">\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control txtfield\" [(ngModel)]='languageOption' [ngModelOptions]=\"{standalone: true}\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected=\"\"> None </option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"hi\">Hindi</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"pa\">Punjabi</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"bn\">Bengali</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"gu\">Gujarati</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"kn\">Kannada</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"ml\">Malayalam</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"mr\">Marathi</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"ta\">Tamil</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"te\">Telugu</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t<!--div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card smartasstFooter\">\n\t\t\t\t\t<re-captcha (resolved)=\"resolved($event, 'step7')\" siteKey=\"6LdBQZoUAAAAACukEUlsU0fnfOcFdXQYuyAcpO9J\"></re-captcha>\n\t\t\t\t\t</div>\n\t\t\t\t</div-->\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card smartasstFooter\">\n\t\t\t\t\t\t<button class=\"btn btn-custom\"  type=\"submit\" (click)=\"saveStepSevenDetails()\"> Save </button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- <div class=\"\" *ngIf=\"activatedtab==7\">\n\t<div class=\"signup-content-wrapper\">\n\t\t<div class=\"signup-content\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card\">\n\t\t\t\t\t\t<h3 class=\"signup-contentHead\"> SmartClinic Sign-up / {{activatedtabHeading}}</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"col-md-7 col-sm-7 col-xs-12\">\n\t\t\t\t\t\t<div class=\"signup-card\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 inform-margin\">\n\t\t\t\t\t\t\t\t\t<label> Select your second preferred language</label>\n\t\t\t\t\t\t\t\t\t<select class=\"form-control txtfield\">\n\t\t\t\t\t\t\t\t\t\t<option selected=\"\"> None </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Hindi\">Hindi</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Punjabi\">Punjabi</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Bengali\">Bengali</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Gujarati\">Gujarati</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Kannada\">Kannada</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Malayalam\">Malayalam</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Marathi\">Marathi</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Tamil\">Tamil</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Telugu\">Telugu</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"signup-card text-center\">\n\t\t\t\t\t\t<button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"!stepTwoForm.valid\" (click)=\"saveStepTwoDetails()\"> Save </button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div> -->\n</section>\n<!-- Modal -->\n<div class=\"modal fade cus-modal\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n<div class=\"modal-dialog\" role=\"document\">\n\t<div class=\"modal-content\">\n\t\t<div class=\"modal-header\">\n\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t<span aria-hidden=\"true\">×</span>\n\t\t\t</button>\n\t\t\t<h4 class=\"modal-title\"> Contact details verification </h4>\n\t\t</div>\n\t\t<div class=\"modal-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"contact-modal-body\">\n\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<input type=\"number\" class=\"form-control txtfield\" name=\"\" placeholder=\"Enter OTP received on Mobile\" [(ngModel)]=\"otpPhone\" [ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<input type=\"number\" class=\"form-control txtfield\" name=\"\" placeholder=\"Enter OTP received on Email\" [(ngModel)]=\"otpEmail\" [ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group text-center col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<a href=\"javascript:void(0);\" (click)=\"openOTPModal()\" class=\"resend-link\">Resend OTP</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"!otpPhone || !otpEmail\" (click)=\"verifyOTP()\"> SUBMIT </button>\n\t\t\t<button class=\"btn btn-custom\" type=\"button\" data-dismiss=\"modal\" data-toggle=\"modal\"> Cancel </button>\n\t\t</div>\n\t</div>\n</div>\n</div>\n<!-- Preview Modal -->\n<div class=\"modal fade\" id=\"SchedulepreviewModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n<div class=\"modal-dialog\" role=\"document\">\n\t<div class=\"modal-content\">\n\t\t<div class=\"modal-header\">\n\t\t\t<div>\n\t\t\t\t<h4 class=\"modal-title\"> Preview </h4>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"modal-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"presc-modal-body\">\n\t\t\t\t\t<div class=\"pad-view\">\n\t\t\t\t\t\t<div class=\"padview-header\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group schdl\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"text-underline\"> Schedule: </h4>\n\t\t\t\t\t\t\t\t\t<div class=\"Week-name\" *ngFor=\"let shift of allShifts\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-name-wrp\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-spn\">{{shift.day}}</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-time-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-time\" *ngFor=\"let time of shift.shifts\">[{{time.fromTime.hour}}:{{time.fromTime.minute}} – {{time.toTime.hour}}:{{time.toTime.minute}}]</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"Week-name\" *ngFor=\"let shift of allShiftsClosed\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-name-wrp\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-spn\">{{shift.day}}</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-time-wrap\">\n\t\t\t\t\t\t\t\t\t\t\tClosed\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<p class=\"text-center\">Total number of working hours per week: <strong>{{totalHours}} Hours & {{totalMin}} Minutes</strong></p>\n\t\t</div>\n\t</div>\n</div>\n</div>\n<!-- <div class=\"modal fade\" id=\"previewModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n<div class=\"modal-dialog\" role=\"document\">\n\t<div class=\"modal-content\">\n\t\t<div class=\"modal-header\">\n\t\t\t<div>\n\t\t\t\t<h4 class=\"modal-title\"> Preview </h4>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"modal-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"presc-modal-body\">\n\t\t\t\t\t<div class=\"pad-view\">\n\t\t\t\t\t\t<div class=\"padview-header\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group schdl\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"text-underline\"> Schedule: </h4>\n\t\t\t\t\t\t\t\t\t<div class=\"Week-name\" *ngFor=\"let shift of scheduleArray\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-name-wrp\" *ngIf=\"shift.Monday==true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-spn\">Mon</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-time-wrap\" *ngIf=\"shift.Monday==true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-time\" *ngFor=\"let time of shift.shifts\">[{{time.fromTime.hour}}:{{time.fromTime.minute}} – {{time.toTime.hour}}:{{time.toTime.minute}}]</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-name-wrp\" *ngIf=\"shift.Tuesday==true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-spn\">Tue</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-time-wrap\" *ngIf=\"shift.Tuesday==true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-time\" *ngFor=\"let time of shift.shifts\">[{{time.fromTime.hour}}:{{time.fromTime.minute}} – {{time.toTime.hour}}:{{time.toTime.minute}}]</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-name-wrp\" *ngIf=\"shift.Wednesday==true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-spn\">Wed</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-time-wrap\" *ngIf=\"shift.Wednesday==true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-time\" *ngFor=\"let time of shift.shifts\">[{{time.fromTime.hour}}:{{time.fromTime.minute}} – {{time.toTime.hour}}:{{time.toTime.minute}}]</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-name-wrp\" *ngIf=\"shift.Thrusday==true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-spn\">Thrus</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-time-wrap\" *ngIf=\"shift.Thrusday==true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-time\" *ngFor=\"let time of shift.shifts\">[{{time.fromTime.hour}}:{{time.fromTime.minute}} – {{time.toTime.hour}}:{{time.toTime.minute}}]</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-name-wrp\" *ngIf=\"shift.Friday==true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-spn\">Fri</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-time-wrap\" *ngIf=\"shift.Friday==true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-time\" *ngFor=\"let time of shift.shifts\">[{{time.fromTime.hour}}:{{time.fromTime.minute}} – {{time.toTime.hour}}:{{time.toTime.minute}}]</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-name-wrp\" *ngIf=\"shift.Saturday==true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-spn\">Sat</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-time-wrap\" *ngIf=\"shift.Saturday==true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-time\" *ngFor=\"let time of shift.shifts\">[{{time.fromTime.hour}}:{{time.fromTime.minute}} – {{time.toTime.hour}}:{{time.toTime.minute}}]</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-name-wrp\" *ngIf=\"shift.Sunday==true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-spn\">Sun</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"week-time-wrap\" *ngIf=\"shift.Sunday==true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"week-time\" *ngFor=\"let time of shift.shifts\">[{{time.fromTime.hour}}:{{time.fromTime.minute}} – {{time.toTime.hour}}:{{time.toTime.minute}}]</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<p class=\"text-center\">Total number of working hours per week: <strong>{{totalHours}} Hours & {{totalMin}} Minutes</strong></p>\n\t\t</div>\n\t</div>\n</div> -->\n\n<div class=\"modal fade\" id=\"pharmacy-credentials-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n          <div class=\"modal-dialog\"> \n                <div class=\"loginmodal-container\">\n                    <h1>Create Smart Pharmacy Login Credentials</h1><br>\n\t\t\t\t\t<form [formGroup]=\"heroForm\">\n\t\t\t\t\t<input type=\"text\" name=\"dummy\" style=\"display:none\"/>\n\t\t\t\t\t<input type=\"password\" name=\"pword\" style=\"display:none\"/>\n\t\t\t\t\t<!--input class=\"form-control\"  type=\"text\"  formControlName=\"name\" [(ngModel)]=\"clinicPharmacyCredentials.pharmacyName\" placeholder=\"Enter Pharmacy Name\"/>\n\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!heroForm.controls['name'].valid  && ( heroForm.controls['name'].touched)\">Invalid name !!!</p-->\n\t\t\t\t\t<input class=\"form-control\"  type=\"text\" formControlName=\"email\" [(ngModel)]=\"clinicPharmacyCredentials.pharmacyEmail\" placeholder=\"Enter Pharmacy User Id\"/>\n\t\t\t\t\t<p style=\"font-size:14px\">( You can choose same User Id as your Smart Clinic Id or It could be different. )</p>\n\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!heroForm.controls['email'].valid  && ( heroForm.controls['email'].touched)\">Invalid email address !!!</p>\n\t\t\t\t\n\t\t\t\t\t<!--input class=\"form-control\"  type=\"text\"  formControlName=\"phone\" [(ngModel)]=\"clinicPharmacyCredentials.pharmacyPhone\" placeholder=\"Enter Pharmacy Phone\"  autocomplete=\"sdfdsfdrt\"/>\n\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!heroForm.controls['phone'].valid  && ( heroForm.controls['phone'].touched)\">Invalid phone number !!!</p-->\n\t\t\t\t\t<input class=\"form-control\"  type=\"password\"  formControlName=\"password\" [(ngModel)]=\"clinicPharmacyCredentials.pharmacyPassword\" placeholder=\"Enter Pharmacy Password\" />\n\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!heroForm.controls['password'].valid  && ( heroForm.controls['password'].touched)\">Invalid email password !!!</p>\n\t\t\t\t\t<input class=\"form-control\" type=\"password\"  formControlName=\"confirm\" [(ngModel)]=\"clinicPharmacyCredentials.confirmPassword\" placeholder=\"Confirm Password\" />\n\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!heroForm.controls['confirm'].valid  && ( heroForm.controls['confirm'].touched)\">Invalid confirm password !!!</p>\n\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"cnt\">\n\t\t\t\t\t<a (click)=\"cancelservice('pharmacy')\" class=\"btn btn-outline\" type=\"button\">\n\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t</a>\n\t\t\t\t\t<button class=\"btn btn-custom\" type=\"submit\"  (click)=\"savePharmacyDetails()\" [disabled]=\"(!heroForm.valid)\"> Save </button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t</div>\n            </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"diagnostics-credentials-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n\t<div class=\"modal-dialog\">\n\t\t  <div class=\"loginmodal-container\">\n\t\t\t  <h1>Provide Details About Smart Diagnostics</h1><br>\n\t\t\t <form [formGroup]=\"diagnosticsGrp\" > \n\t\t\t  <fieldset>\n\t\t\t\t<legend>Choose Diagnostics Services:</legend>\n\t\t\t <ul class=\"sub_checkboxul hideme all-limancls\" *ngIf=\"Clinic_Diagnostics\">\n\t\t\t\t\t\t\t\t<li *ngFor=\"let option of clinicDiagnosticsList; let i = index;\">\n\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"push(option.name,i)\" name=\"\" [checked]=\"option.status\" /> {{option.name}} </label>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"other\" name=\"\" (change)=\"push(1,-1)\" [(ngModel)]=\"otherSelected\" [ngModelOptions]=\"{standalone: true}\" /> Others\n\t\t\t\t\t\t\t\t\t\t<tag-input *ngIf=\"otherSelected\" class=\"otherfield hideme\" placeholder=\"Other (comma separated)\" [separatorKeyCodes]=\"[188]\" secondaryPlaceholder=\"Other (comma separated)\" theme='bootstrap' [(ngModel)]=\"OtherClinicService\" [ngModelOptions]=\"{standalone: true}\"></tag-input>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t</fieldset>\n\t\t\t\t<fieldset>\n\t\t\t<legend>Create Diagnostics Login Credentials:</legend>\n\t\t\t\n\t\t\t\n\t\t\t<div class=\"nwinputcsl\">\n\t\t\t\t<!--div class=\"main-input\">\n\t\t\t\t\t<input type=\"text\" formControlName=\"name\" [(ngModel)]=\"clinicDiagnosticsCredentials.name\" placeholder=\"Enter Smart Diagnostics Name\" name=\"dname\" autocpmplete=\"asdasd\"/>\n\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!diagnosticsGrp.controls['name'].valid  && ( diagnosticsGrp.controls['name'].touched)\">Invalid name !!!</p>\n\t\t\t\t</div>\t-->\t\t \n\t\t\t\t\n\t\t\t\t<div class=\"main-input\">\n\t\t\t\t\t<input type=\"email\" name=\"_email\" style=\"opacity:0\" />\n\t\t\t\t\t<input type=\"password\" name=\"_password\" style=\"opacity:0\" />\n\t\t\t\t\t<input type=\"text\" formControlName=\"email\" [(ngModel)]=\"clinicDiagnosticsCredentials.unique_id\" placeholder=\"Enter  Smart Diagnostics Email\" name=\"_user_mail\" autocpmplete=\"off\" />\n\t\t\t\t\t( You can choose same User Id as your Smart Clinic Id or It could be different. )\n\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!diagnosticsGrp.controls['email'].valid  && ( diagnosticsGrp.controls['email'].touched)\">Invalid email address !!!</p>\n\t\t\t\t</div>\n\t\t\t\t<!--div class=\"main-input\">\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"clinicDiagnosticsCredentials.phone\" placeholder=\"Enter  Smart Diagnostics Phone\" formControlName=\"phone\" name=\"_phone\" autocpmplete=\"asadfdasd\"/>\n\t\t\t\t\t<p style=\"color: #FF0000\"  *ngIf=\"!diagnosticsGrp.controls['phone'].valid  && ( diagnosticsGrp.controls['phone'].touched)\">Invalid Phone number !!!</p>\n\t\t\t\t</div-->\n\t\t\t\n\t\t\t\n\t\t\t\t<div class=\"main-input\">\n\t\t\t\t\t<input type=\"password\" formControlName=\"password\" [(ngModel)]=\"clinicDiagnosticsCredentials.password\" placeholder=\"Enter  Smart Diagnostics Password\" name=\"_pword\" autocpmplete=\"asdacfwefweadfaasd\"/>\n\t\t\t\t\t<p style=\"color: #FF0000\"  *ngIf=\"!diagnosticsGrp.controls['password'].valid  && ( diagnosticsGrp.controls['password'].touched)\">Invalid Password !!!</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"main-input\">\n\t\t\t\t\t<input type=\"password\" [(ngModel)]=\"clinicDiagnosticsCredentials.confirmPassword\" placeholder=\"Confirm Password\" formControlName=\"confirm\" name=\"cnfrm\" autocpmplete=\"asasddasd\"/>\n\t\t\t\t\t<p style=\"color: #FF0000\"  formControlName=\"confirm\" *ngIf=\"!diagnosticsGrp.controls['confirm'].valid  && ( diagnosticsGrp.controls['confirm'].touched)\">Invalid Confiirm Password number !!!</p>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t</fieldset>\n\t\t\t<div class=\"cnt\">\n\t\t\t\t<a (click)=\"cancelservice('diagnostics')\" class=\"btn btn-outline\" type=\"button\">Cancel</a>\n\t\t\t\t<button class=\"btn btn-custom\" type=\"submit\"  (click)=\"saveDiagnosticsDetails()\" [disabled]=\"(!diagnosticsGrp.valid)\"> Save </button>\n\t\t\t</div> \n\t\t\t</form> \n\t\t\t \n\t\t  </div>\n\t  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"ipd-credentials-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n\t<div class=\"modal-dialog\">\n\t\t  <div class=\"loginmodal-container\">\n\t\t\t  <h1>Provide Details About Smart IPD</h1><br>\n\t\t\t  <form [formGroup]=\"addBeds\">\n\t\t\t  <fieldset>\n\t\t\t\t<legend>Enter Bed Details for your IPD:</legend>\n\t\t\t\t <div class=\"row\" *ngIf=\"Clinic_IPD && ClinicContactDetail.userOwnClinic == 'Yes'\">\n\t\t\t\t\t\t\t<div class=\"signup-clinicBeds hideme\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12 m-b-10\">\n\t\t\t\t\t\t\t\t\t<small class=\"pull-left\"> (Write numbers of bed available) </small>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-3 col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t<label> General<br>Beds </label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" min=\"0\" max=\"100\" [(ngModel)]=\"general_beds\" class=\"form-control txtfield\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"3\"  [formControl]=\"addBeds.controls['generalBeds']\" />\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!addBeds.controls['generalBeds'].valid  && ( addBeds.controls['generalBeds'].touched)\">Invalid Bed !!!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-3 col-xs-4\">\n\t\t\t\t\t\t\t\t\t<label> Semi-Private Beds </label>\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" min=\"0\" max=\"100\" [(ngModel)]=\"semi_private_beds\"  class=\"form-control txtfield\" pattern=\"[0-9.]+\" maxLength=\"3\" [formControl]=\"addBeds.controls['semiPrivateBeds']\"/>\n\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!addBeds.controls['semiPrivateBeds'].valid  && ( addBeds.controls['semiPrivateBeds'].touched)\">Invalid Bed !!!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-3 col-xs-4\">\n\t\t\t\t\t\t\t\t\t<label> Private<br>Beds </label>\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" min=\"0\" max=\"100\" [(ngModel)]=\"private_beds\" class=\"form-control txtfield\" pattern=\"[0-9.]+\" maxLength=\"3\" [formControl]=\"addBeds.controls['privateBeds']\"/>\n\t\t\t\t\t\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!addBeds.controls['privateBeds'].valid  && ( addBeds.controls['privateBeds'].touched)\">Invalid Bed !!!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-3 col-xs-4\">\n\t\t\t\t\t\t\t\t\t<label> Total<br>Beds </label>\n\t\t\t\t\t\t\t\t\t<input type=\"number\" disabled=\"\" name=\"\" min=\"0\" value=\"{{general_beds+semi_private_beds+private_beds}}\" class=\"form-control txtfield\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t\t<fieldset>\n\t\t\t<legend>Create Smart IPD Login Credentials:</legend>\n\t\t\t<div class=\"nwinputcsl\">\t\t\t \n\t\t\t\t<!--input type=\"text\" formControlName=\"name\" [(ngModel)]=\"clinicIpdCredentials.name\" placeholder=\"Enter Smart IPD Name\" />\n\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!addBeds.controls['name'].valid  && ( addBeds.controls['name'].touched)\">Invalid Name !!!</p-->\n\t\t\t\t<input type=\"email\" name=\"email\" style=\"opacity:0\" />\n\t\t\t\t<input type=\"password\" name=\"password\" style=\"opacity:0\" />\n\t\t\t\t<input type=\"text\" formControlName=\"email\" [(ngModel)]=\"clinicIpdCredentials.unique_id\" placeholder=\"Enter  Smart IPD Email\" name=\"_ipdemail\" autocomplete=\"ghghghffgf\"/>\n\t\t\t\t( You can choose same User Id as your Smart Clinic Id or It could be different. )\n\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!addBeds.controls['email'].valid  && ( addBeds.controls['email'].touched)\">Invalid Email Address !!!</p>\n\t\t\t\t<!--input type=\"text\" formControlName=\"phone\" [(ngModel)]=\"clinicIpdCredentials.phone\" placeholder=\"Enter  Smart IPD Phone\" />\n\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!addBeds.controls['phone'].valid  && ( addBeds.controls['phone'].touched)\">Invalid Phone Number !!!</p-->\n\n\t\t\t\t<input type=\"password\" formControlName=\"password\" [(ngModel)]=\"clinicIpdCredentials.password\" placeholder=\"Enter  Smart IPD Password\" />\n\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!addBeds.controls['password'].valid  && ( addBeds.controls['password'].touched)\">Invalid Password !!!</p>\n\n\t\t\t\t<input type=\"password\" formControlName=\"confirm\" [(ngModel)]=\"clinicIpdCredentials.confirmPassword\" placeholder=\"Confirm Password\" />\n\t\t\t\t<p style=\"color: #FF0000\" *ngIf=\"!addBeds.controls['confirm'].valid  && ( addBeds.controls['confirm'].touched)\">Invalid Confirm Password !!!</p>\n\t\t\t</div>\t\n\t\t\t</fieldset>\n\t\t\t<div class=\"cnt\">\n\t\t\t\t<a (click)=\"cancelservice('ipd')\" class=\"btn btn-outline\" type=\"button\">Cancel</a>\n\t\t\t\t<button class=\"btn btn-custom\" type=\"submit\" [disabled]=\"0\" (click)=\"saveIPDDetails()\" [disabled]=\"(!addBeds.valid)\"> Save </button>\n\t\t\t</div>  \n\t\t</form>\n\t\t\t \n\t\t  </div>\n\t  </div>\n</div>\n\n\n  <!-- The Modal -->\n  <div class=\"modal fade\" id=\"undertaking-modal\">\n\t\t<div class=\"modal-dialog modal-sm\">\n\t\t  <div class=\"modal-content\">\n\t\t  \n\t\t\t<!-- Modal Header -->\n\t\t\t<div class=\"modal-header\">\n\t\t\t  <h4 class=\"modal-title\">Undertaking</h4>\n\t\t\t  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- Modal body -->\n\t\t\t<div class=\"modal-body\">\n\t\t\t  {{helpText[0]?.text}}\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- Modal footer -->\n\t\t\t<div class=\"modal-footer\">\n\t\t\t  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t</div>\n\t\t\t\n\t\t  </div>\n\t\t</div>\n\t  </div>"

/***/ }),

/***/ "../../../../../src/app/header-one-layout/signup-new/signup-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { GetLatLng } from 'googlemaps';

var SignupNewComponent = /** @class */ (function () {
    //harman
    function SignupNewComponent(formBuilder, toastr, userService, router, mapsAPILoader, ngZone) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        // public searchControl: FormControl;
        this.activatedtab = 0;
        this.helpText = [];
        this.captcha_step_1 = false;
        this.captcha_step_2 = false;
        this.captcha_step_3 = false;
        this.captcha_step_4 = false;
        this.captcha_step_5 = false;
        this.captcha_step_6 = false;
        this.captcha_step_7 = false;
        this.captcha_step_8 = false;
        this.clinicPharmacyCredentials = {};
        this.clinicDiagnosticsCredentials = {};
        this.clinicIpdCredentials = {};
        this.enable_map = false;
        this.dynamic_class = "grey-placeholder";
        this.param_one_class = "grey-placeholder";
        this.param_two_class = "grey-placeholder";
        this.purchasedData = [];
        this.activatedtabHeading = 'Your Contact details';
        this.userDetails = {};
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
        this.savedClinicServices = {};
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
        this.values = '';
        this.values1 = '';
    }
    SignupNewComponent.prototype.ngOnInit = function () {
        this.condition = true;
        this.formClass1 = 'active';
        //harman
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
        this.heroForm = this.formBuilder.group({
            //name: ['', Validators.required],
            email: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(15)])],
            confirm: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(6)]],
        }, { validator: this.passwordMatchValidator });
        this.diagnosticsGrp = this.formBuilder.group({
            //  name: ['', Validators.required],
            email: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(15)])],
            confirm: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(6)]],
        }, { validator: this.passwordMatchValidator });
        /* 	if(localStorage['purchased_data']){
                this.purchasedData=localStorage['purchased_data']
                console.log(this.purchasedData);
            }
            
            if(this.purchasedData.indexOf('Diagnostics') > -1){
                this.Clinic_Diagnostics=true;
            }
            if(this.purchasedData.indexOf('Pharmacy') > -1){
                this.Clinic_Pharmacy=true;
            }
            if(this.purchasedData.indexOf('IPD') > -1){
                this.Clinic_IPD=true;
            } */
        // this.stepOneForm = this.formBuilder.group({
        //   'phone': [null, Validators.compose([Validators.required,Validators.pattern('^[^ ]+[0-9]*'),
        //         Validators.minLength(10),Validators.maxLength(10)])],
        //   'email': [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
        //   'password': [null, Validators.compose([Validators.required,Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*'),
        //             Validators.minLength(8),Validators.maxLength(15)])],
        //   'confirm_password': [null, Validators.compose([Validators.required,Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*'),
        //             Validators.minLength(8),Validators.maxLength(15)])],
        // })
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
        }, { validator: this.passwordMatchValidator });
        var currentYear = new Date().getFullYear();
        this.ProfileDetail = {};
        this.ProfileDetail.selectedImage = null;
        this.ProfileDetail.dob = null;
        // this.ProfileDetail.consultation_fee = 0
        this.stepTwoForm = this.formBuilder.group({
            'first_name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z ]*')])],
            // 'last_name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z ]*')])],
            'specialization': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required])],
            'registration_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(15)
                ])],
            'qualification': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'professional_affiliation': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'dob': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required])],
            'practicing_since': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].max(currentYear), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].min(1950)
                ])],
            'consultation_fee': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].min(0)
                ])],
            'expertise': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'other_specialization': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
        });
        this.ClinicContactDetail = {};
        this.GetStatesOfCountry();
        this.userOwnClinicStatus = true;
        this.ClinicContactDetail.userOwnClinic = "Yes";
        this.stepThreeForm = this.formBuilder.group({
            'clinic_name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
            'website': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            // 'email': [null, Validators.compose([Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
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
        });
        this.SmartAssistantDetail = {};
        this.stepFourForm = this.formBuilder.group({
            // 'name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            // 'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
            //     Validators.minLength(10), Validators.maxLength(10)
            //     ])],
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
        this.ClinicServicesDetail = [];
        this.clinicDiagnosticsList = [
            { name: 'PATHOLOGY', status: false },
            { name: 'ULTRASOUND', status: false },
            { name: 'X-Ray', status: false },
            { name: 'CT-Scan', status: false },
            { name: 'MRI', status: false },
            { name: 'ECG', status: false },
            { name: 'Echo', status: false },
            { name: 'EEG', status: false },
            // { name: 'EMG', status: false },
            { name: 'TMT', status: false },
            { name: 'AUDIOMETRY', status: false },
            { name: 'BONE DENSITOMETRY', status: false },
            { name: 'DOPPLER STUDIES', status: false },
            { name: 'MAMMOGRAPHY', status: false },
            { name: 'UROFLOWMETRY', status: false },
            { name: 'Nerve Test', status: false },
            { name: 'Eye Tests', status: false },
            { name: 'Lung Test', status: false },
        ];
        this.otherSelected = false;
        this.ClinicServicesDetailObject = {};
        this.private_beds = 0;
        this.semi_private_beds = 0;
        this.general_beds = 0;
        this.photoIDDocumentsList = [
            { name: 'PAN Card', status: false, document_name: '', image: '', placeholder: 'Pan card number' },
            { name: 'Driving License', status: false, document_name: '', image: '', placeholder: 'Driving license number' },
            { name: 'Aadhaar card', status: false, document_name: '', image: '', placeholder: 'Aadhaar number' },
            { name: 'Passport', status: false, document_name: '', image: '', placeholder: 'Passport number' }
        ];
        this.clinicDocumentsList = [
            { name: 'Latest clinic electricity bill', status: false, image: '' },
            { name: 'Undertaking', status: false, document_name: '', image: '' },
            { name: 'Latest post paid  mobile or  clinic landline phone bill', status: false, image: '' }
        ];
        this.DocumentsDetail = {};
        this.allShifts = [];
        this.allShiftsClosed = [];
        this.languageOption = "";
        this.languageSelected = false;
        this.otp_verified = false;
        this.smartAssistantRegFields = [
            { name: 'Patient Name', value: 'PatientName', status: true, disable: true, star: true },
            { name: 'Mobile Number', value: 'MobileNumber', status: true, disable: true, star: true },
            { name: 'Age', value: 'Age', status: false, disable: false },
            { name: 'DOB', value: 'DOB', status: true, disable: false, star: true },
            { name: 'Gender', value: 'Gender', status: true, disable: true, star: true },
            { name: 'Address', value: 'Address', status: true, disable: true, star: true },
            { name: 'Weight', value: 'Weight', status: false, disable: false },
            { name: 'Height', value: 'Height', status: false, disable: false },
            { name: 'Body temperature', value: 'Bodytemperature', status: false, disable: false },
            { name: 'Pulse', value: 'Pulse', status: false, disable: false },
            { name: 'Blood Pressure(BP)', value: 'BloodPressure(BP)', status: false, disable: false },
            { name: 'Random Blood Sugar(RBS)', value: 'RandomBloodSugar(RBS)', status: false, disable: false },
            { name: 'SpO2', value: 'SpO2', status: false, disable: false },
            { name: 'Patient photo (recommended)', value: 'Patientphoto', status: false, disable: false },
            { name: 'Patient Test reports', value: 'PatientTestreports', status: false, disable: false },
            { name: 'Consultation Fee', value: 'ConsultationFee', status: false, disable: false }
        ];
        this.SmartAssistantDetail.reg_fields = [];
        for (var j = 0; j < this.smartAssistantRegFields.length; j++) {
            if (this.smartAssistantRegFields[j].status == true) {
                this.SmartAssistantDetail.reg_fields.push(this.smartAssistantRegFields[j]);
            }
        }
        this.chooseFromLocation = true;
        this.smartAssistantDiv = true;
        //harman end 
        if (this.isJson(localStorage['user_details'])) {
            console.log(JSON.parse(localStorage['user_details']));
            this.userDetails = JSON.parse(localStorage['user_details']);
            console.log(this.userDetails);
            console.log('this is the data');
            this.InitialDetail.email = this.userDetails.email;
            this.InitialDetail.password = this.userDetails.password;
            this.InitialDetail.confirm_password = this.userDetails.password;
            this.InitialDetail.phone = this.userDetails.mobile;
        }
        this.ProfileDetail.specialization = "";
        this.SmartAssistantDetail.avgConsTime = "";
        this.SmartAssistantDetail.waitingTime = "";
        this.getHelpText();
    };
    SignupNewComponent.prototype.passwordMatchValidator = function (frm) {
        return frm.controls['password'].value ===
            frm.controls['confirm'].value ? null : { 'mismatch': true };
    };
    SignupNewComponent.prototype.changeClass = function (data) {
        if (data != "") {
            this.dynamic_class = "black-placeholder";
        }
        else {
            this.dynamic_class = "grey-placeholder";
        }
    };
    SignupNewComponent.prototype.changeParamOneClass = function (data) {
        console.log(data.target.selectedIndex);
        if (data.target.selectedIndex > 0) {
            this.param_one_class = "black-placeholder";
        }
        else {
            this.param_one_class = "grey-placeholder";
        }
    };
    SignupNewComponent.prototype.changeParamTwoClass = function (data) {
        console.log(data.target.selectedIndex);
        if (data.target.selectedIndex > 0) {
            this.param_two_class = "black-placeholder";
        }
        else {
            this.param_two_class = "grey-placeholder";
        }
    };
    SignupNewComponent.prototype.isJson = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    SignupNewComponent.prototype.ngAfterViewInit = function () {
        //   // google maps start //
        //   //set google maps defaults
        //   this.zoom = 4;
        //   this.latitude = 39.8282;
        //   this.longitude = -98.5795;
        //   // //create search FormControl
        //   // this.searchControl = new FormControl();
        //   //set current position
        this.setCurrentPosition();
        //   //load Places Autocomplete
        //   this.mapsAPILoader.load().then(() => {
        //     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        //       types: ['(cities)']
        //     });
        //     autocomplete.addListener("place_changed", () => {
        //       this.ngZone.run(() => {
        //         //get the place result
        //         let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        //         //verify result
        //         if (place.geometry === undefined || place.geometry === null) {
        //           return;
        //         }
        //         //set latitude, longitude and zoom
        //         this.latitude = place.geometry.location.lat();
        //         this.longitude = place.geometry.location.lng();
        //         console.log("latitude entered"+this.latitude);
        //         console.log("longitude entered"+this.longitude);
        //         console.log(place.formatted_address);
        //         // this.city=place.formatted_address;
        //         console.log(place.formatted_address)
        //         this.zoom = 12;
        //       });
        //     });
        //   });
    };
    SignupNewComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.zoom = 12;
            });
        }
        // google maps end // 
    };
    SignupNewComponent.prototype.yesform = function () {
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
    SignupNewComponent.prototype.noform = function () {
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
        this.private_beds = 0;
        this.semi_private_beds = 0;
        this.general_beds = 0;
    };
    SignupNewComponent.prototype.activatetab = function (data, i) {
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
    SignupNewComponent.prototype.increasetab = function () {
        if (this.activatedtab < 7) {
            this.activatedtab = this.activatedtab + 1;
        }
    };
    // getClass(i){
    //   if (i==this.activatedtab) {
    //     return 'active'
    //   }else if (i<this.activatedtab) {
    //     return 'completed'
    //   }
    // }
    SignupNewComponent.prototype.getClass = function (i) {
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
            else if (this.SmartAssistantDetail.smartAssistant == 'Yes') {
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
                if ((this.OtherClinicService == null || this.OtherClinicService == undefined || this.OtherClinicService == '' || this.OtherClinicService.length < 1) &&
                    this.otherSelected == true) {
                    this.toastr.warning('Please enter value in "Clinic Diagnostics"', 'Warning');
                    return;
                }
                /*  if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
                     this.toastr.warning('Please select atleast one value in "Clinic Diagnostics"', 'Warning')
                     return
                 } */
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
    SignupNewComponent.prototype.addShift = function (type) {
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
            else if (this.myObject.fromTime.hour == this.myObject.toTime.hour
                && this.myObject.fromTime.minute >= this.myObject.toTime.minute) {
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
                else if (this.myObject.shifts[i].fromTime.hour == this.myObject.shifts[i].toTime.hour
                    && this.myObject.shifts[i].fromTime.minute >= this.myObject.shifts[i].toTime.minute) {
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
                this.myObject.fromTime.hour = this.myObject.shifts[this.myObject.shifts.length - 1].toTime.hour;
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
    SignupNewComponent.prototype.hideNewShiftSchedule = function (i) {
        this.scheduleArray[i].show_new_shift = false;
    };
    SignupNewComponent.prototype.addShiftInArray = function (i) {
        if (this.scheduleArray[i].show_new_shift == false) {
            this.scheduleArray[i].show_new_shift = true;
            this.scheduleArray[i].fromTime = {};
            this.scheduleArray[i].fromTime.hour = this.scheduleArray[this.scheduleArray.length - 1].toTime.hour;
            this.scheduleArray[i].fromTime.minute = 0;
            this.scheduleArray[i].toTime = {};
            this.scheduleArray[i].toTime.hour = 0;
            this.scheduleArray[i].toTime.minute = this.scheduleArray[this.scheduleArray.length - 1].toTime.hour + 2;
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
                this.scheduleArray[i].fromTime.hour = this.scheduleArray[this.scheduleArray.length - 1].toTime.hour;
                this.scheduleArray[i].fromTime.minute = 0;
                this.scheduleArray[i].toTime = {};
                this.scheduleArray[i].toTime.hour = this.scheduleArray[this.scheduleArray.length - 1].toTime.hour + 1;
                this.scheduleArray[i].toTime.minute = 0;
                this.scheduleArray[i].show_new_shift = false;
            }
            console.log(this.scheduleArray);
        }
    };
    SignupNewComponent.prototype.deleteShift = function (j) {
        this.myObject.shifts.splice(j, 1);
    };
    SignupNewComponent.prototype.deleteShiftFromArray = function (i, j) {
        this.scheduleArray[i].shifts.splice(j, 1);
    };
    SignupNewComponent.prototype.deleteSchedule = function (i) {
        this.scheduleArray.splice(i, 1);
        this.resetButtonsAfterAnyChangeInSchedule();
    };
    // addAnotherSchedule(){
    //   var boolean = false
    //   for (var i = 0; i < this.scheduleArray.length; i++) {
    //     if(
    //       this.scheduleArray[i].Monday == false &&
    //       this.scheduleArray[i].Tuesday == false &&
    //       this.scheduleArray[i].Wednesday == false &&
    //       this.scheduleArray[i].Thursday == false &&
    //       this.scheduleArray[i].Friday == false &&
    //       this.scheduleArray[i].Saturday == false &&
    //       this.scheduleArray[i].Sunday == false
    //     ){
    //       boolean = true
    //       this.toastr.warning('Please select atleast one day', 'Warning');
    //       break;
    //     }
    //   }
    //   for (var i = 0; i < this.scheduleArray.length; i++) {
    //     if(
    //       this.scheduleArray[i].Monday==true && this.myObject.Monday==true ||
    //       this.scheduleArray[i].Tuesday==true && this.myObject.Tuesday==true ||
    //       this.scheduleArray[i].Wednesday==true && this.myObject.Wednesday==true ||
    //       this.scheduleArray[i].Thursday==true && this.myObject.Thursday==true ||
    //       this.scheduleArray[i].Friday==true && this.myObject.Friday==true ||
    //       this.scheduleArray[i].Saturday==true && this.myObject.Saturday==true ||
    //       this.scheduleArray[i].Sunday==true && this.myObject.Sunday==true
    //     ){
    //       boolean = true
    //       this.toastr.warning('Schedule for same day already added', 'Warning');
    //       break;
    //     }
    //   }
    //   if( this.myObject.Monday == false &&
    //       this.myObject.Tuesday == false &&
    //       this.myObject.Wednesday == false &&
    //       this.myObject.Thursday == false &&
    //       this.myObject.Friday == false &&
    //       this.myObject.Saturday == false &&
    //       this.myObject.Sunday == false
    //     ){
    //     boolean = true
    //     this.toastr.warning('Please select atleast one day', 'Warning');
    //   }
    //   if(this.myObject.shifts.length<1){
    //     boolean = true
    //     this.toastr.warning('Please enter atleast one shift', 'Warning');
    //   }
    //   if(boolean==false){
    //     this.scheduleArray.push(this.myObject)
    //     console.log(this.scheduleArray)
    //     this.myObject = {}
    //     this.myObject.shifts = []
    //     this.myObject.Monday = false
    //     this.myObject.Tuesday = false
    //     this.myObject.Wednesday = false
    //     this.myObject.Thursday = false
    //     this.myObject.Friday = false
    //     this.myObject.Saturday = false
    //     this.myObject.Sunday = false
    //   }
    // }
    SignupNewComponent.prototype.addAnotherSchedule = function () {
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
    SignupNewComponent.prototype.changeDay = function (data, status, i) {
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
    SignupNewComponent.prototype.resetButtonsAfterAnyChangeInSchedule = function () {
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
    SignupNewComponent.prototype.saveConsultationSchedule = function () {
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
            else if (this.myObject.shifts[i].fromTime.hour == this.myObject.shifts[i].toTime.hour
                && this.myObject.shifts[i].fromTime.minute >= this.myObject.shifts[i].toTime.minute) {
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
                    else if (this.scheduleArray[i].shifts[j].fromTime.hour == this.scheduleArray[i].shifts[j].toTime.hour
                        && this.scheduleArray[i].shifts[j].fromTime.minute >= this.scheduleArray[i].shifts[j].toTime.minute) {
                        this.toastr.warning('Invalid Time', 'Warning');
                        return;
                    }
                }
            }
        }
        if (boolean == false) {
            if (this.show_new_schedule == true) {
                this.scheduleArray.push(this.myObject);
            }
            this.resetButtonsAfterAnyChangeInSchedule();
            if (this.activatedtab < 7) {
                this.activatedtab = this.activatedtab + 1;
                console.log(this.scheduleArray);
                this.activatedtabHeading = '';
                this.activatedtabHeading = 'Add SmartAssistant';
                try {
                    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
                }
                catch (e) {
                    window.scrollTo(0, 0);
                }
            }
            this.show_new_schedule = false;
        }
    };
    SignupNewComponent.prototype.onKey = function (event) {
        this.values = event.target.value;
        if (this.InitialDetail.password == this.values) {
            this.p_false = false;
        }
        else {
            this.p_false = true;
        }
    };
    SignupNewComponent.prototype.openOTPModal = function () {
        var _this = this;
        this.clinicPharmacyCredentials.pharmacyEmail = this.InitialDetail.email;
        this.clinicIpdCredentials.unique_id = this.InitialDetail.email;
        this.clinicDiagnosticsCredentials.unique_id = this.InitialDetail.email;
        this.otpRes = {};
        this.loading = true;
        this.userService.GenerateOTPSignUp(this.InitialDetail).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.otpRes.otpEmail = data.otpEmail;
                _this.otpRes.otpPhone = data.otpPhone;
                _this.toastr.success(data.message, 'Success');
                $("#myModal").modal("show");
            }
            else {
                _this.toastr.error(data.message, 'Error');
            }
        }, function (err) {
            console.log(err);
        });
    };
    SignupNewComponent.prototype.verifyOTP = function () {
        if (this.otpPhone == parseInt(this.otpRes.otpPhone) && this.otpEmail == parseInt(this.otpRes.otpEmail)) {
            this.activatedtabHeading = '';
            this.otp_verified = true;
            this.activatedtabHeading = 'Create your profile';
            this.saveStepOneDetails();
            $("#myModal").modal("hide");
            try {
                window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
            }
            catch (e) {
                window.scrollTo(0, 0);
            }
        }
        else {
            this.toastr.error('Wrong OTP entered', 'Error');
        }
    };
    SignupNewComponent.prototype.saveStepOneDetails = function () {
        if (this.activatedtab < 7) {
            this.activatedtab = this.activatedtab + 1;
            console.log(this.InitialDetail);
        }
    };
    SignupNewComponent.prototype.onupload = function (evt) {
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
        };
        fr.readAsDataURL(file);
    };
    SignupNewComponent.prototype.saveStepTwoDetails = function () {
        if (new Date(this.ProfileDetail.dob).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid Date Of Birth", "Warning");
        }
        else if (this.other_specialization == true && (this.ProfileDetail.other_specialization == null || this.ProfileDetail.other_specialization == '' ||
            this.ProfileDetail.other_specialization == undefined)) {
            this.toastr.warning("Invalid Specialization", "Warning");
        }
        else {
            if (this.activatedtab < 7) {
                this.activatedtab = this.activatedtab + 1;
                if (this.other_specialization == true) {
                    this.ProfileDetail.specialization = this.ProfileDetail.other_specialization;
                }
                console.log(this.ProfileDetail);
                this.activatedtabHeading = '';
                this.activatedtabHeading = 'Clinic contact details';
                try {
                    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
                }
                catch (e) {
                    window.scrollTo(0, 0);
                }
            }
        }
    };
    SignupNewComponent.prototype.saveStepThreeDetails = function () {
        var _this = this;
        console.log(this.ClinicContactDetail);
        if (this.activatedtab < 7) {
            this.activatedtab = this.activatedtab + 1;
            var date;
            var month;
            var year;
            date = new Date(this.ProfileDetail.dob).getDate();
            month = new Date(this.ProfileDetail.dob).getMonth() + 1;
            year = new Date(this.ProfileDetail.dob).getFullYear();
            if (date.toString().length == 1) {
                date = "0" + date;
            }
            if (month.toString().length == 1) {
                month = "0" + month;
            }
            var fullDate = date.toString() + month.toString() + year.toString();
            if (this.ClinicContactDetail.userOwnClinic == 'Yes') {
                this.ClinicContactDetail.clinic_id = this.ClinicContactDetail.city.substr(0, 3) + "-" +
                    this.ProfileDetail.registration_no + "-" + fullDate;
            }
            else {
                var object = {
                    clinic_id: this.ClinicContactDetail.clinic_id
                };
                this.userService.getSmartAsstByClinicId(object).subscribe(function (data) {
                    console.log(data);
                    if (data.response == true) {
                        console.log(data);
                        _this.activatedtabHeading = '';
                        _this.activatedtabHeading = 'Your consultation schedule';
                        // this.SmartAssistantDetail.name=data.data.name
                        _this.SmartAssistantDetail.unique_id = data.data.unique_id;
                        // this.SmartAssistantDetail.phone=data.data.phone
                        if (data.services.Clinic_Diagnostics) {
                            _this.savedClinicServices.Clinic_Diagnostics = true;
                        }
                        if (data.services.Clinic_Pharmacy) {
                            _this.savedClinicServices.Clinic_Pharmacy = true;
                        }
                        if (data.services.Clinic_IPD) {
                            _this.savedClinicServices.Clinic_IPD = true;
                        }
                    }
                    else {
                        _this.toastr.error("No Smart Assistant Is Registered For This Clinic Id.", "Smart Assistant Doesn't Exists! ");
                        return;
                    }
                });
            }
            try {
                window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
            }
            catch (e) {
                window.scrollTo(0, 0);
            }
        }
    };
    SignupNewComponent.prototype.onKey1 = function (event) {
        this.values1 = event.target.value;
        if (this.SmartAssistantDetail.password == this.values1) {
            this.p_false1 = false;
        }
        else {
            this.p_false1 = true;
        }
    };
    SignupNewComponent.prototype.saveStepFourDetails = function (status) {
        if (this.SmartAssistantDetail.password !== this.SmartAssistantDetail.confirm_password && status == 1) {
            this.p_false1 = true;
        }
        else {
            if (this.activatedtab < 7) {
                this.activatedtab = this.activatedtab + 1;
                if (status == 0) {
                    this.SmartAssistantDetail = {};
                    this.stepFourForm.reset();
                    this.SmartAssistantDetail.smartAssistant = "No";
                }
                else if (status == 1) {
                    this.SmartAssistantDetail.smartAssistant = "Yes";
                }
                console.log(this.SmartAssistantDetail);
                this.activatedtabHeading = '';
                this.activatedtabHeading = 'Add clinic services';
            }
        }
        try {
            window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        }
        catch (e) {
            window.scrollTo(0, 0);
        }
    };
    SignupNewComponent.prototype.checkData = function () {
        console.log(this.ClinicContactDetail);
    };
    SignupNewComponent.prototype.push = function (data, i) {
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
        console.log(this.ClinicServicesDetail);
    };
    SignupNewComponent.prototype.saveStepFiveDetails = function (status) {
        var boolean = false;
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
            if ((this.OtherClinicService == null || this.OtherClinicService == undefined || this.OtherClinicService == '' || this.OtherClinicService.length < 1) &&
                this.otherSelected == true) {
                boolean = true;
                this.toastr.warning('Please enter value in "Clinic Diagnostics"', 'Warning');
                return;
            }
            /*  if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
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
            this.activatedtab = 7;
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
            this.activatedtabHeading = '';
            this.activatedtabHeading = 'Language Selection';
        }
        try {
            window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        }
        catch (e) {
            window.scrollTo(0, 0);
        }
    };
    SignupNewComponent.prototype.enablePhotoId = function (index) {
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
    SignupNewComponent.prototype.onuploadPhotoId = function (evt, index) {
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
            console.log(_this.photoIDDocumentsList[index].index);
        };
        fr.readAsDataURL(file);
        console.log(this.photoIDDocumentsList[index].image);
    };
    SignupNewComponent.prototype.enableClinicDocumentId = function (index) {
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
    SignupNewComponent.prototype.onuploadClinicDocument = function (evt, index) {
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
    SignupNewComponent.prototype.onuploadMedicalCert = function (evt, index) {
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
    SignupNewComponent.prototype.saveStepSevenDetails = function () {
        this.languageSelected = true;
        this.activatedtab = 6;
        this.activatedtabHeading = '';
        this.activatedtabHeading = 'Upload documents';
    };
    SignupNewComponent.prototype.saveStepSixDetails = function (status) {
        var _this = this;
        //  else if (this.SmartAssistantDetail.smartAssistant == 'Yes') {  //!this.stepFourForm.valid && 
        //     boolean = true;
        //     this.toastr.warning('Error in SMART ASSISTANT ', 'Warning')
        //     return
        // }
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
            if ((this.OtherClinicService == null || this.OtherClinicService == undefined || this.OtherClinicService == '' || this.OtherClinicService.length < 1) &&
                this.otherSelected == true) {
                boolean = true;
                this.toastr.warning('Please enter value in "Clinic Diagnostics"', 'Warning');
                return;
            }
            /*  if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
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
            console.log('YAAAAAAAAAAA');
            console.log(this.ClinicContactDetail.userOwnClinic);
            if (true_happens1 == false && this.ClinicContactDetail.userOwnClinic == 'Yes') {
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
            if (this.Clinic_Pharmacy) {
                this.UserDetailForSignUp.pharmacy_id = this.PharmacyObjectId;
            }
            if (this.Clinic_IPD) {
                this.UserDetailForSignUp.ipd_id = this.IpdObjectId;
            }
            if (this.Clinic_Diagnostics) {
                this.UserDetailForSignUp.diagnostics_id = this.DiagnosticsObjectId;
            }
            console.log(this.UserDetailForSignUp.ClinicContactDetail);
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
        try {
            window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        }
        catch (e) {
            window.scrollTo(0, 0);
        }
    };
    SignupNewComponent.prototype.stateSelected = function () {
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
    SignupNewComponent.prototype.citySelected = function () {
        var _this = this;
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
        if (this.chooseFromLocation == true) {
            if (city != null && state != null) {
                var string = city + "," + state;
                if (this.ClinicContactDetail.area) {
                    string = this.ClinicContactDetail.area + ", " + city + "," + state;
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
    SignupNewComponent.prototype.GetStatesOfCountry = function () {
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
    SignupNewComponent.prototype.checkPassword = function (str) {
        this.lowerCase = (/[a-z]/.test(str));
        this.upperCase = (/[A-Z]/.test(str));
        this.numberCase = (/[0-9]/.test(str));
        this.lengthCase = str.length >= 8 ? true : false;
        this.specialCase = (/[!@#\$%\^&\*\)\(\-_=+]/.test(str));
    };
    SignupNewComponent.prototype.checkPassword1 = function (str) {
        this.lowerCase1 = (/[a-z]/.test(str));
        this.upperCase1 = (/[A-Z]/.test(str));
        this.numberCase1 = (/[0-9]/.test(str));
        this.lengthCase1 = str.length >= 8 ? true : false;
        this.specialCase1 = (/[!@#\$%\^&\*\)\(\-_=+]/.test(str));
    };
    SignupNewComponent.prototype.handleAddressChange = function ($event) {
        var _this = this;
        console.log(this.ClinicContactDetail.clinic_name);
        this.chooseFromLocation = false;
        this.ClinicContactDetail.clinic_name1 = $event.name;
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
    SignupNewComponent.prototype.hideNewShift = function () {
        this.show_new_shift = false;
    };
    SignupNewComponent.prototype.hideNewSchedule = function () {
        this.show_new_schedule = false;
    };
    SignupNewComponent.prototype.checkOther = function (data) {
        this.other_specialization = false;
        if (data == 'OTHER') {
            this.other_specialization = true;
        }
        console.log(data);
        this.changeClass(data);
    };
    SignupNewComponent.prototype.placeMarker = function (data) {
        console.log(data);
        this.lat = data.coords.lat;
        this.lng = data.coords.lng;
    };
    SignupNewComponent.prototype.preview = function () {
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
            $("#SchedulepreviewModal").modal("show");
        }
    };
    SignupNewComponent.prototype.checkDisabled = function () {
        if (this.state && this.city && this.ClinicContactDetail.area) {
            return false;
        }
        else {
            return true;
        }
    };
    // SearchLocation(data){
    //     if(this.lat != 51.678418 && this.lng != 7.809007 && data && data.trim().length>0){
    //         data.replace(" ","")
    //         let object = {
    //             search : data,
    //             lat : this.lat,
    //             lng : this.lng
    //         }
    //         this.userService.SearchLocation(object).subscribe(data=>{
    //             this.locationSuggestionDB = data.data.results
    //             console.log(data)
    //             this.ClinicContactDetail.database = []
    //             for (var i = 0; i < data.data.results.length; i++) {
    //                 var string = data.data.results[i].name
    //                 // var string = data.data.results[i].name+", "+data.data.results[i].formatted_address
    //                 this.ClinicContactDetail.database.push(string)
    //             }
    //         })            
    //     }
    // }
    // onAddLocation(data){
    //     data = data.source.value
    //     var index = -1
    //     for (var i = 0; i < this.locationSuggestionDB.length; i++) {
    //         // var string = this.locationSuggestionDB[i].name+", "+this.locationSuggestionDB[i].formatted_address
    //         var string = this.locationSuggestionDB[i].name
    //         if(string == data){
    //             index = i
    //             break;
    //         }
    //     }
    //     if(index!= -1){
    //         this.lat = this.locationSuggestionDB[index].geometry.location.lat
    //         this.lng = this.locationSuggestionDB[index].geometry.location.lng            
    //     }
    // }
    SignupNewComponent.prototype.SearchLocation = function (data) {
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
    SignupNewComponent.prototype.onAddLocation = function (data) {
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
    SignupNewComponent.prototype.changeSmartAssistantRegFields = function (data) {
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
        this.SmartAssistantDetail.reg_fields = [];
        for (var k = 0; k < this.smartAssistantRegFields.length; k++) {
            if (this.smartAssistantRegFields[k].status == true) {
                this.SmartAssistantDetail.reg_fields.push(this.smartAssistantRegFields[k]);
            }
        }
    };
    // GetSmartAssistantByPhone(data){
    //     if(this.ClinicContactDetail.userOwnClinic == "No"){            
    //         var object = {
    //             phone: data.trim()
    //         }
    //         this.userService.GetSmartAssistantByPhone(object).subscribe(data=>{
    //             console.log(data)
    //             if(data.response==true){
    //                 this.SmartAssistantDetail.name = data.data.name
    //             }else{
    //                 this.toastr.error(data.message,"Error")
    //             }
    //         })    
    //     }
    // }
    SignupNewComponent.prototype.getHelpText = function () {
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
    SignupNewComponent.prototype.showModal = function (event, type) {
        if (type == 'pharmacy') {
            if (event.target.checked == true) {
                //console.log(event);
                //alert('bumba');
                $('#pharmacy-credentials-modal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            }
        }
        if (type == 'diagnostics') {
            if (event.target.checked == true) {
                //console.log(event);
                //alert('bumba');
                $('#diagnostics-credentials-modal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
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
        }
    };
    SignupNewComponent.prototype.cancelservice = function (type) {
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
    SignupNewComponent.prototype.checkForm = function (type) {
        if (type == 'pharmacy') {
            console.log(this.clinicPharmacyCredentials);
            if (this.clinicPharmacyCredentials) {
                if (this.clinicPharmacyCredentials.pharmacyName && this.clinicPharmacyCredentials.pharmacyEmail && this.clinicPharmacyCredentials.pharmacyPhone && this.clinicPharmacyCredentials.password) {
                    if (this.clinicPharmacyCredentials.confirmPassword == this.clinicPharmacyCredentials.pharmacyPassword) {
                        this.pharmacyModelValidation = true;
                    }
                    else {
                        this.pharmacyModelValidation = false;
                    }
                }
                else {
                    this.pharmacyModelValidation = false;
                }
            }
            else {
                this.pharmacyModelValidation = false;
            }
        }
    };
    SignupNewComponent.prototype.savePharmacyDetails = function () {
        var _this = this;
        this.clinicPharmacyCredentials.clinic_id = this.ClinicContactDetail.clinic_id;
        console.log(this.clinicPharmacyCredentials);
        this.userService.createSmartPharmacyOnSignUp(this.clinicPharmacyCredentials).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                $('#pharmacy-credentials-modal').modal('hide');
                _this.PharmacyObjectId = data.pharmacyId;
            }
        }, function (err) {
            console.log(err);
        });
    };
    SignupNewComponent.prototype.saveDiagnosticsDetails = function () {
        var _this = this;
        this.clinicDiagnosticsCredentials.clinic_id = this.ClinicContactDetail.clinic_id;
        console.log(this.clinicDiagnosticsCredentials);
        this.userService.createSmartDiagnosticsOnSignUp(this.clinicDiagnosticsCredentials).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                $('#diagnostics-credentials-modal').modal('hide');
                _this.DiagnosticsObjectId = data.diagnosticsId;
            }
        }, function (err) {
            console.log(err);
        });
    };
    SignupNewComponent.prototype.saveIPDDetails = function () {
        var _this = this;
        this.clinicIpdCredentials.clinic_id = this.ClinicContactDetail.clinic_id;
        console.log(this.clinicIpdCredentials);
        this.userService.createSmartIpdOnSignUp(this.clinicIpdCredentials).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                $('#ipd-credentials-modal').modal('hide');
                _this.IpdObjectId = data.IpdId;
            }
        }, function (err) {
            console.log(err);
        });
    };
    SignupNewComponent.prototype.showMap = function (type) {
        if (type == 'auto') {
            this.enable_map = false;
        }
        else {
            this.enable_map = true;
        }
    };
    SignupNewComponent.prototype.showUndertakingInfo = function () {
        $('#undertaking-modal').modal('show');
    };
    // GetSmartAssistantByClinicId(){
    //     console.log("dsjm sfcjs jsd jf")
    //     this.userService.GetSmartAssistantByClinicId(this.ClinicContactDetail.clinic_id).subscribe(data => {
    //         console.log(data)
    //         if (data.response == true) {
    //         }
    //     }, err => {
    //         console.log(err);
    //     })
    // }
    SignupNewComponent.prototype.resolved = function (captchaResponse, step) {
        console.log("Resolved captcha with response: " + captchaResponse);
        if (step == 'step1') {
            this.captcha_step_1 = true;
        }
        if (step == 'step2') {
            this.captcha_step_2 = true;
        }
        if (step == 'step3') {
            this.captcha_step_3 = true;
        }
        if (step == 'step4') {
            this.captcha_step_4 = true;
        }
        if (step == 'step5') {
            this.captcha_step_5 = true;
        }
        if (step == 'step6') {
            this.captcha_step_6 = true;
        }
        if (step == 'step7') {
            this.captcha_step_7 = true;
        }
        if (step == 'step8') {
            this.captcha_step_8 = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SignupNewComponent.prototype, "searchElementRef", void 0);
    SignupNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup-new',
            template: __webpack_require__("../../../../../src/app/header-one-layout/signup-new/signup-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-one-layout/signup-new/signup-new.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], SignupNewComponent);
    return SignupNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/signup-new/signup-new.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupNewModule", function() { return SignupNewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_new_routing_module__ = __webpack_require__("../../../../../src/app/header-one-layout/signup-new/signup-new-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_new_component__ = __webpack_require__("../../../../../src/app/header-one-layout/signup-new/signup-new.component.ts");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_recaptcha__ = __webpack_require__("../../../../ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng_recaptcha__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var SignupNewModule = /** @class */ (function () {
    function SignupNewModule() {
    }
    SignupNewModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__signup_new_routing_module__["a" /* SignupNewRoutingModule */],
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
                __WEBPACK_IMPORTED_MODULE_15_ng_recaptcha__["RecaptchaModule"].forRoot(),
                // AgmCoreModule.forRoot({
                //      apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY'
                //    })
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY',
                    libraries: ["places"]
                })
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__signup_new_component__["a" /* SignupNewComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* NativeDateAdapter */]]
        })
    ], SignupNewModule);
    return SignupNewModule;
}());



/***/ })

});
//# sourceMappingURL=signup-new.module.chunk.js.map