/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./notebook.svg */ "./src/notebook.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./home.svg */ "./src/home.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./today.svg */ "./src/today.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./week.svg */ "./src/week.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --margin: 2vw;\n    --prm-green: #85dccfe1;\n    --accent-green: #41a3b3;\n    --dark-orange: #e27d60;\n    --light-orange: #e8a87c;\n    --clr-warning: #FF0000;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    font-family: inherit;\n    margin: 0;\n    padding: 0;\n    max-width: 100%;\n}\n\nbody {\n    margin: 0;\n    font-family: monospace;\n    background-color: var(--prm-green);\n    display: grid;\n    grid:\n    \"header header\" auto\n    \"menu   active\" auto /\n    1fr 4fr;\n\n}\n\n\n.header {\n    grid-area: header;\n    background-color: var(--dark-orange);\n    display: flex;\n    height: 15vh;\n}\n\n.title-icon {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    margin-left: var(--margin);\n}\n\n.icon {\n    height: 8vh;\n    width: 6vw;\n    background:no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n    filter: invert(100%);\n    -webkit-filter: invert(100%);\n}\n\n.title {\n    color: white;\n    font-size: 8vh;\n    margin-left: 1vw;\n}\n\n.menu {\n    grid-area: menu;\n    background-color: var(--accent-green);\n    color: white;\n    height: 100vh;\n    margin-top: 0;\n}\n\n.menu-title {\n    padding-top: 10px;\n    margin-left: 20px;\n}\n\n.active-list {\n    font-size: 1rem;\n    font-weight: 900;\n    text-decoration: underline;\n    \n}\n\n.button:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.project-item:hover {\n    cursor: pointer;\n    transform: none;\n    opacity: 0.7\n}\n\n.menu-options {\n    padding-top: var(--margin);\n    display: grid;\n    gap: 25px;\n    list-style: none;\n    justify-content: center;\n\n}\n\n.option {\n    width: 15vw;\n    height: 5vh;\n    background-color: var(--light-orange);\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: 1.3rem;\n}\n\n.home-icon {\n    background: no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.today-icon {\n    background: no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.week-icon {\n    background: no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.projects-title {\n    margin: 20px;\n    margin-bottom: 15px;\n    font-size: 1.4rem;\n}\n\n.projects {\n    display: grid;\n    gap: 10px;\n    color: white;\n}\n\n.project-item {\n    margin-left: 35px;\n}\n\n.task-list {\n    font-size: 1.2rem;\n    line-height: 1.7;\n    list-style: circle;\n    padding-left: 1.1em;\n}\n\nform {\n    display: flex;\n    align-items: flex-end;\n    margin-top: 10px;\n}\n\n\n.btn {\n    cursor: pointer;\n    background: 0;\n    border: 0;\n    padding: 0;\n    color: inherit;\n    font-size: 1rem;\n}\n\n.btn.create {\n    font-size: 1.5rem;\n    font-weight: 900;\n    margin-right: .25rem;\n    transition: opacity 250ms ease-in;\n    margin: 0 0 3px 20px;\n    font-size: 1rem;\n    \n}\n\n.btn.task {\n    margin-left: 0;\n}\n\n.btn.create:hover {\n    opacity: 0.7;\n}\n\n.btn.delete {\n    font-weight: 700;\n    letter-spacing: 1px;\n    opacity: .7;\n    font-size: 1rem;\n    transition: color 200ms;\n}\n\n.btn.delete:hover {\n    color: var(--clr-warning)\n}\n\n.new {\n    background: transparent;\n    border: 0;\n    color: inherit;\n    border-bottom: 1px solid currentColor;\n    font-size: inherit;\n    outline: none;\n    transition: border-bottom 250ms ease-in;\n    order: 2;\n}\n\n\n.new::placeholder,\n.date::placeholder {\n    color: inherit;\n    opacity: .5;\n}\n\n.new:focus,\n.date:focus {\n    border-bottom-width: 3px;\n}\n\n.new:focus::placeholder,\n.date:focus::placeholder {\n    opacity: .2\n}\n\n.new.list,\n.new.task {\n    margin: 0 10px 0px 10px;\n    width: 15vw;\n    margin-top: 8px;\n    padding: .35em;\n}\n\n.todo-list {\n    --spacer: 2rem;\n\n    grid-area: active;\n    margin: 20px 20px 0 50px;\n}\n\n.todo-header {\n    padding: var(--spacer);\n    background-color: var(--light-orange);\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.list-title {\n    margin: 0 1rem 0 0;\n}\n\n.task-count {\n    margin: 0;\n    font-size: .85rem;\n}\n\n.todo-body {\n    padding: var(--spacer);\n    background-color: white;\n    color: var(--accent-green);\n    position: relative;\n}\n\n.new-task-creator .create {\n    color: var(--dark-orange)\n}\n\n[type=\"checkbox\"] {\n    opacity: 0;\n    position: absolute;\n}\n\n.task > * {\n    cursor: pointer;\n}\n\n.task label {\n    display: inline-flex;\n    align-items: center;\n    position: relative;\n    gap: 15px;\n}\n\n.task {\n    position: relative;\n    margin-bottom: 1.25em;\n}\n\n.task::after {\n    content:\"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    bottom: -.5em;\n    height: 1px;\n    background: currentColor;\n    opacity: .1;\n}\n\n.custom-checkbox {\n    --size: .75em;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    margin-right: var(--size);\n    border: 2px solid currentColor;\n    border-radius: 50%;\n    transform: scale(1);\n    transition: transform 200ms ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus + label .custom-checkbox{\n    transform: scale(1.2);\n    color: var(--prm-green)\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n    background: var(--accent-green);\n    border-color: var(--accent-green);\n    box-shadow: inset 0 0 0px 1px white;\n}\n\n[type=\"checkbox\"]:checked + label,\n[type=\"checkbox\"]:checked + .due {\n    opacity: 0.5;\n\n}\n\n.task label::after {\n    content: \"\";\n    position: absolute;\n    left: 2.5em;\n    right: 0;\n    top: calc(50% - 1px);\n    height: 2px;\n    background: currentColor;\n    transform: scaleX(0);\n    transform-origin: right;\n    transition: transform 150ms ease-in-out;\n}\n\n[type=\"checkbox\"]:checked + label::after {\n    transform: scaleX(1);\n    transform-origin: left;\n}\n\n\n.delete-stuff {\n    display: flex;\n    justify-content: space-evenly;\n    position: absolute;\n    width: 100%;\n    left: 0;\n    bottom: -35px;\n    color: var(--accent-green);\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;;;IAGI,sBAAsB;IACtB,oBAAoB;IACpB,SAAS;IACT,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,SAAS;IACT,sBAAsB;IACtB,kCAAkC;IAClC,aAAa;IACb;;;WAGO;;AAEX;;;AAGA;IACI,iBAAiB;IACjB,oCAAoC;IACpC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,UAAU;IACV,mEAAiD;IACjD,wBAAwB;IACxB,oBAAoB;IACpB,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,qCAAqC;IACrC,YAAY;IACZ,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,0BAA0B;;AAE9B;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,eAAe;IACf;AACJ;;AAEA;IACI,0BAA0B;IAC1B,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,uBAAuB;;AAE3B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,qCAAqC;IACrC,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,oEAA8C;AAClD;;AAEA;IACI,oEAA+C;AACnD;;AAEA;IACI,oEAA8C;AAClD;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,gBAAgB;AACpB;;;AAGA;IACI,eAAe;IACf,aAAa;IACb,SAAS;IACT,UAAU;IACV,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,oBAAoB;IACpB,iCAAiC;IACjC,oBAAoB;IACpB,eAAe;;AAEnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;IACX,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI;AACJ;;AAEA;IACI,uBAAuB;IACvB,SAAS;IACT,cAAc;IACd,qCAAqC;IACrC,kBAAkB;IAClB,aAAa;IACb,uCAAuC;IACvC,QAAQ;AACZ;;;AAGA;;IAEI,cAAc;IACd,WAAW;AACf;;AAEA;;IAEI,wBAAwB;AAC5B;;AAEA;;IAEI;AACJ;;AAEA;;IAEI,uBAAuB;IACvB,WAAW;IACX,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,cAAc;;IAEd,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,qCAAqC;IACrC,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI;AACJ;;AAEA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,aAAa;IACb,WAAW;IACX,wBAAwB;IACxB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,yBAAyB;IACzB,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;IACnB,uCAAuC;AAC3C;;AAEA;;IAEI,qBAAqB;IACrB;AACJ;;AAEA;IACI,+BAA+B;IAC/B,iCAAiC;IACjC,mCAAmC;AACvC;;AAEA;;IAEI,YAAY;;AAEhB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,oBAAoB;IACpB,WAAW;IACX,wBAAwB;IACxB,oBAAoB;IACpB,uBAAuB;IACvB,uCAAuC;AAC3C;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;AAC1B;;;AAGA;IACI,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;IAClB,WAAW;IACX,OAAO;IACP,aAAa;IACb,0BAA0B;AAC9B","sourcesContent":[":root {\n    --margin: 2vw;\n    --prm-green: #85dccfe1;\n    --accent-green: #41a3b3;\n    --dark-orange: #e27d60;\n    --light-orange: #e8a87c;\n    --clr-warning: #FF0000;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    font-family: inherit;\n    margin: 0;\n    padding: 0;\n    max-width: 100%;\n}\n\nbody {\n    margin: 0;\n    font-family: monospace;\n    background-color: var(--prm-green);\n    display: grid;\n    grid:\n    \"header header\" auto\n    \"menu   active\" auto /\n    1fr 4fr;\n\n}\n\n\n.header {\n    grid-area: header;\n    background-color: var(--dark-orange);\n    display: flex;\n    height: 15vh;\n}\n\n.title-icon {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    margin-left: var(--margin);\n}\n\n.icon {\n    height: 8vh;\n    width: 6vw;\n    background:no-repeat center url('./notebook.svg');\n    background-size: contain;\n    filter: invert(100%);\n    -webkit-filter: invert(100%);\n}\n\n.title {\n    color: white;\n    font-size: 8vh;\n    margin-left: 1vw;\n}\n\n.menu {\n    grid-area: menu;\n    background-color: var(--accent-green);\n    color: white;\n    height: 100vh;\n    margin-top: 0;\n}\n\n.menu-title {\n    padding-top: 10px;\n    margin-left: 20px;\n}\n\n.active-list {\n    font-size: 1rem;\n    font-weight: 900;\n    text-decoration: underline;\n    \n}\n\n.button:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.project-item:hover {\n    cursor: pointer;\n    transform: none;\n    opacity: 0.7\n}\n\n.menu-options {\n    padding-top: var(--margin);\n    display: grid;\n    gap: 25px;\n    list-style: none;\n    justify-content: center;\n\n}\n\n.option {\n    width: 15vw;\n    height: 5vh;\n    background-color: var(--light-orange);\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: 1.3rem;\n}\n\n.home-icon {\n    background: no-repeat center url('./home.svg');\n}\n\n.today-icon {\n    background: no-repeat center url('./today.svg');\n}\n\n.week-icon {\n    background: no-repeat center url('./week.svg');\n}\n\n.projects-title {\n    margin: 20px;\n    margin-bottom: 15px;\n    font-size: 1.4rem;\n}\n\n.projects {\n    display: grid;\n    gap: 10px;\n    color: white;\n}\n\n.project-item {\n    margin-left: 35px;\n}\n\n.task-list {\n    font-size: 1.2rem;\n    line-height: 1.7;\n    list-style: circle;\n    padding-left: 1.1em;\n}\n\nform {\n    display: flex;\n    align-items: flex-end;\n    margin-top: 10px;\n}\n\n\n.btn {\n    cursor: pointer;\n    background: 0;\n    border: 0;\n    padding: 0;\n    color: inherit;\n    font-size: 1rem;\n}\n\n.btn.create {\n    font-size: 1.5rem;\n    font-weight: 900;\n    margin-right: .25rem;\n    transition: opacity 250ms ease-in;\n    margin: 0 0 3px 20px;\n    font-size: 1rem;\n    \n}\n\n.btn.task {\n    margin-left: 0;\n}\n\n.btn.create:hover {\n    opacity: 0.7;\n}\n\n.btn.delete {\n    font-weight: 700;\n    letter-spacing: 1px;\n    opacity: .7;\n    font-size: 1rem;\n    transition: color 200ms;\n}\n\n.btn.delete:hover {\n    color: var(--clr-warning)\n}\n\n.new {\n    background: transparent;\n    border: 0;\n    color: inherit;\n    border-bottom: 1px solid currentColor;\n    font-size: inherit;\n    outline: none;\n    transition: border-bottom 250ms ease-in;\n    order: 2;\n}\n\n\n.new::placeholder,\n.date::placeholder {\n    color: inherit;\n    opacity: .5;\n}\n\n.new:focus,\n.date:focus {\n    border-bottom-width: 3px;\n}\n\n.new:focus::placeholder,\n.date:focus::placeholder {\n    opacity: .2\n}\n\n.new.list,\n.new.task {\n    margin: 0 10px 0px 10px;\n    width: 15vw;\n    margin-top: 8px;\n    padding: .35em;\n}\n\n.todo-list {\n    --spacer: 2rem;\n\n    grid-area: active;\n    margin: 20px 20px 0 50px;\n}\n\n.todo-header {\n    padding: var(--spacer);\n    background-color: var(--light-orange);\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.list-title {\n    margin: 0 1rem 0 0;\n}\n\n.task-count {\n    margin: 0;\n    font-size: .85rem;\n}\n\n.todo-body {\n    padding: var(--spacer);\n    background-color: white;\n    color: var(--accent-green);\n    position: relative;\n}\n\n.new-task-creator .create {\n    color: var(--dark-orange)\n}\n\n[type=\"checkbox\"] {\n    opacity: 0;\n    position: absolute;\n}\n\n.task > * {\n    cursor: pointer;\n}\n\n.task label {\n    display: inline-flex;\n    align-items: center;\n    position: relative;\n    gap: 15px;\n}\n\n.task {\n    position: relative;\n    margin-bottom: 1.25em;\n}\n\n.task::after {\n    content:\"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    bottom: -.5em;\n    height: 1px;\n    background: currentColor;\n    opacity: .1;\n}\n\n.custom-checkbox {\n    --size: .75em;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    margin-right: var(--size);\n    border: 2px solid currentColor;\n    border-radius: 50%;\n    transform: scale(1);\n    transition: transform 200ms ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus + label .custom-checkbox{\n    transform: scale(1.2);\n    color: var(--prm-green)\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n    background: var(--accent-green);\n    border-color: var(--accent-green);\n    box-shadow: inset 0 0 0px 1px white;\n}\n\n[type=\"checkbox\"]:checked + label,\n[type=\"checkbox\"]:checked + .due {\n    opacity: 0.5;\n\n}\n\n.task label::after {\n    content: \"\";\n    position: absolute;\n    left: 2.5em;\n    right: 0;\n    top: calc(50% - 1px);\n    height: 2px;\n    background: currentColor;\n    transform: scaleX(0);\n    transform-origin: right;\n    transition: transform 150ms ease-in-out;\n}\n\n[type=\"checkbox\"]:checked + label::after {\n    transform: scaleX(1);\n    transform-origin: left;\n}\n\n\n.delete-stuff {\n    display: flex;\n    justify-content: space-evenly;\n    position: absolute;\n    width: 100%;\n    left: 0;\n    bottom: -35px;\n    color: var(--accent-green);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home.svg":
/*!**********************!*\
  !*** ./src/home.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f873234c93d19c837bd8.svg";

/***/ }),

/***/ "./src/notebook.svg":
/*!**************************!*\
  !*** ./src/notebook.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "829131dbe68a15408157.svg";

/***/ }),

/***/ "./src/today.svg":
/*!***********************!*\
  !*** ./src/today.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "026599f9eca46bc8f47e.svg";

/***/ }),

/***/ "./src/week.svg":
/*!**********************!*\
  !*** ./src/week.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b3a8c5393486225ddc6.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


// Assign DOM variables
const projectsContainer = document.querySelector('[data-projects]');
const newProjectForm = document.querySelector('[data-new-project-form');
const newProjectInput = document.querySelector('[data-new-project-input]');
const taskProjectTitle = document.querySelector('[data-project-title]');
const tasksContainer = document.querySelector('[data-tasks-container]');
const taskCount = document.querySelector('[data-task-counter]');
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const newTaskDateInput = document.querySelector('[data-new-task-date-input]');
let selectedProjectId;


// Initialize projects folder
const projects = [];

// Select project when clicked
projectsContainer.addEventListener('click', e => {
        if (e.target.tagName.toLowerCase() === 'li') {

            // Determine id of clicked project
            selectedProjectId = e.target.dataset.projectId;

            // Find and assign project
            const project = findProjectById(projects, selectedProjectId)
            console.log(project);
 
            // Assign name of project and task list count
            assignProjectList(project.name, project.tasks.length);
            render();
        }
    }
)

// Create new project when form submitted
newProjectForm.addEventListener('submit', e => {
    e.preventDefault();
    const projectName = newProjectInput.value;
    if (projectName == null || projectName === '') return;
    const project = createProject(projectName)
    newProjectInput.value = null;
    projects.push(project);
    render();

});

// Create new task when form submitted
newTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    const taskName = newTaskInput.value;
    const taskDue = newTaskDateInput.value;
    if (taskName == null || taskName === '') return;
    const task = createTask(taskName, taskDue)
    newTaskInput.value = null;
    newTaskDateInput.value = null
    const project = findProjectById(projects, selectedProjectId);
    project.tasks.push(task);
    console.log(project.tasks)
    render();

});

// Initialize new projects with unique id
function createProject(name) {
    return { id: Date.now().toString(), name: name, tasks: []}
}

// Assign project name and task count to task list
function assignProjectList(projectName, taskNumber) {
    
    // Clear tasks
    clearElement(tasksContainer);

    // Assign project title to list
    taskProjectTitle.innerText = projectName;

    // Count tasks in project
    if (taskNumber === 1) {
        taskCount.innerText = `${taskNumber} task remaining`
    } else {
        taskCount.innerText = `${taskNumber} tasks remaining`
    }




}

function findProjectById(projects, projectId) {
    const project = projects.find(project => project.id === projectId);
    return project;

}

function createTask(taskName, due) {
    return { id: Date.now().toString(), name: taskName, due: due };
}

// Render screen
function render() {

    // Clear list of projects
    clearElement(projectsContainer);

    // Add each project to projectList
    projects.forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.dataset.projectId = project.id;
        projectElement.classList.add('project-item');
        projectElement.innerText = project.name;
        if (projectElement.dataset.projectId === selectedProjectId) {
            projectElement.classList.add('active-list')
        };
        projectsContainer.appendChild(projectElement);
    })

    // Create task list

}


// Clear container of all children
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

render()
assignProjectList('shoop doop', 0);
console.log(createTask('do dishes', '11/22/63'))


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbm90ZWJvb2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9ob21lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vdG9kYXkuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi93ZWVrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1tYXJnaW46IDJ2dztcXG4gICAgLS1wcm0tZ3JlZW46ICM4NWRjY2ZlMTtcXG4gICAgLS1hY2NlbnQtZ3JlZW46ICM0MWEzYjM7XFxuICAgIC0tZGFyay1vcmFuZ2U6ICNlMjdkNjA7XFxuICAgIC0tbGlnaHQtb3JhbmdlOiAjZThhODdjO1xcbiAgICAtLWNsci13YXJuaW5nOiAjRkYwMDAwO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJtLWdyZWVuKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiIGF1dG9cXG4gICAgXFxcIm1lbnUgICBhY3RpdmVcXFwiIGF1dG8gL1xcbiAgICAxZnIgNGZyO1xcblxcbn1cXG5cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbn1cXG5cXG4udGl0bGUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbik7XFxufVxcblxcbi5pY29uIHtcXG4gICAgaGVpZ2h0OiA4dmg7XFxuICAgIHdpZHRoOiA2dnc7XFxuICAgIGJhY2tncm91bmQ6bm8tcmVwZWF0IGNlbnRlciB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbiAgICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogOHZoO1xcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGdyaWQtYXJlYTogbWVudTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWdyZWVuKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLmFjdGl2ZS1saXN0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgXFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBvcGFjaXR5OiAwLjdcXG59XFxuXFxuLm1lbnUtb3B0aW9ucyB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1tYXJnaW4pO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5cXG4ub3B0aW9uIHtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1vcmFuZ2UpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uaG9tZS1pY29uIHtcXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4udG9kYXktaWNvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuLndlZWstaWNvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuLnByb2plY3RzLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS43O1xcbiAgICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxuICAgIHBhZGRpbmctbGVmdDogMS4xZW07XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcblxcbi5idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmJ0bi5jcmVhdGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbjtcXG4gICAgbWFyZ2luOiAwIDAgM3B4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgXFxufVxcblxcbi5idG4udGFzayB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4uYnRuLmNyZWF0ZTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmJ0bi5kZWxldGUge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBvcGFjaXR5OiAuNztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcXG59XFxuXFxuLmJ0bi5kZWxldGU6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXdhcm5pbmcpXFxufVxcblxcbi5uZXcge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDI1MG1zIGVhc2UtaW47XFxuICAgIG9yZGVyOiAyO1xcbn1cXG5cXG5cXG4ubmV3OjpwbGFjZWhvbGRlcixcXG4uZGF0ZTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi5uZXc6Zm9jdXMsXFxuLmRhdGU6Zm9jdXMge1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XFxufVxcblxcbi5uZXc6Zm9jdXM6OnBsYWNlaG9sZGVyLFxcbi5kYXRlOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgIG9wYWNpdHk6IC4yXFxufVxcblxcbi5uZXcubGlzdCxcXG4ubmV3LnRhc2sge1xcbiAgICBtYXJnaW46IDAgMTBweCAwcHggMTBweDtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgcGFkZGluZzogLjM1ZW07XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICAtLXNwYWNlcjogMnJlbTtcXG5cXG4gICAgZ3JpZC1hcmVhOiBhY3RpdmU7XFxuICAgIG1hcmdpbjogMjBweCAyMHB4IDAgNTBweDtcXG59XFxuXFxuLnRvZG8taGVhZGVyIHtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtb3JhbmdlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xcbn1cXG5cXG4udGFzay1jb3VudCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAuODVyZW07XFxufVxcblxcbi50b2RvLWJvZHkge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3IgLmNyZWF0ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSlcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi50YXNrID4gKiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2sgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi50YXNrIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1ZW07XFxufVxcblxcbi50YXNrOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6XFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogLS41ZW07XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICAgIG9wYWNpdHk6IC4xO1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgLS1zaXplOiAuNzVlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrOmhvdmVyIC5jdXN0b20tY2hlY2tib3gsXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94e1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIGNvbG9yOiB2YXIoLS1wcm0tZ3JlZW4pXFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyZWVuKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IDFweCB3aGl0ZTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsLFxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyAuZHVlIHtcXG4gICAgb3BhY2l0eTogMC41O1xcblxcbn1cXG5cXG4udGFzayBsYWJlbDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAyLjVlbTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAxcHgpO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbn1cXG5cXG5cXG4uZGVsZXRlLXN0dWZmIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogLTM1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7OztJQUdJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiOzs7V0FHTzs7QUFFWDs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixtRUFBaUQ7SUFDakQsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMEJBQTBCOztBQUU5Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGFB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QjtJQUNwQix1QkFBdUI7SUFDdkIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTztJQUNQLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLW1hcmdpbjogMnZ3O1xcbiAgICAtLXBybS1ncmVlbjogIzg1ZGNjZmUxO1xcbiAgICAtLWFjY2VudC1ncmVlbjogIzQxYTNiMztcXG4gICAgLS1kYXJrLW9yYW5nZTogI2UyN2Q2MDtcXG4gICAgLS1saWdodC1vcmFuZ2U6ICNlOGE4N2M7XFxuICAgIC0tY2xyLXdhcm5pbmc6ICNGRjAwMDA7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm0tZ3JlZW4pO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCIgYXV0b1xcbiAgICBcXFwibWVudSAgIGFjdGl2ZVxcXCIgYXV0byAvXFxuICAgIDFmciA0ZnI7XFxuXFxufVxcblxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxufVxcblxcbi50aXRsZS1pY29uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luKTtcXG59XFxuXFxuLmljb24ge1xcbiAgICBoZWlnaHQ6IDh2aDtcXG4gICAgd2lkdGg6IDZ2dztcXG4gICAgYmFja2dyb3VuZDpuby1yZXBlYXQgY2VudGVyIHVybCgnLi9ub3RlYm9vay5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDh2aDtcXG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLm1lbnUge1xcbiAgICBncmlkLWFyZWE6IG1lbnU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLm1lbnUtdGl0bGUge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5hY3RpdmUtbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIFxcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgb3BhY2l0eTogMC43XFxufVxcblxcbi5tZW51LW9wdGlvbnMge1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tbWFyZ2luKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuLm9wdGlvbiB7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtb3JhbmdlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmhvbWUtaWNvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgdXJsKCcuL2hvbWUuc3ZnJyk7XFxufVxcblxcbi50b2RheS1pY29uIHtcXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciB1cmwoJy4vdG9kYXkuc3ZnJyk7XFxufVxcblxcbi53ZWVrLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIHVybCgnLi93ZWVrLnN2ZycpO1xcbn1cXG5cXG4ucHJvamVjdHMtdGl0bGUge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICAgIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjFlbTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuXFxuLmJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYnRuLmNyZWF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC4yNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcbiAgICBtYXJnaW46IDAgMCAzcHggMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBcXG59XFxuXFxuLmJ0bi50YXNrIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5idG4uY3JlYXRlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4uYnRuLmRlbGV0ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIG9wYWNpdHk6IC43O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zO1xcbn1cXG5cXG4uYnRuLmRlbGV0ZTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItd2FybmluZylcXG59XFxuXFxuLm5ldyB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMjUwbXMgZWFzZS1pbjtcXG4gICAgb3JkZXI6IDI7XFxufVxcblxcblxcbi5uZXc6OnBsYWNlaG9sZGVyLFxcbi5kYXRlOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLm5ldzpmb2N1cyxcXG4uZGF0ZTpmb2N1cyB7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcXG59XFxuXFxuLm5ldzpmb2N1czo6cGxhY2Vob2xkZXIsXFxuLmRhdGU6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgb3BhY2l0eTogLjJcXG59XFxuXFxuLm5ldy5saXN0LFxcbi5uZXcudGFzayB7XFxuICAgIG1hcmdpbjogMCAxMHB4IDBweCAxMHB4O1xcbiAgICB3aWR0aDogMTV2dztcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgICBwYWRkaW5nOiAuMzVlbTtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICAgIC0tc3BhY2VyOiAycmVtO1xcblxcbiAgICBncmlkLWFyZWE6IGFjdGl2ZTtcXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMCA1MHB4O1xcbn1cXG5cXG4udG9kby1oZWFkZXIge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1vcmFuZ2UpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgICBtYXJnaW46IDAgMXJlbSAwIDA7XFxufVxcblxcbi50YXNrLWNvdW50IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IC44NXJlbTtcXG59XFxuXFxuLnRvZG8tYm9keSB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWdyZWVuKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubmV3LXRhc2stY3JlYXRvciAuY3JlYXRlIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKVxcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnRhc2sgPiAqIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcXG59XFxuXFxuLnRhc2s6OmFmdGVyIHtcXG4gICAgY29udGVudDpcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAtLjVlbTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXG4gICAgb3BhY2l0eTogLjE7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgICAtLXNpemU6IC43NWVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiB2YXIoLS1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2s6aG92ZXIgLmN1c3RvbS1jaGVja2JveCxcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpmb2N1cyArIGxhYmVsIC5jdXN0b20tY2hlY2tib3h7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgY29sb3I6IHZhcigtLXBybS1ncmVlbilcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIC5jdXN0b20tY2hlY2tib3gge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggMXB4IHdoaXRlO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwsXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIC5kdWUge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuXFxufVxcblxcbi50YXNrIGxhYmVsOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDIuNWVtO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcblxcblxcbi5kZWxldGUtc3R1ZmYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAtMzVweDtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vIEFzc2lnbiBET00gdmFyaWFibGVzXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3RzXScpO1xuY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctcHJvamVjdC1mb3JtJyk7XG5jb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctcHJvamVjdC1pbnB1dF0nKTtcbmNvbnN0IHRhc2tQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0LXRpdGxlXScpO1xuY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrcy1jb250YWluZXJdJyk7XG5jb25zdCB0YXNrQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrLWNvdW50ZXJdJyk7XG5jb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy10YXNrLWZvcm1dJyk7XG5jb25zdCBuZXdUYXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctdGFzay1pbnB1dF0nKTtcbmNvbnN0IG5ld1Rhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctdGFzay1kYXRlLWlucHV0XScpO1xubGV0IHNlbGVjdGVkUHJvamVjdElkO1xuXG5cbi8vIEluaXRpYWxpemUgcHJvamVjdHMgZm9sZGVyXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4vLyBTZWxlY3QgcHJvamVjdCB3aGVuIGNsaWNrZWRcbnByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdsaScpIHtcblxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIGlkIG9mIGNsaWNrZWQgcHJvamVjdFxuICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJZDtcblxuICAgICAgICAgICAgLy8gRmluZCBhbmQgYXNzaWduIHByb2plY3RcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBmaW5kUHJvamVjdEJ5SWQocHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gXG4gICAgICAgICAgICAvLyBBc3NpZ24gbmFtZSBvZiBwcm9qZWN0IGFuZCB0YXNrIGxpc3QgY291bnRcbiAgICAgICAgICAgIGFzc2lnblByb2plY3RMaXN0KHByb2plY3QubmFtZSwgcHJvamVjdC50YXNrcy5sZW5ndGgpO1xuICAgICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG4pXG5cbi8vIENyZWF0ZSBuZXcgcHJvamVjdCB3aGVuIGZvcm0gc3VibWl0dGVkXG5uZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWU7XG4gICAgaWYgKHByb2plY3ROYW1lID09IG51bGwgfHwgcHJvamVjdE5hbWUgPT09ICcnKSByZXR1cm47XG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpXG4gICAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gbnVsbDtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHJlbmRlcigpO1xuXG59KTtcblxuLy8gQ3JlYXRlIG5ldyB0YXNrIHdoZW4gZm9ybSBzdWJtaXR0ZWRcbm5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXNrTmFtZSA9IG5ld1Rhc2tJbnB1dC52YWx1ZTtcbiAgICBjb25zdCB0YXNrRHVlID0gbmV3VGFza0RhdGVJbnB1dC52YWx1ZTtcbiAgICBpZiAodGFza05hbWUgPT0gbnVsbCB8fCB0YXNrTmFtZSA9PT0gJycpIHJldHVybjtcbiAgICBjb25zdCB0YXNrID0gY3JlYXRlVGFzayh0YXNrTmFtZSwgdGFza0R1ZSlcbiAgICBuZXdUYXNrSW5wdXQudmFsdWUgPSBudWxsO1xuICAgIG5ld1Rhc2tEYXRlSW5wdXQudmFsdWUgPSBudWxsXG4gICAgY29uc3QgcHJvamVjdCA9IGZpbmRQcm9qZWN0QnlJZChwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQpO1xuICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRhc2tzKVxuICAgIHJlbmRlcigpO1xuXG59KTtcblxuLy8gSW5pdGlhbGl6ZSBuZXcgcHJvamVjdHMgd2l0aCB1bmlxdWUgaWRcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICAgIHJldHVybiB7IGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksIG5hbWU6IG5hbWUsIHRhc2tzOiBbXX1cbn1cblxuLy8gQXNzaWduIHByb2plY3QgbmFtZSBhbmQgdGFzayBjb3VudCB0byB0YXNrIGxpc3RcbmZ1bmN0aW9uIGFzc2lnblByb2plY3RMaXN0KHByb2plY3ROYW1lLCB0YXNrTnVtYmVyKSB7XG4gICAgXG4gICAgLy8gQ2xlYXIgdGFza3NcbiAgICBjbGVhckVsZW1lbnQodGFza3NDb250YWluZXIpO1xuXG4gICAgLy8gQXNzaWduIHByb2plY3QgdGl0bGUgdG8gbGlzdFxuICAgIHRhc2tQcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XG5cbiAgICAvLyBDb3VudCB0YXNrcyBpbiBwcm9qZWN0XG4gICAgaWYgKHRhc2tOdW1iZXIgPT09IDEpIHtcbiAgICAgICAgdGFza0NvdW50LmlubmVyVGV4dCA9IGAke3Rhc2tOdW1iZXJ9IHRhc2sgcmVtYWluaW5nYFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tDb3VudC5pbm5lclRleHQgPSBgJHt0YXNrTnVtYmVyfSB0YXNrcyByZW1haW5pbmdgXG4gICAgfVxuXG5cblxuXG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0QnlJZChwcm9qZWN0cywgcHJvamVjdElkKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICAgIHJldHVybiBwcm9qZWN0O1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFza05hbWUsIGR1ZSkge1xuICAgIHJldHVybiB7IGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksIG5hbWU6IHRhc2tOYW1lLCBkdWU6IGR1ZSB9O1xufVxuXG4vLyBSZW5kZXIgc2NyZWVuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG5cbiAgICAvLyBDbGVhciBsaXN0IG9mIHByb2plY3RzXG4gICAgY2xlYXJFbGVtZW50KHByb2plY3RzQ29udGFpbmVyKTtcblxuICAgIC8vIEFkZCBlYWNoIHByb2plY3QgdG8gcHJvamVjdExpc3RcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHByb2plY3RFbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG4gICAgICAgIHByb2plY3RFbGVtZW50LmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgaWYgKHByb2plY3RFbGVtZW50LmRhdGFzZXQucHJvamVjdElkID09PSBzZWxlY3RlZFByb2plY3RJZCkge1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKVxuICAgICAgICB9O1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gICAgfSlcblxuICAgIC8vIENyZWF0ZSB0YXNrIGxpc3RcblxufVxuXG5cbi8vIENsZWFyIGNvbnRhaW5lciBvZiBhbGwgY2hpbGRyZW5cbmZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5yZW5kZXIoKVxuYXNzaWduUHJvamVjdExpc3QoJ3Nob29wIGRvb3AnLCAwKTtcbmNvbnNvbGUubG9nKGNyZWF0ZVRhc2soJ2RvIGRpc2hlcycsICcxMS8yMi82MycpKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=