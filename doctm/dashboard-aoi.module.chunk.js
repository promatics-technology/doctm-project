webpackJsonp(["dashboard-aoi.module"],{

/***/ "../../../../../src/app/header-two-layout/dashboard-aoi/dashboard-aoi-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardAoiRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_aoi_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-aoi/dashboard-aoi.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_aoi_component__["a" /* DashboardAoiComponent */],
    }
];
var DashboardAoiRoutingModule = /** @class */ (function () {
    function DashboardAoiRoutingModule() {
    }
    DashboardAoiRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardAoiRoutingModule);
    return DashboardAoiRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-aoi/dashboard-aoi.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-aoi/dashboard-aoi.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"aoi-sec\">\n\n\t<ul class=\"aoi-filter\">\n\t\t<li>\n\t\t\t<select class=\"form-control txtfield\">\n\t\t\t\t<option> Today </option>\n\t\t\t\t<option> 7 Days </option>\n\t\t\t\t<option> 14 Days </option>\n\t\t\t\t<option> 1 Month </option>\n\t\t\t\t<option> 3 Months </option>\n\t\t\t\t<option> 6 Months </option>\n\t\t\t</select>\n\t\t</li>\n\t\t<li>\n\t\t\t<p> 30 </p>\n\t\t\t<div> Area </div>\n\t\t</li>\n\t\t<li>\n\t\t\t<p> 65 </p>\n\t\t\t<div> Patients </div>\n\t\t</li>\n\t\t<li>\n\t\t\t<p> 25 </p>\n\t\t\t<div> Top Area </div>\n\t\t\t<div> Sec-78, Noida </div>\n\t\t</li>\n\t\t<li>\n\t\t\t<p> 05 </p>\n\t\t\t<div> Out Station Patients </div>\n\t\t</li>\n\t</ul>\n\n\t<div class=\"aoi-map\">\n\t\t<agm-map \n\t\t  [latitude]=\"lat\"\n\t\t  [longitude]=\"lng\"\n\t\t  [zoom]=\"zoom\"\n\t\t  [disableDefaultUI]=\"false\"\n\t\t  [zoomControl]=\"false\">\n\n\t\t  \t<agm-marker \n\t\t      \t*ngFor=\"let m of markers; let i = index\"\n\t\t      \t(markerClick)=\"clickedMarker(m.label, i)\"\n\t\t      \t[latitude]=\"m.lat\"\n\t\t      \t[longitude]=\"m.lng\"\n\t\t      \t[label]=\"m.label\"\n\t\t      \t[markerDraggable]=\"m.draggable\"\n\t\t      \t(dragEnd)=\"markerDragEnd(m, $event)\">\n\t\t      \n\t\t\t    <agm-info-window>\n\t\t\t      \t<strong>InfoWindow content</strong>\n\t\t\t    </agm-info-window>\n\t\t    \n\t  \t\t</agm-marker>\n\t\t  \n\t\t  \t<agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\" \n\t\t      \t[radius]=\"100000\"\n\t\t      \t[fillColor]=\"'red'\"\n\t\t      \t[circleDraggable]=\"false\"\n\t\t      \t[editable]=\"false\">\n\t\t  \t</agm-circle>\n\n\t\t</agm-map>\n\n\t\t<div class=\"tabular-view\">\n\t\t\t<div class=\"col-md-offset-3 col-md-6 col-sm-offset-1 col-sm-10 col-xs-12\">\n\t\t\t\t<div class=\"tabular-table\" *ngIf=\"tableview==true\">\n\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t<table class=\"table table-striped table-bordered\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th> # </th>\n\t\t\t\t\t\t\t\t\t<th> Area Name </th>\n\t\t\t\t\t\t\t\t\t<th> Number of patients </th>\n\t\t\t\t\t\t\t\t\t<th> % of total patients </th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td> 1. </td>\n\t\t\t\t\t\t\t\t\t<td> Sector 51, Noida </td>\n\t\t\t\t\t\t\t\t\t<td> 32 </td>\n\t\t\t\t\t\t\t\t\t<td> 26.87 </td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td> 2. </td>\n\t\t\t\t\t\t\t\t\t<td> Sector 51, Noida </td>\n\t\t\t\t\t\t\t\t\t<td> 23 </td>\n\t\t\t\t\t\t\t\t\t<td> 19.3 </td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td> 3. </td>\n\t\t\t\t\t\t\t\t\t<td> Okhla </td>\n\t\t\t\t\t\t\t\t\t<td> 14 </td>\n\t\t\t\t\t\t\t\t\t<td> 12.6 </td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td> 4. </td>\n\t\t\t\t\t\t\t\t\t<td> Shaheen bagh </td>\n\t\t\t\t\t\t\t\t\t<td> 15 </td>\n\t\t\t\t\t\t\t\t\t<td> 11.7 </td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td> 5. </td>\n\t\t\t\t\t\t\t\t\t<td> Sector 19, Dwarka </td>\n\t\t\t\t\t\t\t\t\t<td> 13 </td>\n\t\t\t\t\t\t\t\t\t<td> 10.1 </td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td> 6. </td>\n\t\t\t\t\t\t\t\t\t<td> Lajpat Nagar </td>\n\t\t\t\t\t\t\t\t\t<td> 12 </td>\n\t\t\t\t\t\t\t\t\t<td> 10.1 </td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td> 7. </td>\n\t\t\t\t\t\t\t\t\t<td> Sector 23, Dwarka </td>\n\t\t\t\t\t\t\t\t\t<td> 10 </td>\n\t\t\t\t\t\t\t\t\t<td> 8.4 </td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>  </td>\n\t\t\t\t\t\t\t\t\t<td> Total Patients </td>\n\t\t\t\t\t\t\t\t\t<td> 119 </td>\n\t\t\t\t\t\t\t\t\t<td> 110 </td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<div class=\"tabular-btn\">\n\t\t\t\t\t<button class=\"btn btn-custom\" *ngIf=\"tableview==false\" (click)=\"tableView()\"> Show Tabluar View </button>\n\t\t\t\t\t<button class=\"btn btn-custom\" *ngIf=\"tableview==true\" (click)=\"tableView()\"> Hide Tabluar View </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-aoi/dashboard-aoi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardAoiComponent; });
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

var DashboardAoiComponent = /** @class */ (function () {
    function DashboardAoiComponent() {
        // google maps zoom level
        this.zoom = 8;
        // initial center position for the map
        this.lat = 51.673858;
        this.lng = 7.815982;
        this.markers = [
            {
                lat: 51.673858,
                lng: 7.815982,
                label: 'A',
                draggable: false
            },
            {
                lat: 51.373858,
                lng: 7.215982,
                label: 'B',
                draggable: false
            },
            {
                lat: 51.723858,
                lng: 7.895982,
                label: 'C',
                draggable: false
            }
        ];
    }
    DashboardAoiComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    /*mapClicked($event: MouseEvent) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    }*/
    DashboardAoiComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    DashboardAoiComponent.prototype.ngOnInit = function () {
        this.tableview = false;
    };
    DashboardAoiComponent.prototype.tableView = function () {
        if (this.tableview == true) {
            this.tableview = false;
        }
        else {
            this.tableview = true;
        }
    };
    DashboardAoiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-aoi',
            template: __webpack_require__("../../../../../src/app/header-two-layout/dashboard-aoi/dashboard-aoi.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/dashboard-aoi/dashboard-aoi.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardAoiComponent);
    return DashboardAoiComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/dashboard-aoi/dashboard-aoi.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAoiModule", function() { return DashboardAoiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_aoi_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-aoi/dashboard-aoi-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_aoi_component__ = __webpack_require__("../../../../../src/app/header-two-layout/dashboard-aoi/dashboard-aoi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardAoiModule = /** @class */ (function () {
    function DashboardAoiModule() {
    }
    DashboardAoiModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__dashboard_aoi_routing_module__["a" /* DashboardAoiRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    // please get your own API key here:
                    // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
                    apiKey: 'AIzaSyAmGR3wSSU5xkT2B5UWN4SKBQKDKn5OBVY'
                })
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__dashboard_aoi_component__["a" /* DashboardAoiComponent */]]
        })
    ], DashboardAoiModule);
    return DashboardAoiModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard-aoi.module.chunk.js.map