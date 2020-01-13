webpackJsonp(["expirybook.module"],{

/***/ "../../../../../src/app/header-five-layout/expirybook/expirybook-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpirybookRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expirybook_component__ = __webpack_require__("../../../../../src/app/header-five-layout/expirybook/expirybook.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__expirybook_component__["a" /* ExpirybookComponent */]
    }
];
var ExpirybookRoutingModule = /** @class */ (function () {
    function ExpirybookRoutingModule() {
    }
    ExpirybookRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ExpirybookRoutingModule);
    return ExpirybookRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/expirybook/expirybook.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stock-tab{\r\n\tfloat: left;\r\n\twidth:100%;\r\n}\r\n.cstm-row button{\r\n\tpadding:25px 30px; \r\n\tmargin-top: 18px;\r\n}\r\n.cstm-hdr{\r\n\tmargin-top: 15px;\r\n}\r\n.tbl-head{\r\n\tmargin-bottom:2px;\r\n\tmargin-top:20px;\r\n}\r\n.tbl-head tr {\r\n\tborder-top:2px solid #00B0F0;\r\n\tborder-left:2px solid #00B0F0;\r\n\tborder-right:2px solid #00B0F0;\r\n}\r\n.tbl-head tr th{\r\n\tbackground-color:#DCDCDC;\r\n\tborder-color:#00B0F0;\r\n}\r\n.table-bordered > tbody > tr > td{\r\n    border: 1px solid #00B0F0;\r\n}\r\n.tbl-cntrol{\r\n\tmin-height:100px;\r\n\tmax-height: 380px;\r\n\toverflow-x: hidden;\r\n\toverflow-y: scroll;\r\n}\r\n.tbl-cntrol .tbl-data{\r\n\tmin-width: 880px;\r\n}\r\n.btn-wrap{\r\n\tmargin-top: 20px;\r\n    margin-bottom: 15px;\r\n}\r\n.btn-grin{\r\n\tbackground-color:rgb(161, 210, 83);\r\n}\r\n.btn-grin-2{\r\n\tpadding:20px 30px; \r\n}\r\n.btn-wrap button{\r\n\tmargin-right: 10px;\r\n}\r\n.btn-red-1{\r\n\tbackground-color: #FF0000;\r\n}\r\n.btn-ornge{\r\n\tbackground-color: #E36C09;\r\n}\r\n.vrt-mdl{\r\n\tvertical-align: middle;\r\n}\r\n.modal-dialog{\r\n\tdisplay: table;\r\n}\r\n.tbl-data-modal{\r\n\twidth: 866px!important;\r\n}\r\n.cstm-drpdown-cnsulted-doc {\r\n    margin: 20px 0;\r\n    position: relative;\r\n}\r\n.smrt-ass-dropdown {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n.cstm-drpdown-cnsulted-doc select {\r\n    font-size: 25px;\r\n    color: #fff;\r\n    width: 100%;\r\n    position: relative;\r\n    cursor: pointer;\r\n    padding: 15px;\r\n    background-color: #76923C;\r\n    border-radius: 10px;\r\n    border: none;\r\n    margin-top: 20px;\r\n}\r\n.cstm-drpdown-cnsulted-doc option {\r\n    border-bottom: 1px #ccc dashed;\r\n    padding: 8px 7px;\r\n    -webkit-transition: .3s all;\r\n    transition: .3s all;\r\n    display: block;\r\n    color: #00b0f0;\r\n    border-radius: 0;\r\n    background-color: #fff;\r\n    font-size: 20px;\r\n}\r\n.cstm-caret-big {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 42px;\r\n    background-color:#76923C;\r\n    z-index: 1;\r\n    right: 5px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 17px dashed;\r\n    border-right: 14px solid transparent;\r\n    border-left: 14px solid transparent;\r\n}\r\n.btn-b{\r\n\ttext-transform: unset;\r\n}\r\n.new-thd th{\r\n    color:#fff;\r\n    background-color: #000;\r\n    border:1px solid #fff;\r\n}\r\n.new-tbdy td{\r\n    background-color: #dae5f1!important;\r\n    border:1px solid #fff!important;\r\n}\r\n.new-tbdy tr:hover{\r\n    background-color:#b8d9fd!important;    \r\n}\r\n.new-tbdy tr:hover td{\r\n    background-color:#b8d9fd!important;\r\n}\r\nth.selected{\r\n    background-color: #00b0f0!important;\r\n}\r\n@media only screen and (min-width:992px) {\r\n    .cstm-footer{\r\n        position: fixed;\r\n        bottom: 0;\r\n    }\r\n}\r\n.cstm-put input{\r\n    height: 56px;\r\n    margin-top:40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-five-layout/expirybook/expirybook.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"cstm-hdr\">\n\t<div class=\"\">\n\t\t<div  class=\"col-lg-2\">\n\t\t\t<div  class=\"dashboard-header-logo\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\">\n\t\t\t\t<img class=\"img-responsive\" src=\"./assets/imgs/logoDoctm.png\" routerlink=\"/header-five-layout/dashboard-pharmacy\">\n\t\t\t</div>\n\t\t\t<div >\n\t\t\t\t<div class=\"dshbrd-btn\">\n\t\t\t\t\t<button  class=\"btn btn-custom\" routerLink=\"/header-five-layout/dashboard-pharmacy\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\"> Dashboard </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-5\">\n\t        <div class=\"\">\n\t           <div class=\"cstm-drpdown-cnsulted-doc\">\n\t                <span  class=\"caret cstm-caret-big\"></span>\n\t                <select [(ngModel)]=\"optionSelected\" (change)=\"selectOne($event)\">\n\t                    <option selected=\"\" value=\"0\">PRODUCT EXPIRED</option>\n\t                    <option value=\"1\" >PRODUCT EXPIRING IN 3 MONTHS  </option>\n\t                    <option value=\"2\">PRODUCT EXPIRING IN 6 MONTHS</option>                   \n\t                </select>\n\t            </div>\n\t        </div>\n\t    </div>\n\t\t<div class=\"col-lg-3\">\n\t        <div class=\"\">\n\t           <div class=\"cstm-put\">\n\t           \t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Search by product\" (input)=\"search()\" [(ngModel)]=\"searchInput\" >\n\t           </div>\n\t        </div>\n\t    </div>\n\t</div>\n</div>\n<div class=\"stock-tab\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"tbl-cntrol\">\n\t\t\t<table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\" *ngIf=\"sortedData.length>0\" >\n\t\t\t    <thead class=\"new-thd\">\n\t\t\t   \t\t<tr>\n\t\t\t\t        <th mat-sort-header=\"product\" width=\"20%\" class=\"{{getTableHeaderClass(1)}} text-center\" (click)=\"setTableHeaderClass(1)\"><h4 style=\"width: 100%; text-align: center;\">Product</h4></th>\n\t\t\t\t        <th mat-sort-header=\"type\" width=\"10%\" class=\"{{getTableHeaderClass(2)}} text-center\" (click)=\"setTableHeaderClass(2)\"><h4 style=\"width: 100%; text-align: center;\">Type</h4></th>\n\t\t\t\t        <th mat-sort-header=\"packing\" width=\"10%\" class=\"{{getTableHeaderClass(3)}} text-center\" (click)=\"setTableHeaderClass(3)\"><h4 style=\"width: 100%; text-align: center;\">Packing</h4></th>\n\t\t\t\t        <th mat-sort-header=\"expiry\" width=\"10%\" class=\"{{getTableHeaderClass(8)}} text-center\" (click)=\"setTableHeaderClass(8)\"><h4 style=\"width: 100%; text-align: center;\">Expiry</h4></th>\n\t\t\t\t        <th mat-sort-header=\"batch\" width=\"10%\" class=\"{{getTableHeaderClass(4)}} text-center\" (click)=\"setTableHeaderClass(4)\"><h4 style=\"width: 100%; text-align: center;\">Batch</h4></th>\n\t\t\t\t        <th mat-sort-header=\"stock\" width=\"10%\" class=\"{{getTableHeaderClass(5)}} text-center\" (click)=\"setTableHeaderClass(5)\"><h4 style=\"width: 100%; text-align: center;\">Stock</h4></th>\n\t\t\t\t        <th mat-sort-header=\"p_rate\" width=\"10%\" class=\"{{getTableHeaderClass(6)}} text-center\" (click)=\"setTableHeaderClass(6)\"><h4 style=\"width: 100%; text-align: center;\">P.Rate/P</h4></th>\n\t\t\t\t        <th mat-sort-header=\"value\" width=\"10%\" class=\"{{getTableHeaderClass(7)}} text-center\" (click)=\"setTableHeaderClass(7)\"><h4 style=\"width: 100%; text-align: center;\">P.Value</h4></th>\n\t\t\t\t        <th width=\"10%\" *ngIf=\"optionSelected==0\"><h4 style=\"width: 100%; text-align: center;\">Action</h4></th>\n\t\t\t    \t</tr>\n\t\t\t    </thead>\n\t\t\t    <tbody class=\"new-tbdy\">\n\t\t\t\t\t<tr *ngFor=\"let list of sortedData\">\n\t\t\t\t\t\t<td width=\"20%\" class=\"text-center\">{{list.product}}</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{list.type}}</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{list.pack_units}} x {{list.pack_quantity}}</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{list.month}}/{{list.year}}</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{list.batch}}</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{list.newPacking}} <b>: </b>{{list.newPackingReminder}}</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{getData(list.cost)}}</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{list.present_prate}}</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\" *ngIf=\"optionSelected==0\"><i class=\"fa fa-trash dlt-icon\" (click)=\"DeleteExpiredStock(list)\"></i></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\t\t    \n\t\t\t</table>\t\t\t\n\t    \t<div class=\"col-lg-12\" *ngIf=\"sortedData.length<1\">\n             \t<h3 class=\"text-center\">No product found ...</h3>\n            </div> \n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-8 col-lg-offset-2 col-md-12  col-sm-12 col-xs-12 cstm-footer\">\n\t\t<div class=\"btn-wrap row\">\n\t\t\t<div class=\"col-lg-5 col-md-5 col-sm-4 col-xs-12 text-center\">\n\t\t\t\t<button class=\"btn btn-custom btn-b\"  *ngIf=\"optionSelected==0\">\n\t\t\t\t\t<div>Expired products valuation: {{expireValuation}}</div>\n\t\t\t\t</button>\n\t\t\t\t<button class=\"btn btn-custom btn-b\"  *ngIf=\"optionSelected==1\">\n\t\t\t\t\t<div>Expiring products valuation: {{expireValuationAfterThree}}</div>\n\t\t\t\t</button>\n\t\t\t\t<button class=\"btn btn-custom btn-b\"  *ngIf=\"optionSelected==2\">\n\t\t\t\t\t<div>Expiring products valuation: {{expireValuationAfterSix}}</div>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center\">\n\t\t\t\t<button class=\"btn btn-custom btn-b\"  *ngIf=\"optionSelected==0\">\n\t\t\t\t\t<div>Total Product Items: {{totalProducts.length}}</div>\n\t\t\t\t</button>\n\t\t\t\t<button class=\"btn btn-custom btn-b\"  *ngIf=\"optionSelected==1\">\n\t\t\t\t\t<div>Total Product Items: {{totalProducts.length}}</div>\n\t\t\t\t</button>\n\t\t\t\t<button class=\"btn btn-custom btn-b\"  *ngIf=\"optionSelected==2\">\n\t\t\t\t\t<div>Total Product Items: {{totalProducts.length}}</div>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-12 text-center \">\n\t\t\t\t<button class=\"btn btn-custom btn-grin\" *ngIf=\"optionSelected==0\" (click)=\"exportPdf()\">\n\t\t\t\t\t<div>Export</div>\n\t\t\t\t</button>\n\t\t\t\t<button class=\"btn btn-custom btn-grin\" *ngIf=\"optionSelected==1\" (click)=\"exportPdf()\">\n\t\t\t\t\t<div>Export</div>\n\t\t\t\t</button>\n\t\t\t\t<button class=\"btn btn-custom btn-grin\" *ngIf=\"optionSelected==2\" (click)=\"exportPdf()\">\n\t\t\t\t\t<div>Export</div>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header-five-layout/expirybook/expirybook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpirybookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmation_popup_confirmation_dialog_confirmation_dialog_component__ = __webpack_require__("../../../../../src/app/confirmation-popup/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExpirybookComponent = /** @class */ (function () {
    function ExpirybookComponent(toastr, userService, dialog) {
        this.toastr = toastr;
        this.userService = userService;
        this.dialog = dialog;
        this.expiryBookArray = [];
    }
    ExpirybookComponent.prototype.ngOnInit = function () {
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails']);
        this.optionSelected = 0;
        this.expireValuation = 0;
        this.expireValuationAfterThree = 0;
        this.expireValuationAfterSix = 0;
        this.headerClicked = 0;
        this.expiryBookArray = [];
        this.totalProducts = [];
        this.sortedData = [];
        this.getList();
    };
    ExpirybookComponent.prototype.getList = function () {
        var _this = this;
        this.expiryBookArray = [];
        this.userService.ExpiryBook(this.pharmacyData.dataSmartPharmacy._id).subscribe(function (result) {
            console.log(result);
            if (result.response) {
                _this.alreadyExpired = result.data;
                _this.afterThreeMonths = result.expiryAfterThree;
                _this.afterSixMonths = result.expiryAfterSix;
                for (var i = 0; i < _this.alreadyExpired.length; i++) {
                    _this.alreadyExpired[i].p_value = (_this.alreadyExpired[i].mrp * (_this.alreadyExpired[i].total_stock - _this.alreadyExpired[i].sold_stock)) / (_this.alreadyExpired[i].pack_units * _this.alreadyExpired[i].pack_quantity);
                    _this.alreadyExpired[i].stock = _this.alreadyExpired[i].total_stock - _this.alreadyExpired[i].sold_stock;
                    _this.alreadyExpired[i].newPacking = Math.trunc(_this.alreadyExpired[i].stock / (_this.alreadyExpired[i].pack_units * _this.alreadyExpired[i].pack_quantity));
                    _this.alreadyExpired[i].newPackingReminder = _this.alreadyExpired[i].stock % (_this.alreadyExpired[i].pack_units * _this.alreadyExpired[i].pack_quantity);
                    _this.alreadyExpired[i].present_prate = Math.ceil((_this.alreadyExpired[i].amount / _this.alreadyExpired[i].total_stock) * _this.alreadyExpired[i].stock);
                    _this.alreadyExpired[i].profit_percent = Math.ceil(((_this.alreadyExpired[i].mrp - _this.alreadyExpired[i].p_rate) / _this.alreadyExpired[i].p_rate) * 100);
                    _this.alreadyExpired[i].present_mrate = Math.ceil((_this.alreadyExpired[i].mrp * _this.alreadyExpired[i].stock) / (_this.alreadyExpired[i].pack_units * _this.alreadyExpired[i].pack_quantity));
                    if (_this.alreadyExpired[i].stock == 0) {
                        _this.alreadyExpired[i].cost = 0;
                    }
                    else {
                        _this.alreadyExpired[i].cost = (_this.alreadyExpired[i].present_prate / _this.alreadyExpired[i].stock) * (_this.alreadyExpired[i].pack_units * _this.alreadyExpired[i].pack_quantity);
                    }
                    // if(this.alreadyExpired[i].cost %1 != 0){
                    // this.alreadyExpired[i].cost = this.alreadyExpired[i].cost.toFixed(2)
                    // }
                    _this.expireValuation += Math.ceil(_this.alreadyExpired[i].present_prate);
                    var boolean = false;
                    for (var j = 0; j < _this.totalProducts.length; j++) {
                        if (_this.alreadyExpired[i].type != _this.totalProducts[j].type && _this.alreadyExpired[i].product != _this.totalProducts[j].product) {
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        _this.totalProducts.push(_this.alreadyExpired[i]);
                    }
                }
                for (var i = 0; i < _this.afterThreeMonths.length; i++) {
                    _this.afterThreeMonths[i].p_value = (_this.afterThreeMonths[i].mrp * (_this.afterThreeMonths[i].total_stock - _this.afterThreeMonths[i].sold_stock)) / (_this.afterThreeMonths[i].pack_units * _this.afterThreeMonths[i].pack_quantity);
                    _this.afterThreeMonths[i].stock = _this.afterThreeMonths[i].total_stock - _this.afterThreeMonths[i].sold_stock;
                    _this.afterThreeMonths[i].newPacking = Math.trunc(_this.afterThreeMonths[i].stock / (_this.afterThreeMonths[i].pack_units * _this.afterThreeMonths[i].pack_quantity));
                    _this.afterThreeMonths[i].newPackingReminder = _this.afterThreeMonths[i].stock % (_this.afterThreeMonths[i].pack_units * _this.afterThreeMonths[i].pack_quantity);
                    _this.afterThreeMonths[i].present_prate = Math.ceil((_this.afterThreeMonths[i].amount / _this.afterThreeMonths[i].total_stock) * _this.afterThreeMonths[i].stock);
                    _this.afterThreeMonths[i].profit_percent = Math.ceil(((_this.afterThreeMonths[i].mrp - _this.afterThreeMonths[i].p_rate) / _this.afterThreeMonths[i].p_rate) * 100);
                    _this.afterThreeMonths[i].present_mrate = Math.ceil((_this.afterThreeMonths[i].mrp * _this.afterThreeMonths[i].stock) / (_this.afterThreeMonths[i].pack_units * _this.afterThreeMonths[i].pack_quantity));
                    if (_this.afterThreeMonths[i].stock == 0) {
                        _this.afterThreeMonths[i].cost = 0;
                    }
                    else {
                        _this.afterThreeMonths[i].cost = (_this.afterThreeMonths[i].present_prate / _this.afterThreeMonths[i].stock) * (_this.afterThreeMonths[i].pack_units * _this.afterThreeMonths[i].pack_quantity);
                    }
                    // if(this.afterThreeMonths[i].cost %1 != 0){
                    // this.afterThreeMonths[i].cost = this.afterThreeMonths[i].cost.toFixed(2)
                    // }
                    _this.expireValuationAfterThree += Math.ceil(_this.afterThreeMonths[i].present_prate);
                }
                for (var i = 0; i < _this.afterSixMonths.length; i++) {
                    _this.afterSixMonths[i].p_value = (_this.afterSixMonths[i].mrp * (_this.afterSixMonths[i].total_stock - _this.afterSixMonths[i].sold_stock)) / (_this.afterSixMonths[i].pack_units * _this.afterSixMonths[i].pack_quantity);
                    _this.afterSixMonths[i].stock = _this.afterSixMonths[i].total_stock - _this.afterSixMonths[i].sold_stock;
                    _this.afterSixMonths[i].newPacking = Math.trunc(_this.afterSixMonths[i].stock / (_this.afterSixMonths[i].pack_units * _this.afterSixMonths[i].pack_quantity));
                    _this.afterSixMonths[i].newPackingReminder = _this.afterSixMonths[i].stock % (_this.afterSixMonths[i].pack_units * _this.afterSixMonths[i].pack_quantity);
                    _this.afterSixMonths[i].present_prate = Math.ceil((_this.afterSixMonths[i].amount / _this.afterSixMonths[i].total_stock) * _this.afterSixMonths[i].stock);
                    _this.afterSixMonths[i].profit_percent = Math.ceil(((_this.afterSixMonths[i].mrp - _this.afterSixMonths[i].p_rate) / _this.afterSixMonths[i].p_rate) * 100);
                    _this.afterSixMonths[i].present_mrate = Math.ceil((_this.afterSixMonths[i].mrp * _this.afterSixMonths[i].stock) / (_this.afterSixMonths[i].pack_units * _this.afterSixMonths[i].pack_quantity));
                    if (_this.afterSixMonths[i].stock == 0) {
                        _this.afterSixMonths[i].cost = 0;
                    }
                    else {
                        _this.afterSixMonths[i].cost = (_this.afterSixMonths[i].present_prate / _this.afterSixMonths[i].stock) * (_this.afterSixMonths[i].pack_units * _this.afterSixMonths[i].pack_quantity);
                    }
                    // if(this.afterSixMonths[i].cost %1 != 0){
                    // this.afterSixMonths[i].cost = this.afterSixMonths[i].cost.toFixed(2)
                    // }
                    _this.expireValuationAfterSix += Math.ceil(_this.afterSixMonths[i].present_prate);
                }
                _this.sortedData = _this.alreadyExpired.slice();
                _this.alreadyExpiredBackup = _this.alreadyExpired;
                _this.afterThreeMonthsBackup = _this.afterThreeMonths;
                _this.afterSixMonthsBackup = _this.afterSixMonths;
                // 
                // this.sortedData=this.afterSixMonths.slice()
            }
            else {
                _this.toastr.error(result.message, 'Error');
            }
        });
    };
    ExpirybookComponent.prototype.getTableHeaderClass = function (id) {
        if (this.headerClicked == id) {
            return 'selected';
        }
        else {
            return '';
        }
    };
    ExpirybookComponent.prototype.setTableHeaderClass = function (id) {
        this.headerClicked = id;
    };
    ExpirybookComponent.prototype.sortData = function (sort) {
        var data = this.sortedData.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'product': return compare(a.product, b.product, isAsc);
                case 'type': return compare(a.type, b.type, isAsc);
                case 'expiry': return compare(a.expiry, b.expiry, isAsc);
                case 'batch': return compare(a.batch, b.batch, isAsc);
                case 'stock': return compare(a.stock, b.stock, isAsc);
                case 'p_rate': return compare(a.cost, b.cost, isAsc);
                case 'value': return compare(a.present_prate, b.present_prate, isAsc);
                case 'packing': return compare(a.pack_units * a.pack_quantity, b.pack_units * b.pack_quantity, isAsc);
                default: return 0;
            }
        });
    };
    ExpirybookComponent.prototype.selectOne = function (event) {
        this.totalProducts = [];
        this.sortedData = [];
        if (this.optionSelected == 0) {
            this.sortedData = this.alreadyExpired;
            this.sortedData = this.alreadyExpired.slice();
            this.headerClicked = 0;
            var boolean = false;
            for (var i = 0; i < this.alreadyExpired.length; i++) {
                for (var j = 0; j < this.totalProducts.length; j++) {
                    if (this.alreadyExpired[i].type == this.totalProducts[j].type && this.alreadyExpired[i].product == this.totalProducts[j].product) {
                        boolean = true;
                        break;
                    }
                }
                if (boolean == false) {
                    this.totalProducts.push(this.alreadyExpired[i]);
                }
            }
        }
        else if (this.optionSelected == 1) {
            this.sortedData = this.afterThreeMonths;
            this.sortedData = this.afterThreeMonths.slice();
            this.headerClicked = 0;
            var boolean = false;
            for (var i = 0; i < this.afterThreeMonths.length; i++) {
                for (var j = 0; j < this.totalProducts.length; j++) {
                    if (this.afterThreeMonths[i].type == this.totalProducts[j].type && this.afterThreeMonths[i].product == this.totalProducts[j].product) {
                        boolean = true;
                        break;
                    }
                }
                if (boolean == false) {
                    this.totalProducts.push(this.afterThreeMonths[i]);
                }
            }
        }
        else if (this.optionSelected == 2) {
            this.sortedData = this.afterSixMonths;
            this.sortedData = this.afterSixMonths.slice();
            this.headerClicked = 0;
            var boolean = false;
            for (var i = 0; i < this.afterSixMonths.length; i++) {
                for (var j = 0; j < this.totalProducts.length; j++) {
                    if (this.afterSixMonths[i].type == this.totalProducts[j].type && this.afterSixMonths[i].product == this.totalProducts[j].product) {
                        boolean = true;
                        break;
                    }
                }
                if (boolean == false) {
                    this.totalProducts.push(this.afterSixMonths[i]);
                }
            }
        }
    };
    ExpirybookComponent.prototype.exportPdf = function () {
        var head = [
            { title: '#', dataKey: "id" },
            { title: 'Type', dataKey: "type" },
            { title: 'Product Name', dataKey: "product" },
            { title: 'Packing', dataKey: "packing" },
            { title: 'Expiry', dataKey: "expiry" },
            { title: 'Batch Number', dataKey: "batch" },
            { title: 'Stock', dataKey: "value" },
            { title: 'P. Rate', dataKey: "stock" },
            { title: 'P. Value', dataKey: "rate" }
        ];
        var csvData = [];
        var totalDuration;
        var dates = [];
        if (this.optionSelected == 0) {
            for (var i = 0; i < this.alreadyExpired.length; i++) {
                var ob;
                ob = {};
                ob.id = i + 1;
                //var date = this.stockValuation[i].createdAt.split('T')
                //ob.updateAt = date[0] + " " +date[1].substr(0,5)
                ob.type = this.alreadyExpired[i].type;
                ob.product = this.alreadyExpired[i].product;
                ob.packing = this.alreadyExpired[i].pack_units + 'x' + this.alreadyExpired[i].pack_quantity;
                ob.expiry = this.alreadyExpired[i].month + "/" + this.alreadyExpired[i].year;
                ob.batch = this.alreadyExpired[i].batch;
                ob.rate = this.getData(this.alreadyExpired[i].present_prate);
                ob.value = this.alreadyExpired[i].newPacking + ":" + this.alreadyExpired[i].newPackingReminder;
                ob.stock = this.getData(this.alreadyExpired[i].cost);
                csvData.push(ob);
            }
        }
        else if (this.optionSelected == 1) {
            for (var i = 0; i < this.afterThreeMonths.length; i++) {
                var ob;
                ob = {};
                ob.id = i + 1;
                //var date = this.stockValuation[i].createdAt.split('T')
                //ob.updateAt = date[0] + " " +date[1].substr(0,5)
                ob.type = this.afterThreeMonths[i].type;
                ob.product = this.afterThreeMonths[i].product;
                ob.packing = this.afterThreeMonths[i].pack_units + 'x' + this.afterThreeMonths[i].pack_quantity;
                ob.expiry = this.afterThreeMonths[i].month + "/" + this.afterThreeMonths[i].year;
                ob.batch = this.afterThreeMonths[i].batch;
                ob.rate = this.getData(this.afterThreeMonths[i].present_prate);
                ob.value = this.afterThreeMonths[i].newPacking + ":" + this.afterThreeMonths[i].newPackingReminder;
                ob.stock = this.getData(this.afterThreeMonths[i].cost);
                csvData.push(ob);
            }
        }
        else if (this.optionSelected == 2) {
            for (var i = 0; i < this.afterSixMonths.length; i++) {
                var ob;
                ob = {};
                ob.id = i + 1;
                //var date = this.stockValuation[i].createdAt.split('T')
                //ob.updateAt = date[0] + " " +date[1].substr(0,5)
                ob.type = this.afterSixMonths[i].type;
                ob.product = this.afterSixMonths[i].product;
                ob.packing = this.afterSixMonths[i].pack_units + 'x' + this.afterSixMonths[i].pack_quantity;
                ob.expiry = this.afterSixMonths[i].month + "/" + this.afterSixMonths[i].year;
                ob.batch = this.afterSixMonths[i].batch;
                ob.rate = this.getData(this.afterSixMonths[i].present_prate);
                ob.value = this.afterSixMonths[i].newPacking + ":" + this.afterSixMonths[i].newPackingReminder;
                ob.stock = this.getData(this.afterSixMonths[i].cost);
                csvData.push(ob);
            }
        }
        //      csvData.push({
        //      	id: "Total",
        //      	createdAt: "",
        // bill_no: "",
        // party_name: "",
        // amount: this.salesValue
        //      })
        var date = new Date().toJSON().toString().substr(0, 10);
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
        if (this.optionSelected == 0) {
            doc.save('Already-ExpiryBook' + "(" + date + ")");
        }
        if (this.optionSelected == 1) {
            doc.save('After-3-ExpiryBook' + "(" + date + ")");
        }
        if (this.optionSelected == 2) {
            doc.save('After-ExpiryBook' + "(" + date + ")");
        }
    };
    ExpirybookComponent.prototype.search = function () {
        var _this = this;
        var dataBackup = [];
        if (this.optionSelected == 0) {
            this.searchInput = this.searchInput.toLowerCase();
            if (this.searchInput && this.searchInput.trim() != '') {
                this.alreadyExpired = this.alreadyExpiredBackup.filter(function (item) {
                    var b = item.product.toLowerCase();
                    return (b.indexOf(_this.searchInput) > -1);
                });
            }
            if (this.searchInput == '') {
                this.alreadyExpired = this.alreadyExpiredBackup;
            }
            this.sortedData = this.alreadyExpired.slice();
        }
        else if (this.optionSelected == 1) {
            this.searchInput = this.searchInput.toLowerCase();
            if (this.searchInput && this.searchInput.trim() != '') {
                this.afterThreeMonths = this.afterThreeMonthsBackup.filter(function (item) {
                    var b = item.product.toLowerCase();
                    return (b.indexOf(_this.searchInput) > -1);
                });
            }
            if (this.searchInput == '') {
                this.afterThreeMonths = this.afterThreeMonthsBackup;
            }
            this.sortedData = this.afterThreeMonths.slice();
        }
        else if (this.optionSelected == 2) {
            this.searchInput = this.searchInput.toLowerCase();
            if (this.searchInput && this.searchInput.trim() != '') {
                this.afterSixMonths = this.afterSixMonthsBackup.filter(function (item) {
                    var b = item.product.toLowerCase();
                    return (b.indexOf(_this.searchInput) > -1);
                });
            }
            if (this.searchInput == '') {
                this.afterSixMonths = this.afterSixMonthsBackup;
            }
            this.sortedData = this.afterSixMonths.slice();
        }
    };
    ExpirybookComponent.prototype.DeleteExpiredStock = function (activity) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__confirmation_popup_confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */], {
            // width: '250px',
            data: activity.product
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result == "yes") {
                _this.loading = true;
                _this.userService.DeleteExpiredStock(activity).subscribe(function (data) {
                    console.log(data);
                    _this.loading = false;
                    if (data.response == true) {
                        _this.toastr.success(data.message, "Success");
                        _this.ngOnInit();
                    }
                    else {
                        _this.toastr.error(data.message, "Error");
                    }
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                console.log("error or No Thanks button clicked");
            }
        });
    };
    ExpirybookComponent.prototype.getData = function (data) {
        if (data % 1 != 0) {
            return data.toFixed(2);
        }
        else {
            return data;
        }
    };
    ExpirybookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-expirybook',
            template: __webpack_require__("../../../../../src/app/header-five-layout/expirybook/expirybook.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-five-layout/expirybook/expirybook.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */]])
    ], ExpirybookComponent);
    return ExpirybookComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/header-five-layout/expirybook/expirybook.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpirybookModule", function() { return ExpirybookModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expirybook_routing_module__ = __webpack_require__("../../../../../src/app/header-five-layout/expirybook/expirybook-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__expirybook_component__ = __webpack_require__("../../../../../src/app/header-five-layout/expirybook/expirybook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ExpirybookModule = /** @class */ (function () {
    function ExpirybookModule() {
    }
    ExpirybookModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__expirybook_routing_module__["a" /* ExpirybookRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["c" /* MatDialogModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__expirybook_component__["a" /* ExpirybookComponent */]]
        })
    ], ExpirybookModule);
    return ExpirybookModule;
}());



/***/ })

});
//# sourceMappingURL=expirybook.module.chunk.js.map