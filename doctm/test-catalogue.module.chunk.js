webpackJsonp(["test-catalogue.module"],{

/***/ "../../../../../src/app/header-six-layout/test-catalogue/test-catalogue-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestCatalogueRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_catalogue_component__ = __webpack_require__("../../../../../src/app/header-six-layout/test-catalogue/test-catalogue.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__test_catalogue_component__["a" /* TestCatalogueComponent */]
    }];
var TestCatalogueRoutingModule = /** @class */ (function () {
    function TestCatalogueRoutingModule() {
    }
    TestCatalogueRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], TestCatalogueRoutingModule);
    return TestCatalogueRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-six-layout/test-catalogue/test-catalogue.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cstm-row{\r\n\tmargin-top: 20px;\r\n}\r\n.cstm-row button{\r\n\tmargin-top:38px;\r\n}\r\n.cstm-hdr{\r\n\tmargin-top: 15px;\r\n}\r\n.tbl-head{\r\n\tmargin-bottom:2px;\r\n\tmargin-top:20px;\r\n}\r\n.tbl-head tr {\r\n\tborder-top:1px solid #fff!important;\r\n\tborder-left:1px solid #fff!important;\r\n\tborder-right:1px solid #fff!important;\r\n}\r\n.tbl-head tr th{\r\n\tbackground-color:#000!important;\r\n\tborder-color:#fff;\r\n\tcolor:#fff;\r\n}\r\n.table-bordered > tbody > tr > td{\r\n    border: 1px solid #fff;\r\n    background-color: rgb(218,229,241);\r\n}\r\n.tbl-cntrol{\r\n\tmin-height:300px;\r\n\tmax-height: 300px;\r\n\toverflow-x: hidden;\r\n\toverflow-y: scroll;\r\n}\r\n.tbl-cntrol .tbl-data{\r\n\tmin-width: 882px;\r\n}\r\n.btn-wrap{\r\n\tmargin-top: 20px;\r\n}\r\n.btn-grin{\r\n\tbackground-color:rgb(161, 210, 83);\r\n}\r\n.btn-grin-2{\r\n\tpadding:20px 30px; \r\n}\r\n.btn-wrap button{\r\n\tmargin-right: 10px;\r\n}\r\n.btn-red-1{\r\n\tbackground-color: #FF0000;\r\n}\r\n.btn-ornge{\r\n\tbackground-color: #E36C09;\r\n}\r\n.table{\r\n\tmargin-bottom:5px;\r\n}\r\n.cstm-th tr th{\r\n\tbackground-color: #000;\r\n\tcolor: #fff;\r\n\tborder:1px solid #fff;\r\n}\r\n.cstm-caret {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 70.5px;\r\n    background-color: #01b0f0;\r\n    z-index: 9;\r\n    right: 20px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 12px dashed;\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n}\r\n.cstm-caret-big {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 22px;\r\n    background-color: #01b0f0;\r\n    z-index: 1;\r\n    right: 5px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 17px dashed;\r\n    border-right: 14px solid transparent;\r\n    border-left: 14px solid transparent;\r\n}\r\n.cstm-crt-wrap {\r\n    position: relative;\r\n}\r\n.regis-modal-body .select-opt .disabled {\r\n    color: #ddd;\r\n}\r\n.select-doctor{\r\n    background-color: #01b0f0;\r\n    margin-top: 55px;\r\n    color: #fff;\r\n    margin-bottom: 15px;\r\n}\r\n.new-thd th {\r\n    color: #fff;\r\n    background-color: #000;\r\n    border: 1px solid #fff;\r\n}\r\n.tbl-cntrol{\r\n    min-height:100px;\r\n    max-height: 380px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n.tbl-cntrol .tbl-data{\r\n    min-width: 880px;\r\n}\r\nth.selected{\r\n    background-color: #00b0f0!important;\r\n}\r\n.pos-rel{\r\n    position: relative;\r\n}\r\n.cstm-caret{\r\n    top: 12.5px;\r\n    right: 6px;\r\n}\r\n.pos-rel select option{\r\n    color: #000;\r\n}\r\n.footer-cstm{\r\n    position: fixed;\r\n    bottom: 0;\r\n    margin-bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-six-layout/test-catalogue/test-catalogue.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"cstm-hdr\">\n   <div class=\"\">\n      <div  class=\"col-lg-2\">\n         <div  class=\"dashboard-header-logo\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\">\n            <img _ngcontent-c3=\"\" class=\"img-responsive\" src=\"./assets/imgs/logoDoctm.png\" routerLink=\"/header-six-layout/dashboard-diagnostic\">\n         </div>\n         <div >\n            <div _ngcontent-c3=\"\" class=\"dshbrd-btn\">\n               <button  class=\"btn btn-custom\" routerLink=\"/header-six-layout/dashboard-diagnostic\" tabindex=\"0\"> Dashboard </button>\n            </div>\n         </div>\n      </div>\n      <div class=\"col-lg-8\">\n         <div class=\"pos-rel\">\n            \n         <span  class=\"caret cstm-caret\"></span>\n         <select class=\"form-control select-doctor cstm-opt\" [(ngModel)]=\"optionValue\" (change)=\"selectOne()\">\n               <option selected=\"\" value=\"All\" >All</option>\n               <option value=\"{{option}}\" *ngFor=\"let option of diagnosticsData.dataSmartDiagnostics.diagnostics_services\">{{option}}</option>\n         </select>\n         </div>\n      </div>\n   </div>\n</div>\n<div class=\"stock-tab\">\n   <div class=\"col-lg-12\">\n      <div class=\"tbl-cntrol\">\n      <table class=\"table table-bordered \"  matSort (matSortChange)=\"sortData($event)\" *ngIf=\"sortedData.length>0\">\n         <thead class=\"new-thd\">\n            <tr>\n               <th mat-sort-header=\"category\" width=\"10%\" class=\"{{getTableHeaderClass(1)}} text-center\" (click)=\"setTableHeaderClass(1)\">\n                  <h4 style=\"width: 100%; text-align: center;\">Category</h4>\n               </th>\n               <th mat-sort-header=\"testname\" width=\"10%\" class=\"{{getTableHeaderClass(2)}} text-center\" (click)=\"setTableHeaderClass(2)\">\n                  <h4 style=\"width: 100%; text-align: center;\">Test Name/Details</h4>\n               </th>\n               <th mat-sort-header=\"rate\" width=\"10%\" class=\"{{getTableHeaderClass(3)}} text-center\" (click)=\"setTableHeaderClass(3)\">\n                  <h4 style=\"width: 100%; text-align: center;\">Rate</h4>\n               </th>\n               <th mat-sort-header=\"discount\" width=\"10%\" class=\"{{getTableHeaderClass(4)}} text-center\" (click)=\"setTableHeaderClass(4)\">\n                  <h4 style=\"width: 100%; text-align: center;\">Discount</h4>\n               </th>\n               <th width=\"10%\">\n                  <h4 style=\"width: 100%; text-align: center;\">Action</h4>\n               </th>\n            </tr>\n         </thead>\n         <tbody class=\"new-tbdy\">\n            <tr *ngFor=\"let ar of sortedData\">\n               <td width=\"10%\" class=\"text-center\">{{ar.category}}</td>\n               <td width=\"10%\" class=\"text-center\">{{ar.name}}</td>\n               <td width=\"10%\" class=\"text-center\">{{ar.rate}}</td>\n               <td width=\"10%\" class=\"text-center\">{{ar.discount}}</td>\n               <td width=\"10%\" class=\"text-center\">\n                  <button class=\"btn btn-success\" (click)=\"editTest(ar)\">Edit</button>&nbsp;&nbsp;&nbsp;\n                  <button class=\"btn btn-danger\" (click)=\"DeleteTest(ar)\">Delete</button>\n               </td>\n            </tr>\n         </tbody>\n      </table>\n      </div>\n   </div>\n</div>\n<div class=\"col-lg-8 col-lg-offset-2 footer-cstm\">\n   <div class=\"btn-wrap text-center\">\n      <button class=\"btn btn-custom\">\n         <div>Total Tests</div>\n         <div *ngIf=\"sortedData\">{{sortedData.length}}</div>\n      </button>\n      <button class=\"btn btn-custom btn-grin btn-grin-2\" (click)=\"exportPdf()\">\n         <div> Export </div>\n      </button>\n   </div>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"edit-entry\" role=\"dialog\">\n   <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n         <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"reset()\">&times;</button>\n            <h4 class=\"modal-title text-center\">Update Test Entry</h4>\n         </div>\n         <form [formGroup] = \"detailsForm\">\n            <div class=\"modal-body\">\n               <div class=\"row\">\n                  <div class=\"col-lg-12\">\n                     <div class=\"form-group\">\n                        <select  class=\"form-control\" class=\"form-control txtfield\" [(ngModel)]=\"editcategory\" required=\"\"  [formControl]=\"detailsForm.controls['category']\">\n                           <option selected=\"\" value=\"\" disabled=\"\">Category</option>\n                           <option value=\"{{option}}\" *ngFor=\"let option of diagnosticsData.dataSmartDiagnostics.diagnostics_services\">{{option}}</option>\n                        </select>\n                     </div>\n                     <p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['category'].valid  && ( detailsForm.controls['category'].touched)\">Invalid Category !!!</p>\n                  </div>\n                  <div class=\"col-lg-12\">\n                     <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Test Name\" [(ngModel)]=\"edittestname\" required=\"\" [formControl]=\"detailsForm.controls['testName']\" (keyup)=\"onTextChange(editcategory,$event.target.value)\" [matAutocomplete]=\"auto\">\n                        <mat-autocomplete #auto=\"matAutocomplete\" >\n                           <mat-option *ngFor=\"let option of testNameSuggestion\" [value]=\"option\" >\n                           {{option}}\n                           </mat-option>\n                        </mat-autocomplete>\n                     </div>\n                     <p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['testName'].valid  && ( detailsForm.controls['testName'].touched)\">Invalid Test Name !!!</p>\n                  </div>\n                  <div class=\"col-lg-12\">\n                     <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Rate\" pattern=\"[0-9]+\" [(ngModel)]=\"editrate\" required=\"\"  [formControl]=\"detailsForm.controls['rate']\">\n                     </div><p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['rate'].valid  && ( detailsForm.controls['rate'].touched)\">Invalid Rate !!!</p>\n                  </div>\n                  <div class=\"col-lg-12\">\n                     <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" maxlength=\"3\" pattern=\"[0-9]+\" placeholder=\"Discount(%)\" [(ngModel)]=\"editdiscount\" required=\"\"  [formControl]=\"detailsForm.controls['discount']\">\n                     </div>\n                     <p style=\"color: #FF0000\" *ngIf=\"!detailsForm.controls['discount'].valid  && ( detailsForm.controls['discount'].touched)\">Invalid Discount !!!</p>\n                  </div>\n                  <div class=\"col-lg-12 text-center\">\n                     <button class=\"btn btn-custom btn-grin\" type=\"submit\" [disabled]=\"!detailsForm.valid\" (click)=\"UpdateTest()\">SUBMIT\n                     </button>\n                  </div>\n               </div>\n            </div>\n         </form>\n      <!--   <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div> -->\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-six-layout/test-catalogue/test-catalogue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestCatalogueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirmation_popup_confirmation_dialog_confirmation_dialog_component__ = __webpack_require__("../../../../../src/app/confirmation-popup/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TestCatalogueComponent = /** @class */ (function () {
    function TestCatalogueComponent(UserService, toastr, dialog, formBuilder) {
        this.UserService = UserService;
        this.toastr = toastr;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
    }
    TestCatalogueComponent.prototype.ngOnInit = function () {
        this.diagnosticsData = JSON.parse(localStorage['smartDiagnosticsDetails']);
        this.optionValue = 'All';
        this.totalRate = 0;
        this.sortedData = [];
        this.array = [];
        this.array1 = [];
        this.testNameSuggestion = [];
        this.detailsForm = this.formBuilder.group({
            'category': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required,])],
            'discount': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].minLength(0), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].maxLength(3), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].max(100)])],
            'rate': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*')])],
            'testName': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
        });
        this.getArrayValue();
    };
    TestCatalogueComponent.prototype.getArrayValue = function () {
        var _this = this;
        this.loading = true;
        this.UserService.GetTestBySmartDiagnostics(this.diagnosticsData.dataSmartDiagnostics._id).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.array = data.data;
                _this.array1 = data.data;
                for (var i = 0; i < _this.array.length; i++) {
                    var total = 0;
                    total += (_this.array[i].rate / 100) * _this.array[i].discount;
                    _this.totalRate += _this.array[i].rate - total;
                }
                _this.sortedData = _this.array.slice();
                // this.toastr.success(data.message,"Success")
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    TestCatalogueComponent.prototype.getTableHeaderClass = function (id) {
        if (this.headerClicked == id) {
            return 'selected';
        }
        else {
            return '';
        }
    };
    TestCatalogueComponent.prototype.setTableHeaderClass = function (id) {
        this.headerClicked = id;
    };
    TestCatalogueComponent.prototype.sortData = function (sort) {
        var data = this.sortedData.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'category': return compare(a.category, b.category, isAsc);
                case 'testname': return compare(a.name, b.name, isAsc);
                case 'rate': return compare(a.rate, b.rate, isAsc);
                case 'discount': return compare(a.discount, b.discount, isAsc);
                default: return 0;
            }
        });
    };
    TestCatalogueComponent.prototype.exportPdf = function () {
        var head = [
            { title: '#', dataKey: "id" },
            { title: 'Category', dataKey: "category" },
            { title: 'Test Name', dataKey: "testname" },
            { title: 'Rate', dataKey: "rate" },
            { title: 'Discount', dataKey: "discount" },
        ];
        var csvData = [];
        var totalDuration;
        var dates = [];
        for (var i = 0; i < this.sortedData.length; i++) {
            var ob;
            ob = {};
            ob.id = i + 1;
            ob.category = this.sortedData[i].category;
            ob.testname = this.sortedData[i].name;
            ob.rate = this.sortedData[i].rate;
            ob.discount = this.sortedData[i].discount;
            csvData.push(ob);
        }
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
        doc.save('Test Catalogue' + "(" + date + ")");
    };
    TestCatalogueComponent.prototype.selectOne = function () {
        var _this = this;
        this.sortedData = [];
        this.totalRate = 0;
        var total = 0;
        if (this.optionValue == 'All') {
            this.array = this.array1;
        }
        else {
            this.array = this.array1.filter(function (d) { return d.category == _this.optionValue; });
        }
        for (var i = 0; i < this.array.length; i++) {
            total += (this.array[i].rate / 100) * this.array[i].discount;
            this.totalRate += this.array[i].rate - total;
            this.sortedData = this.array.slice();
        }
    };
    TestCatalogueComponent.prototype.DeleteTest = function (activity) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__confirmation_popup_confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */], {
            // width: '250px',
            data: activity.name
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result == "yes") {
                _this.loading = true;
                _this.UserService.DeleteTestBySmartDiagnostics(activity.id).subscribe(function (data) {
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
    TestCatalogueComponent.prototype.editTest = function (item) {
        console.log(item);
        this.id = item.id;
        this.editcategory = item.category;
        this.edittestname = item.name;
        this.editrate = item.rate;
        this.editdiscount = item.discount;
        $("#edit-entry").modal("show");
    };
    TestCatalogueComponent.prototype.UpdateTest = function () {
        var _this = this;
        var object = {
            id: this.id,
            update: {
                category: this.editcategory,
                name: this.edittestname,
                rate: this.editrate,
                discount: this.editdiscount
            }
        };
        this.loading = true;
        this.UserService.UpdateTestBySmartDiagnostics(object).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                $("#edit-entry").modal("hide");
                _this.detailsForm.reset();
                _this.ngOnInit();
                _this.toastr.success(data.message, "Success");
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    TestCatalogueComponent.prototype.onTextChange = function (type, suggestion) {
        var _this = this;
        var type;
        if (type == 'PATHOLOGY') {
            type = 'Pathology';
        }
        else if (type == 'ULTRASOUND') {
            type = 'Ultrasound';
        }
        else if (type == 'AUDIOMETRY') {
            type = 'Audiometry';
        }
        else if (type == 'BONE DENSITOMETRY') {
            type = 'Bone densitometry';
        }
        else if (type == 'DOPPLER STUDIES') {
            type = 'Doppler Studies';
        }
        else if (type == 'MAMMOGRAPHY') {
            type = 'Mammograaphy';
        }
        else if (type == 'UROFLOWMETRY') {
            type = 'Uroflowmetry';
        }
        else if (type == 'Nerve Test') {
            type = 'NERVE TEST';
        }
        else if (type == 'Eye Tests') {
            type = 'Eye Test';
        }
        this.testNameSuggestion = [];
        var object = {
            type: type,
            suggestion: suggestion
        };
        this.UserService.SearchSuggestion(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.testNameSuggestion = data.data;
            }
        }, function (err) {
            console.log(err);
        });
    };
    TestCatalogueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test-catalogue',
            template: __webpack_require__("../../../../../src/app/header-six-layout/test-catalogue/test-catalogue.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-six-layout/test-catalogue/test-catalogue.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */]])
    ], TestCatalogueComponent);
    return TestCatalogueComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/header-six-layout/test-catalogue/test-catalogue.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestCatalogueModule", function() { return TestCatalogueModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_catalogue_routing_module__ = __webpack_require__("../../../../../src/app/header-six-layout/test-catalogue/test-catalogue-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_catalogue_component__ = __webpack_require__("../../../../../src/app/header-six-layout/test-catalogue/test-catalogue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TestCatalogueModule = /** @class */ (function () {
    function TestCatalogueModule() {
    }
    TestCatalogueModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__test_catalogue_routing_module__["a" /* TestCatalogueRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_autocomplete__["a" /* MatAutocompleteModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__test_catalogue_component__["a" /* TestCatalogueComponent */]]
        })
    ], TestCatalogueModule);
    return TestCatalogueModule;
}());



/***/ })

});
//# sourceMappingURL=test-catalogue.module.chunk.js.map