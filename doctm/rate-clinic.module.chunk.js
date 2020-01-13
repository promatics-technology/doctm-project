webpackJsonp(["rate-clinic.module"],{

/***/ "../../../../../src/app/header-two-layout/rate-clinic/rate-clinic-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateClinicRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rate_clinic_component__ = __webpack_require__("../../../../../src/app/header-two-layout/rate-clinic/rate-clinic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__rate_clinic_component__["a" /* RateClinicComponent */]
    }
];
var RateClinicRoutingModule = /** @class */ (function () {
    function RateClinicRoutingModule() {
    }
    RateClinicRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], RateClinicRoutingModule);
    return RateClinicRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/rate-clinic/rate-clinic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.head-p{\n\topacity: 0;\n}\n.stars-line{\n\tdisplay:inline-flex!important;\n\ttext-align: center!important;\n}\n.stars-line div{\n\tdisplay: inline-block!important;\n\t}*/\n\n\t.btn-sve{\n\t\tbackground-color: #00b0f0;\n\t\tborder-radius: 6px;\n\t\tcolor: #000;\n\t\t-webkit-box-shadow: none;\n\t\tbox-shadow: none;\n\t\tmargin-bottom: 8px;\n\t\tpadding: 7px 22px;\n\t}\n\n\t.image-upload > input\n{\ndisplay: none;\n}\n\n\t.image-upload\n{\ncursor: pointer;\npadding-left: 116px;\nmargin-top: -22px;\nfont-size: 27px;\n}\n\n\t.cstm-put{\n\tposition: relative;\n\tmargin:15px 0px;\n}\n\n\t.cstm-put input{\n\tposition: absolute;\n\ttop: 0;\n\tleft:0;\n\topacity:0;\n\twidth:100%;\n\theight: 100%;\n}\n\n\t.img-rnd img{\n\tborder-radius: 100%;\n\twidth:120px;\n\theight: 120px;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n}\n\n\t.signup-card{\n    padding-top: 0px;\n    padding-bottom: 0px;\n    margin-bottom: 15px;\n}\n\n\t.signup-smartasst {\n    width: 100%;\n    float: left;\n    padding: 40px;\n}\n\n\t.signup-card {\n    width: 100%;\n    float: left;\n    padding: 15px;\n    border-radius: 4px;\n    margin-bottom: 15px;\n    background-color: #fff;\n    -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10);\n            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10);\n}\n\n\ttexarea{\n\tmargin:0px;\n}\n\n\t.custm-img{\n    width: 100%;\n    height: 250px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/rate-clinic/rate-clinic.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"text-center\">\n\t<p class=\"head-p\">Rate the clinic</p>\n\t<br>\n\n\t<div class=\"\">\n\t\t<div  class=\"col-md-5 col-lg-offset-1\">\n\t\t\t<div class=\"signup-card signup-smartasst\">\n\t\t\t\t<h3  class=\"text-center m-b-30\">What our happy users have to say</h3>\n\t\t\t\t<p>Give your rating and comments here. You are also requested to upload your image with our home page, or prescription page or any other page u like. Please browse the picture from the button given</p>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<h3  class=\"text-center m-b-30\">Sample Image</h3>\n\t\t\t\t\t<div class=\"signup-card signup-smartasst\">\n\t\t\t\t\t\t<img *ngIf=\"rateImage.rateUs_Image\" src=\"{{rate_us_pic_sample}}{{rateImage.rateUs_Image}}\" width=\"500px;\"  class=\"user-avatar img-fluid rounded-circle\" />\n\n\t\t\t\t\t\t<!-- <img  [src]=\"reqData.rate_us\" width=\"130px\" *ngIf=\"reqData.rate_us\"  class=\"user-avatar img-fluid rounded-circle\" /> -->\n\t\t\t\t\t\t<img *ngIf=\"!rateImage.rateUs_Image\"  src=\"https://goodereader.com/blog/uploads/images/5-star-systempp_w400_h267.jpg\" class=\"img-responsive custm-img\" width=\"500px;\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t\n\t\t<div class=\"col-lg-5 text-center\">\n\n\t\t\t<!-- <div class=\"image-upload\" >\n\t\t\t<label for=\"file-input\">\n\t\t\t<i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n\t\t\t</label>\n\n\t\t\t<input type=\"file\" (change)=\"onuploadMedicalCert($event,i)\" accept=\".jpg,.jpeg, .png\" />\n\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t</div>\n\t\t-->\n\t\t<!-- {{rate_us_pic}}{{rateImage.rateUs_Image}} -->\n\t\t<div class=\"\">\n\t\t\t<div class=\"col-lg-12 text-center\" >\n\t\t\t\t<!-- <div *ngIf = \"rateImage.rateUs_Image && !doc_image\" class=\"img-rnd\">\n\t\t\t\t\t<img   src=\"{{rate_us_pic}}{{rateImage.rateUs_Image}}\" width=\"150px\" class=\"user-avatar img-fluid rounded-circle\" />\n\n\t\t\t\t</div> -->\n\t\t\t\t<div *ngIf = \"!doc_image\" class=\"img-rnd\">\n\t\t\t\t\t<img  src=\"./assets/imgs/no-person.jpg\" width=\"150px\" class=\"user-avatar img-fluid rounded-circle\" />\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf = \"doc_image\" class=\"img-rnd\">\n\t\t\t\t\t<img  [src]=\"doc_image\" width=\"150px\" class=\"user-avatar img-fluid rounded-circle\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<div class=\"col-lg-12\">\n\n\t\t\t\t\t\t<button class=\"btn btn-primary cstm-put\">Browse\n\t\t\t\t\t\t\t<input type=\"file\" (change)=\"onuploadMedicalCert($event,i)\" accept=\".jpg,.jpeg, .png\" />\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"image-upload\" >\n\t\t\t\t\t\t\t<!-- <label for=\"file-input\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</label> -->\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\n\t\t\t\t<ngx-stars [size]=\"5\" [color]=\"'#FFD700'\" [initialStars]=\"getThisDocData.rating\" (ratingOutput)=\"onRatingSet($event)\"></ngx-stars>\n\t\t\t\t<p>Rating {{totalRating}} out of 5</p>\n\t\t\t\t<div class=\"form-group cstm-txt-ar\">\n\t\t\t\t\t<label for=\"comment\">Comment:</label>\n\t\t\t\t\t<textarea class=\"form-control\" [(ngModel)] =\"setMessage\" s=\"5\" id=\"comment\" rows=\"5\" style=\"width:70%;\"></textarea>\n\t\t\t\t</div> \n\t\t\t\t<br>\n\t\t\t\t<button (click) = \"save()\" class=\"btn btn-sve\">Submit</button>\t\n\t\t\t\t<!-- <img src=\"{{rate_us_pic}}{{DocData.doc_image}}\" class=\"img-responsive\" /> -->\n\t\t\t</div>\n\t\t</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/rate-clinic/rate-clinic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateClinicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RateClinicComponent = /** @class */ (function () {
    function RateClinicComponent(UserService, toastr, router) {
        this.UserService = UserService;
        this.toastr = toastr;
        this.router = router;
    }
    RateClinicComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        this.adminDoctor = JSON.parse(localStorage['doctorsOfSameClinic']);
        this.rate_us_pic = __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__["a" /* environment */].rate_us_pic1;
        this.rate_us_pic_sample = __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__["a" /* environment */].rate_us_pic;
        console.log(this.rate_us_pic);
        this.getThisDocData = {};
        // console.log(this.adminDoctor)
        this.getRatingData();
        this.totalRating = 0;
        this.model = {};
        this.rateImage = {};
    };
    RateClinicComponent.prototype.onRatingSet = function (event) {
        // console.log(event)
        this.totalRating = event;
    };
    RateClinicComponent.prototype.save = function () {
        var _this = this;
        if (this.totalRating == 0 || this.totalRating <= 0) {
            this.toastr.warning('Please fill rating', 'Warning');
            return;
        }
        if (this.setMessage == '' || this.setMessage == null || this.setMessage == undefined || this.setMessage.toString().trim().length < 1) {
            this.toastr.warning('Please fill message', 'Warning');
            return;
        }
        // if(this.doc_image){
        // }else{
        // 	this.doc_image = ''
        // }
        var ob = {
            rating: this.totalRating,
            message: this.setMessage,
            doctor_id: this.doctorData._id,
            doctor_profile: this.doctorData.profile_image,
            city: this.adminDoctor.clinic_details.city,
            specialization: this.doctorData.specialization,
            qualification: this.doctorData.qualification,
            name: this.doctorData.first_name,
            doc_image: this.doc_image,
            status: false
        };
        // console.log(ob)
        this.UserService.RateUs(ob).subscribe(function (data) {
            // console.log(data)
            // this.DocData = data.data
            if (data.response) {
                _this.toastr.success(data.message, 'Success');
                _this.router.navigateByUrl('/header-two-layout/dashboard');
            }
        }, function (err) {
            console.log(err);
        });
    };
    RateClinicComponent.prototype.onuploadMedicalCert = function (evt, index) {
        var _this = this;
        this.doc_image = null;
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
            _this.doc_image = mainImage;
        };
        fr.readAsDataURL(file);
    };
    RateClinicComponent.prototype.getRatingData = function () {
        var _this = this;
        this.ratingArray = [];
        this.UserService.GetRatingUs().subscribe(function (data) {
            console.log(data);
            _this.rateImage = data.rateImage;
            console.log(_this.rateImage);
            var rate = 0;
            for (var i = 0; i < data.data.length; i++) {
                if (data.data[i].doctor_id == _this.doctorData._id) {
                    console.log(data.data[i].doctor_id == _this.doctorData._id);
                    _this.ratingArray.push(data.data[i]);
                    break;
                }
            }
            console.log(_this.ratingArray);
            if (_this.ratingArray[0]) {
                _this.getThisDocData = _this.ratingArray[0];
                _this.totalRating = _this.ratingArray[0].rating;
                console.log(_this.totalRating);
                _this.setMessage = _this.ratingArray[0].message;
                console.log(_this.getThisDocData);
            }
        }, function (err) {
            console.log(err);
        });
    };
    RateClinicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rate-clinic',
            template: __webpack_require__("../../../../../src/app/header-two-layout/rate-clinic/rate-clinic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/rate-clinic/rate-clinic.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], RateClinicComponent);
    return RateClinicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/rate-clinic/rate-clinic.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateClinicModule", function() { return RateClinicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rate_clinic_component__ = __webpack_require__("../../../../../src/app/header-two-layout/rate-clinic/rate-clinic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rate_clinic_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/rate-clinic/rate-clinic-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bar_rating__ = __webpack_require__("../../../../ngx-bar-rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_stars__ = __webpack_require__("../../../../ngx-stars/fesm5/ngx-stars.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RateClinicModule = /** @class */ (function () {
    function RateClinicModule() {
    }
    RateClinicModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__rate_clinic_routing_module__["a" /* RateClinicRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bar_rating__["a" /* BarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_stars__["a" /* NgxStarsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__rate_clinic_component__["a" /* RateClinicComponent */]]
        })
    ], RateClinicModule);
    return RateClinicModule;
}());



/***/ }),

/***/ "../../../../ngx-bar-rating/component/bar-rating.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarRatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");


/** This allows support [(ngModel)] and ngControl. */
var RATING_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return BarRatingComponent; }),
    multi: true
};
/** This allows control required validation. */
var RATING_VALUE_VALIDATOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* NG_VALIDATORS */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return BarRatingComponent; }),
    multi: true,
};
var BarRatingComponent = (function () {
    function BarRatingComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.contexts = [];
        /** Maximal rating that can be given using this widget. */
        this.max = 5;
        /** A flag indicating if rating can be updated. */
        this.readOnly = false;
        /** Set the theme */
        this.theme = 'default';
        /** Show rating title */
        this.showText = false;
        /** Replace rate value with a title */
        this.titles = [];
        /** A flag indicating if rating is required for form validation. */
        this.required = false;
        /** An event fired when a user is hovering over a given rating.
         * Event's payload equals to the rating being hovered over. */
        this.hover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** An event fired when a user stops hovering over a given rating.
         * Event's payload equals to the rating of the last item being hovered over. */
        this.leave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** An event fired when a user selects a new rating.
         * Event's payload equals to the newly selected rating. */
        this.rateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    BarRatingComponent.prototype.ngOnChanges = function (changes) {
        if (changes['rate']) {
            this.update(this.rate);
        }
    };
    BarRatingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contexts = Array.from({ length: this.max }, function (context, i) { return ({
            selected: false,
            fraction: false,
            click: function (e) { return _this.handleClick(e, i + 1); },
            enter: function () { return _this.handleEnter(i + 1); }
        }); });
        this.updateState(this.rate);
    };
    BarRatingComponent.prototype.update = function (newRate, internalChange) {
        if (internalChange === void 0) { internalChange = true; }
        if (!this.readOnly && !this.disabled && this.rate !== newRate) {
            this.rate = newRate;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            this.onChange(this.rate);
            this.onTouched();
        }
        this.updateState(this.rate);
    };
    /** Reset rate value */
    BarRatingComponent.prototype.reset = function () {
        this.leave.emit(this.nextRate);
        this.updateState(this.rate);
    };
    BarRatingComponent.prototype.updateState = function (nextValue) {
        var _this = this;
        /** Set rate value as text */
        this.nextRate = nextValue - 1;
        /** Set the rating */
        this.contexts = Array.from({ length: this.max }, function (context, index) { return ({
            selected: index + 1 <= nextValue,
            fraction: (index + 1 === Math.round(nextValue) && nextValue % 1) >= 0.5,
            click: function (e) { return _this.handleClick(e, index); },
            enter: function () { return _this.handleEnter(index); }
        }); });
    };
    BarRatingComponent.prototype.handleClick = function (e, value) {
        /** (NOT TESTED) Remove 300ms click delay on touch devices */
        e.preventDefault();
        e.stopPropagation();
        this.update(value + 1);
    };
    BarRatingComponent.prototype.handleEnter = function (index) {
        if (!this.disabled && !this.readOnly) {
            /** Add selected class for rating hover */
            this.contexts.map(function (context, i) {
                context.active = i <= index;
                context.fraction = false;
                context.selected = false;
            });
            this.nextRate = index;
            this.hover.emit(index);
        }
    };
    /** This is the initial value set to the component */
    BarRatingComponent.prototype.writeValue = function (value) {
        this.update(value, false);
        this.changeDetectorRef.markForCheck();
    };
    BarRatingComponent.prototype.validate = function (c) {
        return (this.required && !c.value) ? { required: true } : null;
    };
    BarRatingComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    BarRatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    BarRatingComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    return BarRatingComponent;
}());

BarRatingComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'bar-rating',
                template: "\n    <div [class]=\"'br br-' + theme\" [class.br-readonly]=\"readOnly\" [class.br-disabled]=\"disabled\">\n\n      <div class=\"br-units\" (mouseleave)=\"reset()\">\n\n        <div class=\"br-unit\" *ngFor=\"let unit of contexts\" [class.br-fraction]=\"unit.fraction\"\n            [class.br-selected]=\"unit.selected\" [class.br-active]=\"unit.active\"\n            (click)=\"unit.click($event)\" (mouseenter)=\"unit.enter()\"></div>\n\n      </div>\n\n      <div *ngIf=\"showText\" class=\"br-text\">{{ nextRate | rateTitle: titles}}</div>\n    </div>\n  ",
                styles: ["\n    *{box-sizing:border-box}.br{position:relative;margin:15px 0}.br-units{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.br-unit{cursor:pointer;-webkit-font-smoothing:antialiased;text-rendering:auto}.br-disabled .br-unit,.br-readonly .br-unit{cursor:default}\n  "],
                providers: [RATING_VALUE_ACCESSOR, RATING_VALUE_VALIDATOR],
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
            },] },
];
/** @nocollapse */
BarRatingComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
BarRatingComponent.propDecorators = {
    'rate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'readOnly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'theme': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'titles': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'required': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'hover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'leave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'rateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=bar-rating.component.js.map

/***/ }),

/***/ "../../../../ngx-bar-rating/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rating_module__ = __webpack_require__("../../../../ngx-bar-rating/rating.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__rating_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bar-rating/pipe/bar-rating.pipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarRatingPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var BarRatingPipe = (function () {
    function BarRatingPipe() {
    }
    BarRatingPipe.prototype.transform = function (value, titles) {
        if (value === void 0) { value = 0; }
        /** Initialize value with 0 in case of undefined */
        return titles[value] || value + 1;
    };
    return BarRatingPipe;
}());

BarRatingPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'rateTitle'
            },] },
];
/** @nocollapse */
BarRatingPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=bar-rating.pipe.js.map

/***/ }),

/***/ "../../../../ngx-bar-rating/rating.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarRatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_bar_rating_component__ = __webpack_require__("../../../../ngx-bar-rating/component/bar-rating.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipe_bar_rating_pipe__ = __webpack_require__("../../../../ngx-bar-rating/pipe/bar-rating.pipe.js");





var BarRatingModule = (function () {
    function BarRatingModule() {
    }
    return BarRatingModule;
}());

BarRatingModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_3__component_bar_rating_component__["a" /* BarRatingComponent */],
                    __WEBPACK_IMPORTED_MODULE_4__pipe_bar_rating_pipe__["a" /* BarRatingPipe */]
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* FormsModule */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_3__component_bar_rating_component__["a" /* BarRatingComponent */]
                ]
            },] },
];
/** @nocollapse */
BarRatingModule.ctorParameters = function () { return []; };
//# sourceMappingURL=rating.module.js.map

/***/ })

});
//# sourceMappingURL=rate-clinic.module.chunk.js.map