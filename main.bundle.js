webpackJsonp([1,4],{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "h1 {\n    margin-bottom: 50px;\n    text-align: center;\n}\n#container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: auto;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n\n<div id=\"container\">\n  <app-child1></app-child1>\n\n  <app-child2></app-child2>\n\n  <app-child3></app-child3>\n</div>"

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>child 1 data (global service)</h1>\n  <table>\n    <tr *ngFor=\"let name of names\">\n      <td>\n        <input type=\"text\" [(ngModel)]=\"name.name\" />\n      </td>\n      <td>\n        {{name.name}}\n      </td>\n    </tr>\n  </table>\n\n  <h1>child 2 data (local service)</h1>\n  <table>\n    <tr *ngFor=\"let name of ages\">\n      <td>\n        <input type=\"text\" [(ngModel)]=\"name.age\" />\n      </td>\n      <td>\n        {{name.age}}\n      </td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <h1>child 2 data (global service)</h1>\n  <table>\n    <tr *ngFor=\"let name of names\">\n      <td>\n        <input type=\"text\" [(ngModel)]=\"name.name\" />\n      </td>\n      <td>\n        {{name.name}}\n      </td>\n    </tr>\n  </table>\n\n  <h1>child 2 data (local service)</h1>\n  <table>\n    <tr *ngFor=\"let name of ages\">\n      <td>\n        <input type=\"text\" [(ngModel)]=\"name.age\" />\n      </td>\n      <td>\n        {{name.age}}\n      </td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <h1>child 3 data (global service)</h1>\n  <table>\n    <tr *ngFor=\"let name of names\">\n      <td>\n        <input type=\"text\" [(ngModel)]=\"name.name\" />\n      </td>\n      <td>\n        {{name.name}}\n      </td>\n    </tr>\n  </table>\n\n  <h1>child 3 (local service) data</h1>\n\n  <table>\n    <tr *ngFor=\"let name of ages\">\n      <td>\n        <input type=\"text\" [(ngModel)]=\"name.age\" />\n      </td>\n      <td>\n        {{name.age}}\n      </td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_model_mock_test_list__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalService = (function () {
    function GlobalService() {
        console.log("global created!");
    }
    GlobalService.prototype.getNames = function () {
        return __WEBPACK_IMPORTED_MODULE_1_app_model_mock_test_list__["a" /* Names */];
    };
    return GlobalService;
}());
GlobalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GlobalService);

//# sourceMappingURL=global.service.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_model_mock_age_list__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalService = (function () {
    function LocalService() {
        this.ages = [];
        console.log("local created!");
    }
    LocalService.prototype.getAges = function () {
        this.ages = JSON.parse(JSON.stringify(__WEBPACK_IMPORTED_MODULE_1_app_model_mock_age_list__["a" /* Ages */]));
        return this.ages;
    };
    return LocalService;
}());
LocalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LocalService);

//# sourceMappingURL=local.service.js.map

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 71;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(88);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_global_global_service__ = __webpack_require__(16);
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
    function AppComponent(global) {
        this.names = global.getNames();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.title = 'app works!';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(147),
        styles: [__webpack_require__(142)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_global_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_global_global_service__["a" /* GlobalService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_global_global_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_child1_child1_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_child2_child2_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_child3_child3_component__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_child1_child1_component__["a" /* Child1Component */],
            __WEBPACK_IMPORTED_MODULE_7__components_child2_child2_component__["a" /* Child2Component */],
            __WEBPACK_IMPORTED_MODULE_8__components_child3_child3_component__["a" /* Child3Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5_app_services_global_global_service__["a" /* GlobalService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_global_global_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_local_local_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Child1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Child1Component = (function () {
    function Child1Component(global, local) {
        this.names = global.getNames();
        this.ages = local.getAges();
    }
    Child1Component.prototype.ngOnInit = function () {
    };
    return Child1Component;
}());
Child1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-child1',
        template: __webpack_require__(148),
        styles: [__webpack_require__(143)],
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_services_local_local_service__["a" /* LocalService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_global_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_global_global_service__["a" /* GlobalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_local_local_service__["a" /* LocalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_local_local_service__["a" /* LocalService */]) === "function" && _b || Object])
], Child1Component);

var _a, _b;
//# sourceMappingURL=child1.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_local_local_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_global_global_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Child2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Child2Component = (function () {
    function Child2Component(local, global) {
        this.ages = local.getAges();
        this.names = global.getNames();
    }
    Child2Component.prototype.ngOnInit = function () {
    };
    return Child2Component;
}());
Child2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-child2',
        template: __webpack_require__(149),
        styles: [__webpack_require__(144)],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_local_local_service__["a" /* LocalService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_local_local_service__["a" /* LocalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_local_local_service__["a" /* LocalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_global_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_global_global_service__["a" /* GlobalService */]) === "function" && _b || Object])
], Child2Component);

var _a, _b;
//# sourceMappingURL=child2.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_local_local_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_global_global_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Child3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Child3Component = (function () {
    function Child3Component(local, global) {
        this.ages = local.getAges();
        this.names = global.getNames();
    }
    Child3Component.prototype.ngOnInit = function () {
    };
    return Child3Component;
}());
Child3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-child3',
        template: __webpack_require__(150),
        styles: [__webpack_require__(145)],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_local_local_service__["a" /* LocalService */]] //service injected locally
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_local_local_service__["a" /* LocalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_local_local_service__["a" /* LocalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_global_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_global_global_service__["a" /* GlobalService */]) === "function" && _b || Object])
], Child3Component);

var _a, _b;
//# sourceMappingURL=child3.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_mock_age__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ages; });

var Ages = [
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_age__["a" /* Age */]("Age1"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_age__["a" /* Age */]("Age2"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_age__["a" /* Age */]("Age3"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_age__["a" /* Age */]("Age4"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_age__["a" /* Age */]("Age5"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_age__["a" /* Age */]("Age6"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_age__["a" /* Age */]("Age7"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_age__["a" /* Age */]("Age8"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_age__["a" /* Age */]("Age9"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_age__["a" /* Age */]("Age10")
];
//# sourceMappingURL=age-list.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Age; });
var Age = (function () {
    function Age(age) {
        this.age = age;
    }
    return Age;
}());

//# sourceMappingURL=age.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_mock_test__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Names; });

var Names = [
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_test__["a" /* Name */]("name1"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_test__["a" /* Name */]("name2"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_test__["a" /* Name */]("name3"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_test__["a" /* Name */]("name4"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_test__["a" /* Name */]("name5"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_test__["a" /* Name */]("name6"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_test__["a" /* Name */]("name7"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_test__["a" /* Name */]("name8"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_test__["a" /* Name */]("name9"),
    new __WEBPACK_IMPORTED_MODULE_0__model_mock_test__["a" /* Name */]("name10")
];
//# sourceMappingURL=test-list.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Name; });
var Name = (function () {
    function Name(name) {
        this.name = name;
    }
    return Name;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 88:
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

/***/ })

},[175]);
//# sourceMappingURL=main.bundle.js.map