webpackJsonp([1,4],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 110;


/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(120);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_admin_auth_guard_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__locker_operations_locker_operations_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__change_password_change_password_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_account_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__balance_enquiry_balance_enquiry_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__customer_customers_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__deposit_deposit_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__withdraw_withdraw_component__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'lockerOperations',
        component: __WEBPACK_IMPORTED_MODULE_8__locker_operations_locker_operations_component__["a" /* LockerOperationsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'changePassword',
        component: __WEBPACK_IMPORTED_MODULE_9__change_password_change_password_component__["a" /* ChangePasswordComponent */]
    },
    {
        path: 'list_account',
        component: __WEBPACK_IMPORTED_MODULE_10__account_account_component__["a" /* AccountComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'bal_enquiry',
        component: __WEBPACK_IMPORTED_MODULE_11__balance_enquiry_balance_enquiry_component__["a" /* BalanceEnquiryComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_5__guards_admin_auth_guard_service__["a" /* AdminAuthGuard */]]
    },
    {
        path: 'customer',
        component: __WEBPACK_IMPORTED_MODULE_12__customer_customers_component__["a" /* CustomersComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'deposit',
        component: __WEBPACK_IMPORTED_MODULE_13__deposit_deposit_component__["a" /* DepositComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'withdraw',
        component: __WEBPACK_IMPORTED_MODULE_14__withdraw_withdraw_component__["a" /* WithdrawComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_7__user_user_component__["a" /* UserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(router, userService, cdRef, auth) {
        this.router = router;
        this.userService = userService;
        this.cdRef = cdRef;
        this.auth = auth;
        this.title = 'Banking Microservices';
    }
    AppComponent.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    AppComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
        this.auth.logout();
    };
    Object.defineProperty(AppComponent.prototype, "isAdminUser", {
        get: function () {
            return this.userService.isAdminUser();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isUser = function () {
        return this.auth.isUser();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(190),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_user_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_admin_auth_guard_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_constant__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_app_data_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__locker_operations_locker_operations_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__change_password_change_password_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__account_account_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__balance_enquiry_balance_enquiry_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__customer_customers_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__deposit_deposit_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__withdraw_withdraw_component__ = __webpack_require__(81);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























function authHttpServiceFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthConfig"]({
        headerPrefix: 'Bearer',
        tokenName: __WEBPACK_IMPORTED_MODULE_15__services_auth_constant__["a" /* TOKEN_NAME */],
        globalHeaders: [{ 'Content-Type': 'application/json' }],
        noJwtError: true,
        noTokenScheme: true,
        tokenGetter: (function () { return localStorage.getItem(__WEBPACK_IMPORTED_MODULE_15__services_auth_constant__["a" /* TOKEN_NAME */]); })
    }), http);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_10__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__locker_operations_locker_operations_component__["a" /* LockerOperationsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__change_password_change_password_component__["a" /* ChangePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_19__account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_20__balance_enquiry_balance_enquiry_component__["a" /* BalanceEnquiryComponent */],
            __WEBPACK_IMPORTED_MODULE_21__customer_customers_component__["a" /* CustomersComponent */],
            __WEBPACK_IMPORTED_MODULE_22__deposit_deposit_component__["a" /* DepositComponent */],
            __WEBPACK_IMPORTED_MODULE_23__withdraw_withdraw_component__["a" /* WithdrawComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"], useFactory: authHttpServiceFactory, deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]] },
            __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_11__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_14__guards_admin_auth_guard_service__["a" /* AdminAuthGuard */],
            __WEBPACK_IMPORTED_MODULE_16__services_app_data_service__["a" /* AppDataService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".form-wrapper {\n  display: block;\n  max-width: 400px;\n  margin: 0 auto 0; }\n\nform input {\n  margin: 20px 0;\n  height: 45px; }\n\nbutton {\n  width: 100%;\n  height: 45px; }\n\np {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".get-statement{\r\n    margin-top: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "h1 {\r\n  text-align: left;\r\n  margin-left: 20px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "input[type=\"number\"]::-webkit-outer-spin-button, input[type=\"number\"]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n \r\ninput[type=\"number\"] {\r\n    -moz-appearance: textfield;\r\n}\r\n\r\n.pad-left-0{\r\n    padding-left: 0px;\r\n}\r\n\r\n.mar-top-15{\r\n    margin-top: 15px;\r\n}\r\n\r\n.cleaner{\r\n    clear: both;\r\n}\r\n\r\n.mar-t-15{\r\n    margin-top: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".search{\r\n    float: right;\r\n    margin-top: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".cleaner{\r\n    clear: both;\r\n}\r\n.mar-t-15{\r\n    margin-top: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"page\">\r\n        <div class=\"page-inner\">\r\n            <div class=\"col-12\" style=\"margin-top: 20px;\">\r\n                <div class=\"text-right\">\r\n                    <button type=\"button\" class=\"btn btn-info btn-xs\" data-toggle=\"modal\" data-target=\"#adding_accounts\">Add Account\r\n                    </button>\r\n                </div>\r\n                <h2>Total Accounts:</h2>\r\n                <table class=\"table table-bordered table-condensed\">\r\n                    <tr>\r\n                        <th>Customer ID</th>\r\n                        <th>Account ID</th>\r\n                        <th>Account Number</th>\r\n                        <th>Account Type</th>\r\n                        <th>Balance</th>\r\n                        <th width=\"100\">&nbsp;</th>\r\n                    </tr>\r\n                    <ng-container *ngIf=\"accountsLists.length\">\r\n                        <tr *ngFor=\"let account of accountsLists;let ind=index\">\r\n                            <td>{{account['customer_id']}}</td>\r\n                            <td>{{account['id']}}</td>\r\n                            <td>{{account['account_num']}}</td>\r\n                            <td>{{account['account_type']}}</td>\r\n                            <td>{{account['balance']}}</td>\r\n                            <td>\r\n                                <a class=\"btn btn-primary btn-xs\" (click)=\"editAccount(ind, account, account)\" style=\"margin-right: 10px;color:#FFF\">\r\n                                    <i class=\"icon icon-pencil\"></i>\r\n                                </a>\r\n                                <a class=\"btn btn-danger btn-xs\" (click)=\"deleteAccount(ind, account)\" style=\"margin-right: 10px;color: #FFF;\">\r\n                                    <i class=\"icon icon-remove\"></i>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"!accountsLists.length\">\r\n                        <tr>\r\n                            <td colspan=\"8\" class=\"text-center\">Records not found</td>\r\n                        </tr>\r\n                    </ng-container>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"adding_accounts\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Add Account</h4>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"customer_id\">Customer ID</label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.customer_id\" #customer_id=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && customer_id.invalid}\"\r\n                                    name=\"customer_id\" required />\r\n                                <div *ngIf=\"f.submitted && customer_id.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"customer_id.errors.required\">Customer ID is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"account_num\">Account Number</label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.account_num\" #account_num=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && account_num.invalid}\"\r\n                                    name=\"account_num\" required />\r\n                                <div *ngIf=\"f.submitted && account_num.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"account_num.errors.required\">Account Number is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"account_type\">Account Type</label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.account_type\" #account_type=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && account_type.invalid}\"\r\n                                    name=\"account_type\" required />\r\n                                <div *ngIf=\"f.submitted && account_type.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"account_type.errors.required\">Account Type is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"balance\">Balance</label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.balance\" #balance=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && balance.invalid}\"\r\n                                    name=\"balance\" required />\r\n                                <div *ngIf=\"f.submitted && balance.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"balance.errors.required\">Balance is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-primary btn-xs\" style=\"color: #FFF\">Create</button>\r\n                    <a class=\"btn btn-default btn-xs\" data-dismiss=\"modal\" (click)=\"clearForm()\">Close</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal\" id=\"editing_accounts\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <form name=\"uform\" (ngSubmit)=\"uf.form.valid && editAccount(editIndex, model, editRow)\" #uf=\"ngForm\" novalidate>\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Edit Accounts</h4>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"_account_type\">Account Type</label>\r\n                                <select class=\"form-control\" id=\"_account_type\" name=\"_account_type\" #_account_type=\"ngModel\" [(ngModel)]=\"model._account_type\"\r\n                                    [ngClass]=\"{'is-invalid':uf.submitted && _account_type.invalid}\">\r\n                                    <option *ngFor=\"let accType of accountTypeArr\" [value]=\"accType.id\">{{accType.name}}</option>\r\n                                </select>\r\n\r\n                                <div *ngIf=\"uf.submitted && _account_type.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"_account_type.errors.required\">Account Type is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-primary btn-xs\" style=\"color: #FFF;\">Update</button>\r\n                    <a class=\"btn btn-default btn-xs\" data-dismiss=\"modal\" (click)=\"clearForm()\">Close</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"deleting_accounts\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Delete Account</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Are you sure?\r\n                    <br/> Do you want to delete Account</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"deleteAccount(deleteIndex, deleteRow)\">Confirm</button>\r\n                <a class=\"btn btn-default btn-xs\" data-dismiss=\"modal\" (click)=\"clearForm()\">Close</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<form name=\"form\" (ngSubmit)=\"f.form.valid && onMiniSubmit()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"col-12\" style=\"margin-top: 20px;\">\r\n        <h2>Mini statement</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"account_num\">Account Number</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.account_num\" #account_num=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && account_num.invalid}\"\r\n                        name=\"account_num\" required />\r\n                    <div *ngIf=\"f.submitted && account_num.invalid\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"account_num.errors.required\">Account Number is required</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"AccountStartDate\">Start Date</label>\r\n                    <input type=\"date\" class=\"form-control\" [(ngModel)]=\"model.AccountStartDate\" #AccountStartDate=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && AccountStartDate.invalid}\"\r\n                        name=\"AccountStartDate\" required />\r\n                    <div *ngIf=\"f.submitted && AccountStartDate.invalid\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"AccountStartDate.errors.required\">Start Date is required</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"AccountEndDate\">End Date</label>\r\n                    <input type=\"date\" class=\"form-control\" [(ngModel)]=\"model.AccountEndDate\" #AccountEndDate=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && AccountEndDate.invalid}\"\r\n                        name=\"AccountEndDate\" required />\r\n                    <div *ngIf=\"f.submitted && AccountEndDate.invalid\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"AccountEndDate.errors.required\">End Date is required</div>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n            <button class=\"btn btn-primary btn-xs get-statement\" style=\"color: #FFF\" (click)=\"getStatement(model)\">GetStatement</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n<div class=\"col-12\" style=\"margin-top: 20px;\">\r\n    <ng-container *ngIf=\"miniStatementLists.length;else other_content\">\r\n        <table class=\"table table-bordered table-condensed\">\r\n            <tr>\r\n                <th>Transaction Type</th>\r\n                <th>Deposite Amount</th>\r\n                <th>Withdraw Amount</th>\r\n                <th>Transaction Date/Time</th>\r\n            </tr>\r\n            <tr *ngFor=\"let ministatement of miniStatementLists;let ind=index\">\r\n                <td>{{ministatement['transactionType']}}</td>\r\n                <td>{{ministatement['depositAmount']}}</td>\r\n                <td>{{ministatement['withdrawAmount']}}</td>\r\n                <td>{{ministatement['transactionDateTime']}}</td>\r\n            </tr>\r\n        </table>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"ministatementLength\">\r\n        <table class=\"table table-bordered table-condensed\">\r\n            <tr>\r\n                <th>Transaction Type</th>\r\n                <th>Deposite Amount</th>\r\n                <th>Withdraw Amount</th>\r\n                <th>Transaction Date/Time</th>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"4\" class=\"text-center\">Records not found</td>\r\n              </tr>\r\n        </table>\r\n    </ng-container>\r\n</div>"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  Admin screen. Available for Admin users\r\n</h2>\r\n\r\n<p>Here is the data received from SpringBoot API for Admin users ONLY</p>\r\n\r\n<pre>{{users$| async | json}}</pre>\r\n"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<h1>\r\n    <img src=\"https://www.radiant.digital/images/logo-white.png\" style=\"background: rgba(50,109,230,1);padding: 0 15px;margin-right:10px;\"/>{{title}}\r\n</h1>\r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <ul class=\"nav navbar-nav\" *ngIf=\"!isUser()\">\r\n      <li routerLinkActive=\"active\"><a routerLink=\"/user\">Login</a></li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav\" *ngIf=\"isUser()\">\r\n      <li routerLinkActive=\"active\"><a routerLink=\"/user\">User</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"/customer\">Customer</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"/list_account\">Account</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"/bal_enquiry\">Balance Enquiry</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"/deposit\">Deposit</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"/lockerOperations\">Locker Operations</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"/withdraw\">WithDraw</a></li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"isUser()\">\r\n      <p class=\"navbar-text\" *ngIf=\"isUser\">You are user!</p>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"/changePassword\">Change Password</a></li>\r\n      <li><button class=\"btn navbar-btn\" (click)=\"logout()\">Logout</button></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"page\">\r\n        <div class=\"page-inner\">\r\n            <div class=\"col-12 pad-left-0\">\r\n                <h2>Balance Enquiry</h2>\r\n                <div class=\"col-sm-4 pad-left-0\">\r\n                    <form [formGroup]=\"balEnquiryForm\">\r\n                        <div class=\"form-group\">\r\n                            <label>Account Number:</label>\r\n                            <input type=\"text\" formControlName=\"accountNumber\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.accountNumber.errors }\"/>\r\n                            <div *ngIf=\"submitted && f.accountNumber.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.accountNumber.errors.required\">Account Number is required</div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"cleaner\"></div>\r\n            <button type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"availableBalance()\">Search&nbsp;\r\n                <i class=\"fa fa-search\"></i>\r\n            </button>\r\n\r\n            <div *ngIf=\"showBalance\" class=\"col-12 pad-left-0 mar-top-15\">\r\n                <label>Available Amount:</label>\r\n                <input type=\"number\" id=\"availableAmount\" name=\"availableAmount\" [(ngModel)]=\"availableAmount\" value=\"{{availableAmount}}\" disabled>\r\n            </div>\r\n        </div>\r\n        <div class=\"page-inner\">\r\n            <h2>Custom Statement</h2>\r\n            <form name=\"custom-statement\" (ngSubmit)=\"custom_statement.form.valid && onSubmit()\" #custom_statement=\"ngForm\" novalidate>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"accountId\">Account Number</label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.accountId\" #accountId=\"ngModel\" [ngClass]=\"{'is-invalid':custom_statement.submitted && accountId.invalid}\"\r\n                                name=\"accountId\" required />\r\n                            <div *ngIf=\"custom_statement.submitted && accountId.invalid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"accountId.errors.required\">Account Number is required</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"fromDate\">Date From :</label>\r\n                            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"model.fromDate\" #fromDate=\"ngModel\" [ngClass]=\"{'is-invalid':custom_statement.submitted && fromDate.invalid}\"\r\n                                name=\"fromDate\" required  step=1 />\r\n                            <div *ngIf=\"custom_statement.submitted && fromDate.invalid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"fromDate.errors.required\">Date From is required</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"toDate\">Date To :</label>\r\n                            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"model.toDate\" #toDate=\"ngModel\" [ngClass]=\"{'is-invalid':custom_statement.submitted && toDate.invalid}\"\r\n                                name=\"toDate\" required step=1 />\r\n                            <div *ngIf=\"custom_statement.submitted && toDate.invalid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"toDate.errors.required\">Date To is required</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> \r\n                <button class=\"btn btn-primary btn-xs\" style=\"color: #FFF\">Submit</button>  \r\n            </form>\r\n            <div class=\"cleaner\"></div>\r\n            <div class=\"mar-t-15\">\r\n                <table *ngIf=\"showStatements\" class=\"table table-bordered table-condensed\">\r\n                    <tr>\r\n                        <th>S. No</th>\r\n                        <th>Account Number</th>\r\n                        <th>Debit</th>\r\n                        <th>Credit</th>\r\n                        <th>Transaction Date</th>\r\n                    </tr>\r\n                    <ng-container *ngIf=\"statementData.length\">\r\n                        <tr *ngFor=\"let account of statementData;let ind=index\">\r\n                            <td>{{ind+1}}</td>\r\n                            <td>{{account['accountNum']}}</td>\r\n                            <td>{{account['depositAmount']}}</td>\r\n                            <td>{{account['withdrawAmount']}}</td>\r\n                            <td>{{account['transactionDateTime']}}</td>                            \r\n                        </tr>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"!statementData.length\">\r\n                        <tr>\r\n                            <td colspan=\"8\" class=\"text-center\">Records not found</td>\r\n                        </tr>\r\n                    </ng-container>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"page\">\r\n    <div class=\"page-inner\">\r\n      <div class=\"col-12\" style=\"margin-top: 20px;\">\r\n        <h3>Change Password</h3>\r\n        <div class=\"alert alert-success\" *ngIf=\"response.length\">{{response}}</div>\r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"old_password\">Old Password</label>\r\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"model.old_password\" #old_password=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && old_password.invalid}\"\r\n                      name=\"old_password\" required />\r\n                    <div *ngIf=\"f.submitted && old_password.invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"old_password.errors.required\">Old Password is required</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"new_password\">New Password</label>\r\n                      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"model.new_password\" #new_password=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && new_password.invalid}\"\r\n                        name=\"new_password\" required />\r\n                      <div *ngIf=\"f.submitted && new_password.invalid\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"new_password.errors.required\">New Password is required</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n            </div>\r\n            <button class=\"btn btn-primary btn-xs\" style=\"color: #FFF\">Update</button>\r\n          </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"page\">\r\n    <div class=\"page-inner\">\r\n      <div class=\"col-12\" style=\"margin-top: 20px;\">\r\n        <div class=\"text-right\">\r\n          <button type=\"button\" class=\"btn btn-info btn-xs\" data-toggle=\"modal\" data-target=\"#add_customers\">Add Customer</button>\r\n        </div>\r\n        <div class=\"text-right search\">\r\n          <input [(ngModel)]=\"searchText\" placeholder=\"search text goes here\">\r\n        </div>\r\n        <h2>Customers List</h2>\r\n        <table class=\"table table-bordered table-condensed\">\r\n          <tr>\r\n            <th>S. No</th>\r\n            <th>Customer Name</th>\r\n            <th>Customer Number</th>\r\n\t\t\t<th>Date Of Birth</th>\r\n            <th>Email</th>\r\n            <th>Phone</th>\r\n            <th>Address</th>\r\n            <th width=\"100\">&nbsp;</th>\r\n          </tr>\r\n          <ng-container *ngIf=\"customers_list.length\">\r\n            <tr *ngFor=\"let customer of customers_list;let ind=index\">\r\n              <td>{{ind + 1}}</td>\r\n              <td>{{customer['firstName']}} {{customer['middleName']}} {{customer['lastName']}}</td>\r\n              <td>{{customer['customerIdNum']}}</td>\r\n\t\t\t  <td>{{customer['customerDob']}}</td>\t\t\t  \r\n              <td>{{customer['email']}}</td>\r\n              <td>{{customer['phone']}}</td>\r\n              <td>{{customer['address']['buildingName']}}, {{customer['address']['street'] }},\r\n                {{customer['address']['city'] }}</td>\r\n             \r\n\t\t\t   <td>\r\n                <a class=\"btn btn-primary btn-xs\" (click)=\"editCustomer(ind, customer, customer)\" style=\"margin-right: 10px;color:#FFF\">\r\n                  <i class=\"icon icon-pencil\"></i>\r\n                </a>\r\n                <a class=\"btn btn-success btn-xs\" *ngIf=\"customer.activeFlag == 'Y'\" title=\"Click here to De-Activate\"\r\n                  (click)=\"changeCustomerStatus(ind, customer)\" style=\"color: #FFF;\"><i class=\"icon icon-remove\"></i></a>\r\n                <a class=\"btn btn-danger btn-xs\" *ngIf=\"customer.activeFlag == 'N'\" title=\"Click here to Activate\"\r\n                  (click)=\"changeCustomerStatus(ind, customer)\" style=\"color: #FFF;\"><i class=\"icon icon-remove\"></i></a>\r\n              </td>\r\n            </tr>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"!customers_list.length\">\r\n            <tr>\r\n              <td colspan=\"8\" class=\"text-center\">Records not found</td>\r\n            </tr>\r\n          </ng-container>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"add_customers\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Add Customer</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"firstName\">First Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && firstName.invalid}\"\r\n                  name=\"firstName\" required />\r\n                <div *ngIf=\"f.submitted && firstName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"firstName.errors.required\">First Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"lastName\">Last Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && lastName.invalid}\"\r\n                  name=\"lastName\" required />\r\n                <div *ngIf=\"f.submitted && lastName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"lastName.errors.required\">Last Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"middleName\">Middle Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.middleName\" #middleName=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && middleName.invalid}\"\r\n                  name=\"middleName\" required />\r\n                <div *ngIf=\"f.submitted && middleName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"middleName.errors.required\">Middle Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\t\t  <div class=\"row\">\r\n\t\t   <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"customerIdNum\">Customer ID</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.customerIdNum\" #customerIdNum=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && customerIdNum.invalid}\"\r\n                  name=\"customerIdNum\" required />\r\n                <div *ngIf=\"f.submitted && customerIdNum.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"customerIdNum.errors.required\">Customer ID is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"customerDob\">Customer DOB</label>\r\n                <input type=\"date\" class=\"form-control\" [(ngModel)]=\"model.customerDob\" #customerDob=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && customerDob.invalid}\"\r\n                  name=\"customerDob\" required minlength=\"6\" />\r\n                <div *ngIf=\"f.submitted && customerDob.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"customerDob.errors.required\">customerDob is required</div>            \r\n                </div>\r\n              </div>\r\n            </div>\r\n\t\t\t<div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.email\" #email=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && email.invalid}\"\r\n                  name=\"email\" required _email />\r\n                <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"email.errors.required\">Email is required</div>\r\n                  <div *ngIf=\"email.errors.email\">Email must be a valid email Address</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\t\t</div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"username\">User Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.username\" #username=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && username.invalid}\"\r\n                  name=\"username\" required />\r\n                <div *ngIf=\"f.submitted && username.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"username.errors.required\">User Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"model.password\" #password=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && password.invalid}\"\r\n                  name=\"password\" required minlength=\"6\" />\r\n                <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"password.errors.required\">Password is required</div>\r\n                  <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\t\t\t<div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"phone\">Phone</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.phone\" #phone=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && phone.invalid}\"\r\n                  name=\"phone\" required />\r\n                <div *ngIf=\"f.submitted && phone.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"phone.errors.required\">Phone is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\t\t\t\r\n          </div>\r\n          <div class=\"row\">       \r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"city\">City</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.city\" #city=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && city.invalid}\"\r\n                  name=\"city\" required />\r\n                <div *ngIf=\"f.submitted && city.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"city.errors.required\">City is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"state\">State</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.state\" #state=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && state.invalid}\"\r\n                  name=\"state\" required />\r\n                <div *ngIf=\"f.submitted && state.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"state.errors.required\">State is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"street\">Street</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.street\" #street=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && street.invalid}\"\r\n                  name=\"street\" required />\r\n                <div *ngIf=\"f.submitted && street.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"street.errors.required\">Street is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--<div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"address\">Building Address</label>\r\n                <textarea class=\"form-control\" [(ngModel)]=\"model.address\" #address=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && address.invalid}\"\r\n                  name=\"address\" required></textarea>\r\n                <div *ngIf=\"f.submitted && address.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"address.errors.required\">Address is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>-->\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"buildingName\">Building Name</label>\r\n                <textarea class=\"form-control\" [(ngModel)]=\"model.buildingName\" #buildingName=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && buildingName.invalid}\"\r\n                  name=\"buildingName\" required></textarea>\r\n                <div *ngIf=\"f.submitted && buildingName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"buildingName.errors.required\">Building Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-primary btn-xs\" style=\"color: #FFF\">Create</button>\r\n          <a class=\"btn btn-default btn-xs\" data-dismiss=\"modal\" (click)=\"clearForm()\">Close</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal\" id=\"edit_customers\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <form name=\"uform\" (ngSubmit)=\"uf.form.valid && editCustomer(editIndex, model, editRow)\" #uf=\"ngForm\" novalidate>\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Edit Customer</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_firstName\">First Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._firstName\" #_firstName=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _firstName.invalid}\"\r\n                  name=\"_firstName\" required />\r\n                <div *ngIf=\"uf.submitted && _firstName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_firstName.errors.required\">First Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_lastName\">Last Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._lastName\" #_lastName=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _lastName.invalid}\"\r\n                  name=\"_lastName\" required />\r\n                <div *ngIf=\"uf.submitted && _lastName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_lastName.errors.required\">Last Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_middleName\">Middle Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._middleName\" #_middleName=\"ngModel\"\r\n                  [ngClass]=\"{'is-invalid':uf.submitted && _middleName.invalid}\" name=\"_middleName\" required />\r\n                <div *ngIf=\"uf.submitted && _middleName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_middleName.errors.required\">Middle Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\t\t  <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_customerIdNum\">Customer ID</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._customerIdNum\" #_customerIdNum=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _customerIdNum.invalid}\"\r\n                  name=\"_customerIdNum\" required />\r\n                <div *ngIf=\"uf.submitted && _customerIdNum.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_customerIdNum.errors.required\">Customer ID is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_customerDob\">Customer DOB</label>\r\n                <input type=\"date\" class=\"form-control\" [(ngModel)]=\"model._customerDob\" #_customerDob=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _customerDob.invalid}\"\r\n                  name=\"_customerDob\" required minlength=\"6\" />\r\n                <div *ngIf=\"uf.submitted && _customerDob.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_customerDob.errors.required\">customerDob is required</div>            \r\n                </div>\r\n              </div>\r\n            </div>\r\n\t\t\t<div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_email\">Email</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._email\" #_email=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _email.invalid}\"\r\n                  name=\"_email\" required _email />\r\n                <div *ngIf=\"uf.submitted && _email.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_email.errors.required\">Email is required</div>\r\n                  <div *ngIf=\"_email.errors.email\">Email must be a valid email Address</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\t\t\t</div>\r\n\t\t\t <div class=\"row\">\r\n\t\t\t <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_username\">User Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._username\" #_username=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _username.invalid}\"\r\n                  name=\"_username\" required />\r\n                <div *ngIf=\"uf.submitted && _username.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_username.errors.required\">User Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\t\t\t<div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"model._password\" #_password=\"ngModel\" name=\"_password\" />\r\n                <div *ngIf=\"uf.submitted && _password.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_password.errors.required\">Password is required</div>\r\n                  <div *ngIf=\"_password.errors.minlength\">Password must be at least 6 characters</div>\r\n                </div>\r\n                <small>If you want to change, please enter new password</small>\r\n              </div>\r\n            </div>\r\n\t\t\t<div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_phone\">Phone</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._phone\" #_phone=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _phone.invalid}\"\r\n                  name=\"_phone\" required />\r\n                <div *ngIf=\"uf.submitted && _phone.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_phone.errors.required\">Phone is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">       \r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_city\">City</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._city\" #_city=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _city.invalid}\"\r\n                  name=\"_city\" required />\r\n                <div *ngIf=\"uf.submitted && _city.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_city.errors.required\">City is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_state\">State</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._state\" #_state=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _state.invalid}\"\r\n                  name=\"_state\" required />\r\n                <div *ngIf=\"uf.submitted && _state.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_state.errors.required\">State is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_street\">Street</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._street\" #_street=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _street.invalid}\"\r\n                  name=\"_street\" required />\r\n                <div *ngIf=\"uf.submitted && _street.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_street.errors.required\">Street is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--<div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_address\">Building Address</label>\r\n                <textarea class=\"form-control\" [(ngModel)]=\"model._address\" #_address=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _address.invalid}\"\r\n                  name=\"_address\" required></textarea>\r\n                <div *ngIf=\"uf.submitted && _address.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_address.errors.required\">Address is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>-->\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_buildingName\">Building Name</label>\r\n                <textarea class=\"form-control\" [(ngModel)]=\"model._buildingName\" #_buildingName=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _buildingName.invalid}\"\r\n                  name=\"_buildingName\" required></textarea>\r\n                <div *ngIf=\"uf.submitted && _buildingName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_buildingName.errors.required\">Building Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-primary btn-xs\" style=\"color: #FFF;\">Update</button>\r\n          <a class=\"btn btn-default btn-xs\" data-dismiss=\"modal\" (click)=\"clearForm()\">Close</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"deleeteConfirm\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <!-- <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate> -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Change Customer Status</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure? <br />Do you want to Change Customer Status</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"changeCustomerStatus(deleteIndex, deleteRow)\">Confirm</button>\r\n        <a class=\"btn btn-default btn-xs\" data-dismiss=\"modal\" (click)=\"clearForm()\">Close</a>\r\n      </div>\r\n      <!-- </form> -->\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"page\">\r\n      <div class=\"page-inner\">\r\n          <div class=\"col-12 pad-left-0\">\r\n              <h2>Deposit</h2>\r\n              <div class=\"col-sm-4 pad-left-0\">\r\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"accountNum\">Account Number:</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.accountNum\" #accountNum=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && accountNum.invalid}\"\r\n                            name=\"accountNum\" required />\r\n                        <div *ngIf=\"f.submitted && accountNum.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"accountNum.errors.required\">Account Number is required</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"balance\">Balance:</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.balance\" #balance=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && balance.invalid}\"\r\n                            name=\"balance\" required />\r\n                        <div *ngIf=\"f.submitted && balance.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"balance.errors.required\">Balance amount is required</div>\r\n                        </div>\r\n                    </div>\r\n                      <button class=\"btn btn-primary btn-xs\" style=\"color: #FFF\">Submit</button>\r\n                  </form>\r\n                  <p *ngIf=\"successMessage\" class=\"successMsg\">Amount Deposited Successfully!</p>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  Home screen. Authentication and Authroization example using springboot and JWT\r\n</h2>\r\n"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"page\">\r\n      <div class=\"page-inner\">\r\n            <div class=\"col-12\">\r\n                <h2>Locker Operations</h2>\r\n                    <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"lockerNumber\">Locker Number</label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.lockerNumber\" #lockerNumber=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && lockerNumber.invalid}\"\r\n                                    name=\"lockerNumber\" required />\r\n                                <div *ngIf=\"f.submitted && lockerNumber.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"lockerNumber.errors.required\">Locker Number is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"lockerOperationDateTime\">Date</label>\r\n                                <input type=\"date\" class=\"form-control\" [(ngModel)]=\"model.lockerOperationDateTime\" #lockerOperationDateTime=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && lockerOperationDateTime.invalid}\"\r\n                                    name=\"lockerOperationDateTime\" required />\r\n                                <div *ngIf=\"f.submitted && lockerOperationDateTime.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"lockerOperationDateTime.errors.required\">Date is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"lockerOperationInTime\">In Time</label>\r\n                                <input type=\"datetime-local\" class=\"form-control\" [(ngModel)]=\"model.lockerOperationInTime\" #lockerOperationInTime=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && lockerOperationInTime.invalid}\"\r\n                                    name=\"lockerOperationInTime\" required  step=1 />\r\n                                <div *ngIf=\"f.submitted && lockerOperationInTime.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"lockerOperationInTime.errors.required\">In Time is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"lockerOperationOutTime\">Out Time</label>\r\n                                <input type=\"datetime-local\" class=\"form-control\" [(ngModel)]=\"model.lockerOperationOutTime\" #lockerOperationOutTime=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && lockerOperationOutTime.invalid}\"\r\n                                    name=\"lockerOperationOutTime\" required step=1 />\r\n                                <div *ngIf=\"f.submitted && lockerOperationOutTime.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"lockerOperationOutTime.errors.required\">Out Time is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> \r\n                <button class=\"btn btn-primary btn-xs\" style=\"color: #FFF\">Submit</button>  \r\n                </form>\r\n                <p *ngIf=\"successMessage\" class=\"successMsg\">Locker Operation Saved Successfully!</p>\r\n            </div>\r\n\r\n            <div class=\"col-12\">\r\n                <h2>Report Locker</h2>\r\n                <form [formGroup]=\"reportLockerForm\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\" style=\"padding-left: 0px;\">\r\n                            <label>Locker Number:</label>\r\n                            <input type=\"text\" formControlName=\"lockerNumber\" class=\"form-control\"/>\r\n                            <!-- <div *ngIf=\"submitted && f.lockerNumber.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.lockerNumber.errors.required\">Locker Number is required</div>\r\n                            </div> -->\r\n                        </div>    \r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\">\r\n                                <label>Locker Operation Date</label>\r\n                                <input type=\"date\" class=\"form-control\" formControlName=\"lockerOptDate\" />\r\n                                <!-- <div *ngIf=\"f.submitted && lockerOptDate.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"lockerOptDate.errors.required\">Locker Operation Date is required</div>\r\n                                </div> -->\r\n                            </div>\r\n                        </div>                    \r\n                    </div>\r\n                    <div class=\"cleaner\"></div>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"showLockerReport()\">Submit&nbsp;\r\n                        <i class=\"fa fa-search\"></i>\r\n                    </button>\r\n                </form>                \r\n                <div class=\"cleaner\"></div>\r\n                <div class=\"mar-t-15\">\r\n                    <table *ngIf=\"showTable\" class=\"table table-bordered table-condensed\">\r\n                        <tr>\r\n                            <th>Locker Number</th>\r\n                            <th>Locker Operation In Time</th>\r\n                            <th>Locker Operation Out Time</th>\r\n                        </tr>\r\n                        <ng-container *ngIf=\"reportLockerData.length\">\r\n                            <tr *ngFor=\"let locker of reportLockerData;let ind=index\">\r\n                                <td>{{locker['lockerNum']}}</td>\r\n                                <td>{{locker['lockerOperationInTime']}}</td>\r\n                                <td>{{locker['lockerOperationOutTime']}}</td>                            \r\n                            </tr>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"!reportLockerData.length\">\r\n                            <tr>\r\n                                <td colspan=\"8\" class=\"text-center\">Records not found</td>\r\n                            </tr>\r\n                        </ng-container>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"col-12\">\r\n                <h2>Add Locker</h2>\r\n                <form name=\"add_locker\" (ngSubmit)=\"fr.form.valid && addLocker()\" #fr=\"ngForm\" novalidate>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"accountNum\">Account Number:</label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.accountNum\" #accountNum=\"ngModel\" [ngClass]=\"{'is-invalid':fr.submitted && accountNum.invalid}\"\r\n                                    name=\"accountNum\" required />\r\n                                <div *ngIf=\"fr.submitted && accountNum.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"accountNum.errors.required\">Account Number is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"lockerNumber\">Locker Number:</label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.lockerNumber\" #lockerNumber=\"ngModel\" [ngClass]=\"{'is-invalid':fr.submitted && lockerNumber.invalid}\"\r\n                                    name=\"lockerNumber\" required />\r\n                                <div *ngIf=\"fr.submitted && lockerNumber.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"lockerNumber.errors.required\">Locker Number is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"lockerAssignedBy\">Locker AssignedBy:</label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.lockerAssignedBy\" #lockerAssignedBy=\"ngModel\" [ngClass]=\"{'is-invalid':fr.submitted && lockerAssignedBy.invalid}\"\r\n                                    name=\"lockerAssignedBy\" required />\r\n                                <div *ngIf=\"fr.submitted && lockerAssignedBy.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"lockerAssignedBy.errors.required\">locker AssignedBy is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <button class=\"btn btn-primary btn-xs\" style=\"color: #FFF\">Submit</button>\r\n                </form>\r\n                <p *ngIf=\"successMessage\" class=\"successMsg\">Added Locker  Successfully!</p>\r\n            </div>\r\n\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<!-- <p>Non-admin username and password: john.doe and jwtpass</p>\r\n<p>Admin user: admin.admin and jwtpass</p> -->\r\n\r\n<div class=\"form-wrapper\">\r\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n      <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\"\r\n             required placeholder=\"Username\"/>\r\n      <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\r\n             required placeholder=\"Password\"/>\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Sign In</button>\r\n    </div>\r\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"page\">\r\n    <div class=\"page-inner\">\r\n      <div class=\"col-12\" style=\"margin-top: 20px;\">\r\n        <div class=\"text-right\">\r\n          <button type=\"button\" class=\"btn btn-info btn-xs\" data-toggle=\"modal\" data-target=\"#add_accounts\">Add User</button>\r\n        </div>\r\n        <h2>User's List</h2>\r\n        <table class=\"table table-bordered table-condensed\">\r\n          <tr>\r\n            <th>S. No</th>\r\n            <th>Full Name</th>\r\n            <th>User Name</th>\r\n            <th>Email</th>\r\n            <th>Phone</th>\r\n            <th>Address</th>\r\n            <th width=\"100\">&nbsp;</th>\r\n          </tr>\r\n          <ng-container *ngIf=\"accounts_list.length\">\r\n            <tr *ngFor=\"let account of accounts_list;let ind=index\">\r\n              <td>{{ind + 1}}</td>\r\n              <td>{{account['firstName']}} {{account['middleName']}} {{account['lastName']}}</td>\r\n              <td>{{account['username']}}</td>\r\n              <td>{{account['email']}}</td>\r\n              <td>{{account['phone']}}</td>\r\n              <td>{{account['address']['buildingName']}}, {{account['address']['street'] }},\r\n                {{account['address']['city'] }}</td>\r\n              <td>\r\n                <a class=\"btn btn-primary btn-xs\" (click)=\"editAccount(ind, account, account)\" style=\"margin-right: 10px;color:#FFF\">\r\n                  <i class=\"icon icon-pencil\"></i>\r\n                </a>\r\n                <a class=\"btn btn-success btn-xs\" *ngIf=\"account.activeFlag == 'Y'\" title=\"Click here to De-Activate\"\r\n                  (click)=\"changeAccountStatus(ind, account)\" style=\"color: #FFF;\"><i class=\"icon icon-remove\"></i></a>\r\n                <a class=\"btn btn-danger btn-xs\" *ngIf=\"account.activeFlag == 'N'\" title=\"Click here to Activate\"\r\n                  (click)=\"changeAccountStatus(ind, account)\" style=\"color: #FFF;\"><i class=\"icon icon-remove\"></i></a>\r\n              </td>\r\n            </tr>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"!accounts_list.length\">\r\n            <tr>\r\n              <td colspan=\"7\" class=\"text-center\">Records not found</td>\r\n            </tr>\r\n          </ng-container>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"add_accounts\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Add User</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"firstName\">First Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && firstName.invalid}\"\r\n                  name=\"firstName\" required />\r\n                <div *ngIf=\"f.submitted && firstName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"firstName.errors.required\">First Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"lastName\">Last Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && lastName.invalid}\"\r\n                  name=\"lastName\" required />\r\n                <div *ngIf=\"f.submitted && lastName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"lastName.errors.required\">Last Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"middleName\">Middle Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.middleName\" #middleName=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && middleName.invalid}\"\r\n                  name=\"middleName\" required />\r\n                <div *ngIf=\"f.submitted && middleName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"middleName.errors.required\">Middle Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"username\">User Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.username\" #username=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && username.invalid}\"\r\n                  name=\"username\" required />\r\n                <div *ngIf=\"f.submitted && username.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"username.errors.required\">User Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"model.password\" #password=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && password.invalid}\"\r\n                  name=\"password\" required minlength=\"6\" />\r\n                <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"password.errors.required\">Password is required</div>\r\n                  <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.email\" #email=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && email.invalid}\"\r\n                  name=\"email\" required email />\r\n                <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"email.errors.required\">Email is required</div>\r\n                  <div *ngIf=\"email.errors.email\">Email must be a valid email Address</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"phone\">Phone</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.phone\" #phone=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && phone.invalid}\"\r\n                  name=\"phone\" required />\r\n                <div *ngIf=\"f.submitted && phone.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"phone.errors.required\">Phone is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"city\">City</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.city\" #city=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && city.invalid}\"\r\n                  name=\"city\" required />\r\n                <div *ngIf=\"f.submitted && city.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"city.errors.required\">City is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"state\">State</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.state\" #state=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && state.invalid}\"\r\n                  name=\"state\" required />\r\n                <div *ngIf=\"f.submitted && state.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"state.errors.required\">State is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"street\">Street</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.street\" #street=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && street.invalid}\"\r\n                  name=\"street\" required />\r\n                <div *ngIf=\"f.submitted && street.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"street.errors.required\">Street is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--<div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"address\">Building Address</label>\r\n                <textarea class=\"form-control\" [(ngModel)]=\"model.address\" #address=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && address.invalid}\"\r\n                  name=\"address\" required></textarea>\r\n                <div *ngIf=\"f.submitted && address.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"address.errors.required\">Address is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>-->\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"buildingName\">Building Name</label>\r\n                <textarea class=\"form-control\" [(ngModel)]=\"model.buildingName\" #buildingName=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && buildingName.invalid}\"\r\n                  name=\"buildingName\" required></textarea>\r\n                <div *ngIf=\"f.submitted && buildingName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"buildingName.errors.required\">Building Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-primary btn-xs\" style=\"color: #FFF\">Create</button>\r\n          <a class=\"btn btn-default btn-xs\" data-dismiss=\"modal\" (click)=\"clearForm()\">Close</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal\" id=\"edit_accounts\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <form name=\"uform\" (ngSubmit)=\"uf.form.valid && editAccount(editIndex, model, editRow)\" #uf=\"ngForm\" novalidate>\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Edit User</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_firstName\">First Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._firstName\" #_firstName=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _firstName.invalid}\"\r\n                  name=\"_firstName\" required />\r\n                <div *ngIf=\"uf.submitted && _firstName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_firstName.errors.required\">First Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_lastName\">Last Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._lastName\" #_lastName=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _lastName.invalid}\"\r\n                  name=\"_lastName\" required />\r\n                <div *ngIf=\"uf.submitted && _lastName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_lastName.errors.required\">Last Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_middleName\">Middle Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._middleName\" #_middleName=\"ngModel\"\r\n                  [ngClass]=\"{'is-invalid':uf.submitted && _middleName.invalid}\" name=\"_middleName\" required />\r\n                <div *ngIf=\"uf.submitted && _middleName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_middleName.errors.required\">Middle Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_username\">User Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._username\" #_username=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _username.invalid}\"\r\n                  name=\"_username\" required />\r\n                <div *ngIf=\"uf.submitted && _username.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_username.errors.required\">User Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"model._password\" #_password=\"ngModel\" name=\"_password\" />\r\n                <div *ngIf=\"uf.submitted && _password.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_password.errors.required\">Password is required</div>\r\n                  <div *ngIf=\"_password.errors.minlength\">Password must be at least 6 characters</div>\r\n                </div>\r\n                <small>If you want to change, please enter new password</small>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_email\">Email</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._email\" #_email=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _email.invalid}\"\r\n                  name=\"_email\" required _email />\r\n                <div *ngIf=\"uf.submitted && _email.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_email.errors.required\">Email is required</div>\r\n                  <div *ngIf=\"_email.errors.email\">Email must be a valid email Address</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_phone\">Phone</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._phone\" #_phone=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _phone.invalid}\"\r\n                  name=\"_phone\" required />\r\n                <div *ngIf=\"uf.submitted && _phone.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_phone.errors.required\">Phone is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_city\">City</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._city\" #_city=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _city.invalid}\"\r\n                  name=\"_city\" required />\r\n                <div *ngIf=\"uf.submitted && _city.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_city.errors.required\">City is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_state\">State</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._state\" #_state=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _state.invalid}\"\r\n                  name=\"_state\" required />\r\n                <div *ngIf=\"uf.submitted && _state.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_state.errors.required\">State is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_street\">Street</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model._street\" #_street=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _street.invalid}\"\r\n                  name=\"_street\" required />\r\n                <div *ngIf=\"uf.submitted && _street.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_street.errors.required\">Street is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--<div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_address\">Building Address</label>\r\n                <textarea class=\"form-control\" [(ngModel)]=\"model._address\" #_address=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _address.invalid}\"\r\n                  name=\"_address\" required></textarea>\r\n                <div *ngIf=\"uf.submitted && _address.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_address.errors.required\">Address is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>-->\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"_buildingName\">Building Name</label>\r\n                <textarea class=\"form-control\" [(ngModel)]=\"model._buildingName\" #_buildingName=\"ngModel\" [ngClass]=\"{'is-invalid':uf.submitted && _buildingName.invalid}\"\r\n                  name=\"_buildingName\" required></textarea>\r\n                <div *ngIf=\"uf.submitted && _buildingName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"_buildingName.errors.required\">Building Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-primary btn-xs\" style=\"color: #FFF;\">Update</button>\r\n          <a class=\"btn btn-default btn-xs\" data-dismiss=\"modal\" (click)=\"clearForm()\">Close</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"deleeteConfirm\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <!-- <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate> -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Change User Status</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure? <br />Do you want to Change User Status</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"changeAccountStatus(deleteIndex, deleteRow)\">Confirm</button>\r\n        <a class=\"btn btn-default btn-xs\" data-dismiss=\"modal\" (click)=\"clearForm()\">Close</a>\r\n      </div>\r\n      <!-- </form> -->\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"page\">\r\n      <div class=\"page-inner\">\r\n          <div class=\"col-12 pad-left-0\">\r\n              <h2>Withdraw</h2>\r\n              <div class=\"col-sm-4 pad-left-0\">\r\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"accountNum\">Account Number:</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.accountNum\" #accountNum=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && accountNum.invalid}\"\r\n                            name=\"accountNum\" required />\r\n                        <div *ngIf=\"f.submitted && accountNum.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"accountNum.errors.required\">Account Number is required</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"balance\">Balance:</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.balance\" #balance=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && balance.invalid}\"\r\n                            name=\"balance\" required />\r\n                        <div *ngIf=\"f.submitted && balance.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"balance.errors.required\">Balance amount is required</div>\r\n                        </div>\r\n                    </div>\r\n                      <button class=\"btn btn-primary btn-xs\" style=\"color: #FFF\">Submit</button>\r\n                  </form>\r\n                  <p *ngIf=\"successMessage\" class=\"successMsg\">Amount Withdraw Successfully!</p>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_constant__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService() {
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["JwtHelper"]();
    }
    UserService.prototype.login = function (accessToken) {
        var decodedToken = this.jwtHelper.decodeToken(accessToken);
        console.log(decodedToken);
        this.isAdmin = decodedToken.authorities.some(function (el) { return el === 'ADMIN_USER'; });
        this.accessToken = accessToken;
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__services_auth_constant__["a" /* TOKEN_NAME */], accessToken);
    };
    UserService.prototype.logout = function () {
        this.accessToken = null;
        this.isAdmin = false;
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_2__services_auth_constant__["a" /* TOKEN_NAME */]);
    };
    UserService.prototype.isAdminUser = function () {
        return this.isAdmin;
    };
    UserService.prototype.isUser = function () {
        console.log(this.accessToken);
        return this.accessToken && !this.isAdmin;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(111);


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TOKEN_AUTH_USERNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TOKEN_AUTH_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOKEN_NAME; });
var TOKEN_AUTH_USERNAME = 'sciits-client';
var TOKEN_AUTH_PASSWORD = 'sciits-secret';
var TOKEN_NAME = 'access_token';
//# sourceMappingURL=auth.constant.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_constant__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = AuthenticationService_1 = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var body = "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password) + "&grant_type=password";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Basic ' + btoa(__WEBPACK_IMPORTED_MODULE_3__services_auth_constant__["b" /* TOKEN_AUTH_USERNAME */] + ':' + __WEBPACK_IMPORTED_MODULE_3__services_auth_constant__["c" /* TOKEN_AUTH_PASSWORD */]));
        return this.http.post(AuthenticationService_1.AUTH_TOKEN, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.access_token) {
                _this.accessToken = res.access_token;
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__services_auth_constant__["a" /* TOKEN_NAME */], res.access_token);
                return res.access_token;
            }
            return null;
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.accessToken = null;
        this.isAdmin = false;
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_3__services_auth_constant__["a" /* TOKEN_NAME */]);
        //window.location.href = "http://localhost/index.html";
    };
    AuthenticationService.prototype.isUser = function () {
        return this.accessToken ? true : (localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__services_auth_constant__["a" /* TOKEN_NAME */]) ? true : false);
    };
    return AuthenticationService;
}());
AuthenticationService.AUTH_TOKEN = '/auth/api/v1/user/login';
AuthenticationService = AuthenticationService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthenticationService);

var AuthenticationService_1, _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountComponent = (function () {
    function AccountComponent(_data, ref) {
        this._data = _data;
        this.ref = ref;
        this.model = {};
        this.accountsLists = [];
        this.miniStatementLists = [];
        this.ministatementLength = false;
        this.editIndex = -1;
        this.deleteIndex = -1;
        this.accountTypeArr = [{ 'id': 'S', 'name': 'S' }, { 'id': 'J', 'name': 'J' }, { 'id': 'T', 'name': 'T' }, { 'id': 'C', 'name': 'C' }];
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    AccountComponent.prototype.onSubmit = function () {
        var _this = this;
        if (Object.keys(this.model).length) {
            if (this._data.mode == "local") {
                this.accountsLists.push(this.model);
            }
            else {
                var new_data = {};
                new_data["account_num"] = this.model.account_num;
                new_data["account_type"] = this.model.account_type;
                new_data["balance"] = this.model.balance;
                new_data["customer_id"] = this.model.customer_id;
                new_data["flag"] = "Y";
                this._data.postData('/account/create', new_data).subscribe(function (data) {
                    _this.loadData();
                    _this.ref.markForCheck();
                });
            }
            this.model = {};
            $("#adding_accounts").modal('hide');
            this.ref.markForCheck();
        }
    };
    AccountComponent.prototype.onMiniSubmit = function () {
        if (Object.keys(this.model).length) {
        }
    };
    AccountComponent.prototype.ngAfterViewInit = function () {
        this.loadData();
    };
    AccountComponent.prototype.loadData = function () {
        var _this = this;
        this._data.getAccount().subscribe(function (data) {
            _this.accountsLists = data;
            _this.ref.markForCheck();
        });
    };
    AccountComponent.prototype.deleteAccount = function (index, row) {
        var _this = this;
        if (!this.isDelete) {
            this.deleteIndex = index;
            this.deleteRow = row;
            this.isDelete = true;
            $("#deleting_accounts").modal('show');
        }
        else {
            this.deleteIndex = -1;
            this.isDelete = false;
            if (this._data.mode == "local") {
                this.accountsLists.splice(index, 1);
            }
            else {
                this._data.deleteData("/account/delete/" + row['account_num'], row).subscribe(function (data) {
                    _this.loadData();
                    _this.ref.markForCheck();
                });
            }
            $("#deleting_accounts").modal('hide');
        }
        this.ref.markForCheck();
    };
    AccountComponent.prototype.editAccount = function (index, data, row) {
        var _this = this;
        if (!this.isEdit) {
            this.editIndex = index;
            this.isEdit = true;
            for (var key in data) {
                var newKey = "_" + key;
                this.model[newKey] = data[key];
            }
            $("#editing_accounts").modal('show');
        }
        else {
            var new_data = {};
            for (var key in data) {
                var newKey = key.substr(1);
                new_data[newKey] = data[key];
            }
            if (this._data.mode == "local") {
                this.accountsLists[index] = new_data;
            }
            else {
                new_data["account_num"] = data['_account_num'];
                new_data["account_type"] = data['_account_type'];
                new_data["balance"] = data['_balance'];
                new_data["customer_id"] = data['_customer_id'];
                new_data["flag"] = data['_flag'];
                this._data.updateData("/account/update", new_data).subscribe(function (data) {
                    _this.loadData();
                    _this.ref.markForCheck();
                });
            }
            this.editIndex = -1;
            this.isEdit = false;
            $("#editing_accounts").modal('hide');
        }
        this.ref.markForCheck();
    };
    AccountComponent.prototype.getStatement = function (model) {
        var _this = this;
        console.log(model["account_num"]);
        this._data.getministatement("/deposit/transactions?accountNumber=" + model["account_num"]).subscribe(function (data) {
            if (data && data.length) {
                _this.miniStatementLists = data;
                _this.ministatementLength = false;
                console.log("data", data);
            }
            else {
                _this.ministatementLength = true;
            }
            _this.ref.markForCheck();
        });
    };
    AccountComponent.prototype.clearForm = function () {
        this.model = {};
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(188),
        styles: [__webpack_require__(176)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], AccountComponent);

var _a, _b;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(appDataService) {
        this.appDataService = appDataService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.users$ = this.appDataService.getUsers();
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(189),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceEnquiryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BalanceEnquiryComponent = (function () {
    function BalanceEnquiryComponent(formBuilder, di, ref, activatedRoute) {
        this.formBuilder = formBuilder;
        this.di = di;
        this.ref = ref;
        this.activatedRoute = activatedRoute;
        this.accountNumber = "";
        this.availableAmount = "";
        this.submitted = false;
        this.model = {};
        this.statementData = [];
    }
    BalanceEnquiryComponent.prototype.ngOnInit = function () {
        this.balEnquiryForm = this.formBuilder.group({
            accountNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    Object.defineProperty(BalanceEnquiryComponent.prototype, "f", {
        get: function () { return this.balEnquiryForm.controls; },
        enumerable: true,
        configurable: true
    });
    BalanceEnquiryComponent.prototype.availableBalance = function () {
        var _this = this;
        var tempValue = this.balEnquiryForm.value;
        var url = "/balance?accountnumber=" + tempValue.accountNumber;
        this.di.getBalance(url).subscribe(function (data) {
            _this.balanceEnquiryData = data;
            if (tempValue.accountNumber == _this.balanceEnquiryData.accountNum) {
                _this.availableAmount = _this.balanceEnquiryData.balance;
                return _this.availableAmount;
            }
            _this.ref.markForCheck();
        });
        this.showBalance = true;
    };
    BalanceEnquiryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.showStatements = true;
        this.di.getStatements('/deposit/getbankstatement?accountNum=' + this.model.accountId + '&fromDate=' + this.model.fromDate + '&toDate=' + this.model.toDate).subscribe(function (data) {
            _this.statementData = data;
            _this.ref.markForCheck();
        });
    };
    return BalanceEnquiryComponent;
}());
BalanceEnquiryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-balance-enquiry',
        template: __webpack_require__(191),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__["a" /* AppDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], BalanceEnquiryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=balance-enquiry.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(_data, ref) {
        this._data = _data;
        this.ref = ref;
        this.model = {};
        this._baseURL = '/auth/api/v1/changepassword';
        this.response = "";
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        if (Object.keys(this.model).length) {
            if (this._data.mode == "local") {
                console.log(this.model);
            }
            else {
                console.log(this.model);
                var new_data = {};
                new_data["oldPassword"] = "";
                new_data["newPassword"] = "";
                var data = this.model;
                var keyLen = 0;
                for (var key in data) {
                    var newKey = key;
                    if (newKey == "old_password") {
                        new_data["oldPassword"] = data[key];
                    }
                    else if (newKey == "new_password") {
                        new_data["newPassword"] = data[key];
                    }
                    else {
                        //new_data[newKey] = data[key];
                    }
                }
                this._data.postData(this._baseURL, new_data).subscribe(function (data) {
                    _this.response = data;
                    _this.model = {};
                    _this.ref.markForCheck();
                });
            }
            this.ref.markForCheck();
        }
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__(192),
        styles: [__webpack_require__(180)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], ChangePasswordComponent);

var _a, _b;
//# sourceMappingURL=change-password.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomersComponent = (function () {
    function CustomersComponent(_data, ref) {
        this._data = _data;
        this.ref = ref;
        this.model = {};
        this.customers_list = [];
        this.editIndex = -1;
        this.deleteIndex = -1;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    CustomersComponent.prototype.onSubmit = function () {
        var _this = this;
        if (Object.keys(this.model).length) {
            if (this._data.mode == "local") {
                this.customers_list.push(this.model);
            }
            else {
                var new_data = {};
                new_data["address"] = {};
                new_data["address"]["activeFlag"] = "Y";
                new_data["roleId"] = 3;
                new_data["activeFlag"] = "Y";
                new_data["customerActiveFlag"] = "Y";
                var data = this.model;
                var keyLen = 0;
                for (var key in data) {
                    var newKey = key;
                    if (newKey == "buildingName") {
                        new_data["address"]["buildingName"] = data[key];
                    }
                    else if (newKey == "street") {
                        new_data["address"]["street"] = data[key];
                    }
                    else if (newKey == "city") {
                        new_data["address"]["city"] = data[key];
                    }
                    else if (newKey == "state") {
                        new_data["address"]["state"] = data[key];
                    }
                    else if (newKey == "customerDob") {
                        new_data["customerDob"] = data[key];
                    }
                    else {
                        new_data[newKey] = data[key];
                    }
                }
                new_data["fax"] = "233324";
                this._data.postData("/customer", new_data).subscribe(function (data) {
                    _this.loadData();
                    _this.ref.markForCheck();
                });
            }
            this.model = {};
            $("#add_customers").modal('hide');
            this.ref.markForCheck();
        }
    };
    CustomersComponent.prototype.ngAfterViewInit = function () {
        this.loadData();
    };
    CustomersComponent.prototype.loadData = function () {
        var _this = this;
        console.log("loadData");
        this._data.getCustomer().subscribe(function (data) {
            console.log(data);
            _this.customers_list = data;
            _this.ref.markForCheck();
        });
    };
    CustomersComponent.prototype.changeCustomerStatus = function (index, row) {
        var _this = this;
        if (!this.isDelete) {
            this.deleteIndex = index;
            this.deleteRow = row;
            this.isDelete = true;
            $("#deleeteConfirm").modal('show');
        }
        else {
            if (this._data.mode == "local") {
                this.customers_list[index]['activeFlag'] = row.activeFlag == 'Y' ? 'N' : 'Y';
                this.customers_list[index]['address']['activeFlag'] = row['address'].activeFlag == 'Y' ? 'N' : 'Y';
                this.customers_list[index]['customerActiveFlag'] = row.activeFlag == 'Y' ? 'N' : 'Y';
                this.customers_list[index]['customerDob'] = this.customers_list[index]['customerDob'];
            }
            else {
                row["fax"] = "23332454";
                row.customerActiveFlag = row.activeFlag == 'Y' ? 'N' : 'Y';
                row['address'].activeFlag = row['address'].activeFlag == 'Y' ? 'N' : 'Y';
                row.activeFlag = row.activeFlag == 'Y' ? 'N' : 'Y';
                row["customerDob"] = row["customerDob"];
                delete row["userLoginInfo"];
                delete row["username"];
                delete row["password"];
                this._data.updateData("/customer/" + row['customerId'], row).subscribe(function (data) {
                    _this.loadData();
                    _this.ref.markForCheck();
                });
            }
            this.deleteIndex = -1;
            this.isDelete = false;
            $("#deleeteConfirm").modal('hide');
        }
        this.ref.markForCheck();
    };
    CustomersComponent.prototype.editCustomer = function (index, data, row) {
        var _this = this;
        if (!this.isEdit) {
            this.editIndex = index;
            this.editRow = row;
            this.isEdit = true;
            for (var key in data) {
                var newKey = "_" + key;
                if (key != "password") {
                    if (key == "address") {
                        this.model["_buildingName"] = data[key]["buildingName"];
                        this.model["_street"] = data[key]["street"];
                        this.model["_city"] = data[key]["city"];
                        this.model["_state"] = data[key]["state"];
                    }
                    else {
                        this.model[newKey] = data[key];
                    }
                }
            }
            this.model["_username"] = data["userLoginInfo"] ? data["userLoginInfo"]["username"] : "";
            $("#edit_customers").modal('show');
        }
        else {
            var new_data = {};
            new_data["address"] = {};
            //new_data["userLoginInfo"] = {};
            new_data["address"]["activeFlag"] = "Y";
            new_data["customerActiveFlag"] = "Y";
            new_data["fax"] = "23332454";
            for (var key in data) {
                if (key != "userLoginInfo") {
                    var newKey = key.substr(1);
                    if (newKey != "password") {
                        if (newKey == "buildingName") {
                            new_data["address"]["buildingName"] = data[key];
                        }
                        else if (newKey == "street") {
                            new_data["address"]["street"] = data[key];
                        }
                        else if (newKey == "city") {
                            new_data["address"]["city"] = data[key];
                        }
                        else if (newKey == "state") {
                            new_data["address"]["state"] = data[key];
                        }
                        else if (newKey == "username") {
                            //new_data["userLoginInfo"]["username"] = data[key];
                        }
                        else if (newKey == "userLoginInfo") {
                            //new_data["userLoginInfo"]["username"] = data[key];
                        }
                        else if (newKey == "customerDob") {
                            new_data["customerDob"] = data[key];
                        }
                        else {
                            new_data[newKey] = data[key];
                        }
                    }
                    else {
                        //new_data["userLoginInfo"]['password'] = this.customers_list[index]['password'];
                    }
                }
            }
            if (this._data.mode == "local") {
                this.customers_list[index] = new_data;
            }
            else {
                this._data.updateData("/customer/" + row['customerId'], new_data).subscribe(function (data) {
                    _this.loadData();
                    _this.ref.markForCheck();
                });
            }
            this.editIndex = -1;
            this.isEdit = false;
            //this.model = {};
            $("#edit_customers").modal('hide');
        }
        this.ref.markForCheck();
    };
    CustomersComponent.prototype.clearForm = function () {
        this.model = {};
    };
    return CustomersComponent;
}());
CustomersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customers',
        template: __webpack_require__(193),
        styles: [__webpack_require__(181)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], CustomersComponent);

var _a, _b;
//# sourceMappingURL=customers.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepositComponent = (function () {
    function DepositComponent(_data, ref) {
        this._data = _data;
        this.ref = ref;
        this.model = {};
        this.successMessage = false;
    }
    DepositComponent.prototype.ngOnInit = function () {
    };
    DepositComponent.prototype.onSubmit = function () {
        var _this = this;
        if (Object.keys(this.model).length) {
            if (this._data.mode == "local") {
                console.log(this.model);
            }
            else {
                console.log(this.model);
                var new_data = {};
                new_data["accountNum"] = "";
                new_data["balance"] = "";
                var data = this.model;
                var keyLen = 0;
                for (var key in data) {
                    var newKey = key;
                    if (newKey == "accountNum") {
                        new_data["accountNum"] = data[key];
                    }
                    else if (newKey == "balance") {
                        new_data["balance"] = data[key];
                    }
                    else {
                        //new_data[newKey] = data[key];
                    }
                }
                this._data.postData("/deposit", new_data).subscribe(function (data) {
                    console.log(data);
                    _this.successMessage = true;
                    _this.ref.markForCheck();
                });
            }
            this.ref.markForCheck();
        }
    };
    return DepositComponent;
}());
DepositComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-deposit',
        template: __webpack_require__(194),
        styles: [__webpack_require__(182)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], DepositComponent);

var _a, _b;
//# sourceMappingURL=deposit.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminAuthGuard = (function () {
    function AdminAuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AdminAuthGuard.prototype.canActivate = function (route, state) {
        var isAdmin = this.userService.isAdminUser();
        if (isAdmin) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    return AdminAuthGuard;
}());
AdminAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], AdminAuthGuard);

var _a, _b;
//# sourceMappingURL=admin-auth-guard.service.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_constant__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])(__WEBPACK_IMPORTED_MODULE_3__services_auth_constant__["a" /* TOKEN_NAME */], this.userService.accessToken)) {
            return true;
        }
        else {
            this.router.navigate(['login'], { queryParams: { redirectTo: state.url } });
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(195),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockerOperationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LockerOperationsComponent = (function () {
    function LockerOperationsComponent(_data, ref, formBuilder) {
        this._data = _data;
        this.ref = ref;
        this.formBuilder = formBuilder;
        this.model = {};
        this.successMessage = false;
        this._baseURL = 'http://192.168.100.137:9083';
        this.reportLockerData = [];
        this.submitted = false;
    }
    LockerOperationsComponent.prototype.ngOnInit = function () {
        this.reportLockerForm = this.formBuilder.group({
            lockerNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            lockerOptDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    LockerOperationsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (Object.keys(this.model).length) {
            if (this._data.mode == "local") {
            }
            else {
                var new_data = {};
                new_data["lockerNumber"] = "";
                new_data["lockerOperationDateTime"] = "";
                new_data["lockerOperationInTime"] = "";
                new_data["lockerOperationOutTime"] = "";
                new_data["lockerModifiedBy"] = 3;
                var data = this.model;
                var keyLen = 0;
                for (var key in data) {
                    var newKey = key;
                    if (newKey == "lockerNumber") {
                        new_data["lockerNumber"] = data[key];
                    }
                    else if (newKey == "lockerOperationDateTime") {
                        new_data["lockerOperationDateTime"] = data[key];
                    }
                    else if (newKey == "lockerOperationInTime") {
                        new_data["lockerOperationInTime"] = data[key];
                    }
                    else if (newKey == "lockerOperationOutTime") {
                        new_data["lockerOperationOutTime"] = data[key];
                    }
                    else {
                        //new_data[newKey] = data[key];
                    }
                }
                this._data.postData("/locker/addLockerOperations", new_data).subscribe(function (data) {
                    _this.successMessage = true;
                    _this.ref.markForCheck();
                });
            }
            this.ref.markForCheck();
        }
    };
    //Add Locker:
    LockerOperationsComponent.prototype.addLocker = function () {
        var _this = this;
        if (Object.keys(this.model).length) {
            if (this._data.mode == "local") {
            }
            else {
                var new_data = {};
                new_data["accountNum"] = "";
                new_data["lockerNumber"] = "";
                new_data["lockerAssignedBy"] = "";
                var data = this.model;
                var keyLen = 0;
                for (var key in data) {
                    var newKey = key;
                    if (newKey == "accountNum") {
                        new_data["accountNum"] = data[key];
                    }
                    else if (newKey == "lockerNumber") {
                        new_data["lockerNumber"] = data[key];
                    }
                    else if (newKey == "lockerAssignedBy") {
                        new_data["lockerAssignedBy"] = data[key];
                    }
                    else {
                        //new_data[newKey] = data[key];
                    }
                }
                this._data.postData("/locker/addLocker", new_data).subscribe(function (data) {
                    _this.successMessage = true;
                    _this.ref.markForCheck();
                });
            }
            this.ref.markForCheck();
        }
    };
    LockerOperationsComponent.prototype.showLockerReport = function () {
        var _this = this;
        var tempValue = this.reportLockerForm.value;
        var bDate = new Date(tempValue.lockerOptDate);
        var temp = this.convert(bDate);
        var url = "/locker/reportlocker/?lockerNum=" + tempValue.lockerNumber + "&lockerOperationDate=" + temp;
        this._data.getReportLocker(url).subscribe(function (data) {
            _this.reportLockerData = data;
            _this.showTable = true;
            _this.ref.markForCheck();
        });
    };
    LockerOperationsComponent.prototype.convert = function (str) {
        var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        return [mnth, day, date.getFullYear(),].join("/");
    };
    return LockerOperationsComponent;
}());
LockerOperationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-locker-operations',
        template: __webpack_require__(196),
        styles: [__webpack_require__(184)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__["a" /* AppDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], LockerOperationsComponent);

var _a, _b, _c;
//# sourceMappingURL=locker-operations.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, activatedRoute, authenticationService, userService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.model = {};
        this.loading = false;
        this.error = '';
        this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (result) {
            _this.loading = false;
            if (result) {
                _this.userService.login(result);
                _this.navigateAfterSuccess();
            }
            else {
                _this.error = 'Username or password is incorrect';
            }
        }, function (error) {
            _this.error = 'Username or password is incorrect';
            _this.loading = false;
        });
    };
    LoginComponent.prototype.navigateAfterSuccess = function () {
        if (this.redirectUrl) {
            this.router.navigateByUrl(this.redirectUrl);
        }
        else {
            this.router.navigate(['/']);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__(197),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppDataService = (function () {
    function AppDataService(http) {
        this.http = http;
        this.mode = "product";
    }
    AppDataService.prototype.getUser = function () {
        return this.http.get('/user').map(function (res) { return res.json(); });
    };
    AppDataService.prototype.getUsers = function () {
        return this.http.get('/user').map(function (res) { return res.json(); });
    };
    AppDataService.prototype.postData = function (url, data) {
        console.log(data);
        var response = this.http.post(url, data).map(function (res) { return res; });
        return response;
    };
    AppDataService.prototype.updateData = function (url, data) {
        console.log('updated data', data);
        var response = this.http.put(url, data).map(function (res) { return res; });
        return response;
    };
    AppDataService.prototype.deleteData = function (url, data) {
        console.log(data);
        var response = this.http.delete(url).map(function (res) { return res; });
        return response;
    };
    AppDataService.prototype.getAccount = function () {
        return this.http.get('/account').map(function (res) { return res.json(); });
    };
    AppDataService.prototype.getministatement = function (url) {
        console.log("url", url);
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    // getAccounts() {
    //   return this.http.get('/accounts').map(res => res.json());
    // }
    AppDataService.prototype.getBalance = function (url) {
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    AppDataService.prototype.getCustomer = function () {
        return this.http.get('/customer').map(function (res) { return res.json(); });
    };
    AppDataService.prototype.getCustomers = function () {
        return this.http.get('/customer').map(function (res) { return res.json(); });
    };
    AppDataService.prototype.getReportLocker = function (url) {
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    AppDataService.prototype.getStatements = function (url) {
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    return AppDataService;
}());
AppDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"]) === "function" && _a || Object])
], AppDataService);

var _a;
//# sourceMappingURL=app-data.service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(_data, ref) {
        this._data = _data;
        this.ref = ref;
        this.model = {};
        this.accounts_list = [];
        this.editIndex = -1;
        this.deleteIndex = -1;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    UserComponent.prototype.onSubmit = function () {
        var _this = this;
        if (Object.keys(this.model).length) {
            if (this._data.mode == "local") {
                this.accounts_list.push(this.model);
            }
            else {
                var new_data = {};
                new_data["address"] = {};
                new_data["address"]["activeFlag"] = "";
                new_data["roleId"] = 3;
                new_data["activeFlag"] = "Y";
                var data = this.model;
                var keyLen = 0;
                for (var key in data) {
                    var newKey = key;
                    if (newKey == "buildingName") {
                        new_data["address"]["buildingName"] = data[key];
                    }
                    else if (newKey == "street") {
                        new_data["address"]["street"] = data[key];
                    }
                    else if (newKey == "city") {
                        new_data["address"]["city"] = data[key];
                    }
                    else if (newKey == "state") {
                        new_data["address"]["state"] = data[key];
                    }
                    else {
                        new_data[newKey] = data[key];
                    }
                }
                this._data.postData("/user", new_data).subscribe(function (data) {
                    _this.loadData();
                    _this.ref.markForCheck();
                });
            }
            this.model = {};
            $("#add_accounts").modal('hide');
            this.ref.markForCheck();
        }
    };
    UserComponent.prototype.ngAfterViewInit = function () {
        this.loadData();
    };
    UserComponent.prototype.loadData = function () {
        var _this = this;
        console.log("loadData");
        this._data.getUser().subscribe(function (data) {
            _this.accounts_list = data;
            _this.ref.markForCheck();
        });
    };
    UserComponent.prototype.changeAccountStatus = function (index, row) {
        var _this = this;
        if (!this.isDelete) {
            this.deleteIndex = index;
            this.deleteRow = row;
            this.isDelete = true;
            $("#deleeteConfirm").modal('show');
        }
        else {
            if (this._data.mode == "local") {
                this.accounts_list[index]['activeFlag'] = row.activeFlag == 'Y' ? 'N' : 'Y';
            }
            else {
                row.activeFlag = row.activeFlag == 'Y' ? 'N' : 'Y';
                this._data.updateData("/user/" + row['userId'], row).subscribe(function (data) {
                    _this.loadData();
                    _this.ref.markForCheck();
                });
            }
            this.deleteIndex = -1;
            this.isDelete = false;
            $("#deleeteConfirm").modal('hide');
        }
        this.ref.markForCheck();
    };
    UserComponent.prototype.editAccount = function (index, data, row) {
        var _this = this;
        if (!this.isEdit) {
            this.editIndex = index;
            this.editRow = row;
            this.isEdit = true;
            for (var key in data) {
                var newKey = "_" + key;
                if (key != "password") {
                    if (key == "address") {
                        this.model["_buildingName"] = data[key]["buildingName"];
                        this.model["_street"] = data[key]["street"];
                        this.model["_city"] = data[key]["city"];
                        this.model["_state"] = data[key]["state"];
                    }
                    else {
                        this.model[newKey] = data[key];
                    }
                }
            }
            $("#edit_accounts").modal('show');
        }
        else {
            var new_data = {};
            new_data["address"] = {};
            for (var key in data) {
                var newKey = key.substr(1);
                if (newKey != "password") {
                    if (newKey == "buildingName") {
                        new_data["address"]["buildingName"] = data[key];
                    }
                    else if (newKey == "street") {
                        new_data["address"]["street"] = data[key];
                    }
                    else if (newKey == "city") {
                        new_data["address"]["city"] = data[key];
                    }
                    else if (newKey == "state") {
                        new_data["address"]["state"] = data[key];
                    }
                    else {
                        new_data[newKey] = data[key];
                    }
                }
                else {
                    new_data['password'] = this.accounts_list[index]['password'];
                }
            }
            if (this._data.mode == "local") {
                this.accounts_list[index] = new_data;
            }
            else {
                this._data.updateData("/user/" + row['userId'], new_data).subscribe(function (data) {
                    _this.loadData();
                    _this.ref.markForCheck();
                });
            }
            this.editIndex = -1;
            this.isEdit = false;
            //this.model = {};
            $("#edit_accounts").modal('hide');
        }
        this.ref.markForCheck();
    };
    UserComponent.prototype.clearForm = function () {
        this.model = {};
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(198),
        styles: [__webpack_require__(185)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WithdrawComponent = (function () {
    function WithdrawComponent(_data, ref) {
        this._data = _data;
        this.ref = ref;
        this.model = {};
        this.successMessage = false;
    }
    WithdrawComponent.prototype.ngOnInit = function () {
    };
    WithdrawComponent.prototype.onSubmit = function () {
        var _this = this;
        if (Object.keys(this.model).length) {
            if (this._data.mode == "local") {
                console.log(this.model);
            }
            else {
                console.log(this.model);
                var new_data = {};
                new_data["accountNum"] = "";
                new_data["balance"] = "";
                var data = this.model;
                var keyLen = 0;
                for (var key in data) {
                    var newKey = key;
                    if (newKey == "accountNum") {
                        new_data["accountNum"] = data[key];
                    }
                    else if (newKey == "balance") {
                        new_data["balance"] = data[key];
                    }
                    else {
                        //new_data[newKey] = data[key];
                    }
                }
                this._data.postData("/withdraw", new_data).subscribe(function (data) {
                    console.log(data);
                    _this.successMessage = true;
                    _this.ref.markForCheck();
                });
            }
            this.ref.markForCheck();
        }
    };
    return WithdrawComponent;
}());
WithdrawComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-withdraw',
        template: __webpack_require__(199),
        styles: [__webpack_require__(186)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], WithdrawComponent);

var _a, _b;
//# sourceMappingURL=withdraw.component.js.map

/***/ })

},[254]);
//# sourceMappingURL=main.bundle.js.map