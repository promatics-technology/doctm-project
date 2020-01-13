webpackJsonp(["homepage.module"],{

/***/ "../../../../../src/app/custom-pipes.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPipesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomPipesPipe = /** @class */ (function () {
    function CustomPipesPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    CustomPipesPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    CustomPipesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'customPipes'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], CustomPipesPipe);
    return CustomPipesPipe;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/homepage/homepage-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_component__ = __webpack_require__("../../../../../src/app/header-one-layout/homepage/homepage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__homepage_component__["a" /* HomepageComponent */],
    }
];
var HomepageRoutingModule = /** @class */ (function () {
    function HomepageRoutingModule() {
    }
    HomepageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], HomepageRoutingModule);
    return HomepageRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slick-wrap{\r\n\tposition: relative;\r\n}\r\n.slick-wrap .i-next,\r\n.slick-wrap .i-prev{\r\n\tposition: absolute;\r\n\ttop:42%;\r\n\tcursor: pointer;\r\n\tline-height: 2;\r\n\tcolor: #fff;\r\n\tbackground: #01b0f0;\r\n\tborder-radius: 100%;\r\n\theight: 40px;\r\n\twidth: 40px;\r\n\ttext-align: center;\r\n\tfont-size: 20px;\r\n}\r\n.slick-wrap .i-next{\r\n\tleft:-35px!important;\r\n}\r\n.slick-wrap .i-prev{\r\n\tright:-35px!important;\r\n}\r\n.saying{\r\n\tpadding-top:8px;\r\n}\r\n.profile{\r\n\twidth: 100%!important;\r\n    height: 120px!important;\r\n    border: 1px solid #01b0f0;\r\n    margin-top: 10px;\r\n    margin-bottom: 15px;\r\n    overflow: hidden;\r\n}\r\n.user-name{\r\n\tmargin-top:10px;margin-bottom:5px;\r\n\ttransform:scale(1.2);\r\n\t-webkit-transform:scale(1.2);\r\n\t-ms-transform:scale(1.2);\r\n\t-o-transform:scale(1.2);\r\n\t-ms-transform:scale(1.2);\r\n}\r\n.cstm-row{\r\n\tmargin: 0px;\r\n}\r\n#uploadedPrescriptionModal .modal-title{\r\n\tdisplay: inline-block;\r\n}\r\n.camera-div {\r\n\theight: 550px;\r\n\ttext-align: center;\r\n\tpadding: 10px;\r\n}\r\n.profile img{\r\n\twidth:100%;\r\n\theight: 120px;\r\n\t-o-object-fit: cover;\r\n\t   object-fit: cover;\r\n}\r\n.txt-white{\r\n\tcolor:#fff;\r\n}\r\n.saying{\r\n/*\tborder-radius: 2%;*/\r\n}\r\n.image-upload > input\r\n{\r\n\tdisplay: none;\r\n}\r\n.image-upload\r\n{\r\n\tcursor: pointer;\r\n\tpadding-left: 116px;\r\n\tmargin-top: -22px;\r\n\tfont-size: 27px;\r\n}\r\n.stars{\r\n\tmargin: 8px auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-one-layout/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"slider-sec\">\n\t<div class=\"container\">\t\t\t\n\t\t<div class=\"slider-div\">\n\t\t\t<div id=\"main-slider\" class=\"\">\n\t\t\t\t<div class=\"item\">\n\t\t\t\t\t<div class=\"slider-item\" style=\"background-image: url('./assets/imgs/slider-1.jpg');\"></div>\n\t\t\t\t</div>\n                <!-- <div class=\"item\">\n\t\t\t    \t<div class=\"slider-item\" style=\"background-image: url('imgs/slider-2.jpg');\"></div>\n                </div>\n                <div class=\"item\">\n\t\t\t    \t<div class=\"slider-item\" style=\"background-image: url('imgs/slider-3.jpg');\"></div>\n\t\t\t    </div> -->\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"slider-txt text-center\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"wrap-div\">\n\t\t\t\t\t\t<div class=\"smart_heading\">\n\t\t\t\t\t\t\t<h1>SmartClinic</h1>\n\t\t\t\t\t\t\t<p> Clinic at your fingertips </p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h1>An easy, secure and efficient medical practice platform</h1>\n\t\t\t\t\t\t<h3>Designed to integrate all clinic services, boost financial performance and deliver better patient experience</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\t\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"about-sec\"> \n\t<div class=\"container\">\n\t\t<h2 class=\"about-heading\">About SmartClinic</h2>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-5 col-md-5 col-sm-5 col-xs-12\">\n\t\t\t\t<div class=\"wrap-div\">\n\t\t\t\t\t<div [innerHtml]=\"homeData?.about.content\"></div>\n\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/header-one-layout/smart-clinic-service\" class=\"btn btn-theme\"> Read more </a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-12\">\n\t\t\t\t<!--div class=\"video-box wrap-div\">\n\t\t\t\t\t<iframe [src]=\"homeData?.video | customPipes\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t\t\t\t</div-->\n\t\t\t\t<div class=\"video-wrap\" *ngIf=\"video\">\n\t\t\t\t\t<video  controls controlsList=\"nodownload\" oncontextmenu=\"return false\" poster=\"assets/imgs/responsive.jpg\">\n\t\t\t\t\t\t<source [src]=\"video | customPipes\" type=\"video/mp4\" >\n\t\t\t\t\t\t</video>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"whyus-sec\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"whyus-panel\">\n\t\t\t\t<h2 class=\"about-heading\"> Why SmartClinic? </h2>\n\t\t\t\t<div class=\"whyus-wrap\">\n\n\t\t\t\t\t<div class=\"whyus-box\" *ngFor=\"let content of homeData?.whySmart; let i = index\">\n\t\t\t\t\t\t<div class=\"whyus-img\">\n\t\t\t\t\t\t\t<img src=\"./assets/imgs/why-{{i+1}}.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4> <span> {{content.title}} </span> </h4>\n\t\t\t\t\t\t<p [innerHtml]=\"content.description\"></p>\n\t\t\t\t\t</div>\n\n\t\t\t\t<!--div class=\"whyus-box\">\n\t\t\t\t\t<div class=\"whyus-img\">\n\t\t\t\t\t\t<img src=\"./assets/imgs/why-2.png\" class=\"img-responsive\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h4> <span> Use of latest technology </span> </h4>\n\t\t\t\t\t<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"whyus-box\">\n\t\t\t\t\t<div class=\"whyus-img\">\n\t\t\t\t\t\t<img src=\"./assets/imgs/why-3.png\" class=\"img-responsive\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h4> <span> Seamless integration of all clinic services </span> </h4>\n\t\t\t\t\t<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"whyus-box\">\n\t\t\t\t\t<div class=\"whyus-img\">\n\t\t\t\t\t\t<img src=\"./assets/imgs/why-4.png\" class=\"img-responsive\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h4> <span> Anywhere, anytime access </span> </h4>\n\t\t\t\t\t<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"whyus-box\">\n\t\t\t\t\t<div class=\"whyus-img\">\n\t\t\t\t\t\t<img src=\"./assets/imgs/why-5.png\" class=\"img-responsive\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h4> <span> Data security on top priority </span> </h4>\n\t\t\t\t\t<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>\n\t\t\t\t</div-->\n\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"clinicform-sec\">\n\t<div class=\"container\">\t\n\t\t<div class=\"col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10 col-xs-12 p-0\">\n\t\t\t<div class=\"clinicform-panel\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-md-5 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<div class=\"clinicform-content\">\n\t\t\t\t\t\t\t<h1 class=\"about-heading\"> Ready to make your clinic SMART?  </h1>\n\t\t\t\t\t\t\t<p> Allow us to put all your clinic operations on your fingertips. so that you save your time and energy to focus more on your patients.</p>\n\t\t\t\t\t\t\t<p>  Fill out the form to register with us and experience total peace of mind. </p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-offset-1 col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<div class=\"clinicform-form\">\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t<input id=\"field1\" type=\"text\" autocomplete=\"off\" class=\"form-control txtfield\" name=\"\" required=\"\"  />\n\t\t\t\t\t\t\t\t\t<label for=\"field1\" class=\"labelFloat\"> Mobile Number </label>\n\t\t\t\t\t\t\t\t\t<span style=\"color:red\" *ngIf=\"mobile_field\">Please enter a valid mobile number!</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t<input id=\"field2\" type=\"text\" class=\"form-control txtfield\" required=\"\" name=\"\" autocomplete=\"off\"  />\n\t\t\t\t\t\t\t\t\t<label for=\"field2\" class=\"labelFloat\"> Email (User ID) </label>\n\t\t\t\t\t\t\t\t\t<span style=\"color:red\"  *ngIf=\"email_field\">Please enter a valid email address!</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<input for=\"field3\" type=\"password\" class=\"form-control txtfield\" name=\"\" required=\"\" autocomplete=\"off\" [readonly]=\"email_readonly\"  style=\"background-color:white\" (focus)=\"changeReadOnly(false)\" id=\"field3\" />\n\t\t\t\t\t\t\t\t\t<label for=\"field3\" class=\"labelFloat\"> Create Password </label>\n\t\t\t\t\t\t\t\t\t<span style=\"color:red\"  *ngIf=\"password_field\">Please enter a valid mobile number!</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"fieldDesign\">\n\t\t\t\t\t\t\t\t\t<input id=\"field4\" type=\"password\"  autocomplete=\"off\" class=\"form-control txtfield\" name=\"\" required=\"\" style=\"background-color:white\"  [readonly]=\"email_readonly1\" (focus)=\"changeReadOnly1(false)\" />\n\t\t\t\t\t\t\t\t\t<label for=\"field4\" class=\"labelFloat\"> Repeat Password </label>\n\t\t\t\t\t\t\t\t\t<span style=\"color:red\" *ngIf=\"confirm_field\">Passwords and Confirm password is mismatching!</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n\t\t\t\t\t\t\t\t<input type=\"submit\" (click)=\"registerNewClinic()\" class=\"btn btn-custom\" value=\"Register\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\t\n\t\t</div>\n\n\t</div>\t\n</section>\n\n<section class=\"download-sec\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-7 col-md-7 col-sm-6 col-xs-12\">\n\t\t\t\t<div class=\"wrap-div\">\n\t\t\t\t\t<img src=\"./assets/imgs/responsive.jpg\" class=\"img-responsive screen-img\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-5 col-md-5 col-sm-6 col-xs-12\">\n\t\t\t\t<div class=\"wrap-div download-app\">\n\t\t\t\t\t<img src=\"./assets/imgs/logoDoctm.png\" class=\"logo\">\n\t\t\t\t\t<h2>Download Our App</h2>\n\t\t\t\t\t<p class=\"text-muted\">\n\t\t\t\t\t\t{{helpData[11]?.text}}\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"download-btns\">\t\n\t\t\t\t\t\t<a href=\"{{helpData[12]?.text}}\" target=\"_balank\"><img src=\"./assets/imgs/gp.png\"></a>\t\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"testimonial-sec\">\n\t<div class=\"container mt80\">\n\t\t<h2 class=\"text-center\">What our happy users have to say</h2>\n\t\t<div class=\"stars stars-2\">\n\t\t\t<ngx-stars *ngIf=\"totalRate\" [size]=\"1\" [color]=\"'#FFD700'\" [readonly]=\"true\" [initialStars]=\"totalRate\"></ngx-stars>&nbsp;\n\t\t\t<span>{{totalRate}}/5</span> <span>|</span> <span>{{ratingArray.length}} Rating</span>\n\t\t</div>\n\t\t<div class=\"slick-wrap\" *ngIf=\"ratingArray\">\n\t\t\t<ngx-slick class=\"carousel\"  *ngIf=\"ratingArray.length\"  id=\"abcde\" #slickModal=\"slick-modal\" [config]=\"slideConfig\">\n\t\t\t\t<div *ngFor = \"let list of ratingArray\">\n\t\t\t\t\t<div ngxSlickItem class=\"item\">\n\t\t\t\t\t\t<div class=\"saying\">\n\t\t\t\t\t\t\t<div class=\"row cstm-row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"txt-white text-center user-name\"><i><b>Dr. {{list.name}}</b></i></h5>\n\n\n\t\t\t\t\t\t\t\t\t<div class=\"text-center\" >\n\t\t\t\t\t\t\t\t\t\t<span class=\"txt-white\" style=\"margin-bottom:0px;     font-size: 12px; \" *ngFor = \"let data of list.qualification; let i=index\">{{data.display}}<span *ngIf=\"i!=list.qualification.length-1\">,&nbsp;</span></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"txt-white text-center\"><span style=\"color: #23de7e\">{{list.specialization}}</span> </h6>\n\t\t\t\t\t\t\t\t\t<h6 class=\"txt-white text-center\" style=\"margin-top:0px;\" *ngIf = \"list.city\"><i>{{list.city}}</i></h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"profile\" *ngIf = \"list.doc_image || list.doc_image != '' \" >\n\t\t\t\t\t\t\t\t\t\t<img   src=\"{{doc_image}}{{list.doc_image}}\" class=\"img-responsive\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"profile\" *ngIf = \"list.doctor_profile && !list.doc_image\">\n\t\t\t\t\t\t\t\t\t\t<img  src=\"{{doctorPic}}{{list.doctor_profile}}\" class=\"img-responsive\"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"profile\" *ngIf = \"list.doc_image == '' && list.doctor_profile == ''\" >\n\t\t\t\t\t\t\t\t\t\t<img  src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"stars\">\n\t\t\t\t\t\t\t\t\t\t<ngx-stars [size]=\"1\" [color]=\"'#FFD700'\" [readonly]=\"true\" [initialStars]=\"list.rating\"></ngx-stars>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-quote-left theme-clr\"></i>\n\t\t\t\t\t\t\t\t\t\t<p style=\"max-height: 70px; min-height: 70px; overflow: hidden;\">{{trimMessage(list.message)}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ngx-slick>\n\t\t\t<i class=\"fa fa-chevron-left btn-next i-next\" (click)=\"next()\"></i>\n\t\t\t<i class=\"fa fa-chevron-right btn-prev i-prev\" (click)=\"prev()\"></i>\n\t\t</div>\n\t</div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/header-one-layout/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(router, domSanitizer, userService, toastr) {
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.userService = userService;
        this.toastr = toastr;
        this.mobile_field = false;
        this.email_field = false;
        this.password_field = false;
        this.email_readonly = true;
        this.email_readonly1 = true;
        this.confirm_field = false;
        this.user_details = {};
        this.slideConfig = {
            "slidesToShow": 3,
            "slidesToScroll": 1,
            infinite: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        };
        localStorage['user_details'] = {};
    }
    HomepageComponent.prototype.changeReadOnly = function (isReadonly) {
        this.email_readonly = isReadonly;
    };
    HomepageComponent.prototype.changeReadOnly1 = function (isReadonly) {
        this.email_readonly1 = isReadonly;
    };
    HomepageComponent.prototype.ngOnInit = function () {
        this.doc_image = __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__["a" /* environment */].rate_us_pic1;
        this.doctorPic = __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__["a" /* environment */].doctorPic;
        // console.log(this.doc_image)
        // console.log(this.doctorPic)
        this.gettext();
        this.ratingArray = [];
        this.getRatingData();
        if (localStorage['isLoggedinDoctor']) {
            this.router.navigate(['/header-two-layout/dashboard']);
        }
        else if (localStorage['isLoggedinSmartAssistant']) {
            this.router.navigate(['/header-three-layout/smartassistant']);
        } /* else if(localStorage['isLoggedinSmartIpd']){
         this.router.navigate(['/header-four-layout/dashboard-ipd'])
      }else if(localStorage['isLoggedinSmartPharmacy']){
          this.router.navigate(['/header-five-layout/dashboard-pharmacy'])
      }else if(localStorage['isLoggedinSmartDiagnostics']){
           this.router.navigate(['/header-six-layout/dashboard-diagnostic'])
        } */
    };
    HomepageComponent.prototype.gettext = function () {
        var _this = this;
        this.helpData = [];
        this.userService.GetHelpText().subscribe(function (data) {
            if (data.response) {
                _this.helpData = data.data;
                console.log(_this.helpData);
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomepageComponent.prototype.getRatingData = function () {
        var _this = this;
        this.userService.GetRatingUs().subscribe(function (data) {
            // console.log(data)
            _this.homeData = data;
            _this.video = "https://doctmapi.gagzweblab.xyz/public/home_video/" + data.video[0].fileName;
            var rate = 0;
            for (var i = 0; i < data.data.length; i++) {
                if (data.data[i].status == true) {
                    _this.ratingArray.push(data.data[i]);
                    rate += parseInt(data.data[i].rating);
                }
            }
            var rat = rate / _this.ratingArray.length;
            _this.totalRate = parseFloat(rat.toFixed(1));
            // console.log(this.ratingArray)
        }, function (err) {
            console.log(err);
        });
    };
    HomepageComponent.prototype.next = function () {
        //	alert('Theer');
        if (this.ratingArray.length > 0) {
            $('.carousel').slick("slickNext");
        }
    };
    HomepageComponent.prototype.prev = function () {
        //alert('Here');
        if (this.ratingArray.length > 0) {
            //alert('Here');
            $('.carousel').slick("slickPrev");
        }
        // this.slickModal.slickPrev();
    };
    HomepageComponent.prototype.registerNewClinic = function () {
        var _this = this;
        if ($('#field1').val() == "") {
            this.mobile_field = true;
            return false;
        }
        else {
            this.mobile_field = false;
            this.user_details.mobile = $('#field1').val();
        }
        if ($('#field2').val() == "") {
            this.email_field = true;
            return false;
        }
        else {
            this.email_field = false;
            this.user_details.email = $('#field2').val();
        }
        if ($('#field3').val() == "") {
            this.password_field = true;
            return false;
        }
        else {
            this.password_field = false;
            this.user_details.password = $('#field3').val();
        }
        if ($('#field4').val() == "") {
            this.confirm_field = true;
            return false;
        }
        else {
            this.confirm_field = false;
        }
        if ($('#field4').val() != $('#field3').val()) {
            this.confirm_field = true;
            return false;
        }
        var obj = {
            email: this.user_details.email,
            phone: this.user_details.mobile
        };
        this.userService.CheckDoctorEmailPhone(obj).subscribe(function (data) {
            if (data.response) {
                localStorage['user_details'] = JSON.stringify(_this.user_details);
                // console.log(this.user_details);
                if ($('#myModalConf').length) {
                    $('#myModalConf').modal('show');
                }
            }
            else {
                _this.toastr.warning(data.message, 'Warning');
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomepageComponent.prototype.getSafeContent = function (data) {
        console.log(data);
        return this.domSanitizer.bypassSecurityTrustHtml("https://docs.google.com/gview?url=" + data);
    };
    HomepageComponent.prototype.trimMessage = function (msg) {
        if (msg.length > 100) {
            return msg.substr(0, 100);
        }
        else {
            return msg;
        }
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/header-one-layout/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-one-layout/homepage/homepage.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/homepage/homepage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_slick__ = __webpack_require__("../../../../ngx-slick/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homepage_routing_module__ = __webpack_require__("../../../../../src/app/header-one-layout/homepage/homepage-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__homepage_component__ = __webpack_require__("../../../../../src/app/header-one-layout/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_stars__ = __webpack_require__("../../../../ngx-stars/fesm5/ngx-stars.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_pipes_pipe__ = __webpack_require__("../../../../../src/app/custom-pipes.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomepageModule = /** @class */ (function () {
    function HomepageModule() {
    }
    HomepageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__homepage_routing_module__["a" /* HomepageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_slick__["a" /* SlickModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_stars__["a" /* NgxStarsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__homepage_component__["a" /* HomepageComponent */], __WEBPACK_IMPORTED_MODULE_6__custom_pipes_pipe__["a" /* CustomPipesPipe */]]
        })
    ], HomepageModule);
    return HomepageModule;
}());



/***/ })

});
//# sourceMappingURL=homepage.module.chunk.js.map