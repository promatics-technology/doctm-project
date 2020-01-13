webpackJsonp(["reorderbook.module"],{

/***/ "../../../../../src/app/header-five-layout/reorderbook/reorderbook-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReorderbookRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reorderbook_component__ = __webpack_require__("../../../../../src/app/header-five-layout/reorderbook/reorderbook.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__reorderbook_component__["a" /* ReorderbookComponent */]
    }
];
var ReorderbookRoutingModule = /** @class */ (function () {
    function ReorderbookRoutingModule() {
    }
    ReorderbookRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ReorderbookRoutingModule);
    return ReorderbookRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/reorderbook/reorderbook.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stock-tab{\r\n\tfloat: left;\r\n\twidth:100%;\r\n}\r\n.cstm-row button{\r\n    padding: 14px 30px;\r\n    margin-top: 41px;\r\n}\r\n.cstm-hdr{\r\n\tmargin-top: 15px;\r\n}\r\n.tbl-head{\r\n\tmargin-bottom:2px;\r\n\tmargin-top:20px;\r\n}\r\n.tbl-head tr {\r\n\tborder-top:2px solid #00B0F0;\r\n\tborder-left:2px solid #00B0F0;\r\n\tborder-right:2px solid #00B0F0;\r\n}\r\n.tbl-head tr th{\r\n\tbackground-color:#DCDCDC;\r\n\tborder-color:#00B0F0;\r\n}\r\n.table-bordered > tbody > tr > td{\r\n    border: 1px solid #00B0F0;\r\n}\r\n.tbl-cntrol{\r\n\tmin-height:100px;\r\n\tmax-height: 420px;\r\n\toverflow-x: hidden;\r\n\toverflow-y: scroll;\r\n}\r\n.tbl-cntrol .tbl-data{\r\n\tmin-width: 880px;\r\n}\r\n.btn-wrap{\r\n\tmargin-top: 20px;\r\n    margin-bottom: 15px;\r\n}\r\n.btn-grin{\r\n\tbackground-color:rgb(161, 210, 83);\r\n}\r\n.btn-grin-2{\r\n\tpadding:20px 30px; \r\n}\r\n.btn-wrap button{\r\n\tmargin-right: 10px;\r\n}\r\n.btn-red-1{\r\n\tbackground-color: #FF0000;\r\n}\r\n.btn-ornge{\r\n\tbackground-color: #E36C09;\r\n}\r\n.vrt-mdl{\r\n\tvertical-align: middle;\r\n}\r\n.modal-dialog{\r\n\tdisplay: table;\r\n}\r\n.tbl-data-modal{\r\n\twidth: 866px!important;\r\n}\r\n.cstm-drpdown-cnsulted-doc {\r\n    margin: 20px 0;\r\n    position: relative;\r\n}\r\n.smrt-ass-dropdown {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n.cstm-drpdown-cnsulted-doc select {\r\n    font-size: 25px;\r\n    color: #fff;\r\n    width: 100%;\r\n    position: relative;\r\n    cursor: pointer;\r\n    padding: 15px;\r\n    background-color: #76923C;\r\n    border-radius: 10px;\r\n    border: none;\r\n    margin-top: 20px;\r\n}\r\n.cstm-drpdown-cnsulted-doc option {\r\n    border-bottom: 1px #ccc dashed;\r\n    padding: 8px 7px;\r\n    -webkit-transition: .3s all;\r\n    transition: .3s all;\r\n    display: block;\r\n    color: #00b0f0;\r\n    border-radius: 0;\r\n    background-color: #fff;\r\n    font-size: 20px;\r\n}\r\n.cstm-caret-big {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 42px;\r\n    background-color:#76923C;\r\n    z-index: 1;\r\n    right: 5px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 17px dashed;\r\n    border-right: 14px solid transparent;\r\n    border-left: 14px solid transparent;\r\n}\r\n.btn-b{\r\n\ttext-transform: unset;\r\n}\r\n.new-thd th{\r\n    color:#fff;\r\n    background-color: #000;\r\n    border:1px solid #fff;\r\n}\r\n.new-thd th h4{\r\n    margin: 0px;\r\n}\r\n.new-tbdy td{\r\n    background-color: #dae5f1!important;\r\n    border:1px solid #fff!important;\r\n}\r\n.new-tbdy tr:hover{\r\n    background-color:#b8d9fd!important;    \r\n}\r\n.new-tbdy tr:hover td{\r\n    background-color:#b8d9fd!important;\r\n}\r\nth.selected{\r\n    background-color: #00b0f0!important;\r\n}\r\n@media only screen and (min-width:992px) {\r\n    .cstm-footer{\r\n        position: fixed;\r\n        bottom: 0;\r\n    }\r\n}\r\n.cstm-put input{\r\n    height: 56px;\r\n    margin-top:40px;\r\n}\r\n.cstm-chk {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 22px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n/* Hide the browser's default checkbox */\r\n.cstm-chk input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n    position: absolute;\r\n    top: 4.5px;\r\n    left: 40%;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #d6d6d6;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.cstm-chk:hover input~.checkmark {\r\n    background-color: #ccc;\r\n}\r\n/* When the checkbox is checked, add a blue background */\r\n.cstm-chk input:checked~.checkmark {\r\n    background-color: #fff;\r\n}\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n/* Show the checkmark when checked */\r\n.cstm-chk input:checked~.checkmark:after {\r\n    display: block;\r\n}\r\n/* Style the checkmark/indicator */\r\n.cstm-chk .checkmark:after {\r\n    left: 9px;\r\n    top: 3px;\r\n    width: 6px;\r\n    height: 16px;\r\n    border: solid #000;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n.cstm-sort > h4{\r\n-webkit-transform: translateY(-5px);\r\n        transform: translateY(-5px);\r\n}\r\n.cstm-put-put input{\r\n    display: inline-block;\r\n    width:20%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-five-layout/reorderbook/reorderbook.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"cstm-hdr\">\n\t<div class=\"\">\n\t\t<div  class=\"col-lg-2\">\n\t\t\t<div  class=\"dashboard-header-logo\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\">\n\t\t\t\t<img class=\"img-responsive\" src=\"./assets/imgs/logoDoctm.png\" routerlink=\"/header-five-layout/dashboard-pharmacy\">\n\t\t\t</div>\n\t\t\t<div >\n\t\t\t\t<div class=\"dshbrd-btn\">\n\t\t\t\t\t<button  class=\"btn btn-custom\" routerLink=\"/header-five-layout/dashboard-pharmacy\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\"> Dashboard </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-5 cstm-input cstm-row\">\n\t\t\t<button  class=\"btn btn-custom btn-block\" tabindex=\"0\">PRODUCTS AS ON {{today | date:'d MMM yyyy'}}</button>\n\t\t</div>\n\t\t<div class=\"col-lg-3 cstm-input cstm-row\">\n\t        <div class=\"\">\n\t           <div class=\"cstm-put\">\n\t           \t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Search by product\" (input)=\"search()\" [(ngModel)]=\"searchInput\" >\n\t           </div>\n\t        </div>\n\t    </div>\n\t</div>\n</div>\n<div class=\"stock-tab\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"tbl-cntrol\">\n\t\t\t<table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\" *ngIf=\"sortedData.length>0\">\n\t\t\t    <thead class=\"new-thd\">\n\t\t\t   \t\t<tr>\n\t\t\t   \t\t\t<th width=\"5%\" class=\"text-center cstm-sort\"><h4 style=\"width: 100%; text-align: center;\">Select</h4></th>\n\t\t\t\t        <th mat-sort-header=\"product\" width=\"10%\" class=\"{{getTableHeaderClass(1)}} text-center\" (click)=\"setTableHeaderClass(1)\"><h4 style=\"width: 100%; text-align: center;\">Product</h4></th>\n\t\t\t\t        <th mat-sort-header=\"type\" width=\"10%\" class=\"{{getTableHeaderClass(2)}} text-center\" (click)=\"setTableHeaderClass(2)\"><h4 style=\"width: 100%; text-align: center;\">Type</h4></th>\n\t\t\t\t        <th mat-sort-header=\"packing\" width=\"10%\" class=\"{{getTableHeaderClass(3)}} text-center\" (click)=\"setTableHeaderClass(3)\"><h4 style=\"width: 100%; text-align: center;\">Packing</h4></th>\n\t\t\t\t        <th mat-sort-header=\"reorder_stock\" width=\"10%\" class=\"{{getTableHeaderClass(4)}} text-center\" (click)=\"setTableHeaderClass(4)\"><h4 style=\"width: 100%; text-align: center;\">Set Min Stock Level</h4></th>\n\t\t\t    \t</tr>\n\t\t\t    </thead>\n\t\t\t    <tbody class=\"new-tbdy\">\n\t\t\t\t\t<tr *ngFor=\"let list of sortedData\">\n\t\t\t\t\t\t<td width=\"5%\"> \n\t\t\t\t\t\t\t<label class=\"cstm-chk\">\n\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"list.select\" [checked]=\"list.select\">\n\t\t\t\t\t\t\t  <span class=\"checkmark\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{list.product}}</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{list.type}}</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">{{list.pack_units}} x {{list.pack_quantity}}</td>\n\t\t\t\t\t\t<td width=\"10%\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-put-put\">\n\t                            <input type=\"number\" class=\"form-control\" placeholder=\"Min pack\" value=\"{{list.reorder_stock}}\" [disabled]=\"!list.select\" [(ngModel)]=\"list.reorder_stock\">\n\t                        \t<span><b>:</b> 0</span>\n\t                        </div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\t\t    \n\t\t\t</table>\n\t\t\t<div class=\"col-lg-12\" *ngIf=\"sortedData.length<1\">\n             \t<h3 class=\"text-center\">No product found ...</h3>\n            </div> \n\t\t</div>\n\t</div>\n</div>\n<div class=\"col-lg-12  cstm-footer\">\n\t<div class=\"col-lg-7 btn-wrap text-center\">\n\t\t<button class=\"btn btn-custom\" (click)=\"UpdateMinStockToReorder()\">\n\t\t\t<div> Save </div>\n\t\t</button>\n\t</div>\n\t<div class=\"col-lg-3 btn-wrap text-center\">\n\t\t<button class=\"btn btn-custom\">\n\t\t\t<div> Total Products:  {{totalProduct.length}}</div>\n\t\t</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header-five-layout/reorderbook/reorderbook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReorderbookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReorderbookComponent = /** @class */ (function () {
    function ReorderbookComponent(toastr, userService, dialog, router) {
        this.toastr = toastr;
        this.userService = userService;
        this.dialog = dialog;
        this.router = router;
        this.today = new Date();
    }
    ReorderbookComponent.prototype.ngOnInit = function () {
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails']);
        this.headerClicked = 0;
        this.dataArray = [];
        this.dataArray1 = [];
        this.sortedData = [];
        this.totalProduct = [];
        this.ProductReorderList();
    };
    ReorderbookComponent.prototype.ProductReorderList = function () {
        var _this = this;
        this.loading = true;
        this.userService.ProductReorderList(this.pharmacyData.dataSmartPharmacy._id).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.dataArray = data.data;
                _this.dataArray1 = data.data;
                for (var i = 0; i < _this.dataArray1.length; i++) {
                    _this.dataArray[i].select = false;
                    if (i == 0) {
                        _this.totalProduct.push(_this.dataArray1[i]);
                    }
                    var boolean = false;
                    for (var j = 0; j < _this.totalProduct.length; j++) {
                        if (_this.dataArray1[i].type == _this.totalProduct[j].type && _this.dataArray1[i].product == _this.totalProduct[j].product) {
                            boolean = true;
                            break;
                        }
                    }
                    if (boolean == false) {
                        _this.totalProduct.push(_this.dataArray1[i]);
                    }
                }
                _this.sortedData = _this.dataArray.slice();
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    ReorderbookComponent.prototype.getTableHeaderClass = function (id) {
        if (this.headerClicked == id) {
            return 'selected';
        }
        else {
            return '';
        }
    };
    ReorderbookComponent.prototype.setTableHeaderClass = function (id) {
        this.headerClicked = id;
    };
    ReorderbookComponent.prototype.sortData = function (sort) {
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
                case 'reorder_stock': return compare(a.reorder_stock, b.reorder_stock, isAsc);
                default: return 0;
            }
        });
    };
    ReorderbookComponent.prototype.exportPdf = function () {
        //    var head = [
        //        { title: '#', dataKey: "id"},
        //        { title: 'Type', dataKey: "type"},
        //        { title: 'Product Name', dataKey: "product"},
        //        { title: 'Packing', dataKey: "packing"},
        //        { title: 'Expiry', dataKey: "expiry"},
        //        { title: 'Batch Number', dataKey: "batch"},
        //        { title: 'Stock', dataKey:"value"},
        //        { title: 'P. Rate', dataKey:"stock"},
        //        { title: 'P. Value', dataKey:"rate"}
        //    ]
        //    var csvData = []
        //    var totalDuration
        //    var dates = []
        //    if(this.optionSelected==0){
        //     for (var i = 0; i < this.alreadyExpired.length; i++) {
        //         var ob ;
        //         ob = {}
        //         ob.id = i+1
        //         //var date = this.stockValuation[i].createdAt.split('T')
        //         //ob.updateAt = date[0] + " " +date[1].substr(0,5)
        //         ob.type = this.alreadyExpired[i].type
        //         ob.product = this.alreadyExpired[i].product
        //         ob.packing = this.alreadyExpired[i].pack_units+ 'x' +this.alreadyExpired[i].pack_quantity
        //         ob.expiry = this.alreadyExpired[i].month +"/"+ this.alreadyExpired[i].year
        //         ob.batch = this.alreadyExpired[i].batch
        //         ob.rate = this.alreadyExpired[i].present_prate
        //         ob.value = this.alreadyExpired[i].newPacking + ":" +this.alreadyExpired[i].newPackingReminder
        //         ob.stock = this.alreadyExpired[i].cost.toFixed(2)
        //         csvData.push(ob)
        //     }
        // }
        //    var date = new Date().toJSON().toString().substr(0,10)
        //    var doc = new jsPDF('p', 'pt');
        //    doc.autoTable(head, csvData, {
        //        theme: 'grid',
        //        styles: {
        //            overflow: 'linebreak',
        //        },
        //        margin: 5,
        //        fontSize:8,
        //        tableWidth: 'auto',
        //        showHeader: 'everyPage'
        //    });
        //    if(this.optionSelected==0){
        //  	  doc.save('Already-ExpiryBook'+"("+date+")");
        // }
        // if(this.optionSelected==1){
        //  	  doc.save('After-3-ExpiryBook'+"("+date+")");
        // }
        // if(this.optionSelected==2){
        //  	  doc.save('After-ExpiryBook'+"("+date+")");
        // }
    };
    ReorderbookComponent.prototype.search = function () {
        var _this = this;
        this.searchInput = this.searchInput.toLowerCase();
        if (this.searchInput && this.searchInput.trim() != '') {
            this.dataArray = this.dataArray1.filter(function (item) {
                var b = item.product.toLowerCase();
                return (b.indexOf(_this.searchInput) > -1);
            });
        }
        if (this.searchInput == '') {
            this.dataArray = this.dataArray1;
        }
        this.sortedData = this.dataArray.slice();
    };
    // UpdateMinStockToReorder(id,data){
    // 	console.log(id,data)
    // 	if(data!=null && data!='' && data!=undefined && data>=0){
    // 		this.loading = true
    // 		let ob = {
    // 			id: id,
    // reorder_stock: data,
    // 		}
    //      this.userService.UpdateMinStockToReorder(ob).subscribe(data => {
    //          console.log(data)
    //      	this.loading = false
    //          if (data.response == true) {
    //          	this.toastr.success(data.message,"Success")
    //          	this.ngOnInit()
    //          } else{
    //          	this.toastr.error(data.message,"Error")
    //          }     
    //      }, err => {
    //        console.log(err);
    //      })
    // 	}else{
    // 		this.toastr.warning("Minimum reorder stock can be 0","Warning")
    // 	}
    // }
    ReorderbookComponent.prototype.UpdateMinStockToReorder = function () {
        var _this = this;
        var array = [];
        for (var i = 0; i < this.dataArray.length; i++) {
            if (this.dataArray[i].select) {
                if (this.dataArray[i].reorder_stock != null && this.dataArray[i].reorder_stock >= 0) {
                    array.push({
                        id: this.dataArray[i].id,
                        reorder_stock: this.dataArray[i].reorder_stock
                    });
                }
                else {
                    this.toastr.warning("Minimum reorder stock can be 0", "Warning");
                    return;
                }
            }
        }
        if (array.length > 0) {
            this.loading = true;
            var ob = {
                array: array
            };
            this.userService.UpdateMinStockToReorder(ob).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.toastr.success(data.message, "Success");
                    _this.router.navigate(['/header-five-layout/reorder-products']);
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    ReorderbookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reorderbook',
            template: __webpack_require__("../../../../../src/app/header-five-layout/reorderbook/reorderbook.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-five-layout/reorderbook/reorderbook.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], ReorderbookComponent);
    return ReorderbookComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/header-five-layout/reorderbook/reorderbook.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReorderbookModule", function() { return ReorderbookModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reorderbook_routing_module__ = __webpack_require__("../../../../../src/app/header-five-layout/reorderbook/reorderbook-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reorderbook_component__ = __webpack_require__("../../../../../src/app/header-five-layout/reorderbook/reorderbook.component.ts");
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








var ReorderbookModule = /** @class */ (function () {
    function ReorderbookModule() {
    }
    ReorderbookModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__reorderbook_routing_module__["a" /* ReorderbookRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["c" /* MatDialogModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__reorderbook_component__["a" /* ReorderbookComponent */]]
        })
    ], ReorderbookModule);
    return ReorderbookModule;
}());



/***/ })

});
//# sourceMappingURL=reorderbook.module.chunk.js.map