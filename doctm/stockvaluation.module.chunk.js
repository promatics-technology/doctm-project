webpackJsonp(["stockvaluation.module"],{

/***/ "../../../../../src/app/header-five-layout/stockvaluation/stockvaluation-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockvaluationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stockvaluation_component__ = __webpack_require__("../../../../../src/app/header-five-layout/stockvaluation/stockvaluation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__stockvaluation_component__["a" /* StockvaluationComponent */]
    }
];
var StockvaluationRoutingModule = /** @class */ (function () {
    function StockvaluationRoutingModule() {
    }
    StockvaluationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], StockvaluationRoutingModule);
    return StockvaluationRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/stockvaluation/stockvaluation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cstm-row{\r\n\tmargin-top: 15px;\r\n}\r\n.cstm-row button{\r\n\tpadding:3px 30px;\r\n}\r\n.cstm-hdr{\r\n\tmargin-top: 15px;\r\n}\r\n.tbl-head{\r\n\tmargin-bottom:2px;\r\n\tmargin-top:20px;\r\n}\r\n.tbl-head tr {\r\n\tborder-top:2px solid #00B0F0;\r\n\tborder-left:2px solid #00B0F0;\r\n\tborder-right:2px solid #00B0F0;\r\n}\r\n.tbl-head tr th{\r\n\tbackground-color:#DCDCDC;\r\n\tborder-color:#00B0F0;\r\n}\r\n.table-bordered > tbody > tr > td{\r\n    border: 1px solid #00B0F0;\r\n}\r\n.tbl-cntrol{\r\n\tmin-height:100px;\r\n\tmax-height: 420px;\r\n\toverflow-x: hidden;\r\n\toverflow-y: scroll;\r\n}\r\n.tbl-cntrol .tbl-data{\r\n\tmax-width: 100%;\r\n    width: 1110px;\r\n}\r\n.btn-wrap{\r\n\tmargin-top: 20px;\r\n\theight: 53px;\r\n}\r\n.btn-grin{\r\n\tbackground-color:rgb(161, 210, 83);\r\n}\r\n.cstm-txt input{\r\n\tbackground-color:#76923C;\r\n\tcolor:#fff;\r\n}\r\n.cstm-txt input::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color:#fff;\r\n}\r\n.cstm-txt input::-moz-placeholder { /* Firefox 19+ */\r\n  color:#fff;\r\n}\r\n.cstm-txt input:-ms-input-placeholder { /* IE 10+ */\r\n  color:#fff;\r\n}\r\n.cstm-txt input:-moz-placeholder { /* Firefox 18- */\r\n  color:#fff;\r\n}\r\n.vr-mid{\r\n\tvertical-align: middle;\r\n}\r\n.ex-txt{\r\n\tcolor:#000;\r\n\tfont-size: 20px;\r\n}\r\n.btn-grin-2{\r\n\tpadding:17px 30px;  \r\n\tbackground-color:rgb(161, 210, 83);\r\n\tcolor: #fff;\r\n\tborder-color: rgb(161, 210, 83);\r\n}\r\n.btn-custom{\r\n\t-webkit-transition:300ms;\r\n\ttransition:300ms;\r\n}\r\n.btn-custom:hover .ex-txt{\r\n\t-webkit-transition:300ms;\r\n\ttransition:300ms;\r\n\tcolor: #fff;\r\n}\r\n.new-thd th{\r\n    color:#fff;\r\n    background-color: #000;\r\n    border:1px solid #fff;\r\n}\r\n.new-tbdy td{\r\n    background-color: #dae5f1!important;\r\n    border:1px solid #fff!important;\r\n}\r\n.new-tbdy tr:hover{\r\n    background-color:#b8d9fd!important;    \r\n}\r\n.new-tbdy tr:hover td{\r\n    background-color:#b8d9fd!important;\r\n}\r\nth.selected{\r\n    background-color: #00b0f0!important;\r\n}\r\n@media only screen and (min-width:992px) {\r\n    .cstm-footer{\r\n        position: fixed;\r\n        bottom: 0;\r\n    }\r\n}\r\n.btn-wrap button{\r\n\tfont-size: 12px;\r\n\tmargin: 0px 5px;\r\n\theight: 53px;\r\n}\r\n.btn-wrap{\r\n\tmargin-bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-five-layout/stockvaluation/stockvaluation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"cstm-hdr\">\n\t<div class=\"\">\n\t\t<div  class=\"col-lg-2\">\n\t\t\t<div  class=\"dashboard-header-logo\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\">\n\t\t\t\t<img _ngcontent-c3=\"\" class=\"img-responsive\" src=\"./assets/imgs/logoDoctm.png\" routerLink=\"/header-five-layout/dashboard-pharmacy\">\n\t\t\t</div>\n\t\t\t<div >\n\t\t\t\t<div _ngcontent-c3=\"\" class=\"dshbrd-btn\">\n\t\t\t\t\t<button  class=\"btn btn-custom\" routerLink=\"/header-five-layout/dashboard-pharmacy\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\"> Dashboard</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-10\">\n\t\t\t<div class=\"row cstm-row\">\n\t\t\t\t<!-- <div class=\"col-lg-12\">\n\t\t\t\t\t<div class=\"form-group cstm-txt\">\n\t\t\t\t\t    <input type=\"text\" readonly=\"\" class=\"form-control text-center\" placeholder=\"STOCK AS ON {{today | date:'d MMM yyyy'}}\">\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t\t<!-- <div class=\"col-lg-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t    <input type=\"text\" class=\"form-control\" placeholder=\"TO DATE\">\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t    <input type=\"text\" class=\"form-control\" (input)=\"search()\" [(ngModel)]=\"searchInput\"  placeholder=\"Search by Product Name\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-2 cstm-input\">\n\t\t\t\t\t<button class=\"btn btn-custom\" (input)=\"searchUser()\">Search </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\n\t</div>\n</div>\n<div class=\"stock-tab\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"tbl-cntrol stock-tab-tb\">\n\t\t<table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\" *ngIf=\"sortedData.length>0\">\n\t\t    <thead class=\"new-thd\">\n\t\t    <tr>\n\t\t       <!--  <th width=\"10%\" class=\"text-center\">Type</th>\n\t\t        <th width=\"20%\" class=\"text-center\">Product</th>\n\t\t        <th width=\"10%\" class=\"text-center\">Packing</th>\n\t\t        <th width=\"10%\" class=\"text-center\">Batch</th>\n\t\t        <th width=\"10%\" class=\"text-center\">M.R.P./P</th>\n\t\t        <th width=\"10%\" class=\"text-center\">Current Stock</th>\n\t\t        <th width=\"10%\" class=\"text-center\">P.Rate/P</th>\n\t\t        <th width=\"10%\" class=\"text-center\">P.Value</th> -->\n\t\t        <th mat-sort-header=\"type\" width=\"9%\" class=\"{{getTableHeaderClass(2)}} text-center\" (click)=\"setTableHeaderClass(2)\"><h4 style=\"width: 100%; text-align: center;\">Type</h4></th>\n\t\t       <th mat-sort-header=\"product\" width=\"14%\" class=\"{{getTableHeaderClass(1)}} text-center\" (click)=\"setTableHeaderClass(1)\"><h4 style=\"width: 100%; text-align: center;\">Product</h4></th> \n\t\t        <th mat-sort-header=\"packing\" width=\"8%\" class=\"{{getTableHeaderClass(3)}} text-center\" (click)=\"setTableHeaderClass(3)\"><h4 style=\"width: 100%; text-align: center;\">Packing</h4></th>\n\t\t        <th mat-sort-header=\"batch\" width=\"9%\" class=\"{{getTableHeaderClass(4)}} text-center\" (click)=\"setTableHeaderClass(4)\"><h4 style=\"width: 100%; text-align: center;\">Batch</h4></th>\n\t\t         <th mat-sort-header=\"mrp\" width=\"8%\" class=\"{{getTableHeaderClass(8)}} text-center\" (click)=\"setTableHeaderClass(8)\"><h4 style=\"width: 100%; text-align: center;\">M.R.P./P</h4></th>\n\t\t        <th mat-sort-header=\"stock\" width=\"8%\" class=\"{{getTableHeaderClass(5)}} text-center\" (click)=\"setTableHeaderClass(5)\"><h4 style=\"width: 100%; text-align: center;\">Stock</h4></th>\n\t\t        <th mat-sort-header=\"p_rate\" width=\"9%\" class=\"{{getTableHeaderClass(6)}} text-center\" (click)=\"setTableHeaderClass(6)\"><h4 style=\"width: 100%; text-align: center;\">P.Rate/P</h4></th>\n\t\t        <th mat-sort-header=\"pvalue\" width=\"8%\" class=\"{{getTableHeaderClass(9)}} text-center\" (click)=\"setTableHeaderClass(9)\"><h4 style=\"width: 100%; text-align: center;\">P.Value</h4></th>\n\t\t        <th mat-sort-header=\"value\" width=\"9%\" class=\"{{getTableHeaderClass(7)}} text-center\" (click)=\"setTableHeaderClass(7)\"><h4 style=\"width: 100%; text-align: center;\">S.Value</h4></th>\n\t\t    </tr>\n\t\t    </thead>\n\t\t\t    <tbody class=\"new-tbdy\">\n\t\t\t\t\t<tr *ngFor=\"let item of sortedData\">\n\t\t\t\t\t\t<td width=\"9%\" class=\"text-center\">{{item.type}}</td>\n\t\t\t\t\t\t<td width=\"14%\" class=\"text-center vr-mid\">{{item.product}}</td>\n\t\t\t\t\t\t<td width=\"8%\" class=\"text-center vr-mid\">{{item.pack_units}} x {{item.pack_quantity}}</td>\n\t\t\t\t\t\t<td width=\"9%\" class=\"text-center vr-mid\">{{item.batch}}</td>\n\t\t\t\t\t\t<td width=\"8%\" class=\"text-center vr-mid\">{{item.mrp}}</td>\n\t\t\t\t\t\t<td width=\"8%\" class=\"text-center vr-mid\">\n\t\t\t\t\t\t\t<span *ngIf=\"item.newPacking || item.newPackingReminder\">{{item.newPacking}} <b>: </b>{{item.newPackingReminder}}</span>\n\t\t\t\t\t\t\t<span *ngIf=\"!item.newPacking && !item.newPackingReminder\" style=\"color: red\"><small><b>Not in Stock</b></small></span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"9%\" class=\"text-center vr-mid\">{{getData(item.cost)}}</td>\n\t\t\t\t\t\t<td width=\"8%\" class=\"text-center vr-mid\">{{getData(item.present_prate)}}</td>\n\t\t\t\t\t\t<td width=\"9%\" class=\"text-center vr-mid\">{{getData(item.present_mrate)}}</td>\n\t\t\t\t\t</tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"col-lg-12\" *ngIf=\"sortedData.length<1\">\n                <h3 class=\"text-center\">No data found ...</h3>\n            </div> \n\t\t</div>\n\t</div>\n\n</div>\n\n\n<div class=\"col-lg-12  cstm-footer foot-stock\">\n\t<div class=\"btn-wrap text-center\">\n\t\t<button class=\"btn btn-custom\" *ngIf=\"sortedData\">\n\t\t\t<div> Total Product Items </div>\n\t\t\t<div class=\"ex-txt\">{{totalProducts.length}}</div>\n\t\t</button>\n\t\t<button class=\"btn btn-custom\">\n\t\t\t<div> Purchase Value of Stock </div>\n\t\t\t<div class=\"ex-txt\">{{getData(purchaseValue)}}</div>\n\t\t</button>\n\t\t<button class=\"btn btn-custom\">\n\t\t\t<div>Sales Value of Stock </div>\n\t\t\t<div class=\"ex-txt\">{{getData(salesValue)}}</div>\n\t\t</button>\n\t\t<button class=\"btn btn-custom\">\n\t\t\t<div>Profit Value of Stock </div>\n\t\t\t<div class=\"ex-txt\">{{getData(salesValue-purchaseValue)}} </div>\n\t\t</button>\n\t\t<button class=\"btn btn-custom  btn-grin-2\" (click)=\"exportPdf()\">\n\t\t\t<div> Export </div>\n\t\t</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-five-layout/stockvaluation/stockvaluation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockvaluationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StockvaluationComponent = /** @class */ (function () {
    function StockvaluationComponent(formBuilder, UserService, toastr) {
        this.formBuilder = formBuilder;
        this.UserService = UserService;
        this.toastr = toastr;
        this.toDate = new Date();
        this.fromDate = new Date();
        this.today = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy',
            defaultOpen: false
        };
        this.stockValuation = [];
        this.databackup = [];
        this.showData = [];
    }
    StockvaluationComponent.prototype.ngOnInit = function () {
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails']);
        this.StockOnToday();
        this.reqData = {};
        this.reqData = {};
        this.reqData.opt = [];
        this.reqData.opt[0] = "";
        this.totalTr = [1];
        this.stockArray = [];
        this.totalProducts = [];
        this.sortedData = [];
    };
    StockvaluationComponent.prototype.StockOnToday = function () {
        var _this = this;
        this.totalPrate = 0;
        this.totalMrp = 0;
        this.purchaseValue = 0;
        this.salesValue = 0;
        this.totalUnits = 0;
        this.totalQunatity = 0;
        this.totalValue = 0;
        this.totalSoldStock = 0;
        this.stockValuation = [];
        var object = {
            id: this.pharmacyData.dataSmartPharmacy._id
        };
        this.loading = true;
        this.stockArray = [];
        this.UserService.StockOnToday(object).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.toastr.success(data.message, "Success");
                _this.stockArray = data.data;
                _this.stockValuation = data.data;
                _this.showData = data.data;
                _this.databackup = data.data;
                for (var i = 0; i < _this.stockArray.length; i++) {
                    _this.totalBill = _this.totalBill + _this.stockArray[i].amount;
                    _this.totalPrate += _this.stockArray[i].p_rate;
                    _this.totalMrp += _this.stockArray[i].mrp;
                    _this.totalUnits += (_this.stockArray[i].pack_units * _this.stockArray[i].pack_quantity);
                    _this.totalQunatity += _this.stockArray[i].pack_quantity;
                    _this.stockArray[i].stock = _this.stockArray[i].total_stock - _this.stockArray[i].sold_stock;
                    _this.stockArray[i].newPacking = Math.trunc(_this.stockArray[i].stock / (_this.stockArray[i].pack_units * _this.stockArray[i].pack_quantity));
                    _this.stockArray[i].newPackingReminder = _this.stockArray[i].stock % (_this.stockArray[i].pack_units * _this.stockArray[i].pack_quantity);
                    // this.stockArray[i].present_prate = Math.ceil(this.stockArray[i].amount*(this.stockArray[i].total_stock-this.stockArray[i].sold_stock)/
                    // 				  	(this.stockArray[i].pack_units*this.stockArray[i].pack_quantity))
                    // this.stockArray[i].present_mrate= Math.ceil(this.stockArray[i].mrp*(this.stockArray[i].total_stock-this.stockArray[i].sold_stock)/
                    // 				  	(this.stockArray[i].pack_units*this.stockArray[i].pack_quantity))
                    _this.stockArray[i].present_prate = 0;
                    if (_this.stockArray[i].total_stock > 0) {
                        _this.stockArray[i].present_prate = (_this.stockArray[i].amount / _this.stockArray[i].total_stock) * _this.stockArray[i].stock;
                    }
                    _this.stockArray[i].profit_percent = Math.ceil(((_this.stockArray[i].mrp - _this.stockArray[i].p_rate) / _this.stockArray[i].p_rate) * 100);
                    // this.stockArray[i].present_mrate = Math.ceil(this.stockArray[i].present_prate + ((this.stockArray[i].profit_percent)/100) * this.stockArray[i].present_prate)
                    _this.stockArray[i].present_mrate = Math.ceil((_this.stockArray[i].mrp * _this.stockArray[i].stock) / (_this.stockArray[i].pack_units * _this.stockArray[i].pack_quantity));
                    if (_this.stockArray[i].stock == 0) {
                        _this.stockArray[i].cost = 0;
                    }
                    else {
                        _this.stockArray[i].cost = (_this.stockArray[i].present_prate / _this.stockArray[i].stock) * (_this.stockArray[i].pack_units * _this.stockArray[i].pack_quantity);
                    }
                    _this.purchaseValue += Math.ceil(_this.stockArray[i].present_prate);
                    _this.salesValue += Math.ceil(_this.stockArray[i].present_mrate);
                    if (i == 0) {
                        _this.totalProducts.push(_this.stockArray[i]);
                    }
                    var boolean = false;
                    for (var j = 0; j < _this.totalProducts.length; j++) {
                        if (_this.stockArray[i].type == _this.totalProducts[j].type && _this.stockArray[i].product == _this.totalProducts[j].product) {
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        _this.totalProducts.push(_this.stockArray[i]);
                    }
                }
                var expiryValue = 0;
                for (var i = 0; i < data.dataExpiry.length; i++) {
                    data.dataExpiry[i].stock = data.dataExpiry[i].total_stock - data.dataExpiry[i].sold_stock;
                    data.dataExpiry[i].present_mrate = Math.ceil((data.dataExpiry[i].mrp * data.dataExpiry[i].stock) / (data.dataExpiry[i].pack_units * data.dataExpiry[i].pack_quantity));
                    expiryValue += Math.ceil(data.dataExpiry[i].present_mrate);
                }
                _this.salesValue = _this.salesValue - expiryValue;
                _this.sortedData = _this.stockValuation.slice();
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    StockvaluationComponent.prototype.getTableHeaderClass = function (id) {
        if (this.headerClicked == id) {
            return 'selected';
        }
        else {
            return '';
        }
    };
    StockvaluationComponent.prototype.setTableHeaderClass = function (id) {
        this.headerClicked = id;
    };
    StockvaluationComponent.prototype.sortData = function (sort) {
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
                case 'batch': return compare(a.batch, b.batch, isAsc);
                case 'stock': return compare(a.stock, b.stock, isAsc);
                case 'p_rate': return compare(a.cost, b.cost, isAsc);
                case 'value': return compare(a.present_mrate, b.present_mrate, isAsc);
                case 'pvalue': return compare(a.present_prate, b.present_prate, isAsc);
                case 'packing': return compare(a.stock, b.stock, isAsc);
                case 'mrp': return compare(a.mrp, b.mrp, isAsc);
                default: return 0;
            }
        });
    };
    StockvaluationComponent.prototype.search = function () {
        var _this = this;
        this.totalPrate = 0;
        this.totalMrp = 0;
        this.purchaseValue = 0;
        this.salesValue = 0;
        this.totalUnits = 0;
        this.totalQunatity = 0;
        this.totalValue = 0;
        this.totalSoldStock = 0;
        this.totalProducts = [];
        this.searchInput = this.searchInput.toLowerCase();
        if (this.searchInput && this.searchInput.trim() != '') {
            this.showData = this.databackup.filter(function (item) {
                var b = item.product.toLowerCase();
                var c = item.type;
                return (b.indexOf(_this.searchInput) > -1 || c.indexOf(_this.searchInput) > -1);
            });
        }
        if (this.searchInput == '') {
            this.showData = this.databackup;
        }
        for (var i = 0; i < this.showData.length; i++) {
            this.totalBill = this.totalBill + this.showData[i].amount;
            this.totalPrate += this.showData[i].p_rate;
            this.totalMrp += this.showData[i].mrp;
            this.totalUnits += (this.showData[i].pack_units * this.showData[i].pack_quantity);
            this.totalQunatity += this.showData[i].pack_quantity;
            this.showData[i].stock = this.showData[i].total_stock - this.showData[i].sold_stock;
            this.showData[i].newPacking = Math.trunc(this.showData[i].stock / (this.showData[i].pack_units * this.showData[i].pack_quantity));
            this.showData[i].newPackingReminder = this.showData[i].stock % (this.showData[i].pack_units * this.showData[i].pack_quantity);
            this.showData[i].present_prate = Math.ceil((this.showData[i].amount / this.showData[i].total_stock) * this.showData[i].stock);
            this.showData[i].profit_percent = Math.ceil(((this.showData[i].mrp - this.showData[i].p_rate) / this.showData[i].p_rate) * 100);
            this.showData[i].present_mrate = Math.ceil((this.showData[i].mrp * this.showData[i].stock) / (this.showData[i].pack_units * this.showData[i].pack_quantity));
            this.showData[i].cost = (this.showData[i].present_prate / this.showData[i].stock) * (this.showData[i].pack_units * this.showData[i].pack_quantity);
            this.purchaseValue += Math.ceil(this.showData[i].present_prate);
            this.salesValue += Math.ceil(this.showData[i].present_mrate);
            if (i == 0) {
                this.totalProducts.push(this.showData[i]);
            }
            var boolean = false;
            for (var j = 0; j < this.totalProducts.length; j++) {
                if (this.showData[i].type == this.totalProducts[j].type && this.showData[i].product == this.totalProducts[j].product) {
                    boolean = true;
                    break;
                }
            }
            if (boolean == false) {
                this.totalProducts.push(this.showData[i]);
            }
        }
        this.sortedData = this.showData.slice();
    };
    StockvaluationComponent.prototype.exportPdf = function () {
        var head = [
            { title: '#', dataKey: "id" },
            { title: 'Type', dataKey: "type" },
            { title: 'Product Name', dataKey: "product" },
            { title: 'Packing', dataKey: "packing" },
            { title: 'Batch Number', dataKey: "batch" },
            { title: 'M.R.P.', dataKey: "mrp" },
            { title: 'Stock', dataKey: "stock" },
            { title: 'P. Rate', dataKey: "rate" },
            { title: 'S. Value', dataKey: "value" },
            { title: 'P. Value', dataKey: "prate" }
        ];
        var csvData = [];
        var totalDuration;
        var dates = [];
        for (var i = 0; i < this.sortedData.length; i++) {
            var ob;
            ob = {};
            ob.id = i + 1;
            //var date = this.stockValuation[i].createdAt.split('T')
            //ob.updateAt = date[0] + " " +date[1].substr(0,5)
            ob.type = this.sortedData[i].type;
            ob.product = this.sortedData[i].product;
            ob.packing = this.sortedData[i].pack_units + 'x' + this.sortedData[i].pack_quantity;
            ob.batch = this.sortedData[i].batch;
            ob.mrp = this.sortedData[i].mrp;
            ob.value = this.getData(this.sortedData[i].present_mrate);
            ob.stock = this.sortedData[i].newPacking + ':' + this.sortedData[i].newPackingReminder;
            ob.rate = this.getData(this.sortedData[i].cost);
            ob.prate = this.getData(this.sortedData[i].present_prate);
            csvData.push(ob);
        }
        csvData.push({
            id: "Total",
            type: '',
            product: '',
            packing: '',
            batch: '',
            mrp: '',
            value: this.salesValue,
            stock: '',
            rate: '',
            prate: this.purchaseValue
        });
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
        doc.save('StockValuation' + "(" + date + ")");
    };
    StockvaluationComponent.prototype.getData = function (data) {
        if (data % 1 != 0) {
            return data.toFixed(2);
        }
        else {
            return data;
        }
    };
    StockvaluationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stockvaluation',
            template: __webpack_require__("../../../../../src/app/header-five-layout/stockvaluation/stockvaluation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-five-layout/stockvaluation/stockvaluation.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], StockvaluationComponent);
    return StockvaluationComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/header-five-layout/stockvaluation/stockvaluation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockvaluationModule", function() { return StockvaluationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stockvaluation_routing_module__ = __webpack_require__("../../../../../src/app/header-five-layout/stockvaluation/stockvaluation-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stockvaluation_component__ = __webpack_require__("../../../../../src/app/header-five-layout/stockvaluation/stockvaluation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var StockvaluationModule = /** @class */ (function () {
    function StockvaluationModule() {
    }
    StockvaluationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__stockvaluation_routing_module__["a" /* StockvaluationRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSortModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__stockvaluation_component__["a" /* StockvaluationComponent */]]
        })
    ], StockvaluationModule);
    return StockvaluationModule;
}());



/***/ })

});
//# sourceMappingURL=stockvaluation.module.chunk.js.map