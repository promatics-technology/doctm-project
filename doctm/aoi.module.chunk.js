webpackJsonp(["aoi.module"],{

/***/ "../../../../../src/app/header-two-layout/aoi/aoi-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AoiRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aoi_component__ = __webpack_require__("../../../../../src/app/header-two-layout/aoi/aoi.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__aoi_component__["a" /* AoiComponent */],
    }
];
var AoiRoutingModule = /** @class */ (function () {
    function AoiRoutingModule() {
    }
    AoiRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AoiRoutingModule);
    return AoiRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/aoi/aoi.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cus-sidebar-wrapper{\r\n    -webkit-transform: translateX(-15px);\r\n            transform: translateX(-15px);\r\n}\r\n.cus-sidebar-wrapper .cus-sidebar{\r\n\twidth:209px;\r\n}\r\n.col-left{\r\n\tpadding-right:0px; \r\n}\r\n.col-ryt{\r\n\tpadding-left:0px;\r\n}\r\n.cstm-table table th{\r\n\tpadding:10px 5px; \r\n\tborder-right:1px solid #777;\r\n\tbackground-color: #c5d8f1;\r\n\t-webkit-transition: 300ms;\r\n\ttransition: 300ms;\r\n}\r\n.cstm-table table th:hover{\r\n\tpadding:10px 5px; \r\n\tborder-right:1px solid #777;\r\n\tbackground-color:#000;\r\n\tcolor:  #c5d8f1;\r\n}\r\n.cstm-table table{\r\n\tborder-color: #777;\r\n}\r\n.map{\r\n\tmargin-top: -20px;\r\n}\r\n.mg-t-0{\r\n\tmargin-top: 0px;\r\n}\r\n.thm-clr{\r\n\tcolor: #00b0f0;\r\n}\r\n.footer-cstm-an{\r\n\tposition: fixed;\r\n    float: left;\r\n    width: 100%;\r\n    bottom: 0;\r\n    background: #fff;\r\n    border-top: 1px solid #d6d6d6;\r\n    padding-top: 8px;\r\n}\r\n.btn-cstm{\r\n\tbackground-color: #00b0f0;\r\n\tborder-radius: 6px;\r\n\tcolor:#000;\r\n\t-webkit-box-shadow: none;\r\n\t        box-shadow: none;\r\n\tmargin-bottom:8px; \r\n\tpadding: 7px 22px;\r\n\twidth: 250px;\r\n\tfont-size: 22px;\r\n\t-webkit-transition: 50ms;\r\n\ttransition: 50ms;\r\n}\r\n.btn-cstm:hover{\r\n\tbackground-color:#000;\r\n\tcolor:#fff; \r\n}\r\nspan.bl{\r\n  /*color:#00b0f0!important;*/\r\n  color: rgb(91,131,252);\r\n}\r\nspan.grin{\r\n  /*color:green!important;*/\r\n  color: rgb(90,252,124);\r\n}\r\nspan.red{\r\n  /*color:red!important;*/\r\n  color: rgb(252,102,88);\r\n}\r\n.mt-table h3{\r\n\tmargin-top: 0px;\r\n}\r\n.cstm-tr{\r\n\tbackground-color: #000;\r\n\tcolor:#fff;\r\n\ttext-align: center;\r\n}\r\n.cstm-tr-2{\r\n\tbackground-color:#d7e4e3;\r\n}\r\n.cstm-tr-2 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-2 td:last-child {\r\n border-right: none;\r\n}\r\n.cstm-tr-3{\r\n\tborder-bottom:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td:last-child {\r\n border-right: none;\r\n}\r\n.close{\r\n\tfont-size: 35px;\r\n}\r\n.modal-body{\r\n\tpadding-top: 0px;\r\n\tpadding-bottom: 0px;\r\n}\r\n.cstm-tab{\r\n\tmin-height: 0.1px;\r\n\tmax-height: 500px;\r\n\toverflow-y: scroll;\r\n\tmargin-top: 25px;\r\n}\r\n.cstm-md-bdy{\r\n\tposition: relative;\r\n}\r\n.cstm-md-bdy button{\r\n\tposition: absolute;\r\n\ttop: -30px;\r\n    right: 8px;\r\n}\r\n.cus-sidebar-wrapper .cus-sidebar{\r\n\theight: initial;\r\n}\r\n.h3-mrgn h3{\r\n\tmargin:3px 0px;\r\n}\r\n.h3-mrgn{\r\n\tmargin-bottom: 25px;\r\n}\r\n.modal.fade .modal-dialog {\r\n  -webkit-transform: translate3d(0, 100vh, 0);\r\n          transform: translate3d(0, 100vh, 0);\r\n  -webkit-transition: 700ms;\r\n  transition: 700ms;\r\n}\r\n.modal.in .modal-dialog {\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0);\r\n  -webkit-transition: 700ms;\r\n  transition: 700ms;\r\n}\r\n.evn{\r\n\tbackground-color:#eff3ef;\r\n}\r\n.out{\r\n\tbackground-color:#9cacc0;\r\n}\r\n.cus-sidebar{\r\n\twidth:100%!important;\r\n}\r\n.btn-stts{\r\n\tposition: static!important;\r\n\tmargin-bottom: 10px!important;\t\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/aoi/aoi.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-2 col-left\">\n\t\t\t<div class=\"cus-sidebar-wrapper\">\n\t\t\t\t<div class=\"cus-sidebar cstm-sd-bar\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li class=\"{{getClass(0)}}\" (click)=\"activatetab(0)\" class=\"active\"> <a href=\"javascript:void(0);\"> Today </a> </li>\n\t    \t\t\t\t<li class=\"{{getClass(1)}}\" (click)=\"activatetab(1)\"> <a href=\"javascript:void(0);\"> 1 Week &nbsp;<small *ngIf=\"activatedtab==1\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(2)}}\" (click)=\"activatetab(2)\"> <a href=\"javascript:void(0);\"> 2 Weeks &nbsp;<small *ngIf=\"activatedtab==2\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small>  </a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month &nbsp;<small *ngIf=\"activatedtab==3\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month &nbsp;<small *ngIf=\"activatedtab==4\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month &nbsp;<small *ngIf=\"activatedtab==5\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year &nbsp;<small *ngIf=\"activatedtab==6\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n\t\t\t\t\t\t<li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> All </a> </li>\n\t    \t\t\t\t<li style=\"padding-left: 15px;height: 44px;\">\n\t    \t\t\t\t\t<h4>\n\t    \t\t\t\t\t<!-- <img src=\"http://maps.google.com/mapfiles/ms/icons/blue-dot.png\" /> -->\n\t    \t\t\t\t\t<img src=\"./assets/imgs/map-blue32.png\">\n\t    \t\t\t\t\t<!-- <span class=\"fa fa-circle bl\"></span>  -->\n\t\t\t\t\t\t\t<b>< 5 %</b>\n\t\t\t\t\t\t\t</h4>\n\t    \t\t\t\t</li>\n\t    \t\t\t\t<li style=\"padding-left: 15px;height: 44px;\">\n\t    \t\t\t\t\t<h4>\n\t    \t\t\t\t\t<!-- <img src=\"http://maps.google.com/mapfiles/ms/icons/green-dot.png\" /> -->\n\t    \t\t\t\t\t<img src=\"./assets/imgs/map-green32.png\">\n\t    \t\t\t\t\t<!-- <span class=\"fa fa-circle grin\"></span>  -->\n\t\t\t\t\t\t\t<b> 5-15 %</b>\n\t\t\t\t\t\t\t</h4>\n\t    \t\t\t\t</li>\n\t    \t\t\t\t<li style=\"padding-left: 15px;height: 44px;\">\n\t    \t\t\t\t\t<h4>\n\t    \t\t\t\t\t<!-- <img src=\"http://maps.google.com/mapfiles/ms/icons/red-dot.png\" /> -->\n\t    \t\t\t\t\t<img src=\"./assets/imgs/map-red32.png\">\n\t    \t\t\t\t\t<!-- <span class=\"fa fa-circle red\"></span>  -->\n\t\t\t\t\t\t\t<b> > 15 %</b>\n\t\t\t\t\t\t\t</h4>\n\t    \t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-10 col-ryt\" *ngIf=\"!loading\">\n\t\t\t<div class=\"cstm-table\">\n\t\t\t\t<table class=\"table table-bordered h3-mrgn\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<!-- {{allData | json}} -->\n\t\t\t\t\t\t<th class=\"text-center\" *ngIf = \"allData\"><div>Total Area</div><div ><h3> <b> {{allData?.length}}</b></h3></div></th>\n\t\t\t\t\t\t<th class=\"text-center\" *ngIf = \"!allData\"><div>Total Area</div><div ><h3> <b>0</b></h3></div></th>\n\t\t\t\t\t\t<th class=\"text-center\"><div>Total Patients</div> <div><h3><b>{{totalLocations}}</b></h3></div></th>\n\t\t\t\t\t\t<th class=\"text-center\"><div>Area With Max Patients </div><div *ngIf = \"areaMaxPatients\"><h3><b>{{areaMaxPatients}}</b></h3></div></th>\n\t\t\t\t\t\t<!-- <th class=\"text-center\"><div>Area With Max Patients </div><div *ngIf = \"!areaMaxPatients\"><h3><b>Other</b></h3></div></th> -->\n\t\t\t\t\t\t<th class=\"text-center\"><div>Out Station Patients</div><div><h3><b>{{outOfStation}} ({{outOfStationPercenatge}}%)</b></h3></div></th>\n\t\t\t\t\t</thead>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div class=\"map\">\n\t\t\t\t<agm-map [latitude]=\"lat\" [longitude]=\"lng\" style=\"height: 450px;\" [zoom]=\"zoom\">\n                    <agm-marker *ngFor=\"let data of allData; let i = index\" [latitude]=\"data.dataAoi[0].registration.lat\" [longitude]=\"data.dataAoi[0].registration.lng\" [title]=\"data.title\" [iconUrl]=\"data.icon\">\n                    \t<agm-info-window [disableAutoPan]=\"true\">\n                    \t\t<h5>{{data.title}}</h5><span class=\"text-center\">{{data.quality}}</span>                    \t\t\n\t\t\t\t        </agm-info-window>\n                    </agm-marker>\n                    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [title]=\"clinicName\" [iconUrl]=\"clinic_icon\">\n                    \t<agm-circle [latitude]=\"lat\" [longitude]=\"lng\" \n\t\t\t\t\t      [radius]=\"radius\" [fillOpacity]=\"fillOpacity\">\n\t\t\t\t\t  \t</agm-circle>\n\t\t\t\t\t  \t<agm-info-window [disableAutoPan]=\"true\">\n                    \t\t<h5>{{clinicName}}</h5>\n\t\t\t\t        </agm-info-window>\n                    </agm-marker>\n                </agm-map>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container footer-cstm-an\">\n\t<!-- <div class=\"row\"> -->\n\t\t<!-- <div class=\"col-lg-7 text-center\">\n\t\t\t<div>\n\t\t\t\t<h4>\n\t\t\t\t\t<span class=\"fa fa-circle bl\"></span> \n\t\t\t\t\t<b>< 5 %</b>\n\t\t\t\t\t<span class=\"bl\">Blue Dot</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n\t\t\t\t\t<span class=\"fa fa-circle grin\"></span> \n\t\t\t\t\t<b>< 5-15 %</b>\n\t\t\t\t\t<span class=\"grin\">Green Dot</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n\t\t\t\t\t<span class=\"fa fa-circle red\"></span> \n\t\t\t\t\t<b> > 5 %</b>\n\t\t\t\t\t<span class=\"red\">Red Dot</span>\n\t\t\t\t</h4>\n\t\t\t</div>\n\t\t</div> -->\n\t\t<div class=\"col-lg-12 text-center\">\n\t\t\t<button class=\"btn btn-cstm\" data-toggle=\"modal\" data-target=\"#myModal\">Tabular View</button>\n\t\t</div>\n\t<!-- </div> -->\n</div>\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body cstm-md-bdy\">          \t\n      \t \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      \t\t<div class=\"cstm-tab\">\n\t\t\t\t<table class=\"table tb-1 table-bordered\">\n\t\t\t\t    <tbody>\n\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t<td class=\"text-center\" width=\"80px\"><b>Sr no</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Area Name</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Number of Patients</b></td>\n\t\t\t\t\t\t\t<td class=\"text-center\"><b>Percentages</b></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"{{getClassMap(data,i)}}\" *ngFor=\"let data of allData;let i = index;\">\n\t\t\t\t\t\t\t<td class=\"text-center\" *ngIf=\"data.dataAoi[0].registration.lat!=0\" width=\"80px\">{{i+1}}</td>\n\t\t\t\t\t\t\t<td class=\"text-left\" *ngIf=\"data.dataAoi[0].registration.lat!=0\">{{data.dataAoi[0].registration.location}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\" *ngIf=\"data.dataAoi[0].registration.lat!=0\">{{data.dataAoi.length}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\" *ngIf=\"data.dataAoi[0].registration.lat!=0\">{{data.percentage}}%</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"cstm-tr-2\">\n\t\t\t\t\t\t\t<td class=\"text-center\" colspan=\"2\">\n\t\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\t\tTotal Patients\n\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">{{totalLocations}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">100%</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n      \t\t</div>    \n      \t\t<div class=\"text-center\">\t\n\t      \t\t<button class=\"btn btn-custom btn-stts\"  (click)=\"exportPdf()\"> EXPORT \n\t            </button>   \t\n      \t\t</div>   \n        </div>\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/aoi/aoi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AoiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AoiComponent = /** @class */ (function () {
    // icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    // icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    // icon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    function AoiComponent(userService) {
        this.userService = userService;
        // locations
        this.activatedtab = 0;
        this.loading = true;
        this.fromDate = new Date();
        this.toDate = new Date();
    }
    AoiComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        this.clinic_icon = "./assets/imgs/black-64.png";
        this.fillOpacity = 0.1;
        this.radius = 0;
        if (this.doctorData.type_of_doctor == "normal_doctor") {
            this.FindDoctorsOfSameClinic1();
        }
        else {
            this.lat = parseFloat(this.doctorData.clinic_details.lat);
            this.lng = parseFloat(this.doctorData.clinic_details.lng);
            console.log(this.lat);
            console.log(this.lng);
            this.clinicName = this.doctorData.clinic_details.clinic_name;
            this.clinicCity = this.doctorData.clinic_details.city;
            this.clinic_icon = "./assets/imgs/black-64.png";
            this.fillOpacity = 0.1;
            this.radius = 0;
            this.activatetab(0);
        }
        this.FindDoctorsOfSameClinic1();
        this.allData = [];
        this.activatedtab = 0;
    };
    AoiComponent.prototype.ngAfterViewInit = function () {
        this.setCurrentPosition();
    };
    AoiComponent.prototype.setCurrentPosition = function () {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                // this.lat = position.coords.latitude;
                // this.lng = position.coords.longitude;
            });
        }
    };
    AoiComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else {
            return '';
        }
    };
    AoiComponent.prototype.activatetab = function (i) {
        var _this = this;
        this.activatedtab = i;
        var object;
        object = {};
        var date = new Date();
        object.doctor_id = this.doctorData._id;
        object.end_date = new Date();
        if (i == 0) {
            object.start_date = date;
        }
        else if (i == 1) {
            object.start_date = new Date(date.setDate(date.getDate() - 7));
        }
        else if (i == 2) {
            object.start_date = new Date(date.setDate(date.getDate() - 14));
        }
        else if (i == 3) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 1));
        }
        else if (i == 4) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 3));
        }
        else if (i == 5) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 6));
        }
        else if (i == 6) {
            object.start_date = new Date(date.setFullYear(date.getFullYear() - 1));
        }
        else if (i == 7) {
            object.start_date = new Date();
            object.maximum = true;
        }
        console.log(object);
        this.fromDate = new Date(object.start_date);
        this.toDate = new Date(object.end_date);
        this.allData = [];
        this.totalLocations = 0;
        this.outOfStation = 0;
        this.outOfStationPercenatge = 0;
        this.loading = true;
        var arr = [];
        this.userService.AreaOfInfluence(object).subscribe(function (result) {
            console.log(result);
            if (result.response) {
                _this.allData = [];
                for (var i = 0; i < result.data.length; i++) {
                    for (var j = 0; j < result.data[i].dataAoi.length; j++) {
                        if (result.data[i].dataAoi[j].registration.lat != 0) {
                            arr.push(result.data[i]);
                        }
                    }
                }
                var map = new Map();
                for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var item = arr_1[_i];
                    if (!map.has(item._id)) {
                        map.set(item._id, true); // set any value to Map
                        _this.allData.push(item);
                    }
                }
                console.log(_this.allData);
                //concatPatientsOfRegistration start
                for (var i = 0; i < result.dataRegistration.length; i++) {
                    var boolean = false;
                    for (var j = 0; j < _this.allData.length; j++) {
                        if (result.dataRegistration[i]._id) {
                            if (result.dataRegistration[i]._id == _this.allData[j]._id) {
                                for (var k = 0; k < result.dataRegistration[i].dataAoi.length; k++) {
                                    _this.allData[j].dataAoi.push({ registration: result.dataRegistration[i].dataAoi[k] });
                                }
                                boolean = true;
                                break;
                            }
                        }
                    }
                    if (boolean == false) {
                        _this.allData.push({
                            _id: result.dataRegistration[i]._id,
                            dataAoi: []
                        });
                        for (var k = 0; k < result.dataRegistration[i].dataAoi.length; k++) {
                            _this.allData[_this.allData.length - 1].dataAoi.push({ registration: result.dataRegistration[i].dataAoi[k] });
                        }
                    }
                }
                //concatPatientsOfRegistration end
                console.log(_this.allData);
                _this.totalLocations = 0;
                for (var i = 0; i < _this.allData.length; i++) {
                    if (_this.allData[i].dataAoi[0].registration.lat && _this.allData[i].dataAoi[0].registration.lng) {
                        _this.allData[i].distance = _this.distance(_this.lat, _this.lng, _this.allData[i].dataAoi[0].registration.lat, _this.allData[i].dataAoi[0].registration.lng, 'K');
                    }
                    else {
                        _this.allData[i].distance = 0;
                    }
                    for (var j = 0; j < _this.allData[i].dataAoi.length; j++) {
                        if (_this.allData[i].dataAoi[j].registration.lat && _this.allData[i].dataAoi[j].registration.lng) {
                            if (_this.allData[i].dataAoi[j].registration.city.trim() != _this.clinicCity.trim()) {
                                _this.allData[i].outOfStation = true;
                                _this.outOfStation++;
                            }
                        }
                        if (_this.allData[i].dataAoi[j].registration.lat != 0) {
                            _this.totalLocations++;
                        }
                    }
                }
                for (var i = 0; i < _this.allData.length; i++) {
                    _this.allData[i].percentage = parseFloat(_this.getPercentage(_this.allData[i].dataAoi.length, _this.totalLocations));
                    if (_this.allData[i].percentage < 5) {
                        // this.allData[i].icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'                        
                        _this.allData[i].icon = './assets/imgs/map-blue32.png';
                    }
                    else if (_this.allData[i].percentage >= 5 && _this.allData[i].percentage < 15) {
                        // this.allData[i].icon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'                                                
                        _this.allData[i].icon = './assets/imgs/map-green32.png';
                    }
                    else {
                        // this.allData[i].icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'                                                
                        _this.allData[i].icon = './assets/imgs/map-red32.png';
                    }
                    _this.allData[i].title = _this.allData[i].dataAoi[0].registration.location + "- " + _this.allData[i].dataAoi.length + "Pat (" + _this.allData[i].percentage + "%)";
                    //     this.allData[i].dataAoi[j].icon = 'http://maps.google.com/mapfiles/kml/paddle/blu-circle.png'
                    // this.allData[i].dataAoi[j].icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                }
                _this.allData.sort(function (a, b) {
                    var nameA = a.distance, nameB = b.distance;
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                });
                if (_this.allData.length > 0) {
                    _this.radius = (_this.allData[_this.allData.length - 1].distance) * 1000;
                    _this.allData[_this.allData.length - 1].quality = '(Farthest) ' + _this.getData(_this.allData[_this.allData.length - 1].distance) + "KM"; // this.allData[this.allData.length-1].distance = 
                    if (_this.allData[_this.allData.length - 1].percentage < 5) {
                        _this.allData[_this.allData.length - 1].icon = 'http://maps.google.com/mapfiles/kml/paddle/blu-circle.png';
                        _this.allData[_this.allData.length - 1].icon = './assets/imgs/map-blue64.png';
                    }
                    else if (_this.allData[_this.allData.length - 1].percentage >= 5 && _this.allData[_this.allData.length - 1].percentage < 15) {
                        // this.allData[this.allData.length-1].icon = 'http://maps.google.com/mapfiles/kml/paddle/grn-circle.png'                                                
                        _this.allData[_this.allData.length - 1].icon = './assets/imgs/map-green64.png';
                    }
                    else {
                        // this.allData[this.allData.length-1].icon = 'http://maps.google.com/mapfiles/kml/paddle/red-circle.png'                                              
                        _this.allData[_this.allData.length - 1].icon = './assets/imgs/map-red64.png';
                    }
                    _this.allData.sort(function (a, b) {
                        var nameA = a.percentage, nameB = b.percentage;
                        if (nameA < nameB) {
                            return 1;
                        }
                        if (nameA > nameB) {
                            return -1;
                        }
                    });
                    if (_this.allData[0].dataAoi[0].registration.location) {
                        _this.areaMaxPatients = _this.allData[0].dataAoi[0].registration.location + "- " + _this.allData[0].dataAoi.length + " (" + _this.allData[0].percentage + "%)";
                    }
                    // this.allData[0].icon = 'http://maps.google.com/mapfiles/kml/paddle/red-circle.png'
                    _this.allData[0].icon = './assets/imgs/map-red64.png';
                    _this.allData[0].quality = '(Top Area)';
                }
                _this.outOfStationPercenatge = parseInt(_this.getPercentage(_this.outOfStation, _this.totalLocations));
                //calculate zoom level acc to radius//
                if (_this.radius < 5000) {
                    _this.zoom = 13;
                }
                else if (_this.radius >= 5000 && _this.radius <= 10000) {
                    _this.zoom = 12;
                }
                else if (_this.radius > 10000 && _this.radius < 25000) {
                    _this.zoom = 11;
                }
                else if (_this.radius >= 25000 && _this.radius <= 50000) {
                    _this.zoom = 10;
                }
                else if (_this.radius > 50000 && _this.radius <= 100000) {
                    _this.zoom = 9;
                }
                else if (_this.radius > 100000 && _this.radius <= 200000) {
                    _this.zoom = 8;
                }
                else {
                    _this.zoom = 6;
                }
                console.log(_this.radius);
                console.log(_this.allData);
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    AoiComponent.prototype.getData = function (data) {
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
    AoiComponent.prototype.getPercentage = function (data, total) {
        return this.getData((data * 100) / total);
    };
    AoiComponent.prototype.distance = function (lat1, lon1, lat2, lon2, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * lat2 / 180;
            var theta = lon1 - lon2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit == "K") {
                dist = dist * 1.609344;
            }
            if (unit == "N") {
                dist = dist * 0.8684;
            }
            return dist;
        }
    };
    AoiComponent.prototype.FindDoctorsOfSameClinic1 = function () {
        var _this = this;
        this.loading = true;
        this.userService.FindDoctorsOfSameClinic(this.doctorData.doctm_clinic_id).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                var admin = data.data.filter(function (d) { return d.type_of_doctor == "admin_doctor"; });
                _this.lat = parseFloat(admin[0].clinic_details.lat);
                _this.lng = parseFloat(admin[0].clinic_details.lng);
                _this.clinicName = admin[0].clinic_details.clinic_name;
                _this.clinicCity = admin[0].clinic_details.city;
                _this.activatetab(0);
            }
        }, function (err) {
            console.log(err);
        });
    };
    AoiComponent.prototype.getClassMap = function (data, i) {
        if (data.outOfStation) {
            return 'out';
        }
        else {
            if (i % 2 == 0) {
                return 'cstm-tr-3';
            }
            else {
                return 'cstm-tr-3 evn';
            }
        }
    };
    AoiComponent.prototype.exportPdf = function () {
        var head = [
            { title: '#', dataKey: "id" },
            { title: 'Area Name', dataKey: "Area" },
            { title: 'Number of Patients', dataKey: "Patients" },
            { title: 'Percentages', dataKey: "Percentages" },
        ];
        var csvData = [];
        for (var i = 0; i < this.allData.length; i++) {
            var ob;
            ob = {};
            ob.id = i + 1;
            ob.Area = this.allData[i].dataAoi[0].registration.location;
            ob.Patients = this.allData[i].dataAoi.length;
            ob.Percentages = this.allData[i].percentage + "%";
            csvData.push(ob);
        }
        csvData.push({
            id: 'Total Patients',
            Area: '',
            Patients: this.totalLocations,
            Percentages: 100 + "%",
        });
        var doc = new jsPDF('p', 'pt');
        doc.autoTable(head, csvData, {
            theme: 'grid',
            styles: {
                overflow: 'linebreak',
            },
            margin: 5,
            fontSize: 8,
            tableWidth: 'auto',
            showHeader: 'everyPage'
        });
        doc.save('AreaOfInfluence');
    };
    AoiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aoi',
            template: __webpack_require__("../../../../../src/app/header-two-layout/aoi/aoi.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/aoi/aoi.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */]])
    ], AoiComponent);
    return AoiComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/aoi/aoi.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AoiModule", function() { return AoiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aoi_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/aoi/aoi-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aoi_component__ = __webpack_require__("../../../../../src/app/header-two-layout/aoi/aoi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_google_places_autocomplete__ = __webpack_require__("../../../../ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_google_places_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_google_places_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AoiModule = /** @class */ (function () {
    function AoiModule() {
    }
    AoiModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__aoi_routing_module__["a" /* AoiRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_google_places_autocomplete__["GooglePlaceModule"],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY',
                    libraries: ["places"]
                })
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__aoi_component__["a" /* AoiComponent */]]
        })
    ], AoiModule);
    return AoiModule;
}());



/***/ })

});
//# sourceMappingURL=aoi.module.chunk.js.map