webpackJsonp(["reorderproducts.module"],{

/***/ "../../../../../src/app/header-five-layout/reorderproducts/reorderproducts-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReorderproductsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reorderproducts_component__ = __webpack_require__("../../../../../src/app/header-five-layout/reorderproducts/reorderproducts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__reorderproducts_component__["a" /* ReorderproductsComponent */]
    }
];
var ReorderproductsRoutingModule = /** @class */ (function () {
    function ReorderproductsRoutingModule() {
    }
    ReorderproductsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ReorderproductsRoutingModule);
    return ReorderproductsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/reorderproducts/reorderproducts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stock-tab {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.cstm-row button {\r\n    padding: 25px 30px;\r\n}\r\n.cstm-hdr {\r\n    margin-top: 15px;\r\n}\r\n.tbl-head tr {\r\n    border-top: 2px solid #00B0F0;\r\n    border-left: 2px solid #00B0F0;\r\n    border-right: 2px solid #00B0F0;\r\n}\r\n.tbl-head tr th {\r\n    background-color: #DCDCDC;\r\n    border-color: #00B0F0;\r\n}\r\n.table-bordered>tbody>tr>td {\r\n    border: 1px solid #00B0F0;\r\n}\r\n.tbl-cntrol {\r\n    min-height: 100px;\r\n    max-height: 400px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n.tbl-cntrol .tbl-data {\r\n    min-width: 880px;\r\n}\r\n.btn-wrap {\r\n    margin-top: 20px;\r\n}\r\n.btn-grin {\r\n    background-color: rgb(161, 210, 83);\r\n}\r\n.btn-grin-2 {\r\n    padding: 20px 30px;\r\n}\r\n.btn-wrap button {\r\n    margin-right: 10px;\r\n}\r\n.btn-red-1 {\r\n    background-color: #FF0000;\r\n}\r\n.btn-ornge {\r\n    background-color: #E36C09;\r\n}\r\n.vrt-mdl {\r\n    vertical-align: middle;\r\n}\r\n.modal-dialog {\r\n    display: table;\r\n}\r\n.tbl-data-modal {\r\n    width: 866px!important;\r\n}\r\n.new-thd th {\r\n    color: #fff;\r\n    background-color: #000;\r\n    border: 1px solid #fff;\r\n}\r\n.new-tbdy td {\r\n    background-color: #dae5f1!important;\r\n    border: 1px solid #fff!important;\r\n}\r\n.new-tbdy tr:hover {\r\n    background-color: #b8d9fd!important;\r\n}\r\n.new-tbdy tr:hover td {\r\n    background-color: #b8d9fd!important;\r\n}\r\n.cstm-head tr th {\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n.cstm-put input {\r\n    height: 56px;\r\n}\r\n.cstm-pad {\r\n    padding-top: 5px\r\n}\r\n.cstm-medim-date-hding {\r\n    height: 56px;\r\n    vertical-align: middle;\r\n    width:100%;\r\n\r\n    padding: 0px 30px!important;\r\n}\r\n.cstm-inpt {\r\n    width:100%;\r\n}\r\nth.selected{\r\n    background-color: #00b0f0!important;\r\n}\r\n.mgg-top{\r\n    margin-top:38px;\r\n}\r\n@media(max-width: 768px){\r\n     .txt_cent{\r\n        text-align: center!important;\r\n    }\r\n    .btn-small-s button{\r\n        padding:5px!important;\r\n        font-size:10px!important;  \r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-five-layout/reorderproducts/reorderproducts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"cstm-hdr\">\n\t<div class=\"\">\n\t\t<div  class=\"col-lg-2 col-md-2 col-sm-12 col-xs-12 \">\n\t\t\t<div  class=\"dashboard-header-logo\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\">\n\t\t\t\t<img _ngcontent-c3=\"\" class=\"img-responsive\" src=\"./assets/imgs/logoDoctm.png\" routerLink=\"/header-five-layout/dashboard-pharmacy\">\n\t\t\t</div>\n\t\t\t<div >\n\t\t\t\t<div _ngcontent-c3=\"\" class=\"dshbrd-btn\">\n\t\t\t\t\t<button  class=\"btn btn-custom\" routerLink=\"/header-five-layout/dashboard-pharmacy\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\"> Dashboard </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <div class=\"col-lg-6 cstm-input cstm-row\">\n\t\t\t<button  class=\"btn btn-custom btn-block\">PRODUCTS BELOW MINIMUM STOCK LEVEL AS ON {{todayDate | date:'mediumDate'}}</button>\n\t\t</div> -->\n\t\t<div class=\"col-lg-7 col-md-7 col-sm-12  col-xs-12 cstm-input cstm-row btn-small-s\">\n\t\t\t<button  class=\"btn btn-custom btn-block cstm-medim-date-hding mgg-top\" tabindex=\"0\">PRODUCTS BELOW MINIMUM STOCK LEVEL AS ON {{todayDate | date:'mediumDate'}}</button>\n\t\t</div>\n\t\t<div class=\"col-lg-3 col-md-3 col-sm-12  col-xs-12 cstm-input cstm-row\">\n\t        <div class=\"\">\n\t           <div class=\"cstm-put\">\n\t           \t\t<input type=\"text\" name=\"\" class=\"form-control cstm-inpt mgg-top\" placeholder=\"Search by product\" (input)=\"search()\" [(ngModel)]=\"searchInput\" >\n\t           </div>\n\t        </div>\n\t    </div>\n\t\t\n\t</div>\n</div>\n<div class=\"stock-tab\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"tbl-cntrol my_tab_5\" style=\"margin-top:12px;\">\n\t\t\t<table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\" *ngIf=\"reorderArray.length>0\">\n\t\t\t\t<thead class=\"new-thd\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th mat-sort-header=\"product\" width=\"10%\" class=\"{{getTableHeaderClass(1)}} text-center\" (click)=\"setTableHeaderClass(1)\"><h4 style=\"width: 100%; text-align: center;\">Product</h4></th>\n\t\t\t\t\t\t<th mat-sort-header=\"type\" width=\"10%\" class=\"{{getTableHeaderClass(2)}} text-center\" (click)=\"setTableHeaderClass(2)\"><h4 style=\"width: 100%; text-align: center;\">Type</h4></th>\n\t\t\t\t\t\t<th mat-sort-header=\"packing\" width=\"10%\" class=\"{{getTableHeaderClass(3)}} text-center\" (click)=\"setTableHeaderClass(3)\"><h4 style=\"width: 100%; text-align: center;\">Packing</h4></th>\n\t\t\t\t\t\t<th mat-sort-header=\"batch\" width=\"10%\" class=\"{{getTableHeaderClass(4)}} text-center\" (click)=\"setTableHeaderClass(4)\"><h4 style=\"width: 100%; text-align: center;\">Batch</h4></th>\n\t\t\t\t\t\t<th mat-sort-header=\"stock\" width=\"10%\" class=\"{{getTableHeaderClass(5)}} text-center\" (click)=\"setTableHeaderClass(5)\"><h4 style=\"width: 100%; text-align: center;\">Stock</h4></th>\n\t\t\t\t\t\t<th width=\"10%\" class=\"text-center\"><h4 style=\"width: 100%; text-align: center;\">Action</h4></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\t\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let list of reorderArray\">\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center vrt-mdl\">{{list.product}}</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{list.type}}</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center vrt-mdl\">{{list.pack_units}} x {{list.pack_quantity}}</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center vrt-mdl\">{{list.batch}}</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center vrt-mdl\">{{list.newPacking}} <b>:</b> {{list.newPackingReminder}}</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center vrt-mdl\"><i class=\"fa fa-trash dlt-icon\" (click)=\"DeletePharmacyProduct(list)\"></i></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<div class=\"col-lg-12\" *ngIf=\"reorderArray.length<1\">\n             \t<h3 class=\"text-center\">No product found ...</h3>\n            </div> \n\t\t</div>\n\t</div>\n</div>\n<div class=\"col-lg-11 col-lg-offset-1 col-xs-12 col-sm-12 foot-sb\" style=\"position: fixed ;bottom: 0; margin-bottom: 15px; \">\n\t<div class=\"btn-wrap row\">\n\t\t<div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center  txt_cent\">\n\t\t\t<button class=\"btn btn-custom btn-1\" data-toggle=\"modal\" data-target=\"#myModal\" style=\"background-color:rgb(57, 96, 157);color:#fff;border-color:rgb(57, 96, 157); font-size: 14px; \">\n\t\t\t\t<div>Generate Purchase Order</div>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center txt_centt\">\n\t\t\t<button class=\"btn btn-custom\" style=\"background-color: rgb(134, 173, 68);color:#fff;border-color:rgb(134, 173, 68); font-size: 14px; \">\n\t\t\t\t<div>Products below min stock: {{reorderArray.length}}</div>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-12 text-center  txt_cent\" >\n\t\t\t<button class=\"btn btn-custom\" routerLink=\"/header-five-layout/reorder-book\" style=\"background-color: rgb(226, 127, 42);color:#fff;border-color:rgb(226, 127, 42); font-size: 14px;\">\n\t\t\t\t<div>Set Min Stock Level</div>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center  txt_cent\">\n\t\t\t<button class=\"btn btn-custom btn-grin\" style=\"font-size: 14px;color:#fff;border-color:rgb(161, 210, 83);\" (click)=\"exportReorder()\">\n\t\t\t\t<div>Export</div>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n\t<div class=\"modal-dialog cstm_proper\">\n\n\t\t<!-- Modal content-->\n\t\t<div class=\"modal-content modal-lg\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<!--  <h4 class=\"modal-title\">Modal Header</h4> -->\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<div class=\"tbl-cntrol my_tab_6\">\t\n\t\t\t\t\t\t\t<table class=\"table table-bordered tbl-data-modal\" >\n\t\t\t\t\t\t\t\t<thead class=\"cstm-head\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th width=\"10%\" class=\"text-center\">Product</th>\n\t\t\t\t\t\t\t\t\t\t<th width=\"10%\" class=\"text-center\">Type</th>\n\t\t\t\t\t\t\t\t\t\t<th width=\"10%\" class=\"text-center\">Packing</th>\n\t\t\t\t\t\t\t\t\t\t<th width=\"10%\" class=\"text-center\">Current Stock</th>\n\t\t\t\t\t\t\t\t\t\t<th width=\"10%\" class=\"text-center\">Order OTY</th>\n\t\t\t\t\t\t\t\t\t\t<th width=\"10%\" class=\"text-center\">Rate</th>\n\t\t\t\t\t\t\t\t\t\t<th width=\"10%\" class=\"text-center\">Tentative Cost</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let list of reorderArray;let i = index\">\n\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center vrt-mdl\">{{list.product}}</td>\n\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center vrt-mdl\">{{list.type}}</td>\n\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center vrt-mdl\">{{list.pack_units}} x {{list.pack_quantity}}</td>\n\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center vrt-mdl\">{{list.newPacking}} <b>:</b> {{list.newPackingReminder}}</td>\n\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center vrt-mdl\"><input type=\"text\" class=\"form-control\" placeholder=\"Qty\" (blur)=\"getTotalRecord(i)\" [(ngModel)]=\"orderQty[i]\"></td>\n\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center vrt-mdl\" >{{getData(list.amount/list.qty)}}</td>\n\t\t\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center vrt-mdl\" >{{getData(list.tent_amount)}} </td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<div class=\"btn-wrap row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-lg-8 col-sm-12 col-xs-12 text-center\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-custom btn-grin nbtnn\">\n\t\t\t\t\t\t\t\t\t<div>Tentative purchase order cost: {{getData(newTentativeCost)}}</div>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-lg-4 col-sm-12 col-xs-12 text-center\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-custom\" (click)=\"exportPdf()\">\n\t\t\t\t\t\t\t\t\t<div>Export</div>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n      <!--   <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div> -->\n  </div>\n\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-five-layout/reorderproducts/reorderproducts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReorderproductsComponent; });
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





var ReorderproductsComponent = /** @class */ (function () {
    function ReorderproductsComponent(UserService, toastr, dialog) {
        this.UserService = UserService;
        this.toastr = toastr;
        this.dialog = dialog;
        this.todayDate = new Date();
    }
    ReorderproductsComponent.prototype.ngOnInit = function () {
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails']);
        this.reorderArray = [];
        this.orderQty = [];
        this.searchArray = [];
        this.sortedData = [];
        this.newTentativeCost = 0;
        this.GetReorderProducts();
    };
    ReorderproductsComponent.prototype.GetReorderProducts = function () {
        var _this = this;
        this.UserService.GetReorderProducts(this.pharmacyData.dataSmartPharmacy._id).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.sortedData = _this.searchArray.slice();
                // this.toastr.success(data.message, "Success")
                for (var i = 0; i < data.data.length; i++) {
                    for (var j = 0; j < data.data[i].length; j++) {
                        data.data[i][j].newPacking = Math.trunc(data.data[i][j].current_stock / (data.data[i][j].pack_units * data.data[i][j].pack_quantity));
                        data.data[i][j].newPackingReminder = data.data[i][j].current_stock % (data.data[i][j].pack_units * data.data[i][j].pack_quantity);
                        data.data[i][j].tent_amount = 0;
                        _this.reorderArray.push(data.data[i][j]);
                        _this.searchArray.push(data.data[i][j]);
                        _this.orderQty.push("");
                    }
                }
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    ReorderproductsComponent.prototype.getTableHeaderClass = function (id) {
        if (this.headerClicked == id) {
            return 'selected';
        }
        else {
            return '';
        }
    };
    ReorderproductsComponent.prototype.setTableHeaderClass = function (id) {
        this.headerClicked = id;
    };
    ReorderproductsComponent.prototype.sortData = function (sort) {
        var data = this.reorderArray.slice();
        if (!sort.active || sort.direction === '') {
            this.reorderArray = data;
            return;
        }
        this.reorderArray = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'product': return compare(a.product, b.product, isAsc);
                case 'type': return compare(a.type, b.type, isAsc);
                case 'packing': return compare(a.pack_units * a.pack_quantity, b.pack_units * b.pack_quantity, isAsc);
                case 'batch': return compare(a.batch, b.batch, isAsc);
                case 'stock': return compare(a.current_stock, b.current_stock, isAsc);
                default: return 0;
            }
        });
    };
    ReorderproductsComponent.prototype.getTotalRecord = function (i) {
        this.reorderArray[i].tent_amount = (this.reorderArray[i].amount / this.reorderArray[i].qty) * this.orderQty[i];
        this.newTentativeCost = 0;
        for (var j = 0; j < this.reorderArray.length; j++) {
            this.newTentativeCost += this.reorderArray[j].tent_amount;
        }
    };
    ReorderproductsComponent.prototype.exportPdf = function () {
        var head = [
            { title: '#', dataKey: "id" },
            { title: 'Product Name', dataKey: "product" },
            { title: 'Type', dataKey: "type" },
            { title: 'Packing', dataKey: "packing" },
            { title: 'Current Stock', dataKey: "currentStock" },
            { title: 'Order OTY', dataKey: "orderQty" },
            { title: 'Rate', dataKey: "rate" },
            { title: 'Tentative Cost', dataKey: "tentativeCost" },
        ];
        var csvData = [];
        var totalDuration;
        var dates = [];
        for (var i = 0; i < this.reorderArray.length; i++) {
            if (this.orderQty[i] != "") {
                var ob;
                ob = {};
                ob.id = i + 1;
                var date = this.reorderArray[i].createdAt.split('T');
                ob.createdAt = date[0] + " " + date[1].substr(0, 5);
                //ob.date = this.reorderArray[i].createdAt.split('T')
                ob.type = this.reorderArray[i].type;
                ob.product = this.reorderArray[i].product;
                ob.packing = this.reorderArray[i].pack_units + 'x' + this.reorderArray[i].pack_quantity;
                ob.currentStock = this.reorderArray[i].newPacking + ':' + this.reorderArray[i].newPackingReminder;
                ob.orderQty = this.orderQty[i];
                ob.rate = this.reorderArray[i].p_rate;
                ob.tentativeCost = this.reorderArray[i].tent_amount;
                if (ob.tentativeCost % 1 != 0) {
                    ob.tentativeCost = ob.tentativeCost.toFixed(2);
                }
                csvData.push(ob);
            }
        }
        csvData.push({
            id: "Total",
            type: "",
            product: "",
            packing: "",
            currentStock: "",
            orderQty: "",
            rate: "",
            tentativeCost: this.newTentativeCost.toFixed(2)
        });
        var todayDate = new Date().toJSON().toString().substr(0, 10);
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
        doc.save('Purchase-Order' + "(" + todayDate + ")");
    };
    ReorderproductsComponent.prototype.exportReorder = function () {
        var head = [
            { title: '#', dataKey: "id" },
            { title: 'Product Name', dataKey: "product" },
            { title: 'Type', dataKey: "type" },
            { title: 'Packing', dataKey: "packing" },
            { title: 'Batch', dataKey: "batch" },
            { title: 'Stock', dataKey: "currentStock" },
        ];
        var csvData = [];
        var totalDuration;
        var dates = [];
        for (var i = 0; i < this.reorderArray.length; i++) {
            var ob;
            ob = {};
            ob.id = i + 1;
            var date = this.reorderArray[i].createdAt.split('T');
            ob.createdAt = date[0] + " " + date[1].substr(0, 5);
            //ob.date = this.reorderArray[i].createdAt.split('T')
            ob.type = this.reorderArray[i].type;
            ob.product = this.reorderArray[i].product;
            ob.packing = this.reorderArray[i].pack_units + 'x' + this.reorderArray[i].pack_quantity;
            ob.batch = this.reorderArray[i].batch;
            ob.currentStock = this.reorderArray[i].newPacking + ':' + this.reorderArray[i].newPackingReminder;
            csvData.push(ob);
        }
        var todayDate = new Date().toJSON().toString().substr(0, 10);
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
        doc.save('Minimum-Stock-Level' + "(" + todayDate + ")");
    };
    ReorderproductsComponent.prototype.getData = function (data) {
        if (data == '' || data == null || data == undefined) {
            return 0;
        }
        else if (data % 1 != 0) {
            return data.toFixed(2);
        }
        else {
            return data;
        }
    };
    ReorderproductsComponent.prototype.search = function () {
        var _this = this;
        this.searchInput = this.searchInput.toLowerCase();
        if (this.searchInput && this.searchInput.trim() != '') {
            this.reorderArray = this.searchArray.filter(function (item) {
                var b = item.product.toLowerCase();
                return (b.indexOf(_this.searchInput) > -1);
            });
        }
        if (this.searchInput == '') {
            this.reorderArray = this.searchArray;
        }
        this.sortedData = this.reorderArray.slice();
    };
    ReorderproductsComponent.prototype.DeletePharmacyProduct = function (activity) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__confirmation_popup_confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */], {
            // width: '250px',
            data: activity.product
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result == "yes") {
                _this.loading = true;
                _this.UserService.DeletePharmacyProduct(activity).subscribe(function (data) {
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
    ReorderproductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reorderproducts',
            template: __webpack_require__("../../../../../src/app/header-five-layout/reorderproducts/reorderproducts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-five-layout/reorderproducts/reorderproducts.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */]])
    ], ReorderproductsComponent);
    return ReorderproductsComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/header-five-layout/reorderproducts/reorderproducts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReorderproductsModule", function() { return ReorderproductsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reorderproducts_routing_module__ = __webpack_require__("../../../../../src/app/header-five-layout/reorderproducts/reorderproducts-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reorderproducts_component__ = __webpack_require__("../../../../../src/app/header-five-layout/reorderproducts/reorderproducts.component.ts");
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








var ReorderproductsModule = /** @class */ (function () {
    function ReorderproductsModule() {
    }
    ReorderproductsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__reorderproducts_routing_module__["a" /* ReorderproductsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["c" /* MatDialogModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__reorderproducts_component__["a" /* ReorderproductsComponent */]]
        })
    ], ReorderproductsModule);
    return ReorderproductsModule;
}());



/***/ })

});
//# sourceMappingURL=reorderproducts.module.chunk.js.map